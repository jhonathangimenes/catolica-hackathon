import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import VCharts from 'v-charts'
import VeLine from 'v-charts/lib/line.common'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.component(VeLine.name, VeLine)

Vue.use(Vuetify, {
  iconfont: 'fa'
})

Vue.use(VCharts)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
