"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["23969"],{371275:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>l,toc:()=>i,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/create-set-from-array","title":"CREATE SET FROM ARRAY","description":"CREATE SET FROM ARRAY ( aTable ; recordsArray {; setName} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/create-set-from-array.md","sourceDirName":"commands-legacy","slug":"/commands/create-set-from-array","permalink":"/docs/ja/commands/create-set-from-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-set-from-array.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"create-set-from-array","title":"CREATE SET FROM ARRAY","slug":"/commands/create-set-from-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE SET","permalink":"/docs/ja/commands/create-set"},"next":{"title":"DIFFERENCE","permalink":"/docs/ja/commands/difference"}}'),t=r("785893"),d=r("250065");let c={id:"create-set-from-array",title:"CREATE SET FROM ARRAY",slug:"/commands/create-set-from-array",displayed_sidebar:"docs"},a=void 0,l={},i=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u30A8\u30E9\u30FC\u7BA1\u7406",id:"\u30A8\u30E9\u30FC\u7BA1\u7406",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"CREATE SET FROM ARRAY"})," ( ",(0,t.jsx)(n.em,{children:"aTable"})," ; ",(0,t.jsx)(n.em,{children:"recordsArray"})," {; ",(0,t.jsx)(n.em,{children:"setName"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5F15\u6570"}),(0,t.jsx)(n.th,{children:"\u578B"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"aTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u30BB\u30C3\u30C8\u306E\u30C6\u30FC\u30D6\u30EB"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"recordsArray"}),(0,t.jsx)(n.td,{children:"Integer, Boolean array"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u30EC\u30B3\u30FC\u30C9\u756A\u53F7\u914D\u5217\u3001\u307E\u305F\u306F \u30D6\u30FC\u30EB\u914D\u5217 (True = \u30EC\u30B3\u30FC\u30C9\u306F\u30BB\u30C3\u30C8\u306B\u542B\u307E\u308C\u308B, False = \u30EC\u30B3\u30FC\u30C9\u306F\u30BB\u30C3\u30C8\u306B\u542B\u307E\u308C\u306A\u3044)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"setName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u4F5C\u6210\u3059\u308B\u30BB\u30C3\u30C8\u306E\u540D\u524D, \u307E\u305F\u306F \u7701\u7565\u6642\u3001UserSet\u306B\u9069\u7528\u3059\u308B"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(n.p,{children:["CREATE SET FROM ARRAY \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30BB\u30C3\u30C8",(0,t.jsx)(n.em,{children:"setName"}),"\u3092\u4E0B\u8A18\u306E\u60C5\u5831\u304B\u3089\u4F5C\u6210\u3057\u307E\u3059:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"aTable"}),"\u30C6\u30FC\u30D6\u30EB\u306E\u7D76\u5BFE\u30EC\u30B3\u30FC\u30C9\u756A\u53F7\u306E\u914D\u5217",(0,t.jsx)(n.em,{children:"recordsArray"})]}),"\n",(0,t.jsxs)(n.li,{children:["\u30D6\u30FC\u30EB\u914D\u5217",(0,t.jsx)(n.em,{children:"recordsArray"}),"\u3002\u3053\u306E\u5834\u5408\u3001\u914D\u5217\u306E\u5024\u306F\u305D\u308C\u305E\u308C\u306E\u30EC\u30B3\u30FC\u30C9\u304C",(0,t.jsx)(n.em,{children:"setName"}),"\u306B\u5C5E\u3059\u308B (",(0,t.jsx)(n.a,{href:"/docs/ja/commands/true",title:"True",children:"True"}),") \u304B\u5C5E\u3055\u306A\u3044\u304B (",(0,t.jsx)(n.a,{href:"/docs/ja/commands/false",title:"False",children:"False"}),") \u3092\u8868\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u969B\u3001",(0,t.jsx)(n.em,{children:"recordsArray"}),"\u306B\u500D\u9577\u6574\u6570\u914D\u5217\u3092\u6E21\u3059\u3068\u3001\u914D\u5217\u4E2D\u306E\u3059\u3079\u3066\u306E\u6570\u5024\u306F",(0,t.jsx)(n.em,{children:"setName"}),"\u306B\u683C\u7D0D\u3055\u308C\u308B\u30EC\u30B3\u30FC\u30C9\u306E\u30EC\u30B3\u30FC\u30C9\u756A\u53F7\u3092\u8868\u3057\u307E\u3059\u3002\u756A\u53F7\u304C\u7121\u52B9\u306E\u5834\u5408 (\u4F8B\u3048\u3070\u30EC\u30B3\u30FC\u30C9\u304C\u4F5C\u6210\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408)\u3001\u30A8\u30E9\u30FC-10503\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u969B\u3001",(0,t.jsx)(n.em,{children:"recordsArray"}),"\u306B\u30D6\u30FC\u30EB\u914D\u5217\u3092\u6E21\u3059\u3068\u3001\u914D\u5217\u306EN\u756A\u76EE\u306E\u8981\u7D20\u306F\u3001",(0,t.jsx)(n.em,{children:"setName"}),"\u306BN\u756A\u76EE\u306E\u30EC\u30B3\u30FC\u30C9\u304C\u542B\u307E\u308C\u308B\u304B (",(0,t.jsx)(n.a,{href:"/docs/ja/commands/true",title:"True",children:"True"}),") \u542B\u307E\u308C\u306A\u3044\u304B (",(0,t.jsx)(n.a,{href:"/docs/ja/commands/false",title:"False",children:"False"}),") \u3092\u8868\u3057\u307E\u3059\u3002\u901A\u5E38\u914D\u5217\u306E\u8981\u7D20\u6570\u306F\u30C6\u30FC\u30D6\u30EB\u306E\u30EC\u30B3\u30FC\u30C9\u6570\u3068\u4E00\u81F4\u3057\u306A\u304F\u3066\u306F\u306A\u308A\u307E\u305B\u3093\u3002\u914D\u5217\u8981\u7D20\u6570\u304C\u30EC\u30B3\u30FC\u30C9\u6570\u3088\u308A\u5C11\u306A\u3044\u5834\u5408\u3001\u914D\u5217\u306B\u3088\u308A\u5B9A\u7FA9\u3055\u308C\u305F\u30EC\u30B3\u30FC\u30C9\u306E\u307F\u304C\u30BB\u30C3\u30C8\u306B\u683C\u7D0D\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," \u30D6\u30FC\u30EB\u914D\u5217\u3067\u306F0\u304B\u3089N-1\u307E\u3067\u306E\u8981\u7D20\u304C\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306B\u3088\u308A\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"setName"})," \u5F15\u6570\u3092\u6E21\u3055\u306A\u3044\u304B\u7A7A\u306E\u6587\u5B57\u5217\u3092\u6E21\u3059\u3068\u3001\u30B3\u30DE\u30F3\u30C9\u306F",(0,t.jsx)(n.strong,{children:"Userset"}),"\u30B7\u30B9\u30C6\u30E0\u30BB\u30C3\u30C8\u306B\u9069\u7528\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"\u30A8\u30E9\u30FC\u7BA1\u7406",children:"\u30A8\u30E9\u30FC\u7BA1\u7406"}),"\n",(0,t.jsx)(n.p,{children:"\u500D\u9577\u6574\u6570\u914D\u5217\u3092\u6E21\u3057\u305F\u5834\u5408\u3067\u3001\u30EC\u30B3\u30FC\u30C9\u756A\u53F7\u304C\u7121\u52B9 (\u30EC\u30B3\u30FC\u30C9\u304C\u4F5C\u6210\u3055\u308C\u3066\u3044\u306A\u3044) \u306E\u3068\u304D\u3001\u30A8\u30E9\u30FC-10503\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/commands/boolean-array-from-set",children:"BOOLEAN ARRAY FROM SET"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/commands/create-selection-from-array",children:"CREATE SELECTION FROM ARRAY"})]}),"\n",(0,t.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(n.td,{children:"641"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,t.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return c}});var s=r(667294);let t={},d=s.createContext(t);function c(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);