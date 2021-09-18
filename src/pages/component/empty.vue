<template>
	<view class='uni-empty' :style="{marginTop:top+'rpx'}">
		<!-- <image src="../static/null.png" :style="{width:width+'rpx',height:height+'rpx'}" mode=""></image> -->
        <view class="icon icon-wushuju"></view>
		<view class="">{{text}}</view>
	</view>
</template>

<script>
	export default {
		props:{
			top:{
				type:String,
				default: '0'
			},
			text:{
				type:String,
				default:'暂无数据'
			},
			width:{
				type:String,
				default:'400'
			},
			height:{
				type:String,
				default:'310'
			}
		},
		data() {
			return {
			
			}
		},
		onLoad() {

		},

		methods: {

		},

	}
</script>

<style  lang='scss' scoped>
.uni-empty{
    font-size: 28rpx;
    color: $uni-text-color-grey;
    text-align: center;
    padding: 20rpx;
    .icon-wushuju{
        font-size: 100rpx;
        margin-bottom:10rpx
    }
}

</style>

