<template>
	<view >
		<view class="deleframe">
			<view class="title">{{list[index].title}}</view>
			<view class="day">{{list[index].qian}}{{list[index].days}}天</view>
			<view class="date">{{list[index].date}}</view>
			
			
		</view>
		<view class="btn">
			<button class="btn1" @click="toedit">编辑</button>
			<button class="btn2" @click="delelist">删除</button>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				index:0,
				list:[],
				
			}
		},
		methods: {
			delelist(){
				var list = this.list
				list.splice(this.index,1)
				console.log(list)
				this.$store.commit("delelist",list)
				uni.switchTab({
					url: '../tag/tag'
							});
			},
			toedit(){
				var list = this.list
				var list_title =list[this.index].title	
				var list_date =list[this.index].date	
				this.$store.commit("getlist_title",list_title)
				this.$store.commit("getlist_date",list_date)
				uni.navigateTo({      //保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面。
					url: '../edit/edit'
								});
			}
			
		},
		onLoad() {
			//传递参数，把点击的index传到store里再这里获得
			this.index = this.$store.state.index;
			this.list =this.$store.state.list;

		}
	}
</script>

<style>
	.deleframe{
		position:relative;
		left: 5%;
		right: 5%;
		margin-top:30%;
		width: 90%;
		border-radius:15rpx;
		box-shadow: 3rpx 3rpx 2rpx 1rpx #888888;
		background-color: #e3b4b8;
	}
	.day{
		text-align: center;
		padding-top: 100rpx;
		padding-bottom: 100rpx;
		font-size: 200%;
		color: #1B1464;
		
	}
	
	.title,.date{
		height: 100rpx;
		text-align: center;
		line-height: 100rpx;
		color: #EE5A24;
		font-size: 120%;
		
	}
	.btn{
		position:relative;
		left: 5%;
		right: 5%;
		margin-top:4%;
		width: 90%;
		display: flex;
		text-align: center;
		
	}
	.btn1,.btn2{
		flex: 1;
		display: inline-block;
		background-color:  #ad6598;
		color: #eeeeee;
		
		
	}
	
	
</style>
