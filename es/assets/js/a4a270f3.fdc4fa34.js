"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["20634"],{389891:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>r,assets:()=>l,toc:()=>i,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/read-only","title":"READ ONLY","description":"READ ONLY {( tabla | * )}","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/read-only.md","sourceDirName":"commands-legacy","slug":"/commands/read-only","permalink":"/docs/es/commands/read-only","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fread-only.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"read-only","title":"READ ONLY","slug":"/commands/read-only","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Locked records info","permalink":"/docs/es/commands/locked-records-info"},"next":{"title":"Read only state","permalink":"/docs/es/commands/read-only-state"}}'),a=s("785893"),t=s("250065");let o={id:"read-only",title:"READ ONLY",slug:"/commands/read-only",displayed_sidebar:"docs"},d=void 0,l={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"READ ONLY"})," {( tabla | * )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"tabla | *"}),(0,a.jsx)(n.td,{children:"Tabla, Operador"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Tabla a definir en modo s\xf3lo lectura o * para todas las tablas o Tabla por defecto, si se omite"})]})})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["READ ONLY cambia el estado de t",(0,a.jsx)(n.em,{children:"abla"})," a modo s\xf3lo lectura para el proceso en el cual se llama al comando. Todos los registros cargados posteriormente est\xe1n bloqueados, y no se puede realizar ninguna modificaci\xf3n. Si se pasa el par\xe1metro opcional *, todas las tablas se cambian a modo s\xf3lo lectura."]}),"\n",(0,a.jsx)(n.p,{children:"Utilice READ ONLY cuando no necesite modificar los registros."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"})," este comando no es retroactivo. Los privilegios de lectura/escritura para un registro son definidos por los privilegios de la tabla en el momento en que se carga el registro. Para cargar un registro en modo s\xf3lo lectura cuando la tabla est\xe1 en modo lectura/escritura, primero debe cambiar el estado de la tabla a modo s\xf3lo lectura."]}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/commands/read-only-state",children:"Read only state"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/read-write",children:"READ WRITE"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.em,{children:"Record Locking"})]}),"\n",(0,a.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"145"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return o}});var r=s(667294);let a={},t=r.createContext(a);function o(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);