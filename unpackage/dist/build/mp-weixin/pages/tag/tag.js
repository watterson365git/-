(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tag/tag"],{"0f0a":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{list:[]}},computed:{},methods:{toaddpage:function(){t.reLaunch({url:"../add/add"})},todelepage:function(e){this.$store.commit("changeindex",e),t.reLaunch({url:"../dele/dele"})},days:function(){for(var t=new Date,e=this.list,n=0;n<e.length;n++){var a=e[n].date.split("-"),o=new Date(a[0],a[1]-1,a[2]),s=o-t,i=Math.ceil(s/60/60/1e3/24);if(i<0)var c={index:n,days:-1*i,qian:"过去"};else c={index:n,days:i,qian:"还有"};this.$store.commit("adddays",c)}}},onLoad:function(){var e=this.$store.state.times,n=this;999==e?t.getStorage({key:"list",success:function(t){var e=t.data;console.log(t.data),n.list=e,console.log("提取本地数据成功"),n.$store.commit("changetimes"),n.$store.commit("changelist",e),n.days()},fail:function(){n.$store.commit("changetimes")}}):(this.list=this.$store.state.list,this.days())},onShareAppMessage:function(t){return"button"===t.from&&console.log(t.target),{title:"纪念日-天气 小程序",path:"/pages/test/test?id=123"}},onShow:function(){var e=this.$store.state.list;t.setStorage({key:"list",data:e,success:function(){console.log("存储成功")}})}};e.default=n}).call(this,n("543d")["default"])},3156:function(t,e,n){},"597a":function(t,e,n){"use strict";var a,o=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return a})},6108:function(t,e,n){"use strict";var a=n("3156"),o=n.n(a);o.a},"85ae":function(t,e,n){"use strict";n.r(e);var a=n("0f0a"),o=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=o.a},"8edc":function(t,e,n){"use strict";(function(t){n("83e2"),n("921b");a(n("66fd"));var e=a(n("9f58"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"9f58":function(t,e,n){"use strict";n.r(e);var a=n("597a"),o=n("85ae");for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);n("6108");var i,c=n("f0c5"),u=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);e["default"]=u.exports}},[["8edc","common/runtime","common/vendor"]]]);