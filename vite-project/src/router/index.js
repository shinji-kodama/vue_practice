import { createRouter, createWebHistory } from 'vue-router';
import Home from "../Home.vue"
import Foo from "../Foo.vue";
import Aha from "../Aha.vue";
import Page from "../components/pages/Page.vue";
import Page2 from "../components/pages/Page2.vue"

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
  {
    path: '/page',
    name: 'Page',
    component: Page,
  },
  {
    path: '/page2',
    name: 'Page2',
    component: Page2,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router