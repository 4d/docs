"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65903"],{836100:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>s,assets:()=>d,toc:()=>i,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/create-set","title":"CREATE SET","description":"CREATE SET ( {tabla ;} conjunto )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/create-set.md","sourceDirName":"commands-legacy","slug":"/commands/create-set","permalink":"/docs/es/commands/create-set","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-set.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"create-set","title":"CREATE SET","slug":"/commands/create-set","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE EMPTY SET","permalink":"/docs/es/commands/create-empty-set"},"next":{"title":"CREATE SET FROM ARRAY","permalink":"/docs/es/commands/create-set-from-array"}}'),r=t("785893"),c=t("250065");let o={id:"create-set",title:"CREATE SET",slug:"/commands/create-set",displayed_sidebar:"docs"},a=void 0,d={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"CREATE SET"})," ( {",(0,r.jsx)(n.em,{children:"tabla"})," ;} ",(0,r.jsx)(n.em,{children:"conjunto"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tabla"}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Tabla para la cual crear un conjunto a partir de la selecci\xf3n actual o Tabla por defecto si se omite"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"conjunto"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre del nuevo conjunto"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["CREATE SET crea un nuevo conjunto, ",(0,r.jsx)(n.em,{children:"conjunto"}),", para ",(0,r.jsx)(n.em,{children:"tabla"}),", y coloca la selecci\xf3n actual en ",(0,r.jsx)(n.em,{children:"conjunto"}),". El puntero del registro actual de la tabla se guarda con ",(0,r.jsx)(n.em,{children:"conjunto"}),". Si ",(0,r.jsx)(n.em,{children:"conjunto"})," se utiliza con ",(0,r.jsx)(n.a,{href:"/docs/es/commands/use-set",title:"USE SET",children:"USE SET"}),", la selecci\xf3n actual y el registro actual se restauran. Como para todo conjunto, no hay criterio de ordenaci\xf3n; cuando ",(0,r.jsx)(n.em,{children:"conjunto"})," se utiliza, se utiliza el orden por defecto. Si ya existe un conjunto con el mismo nombre, el conjunto existente se borra y reemplaza por el nuevo conjunto."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"El siguiente ejemplo crea un conjunto despu\xe9s de efectuar una b\xfasqueda, de manera que el conjunto pueda guardarse en el disco:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Personas])\xa0// El usuario efect\xfaa una b\xfasqueda\n\xa0CREATE SET([Personas];"ConjuntoBusqueda")\xa0// Creaci\xf3n de un nuevo conjunto\n\xa0SAVE SET("ConjuntoBusqueda";"MiBusqueda")\xa0// El conjunto se guarda en el disco\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/clear-set",children:"CLEAR SET"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/create-empty-set",children:"CREATE EMPTY SET"})]}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"116"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var s=t(667294);let r={},c=s.createContext(r);function o(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);