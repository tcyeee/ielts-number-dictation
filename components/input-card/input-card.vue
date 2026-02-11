<template>
  <view class="input-section">
    <text class="input-label">{{ label }}</text>
    <view class="input-box">
      <input
        type="digit"
        class="number-input"
        :placeholder="placeholder"
        placeholder-class="placeholder-style"
        :value="modelValue"
        @input="onInput"
        :focus="false"
      />
    </view>
  </view>
</template>

<script>
export default {
  name: "InputCard",
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
    label: {
      type: String,
      default: "Enter the number you hear",
    },
    placeholder: {
      type: String,
      default: "0.00",
    },
  },
  emits: ["update:modelValue"],
  methods: {
    onInput(e) {
      this.$emit("update:modelValue", e.detail.value);
    },
  },
};
</script>

<style lang="scss" scoped>
/* Input Section */
.input-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;

  .input-label {
    font-size: 14px;
    color: var(--text-main);
    margin-bottom: 12px;
    font-weight: 500;
  }

  .input-box {
    width: 100%;

    .number-input {
      width: 100%;
      height: 60px;
      background-color: transparent;
      border: 2px solid var(--accent-blue);
      border-radius: 12px;
      text-align: center;
      font-size: 24px;
      color: var(--text-main);
      font-weight: bold;
    }
  }
}

.placeholder-style {
  color: #3a3a3c;
}
</style>
