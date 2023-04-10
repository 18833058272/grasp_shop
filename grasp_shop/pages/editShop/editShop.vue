<template>
	<view>
		<view style="margin:30rpx 45rpx 20rpx;">
			<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
			<u--form labelPosition="top" labelWidth="140px" :model="model1" :rules="rules" :borderBottom="false"
				ref="uForm" :labelStyle="lstyle">
				<u-form-item label="商品名称" prop="userInfo.name" ref="item1">
					<u--input placeholder="请输入商品名称（20字以内）" v-model="model1.userInfo.name"></u--input>
				</u-form-item>
				<u-form-item label="商品类型" prop="userInfo.sex" @click="showSex = true; hideKeyboard()" ref="item1">

					<u--input placeholder="请选择您的商品类型" v-model="model1.userInfo.sex" disabled type="select"
						suffixIcon="arrow-down" suffixIconStyle="color: #909399" disabledColor="#ffffff"></u--input>

				</u-form-item>
				<uni-section title="自定义图片大小" type="line">
					<view class="example-body custom-image-box">
						<uni-file-picker limit="1" :del-icon="false" disable-preview :imageStyles="imageStyles"
							file-mediatype="image">
							<view class="upload_pic">
								<view class="upload_img">
									
								</view>	
								上传头像
							</view>	
						</uni-file-picker>
						<view class="text">
							请上传您的商品头图</br>图片比例4:3，推荐尺寸240*160
						</view>	
					</view>
				</uni-section>
				<u-form-item label="商品售价" prop="userInfo.name" ref="item1">
					<u--input placeholder="请输入商品售价（单位：元）" v-model="model1.userInfo.name"></u--input>
				</u-form-item>
				<u-form-item label="商品描述" prop="userInfo.name" ref="item1">
					<u--input placeholder="商品描述（50字以内）" v-model="model1.userInfo.name"></u--input>
				</u-form-item>
				
				<view class="ordetail">
					<view class="recomend-list">
						<h2 >
							库存设置
							<view class="recxc">
								<view style="width: 120rpx;font-size: 10px;position: relative;">
									<u-tag text="每日" type="warning" shape="circle" bgColor="#F5F5F5FF" borderColor="#F5F5F5FF" color="#333333FF" size="mini"></u-tag>
									<view class="arrow_img">
										
									</view>	
								</view>	
								
							</view>	
						</h2>
					</view>
					<view class="dot">
					</view>
					<view class="dd_xq">
						<view class="spkc">
							<view class="">
								<u--input
								   placeholder="商品库存"
								   border="surround"
								   v-model="value"
								 ></u--input>
							</view>	
							<view class="xy" @click="stateClass" >
								<view><view :class="[ chosexy == 1 ? 'chose1' : 'chose2' ]"></view>自动补齐</view>
							</view>	
						</view>	
						<view class="spkc">
							<view class="">
								<u--input
								   placeholder="触发提醒件数"
								   border="surround"
								   v-model="value"
								 ></u--input>
							</view>	
							<view class="xy" @click="stateClass" >
								<view><view :class="[ chosexy == 1 ? 'chose1' : 'chose2' ]"></view>库存报警</view>
							</view>	
						</view>	
						<view >
							<view class="">
								<u--input
								   placeholder="单次最大购买件数"
								   border="surround"
								   v-model="value"
								 ></u--input>
							</view>	
							
						</view>	
					</view>
				
				</view>
				
				
				<view class="kfybt">
					保存
				</view>
			</u--form>
			<u-action-sheet :show="showSex" :actions="actions" title="请选择商品类型" @close="showSex = false"
				@select="sexSelect">
			</u-action-sheet>
		</view>
		
		<view style="height: 20rpx;"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showSex: false,
				model1: {
					userInfo: {
						name: '',
						sex: '',
					},
				},
				actions: [{
						name: '设备供应',
					},
					{
						name: '装修服务',
					},
					{
						name: '广告设计',
					}, {
						name: '营销策划',
					},
					{
						name: '采购服务',
					},
					{
						name: '物业租赁',
					}
				],
				rules: {
					// 'userInfo.name': {
					// 	type: 'string',
					// 	required: true,
					// 	message: '请填写姓名',
					// 	trigger: ['blur', 'change']
					// },
					// 'userInfo.sex': {
					// 	type: 'string',
					// 	max: 1,
					// 	required: true,
					// 	message: '请选择男或女',
					// 	trigger: ['blur', 'change']
					// },
				},
				radio: '',
				switchVal: false,
				lstyle: {
					'Color': '#191919FF',
					'fontSize': '14px'
				},
				imageStyles: {
					width: 120,
					height: 80,
				},
				chosexy:1
			}
		},
		methods: {
			sexSelect(e) {
				this.model1.userInfo.sex = e.name
				this.$refs.uForm.validateField('userInfo.sex')
			},
			stateClass(data){
				if(this.chosexy == 1){
					this.chosexy = 2
				}else {
					this.chosexy = 1
				}
			},
		},
		onReady() {
			//如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
			this.$refs.uForm.setRules(this.rules)
		},
	}
</script>

<style>
	page {
		background-color: #fff;


	}

	.example-body {
		padding: 10px;
		padding-top: 0;
	}

	.custom-image-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.text {
		font-size: 11px;
		color: #999999FF;
		line-height: 60rpx;
	}
	.upload_pic {
		width: 100% ;
		height: 100%;
		background-color: #F3F3F3FF;
		border-radius: 10rpx;
		text-align: center;
		font-size: 11px;
		color: #999999FF;
	}
	.upload_img {
		width: 80rpx;
		height: 80rpx;
		background: url("../../static/add.png");
		background-size: 100% 100%;
		margin: 20rpx auto 10rpx;
	}
	.example-body {
		padding: 0px!important;
	}
	.ordetail {
		background-color: #fff;
		border: 1px solid #dadbde !important;
		border-radius: 20rpx;
	
		padding: 20rpx;
	}
	.dot {
		height: 2rpx;
		width: 100%;
		border-bottom: 1px dashed #E9E9E9FF;
	}
	.recomend-list h2 {
		position: relative;
		font-size: 14px;
		font-weight: bold;
		text-align: left;
		height: 30px;
		line-height: 30px;
	}
	.recxc {
		position: absolute;
		top: 0px;
		right: 0px;
		
	}
	.dd_xq {
		color: #666666FF;
		font-size: 13px;
		line-height: 25px;
		margin-top: 20rpx;
		
	}
	.arrow_img {
		width: 18px;
		height: 18px;
		background: url("../../static/xl.png");
		background-size: 100% 100%;
		position: absolute;
		right: 10rpx;
		top: 10rpx;
	}
	.chose1 {
		width: 26rpx;
		height: 26rpx;
		background: url('../../static/chose1.png');
		background-size: 100% 100%;
		float: left;
		color: #333333FF;
		font-size: 13px;
		margin-top: 20rpx;
		margin-right: 5rpx;
	}
	.xy {
		margin-top: 10rpx;
		width: 30%;
		padding-left: 20rpx;
		letter-spacing: 1px;
	}
	.chose2 {
		width: 26rpx;
		height: 26rpx;
		background: url('../../static/chose2.png');
		background-size: 100% 100%;
		float: left;
		color: #333333FF;
		font-size: 13px;
		margin-top: 20rpx;
		margin-right: 5rpx;
	}
	.spkc {
		display: flex;
		justify-content:space-between;
		margin-bottom: 20rpx;
	}
</style>
