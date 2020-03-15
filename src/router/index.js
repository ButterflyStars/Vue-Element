import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import AppIndex from '../views/AppIndex'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: Login,
    component: Login
  },
  {
    path: '/index',
    name: AppIndex,
    component: AppIndex
  }
]

const router = new VueRouter({
  routes,
  // URL中不存在#
  //mode: 'history'
})

export default router
