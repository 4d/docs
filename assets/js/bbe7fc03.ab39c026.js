"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80017],{78522:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=s(474848),t=s(28453);const i={id:"qr-set-info-row",title:"QR SET INFO ROW",slug:"/commands/qr-set-info-row",displayed_sidebar:"docs"},d=void 0,o={id:"commands-legacy/qr-set-info-row",title:"QR SET INFO ROW",description:"QR SET INFO ROW ( area ; row ; hide )",source:"@site/versioned_docs/version-20-R7/commands-legacy/qr-set-info-row.md",sourceDirName:"commands-legacy",slug:"/commands/qr-set-info-row",permalink:"/docs/commands/qr-set-info-row",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-set-info-row.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"qr-set-info-row",title:"QR SET INFO ROW",slug:"/commands/qr-set-info-row",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"QR SET INFO COLUMN",permalink:"/docs/commands/qr-set-info-column"},next:{title:"QR SET REPORT KIND",permalink:"/docs/commands/qr-set-report-kind"}},l={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"QR SET INFO ROW"})," ( ",(0,r.jsx)(n.em,{children:"area"})," ; ",(0,r.jsx)(n.em,{children:"row"})," ; ",(0,r.jsx)(n.em,{children:"hide"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"area"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Reference of the area created"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"row"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Row designator"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hide"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"0 = displayed, 1 = hidden"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"QR SET INFO ROW"})," command shows/hides the row whose reference was passed in ",(0,r.jsx)(n.em,{children:"row"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"row"})," designates which row is affected. You can pass either:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"a positive integer value to designate the corresponding subtotal (break) level,"}),"\n",(0,r.jsxs)(n.li,{children:["one of the following constants from the ",(0,r.jsx)(n.em,{children:"QR Rows for Properties"})," theme:",(0,r.jsx)(n.br,{}),"\n| Constant       | Type    | Value | Comment               |",(0,r.jsx)(n.br,{}),"\n| -------------- | ------- | ----- | --------------------- |",(0,r.jsx)(n.br,{}),"\n| qr detail      | Longint | -2   | Detail area of report |",(0,r.jsx)(n.br,{}),"\n| qr grand total | Longint | -3   | Grand total area      |",(0,r.jsx)(n.br,{}),"\n| qr title       | Longint | -1   | Title of report       |"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"hide"})," specifies whether the line is shown or hidden:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.em,{children:"hide"})," is 1, the row is hidden;"]}),"\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.em,{children:"hide"})," is 0, the row is shown."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If you pass an invalid ",(0,r.jsx)(n.em,{children:"area"})," number, the error -9850 will be generated.",(0,r.jsx)(n.br,{}),"\nIf you pass an invalid ",(0,r.jsx)(n.em,{children:"row"})," value, the error -9852 will be generated."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"The following statement hides the detail row:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0QR SET INFO ROW(area;qr detail;1)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/qr-get-info-column",children:"QR GET INFO COLUMN"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/qr-get-info-row",children:"QR Get info row"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/qr-set-info-column",children:"QR SET INFO COLUMN"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>o});var r=s(296540);const t={},i=r.createContext(t);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);