"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10641],{753129:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=t(474848),s=t(28453);const a={id:"copy-array",title:"COPY ARRAY",slug:"/commands/copy-array",displayed_sidebar:"docs"},o=void 0,c={id:"commands-legacy/copy-array",title:"COPY ARRAY",description:"COPY ARRAY ( source ; destination )",source:"@site/versioned_docs/version-20-R7/commands-legacy/copy-array.md",sourceDirName:"commands-legacy",slug:"/commands/copy-array",permalink:"/docs/commands/copy-array",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcopy-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"copy-array",title:"COPY ARRAY",slug:"/commands/copy-array",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"BOOLEAN ARRAY FROM SET",permalink:"/docs/commands/boolean-array-from-set"},next:{title:"Count in array",permalink:"/docs/commands/count-in-array"}},i={},d=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4}];function l(e){const n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"COPY ARRAY"})," ( ",(0,r.jsx)(n.em,{children:"source"})," ; ",(0,r.jsx)(n.em,{children:"destination"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"source"}),(0,r.jsx)(n.td,{children:"Array"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Array from which to copy"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"destination"}),(0,r.jsx)(n.td,{children:"Array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Array to which to copy"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The COPY ARRAY command creates or overwrites the destination array ",(0,r.jsx)(n.em,{children:"destination"})," with the exact contents, size, and type of the source array ",(0,r.jsx)(n.em,{children:"source"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," In case of numeric arrays of different types, the type of the ",(0,r.jsx)(n.em,{children:"destination"})," array is kept."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"source"})," and ",(0,r.jsx)(n.em,{children:"destination"})," arrays can be local, process, or interprocess arrays. When copying arrays, the scope of the array does not matter."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In compiled mode, the ",(0,r.jsx)(n.em,{children:"destination"})," array must be of the same type as the ",(0,r.jsx)(n.em,{children:"source"})," array. Thus, it is recommended to always use arrays of the same type to have similar behavior in interpreted and compiled modes."]}),"\n",(0,r.jsxs)(n.li,{children:["When you copy object arrays, only references to the objects that they contain are duplicated, and not objects themselves. It means that any modification done on an object in an array will be applied to all existing instances of the object in copied arrays. If you need to duplicate objects, you must use the ",(0,r.jsx)(n.a,{href:"/docs/commands/ob-copy",children:"OB Copy"})," command."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"The following example fills the array named C. It then creates a new array, named D, of the same size as C and with the same contents:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ALL RECORDS([People])\xa0// Select all records in People\n\xa0SELECTION TO ARRAY([People]Company;C)\xa0// Move company field data into array C\n\xa0COPY ARRAY(C;D)\xa0// Copy the array C to the array D\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(296540);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);