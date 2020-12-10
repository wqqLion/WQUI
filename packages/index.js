/*
 * @Description: 
 * @version: 1.1.0
 * @Author: wqq
 * @Date: 2020-12-08 16:24:24
 * @LastEditors: wqq
 * @LastEditTime: 2020-12-10 10:20:29
 */

import WqButton from './button/index.js';
const components = [
  WqButton
]

const install = function (Vue) {

  components.forEach(component => {
    Vue.component(component.name, component);
  });

  // if (install.installed) return;
  // components.map(component => Vue.component(component.name, component));

}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}



export default {
  install,
  WqButton
}
