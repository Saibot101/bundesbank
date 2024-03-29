import HelloWorld from "./components/HelloWorld"
import EChartsLinie from "./components/echarts/echartsLinie"
import EChartsLinie2 from "./components/echarts/echartsLinie2"
import EChartsBalken from "./components/echarts/echartsBalken"
import EChartsKreis from "./components/echarts/echartsKreis"
import EChartsKreis2 from "./components/echarts/echartsKreis2"
import EChartsPoC from "./components/echarts/pocChart"
import ApexLinie from "./components/apex/apexLinie"
import ApexBalken from "./components/apex/apexBalken"
import ApexKreis from "./components/apex/apexKreis"

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/echarts/linie', component: EChartsLinie },
    { path: '/echarts/linie2', component: EChartsLinie2 },
    { path: '/echarts/balken', component: EChartsBalken },
    { path: '/echarts/kreis', component: EChartsKreis },
    { path: '/echarts/kreis2', component: EChartsKreis2 },
    { path: '/echarts/poc', component: EChartsPoC },
    { path: '/apex/linie', component: ApexLinie },
    { path: '/apex/balken', component: ApexBalken },
    { path: '/apex/kreis', component: ApexKreis },
  ]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
 export const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(process.env.BASE_URL),
    routes, // short for `routes: routes`
  })
  
  // 5. Create and mount the root instance.
  //const app = Vue.createApp({})
  // Make sure to _use_ the router instance to make the
  // whole app router-aware.
  //app.use(router)
  
  //app.mount('#app')