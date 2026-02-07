<template>
  <view class="safe-area-bottom" :style="{ height: height + 'px' }"></view>
</template>

<script>
export default {
  name: "safe-area-bottom",
  data() {
    return {
      height: 0,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const sys = uni.getSystemInfoSync();
      // Use safeAreaInsets.bottom if available, otherwise 0
      if (sys.safeAreaInsets && sys.safeAreaInsets.bottom) {
        this.height = sys.safeAreaInsets.bottom;
      }
    },
  },
};
</script>

<style scoped>
.safe-area-bottom {
  width: 100%;
}
</style>
