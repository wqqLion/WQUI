/*
 * @Description: 
 * @version: 1.1.0
 * @Author: wqq
 * @Date: 2020-12-08 16:24:50
 * @LastEditors: wqq
 * @LastEditTime: 2020-12-08 17:07:20
 */
import WQButton from './src/button';

WQButton.install = function(Vue){
  Vue.component(WQButton.name,WQButton);
}

export default WQButton;