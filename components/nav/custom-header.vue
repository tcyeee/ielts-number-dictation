<template>
  <view class="fixed-header">
    <safe-area-top />
    <view class="nav-header" :style="{ paddingRight: headerPaddingRight + 'px' }">
      <view class="back-btn" @click="goBack">
        <text class="icon-back">❮</text>
      </view>
      <text class="page-title">{{ title }}</text>
      <view class="header-right">
        <slot name="right"></slot>
      </view>
    </view>
  </view>
</template>

<script>
import SafeAreaTop from "@/components/safe-area/safe-area-top.vue";

export default {
  name: "CustomHeader",
  components: {
    SafeAreaTop,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      headerPaddingRight: 16,
    };
  },
  created() {
    this.initHeaderPadding();
  },
  methods: {
    initHeaderPadding() {
      // #ifdef MP-WEIXIN
      try {
        const systemInfo = uni.getSystemInfoSync();
        const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
        // Calculate the space occupied by the capsule button on the right
        // windowWidth - capsule.left gives the width from the right edge to the left of the capsule
        if (systemInfo && menuButtonInfo) {
          this.headerPaddingRight =
            systemInfo.windowWidth - menuButtonInfo.left;
        }
      } catch (e) {
        console.error("Failed to get menu button info", e);
      }
      // #endif
    },
    goBack() {
      uni.navigateBack();
      this.$emit("back");
    },
  },
};
</script>

<style lang="scss">
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: $bg-color;
}

.nav-header {
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
}

.back-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.icon-back {
  color: $text-main;
  font-size: 24px;
  font-weight: bold;
}

.page-title {
  color: $text-main;
  font-size: 18px;
  font-weight: bold;
}

.header-right {
  width: 40px;
}
</style>
