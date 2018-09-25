// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import App from './App'
import router from './router'
import store from './store/index.js'
import $ from 'jquery'
import utils from '@/script/utils'
import '~/style/main.css'
import '../static/script/common'

Vue.config.productionTip = false
Vue.prototype.utils = utils
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  $: $,
  store: store
})
