<template>
	<view>
		<view style="background-color: #fff;">
			<u-tabs :list="list1" lineColor="#FC4700FF" :activeStyle="{color:'#FC4700FF'}" @click="click"></u-tabs>
		</view>
		<view style="display: flex;padding: 30rpx;">
			<view class="search">
				<u-search placeholder="搜索全部订单" v-model="keyword" :showAction="false"></u-search>
			</view>
			<view class="kfybt1" style="margin-left:30rpx;">
				搜索
			</view>
		</view>
		<!-- 订单列表 -->
		<view class="ddinfo" v-for="(item,index) in infoList" :key="index">
			<view class="zsm">
				<view class="zssj">#202308090712</view>
				<view style="color:#333333;font-size: 15px;font-weight: bold">室内装修设计</view>
				<view class="zs" :class="[ index == 0 ? 'zs1' : index == 1 ? 'zs2' : index == 2? 'zs3':'zs4' ]" >
					{{index == 0 ? '已完成' : index == 1 ? '服务中' : index == 2? '待接单':'已取消'}}
				</view>
			</view>
		
			<view class="remark">备注：要设计出最快完成施工方案</view>
			<view class="remark">客户：太二酸菜鱼</view>
			<view class="remark">下单时间：2023-12-30 10:5</view>
			<view v-if="index == 0" class="ldcont" style="justify-content: space-between;margin-top: 20rpx;">
				
				<view class="ckxq1">查看详情</view>
			</view>
			<view v-else class="ldcont" style="justify-content: space-between;margin-top: 20rpx;">
				<view class="ljjd">立即接单</view>
				<view class="ckxq">查看详情</view>
			</view>
		</view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list1: [{
					name: '全部',
				}, {
					name: '待接单',
				}, {
					name: '服务中'
				}, {
					name: '已完成'
				}, {
					name: '已取消'
				}],
				infoList:[{},{},{},{}]
			}
		},
		methods: {
			click(item) {
				console.log('item', item)
				if(item == 0) {
					this.list
				}
			}
		}
	}
</script>

<style>
	.search {
		width: 510rpx;
		height: 58rpx;

	}
	.ddinfo {
		width: 640rpx;
		background-color: #fff;
		border-radius: 10rpx;
		margin: 20rpx auto;
		padding: 30rpx;
	
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
		font-size:15px;
		font-weight: bold;
		
	}
	.zs1 {
		color: #53B55DFF;
	}
	.zs2 {
		color: #EC9908FF;
	}
	
	.zs3 {
		color: #1584FCFF;
	}
	.zs4 {
		color: #FF3C3DFF;
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
	.ckxq1 {
		width: 100%;
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
	.kfybt1 {
		background-color: #FC4700FF;
		border-radius: 40rpx;
		color: #fff;
		line-height: 80rpx;
		text-align: center;
		font-size: 12px;

		width: 180rpx;
	}
</style>