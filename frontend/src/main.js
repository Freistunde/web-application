import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'mapbox-gl/dist/mapbox-gl.css'

// Components
import App from './App.vue'

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(App)
})

