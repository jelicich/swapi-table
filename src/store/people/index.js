import initialState from "@/store/people/initialState";
import actions from "@/store/people/actions";
import getters from "@/store/people/getters";
import mutations from "@/store/people/mutations";

export default {
  namespaced: true,
  state: initialState(),
  getters,
  actions,
  mutations,
};
