<template>
	<view class="container">
		
			<view v-for="(item,index) in list" class="lists" @click="todelepage(index)">
				<view  class="left">
					<view class="leftup">{{item.title}}</view>
					
					<view class="leftdown">{{item.date}}</view>
				</view>
				
				<view class="right"> {{item.qian}}{{item.days}}天</view>
			</view>
			
			
		
			<button  class="adddate" @click="toaddpage()">添加日历</button>
			
			
		
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
				uni.reLaunch({      //保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面。
					url: '../add/add'
								});
			},
	        
			todelepage(index){
				this.$store.commit("changeindex",index)
				uni.reLaunch({      //保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面。
					url: '../dele/dele'
								});
			},
			days(){
				var now = new Date()
				var list = this.list
				for(let i =0 ;i<list.length;i++){
					var arr =list[i].date.split("-")
					// console.log(arr)
					var you_setdate = new Date(arr[0],arr[1]-1,arr[2])
					// console.log(you_setdate)
					var day =  you_setdate-now 
					// console.log(Math.floor(day/60/60/1000/24))
					var days = Math.ceil(day/60/60/1000/24)
					if(days <0){
						
						var obj ={index:i,days:days*-1,qian:"过去"}
					}else{
						var obj ={index:i,days:days,qian:'还有'}
					}
					
					this.$store.commit("adddays",obj)
					
					
				}
				
				// var date_str = this.list.date
			}
			
				
			
	    },
		onLoad(){
			// console.log('走不走onload');
			var times = this.$store.state.times;
			var that = this;
			
			if(times == 999){
				uni.getStorage({
				    key: 'list',
				    success: function (res) {
						var list = res.data
				        console.log(res.data);
						
						that.list = list
						console.log('提取本地数据成功')
						
						that.$store.commit("changetimes")
						that.$store.commit("changelist",list)
						that.days()
						
				    },fail() {
						//第一次用会获取失败但是times必须要加一
				    	that.$store.commit("changetimes")
				
				    }
				});
				
				
			}else{
				this.list = this.$store.state.list
				this.days()
				
			}
			
		},
		onShareAppMessage(res) {
		    if (res.from === 'button') {// 来自页面内分享按钮
		      console.log(res.target)
		    }
		    return {
		      title: '纪念日-天气 小程序',
		      path: '/pages/test/test?id=123'
		    }
		  },
		  onShow(){
			  // var list = this.$store.state.list
			  var list = this.$store.state.list
			  uni.setStorage({
			      key: 'list',
			      data: list,
			      success: function () {
			          console.log("存储成功");
			      }
			  })
			    
			 
		  },
		//   onHide() {
		//   	// var list = this.$store.state.list
		// 	var list = this.$store.state.list
		//   	uni.setStorage({
		//   	    key: 'list',
		//   	    data: list,
		//   	    success: function () {
		//   	        console.log("存储成功");
		//   	    }
		//   	});
		//   }
		
		
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
		background:rgba(230,202,209,0.7);
		
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
		margin-top: 14rpx;
		color:#1B1464;
		font-size: medium;
		
	}
	.leftdown{
		font-size: medium;
		margin-top: 20rpx;
		color: #EE5A24;
		
	}
	

</style>
