"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89745"],{279800:function(e,r,n){n.r(r),n.d(r,{default:()=>m,frontMatter:()=>s,metadata:()=>o,assets:()=>c,toc:()=>a,contentTitle:()=>i});var o=JSON.parse('{"id":"commands-legacy/goto-record","title":"GOTO RECORD","description":"GOTO RECORD ( {tabela ;} registro )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/goto-record.md","sourceDirName":"commands-legacy","slug":"/commands/goto-record","permalink":"/docs/pt/20-R7/commands/goto-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fgoto-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"goto-record","title":"GOTO RECORD","slug":"/commands/goto-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DUPLICATE RECORD","permalink":"/docs/pt/20-R7/commands/duplicate-record"},"next":{"title":"Is new record","permalink":"/docs/pt/20-R7/commands/is-new-record"}}'),t=n("785893"),d=n("250065");let s={id:"goto-record",title:"GOTO RECORD",slug:"/commands/goto-record",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let r={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"GOTO RECORD"})," ( {",(0,t.jsx)(r.em,{children:"tabela"})," ;} ",(0,t.jsx)(r.em,{children:"registro"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Par\xe2metro"}),(0,t.jsx)(r.th,{children:"Tipo"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"tabela"}),(0,t.jsx)(r.td,{children:"Table"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Tabela para a qual ir ao registro, ou tabela padr\xe3o, se omitido"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"registro"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"N\xfamero retornado pelo n\xfamero de Registro"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(r.p,{children:["GOTO RECORD seleciona o registro atual de ",(0,t.jsx)(r.em,{children:"tabela"}),". O par\xe2metro registro \xe9 o n\xfamero devolvido pela fun\xe7\xe3o ",(0,t.jsx)(r.a,{href:"/docs/pt/20-R7/commands/record-number",title:"Record Number",children:"Record Number"}),". Depois de executar este comando, o registro \xe9 o \xfanico registro na sele\xe7\xe3o."]}),"\n",(0,t.jsx)(r.p,{children:"Se registro for inferior ao menor n\xfamero do banco ou superior ao maior n\xfamero do banco, 4D gera uma mensagem de erro que indica que o n\xfamero est\xe1 fora do intervalo. Se registro for igual ao n\xfamero de registro de um registro apagado, 4D devolve o erro -10503 e a sele\xe7\xe3o fica vazia."}),"\n",(0,t.jsx)(r.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(r.p,{children:"Veja o exemplo para Record Number."}),"\n",(0,t.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/pt/20-R7/commands/record-number",children:"Record number"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.em,{children:"Sobre N\xfameros de Registros"})]}),"\n",(0,t.jsx)(r.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"N\xfamero do comando"}),(0,t.jsx)(r.td,{children:"242"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Thread-seguro"}),(0,t.jsx)(r.td,{children:"\u2713"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Modificar vari\xe1veis"}),(0,t.jsx)(r.td,{children:"error"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Modificar a sele\xe7\xe3o atual"}),(0,t.jsx)(r.td,{})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return s}});var o=n(667294);let t={},d=o.createContext(t);function s(e){let r=o.useContext(d);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(d.Provider,{value:r},e.children)}}}]);