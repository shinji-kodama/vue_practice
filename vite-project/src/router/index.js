import { createRouter, createWebHistory } from 'vue-router';
import Home from "../Home.vue"
import Story from "../Story.vue";
import Detail from "../Detail.vue";
import Contact from "../Contact.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/story',
    name: 'Story',
    component: Story,
  },
    {
    path: '/detail',
    name: 'Detail',
    component: Detail,
  },
    {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router