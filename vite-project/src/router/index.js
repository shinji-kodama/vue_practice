import { createRouter, createWebHistory } from "vue-router";
import Top from "../Top.vue";
import Create from "../Create.vue";

const routes = [
  {
    path: '/',
    component: Top,
    name: 'Top'
  },
  {
    path: '/create',
    component: Create,
    name: 'Create'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
