<template>
  <view class="bottom-nav">
    <view
      class="nav-item"
      :class="{ active: current === 0 }"
      @click="switchTab('home')"
      @touchstart="onTouchStart(0)"
      @touchend="onTouchEnd(0)"
    >
      <view class="nav-icon-wrapper" :class="{ pressed: pressedIndex === 0 }">
        <text class="nav-icon">🏠</text>
      </view>
    </view>
    <view
      class="nav-item"
      :class="{ active: current === 1 }"
      @click="switchTab('history')"
      @touchstart="onTouchStart(1)"
      @touchend="onTouchEnd(1)"
    >
      <view class="nav-icon-wrapper" :class="{ pressed: pressedIndex === 1 }">
        <text class="nav-icon">📊</text>
      </view>
    </view>
    <view
      class="nav-item"
      :class="{ active: current === 2 }"
      @click="switchTab('profile')"
      @touchstart="onTouchStart(2)"
      @touchend="onTouchEnd(2)"
    >
      <view class="nav-icon-wrapper" :class="{ pressed: pressedIndex === 2 }">
        <text class="nav-icon">👤</text>
      </view>
    </view>
  </view>
</template>

<script>
import { redirectTo } from "@/utils/router.ts";

const TAB_ROUTES = ["home", "history", "profile"];

export default {
  name: "bottom-nav",
  props: {
    current: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      pressedIndex: -1,
    };
  },
  methods: {
    switchTab(route) {
      const idx = TAB_ROUTES.indexOf(route);
      if (idx === this.current) return;
      redirectTo(route);
    },
    onTouchStart(index) {
      this.pressedIndex = index;
    },
    onTouchEnd(index) {
      this.pressedIndex = -1;
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
  box-shadow: 0 8rpx 32rpx rgba(0, 0, 0, 0.4),
    0 2rpx 8rpx rgba(0, 0, 0, 0.3);
  z-index: 100;
  padding: 0 20rpx;
}

.nav-item {
  width: 96rpx;
  height: 96rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.nav-icon-wrapper {
  width: 80rpx;
  height: 80rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.nav-icon-wrapper.pressed {
  transform: scale(0.8);
}

.nav-icon {
  font-size: 44rpx;
  transition: transform 0.2s ease;
}

.nav-item.active .nav-icon-wrapper {
  background-color: rgba($accent-blue, 0.15);
}

.nav-item.active .nav-icon {
  transform: scale(1.1);
}
</style>
