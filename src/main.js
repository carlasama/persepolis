import Vue from 'vue'

import App from '/src/components/App.vue'
import router from './router'
import { BootstrapVue } from 'bootstrap-vue'
Vue.use(BootstrapVue)

import 'tailwindcss/tailwind.css';

import './input.css'

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
