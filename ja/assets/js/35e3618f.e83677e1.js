"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48698"],{382567:function(e,n,s){s.r(n),s.d(n,{default:()=>x,frontMatter:()=>i,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/listbox-delete-rows","title":"LISTBOX DELETE ROWS","description":"LISTBOX DELETE ROWS ( { ;} object ; rowPosition {; numRows*} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/listbox-delete-rows.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-delete-rows","permalink":"/docs/ja/commands/listbox-delete-rows","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-delete-rows.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-delete-rows","title":"LISTBOX DELETE ROWS","slug":"/commands/listbox-delete-rows","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX DELETE COLUMN","permalink":"/docs/ja/commands/listbox-delete-column"},"next":{"title":"LISTBOX DUPLICATE COLUMN","permalink":"/docs/ja/commands/listbox-duplicate-column"}}'),d=s("785893"),r=s("250065");let i={id:"listbox-delete-rows",title:"LISTBOX DELETE ROWS",slug:"/commands/listbox-delete-rows",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function h(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"LISTBOX DELETE ROWS"})," ( {* ;} ",(0,d.jsx)(n.em,{children:"object"})," ; ",(0,d.jsx)(n.em,{children:"rowPosition"})," {; ",(0,d.jsx)(n.em,{children:"numRows"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"\u6F14\u7B97\u5B50"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u6307\u5B9A\u6642, object\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57\u5217) \u7701\u7565\u6642, object\u306F\u5909\u6570"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"object"}),(0,d.jsx)(n.td,{children:"any"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (* \u6307\u5B9A\u6642) \u307E\u305F\u306F \u5909\u6570 (* \u7701\u7565\u6642)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"rowPosition"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u524A\u9664\u3059\u308B\u884C\u306E\u4F4D\u7F6E"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"numRows"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u524A\u9664\u3059\u308B\u884C\u306E\u6570"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"LISTBOX DELETE ROWS"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,d.jsx)(n.em,{children:"object"}),"\u5F15\u6570\u304A\u3088\u3073 ",(0,d.jsx)(n.em,{children:"*"})," \u3067\u6307\u5B9A\u3055\u308C\u305F\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u304B\u3089\u3001",(0,d.jsx)(n.em,{children:"rowPosition"})," \u304B\u3089\u59CB\u307E\u308B\u3072\u3068\u3064\u4EE5\u4E0A\u306E\u884C\uFF08\u8868\u793A\u307E\u305F\u306F\u975E\u8868\u793A\uFF09\u3092\u524A\u9664\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u914D\u5217\u30BF\u30A4\u30D7\u306E\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u3067\u306E\u307F\u52D5\u4F5C\u3057\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u304C\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u30BF\u30A4\u30D7\u306E\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306B\u9069\u7528\u3055\u308C\u305F\u5834\u5408\u3001\u4F55\u3082\u884C\u308F\u305A\u3001\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B0\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u5F15\u6570 ",(0,d.jsx)(n.em,{children:"*"})," \u3092\u6E21\u3059\u3053\u3068\u306B\u3088\u308A\u3001",(0,d.jsx)(n.em,{children:"object"}),"\u5F15\u6570\u304C\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\uFF08\u6587\u5B57\u5217\uFF09\u3067\u3042\u308B\u3053\u3068\u3092\u793A\u3057\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u3092\u6E21\u3055\u306A\u3044\u5834\u5408\u3001",(0,d.jsx)(n.em,{children:"object"}),"\u5F15\u6570\u304C\u5909\u6570\u3067\u3042\u308B\u3053\u3068\u3092\u793A\u3057\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u6587\u5B57\u5217\u3067\u306F\u306A\u304F\u5909\u6570\u53C2\u7167\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306F",(0,d.jsx)(n.em,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u30B3\u30DE\u30F3\u30C9\u5B9F\u884C\u5F8C\u3001\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u5185\u306E\u8981\u7D20\u306E\u9078\u629E\u306F\u3059\u3079\u3066\u89E3\u9664\u3055\u308C\u308B\u70B9\u306B\u7559\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"rowPosition"})," \u3067\u6307\u5B9A\u3057\u305F\u884C\u306F\u3001\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u5217\u3067\u4F7F\u7528\u3055\u308C\u308B\u3059\u3079\u3066\u306E\u914D\u5217\u304B\u3089\u81EA\u52D5\u7684\u306B\u524A\u9664\u3055\u308C\u307E\u3059\u3002",(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.em,{children:"rowPosition"})," \u306E\u5024\u304C\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u5185\u306E\u5408\u8A08\u884C\u6570\u3088\u308A\u3082\u5927\u304D\u3044\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u884C\u3044\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u884C\u306E\u8868\u793A/\u975E\u8868\u793A\u72B6\u614B\u3092\u8003\u616E\u3057\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/commands/listbox-get-number-of-rows",children:"LISTBOX Get number of rows"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/listbox-insert-rows",children:"LISTBOX INSERT ROWS"})]}),"\n",(0,d.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"914"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2717"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,d.jsx)(n.td,{children:"OK"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var t=s(667294);let d={},r=t.createContext(d);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);