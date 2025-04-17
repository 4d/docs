"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24841"],{89780:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>a,assets:()=>o,toc:()=>d,contentTitle:()=>c});var a=JSON.parse('{"id":"commands-legacy/in-transaction","title":"In transaction","description":"In transaction  : Boolean","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/in-transaction.md","sourceDirName":"commands-legacy","slug":"/commands/in-transaction","permalink":"/docs/es/commands/in-transaction","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fin-transaction.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"in-transaction","title":"In transaction","slug":"/commands/in-transaction","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CANCEL TRANSACTION","permalink":"/docs/es/commands/cancel-transaction"},"next":{"title":"RESUME TRANSACTION","permalink":"/docs/es/commands/resume-transaction"}}'),t=s("785893"),r=s("250065");let i={id:"in-transaction",title:"In transaction",slug:"/commands/in-transaction",displayed_sidebar:"docs"},c=void 0,o={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"In transaction"}),"  : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Devuelve TRUE si el proceso actual est\xe1 en transacci\xf3n"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando In transaction devuelve ",(0,t.jsx)(n.a,{href:"/docs/es/commands/true",title:"True",children:"True"})," si el proceso actual est\xe1 en transacci\xf3n, de lo contrario devuelve ",(0,t.jsx)(n.a,{href:"/docs/es/commands/false",title:"False",children:"False"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"Si efect\xfaa las operaciones (adici\xf3n, modificaci\xf3n, o eliminaci\xf3n de registros) con m\xfaltiples registros, puede encontrarse con registros bloqueados. En este caso, para preservar la integridad de los datos, debe tener abierta una transacci\xf3n, de manera que pueda \u201Cdevolver\u201D toda la operaci\xf3n y dejar la base intacta."}),"\n",(0,t.jsx)(n.p,{children:"Si efect\xfaa la operaci\xf3n desde un trigger o una subrutina que puede ser llamado(a) en una transacci\xf3n o fuera de transacci\xf3n, la utilizaci\xf3n del comando In transaction permite verificar que el m\xe9todo del proceso actual o el m\xe9todo llamante abri\xf3 bien una transacci\xf3n. Si no es el caso, no comienza la transacci\xf3n, porque en caso de una falla en el proceso, no podr\xeda deshacer las operaciones efectuadas."}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/commands/active-transaction",children:"Active transaction"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/cancel-transaction",children:"CANCEL TRANSACTION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/start-transaction",children:"START TRANSACTION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Triggers"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/validate-transaction",children:"VALIDATE TRANSACTION"})]}),"\n",(0,t.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"397"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var a=s(667294);let t={},r=a.createContext(t);function i(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);