<template>
  <view class="container" :data-theme="pageThemeAttr">
    <custom-header :title="$t('profile.questionsPerSession')" />

    <scroll-view scroll-y class="content-scroll">
      <view class="content-wrapper">
        <view class="options-list">
          <view v-for="(option, index) in options" :key="index" class="option-card" :class="{ 'active': selectedOption === option.value }" @click="selectOption(option.value)">
            <text class="option-text">{{ option.label }}</text>
            <view v-if="selectedOption === option.value" class="check-circle">
              <text class="check-icon">✓</text>
            </view>
          </view>
        </view>

        <text class="description-text">
          {{ $t('profile.questionsSessionDesc') }}
        </text>
      </view>
    </scroll-view>
  </view>
</template>

<script>
import CustomHeader from "@/components/nav/custom-header.vue";
import { mapState, mapActions } from "pinia";
import { useUserStore } from "@/stores/user";

export default {
  components: {
    CustomHeader,
  },
  computed: {
    ...mapState(useUserStore, ["settings"]),
    selectedOption() {
      return this.settings.questionsPerSession;
    },
    options() {
      return [
        { label: `5 ${this.$t("profile.questions")}`, value: 5 },
        { label: `10 ${this.$t("profile.questions")}`, value: 10 },
        { label: `20 ${this.$t("profile.questions")}`, value: 20 },
        { label: `50 ${this.$t("profile.questions")}`, value: 50 },
      ];
    },
  },
  methods: {
    ...mapActions(useUserStore, ["setQuestionsPerSession"]),
    selectOption(value) {
      this.setQuestionsPerSession(value);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  background-color: var(--bg-color);
  display: flex;
  flex-direction: column;
}

.content-scroll {
  flex: 1;
  width: 100%;
}

.content-wrapper {
  padding: 24px;
  padding-top: calc(var(--status-bar-height) + 44px + 24px);
  padding-bottom: 40px;
}

.options-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}

.option-card {
  background-color: var(--card-bg);
  border-radius: 12px;
  padding: 20px;
  border: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease;

  &.active {
    border-color: var(--accent-blue);
    background-color: rgba(43, 134, 255, 0.05);

    .option-text {
      color: var(--text-main);
      font-weight: bold;
    }
  }
}

.option-text {
  font-size: 16px;
  color: var(--text-main);
  font-weight: 500;
}

.check-circle {
  width: 24px;
  height: 24px;
  background-color: var(--accent-blue);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.check-icon {
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
}

.description-text {
  font-size: 14px;
  color: var(--text-sub);
  text-align: center;
  line-height: 1.6;
  padding: 0 16px;
  display: block;
}
</style>
