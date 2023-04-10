<template>
	<view>
		<view class="succ"></view>
		<view class="submit">入驻申请已提交</view>
		<view class="submit sub">正在审核中，请耐心等待</view>
		<view class="subkf">客服热线：0310-7058999</view>
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
	.succ {
		width: 150rpx;
		height: 150rpx;
		background: url("../../static/true.png");
		background-size: 100% 100%;
		margin: 280rpx auto 30rpx;
	}
	.submit {
		color: #323233FF;
		font-size: 23px;
		font-weight: bold;
		text-align: center;
	}
	.sub {
		font-weight: 400;
		font-size: 13px;
		line-height: 40px;
	}
	.subkf {
		position: fixed;
		bottom: 80rpx;
		left: calc(50% - 90px);
		text-align: center;
	}
</style>
