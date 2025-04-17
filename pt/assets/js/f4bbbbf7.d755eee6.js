"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["614"],{338894:function(e,r,s){s.r(r),s.d(r,{default:()=>m,frontMatter:()=>a,metadata:()=>n,assets:()=>c,toc:()=>i,contentTitle:()=>d});var n=JSON.parse('{"id":"commands-legacy/clear-semaphore","title":"CLEAR SEMAPHORE","description":"CLEAR SEMAPHORE ( semaforo )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/clear-semaphore.md","sourceDirName":"commands-legacy","slug":"/commands/clear-semaphore","permalink":"/docs/pt/20-R8/commands/clear-semaphore","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fclear-semaphore.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"clear-semaphore","title":"CLEAR SEMAPHORE","slug":"/commands/clear-semaphore","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CALL WORKER","permalink":"/docs/pt/20-R8/commands/call-worker"},"next":{"title":"GET PROCESS VARIABLE","permalink":"/docs/pt/20-R8/commands/get-process-variable"}}'),o=s("785893"),t=s("250065");let a={id:"clear-semaphore",title:"CLEAR SEMAPHORE",slug:"/commands/clear-semaphore",displayed_sidebar:"docs"},d=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let r={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"CLEAR SEMAPHORE"})," ( ",(0,o.jsx)(r.em,{children:"semaforo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Par\xe2metro"}),(0,o.jsx)(r.th,{children:"Tipo"}),(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"semaforo"}),(0,o.jsx)(r.td,{children:"Text"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"Sem\xe1foro para limpar"})]})})]}),"\n",(0,o.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(r.p,{children:["CLEAR SEMAPHORE apaga o ",(0,o.jsx)(r.em,{children:"sem\xe1foro"})," previamente criada pela fun\xe7\xe3o ",(0,o.jsx)(r.a,{href:"/docs/pt/20-R8/commands/semaphore",title:"Semaphore",children:"Semaphore"}),"."]}),"\n",(0,o.jsx)(r.p,{children:"A regra de utiliza\xe7\xe3o \xe9 que todos os sem\xe1foros devem ser apagados quando j\xe1 n\xe3o forem necess\xe1rios. Se n\xe3o se apagam os sem\xe1foros, permanecem na mem\xf3ria at\xe9 que o processo que os criou termine. Um processo s\xf3 pode apagar os sem\xe1foros que foram criados. Se voc\xea tenta apagar um sem\xe1foro desde um processo que n\xe3o o criou, n\xe3o acontece nada."}),"\n",(0,o.jsx)(r.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsxs)(r.p,{children:["Ver o exemplo de ",(0,o.jsx)(r.a,{href:"/docs/pt/20-R8/commands/semaphore",title:"Semaphore",children:"Semaphore"}),"."]}),"\n",(0,o.jsx)(r.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.em,{children:"Sem\xe1foros e Sinais"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.a,{href:"/docs/pt/20-R8/commands/semaphore",children:"Semaphore"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.a,{href:"/docs/pt/20-R8/commands/test-semaphore",children:"Test semaphore"})]}),"\n",(0,o.jsx)(r.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"N\xfamero do comando"}),(0,o.jsx)(r.td,{children:"144"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Thread-seguro"}),(0,o.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return d},a:function(){return a}});var n=s(667294);let o={},t=n.createContext(o);function a(e){let r=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);