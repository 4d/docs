"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83615],{82343:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=t(474848),s=t(28453);const l={id:"wp-table-delete-columns",title:"WP TABLE DELETE COLUMNS",slug:"/WritePro/commands/wp-table-delete-columns",displayed_sidebar:"docs"},o=void 0,i={id:"WritePro/commands-legacy/wp-table-delete-columns",title:"WP TABLE DELETE COLUMNS",description:"WP TABLE DELETE COLUMNS ( targetObj ) | ( tableRef ; colNumber {; numColumns} )",source:"@site/versioned_docs/version-20-R7/WritePro/commands-legacy/wp-table-delete-columns.md",sourceDirName:"WritePro/commands-legacy",slug:"/WritePro/commands/wp-table-delete-columns",permalink:"/docs/WritePro/commands/wp-table-delete-columns",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-table-delete-columns.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"wp-table-delete-columns",title:"WP TABLE DELETE COLUMNS",slug:"/WritePro/commands/wp-table-delete-columns",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"WP Table append row",permalink:"/docs/WritePro/commands/wp-table-append-row"},next:{title:"WP TABLE DELETE ROWS",permalink:"/docs/WritePro/commands/wp-table-delete-rows"}},d={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WP TABLE DELETE COLUMNS"})," ( ",(0,r.jsx)(n.em,{children:"targetObj"})," ) | ( ",(0,r.jsx)(n.em,{children:"tableRef"})," ; ",(0,r.jsx)(n.em,{children:"colNumber"})," {; ",(0,r.jsx)(n.em,{children:"numColumns"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"targetObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Range or element or 4D Write Pro document"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tableRef"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Table reference"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"colNumber"}),(0,r.jsx)(n.td,{children:"Longint"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Column number"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"numColumns"}),(0,r.jsx)(n.td,{children:"Longint"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Number of columns to delete (default value = 1)"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"WP TABLE DELETE COLUMNS"})," command removes one or several column(s) from a 4D Write table."]}),"\n",(0,r.jsx)(n.p,{children:"This command supports two syntaxes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If you pass a targetObj as the first parameter, the command will remove all of the columns in table(s) intersecting the target. ",(0,r.jsx)(n.em,{children:"targetObj"})," can contain:\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"a range, or"}),"\n",(0,r.jsx)(n.li,{children:"an element (row / paragraph / body / header / footer / inline picture / section / subsection), or"}),"\n",(0,r.jsx)(n.li,{children:"a 4D Write Pro document."}),"\n"]}),"\nIf ",(0,r.jsx)(n.em,{children:"targetObj"})," intersects with several tables, touched columns in all tables are removed. If ",(0,r.jsx)(n.em,{children:"targetObj"})," does not intersect with a table, the command does nothing (no error is generated).",(0,r.jsx)(n.br,{}),"\nWith this syntax, the ",(0,r.jsx)(n.em,{children:"numColumns"})," parameter (if passed) is ignored."]}),"\n",(0,r.jsxs)(n.li,{children:["If you pass both a ",(0,r.jsx)(n.em,{children:"tableRef"})," and a ",(0,r.jsx)(n.em,{children:"colNumber"}),", the command will remove the column(s) in the designated table, starting at the specified column index.",(0,r.jsx)(n.br,{}),"\nWith this syntax, the optional ",(0,r.jsx)(n.em,{children:"numColumns"})," parameter defines the number of columns to remove from ",(0,r.jsx)(n.em,{children:"tableRef"}),". By default, if this parameter is omitted, one column is removed."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Removing all columns of a table will remove the entire table."}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["You want to delete one column from the ",(0,r.jsx)(n.em,{children:"Invoice"})," table. This code:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $table : Object\n\xa0\n\xa0$table:=WP Get element by ID(WParea;"Invoice")\xa0//retrieve "Invoice" table\n\xa0\n\xa0WP TABLE DELETE COLUMNS($table;2;1)\xa0//remove the second column\n'})}),"\n",(0,r.jsx)(n.p,{children:"Will remove the column from the correct location:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(12491).A+"",width:"637",height:"340"})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/WritePro/commands/wp-table-delete-rows",children:"WP TABLE DELETE ROWS"})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},12491:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/pict4680318.en-a7679717d9892311e032589745bc010d.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(296540);const s={},l=r.createContext(s);function o(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);