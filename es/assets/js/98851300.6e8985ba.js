"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76504"],{301769:function(e,n,a){a.r(n),a.d(n,{default:()=>p,frontMatter:()=>l,metadata:()=>r,assets:()=>i,toc:()=>o,contentTitle:()=>s});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-table-append-row","title":"WP Table append row","description":"WP Table append row ( refTabla ; valor {; valor2 ; ... ; valorN} )  -> Resultado","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-table-append-row.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-table-append-row","permalink":"/docs/es/WritePro/commands/wp-table-append-row","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-table-append-row.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-table-append-row","title":"WP Table append row","slug":"/WritePro/commands/wp-table-append-row","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP SET VIEW PROPERTIES","permalink":"/docs/es/WritePro/commands/wp-set-view-properties"},"next":{"title":"WP TABLE DELETE COLUMNS","permalink":"/docs/es/WritePro/commands/wp-table-delete-columns"}}'),d=a("785893"),t=a("250065");let l={id:"wp-table-append-row",title:"WP Table append row",slug:"/WritePro/commands/wp-table-append-row",displayed_sidebar:"docs"},s=void 0,i={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"WP Table append row"})," ( ",(0,d.jsx)(n.em,{children:"refTabla"})," ; ",(0,d.jsx)(n.em,{children:"valor"})," {; ",(0,d.jsx)(n.em,{children:"valor2"})," ; ... ; ",(0,d.jsx)(n.em,{children:"valorN"}),"} )  -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"refTabla"}),(0,d.jsx)(n.td,{children:"Object"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Referencia de tabla"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"valor"}),(0,d.jsx)(n.td,{children:"Text, Number, Time, Date, Picture"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Valor(es) a definir en la fila"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Resultado"}),(0,d.jsx)(n.td,{children:"Object"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Objeto de rango de fila"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando ",(0,d.jsx)(n.strong,{children:"WP Table append row"})," agrega una fila a la tabla ",(0,d.jsx)(n.em,{children:"refTabla"}),", la llena con ",(0,d.jsx)(n.em,{children:"valor"}),"(es) y devuelve el objeto de rango de fila correspondiente."]}),"\n",(0,d.jsxs)(n.p,{children:["El comando agrega tantas celdas en la fila como hay valores en el par\xe1metro ",(0,d.jsx)(n.em,{children:"valor"}),". Puede pasar cualquier n\xfamero de valores de diferentes tipos; La alineaci\xf3n de celda predeterminada depender\xe1 del tipo de valor:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"texto: alineado a la izquierda"}),"\n",(0,d.jsx)(n.li,{children:"im\xe1genes: centrado"}),"\n",(0,d.jsx)(n.li,{children:"otro tipo (n\xfameros, fecha y hora): alineado a la derecha"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," los valores de tipo de array no son soportados."]}),"\n",(0,d.jsx)(n.p,{children:"El comando devuelve la nueva fila como un objeto de rango de fila."}),"\n",(0,d.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,d.jsx)(n.p,{children:"Desea crear una tabla vac\xeda y agregar varias filas de diferentes tama\xf1os. Puedes escribir:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var $wpTable;$wpRange;$wpRow1;$wpRow2;$wpRow3 : Object\n\xa0$wpRange:=WP Text range(WParea;wk start text;wk end text)\n\xa0$wpTable:=WP Insert table($wpRange;wk append)\n\xa0$wpRow1:=WP Table append row($wpTable;"Paul";"Smith";25)\n\xa0$wpRow2:=WP Table append row($wpTable;"John";"Richmond";40)\n\xa0$wpRow3:=WP Table append row($wpTable;"Mary";"Trenton";18;"New!")\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:a(950312).Z+"",width:"489",height:"78"})}),"\n",(0,d.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,d.jsx)(n.p,{children:"En una aplicaci\xf3n de factura, usted desea crear una tabla llenada autom\xe1ticamente con las l\xedneas de factura relacionadas:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var $wpTable;$wpRange : Object\n\n$wpRange:=WP Text range(4DWPArea;wk start text;wk end text)\n\xa0\n\xa0$wpTable:=WP Insert table($wpRange;wk append)\xa0//create the table\n\xa0\n\xa0\xa0// a\xf1adir la fila de encabezado\n\xa0$row:=WP Table append row($wpTable;"Name";"Quantity";"Unit Price";"Discount Rate";"Total")\n\xa0WP SET ATTRIBUTES($row;wk font bold;wk true;wk text align;wk center)\n\xa0\n\xa0\xa0//simplemente aplicar a la selecci\xf3n\n\xa0APPLY TO SELECTION([INVOICE_LINES];WP Table append row($wpTable;[INVOICE_LINES]ProductName;[INVOICE_LINES]Quantity;[INVOICE_LINES]ProductUnitPrice;[INVOICE_LINES]DiscountRate;[INVOICE_LINES]Total))\n\xa0\n\xa0\xa0//a\xf1adir una fila de pie\n\xa0$row:=WP Table append row($wpTable;"Total:";Sum([INVOICE_LINES]Quantity);"";"";Sum([INVOICE_LINES]Total))\n\xa0\n\xa0\xa0//formatear la tabla\n\xa0$range:=WP Table get columns($wpTable;1;5)\n\xa0WP SET ATTRIBUTES($range;wk width;"80pt")\n\xa0WP SET ATTRIBUTES($wpTable;wk font size;10)\n\n\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:a(440154).Z+"",width:"802",height:"302"})}),"\n",(0,d.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-insert-table",children:"WP Insert table"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-table-get-rows",children:"WP Table get rows"})]})]})}function p(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},950312:function(e,n,a){a.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},440154:function(e,n,a){a.d(n,{Z:function(){return r}});let r=a.p+"assets/images/pict3369663.en-e4c9e8bc6c8de3f5caf6edb37450d228.png"},250065:function(e,n,a){a.d(n,{Z:function(){return s},a:function(){return l}});var r=a(667294);let d={},t=r.createContext(d);function l(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);