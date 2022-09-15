import Vue from "vue";
import Vuex from "vuex";
import peopleModule from "@/store/people";
import storeConstants from "@/constants/store";

const { MODULES } = storeConstants;

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    [MODULES.PEOPLE_MODULE]: peopleModule,
  },
});

export default store;
