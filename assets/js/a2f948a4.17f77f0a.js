"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8834],{794929:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var s=t(474848),r=t(28453);const o={id:"restore-info",title:"RESTORE INFO",slug:"/commands/restore-info",displayed_sidebar:"docs"},i=void 0,d={id:"commands-legacy/restore-info",title:"RESTORE INFO",description:"RESTORE INFO ( selector ; info1 ; info2 )",source:"@site/versioned_docs/version-20-R7/commands-legacy/restore-info.md",sourceDirName:"commands-legacy",slug:"/commands/restore-info",permalink:"/docs/commands/restore-info",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frestore-info.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"restore-info",title:"RESTORE INFO",slug:"/commands/restore-info",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"RESTORE",permalink:"/docs/commands/restore"},next:{title:"SELECT LOG FILE",permalink:"/docs/commands/select-log-file"}},c={},l=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const n={a:"a",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"RESTORE INFO"})," ( ",(0,s.jsx)(n.em,{children:"selector"})," ; ",(0,s.jsx)(n.em,{children:"info1"})," ; ",(0,s.jsx)(n.em,{children:"info2"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"selector"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Type of information to get"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"info1"}),(0,s.jsx)(n.td,{children:"Integer, Date"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Value 1 of the selector"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"info2"}),(0,s.jsx)(n.td,{children:"Text, Time"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Value 2 of the selector"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"The RESTORE INFO command gets information related to the last automatic database restore."}),"\n",(0,s.jsxs)(n.p,{children:["Pass the type of information to get in ",(0,s.jsx)(n.em,{children:"selector"}),". You can use one of the following constants, placed in the \u201c",(0,s.jsx)(n.em,{children:"Backup and Restore"}),"\u201d theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Last restore date"}),(0,s.jsx)(n.td,{children:"Longint"}),(0,s.jsx)(n.td,{children:"0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Last restore status"}),(0,s.jsx)(n.td,{children:"Longint"}),(0,s.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["The type and content of the ",(0,s.jsx)(n.em,{children:"info1"})," and ",(0,s.jsx)(n.em,{children:"info2"})," parameters depend on the value of ",(0,s.jsx)(n.em,{children:"selector"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.em,{children:"selector"})," = 0 (Last Restore Date), ",(0,s.jsx)(n.em,{children:"info1"})," returns the date and ",(0,s.jsx)(n.em,{children:"info2"})," the time of the last automatic database restore."]}),"\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.em,{children:"selector"})," = 2 (Last Restore Status), ",(0,s.jsx)(n.em,{children:"info1"})," returns the number and ",(0,s.jsx)(n.em,{children:"info2"})," the text of the status of the last automatic database restore."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," This command does not take manual database restores into account."]}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/restore",children:"RESTORE"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var s=t(296540);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);