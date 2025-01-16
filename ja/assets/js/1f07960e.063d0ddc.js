"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88195"],{30549:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/qr-get-sorts","title":"QR GET SORTS","description":"QR GET SORTS ( area ; aColumns ; aOrders )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-get-sorts.md","sourceDirName":"commands-legacy","slug":"/commands/qr-get-sorts","permalink":"/docs/ja/20-R7/commands/qr-get-sorts","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-sorts.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-get-sorts","title":"QR GET SORTS","slug":"/commands/qr-get-sorts","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR GET SELECTION","permalink":"/docs/ja/20-R7/commands/qr-get-selection"},"next":{"title":"QR Get text property","permalink":"/docs/ja/20-R7/commands/qr-get-text-property"}}'),t=s("785893"),d=s("250065");let l={id:"qr-get-sorts",title:"QR GET SORTS",slug:"/commands/qr-get-sorts",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u30AF\u30ED\u30B9\u30C6\u30FC\u30D6\u30EB\u30E2\u30FC\u30C9",id:"\u30AF\u30ED\u30B9\u30C6\u30FC\u30D6\u30EB\u30E2\u30FC\u30C9",level:5},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(n){let e={a:"a",br:"br",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"QR GET SORTS"})," ( ",(0,t.jsx)(e.em,{children:"area"})," ; ",(0,t.jsx)(e.em,{children:"aColumns"})," ; ",(0,t.jsx)(e.em,{children:"aOrders"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5F15\u6570"}),(0,t.jsx)(e.th,{children:"\u578B"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"area"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u30A8\u30EA\u30A2\u53C2\u7167"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"aColumns"}),(0,t.jsx)(e.td,{children:"Real array"}),(0,t.jsx)(e.td,{children:"\u2190"}),(0,t.jsx)(e.td,{children:"\u30BD\u30FC\u30C8\u3055\u308C\u305F\u30AB\u30E9\u30E0"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"aOrders"}),(0,t.jsx)(e.td,{children:"Real array"}),(0,t.jsx)(e.td,{children:"\u2190"}),(0,t.jsx)(e.td,{children:"\u30BD\u30FC\u30C8\u9806"})]})]})]}),"\n",(0,t.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsx)(e.p,{children:"QR GET SORTS \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u6B21\u306E2\u3064\u306E\u914D\u5217\u3092\u4F5C\u6210\u3057\u307E\u3059:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.em,{children:"aColumns"}),(0,t.jsx)(e.br,{}),"\n\u3053\u306E\u914D\u5217\u306B\u306F\u3001\u30BD\u30FC\u30C8\u9806\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u3059\u3079\u3066\u306E\u30AB\u30E9\u30E0\u304C\u683C\u7D0D\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.em,{children:"aOrders"}),(0,t.jsx)(e.br,{}),"\n\u3053\u306E\u914D\u5217\u306E\u5404\u8981\u7D20\u306B\u306F\u3001\u5BFE\u5FDC\u3059\u308B\u30AB\u30E9\u30E0\u306E\u4E26\u3073\u66FF\u3048\u9806\u304C\u683C\u7D0D\u3055\u308C\u307E\u3059\u3002\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"*aOrders{$i}*\u304C1\u306E\u5834\u5408\u3001\u4E26\u3073\u66FF\u3048\u9806\u306F\u6607\u9806\u3067\u3059\u3002"}),"\n",(0,t.jsx)(e.li,{children:"*aOrders{$i}*\u304C-1\u306E\u5834\u5408\u3001\u4E26\u3073\u66FF\u3048\u9806\u306F\u964D\u9806\u3067\u3059\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h5,{id:"\u30AF\u30ED\u30B9\u30C6\u30FC\u30D6\u30EB\u30E2\u30FC\u30C9",children:"\u30AF\u30ED\u30B9\u30C6\u30FC\u30D6\u30EB\u30E2\u30FC\u30C9"}),"\n",(0,t.jsxs)(e.p,{children:["\u30AF\u30ED\u30B9\u30C6\u30FC\u30D6\u30EB\u30E2\u30FC\u30C9\u306E\u5834\u5408\u3001\u7D50\u679C\u306E\u914D\u5217\u306B\u683C\u7D0D\u3055\u308C\u308B\u9805\u76EE\u306F2\u3064\u4EE5\u4E0B\u3068\u306A\u308A\u307E\u3059\u3002\u3053\u308C\u306F\u3001\u30BD\u30FC\u30C8\u304C\u5B9F\u884C\u3055\u308C\u308B\u306E\u304C\u3001\u30AB\u30E9\u30E0 (1) \u3068\u884C (2) \u3060\u3051\u3067\u3042\u308B\u305F\u3081\u3067\u3059 (",(0,t.jsx)(e.em,{children:"aColumns"}),"\u306E\u5024)\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u7121\u52B9\u306A",(0,t.jsx)(e.em,{children:"area"}),"\u756A\u53F7\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u756A\u53F7-9850\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"/docs/ja/20-R7/commands/qr-set-sorts",children:"QR SET SORTS"})}),"\n",(0,t.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(e.td,{children:"753"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(e.td,{children:"\u2717"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,t.jsx)(e.td,{children:"error"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return l}});var r=s(667294);let t={},d=r.createContext(t);function l(n){let e=r.useContext(d);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),r.createElement(d.Provider,{value:e},n.children)}}}]);