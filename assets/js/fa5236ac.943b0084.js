"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[30438],{862457:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var r=t(474848),s=t(28453);const i={id:"wp-table-insert-rows",title:"WP Table insert rows",slug:"/WritePro/commands/wp-table-insert-rows",displayed_sidebar:"docs"},o=void 0,l={id:"WritePro/commands-legacy/wp-table-insert-rows",title:"WP Table insert rows",description:"WP Table insert rows ( targetObj | {tableRef ; rowNumber} {; numRows} )  -> Function result",source:"@site/versioned_docs/version-20-R7/WritePro/commands-legacy/wp-table-insert-rows.md",sourceDirName:"WritePro/commands-legacy",slug:"/WritePro/commands/wp-table-insert-rows",permalink:"/docs/WritePro/commands/wp-table-insert-rows",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-table-insert-rows.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"wp-table-insert-rows",title:"WP Table insert rows",slug:"/WritePro/commands/wp-table-insert-rows",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"WP Table insert columns",permalink:"/docs/WritePro/commands/wp-table-insert-columns"},next:{title:"WP TABLE MERGE CELLS",permalink:"/docs/WritePro/commands/wp-table-merge-cells"}},d={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function c(e){const n={a:"a",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WP Table insert rows"})," ( targetObj | {",(0,r.jsx)(n.em,{children:"tableRef"})," ; ",(0,r.jsx)(n.em,{children:"rowNumber"}),"} {; ",(0,r.jsx)(n.em,{children:"numRows"}),"} )  -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"targetObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Range or element or 4D Write Pro document"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tableRef"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Table reference"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rowNumber"}),(0,r.jsx)(n.td,{children:"Longint"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Row index number"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"numRows"}),(0,r.jsx)(n.td,{children:"Longint"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Number of rows to insert (default value = 1)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Range of table rows"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"WP Table insert rows"})," command inserts one or several row(s) into a 4D Write Pro table."]}),"\n",(0,r.jsx)(n.p,{children:"This command supports two syntaxes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If you pass a targetObj as the first parameter, the command will insert the row(s) in the first table intersecting the target. ",(0,r.jsx)(n.em,{children:"targetObj"})," can contain:\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"a range, or"}),"\n",(0,r.jsx)(n.li,{children:"an element (row / paragraph / body / header / footer / inline picture / section / subsection), or"}),"\n",(0,r.jsx)(n.li,{children:"a 4D Write Pro document."}),"\n"]}),"\nIf ",(0,r.jsx)(n.em,{children:"targetObj"})," does not intersect with a table or text range where rows can be inserted, the command does nothing and returns Null (no error is generated)."]}),"\n",(0,r.jsxs)(n.li,{children:["If you pass both a ",(0,r.jsx)(n.em,{children:"tableRef"})," and a ",(0,r.jsx)(n.em,{children:"rowNumber"})," as parameters, the command will insert the row(s) in the designated table and at the specified row index. If the rowNumber is higher than the number of rows in ",(0,r.jsx)(n.em,{children:"tableRef"}),", the rows are appended to the table rather than inserted."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The optional ",(0,r.jsx)(n.em,{children:"numRows"})," parameter defines the number of rows to insert into ",(0,r.jsx)(n.em,{children:"targetObj"})," or ",(0,r.jsx)(n.em,{children:"tableRef"}),". By default, if this parameter is omitted, one row is inserted."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Result"})}),"\n",(0,r.jsx)(n.p,{children:"The command returns a row range representing inserted row(s), or Null if nothing was inserted."}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["You want to insert two rows at the end of the ",(0,r.jsx)(n.em,{children:"Invoice"})," table:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $row : Object\n\xa0var $table;$row : Object\n\xa0var $rowNum : Integer\n\xa0\n\xa0$table:=WP Get element by ID(WParea;"Invoice")\xa0//retrieve "Invoice" table\n\xa0\n\xa0If($table#Null)\n\xa0\xa0\xa0\xa0$rowNum:=$table.rowCount+1\xa0//add 1 to last row to designate where to insert rows\n\xa0\xa0\xa0\xa0$row:=WP Table insert rows($table;$rowNum;2)\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.p,{children:"will insert the two new rows at the correct location:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(119993).A+"",width:"826",height:"434"})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/WritePro/commands/wp-table-insert-columns",children:"WP Table insert columns"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},119993:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/pict4680266.en-262689e127dc7b61f151a8b638b6c043.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(296540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);