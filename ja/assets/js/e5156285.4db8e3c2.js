"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51888"],{417502:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>t,metadata:()=>d,assets:()=>i,toc:()=>o,contentTitle:()=>c});var d=JSON.parse('{"id":"commands-legacy/sql-load-record","title":"SQL LOAD RECORD","description":"SQL LOAD RECORD {( numRecords )}","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sql-load-record.md","sourceDirName":"commands-legacy","slug":"/commands/sql-load-record","permalink":"/docs/ja/commands/sql-load-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-load-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sql-load-record","title":"SQL LOAD RECORD","slug":"/commands/sql-load-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL GET OPTION","permalink":"/docs/ja/commands/sql-get-option"},"next":{"title":"SQL LOGIN","permalink":"/docs/ja/commands/sql-login"}}'),r=s("785893"),l=s("250065");let t={id:"sql-load-record",title:"SQL LOAD RECORD",slug:"/commands/sql-load-record",displayed_sidebar:"docs"},c=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function a(n){let e={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"SQL LOAD RECORD"})," {( ",(0,r.jsx)(e.em,{children:"numRecords"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5F15\u6570"}),(0,r.jsx)(e.th,{children:"\u578B"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"numRecords"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"\u30ED\u30FC\u30C9\u3059\u308B\u30EC\u30B3\u30FC\u30C9\u6570"})]})})]}),"\n",(0,r.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsx)(e.p,{children:"SQL LOAD RECORD\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u73FE\u5728\u306E\u63A5\u7D9A\u306B\u304A\u3044\u3066\u958B\u304B\u308C\u305FODBC\u30BD\u30FC\u30B9\u304B\u3089\u306E\u30EC\u30B3\u30FC\u30C9\u30921\u4EF6\u4EE5\u4E0A4D\u5185\u306B\u53D6\u308A\u8FBC\u307F\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u4EFB\u610F\u306E\u5F15\u6570",(0,r.jsx)(e.em,{children:"numRecords"}),"\u3092\u4F7F\u7528\u3057\u3001\u53D6\u308A\u51FA\u3059\u30EC\u30B3\u30FC\u30C9\u6570\u3092\u8A2D\u5B9A\u3057\u307E\u3059:"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u3053\u306E\u5F15\u6570\u3092\u7701\u7565\u3059\u308B\u3068\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30C7\u30FC\u30BF\u30BD\u30FC\u30B9\u304B\u3089\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3092\u53D6\u308A\u51FA\u3057\u307E\u3059\u3002\u3053\u306E\u65B9\u6CD5\u306F\u3001\u30EB\u30FC\u30D7\u4E2D\u3067\u4E00\u5EA6\u306B1\u30EC\u30B3\u30FC\u30C9\u3092\u53D7\u3051\u53D6\u308B\u30C7\u30FC\u30BF\u53D6\u5F97\u306B\u5BFE\u5FDC\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.em,{children:"numRecords"}),"\u306B\u6574\u6570\u5024\u3092\u6E21\u3059\u3068\u3001\u30B3\u30DE\u30F3\u30C9\u306F",(0,r.jsx)(e.em,{children:"numRecords"}),"\u4EF6\u306E\u30EC\u30B3\u30FC\u30C9\u3092\u53D6\u308A\u51FA\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(e.li,{children:"SQL All Records\u5B9A\u6570\uFF08\u5024 -1\uFF09\u3092\u6E21\u3059\u3068\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30C6\u30FC\u30D6\u30EB\u306E\u5168\u30EC\u30B3\u30FC\u30C9\u3092\u53D6\u308A\u51FA\u3057\u307E\u3059\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Note:"})," \u6700\u5F8C\u306E2\u3064\u306E\u8A2D\u5B9A\u306F\u3001\u53D6\u5F97\u3057\u305F\u30C7\u30FC\u30BF\u304C\u914D\u5217\u30844D\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u95A2\u9023\u4ED8\u3051\u3089\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u306E\u307F\u610F\u5473\u3092\u6301\u3061\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(e.h4,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,r.jsx)(e.p,{children:"\u30B3\u30DE\u30F3\u30C9\u304C\u6B63\u3057\u304F\u5B9F\u884C\u3055\u308C\u308B\u3068\u3001OK\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u306F1\u306B\u3001\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/docs/ja/commands/sql-cancel-load",children:"SQL CANCEL LOAD"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/commands/sql-execute",children:"SQL EXECUTE"})]}),"\n",(0,r.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(e.td,{children:"822"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(e.td,{children:"\u2717"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,r.jsx)(e.td,{children:"OK"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return t}});var d=s(667294);let r={},l=d.createContext(r);function t(n){let e=d.useContext(l);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),d.createElement(l.Provider,{value:e},n.children)}}}]);