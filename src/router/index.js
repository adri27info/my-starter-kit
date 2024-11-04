import { createRouter, createWebHistory } from "vue-router";
import ExampleView from "@/views/ExampleView.vue";
import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/example",
    name: "example",
    component: ExampleView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

/*router.beforeEach((to, from, next) => {
  const store = authStore();
  const isAuth = store.token;

  if (to.meta.requireAuth && isAuth == null) {
    next("login");
  } else {
    next();
  }
});*/

export default router;
