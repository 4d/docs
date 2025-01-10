"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76919"],{763054:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>d,metadata:()=>i,assets:()=>o,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"WebServer/sessions","title":"\u30E6\u30FC\u30B6\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3","description":"4D Web\u30B5\u30FC\u30D0\u30FC\u306F\u3001\u30E6\u30FC\u30B6\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3 \u3092\u7BA1\u7406\u3059\u308B\u30D3\u30EB\u30C8\u30A4\u30F3\u306E\u6A5F\u80FD\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002 \u30E6\u30FC\u30B6\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u30FB\u7DAD\u6301\u3059\u308B\u3053\u3068\u3067\u3001Web\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u4E0A\u306E\u30E6\u30FC\u30B6\u30FC\u30A8\u30AF\u30B9\u30DA\u30EA\u30A8\u30F3\u30B9\u3092\u7BA1\u7406\u30FB\u5411\u4E0A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30E6\u30FC\u30B6\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3\u304C\u6709\u52B9\u304B\u3055\u308C\u3066\u3044\u308B\u3068\u3001Web\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306F\u30EA\u30AF\u30A8\u30B9\u30C8\u9593\u3067\u540C\u3058\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8 (\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3084\u5909\u6570\u306E\u5024) \u3092\u518D\u5229\u7528\u3067\u304D\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-19/WebServer/sessions.md","sourceDirName":"WebServer","slug":"/WebServer/sessions","permalink":"/docs/ja/19/WebServer/sessions","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2Fsessions.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"sessions","title":"\u30E6\u30FC\u30B6\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3"},"sidebar":"docs","previous":{"title":"\u8A8D\u8A3C","permalink":"/docs/ja/19/WebServer/authentication"},"next":{"title":"\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6Web\u30D7\u30ED\u30BB\u30B9\u306E\u4F7F\u7528","permalink":"/docs/ja/19/WebServer/preemptiveWeb"}}'),r=n("785893"),A=n("250065");let d={id:"sessions",title:"\u30E6\u30FC\u30B6\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3"},l=void 0,o={},c=[{value:"\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u6709\u52B9\u5316",id:"\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u6709\u52B9\u5316",level:2},{value:"\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u5B9F\u88C5",id:"\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u5B9F\u88C5",level:2},{value:"\u60C5\u5831\u306E\u5171\u6709",id:"\u60C5\u5831\u306E\u5171\u6709",level:2},{value:"\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u6709\u52B9\u671F\u9650",id:"\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u6709\u52B9\u671F\u9650",level:2},{value:"\u6A29\u9650",id:"\u6A29\u9650",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2}];function t(e){let s={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,A.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["4D Web\u30B5\u30FC\u30D0\u30FC\u306F\u3001",(0,r.jsx)(s.strong,{children:"\u30E6\u30FC\u30B6\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3"})," \u3092\u7BA1\u7406\u3059\u308B\u30D3\u30EB\u30C8\u30A4\u30F3\u306E\u6A5F\u80FD\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002 \u30E6\u30FC\u30B6\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u30FB\u7DAD\u6301\u3059\u308B\u3053\u3068\u3067\u3001Web\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u4E0A\u306E\u30E6\u30FC\u30B6\u30FC\u30A8\u30AF\u30B9\u30DA\u30EA\u30A8\u30F3\u30B9\u3092\u7BA1\u7406\u30FB\u5411\u4E0A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30E6\u30FC\u30B6\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3\u304C\u6709\u52B9\u304B\u3055\u308C\u3066\u3044\u308B\u3068\u3001Web\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306F\u30EA\u30AF\u30A8\u30B9\u30C8\u9593\u3067\u540C\u3058\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8 (\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3084\u5909\u6570\u306E\u5024) \u3092\u518D\u5229\u7528\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(s.p,{children:"Web\u30B5\u30FC\u30D0\u30FC\u306E\u30E6\u30FC\u30B6\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3\u3067\u306F\u3001\u4EE5\u4E0B\u306E\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u540C\u4E00\u306EWeb\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u304B\u3089\u306E\u8907\u6570\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u3001\u7121\u5236\u9650\u306E\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u30D7\u30ED\u30BB\u30B9\u3067\u540C\u6642\u306B\u51E6\u7406 (Web\u30B5\u30FC\u30D0\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3\u306F ",(0,r.jsx)(s.strong,{children:"\u30B9\u30B1\u30FC\u30E9\u30D6\u30EB"}),"\u3067\u3059)\u3002"]}),"\n",(0,r.jsx)(s.li,{children:"Web\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306E\u30D7\u30ED\u30BB\u30B9\u9593\u3067\u30C7\u30FC\u30BF\u3092\u5171\u6709\u3002"}),"\n",(0,r.jsx)(s.li,{children:"\u30E6\u30FC\u30B6\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3\u306B\u6A29\u9650\u3092\u95A2\u9023\u4ED8\u3051\u308B\u3002"}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Session"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068 ",(0,r.jsx)(s.a,{href:"/docs/ja/19/API/SessionClass",children:"Session API"})," \u3092\u4ECB\u3057\u305F\u30A2\u30AF\u30BB\u30B9\u306E\u51E6\u7406\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"\u6CE8:"})," \u73FE\u5728\u306E\u5B9F\u88C5\u306F\u3001Web\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5168\u4F53\u306B\u304A\u3044\u3066\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u4ECB\u3057\u3066\u968E\u5C64\u7684\u306A\u30E6\u30FC\u30B6\u30FC\u6A29\u9650\u3092\u958B\u767A\u8005\u304C\u7BA1\u7406\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u3001\u4ECA\u5F8C\u4E88\u5B9A\u3055\u308C\u3066\u3044\u308B\u5305\u62EC\u7684\u306A\u6A5F\u80FD\u306E\u6700\u521D\u306E\u30B9\u30C6\u30C3\u30D7\u306B\u904E\u304E\u307E\u305B\u3093\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u6709\u52B9\u5316",children:"\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u6709\u52B9\u5316"}),"\n",(0,r.jsx)(s.p,{children:"\u30BB\u30C3\u30B7\u30E7\u30F3\u7BA1\u7406\u6A5F\u80FD\u306F\u30014D Web\u30B5\u30FC\u30D0\u30FC\u4E0A\u3067\u6709\u52B9\u307E\u305F\u306F\u7121\u52B9\u306B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30BB\u30C3\u30B7\u30E7\u30F3\u7BA1\u7406\u3092\u6709\u52B9\u5316\u3059\u308B\u65B9\u6CD5\u306F\u8907\u6570\u3042\u308A\u307E\u3059:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u8A2D\u5B9A\u306E Web / \u30AA\u30D7\u30B7\u30E7\u30F3 (I) \u30DA\u30FC\u30B8\u306E ",(0,r.jsx)(s.strong,{children:"\u30B9\u30B1\u30FC\u30E9\u30D6\u30EB\u30BB\u30C3\u30B7\u30E7\u30F3"})," \u3092\u4F7F\u7528\u3059\u308B (\u6C38\u7D9A\u7684\u306A\u8A2D\u5B9A): ",(0,r.jsx)(s.img,{alt:"alt-text",src:n(851986).Z+"",width:"821",height:"361"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3001\u65B0\u898F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u9078\u629E\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u3053\u308C\u306F\u3001",(0,r.jsx)(s.strong,{children:"\u30BB\u30C3\u30B7\u30E7\u30F3\u306A\u3057"})," \u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u9078\u629E\u3057\u3066\u7121\u52B9\u306B\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001Web\u30BB\u30C3\u30B7\u30E7\u30F3\u6A5F\u80FD\u306F\u7121\u52B9\u306B\u306A\u308A\u307E\u3059 (",(0,r.jsx)(s.code,{children:"Session"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093)\u3002"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Web\u30B5\u30FC\u30D0\u30FC\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E ",(0,r.jsx)(s.a,{href:"/docs/ja/19/API/WebServerClass#scalablesession",children:(0,r.jsx)(s.code,{children:".scalableSession"})})," \u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u4F7F\u7528\u3059\u308B (",(0,r.jsx)(s.a,{href:"/docs/ja/19/API/WebServerClass#start",children:(0,r.jsx)(s.code,{children:".start()"})})," \u95A2\u6570\u306B ",(0,r.jsx)(s.em,{children:"settings"})," \u5F15\u6570\u3068\u3057\u3066\u6E21\u3057\u307E\u3059\uFF09\u3002 \u3053\u306E\u5834\u5408\u3001\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u8A2D\u5B9A\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u3067\u5B9A\u7FA9\u3055\u308C\u305F\u30AA\u30D7\u30B7\u30E7\u30F3\u3088\u308A\u3082\u3001Web\u30B5\u30FC\u30D0\u30FC\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u8A2D\u5B9A\u304C\u512A\u5148\u3055\u308C\u307E\u3059 (\u30C7\u30A3\u30B9\u30AF\u306B\u306F\u4FDD\u5B58\u3055\u308C\u307E\u305B\u3093)\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["\u30E1\u30A4\u30F3\u306E Web\u30B5\u30FC\u30D0\u30FC\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u30E2\u30FC\u30C9\u306F\u3001",(0,r.jsx)(s.code,{children:"WEB SET OPTION"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3063\u3066\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"\u3044\u305A\u308C\u306E\u5834\u5408\u3082\u3001\u8A2D\u5B9A\u306F\u30DE\u30B7\u30F3\u306B\u5BFE\u3057\u30ED\u30FC\u30AB\u30EB\u306A\u3082\u306E\u3067\u3059\u3002\u3064\u307E\u308A\u30014D Server \u306E Web\u30B5\u30FC\u30D0\u30FC\u3068\u3001\u30EA\u30E2\u30FC\u30C8\u306E 4D\u30DE\u30B7\u30F3\u306E Web\u30B5\u30FC\u30D0\u30FC\u3067\u7570\u306A\u308B\u8A2D\u5B9A\u304C\u53EF\u80FD\u3067\u3059\u3002"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"\u4E92\u63DB\u6027\u306B\u3064\u3044\u3066"}),": 4D v18 R6 \u4EE5\u524D\u306E 4D\u30D0\u30FC\u30B8\u30E7\u30F3\u3067\u4F5C\u6210\u3055\u308C\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u306F\u3001",(0,r.jsx)(s.strong,{children:"\u65E7\u5F0F\u30BB\u30C3\u30B7\u30E7\u30F3"})," \u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u4F7F\u7528\u3067\u304D\u307E\u3059 (\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001",(0,r.jsx)(s.a,{href:"https://doc.4d.com",children:"doc.4d.com"})," \u306E Web\u30B5\u30A4\u30C8\u3092\u53C2\u7167\u304F\u3060\u3055\u3044)\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u5B9F\u88C5",children:"\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u5B9F\u88C5"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"#%E3%82%BB%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E6%9C%89%E5%8A%B9%E5%8C%96",children:"\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u6709\u52B9\u306B\u3059\u308B"}),' \u3068\u30014D\u81EA\u8EAB\u304C\u8A2D\u5B9A\u3057\u305F\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8 cookie ("4DSID_',(0,r.jsx)(s.em,{children:"AppName"}),'"\u3001',(0,r.jsx)(s.em,{children:"AppName"})," \u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u540D\u79F0) \u306B\u57FA\u3065\u3044\u3066\u3001\u81EA\u52D5\u30E1\u30AB\u30CB\u30BA\u30E0\u304C\u5B9F\u88C5\u3055\u308C\u307E\u3059\u3002 \u3053\u306E cookie \u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30AB\u30EC\u30F3\u30C8Web\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["\u3053\u306E cookie \u306E\u540D\u524D\u306F\u3001",(0,r.jsx)(s.a,{href:"/docs/ja/19/API/WebServerClass#sessioncookiename",children:(0,r.jsx)(s.code,{children:".sessionCookieName"})})," \u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u4F7F\u7528\u3057\u3066\u53D6\u5F97\u3067\u304D\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:['Web\u30B5\u30FC\u30D0\u30FC\u306F\u3001\u5404Web\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u304A\u3044\u3066\u3001\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u306A "4DSID_',(0,r.jsx)(s.em,{children:"AppName"}),'" cookie \u306E\u5B58\u5728\u3068\u5024\u3092\u30C1\u30A7\u30C3\u30AF\u3057\u307E\u3059\u3002']}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"cookie \u306B\u5024\u304C\u3042\u308B\u5834\u5408\u30014D \u306F\u65E2\u5B58\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u4E2D\u304B\u3089\u3053\u306E\u30AF\u30C3\u30AD\u30FC\u3092\u4F5C\u6210\u3057\u305F\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u63A2\u3057\u3001\u898B\u3064\u304B\u3063\u305F\u5834\u5408\u306B\u306F\u518D\u5229\u7528\u3057\u307E\u3059\u3002"}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u304B\u3089\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u304C\u3001\u3059\u3067\u306B\u958B\u304B\u308C\u3066\u3044\u308B\u30BB\u30C3\u30B7\u30E7\u30F3\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u306A\u3044\u5834\u5408:"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:['\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u306A "4DSID_',(0,r.jsx)(s.em,{children:"AppName"}),'" cookie \u3092\u6301\u3064\u65B0\u3057\u3044\u30BB\u30C3\u30B7\u30E7\u30F3\u304C Web\u30B5\u30FC\u30D0\u30FC\u4E0A\u306B\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002']}),"\n",(0,r.jsxs)(s.li,{children:["\u65B0\u3057\u3044\u30B2\u30B9\u30C8 ",(0,r.jsx)(s.code,{children:"Session"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u4F5C\u6210\u3055\u308C\u3001\u3053\u306E\u30B9\u30B1\u30FC\u30E9\u30D6\u30EBWeb\u30BB\u30C3\u30B7\u30E7\u30F3\u5C02\u7528\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["\u30AB\u30EC\u30F3\u30C8\u306E ",(0,r.jsx)(s.code,{children:"Session"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u3042\u3089\u3086\u308B Web\u30D7\u30ED\u30BB\u30B9\u306E\u30B3\u30FC\u30C9\u306B\u304A\u3044\u3066 ",(0,r.jsx)(s.a,{href:"/docs/ja/19/API/SessionClass#session",children:(0,r.jsx)(s.code,{children:"Session"})})," \u30B3\u30DE\u30F3\u30C9\u3092\u4ECB\u3057\u3066\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"alt-text",src:n(924589).Z+"",width:"642",height:"442"})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Web\u30D7\u30ED\u30BB\u30B9\u306F\u901A\u5E38\u7D42\u4E86\u305B\u305A\u3001\u52B9\u7387\u5316\u306E\u305F\u3081\u306B\u30D7\u30FC\u30EB\u3055\u308C\u30EA\u30B5\u30A4\u30AF\u30EB\u3055\u308C\u307E\u3059\u3002 \u30D7\u30ED\u30BB\u30B9\u304C\u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u5B9F\u884C\u3092\u7D42\u3048\u308B\u3068\u3001\u30D7\u30FC\u30EB\u306B\u623B\u3055\u308C\u3001\u6B21\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u5BFE\u5FDC\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002 Web\u30D7\u30ED\u30BB\u30B9\u306F\u3069\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u3067\u3082\u518D\u5229\u7528\u3067\u304D\u308B\u305F\u3081\u3001\u5B9F\u884C\u7D42\u4E86\u6642\u306B\u306F (",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4dv18/help/command/ja/page89.html",children:(0,r.jsx)(s.code,{children:"CLEAR VARIABLE"})})," \u306A\u3069\u3092\u4F7F\u7528\u3057) \u30B3\u30FC\u30C9\u306B\u3088\u3063\u3066 ",(0,r.jsx)(s.a,{href:"/docs/ja/19/Concepts/variables#%E3%83%97%E3%83%AD%E3%82%BB%E3%82%B9%E5%A4%89%E6%95%B0",children:"\u30D7\u30ED\u30BB\u30B9\u5909\u6570"})," \u3092\u30AF\u30EA\u30A2\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059 \u3002 \u3053\u306E\u30AF\u30EA\u30A2\u51E6\u7406\u306F\u3001\u958B\u304B\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u3078\u306E\u53C2\u7167\u306A\u3069\u3001\u30D7\u30ED\u30BB\u30B9\u306B\u95A2\u9023\u3059\u308B\u3059\u3079\u3066\u306E\u60C5\u5831\u306B\u5BFE\u3057\u3066\u5FC5\u8981\u3067\u3059\u3002 \u3053\u308C\u304C\u3001\u30BB\u30C3\u30B7\u30E7\u30F3\u95A2\u9023\u306E\u60C5\u5831\u3092\u4FDD\u6301\u3057\u305F\u3044\u5834\u5408\u306B\u306F\u3001",(0,r.jsx)(s.a,{href:"/docs/ja/19/API/SessionClass",children:"Session"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C ",(0,r.jsx)(s.strong,{children:"\u63A8\u5968"})," \u3055\u308C\u308B\u7406\u7531\u3067\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u60C5\u5831\u306E\u5171\u6709",children:"\u60C5\u5831\u306E\u5171\u6709"}),"\n",(0,r.jsxs)(s.p,{children:["\u5404 ",(0,r.jsx)(s.code,{children:"Session"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u306F\u3001\u5171\u6709\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u3042\u308B ",(0,r.jsx)(s.a,{href:"/docs/ja/19/API/SessionClass#storage",children:(0,r.jsx)(s.code,{children:".storage"})})," \u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u7528\u610F\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306B\u3088\u308A\u3001\u30BB\u30C3\u30B7\u30E7\u30F3\u3067\u51E6\u7406\u3055\u308C\u308B\u3059\u3079\u3066\u306E\u30D7\u30ED\u30BB\u30B9\u9593\u3067\u60C5\u5831\u3092\u5171\u6709\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u6709\u52B9\u671F\u9650",children:"\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u6709\u52B9\u671F\u9650"}),"\n",(0,r.jsx)(s.p,{children:"\u30B9\u30B1\u30FC\u30E9\u30D6\u30EBWeb\u30BB\u30C3\u30B7\u30E7\u30F3\u306F\u3001\u4EE5\u4E0B\u306E\u5834\u5408\u306B\u9589\u3058\u3089\u308C\u307E\u3059:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Web\u30B5\u30FC\u30D0\u30FC\u304C\u505C\u6B62\u3057\u305F\u3068\u304D\u3002"}),"\n",(0,r.jsx)(s.li,{children:"\u30BB\u30C3\u30B7\u30E7\u30F3cookie \u304C\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u3057\u305F\u3068\u304D\u3002"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"\u975E\u30A2\u30AF\u30C6\u30A3\u30D6\u306A cookie \u306E\u6709\u52B9\u671F\u9650\u306F\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F 60\u5206\u3067\u3059\u3002\u3064\u307E\u308A\u3001Web\u30B5\u30FC\u30D0\u30FC\u306F\u3001\u975E\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u30BB\u30C3\u30B7\u30E7\u30F3\u3092 60\u5206\u5F8C\u306B\u81EA\u52D5\u7684\u306B\u9589\u3058\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(s.p,{children:["\u3053\u306E\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u306F\u3001",(0,r.jsx)(s.code,{children:"Session"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E ",(0,r.jsx)(s.a,{href:"/docs/ja/19/API/SessionClass#idletimeout",children:(0,r.jsx)(s.code,{children:".idleTimeout"})})," \u30D7\u30ED\u30D1\u30C6\u30A3\u3067\u8A2D\u5B9A\u3067\u304D\u307E\u3059 (\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u306F 60\u5206\u672A\u6E80\u306B\u306F\u3067\u304D\u307E\u305B\u3093)\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u30B9\u30B1\u30FC\u30E9\u30D6\u30EBWeb\u30BB\u30C3\u30B7\u30E7\u30F3\u304C\u9589\u3058\u3089\u308C\u305F\u5F8C\u306B ",(0,r.jsx)(s.a,{href:"/docs/ja/19/API/SessionClass#session",children:(0,r.jsx)(s.code,{children:"Session"})})," \u30B3\u30DE\u30F3\u30C9\u304C\u547C\u3073\u51FA\u3055\u308C\u308B\u3068:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Session"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u306F\u6A29\u9650\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u305B\u3093 (\u30B2\u30B9\u30C8\u30BB\u30C3\u30B7\u30E7\u30F3)\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/docs/ja/19/API/SessionClass#storage",children:(0,r.jsx)(s.code,{children:".storage"})})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u7A7A\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(s.li,{children:"\u65B0\u3057\u3044\u30BB\u30C3\u30B7\u30E7\u30F3cookie \u304C\u30BB\u30C3\u30B7\u30E7\u30F3\u306B\u95A2\u9023\u4ED8\u3051\u3089\u308C\u3066\u3044\u307E\u3059\u3002"}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u6A29\u9650",children:"\u6A29\u9650"}),"\n",(0,r.jsx)(s.p,{children:"\u30BB\u30C3\u30B7\u30E7\u30F3\u306B\u306F\u3001\u6A29\u9650\u3092\u95A2\u9023\u4ED8\u3051\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u6A29\u9650\u306B\u5FDC\u3058\u3066\u3001\u7279\u5B9A\u306E\u30A2\u30AF\u30BB\u30B9\u3084\u6A5F\u80FD\u3092 Web\u30B5\u30FC\u30D0\u30FC\u4E0A\u3067\u63D0\u4F9B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(s.p,{children:["\u6A29\u9650\u3092\u5272\u308A\u5F53\u3066\u308B\u306B\u306F\u3001",(0,r.jsx)(s.a,{href:"/docs/ja/19/API/SessionClass#setprivileges",children:(0,r.jsx)(s.code,{children:".setPrivileges()"})})," \u95A2\u6570\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u30B3\u30FC\u30C9\u5185\u3067\u306F\u3001",(0,r.jsx)(s.a,{href:"/docs/ja/19/API/SessionClass#hasprivilege",children:(0,r.jsx)(s.code,{children:".hasPrivilege()"})})," \u95A2\u6570\u3092\u4F7F\u3063\u3066\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u6A29\u9650\u3092\u30C1\u30A7\u30C3\u30AF\u3057\u3001\u30A2\u30AF\u30BB\u30B9\u3092\u8A31\u53EF\u307E\u305F\u306F\u62D2\u5426\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3001\u65B0\u3057\u3044\u30BB\u30C3\u30B7\u30E7\u30F3\u306F\u6A29\u9650\u3092\u6301\u305F\u305A\u3001",(0,r.jsx)(s.strong,{children:"\u30B2\u30B9\u30C8"})," \u30BB\u30C3\u30B7\u30E7\u30F3\u3068\u306A\u308A\u307E\u3059 (",(0,r.jsx)(s.a,{href:"/docs/ja/19/API/SessionClass#isguest",children:(0,r.jsx)(s.code,{children:".isGuest()"})})," \u95A2\u6570\u306F true \u3092\u8FD4\u3057\u307E\u3059)\u3002"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:'\u73FE\u5728\u306E\u5B9F\u88C5\u3067\u306F (v18 R6)\u3001"WebAdmin" \u30A2\u30AF\u30BB\u30B9\u6A29\u306E\u307F\u5229\u7528\u53EF\u80FD\u3067\u3059\u3002'}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"\u4F8B:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'If (Session.hasPrivilege("WebAdmin"))\n // \u30A2\u30AF\u30BB\u30B9\u6A29\u304C\u4ED8\u4E0E\u3055\u308C\u3066\u3044\u308B\u306E\u3067\u3001\u4F55\u3082\u3057\u307E\u305B\u3093\nElse\n // \u8A8D\u8A3C\u30DA\u30FC\u30B8\u3092\u8868\u793A\u3057\u307E\u3059\nEnd if\n'})}),"\n",(0,r.jsx)(s.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(s.p,{children:"CRM\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F7F\u3063\u3066\u3001\u5404\u55B6\u696D\u62C5\u5F53\u8005\u304C\u81EA\u5206\u306E\u9867\u5BA2\u30DD\u30FC\u30C8\u30D5\u30A9\u30EA\u30AA\u3092\u7BA1\u7406\u3057\u307E\u3059\u3002 \u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306B\u306F\u3001\u5C11\u306A\u304F\u3068\u3082 2\u3064\u306E\u30EA\u30F3\u30AF\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30AF\u30E9\u30B9 Customers \u3068 SalesPersons \u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059 (\u55B6\u696D\u62C5\u5F53\u8005\u306F\u8907\u6570\u306E\u9867\u5BA2\u3092\u6301\u3061\u307E\u3059)\u3002"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"alt-text",src:n(717108).Z+"",width:"450",height:"225"})}),"\n",(0,r.jsx)(s.p,{children:"\u55B6\u696D\u62C5\u5F53\u8005\u304C\u30ED\u30B0\u30A4\u30F3\u3057\u3001Web\u30B5\u30FC\u30D0\u30FC\u4E0A\u3067\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u958B\u304D\u3001\u4E0A\u4F4D3\u540D\u306E\u9867\u5BA2\u3092\u30BB\u30C3\u30B7\u30E7\u30F3\u306B\u8AAD\u307F\u8FBC\u307E\u305B\u305F\u3044\u3068\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u958B\u304F\u305F\u3081\u306B\u4EE5\u4E0B\u306E URL \u3092\u5B9F\u884C\u3057\u307E\u3059:"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"http://localhost:8044/authenticate.shtml\n"})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["\u672C\u756A\u74B0\u5883\u3067\u306F\u3001\u6697\u53F7\u5316\u3055\u308C\u3066\u3044\u306A\u3044\u60C5\u5831\u304C\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u4E0A\u3092\u6D41\u308C\u308B\u306E\u3092\u9632\u3050\u305F\u3081\u306B\u3001",(0,r.jsx)(s.a,{href:"/docs/ja/19/API/WebServerClass#httpsenabled",children:"HTTPS\u63A5\u7D9A"})," \u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.ol,{start:"2",children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"authenticate.shtml"})," \u30DA\u30FC\u30B8\u306F\u3001",(0,r.jsx)(s.em,{children:"userId"})," \u3068 ",(0,r.jsx)(s.em,{children:"password"})," \u306E\u5165\u529B\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u542B\u3080\u30D5\u30A9\u30FC\u30E0\u3067\u30014DACTION \u306E POST\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u9001\u4FE1\u3057\u307E\u3059:"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n<body bgcolor="#ffffff">\n<FORM ACTION="/4DACTION/authenticate" METHOD=POST>\n UserId: <INPUT TYPE=TEXT NAME=userId VALUE=""><br/>\n Password: <INPUT TYPE=TEXT NAME=password VALUE=""><br/>\n<INPUT TYPE=SUBMIT NAME=OK VALUE="Log In">\n</FORM>\n</body>\n</html>\n'})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"alt-text",src:n(757580).Z+"",width:"523",height:"158"})}),"\n",(0,r.jsxs)(s.ol,{start:"3",children:["\n",(0,r.jsxs)(s.li,{children:["authenticate project \u30E1\u30BD\u30C3\u30C9\u306F\u3001",(0,r.jsx)(s.em,{children:"userID"})," \u306B\u5408\u81F4\u3059\u308B\u62C5\u5F53\u8005\u3092\u63A2\u3057\u3001",(0,r.jsx)(s.em,{children:"SalesPersons"})," \u30C6\u30FC\u30D6\u30EB\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u30CF\u30C3\u30B7\u30E5\u5024\u3092\u30D1\u30B9\u30EF\u30FC\u30C9\u3068\u7167\u5408\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'var $indexUserId; $indexPassword; $userId : Integer\nvar $password : Text\nvar $userTop3; $sales; $info : Object\n\n\nARRAY TEXT($anames; 0)\nARRAY TEXT($avalues; 0)\n\nWEB GET VARIABLES($anames; $avalues)\n\n$indexUserId:=Find in array($anames; "userId")\n$userId:=Num($avalues{$indexUserId})\n\n$indexPassword:=Find in array($anames; "password")\n$password:=$avalues{$indexPassword}\n\n$sales:=ds.SalesPersons.query("userId = :1"; $userId).first()\n\nIf ($sales#Null)\n    If (Verify password hash($password; $sales.password))\n        $info:=New object()\n        $info.userName:=$sales.firstname+" "+$sales.lastname\n        Session.setPrivileges($info)\n        Use (Session.storage)\n            If (Session.storage.myTop3=Null)\n                $userTop3:=$sales.customers.orderBy("totalPurchase desc").slice(0; 3)\n                Session.storage.myTop3:=$userTop3\n            End if \n        End use \n        WEB SEND HTTP REDIRECT("/authenticationOK.shtml")\n    Else \n        WEB SEND TEXT("This password is wrong")\n    End if \nElse \n    WEB SEND TEXT("This userId is unknown")\nEnd if \n'})})]})}function h(e={}){let{wrapper:s}={...(0,A.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},757580:function(e,s,n){n.d(s,{Z:function(){return i}});let i="data:image/png;base64,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"},717108:function(e,s,n){n.d(s,{Z:function(){return i}});let i=n.p+"assets/images/exampleSession-6ea5390dae0da375f51de68193ef570e.png"},924589:function(e,s,n){n.d(s,{Z:function(){return i}});let i=n.p+"assets/images/schemaSession-a7c86d4948895f03c24611177cd54f7c.png"},851986:function(e,s,n){n.d(s,{Z:function(){return i}});let i=n.p+"assets/images/settingsSession-0d1b28de173a572d3a47fcf327e29b28.png"},250065:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return d}});var i=n(667294);let r={},A=i.createContext(r);function d(e){let s=i.useContext(A);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(A.Provider,{value:s},e.children)}}}]);