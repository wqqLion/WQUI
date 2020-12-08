/*
 * @Description: 
 * @version: 1.1.0
 * @Author: wqq
 * @Date: 2020-12-07 16:30:58
 * @LastEditors: wqq
 * @LastEditTime: 2020-12-08 16:58:51
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import WQ from '../packages/index'
import '../packages/theme-default/lib/index.css'

Vue.config.productionTip = false
Vue.use(WQ);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
