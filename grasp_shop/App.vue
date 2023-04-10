<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "@/uni_modules/uview-ui/index.scss";
</style>
<script>
	export default {
		 globalData: {  
		            bgcolor: '#333'  
		        },  
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	page {
		background-color: #FAFAFA;
	}
	
	.kfybt {
		background-color: #FC4700FF;
		border-radius: 40rpx;
		color: #fff;
		line-height: 80rpx;
		text-align: center;
		font-size: 12px;
		margin-top:20rpx;
	}
</style>
