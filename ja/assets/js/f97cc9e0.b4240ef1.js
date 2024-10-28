"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22441],{235353:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>i});var t=s(474848),a=s(28453);const c={id:"suspend-transaction",title:"SUSPEND TRANSACTION",slug:"/commands/suspend-transaction",displayed_sidebar:"docs"},r=void 0,o={id:"commands-legacy/suspend-transaction",title:"SUSPEND TRANSACTION",description:"SUSPEND TRANSACTION",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/suspend-transaction.md",sourceDirName:"commands-legacy",slug:"/commands/suspend-transaction",permalink:"/docs/ja/commands/suspend-transaction",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsuspend-transaction.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"suspend-transaction",title:"SUSPEND TRANSACTION",slug:"/commands/suspend-transaction",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"START TRANSACTION",permalink:"/docs/ja/commands/start-transaction"},next:{title:"Transaction level",permalink:"/docs/ja/commands/transaction-level"}},d={},i=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:4}];function l(n){const e={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"SUSPEND TRANSACTION"})}),"\n\n\n\n\n\n\n\n",(0,t.jsx)(e.table,{children:(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u5f15\u6570\u3092\u5fc5\u8981\u3068\u3057\u307e\u305b\u3093"}),(0,t.jsx)(e.th,{})]})})}),"\n",(0,t.jsx)(e.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"SUSPEND TRANSACTION"}),"\u30b3\u30de\u30f3\u30c9\u306f\u30ab\u30ec\u30f3\u30c8\u30d7\u30ed\u30bb\u30b9\u5185\u306e\u30ab\u30ec\u30f3\u30c8\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u4e00\u6642\u505c\u6b62\u3055\u305b\u307e\u3059\u3002\u305d\u3046\u3059\u308b\u3053\u3068\u306b\u3088\u3063\u3066\u4f8b\u3048\u3070\u3001\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306f\u624b\u3064\u304b\u305a\u3067\u6b8b\u3057\u305f\u307e\u307e\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u4ed6\u306e\u90e8\u5206\u306b\u3066\u30c7\u30fc\u30bf\u3092 (\u30c7\u30fc\u30bf\u304c\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306b\u542b\u307e\u308c\u308b\u4e8b\u306a\u304f) \u64cd\u4f5c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u5185\u3067\u66f4\u65b0\u3001\u3042\u308b\u3044\u306f\u8ffd\u52a0\u3055\u308c\u305f\u30ec\u30b3\u30fc\u30c9\u306f\u3001\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u304c ",(0,t.jsx)(e.a,{href:"/docs/ja/commands/resume-transaction",children:"RESUME TRANSACTION"})," \u30b3\u30de\u30f3\u30c9\u306b\u3088\u3063\u3066\u518d\u958b\u3055\u308c\u308b\u307e\u3067\u30ed\u30c3\u30af\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,t.jsx)(e.em,{children:"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u505c\u6b62"})," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(e.h4,{id:"\u53c2\u7167",children:"\u53c2\u7167"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"/docs/ja/commands/active-transaction",children:"Active transaction"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/ja/commands/resume-transaction",children:"RESUME TRANSACTION"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.em,{children:"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u505c\u6b62"})]})]})}function m(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>o});var t=s(296540);const a={},c=t.createContext(a);function r(n){const e=t.useContext(c);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);