(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e272c52"],{"883b":function(e,t,a){"use strict";var n=a("b98e"),l=a.n(n);l.a},a72c:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"agency"},[a("breadcrumb",{attrs:{routeMeta:e.$route.meta}}),a("el-card",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-input",{attrs:{placeholder:"请输入需要查找的代理码",clearable:""},on:{clear:e.getAgList},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("el-select",{staticStyle:{width:"100px"},attrs:{placeholder:"请选择等级"},model:{value:e.queryInfo.agency_level,callback:function(t){e.$set(e.queryInfo,"agency_level",t)},expression:"queryInfo.agency_level"}},[a("el-option",{attrs:{label:"全部",value:null}}),a("el-option",{attrs:{label:"1级",value:1}}),a("el-option",{attrs:{label:"2级",value:2}})],1)]},proxy:!0},{key:"append",fn:function(){return[a("el-button",{attrs:{icon:"el-icon-search"},on:{click:e.getAgList}})]},proxy:!0}]),model:{value:e.queryInfo.agency_code,callback:function(t){e.$set(e.queryInfo,"agency_code",t)},expression:"queryInfo.agency_code"}})],1),a("el-col",{staticClass:"button_position",attrs:{span:16}},[a("el-button",{attrs:{type:"primary"},on:{click:e.handleFindMyUser}},[e._v("查询名下用户")])],1)],1),a("el-divider"),a("el-table",{attrs:{data:e.agList,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"index",label:"#"}}),a("el-table-column",{attrs:{prop:"agency_name",label:"代理人名"}}),a("el-table-column",{attrs:{prop:"agency_code",label:"邀请码"}}),a("el-table-column",{attrs:{prop:"agency_level",label:"等级",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:"success"}},[e._v("等级 "+e._s(t.row.agency_level))])]}}])}),a("el-table-column",{attrs:{prop:"create_time",label:"创建时间"}}),a("el-table-column",{attrs:{label:"操作",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.$PowerKey(e.powerKey.AgPowerKey.FindMember)?a("el-button",{attrs:{size:"mini",type:"warning",icon:"el-icon-s-tools"},on:{click:function(a){return e.handleFindMember(t.row)}}},[e._v("查询用户")]):e._e()]}}])})],1),a("pagination",{attrs:{total:e.listTotal,pageSizes:[5,10,20],queryInfo:e.queryInfo,queryFunc:e.getAgList}})],1),a("el-dialog",{staticClass:"ag_dialog",attrs:{title:"用户列表",visible:e.agDiaLog.agInfo,"close-on-click-modal":!1},on:{"update:visible":function(t){return e.$set(e.agDiaLog,"agInfo",t)},close:e.handleCloseDialog}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:20}},[a("el-input",{attrs:{placeholder:"请输入需要查找的内容",clearable:""},on:{clear:e.getMuList},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"用户类型"},on:{change:e.getMuList},model:{value:e.mQueryInfo.member,callback:function(t){e.$set(e.mQueryInfo,"member",t)},expression:"mQueryInfo.member"}},[a("el-option",{attrs:{label:"全部",value:null}}),a("el-option",{attrs:{label:"非会员",value:0}}),a("el-option",{attrs:{label:"会员",value:1}})],1)]},proxy:!0},{key:"append",fn:function(){return[a("el-button",{attrs:{icon:"el-icon-search"},on:{click:e.getMuList}})]},proxy:!0}]),model:{value:e.mQueryInfo.search_value,callback:function(t){e.$set(e.mQueryInfo,"search_value",t)},expression:"mQueryInfo.search_value"}})],1)],1),a("div",{staticClass:"ag_body"},[a("el-table",{attrs:{data:e.muList,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"index",label:"#"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"login_account",label:"账号"}}),a("el-table-column",{attrs:{prop:"mobile_phone",label:"手机"}}),a("el-table-column",{attrs:{prop:"email",label:"邮箱"}}),a("el-table-column",{attrs:{label:"性别",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:e.commonFn.UserSex(t.row.sex).color}},[e._v(e._s(e.commonFn.UserSex(t.row.sex).name))])]}}])}),a("el-table-column",{attrs:{label:"用户类型",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:e.commonFn.UserType(t.row.member).color}},[e._v(e._s(e.commonFn.UserType(t.row.member).name))])]}}])}),1==e.postNum?a("el-table-column",{attrs:{prop:"agency_name",label:"代理人"}}):e._e(),a("el-table-column",{attrs:{prop:"last_login_time",label:"最后登陆时间"}})],1)],1),null!=e.postNum?a("pagination",{attrs:{total:e.muTotal,background:!0,pageSizes:[5,10,20],queryInfo:e.mQueryInfo,queryFunc:e.getMuList,layout:"total,sizes,prev, pager, next"}}):e._e()],1)],1)},l=[],r=(a("45fc"),a("96cf"),a("1da1")),o=a("5530"),s=a("4ec3"),u=a("2fbc"),c=a("1799"),i=a("2f62"),p=(a("6bfe"),{name:"agency",created:function(){console.log(this.$route.path),this.agBtnList=this.powerList[this.$route.path]},mounted:function(){this.getAgList()},computed:Object(o["a"])({},Object(i["c"])("menu",["powerList"])),data:function(){return{postNum:null,agBtnList:[],listTotal:null,muTotal:null,queryInfo:{agency_code:null,agency_level:null,pageParam:{page:1,pageSize:5}},agDiaLog:{agInfo:!1},mQueryInfo:{agency_id:null,member:null,search_value:null,pageParam:{page:1,pageSize:5}},agList:[],muList:[]}},methods:{$PowerKey:function(e){return this.agBtnList&&this.agBtnList.some((function(t){return t.name_en==e}))},getAgList:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["c"])(e.queryInfo);case 2:if(a=t.sent,console.log(a),1e4==a.code){t.next=6;break}return t.abrupt("return",e.$message.error(a.message));case 6:e.agList=a.value,(!e.listTotal||e.listTotal!=a.num)&&(e.listTotal=a.num);case 8:case"end":return t.stop()}}),t)})))()},getMuList:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=null,0!=e.postNum){t.next=5;break}return t.abrupt("return");case 5:if(1!=e.postNum){t.next=11;break}return t.next=8,Object(s["e"])(e.mQueryInfo);case 8:a=t.sent,t.next=15;break;case 11:if(2!=e.postNum){t.next=15;break}return t.next=14,Object(s["d"])(e.mQueryInfo);case 14:a=t.sent;case 15:if(1e4==a.code){t.next=17;break}return t.abrupt("return",e.$message.error(a.message));case 17:e.muList=a.value,(!e.muTotal||e.muTotal!=a.num)&&(e.muTotal=a.num);case 19:case"end":return t.stop()}}),t)})))()},handleCloseDialog:function(){this.muList=[],this.muTotal=null,this.postNum=null,Object.assign(this.mQueryInfo,this.$options.data().mQueryInfo)},handleFindMember:function(e){this.mQueryInfo.agency_id=e.id,this.agDiaLog.agInfo=!0,this.postNum=2,this.getMuList()},handleFindMyUser:function(){this.agDiaLog.agInfo=!0,this.postNum=1,this.getMuList()}},components:{Breadcrumb:u["a"],Pagination:c["a"]}}),m=p,g=(a("883b"),a("2877")),b=Object(g["a"])(m,n,l,!1,null,null,null);t["default"]=b.exports},b98e:function(e,t,a){}}]);
//# sourceMappingURL=chunk-3e272c52.d46a026f.js.map