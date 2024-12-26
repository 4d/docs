"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49418"],{892436:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>l,default:()=>o,assets:()=>i,toc:()=>h,frontMatter:()=>c});var t=JSON.parse('{"id":"commands-legacy/set-plugin-access","title":"SET PLUGIN ACCESS","description":"SET PLUGIN ACCESS ( plugIn ; group )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-plugin-access.md","sourceDirName":"commands-legacy","slug":"/commands/set-plugin-access","permalink":"/docs/ja/commands/set-plugin-access","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-plugin-access.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-plugin-access","title":"SET PLUGIN ACCESS","slug":"/commands/set-plugin-access","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Set group properties","permalink":"/docs/ja/commands/set-group-properties"},"next":{"title":"SET USER ALIAS","permalink":"/docs/ja/commands/set-user-alias"}}'),d=s("785893"),r=s("250065");let c={id:"set-plugin-access",title:"SET PLUGIN ACCESS",slug:"/commands/set-plugin-access",displayed_sidebar:"docs"},l=void 0,i={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function j(n){let e={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"SET PLUGIN ACCESS"})," ( ",(0,d.jsx)(e.em,{children:"plugIn"})," ; ",(0,d.jsx)(e.em,{children:"group"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5F15\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"plugIn"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30D7\u30E9\u30B0\u30A4\u30F3\u756A\u53F7"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"group"}),(0,d.jsx)(e.td,{children:"Text"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30D7\u30E9\u30B0\u30A4\u30F3\u306B\u95A2\u9023\u3059\u308B\u30B0\u30EB\u2015\u30D7\u306E\u540D\u524D"})]})]})]}),"\n",(0,d.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsx)(e.p,{children:'SET PLUGIN ACCESS \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308C\u3070\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u4E0A\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u305F\u5404 "\u30B7\u30EA\u30A2\u30EB\u3055\u308C\u305F" \u30D7\u30E9\u30B0\u30A4\u30F3\u3092\u30D7\u30ED\u30B0\u30E9\u30E0\u3067\u8A2D\u5B9A\u3059\u308B\u74B0\u5883\u3092\u30E6\u30FC\u30B6\u30B0\u30EB\u30FC\u30D7\u306B\u63D0\u4F9B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002'}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"Note:"})," \u30B0\u30EB\u30FC\u30D7\u30A8\u30C7\u30A3\u30BF\u3092\u4F7F\u7528\u3057\u3066\u3001\u30C7\u30B6\u30A4\u30F3\u30E2\u30FC\u30C9\u3067\u64CD\u4F5C\u3092\u5B9F\u884C\u3059\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u5F15\u6570 ",(0,d.jsx)(e.em,{children:"plugIn"})," \u306B\u30E6\u30FC\u30B6\u306E\u30B0\u30EB\u30FC\u30D7\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u756A\u53F7\u3092\u6E21\u3057\u307E\u3059\u3002\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u30E9\u30A4\u30BB\u30F3\u30B9\u306B\u306F4D\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8Web\u3068SOAP\u30E9\u30A4\u30BB\u30F3\u30B9\u304C\u3042\u308A\u307E\u3059\u3002 ",(0,d.jsx)(e.em,{children:"Is License Available"})," \u30C6\u30FC\u30DE\u306B\u3042\u308B\u4EE5\u4E0B\u306E\u5B9A\u6570\u306E1\u3064\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{children:"\u5024"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"4D Client SOAP license"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"808465465"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"4D Client Web license"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"808465209"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"4D for OCI license"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"808465208"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"4D ODBC Pro license"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"808464946"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"4D View license"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"808465207"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"4D Write license"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"808464697"})]})]})]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"group"})," \u5F15\u6570\u306B\u306F\u3001\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u4F7F\u7528\u3092\u8A31\u53EF\u3055\u308C\u3066\u3044\u308B\u30E6\u30FC\u30B6\u304C\u5B58\u5728\u3057\u3066\u3044\u308B\u30B0\u30EB\u30FC\u30D7\u306E\u540D\u524D\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"Note:"})}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"1\u5EA6\u306B\u30D7\u30E9\u30B0\u30A4\u30F3\u3092\u4F7F\u7528\u3067\u304D\u308B\u306E\u306F\u30011\u3064\u306E\u30B0\u30EB\u30FC\u30D7\u3060\u3051\u3067\u3059\u3002\u4ED6\u306E\u30B0\u30EB\u30FC\u30D7\u304C\u30D7\u30E9\u30B0\u30A4\u30F3\u30A2\u30AF\u30BB\u30B9\u6A29\u3092\u6240\u6709\u3057\u3066\u3044\u308B\u5834\u5408\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3068\u3001\u305D\u306E\u30B0\u30EB\u30FC\u30D7\u306F\u305D\u306E\u6A29\u9650\u3092\u5931\u3044\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(e.li,{children:["\u4F7F\u7528\u3055\u308C\u305F\u30E9\u30A4\u30BB\u30F3\u30B9\u306F\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u9593\u3001",(0,d.jsx)(e.em,{children:"group"})," \u5F15\u6570\u3067\u6307\u5B9A\u3055\u308C\u305F\u30B0\u30EB\u30FC\u30D7\u5185\u306E4D \u30E6\u30FC\u30B6\u30FC\u30A2\u30AB\u30A6\u30F3\u30C8\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u307E\u3059\u3002\u3053\u308C\u306F\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u30B0\u30EB\u30FC\u30D7\u6240\u5C5E\u72B6\u6CC1\u304C\u5909\u308F\u3063\u3066\u3082\u3001",(0,d.jsx)(e.em,{children:"group"})," \u5F15\u6570\u306E\u30B0\u30EB\u30FC\u30D7\u304C\u30D7\u30E9\u30B0\u30A4\u30F3\u30A2\u30AF\u30BB\u30B9\u6A29\u3092\u5931\u3063\u3066\u3082\u5909\u308F\u308A\u307E\u305B\u3093\u3002"]}),"\n"]}),"\n",(0,d.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.a,{href:"/docs/ja/commands/get-plugin-access",children:"Get plugin access"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/commands/plugin-list",children:"PLUGIN LIST"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/commands/set-group-access",children:"SET GROUP ACCESS"})]}),"\n",(0,d.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(e.td,{children:"845"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function o(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(j,{...n})}):j(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return l},a:function(){return c}});var t=s(667294);let d={},r=t.createContext(d);function c(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:c(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);