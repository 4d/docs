"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7667"],{238455:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>d,default:()=>h,assets:()=>i,toc:()=>l,frontMatter:()=>c});var s=JSON.parse('{"id":"commands-legacy/validate-transaction","title":"VALIDATE TRANSACTION","description":"VALIDATE TRANSACTION","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/validate-transaction.md","sourceDirName":"commands-legacy","slug":"/commands/validate-transaction","permalink":"/docs/ja/commands/validate-transaction","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fvalidate-transaction.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"validate-transaction","title":"VALIDATE TRANSACTION","slug":"/commands/validate-transaction","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Transaction level","permalink":"/docs/ja/commands/transaction-level"},"next":{"title":"Triggers","permalink":"/docs/ja/category/triggers"}}'),a=t("785893"),r=t("250065");let c={id:"validate-transaction",title:"VALIDATE TRANSACTION",slug:"/commands/validate-transaction",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(n){let e={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"VALIDATE TRANSACTION"})}),"\n\n\n\n\n\n\n\n",(0,a.jsx)(e.table,{children:(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u5F15\u6570\u3092\u5FC5\u8981\u3068\u3057\u307E\u305B\u3093"}),(0,a.jsx)(e.th,{})]})})}),"\n",(0,a.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,a.jsxs)(e.p,{children:["VALIDATE TRANSACTION\u306F\u3001\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u4E2D\u3001",(0,a.jsx)(e.a,{href:"/docs/ja/commands/start-transaction",title:"START TRANSACTION",children:"START TRANSACTION"}),"\u3067\u958B\u59CB\u3057\u305F\u5BFE\u5FDC\u3059\u308B\u30EC\u30D9\u30EB\u306E\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u3092\u53D7\u3051\u5165\u308C\u307E\u3059\u3002VALIDATE TRANSACTION\u306F\u3001\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u4E2D\u306B\u884C\u308F\u308C\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3078\u306E\u66F4\u65B0\u3092\u4FDD\u5B58\u3057\u307E\u3059\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"4D\u306E\u30D0\u30FC\u30B8\u30E7\u30F311\u4EE5\u964D\u3001\u8907\u6570\u306E\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3(\u30B5\u30D6\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3) \u3092\u30CD\u30B9\u30C8\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u4E3B\u8981\u306A\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u304C\u30AD\u30E3\u30F3\u30BB\u30EB\u3055\u308C\u308B\u3068\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3067\u500B\u5225\u306B\u8A8D\u8A3C\u3055\u308C\u3066\u3044\u3066\u3082\u3001\u3059\u3079\u3066\u306E\u30B5\u30D6\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u306F\u30AD\u30E3\u30F3\u30BB\u30EB\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,a.jsx)(e.h4,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,a.jsx)(e.p,{children:"\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u304C\u6B63\u3057\u304F\u8A8D\u8A3C\u3055\u308C\u308B\u3068\u3001\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B1\u304C\u4EE3\u5165\u3055\u308C\u307E\u3059\u3002\u305D\u306E\u4ED6\u306E\u5834\u5408\u306F0\u304C\u4EE3\u5165\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,a.jsxs)(e.p,{children:["OK\u5909\u6570\u306B0\u304C\u4EE3\u5165\u3055\u308C\u305F\u5834\u5408\u3001\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u306F\u81EA\u52D5\u7684\u306B\u5185\u90E8\u3067\u30AD\u30E3\u30F3\u30BB\u30EB\u3055\u308C\u308B\u3068\u3044\u3046\u70B9\u306B\u6CE8\u610F\u3057\u3066\u4E0B\u3055\u3044(",(0,a.jsx)(e.a,{href:"/docs/ja/commands/cancel-transaction",children:"CANCEL TRANSACTION"}),"\u3068\u540C\u7B49)\u3002\u7D50\u679C\u3068\u3057\u3066\u3001\u7279\u306B\u30CD\u30B9\u30C8\u3055\u308C\u305F\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u3067\u306F\u30AD\u30E3\u30F3\u30BB\u30EB\u304C\u9AD8\u3044\u30EC\u30D9\u30EB\u306E\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u306B\u307E\u3067\u9069\u7528\u3055\u308C\u3066\u3057\u307E\u3046\u305F\u3081\u3001OK=0\u306E\u5834\u5408\u306B\u306F\u660E\u793A\u7684\u306B",(0,a.jsx)(e.a,{href:"/docs/ja/commands/cancel-transaction",children:"CANCEL TRANSACTION"}),"\u3092\u547C\u3073\u51FA\u3057\u3066\u306F\u3044\u3051\u307E\u305B\u3093\u3002"]}),"\n",(0,a.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"/docs/ja/commands/cancel-transaction",children:"CANCEL TRANSACTION"}),(0,a.jsx)(e.br,{}),"\n",(0,a.jsx)(e.a,{href:"/docs/ja/commands/in-transaction",children:"In transaction"}),(0,a.jsx)(e.br,{}),"\n",(0,a.jsx)(e.a,{href:"/docs/ja/commands/start-transaction",children:"START TRANSACTION"}),(0,a.jsx)(e.br,{}),"\n",(0,a.jsx)(e.em,{children:"\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3059\u308B"})]}),"\n",(0,a.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{}),(0,a.jsx)(e.th,{})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,a.jsx)(e.td,{children:"240"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,a.jsx)(e.td,{children:"\u2713"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,a.jsx)(e.td,{children:"OK"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return d},a:function(){return c}});var s=t(667294);let a={},r=s.createContext(a);function c(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:c(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);