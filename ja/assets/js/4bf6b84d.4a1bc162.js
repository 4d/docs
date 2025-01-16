"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80610"],{349353:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>r,assets:()=>o,toc:()=>i,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/one-record-select","title":"ONE RECORD SELECT","description":"ONE RECORD SELECT {( aTable )}","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/one-record-select.md","sourceDirName":"commands-legacy","slug":"/commands/one-record-select","permalink":"/docs/ja/commands/one-record-select","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fone-record-select.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"one-record-select","title":"ONE RECORD SELECT","slug":"/commands/one-record-select","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"NEXT RECORD","permalink":"/docs/ja/commands/next-record"},"next":{"title":"PREVIOUS RECORD","permalink":"/docs/ja/commands/previous-record"}}'),t=s("785893"),d=s("250065");let c={id:"one-record-select",title:"ONE RECORD SELECT",slug:"/commands/one-record-select",displayed_sidebar:"docs"},l=void 0,o={},i=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u6CE8",id:"\u6CE8",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ONE RECORD SELECT"})," {( ",(0,t.jsx)(n.em,{children:"aTable"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5F15\u6570"}),(0,t.jsx)(n.th,{children:"\u578B"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"aTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3092\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306B\u3059\u308B \u30C6\u30FC\u30D6\u30EB\u3001\u307E\u305F\u306F\u7701\u7565\u6642\u30C7\u30D5\u30A9\u30EB\u30C8\u30C6\u30FC\u30D6\u30EB"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(n.p,{children:["ONE RECORD SELECT\u306F",(0,t.jsx)(n.em,{children:"aTable"}),"\u306E\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3092\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306B\u3057\u307E\u3059\u3002\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u304C\u5B58\u5728\u3057\u306A\u3044\u304B\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u304C\u30E1\u30E2\u30EA\u306B\u30ED\u30FC\u30C9\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408 (\u7279\u6B8A\u306A\u30B1\u30FC\u30B9)\u3001ONE RECORD SELECT\u306F\u4F55\u3082\u884C\u3044\u307E\u305B\u3093\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"\u6CE8",children:"\u6CE8"}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30EC\u30B3\u30FC\u30C9\u30B9\u30BF\u30C3\u30AF\u306B\u30D7\u30C3\u30B7\u30E5\u3057\u3066\u30DD\u30C3\u30D7\u3057\u305F\u30EC\u30B3\u30FC\u30C9\u3092\u3001\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u304C\u5909\u66F4\u3055\u308C\u305F\u969B\u306B\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306B\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u307E\u3057\u305F\u3002 ",(0,t.jsx)(n.a,{href:"/docs/ja/commands/set-query-destination",children:"SET QUERY DESTINATION"})," \u3092\u4F7F\u7528\u3057\u3066\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3084\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3092\u5909\u66F4\u305B\u305A\u306B\u691C\u7D22\u3092\u884C\u3048\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002\u3053\u308C\u306B\u3088\u308A\u540C\u3058\u30C6\u30FC\u30D6\u30EB\u3092\u30AF\u30A8\u30EA\u3059\u308B\u76EE\u7684\u3067\u30EC\u30B3\u30FC\u30C9\u3092\u30D7\u30C3\u30B7\u30E5/\u30DD\u30C3 \u30D7\u3059\u308B\u5FC5\u8981\u306F\u306A\u304F\u306A\u308A\u307E\u3057\u305F\u3002\u7D50\u679C\u306F\u3001 ",(0,t.jsx)(n.strong,{children:"ONE RECORD SELECT"})," \u306F\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3060\u3051\u306B\u7E2E\u5C0F\u3057\u305F\u3044\u5834\u5408\u3092\u9664\u3044\u3066\u5229\u7528\u4FA1\u5024\u304C\u5C11\u306A\u304F\u306A\u308A\u307E\u3057\u305F\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u8B66\u544A:"})," \u30EC\u30B3\u30FC\u30C9\u756A\u53F7\u306F\u3001\u3042\u308B\u30EC\u30B3\u30FC\u30C9\u304C\u524A\u9664\u3055\u308C\u3066\u305D\u306E\u3042\u3068\u4ED6\u306E\u30EC\u30B3\u30FC\u30C9\u304C\u4F5C\u6210\u3055\u308C\u305F\u5834\u5408\u306B\u306F\u518D\u5229\u7528\u3055\u308C\u308B\u53EF\u80FD\u6027\u304C\u3042\u308B\u3068\u3044\u3046\u70B9\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044(",(0,t.jsx)(n.em,{children:"\u30EC\u30B3\u30FC\u30C9\u756A\u53F7\u306B\u3064\u3044\u3066"})," \u53C2\u7167)\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/commands/create-selection-from-array",children:"CREATE SELECTION FROM ARRAY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/commands/selection-range-to-array",children:"SELECTION RANGE TO ARRAY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/commands/selection-to-array",children:"SELECTION TO ARRAY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"\u547D\u540D\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3"})]}),"\n",(0,t.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(n.td,{children:"189"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3092\u5909\u66F4\u3059\u308B"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u5909\u66F4\u3059\u308B"}),(0,t.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return c}});var r=s(667294);let t={},d=r.createContext(t);function c(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);