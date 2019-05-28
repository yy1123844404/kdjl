/**
 * axios 配置
 * http配置
 */
import axios from 'axios'
import store from '@/store'

// import { Message } from 'iview';

// import { routes } from './router/routers'
// axios 配置
axios.defaults.timeout = 30000; // 请求 8s后 报错 
axios.defaults.baseURL = store.getters.getIP;
// axios.defaults.baseURL =process.env.API_ROOT

// let message = function (msg) {
//     Message.error(msg);
// }

// http request 拦截器

axios.interceptors.request.use(
    config => {
        if (store.getters.token != '') {
            config.headers['Authorization'] = store.getters.token;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        if (response.data.success == false) {
            // message(response.data.msg)
            alert(response.data.msg)
        }
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    store.dispatch('Logout') // 401 清除token信息并跳转到登录页面
                    // message(error.response.data.msg)
                    alert(error.response.data.msg)
                    break;
                default:
                    // message(error.response.data.msg)
                    alert(error.response.data.msg)
                    break;
            }
        }
        return Promise.reject(error.response.data)
    });

export default axios;