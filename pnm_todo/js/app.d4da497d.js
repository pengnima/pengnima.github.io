(function(t){function e(e){for(var n,i,c=e[0],r=e[1],l=e[2],u=0,f=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],n=!0,c=1;c<s.length;c++){var r=s[c];0!==a[r]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=s[0]))}return t}var n={},a={app:0},o=[];function i(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=n,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/pnm_todo/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=r;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var n=s("85ec"),a=s.n(n);a.a},"0a79":function(t,e,s){},"0f1c":function(t,e,s){"use strict";var n=s("2a88"),a=s.n(n);a.a},"0fda":function(t,e,s){},1428:function(t,e,s){"use strict";var n=s("5660"),a=s.n(n);a.a},"2a88":function(t,e,s){},"30d1":function(t,e,s){t.exports=s.p+"img/dark.0d539df9.jpg"},4290:function(t,e,s){"use strict";var n=s("ba42"),a=s.n(n);a.a},"42a8":function(t,e,s){"use strict";var n=s("c724"),a=s.n(n);a.a},5660:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("gradient-color"),s("home")],1)},o=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"home_navbar"},[s("nav-bar")],1),s("div",{staticClass:"home_avatar"},[s("avatar")],1),s("div",{staticClass:"home_todo_list"},[s("todo-list"),s("div",{staticClass:"toLeft",on:{click:t.prevTodo}},[s("i",{staticClass:"fa fa-arrow-left"})]),s("div",{staticClass:"toRight",on:{click:t.nextTodo}},[s("i",{staticClass:"fa fa-arrow-right"})])],1),s("todo-detail",{attrs:{isShow:t.isShow}}),s("todo-editing",{ref:"todo_edit"}),s("floating-button",{on:{editClick:t.editClick}})],1)},c=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:{navbar:!0,isblack:t.isBlack}},[s("div",{staticClass:"left",on:{click:t.leftClick}},[s("i",{class:["fa","fa-"+t.left_icon]})]),s("div",{staticClass:"center"},[s("span",[t._v(t._s(t.title))])]),s("div",{staticClass:"right"},[s("i",{class:["fa","fa-"+t.right_icon]})])])},l=[],d={props:{title:{type:String,default:"TODO"},left_icon:{type:String,default:""},right_icon:{type:String,default:""},isBlack:{type:Boolean,default:!1}},data(){return{}},methods:{leftClick(){this.$emit("leftClick")}}},u=d,f=(s("1428"),s("2877")),p=Object(f["a"])(u,r,l,!1,null,"08009dbd",null),h=p.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"avatar"},[t._m(0),s("div",{staticClass:"content"},[s("h2",[t._v("你好，"+t._s(t.todos[0].tasks[0].content))]),s("p",[t._v("今天天气不错")]),s("p",[t._v("您有 "+t._s(t.totalTask)+" 个任务需要完成")])]),s("div",{staticClass:"date"},[t._v("日期："+t._s(t._f("dateFormat")(new Date)))])])},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"head"},[n("img",{attrs:{src:s("30d1"),alt:""}})])}],_=s("2f62"),m={computed:{...Object(_["c"])(["todos"]),totalTask(){let t=this.todos.reduce((t,e)=>t+e.tasks.filter(t=>!t.isDone&&!t.deleted).length,0);return t}},filters:{dateFormat(t){return t.toLocaleDateString()}}},g=m,C=(s("f527"),Object(f["a"])(g,v,k,!1,null,"5f01caa8",null)),b=C.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"todo_list",style:{width:100*t.todos.length+"%"}},t._l(t.todos,(function(e){return s("div",{key:e.name,staticClass:"list__todo",style:{transform:"translate3d(-"+100*t.currentIndex+"%,0,0)"},on:{click:function(s){return t.todoClick(e)}}},[s("todo",{attrs:{todo:e}})],1)})),0)},y=[],T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"todo",class:{todo__no__selected:null==t.selectedTodo}},[s("div",{staticClass:"profile"},[s("div",{staticClass:"icon"},[s("i",{class:["fa","fa-"+t.todo.icon],style:{color:""+t.todo.colors[0]}})]),s("p",[t._v(t._s(t.totalCount)+" 条任务")]),s("h1",[t._v(t._s(t.todo.name))]),s("div",{staticClass:"progress"},[s("span",{staticClass:"progress_line",style:{width:""+t.progress,backgroundColor:""+t.todo.colors[0]}})]),s("span",{staticStyle:{"font-size":"12px"}},[t._v(t._s(t.progress))])]),null!=t.selectedTodo?s("div",{staticClass:"tasks"},[s("div",{staticClass:"today"},[s("p",{staticStyle:{"letter-spacing":"15px"}},[t._v("今天")]),t._l(t.todayTasks,(function(t){return s("task",{key:t.id,attrs:{task:t}})}))],2),s("div",{staticClass:"tomorrow"},[s("p",{staticStyle:{"letter-spacing":"15px"}},[t._v("明天")]),t._l(t.tomorrowTasks,(function(t){return s("task",{key:t.id,attrs:{task:t}})}))],2)]):t._e()])},x=[],O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return null==t.task||t.task.deleted?t._e():s("div",{staticClass:"task"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.task.isDone,expression:"task.isDone"}],attrs:{id:t.id,type:"checkbox"},domProps:{checked:Array.isArray(t.task.isDone)?t._i(t.task.isDone,null)>-1:t.task.isDone},on:{change:function(e){var s=t.task.isDone,n=e.target,a=!!n.checked;if(Array.isArray(s)){var o=null,i=t._i(s,o);n.checked?i<0&&t.$set(t.task,"isDone",s.concat([o])):i>-1&&t.$set(t.task,"isDone",s.slice(0,i).concat(s.slice(i+1)))}else t.$set(t.task,"isDone",a)}}}),s("label",{attrs:{for:t.id}},[t._v(t._s(t.task.content))]),s("transition",{attrs:{name:"delete_fade"}},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.task.isDone,expression:"task.isDone"}],staticClass:"task_delete",on:{click:function(e){return t.deleteClick(t.task)}}},[s("i",{staticClass:"fa fa-trash"})])])],1)},j=[];let D=0;var S={props:{task:{type:Object,default:null}},data(){return{id:`task_${++D}`}},methods:{...Object(_["b"])(["deleteTask"]),deleteClick(t){this.deleteTask(t)}}},E=S,$=(s("8c44"),Object(f["a"])(E,O,j,!1,null,null,null)),I=$.exports;const B=new Date,P=(new Date(B.getFullYear(),B.getMonth(),B.getDate(),0,0,0),new Date(B.getFullYear(),B.getMonth(),B.getDate()+1,0,0,0));var X={props:{todo:{type:Object,default:null}},data(){return{tomorrow:P}},computed:{...Object(_["c"])(["selectedTodo"]),todayTasks(){return this.todo.tasks.filter(t=>t.date<P)},tomorrowTasks(){return this.todo.tasks.filter(t=>t.date>P)},totalCount(){return this.todo.tasks.filter(t=>0==t.deleted).length},progress(){let t=this.todo.tasks.filter(t=>1==t.isDone&&0==t.deleted).length;return 0==this.totalCount?"0%":Math.floor(t/this.totalCount*100)+"%"}},components:{Task:I}},M=X,L=(s("84a1"),Object(f["a"])(M,T,x,!1,null,"50fda2a3",null)),N=L.exports,A={mounted(){let t={};this.$el.addEventListener("touchstart",e=>{t.startX=e.touches[0].clientX,t.endX=0}),this.$el.addEventListener("touchmove",e=>{t.endX=e.touches[0].clientX}),this.$el.addEventListener("touchend",()=>{!t.endX||Math.abs(t.endX-t.startX)<10||(t.endX<t.startX?this.nextTodo():this.prevTodo())})},computed:{...Object(_["c"])(["todos","currentIndex"])},components:{Todo:N},methods:{...Object(_["b"])(["nextTodo","prevTodo","changeSelected"]),todoClick(t){this.changeSelected(t),this.$parent.showChange()}}},V=A,F=(s("76e1"),Object(f["a"])(V,w,y,!1,null,null,null)),J=F.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade"}},[t.isShow?s("div",{staticClass:"todo_detail"},[s("nav-bar",{attrs:{left_icon:"chevron-left",title:" ",isBlack:!0},on:{leftClick:t.cancleClick}}),s("todo",{attrs:{todo:t.selectedTodo}})],1):t._e()])},Y=[],z={props:{isShow:{type:Boolean,default:!1}},computed:{...Object(_["c"])(["selectedTodo"])},components:{NavBar:h,Todo:N},methods:{...Object(_["b"])(["changeSelected"]),cancleClick(){this.changeSelected(null),this.$parent.showChange()}}},G=z,R=(s("c445"),Object(f["a"])(G,H,Y,!1,null,null,null)),q=R.exports,K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"edit_up"}},[t.isEditing?s("div",{staticClass:"todo_editing"},[s("nav-bar",{attrs:{title:"新建任务",left_icon:"times",isBlack:!0},on:{leftClick:t.timesClick}}),s("div",{staticClass:"edit_content"},[s("div",{staticClass:"content_tips"},[s("p",[t._v("简单输入您的计划？(16字内)")])]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.taskContent,expression:"taskContent"}],attrs:{maxlength:"16"},domProps:{value:t.taskContent},on:{input:function(e){e.target.composing||(t.taskContent=e.target.value)}}}),s("div",{staticClass:"choose_date"},[s("i",{staticClass:"fa fa-calendar"}),s("div",{staticClass:"sel_wrap"},[s("input",{staticClass:"selector",attrs:{type:"text",disabled:""},domProps:{value:t.selectValue}}),s("div",{staticClass:"options",on:{click:t.optClick}},[s("div",{staticClass:"mask"},[s("a",{attrs:{href:"javascript:;"}},[t._v("今天")]),s("a",{attrs:{href:"javascript:;"}},[t._v("明天")])])])])])])],1):t._e()])},Q=[],U={computed:{...Object(_["c"])(["isEditing"])},data(){return{taskContent:"",selectValue:"今天"}},components:{NavBar:h},methods:{...Object(_["b"])(["changeEdit","increaseTask"]),timesClick(){this.taskContent="",this.selectValue="今天",this.changeEdit(!1)},optClick(t){this.selectValue=t.target.innerText},addTask(){let t={date:this.selectValue,content:this.taskContent};this.increaseTask(t),this.timesClick()}}},W=U,Z=(s("42a8"),Object(f["a"])(W,K,Q,!1,null,null,null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return null!=t.selectedTodo?s("transition",{attrs:{name:"button_up"}},[s("button",{staticClass:"floating_button",class:{edit__button:t.isEditing},on:{click:t.buttonClick}})]):t._e()},st=[],nt={computed:{...Object(_["c"])(["selectedTodo","isEditing"])},data(){return{}},methods:{...Object(_["b"])(["changeEdit"]),buttonClick(){this.isEditing?this.$emit("editClick"):this.changeEdit(!0)}}},at=nt,ot=(s("0f1c"),Object(f["a"])(at,et,st,!1,null,null,null)),it=ot.exports,ct=(s("3c43"),{components:{NavBar:h,Avatar:b,TodoList:J,TodoDetail:q,TodoEditing:tt,FloatingButton:it},computed:{...Object(_["c"])(["todos","currentIndex"])},data(){return{isShow:!1}},methods:{...Object(_["b"])(["changeSelected","prevTodo","nextTodo"]),showChange(){this.isShow=!this.isShow},editClick(){this.$refs.todo_edit.addTask()}}}),rt=ct,lt=(s("84fc"),Object(f["a"])(rt,i,c,!1,null,"f34088fc",null)),dt=lt.exports,ut=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"gradient"},t._l(t.todos,(function(e,n){return s("div",{key:e.name,staticClass:"gradient_color",class:{color_active:n==t.currentIndex},style:{backgroundImage:t.backColor(n)}})})),0)},ft=[],pt={computed:{...Object(_["c"])(["todos","currentIndex"])},methods:{backColor(t){return`linear-gradient(45deg,${this.todos[t].colors[0]}, ${this.todos[t].colors[1]})`}}},ht=pt,vt=(s("4290"),Object(f["a"])(ht,ut,ft,!1,null,null,null)),kt=vt.exports,_t={name:"App",components:{Home:dt,GradientColor:kt}},mt=_t,gt=(s("034f"),Object(f["a"])(mt,a,o,!1,null,null,null)),Ct=gt.exports;n["a"].use(_["a"]);const bt=new _["a"].Store({state:{todos:[{icon:"user",name:"用户",tasks:[{id:1,content:"pengnima",date:new Date,isDone:!1,deleted:!1}],colors:["#ff6262","#ffa947"]},{icon:"tasks",name:"任务",tasks:[{id:3,content:"学习CSS，HTML",date:new Date,isDone:!0,deleted:!1},{id:4,content:"学习JS",date:new Date,isDone:!1,deleted:!1},{id:5,content:"学习Node",date:new Date,isDone:!1,deleted:!1},{id:6,content:"学习Vue",date:new Date(Date.now()+864e5),isDone:!1,deleted:!1}],colors:["#5b9df9","#47bfcf"]},{icon:"home",name:"家",tasks:[{id:2,content:"my house",date:new Date,isDone:!1,deleted:!1}],colors:["#2c7d59","#3ba776"]}],selectedTodo:null,currentIndex:1,isEditing:!1,gid:7},mutations:{changeSelected(t,e){t.selectedTodo=e},changeEdit(t,e){t.isEditing=e},deleteTask(t,e){e.deleted=!0},increaseTask(t,e){let s={id:t.gid++,content:e.content,date:"明天"==e.date?new Date(Date.now()+864e5):new Date,isDone:!1,deleted:!1};t.selectedTodo.tasks.push(s)},prevTodo(t){t.currentIndex>0&&t.currentIndex--},nextTodo(t){t.currentIndex<2&&t.currentIndex++}}});var wt=bt;n["a"].config.productionTip=!1,new n["a"]({store:wt,render:function(t){return t(Ct)}}).$mount("#app")},"76e1":function(t,e,s){"use strict";var n=s("f5f4"),a=s.n(n);a.a},"7ce0":function(t,e,s){},"84a1":function(t,e,s){"use strict";var n=s("a9d6"),a=s.n(n);a.a},"84fc":function(t,e,s){"use strict";var n=s("7ce0"),a=s.n(n);a.a},"85ec":function(t,e,s){},"8c44":function(t,e,s){"use strict";var n=s("ccf8"),a=s.n(n);a.a},a9d6:function(t,e,s){},ba42:function(t,e,s){},c445:function(t,e,s){"use strict";var n=s("0a79"),a=s.n(n);a.a},c724:function(t,e,s){},ccf8:function(t,e,s){},f527:function(t,e,s){"use strict";var n=s("0fda"),a=s.n(n);a.a},f5f4:function(t,e,s){}});
//# sourceMappingURL=app.d4da497d.js.map