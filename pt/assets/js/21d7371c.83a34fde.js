"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68275"],{938594:function(e,r,o){o.r(r),o.d(r,{default:()=>m,frontMatter:()=>t,metadata:()=>n,assets:()=>i,toc:()=>c,contentTitle:()=>d});var n=JSON.parse('{"id":"commands-legacy/create-record","title":"CREATE RECORD","description":"CREATE RECORD {( tabela )}","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/create-record.md","sourceDirName":"commands-legacy","slug":"/commands/create-record","permalink":"/docs/pt/commands/create-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-record.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"create-record","title":"CREATE RECORD","slug":"/commands/create-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Records","permalink":"/docs/pt/commands/theme/Records"},"next":{"title":"DELETE RECORD","permalink":"/docs/pt/commands/delete-record"}}'),s=o("785893"),a=o("250065");let t={id:"create-record",title:"CREATE RECORD",slug:"/commands/create-record",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"CREATE RECORD"})," {( ",(0,s.jsx)(r.em,{children:"tabela"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Par\xe2metro"}),(0,s.jsx)(r.th,{children:"Tipo"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"tabela"}),(0,s.jsx)(r.td,{children:"Table"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Tabela para a qual criar um novo registro, ou tabela Padr\xe3o, se omitido"})]})})]}),"\n",(0,s.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(r.p,{children:["CREATE RECORD cria um novo registro vazio para ",(0,s.jsx)(r.em,{children:"tabela"}),", mas n\xe3o mostra o novo registro. Utilize o comando ",(0,s.jsx)(r.a,{href:"/docs/pt/commands/add-record",children:"ADD RECORD"})," para criar um novo registro e mostra-lo em um formul\xe1rio de entrada."]}),"\n",(0,s.jsxs)(r.p,{children:["CREATE RECORD \xe9 utilizado ao inv\xe9s de ",(0,s.jsx)(r.a,{href:"/docs/pt/commands/add-record",children:"ADD RECORD"})," quando os valores dos registros s\xe3o introduzidos por programa\xe7\xe3o. O novo registro \xe9 convertido no registro atual para a sele\xe7\xe3o atual mas a sele\xe7\xe3o atual n\xe3o se modifica."]}),"\n",(0,s.jsxs)(r.p,{children:["O registro existe em mem\xf3ria unicamente at\xe9 que um comando ",(0,s.jsx)(r.a,{href:"/docs/pt/commands/save-record",children:"SAVE RECORD"})," \xe9 executado para a tabela. Se muda o registro atual (por exemplo, por uma pesquisa) antes de guardar o registro, o novo registro se perde."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Nota"}),": este comando n\xe3o exibe tabelas para estar en modo leitura/escrita. Pode ser usado mesmo quando a tabela estiver em modo de apenas leitura (ver ",(0,s.jsx)(r.em,{children:"Record Locking"}),")."]}),"\n",(0,s.jsx)(r.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(r.p,{children:"O seguinte exemplo arquiva os registros que tem mais de 30 dias. Esta opera\xe7\xe3o se realiza para a cria\xe7\xe3o de registros em uma tabela de arquivo. Uma vez terminada a opera\xe7\xe3o, os registros arquivados s\xe3o eliminados da tabela [Contas]:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:"\xa0\xa0// Pesquisa de registros de mais de 30 dias\n\xa0QUERY([Contas];[Contas]Introduzido<(Current date 30))\n\xa0For($vlRegistro;1;Records in selection([Contas]))\xa0// Loop uma vez por registro\n\xa0\xa0\xa0\xa0CREATE RECORD([Arquivo])\xa0// Cria\xe7\xe3o de um novo registro de arquivo\n\xa0\xa0\xa0\xa0[Archive]Number:=[Contas]N\xfamero\xa0// C\xf3pia dos campos no arquivo\n\xa0\xa0\xa0\xa0[Archive]Entered:=[Contas]Introduzido\n\xa0\xa0\xa0\xa0[Archive]Amount:=[Contas]Quantidade\n\xa0\xa0\xa0\xa0SAVE RECORD([Contas])\xa0// Guardar o registro do arquivo\n\xa0\xa0\xa0\xa0NEXT RECORD([Contas])\xa0// Mover o registro de conta seguinte\n\xa0End for\n\xa0DELETE SELECTION([Contas])\xa0// Apagar os registros de conta\n"})}),"\n",(0,s.jsx)(r.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/pt/commands/add-record",children:"ADD RECORD"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/pt/commands/modify-record",children:"MODIFY RECORD"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/pt/commands/save-record",children:"SAVE RECORD"})]}),"\n",(0,s.jsx)(r.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"N\xfamero do comando"}),(0,s.jsx)(r.td,{children:"68"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Thread-seguro"}),(0,s.jsx)(r.td,{children:"\u2713"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Modificar o registro atual"}),(0,s.jsx)(r.td,{})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,r,o){o.d(r,{Z:function(){return d},a:function(){return t}});var n=o(667294);let s={},a=n.createContext(s);function t(e){let r=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);