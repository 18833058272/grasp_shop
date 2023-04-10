<template>
	<view class="container">
		 <view class="bg-img">
			 <view class="home_page">首页</view>
			 <view class="scCode">请输入验证码</view>
			 <view class="scCodebg">验证码已发送至 188 8888 888</view>
			 <view class="input_icon">
			 <u-code-input v-model="value3" :maxlength="6"></u-code-input>
			 </view>
			 
			 <button class="yzm_img" style="border: none!important;color: #fff!important;" @click='getVerificationCode' :disabled='disabled'>{{btntxt}} </button>
			 <view class="xy"  @click="stateClass" >
				 
				 <view><view :class="[ chosexy == 1 ? 'chose1' : 'chose2' ]"></view>已阅读并同意 <span class="yhxy">《用户协议》</span></view>
			 </view>
		 </view>  
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value3:'',
				chosexy:1,
				codeText:'',
				disabled:false,
				 btntxt: '重新获取验证码(60)',
				                seconds: 59,
				                disabled: false,
			}
		},
		onLoad() {
			this.getVerificationCode();
		},
		methods: {
			stateClass(data){
				if(this.chosexy == 1){
					this.chosexy = 2
				}else {
					this.chosexy = 1
				}
			},
			getVerificationCode() {
				console.log(888)
			                const timer = setInterval(() => {
			                    this.btntxt =  '重新获取验证码' + '('  +  this.seconds+    ')' ;
			                    this.seconds--;
			                    this.disabled = true;
			                    if(this.seconds === 0){
			                        clearInterval(timer);
			                        this.btntxt = '发送验证码';
			                        this.seconds = 59;
			                        this.disabled = false
			                    }
			                }, 1000);
			                
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
	.u-code-input__input {
		background-color: #fff;
	}
</style>
<style type="text/css">
	button::after {
		border: none;
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
		margin-top: 130rpx;
		
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
	.scCode {
		color: #fff;
		font-size: 64rpx;
		margin-top: 80rpx ;
		margin-left: 40rpx;
	}
	.scCodebg {
		color: #fff;
		font-size: 32rpx;
		margin-left: 40rpx;
		margin-top: 40rpx;
	}
	.u-code-input__item {
		background-color: #fff;
		border: 1px solid #fff!important;
		border-radius: 5rpx !important;
		margin-top: 40rpx;
	}
	
</style>
