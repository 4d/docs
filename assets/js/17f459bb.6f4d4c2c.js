"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[38195],{441064:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>r,contentTitle:()=>t,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var l=d(474848),s=d(28453);const i={id:"field-name",title:"Field name",slug:"/commands/field-name",displayed_sidebar:"docs"},t=void 0,a={id:"commands-legacy/field-name",title:"Field name",description:"Field name ( fieldPtr | tableNum {; fieldNum} ) -> Function result",source:"@site/versioned_docs/version-20-R7/commands-legacy/field-name.md",sourceDirName:"commands-legacy",slug:"/commands/field-name",permalink:"/docs/commands/field-name",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffield-name.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"field-name",title:"Field name",slug:"/commands/field-name",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Field",permalink:"/docs/commands/field"},next:{title:"Get external data path",permalink:"/docs/commands/get-external-data-path"}},r={},c=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"See also",id:"see-also",level:4}];function o(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Field name"})," ( fieldPtr | tableNum {; ",(0,l.jsx)(n.em,{children:"fieldNum"}),"} ) -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameter"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fieldPtr | tableNum"}),(0,l.jsx)(n.td,{children:"Pointer, Longint"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Field pointer or Table number"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"fieldNum"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Field number if a table number is passed as first parameter"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Function result"}),(0,l.jsx)(n.td,{children:"String"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Name of the field"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["The Field name command returns the name of the field whose pointer you pass in ",(0,l.jsx)(n.em,{children:"fieldPtr"})," or whose table and field number you pass in ",(0,l.jsx)(n.em,{children:"tableNum"})," and ",(0,l.jsx)(n.em,{children:"fieldNum"}),"."]}),"\n",(0,l.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,l.jsx)(n.p,{children:"This example sets the second element of the array FieldArray{1} to the name of the second field in the first table. FieldArray is a two-dimensional array:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0FieldArray{1}{2}:=Field name(1;2)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,l.jsxs)(n.p,{children:["This example sets the second element of the array FieldArray{1} to the name of the field ",(0,l.jsx)(n.em,{children:"[MyTable]MyField"}),". FieldArray is a two-dimensional array:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0FieldArray{1}{2}:=Field name(->[MyTable]MyField)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,l.jsx)(n.p,{children:"This example displays an alert. This method passes a pointer to a field:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0ALERT("The ID number for the field "+Field name($1)+" in the table "+Table name(Table($1))+" has to be longer than five characters.")\n'})}),"\n",(0,l.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/commands/field",children:"Field"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/commands/last-field-number",children:"Last field number"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/commands/table-name",children:"Table name"})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>t,x:()=>a});var l=d(296540);const s={},i=l.createContext(s);function t(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);