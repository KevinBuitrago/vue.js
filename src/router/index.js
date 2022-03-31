import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routerOptions = [
  { path: '/', name: 'userIdentify', meta: { showBreadcrumb: true } },
  { path: '/Dashboard', name: 'dashboard', meta: { showBreadcrumb: true } },
  { path: '/NewUser', name: 'dashboard', meta: { showBreadcrumb: true } },
  { path: '/users/:id/todo', name: 'task', meta: { showBreadcrumb: true } },
  { path: '/NewTo-do', name: 'dashboard', meta: { showBreadcrumb: true } },
  { path: '*', redirect: { name: 'userIdentify' } }
]

const routes = routerOptions.map(r => {
  return {
    ...r,
    component: () => import(`@/views/${r.name}/Index.vue`)
  }
})

const router = new Router({
  routes
})

export default router
