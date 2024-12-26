"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21372"],{316052:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>l,default:()=>x,assets:()=>c,toc:()=>o,frontMatter:()=>i});var t=JSON.parse('{"id":"commands-legacy/listbox-insert-rows","title":"LISTBOX INSERT ROWS","description":"LISTBOX INSERT ROWS ( { ;} object ; rowPosition {; numRows*} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-insert-rows.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-insert-rows","permalink":"/docs/ja/commands/listbox-insert-rows","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-insert-rows.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-insert-rows","title":"LISTBOX INSERT ROWS","slug":"/commands/listbox-insert-rows","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX INSERT COLUMN FORMULA","permalink":"/docs/ja/commands/listbox-insert-column-formula"},"next":{"title":"LISTBOX MOVE COLUMN","permalink":"/docs/ja/commands/listbox-move-column"}}'),r=s("785893"),d=s("250065");let i={id:"listbox-insert-rows",title:"LISTBOX INSERT ROWS",slug:"/commands/listbox-insert-rows",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function h(n){let e={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"LISTBOX INSERT ROWS"})," ( {* ;} ",(0,r.jsx)(e.em,{children:"object"})," ; ",(0,r.jsx)(e.em,{children:"rowPosition"})," {; ",(0,r.jsx)(e.em,{children:"numRows"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5F15\u6570"}),(0,r.jsx)(e.th,{children:"\u578B"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"*"}),(0,r.jsx)(e.td,{children:"\u6F14\u7B97\u5B50"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"\u6307\u5B9A\u6642, object\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57\u5217) \u7701\u7565\u6642, object\u306F\u5909\u6570"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"object"}),(0,r.jsx)(e.td,{children:"any"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (* \u6307\u5B9A\u6642) \u307E\u305F\u306F \u5909\u6570 (* \u7701\u7565\u6642)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"rowPosition"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"\u884C\u633F\u5165\u4F4D\u7F6E"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"numRows"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"\u633F\u5165\u3059\u308B\u884C\u6570"})]})]})]}),"\n",(0,r.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"LISTBOX INSERT ROWS"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,r.jsx)(e.em,{children:"object"}),"\u5F15\u6570\u304A\u3088\u3073 ",(0,r.jsx)(e.em,{children:"*"})," \u3067\u6307\u5B9A\u3055\u308C\u305F\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306B\u3072\u3068\u3064\u4EE5\u4E0A\u306E\u65B0\u3057\u3044\u884C\u3092\u633F\u5165\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6CE8:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u914D\u5217\u30BF\u30A4\u30D7\u306E\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306B\u5BFE\u3057\u3066\u306E\u307F\u5229\u7528\u3067\u304D\u307E\u3059\u3002\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u30BF\u30A4\u30D7\u306E\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306B\u5BFE\u3057\u3066\u4F7F\u7528\u3057\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u884C\u308F\u305A\u3001OK\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u306B0\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u5F15\u6570 ",(0,r.jsx)(e.em,{children:"*"})," \u3092\u6E21\u3059\u3053\u3068\u306B\u3088\u308A\u3001",(0,r.jsx)(e.em,{children:"object"}),"\u5F15\u6570\u304C\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\uFF08\u6587\u5B57\u5217\uFF09\u3067\u3042\u308B\u3053\u3068\u3092\u793A\u3057\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u3092\u6E21\u3055\u306A\u3044\u5834\u5408\u3001",(0,r.jsx)(e.em,{children:"object"}),"\u5F15\u6570\u304C\u5909\u6570\u3067\u3042\u308B\u3053\u3068\u3092\u793A\u3057\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u6587\u5B57\u5217\u3067\u306F\u306A\u304F\u5909\u6570\u53C2\u7167\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306F",(0,r.jsx)(e.em,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"numRows"}),"\u304C\u7701\u7565\u3055\u308C\u3066\u3044\u308B\u3068\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u884C\u304C1\u3064\u3060\u3051\u633F\u5165\u3055\u308C\u307E\u3059\u3002\u6307\u5B9A\u3055\u308C\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u3053\u306E\u5F15\u6570\u3067\u6307\u5B9A\u3055\u308C\u305F\u884C\u6570\u3092\u633F\u5165\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u884C\u306F",(0,r.jsx)(e.em,{children:"rowPosition"})," \u5F15\u6570\u3067\u6307\u5B9A\u3055\u308C\u305F\u4F4D\u7F6E\u306B\u633F\u5165\u3055\u308C\u307E\u3059\u3002\u65B0\u3057\u3044\u884C\u306F\u3001\u914D\u5217\u30BF\u30A4\u30D7\u3084\u8868\u793A\u72B6\u614B\u306B\u95A2\u308F\u3089\u305A\u3001\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u3067\u4F7F\u7528\u3055\u308C\u308B\u3059\u3079\u3066\u306E\u914D\u5217\u306E\u3053\u306E\u4F4D\u7F6E\u306B\u81EA\u52D5\u3067\u633F\u5165\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"rowPosition"})," \u306E\u5024\u304C\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u7DCF\u884C\u6570\u3088\u308A\u5927\u304D\u3044\u5834\u5408\u3001\u884C\u306F\u5404\u914D\u5217\u306E\u4E00\u756A\u6700\u5F8C\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3059\u30020\u306E\u5834\u5408\u3001\u884C\u306F\u5404\u914D\u5217\u306E\u5148\u982D\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002\u8CA0\u6570\u306E\u5834\u5408\u3001\u4F55\u3082\u884C\u3044\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"/docs/ja/commands/listbox-delete-rows",children:"LISTBOX DELETE ROWS"})}),"\n",(0,r.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(e.td,{children:"913"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(e.td,{children:"\u2717"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,r.jsx)(e.td,{children:"OK"})]})]})]})]})}function x(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return l},a:function(){return i}});var t=s(667294);let r={},d=t.createContext(r);function i(n){let e=t.useContext(d);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),t.createElement(d.Provider,{value:e},n.children)}}}]);