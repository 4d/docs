"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86086"],{282401:function(e,o,s){s.r(o),s.d(o,{default:()=>c,frontMatter:()=>n,metadata:()=>a,assets:()=>t,toc:()=>l,contentTitle:()=>d});var a=JSON.parse('{"id":"commands-legacy/print-label","title":"PRINT LABEL","description":"PRINT LABEL ( {tabela }{;}{ documento {; *|>}} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/print-label.md","sourceDirName":"commands-legacy","slug":"/commands/print-label","permalink":"/docs/pt/commands/print-label","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprint-label.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"print-label","title":"PRINT LABEL","slug":"/commands/print-label","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Print form","permalink":"/docs/pt/commands/print-form"},"next":{"title":"Print object","permalink":"/docs/pt/commands/print-object"}}'),r=s("785893"),i=s("250065");let n={id:"print-label",title:"PRINT LABEL",slug:"/commands/print-label",displayed_sidebar:"docs"},d=void 0,t={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Exemplo 3",id:"exemplo-3",level:2},{value:"Exemplo 4",id:"exemplo-4",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function m(e){let o={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"PRINT LABEL"})," ( {",(0,r.jsx)(o.em,{children:"tabela"})," }{;}{ ",(0,r.jsx)(o.em,{children:"documento"})," {; *|>}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Par\xe2metro"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"tabela"}),(0,r.jsx)(o.td,{children:"Table"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Tabela a imprimir, ou tabela padr\xe3o, se omitido"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"documento"}),(0,r.jsx)(o.td,{children:"Text"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Nome do documento de etiquetas do disco"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"*|>"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"* para apagar as caixas de di\xe1logo de impress\xe3o, ou > para n\xe3o reiniciar os par\xe2metros de impress\xe3o"}),(0,r.jsx)(o.td,{})]})]})]}),"\n",(0,r.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(o.p,{children:["PRINT LABEL permite imprimir etiquetas com los datos de la sele\xe7\xe3o de ",(0,r.jsx)(o.em,{children:"tabela"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["Se n\xe3o especifica o par\xe2metro ",(0,r.jsx)(o.em,{children:"documento"}),", PRINT LABEL imprime a sele\xe7\xe3o atual de ",(0,r.jsx)(o.em,{children:"tabela"})," como etiquetas, utilizando o formul\xe1rio de sa\xedda atual. N\xe3o pode utilizar este comando para imprimir sub-formul\xe1rios. Para maior informa\xe7\xe3o sobre a cria\xe7\xe3o de formul\xe1rios para etiquetas, consulte o Manual de Desenho."]}),"\n",(0,r.jsxs)(o.p,{children:["Se especifica o par\xe2metro ",(0,r.jsx)(o.em,{children:"documento"}),", PRINT LABEL lhe permite ter acesso ao Assistente de etiquetas (mostrado a continua\xe7\xe3o) ou imprimir um documento de etiquetas existente armazenado no disco. Ver o exemplo a continua\xe7\xe3o."]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{src:s(197087).Z+"",width:"766",height:"618"})}),"\n",(0,r.jsxs)(o.p,{children:["Como padr\xe3o, PRINT LABEL mostra a caixa de di\xe1logo de impress\xe3o antes de imprimir. Se o usu\xe1rio cancela uma das caixas de di\xe1logo de impress\xe3o, o comando se cancela e as etiquetas n\xe3o se imprimem.",(0,r.jsx)(o.br,{}),"\nPode eliminar estas caixas de di\xe1logo utilizando o par\xe2metro opcional asterisco (",(0,r.jsx)(o.em,{children:"*"}),") ou o par\xe2metro opcional \u201Cmaior que\u201D (",(0,r.jsx)(o.em,{children:">"}),"):",(0,r.jsx)(o.br,{}),"\n\u2022 O par\xe2metro * causa una impress\xe3o com os par\xe2metros de impress\xe3o atuais.",(0,r.jsx)(o.br,{}),"\n\u2022 Al\xe9m disso, o par\xe2metro > provoca um trabalho de impress\xe3o sem reiniciar os par\xe2metros de impress\xe3o atuais. Este par\xe2metro \xe9 \xfatil para executar v\xe1rias chamadas sucessivas a PRINT LABEL (por exemplo ao interior de um loop) enquanto mant\xe9m os par\xe2metros de impress\xe3o personalizados previamente definidos. Para ver um exemplo sobre o uso deste par\xe2metro, consulte a descri\xe7\xe3o do comando ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/print-record",children:"PRINT RECORD"})," .",(0,r.jsx)(o.br,{}),"\nNote que este par\xe2metro n\xe3o tem efeito se utilizar o assistente de cria\xe7\xe3o de etiquetas."]}),"\n",(0,r.jsxs)(o.p,{children:["Se n\xe3o utilizar o assistente de cria\xe7\xe3o de etiquetas, a vari\xe1vel sistema OK toma o valor 1 se todas as etiquetas se imprimem; do contr\xe1rio, toma o valor 0 (zero) (por exemplo, se o usu\xe1rio clicou no bot\xe3o ",(0,r.jsx)(o.strong,{children:"Cancelar"})," nas caixas de di\xe1logo de impress\xe3o)."]}),"\n",(0,r.jsxs)(o.p,{children:["Se especifica o par\xe2metro ",(0,r.jsx)(o.em,{children:"documento"}),", as etiquetas se imprimem com os par\xe2metros definidos em ",(0,r.jsx)(o.em,{children:"documento"}),". Se ",(0,r.jsx)(o.em,{children:"documento"}),' for uma cadeia vazia (""), PRINT LABEL apresentar\xe1 uma caixa de di\xe1logo padr\xe3o de abertura de documentos, permitindo ao usu\xe1rio selecionar o arquivo de etiquetas a utilizar. Se ',(0,r.jsx)(o.em,{children:"documento"})," for o nome de um documento que n\xe3o existe (por exemplo, se passa ",(0,r.jsx)(o.em,{children:"char(1)"})," em ",(0,r.jsx)(o.em,{children:"documento)"}),", o assistente de cria\xe7\xe3o de etiquetas aparece, permitindo ao usu\xe1rio definir seu formato de etiquetas."]}),"\n",(0,r.jsxs)(o.p,{children:["**Nota:**se a ",(0,r.jsx)(o.em,{children:"tabela"})," foi declarada \u201Cinvis\xedvel\u201D no ambiente Desenho, n\xe3o ser\xe1 mostrada o assistente de etiquetas."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"4D Server:"})," este comando pode ser executado em 4D Server no marco de um procedimento armazenado. Neste contexto:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["Tenha certeza de que nenhuma caixa de di\xe1logo apare\xe7a na m\xe1quina servidor (exceto por uma necessidade espec\xedfica). Para fazer isso, \xe9 necess\xe1rio chamar ao comando com o par\xe2metro ",(0,r.jsx)(o.em,{children:"*"})," ou ",(0,r.jsx)(o.em,{children:">"})," ."]}),"\n",(0,r.jsx)(o.li,{children:"A sintaxe que faz com que o editor de etiquetas apare\xe7a n\xe3o funciona com 4D Server; neste caso, a vari\xe1vel sistema OK toma o valor 0."}),"\n",(0,r.jsx)(o.li,{children:"No caso de um problema relacionado de impressora (sem papel, impressora desconectada, etc.), n\xe3o \xe9 gerado uma mensagem de erro."}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,r.jsx)(o.p,{children:"O exemplo a seguir imprime as etiquetas utilizando o formul\xe1rio de sa\xedda de uma tabela. O exemplo utiliza dois m\xe9todos. O primeiro \xe9 um m\xe9todo de projeto que designa o formul\xe1rio de sa\xedda a utilizar e depois imprime as etiquetas:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0ALL RECORDS([Endere\xe7os])\xa0// Sele\xe7\xe3o de todos os registros\n\xa0FORM SET OUTPUT([Endere\xe7os];"Imprimir Etiqueta")\xa0// Sele\xe7\xe3o do formul\xe1rio de sa\xedda\n\xa0PRINT LABEL([Endere\xe7os])\xa0// Impress\xe3o de etiquetas\n\xa0FORM SET OUTPUT([Endere\xe7os];"Sa\xedda")\xa0// Restabelecimento do formul\xe1rio de sa\xedda padr\xe3o\n'})}),"\n",(0,r.jsxs)(o.p,{children:["O segundo m\xe9todo \xe9 o m\xe9todo de formul\xe1rio do formul\xe1rio ",(0,r.jsx)(o.em,{children:'"Imprimir Etiqueta"'}),". O formul\xe1rio cont\xe9m uma vari\xe1vel chamada ",(0,r.jsx)(o.em,{children:"vEtiq"}),", que se utiliza para manter os campos concatenados. Se o segundo campo de endere\xe7os (End2) estiver vazio, \xe9 eliminado pelo m\xe9todo. Note que esta opera\xe7\xe3o for realizada automaticamente pelo assistente de cria\xe7\xe3o de etiquetas. O m\xe9todo de formul\xe1rio cria a etiqueta para cada registro:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0//M\xe9todo de formul\xe1rio [Endere\xe7os]; "Etiqueta sa\xedda"\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vEtiq:=[Endere\xe7os]Nom1+" "+[Endere\xe7os]Nom2+Char(13)+[Endere\xe7os]Dir1+Char(13)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If([Endere\xe7os]Dir2#"")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vEtiq:=vLabel+[Endere\xe7os]Dir2+Char(13)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vEtiq:=vEtiq+[Endere\xe7os]Cidade+", "+[Endere\xe7os]Estado+" "+[Endere\xe7os]CodigoPostal\n\xa0End case\n'})}),"\n",(0,r.jsx)(o.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,r.jsx)(o.p,{children:"O exemplo a seguir permite ao usu\xe1rio realizar uma pesquisa na tabela [Pessoas], e depois imprime automaticamente as etiquetas \u201CMinhas etiquetas\u201D:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0QUERY([Pessoas])\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0PRINT LABEL([Pessoas];"Minhas etiquetas";*)\n\xa0End if\n'})}),"\n",(0,r.jsx)(o.h2,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,r.jsx)(o.p,{children:"O exemplo a seguir lhe permite ao usu\xe1rio efetuar uma pesquisa na tabela [Pessoas], e depois lhe permite ao usu\xe1rio escolher as etiquetas a imprimir:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0QUERY([Pessoas])\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0PRINT LABEL([Pessoas];"")\n\xa0End if\n'})}),"\n",(0,r.jsx)(o.h2,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,r.jsx)(o.p,{children:"O exemplo a seguir lhe permite ao usu\xe1rio efetuar uma pesquisa na tabela [Pessoas] e depois mostra o Assistente de etiquetas de modo a que o usu\xe1rio possa criar, salvar, carregar e imprimir todo tipo de etiquetas:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"\xa0QUERY([Pessoas])\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0PRINT LABEL([Pessoas];Char(1))\n\xa0End if\n"})}),"\n",(0,r.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"/docs/pt/commands/print-selection",children:"PRINT SELECTION"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"/docs/pt/commands/qr-report",children:"QR REPORT"})]}),"\n",(0,r.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"N\xfamero do comando"}),(0,r.jsx)(o.td,{children:"39"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Thread-seguro"}),(0,r.jsx)(o.td,{children:"\u2717"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Modificar vari\xe1veis"}),(0,r.jsx)(o.td,{children:"OK"})]})]})]})]})}function c(e={}){let{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},197087:function(e,o,s){s.d(o,{Z:function(){return a}});let a=s.p+"assets/images/pict2980390.en-2255f84e4ef8ebebfb5ba59bb7f15da4.png"},250065:function(e,o,s){s.d(o,{Z:function(){return d},a:function(){return n}});var a=s(667294);let r={},i=a.createContext(r);function n(e){let o=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),a.createElement(i.Provider,{value:o},e.children)}}}]);