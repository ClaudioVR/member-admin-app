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
    component: () => import("../views/CreateMember.vue"),
  },
  {
    path: "/members",
    name: "clubMembers",
    component: () => import("../views/ClubMembers.vue"),
  },
  {
    path: "/record-session",
    name: "recordSession",
    component: () => import("../views/RecordSession.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
