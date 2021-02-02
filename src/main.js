import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import QuickSearch from "@/views/QuickSearch";
import SearchResults from "@/views/SearchResults";

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: QuickSearch },
  { path: '/results', component: SearchResults },
]

new Vue({
  render: h => h(App),
  router: new VueRouter({ routes })
}).$mount('#app')
