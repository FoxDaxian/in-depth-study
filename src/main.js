// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import store from './store'
// __defineGetter__ 和 __defineSetter__ 可以在对象初始化之后在设置对象的getter和setter
// 源码分析: https://tech.meituan.com/vuex-code-analysis.html

// TODO => NEW QA: 怎么主动让vue去绑定一个自定义的对象呢？？？？

// console.log(Vue.prototype.$watch);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// 改写方法
// var arrayMethod = Object.create(Array.prototype);
// ['push','shift'].forEach(function(method){
//     Object.defineProperty(arrayMethod,method,{
//         value:function(){
//             var i = arguments.length
//             var args = new Array(i)
//             while (i--) {
//               args[i] = arguments[i]
//             }
//             var original = Array.prototype[method];
//             var result = original.apply(this,args);
//             console.log("已经控制了，哈哈");
//             return result;
//         },
//         enumerable: true,
//         writable: true,
//         configurable: true
//     })
// })
// var bar = [1,2];
// bar.__proto__ = arrayMethod;
// bar.push(3);//控制台会打印出 “已经控制了，哈哈”;并且bar里面已经成功的添加了成员 ‘3’ 
