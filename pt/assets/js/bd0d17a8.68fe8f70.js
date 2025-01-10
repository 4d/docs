"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63226"],{801508:function(e,o,r){r.r(o),r.d(o,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/load-record","title":"LOAD RECORD","description":"LOAD RECORD {( tabela )}","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/load-record.md","sourceDirName":"commands-legacy","slug":"/commands/load-record","permalink":"/docs/pt/commands/load-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fload-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"load-record","title":"LOAD RECORD","slug":"/commands/load-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Record Locking","permalink":"/docs/pt/category/record-locking"},"next":{"title":"Locked","permalink":"/docs/pt/commands/locked"}}'),t=r("785893"),n=r("250065");let d={id:"load-record",title:"LOAD RECORD",slug:"/commands/load-record",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"LOAD RECORD"})," {( ",(0,t.jsx)(o.em,{children:"tabela"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Par\xe2metro"}),(0,t.jsx)(o.th,{children:"Tipo"}),(0,t.jsx)(o.th,{}),(0,t.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsx)(o.tbody,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"tabela"}),(0,t.jsx)(o.td,{children:"Table"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsx)(o.td,{children:"Tabela para aqual carregar registros, ou tabela Padr\xe3o, se omitido"})]})})]}),"\n",(0,t.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(o.p,{children:["LOAD RECORD carrega o registro atual de ",(0,t.jsx)(o.em,{children:"tabela"}),". Se n\xe3o houver registro atual, LOAD RECORD n\xe3o tem nenhum efeito."]}),"\n",(0,t.jsxs)(o.p,{children:["Pode utilizar a fun\xe7\xe3o ",(0,t.jsx)(o.a,{href:"/docs/pt/commands/locked",title:"Locked",children:"Locked"})," para determinar se pode modificar o registro:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["Se a tabela est\xe1 em modo s\xf3 leitura, a fun\xe7\xe3o ",(0,t.jsx)(o.a,{href:"/docs/pt/commands/locked",title:"Locked",children:"Locked"})," devolve TRUE, e n\xe3o \xe9 poss\xedvel modificar o registro."]}),"\n",(0,t.jsx)(o.li,{children:"Se a tabela est\xe1 em modo leitura/escrita mas o registro foi bloqueado, o registro ser\xe1 s\xf3 leitura, e n\xe3o \xe9 poss\xedvel modificar o registro."}),"\n",(0,t.jsxs)(o.li,{children:["Se a tabela est\xe1 em modo leitura/escrita e o registro n\xe3o est\xe1 bloqueado, \xe9 poss\xedvel modificar o registro no processo atual. A fun\xe7\xe3o ",(0,t.jsx)(o.a,{href:"/docs/pt/commands/locked",title:"Locked",children:"Locked"})," devolve TRUE para todos os outros usu\xe1rios e processos."]}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Nota"}),": se o comando LOAD RECORD \xe9 executado depois de um ",(0,t.jsx)(o.a,{href:"/docs/pt/commands/read-only",title:"READ ONLY",children:"READ ONLY"}),", o registro \xe9 liberado automaticamente e \xe9 carregado sem precisar utilizar o comando ",(0,t.jsx)(o.a,{href:"/docs/pt/commands/unload-record",title:"UNLOAD RECORD",children:"UNLOAD RECORD"}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["Geralmente, n\xe3o \xe9 necess\xe1rio utilizar o comando LOAD RECORD, porque os comandos como ",(0,t.jsx)(o.a,{href:"/docs/pt/commands/query",title:"QUERY",children:"QUERY"}),", ",(0,t.jsx)(o.a,{href:"/docs/pt/commands/next-record",title:"NEXT RECORD",children:"NEXT RECORD"}),", ",(0,t.jsx)(o.a,{href:"/docs/pt/commands/previous-record",title:"PREVIOUS RECORD",children:"PREVIOUS RECORD"}),", etc., carregam automaticamente o registro atual."]}),"\n",(0,t.jsx)(o.p,{children:"Em ambientes multi-usu\xe1rio e multi-processos, quando necessite modificar um registro existente, deve acessar a tabela (a qual pertence o registro) em modo leitura/escrita. Se um registro estiver bloqueado e n\xe3o puder ser carregado, LOAD RECORD lhe permite tentar carregar o registro novamente mais tarde. Utilizando LOAD RECORD em um loop, pode esperar at\xe9 que o registro esteja dispon\xedvel em modo leitura/escrita."}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Conselho"}),": o comando LOAD RECORD pode ser utilizado para recarregar o registro atual no contexto de um formul\xe1rio de entrada. Todos os dados modificados s\xe3o substitu\xeddos pelos valores anteriores. Nesse caso, o comando LOAD RECORD realiza um cancelamento geral da entrada."]}),"\n",(0,t.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"/docs/pt/commands/locked",children:"Locked"}),(0,t.jsx)(o.br,{}),"\n",(0,t.jsx)(o.em,{children:"Record Locking"}),(0,t.jsx)(o.br,{}),"\n",(0,t.jsx)(o.a,{href:"/docs/pt/commands/unload-record",children:"UNLOAD RECORD"})]}),"\n",(0,t.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{}),(0,t.jsx)(o.th,{})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"N\xfamero do comando"}),(0,t.jsx)(o.td,{children:"52"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"Thread-seguro"}),(0,t.jsx)(o.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return a},a:function(){return d}});var s=r(667294);let t={},n=s.createContext(t);function d(e){let o=s.useContext(n);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(n.Provider,{value:o},e.children)}}}]);