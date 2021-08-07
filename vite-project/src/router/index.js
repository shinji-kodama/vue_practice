import { createRouter, createWebHistory } from 'vue-router';
import Home from "../Home.vue"
import Foo from "../Foo.vue";
import Aha from "../Aha.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/foo',
    name: 'Foo',
    component: Foo,
  },
  {
    path: '/aha',
    name: 'Aha',
    component: Aha,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router