"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["47683"],{621365:function(e,o,n){n.r(o),n.d(o,{default:()=>m,frontMatter:()=>t,metadata:()=>s,assets:()=>a,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/log-file","title":"Log File","description":"Log File  : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/log-file.md","sourceDirName":"commands-legacy","slug":"/commands/log-file","permalink":"/docs/pt/20-R7/commands/log-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flog-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"log-file","title":"Log File","slug":"/commands/log-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"INTEGRATE MIRROR LOG FILE","permalink":"/docs/pt/20-R7/commands/integrate-mirror-log-file"},"next":{"title":"LOG FILE TO JSON","permalink":"/docs/pt/20-R7/commands/log-file-to-json"}}'),r=n("785893"),i=n("250065");let t={id:"log-file",title:"Log File",slug:"/commands/log-file",displayed_sidebar:"docs"},d=void 0,a={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let o={a:"a",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Log File"}),"  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Par\xe2metro"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(o.tbody,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Resultado"}),(0,r.jsx)(o.td,{children:"Text"}),(0,r.jsx)(o.td,{children:"\u2190"}),(0,r.jsx)(o.td,{children:"Nome completo do arquivo de log do banco de dados"})]})})]}),"\n",(0,r.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsx)(o.p,{children:"O comando Log File retorna o nome longo (ou seja, a rota de acesso completa do arquivo, incluindo seu nome) do arquivo de hist\xf3rico atual do banco de dados aberto."}),"\n",(0,r.jsx)(o.p,{children:"Se o banco de dados funciona sem um arquivo de hist\xf3rico, o comando retorna uma cadeia vazia e a vari\xe1vel de sistema OK toma o valor 0."}),"\n",(0,r.jsx)(o.p,{children:"Se o banco de dados funciona com um arquivo de hist\xf3rico, a vari\xe1vel de sistema OK toma o valor 1. A rota de acesso retornada pelo comando \xe9 expressa com a sintaxe da plataforma atual."}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Advert\xeancia:"})," se voc\xea executa este comando a partir de um equipamento 4D Client, s\xf3 se retorna o nome do arquivo de hist\xf3rico, n\xe3o o nome longo."]}),"\n",(0,r.jsx)(o.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"Se o banco funciona sem um arquivo de hist\xf3rico, a vari\xe1vel sistema OK recebe o valor 0; caso contr\xe1rio, recebe o valor 1."}),"\n",(0,r.jsx)(o.li,{children:"Se por alguma raz\xe3o o arquivo de hist\xf3rico se torna inacess\xedvel durante a sess\xe3o de trabalho, \xe9 gerado o erro 1274 e 4D Server n\xe3o permitir\xe1 aos usu\xe1rios modificar ou escrever dados. Quando o arquivo de hist\xf3rico se torna acess\xedvel de novo, \xe9 necess\xe1rio fazer um backup."}),"\n"]}),"\n",(0,r.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.a,{href:"/docs/pt/20-R7/commands/select-log-file",children:"SELECT LOG FILE"})}),"\n",(0,r.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"N\xfamero do comando"}),(0,r.jsx)(o.td,{children:"928"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Thread-seguro"}),(0,r.jsx)(o.td,{children:"\u2713"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Modificar vari\xe1veis"}),(0,r.jsx)(o.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return d},a:function(){return t}});var s=n(667294);let r={},i=s.createContext(r);function t(e){let o=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);