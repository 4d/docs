"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31929"],{471421:function(e,n,t){t.r(n),t.d(n,{default:()=>j,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>h,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/qr-get-selection","title":"QR GET SELECTION","description":"QR GET SELECTION ( area ; left ; top {; right {; bottom}} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/qr-get-selection.md","sourceDirName":"commands-legacy","slug":"/commands/qr-get-selection","permalink":"/docs/ja/commands/qr-get-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-selection.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"qr-get-selection","title":"QR GET SELECTION","slug":"/commands/qr-get-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR Get report table","permalink":"/docs/ja/commands/qr-get-report-table"},"next":{"title":"QR GET SORTS","permalink":"/docs/ja/commands/qr-get-sorts"}}'),r=t("785893"),d=t("250065");let l={id:"qr-get-selection",title:"QR GET SELECTION",slug:"/commands/qr-get-selection",displayed_sidebar:"docs"},i=void 0,c={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"QR GET SELECTION"})," ( ",(0,r.jsx)(n.em,{children:"area"})," ; ",(0,r.jsx)(n.em,{children:"left"})," ; ",(0,r.jsx)(n.em,{children:"top"})," {; ",(0,r.jsx)(n.em,{children:"right"})," {; ",(0,r.jsx)(n.em,{children:"bottom"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"area"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u30A8\u30EA\u30A2\u53C2\u7167"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"left"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"\u5DE6\u5883\u754C"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"top"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"\u4E0A\u5883\u754C"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"right"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"\u53F3\u5883\u754C"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"bottom"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"\u4E0B\u5883\u754C"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsx)(n.p,{children:"QR GET SELECTION \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u9078\u629E\u3055\u308C\u305F\u30BB\u30EB\u306E\u5EA7\u6A19\u3092\u8FD4\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"left"})," \u306B\u306F\u3001\u9078\u629E\u7BC4\u56F2\u306E\u5DE6\u5074\u5883\u754C\u3068\u306A\u308B\u30AB\u30E9\u30E0\u306E\u756A\u53F7\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002",(0,r.jsx)(n.em,{children:"left"})," \u304C0\u306E\u5834\u5408\u3001\u884C\u5168\u4F53\u304C\u9078\u629E\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"top"}),"\u306B\u306F\u3001\u9078\u629E\u7BC4\u56F2\u306E\u4E0A\u5074\u5883\u754C\u3068\u306A\u308B\u884C\u756A\u53F7\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002",(0,r.jsx)(n.em,{children:"top"}),"\u304C0\u306E\u5834\u5408\u3001\u30AB\u30E9\u30E0\u5168\u4F53\u304C\u9078\u629E\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," ",(0,r.jsx)(n.em,{children:"left"}),"\u3068",(0,r.jsx)(n.em,{children:"top"}),"\u306E\u4E21\u65B9\u304C0\u306E\u5834\u5408\u3001\u30A8\u30EA\u30A2\u5168\u4F53\u304C\u53CD\u8EE2\u8868\u793A\uFF08\u9078\u629E\uFF09\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"right"}),"\u306B\u306F\u3001\u9078\u629E\u7BC4\u56F2\u306E\u53F3\u5074\u5883\u754C\u3068\u306A\u308B\u30AB\u30E9\u30E0\u306E\u756A\u53F7\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"bottom"}),"\u306B\u306F\u3001\u9078\u629E\u7BC4\u56F2\u306E\u4E0B\u5074\u5883\u754C\u3068\u306A\u308B\u884C\u756A\u53F7\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," \u4F55\u3082\u9078\u629E\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001",(0,r.jsx)(n.em,{children:"left"}),"\u3001",(0,r.jsx)(n.em,{children:"top"}),"\u3001",(0,r.jsx)(n.em,{children:"right"}),"\u3001",(0,r.jsx)(n.em,{children:"bottom"}),"\u306B\u306F-1\u304C\u4EE3\u5165\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u7121\u52B9\u306A",(0,r.jsx)(n.em,{children:"area"}),"\u756A\u53F7\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u756A\u53F7-9850\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/ja/commands/qr-set-selection",children:"QR SET SELECTION"})}),"\n",(0,r.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"793"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,r.jsx)(n.td,{children:"error"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var s=t(667294);let r={},d=s.createContext(r);function l(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);