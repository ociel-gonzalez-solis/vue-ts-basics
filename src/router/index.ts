import { createRouter, createWebHistory } from 'vue-router'
import HomeViewVue from '@/shared/views/HomeView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewVue
    },
    {
      path: '/counter',
      name: 'counter',
      component: () => import('@/counter/views/CounterView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../shared/views/AboutView.vue')
    }
  ]
})

export default router
