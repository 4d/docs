"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26357"],{980768:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>i,assets:()=>o,toc:()=>d,contentTitle:()=>a});var i=JSON.parse('{"id":"commands-legacy/get-list-item-properties","title":"GET LIST ITEM PROPERTIES","description":"GET LIST ITEM PROPERTIES ( { ;} lista ; refElem |  ; editable {; estilos {; icono {; color}}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-list-item-properties.md","sourceDirName":"commands-legacy","slug":"/commands/get-list-item-properties","permalink":"/docs/es/20-R8/commands/get-list-item-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-list-item-properties.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-list-item-properties","title":"GET LIST ITEM PROPERTIES","slug":"/commands/get-list-item-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET LIST ITEM PARAMETER ARRAYS","permalink":"/docs/es/20-R8/commands/get-list-item-parameter-arrays"},"next":{"title":"GET LIST PROPERTIES","permalink":"/docs/es/20-R8/commands/get-list-properties"}}'),r=s("785893"),l=s("250065");let t={id:"get-list-item-properties",title:"GET LIST ITEM PROPERTIES",slug:"/commands/get-list-item-properties",displayed_sidebar:"docs"},a=void 0,o={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",em:"em",filesystem:"filesystem",h2:"h2",li:"li",name:"name",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"GET LIST ITEM PROPERTIES"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"lista"})," ; refElem | * ; ",(0,r.jsx)(n.em,{children:"editable"})," {; ",(0,r.jsx)(n.em,{children:"estilos"})," {; ",(0,r.jsx)(n.em,{children:"icono"})," {; ",(0,r.jsx)(n.em,{children:"color"}),"}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Si se especifica, lista es un nombre de objeto (cadena) Si se omite, lista es una referencia de lista"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lista"}),(0,r.jsx)(n.td,{children:"Integer, Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero de referencia de lista (si se omite *) o Nombre del objeto de tipo lista (si se pasa *)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refElem | *"}),(0,r.jsx)(n.td,{children:"Operador, Entero largo"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero de referencia del elemento, o 0 para el \xfaltimo elemento a\xf1adido a la lista, o * para el elemento actual de la lista"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"editable"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"TRUE = Editable, FALSE = No editable"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"estilos"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Estilo de fuente del elemento"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"icono"}),(0,r.jsx)(n.td,{children:"Text, Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"N\xfamero de recurso Mac OS \u2018cicn\u2019, o 65536 + n\xfamero de recurso Mac OS \u2018PICT\u2019, o 131072 + n\xfamero de referencia de imagen"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"color"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valor de color RGB"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"GET LIST ITEM PROPERTIES"})," devuelve las propiedades del elemento designado por el par\xe1metro ",(0,r.jsx)(n.em,{children:"refElem"})," de la lista cuyo n\xfamero de referencia o nombre de objeto se pasa en ",(0,r.jsx)(n.em,{children:"lista"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si pasa el primer par\xe1metro opcional *, indica que el par\xe1metro ",(0,r.jsx)(n.em,{children:"lista"})," es un nombre de objeto (cadena) correspondiente a una representaci\xf3n de lista en el formulario. Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,r.jsx)(n.em,{children:"lista"})," es una referencia de lista jer\xe1rquica (RefLista). Si utiliza s\xf3lo una representaci\xf3n de lista, puede utilizar indiferentemente una u otra sintaxis. Por el contrario, si utiliza varias representaciones de una misma lista y trabaja con el elemento actual (el segundo * se pasa), la sintaxis basada en el nombre del objeto es necesaria ya que cada representaci\xf3n puede tener su propio elemento actual."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),": si utiliza el car\xe1cter @ en el nombre de la lista y el formulario contiene varias listas que responden a este nombre, el comando ",(0,r.jsx)(n.strong,{children:"GET LIST ITEM PROPERTIES"})," se aplicar\xe1 al primer objeto cuyo nombre corresponde."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"refElem"}),", puede pasar un n\xfamero de referencia, o el valor 0 con el fin de designar el \xfaltimo elemento a\xf1adido a la lista, o * para designar el elemento actual de la lista. Si se seleccionan varios elementos, el elemento actual es el \xfaltimo en ser seleccionado."]}),"\n",(0,r.jsx)(n.p,{children:"Si pasa * y ning\xfan elemento es seleccionado o si el n\xfamero de referencia del elemento no corresponde a ning\xfan elemento de la lista, el comando deja los par\xe1metros sin cambios."}),"\n",(0,r.jsxs)(n.p,{children:["Si trabaja con n\xfameros de referencia de los elementos, aseg\xfarese de utilizar, construya una lista en la cual los elemento tengan n\xfameros de referencia \xfanicos, de lo contrario no podr\xe1 diferenciar los elementos. Para mayor informaci\xf3n, consulte la descripci\xf3n del comando ",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/append-to-list",children:"APPEND TO LIST"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Despu\xe9s de la llamada:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"e"})," ",(0,r.jsx)(n.em,{children:"ditable"})," devuelve TRUE si el elemento es editable."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"estilos"})," devuelve el estilo de fuente del elemento."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"icono"})," devuelve la imagen asignada al elemento, si lo hay.\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Si el \xedcono se ha especificado utilizando un archivo de imagen, el comando devuelve en el ",(0,r.jsx)(n.em,{children:"icono"})," la ruta de acceso utilizando ",(0,r.jsxs)(n.strong,{children:["path:",(0,r.jsx)(n.filesystem,{path:""})]}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Si el icono se ha especificado utilizando una imagen de la librer\xeda (solo bases de datos binarias), el comando devuelve el n\xfamero o el nombre de la imagen, seg\xfan el tipo de variable que se pase en este par\xe1metro. El siguiente patr\xf3n se utiliza para un nombre: ",(0,r.jsxs)(n.strong,{children:["pictlib:",(0,r.jsx)(n.name,{})]}),". Si no atribuye un tipo espec\xedfico a la variable ",(0,r.jsx)(n.em,{children:"icono"}),", de forma predeterminada, se devuelve el nombre de la imagen (texto). Si no hay ning\xfan icono asociado con el elemento, el comando devuelve un valor en blanco."]}),"\n"]}),"\n",(0,r.jsx)(n.strong,{children:"Nota:"})," puede recuperar, en una variable imagen, el icono asociado con un elemento utilizando el comando ",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/get-list-item-icon",children:"GET LIST ITEM ICON"}),(0,r.jsx)(n.em,{children:"."})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"color"})," devuelve el color del texto del elemento especificado."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Para mayor informaci\xf3n sobre estas propiedades, consulte la descripci\xf3n del comando ",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/set-list-item-properties",children:"SET LIST ITEM PROPERTIES"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/get-list-item",children:"GET LIST ITEM"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/get-list-item-icon",children:"GET LIST ITEM ICON"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/set-list-item",children:"SET LIST ITEM"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/set-list-item-properties",children:"SET LIST ITEM PROPERTIES"})]}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"631"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return t}});var i=s(667294);let r={},l=i.createContext(r);function t(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);