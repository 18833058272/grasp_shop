<template>
	<view class="container">
		<view class="title">小明装修</view>
		<view class="ddinfo">
			<view class="ldcont">
				<view class="ld"></view>
				<view class="ldtext">您有1条新的服务订单待处理</view>
			</view>

			<view class="zsm">
				<view class="zssj">#202308090712</view>
				<view style="color:#333333;font-size: 15px;font-weight: bold">室内装修设计</view>
				<view class="zs">¥2500</view>
			</view>

			<view class="remark">备注：要设计出最快完成施工方案</view>
			<view class="remark">客户：太二酸菜鱼</view>
			<view class="remark">下单时间：2023-12-30 10:5</view>
			<view class="ldcont" style="justify-content: space-between;margin-top: 20rpx;">
				<view class="ljjd">立即接单</view>
				<view class="ckxq" @click="lookInfo">查看详情</view>
			</view>
		</view>
		<!-- 轮播图 -->
		<view class="swiper_list">
			<u-swiper :list="list5" @change="e => current = e.current" :autoplay="true">
				<view slot="indicator" class="indicator">
					<view class="indicator__dot" v-for="(item, index) in list5" :key="index"
						:class="[index === current && 'indicator__dot--active']">
					</view>
				</view>
			</u-swiper>
		</view>

		<!-- 数据概览 -->
		<view class="sjgl">
			<view class="sjgl_text">数据概览</view>
			<view class="sjgl_xq">
				<view class="sjgl_nr sjgl_nr1">
					2500.00元
					<view style="color: #999999FF;font-size: 11px;margin-top: 10rpx;font-weight: 400;">收入</view>
				</view>
				<view class=" sjgl_nr sjgl_nr2">
					20
					<view style="color: #999999FF;font-size: 11px;margin-top: 10rpx;font-weight: 400;">订单数量</view>
				</view>
				<view class="sjgl_nr sjgl_nr3">
					10000
					<view style="color: #999999FF;font-size: 11px;margin-top: 10rpx;font-weight: 400;">访问人数</view>
				</view>
			</view>
		</view>
		<!-- 商品列表 -->
		<view class="shop_list">
			<view style="display: flex;justify-content: space-between;">
				<view class="sjgl_text">商品列表</view>
				<view class="shop_icon">
				</view>
			</view>
			<view class="new_list">
				<view style="display: flex;">
					<view class="sjgl_text" style="color:#666660FF;font-size: 13px;font-weight: 400;">最新上线</view>
					<view class="new_icon">
					</view>
				</view>
			</view>	
			<view class="new_con">
				<view class="left_img">
					
				</view>	
				<view class="right_info">
					<view class="shop_name">
						产品名称
						<view class="edit_icon">
							
						</view>	
					</view>
					<view class="shop_con">
						介绍：一站式创喝合伙服务平台
					</view>
					<view class="shop_pice">
						<view class="pice">
							销量 1000
						</view>	
						<view class="pice">
							库存 1000
						</view>	
						<view class="pice1">
							¥2500
						</view>	
					</view>
				</view>	
			</view>
			<view class="new_con">
				<view class="left_img">
					
				</view>	
				<view class="right_info">
					<view class="shop_name">
						产品名称
						<view class="edit_icon">
							
						</view>	
					</view>
					<view class="shop_con">
						介绍：一站式创喝合伙服务平台
					</view>
					<view class="shop_pice">
						<view class="pice">
							销量 1000
						</view>	
						<view class="pice">
							库存 1000
						</view>	
						<view class="pice1">
							¥2500
						</view>	
					</view>
				</view>	
			</view>
					<view class="new_con">
						<view class="left_img">
							
						</view>	
						<view class="right_info">
							<view class="shop_name">
								产品名称
								<view class="edit_icon">
									
								</view>	
							</view>
							<view class="shop_con">
								介绍：一站式创喝合伙服务平台
							</view>
							<view class="shop_pice">
								<view class="pice">
									销量 1000
								</view>	
								<view class="pice">
									库存 1000
								</view>	
								<view class="pice1">
									¥2500
								</view>	
							</view>
						</view>	
					</view>
							
		</view>
		<!-- 底部占位 -->
		<view class="bottom_btn" style="width: 100%;height:20rpx;"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list5: [
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				],
			}
		},
		onLoad() {
			this.$myRequest('https://api.apiopen.top/api/getHaoKanVideo', "get", {
				page: 0,
				size: 2
			}).then(res => {
				if (200 == res.statusCode) {
					// 登录token
					uni.setStorageSync('token', '1111111')
					uni.switchTab({
						// url: '/pages/user/user'
					})
				} else {
					uni.showToast({
						title: res.data,
						duration: 500
					})
				}

			})
		},
		methods: {
			lookInfo() {
				uni.navigateTo({
					url:'/pages/orderDetails/orderDetails'
				})
			}
		}
	}
