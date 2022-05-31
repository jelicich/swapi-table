import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/views/HomePage.vue";
import PlanetInformation from "@/components/PlanetInformation.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: `${process.env.BASE_URL}/`,
    name: "home",
    component: HomePage,
    children: [
      {
        path: "planet/:planet",
        name: "planet",
        component: PlanetInformation,
        props: true,
      },
    ],
  },
  {
    // 404
    path: "*",
    redirect: `${process.env.BASE_URL}/`,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
