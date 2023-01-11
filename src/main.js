import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { router } from './router'
import VNetworkGraph from "v-network-graph"
import "v-network-graph/lib/style.css"
//import VueApexCharts from "vue3-apexcharts"


loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .use(VNetworkGraph)
  .mount('#app')
