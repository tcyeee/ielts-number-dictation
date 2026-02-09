import { useUserStore } from "@/stores/user";
import themeConfig from "@/theme.json";

/**
 * 全局主题 Mixin
 * 自动为页面注入主题相关的 computed 和 data
 * 支持自动跟随系统 + 手动切换主题
 */
export default {
  data() {
    return {
      currentTheme: 'auto', // 当前应用的主题（auto/light/dark）
    };
  },

  computed: {
    /**
     * 获取实际显示的主题（考虑手动设置和系统设置）
     * @returns {'light' | 'dark' | null} 返回 light/dark 用于强制主题，null 用于跟随系统
     */
    actualTheme() {
      const userStore = useUserStore();
      const themeMode = userStore.settings.themeMode;

      if (themeMode === 'light') {
        return 'light';
      } else if (themeMode === 'dark') {
        return 'dark';
      } else {
        // auto 模式：不返回固定值，让 CSS media query 生效
        return null;
      }
    },

    /**
     * 用于绑定到页面根元素的 data-theme 属性
     * 如果是 auto 模式，返回 undefined（不设置 data-theme）
     * 如果是 light/dark 模式，返回对应的值（强制覆盖）
     */
    pageThemeAttr() {
      return this.actualTheme || undefined;
    }
  },

  onShow() {
    // 监听主题切换事件
    uni.$on('themeChange', this.handleThemeChange);
    
    // 监听系统主题变化（针对 auto 模式）
    uni.$on('systemThemeChange', this.handleSystemThemeChange);

    // 初始化主题
    this.handleThemeChange();
  },

  onHide() {
    // 移除监听
    uni.$off('themeChange', this.handleThemeChange);
    uni.$off('systemThemeChange', this.handleSystemThemeChange);
  },

  methods: {
    handleSystemThemeChange() {
      // 仅当设置为 auto 时，系统主题变化才需要触发原生导航栏更新
      // 如果是手动模式，系统主题变化不应影响显示
      const userStore = useUserStore();
      if (userStore.settings.themeMode === 'auto') {
        this.updateNativeUI('auto');
      }
    },

    handleThemeChange() {
      const userStore = useUserStore();
      this.currentTheme = userStore.settings.themeMode;

      // 强制更新视图
      this.$forceUpdate();
      
      // 更新原生导航栏和背景色
      this.updateNativeUI(this.currentTheme);
    },

    updateNativeUI(mode) {
      let targetTheme = mode;
      
      if (mode === 'auto') {
        const systemInfo = uni.getSystemInfoSync();
        targetTheme = systemInfo.theme || 'light';
      }

      const config = themeConfig[targetTheme];
      if (!config) return;

      // 设置导航栏颜色
      // 注意：frontColor 仅支持 #ffffff 或 #000000
      const frontColor = config.navTextStyle === 'white' ? '#ffffff' : '#000000';
      
      uni.setNavigationBarColor({
        frontColor: frontColor,
        backgroundColor: config.navBgColor,
        animation: {
          duration: 300,
          timingFunc: 'easeIn'
        }
      });

      // 设置页面背景色
      uni.setBackgroundColor({
        backgroundColor: config.bgColor,
        backgroundColorTop: config.bgColor,
        backgroundColorBottom: config.bgColor,
      });
    }
  }
};
