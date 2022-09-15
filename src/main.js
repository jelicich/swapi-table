import Vue from "vue";
import App from "./App.vue";
import Loading from "@/directives/Loading/Loading.directive";
import router from "./router";
import store from "@/store";
import "minireset.css/minireset.min.css";
import "@/styles/styles.scss";

Vue.config.productionTip = false;
Vue.directive("loading", Loading);

const errors = Vue.observable({ errors: {} });
Object.defineProperty(Vue.prototype, "$errors", {
  get() {
    return errors.errors;
  },

  set(value) {
    errors.errors = value;
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
