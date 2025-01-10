"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3346"],{236427:function(e,n,s){s.r(n),s.d(n,{default:()=>x,frontMatter:()=>c,metadata:()=>i,assets:()=>h,toc:()=>t,contentTitle:()=>l});var i=JSON.parse('{"id":"WebServer/preemptiveWeb","title":"\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6Web\u30D7\u30ED\u30BB\u30B9\u306E\u4F7F\u7528","description":"4D Web\u30B5\u30FC\u30D0\u30FC\u3092\u4F7F\u3063\u3066\u3001\u30B3\u30F3\u30D1\u30A4\u30EB\u6E08\u307F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6Web\u30D7\u30ED\u30BB\u30B9\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u306B\u3088\u3063\u3066\u3001\u30DE\u30EB\u30C1\u30B3\u30A2\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC\u306E\u5229\u70B9\u3092\u6700\u5927\u9650\u5F15\u304D\u51FA\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 4D\u5909\u63DB\u30BF\u30B0\u3084 Web\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9\u3092\u542B\u3081\u305F Web\u95A2\u9023\u30B3\u30FC\u30C9\u3092\u3001\u53EF\u80FD\u306A\u9650\u308A\u591A\u304F\u306E\u30B3\u30A2\u3067\u540C\u6642\u306B\u5B9F\u884C\u3059\u308B\u3088\u3046\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-19/WebServer/preemptiveWeb.md","sourceDirName":"WebServer","slug":"/WebServer/preemptiveWeb","permalink":"/docs/ja/19/WebServer/preemptiveWeb","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FpreemptiveWeb.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"preemptiveWeb","title":"\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6Web\u30D7\u30ED\u30BB\u30B9\u306E\u4F7F\u7528"},"sidebar":"docs","previous":{"title":"\u30E6\u30FC\u30B6\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3","permalink":"/docs/ja/19/WebServer/sessions"},"next":{"title":"\u306F\u3058\u3081\u306B","permalink":"/docs/ja/19/REST/gettingStarted"}}'),r=s("785893"),d=s("250065");let c={id:"preemptiveWeb",title:"\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6Web\u30D7\u30ED\u30BB\u30B9\u306E\u4F7F\u7528"},l=void 0,h={},t=[{value:"Web\u30D7\u30ED\u30BB\u30B9\u306B\u304A\u3051\u308B\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u30E2\u30FC\u30C9\u306E\u4F7F\u7528\u53EF\u80FD\u72B6\u6CC1",id:"web\u30D7\u30ED\u30BB\u30B9\u306B\u304A\u3051\u308B\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u30E2\u30FC\u30C9\u306E\u4F7F\u7528\u53EF\u80FD\u72B6\u6CC1",level:2},{value:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u306AWeb\u30B5\u30FC\u30D0\u30FC\u30B3\u30FC\u30C9\u306E\u66F8\u304D\u65B9",id:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u306Aweb\u30B5\u30FC\u30D0\u30FC\u30B3\u30FC\u30C9\u306E\u66F8\u304D\u65B9",level:2},{value:"4D Web\u30B3\u30FC\u30C9\u306E\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u30C6\u30A3",id:"4d-web\u30B3\u30FC\u30C9\u306E\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u30C6\u30A3",level:2},{value:"4D\u30B3\u30DE\u30F3\u30C9\u3068\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9",id:"4d\u30B3\u30DE\u30F3\u30C9\u3068\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9",level:3},{value:"Web\u30B5\u30FC\u30D0\u30FCURL",id:"web\u30B5\u30FC\u30D0\u30FCurl",level:3},{value:"\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6Web\u30D7\u30ED\u30BB\u30B9\u30A2\u30A4\u30B3\u30F3",id:"\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6web\u30D7\u30ED\u30BB\u30B9\u30A2\u30A4\u30B3\u30F3",level:3}];function j(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"4D Web\u30B5\u30FC\u30D0\u30FC\u3092\u4F7F\u3063\u3066\u3001\u30B3\u30F3\u30D1\u30A4\u30EB\u6E08\u307F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6Web\u30D7\u30ED\u30BB\u30B9\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u306B\u3088\u3063\u3066\u3001\u30DE\u30EB\u30C1\u30B3\u30A2\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC\u306E\u5229\u70B9\u3092\u6700\u5927\u9650\u5F15\u304D\u51FA\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 4D\u5909\u63DB\u30BF\u30B0\u3084 Web\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9\u3092\u542B\u3081\u305F Web\u95A2\u9023\u30B3\u30FC\u30C9\u3092\u3001\u53EF\u80FD\u306A\u9650\u308A\u591A\u304F\u306E\u30B3\u30A2\u3067\u540C\u6642\u306B\u5B9F\u884C\u3059\u308B\u3088\u3046\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["4D \u306E\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u30D7\u30ED\u30BB\u30B9\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306F\u3001",(0,r.jsx)(n.em,{children:"\u30E9\u30F3\u30B2\u30FC\u30B8\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9"})," \u306E ",(0,r.jsx)(n.a,{href:"https://doc.4d.com",children:(0,r.jsx)(n.em,{children:"\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D64D\u30D7\u30ED\u30BB\u30B9"})})," \u306E\u7AE0\u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"web\u30D7\u30ED\u30BB\u30B9\u306B\u304A\u3051\u308B\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u30E2\u30FC\u30C9\u306E\u4F7F\u7528\u53EF\u80FD\u72B6\u6CC1",children:"Web\u30D7\u30ED\u30BB\u30B9\u306B\u304A\u3051\u308B\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u30E2\u30FC\u30C9\u306E\u4F7F\u7528\u53EF\u80FD\u72B6\u6CC1"}),"\n",(0,r.jsx)(n.p,{children:"\u5B9F\u884C\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u3088\u3063\u3066\u3001\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u30E2\u30FC\u30C9\u304C\u4F7F\u7528\u3055\u308C\u308B\u3001\u307E\u305F\u306F\u4F7F\u7528\u53EF\u80FD\u304B\u3092\u6B21\u306E\u8868\u306B\u793A\u3057\u307E\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"4D Server"}),(0,r.jsxs)(n.th,{children:["\u30A4\u30F3\u30BF\u30FC\u30D7\u30EA\u30BF\u30FC (",(0,r.jsx)(n.a,{href:"/docs/ja/19/Desktop/clientServer#4d-%E3%81%A84d-server-%E3%81%AE%E5%90%8C%E3%81%98%E3%83%9E%E3%82%B7%E3%83%B3%E4%B8%8A%E3%81%A7%E3%81%AE%E4%BD%BF%E7%94%A8",children:"\u30ED\u30FC\u30AB\u30EB\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u63A5\u7D9A"}),")"]}),(0,r.jsx)(n.th,{children:"\u30A4\u30F3\u30BF\u30FC\u30D7\u30EA\u30BF\u30FC (\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8 (\u30ED\u30FC\u30AB\u30EB\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u63A5\u7D9A\u306A\u3057) \u307E\u305F\u306F\u30D0\u30A4\u30CA\u30EA)"}),(0,r.jsx)(n.th,{children:"\u30B3\u30F3\u30D1\u30A4\u30EB\u6E08\u307F\u30B3\u30FC\u30C9"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"REST \u30B5\u30FC\u30D0\u30FC"}),(0,r.jsx)(n.td,{children:"\u30B3\u30AA\u30DA\u30E9\u30C6\u30A3\u30D6"}),(0,r.jsx)(n.td,{children:"\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6"}),(0,r.jsx)(n.td,{children:"\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Web \u30B5\u30FC\u30D0\u30FC"}),(0,r.jsx)(n.td,{children:"\u30B3\u30AA\u30DA\u30E9\u30C6\u30A3\u30D6"}),(0,r.jsx)(n.td,{children:"\u30B3\u30AA\u30DA\u30E9\u30C6\u30A3\u30D6"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"Web\u8A2D\u5B9A"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Web\u30B5\u30FC\u30D3\u30B9\u30B5\u30FC\u30D0\u30FC"}),(0,r.jsx)(n.td,{children:"\u30B3\u30AA\u30DA\u30E9\u30C6\u30A3\u30D6"}),(0,r.jsx)(n.td,{children:"\u30B3\u30AA\u30DA\u30E9\u30C6\u30A3\u30D6"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"Web\u8A2D\u5B9A"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u65E7\u5F0FREST"}),(0,r.jsx)(n.td,{children:"\u30B3\u30AA\u30DA\u30E9\u30C6\u30A3\u30D6"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"Web\u8A2D\u5B9A"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"Web\u8A2D\u5B9A"})})]})]})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"4D\u30EA\u30E2\u30FC\u30C8/\u30B7\u30F3\u30B0\u30EB\u30E6\u30FC\u30B6\u30FC"}),(0,r.jsx)(n.th,{children:"\u30A4\u30F3\u30BF\u30FC\u30D7\u30EA\u30BF\u30FC\u30B3\u30FC\u30C9"}),(0,r.jsx)(n.th,{children:"\u30B3\u30F3\u30D1\u30A4\u30EB\u6E08\u307F\u30B3\u30FC\u30C9"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"REST \u30B5\u30FC\u30D0\u30FC"}),(0,r.jsx)(n.td,{children:"\u30B3\u30AA\u30DA\u30E9\u30C6\u30A3\u30D6"}),(0,r.jsx)(n.td,{children:"\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Web \u30B5\u30FC\u30D0\u30FC"}),(0,r.jsx)(n.td,{children:"\u30B3\u30AA\u30DA\u30E9\u30C6\u30A3\u30D6"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"Web\u8A2D\u5B9A"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Web\u30B5\u30FC\u30D3\u30B9\u30B5\u30FC\u30D0\u30FC"}),(0,r.jsx)(n.td,{children:"\u30B3\u30AA\u30DA\u30E9\u30C6\u30A3\u30D6"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"Web\u8A2D\u5B9A"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u65E7\u5F0FREST"}),(0,r.jsx)(n.td,{children:"\u30B3\u30AA\u30DA\u30E9\u30C6\u30A3\u30D6"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"Web\u8A2D\u5B9A"})})]})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["REST \u30B5\u30FC\u30D0\u30FC: REST \u3067\u547C\u3073\u51FA\u3055\u308C\u305F ",(0,r.jsx)(n.a,{href:"/docs/ja/19/REST/classFunctions",children:"ORDA \u30C7\u30FC\u30BF\u30E2\u30C7\u30EB\u30AF\u30E9\u30B9\u95A2\u6570"})," \u3092\u51E6\u7406\u3057\u307E\u3059"]}),"\n",(0,r.jsxs)(n.li,{children:["Web \u30B5\u30FC\u30D0\u30FC: ",(0,r.jsx)(n.a,{href:"/docs/ja/19/WebServer/templates",children:"Web \u30C6\u30F3\u30D7\u30EC\u30FC\u30C8"}),"\u3001",(0,r.jsx)(n.a,{href:"/docs/ja/19/WebServer/httpRequests",children:"4DACTION \u3068\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"})," \u3092\u51E6\u7406\u3057\u307E\u3059"]}),"\n",(0,r.jsx)(n.li,{children:"Web \u30B5\u30FC\u30D3\u30B9\u30B5\u30FC\u30D0\u30FC: SOAP\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u51E6\u7406\u3057\u307E\u3059"}),"\n",(0,r.jsxs)(n.li,{children:["\u65E7\u5F0FREST: 4D \u30E1\u30BD\u30C3\u30C9\u3078\u306E\u76F4\u308A\u30AF\u30A8\u30B9\u30C8 (",(0,r.jsx)(n.code,{children:"/rest/{table}/{methodName}"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Web\u8A2D\u5B9A"})})," \u3068\u306F\u3001\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u30E2\u30FC\u30C9\u5B9F\u884C\u304C\u8A2D\u5B9A\u306B\u3088\u308B\u3053\u3068\u3092\u8868\u3057\u307E\u3059:\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/19/WebServer/sessions#%E3%82%BB%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E6%9C%89%E5%8A%B9%E5%8C%96",children:(0,r.jsx)(n.strong,{children:"\u30B9\u30B1\u30FC\u30E9\u30D6\u30EB\u30BB\u30C3\u30B7\u30E7\u30F3"})})," \u304C\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001Web\u30D7\u30ED\u30BB\u30B9\u306B\u304A\u3044\u3066 ",(0,r.jsx)(n.a,{href:"/docs/ja/19/WebServer/sessions#%E3%83%97%E3%83%AA%E3%82%A8%E3%83%B3%E3%83%97%E3%83%86%E3%82%A3%E3%83%96%E3%83%A2%E3%83%BC%E3%83%89",children:"\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u30E2\u30FC\u30C9\u304C\u81EA\u52D5\u7684\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u305D\u308C\u4EE5\u5916\u306E\u5834\u5408\u306F\u3001",(0,r.jsx)(n.a,{href:"/docs/ja/19/WebServer/webServerConfig#%E3%83%97%E3%83%AA%E3%82%A8%E3%83%B3%E3%83%97%E3%83%86%E3%82%A3%E3%83%96%E3%83%97%E3%83%AD%E3%82%BB%E3%82%B9%E3%82%92%E4%BD%BF%E7%94%A8",children:(0,r.jsx)(n.strong,{children:"\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u30D7\u30ED\u30BB\u30B9\u3092\u4F7F\u7528"})})," \u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u8003\u616E\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["Web\u30B5\u30FC\u30D3\u30B9\u30D7\u30ED\u30BB\u30B9 (\u30B5\u30FC\u30D0\u30FC\u307E\u305F\u306F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8) \u306E\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u30E2\u30FC\u30C9\u306F\u3001\u30E1\u30BD\u30C3\u30C9\u30EC\u30D9\u30EB\u3067\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u516C\u958B\u6E08\u307F\u306E SOAP\u30B5\u30FC\u30D0\u30FC\u30E1\u30BD\u30C3\u30C9 (",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4Dv19/4D/19/Publishing-a-Web-Service-with-4D.300-5416868.ja.html",children:"4D\u3067 Web \u30B5\u30FC\u30D3\u30B9\u3092\u516C\u958B\u3059\u308B"})," \u53C2\u7167) \u3042\u308B\u3044\u306F\u30D7\u30ED\u30AD\u30B7\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30E1\u30BD\u30C3\u30C9 (",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4Dv19/4D/19/Subscribing-to-a-Web-Service-in-4D.300-5416870.ja.html",children:"4D\u304B\u3089 Web \u30B5\u30FC\u30D3\u30B9\u3078\u30B5\u30D6\u30B9\u30AF\u30E9\u30A4\u30D6\u3059\u308B"}),' \u53C2\u7167) \u306E "\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u30D7\u30ED\u30BB\u30B9\u3067\u5B9F\u884C\u53EF\u80FD" \u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u30C1\u30A7\u30C3\u30AF\u3057\u3001\u30E1\u30BD\u30C3\u30C9\u304C\u30B3\u30F3\u30D1\u30A4\u30E9\u30FC\u306B\u3088\u3063\u3066\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3068\u78BA\u8A8D\u3055\u308C\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002']}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u306Aweb\u30B5\u30FC\u30D0\u30FC\u30B3\u30FC\u30C9\u306E\u66F8\u304D\u65B9",children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u306AWeb\u30B5\u30FC\u30D0\u30FC\u30B3\u30FC\u30C9\u306E\u66F8\u304D\u65B9"}),"\n",(0,r.jsxs)(n.p,{children:["Web\u30D7\u30ED\u30BB\u30B9\u3092\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30E2\u30FC\u30C9\u3067\u5B9F\u884C\u3059\u308B\u306B\u306F\u3001Web\u30B5\u30FC\u30D0\u30FC\u3067\u5B9F\u884C\u3055\u308C\u308B\u3059\u3079\u3066\u306E 4D\u30B3\u30FC\u30C9\u304C\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002 \u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u8A2D\u5B9A\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u306B\u304A\u3044\u3066 ",(0,r.jsx)(n.strong,{children:"\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u30D7\u30ED\u30BB\u30B9\u3092\u4F7F\u7528"})," \u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u30C1\u30A7\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4EE5\u4E0B\u306E\u90E8\u5206\u304C 4D\u30B3\u30F3\u30D1\u30A4\u30E9\u30FC\u306B\u3088\u3063\u3066\u81EA\u52D5\u7684\u306B\u8A55\u4FA1\u3055\u308C\u307E\u3059:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u3059\u3079\u3066\u306E Web\u95A2\u9023\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/ja/19/WebServer/authentication#on-web-authentication",children:(0,r.jsx)(n.code,{children:"On Web Authentication"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/ja/19/WebServer/httpRequests#on-web-connection",children:(0,r.jsx)(n.code,{children:"On Web Connection"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/ja/19/REST/configuration#on-rest-authentication-%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B",children:(0,r.jsx)(n.code,{children:"On REST Authentication"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication",children:(0,r.jsx)(n.code,{children:"On Mobile App Authentication"})})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"compiler_web"}),' \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9 (\u5B9F\u969B\u306E "\u5B9F\u884C\u30E2\u30FC\u30C9" \u30D7\u30ED\u30D1\u30C6\u30A3\u306B\u95A2\u308F\u3089\u305A\u8A55\u4FA1\u3055\u308C\u307E\u3059)']}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Web\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u304A\u3044\u3066 ",(0,r.jsx)(n.code,{children:"PROCESS 4D TAGS"})," \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u51E6\u7406\u3055\u308C\u308B\u57FA\u672C\u7684\u306B\u3059\u3079\u3066\u306E\u30B3\u30FC\u30C9 (.shtml\u30DA\u30FC\u30B8\u3092\u901A\u3057\u3066\u5B9F\u884C\u3055\u308C\u308B\u3082\u306E\u306A\u3069)"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:['"\u516C\u958B\u30AA\u30D7\u30B7\u30E7\u30F3: 4D\u30BF\u30B0\u3068URL (',(0,r.jsx)(n.code,{children:"4DACTION"}),')..." \u5C5E\u6027\u304C\u6709\u52B9\u306A\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3002']}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'"REST\u30EA\u30BD\u30FC\u30B9\u3068\u3057\u3066\u516C\u958B" \u5C5E\u6027\u304C\u6709\u52B9\u306A\u30C6\u30FC\u30D6\u30EB\u306E\u30C8\u30EA\u30AC\u30FC'}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["REST \u3067\u547C\u3073\u51FA\u3055\u308C\u305F ",(0,r.jsx)(n.a,{href:"/docs/ja/19/REST/classFunctions",children:"ORDA \u30C7\u30FC\u30BF\u30E2\u30C7\u30EB\u30AF\u30E9\u30B9\u95A2\u6570"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'"REST \u30B5\u30FC\u30D0\u30FC" \u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u9078\u629E\u3055\u308C\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9 (\u65E7\u5F0FREST\u30B3\u30FC\u30EB)'}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u308C\u3089\u305D\u308C\u305E\u308C\u306E\u30E1\u30BD\u30C3\u30C9\u3068\u30B3\u30FC\u30C9\u306E\u90E8\u5206\u306B\u3064\u3044\u3066\u3001\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u306E\u30EB\u30FC\u30EB\u304C\u9075\u5B88\u3055\u308C\u3066\u3044\u308B\u304B\u3092\u30B3\u30F3\u30D1\u30A4\u30E9\u30FC\u304C\u30C1\u30A7\u30C3\u30AF\u3057\u3001\u554F\u984C\u304C\u3042\u3063\u305F\u5834\u5408\u306B\u306F\u30A8\u30E9\u30FC\u3092\u8FD4\u3057\u307E\u3059\u3002 \u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u30EB\u30FC\u30EB\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306F\u3001",(0,r.jsx)(n.a,{href:"https://doc.4d.com",children:"4D\u30E9\u30F3\u30B2\u30FC\u30B8\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9"})," \u30DE\u30CB\u30E5\u30A2\u30EB\u306E ",(0,r.jsx)(n.em,{children:"\u30D7\u30ED\u30BB\u30B9"})," \u306E\u7AE0\u306E ",(0,r.jsx)(n.em,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u306A\u30E1\u30BD\u30C3\u30C9\u306E\u66F8\u304D\u65B9"})," \u306E\u6BB5\u843D\u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"4d-web\u30B3\u30FC\u30C9\u306E\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u30C6\u30A3",children:"4D Web\u30B3\u30FC\u30C9\u306E\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u30C6\u30A3"}),"\n",(0,r.jsx)(n.p,{children:"Web\u95A2\u9023\u306E\u307B\u3068\u3093\u3069\u306E 4D\u30B3\u30DE\u30F3\u30C9\u3084\u95A2\u6570\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9\u3001\u305D\u3057\u3066 URL \u304C\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3068\u306A\u308A\u3001\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30E2\u30FC\u30C9\u3067\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"4d\u30B3\u30DE\u30F3\u30C9\u3068\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9",children:"4D\u30B3\u30DE\u30F3\u30C9\u3068\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"}),"\n",(0,r.jsx)(n.p,{children:"\u3059\u3079\u3066\u306E Web\u95A2\u9023\u30B3\u30DE\u30F3\u30C9\u306F\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3059:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Web\u30B5\u30FC\u30D0\u30FC"})," \u30C6\u30FC\u30DE\u306E\u5168\u30B3\u30DE\u30F3\u30C9"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"HTTP\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8"})," \u30C6\u30FC\u30DE\u306E\u5168\u30B3\u30DE\u30F3\u30C9"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Web\u95A2\u9023\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9\u3082\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308A\u3001\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30E2\u30FC\u30C9\u3067\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059: ",(0,r.jsx)(n.code,{children:"On Web Authentication"}),", ",(0,r.jsx)(n.code,{children:"On Web Connection"}),", ",(0,r.jsx)(n.code,{children:"On REST Authentication"}),"...)\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u3082\u3061\u308D\u3093\u3001\u3053\u308C\u3089\u306E\u30E1\u30BD\u30C3\u30C9\u306B\u3088\u3063\u3066\u5B9F\u884C\u3055\u308C\u308B\u30B3\u30FC\u30C9\u3082\u307E\u305F\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"web\u30B5\u30FC\u30D0\u30FCurl",children:"Web\u30B5\u30FC\u30D0\u30FCURL"}),"\n",(0,r.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E 4D Web\u30B5\u30FC\u30D0\u30FCURL\u306F\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308A\u3001\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30E2\u30FC\u30C9\u3067\u4F7F\u7528\u53EF\u80FD\u3067\u3059:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"4daction/"})," (\u547C\u3073\u51FA\u3055\u308C\u308B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3082\u307E\u305F\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u306A\u3051\u308C\u3070\u3044\u3051\u307E\u305B\u3093)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"4dcgi/"})," (\u547C\u3073\u51FA\u3055\u308C\u308B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9\u3082\u307E\u305F\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u306A\u3051\u308C\u3070\u3044\u3051\u307E\u305B\u3093)"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:"4dwebtest/"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:"4dblank/"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:"4dstats/"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:"4dhtmlstats/"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:"4dcacheclear/"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.em,{children:"rest/"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"4dimgfield/"})," (\u30D4\u30AF\u30C1\u30E3\u30FC\u30D5\u30A3\u30FC\u30EB\u30C9\u306E Web\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u5BFE\u3057 ",(0,r.jsx)(n.code,{children:"PROCESS 4D TAGS"})," \u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u307E\u3059)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"4dimg/"})," (\u30D4\u30AF\u30C1\u30E3\u30FC\u5909\u6570\u306E Web\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u5BFE\u3057 ",(0,r.jsx)(n.code,{children:"PROCESS 4D TAGS"})," \u306B\u3088\u3063\u3066\u751F\u6210\u3055\u308C\u307E\u3059)"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6web\u30D7\u30ED\u30BB\u30B9\u30A2\u30A4\u30B3\u30F3",children:"\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6Web\u30D7\u30ED\u30BB\u30B9\u30A2\u30A4\u30B3\u30F3"}),"\n",(0,r.jsx)(n.p,{children:"\u30E9\u30F3\u30BF\u30A4\u30E0\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9\u30FC\u3068 4D Server\u7BA1\u7406\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u4E21\u65B9\u306B\u304A\u3044\u3066\u3001\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u306A Web\u30D7\u30ED\u30BB\u30B9\u306B\u5BFE\u3057\u5C02\u7528\u30A2\u30A4\u30B3\u30F3\u304C\u8868\u793A\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u30D7\u30ED\u30BB\u30B9\u30BF\u30A4\u30D7"}),(0,r.jsx)(n.th,{children:"\u30A2\u30A4\u30B3\u30F3"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6Web\u30E1\u30BD\u30C3\u30C9"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.img,{src:s(227517).Z+"",width:"40",height:"32"})})]})})]})]})}function x(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},227517:function(e,n,s){s.d(n,{Z:function(){return i}});let i="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return c}});var i=s(667294);let r={},d=i.createContext(r);function c(e){let n=i.useContext(d);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);