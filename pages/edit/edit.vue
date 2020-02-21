<template>
   <view class="adddate">
	    <view class="name">
		   <view class="leftname">名称</view>
		   <input type="text" :value="list_title" class="input" @blur="getname">
		</view>
		
		<view class="name">
			<view class="leftname">日期</view>
			<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange" class="input">
			    {{date}}
			</picker>
		</view>

	<button class="addbtn" @click="save">保存</button>   
   </view>
	
     
</template>

<script>
	export default {
	    data() {
	        const currentDate = this.getDate({
	            format: true
	        })
	        return {
	            title: 'picker',
	            array: ['中国', '美国', '巴西', '日本'],
	            index: 0,
	            date: currentDate,
	            time: '12:01',
				
				
				list_title:'',
				list:[]
	        }
	    },
	    computed: {
	        startDate() {
	            return this.getDate('start');
	        },
	        endDate() {
	            return this.getDate('end');
	        }
	    },
	    methods: {
			getname(event){
				
				this.list_title = event.detail.value
				console.log(this.list_title)
			},
			save(){
				if(this.list_title.length===0){
					 uni.showToast({
					        title: '标题不可为空',
					        duration: 1500
					    });
				}else{
				  var list = this.list
				  list.splice(this.index,1,{title:this.list_title,date:this.date})
				  // list.push({title:this.list_title,date:this.date})
				  this.$store.commit("changelist",list)
				  uni.switchTab({
				  	url: '../tag/tag'
				  			});
				}
				
				
				
				
			},
			
			
	        // bindPickerChange: function(e) {
	        //     console.log('picker发送选择改变，携带值为', e.target.value)
	        //     this.index = e.target.value
	        // },
	        bindDateChange: function(e) {
	            this.date = e.target.value
	        },
	        // bindTimeChange: function(e) {
	        //     this.time = e.target.value
	        // },
	        getDate(type) {
	            const date = new Date();
	            let year = date.getFullYear();
	            let month = date.getMonth() + 1;
	            let day = date.getDate();
	
	            if (type === 'start') {
	                year = year - 60;
	            } else if (type === 'end') {
	                year = year + 2;
	            }
	            month = month > 9 ? month : '0' + month;;
	            day = day > 9 ? day : '0' + day;
	            return `${year}-${month}-${day}`;
	        }
	    },
		onLoad() {
			//传递参数，把点击的index传到store里再这里获得
			this.index = this.$store.state.index;
			this.list =this.$store.state.list;
			this.list_title =this.$store.state.list_title;
			this.date =this.$store.state.list_date;
		
		}
	}
</script>

<style>
	.addbtn{
		margin-top: 60rpx;
	}
	.adddate{
		padding: 40rpx;
		
		margin-top: 250rpx;
		
	}
	.name{
		display: flex;
		border-bottom: #8F8F94 3rpx solid;
	}
	.leftname{
		flex: 3;
		
		font-size: 120%;
		text-align: center;
		line-height: 100rpx;
	}
	.input{
		display: block;
		height:100rpx;
		flex: 7;
		line-height: 100rpx;
		padding-left: 30rpx;
	}
	
</style>