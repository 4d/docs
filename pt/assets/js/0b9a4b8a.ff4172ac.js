"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["15957"],{305250:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/break-level","title":"BREAK LEVEL","description":"BREAK LEVEL ( nivel {; saltoPagina} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/break-level.md","sourceDirName":"commands-legacy","slug":"/commands/break-level","permalink":"/docs/pt/commands/break-level","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fbreak-level.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"break-level","title":"BREAK LEVEL","slug":"/commands/break-level","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BLOB to print settings","permalink":"/docs/pt/commands/blob-to-print-settings"},"next":{"title":"CLOSE PRINTING JOB","permalink":"/docs/pt/commands/close-printing-job"}}'),a=r("785893"),o=r("250065");let t={id:"break-level",title:"BREAK LEVEL",slug:"/commands/break-level",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"BREAK LEVEL"})," ( ",(0,a.jsx)(n.em,{children:"nivel"})," {; ",(0,a.jsx)(n.em,{children:"saltoPagina"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe2metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"nivel"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"N\xfamero de n\xedveis de quebra"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"saltoPagina"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"N\xedvel de quebra para o qual fazer um salto de p\xe1gina."})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(n.p,{children:["BREAK LEVEL especifica o n\xfamero de n\xedveis de quebra em um relat\xf3rio realizado utilizando ",(0,a.jsx)(n.a,{href:"/docs/pt/commands/print-selection",children:"PRINT SELECTION"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Deve"})," executar BREAK LEVEL e ",(0,a.jsx)(n.a,{href:"/docs/pt/commands/accumulate",children:"ACCUMULATE"})," antes de cada relat\xf3rio no qual queira utilizar quebras. Estes comandos ativam o processo de quebras para um relat\xf3rio. Ver a explica\xe7\xe3o para o comando ",(0,a.jsx)(n.a,{href:"/docs/pt/commands/subtotal",children:"Subtotal"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["O par\xe2metro ",(0,a.jsx)(n.em,{children:"nivel"})," indica o \xfaltimo n\xedvel de quebra para o qual queira realizar processos de quebras. Deve ter ordenado os registros com ao menos esse n\xfamero de n\xedveis. Se tiver ordenado mais n\xedveis, estes n\xedveis ser\xe3o impressos como est\xe3o ordenados, mas n\xe3o ser\xe3o processados para quebras."]}),"\n",(0,a.jsxs)(n.p,{children:["Cada n\xedvel de quebra gerado imprimir\xe1 as \xe1reas de quebras e de cabe\xe7alho correspondentes no formul\xe1rio. Deve ter no formul\xe1rio ao menos tantas \xe1reas de quebra como o n\xfamero que passou em ",(0,a.jsx)(n.em,{children:"nivel"}),". Se houver mais \xe1reas de quebra, ser\xe3o ignoradas e n\xe3o ser\xe3o impressas."]}),"\n",(0,a.jsxs)(n.p,{children:["O segundo par\xe2metro, opcional, ",(0,a.jsx)(n.em,{children:"saltoPagina"}),", se utiliza para provocar saltos de p\xe1gina durante a impress\xe3o."]}),"\n",(0,a.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,a.jsxs)(n.p,{children:["O exemplo a seguir imprime um relat\xf3rio com dois n\xedveis de quebra. A sele\xe7\xe3o \xe9 ordenada em quatro n\xedveis, mas o comando ",(0,a.jsx)(n.strong,{children:"BREAK LEVEL"})," especifica apenas dois n\xedveis de quebra. Um campo se acumula com o comando ",(0,a.jsx)(n.a,{href:"/docs/pt/commands/accumulate",children:"ACCUMULATE"})," :"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0ORDER BY([Emp]Departamento;>;[Emp]Titulo;>;[Emp]Sobrenome;>;[Emp]Nome;>)\xa0// Ordenar em quatro campos\n\xa0BREAK LEVEL(2)\xa0// Fixar 2 n\xedveis de quebra (Departamento e t\xedtulo)\n\xa0ACCUMULATE([Emp]Salario)\xa0// Acumular os sal\xe1rios\n\xa0FORM SET OUTPUT([Emp];"Departamento recursos humanos")\xa0// Selecionar o formul\xe1rio a imprimir\n\xa0PRINT SELECTION([Emp])\xa0// Imprimir o relat\xf3rio\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/pt/commands/accumulate",children:"ACCUMULATE"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/pt/commands/order-by",children:"ORDER BY"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/pt/commands/print-selection",children:"PRINT SELECTION"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/pt/commands/subtotal",children:"Subtotal"})]}),"\n",(0,a.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero do comando"}),(0,a.jsx)(n.td,{children:"302"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread-seguro"}),(0,a.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return t}});var s=r(667294);let a={},o=s.createContext(a);function t(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);