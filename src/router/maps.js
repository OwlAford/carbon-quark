import Login from "@/views/Login";
import Main from "@/views/Main/Async";
import Redirect from "@/views/Redirect";

export default [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/main",
    component: Main
    // children: [
    //   {
    //     path: "",
    //     component: Home
    //   },
    //   {
    //     path: "home",
    //     component: Home
    //   },
    //   {
    //     path: "asset",
    //     component: Asset
    //   }
    // ]
  },
  {
    path: "/redirect",
    component: Redirect
  },
  {
    path: "*",
    redirect: "/redirect"
  }
];
