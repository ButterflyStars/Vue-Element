import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import AppIndex from '../views/AppIndex'
import Home from '../components/Home'
import LibraryIndex from '../components/library/LibraryIndex';

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
    path: '/home',
    name: Home,
    component: Home,
    redirect: '/index',
    // 导航栏的实现
    children: [{
      path: '/index',
      name: AppIndex,
      component: AppIndex,
      meta: {
        requireAuth: true   //进入页面要登录
      }
    },
    {
      path: '/library',
      name: 'Library',
      component: LibraryIndex,
      meta: {
        requireAuth: true
      }
    }
    ]
  }
]

const router = new VueRouter({
  routes,
  // URL中不存在#
  //mode: 'history'
})

export default router
