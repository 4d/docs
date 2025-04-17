"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86817"],{543306:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>t,assets:()=>o,toc:()=>a,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/clear-named-selection","title":"CLEAR NAMED SELECTION","description":"CLEAR NAMED SELECTION ( nombre )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/clear-named-selection.md","sourceDirName":"commands-legacy","slug":"/commands/clear-named-selection","permalink":"/docs/es/20-R8/commands/clear-named-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fclear-named-selection.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"clear-named-selection","title":"CLEAR NAMED SELECTION","slug":"/commands/clear-named-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Selecciones temporales","permalink":"/docs/es/20-R8/commands/theme/Named-Selections"},"next":{"title":"COPY NAMED SELECTION","permalink":"/docs/es/20-R8/commands/copy-named-selection"}}'),c=s("785893"),r=s("250065");let d={id:"clear-named-selection",title:"CLEAR NAMED SELECTION",slug:"/commands/clear-named-selection",displayed_sidebar:"docs"},i=void 0,o={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"CLEAR NAMED SELECTION"})," ( ",(0,c.jsx)(n.em,{children:"nombre"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Par\xe1metro"}),(0,c.jsx)(n.th,{children:"Tipo"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"nombre"}),(0,c.jsx)(n.td,{children:"Text"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"Nombre de la selecci\xf3n temporal a borrar"})]})})]}),"\n",(0,c.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,c.jsxs)(n.p,{children:["CLEAR NAMED SELECTION borra ",(0,c.jsx)(n.em,{children:"temp"})," de la memoria y libera la memoria utilizada por ",(0,c.jsx)(n.em,{children:"temp"}),".CLEAR NAMED SELECTION no afecta las tablas, selecciones, o registros. Como las selecciones temporales utilizan memoria, es recomendable borrar las selecciones temporales cuando ya no se necesiten."]}),"\n",(0,c.jsxs)(n.p,{children:["Si ",(0,c.jsx)(n.em,{children:"temp"})," fue creado por el comando ",(0,c.jsx)(n.a,{href:"/docs/es/20-R8/commands/cut-named-selection",title:"CUT NAMED SELECTION",children:"CUT NAMED SELECTION"})," y luego manipulado utilizando el comando ",(0,c.jsx)(n.a,{href:"/docs/es/20-R8/commands/use-named-selection",title:"USE NAMED SELECTION",children:"USE NAMED SELECTION"}),", t",(0,c.jsx)(n.em,{children:"emp"})," no existe m\xe1s en memoria. En este caso, no es necesario utilizar el comando CLEAR NAMED SELECTION."]}),"\n",(0,c.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/es/20-R8/commands/copy-named-selection",children:"COPY NAMED SELECTION"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/es/20-R8/commands/cut-named-selection",children:"CUT NAMED SELECTION"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/es/20-R8/commands/use-named-selection",children:"USE NAMED SELECTION"})]}),"\n",(0,c.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"N\xfamero de comando"}),(0,c.jsx)(n.td,{children:"333"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Hilo seguro"}),(0,c.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var t=s(667294);let c={},r=t.createContext(c);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);