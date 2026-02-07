<template>
  <view class="bottom-nav">
    <view class="nav-item" :class="{ active: current === 0 }" @click="navTo('/pages/index')">
      <text class="nav-icon">🏠</text>
    </view>
    <view class="nav-item" :class="{ active: current === 1 }" @click="navTo('/pages/history')">
      <text class="nav-icon">📊</text>
    </view>
    <view class="nav-item" :class="{ active: current === 2 }" @click="navTo('/pages/profile')">
      <text class="nav-icon">👤</text>
    </view>
  </view>
</template>

<script>
export default {
  name: "bottom-nav",
  props: {
    current: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    navTo(url) {
      uni.navigateTo({
        url,
      });
    },
  },
};
</script>

<style lang="scss">
.bottom-nav {
  position: fixed;
  bottom: 40rpx;
  left: 40rpx;
  right: 40rpx;
  height: 120rpx;
  background-color: $card-bg;
  border-radius: 60rpx;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 10rpx 30rpx rgba(0, 0, 0, 0.3);
  z-index: 100;
  padding: 0 20rpx;
}

.nav-item {
  width: 80rpx;
  height: 80rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s;
}

.nav-icon {
  font-size: 40rpx;
  color: $text-sub;
}

.nav-item.active .nav-icon {
  color: $accent-blue;
}
</style>
