import Vue from 'vue'
import App from './App'
import tabBar from "@/pages/component/tabBar.vue"
import headerBar from "@/pages/component/headerBar.vue"


Vue.config.productionTip = false
Vue.component('tabBar', tabBar)
Vue.component('headerBar', headerBar)
App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
