/*! For license information please see b7647f37.1901bc46.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43517],{86016:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>E,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var i=s(474848),r=s(28453);const t={id:"configuration",title:"\u30b5\u30fc\u30d0\u30fc\u8a2d\u5b9a"},c=void 0,l={id:"REST/configuration",title:"\u30b5\u30fc\u30d0\u30fc\u8a2d\u5b9a",description:"4D \u306e REST\u30b5\u30fc\u30d0\u30fc\u306f\u3001\u6a19\u6e96\u306e HTTP\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u7528\u3044\u3066\u5916\u90e8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30c7\u30fc\u30bf\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u3092\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002\u3064\u307e\u308a\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u60c5\u5831\u3092\u53d6\u5f97\u3057\u305f\u308a\u3001\u30c7\u30fc\u30bf\u3092\u64cd\u4f5c\u3057\u305f\u308a\u3001Web\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u305f\u308a\u3001\u3068\u3044\u3063\u305f\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R5/REST/configuration.md",sourceDirName:"REST",slug:"/REST/configuration",permalink:"/docs/ja/REST/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2Fconfiguration.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"configuration",title:"\u30b5\u30fc\u30d0\u30fc\u8a2d\u5b9a"},sidebar:"docs",previous:{title:"\u306f\u3058\u3081\u306b",permalink:"/docs/ja/REST/gettingStarted"},next:{title:"\u30e6\u30fc\u30b6\u30fc\u3068\u30bb\u30c3\u30b7\u30e7\u30f3",permalink:"/docs/ja/REST/authUsers"}},d={},o=[{value:"REST\u30b5\u30fc\u30d0\u30fc\u3092\u958b\u59cb\u3059\u308b",id:"REST\u30b5\u30fc\u30d0\u30fc\u3092\u958b\u59cb\u3059\u308b",level:2},{value:"REST\u30a2\u30af\u30bb\u30b9\u306e\u5236\u5fa1",id:"REST\u30a2\u30af\u30bb\u30b9\u306e\u5236\u5fa1",level:2},{value:"\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u8a2d\u5b9a\u3092\u4f7f\u7528\u3059\u308b",id:"\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u8a2d\u5b9a\u3092\u4f7f\u7528\u3059\u308b",level:3},{value:"On REST Authentication \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3059\u308b",id:"On-REST-Authentication-\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3059\u308b",level:3},{value:"\u30c6\u30fc\u30d6\u30eb\u3084\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u516c\u958b",id:"\u30c6\u30fc\u30d6\u30eb\u3084\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u516c\u958b",level:2},{value:"\u30c6\u30fc\u30d6\u30eb\u306e\u516c\u958b",id:"\u30c6\u30fc\u30d6\u30eb\u306e\u516c\u958b",level:3},{value:"\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u516c\u958b",id:"\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u516c\u958b",level:3},{value:"\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u30e2\u30fc\u30c9",id:"\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u30e2\u30fc\u30c9",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"4D \u306e REST\u30b5\u30fc\u30d0\u30fc\u306f\u3001\u6a19\u6e96\u306e HTTP\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u7528\u3044\u3066\u5916\u90e8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30c7\u30fc\u30bf\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u3092\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002\u3064\u307e\u308a\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u60c5\u5831\u3092\u53d6\u5f97\u3057\u305f\u308a\u3001\u30c7\u30fc\u30bf\u3092\u64cd\u4f5c\u3057\u305f\u308a\u3001Web\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u305f\u308a\u3001\u3068\u3044\u3063\u305f\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"REST\u6a5f\u80fd\u3092\u4f7f\u3044\u59cb\u3081\u308b\u307e\u3048\u306b\u3001\u307e\u305a\u306f 4D REST \u30b5\u30fc\u30d0\u30fc\u306e\u8a2d\u5b9a\u3092\u304a\u3053\u306a\u3044\u3001\u3053\u308c\u3092\u8d77\u52d5\u3055\u305b\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"REST\u30b5\u30fc\u30d0\u30fc\u3092\u958b\u59cb\u3059\u308b",children:"REST\u30b5\u30fc\u30d0\u30fc\u3092\u958b\u59cb\u3059\u308b"}),"\n",(0,i.jsxs)(n.p,{children:["\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u4e0a\u306e\u7406\u7531\u306b\u3088\u308a\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u30014D \u306f REST\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u5fdc\u7b54\u3057\u307e\u305b\u3093\u3002 REST\u30b5\u30fc\u30d0\u30fc\u3092\u958b\u59cb\u3057\u3001REST\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u51e6\u7406\u3059\u308b\u306b\u306f\u3001",(0,i.jsx)(n.strong,{children:"\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u8a2d\u5b9a"})," \u306e ",(0,i.jsx)(n.strong,{children:"Web"})," \uff1e ",(0,i.jsx)(n.strong,{children:"Web\u6a5f\u80fd"})," \u30da\u30fc\u30b8\u306b\u3066\u3001",(0,i.jsx)(n.strong,{children:"REST\u30b5\u30fc\u30d0\u30fc\u3068\u3057\u3066\u516c\u958b"})," \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u6709\u52b9\u5316\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt-text",src:s(122440).A+"",width:"855",height:"381"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"REST\u30b5\u30fc\u30d3\u30b9\u306f 4D \u306e HTTP\u30b5\u30fc\u30d0\u30fc\u3092\u4f7f\u7528\u3059\u308b\u305f\u3081\u30014D Web\u30b5\u30fc\u30d0\u30fc\u304c\u958b\u59cb\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u6709\u52b9\u5316\u3055\u308c\u308b\u3068\u3001\u300c\u8b66\u544a: \u30a2\u30af\u30bb\u30b9\u6a29\u304c\u6b63\u3057\u304f\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u304b\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u300d\u3068\u3044\u3046\u8b66\u544a\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306f REST\u63a5\u7d9a\u306e\u8a8d\u8a3c\u8a2d\u5b9a\u304c\u3055\u308c\u3066\u3044\u306a\u3044\u9650\u308a\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u81ea\u7531\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u3066\u3057\u307e\u3046\u305f\u3081\u3067\u3059\u3002"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u5909\u66f4\u3092\u53cd\u6620\u3059\u308b\u306b\u306f\u30014D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u518d\u8d77\u52d5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"REST\u30a2\u30af\u30bb\u30b9\u306e\u5236\u5fa1",children:"REST\u30a2\u30af\u30bb\u30b9\u306e\u5236\u5fa1"}),"\n",(0,i.jsx)(n.p,{children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001REST\u63a5\u7d9a\u306f\u3059\u3079\u3066\u306e\u30e6\u30fc\u30b6\u30fc\u306b\u5bfe\u3057\u3066\u30aa\u30fc\u30d7\u30f3\u3067\u3059\u304c\u3001\u3053\u306e\u72b6\u614b\u306f\u30e9\u30a4\u30bb\u30f3\u30b9\u7ba1\u7406\u4e0a\u3082\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u4e0a\u3082\u63a8\u5968\u3055\u308c\u307e\u305b\u3093\u3002"}),"\n",(0,i.jsx)(n.p,{children:"REST\u63a5\u7d9a\u306f\u6b21\u306e\u65b9\u6cd5\u3067\u5236\u9650\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["(\u63a8\u5968) ",(0,i.jsx)(n.strong,{children:"\u5f37\u5236\u30ed\u30b0\u30a4\u30f3"})," \u30e2\u30fc\u30c9\u3092\u6709\u52b9\u306b\u3057\u3001",(0,i.jsx)(n.a,{href:"/docs/ja/REST/authUsers#authentify",children:(0,i.jsx)(n.code,{children:"authentify()"})})," \u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u30af\u30e9\u30b9\u95a2\u6570\u3092\u4f5c\u6210\u3057\u3066\u3001\u30e6\u30fc\u30b6\u30fc\u3092\u8a8d\u8a3c\u3057\u3001Web\u30bb\u30c3\u30b7\u30e7\u30f3\u306b\u6a29\u9650\u3092\u5272\u308a\u5f53\u3066\u307e\u3059 (",(0,i.jsx)(n.a,{href:"/docs/ja/REST/authUsers#%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%E3%83%A2%E3%83%BC%E3%83%89",children:"\u30e6\u30fc\u30b6\u30fc\u30ed\u30b0\u30a4\u30f3\u30e2\u30fc\u30c9"})," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044)\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:['\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u8a2d\u5b9a\u306e "',(0,i.jsx)(n.strong,{children:"Web"})," \uff1e ",(0,i.jsx)(n.strong,{children:"Web\u6a5f\u80fd"}),'" \u30da\u30fc\u30b8\u306b\u3066\u3001REST\u30b5\u30fc\u30d3\u30b9\u306b\u5272\u308a\u5f53\u3066\u308b ',(0,i.jsx)(n.strong,{children:"\u8aad\u307f\u8fbc\u307f/\u66f8\u304d\u51fa\u3057"})," \u30e6\u30fc\u30b6\u30fc\u30b0\u30eb\u30fc\u30d7\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"On REST Authentication"})," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u306b\u3001REST\u306e\u521d\u671f\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u51e6\u7406\u3059\u308b\u30b3\u30fc\u30c9\u3092\u66f8\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"\u91cd\u8981",type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7af6\u5408\u3092\u907f\u3051\u308b\u305f\u3081\u3001\u7570\u306a\u308b REST\u30a2\u30af\u30bb\u30b9\u5236\u5fa1\u6a5f\u80fd\u3092\u540c\u6642\u306b\u6709\u52b9\u306b\u3057\u306a\u3044\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"On REST Authentication"}),' \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u3092\u5b9a\u7fa9\u3057\u305f\u5834\u5408\u3001\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u8a2d\u5b9a\u306e "',(0,i.jsx)(n.strong,{children:"Web"})," \uff1e ",(0,i.jsx)(n.strong,{children:"Web\u6a5f\u80fd"}),'" \u30da\u30fc\u30b8\u306b\u3066\u6307\u5b9a\u3057\u305f "\u8aad\u307f\u8fbc\u307f/\u66f8\u304d\u51fa\u3057" \u306e\u8a2d\u5b9a\u306f\u7121\u8996\u3055\u308c\u307e\u3059\u3002']}),"\n"]})}),"\n",(0,i.jsx)(n.h3,{id:"\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u8a2d\u5b9a\u3092\u4f7f\u7528\u3059\u308b",children:"\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u8a2d\u5b9a\u3092\u4f7f\u7528\u3059\u308b"}),"\n",(0,i.jsxs)(n.p,{children:['\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u8a2d\u5b9a\u306e "',(0,i.jsx)(n.strong,{children:"Web"})," \uff1e ",(0,i.jsx)(n.strong,{children:"Web\u6a5f\u80fd"}),'" \u30da\u30fc\u30b8\u306b\u3042\u308b ',(0,i.jsx)(n.strong,{children:"\u8aad\u307f\u8fbc\u307f/\u66f8\u304d\u51fa\u3057"})," \u8a2d\u5b9a\u306f\u3001REST\u30af\u30a8\u30ea\u3092\u4f7f\u3063\u3066 4D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3078\u306e\u30ea\u30f3\u30af\u3092\u8a2d\u7acb\u3059\u308b\u3053\u3068\u306e\u3067\u304d\u308b 4D\u30e6\u30fc\u30b6\u30fc\u306e\u30b0\u30eb\u30fc\u30d7\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u30e1\u30cb\u30e5\u30fc\u306b\u306f ",(0,i.jsx)(n.code,{children:"\\<Anyone>"})," \u304c\u9078\u629e\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u3053\u308c\u306f\u3001REST\u63a5\u7d9a\u306f\u3059\u3079\u3066\u306e\u30e6\u30fc\u30b6\u30fc\u306b\u5bfe\u3057\u3066\u30aa\u30fc\u30d7\u30f3\u3067\u3042\u308b\u3068\u3044\u3046\u72b6\u614b\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002 \u30b0\u30eb\u30fc\u30d7\u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u305d\u306e\u30b0\u30eb\u30fc\u30d7\u306b\u6240\u5c5e\u3059\u308b 4D\u30e6\u30fc\u30b6\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u307f\u304c ",(0,i.jsx)(n.a,{href:"/docs/ja/REST/authUsers",children:"REST\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u901a\u3057\u3066 4D \u306b\u30a2\u30af\u30bb\u30b9"})," \u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002 \u3053\u306e\u30b0\u30eb\u30fc\u30d7\u306b\u6240\u5c5e\u3057\u3066\u3044\u306a\u3044\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u5834\u5408\u30014D \u306f\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u9001\u4fe1\u8005\u306b\u5bfe\u3057\u3066\u8a8d\u8a3c\u30a8\u30e9\u30fc\u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u3053\u306e\u8a2d\u5b9a\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001",(0,i.jsx)(n.code,{children:"On REST Authentication"})," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u3092\u5b9a\u7fa9\u3057\u3066\u306f\u3044\u3051\u307e\u305b\u3093\u3002 \u3053\u308c\u304c\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u8a2d\u5b9a\u306b\u3066\u6307\u5b9a\u3057\u305f\u30a2\u30af\u30bb\u30b9\u8a2d\u5b9a\u306f\u7121\u8996\u3055\u308c\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"On-REST-Authentication-\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3059\u308b",children:"On REST Authentication \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3059\u308b"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"On REST Authentication"})," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9 \u306f 4D \u4e0a\u3067 REST\u30bb\u30c3\u30b7\u30e7\u30f3\u306e\u958b\u59cb\u3092\u7ba1\u7406\u3059\u308b\u305f\u3081\u306e\u65b9\u6cd5\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002 REST\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u3088\u3063\u3066\u65b0\u898f\u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u958b\u59cb\u3055\u308c\u308b\u969b\u3001\u3053\u306e\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u306f\u81ea\u52d5\u7684\u306b\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002 ",(0,i.jsx)(n.a,{href:"/docs/ja/REST/authUsers",children:"REST\u30bb\u30c3\u30b7\u30e7\u30f3\u958b\u59cb\u306e\u30ea\u30af\u30a8\u30b9\u30c8"})," \u3092\u53d7\u4fe1\u3059\u308b\u3068\u3001\u305d\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u30d8\u30c3\u30c0\u30fc\u306b\u306f\u63a5\u7d9a\u306e\u8b58\u5225\u5b50\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u8b58\u5225\u5b50\u3092\u8a55\u4fa1\u3059\u308b\u305f\u3081\u306b ",(0,i.jsx)(n.code,{children:"On REST Authentication"})," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u306f\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002 \u8a55\u4fa1\u306b\u3042\u305f\u3063\u3066\u306f\u30014D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30e6\u30fc\u30b6\u30fc\u30ea\u30b9\u30c8\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3057\u3001\u72ec\u81ea\u306e\u8b58\u5225\u5b50\u306e\u30c6\u30fc\u30d6\u30eb\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\n\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f ",(0,i.jsx)(n.code,{children:"On REST Authentication"})," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u306e ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv18/4D/18/On-REST-Authentication-database-method.301-4505004.ja.html",children:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3"})," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u30c6\u30fc\u30d6\u30eb\u3084\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u516c\u958b",children:"\u30c6\u30fc\u30d6\u30eb\u3084\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u516c\u958b"}),"\n",(0,i.jsxs)(n.p,{children:["4D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e REST\u30b5\u30fc\u30d3\u30b9\u304c\u6709\u52b9\u5316\u3055\u308c\u308b\u3068\u3001",(0,i.jsx)(n.a,{href:"/docs/ja/ORDA/dsmapping#%E3%83%87%E3%83%BC%E3%82%BF%E3%82%B9%E3%83%88%E3%82%A2",children:"\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9"})," \u3092\u901a\u3057\u3066 4D\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u3059\u3079\u3066\u306e\u30c6\u30fc\u30d6\u30eb\u3068\u30d5\u30a3\u30fc\u30eb\u30c9\u304a\u3088\u3073\u683c\u7d0d\u30c7\u30fc\u30bf\u304c REST\u30bb\u30c3\u30b7\u30e7\u30f3\u306b\u3088\u3063\u3066\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u30a2\u30af\u30bb\u30b9\u53ef\u80fd\u3067\u3059\u3002 \u3064\u307e\u308a\u3001\u3059\u3079\u3066\u306e\u30c7\u30fc\u30bf\u306b\u30a2\u30af\u30bb\u30b9\u53ef\u80fd\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b [Employee] \u30c6\u30fc\u30d6\u30eb\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u6b21\u306e\u3088\u3046\u306b\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'http://127.0.0.1:8044/rest/Employee/?$filter="salary>10000"\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3067\u3001salary (\u7d66\u4e0e) \u30d5\u30a3\u30fc\u30eb\u30c9\u304c 10000\u4ee5\u4e0a\u306e\u793e\u54e1\u30c7\u30fc\u30bf\u304c\u53d6\u5f97\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:'"\u975e\u8868\u793a" \u5c5e\u6027\u3092\u9078\u629e\u3055\u308c\u305f\u30c6\u30fc\u30d6\u30eb\u3084\u30d5\u30a3\u30fc\u30eb\u30c9\u3082\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067 REST \u306b\u516c\u958b\u3055\u308c\u3066\u3044\u307e\u3059\u3002'}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'REST \u7d4c\u7531\u3067\u30a2\u30af\u30bb\u30b9\u53ef\u80fd\u306a\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u5236\u9650\u3059\u308b\u306b\u306f\u3001\u30a2\u30af\u30bb\u30b9\u4e0d\u53ef\u306b\u3059\u308b\u30c6\u30fc\u30d6\u30eb\u3084\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u3064\u3044\u3066 "REST\u30ea\u30bd\u30fc\u30b9\u3068\u3057\u3066\u516c\u958b" \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u9078\u629e\u89e3\u9664\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u8a31\u53ef\u3055\u308c\u3066\u3044\u306a\u3044\u30ea\u30bd\u30fc\u30b9\u3078\u306e REST\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u3042\u3063\u305f\u5834\u5408\u30014D\u306f\u30a8\u30e9\u30fc\u3092\u8fd4\u3057\u307e\u3059\u3002'}),"\n",(0,i.jsx)(n.h3,{id:"\u30c6\u30fc\u30d6\u30eb\u306e\u516c\u958b",children:"\u30c6\u30fc\u30d6\u30eb\u306e\u516c\u958b"}),"\n",(0,i.jsx)(n.p,{children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u3059\u3079\u3066\u306e\u30c6\u30fc\u30d6\u30eb\u304c REST \u306b\u516c\u958b\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u4e0a\u306e\u7406\u7531\u304b\u3089\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u4e00\u90e8\u306e\u30c6\u30fc\u30d6\u30eb\u306e\u307f\u3092\u516c\u958b\u3057\u305f\u3044\u72b6\u6cc1\u3082\u3042\u308b\u3067\u3057\u3087\u3046\u3002 \u305f\u3068\u3048\u3070\u3001[Users] \u30c6\u30fc\u30d6\u30eb\u3092\u4f5c\u6210\u3057\u3001\u305d\u306e\u4e2d\u306b\u30e6\u30fc\u30b6\u30fc\u540d\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u305d\u306e\u30c6\u30fc\u30d6\u30eb\u306f\u516c\u958b\u3057\u306a\u3044\u65b9\u304c\u8ce2\u660e\u3067\u3057\u3087\u3046\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u30c6\u30fc\u30d6\u30eb\u3092\u516c\u958b\u3057\u305f\u304f\u306a\u3044\u5834\u5408\u306f:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u30a8\u30c7\u30a3\u30bf\u30fc\u306b\u3066\u5bfe\u8c61\u3068\u306a\u308b\u30c6\u30fc\u30d6\u30eb\u3092\u9078\u629e\u3057\u3001\u53f3\u30af\u30ea\u30c3\u30af\u3067\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30e1\u30cb\u30e5\u30fc\u3092\u958b\u3044\u3066\u30c6\u30fc\u30d6\u30eb\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u9078\u629e\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"REST\u30ea\u30bd\u30fc\u30b9\u3068\u3057\u3066\u516c\u958b"})," \u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u9078\u629e\u3092\u89e3\u9664\u3057\u307e\u3059:\n",(0,i.jsx)(n.img,{alt:"alt-text",src:s(839251).A+"",width:"279",height:"330"}),"\n\u516c\u958b\u8a2d\u5b9a\u3092\u5909\u66f4\u3059\u308b\u5404\u30c6\u30fc\u30d6\u30eb\u306b\u5bfe\u3057\u3066\u3001\u3053\u306e\u624b\u9806\u3092\u7e70\u308a\u8fd4\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u516c\u958b",children:"\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u516c\u958b"}),"\n",(0,i.jsx)(n.p,{children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u3059\u3079\u3066\u306e 4D\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30d5\u30a3\u30fc\u30eb\u30c9\u304c REST \u306b\u516c\u958b\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u30c6\u30fc\u30d6\u30eb\u306e\u4e00\u90e8\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u307f\u3092\u975e\u516c\u958b\u306b\u3057\u305f\u3044\u72b6\u6cc1\u3082\u3042\u308b\u3067\u3057\u3087\u3046\u3002 \u305f\u3068\u3048\u3070\u3001[Employees]Salary \u306e\u3088\u3046\u306a\u30d5\u30a3\u30fc\u30eb\u30c9\u306f\u975e\u516c\u958b\u306e\u65b9\u304c\u3088\u3044\u3067\u3057\u3087\u3046\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u975e\u516c\u958b\u306b\u3059\u308b\u306b\u306f:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u30a8\u30c7\u30a3\u30bf\u30fc\u306b\u3066\u5bfe\u8c61\u3068\u306a\u308b\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u9078\u629e\u3057\u3001\u53f3\u30af\u30ea\u30c3\u30af\u3067\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30e1\u30cb\u30e5\u30fc\u3092\u958b\u3044\u3066\u30d5\u30a3\u30fc\u30eb\u30c9\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u9078\u629e\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u30d5\u30a3\u30fc\u30eb\u30c9\u306e ",(0,i.jsx)(n.strong,{children:"REST\u30ea\u30bd\u30fc\u30b9\u3068\u3057\u3066\u516c\u958b"})," \u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u9078\u629e\u3092\u89e3\u9664\u3057\u307e\u3059:\n",(0,i.jsx)(n.img,{alt:"alt-text",src:s(419691).A+"",width:"279",height:"271"}),"\nRepeat this for each field whose exposure needs to be modified."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u3042\u308b\u30d5\u30a3\u30fc\u30eb\u30c9\u304c REST \u3092\u901a\u3057\u3066\u30a2\u30af\u30bb\u30b9\u53ef\u80fd\u3067\u3042\u308b\u305f\u3081\u306b\u306f\u3001\u305d\u306e\u89aa\u30c6\u30fc\u30d6\u30eb\u3082\u516c\u958b\u3055\u308c\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u89aa\u30c6\u30fc\u30d6\u30eb\u304c\u516c\u958b\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u5404\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u516c\u958b\u8a2d\u5b9a\u306b\u95a2\u308f\u3089\u305a\u3001\u3059\u3079\u3066\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u30a2\u30af\u30bb\u30b9\u4e0d\u53ef\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u30e2\u30fc\u30c9",children:"\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u30e2\u30fc\u30c9"}),"\n",(0,i.jsxs)(n.p,{children:["4D Server\u4e0a\u3067\u306f\u3001",(0,i.jsx)(n.strong,{children:"\u30a4\u30f3\u30bf\u30d7\u30ea\u30bf\u30e2\u30fc\u30c9\u3067\u3042\u3063\u3066\u3082"}),"\u3001REST\u30ea\u30af\u30a8\u30b9\u30c8\u306f\u81ea\u52d5\u7684\u306b\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u30d7\u30ed\u30bb\u30b9\u3067\u51e6\u7406\u3055\u308c\u307e\u3059\u3002 \u305d\u306e\u305f\u3081\u3001\u30b3\u30fc\u30c9\u306f ",(0,i.jsx)(n.a,{href:"/docs/ja/WebServer/preemptiveWeb#%E3%82%B9%E3%83%AC%E3%83%83%E3%83%89%E3%82%BB%E3%83%BC%E3%83%95%E3%81%AAWeb%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AE%E6%9B%B8%E3%81%8D%E6%96%B9",children:"\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u5b9f\u884c\u306b\u6e96\u62e0"})," \u3057\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u30b5\u30fc\u30d0\u30fc\u30de\u30b7\u30f3\u4e0a\u306e\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fcWeb\u30b3\u30fc\u30c9\u3092\u30c7\u30d0\u30c3\u30b0\u3059\u308b\u306b\u306f\u3001\u3042\u3089\u304b\u3058\u3081\u30b5\u30fc\u30d0\u30fc\u306e\u30c7\u30d0\u30c3\u30ac\u30fc\u3092 ",(0,i.jsx)(n.a,{href:"/docs/ja/Debugging/debugging-remote",children:"\u30b5\u30fc\u30d0\u30fc"})," \u307e\u305f\u306f ",(0,i.jsx)(n.a,{href:"/docs/ja/Debugging/debugging-remote#%E3%83%AA%E3%83%A2%E3%83%BC%E3%83%884d%E3%82%AF%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%83%88%E3%81%A7%E3%81%AE%E3%83%87%E3%83%90%E3%83%83%E3%82%AC%E3%83%BC%E3%81%AE%E6%9C%89%E5%8A%B9%E5%8C%96",children:"\u30ea\u30e2\u30fc\u30c8\u30de\u30b7\u30f3"})," \u3067\u6709\u52b9\u5316\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u3001Web\u30d7\u30ed\u30bb\u30b9\u304c\u30b3\u30aa\u30da\u30e9\u30c6\u30a3\u30d6\u30e2\u30fc\u30c9\u306b\u5207\u308a\u66ff\u308f\u308a\u3001Web\u30b5\u30fc\u30d0\u30fc\u30b3\u30fc\u30c9\u306e\u30c7\u30d0\u30c3\u30b0\u304c\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u30b7\u30f3\u30b0\u30eb\u30e6\u30fc\u30b6\u30fc\u306e 4D \u3067\u306f\u3001\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc\u30b3\u30fc\u30c9\u306f\u5e38\u306b\u30b3\u30aa\u30da\u30e9\u30c6\u30a3\u30d6\u30e2\u30fc\u30c9\u3067\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"})]})}function E(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},221020:(e,n,s)=>{var i=s(296540),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,s){var i,t={},o=null,h=null;for(i in void 0!==s&&(o=""+s),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(h=n.ref),n)c.call(n,i)&&!d.hasOwnProperty(i)&&(t[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===t[i]&&(t[i]=n[i]);return{$$typeof:r,type:e,key:o,ref:h,props:t,_owner:l.current}}n.Fragment=t,n.jsx=o,n.jsxs=o},474848:(e,n,s)=>{e.exports=s(221020)},122440:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/Settings-934d69d2618fdc41073c2f25c38ea3a6.png"},419691:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/field-4db67392f4a6381fd75a7ba294943b5b.png"},839251:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/table-1c946003f2068cb28b604481145c98a8.png"},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>l});var i=s(296540);const r={},t=i.createContext(r);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);