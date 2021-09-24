<template>
  <view class="shopdetai_parent">
    <headerBar
      title="详情页"
      titleTintColor="#333"
      :bgColor="{ background: '#fff' }"
      :fixed="true"
    >
      <text slot="back" class="uni_icoBack icon icon-zuojiantou"></text>
      <navigator slot="iconfont" url="../index/index" class="uni-inline-item">
        <image src="@/static/images/icon_index.png"></image>
      </navigator>
      <navigator slot="iconfont" url="../my/index" class="uni-inline-item">
        <image src="@/static/images/icon_my.png"></image>
      </navigator>
      <image slot="iconfont" src="@/static/images/icon_phone.png" @tap="makePhoneCall"></image>
    </headerBar>
    <swiper :autoplay="true" :circular="true" class="swiperparent">
      <swiper-item v-for="(item, index) in shopbannerlist" :key="index">
        <view class="swiper-item">
          <image :src="item.src"></image>
        </view>
      </swiper-item>
    </swiper>
    <view class="detail_first">
        <view class="detail_top">
        <view class="currprice_label">当前价</view>
        <view><text class="currprice_price"><text>￥</text>98.00</text><text class="orign_price">￥198.00</text><text class="earn_price"><text>赚￥</text>15.00</text></view>
      </view>
      <view class="detail_tag">
          <text>官方自营</text>
          <text>月销1000+件</text>
      </view>
      <view class="detail_title">龍图腾医用冷敷贴 调节肌肤微生态平衡肌肤镇定剂 强效补水 修护脆弱屏障 </view>
      <view class="detail_introduction">龍图腾医用冷敷贴 调节肌肤微生态平衡 肌肤镇定剂 强效补水 修护脆弱屏障 调节肌肤微生态平衡 肌肤镇定剂强效补水...</view>
    </view>
    <view class="detail_second">

    </view>
  </view>
</template>

<script>
import { channelsList, shopList } from "@/common/js/api.js";
export default {
  props: {
    pagePath: null,
  },
  components: {},
  data() {
    return {
      shopbannerlist: [
        {
          src: require("@/static/images/shopbanner.jpg"),
        },
      ]
    };
  },
  watch: {
  
  },
  beforeCreate() {},
  mounted() {
    let _that = this;
  },
  methods: {
    // 下拉刷新
    onPullDownRefresh() {
      setTimeout(() => {
				location.reload()
      }, 500);
    },
    shopListApi(){
        let _that = this;
    },
    makePhoneCall(){
      uni.makePhoneCall({
        phoneNumber: '114' //仅为示例
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.shopdetai_parent{
  background: #f1f5f4;
.swiperparent {
  height: 750rpx;
  .swiper-item {
    display: block;
    height: 750rpx;
    text-align: center;
    font-size: 0px;
    image {
      width: 100%;
      height: 100%;
    }
  }
}
.detail_first{
  background: #fff;
  margin-bottom:20rpx;
  .detail_top{
      height:140rpx;
      background: url("@/static/images/detail_topbg.png") no-repeat left center;
      background-size: 100% 100%;
      color: #fff;
      display: flex;
      flex-wrap: wrap;
      align-content: center;
      padding: 0px 30rpx;
    .currprice_label{
      font-size: 26rpx;
      width:100%;
    }
    .currprice_price{
      font-size: 46rpx;
      font-weight: 700;
      text{
        font-size: 30rpx;
        font-weight: 400;
      }
    }
    .orign_price{
      font-size: 24rpx;
      text-decoration: line-through;
      margin:0px 10rpx;
    }
    .earn_price{
      font-size: 30rpx;
      font-weight: 700;
      color: #FC2C36;
      background: #FFFFFF;
      border-radius: 25px;
      padding: 4rpx 12rpx;
      text{
        font-size: 24rpx;
        font-weight: 400;
      }
    }
  }
  .detail_tag{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 28rpx;
    color: #999;
    padding: 30rpx 30rpx 18rpx;
    text:nth-of-type(1){
      background: #FC2C36;
      font-size: 22rpx;
      text-align: center;
      color: #fff;
      padding: 4rpx 12rpx;
      border-radius: 28rpx;
    }
  }
  .detail_title{
    font-size: 32rpx;
    padding:0 30rpx 34rpx;
    color: #333;
    font-weight: 700;
  }
  .detail_introduction{
    font-size: 24rpx;
    color: #999999;
    padding: 0px 30rpx 39rpx;
    line-height: 1.8;
  }
}
.detail_second{
  background: #fff;
  min-height: 200rpx;
  margin-bottom:20rpx;
}
}
</style>