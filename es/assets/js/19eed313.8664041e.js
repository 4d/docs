"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["56158"],{360873:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>t,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/sort-array","title":"SORT ARRAY","description":"SORT ARRAY ( array {; array2 ; ... ; arrayN}{; > o <} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sort-array.md","sourceDirName":"commands-legacy","slug":"/commands/sort-array","permalink":"/docs/es/commands/sort-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsort-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sort-array","title":"SORT ARRAY","slug":"/commands/sort-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Size of array","permalink":"/docs/es/commands/size-of-array"},"next":{"title":"TEXT TO ARRAY","permalink":"/docs/es/commands/text-to-array"}}'),a=r("785893"),o=r("250065");let d={id:"sort-array",title:"SORT ARRAY",slug:"/commands/sort-array",displayed_sidebar:"docs"},i=void 0,l={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"SORT ARRAY"})," ( ",(0,a.jsx)(n.em,{children:"array"})," {; ",(0,a.jsx)(n.em,{children:"array2"})," ; ... ; ",(0,a.jsx)(n.em,{children:"arrayN"}),"}{; > o <} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"array"}),(0,a.jsx)(n.td,{children:"Array"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Arrays a ordenar"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"> o <"}),(0,a.jsx)(n.td,{children:"Operador"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:'">" ordenar en orden ascendente, u "<" ordenar en orden descendente, u orden ascendente si se omite'})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsx)(n.p,{children:"El comando SORT ARRAY ordena uno o m\xe1s arrays en orden ascendente o descendente."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["No es posible ordenar arrays de tipo ",(0,a.jsx)(n.a,{href:"#",title:"A reference to another variable (including arrays and array elements), table, or field",children:"Puntero"})," o ",(0,a.jsx)(n.a,{href:"#",title:"Can be any Windows or Macintosh picture",children:"Imagen"}),". Puede ordenar los elementos de un array bidimensional (es decir, ",(0,a.jsx)(n.em,{children:"a2DArray{$vlEsteElem}"}),") pero no puede ordenar el array bidimensional en s\xed mismo (es decir, ",(0,a.jsx)(n.em,{children:"a2DArray"}),")."]}),"\n",(0,a.jsxs)(n.li,{children:["Puede ordenar arrays ",(0,a.jsx)(n.a,{href:"#",title:"Datos estructurados como forma de objeto nativo 4D",children:"Objeto"}),". Los elementos null se agrupan y los elementos del array se ordenan con un orden interno."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["El \xfaltimo par\xe1metro especifica si ordenar el ",(0,a.jsx)(n.em,{children:"array"})," en orden ascendente o descendente. El s\xedmbolo \u201Cmayor que\u201D (>) indica un orden ascendente; el s\xedmbolo \u201Cmenor que\u201D (<) indica un orden descendente. Si no especifica el orden, la ordenaci\xf3n es ascendente."]}),"\n",(0,a.jsxs)(n.p,{children:["Si se especifica m\xe1s de un array, los arrays se ordenan siguiendo el definido para el primer array; las ordenaciones multiniveles no son posibles. En su lugar puede utilizar el comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/multi-sort-array",children:"MULTI SORT ARRAY"})," si desea ordenar arrays sincronizados."]}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,a.jsx)(n.p,{children:"El siguiente ejemplo crea dos arrays y luego los ordena en funci\xf3n del nombre de la empresa:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0ALL RECORDS([Personas])\n\xa0SELECTION TO ARRAY([Personas]Nombre;asNombres;[Personas]Empresa;asEmpresas)\n\xa0SORT ARRAY(asEmpresas;asNombres;>)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Sin embargo, como SORT ARRAY no realiza ordenaciones multinivel, los nombres de las personas aparecen en desorden al interior de cada empresa. Para ordenar las personas por nombre para cada empresa, debe escribir:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0ALL RECORDS([Personas])\n\xa0ORDER BY([Personas];[Personas]Empresa;>;[Personas]Nombre;>)\n\xa0SELECTION TO ARRAY([Personas]Nombre;asNombres;[Personas]Empresa;asEmpresas)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,a.jsxs)(n.p,{children:["Usted visualiza los nombres de una tabla ",(0,a.jsx)(n.em,{children:"[Personas]"})," en una ventana flotante. Cuando hace clic en los botones en la ventana, puede ordenar esta lista de nombres de A a Z o de Z a A. Como varias personas pueden tener el mismo nombre, tambi\xe9n puede utilizar un campo ",(0,a.jsx)(n.em,{children:"[Personas]Numero ID"}),", el cual es un campo indexado \xfanico. Cuando hace clic en un nombre de la lista, usted recupera el registro para el nombre correspondiente. Manteniendo un array sincronizado y oculto de n\xfameros de identificaci\xf3n, se asegura de acceder al registro correspondiente al nombre seleccionado:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo de objeto del array asNames\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALL RECORDS([People])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SELECTION TO ARRAY([People]Name;asNames;[People]ID number;alIDs)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SORT ARRAY(asNames;alIDs;>)\n\xa0\xa0\xa0\xa0:(Form event code=On Unload)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR VARIABLE(asNames)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR VARIABLE(alIDs)\n\xa0\xa0\xa0\xa0:(Form event code=On Clicked)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(asNames#0)\n\xa0\xa0// Utilice el array alIDs para obtener el registro correcto\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([People];[People]ID Number=alIDs{asNames})\n\xa0\xa0// Hacer algo con el registro\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n\xa0\n\xa0\xa0// M\xe9todo de objeto del bot\xf3n bA2Z\n\xa0\xa0// Ordenaci\xf3n de los arrays en orden creciente conservando la sincronizaci\xf3n\n\xa0SORT ARRAY(asNames;alIDs;>)\n\xa0\n\xa0\xa0// M\xe9todo de objeto del bot\xf3n bZ2A\n\xa0\xa0// Ordenaci\xf3n de los arrays en orden decreciente conservando la sincronizaci\xf3n\n\xa0SORT ARRAY(asNames;alIDs;<)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/commands/find-in-sorted-array",children:"Find in sorted array"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/multi-sort-array",children:"MULTI SORT ARRAY"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/order-by",children:"ORDER BY"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/selection-to-array",children:"SELECTION TO ARRAY"})]}),"\n",(0,a.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"229"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return d}});var s=r(667294);let a={},o=s.createContext(a);function d(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);