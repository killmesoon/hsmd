import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'
import router from './router/index'
import 'swiper/css/swiper.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
