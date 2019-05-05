import Vue from "vue";
import Router from "vue-router";
// import { getCookie } from "@/utils/cookie";
import routeMap from "./maps";

Vue.use(Router);

const vueRouter = new Router({
  mode: "hash",
  scrollBehavior: () => ({ y: 0 }),
  routes: routeMap
});

// 每次页面进行切换前进行鉴权
// vueRouter.beforeEach((to, from, next) => {
//   const userInfo = getCookie("userinfo");
//   if (userInfo) {
//     next();
//   } else {
//     next("/login");
//   }
// });

vueRouter.afterEach(() => {
  window.scrollTo(0, 0);
});

export default vueRouter;
