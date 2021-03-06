// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'view-design/dist/styles/iview.css'
import iView from 'view-design'
import 'font-awesome/css/font-awesome.min.css'
import App from './App'
import router from './router'
import store from './store/index.js'
import axios from './axios'
import $ from 'jquery'
import utils from '@/script/utils'
import '~/style/main.css'
import '../static/script/common'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.config.productionTip = false
Vue.prototype.utils = utils
Vue.prototype.$axios = axios

Vue.use(mavonEditor)
Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  $: $,
  store: store
})
