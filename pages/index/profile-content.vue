<template>
  <view class="container">
    <!-- Top Safe Area -->
    <safe-area-top size="s" />

    <view class="content">
      <!-- Header Section -->
      <view class="header">
        <view class="avatar-wrapper">
          <image class="avatar" :src="userInfo.avatar" mode="aspectFill"></image>
          <view class="edit-badge">
            <image src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEgNEg0YTIgMiAwIDAgMC0yIDJ2MTRhMiAyIDAgMCAwIDIgMmgxNGEyIDIgMCAwIDAgMi0ydi03IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgLz48cGF0aCBkPSJNMTguNSAyLjVhMi4xMjEgMi4xMjEgMCAwIDEgMyAzTDEyIDE1bC00IDEgMS00IDkuNS05LjV6IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgLz48L3N2Zz4=" style="width: 28rpx; height: 28rpx;"></image>
          </view>
        </view>
        <text class="user-name">{{ userInfo.name }}</text>
        <text class="user-stats">Level {{ userInfo.level }} • {{ userInfo.streak }} Day Streak</text>
        <view class="edit-profile-btn">
          <text class="btn-text">Edit Profile</text>
        </view>
      </view>

      <!-- Dark Mode Group -->
      <view class="menu-group">
        <view class="menu-item">
          <view class="item-left">
            <view class="icon-box" style="background-color: rgba(255, 179, 0, 0.1)">
              <!-- Sun Icon -->
              <image src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI1IiBzdHJva2U9IiNmZmIzMDAiIHN0cm9rZS13aWR0aD0iMiIgLz48cGF0aCBkPSJNMTIgMXYyTTEyIDIxdjJNNC4yMiA0LjIybDEuNDIgMS40Mk0xOC4zNiAxOC4zNmwxLjQyIDEuNDJNMSAxMmgyTTIxIDEyaDJNNC4yMiAxOS43OGwxLjQyLTEuNDJNMTguMzYgNS42NGwxLjQyLTEuNDIiIHN0cm9rZT0iI2ZmYjMwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIC8+PC9zdmc+" style="width: 40rpx; height: 40rpx;"></image>
            </view>
            <text class="item-text">Dark Mode</text>
          </view>
          <switch :checked="isDarkMode" color="#2b86ff" style="transform:scale(0.8)" @change="toggleDarkMode" />
        </view>
      </view>

      <!-- Settings Group -->
      <view class="menu-group">
        <!-- Notification Settings -->
        <view class="menu-item">
          <view class="item-left">
            <view class="icon-box" style="background-color: rgba(157, 101, 255, 0.1)">
              <!-- Bell Icon -->
              <image src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTggOEE2IDYgMCAwMDYgOGMwIDctMyA5LTMgOWgxOHMtMy0yLTMtOSIgc3Ryb2tlPSIjOWQ2NWZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgLz48cGF0aCBkPSJNMTMuNzMgMjFhMiAyIDAgMDEtMy40NiAwIiBzdHJva2U9IiM5ZDY1ZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPjwvc3ZnPg==" style="width: 40rpx; height: 40rpx;"></image>
            </view>
            <text class="item-text">Notification Settings</text>
          </view>
          <text class="arrow">›</text>
        </view>

        <!-- Questions Per Session -->
        <view class="menu-item">
          <view class="item-left">
            <view class="icon-box" style="background-color: rgba(43, 134, 255, 0.1)">
              <!-- List Icon -->
              <image src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOCA2aDEzTTggMTJoMTNNOCAxOGgxM00zIDZoLjAxTTMgMTJoLjAxTTMgMThoLjAxIiBzdHJva2U9IiMyYjg2ZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPjwvc3ZnPg==" style="width: 40rpx; height: 40rpx;"></image>
            </view>
            <text class="item-text">Questions Per Session</text>
          </view>
          <view class="item-right">
            <text class="value-text">{{ questionsPerSession }}</text>
            <text class="arrow">›</text>
          </view>
        </view>

        <!-- App Language -->
        <view class="menu-item">
          <view class="item-left">
            <view class="icon-box" style="background-color: rgba(0, 210, 106, 0.1)">
              <!-- Globe Icon -->
              <image src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgc3Ryb2tlPSIjMDBkMjZhIiBzdHJva2Utd2lkdGg9IjIiIC8+PHBhdGggZD0iTTIgMTJoMjBNMTIgMmExNS4zIDE1LjMgMCAwMTQgMTAgMTUuMyAxNS4zIDE1LjMgMCAwMS00IDEwIDE1LjMgMTUuMyAwIDAxNC0xMCAxNS4zIDE1LjMgMCAwMTQtMTB6IiBzdHJva2U9IiMwMGQyNmEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPjwvc3ZnPg==" style="width: 40rpx; height: 40rpx;"></image>
            </view>
            <text class="item-text">App Language</text>
          </view>
          <view class="segment-control">
            <view class="segment-option" :class="{ active: currentLanguage === 'EN' }" @click="setLanguage('EN')">EN</view>
            <view class="segment-option" :class="{ active: currentLanguage === 'CN' }" @click="setLanguage('CN')">CN</view>
          </view>
        </view>
      </view>

      <!-- Support Group -->
      <view class="menu-group">
        <!-- Help & Support -->
        <view class="menu-item">
          <view class="item-left">
            <view class="icon-box" style="background-color: rgba(255, 107, 53, 0.1)">
              <!-- Help Icon -->
              <image src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgc3Ryb2tlPSIjZmY2YjM1IiBzdHJva2Utd2lkdGg9IjIiIC8+PHBhdGggZD0iTTkuMDkgOWEzIDMgMCAwMTUuODMgMWMwIDItMyAzLTMgMyIgc3Ryb2tlPSIjZmY2YjM1IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgLz48cGF0aCBkPSJNMTIgMTdoLjAxIiBzdHJva2U9IiNmZjZiMzUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPjwvc3ZnPg==" style="width: 40rpx; height: 40rpx;"></image>
            </view>
            <text class="item-text">Help & Support</text>
          </view>
          <text class="arrow">›</text>
        </view>

        <!-- About Us -->
        <view class="menu-item">
          <view class="item-left">
            <view class="icon-box" style="background-color: rgba(139, 155, 180, 0.1)">
              <!-- Info Icon -->
              <image src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgc3Ryb2tlPSIjOGI5YmI0IiBzdHJva2Utd2lkdGg9IjIiIC8+PHBhdGggZD0iTTEyIDE2di00TTEyIDhoLjAxIiBzdHJva2U9IiM4YjliYjQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPjwvc3ZnPg==" style="width: 40rpx; height: 40rpx;"></image>
            </view>
            <text class="item-text">About Us</text>
          </view>
          <text class="arrow">›</text>
        </view>
      </view>

    </view>
  </view>
