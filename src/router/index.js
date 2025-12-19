import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/random",
    component: () => import("@/views/RandomView.vue"),
  },
  {
    path: "/movie/:id",
    component: () => import("@/views/MovieDetailView.vue"),
  },
  {
    path: "/login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/NotFoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("Навигация:", from.path, "→", to.path);
  next();
});

export default router;
