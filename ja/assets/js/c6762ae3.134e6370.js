"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59479"],{527727:function(n,e,t){t.r(e),t.d(e,{default:()=>u,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>i,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/qr-count-columns","title":"QR Count columns","description":"QR Count columns ( area ) : Integer","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-count-columns.md","sourceDirName":"commands-legacy","slug":"/commands/qr-count-columns","permalink":"/docs/ja/20-R7/commands/qr-count-columns","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-count-columns.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-count-columns","title":"QR Count columns","slug":"/commands/qr-count-columns","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR BLOB TO REPORT","permalink":"/docs/ja/20-R7/commands/qr-blob-to-report"},"next":{"title":"QR DELETE COLUMN","permalink":"/docs/ja/20-R7/commands/qr-delete-column"}}'),r=t("785893"),c=t("250065");let d={id:"qr-count-columns",title:"QR Count columns",slug:"/commands/qr-count-columns",displayed_sidebar:"docs"},l=void 0,o={},i=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function a(n){let e={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"QR Count columns"})," ( ",(0,r.jsx)(e.em,{children:"area"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5F15\u6570"}),(0,r.jsx)(e.th,{children:"\u578B"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"area"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"\u30A8\u30EA\u30A2\u53C2\u7167"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:"\u2190"}),(0,r.jsx)(e.td,{children:"\u30A8\u30EA\u30A2\u4E2D\u306E\u30AB\u30E9\u30E0\u6570"})]})]})]}),"\n",(0,r.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(e.p,{children:["QR Count columns \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30AF\u30A4\u30C3\u30AF\u30EC\u30DD\u30FC\u30C8",(0,r.jsx)(e.em,{children:"area"}),"\u306B\u5B58\u5728\u3059\u308B\u30AB\u30E9\u30E0\u306E\u6570\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u7121\u52B9\u306A",(0,r.jsx)(e.em,{children:"area"}),"\u756A\u53F7\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u756A\u53F7-9850\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(e.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(e.p,{children:"\u6B21\u306E\u30B3\u30FC\u30C9\u306F\u30AB\u30E9\u30E0\u306E\u6570\u3092\u53D6\u5F97\u3057\u3066\u3001\u4E00\u756A\u53F3\u7AEF\u306B\u3042\u308B\u65E2\u5B58\u306E\u30AB\u30E9\u30E0\u306E\u53F3\u5074\u306B\u30AB\u30E9\u30E0\u3092\u633F\u5165\u3057\u307E\u3059:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:"\xa0$ColNb:=QR Count columns(MyArea)\n\xa0QR INSERT COLUMN(MyArea;$ColNb+1;->[Table1]Field2)\n"})}),"\n",(0,r.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/docs/ja/20-R7/commands/qr-delete-column",children:"QR DELETE COLUMN"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/20-R7/commands/qr-insert-column",children:"QR INSERT COLUMN"})]}),"\n",(0,r.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(e.td,{children:"764"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(e.td,{children:"\u2717"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,r.jsx)(e.td,{children:"error"})]})]})]})]})}function u(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return d}});var s=t(667294);let r={},c=s.createContext(r);function d(n){let e=s.useContext(c);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);