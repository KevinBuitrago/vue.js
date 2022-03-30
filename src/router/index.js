import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/userIdentify/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('@/views/dashboard/index.vue')
  },
  {
    path: '/task',
    name: 'task',
    component: () => import('@/views/dashboard/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
