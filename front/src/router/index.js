import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios';
import { endpoints } from '/common/endpoints';
import HelloWorld from '@/components/HelloWorld.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Start',
      component: HelloWorld
    },
  ],
})

export default router
