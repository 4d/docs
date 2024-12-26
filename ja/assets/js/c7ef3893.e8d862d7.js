"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14235"],{126423:function(n,e,r){r.r(e),r.d(e,{metadata:()=>s,contentTitle:()=>l,default:()=>h,assets:()=>i,toc:()=>o,frontMatter:()=>c});var s=JSON.parse('{"id":"commands-legacy/qr-insert-column","title":"QR INSERT COLUMN","description":"QR INSERT COLUMN ( area ; colNumber ; object )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-insert-column.md","sourceDirName":"commands-legacy","slug":"/commands/qr-insert-column","permalink":"/docs/ja/commands/qr-insert-column","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-insert-column.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-insert-column","title":"QR INSERT COLUMN","slug":"/commands/qr-insert-column","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR GET TOTALS SPACING","permalink":"/docs/ja/commands/qr-get-totals-spacing"},"next":{"title":"QR MOVE COLUMN","permalink":"/docs/ja/commands/qr-move-column"}}'),t=r("785893"),d=r("250065");let c={id:"qr-insert-column",title:"QR INSERT COLUMN",slug:"/commands/qr-insert-column",displayed_sidebar:"docs"},l=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function a(n){let e={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"QR INSERT COLUMN"})," ( ",(0,t.jsx)(e.em,{children:"area"})," ; ",(0,t.jsx)(e.em,{children:"colNumber"})," ; ",(0,t.jsx)(e.em,{children:"object"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5F15\u6570"}),(0,t.jsx)(e.th,{children:"\u578B"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"area"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u30A8\u30EA\u30A2\u53C2\u7167"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"colNumber"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u30AB\u30E9\u30E0\u756A\u53F7"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"object"}),(0,t.jsx)(e.td,{children:"Field, Variable, Pointer"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u30AB\u30E9\u30E0\u306B\u633F\u5165\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]})]})]}),"\n",(0,t.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsx)(e.p,{children:"QR INSERT COLUMN \u30B3\u30DE\u30F3\u30C9\u306F\u6307\u5B9A\u3055\u308C\u305F\u4F4D\u7F6E\u306B\u30AB\u30E9\u30E0\u306E\u4F5C\u6210\u307E\u305F\u306F\u633F\u5165\u3092\u884C\u3044\u307E\u3059\u3002\u633F\u5165\u3055\u308C\u305F\u5834\u6240\u306E\u53F3\u306B\u3042\u308B\u30AB\u30E9\u30E0\u306F\u3059\u3079\u3066\u53F3\u5074\u3078\u79FB\u52D5\u3057\u307E\u3059\u3002"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"colNum"}),"\u306B\u306F\u3001\u5DE6\u304B\u3089\u53F3\u3078\u9806\u306B\u4ED8\u3051\u3089\u308C\u305F\u30AB\u30E9\u30E0\u756A\u53F7\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u30AB\u30E9\u30E0\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30BF\u30A4\u30C8\u30EB\u306F",(0,t.jsx)(e.em,{children:"object"}),"\u306B\u6E21\u3055\u308C\u305F\u5024\u3067\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u7121\u52B9\u306A",(0,t.jsx)(e.em,{children:"area"}),"\u756A\u53F7\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u756A\u53F7-9850\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u6CE8:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30AF\u30ED\u30B9\u30C6\u30FC\u30D6\u30EB\u30EC\u30DD\u30FC\u30C8\u306B\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n",(0,t.jsx)(e.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsx)(e.p,{children:"\u6B21\u306E\u30B3\u30FC\u30C9\u306F\u30AF\u30A4\u30C3\u30AF\u30EC\u30DD\u30FC\u30C8\u30A8\u30EA\u30A2\u306E\u4E00\u756A\u76EE\u306B\u30AB\u30E9\u30E0\u3092\u633F\u5165\uFF08\u307E\u305F\u306F\u4F5C\u6210\uFF09\u3057\u3001\u30AB\u30E9\u30E0\u30BF\u30A4\u30C8\u30EB\u306B\u201CField1\u201D\u3092\u8A2D\u5B9A\u3057\uFF08\u30C7\u30D5\u30A9\u30EB\u30C8\u52D5\u4F5C\uFF09\u3001Field1\u306E\u5024\u3092\u30AB\u30E9\u30E0\u306E\u5185\u5BB9\u3068\u3057\u3066\u4EE3\u5165\u3057\u307E\u3059\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-4d",children:"\xa0QR INSERT COLUMN(MyArea;1;->[Table1]Field1)\n"})}),"\n",(0,t.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"/docs/ja/commands/qr-delete-column",children:"QR DELETE COLUMN"})}),"\n",(0,t.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(e.td,{children:"748"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(e.td,{children:"\u2717"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,t.jsx)(e.td,{children:"error"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return l},a:function(){return c}});var s=r(667294);let t={},d=s.createContext(t);function c(n){let e=s.useContext(d);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),s.createElement(d.Provider,{value:e},n.children)}}}]);