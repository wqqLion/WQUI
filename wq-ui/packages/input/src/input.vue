<!--
 * @Description: 
 * @version: 1.1.0
 * @Author: wqq
 * @Date: 2020-12-16 11:56:15
 * @LastEditors: wqq
 * @LastEditTime: 2021-01-07 15:21:50
-->
<template>
  <div
    :class="[
  type==='textarea'?'wq__input--textarea':'wq__input',
  inputSize?'wq__input--'+inputSize:'',
  {
    'is-disabled':inputDisabled,
    'wq__input--group': $slots.prepend || $slots.append,
    'wq__input--suffix':suffixIcon,
    'wq__input--prefix':prefixIcon,
  }
  ]"
  >
    <div class="wq__input--prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <i class="icon iconfont wq__input__prefix" :class="prefixIcon" v-if="prefixIcon"></i>
    <i class="icon iconfont wq__input__suffix" :class="suffixIcon" v-if="suffixIcon"></i>
    <input
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
      @input="handleInput"
      :disabled="inputDisabled"
      :readonly="readonly"
      ref="input"
      class="wq__input--inputer"
      type="text"
    />
    <div class="wq__input--append" v-if="$slots.append">
      <slot name="append"></slot>
    </div>
    <i v-if="showClear" class="icon iconfont icon-qingchu"></i>
  </div>
</template>

<script type="text/javascript">
import calcTextareaHeight from "./calcTextareaHeight";
export default {
  name: "WqInput",
  data() {
    return {
      hovering: false,
      focused: false
    };
  },
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: "text"
    },
    size: String,
    disabled: Boolean,
    clearable: Boolean,
    readonly: Boolean,
    suffixIcon: String,
    prefixIcon: String
  },
  computed: {
    inputSize() {
      return this.size;
    },
    inputDisabled() {
      return this.disabled;
    },
    nativeInputValue() {
      return this.value === null || this.value === undefined
        ? ""
        : String(this.value);
    },
    showClear() {
      return (
        this.clearable &&
        !this.inputDisabled &&
        !this.readonly &&
        this.nativeInputValue &&
        (this.focused || this.hovering)
      );
    }
  },
  watch: {
    value(val) {},
    nativeInputValue() {
      this.setNativeInputValue();
    }
  },
  components: {},
  methods: {
    handleInput(event) {
      if (this.isComposing) return;
      if (event.target.value === this.nativeInputValue) return;
      this.$emit("input", event.target.value);
      // this.$nextTick(this.setNativeInputValue);
    },
    handleFocus(event) {
      this.focused = true;
      this.$emit("focus", event);
    },
    handleBlur(event) {
      this.focused = false;
      this.$emit("blur", event);
      if (this.validateEvent) {
        this.dispatch("ElFormItem", "el.form.blur", [this.value]);
      }
    },
    handleChange(event) {
      this.$emit("change", event.target.value);
    },
    calcIconOffset(place) {
      let eList = this.$el.querySelectorAll(`wq__input--${place}`) || [];
    },
    updateIconOffset() {
      this.calcIconOffset("prefix");
      this.calcIconOffset("suffix");
    },
    getInput() {
      return this.$refs.input || this.$refs.textarea;
    },
    setNativeInputValue() {
      const input = this.getInput();
      if (!input) return;
      if (input.value === this.nativeInputValue) return;

      input.value = this.nativeInputValue;
    }
  },
  mounted() {
    this.setNativeInputValue();

    this.updateIconOffset();
  },
  updated() {
    this.$nextTick(() => {
      this.updateIconOffset();
    });
  }
};
</script>


