<template>
  <view class="container" :data-theme="pageThemeAttr">
    <CustomNavbar title="Number Dictation" />
    <SafeAreaTop size="m" />
    <view class="content">
      <!-- Progress Section -->
      <ProgressCard :current="currentQuestionNumber" :total="totalQuestions" :tag="categoryTag" />

      <!-- Player Card -->
      <PlayerCard :currentQuestion="currentQuestionNumber" :category="categoryTag" :currentTime="currentTime" :duration="duration" :isPlaying="isPlaying" :playbackRate="playbackRate" @rewind="rewind" @togglePlay="togglePlay" @changeSpeed="changeSpeed" @sliderChange="onSliderChange" />

      <!-- Input Section -->
      <InputCard v-model="answer" :label="inputLabel" />

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
      questions: [],
      currentIndex: 0,
      currentTime: 0,
      duration: 0,
      isPlaying: false,
      playbackRate: 1.0,
      answer: "",
      isLoading: true,
      audioContext: null,
    };
  },
  computed: {
    currentQuestionData() {
      return this.questions[this.currentIndex] || {};
    },
    totalQuestions() {
      return this.questions.length;
    },
    currentQuestionNumber() {
      return this.currentIndex + 1;
    },
    categoryTag() {
      return this.currentQuestionData.trainingCategory || "Loading...";
    },
    inputLabel() {
      return (
        this.currentQuestionData.question?.prompt ||
        "Listen and type the number"
      );
    },
  },
  onLoad() {
    this.initAudioContext();
    this.loadQuestions();
  },
  onUnload() {
    if (this.audioContext) {
      this.audioContext.destroy();
    }
  },
  methods: {
    initAudioContext() {
      this.audioContext = uni.createInnerAudioContext();
      this.audioContext.onPlay(() => {
        this.isPlaying = true;
      });
      this.audioContext.onPause(() => {
        this.isPlaying = false;
      });
      this.audioContext.onStop(() => {
        this.isPlaying = false;
        this.currentTime = 0;
      });
      this.audioContext.onEnded(() => {
        this.isPlaying = false;
        this.currentTime = 0;
      });
      this.audioContext.onTimeUpdate(() => {
        this.currentTime = this.audioContext.currentTime;
        this.duration = this.audioContext.duration;
      });
      this.audioContext.onError((res) => {
        console.error("Audio Error:", res);
        uni.showToast({ title: "Audio Error", icon: "none" });
      });
    },
    loadQuestions() {
      this.isLoading = true;
      getQuestions()
        .then((res) => {
          if (res.questions && res.questions.length > 0) {
            this.questions = res.questions;
            this.setAudioSource();
          } else {
            uni.showToast({ title: "No questions found", icon: "none" });
          }
        })
        .catch((err) => {
          console.error(err);
          uni.showToast({ title: "Failed to load", icon: "none" });
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    setAudioSource() {
      if (!this.audioContext || !this.currentQuestionData.audio) return;

      const audioUrl = this.currentQuestionData.audio.audioUrl;
      if (audioUrl) {
        this.audioContext.src = audioUrl;
        this.currentTime = 0;
        this.duration = 0;
        this.isPlaying = false;
        // Set playback rate if previously changed
        if (
          this.audioContext.playbackRate !== undefined &&
          this.playbackRate !== 1.0
        ) {
          this.audioContext.playbackRate = this.playbackRate;
        }
      } else {
        console.warn(
          "No audio URL found for question",
          this.currentQuestionData.id
        );
      }
    },
    goBack() {
      uni.navigateBack();
    },
    togglePlay() {
      if (!this.audioContext) return;
      if (this.isPlaying) {
        this.audioContext.pause();
      } else {
        this.audioContext.play();
      }
    },
    rewind() {
      if (!this.audioContext) return;
      const newTime = Math.max(0, this.currentTime - 5);
      this.audioContext.seek(newTime);
    },
    changeSpeed() {
      const speeds = [1.0, 1.25, 1.5, 0.75];
      const idx = speeds.indexOf(this.playbackRate);
      this.playbackRate = speeds[(idx + 1) % speeds.length];
      if (this.audioContext) {
        this.audioContext.playbackRate = this.playbackRate;
      }
    },
    onSliderChange(val) {
      this.currentTime = val;
      if (this.audioContext) {
        this.audioContext.seek(val);
      }
    },
    submitAnswer() {
      if (!this.answer) return;
      console.log(
        "Submitted:",
        this.answer,
        "Expected:",
        this.currentQuestionData.answer.value
      );
      this.nextQuestion();
    },
    notSure() {
      console.log("Skipped");
      this.nextQuestion();
    },
    nextQuestion() {
      if (this.currentIndex < this.questions.length - 1) {
        this.currentIndex++;
        this.answer = "";
        this.setAudioSource();
      } else {
        uni.showToast({ title: "Session Complete!", icon: "success" });
      }
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