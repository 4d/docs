"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33892"],{687995:function(n,e,d){d.r(e),d.d(e,{default:()=>h,frontMatter:()=>c,metadata:()=>r,assets:()=>o,toc:()=>i,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/unload-record","title":"UNLOAD RECORD","description":"UNLOAD RECORD {( aTable )}","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/unload-record.md","sourceDirName":"commands-legacy","slug":"/commands/unload-record","permalink":"/docs/ja/commands/unload-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Funload-record.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"unload-record","title":"UNLOAD RECORD","slug":"/commands/unload-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"READ WRITE","permalink":"/docs/ja/commands/read-write"},"next":{"title":"\u30EC\u30B3\u30FC\u30C9","permalink":"/docs/ja/commands/theme/Records"}}'),t=d("785893"),s=d("250065");let c={id:"unload-record",title:"UNLOAD RECORD",slug:"/commands/unload-record",displayed_sidebar:"docs"},l=void 0,o={},i=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(n){let e={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"UNLOAD RECORD"})," {( ",(0,t.jsx)(e.em,{children:"aTable"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5F15\u6570"}),(0,t.jsx)(e.th,{children:"\u578B"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"aTable"}),(0,t.jsx)(e.td,{children:"Table"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u30EC\u30B3\u30FC\u30C9\u3092\u30A2\u30F3\u30ED\u30FC\u30C9\u3059\u308B\u30C6\u30FC\u30D6\u30EB, \u307E\u305F\u306F \u7701\u7565\u6642\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u30C6\u30FC\u30D6\u30EB"})]})})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(e.p,{children:["UNLOAD RECORD\u306F\u3001",(0,t.jsx)(e.em,{children:"aTable"}),"\u306E\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3092\u30A2\u30F3\u30ED\u30FC\u30C9\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u30ED\u30FC\u30AB\u30EB\u30E6\u30FC\u30B6\u304C\u30EC\u30B3\u30FC\u30C9\u4FEE\u6B63\u53EF\u80FD\u306A\u3068\u304D (\u4ED6\u306E\u30E6\u30FC\u30B6\u306B\u3068\u3063\u3066\u306F\u4FEE\u6B63\u4E0D\u53EF\u306E\u5834\u5408)\u3001UNLOAD RECORD\u30B3\u30DE\u30F3\u30C9\u306F\u4ED6\u306E\u30E6\u30FC\u30B6\u306B\u5BFE\u3057\u3066\u30EC\u30B3\u30FC\u30C9\u3092\u30ED\u30C3\u30AF\u89E3\u9664\u3057\u307E\u3059\u3002"}),"\n",(0,t.jsx)(e.p,{children:"UNLOAD RECORD\u306F\u30E1\u30E2\u30EA\u304B\u3089\u30EC\u30B3\u30FC\u30C9\u3092\u30A2\u30F3\u30ED\u30FC\u30C9\u3057\u307E\u3059\u304C\u3001\u305D\u306E\u30EC\u30B3\u30FC\u30C9\u306F\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u306E\u307E\u307E\u3067\u3059\u3002\u4ED6\u306E\u30EC\u30B3\u30FC\u30C9\u304C\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u306B\u306A\u308B\u3068\u3001\u524D\u306E\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u306F\u81EA\u52D5\u7684\u306B\u30A2\u30F3\u30ED\u30FC\u30C9\u3055\u308C\u3001\u4ED6\u306E\u30E6\u30FC\u30B6\u306B\u5BFE\u3057\u3066\u30ED\u30C3\u30AF\u89E3\u9664\u3055\u308C\u307E\u3059\u3002\u30EC\u30B3\u30FC\u30C9\u306E\u4FEE\u6B63\u304C\u7D42\u308F\u308A\u3001\u305D\u306E\u30EC\u30B3\u30FC\u30C9\u3092\u81EA\u5206\u81EA\u8EAB\u306E\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3068\u3057\u305F\u307E\u307E\u3067\u3001\u4ED6\u306E\u30E6\u30FC\u30B6\u304B\u3089\u4F7F\u3048\u308B\u3088\u3046\u306B\u3057\u305F\u3044\u5834\u5408\u306F\u5E38\u306B\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002"}),"\n",(0,t.jsxs)(e.p,{children:["\u30EC\u30B3\u30FC\u30C9\u306B\u30D4\u30AF\u30C1\u30E3\u30D5\u30A3\u30FC\u30EB\u30C9\u30844D Write\u7B49\u306E\u5916\u90E8\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306A\u3069\u5927\u304D\u306A\u30C7\u30FC\u30BF\u304C\u542B\u307E\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u4FEE\u6B63\u304C\u5FC5\u8981\u3067\u306A\u3044\u304B\u304E\u308A\u305D\u306E\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3092\u30E1\u30E2\u30EA\u5185\u306B\u4FDD\u6301\u3057\u305F\u304F\u306A\u3044\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002\u3053\u3046\u3044\u3046\u5834\u5408\u3001UNLOAD RECORD\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u30E1\u30E2\u30EA\u5185\u306B\u30EC\u30B3\u30FC\u30C9\u3092\u6301\u305F\u305A\u306B\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3092\u4FDD\u6301\u3067\u304D\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002\u305D\u306E\u30EC\u30B3\u30FC\u30C9\u306B\u3088\u3063\u3066\u5360\u6709\u3055\u308C\u3066\u3044\u305F\u30E1\u30E2\u30EA\u3092\u89E3\u653E\u3067\u304D\u307E\u3059\u304C\u3001\u305D\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u5024\u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002\u5F8C\u306B\u30EC\u30B3\u30FC\u30C9\u306E\u5024\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u304C\u5FC5\u8981\u3068\u306A\u3063\u305F\u5834\u5408\u3001",(0,t.jsx)(e.a,{href:"/docs/ja/commands/load-record",title:"LOAD RECORD",children:"LOAD RECORD"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Note:"})," \u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u306E\u4E2D\u3067UNLOAD RECORD\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u305F\u5834\u5408\u3001\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u3092\u7BA1\u7406\u3059\u308B\u30D7\u30ED\u30BB\u30B9\u5185\u3067\u306E\u307F\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u304C\u30A2\u30F3\u30ED\u30FC\u30C9\u3055\u308C\u307E\u3059\u3002\u4ED6\u306E\u30D7\u30ED\u30BB\u30B9\u304B\u3089\u898B\u305F\u5834\u5408\u3001\u30EC\u30B3\u30FC\u30C9\u306F\u30ED\u30C3\u30AF\u3055\u308C\u305F\u307E\u307E\u3068\u306A\u308A\u3001\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u3092\u5B8C\u4E86\uFF08\u307E\u305F\u306F\u53D6\u6D88\u3057\uFF09\u3055\u308C\u308B\u307E\u3067\u7DAD\u6301\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"/docs/ja/commands/load-record",children:"LOAD RECORD"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.em,{children:"\u30EC\u30B3\u30FC\u30C9\u306E\u30ED\u30C3\u30AF"})]}),"\n",(0,t.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(e.td,{children:"212"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},250065:function(n,e,d){d.d(e,{Z:function(){return l},a:function(){return c}});var r=d(667294);let t={},s=r.createContext(t);function c(n){let e=r.useContext(s);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);