"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63090"],{267241:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>m,assets:()=>r,toc:()=>l,frontMatter:()=>c});var t=JSON.parse('{"id":"commands-legacy/listbox-get-static-columns","title":"LISTBOX Get static columns","description":"LISTBOX Get static columns ( { ;} objeto* ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-static-columns.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-static-columns","permalink":"/docs/es/commands/listbox-get-static-columns","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-static-columns.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-static-columns","title":"LISTBOX Get static columns","slug":"/commands/listbox-get-static-columns","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX Get rows height","permalink":"/docs/es/commands/listbox-get-rows-height"},"next":{"title":"LISTBOX GET TABLE SOURCE","permalink":"/docs/es/commands/listbox-get-table-source"}}'),o=s("785893"),i=s("250065");let c={id:"listbox-get-static-columns",title:"LISTBOX Get static columns",slug:"/commands/listbox-get-static-columns",displayed_sidebar:"docs"},a=void 0,r={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function d(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"LISTBOX Get static columns"})," ( {* ;} ",(0,o.jsx)(n.em,{children:"objeto"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Operador"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"objeto"}),(0,o.jsx)(n.td,{children:"any"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nombre de objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"resultado"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"N\xfamero de columnas est\xe1ticas"})]})]})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando ",(0,o.jsx)(n.strong,{children:"LISTBOX Get static columns"})," devuelve el n\xfamero de columnas est\xe1ticas en el list box designado por los par\xe1metros ",(0,o.jsx)(n.em,{children:"objeto"})," y ",(0,o.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,o.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,o.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (una cadena). Si no pasa este par\xe1metro, esto indica que el par\xe1metro ",(0,o.jsx)(n.em,{children:"objeto"})," es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena."]}),"\n",(0,o.jsxs)(n.p,{children:["Las columnas est\xe1ticas pueden definirse v\xeda la Lista de propiedades o con la ayuda del comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/listbox-set-static-columns",children:"LISTBOX SET STATIC COLUMNS"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Si una columna se inserta o se elimina por programaci\xf3n dentro de un conjunto de columnas est\xe1ticas, el n\xfamero de columnas que devuelve este comando tiene en cuenta este cambio.",(0,o.jsx)(n.br,{}),"\nSin embargo, el comando no tiene en cuenta el estado visible/invisible de las columnas."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," las columnas est\xe1ticas y las columnas bloqueadas son dos funciones independientes. Para mayor informaci\xf3n, consulte el Manual de ",(0,o.jsx)(n.em,{children:"Dise\xf1o"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/es/commands/listbox-set-static-columns",children:"LISTBOX SET STATIC COLUMNS"})})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return c}});var t=s(667294);let o={},i=t.createContext(o);function c(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);