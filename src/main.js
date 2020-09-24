import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'
// import enLang from 'element-ui/lib/locale/lang/en'// 如果使用中文语言包请默认支持，无需额外引入，请删除该依赖

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control  //权限控制
import './utils/error-log' // error log

import * as filters from './filters' // global filters

/**
 * If you don't want to use mock-server  // 如果您不想使用模拟服务器
 * you want to use MockJs for mock api  // 您需要使用MockJs来模拟api
 * you can execute: mockXHR()  // 可以执行:mockXHR()
 *
 * Currently MockJs will be used in the production environment,  // 目前MockJs将用于生产环境
 * please remove it before going online ! ! !  // 请在上线前删除!!!
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
  // locale: enLang // 如果使用中文，无需设置，请删除
})

// register global utility filters  // 注册全局过滤器
// console.log('main--42', filters)
// console.log('main--43', Object.keys(filters))
Object.keys(filters).forEach(key => {
  // console.log("main--45", filters[key])
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

// console.log("main--51", router)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
