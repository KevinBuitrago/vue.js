import Vue from 'vue'

import './plugins/bootstrapVue'

import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'
import { getUserLogged } from '@/api/search'

import './assets/css/main.styl'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    init () {
      if (getUserLogged()) {
        this.$router.push({ name: 'dashboard', params: {} })
      }
    }
  },
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
