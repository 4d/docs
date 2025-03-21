"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95757"],{483214:function(n,e,t){t.r(e),t.d(e,{default:()=>o,frontMatter:()=>c,metadata:()=>s,assets:()=>h,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/http-authenticate","title":"HTTP AUTHENTICATE","description":"HTTP AUTHENTICATE ( name ; password {; authMethod} {; *} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/http-authenticate.md","sourceDirName":"commands-legacy","slug":"/commands/http-authenticate","permalink":"/docs/ja/commands/http-authenticate","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fhttp-authenticate.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"http-authenticate","title":"HTTP AUTHENTICATE","slug":"/commands/http-authenticate","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"HTTP\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8","permalink":"/docs/ja/commands/theme/HTTP"},"next":{"title":"HTTP Get","permalink":"/docs/ja/commands/http-get"}}'),d=t("785893"),r=t("250065");let c={id:"http-authenticate",title:"HTTP AUTHENTICATE",slug:"/commands/http-authenticate",displayed_sidebar:"docs"},i=void 0,h={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(n){let e={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"HTTP AUTHENTICATE"})," ( ",(0,d.jsx)(e.em,{children:"name"})," ; ",(0,d.jsx)(e.em,{children:"password"})," {; ",(0,d.jsx)(e.em,{children:"authMethod"}),"} {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5F15\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"name"}),(0,d.jsx)(e.td,{children:"Text"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30E6\u30FC\u30B6\u30FC\u540D"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"password"}),(0,d.jsx)(e.td,{children:"Text"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30E6\u30FC\u30B6\u30FC\u30D1\u30B9\u30EF\u30FC\u30C9"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"authMethod"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u8A8D\u8A3C\u65B9\u5F0F: 0\u307E\u305F\u306F\u7701\u7565\u6642=\u6307\u5B9A\u3057\u306A\u3044\u30011=BASIC\u30012=DIGEST"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"*"}),(0,d.jsx)(e.td,{children:"\u6F14\u7B97\u5B50"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u6307\u5B9A\u6642: \u30D7\u30ED\u30AF\u30B7\u8A8D\u8A3C"})]})]})]}),"\n",(0,d.jsx)(e.admonition,{title:"\u4E92\u63DB\u6027",type:"info",children:(0,d.jsxs)(e.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u4E92\u63DB\u6027\u306E\u305F\u3081\u3060\u3051\u306B\u7DAD\u6301\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u73FE\u5728\u306F ",(0,d.jsx)(e.a,{href:"/docs/ja/API/HTTPRequestClass",children:(0,d.jsx)(e.code,{children:"4D.HTTPRequest \u30AF\u30E9\u30B9"})})," \u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u63A8\u5968\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]})}),"\n",(0,d.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"HTTP AUTHENTICATE"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u8A8D\u8A3C\u3092\u8981\u6C42\u3059\u308B\u30B5\u30FC\u30D0\u30FC\u3078\u306EHTTP\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u53EF\u80FD\u306B\u3057\u307E\u3059\u3002",(0,d.jsx)(e.em,{children:"\u3068"})," ",(0,d.jsx)(e.em,{children:"password"}),"\u5F15\u6570\u306B\u306F\u5FC5\u8981\u306A\u8A8D\u8A3C\u60C5\u5831 (\u30E6\u30FC\u30B6\u30FC\u540D\u3068\u30D1\u30B9\u30EF\u30FC\u30C9) \u3092\u6E21\u3057\u307E\u3059\u3002\u3053\u306E\u60C5\u5831\u306F\u30A8\u30F3\u30B3\u30FC\u30C9\u3055\u308C\u3001",(0,d.jsx)(e.a,{href:"/docs/ja/commands/http-request",children:"HTTP Request"}),"\u307E\u305F\u306F",(0,d.jsx)(e.a,{href:"/docs/ja/commands/http-get",children:"HTTP Get"}),"\u3092\u4F7F\u7528\u3057\u3066\u9001\u4FE1\u3055\u308C\u308BHTTP\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E",(0,d.jsx)(e.em,{children:"authMethod"}),"\u5F15\u6570\u3092\u4F7F\u7528\u3057\u3066\u3001\u4F7F\u7528\u3059\u308B\u8A8D\u8A3C\u30E1\u30BD\u30C3\u30C9\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002",(0,d.jsx)(e.em,{children:"HTTP Client"}),"\u30C6\u30FC\u30DE\u306E\u4EE5\u4E0B\u306E\u5B9A\u6570\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{children:"\u5024"}),(0,d.jsx)(e.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"HTTP basic"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"1"}),(0,d.jsx)(e.td,{children:"BASIC\u8A8D\u8A3C\u30E1\u30BD\u30C3\u30C9\u3092\u4F7F\u7528\u3059\u308B"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"HTTP digest"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"2"}),(0,d.jsx)(e.td,{children:"DIGEST\u8A8D\u8A3C\u30E1\u30BD\u30C3\u30C9\u3092\u4F7F\u7528\u3059\u308B"})]})]})]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"authMethod"}),"\u5F15\u6570\u3092\u7701\u7565\u3059\u308B\u304B0\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u9069\u5207\u306A\u30E1\u30BD\u30C3\u30C9\u30924D\u304C\u9078\u629E\u3057\u307E\u3059\u3002\u3053\u306E\u5834\u54084D\u306F\u8A8D\u8A3C\u30E1\u30BD\u30C3\u30C9\u3092\u30CD\u30B4\u30B7\u30A8\u30FC\u30C8\u3059\u308B\u305F\u3081\u306B\u8FFD\u52A0\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u9001\u4FE1\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"*"})," \u5F15\u6570\u3092\u6E21\u3059\u3068\u3001\u8A8D\u8A3C\u60C5\u5831\u306FHTTP\u30D7\u30ED\u30AF\u30B7\u306B\u63D0\u4F9B\u3055\u308C\u308B\u3053\u3068\u3092\u610F\u5473\u3057\u307E\u3059\u3002\u3053\u306E\u8A2D\u5B9A\u306F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3068HTTP\u30B5\u30FC\u30D0\u30FC\u306E\u9593\u306B\u8A8D\u8A3C\u3092\u5FC5\u8981\u3068\u3059\u308B\u30D7\u30ED\u30AF\u30B7\u304C\u5B58\u5728\u3059\u308B\u5834\u5408\u306B\u5FC5\u8981\u3068\u306A\u308A\u307E\u3059\u3002\u30B5\u30FC\u30D0\u30FC\u81EA\u8EAB\u3082\u8A8D\u8A3C\u3092\u884C\u3044\u5834\u5408\u3001\u4E8C\u91CD\u306E\u8A8D\u8A3C\u304C\u5FC5\u8981\u3068\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u8A8D\u8A3C\u60C5\u5831\u306F\u4E00\u6642\u7684\u306B\u4FDD\u7BA1\u3055\u308C\u3001\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u5185\u306B\u304A\u3044\u3066\u306F\u305D\u308C\u305E\u308C\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u6BCE\u306B\u518D\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002\u3057\u304B\u3057\u306A\u304C\u3089",(0,d.jsx)(e.a,{href:"/docs/ja/commands/http-set-option",children:"HTTP SET OPTION"})," \u30B3\u30DE\u30F3\u30C9\u3067\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u8A2D\u5B9A\u3059\u308B\u4E8B\u306B\u3088\u308A\u5404\u30EA\u30AF\u30A8\u30B9\u30C8\u5F8C\u306B\u3053\u306E\u60C5\u5831\u3092\u30EA\u30BB\u30C3\u30C8\u3059\u308B\u4E8B\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001",(0,d.jsx)(e.a,{href:"/docs/ja/commands/http-request",children:"HTTP Request"})," \u307E\u305F\u306F ",(0,d.jsx)(e.a,{href:"/docs/ja/commands/http-get",children:"HTTP Get"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3059\u524D\u306B",(0,d.jsx)(e.strong,{children:"HTTP AUTHENTICATE"})," \u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsx)(e.p,{children:"\u8A8D\u8A3C\u4ED8\u304D\u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u4F8B:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:'\xa0\xa0// DIGEST\u30E2\u30FC\u30C9\n\xa0HTTP AUTHENTICATE("httpUser";"123";2)\n\xa0\xa0// \u30D7\u30ED\u30AF\u30B7\u7D4C\u7531\u30C7\u30D5\u30A9\u30EB\u30C8\u30E2\u30FC\u30C9\n\xa0HTTP AUTHENTICATE("ProxyUser";"456";*)\n\xa0$httpStatus:=HTTP Get(...)\n'})}),"\n",(0,d.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.a,{href:"/docs/ja/commands/http-set-option",children:"HTTP SET OPTION"})}),"\n",(0,d.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(e.td,{children:"1161"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function o(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(a,{...n})}):a(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return i},a:function(){return c}});var s=t(667294);let d={},r=s.createContext(d);function c(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:c(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);