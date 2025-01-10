"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["93114"],{536126:function(e,o,s){s.r(o),s.d(o,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>t,toc:()=>l,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/display-selection","title":"DISPLAY SELECTION","description":"DISPLAY SELECTION ( {; modoSelecao}{; entraLista}{; }{; } )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/display-selection.md","sourceDirName":"commands-legacy","slug":"/commands/display-selection","permalink":"/docs/pt/commands/display-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdisplay-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"display-selection","title":"DISPLAY SELECTION","slug":"/commands/display-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DELETE SELECTION","permalink":"/docs/pt/commands/delete-selection"},"next":{"title":"Displayed line number","permalink":"/docs/pt/commands/displayed-line-number"}}'),a=s("785893"),n=s("250065");let d={id:"display-selection",title:"DISPLAY SELECTION",slug:"/commands/display-selection",displayed_sidebar:"docs"},i=void 0,t={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"DISPLAY SELECTION"})," ( {",(0,a.jsx)(o.em,{children:"tabela"}),"}{; ",(0,a.jsx)(o.em,{children:"modoSelecao"}),"}{; ",(0,a.jsx)(o.em,{children:"entraLista"}),"}{; *}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Par\xe2metro"}),(0,a.jsx)(o.th,{children:"Tipo"}),(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"tabela"}),(0,a.jsx)(o.td,{children:"Table"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Tabela a exibir, ou tabela padr\xe3o, se omitido"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"modoSelecao"}),(0,a.jsx)(o.td,{children:"Integer"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Modo de Sele\xe7\xe3o"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"entraLista"}),(0,a.jsx)(o.td,{children:"Boolean"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Autorizar Entrada na lista de op\xe7\xe3o"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"*"}),(0,a.jsx)(o.td,{children:"Operator"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Utilizar o formul\xe1rio de sa\xedda em caso de sele\xe7\xe3o de somente um registro e ocultar as barras de deslocamento no formul\xe1rio de entrada"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"*"}),(0,a.jsx)(o.td,{children:"Operator"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Mostrar as barras de deslocamento no formul\xe1rio de entrada (anular o segundo efeito do primeiro par\xe2metro *)"})]})]})]}),"\n",(0,a.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(o.p,{children:["DISPLAY SELECTION mostra a sele\xe7\xe3o de ",(0,a.jsx)(o.em,{children:"tabela"}),", utilizando o formul\xe1rio de sa\xedda. Os registros se mostram em uma lista pela qual pode ser deslocada similar ao do modo Desenho. Se o usu\xe1rio fizer duplo clique em um registro, por padr\xe3o \xe9 mostrado o registro no formul\xe1rio de entrada atual. A lista \xe9 mostrada na janela do primeiro plano."]}),"\n",(0,a.jsxs)(o.p,{children:["Para mostrar uma sele\xe7\xe3o e poder igualmente modificar um registro no formul\xe1rio de entrada atual depois de fazer duplo clique nele (como \xe9 feito na janela do ambiente Desenho), utilize ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/object-set-enterable",children:"OBJECT SET ENTERABLE"})," ao inv\xe9s de DISPLAY SELECTION."]}),"\n",(0,a.jsx)(o.p,{children:"A informa\xe7\xe3o a continua\xe7\xe3o aplica a ambos comandos, exceto pela informa\xe7\xe3o sobre a modifica\xe7\xe3o de registros."}),"\n",(0,a.jsxs)(o.p,{children:["Depois de executar DISPLAY SELECTION, n\xe3o h\xe1 registro atual. Utilize um comando tal como ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/first-record",children:"FIRST RECORD"})," ou ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/last-record",children:"LAST RECORD"})," para selecionar um."]}),"\n",(0,a.jsxs)(o.p,{children:["O par\xe2metro ",(0,a.jsx)(o.em,{children:"modoSelecao"})," \xe9 utilizado para definir as possibilidades de sele\xe7\xe3o de registros na lista utilizando o mouse. Neste par\xe2metro pode passar uma das seguintes constantes do tema \u201C",(0,a.jsx)(o.em,{children:"Par\xe2metro de formul\xe1rio"}),"\u201D:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Constante"}),(0,a.jsx)(o.th,{children:"Tipo"}),(0,a.jsx)(o.th,{children:"Valor"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Multiple selection"}),(0,a.jsx)(o.td,{children:"Inteiro longo"}),(0,a.jsx)(o.td,{children:"2"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"No selection"}),(0,a.jsx)(o.td,{children:"Inteiro longo"}),(0,a.jsx)(o.td,{children:"0"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Single selection"}),(0,a.jsx)(o.td,{children:"Inteiro longo"}),(0,a.jsx)(o.td,{children:"1"})]})]})]}),"\n",(0,a.jsxs)(o.p,{children:["Se n\xe3o passa o par\xe2metro ",(0,a.jsx)(o.em,{children:"modoSelecao"}),", por padr\xe3o \xe9 utilizado o modo \u201CSele\xe7\xe3o m\xfaltipla\u201D."]}),"\n",(0,a.jsxs)(o.p,{children:["O par\xe2metro ",(0,a.jsx)(o.em,{children:"entradaLista"})," lhe permite autorizar o modo \u201CEntrada em lista\u201D na lista mostrada. Este modo permite ao usu\xe1rio selecionar e modificar diretamente os valores dos registros no formul\xe1rio de sa\xedda. Passe ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/true",title:"True",children:"True"})," para ativar este modo ou ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/false",title:"False",children:"False"})," para desativ\xe1-lo. Por padr\xe3o, se n\xe3o passar o par\xe2metro ",(0,a.jsx)(o.em,{children:"entradaLista"}),", o modo \u201CEntrada em lista\u201D \xe9 desativado."]}),"\n",(0,a.jsxs)(o.p,{children:["Lembre que com o comando DISPLAY SELECTION, este par\xe2metro apenas permite a sele\xe7\xe3o dos valores na lista e n\xe3o sua modifica\xe7\xe3o. De fato, o comando DISPLAY SELECTION carrega os registros da sele\xe7\xe3o atual em modo apenas leitura. S\xf3 o comando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/modify-selection",children:"MODIFY SELECTION"})," permite efetivamente a entrada de valores."]}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Nota"}),": O comando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/object-set-enterable",children:"OBJECT SET ENTERABLE"})," permite ativar ou desativar facilmente o modo Entrada em lista."]}),"\n",(0,a.jsx)(o.p,{children:"Algumas regras relacionadas com o par\xe2metro opcional *:"}),"\n",(0,a.jsxs)(o.p,{children:["- Se a sele\xe7\xe3o contiver apenas um registro e o primeiro par\xe2metro opcional ",(0,a.jsx)(o.em,{children:"*"})," n\xe3o for utilizado, o registro ser\xe1 mostrado no formul\xe1rio de entrada ao inv\xe9s do formul\xe1rio de sa\xedda.",(0,a.jsx)(o.br,{}),"\n- Se o primeiro par\xe2metro opcional ",(0,a.jsx)(o.em,{children:"*"})," for especificado, o registro \xfanico ser\xe1 mostrado no formul\xe1rio de sa\xedda.",(0,a.jsx)(o.br,{}),"\n- Se o primeiro par\xe2metro opcional ",(0,a.jsx)(o.em,{children:"*"})," for especificado e o usu\xe1rio mostrar o registro no formul\xe1rio de entrada fazendo duplo clique sobre ele, as barras de rolagem do formul\xe1rio ser\xe3o ocultadas. Para anular este efeito, passe o segundo par\xe2metro opcional ",(0,a.jsx)(o.em,{children:"*"}),"."]}),"\n",(0,a.jsxs)(o.p,{children:["Pode colocar bot\xf5es personalizados na \xe1rea de cabe\xe7alho ou de rodap\xe9 do formul\xe1rio de sa\xedda para terminar a execu\xe7\xe3o do comando DISPLAY SELECTION. Pode utilizar os bot\xf5es autom\xe1ticos Aceitar ou Cancelar para sair, ou utilizar um m\xe9todo de objeto que chame aos comandos ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/accept",children:"ACCEPT"})," ou ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/cancel",children:"CANCEL"}),". Quando um formul\xe1rio de sa\xedda chamado pelo comando DISPLAY SELECTION n\xe3o tem bot\xf5es, apenas a tecla ",(0,a.jsx)(o.strong,{children:"Escape"})," (Windows) ou ",(0,a.jsx)(o.strong,{children:"Esc"})," (Mac OS) permitem sair da lista."]}),"\n",(0,a.jsx)(o.p,{children:"Durante e depois da execu\xe7\xe3o de DISPLAY SELECTION, os registros que o usu\xe1rio selecionar ser\xe3o conservados em um conjunto chamado UserSet. UserSet est\xe1 dispon\xedvel atrav\xe9s de DISPLAY SELECTION aos m\xe9todos de objeto dos bot\xf5es, aos m\xe9todos chamados pelos comandos de menu, assim como para o m\xe9todo de projeto que chamou DISPLAY SELECTION."}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,a.jsxs)(o.p,{children:["O exemplo a seguir seleciona todos os registros na tabela [Pessoas]. O comando DISPLAY SELECTION mostra os registros e permite ao usu\xe1rio selecionar os registros a imprimir. Finalmente, seleciona os registros com ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/use-set",title:"USE SET",children:"USE SET"}),", e os imprime com ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/print-selection",title:"PRINT SELECTION",children:"PRINT SELECTION"}),":"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0ALL RECORDS([Pessoas])\xa0// Sele\xe7\xe3o de todos os registros\n\xa0DISPLAY SELECTION([Pessoas];*)\xa0// Visualiza\xe7\xe3o dos registros\n\xa0USE SET("UserSet")\xa0// Utilizar apenas os registros selecionados pelo usu\xe1rio\n\xa0PRINT SELECTION([Pessoas])\xa0// Imprimir os registros que o usu\xe1rio selecionou\n'})}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,a.jsxs)(o.p,{children:["Ver o exemplo #6 do comando ",(0,a.jsx)(o.a,{href:"form-event.md",title:"Form event",children:"Form event"}),". Este exemplo mostra todos os testes que pode necessitar para monitorar completamente os eventos que ocorrem durante a execu\xe7\xe3o do comando DISPLAY SELECTION."]}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,a.jsxs)(o.p,{children:["Para reproduzir as funcionalidades oferecidas pelo menu Registros do ambiente Desenho quando utiliza DISPLAY SELECTION ou ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/modify-selection",children:"MODIFY SELECTION"})," em modo Aplica\xe7\xe3o, aja da seguinte maneira:"]}),"\n",(0,a.jsx)(o.p,{children:"a. No ambiente Desenho, crie uma barra de menus com os comandos de menu que desejar, por exemplo, Mostrar todos, Procurar e Ordenar."}),"\n",(0,a.jsxs)(o.p,{children:["b. Associe esta barra de menus (utilizando o menu \u201CBarra de menus associada\u201D na caixa de di\xe1logo de propriedades do formul\xe1rio) com o formul\xe1rio de sa\xedda utilizado com os comandos DISPLAY SELECTION ou ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/modify-selection",children:"MODIFY SELECTION"}),"."]}),"\n",(0,a.jsx)(o.p,{children:"c. Associe os seguintes m\xe9todos de projeto aos seus comandos de menu:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"\xa0\xa0// M_SHOW_ALL (associado ao comando de menu Mostrar todos)\n\xa0$vpCurTabela:=Current form table\n\xa0ALL RECORDS($vpCurTabela->)\n"})}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"\xa0\xa0// M_QUERY (associado ao comando de menu Buscar)\n\xa0$vpCurTabla:=Current form table\n\xa0QUERY($vpCurTable->)\n\xa0\xa0// M_ORDER_BY (associado ao comando de menu Ordenar)\n\xa0$vpCurTabla:=Current form table\n\xa0ORDER BY($vpCurTabela->)\n"})}),"\n",(0,a.jsxs)(o.p,{children:["Tamb\xe9m pode utilizar outros comandos, tais como ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/print-selection",children:"PRINT SELECTION"}),", ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/qr-report",children:"QR REPORT"}),", etc. para oferecer todas as op\xe7\xf5es de menu padr\xe3o que desejar cada vez que visualize ou modifique uma sele\xe7\xe3o no modo Aplica\xe7\xe3o. Gra\xe7as ao comando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/current-form-table",children:"Current form table"})," , estes m\xe9todos s\xe3o gen\xe9ricos, e a barra de menus as quais s\xe3o compat\xedveis podem ser associadas a todo formul\xe1rio de sa\xedda de qualquer tabela."]}),"\n",(0,a.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.em,{children:"Conjuntos"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"form-event-code.md",children:"Form event code"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/commands/modify-selection",children:"MODIFY SELECTION"})]}),"\n",(0,a.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"N\xfamero do comando"}),(0,a.jsx)(o.td,{children:"59"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Thread-seguro"}),(0,a.jsx)(o.td,{children:"\u2717"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Proibido no servidor"}),(0,a.jsx)(o.td,{})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,o,s){s.d(o,{Z:function(){return i},a:function(){return d}});var r=s(667294);let a={},n=r.createContext(a);function d(e){let o=r.useContext(n);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),r.createElement(n.Provider,{value:o},e.children)}}}]);