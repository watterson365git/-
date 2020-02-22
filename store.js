import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	times:999,
	index:999, 
   // list:[{title:"纪念日1",date:"2020-2-20",days:365,qian:''}],
    list:[],
   list_title:'',
   list_date:''
   
 
  },
  mutations: {
    changeindex(state,index){
      state.index=index
    },
    delelist(state,list){
      state.list = list
    },
    addlist(state,list){
      state.list = list
    },
   changelist(state,list){
     state.list = list
   },
  getlist_title(state,list_title){
     state.list_title = list_title
   },
   getlist_date(state,list_date){
      state.list_date = list_date
    },
	adddays(state,obj){
		// console.log(obj)
		var list = state.list;
		list[obj.index].days = obj.days
		list[obj.index].qian = obj.qian
	   
	 },
	 changetimes(state){
	    state.times = state.times + 1
		console.log(state.times)
	  },
   

  },
  actions: {
  },
  modules: {
  }
})
