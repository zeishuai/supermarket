// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'amfe-flexible'

// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)
import Vant from 'vant';
import 'vant/lib/index.css';
// import LyTab from 'ly-tab'
// Vue.use(LyTab)
Vue.use(Vant)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
