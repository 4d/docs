"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95306"],{997516:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>r,metadata:()=>d,assets:()=>i,toc:()=>o,contentTitle:()=>c});var d=JSON.parse('{"id":"commands-legacy/round","title":"Round","description":"Round ( round ; places ) : Real","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/round.md","sourceDirName":"commands-legacy","slug":"/commands/round","permalink":"/docs/ja/20-R7/commands/round","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fround.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"round","title":"Round","slug":"/commands/round","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Random","permalink":"/docs/ja/20-R7/commands/random"},"next":{"title":"SET REAL COMPARISON LEVEL","permalink":"/docs/ja/20-R7/commands/set-real-comparison-level"}}'),t=s("785893"),l=s("250065");let r={id:"round",title:"Round",slug:"/commands/round",displayed_sidebar:"docs"},c=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(n){let e={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Round"})," ( ",(0,t.jsx)(e.em,{children:"round"})," ; ",(0,t.jsx)(e.em,{children:"places"})," ) : Real"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5F15\u6570"}),(0,t.jsx)(e.th,{children:"\u578B"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"round"}),(0,t.jsx)(e.td,{children:"Real"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u4E38\u3081\u308B\u6570\u5024"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"places"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u4E38\u3081\u308B\u5C0F\u6570\u90E8\u306E\u4F4D\u7F6E"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,t.jsx)(e.td,{children:"Real"}),(0,t.jsx)(e.td,{children:"\u2190"}),(0,t.jsx)(e.td,{children:"places\u3067\u6307\u5B9A\u3055\u308C\u305F\u5834\u6240\u3067 \u4E38\u3081\u3089\u308C\u305F\u6570\u5024"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(e.p,{children:["Round \u306F\u3001\u6307\u5B9A\u3055\u308C\u305F",(0,t.jsx)(e.em,{children:"places"}),"\u4F4D\u7F6E\u3067\u6570\u5024\u3092\u56DB\u6368\u4E94\u5165\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"places"}),"\u304C\u6B63\u306E\u6570\u306E\u5834\u5408\u3001Round\u306E\u5C0F\u6570\u90E8\u3092\u4E38\u3081\u3001",(0,t.jsx)(e.em,{children:"places"}),"\u304C\u8CA0\u306E\u5834\u5408\u306B\u306F\u3001\u6574\u6570\u90E8\uFF08\u5C0F\u6570\u70B9\u3088\u308A\u5DE6\u5074\uFF09\u3092\u4E38\u3081\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"places"}),"\u3067\u6307\u5B9A\u3057\u305F\u6841\u4F4D\u7F6E\u306B\u7D9A\u304F\u6570\u5B57\u304C5\u304B\u30899\u306E\u5834\u5408\u3001Round\u304C\u6B63\u306E\u3068\u304D\u306F\u5207\u308A\u4E0A\u3052\u3092\u3001\u8CA0\u306E\u5834\u5408\u8CA0\u306E\u5927\u304D\u306A\u5024\u306B\u4E38\u3081\u307E\u3059\u3002",(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.em,{children:"places"}),"\u3067\u6307\u5B9A\u3057\u305F\u6841\u4F4D\u7F6E\u306B\u7D9A\u304F\u6570\u5B57\u304C0\u304B\u30894\u306E\u5834\u5408\u3001Round\u306F0\u306B\u4E38\u3081\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsxs)(e.p,{children:["\u4E0B\u8A18\u306F\u3001\u3055\u307E\u3056\u307E\u306A\u5F15\u6570\u3092\u4F7F\u7528\u3057\u3066Round\u306E\u6A5F\u80FD\u3092\u793A\u3057\u307E\u3059\u3002\u7D50\u679C\u3092",(0,t.jsx)(e.em,{children:"vlResult"}),"\u306B\u4EE3\u5165\u3057\u307E\u3059\u3002\u30B3\u30E1\u30F3\u30C8\u306F\u3001\u5909\u6570",(0,t.jsx)(e.em,{children:"vlResult"}),"\u306B\u4EE3\u5165\u3055\u308C\u308B\u5024\u306B\u3064\u3044\u3066\u306E\u8AAC\u660E\u3067\u3059:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-4d",children:"\xa0vlResult:=Round(16.857;2)\xa0// vlResult gets 16.86\n\xa0vlResult:=Round(32345.67;-3)\xa0// vlResult gets 32000\n\xa0vlResult:=Round(29.8725;3)\xa0// vlResult gets 29.873\n\xa0vlResult:=Round(-1.5;0)\xa0// vlResult gets -2\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"/docs/ja/20-R7/commands/trunc",children:"Trunc"})}),"\n",(0,t.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(e.td,{children:"94"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function u(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return r}});var d=s(667294);let t={},l=d.createContext(t);function r(n){let e=d.useContext(l);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),d.createElement(l.Provider,{value:e},n.children)}}}]);