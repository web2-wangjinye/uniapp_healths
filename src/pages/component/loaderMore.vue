<template>
  <view class="uni-load-more">
    <view class="uni-load-more__img" v-if="status === 'loading' && showIcon"
      ><view class="loadingView" :style="{ color: color }">&#xe6a6;</view></view
    >

    <text class="uni-load-more__text" :style="{ color: color }">
      {{
        status === "more"
          ? contentText.contentdown
          : status === "loading"
          ? contentText.contentrefresh
          : contentText.contentnomore
      }}
    </text>
  </view>
</template>

<script>
export default {
  name: "uLi-load-more",
  props: {
    status: {
      //上拉的状态：more-loading前；loading-loading中；noMore-没有更多了
      type: String,
      default: "loading",
    },

    showIcon: {
      type: Boolean,
      default: true,
    },

    color: {
      type: String,
      default: "#969799",
    },

    contentText: {
      type: Object,

      default() {
        return {
          contentdown: "上拉显示更多",
          contentrefresh: "正在加载...",
          contentnomore: "没有更多数据了",
        };
      },
    },
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>

.loadingView {
  font-family: uniicons;
  line-height: 1;
  font-size: 32rpx;
  animation: rotate 1s linear infinite; //linear// 意思就是匀速的运动  infinite// 就是无限滚动的意思
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.uni-load-more {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 20rpx;

  &__text {
    font-size: 28rpx;
    color: red;
  }

  &__img {
    height: 20rpx;
    width: 20rpx;
    margin-right: 10rpx;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>