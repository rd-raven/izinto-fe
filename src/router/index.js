import { createRouter, createWebHistory } from 'vue-router'

import IzintoView from '@/views/IzintoView.vue'

const routes = [{ path: '/', component: IzintoView }]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
