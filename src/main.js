// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import api from '@/request/api.js'
import store from '@/store'
import Vuex from 'vuex'



import App from './App'
import router from './router'

Vue.prototype.$api = api;

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  api,
  components: { App },
  template: '<App/>'
})
