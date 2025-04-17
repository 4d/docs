"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33774"],{591506:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-table-delete-columns","title":"WP TABLE DELETE COLUMNS","description":"WP TABLE DELETE COLUMNS ( targetObj ) | ( tableRef ; colNumber {; numColumns} )","source":"@site/versioned_docs/version-20-R8/WritePro/commands-legacy/wp-table-delete-columns.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-table-delete-columns","permalink":"/docs/20-R8/WritePro/commands/wp-table-delete-columns","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-table-delete-columns.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-table-delete-columns","title":"WP TABLE DELETE COLUMNS","slug":"/WritePro/commands/wp-table-delete-columns","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Table append row","permalink":"/docs/20-R8/WritePro/commands/wp-table-append-row"},"next":{"title":"WP TABLE DELETE ROWS","permalink":"/docs/20-R8/WritePro/commands/wp-table-delete-rows"}}'),l=t("785893"),s=t("250065");let i={id:"wp-table-delete-columns",title:"WP TABLE DELETE COLUMNS",slug:"/WritePro/commands/wp-table-delete-columns",displayed_sidebar:"docs"},o=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"WP TABLE DELETE COLUMNS"})," ( ",(0,l.jsx)(n.em,{children:"targetObj"})," ) | ( ",(0,l.jsx)(n.em,{children:"tableRef"})," ; ",(0,l.jsx)(n.em,{children:"colNumber"})," {; ",(0,l.jsx)(n.em,{children:"numColumns"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameter"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"targetObj"}),(0,l.jsx)(n.td,{children:"Object"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Range or element or 4D Write Pro document"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"tableRef"}),(0,l.jsx)(n.td,{children:"Object"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Table reference"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"colNumber"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Column number"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"numColumns"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Number of columns to delete (default value = 1)"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.strong,{children:"WP TABLE DELETE COLUMNS"})," command removes one or several column(s) from a 4D Write table."]}),"\n",(0,l.jsx)(n.p,{children:"This command supports two syntaxes:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["If you pass a targetObj as the first parameter, the command will remove all of the columns in table(s) intersecting the target. ",(0,l.jsx)(n.em,{children:"targetObj"})," can contain:\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"a range, or"}),"\n",(0,l.jsx)(n.li,{children:"an element (row / paragraph / body / header / footer / inline picture / section / subsection), or"}),"\n",(0,l.jsx)(n.li,{children:"a 4D Write Pro document."}),"\n"]}),"\nIf ",(0,l.jsx)(n.em,{children:"targetObj"})," intersects with several tables, touched columns in all tables are removed. If ",(0,l.jsx)(n.em,{children:"targetObj"})," does not intersect with a table, the command does nothing (no error is generated).",(0,l.jsx)(n.br,{}),"\nWith this syntax, the ",(0,l.jsx)(n.em,{children:"numColumns"})," parameter (if passed) is ignored."]}),"\n",(0,l.jsxs)(n.li,{children:["If you pass both a ",(0,l.jsx)(n.em,{children:"tableRef"})," and a ",(0,l.jsx)(n.em,{children:"colNumber"}),", the command will remove the column(s) in the designated table, starting at the specified column index.",(0,l.jsx)(n.br,{}),"\nWith this syntax, the optional ",(0,l.jsx)(n.em,{children:"numColumns"})," parameter defines the number of columns to remove from ",(0,l.jsx)(n.em,{children:"tableRef"}),". By default, if this parameter is omitted, one column is removed."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Removing all columns of a table will remove the entire table."}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(n.p,{children:["You want to delete one column from the ",(0,l.jsx)(n.em,{children:"Invoice"})," table. This code:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0var $table : Object\n\xa0\n\xa0$table:=WP Get element by ID(WParea;"Invoice")\xa0//retrieve "Invoice" table\n\xa0\n\xa0WP TABLE DELETE COLUMNS($table;2;1)\xa0//remove the second column\n'})}),"\n",(0,l.jsx)(n.p,{children:"Will remove the column from the correct location:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:t(267850).Z+"",width:"637",height:"340"})}),"\n",(0,l.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/20-R8/WritePro/commands/wp-table-delete-rows",children:"WP TABLE DELETE ROWS"})})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},267850:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict4680318.en-a7679717d9892311e032589745bc010d.png"},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var r=t(667294);let l={},s=r.createContext(l);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);