"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65751"],{266776:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>o,assets:()=>i,toc:()=>c,contentTitle:()=>d});var o=JSON.parse('{"id":"commands-legacy/listbox-set-locked-columns","title":"LISTBOX SET LOCKED COLUMNS","description":"LISTBOX SET LOCKED COLUMNS ( { ;} objeto ;  numColumnas* )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-set-locked-columns.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-locked-columns","permalink":"/docs/es/commands/listbox-set-locked-columns","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-locked-columns.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-set-locked-columns","title":"LISTBOX SET LOCKED COLUMNS","slug":"/commands/listbox-set-locked-columns","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET HIERARCHY","permalink":"/docs/es/commands/listbox-set-hierarchy"},"next":{"title":"LISTBOX SET PROPERTY","permalink":"/docs/es/commands/listbox-set-property"}}'),t=s("785893"),l=s("250065");let r={id:"listbox-set-locked-columns",title:"LISTBOX SET LOCKED COLUMNS",slug:"/commands/listbox-set-locked-columns",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"LISTBOX SET LOCKED COLUMNS"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objeto"})," ;  ",(0,t.jsx)(n.em,{children:"numColumnas"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objeto"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre de objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"numColumnas"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de columnas a bloquear"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.strong,{children:"LISTBOX SET LOCKED COLUMNS"})," bloquea las primeras ",(0,t.jsx)(n.em,{children:"numColumnas"})," columnas izquierdas del list box designado por los par\xe1metros ",(0,t.jsx)(n.em,{children:"objeto"})," y ",(0,t.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Las columnas bloqueadas se muestran en la parte izquierda del list box y no se desplazan con el resto de las columnas del list box. Para mayor informaci\xf3n, consulte el Manual de ",(0,t.jsx)(n.em,{children:"Dise\xf1o"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,t.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,t.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (una cadena). Si no pasa este par\xe1metro, esto indica que el par\xe1metro ",(0,t.jsx)(n.em,{children:"objeto"})," es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena."]}),"\n",(0,t.jsxs)(n.p,{children:["En ",(0,t.jsx)(n.em,{children:"numColumnas"}),", puede pasar cualquier valor entre 1 y el n\xfamero total de columnas del list box -1. Para un list box con X columnas, si pasa un valor > X-1 en ",(0,t.jsx)(n.em,{children:"numColumnas"}),", se reducir\xe1 autom\xe1ticamente al valor X-1."]}),"\n",(0,t.jsxs)(n.p,{children:["Para eliminar el bloqueo de columnas, pase 0 o un valor negativo en ",(0,t.jsx)(n.em,{children:"numColumnas"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/commands/listbox-get-locked-columns",children:"LISTBOX Get locked columns"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/listbox-set-static-columns",children:"LISTBOX SET STATIC COLUMNS"})]}),"\n",(0,t.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"1151"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return r}});var o=s(667294);let t={},l=o.createContext(t);function r(e){let n=o.useContext(l);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);