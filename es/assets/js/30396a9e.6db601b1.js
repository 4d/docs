"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72972"],{187036:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>i,assets:()=>d,toc:()=>l,contentTitle:()=>a});var i=JSON.parse('{"id":"commands-legacy/listbox-insert-rows","title":"LISTBOX INSERT ROWS","description":"LISTBOX INSERT ROWS ( { ;} objeto ; posicionL {; numLineas*} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/listbox-insert-rows.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-insert-rows","permalink":"/docs/es/20-R8/commands/listbox-insert-rows","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-insert-rows.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-insert-rows","title":"LISTBOX INSERT ROWS","slug":"/commands/listbox-insert-rows","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX INSERT COLUMN FORMULA","permalink":"/docs/es/20-R8/commands/listbox-insert-column-formula"},"next":{"title":"LISTBOX MOVE COLUMN","permalink":"/docs/es/20-R8/commands/listbox-move-column"}}'),r=s("785893"),o=s("250065");let t={id:"listbox-insert-rows",title:"LISTBOX INSERT ROWS",slug:"/commands/listbox-insert-rows",displayed_sidebar:"docs"},a=void 0,d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LISTBOX INSERT ROWS"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objeto"})," ; ",(0,r.jsx)(n.em,{children:"posicionL"})," {; ",(0,r.jsx)(n.em,{children:"numLineas"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objeto"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre de objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"posicionL"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Posici\xf3n de la fila a insertar"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"numLineas"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero de l\xedneas a insertar"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"LISTBOX INSERT ROWS"})," inserta una o varias nuevas l\xedneas en el list box designado por los par\xe1metros ",(0,r.jsx)(n.em,{children:"objeto"})," y ",(0,r.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),": este comando funciona \xfanicamente con los list box basados en arrays. Cuando este comando se utiliza con un list box basado en una selecci\xf3n, no hace nada y la variable sistema OK toma el valor 0."]}),"\n",(0,r.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,r.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si omite este par\xe1metro, indica que el par\xe1metro ",(0,r.jsx)(n.em,{children:"objeto"})," es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor informaci\xf3n sobre nombres de objetos, consulte la secci\xf3n ",(0,r.jsx)(n.em,{children:"Propiedades de los objetos"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Por defecto, si se omite el par\xe1metro ",(0,r.jsx)(n.em,{children:"numLineas"}),", s\xf3lo se inserta una l\xednea. De lo contrario, el comando inserta el n\xfamero de l\xedneas definido en este par\xe1metro."]}),"\n",(0,r.jsxs)(n.p,{children:["La fila se inserta en la posici\xf3n definida por el par\xe1metro ",(0,r.jsx)(n.em,{children:"posicionL"}),". Una nueva fila se a\xf1ade autom\xe1ticamente en esta posici\xf3n en todos los arrays utilizados por las columnas del list box, cualquiera que sea su tipo y visibilidad."]}),"\n",(0,r.jsxs)(n.p,{children:["Si el valor de ",(0,r.jsx)(n.em,{children:"posicionL"})," es mayor que el n\xfamero total de filas en el list box, la fila se a\xf1ade al final de cada array. Si es igual a 0, la fila se a\xf1ade al principio de cada array. Si contiene un valor negativo, el comando no hace nada."]}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/listbox-delete-rows",children:"LISTBOX DELETE ROWS"})}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"913"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifica variables"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return t}});var i=s(667294);let r={},o=i.createContext(r);function t(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);