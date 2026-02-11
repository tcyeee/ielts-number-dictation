<template>
  <view class="container" :data-theme="pageThemeAttr">
    <CustomNavbar title="Number Dictation" />
    <SafeAreaTop size="m" />
    <view class="content">
      <!-- Progress Section -->
      <ProgressCard :current="currentQuestion" :total="totalQuestions" tag="PRICES & CURRENCIES" />

      <!-- Player Card -->
      <PlayerCard :currentQuestion="currentQuestion" :currentTime="currentTime" :duration="duration" :isPlaying="isPlaying" :playbackRate="playbackRate" @rewind="rewind" @togglePlay="togglePlay" @changeSpeed="changeSpeed" @sliderChange="onSliderChange" />

      <!-- Input Section -->
      <InputCard v-model="answer" />

      <!-- Actions -->
      <view class="actions">
        <button class="btn-primary" @click="submitAnswer">Submit Answer</button>
        <button class="btn-secondary" @click="notSure">I'm not sure</button>
      </view>
    </view>
  </view>
</template>

<script>
import CustomNavbar from "@/components/nav/custom-header.vue";
import SafeAreaTop from "@/components/safe-area/safe-area-top.vue";
import ProgressCard from "@/components/dictation/progress-card.vue";
import PlayerCard from "@/components/player-card/player-card.vue";
import InputCard from "@/components/input-card/input-card.vue";
import { getQuestions } from "@/service/api";

export default {
  components: {
    CustomNavbar,
    SafeAreaTop,
    ProgressCard,
    PlayerCard,
    InputCard,
  },
  data() {
    return {
      currentQuestion: 3,
      totalQuestions: 10,
      currentTime: 2,
      duration: 5,
      isPlaying: false,
      playbackRate: 1.0,
      answer: "",
    };
  },
  onLoad() {
    getQuestions().then((res) => {
      console.log(res);
    });
  },
  methods: {
    goBack() {
      uni.navigateBack();
    },
    togglePlay() {
      this.isPlaying = !this.isPlaying;
    },
    rewind() {
      this.currentTime = Math.max(0, this.currentTime - 5);
    },
    changeSpeed() {
      const speeds = [1.0, 1.25, 1.5, 0.75];
      const idx = speeds.indexOf(this.playbackRate);
      this.playbackRate = speeds[(idx + 1) % speeds.length];
    },
    onSliderChange(val) {
      this.currentTime = val;
    },
    submitAnswer() {
      console.log("Answer:", this.answer);
    },
    notSure() {
      console.log("Not sure");
    },
  },
};
</script>

<style lang="scss">
@import "@/uni.scss";

.container {
  min-height: 100vh;
  background-color: var(--bg-color);
  color: var(--text-main);
  display: flex;
  flex-direction: column;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background-color: var(--bg-color);
  z-index: 100;

  .nav-title {
    font-size: 18px;
    font-weight: 600;
  }

  .icon {
    font-size: 20px;
    color: var(--text-main);
    padding: 8px;
  }
}

.content {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* Actions */
.actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: auto;
  margin-bottom: 20px;

  button {
    width: 100%;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;

    &::after {
      border: none;
    }
  }

  .btn-primary {
    background-color: var(--accent-blue);
    color: white;
  }

  .btn-secondary {
    background-color: #2c2c2e;
    color: #8e8e93;
  }
}
</style>