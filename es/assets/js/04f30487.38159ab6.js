"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67462"],{814094:function(e,n,s){s.r(n),s.d(n,{default:()=>p,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>a,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/push-record","title":"PUSH RECORD","description":"PUSH RECORD {( tabla )}","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/push-record.md","sourceDirName":"commands-legacy","slug":"/commands/push-record","permalink":"/docs/es/20-R8/commands/push-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpush-record.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"push-record","title":"PUSH RECORD","slug":"/commands/push-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"POP RECORD","permalink":"/docs/es/20-R8/commands/pop-record"},"next":{"title":"Record number","permalink":"/docs/es/20-R8/commands/record-number"}}'),d=s("785893"),t=s("250065");let i={id:"push-record",title:"PUSH RECORD",slug:"/commands/push-record",displayed_sidebar:"docs"},o=void 0,l={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"PUSH RECORD"})," {( ",(0,d.jsx)(n.em,{children:"tabla"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tabla"}),(0,d.jsx)(n.td,{children:"Table"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Tabla de la cual apilar el registro actual o Tabla por defecto, si se omite"})]})})]}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["PUSH RECORD apila una copia del registro actual de ",(0,d.jsx)(n.em,{children:"tabla"})," en la pila de registros de la tabla. PUSH RECORD puede ejecutarse antes de que se guarde un registro."]}),"\n",(0,d.jsx)(n.p,{children:"Si apila un registro que fue desbloqueado, este registro permanece bloqueado para todos los otros procesos y usuarios hasta que lo desapile y descargue."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota de compatibilidad"}),": a partir de la versi\xf3n 11 de 4D, este comando no soporta subtablas."]}),"\n",(0,d.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsx)(n.p,{children:"El siguiente ejemplo apila el registro de un cliente:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0PUSH RECORD([Cliente])\xa0// Poner el registro del cliente en la pila\n"})}),"\n",(0,d.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/20-R8/commands/pop-record",children:"POP RECORD"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.em,{children:"Uso de la pila de registros"})]}),"\n",(0,d.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"176"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var r=s(667294);let d={},t=r.createContext(d);function i(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);