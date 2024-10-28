"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3821],{318167:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var t=s(474848),d=s(28453);const l={id:"insert-in-blob",title:"INSERT IN BLOB",slug:"/commands/insert-in-blob",displayed_sidebar:"docs"},r=void 0,i={id:"commands-legacy/insert-in-blob",title:"INSERT IN BLOB",description:"INSERT IN BLOB ( BLOB ; offset ; len {; filler} )",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/insert-in-blob.md",sourceDirName:"commands-legacy",slug:"/commands/insert-in-blob",permalink:"/docs/ja/commands/insert-in-blob",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Finsert-in-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"insert-in-blob",title:"INSERT IN BLOB",slug:"/commands/insert-in-blob",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"EXPAND BLOB",permalink:"/docs/ja/commands/expand-blob"},next:{title:"INTEGER TO BLOB",permalink:"/docs/ja/commands/integer-to-blob"}},c={},o=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u6ce8",id:"\u6ce8",level:5},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:4}];function h(n){const e={a:"a",em:"em",h4:"h4",h5:"h5",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"INSERT IN BLOB"})," ( ",(0,t.jsx)(e.em,{children:"BLOB"})," ; ",(0,t.jsx)(e.em,{children:"offset"})," ; ",(0,t.jsx)(e.em,{children:"len"})," {; ",(0,t.jsx)(e.em,{children:"filler"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5f15\u6570"}),(0,t.jsx)(e.th,{children:"\u578b"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"\u8aac\u660e"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Blob"}),(0,t.jsx)(e.td,{children:"Blob"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u30d0\u30a4\u30c8\u5217\u3092\u633f\u5165\u3059\u308bBLOB"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"offset"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u30d0\u30a4\u30c8\u5217\u633f\u5165\u958b\u59cb\u4f4d\u7f6e"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"len"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u633f\u5165\u3059\u308b\u30d0\u30a4\u30c8\u6570"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"filler"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30d0\u30a4\u30c8\u5024 (0x00..0xFF) \u7701\u7565\u3057\u305f\u5834\u54080x00"})]})]})]}),"\n",(0,t.jsx)(e.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,t.jsxs)(e.p,{children:["INSERT IN BLOB \u30b3\u30de\u30f3\u30c9\u306f\u3001",(0,t.jsx)(e.em,{children:"blob"}),"\u306e",(0,t.jsx)(e.em,{children:"offset"}),"\u3067\u6307\u5b9a\u3057\u305f\u4f4d\u7f6e\u306b\u3001",(0,t.jsx)(e.em,{children:"len"}),"\u3067\u6307\u5b9a\u3057\u305f\u6570\u306e\u30d0\u30a4\u30c8\u3092\u633f\u5165\u3057\u307e\u3059\u3002BLOB\u306f",(0,t.jsx)(e.em,{children:"len"}),"\u30d0\u30a4\u30c8\u3060\u3051\u5927\u304d\u304f\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u30aa\u30d7\u30b7\u30e7\u30f3\u306e",(0,t.jsx)(e.em,{children:"filler"}),"\u5f15\u6570\u3092\u6307\u5b9a\u3057\u306a\u3044\u5834\u5408\u3001BLOB\u306b\u633f\u5165\u3055\u308c\u308b\u30d0\u30a4\u30c8\u306f0x00\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002\u305d\u308c\u4ee5\u5916\u306e\u5834\u5408\u3001",(0,t.jsx)(e.em,{children:"filler"}),"\u306b\u6e21\u3057\u305f\u5024\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059 (\u30e2\u30b8\u30e5\u30fc\u30ed 256 - 0..255)\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u547c\u3073\u51fa\u3057\u524d\u306b\u3001",(0,t.jsx)(e.em,{children:"offset"}),"\u5f15\u6570\u306b\u306fBLOB\u306e\u5148\u982d\u304b\u3089\u76f8\u5bfe\u7684\u306a\u633f\u5165\u4f4d\u7f6e\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(e.h5,{id:"\u6ce8",children:"\u6ce8"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u4e92\u63db\u6027\u306b\u95a2\u3059\u308b\u6ce8\u610f:"})," \u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u5f15\u6570\u3068\u3057\u3066\u6e21\u3055\u308c\u305fBlob \u3092\u5909\u66f4\u3059\u308b\u305f\u3081\u3001Blob \u30aa\u30d6\u30b8\u30a7\u30af\u30c8(4D.Blob \u578b)\u306f\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u305b\u3093\u3002developer.4d.com \u3067\u306e\u306e ",(0,t.jsx)(e.em,{children:"Passing blobs and blob objects to 4D commands"})," \u306e\u30da\u30fc\u30b8\u3092\u53c2\u7167\u3057\u3066\u4e0b\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(e.h4,{id:"\u53c2\u7167",children:"\u53c2\u7167"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"/docs/ja/commands/delete-from-blob",children:"DELETE FROM BLOB"})})]})}function a(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>i});var t=s(296540);const d={},l=t.createContext(d);function r(n){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:r(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);