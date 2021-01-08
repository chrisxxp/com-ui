import Vue from 'vue'
import App from './App.vue'

import chrisUI from '../packages/index'
Vue.use(chrisUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
