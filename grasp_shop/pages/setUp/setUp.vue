<template>
	<view>
		<view class="setup">
			<view class="tbody">手机号绑定</view>
			<view class="rbody">
				199****9999      更换 
				<view class="ricon"></view>
			</view>
		</view>
		<view class="setup">
			<view class="tbody">清理缓存</view>
			<view class="rbody" @click="clear()">
				199MB
				<view class="ricon" ></view>
			</view>
		</view>
		<view class="setup">
			<view class="tbody">退出登陆</view>
			<view class="rbody">
				
				<view class="ricon1"></view>
			</view>
		</view>
		<u-modal :show="show" :title="title" :content='content'></u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'清除缓存后该账户上的任何历史数据都将删除',
							list: [
								{
									name:'选项一',
									subname:"选项一描述",
									color:'#ffaa7f',
									fontSize:'20'
								},
								{
									name: '选项二禁用',
									disabled:true
								},
								{
									name: '开启load加载', //开启后文字不显示
									loading:true
								}
							],
							show: false,
							content:'uView的目标是成为uni-app生态最优秀的UI框架'
			}
		},
		methods: {
			clear(){
				this.show = true;
			}
		}
	}
</script>

<style>
	.setup {
		width: 100%;
		height: 120rpx;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		font-size: 16px;
		padding: 40rpx 30rpx;
		box-sizing: border-box;
		margin-bottom: 20rpx;
	}
	.rbody {
		color: #999999FF;
		font-size: 15px;
	}
	.ricon {
		width: 30rpx;
		height: 30rpx;
		background: url("../../static/right.png");
		background-size: 100% 100%;
		display: inline-block;
		margin-left: 25rpx;
	}
	.ricon1 {
		width: 30rpx;
		height: 30rpx;
		background: url("../../static/logout.png");
		background-size: 100% 100%;
		display: inline-block;
		margin-left: 25rpx;
	}
</style>
