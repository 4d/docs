"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30400"],{790522:function(e,n,s){s.r(n),s.d(n,{default:()=>x,frontMatter:()=>l,metadata:()=>i,assets:()=>r,toc:()=>d,contentTitle:()=>c});var i=JSON.parse('{"id":"commands-legacy/listbox-select-row","title":"LISTBOX SELECT ROW","description":"LISTBOX SELECT ROW ( { ;} objeto ; posicionL {; accion*} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/listbox-select-row.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-select-row","permalink":"/docs/es/commands/listbox-select-row","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-select-row.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-select-row","title":"LISTBOX SELECT ROW","slug":"/commands/listbox-select-row","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SELECT BREAK","permalink":"/docs/es/commands/listbox-select-break"},"next":{"title":"LISTBOX SELECT ROWS","permalink":"/docs/es/commands/listbox-select-rows"}}'),o=s("785893"),a=s("250065");let l={id:"listbox-select-row",title:"LISTBOX SELECT ROW",slug:"/commands/listbox-select-row",displayed_sidebar:"docs"},c=void 0,r={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function t(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"LISTBOX SELECT ROW"})," ( {* ;} ",(0,o.jsx)(n.em,{children:"objeto"})," ; ",(0,o.jsx)(n.em,{children:"posicionL"})," {; ",(0,o.jsx)(n.em,{children:"accion"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Operador"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"objeto"}),(0,o.jsx)(n.td,{children:"any"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nombre de objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"posicionL"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"N\xfamero de la fila a seleccionar"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"accion"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Acci\xf3n de selecci\xf3n"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando LISTBOX SELECT ROW selecciona la fila cuyo n\xfamero se pasa en ",(0,o.jsx)(n.em,{children:"posicion"})," en el list box designado por los par\xe1metros ",(0,o.jsx)(n.em,{children:"objeto"})," y ",(0,o.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,o.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,o.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si omite este par\xe1metro, indica que el par\xe1metro ",(0,o.jsx)(n.em,{children:"objeto"})," es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor informaci\xf3n sobre nombres de objetos, consulte la secci\xf3n ",(0,o.jsx)(n.em,{children:"Propiedades de los objetos"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,o.jsx)(n.em,{children:"accion"}),', si se pasa, se utiliza para definir la acci\xf3n de selecci\xf3n a ejecutar cuando una selecci\xf3n de filas ya existe en el list box. Puede pasar un valor o una de las siguientes constantes (ubicadas en el tema \u201C[#title id="274"/]\u201D):']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Constante"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{children:"Valor"}),(0,o.jsx)(n.th,{children:"Comentario"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"lk add to selection"}),(0,o.jsx)(n.td,{children:"Entero largo"}),(0,o.jsx)(n.td,{children:"1"}),(0,o.jsx)(n.td,{children:"La l\xednea seleccionada se a\xf1ade a la selecci\xf3n existente. Si la l\xednea seleccionada ya pertenece a la selecci\xf3n existente, el comando no hace nada."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"lk remove from selection"}),(0,o.jsx)(n.td,{children:"Entero largo"}),(0,o.jsx)(n.td,{children:"2"}),(0,o.jsx)(n.td,{children:"La l\xednea seleccionada se remueve de la selecci\xf3n existente. Si la l\xednea especificada no pertenece a la selecci\xf3n existente, el comando no hace nada."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"lk replace selection"}),(0,o.jsx)(n.td,{children:"Entero largo"}),(0,o.jsx)(n.td,{children:"0"}),(0,o.jsxs)(n.td,{children:["La l\xednea seleccionada se convierte en la nueva selecci\xf3n, reemplazando la selecci\xf3n existente. El comando tiene el mismo efecto que un clic de usuario en una l\xednea (sin embargo, el evento On Clicked no se genera). Esta es la acci\xf3n por defecto (si se omite el par\xe1metro ",(0,o.jsx)(n.em,{children:"acci\xf3n"}),")."]})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:["Cuando el par\xe1metro ",(0,o.jsx)(n.em,{children:"posicion"})," no corresponde exactamente a un n\xfamero de fila existente, el comando act\xfaa de la siguiente manera:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Si ",(0,o.jsx)(n.em,{children:"posicion"})," es <0, el comando no hace nada, cualquiera que sea el valor del par\xe1metro ",(0,o.jsx)(n.em,{children:"accion"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Si ",(0,o.jsx)(n.em,{children:"posicion"})," es 0 y el par\xe1metro ",(0,o.jsx)(n.em,{children:"accion"})," contiene lk replace selection o se omite, todas las filas del list box son seleccionadas. Si el par\xe1metro ",(0,o.jsx)(n.em,{children:"accion"})," contiene lk remove from selection, todas las filas del list box son deseleccionadas."]}),"\n",(0,o.jsxs)(n.li,{children:["Si el valor de ",(0,o.jsx)(n.em,{children:"posicion"})," es superior al n\xfamero total de filas contenidas en el list box (s\xf3lo en el caso de un array de tipo listbox), el array booleano asociado a el list box es redimensionado autom\xe1ticamente y la acci\xf3n de selecci\xf3n se efect\xfaa. Este mecanismo permite utilizar LISTBOX SELECT ROW con los comandos \u201Cest\xe1ndar\u201D de gesti\xf3n de arrays (tales como ",(0,o.jsx)(n.a,{href:"/docs/es/commands/append-to-array",children:"APPEND TO ARRAY"}),") que no provocan la sincronizaci\xf3n inmediata del listbox."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Despu\xe9s de la ejecuci\xf3n del m\xe9todo, los arrays son sincronizados: si el array fuente del listbox ha sido redimensionado efectivamente, la acci\xf3n de selecci\xf3n se lleva a cabo. De lo contrario, el array booleano asociado con el list box vuelve a su tama\xf1o inicial y el comando no hace nada."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Si quiere que el list box se desplace autom\xe1ticamente para mostrar la fila seleccionada, utilice el comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/object-set-scroll-position",children:"OBJECT SET SCROLL POSITION "}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Para pasar una fila a modo edici\xf3n (para permitir la entrada de datos), utilice el comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/edit-item",children:"EDIT ITEM"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Si el n\xfamero pasado en ",(0,o.jsx)(n.em,{children:"posicion"})," corresponde a una l\xednea oculta en el listbox, la l\xednea es seleccionada pero no se muestra."]}),"\n",(0,o.jsxs)(n.li,{children:["Si ha seleccionado la opci\xf3n ",(0,o.jsx)(n.strong,{children:"Ocultar el resaltado de selecci\xf3n"})," para un list box, deber\xe1 hacer las selecciones de list box visibles utilizando las opciones de interfaz disponibles. Para mayor informaci\xf3n sobre c\xf3mo hacer esto, ver ",(0,o.jsx)(n.em,{children:"Personalizar la apariencia de las selecciones"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/commands/edit-item",children:"EDIT ITEM"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/listbox-delete-rows",children:"LISTBOX DELETE ROWS"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/listbox-insert-rows",children:"LISTBOX INSERT ROWS"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/listbox-select-break",children:"LISTBOX SELECT BREAK"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/listbox-select-rows",children:"LISTBOX SELECT ROWS"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/object-set-scroll-position",children:"OBJECT SET SCROLL POSITION "})]}),"\n",(0,o.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"912"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(t,{...e})}):t(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return l}});var i=s(667294);let o={},a=i.createContext(o);function l(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);