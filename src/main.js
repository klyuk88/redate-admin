import { createApp } from 'vue'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import './assets/styles/main.scss'

createApp(App)
  .use(createPinia())
  .use(router)
  .use(PerfectScrollbar)
  .mount('#app')
