"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93291],{7024:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=s(474848),t=s(28453);const r={id:"is-nil-pointer",title:"Is nil pointer",slug:"/commands/is-nil-pointer",displayed_sidebar:"docs"},d=void 0,l={id:"commands-legacy/is-nil-pointer",title:"Is nil pointer",description:"Is nil pointer ( aPointer ) -> \u623b\u308a\u5024",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/is-nil-pointer.md",sourceDirName:"commands-legacy",slug:"/commands/is-nil-pointer",permalink:"/docs/ja/commands/is-nil-pointer",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-nil-pointer.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"is-nil-pointer",title:"Is nil pointer",slug:"/commands/is-nil-pointer",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Is a variable",permalink:"/docs/ja/commands/is-a-variable"},next:{title:"Null",permalink:"/docs/ja/commands/null"}},o={},c=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:4},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:4}];function a(n){const e={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Is nil pointer"})," ( ",(0,i.jsx)(e.em,{children:"aPointer"})," ) -> \u623b\u308a\u5024"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u5f15\u6570"}),(0,i.jsx)(e.th,{children:"\u578b"}),(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{children:"\u8aac\u660e"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"aPointer"}),(0,i.jsx)(e.td,{children:"Pointer"}),(0,i.jsx)(e.td,{children:"\u2192"}),(0,i.jsx)(e.td,{children:"\u30c6\u30b9\u30c8\u3059\u308b\u30dd\u30a4\u30f3\u30bf"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u623b\u308a\u5024"}),(0,i.jsx)(e.td,{children:"Boolean"}),(0,i.jsx)(e.td,{children:"\u2190"}),(0,i.jsx)(e.td,{children:"TRUE = Nil \u30dd\u30a4\u30f3\u30bf (->[]) FALSE = \u65e2\u5b58\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3078\u306e\u6709\u52b9\u306a\u30dd\u30a4\u30f3\u30bf"})]})]})]}),"\n",(0,i.jsx)(e.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Is nil pointer"}),"\u30b3\u30de\u30f3\u30c9\u306f\u3001",(0,i.jsx)(e.em,{children:"aPointer"}),"\u304cNil\u30dd\u30a4\u30f3\u30bf (->[]) \u306e\u5834\u5408\u306b",(0,i.jsx)(e.strong,{children:"True"}),"\u3092\u8fd4\u3057\u307e\u3059\u3002\u305d\u306e\u4ed6\u306e\u5834\u5408\uff08\u30d5\u30a3\u30fc\u30eb\u30c9\u3084\u30c6\u30fc\u30d6\u30eb\u3001\u5909\u6570\u3078\u306e\u30dd\u30a4\u30f3\u30bf\uff09\u3001\u3053\u306e\u95a2\u6570\u306fFalse\u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u30dd\u30a4\u30f3\u30bf\u30fc\u306e\u53c2\u7167\u5148\u3067\u3042\u308b\u5909\u6570\u306e\u540d\u524d\u3084\u30d5\u30a3\u30fc\u30eb\u30c9\u756a\u53f7\u3092\u77e5\u308a\u305f\u3044\u5834\u5408\u3001",(0,i.jsx)(e.a,{href:"/docs/ja/commands/resolve-pointer",children:"RESOLVE POINTER"}),"\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(e.h4,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-4d",children:"\xa0var $ptr : Pointer\n\xa0...\n\xa0If(Is nil pointer($ptr))\n\xa0End if\n\xa0\xa0// \u3053\u308c\u306f\u4e0b\u8a18\u306b\u76f8\u5f53\u3059\u308b\n\xa0If($ptr=Null)\n\xa0End if\n"})}),"\n",(0,i.jsx)(e.h4,{id:"\u53c2\u7167",children:"\u53c2\u7167"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"/docs/ja/commands/is-a-variable",children:"Is a variable"}),(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.a,{href:"/docs/ja/commands/resolve-pointer",children:"RESOLVE POINTER"})]})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>d,x:()=>l});var i=s(296540);const t={},r=i.createContext(t);function d(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:d(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);