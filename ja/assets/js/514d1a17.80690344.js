"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["93174"],{208536:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>d,assets:()=>l,toc:()=>i,contentTitle:()=>o});var d=JSON.parse('{"id":"commands-legacy/goto-record","title":"GOTO RECORD","description":"GOTO RECORD ( {aTable ;} record )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/goto-record.md","sourceDirName":"commands-legacy","slug":"/commands/goto-record","permalink":"/docs/ja/20-R8/commands/goto-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fgoto-record.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"goto-record","title":"GOTO RECORD","slug":"/commands/goto-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DUPLICATE RECORD","permalink":"/docs/ja/20-R8/commands/duplicate-record"},"next":{"title":"Is new record","permalink":"/docs/ja/20-R8/commands/is-new-record"}}'),t=r("785893"),s=r("250065");let c={id:"goto-record",title:"GOTO RECORD",slug:"/commands/goto-record",displayed_sidebar:"docs"},o=void 0,l={},i=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GOTO RECORD"})," ( {",(0,t.jsx)(n.em,{children:"aTable"})," ;} ",(0,t.jsx)(n.em,{children:"record"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5F15\u6570"}),(0,t.jsx)(n.th,{children:"\u578B"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"aTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u30EC\u30B3\u30FC\u30C9\u3092\u79FB\u52D5\u3059\u308B\u30C6\u30FC\u30D6\u30EB, \u307E\u305F\u306F \u7701\u7565\u6642\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u30C6\u30FC\u30D6\u30EB"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"record"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Record number\u3067\u8FD4\u3055\u308C\u308B\u756A\u53F7"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(n.p,{children:["GOTO RECORD\u306F\u3001",(0,t.jsx)(n.em,{children:"aTable"}),"\u4E2D\u306E\u6307\u5B9A\u3057\u305F\u30EC\u30B3\u30FC\u30C9\u3092\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3068\u3057\u3066\u9078\u629E\u3057\u307E\u3059\u3002",(0,t.jsx)(n.em,{children:"record"}),"\u5F15\u6570\u306F\u3001",(0,t.jsx)(n.a,{href:"/docs/ja/20-R8/commands/record-number",title:"Record number",children:"Record number"}),"\u30B3\u30DE\u30F3\u30C9\u3067\u6C42\u3081\u308B\u3053\u3068\u306E\u3067\u304D\u308B\u30EC\u30B3\u30FC\u30C9\u756A\u53F7\u3067\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3068\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306F\u9078\u629E\u3055\u308C\u305F\u30EC\u30B3\u30FC\u30C91\u4EF6\u3060\u3051\u306B\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"record"}),"\u304C\u30C7\uFF0D\u30BF\u30D9\uFF0D\u30B9\u306E\u4E2D\u3067\u6700\u3082\u5C0F\u3055\u3044\u30EC\u30B3\uFF0D\u30C9\u756A\u53F7\u3088\u308A\u3082\u5C0F\u3055\u3044\u5834\u5408\u3084\u3001\u6700\u3082\u5927\u304D\u3044\u30EC\u30B3\uFF0D\u30C9\u756A\u53F7\u3088\u308A\u3082\u5927\u304D\u3044\u5834\u5408\u30014D\u304B\u3089\u30EC\u30B3\u30FC\u30C9\u756A\u53F7\u304C\u7BC4\u56F2\u5916\u3067\u3042\u308B\u65E8\u306E\u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002",(0,t.jsx)(n.em,{children:"record"}),"\u304C\u524A\u9664\u3055\u308C\u305F\u30EC\u30B3\uFF0D\u30C9\u306E\u30EC\u30B3\uFF0D\u30C9\u756A\u53F7\u3068\u7B49\u3057\u3044\u5834\u5408\u30014D\u306F\u30A8\u30E9\u30FC-10503\u3092\u8FD4\u3057\u3001\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306F\u7A7A\u306B\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/20-R8/commands/record-number",title:"Record number",children:"Record number"}),"\u306E\u4F8B\u984C\u53C2\u7167"]}),"\n",(0,t.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/20-R8/commands/record-number",children:"Record number"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"\u30EC\u30B3\u30FC\u30C9\u756A\u53F7\u306B\u3064\u3044\u3066"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(n.td,{children:"242"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,t.jsx)(n.td,{children:"error"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u5909\u66F4\u3059\u308B"}),(0,t.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return c}});var d=r(667294);let t={},s=d.createContext(t);function c(e){let n=d.useContext(s);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);