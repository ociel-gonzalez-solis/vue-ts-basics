import { createRouter, createWebHistory } from 'vue-router'
import HomeViewVue from '@/shared/views/HomeView.vue';
import AboutViewVue from '@/shared/views/AboutView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path     : '/',
      name     : 'home',
      component: HomeViewVue
    },
    {
      path     : '/about',
      name     : 'about',
      component: AboutViewVue
    },
    {
      path     : '/counter',
      name     : 'counter',
      component: () => import('@/counter/views/CounterView.vue')
    },
    {
      path    : '/:pathMatch(.*)*',
      redirect: () => ({name: 'home'})
    }
  ]
})

export default router;
