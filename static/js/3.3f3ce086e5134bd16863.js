webpackJsonp([3],{"9WXl":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"navTop",data:function(){return{active:"",transparentPage:["home"],menuList:[{title:"首页",active:"home",link:"/"},{title:"产品",active:"recordsCenter",link:"/recordsCenter"},{title:"服务",active:"servers",link:"/servers/crust"},{title:"Staking",active:"staking",link:"/staking"},{title:"关于我们",active:"aboutUs",link:"/aboutUs"}],aboutUsActive:"",aboutUsNavData:[{title:"关于我们",path:"/aboutUs",active:"aboutUsCon"},{title:"公告",path:"/bulletin",active:"bulletin"}],serverActive:"",serversNavData:[{title:"crust",path:"/servers/crust",active:"crust"},{title:"phala",path:"/servers/phala",active:"phala"}]}},methods:{signOut:function(){var t=this;this.$api.signOut().then(function(e){localStorage.setItem("passport",""),t.$router.push({path:"/"}),t.$store.dispatch("getInfo","")})}},mounted:function(){this.active=this.$route.meta.active},watch:{$route:function(t,e){this.active=this.$route.meta.active}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"NavTop",class:t.transparentPage.includes(t.active)?"transparentBg":"coloredBg"},[a("div",{staticClass:"NavCon"},[a("div",{staticClass:"logo"},[a("router-link",{attrs:{to:"/home"}},[a("img",{attrs:{src:"/static/image/topLogo.png"}})])],1),t._v(" "),a("ul",t._l(t.menuList,function(e,s){return a("li",{key:s},[a("div",[a("router-link",{class:{navActive:-1!=t.active.indexOf(e.active)},attrs:{to:e.link}},[t._v(t._s(e.title))])],1)])}),0)])])},staticRenderFns:[]};var n=a("VU/8")(s,i,!1,function(t){a("g7eC")},"data-v-35f7e341",null).exports,r={name:"navBottom",created:function(){var t=document.createElement("script");t.type="text/javascript",t.src="https://s9.cnzz.com/z_stat.php?id=1278912268&show=pic",document.body.appendChild(t)}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom"},[a("el-row",{staticClass:"footer"},[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"btmItem"},[a("img",{attrs:{src:"/static/image/btmLogo.png",alt:""}})]),t._v(" "),a("div",{staticClass:"clause"},[a("ul",[a("li",[a("a",{style:{paddingLeft:"0px"},attrs:{href:"/static/file/user_terms.pdf",target:"_blank"}},[t._v("用户条款")]),t._v("|\n          ")]),t._v(" "),a("li",[a("a",{attrs:{href:"/static/file/privacy_agreement.pdf",target:"_blank"}},[t._v("隐私条款")]),t._v("|\n          ")]),t._v(" "),a("li",[a("a",{attrs:{href:"/static/file/legal_Notices.pdf",target:"_blank"}},[t._v("法律声明")])])]),t._v(" "),a("div",{staticClass:"btmItem"},[t._v("\n          © 2021 AnMav . All rights reserved. |\n          "),a("a",{attrs:{href:"https://beian.miit.gov.cn/",target:"_blank"}},[t._v("\n            蜀ICP备18015461号-8")])])])]),t._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"btmItem"})]),t._v(" "),a("el-col",{staticClass:"WeChatQrCode",attrs:{span:8}},[a("div",[a("img",{attrs:{src:"/static/image/officailAccount.png",width:"124px"}}),t._v(" "),a("div",{staticClass:"WeChatQrCodeName"},[t._v("公众号")])]),t._v(" "),a("div",[a("img",{attrs:{src:"/static/image/weChatImg.jpg",width:"124px"}}),t._v(" "),a("div",{staticClass:"WeChatQrCodeName"},[t._v("微信客服")])])])],1)],1)},staticRenderFns:[]};var o=a("VU/8")(r,c,!1,function(t){a("y4rB")},"data-v-2ab0b00c",null).exports,v=a("mCTZ"),l={name:"container",components:{navTop:n,navBottom:o},mounted:function(){var t=this;Object(v.c)(function(e){!0!==e&&t.$message.error(e)})}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("nav-Top"),this._v(" "),e("router-view"),this._v(" "),e("nav-Bottom")],1)},staticRenderFns:[]};var d=a("VU/8")(l,u,!1,function(t){a("XNf4")},"data-v-efc5fb92",null);e.default=d.exports},XNf4:function(t,e){},g7eC:function(t,e){},y4rB:function(t,e){}});
//# sourceMappingURL=3.3f3ce086e5134bd16863.js.map