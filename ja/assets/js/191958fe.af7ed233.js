"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[64267],{719198:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var r=s(474848),t=s(28453);const c={id:"listbox-get-hierarchy",title:"LISTBOX GET HIERARCHY",slug:"/commands/listbox-get-hierarchy",displayed_sidebar:"docs"},i=void 0,d={id:"commands-legacy/listbox-get-hierarchy",title:"LISTBOX GET HIERARCHY",description:"LISTBOX GET HIERARCHY ( { ;} object ; hierarchical {; hierarchy*} )",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-hierarchy.md",sourceDirName:"commands-legacy",slug:"/commands/listbox-get-hierarchy",permalink:"/docs/ja/commands/listbox-get-hierarchy",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-hierarchy.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"listbox-get-hierarchy",title:"LISTBOX GET HIERARCHY",slug:"/commands/listbox-get-hierarchy",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"LISTBOX Get headers height",permalink:"/docs/ja/commands/listbox-get-headers-height"},next:{title:"LISTBOX Get locked columns",permalink:"/docs/ja/commands/listbox-get-locked-columns"}},l={},h=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:4}];function o(e){const n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LISTBOX GET HIERARCHY"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"object"})," ; ",(0,r.jsx)(n.em,{children:"hierarchical"})," {; ",(0,r.jsx)(n.em,{children:"hierarchy"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5f15\u6570"}),(0,r.jsx)(n.th,{children:"\u578b"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"\u6f14\u7b97\u5b50"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["\u6307\u5b9a\u6642\u3001object\u306f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u540d (\u6587\u5b57\u5217)",(0,r.jsx)(n.br,{}),"\u7701\u7565\u6642\u3001object\u306f\u5909\u6570"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u540d (* \u6307\u5b9a\u6642) \u307e\u305f\u306f ",(0,r.jsx)(n.br,{}),"\u5909\u6570 (* \u7701\u7565\u6642)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hierarchical"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsxs)(n.td,{children:["True = \u968e\u5c64\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9",(0,r.jsx)(n.br,{}),"False = \u975e\u968e\u5c64\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hierarchy"}),(0,r.jsx)(n.td,{children:"Pointer array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"\u30dd\u30a4\u30f3\u30bf\u306e\u914d\u5217"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u30b9\u30ec\u30c3\u30c9\u30bb\u30fc\u30d5\u3067\u306f\u306a\u3044\u305f\u3081\u3001\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u306a\u30b3\u30fc\u30c9\u306b\u306f\u4f7f\u3048\u307e\u305b\u3093\u3002"})}),"\n",(0,r.jsx)(n.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,r.jsxs)(n.p,{children:["LISTBOX GET HIERARCHY \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066 ",(0,r.jsx)(n.em,{children:"object"}),"\u3068***\u3067\u6307\u5b9a\u3057\u305f\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u968e\u5c64\u3067\u3042\u308b\u304b\u3069\u3046\u304b\u3092\u77e5\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30aa\u30d7\u30b7\u30e7\u30f3\u306e ",(0,r.jsx)(n.em,{children:"*"})," \u5f15\u6570\u3092\u6e21\u3057\u305f\u5834\u5408\u3001",(0,r.jsx)(n.em,{children:"object"}),"\u5f15\u6570\u306f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u540d (\u6587\u5b57\u5217) \u3067\u3059\u3002\u3053\u306e\u5f15\u6570\u3092\u6e21\u3055\u306a\u3044\u5834\u5408",(0,r.jsx)(n.em,{children:"object"}),"\u306f\u5909\u6570\u3067\u3059\u3002\u3053\u306e\u5834\u5408\u3001\u6587\u5b57\u5217\u3067\u306f\u306a\u304f\u5909\u6570\u53c2\u7167\u3092\u6e21\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30d6\u30fc\u30eb\u578b\u306e",(0,r.jsx)(n.em,{children:"hierarchical"}),"\u5f15\u6570\u306f\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u306e\u30e2\u30fc\u30c9\u304c\u968e\u5c64\u30e2\u30fc\u30c9\u3067\u3042\u308b\u304b\u306a\u3044\u304b\u3092\u793a\u3057\u307e\u3059:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5f15\u6570\u304cTrue\u3092\u8fd4\u3059\u3068\u3001\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u306f\u968e\u5c64\u30e2\u30fc\u30c9\u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5f15\u6570\u304cFalse\u3092\u8fd4\u3059\u3068\u3001\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u306f (\u975e\u968e\u5c64\u306e) \u6a19\u6e96\u914d\u5217\u30e2\u30fc\u30c9\u3067\u8868\u793a\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u304c\u968e\u5c64\u30e2\u30fc\u30c9\u3067\u3042\u308b\u3068\u304d\u3001",(0,r.jsx)(n.em,{children:"hierarchy"}),"\u5f15\u6570\u306b\u306f\u968e\u5c64\u3092\u8a2d\u5b9a\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u308b\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u306e\u914d\u5217\u3078\u306e\u30dd\u30a4\u30f3\u30bf\u304c\u8fd4\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," \u968e\u5c64\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u304c\u968e\u5c64\u30e2\u30fc\u30c9\u3067\u306a\u3044\u3068\u304d\u3001\u30b3\u30de\u30f3\u30c9\u306f",(0,r.jsx)(n.em,{children:"hierarchy"}),"\u914d\u5217\u306e\u6700\u521d\u306e\u8981\u7d20\u306b\u3001\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u306e\u6700\u521d\u306e\u5217\u306e\u914d\u5217\u3078\u306e\u30dd\u30a4\u30f3\u30bf\u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u53c2\u7167",children:"\u53c2\u7167"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/ja/commands/listbox-set-hierarchy",children:"LISTBOX SET HIERARCHY"})})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>d});var r=s(296540);const t={},c=r.createContext(t);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);