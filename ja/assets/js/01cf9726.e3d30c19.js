/*! For license information please see 01cf9726.e3d30c19.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[16769],{485598:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>j,frontMatter:()=>c,metadata:()=>d,toc:()=>t});var s=r(474848),i=r(28453);const c={id:"clientServer",title:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8/\u30b5\u30fc\u30d0\u30fc\u7ba1\u7406"},l=void 0,d={id:"Desktop/clientServer",title:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8/\u30b5\u30fc\u30d0\u30fc\u7ba1\u7406",description:"\u7d44\u307f\u8fbc\u307f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8/\u30b5\u30fc\u30d0\u30fc\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u307e\u305f\u306f\u30ea\u30e2\u30fc\u30c8\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u5f62\u3067\u30014D\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30af\u30e9\u30a4\u30a2\u30f3\u30c8/\u30b5\u30fc\u30d0\u30fc\u69cb\u6210\u3067\u904b\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R5/Desktop/clientServer.md",sourceDirName:"Desktop",slug:"/Desktop/clientServer",permalink:"/docs/ja/Desktop/clientServer",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Desktop%2FclientServer.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"clientServer",title:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8/\u30b5\u30fc\u30d0\u30fc\u7ba1\u7406"},sidebar:"docs",previous:{title:"Desktop Applications",permalink:"/docs/ja/category/desktop-applications"},next:{title:"Access Rights",permalink:"/docs/ja/category/access-rights"}},o={},t=[{value:"\u7d44\u307f\u8fbc\u307f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8/\u30b5\u30fc\u30d0\u30fc\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u958b\u304f",id:"\u7d44\u307f\u8fbc\u307f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30fc\u30d0\u30fc\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u958b\u304f",level:2},{value:"\u30ea\u30e2\u30fc\u30c8\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f",id:"\u30ea\u30e2\u30fc\u30c8\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f",level:2},{value:"\u30b5\u30fc\u30d0\u30fc\u4e0a\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u306e\u66f4\u65b0",id:"\u30b5\u30fc\u30d0\u30fc\u4e0a\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u306e\u66f4\u65b0",level:3},{value:"\u30ea\u30e2\u30fc\u30c8\u30de\u30b7\u30f3\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u306e\u66f4\u65b0",id:"\u30ea\u30e2\u30fc\u30c8\u30de\u30b7\u30f3\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u306e\u66f4\u65b0",level:3},{value:"4D \u3068 4D Server \u306e\u540c\u3058\u30de\u30b7\u30f3\u4e0a\u3067\u306e\u4f7f\u7528",id:"4D-\u3068-4D-Server-\u306e\u540c\u3058\u30de\u30b7\u30f3\u4e0a\u3067\u306e\u4f7f\u7528",level:2},{value:"\u30ea\u30e2\u30fc\u30c8\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3",id:"\u30ea\u30e2\u30fc\u30c8\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3",level:2},{value:"\u52b9\u679c",id:"\u52b9\u679c",level:3},{value:"\u5229\u7528\u53ef\u80fd\u6027",id:"\u5229\u7528\u53ef\u80fd\u6027",level:3},{value:"\u95a2\u9023\u9805\u76ee (\u30d6\u30ed\u30b0\u8a18\u4e8b)",id:"\u95a2\u9023\u9805\u76ee-\u30d6\u30ed\u30b0\u8a18\u4e8b",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u7d44\u307f\u8fbc\u307f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8/\u30b5\u30fc\u30d0\u30fc\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u307e\u305f\u306f\u30ea\u30e2\u30fc\u30c8\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u5f62\u3067\u30014D\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30af\u30e9\u30a4\u30a2\u30f3\u30c8/\u30b5\u30fc\u30d0\u30fc\u69cb\u6210\u3067\u904b\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u7d44\u307f\u8fbc\u307f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8/\u30b5\u30fc\u30d0\u30fc\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3"})," \u306f ",(0,s.jsx)(n.a,{href:"/docs/ja/Desktop/building#%E3%82%AF%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%83%88%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%83%9A%E3%83%BC%E3%82%B8",children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30d3\u30eb\u30c0\u30fc"})," \u3092\u4f7f\u3063\u3066\u751f\u6210\u3057\u307e\u3059\u3002 \u3053\u308c\u3089\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u904b\u7528\u306b\u4f7f\u3044\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u30ea\u30e2\u30fc\u30c8\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"})," \u3068\u306f\u30014D Server \u4e0a\u3067\u958b\u3044\u305f ",(0,s.jsx)(n.a,{href:"/docs/ja/Project/architecture",children:".4DProject"})," \u30d5\u30a1\u30a4\u30eb\u306e\u3053\u3068\u3067\u3001\u30ea\u30e2\u30fc\u30c8\u30e2\u30fc\u30c9\u306e 4D \u3092\u4f7f\u3063\u3066\u63a5\u7d9a\u3057\u307e\u3059\u3002 4D Server \u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e ",(0,s.jsx)(n.a,{href:"/docs/ja/Desktop/building#%E3%82%B3%E3%83%B3%E3%83%91%E3%82%A4%E3%83%AB%E6%B8%88%E3%81%BF%E3%82%B9%E3%83%88%E3%83%A9%E3%82%AF%E3%83%81%E3%83%A3%E3%83%BC%E3%82%92%E3%83%93%E3%83%AB%E3%83%89",children:"\u5727\u7e2e\u5f62\u5f0f"})," \u3067\u3042\u308b .4dz \u30d5\u30a1\u30a4\u30eb\u3092\u30ea\u30e2\u30fc\u30c8\u306e 4D \u306b\u9001\u4fe1\u3057\u307e\u3059\u3002\u3064\u307e\u308a\u3001\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u30d5\u30a1\u30a4\u30eb\u306f\u8aad\u307f\u53d6\u308a\u5c02\u7528\u3067\u3059\u3002 \u3053\u306e\u69cb\u6210\u306f\u901a\u5e38\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30c6\u30b9\u30c8\u306b\u4f7f\u3044\u307e\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(198518).A+"",width:"581",height:"249"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u305f\u3060\u3057\u3001",(0,s.jsx)(n.strong,{children:"4D Server \u3068\u540c\u3058\u30de\u30b7\u30f3"})," \u304b\u3089\u63a5\u7d9a\u3057\u3066\u3044\u308b\u5834\u5408\u306b\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u306e\u5909\u66f4\u304c\u53ef\u80fd\u3067\u3059\u3002 \u3053\u306e ",(0,s.jsx)(n.a,{href:"#4d-%E3%81%A8-4d-server-%E3%81%AE%E5%90%8C%E3%81%98%E3%83%9E%E3%82%B7%E3%83%B3%E4%B8%8A%E3%81%A7%E3%81%AE%E4%BD%BF%E7%94%A8",children:"\u7279\u6b8a\u6a5f\u80fd"})," \u306b\u3088\u308a\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8/\u30b5\u30fc\u30d0\u30fc\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u904b\u7528\u6642\u3068\u540c\u3058\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3067\u958b\u767a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u7d44\u307f\u8fbc\u307f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30fc\u30d0\u30fc\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u958b\u304f",children:"\u7d44\u307f\u8fbc\u307f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8/\u30b5\u30fc\u30d0\u30fc\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u958b\u304f"}),"\n",(0,s.jsx)(n.p,{children:"\u30d3\u30eb\u30c9\u3055\u308c\u305f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8/\u30b5\u30fc\u30d0\u30fc\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u8d77\u52d5\u3084\u63a5\u7d9a\u51e6\u7406\u304c\u7c21\u6613\u3067\u3059:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u30b5\u30fc\u30d0\u30fc\u3092\u8d77\u52d5\u3059\u308b\u306b\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30c0\u30d6\u30eb\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002 \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u8d77\u52d5\u3059\u308b\u306b\u3082\u3001\u540c\u69d8\u306b\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30c0\u30d6\u30eb\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\u3059\u308b\u3068\u3001\u30b5\u30fc\u30d0\u30fc\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3078\u306e\u63a5\u7d9a\u304c\u76f4\u63a5\u304a\u3053\u306a\u308f\u308c\u308b\u305f\u3081\u3001"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f ",(0,s.jsx)(n.a,{href:"/docs/ja/Desktop/building#%E3%82%AF%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%83%88/%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%A8%E3%81%AF",children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30d3\u30eb\u30c9"})," \u30da\u30fc\u30b8\u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u30ea\u30e2\u30fc\u30c8\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f",children:"\u30ea\u30e2\u30fc\u30c8\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f"}),"\n",(0,s.jsxs)(n.p,{children:["4D Server \u4e0a\u3067\u52d5\u3044\u3066\u3044\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u521d\u3081\u3066\u63a5\u7d9a\u3059\u308b\u5834\u5408\u306f\u3001\u901a\u5e38\u306f\u6a19\u6e96\u306e\u63a5\u7d9a\u30c0\u30a4\u30a2\u30ed\u30b0\u3092\u4f7f\u3044\u307e\u3059\u3002 \u4ee5\u964d\u306f\u3001",(0,s.jsx)(n.strong,{children:"\u6700\u8fd1\u4f7f\u7528\u3057\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f"})," \u30e1\u30cb\u30e5\u30fc\u3084\u30014DLink \u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\u30d5\u30a1\u30a4\u30eb\u3092\u4f7f\u3063\u3066\u76f4\u63a5\u63a5\u7d9a\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"4D Server \u3067\u5b9f\u884c\u3055\u308c\u3066\u3044\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u63a5\u7d9a\u3059\u308b\u306b\u306f:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u6b21\u306e\u3044\u305a\u308c\u304b\u306e\u65b9\u6cd5\u3092\u304a\u3053\u306a\u3044\u307e\u3059:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Welcome \u30a6\u30a3\u30b6\u30fc\u30c9\u306b\u3066 ",(0,s.jsx)(n.strong,{children:"4D Server\u306b\u63a5\u7d9a"})," \u3092\u9078\u629e\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u30d5\u30a1\u30a4\u30eb"})," \u30e1\u30cb\u30e5\u30fc\u3088\u308a **\u958b\u304f \uff1e \u30ea\u30e2\u30fc\u30c8\u30d7\u30ed\u30b8\u30a7\u30af\u30c8...**\u3092\u9078\u629e\u3059\u308b\u304b\u3001",(0,s.jsx)(n.strong,{children:"\u958b\u304f"})," \u30c4\u30fc\u30eb\u30d0\u30fc\u30dc\u30bf\u30f3\u3088\u308a\u540c\u69d8\u306b\u9078\u629e\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["4D Server \u306b\u63a5\u7d9a\u3059\u308b\u305f\u3081\u306e\u30c0\u30a4\u30a2\u30ed\u30b0\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002 \u30c0\u30a4\u30a2\u30ed\u30b0\u306b\u306f ",(0,s.jsx)(n.strong,{children:"\u6700\u8fd1\u4f7f\u7528"}),"\u3001",(0,s.jsx)(n.strong,{children:"\u5229\u7528\u53ef"}),"\u3001\u304a\u3088\u3073 ",(0,s.jsx)(n.strong,{children:"\u30ab\u30b9\u30bf\u30e0"})," \u3068\u3044\u3046\u30013\u3064\u306e\u30bf\u30d6\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u30ea\u30e2\u30fc\u30c8\u306e 4D \u3068\u540c\u3058\u30b5\u30d6\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306b 4D Server \u304c\u63a5\u7d9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f ",(0,s.jsx)(n.strong,{children:"\u5229\u7528\u53ef"})," \u30bf\u30d6\u3092\u9078\u629e\u3057\u307e\u3059\u3002 4D Server \u306b\u306f\u7d44\u307f\u8fbc\u307f\u306e\u30d6\u30ed\u30fc\u30c9\u30ad\u30e3\u30b9\u30c8\u30b7\u30b9\u30c6\u30e0\u304c\u3042\u308a\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u4e0a\u306b\u5229\u7528\u53ef\u80fd\u306a 4D Server \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u540d\u524d\u3092\u516c\u958b\u3057\u307e\u3059\u3002 \u3053\u306e\u30ea\u30b9\u30c8\u306f\u3001\u540d\u524d\u304c\u898b\u3064\u304b\u3063\u305f\u9806\u306b\u8868\u793a\u3055\u308c\u3001\u52d5\u7684\u306b\u66f4\u65b0\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(410040).A+"",width:"522",height:"482"})}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306e\u30ea\u30b9\u30c8\u304b\u3089\u30b5\u30fc\u30d0\u30fc\u306b\u63a5\u7d9a\u3059\u308b\u306b\u306f\u3001\u540d\u524d\u4e0a\u3067\u30c0\u30d6\u30eb\u30af\u30ea\u30c3\u30af\u3059\u308b\u304b\u3001\u540d\u524d\u3092\u9078\u629e\u3057\u3066 ",(0,s.jsx)(n.strong,{children:"OK"})," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u516c\u958b\u3055\u308c\u3066\u3044\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c ",(0,s.jsx)(n.strong,{children:"\u5229\u7528\u53ef"})," \u30bf\u30d6\u306b\u898b\u3064\u304b\u3089\u306a\u3044\u5834\u5408\u306b\u306f\u3001",(0,s.jsx)(n.strong,{children:"\u30ab\u30b9\u30bf\u30e0"})," \u30bf\u30d6\u3092\u958b\u304d\u307e\u3059\u3002 \u30ab\u30b9\u30bf\u30e0\u30da\u30fc\u30b8\u3067\u306f\u3001IP\u30a2\u30c9\u30ec\u30b9\u3067\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u4e0a\u306e\u30b5\u30fc\u30d0\u30fc\u3092\u6307\u5b9a\u3057\u3001\u305d\u308c\u306b\u4efb\u610f\u306e\u540d\u524d\u3092\u3064\u3051\u3089\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(992406).A+"",width:"522",height:"522"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u540d"}),": 4D Server \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30ed\u30fc\u30ab\u30eb\u540d\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u540d\u524d\u306f ",(0,s.jsx)(n.strong,{children:"\u6700\u8fd1\u4f7f\u7528"})," \u30da\u30fc\u30b8\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u53c2\u7167\u3059\u308b\u969b\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30a2\u30c9\u30ec\u30b9"}),": 4D Server \u304c\u8d77\u52d5\u3055\u308c\u305f\u30de\u30b7\u30f3\u306e IP\u30a2\u30c9\u30ec\u30b9\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["2\u3064\u306e\u30b5\u30fc\u30d0\u30fc\u304c\u540c\u3058\u30de\u30b7\u30f3\u4e0a\u3067\u540c\u6642\u306b\u8d77\u52d5\u3055\u308c\u3066\u3044\u308b\u3068\u304d\u306f\u3001IP\u30a2\u30c9\u30ec\u30b9\u306e\u5f8c\u306b\u30b3\u30ed\u30f3\u3068\u30dd\u30fc\u30c8\u756a\u53f7\u3092\u7d9a\u3051\u307e\u3059\u3002\u4f8b: ",(0,s.jsx)(n.code,{children:"192.168.92.104:19820"}),"\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u30014D Server \u306e\u516c\u958b\u30dd\u30fc\u30c8\u306f 19813 \u3067\u3059\u3002 \u3053\u306e\u756a\u53f7\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8a2d\u5b9a\u3067\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u958b\u767a\u30e2\u30fc\u30c9\u3092\u6709\u52b9\u5316\u3059\u308b"})," \u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001\u7279\u5225\u306a\u8aad\u307f\u53d6\u308a/\u66f8\u304d\u8fbc\u307f\u30e2\u30fc\u30c9\u3067\u30ea\u30e2\u30fc\u30c8\u63a5\u7d9a\u3092\u958b\u304d\u307e\u3059 (\u4e92\u63db\u6027\u30aa\u30d7\u30b7\u30e7\u30f3)\u3002\u3053\u306e\u30e2\u30fc\u30c9\u3067\u306f\u3001\u30ea\u30e2\u30fc\u30c84D \u304b\u3089\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u30fc\u3078\u306e\u30a2\u30af\u30bb\u30b9\u304c\u78ba\u4fdd\u3055\u308c\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306e\u30da\u30fc\u30b8\u3067\u30b5\u30fc\u30d0\u30fc\u3092\u6307\u5b9a\u3057\u305f\u3089\u3001",(0,s.jsx)(n.strong,{children:"OK"})," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30b5\u30fc\u30d0\u30fc\u306b\u63a5\u7d9a\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u30b5\u30fc\u30d0\u30fc\u3068\u306e\u63a5\u7d9a\u304c\u78ba\u7acb\u3055\u308c\u308b\u3068\u3001\u305d\u306e\u30ea\u30e2\u30fc\u30c8\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f ",(0,s.jsx)(n.strong,{children:"\u6700\u8fd1\u4f7f\u7528"})," \u30bf\u30d6\u306e\u30ea\u30b9\u30c8\u306b\u52a0\u3048\u3089\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u30b5\u30fc\u30d0\u30fc\u4e0a\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u306e\u66f4\u65b0",children:"\u30b5\u30fc\u30d0\u30fc\u4e0a\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u306e\u66f4\u65b0"}),"\n",(0,s.jsxs)(n.p,{children:["\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc\u30e2\u30fc\u30c9\u306e\u5834\u5408\u30014D Server \u306f ",(0,s.jsx)(n.em,{children:".4DProject"})," \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb (\u975e\u5727\u7e2e) \u306e ",(0,s.jsx)(n.a,{href:"/docs/ja/Desktop/building#%E3%82%B3%E3%83%B3%E3%83%91%E3%82%A4%E3%83%AB%E6%B8%88%E3%81%BF%E3%82%B9%E3%83%88%E3%83%A9%E3%82%AF%E3%83%81%E3%83%A3%E3%83%BC%E3%82%92%E3%83%93%E3%83%AB%E3%83%89",children:".4dz"})," \u30d5\u30a1\u30a4\u30eb\u3092\u81ea\u52d5\u7684\u306b\u4f5c\u6210\u3057\u3001\u30ea\u30e2\u30fc\u30c8\u30de\u30b7\u30f3\u306b\u9001\u4fe1\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u7de8\u96c6\u3055\u308c 4D Server \u306b\u30ea\u30ed\u30fc\u30c9\u3055\u308c\u305f\u5834\u5408\u306a\u3069\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e .4dz\u30d5\u30a1\u30a4\u30eb\u306f\u81ea\u52d5\u7684\u306b\u66f4\u65b0\u3055\u308c\u307e\u3059\u3002 \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u6b21\u306e\u5834\u5408\u306b\u30ea\u30ed\u30fc\u30c9\u3055\u308c\u307e\u3059:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"4D Server \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30a6\u30a3\u30f3\u30c9\u30a6\u304c OS \u306e\u6700\u524d\u9762\u306b\u6765\u305f\u308a\u3001\u540c\u3058\u30de\u30b7\u30f3\u4e0a\u306e 4D \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u7de8\u96c6\u3092\u4fdd\u5b58\u3057\u305f\u5834\u5408 (\u5f8c\u8ff0\u53c2\u7167) \u306b\u81ea\u52d5\u3067\u30ea\u30ed\u30fc\u30c9\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"RELOAD PROJECT"})," \u30b3\u30de\u30f3\u30c9\u304c\u5b9f\u884c\u3055\u308c\u305f\u3068\u304d\u306b\u30ea\u30ed\u30fc\u30c9\u3055\u308c\u307e\u3059\u3002 \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u65b0\u3057\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u30bd\u30fc\u30b9\u7ba1\u7406\u30b7\u30b9\u30c6\u30e0\u3088\u308a\u30d7\u30eb\u3057\u305f\u3068\u304d\u306a\u3069\u306b\u3001\u3053\u306e\u30b3\u30de\u30f3\u30c9\u3092\u547c\u3073\u51fa\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u30ea\u30e2\u30fc\u30c8\u30de\u30b7\u30f3\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u306e\u66f4\u65b0",children:"\u30ea\u30e2\u30fc\u30c8\u30de\u30b7\u30f3\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u306e\u66f4\u65b0"}),"\n",(0,s.jsx)(n.p,{children:"4D Server \u4e0a\u3067 .4dz \u30d5\u30a1\u30a4\u30eb\u306e\u66f4\u65b0\u7248\u304c\u751f\u6210\u3055\u308c\u305f\u5834\u5408\u3001\u305d\u306e\u66f4\u65b0\u7248\u3092\u5229\u7528\u3059\u308b\u306b\u306f\u3001\u63a5\u7d9a\u4e2d\u306e\u30ea\u30e2\u30fc\u30c8 4D \u30de\u30b7\u30f3\u306f\u4e00\u5ea6\u30ed\u30b0\u30a2\u30a6\u30c8\u3057\u30014D Server \u306b\u518d\u63a5\u7d9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"4D-\u3068-4D-Server-\u306e\u540c\u3058\u30de\u30b7\u30f3\u4e0a\u3067\u306e\u4f7f\u7528",children:"4D \u3068 4D Server \u306e\u540c\u3058\u30de\u30b7\u30f3\u4e0a\u3067\u306e\u4f7f\u7528"}),"\n",(0,s.jsx)(n.p,{children:"\u540c\u3058\u30de\u30b7\u30f3\u4e0a\u3067 4D \u304c 4D Server \u306b\u63a5\u7d9a\u3059\u308b\u3068\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u30b7\u30f3\u30b0\u30eb\u30e6\u30fc\u30b6\u30fc\u30e2\u30fc\u30c9\u306e 4D \u306e\u3088\u3046\u306b\u3075\u308b\u307e\u3044\u3001\u30c7\u30b6\u30a4\u30f3\u74b0\u5883\u306b\u3066\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u306e\u7de8\u96c6\u304c\u53ef\u80fd\u3067\u3059\u3002 \u3053\u306e\u6a5f\u80fd\u306b\u3088\u308a\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8/\u30b5\u30fc\u30d0\u30fc\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u904b\u7528\u6642\u3068\u540c\u3058\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3067\u958b\u767a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u540c\u3058\u30de\u30b7\u30f3\u4e0a\u3067 4D Server \u306b 4D \u3092\u63a5\u7d9a\u3059\u308b\u5834\u5408\u306b\u306f\u3001 ",(0,s.jsx)(n.a,{href:"#%E3%83%AA%E3%83%A2%E3%83%BC%E3%83%88%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%82%92%E9%96%8B%E3%81%8F",children:"\u63a5\u7d9a\u6642\u306e\u30aa\u30d7\u30b7\u30e7\u30f3"})," \u306e\u8a2d\u5b9a\u306b\u304b\u304b\u308f\u3089\u305a ",(0,s.jsx)(n.strong,{children:"\u958b\u767a\u30e2\u30fc\u30c9"})," \u304c\u81ea\u52d5\u7684\u306b\u6709\u52b9\u5316\u3055\u308c\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u30c7\u30b6\u30a4\u30f3\u74b0\u5883\u306b\u3066 4D \u304c ",(0,s.jsx)(n.strong,{children:"\u3059\u3079\u3066\u3092\u4fdd\u5b58"})," \u30a2\u30af\u30b7\u30e7\u30f3\u3092 (",(0,s.jsx)(n.strong,{children:"\u30d5\u30a1\u30a4\u30eb"})," \u30e1\u30cb\u30e5\u30fc\u3092\u4f7f\u3063\u3066\u660e\u793a\u7684\u306b\u3001\u307e\u305f\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30e2\u30fc\u30c9\u3078\u306e\u79fb\u884c\u306b\u3088\u308a\u6697\u793a\u7684\u306b) \u304a\u3053\u306a\u3046\u3068\u30014D Server \u306f\u540c\u671f\u7684\u306b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u3092\u30ea\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002 4D Server \u306b\u3088\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u306e\u30ea\u30ed\u30fc\u30c9\u304c\u5b8c\u4e86\u3059\u308b\u306e\u3092\u5f85\u3063\u3066\u30014D \u306f\u7d9a\u884c\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u305f\u3060\u3057\u3001",(0,s.jsx)(n.a,{href:"/docs/ja/Project/architecture",children:"\u6a19\u6e96\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u30fc"})," \u3068\u306f\u6b21\u306e\u3075\u308b\u307e\u3044\u306b\u304a\u3044\u3066\u7570\u306a\u308a\u307e\u3059\u306e\u3067\u3001\u6ce8\u610f\u304c\u5fc5\u8981\u3067\u3059:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'4D \u304c\u4f7f\u7528\u3059\u308b userPreferences.{username} \u30d5\u30a9\u30eb\u30c0\u30fc\u306f\u30014D Server \u304c\u4f7f\u7528\u3059\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u30fc\u5185\u306e\u3082\u306e\u3068\u540c\u4e00\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002 \u3053\u306e\u5c02\u7528\u306e "userPreferences" \u30d5\u30a9\u30eb\u30c0\u30fc\u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30b7\u30b9\u30c6\u30e0\u30d5\u30a9\u30eb\u30c0\u30fc\u5185 (\u3064\u307e\u308a\u3001.4dz\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f\u5834\u5408\u3068\u540c\u3058\u5834\u6240) \u306b\u683c\u7d0d\u3055\u308c\u307e\u3059\u3002'}),"\n",(0,s.jsx)(n.li,{children:'4D \u304c\u4f7f\u7528\u3059\u308b DerivedData \u30d5\u30a9\u30eb\u30c0\u30fc\u306f\u30014D Server \u304c\u4f7f\u7528\u3059\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a9\u30eb\u30c0\u30fc\u5185\u306e\u3082\u306e\u3068\u540c\u4e00\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002 \u3053\u306e\u5c02\u7528\u306e "DerivedDataRemote" \u30d5\u30a9\u30eb\u30c0\u30fc\u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30b7\u30b9\u30c6\u30e0\u30d5\u30a9\u30eb\u30c0\u30fc\u5185\u306b\u683c\u7d0d\u3055\u308c\u307e\u3059\u3002'}),"\n",(0,s.jsx)(n.li,{children:"catalog.4DCatalog \u30d5\u30a1\u30a4\u30eb\u306f 4D \u3067\u306f\u306a\u304f 4D Server \u306b\u3088\u3063\u3066\u7de8\u96c6\u3055\u308c\u307e\u3059\u3002 catalog \u306e\u60c5\u5831\u306f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8/\u30b5\u30fc\u30d0\u30fc\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u3088\u3063\u3066\u540c\u671f\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.li,{children:"directory.json \u30d5\u30a1\u30a4\u30eb\u306f 4D \u3067\u306f\u306a\u304f 4D Server \u306b\u3088\u3063\u3066\u7de8\u96c6\u3055\u308c\u307e\u3059\u3002 directory \u306e\u60c5\u5831\u306f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8/\u30b5\u30fc\u30d0\u30fc\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u3088\u3063\u3066\u540c\u671f\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.li,{children:"4D \u306f\u30014D Server \u4e0a\u306e\u3082\u306e\u3067\u306f\u306a\u304f\u3001\u72ec\u81ea\u306e\u5185\u90e8\u7684\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3084\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u3084\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092 4D \u3042\u308b\u3044\u306f 4D Server \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30ec\u30d9\u30eb\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3053\u3068\u306f\u3001\u63a8\u5968\u3055\u308c\u307e\u305b\u3093\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u30ea\u30e2\u30fc\u30c8\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3",children:"\u30ea\u30e2\u30fc\u30c8\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3"}),"\n",(0,s.jsxs)(n.p,{children:["\u30b5\u30fc\u30d0\u30fc\u4e0a\u3067\u306f\u3001",(0,s.jsx)(n.a,{href:"/docs/ja/API/SessionClass#session",children:(0,s.jsx)(n.code,{children:"Session"})})," \u30b3\u30de\u30f3\u30c9\u306f\u30ab\u30ec\u30f3\u30c8\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3\u306e\u60c5\u5831\u3092\u683c\u7d0d\u3059\u308b ",(0,s.jsx)(n.code,{children:"Session"})," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3057\u307e\u3059\u3002 \u3053\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u6271\u3046\u306b\u306f\u3001",(0,s.jsxs)(n.a,{href:"/docs/ja/API/SessionClass",children:[(0,s.jsx)(n.code,{children:"Session"})," \u30af\u30e9\u30b9"]})," \u306e\u95a2\u6570\u3068\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u52b9\u679c",children:"\u52b9\u679c"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Session"}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30ea\u30e2\u30fc\u30c8\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002 \u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3\u306e\u3059\u3079\u3066\u306e\u30d7\u30ed\u30bb\u30b9\u9593\u3067\u30c7\u30fc\u30bf\u3092\u5171\u6709\u3059\u308b\u306b\u306f\u3001",(0,s.jsx)(n.a,{href:"/docs/ja/API/SessionClass#storage",children:(0,s.jsx)(n.code,{children:"Session.storage"})})," \u5171\u6709\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u305f\u3068\u3048\u3070\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u30b5\u30fc\u30d0\u30fc\u306b\u63a5\u7d9a\u3059\u308b\u969b\u306b\u30e6\u30fc\u30b6\u30fc\u8a8d\u8a3c\u624b\u7d9a\u304d\u3092\u958b\u59cb\u3057\u3001\u30e1\u30fc\u30eb\u3084 SMS \u3067\u9001\u4fe1\u3055\u308c\u305f\u30b3\u30fc\u30c9\u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u5165\u529b\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u6b21\u306b\u3001\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u3092\u30bb\u30c3\u30b7\u30e7\u30f3\u306e storage \u306b\u8ffd\u52a0\u3057\u3001\u30b5\u30fc\u30d0\u30fc\u304c\u30e6\u30fc\u30b6\u30fc\u3092\u8b58\u5225\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002 \u3053\u306e\u65b9\u6cd5\u306b\u3088\u308a\u30014D\u30b5\u30fc\u30d0\u30fc\u306f\u3059\u3079\u3066\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30d7\u30ed\u30bb\u30b9\u306e\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u305f\u3081\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u5f79\u5272\u306b\u5fdc\u3058\u3066\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3055\u308c\u305f\u30b3\u30fc\u30c9\u3092\u7528\u610f\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u5229\u7528\u53ef\u80fd\u6027",children:"\u5229\u7528\u53ef\u80fd\u6027"}),"\n",(0,s.jsxs)(n.p,{children:["\u30ea\u30e2\u30fc\u30c8\u30e6\u30fc\u30b6\u30fc ",(0,s.jsx)(n.code,{children:"Session"})," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u4ee5\u4e0b\u304b\u3089\u5229\u7528\u3067\u304d\u307e\u3059:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/ja/Project/code-overview#%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E4%B8%8A%E3%81%A7%E5%AE%9F%E8%A1%8C",children:"\u30b5\u30fc\u30d0\u30fc\u4e0a\u3067\u5b9f\u884c"}),' \u5c5e\u6027\u3092\u6301\u3064\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9 (\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30d7\u30ed\u30bb\u30b9\u306e "\u53cc\u5b50" \u30d7\u30ed\u30bb\u30b9\u3067\u5b9f\u884c\u3055\u308c\u307e\u3059)']}),"\n",(0,s.jsx)(n.li,{children:"\u30c8\u30ea\u30ac\u30fc"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"On Server Open Connection"})," \u304a\u3088\u3073 ",(0,s.jsx)(n.code,{children:"On Server Shutdown Connection"})," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["\u30b5\u30fc\u30d0\u30fc\u4e0a\u306e\u3059\u3079\u3066\u306e\u30b9\u30c8\u30a2\u30c9\u30d7\u30ed\u30b7\u30fc\u30b8\u30e3\u30fc\u306f\u3001\u540c\u3058\u4eee\u60f3\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u5171\u6709\u3057\u307e\u3059\u3002 \u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4Dv20R5/4D/20-R5/4D-Server-and-the-4D-Language.300-6932726.ja.html",children:"doc.4d.com"})," \u306e\u3053\u306e\u30da\u30fc\u30b8 \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,s.jsx)(n.h3,{id:"\u95a2\u9023\u9805\u76ee-\u30d6\u30ed\u30b0\u8a18\u4e8b",children:"\u95a2\u9023\u9805\u76ee (\u30d6\u30ed\u30b0\u8a18\u4e8b)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://blog.4d.com/ja/new-4d-remote-session-object-with-client-server-connection-and-stored-procedure/",children:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8/\u30b5\u30fc\u30d0\u30fc\u63a5\u7d9a\u3068\u30b9\u30c8\u30a2\u30c9\u30d7\u30ed\u30b7\u30fc\u30b8\u30e3\u30fc\u306b\u5bfe\u5fdc\u3057\u305f\u65b0\u3057\u3044 4D\u30ea\u30e2\u30fc\u30c8\u30bb\u30c3\u30b7\u30e7\u30f3\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),"\u3002"]})]})}function j(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},221020:(e,n,r)=>{var s=r(296540),i=Symbol.for("react.element"),c=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function t(e,n,r){var s,c={},t=null,h=null;for(s in void 0!==r&&(t=""+r),void 0!==n.key&&(t=""+n.key),void 0!==n.ref&&(h=n.ref),n)l.call(n,s)&&!o.hasOwnProperty(s)&&(c[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===c[s]&&(c[s]=n[s]);return{$$typeof:i,type:e,key:t,ref:h,props:c,_owner:d.current}}n.Fragment=c,n.jsx=t,n.jsxs=t},474848:(e,n,r)=>{e.exports=r(221020)},992406:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/serverConnect2-2617f5a73a8b33f5ebfac1b36a006c1c.png"},198518:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/localremote-5c33fe5479db4c271ef3a6dabde98395.png"},410040:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/serverConnect-cb74aeff8307fbc27a084e5c6ec84144.png"},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>d});var s=r(296540);const i={},c=s.createContext(i);function l(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);