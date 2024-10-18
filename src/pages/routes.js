import { createRouter } from "vue-router";
import HomePage from "./home/HomePage.vue";
// auth pages
import PageLogin from "../pages/auth/PageLogin.vue";
import PageSignup from "./auth/PageSignup.vue";
// Admin Pages
import AdminLayout from "../layouts/AdminLayout.vue";
import PageOrders from "./admin/orders/PageOrders.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: PageLogin,
    meta: { title: "Login" },
  },
  {
    path: "/register",
    name: "signup",
    component: PageSignup,
    meta: { title: "Signup" },
  },
  {
    path: "/admin/",
    name: "admin-panel",
    component: AdminLayout,
    children: [
      {
        path: "orders/",
        name: "customer-orders",
        component: PageOrders,
      },
    ],
  },
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
