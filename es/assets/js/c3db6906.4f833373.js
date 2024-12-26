"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5921"],{6981:function(e,n,s){s.r(n),s.d(n,{metadata:()=>o,contentTitle:()=>t,default:()=>m,assets:()=>c,toc:()=>l,frontMatter:()=>d});var o=JSON.parse('{"id":"commands-legacy/listbox-moved-row-number","title":"LISTBOX MOVED ROW NUMBER","description":"LISTBOX MOVED ROW NUMBER ( { ;} objeto ; antPosicion ; nuevPosicion* )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-moved-row-number.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-moved-row-number","permalink":"/docs/es/commands/listbox-moved-row-number","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-moved-row-number.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-moved-row-number","title":"LISTBOX MOVED ROW NUMBER","slug":"/commands/listbox-moved-row-number","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX MOVED COLUMN NUMBER","permalink":"/docs/es/commands/listbox-moved-column-number"},"next":{"title":"LISTBOX SELECT BREAK","permalink":"/docs/es/commands/listbox-select-break"}}'),i=s("785893"),r=s("250065");let d={id:"listbox-moved-row-number",title:"LISTBOX MOVED ROW NUMBER",slug:"/commands/listbox-moved-row-number",displayed_sidebar:"docs"},t=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"LISTBOX MOVED ROW NUMBER"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objeto"})," ; ",(0,i.jsx)(n.em,{children:"antPosicion"})," ; ",(0,i.jsx)(n.em,{children:"nuevPosicion"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operador"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objeto"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nombre de objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"antPosicion"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Posici\xf3n anterior de la fila movida"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"nuevPosicion"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Nueva posici\xf3n de la fila movida"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando LISTBOX MOVED ROW NUMBER devuelve dos n\xfameros en ",(0,i.jsx)(n.em,{children:"antPosicion"})," y ",(0,i.jsx)(n.em,{children:"nuevPosicion"})," indicando respectivamente la posici\xf3n anterior y la nueva posici\xf3n de la fila movida en el list box, especificadas por los par\xe1metros ",(0,i.jsx)(n.em,{children:"objeto"})," y ",(0,i.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," s\xf3lo puede mover las l\xedneas en los list box de tipo array."]}),"\n",(0,i.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,i.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si omite este par\xe1metro, indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"})," es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor informaci\xf3n sobre nombres de objetos, consulte la secci\xf3n ",(0,i.jsx)(n.em,{children:"Propiedades de los objetos"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Este comando debe utilizarse con el evento de formulario On row moved (ver el comando ",(0,i.jsx)(n.a,{href:"form-event-code.md",children:"Form event code"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," este comando no tiene en cuenta el estado oculto/mostrado de las l\xedneas del list box."]}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"form-event-code.md",children:"Form event code"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/listbox-moved-column-number",children:"LISTBOX MOVED COLUMN NUMBER"})]}),"\n",(0,i.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"837"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return d}});var o=s(667294);let i={},r=o.createContext(i);function d(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);