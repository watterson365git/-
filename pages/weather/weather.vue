<template>
	<view class="content">
		<text class="alert">如果获取失败，请打开手机定位后下拉刷新</text>
		<view class="now">
			<view class="tmp">当前温度{{now.tmp}}℃</view>
			<view class="tmp2">今日温度:{{list[0].tmp_min}}℃/{{list[0].tmp_max}}℃</view>
			<view class="cond">当前天气:{{now.cond_txt}}</view>
			<view class="hum">当前湿度:{{now.hum}}%</view>
			<view class="wind">风向:{{now.wind_dir}}</view>
			<view class="wind">风力:{{now.wind_sc}}级</view>
			<view class="wind">气压:{{now.pres}}帕</view>
			<view class="city">{{location.parent_city}}市-{{location.location}}区</view>
		</view>
		<view>三日预报：</view>
		<view v-for="item in list" class="forecast">
			<text>日期:{{item.date}}-</text>
			<text>天气:{{item.cond_txt_d}}-</text>
			<text>温度:{{item.tmp_min}}/{{item.tmp_max}}℃</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				location:'',
				now:'',
				list:[]
				 
			}
		},
		methods: {
			getdata(){
				var that = this;
				uni.getLocation({
				    type: 'wgs84',
				    success: function (res) {
				        // console.log('当前位置的经度：' + res.longitude);
				        // console.log('当前位置的纬度：' + res.latitude);
				        uni.request({
				            url:'https://free-api.heweather.net/s6/weather/now?location=' + res.longitude + ',' + res.latitude + '&key=04fd6a9c1bef4bcaba1c66fcbca77075',			
				            success: (result) => {
				                // console.log(result.data.HeWeather6[0].basic);
							
								var now = result.data.HeWeather6[0].now
								that.location = result.data.HeWeather6[0].basic
								
				                uni.request({
				                    url:'https://free-api.heweather.net/s6/weather/forecast?location=' + res.longitude + ',' + res.latitude + '&key=04fd6a9c1bef4bcaba1c66fcbca77075',			
				                    success: (result) => {
				                        // console.log(result.data.HeWeather6[0].daily_forecast);
										that.now = now
										that.list =result.data.HeWeather6[0].daily_forecast
										
				                    }
				                })
													 
								
								
				            }
				        })}})	
			}
			
		},
		onLoad(){
			this.getdata()
			},
		onPullDownRefresh() {
			this.getdata()
			 setTimeout(function () {
			            uni.stopPullDownRefresh();
			        }, 2000);
			
			},
		onShareAppMessage(res) {
		    if (res.from === 'button') {// 来自页面内分享按钮
		      console.log(res.target)
		    }
		    return {
		      title: '纪念日-天气 小程序',
		      path: '/pages/tag/tag'
		    }
		  },
			onShareAppMessage(res) {
			    if (res.from === 'button') {// 来自页面内分享按钮
			      console.log(res.target)
			    }
			    return {
			      title: '纪念日-天气 小程序',
			      path: '/pages/tag/tag'
			    }
			  },
	}
</script>

<style>
	view{
		margin-bottom: 24rpx;
	}
	
	.city{
		font-size: 160%;
	}
.content{
	position:relative;
	left: 5%;
	right: 5%;
	margin-top:10%;
	width: 90%;

	
}

.now{
	text-align: center;

}

.tmp{
	font-size: 200%;
	color: #EE5A24;
}
text{
	margin-left: 14rpx;
}
.alert{
	display: block;
	color: red;
	padding-bottom: 60rpx;
}

</style>
