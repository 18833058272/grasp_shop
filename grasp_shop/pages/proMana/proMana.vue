<template>
	<view>
		<view class="add_shop">
			添加商品
		</view>
		<view class="shop_info" v-for="item in 3">
			<view style="display: flex;justify-content: space-between;">
				<view class="shop_dal">
					<view class="shop_pic"></view>
					<view class="shop_text">
						<view style="font-size: 13px;margin-bottom: 10rpx;font-weight: 700;">室内装修设计</view>
						<view style="font-size: 15px;margin-bottom: 10rpx;font-weight: 700;">¥2500</view>
						<view style="font-size: 11px;">介绍：一站式创喝合伙服务平台</view>
					</view>
				</view>
				<view class="shop_icon"></view>
			</view>
			<view style="display: flex;justify-content: space-between;margin-top: 20rpx;">
				<view style="display: flex;color:#999999FF;justify-content: space-between;width: 40%;font-size: 11px;margin-top: 20rpx;">
					<view>销量 1000</view>
					<view>库存 1000</view>
				</view>
				<view style="display: flex;width: 50%;justify-content: space-between;">

					<view style="width: 48%;">
						<u-button color="#FC4700FF" text="编辑" size="small" @click="editShop"></u-button>
					</view>
					<view style="width: 48%;">
						<u-button text="下架" size="small"></u-button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			editShop() {
				uni.navigateTo({
					url:'../editShop/editShop'
				})
			}
		}
	}
</script>

<style>
	.add_shop {
		margin: 30rpx;

		height: 100rpx;
		background-color: #fff;
		box-shadow: 1px 1px 1px 1px #0000000A;
		text-align: center;
		line-height: 100rpx;
		border-radius: 16rpx;
		font-weight: bold;
	}

	.shop_info {
		/* display: flex;
		justify-content: space-between; */
		background-color: #fff;
		padding: 30rpx;
		margin-bottom: 20rpx;
	}

	.shop_dal {
		display: flex;

	}

	.shop_pic {
		width: 220rpx;
		height: 160rpx;
		background-color: pink;
	}

	.shop_text {
		color: #333333FF;
		margin-left: 30rpx;
		padding: 15rpx 0;
	}

	.shop_icon {
		width: 25rpx;
		height: 30rpx;
		background: url("../../static/zd.png");
		background-size: 100% 100%;
	}
</style>