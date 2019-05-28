// vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建vuex的store
const store = new Vuex.Store({
  state: {
    count: 5,
    IP: 'http://127.0.0.1:3366/api',
    token:''
  },
  // 更改store的状态
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    },
    changetoken (state){
        state.token = sessionStorage.getItem('token')
    }
  },
  // 有异步的时候， 需要action
  actions: {
    increment(context) {
      context.commit('increment')
    },
    decrement (context) {
      setTimeout(function () {
        context.commit("decrement")
      }, 10)
    }
  },
  // 通过getter 进行数据获取
  getters: {
    getState(state) {
      return state.count > 0 ? state.count : 0;
    },
    //获取IP地址
    getIP(state){
        return state.IP
    },
    token(state){
        return state.token
    }
  }
})

export default store