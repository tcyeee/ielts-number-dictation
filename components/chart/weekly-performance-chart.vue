<template>
  <view class="card chart-card">
    <view class="chart-header">
      <view>
        <text class="section-title">Weekly Performance</text>
        <text class="chart-big-value">{{ percentage }}</text>
      </view>
      <view class="date-badge">
        <text class="date-text">{{ dateRange }}</text>
      </view>
    </view>

    <view class="chart-area">
      <!-- Simple SVG Line Chart -->
      <svg viewBox="0 0 300 100" class="line-chart-svg">
        <!-- Gradient Definition -->
        <defs>
          <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="#2b86ff" stop-opacity="0.3" />
            <stop offset="100%" stop-color="#2b86ff" stop-opacity="0" />
          </linearGradient>
        </defs>
        <!-- Area -->
        <path d="M0,80 Q30,40 50,50 T100,60 T150,40 T200,80 T250,20 T300,50 V100 H0 Z" fill="url(#gradient)" />
        <!-- Line -->
        <path d="M0,80 Q30,40 50,50 T100,60 T150,40 T200,80 T250,20 T300,50" fill="none" stroke="#2b86ff" stroke-width="3" stroke-linecap="round" />
      </svg>

      <!-- X-Axis Labels -->
      <view class="chart-labels">
        <text class="label-text" v-for="(day, index) in days" :key="index">{{ day }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'WeeklyPerformanceChart',
  props: {
    days: {
      type: Array,
      default: () => ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
    },
    percentage: {
      type: [String, Number],
      default: "88%"
    },
    dateRange: {
      type: String,
      default: "OCT 18 - 24"
    }
  }
}
</script>

<style lang="scss" scoped>
/* Chart Card */
.chart-card {
  background-color: $card-bg;
  border-radius: 30rpx;
  padding: 40rpx 30rpx;
  margin-bottom: 40rpx;

  .chart-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 30rpx;

    .section-title {
      color: $text-sub;
      font-size: 28rpx;
      display: block;
      margin-bottom: 10rpx;
    }

    .chart-big-value {
      color: $text-main;
      font-size: 56rpx;
      font-weight: bold;
    }

    .date-badge {
      background-color: rgba(43, 134, 255, 0.2);
      padding: 8rpx 16rpx;
      border-radius: 12rpx;

      .date-text {
        color: $accent-blue;
        font-size: 24rpx;
        font-weight: bold;
      }
    }
  }

  .chart-area {
    width: 100%;

    .line-chart-svg {
      width: 100%;
      height: 200rpx;
    }

    .chart-labels {
      display: flex;
      justify-content: space-between;
      margin-top: 20rpx;
      padding: 0 10rpx;

      .label-text {
        color: $text-sub;
        font-size: 20rpx;
      }
    }
  }
}
</style>
