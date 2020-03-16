import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
import store from './store'
import Vuex from 'vuex'

Vue.use(Vuex)
axios.defaults.baseURL = 'http://localhost:8443/api'
Vue.prototype.$axios = axios
Vue.config.productionTip = false

//实现了路由的登录认证
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {     // 判断该路由是否需要登录权限
    if (store.state.user.username) {
      console.log(store.state.user.username),   // 通过vuex state获取当前的token是否存在
        next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
}
)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


