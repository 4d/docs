"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84890"],{471207:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>c,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/one-record-select","title":"ONE RECORD SELECT","description":"ONE RECORD SELECT {( tabla )}","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/one-record-select.md","sourceDirName":"commands-legacy","slug":"/commands/one-record-select","permalink":"/docs/es/commands/one-record-select","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fone-record-select.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"one-record-select","title":"ONE RECORD SELECT","slug":"/commands/one-record-select","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"NEXT RECORD","permalink":"/docs/es/commands/next-record"},"next":{"title":"PREVIOUS RECORD","permalink":"/docs/es/commands/previous-record"}}'),t=r("785893"),a=r("250065");let c={id:"one-record-select",title:"ONE RECORD SELECT",slug:"/commands/one-record-select",displayed_sidebar:"docs"},i=void 0,d={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Nota",id:"nota",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ONE RECORD SELECT"})," {( ",(0,t.jsx)(n.em,{children:"tabla"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tabla"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Tabla en la cual reducir la selecci\xf3n actual al registro actual o Tabla por defecto si se omite"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["ONE RECORD SELECT reduce la selecci\xf3n actual de ",(0,t.jsx)(n.em,{children:"tabla"})," al registro actual. Si no existe un registro actual o si el registro actual no est\xe1 cargado en la memoria (caso particular), ONE RECORD SELECT no tiene ning\xfan efecto."]}),"\n",(0,t.jsx)(n.h4,{id:"nota",children:"Nota"}),"\n",(0,t.jsxs)(n.p,{children:["Este comando fue \xfatil para \u201Creponer\u201D un registro que hab\xeda sido apilado y desapilado de la pila de registro mientras la selecci\xf3n de la tabla era modificada. ",(0,t.jsx)(n.a,{href:"/docs/es/commands/set-query-destination",children:"SET QUERY DESTINATION"})," permite efectuar una b\xfasqueda sin tener que cambiar la selecci\xf3n ni el registro actual de una tabla; por lo tanto, no necesita m\xe1s apilar y desapilar un registro actual para efectuar una b\xfasqueda en su tabla. Por consiguiente, ",(0,t.jsx)(n.strong,{children:"ONE RECORD SELECT"})," es menos \xfatil, a menos que quiera expresamente reducir la selecci\xf3n de una tabla al registro actual."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Atenci\xf3n:"})," tenga en cuenta que un n\xfamero de registro puede reutilizarse si se elimina el registro y se crea otro (ver ",(0,t.jsx)(n.em,{children:"Acerca de n\xfameros de registros"}),")."]}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/commands/create-selection-from-array",children:"CREATE SELECTION FROM ARRAY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Selecciones temporales"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/selection-range-to-array",children:"SELECTION RANGE TO ARRAY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/selection-to-array",children:"SELECTION TO ARRAY"})]}),"\n",(0,t.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"189"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifica el registro actual"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifica la selecci\xf3n actual"}),(0,t.jsx)(n.td,{})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return c}});var s=r(667294);let t={},a=s.createContext(t);function c(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);