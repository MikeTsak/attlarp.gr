import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Setting from "./pages/Setting.vue";
import Gallery from "./pages/Gallery.vue";
import Storytellers from "./pages/Storytellers.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/setting", name: "setting", component: Setting },
  { path: "/gallery", name: "gallery", component: Gallery },
  { path: "/storytellers", name: "storytellers", component: Storytellers },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, behavior: "smooth" };
    return { top: 0 };
  },
});

export default router;
