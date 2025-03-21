"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33099"],{852897:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>o,toc:()=>a,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/listbox-set-rows-height","title":"LISTBOX SET ROWS HEIGHT","description":"LISTBOX SET ROWS HEIGHT ( { ;} objeto ; altura {; unidad*} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-set-rows-height.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-rows-height","permalink":"/docs/es/20-R7/commands/listbox-set-rows-height","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-rows-height.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-set-rows-height","title":"LISTBOX SET ROWS HEIGHT","slug":"/commands/listbox-set-rows-height","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET ROW HEIGHT","permalink":"/docs/es/20-R7/commands/listbox-set-row-height"},"next":{"title":"LISTBOX SET STATIC COLUMNS","permalink":"/docs/es/20-R7/commands/listbox-set-static-columns"}}'),r=s("785893"),i=s("250065");let d={id:"listbox-set-rows-height",title:"LISTBOX SET ROWS HEIGHT",slug:"/commands/listbox-set-rows-height",displayed_sidebar:"docs"},l=void 0,o={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LISTBOX SET ROWS HEIGHT"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objeto"})," ; ",(0,r.jsx)(n.em,{children:"altura"})," {; ",(0,r.jsx)(n.em,{children:"unidad"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objeto"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre de objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"altura"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Altura de la fila (en p\xedxeles)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"unidad"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Unidad de valor de altura:0 o se omite = p\xedxeles, 1 = l\xedneas"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"LISTBOX SET ROWS HEIGHT"})," le permite modificar por programaci\xf3n la altura de las filas del objeto list box designado por los par\xe1metros ",(0,r.jsx)(n.em,{children:"objeto"})," y ",(0,r.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,r.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si omite este par\xe1metro, indica que el par\xe1metro ",(0,r.jsx)(n.em,{children:"objeto"})," es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor informaci\xf3n sobre nombres de objetos, consulte la secci\xf3n ",(0,r.jsx)(n.em,{children:"Propiedades de los objetos"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Por defecto, si omite el par\xe1metro ",(0,r.jsx)(n.em,{children:"unidad"}),", la altura se expresa en p\xedxeles. Para modificar la unidad, en el par\xe1metro ",(0,r.jsx)(n.em,{children:"unidad"})," pase una de las siguientes constantes, ubicadas en el tema ",(0,r.jsx)(n.em,{children:"Listbox"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Comentario"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lk lines"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"La altura designa un n\xfamero de l\xedneas. 4D calcula la altura de una l\xednea en funci\xf3n de la fuente."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lk pixels"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"La altura es un n\xfamero en p\xedxeles (por defecto)"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," para mayor informaci\xf3n sobre el c\xe1lculo de las alturas de las l\xedneas, consulte el manual de ",(0,r.jsx)(n.em,{children:"Dise\xf1o"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/listbox-get-rows-height",children:"LISTBOX Get rows height"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/listbox-set-auto-row-height",children:"LISTBOX SET AUTO ROW HEIGHT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/listbox-set-row-height",children:"LISTBOX SET ROW HEIGHT"})]}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"835"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var t=s(667294);let r={},i=t.createContext(r);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);