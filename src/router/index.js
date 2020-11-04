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
  {
    path: '/sort',
    name: 'Sort',
    component: () => import( '../views/tian/Sort.vue')
  },
  {
    path:'/newDie',
    name:'newDie',
    component: () => import( '../views/tian/newDie.vue')
  },
  {
    path:'/hotSearch',
    name:'hotSearch',
    component: () => import( '../views/tian/hotSearch.vue')
  },
  
  {
    path:'/newSong',
    name:'newSong',
    component: () => import( '../views/tian/newSong.vue')
  },
  {
    path:'/hotSinger',
    name:'hotSinger',
    component: () => import( '../views/tian/hotSinger.vue')
  },
  {
    path:'/hotPlat',
    name:'hotPlat',
    component: () => import( '../views/tian/hotPlat.vue')
  },
  {
    path:'/Race',
    name:'Race',
    component: () => import( '../views/tian/Race.vue')
  },
  {
    path:'/Commend',
    name:'Commend',
    component: () => import( '../views/tian/Commend.vue')
  },
  {
    path:'/commendSong',
    name:'commendSong',
    component: () => import( '../views/tian/commendSong.vue')
  },
  {
    path:'/commendJe',
    name:'commendJe',
    component: () => import( '../views/tian/commendJe.vue')
  },
  {
    path:'/Try',
    name:'try',
    component: () => import( '../views/tian/Try.vue')
  },
  
  
  
];

const router = new VueRouter({
  routes,
});

export default router;
