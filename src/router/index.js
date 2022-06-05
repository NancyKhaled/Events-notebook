import Vue from "vue";
import VueRouter from "vue-router";
import StartPage from "../views/StartPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "start-page",
    component: StartPage,
  },
  {
    path: "/signin",
    name: "signin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../components/SignIn.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../components/SignUp.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../components/DashBoard.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
