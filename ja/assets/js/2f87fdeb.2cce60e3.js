"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[72971],{306910:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>i});var s=t(474848),o=t(28453);const c={id:"listbox-get-number-of-columns",title:"LISTBOX Get number of columns",slug:"/commands/listbox-get-number-of-columns",displayed_sidebar:"docs"},r=void 0,d={id:"commands-legacy/listbox-get-number-of-columns",title:"LISTBOX Get number of columns",description:"LISTBOX Get number of columns ( { ;} object* ) -> \u623b\u308a\u5024",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-number-of-columns.md",sourceDirName:"commands-legacy",slug:"/commands/listbox-get-number-of-columns",permalink:"/docs/ja/commands/listbox-get-number-of-columns",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-number-of-columns.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"listbox-get-number-of-columns",title:"LISTBOX Get number of columns",slug:"/commands/listbox-get-number-of-columns",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"LISTBOX Get locked columns",permalink:"/docs/ja/commands/listbox-get-locked-columns"},next:{title:"LISTBOX Get number of rows",permalink:"/docs/ja/commands/listbox-get-number-of-rows"}},l={},i=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:4}];function m(e){const n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"LISTBOX Get number of columns"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"object"})," ) -> \u623b\u308a\u5024"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5f15\u6570"}),(0,s.jsx)(n.th,{children:"\u578b"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"\u6f14\u7b97\u5b50"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u6307\u5b9a\u6642, object\u306f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u540d (\u6587\u5b57\u5217) \u7701\u7565\u6642, object\u306f\u5909\u6570"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u540d (* \u6307\u5b9a\u6642) \u307e\u305f\u306f \u5909\u6570 (* \u7701\u7565\u6642)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u623b\u308a\u5024"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"\u5217\u6570"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u30b9\u30ec\u30c3\u30c9\u30bb\u30fc\u30d5\u3067\u306f\u306a\u3044\u305f\u3081\u3001\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u306a\u30b3\u30fc\u30c9\u306b\u306f\u4f7f\u3048\u307e\u305b\u3093\u3002"})}),"\n",(0,s.jsx)(n.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,s.jsxs)(n.p,{children:["LISTBOX Get number of columns \u30b3\u30de\u30f3\u30c9\u306f\u3001",(0,s.jsx)(n.em,{children:"object"}),"\u5f15\u6570\u304a\u3088\u3073 ",(0,s.jsx)(n.em,{children:"*"})," \u3067\u6307\u5b9a\u3055\u308c\u305f\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u306b\u5b58\u5728\u3059\u308b\u5217\uff08\u8868\u793a\u307e\u305f\u306f\u975e\u8868\u793a\uff09\u306e\u5408\u8a08\u6570\u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u5f15\u6570 ",(0,s.jsx)(n.em,{children:"*"})," \u3092\u6e21\u3059\u3053\u3068\u306b\u3088\u308a\u3001",(0,s.jsx)(n.em,{children:"object"}),"\u5f15\u6570\u304c\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u540d\uff08\u6587\u5b57\u5217\uff09\u3067\u3042\u308b\u3053\u3068\u3092\u793a\u3057\u307e\u3059\u3002\u3053\u306e\u5f15\u6570\u3092\u6e21\u3055\u306a\u3044\u5834\u5408\u3001",(0,s.jsx)(n.em,{children:"object"}),"\u5f15\u6570\u304c\u5909\u6570\u3067\u3042\u308b\u3053\u3068\u3092\u793a\u3057\u307e\u3059\u3002\u3053\u306e\u5834\u5408\u3001\u6587\u5b57\u5217\u3067\u306f\u306a\u304f\u5909\u6570\u53c2\u7167\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u540d\u306b\u3064\u3044\u3066\u306e\u8a73\u7d30\u306f\u306e\u7bc0\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u53c2\u7167",children:"\u53c2\u7167"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/ja/commands/listbox-delete-column",children:"LISTBOX DELETE COLUMN"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var s=t(296540);const o={},c=s.createContext(o);function r(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);