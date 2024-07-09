/*! For license information please see 708d8c7f.3e4e964c.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23498],{710054:(A,e,n)=>{n.r(e),n.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>g,toc:()=>d});var i=n(474848),r=n(28453);const s={id:"debugging-remote",title:"\u30ea\u30e2\u30fc\u30c8\u30de\u30b7\u30f3\u304b\u3089\u306e\u30c7\u30d0\u30c3\u30b0"},c=void 0,g={id:"Debugging/debugging-remote",title:"\u30ea\u30e2\u30fc\u30c8\u30de\u30b7\u30f3\u304b\u3089\u306e\u30c7\u30d0\u30c3\u30b0",description:"\u6982\u8981",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R4/Debugging/debugging-remote.md",sourceDirName:"Debugging",slug:"/Debugging/debugging-remote",permalink:"/docs/ja/20-R4/Debugging/debugging-remote",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Debugging%2Fdebugging-remote.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"debugging-remote",title:"\u30ea\u30e2\u30fc\u30c8\u30de\u30b7\u30f3\u304b\u3089\u306e\u30c7\u30d0\u30c3\u30b0"},sidebar:"docs",previous:{title:"\u30d6\u30ec\u30fc\u30af\u30dd\u30a4\u30f3\u30c8\u3068\u30ad\u30e3\u30c3\u30c1\u30b3\u30de\u30f3\u30c9",permalink:"/docs/ja/20-R4/Debugging/breakpoints"},next:{title:"\u30ed\u30b0\u30d5\u30a1\u30a4\u30eb",permalink:"/docs/ja/20-R4/Debugging/debugLogFiles"}},t={},d=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u6709\u52b9\u5316\u6e08\u30c7\u30d0\u30c3\u30ac\u30fc",id:"\u6709\u52b9\u5316\u6e08\u30c7\u30d0\u30c3\u30ac\u30fc",level:2},{value:"\u30c7\u30d0\u30c3\u30ac\u30fc\u306e\u6709\u52b9\u5316",id:"\u30c7\u30d0\u30c3\u30ac\u30fc\u306e\u6709\u52b9\u5316",level:2},{value:"\u30c7\u30d0\u30c3\u30ac\u3092\u958b\u59cb\u6642\u306b\u6709\u52b9\u5316\u3059\u308b",id:"\u30c7\u30d0\u30c3\u30ac\u3092\u958b\u59cb\u6642\u306b\u6709\u52b9\u5316\u3059\u308b",level:2},{value:"\u6709\u52b9\u5316\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u62d2\u5426",id:"\u6709\u52b9\u5316\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u62d2\u5426",level:2}];function x(A){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...A.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,i.jsx)(e.p,{children:"4D\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u304c 4D Server \u4e0a\u3067\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc\u30e2\u30fc\u30c9\u3067\u52d5\u3044\u3066\u3044\u308b\u5834\u5408\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u308b\u30ea\u30e2\u30fc\u30c84D\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304b\u3089\u30b5\u30fc\u30d0\u30fc\u3067\u5b9f\u884c\u4e2d\u306e 4D\u30b3\u30fc\u30c9\u3092\u30c7\u30d0\u30c3\u30b0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u7279\u5b9a\u306e\u30ea\u30e2\u30fc\u30c8\u30de\u30b7\u30f3\u3067\u30c7\u30d0\u30c3\u30ac\u30fc\u3092\u8d77\u52d5\u3059\u308b\u3068\u3001\u305d\u306e\u30ea\u30e2\u30fc\u30c8\u30de\u30b7\u30f3\u4e0a\u3067\u76f4\u63a5\u3001\u30b3\u30fc\u30c9\u306e\u5b9f\u884c\u3092\u30e2\u30cb\u30bf\u30fc\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u30ea\u30e2\u30fc\u30c8\u30de\u30b7\u30f3\u4e0a\u3067\u8d77\u52d5\u3055\u308c\u305f ",(0,i.jsx)(e.a,{href:"/docs/ja/20-R4/Debugging/debugger",children:"\u30c7\u30d0\u30c3\u30ac\u30fc"})," \u306b\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u30b3\u30fc\u30c9\u306e\u30c7\u30d0\u30c3\u30b0\u4e2d\u3067\u3042\u308b\u3053\u3068\u3092\u793a\u3059\u30b5\u30fc\u30d0\u30fc\u30a2\u30a4\u30b3\u30f3\u3068\u9752\u3044\u80cc\u666f\u8272\u306e\u30c7\u30d0\u30c3\u30b0\u30a2\u30a4\u30b3\u30f3\u304c\u8868\u793a\u3055\u308c\u308b\u307b\u304b\u3001\u547c\u3073\u51fa\u3057\u9023\u9396\u3068\u5f0f\u306e\u30da\u30a4\u30f3\u306e\u80cc\u666f\u304c\u8584\u3063\u3059\u3089\u3068\u9752\u304f\u8272\u3065\u304d\u307e\u3059:"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"\u30c7\u30d0\u30c3\u30ac\u30fc\u30a6\u30a3\u30f3\u30c9\u30a6-\u30ea\u30e2\u30fc\u30c8",src:n(72299).A+"",width:"754",height:"511"})}),"\n",(0,i.jsxs)(e.p,{children:["\u3053\u306e\u6a5f\u80fd\u306f\u30014D Server \u304c\u30d8\u30c3\u30c9\u30ec\u30b9\u30e2\u30fc\u30c9 (",(0,i.jsx)(e.a,{href:"/docs/ja/20-R4/Admin/cli",children:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9"})," \u53c2\u7167) \u3067\u5b9f\u884c\u4e2d\u3001\u3042\u308b\u3044\u306f\u30b5\u30fc\u30d0\u30fc\u30de\u30b7\u30f3\u3078\u306e\u30a2\u30af\u30bb\u30b9\u304c\u96e3\u3057\u3044\u5834\u5408\u306a\u3069\u306b\u7279\u306b\u6709\u7528\u3067\u3059\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u6709\u52b9\u5316\u6e08\u30c7\u30d0\u30c3\u30ac\u30fc",children:"\u6709\u52b9\u5316\u6e08\u30c7\u30d0\u30c3\u30ac\u30fc"}),"\n",(0,i.jsxs)(e.p,{children:["4D Server\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30c7\u30d0\u30c3\u30b0\u306f\u3001\u4e00\u5ea6\u306b\u4e00\u3064\u306e\u30c7\u30d0\u30c3\u30ac\u30fc\u306e\u307f\u304c\u304a\u3053\u306a\u3048\u307e\u3059\u3002 \u3053\u308c\u3092 ",(0,i.jsx)(e.strong,{children:"\u6709\u52b9\u5316\u6e08\u30c7\u30d0\u30c3\u30ac\u30fc"})," \u3068\u547c\u3073\u307e\u3059\u3002 \u6709\u52b9\u5316\u6e08\u30c7\u30d0\u30c3\u30ac\u30fc\u306b\u306f\u3001\u4ee5\u4e0b\u306e 2\u7a2e\u985e\u3042\u308a\u307e\u3059:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u30ed\u30fc\u30ab\u30eb\u306e 4D Server\u30c7\u30d0\u30c3\u30ac\u30fc (\u30c7\u30d5\u30a9\u30eb\u30c8) - \u30b5\u30fc\u30d0\u30fc\u304c\u30d8\u30c3\u30c9\u30ec\u30b9\u5b9f\u884c\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408"}),"\n",(0,i.jsx)(e.li,{children:"\u30ea\u30e2\u30fc\u30c84D\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u30c7\u30d0\u30c3\u30ac\u30fc - \u30ea\u30e2\u30fc\u30c8\u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u30c7\u30b6\u30a4\u30f3\u30e2\u30fc\u30c9\u306b\u30a2\u30af\u30bb\u30b9\u53ef\u80fd\u306a\u5834\u5408"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u6709\u52b9\u5316\u6e08\u30c7\u30d0\u30c3\u30ac\u30fc\u306f\u30014D Server \u304c\u6b21\u306e\u3044\u305a\u308c\u304b\u306b\u906d\u9047\u3057\u305f\u5834\u5408\u306b\u547c\u3073\u51fa\u3055\u308c\u307e\u3059:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u30d6\u30ec\u30fc\u30af\u30dd\u30a4\u30f3\u30c8"}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"TRACE"})," \u30b3\u30de\u30f3\u30c9"]}),"\n",(0,i.jsx)(e.li,{children:"\u30ad\u30e3\u30c3\u30c1\u30b3\u30de\u30f3\u30c9"}),"\n",(0,i.jsx)(e.li,{children:"\u30a8\u30e9\u30fc"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u3001\u30c7\u30d0\u30c3\u30ac\u30fc\u304c\u6709\u52b9\u5316\u3055\u308c\u3066\u3044\u308b\u30de\u30b7\u30f3\u306b\u9001\u3089\u308c\u308b\u3068\u3044\u3046\u70b9\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u3053\u308c\u306f\u3064\u307e\u308a\u3001\u30ea\u30e2\u30fc\u30c8\u30c7\u30d0\u30c3\u30ac\u30fc\u306e\u5834\u5408\u306b\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u306e\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u30ea\u30e2\u30fc\u30c84D\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u4e0a\u3067\u8868\u793a\u3055\u308c\u308b\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u6ce8:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"On Server Startup"})," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u3067\u5b9f\u884c\u3055\u308c\u305f\u30b3\u30fc\u30c9\u306f\u30ea\u30e2\u30fc\u30c8\u3067\u30c7\u30d0\u30c3\u30b0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002 \u3053\u308c\u306f\u30b5\u30fc\u30d0\u30fc\u5074\u3067\u3057\u304b\u30c7\u30d0\u30c3\u30b0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002"]}),"\n",(0,i.jsx)(e.li,{children:"\u30c7\u30d0\u30c3\u30ac\u30fc\u304c\u6709\u52b9\u5316\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u5b9f\u884c\u4e2d\u306e\u30b3\u30fc\u30c9\u304c\u30c7\u30d0\u30c3\u30b0\u30b3\u30de\u30f3\u30c9\u306b\u3088\u3063\u3066\u4e2d\u65ad\u3055\u308c\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u30c7\u30d0\u30c3\u30ac\u30fc\u306e\u6709\u52b9\u5316",children:"\u30c7\u30d0\u30c3\u30ac\u30fc\u306e\u6709\u52b9\u5316"}),"\n",(0,i.jsx)(e.p,{children:"\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc\u30e2\u30fc\u30c9\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u8d77\u52d5\u3057\u305f\u3068\u304d\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"4D Server \u304c\u30d8\u30c3\u30c9\u30ec\u30b9\u5b9f\u884c\u4e2d\u3067\u306a\u3044\u5834\u5408\u3001\u30c7\u30d0\u30c3\u30ac\u30fc\u306f\u30b5\u30fc\u30d0\u30fc\u5074\u3067\u6709\u52b9\u5316\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,i.jsx)(e.li,{children:"4D Server \u304c\u30d8\u30c3\u30c9\u30ec\u30b9\u5b9f\u884c\u4e2d\u306e\u5834\u5408\u306b\u306f\u3001\u30c7\u30d0\u30c3\u30ac\u30fc\u306f\u6709\u52b9\u5316\u3055\u308c\u3066\u3044\u306a\u3044\u72b6\u614b\u3067\u3059\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"4D Server\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u63a5\u7d9a\u3067\u304d\u308b\u30ea\u30e2\u30fc\u30c84D\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3067\u3042\u308c\u3070\u3001\u30b5\u30fc\u30d0\u30fc\u306e\u30c7\u30d0\u30c3\u30ac\u30fc\u3092\u6709\u52b9\u5316\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u30ea\u30e2\u30fc\u30c84D\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3\u306f\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u30c7\u30b6\u30a4\u30f3\u74b0\u5883\u3078\u306e\u30a2\u30af\u30bb\u30b9\u6a29\u3092\u6301\u3063\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u30b5\u30fc\u30d0\u30fc\u306e\u30c7\u30d0\u30c3\u30ac\u30fc\u3092\u30ea\u30e2\u30fc\u30c84D\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3067\u6709\u52b9\u5316\u3059\u308b\u306b\u306f:"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["4D Server \u306e\u30e1\u30cb\u30e5\u30fc\u30d0\u30fc\u304b\u3089\u3001",(0,i.jsx)(e.strong,{children:"\u7de8\u96c6"})," \uff1e ",(0,i.jsx)(e.strong,{children:"\u30c7\u30d0\u30c3\u30ac\u3092\u7121\u52b9\u5316\u3059\u308b"})," \u3092\u9078\u629e\u3057\u3001\u30ea\u30e2\u30fc\u30c8\u30de\u30b7\u30f3\u304b\u3089\u30c7\u30d0\u30c3\u30ac\u30fc\u3092\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059 (4D Server \u304c\u30d8\u30c3\u30c9\u30ec\u30b9\u5b9f\u884c\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u3053\u306e\u64cd\u4f5c\u306f\u306a\u306b\u3082\u3057\u307e\u305b\u3093)\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u30b5\u30fc\u30d0\u30fc\u306b\u63a5\u7d9a\u3055\u308c\u305f\u30ea\u30e2\u30fc\u30c84D\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304b\u3089\u3001",(0,i.jsx)(e.strong,{children:"\u5b9f\u884c"})," \uff1e ",(0,i.jsx)(e.strong,{children:"\u30ea\u30e2\u30fc\u30c8\u30c7\u30d0\u30c3\u30ac\u3092\u6709\u52b9\u5316\u3059\u308b"})," \u3092\u9078\u629e\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u6709\u52b9\u5316\u306b\u6210\u529f\u3057\u305f\u5834\u5408 (",(0,i.jsx)(e.a,{href:"#%E6%9C%89%E5%8A%B9%E5%8C%96%E3%83%AA%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88%E3%81%AE%E6%8B%92%E5%90%A6",children:"\u6709\u52b9\u5316\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u62d2\u5426"})," \u53c2\u7167)\u3001\u30e1\u30cb\u30e5\u30fc\u30b3\u30de\u30f3\u30c9\u306f ",(0,i.jsx)(e.strong,{children:"\u30ea\u30e2\u30fc\u30c8\u30c7\u30d0\u30c3\u30ac\u3092\u7121\u52b9\u5316\u3059\u308b"})," \u3078\u3068\u5909\u308f\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u3053\u308c\u3067\u3001\u30b5\u30fc\u30d0\u30fc\u306e\u30c7\u30d0\u30c3\u30ac\u30fc\u306f\u30ea\u30e2\u30fc\u30c84D\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3067\u6709\u52b9\u5316\u3055\u308c\u3001\u4ee5\u4e0b\u306e\u30bf\u30a4\u30df\u30f3\u30b0\u307e\u3067\u6709\u52b9\u5316\u3055\u308c\u305f\u307e\u307e\u3067\u3059:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u7d42\u4e86\u3059\u308b\u307e\u3067"}),"\n",(0,i.jsxs)(e.li,{children:["\u30e6\u30fc\u30b6\u30fc\u304c ",(0,i.jsx)(e.code,{children:"\u30ea\u30e2\u30fc\u30c8\u30c7\u30d0\u30c3\u30ac\u3092\u7121\u52b9\u5316\u3059\u308b"})," \u3092\u9078\u629e\u3059\u308b\u307e\u3067"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u30c7\u30d0\u30c3\u30ac\u30fc\u3092\u518d\u5ea6\u30b5\u30fc\u30d0\u30fc\u5074\u3067\u6709\u52b9\u5316\u3059\u308b\u306b\u306f:"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\u30c7\u30d0\u30c3\u30ac\u30fc\u304c\u6709\u52b9\u5316\u3055\u308c\u3066\u3044\u308b\u30ea\u30e2\u30fc\u30c84D\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u304a\u3044\u3066\u3001",(0,i.jsx)(e.strong,{children:"\u5b9f\u884c"})," \uff1e ",(0,i.jsx)(e.strong,{children:"\u30ea\u30e2\u30fc\u30c8\u30c7\u30d0\u30c3\u30ac\u3092\u7121\u52b9\u5316\u3059\u308b"})," \u3092\u9078\u629e\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["4D Server \u306e\u30e1\u30cb\u30e5\u30fc\u30d0\u30fc\u304b\u3089\u3001",(0,i.jsx)(e.strong,{children:"\u7de8\u96c6"})," \uff1e ",(0,i.jsx)(e.strong,{children:"\u30c7\u30d0\u30c3\u30ac\u3092\u6709\u52b9\u5316\u3059\u308b"})," \u3092\u9078\u629e\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u30b5\u30fc\u30d0\u30fc\u4e0a\u3067\u30c7\u30d0\u30c3\u30ac\u30fc\u304c\u6709\u52b9\u5316\u3055\u308c\u3066\u3044\u308b\u3068 (\u30c7\u30d5\u30a9\u30eb\u30c8)\u3001\u30c7\u30d0\u30c3\u30b0\u3092\u53ef\u80fd\u306b\u3059\u308b\u305f\u3081\u3001\u30b5\u30fc\u30d0\u30fc\u30d7\u30ed\u30bb\u30b9\u306f\u3059\u3079\u3066\u81ea\u52d5\u7684\u306b\u30b3\u30aa\u30aa\u30da\u30e9\u30c6\u30a3\u30d6\u30e2\u30fc\u30c9\u3067\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002 \u3053\u308c\u306f\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u5927\u304d\u306a\u5f71\u97ff\u3092\u4e0e\u3048\u304b\u306d\u307e\u305b\u3093\u3002 \u30b5\u30fc\u30d0\u30fc\u30de\u30b7\u30f3\u4e0a\u3067\u30c7\u30d0\u30c3\u30b0\u3059\u308b\u5fc5\u8981\u304c\u306a\u3044\u5834\u5408\u306f\u3001\u30c7\u30d0\u30c3\u30ac\u30fc\u3092\u7121\u52b9\u5316\u3057\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u30ea\u30e2\u30fc\u30c8\u30de\u30b7\u30f3\u3067\u6709\u52b9\u5316\u3059\u308b\u3053\u3068\u304c\u63a8\u5968\u3055\u308c\u307e\u3059\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u30c7\u30d0\u30c3\u30ac\u3092\u958b\u59cb\u6642\u306b\u6709\u52b9\u5316\u3059\u308b",children:"\u30c7\u30d0\u30c3\u30ac\u3092\u958b\u59cb\u6642\u306b\u6709\u52b9\u5316\u3059\u308b"}),"\n",(0,i.jsx)(e.p,{children:"\u30c7\u30d0\u30c3\u30ac\u30fc\u306f\u3001\u30ea\u30e2\u30fc\u30c84D\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u307e\u305f\u306f\u30b5\u30fc\u30d0\u30fc\u306e\u958b\u59cb\u6642\u306b\u81ea\u52d5\u7684\u306b\u6709\u52b9\u5316\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u30b5\u30fc\u30d0\u30fc\u5074\u306e\u5834\u5408 (\u30d8\u30c3\u30c9\u30ec\u30b9\u30e2\u30fc\u30c9\u3067\u306a\u3051\u308c\u3070)\u3001\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f ",(0,i.jsx)(e.strong,{children:"\u30c7\u30d0\u30c3\u30ac\u3092\u958b\u59cb\u6642\u306b\u6709\u52b9\u5316\u3059\u308b"})," \u3068\u3044\u3046\u540d\u524d\u3067\u3059\u3002 \u30b5\u30fc\u30d0\u30fc\u304c\u958b\u59cb\u3055\u308c\u308b\u3068\u3001\u81ea\u52d5\u7684\u306b\u30c7\u30d0\u30c3\u30ac\u30fc\u304c\u6709\u52b9\u5316\u3055\u308c\u307e\u3059 (\u30c7\u30d5\u30a9\u30eb\u30c8):"]}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u8b66\u544a"}),": \u306e\u3061\u306b\u30d8\u30c3\u30c9\u30ec\u30b9\u30e2\u30fc\u30c9\u3067\u8d77\u52d5\u3055\u308c\u308b\u30b5\u30fc\u30d0\u30fc\u306b\u304a\u3044\u3066\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u9078\u629e\u3055\u308c\u305f\u307e\u307e\u306e\u5834\u5408\u3001\u3053\u306e\u30b5\u30fc\u30d0\u30fc\u306e\u30c7\u30d0\u30c3\u30ac\u30fc\u306f\u5229\u7528\u3067\u304d\u307e\u305b\u3093\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u30ea\u30e2\u30fc\u30c84D\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3067\u306f\u3001\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f ",(0,i.jsx)(e.strong,{children:"\u30ea\u30e2\u30fc\u30c8\u30c7\u30d0\u30c3\u30ac\u3092\u958b\u59cb\u6642\u306b\u6709\u52b9\u5316\u3059\u308b"})," \u3068\u3044\u3046\u540d\u524d\u3067\u3059\u3002 \u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u9078\u629e\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u30ea\u30e2\u30fc\u30c84D\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306f\u3001\u305d\u306e\u5f8c\u540c\u3058 4D Server\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u63a5\u7d9a\u3059\u308b\u305f\u3073\u306b\u3001\u81ea\u52d5\u7684\u306b\u30ea\u30e2\u30fc\u30c8\u30c7\u30d0\u30c3\u30ac\u30fc\u3092\u6709\u52b9\u5316\u3057\u3088\u3046\u3068\u3057\u307e\u3059\u3002 \u6210\u529f\u3057\u305f\u5834\u5408 (",(0,i.jsx)(e.a,{href:"#%E6%9C%89%E5%8A%B9%E5%8C%96%E3%83%AA%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88%E3%81%AE%E6%8B%92%E5%90%A6",children:"\u6709\u52b9\u5316\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u62d2\u5426"})," \u53c2\u7167)\u3001\u30ea\u30e2\u30fc\u30c8\u30c7\u30d0\u30c3\u30ac\u30fc\u306f\u81ea\u52d5\u7684\u306b\u30ea\u30e2\u30fc\u30c84D\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3067\u6709\u52b9\u5316\u3055\u308c\u3001\u30e1\u30cb\u30e5\u30fc\u30b3\u30de\u30f3\u30c9\u306f ",(0,i.jsx)(e.strong,{children:"\u30ea\u30e2\u30fc\u30c8\u30c7\u30d0\u30c3\u30ac\u3092\u7121\u52b9\u5316\u3059\u308b"})," \u3078\u3068\u5909\u308f\u308a\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u3053\u306e\u8a2d\u5b9a\u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3054\u3068\u306b\u3001",(0,i.jsx)(e.a,{href:"/docs/ja/20-R4/Project/architecture#userpreferencesusername",children:(0,i.jsx)(e.code,{children:".4DPreferences"})})," \u30d5\u30a1\u30a4\u30eb\u5185\u306b\u30ed\u30fc\u30ab\u30eb\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u6709\u52b9\u5316\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u62d2\u5426",children:"\u6709\u52b9\u5316\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u62d2\u5426"}),"\n",(0,i.jsx)(e.p,{children:"\u307b\u304b\u306e\u30ea\u30e2\u30fc\u30c84D\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u307e\u305f\u306f 4D Server \u306b\u3066\u3059\u3067\u306b\u6709\u52b9\u5316\u3055\u308c\u3066\u3044\u305f\u5834\u5408\u3001\u4ed6\u306e\u30de\u30b7\u30f3\u3067\u30b5\u30fc\u30d0\u30fc\u306e\u30c7\u30d0\u30c3\u30ac\u30fc\u3092\u6709\u52b9\u5316\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5225\u30de\u30b7\u30f3\u306b\u3066\u6709\u52b9\u5316\u6e08\u306e\u30c7\u30d0\u30c3\u30ac\u30fc\u3092\u6709\u52b9\u5316\u3057\u3088\u3046\u3068\u3057\u305f\u5834\u5408\u3001\u305d\u306e\u6709\u52b9\u5316\u30ea\u30af\u30a8\u30b9\u30c8\u306f\u62d2\u5426\u3055\u308c\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30c0\u30a4\u30a2\u30ed\u30b0\u304c\u8868\u793a\u3055\u308c\u307e\u3059:"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"\u30c7\u30d0\u30c3\u30ac\u30fc\u6709\u52b9\u5316\u30c0\u30a4\u30a2\u30ed\u30b0",src:n(211790).A+"",width:"482",height:"231"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"\u30c7\u30d0\u30c3\u30ac\u30fc\u6709\u52b9\u5316\u30c0\u30a4\u30a2\u30ed\u30b02",src:n(655567).A+"",width:"482",height:"168"})}),"\n",(0,i.jsx)(e.p,{children:"\u3053\u306e\u3088\u3046\u306a\u5834\u5408\u306b\u3001\u30c7\u30d0\u30c3\u30ac\u30fc\u3092\u6709\u52b9\u5316\u3059\u308b\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u3069\u3061\u3089\u304b\u306e\u6761\u4ef6\u304c\u5fc5\u8981\u3067\u3059:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u6709\u52b9\u5316\u6e08\u30c7\u30d0\u30c3\u30ac\u30fc\u3092\u3001",(0,i.jsx)(e.strong,{children:"\u30ea\u30e2\u30fc\u30c8\u30c7\u30d0\u30c3\u30ac\u3092\u7121\u52b9\u5316\u3059\u308b"})," \u30e1\u30cb\u30e5\u30fc\u30b3\u30de\u30f3\u30c9\u3067\u30ea\u30e2\u30fc\u30c84D\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304b\u3089\u5916\u3059\u3001\u3042\u308b\u3044\u306f ",(0,i.jsx)(e.strong,{children:"\u30c7\u30d0\u30c3\u30ac\u3092\u7121\u52b9\u5316\u3059\u308b"})," \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u5916\u3059\u3002"]}),"\n",(0,i.jsx)(e.li,{children:"\u6709\u52b9\u5316\u6e08\u30c7\u30d0\u30c3\u30ac\u30fc\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u30ea\u30e2\u30fc\u30c84D\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u9589\u3058\u3089\u308c\u308b\u3002"}),"\n"]})]})}function l(A={}){const{wrapper:e}={...(0,r.R)(),...A.components};return e?(0,i.jsx)(e,{...A,children:(0,i.jsx)(x,{...A})}):x(A)}},221020:(A,e,n)=>{var i=n(296540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,g=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function d(A,e,n){var i,s={},d=null,x=null;for(i in void 0!==n&&(d=""+n),void 0!==e.key&&(d=""+e.key),void 0!==e.ref&&(x=e.ref),e)c.call(e,i)&&!t.hasOwnProperty(i)&&(s[i]=e[i]);if(A&&A.defaultProps)for(i in e=A.defaultProps)void 0===s[i]&&(s[i]=e[i]);return{$$typeof:r,type:A,key:d,ref:x,props:s,_owner:g.current}}e.Fragment=s,e.jsx=d,e.jsxs=d},474848:(A,e,n)=>{A.exports=n(221020)},655567:(A,e,n)=>{n.d(e,{A:()=>i});const i="data:image/png;base64,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"},211790:(A,e,n)=>{n.d(e,{A:()=>i});const i="data:image/png;base64,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"},72299:(A,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/debuggerWindowRemote-7031fc37327ed258c4104052ae225c7a.png"},28453:(A,e,n)=>{n.d(e,{R:()=>c,x:()=>g});var i=n(296540);const r={},s=i.createContext(r);function c(A){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function g(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(r):A.components||r:c(A.components),i.createElement(s.Provider,{value:e},A.children)}}}]);