import React from "react";

import BasicLayout from "@/layouts/basicLayout";
import UserLayout from "@/layouts/userLayout";
import { RouteConfig } from "react-router-config";

export const routesConfig: RouteConfig[] = [
  {
    path: "/",
    title: "/",
    exact: true,
    component: React.lazy(() => import("@/pages/home")),
  },
  {
    path: "/order",
    component: BasicLayout,
    title: "订单",
    routes: [
      {
        path: "/order/list",
        title: "订单列表",
        exact: true,
        component: React.lazy(() => import("@/pages/order/list")),
      },
      {
        path: "/order/create",
        title: "创建订单",
        exact: true,
        component: React.lazy(() => import("@/pages/order/create")),
      },
    ],
  },
  {
    path: "/user",
    component: BasicLayout,
    title: "用户路由",
    redirect: "/user/login",
    routes: [
      {
        path: "/user/settings",
        component: React.lazy(() => import("@/pages/user/settings")),
        title: "设置",
      },
    ],
  },
  {
    path: "/login",
    component: React.lazy(() => import("@/pages/login")),
    title: "登录",
  },
  {
    path: "/noFond",
    title: "页面不存在",
    component: React.lazy(() => import("@/pages/notFound")),
  },
];
