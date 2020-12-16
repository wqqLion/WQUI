<!--
 * @Description: 
 * @version: 1.1.0
 * @Author: wqq
 * @Date: 2020-12-10 11:32:43
 * @LastEditors: wqq
 * @LastEditTime: 2020-12-16 11:23:28
-->
<template>
  <transition name="wq-message-fade">
    <div v-show="visible" :class="['w__message','w__message--'+type]">
      <div class="w__message--content">
        <i @click="close" v-show="showClose" class="icon iconfont icon-delete w__message--close"></i>
        <i class="icon iconfont icon-success w__message--icon"></i>
        <p class="w__message--text">{{message}}</p>
      </div>
    </div>
  </transition>
</template>

<script>
const typeMap = {
  success: "success",
  info: "info",
  warning: "warning",
  error: "error"
};

export default {
  data() {
    return {
      visible: false,
      message: "",
      duration: 3000,
      type: "info",
      iconClass: "",
      customClass: "",
      onClose: null,
      showClose: false,
      closed: false,
      timer: null,
      dangerouslyUseHTMLString: false,
    };
  },

  computed: {
    typeClass() {
      return this.type && !this.iconClass
        ? `el-message__icon el-icon-${typeMap[this.type]}`
        : "";
    },
  },

  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
      }
    }
  },

  methods: {
    handleAfterLeave() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },

    close() {
      this.closed = true;
      if (typeof this.onClose === "function") {
        this.onClose(this);
      }
    },

    clearTimer() {
      clearTimeout(this.timer);
    },

    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    },
    keydown(e) {
      if (e.keyCode === 27) {
        // esc关闭消息
        if (!this.closed) {
          this.close();
        }
      }
    }
  },
  mounted() {
    this.startTimer();
    document.addEventListener("keydown", this.keydown);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.keydown);
  }
};
</script>
