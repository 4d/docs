"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76694],{519733:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>l});var d=r(474848),o=r(28453);const s={id:"modified-record",title:"Modified record",slug:"/commands/modified-record",displayed_sidebar:"docs"},i=void 0,t={id:"commands-legacy/modified-record",title:"Modified record",description:"Modified record {( aTable )} -> Function result",source:"@site/versioned_docs/version-20-R7/commands-legacy/modified-record.md",sourceDirName:"commands-legacy",slug:"/commands/modified-record",permalink:"/docs/commands/modified-record",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmodified-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"modified-record",title:"Modified record",slug:"/commands/modified-record",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Is record loaded",permalink:"/docs/commands/is-record-loaded"},next:{title:"POP RECORD",permalink:"/docs/commands/pop-record"}},c={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Modified record"})," {( ",(0,d.jsx)(n.em,{children:"aTable"})," )} -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"aTable"}),(0,d.jsx)(n.td,{children:"Table"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Table to test if current record has been modified, or Default table, if omitted"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Function result"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Record has been modified (True), or Record has not been modified (False)"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Modified record"})," returns True if the current record of ",(0,d.jsx)(n.em,{children:"aTable"})," has been modified but not saved; otherwise it returns False. This function allows the designer to quickly test whether or not the record needs to be saved. It is especially valuable in input forms to check whether or not to save the current record before proceeding to the next one. This function always returns True for a new record."]}),"\n",(0,d.jsx)(n.p,{children:"Note that this function always returns True in the following contexts:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"the current record is a new record,"}),"\n",(0,d.jsxs)(n.li,{children:["after the execution of the ",(0,d.jsx)(n.a,{href:"/docs/commands/push-record",children:"PUSH RECORD"})," and ",(0,d.jsx)(n.a,{href:"/docs/commands/pop-record",children:"POP RECORD"})," commands,"]}),"\n",(0,d.jsxs)(n.li,{children:["as soon as a value has been assigned to a field of the record, even if it is the same value as the former one. For example, ",(0,d.jsx)(n.strong,{children:"Modified record"})," returns True after the following statement is executed:"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0[Table_1]Field_1:=[Table_1]Field_1  \n"})}),"\n",(0,d.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,d.jsxs)(n.p,{children:["The following example shows a typical use for ",(0,d.jsx)(n.strong,{children:"Modified record"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0If(Modified record([Customers]))\n\xa0\xa0\xa0\xa0SAVE RECORD([Customers])\n\xa0End if\n"})}),"\n",(0,d.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/commands/modified",children:"Modified"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/commands/old",children:"Old"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/commands/save-record",children:"SAVE RECORD"})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>t});var d=r(296540);const o={},s=d.createContext(o);function i(e){const n=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);