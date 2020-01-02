import Vue from 'vue'
import App from './App.vue'
import 'babel-polyfill';
import 'normalize.css'
import router from './router/index'
import 'swiper/css/swiper.min.css'
import BaiduMap from 'vue-baidu-map'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.use(BaiduMap, {
  ak:'nSxiPohfziUaCuONe4ViUP2N'
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
