"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48431"],{724283:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>i,toc:()=>o,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/listbox-set-column-formula","title":"LISTBOX SET COLUMN FORMULA","description":"LISTBOX SET COLUMN FORMULA ( { ;} object ; formula ; dataType* )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/listbox-set-column-formula.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-column-formula","permalink":"/docs/ja/20-R8/commands/listbox-set-column-formula","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-column-formula.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-set-column-formula","title":"LISTBOX SET COLUMN FORMULA","slug":"/commands/listbox-set-column-formula","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET AUTO ROW HEIGHT","permalink":"/docs/ja/20-R8/commands/listbox-set-auto-row-height"},"next":{"title":"LISTBOX SET COLUMN WIDTH","permalink":"/docs/ja/20-R8/commands/listbox-set-column-width"}}'),l=s("785893"),d=s("250065");let r={id:"listbox-set-column-formula",title:"LISTBOX SET COLUMN FORMULA",slug:"/commands/listbox-set-column-formula",displayed_sidebar:"docs"},c=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(n){let e={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"LISTBOX SET COLUMN FORMULA"})," ( {* ;} ",(0,l.jsx)(e.em,{children:"object"})," ; ",(0,l.jsx)(e.em,{children:"formula"})," ; ",(0,l.jsx)(e.em,{children:"dataType"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u5F15\u6570"}),(0,l.jsx)(e.th,{children:"\u578B"}),(0,l.jsx)(e.th,{}),(0,l.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"*"}),(0,l.jsx)(e.td,{children:"\u6F14\u7B97\u5B50"}),(0,l.jsx)(e.td,{children:"\u2192"}),(0,l.jsx)(e.td,{children:"\u6307\u5B9A\u6642object\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57\u5217)\u3001\u7701\u7565\u6642object\u306F\u5909\u6570"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"object"}),(0,l.jsx)(e.td,{children:"any"}),(0,l.jsx)(e.td,{children:"\u2192"}),(0,l.jsx)(e.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (* \u6307\u5B9A\u6642) \u307E\u305F\u306F\u5909\u6570 (* \u7701\u7565\u6642)"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"formula"}),(0,l.jsx)(e.td,{children:"Text"}),(0,l.jsx)(e.td,{children:"\u2192"}),(0,l.jsx)(e.td,{children:"\u5217\u306B\u5272\u308A\u5F53\u3066\u308B4D\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"dataType"}),(0,l.jsx)(e.td,{children:"Integer"}),(0,l.jsx)(e.td,{children:"\u2192"}),(0,l.jsx)(e.td,{children:"\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306E\u7D50\u679C\u578B"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"LISTBOX SET COLUMN FORMULA"}),"\u30B3\u30DE\u30F3\u30C9\u306F",(0,l.jsx)(e.em,{children:"object"}),"\u3068*** \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u5217\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u305F",(0,l.jsx)(e.em,{children:"formula"}),"\u3092\u5909\u66F4\u3057\u307E\u3059\u3002\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306F\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u30C7\u30FC\u30BF\u30BD\u30FC\u30B9\u304C",(0,l.jsx)(e.strong,{children:"\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3"}),"\u3001",(0,l.jsx)(e.strong,{children:"\u547D\u540D\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3"}),"\u3001\u3042\u308B\u3044\u306F",(0,l.jsx)(e.strong,{children:"\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u307E\u305F\u306F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3"}),"\u306E\u5834\u5408\u306E\u307F\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u6CE8:"})," ",(0,l.jsx)(e.a,{href:"/docs/ja/20-R8/commands/object-set-data-source",children:"OBJECT SET DATA SOURCE"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u3001\u30C7\u30FC\u30BF\u30BD\u30FC\u30B9\u3092\u914D\u5217\u578B\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306B\u5B9A\u7FA9\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E ",(0,l.jsx)(e.em,{children:"*"})," \u5F15\u6570\u3092\u6E21\u3057\u305F\u5834\u5408\u3001",(0,l.jsx)(e.em,{children:"object"})," \u5F15\u6570\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57\u5217) \u3067\u3059\u3002\u3053\u306E\u5F15\u6570\u3092\u6E21\u3055\u306A\u3044\u5834\u5408 ",(0,l.jsx)(e.em,{children:"object"})," \u306F\u5909\u6570\u3067\u3059\u3002\u3053\u306E\u5834\u5408\u6587\u5B57\u5217\u3067\u306F\u306A\u304F\u5909\u6570\u53C2\u7167\u3092\u6E21\u3057\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u306F\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u5217\u3092\u6307\u5B9A\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.em,{children:"formula"})," \u306B\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u3001\u6709\u52B9\u306A\u5F0F\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059:"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u30A4\u30F3\u30B9\u30C8\u30E9\u30AF\u30B7\u30E7\u30F3"}),"\n",(0,l.jsx)(e.li,{children:"\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u30A8\u30C7\u30A3\u30BF\u30FC\u3067\u751F\u6210\u3057\u305F\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9"}),"\n",(0,l.jsx)(e.li,{children:"4D\u30B3\u30DE\u30F3\u30C9\u306E\u547C\u3073\u51FA\u3057"}),"\n",(0,l.jsx)(e.li,{children:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306E\u547C\u3073\u51FA\u3057"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u30B3\u30DE\u30F3\u30C9\u304C\u547C\u3073\u51FA\u3055\u308C\u308B\u3068\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u304C\u89E3\u6790\u3055\u308C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u6CE8:"})," \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30E9\u30F3\u30B2\u30FC\u30B8\u306B\u5DE6\u53F3\u3055\u308C\u306A\u3044\u30014D\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3059\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u3092\u6307\u5B9A\u3059\u308B\u305F\u3081\u306B\u306F",(0,l.jsx)(e.a,{href:"/docs/ja/20-R8/commands/command-name",children:"Command name"})," \u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.em,{children:"dataType"})," \u5F15\u6570\u306B\u306F\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u5B9F\u884C\u6642\u306B\u8FD4\u3055\u308C\u308B\u30C7\u30FC\u30BF\u306E\u578B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u306B\u306F",(0,l.jsx)(e.em,{children:"Field and Variable Types"})," \u30C6\u30FC\u30DE\u5185\u306E\u5B9A\u6570\u3092\u6E21\u3057\u307E\u3059\u3002\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306E\u7D50\u679C\u304C\u671F\u5F85\u3059\u308B\u30C7\u30FC\u30BF\u578B\u306B\u4E00\u81F4\u3057\u306A\u3044\u5834\u5408\u3001\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.a,{href:"/docs/ja/20-R8/commands/listbox-get-column-formula",children:"LISTBOX Get column formula"}),(0,l.jsx)(e.br,{}),"\n",(0,l.jsx)(e.a,{href:"/docs/ja/20-R8/commands/object-set-data-source",children:"OBJECT SET DATA SOURCE"})]}),"\n",(0,l.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{}),(0,l.jsx)(e.th,{})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,l.jsx)(e.td,{children:"1203"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,l.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(a,{...n})}):a(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return r}});var t=s(667294);let l={},d=t.createContext(l);function r(n){let e=t.useContext(d);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),t.createElement(d.Provider,{value:e},n.children)}}}]);