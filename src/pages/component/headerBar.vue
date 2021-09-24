<template>
    <view class="uni_topbar" :style="style">
        <view class="uni-inline-item" :class="[fixed ? 'uni-fixed' : '']" :style="[{'height': customBarH + 'px', 'padding-top': statusBarH + 'px', 'color': titleTintColor}, bgColor]">
            <!-- 返回 -->
            <!-- <text class="uni_icoBack iconfont icon-arrL" v-if="isBack" @tap="goBack"></text> -->
            <!-- <text slot="back" class="uni_icoBack icon icon-zuojiantou"></text> -->
            <view v-if="isBack" @tap="goBack">
                <slot name="back"></slot>
            </view>
            <!-- <slot name="headerL"></slot> -->
            <!-- 标题 -->
            <!-- #ifndef MP -->
            <!-- <view class="flex1" v-if="!search && center"></view> -->
            <!-- #endif -->
            <view class="uni-flex-item" :class="[center ? 'uni-center' : '']" :style="[isBack ? {'font-size': '32rpx', 'padding-left': '72rpx'} : '']" v-if="!search && title">
                {{title}}
            </view>
            <!-- <view class="uni_search flex1" :class="[searchRadius ? 'uni_searchRadius' : '']" v-if="search"> />
                <input class="uni_searchIpt flex1" type="text" placeholder="搜索" placeholder-style="color: rgba(255,255,255,.5);" />
            </view> -->
            <!-- 右侧 -->
            <view class="uni_headerRight uni-inline-item">
                <slot name="iconfont"></slot>
                <slot name="string"></slot>
                <slot name="image"></slot>
            </view>
        </view>
    </view>
</template>

<script>
/***　　isBack          是否返回按钮
　　title               标题
　　titleTintColor      标题颜色
　　bgColor             背景
　　center              标题居中
　　search              搜索条
　　searchRadius        圆形搜索条
　　fixed               是否固定
*/
    export default {
        data() {
            return {
                statusBarH: this.statusBar,
                customBarH: this.customBar
            }
        },
        props: {
            isBack: { type: [Boolean, String], default: true },
            title: { type: String, default: '' },
            titleTintColor: { type: String, default: '#fff' },
            bgColor: Object,
            center: { type: [Boolean, String], default: false },
            search: { type: [Boolean, String], default: false },
            searchRadius: { type: [Boolean, String], default: false },
            fixed: { type: [Boolean, String], default: false },
        },
        computed: {
            style() {
                let _style = `height: ${this.customBarH}px;`
                return _style
            }
        },
        methods: {
            goBack() {
                uni.navigateBack()
            } 
        }
    }
</script>
<style lang="scss" scoped>
</style>