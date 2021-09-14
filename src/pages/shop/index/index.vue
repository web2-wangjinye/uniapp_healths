<template>
    <view>
        <headerBar :isBack="true" title="我的" titleTintColor="#fff" :bgColor="{background: '#353535'}">
			<text slot="back" class="uni_btnIco iconfont icon-close"></text>
			<text slot="iconfont" class="uni_btnIco iconfont icon-search"></text>
			<text slot="string" class="uni_btnString" style="color: #2B9939;">添加好友</text>
		</headerBar>
        <i class="icon icon-report"></i>
        <i class="icon">&#xe63a;</i>
        <view class="uni-p-b-98"></view>
        <tabBar :pagePath="'/pages/shop/index'"></tabBar>
    </view>
</template>

<script>
    export default {
        props: {
            pagePath: null
        },
        data() {
            return {
               
            };
        },
        mounted() {
          
        
        },
        methods: {
        
        }
    }
</script>

<style lang="scss" scoped>
</style>