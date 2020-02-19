import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	test:999, 
   list:[{title:"纪念日1",date:"20200000"},{title:"纪念日2",date:"22222222"}],
 
  },
  mutations: {
    addcount(state){
      state.count++;
    },
    addtime(state){
      state.time++;
    },
    cleartime(state){
      state.time = 0;
    },
    clearcount(state){
      state.count = 0;
    }

  },
  actions: {
  },
  modules: {
  }
})
