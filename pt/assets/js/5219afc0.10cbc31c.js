"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["40819"],{990810:function(e,r,n){n.r(r),n.d(r,{metadata:()=>o,contentTitle:()=>t,default:()=>m,assets:()=>d,toc:()=>l,frontMatter:()=>i});var o=JSON.parse('{"id":"commands-legacy/page-break","title":"PAGE BREAK","description":"PAGE BREAK {( *|> )}","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/page-break.md","sourceDirName":"commands-legacy","slug":"/commands/page-break","permalink":"/docs/pt/commands/page-break","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpage-break.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"page-break","title":"PAGE BREAK","slug":"/commands/page-break","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OPEN PRINTING JOB","permalink":"/docs/pt/commands/open-printing-job"},"next":{"title":"Print form","permalink":"/docs/pt/commands/print-form"}}'),a=n("785893"),s=n("250065");let i={id:"page-break",title:"PAGE BREAK",slug:"/commands/page-break",displayed_sidebar:"docs"},t=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let r={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"PAGE BREAK"})," {( *|> )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Par\xe2metro"}),(0,a.jsx)(r.th,{children:"Tipo"}),(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsx)(r.tbody,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"*|>"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"* Cancela o trabalho de impress\xe3o iniciado com o Formul\xe1rio de Impress\xe3o, ou > para for\xe7ar um trabalho de impress\xe3o."}),(0,a.jsx)(r.td,{})]})})]}),"\n",(0,a.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(r.p,{children:["PAGE BREAK dispara a impress\xe3o de dados enviados a la impressora e provocar um salto de p\xe1gina. PAGE BREAK se utiliza conjuntamente com ",(0,a.jsx)(r.a,{href:"/docs/pt/commands/print-form",children:"Print form"})," (no contexto do evento de formul\xe1rio On Printing Detail) para for\xe7ar saltos de p\xe1gina e imprimir a \xfaltima p\xe1gina criada em mem\xf3ria. N\xe3o utilize PAGE BREAK com o comando ",(0,a.jsx)(r.a,{href:"/docs/pt/commands/print-selection",children:"PRINT SELECTION"}),". \xc9 melhor utilizar ",(0,a.jsx)(r.a,{href:"/docs/pt/commands/subtotal",children:"Subtotal"})," ou ",(0,a.jsx)(r.a,{href:"/docs/pt/commands/break-level",children:"BREAK LEVEL"})," com o par\xe2metro opcional para gerar saltos de p\xe1gina."]}),"\n",(0,a.jsxs)(r.p,{children:["Os par\xe2metros ",(0,a.jsx)(r.em,{children:"*"})," e ",(0,a.jsx)(r.em,{children:">"})," s\xe3o opcionais."]}),"\n",(0,a.jsxs)(r.p,{children:["O par\xe2metro ",(0,a.jsx)(r.em,{children:"*"})," lhe permite cancelar um trabalho de impress\xe3o iniciado pelo comando ",(0,a.jsx)(r.a,{href:"/docs/pt/commands/print-form",children:"Print form"}),". A execu\xe7\xe3o deste comando det\xe9m imediatamente os trabalhos de impress\xe3o em progresso."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Nota:"})," em Windows, este mecanismo pode ser transtornado pelas propriedades de fila de espera do servidor de impress\xe3o. Se a impressora se configura para come\xe7ar a impress\xe3o imediatamente, o cancelamento n\xe3o ser\xe1 efetiva. Para que o comando ",(0,a.jsx)(r.strong,{children:"PAGE BREAK(*)"}),' funcione corretamente, \xe9 prefer\xedvel escolher a propriedade "Iniciar impress\xe3o quando a \xfaltima p\xe1gina tenha entrado na fila" da impressora.']}),"\n",(0,a.jsxs)(r.p,{children:["O par\xe2metro ",(0,a.jsx)(r.em,{children:">"})," modifica o funcionamento do comando PAGE BREAK. Esta sintaxe tem dois efeitos:"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Mant\xe9m a impress\xe3o aberta at\xe9 que o comando PAGE BREAK se executa novamente sem um par\xe2metro."}),"\n",(0,a.jsxs)(r.li,{children:["D\xe1 prioridade ao trabalho de impress\xe3o. Nenhuma outra impress\xe3o pode ser realizada at\xe9 que o trabalho de impress\xe3o tenha terminado.",(0,a.jsx)(r.br,{}),"\nA segunda op\xe7\xe3o \xe9 particularmente \xfatil quando se utiliza com um trabalho de impress\xe3o em fila. O par\xe2metro > garante que o trabalho de impress\xe3o ser\xe1 realizado a partir de um s\xf3 arquivo. Isto reduzir\xe1 o tempo de impress\xe3o."]}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Nota:"})," durante uma impress\xe3o de tela, se o usu\xe1rio clicar em Cancelar na caixa de di\xe1logo de pr\xe9-visualiza\xe7\xe3o, o comando PAGE BREAK define a vari\xe1vel sistema OK em 0."]}),"\n",(0,a.jsx)(r.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,a.jsxs)(r.p,{children:["Ver o exemplo do comando ",(0,a.jsx)(r.a,{href:"/docs/pt/commands/print-form",title:"Print form",children:"Print form"}),"."]}),"\n",(0,a.jsx)(r.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,a.jsxs)(r.p,{children:["Consulte o exemplo do comando ",(0,a.jsx)(r.a,{href:"/docs/pt/commands/set-print-marker",title:"SET PRINT MARKER",children:"SET PRINT MARKER"}),"."]}),"\n",(0,a.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"/docs/pt/commands/cancel",children:"CANCEL"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"/docs/pt/commands/print-form",children:"Print form"})]}),"\n",(0,a.jsx)(r.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"N\xfamero do comando"}),(0,a.jsx)(r.td,{children:"6"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Thread-seguro"}),(0,a.jsx)(r.td,{children:"\u2717"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Modificar vari\xe1veis"}),(0,a.jsx)(r.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return t},a:function(){return i}});var o=n(667294);let a={},s=o.createContext(a);function i(e){let r=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);