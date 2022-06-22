import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/create-member",
    name: "createMember",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CreateMember.vue"),
  },
  {
    path: "/members",
    name: "clubMembers",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ClubMembers.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
