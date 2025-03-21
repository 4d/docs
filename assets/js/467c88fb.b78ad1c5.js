"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16366"],{649466:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>r,assets:()=>o,toc:()=>d,contentTitle:()=>c});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-table-insert-columns","title":"WP Table insert columns","description":"WP Table insert columns ( targetObj | {tableRef ; colNumber} {; numColumns} )  : Object","source":"@site/versioned_docs/version-20-R8/WritePro/commands-legacy/wp-table-insert-columns.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-table-insert-columns","permalink":"/docs/WritePro/commands/wp-table-insert-columns","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-table-insert-columns.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-table-insert-columns","title":"WP Table insert columns","slug":"/WritePro/commands/wp-table-insert-columns","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Table get rows","permalink":"/docs/WritePro/commands/wp-table-get-rows"},"next":{"title":"WP Table insert rows","permalink":"/docs/WritePro/commands/wp-table-insert-rows"}}'),s=t("785893"),l=t("250065");let i={id:"wp-table-insert-columns",title:"WP Table insert columns",slug:"/WritePro/commands/wp-table-insert-columns",displayed_sidebar:"docs"},c=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WP Table insert columns"})," ( targetObj | {",(0,s.jsx)(n.em,{children:"tableRef"})," ; ",(0,s.jsx)(n.em,{children:"colNumber"}),"} {; ",(0,s.jsx)(n.em,{children:"numColumns"}),"} )  : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"targetObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Range or element or 4D Write Pro document"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tableRef"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Table reference"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"colNumber"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Column number"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numColumns"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Number of columns to insert (default value = 1)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Range of table columns"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"WP Table insert columns"})," command inserts one or several column(s) into a 4D Write Pro table."]}),"\n",(0,s.jsx)(n.p,{children:"This command supports two syntaxes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If you pass a targetObj as the first parameter, the command will insert the column(s) in the first table intersecting the target. ",(0,s.jsx)(n.em,{children:"targetObj"})," can contain:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"a range, or"}),"\n",(0,s.jsx)(n.li,{children:"an element (row / paragraph / body / header / footer / inline picture / section / subsection), or"}),"\n",(0,s.jsx)(n.li,{children:"a 4D Write Pro document."}),"\n"]}),"\nIf ",(0,s.jsx)(n.em,{children:"targetObj"})," does not intersect with a table or text range where columns can be inserted, the command does nothing and returns Null (no error is generated)."]}),"\n",(0,s.jsxs)(n.li,{children:["If you pass both a ",(0,s.jsx)(n.em,{children:"tableRef"})," and a ",(0,s.jsx)(n.em,{children:"colNumber"})," as parameters, the command will insert the column(s) in the designated table and at the specified column index. If the ",(0,s.jsx)(n.em,{children:"col"})," ",(0,s.jsx)(n.em,{children:"Number"})," is higher than the number of columns in ",(0,s.jsx)(n.em,{children:"tableRef"}),", the columns are appended to the table rather than inserted."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The optional ",(0,s.jsx)(n.em,{children:"numColumns"})," parameter defines the number of columns to insert into ",(0,s.jsx)(n.em,{children:"targetObj"})," or ",(0,s.jsx)(n.em,{children:"tableRef"}),". By default, if this parameter is omitted, one column is inserted."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Result"})}),"\n",(0,s.jsx)(n.p,{children:"The command returns a column range representing inserted column(s), or Null if nothing was inserted."}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["You want to insert three columns after first column in the ",(0,s.jsx)(n.em,{children:"Invoice"})," table. This code:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $column : Object\n\xa0var $table : Object\n\xa0\n\xa0$table:=WP Get element by ID(WParea;"Invoice")\xa0//retrieve "Invoice" table\n\xa0\n\xa0$column:=WP Table insert columns($table;2;3)\xa0//position 2, add 3 columns\n'})}),"\n",(0,s.jsx)(n.p,{children:"Will insert the new columns at the correct location:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(116570).Z+"",width:"1386",height:"516"})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/WritePro/commands/wp-table-insert-rows",children:"WP Table insert rows"})})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},116570:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict4680283.en-8fcd2007c68477c82d08d6325a2913a3.png"},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var r=t(667294);let s={},l=r.createContext(s);function i(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);