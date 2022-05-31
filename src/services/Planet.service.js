import RestService from "@/services/Rest.service";

let _map = null;
let _planets = null;

const PlanetService = {
  /**
   * Get all planets. Will return previously saved
   * request if available
   * @returns {Array}
   */
  async getAllPlanets() {
    if (!_planets) {
      _planets = await RestService.getAll("planets");
    }
    return _planets;
  },

  /**
   * Get the information of the given planet. Will get
   * the information from previous request if available
   * @param {string} name planet name
   * @returns {object}
   */
  async getPlanetInfo(name) {
    const map = await this.getPlanetsMap();
    const url = Object.keys(map).find((key) => {
      return map[key] === name;
    });

    let planetInfo = null;
    if (!_planets) {
      const response = await RestService.getUrl(url);
      planetInfo = response.data;
    } else {
      planetInfo = _planets.find((planet) => planet.url === url);
    }
    return planetInfo;
  },

  /**
   * Get all planets information and creates a map to link
   * name and url. If available will use stored data
   * @returns {object}
   */
  async getPlanetsMap() {
    if (!_map) {
      const planets = await this.getAllPlanets();
      const map = {};
      planets.forEach((planet) => {
        map[planet.url] = planet.name;
      });
      _map = map;
    }
    return _map;
  },
};

export default PlanetService;
