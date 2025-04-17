"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99097"],{920508:function(n,e,t){t.r(e),t.d(e,{default:()=>a,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>h,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/http-set-option","title":"HTTP SET OPTION","description":"HTTP SET OPTION ( option ; value )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/http-set-option.md","sourceDirName":"commands-legacy","slug":"/commands/http-set-option","permalink":"/docs/ja/20-R8/commands/http-set-option","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fhttp-set-option.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"http-set-option","title":"HTTP SET OPTION","slug":"/commands/http-set-option","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"HTTP SET CERTIFICATES FOLDER","permalink":"/docs/ja/20-R8/commands/http-set-certificates-folder"},"next":{"title":"\u968E\u5C64\u30EA\u30B9\u30C8","permalink":"/docs/ja/20-R8/commands/theme/Hierarchical-Lists"}}'),d=t("785893"),r=t("250065");let i={id:"http-set-option",title:"HTTP SET OPTION",slug:"/commands/http-set-option",displayed_sidebar:"docs"},c=void 0,l={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(n){let e={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"HTTP SET OPTION"})," ( ",(0,d.jsx)(e.em,{children:"option"})," ; ",(0,d.jsx)(e.em,{children:"value"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5F15\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"option"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u8A2D\u5B9A\u3059\u308B\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u30B3\u30FC\u30C9"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"value"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u5024"})]})]})]}),"\n",(0,d.jsx)(e.admonition,{title:"\u4E92\u63DB\u6027",type:"info",children:(0,d.jsxs)(e.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u4E92\u63DB\u6027\u306E\u305F\u3081\u3060\u3051\u306B\u7DAD\u6301\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u73FE\u5728\u306F ",(0,d.jsx)(e.a,{href:"/docs/ja/20-R8/API/HTTPRequestClass",children:(0,d.jsx)(e.code,{children:"4D.HTTPRequest \u30AF\u30E9\u30B9"})})," \u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u63A8\u5968\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]})}),"\n",(0,d.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"HTTP SET OPTION"}),"\u30B3\u30DE\u30F3\u30C9\u306F (",(0,d.jsx)(e.a,{href:"/docs/ja/20-R8/commands/http-get",children:"HTTP Get"}),"\u3084",(0,d.jsx)(e.a,{href:"/docs/ja/20-R8/commands/http-request",children:"HTTP Request"}),"\u30B3\u30DE\u30F3\u30C9\u3067\u5B9F\u884C\u3055\u308C\u308B\u6B21\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u3067\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306B\u3088\u308A\u4F7F\u7528\u3055\u308C\u308B) HTTP\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u5024\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002\u8A2D\u5B9A\u3059\u308B\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u6570\u3060\u3051\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u6CE8:"})," \u8A2D\u5B9A\u3055\u308C\u308B\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u306B\u5BFE\u3057\u6709\u52B9\u3067\u3059\u3002\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5834\u5408\u305D\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5185\u3067\u6709\u52B9\u3067\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"option"})," \u5F15\u6570\u306B\u306F\u8A2D\u5B9A\u3059\u308B\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u756A\u53F7\u3092\u3001",(0,d.jsx)(e.em,{children:"value"})," \u5F15\u6570\u306B\u306F\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u65B0\u3057\u3044\u5024\u3092\u6E21\u3057\u307E\u3059\u3002",(0,d.jsx)(e.em,{children:"option"})," \u5F15\u6570\u306B\u306F",(0,d.jsx)(e.em,{children:"HTTP Client"}),"\u30C6\u30FC\u30DE\u306E\u4EE5\u4E0B\u306E\u5B9A\u7FA9\u6E08\u307F\u5909\u6570\u306E\u3044\u305A\u308C\u304B\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{children:"\u5024"}),(0,d.jsx)(e.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"HTTP client log"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"7"}),(0,d.jsxs)(e.td,{children:[(0,d.jsx)(e.em,{children:"value"}),' = \u4EE5\u4E0B\u306E\u5B9A\u6570\u306E\u3044\u3065\u308C\u304B\u4E00\u3064: HTTP disable log: HTTP \u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30C7\u30D0\u30C3\u30B0\u30ED\u30B0\u306F\u7121\u52B9\u5316\u3055\u308C\u3066\u3044\u307E\u3059(\u30C7\u30D5\u30A9\u30EB\u30C8) HTTP enable log with all body parts: HTTP \u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30C7\u30D0\u30C3\u30B0\u30ED\u30B0\u306F\u30EC\u30B9\u30DD\u30F3\u30B9\u3068\u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u672C\u6587\u90E8\u5206\u3067\u6709\u52B9\u5316\u3055\u308C\u3066\u3044\u307E\u3059 HTTP enable log with request body: HTTP \u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30C7\u30D0\u30C3\u30B0\u30ED\u30B0\u306F\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u304A\u3044\u3066\u306E\u307F\u672C\u6587\u90E8\u5206\u3067\u6709\u52B9\u5316\u3055\u308C\u3066\u3044\u307E\u3059 HTTP enable log with response body: HTTP \u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30C7\u30D0\u30C3\u30B0\u30ED\u30B0\u306F\u30EC\u30B9\u30DD\u30F3\u30B9\u306B\u304A\u3044\u3066\u306E\u307F\u672C\u6587\u90E8\u5206\u3067\u6709\u52B9\u5316\u3055\u308C\u3066\u3044\u307E\u3059 HTTP enable log without body: HTTP \u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30C7\u30D0\u30C3\u30B0\u30ED\u30B0\u306F\u672C\u6587\u90E8\u5206\u4EE5\u5916\u306B\u304A\u3044\u3066\u6709\u52B9\u5316\u3055\u308C\u3066\u3044\u307E\u3059(\u3053\u306E\u5834\u5408\u672C\u6587\u30B5\u30A4\u30BA\u304C\u63D0\u4F9B\u3055\u308C\u307E\u3059) \u3053\u308C\u3092\u4F7F\u7528\u3059\u308B\u3068HTTP \u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30EA\u30AF\u30A8\u30B9\u30C8\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u306E\u30B9\u30C6\u30FC\u30BF\u30B9\u3092\u53D6\u5F97\u3042\u308B\u3044\u306F\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u6A5F\u80FD\u304C\u6709\u52B9\u5316\u3055\u308C\u305F\u5834\u5408\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E"Logs" \u30D5\u30A9\u30EB\u30C0\u5185\u306B"4DHTTPClientLog_nn.txt" \u3068\u3044\u3046\u540D\u524D\u306E\u30D5\u30A1\u30A4\u30EB\u304C\u4FDD\u5B58\u3055\u308C\u307E\u3059(nn \u306F\u30D5\u30A1\u30A4\u30EB\u756A\u53F7\u3067\u3059)\u3002\u3053\u308C\u306FHTTP \u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u95A2\u9023\u3057\u305F\u554F\u984C\u3092\u30C7\u30D0\u30C3\u30B0\u3059\u308B\u306E\u306B\u6709\u7528\u3067\u3059\u3002\u3053\u3053\u306B\u306F\u5404\u30EA\u30AF\u30A8\u30B9\u30C8\u3068\u5404\u30EC\u30B9\u30DD\u30F3\u30B9\u304Craw\u30E2\u30FC\u30C9\u3067\u8A18\u9332\u3055\u308C\u307E\u3059\u3002\u30D8\u30C3\u30C0\u30FC\u3092\u542B\u3081\u3066\u30EA\u30AF\u30A8\u30B9\u30C8\u5168\u4F53\u304C\u8A18\u9332\u3055\u308C\u307E\u3059\u3002\u307E\u305F\u30AA\u30D7\u30B7\u30E7\u30F3\u3068\u3057\u3066\u672C\u6587\u90E8\u5206\u3092\u8A18\u9332\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u8A73\u7D30\u306A\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001',(0,d.jsx)(e.em,{children:"\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u306E\u8A73\u7D30"})," \u306E\u7AE0\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"HTTP compression"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"6"}),(0,d.jsxs)(e.td,{children:["\u5024 = 0 (\u5727\u7E2E\u3057\u306A\u3044) \u307E\u305F\u306F 1 (\u5727\u7E2E\u3059\u308B)\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u5024: 0",(0,d.jsx)(e.br,{}),"\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3057\u3066\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u9593\u901A\u4FE1\u3092\u52B9\u7387\u5316\u3059\u308B\u305F\u3081\u306E\u5727\u7E2E\u30E1\u30AB\u30CB\u30BA\u30E0\u306E\u6709\u52B9/\u7121\u52B9\u3092\u5207\u308A\u66FF\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u30E1\u30AB\u30CB\u30BA\u30E0\u304C\u6709\u52B9\u306B\u306A\u3063\u3066\u3044\u308B\u3068\u3001HTTP\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306F\u30B5\u30FC\u30D0\u30FC\u306E\u30EC\u30B9\u30DD\u30F3\u30B9\u306B\u5FDC\u3058\u3066deflate\u307E\u305F\u306Fgzip\u5727\u7E2E\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"HTTP display auth dial"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"4"}),(0,d.jsxs)(e.td,{children:["\u5024 = 0 (\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u3092\u8868\u793A\u3057\u306A\u3044) \u307E\u305F\u306F 1 (\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u3092\u8868\u793A\u3059\u308B)\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u5024: 0",(0,d.jsx)(e.br,{}),"\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3057\u3066\u3001",(0,d.jsx)(e.a,{href:"/docs/ja/20-R8/commands/http-get",children:"HTTP Get"}),"\u3084",(0,d.jsx)(e.a,{href:"/docs/ja/20-R8/commands/http-request",children:"HTTP Request"}),"\u3092\u5B9F\u884C\u3057\u305F\u969B\u306B\u8A8D\u8A3C\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u3092\u8868\u793A\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u8A8D\u8A3C\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u306F\u8868\u793A\u3055\u308C\u305A\u3001",(0,d.jsx)(e.a,{href:"/docs/ja/20-R8/commands/http-authenticate",children:"HTTP AUTHENTICATE"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u8A8D\u8A3C\u3092\u884C\u3044\u307E\u3059\u3002\u3057\u304B\u3057\u8A8D\u8A3C\u30C0\u30A4\u30A2\u30ED\u30B0\u3092\u8868\u793A\u3057\u3066\u30E6\u30FC\u30B6\u30FC\u306B\u8A8D\u8A3CID\u3092\u5165\u529B\u3055\u305B\u305F\u3044\u5834\u5408\u3001value\u306B1\u3092\u6E21\u3057\u307E\u3059\u3002\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u306F\u8A8D\u8A3C\u304C\u5FC5\u8981\u306A\u5834\u5408\u306E\u307F\u8868\u793A\u3055\u308C\u307E\u3059\u3002"]})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"HTTP follow redirect"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"2"}),(0,d.jsxs)(e.td,{children:["\u5024 = 0 (\u30EA\u30C0\u30A4\u30EC\u30AF\u30C8\u3092\u8A31\u53EF\u3057\u306A\u3044) \u307E\u305F\u306F 1 (\u30EA\u30C0\u30A4\u30EC\u30AF\u30C8\u3092\u8A31\u53EF\u3059\u308B)",(0,d.jsx)(e.br,{}),"\u30C7\u30D5\u30A9\u30EB\u30C8\u5024 = 1"]})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"HTTP max redirect"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"3"}),(0,d.jsxs)(e.td,{children:[(0,d.jsx)(e.em,{children:"\u5024"})," = \u53D7\u3051\u5165\u308C\u308B\u30EA\u30C0\u30A4\u30EC\u30AF\u30C8\u6570\u306E\u6700\u5927\u5024",(0,d.jsx)(e.br,{}),"\u30C7\u30D5\u30A9\u30EB\u30C8\u5024 = 2"]})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"HTTP reset auth settings"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"5"}),(0,d.jsxs)(e.td,{children:["\u5024 = 0 (\u60C5\u5831\u3092\u524A\u9664\u3057\u306A\u3044) \u307E\u305F\u306F 1 (\u60C5\u5831\u3092\u524A\u9664\u3059\u308B)\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u5024: 0",(0,d.jsx)(e.br,{}),"\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3057\u30664D\u306B\u3001\u5404",(0,d.jsx)(e.a,{href:"/docs/ja/20-R8/commands/http-get",children:"HTTP Get"}),"\u3084",(0,d.jsx)(e.a,{href:"/docs/ja/20-R8/commands/http-request",children:"HTTP Request"}),"\u30B3\u30DE\u30F3\u30C9\u5B9F\u884C\u6BCE\u306B\u3001\u30E6\u30FC\u30B6\u30FC\u306E\u8A8D\u8A3C\u60C5\u5831 (\u30E6\u30FC\u30B6\u30FC\u540D\u3001\u30D1\u30B9\u30EF\u30FC\u30C9\u3001\u8A8D\u8A3C\u30E1\u30BD\u30C3\u30C9) \u3092\u30EA\u30BB\u30C3\u30C8\u3059\u308B\u3088\u3046\u6307\u793A\u3067\u304D\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u3053\u308C\u3089\u306E\u60C5\u5831\u306F\u4FDD\u6301\u3055\u308C\u3001\u5404\u30EA\u30AF\u30A8\u30B9\u30C8\u3067\u518D\u5229\u7528\u3055\u308C\u307E\u3059\u3002value \u306B1\u3092\u6E21\u3059\u3068\u30B3\u30DE\u30F3\u30C9\u5B9F\u884C\u6BCE\u306B\u3053\u308C\u3089\u306E\u60C5\u5831\u306F\u524A\u9664\u3055\u308C\u307E\u3059\u3002\u3053\u306E\u8A2D\u5B9A\u306B\u95A2\u308F\u3089\u305A\u3001\u3053\u308C\u3089\u306E\u60C5\u5831\u306F\u30D7\u30ED\u30BB\u30B9\u304C\u7D42\u4E86\u3059\u308B\u3068\u524A\u9664\u3055\u308C\u307E\u3059\u3002"]})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"HTTP timeout"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"1"}),(0,d.jsxs)(e.td,{children:["\u5024 = \u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8 (\u79D2\u5358\u4F4D)\u3002\u3053\u306E\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u306F\u30B5\u30FC\u30D0\u30FC\u304B\u3089\u306E\u30EC\u30B9\u30DD\u30F3\u30B9\u3092\u4F55\u79D2\u5F85\u3064\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u6642\u9593\u3092\u7D4C\u904E\u3059\u308B\u3068\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306F\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u9589\u3058\u3001\u30EA\u30AF\u30A8\u30B9\u30C8\u306F\u5931\u308F\u308C\u307E\u3059\u3002",(0,d.jsx)(e.br,{}),"\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u306F120\u79D2\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u306E\u72B6\u614B\u3084\u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u7279\u6027\u306B\u5FDC\u3058\u3066\u3053\u306E\u5024\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002"]})]})]})]}),"\n",(0,d.jsx)(e.p,{children:"\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3069\u306E\u3088\u3046\u306A\u9806\u756A\u3067\u8A2D\u5B9A\u3057\u3066\u3082\u304B\u307E\u3044\u307E\u305B\u3093\u3002\u304A\u306A\u3058\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u8907\u6570\u56DE\u8A2D\u5B9A\u3057\u305F\u5834\u5408\u3001\u6700\u5F8C\u306B\u8A2D\u5B9A\u3055\u308C\u305F\u5024\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,d.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.a,{href:"/docs/ja/20-R8/commands/http-authenticate",children:"HTTP AUTHENTICATE"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/20-R8/commands/http-get-option",children:"HTTP GET OPTION"})]}),"\n",(0,d.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(e.td,{children:"1160"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function a(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return i}});var s=t(667294);let d={},r=s.createContext(d);function i(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);