"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68886"],{73092:function(e,r,o){o.r(r),o.d(r,{default:()=>m,frontMatter:()=>a,metadata:()=>d,assets:()=>i,toc:()=>c,contentTitle:()=>t});var d=JSON.parse('{"id":"commands-legacy/save-record","title":"SAVE RECORD","description":"SAVE RECORD {( tabela )}","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/save-record.md","sourceDirName":"commands-legacy","slug":"/commands/save-record","permalink":"/docs/pt/commands/save-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsave-record.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"save-record","title":"SAVE RECORD","slug":"/commands/save-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Records in table","permalink":"/docs/pt/commands/records-in-table"},"next":{"title":"Sequence number","permalink":"/docs/pt/commands/sequence-number"}}'),n=o("785893"),s=o("250065");let a={id:"save-record",title:"SAVE RECORD",slug:"/commands/save-record",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"SAVE RECORD"})," {( ",(0,n.jsx)(r.em,{children:"tabela"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Par\xe2metro"}),(0,n.jsx)(r.th,{children:"Tipo"}),(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"tabela"}),(0,n.jsx)(r.td,{children:"Table"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"Tabela para a qual vai salvar o registro atual, ou tabela padr\xe3o, se omitido"})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(r.p,{children:["SAVE RECORD guarda o registro atual de ",(0,n.jsx)(r.em,{children:"tabela"})," no processo atual. Se n\xe3o houver registro atual, o comando SAVE RECORDD \xe9 ignorado."]}),"\n",(0,n.jsx)(r.p,{children:"Pode utilizar SAVE RECORD para guardar um registro criado ou modificado por programa\xe7\xe3o. Quando um registro foi modificado e confirmado pelo usu\xe1rio em um formul\xe1rio, n\xe3o \xe9 necess\xe1rio guardar com SAVE RECORD. Um registro que foi modificado pelo usu\xe1rio em um formul\xe1rio, mas foi cancelado, mesmo assim podem ser guardados com SAVE RECORDD."}),"\n",(0,n.jsx)(r.p,{children:"Estes s\xe3o alguns casos onde \xe9 necess\xe1rio SAVE RECORD:"}),"\n",(0,n.jsxs)(r.p,{children:["Para guardar um novo registro criado com ",(0,n.jsx)(r.a,{href:"/docs/pt/commands/create-record",children:"CREATE RECORD"})," ou ",(0,n.jsx)(r.a,{href:"/docs/pt/commands/duplicate-record",children:"DUPLICATE RECORD"})]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Para guardar dados desde ",(0,n.jsx)(r.a,{href:"/docs/pt/commands/receive-record",children:"RECEIVE RECORD"})]}),"\n",(0,n.jsx)(r.li,{children:"Para guardar um registro modificado por um m\xe9todo"}),"\n",(0,n.jsxs)(r.li,{children:["Para guardar um registro que contenha um subregistro criado ou modificado por um desses comandos ",(0,n.jsx)(r.em,{children:"_o_ADD SUBRECORD"}),", ",(0,n.jsx)(r.em,{children:"_o_CREATE SUBRECORD"}),", ou ",(0,n.jsx)(r.em,{children:"_o_MODIFY SUBRECORD"})]}),"\n",(0,n.jsx)(r.li,{children:"Durante a entrada de dados, para guardar o registro mostrado antes de chamar um comando que muda o registro atual"}),"\n",(0,n.jsx)(r.li,{children:"Durante a entrada de dados, para guardar o registro atual"}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"N\xe3o deve executar SAVE RECORD no evento de formul\xe1rio On Validate de um registro que foi aceito. Se o fizer, o registro ser\xe1 guardado duas vezes."}),"\n",(0,n.jsxs)(r.p,{children:["Nota: guardar um registro que contenha campos objeto editados geralmente exige que notifique explicitamente a 4D antes de chamar a SAVE RECORD. Para saber mais, consulte a se\xe7\xe3o ",(0,n.jsx)(r.em,{children:"Salvar campos Objeto"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsx)(r.p,{children:"O exemplo a seguir \xe9 parte de um m\xe9todo que l\xea registros de um documento. Nessa parte do c\xf3digo, \xe9 recebido um registro, e depois, se receber corretamente, o registro \xe9 guardado:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:"\xa0RECEIVE RECORD([Clientes])\xa0// Recep\xe7\xe3o do registro a partir do disco\n\xa0If(OK=1)\xa0// Se o registro \xe9 recebido corretamente\u2026\n\xa0\xa0\xa0\xa0SAVE RECORD([Clientes])\xa0// guardar\n\xa0End if\n"})}),"\n",(0,n.jsx)(r.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/pt/commands/create-record",children:"CREATE RECORD"}),(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.a,{href:"/docs/pt/commands/locked",children:"Locked"}),(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.em,{children:"Triggers"})]}),"\n",(0,n.jsx)(r.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"N\xfamero do comando"}),(0,n.jsx)(r.td,{children:"53"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Thread-seguro"}),(0,n.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,r,o){o.d(r,{Z:function(){return t},a:function(){return a}});var d=o(667294);let n={},s=d.createContext(n);function a(e){let r=d.useContext(s);return d.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),d.createElement(s.Provider,{value:r},e.children)}}}]);