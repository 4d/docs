"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67545"],{381125:function(n,e,t){t.r(e),t.d(e,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>o,toc:()=>i,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/qr-get-drop-column","title":"QR Get drop column","description":"QR Get drop column ( area ) : Integer","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-get-drop-column.md","sourceDirName":"commands-legacy","slug":"/commands/qr-get-drop-column","permalink":"/docs/ja/commands/qr-get-drop-column","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-drop-column.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-get-drop-column","title":"QR Get drop column","slug":"/commands/qr-get-drop-column","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR Get document property","permalink":"/docs/ja/commands/qr-get-document-property"},"next":{"title":"QR GET HEADER AND FOOTER","permalink":"/docs/ja/commands/qr-get-header-and-footer"}}'),d=t("785893"),s=t("250065");let l={id:"qr-get-drop-column",title:"QR Get drop column",slug:"/commands/qr-get-drop-column",displayed_sidebar:"docs"},c=void 0,o={},i=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function a(n){let e={a:"a",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"QR Get drop column"})," ( ",(0,d.jsx)(e.em,{children:"area"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5F15\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"area"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30A8\u30EA\u30A2\u53C2\u7167"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"\u30C9\u30ED\u30C3\u30D7\u3055\u308C\u305F\u5024"})]})]})]}),"\n",(0,d.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsx)(e.p,{children:"QR Get drop column \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30C9\u30ED\u30C3\u30D7\u52D5\u4F5C\u304C\u884C\u308F\u308C\u305F\u5834\u6240\u306E\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u623B\u308A\u5024\u304C\u8CA0\u306E\u5834\u5408\u3001\u30AB\u30E9\u30E0\u756A\u53F7\u3092\u793A\u3057\u307E\u3059 (\u4F8B\u3048\u3070\u3001\u30AB\u30E9\u30E0\u756A\u53F73\u306B\u30C9\u30ED\u30C3\u30D7\u3055\u308C\u305F\u5834\u5408\u306B\u306F-3)\u3002"}),"\n",(0,d.jsx)(e.li,{children:"\u623B\u308A\u5024\u304C\u6B63\u306E\u5834\u5408\u3001\u305D\u306E\u30AB\u30E9\u30E0\u306E\u524D\u306B\u3042\u308B\u30BB\u30D1\u30EC\u30FC\u30BF\u4E0A\u3067\u30C9\u30ED\u30C3\u30D7\u52D5\u4F5C\u304C\u5B9F\u884C\u3055\u308C\u305F\u3053\u3068\u3092\u793A\u3057\u307E\u3059 (\u4F8B\u3048\u3070\u3001\u30AB\u30E9\u30E02\u306E\u5F8C\u308D\u306B\u30C9\u30ED\u30C3\u30D7\u3055\u308C\u305F\u5834\u5408\u306B\u306F3)\u3002\u30C9\u30ED\u30C3\u30D7\u52D5\u4F5C\u306F\u3001\u5FC5\u305A\u3057\u3082\u65E2\u5B58\u306E\u30AB\u30E9\u30E0\u306E\u524D\u3067\u5B9F\u884C\u3059\u308B\u5FC5\u8981\u306F\u306A\u3044\u3053\u3068\u306B\u7559\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:["\u7121\u52B9\u306A",(0,d.jsx)(e.em,{children:"area"}),"\u756A\u53F7\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u756A\u53F7-9850\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.a,{href:"/docs/ja/commands/qr-delete-column",children:"QR DELETE COLUMN"})}),"\n",(0,d.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(e.td,{children:"747"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(e.td,{children:"\u2717"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,d.jsx)(e.td,{children:"error"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(a,{...n})}):a(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return l}});var r=t(667294);let d={},s=r.createContext(d);function l(n){let e=r.useContext(s);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:l(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);