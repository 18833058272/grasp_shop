<template>
	<view>
		<view class="search">
			<view class="search_box">
				<image src="@/static/icon/search.png"></image>
				<input type="text" confirm-type="search" v-model="keyword" @confirm="searchClick(key)" @input="changeInput" :placeholder="defaultKeyword" />
				<image src="@/static/icon/del_text.png" v-show="keyword" @click="delKeyword()"></image>
			</view>
			<view class="search_btn" @click="searchClick(key)">搜索</view>
		</view>
		<view class="bottom">
			<!-- 搜索关键词列表 -->
			<view class="keyword-list-box" v-show="keywordList">
				<view class="keyword-entry" hover-class="keyword-entry-tap" v-for="(item,idx) in keywordList" :key="idx" @click="searchClick(keyword)">
					<image src="@/static/icon/search.png"></image>
					<rich-text :nodes="item.htmlStr"></rich-text>
				</view>
			</view>
			<!-- 历史记录+热搜词汇 -->
			<view v-if="keywordList.length == 0">
				<view class="history">
					<view class="title">
						<text>历史记录</text>
						<image src="@/static/icon/del.png" @click="oldDelete()"></image>
					</view>
					<view v-if="oldKeywordList.length>0">
						<view class="item_box">
							<view class="item" v-for="(keyword, index) in oldKeywordList" @tap="searchClick(keyword)" :key="index">{{ keyword }}</view>
						</view>
					</view>
					<view v-else style="font-size: 26rpx; color: #ccc;">暂无搜索记录</view>
				</view>
				<view class="hot">
					<view class="title"><text>搜索发现</text></view>
					<view class="item_box">
						<view class="item" v-for="(item, index) in hotWords" :key="index" @click="searchClick(item.queryName)">
							<image src="@/static/icon/hot.png" v-if="item.hot"></image>
							<text>{{ item.queryName }}</text>
						</view>
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
			keyword: '',
			defaultKeyword: '',
			oldKeywordList: [], //历史记录数据
			keywordList: [],
			searchTimer: null,
			hotWords: []
		}
	},
	onLoad(e) {
		this.loadOldKeyword() //进来页面先在缓存取值
		this.getHotWords()
		if (e.key) {
			this.keyword = e.key
		}
	},
	methods: {
		// 获取最近搜索热词
		getHotWords() {
			uni.request({
				url:'' //请求搜索的热词
			}).then(res=> {
				// 模拟的数据
				let mockData = [
					{
						queryName:'音响',
						querySubType:99,
						queryType:9
					},
					{
						queryName:'高压锅',
						querySubType:99,
						queryType:9
					},
					{
						queryName:'电脑',
						querySubType:99,
						queryType:9
					},
					{
						queryName:'电视',
						querySubType:99,
						queryType:9
					},
					{
						queryName:'笔记本',
						querySubType:99,
						queryType:9
					}
				]
				this.hotWords = mockData
				// this.hotWords = res.data  请求到的数据
				this.getRandomKeyword()
			})
		},
		// 获取随机热词填入输入框
		getRandomKeyword() {
			const random = Math.floor(Math.random() * this.hotWords.length)
			this.defaultKeyword = this.hotWords[random].queryName
		},
		// 删除input输入的内容
		delKeyword() {
			this.keyword = ''
			this.keywordList = []
		},
		loadOldKeyword() {
			uni.getStorage({
				key: 'OldKeys',
				success: res => {
					let OldKeys = JSON.parse(res.data)
					this.oldKeywordList = OldKeys
				}
			})
		},
		// 删除历史记录
		oldDelete() {
			uni.showModal({
				title: '删除',
				content: '确定删除历史搜索记录吗？',
				confirmColor: '#c30d23',
				success: res => {
					if (res.confirm) {
						console.log('用户点击确定')
						this.oldKeywordList = []
						uni.removeStorage({
							key: 'OldKeys'
						})
					} else if (res.cancel) {
						console.log('用户点击取消')
					}
				}
			})
		},
		// input事件
		changeInput() {
			if (!this.keyword) {
				this.keywordList = []
				return
			}
			// input的防抖
			this.$u.debounce(() => {
				uni.request({
					url:'https://api.tian.cn/api/Search/suggest?query='+ this.keyword
				}).then(res=> {
					let words = res[1].data.data
			
					if (words.length != 0) {
						this.keywordList = this.drawCorrelativeKeyword(words, this.keyword)
					}
				})
			}, 200)
		},
		// 高亮显示关键词
		drawCorrelativeKeyword(keywords, keyword) {
			var len = keywords.length,
				keywordArr = []
			for (var i = 0; i < len; i++) {
				var row = keywords[i]
				//定义高亮#9f9f9f
				var html = row.queryName.replace(keyword, "<span style='color: #9f9f9f;'>" + keyword + '</span>')
				html = '<div>' + html + '</div>'
				var tmpObj = {
					keyword: row.word,
					htmlStr: html
				}
				keywordArr.push(tmpObj)
			}
			return keywordArr
		},
		searchClick(key) {
			console.log('key============',key);
			key = key ? key : this.keyword ? this.keyword : this.defaultKeyword
			this.keyword = key
			this.saveKeyword(key) //保存为历史
			uni.navigateTo({
				url: '/pages/goodsList/goodsList?key=' + key
			})
		},
		// 保存为历史记录
		saveKeyword(keyword) {
			uni.getStorage({
				key: 'OldKeys',
				success: res => {
					let OldKeys = JSON.parse(res.data)
					let findIndex = OldKeys.indexOf(keyword)
					if (findIndex == -1) {
						OldKeys.unshift(keyword)
					} else {
						OldKeys.splice(findIndex, 1)
						OldKeys.unshift(keyword)
					}
					//最多10个纪录
					OldKeys.length > 10 && OldKeys.pop()
					uni.setStorage({
						key: 'OldKeys',
						data: JSON.stringify(OldKeys)
					})
					this.oldKeywordList = OldKeys //更新历史搜索
				},
				
				
				fail: e => {
					var OldKeys = [keyword]
					uni.setStorage({
						key: 'OldKeys',
						data: JSON.stringify(OldKeys)
					})
					this.oldKeywordList = OldKeys //更新历史搜索
				}
			})
		}
	}
}
</script>
 
