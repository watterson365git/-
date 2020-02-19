<template>
	<view class="container">
		
			<view v-for="(item,index) in list" class="lists" @click="todelepage(index)">
				<view  class="left">
					<view class="leftup">{{item.title}}</view>
					
					<view class="leftdown">{{item.date}}</view>
				</view>
				
				<view class="right"> 还有多少天</view>
			</view>
			
			
		
			<button  class="adddate" @click="todele">添加纪念日</button>
			
			
		
	</view>
	
</template>

<script>
	export default {
	    data() {
	        return {
				list:[]
	        }
	    },
	    computed: {
	       
	    },
	    methods: {
			toaddpage(){
				uni.navigateTo({      //保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面。
					url: '../add/add'
								});
			},
	        
			todele(index){
				uni.navigateTo({      //保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面。
					url: '../dele/dele'
								});
			},
			
				
			
	    },
		onReady(){
			this.list = this.$store.state.list
		}
	}
</script>

<style>
	/* .container{
		padding-top:5%;
		height: 2000rpx;
		background-color: #81ecec;
	} */
	.adddate{
		position: fixed;
		bottom: 60rpx;
		left: 50%;
		width: 300rpx;
		margin-left: -150rpx;
		background-color: #ad6598;
		color: #F1F1F1;
		
	},
	.lists{
		position:relative;
		left: 5%;
		right: 5%;
		margin-top:3%;
		width: 90%;
		height: 160rpx;
		background-color:#e3b4b8;
		border-radius:15rpx;
		box-shadow: 3rpx 3rpx 2rpx 1rpx #888888;
	}
	
	.left{
		position: absolute;
		left: 60rpx;
		top:20rpx;
		
		font-size: 150%;
		line-height: -50rpx;
	}
	
	.right{
		position: absolute;
		right: 50rpx;
		bottom: 50rpx;
		color: #1B1464;
		font-size: 150%;
		line-height: -50rpx;
	}
	
	.leftup{
		color: #1B1464;
		
	}
	.leftdown{
		font-size: medium;
		margin-top: 14rpx;
		color: #EE5A24;
		
	}
	

</style>
