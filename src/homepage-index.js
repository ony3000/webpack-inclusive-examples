import Vue from 'vue'
import 'bulma/css/bulma.css'
import './assets/customize.css'
import HomepageApp from './homepage-app'
import router from './router'

new Vue({
  el: '#app',
  router,
  components: {
    HomepageApp,
  },
  render(h) {
    return h(HomepageApp)
  },
})
