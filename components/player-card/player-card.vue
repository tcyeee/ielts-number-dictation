<template>
  <view class="player-card">
    <view class="player-header">
      <view class="icon-box">
        <text class="speaker-icon">🔊</text>
      </view>
      <view class="track-info">
        <text class="track-title">Listening Item #{{ currentQuestion.toString().padStart(2, '0') }}</text>
        <text class="track-subtitle">Focus: {{ category }}</text>
      </view>
    </view>

    <!-- Visualizer Placeholder -->
    <view class="visualizer">
      <view class="bar" v-for="i in 5" :key="i" :style="{ height: (20 + Math.random() * 20) + 'px' }"></view>
    </view>

    <!-- Slider & Time -->
    <slider class="audio-slider" :value="currentTime" min="0" :max="duration" activeColor="#007aff" backgroundColor="#3a3a3c" block-size="12" @change="onSliderChange" />
    <view class="time-row">
      <text class="time-text">{{ formatTime(currentTime) }}</text>
      <text class="time-text">{{ formatTime(duration) }}</text>
    </view>

    <!-- Controls -->
    <view class="controls">
      <view class="control-btn sm" @click="$emit('rewind')">
        <text class="control-icon">↺</text>
        <text class="control-label">-5s</text>
      </view>
      <view class="control-btn lg play-btn" @click="$emit('togglePlay')">
        <text class="play-icon">{{ isPlaying ? '❚❚' : '▶' }}</text>
      </view>
      <view class="control-btn sm" @click="$emit('changeSpeed')">
        <text class="control-icon">⏱</text>
        <text class="control-label">{{ playbackRate }}x</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "PlayerCard",
  props: {
    currentQuestion: {
      type: Number,
      default: 1,
    },
    category: {
      type: String,
      default: "General",
    },
    currentTime: {
      type: Number,
      default: 0,
    },
    duration: {
      type: Number,
      default: 0,
    },
    isPlaying: {
      type: Boolean,
      default: false,
    },
    playbackRate: {
      type: Number,
      default: 1.0,
    },
  },
  emits: ["rewind", "togglePlay", "changeSpeed", "sliderChange"],
  methods: {
    formatTime(seconds) {
      const m = Math.floor(seconds / 60);
      const s = Math.floor(seconds % 60);
      return `${m}:${s.toString().padStart(2, "0")}`;
    },
    onSliderChange(e) {
      this.$emit("sliderChange", e.detail.value);
    },
  },
};
</script>

<style lang="scss" scoped>
/* Player Card */
.player-card {
  background-color: var(--card-bg);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .player-header {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 24px;

    .icon-box {
      width: 48px;
      height: 48px;
      background-color: rgba(43, 134, 255, 0.1);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 16px;

      .speaker-icon {
        font-size: 24px;
        color: var(--accent-blue);
      }
    }

    .track-info {
      display: flex;
      flex-direction: column;

      .track-title {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 4px;
        color: var(--text-main);
      }

      .track-subtitle {
        font-size: 13px;
        color: var(--text-sub);
      }
    }
  }

  .visualizer {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin-bottom: 20px;

    .bar {
      width: 4px;
      background-color: var(--accent-blue);
      border-radius: 2px;
      opacity: 0.6;
    }
  }

  .audio-slider {
    width: 100%;
    margin: 0;
  }

  .time-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    margin-bottom: 20px;

    .time-text {
      font-size: 12px;
      color: var(--text-sub);
    }
  }

  .controls {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .control-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &.sm {
        width: 50px;
        height: 50px;
        border-radius: 25px;
        background-color: rgba(255, 255, 255, 0.1);
      }

      &.lg {
        width: 70px;
        height: 70px;
        border-radius: 35px;
        background-color: var(--accent-blue);
        box-shadow: 0 4px 12px rgba(43, 134, 255, 0.4);
      }

      .control-icon {
        font-size: 18px;
        color: var(--text-main);
        margin-bottom: 2px;
      }

      .play-icon {
        font-size: 24px;
        color: white;
      }

      .control-label {
        font-size: 10px;
        color: var(--text-sub);
      }
    }
  }
}
</style>
