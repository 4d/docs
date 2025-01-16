"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8026"],{697720:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>d,toc:()=>a,contentTitle:()=>o});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-table-delete-rows","title":"WP TABLE DELETE ROWS","description":"WP TABLE DELETE ROWS ( targetObj ) | ( tableRef ; rowNumber {; numRows} )","source":"@site/versioned_docs/version-20-R8/WritePro/commands-legacy/wp-table-delete-rows.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-table-delete-rows","permalink":"/docs/WritePro/commands/wp-table-delete-rows","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-table-delete-rows.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-table-delete-rows","title":"WP TABLE DELETE ROWS","slug":"/WritePro/commands/wp-table-delete-rows","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP TABLE DELETE COLUMNS","permalink":"/docs/WritePro/commands/wp-table-delete-columns"},"next":{"title":"WP Table get cells","permalink":"/docs/WritePro/commands/wp-table-get-cells"}}'),s=n("785893"),l=n("250065");let i={id:"wp-table-delete-rows",title:"WP TABLE DELETE ROWS",slug:"/WritePro/commands/wp-table-delete-rows",displayed_sidebar:"docs"},o=void 0,d={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function c(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"WP TABLE DELETE ROWS"})," ( ",(0,s.jsx)(t.em,{children:"targetObj"})," ) | ( ",(0,s.jsx)(t.em,{children:"tableRef"})," ; ",(0,s.jsx)(t.em,{children:"rowNumber"})," {; ",(0,s.jsx)(t.em,{children:"numRows"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"targetObj"}),(0,s.jsx)(t.td,{children:"Object"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Range or element or 4D Write Pro document"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tableRef"}),(0,s.jsx)(t.td,{children:"Object"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Table reference"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"rowNumber"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Row index number"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"numRows"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Number of rows to delete (default value = 1)"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"WP TABLE DELETE ROWS"})," command removes one or several row(s) from a 4D Write Pro table."]}),"\n",(0,s.jsx)(t.p,{children:"This command supports two syntaxes:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["If you pass a targetObj as the first parameter, the command will remove all the rows in table(s) intersecting the target. ",(0,s.jsx)(t.em,{children:"targetObj"})," can contain:\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"a range, or"}),"\n",(0,s.jsx)(t.li,{children:"an element (row / paragraph / body / header / footer / inline picture / section / subsection), or"}),"\n",(0,s.jsx)(t.li,{children:"a 4D Write Pro document."}),"\n"]}),"\nIf ",(0,s.jsx)(t.em,{children:"targetObj"})," intersects with several tables, touched rows in all tables are removed. If ",(0,s.jsx)(t.em,{children:"targetObj"})," does not intersect with a table, the command does nothing (no error is generated).",(0,s.jsx)(t.br,{}),"\nWith this syntax, the ",(0,s.jsx)(t.em,{children:"numRows"})," parameter (if passed) is ignored."]}),"\n",(0,s.jsxs)(t.li,{children:["If you pass both a ",(0,s.jsx)(t.em,{children:"tableRef"})," and a ",(0,s.jsx)(t.em,{children:"rowNumber"}),", the command will remove the row(s) in the designated table, starting at the specified row index number.",(0,s.jsx)(t.br,{}),"\nWith this syntax, the optional ",(0,s.jsx)(t.em,{children:"numRows"})," parameter defines the number of rows to remove from ",(0,s.jsx)(t.em,{children:"tableRef"}),". By default, if this parameter is omitted, one row is removed."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Removing all rows of a table will remove the entire table."}),"\n",(0,s.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.p,{children:["You want to delete two rows from the ",(0,s.jsx)(t.em,{children:"Invoice"})," table. This code:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0var $table : Object\n\xa0\n\xa0$table:=WP Get element by ID(WParea;"Invoice")\xa0//retrieve "Invoice" table\n\xa0\n\xa0WP TABLE DELETE ROWS($table;3;2)\xa0//remove 2 rows after 2nd row (3rd position)\n'})}),"\n",(0,s.jsx)(t.p,{children:"Will remove the two rows from the correct location:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(387906).Z+"",width:"756",height:"338"})}),"\n",(0,s.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/WritePro/commands/wp-table-delete-columns",children:"WP TABLE DELETE COLUMNS"})})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},387906:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/pict4680306.en-118b136b14ce3f07f9e9923676db4cf2.png"},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return i}});var r=n(667294);let s={},l=r.createContext(s);function i(e){let t=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);