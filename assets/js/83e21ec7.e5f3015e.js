"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74841],{799337:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>d,metadata:()=>r,toc:()=>l});var t=s(474848),c=s(28453);const d={id:"cut-named-selection",title:"CUT NAMED SELECTION",slug:"/commands/cut-named-selection",displayed_sidebar:"docs"},o=void 0,r={id:"commands-legacy/cut-named-selection",title:"CUT NAMED SELECTION",description:"CUT NAMED SELECTION ( {aTable ;} name )",source:"@site/versioned_docs/version-20-R7/commands-legacy/cut-named-selection.md",sourceDirName:"commands-legacy",slug:"/commands/cut-named-selection",permalink:"/docs/commands/cut-named-selection",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcut-named-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"cut-named-selection",title:"CUT NAMED SELECTION",slug:"/commands/cut-named-selection",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"COPY NAMED SELECTION",permalink:"/docs/commands/copy-named-selection"},next:{title:"USE NAMED SELECTION",permalink:"/docs/commands/use-named-selection"}},i={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"CUT NAMED SELECTION"})," ( {",(0,t.jsx)(n.em,{children:"aTable"})," ;} ",(0,t.jsx)(n.em,{children:"name"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"aTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table from which to cut selection, or Default table, if omitted"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"name"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Name of the named selection to create"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"CUT NAMED SELECTION"})," creates a named selection ",(0,t.jsx)(n.em,{children:"name"})," and moves the current selection of ",(0,t.jsx)(n.em,{children:"aTable"})," to it. This command differs from ",(0,t.jsx)(n.a,{href:"/docs/commands/copy-named-selection",children:"COPY NAMED SELECTION"})," in that it does not copy the current selection, but moves the current selection of ",(0,t.jsx)(n.em,{children:"table"})," itself."]}),"\n",(0,t.jsxs)(n.p,{children:["After the command has been executed, the current selection of ",(0,t.jsx)(n.em,{children:"aTable"})," in the current process becomes empty. Therefore, ",(0,t.jsx)(n.strong,{children:"CUT NAMED SELECTION"})," should not be used while a record is being modified."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"CUT NAMED SELECTION"})," is more memory efficient than ",(0,t.jsx)(n.a,{href:"/docs/commands/copy-named-selection",children:"COPY NAMED SELECTION"}),". With ",(0,t.jsx)(n.a,{href:"/docs/commands/copy-named-selection",children:"COPY NAMED SELECTION"}),", 4 bytes times the number of selected records is duplicated in memory. With ",(0,t.jsx)(n.strong,{children:"CUT NAMED SELECTION"}),", only the reference to the list is moved."]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["The following method empties the current selection of a table ",(0,t.jsx)(n.em,{children:"[Customers]"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0CUT NAMED SELECTION([Customers];"ToBeCleared")\n\xa0CLEAR NAMED SELECTION("ToBeCleared")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/clear-named-selection",children:"CLEAR NAMED SELECTION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/copy-named-selection",children:"COPY NAMED SELECTION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/use-named-selection",children:"USE NAMED SELECTION"})]})]})}function m(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var t=s(296540);const c={},d=t.createContext(c);function o(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);