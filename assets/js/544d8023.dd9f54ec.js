"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19073],{221743:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(474848),s=t(28453);const r={id:"read-only",title:"READ ONLY",slug:"/commands/read-only",displayed_sidebar:"docs"},d=void 0,a={id:"commands-legacy/read-only",title:"READ ONLY",description:"READ ONLY {( aTable | * )}",source:"@site/versioned_docs/version-20-R7/commands-legacy/read-only.md",sourceDirName:"commands-legacy",slug:"/commands/read-only",permalink:"/docs/commands/read-only",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fread-only.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"read-only",title:"READ ONLY",slug:"/commands/read-only",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Locked records info",permalink:"/docs/commands/locked-records-info"},next:{title:"Read only state",permalink:"/docs/commands/read-only-state"}},l={},c=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4}];function i(e){const n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"READ ONLY"})," {( aTable | * )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Parameter"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"aTable | *"}),(0,o.jsx)(n.td,{children:"Table, Operator"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Table for which to set read-only state, or * for all the tables, or Default table, if omitted"})]})})]}),"\n",(0,o.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["READ ONLY changes the state of ",(0,o.jsx)(n.em,{children:"aTable"})," to read-only for the process in which it is called. All subsequent records that are loaded are locked, and you cannot make any changes made to them. If the optional * parameter is specified, all tables are changed to read-only state."]}),"\n",(0,o.jsx)(n.p,{children:"Use READ ONLY when you do not need to modify the record or records."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note:"})," This command is not retroactive. A record is loaded according to the table\u2019s read/write status at the time of loading. To load a record from a read/write table in read-only mode, you must first change the table state to read-only."]}),"\n",(0,o.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/commands/read-only-state",children:"Read only state"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/commands/read-write",children:"READ WRITE"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.em,{children:"Record Locking"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>a});var o=t(296540);const s={},r=o.createContext(s);function d(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);