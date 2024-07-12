/*! For license information please see 74c50df0.00ba409c.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95908],{750014:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>j,frontMatter:()=>l,metadata:()=>i,toc:()=>h});var r=s(474848),t=s(28453);const l={id:"WebFormClass",title:"WebForm"},d=void 0,i={id:"API/WebFormClass",title:"WebForm",description:"WebForm \u30af\u30e9\u30b9\u306b\u306f\u3001Qodly \u306e Web\u30d5\u30a9\u30fc\u30e0\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8 (Web\u30d5\u30a9\u30fc\u30e0\u306e\u69cb\u6210\u8981\u7d20) \u3092\u51e6\u7406\u3059\u308b\u305f\u3081\u306e\u95a2\u6570\u3068\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002 \u3053\u306e\u30af\u30e9\u30b9\u306b\u3064\u3044\u3066\u306f\u3001Qodly \u30c9\u30ad\u30e5\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3 (\u82f1\u8a9e) \u3067\u8a73\u3057\u304f\u8aac\u660e\u3055\u308c\u3066\u3044\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R5/API/WebFormClass.md",sourceDirName:"API",slug:"/API/WebFormClass",permalink:"/docs/ja/20-R5/API/WebFormClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FWebFormClass.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"WebFormClass",title:"WebForm"},sidebar:"docs",previous:{title:"SystemWorker",permalink:"/docs/ja/20-R5/API/SystemWorkerClass"},next:{title:"WebFormItem",permalink:"/docs/ja/20-R5/API/WebFormItemClass"}},c={},h=[{value:"\u30b3\u30de\u30f3\u30c9\u3068\u95a2\u6570",id:"\u30b3\u30de\u30f3\u30c9\u3068\u95a2\u6570",level:3},{value:"<em>.componentName</em>",id:"componentname",level:3},{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:".disableState()",id:"disablestate",level:3},{value:"\u8aac\u660e",id:"\u8aac\u660e-1",level:4},{value:".enableState()",id:"enablestate",level:3},{value:"\u8aac\u660e",id:"\u8aac\u660e-2",level:4},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:4},{value:".setError()",id:"seterror",level:3},{value:"\u8aac\u660e",id:"\u8aac\u660e-3",level:4},{value:".setMessage()",id:"setmessage",level:3},{value:"\u8aac\u660e",id:"\u8aac\u660e-4",level:4},{value:".setWarning()",id:"setwarning",level:3},{value:"\u8aac\u660e",id:"\u8aac\u660e-5",level:4},{value:"Web Form",id:"web-form",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-6",level:4},{value:"Web Event",id:"web-event",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-7",level:4}];function x(e){const n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"WebForm"})," \u30af\u30e9\u30b9\u306b\u306f\u3001Qodly \u306e Web\u30d5\u30a9\u30fc\u30e0\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8 (Web\u30d5\u30a9\u30fc\u30e0\u306e\u69cb\u6210\u8981\u7d20) \u3092\u51e6\u7406\u3059\u308b\u305f\u3081\u306e\u95a2\u6570\u3068\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002 \u3053\u306e\u30af\u30e9\u30b9\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.jsx)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass",children:"Qodly \u30c9\u30ad\u30e5\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3"})," (\u82f1\u8a9e) \u3067\u8a73\u3057\u304f\u8aac\u660e\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"\u5c65\u6b74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u30ea\u30ea\u30fc\u30b9"}),(0,r.jsx)(n.th,{children:"\u5185\u5bb9"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20 R6"}),(0,r.jsx)(n.td,{children:"enableState() \u3068 disableState() \u3092\u8ffd\u52a0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20 R2"}),(0,r.jsx)(n.td,{children:"\u8ffd\u52a0"})]})]})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u30b3\u30de\u30f3\u30c9\u3068\u95a2\u6570",children:"\u30b3\u30de\u30f3\u30c9\u3068\u95a2\u6570"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:["[",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:".componentName"})})," : ",(0,r.jsx)(n.a,{href:"/docs/ja/20-R5/API/WebFormItemClass",children:"4D.WebFormItem"}),"](#componentname)",(0,r.jsx)(n.br,{}),"\u30d7\u30ed\u30d1\u30c6\u30a3\u3068\u3057\u3066\u76f4\u63a5\u5229\u7528\u53ef\u80fd\u306a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3059"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#disablestate",children:[(0,r.jsx)(n.strong,{children:".disableState"}),"( ",(0,r.jsx)(n.em,{children:"state"})," : string)"]}),(0,r.jsx)(n.br,{}),"\u30ab\u30ec\u30f3\u30c8Web"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:["\u30d5\u30a9\u30fc\u30e0\u4e0a\u306e ",(0,r.jsx)(n.em,{children:"state"})," \u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u7121\u52b9\u5316\u3057\u307e\u3059"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#enablestate",children:[(0,r.jsx)(n.strong,{children:".enableState"}),"( ",(0,r.jsx)(n.em,{children:"state"})," : string )"]}),(0,r.jsx)(n.br,{}),"\u30ab\u30ec\u30f3\u30c8Web"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:["\u30d5\u30a9\u30fc\u30e0\u4e0a\u306e ",(0,r.jsx)(n.em,{children:"state"})," \u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u6709\u52b9\u5316\u3057\u307e\u3059"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#seterror",children:[(0,r.jsx)(n.strong,{children:".setError"}),"( ",(0,r.jsx)(n.em,{children:"msg"})," : string)"]}),(0,r.jsx)(n.br,{}),(0,r.jsx)(n.em,{children:"msg"})," \u3092\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u3068\u3057\u3066 Web\u30d5\u30a9\u30fc\u30e0\u306b\u9001\u4fe1\u3057\u307e\u3059"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#setmessage",children:[(0,r.jsx)(n.strong,{children:".setMessage"}),"( ",(0,r.jsx)(n.em,{children:"msg"})," : string)"]}),(0,r.jsx)(n.br,{}),(0,r.jsx)(n.em,{children:"msg"})," \u3092\u60c5\u5831\u30e1\u30c3\u30bb\u30fc\u30b8\u3068\u3057\u3066 Web\u30d5\u30a9\u30fc\u30e0\u306b\u9001\u4fe1\u3057\u307e\u3059"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#setwarning",children:[(0,r.jsx)(n.strong,{children:".setWarning"}),"( ",(0,r.jsx)(n.em,{children:"msg"})," : string)"]}),(0,r.jsx)(n.br,{}),(0,r.jsx)(n.em,{children:"msg"})," \u3092\u8b66\u544a\u30e1\u30c3\u30bb\u30fc\u30b8\u3068\u3057\u3066 Web\u30d5\u30a9\u30fc\u30e0\u306b\u9001\u4fe1\u3057\u307e\u3059"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#web-form",children:[(0,r.jsx)(n.strong,{children:"Web Form"})," : 4D.WebForm"]}),(0,r.jsx)(n.br,{}),"Web\u30d5\u30a9\u30fc\u30e0\u3068\u306e\u5bfe\u8a71\u3092\u53ef\u80fd\u306b\u3059\u308b ",(0,r.jsx)(n.code,{children:"4D.WebForm"})," \u30d7\u30ed\u30ad\u30b7\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3057\u307e\u3059"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#web-event",children:[(0,r.jsx)(n.strong,{children:"Web Event"})," : object"]}),(0,r.jsx)(n.br,{}),"Web\u30d5\u30a9\u30fc\u30e0\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u30ea\u30f3\u30af\u3057\u3066\u767a\u751f\u3057\u305f\u30a4\u30d9\u30f3\u30c8\u306e\u60c5\u5831\u3092\u6301\u3064\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3057\u307e\u3059"]})})]})]}),"\n",(0,r.jsx)(n.h3,{id:"componentname",children:(0,r.jsx)(n.em,{children:".componentName"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:".componentName"})})," : ",(0,r.jsx)(n.a,{href:"/docs/ja/20-R5/API/WebFormItemClass",children:"4D.WebFormItem"})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,r.jsx)(n.p,{children:"Web\u30d5\u30a9\u30fc\u30e0\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8 (\u69cb\u6210\u8981\u7d20) \u3068\u306f\u3001\u3053\u308c\u3089\u306e Web\u30d5\u30a9\u30fc\u30e0\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3068\u3057\u3066\u76f4\u63a5\u5229\u7528\u53ef\u80fd\u306a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.jsxs)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass#componentname",children:["Qodly \u30c9\u30ad\u30e5\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3\u306e ",(0,r.jsx)(n.code,{children:".componentName"})," \u306e\u8aac\u660e"]})," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"disablestate",children:".disableState()"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".disableState"}),"( ",(0,r.jsx)(n.em,{children:"state"})," : string)"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5f15\u6570"}),(0,r.jsx)(n.th,{children:"\u30bf\u30a4\u30d7"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"state"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Web\u30d5\u30a9\u30fc\u30e0\u4e0a\u3067\u7121\u52b9\u5316\u3059\u308b state \u306e\u540d\u79f0"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8aac\u660e-1",children:"\u8aac\u660e"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:".disableState()"})," \u95a2\u6570\u306f\u3001\u30ab\u30ec\u30f3\u30c8Web\n\u30d5\u30a9\u30fc\u30e0\u4e0a\u306e ",(0,r.jsx)(n.em,{children:"state"})," \u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u7121\u52b9\u5316\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306e\u95a2\u6570\u306f\u3001\u4ee5\u4e0b\u306e\u5834\u5408\u306b\u306f\u4f55\u3082\u3057\u307e\u305b\u3093:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Web\u30d5\u30a9\u30fc\u30e0\u4e0a\u3067 ",(0,r.jsx)(n.em,{children:"state"})," \u304c\u73fe\u5728\u6709\u52b9\u3067\u306f\u306a\u3044\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["Web\u30d5\u30a9\u30fc\u30e0\u4e0a\u3067 ",(0,r.jsx)(n.em,{children:"state"})," \u304c\u5b58\u5728\u3057\u306a\u3044\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u540c\u3058\u30e6\u30fc\u30b6\u30fc\u95a2\u6570\u5185\u3067\u8907\u6570\u306e state \u3092 ",(0,r.jsx)(n.a,{href:"#enablestate",children:"\u6709\u52b9\u5316"})," \u307e\u305f\u306f\u7121\u52b9\u5316\u3057\u305f\u5834\u5408\u3001\u3059\u3079\u3066\u306e\u5909\u66f4\u306f\u95a2\u6570\u306e\u7d42\u4e86\u6642\u306b\u4e00\u62ec\u3057\u3066\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u9001\u4fe1\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["Web\u30d5\u30a9\u30fc\u30e0\u306e state \u306b\u95a2\u3059\u308b\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.jsx)(n.a,{href:"https://developer.qodly.com/docs/studio/design-webforms/states",children:"developer.qodly.com"})," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"enablestate",children:".enableState()"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".enableState"}),"( ",(0,r.jsx)(n.em,{children:"state"})," : string )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5f15\u6570"}),(0,r.jsx)(n.th,{children:"\u30bf\u30a4\u30d7"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"state"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Web\u30d5\u30a9\u30fc\u30e0\u4e0a\u3067\u6709\u52b9\u5316\u3059\u308b state \u306e\u540d\u79f0"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8aac\u660e-2",children:"\u8aac\u660e"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:".enableState()"})," \u95a2\u6570\u306f\u3001\u30ab\u30ec\u30f3\u30c8Web\n\u30d5\u30a9\u30fc\u30e0\u4e0a\u306e ",(0,r.jsx)(n.em,{children:"state"})," \u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u6709\u52b9\u5316\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306e\u95a2\u6570\u306f\u3001\u4ee5\u4e0b\u306e\u5834\u5408\u306b\u306f\u4f55\u3082\u3057\u307e\u305b\u3093:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Web\u30d5\u30a9\u30fc\u30e0\u4e0a\u3067 ",(0,r.jsx)(n.em,{children:"state"})," \u304c\u3059\u3067\u306b\u6709\u52b9\u3067\u3042\u308b\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["Web\u30d5\u30a9\u30fc\u30e0\u4e0a\u3067 ",(0,r.jsx)(n.em,{children:"state"})," \u304c\u5b58\u5728\u3057\u306a\u3044\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u540c\u3058\u30e6\u30fc\u30b6\u30fc\u95a2\u6570\u5185\u3067\u8907\u6570\u306e state \u3092\u6709\u52b9\u5316\u307e\u305f\u306f ",(0,r.jsx)(n.a,{href:"#disablestate",children:"\u7121\u52b9\u5316"}),"\u3057\u305f\u5834\u5408\u3001\u3059\u3079\u3066\u306e\u5909\u66f4\u306f\u95a2\u6570\u306e\u7d42\u4e86\u6642\u306b\u4e00\u62ec\u3057\u3066\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u9001\u4fe1\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["Web\u30d5\u30a9\u30fc\u30e0\u306e state \u306b\u95a2\u3059\u308b\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.jsx)(n.a,{href:"https://developer.qodly.com/docs/studio/design-webforms/states",children:"developer.qodly.com"})," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,r.jsx)(n.p,{children:'\u30ed\u30b0\u30a4\u30f3\u30da\u30fc\u30b8\u3067\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u306b\u3001"wrongCredentials" \u3068\u3044\u3046\u5c02\u7528\u306e state \u3092\u6709\u52b9\u306b\u3057\u307e\u3059\u3002'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'Function authenticationError()\n\tIf (Session.info.type#"remote")\n\t\tWeb Form.enableState("wrongCredentials")\n\tEnd if\n'})}),"\n",(0,r.jsx)(n.h3,{id:"seterror",children:".setError()"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".setError"}),"( ",(0,r.jsx)(n.em,{children:"msg"})," : string)"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5f15\u6570"}),(0,r.jsx)(n.th,{children:"\u30bf\u30a4\u30d7"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"msg"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Web\u30d5\u30a9\u30fc\u30e0\u306b\u8868\u793a\u3059\u308b\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8aac\u660e-3",children:"\u8aac\u660e"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:".setError()"})," \u95a2\u6570\u306f\u3001",(0,r.jsx)(n.em,{children:"msg"})," \u3092\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u3068\u3057\u3066 Web\u30d5\u30a9\u30fc\u30e0\u306b\u9001\u4fe1\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.jsxs)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass#seterror",children:["Qodly \u30c9\u30ad\u30e5\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3\u306e ",(0,r.jsx)(n.code,{children:".setError()"})," \u306e\u8aac\u660e"]})," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"setmessage",children:".setMessage()"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".setMessage"}),"( ",(0,r.jsx)(n.em,{children:"msg"})," : string)"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5f15\u6570"}),(0,r.jsx)(n.th,{children:"\u30bf\u30a4\u30d7"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"msg"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Web\u30d5\u30a9\u30fc\u30e0\u306b\u8868\u793a\u3059\u308b\u60c5\u5831\u30e1\u30c3\u30bb\u30fc\u30b8"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8aac\u660e-4",children:"\u8aac\u660e"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:".setMessage()"})," \u95a2\u6570\u306f\u3001",(0,r.jsx)(n.em,{children:"msg"})," \u3092\u60c5\u5831\u30e1\u30c3\u30bb\u30fc\u30b8\u3068\u3057\u3066 Web\u30d5\u30a9\u30fc\u30e0\u306b\u9001\u4fe1\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.jsxs)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass#setmessage",children:["Qodly \u30c9\u30ad\u30e5\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3\u306e ",(0,r.jsx)(n.code,{children:".setMessage()"})," \u306e\u8aac\u660e"]})," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"setwarning",children:".setWarning()"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".setWarning"}),"( ",(0,r.jsx)(n.em,{children:"msg"})," : string)"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5f15\u6570"}),(0,r.jsx)(n.th,{children:"\u30bf\u30a4\u30d7"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"msg"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Web\u30d5\u30a9\u30fc\u30e0\u306b\u8868\u793a\u3059\u308b\u8b66\u544a\u30e1\u30c3\u30bb\u30fc\u30b8"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8aac\u660e-5",children:"\u8aac\u660e"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:".setWarning()"})," \u95a2\u6570\u306f\u3001",(0,r.jsx)(n.em,{children:"msg"})," \u3092\u8b66\u544a\u30e1\u30c3\u30bb\u30fc\u30b8\u3068\u3057\u3066 Web\u30d5\u30a9\u30fc\u30e0\u306b\u9001\u4fe1\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.jsxs)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass#setwarning",children:["Qodly \u30c9\u30ad\u30e5\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3\u306e ",(0,r.jsx)(n.code,{children:".setWarning()"})," \u306e\u8aac\u660e"]})," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"web-form",children:"Web Form"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Web Form"})," : 4D.WebForm"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5f15\u6570"}),(0,r.jsx)(n.th,{children:"\u30bf\u30a4\u30d7"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u623b\u308a\u5024"}),(0,r.jsx)(n.td,{children:"4D.WebForm"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsxs)(n.td,{children:["\u65b0\u3057\u3044 ",(0,r.jsx)(n.code,{children:"WebForm"})," \u30d7\u30ed\u30ad\u30b7\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"]})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8aac\u660e-6",children:"\u8aac\u660e"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Web Form"})," \u30b3\u30de\u30f3\u30c9\u306f\u3001Web\u30d5\u30a9\u30fc\u30e0\u3068\u306e\u5bfe\u8a71\u3092\u53ef\u80fd\u306b\u3059\u308b ",(0,r.jsx)(n.code,{children:"4D.WebForm"})," \u30d7\u30ed\u30ad\u30b7\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.jsxs)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass#webform",children:["Qodly \u30c9\u30ad\u30e5\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3\u306e ",(0,r.jsx)(n.code,{children:"webForm"})," \u30b3\u30de\u30f3\u30c9\u306e\u8aac\u660e"]})," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"web-event",children:"Web Event"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Web Event"})," : object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5f15\u6570"}),(0,r.jsx)(n.th,{children:"\u30bf\u30a4\u30d7"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u623b\u308a\u5024"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsx)(n.td,{children:"object"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8aac\u660e-7",children:"\u8aac\u660e"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Web Event"})," \u30b3\u30de\u30f3\u30c9\u306f\u3001Web\u30d5\u30a9\u30fc\u30e0\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u30ea\u30f3\u30af\u3057\u3066\u767a\u751f\u3057\u305f\u30a4\u30d9\u30f3\u30c8\u306e\u60c5\u5831\u3092\u6301\u3064\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.jsxs)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass#webevent",children:["Qodly \u30c9\u30ad\u30e5\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3\u306e ",(0,r.jsx)(n.code,{children:"webEvent"})," \u30b3\u30de\u30f3\u30c9\u306e\u8aac\u660e"]})," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"]})]})}function j(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},221020:(e,n,s)=>{var r=s(296540),t=Symbol.for("react.element"),l=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(e,n,s){var r,l={},h=null,x=null;for(r in void 0!==s&&(h=""+s),void 0!==n.key&&(h=""+n.key),void 0!==n.ref&&(x=n.ref),n)d.call(n,r)&&!c.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===l[r]&&(l[r]=n[r]);return{$$typeof:t,type:e,key:h,ref:x,props:l,_owner:i.current}}n.Fragment=l,n.jsx=h,n.jsxs=h},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>i});var r=s(296540);const t={},l=r.createContext(t);function d(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);