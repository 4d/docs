"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34066"],{579131:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>c,metadata:()=>r,assets:()=>o,toc:()=>l,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/records-in-selection","title":"Records in selection","description":"Records in selection {( tabla )} : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/records-in-selection.md","sourceDirName":"commands-legacy","slug":"/commands/records-in-selection","permalink":"/docs/es/20-R8/commands/records-in-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frecords-in-selection.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"records-in-selection","title":"Records in selection","slug":"/commands/records-in-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PREVIOUS RECORD","permalink":"/docs/es/20-R8/commands/previous-record"},"next":{"title":"REDUCE SELECTION","permalink":"/docs/es/20-R8/commands/reduce-selection"}}'),t=s("785893"),i=s("250065");let c={id:"records-in-selection",title:"Records in selection",slug:"/commands/records-in-selection",displayed_sidebar:"docs"},d=void 0,o={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Records in selection"})," {( ",(0,t.jsx)(n.em,{children:"tabla"})," )} : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tabla"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Tabla de la cual devolver el n\xfamero de registros      seleccionados,o tabla por defecto, si se omite"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Registros en la selecci\xf3n de tabla"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["Records in selection devuelve el n\xfamero de registros en la selecci\xf3n actual de ",(0,t.jsx)(n.em,{children:"tabla"}),". En contraste, ",(0,t.jsx)(n.a,{href:"/docs/es/20-R8/commands/records-in-table",title:"Records in table",children:"Records in table"})," devuelve el n\xfamero total de registros en la tabla."]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsxs)(n.p,{children:["El siguiente ejemplo muestra una t\xe9cnica de bucle actualmente utilizada para moverse entre los registros de la selecci\xf3n actual. La misma operaci\xf3n puede realizarse con la ayuda del comando ",(0,t.jsx)(n.a,{href:"/docs/es/20-R8/commands/apply-to-selection",title:"APPLY TO SELECTION",children:"APPLY TO SELECTION"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0FIRST RECORD([Personas])\xa0// Comenzar en el primer registro de la selecci\xf3n\n\xa0For($vlRegistro;1;Records in selection([Personas]))\xa0// Bucle una vez por registro\n\xa0\xa0\xa0\xa0Hacer algo\xa0// Realizar una operaci\xf3n con el registro\n\xa0\xa0\xa0\xa0NEXT RECORD([Personas])\xa0// Pasar al siguiente registro\n\xa0End for\n"})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/es/20-R8/commands/records-in-table",children:"Records in table"})}),"\n",(0,t.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"76"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return c}});var r=s(667294);let t={},i=r.createContext(t);function c(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);