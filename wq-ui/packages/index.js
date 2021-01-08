/*
 * @Description: 
 * @version: 1.1.0
 * @Author: wqq
 * @Date: 2020-12-08 16:24:24
 * @LastEditors: wqq
 * @LastEditTime: 2020-12-16 12:01:47
 */

import Button from './button/index.js';
import Message from './message/index.js';
import Input from './input/index.js';
const components = [
  Button,
  Input,
]

const install = function (Vue) {

  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$WqMessage = Message;

  // if (install.installed) return;
  // components.map(component => Vue.component(component.name, component));

}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}



export default {
  install,
  Button,
  Input,
  Message
}
