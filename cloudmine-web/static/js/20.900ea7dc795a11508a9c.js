webpackJsonp([20],{"3rn5":function(s,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("Dd8w"),o=r.n(a),t=r("E4LH"),d=(r("mCTZ"),{name:"changePassword",data:function(){var s=this;return{editPasswordForm:{oldPassword:"",newPassword:"",newPassword1:""},editRules:{oldPassword:[{required:!0,message:"请输入旧密码",trigger:"blur"},{min:6,max:20,message:"请输入6-20位包含数字和字母的密码",trigger:"blur"},{validator:t.a.FormValidate.Form().checkPassWord,trigger:"blur"}],newPassword:[{required:!0,message:"请输入新密码",trigger:"blur"},{min:6,max:20,message:"请输入6-20位包含数字和字母的密码",trigger:"blur"},{validator:function(e,r,a){/^(?![^a-zA-Z]+$)(?!\D+$)/.test(r)?(""!==s.editPasswordForm.newPassword1&&s.$refs.editPasswordForm.validateField("newPassword1"),a()):a(new Error("请输入6-20位带有数字和字母的登录密码"))},trigger:"blur"}],newPassword1:[{required:!0,message:"请确认新密码",trigger:"blur"},{min:6,max:20,message:"请输入6-20位包含数字和字母的密码",trigger:"blur"},{validator:function(e,r,a){r!==s.editPasswordForm.newPassword?a(new Error("密码不一致")):a()},trigger:"blur"}]},isDisable:!1}},methods:{editPassword:function(s){var e=this;this.$refs[s].validate(function(s){if(!s)return!1;e.isDisable=!0,e.$api.updatePassword(o()({},e.editPasswordForm)).then(function(s){e.isDisable=!1,e.$message("密码已成功修改。请重新登录。"),e.$store.dispatch("getInfo",""),e.$router.push({path:"/login"})}).catch(function(s){e.isDisable=!1,e.$message.error(s.messages.error.message)})})},resetForm:function(s){this.$refs[s].resetFields()}}}),i={render:function(){var s=this,e=s.$createElement,r=s._self._c||e;return r("div",{staticClass:"changePassword"},[r("el-form",{ref:"editPasswordForm",attrs:{model:s.editPasswordForm,"label-position":"top",size:"small","hide-required-asterisk":"",rules:s.editRules}},[r("el-form-item",{attrs:{label:"旧密码",prop:"oldPassword"}},[r("el-input",{attrs:{type:"password",maxlength:"20",placeholder:"请输入旧密码","show-password":""},model:{value:s.editPasswordForm.oldPassword,callback:function(e){s.$set(s.editPasswordForm,"oldPassword",e)},expression:"editPasswordForm.oldPassword"}})],1),s._v(" "),r("el-form-item",{attrs:{label:"新密码",prop:"newPassword"}},[r("el-input",{attrs:{type:"password",maxlength:"20",placeholder:"请输入新密码","show-password":""},model:{value:s.editPasswordForm.newPassword,callback:function(e){s.$set(s.editPasswordForm,"newPassword",e)},expression:"editPasswordForm.newPassword"}})],1),s._v(" "),r("el-form-item",{attrs:{label:"确认密码",prop:"newPassword1"}},[r("el-input",{attrs:{type:"password",maxlength:"20",placeholder:"请确认密码","show-password":""},model:{value:s.editPasswordForm.newPassword1,callback:function(e){s.$set(s.editPasswordForm,"newPassword1",e)},expression:"editPasswordForm.newPassword1"}})],1),s._v(" "),r("el-form-item",{staticClass:"center",attrs:{label:""}},[r("button",{staticClass:"roundBtn",attrs:{type:"button",disabled:s.isDisable},on:{click:function(e){return s.editPassword("editPasswordForm")}}},[s._v("确认更改")])])],1)],1)},staticRenderFns:[]};var n=r("VU/8")(d,i,!1,function(s){r("xwyM")},"data-v-28c67355",null);e.default=n.exports},xwyM:function(s,e){}});
//# sourceMappingURL=20.900ea7dc795a11508a9c.js.map