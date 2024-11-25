"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34773"],{394519:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>i});var t=JSON.parse('{"id":"commands-legacy/get-relation-properties","title":"GET RELATION PROPERTIES","description":"GET RELATION PROPERTIES ( fieldPtr|tableNum {; fieldNum}; oneTable ; oneField {; choiceField {; autoOne {; autoMany}}} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-relation-properties.md","sourceDirName":"commands-legacy","slug":"/commands/get-relation-properties","permalink":"/docs/ja/commands/get-relation-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-relation-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-relation-properties","title":"GET RELATION PROPERTIES","slug":"/commands/get-relation-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET MISSING TABLE NAMES","permalink":"/docs/ja/commands/get-missing-table-names"},"next":{"title":"GET TABLE PROPERTIES","permalink":"/docs/ja/commands/get-table-properties"}}'),r=s("785893"),d=s("250065");let i={id:"get-relation-properties",title:"GET RELATION PROPERTIES",slug:"/commands/get-relation-properties",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"GET RELATION PROPERTIES"})," ( fieldPtr|tableNum {; ",(0,r.jsx)(n.em,{children:"fieldNum"}),"}; ",(0,r.jsx)(n.em,{children:"oneTable"})," ; ",(0,r.jsx)(n.em,{children:"oneField"})," {; ",(0,r.jsx)(n.em,{children:"choiceField"})," {; ",(0,r.jsx)(n.em,{children:"autoOne"})," {; ",(0,r.jsx)(n.em,{children:"autoMany"}),"}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fieldPtr|tableNum"}),(0,r.jsx)(n.td,{children:"\u30DD\u30A4\u30F3\u30BF\u30FC, \u500D\u9577\u6574\u6570"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u30D5\u30A3\u30FC\u30EB\u30C9\u30DD\u30A4\u30F3\u30BF\u3001\u307E\u305F\u306F\u30C6\u30FC\u30D6\u30EB\u756A\u53F7"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fieldNum"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u7B2C\u4E00\u5F15\u6570\u304C\u30C6\u30FC\u30D6\u30EB\u756A\u53F7\u306E\u5834\u5408\u3001 \u30D5\u30A3\u30FC\u30EB\u30C9\u756A\u53F7"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"oneTable"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"1\u30C6\u30FC\u30D6\u30EB\u306E\u30C6\u30FC\u30D6\u30EB\u756A\u53F7\u3001\u307E\u305F\u306F \u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u304C\u672A\u5B9A\u7FA9\u306E\u5834\u5408\u306F0\uFF08\u30BC\u30ED\uFF09"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"oneField"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"1\u30D5\u30A3\u30FC\u30EB\u30C9\u756A\u53F7\u3001\u307E\u305F\u306F \u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u304C\u672A\u5B9A\u7FA9\u306E\u5834\u5408\u306F0\uFF08\u30BC\u30ED\uFF09"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"choiceField"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"\u9078\u629E\u30D5\u30A3\u30FC\u30EB\u30C9\u756A\u53F7\u3001\u307E\u305F\u306F\u9078\u629E\u30D5\u30A3\u30FC\u30EB\u30C9\u304C\u672A\u5B9A\u7FA9\u306E\u5834\u5408\u306F0\uFF08\u30BC\u30ED\uFF09"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"autoOne"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"True = \u81EA\u52D51\u5BFE1\u30EA\u30EC\u30FC\u30C8 False = 1\u5BFE1\u30DE\u30CB\u30E5\u30A2\u30EB\u30EA\u30EC\u30FC\u30C8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"autoMany"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"True = \u81EA\u52D51\u5BFEn\u30EA\u30EC\u30FC\u30C8 False = 1\u5BFEn\u30DE\u30CB\u30E5\u30A2\u30EB\u30EA\u30EC\u30FC\u30C8"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:["GET RELATION PROPERTIES\u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,r.jsx)(n.em,{children:"tableNum"}),"\u304A\u3088\u3073",(0,r.jsx)(n.em,{children:"fieldNum"}),"\u3001\u307E\u305F\u306F",(0,r.jsx)(n.em,{children:"fieldPtr"}),"\u3067\u6307\u5B9A\u3057\u305F\u5143\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u8D77\u70B9\u3068\u3059\u308B\u30EA\u30EC\u30FC\u30C8\uFF08\u5B58\u5728\u3059\u308B\u5834\u5408\uFF09\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u6B21\u306E\u3044\u305A\u308C\u304B\u306E\u5F15\u6570\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"tableNum"}),"\u304A\u3088\u3073",(0,r.jsx)(n.em,{children:"fieldNum"}),"\u306B\u5BFE\u3057\u3001\u30C6\u30FC\u30D6\u30EB\u3068\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u6307\u5B9A"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"fieldPtr"}),"\u306B\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u30DD\u30A4\u30F3\u30BF\u3092\u6307\u5B9A"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u304C\u5B9F\u884C\u3055\u308C\u308B\u3068"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5F15\u6570",(0,r.jsx)(n.em,{children:"oneTable"}),"\u304A\u3088\u3073",(0,r.jsx)(n.em,{children:"oneField"}),"\u306B\u306F\u305D\u308C\u305E\u308C\u3001\u8D77\u70B9\u30D5\u30A3\u30FC\u30EB\u30C9\u304B\u3089\u306E\u30EA\u30EC\u30FC\u30C8\u304C\u6307\u3057\u793A\u3059\u30C6\u30FC\u30D6\u30EB\u756A\u53F7\u304A\u3088\u3073\u30D5\u30A3\u30FC\u30EB\u30C9\u756A\u53F7\u304C\u7D0D\u3081\u3089\u308C\u307E\u3059\u3002\u3053\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u8D77\u70B9\u3068\u3059\u308B\u30EA\u30EC\u30FC\u30C8\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001\u3053\u308C\u3089\u306E\u5F15\u6570\u306B\u306F0\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5F15\u6570",(0,r.jsx)(n.em,{children:"choicefield"}),"\u306B\u306F\u3001\u3053\u306E\u30EA\u30EC\u30FC\u30C8\u3067\u5B9A\u7FA9\u3055\u308C\u305F\u30BF\u30FC\u30B2\u30C3\u30C8\u30C6\u30FC\u30D6\u30EB\u306E\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u9078\u629E\u30D5\u30A3\u30FC\u30EB\u30C9\u756A\u53F7\u304C\u7D0D\u3081\u3089\u308C\u307E\u3059\u3002\u3053\u306E\u30EA\u30EC\u30FC\u30C8\u306B\u5BFE\u3057\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u9078\u629E\u30D5\u30A3\u30FC\u30EB\u30C9\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u307E\u305F\u306F\u8D77\u70B9\u30D5\u30A3\u30FC\u30EB\u30C9\u304B\u3089\u306E\u30EA\u30EC\u30FC\u30C8\u304C\u306A\u3044\u5834\u5408\u3001\u3053\u306E\u5F15\u6570\u306B\u306F0\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5F15\u6570",(0,r.jsx)(n.em,{children:"autoOne"}),"\u304A\u3088\u3073",(0,r.jsx)(n.em,{children:"autoMany"}),"\u306B\u306F\u305D\u308C\u305E\u308C\u3001\u3053\u306E\u30EA\u30EC\u30FC\u30C8\u306B\u5BFE\u3057\u300C\u81EA\u52D51\u5BFE1\u30EA\u30EC\u30FC\u30C8\u300D\u304A\u3088\u3073\u300C\u81EA\u52D51\u5BFEn\u30EA\u30EC\u30FC\u30C8\u300D\u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9\u304C\u30C1\u30A7\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306B",(0,r.jsx)(n.a,{href:"/docs/ja/commands/true",title:"True",children:"True"}),"\u304C\u3001\u305D\u3046\u3067\u306A\u3044\u5834\u5408\u306B\u306F",(0,r.jsx)(n.a,{href:"/docs/ja/commands/false",title:"False",children:"False"}),"\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," \u5F15\u6570",(0,r.jsx)(n.em,{children:"autoOne"}),"\u304A\u3088\u3073",(0,r.jsx)(n.em,{children:"autoMany"}),"\u306F\u3001\u8D77\u70B9\u30D5\u30A3\u30FC\u30EB\u30C9\u304B\u3089\u59CB\u307E\u308B\u30EA\u30EC\u30FC\u30C8\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u306B\u3082",(0,r.jsx)(n.a,{href:"/docs/ja/commands/true",title:"True",children:"True"}),"\u3092\u8FD4\u3057\u307E\u3059\u3002\uFF08\u3053\u306E\u5834\u5408\u3001\u8FD4\u3059\u5024\u306B\u306F\u610F\u5473\u304C\u3042\u308A\u307E\u305B\u3093\uFF09\u30022\u3064\u306E\u5F15\u6570",(0,r.jsx)(n.em,{children:"oneTable"}),"\u304A\u3088\u3073",(0,r.jsx)(n.em,{children:"oneField"}),"\u306E\u5024\u306B\u3088\u308A\u3001\u30EA\u30EC\u30FC\u30C8\u304C\u5B58\u5728\u3059\u308B\u304B\u3069\u3046\u304B\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/get-field-entry-properties",children:"GET FIELD ENTRY PROPERTIES"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/get-field-properties",children:"GET FIELD PROPERTIES"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/get-table-properties",children:"GET TABLE PROPERTIES"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/set-field-relation",children:"SET FIELD RELATION"})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var t=s(667294);let r={},d=t.createContext(r);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);