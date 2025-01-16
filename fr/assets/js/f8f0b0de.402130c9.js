"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95185"],{540237:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>s});var r=JSON.parse('{"id":"WritePro/commands/wp-table-append-row","title":"WP Table append row","description":"WP Table append row ( tableRef ; value {; value2 ; ... ; valueN} )  Object","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands/wp-table-append-row.md","sourceDirName":"WritePro/commands","slug":"/WritePro/commands/wp-table-append-row","permalink":"/docs/fr/WritePro/commands/wp-table-append-row","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands%2Fwp-table-append-row.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-table-append-row","title":"WP Table append row","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP SET VIEW PROPERTIES","permalink":"/docs/fr/WritePro/commands/wp-set-view-properties"},"next":{"title":"WP TABLE DELETE COLUMNS","permalink":"/docs/fr/WritePro/commands/wp-table-delete-columns"}}'),l=t("785893"),d=t("250065");let a={id:"wp-table-append-row",title:"WP Table append row",displayed_sidebar:"docs"},s=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function i(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"WP Table append row"})," ( ",(0,l.jsx)(n.em,{children:"tableRef"})," ; ",(0,l.jsx)(n.em,{children:"value"})," {; ",(0,l.jsx)(n.em,{children:"value2"})," ; ... ; ",(0,l.jsx)(n.em,{children:"valueN"}),"} )  : Object",(0,l.jsx)(n.br,{}),(0,l.jsx)(n.strong,{children:"WP Table append row"})," ( ",(0,l.jsx)(n.em,{children:"tableRef"})," ; ",(0,l.jsx)(n.em,{children:"valueColl"})," ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Param\xe8tres"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"tableRef"}),(0,l.jsx)(n.td,{children:"Object"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Table reference"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"value"}),(0,l.jsx)(n.td,{children:"Text, Number, Time, Date, Picture, Object"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Value(s) to set in the row"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"valueColl"}),(0,l.jsx)(n.td,{children:"Collection"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Collection of values to set in the row"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"R\xe9sultat"}),(0,l.jsx)(n.td,{children:"Object"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Row range object"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["he ",(0,l.jsx)(n.strong,{children:"WP Table append row"})," commandT appends one row to the ",(0,l.jsx)(n.em,{children:"tableRef"})," table, fills it with ",(0,l.jsx)(n.em,{children:"value"}),"(s) or a ",(0,l.jsx)(n.em,{children:"valueColl"})," collection, and returns the corresponding row range object."]}),"\n",(0,l.jsx)(n.p,{children:"The command supports two syntaxes:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Using values as parameters:"}),"\nAdds as many cells in the row as there are values provided in the ",(0,l.jsx)(n.em,{children:"value"})," parameter(s). You can pass any number of values of different types."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsxs)(n.strong,{children:["Using a collection of values (",(0,l.jsx)(n.em,{children:"valueColl)"}),":"]}),"\nFills the row with values from the ",(0,l.jsx)(n.em,{children:"valueColl"})," collection. Each element of the collection corresponds to a cell in the row."]}),"\n",(0,l.jsx)(n.p,{children:"The following value types are supported in both syntaxes: Text, Number, Time, Date, Picture and Object (formulas or named formulas returning a row element)."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"The default cell alignment will depend on the value type:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"text: left aligned"}),"\n",(0,l.jsx)(n.li,{children:"pictures: centered"}),"\n",(0,l.jsx)(n.li,{children:"other types (numbers, date, and time): right aligned"}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Array type values are not supported."}),"\n",(0,l.jsx)(n.li,{children:"Ensure the number of values or the size of the collection matches the number of cells in the table to avoid unexpected results."}),"\n"]})}),"\n",(0,l.jsx)(n.p,{children:"The command returns the new row as a row range object."}),"\n",(0,l.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,l.jsx)(n.p,{children:"You want to create an empty table and append several rows of different sizes. Vous pouvez \xe9crire :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' var $wpTable;$wpRange;$wpRow1;$wpRow2;$wpRow3 : Object\n $wpRange:=WP Text range(WParea;wk start text;wk end text)\n $wpTable:=WP Insert table($wpRange;wk append)\n $wpRow1:=WP Table append row($wpTable;"Paul";"Smith";25)\n $wpRow2:=WP Table append row($wpTable;"John";"Richmond";40)\n $wpRow3:=WP Table append row($wpTable;"Mary";"Trenton";18;"New!")\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:t(805133).Z+"",width:"489",height:"78"})}),"\n",(0,l.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,l.jsx)(n.p,{children:"You want to create an empty table and append a row using a collection :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'$table:=WP Insert table(WParea; wk replace; wk include in range)\n\n$row:=WP Table append row($table; "Reference"; "Date"; "Time"; "rnd 1"; "rdn 2")\nWP SET ATTRIBUTES($row; wk background color; "lightgrey")\n\n$colItems:=[]\n$colItems.push("KX-825")\n$colItems.push(Formula(Current date))\n$colItems.push(Formula(String(Current time; HH MM SS)))\n$colItems.push(Formula(Random))\n$colItems.push({name: "RND NUMBER"; formula: Formula(Random)})\n\n$row:=WP Table append row($table; $colItems)\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:t(140347).Z+"",width:"806",height:"67"})}),"\n",(0,l.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,l.jsx)(n.p,{children:"In a billing application, you want to create a table automatically filled with related invoice lines:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' var $wpTable;$wpRange : Object\n \n $wpRange:=WP Text range(4DWPArea;wk start text;wk end text)\n \n $wpTable:=WP Insert table($wpRange;wk append) //create the table\n \n  // add the header row\n $row:=WP Table append row($wpTable;"Name";"Quantity";"Unit Price";"Discount Rate";"Total")\n WP SET ATTRIBUTES($row;wk font bold;wk true;wk text align;wk center)\n \n  //simply apply to selection\n APPLY TO SELECTION([INVOICE_LINES];WP Table append row($wpTable;[INVOICE_LINES]ProductName;[INVOICE_LINES]Quantity;[INVOICE_LINES]ProductUnitPrice;[INVOICE_LINES]DiscountRate;[INVOICE_LINES]Total))\n \n  //add a footer row\n $row:=WP Table append row($wpTable;"Total:";Sum([INVOICE_LINES]Quantity);"";"";Sum([INVOICE_LINES]Total))\n \n  //format the table\n $range:=WP Table get columns($wpTable;1;5)\n WP SET ATTRIBUTES($range;wk width;"80pt")\n WP SET ATTRIBUTES($wpTable;wk font size;10)\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:t(478236).Z+"",width:"802",height:"302"})}),"\n",(0,l.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-insert-table",children:"WP Insert table"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/WritePro/commands/wp-table-get-rows",children:"WP Table get rows"})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(i,{...e})}):i(e)}},140347:function(e,n,t){t.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},805133:function(e,n,t){t.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},478236:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict3369663.en-e4c9e8bc6c8de3f5caf6edb37450d228.png"},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return a}});var r=t(667294);let l={},d=r.createContext(l);function a(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);