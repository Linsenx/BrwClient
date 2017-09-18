//require css
require("./css/animate.css")
require("./../static/fonts/public/gicon/style.css")

//import the core classes
import Vue from 'vue'
import store from './store'
import router from './router.js'

//import the basic components
import App from './components/App'

//register the basic components
Vue.component('App', App)

//import the gui components
import strokefont from './components/gui/strokefont/strokefont'
import button from './components/gui/button/button'
import tabs from './components/gui/tab/tabs'
import tabPane from './components/gui/tab/tab-pane'

//register the gui components
Vue.component('gui-strokefont', strokefont)
Vue.component('gui-button', button)
Vue.component('gui-tabs', tabs)
Vue.component('gui-tab-pane', tabPane)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  router,
  template: '<App/>',
}).$mount('#app')
