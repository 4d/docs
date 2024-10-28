"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[72430],{343070:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var t=l(474848),s=l(28453);const a={id:"table",title:"Table",slug:"/commands/table",displayed_sidebar:"docs"},r=void 0,i={id:"commands-legacy/table",title:"Table",description:"Table ( tableNum\xa0|\xa0aPtr ) -> Function result",source:"@site/versioned_docs/version-20-R7/commands-legacy/table.md",sourceDirName:"commands-legacy",slug:"/commands/table",permalink:"/docs/commands/table",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftable.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"table",title:"Table",slug:"/commands/table",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SET INDEX",permalink:"/docs/commands/set-index"},next:{title:"Table name",permalink:"/docs/commands/table-name"}},d={},c=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"See also",id:"see-also",level:4}];function o(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Table"})," ( tableNum\xa0|\xa0aPtr ) -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tableNum\xa0|\xa0aPtr"}),(0,t.jsx)(n.td,{children:"Longint, Pointer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table number, or Table pointer, or Field pointer"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Function result"}),(0,t.jsx)(n.td,{children:"Longint, Pointer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Table pointer, if a Table number is passedTable number, if a Table pointer is passedTable number, if a Field pointer is passed"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"The Table command has three forms:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you pass a table number in ",(0,t.jsx)(n.em,{children:"tableNum"}),", Table returns a pointer to the table."]}),"\n",(0,t.jsxs)(n.li,{children:["If you pass a table pointer in ",(0,t.jsx)(n.em,{children:"aPtr"}),", Table returns the table number of the table."]}),"\n",(0,t.jsxs)(n.li,{children:["If you pass a field pointer in ",(0,t.jsx)(n.em,{children:"aPtr"}),", Table returns the table number of the field."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsxs)(n.p,{children:["This example sets the ",(0,t.jsx)(n.em,{children:"tablePtr"})," variable to a pointer to the third table of the database:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0TablePtr:=Table(3)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsxs)(n.p,{children:["Passing ",(0,t.jsx)(n.em,{children:"tablePtr"})," (a pointer to the third table) to Table returns the number 3. The following line sets ",(0,t.jsx)(n.em,{children:"TableNum"})," to 3:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0TableNum:=Table(TablePtr)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,t.jsxs)(n.p,{children:["This example sets the ",(0,t.jsx)(n.em,{children:"tableNum"})," variable to the table number of ",(0,t.jsx)(n.em,{children:"[Table3]"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0TableNum:=Table(->[Table3])\n"})}),"\n",(0,t.jsx)(n.h4,{id:"example-4",children:"Example 4"}),"\n",(0,t.jsxs)(n.p,{children:["This example sets the ",(0,t.jsx)(n.em,{children:"tableNum"})," variable to the table number of the table to which the ",(0,t.jsx)(n.em,{children:"[Table3]Field1"})," field belongs:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0TableNum:=Table(->[Table3]Field1)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/field",children:"Field"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/last-table-number",children:"Last table number"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/table-name",children:"Table name"})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>r,x:()=>i});var t=l(296540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);