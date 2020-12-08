<!--
 * @Description: 
 * @version: 1.1.0
 * @Author: wqq
 * @Date: 2020-12-08 16:25:11
 * @LastEditors: wqq
 * @LastEditTime: 2020-12-08 17:09:09
-->
<template>
  <button>
    <i v-if="icon !== ''" :class="icon"></i>
    <slot></slot>
  </button>
</template>

<script type="text/javascript">
export default {
  name: "WQButton",
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


