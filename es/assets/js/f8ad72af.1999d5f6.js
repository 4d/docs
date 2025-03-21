"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8863"],{421849:function(e,n,s){s.r(n),s.d(n,{default:()=>j,frontMatter:()=>d,metadata:()=>o,assets:()=>l,toc:()=>c,contentTitle:()=>i});var o=JSON.parse('{"id":"commands-legacy/listbox-get-objects","title":"LISTBOX GET OBJECTS","description":"LISTBOX GET OBJECTS ( { ;} objeto ; arrayNomObjeto* )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-objects.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-objects","permalink":"/docs/es/20-R7/commands/listbox-get-objects","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-objects.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-objects","title":"LISTBOX GET OBJECTS","slug":"/commands/listbox-get-objects","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX Get number of rows","permalink":"/docs/es/20-R7/commands/listbox-get-number-of-rows"},"next":{"title":"LISTBOX GET PRINT INFORMATION","permalink":"/docs/es/20-R7/commands/listbox-get-print-information"}}'),t=s("785893"),r=s("250065");let d={id:"listbox-get-objects",title:"LISTBOX GET OBJECTS",slug:"/commands/listbox-get-objects",displayed_sidebar:"docs"},i=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"LISTBOX GET OBJECTS"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objeto"})," ; ",(0,t.jsx)(n.em,{children:"arrayNomObjeto"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objeto"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre del objeto (si * se especifica) o Variable (si * se omite)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"arrayNomObjeto"}),(0,t.jsx)(n.td,{children:"Text array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Nombres de los sub objetos del list box (encabezados, columnas, pies)"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.strong,{children:"LISTBOX GET OBJECTS"})," devuelve un array que contiene los nombres de todos los objetos que componen el list box designado por los par\xe1metros ",(0,t.jsx)(n.em,{children:"objeto"})," y ",(0,t.jsx)(n.em,{children:"*"})," ."]}),"\n",(0,t.jsxs)(n.p,{children:["Al pasar el par\xe1metro opcional ",(0,t.jsx)(n.em,{children:"*"})," indica que el par\xe1metro ",(0,t.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (una cadena). Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,t.jsx)(n.em,{children:"objeto"})," es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena."]}),"\n",(0,t.jsxs)(n.p,{children:["En ",(0,t.jsx)(n.em,{children:"arrayNomObjeto"}),", pase un array texto que es llenado autom\xe1ticamente por el comando. Los nombres de los objetos son devueltos en su orden de presentaci\xf3n, con la siguiente secuencia:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.th,{children:"nomCol1"})})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:"nomEncabCol1"})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:"nomPieCol1"})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:"nomCol2"})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:"nomEncabCol2"})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:"nomPieCol2"})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:"..."})})]})]}),"\n",(0,t.jsx)(n.p,{children:"El array devuelve los nombres de los objetos de todas las columnas (incluyendo los pies de columna), independientemente de si son o no visibles."}),"\n",(0,t.jsxs)(n.p,{children:["Este comando es \xfatil en el contexto del an\xe1lisis de un formulario utilizando los comandos ",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/form-load",children:"FORM LOAD"}),", ",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/form-get-objects",children:"FORM GET OBJECTS"})," y ",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/object-get-type",children:"OBJECT Get type"}),". Se puede utilizar, cuando sea necesario, para obtener los nombres de los sub objetos de los list box."]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"Usted quiere cargar un formulario y obtener la lista de todos los objetos de los list boxes que contiene."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0FORM LOAD("MyForm")\n\xa0ARRAY TEXT(arrObjects;0)\n\xa0FORM GET OBJECTS(arrObjects)\n\xa0ARRAY LONGINT(ar_type;Size of array(arrObjects))\n\xa0For($i;1;Size of array(arrObjects))\n\xa0\xa0\xa0\xa0ar_type{$i}:=OBJECT Get type(*;arrObjects{$i})\n\xa0\xa0\xa0\xa0If(ar_type{$i}=Object type listbox)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY TEXT(arrLBObjects;0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0LISTBOX GET OBJECTS(*;arrObjects{$i};arrLBObjects)\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n\xa0FORM UNLOAD\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/form-load",children:"FORM LOAD"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/object-get-type",children:"OBJECT Get type"})]}),"\n",(0,t.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"1302"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var o=s(667294);let t={},r=o.createContext(t);function d(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);