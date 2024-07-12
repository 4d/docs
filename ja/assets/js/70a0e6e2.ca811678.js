/*! For license information please see 70a0e6e2.ca811678.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[85721],{533440:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>h,contentTitle:()=>d,default:()=>j,frontMatter:()=>r,metadata:()=>c,toc:()=>t});var i=s(474848),l=s(28453);const r={id:"SignalClass",title:"Signal"},d=void 0,c={id:"API/SignalClass",title:"Signal",description:"\u30b7\u30b0\u30ca\u30eb\u306f\u3001\u30de\u30eb\u30c1\u30d7\u30ed\u30bb\u30b9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u304a\u3044\u3066\u30d7\u30ed\u30bb\u30b9\u9593\u3067\u306e\u3084\u308a\u53d6\u308a\u3092\u7ba1\u7406\u3057\u885d\u7a81\u3092\u907f\u3051\u308b\u305f\u3081\u306b 4D\u30e9\u30f3\u30b2\u30fc\u30b8\u304c\u63d0\u4f9b\u3059\u308b\u30c4\u30fc\u30eb\u3067\u3059\u3002 \u30b7\u30b0\u30ca\u30eb\u306f\u30011\u3064\u4ee5\u4e0a\u306e\u30d7\u30ed\u30bb\u30b9\u304c\u5b9f\u884c\u3092\u4e00\u6642\u505c\u6b62\u3057\u3001\u7279\u5b9a\u306e\u30bf\u30b9\u30af\u304c\u5b8c\u4e86\u3059\u308b\u307e\u3067\u5f85\u3064\u3088\u3046\u306b\u3059\u308b\u4ed5\u7d44\u307f\u3067\u3059\u3002 \u3069\u306e\u30d7\u30ed\u30bb\u30b9\u3082\u30b7\u30b0\u30ca\u30eb\u3092\u5f85\u6a5f\u307e\u305f\u306f\u30ea\u30ea\u30fc\u30b9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20/API/SignalClass.md",sourceDirName:"API",slug:"/API/SignalClass",permalink:"/docs/ja/20/API/SignalClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FSignalClass.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"SignalClass",title:"Signal"},sidebar:"docs",previous:{title:"Session",permalink:"/docs/ja/20/API/SessionClass"},next:{title:"SMTPTransporter",permalink:"/docs/ja/20/API/SMTPTransporterClass"}},h={},t=[{value:"Signal \u30aa\u30d6\u30b8\u30a7\u30af\u30c8",id:"signal-\u30aa\u30d6\u30b8\u30a7\u30af\u30c8",level:3},{value:"\u30b7\u30b0\u30ca\u30eb\u306e\u4f7f\u3044\u65b9",id:"\u30b7\u30b0\u30ca\u30eb\u306e\u4f7f\u3044\u65b9",level:3},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:3},{value:"\u6982\u8981",id:"\u6982\u8981",level:3},{value:"New signal",id:"new-signal",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u4f8b\u984c",id:"\u4f8b\u984c-1",level:4},{value:".description",id:"description",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-1",level:4},{value:".signaled",id:"signaled",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-2",level:4},{value:".trigger()",id:"trigger",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-3",level:4},{value:".wait()",id:"wait",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-4",level:4}];function x(n){const e={a:"a",blockquote:"blockquote",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"\u30b7\u30b0\u30ca\u30eb\u306f\u3001\u30de\u30eb\u30c1\u30d7\u30ed\u30bb\u30b9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u304a\u3044\u3066\u30d7\u30ed\u30bb\u30b9\u9593\u3067\u306e\u3084\u308a\u53d6\u308a\u3092\u7ba1\u7406\u3057\u885d\u7a81\u3092\u907f\u3051\u308b\u305f\u3081\u306b 4D\u30e9\u30f3\u30b2\u30fc\u30b8\u304c\u63d0\u4f9b\u3059\u308b\u30c4\u30fc\u30eb\u3067\u3059\u3002 \u30b7\u30b0\u30ca\u30eb\u306f\u30011\u3064\u4ee5\u4e0a\u306e\u30d7\u30ed\u30bb\u30b9\u304c\u5b9f\u884c\u3092\u4e00\u6642\u505c\u6b62\u3057\u3001\u7279\u5b9a\u306e\u30bf\u30b9\u30af\u304c\u5b8c\u4e86\u3059\u308b\u307e\u3067\u5f85\u3064\u3088\u3046\u306b\u3059\u308b\u4ed5\u7d44\u307f\u3067\u3059\u3002 \u3069\u306e\u30d7\u30ed\u30bb\u30b9\u3082\u30b7\u30b0\u30ca\u30eb\u3092\u5f85\u6a5f\u307e\u305f\u306f\u30ea\u30ea\u30fc\u30b9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u30d7\u30ed\u30bb\u30b9\u9593\u306e\u3084\u308a\u53d6\u308a\u3092\u7ba1\u7406\u3059\u308b\u306b\u306f\u3001\u30bb\u30de\u30d5\u30a9\u30fc\u3082\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u30bb\u30de\u30d5\u30a9\u30fc\u306f\u30012\u3064\u4ee5\u4e0a\u306e\u30d7\u30ed\u30bb\u30b9\u304c\u540c\u3058\u30ea\u30bd\u30fc\u30b9 (\u30d5\u30a1\u30a4\u30eb\u3001\u30ec\u30b3\u30fc\u30c9\u306a\u3069) \u3092\u540c\u6642\u306b\u5909\u66f4\u3057\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u305f\u3081\u306e\u4ed5\u7d44\u307f\u3067\u3059\u3002 \u30bb\u30de\u30d5\u30a9\u30fc\u3092\u89e3\u9664\u3067\u304d\u308b\u306e\u306f\u3001\u305d\u308c\u3092\u8a2d\u5b9a\u3057\u305f\u30d7\u30ed\u30bb\u30b9\u306e\u307f\u3067\u3059\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"signal-\u30aa\u30d6\u30b8\u30a7\u30af\u30c8",children:"Signal \u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),"\n",(0,i.jsx)(e.p,{children:"\u30b7\u30b0\u30ca\u30eb\u306f\u3001\u30ef\u30fc\u30ab\u30fc\u3084\u30d7\u30ed\u30bb\u30b9\u3092\u547c\u3073\u51fa\u3059/\u4f5c\u6210\u3059\u308b\u30b3\u30de\u30f3\u30c9\u306b\u5bfe\u3057\u3066\u5f15\u6570\u3068\u3057\u3066\u6e21\u3059\u5fc5\u8981\u306e\u3042\u308b\u5171\u6709\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"4D.Signal"})," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u6b21\u306e\u30d3\u30eb\u30c8\u30a4\u30f3\u3055\u308c\u305f\u30e1\u30bd\u30c3\u30c9\u304a\u3088\u3073\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6301\u3061\u307e\u3059:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#wait",children:(0,i.jsx)(e.code,{children:".wait()"})})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#trigger",children:(0,i.jsx)(e.code,{children:".trigger()"})})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#signaled",children:(0,i.jsx)(e.code,{children:".signaled"})})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#description",children:(0,i.jsx)(e.code,{children:".description"})})}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u30b7\u30b0\u30ca\u30eb\u306e ",(0,i.jsx)(e.code,{children:".wait()"})," \u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3073\u51fa\u3057\u305f\u30ef\u30fc\u30ab\u30fc\u3084\u30d7\u30ed\u30bb\u30b9\u306f\u3001",(0,i.jsx)(e.code,{children:".signaled"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u304c true \u306b\u306a\u308b\u307e\u3067\u5b9f\u884c\u3092\u505c\u6b62\u3057\u307e\u3059\u3002 \u30b7\u30b0\u30ca\u30eb\u3092\u5f85\u3063\u3066\u3044\u308b\u9593\u3001\u547c\u3073\u51fa\u3057\u305f\u30d7\u30ed\u30bb\u30b9\u306f CPU \u3092\u6d88\u8cbb\u3057\u307e\u305b\u3093\u3002 \u3053\u308c\u306f\u30de\u30eb\u30c1\u30d7\u30ed\u30bb\u30b9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u9451\u307f\u308b\u3068\u6709\u610f\u7fa9\u306a\u4ed5\u7d44\u307f\u3067\u3059\u3002 ",(0,i.jsx)(e.code,{children:".signaled"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001\u3044\u305a\u308c\u304b\u306e\u30ef\u30fc\u30ab\u30fc\u307e\u305f\u306f\u30d7\u30ed\u30bb\u30b9\u304c\u30b7\u30b0\u30ca\u30eb\u306e ",(0,i.jsx)(e.code,{children:".trigger()"})," \u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3073\u51fa\u3057\u305f\u6642\u70b9\u3067 true \u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u307e\u305f\u3001\u30b3\u30fc\u30c9\u306e\u30d6\u30ed\u30c3\u30af\u3092\u907f\u3051\u308b\u305f\u3081\u3001",(0,i.jsx)(e.code,{children:".wait()"})," \u547c\u3073\u51fa\u3057\u306e\u969b\u306b\u5b9a\u7fa9\u3057\u305f\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u6642\u9593\u306b\u9054\u3059\u308b\u3053\u3068\u3067\u3082\u5f85\u6a5f\u72b6\u614b\u3092\u8131\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["Signal \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001",(0,i.jsx)(e.a,{href:"#new-signal",children:"New signal"})," \u30b3\u30de\u30f3\u30c9\u306b\u3088\u3063\u3066\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"\u30b7\u30b0\u30ca\u30eb\u306e\u4f7f\u3044\u65b9",children:"\u30b7\u30b0\u30ca\u30eb\u306e\u4f7f\u3044\u65b9"}),"\n",(0,i.jsxs)(e.p,{children:["4D \u3067\u306f\u3001",(0,i.jsx)(e.a,{href:"#new-signal",children:(0,i.jsx)(e.code,{children:"New signal"})})," \u30b3\u30de\u30f3\u30c9\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u3067\u65b0\u898f Signal \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 \u4f5c\u6210\u3057\u305f\u30b7\u30b0\u30ca\u30eb\u306f\u3001",(0,i.jsx)(e.code,{children:"New process"})," \u3042\u308b\u3044\u306f ",(0,i.jsx)(e.code,{children:"CALL WORKER"})," \u30b3\u30de\u30f3\u30c9\u306b\u5f15\u6570\u3068\u3057\u3066\u6e21\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u308c\u306b\u3088\u308a\u3001\u30d7\u30ed\u30bb\u30b9\u3084\u30ef\u30fc\u30ab\u30fc\u306f\u30bf\u30b9\u30af\u3092\u5b8c\u4e86\u3057\u305f\u969b\u306b\u30b7\u30b0\u30ca\u30eb\u3092\u66f8\u304d\u63db\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"signal.wait()"})," \u306f\u3001\u4ed6\u306e\u30ef\u30fc\u30ab\u30fc/\u30d7\u30ed\u30bb\u30b9\u306e\u30bf\u30b9\u30af\u304c\u5b8c\u4e86\u3059\u308b\u307e\u3067\u5f85\u6a5f\u3059\u308b\u30ef\u30fc\u30ab\u30fc/\u30d7\u30ed\u30bb\u30b9\u304b\u3089\u547c\u3073\u51fa\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"signal.trigger()"})," \u306f\u3001\u4ed6\u306e\u30ef\u30fc\u30ab\u30fc/\u30d7\u30ed\u30bb\u30b9\u3092\u5f85\u6a5f\u72b6\u614b\u304b\u3089\u89e3\u653e\u3059\u308b\u305f\u3081\u306b\u3001\u30bf\u30b9\u30af\u5b9f\u884c\u3092\u7d42\u3048\u305f\u30ef\u30fc\u30ab\u30fc/\u30d7\u30ed\u30bb\u30b9\u304c\u547c\u3073\u51fa\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:s(133693).A+"",width:"813",height:"324"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"signal.trigger()"})," \u306e\u547c\u3073\u51fa\u3057\u306b\u3088\u3063\u3066\u89e3\u653e\u3055\u308c\u305f\u30b7\u30b0\u30ca\u30eb\u306f \u3001\u518d\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002 \u5225\u306e\u30b7\u30b0\u30ca\u30eb\u3092\u8a2d\u5b9a\u3059\u308b\u306b\u306f\u3001",(0,i.jsx)(e.code,{children:"New signal"})," \u30b3\u30de\u30f3\u30c9\u3092\u3042\u3089\u305f\u3081\u3066\u547c\u3073\u51fa\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["Signal \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f ",(0,i.jsx)(e.a,{href:"/docs/ja/20/Concepts/shared",children:"\u5171\u6709\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"})," \u3067\u3042\u308b\u305f\u3081\u3001\u547c\u3073\u51fa\u3055\u308c\u305f\u30ef\u30fc\u30ab\u30fc/\u30d7\u30ed\u30bb\u30b9\u304b\u3089\u7d50\u679c\u3092\u8fd4\u3059\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u5834\u5408\u3001",(0,i.jsx)(e.code,{children:"Use...End use"})," \u69cb\u6587\u5185\u3067\u5024\u3092\u66f8\u304d\u8fbc\u3080\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-4d",children:' var $signal : 4D.Signal\n\n  // \u30b7\u30b0\u30ca\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059\n $signal:=New signal\n\n  // \u30e1\u30a4\u30f3\u30d7\u30ed\u30bb\u30b9\u3092\u547c\u3073\u51fa\u3057\u3001OpenForm \u30e1\u30bd\u30c3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\n CALL WORKER(1;"OpenForm";$signal)\n  // \u4ed6\u306e\u8a08\u7b97\u3092\u3057\u307e\u3059\n ...\n  // \u30d7\u30ed\u30bb\u30b9\u306e\u7d42\u4e86\u3092\u5f85\u6a5f\u3057\u307e\u3059\n $signaled:=$signal.wait()\n\n  // \u7d50\u679c\u3092\u51e6\u7406\u3057\u307e\u3059\n $calc:=$signal.result+...\n'})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:(0,i.jsx)(e.strong,{children:"OpenForm"})})," \u30e1\u30bd\u30c3\u30c9:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-4d",children:' #DECLARE ($signal : 4D.Signal)  \n var $form : Object\n $form:=New object("value";0)\n\n  // \u30d5\u30a9\u30fc\u30e0\u3092\u958b\u304d\u307e\u3059\n $win:=Open form window("Information";Movable form dialog box)\n DIALOG("Information";$form)\n CLOSE WINDOW($win)\n\n  // $signal \u5171\u6709\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u65b0\u3057\u3044\u5c5e\u6027\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3067\u3001\u4ed6\u306e\u30d7\u30ed\u30bb\u30b9\u306b\u8fd4\u308a\u5024\u3092\u53d7\u3051\u6e21\u3057\u307e\u3059:\n Use($signal)\n    $signal.result:=$form.value\n End use\n\n  // \u5f85\u6a5f\u30d7\u30ed\u30bb\u30b9\u306b\u5411\u3051\u3066\u30b7\u30b0\u30ca\u30eb\u3092\u30c8\u30ea\u30ac\u30fc\u3057\u307e\u3059\n $signal.trigger()\n'})}),"\n",(0,i.jsx)(e.h3,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsx)(e.tr,{children:(0,i.jsx)(e.th,{})})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsx)(e.tr,{children:(0,i.jsxs)(e.td,{children:[(0,i.jsxs)(e.a,{href:"#description",children:[(0,i.jsx)(e.strong,{children:".description"})," : Text"]}),"\xa0\xa0\xa0\xa0",(0,i.jsx)(e.code,{children:"Signal"})," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30ab\u30b9\u30bf\u30e0\u306a\u8a73\u7d30\u3092\u683c\u7d0d\u3057\u307e\u3059"]})}),(0,i.jsx)(e.tr,{children:(0,i.jsxs)(e.td,{children:[(0,i.jsxs)(e.a,{href:"#signaled",children:[(0,i.jsx)(e.strong,{children:".signaled"})," : Boolean"]}),"\xa0\xa0\xa0\xa0",(0,i.jsx)(e.code,{children:"Signal"})," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u73fe\u5728\u306e\u72b6\u614b\u3092\u683c\u7d0d\u3057\u307e\u3059"]})}),(0,i.jsx)(e.tr,{children:(0,i.jsxs)(e.td,{children:[(0,i.jsx)(e.a,{href:"#trigger",children:(0,i.jsx)(e.strong,{children:".trigger( )"})}),"\xa0\xa0\xa0\xa0\u30b7\u30b0\u30ca\u30eb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e ",(0,i.jsx)(e.code,{children:"signaled"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u3092 ",(0,i.jsx)(e.strong,{children:"true"})," \u306b\u8a2d\u5b9a\u3057\u307e\u3059"]})}),(0,i.jsx)(e.tr,{children:(0,i.jsxs)(e.td,{children:[(0,i.jsxs)(e.a,{href:"#wait",children:[(0,i.jsx)(e.strong,{children:".wait"}),"( { ",(0,i.jsx)(e.em,{children:"timeout"})," : Real } ) : Boolean "]}),"\xa0\xa0\xa0\xa0\u30b7\u30b0\u30ca\u30eb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e ",(0,i.jsx)(e.code,{children:".signaled"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u304c ",(0,i.jsx)(e.strong,{children:"true"})," \u306b\u306a\u308b\u304b\u3001\u4efb\u610f\u306e ",(0,i.jsx)(e.em,{children:"timeout"})," \u306b\u6307\u5b9a\u3057\u305f\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u6642\u9593\u304c\u7d4c\u904e\u3059\u308b\u307e\u3067\u3001\u30ab\u30ec\u30f3\u30c8\u30d7\u30ed\u30bb\u30b9\u3092\u5f85\u6a5f\u3055\u305b\u307e\u3059"]})})]})]}),"\n",(0,i.jsx)(e.h2,{id:"new-signal",children:"New signal"}),"\n",(0,i.jsxs)(e.details,{children:[(0,i.jsx)(e.summary,{children:"\u5c65\u6b74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u30ea\u30ea\u30fc\u30b9"}),(0,i.jsx)(e.th,{children:"\u5185\u5bb9"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"17 R4"}),(0,i.jsx)(e.td,{children:"\u8ffd\u52a0"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"New signal"})," { ( ",(0,i.jsx)(e.em,{children:"description"})," : Text ) } : 4D.Signal"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u5f15\u6570"}),(0,i.jsx)(e.th,{children:"\u30bf\u30a4\u30d7"}),(0,i.jsx)(e.th,{style:{textAlign:"center"}}),(0,i.jsx)(e.th,{children:"\u8aac\u660e"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"description"}),(0,i.jsx)(e.td,{children:"Text"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(e.td,{children:"\u30b7\u30b0\u30ca\u30eb\u306e\u8a73\u7d30"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u623b\u308a\u5024"}),(0,i.jsx)(e.td,{children:"4D.Signal"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"<-"}),(0,i.jsx)(e.td,{children:"\u30b7\u30b0\u30ca\u30eb\u3092\u683c\u7d0d\u3059\u308b\u30cd\u30a4\u30c6\u30a3\u30d6\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"})]})]})]}),"\n",(0,i.jsx)(e.p,{children:"|"}),"\n",(0,i.jsx)(e.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"New signal"})," \u30b3\u30de\u30f3\u30c9\u306f\u3001 ",(0,i.jsx)(e.code,{children:"4D.Signal"})," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u30b7\u30b0\u30ca\u30eb\u306f\u3001\u30ef\u30fc\u30ab\u30fc/\u30d7\u30ed\u30bb\u30b9\u304b\u3089\u4ed6\u306e\u30ef\u30fc\u30ab\u30fc/\u30d7\u30ed\u30bb\u30b9\u3078\u3068\u5f15\u6570\u306e\u3088\u3046\u306b\u6e21\u305b\u308b\u5171\u6709\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002 \u305d\u306e\u305f\u3081\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3053\u3068\u304c\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u547c\u3073\u51fa\u3055\u308c\u305f\u30ef\u30fc\u30ab\u30fc/\u30d7\u30ed\u30bb\u30b9\u306f\u7279\u5b9a\u306e\u51e6\u7406\u304c\u5b8c\u4e86\u3057\u305f\u5f8c\u306b Signal \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u66f4\u65b0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u547c\u3073\u51fa\u3057\u5143\u306e\u30ef\u30fc\u30ab\u30fc/\u30d7\u30ed\u30bb\u30b9\u306f CPU\u30ea\u30bd\u30fc\u30b9\u3092\u6d88\u8cbb\u3059\u308b\u3053\u3068\u306a\u304f\u3001\u5b9f\u884c\u3092\u505c\u6b62\u3057\u3066\u30b7\u30b0\u30ca\u30eb\u304c\u66f4\u65b0\u3055\u308c\u308b\u307e\u3067\u5f85\u3064\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u4efb\u610f\u3067 ",(0,i.jsx)(e.em,{children:"description"})," \u5f15\u6570\u306b\u3001\u30b7\u30b0\u30ca\u30eb\u306e\u8a73\u7d30\u3092\u8aac\u660e\u3059\u308b\u30ab\u30b9\u30bf\u30e0\u30c6\u30ad\u30b9\u30c8\u3092\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u30c6\u30ad\u30b9\u30c8\u306f\u3001\u30b7\u30b0\u30ca\u30eb\u306e\u4f5c\u6210\u5f8c\u306b\u5b9a\u7fa9\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["Signal \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u5171\u6709\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u305f\u3081\u3001",(0,i.jsx)(e.code,{children:"Use...End use"})," \u69cb\u6587\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001",(0,i.jsx)(e.a,{href:"#description",children:(0,i.jsx)(e.code,{children:".description"})})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u307b\u304b\u3001\u30e6\u30fc\u30b6\u30fc\u72ec\u81ea\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u7ba1\u7406\u3059\u308b\u306e\u306b\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u623b\u308a\u5024"})}),"\n",(0,i.jsxs)(e.p,{children:["\u65b0\u898f\u306e ",(0,i.jsxs)(e.a,{href:"#signal-object",children:[(0,i.jsx)(e.code,{children:"4D.Signal"})," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8"]}),"\u3002"]}),"\n",(0,i.jsx)(e.h4,{id:"\u4f8b\u984c-1",children:"\u4f8b\u984c"}),"\n",(0,i.jsx)(e.p,{children:"\u4ee5\u4e0b\u306f\u3001\u30b7\u30b0\u30ca\u30eb\u3092\u8a2d\u5b9a\u3059\u308b\u30ef\u30fc\u30ab\u30fc\u306e\u5178\u578b\u7684\u306a\u4f8b\u3067\u3059:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-4d",children:' var $signal : 4D.Signal\n $signal:=New signal("This is my first signal")\n\n CALL WORKER("myworker";"doSomething";$signal)\n $signaled:=$signal.wait(1) // \u6700\u5927\u3067 1\u79d2\u5f85\u6a5f\u3057\u307e\u3059\n\n If($signaled)\n    ALERT("myworker \u306f\u30bf\u30b9\u30af\u3092\u7d42\u4e86\u3057\u307e\u3057\u305f\u3002 \u7d50\u679c: "+$signal.myresult)\n Else\n    ALERT("myworker \u306f 1\u79d2\u4ee5\u5185\u306b\u30bf\u30b9\u30af\u3092\u7d42\u4e86\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002")\n End if\n'})}),"\n",(0,i.jsxs)(e.p,{children:["\u4ee5\u4e0b\u306f\u3001",(0,i.jsx)(e.em,{children:(0,i.jsx)(e.strong,{children:"doSomething"})})," \u30e1\u30bd\u30c3\u30c9\u306e\u4e00\u4f8b\u3067\u3059:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-4d",children:" #DECLARE ($signal : 4D.Signal)\n  // \u4f55\u3089\u304b\u306e\u51e6\u7406\n  //...\n Use($signal)\n    $signal.myresult:=$processingResult  // \u7d50\u679c\u3092\u8fd4\u3057\u307e\u3059\n End use\n $signal.trigger() // \u51e6\u7406\u304c\u5b8c\u4e86\u3057\u307e\u3057\u305f\n"})}),"\n",(0,i.jsx)(e.h2,{id:"description",children:".description"}),"\n",(0,i.jsxs)(e.details,{children:[(0,i.jsx)(e.summary,{children:"\u5c65\u6b74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u30ea\u30ea\u30fc\u30b9"}),(0,i.jsx)(e.th,{children:"\u5185\u5bb9"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"17 R4"}),(0,i.jsx)(e.td,{children:"\u8ffd\u52a0"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:".description"})," : Text"]}),"\n",(0,i.jsx)(e.h4,{id:"\u8aac\u660e-1",children:"\u8aac\u660e"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:".description"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001 ",(0,i.jsx)(e.code,{children:"Signal"})," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30ab\u30b9\u30bf\u30e0\u306a\u8a73\u7d30\u3092\u683c\u7d0d\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:".description"})," \u306f\u3001Signal \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210\u6642\u3001\u3042\u308b\u3044\u306f\u305d\u306e\u4ed6\u306e\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u3082\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u305f\u3060\u3057\u3001",(0,i.jsx)(e.code,{children:"Signal"})," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u5171\u6709\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3042\u308b\u305f\u3081\u3001",(0,i.jsx)(e.code,{children:".description"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u66f8\u304d\u8fbc\u3080\u969b\u306b\u306f\u5fc5\u305a ",(0,i.jsx)(e.code,{children:"Use...End use"})," \u69cb\u6587\u3092\u4f7f\u308f\u306a\u304f\u3066\u306f\u306a\u3089\u306a\u3044\u70b9\u306b\u7559\u610f\u304c\u5fc5\u8981\u3067\u3059\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u8aad\u307f\u66f8\u304d\u53ef\u80fd"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u3067\u3059\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"signaled",children:".signaled"}),"\n",(0,i.jsxs)(e.details,{children:[(0,i.jsx)(e.summary,{children:"\u5c65\u6b74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u30ea\u30ea\u30fc\u30b9"}),(0,i.jsx)(e.th,{children:"\u5185\u5bb9"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"17 R4"}),(0,i.jsx)(e.td,{children:"\u8ffd\u52a0"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:".signaled"})," : Boolean"]}),"\n",(0,i.jsx)(e.h4,{id:"\u8aac\u660e-2",children:"\u8aac\u660e"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:".signaled"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001 ",(0,i.jsx)(e.code,{children:"Signal"})," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u73fe\u5728\u306e\u72b6\u614b\u3092\u683c\u7d0d\u3057\u307e\u3059\u3002 Signal \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u4f5c\u6210\u3055\u308c\u305f\u6642\u70b9\u3067\u306f\u3001",(0,i.jsx)(e.code,{children:".signaled"})," \u306f ",(0,i.jsx)(e.strong,{children:"false"})," \u3067\u3059\u3002 Signal \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u5bfe\u3057\u3066 ",(0,i.jsx)(e.code,{children:".trigger()"})," \u304c\u547c\u3073\u51fa\u3055\u308c\u305f\u6642\u306b ",(0,i.jsx)(e.strong,{children:"true"})," \u3068\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f ",(0,i.jsx)(e.strong,{children:"\u8aad\u307f\u53d6\u308a\u5c02\u7528"})," \u3067\u3059\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"trigger",children:".trigger()"}),"\n",(0,i.jsxs)(e.details,{children:[(0,i.jsx)(e.summary,{children:"\u5c65\u6b74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u30ea\u30ea\u30fc\u30b9"}),(0,i.jsx)(e.th,{children:"\u5185\u5bb9"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"17 R4"}),(0,i.jsx)(e.td,{children:"\u8ffd\u52a0"})]})})]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:".trigger( )"})}),"\n",(0,i.jsx)(e.p,{children:"| \u5f15\u6570 | \u30bf\u30a4\u30d7 |  | \u8aac\u660e                                           |\n| -- | --- |::| -------------------------------------------- |\n|    |     |  | \u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u5f15\u6570\u3092\u5fc5\u8981\u3068\u3057\u307e\u305b\u3093|"}),"\n",(0,i.jsx)(e.p,{children:"|"}),"\n",(0,i.jsx)(e.h4,{id:"\u8aac\u660e-3",children:"\u8aac\u660e"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:".trigger( )"})," \u95a2\u6570\u306f\u3001 \u30b7\u30b0\u30ca\u30eb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e ",(0,i.jsx)(e.code,{children:"signaled"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u3092 ",(0,i.jsx)(e.strong,{children:"true"})," \u306b\u8a2d\u5b9a\u3057\u307e\u3059 \u3002\u3059\u308b\u3068\u3001\u3053\u306e\u30b7\u30b0\u30ca\u30eb\u3092\u5f85\u6a5f\u3057\u3066\u3044\u305f\u30ef\u30fc\u30ab\u30fc\u3084\u30d7\u30ed\u30bb\u30b9\u304c\u958b\u59cb\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["Signal \u304c\u3059\u3067\u306b\u30b7\u30b0\u30ca\u30eb\u3055\u308c\u3066\u3044\u308b (\u3064\u307e\u308a ",(0,i.jsx)(e.code,{children:"signaled"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u304c ",(0,i.jsx)(e.strong,{children:"true"})," \u306b\u306a\u3063\u3066\u3044\u308b) \u72b6\u614b\u3067\u3042\u3063\u305f\u5834\u5408\u3001\u3053\u306e\u95a2\u6570\u306f\u4f55\u3082\u3057\u307e\u305b\u3093\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"wait",children:".wait()"}),"\n",(0,i.jsxs)(e.details,{children:[(0,i.jsx)(e.summary,{children:"\u5c65\u6b74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u30ea\u30ea\u30fc\u30b9"}),(0,i.jsx)(e.th,{children:"\u5185\u5bb9"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"17 R4"}),(0,i.jsx)(e.td,{children:"\u8ffd\u52a0"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:".wait"}),"( { ",(0,i.jsx)(e.em,{children:"timeout"})," : Real } ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u5f15\u6570"}),(0,i.jsx)(e.th,{children:"\u30bf\u30a4\u30d7"}),(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{children:"\u8aac\u660e"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"timeout"}),(0,i.jsx)(e.td,{children:"Real"}),(0,i.jsx)(e.td,{children:"->"}),(0,i.jsx)(e.td,{children:"\u30b7\u30b0\u30ca\u30eb\u306e\u6700\u5927\u5f85\u6a5f\u6642\u9593 (\u79d2\u5358\u4f4d)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u623b\u308a\u5024"}),(0,i.jsx)(e.td,{children:"Boolean"}),(0,i.jsx)(e.td,{children:"<-"}),(0,i.jsxs)(e.td,{children:[(0,i.jsx)(e.code,{children:".signaled"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u72b6\u614b"]})]})]})]}),"\n",(0,i.jsx)(e.p,{children:"|"}),"\n",(0,i.jsx)(e.h4,{id:"\u8aac\u660e-4",children:"\u8aac\u660e"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:".wait( )"})," \u95a2\u6570\u306f\u3001 \u30b7\u30b0\u30ca\u30eb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e ",(0,i.jsx)(e.code,{children:".signaled"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u304c ",(0,i.jsx)(e.strong,{children:"true"})," \u306b\u306a\u308b\u304b\u3001\u4efb\u610f\u306e ",(0,i.jsx)(e.em,{children:"timeout"})," \u306b\u6307\u5b9a\u3057\u305f\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u6642\u9593\u304c\u7d4c\u904e\u3059\u308b\u307e\u3067\u3001\u30ab\u30ec\u30f3\u30c8\u30d7\u30ed\u30bb\u30b9\u3092\u5f85\u6a5f\u3055\u305b\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u30b3\u30fc\u30c9\u5b9f\u884c\u306e\u30d6\u30ed\u30c3\u30af\u3092\u9632\u3050\u305f\u3081\u3001",(0,i.jsx)(e.em,{children:"timeout"})," \u5f15\u6570\u3092\u4f7f\u7528\u3057\u3066\u6700\u9577\u5f85\u6a5f\u6642\u9593\u3092\u79d2\u5358\u4f4d\u3067\u6307\u5b9a\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059(\u5c0f\u6570\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059)\u3002"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u8b66\u544a"}),": ",(0,i.jsx)(e.em,{children:"timeout"})," \u5f15\u6570\u3092\u6e21\u3055\u305a\u306b ",(0,i.jsx)(e.code,{children:".wait()"})," \u3092 4D \u306e\u30e1\u30a4\u30f3\u30d7\u30ed\u30bb\u30b9\u3067\u547c\u3073\u51fa\u3059\u3053\u3068\u306f\u63a8\u5968\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002\u6700\u60aa\u306e\u5834\u5408 4D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5168\u4f53\u304c\u30d5\u30ea\u30fc\u30ba\u3057\u3066\u3057\u307e\u3046\u6050\u308c\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["Signal \u304c\u3059\u3067\u306b\u30b7\u30b0\u30ca\u30eb\u3055\u308c\u3066\u3044\u308b (\u3064\u307e\u308a ",(0,i.jsx)(e.code,{children:"signaled"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u304c ",(0,i.jsx)(e.strong,{children:"true"})," \u306b\u306a\u3063\u3066\u3044\u308b) \u72b6\u614b\u3067\u3042\u3063\u305f\u5834\u5408\u3001\u3053\u306e\u95a2\u6570\u306f\u5373\u5ea7\u306b\u623b\u308a\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u3053\u306e\u95a2\u6570\u306f ",(0,i.jsx)(e.code,{children:".signaled"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002 \u3053\u306e\u5024\u3092\u8a55\u4fa1\u3059\u308b\u3053\u3068\u3067\u3001\u5f85\u6a5f\u304c\u7d42\u4e86\u3057\u305f\u306e\u306f ",(0,i.jsx)(e.code,{children:".trigger()"})," \u304c\u547c\u3073\u51fa\u3055\u308c\u305f\u305f\u3081\u304b (",(0,i.jsx)(e.code,{children:".signaled"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306f ",(0,i.jsx)(e.strong,{children:"true"}),")\u3001\u305d\u308c\u3068\u3082\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u6642\u9593\u304c\u7d4c\u904e\u3057\u305f\u305f\u3081\u304b (",(0,i.jsx)(e.code,{children:".signaled"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306f ",(0,i.jsx)(e.strong,{children:"false"}),") \u3092\u77e5\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["Signal \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u5f85\u6a5f\u3057\u3066\u3044\u308b\u30d7\u30ed\u30bb\u30b9\u306e\u72b6\u614b\u306f ",(0,i.jsx)(e.code,{children:"Waiting for internal flag"})," \u3067\u3059\u3002"]}),"\n"]})]})}function j(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(x,{...n})}):x(n)}},221020:(n,e,s)=>{var i=s(296540),l=Symbol.for("react.element"),r=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function t(n,e,s){var i,r={},t=null,x=null;for(i in void 0!==s&&(t=""+s),void 0!==e.key&&(t=""+e.key),void 0!==e.ref&&(x=e.ref),e)d.call(e,i)&&!h.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps)void 0===r[i]&&(r[i]=e[i]);return{$$typeof:l,type:n,key:t,ref:x,props:r,_owner:c.current}}e.Fragment=r,e.jsx=t,e.jsxs=t},474848:(n,e,s)=>{n.exports=s(221020)},133693:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/signal-f8f54304f438eaf43a007e7cd1be6f66.png"},28453:(n,e,s)=>{s.d(e,{R:()=>d,x:()=>c});var i=s(296540);const l={},r=i.createContext(l);function d(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:d(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);