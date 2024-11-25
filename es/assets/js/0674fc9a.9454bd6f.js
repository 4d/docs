"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["56654"],{293476:function(e,n,o){o.r(n),o.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>m,assets:()=>t,toc:()=>c,frontMatter:()=>a});var s=JSON.parse('{"id":"commands-legacy/listbox-sort-columns","title":"LISTBOX SORT COLUMNS","description":"LISTBOX SORT COLUMNS ( { ;} objeto ; numColumna ; orden {; numColumna2 ; orden2 ; ... ; numColumnaN ; ordenN*} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-sort-columns.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-sort-columns","permalink":"/docs/es/commands/listbox-sort-columns","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-sort-columns.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-sort-columns","title":"LISTBOX SORT COLUMNS","slug":"/commands/listbox-sort-columns","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET TABLE SOURCE","permalink":"/docs/es/commands/listbox-set-table-source"},"next":{"title":"Mail","permalink":"/docs/es/category/mail"}}'),r=o("785893"),i=o("250065");let a={id:"listbox-sort-columns",title:"LISTBOX SORT COLUMNS",slug:"/commands/listbox-sort-columns",displayed_sidebar:"docs"},d=void 0,t={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4}];function l(e){let n={em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LISTBOX SORT COLUMNS"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objeto"})," ; ",(0,r.jsx)(n.em,{children:"numColumna"})," ; ",(0,r.jsx)(n.em,{children:"orden"})," {; ",(0,r.jsx)(n.em,{children:"numColumna2"})," ; ",(0,r.jsx)(n.em,{children:"orden2"})," ; ... ; ",(0,r.jsx)(n.em,{children:"numColumnaN"})," ; ",(0,r.jsx)(n.em,{children:"ordenN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objeto"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre de objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"numColumna"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero(s) de columna(s) a ordenar"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"orden"}),(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:'">" para una ordenaci\xf3n ascendente o "<" para una ordenaci\xf3n descendente'})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsx)(n.p,{children:"El comando LISTBOX SORT COLUMNS aplica una ordenaci\xf3n est\xe1ndar a las l\xedneas del list box definido por el objeto y los par\xe1metros * en funci\xf3n de los valores de una o varias columnas."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),": una ordenaci\xf3n est\xe1ndar se aplica en base a un \xfanico valor de columna cuando el usuario hace clic en el encabezado de la columna (ver ",(0,r.jsx)(n.em,{children:"Ordenaci\xf3n est\xe1ndar"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,r.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si omite este par\xe1metro, indica que el par\xe1metro ",(0,r.jsx)(n.em,{children:"objeto"})," es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor informaci\xf3n sobre nombres de objetos, consulte la secci\xf3n indica que el par\xe1metro ",(0,r.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si omite este par\xe1metro, indica que el par\xe1metro ",(0,r.jsx)(n.em,{children:"objeto"})," es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor informaci\xf3n sobre nombres de objetos, consulte la secci\xf3n ",(0,r.jsx)(n.em,{children:"Propiedades de los objetos"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"numCol"}),", pase el n\xfamero de columna cuyos valores quiere utilizar como criterio de ordenaci\xf3n. Puede utilizar todo tipo de datos, a excepci\xf3n de im\xe1genes y punteros."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"orden"}),", pase el s\xedmbolo > o < para indicar el criterio de ordenaci\xf3n. Si ",(0,r.jsx)(n.em,{children:"orden"})," contiene el s\xedmbolo \u201Cmayor que\u201D(>), el criterio de ordenaci\xf3n es ascendente. Si ",(0,r.jsx)(n.em,{children:"orden"})," contiene el s\xedmbolo \u201Cmenor que\u201D (<), el criterio de ordenaci\xf3n es descendente."]}),"\n",(0,r.jsxs)(n.p,{children:["Puede definir ordenaciones multiniveles: para hacerlo, pase tantos pares (",(0,r.jsx)(n.em,{children:"numCol;orden"}),") como sea necesario. El nivel de ordenaci\xf3n se define por la posici\xf3n del par\xe1metro en la llamada."]}),"\n",(0,r.jsx)(n.p,{children:"Conforme con el principio de funcionamiento del list box, las columnas est\xe1n sincronizadas, lo que significa que la ordenaci\xf3n de una columna repercute autom\xe1ticamente en todas las otras columnas del objeto."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," el comando ",(0,r.jsx)(n.strong,{children:"LISTBOX SORT COLUMNS"})," no tiene en cuenta la propiedad listbox ",(0,r.jsx)(n.em,{children:"Sortable"}),"."]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return d},a:function(){return a}});var s=o(667294);let r={},i=s.createContext(r);function a(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);