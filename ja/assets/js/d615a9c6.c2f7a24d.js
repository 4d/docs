"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["45582"],{919244:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>l,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>i});var t=JSON.parse('{"id":"commands-legacy/set-field-relation","title":"SET FIELD RELATION","description":"SET FIELD RELATION ( manyTable | manyField ; one ; many )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-field-relation.md","sourceDirName":"commands-legacy","slug":"/commands/set-field-relation","permalink":"/docs/ja/commands/set-field-relation","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-field-relation.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-field-relation","title":"SET FIELD RELATION","slug":"/commands/set-field-relation","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET AUTOMATIC RELATIONS","permalink":"/docs/ja/commands/set-automatic-relations"},"next":{"title":"Resources","permalink":"/docs/ja/category/resources"}}'),d=s("785893"),r=s("250065");let i={id:"set-field-relation",title:"SET FIELD RELATION",slug:"/commands/set-field-relation",displayed_sidebar:"docs"},l=void 0,c={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(n){let e={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"SET FIELD RELATION"})," ( manyTable | manyField ; ",(0,d.jsx)(e.em,{children:"one"})," ; ",(0,d.jsx)(e.em,{children:"many"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5F15\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"manyTable | manyField"}),(0,d.jsx)(e.td,{children:"\u30C6\u30FC\u30D6\u30EB, \u30D5\u30A3\u30FC\u30EB\u30C9"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u958B\u59CB\u30C6\u30FC\u30D6\u30EB, \u307E\u305F\u306F \u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u958B\u59CB\u30D5\u30A3\u30FC\u30EB\u30C9"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"one"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30C6\u30FC\u30D6\u30EB\u307E\u305F\u306F\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u958B\u59CB\u70B9\u3068\u3059\u308B n\u5BFE1\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u72B6\u614B"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"many"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30C6\u30FC\u30D6\u30EB\u307E\u305F\u306F\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u958B\u59CB\u70B9\u3068\u3059\u308B 1\u5BFEn\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u72B6\u614B"})]})]})]}),"\n",(0,d.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"SET FIELD RELATION"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30C7\u30B6\u30A4\u30F3\u30E2\u30FC\u30C9\u306E\u30EA\u30EC\u30FC\u30C8\u30D7\u30ED\u30D1\u30C6\u30A3\u30A6\u30A3\u30F3\u30C9\u30A6\u3067\u8A2D\u5B9A\u3057\u305F\u521D\u671F\u72B6\u614B\u304C\u4F55\u3067\u3042\u308C\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5404\u30EA\u30EC\u30FC\u30C8\u306E\u81EA\u52D5/\u30DE\u30CB\u30E5\u30A2\u30EB\u306E\u72B6\u614B\u3092\u500B\u5225\u306B\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.p,{children:"1\u756A\u76EE\u306E\u5F15\u6570\u306B\u306F\u3001\u30C6\u30FC\u30D6\u30EB\u3084\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u540D\u524D\u3092\u6E21\u3057\u307E\u3059:"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\u30D5\u30A3\u30FC\u30EB\u30C9\u540D (",(0,d.jsx)(e.em,{children:"manyField"}),") \u3092\u6E21\u3059\u3068\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u6307\u5B9A\u3057\u305Fn\u30D5\u30A3\u30FC\u30EB\u30C9\u304B\u3089\u958B\u59CB\u3059\u308B\u30EA\u30EC\u30FC\u30C8\u306B\u5BFE\u3057\u3066\u306E\u307F\u9069\u7528\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:["\u30C6\u30FC\u30D6\u30EB\u540D (",(0,d.jsx)(e.em,{children:"manyTable"}),") \u3092\u6E21\u3059\u3068\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u6307\u5B9A\u3057\u305Fn\u30C6\u30FC\u30D6\u30EB\u304B\u3089\u958B\u59CB\u3059\u308B\u30EA\u30EC\u30FC\u30C8\u306B\u5BFE\u3057\u3066\u306E\u307F\u9069\u7528\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.em,{children:"manyField"}),"\u307E\u305F\u306F",(0,d.jsx)(e.em,{children:"manyTable"}),"\u304B\u3089\u958B\u59CB\u3059\u308B\u30EA\u30EC\u30FC\u30C8\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u30A8\u30E9\u30FC16\uFF08\u201C\u3053\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u306F\u30EA\u30EC\u30FC\u30C8\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002\u201D\uFF09\u304C\u751F\u6210\u3055\u308C\u3001\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B\u306F0\u304C\u4EE3\u5165\u3055\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:["\u5F15\u6570",(0,d.jsx)(e.em,{children:"one"}),"\u3068",(0,d.jsx)(e.em,{children:"many"}),'\u306B\u306F\u3001\u6307\u5B9A\u3057\u305F1\u5BFEn\u30EA\u30EC\u30FC\u30C8\u3084n\u5BFE1\u30EA\u30EC\u30FC\u30C8\u306B\u9069\u7528\u3055\u308C\u308B\u81EA\u52D5/\u30DE\u30CB\u30E5\u30A2\u30EB\u306E\u72B6\u614B\u3092\u793A\u3059\u5024\u3092\u6E21\u3057\u307E\u3059\u3002\u3053\u306E\u5024\u3068\u3057\u3066\u3001"',(0,d.jsx)(e.em,{children:"Relations"}),'"\u30C6\u30FC\u30DE\u306E\u5B9A\u6570\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{children:"\u5024"}),(0,d.jsx)(e.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Automatic"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"3"}),(0,d.jsx)(e.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u306B\u5BFE\u3057\u3001\u30EA\u30EC\u30FC\u30C8\u3092\u81EA\u52D5\u306B\u8A2D\u5B9A\u3059\u308B\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Do not modify"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"0"}),(0,d.jsx)(e.td,{children:"\u30EA\u30EC\u30FC\u30C8\u306E\u73FE\u5728\u306E\u30B9\u30C6\u30FC\u30BF\u30B9\u3092\u5909\u66F4\u3057\u306A\u3044\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Manual"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"2"}),(0,d.jsx)(e.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u306B\u5BFE\u3057\u3001\u30EA\u30EC\u30FC\u30C8\u3092\u30DE\u30CB\u30E5\u30A2\u30EB\u306B\u8A2D\u5B9A\u3059\u308B\u3002"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Structure configuration"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"1"}),(0,d.jsx)(e.td,{children:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30A6\u30A4\u30F3\u30C9\u30A6\u3067\u6307\u5B9A\u3055\u308C\u305F\u30EA\u30EC\u30FC\u30C8\u306E\u8A2D\u5B9A\u3092\u4F7F\u7528\u3059\u308B\u3002"})]})]})]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"Note:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u884C\u3063\u305F\u5909\u66F4\u306F\u3001\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u306B\u5BFE\u3057\u3066\u306E\u307F\u9069\u7528\u3055\u308C\u307E\u3059\u3002\u30EA\u30EC\u30FC\u30C8\u30D7\u30ED\u30D1\u30C6\u30A3\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u7528\u3044\u3066\u6307\u5B9A\u3055\u308C\u305F\u30EA\u30EC\u30FC\u30C8\u8A2D\u5B9A\u306F\u5909\u66F4\u3055\u308C\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"Note:"})," ",(0,d.jsx)(e.a,{href:"/docs/ja/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"}),"\u30B3\u30DE\u30F3\u30C9\u306B\u5BFE\u3057\u3066",(0,d.jsx)(e.a,{href:"/docs/ja/commands/true",title:"True",children:"True"})," \u3092\u540C\u3058\u30BB\u30C3\u30B7\u30E7\u30F3\u4E2D\u306B\u6E21\u3057\u305F\u3068\u304D\u3001",(0,d.jsx)(e.strong,{children:"SET FIELD RELATION"}),"\u3078\u306E\u547C\u3073\u51FA\u3057\u306F\u3001\u305D\u308C\u304C",(0,d.jsx)(e.a,{href:"/docs/ja/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"}),"\u306E\u524D\u306B\u3042\u308D\u3046\u3068\u5F8C\u308D\u306B\u3042\u308D\u3046\u3068\u7121\u8996\u3055\u308C\u307E\u3059\u3002\u81EA\u52D5\u30E2\u30FC\u30C9\u3092\u30ED\u30C3\u30AF\u3057\u3066",(0,d.jsx)(e.strong,{children:"SET FIELD RELATION"}),"\u3078\u306E\u547C\u3073\u51FA\u3057\u3092\u6709\u52B9\u5316\u3059\u308B\u305F\u3081\u306B\u306F\u3001",(0,d.jsx)(e.a,{href:"/docs/ja/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"}),"\u306B",(0,d.jsx)(e.a,{href:"/docs/ja/commands/false",title:"False",children:"False"})," \u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsx)(e.p,{children:"\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3068\u3001\u30AF\u30A4\u30C3\u30AF\u30EC\u30DD\u30FC\u30C8\u30A8\u30C7\u30A3\u30BF\u30FC\u5185\u306B\u304A\u3044\u3066\u3001\u6709\u7528\u306A\u30EA\u30EC\u30FC\u30C8\u3060\u3051\u3092\u81EA\u52D5\u306B\u8A2D\u5B9A\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"\xa0SET AUTOMATIC RELATIONS(False;False)\xa0// \u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u30EA\u30BB\u30C3\u30C8\n\xa0\xa0//\u4EE5\u4E0B\u306E\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u307F\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\n\xa0SET FIELD RELATION([Invoices]Cust_IDt;Automatic;Automatic)\n\xa0SET FIELD RELATION([Invoice_Row]Invoice_ID;Automatic;Automatic)\n\xa0QR REPORT([Invoices];Char(1))\n"})}),"\n",(0,d.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.a,{href:"/docs/ja/commands/get-automatic-relations",children:"GET AUTOMATIC RELATIONS"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/commands/get-field-relation",children:"GET FIELD RELATION"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/commands/get-relation-properties",children:"GET RELATION PROPERTIES"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"})]}),"\n",(0,d.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(e.td,{children:"919"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(e.td,{children:"\u2713"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,d.jsx)(e.td,{children:"OK"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return l},a:function(){return i}});var t=s(667294);let d={},r=t.createContext(d);function i(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);