</script>

<style>
	.container {
		padding-top: 40rpx;
	}

	.title {
		color: #333333;
		font-size: 50rpx;
		margin: 30rpx;
		font-weight: bold;
	}

	.ddinfo {
		width: 640rpx;
		height: 380rpx;
		background-color: #fff;
		border-radius: 10rpx;
		margin: 20rpx auto;
		padding: 20rpx;

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

	.ldtext {
		color: #666666;
		font-size: 26rpx;

	}

	.zssj {
		color: #666666;
		font-size: 15px;

		margin-right: 20rpx;
	}

	.zs {

		font-weight: bold;

	}

	.zsm {
		margin: 20rpx 0;
		line-height: 50rpx;
		display: flex;
		justify-content: space-between;
	}

	.remark {
		color: #333333;
		font-size: 13px;
		margin-top: 20rpx;
	}

	.ljjd {
		width: 48%;
		height: 60rpx;
		border-radius: 5rpx;
		background: #FC4700FF;
		font-size: 11px;
		color: #fff;
		text-align: center;
		line-height: 60rpx;
	}

	.ckxq {
		width: 48%;
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

	.swiper_list {
		width: 690rpx;
		height: 200rpx;
		margin: 0 auto;
	}

	.sjgl {
		width: 640rpx;
		height: 200rpx;
		background-color: #fff;
		border-radius: 10rpx;
		margin: 20rpx auto;
		margin-top: 150rpx;
		padding: 40rpx;
	}

	.sjgl_text {
		color: #333333FF;
		font-weight: bold;
		font-size: 14px;
		margin-bottom: 40rpx;
	}

	.sjgl_xq {
		width: 650rpx;
		height: 130rpx;
		marign: 0rpx auto;
		background-color: #F5F7FBFF;
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

	.shop_list {
		width: 640rpx;
		min-height: 180rpx;
		background-color: #fff;
		border-radius: 10rpx;
		margin: 20rpx auto;
		padding: 40rpx;
	}

	.shop_icon {
		width: 30rpx;
		height: 30rpx;
		background: url('../../static/arrow.png');
		background-size: 100% 100%;
		margin-top: 10rpx;
	}
	.new_icon {
		width: 30rpx;
		height: 30rpx;
		background: url('../../static/bottom.png');
		background-size: 100% 100%;
		margin-top: 10rpx;
		margin-left: 25rpx;
	}
	.new_con {
		display: flex;
		margin-bottom: 40rpx;
	}
	.left_img {
		width: 220rpx;
		height: 160rpx;
		background-color: pink;
		margin-right: 40rpx;
	}
	.right_info {
		width: calc(100% - 220rpx);
		
	}
	.shop_name {
		color: #333333FF;
		font-size: 13px;
		
	}
	.edit_icon {
		width: 30rpx;
		height: 30rpx;
		background: url("../../static/edit.png");
		background-size: 100% 100%;
		float:right;
		margin-top: 10rpx;
		font-weight: 500;
	}
	.shop_con {
		font-size: 11px;
		color: #333333FF;
		font-weight: 400;
		line-height: 15px;
		margin: 20rpx 0;
	}
	.shop_pice {
		display: flex;
		justify-content: space-between;
	}
	.pice {
		color: #999999FF;
		font-size: 11px;
		line-height: 24px;
	}
	.pice1 {
		color: #333333FF;
		font-size: 15px;
		font-weight: 500;
		
	}
</style>
<style lang="scss">
	.indicator {
		@include flex(row);
		justify-content: center;

		&__dot {
			height: 6px;
			width: 6px;
			border-radius: 100px;
			background-color: rgba(255, 255, 255, 0.35);
			margin: 0 5px;
			transition: background-color 0.3s;

			&--active {
				background-color: #ffffff;
			}
		}
	}

	.indicator-num {
		padding: 2px 0;
		background-color: rgba(0, 0, 0, 0.35);
		border-radius: 100px;
		width: 35px;
		@include flex;
		justify-content: center;

		&__text {
			color: #FFFFFF;
			font-size: 12px;
		}
	}
</style>