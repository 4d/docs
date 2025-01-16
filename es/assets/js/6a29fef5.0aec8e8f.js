"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33896"],{442750:function(e,r,a){a.r(r),a.d(r,{default:()=>u,frontMatter:()=>o,metadata:()=>n,assets:()=>i,toc:()=>l,contentTitle:()=>d});var n=JSON.parse('{"id":"commands-legacy/read-write","title":"READ WRITE","description":"READ WRITE {( tabla | * )}","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/read-write.md","sourceDirName":"commands-legacy","slug":"/commands/read-write","permalink":"/docs/es/20-R7/commands/read-write","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fread-write.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"read-write","title":"READ WRITE","slug":"/commands/read-write","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Read only state","permalink":"/docs/es/20-R7/commands/read-only-state"},"next":{"title":"UNLOAD RECORD","permalink":"/docs/es/20-R7/commands/unload-record"}}'),s=a("785893"),t=a("250065");let o={id:"read-write",title:"READ WRITE",slug:"/commands/read-write",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let r={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"READ WRITE"})," {( tabla | * )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Par\xe1metro"}),(0,s.jsx)(r.th,{children:"Tipo"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"tabla | *"}),(0,s.jsx)(r.td,{children:"Tabla, Operador"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Tabla a definir en modo lectura/escritura o * para todas las tablas o Tabla por defecto si se omite"})]})})]}),"\n",(0,s.jsx)(r.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(r.p,{children:["READ WRITE cambia el estado de ",(0,s.jsx)(r.em,{children:"tabla"})," a modo lectura/escritura para el proceso en el cual se llama al comando. Si pasa el par\xe1metro opcional *, todas las tablas pasan a modo lectura/escritura."]}),"\n",(0,s.jsx)(r.p,{children:"Despu\xe9s de llamar a READ WRITE, cuando se carga un registro, el registro est\xe1 desbloqueado si ning\xfan otro usuario ha bloqueado el registro. Este comando no cambia el estado del registro cargado actualmente, s\xf3lo el de los registros cargados posteriormente."}),"\n",(0,s.jsx)(r.p,{children:"Por defecto, todas las tablas est\xe1n en modo lectura/escritura."}),"\n",(0,s.jsx)(r.p,{children:"Utilice READ WRITE cuando tenga que modificar un registro y guardar los cambios. Tambi\xe9n puede utilizar READ WRITE cuando quiera bloquear un registro para los otros usuarios, incluso cuando no est\xe9 realizando cambios. Colocar una tabla en modo lectura/escritura evita que otros usuarios editen la tabla. Sin embargo, los otros usuarios pueden crear nuevos registros."}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Nota:"})," este comando no es retroactivo. Los privilegios de lectura/escritura para un registro son definidos por los privilegios de la tabla en el momento en que se carga el registro. Para cargar un registro en modo lectura/escritura de una tabla s\xf3lo lectura, primero debe cambia el estado de la tabla a lectura/escritura."]}),"\n",(0,s.jsx)(r.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/es/20-R7/commands/read-only",children:"READ ONLY"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/es/20-R7/commands/read-only-state",children:"Read only state"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.em,{children:"Record Locking"})]}),"\n",(0,s.jsx)(r.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"N\xfamero de comando"}),(0,s.jsx)(r.td,{children:"146"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Hilo seguro"}),(0,s.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,r,a){a.d(r,{Z:function(){return d},a:function(){return o}});var n=a(667294);let s={},t=n.createContext(s);function o(e){let r=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);