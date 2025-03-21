"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90233"],{209854:function(n,t,e){e.r(t),e.d(t,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>i,toc:()=>o,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/start-transaction","title":"START TRANSACTION","description":"START TRANSACTION","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/start-transaction.md","sourceDirName":"commands-legacy","slug":"/commands/start-transaction","permalink":"/docs/ja/commands/start-transaction","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fstart-transaction.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"start-transaction","title":"START TRANSACTION","slug":"/commands/start-transaction","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESUME TRANSACTION","permalink":"/docs/ja/commands/resume-transaction"},"next":{"title":"SUSPEND TRANSACTION","permalink":"/docs/ja/commands/suspend-transaction"}}'),a=e("785893"),r=e("250065");let c={id:"start-transaction",title:"START TRANSACTION",slug:"/commands/start-transaction",displayed_sidebar:"docs"},d=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function l(n){let t={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"START TRANSACTION"})}),"\n\n\n\n\n\n\n\n",(0,a.jsx)(t.table,{children:(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u5F15\u6570\u3092\u5FC5\u8981\u3068\u3057\u307E\u305B\u3093"}),(0,a.jsx)(t.th,{})]})})}),"\n",(0,a.jsx)(t.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,a.jsx)(t.p,{children:"START TRANSACTION \u306F\u3001\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u3067\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u3092\u958B\u59CB\u3057\u307E\u3059\u3002\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u304C\u53D7\u3051\u5165\u308C\u3089\u308C\u308B\u307E\u305F\u306F\u30AD\u30E3\u30F3\u30BB\u30EB\u3055\u308C\u308B\u307E\u3067\u306F\u3001\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u5185\u306B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u4E0A\u3067\u5909\u66F4\u3055\u308C\u305F\u3059\u3079\u3066\u306E\u30C7\u30FC\u30BF\u306F\u4E00\u6642\u7684\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,a.jsx)(t.p,{children:"4D\u306E\u30D0\u30FC\u30B8\u30E7\u30F311\u4EE5\u964D\u3001\u8907\u6570\u306E\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3(\u30B5\u30D6\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3) \u3092\u30CD\u30B9\u30C8\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u305D\u308C\u305E\u308C\u306E\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u307E\u305F\u306F\u30B5\u30D6\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u306F\u3001\u6700\u7D42\u7684\u306B\u306F\u30AD\u30E3\u30F3\u30BB\u30EB\u307E\u305F\u306F\u8A8D\u8A3C\u3055\u308C\u3066\u3044\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u4E3B\u8981\u306A\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u304C\u30AD\u30E3\u30F3\u30BB\u30EB\u3055\u308C\u308B\u3068\u3001\u7D50\u679C\u306B\u95A2\u4FC2\u306A\u304F\u3001\u3059\u3079\u3066\u306E\u30B5\u30D6\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u306F\u30AD\u30E3\u30F3\u30BB\u30EB\u3055\u308C\u307E\u3059\u306E\u3067\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n",(0,a.jsx)(t.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/docs/ja/commands/cancel-transaction",children:"CANCEL TRANSACTION"}),(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.a,{href:"/docs/ja/commands/in-transaction",children:"In transaction"}),(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.a,{href:"/docs/ja/commands/transaction-level",children:"Transaction level"}),(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.a,{href:"/docs/ja/commands/validate-transaction",children:"VALIDATE TRANSACTION"}),(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.em,{children:"\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3059\u308B"})]}),"\n",(0,a.jsx)(t.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,a.jsx)(t.td,{children:"239"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,a.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function h(n={}){let{wrapper:t}={...(0,r.a)(),...n.components};return t?(0,a.jsx)(t,{...n,children:(0,a.jsx)(l,{...n})}):l(n)}},250065:function(n,t,e){e.d(t,{Z:function(){return d},a:function(){return c}});var s=e(667294);let a={},r=s.createContext(a);function c(n){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(t):{...t,...n}},[t,n])}function d(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:c(n.components),s.createElement(r.Provider,{value:t},n.children)}}}]);