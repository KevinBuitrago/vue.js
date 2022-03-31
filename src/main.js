import Vue from 'vue'

import './plugins/bootstrapVue'

import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'

import './assets/css/main.styl'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    init () {
    }
  },
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
