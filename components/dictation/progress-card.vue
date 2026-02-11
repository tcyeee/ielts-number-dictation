<template>
  <view class="progress-section">
    <!-- Progress Bars -->
    <view class="progress-bars">
      <view v-for="i in total" :key="i" class="bar-segment" :class="{ active: i <= current }"></view>
    </view>

    <!-- Question Counter -->
    <view class="progress-info">
      <text class="counter">QUESTION {{ current }} OF {{ total }}</text>
    </view>
  </view>
</template>

<script>
export default {
  name: "ProgressCard",
  props: {
    current: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    tag: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.progress-section {
  padding: 10px 0;

  .progress-bars {
    display: flex;
    justify-content: space-between;
    gap: 6px;
    margin-bottom: 12px;

    .bar-segment {
      flex: 1;
      height: 6px;
      background-color: var(--text-sub);
      opacity: 0.2;
      border-radius: 4px;
      transition: all 0.3s ease;

      &.active {
        background-color: var(--accent-blue);
        opacity: 1;
        box-shadow: 0 0 8px rgba(43, 134, 255, 0.4);
      }
    }
  }

  .progress-info {
    text-align: center;

    .counter {
      font-size: 12px;
      font-weight: 800;
      color: var(--text-sub);
      letter-spacing: 2px;
      text-transform: uppercase;
    }
  }
}

/* Dark mode adjustments if needed, though using vars handles most */
:host {
  display: block;
}
</style>
