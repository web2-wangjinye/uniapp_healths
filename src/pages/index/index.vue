<template>
	<view class="content">
		<headerBar :isBack="true" title="我的" titleTintColor="#fff" :bgColor="{background: '#353535'}">
			<text slot="back" class="uni_btnIco iconfont icon-close"></text>
			<text slot="iconfont" class="uni_btnIco iconfont icon-search"></text>
			<text slot="string" class="uni_btnString" style="color: #2B9939;">添加好友</text>
		</headerBar>11
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
		<!-- 一般用法 -->
		<uni-countdown :day="1" :hour="1" :minute="12" :second="40"></uni-countdown>

		<!-- 不显示天数 -->
		<uni-countdown :show-day="false" :hour="12" :minute="12" :second="12"></uni-countdown>

		<!-- 修改颜色 -->
		<uni-countdown color="#FFFFFF" background-color="#00B26A" border-color="#00B26A" :day="1" :hour="2" :minute="30" :second="0"></uni-countdown>
		<view class="uni-p-b-98"></view>
        <tabBar :pagePath="'/pages/tabBar/home/home'"></tabBar>
	</view>
	
</template>

<script>
	import {uniLoadMore, uniDrawer, uniCountdown} from '@dcloudio/uni-ui'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components: {
			uniLoadMore,
			uniDrawer,
			uniCountdown
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