<style lang="scss">
.search {
	display: flex;
	align-items: center;
	height: 120rpx;
	padding-bottom: 30rpx;
	background-color: #f7f7f7;
	font-size: 26rpx;
	& > image {
		width: 18rpx;
		height: 31rpx;
		margin-left: 53rpx;
	}
	.search_box {
		display: flex;
		align-items: center;
		width: 600rpx;
		height: 60rpx;
		background-color: #ffffff;
		// box-shadow: 2rpx 2rpx 2rpx red;
		border-radius: 30rpx;
		margin: 0 12rpx 0 25rpx;
		padding-left: 18rpx;
		image:nth-child(1) {
			margin: 0 18rpx 0 7rpx;
			width: 28rpx;
			height: 28rpx;
		}
		image:nth-child(3) {
			margin: 0 14rpx 0 auto;
			width: 31rpx;
			height: 31rpx;
		}
		input {
			height: 60rpx;
			// letter-spacing: 4rpx;
			line-height: 60rpx;
			color: #969696;
		}
	}
	.search_btn {
		width: 96rpx;
		height: 52rpx;
		background-color: #fff;
		color: pink;
		border-radius: 26rpx;
		line-height: 52rpx;
		text-align: center;
	}
}
.bottom {
	margin-top: -10rpx;
	border-radius: 24rpx 24rpx 0 0;
	background-color: #ffffff;
	overflow: hidden;
	// padding: 34rpx 36rpx 0;
}
 
.hot,
.history {
	margin: 34rpx 0;
	padding: 0 36rpx;
}
.history {
	margin-bottom: 68rpx !important;
}
.title {
	display: flex;
	align-items: center;
	font-size: 30rpx;
	color: #262626;
	font-family: Pingfang-Bold;
	margin-bottom: 34rpx;
	font-weight: bold;
	image {
		width: 25rpx;
		height: 28rpx;
		margin: 0 6rpx 0 auto;
	}
}
.item_box {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	font-size: 26rpx;
	.item {
		display: flex;
		align-items: center;
		height: 48rpx;
		margin: 0 24rpx 24rpx 0;
		padding: 0 24rpx;
		line-height: 48rpx;
		border-radius: 24rpx;
		color: #333333;
		background-color: #f4f4f4;
		image {
			margin-right: 8rpx;
			width: 21rpx;
			height: 26rpx;
		}
	}
}
.keyword-list-box {
	position: fixed;
	top: 120rpx;
	width: 750rpx;
	background-color: #fff;
	z-index: 1;
}
.keyword-entry-tap {
	background-color: #eee;
}
.keyword-entry {
	display: flex;
	align-items: center;
	height: 80rpx;
	font-size: 26rpx;
	color: #333;
	padding: 0 30rpx;
	border-bottom: solid 1rpx #f7f7f7;
	image {
		width: 29rpx;
		height: 30rpx;
		margin-right: 30rpx;
	}
	text {
		margin-left: auto;
		color: #777;
		font-size: 22rpx;
	}
}
</style>