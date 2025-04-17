"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["19310"],{217156:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>a,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/create-empty-set","title":"CREATE EMPTY SET","description":"CREATE EMPTY SET ( {tabla ;} conjunto )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/create-empty-set.md","sourceDirName":"commands-legacy","slug":"/commands/create-empty-set","permalink":"/docs/es/commands/create-empty-set","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-empty-set.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"create-empty-set","title":"CREATE EMPTY SET","slug":"/commands/create-empty-set","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"COPY SET","permalink":"/docs/es/commands/copy-set"},"next":{"title":"CREATE SET","permalink":"/docs/es/commands/create-set"}}'),r=t("785893"),c=t("250065");let d={id:"create-empty-set",title:"CREATE EMPTY SET",slug:"/commands/create-empty-set",displayed_sidebar:"docs"},o=void 0,i={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"CREATE EMPTY SET"})," ( {",(0,r.jsx)(n.em,{children:"tabla"})," ;} ",(0,r.jsx)(n.em,{children:"conjunto"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tabla"}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Tabla para la cual crear un conjunto vac\xedo o Tabla por defecto si se omite"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"conjunto"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre del nuevo conjunto vac\xedo"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["CREATE EMPTY SET crea un conjunto vac\xedo, ",(0,r.jsx)(n.em,{children:"conjunto"}),", para ",(0,r.jsx)(n.em,{children:"tabla"}),". Puede a\xf1adir registros a este conjunto con el comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/add-to-set",title:"ADD TO SET",children:"ADD TO SET"}),". Si ya existe un conjunto con el mismo nombre, el conjunto existente se borra y reemplaza con el nuevo conjunto."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," no tiene que utilizar CREATE EMPTY SET antes de utilizar ",(0,r.jsx)(n.a,{href:"/docs/es/commands/create-set",title:"CREATE SET",children:"CREATE SET"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsxs)(n.p,{children:["Consulte el ejemplo de la secci\xf3n ",(0,r.jsx)(n.em,{children:"Conjuntos"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/clear-set",children:"CLEAR SET"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/create-set",children:"CREATE SET"})]}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"140"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var s=t(667294);let r={},c=s.createContext(r);function d(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);