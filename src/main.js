import { createApp } from "vue";
import { VueFire, VueFireAuth } from "vuefire";
import { firebaseApp } from "./firebase.js";
import { createWebHistory } from "vue-router";
import { createPinia } from "pinia";

import createRouter from "./pages/routes.js";

import "./style.css";
import App from "./App.vue";

const store = createPinia();
const router = createRouter(createWebHistory());

createApp(App)
  .use(router)
  .use(store)
  .use(VueFire, {
    firebaseApp,
    modules: [VueFireAuth()],
  })
  .mount("#app");
