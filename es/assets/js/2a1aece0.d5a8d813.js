"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48441"],{623546:function(e,n,s){s.r(n),s.d(n,{default:()=>x,frontMatter:()=>o,metadata:()=>r,assets:()=>d,toc:()=>t,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/listbox-get-arrays","title":"LISTBOX GET ARRAYS","description":"LISTBOX GET ARRAYS ( { ;} objeto ; arrNomsCols ; arrNomsEncabezados ; arrVarCols ; arrVarEncabezados ; arrColsVisibles ; arrEstilos {; arrNomsPies ; arrVarsPies*} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-arrays.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-arrays","permalink":"/docs/es/commands/listbox-get-arrays","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-arrays.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-arrays","title":"LISTBOX GET ARRAYS","slug":"/commands/listbox-get-arrays","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX Get array","permalink":"/docs/es/commands/listbox-get-array"},"next":{"title":"LISTBOX Get auto row height","permalink":"/docs/es/commands/listbox-get-auto-row-height"}}'),a=s("785893"),i=s("250065");let o={id:"listbox-get-arrays",title:"LISTBOX GET ARRAYS",slug:"/commands/listbox-get-arrays",displayed_sidebar:"docs"},l=void 0,d={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"LISTBOX GET ARRAYS"})," ( {* ;} ",(0,a.jsx)(n.em,{children:"objeto"})," ; ",(0,a.jsx)(n.em,{children:"arrNomsCols"})," ; ",(0,a.jsx)(n.em,{children:"arrNomsEncabezados"})," ; ",(0,a.jsx)(n.em,{children:"arrVarCols"})," ; ",(0,a.jsx)(n.em,{children:"arrVarEncabezados"})," ; ",(0,a.jsx)(n.em,{children:"arrColsVisibles"})," ; ",(0,a.jsx)(n.em,{children:"arrEstilos"})," {; ",(0,a.jsx)(n.em,{children:"arrNomsPies"})," ; ",(0,a.jsx)(n.em,{children:"arrVarsPies"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"*"}),(0,a.jsx)(n.td,{children:"Operador"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"objeto"}),(0,a.jsx)(n.td,{children:"any"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Nombre de objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"arrNomsCols"}),(0,a.jsx)(n.td,{children:"Text array"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Nombres de objeto de las columnas"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"arrNomsEncabezados"}),(0,a.jsx)(n.td,{children:"Text array"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Nombres de objeto de los t\xedtulos"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"arrVarCols"}),(0,a.jsx)(n.td,{children:"Pointer array"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Punteros hacia las variables de las columnas"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"arrVarEncabezados"}),(0,a.jsx)(n.td,{children:"Pointer array"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Punteros hacia campos o Nil"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"arrColsVisibles"}),(0,a.jsx)(n.td,{children:"Boolean array"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Visibilidad de cada columna"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"arrEstilos"}),(0,a.jsx)(n.td,{children:"Pointer array"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Punteros a los arrays o a las variables de estilos de colores y de visibilidad o Nil"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"arrNomsPies"}),(0,a.jsx)(n.td,{children:"Text array"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Nombres de los objetos de pies de columna"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"arrVarsPies"}),(0,a.jsx)(n.td,{children:"Pointer array"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Punteros a las variables de pies de columna"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando ",(0,a.jsx)(n.strong,{children:"LISTBOX GET ARRAYS"})," devuelve un conjunto de arrays sincronizados ofreciendo informaci\xf3n sobre cada columna (visible o invisible) del list box designado por los par\xe1metros ",(0,a.jsx)(n.em,{children:"objeto"})," y ",(0,a.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional *, indica que el par\xe1metro ",(0,a.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si omite este par\xe1metro, indica que el par\xe1metro ",(0,a.jsx)(n.em,{children:"objeto"})," es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor informaci\xf3n sobre nombres de objetos, consulte la secci\xf3n ",(0,a.jsx)(n.em,{children:"Propiedades de los objetos"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Una vez se ejecuta el comando:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["El array ",(0,a.jsx)(n.em,{children:"arrNomsCols"})," contiene la lista de los nombres de los objetos para cada columna del list box."]}),"\n",(0,a.jsxs)(n.li,{children:["El array ",(0,a.jsx)(n.em,{children:"arrNomsEncabezados"})," contiene la lista de los nombres de los objetos para cada t\xedtulo de columna del list box."]}),"\n",(0,a.jsxs)(n.li,{children:["El array ",(0,a.jsx)(n.em,{children:"arrVarCol"}),"s contiene los punteros hacia las variables (arrays) asociadas a cada columna del list box. Para un listbox de tipo selecci\xf3n, ",(0,a.jsx)(n.em,{children:"arrVarCols"})," contiene:\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Para una columna asociada a un campo, un puntero al campo asociado,"}),"\n",(0,a.jsx)(n.li,{children:"Para una columna asociada a una variable, un puntero a la variable,"}),"\n",(0,a.jsx)(n.li,{children:"Para una columna asociada a una expresi\xf3n, un puntero Nil."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["El array ",(0,a.jsx)(n.em,{children:"arrVarEncabezados"})," contiene punteros hacia las variables asociadas a cada t\xedtulo de columna del list box."]}),"\n",(0,a.jsxs)(n.li,{children:["El array ",(0,a.jsx)(n.em,{children:"arrColsVisibles"})," contiene un valor Booleano para cada columna, indicando si la columna es visible (",(0,a.jsx)(n.a,{href:"/docs/es/commands/true",title:"True",children:"True"}),") o oculta (",(0,a.jsx)(n.a,{href:"/docs/es/commands/false",title:"False",children:"False"}),") en el list box."]}),"\n",(0,a.jsxs)(n.li,{children:["El array ",(0,a.jsx)(n.em,{children:"arrEstilos"})," contiene, para un list box de tipo array, cuatro hacia cuatro arrays que permiten aplicar individualmente un estilo, un color de fuente, un color de fondo y un control de visualizaci\xf3n personalizado a cada fila del list box. Estos arrays son asociados al list box en la Lista de propiedades del modo Dise\xf1o o v\xeda el comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/listbox-set-array",children:"LISTBOX SET ARRAY"}),". Si un array no es especificado para el list box, el elemento correspondiente en ",(0,a.jsx)(n.em,{children:"arrEstilos"})," contendr\xe1 un puntero Nil.",(0,a.jsx)(n.br,{}),"\nEl cuarto del puntero corresponde ya sea a un array booleano (array de l\xedneas ocultas), o a un array entero largo (array utilizado para definir las l\xedneas ocultas, desactivadas y no seleccionables), en funci\xf3n de la implementaci\xf3n utilizada para el array de control de l\xedneas (ver ",(0,a.jsx)(n.em,{children:"Propiedades espec\xedficas de los list box"}),").",(0,a.jsx)(n.br,{}),"\nPara un list box de tipo selecci\xf3n, colecci\xf3n o selecci\xf3n de entidades, ",(0,a.jsx)(n.em,{children:"arrEstilos"})," contiene:"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Por cada configuraci\xf3n definida v\xeda una variable, un puntero a la variable,"}),"\n",(0,a.jsx)(n.li,{children:"Por cada configuraci\xf3n definida v\xeda una expresi\xf3n, un puntero Nil."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/commands/listbox-get-array",children:"LISTBOX Get array"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/listbox-get-property",children:"LISTBOX Get property"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/listbox-set-array",children:"LISTBOX SET ARRAY"})]}),"\n",(0,a.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"832"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return o}});var r=s(667294);let a={},i=r.createContext(a);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);