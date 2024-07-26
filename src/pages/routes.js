import { createRouter } from "vue-router";
import HomePage from "./home/HomePage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
];

export default function (history) {
  return createRouter({
    history,
    routes,
  });
}
