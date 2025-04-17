"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37037"],{24529:function(n,e,r){r.r(e),r.d(e,{default:()=>x,frontMatter:()=>l,metadata:()=>d,assets:()=>c,toc:()=>h,contentTitle:()=>i});var d=JSON.parse('{"id":"commands-legacy/qr-get-borders","title":"QR GET BORDERS","description":"QR GET BORDERS ( area ; column ; row ; border ; line {; color} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/qr-get-borders.md","sourceDirName":"commands-legacy","slug":"/commands/qr-get-borders","permalink":"/docs/ja/commands/qr-get-borders","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-borders.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"qr-get-borders","title":"QR GET BORDERS","slug":"/commands/qr-get-borders","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR Get area property","permalink":"/docs/ja/commands/qr-get-area-property"},"next":{"title":"QR Get command status","permalink":"/docs/ja/commands/qr-get-command-status"}}'),s=r("785893"),t=r("250065");let l={id:"qr-get-borders",title:"QR GET BORDERS",slug:"/commands/qr-get-borders",displayed_sidebar:"docs"},i=void 0,c={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function j(n){let e={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"QR GET BORDERS"})," ( ",(0,s.jsx)(e.em,{children:"area"})," ; ",(0,s.jsx)(e.em,{children:"column"})," ; ",(0,s.jsx)(e.em,{children:"row"})," ; ",(0,s.jsx)(e.em,{children:"border"})," ; ",(0,s.jsx)(e.em,{children:"line"})," {; ",(0,s.jsx)(e.em,{children:"color"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5F15\u6570"}),(0,s.jsx)(e.th,{children:"\u578B"}),(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"area"}),(0,s.jsx)(e.td,{children:"Integer"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"\u30A8\u30EA\u30A2\u53C2\u7167"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"column"}),(0,s.jsx)(e.td,{children:"Integer"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"\u30AB\u30E9\u30E0\u756A\u53F7"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"row"}),(0,s.jsx)(e.td,{children:"Integer"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"\u884C\u756A\u53F7"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"border"}),(0,s.jsx)(e.td,{children:"Integer"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"\u7F6B\u7DDA\u306E\u5024"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"line"}),(0,s.jsx)(e.td,{children:"Integer"}),(0,s.jsx)(e.td,{children:"\u2190"}),(0,s.jsx)(e.td,{children:"\u7DDA\u306E\u592A\u3055"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"color"}),(0,s.jsx)(e.td,{children:"Integer"}),(0,s.jsx)(e.td,{children:"\u2190"}),(0,s.jsx)(e.td,{children:"\u7F6B\u7DDA\u306E\u30AB\u30E9\u30FC"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsx)(e.p,{children:"QR GET BORDERS \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3001\u6307\u5B9A\u3057\u305F\u30BB\u30EB\u306E\u7F6B\u7DDA\u30B9\u30BF\u30A4\u30EB\u3092\u53D6\u5F97\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"area"}),"\u306B\u306F\u30AF\u30A4\u30C3\u30AF\u30EC\u30DD\u30FC\u30C8\u30A8\u30EA\u30A2\u306E\u53C2\u7167\u756A\u53F7\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"column"}),"\u306B\u306F\u30BB\u30EB\u306E\u30AB\u30E9\u30E0\u756A\u53F7\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"row"}),"\u306B\u306F\u30BB\u30EB\u306E\u884C\u756A\u53F7\u3092\u6E21\u3057\u307E\u3059:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5BFE\u8C61\u306E\u5C0F\u8A08 (\u30D6\u30EC\u30FC\u30AF) \u30EC\u30D9\u30EB\u305D\u6307\u5B9A\u3059\u308B\u6B63\u306E\u6574\u6570\u3092\u6E21\u3059\u3001\u307E\u305F\u306F"}),"\n",(0,s.jsxs)(e.li,{children:["\u30C6\u30FC\u30DE\u306E\u4EE5\u4E0B\u306E\u5B9A\u6570\u306E\u3044\u305A\u308C\u304B\u3092\u6E21\u3059",(0,s.jsx)(e.br,{}),"\n| \u5B9A\u6570             | \u578B    | \u5024   | \u30B3\u30E1\u30F3\u30C8       |",(0,s.jsx)(e.br,{}),"\n| -------------- | ---- | --- | ---------- |",(0,s.jsx)(e.br,{}),"\n| qr detail      | \u500D\u9577\u6574\u6570 | -2 | \u30EC\u30DD\u30FC\u30C8\u306E\u8A73\u7D30\u30A8\u30EA\u30A2 |",(0,s.jsx)(e.br,{}),"\n| qr grand total | \u500D\u9577\u6574\u6570 | -3 | \u7DCF\u8A08\u30A8\u30EA\u30A2      |",(0,s.jsx)(e.br,{}),"\n| qr title       | \u500D\u9577\u6574\u6570 | -1 | \u30EC\u30DD\u30FC\u30C8\u30BF\u30A4\u30C8\u30EB   |"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"border"}),"\u306B\u306F\u3001\u9069\u7528\u3059\u308B\u30BB\u30EB\u306E\u7F6B\u7DDA\u3092\u793A\u3059\u5024\u3092\u6E21\u3057\u307E\u3059\u3002\u30C6\u30FC\u30DE\u306E\u3044\u305A\u308C\u304B\u306E\u5024\u3092\u6E21\u3057\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,s.jsx)(e.th,{children:"\u578B"}),(0,s.jsx)(e.th,{children:"\u5024"}),(0,s.jsx)(e.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"qr bottom border"}),(0,s.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(e.td,{children:"8"}),(0,s.jsx)(e.td,{children:"\u4E0B\u7F6B\u7DDA"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"qr inside horizontal border"}),(0,s.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(e.td,{children:"32"}),(0,s.jsx)(e.td,{children:"\u5185\u5074\u7E26\u7F6B\u7DDA"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"qr inside vertical border"}),(0,s.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(e.td,{children:"16"}),(0,s.jsx)(e.td,{children:"\u5185\u5074\u6A2A\u7F6B\u7DDA"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"qr left border"}),(0,s.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"\u5DE6\u7F6B\u7DDA"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"qr right border"}),(0,s.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(e.td,{children:"4"}),(0,s.jsx)(e.td,{children:"\u53F3\u7F6B\u7DDA"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"qr top border"}),(0,s.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(e.td,{children:"2"}),(0,s.jsx)(e.td,{children:"\u4E0A\u7F6B\u7DDA"})]})]})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Note:"})," ",(0,s.jsx)(e.a,{href:"/docs/ja/commands/qr-set-borders",title:"QR SET BORDERS",children:"QR SET BORDERS"}),"\u30B3\u30DE\u30F3\u30C9\u3068\u306F\u7570\u306A\u308A\u3001QR GET BORDERS\u306F\u7D2F\u8A08\u5024\u3092\u53D7\u3051\u4ED8\u3051\u307E\u305B\u3093\u3002\u7F6B\u7DDA\u306E\u5168\u3066\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u77E5\u308B\u306B\u306F\u3001\u5168\u3066\u306E\u7F6B\u7DDA\u5024\u3092\u4F7F\u3063\u3066\u500B\u5225\u306B\u30C6\u30B9\u30C8\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"line"}),"\u306B\u306F\u305D\u306E\u7DDA\u306E\u592A\u3055\u3092\u8FD4\u3057\u307E\u3059:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"0 = \u7DDA\u306A\u3057"}),"\n",(0,s.jsx)(e.li,{children:"1 = 1/4\u30DD\u30A4\u30F3\u30C8"}),"\n",(0,s.jsx)(e.li,{children:"2 = 1/2\u30DD\u30A4\u30F3\u30C8"}),"\n",(0,s.jsx)(e.li,{children:"3 = 1\u30DD\u30A4\u30F3\u30C8"}),"\n",(0,s.jsx)(e.li,{children:"4 = 2\u30DD\u30A4\u30F3\u30C8"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"color"}),"\u306F\u305D\u306E\u7DDA\u306E\u8272\u3092\u8FD4\u3057\u307E\u3059\u3002\u8FD4\u3055\u308C\u308B\u5024\u306F\u3001\u6307\u5B9A\u3057\u305F\u7F6B\u7DDA\u90E8\u5206\u306E\u30AB\u30E9\u30FC\u5024\u3067\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u7121\u52B9\u306A",(0,s.jsx)(e.em,{children:"area"}),"\u756A\u53F7\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u756A\u53F7-9850\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002",(0,s.jsx)(e.br,{}),"\n\u7121\u52B9\u306A",(0,s.jsx)(e.em,{children:"column"}),"\u5F15\u6570\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u756A\u53F7-9852\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002",(0,s.jsx)(e.br,{}),"\n\u7121\u52B9\u306A",(0,s.jsx)(e.em,{children:"row"}),"\u5F15\u6570\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u756A\u53F7-9853\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002",(0,s.jsx)(e.br,{}),"\n\u7121\u52B9\u306A",(0,s.jsx)(e.em,{children:"border"}),"\u5F15\u6570\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u756A\u53F7-9854\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"/docs/ja/commands/qr-set-borders",children:"QR SET BORDERS"})}),"\n",(0,s.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,s.jsx)(e.td,{children:"798"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,s.jsx)(e.td,{children:"\u2717"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,s.jsx)(e.td,{children:"error"})]})]})]})]})}function x(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(j,{...n})}):j(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return i},a:function(){return l}});var d=r(667294);let s={},t=d.createContext(s);function l(n){let e=d.useContext(t);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),d.createElement(t.Provider,{value:e},n.children)}}}]);