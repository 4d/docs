"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65933"],{154728:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>i,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/create-empty-set","title":"CREATE EMPTY SET","description":"CREATE EMPTY SET ( {aTable ;} set )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/create-empty-set.md","sourceDirName":"commands-legacy","slug":"/commands/create-empty-set","permalink":"/docs/ja/20-R7/commands/create-empty-set","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-empty-set.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"create-empty-set","title":"CREATE EMPTY SET","slug":"/commands/create-empty-set","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"COPY SET","permalink":"/docs/ja/20-R7/commands/copy-set"},"next":{"title":"CREATE SET","permalink":"/docs/ja/20-R7/commands/create-set"}}'),d=t("785893"),r=t("250065");let c={id:"create-empty-set",title:"CREATE EMPTY SET",slug:"/commands/create-empty-set",displayed_sidebar:"docs"},l=void 0,i={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"CREATE EMPTY SET"})," ( {",(0,d.jsx)(n.em,{children:"aTable"})," ;} ",(0,d.jsx)(n.em,{children:"set"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"aTable"}),(0,d.jsx)(n.td,{children:"Table"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u7A7A\u306E\u30BB\u30C3\u30C8\u3092\u4F5C\u6210\u3059\u308B\u30C6\u30FC\u30D6\u30EB, \u307E\u305F\u306F \u7701\u7565\u6642\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u30C6\u30FC\u30D6\u30EB"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"set"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u65B0\u3057\u3044\u7A7A\u306E\u30BB\u30C3\u30C8\u306E\u540D\u524D"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:["CREATE EMPTY SET\u306F\u3001",(0,d.jsx)(n.em,{children:"aTable"}),"\u306B\u5BFE\u3057\u3066\u65B0\u3057\u3044\u7A7A\u306E\u30BB\u30C3\u30C8",(0,d.jsx)(n.em,{children:"set"}),"\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/add-to-set",title:"ADD TO SET",children:"ADD TO SET"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3063\u3066\u3001\u3053\u306E\u30BB\u30C3\u30C8\u306B\u30EC\u30B3\u30FC\u30C9\u3092\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002\u65E2\u306B\u540C\u3058\u540D\u524D\u306E\u30BB\u30C3\u30C8\u304C\u5B58\u5728\u3057\u3066\u3044\u308B\u5834\u5408\u3001\u305D\u306E\u30BB\u30C3\u30C8\u3092\u6D88\u53BB\u3057\u3066\u65B0\u3057\u3044\u7A7A\u306E\u30BB\u30C3\u30C8\u306B\u7F6E\u304D\u63DB\u3048\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," ",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/create-set",title:"CREATE SET",children:"CREATE SET"}),"\u3092\u4F7F\u7528\u3059\u308B\u524D\u306B\u3001CREATE EMPTY SET\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsx)(n.p,{children:"\u306E\u7BC0\u306E\u4F8B\u984C\u53C2\u7167\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/clear-set",children:"CLEAR SET"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/create-set",children:"CREATE SET"})]}),"\n",(0,d.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"140"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return c}});var s=t(667294);let d={},r=s.createContext(d);function c(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);