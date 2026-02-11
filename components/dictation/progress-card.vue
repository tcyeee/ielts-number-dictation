<template>
  <view class="progress-section">
    <view class="progress-header">
      <view class="tag">{{ tag }}</view>
      <text class="counter">Question <text class="highlight">{{ current }}</text> of {{ total }}</text>
    </view>
    <view class="progress-bar-bg">
      <view class="progress-bar-fill" :style="{ width: progressPercentage + '%' }"></view>
    </view>
  </view>
</template>

<script>
export default {
  name: "ProgressCard",
  props: {
    current: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    tag: {
      type: String,
      default: "PRICES & CURRENCIES"
    }
  },
  computed: {
    progressPercentage() {
      if (this.total === 0) return 0;
      return (this.current / this.total) * 100;
    }
  }
};
</script>

<style lang="scss" scoped>
/* Progress Section */
.progress-section {
  .progress-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  .tag {
    background-color: rgba(43, 134, 255, 0.2);
    color: var(--accent-blue);
    font-size: 10px;
    font-weight: 700;
    padding: 4px 8px;
    border-radius: 12px;
    letter-spacing: 0.5px;
  }

  .counter {
    font-size: 14px;
    color: var(--text-sub);

    .highlight {
      color: var(--text-main);
      font-weight: bold;
    }
  }

  .progress-bar-bg {
    height: 6px;
    background-color: #2c2c2e;
    border-radius: 3px;
    overflow: hidden;
  }

  .progress-bar-fill {
    height: 100%;
    background-color: var(--accent-blue);
    border-radius: 3px;
    transition: width 0.3s ease;
  }
}
</style>
