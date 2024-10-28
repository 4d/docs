"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58377],{577732:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>m,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var s=t(474848),i=t(28453);const d={id:"is-field-number-valid",title:"Is field number valid",slug:"/commands/is-field-number-valid",displayed_sidebar:"docs"},r=void 0,l={id:"commands-legacy/is-field-number-valid",title:"Is field number valid",description:"Is field number valid ( tableNum\xa0|\xa0tablePtr ; fieldNum ) -> Function result",source:"@site/versioned_docs/version-20-R7/commands-legacy/is-field-number-valid.md",sourceDirName:"commands-legacy",slug:"/commands/is-field-number-valid",permalink:"/docs/commands/is-field-number-valid",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-field-number-valid.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"is-field-number-valid",title:"Is field number valid",slug:"/commands/is-field-number-valid",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"IMPORT STRUCTURE",permalink:"/docs/commands/import-structure"},next:{title:"Is table number valid",permalink:"/docs/commands/is-table-number-valid"}},a={},o=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4}];function c(e){const n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Is field number valid"})," ( tableNum\xa0|\xa0tablePtr ; ",(0,s.jsx)(n.em,{children:"fieldNum"})," ) -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tableNum\xa0|\xa0tablePtr"}),(0,s.jsx)(n.td,{children:"Longint, Pointer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Table number or Pointer to table"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fieldNum"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Field number"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"True = field exists in the table False = field does not exist in the table"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The Is field number valid command returns True if the field whose number is passed in the ",(0,s.jsx)(n.em,{children:"fieldNum"})," parameter exists in the table whose number or pointer is passed in the ",(0,s.jsx)(n.em,{children:"tableNum"})," or ",(0,s.jsx)(n.em,{children:"tablePtr"})," parameter. If the field does not exist, the command returns False. Keep in mind that the command returns False if the table containing the field is in the Trash of the Explorer."]}),"\n",(0,s.jsx)(n.p,{children:"This command can be used to detect any field deletions, which create gaps in the sequence of field numbers."}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/last-table-number",children:"Last table number"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/is-table-number-valid",children:"Is table number valid"})]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(296540);const i={},d=s.createContext(i);function r(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);