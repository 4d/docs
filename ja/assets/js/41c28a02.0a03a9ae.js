"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61108"],{308096:function(n,e,t){t.r(e),t.d(e,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/sql-get-option","title":"SQL GET OPTION","description":"SQL GET OPTION ( option ; value )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sql-get-option.md","sourceDirName":"commands-legacy","slug":"/commands/sql-get-option","permalink":"/docs/ja/20-R7/commands/sql-get-option","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-get-option.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sql-get-option","title":"SQL GET OPTION","slug":"/commands/sql-get-option","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL GET LAST ERROR","permalink":"/docs/ja/20-R7/commands/sql-get-last-error"},"next":{"title":"SQL LOAD RECORD","permalink":"/docs/ja/20-R7/commands/sql-load-record"}}'),d=t("785893"),l=t("250065");let i={id:"sql-get-option",title:"SQL GET OPTION",slug:"/commands/sql-get-option",displayed_sidebar:"docs"},r=void 0,o={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function a(n){let e={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"SQL GET OPTION"})," ( ",(0,d.jsx)(e.em,{children:"option"})," ; ",(0,d.jsx)(e.em,{children:"value"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5F15\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"option"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30AA\u30D7\u30B7\u30E7\u30F3\u756A\u53F7"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"value"}),(0,d.jsx)(e.td,{children:"Integer, Text"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"\u30AA\u30D7\u30B7\u30E7\u30F3\u5024"})]})]})]}),"\n",(0,d.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(e.p,{children:["SQL GET OPTION\u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,d.jsx)(e.em,{children:"option"}),"\u306B\u6E21\u3057\u305F\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u73FE\u5728\u306E",(0,d.jsx)(e.em,{children:"value"}),"\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u5404\u7A2E\u30AA\u30D7\u30B7\u30E7\u30F3\u3068\u305D\u306E\u95A2\u9023\u3059\u308B\u5024\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306F\u3001",(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/sql-set-option",title:"SQL SET OPTION",children:"SQL SET OPTION"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsx)(e.h4,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,d.jsx)(e.p,{children:"\u30B3\u30DE\u30F3\u30C9\u304C\u6B63\u3057\u304F\u5B9F\u884C\u3055\u308C\u308B\u3068OK\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u306F1\u306B\u3001\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,d.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/sql-set-option",children:"SQL SET OPTION"})}),"\n",(0,d.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(e.td,{children:"819"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(e.td,{children:"\u2717"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,d.jsx)(e.td,{children:"OK"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(a,{...n})}):a(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return i}});var s=t(667294);let d={},l=s.createContext(d);function i(n){let e=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);