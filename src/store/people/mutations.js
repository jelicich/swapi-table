import { SET_PEOPLE, ADD_PEOPLE } from "./types";

export default {
  [SET_PEOPLE](state, payload) {
    state.people = payload;
  },

  [ADD_PEOPLE](state, payload) {
    state.people = [...state.people, ...payload];
  },
};
