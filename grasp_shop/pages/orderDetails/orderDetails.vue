<template>
	<view>
		<!-- 接单状态 -->
		<view class="ordetail">
			<view class="recomend-list">
				<h2>待接单</h2>
			</view>
			<view class="dot">
			</view>
			<view style="display: flex;margin: 20rpx 0;">
				<view class="order_img">

				</view>
				<view class="order_info">
					<view class="order_title">
						室内装修设计
					</view>
					<view class="order_ftitle">
						<view class="">
							¥2500.00
						</view>
						<view style="font-size: 14px;line-height: 28px;">
							x1
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 客户信息 -->
		<view class="ordetail">
			<view class="recomend-list">
				<view>客户信息</view>
			</view>
			<view class="dot">
			</view>
			<view style="display: flex;margin: 20rpx 0;">
				<u-avatar :text="text" size="50"></u-avatar>
				<view class="avtorInfo">
					多多米线
				</view>
			</view>
			<view class="khInfo">
				<view class="criletext">
					<view class="crile">

					</view>服务需求：天虹广场沿街店铺，需要设计出最快完成的方案
				</view>
			</view>
		</view>

		<!-- 服务方案 -->
		<view class="ordetail">
			<view class="recomend-list">
				<view>服务方案</view>
			</view>
			<view class="dot">
			</view>
			<view class="square">
				<view class="pic_list">

				</view>
				<view class="pic_info">
					店铺内需要有设计感的桌椅，也要有氛围感的灯光效果哟
				</view>
			</view>
		</view>

		<!-- 订单信息 -->
		<view class="ordetail">
			<view class="recomend-list">
				<view>订单信息</view>
			</view>
			<view class="dot">
			</view>
			<view class="dd_xq">
				<view>支付比例：50% （订单完成到账¥125</view>
				<view>营业额抽成比例：3%（按月抽成）</view>
				<view>订单号：#2023121221100</view>
				<view>下单时间：20223-1-11 09:2</view>
			</view>
		</view>
		<view  class="ldcont" style="display: flex; justify-content: space-between;margin: 30rpx;">
			<view style="width: 30%;">
				<u-button  text="联系客户" icon="phone" size="small" ></u-button>
			</view>	
			<view style="width: 30%;">
				<u-button  text="拒绝订单" size="small" ></u-button>
			</view>	
			<view style="width: 30%;">
				<u-button  color="#FC4700FF" text="立即接单" size="small"></u-button>
			</view>	
			
		</view>

		<!-- 底部占位符 -->
		<view class="bobtn">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: '杰'
			}
		},
		methods: {

		}
	}
</script>
<style>
	.ordetail {
		background-color: #fff;
		border-radius: 20rpx;
		margin: 30rpx;
		padding: 20rpx;
	}

	.recomend-list h2 {
		position: relative;
		font-size: 17px;
		font-weight: bold;
		text-align: left;
		padding-left: 9px;
		height: 40px;
		line-height: 40px;
	}

	.recomend-list view {
		position: relative;
		font-size: 17px;
		font-weight: bold;
		text-align: left;

		height: 40px;
		line-height: 40px;
	}

	.recomend-list h2:before {
		position: absolute;
		content: "";
		background-color: #EC9908FF;
		width: 4px;
		height: 17px;
		left: 0;
		top: 50%;
		margin-top: -8px;
		-webkit-border-radius: 3px;
		-moz-border-radius: 3px;
		border-radius: 3px;
	}

	.dot {
		height: 2rpx;
		width: 100%;
		border-bottom: 1px dashed #E9E9E9FF;
	}

	.order_img {
		width: 220rpx;
		height: 160rpx;
		background-color: pink;
		margin-right: 30rpx;
	}

	.order_info {
		width: 100%;
	}

	.order_title {
		color: #333333FF;
		font-size: 14px;
		font-weight: bold;
		margin-bottom: 60rpx;
	}

	.order_ftitle {
		color: #666666FF;
		font-size: 18px;
		display: flex;
		justify-content: space-between;
	}

	.avtorInfo {
		color: #333333FF;
		font-size: 15px;
		font-weight: 500;
		line-height: 50px;
		margin-left: 40rpx;
	}

	.khInfo {
		font-size: 14px;
		color: #323233FF;
		display: flex;
	}

	.crile {
		width: 20rpx;
		height: 20rpx;
		background-color: red;
		border-radius: 50%;
		display: inline-block;
		margin: 0rpx 10rpx 5rpx;
	}

	.criletext {
		color: #323233FF;
		font-size: 14px;
		font-weight: 500;
	}

	.dd_xq {
		color: #666666FF;
		font-size: 13px;
		line-height: 25px;
	}

	.square {
		border: 1px solid #E8E8E9FF;
		border-radius: 12rpx;
		margin: 20rpx 0;
	}

	.pic_list {
		margin: 20rpx;
		width: 120rpx;
		height: 100rpx;
		background: #323233FF;
		border-radius: 10rpx;
	}

	.pic_info {
		color: #999999FF;
		font-size: 13px;
		margin-left: 20rpx;
		margin-bottom: 20rpx;
	}

	.ldcont {
		display: flex;

	}

	.ld {
		width: 30rpx;
		height: 30rpx;
		background: url("../../static/ld.png");
		background-size: 100% 100%;
		margin: 8rpx;
	}

	.ljjd {
		width: 31%;
		height: 60rpx;
		border-radius: 5rpx;
		background: #FC4700FF;
		font-size: 11px;
		color: #fff;
		text-align: center;
		line-height: 60rpx;
	}

	.ckxq {
		width: 31%;
		height: 60rpx;
		border-radius: 5rpx;
		background: #FFFFFFFF;
		border: 1rpx solid #9797971A;
		box-shadow: 2rpx #0000000A;
		font-size: 11px;
		color: #000;
		text-align: center;
		line-height: 60rpx;
	}
	.bobtn {
		height: 20rpx;
		
	}
</style>