"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3526"],{169231:function(e,n,r){r.r(n),r.d(n,{default:()=>a,frontMatter:()=>c,metadata:()=>s,assets:()=>t,toc:()=>o,contentTitle:()=>d});var s=JSON.parse('{"id":"WebServer/webServer","title":"Web \u30B5\u30FC\u30D0\u30FC","description":"4D \u306E\u30ED\u30FC\u30AB\u30EB\u30E2\u30FC\u30C9\u3001\u30EA\u30E2\u30FC\u30C8\u30E2\u30FC\u30C9\u3001\u304A\u3088\u3073 4D Server \u306B\u306F Web\u30B5\u30FC\u30D0\u30FC\u30A8\u30F3\u30B8\u30F3 (HTTP\u30B5\u30FC\u30D0\u30FC) \u304C\u3042\u308A\u307E\u3059\u3002\u3053\u306E Web\u30B5\u30FC\u30D0\u30FC\u30A8\u30F3\u30B8\u30F3\u3092\u4F7F\u7528\u3057\u3066\u30014D\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u6700\u5927\u9650\u306B\u6D3B\u7528\u3067\u304D\u308B\u5F37\u529B\u306A Web\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u8A2D\u8A08\u30FB\u516C\u958B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/WebServer/webServer.md","sourceDirName":"WebServer","slug":"/WebServer/overview","permalink":"/docs/ja/WebServer/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FwebServer.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"webServer","slug":"overview","title":"Web \u30B5\u30FC\u30D0\u30FC"},"sidebar":"docs","previous":{"title":"Web Applications","permalink":"/docs/ja/category/web-applications"},"next":{"title":"\u8A2D\u5B9A","permalink":"/docs/ja/WebServer/webServerConfig"}}'),i=r("785893"),l=r("250065");let c={id:"webServer",slug:"overview",title:"Web \u30B5\u30FC\u30D0\u30FC"},d=void 0,t={},o=[{value:"\u7C21\u5358\u306A\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0",id:"\u7C21\u5358\u306A\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0",level:2},{value:"\u3059\u3050\u306B\u4F7F\u3048\u307E\u3059",id:"\u3059\u3050\u306B\u4F7F\u3048\u307E\u3059",level:2},{value:"\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3",id:"\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3",level:2},{value:"\u30E6\u30FC\u30B6\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3",id:"\u30E6\u30FC\u30B6\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3",level:2},{value:"REST\u30EA\u30AF\u30A8\u30B9\u30C8\u3078\u306E\u30B2\u30FC\u30C8\u30A6\u30A7\u30A4",id:"rest\u30EA\u30AF\u30A8\u30B9\u30C8\u3078\u306E\u30B2\u30FC\u30C8\u30A6\u30A7\u30A4",level:2},{value:"\u62E1\u5F35\u8A2D\u5B9A",id:"\u62E1\u5F35\u8A2D\u5B9A",level:2},{value:"\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3068URL",id:"\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3068url",level:2},{value:"\u5C02\u7528\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9",id:"\u5C02\u7528\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9",level:2}];function h(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"4D \u306E\u30ED\u30FC\u30AB\u30EB\u30E2\u30FC\u30C9\u3001\u30EA\u30E2\u30FC\u30C8\u30E2\u30FC\u30C9\u3001\u304A\u3088\u3073 4D Server \u306B\u306F Web\u30B5\u30FC\u30D0\u30FC\u30A8\u30F3\u30B8\u30F3 (HTTP\u30B5\u30FC\u30D0\u30FC) \u304C\u3042\u308A\u307E\u3059\u3002\u3053\u306E Web\u30B5\u30FC\u30D0\u30FC\u30A8\u30F3\u30B8\u30F3\u3092\u4F7F\u7528\u3057\u3066\u30014D\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u6700\u5927\u9650\u306B\u6D3B\u7528\u3067\u304D\u308B\u5F37\u529B\u306A Web\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u8A2D\u8A08\u30FB\u516C\u958B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u7C21\u5358\u306A\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0",children:"\u7C21\u5358\u306A\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0"}),"\n",(0,i.jsx)(n.p,{children:"Web\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u516C\u958B\u306F\u3001\u3044\u3064\u3067\u3082\u958B\u59CB\u307E\u305F\u306F\u505C\u6B62\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30E1\u30CB\u30E5\u30FC\u30B3\u30DE\u30F3\u30C9\u3092\u9078\u629E\u3001\u307E\u305F\u306F\u30E9\u30F3\u30B2\u30FC\u30B8\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3060\u3051\u3067\u3001\u64CD\u4F5C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["4D Web\u30B5\u30FC\u30D0\u30FC\u306E\u76E3\u8996\u3082\u7C21\u5358\u3067\u30014D Server \u306E\u7BA1\u7406\u30A6\u30A3\u30F3\u30C9\u30A6\u3084 ",(0,i.jsx)(n.a,{href:"/docs/ja/WebServer/webServerAdmin#%E7%AE%A1%E7%90%86%E7%94%A8-url",children:"\u5C02\u7528URL"})," \u3092\u4F7F\u3063\u3066\u304A\u3053\u306A\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u3059\u3050\u306B\u4F7F\u3048\u307E\u3059",children:"\u3059\u3050\u306B\u4F7F\u3048\u307E\u3059"}),"\n",(0,i.jsx)(n.p,{children:"4D Web\u30B5\u30FC\u30D0\u30FC\u306F\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30EB\u30FC\u30C8\u30D5\u30A9\u30EB\u30C0\u30FC\u3068\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30DB\u30FC\u30E0\u30DA\u30FC\u30B8\u3092\u81EA\u52D5\u4F5C\u6210\u3059\u308B\u305F\u3081\u3001\u3059\u3050\u306B\u5229\u7528\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3",children:"\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3"}),"\n",(0,i.jsx)(n.p,{children:"\u30C7\u30FC\u30BF\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u306F\u30014D Web\u30B5\u30FC\u30D0\u30FC\u306E\u5B9F\u88C5\u306E\u3059\u3079\u3066\u306E\u6BB5\u968E\u306B\u5B58\u5728\u3057\u307E\u3059\u3002 \u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u30EC\u30D9\u30EB\u306F\u8ABF\u6574\u53EF\u80FD\u3067\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u8A2D\u5B9A\u3067\u306F\u901A\u5E38\u3001\u3082\u3063\u3068\u3082\u5B89\u5168\u306A\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u9078\u629E\u3055\u308C\u307E\u3059\u3002 4D Web\u30B5\u30FC\u30D0\u30FC\u306E\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u306F\u3001\u4EE5\u4E0B\u306E\u8981\u7D20\u306B\u57FA\u3065\u3044\u3066\u3044\u307E\u3059:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/ja/Admin/tls",children:(0,i.jsx)(n.strong,{children:"TLS\u30D7\u30ED\u30C8\u30B3\u30EB (HTTPS)"})})," \u306E\u62E1\u5F35\u30B5\u30DD\u30FC\u30C8\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u8A8D\u8A3C"}),": \u30D3\u30EB\u30C8\u30A4\u30F3\u306E\u8A2D\u5B9A\u304A\u3088\u3073\u3001\u30D5\u30A9\u30FC\u30EB\u30D0\u30C3\u30AF\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9 (Web\u30B5\u30FC\u30D0\u30FC\u7528\u306E ",(0,i.jsx)(n.a,{href:"/docs/ja/WebServer/authentication#on-web-authentication",children:(0,i.jsx)(n.code,{children:"On Web Authentication"})}),"\u3001REST\u30B5\u30FC\u30D0\u30FC\u7528\u306E ",(0,i.jsx)(n.a,{href:"/docs/ja/REST/configuration#on-rest-authentication-%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B",children:(0,i.jsx)(n.code,{children:"On REST Authentication"})}),") \u306B\u57FA\u3065\u304F\u67D4\u8EDF\u3067\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u53EF\u80FD\u306A ",(0,i.jsx)(n.a,{href:"/docs/ja/WebServer/authentication",children:"\u8A8D\u8A3C\u6A5F\u80FD"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u516C\u958B\u3059\u308B\u30B3\u30F3\u30C6\u30F3\u30C4\u306E\u7BA1\u7406"}),": \u660E\u793A\u7684\u306B\u516C\u958B\u3057\u305F\u8981\u7D20\u306E\u307F\u304C\u3001Web \u3084 REST\u30EA\u30AF\u30A8\u30B9\u30C8\u3067\u76F4\u63A5\u5229\u7528\u3067\u304D\u307E\u3059\u3002 \u6B21\u306E\u3082\u306E\u306B\u3064\u3044\u3066\u3001\u5BA3\u8A00\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["HTTP\u30EA\u30AF\u30A8\u30B9\u30C8\u3067\u516C\u958B\u3059\u308B ",(0,i.jsx)(n.a,{href:"/docs/ja/WebServer/allowProject",children:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9"})]}),"\n",(0,i.jsxs)(n.li,{children:["REST\u30EA\u30AF\u30A8\u30B9\u30C8\u3067\u516C\u958B\u3059\u308B ",(0,i.jsx)(n.a,{href:"/docs/ja/ORDA/ordaClasses#%E5%85%AC%E9%96%8Bvs%E9%9D%9E%E5%85%AC%E9%96%8B%E9%96%A2%E6%95%B0",children:"ORDA\u306E\u30C7\u30FC\u30BF\u30E2\u30C7\u30EB\u30AF\u30E9\u30B9\u95A2\u6570"})]}),"\n",(0,i.jsxs)(n.li,{children:["REST\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u516C\u958B\u3057\u306A\u3044 ",(0,i.jsx)(n.a,{href:"/docs/ja/REST/configuration#%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB%E3%82%84%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB%E3%83%89%E3%81%AE%E5%85%AC%E9%96%8B",children:"\u30C6\u30FC\u30D6\u30EB\u3084\u30D5\u30A3\u30FC\u30EB\u30C9"})," \u30C6\u30FC\u30D6\u30EB\u3084\u30D5\u30A3\u30FC\u30EB\u30C9"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/ja/WebServer/webServerConfig#%E3%83%AB%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%AB%E3%83%80%E3%83%BC",children:"\u30C7\u30D5\u30A9\u30EB\u30C8HTML\u30EB\u30FC\u30C8"})," \u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u5B9A\u7FA9\u3059\u308B\u3053\u3068\u306B\u3088\u308B ",(0,i.jsx)(n.strong,{children:"\u30B5\u30F3\u30C9\u30DC\u30C3\u30AF\u30B9\u5316"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u30B5\u30FC\u30D0\u30FC\u306B\u3088\u308B\u30EA\u30BD\u30FC\u30B9\u4F7F\u7528\u306E\u7BA1\u7406"})," (\u4F8B: ",(0,i.jsx)(n.a,{href:"/docs/ja/WebServer/webServerConfig#%E6%9C%80%E5%A4%A7%E5%90%8C%E6%99%82web%E3%83%97%E3%83%AD%E3%82%BB%E3%82%B9",children:"\u6700\u5927\u540C\u6642Web\u30D7\u30ED\u30BB\u30B9"}),"\u30AA\u30D7\u30B7\u30E7\u30F3)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["4D\u306E\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u6A5F\u80FD\u306E\u6982\u8981\u306B\u3064\u3044\u3066\u306F\u3001",(0,i.jsx)(n.a,{href:"https://blog.4d.com/4d-security-guide/",children:"4D Security guide"})," \u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u30E6\u30FC\u30B6\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3",children:"\u30E6\u30FC\u30B6\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3"}),"\n",(0,i.jsxs)(n.p,{children:["4D Web\u30B5\u30FC\u30D0\u30FC\u306B\u306F cookie \u3092\u4F7F\u7528\u3059\u308B\u3001\u5B8C\u5168\u306B\u81EA\u52D5\u5316\u3055\u308C\u305F ",(0,i.jsx)(n.a,{href:"/docs/ja/WebServer/sessions",children:"Web\u30BB\u30C3\u30B7\u30E7\u30F3"})," (\u30E6\u30FC\u30B6\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3) \u7BA1\u7406\u6A5F\u80FD\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"rest\u30EA\u30AF\u30A8\u30B9\u30C8\u3078\u306E\u30B2\u30FC\u30C8\u30A6\u30A7\u30A4",children:"REST\u30EA\u30AF\u30A8\u30B9\u30C8\u3078\u306E\u30B2\u30FC\u30C8\u30A6\u30A7\u30A4"}),"\n",(0,i.jsx)(n.p,{children:"4D Web\u30B5\u30FC\u30D0\u30FC\u306B\u3088\u308A\u30014D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u30C7\u30FC\u30BF\u306B REST\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u901A\u3058\u3066\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u3002 REST\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u3088\u3063\u3066\u3001\u30C7\u30FC\u30BF\u306E\u8FFD\u52A0\u30FB\u8AAD\u307F\u53D6\u308A\u30FB\u7DE8\u96C6\u30FB\u4E26\u3079\u66FF\u3048\u30FB\u691C\u7D22\u306A\u3069\u3001\u3042\u3089\u3086\u308B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u64CD\u4F5C\u306B\u76F4\u63A5\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["REST\u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001",(0,i.jsx)(n.a,{href:"/docs/ja/REST/gettingStarted",children:"REST\u30B5\u30FC\u30D0\u30FC"})," \u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u62E1\u5F35\u8A2D\u5B9A",children:"\u62E1\u5F35\u8A2D\u5B9A"}),"\n",(0,i.jsxs)(n.p,{children:["4D Web\u30B5\u30FC\u30D0\u30FC\u306E\u69CB\u6210\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30EC\u30D9\u30EB\u306E\u5305\u62EC\u7684\u306A\u8A2D\u5B9A\u306B\u3088\u3063\u3066\u5B9A\u7FA9\u3055\u308C\u307E\u3059\u3002\u3053\u306E\u8A2D\u5B9A\u306F\u3001",(0,i.jsx)(n.code,{children:"webServer"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u307E\u305F\u306F ",(0,i.jsx)(n.code,{children:"WEB SET OPTION"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u30BB\u30C3\u30B7\u30E7\u30F3\u6BCE\u306B\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3068url",children:"\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3068URL"}),"\n",(0,i.jsx)(n.p,{children:"4D Web\u30B5\u30FC\u30D0\u30FC\u306F\u3001\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u30DA\u30FC\u30B8\u304A\u3088\u3073\u5C02\u7528\u306EURL\u3092\u4ECB\u3057\u3066\u30014D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u30C7\u30FC\u30BF\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u30DA\u30FC\u30B8\u306B\u306F\u3001\u30D6\u30E9\u30A6\u30B6\u30FC\u306B\u9001\u4FE1\u3055\u308C\u308B\u969B\u306B Web\u30B5\u30FC\u30D0\u30FC\u306E\u51E6\u7406\u3092\u958B\u59CB\u3059\u308B ",(0,i.jsx)(n.a,{href:"/docs/ja/WebServer/templates",children:"\u7279\u5225\u306A\u30BF\u30B0"})," \u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/ja/WebServer/httpRequests",children:"\u5C02\u7528\u306EURL"})," \u306F\u3001\u4EFB\u610F\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3059\u308B\u305F\u3081\u306B 4D \u3092\u547C\u3073\u51FA\u3059\u3082\u306E\u3067\u3001\u30E6\u30FC\u30B6\u30FC\u304C HTML\u30D5\u30A9\u30FC\u30E0\u3092 POST \u3057\u305F\u3068\u304D\u306B\u51E6\u7406\u3092\u958B\u59CB\u3059\u308B\u30D5\u30A9\u30FC\u30E0\u30A2\u30AF\u30B7\u30E7\u30F3\u3068\u3057\u3066\u3082\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5C02\u7528\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9",children:"\u5C02\u7528\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"On Web Authentication"}),"\u3001",(0,i.jsx)(n.code,{children:"On Web Connection"}),"\u3001\u304A\u3088\u3073 ",(0,i.jsx)(n.code,{children:"On REST Authentication"})," \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9\u306F\u3001Web\u30B5\u30FC\u30D0\u30FC\u306B\u304A\u3044\u3066\u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u30A8\u30F3\u30C8\u30EA\u30FC\u30DD\u30A4\u30F3\u30C8\u3067\u3042\u308A\u3001\u3042\u3089\u3086\u308B\u30BF\u30A4\u30D7\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u8A55\u4FA1\u30FB\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u3059\u308B\u306E\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002"]})]})}function a(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return c}});var s=r(667294);let i={},l=s.createContext(i);function c(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);