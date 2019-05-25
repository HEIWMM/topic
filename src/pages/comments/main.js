import Vue from 'vue'
import App from './index'
import Vuex from "vuex"

Vue.use(Vuex);
Vue.config.productionTip = false

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    count: 0
  },
  
  mutations: {
    increment (state) {
      state.count++
    }
  }

})
const app = new Vue(App,store)
app.$mount()
