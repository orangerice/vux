// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {XButton} from 'vux'
import { Search } from 'vux'
import { Icon } from 'vux'
import { Swiper } from 'vux'
import { SwiperItem } from 'vux'
Vue.component('swiper', Swiper)
Vue.component('icon', Icon)
Vue.component('search', Search)
Vue.component('x-button', XButton)
Vue.component('swiper-item', SwiperItem)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
