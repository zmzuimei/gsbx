(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4164c310"],{2423:function(t,e,i){"use strict";i.d(e,"b",function(){return o}),i.d(e,"a",function(){return r});var c=i("365c"),a=i("9bd2"),n=a["a"].axios;function o(t){return n({url:c["a"].issueArticle,method:"post",data:t})}function r(t){return n({url:c["a"].getArticle,method:"get",data:t})}},"365c":function(t,e,i){"use strict";var c=i("e819"),a={getCode:"https://github.com/login/oauth/authorize?client_id=".concat(c["a"].clientId,"&scope=public_repo"),getToken:"https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token",getActiveUser:"https://api.github.com/user",issueArticle:"https://api.github.com/repos/".concat(c["a"].username,"/").concat(c["a"].articleRepo,"/issues"),getArticle:"https://api.github.com/repos/".concat(c["a"].username,"/").concat(c["a"].articleRepo,"/issues")};e["a"]=a},"82ce":function(t,e,i){"use strict";i.r(e);var c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("h1",[t._v("我的文章")]),i("a-list",{attrs:{dataSource:t.article},scopedSlots:t._u([{key:"renderItem",fn:function(e,c){return i("a-list-item",{staticStyle:{border:"1px solid cornflowerblue"}},[i("a-list-item-meta",{attrs:{description:e.body}},[i("a",{attrs:{slot:"title",href:"javascript:void(0)"},slot:"title"},[t._v(t._s(c+1)+"-"+t._s(e.title))])])],1)}}])})],1)},a=[],n=i("2423"),o=i("e819"),r={name:"home",data:function(){return{article:[]}},created:function(){var t=this;Object(n["a"])({state:"open",labels:[o["a"].articleLabel]}).then(function(e){t.article=e})}},s=r,l=i("2877"),u=Object(l["a"])(s,c,a,!1,null,null,null),d=u.exports;e["default"]=d},e819:function(t,e,i){"use strict";var c="production";e["a"]={clientId:"production"===c?"d318e11d5b12bf0417b6":"d7b3acf20efed15aaf3e",clientSecret:"production"===c?"35d61b835b940179de4d8dc1d3b9541ed4cd55f9":"3218bbf0edd44432d0b9605237c694d1662a74f0",username:"guowenzhuang",articleRepo:"gsbxComment",articleLabel:"article",adminMenu:[{title:"dashboard",key:"dashboard",icon:"pie-chart",children:[{title:"工作台",key:"workbench",icon:"reconciliation"}]},{title:"文章管理",key:"article",icon:"book",children:[{title:"写文章",key:"writeArticle",icon:"plus-square"},{title:"文章管理",key:"articleManager",icon:"file-text"}]}]}}}]);