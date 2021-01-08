/*
 * @Description: 
 * @version: 1.1.0
 * @Author: wqq
 * @Date: 2020-12-08 16:24:50
 * @LastEditors: wqq
 * @LastEditTime: 2020-12-10 10:20:08
 */
import WqButton from './src/button';

WqButton.install = function(Vue){
  Vue.component(WqButton.name,WqButton);
}

export default WqButton;