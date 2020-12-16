<!--
 * @Description: 
 * @version: 1.1.0
 * @Author: wqq
 * @Date: 2020-12-10 11:42:00
 * @LastEditors: wqq
 * @LastEditTime: 2020-12-16 11:28:09
-->
<template>
  <div>
    <wq-button type="info" @click="info" plain>信息提示</wq-button>
    <wq-button type="success" @click="success" plain>成功提示</wq-button>
    <wq-button type="warning" @click="warning" plain>警告提示</wq-button>
    <wq-button type="danger" @click="error" plain>错误提示</wq-button>
    <!-- <button>111</button> -->
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    test() {},
    info() {
      this.$WqMessage({
        type: "info",
        duration: 3000,
        message: "info",
        showClose: true,
        onClose: function() {
          console.log("关闭回调");
        }
      });
    },
    success() {
      this.$WqMessage({
        type: "success",
        duration: 3000,
        message: "success",
        showClose: true,
        onClose: function() {
          console.log("关闭回调");
        }
      });
    },
    warning() {
      this.$WqMessage({
        type: "warning",
        duration: 3000,
        message: "warning",
        showClose: true,
        onClose: function() {
          console.log("关闭回调");
        }
      });
    },
    error() {
      this.$WqMessage({
        type: "error",
        duration: 3000,
        message: "error",
        showClose: true,
        onClose: function() {
          console.log("关闭回调");
        }
      });
    }
  },
  mounted() {}
};
</script>

