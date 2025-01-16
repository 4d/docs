"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6864"],{79941:function(e,o,s){s.r(o),s.d(o,{default:()=>m,frontMatter:()=>t,metadata:()=>r,assets:()=>i,toc:()=>l,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/goto-selected-record","title":"GOTO SELECTED RECORD","description":"GOTO SELECTED RECORD ( {tabela ;} posicao )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/goto-selected-record.md","sourceDirName":"commands-legacy","slug":"/commands/goto-selected-record","permalink":"/docs/pt/20-R7/commands/goto-selected-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fgoto-selected-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"goto-selected-record","title":"GOTO SELECTED RECORD","slug":"/commands/goto-selected-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET HIGHLIGHTED RECORDS","permalink":"/docs/pt/20-R7/commands/get-highlighted-records"},"next":{"title":"HIGHLIGHT RECORDS","permalink":"/docs/pt/20-R7/commands/highlight-records"}}'),n=s("785893"),d=s("250065");let t={id:"goto-selected-record",title:"GOTO SELECTED RECORD",slug:"/commands/goto-selected-record",displayed_sidebar:"docs"},a=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let o={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"GOTO SELECTED RECORD"})," ( {",(0,n.jsx)(o.em,{children:"tabela"})," ;} ",(0,n.jsx)(o.em,{children:"posicao"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Par\xe2metro"}),(0,n.jsx)(o.th,{children:"Tipo"}),(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"tabela"}),(0,n.jsx)(o.td,{children:"Table"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Tabela na qual ir ao registro selecionado ou Tabela por padr\xe3o, se omitida"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"posicao"}),(0,n.jsx)(o.td,{children:"Integer"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Posi\xe7\xe3o do registro na sele\xe7\xe3o"})]})]})]}),"\n",(0,n.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(o.p,{children:["GOTO SELECTED RECORD move o registro especificado na sele\xe7\xe3o atual de ",(0,n.jsx)(o.em,{children:"tabela"})," o registro atual. A sele\xe7\xe3o atual de tabela n\xe3o muda. O par\xe2metro ",(0,n.jsx)(o.em,{children:"registro"})," n\xe3o \xe9 o mesmo do n\xfamero retornado por ",(0,n.jsx)(o.a,{href:"/docs/pt/20-R7/commands/record-number",children:"Record number"}),"; Este par\xe2metro representa a posi\xe7\xe3o do registro na sele\xe7\xe3o atual. A posi\xe7\xe3o do registro depende da maneira na qual a sele\xe7\xe3o tenha sido criada e ordenada."]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"GOTO SELECTED RECORD"})," n\xe3o faz nada se:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"n\xe3o h\xe1 registros na sele\xe7\xe3o atual"}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.em,{children:"registro"})," n\xe3o est\xe1 na sele\xe7\xe3o atual,"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.em,{children:"registro"})," j\xe1 \xe9 o registro atual.\nSe passa 0 em ",(0,n.jsx)(o.em,{children:"registro,"})," n\xe3o haver\xe1 registro atual em ",(0,n.jsx)(o.em,{children:"tabela"}),". Este mecanismo permite desmarcar todos os registros em uma lista, especialmente no caso dos subformul\xe1rios inclu\xeddos, quando o modo de sele\xe7\xe3o \xe9 \u201C\xfanico\u201D."]}),"\n"]}),"\n",(0,n.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsxs)(o.p,{children:["O seguinte exemplo carrega dados do campo [Pessoas]Sobrenome no array ",(0,n.jsx)(o.em,{children:"atNomes"}),". Um array de inteiros longos, chamado NumReg, se preenche com os n\xfameros que representar\xe3o aos registros selecionados. Depois os dois arrays s\xe3o ordenados:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:"\xa0Tab/]\xa0// Criar aqui a sele\xe7\xe3o da tabela [Pessoas]\n\xa0&NBSP;\xa0// ...\n\xa0&NBSP;\xa0// Obter os nomes\n\xa0SELECTION TO ARRAY([Pessoas]Sobrenome;atNomes)\n\xa0&NBSP;\xa0// Criar um array para os n\xfameros de registros selecionados\n\xa0$vlNbRegistros:=Size of array(atNomes)\n\xa0&NBSP;ARRAY LONGINT(NumReg;$vlNbRegistros)For($vlRegistro ;1;$vlNbRegistros)NumReg{$vlRegistro }:=$vlRegistro\n\xa0&NBSP;End for\n\xa0\xa0// Ordenar os dois arrays em ordem alfab\xe9tica\n\xa0&NBSP;SORT ARRAY(atNomes;NumReg;>)\n"})}),"\n",(0,n.jsxs)(o.p,{children:["Se o array ",(0,n.jsx)(o.em,{children:"atNomes"})," for mostrado em uma \xe1rea de rolagem, o usu\xe1rio faz clique em um dos elementos. Como a ordena\xe7\xe3o dos dois arrays est\xe1 sincronizada, todo elemento de ",(0,n.jsx)(o.em,{children:"numReg"})," proporciona o n\xfamero do registro selecionado para o registro cujo nome for guardado no elemento correspondente em ",(0,n.jsx)(o.em,{children:"atNomes"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["O seguinte m\xe9todo de objeto para ",(0,n.jsx)(o.em,{children:"atNomes"})," seleciona o registro correto na sele\xe7\xe3o de [Pessoas], de acordo ao nome elegido na \xe1rea de rolagem:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0&NBSP;:(Form event code=On Clicked)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0&NBSP;If(atNomes#0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0&NBSP;GOTO SELECTED RECORD(NumReg{atNomes})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0&NBSP;End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0&NBSP;End case\n"})}),"\n",(0,n.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.a,{href:"/docs/pt/20-R7/commands/selected-record-number",children:"Selected record number"})}),"\n",(0,n.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"N\xfamero do comando"}),(0,n.jsx)(o.td,{children:"245"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Thread-seguro"}),(0,n.jsx)(o.td,{children:"\u2713"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Modificar o registro atual"}),(0,n.jsx)(o.td,{})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,d.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},250065:function(e,o,s){s.d(o,{Z:function(){return a},a:function(){return t}});var r=s(667294);let n={},d=r.createContext(n);function t(e){let o=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),r.createElement(d.Provider,{value:o},e.children)}}}]);