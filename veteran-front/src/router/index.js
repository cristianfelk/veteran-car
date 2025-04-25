import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/veteranEvent',
    name: 'veteranEvent',
    component: () => import('@/views/veteranEvent.vue'),
  },
  {
  path: '/veteranPresenca',
    name: 'veteranPresenca',
    component: () => import('@/views/veteranPresenca.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
