"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10504"],{349305:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>h,assets:()=>a,toc:()=>i,frontMatter:()=>t});var s=JSON.parse('{"id":"commands-legacy/create-selection-from-array","title":"CREATE SELECTION FROM ARRAY","description":"CREATE SELECTION FROM ARRAY ( aTable ; recordArray {; selectionName} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/create-selection-from-array.md","sourceDirName":"commands-legacy","slug":"/commands/create-selection-from-array","permalink":"/docs/ja/commands/create-selection-from-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-selection-from-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"create-selection-from-array","title":"CREATE SELECTION FROM ARRAY","slug":"/commands/create-selection-from-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Before selection","permalink":"/docs/ja/commands/before-selection"},"next":{"title":"DELETE SELECTION","permalink":"/docs/ja/commands/delete-selection"}}'),c=r("785893"),d=r("250065");let t={id:"create-selection-from-array",title:"CREATE SELECTION FROM ARRAY",slug:"/commands/create-selection-from-array",displayed_sidebar:"docs"},l=void 0,a={},i=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u30A8\u30E9\u30FC\u7BA1\u7406",id:"\u30A8\u30E9\u30FC\u7BA1\u7406",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"CREATE SELECTION FROM ARRAY"})," ( ",(0,c.jsx)(n.em,{children:"aTable"})," ; ",(0,c.jsx)(n.em,{children:"recordArray"})," {; ",(0,c.jsx)(n.em,{children:"selectionName"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u5F15\u6570"}),(0,c.jsx)(n.th,{children:"\u578B"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"aTable"}),(0,c.jsx)(n.td,{children:"Table"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3059\u308B\u30C6\u30FC\u30D6\u30EB"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"recordArray"}),(0,c.jsx)(n.td,{children:"Integer, Boolean array"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"\u30EC\u30B3\u30FC\u30C9\u756A\u53F7\u306E\u914D\u5217, \u307E\u305F\u306F \u30D6\u30FC\u30EB\u914D\u5217 (True = \u30EC\u30B3\u30FC\u30C9\u3092\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306B\u542B\u3081\u308B False = \u30EC\u30B3\u30FC\u30C9\u3092\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306B\u542B\u3081\u306A\u3044)"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"selectionName"}),(0,c.jsx)(n.td,{children:"Text"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"\u4F5C\u6210\u3059\u308B\u547D\u540D\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u540D\u524D, \u307E\u305F\u306F \u5F15\u6570\u3092\u7701\u7565\u3057\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u3092\u30AB\u30EC\u30F3\u30C8 \u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306B\u9069\u7528\u3059\u308B"})]})]})]}),"\n",(0,c.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"CREATE SELECTION FROM ARRAY"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u4EE5\u4E0B\u306E\u65B9\u6CD5\u3067",(0,c.jsx)(n.em,{children:"selectionName"})," \u547D\u540D\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3057\u307E\u3059:"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.em,{children:"aTable"}),"\u306E\u30EC\u30B3\u30FC\u30C9\u756A\u53F7\u5024\u3092\u7D0D\u3081\u305F\u914D\u5217\u3001\u307E\u305F\u306F"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.em,{children:"aTable"}),"\u306E\u30EC\u30B3\u30FC\u30C9\u3054\u3068\u306B\u3001\u30EC\u30B3\u30FC\u30C9\u3092\u542B\u3081\u308B (",(0,c.jsx)(n.a,{href:"/docs/ja/commands/true",title:"True",children:"True"}),")/\u542B\u3081\u306A\u3044 (",(0,c.jsx)(n.a,{href:"/docs/ja/commands/false",title:"False",children:"False"}),")\u306E\u5024\u3092\u7D0D\u3081\u305F\u30D6\u30FC\u30EB\u914D\u5217\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u8B66\u544A:"})," \u547D\u540D\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306F\u30E1\u30E2\u30EA\u5185\u306B\u4F5C\u6210\u3001\u30ED\u30FC\u30C9\u3055\u308C\u307E\u3059\u3002\u3057\u305F\u304C\u3063\u3066\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3059\u308B\u524D\u306B\u5341\u5206\u306A\u30E1\u30E2\u30EA\u304C\u3042\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"selectionName"}),"\u3092\u7701\u7565\u3057\u305F\u5834\u5408\u3084\u7A7A\u306E\u6587\u5B57\u5217\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306B\u9069\u7528\u3055\u308C\u307E\u3059\u3002\u7D50\u679C\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306F\u66F4\u65B0\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3067\u500D\u9577\u6574\u6570\u914D\u5217\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u914D\u5217\u306E\u5404\u8981\u7D20\u306F\u4F5C\u6210\u3055\u308C\u308B",(0,c.jsx)(n.em,{children:"selectionName"}),"\u5185\u306E\u30EC\u30B3\u30FC\u30C9\u306E\u30EC\u30B3\u30FC\u30C9\u756A\u53F7\u3092\u8868\u308F\u3057\u307E\u3059\u3002\u30EC\u30B3\u30FC\u30C9\u756A\u53F7\u304C\u6B63\u3057\u304F\u306A\u3044 (\u4F5C\u6210\u3055\u308C\u3066\u3044\u306A\u3044\u30EC\u30B3\u30FC\u30C9) \u5834\u5408\u3001\u30A8\u30E9\u30FC-10503\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u6CE8\u610F:"})," \u914D\u5217\u306E\u4E2D\u306B\u306F\u3001\u540C\u3058\u30EC\u30B3\u30FC\u30C9\u756A\u53F7\u304C\u542B\u307E\u308C\u306A\u3044\u3088\u3046\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u305D\u3046\u3067\u306A\u3051\u308C\u3070\u3001\u7D50\u679C\u3068\u3057\u3066\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306F\u4E0D\u6B63\u78BA\u306A\u3082\u306E\u306B\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3067\u30D6\u30FC\u30EB\u914D\u5217\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u914D\u5217\u306EN\u756A\u76EE\u306E\u8981\u7D20\u306F\u30EC\u30B3\u30FC\u30C9\u756A\u53F7N\u304C",(0,c.jsx)(n.em,{children:"selectionName"}),"\u306B\u542B\u307E\u308C\u308B (",(0,c.jsx)(n.a,{href:"/docs/ja/commands/true",title:"True",children:"True"}),") \u304B\u542B\u307E\u308C\u306A\u3044\u304B (",(0,c.jsx)(n.a,{href:"/docs/ja/commands/false",title:"False",children:"False"}),") \u3092\u793A\u3057\u307E\u3059\u3002",(0,c.jsx)(n.em,{children:"recordArray"}),"\u306E\u8981\u7D20\u6570\u306F",(0,c.jsx)(n.em,{children:"aTable"}),"\u306E\u30EC\u30B3\u30FC\u30C9\u6570\u3068\u7B49\u3057\u304F\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u914D\u5217\u8981\u7D20\u6570\u304C\u30EC\u30B3\u30FC\u30C9\u6570\u3088\u308A\u3082\u5C11\u306A\u3044\u5834\u5408\u3001\u914D\u5217\u306B\u3088\u3063\u3066\u5B9A\u7FA9\u3055\u308C\u305F\u30EC\u30B3\u30FC\u30C9\u306E\u307F\u304C\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3068\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u6CE8\u610F:"})," \u30D6\u30FC\u30EB\u914D\u5217\u3067\u306F\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u914D\u5217\u8981\u7D200\u304B\u3089 (\u30C6\u30FC\u30D6\u30EB\u306E\u30EC\u30B3\u30FC\u30C9\u6570) -1\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u8B66\u544A:"})," \u30EC\u30B3\u30FC\u30C9\u304C\u524A\u9664\u3055\u308C\u3066\u305D\u306E\u5F8C\u518D\u5EA6\u4F5C\u6210\u3055\u308C\u305F\u5834\u5408\u306B\u306F\u3001\u30EC\u30B3\u30FC\u30C9\u756A\u53F7\u304C\u518D\u5229\u7528\u3055\u308C\u308B\u3053\u3068\u304C\u3042\u308B\u3068\u3044\u3046\u70B9\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044(",(0,c.jsx)(n.em,{children:"\u30EC\u30B3\u30FC\u30C9\u756A\u53F7\u306B\u3064\u3044\u3066"})," \u53C2\u7167)"]}),"\n",(0,c.jsx)(n.h4,{id:"\u30A8\u30E9\u30FC\u7BA1\u7406",children:"\u30A8\u30E9\u30FC\u7BA1\u7406"}),"\n",(0,c.jsxs)(n.p,{children:["\u30EC\u30B3\u30FC\u30C9\u756A\u53F7\u304C\u4E0D\u6B63 (\u30EC\u30B3\u30FC\u30C9\u304C\u307E\u3060\u4F5C\u6210\u3055\u308C\u3066\u3044\u306A\u3044) \u3060\u3063\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC-10503\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002\u3053\u306E\u30A8\u30E9\u30FC\u306F",(0,c.jsx)(n.a,{href:"/docs/ja/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"\u3067\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u305F\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3067\u3068\u3089\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,c.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/ja/commands/clear-named-selection",children:"CLEAR NAMED SELECTION"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ja/commands/copy-named-selection",children:"COPY NAMED SELECTION"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ja/commands/create-set-from-array",children:"CREATE SET FROM ARRAY"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ja/commands/longint-array-from-selection",children:"LONGINT ARRAY FROM SELECTION"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ja/commands/selection-to-array",children:"SELECTION TO ARRAY"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ja/commands/use-named-selection",children:"USE NAMED SELECTION"})]}),"\n",(0,c.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,c.jsx)(n.td,{children:"640"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,c.jsx)(n.td,{children:"\u2713"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,c.jsx)(n.td,{children:"error"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u5909\u66F4\u3059\u308B"}),(0,c.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return t}});var s=r(667294);let c={},d=s.createContext(c);function t(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);