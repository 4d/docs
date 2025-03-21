"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52686"],{199566:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>i,assets:()=>r,toc:()=>o,contentTitle:()=>l});var i=JSON.parse('{"id":"commands/use-entity-selection","title":"USE ENTITY SELECTION","description":"USE ENTITY SELECTION ( entitySelection : 4D.EntitySelection )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands/use-entity-selection.md","sourceDirName":"commands","slug":"/commands/use-entity-selection","permalink":"/docs/ja/20-R7/commands/use-entity-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fuse-entity-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"use-entity-selection","title":"USE ENTITY SELECTION","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Table fragmentation","permalink":"/docs/ja/20-R7/commands/table-fragmentation"},"next":{"title":"VERIFY CURRENT DATA FILE","permalink":"/docs/ja/20-R7/commands/verify-current-data-file"}}'),s=t("785893"),d=t("250065");let c={id:"use-entity-selection",title:"USE ENTITY SELECTION",displayed_sidebar:"docs"},l=void 0,r={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"USE ENTITY SELECTION"})," ( ",(0,s.jsx)(n.em,{children:"entitySelection"})," : 4D.EntitySelection )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"entitySelection"}),(0,s.jsx)(n.td,{children:"4D.EntitySelection"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"USE ENTITY SELECTION"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,s.jsx)(n.em,{children:"entitySelection"})," \u5F15\u6570\u306E\u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u306B\u5408\u81F4\u3059\u308B\u30C6\u30FC\u30D6\u30EB\u306E\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u3001\u6E21\u3057\u305F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u5185\u5BB9\u3067\u66F4\u65B0\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/ORDA/datastores",children:"\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2"})," \u306E\u5834\u5408\u306F\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30014D\u306E\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u304C ORDA\u30AF\u30A8\u30EA\u306E\u529B\u3092\u6D3B\u7528\u3059\u308B\u305F\u3081\u306E\u3082\u306E\u3067\u3059\u3002 \u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u4E0A\u306E\u7406\u7531\u306B\u3088\u308A\u3001\u30B7\u30F3\u30B0\u30EB\u30E6\u30FC\u30B6\u30FC\u306E 4D \u3068 4D Server \u3067\u306F\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F ",(0,s.jsx)(n.em,{children:"entitySelection"})," \u3092\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3068\u76F4\u7D50\u3057\u307E\u3059\u3002 \u305D\u306E\u305F\u3081\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306B\u53D7\u3051\u6E21\u3057\u305F ",(0,s.jsx)(n.em,{children:"entitySelection"})," \u3092\u305D\u306E\u5F8C\u306B\u518D\u5229\u7528\u3057\u305F\u308A\u5909\u66F4\u3057\u305F\u308A\u3059\u308B\u3053\u3068\u306F\u907F\u3051\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"USE ENTITY SELECTION"})," \u306E\u547C\u3073\u51FA\u3057\u5F8C\u3001\u66F4\u65B0\u3055\u308C\u305F(\u7A7A\u3067\u306A\u3044) \u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u6700\u521D\u306E\u30EC\u30B3\u30FC\u30C9\u304C\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3068\u306A\u308A\u307E\u3059\u304C\u3001\u305D\u308C\u306F\u30E1\u30E2\u30EA\u5185\u306B\u306F\u30ED\u30FC\u30C9\u3055\u308C\u307E\u305B\u3093\u3002 \u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u5024\u3092\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001",(0,s.jsx)(n.code,{children:"USE ENTITY SELECTION"})," \u30B3\u30DE\u30F3\u30C9\u306E\u5F8C\u306B ",(0,s.jsx)(n.code,{children:"LOAD RECORD"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u5024\u3092\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001",(0,s.jsx)(n.code,{children:"USE ENTITY SELECTION"})," \u30B3\u30DE\u30F3\u30C9\u306E\u5F8C\u306B ",(0,s.jsx)(n.code,{children:"LOAD RECORD"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]})}),"\n",(0,s.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $entitySel : cs.EmployeeSelection\n\n$entitySel:=ds.Employee.query("lastName = :1";"M@") // $entitySel \u306F Employee \u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u306B\u30EA\u30EC\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059\nREDUCE SELECTION([Employee];0)\nUSE ENTITY SELECTION($entitySel) // Employee \u30C6\u30FC\u30D6\u30EB\u306E\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u304C\u66F4\u65B0\u3055\u308C\u307E\u3059\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/commands/create-entity-selection",children:"Create entity selection"})}),"\n",(0,s.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,s.jsx)(n.td,{children:"1513"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3092\u5909\u66F4\u3059\u308B"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u5909\u66F4\u3059\u308B"}),(0,s.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return c}});var i=t(667294);let s={},d=i.createContext(s);function c(e){let n=i.useContext(d);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);