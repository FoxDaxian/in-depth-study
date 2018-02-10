// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import store from './store'
// 源码分析: https://tech.meituan.com/vuex-code-analysis.html

// TODO => NEW QA: 怎么主动让vue去绑定一个自定义的对象呢？？？？

Vue.prototype.$testSome = 'fox'
Vue.prototype.mock = {
  name: 'fox'
}
const obj = {
  name: 'fox',
  why: '测试写入Vue参数对象中，要如何调用'
}
Vue.prototype.$watch('obj.name', () => {
  console.log('变化了');
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  test: obj,
  components: { App },
  template: '<App/>'
})
