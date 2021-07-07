import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// Layouts
import Dashboard from "@/layouts/Dashboard.vue";
import Auth from "@/layouts/Auth.vue";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/dashboard",
    name: "Home",
    component: Dashboard,
    redirect: "dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Home,
      },
    ],
  },
  {
    path: "/",
    name: "Landing",
    component: Auth,
    children: [
      {
        path: "login",
        name: "Login",
        component: Login,
      },
    ],
  },
  // {
  //   path: "/",
  //   name: "Login",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
