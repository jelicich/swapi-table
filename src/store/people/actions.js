import PeopleService from "@/services/People.service";
import { ADD_PEOPLE } from "./types";

async function requestAllPeople({ commit }) {
  let hasNext = true;
  let page = 1;
  while (hasNext) {
    const response = await PeopleService.getPeople({ page: page });
    if (response) {
      commit(ADD_PEOPLE, response.data.results);
      hasNext = !!response.data.next;
      page++;
    } else {
      hasNext = false;
    }
  }
}

export default {
  requestAllPeople,
};
