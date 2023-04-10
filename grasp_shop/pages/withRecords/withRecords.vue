<template>
	<view class="container">
		<view class="reve">
			<view class="ljreve">累计收入金额</view>
			<view class="doreve">¥ 88888.00</view>
		</view>
		<view class="reve" v-for="item in 3">
			<view class="revelist">
				<view class="revebl">订单#202308090712</view>
				<view class="revedol">+¥ 8888</view>
			</view>
			
			<view class="revelist">
				<view class="revebl">加盟店铺内部设施硬件装修收入</view>
				<view class="revetime">2022-02-05 12:09:44</view>
			</view>
			<view class="fgreve"></view>
			<view class="revelist">
				<view class="realname">真实姓名</view>
				<view class="txzt">提现成功</view>
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
			
		}
	}
</script>

<style>
	.reve {
		background-color: #fff;
		margin: 20rpx 0;
		padding-top: 29rpx;
		padding-left: 38rpx;
		padding-bottom: 20rpx;
		padding-right: 40rpx;
	}
	.ljreve {
		
		color: #333333FF;
		font-size: 15px;
		font-weight: 500;
	}
	.doreve {
		color: #333333FF;
		font-size: 30px;
		font-weight: bold;
		margin-top: 20rpx;
	}
	.revelist {
		display: flex;
		justify-content: space-between;
	
	}
	.revebl {
		color: #323233FF;
		font-size: 12px;
		font-weight: 500;
	}
	.revedol {
		color: #FC4700FF;
		font-size: 16px;
		font-weight: bold;
	}
	.revetime {
		color: #999999FF;
		font-size: 11px;
		font-weight: 500;
	}
	.fgreve {
		width: 100%;
		background-color: #FAFAFAFF;
		height: 2rpx;
		margin: 20rpx 0;
	}
	.realname {
		color:#666666FF;
		font-size: 12px;
		font-weight: 700;
	}
	.txzt {
		color: #6BBF2DFF;
		font-size: 11px;
		font-weight: 700;
	}
</style>
