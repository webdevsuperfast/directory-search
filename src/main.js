import Vue from 'vue'
import App from './App.vue'

// Bootstrap Configuration
import '@/config/bootstrap'

// Vue Meta Configuration
import '@/config/meta'

// Consilidated SCSS File
import '@/assets/scss/style.scss'

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) }
}).$mount('#app')
