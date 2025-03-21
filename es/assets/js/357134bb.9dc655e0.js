"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31349"],{151690:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>d,assets:()=>i,toc:()=>c,contentTitle:()=>t});var d=JSON.parse('{"id":"commands-legacy/is-field-number-valid","title":"Is field number valid","description":"Is field number valid ( numTabla | ptrTabla ; numCamp ) : Boolean","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/is-field-number-valid.md","sourceDirName":"commands-legacy","slug":"/commands/is-field-number-valid","permalink":"/docs/es/commands/is-field-number-valid","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-field-number-valid.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"is-field-number-valid","title":"Is field number valid","slug":"/commands/is-field-number-valid","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"IMPORT STRUCTURE","permalink":"/docs/es/commands/import-structure"},"next":{"title":"Is table number valid","permalink":"/docs/es/commands/is-table-number-valid"}}'),l=s("785893"),r=s("250065");let a={id:"is-field-number-valid",title:"Is field number valid",slug:"/commands/is-field-number-valid",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function o(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Is field number valid"})," ( numTabla | ptrTabla ; ",(0,l.jsx)(n.em,{children:"numCamp"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Par\xe1metro"}),(0,l.jsx)(n.th,{children:"Tipo"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"numTabla | ptrTabla"}),(0,l.jsx)(n.td,{children:"Entero largo, Puntero"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"N\xfamero de tabla o Puntero a una tabla"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"numCamp"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"N\xfamero de campo"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Resultado"}),(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"True = el campo existe en la tabla False = el campo no existe en la tabla"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsxs)(n.p,{children:["El comando Is field number valid devuelve True si el campo cuyo n\xfamero se pasa en el par\xe1metro ",(0,l.jsx)(n.em,{children:"numCamp"})," existe en la tabla cuyo n\xfamero o puntero se pasa en el par\xe1metro ",(0,l.jsx)(n.em,{children:"numTabla"})," o ",(0,l.jsx)(n.em,{children:"ptrTabla"}),". Si el campo no existe, el comando devuelve False. Recuerde que el comando devuelve False si la tabla que contiene el campo se encuentra en la Papelera del Explorador."]}),"\n",(0,l.jsx)(n.p,{children:"Este comando permite detectar las eventuales eliminaciones de campos, que crean rupturas en la secuencia de n\xfameros de los campos."}),"\n",(0,l.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/es/commands/last-table-number",children:"Last table number"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/es/commands/is-table-number-valid",children:"Is table number valid"})]}),"\n",(0,l.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"N\xfamero de comando"}),(0,l.jsx)(n.td,{children:"1000"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Hilo seguro"}),(0,l.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return a}});var d=s(667294);let l={},r=d.createContext(l);function a(e){let n=d.useContext(r);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);