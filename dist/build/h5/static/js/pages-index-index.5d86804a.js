(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"03c2":function(A,t,n){"use strict";n.r(t);var a=n("91a1"),e=n("7dc5");for(var i in e)["default"].indexOf(i)<0&&function(A){n.d(t,A,(function(){return e[A]}))}(i);n("cd8d");var o,s=n("f0c5"),c=Object(s["a"])(e["default"],a["b"],a["c"],!1,null,"3d4faa1a",null,!1,a["a"],o);t["default"]=c.exports},"0b52":function(A,t,n){var a=n("24fb");t=a(!1),t.push([A.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.taskDay[data-v-3d4faa1a]{width:%?350?%;background:#fff!important;border-radius:%?15?%;padding:0 %?20?%;padding-top:%?25?%;padding-bottom:%?22?%;box-sizing:border-box;margin-top:%?14?%}.taskDay .taskHot_1[data-v-3d4faa1a]{display:flex;justify-content:space-between}.taskDay .taskHot_1 .taskHot_1_1[data-v-3d4faa1a]{display:flex}.taskDay .taskHot_1 .taskHot_1_1 .taskHot_1_1_1[data-v-3d4faa1a]{width:%?78?%;height:%?78?%;margin-right:%?19?%;border-radius:%?15?%}.taskDay .taskHot_1 .taskHot_1_1 .taskHot_1_1_2[data-v-3d4faa1a]{display:flex;flex-direction:column;justify-content:space-between}.taskDay .taskHot_1 .taskHot_1_1 .taskHot_1_1_2 .taskHot_1_1_2_1[data-v-3d4faa1a]{font-size:%?28?%;font-family:PingFang SC;font-weight:700;color:#1a1a1a}.taskDay .taskHot_1 .taskHot_1_1 .taskHot_1_1_2 .taskHot_1_1_2_2[data-v-3d4faa1a]{display:flex}.taskDay .taskHot_1 .taskHot_1_1 .taskHot_1_1_2 .taskHot_1_1_2_2 .taskHot_1_1_2_2_1[data-v-3d4faa1a]{height:%?32?%;line-height:%?32?%;padding:0 %?13?%;background:#f2f2f2;border-radius:%?5?%;font-size:%?20?%;font-family:PingFang SC;font-weight:400;color:#727270}.taskDay .taskHot_1 .taskHot_1_2[data-v-3d4faa1a]{width:%?23?%;height:%?27?%}.taskDay .taskHot_2[data-v-3d4faa1a]{text-align:end;font-size:%?28?%;font-family:PingFang SC;font-weight:700;color:#ff3f22;margin-top:%?22?%}.taskDay .taskHot_3[data-v-3d4faa1a]{margin-top:%?19?%;display:flex;justify-content:space-between}.taskDay .taskHot_3 .taskHot_3_1[data-v-3d4faa1a]{display:flex;align-items:flex-end}.taskDay .taskHot_3 .taskHot_3_1 .taskHot_3_1_1[data-v-3d4faa1a]{width:%?21?%;height:%?21?%;margin-right:%?10?%}.taskDay .taskHot_3 .taskHot_3_1 .taskHot_3_1_2[data-v-3d4faa1a]{font-size:%?20?%;font-family:PingFang SC;font-weight:400;color:#727270;line-height:1}',""]),A.exports=t},"0d9b":function(A,t,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=a(n("ade3"));n("d3b7"),n("159b"),n("ac1f"),n("841c");var i,o=a(n("03c2")),s=a(n("4aca")),c=n("7c15"),d=(i={data:function(){return{hotListData:[],dayList:[],banner:"",hotListParams:{page:1,num:4},listParams:{page:1,num:10},show:!1,text:"",lv:"",downloadurl:"",search:"",noticeShow:!1,tip:[]}},onLoad:function(){},methods:(0,e.default)({bannerList:function(){var A=this;(0,c.bannerList)().then((function(t){A.banner="http://zxyj.xzxiaocaihua.cn".concat(t.data[0].image)}))},hotList:function(){var A=this;(0,c.hotList)(this.hotListParams).then((function(t){t.data.forEach((function(A){"http"!=A.cooperate.substring(0,4)&&(A.cooperate="http://zxyj.xzxiaocaihua.cn".concat(A.cooperate))})),A.hotListData=t.data}))},list:function(){var A=this;(0,c.list)(this.listParams).then((function(t){if(-1==t.code)return A.$u.toast(t.msg);t.data.forEach((function(t){"http"!=t.cooperate.substring(0,4)&&(t.cooperate="http://zxyj.xzxiaocaihua.cn".concat(t.cooperate)),A.dayList.push(t)}))}))},goVip:function(){uni.navigateTo({url:"/pages/user/vip"})},goHall:function(){uni.navigateTo({url:"/pages/hall/index"})},goPromote:function(){uni.navigateTo({url:"/pages/user/promote"})},goNews:function(){uni.navigateTo({url:"/pages/index/news"})},version:function(){var A=this;(0,c.version)().then((function(t){A.text=t.data.content,A.lv=t.data.newversion,A.downloadurl=t.data.downloadurl,A._version!=A.lv?(A.show=!0,uni.hideTabBar()):(new Date).getTime()<=16610112e5&&(0,c.get_tip)().then((function(t){A.tip=t.data,A.noticeShow=!0}))}))},newApp:function(){this.$u.toast("正在下载..."),uni.downloadFile({url:this.downloadurl,success:function(A){uni.openDocument({filePath:A.tempFilePath})}})},confirm:function(){uni.navigateTo({url:"/pages/index/search?title=".concat(this.search)})}},"goPromote",(function(){uni.navigateTo({url:"/pages/user/promote"})})),onShow:function(){this.bannerList(),this.hotList(),this.list()}},(0,e.default)(i,"onLoad",(function(){this.version()})),(0,e.default)(i,"onReachBottom",(function(){this.listParams.page+=1,this.list()})),(0,e.default)(i,"components",{TaskHot:o.default,TaskDay:s.default}),i);t.default=d},"109a":function(A,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={props:{item:{type:Object,default:[]}},methods:{goInfo:function(A){uni.setStorageSync("item",A),uni.navigateTo({url:"/pages/index/info"})}}};t.default=a},"1de5":function(A,t,n){"use strict";A.exports=function(A,t){return t||(t={}),A=A&&A.__esModule?A.default:A,"string"!==typeof A?A:(/^['"].*['"]$/.test(A)&&(A=A.slice(1,-1)),t.hash&&(A+=t.hash),/["'() \t\n]/.test(A)||t.needQuotes?'"'.concat(A.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):A)}},"22ae":function(A,t){A.exports="data:image/webp;base64,UklGRlgDAABXRUJQVlA4WAoAAAAwAAAACwAAEgAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOEwZAQAALwuABBDX4TCSJKeZu3t8JkRJ0h6kScNhJElOM3f3+EyIkqQ9SOMwkiSnmbt7fCZESdIepGHYto3j4FlOu+8fwNq2jXVdBXjfd57nYZomZaaXZeE4Dv3//xmGId/31TAM9TyPM1P//z9bawn49/tFVf0qgFWAysxTRe2IaJWISFURcagTEa0SEal2RDRQERHqAKh3RCRglYiQSkQ0UICBMyKWKgBAgIGCw0iyTWsfv23b9v+Tf2jn/Bgi+q+wbRukasfwR+myyUqSJPXhXPRcwKPmOYRv17PzhpFn9Q5zz/wJ9hnHZA3HyBenMJDnhrFX4/MH7R+vilUPnk2rCTzqVjO4lU0UrOBaMEp3cMgZxUfYxvZTC5ahfSUA"},"44c0":function(A,t,n){var a=n("b8a8");"string"===typeof a&&(a=[[A.i,a,""]]),a.locals&&(A.exports=a.locals);var e=n("4f06").default;e("1af9b269",a,!0,{sourceMap:!1,shadowMode:!1})},"4aca":function(A,t,n){"use strict";n.r(t);var a=n("8795"),e=n("cdbf");for(var i in e)["default"].indexOf(i)<0&&function(A){n.d(t,A,(function(){return e[A]}))}(i);n("d7f4");var o,s=n("f0c5"),c=Object(s["a"])(e["default"],a["b"],a["c"],!1,null,"13d19aab",null,!1,a["a"],o);t["default"]=c.exports},"4d1f":function(A,t,n){"use strict";var a=n("44c0"),e=n.n(a);e.a},"4ee3":function(A,t){A.exports="data:image/webp;base64,UklGRrwFAABXRUJQVlA4WAoAAAAwAAAAKQAAKgAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOEx+AwAALymAChAv5rSRJEmKnr2Pnf+eHroEvUY4biRJUqJ3OH8Ygf8WQqfbRpIEpeb+H/DIP1MsWmHbti021aEQQAAEoOHAAAAAfPHDD4s//vLBYvnuV5uKaNO72rK05UVFWL2999tfH591r8Sq7bjTdkQFHOexd1CBpi+gExAP96ojHCXWFZ1ISBzH//x3OuRCBRwTIEEFwMVx7IBLVUi4QCJBp8MlCaDpgARgGLMcGAASOcaZVjKWAQAEpIwA5MDM7AICY5CSkDEEY6vA2JAxJCcFxgCQNDYDApD2AZJbQO7YAN23kzVJYwMDQKIkyaZtzbVt27Zt89m2bdu2bRuX9WHvrbXPOft8QUT/GUiSJKNj710U5viDiIiIiIiIiIhnanXn8FBvdY6PiIiIiIiIWF/xbz/0HQDg96UZcbaPkjf9AADjwvixfNtGgesnFNXYgz3LpkxbsP2aTnso1oZa8lqtnGyLMIJ4FW37BXzvtFpnK/BdSdZgwpaowQZnyywrgJeFtnyKqLPAKXdLIMuBk4G2fTXHJcB+ByNGH7DV1eqfsAy1zMCQPgZbzfzcLqBcI3C6AxedTNnBKnjrqwD64WeUOYtxuQOrRMTjAwyLSePKnOBPqEgLPHMRs2UfLBS5AENiWjnw3iVygpEgMV/uQVELnBE7aB4sWAtz/sku0xOnoUinSKkI1gGiq6INYJGVBgK/EZ48hngNYg58SlEAtSOM1Goo5b/5W6mXl/z5wniAQgidBA6LiMMr4JVmi/eB57puwm+DEpRjnFdG9Q345qRY3wGfdfs9B98Z9xeFcx7oMpr+cg1rPrBYb64y+RpidC+cta1cp+nZ0WM40r69y0DwkO9XoNgeN3L/waPNMGAPpcLxbjhgD02BmQnw1c0Oug7Zcgcazdc0eOMo0+Gmee3Qnhv0A2pN9+OMhIvIGlhkomrGcAnWKYCjUGlSs+B7sLKvDxBprtZM/jcvg0m+NFfLRmCvRtAA+03VwVG46WWMTFNNjIJ2AjcMkeAy5Gke2Lx3foC1kXPbG5UOvP9TqND1kz8+noVLb04qx9lY4GEhDqfNfwpMLjSG4gz4ePCbIfso3zq2qqOprnXq7mcaxu0sC2/Wa7zfiy2NR8awlrRu1VuMvasVyY+TU1McRSRx7tVRCyvvdhZaS353768u9bbEEZLbuXT1+pWzG5KtJgcB"},5265:function(A,t,n){A.exports=n.p+"static/img/hdtz.ad188388.png"},"7db4":function(A,t){A.exports="data:image/webp;base64,UklGRuIDAABXRUJQVlA4WAoAAAAwAAAAEwAAFQAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOEykAQAALxNABRD/4iqSJMWqnj0GJafn+f97BpjLxvw7jW3bqfa5ZBSODuiI/gWSQf4ctsO2jRw5uLTn8n0IsIiTPYfT2WZ05GI1uPKw2D01fZpbXmaTj7ev0uaHDprz66c39OdP2Tr07y/q8/Ofhv7kj39ESwkHiQQiFaoCjwhQeaCE4Eil/DkRErJJhVdRWKJiD4ELqWgwcJCBkIAN7DBIhaAQElAQ0SCyEXAQAAACAkDIAgUVggUpggKCbVvLkkt3g91Kd3c32GIrd/7DcPG+zylE9F9h27aN0ey0zfgCAAD4B3MXKnfLulvxXPSHG7KTIsmqJNsvSZLcoS1hedcioxgFHb36FJinGpwBynHexOPxeDweP4IGgetoNBqNRqPHZpUOPjVGzyAptNFeKwsyzUm+PJNcf5E81Lwa83ywhTHJhQEIiuk92ovcOxWuc6Ap6y96StZbUcEE3m9RwFsT2B/IssJn8oOn3ImhUJM1XCXlB/c3B4bLrKwhnZAfbNd54+xB1pCIqEPqHv4oFUTQIElqJ9gAHKP/aOTYbS292v55lD9WaTMA"},"7dc5":function(A,t,n){"use strict";n.r(t);var a=n("109a"),e=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(A){n.d(t,A,(function(){return a[A]}))}(i);t["default"]=e.a},8069:function(A,t,n){"use strict";n.r(t);var a=n("0d9b"),e=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(A){n.d(t,A,(function(){return a[A]}))}(i);t["default"]=e.a},8795:function(A,t,n){"use strict";var a;n.d(t,"b",(function(){return e})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var e=function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("v-uni-view",{staticClass:"taskDay",on:{click:function(t){arguments[0]=t=A.$handleEvent(t),A.goInfo(A.item)}}},[a("v-uni-view",{staticClass:"taskDay_1"},[null!=A.item.cooperate?a("v-uni-image",{staticClass:"taskDay_1_1",attrs:{src:A.item.cooperate}}):A._e(),a("v-uni-view",{staticClass:"taskDay_1_2"},[a("v-uni-view",{staticClass:"taskDay_2_1"},[A._v(A._s(A.item.name))]),a("v-uni-view",{staticClass:"taskDay_2_2"},[a("v-uni-view",{staticClass:"taskDay_2_2_1"},[A._v(A._s(A.item.category))])],1)],1)],1),a("v-uni-view",{staticClass:"taskDay_2"},[a("v-uni-view",{staticClass:"taskDay_2_1"},[A._v("￥"+A._s(A.item.award_number))]),a("v-uni-view",{staticClass:"taskDay_2_2"},[a("v-uni-view",{staticClass:"taskDay_2_2_1",staticStyle:{"margin-right":"29rpx"}},[a("v-uni-image",{staticClass:"taskDay_2_2_1_1",attrs:{src:n("a53f")}}),a("v-uni-view",{staticClass:"taskDay_2_2_1_2"},[A._v(A._s(A.item.number-A.item.stock_number)+"人已赚")])],1),a("v-uni-view",{staticClass:"taskDay_2_2_1"},[a("v-uni-image",{staticClass:"taskDay_2_2_1_1",attrs:{src:n("7db4")}}),a("v-uni-view",{staticClass:"taskDay_2_2_1_2"},[A._v("剩余"+A._s(A.item.stock_number)+"个")])],1)],1)],1)],1)},i=[]},"91a1":function(A,t,n){"use strict";var a;n.d(t,"b",(function(){return e})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var e=function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("div",{staticClass:"taskDay",on:{click:function(t){arguments[0]=t=A.$handleEvent(t),A.goInfo(A.item)}}},[a("div",{staticClass:"taskHot_1"},[a("div",{staticClass:"taskHot_1_1"},[null!=A.item.cooperate?a("v-uni-image",{staticClass:"taskHot_1_1_1",attrs:{src:A.item.cooperate}}):A._e(),a("div",{staticClass:"taskHot_1_1_2"},[a("div",{staticClass:"taskHot_1_1_2_1"},[A._v(A._s(A.item.name))]),a("div",{staticClass:"taskHot_1_1_2_2"},[a("div",{staticClass:"taskHot_1_1_2_2_1"},[A._v(A._s(A.item.category))])])])],1),a("v-uni-image",{staticClass:"taskHot_1_2",attrs:{src:n("a546")}})],1),a("div",{staticClass:"taskHot_2"},[A._v("￥"+A._s(A.item.award_number))]),a("div",{staticClass:"taskHot_3"},[a("div",{staticClass:"taskHot_3_1"},[a("v-uni-image",{staticClass:"taskHot_3_1_1",attrs:{src:n("a53f")}}),a("div",{staticClass:"taskHot_3_1_2"},[A._v(A._s(A.item.number-A.item.stock_number)+"人已赚")])],1),a("div",{staticClass:"taskHot_3_1"},[a("v-uni-image",{staticClass:"taskHot_3_1_1",attrs:{src:n("7db4")}}),a("div",{staticClass:"taskHot_3_1_2"},[A._v("剩余"+A._s(A.item.stock_number)+"个")])],1)])])},i=[]},"93ed":function(A,t){A.exports="data:image/webp;base64,UklGRooEAABXRUJQVlA4WAoAAAAwAAAAHgAAHgAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOExMAgAALx6ABxBX5CCSJEmpmrsDNXjEJCpQcG/ZmH8HbSQ5UvVcBvj8ATyDC10O27YN5GCo5O7+AwzxhZ+fv7+Pa3frrs4We7vbYmv13On09tq9t9k93E2dfFeFY26fR61YTUq3WgjbPErp0ltoLG5fSAtd/I9FaiweNXRL8saINKJo6DGGwhONAS/CMuiDBJ6wg4nkZciLNCLxgsIpQDCkcEKkFClgYMNiRoJfkhgoAVOEBcQAAHyQAReSIUViE/BTwAeZ8IoBIgEZAAQWCAQAQgRCICGAEEwZABIkyTZtq59t27Zt2/a3+WyjZv3fPWef/WcQ0X8Gbts2Enx7qbn0E5IkScocePvr/Oboy0J1sCRJkgx7pR8BAOBkMNxrL2rNp/N3Z3529fsjsF9hXtL34W4y288hEdn2AxgyLalXsBdn8gjsvodxt0XEPox6DTLjGDpcDhsw4l2h5Ase4x0G5bBrU8FK2HEIfOIhVjZZhxxJaTAhA8Y6wYykIciUXT5z5Ce941CW9EGC9JttW4qhWDpnzgNTa0CjdPPvlbakQLN0xLItBVAvfeWbLU2QL83zFG7JEvfBUi202S0h17yRFHTKTz8reqBdzt/VZbNEX3Ls6PXQIx4zvJeA969vdSqUwXGS57IIG26JYTirMi8xH4Amg8YYsJnutgjrPfPNl+dGQzrvgE/9JVkphc0rl8BW2wsvpiTsgGn+HbRIjS88N5jGmTv9x3nm9k1riE+k4fl111gI/8Sixua6vBC3R+MzzzWSJJtmcO1e6L9SezwF"},a3e2:function(A,t,n){var a=n("ced9");"string"===typeof a&&(a=[[A.i,a,""]]),a.locals&&(A.exports=a.locals);var e=n("4f06").default;e("92492334",a,!0,{sourceMap:!1,shadowMode:!1})},a53f:function(A,t){A.exports="data:image/webp;base64,UklGRjgDAABXRUJQVlA4WAoAAAAwAAAAFAAAFAAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOEz6AAAALxQABRBnwbBt20hS37sb9PYfIIjXmH8GkSQ1ajIG8e+DD8uwkaS2SfbIGZwdYAjgd/rnoexSPraJropwVN9YVbUftaN9aaifqouA4vWnKEgAIYqCOFAkqYSAQtRLsaFLhQUBFH6QQhQngOAwkmRVmY+72+Kum3+C8O79IoKI/itw20bxMcMzAAB6c826AJDWKgfb9qGI7e2fuA1Tx05iO7IITCO7wCYyC0wirU+S3s1w4jqxynyQXrafS3Lf1hhtxnUAAAAAINtbG+p4uV6OGtbS2uD0CDZ6nAbfWv1s23bQcW5SvdnZeK/O7RJxrlL0T31JkiRJkiRJfQ=="},a546:function(A,t){A.exports="data:image/webp;base64,UklGRvoDAABXRUJQVlA4WAoAAAAwAAAAFgAAGgAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOEy7AQAALxaABhBP46iRJEfKXPtfbkt/afi7pDH/DtpGkqRkdu+FcPxhXncQpm3bXO0kbAGOsMPD702+3XCnv59l9fVneYyLEXf/YtX/e/KzapMHmmgTpysJTHHfILHB6d8G9w1mgRzAx1bHpFInCViVwCB+7ACialGAWFAJm4QVqPxRYVQAQIIFpCEo8ACqABiwMEGqOGhAkAKLApCgRYRJAWwKKHgCSFCAAATgCQDBtq3jzalj1batpLbdJqntO/8h/O/7kiFE9J+B20aKskx3WXgFAADN1QAAAB4WnzvKIytNlsW+pOEyUuWbpJ+G0rRLkvLQUoIdmdjHzLg3pf8sl/SozY4NAMeSjfWTegkZ7kL0yiVbkDaClPjvjb56+A/mZYAljZyYuRc37tRNiHzqyUqc1uUd3qvIeVbtEX50FHprPqzAx7dmoc0hN+QILK+rETi0Fvu7Dt39heA4Wq3F0bX9wW3FYL85vHujsVV0SiL2qFeNxvS5+dKB51KGzfdSC+ZIkx46g++dEPuSdGav0EwMXkEGpiSt+OiSNOpsbs3HmDRvDeZ05WP7d8JVaHtIuAqhYpNPrTbjGsTtiwAA"},aced:function(A,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={props:{item:{type:Object,default:[]}},methods:{goInfo:function(A){uni.setStorageSync("item",A),uni.navigateTo({url:"/pages/index/info"})}}};t.default=a},b8a8:function(A,t,n){var a=n("24fb"),e=n("1de5"),i=n("bac3"),o=n("5265");t=a(!1);var s=e(i),c=e(o);t.push([A.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-f6276d9c]{background:#f2f2f2}.content .content_1[data-v-f6276d9c]{background:linear-gradient(180deg,#ffc3b3,#fff)}.content .content_1 .content_1_1[data-v-f6276d9c]{display:flex;justify-content:space-between;align-items:center;padding:0 %?24?%;padding-top:%?122?%;margin-bottom:%?19?%}.content .content_1 .content_1_1 .content_1_1_1[data-v-f6276d9c]{font-size:%?34?%;font-family:PingFang SC;font-weight:700;color:#000}.content .content_1 .content_1_1 .content_1_1_2[data-v-f6276d9c]{width:%?537?%;height:%?69?%;background:#fff;border:%?2?% solid #ff644d;border-radius:%?35?%;display:flex;align-items:center;padding:0 %?22?%;box-sizing:border-box}.content .content_1 .content_1_1 .content_1_1_2 .content_1_1_2_1[data-v-f6276d9c]{width:%?31?%;height:%?31?%;margin-right:%?22?%}.content .content_1 .content_1_1 .content_1_1_2 .content_1_1_2_2[data-v-f6276d9c]{font-size:%?26?%;font-family:PingFang SC;font-weight:400;color:#b0adad}.content .content_1 .content_1_1 .content_1_1_3[data-v-f6276d9c]{width:%?42?%;height:%?43?%}.content .content_1 .content_1_2[data-v-f6276d9c]{width:%?700?%;height:%?260?%;margin-bottom:%?31?%;display:block;margin:0 auto}.content .content_2[data-v-f6276d9c]{padding:0 %?25?%;padding-bottom:%?25?%;padding-top:%?31?%;display:flex;justify-content:space-between;background:#fff}.content .content_2 .content_2_1[data-v-f6276d9c]{width:%?277?%;height:%?319?%}.content .content_2 .content_2_2[data-v-f6276d9c]{display:flex;flex-direction:column;justify-content:space-between}.content .content_2 .content_2_2 .content_2_2_1[data-v-f6276d9c]{width:%?400?%;height:%?150?%}.content .content_3[data-v-f6276d9c]{margin-top:%?12?%}.content .content_3 .content_3_1[data-v-f6276d9c]{height:%?80?%;padding:0 %?20?%;background:#fff;display:flex;align-items:center;justify-content:space-between}.content .content_3 .content_3_1 .content_3_1_1[data-v-f6276d9c]{display:flex;align-items:center}.content .content_3 .content_3_1 .content_3_1_1 .content_3_1_1_1[data-v-f6276d9c]{width:%?7?%;height:%?39?%;background:#ff644d;border-radius:%?4?%;margin-right:%?12?%}.content .content_3 .content_3_1 .content_3_1_1 .content_3_1_1_2[data-v-f6276d9c]{font-size:%?30?%;font-family:PingFang SC;font-weight:700;color:#1a1a1a}.content .content_3 .content_3_1 .content_3_1_2[data-v-f6276d9c]{display:flex;align-items:center}.content .content_3 .content_3_1 .content_3_1_2 .content_3_1_2_1[data-v-f6276d9c]{font-size:%?26?%;font-family:PingFang SC;font-weight:400;color:#a9a9a9;margin-right:%?6?%}.content .content_3 .content_3_1 .content_3_1_2 .content_3_1_2_2[data-v-f6276d9c]{width:%?12?%;height:%?19?%}.content .content_3 .content_3_2[data-v-f6276d9c]{display:grid;grid-template-columns:1fr 1fr;justify-items:center}.content .content_4[data-v-f6276d9c]{margin-top:%?13?%}.content .content_4 .content_4_1[data-v-f6276d9c]{height:%?80?%;background:#fff;padding:0 %?20?%;display:flex;align-items:center;justify-content:space-between}.content .content_4 .content_4_1 .content_4_1_1[data-v-f6276d9c]{display:flex;align-items:center}.content .content_4 .content_4_1 .content_4_1_1 .content_4_1_1_1[data-v-f6276d9c]{width:%?7?%;height:%?39?%;background:#ff644d;border-radius:%?4?%;margin-right:%?16?%}.content .content_4 .content_4_1 .content_4_1_1 .content_4_1_1_2[data-v-f6276d9c]{font-size:%?30?%;font-family:PingFang SC;font-weight:700;color:#1a1a1a}.content .content_4 .content_4_1 .content_4_1_2[data-v-f6276d9c]{display:flex;align-items:center}.content .content_4 .content_4_1 .content_4_1_2 .content_4_1_2_1[data-v-f6276d9c]{font-size:%?26?%;font-family:PingFang SC;font-weight:400;color:#a9a9a9;margin-right:%?6?%}.content .content_4 .content_4_1 .content_4_1_2 .content_4_1_2_2[data-v-f6276d9c]{width:%?12?%;height:%?19?%}.content .version .version_1[data-v-f6276d9c]{width:%?503?%;height:%?575?%;background:url('+s+") no-repeat;background-size:100%;position:absolute;left:0;right:0;top:0;bottom:0;margin:auto;padding-top:%?197?%;box-sizing:border-box}.content .version .version_1 .version_1_1[data-v-f6276d9c]{font-size:%?40?%;font-family:PingFang SC;font-weight:700;color:#000;line-height:1;text-align:center;margin-bottom:%?31?%}.content .version .version_1 .version_1_2[data-v-f6276d9c]{font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#7c7c7c;padding:0 %?39?%}.content .version .version_1 .version_1_3[data-v-f6276d9c]{width:%?411?%;height:%?90?%;background:#fc4336;box-shadow:0 0 %?21?% 0 rgba(238,58,46,.49);border-radius:%?45?%;text-align:center;line-height:%?90?%;position:absolute;left:0;right:0;margin:0 auto;bottom:%?36?%;font-size:%?32?%;font-family:PingFang SC;font-weight:500;color:#fff}.content .notice[data-v-f6276d9c]{position:absolute;left:0;right:0;top:0;bottom:0;margin:auto;width:%?568?%;height:%?855?%;background:url("+c+") no-repeat;background-size:100%;padding:0 %?50?%;box-sizing:border-box}.content .notice .notice_1[data-v-f6276d9c]{text-align:center;margin-bottom:%?47?%;margin-top:%?253?%;font-size:%?40?%;font-family:PingFang SC;font-weight:700;color:#000;line-height:1}.content .notice .notice_2[data-v-f6276d9c]{font-size:%?27?%;font-family:PingFang SC;font-weight:500;color:#3c3c3c;line-height:%?38?%}.content .notice .notice_4[data-v-f6276d9c]{width:%?411?%;height:%?90?%;background:#fc4336;box-shadow:0 0 %?21?% 0 rgba(238,58,46,.49);border-radius:%?45?%;text-align:center;line-height:%?90?%;margin:0 auto;margin-top:%?54?%;font-size:%?32?%;font-family:PingFang SC;font-weight:500;color:#fff}",""]),A.exports=t},bac3:function(A,t,n){A.exports=n.p+"static/img/banbgx.39d09385.png"},cb71:function(A,t,n){var a=n("0b52");"string"===typeof a&&(a=[[A.i,a,""]]),a.locals&&(A.exports=a.locals);var e=n("4f06").default;e("9e17cf3e",a,!0,{sourceMap:!1,shadowMode:!1})},cd8d:function(A,t,n){"use strict";var a=n("cb71"),e=n.n(a);e.a},cdbf:function(A,t,n){"use strict";n.r(t);var a=n("aced"),e=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(A){n.d(t,A,(function(){return a[A]}))}(i);t["default"]=e.a},ced9:function(A,t,n){var a=n("24fb");t=a(!1),t.push([A.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.taskDay[data-v-13d19aab]{background:#fff!important;padding:%?35?% %?25?% %?34?% %?26?%;display:flex;justify-content:space-between;border-top:%?1?% solid #f2f2f2}.taskDay .taskDay_1[data-v-13d19aab]{display:flex;flex-shrink:0}.taskDay .taskDay_1 .taskDay_1_1[data-v-13d19aab]{width:%?78?%;height:%?78?%;border-radius:%?15?%;margin-right:%?27?%}.taskDay .taskDay_1 .taskDay_1_2[data-v-13d19aab]{display:flex;flex-direction:column;justify-content:space-between}.taskDay .taskDay_1 .taskDay_1_2 .taskDay_2_1[data-v-13d19aab]{font-size:%?28?%;font-family:PingFang SC;font-weight:700;color:#1a1a1a;line-height:1;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:%?260?%}.taskDay .taskDay_1 .taskDay_1_2 .taskDay_2_2[data-v-13d19aab]{display:flex}.taskDay .taskDay_1 .taskDay_1_2 .taskDay_2_2 .taskDay_2_2_1[data-v-13d19aab]{height:%?32?%;background:#f2f2f2;border-radius:%?5?%;line-height:%?32?%;padding:0 %?13?%;font-size:%?20?%;font-family:PingFang SC;font-weight:400;color:#727270}.taskDay .taskDay_2[data-v-13d19aab]{display:flex;flex-direction:column;justify-content:space-between}.taskDay .taskDay_2 .taskDay_2_1[data-v-13d19aab]{text-align:end;font-size:%?28?%;font-family:PingFang SC;font-weight:700;color:#ff3f22;line-height:1}.taskDay .taskDay_2 .taskDay_2_2[data-v-13d19aab]{display:flex;justify-content:space-between;align-items:center}.taskDay .taskDay_2 .taskDay_2_2 .taskDay_2_2_1[data-v-13d19aab]{display:flex;align-items:center}.taskDay .taskDay_2 .taskDay_2_2 .taskDay_2_2_1 .taskDay_2_2_1_1[data-v-13d19aab]{width:%?21?%;height:%?21?%;margin-right:%?10?%}.taskDay .taskDay_2 .taskDay_2_2 .taskDay_2_2_1 .taskDay_2_2_1_2[data-v-13d19aab]{font-size:%?20?%;font-family:PingFang SC;font-weight:400;color:#727270;left:1}',""]),A.exports=t},d62a:function(A,t,n){A.exports=n.p+"static/img/renwudati.bd15d083.webp"},d7f4:function(A,t,n){"use strict";var a=n("a3e2"),e=n.n(a);e.a},dc14:function(A,t,n){A.exports=n.p+"static/img/yaoqingyoul.2d698397.webp"},e31c:function(A,t,n){"use strict";n.d(t,"b",(function(){return e})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var a={"u-Input":n("f6fa").default,uOverlay:n("ffef").default},e=function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"content_1"},[a("v-uni-view",{staticClass:"content_1_1"},[a("v-uni-view",{staticClass:"content_1_1_1"},[A._v("首页")]),a("v-uni-view",{staticClass:"content_1_1_2"},[a("v-uni-image",{staticClass:"content_1_1_2_1",attrs:{src:n("93ed")}}),a("u--input",{attrs:{fontSize:"26rpx",placeholder:"乐播 | 团油 | 招商证券 | 腾讯大王卡",border:"none","confirm-type":"send"},on:{confirm:function(t){arguments[0]=t=A.$handleEvent(t),A.confirm.apply(void 0,arguments)}},model:{value:A.search,callback:function(t){A.search=t},expression:"search"}})],1),a("v-uni-image",{staticClass:"content_1_1_3",attrs:{src:n("4ee3")},on:{click:function(t){arguments[0]=t=A.$handleEvent(t),A.goNews.apply(void 0,arguments)}}})],1),A.banner?a("v-uni-image",{staticClass:"content_1_2",attrs:{src:A.banner},on:{click:function(t){arguments[0]=t=A.$handleEvent(t),A.goPromote.apply(void 0,arguments)}}}):A._e()],1),a("v-uni-view",{staticClass:"content_2"},[a("v-uni-image",{staticClass:"content_2_1",attrs:{src:n("f242")},on:{click:function(t){arguments[0]=t=A.$handleEvent(t),A.goVip.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"content_2_2"},[a("v-uni-image",{staticClass:"content_2_2_1",attrs:{src:n("d62a")},on:{click:function(t){arguments[0]=t=A.$handleEvent(t),A.goHall.apply(void 0,arguments)}}}),a("v-uni-image",{staticClass:"content_2_2_1",attrs:{src:n("dc14")},on:{click:function(t){arguments[0]=t=A.$handleEvent(t),A.goPromote.apply(void 0,arguments)}}})],1)],1),a("v-uni-view",{staticClass:"content_3"},[a("v-uni-view",{staticClass:"content_3_1"},[a("v-uni-view",{staticClass:"content_3_1_1"},[a("v-uni-view",{staticClass:"content_3_1_1_1"}),a("v-uni-view",{staticClass:"content_3_1_1_2"},[A._v("今日最热")])],1),a("v-uni-view",{staticClass:"content_3_1_2"},[a("v-uni-view",{staticClass:"content_3_1_2_1",on:{click:function(t){arguments[0]=t=A.$handleEvent(t),A.goHall.apply(void 0,arguments)}}},[A._v("查看更多")]),a("v-uni-image",{staticClass:"content_3_1_2_2",attrs:{src:n("22ae")}})],1)],1),a("v-uni-view",{staticClass:"content_3_2"},A._l(A.hotListData,(function(A,t){return a("TaskHot",{key:t,attrs:{item:A}})})),1)],1),a("v-uni-view",{staticClass:"content_4"},[a("v-uni-view",{staticClass:"content_4_1"},[a("v-uni-view",{staticClass:"content_4_1_1"},[a("v-uni-view",{staticClass:"content_4_1_1_1"}),a("v-uni-view",{staticClass:"content_4_1_1_2"},[A._v("日常任务")])],1),a("v-uni-view",{staticClass:"content_4_1_2"},[a("v-uni-view",{staticClass:"content_4_1_2_1",on:{click:function(t){arguments[0]=t=A.$handleEvent(t),A.goHall.apply(void 0,arguments)}}},[A._v("查看更多")]),a("v-uni-image",{staticClass:"content_4_1_2_2",attrs:{src:n("22ae")}})],1)],1),a("v-uni-view",{staticClass:"content_4_2"},A._l(A.dayList,(function(A,t){return a("TaskDay",{key:t,attrs:{item:A}})})),1)],1),a("u-overlay",{attrs:{show:A.show}},[a("v-uni-view",{staticClass:"version"},[a("v-uni-view",{staticClass:"version_1",on:{click:function(t){t.stopPropagation(),arguments[0]=t=A.$handleEvent(t)}}},[a("v-uni-view",{staticClass:"version_1_1"},[A._v("新版本更新提醒")]),a("v-uni-view",{staticClass:"version_1_2"},[A._v(A._s(A.text))]),a("v-uni-view",{staticClass:"version_1_3",on:{click:function(t){arguments[0]=t=A.$handleEvent(t),A.newApp.apply(void 0,arguments)}}},[A._v("立即更新")])],1)],1)],1),a("u-overlay",{attrs:{show:A.noticeShow}},[a("v-uni-view",{staticClass:"notice"},[a("v-uni-view",{staticClass:"notice_1"},[A._v("正式版上线活动通知")]),A._l(A.tip,(function(t,n){return a("v-uni-view",{key:n,staticClass:"notice_2"},[A._v(A._s(n+1)+"."+A._s(t))])})),a("v-uni-view",{staticClass:"notice_4",on:{click:function(t){arguments[0]=t=A.$handleEvent(t),A.noticeShow=!1}}},[A._v("知道啦")])],2)],1)],1)},i=[]},f242:function(A,t,n){A.exports=n.p+"static/img/ruzhuhuiyuan.4da5ac43.webp"},f75a:function(A,t,n){"use strict";n.r(t);var a=n("e31c"),e=n("8069");for(var i in e)["default"].indexOf(i)<0&&function(A){n.d(t,A,(function(){return e[A]}))}(i);n("4d1f");var o,s=n("f0c5"),c=Object(s["a"])(e["default"],a["b"],a["c"],!1,null,"f6276d9c",null,!1,a["a"],o);t["default"]=c.exports}}]);