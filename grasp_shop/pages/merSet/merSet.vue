<template>
	<view>
		<view class="welcome">欢迎入驻掌店朗服务商开放平台</view>
		<view style="margin:30rpx 45rpx 20rpx;">

			<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
			<u--form labelPosition="top" labelWidth="140px" :model="model1" :rules="rules" :borderBottom="false"
				ref="uForm" :labelStyle="lstyle">
				<view class="jcxx">
					一 基础信息 一
				</view>
				<uni-section title="自定义图片大小" type="line">
					<view class="example-body custom-image-box zdy">
						<uni-file-picker limit="1" :del-icon="false" disable-preview :imageStyles="imageStyles"
							file-mediatype="image">
							<view class="upload_pic">
								<view class="upload_img">

								</view>
								上传头像
							</view>
						</uni-file-picker>
						<view class="text">
							请上传您的商品头像</br>图片比例1:1，推荐尺寸220*220
						</view>
					</view>
				</uni-section>
				<u-form-item label="商品名称" prop="userInfo.name" ref="item1">
					<u--input placeholder="请输入商品名称（20字以内）" v-model="model1.userInfo.name"></u--input>
				</u-form-item>
				<u-form-item label="服务类目" prop="userInfo.sex" @click="showSex = true; hideKeyboard()" ref="item1">

					<u--input placeholder="请选择您的商品类型" v-model="model1.userInfo.sex" disabled type="select"
						suffixIcon="arrow-down" suffixIconStyle="color: #909399" disabledColor="#ffffff"></u--input>

				</u-form-item>
				<view class="ordetail1">
					请选择您提供的服务（多选）

					<!-- 多选 -->
					<view style="display: flex;justify-content: space-between;flex-wrap: wrap;margin-top:30rpx">
						<view class="u-page__tag-item" v-for="(item, index) in checkboxs" :key="index">
							<u-tag shape="circle" text="装饰装修设计" :plain="!item.checked" type="error"
								@click="checkboxClick" :name="index" size size="mini" ck="checkboxClick">
							</u-tag>
						</view>
					</view>
				</view>

				<u-form-item label="商家slogan" prop="userInfo.name" ref="item1">
					<u--input placeholder="请输入slogan" v-model="model1.userInfo.name"></u--input>
				</u-form-item>
				<u-form-item label="商品介绍" prop="userInfo.name" ref="item1">
					<u--textarea placeholder="请输入您的商家介绍（选填）" v-model="model1.intro" autoHeight></u--textarea>
				</u-form-item>
				<u-form-item label="经营区域" prop="userInfo.sex" @click="showSex = true; hideKeyboard()" ref="item1">

					<u--input placeholder="请选择您的经营区域" v-model="model1.userInfo.sex" disabled type="select"
						suffixIcon="arrow-down" suffixIconStyle="color: #909399" disabledColor="#ffffff"></u--input>

				</u-form-item>
				<u-form-item label="详细经营地点" prop="userInfo.name" ref="item1">
					<u--input placeholder="请输入您的经营详细地点" v-model="model1.userInfo.name"></u--input>
				</u-form-item>

				<view class="jcxx">
					一 运营概况 一
				</view>

				<u-form-item label="成立时间" prop="userInfo.name" ref="item1" @click="show1 = true">
					<u--input placeholder="请选择您的成立时间" v-model="model1.userInfo.sex" disabled type="select"
						suffixIcon="arrow-down" suffixIconStyle="color: #909399" disabledColor="#ffffff"></u--input>
				</u-form-item>
				<u-form-item label="门店数量" prop="userInfo.name" ref="item1">
					<u--input placeholder="请输入您的经营详细地点" v-model="model1.userInfo.name" type="number"></u--input>
				</u-form-item>
				<u-form-item label="团队人数" prop="userInfo.name" ref="item1">
					<u--input placeholder="请输入您的团队人数" v-model="model1.userInfo.name" type="number"></u--input>
				</u-form-item>
				<u-form-item label="总部地址" prop="userInfo.name" ref="item1">
					<u--input placeholder="请输入您的总部地址" v-model="model1.userInfo.name" ></u--input>
				</u-form-item>
				<u-form-item label="客单价" prop="userInfo.name" ref="item1">
					<u--input placeholder="请输入您的客单价" v-model="model1.userInfo.name" type="number"></u--input>
				</u-form-item>
				<u-form-item label="合作客户" prop="userInfo.name" ref="item1">
					<!-- 注意：由于兼容性差异，如果需要使用前后插槽，nvue下需使用u--input，非nvue下需使用u-input -->
					<!-- #ifndef APP-NVUE -->
					<u-input placeholder="请输入您的合作客户" v-model='model1.userInfo.xx'>
						<!-- #endif -->
						<!-- #ifdef APP-NVUE -->
						<u--input placeholder="请输入您的合作客户" v-model='model1.userInfo.xx'>
							<!-- #endif -->
							<template slot="suffix">

								<u-button @tap="getCode" text="添加" type="error" size="mini"></u-button>
							</template>
							<!-- #ifndef APP-NVUE -->
					</u-input>
					<!-- #endif -->
					<!-- #ifdef APP-NVUE -->
					</u--input>
					<!-- #endif -->
				</u-form-item>
				<view style="display: flex;flex-wrap: wrap;margin-bottom: 40rpx;">
					<u-tag :text="flist[index].text" plain plainFill type="error" closable :show="flist[index].zt"
						@close="flist[index].zt = false" v-for="(item,index) in flist"></u-tag>
				</view>
				<u-form-item label="请上传服务合作凭证" prop="userInfo.name" ref="item1">
					<uni-section title="自定义图片大小" type="line">
						<view class="example-body custom-image-box">
							<uni-file-picker limit="1" :del-icon="false" disable-preview :imageStyles="imageStyles"
								file-mediatype="image">
								<view class="upload_pic">
									<view class="upload_img">

									</view>
									点击上传
								</view>
							</uni-file-picker>

						</view>
					</uni-section>
				</u-form-item>
				<u-form-item label="请上传您的宣传图片，如没有可暂不上传" prop="userInfo.name" ref="item1" label-width="300">
					<uni-section title="自定义图片大小" type="line">
						<view class="example-body custom-image-box">
							<uni-file-picker limit="1" :del-icon="false" disable-preview :imageStyles="imageStyles"
								file-mediatype="image">
								<view class="upload_pic">
									<view class="upload_img">

									</view>
									点击上传
								</view>
							</uni-file-picker>

						</view>
					</uni-section>
				</u-form-item>

				<u-form-item label="运营联系人" prop="userInfo.name" ref="item1">
					<u--input placeholder="请输入您的运营联系人" v-model="model1.userInfo.name"></u--input>
				</u-form-item>

				<u-form-item label="手机号码" prop="userInfo.name" ref="item1">
					<u--input placeholder="请输入您的手机号码" v-model="model1.userInfo.name" type="number"></u--input>
				</u-form-item>

				<u-form-item label="验证码" prop="userInfo.name" ref="item1">
					<!-- #ifndef APP-NVUE -->
					<u-input placeholder="后置插槽">
						<!-- #endif -->
						<!-- #ifdef APP-NVUE -->
						<u--input placeholder="后置插槽">
							<!-- #endif -->
							<template slot="suffix">
								<u-code ref="uCode" @change="codeChange" seconds="20" changeText="X秒重新获取"></u-code>
								<u-button @tap="getCode1" :text="tips" type="error" size="mini"></u-button>
							</template>
							<!-- #ifndef APP-NVUE -->
					</u-input>
					<!-- #endif -->
					<!-- #ifdef APP-NVUE -->
					</u--input>
					<!-- #endif -->
				</u-form-item>

				<view class="jcxx">
					一 运营主题 一
				</view>
	
				<u-form-item label="公司名称" prop="userInfo.name" ref="item1">
					<u--input placeholder="请输入您的公司名称" v-model="model1.userInfo.name" ></u--input>
				</u-form-item>
				<view style="color: #999999FF;font-size: 12px;">如是个体户可输入营业执照上的名称</view>

				<u-form-item label="法定代表人" prop="userInfo.name" ref="item1">
					<u--input placeholder="请输入公司法定代表人" v-model="model1.userInfo.name" ></u--input>
				</u-form-item>

				<u-form-item label="注册资本" prop="userInfo.name" ref="item1">
					<u--input placeholder="请输入公司注册资本" v-model="model1.userInfo.name" ></u--input>
				</u-form-item>

				<u-form-item label="成立时间" prop="userInfo.name" ref="item1" @click="show1 = true">
					<u--input placeholder="请选择您的成立时间" v-model="model1.userInfo.sex" disabled type="select"
						suffixIcon="arrow-down" suffixIconStyle="color: #909399" disabledColor="#ffffff"></u--input>
				</u-form-item>
				<u-form-item label="营业执照" >
					<uni-section title="自定义图片大小" type="line">
						<view class="example-body custom-image-box">
							<uni-file-picker limit="1" :del-icon="false" disable-preview :imageStyles="imageStyles"
								file-mediatype="image">
								<view class="upload_pic">
									<view class="upload_img">
					
									</view>
									点击上传
								</view>
							</uni-file-picker>
							<view class="text">
								请上传您的营业执照</br>确保关键信息清晰可见
							</view>
						</view>
					</uni-section>
				</u-form-item>
				<view class="xy1"  @click="stateClass">
								 
								 <view><view :class="[ chosexy == 1 ? 'chose1' : 'chose2' ]"></view>已阅读并同意 <span class="yhxy">《掌店朗商户入驻协议》</span></view>
				</view>
		
				<view class="kfybt">
					提交申请
				</view>
			</u--form>
			<u-action-sheet :show="showSex" :actions="actions" title="请选择商品类型" @close="showSex = false"
				@select="sexSelect">
			</u-action-sheet>
			<u-calendar :show="show1"></u-calendar>
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
				tips: '',
				value: '',
				flist: [],
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
				show1: false,
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
				chosexy: 1,
				checkboxs: [{
						checked: true
					},
					{
						checked: false
					},
					{
						checked: false
					}, {
						checked: true
					},
					{
						checked: false
					},
					{
						checked: false
					}
				]
			}
		},
		methods: {
			sexSelect(e) {
				this.model1.userInfo.sex = e.name
				this.$refs.uForm.validateField('userInfo.sex')
			},
			stateClass(data) {
				if (this.chosexy == 1) {
					this.chosexy = 2
				} else {
					this.chosexy = 1
				}
			},
			getCode() {
				this.flist.push({
					text: this.model1.userInfo.xx,
					zt: true
				})
			},
			codeChange(text) {
				this.tips = text;
			},
			getCode1() {
				if (this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						uni.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 2000);
				} else {
					uni.$u.toast('倒计时结束后再发送');
				}
			},
			change(e) {
				console.log('change', e);
			},
			radioClick(name) {
				this.radios.map((item, index) => {
					item.checked = index === name ? true : false
				})
			},
			checkboxClick(name) {
				this.checkboxs[name].checked = !this.checkboxs[name].checked
			}
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
		
		align-items: center;
	}

	.text {
		font-size: 11px;
		color: #999999FF;
		line-height: 60rpx;
	}

	.upload_pic {
		width: 100%;
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
		padding: 0px !important;
	}

	.ordetail {
		background-color: #fff;
		border: 1px solid #dadbde !important;
		border-radius: 20rpx;

		padding: 20rpx;
	}

	.ordetail1 {
		background-color: #fff;
		border: 1px solid #dadbde !important;
		border-radius: 20rpx;

		padding: 30rpx 20rpx;
		color: #999999FF;
		font-size: 13px;


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
		justify-content: space-between;
		margin-bottom: 20rpx;
	}

	.welcome {
		font-size: 18px;
		color: #191919FF;
		font-weight: bold;
		line-height: 50px;
		text-align: center;
		background-color: #F8F8F8FF;
	}

	.jcxx {
		text-align: center;
		margin-bottom: 30rpx;
	}

	.zdy .file-picker__box {
		height: 220rpx !important;
		width: 220rpx !important;

	}
	.uni-file-picker {
		max-width: 300rpx!important;
	}
	.xy1 {
		
		color: #666666;
		font-size: 13px;
		letter-spacing:1px;
	
	}
	.chose1 {
		width: 26rpx;
		height: 26rpx;
		background: url('../../static/chose1.png');
		background-size: 100% 100%;
		float: left;
		margin: 8rpx;
	}
	.chose2 {
		width: 26rpx;
		height: 26rpx;
		background: url('../../static/chose2.png');
		background-size: 100% 100%;
		float: left;
		margin: 8rpx;
	}
	.yhxy {
		color: #FC4700;
	}
</style>
<style lang="scss">
	.u-page__tag-item {

		width: 200rpx;
		margin: 20rpx 0;
	}
</style>