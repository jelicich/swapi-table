import Vue from "vue";
import axios from "axios";

const ERROR_MESSAGE = "Some error occurred in our server:";
const API_LIMIT = 10;
const PAGE_OFFSET = 2;

async function _performAllRequests(endpoint, params, pages) {
  const pagesArray = Array.from({ length: pages }, (v, i) => i + PAGE_OFFSET);
  const allPromises = pagesArray.map(async (page) => {
    return await this.get(endpoint, { ...params, page });
  });
  return await Promise.all(allPromises);
}

const RestService = {
  /**
   * Get request to the given endpoint
   * @param {string} endpoint
   * @param {object} params
   * @returns {object} request results
   */
  async get(endpoint, params) {
    const headers = this.getHeaders();
    try {
      const response = await axios.get(
        `${process.env.VUE_APP_API_URL}/${endpoint}/`,
        { params, headers }
      );
      if (response.status === 200) {
        return response;
      } else {
        throw response.status;
      }
    } catch (error) {
      Vue.prototype.$errors = `${ERROR_MESSAGE} ${error}`;
    }
  },

  /**
   * Get request to the given endpoint, will perform a new request
   * as long as there are more items to retrieve
   * @param {string} endpoint
   * @param {object} params
   * @returns {Array} request results
   */
  async getAll_old(endpoint, params) {
    let hasNext = true;
    let page = 1;
    let results = [];
    while (hasNext) {
      const response = await this.get(endpoint, { ...params, page: page });
      if (response) {
        results = [...results, ...response.data.results];
        hasNext = !!response.data.next;
        page++;
      } else {
        hasNext = false;
      }
    }
    return results;
  },

  /**
   * Get request to the given endpoint, will perform all requests
   * needed to get all the items at once.
   * @param {string} endpoint
   * @param {object} params
   * @returns {Array} request results
   */
  async getAll(endpoint, params) {
    const response = await this.get(endpoint, { ...params });
    let results = response.data.results;

    if (response.data.count > API_LIMIT) {
      const pages = Math.ceil(response.data.count / API_LIMIT) - 1; // we already have the 1st
      const resultAll = await _performAllRequests.call(
        this,
        endpoint,
        params,
        pages
      );
      resultAll.forEach((pageResult) => {
        results = pageResult
          ? [...results, ...pageResult.data.results]
          : results;
      });
    }

    return results;
  },

  /**
   * Get request to the given url
   * @param {string} endpoint
   * @returns {Array} request results
   */
  async getUrl(url) {
    const headers = this.getHeaders();
    try {
      const response = await axios.get(url, { headers });
      if (response.status === 200) {
        return response;
      } else {
        throw response.status;
      }
    } catch (error) {
      Vue.prototype.$errors = `${ERROR_MESSAGE} ${error}`;
    }
  },

  /**
   * Headers getter
   * @returns {object}
   */
  getHeaders() {
    return {
      "Content-Type": "application/json",
    };
  },
};

export default RestService;
