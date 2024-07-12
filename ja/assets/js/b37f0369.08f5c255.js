/*! For license information please see b37f0369.08f5c255.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90417],{389543:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>T,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=n(474848),t=n(28453);const i={id:"http-server",title:"HTTP\u30b5\u30fc\u30d0\u30fc\u30da\u30fc\u30b8"},l=void 0,o={id:"ServerWindow/http-server",title:"HTTP\u30b5\u30fc\u30d0\u30fc\u30da\u30fc\u30b8",description:"HTTP\u30b5\u30fc\u30d0\u30fc \u30da\u30fc\u30b8\u306b\u306f\u30014D Server \u306e Web\u30b5\u30fc\u30d0\u30fc\u3084 SOAP\u30b5\u30fc\u30d0\u30fc\u306b\u95a2\u3059\u308b\u60c5\u5831\u304c\u96c6\u3081\u3089\u308c\u3066\u3044\u307e\u3059\u3002 Web\u30b5\u30fc\u30d0\u30fc\u306f\u3001HTML\u30da\u30fc\u30b8\u3084\u30d4\u30af\u30c1\u30e3\u30fc\u306a\u3069\u306e Web\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u516c\u958b\u3092\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002 SOAP\u30b5\u30fc\u30d0\u30fc\u306f Web\u30b5\u30fc\u30d3\u30b9\u306e\u516c\u958b\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002 \u3053\u308c\u3089 2\u3064\u306e\u30b5\u30fc\u30d0\u30fc\u306f\u30014D Server \u306e\u5185\u90e8\u7684\u306a HTTP\u30b5\u30fc\u30d0\u30fc\u306b\u4f9d\u5b58\u3057\u3066\u3044\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R5/ServerWindow/http-server.md",sourceDirName:"ServerWindow",slug:"/ServerWindow/http-server",permalink:"/docs/ja/20-R5/ServerWindow/http-server",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fhttp-server.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"http-server",title:"HTTP\u30b5\u30fc\u30d0\u30fc\u30da\u30fc\u30b8"},sidebar:"docs",previous:{title:"SQL\u30b5\u30fc\u30d0\u30fc\u30da\u30fc\u30b8",permalink:"/docs/ja/20-R5/ServerWindow/sql-server"},next:{title:"\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30e2\u30cb\u30bf\u30fc\u30da\u30fc\u30b8",permalink:"/docs/ja/20-R5/ServerWindow/real-time-monitor"}},c={},d=[{value:"HTTP\u30b5\u30fc\u30d0\u30fc\u958b\u59cb/\u505c\u6b62",id:"http\u30b5\u30fc\u30d0\u30fc\u958b\u59cb\u505c\u6b62",level:2},{value:"Web\u60c5\u5831",id:"web\u60c5\u5831",level:2},{value:"SOAP\u60c5\u5831",id:"soap\u60c5\u5831",level:2},{value:"HTTP\u30b5\u30fc\u30d0\u30fc\u8a2d\u5b9a",id:"http\u30b5\u30fc\u30d0\u30fc\u8a2d\u5b9a",level:2}];function h(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"HTTP\u30b5\u30fc\u30d0\u30fc"})," \u30da\u30fc\u30b8\u306b\u306f\u30014D Server \u306e Web\u30b5\u30fc\u30d0\u30fc\u3084 SOAP\u30b5\u30fc\u30d0\u30fc\u306b\u95a2\u3059\u308b\u60c5\u5831\u304c\u96c6\u3081\u3089\u308c\u3066\u3044\u307e\u3059\u3002 Web\u30b5\u30fc\u30d0\u30fc\u306f\u3001HTML\u30da\u30fc\u30b8\u3084\u30d4\u30af\u30c1\u30e3\u30fc\u306a\u3069\u306e Web\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u516c\u958b\u3092\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002 SOAP\u30b5\u30fc\u30d0\u30fc\u306f Web\u30b5\u30fc\u30d3\u30b9\u306e\u516c\u958b\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002 \u3053\u308c\u3089 2\u3064\u306e\u30b5\u30fc\u30d0\u30fc\u306f\u30014D Server \u306e\u5185\u90e8\u7684\u306a HTTP\u30b5\u30fc\u30d0\u30fc\u306b\u4f9d\u5b58\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:n(860760).A+"",width:"1036",height:"701"})}),"\n",(0,s.jsx)(r.p,{children:"\u30da\u30fc\u30b8\u306e\u4e0a\u90e8\u306b\u306f\u30014D Server \u306e HTTP\u30b5\u30fc\u30d0\u30fc\u306e\u73fe\u5728\u306e\u72b6\u6cc1\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u72b6\u6cc1"}),": \u958b\u59cb\u307e\u305f\u306f\u505c\u6b62"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u958b\u59cb\u6642\u523b"}),": HTTP\u30b5\u30fc\u30d0\u30fc\u306e\u8d77\u52d5\u65e5\u3068\u6642\u523b\u3002"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u52d5\u4f5c\u6642\u9593"}),": HTTP\u30b5\u30fc\u30d0\u30fc\u304c\u6700\u5f8c\u306b\u958b\u59cb\u3055\u308c\u3066\u304b\u3089\u306e\u7d4c\u904e\u6642\u9593\u3002"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u7dcfHTTP\u30d2\u30c3\u30c8\u6570"}),": HTTP\u30b5\u30fc\u30d0\u30fc\u304c\u958b\u59cb\u3055\u308c\u3066\u304b\u3089\u3001\u30b5\u30fc\u30d0\u30fc\u304c\u53d7\u4fe1\u3057\u305f\u30ed\u30fc\u30ec\u30d9\u30eb\u306e HTTP\u30d2\u30c3\u30c8\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"http\u30b5\u30fc\u30d0\u30fc\u958b\u59cb\u505c\u6b62",children:"HTTP\u30b5\u30fc\u30d0\u30fc\u958b\u59cb/\u505c\u6b62"}),"\n",(0,s.jsx)(r.p,{children:"\u3053\u306e\u30dc\u30bf\u30f3\u306f\u5207\u308a\u66ff\u3048\u8868\u793a\u3055\u308c\u30014D Server HTTP\u30b5\u30fc\u30d0\u30fc\u3092\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:['HTTP\u30b5\u30fc\u30d0\u30fc\u306e\u72b6\u614b\u304c "\u958b\u59cb" \u306e\u5834\u5408\u3001\u30dc\u30bf\u30f3\u306e\u30bf\u30a4\u30c8\u30eb\u306f ',(0,s.jsx)(r.strong,{children:"HTTP\u30b5\u30fc\u30d0\u30fc\u505c\u6b62"})," \u306b\u306a\u308a\u307e\u3059\u3002 \u3053\u306e\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u30014D Server HTTP\u30b5\u30fc\u30d0\u30fc\u306f\u5373\u5ea7\u306b\u505c\u6b62\u3057\u3001Web\u30b5\u30fc\u30d0\u30fc\u3001REST\u30b5\u30fc\u30d0\u30fc\u3001\u304a\u3088\u3073 SOAP\u30b5\u30fc\u30d0\u30fc\u306f\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u4ed8\u3051\u306a\u304f\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(r.li,{children:['HTTP\u30b5\u30fc\u30d0\u30fc\u306e\u72b6\u614b\u304c "\u505c\u6b62" \u306e\u5834\u5408\u3001\u30dc\u30bf\u30f3\u306e\u30bf\u30a4\u30c8\u30eb\u306f ',(0,s.jsx)(r.strong,{children:"HTTP\u30b5\u30fc\u30d0\u30fc\u958b\u59cb"})," \u306b\u306a\u308a\u307e\u3059\u3002 \u3053\u306e\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u30014D Server HTTP\u30b5\u30fc\u30d0\u30fc\u306f\u5373\u5ea7\u306b\u958b\u59cb\u3057\u3001Web\u3001REST\u3001\u304a\u3088\u3073 SOAP\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u4ed8\u3051\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"HTTP\u30b5\u30fc\u30d0\u30fc\u3092\u958b\u59cb\u3059\u308b\u306b\u306f\u9069\u5207\u306a\u30e9\u30a4\u30bb\u30f3\u30b9\u304c\u5fc5\u8981\u3067\u3059\u3002"}),"\n",(0,s.jsx)(r.p,{children:"\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u8a2d\u5b9a\u3067\u8a2d\u5b9a\u3057\u3066\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u8d77\u52d5\u3068\u540c\u6642\u306b\u3001\u307e\u305f\u306f\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f7f\u7528\u3057\u3066\u5fc5\u8981\u306a\u6642\u306b\u3001HTTP\u30b5\u30fc\u30d0\u30fc\u3092\u81ea\u52d5\u3067\u958b\u59cb\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"web\u60c5\u5831",children:"Web\u60c5\u5831"}),"\n",(0,s.jsx)(r.p,{children:"\u3053\u306e\u30a8\u30ea\u30a2\u306b\u306f\u30014D Server \u306e Web\u30b5\u30fc\u30d0\u30fc\u306b\u95a2\u3059\u308b\u60c5\u5831\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Web \u30ea\u30af\u30a8\u30b9\u30c8"}),": \u53d7\u3051\u5165\u308c\u3001\u307e\u305f\u306f\u62d2\u5426\u3002 \u3053\u306e\u60c5\u5831\u306f Web\u30b5\u30fc\u30d0\u30fc\u304c\u6709\u52b9\u304b\u3069\u3046\u304b\u3092\u793a\u3057\u307e\u3059\u3002 Web\u30b5\u30fc\u30d0\u30fc\u306f\u76f4\u63a5 HTTP\u30b5\u30fc\u30d0\u30fc\u306b\u30ea\u30f3\u30af\u3057\u3066\u3044\u308b\u305f\u3081\u3001HTTP\u30b5\u30fc\u30d0\u30fc\u304c\u958b\u59cb\u3055\u308c\u3066\u3044\u308c\u3070 Web\u30ea\u30af\u30a8\u30b9\u30c8\u306f\u53d7\u4fe1\u3055\u308c\u3001\u505c\u6b62\u3055\u308c\u3066\u3044\u308c\u3070\u62d2\u5426\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u6700\u5927\u63a5\u7d9a\u6570"}),": \u8a31\u53ef\u3055\u308c\u308b Web\u63a5\u7d9a\u306e\u6700\u5927\u6570\u3002 \u3053\u306e\u5024\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u30de\u30b7\u30f3\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u30e9\u30a4\u30bb\u30f3\u30b9\u306b\u3088\u308a\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"soap\u60c5\u5831",children:"SOAP\u60c5\u5831"}),"\n",(0,s.jsx)(r.p,{children:"\u3053\u306e\u30a8\u30ea\u30a2\u306b\u306f\u30014D Server \u306e SOAP\u30b5\u30fc\u30d0\u30fc\u306b\u95a2\u3059\u308b\u60c5\u5831\u304c\u8868\u793a\u3055\u308c\u3001\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30dc\u30bf\u30f3\u3082\u4e00\u3064\u542b\u307e\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"SOAP \u30ea\u30af\u30a8\u30b9\u30c8"}),": \u53d7\u3051\u5165\u308c\u3001\u307e\u305f\u306f\u62d2\u5426\u3002 \u3053\u306e\u60c5\u5831\u306f SOAP\u30b5\u30fc\u30d0\u30fc\u304c\u6709\u52b9\u304b\u3069\u3046\u304b\u3092\u793a\u3057\u307e\u3059\u3002 SOAP\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u5165\u308c\u308b\u305f\u3081\u306b\u306f\u3001HTTP\u30b5\u30fc\u30d0\u30fc\u304c\u958b\u59cb\u3055\u308c\u3001\u304b\u3064 SOAP\u30b5\u30fc\u30d0\u30fc\u304c\u660e\u793a\u7684\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u5165\u308c\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093 (\u30dc\u30bf\u30f3\u306e\u8aac\u660e\u53c2\u7167)\u3002"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u6700\u5927\u63a5\u7d9a\u6570"}),": \u8a31\u53ef\u3055\u308c\u308b SOAP\u63a5\u7d9a\u306e\u6700\u5927\u6570\u3002 \u3053\u306e\u5024\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u30de\u30b7\u30f3\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u30e9\u30a4\u30bb\u30f3\u30b9\u306b\u3088\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"SOAP\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u5165\u308c\u308b/\u53d7\u3051\u5165\u308c\u306a\u3044"}),' \u30dc\u30bf\u30f3: \u3053\u306e\u30dc\u30bf\u30f3\u306f\u5207\u308a\u66ff\u3048\u8868\u793a\u3055\u308c\u30014D Server SOAP\u30b5\u30fc\u30d0\u30fc\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002 \u3053\u306e\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u8a2d\u5b9a\u306e "Web\u30b5\u30fc\u30d3\u30b9" \u30da\u30fc\u30b8\u306e ',(0,s.jsx)(r.strong,{children:"Web\u30b5\u30fc\u30d3\u30b9\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u8a31\u53ef\u3059\u308b"})," \u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u5909\u66f4\u3055\u308c\u307e\u3059\u3002 \u307e\u305f\u3001",(0,s.jsx)(r.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1636.html",children:(0,s.jsx)(r.code,{children:"SOAP REJECT NEW REQUESTS"})})," \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u3063\u3066\u65b0\u898f\u306e SOAP\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u62d2\u5426\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u304c\u3001\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f ",(0,s.jsx)(r.strong,{children:"Web\u30b5\u30fc\u30d3\u30b9\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u8a31\u53ef\u3059\u308b"})," \u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u5024\u3092\u5909\u66f4\u3057\u307e\u305b\u3093\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["HTTP\u30b5\u30fc\u30d0\u30fc\u505c\u6b62\u4e2d\u306b ",(0,s.jsx)(r.strong,{children:"SOAP\u30ea\u30af\u30a8\u30b9\u30c8\u53d7\u3051\u5165\u308c\u308b"})," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u30014D \u306f\u81ea\u52d5\u3067 HTTP\u30b5\u30fc\u30d0\u30fc\u3092\u958b\u59cb\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(r.h2,{id:"http\u30b5\u30fc\u30d0\u30fc\u8a2d\u5b9a",children:"HTTP\u30b5\u30fc\u30d0\u30fc\u8a2d\u5b9a"}),"\n",(0,s.jsx)(r.p,{children:"\u3053\u306e\u30a8\u30ea\u30a2\u306b\u306f\u3001HTTP\u30b5\u30fc\u30d0\u30fc\u306e\u8a2d\u5b9a\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3084\u52d5\u4f5c\u306b\u95a2\u3059\u308b\u60c5\u5831\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u958b\u59cb\u6642\u306b\u81ea\u52d5\u8d77\u52d5"}),": \u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u8a2d\u5b9a\u3067\u8a2d\u5b9a\u3055\u308c\u305f\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3002"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"HTTP \u30b5\u30fc\u30d0\u30fc\u30d7\u30ed\u30bb\u30b9 (\u4f7f\u7528/\u7dcf\u8a08)"}),": \u30b5\u30fc\u30d0\u30fc\u4e0a\u3067\u4f5c\u6210\u3055\u308c\u305fHTTP\u30d7\u30ed\u30bb\u30b9\u6570 (\u73fe\u5728\u306e\u30d7\u30ed\u30bb\u30b9\u6570 / \u4f5c\u6210\u3055\u308c\u305f\u30d7\u30ed\u30bb\u30b9\u306e\u7dcf\u6570)\u3002"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u30e1\u30e2\u30ea"}),": HTTP\u30b5\u30fc\u30d0\u30fc\u30ad\u30e3\u30c3\u30b7\u30e5\u30e1\u30e2\u30ea\u306e\u30b5\u30a4\u30ba ( \u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u5b9f\u969b\u306b\u4f7f\u7528\u3057\u3066\u3044\u308b\u30b5\u30a4\u30ba / \u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u8a2d\u5b9a\u3067\u7406\u8ad6\u7684\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u305f\u6700\u5927\u30b5\u30a4\u30ba)\u3002 ",(0,s.jsx)(r.strong,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u30af\u30ea\u30a2"})," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u73fe\u5728\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u7a7a\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u5f85\u53d7IP"}),"\u3001",(0,s.jsx)(r.strong,{children:"HTTP\u30dd\u30fc\u30c8"})," (\u30c7\u30d5\u30a9\u30eb\u30c8\u306f 80)\u3001HTTP\u63a5\u7d9a\u7528\u306e ",(0,s.jsx)(r.strong,{children:"TSL\u6709\u52b9"})," (4D \u3068 SQL\u63a5\u7d9a\u306f\u5225\u8a2d\u5b9a)\u3001\u304a\u3088\u3073 ",(0,s.jsx)(r.strong,{children:"HTTPS\u30dd\u30fc\u30c8"}),": \u3053\u308c\u3089\u306f\u3001\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u8a2d\u5b9a\u307e\u305f\u306f\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u306b\u3088\u308a\u8a2d\u5b9a\u3055\u308c\u305f\u3001HTTP\u30b5\u30fc\u30d0\u30fc\u306e\u73fe\u5728\u306e ",(0,s.jsx)(r.a,{href:"/docs/ja/20-R5/WebServer/webServerConfig",children:"\u8a2d\u5b9a\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc"})," \u3092\u8868\u793a\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u30ed\u30b0\u30d5\u30a1\u30a4\u30eb\u60c5\u5831"}),": \u540d\u79f0\u3001\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3001\u304a\u3088\u3073 HTTP\u30b5\u30fc\u30d0\u30fc\u306e\u6b21\u56de\u306e\u81ea\u52d5\u30ed\u30b0\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u306e\u65e5\u4ed8 (logweb.txt \u30d5\u30a1\u30a4\u30eb)\u3002"]}),"\n"]})]})}function T(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},221020:(e,r,n)=>{var s=n(296540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var s,i={},d=null,h=null;for(s in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(h=r.ref),r)l.call(r,s)&&!c.hasOwnProperty(s)&&(i[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===i[s]&&(i[s]=r[s]);return{$$typeof:t,type:e,key:d,ref:h,props:i,_owner:o.current}}r.Fragment=i,r.jsx=d,r.jsxs=d},474848:(e,r,n)=>{e.exports=n(221020)},860760:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/server-admin-web-page-bc12a227b63b011be095b5746524f47a.png"},28453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>o});var s=n(296540);const t={},i=s.createContext(t);function l(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);