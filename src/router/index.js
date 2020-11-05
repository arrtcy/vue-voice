import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/myself",
    name: "Myself",
    component: () => import("../views/tcy/Myself.vue"),
  },
  {
    path: "/",
    name: "Serach",
    component: () => import("../views/tcy/Serach.vue"),
  },
  {
    path: "/sort",
    name: "Sort",
    component: () => import("../views/tian/Sort.vue"),
  },
  {
    path: "/newDie",
    name: "newDie",
    component: () => import("../views/tian/newDie.vue"),
  },
  {
    path: "/hotSearch",
    name: "hotSearch",
    component: () => import("../views/tian/hotSearch.vue"),
  },

  {
    path: "/newSong",
    name: "newSong",
    component: () => import("../views/tian/newSong.vue"),
  },
  {
    path: "/hotSinger",
    name: "hotSinger",
    component: () => import("../views/tian/hotSinger.vue"),
  },
  {
    path: "/hotPlat",
    name: "hotPlat",
    component: () => import("../views/tian/hotPlat.vue"),
  },
  {
    path: "/Race",
    name: "Race",
    component: () => import("../views/tian/Race.vue"),
  },
  {
    path: "/Commend",
    name: "Commend",
    component: () => import("../views/tian/Commend.vue"),
  },
  {
    path: "/commendSong",
    name: "commendSong",
    component: () => import("../views/tian/commendSong.vue"),
  },
  {
    path: "/commendJe",
    name: "commendJe",
    component: () => import("../views/tian/commendJe.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: { title: "登录" },
    component: () => import("../views/wdy/Login.vue"),
  },
  {
    path: "/reg",
    name: "Reg",
    meta: { title: "注册" },
    component: () => import("../views/wdy/Reg.vue"),
  },
  {
    path: "/presonal",
    name: "Presonal",
    meta: { title: "个人信息" },
    component: () => import("../views/wdy/Presonal.vue"),
  },
  {
    path: "/update",
    name: "Update",
    meta: { title: "修改" },
    component: () => import("../views/wdy/Update.vue"),
  },
  {
    path: "/find",
    name: "Find",
    component: () => import("../views/nan/Find.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
