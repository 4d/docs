"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92576],{646689:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>l});var t=s(474848),a=s(28453);const d={id:"pause-indexes",title:"PAUSE INDEXES",slug:"/commands/pause-indexes",displayed_sidebar:"docs"},i=void 0,r={id:"commands-legacy/pause-indexes",title:"PAUSE INDEXES",description:"PAUSE INDEXES ( aTable )",source:"@site/versioned_docs/version-20-R7/commands-legacy/pause-indexes.md",sourceDirName:"commands-legacy",slug:"/commands/pause-indexes",permalink:"/docs/commands/pause-indexes",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpause-indexes.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"pause-indexes",title:"PAUSE INDEXES",slug:"/commands/pause-indexes",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Last table number",permalink:"/docs/commands/last-table-number"},next:{title:"REGENERATE MISSING TABLE",permalink:"/docs/commands/regenerate-missing-table"}},o={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"PAUSE INDEXES"})," ( ",(0,t.jsx)(n.em,{children:"aTable"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"aTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table for which to pause indexes"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"PAUSE INDEXES"})," command temporarily disables all the indexes of ",(0,t.jsx)(n.em,{children:"aTable"}),", except for the index of the primary key."]}),"\n",(0,t.jsxs)(n.p,{children:["The indexes are not physically deleted from the data (.4DIndx file) or the structure of the database (_USER_INDEXES, see ",(0,t.jsx)(n.em,{children:"System Tables"}),"), but they are rendered invalid and are thus no longer updated. When indexes are disabled, all the operations performed on ",(0,t.jsx)(n.em,{children:"aTable"})," (queries, sorts, record additions, modifications and deletions) no longer use the indexes."]}),"\n",(0,t.jsx)(n.p,{children:"This command is mainly useful when you are importing or modifying large amounts of data in tables that have several indexes. Since 4D must update the indexes each time a record is validated, the operation could take a considerable amount of time. Disabling the indexes beforehand can significantly speed up the operation."}),"\n",(0,t.jsxs)(n.p,{children:["To resume the indexes after the operation is over, you can just call the ",(0,t.jsx)(n.a,{href:"/docs/commands/resume-indexes",children:"RESUME INDEXES"})," command for ",(0,t.jsx)(n.em,{children:"aTable"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," You can obtain a similar result by using the ",(0,t.jsx)(n.a,{href:"/docs/commands/create-index",children:"CREATE INDEX"})," and ",(0,t.jsx)(n.a,{href:"/docs/commands/delete-index",children:"DELETE INDEX"})," commands, but with notable differences:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["it is necessary to call ",(0,t.jsx)(n.a,{href:"/docs/commands/delete-index",children:"DELETE INDEX"})," / ",(0,t.jsx)(n.a,{href:"/docs/commands/create-index",children:"CREATE INDEX"})," for each index in ",(0,t.jsx)(n.em,{children:"aTable"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["calling the ",(0,t.jsx)(n.a,{href:"/docs/commands/delete-index",children:"DELETE INDEX"})," / ",(0,t.jsx)(n.a,{href:"/docs/commands/create-index",children:"CREATE INDEX"})," commands change the internal number of the index, which is not the case with ",(0,t.jsx)(n.strong,{children:"PAUSE INDEXES"})," / ",(0,t.jsx)(n.a,{href:"/docs/commands/resume-indexes",children:"RESUME INDEXES"}),". Changing the index number will generate an automatic reindexing of the data if the dataset changes."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If you call the ",(0,t.jsx)(n.strong,{children:"PAUSE INDEXES"})," command for a table and then quit the database without having called the ",(0,t.jsx)(n.a,{href:"/docs/commands/resume-indexes",children:"RESUME INDEXES"})," command for this table, all this table\u2019s indexes are automatically rebuilt when the database is restarted."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," This command cannot be executed from a 4D remote."]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"Example of method for importing large amounts of data:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0PAUSE INDEXES([Articles])\n\xa0IMPORT DATA("HugeImport.txt")\xa0//Importing\n\xa0RESUME INDEXES([Articles])\n'})}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/delete-index",children:"DELETE INDEX"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/resume-indexes",children:"RESUME INDEXES"})]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>r});var t=s(296540);const a={},d=t.createContext(a);function i(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);