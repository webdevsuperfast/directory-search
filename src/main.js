import Vue from 'vue'
import App from './App.vue'

// Bootstrap Configuration
import '@/config/bootstrap'

// Vue Meta Configuration
import '@/config/meta'

// Vue Router Configuration
import router from '@/config/router'

// Font Awesome Configuration
import '@/config/fontawesome'

// Consilidated SCSS File
import '@/assets/scss/style.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
