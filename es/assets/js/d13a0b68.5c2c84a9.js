"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58095"],{471392:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>o,assets:()=>i,toc:()=>c,contentTitle:()=>l});var o=JSON.parse('{"id":"commands-legacy/listbox-set-table-source","title":"LISTBOX SET TABLE SOURCE","description":"LISTBOX SET TABLE SOURCE ( { ;} objeto ; numTabla | tempo {; nomSel*} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/listbox-set-table-source.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-table-source","permalink":"/docs/es/commands/listbox-set-table-source","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-table-source.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-set-table-source","title":"LISTBOX SET TABLE SOURCE","slug":"/commands/listbox-set-table-source","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET STATIC COLUMNS","permalink":"/docs/es/commands/listbox-set-static-columns"},"next":{"title":"LISTBOX SORT COLUMNS","permalink":"/docs/es/commands/listbox-sort-columns"}}'),t=s("785893"),a=s("250065");let r={id:"listbox-set-table-source",title:"LISTBOX SET TABLE SOURCE",slug:"/commands/listbox-set-table-source",displayed_sidebar:"docs"},l=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function d(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"LISTBOX SET TABLE SOURCE"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objeto"})," ; numTabla | tempo {; ",(0,t.jsx)(n.em,{children:"nomSel"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objeto"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsxs)(n.td,{children:["Nombre de objeto (si se especifica ",(0,t.jsx)(n.em,{children:") o Variable (si se omite"}),")"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"numTabla | tempo"}),(0,t.jsx)(n.td,{children:"Entero largo, Cadena"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de la tabla de la cual utilizarla selecci\xf3n actual o nombre de la selecci\xf3n temporal a utilizar"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nomSel"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre del conjunto seleccionado"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.strong,{children:"LISTBOX SET TABLE SOURCE"})," permite modificar la fuente de datos mostrada en el listbox dise\xf1ado por los par\xe1metros ",(0,t.jsx)(n.em,{children:"*"})," y ",(0,t.jsx)(n.em,{children:"objeto"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," este comando s\xf3lo puede utilizarse cuando la propiedad \u201CFuente de datos\u201D del list box es ",(0,t.jsx)(n.strong,{children:"Selecci\xf3n actual"})," o ",(0,t.jsx)(n.strong,{children:"Selecci\xf3n temporal"})," (para mayor informaci\xf3n, consulte la secci\xf3n ",(0,t.jsx)(n.em,{children:"Gesti\xf3n programada de los objetos de tipo List box"}),"). El comando no hace nada si lo utiliza con un list box asociado a un array, colecciones o selecciones de entidades."]}),"\n",(0,t.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,t.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,t.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,t.jsx)(n.em,{children:"objeto"})," es una variable. En este caso, no pase una cadena sino una referencia de variable. Para mayor infomaci\xf3n sobre nombres de objetos, por favor consulte la secci\xf3n indica que el par\xe1metro ",(0,t.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si omite este par\xe1metro, indica que el par\xe1metro ",(0,t.jsx)(n.em,{children:"objeto"})," es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor informaci\xf3n sobre nombres de objetos, consulte la secci\xf3n ",(0,t.jsx)(n.em,{children:"Propiedades de los objetos"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si pasa un n\xfamero de tabla como par\xe1metro ",(0,t.jsx)(n.em,{children:"numTabla"}),", el list box se llenar\xe1 con los datos de los registros en la selecci\xf3n actual de la tabla."]}),"\n",(0,t.jsxs)(n.p,{children:["Si pasa un nombre de selecci\xf3n temporal como par\xe1metro ",(0,t.jsx)(n.em,{children:"tempo"}),", el list box se llenar\xe1 con los datos de los registros que pertenecen a la selecci\xf3n temporal."]}),"\n",(0,t.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,t.jsx)(n.em,{children:"nomSubrayado"})," permite asociar un conjunto resaltado al list box. El conjunto resaltado se utiliza para la gesti\xf3n de resaltar los registros por el usuario en el list box."]}),"\n",(0,t.jsx)(n.p,{children:"Si el list box ya contiene las columnas, sus contenidos se actualizar\xe1n despu\xe9s de la ejecuci\xf3n del comando."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota"}),": por razones de optimizaci\xf3n, este comando se procesa de manera asincr\xf3nica, es decir el cambio de fuente del listbox se realiza s\xf3lo cuando se completa la ejecuci\xf3n del m\xe9todo del cual se llama el comando."]}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/es/commands/listbox-get-table-source",children:"LISTBOX GET TABLE SOURCE"})}),"\n",(0,t.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"1013"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return r}});var o=s(667294);let t={},a=o.createContext(t);function r(e){let n=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);