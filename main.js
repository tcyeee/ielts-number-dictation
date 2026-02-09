import App from './App'
import share from './utils/share'
import themeMixin from './mixins/themeMixin.js'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.mixin(share)
Vue.mixin(themeMixin)
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'
export function createApp() {
  const app = createSSRApp(App)
  app.use(Pinia.createPinia())
  app.mixin(share)
  app.mixin(themeMixin)
  return {
    app,
    Pinia
  }
}
// #endif