/*! For license information please see f94c6370.e170703f.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[88651],{574423:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>x,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var s=i(474848),d=i(28453);const r={id:"webAdmin",title:"WebAdmin"},l=void 0,c={id:"Admin/webAdmin",title:"WebAdmin",description:"WebAdmin \u3068\u306f\u30014D \u304a\u3088\u3073 4D Server \u306b\u4f7f\u7528\u3055\u308c\u308b\u7d44\u307f\u8fbc\u307f\u306e Web\u30b5\u30fc\u30d0\u30fc\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u540d\u79f0\u3067\u3001\u30c7\u30fc\u30bf\u30a8\u30af\u30b9\u30d7\u30ed\u30fc\u30e9\u30fc \u306a\u3069\u306e\u7ba1\u7406\u6a5f\u80fd\u3078\u306e\u5b89\u5168\u306a Web\u30a2\u30af\u30bb\u30b9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002 \u30d6\u30e9\u30a6\u30b6\u30fc\u3084\u3001\u4efb\u610f\u306e Web\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089\u3001\u30ed\u30fc\u30ab\u30eb\u307e\u305f\u306f\u30ea\u30e2\u30fc\u30c8\u3067\u3053\u306e Web\u30b5\u30fc\u30d0\u30fc\u306b\u63a5\u7d9a\u3057\u3001\u95a2\u9023\u306e 4D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R4/Admin/webAdmin.md",sourceDirName:"Admin",slug:"/Admin/webAdmin",permalink:"/docs/ja/20-R4/Admin/webAdmin",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2FwebAdmin.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"webAdmin",title:"WebAdmin"},sidebar:"docs",previous:{title:"Web Administration",permalink:"/docs/ja/20-R4/category/web-administration"},next:{title:"\u30c7\u30fc\u30bf\u30a8\u30af\u30b9\u30d7\u30ed\u30fc\u30e9\u30fc",permalink:"/docs/ja/20-R4/Admin/dataExplorer"}},t={},h=[{value:"WebAdmin Web\u30b5\u30fc\u30d0\u30fc\u306e\u8d77\u52d5",id:"WebAdmin-Web\u30b5\u30fc\u30d0\u30fc\u306e\u8d77\u52d5",level:2},{value:"\u81ea\u52d5\u30b9\u30bf\u30fc\u30c8\u30a2\u30c3\u30d7",id:"\u81ea\u52d5\u30b9\u30bf\u30fc\u30c8\u30a2\u30c3\u30d7",level:3},{value:"\u958b\u59cb\u3068\u505c\u6b62",id:"\u958b\u59cb\u3068\u505c\u6b62",level:3},{value:"WebAdmin \u8a2d\u5b9a",id:"WebAdmin-\u8a2d\u5b9a",level:2},{value:"\u8a2d\u5b9a\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9",id:"\u8a2d\u5b9a\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9",level:3},{value:"WebAdmin \u30b5\u30fc\u30d0\u30fc\u3092\u30b9\u30bf\u30fc\u30c8\u30a2\u30c3\u30d7\u6642\u306b\u8d77\u52d5",id:"WebAdmin-\u30b5\u30fc\u30d0\u30fc\u3092\u30b9\u30bf\u30fc\u30c8\u30a2\u30c3\u30d7\u6642\u306b\u8d77\u52d5",level:4},{value:"\u30ed\u30fc\u30ab\u30eb\u30db\u30b9\u30c8\u3067HTTP\u63a5\u7d9a\u3092\u53d7\u3051\u5165\u308c\u308b",id:"\u30ed\u30fc\u30ab\u30eb\u30db\u30b9\u30c8\u3067HTTP\u63a5\u7d9a\u3092\u53d7\u3051\u5165\u308c\u308b",level:4},{value:"HTTP \u30dd\u30fc\u30c8",id:"HTTP-\u30dd\u30fc\u30c8",level:4},{value:"HTTPS\u3092\u53d7\u3051\u5165\u308c\u308b",id:"HTTPS\u3092\u53d7\u3051\u5165\u308c\u308b",level:4},{value:"HTTPS \u30dd\u30fc\u30c8",id:"HTTPS-\u30dd\u30fc\u30c8",level:4},{value:"\u8a8d\u8a3c\u30d5\u30a9\u30eb\u30c0\u30d1\u30b9",id:"\u8a8d\u8a3c\u30d5\u30a9\u30eb\u30c0\u30d1\u30b9",level:4},{value:"\u30c7\u30d0\u30c3\u30b0\u30ed\u30b0\u30e2\u30fc\u30c9",id:"\u30c7\u30d0\u30c3\u30b0\u30ed\u30b0\u30e2\u30fc\u30c9",level:4},{value:"\u30a2\u30af\u30bb\u30b9\u30ad\u30fc",id:"\u30a2\u30af\u30bb\u30b9\u30ad\u30fc",level:4},{value:"Qodly Studio \u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u6709\u52b9\u5316\u3059\u308b",id:"Qodly-Studio-\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u6709\u52b9\u5316\u3059\u308b",level:4},{value:"WebAdmin \u306e\u30d8\u30c3\u30c9\u30ec\u30b9\u8a2d\u5b9a",id:"WebAdmin-\u306e\u30d8\u30c3\u30c9\u30ec\u30b9\u8a2d\u5b9a",level:2},{value:"\u8a8d\u8a3c\u3068\u30bb\u30c3\u30b7\u30e7\u30f3",id:"\u8a8d\u8a3c\u3068\u30bb\u30c3\u30b7\u30e7\u30f3",level:2}];function o(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"WebAdmin"})," \u3068\u306f\u30014D \u304a\u3088\u3073 4D Server \u306b\u4f7f\u7528\u3055\u308c\u308b\u7d44\u307f\u8fbc\u307f\u306e Web\u30b5\u30fc\u30d0\u30fc\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u540d\u79f0\u3067\u3001",(0,s.jsx)(n.a,{href:"/docs/ja/20-R4/Admin/dataExplorer",children:"\u30c7\u30fc\u30bf\u30a8\u30af\u30b9\u30d7\u30ed\u30fc\u30e9\u30fc"})," \u306a\u3069\u306e\u7ba1\u7406\u6a5f\u80fd\u3078\u306e\u5b89\u5168\u306a Web\u30a2\u30af\u30bb\u30b9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002 \u30d6\u30e9\u30a6\u30b6\u30fc\u3084\u3001\u4efb\u610f\u306e Web\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089\u3001\u30ed\u30fc\u30ab\u30eb\u307e\u305f\u306f\u30ea\u30e2\u30fc\u30c8\u3067\u3053\u306e Web\u30b5\u30fc\u30d0\u30fc\u306b\u63a5\u7d9a\u3057\u3001\u95a2\u9023\u306e 4D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:'WebAdmin \u5185\u90e8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001"WebAdmin" \u6a29\u9650\u3092\u6301\u3064\u30e6\u30fc\u30b6\u30fc\u306e\u8a8d\u8a3c\u3092\u51e6\u7406\u3057\u3001\u7ba1\u7406\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u958b\u3044\u3066\u5c02\u7528\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002'}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u306e\u6a5f\u80fd\u306f\u3001\u30d8\u30c3\u30c9\u30ec\u30b9\u3067\u52d5\u4f5c\u3059\u308b 4D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u3082\u3001\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3092\u6301\u3064 4D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u3082\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"WebAdmin-Web\u30b5\u30fc\u30d0\u30fc\u306e\u8d77\u52d5",children:"WebAdmin Web\u30b5\u30fc\u30d0\u30fc\u306e\u8d77\u52d5"}),"\n",(0,s.jsxs)(n.p,{children:["\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001",(0,s.jsx)(n.code,{children:"WebAdmin"})," Web\u30b5\u30fc\u30d0\u30fc\u306f\u958b\u59cb\u3057\u307e\u305b\u3093\u3002 \u8d77\u52d5\u6642\u306b\u958b\u59cb\u3059\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3059\u308b\u304b\u3001(\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u4ed8\u304d\u306e\u5834\u5408\u306f) \u30e1\u30cb\u30e5\u30fc\u304b\u3089\u624b\u52d5\u3067\u958b\u59cb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u81ea\u52d5\u30b9\u30bf\u30fc\u30c8\u30a2\u30c3\u30d7",children:"\u81ea\u52d5\u30b9\u30bf\u30fc\u30c8\u30a2\u30c3\u30d7"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"WebAdmin"})," Web\u30b5\u30fc\u30d0\u30fc\u306f\u30014D \u307e\u305f\u306f 4D Server \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8d77\u52d5\u6642 (\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u8aad\u307f\u8fbc\u307f\u524d) \u306b\u958b\u59cb\u3059\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3092\u6301\u3064 4D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001",(0,s.jsx)(n.strong,{children:"\u30d5\u30a1\u30a4\u30eb \uff1e Web\u7ba1\u7406 \uff1e \u8a2d\u5b9a..."})," \u30e1\u30cb\u30e5\u30fc\u9805\u76ee\u3092\u9078\u629e\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"alt-text",src:i(941609).A+"",width:"470",height:"294"})}),"\n",(0,s.jsxs)(n.p,{children:["Web\u7ba1\u7406\u8a2d\u5b9a\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9\u3067\u3001",(0,s.jsx)(n.strong,{children:"WebAdmin \u30b5\u30fc\u30d0\u30fc\u3092\u30b9\u30bf\u30fc\u30c8\u30a2\u30c3\u30d7\u6642\u306b\u8d77\u52d5"})," \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"alt-text",src:i(482536).A+"",width:"702",height:"205"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u30d8\u30c3\u30c9\u30ec\u30b9\u306e 4D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u304b\u306b\u304b\u304b\u308f\u3089\u305a\u3001\u4ee5\u4e0b\u306e ",(0,s.jsx)(n.em,{children:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u30fb\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9"})," \u306e\u5f15\u6570\u3092\u4f7f\u7528\u3057\u3066\u3001\u81ea\u52d5\u30b9\u30bf\u30fc\u30c8\u30a2\u30c3\u30d7\u3092\u6709\u52b9\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"open ~/Desktop/4D.app --webadmin-auto-start true\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"WebAdmin"})," Web\u30b5\u30fc\u30d0\u30fc\u304c\u4f7f\u7528\u3059\u308b TCP\u30dd\u30fc\u30c8 (\u8a2d\u5b9a\u306b\u3088\u308a\u3001",(0,s.jsx)(n.a,{href:"#https-port",children:"HTTPS"})," \u307e\u305f\u306f ",(0,s.jsx)(n.a,{href:"#http-port",children:"HTTP"}),") \u304c\u958b\u59cb\u6642\u306b\u7a7a\u3044\u3066\u3044\u306a\u3044\u5834\u5408\u30014D \u306f\u6b21\u306e 20\u500b\u306e\u30dd\u30fc\u30c8\u3092\u9806\u306b\u8a66\u3057\u3001\u5229\u7528\u3067\u304d\u308b\u6700\u521d\u306e\u30dd\u30fc\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 \u5229\u7528\u53ef\u80fd\u306a\u30dd\u30fc\u30c8\u304c\u306a\u3044\u5834\u5408\u3001Web\u30b5\u30fc\u30d0\u30fc\u306f\u958b\u59cb\u305b\u305a\u3001\u30a8\u30e9\u30fc\u304c\u8868\u793a\u3055\u308c\u308b\u304b\u3001(\u30d8\u30c3\u30c9\u30ec\u30b9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5834\u5408\u306f) \u30b3\u30f3\u30bd\u30fc\u30eb\u306e\u30ed\u30b0\u306b\u8a18\u9332\u3055\u308c\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u958b\u59cb\u3068\u505c\u6b62",children:"\u958b\u59cb\u3068\u505c\u6b62"}),"\n",(0,s.jsxs)(n.p,{children:["\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3092\u6301\u3064 4D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e ",(0,s.jsx)(n.code,{children:"WebAdmin"})," Web\u30b5\u30fc\u30d0\u30fc\u306f\u3044\u3064\u3067\u3082\u958b\u59cb\u307e\u305f\u306f\u505c\u6b62\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u30d5\u30a1\u30a4\u30eb \uff1e Web\u7ba1\u7406 \uff1e Web\u30b5\u30fc\u30d0\u30fc\u958b\u59cb"})," \u30e1\u30cb\u30e5\u30fc\u9805\u76ee\u3092\u9078\u629e\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"alt-text",src:i(850898).A+"",width:"473",height:"354"})}),"\n",(0,s.jsxs)(n.p,{children:["\u30b5\u30fc\u30d0\u30fc\u304c\u958b\u59cb\u3055\u308c\u3066\u3044\u308b\u3068\u3001\u30e1\u30cb\u30e5\u30fc\u9805\u76ee\u306f ",(0,s.jsx)(n.strong,{children:"Web\u30b5\u30fc\u30d0\u30fc\u505c\u6b62"})," \u306b\u306a\u308a\u307e\u3059\u3002",(0,s.jsx)(n.code,{children:"WebAdmin"})," Web\u30b5\u30fc\u30d0\u30fc\u3092\u505c\u6b62\u3059\u308b\u306b\u306f\u3001\u3053\u308c\u3092\u9078\u629e\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"WebAdmin-\u8a2d\u5b9a",children:"WebAdmin \u8a2d\u5b9a"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"#access-key",children:(0,s.jsx)(n.strong,{children:"\u30a2\u30af\u30bb\u30b9\u30ad\u30fc"})})," \u3092\u5b9a\u7fa9\u3059\u308b\u306b\u306f\u3001",(0,s.jsx)(n.code,{children:"WebAdmin"})," \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u8a2d\u5b9a\u306f\u5fc5\u9808\u3067\u3059\u3002 \u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u3001\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001URL\u7d4c\u7531\u306e\u30a2\u30af\u30bb\u30b9\u306f\u8a31\u53ef\u3055\u308c\u307e\u305b\u3093\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"WebAdmin"})," \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u8a2d\u5b9a\u306f\u3001",(0,s.jsx)(n.a,{href:"#settings-dialog-box",children:"Web\u7ba1\u7406\u8a2d\u5b9a\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9"})," (\u5f8c\u8ff0\u53c2\u7167) \u3067\u304a\u3053\u306a\u3044\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u30d8\u30c3\u30c9\u30ec\u30b94D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001",(0,s.jsxs)(n.a,{href:"#webadmin-headless-configuration",children:[(0,s.jsx)(n.em,{children:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u30fb\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9"})," \u306e\u5f15\u6570"]})," \u3092\u4f7f\u7528\u3057\u3066\u57fa\u672c\u7684\u306a\u8a2d\u5b9a\u3092\u5b9a\u7fa9\u3067\u304d\u307e\u3059\u3002 \u9ad8\u5ea6\u306a\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u5b9a\u7fa9\u3059\u308b\u306b\u306f\u3001\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u8a2d\u5b9a\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9",children:"\u8a2d\u5b9a\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9"}),"\n",(0,s.jsxs)(n.p,{children:["Web\u7ba1\u7406\u306e\u8a2d\u5b9a\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9\u3092\u958b\u304f\u306b\u306f\u3001",(0,s.jsx)(n.strong,{children:"\u30d5\u30a1\u30a4\u30eb \uff1e Web \u7ba1\u7406 \uff1e \u8a2d\u5b9a..."})," \u30e1\u30cb\u30e5\u30fc\u9805\u76ee\u3092\u9078\u629e\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"alt-text",src:i(941609).A+"",width:"470",height:"294"})}),"\n",(0,s.jsx)(n.p,{children:"\u6b21\u306e\u3088\u3046\u306a\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9\u304c\u8868\u793a\u3055\u308c\u307e\u3059:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"alt-text",src:i(255112).A+"",width:"702",height:"462"})}),"\n",(0,s.jsx)(n.h4,{id:"WebAdmin-\u30b5\u30fc\u30d0\u30fc\u3092\u30b9\u30bf\u30fc\u30c8\u30a2\u30c3\u30d7\u6642\u306b\u8d77\u52d5",children:"WebAdmin \u30b5\u30fc\u30d0\u30fc\u3092\u30b9\u30bf\u30fc\u30c8\u30a2\u30c3\u30d7\u6642\u306b\u8d77\u52d5"}),"\n",(0,s.jsxs)(n.p,{children:["4D \u307e\u305f\u306f 4D Server \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8d77\u52d5\u6642\u306b ",(0,s.jsx)(n.code,{children:"WebAdmin"})," Web\u30b5\u30fc\u30d0\u30fc\u3092\u81ea\u52d5\u7684\u306b\u958b\u59cb\u3055\u305b\u308b\u306b\u306f\u3001\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3059 (",(0,s.jsx)(n.a,{href:"#%E8%87%AA%E5%8B%95%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%88%E3%82%A2%E3%83%83%E3%83%97",children:"\u524d\u8ff0\u53c2\u7167"}),"\uff09\u3002 \u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u30c1\u30a7\u30c3\u30af\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u30ed\u30fc\u30ab\u30eb\u30db\u30b9\u30c8\u3067HTTP\u63a5\u7d9a\u3092\u53d7\u3051\u5165\u308c\u308b",children:"\u30ed\u30fc\u30ab\u30eb\u30db\u30b9\u30c8\u3067HTTP\u63a5\u7d9a\u3092\u53d7\u3051\u5165\u308c\u308b"}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u6709\u52b9\u306b\u3059\u308b\u3068\u30014D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u540c\u3058\u30de\u30b7\u30f3\u4e0a\u3067 HTTP \u3092\u4ecb\u3057\u3066 ",(0,s.jsx)(n.code,{children:"WebAdmin"})," Web\u30b5\u30fc\u30d0\u30fc\u306b\u63a5\u7d9a\u3067\u304d\u307e\u3059\u3002 \u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u30c1\u30a7\u30c3\u30af\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u6ce8:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u30ed\u30fc\u30ab\u30eb\u30db\u30b9\u30c8\u4ee5\u5916\u306b\u3088\u308b HTTP\u63a5\u7d9a\u306f\u53d7\u3051\u4ed8\u3051\u307e\u305b\u3093\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u30c1\u30a7\u30c3\u30af\u3055\u308c\u3066\u3044\u3066\u3082\u3001",(0,s.jsx)(n.a,{href:"#https%E3%82%92%E5%8F%97%E3%81%91%E5%85%A5%E3%82%8C%E3%82%8B",children:"HTTPS\u3092\u53d7\u3051\u5165\u308c\u308b"})," \u304c\u30c1\u30a7\u30c3\u30af\u3055\u308c\u3066\u3044\u3066\u3001TLS \u306e\u8a2d\u5b9a\u304c\u6709\u52b9\u306a\u5834\u5408\u3001\u30ed\u30fc\u30ab\u30eb\u30db\u30b9\u30c8\u306e\u63a5\u7d9a\u306f HTTPS \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"HTTP-\u30dd\u30fc\u30c8",children:"HTTP \u30dd\u30fc\u30c8"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u30ed\u30fc\u30ab\u30eb\u30db\u30b9\u30c8\u3067HTTP\u63a5\u7d9a\u3092\u53d7\u3051\u5165\u308c\u308b"})," \u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u6709\u52b9\u306a\u5834\u5408\u3001",(0,s.jsx)(n.code,{children:"WebAdmin"})," Web\u30b5\u30fc\u30d0\u30fc\u3078\u306e HTTP\u63a5\u7d9a\u306b\u4f7f\u7528\u3059\u308b\u30dd\u30fc\u30c8\u756a\u53f7\u3067\u3059\u3002 \u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u306f 7080 \u3067\u3059\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"HTTPS\u3092\u53d7\u3051\u5165\u308c\u308b",children:"HTTPS\u3092\u53d7\u3051\u5165\u308c\u308b"}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u6709\u52b9\u306b\u3059\u308b\u3068\u3001",(0,s.jsx)(n.code,{children:"WebAdmin"})," Web\u30b5\u30fc\u30d0\u30fc\u306b HTTPS \u3092\u4ecb\u3057\u3066\u63a5\u7d9a\u3067\u304d\u307e\u3059\u3002 \u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u30c1\u30a7\u30c3\u30af\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"HTTPS-\u30dd\u30fc\u30c8",children:"HTTPS \u30dd\u30fc\u30c8"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"HTTPS\u3092\u53d7\u3051\u5165\u308c\u308b"})," \u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u6709\u52b9\u306a\u5834\u5408\u3001",(0,s.jsx)(n.code,{children:"WebAdmin"})," Web\u30b5\u30fc\u30d0\u30fc\u3078\u306e HTTPS\u63a5\u7d9a\u306b\u4f7f\u7528\u3059\u308b\u30dd\u30fc\u30c8\u756a\u53f7\u3067\u3059\u3002 \u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u306f 7443 \u3067\u3059\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u8a8d\u8a3c\u30d5\u30a9\u30eb\u30c0\u30d1\u30b9",children:"\u8a8d\u8a3c\u30d5\u30a9\u30eb\u30c0\u30d1\u30b9"}),"\n",(0,s.jsx)(n.p,{children:"TLS\u8a3c\u660e\u66f8\u30d5\u30a1\u30a4\u30eb\u304c\u7f6e\u304b\u308c\u3066\u3044\u308b\u30d5\u30a9\u30eb\u30c0\u30fc\u306e\u30d1\u30b9\u3067\u3059\u3002 \u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u8a8d\u8a3c\u30d5\u30a9\u30eb\u30c0\u30d1\u30b9\u306f\u7a7a\u3067\u30014D \u307e\u305f\u306f 4D Server \u306f 4D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u7d44\u307f\u8fbc\u307e\u308c\u305f\u8a3c\u660e\u66f8\u30d5\u30a1\u30a4\u30eb\u3092\u4f7f\u7528\u3057\u307e\u3059 (\u30ab\u30b9\u30bf\u30e0\u8a3c\u660e\u66f8\u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u30fc\u306e\u96a3\u306b\u4fdd\u5b58\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059)\u3002"}),"\n",(0,s.jsx)(n.h4,{id:"\u30c7\u30d0\u30c3\u30b0\u30ed\u30b0\u30e2\u30fc\u30c9",children:"\u30c7\u30d0\u30c3\u30b0\u30ed\u30b0\u30e2\u30fc\u30c9"}),"\n",(0,s.jsxs)(n.p,{children:['HTTP\u30ea\u30af\u30a8\u30b9\u30c8\u30ed\u30b0\u30d5\u30a1\u30a4\u30eb (\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e "Logs" \u30d5\u30a9\u30eb\u30c0\u30fc\u306b\u683c\u7d0d\u3055\u308c\u3066\u3044\u308b HTTPDebugLog_',(0,s.jsx)(n.em,{children:"nn"}),".txt (nn \u306f\u30d5\u30a1\u30a4\u30eb\u756a\u53f7)) \u306e\u72b6\u614b\u3084\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u6b21\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304b\u3089\u9078\u629e\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7121\u52b9\u5316"})," (\u30c7\u30d5\u30a9\u30eb\u30c8)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"body\u30d1\u30fc\u30c4\u3092\u5168\u3066"})," - \u30ec\u30b9\u30dd\u30f3\u30b9\u304a\u3088\u3073\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u30dc\u30c7\u30a3\u30d1\u30fc\u30c4\u3092\u542b\u3081\u308b\u5f62\u3067\u6709\u52b9\u5316\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"body\u30d1\u30fc\u30c4\u3092\u542b\u3081\u306a\u3044"})," - \u30dc\u30c7\u30a3\u30d1\u30fc\u30c4\u3092\u542b\u3081\u306a\u3044\u5f62\u3067\u6709\u52b9\u5316 (\u30dc\u30c7\u30a3\u30b6\u30a4\u30ba\u306f\u63d0\u4f9b\u3055\u308c\u307e\u3059)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u30ea\u30af\u30a8\u30b9\u30c8\u306ebody"})," - \u30ea\u30af\u30a8\u30b9\u30c8\u306e\u30dc\u30c7\u30a3\u30d1\u30fc\u30c4\u306e\u307f\u3092\u542b\u3081\u308b\u5f62\u3067\u6709\u52b9\u5316\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u30ec\u30b9\u30dd\u30f3\u30b9\u306ebody"})," - \u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u30dc\u30c7\u30a3\u30d1\u30fc\u30c4\u306e\u307f\u3092\u542b\u3081\u308b\u5f62\u3067\u6709\u52b9\u5316\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"\u30a2\u30af\u30bb\u30b9\u30ad\u30fc",children:"\u30a2\u30af\u30bb\u30b9\u30ad\u30fc"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"WebAdmin"})," Web\u30b5\u30fc\u30d0\u30fc\u3078\u306e URL\u7d4c\u7531\u30a2\u30af\u30bb\u30b9\u306e\u30ed\u30c3\u30af\u3092\u89e3\u9664\u3059\u308b\u306b\u306f\u3001\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u306e\u5b9a\u7fa9\u306f\u5fc5\u9808\u3067\u3059 (4D\u30e1\u30cb\u30e5\u30fc\u30b3\u30de\u30f3\u30c9\u306b\u3088\u308b\u30a2\u30af\u30bb\u30b9\u306b\u306f\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u306f\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093)\u3002 \u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u304c\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001",(0,s.jsx)(n.a,{href:"/docs/ja/20-R4/Admin/dataExplorer",children:"\u30c7\u30fc\u30bf\u30a8\u30af\u30b9\u30d7\u30ed\u30fc\u30e9\u30fc\u30da\u30fc\u30b8"})," \u306a\u3069\u306e Web\u7ba1\u7406\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u306b Web\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f7f\u3063\u3066 URL\u3092\u4ecb\u3057\u305f\u63a5\u7d9a\u306f\u3067\u304d\u307e\u305b\u3093\u3002 \u63a5\u7d9a\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u3042\u3063\u305f\u5834\u5408\u306b\u306f\u3001\u30a8\u30e9\u30fc\u30da\u30fc\u30b8\u304c\u8fd4\u3055\u308c\u307e\u3059:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"alt-text",src:i(176728).A+"",width:"193",height:"126"})}),"\n",(0,s.jsx)(n.p,{children:"\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u306f\u30d1\u30b9\u30ef\u30fc\u30c9\u306b\u4f3c\u3066\u3044\u307e\u3059\u304c\u3001\u30ed\u30b0\u30a4\u30f3\u3068\u306f\u95a2\u4fc2\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u65b0\u3057\u3044\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u3092\u5b9a\u7fa9\u3059\u308b\u306b\u306f\u3001",(0,s.jsx)(n.strong,{children:"\u5b9a\u7fa9"})," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u306e\u6587\u5b57\u5217\u3092\u5165\u529b\u3057\u3066 ",(0,s.jsx)(n.strong,{children:"OK"})," \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002 \u3059\u308b\u3068\u3001\u30dc\u30bf\u30f3\u30e9\u30d9\u30eb\u304c ",(0,s.jsx)(n.strong,{children:"\u7de8\u96c6"})," \u306b\u5909\u308f\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u3092\u7de8\u96c6\u3059\u308b\u306b\u306f\u3001",(0,s.jsx)(n.strong,{children:"\u7de8\u96c6"})," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9\u306b\u65b0\u3057\u3044\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u306e\u6587\u5b57\u5217\u3092\u5165\u529b\u3057\u3066 ",(0,s.jsx)(n.strong,{children:"OK"})," \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u65b0\u3057\u3044\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u3092\u524a\u9664\u3059\u308b\u306b\u306f\u3001",(0,s.jsx)(n.strong,{children:"\u7de8\u96c6"})," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9\u306e\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u6b04\u3092\u7a7a\u306b\u3057\u3066 ",(0,s.jsx)(n.strong,{children:"OK"})," \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"Qodly-Studio-\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u6709\u52b9\u5316\u3059\u308b",children:"Qodly Studio \u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u6709\u52b9\u5316\u3059\u308b"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001Qodly Studio \u30e9\u30a4\u30bb\u30f3\u30b9\u304c\u6709\u52b9\u306a\u5834\u5408\u306b\u306e\u307f\u8868\u793a\u3055\u308c\u307e\u3059\u3002"})}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u3088\u308a\u30014D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30ec\u30d9\u30eb\u3067\u306e ",(0,s.jsx)(n.a,{href:"/docs/ja/20-R4/WebServer/qodly-studio",children:"Qodly Studio"})," \u3078\u306e\u30e6\u30fc\u30b6\u30fc\u30a2\u30af\u30bb\u30b9\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002 \u307e\u305f\u3001",(0,s.jsx)(n.a,{href:"/docs/ja/20-R4/settings/web#qodly-studio-%E3%81%B8%E3%81%AE%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%82%92%E6%9C%89%E5%8A%B9%E5%8C%96%E3%81%99%E3%82%8B",children:"\u5404\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30ec\u30d9\u30eb\u3067\u3082\u30a2\u30af\u30bb\u30b9\u3092\u6709\u52b9"})," \u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"WebAdmin-\u306e\u30d8\u30c3\u30c9\u30ec\u30b9\u8a2d\u5b9a",children:"WebAdmin \u306e\u30d8\u30c3\u30c9\u30ec\u30b9\u8a2d\u5b9a"}),"\n",(0,s.jsxs)(n.p,{children:["\u3059\u3079\u3066\u306e ",(0,s.jsx)(n.a,{href:"#webadmin-%E8%A8%AD%E5%AE%9A",children:"WebAdmin \u8a2d\u5b9a"})," \u306f\u3001",(0,s.jsx)(n.code,{children:"WebAdmin.4DSettings"})," \u30d5\u30a1\u30a4\u30eb\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002 4D \u304a\u3088\u3073 4D Server \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u6bce\u306b\u30c7\u30d5\u30a9\u30eb\u30c8\u306e ",(0,s.jsx)(n.code,{children:"WebAdmin.4DSettings"})," \u30d5\u30a1\u30a4\u30eb\u304c 1\u3064\u5b58\u5728\u3057\u3001\u540c\u3058\u30db\u30b9\u30c8\u30de\u30b7\u30f3\u4e0a\u3067\u8907\u6570\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u904b\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["4D \u304a\u3088\u3073 4D Server \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30d8\u30c3\u30c9\u30ec\u30b9\u3067\u5b9f\u884c\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e ",(0,s.jsx)(n.code,{children:"WebAdmin.4DSettings"})," \u30d5\u30a1\u30a4\u30eb\u3092\u8a2d\u5b9a\u3057\u3066\u4f7f\u7528\u3059\u308b\u304b\u3001\u30ab\u30b9\u30bf\u30e0\u306e ",(0,s.jsx)(n.code,{children:".4DSettings"})," \u30d5\u30a1\u30a4\u30eb\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u30d5\u30a1\u30a4\u30eb\u306e\u5185\u5bb9\u3092\u8a2d\u5b9a\u3059\u308b\u306b\u306f\u3001\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3092\u6301\u3064 4D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e",(0,s.jsx)(n.a,{href:"#%E8%A8%AD%E5%AE%9A%E3%83%80%E3%82%A4%E3%82%A2%E3%83%AD%E3%82%B0%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9",children:"WebAdmin\u8a2d\u5b9a\u30c0\u30a4\u30a2\u30ed\u30b0"})," \u3092\u4f7f\u7528\u3057\u3001\u305d\u306e\u5f8c\u30d8\u30c3\u30c9\u30ec\u30b9\u3067\u5b9f\u884c\u3057\u307e\u3059\u3002 \u3053\u306e\u3068\u304d\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e ",(0,s.jsx)(n.code,{children:"WebAdmin.4DSettings"})," \u30d5\u30a1\u30a4\u30eb\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u307e\u305f\u3001\u30ab\u30b9\u30bf\u30e0\u306e ",(0,s.jsx)(n.code,{children:".4DSettings"})," \u30d5\u30a1\u30a4\u30eb (xml\u5f62\u5f0f) \u3092\u8a2d\u5b9a\u3057\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u30d5\u30a1\u30a4\u30eb\u306e\u4ee3\u308f\u308a\u306b\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u6a5f\u80fd\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u305f\u3081\u306b\u3001",(0,s.jsx)(n.a,{href:"/docs/ja/20-R4/Admin/cli",children:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u30fb\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9"})," \u3067\u306f\u3044\u304f\u3064\u304b\u306e\u5c02\u7528\u306e\u5f15\u6570\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:".4DSettings"})," \u30d5\u30a1\u30a4\u30eb\u306b\u304a\u3044\u3066\u3001\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u306f\u5e73\u6587\u3067\u306f\u4fdd\u5b58\u3055\u308c\u307e\u305b\u3093\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'"%HOMEPATH%\\Desktop\\4D Server.exe" MyApp.4DLink --webadmin-access-key \n    "my Fabulous AccessKey" --webadmin-auto-start true   \n    --webadmin-store-settings\n\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u8a8d\u8a3c\u3068\u30bb\u30c3\u30b7\u30e7\u30f3",children:"\u8a8d\u8a3c\u3068\u30bb\u30c3\u30b7\u30e7\u30f3"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u4e8b\u524d\u306b\u672c\u4eba\u78ba\u8a8d\u305b\u305a\u306b URL\u7d4c\u7531\u3067 Web\u7ba1\u7406\u30da\u30fc\u30b8\u306b\u30a2\u30af\u30bb\u30b9\u3057\u305f\u5834\u5408\u3001\u8a8d\u8a3c\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002 \u30e6\u30fc\u30b6\u30fc\u306f\u3001\u8a8d\u8a3c\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9\u306b ",(0,s.jsx)(n.a,{href:"#%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%82%AD%E3%83%BC",children:"\u30a2\u30af\u30bb\u30b9\u30ad\u30fc"})," \u3092\u5165\u529b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 ",(0,s.jsx)(n.code,{children:"WebAdmin"})," \u8a2d\u5b9a\u3067\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u304c\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306b\u306f\u3001URL\u7d4c\u7531\u306e\u30a2\u30af\u30bb\u30b9\u306f\u3067\u304d\u307e\u305b\u3093\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["4D \u307e\u305f\u306f 4D Server \u306e\u30e1\u30cb\u30e5\u30fc\u9805\u76ee (",(0,s.jsx)(n.strong,{children:"\u30ec\u30b3\u30fc\u30c9 \uff1e \u30c7\u30fc\u30bf\u30a8\u30af\u30b9\u30d7\u30ed\u30fc\u30e9\u30fc"})," \u307e\u305f\u306f ",(0,s.jsx)(n.strong,{children:"\u30a6\u30a3\u30f3\u30c9\u30a6 \uff1e \u30c7\u30fc\u30bf\u30a8\u30af\u30b9\u30d7\u30ed\u30fc\u30e9\u30fc"})," (4D Server) \u306a\u3069) \u304b\u3089 Web\u7ba1\u7406\u30da\u30fc\u30b8\u306b\u76f4\u63a5\u30a2\u30af\u30bb\u30b9\u3057\u305f\u5834\u5408\u3001\u30a2\u30af\u30bb\u30b9\u306f\u8a8d\u8a3c\u306a\u3057\u3067\u8a31\u53ef\u3055\u308c\u3001\u30e6\u30fc\u30b6\u30fc\u306f\u81ea\u52d5\u7684\u306b\u8a8d\u8a3c\u3055\u308c\u307e\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:['\u30a2\u30af\u30bb\u30b9\u304c\u8a31\u53ef\u3055\u308c\u308b\u3068\u30014D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u4e0a\u306b "WebAdmin" \u6a29\u9650\u3092\u6301\u3064 Web',(0,s.jsx)(n.a,{href:"/docs/ja/20-R4/WebServer/sessions",children:"\u30bb\u30c3\u30b7\u30e7\u30f3"}),' \u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002 \u30ab\u30ec\u30f3\u30c8\u30bb\u30c3\u30b7\u30e7\u30f3\u304c "WebAdmin" \u6a29\u9650\u3092\u6301\u3063\u3066\u3044\u308b\u9650\u308a\u3001',(0,s.jsx)(n.code,{children:"WebAdmin"})," \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u8981\u6c42\u3055\u308c\u305f\u30da\u30fc\u30b8\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"]})]})}function x(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},221020:(e,n,i)=>{var s=i(296540),d=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function h(e,n,i){var s,r={},h=null,o=null;for(s in void 0!==i&&(h=""+i),void 0!==n.key&&(h=""+n.key),void 0!==n.ref&&(o=n.ref),n)l.call(n,s)&&!t.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:d,type:e,key:h,ref:o,props:r,_owner:c.current}}n.Fragment=r,n.jsx=h,n.jsxs=h},474848:(e,n,i)=>{e.exports=i(221020)},176728:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/accessKey-30f179ff95de611714487b2467b3bed6.png"},941609:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/waMenu1-8cc55577b6eb6a9cbe4ddd02b766d0c8.png"},850898:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/waMenu2-972bfa6edeb61987599802e7665b50e9.png"},482536:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/waSettings-061bfd4438352b9f6e272f496fe01ac4.png"},255112:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/waSettings2-ec384a33ca25a5cd6198e8da121bbc75.png"},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var s=i(296540);const d={},r=s.createContext(d);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);