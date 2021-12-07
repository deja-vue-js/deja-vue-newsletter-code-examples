import { createRouter, createWebHistory } from "vue-router";
import CounterView from "../views/CounterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: CounterView,
    },
    {
      path: "/counter-composition-store",
      name: "counterCompositionStore",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CounterCompositionApiView.vue"),
    },
    {
      path: "/counter-composition-api",
      name: "counter-composition-api",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CounterCompositionApiView.vue"),
    },
  ],
});

export default router;
