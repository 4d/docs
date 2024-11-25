"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76200"],{532190:function(e,n,o){o.r(n),o.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>m,assets:()=>l,toc:()=>r,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/listbox-set-column-width","title":"LISTBOX SET COLUMN WIDTH","description":"LISTBOX SET COLUMN WIDTH ( { ;} objeto ; ancho {; anchoMin {; anchoMax*}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-set-column-width.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-column-width","permalink":"/docs/es/commands/listbox-set-column-width","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-column-width.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-set-column-width","title":"LISTBOX SET COLUMN WIDTH","slug":"/commands/listbox-set-column-width","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET COLUMN FORMULA","permalink":"/docs/es/commands/listbox-set-column-formula"},"next":{"title":"LISTBOX SET FOOTER CALCULATION","permalink":"/docs/es/commands/listbox-set-footer-calculation"}}'),i=o("785893"),t=o("250065");let d={id:"listbox-set-column-width",title:"LISTBOX SET COLUMN WIDTH",slug:"/commands/listbox-set-column-width",displayed_sidebar:"docs"},c=void 0,l={},r=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"LISTBOX SET COLUMN WIDTH"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objeto"})," ; ",(0,i.jsx)(n.em,{children:"ancho"})," {; ",(0,i.jsx)(n.em,{children:"anchoMin"})," {; ",(0,i.jsx)(n.em,{children:"anchoMax"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operador"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objeto"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nombre de objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ancho"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Ancho de la columna (en p\xedxeles)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"anchoMin"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Ancho m\xednimo de columna (en p\xedxeles)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"anchoMax"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Ancho m\xe1ximo de columna (en p\xedxeles)"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando LISTBOX SET COLUMN WIDTH le permite modificar por programaci\xf3n el ancho de una o todas las columnas del objeto (list box, columna o t\xedtulo) designado utilizando los par\xe1metros ",(0,i.jsx)(n.em,{children:"objeto"})," y ",(0,i.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional *, indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si omite este par\xe1metro, indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"})," es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor informaci\xf3n sobre nombres de objetos, consulte la secci\xf3n ."]}),"\n",(0,i.jsxs)(n.p,{children:["Pase en el par\xe1metro ",(0,i.jsx)(n.em,{children:"ancho"})," el nuevo ancho (en p\xedxeles) del objeto.",(0,i.jsx)(n.br,{}),"\n\u2022 Si ",(0,i.jsx)(n.em,{children:"objeto"})," designa el objeto list box, todas las columnas del list box son redimensionadas.",(0,i.jsx)(n.br,{}),"\n\u2022 Si ",(0,i.jsx)(n.em,{children:"objeto"})," designa una columna o un t\xedtulo de columna, s\xf3lo la columna designada es redimensionada."]}),"\n",(0,i.jsxs)(n.p,{children:["Los par\xe1metros opcionales ",(0,i.jsx)(n.em,{children:"anchoMin"})," y ",(0,i.jsx)(n.em,{children:"anchoMax"})," permiten definir los l\xedmites para el redimensionamiento manual de la columna. Puede pasar en anchoMin y anchoMax respectivamente los valores del ancho m\xednimo y m\xe1ximo, expresado en p\xedxeles. Si quiere que el usuario no pueda redimensionar la columna, debe pasar el mismo valor en ",(0,i.jsx)(n.em,{children:"ancho"}),", ",(0,i.jsx)(n.em,{children:"anchoMin"})," y ",(0,i.jsx)(n.em,{children:"anchoMax"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/es/commands/listbox-get-column-width",children:"LISTBOX Get column width"})})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return c},a:function(){return d}});var s=o(667294);let i={},t=s.createContext(i);function d(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);