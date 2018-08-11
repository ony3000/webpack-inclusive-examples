// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import fooApp from './pages/foo-app'
import router from './router'
import store from './store'
import ws from './middleware/websocket'

new Vue({
  el: '#app',
  router,
  store,
  components: { fooApp },
  template: '<foo-app/>',
  mounted() {
    this.$nextTick(() => {
      ws.init();
    });
  },
})
