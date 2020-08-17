import Vue from 'vue'
import App from './App.vue'

import router from '@/router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false

import POWERMODE from 'activate-power-mode'
POWERMODE.colorful = true
POWERMODE.shake = false
// console.log(POWERMODE.colorful, POWERMODE.shake)
document.addEventListener('input', POWERMODE)

import Highlight from '@/utils/highlight'
Vue.use(Highlight)

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
