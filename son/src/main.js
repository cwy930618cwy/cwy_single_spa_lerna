// import Vue from 'vue'
// import App from './App.vue'

// import router from './router'
// import singleSpaVue from 'single-spa-vue'
// Vue.config.productionTip = false
// /**
//  * 子应用main.js
//  */
// const appOptions = {
//   el: '#microApp',
//   router,
//   render: h => h(App)
// }
// // if(window.singleSpaNavigate) {
// //   __webpack_public_path__="http://localhost:8082/"
// // }
// // 支持应用独立运行、部署，不依赖于基座应用
// if (!window.singleSpaNavigate) {
//   delete appOptions.el
//   new Vue(appOptions).$mount('#app')
// }
 
// // 基于基座应用，导出生命周期函数
// const vueLifecycle = singleSpaVue({
//   Vue,
//   appOptions
// })
 
// export function bootstrap () {
//   console.log('son bootstrap')
//   return vueLifecycle.bootstrap(() => {})
// }
 
// export function mount () {
//   console.log('son mount')
//   return vueLifecycle.mount(() => {})
// }
 
// export function unmount () {
//   console.log('son unmount')
//   return vueLifecycle.unmount(() => {})
// }

import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router'
import singleSpaVue from 'single-spa-vue'
Vue.config.productionTip = false
/**
 * 子应用main.js
 */
 Vue.use(ElementUI);
const appOptions = {
  el: '#microApp',
  router,
  render: h => h(App)
}
// if(window.singleSpaNavigate) {
//   __webpack_public_path__="http://localhost:8082/"
// }
// 支持应用独立运行、部署，不依赖于基座应用
if (!window.singleSpaNavigate) {
  delete appOptions.el
  new Vue(appOptions).$mount('#app')
}
// 基于基座应用，导出生命周期函数
const vueLifecycle = singleSpaVue({
  Vue,
  appOptions
})
export function bootstrap () {
  console.log('son bootstrap')
  return vueLifecycle.bootstrap(() => {})
}
export function mount () {
  console.log('son mount')
  return vueLifecycle.mount(() => {})
}
export function unmount () {
  console.log('son unmount')
  return vueLifecycle.unmount(() => {})
}

