"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85346"],{735135:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>t});var r=JSON.parse('{"id":"commands-legacy/send-variable","title":"SEND VARIABLE","description":"SEND VARIABLE ( variable )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/send-variable.md","sourceDirName":"commands-legacy","slug":"/commands/send-variable","permalink":"/docs/es/commands/send-variable","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsend-variable.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"send-variable","title":"SEND VARIABLE","slug":"/commands/send-variable","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SEND RECORD","permalink":"/docs/es/commands/send-record"},"next":{"title":"SET CHANNEL","permalink":"/docs/es/commands/set-channel"}}'),d=s("785893"),i=s("250065");let o={id:"send-variable",title:"SEND VARIABLE",slug:"/commands/send-variable",displayed_sidebar:"docs"},t=void 0,a={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SEND VARIABLE"})," ( ",(0,d.jsx)(n.em,{children:"variable"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"variable"}),(0,d.jsx)(n.td,{children:"Variable"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Variable a enviar"})]})})]}),"\n",(0,d.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["SEND VARIABLE env\xeda ",(0,d.jsx)(n.em,{children:"variable"})," al documento o puerto serial previamente abierto por ",(0,d.jsx)(n.a,{href:"/docs/es/commands/set-channel",title:"SET CHANNEL",children:"SET CHANNEL"}),". La variable se env\xeda con un formato interno especial que puede ser le\xeddo s\xf3lo por ",(0,d.jsx)(n.a,{href:"/docs/es/commands/receive-variable",children:"RECEIVE VARIABLE"}),". SEND VARIABLE env\xeda la variable completa (incluyendo su tipo y valor)."]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["Si env\xeda una variable a un documento utilizando este comando, el documento debe haber sido abierto por el comando ",(0,d.jsx)(n.a,{href:"/docs/es/commands/set-channel",title:"SET CHANNEL",children:"SET CHANNEL"}),". No puede utilizar SEND VARIABLE con un documento abierto con ",(0,d.jsx)(n.a,{href:"/docs/es/commands/open-document",title:"Open document",children:"Open document"}),", ",(0,d.jsx)(n.a,{href:"/docs/es/commands/append-document",title:"Append document",children:"Append document"})," o ",(0,d.jsx)(n.a,{href:"/docs/es/commands/create-document",title:"Create document",children:"Create document"}),"."]}),"\n",(0,d.jsxs)(n.li,{children:["Este comando no soporta variables de tipo Array. Si quiere enviar y recibir arrays de un documento o un puerto serial, utilice los nuevos ",(0,d.jsx)(n.em,{children:"comandos BLOB"})," introducidos en la versi\xf3n 6."]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsxs)(n.p,{children:["Ver el ejemplo del comando ",(0,d.jsx)(n.a,{href:"/docs/es/commands/receive-record",title:"RECEIVE RECORD",children:"RECEIVE RECORD"}),"."]}),"\n",(0,d.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/commands/receive-record",children:"RECEIVE RECORD"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/receive-variable",children:"RECEIVE VARIABLE"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/send-record",children:"SEND RECORD"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/set-channel",children:"SET CHANNEL"})]}),"\n",(0,d.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"80"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return o}});var r=s(667294);let d={},i=r.createContext(d);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);