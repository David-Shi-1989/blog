import Vue from 'vue'
import Vuex from 'vuex'
import _global from './modules/global'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    global: _global
  }
})
