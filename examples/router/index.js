/*
 * @Description: 
 * @version: 1.1.0
 * @Author: wqq
 * @Date: 2020-12-07 16:30:58
 * @LastEditors: wqq
 * @LastEditTime: 2021-01-08 14:18:54
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: r => require.ensure([], () => r(require('../components/index.vue')))
    },
    {
      path: '/message',
      name: 'message',
      component: r => require.ensure([], () => r(require('../components/message.vue')))
    },
    {
      path: '/input',
      name: 'input',
      component: r => require.ensure([], () => r(require('../components/input.vue')))
    },
    {
      path: '/button',
      name: 'button',
      component: r => require.ensure([], () => r(require('../docs/button.md')))
    }
  ]
})
