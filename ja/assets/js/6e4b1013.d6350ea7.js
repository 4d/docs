"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84652"],{894948:function(n,e,r){r.r(e),r.d(e,{default:()=>h,frontMatter:()=>c,metadata:()=>t,assets:()=>l,toc:()=>a,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/qr-run","title":"QR RUN","description":"QR RUN ( area )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/qr-run.md","sourceDirName":"commands-legacy","slug":"/commands/qr-run","permalink":"/docs/ja/commands/qr-run","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-run.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"qr-run","title":"QR RUN","slug":"/commands/qr-run","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR REPORT TO BLOB","permalink":"/docs/ja/commands/qr-report-to-blob"},"next":{"title":"QR SET AREA PROPERTY","permalink":"/docs/ja/commands/qr-set-area-property"}}'),s=r("785893"),d=r("250065");let c={id:"qr-run",title:"QR RUN",slug:"/commands/qr-run",displayed_sidebar:"docs"},i=void 0,l={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(n){let e={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"QR RUN"})," ( ",(0,s.jsx)(e.em,{children:"area"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5F15\u6570"}),(0,s.jsx)(e.th,{children:"\u578B"}),(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"area"}),(0,s.jsx)(e.td,{children:"Integer"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"\u5B9F\u884C\u3059\u308B\u30A8\u30EA\u30A2\u306E\u53C2\u7167"})]})})]}),"\n",(0,s.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(e.p,{children:["QR RUN\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u51FA\u529B\u5148\u3092\u542B\u3081\u3001\u30AF\u30A4\u30C3\u30AF\u30EC\u30DD\u30FC\u30C8\u306E\u73FE\u5728\u306E\u8A2D\u5B9A\u3092\u4F7F\u7528\u3057\u3066\u3001",(0,s.jsx)(e.em,{children:"area"}),"\u5F15\u6570\u306B\u6E21\u3055\u308C\u305F\u53C2\u7167\u756A\u53F7\u306E\u30EC\u30DD\u30FC\u30C8\u30A8\u30EA\u30A2\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002",(0,s.jsx)(e.a,{href:"/docs/ja/commands/qr-set-destination",title:"QR SET DESTINATION",children:"QR SET DESTINATION"}),"\u30B3\u30DE\u30F3\u30C9\u3067\u51FA\u529B\u30BF\u30A4\u30D7\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5C5E\u3059\u308B\u30A8\u30EA\u30A2\u306E\u30C6\u30FC\u30D6\u30EB\u3067\u30EC\u30DD\u30FC\u30C8\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002",(0,s.jsx)(e.em,{children:"area"}),"\u304C\u30AA\u30D5\u30B9\u30AF\u30EA\u30FC\u30F3\u30A8\u30EA\u30A2\u3092\u6307\u3059\u5834\u5408\u3001",(0,s.jsx)(e.a,{href:"/docs/ja/commands/qr-set-report-table",title:"QR SET REPORT TABLE",children:"QR SET REPORT TABLE"}),"\u30B3\u30DE\u30F3\u30C9\u3067\u4F7F\u7528\u3059\u308B\u30C6\u30FC\u30D6\u30EB\u3092\u6307\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u7121\u52B9\u306A",(0,s.jsx)(e.em,{children:"area"}),"\u756A\u53F7\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u756A\u53F7-9850\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"4D Server\u306E\u5834\u5408:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F4D Server\u4E0A\u3067\u30B9\u30C8\u30A2\u30C9\u30D7\u30ED\u30B7\u30FC\u30B8\u30E3\u2015\u306E\u4E00\u90E8\u3068\u3057\u3066\u5B9F\u884C\u3059\u308B\u4E8B\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u30B5\u30FC\u30D0\u30FC\u30DE\u30B7\u30F3\u4E0A\u3067\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u304C\u8868\u793A\u3055\u308C\u308B\u3053\u3068\u304C\u306A\u3044\u3088\u3046\u306B\u6CE8\u610F\u3057\u3066\u4E0B\u3055\u3044(\u305F\u3060\u3057\u7279\u5B9A\u306E\u6761\u4EF6\u306E\u5834\u5408\u306F\u9664\u304F)\u30024D Server\u4E0A\u3067\u5B9F\u884C\u3059\u308B\u305F\u3081\u306B\u306F\u3001",(0,s.jsx)(e.a,{href:"/docs/ja/commands/qr-set-destination",children:"QR SET DESTINATION"}),' \u30B3\u30DE\u30F3\u30C9\u306B "*" \u5F15\u6570\u3092\u6E21\u3057\u3066\u547C\u3073\u51FA\u3057\u307E\u3059\u3002\u30D7\u30EA\u30F3\u30BF\u30FC\u306B\u554F\u984C\u304C\u3042\u3063\u305F\u5834\u5408(\u7528\u7D19\u5207\u308C\u3001\u30D7\u30EA\u30F3\u30BF\u30FC\u3068\u63A5\u7D9A\u3067\u304D\u306A\u3044\u3001\u7B49)\u306F\u3001\u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8\u306F\u4F55\u3082\u8868\u793A\u3055\u308C\u307E\u305B\u3093\u3002']}),"\n",(0,s.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,s.jsx)(e.td,{children:"746"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,s.jsx)(e.td,{children:"\u2717"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,s.jsx)(e.td,{children:"error"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return i},a:function(){return c}});var t=r(667294);let s={},d=t.createContext(s);function c(n){let e=t.useContext(d);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),t.createElement(d.Provider,{value:e},n.children)}}}]);