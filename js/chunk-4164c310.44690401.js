(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4164c310"],{2423:function(t,e,c){"use strict";c.d(e,"b",function(){return n}),c.d(e,"a",function(){return r});var i=c("365c"),a=c("9bd2"),o=a["a"].axios;function n(t){return o({url:i["a"].issueArticle,method:"post",data:t})}function r(t){return o({url:i["a"].getArticle,method:"get",data:t})}},"365c":function(t,e,c){"use strict";var i=c("e819"),a="production",o={getCode:"https://github.com/login/oauth/authorize?client_id=".concat(i["a"].clientId,"&scope=public_repo"),getToken:"production"===a?"https://github.com/login/oauth/access_token":"https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token",getActiveUser:"https://api.github.com/user",issueArticle:"https://api.github.com/repos/".concat(i["a"].username,"/").concat(i["a"].articleRepo,"/issues"),getArticle:"https://api.github.com/repos/".concat(i["a"].username,"/").concat(i["a"].articleRepo,"/issues")};e["a"]=o},"82ce":function(t,e,c){"use strict";c.r(e);var i=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"home"},[c("h1",[t._v("我的文章")]),c("a-list",{attrs:{dataSource:t.article},scopedSlots:t._u([{key:"renderItem",fn:function(e,i){return c("a-list-item",{staticStyle:{border:"1px solid cornflowerblue"}},[c("a-list-item-meta",{attrs:{description:e.body}},[c("a",{attrs:{slot:"title",href:"javascript:void(0)"},slot:"title"},[t._v(t._s(i+1)+"-"+t._s(e.title))])])],1)}}])})],1)},a=[],o=c("2423"),n=c("e819"),r={name:"home",data:function(){return{article:[]}},created:function(){var t=this;Object(o["a"])({state:"open",labels:[n["a"].articleLabel]}).then(function(e){t.article=e})}},s=r,u=c("2877"),l=Object(u["a"])(s,i,a,!1,null,null,null),d=l.exports;e["default"]=d},e819:function(t,e,c){"use strict";var i="production";e["a"]={clientId:"production"===i?"d318e11d5b12bf0417b6":"d7b3acf20efed15aaf3e",clientSecret:"production"===i?"35d61b835b940179de4d8dc1d3b9541ed4cd55f9":"3218bbf0edd44432d0b9605237c694d1662a74f0",username:"guowenzhuang",articleRepo:"gsbxComment",articleLabel:"article",adminMenu:[{title:"dashboard",key:"dashboard",icon:"pie-chart",children:[{title:"工作台",key:"workbench",icon:"reconciliation"}]},{title:"文章管理",key:"article",icon:"book",children:[{title:"写文章",key:"writeArticle",icon:"plus-square"},{title:"文章管理",key:"articleManager",icon:"file-text"}]}]}}}]);