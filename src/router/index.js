import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/acerca",
    name: "About",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/curriculum",
    name: "Resume",
    component: () =>
        import(/* webpackChunkName: "resume" */ "../views/Resume.vue"),
  },
  {
    path: "/portafolio",
    name: "Projects",
    component: () =>
        import(/* webpackChunkName: "projects" */ "../views/Projects.vue"),
  },
  {
    path: "/contacto",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
  },
  {
    path: '/:pathMatch(.*)*',
    name: "PageNotFound",
    component: () => 
        import('../views/PageNotFound.vue') }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
