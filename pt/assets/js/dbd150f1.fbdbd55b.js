"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88941"],{648430:function(e,o,r){r.r(o),r.d(o,{default:()=>u,frontMatter:()=>a,metadata:()=>s,assets:()=>c,toc:()=>i,contentTitle:()=>t});var s=JSON.parse('{"id":"commands-legacy/locked","title":"Locked","description":"Locked {( tabela )} : Boolean","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/locked.md","sourceDirName":"commands-legacy","slug":"/commands/locked","permalink":"/docs/pt/commands/locked","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flocked.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"locked","title":"Locked","slug":"/commands/locked","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LOAD RECORD","permalink":"/docs/pt/commands/load-record"},"next":{"title":"LOCKED BY","permalink":"/docs/pt/commands/locked-by"}}'),d=r("785893"),n=r("250065");let a={id:"locked",title:"Locked",slug:"/commands/locked",displayed_sidebar:"docs"},t=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let o={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.strong,{children:"Locked"})," {( ",(0,d.jsx)(o.em,{children:"tabela"})," )} : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(o.table,{children:[(0,d.jsx)(o.thead,{children:(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.th,{children:"Par\xe2metro"}),(0,d.jsx)(o.th,{children:"Tipo"}),(0,d.jsx)(o.th,{}),(0,d.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(o.tbody,{children:[(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"tabela"}),(0,d.jsx)(o.td,{children:"Table"}),(0,d.jsx)(o.td,{children:"\u2192"}),(0,d.jsx)(o.td,{children:"Tabela a marcar para registros atuais bloqueados, ou tabela padr\xe3o, se omitido"})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"Resultado"}),(0,d.jsx)(o.td,{children:"Boolean"}),(0,d.jsx)(o.td,{children:"\u2190"}),(0,d.jsx)(o.td,{children:"Registro est\xe1 bloqueado (TRUE), ou Registros est\xe1 desbloqueado (FALSE)"})]})]})]}),"\n",(0,d.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(o.p,{children:["Locked testa se o registro atual de ",(0,d.jsx)(o.em,{children:"tabela"})," est\xe1 bloqueado. Utilize esta fun\xe7\xe3o para saber se um registro est\xe1 bloqueado ou n\xe3o; depois tome a a\xe7\xe3o mais conveniente, tal como dar ao usu\xe1rio a op\xe7\xe3o de esperar que o registro seja liberado ou de anular a opera\xe7\xe3o."]}),"\n",(0,d.jsxs)(o.p,{children:["Se Locked devolve TRUE, o registro n\xe3o pode ser guardado porque est\xe1 bloqueado por outro usu\xe1rio ou processo, ou esta empilhado no processo atual. Neste caso, utilize ",(0,d.jsx)(o.a,{href:"/docs/pt/commands/load-record",children:"LOAD RECORD"}),"  para recarregar o registro at\xe9 que Locked devolva FALSE."]}),"\n",(0,d.jsx)(o.p,{children:"Se Locked devolve FALSE, o registro est\xe1 desbloqueado, o que significa que est\xe1 bloqueado para os outros usu\xe1rios. S\xf3 o usu\xe1rio local ou o processo atual pode modificar e guardar o registro. Uma tabela deve estar em modo leitura/escrita se desejar modificar os registros que contenha."}),"\n",(0,d.jsxs)(o.p,{children:["Se carrega um registro que tenha sido apagado, Locked devolve TRUE. Para evitar esperar por um registro que n\xe3o existe, utilize o comando ",(0,d.jsx)(o.a,{href:"/docs/pt/commands/locked-by",children:"LOCKED BY"}),". Se o registro tiver sido apagado, o comando ",(0,d.jsx)(o.a,{href:"/docs/pt/commands/locked-by",children:"LOCKED BY"})," devolve -1 no par\xe2metro processo."]}),"\n",(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.strong,{children:"Nota"}),": Locked devolve False quando n\xe3o h\xe1 um registro atual em ",(0,d.jsx)(o.em,{children:"tabela"}),", em outras palabras, quando ",(0,d.jsx)(o.a,{href:"/docs/pt/commands/record-number",title:"Record number",children:"Record number"})," devolve -1."]}),"\n",(0,d.jsxs)(o.p,{children:["Durante uma transa\xe7\xe3o, ",(0,d.jsx)(o.a,{href:"/docs/pt/commands/load-record",children:"LOAD RECORD"})," e Locked se utilizam com frequ\xeancia para provar a disponibilidade dos registros. Se um registro estiver bloqueado, \xe9 comum cancelar a transa\xe7\xe3o."]}),"\n",(0,d.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.a,{href:"/docs/pt/commands/locked-records-info",children:"Locked records info"}),(0,d.jsx)(o.br,{}),"\n",(0,d.jsx)(o.a,{href:"/docs/pt/commands/load-record",children:"LOAD RECORD"}),(0,d.jsx)(o.br,{}),"\n",(0,d.jsx)(o.a,{href:"/docs/pt/commands/locked-by",children:"LOCKED BY"}),(0,d.jsx)(o.br,{}),"\n",(0,d.jsx)(o.em,{children:"Record Locking"})]}),"\n",(0,d.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(o.table,{children:[(0,d.jsx)(o.thead,{children:(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.th,{}),(0,d.jsx)(o.th,{})]})}),(0,d.jsxs)(o.tbody,{children:[(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"N\xfamero do comando"}),(0,d.jsx)(o.td,{children:"147"})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"Thread-seguro"}),(0,d.jsx)(o.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,d.jsx)(o,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return t},a:function(){return a}});var s=r(667294);let d={},n=s.createContext(d);function a(e){let o=s.useContext(n);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),s.createElement(n.Provider,{value:o},e.children)}}}]);