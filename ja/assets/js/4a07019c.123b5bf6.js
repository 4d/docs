"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59710"],{298366:function(n,t,e){e.r(t),e.d(t,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/in-transaction","title":"In transaction","description":"In transaction  : Boolean","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/in-transaction.md","sourceDirName":"commands-legacy","slug":"/commands/in-transaction","permalink":"/docs/ja/commands/in-transaction","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fin-transaction.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"in-transaction","title":"In transaction","slug":"/commands/in-transaction","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CANCEL TRANSACTION","permalink":"/docs/ja/commands/cancel-transaction"},"next":{"title":"RESUME TRANSACTION","permalink":"/docs/ja/commands/resume-transaction"}}'),a=e("785893"),r=e("250065");let c={id:"in-transaction",title:"In transaction",slug:"/commands/in-transaction",displayed_sidebar:"docs"},i=void 0,d={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function l(n){let t={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"In transaction"}),"  : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"\u5F15\u6570"}),(0,a.jsx)(t.th,{children:"\u578B"}),(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{children:"\u8AAC\u660E"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"\u623B\u308A\u5024"}),(0,a.jsx)(t.td,{children:"Boolean"}),(0,a.jsx)(t.td,{children:"\u2190"}),(0,a.jsx)(t.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u304C\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u5185\u306B\u3042\u308B\u5834\u5408\u3001TRUE\u3092\u8FD4\u3057\u307E\u3059\u3002"})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,a.jsxs)(t.p,{children:["In transaction\u30B3\u30DE\u30F3\u30C9\u306F\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u304C\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u5185\u306B\u3042\u308B\u5834\u5408\u306B",(0,a.jsx)(t.a,{href:"/docs/ja/commands/true",title:"True",children:"True"}),"\u3092\u8FD4\u3057\u307E\u3059\u3002\u305D\u306E\u4ED6\u306E\u5834\u5408\u306F",(0,a.jsx)(t.a,{href:"/docs/ja/commands/false",title:"False",children:"False"}),"\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,a.jsx)(t.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,a.jsx)(t.p,{children:"\u8907\u6570\u306E\u30EC\u30B3\u30FC\u30C9\u306B\u5BFE\u3059\u308B\u64CD\u4F5C (\u30EC\u30B3\u30FC\u30C9\u8FFD\u52A0\u3001\u4FEE\u6B63\u3001\u307E\u305F\u306F\u524A\u9664) \u3092\u5B9F\u884C\u3059\u308B\u3068\u3001\u30ED\u30C3\u30AF\u3055\u308C\u305F\u30EC\u30B3\u30FC\u30C9\u306B\u51FA\u304F\u308F\u3059\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u306E\u3088\u3046\u306A\u5834\u5408\u3001\u30C7\u30FC\u30BF\u306E\u6574\u5408\u6027\u3092\u7DAD\u6301\u3059\u308B\u305F\u3081\u306B\u306F\u3001\u5931\u6557\u3057\u305F\u3068\u304D\u306B\u64CD\u4F5C\u5168\u4F53\u3092\u30ED\u30FC\u30EB\u30D0\u30C3\u30AF\u3057\u3066\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u5143\u306E\u72B6\u614B\u306B\u623B\u305B\u308B\u3088\u3046\u306B\u3001\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u306E\u4E2D\u3067\u635C\u67FB\u3092\u884C\u308F\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"}),"\n",(0,a.jsx)(t.p,{children:"\u30C8\u30EA\u30AC\u5185\u304B\u3089\u3001\u3042\u308B\u3044\u306F\u30B5\u30D6\u30EB\u30FC\u30C1\u30F3 (\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u306E\u4E2D\u3067\u3082\u3001\u5916\u3067\u3082\u547C\u3073\u51FA\u305B\u308B) \u304B\u3089\u64CD\u4F5C\u3092\u5B9F\u884C\u3059\u308B\u5834\u5408\u306B\u306F\u3001In transaction\u3092\u4F7F\u7528\u3057\u3066\u3001\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u306E\u30E1\u30BD\u30C3\u30C9\u307E\u305F\u306F\u547C\u3073\u51FA\u3057\u5074\u306E\u30E1\u30BD\u30C3\u30C9\u304C\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u3092\u958B\u59CB\u3057\u305F\u304B\u3069\u3046\u304B\u3092\u30C1\u30A7\u30C3\u30AF\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u304C\u958B\u59CB\u3055\u308C\u3066\u3044\u306A\u3051\u308C\u3070\u3001\u64CD\u4F5C\u3092\u958B\u59CB\u3057\u3066\u306F\u3044\u3051\u307E\u305B\u3093\u3002\u305D\u3046\u3067\u306A\u3051\u308C\u3070\u5931\u6557\u3057\u305F\u5834\u5408\u306B\u3001\u64CD\u4F5C\u3092\u30ED\u30FC\u30EB\u30D0\u30C3\u30AF\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u306A\u304F\u306A\u3063\u3066\u3057\u307E\u3044\u307E\u3059\u3002"}),"\n",(0,a.jsx)(t.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/docs/ja/commands/active-transaction",children:"Active transaction"}),(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.a,{href:"/docs/ja/commands/cancel-transaction",children:"CANCEL TRANSACTION"}),(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.a,{href:"/docs/ja/commands/start-transaction",children:"START TRANSACTION"}),(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.a,{href:"/docs/ja/commands/validate-transaction",children:"VALIDATE TRANSACTION"}),(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.em,{children:"\u30C8\u30EA\u30AC"})]}),"\n",(0,a.jsx)(t.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,a.jsx)(t.td,{children:"397"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,a.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function h(n={}){let{wrapper:t}={...(0,r.a)(),...n.components};return t?(0,a.jsx)(t,{...n,children:(0,a.jsx)(l,{...n})}):l(n)}},250065:function(n,t,e){e.d(t,{Z:function(){return i},a:function(){return c}});var s=e(667294);let a={},r=s.createContext(a);function c(n){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(t):{...t,...n}},[t,n])}function i(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:c(n.components),s.createElement(r.Provider,{value:t},n.children)}}}]);