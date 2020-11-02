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
    path: "/serach",
    name: "Serach",
    component: () => import("../views/tcy/Serach.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
