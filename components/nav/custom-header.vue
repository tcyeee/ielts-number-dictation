<template>
  <view class="fixed-header">
    <safe-area-top />
    <view class="nav-header">
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
  methods: {
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
