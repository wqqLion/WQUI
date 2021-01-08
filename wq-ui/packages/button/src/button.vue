<!--
 * @Description: 
 * @version: 1.1.0
 * @Author: wqq
 * @Date: 2020-12-08 16:25:11
 * @LastEditors: wqq
 * @LastEditTime: 2021-01-08 10:03:07
-->
<template>
  <button
    :class="['wq__button--'+type,{'is-plain':plain,'is-disabled':disabled,'is-round':round},'wq__button--size-'+size]"
    class="wq__button"
    :disabled="disabled"
    @click="$emit('click')"
  >
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
      default: "default"
    },
    size: {
      type: String,
      default: "default"
    },
    icon: {
      type: String,
      default: ""
    },
    plain: Boolean,
    disabled: Boolean,
    round: Boolean
  },
  data() {
    return {
      msg: "button"
    };
  },
  components: {},
  methods: {},
  mounted() {}
};
</script>
