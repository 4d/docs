"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66378"],{594801:function(e,s,o){o.r(s),o.d(s,{default:()=>m,frontMatter:()=>t,metadata:()=>n,assets:()=>i,toc:()=>c,contentTitle:()=>d});var n=JSON.parse('{"id":"commands-legacy/set-query-and-lock","title":"SET QUERY AND LOCK","description":"SET QUERY AND LOCK ( bloq )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-query-and-lock.md","sourceDirName":"commands-legacy","slug":"/commands/set-query-and-lock","permalink":"/docs/pt/commands/set-query-and-lock","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-query-and-lock.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-query-and-lock","title":"SET QUERY AND LOCK","slug":"/commands/set-query-and-lock","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QUERY WITH ARRAY","permalink":"/docs/pt/commands/query-with-array"},"next":{"title":"SET QUERY DESTINATION","permalink":"/docs/pt/commands/set-query-destination"}}'),r=o("785893"),a=o("250065");let t={id:"set-query-and-lock",title:"SET QUERY AND LOCK",slug:"/commands/set-query-and-lock",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Gest\xe3o de erros",id:"gest\xe3o-de-erros",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"SET QUERY AND LOCK"})," ( ",(0,r.jsx)(s.em,{children:"bloq"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe2metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"bloq"}),(0,r.jsx)(s.td,{children:"Boolean"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"True = bloquear os registros encontrados por pesquisas; False = N\xe3o bloquear os registros"})]})})]}),"\n",(0,r.jsx)(s.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsx)(s.p,{children:"O comando SET QUERY AND LOCK permite solicitar o bloqueio autom\xe1tico dos registros encontrados por todas as pesquisas que seguem o chamado deste comando na transa\xe7\xe3o atual. Isso significa que os registros n\xe3o podem ser modificados por um processo diferente ao processo atual entre uma pesquisa e a manipula\xe7\xe3o de resultados."}),"\n",(0,r.jsxs)(s.p,{children:["Por padr\xe3o, os registros encontrados pelas pesquisas n\xe3o est\xe3o bloqueados. Passe ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/true",title:"True",children:"True"})," no par\xe2metro ",(0,r.jsx)(s.em,{children:"bloq"})," para ativar o bloqueio."]}),"\n",(0,r.jsx)(s.p,{children:"Este comando deve imperativamente ser utilizado no interior de uma transa\xe7\xe3o. Se for chamado fora deste contexto, \xe9 gerado um erro. Isso permite um melhor controle do bloqueio de registros. Os registros encontrados permanecer\xe3o bloqueados at\xe9 que a transa\xe7\xe3o termine ( confirmada ou cancelada). Depois que a transa\xe7\xe3o se completa, todos os registros s\xe3o desbloqueados."}),"\n",(0,r.jsx)(s.p,{children:"Os registros est\xe3o bloqueados para todas as tabelas na transa\xe7\xe3o atual."}),"\n",(0,r.jsx)(s.p,{children:"Quando uma instru\xe7\xe3o SET QUERY AND LOCK (True) for executada, os comandos de pesquisa (por exemplo QUERY) adotam um funcionamento espec\xedfico se for encontrado um registro bloqueado:"}),"\n",(0,r.jsxs)(s.p,{children:["- A pesquisa se det\xe9m e a vari\xe1vel sistema OK toma o valor 0,",(0,r.jsx)(s.br,{}),"\n- A sele\xe7\xe3o atual fica vazia,",(0,r.jsx)(s.br,{}),"\n- O conjunto sistema LockedSet cont\xe9m o registro bloqueado que causou que a pesquisa fosse interrompida."]}),"\n",(0,r.jsx)(s.p,{children:"Portanto, neste contexto \xe9 necess\xe1rio testar o conjunto LockedSet definido depois de uma pesquisa infrut\xedfera (sele\xe7\xe3o atual vazia ou vari\xe1vel OK em 0) para determinar a causa da falha."}),"\n",(0,r.jsx)(s.p,{children:"Chame SET QUERY AND LOCK(False) com o objetivo de desativar o mecanismo posteriormente."}),"\n",(0,r.jsx)(s.p,{children:"SET QUERY AND LOCK modifica unicamente o comportamento dos comandos de pesquisa em outras palavras:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/pt/commands/query",children:"QUERY"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/pt/commands/query-selection",children:"QUERY SELECTION"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/pt/commands/query-by-example",children:"QUERY BY EXAMPLE"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/pt/commands/query-by-formula",children:"QUERY BY FORMULA"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/pt/commands/query-by-sql",children:"QUERY BY SQL"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/pt/commands/query-selection-by-formula",children:"QUERY SELECTION BY FORMULA"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/pt/commands/query-selection-with-array",children:"QUERY SELECTION WITH ARRAY"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/pt/commands/query-with-array",children:"QUERY WITH ARRAY"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/pt/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/pt/commands/query-selection-by-attribute",children:"QUERY SELECTION BY ATTRIBUTE"})}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Entretanto, SET QUERY AND LOCK n\xe3o afeta os outros comandos que modificam a sele\xe7\xe3o atual tais como as ",(0,r.jsxs)(s.strong,{children:[(0,r.jsx)(s.a,{href:"/docs/pt/commands/all-records",children:"ALL RECORDS"}),", ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/relate-many",children:"RELATE MANY"})]})," etc."]}),"\n",(0,r.jsx)(s.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsxs)(s.p,{children:["Neste exemplo, n\xe3o \xe9 poss\xedvel apagar um cliente que teria sido passado da categoria \u201CC\u201D a categoria \u201CA\u201D em outro processo entre ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/query",title:"QUERY",children:"QUERY"})," e ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/delete-selection",title:"DELETE SELECTION",children:"DELETE SELECTION"}),":"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"\xa0START TRANSACTION\n\xa0SET QUERY AND LOCK(True)\n\xa0QUERY([Clientes];[Clientes]Categoria=\u201CC\u201D)\n\xa0\xa0//Neste momento, os registros encontrados s\xe3o bloqueados automaticamente por todos os outros processos\n\xa0DELETE SELECTION([Clientes])\n\xa0SET QUERY AND LOCK(False)\n\xa0VALIDATE TRANSACTION\n"})}),"\n",(0,r.jsx)(s.h2,{id:"gest\xe3o-de-erros",children:"Gest\xe3o de erros"}),"\n",(0,r.jsx)(s.p,{children:"Se o comando n\xe3o \xe9 chamado no contexto de uma transa\xe7\xe3o, um erro \xe9 gerado."}),"\n",(0,r.jsx)(s.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/pt/commands/query",children:"QUERY"})}),"\n",(0,r.jsx)(s.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"N\xfamero do comando"}),(0,r.jsx)(s.td,{children:"661"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread-seguro"}),(0,r.jsx)(s.td,{children:"\u2713"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Modificar vari\xe1veis"}),(0,r.jsx)(s.td,{children:"error"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,s,o){o.d(s,{Z:function(){return d},a:function(){return t}});var n=o(667294);let r={},a=n.createContext(r);function t(e){let s=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);