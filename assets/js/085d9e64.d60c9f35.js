"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["47491"],{468023:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>d,metadata:()=>r,assets:()=>i,toc:()=>o,contentTitle:()=>c});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-table-merge-cells","title":"WP TABLE MERGE CELLS","description":"WP TABLE MERGE CELLS ( targetObj ) | ( tableRef ; startColumn ; startRow {; columnCount{; rowCount}} )","source":"@site/versioned_docs/version-20-R8/WritePro/commands-legacy/wp-table-merge-cells.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-table-merge-cells","permalink":"/docs/20-R8/WritePro/commands/wp-table-merge-cells","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-table-merge-cells.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-table-merge-cells","title":"WP TABLE MERGE CELLS","slug":"/WritePro/commands/wp-table-merge-cells","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Table insert rows","permalink":"/docs/20-R8/WritePro/commands/wp-table-insert-rows"},"next":{"title":"WP Table range","permalink":"/docs/20-R8/WritePro/commands/wp-table-range"}}'),s=t("785893"),l=t("250065");let d={id:"wp-table-merge-cells",title:"WP TABLE MERGE CELLS",slug:"/WritePro/commands/wp-table-merge-cells",displayed_sidebar:"docs"},c=void 0,i={},o=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}];function A(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WP TABLE MERGE CELLS"})," ( ",(0,s.jsx)(n.em,{children:"targetObj"})," ) | ( ",(0,s.jsx)(n.em,{children:"tableRef"})," ; ",(0,s.jsx)(n.em,{children:"startColumn"})," ; ",(0,s.jsx)(n.em,{children:"startRow"})," {; ",(0,s.jsx)(n.em,{children:"columnCount"}),"{; ",(0,s.jsx)(n.em,{children:"rowCount"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"targetObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Range or element or 4D Write Pro document"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tableRef"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Table reference"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"startColumn"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Position of first cell column"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"startRow"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Position of first column row"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"columnCount"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Number of columns to merge"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rowCount"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Number of rows to merge"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"WP TABLE MERGE CELLS"})," command merges the selection of cells in the ",(0,s.jsx)(n.em,{children:"targetObj"})," or ",(0,s.jsx)(n.em,{children:"tableRef"})," (defined by ",(0,s.jsx)(n.em,{children:"startColumn"}),", ",(0,s.jsx)(n.em,{children:"startRow"}),", ",(0,s.jsx)(n.em,{children:"columnCount"}),", and ",(0,s.jsx)(n.em,{children:"rowCount"}),")."]}),"\n",(0,s.jsx)(n.p,{children:"Pass either:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"targetObj:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"a range, or"}),"\n",(0,s.jsx)(n.li,{children:"an element (table / row / body / paragraph / anchored image / header / footer / section / subsection), or"}),"\n",(0,s.jsx)(n.li,{children:"a 4D Write Pro document"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"targetObj"})," does not intersect with a table or text range where a selection of cells can be retrieved, the command doesn't do anything."]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"targetObj"})," intersects only one cell, the ",(0,s.jsx)(n.strong,{children:"WP TABLE MERGE CELLS"})," command does nothing."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"OR"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["startColumn and ",(0,s.jsx)(n.em,{children:"startRow"})," - define the left top coordinates of the first cell to merge."]}),"\n",(0,s.jsx)(n.li,{children:"columnCount and rowCount (optional) - specify respectively the number of columns and the number of rows to be merged."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If rowCount is omitted, it is the equivalent of passing 1 (default value). If both columnCount and rowCount are omitted, it is the equivalent of intersecting a single cell so nothing happens."}),"\n",(0,s.jsxs)(n.p,{children:["If startColumn plus ColumnCount or ",(0,s.jsx)(n.em,{children:"startRow"})," plus rowCount exceeds the number of columns/rows in ",(0,s.jsx)(n.em,{children:"tableRef"}),", or if startColumn or ",(0,s.jsx)(n.em,{children:"startRow"})," is greater than the number of columns/rows in ",(0,s.jsx)(n.em,{children:"tableRef"}),", the returned range contains the maximum possible columns/rows which means the whole table is merged into one big cell."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"You want to designate a range of cells and merge it together:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0WP TABLE MERGE CELLS($table;3;2;2;4)\n\xa0\xa0//or\n\xa0$cells:=WP Table get cells($table;3;2;2;4)\n\xa0WP TABLE MERGE CELLS($cells)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Result:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(512212).Z+"",width:"599",height:"100"})}),"\n",(0,s.jsx)(n.p,{children:"Existing data from the original cells is concatenated in the resulting merged cell."}),"\n",(0,s.jsxs)(n.p,{children:["For more details, please refer to ",(0,s.jsx)(n.em,{children:"Merging and splitting cells"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Handling tables"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R8/WritePro/commands/wp-table-split-cells",children:"WP TABLE SPLIT CELLS"})]})]})}function a(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(A,{...e})}):A(e)}},512212:function(e,n,t){t.d(n,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlcAAABkCAYAAACrShWuAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAyMzowNjoyMCAwNjozNDoxNXY95RgAABF9SURBVHhe7d37b1V1usfxp9ArCBShIpdSoOUm0FIKKorACBEVmXOiycyJJwJGjYkmZoiJ/iI/nT/A+ckEIeEi/jTanDEzCZdw0dJSbiL3i0ARFZSLcim3tsjZn+93re5u965YXWe3uN+vZNlhbSeYp9+11metvffzZN2OMQAAAESiW/ATAAAAESBcAQAARIhwBQAAECHCFQAAQIQIVwAAABEiXAEAAESIcAUAABAhwhUAAECECFcAAAARIlwBAABEKGH8za1bt6yxsdF++umnYA+ysrKse/furibUJU51yc7OdmuGusSF60V1YbJUXLdu3Sw/P9/y8vKCPemj30NTUxPrtA39PrSxThOpJqKaUJe48BpITeK0VnJyclrXzM+1hqurV6/arl27bPfu3VZUVORehNnNmzftxx9/tN69e1uPHj2Cvbhx44b98MMP1q9fv065YHZV169ft3Pnztl9993nwgQ8rRfV4/nnnw/2pM/Bgwft/Pnz7iSo8AtzYVPBSsduexeHTHTt2jV306iLJmvFU6i6cuWKu/6pLvC0VgYOHGilpaVWUFAQ7I1rDVe6UNbU1LiT4OTJk0mogQsXLrjQOWbMGCspKaEugbNnz9qOHTtsypQpLkjAO3PmjNXW1trjjz/ugifrxTt9+rTt37/fXn31VXcXnE7Lly93F0zdNKb77+6qvv32W/vmm2/cea1Pnz7BXmzfvt369u3rzvW5ubnB3symIL5582arqKiwAQMGBHtx5MgRd8M4b968lHVpDVcKEVu3brVevXrZjBkz3IvwF8tPP/3ULayxY8cGe6GT88aNG2369OnuRATvq6++sjVr1rgDbtCgQcFenDx50q2XBQsWpD3gfPDBB+6GcdSoUYSrwOHDh23Pnj3uXH///fcHe1FdXe2eRuh8zzsVnh64rFixwp544gkbMWJEsBfbtm2zo0eP2uzZs92a+bnW58F6BKqNO+1kqgmf10ikmlCX1KhL16LzWktLC7+TNsLPWmlDnOqhtUJd4qhH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"},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return d}});var r=t(667294);let s={},l=r.createContext(s);function d(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);