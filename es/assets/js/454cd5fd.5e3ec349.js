"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82141"],{834046:function(e,n,a){a.r(n),a.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/read-only-state","title":"Read only state","description":"Read only state {( tabla )} : Boolean","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/read-only-state.md","sourceDirName":"commands-legacy","slug":"/commands/read-only-state","permalink":"/docs/es/20-R8/commands/read-only-state","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fread-only-state.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"read-only-state","title":"Read only state","slug":"/commands/read-only-state","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"READ ONLY","permalink":"/docs/es/20-R8/commands/read-only"},"next":{"title":"READ WRITE","permalink":"/docs/es/20-R8/commands/read-write"}}'),s=a("785893"),r=a("250065");let l={id:"read-only-state",title:"Read only state",slug:"/commands/read-only-state",displayed_sidebar:"docs"},d=void 0,o={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function i(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Read only state"})," {( ",(0,s.jsx)(n.em,{children:"tabla"})," )} : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tabla"}),(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Tabla para la cual probar el estado s\xf3lo lectura o Tabla por defecto, si se omite"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"El acceso a la tabla es s\xf3lo lectura (TRUE), o El acceso a la tabla es lectura/escritura (FALSE)"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["Esta funci\xf3n se utiliza para probar si ",(0,s.jsx)(n.em,{children:"tabla"})," est\xe1 en modo s\xf3lo lectura en el proceso en el que se llam\xf3 a la funci\xf3n. Read only state devuelve TRUE si el estado de ",(0,s.jsx)(n.em,{children:"tabla"})," es s\xf3lo lectura y FALSE si el estado de ",(0,s.jsx)(n.em,{children:"tabla"})," es lectura/ escritura."]}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"El siguiente ejemplo prueba el estado de la tabla [Facturas]. Si el estado de la tabla [Facturas] es s\xf3lo lectura, se aplica el modo lectura/escritura y se carga nuevamente el registro actual."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0If(Read only state([Facturas]))\n\xa0\xa0\xa0\xa0READ WRITE([Facturas])\n\xa0\xa0\xa0\xa0LOAD RECORD([Facturas])\n\xa0End if\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," el registro actual se carga nuevamente para permitirle al usuario modificarlo. Un registro cargado anteriormente en modo s\xf3lo lectura permanecer\xe1 bloqueado hasta que se recargue en modo lectura/escritura."]}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/read-only",children:"READ ONLY"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/read-write",children:"READ WRITE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"Record Locking"})]}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"362"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return d},a:function(){return l}});var t=a(667294);let s={},r=t.createContext(s);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);