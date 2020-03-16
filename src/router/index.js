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
    path: '/login',
    name: Login,
    component: Login
  },
  {
    path: '/index',
    name: AppIndex,
    component: AppIndex,
    meta: {
      requireAuth: true   //进入页面要登录
    }
  }
]


const router = new VueRouter({
  routes,
  // URL中不存在#
  //mode: 'history'
})

export default router
