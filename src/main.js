import Vue from 'vue'
import App from './App.vue'
import echarts from 'echarts'
import axios from './utils/axios'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
