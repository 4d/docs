"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60280"],{92951:function(n,e,s){s.r(e),s.d(e,{default:()=>j,frontMatter:()=>l,metadata:()=>i,assets:()=>t,toc:()=>o,contentTitle:()=>d});var i=JSON.parse('{"id":"GettingStarted/creating","title":"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u4F5C\u6210\u30FB\u958B\u59CB","description":"4D\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u5305\u62EC\u7684\u306A\u7D71\u5408\u958B\u767A\u74B0\u5883 (IDE) \u3092\u63D0\u4F9B\u3059\u308B 4D \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F7F\u3063\u3066\u4F5C\u6210\u30FB\u958B\u767A\u3057\u307E\u3059\u3002 4D Server \u3082\u3001\u7A7A\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u65B0\u898F\u4F5C\u6210\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/GettingStarted/creating.md","sourceDirName":"GettingStarted","slug":"/GettingStarted/creating","permalink":"/docs/ja/GettingStarted/creating","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20GettingStarted%2Fcreating.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"creating","title":"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u4F5C\u6210\u30FB\u958B\u59CB"},"sidebar":"docs","previous":{"title":"\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB","permalink":"/docs/ja/GettingStarted/installation"},"next":{"title":"\u30EA\u30EA\u30FC\u30B9\u30CE\u30FC\u30C8","permalink":"/docs/ja/Notes/updates"}}'),r=s("785893"),c=s("250065");let l={id:"creating",title:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u4F5C\u6210\u30FB\u958B\u59CB"},d=void 0,t={},o=[{value:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u4F5C\u6210",id:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u4F5C\u6210",level:2},{value:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u304F",id:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u304F",level:2},{value:"\u30AA\u30D7\u30B7\u30E7\u30F3",id:"\u30AA\u30D7\u30B7\u30E7\u30F3",level:3},{value:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u304F (\u305D\u306E\u4ED6\u306E\u65B9\u6CD5)",id:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u304F-\u305D\u306E\u4ED6\u306E\u65B9\u6CD5",level:2},{value:"4DLink\u30D5\u30A1\u30A4\u30EB\u3092\u4F7F\u3063\u3066\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u304F",id:"4dlink\u30D5\u30A1\u30A4\u30EB\u3092\u4F7F\u3063\u3066\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u304F",level:3},{value:"4DLink\u30D5\u30A1\u30A4\u30EB\u306B\u3064\u3044\u3066",id:"4dlink\u30D5\u30A1\u30A4\u30EB\u306B\u3064\u3044\u3066",level:2}];function h(n){let e={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,c.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:["4D\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u5305\u62EC\u7684\u306A\u7D71\u5408\u958B\u767A\u74B0\u5883 (IDE) \u3092\u63D0\u4F9B\u3059\u308B ",(0,r.jsx)(e.strong,{children:"4D"})," \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F7F\u3063\u3066\u4F5C\u6210\u30FB\u958B\u767A\u3057\u307E\u3059\u3002 ",(0,r.jsx)(e.strong,{children:"4D Server"})," \u3082\u3001\u7A7A\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u65B0\u898F\u4F5C\u6210\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u4F5C\u6210",children:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u4F5C\u6210"}),"\n",(0,r.jsxs)(e.p,{children:["\u65B0\u898F\u306E 4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306F ",(0,r.jsx)(e.strong,{children:"4D"})," \u307E\u305F\u306F ",(0,r.jsx)(e.strong,{children:"4D Server"})," \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F7F\u3063\u3066\u4F5C\u6210\u3057\u307E\u3059\u3002 \u3044\u305A\u308C\u306E\u5834\u5408\u3082\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A1\u30A4\u30EB\u306F\u30ED\u30FC\u30AB\u30EB\u30DE\u30B7\u30F3\u4E0A\u306B\u4FDD\u5B58\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u65B0\u898F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3059\u308B\u306B\u306F:"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"4D \u307E\u305F\u306F 4D Server \u3092\u8D77\u52D5\u3057\u307E\u3059\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6B21\u306E\u3044\u305A\u308C\u304B\u306E\u65B9\u6CD5\u3092\u304A\u3053\u306A\u3044\u307E\u3059:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u30D5\u30A1\u30A4\u30EB"})," \u30E1\u30CB\u30E5\u30FC\u3088\u308A **\u65B0\u898F > \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8...**\u3092\u9078\u629E\u3057\u307E\u3059: ",(0,r.jsx)(e.img,{src:s(164322).Z+"",width:"558",height:"199"})]}),"\n",(0,r.jsxs)(e.li,{children:["(4D \u306E\u307F) ",(0,r.jsx)(e.strong,{children:"\u65B0\u898F"})," \u30C4\u30FC\u30EB\u30D0\u30FC\u30DC\u30BF\u30F3\u3088\u308A **\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8...**\u3092\u9078\u629E\u3057\u307E\u3059:",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:s(553452).Z+"",width:"176",height:"230"})}),"\u6A19\u6E96\u306E ",(0,r.jsx)(e.strong,{children:"\u4FDD\u5B58"})," \u30C0\u30A4\u30A2\u30ED\u30B0\u304C\u8868\u793A\u3055\u308C\u30014D \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u540D\u524D\u3068\u4FDD\u5B58\u5834\u6240\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A9\u30EB\u30C0\u30FC\u540D\u3092\u5165\u529B\u3057\u305F\u3089\u3001",(0,r.jsx)(e.strong,{children:"\u4FDD\u5B58"}),"\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002 \u3053\u306E\u540D\u79F0\u306F\u3064\u304E\u306E\u5834\u6240\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059:"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5168\u4F53\u3092\u4FDD\u5B58\u3059\u308B\u30D5\u30A9\u30EB\u30C0\u30FC\u306E\u540D\u79F0"}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"/docs/ja/Project/architecture#project-%E3%83%95%E3%82%A9%E3%83%AB%E3%83%80%E3%83%BC",children:'"Project" \u30D5\u30A9\u30EB\u30C0\u30FC'})," \u5185\u306E\u6700\u521D\u306E\u968E\u5C64\u306B\u3042\u308B .4DProject \u30D5\u30A1\u30A4\u30EB\u306E\u540D\u79F0"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"OS \u306B\u3088\u3063\u3066\u8A31\u53EF\u3055\u308C\u3066\u3044\u308B\u540D\u79F0\u3067\u3042\u308C\u3070\u4F7F\u7528\u53EF\u80FD\u3067\u3059\u3002 \u3057\u304B\u3057\u306A\u304C\u3089\u3001\u7570\u306A\u308B OS \u3067\u306E\u4F7F\u7528\u3092\u4E88\u5B9A\u3057\u3066\u3044\u305F\u308A\u3001\u30BD\u30FC\u30B9\u7BA1\u7406\u30C4\u30FC\u30EB\u3092\u5229\u7528\u3057\u305F\u308A\u3059\u308B\u306E\u3067\u3042\u308C\u3070\u3001\u305D\u308C\u3089\u306E\u547D\u540D\u898F\u5247\u3092\u8003\u616E\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u4FDD\u5B58"})," \u30C0\u30A4\u30A2\u30ED\u30B0\u3092\u53D7\u3051\u5165\u308C\u308B\u3068\u30014D \u306F\u958B\u3044\u3066\u3044\u308B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8 (\u3042\u308C\u3070) \u3092\u9589\u3058\u3001\u6307\u5B9A\u306E\u5834\u6240\u306B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u4F5C\u6210\u3057\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u5FC5\u8981\u306A\u30D5\u30A1\u30A4\u30EB\u3092\u8A2D\u7F6E\u3057\u307E\u3059\u3002 (\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F ",(0,r.jsx)(e.a,{href:"/docs/ja/Project/architecture",children:"4D \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u30FC"})," \u3092\u53C2\u7167\u304F\u3060\u3055\u3044)\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u3053\u308C\u3067\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u958B\u767A\u3092\u59CB\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u304F",children:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u304F"}),"\n",(0,r.jsx)(e.p,{children:"\u65E2\u5B58\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092 4D \u3067\u958B\u304F\u306B\u306F:"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6B21\u306E\u3044\u305A\u308C\u304B\u306E\u65B9\u6CD5\u3092\u304A\u3053\u306A\u3044\u307E\u3059:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u30D5\u30A1\u30A4\u30EB"})," \u30E1\u30CB\u30E5\u30FC\u3088\u308A **\u958B\u304F \uFF1E \u30ED\u30FC\u30AB\u30EB\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8...**\u3092\u9078\u629E\u3059\u308B\u304B\u3001",(0,r.jsx)(e.strong,{children:"\u958B\u304F"})," \u30C4\u30FC\u30EB\u30D0\u30FC\u30DC\u30BF\u30F3\u3088\u308A\u540C\u69D8\u306B\u9078\u629E\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:["Welcome \u30A6\u30A3\u30B6\u30FC\u30C9\u306B\u3066 ",(0,r.jsx)(e.strong,{children:"\u30ED\u30FC\u30AB\u30EB\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u304F"})," \u3092\u9078\u629E\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u6A19\u6E96\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304F\u305F\u3081\u306E\u30C0\u30A4\u30A2\u30ED\u30B0\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(e.ol,{start:"2",children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E ",(0,r.jsx)(e.a,{href:"/docs/ja/Project/architecture#project-%E3%83%95%E3%82%A9%E3%83%AB%E3%83%80%E3%83%BC",children:'"Project" \u30D5\u30A9\u30EB\u30C0\u30FC'})," \u5185\u306B\u3042\u308B ",(0,r.jsx)(e.code,{children:".4dproject"})," \u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E\u3057\u3001",(0,r.jsx)(e.strong,{children:"\u958B\u304F"})," \u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306F\u30AB\u30EC\u30F3\u30C8\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3068\u3068\u3082\u306B\u958B\u304B\u308C\u307E\u3059\u3002 \u307B\u304B\u306B\u3082\u3001\u6B21\u306E\u30D5\u30A1\u30A4\u30EB\u30BF\u30A4\u30D7\u3092\u9078\u629E\u3067\u304D\u307E\u3059:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.em,{children:"\u5727\u7E2E\u3055\u308C\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A1\u30A4\u30EB"}),": ",(0,r.jsx)(e.code,{children:".4dz"})," \u62E1\u5F35\u5B50 - \u904B\u7528\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.em,{children:"\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u30D5\u30A1\u30A4\u30EB"}),": ",(0,r.jsx)(e.code,{children:".4DLink"})," \u62E1\u5F35\u5B50 - \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3084\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u8D77\u52D5\u3059\u308B\u969B\u306B\u5FC5\u8981\u306A\u8FFD\u52A0\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u3092\u683C\u7D0D\u3057\u3066\u3044\u307E\u3059 (\u30A2\u30C9\u30EC\u30B9\u3001\u8A8D\u8A3C\u60C5\u5831\u3001\u4ED6)"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.em,{children:"\u30D0\u30A4\u30CA\u30EA\u30FC\u30D5\u30A1\u30A4\u30EB"}),": ",(0,r.jsx)(e.code,{children:".4db"})," \u307E\u305F\u306F ",(0,r.jsx)(e.code,{children:".4dc"})," \u62E1\u5F35\u5B50 - \u5F93\u6765\u306E 4D \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u5F62\u5F0F"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"\u30AA\u30D7\u30B7\u30E7\u30F3",children:"\u30AA\u30D7\u30B7\u30E7\u30F3"}),"\n",(0,r.jsxs)(e.p,{children:["\u6A19\u6E96\u306E\u30B7\u30B9\u30C6\u30E0\u30AA\u30D7\u30B7\u30E7\u30F3\u306B\u52A0\u3048\u30014D \u304C\u63D0\u4F9B\u3059\u308B ",(0,r.jsx)(e.em,{children:"\u958B\u304F"})," \u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u306B\u306F\u3001",(0,r.jsx)(e.em,{children:"\u958B\u304F"})," \u3068",(0,r.jsx)(e.strong,{children:"\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB"})," \u3068\u3044\u3046\u30012\u3064\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u958B\u304F"})," - \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u304F\u30E2\u30FC\u30C9\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059:"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u30A4\u30F3\u30BF\u30FC\u30D7\u30EA\u30BF\u30FC"})," \u307E\u305F\u306F ",(0,r.jsx)(e.strong,{children:"\u30B3\u30F3\u30D1\u30A4\u30EB\u6E08\u307F"}),": \u3053\u308C\u3089\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3001\u9078\u629E\u3057\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C ",(0,r.jsx)(e.a,{href:"/docs/ja/Concepts/interpreted-compiled",children:"\u30A4\u30F3\u30BF\u30FC\u30D7\u30EA\u30BF\u30FC\u304A\u3088\u3073\u30B3\u30F3\u30D1\u30A4\u30EB\u6E08\u307F\u30B3\u30FC\u30C9"})," \u3092\u542B\u3093\u3067\u3044\u308B\u5834\u5408\u306B\u9078\u629E\u53EF\u80FD\u3068\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.a,{href:"/docs/ja/MSC/overview",children:"Maintenance Security Center"})}),": \u640D\u50B7\u3092\u53D7\u3051\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u5FC5\u8981\u306A\u4FEE\u5FA9\u3092\u65BD\u3059\u305F\u3081\u306B\u3001\u4FDD\u8B77\u30E2\u30FC\u30C9\u3067\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u304D\u307E\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB"})," - \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u4F7F\u7528\u3059\u308B\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002 \u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3001",(0,r.jsx)(e.strong,{children:"\u73FE\u5728\u306E\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB"})," \u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u9078\u629E\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u304F-\u305D\u306E\u4ED6\u306E\u65B9\u6CD5",children:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u304F (\u305D\u306E\u4ED6\u306E\u65B9\u6CD5)"}),"\n",(0,r.jsx)(e.p,{children:"4D \u3067\u306F\u3001\u958B\u304F\u30C0\u30A4\u30A2\u30ED\u30B0\u3092\u7D4C\u7531\u3057\u306A\u304F\u3066\u3082\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u304F\u3053\u3068\u306E\u3067\u304D\u308B\u65B9\u6CD5\u304C\u3044\u304F\u3064\u304B\u3042\u308A\u307E\u3059:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u30E1\u30CB\u30E5\u30FC\u3092\u4F7F\u7528:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.em,{children:"\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC"})," - ",(0,r.jsx)(e.strong,{children:"\u30D5\u30A1\u30A4\u30EB"})," > ",(0,r.jsx)(e.strong,{children:"\u6700\u8FD1\u4F7F\u7528\u3057\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u958B\u304F / {project name}"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.em,{children:"4D \u30C4\u30FC\u30EB\u30D0\u30FC"})," -  ",(0,r.jsx)(e.strong,{children:"\u958B\u304F"})," \u30DC\u30BF\u30F3\u3068\u305D\u306E\u30B5\u30D6\u30E1\u30CB\u30E5\u30FC\u3092\u4F7F\u3063\u3066\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u9078\u629E\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"4D \u74B0\u5883\u8A2D\u5B9A\u3092\u4F7F\u7528:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["4D \u74B0\u5883\u8A2D\u5B9A\u306E ",(0,r.jsx)(e.strong,{children:"\u958B\u59CB\u6642"})," \u30AA\u30D7\u30B7\u30E7\u30F3\u306B ",(0,r.jsx)(e.strong,{children:"\u6700\u5F8C\u306B\u4F7F\u7528\u3057\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u958B\u304F"})," \u3092\u6307\u5B9A\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:".4DLink"})," \u30D5\u30A1\u30A4\u30EB\u3092\u4F7F\u7528"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"4dlink\u30D5\u30A1\u30A4\u30EB\u3092\u4F7F\u3063\u3066\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u304F",children:"4DLink\u30D5\u30A1\u30A4\u30EB\u3092\u4F7F\u3063\u3066\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u304F"}),"\n",(0,r.jsxs)(e.p,{children:["4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u8D77\u52D5\u3057\u3001\u30BF\u30FC\u30B2\u30C3\u30C8\u306E 4D\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u304F\u306E\u306B ",(0,r.jsxs)(e.a,{href:"#4dlink%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6",children:[(0,r.jsx)(e.code,{children:".4DLink"})," \u30D5\u30A1\u30A4\u30EB"]})," \u304C\u5229\u7528\u3067\u304D\u307E\u3059\u3002 \u3053\u308C\u3092\u304A\u3053\u306A\u3046\u306B\u306F 2\u3064\u306E\u65B9\u6CD5\u304C\u3042\u308A\u307E\u3059:"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:".4DLink"})," \u3092\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u3001\u3042\u308B\u3044\u306F 4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u30C9\u30E9\u30C3\u30B0\uFF06\u30C9\u30ED\u30C3\u30D7\u3059\u308B"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u30D5\u30A1\u30A4\u30EB"})," \uFF1E ",(0,r.jsx)(e.strong,{children:"\u6700\u8FD1\u4F7F\u7528\u3057\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u304F"})," \u306E\u30B5\u30D6\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u304D\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u9078\u629E\u3059\u308B"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"open-recent-projects",src:s(870716).Z+"",width:"500",height:"225"})}),"\n",(0,r.jsx)(e.p,{children:'"\u30EA\u30E2\u30FC\u30C8\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8" \u30BF\u30A4\u30D7\u306E .4DLink\u30D5\u30A1\u30A4\u30EB\u306F\u3001\u4ED6\u306E\u30DE\u30B7\u30F3\u306B\u30B3\u30D4\u30FC\u3057\u3066\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002'}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"4D \u3068 4D Server \u306E\u63A5\u7D9A\u30C0\u30A4\u30A2\u30ED\u30B0\u3067 4DLink\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059 (\u30ED\u30FC\u30AB\u30EB\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u958B\u59CB\u306E\u307F)\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"4dlink\u30D5\u30A1\u30A4\u30EB\u306B\u3064\u3044\u3066",children:"4DLink\u30D5\u30A1\u30A4\u30EB\u306B\u3064\u3044\u3066"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:".4DLink"})," \u62E1\u5F35\u5B50\u304C\u4ED8\u3044\u305F\u30D5\u30A1\u30A4\u30EB\u306F XML\u30D5\u30A1\u30A4\u30EB\u3067\u3001\u30ED\u30FC\u30AB\u30EB\u307E\u305F\u306F\u30EA\u30E2\u30FC\u30C84D\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u958B\u59CB\u3092\u7C21\u7565\u5316\u30FB\u81EA\u52D5\u5316\u3059\u308B\u305F\u3081\u306E\u8A2D\u5B9A\u3092\u683C\u7D0D\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:".4DLink"})," \u30D5\u30A1\u30A4\u30EB\u306F\u30014D\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30A2\u30C9\u30EC\u30B9\u3084\u63A5\u7D9A\u8B58\u5225\u5B50\u3092\u4FDD\u5B58\u3057\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u304F\u305F\u3081\u306E\u64CD\u4F5C\u3092\u77ED\u7E2E\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u30ED\u30FC\u30AB\u30EB\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u521D\u3081\u3066\u958B\u304F\u3068\u304D\u3001\u307E\u305F\u306F\u30B5\u30FC\u30D0\u30FC\u306B\u521D\u3081\u3066\u63A5\u7D9A\u3059\u308B\u3068\u304D\u30014D \u306F ",(0,r.jsx)(e.code,{children:".4DLink"})," \u30D5\u30A1\u30A4\u30EB\u3092\u81EA\u52D5\u751F\u6210\u3057\u307E\u3059\u3002 \u3053\u306E\u30D5\u30A1\u30A4\u30EB\u306F\u3001\u6B21\u306E\u5834\u6240\u306B\u3042\u308B\u30ED\u30FC\u30AB\u30EB\u74B0\u5883\u8A2D\u5B9A\u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u7F6E\u304B\u308C\u307E\u3059:"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Windows: C:\\Users\\UserName\\AppData\\Roaming\\4D\\Favorites vXX\\"}),"\n",(0,r.jsx)(e.li,{children:"macOS: Users/UserName/Library/Application Support/4D/Favorites vXX/"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:'XX \u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u756A\u53F7\u3092\u610F\u5473\u3057\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u30014D v19 \u306A\u3089 "Favorites v19" \u3068\u306A\u308A\u307E\u3059\u3002'}),"\n",(0,r.jsx)(e.p,{children:"\u3053\u306E\u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u306F\u30012\u3064\u306E\u30B5\u30D6\u30D5\u30A9\u30EB\u30C0\u30FC\u304C\u3042\u308A\u307E\u3059:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Local"})," \u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u306F\u3001\u30ED\u30FC\u30AB\u30EB\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u958B\u59CB\u306B\u4F7F\u7528\u3067\u304D\u308B ",(0,r.jsx)(e.code,{children:".4DLink"})," \u30D5\u30A1\u30A4\u30EB\u304C\u683C\u7D0D\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Remote"})," \u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u306F\u3001\u6700\u8FD1\u306E\u30EA\u30E2\u30FC\u30C8\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E ",(0,r.jsx)(e.code,{children:"4DLink"})," \u30D5\u30A1\u30A4\u30EB\u304C\u7F6E\u304B\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:".4DLink"})," \u30D5\u30A1\u30A4\u30EB\u306F XML\u30A8\u30C7\u30A3\u30BF\u30FC\u3067\u4F5C\u6210\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:".4DLink"})," \u30D5\u30A1\u30A4\u30EB\u3092\u69CB\u7BC9\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3067\u304D\u308B XML\u30AD\u30FC\u3092\u5B9A\u7FA9\u3057\u305F DTD \u304C4D \u3088\u308A\u63D0\u4F9B\u3055\u308C\u307E\u3059\u3002 \u3053\u306E DTD \u306F database_link.dtd \u3068\u3044\u3046\u540D\u524D\u3067\u30014D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E ",(0,r.jsx)(e.code,{children:"\\Resources\\DTD\\"})," \u30B5\u30D6\u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u3042\u308A\u307E\u3059\u3002"]})]})}function j(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},870716:function(n,e,s){s.d(e,{Z:function(){return i}});let i=s.p+"assets/images/4Dlinkfiles-96f51627e9276395742d3cb918b30a6b.png"},164322:function(n,e,s){s.d(e,{Z:function(){return i}});let i=s.p+"assets/images/projectCreate1-2b4b8620d716caed56f0b5edbc72d0e9.png"},553452:function(n,e,s){s.d(e,{Z:function(){return i}});let i="data:image/png;base64,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"},250065:function(n,e,s){s.d(e,{Z:function(){return d},a:function(){return l}});var i=s(667294);let r={},c=i.createContext(r);function l(n){let e=i.useContext(c);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);