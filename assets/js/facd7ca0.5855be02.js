"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76912],{794789:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=t(474848),i=t(28453);const r={id:"insert-in-blob",title:"INSERT IN BLOB",slug:"/commands/insert-in-blob",displayed_sidebar:"docs"},o=void 0,l={id:"commands-legacy/insert-in-blob",title:"INSERT IN BLOB",description:"INSERT IN BLOB ( blob ; offset ; len {; filler} )",source:"@site/versioned_docs/version-20-R7/commands-legacy/insert-in-blob.md",sourceDirName:"commands-legacy",slug:"/commands/insert-in-blob",permalink:"/docs/commands/insert-in-blob",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Finsert-in-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"insert-in-blob",title:"INSERT IN BLOB",slug:"/commands/insert-in-blob",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"EXPAND BLOB",permalink:"/docs/commands/expand-blob"},next:{title:"INTEGER TO BLOB",permalink:"/docs/commands/integer-to-blob"}},d={},c=[{value:"Description",id:"description",level:4},{value:"Note",id:"note",level:5},{value:"See also",id:"see-also",level:4}];function h(e){const n={a:"a",em:"em",h4:"h4",h5:"h5",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"INSERT IN BLOB"})," ( ",(0,s.jsx)(n.em,{children:"blob"})," ; ",(0,s.jsx)(n.em,{children:"offset"})," ; ",(0,s.jsx)(n.em,{children:"len"})," {; ",(0,s.jsx)(n.em,{children:"filler"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"blob"}),(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"BLOB into which bytes will be inserted"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"offset"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Starting position where bytes will be inserted"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"len"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Number of bytes to be inserted"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"filler"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Default byte value (0x00..0xFF) 0x00 if omitted"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The INSERT IN BLOB command inserts the number of bytes specified by ",(0,s.jsx)(n.em,{children:"len"})," into the BLOB ",(0,s.jsx)(n.em,{children:"blob"})," at the position specified by ",(0,s.jsx)(n.em,{children:"offset"}),". The BLOB then becomes ",(0,s.jsx)(n.em,{children:"len"})," bytes larger."]}),"\n",(0,s.jsxs)(n.p,{children:["If you do not specify the optional ",(0,s.jsx)(n.em,{children:"filler"})," parameter, the bytes inserted into the BLOB are set to ",(0,s.jsx)(n.em,{children:"0x00"}),". Otherwise, the bytes are set to the value you pass in ",(0,s.jsx)(n.em,{children:"filler"})," (modulo 256 \u2014 0..255)."]}),"\n",(0,s.jsxs)(n.p,{children:["Before the call, you pass in the ",(0,s.jsx)(n.em,{children:"offset"})," parameter the position of the insertion relative to the beginning of the BLOB."]}),"\n",(0,s.jsx)(n.h5,{id:"note",children:"Note"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Compatiblity note:"})," Since this command alters the blob passed as a parameter, it does not support blob objects (4D.Blob type). See ",(0,s.jsx)(n.em,{children:"Passing blobs and blob objects to 4D commands"})," on developer.4d.com."]}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/delete-from-blob",children:"DELETE FROM BLOB"})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(296540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);