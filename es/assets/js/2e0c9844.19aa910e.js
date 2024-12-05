"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3071"],{242670:function(e,n,o){o.r(n),o.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>m,assets:()=>c,toc:()=>l,frontMatter:()=>r});var s=JSON.parse('{"id":"commands-legacy/listbox-moved-column-number","title":"LISTBOX MOVED COLUMN NUMBER","description":"LISTBOX MOVED COLUMN NUMBER ( { ;} objeto ; antPosicion ; nuevPosicion* )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-moved-column-number.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-moved-column-number","permalink":"/docs/es/commands/listbox-moved-column-number","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-moved-column-number.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-moved-column-number","title":"LISTBOX MOVED COLUMN NUMBER","slug":"/commands/listbox-moved-column-number","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX MOVE COLUMN","permalink":"/docs/es/commands/listbox-move-column"},"next":{"title":"LISTBOX MOVED ROW NUMBER","permalink":"/docs/es/commands/listbox-moved-row-number"}}'),i=o("785893"),t=o("250065");let r={id:"listbox-moved-column-number",title:"LISTBOX MOVED COLUMN NUMBER",slug:"/commands/listbox-moved-column-number",displayed_sidebar:"docs"},d=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"LISTBOX MOVED COLUMN NUMBER"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objeto"})," ; ",(0,i.jsx)(n.em,{children:"antPosicion"})," ; ",(0,i.jsx)(n.em,{children:"nuevPosicion"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operador"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objeto"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nombre de objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"antPosicion"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Posici\xf3n anterior de la columna movida"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"nuevPosicion"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Nueva posici\xf3n de la columna movida"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando LISTBOX MOVED COLUMN NUMBER devuelve dos n\xfameros en ",(0,i.jsx)(n.em,{children:"antPosicion"})," y ",(0,i.jsx)(n.em,{children:"nuevPosicion"})," indicando respectivamente la posici\xf3n anterior y la nueva posici\xf3n de la columna movida en el list box designado por los par\xe1metros ",(0,i.jsx)(n.em,{children:"objeto"})," y ",(0,i.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional *, indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si omite este par\xe1metro, indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"})," es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor informaci\xf3n sobre nombres de objetos, consulte la secci\xf3n ."]}),"\n",(0,i.jsxs)(n.p,{children:["Este comando debe utilizarse con el evento de formulario On column moved (ver el comando ",(0,i.jsx)(n.a,{href:"form-event.md",title:"Form event",children:"Form event"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," este comando tiene en cuenta las columnas invisibles."]}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"form-event-code.md",children:"Form event code"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/listbox-moved-row-number",children:"LISTBOX MOVED ROW NUMBER"})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return d},a:function(){return r}});var s=o(667294);let i={},t=s.createContext(i);function r(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);