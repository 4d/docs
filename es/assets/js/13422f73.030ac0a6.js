"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78619],{843927:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(474848),s=n(28453);const i={id:"selection-range-to-array",title:"SELECTION RANGE TO ARRAY",slug:"/commands/selection-range-to-array",displayed_sidebar:"docs"},l=void 0,o={id:"commands-legacy/selection-range-to-array",title:"SELECTION RANGE TO ARRAY",description:"SELECTION RANGE TO ARRAY ( inicio ; fin {; campo ; array} {; campo2 ; array2 ; ... ; campoN ; arrayN} )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/selection-range-to-array.md",sourceDirName:"commands-legacy",slug:"/commands/selection-range-to-array",permalink:"/docs/es/commands/selection-range-to-array",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fselection-range-to-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"selection-range-to-array",title:"SELECTION RANGE TO ARRAY",slug:"/commands/selection-range-to-array",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"MULTI SORT ARRAY",permalink:"/docs/es/commands/multi-sort-array"},next:{title:"SELECTION TO ARRAY",permalink:"/docs/es/commands/selection-to-array"}},c={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function t(e){const a={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"SELECTION RANGE TO ARRAY"})," ( ",(0,r.jsx)(a.em,{children:"inicio"})," ; ",(0,r.jsx)(a.em,{children:"fin"})," {; ",(0,r.jsx)(a.em,{children:"campo"})," ; ",(0,r.jsx)(a.em,{children:"array"}),"} {; ",(0,r.jsx)(a.em,{children:"campo2"})," ; ",(0,r.jsx)(a.em,{children:"array2"})," ; ... ; ",(0,r.jsx)(a.em,{children:"campoN"})," ; ",(0,r.jsx)(a.em,{children:"arrayN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Par\xe1metro"}),(0,r.jsx)(a.th,{children:"Tipo"}),(0,r.jsx)(a.th,{}),(0,r.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"inicio"}),(0,r.jsx)(a.td,{children:"Integer"}),(0,r.jsx)(a.td,{children:"\u2192"}),(0,r.jsx)(a.td,{children:"N\xfamero de registro seleccionado a partir del cual comenzar la recuperaci\xf3n de datos"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"fin"}),(0,r.jsx)(a.td,{children:"Integer"}),(0,r.jsx)(a.td,{children:"\u2192"}),(0,r.jsx)(a.td,{children:"N\xfamero de registro seleccionado donde termina la recuperaci\xf3n de datos"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"campo"}),(0,r.jsx)(a.td,{children:"Field, Table"}),(0,r.jsx)(a.td,{children:"\u2192"}),(0,r.jsx)(a.td,{children:"Campo a utilizar para recuperar los datos o Tabla a utilizar para recuperar los n\xfameros de registros"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"array"}),(0,r.jsx)(a.td,{children:"Array"}),(0,r.jsx)(a.td,{children:"\u2190"}),(0,r.jsx)(a.td,{children:"Array para recibir los datos o n\xfameros de registros de los campos"})]})]})]}),"\n",(0,r.jsx)(a.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"SELECTION RANGE TO ARRAY"})," crea uno o m\xe1s arrays y copia los datos de los campos o n\xfameros de registro de la selecci\xf3n actual en arrays."]}),"\n",(0,r.jsxs)(a.p,{children:["A diferencia de ",(0,r.jsx)(a.a,{href:"/docs/es/commands/selection-to-array",children:"SELECTION TO ARRAY"}),", que aplica a la totalidad de la selecci\xf3n actual, ",(0,r.jsx)(a.strong,{children:"SELECTION RANGE TO ARRAY"})," s\xf3lo aplica al rango de los registros seleccionados especificados por los par\xe1metros ",(0,r.jsx)(a.em,{children:"inicio y"})," ",(0,r.jsx)(a.em,{children:"fin"}),"."]}),"\n",(0,r.jsxs)(a.p,{children:["El comando espera que los n\xfameros de registro seleccionados pasados en ",(0,r.jsx)(a.em,{children:"inicio"})," y ",(0,r.jsx)(a.em,{children:"fin"})," cumplan con la f\xf3rmula ",(0,r.jsx)(a.em,{children:"1 <= inicio <= fin <= Records in selection ([...])"}),"."]}),"\n",(0,r.jsxs)(a.p,{children:["Si pasa ",(0,r.jsx)(a.em,{children:"1 <= inicio = fin < Records in selection ([...])"}),", se cargar\xe1n los campos u obtendr\xe1 el n\xfamero de registro del registro cuyo registro seleccionado es ",(0,r.jsx)(a.em,{children:"inicio = fin"}),"."]}),"\n",(0,r.jsx)(a.p,{children:"Si pasa n\xfameros de registros seleccionados incorrectos, el comando hace lo siguiente:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Si ",(0,r.jsx)(a.em,{children:"fin > Records in selection ([...])"}),", devuelve los valores a partir del registro seleccionado especificado por ",(0,r.jsx)(a.em,{children:"inicio"})," hasta el \xfaltimo registro seleccionado."]}),"\n",(0,r.jsxs)(a.li,{children:["Si ",(0,r.jsx)(a.em,{children:"inicio > fin"}),", devuelve los valores del registro cuyo registro seleccionado es ",(0,r.jsx)(a.em,{children:"inicio"})," \xfanicamente."]}),"\n",(0,r.jsx)(a.li,{children:"Si ambos par\xe1metros son inconsistentes con el tama\xf1o de la selecci\xf3n, devuelve arrays vac\xedos."}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["Como ",(0,r.jsx)(a.a,{href:"/docs/es/commands/selection-to-array",children:"SELECTION TO ARRAY"}),", el comando ",(0,r.jsx)(a.strong,{children:"SELECTION RANGE TO ARRAY"})," aplica a la selecci\xf3n de la tabla especificada en el primer par\xe1metro."]}),"\n",(0,r.jsxs)(a.p,{children:["Al igual que ",(0,r.jsx)(a.a,{href:"/docs/es/commands/selection-to-array",children:"SELECTION TO ARRAY"}),", ",(0,r.jsx)(a.strong,{children:"SELECTION RANGE TO ARRAY"})," tambi\xe9n puede realizar las siguientes operaciones:"]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Cargar los valores de uno o varios campos."}),"\n",(0,r.jsxs)(a.li,{children:["Cargar los n\xfameros de registros utilizando la sintaxis ",(0,r.jsx)(a.em,{children:"...;[tabla];Array;..."})]}),"\n",(0,r.jsxs)(a.li,{children:["Cargar valores de campos relacionados, si existe una relaci\xf3n autom\xe1tica Muchos a Uno entre las tablas o si usted previamente ha llamado ",(0,r.jsx)(a.a,{href:"/docs/es/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"})," para cambiar las relaciones Muchos a Uno manuales a autom\xe1ticas. En ambos casos, los valores pueden cargarse a trav\xe9s de varios niveles de relaciones Muchos a Uno entre tablas."]}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Cada array se digita de acuerdo al tipo de campo."}),"\n",(0,r.jsxs)(a.p,{children:["Cuando aplica ",(0,r.jsx)(a.strong,{children:"SELECTION RANGE TO ARRAY"})," a un campo de tipo Hora, note que crear\xe1 un array de tipo Hora \xfanicamente si el array no se ha definido como de otro tipo. Por ejemplo, en el siguiente contexto, el array ",(0,r.jsx)(a.em,{children:"myArray"})," conservar\xe1 el tipo Entero largo:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:"\xa0ARRAY LONGINT(myArray;0)\n\xa0SELECTION TO ARRAY([myTable]myTimeField;myArray)\n"})}),"\n",(0,r.jsx)(a.p,{children:"Si carga los n\xfameros de los registros, se copian en un array de tipo Entero largo."}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Nota:"})," puede llamar al comando ",(0,r.jsx)(a.strong,{children:"SELECTION RANGE TO ARRAY"})," con s\xf3lo los par\xe1metros ",(0,r.jsx)(a.em,{children:"inicio"})," y ",(0,r.jsx)(a.em,{children:"fin"}),". Utilice esta sintaxis especial para lanzar, en una selecci\xf3n limitada la ejecuci\xf3n de una serie diferida de comandos ",(0,r.jsx)(a.a,{href:"/docs/es/commands/selection-to-array",children:"SELECTION TO ARRAY"})," utilizando el par\xe1metro ",(0,r.jsx)(a.em,{children:"*"})," (ver ejemplo 4])."]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"4D Server"}),": ",(0,r.jsx)(a.strong,{children:"SELECTION RANGE TO ARRAY"})," es optimizado por 4D Server. Cada array se crea en el servidor y luego se env\xeda, en su totalidad, al equipo cliente."]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Advertencia:"})," ",(0,r.jsx)(a.strong,{children:"SELECTION RANGE TO ARRAY"})," puede crear arrays grandes, dependiendo del rango definido en ",(0,r.jsx)(a.em,{children:"inicio"})," y ",(0,r.jsx)(a.em,{children:"fin,"})," y en el tipo y tama\xf1o de los datos a cargar. Los arrays residen en memoria, de manera que es buena idea probar el resultado despu\xe9s de la ejecuci\xf3n del comando. Para hacerlo, pruebe el tama\xf1o de cada array resultante o cubra la llamada al comando, utilizando un m\xe9todo de proyecto ",(0,r.jsx)(a.a,{href:"/docs/es/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,r.jsxs)(a.p,{children:["Si el comando se ejecuta correctamente, el tama\xf1o de cada array resultante es igual a ",(0,r.jsx)(a.em,{children:"(fin-inicio)+1"}),", excepto si el par\xe1metro ",(0,r.jsx)(a.em,{children:"fin"})," es superior al n\xfamero de registros en la selecci\xf3n. En tal caso, cada array resultante contiene ",(0,r.jsx)(a.em,{children:"(Registros en selecci\xf3n([...])-inicio)+1"})," elementos."]}),"\n",(0,r.jsx)(a.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsxs)(a.p,{children:["La siguiente l\xednea de c\xf3digo utiliza los 50 primeros registros de la selecci\xf3n actual de la tabla ",(0,r.jsx)(a.em,{children:"[Facturas]."})," Se cargan los valores del campo ",(0,r.jsx)(a.em,{children:"[Facturas]Facturas ID"})," y del campo relacionado ",(0,r.jsx)(a.em,{children:"[Clientes]Clientes ID"}),"."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:"\xa0SELECTION RANGE TO ARRAY(1;50;[Facturas]Facturas ID;alInvoID;[Clientes]Clientes ID;alCustID)\n"})}),"\n",(0,r.jsx)(a.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsxs)(a.p,{children:["Las siguientes l\xedneas de c\xf3digo utilizan los 50 primeros registros de la selecci\xf3n actual de la tabla ",(0,r.jsx)(a.em,{children:"[Facturas]"}),". Se cargan los n\xfameros de registro de la tabla ",(0,r.jsx)(a.em,{children:"[Facturas]"})," as\xed como los de la tabla asociada ",(0,r.jsx)(a.em,{children:"[Clientes]"}),":"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:"\xa0lSelTalla:=Records in selection([Facturas])\n\xa0SELECTION RANGE TO ARRAY(lSelTalla-49;lSelTalla;[Facturas];alFacRegN;[Facturas];alCliRegN)\n"})}),"\n",(0,r.jsx)(a.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,r.jsx)(a.p,{children:"Las siguiente l\xedneas de c\xf3digo permiten trabajar secuencialmente en porciones de 1 000 registros de una selecci\xf3n grande que no puede descargase en su totalidad en arrays:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:"\xa0lMaxPag:=1000\n\xa0lSelTalla:=Records in selection([Directorio Telefonico])\n\xa0For($lPage ;1;1+((lSelTalla-1)\\lMaxPag))\n\xa0\xa0// Cargar los valores y/o los n\xfameros de registros\n\xa0\xa0\xa0\xa0SELECTION RANGE TO ARRAY(1+(lMaxPag*($lPag-1));lMaxPag*$lPag;...;...;...;...;...;...)\n\xa0\xa0// Hacer algo con los arrays\n\xa0End for\n"})}),"\n",(0,r.jsx)(a.h4,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,r.jsx)(a.p,{children:"Uso de los 50 primeros registros actuales de la tabla [Facturas] para cargar varios arrays, en ejecuci\xf3n diferida:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:"\xa0\xa0// Instrucciones diferidas\n\xa0SELECTION TO ARRAY([Facturas]InvoiceRef;arrLInvRef;*)\n\xa0SELECTION TO ARRAY([Facturas]Date;arrDInvDate;*)\n\xa0SELECTION TO ARRAY([Clientes]ClientRef;arrLClientRef;*)\n\xa0\xa0// Ejecuci\xf3n de las instrucciones diferidas\n\xa0SELECTION RANGE TO ARRAY(1;50)\n"})}),"\n",(0,r.jsx)(a.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"/docs/es/commands/on-err-call",children:"ON ERR CALL"}),(0,r.jsx)(a.br,{}),"\n",(0,r.jsx)(a.a,{href:"/docs/es/commands/selection-to-array",children:"SELECTION TO ARRAY"}),(0,r.jsx)(a.br,{}),"\n",(0,r.jsx)(a.a,{href:"/docs/es/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"})]})]})}function m(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>l,x:()=>o});var r=n(296540);const s={},i=r.createContext(s);function l(e){const a=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:a},e.children)}}}]);