</template>

<script>
import SafeAreaTop from "@/components/safe-area/safe-area-top.vue";

export default {
  components: {
    SafeAreaTop,
  },
  data() {
    return {
      userInfo: {
        name: "Alex",
        level: 12,
        streak: 5,
        avatar:
          "https://api.dicebear.com/9.x/avataaars/png?seed=Alex&backgroundColor=ffdfbf",
      },
      isDarkMode: true,
      currentLanguage: "EN",
      questionsPerSession: 10,
    };
  },
  methods: {
    toggleDarkMode(e) {
      this.isDarkMode = e.detail.value;
      // Implement theme switching logic here
    },
    setLanguage(lang) {
      this.currentLanguage = lang;
      // Implement language switching logic here
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  background-color: $bg-color;
  padding-bottom: 200rpx; /* Space for bottom nav */
}

.content {
  padding: 20rpx 40rpx;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40rpx;
  margin-bottom: 60rpx;
}

.avatar-wrapper {
  position: relative;
  width: 160rpx;
  height: 160rpx;
  margin-bottom: 24rpx;
}

.avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 4rpx solid $card-bg;
}

.edit-badge {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 48rpx;
  height: 48rpx;
  background-color: $accent-blue;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4rpx solid $bg-color;
}

.user-name {
  font-size: 40rpx;
  font-weight: bold;
  color: $text-main;
  margin-bottom: 8rpx;
}

.user-stats {
  font-size: $uni-font-size-base;
  color: $text-sub;
  margin-bottom: 30rpx;
}

.edit-profile-btn {
  padding: 12rpx 40rpx;
  border: 2rpx solid #2c3545;
  border-radius: 40rpx;
  background-color: rgba(255, 255, 255, 0.05);
}

.btn-text {
  font-size: $uni-font-size-base;
  color: $text-main;
  font-weight: 500;
}

.menu-group {
  background-color: $card-bg;
  border-radius: 30rpx;
  padding: 10rpx 0;
  margin-bottom: 30rpx;
  border: 1rpx solid rgba(255, 255, 255, 0.05);
}

.menu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30rpx 40rpx;
  /* active state */
  &:active {
    background-color: $uni-bg-color-hover;
  }
}

.item-left {
  display: flex;
  align-items: center;
}

.icon-box {
  width: 80rpx;
  height: 80rpx;
  border-radius: 24rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30rpx;
}

.item-text {
  font-size: $uni-font-size-lg;
  color: $text-main;
  font-weight: 500;
}

.item-right {
  display: flex;
  align-items: center;
}

.value-text {
  font-size: $uni-font-size-base;
  color: $accent-blue;
  font-weight: 600;
  margin-right: 10rpx;
}

.arrow {
  font-size: 40rpx;
  color: $text-sub;
  font-weight: 300;
  margin-right: -10rpx;
  line-height: 1;
}

/* Segment Control */
.segment-control {
  display: flex;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 12rpx;
  padding: 4rpx;
}

.segment-option {
  padding: 8rpx 20rpx;
  font-size: 24rpx;
  color: $text-sub;
  border-radius: 8rpx;
  font-weight: 600;
  transition: all 0.2s;

  &.active {
    background-color: $accent-blue;
    color: #ffffff;
  }
}
</style>