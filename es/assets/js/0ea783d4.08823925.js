"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24700"],{436306:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/longint-array-from-selection","title":"LONGINT ARRAY FROM SELECTION","description":"LONGINT ARRAY FROM SELECTION ( tabla ; arrReg {; seleccion} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/longint-array-from-selection.md","sourceDirName":"commands-legacy","slug":"/commands/longint-array-from-selection","permalink":"/docs/es/20-R7/commands/longint-array-from-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flongint-array-from-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"longint-array-from-selection","title":"LONGINT ARRAY FROM SELECTION","slug":"/commands/longint-array-from-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LIST TO ARRAY","permalink":"/docs/es/20-R7/commands/list-to-array"},"next":{"title":"MULTI SORT ARRAY","permalink":"/docs/es/20-R7/commands/multi-sort-array"}}'),t=r("785893"),l=r("250065");let i={id:"longint-array-from-selection",title:"LONGINT ARRAY FROM SELECTION",slug:"/commands/longint-array-from-selection",displayed_sidebar:"docs"},c=void 0,d={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"LONGINT ARRAY FROM SELECTION"})," ( ",(0,t.jsx)(n.em,{children:"tabla"})," ; ",(0,t.jsx)(n.em,{children:"arrReg"})," {; ",(0,t.jsx)(n.em,{children:"seleccion"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tabla"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Tabla de la selecci\xf3n actual"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"arrReg"}),(0,t.jsx)(n.td,{children:"Integer array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Array de n\xfameros de registros"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"seleccion"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre de la selecci\xf3n temporal o de la selecci\xf3n actual si este par\xe1metro es omitido"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando LONGINT ARRAY FROM SELECTION llena el array ",(0,t.jsx)(n.em,{children:"arrReg"})," con los n\xfameros (absolutos) de los registros que est\xe1n en ",(0,t.jsx)(n.em,{children:"seleccion"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si no pasa el par\xe1metro ",(0,t.jsx)(n.em,{children:"seleccion"}),", el comando utiliza la selecci\xf3n actual de la ",(0,t.jsx)(n.em,{children:"tabla"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," el elemento n\xfamero 0 del array se inicializa en -1."]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"Quiere recuperar los n\xfameros de los registros de la selecci\xf3n actual:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY LONGINT($_arrRecNum;0)\xa0//obligatorio para el modo compilado\n\xa0LONGINT ARRAY FROM SELECTION([Clients];$_arrRecNum)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/create-selection-from-array",children:"CREATE SELECTION FROM ARRAY"})}),"\n",(0,t.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"647"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return i}});var s=r(667294);let t={},l=s.createContext(t);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);