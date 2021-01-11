<!--
 * @Description: 
 * @version: 1.1.0
 * @Author: wqq
 * @Date: 2020-12-16 11:56:15
 * @LastEditors: wqq
 * @LastEditTime: 2021-01-11 14:59:48
-->
<template>
  <div
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
    :class="[
  type==='textarea'?'wq__input--textarea':'wq__input',
  inputSize?'wq__input--'+inputSize:'',
  {
    'is-disabled':inputDisabled,
    'is-extend':inputExceed,
    'wq__input--group': $slots.prepend || $slots.append,
    'wq__input--suffix':suffixIcon,
    'wq__input--prefix':prefixIcon,
  }
  ]"
  >
    <template v-if="type!='textarea'">
      <div class="wq__input--group__prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <i class="icon iconfont wq__input--prefix-prefix" :class="prefixIcon" v-if="prefixIcon"></i>
      <i
        class="icon iconfont wq__input--suffix-suffix"
        :class="suffixIcon"
        v-if="suffixIcon && !clearable"
      ></i>
      <input
        v-bind="$attrs"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        @input="handleInput"
        @hover="handleHover"
        :disabled="inputDisabled"
        :readonly="readonly"
        ref="input"
        class="wq__input--inputer"
        type="text"
      />
      <div class="wq__input--group__append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
      <i v-show="showClear" class="wq__input_clear icon iconfont icon-qingchu"></i>
      <div v-if="showWordLimit" class="wq__input-count">{{ textLength }}/{{ upperLimit }}</div>
    </template>

    <template v-else>
      <textarea class="wq__input--textarea-inner" v-bind="$attrs"></textarea>
      <div v-if="showWordLimit" class="wq__input-count">{{ textLength }}/{{ upperLimit }}</div>
    </template>
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
    prefixIcon: String,
    showWordLimit: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    inputExceed() {
        // show exceed style if length of initial value greater then maxlength
        return this.isWordLimitVisible &&
          (this.textLength > this.upperLimit);
      },
    upperLimit() {
      return this.$attrs.maxlength;
    },
    textLength() {
      if (typeof this.value === "number") {
        return String(this.value).length;
      }

      return (this.value || "").length;
    },
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
        (this.focused || this.hovering) &&
        !this.isWordLimitVisible
      );
    },
    isWordLimitVisible() {
      return (
        this.showWordLimit &&
        this.$attrs.maxlength &&
        (this.type === "text" || this.type === "textarea") &&
        !this.inputDisabled &&
        !this.readonly &&
        !this.showPassword
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
    handleHover(event) {
      this.hovering = true;
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


