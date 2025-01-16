"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42501"],{34117:function(n,e,d){d.r(e),d.d(e,{default:()=>m,frontMatter:()=>c,metadata:()=>r,assets:()=>i,toc:()=>a,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/qr-execute-command","title":"QR EXECUTE COMMAND","description":"QR EXECUTE COMMAND ( area ; comando )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-execute-command.md","sourceDirName":"commands-legacy","slug":"/commands/qr-execute-command","permalink":"/docs/pt/20-R7/commands/qr-execute-command","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-execute-command.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-execute-command","title":"QR EXECUTE COMMAND","slug":"/commands/qr-execute-command","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR DELETE OFFSCREEN AREA","permalink":"/docs/pt/20-R7/commands/qr-delete-offscreen-area"},"next":{"title":"QR Find column","permalink":"/docs/pt/20-R7/commands/qr-find-column"}}'),s=d("785893"),t=d("250065");let c={id:"qr-execute-command",title:"QR EXECUTE COMMAND",slug:"/commands/qr-execute-command",displayed_sidebar:"docs"},o=void 0,i={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(n){let e={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"QR EXECUTE COMMAND"})," ( ",(0,s.jsx)(e.em,{children:"area"})," ; ",(0,s.jsx)(e.em,{children:"comando"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Par\xe2metro"}),(0,s.jsx)(e.th,{children:"Tipo"}),(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"area"}),(0,s.jsx)(e.td,{children:"Integer"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"Refer\xeancia da \xe1rea"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"comando"}),(0,s.jsx)(e.td,{children:"Integer"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"Comando de menu a ser executado"})]})]})]}),"\n",(0,s.jsx)(e.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(e.p,{children:["O comando ",(0,s.jsx)(e.strong,{children:"QR EXECUTE COMMAND"})," executa o comando de menu ou o bot\xe3o da barra de ferramentas cuja refer\xeancia se passa em ",(0,s.jsx)(e.em,{children:"comando"}),". Este comando \xe9 utilizado geralmente para executar um comando de menu selecionado pelo usu\xe1rio e interceptado em seu c\xf3digo atrav\xe9s do comando ",(0,s.jsx)(e.a,{href:"/docs/pt/20-R7/commands/qr-on-command",children:"QR ON COMMAND"})]}),"\n",(0,s.jsxs)(e.p,{children:["Em ",(0,s.jsx)(e.em,{children:"comando"}),", pode passar um valor ou uma das constantes do tema ",(0,s.jsx)(e.em,{children:"QR Comandos"}),"(s\xf3 eventos listados s\xe3o compat\xedveis):"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Constante"}),(0,s.jsx)(e.th,{children:"Valor"}),(0,s.jsx)(e.th,{children:"Coment\xe1rio"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"qr cmd generate"}),(0,s.jsx)(e.td,{children:"2008"}),(0,s.jsxs)(e.td,{children:["uso do comando ",(0,s.jsx)(e.a,{href:"/docs/pt/20-R7/commands/qr-run",children:"QR RUN"})," recomendado"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"qr cmd open"}),(0,s.jsx)(e.td,{children:"2001"}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"qr cmd page setup"}),(0,s.jsx)(e.td,{children:"2006"}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"qr cmd print preview"}),(0,s.jsx)(e.td,{children:"2007"}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"qr cmd save"}),(0,s.jsx)(e.td,{children:"2002"}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"qr cmd save as"}),(0,s.jsx)(e.td,{children:"2003"}),(0,s.jsx)(e.td,{})]})]})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Constante"}),(0,s.jsx)(e.th,{children:"Valor"}),(0,s.jsx)(e.th,{children:"Coment\xe1rio"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"qr cmd generate"}),(0,s.jsx)(e.td,{children:"2008"}),(0,s.jsxs)(e.td,{children:["uso do comando ",(0,s.jsx)(e.a,{href:"/docs/pt/20-R7/commands/qr-run",children:"QR RUN"})," recomendado"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"qr cmd page setup"}),(0,s.jsx)(e.td,{children:"2006"}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"qr cmd print preview"}),(0,s.jsx)(e.td,{children:"2007"}),(0,s.jsx)(e.td,{})]})]})]}),"\n",(0,s.jsxs)(e.p,{children:["Se passa um n\xfamero de ",(0,s.jsx)(e.em,{children:"area"})," inv\xe1lido, se gera o erro -9850.",(0,s.jsx)(e.br,{}),"\nSe passa um n\xfamero de ",(0,s.jsx)(e.em,{children:"comando"})," incorreto, se gera o erro -9852."]}),"\n",(0,s.jsx)(e.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"/docs/pt/20-R7/commands/qr-get-command-status",children:"QR Get command status"}),(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.a,{href:"/docs/pt/20-R7/commands/qr-on-command",children:"QR ON COMMAND"})]}),"\n",(0,s.jsx)(e.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"N\xfamero do comando"}),(0,s.jsx)(e.td,{children:"791"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Thread-seguro"}),(0,s.jsx)(e.td,{children:"\u2717"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Modificar vari\xe1veis"}),(0,s.jsx)(e.td,{children:"error"})]})]})]})]})}function m(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},250065:function(n,e,d){d.d(e,{Z:function(){return o},a:function(){return c}});var r=d(667294);let s={},t=r.createContext(s);function c(n){let e=r.useContext(t);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);