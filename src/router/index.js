import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login' //登陆页面
import admin from '@/views/common' //公共页面

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'login', component: login },
    { path: '/admin', name: 'admin', component: admin}
  ]
})
