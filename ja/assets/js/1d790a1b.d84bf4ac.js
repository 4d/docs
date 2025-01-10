"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80274"],{752624:function(n,e,r){r.r(e),r.d(e,{default:()=>x,frontMatter:()=>i,metadata:()=>d,assets:()=>l,toc:()=>h,contentTitle:()=>c});var d=JSON.parse('{"id":"commands-legacy/get-print-marker","title":"Get print marker","description":"Get print marker ( markNum ) : Integer","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-print-marker.md","sourceDirName":"commands-legacy","slug":"/commands/get-print-marker","permalink":"/docs/ja/commands/get-print-marker","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-print-marker.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-print-marker","title":"Get print marker","slug":"/commands/get-print-marker","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get current printer","permalink":"/docs/ja/commands/get-current-printer"},"next":{"title":"GET PRINT OPTION","permalink":"/docs/ja/commands/get-print-option"}}'),t=r("785893"),s=r("250065");let i={id:"get-print-marker",title:"Get print marker",slug:"/commands/get-print-marker",displayed_sidebar:"docs"},c=void 0,l={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function j(n){let e={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Get print marker"})," ( ",(0,t.jsx)(e.em,{children:"markNum"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5F15\u6570"}),(0,t.jsx)(e.th,{children:"\u578B"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"markNum"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u30DE\u30FC\u30AB\u756A\u53F7"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2190"}),(0,t.jsx)(e.td,{children:"\u30DE\u30FC\u30AB\u306E\u4F4D\u7F6E"})]})]})]}),"\n",(0,t.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsx)(e.p,{children:"Get print marker \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3001\u5370\u5237\u4E2D\u306B\u30DE\u30FC\u30AB\u306E\u73FE\u5728\u4F4D\u7F6E\u3092\u53D6\u5F97\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u6B21\u306E2\u3064\u306E\u72B6\u6CC1\u3067\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"/docs/ja/commands/print-selection",title:"PRINT SELECTION",children:"PRINT SELECTION"}),"\u304A\u3088\u3073",(0,t.jsx)(e.a,{href:"/docs/ja/commands/print-record",title:"PRINT RECORD",children:"PRINT RECORD"}),"\u30B3\u30DE\u30F3\u30C9\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3067\u306EOn Header\u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8\u4E2D\u3067\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"/docs/ja/commands/print-form",title:"Print form",children:"Print form"}),"\u30B3\u30DE\u30F3\u30C9\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3067\u306EOn Printing Detail\u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8\u4E2D\u3067\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u5EA7\u6A19\u306F\u30D4\u30AF\u30BB\u30EB\u5358\u4F4D\u3067\u8FD4\u3055\u308C\u307E\u3059 (1\u30D4\u30AF\u30BB\u30EB\uFF1D1/72\u30A4\u30F3\u30C1)\u3002"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"markNum"}),"\u5F15\u6570\u306B\u306F\u3001\u30C6\u30FC\u30DE\u5185\u306E\u5B9A\u6570\u306E\u3046\u3061\u306E\u3044\u305A\u308C\u304B\u3092\u6E21\u3057\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,t.jsx)(e.th,{children:"\u578B"}),(0,t.jsx)(e.th,{children:"\u5024"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form break0"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"300"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form break1"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"301"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form break2"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"302"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form break3"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"303"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form break4"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"304"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form break5"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"305"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form break6"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"306"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form break7"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"307"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form break8"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"308"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form break9"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"309"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form detail"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"0"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form footer"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"100"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form header"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"200"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form header1"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"201"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form header10"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"210"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form header2"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"202"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form header3"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"203"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form header4"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"204"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form header5"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"205"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form header6"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"206"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form header7"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"207"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form header8"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"208"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form header9"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"209"})]})]})]}),"\n",(0,t.jsx)(e.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"/docs/ja/commands/set-print-marker",title:"SET PRINT MARKER",children:"SET PRINT MARKER"}),"\u30B3\u30DE\u30F3\u30C9\u306E\u4F8B\u3092\u53C2\u7167"]}),"\n",(0,t.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"/docs/ja/commands/object-move",children:"OBJECT MOVE"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/ja/commands/set-print-marker",children:"SET PRINT MARKER"})]}),"\n",(0,t.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(e.td,{children:"708"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function x(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(j,{...n})}):j(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return c},a:function(){return i}});var d=r(667294);let t={},s=d.createContext(t);function i(n){let e=d.useContext(s);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),d.createElement(s.Provider,{value:e},n.children)}}}]);