import { createRouter, createWebHistory } from 'vue-router';
import Home from "../Home.vue"
import Picture from "../Picture.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/picture',
    name: 'Picture',
    component: Picture,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router