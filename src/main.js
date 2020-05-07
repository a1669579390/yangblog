import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';//elementui 样式
import './plugins/element.js'
import global_ from './api/config';
Vue.prototype.GLOBAL = global_;
// 引入axios，并加到原型链中
import axios from 'axios';
axios.defaults.baseURL='http://localhost:3000'
Vue.prototype.$axios = axios;

import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
