<template>
	<view>
		<view class="avtor">
		
			<u-avatar :src="src" size="60"></u-avatar>
			<view class="right_info">
				<view style="font-weight: bold;font-size: 17px;">小明装修</view>
				<view style="margin-top:15rpx ;font-size: 13px;">简介简介简介</view>
			</view>
		</view>
		
		
		<!-- 收入概览 -->
		<view class="sjgl">
			<view class="sjgl_text">
				<view>收入概况</view>   
				<view style="color: #999999FF;font-size: 12px;font-weight: 400;">去提现></view>
			</view>
			<view class="sjgl_xq">
				<view class="sjgl_nr sjgl_nr1">
					2500.00元
					<view style="color: #999999FF;font-size: 11px;margin-top: 10rpx;font-weight: 400;">本月收入</view>
				</view>
				<view class=" sjgl_nr sjgl_nr2">
					88888.00元
					<view style="color: #999999FF;font-size: 11px;margin-top: 10rpx;font-weight: 400;">累计收入</view>
				</view>
				<view class="sjgl_nr sjgl_nr3">
					8000.00元
					<view style="color: #999999FF;font-size: 11px;margin-top: 10rpx;font-weight: 400;">累计提现</view>
				</view>
			</view>
		</view>
		
		<!-- 订单管理 -->
		<view class="sjgl">
			<view class="sjgl_text">
				<view>订单管理</view>   
				
			</view>
			<view class="sjgl_xq">
				<view class="sjgl_nr sjgl_nr1">
					25
					<view style="color: #999999FF;font-size: 11px;margin-top: 10rpx;font-weight: 400;">订单数</view>
				</view>
				<view class=" sjgl_nr sjgl_nr2">
					8888
					<view style="color: #999999FF;font-size: 11px;margin-top: 10rpx;font-weight: 400;">完成订单</view>
				</view>
				<view class="sjgl_nr sjgl_nr2">
					80
					<view style="color: #999999FF;font-size: 11px;margin-top: 10rpx;font-weight: 400;">取消订单</view>
				</view>
				<view class="sjgl_nr sjgl_nr3">
					8
					<view style="color: #999999FF;font-size: 11px;margin-top: 10rpx;font-weight: 400;">售后订单</view>
				</view>
			</view>
		</view>
		
		<!-- 常用工具 -->
		<view class="sjgl">
			<view class="sjgl_text" style="margin-bottom: 20rpx;">
				<view>常用工具</view>   
				
			</view>
			<view style="display: flex;">
				
			
			<view class="gj_xq" @click="shopManage">
				<view class="gj_icon1">
					
				</view>
				<view class="">
					商品管理
				</view>	
			</view>
			<view class="gj_xq" @click="goAccount">
				<view class="gj_icon2">
					
				</view>
				<view class="">
					我的账户
				</view>	
			</view>
			<view class="gj_xq">
				<view class="gj_icon3">
					
				</view>
				<view class="">
					设置
				</view>	
			</view>
			</view>	
		</view>
		
		<!-- 底部占位 -->
		<view class="botton_btn">
			
		</view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
			}
		},
		methods: {
			shopManage () {
				uni.navigateTo({
					url:'/pages/proMana/proMana'
				})
			},
			goAccount() {
				uni.navigateTo({
					url:'/pages/myAccount/myAccount'
				})
			}
		}
	}
</script>

<style>
	.avtor {
		display: flex;
		background-color: #fff;
		box-shadow: 2px 2px 2px 2px #0000000A ;
		margin: 30rpx ;
		padding: 30rpx;
		border-radius: 16rpx;
	}
	.right_info {
		margin-left: 30rpx;
		ling-height: 60rpx;
		padding: 15rpx 0;
	}
	.sjgl {
	
		height: 200rpx;
		background-color: #fff;
		box-shadow: 2px 2px 2px 2px #0000000A ;
		border-radius: 16rpx;
		
		margin: 30rpx ;
		padding: 40rpx;
	}
	
	.sjgl_text {
		color: #333333FF;
		font-weight: bold;
		font-size: 14px;
		margin-bottom: 40rpx;
		display: flex;
		justify-content: space-between;
	}
	
	.sjgl_xq {
	
		height: 130rpx;
		marign: 0rpx auto;
		background-color: #F5F7FBFF;
		border-radius: 10rpx;
		padding: 20rpx 0;
		box-sizing: border-box;
		display: flex;
	}
	
	.sjgl_nr {
		width: 33%;
		color: #333333FF;
		font-size: 13px;
		font-weight: bold;
	}
	
	.sjgl_nr1 {
		height: 100%;
		border-right: 1px solid #EAEAEAFF;
		text-align: center;
	}
	
	.sjgl_nr2 {
		height: 100%;
		border-right: 1px solid #EAEAEAFF;
		text-align: center;
	}
	
	.sjgl_nr3 {
		height: 100%;
	
		text-align: center;
	}
	.gj_xq {
		width: 25%;
		color: #666666FF;
		font-size: 12px;
		text-align: center;
	}
	.gj_icon1 {
		width: 60rpx;
		height: 60rpx;
		background: url("../../static/spgl.png");
		background-size: 100% 100%;
		margin: 20rpx auto;
		
	}
	.gj_icon2 {
		width: 60rpx;
		height: 60rpx;
		background: url("../../static/myzh.png");
		background-size: 100% 100%;
		margin: 20rpx auto;
		
	}
	.gj_icon3 {
		width: 60rpx;
		height: 60rpx;
		background: url("../../static/sz.png");
		background-size: 100% 100%;
		margin: 20rpx auto;
		
	}
	.botton_btn {
		width: 100% ;
		height: 20rpx;
	}
</style>
