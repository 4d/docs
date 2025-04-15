"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["44323"],{942299:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>s,assets:()=>o,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/is-field-number-valid","title":"Is field number valid","description":"Is field number valid ( pontTabela ; numCampo ) Boolean","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/is-field-number-valid.md","sourceDirName":"commands-legacy","slug":"/commands/is-field-number-valid","permalink":"/docs/pt/20-R7/commands/is-field-number-valid","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-field-number-valid.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"is-field-number-valid","title":"Is field number valid","slug":"/commands/is-field-number-valid","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"IMPORT STRUCTURE","permalink":"/docs/pt/20-R7/commands/import-structure"},"next":{"title":"Is table number valid","permalink":"/docs/pt/20-R7/commands/is-table-number-valid"}}'),d=r("785893"),t=r("250065");let a={id:"is-field-number-valid",title:"Is field number valid",slug:"/commands/is-field-number-valid",displayed_sidebar:"docs"},i=void 0,o={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Is field number valid"})," ( ",(0,d.jsx)(n.em,{children:"pontTabela"})," ; ",(0,d.jsx)(n.em,{children:"numCampo"})," ) : Boolean",(0,d.jsx)(n.br,{}),(0,d.jsx)(n.strong,{children:"Is field number valid"})," ( ",(0,d.jsx)(n.em,{children:"numTabela"})," ; ",(0,d.jsx)(n.em,{children:"numCampo"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"numTabela|pontTabela"}),(0,d.jsx)(n.td,{children:"Inteiro longo, Ponteiro"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero da tabela ou ponteiro a tabela"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"numCampo"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero do campo"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Resultado"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"True = Campo exista na tabela; False = campo n\xe3o existe na tabela"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["O comando Is field number valid retorna True se o campo cujo n\xfamero for passado no par\xe2metro ",(0,d.jsx)(n.em,{children:"numCampo"})," existe na tabela cujo n\xfamero ou ponteiro for passado no par\xe2metro ",(0,d.jsx)(n.em,{children:"numTabela"})," ou ",(0,d.jsx)(n.em,{children:"ponTabela"}),". Se o campo n\xe3o existir, o comando retorna False. Lembre que o comando retorna False se a tabela que contiver o campo for encontrada na Lixeira do Explorador."]}),"\n",(0,d.jsx)(n.p,{children:"Este comando permite detectar as eventuais elimina\xe7\xf5es de campos, que criam quebras na sequ\xeancia de n\xfameros dos campos."}),"\n",(0,d.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/last-table-number",children:"Last table number"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/is-table-number-valid",children:"Is table number valid"})]}),"\n",(0,d.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"1000"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return a}});var s=r(667294);let d={},t=s.createContext(d);function a(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);