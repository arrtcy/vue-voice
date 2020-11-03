import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    meta: { title: "登录" },
    component: () => import("../views/wdy/Login.vue"),
  },
  {
    path: "/Reg",
    name: "Reg",
    meta: { title: "注册" },
    component: () => import("../views/wdy/Reg.vue"),
  },
  {
    path: "/Presonal",
    name: "Presonal",
    meta: { title: "个人信息" },
    component: () => import("../views/wdy/Presonal.vue"),
  },
  {
    path: "/Update",
    name: "Update",
    meta: { title: "修改"},
    component: () => import("../views/wdy/Update.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
