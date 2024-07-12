/*! For license information please see e341c12c.4198fded.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[37575],{149525:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>j,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var r=s(474848),i=s(28453);const l={id:"basics",title:"\u30c7\u30d0\u30c3\u30ac\u30fc"},c=void 0,d={id:"Debugging/basics",title:"\u30c7\u30d0\u30c3\u30ac\u30fc",description:"\u30a8\u30e9\u30fc\u306f\u65e5\u5e38\u7684\u306a\u3082\u306e\u3067\u3059\u3002 \u76f8\u5f53\u884c\u6570\u306e\u30b3\u30fc\u30c9\u3092\u66f8\u3044\u3066\u3044\u308b\u306e\u306b\u30011\u3064\u3082\u30a8\u30e9\u30fc\u304c\u51fa\u306a\u3044\u3068\u3044\u3046\u306e\u306f\u975e\u5e38\u306b\u307e\u308c\u3067\u3059\u3002 \u3080\u3057\u308d\u3001\u30a8\u30e9\u30fc\u306b\u5bfe\u5fdc\u30fb\u4fee\u6b63\u3059\u308b\u3053\u3068\u306f\u666e\u901a\u306e\u3053\u3068\u306a\u306e\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20/Debugging/basics.md",sourceDirName:"Debugging",slug:"/Debugging/basics",permalink:"/docs/ja/20/Debugging/basics",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Debugging%2Fbasics.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"basics",title:"\u30c7\u30d0\u30c3\u30ac\u30fc"},sidebar:"docs",previous:{title:"\u5909\u63db\u30bf\u30b0",permalink:"/docs/ja/20/Tags/tags"},next:{title:"\u30c7\u30d0\u30c3\u30ac\u30fc",permalink:"/docs/ja/20/Debugging/debugger"}},t={},h=[{value:"\u30a8\u30e9\u30fc\u306e\u7a2e\u985e",id:"\u30a8\u30e9\u30fc\u306e\u7a2e\u985e",level:2},{value:"\u30bf\u30a4\u30d7\u30df\u30b9",id:"\u30bf\u30a4\u30d7\u30df\u30b9",level:3},{value:"\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u30a8\u30e9\u30fc",id:"\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u30a8\u30e9\u30fc",level:3},{value:"\u74b0\u5883\u30a8\u30e9\u30fc",id:"\u74b0\u5883\u30a8\u30e9\u30fc",level:3},{value:"\u8a2d\u8a08\u307e\u305f\u306f\u30ed\u30b8\u30c3\u30af\u30a8\u30e9\u30fc",id:"\u8a2d\u8a08\u307e\u305f\u306f\u30ed\u30b8\u30c3\u30af\u30a8\u30e9\u30fc",level:3},{value:"\u30e9\u30f3\u30bf\u30a4\u30e0\u30a8\u30e9\u30fc",id:"\u30e9\u30f3\u30bf\u30a4\u30e0\u30a8\u30e9\u30fc",level:3},{value:"\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u30a8\u30e9\u30fc\u30a6\u30a3\u30f3\u30c9\u30a6",id:"\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u30a8\u30e9\u30fc\u30a6\u30a3\u30f3\u30c9\u30a6",level:2},{value:"\u30c7\u30d0\u30c3\u30ac\u30fc",id:"\u30c7\u30d0\u30c3\u30ac\u30fc",level:2},{value:"\u30d6\u30ec\u30fc\u30af",id:"\u30d6\u30ec\u30fc\u30af",level:2}];function o(n){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"\u30a8\u30e9\u30fc\u306f\u65e5\u5e38\u7684\u306a\u3082\u306e\u3067\u3059\u3002 \u76f8\u5f53\u884c\u6570\u306e\u30b3\u30fc\u30c9\u3092\u66f8\u3044\u3066\u3044\u308b\u306e\u306b\u30011\u3064\u3082\u30a8\u30e9\u30fc\u304c\u51fa\u306a\u3044\u3068\u3044\u3046\u306e\u306f\u975e\u5e38\u306b\u307e\u308c\u3067\u3059\u3002 \u3080\u3057\u308d\u3001\u30a8\u30e9\u30fc\u306b\u5bfe\u5fdc\u30fb\u4fee\u6b63\u3059\u308b\u3053\u3068\u306f\u666e\u901a\u306e\u3053\u3068\u306a\u306e\u3067\u3059\u3002"}),"\n",(0,r.jsx)(e.p,{children:"4D \u306e\u958b\u767a\u74b0\u5883\u306b\u306f\u3001\u3042\u3089\u3086\u308b\u7a2e\u985e\u306e\u30a8\u30e9\u30fc\u306b\u5bfe\u5fdc\u3059\u308b\u305f\u3081\u306e\u30c7\u30d0\u30c3\u30b0\u30c4\u30fc\u30eb\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u30a8\u30e9\u30fc\u306e\u7a2e\u985e",children:"\u30a8\u30e9\u30fc\u306e\u7a2e\u985e"}),"\n",(0,r.jsx)(e.h3,{id:"\u30bf\u30a4\u30d7\u30df\u30b9",children:"\u30bf\u30a4\u30d7\u30df\u30b9"}),"\n",(0,r.jsx)(e.p,{children:"\u30bf\u30a4\u30d7\u30df\u30b9\u306f\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u30fc\u306b\u3088\u3063\u3066\u691c\u51fa\u3055\u308c\u307e\u3059\u3002 \u3053\u308c\u3089\u306f\u8d64\u8272\u3067\u793a\u3055\u308c\u3001\u30a6\u30a3\u30f3\u30c9\u30a6\u4e0b\u90e8\u306b\u8ffd\u52a0\u60c5\u5831\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002 \u4ee5\u4e0b\u306f\u30bf\u30a4\u30d7\u30df\u30b9\u306e\u4f8b\u3067\u3059:"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"\u30d6\u30ec\u30fc\u30af\u30dd\u30a4\u30f3\u30c8",src:s(353033).A+"",width:"1824",height:"980"})}),"\n",(0,r.jsx)(e.p,{children:"\u3053\u306e\u3088\u3046\u306a\u30bf\u30a4\u30d7\u30df\u30b9\u306f\u901a\u5e38\u3001\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u30a8\u30e9\u30fc\u306e\u539f\u56e0\u3068\u306a\u308a\u307e\u3059 (\u4e0a\u306e\u4f8b\u3067\u306f\u3001\u30c6\u30fc\u30d6\u30eb\u540d\u304c\u9593\u9055\u3063\u3066\u3044\u307e\u3059)\u3002 \u30b3\u30fc\u30c9\u306e\u8a72\u5f53\u884c\u306e\u7de8\u96c6\u3092\u78ba\u5b9a\u3059\u308b\u3068\u3001\u30a8\u30e9\u30fc\u306e\u8aac\u660e\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u3088\u3046\u306a\u5834\u5408\u30bf\u30a4\u30d7\u30df\u30b9\u3092\u4fee\u6b63\u3057\u3066 Enter\u30ad\u30fc\u3092\u62bc\u3059\u3068\u3001\u518d\u5ea6\u30b3\u30fc\u30c9\u306e\u691c\u8a3c\u304c\u304a\u3053\u306a\u308f\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u30a8\u30e9\u30fc",children:"\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u30a8\u30e9\u30fc"}),"\n",(0,r.jsxs)(e.p,{children:["\u30e1\u30bd\u30c3\u30c9\u306e\u5b9f\u884c\u6642\u306b\u9650\u3063\u3066\u3001\u3068\u3089\u3048\u308b\u3053\u3068\u306e\u3067\u304d\u308b\u30a8\u30e9\u30fc\u304c\u3042\u308a\u307e\u3059\u3002 ",(0,r.jsx)(e.a,{href:"#%E3%82%B7%E3%83%B3%E3%82%BF%E3%83%83%E3%82%AF%E3%82%B9%E3%82%A8%E3%83%A9%E3%83%BC%E3%82%A6%E3%82%A3%E3%83%B3%E3%83%89%E3%82%A6",children:"\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u30a8\u30e9\u30fc\u30a6\u30a3\u30f3\u30c9\u30a6"})," \u306f\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u969b\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002 \u4f8b:"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u30a8\u30e9\u30fc",src:s(61737).A+"",width:"642",height:"552"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u8a73\u7d30"})," \u30a8\u30ea\u30a2\u3092\u5c55\u958b\u3059\u308b\u3068\u3001\u6700\u65b0\u306e\u30a8\u30e9\u30fc\u3068\u756a\u53f7\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(e.h3,{id:"\u74b0\u5883\u30a8\u30e9\u30fc",children:"\u74b0\u5883\u30a8\u30e9\u30fc"}),"\n",(0,r.jsxs)(e.p,{children:["\u6642\u306b\u3001BLOB \u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306e\u5341\u5206\u306a\u30e1\u30e2\u30ea\u304c\u306a\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002 \u30c7\u30a3\u30b9\u30af\u4e0a\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3088\u3046\u3068\u3057\u305f\u6642\u306b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u304c\u5b58\u5728\u3057\u306a\u3044\u304b\u3001\u4ed6\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3088\u308a\u65e2\u306b\u958b\u304b\u308c\u3066\u3044\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002 \u3053\u306e\u3088\u3046\u306a\u30a8\u30e9\u30fc\u306f\u3001\u30b3\u30fc\u30c9\u3084\u305d\u306e\u66f8\u304d\u65b9\u3092\u76f4\u63a5\u306e\u539f\u56e0\u3068\u3057\u3066\u767a\u751f\u3059\u308b\u308f\u3051\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002 \u307b\u3068\u3093\u3069\u306e\u5834\u5408\u3001\u3053\u306e\u3088\u3046\u306a\u30a8\u30e9\u30fc\u306f ",(0,r.jsx)(e.code,{children:"ON ERR CALL"})," \u30b3\u30de\u30f3\u30c9\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f ",(0,r.jsx)(e.a,{href:"/docs/ja/20/Concepts/error-handling",children:"\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9"})," \u3067\u7c21\u5358\u306b\u5bfe\u51e6\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(e.h3,{id:"\u8a2d\u8a08\u307e\u305f\u306f\u30ed\u30b8\u30c3\u30af\u30a8\u30e9\u30fc",children:"\u8a2d\u8a08\u307e\u305f\u306f\u30ed\u30b8\u30c3\u30af\u30a8\u30e9\u30fc"}),"\n",(0,r.jsxs)(e.p,{children:['\u4e00\u822c\u306b\u3001\u3053\u308c\u3089\u306f\u767a\u898b\u304c\u6700\u3082\u96e3\u3057\u3044\u30bf\u30a4\u30d7\u306e\u30a8\u30e9\u30fc\u3067\u3059\u3002 \u3053\u308c\u307e\u3067\u306b\u8aac\u660e\u3057\u3066\u3044\u308b\u30a8\u30e9\u30fc\u306f\u3001\u30bf\u30a4\u30d7\u30df\u30b9\u3092\u9664\u3044\u3066\u3001"\u8a2d\u8a08\u307e\u305f\u306f\u30ed\u30b8\u30c3\u30af\u306e\u30a8\u30e9\u30fc" \u3068\u3044\u3046\u7bc4\u7587\u306b\u8a72\u5f53\u3057\u307e\u3059\u3002 \u3053\u308c\u3089\u3092\u691c\u77e5\u3059\u308b\u306b\u306f\u3001',(0,r.jsx)(e.a,{href:"/docs/ja/20/Debugging/debugger",children:"\u30c7\u30d0\u30c3\u30ac\u30fc"})," \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 \u4f8b:"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u307e\u3060\u521d\u671f\u5316\u3055\u308c\u3066\u3044\u306a\u3044\u5909\u6570\u3092\u7528\u3044\u3088\u3046\u3068\u3057\u305f\u305f\u3081\u3001",(0,r.jsx)(e.em,{children:"\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u30a8\u30e9\u30fc"})," \u304c\u767a\u751f\u3059\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:["\u9593\u9055\u3063\u305f\u5f15\u6570\u3092\u53d7\u3051\u53d6\u3063\u305f\u30b5\u30d6\u30eb\u30fc\u30c1\u30f3\u304c\u3001\u305d\u306e\u9593\u9055\u3063\u305f\u540d\u524d\u306b\u3088\u308a\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u958b\u3053\u3046\u3068\u3057\u305f\u305f\u3081\u3001",(0,r.jsx)(e.em,{children:"\u74b0\u5883\u30a8\u30e9\u30fc"})," \u304c\u767a\u751f\u3057\u3066\u3044\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u8a2d\u8a08\u307e\u305f\u306f\u30ed\u30b8\u30c3\u30af\u306e\u30a8\u30e9\u30fc\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306a\u5834\u5408\u3082\u3042\u308a\u307e\u3059:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"SAVE RECORD"})," \u30b3\u30de\u30f3\u30c9\u3092\u547c\u3073\u51fa\u3059\u969b\u306b\u3001\u5bfe\u8c61\u3068\u306a\u308b\u30ec\u30b3\u30fc\u30c9\u304c\u30ed\u30c3\u30af\u3055\u308c\u3066\u3044\u308b\u304b\u3069\u3046\u304b\u3092\u6700\u521d\u306b\u30c6\u30b9\u30c8\u3057\u306a\u304b\u3063\u305f\u305f\u3081\u306b\u3001\u30ec\u30b3\u30fc\u30c9\u304c\u6b63\u3057\u304f\u66f4\u65b0\u3055\u308c\u306a\u3044\u3002"]}),"\n",(0,r.jsx)(e.li,{children:"\u30aa\u30d7\u30b7\u30e7\u30f3\u5f15\u6570\u3092\u8ffd\u52a0\u3057\u305f\u72b6\u614b\u304c\u30c6\u30b9\u30c8\u3055\u308c\u3066\u3044\u306a\u3044\u305f\u3081\u3001\u30e1\u30bd\u30c3\u30c9\u304c\u60f3\u5b9a\u901a\u308a\u306b\u52d5\u4f5c\u3057\u306a\u3044\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u5834\u5408\u306b\u3088\u3063\u3066\u554f\u984c\u306e\u539f\u56e0\u306f\u3001\u5b9f\u969b\u306b\u4e2d\u65ad\u304c\u767a\u751f\u3057\u3066\u3044\u308b\u30b3\u30fc\u30c9\u90e8\u5206\u3067\u306f\u306a\u304f\u3001\u5916\u90e8\u306b\u3042\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"\u30e9\u30f3\u30bf\u30a4\u30e0\u30a8\u30e9\u30fc",children:"\u30e9\u30f3\u30bf\u30a4\u30e0\u30a8\u30e9\u30fc"}),"\n",(0,r.jsx)(e.p,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30e2\u30fc\u30c9\u3067\u306f\u3001\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc\u30e2\u30fc\u30c9\u3067\u306f\u6c7a\u3057\u3066\u898b\u3089\u308c\u306a\u3044\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3059\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002 \u6b21\u306b\u4f8b\u3092\u793a\u3057\u307e\u3059:"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"\u30e9\u30f3\u30bf\u30a4\u30e0\u30a8\u30e9\u30fc",src:s(297767).A+"",width:"662",height:"472"})}),"\n",(0,r.jsx)(e.p,{children:"\u554f\u984c\u306e\u539f\u56e0\u3092\u8fc5\u901f\u306b\u767a\u898b\u3059\u308b\u306b\u306f\u3001\u30e1\u30bd\u30c3\u30c9\u306e\u540d\u524d\u3068\u884c\u756a\u53f7\u3092\u8a18\u9332\u3057\u3001\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u30d5\u30a1\u30a4\u30eb\u306e\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc\u7248\u3092\u518d\u3073\u958b\u3044\u3066\u3001\u30e1\u30bd\u30c3\u30c9\u306e\u8a72\u5f53\u884c\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u30a8\u30e9\u30fc\u30a6\u30a3\u30f3\u30c9\u30a6",children:"\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u30a8\u30e9\u30fc\u30a6\u30a3\u30f3\u30c9\u30a6"}),"\n",(0,r.jsx)(e.p,{children:"\u30e1\u30bd\u30c3\u30c9\u306e\u5b9f\u884c\u304c\u505c\u6b62\u3055\u308c\u308b\u3068\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u30a8\u30e9\u30fc\u30a6\u30a3\u30f3\u30c9\u30a6\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002 \u3053\u308c\u306f\u4ee5\u4e0b\u306e\u7406\u7531\u3067\u8d77\u3053\u308a\u307e\u3059:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u4ee5\u964d\u306e\u30e1\u30bd\u30c3\u30c9\u5b9f\u884c\u3092\u59a8\u3052\u308b\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u3002"}),"\n",(0,r.jsxs)(e.li,{children:["\u30e1\u30bd\u30c3\u30c9\u304c False \u306e\u8868\u660e\u3092\u751f\u6210\u3057\u305f (",(0,r.jsx)(e.code,{children:"ASSERT"})," \u30b3\u30de\u30f3\u30c9\u53c2\u7167)\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u30a8\u30e9\u30fc",src:s(61737).A+"",width:"642",height:"552"})}),"\n",(0,r.jsx)(e.p,{children:"\u4e0a\u90e8\u30c6\u30ad\u30b9\u30c8\u30a8\u30ea\u30a2\u306b\u306f\u3001\u30a8\u30e9\u30fc\u306e\u8aac\u660e\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002 \u4e0b\u90e8\u30c6\u30ad\u30b9\u30c8\u30a8\u30ea\u30a2\u306b\u306f\u3001\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u6642\u306e\u5b9f\u884c\u884c\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u30a8\u30ea\u30a2\u306f\u30cf\u30a4\u30e9\u30a4\u30c8\u3055\u308c\u307e\u3059\u3002 \u8a73\u7d30\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30d7\u30ed\u30bb\u30b9\u306e\u30a8\u30e9\u30fc\u30b9\u30bf\u30c3\u30af\u3092\u8868\u793a\u3059\u308b\u30a8\u30ea\u30a2\u3092\u5c55\u958b\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u30a8\u30e9\u30fc\u30a6\u30a3\u30f3\u30c9\u30a6\u306b\u306f\u3044\u304f\u3064\u304b\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u7de8\u96c6"}),": \u3059\u3079\u3066\u306e\u30e1\u30bd\u30c3\u30c9\u5b9f\u884c\u304c\u4e2d\u65ad\u3055\u308c\u307e\u3059\u3002 4D \u306f\u30c7\u30b6\u30a4\u30f3\u30e2\u30fc\u30c9\u306b\u5207\u308a\u66ff\u308f\u308a\u3001\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u30e1\u30bd\u30c3\u30c9\u304c\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u8868\u793a\u3055\u308c\u3001\u30a8\u30e9\u30fc\u3092\u4fee\u6b63\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u539f\u56e0\u306b\u5fc3\u5f53\u305f\u308a\u304c\u3042\u308a\u3001\u3053\u308c\u4ee5\u4e0a\u8abf\u67fb\u3057\u306a\u304f\u3066\u3082\u4fee\u6b63\u3067\u304d\u308b\u5834\u5408\u306b\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u30c8\u30ec\u30fc\u30b9"}),": \u30c8\u30ec\u30fc\u30b9/\u30c7\u30d0\u30c3\u30ac\u30fc\u30e2\u30fc\u30c9\u306b\u5165\u308a\u307e\u3059\u3002 ",(0,r.jsx)(e.a,{href:"/docs/ja/20/Debugging/debugger",children:"\u30c7\u30d0\u30c3\u30ac\u30fc"})," \u30a6\u30a3\u30f3\u30c9\u30a6\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002 \u8a72\u5f53\u884c\u306e\u4e00\u90e8\u304c\u672a\u5b9f\u884c\u306e\u5834\u5408\u306b\u306f\u3001",(0,r.jsx)(e.strong,{children:"\u30c8\u30ec\u30fc\u30b9"})," \u30dc\u30bf\u30f3\u3092\u6570\u56de\u30af\u30ea\u30c3\u30af\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u7d9a\u884c"}),": \u5b9f\u884c\u304c\u7d99\u7d9a\u3055\u308c\u307e\u3059\u3002 \u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u884c\u306f\u3001\u30a8\u30e9\u30fc\u306e\u4f4d\u7f6e\u306b\u3088\u3063\u3066\u306f\u4e00\u90e8\u306e\u307f\u5b9f\u884c\u6e08\u307f\u3067\u3042\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002 \u614e\u91cd\u306b\u5b9f\u884c\u3092\u7d99\u7d9a\u3057\u3066\u304f\u3060\u3055\u3044: \u30a8\u30e9\u30fc\u304c\u539f\u56e0\u3067\u3001\u30e1\u30bd\u30c3\u30c9\u306e\u6b8b\u308a\u90e8\u5206\u304c\u6b63\u5e38\u306b\u5b9f\u884c\u3067\u304d\u306a\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002 ",(0,r.jsx)(e.code,{children:"SET WINDOW TITLE"})," \u306e\u3088\u3046\u306b\u3001\u30b3\u30fc\u30c9\u306e\u6b8b\u308a\u306e\u90e8\u5206\u306e\u5b9f\u884c\u3084\u30c6\u30b9\u30c8\u306e\u59a8\u3052\u306b\u306a\u3089\u306a\u3044\u5358\u7d14\u306a\u547c\u3073\u51fa\u3057\u3067\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u3066\u3044\u308b\u5834\u5408\u306b\u306e\u307f\u3001",(0,r.jsx)(e.strong,{children:"\u7d9a\u884c"})," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3053\u3068\u3092\u63a8\u5968\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["Tips: \u30eb\u30fc\u30d7\u4e2d\u306a\u3069\u3067\u7e70\u308a\u8fd4\u3057\u767a\u751f\u3059\u308b\u30a8\u30e9\u30fc\u306e\u5834\u5408\u306b\u306f\u3001",(0,r.jsx)(e.strong,{children:"\u7d9a\u884c"})," \u30dc\u30bf\u30f3\u3092 ",(0,r.jsx)(e.strong,{children:"\u7121\u8996"})," \u30dc\u30bf\u30f3\u306b\u5909\u66f4\u3067\u304d\u307e\u3059\u3002 ",(0,r.jsx)(e.strong,{children:"\u7d9a\u884c"}),"\u30dc\u30bf\u30f3\u304c\u6700\u521d\u306b\u73fe\u308c\u305f\u3068\u304d\u306b\u3001",(0,r.jsx)(e.strong,{children:"Alt"}),"\u30ad\u30fc (Windows) \u307e\u305f\u306f ",(0,r.jsx)(e.strong,{children:"Option"}),"\u30ad\u30fc (macOS) \u3092\u62bc\u3057\u306a\u304c\u3089\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002 \u3059\u308b\u3068\u3001\u540c\u3058\u30a8\u30e9\u30fc\u306b\u3088\u3063\u3066\u30c0\u30a4\u30a2\u30ed\u30b0\u304c\u547c\u3073\u51fa\u3055\u308c\u305f\u3068\u304d\u306b\u306f\u3001\u30dc\u30bf\u30f3\u30e9\u30d9\u30eb\u304c ",(0,r.jsx)(e.strong,{children:"\u7121\u8996"})," \u3078\u3068\u5909\u5316\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u30a2\u30dc\u30fc\u30c8"}),": \u30e1\u30bd\u30c3\u30c9\u304c\u4e2d\u65ad\u3055\u308c\u3001\u30e1\u30bd\u30c3\u30c9\u306e\u5b9f\u884c\u3092\u958b\u59cb\u3059\u308b\u524d\u306e\u72b6\u614b\u306b\u623b\u308a\u307e\u3059:"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u30a4\u30d9\u30f3\u30c8\u306b\u5bfe\u3057\u3066\u30d5\u30a9\u30fc\u30e0\u30e1\u30bd\u30c3\u30c9\u307e\u305f\u306f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9\u304c\u5b9f\u884c\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306b\u306f\u3001\u3053\u308c\u3089\u306f\u505c\u6b62\u3055\u308c\u3001\u30d5\u30a9\u30fc\u30e0\u306b\u623b\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u30e1\u30bd\u30c3\u30c9\u304c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30e2\u30fc\u30c9\u304b\u3089\u5b9f\u884c\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306b\u306f\u3001\u3053\u306e\u30e2\u30fc\u30c9\u306b\u623b\u308a\u307e\u3059\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u30b3\u30d4\u30fc"}),": \u30c7\u30d0\u30c3\u30b0\u60c5\u5831\u3092\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u30b3\u30d4\u30fc\u3057\u307e\u3059\u3002 \u3053\u306e\u60c5\u5831\u306f\u30a8\u30e9\u30fc\u306e\u5185\u90e8\u74b0\u5883 (\u756a\u53f7\u3084\u5185\u90e8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u7b49) \u3092\u8aac\u660e\u3057\u307e\u3059\u3002 \u60c5\u5831\u306f\u30bf\u30d6\u533a\u5207\u308a\u5f62\u5f0f\u3067\u8a18\u8ff0\u3055\u308c\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u4fdd\u5b58..."}),": \u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u30a8\u30e9\u30fc\u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u5185\u5bb9\u3068\u30b3\u30fc\u30eb\u30c1\u30a7\u30fc\u30f3\u3092 ",(0,r.jsx)(e.code,{children:".txt"})," \u30d5\u30a1\u30a4\u30eb\u306b\u4fdd\u5b58\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u30c7\u30d0\u30c3\u30ac\u30fc",children:"\u30c7\u30d0\u30c3\u30ac\u30fc"}),"\n",(0,r.jsxs)(e.p,{children:["\u30a8\u30e9\u30fc\u691c\u51fa\u306e\u969b\u306b\u3088\u304f\u3042\u308b\u521d\u6b69\u7684\u306a\u5931\u6557\u306f\u3001\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u30a8\u30e9\u30fc\u30a6\u30a3\u30f3\u30c9\u30a6\u306e ",(0,r.jsx)(e.strong,{children:"\u30a2\u30dc\u30fc\u30c8"})," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u30fc\u306b\u623b\u308a\u3001\u30b3\u30fc\u30c9\u3092\u8868\u793a\u3057\u3066\u539f\u56e0\u3092\u78ba\u8a8d\u3057\u3088\u3046\u3068\u3059\u308b\u3053\u3068\u3067\u3059\u3002 \u3053\u308c\u306f\u6b62\u3081\u3066\u304f\u3060\u3055\u3044\u3002 ",(0,r.jsx)(e.strong,{children:"\u30c7\u30d0\u30c3\u30ac\u30fc"})," \u3092\u5e38\u306b\u4f7f\u7528\u3059\u308c\u3070\u3001\u76f8\u5f53\u306e\u6642\u9593\u3068\u52b4\u529b\u3092\u7bc0\u6e1b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u30c7\u30d0\u30c3\u30ac\u30fc\u3092\u4f7f\u3046\u3068\u3001\u30e1\u30bd\u30c3\u30c9\u3092\u30b9\u30c6\u30c3\u30d7\u3054\u3068\u306b\u3086\u3063\u304f\u308a\u3068\u5b9f\u884c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u30c7\u30d0\u30c3\u30ac\u30fc\u306f\u3001\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u7406\u7531\u3092\u77e5\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u60c5\u5831\u3092\u8868\u793a\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u60c5\u5831\u304c\u3042\u308c\u3070\u3001\u30a8\u30e9\u30fc\u306e\u4fee\u6b63\u65b9\u6cd5\u306f\u308f\u304b\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u30c7\u30d0\u30c3\u30ac\u30fc\u3092\u4f7f\u7528\u3059\u308b\u3082\u3046 1\u3064\u306e\u7406\u7531\u306f\u3001\u30b3\u30fc\u30c9\u306e\u4f5c\u6210\u3067\u3059\u3002 \u3044\u3064\u3082\u4ee5\u4e0a\u306b\u8907\u96d1\u306a\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3092\u4f5c\u6210\u3057\u3066\u3057\u307e\u3046\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002 \u9054\u6210\u611f\u3053\u305d\u3042\u308a\u307e\u3059\u304c\u3001\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u304c\u6b63\u3057\u3044\u304b\u3069\u3046\u304b\u306f 100%\u78ba\u304b\u3068\u306f\u3044\u3048\u307e\u305b\u3093\u3002 \u898b\u5f53\u3082\u3064\u304b\u306a\u3044\u307e\u307e\u5b9f\u884c\u3059\u308b\u306e\u3067\u306f\u306a\u304f\u3001\u30b3\u30fc\u30c9\u306e\u6700\u521d\u3067 ",(0,r.jsx)(e.code,{children:"TRACE"})," \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 \u305d\u306e\u5f8c\u3001\u30b3\u30fc\u30c9\u3092\u30b9\u30c6\u30c3\u30d7\u3054\u3068\u306b\u5b9f\u884c\u3057\u3066\u3001\u52d5\u4f5c\u3092\u76e3\u8996\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u30d6\u30ec\u30fc\u30af",children:"\u30d6\u30ec\u30fc\u30af"}),"\n",(0,r.jsx)(e.p,{children:'\u30c7\u30d0\u30c3\u30b0\u4f5c\u696d\u3067\u306f\u3001\u30b3\u30fc\u30c9\u306e\u4e00\u90e8\u306e\u30c8\u30ec\u30fc\u30b9\u3092\u7279\u5b9a\u306e\u884c\u307e\u3067\u30b9\u30ad\u30c3\u30d7\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002 \u307e\u305f\u3001\u3042\u308b\u5f0f\u304c\u7279\u5b9a\u306e\u5024\u306b\u306a\u3063\u305f\u6642 (\u4f8b: "$myVar > 1000") \u3084\u3001\u7279\u5b9a\u306e 4D\u30b3\u30de\u30f3\u30c9\u304c\u547c\u3073\u51fa\u3055\u308c\u308b\u305f\u3073\u306b\u30b3\u30fc\u30c9\u3092\u30c8\u30ec\u30fc\u30b9\u3057\u305f\u3044\u5834\u5408\u3082\u3042\u308a\u307e\u3059\u3002'}),"\n",(0,r.jsxs)(e.p,{children:["\u3053\u306e\u3088\u3046\u306a\u30cb\u30fc\u30ba\u306b\u5bfe\u5fdc\u3059\u308b\u305f\u3081\u306b\u3001",(0,r.jsx)(e.strong,{children:"\u30d6\u30ec\u30fc\u30af\u30dd\u30a4\u30f3\u30c8"})," \u3068 ",(0,r.jsx)(e.strong,{children:"\u30ad\u30e3\u30c3\u30c1\u30b3\u30de\u30f3\u30c9"})," \u6a5f\u80fd\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u6a5f\u80fd\u306f\u3001\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u30fc\u3001\u30c7\u30d0\u30c3\u30ac\u30fc\u3001\u30e9\u30f3\u30bf\u30a4\u30e0\u30a8\u30af\u30b9\u30d7\u30ed\u30fc\u30e9\u30fc\u304b\u3089\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"]})]})}function j(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},221020:(n,e,s)=>{var r=s(296540),i=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function h(n,e,s){var r,l={},h=null,o=null;for(r in void 0!==s&&(h=""+s),void 0!==e.key&&(h=""+e.key),void 0!==e.ref&&(o=e.ref),e)c.call(e,r)&&!t.hasOwnProperty(r)&&(l[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps)void 0===l[r]&&(l[r]=e[r]);return{$$typeof:i,type:n,key:h,ref:o,props:l,_owner:d.current}}e.Fragment=l,e.jsx=h,e.jsxs=h},474848:(n,e,s)=>{n.exports=s(221020)},297767:(n,e,s)=>{s.d(e,{A:()=>r});const r=s.p+"assets/images/runtimeError-80c1fe83365744c8fbc4724923d8182e.png"},61737:(n,e,s)=>{s.d(e,{A:()=>r});const r=s.p+"assets/images/syntax-error-c4e0d1c422e1b516cbdfd695e96bde32.png"},353033:(n,e,s)=>{s.d(e,{A:()=>r});const r=s.p+"assets/images/typing-error-0347074dc677f0bc726a4aca19f3a787.png"},28453:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>d});var r=s(296540);const i={},l=r.createContext(i);function c(n){const e=r.useContext(l);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),r.createElement(l.Provider,{value:e},n.children)}}}]);