"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75985],{592722:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=n(474848),s=n(28453);const o={id:"boolean-array-from-set",title:"BOOLEAN ARRAY FROM SET",slug:"/commands/boolean-array-from-set",displayed_sidebar:"docs"},a=void 0,i={id:"commands-legacy/boolean-array-from-set",title:"BOOLEAN ARRAY FROM SET",description:"BOOLEAN ARRAY FROM SET ( booleanArr {; set} )",source:"@site/versioned_docs/version-20-R7/commands-legacy/boolean-array-from-set.md",sourceDirName:"commands-legacy",slug:"/commands/boolean-array-from-set",permalink:"/docs/commands/boolean-array-from-set",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fboolean-array-from-set.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"boolean-array-from-set",title:"BOOLEAN ARRAY FROM SET",slug:"/commands/boolean-array-from-set",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"ARRAY TO SELECTION",permalink:"/docs/commands/array-to-selection"},next:{title:"COPY ARRAY",permalink:"/docs/commands/copy-array"}},d={},c=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4}];function l(e){const r={a:"a",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"BOOLEAN ARRAY FROM SET"})," ( ",(0,t.jsx)(r.em,{children:"booleanArr"})," {; ",(0,t.jsx)(r.em,{children:"set"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"booleanArr"}),(0,t.jsx)(r.td,{children:"Boolean array"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Array to indicate if a record is in the set or not"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"set"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Name of the set or UserSet if this parameter is omitted"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:["The BOOLEAN ARRAY FROM SET command fills an array of Booleans indicating if each record in the table is or is not in ",(0,t.jsx)(r.em,{children:"set"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"The elements in the array are ordered in the order in which the records are created in the table (absolute record numbers). If N is the number of records in the table, element 0 of the array corresponds to record number 0, element 1 of the array corresponds to record number 1, etc."}),"\n",(0,t.jsx)(r.p,{children:"Each element of the array is:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/docs/commands/true",title:"True",children:"True"})," if the corresponding record belongs to the set."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/docs/commands/false",title:"False",children:"False"})," if the corresponding record does not belong to the set."]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Warning:"})," The total number of elements in the ",(0,t.jsx)(r.em,{children:"booleanArr"})," array is not significant. For structural reasons, this number can be different from the number of records actually present in the table. Possible extra elements are set to ",(0,t.jsx)(r.a,{href:"/docs/commands/false",children:"False"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["If you don\u2019t pass the ",(0,t.jsx)(r.em,{children:"set"})," parameter, the command will use UserSet in the current process."]}),"\n",(0,t.jsx)(r.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/commands/create-set-from-array",children:"CREATE SET FROM ARRAY"})})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>i});var t=n(296540);const s={},o=t.createContext(s);function a(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);