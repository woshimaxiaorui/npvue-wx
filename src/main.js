import Vue from 'vue'
import App from './App'
var Fly = require('flyio/dist/npm/wx')
var fly = new Fly()
Vue.prototype.$http = fly // 将fly实例挂在vue原型上

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
