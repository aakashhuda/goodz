import { createRouter } from "vue-router";
import HomePage from "./home/HomePage.vue";
// Admin Pages
import AdminLayout from "../layouts/AdminLayout.vue";
import PageOrders from "./admin/orders/PageOrders.vue";

const routes = [
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
