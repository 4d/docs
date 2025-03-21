"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67271"],{953675:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>a,assets:()=>d,toc:()=>t,contentTitle:()=>i});var a=JSON.parse('{"id":"commands-legacy/listbox-insert-column","title":"LISTBOX INSERT COLUMN","description":"LISTBOX INSERT COLUMN ( { ;} objeto ; posicionCol ; nomCol ; variableCol ; nomEncabezado ; varTitulo {; nomPie ; nomVar*} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-insert-column.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-insert-column","permalink":"/docs/es/20-R7/commands/listbox-insert-column","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-insert-column.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-insert-column","title":"LISTBOX INSERT COLUMN","slug":"/commands/listbox-insert-column","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX GET TABLE SOURCE","permalink":"/docs/es/20-R7/commands/listbox-get-table-source"},"next":{"title":"LISTBOX INSERT COLUMN FORMULA","permalink":"/docs/es/20-R7/commands/listbox-insert-column-formula"}}'),s=o("785893"),r=o("250065");let l={id:"listbox-insert-column",title:"LISTBOX INSERT COLUMN",slug:"/commands/listbox-insert-column",displayed_sidebar:"docs"},i=void 0,d={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Inserci\xf3n din\xe1mica",id:"inserci\xf3n-din\xe1mica",level:3},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ejemplo 3",id:"ejemplo-3",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"LISTBOX INSERT COLUMN"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"objeto"})," ; ",(0,s.jsx)(n.em,{children:"posicionCol"})," ; ",(0,s.jsx)(n.em,{children:"nomCol"})," ; ",(0,s.jsx)(n.em,{children:"variableCol"})," ; ",(0,s.jsx)(n.em,{children:"nomEncabezado"})," ; ",(0,s.jsx)(n.em,{children:"varTitulo"})," {; ",(0,s.jsx)(n.em,{children:"nomPie"})," ; ",(0,s.jsx)(n.em,{children:"nomVar"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operador"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objeto"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nombre de objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"posicionCol"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Ubicaci\xf3n de la columna a insertar"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomCol"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nombre del objeto de la columna"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"variableCol"}),(0,s.jsx)(n.td,{children:"Array, Field, Variable, Pointer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nombre de la variable de la columna"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomEncabezado"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nombre del objeto del t\xedtulo de la columna"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"varTitulo"}),(0,s.jsx)(n.td,{children:"Integer, Pointer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Variable de t\xedtulo de la columna"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomPie"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nombre del objeto de pie de la columna"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomVar"}),(0,s.jsx)(n.td,{children:"Variable, Pointer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Variable de pie de la columna"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"LISTBOX INSERT COLUMN"})," inserta una columna en el list box designado por los par\xe1metros ",(0,s.jsx)(n.em,{children:"objeto"})," y ",(0,s.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota"}),": este comando no hace nada si se aplica a la primera columna de un lisbox mostrado en modo jer\xe1rquico."]}),"\n",(0,s.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,s.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si omite este par\xe1metro, indica que el par\xe1metro ",(0,s.jsx)(n.em,{children:"objeto"})," es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor informaci\xf3n sobre nombres de objetos, consulte la secci\xf3n ",(0,s.jsx)(n.em,{children:"Propiedades de los objetos"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["La nueva columna se inserta justo en frente de la columna definida por el par\xe1metro ",(0,s.jsx)(n.em,{children:"posicionCol"}),". Si el par\xe1metro ",(0,s.jsx)(n.em,{children:"posicionCol"})," es superior al n\xfamero total de columnas, la columna se a\xf1ade despu\xe9s de la \xfaltima columna."]}),"\n",(0,s.jsxs)(n.p,{children:["Pase el nombre del objeto y de la variable de la columna insertada en los par\xe1metros ",(0,s.jsx)(n.em,{children:"nomCol"})," y ",(0,s.jsx)(n.em,{children:"variableCol"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Con un array tipo list box, el nombre de la variable debe coincidir con el nombre del array cuyo contenido se mostrar\xe1 en la columna.",(0,s.jsx)(n.br,{}),"\nPuede pasar un puntero ",(0,s.jsx)(n.strong,{children:"Nil (->[])"})," si utiliza el comando en un contexto din\xe1mico cuando el formulario se ejecuta (ver abajo)."]}),"\n",(0,s.jsxs)(n.li,{children:["Con una selecci\xf3n tipo list box, debe pasar un campo o variable en el par\xe1metro ",(0,s.jsx)(n.em,{children:"variableCol"}),'. El contenido de la columna ser\xe1 entonces el valor del campo o de la variable, evaluado para cada registro de la selecci\xf3n asociada al list box. Este tipo de contenidos s\xf3lo puede ser utilizado cuando la propiedad "Fuente de datos" del list box es Selecci\xf3n actual o Selecci\xf3n temporal (ver la secci\xf3n ',(0,s.jsx)(n.em,{children:"Gesti\xf3n programada de los objetos de tipo List box"}),"). Puede utilizar los campos o las variables de tipo cadena, num\xe9rico, Fecha, Hora, Imagen y Booleano."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["En el contexto de list boxes basadas en las selecciones de registros, ",(0,s.jsx)(n.strong,{children:"LISTBOX INSERT COLUMN"})," permite insertar elementos simples (campos o variables). Si quiere manipular expresiones m\xe1s complejas (tales como f\xf3rmulas o m\xe9todos), debe utilizar el comando ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/listbox-insert-column-formula",children:"LISTBOX INSERT COLUMN FORMULA"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Los list box de tipo colecci\xf3n o selecci\xf3n de entidades tambi\xe9n son soportados, sin embargo, dado que el par\xe1metro ",(0,s.jsx)(n.em,{children:"variableCol"})," no acepta expresiones, debe utilizar el comando ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/listbox-set-column-formula",children:"LISTBOX SET COLUMN FORMULA"})," para asignar la fuente de datos. Es m\xe1s preciso utilizar el comando ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/listbox-insert-column-formula",children:"LISTBOX INSERT COLUMN FORMULA"}),"  en este caso."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," no es posible combinar en un mismo list box columnas de tipo array (fuente de datos array) y columnas de tipo campo o variable (fuente de datos selecci\xf3n)."]}),"\n",(0,s.jsxs)(n.p,{children:["Pase el nombre del objeto y de la variable del t\xedtulo de la columna insertada en los par\xe1metros ",(0,s.jsx)(n.em,{children:"nomEncabezado"})," y ",(0,s.jsx)(n.em,{children:"var"})," ",(0,s.jsx)(n.em,{children:"Encabezado"})," Par\xe1metros."]}),"\n",(0,s.jsxs)(n.p,{children:["Puede pasar en los par\xe1metros ",(0,s.jsx)(n.em,{children:"nomPie"})," y ",(0,s.jsx)(n.em,{children:"variablePie"}),", el nombre del objeto y la variable del pie de la columna insertada."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," los nombres de los objetos deben ser \xfanicos en un formulario. Debe asegurarse de que los nombres pasados en los par\xe1metros ",(0,s.jsx)(n.em,{children:"nomCol"}),", ",(0,s.jsx)(n.em,{children:"nomTitulo"})," y ",(0,s.jsx)(n.em,{children:"nomPie"})," no hayan sido utilizados. De lo contrario, la columna no sea crea y se genera un error."]}),"\n",(0,s.jsx)(n.h3,{id:"inserci\xf3n-din\xe1mica",children:"Inserci\xf3n din\xe1mica"}),"\n",(0,s.jsx)(n.p,{children:"Puede utilizar este comando para insertar columnas en los list box de forma din\xe1mica durante la ejecuci\xf3n del formulario. 4D manejar\xe1 autom\xe1ticamente la definici\xf3n de las variables necesarias (pie de p\xe1gina y encabezado)."}),"\n",(0,s.jsxs)(n.p,{children:["Para ello, ",(0,s.jsx)(n.strong,{children:"LISTBOX INSERT COLUMN"})," acepta un puntero ",(0,s.jsx)(n.strong,{children:"Nil (->[])"})," como valor valor para los par\xe1metros ",(0,s.jsx)(n.em,{children:"variableCol"})," (list box de tipo array \xfanicamente) ",(0,s.jsx)(n.em,{children:"varEncabezado"})," y ",(0,s.jsx)(n.em,{children:"variablePie"}),". En este caso, cuando se ejecuta el comando, 4D crea las variables requeridas din\xe1micamente (para m\xe1s informaci\xf3n, consulte la secci\xf3n )."]}),"\n",(0,s.jsxs)(n.p,{children:["Note que las variables de encabezado y de pie de p\xe1gina siempre se crean con un tipo espec\xedfico (entero largo y texto, respectivamente). Por el contrario, las variables de columna no se pueden escribir durante la creaci\xf3n porque los list boxes aceptan diferentes tipos de arrays para estas variables (array texto, array entero, etc.). Esto significa que usted tiene que definir el tipo de array manualmente (ver el ejemplo 3). Es importante realizar esta escribiendo antes de llamar a comandos como ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/listbox-insert-rows",children:"LISTBOX INSERT ROWS"})," para insertar nuevos elementos en el array. O bien, puede utilizar ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/append-to-array",children:"APPEND TO ARRAY"})," tanto para definir el tipo del array como para la inserci\xf3n de elementos."]}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"Nos gustar\xeda a\xf1adir una columna al final del list box:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var NomVarTitulo;$Ultimo;RecNum : Integer\n\xa0ALL RECORDS([Tabla 1])\n\xa0$RecNum:=Records in table([Tabla 1])\n\xa0ARRAY PICTURE(Imagen;$RecNum)\n\xa0\n\xa0$Ultimo:=LISTBOX Get number of columns(*;"ListBox1")+1\n\xa0LISTBOX INSERT COLUMN(*;"ListBox1";$Ultimo;"ColumnImagen";Imagen;"imagenTitulo";NomVarTitulo)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Nos gustar\xeda a\xf1adir una columna a la derecha del list box y asociarle los valores del campo [Transporte]Tarifas:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0$Ultimo:=LISTBOX Get number of columns(*;"ListBox1")+1\n\xa0LISTBOX INSERT COLUMN(*;"ListBox1";$Ultimo;"CampoCol";[Transporte]Tarifas;"nomTitulo";varTitulo)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsx)(n.p,{children:"Usted desea insertar una columna de forma din\xe1mica en un array de tipo list box y definir su encabezado:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $NilPtr : Pointer\n\xa0LISTBOX INSERT COLUMN(*;"MyListBox";1;"MyNewColumn";$NilPtr;"MyNewHeader";$NilPtr)\n\xa0ColPtr:=OBJECT Get pointer(Object named;"MyNewColumn")\n\xa0ARRAY TEXT(ColPtr->;10)\n\xa0\xa0//Definition of header\n\xa0headprt:=OBJECT Get pointer(Object named;"MyNewHeader")\n\xa0OBJECT SET TITLE(headprt->;"Inserted header")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/listbox-delete-column",children:"LISTBOX DELETE COLUMN"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/listbox-insert-column-formula",children:"LISTBOX INSERT COLUMN FORMULA"})]}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"829"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return l}});var a=o(667294);let s={},r=a.createContext(s);function l(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);