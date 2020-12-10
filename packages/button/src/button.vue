<!--
 * @Description: 
 * @version: 1.1.0
 * @Author: wqq
 * @Date: 2020-12-08 16:25:11
 * @LastEditors: wqq
 * @LastEditTime: 2020-12-10 11:18:50
-->
<template>
<button :class="['w__button--'+type,{'is-plain':plain,'id-disabled':disabled,'is-round':round},'w__button--size-'+size]" class="w__button" :disabled="disabled">
  <i v-if="icon !== ''" :class="icon" class="icon iconfont"></i>
  <slot></slot>
</button>
</template>

<script>
export default {
  name: "WqButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
    size: {
      type: String,
      default: "default",
    },
    icon: {
      type: String,
      default: "",
    },
    plain: Boolean,
    disabled: Boolean,
    round: Boolean,
  },
  data() {
    return {
      msg: "button",
    };
  },
  components: {},
  methods: {},
  mounted() {},
};
</script>
