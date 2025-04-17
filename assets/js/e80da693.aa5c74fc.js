"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26082"],{43197:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>t,assets:()=>a,toc:()=>i,contentTitle:()=>d});var t=JSON.parse('{"id":"WritePro/commands-legacy/wp-table-get-rows","title":"WP Table get rows","description":"WP Table get rows ( targetObj ) | ( tableRef ; startRow | wk header rows {; numRows} )  : Object","source":"@site/versioned_docs/version-20-R9/WritePro/commands-legacy/wp-table-get-rows.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-table-get-rows","permalink":"/docs/WritePro/commands/wp-table-get-rows","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-table-get-rows.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"wp-table-get-rows","title":"WP Table get rows","slug":"/WritePro/commands/wp-table-get-rows","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Table get columns","permalink":"/docs/WritePro/commands/wp-table-get-columns"},"next":{"title":"WP Table insert columns","permalink":"/docs/WritePro/commands/wp-table-insert-columns"}}'),s=r("785893"),l=r("250065");let o={id:"wp-table-get-rows",title:"WP Table get rows",slug:"/WritePro/commands/wp-table-get-rows",displayed_sidebar:"docs"},d=void 0,a={},i=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"Example 4",id:"example-4",level:2},{value:"See also",id:"see-also",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WP Table get rows"})," ( ",(0,s.jsx)(n.em,{children:"targetObj"})," ) | ( ",(0,s.jsx)(n.em,{children:"tableRef"})," ; startRow | wk header rows {; ",(0,s.jsx)(n.em,{children:"numRows"}),"} )  : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"targetObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Range or element or 4D Write Pro document"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tableRef"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Table reference"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"startRow | wk header rows"}),(0,s.jsx)(n.td,{children:"Integer, Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Position of first row OR wk header rows"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numRows"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Number of rows to get"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"New row range containing selected rows"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"WP Table get rows"})," command returns a new row range object containing a selection of rows from ",(0,s.jsx)(n.em,{children:"targetObj"})," or ",(0,s.jsx)(n.em,{children:"tableRef"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Pass either:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"targetObj:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"a range, or"}),"\n",(0,s.jsx)(n.li,{children:"an element (row / paragraph / body / header / footer / inline picture / section / subsection), or"}),"\n",(0,s.jsx)(n.li,{children:"a 4D Write Pro document"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"targetObj"})," does not intersect with a table or text range where a selection of rows can be retrieved, the command returns Null."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"OR"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"tableRef:"})," the reference of the table whose selection of rows you want to get."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"startRow:"})," points to the first table row to return, and"]}),"\n",(0,s.jsxs)(n.li,{children:["(optional) ",(0,s.jsx)(n.em,{children:"numRows"})," - specifies how many rows to return. If ",(0,s.jsx)(n.em,{children:"numRows"})," is omitted, the single ",(0,s.jsx)(n.em,{children:"startRow"})," row is returned."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"startRow"})," plus ",(0,s.jsx)(n.em,{children:"numRows"})," exceeds the number of rows in ",(0,s.jsx)(n.em,{children:"tableRef"}),", or if ",(0,s.jsx)(n.em,{children:"startRow"})," is greater than the number of rows in ",(0,s.jsx)(n.em,{children:"tableRef"}),", the returned range contains the maximum possible rows."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"OR"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"tableRef:"})," the reference of the table whose header row(s) you want to get."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"wk header rows:"})," to indicate that you want to get header rows"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In that case, the command returns a row range containing the repeated header rows (if passed, the ",(0,s.jsx)(n.em,{children:"numRows"})," parameter is ignored). The command returns Null if there are no defined header rows."]}),"\n",(0,s.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.p,{children:"You want to set a specific background color for the first two rows of a table, and modify the border of the third row:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $wpTable;$wpRange;$wpRow1;$wpRow2;$wpRow3;$wpRow4;$wpRow5;$rows;$rows2 : Object\n\xa0$wpRange:=WP Text range(WParea;wk start text;wk end text)\n\xa0\n\xa0$wpTable:=WP Insert table($wpRange;wk append)\n\xa0$wpRow1:=WP Table append row($wpTable;"Paul";"Smith";25)\n\xa0$wpRow2:=WP Table append row($wpTable;"John";"Richmond";40)\n\xa0$wpRow3:=WP Table append row($wpTable;"Mary";"Trenton";18)\n\xa0$wpRow4:=WP Table append row($wpTable;"Christopher";"Lee";53)\n\xa0$wpRow5:=WP Table append row($wpTable;"Henry";"Cartier";42)\n\xa0\n\xa0$rows:=WP Table get rows($wpTable;1;2)\n\xa0WP SET ATTRIBUTES($rows;wk background color;0x00E0F0FF)\n\xa0$rows2:=WP Table get rows($wpTable;3)\n\xa0WP SET ATTRIBUTES($rows2;wk border style;wk solid)\n\xa0WP SET ATTRIBUTES($rows2;wk border width;4)\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(965962).Z+"",width:"380",height:"122"})}),"\n",(0,s.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.p,{children:"To get a range of rows starting from the 10th to the end:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0WP Table get rows(tableRef;10;MAXLONG)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsx)(n.p,{children:"You want to retrieve the rows a user has selected:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0var $userSelection;$rows : Object\n\xa0\n\xa0$userSelection:=WP Selection range(myWPArea)\n\xa0\n\xa0$rows:=WP Table get rows($userSelection)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"example-4",children:"Example 4"}),"\n",(0,s.jsx)(n.p,{children:"The following example:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Gets the first two rows of the first table in WParea."}),"\n",(0,s.jsx)(n.li,{children:"Sets them as header rows."}),"\n",(0,s.jsx)(n.li,{children:"Sets their text color to white and their background color to black."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $table;$range : Object\n\xa0\n\xa0$table:=WP Get elements(WParea;wk type table)[0] \xa0// Select the first table in WParea\n\xa0\n\xa0WP SET ATTRIBUTES($table;wk header row count;2)\xa0// Set the first two rows as header rows\n\xa0\n\xa0$range:=WP Table get rows($table;wk header rows)\xa0// Get the header rows defined above\n\xa0\n\xa0WP SET ATTRIBUTES($range;wk text color;"white";wk background color;"#000")\xa0// Set text and background color for the header rows\n\xa0\n'})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/WritePro/commands/wp-insert-table",children:"WP Insert table"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/WritePro/commands/wp-table-append-row",children:"WP Table append row"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/WritePro/commands/wp-table-get-cells",children:"WP Table get cells"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/WritePro/commands/wp-table-get-columns",children:"WP Table get columns"})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},965962:function(e,n,r){r.d(n,{Z:function(){return t}});let t="data:image/png;base64,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"},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return o}});var t=r(667294);let s={},l=t.createContext(s);function o(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);