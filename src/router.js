import { createWebHistory, createRouter } from "vue-router";

const routes =  [
   {
    path: "/",
    alias: "/home",
    name: "home",
    component: () => import("./components/Home-Component.vue")
  },
  {
    path: "/",
    alias: "/basicchart",
    name: "basicchart",
    component: () => import("./components/Basic-Chart.vue")
  } 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;