<template>
  <view class="page-root">
    <view v-show="currentTab === 0">
      <home-content />
    </view>
    <view v-show="currentTab === 1">
      <history-content />
    </view>
    <view v-show="currentTab === 2">
      <profile-content />
    </view>
    <bottom-nav :current="currentTab" @change="onTabChange" />
  </view>
</template>

<script>
import HomeContent from "./home-content.vue";
import HistoryContent from "./history-content.vue";
import ProfileContent from "./profile-content.vue";
import BottomNav from "@/components/bottom-nav/bottom-nav.vue";

export default {
  components: {
    HomeContent,
    HistoryContent,
    ProfileContent,
    BottomNav,
  },
  data() {
    return {
      currentTab: 0,
    };
  },
  onLoad(query) {
    if (query && query.tab !== undefined) {
      const tab = parseInt(query.tab, 10);
      if (tab >= 0 && tab <= 2) {
        this.currentTab = tab;
      }
    }
  },
  methods: {
    onTabChange(index) {
      this.currentTab = index;
    },
  },
};
</script>

<style lang="scss">
page {
  background-color: $bg-color;
  min-height: 100vh;
  padding-bottom: 120rpx;
}
</style>
