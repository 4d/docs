"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24134"],{193541:function(e,n,s){s.r(n),s.d(n,{default:()=>x,frontMatter:()=>o,metadata:()=>c,assets:()=>t,toc:()=>a,contentTitle:()=>d});var c=JSON.parse('{"id":"commands-legacy/listbox-select-rows","title":"LISTBOX SELECT ROWS","description":"LISTBOX SELECT ROWS ( { ;} objeto ; seleccion {; accion*} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-select-rows.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-select-rows","permalink":"/docs/es/commands/listbox-select-rows","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-select-rows.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-select-rows","title":"LISTBOX SELECT ROWS","slug":"/commands/listbox-select-rows","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SELECT ROW","permalink":"/docs/es/commands/listbox-select-row"},"next":{"title":"LISTBOX SET ARRAY","permalink":"/docs/es/commands/listbox-set-array"}}'),l=s("785893"),i=s("250065");let o={id:"listbox-select-rows",title:"LISTBOX SELECT ROWS",slug:"/commands/listbox-select-rows",displayed_sidebar:"docs"},d=void 0,t={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function r(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"LISTBOX SELECT ROWS"})," ( {* ;} ",(0,l.jsx)(n.em,{children:"objeto"})," ; ",(0,l.jsx)(n.em,{children:"seleccion"})," {; ",(0,l.jsx)(n.em,{children:"accion"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Par\xe1metro"}),(0,l.jsx)(n.th,{children:"Tipo"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"*"}),(0,l.jsx)(n.td,{children:"Operador"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Si se especifica, el objeto es un nombre de objeto (cadena) Si se omite, el objeto es una variable"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"objeto"}),(0,l.jsx)(n.td,{children:"any"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Nombre del objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"seleccion"}),(0,l.jsx)(n.td,{children:"Object, Collection"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Objeto o colecci\xf3n que describe las l\xedneas a seleccionar"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"accion"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"lk replace selection (por defecto si se omite), lk add to selection, lk remove from selection"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsxs)(n.p,{children:["El comando ",(0,l.jsx)(n.strong,{children:"LISTBOX SELECT ROWS"})," selecciona las l\xedneas de un list box selecci\xf3n de entidad o un list box colecci\xf3n que corresponde a las entidades u objetos contenidos en el par\xe1metro de ",(0,l.jsx)(n.em,{children:"seleccion"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,l.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,l.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,l.jsx)(n.em,{children:"objeto"})," es una variable. En este caso, pasa una referencia variable en lugar de una cadena. Para m\xe1s informaci\xf3n sobre los nombres de los objetos, consulte la secci\xf3n ",(0,l.jsx)(n.em,{children:"Propiedades de los objetos"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["En el par\xe1metro ",(0,l.jsx)(n.em,{children:"seleccion"}),", pase un ",(0,l.jsx)(n.a,{href:"#",title:"Datos estructurados como forma de objeto nativo 4D",children:"Objeto"})," o una Coleccion seg\xfan el tipo de list box:"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"List box"})," ",(0,l.jsx)(n.strong,{children:"selecci\xf3n de entidades"})]}),"\n",(0,l.jsxs)(n.p,{children:["Para un ",(0,l.jsx)(n.strong,{children:"list box selecci\xf3n de entidades"}),", pase un objeto selecci\xf3n de entidades que contenga entidades de la misma clase de datos que el list box. Si la ",(0,l.jsx)(n.em,{children:"seleccion"})," es un objeto selecci\xf3n de entidades de una clase de datos diferente del list box, se devuelve un error."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"List box"})," ",(0,l.jsx)(n.strong,{children:"colecci\xf3n"})]}),"\n",(0,l.jsxs)(n.p,{children:["Para un ",(0,l.jsx)(n.strong,{children:"list box"})," colecci\xf3n, pase una subcolecci\xf3n de objetos que pertenecen al list box. Si su list box contiene valores escalares, pase una subcolecci\xf3n de valores."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Si ",(0,l.jsx)(n.em,{children:"seleccion"})," no es un objeto selecci\xf3n de entidades / colecci\xf3n v\xe1lido, se devuelve un error."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Si ",(0,l.jsx)(n.em,{children:"seleccion"}),' es una selecci\xf3n de entidades / colecci\xf3n vac\xeda, de forma predeterminada (con la acci\xf3n "reemplazar", ver m\xe1s abajo) todas las l\xedneas del list box est\xe1n deseleccionadas. Para otras acciones, el comando no hace nada.']}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Si ",(0,l.jsx)(n.em,{children:"seleccion"})," contiene entidades / elementos que no se muestran en el list box, se ignoran."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["El par\xe1metro ",(0,l.jsx)(n.em,{children:"accion"})," opcional, si se pasa, se utiliza para definir la acci\xf3n de selecci\xf3n a ejecutar cuando ya exista una selecci\xf3n de l\xedneas en el list box. Puede pasar un valor o una de las siguientes constantes (ubicadas en el tema \u201C",(0,l.jsx)(n.em,{children:"Listbox"}),"\u201D):"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Constante"}),(0,l.jsx)(n.th,{children:"Tipo"}),(0,l.jsx)(n.th,{children:"Valor"}),(0,l.jsx)(n.th,{children:"Comentario"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk add to selection"}),(0,l.jsx)(n.td,{children:"Entero largo"}),(0,l.jsx)(n.td,{children:"1"}),(0,l.jsx)(n.td,{children:"La l\xednea seleccionada se a\xf1ade a la selecci\xf3n existente. Si la l\xednea seleccionada ya pertenece a la selecci\xf3n existente, el comando no hace nada."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk remove from selection"}),(0,l.jsx)(n.td,{children:"Entero largo"}),(0,l.jsx)(n.td,{children:"2"}),(0,l.jsx)(n.td,{children:"La l\xednea seleccionada se remueve de la selecci\xf3n existente. Si la l\xednea especificada no pertenece a la selecci\xf3n existente, el comando no hace nada."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk replace selection"}),(0,l.jsx)(n.td,{children:"Entero largo"}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsxs)(n.td,{children:["La l\xednea seleccionada se convierte en la nueva selecci\xf3n, reemplazando la selecci\xf3n existente. El comando tiene el mismo efecto que un clic de usuario en una l\xednea (sin embargo, el evento On Clicked no se genera). Esta es la acci\xf3n por defecto (si se omite el par\xe1metro ",(0,l.jsx)(n.em,{children:"acci\xf3n"}),")."]})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:["De forma predeterminada, si se omite el par\xe1metro ",(0,l.jsx)(n.em,{children:"accion"}),", el comando reemplaza las filas definidas por el par\xe1metro ",(0,l.jsx)(n.em,{children:"seleccion"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Nota"}),": el comando supone que cada objeto o entidad se muestra solo una vez en el list box."]}),"\n",(0,l.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,l.jsx)(n.p,{children:"Este c\xf3digo le permite seleccionar facturas en una selecci\xf3n de entidades utilizando solo una petici\xf3n de servidor:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//En el evento On Load event del formulario tenemos: Form.invoices:=ds.Invoices.all()\n\xa0\xa0//El ListBox "Invoices" muestra la selecci\xf3n de entidades Form.invoices\n\xa0\n\xa0var $cash : Object\n\xa0var $card : Object\n\xa0\n\xa0\xa0//Seleccionar las facturas pagadas en efectivo\n\xa0$cash:=Form.invoices.query("paymentMethod=:1";"Cash")\n\xa0LISTBOX SELECT ROWS(*;"Invoices";$cash;lk replace selection)\n'})}),"\n",(0,l.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,l.jsx)(n.p,{children:"Ejemplo con una colecci\xf3n de objetos:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0var $name : Text\n\xa0$name:=Request("Enter a name")\n\xa0If(OK=1)\n\xa0\xa0// Form.studentsColl is a collection of objects\n\xa0\xa0\xa0\xa0$selection:=Form.studentsColl.query("lastname = :1";$name)\n\xa0\xa0\xa0\xa0LISTBOX SELECT ROWS(*;"LBStudents";$selection;lk add selection)\n\xa0End if\n'})}),"\n",(0,l.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/es/commands/listbox-select-row",children:"LISTBOX SELECT ROW"})}),"\n",(0,l.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"N\xfamero de comando"}),(0,l.jsx)(n.td,{children:"1715"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Hilo seguro"}),(0,l.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(r,{...e})}):r(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return o}});var c=s(667294);let l={},i=c.createContext(l);function o(e){let n=c.useContext(i);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);