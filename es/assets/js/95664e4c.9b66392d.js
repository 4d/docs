"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41113"],{25174:function(e,n,l){l.r(n),l.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>r,toc:()=>a,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/listbox-get-cell-position","title":"LISTBOX GET CELL POSITION","description":"LISTBOX GET CELL POSITION ( { ;} objeto {; X ; Y }; columna ; linea {; varCol*} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-cell-position.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-cell-position","permalink":"/docs/es/20-R7/commands/listbox-get-cell-position","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-cell-position.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-cell-position","title":"LISTBOX GET CELL POSITION","slug":"/commands/listbox-get-cell-position","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX GET CELL COORDINATES","permalink":"/docs/es/20-R7/commands/listbox-get-cell-coordinates"},"next":{"title":"LISTBOX Get column formula","permalink":"/docs/es/20-R7/commands/listbox-get-column-formula"}}'),i=l("785893"),o=l("250065");let d={id:"listbox-get-cell-position",title:"LISTBOX GET CELL POSITION",slug:"/commands/listbox-get-cell-position",displayed_sidebar:"docs"},c=void 0,r={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function t(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"LISTBOX GET CELL POSITION"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objeto"})," {; ",(0,i.jsx)(n.em,{children:"X"})," ; ",(0,i.jsx)(n.em,{children:"Y"})," }; ",(0,i.jsx)(n.em,{children:"columna"})," ; ",(0,i.jsx)(n.em,{children:"linea"})," {; ",(0,i.jsx)(n.em,{children:"varCol"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operador"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objeto"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nombre de objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"X"}),(0,i.jsx)(n.td,{children:"Real"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Coordenada horizontal del rat\xf3n"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Y"}),(0,i.jsx)(n.td,{children:"Real"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Coordenada vertical del rat\xf3n"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"columna"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"N\xfamero de columna"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"linea"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"N\xfamero de fila"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"varCol"}),(0,i.jsx)(n.td,{children:"Pointer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Puntero a la variable de la columna"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.strong,{children:"LISTBOX GET CELL POSITION"})," devuelve los n\xfameros de la ",(0,i.jsx)(n.em,{children:"columna"})," y de la ",(0,i.jsx)(n.em,{children:"fila"})," correspondientes a la ubicaci\xf3n en el list box (designado por ",(0,i.jsx)(n.em,{children:"*"})," y ",(0,i.jsx)(n.em,{children:"objeto"}),") del \xfaltimo clic, \xfaltima selecci\xf3n realizada con el teclado, o las coordenadas vertical y horizontal del rat\xf3n."]}),"\n",(0,i.jsx)(n.p,{children:"Este comando devuelve las coordenadas de un clic o de una acci\xf3n de selecci\xf3n incluso cuando la entrada de datos no es permitida en el list box."}),"\n",(0,i.jsxs)(n.p,{children:["Si se pasan los par\xe1metros ",(0,i.jsx)(n.em,{children:"X"})," e ",(0,i.jsx)(n.em,{children:"Y"}),", este comando devuelve los n\xfameros de columna y fila correspondientes a las coordenadas del rat\xf3n, de lo contrario este comando devuelve los n\xfameros de columna y fila de un clic o de una acci\xf3n de selecci\xf3n. El comando devolver\xe1 valores v\xe1lidos incluso cuando la entrada de datos no est\xe9 permitida en el list box."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["El valor devuelto en el par\xe1metro ",(0,i.jsx)(n.em,{children:"linea"})," no tiene en cuenta ning\xfan estado oculto/mostrado de las l\xedneas de list box. Tambi\xe9n puede devolver un valor de 0 si el clic o la posici\xf3n ",(0,i.jsx)(n.em,{children:"Y"})," est\xe1 por debajo de la \xfaltima fila."]}),"\n",(0,i.jsxs)(n.li,{children:["Si se hace clic en una celda de una columna falsa, o es dado como la posici\xf3n ",(0,i.jsx)(n.em,{children:"X,"})," el par\xe1metro ",(0,i.jsx)(n.em,{children:"columna"}),' contiene "N+1", donde N es el n\xfamero de columnas existentes cuando se hace clic en una celda en una columna falsa o si no hay columna en la posici\xf3n ',(0,i.jsx)(n.em,{children:"X"}),'. Una columna falsa se puede a\xf1adir autom\xe1ticamente cuando se selecciona la opci\xf3n "Columna de Autoredimensionamiento"; para m\xe1s informaci\xf3n consulte el p\xe1rrafo ',(0,i.jsx)(n.em,{children:"Tema Opciones de redimensionamiento"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["En un list box jer\xe1rquico, el valor de la ",(0,i.jsx)(n.em,{children:"columna"})," tiene en cuenta la(s) columna(s) fusionada(s) para representar la jerarqu\xeda, como se explica en el p\xe1rrafo ",(0,i.jsx)(n.em,{children:"Gesti\xf3n de selecciones y de posiciones"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,i.jsx)(n.em,{children:"varCol"})," devuelve un puntero a la variable (es decir al array) asociado con la columna."]}),"\n",(0,i.jsxs)(n.p,{children:["Cuando los par\xe1metros ",(0,i.jsx)(n.em,{children:"X"})," y ",(0,i.jsx)(n.em,{children:"Y"})," no se utilizan, este comando s\xf3lo puede llamarse en el marco de un list box que genere uno de los siguientes eventos:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"On Clicked y On Double Clicked"}),"\n",(0,i.jsx)(n.li,{children:"On Before Keystroke y On After Keystroke"}),"\n",(0,i.jsx)(n.li,{children:"On After Edit"}),"\n",(0,i.jsx)(n.li,{children:"On Getting Focus y On Losing Focus"}),"\n",(0,i.jsx)(n.li,{children:"On Data Change"}),"\n",(0,i.jsx)(n.li,{children:"On Selection Change"}),"\n",(0,i.jsx)(n.li,{children:"On Before Data Entry"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Cuando el comando se llama fuera de este contexto, ",(0,i.jsx)(n.strong,{children:"LISTBOX GET CELL POSITION"})," devuelve 0 en ",(0,i.jsx)(n.em,{children:"columna"})," y ",(0,i.jsx)(n.em,{children:"fila"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Este comando tiene en cuenta las acciones de selecci\xf3n o deselecci\xf3n efectuadas con el rat\xf3n, con el teclado, o utilizando el comando ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/edit-item",children:"EDIT ITEM"})," (el cual genera el evento On Getting Focus). Si la selecci\xf3n se modifica utilizando las flechas del teclado, ",(0,i.jsx)(n.em,{children:"columna"})," devuelve 0. En ese caso, el par\xe1metro ",(0,i.jsx)(n.em,{children:"varCol"})," devuelve ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/is-nil-pointer",children:"Is nil pointer"})," si se pasa."]}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/listbox-get-cell-coordinates",children:"LISTBOX GET CELL COORDINATES"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/listbox-select-break",children:"LISTBOX SELECT BREAK"})]}),"\n",(0,i.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"971"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return c},a:function(){return d}});var s=l(667294);let i={},o=s.createContext(i);function d(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);