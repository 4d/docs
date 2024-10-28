"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43569],{375960:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var r=t(474848),s=t(28453);const d={id:"qr-set-report-kind",title:"QR SET REPORT KIND",slug:"/commands/qr-set-report-kind",displayed_sidebar:"docs"},i=void 0,o={id:"commands-legacy/qr-set-report-kind",title:"QR SET REPORT KIND",description:"QR SET REPORT KIND ( area ; type )",source:"@site/versioned_docs/version-20-R7/commands-legacy/qr-set-report-kind.md",sourceDirName:"commands-legacy",slug:"/commands/qr-set-report-kind",permalink:"/docs/commands/qr-set-report-kind",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-set-report-kind.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"qr-set-report-kind",title:"QR SET REPORT KIND",slug:"/commands/qr-set-report-kind",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"QR SET INFO ROW",permalink:"/docs/commands/qr-set-info-row"},next:{title:"QR SET REPORT TABLE",permalink:"/docs/commands/qr-set-report-table"}},c={},l=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"QR SET REPORT KIND"})," ( ",(0,r.jsx)(n.em,{children:"area"})," ; ",(0,r.jsx)(n.em,{children:"type"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"area"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Reference of the area"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"type"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Type of the report"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"QR SET REPORT KIND"})," command sets the report ",(0,r.jsx)(n.em,{children:"type"})," for the area whose reference was passed in ",(0,r.jsx)(n.em,{children:"area"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.em,{children:"type"})," equals 1, the report type is list."]}),"\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.em,{children:"type"})," equals 2, the report type is cross-table."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["You can also use the constants of the ",(0,r.jsx)(n.em,{children:"QR Report Types"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"qr cross report"}),(0,r.jsx)(n.td,{children:"Longint"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"qr list report"}),(0,r.jsx)(n.td,{children:"Longint"}),(0,r.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"If you set a new type for an existing current report, it removes the previous settings and creates a new empty report, ready to be set."}),"\n",(0,r.jsxs)(n.p,{children:["If you pass an invalid ",(0,r.jsx)(n.em,{children:"area"})," number, the error -9850 will be generated.",(0,r.jsx)(n.br,{}),"\nIf you pass an invalid ",(0,r.jsx)(n.em,{children:"type"})," value, the error -9852 will be generated."]}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/commands/qr-get-report-kind",children:"QR Get report kind"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(296540);const s={},d=r.createContext(s);function i(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);