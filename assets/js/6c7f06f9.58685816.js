"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["27763"],{494164:function(e,n,l){l.r(n),l.d(n,{default:()=>o,frontMatter:()=>a,metadata:()=>t,assets:()=>i,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/table","title":"Table","description":"Table ( tableNum ) IntegerTable ( fieldPtr ) : Integer","source":"@site/versioned_docs/version-20-R8/commands-legacy/table.md","sourceDirName":"commands-legacy","slug":"/commands/table","permalink":"/docs/20-R8/commands/table","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftable.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"table","title":"Table","slug":"/commands/table","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET INDEX","permalink":"/docs/20-R8/commands/set-index"},"next":{"title":"Table name","permalink":"/docs/20-R8/commands/table-name"}}'),s=l("785893"),r=l("250065");let a={id:"table",title:"Table",slug:"/commands/table",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"Example 4",id:"example-4",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Table"})," ( ",(0,s.jsx)(n.em,{children:"tableNum"})," ) : Pointer",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:"Table"})," ( ",(0,s.jsx)(n.em,{children:"tablePtr"})," ) : Integer",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:"Table"})," ( ",(0,s.jsx)(n.em,{children:"fieldPtr"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tableNum"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Table number"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tablePtr"}),(0,s.jsx)(n.td,{children:"Pointer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Table pointer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fieldPtr"}),(0,s.jsx)(n.td,{children:"Pointer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Field pointer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsxs)(n.td,{children:["Table pointer, if a Table number is passed",(0,s.jsx)(n.br,{}),"Table number if a Table pointer or a Field pointer is passed"]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"The Table command has three forms:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If you pass a table number in ",(0,s.jsx)(n.em,{children:"tableNum"}),", Table returns a pointer to the table."]}),"\n",(0,s.jsxs)(n.li,{children:["If you pass a table pointer in ",(0,s.jsx)(n.em,{children:"aPtr"}),", Table returns the table number of the table."]}),"\n",(0,s.jsxs)(n.li,{children:["If you pass a field pointer in ",(0,s.jsx)(n.em,{children:"aPtr"}),", Table returns the table number of the field."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsxs)(n.p,{children:["This example sets the ",(0,s.jsx)(n.em,{children:"tablePtr"})," variable to a pointer to the third table of the database:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0TablePtr:=Table(3)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsxs)(n.p,{children:["Passing ",(0,s.jsx)(n.em,{children:"tablePtr"})," (a pointer to the third table) to Table returns the number 3. The following line sets ",(0,s.jsx)(n.em,{children:"TableNum"})," to 3:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0TableNum:=Table(TablePtr)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsxs)(n.p,{children:["This example sets the ",(0,s.jsx)(n.em,{children:"tableNum"})," variable to the table number of ",(0,s.jsx)(n.em,{children:"[Table3]"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0TableNum:=Table(->[Table3])\n"})}),"\n",(0,s.jsx)(n.h2,{id:"example-4",children:"Example 4"}),"\n",(0,s.jsxs)(n.p,{children:["This example sets the ",(0,s.jsx)(n.em,{children:"tableNum"})," variable to the table number of the table to which the ",(0,s.jsx)(n.em,{children:"[Table3]Field1"})," field belongs:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0TableNum:=Table(->[Table3]Field1)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/field",children:"Field"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/last-table-number",children:"Last table number"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/table-name",children:"Table name"})]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"252"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return d},a:function(){return a}});var t=l(667294);let s={},r=t.createContext(s);function a(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);