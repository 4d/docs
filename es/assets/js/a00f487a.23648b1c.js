"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66058"],{259692:function(e,n,l){l.r(n),l.d(n,{default:()=>p,frontMatter:()=>d,metadata:()=>r,assets:()=>o,toc:()=>t,contentTitle:()=>i});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-table-get-rows","title":"WP Table get rows","description":"WP Table get rows ( objTarget ) | ( refTabla ; lineaIni {; numL\xedneas} )  -> Resultado","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-table-get-rows.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-table-get-rows","permalink":"/docs/es/WritePro/commands/wp-table-get-rows","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-table-get-rows.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-table-get-rows","title":"WP Table get rows","slug":"/WritePro/commands/wp-table-get-rows","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Table get columns","permalink":"/docs/es/WritePro/commands/wp-table-get-columns"},"next":{"title":"WP Table insert columns","permalink":"/docs/es/WritePro/commands/wp-table-insert-columns"}}'),a=l("785893"),s=l("250065");let d={id:"wp-table-get-rows",title:"WP Table get rows",slug:"/WritePro/commands/wp-table-get-rows",displayed_sidebar:"docs"},i=void 0,o={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"WP Table get rows"})," ( ",(0,a.jsx)(n.em,{children:"objTarget"})," ) | ( ",(0,a.jsx)(n.em,{children:"refTabla"})," ; ",(0,a.jsx)(n.em,{children:"lineaIni"})," {; ",(0,a.jsx)(n.em,{children:"numL\xedneas"}),"} )  -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"objTarget"}),(0,a.jsx)(n.td,{children:"Object"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Rango o elemento o documento 4D Write Pro"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"refTabla"}),(0,a.jsx)(n.td,{children:"Object"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Referencia de tabla"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"lineaIni"}),(0,a.jsx)(n.td,{children:"Integer, Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Posici\xf3n de la primera l\xednea"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"numL\xedneas"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"N\xfamero de l\xedneas a obtener"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Resultado"}),(0,a.jsx)(n.td,{children:"Object"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Nuevo rango de l\xedneas que contiene las filas seleccionadas"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando ",(0,a.jsx)(n.strong,{children:"WP Table get rows"})," [#descv]devuelve un nuevo objeto de rango de l\xedneas que contiene una selecci\xf3n de las l\xedneas de ",(0,a.jsx)(n.em,{children:"objTarget"})," o ",(0,a.jsx)(n.em,{children:"refTabla"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Pase:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.em,{children:"objTarget"})," ",(0,a.jsx)(n.em,{children:":"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"un rango, o"}),"\n",(0,a.jsx)(n.li,{children:"un elemento (fila / p\xe1rrafo / cuerpo / encabezado / pie de p\xe1gina / imagen en l\xednea / secci\xf3n / subsecci\xf3n), o"}),"\n",(0,a.jsx)(n.li,{children:"un documento 4D Write Pro"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Si ",(0,a.jsx)(n.em,{children:"objTarget"})," no se cruza con una tabla o rango de texto donde se puede recuperar una selecci\xf3n de filas, el comando devuelve Null."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"O"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.em,{children:"refTabla"}),": la referencia de la tabla cuya selecci\xf3n de filas desea obtener."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.em,{children:"lineaIni"}),": apunta a la primera fila de la tabla a devolver y"]}),"\n",(0,a.jsxs)(n.li,{children:["(opcional) ",(0,a.jsx)(n.em,{children:"numLineas"})," - especifica cu\xe1ntas filas se devuelven. Si se omite ",(0,a.jsx)(n.em,{children:"numLineas"}),", se devuelve la fila ",(0,a.jsx)(n.em,{children:"lineaIni"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Si ",(0,a.jsx)(n.em,{children:"lineaIni"})," m\xe1s ",(0,a.jsx)(n.em,{children:"numLineas"})," exceden el n\xfamero de filas en ",(0,a.jsx)(n.em,{children:"refTabla"}),", o si ",(0,a.jsx)(n.em,{children:"lineaIni"})," es mayor que el n\xfamero de filas en ",(0,a.jsx)(n.em,{children:"refTabla"}),", el rango devuelto contiene el m\xe1ximo n\xfamero de filas posible."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"O"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.em,{children:"refTabla:"})," la referencia de la tabla cuya(s) l\xednea(s) de encabezado desea obtener."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.em,{children:"wk header rows:"})," para indicar que se desea obtener las l\xedneas de encabezado"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"En ese caso, el comando devuelve un rango de l\xedneas que contiene las l\xedneas de encabezado repetidas (si se pasa, se ignora el par\xe1metro numFilas). El comando devuelve Null si no hay filas de encabezado definidas."}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,a.jsx)(n.p,{children:"Desea definir un color de fondo espec\xedfico para las dos primeras l\xedneas de una tabla y modificar el borde de la tercera l\xednea:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $wpTable;$wpRange;$wpRow1;$wpRow2;$wpRow3;$wpRow4;$wpRow5;$rows;$rows2 : Object\n\xa0$wpRange:=WP Text range(WParea;wk start text;wk end text)\n\xa0\n\xa0$wpTable:=WP Insert table($wpRange;wk append)\n\xa0$wpRow1:=WP Table append row($wpTable;"Paul";"Smith";25)\n\xa0$wpRow2:=WP Table append row($wpTable;"John";"Richmond";40)\n\xa0$wpRow3:=WP Table append row($wpTable;"Mary";"Trenton";18)\n\xa0$wpRow4:=WP Table append row($wpTable;"Christopher";"Lee";53)\n\xa0$wpRow5:=WP Table append row($wpTable;"Henry";"Cartier";42)\n\xa0\n\xa0$rows:=WP Table get rows($wpTable;1;2)\n\xa0WP SET ATTRIBUTES($rows;wk background color;0x00E0F0FF)\n\xa0$rows2:=WP Table get rows($wpTable;3)\n\xa0WP SET ATTRIBUTES($rows2;wk border style;wk solid)\n\xa0WP SET ATTRIBUTES($rows2;wk border width;4)\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:l(859478).Z+"",width:"380",height:"122"})}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,a.jsx)(n.p,{children:"Para obtener un rango de l\xedneas desde el 10 hasta el final:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0WP Table get rows(tableRef;10;MAXLONG)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,a.jsx)(n.p,{children:"Desea recuperar las l\xedneas que un usuario ha seleccionado:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0var $userSelection;$rows : Object\n\xa0\n\xa0$userSelection:=WP Selection range(myWPArea)\n\xa0\n\xa0$rows:=WP Table get rows($userSelection)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,a.jsx)(n.p,{children:"El siguiente ejemplo:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Obtiene las dos primeras l\xedneas de la primera tabla de WParea."}),"\n",(0,a.jsx)(n.li,{children:"Las define como l\xedneas de encabezado."}),"\n",(0,a.jsx)(n.li,{children:"Define su color de texto en blanco y su color de fondo en negro."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $table;$range : Object\n\xa0\n\xa0$table:=WP Get elements(WParea;wk type table)[0] \xa0// Selecciona la primera tabla en WParea\n\xa0\n\xa0WP SET ATTRIBUTES($table;wk header row count;2)\xa0// Define las dos primeras l\xedneas como l\xedneas de encabezado\n\xa0\n\xa0$range:=WP Table get rows($table;wk header rows)\xa0// Obtiene las l\xedneas de encabezado definidas anteriormente\n\xa0\n\xa0WP SET ATTRIBUTES($range;wk text color;"white";wk background color;"#000")\xa0// Define el texto y el color de fondo de las l\xedneas de encabezado\n\xa0\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-insert-table",children:"WP Insert table"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-table-append-row",children:"WP Table append row"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-table-get-cells",children:"WP Table get cells"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-table-get-columns",children:"WP Table get columns "})]})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},859478:function(e,n,l){l.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},250065:function(e,n,l){l.d(n,{Z:function(){return i},a:function(){return d}});var r=l(667294);let a={},s=r.createContext(a);function d(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);