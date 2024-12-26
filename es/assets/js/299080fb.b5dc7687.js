"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["44933"],{692618:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>m,assets:()=>i,toc:()=>a,frontMatter:()=>o});var r=JSON.parse('{"id":"commands-legacy/send-record","title":"SEND RECORD","description":"SEND RECORD {( tabla )}","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/send-record.md","sourceDirName":"commands-legacy","slug":"/commands/send-record","permalink":"/docs/es/commands/send-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsend-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"send-record","title":"SEND RECORD","slug":"/commands/send-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SEND PACKET","permalink":"/docs/es/commands/send-packet"},"next":{"title":"SEND VARIABLE","permalink":"/docs/es/commands/send-variable"}}'),d=s("785893"),t=s("250065");let o={id:"send-record",title:"SEND RECORD",slug:"/commands/send-record",displayed_sidebar:"docs"},c=void 0,i={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SEND RECORD"})," {( ",(0,d.jsx)(n.em,{children:"tabla"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tabla"}),(0,d.jsx)(n.td,{children:"Table"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Tabla de la cual enviar el registro actual o tabla por defecto, si se omite"})]})})]}),"\n",(0,d.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["SEND RECORD env\xeda el registro actual de ",(0,d.jsx)(n.em,{children:"tabla"})," al puerto serial o a un documento abierto por el comando ",(0,d.jsx)(n.a,{href:"/docs/es/commands/set-channel",title:"SET CHANNEL",children:"SET CHANNEL"}),". El registro se env\xeda con un formato interno especial que s\xf3lo puede ser le\xeddo por ",(0,d.jsx)(n.a,{href:"/docs/es/commands/receive-record",title:"RECEIVE RECORD",children:"RECEIVE RECORD"}),". Si no existe un registro actual, SEND RECORD no tiene efecto."]}),"\n",(0,d.jsx)(n.p,{children:"Se env\xeda el registro completo. Esto significa que todos los subregistros, im\xe1genes y BLOBs almacenados en el registro tambi\xe9n son enviados."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Importante:"})," cuando los registros se env\xedan y recuperan utilizando SEND RECORD y ",(0,d.jsx)(n.a,{href:"/docs/es/commands/receive-record",title:"RECEIVE RECORD",children:"RECEIVE RECORD"}),", la estructura de la tabla fuente y la estructura de la tabla de destino deben ser compatibles. Si no lo son, 4D convertir\xe1 los valores de acuerdo a las definiciones de la tabla cuando se ejecute ",(0,d.jsx)(n.a,{href:"/docs/es/commands/receive-record",title:"RECEIVE RECORD",children:"RECEIVE RECORD"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," si env\xeda un registro a un documento utilizando este comando, el documento debe haber sido abierto utilizando el comando ",(0,d.jsx)(n.a,{href:"/docs/es/commands/set-channel",title:"SET CHANNEL",children:"SET CHANNEL"}),". No es posible utilizar SEND RECORD con un documento abierto con ",(0,d.jsx)(n.a,{href:"/docs/es/commands/open-document",title:"Open document",children:"Open document"}),", ",(0,d.jsx)(n.a,{href:"/docs/es/commands/append-document",title:"Append document",children:"Append document"})," o ",(0,d.jsx)(n.a,{href:"/docs/es/commands/create-document",title:"Create document",children:"Create document"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota de compatibilidad"}),": a partir de la versi\xf3n 11 de 4D este comando no soporta subtablas."]}),"\n",(0,d.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsxs)(n.p,{children:["Ver el ejemplo del comando ",(0,d.jsx)(n.a,{href:"/docs/es/commands/receive-record",title:"RECEIVE RECORD",children:"RECEIVE RECORD"}),"."]}),"\n",(0,d.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/commands/receive-record",children:"RECEIVE RECORD"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/receive-variable",children:"RECEIVE VARIABLE"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/send-variable",children:"SEND VARIABLE"})]}),"\n",(0,d.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"78"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return o}});var r=s(667294);let d={},t=r.createContext(d);function o(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);