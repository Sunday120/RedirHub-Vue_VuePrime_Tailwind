import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Redirects from "../pages/Redirects.vue";
import UrlShortener from "../pages/UrlShortener.vue";
import Monitor from "../pages/Monitor.vue";
import Hostnames from "../pages/Hostnames.vue";
import Subscriptions from "../pages/Subscriptions.vue";

import Settings from "../pages/Settings.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/redirects",
      name: "redirects",
      component: Redirects,
    },
    {
      path: "/url_shortener",
      name: "UrlShortener",
      component: UrlShortener,
    },
    {
      path: "/monitor",
      name: "monitor",
      component: Monitor,
    },
    {
      path: "/hostnames",
      name: "hostnames",
      component: Hostnames,
    },
    {
      path: "/subscriptions",
      name: "subscriptions",
      component: Subscriptions,
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings,
    },
  ],
});

export default router;
