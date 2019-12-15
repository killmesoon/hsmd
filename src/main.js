import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'
import router from './router/index'
import 'swiper/css/swiper.min.css'
import BaiduMap from 'vue-baidu-map'

Vue.config.productionTip = false

Vue.use(BaiduMap, {
  ak:'nSxiPohfziUaCuONe4ViUP2N'
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
