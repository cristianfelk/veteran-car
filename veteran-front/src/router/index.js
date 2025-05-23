import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/eventos',
    name: 'veteranEvent',
    component: () => import('@/views/veteranEvent.vue'),
  },
  {
    path: '/institucional',
    name: 'veteranInstitucional',
    component: () => import('@/views/veteranInstitucional.vue'),
  },
  {
    path: '/patrocinadores',
    name: 'veteranPatrocinadores',
    component: () => import('@/views/veteranPatrocinadores.vue'),
  },
  {
    path: '/dashboard',
    name: 'veteranDashboard',
    component: () => import('@/views/veteranDashboard.vue'),
  },
  {
  path: '/login',
    name: 'veteranLogin',
    component: () => import('@/views/veteranLogin.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
