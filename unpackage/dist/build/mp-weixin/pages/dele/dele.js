(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/dele/dele"],{"169c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{index:0,list:[]}},methods:{delelist:function(){var e=this.list;e.splice(this.index,1),console.log(e),this.$store.commit("delelist",e),t.switchTab({url:"../tag/tag"})},toedit:function(){var e=this.list,n=e[this.index].title,i=e[this.index].date;this.$store.commit("getlist_title",n),this.$store.commit("getlist_date",i),t.navigateTo({url:"../edit/edit"})}},onLoad:function(){this.index=this.$store.state.index,this.list=this.$store.state.list}};e.default=n}).call(this,n("543d")["default"])},"1ab7":function(t,e,n){"use strict";n.r(e);var i=n("7130"),a=n("c5d4");for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);n("9aab");var u,c=n("f0c5"),o=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);e["default"]=o.exports},7130:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return i})},"9aab":function(t,e,n){"use strict";var i=n("c508"),a=n.n(i);a.a},a95e:function(t,e,n){"use strict";(function(t){n("83e2"),n("921b");i(n("66fd"));var e=i(n("1ab7"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},c508:function(t,e,n){},c5d4:function(t,e,n){"use strict";n.r(e);var i=n("169c"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=a.a}},[["a95e","common/runtime","common/vendor"]]]);