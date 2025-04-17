"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1410"],{992791:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/scan-index","title":"SCAN INDEX","description":"SCAN INDEX ( campo ; numero {; > ou <} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/scan-index.md","sourceDirName":"commands-legacy","slug":"/commands/scan-index","permalink":"/docs/pt/20-R8/commands/scan-index","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fscan-index.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"scan-index","title":"SCAN INDEX","slug":"/commands/scan-index","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"REDUCE SELECTION","permalink":"/docs/pt/20-R8/commands/reduce-selection"},"next":{"title":"Selected record number","permalink":"/docs/pt/20-R8/commands/selected-record-number"}}'),d=s("785893"),t=s("250065");let o={id:"scan-index",title:"SCAN INDEX",slug:"/commands/scan-index",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SCAN INDEX"})," ( ",(0,d.jsx)(n.em,{children:"campo"})," ; ",(0,d.jsx)(n.em,{children:"numero"})," {; > ou <} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"campo"}),(0,d.jsx)(n.td,{children:"Field"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Campo indexado onde vai procurar o \xedndice"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"numero"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xba de registros  a retornar"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"> ou <"}),(0,d.jsx)(n.td,{children:"Operador"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:">a partir do come\xe7o do \xedndice,"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["SCAN INDEX retorna uma sele\xe7\xe3o de ",(0,d.jsx)(n.em,{children:"numero"})," de registros da ",(0,d.jsx)(n.em,{children:"tabela"}),". Se passa <, SCAN INDEX retorna o ",(0,d.jsx)(n.em,{children:"numero"})," de registros a partir do final do \xedndice (valores superiores). Se passa >, SCAN INDEX retorna ",(0,d.jsx)(n.em,{children:"numero"})," de registros a partir do in\xedcio do \xedndice (valores inferiores). Este comando \xe9 muito eficiente porque utiliza o \xedndice para realizar a opera\xe7\xe3o."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota"}),": a sele\xe7\xe3o que \xe9 obtida n\xe3o est\xe1 ordenada."]}),"\n",(0,d.jsx)(n.p,{children:"SCAN INDEX funciona unicamente com campos indexados. Este comando modifica a sele\xe7\xe3o atual da tabela para o processo atual, mas n\xe3o h\xe1 registro atual."}),"\n",(0,d.jsx)(n.p,{children:"Se especifica um n\xfamero de registros superior ao n\xfamero de registros presentes na tabela, SCAN INDEX devolver\xe1 todos os registros."}),"\n",(0,d.jsx)(n.h3,{id:""}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," Este comando n\xe3o \xe9 compat\xedvel com campos tipo Objeto"]}),"\n",(0,d.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(n.p,{children:"O seguinte exemplo envia cartas aos 50 piores clientes e aos 50 melhores clientes:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0SCAN INDEX([Clientes]TotalVencido;50;<)\xa0// Obter a lista dos 50 piores clientes\n\xa0&NBSP;ORDER BY([Clientes]CodigoPostal;>)\xa0// Ordenar por c\xf3digo postal\n\xa0&NBSP;FORM SET OUTPUT([Clientes];"Advert\xeancia")\n\xa0&NBSP;PRINT SELECTION([Clientes])\xa0// Imprimir as cartas\n\xa0&NBSP;SCAN INDEX([Clientes]TotalVencido;50;>)\xa0// Obter a lista dos 50 melhores clientes\n\xa0&NBSP;ORDER BY([Clientes]CodigoPostal;>)\xa0// Ordenar por c\xf3digo postal\n\xa0&NBSP;FORM SET OUTPUT([Clientes];"Carta de agradecimento")\n\xa0&NBSP;PRINT SELECTION([Clientes])\xa0// Imprimir as cartas\n'})}),"\n",(0,d.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/pt/20-R8/commands/order-by",children:"ORDER BY"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/20-R8/commands/query",children:"QUERY"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/20-R8/commands/reduce-selection",children:"REDUCE SELECTION"})]}),"\n",(0,d.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"350"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modificar o registro atual"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modificar a sele\xe7\xe3o atual"}),(0,d.jsx)(n.td,{})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return o}});var r=s(667294);let d={},t=r.createContext(d);function o(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);