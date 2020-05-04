var codeJS_css = `
/*
* 你好，我是彭尼玛
* 这是动态的简历生成项目
* 主要用 jQuery 制作
* 以动画的方式将简历动态化
* ~
*/
/* 先来个渡效果 */
*{
    transition: all 0.3s;
}

/* 少女粉框起来 */
#paper {
    background: pink;
    margin: 20px auto;
    display: flex;
}
/* 调整宽高 */
.resume_code {
    display: flex;
    flex-direction: column;
}
.resume_code pre{
    height: 100%;
}
.resume_code code {
    overflow: auto;
    display: block;
    height: 100%;
}
/* 整个边框吧~ */
.resume_code pre {
    box-sizing: border-box;
    background: #d4c9c2;
    border: 1px solid red;
    border-radius: 20px;
    padding: 20px;
}
/* 给我们简历挪挪位置~ */
.resume_code {
    width: 30vw;
}

/* 背景调调 */
#paper,body {
  background:black;
}

/*
* 好了，基本样式已生成完毕。
* 现在开始编写我们的简历~
*/
.resume_paper {
  margin-left: 30px;
  padding: 20px;
  flex:1;
  background: #d4c9c2;
  border-radius: 20px;
  border: 1px solid red;
}
.resume {
  white-space: pre-wrap;
  height: 100%;
  overflow: auto;
}
`;

var codeJS_resume = `# 范家诚
15059097882 | 1169006442@qq.com | 福建龙岩
Github: https://github.com/pengnima

## 专业技能
- 熟悉html和Html5，理解语义化,灵活使用常见标签；
- 熟悉css和css3新增属性，熟悉float、position、flex 布局，掌握选择器权重问题；
- 掌握 JavaScript 基础， ES6 语法，掌握js运行机制；
- 熟悉使用vue+vue-router+vuex进行开发，了解模块化、组件化；
- 了解HTTP协议、状态码；
- 了解各种跨域方法，如：jsonP,cors等；
- 能够使用jQuery, 可以用jQuery封装插件；
- 能够使用webpack进行项目构建、文件打包；
- 能够使用git进行代码管理;
- 了解小程序开发;

## 项目经验
### 仿蘑菇街
- 使用技术：\`vue + vuex\` + \`vue-router\` + \`axios\` + \`mongodb\` + \`storage\` + \`token\`
- 项目描述：模仿蘑菇街，实现蘑菇街女装首页、商品详情页，运用组件化开发方式，将项目拆分为多个组件，从而实现复用。利用vuex，实现不同组件的数据传输，利用vue-router进行页面跳转。数据存储于 Mongodb，利用 nodeJS 进行基本的 CURD，登录注册利用 token 验证来进行免登录操作，滑动验证码采用canvas标签实现
- 收    获：掌握了vue开发流程，充分体会了数据渲染页面的思想，以及组件化开发方式。掌握vuex实现数据共享，掌握由vue-router来控制页面的跳转。大致理解前后端交互流程。
- 项目 git：https://github.com/pengnima/supermall

### UI图标(lodingUI)
- 使用技术： \`CSS\` + \`flex + position\` + \`伪元素\`
- 项目描述：通过CSS实现多种动态的lodingUI图标
- 收    获：明白CSS的强大之处，对于复杂问题的处理思维有所改变
- 项目 git：https://github.com/pengnima/lodingIcon

### 简历生成器
- 使用技术：\`jQuery\` + \`Promise\`
- 项目描述：实现简历动态制作过程，利用Promise处理异步操作。

### 三级联动(省市区)
- 使用技术：\`jQuery\` + \`Ajax\` + \`nodejs\`
- 项目描述：初次体会前端利用 Ajax 请求后端数据，再返回的工作流程，+
- 项目 git：https://github.com/pengnima/lodingIcon 

## 工作经历
- 公司名称：福建绿色鑫房地产营销策划有限公司
- 职位名称：销售经理
- 在职时间：2015.2 ~ 2018.9
- 工作描述：前期主要负责 房屋租赁，以及精耕楼盘的熟悉，并于2015.9月获得公司 租赁达人奖项。
之后开始负责 一二手房买卖工作，并于之后获得公司合伙人称号，共享股份分红。

## 自我评价
- 有自主学习能力，曾利用下班时间空余时间学习日语，并于18年正式考取日语N2级别证书。
- 因此我觉得我可以尽快适应公司业务，与团队同事达成友好关系。

`;

let codeJS_marked = `
/* 
 * 接下来我要使用一个优秀的库 marked.js
 * 来使我的简历变成一篇 Markdown
 * (https://github.com/markedjs/marked)
 */
`;

let codeJS_cssResume = `
/* 
* 现在让我们开始修改这份简历吧~
* 
* 先来分个段~
*/
.resume {
  padding: 0 20px;
}

.resume > div {
  margin: 28px 0;
}

/* 接下来是字体等细节调整 */
.resume h2 {
  font-size: 18px;
  margin-bottom: 6px;
  padding-bottom: 6px;
  border-bottom: 1px solid black;
}
.resume h3 {
  display: inline-block;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 6px;
}

.resume li {
  font-size: 15px;
  line-height: 24px;
}

.resume ul {
  margin-left: 30px;
}

/* 调整我们的介绍栏 */
.introduce {
  white-space: pre-wrap;
  text-align: center;
}
.introduce > h1 {
  font-size: 22px;
  margin-bottom: 10px;
}
.introduce > p {
  line-height: 24px;
}`;

let codeJS_img = `
/* 接下来把我的头像放在个人信息里 */
.introduce{
    position: relative;
}
.avatar{
    display: inline-block;
    position: absolute;
    width: 140px;
    height: 150px;
    top: -15px;
    right: 10px;
}

/* 
 * 好啦，我的头像出来啦~
 * 期待这张面孔出现在您的面试中
 * 
 *   —— 彭尼玛 2020/01 *^_^*
 */
`;
