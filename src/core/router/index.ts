import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import authRoutes from "@/auth/routes";
import { userAuthenticated } from "@/auth/state/auth";

const routes: Array<RouteRecordRaw> = [...authRoutes];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (userAuthenticated.value) {
      return next();
    }

    return next({ name: "SignIn" });
  }

  if (to.matched.some((record) => record.name === "SignIn")) {
    if (userAuthenticated.value) {
      return next({ name: "AindaNaoExisto" });
    }
  }

  return next();
});

export default router;
