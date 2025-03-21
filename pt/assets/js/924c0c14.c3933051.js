"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67639"],{696333:function(e,n,a){a.r(n),a.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>r,assets:()=>i,toc:()=>l,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/read-only","title":"READ ONLY","description":"READ ONLY {( aTabela | * )}","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/read-only.md","sourceDirName":"commands-legacy","slug":"/commands/read-only","permalink":"/docs/pt/20-R7/commands/read-only","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fread-only.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"read-only","title":"READ ONLY","slug":"/commands/read-only","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Locked records info","permalink":"/docs/pt/20-R7/commands/locked-records-info"},"next":{"title":"Read only state","permalink":"/docs/pt/20-R7/commands/read-only-state"}}'),o=a("785893"),s=a("250065");let t={id:"read-only",title:"READ ONLY",slug:"/commands/read-only",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"READ ONLY"})," {( aTabela | * )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"aTabela | *"}),(0,o.jsx)(n.td,{children:"Tabela, Operador"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Tabela para qual estabelecer o estado apenas leitura, ou * para todas as tabelas, ou tabela padr\xe3o, se for omitido"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["READ ONLY muda o estado de tabela a modo apenas leitura para o processo no qual se chama ao comando. Todos os registros carregados posteriormente est\xe3o bloqueados, e n\xe3o se pode realizar nenhuma modifica\xe7\xe3o. Se for passado o par\xe2metro opcional ",(0,o.jsx)(n.em,{children:"*"}),", todas as tabelas s\xe3o mudadas a modo apenas leitura."]}),"\n",(0,o.jsx)(n.p,{children:"Utilize READ ONLY quando n\xe3o necessite modificar os registros."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota"}),": este comando n\xe3o \xe9 retroativo. Os privil\xe9gios de leitura/escrita para um registro s\xe3o definidos pelos privil\xe9gios da tabela no momento em que se carrega o registro. Para carregar um registro em modo apenas leitura quando a tabela est\xe1 em modo leitura/escrita, primeiro deve mudar o estado da tabela a modo apenas leitura."]}),"\n",(0,o.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/commands/read-only-state",children:"Read only state"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/commands/read-write",children:"READ WRITE"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.em,{children:"Record Locking"})]}),"\n",(0,o.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"145"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return d},a:function(){return t}});var r=a(667294);let o={},s=r.createContext(o);function t(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);