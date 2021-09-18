import Vue from 'vue'
import App from './App'
import filters from "./common/js/filters";



import tabBar from "@/pages/component/tabBar.vue"
import headerBar from "@/pages/component/headerBar.vue"
import tabControlTag from "@/pages/component/tabControlTag.vue"
import loaderMore from "@/pages/component/loaderMore.vue"
import empty from "@/pages/component/empty.vue"


Vue.config.productionTip = false
Vue.component('tabBar', tabBar)
Vue.component('headerBar', headerBar)
Vue.component('tabControlTag', tabControlTag)
Vue.component('loaderMore', loaderMore)
Vue.component('empty', empty)
for(let key in filters){
  console.log(filters)
	Vue.filter(key,filters[key])
}
App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
