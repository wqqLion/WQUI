<!--
 * @Description: 
 * @version: 1.1.0
 * @Author: wqq
 * @Date: 2020-12-16 11:59:29
 * @LastEditors: wqq
 * @LastEditTime: 2021-01-11 14:49:43
-->
<template>
  <div class>
    普通输入框
    <wq-input @input1="handleInput" v-model="test" clearable></wq-input>禁用输入框
    <wq-input :disabled="true" @input1="handleInput" v-model="test" clearable></wq-input>只读
    <wq-input :readonly="true" @input1="handleInput" v-model="test" clearable></wq-input>前置，后置内容
    <wq-input @input1="handleInput" v-model="test" clearable>
      <template slot="prepend">前置</template>
      <template slot="append">后置</template>
    </wq-input>图标
    <wq-input
      prefix-icon="icon-success"
      suffix-icon="icon-success"
      @input1="handleInput"
      v-model="test"
      clearable
    ></wq-input>限制输入字数
    <wq-input maxlength="20" :showWordLimit="true" @input1="handleInput" v-model="test" clearable></wq-input>
    <wq-input maxlength="20" :showWordLimit="true" type="textarea" v-model="test"></wq-input>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      test: "初始值"
    };
  },
  components: {},
  methods: {
    showValue() {
      console.log(this.test);
    },
    handleInput() {
      console.log(111);
      // console.log(this.test)
    },
    inputHand(event) {
      // this.$emit('input',event.target.value)
      // console.log(1)
    }
  },
  mounted() {}
};
</script>

