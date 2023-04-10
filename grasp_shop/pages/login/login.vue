<template>
	<view class="container">
		 <view class="bg-img">
			 <view class="home_page">首页</view>
			 <view class="weltext"></view>
			 <view class="zdltext"></view>
			 <view class="hdtext"></view>
			 <view class="input_icon">
			 <u--input
			     placeholder="请输入内容"
			     border="surround"
				class="icons11"
			     v-model="value"
				 prefixIcon="coupon"
					prefixIconStyle="font-size: 22px;color: #ccc"
				 shape="circle"
			     @change="change"
			   ></u--input>
			 </view>
			 <view class="crown_text">未注册的手机号验证后自动创建账户</view>
			 <view class="yzm_img" @click="goCode()">获取短信验证码</view>
			 <view class="xy"  @click="stateClass">
				 
				 <view><view :class="[ chosexy == 1 ? 'chose1' : 'chose2' ]"></view>已阅读并同意 <span class="yhxy">《用户协议》</span></view>
			 </view>
		 </view>  
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value:'',
				chosexy:1,
			}
		},
		methods: {
			stateClass(data){
				if(this.chosexy == 1){
					this.chosexy = 2
				}else {
					this.chosexy = 1
				}
			},
			goCode(){
				uni.navigateTo({
					url:'../verCode/verCode'
				})
			}
		}
	}
</script>
<style>
	page {
		background-color: #FC4700;
	}
</style>
<style scoped>
	.input_icon .u-icon{
		background: url('../../static/phone.png');
		background-size: 100% 100%;
	}
</style>
<style class="sass">
	.bg-colore{
	    position: fixed;
	    width: 100%;
	    height: 100%;
	    top: 0;
	    left: 0;
	    background-color: #f4f4f4;
	    z-index: -1;
	}
	.bg-img{
	    position: fixed;
	    width: 100%;
	    height: 100%;
	    top: 0;
	    left: 0;
	    z-index: -1;
		background: url('../../static/bg.png');
	}
	.home_page {
		color: #fff;
		text-align: center;
		margin: 50rpx auto;
	}
	.weltext {
		background: url('../../static/weltext.png');
		width: 306rpx;
		height: 60rpx;
		background-size: 100% 100%;
		margin-left:40rpx ;
	}
	.zdltext {
		background: url('../../static/zdltext.png');
		width: 512rpx;
		height: 60rpx;
		background-size: 100% 100%;
		margin-top: 50rpx;
		margin-left:40rpx ;
	}
	.hdtext {
		background: url('../../static/hd.png');
		width: 200rpx;
		height: 32rpx;
		background-size: 100% 100%;
		margin-top: 60rpx;
		margin-left:40rpx ;
	}
	.input_icon {
		margin-top: 60rpx;
		margin: 40rpx;
		margin-bottom: 20rpx;
	}
	.u-input--circle {
		background-color: #fff;
	}
	.crown_text {
		font-size: 12px;
		color: #999999;
		text-align: center;
		margin: 20rpx 0;
	}
	.yzm_img {
		margin: 0 auto;
		margin-top: 30rpx;
		
		width: 670rpx;
		height: 100rpx;
		background: url("../../static/yzm.png");
		background-size: 100% 100%;
		text-align: center;
		line-height: 100rpx;
		color: #fff;

		letter-spacing:2px;
	}
	.xy {
		position: fixed;
		bottom: 250rpx;
		left: calc(50% - 200rpx);
		color: #666666;
		font-size: 13px;
		letter-spacing:1px;
	}
	.chose1 {
		width: 26rpx;
		height: 26rpx;
		background: url('../../static/chose1.png');
		background-size: 100% 100%;
		float: left;
		margin: 8rpx;
	}
	.chose2 {
		width: 26rpx;
		height: 26rpx;
		background: url('../../static/chose2.png');
		background-size: 100% 100%;
		float: left;
		margin: 8rpx;
	}
	.yhxy {
		color: #FC4700;
	}
</style>
