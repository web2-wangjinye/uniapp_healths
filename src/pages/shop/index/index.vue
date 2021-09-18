<template>
  <view>
    <headerBar
      title="首页"
      titleTintColor="#333"
      :bgColor="{ background: '#fff' }"
      :fixed="true"
      :center="true"
    ></headerBar>
    <swiper :autoplay="true" :circular="true" class="swiperparent">
      <swiper-item v-for="(item, index) in shopbannerlist" :key="index">
        <view class="swiper-item">
          <image :src="item.src"></image>
        </view>
      </swiper-item>
    </swiper>
    <view class="uni-shopcnt">
      <view class="uni-navtitle">
        商品服务
        <text>预见更好的你</text>
      </view>
      <tabControlTag
        :current="current"
        :values="channellist"
        :scrollFlag="true"
        @clickItem="onClickItem"
        v-if="channellist.length > 0"
      ></tabControlTag>
      <view class="uni-shoplist">
        <navigator class="uni-flex uni-alink" v-for="item,index in shoplist" :key="index" :url="'../gooddetail/index?goodId='+item.goodId">
          <image :src="item.firstImgUrl" class="aa"></image>
          <view class="uni-flex-item">
            <view class="uni-ellipsistwo uni-goodname">
              <text class="uni-tag" v-if="item.selfSupportFlag==1">自营</text
              >{{item.goodName}}
            </view>
            <view class="uni-shopattr uni-ellipsis"
              ><text v-for="(attritem,attrindex) in item.attributeArr" :key="attrindex">{{attritem}}</text></view
            >
            <view class="uni-shopbot">
              <view class="uni-shoppriceparent">
               <text class="uni-shopcurrprice">￥<text class="frontPrice">{{ item.minCurrentPriceToYuanStr | totalPrice(true)}}.</text><text>{{ item.minCurrentPriceToYuanStr | totalPrice(false)}}</text></text>
                <text class="uni-shoporignprice">￥{{item.maxOriginalPriceToYuanStr| number}}</text> 
                <text>{{item.orderNumber | Formats}}付款</text>
              </view>
              <view class="uni-shopadvantage uni-ellipsis"
                ><text class="uni-ellipsis" v-for="(titleitem,titleindex) in item.titleArr" :key="titleindex">{{titleitem}}</text
                ></view
              >
            </view>
          </view>
        </navigator>
      </view>
    </view>
    <loaderMore :status="statusmore" v-if="shoplist.length>0"></loaderMore>
    <empty v-else></empty>
    <view class="uni-p-b-98"></view>
    <tabBar :pagePath="'/pages/shop/index'"></tabBar>
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
      ],
      current: 0,
      channellist: [],
      statusmore: "loading",
      listarguments: {
        page: 1,
        limit: 10,
        channel: "",
      },
			shoplist:[],
    };
  },
  watch: {
    "listarguments.name"() {},
    listarguments: {
      handler(newValue, oldValue) {},
      deep: true,
    },
  },
  beforeCreate() {},
  mounted() {
    var _that = this;
    channelsList().then((result) => {
      const channelarr = [{ secondTypeDesc: "全部", secondTypeId: "" }];
      _that.channellist = channelarr.concat(result.data.data);
    });
    _that.shopListApi()
  },
  methods: {
    onClickItem(e) {
      console.log(e.currentIndex);
      var _that = this;
      _that.current = e.currentIndex;
			_that.listarguments.channel = _that.channellist[e.currentIndex].secondTypeId;
			_that.shoplist=[];
			_that.listarguments.page=1
			_that.shopListApi()
    },

    // 下拉刷新
    onPullDownRefresh() {
      console.log("下拉刷新");
      setTimeout(() => {
        // console.log("下拉刷新停止");
        // uni.stopPullDownRefresh()
				location.reload()
      }, 500);
    },
    // 上拉加载
    onReachBottom() {
      let _that = this;
			_that.listarguments.page+=1
			_that.shopListApi()
    },
		shopListApi(){
			let _that = this;
			if(_that.statusmore=="loading"){
				uni.showLoading({ title: "加载中", mask: true });
				shopList(_that.listarguments).then((result) => {
					uni.hideLoading();
					console.log(result.data.count)
					let shoptotal = result.data.count;
					_that.shoplist=_that.shoplist.concat(result.data.data);
					if(shoptotal < _that.listarguments.limit * _that.listarguments.page){
						_that.statusmore="noMore"
					}
				});
			}
		}
  },
};
</script>

<style lang="scss" scoped>
.swiperparent {
  height: 280rpx;
  .swiper-item {
    display: block;
    height: 280rpx;
    text-align: center;
    font-size: 0px;
    image {
      width: 100%;
      height: 100%;
    }
  }
}
.uni-shopcnt {
  padding: 20rpx 30rpx;
  .uni-navtitle {
    font-size: 36rpx;
    font-weight: 700;
    color: $uni-text-color;
    margin-bottom: 20rpx;
    text {
      font-size: 24rpx;
      font-weight: 400;
      color: $uni-text-color-grey;
      margin-left: 10rpx;
    }
  }
  .uni-shoplist {
    // padding: 20rpx 0;
    .uni-alink {
      margin: 20rpx 0;
      image {
        width: 240rpx;
        height: 240rpx;
        border-radius: 10rpx;
        margin-right: 20rpx;
        flex-shrink: 0;
      }
      .uni-goodname {
        font-weight: 700;
        font-size: 28rpx;
        color: $uni-text-color;
        .uni-tag {
          background: $uni-color-error;
          color: $uni-text-color-inverse;
          font-size: 22rpx;
          border-radius: 22rpx;
          padding: 0rpx 15rpx;
          margin-right: 10rpx;
        }
      }
      .uni-shopattr {
        font-size: 22rpx;
        color: $uni-text-color-grey;
        margin-top: 20rpx;
        margin-left: -6rpx;
        text {
          margin-right: 6rpx;
          display: inline-block;
          &:first-of-type:before {
            content: "";
          }
          &:before {
            content: "|";
            margin-right: 6rpx;
          }
        }
      }
      .uni-flex-item {
        position: relative;
        .uni-shopbot {
          position: absolute;
          bottom: 0px;
          left: 0px;
          width: 100%;
          .uni-shoppriceparent {
            font-size: 24rpx;
            color: $uni-text-color-grey;
            .uni-shopcurrprice {
              color: $uni-color-error;
              font-weight: 700;
              font-size: 28rpx;
              .frontPrice {
                font-size: 36rpx;
              }
            }
            .uni-shoporignprice {
              text-decoration: line-through;
              margin: 0px 10rpx;
            }
          }
          .uni-shopadvantage {
            color: $uni-color-error;
            font-size: 18rpx;
            text {
              color: $uni-color-error;
              padding: 0rpx 6rpx;
              border: 2rpx solid $uni-color-error;
              border-radius: 10rpx;
              margin-left: 10rpx;
              display: inline-block;
              max-width: 100%;
              box-sizing: border-box;
              vertical-align: bottom;
              &:nth-of-type(1) {
                margin-left: 0px;
              }
            }
          }
        }
      }
    }
  }
}
</style>