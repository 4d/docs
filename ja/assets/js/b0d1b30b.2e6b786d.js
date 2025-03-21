"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55505"],{226027:function(e,n,s){s.r(n),s.d(n,{default:()=>x,frontMatter:()=>d,metadata:()=>t,assets:()=>o,toc:()=>l,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/web-legacy-get-session-expiration","title":"WEB LEGACY GET SESSION EXPIRATION","description":"WEB LEGACY GET SESSION EXPIRATION ( sessionID ; expDate ; expTime )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/web-legacy-get-session-expiration.md","sourceDirName":"commands-legacy","slug":"/commands/web-legacy-get-session-expiration","permalink":"/docs/ja/commands/web-legacy-get-session-expiration","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-legacy-get-session-expiration.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"web-legacy-get-session-expiration","title":"WEB LEGACY GET SESSION EXPIRATION","slug":"/commands/web-legacy-get-session-expiration","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB LEGACY CLOSE SESSION","permalink":"/docs/ja/commands/web-legacy-close-session"},"next":{"title":"WEB SEND BLOB","permalink":"/docs/ja/commands/web-send-blob"}}'),i=s("785893"),r=s("250065");let d={id:"web-legacy-get-session-expiration",title:"WEB LEGACY GET SESSION EXPIRATION",slug:"/commands/web-legacy-get-session-expiration",displayed_sidebar:"docs"},c=void 0,o={},l=[{value:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F",id:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"WEB LEGACY GET SESSION EXPIRATION"})," ( ",(0,i.jsx)(n.em,{children:"sessionID"})," ; ",(0,i.jsx)(n.em,{children:"expDate"})," ; ",(0,i.jsx)(n.em,{children:"expTime"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u5F15\u6570"}),(0,i.jsx)(n.th,{children:"\u578B"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sessionID"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\u30BB\u30C3\u30B7\u30E7\u30F3UUID"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"expDate"}),(0,i.jsx)(n.td,{children:"Date"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"cookie\u6709\u52B9\u671F\u9650\u65E5"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"expTime"}),(0,i.jsx)(n.td,{children:"Time"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"cookie\u6709\u52B9\u671F\u9650\u6642\u523B"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F",children:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F"}),"\n",(0,i.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30014D v18 R6 \u4EE5\u524D\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u304B\u3089\u5909\u63DB\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3067\u306E\u307F\u5229\u7528\u53EF\u80FD\u306A",(0,i.jsx)(n.strong,{children:"\u65E7\u5F0FWeb \u30BB\u30C3\u30B7\u30E7\u30F3"}),"\u3067\u306E\u307F\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059\u3002\u3053\u308C\u306F",(0,i.jsx)(n.strong,{children:"\u30B9\u30B1\u30FC\u30E9\u30D6\u30EBWeb \u30BB\u30C3\u30B7\u30E7\u30F3"}),"\u30E2\u30FC\u30C9(4D v18 R6\u4EE5\u964D\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3067\u306E\u63A8\u5968)\u304C\u6709\u52B9\u5316\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u306F\u7121\u8996\u3055\u308C\u307E\u3059\u3002\u8A73\u7D30\u306A\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001",(0,i.jsx)(n.em,{children:"Web\u30BB\u30C3\u30B7\u30E7\u30F3\u7BA1\u7406(\u65E7\u5F0F)"})," \u306E\u7AE0\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"WEB LEGACY GET SESSION EXPIRATION"}),"\u30B3\u30DE\u30F3\u30C9\u306F",(0,i.jsx)(n.em,{children:"sessionID"}),"\u306B\u6E21\u3055\u308C\u305FUUID\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u306Ecookie\u306E\u6709\u52B9\u671F\u9650\u306B\u95A2\u3059\u308B\u60C5\u5831\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"expDate"})," \u5F15\u6570\u306Fcookie\u306E\u6709\u52B9\u671F\u9650\u65E5\u3092\u3001",(0,i.jsx)(n.em,{children:"expTime"})," \u5F15\u6570\u306Fcookie\u306E\u6709\u52B9\u671F\u9650\u6642\u523B\u3092\u53D7\u3051\u53D6\u308A\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u6CE8:"})," Web\u30EC\u30B9\u30DD\u30F3\u30B9\u304C\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306B\u9001\u4FE1\u3055\u308C\u308B\u305F\u3073\u306B\u3001cookie\u306E\u6709\u52B9\u671F\u9650\u306F\u30EA\u30AF\u30A8\u30B9\u30C8\u304C\u884C\u308F\u308C\u305F\u6642\u523B+Web Inactive session timeout (\u30C7\u30D5\u30A9\u30EB\u30C8\u30678\u6642\u9593) \u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002\u4F8B\u3048\u3070\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u306E\u72B6\u614B\u3067:",(0,i.jsx)(n.br,{}),"\n\u6700\u521D\u306E\u30EA\u30AF\u30A8\u30B9\u30C8: \u6708\u66DC\u65E5\u306E1:00",(0,i.jsx)(n.br,{}),"\n-> \u6709\u52B9\u671F\u9650\u306F\u6708\u66DC\u65E5\u306E09:00",(0,i.jsx)(n.br,{}),"\n\u4E8C\u756A\u76EE\u306E\u30EA\u30AF\u30A8\u30B9\u30C8: \u6708\u66DC\u65E5\u306E1:10",(0,i.jsx)(n.br,{}),"\n-> \u6709\u52B9\u671F\u9650\u306F\u6708\u66DC\u65E5\u306E09:10",(0,i.jsx)(n.br,{}),"\n\u4E09\u756A\u76EE\u306E\u30EA\u30AF\u30A8\u30B9\u30C8: \u706B\u66DC\u65E5\u306E4:00 (cookie\u306E\u6709\u52B9\u671F\u9650\u304C\u904E\u304E\u3066\u3044\u308B)",(0,i.jsx)(n.br,{}),"\n-> \u65B0\u3057\u3044cookie\u5024\u304C\u751F\u6210\u3055\u308C\u3001\u6709\u52B9\u671F\u9650\u306F\u706B\u66DC\u65E5\u306E12:00"]}),"\n",(0,i.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/ja/commands/web-get-current-session-id",children:"WEB Get current session ID"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/ja/commands/web-set-option",children:"WEB SET OPTION"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.em,{children:"Web\u30BB\u30C3\u30B7\u30E7\u30F3\u7BA1\u7406(\u65E7\u5F0F)"})]}),"\n",(0,i.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,i.jsx)(n.td,{children:"1207"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var t=s(667294);let i={},r=t.createContext(i);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);