import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';

// 引入axios，并加到原型链中
import axios from 'axios';
axios.defaults.baseURL='http://localhost:3000'
Vue.prototype.$axios = axios;
import VueParticles from 'vue-particles'
import './plugins/element.js'
Vue.use(VueParticles)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
