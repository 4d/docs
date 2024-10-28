"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[72638],{407161:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>d,metadata:()=>l,toc:()=>m});var r=a(474848),n=a(28453);const d={id:"order-by",title:"ORDER BY",slug:"/commands/order-by",displayed_sidebar:"docs"},s=void 0,l={id:"commands-legacy/order-by",title:"ORDER BY",description:"ORDER BY ( {tabela ;}{ campo }{; >\xa0ou\xa0\xa0ou\xa0\xa0ou\xa0<N}{; *} )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/order-by.md",sourceDirName:"commands-legacy",slug:"/commands/order-by",permalink:"/docs/pt/commands/order-by",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Forder-by.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"order-by",title:"ORDER BY",slug:"/commands/order-by",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Last query plan",permalink:"/docs/pt/commands/last-query-plan"},next:{title:"ORDER BY ATTRIBUTE",permalink:"/docs/pt/commands/order-by-attribute"}},i={},m=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Exemplo 4",id:"exemplo-4",level:4},{value:"Exemplo 5",id:"exemplo-5",level:4},{value:"Exemplo 6",id:"exemplo-6",level:4},{value:"Exemplo 7",id:"exemplo-7",level:4},{value:"Exemplo 8",id:"exemplo-8",level:4},{value:"Exemplo 9",id:"exemplo-9",level:4},{value:"Exemplo 10",id:"exemplo-10",level:4},{value:"Exemplo 11",id:"exemplo-11",level:4},{value:"Exemplo 12",id:"exemplo-12",level:4},{value:"Exemplo 13",id:"exemplo-13",level:4},{value:"Exemplo 14",id:"exemplo-14",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function t(e){const o={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"ORDER BY"})," ( {",(0,r.jsx)(o.em,{children:"tabela"})," ;}{ ",(0,r.jsx)(o.em,{children:"campo"})," }{; >\xa0ou\xa0< }{; ",(0,r.jsx)(o.em,{children:"campo2"})," ; >\xa0ou\xa0<2 ; ... ; ",(0,r.jsx)(o.em,{children:"campoN"})," ; >\xa0ou\xa0<N}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Par\xe2metro"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"tabela"}),(0,r.jsx)(o.td,{children:"Table"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Tabela na qual vai ordenar os registros selecionados, ou tabela Padr\xe3o, se omitido"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"campo"}),(0,r.jsx)(o.td,{children:"Field"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Campo no qual estabelecer a ordem para cada n\xedvel"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:">\xa0ou\xa0<"}),(0,r.jsx)(o.td,{children:"Operador"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Dire\xe7\xe3o da ordem para cada n\xedvel: > para ordenar em ordem ascendente, ou < para ordenar em ordem descendente"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"*"}),(0,r.jsx)(o.td,{children:"Operador"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Continuar a bandeira de ordem"})]})]})]}),"\n",(0,r.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"ORDER BY"})," ordena (reordena) os registros da sele\xe7\xe3o atual de ",(0,r.jsx)(o.em,{children:"tabela"})," para o processo atual. Quando tiver realizada a ordena\xe7\xe3o, o primeiro registro da nova sele\xe7\xe3o atual se converte no registro atual."]}),"\n",(0,r.jsxs)(o.p,{children:["Se omitir o par\xe2metro ",(0,r.jsx)(o.em,{children:"tabela"}),", o comando se aplica \xe0 tabela por padr\xe3o, se tiver definido uma tabela por padr\xe3o. Se n\xe3o, 4D utiliza a tabela do primeiro campo passado como par\xe2metro. Se n\xe3o passa um par\xe2metro e se n\xe3o foi definido uma tabela por padr\xe3o, \xe9 devolvido um erro."]}),"\n",(0,r.jsxs)(o.p,{children:["Se n\xe3o especifica o par\xe2metro ",(0,r.jsx)(o.em,{children:"campo"}),", nem os par\xe2metros ",(0,r.jsx)(o.em,{children:">"})," ou ",(0,r.jsx)(o.em,{children:"<"})," ou ",(0,r.jsx)(o.em,{children:"*"}),", ",(0,r.jsx)(o.strong,{children:"ORDER BY"})," mostra a caixa de di\xe1logo Ordenar de 4D para ",(0,r.jsx)(o.em,{children:"tabela"}),". Esta \xe9 a caixa de di\xe1logo do editor:"]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{src:a(495165).A+"",width:"577",height:"353"})}),"\n",(0,r.jsx)(o.p,{children:"Para maior informa\xe7\xe3o sobre a utiliza\xe7\xe3o do editor de ordena\xe7\xe3o, consulte o Manual de desenho de 4D."}),"\n",(0,r.jsxs)(o.p,{children:["Se especificar os par\xe2metros ",(0,r.jsx)(o.em,{children:"Campo"})," e ",(0,r.jsx)(o.em,{children:"> ou <"}),",a caixa de di\xe1logo padr\xe3o de Ordenar n\xe3o \xe9 mostrada e a ordena\xe7\xe3o se define por programa\xe7\xe3o. Pode ordenar a sele\xe7\xe3o em um n\xedvel ou em v\xe1rios n\xedveis. Para cada n\xedvel de clasifica\xe7\xe3o, um campo \xe9 especificado em ",(0,r.jsx)(o.em,{children:"Campo"})," e a ordem de clasifica\xe7\xe3o em ",(0,r.jsx)(o.em,{children:"> ou <"}),'. Se passar o s\xedmbolo "maior que" (>), a ordem \xe9 ascendente. Se passar o s\xedmbolo "menor que" (<), a ordem \xe9 descendente.']}),"\n",(0,r.jsxs)(o.p,{children:["Se omitir o par\xe2metro de ordena\xe7\xe3o ",(0,r.jsx)(o.em,{children:"> ou <"}),", a ordem \xe9 ascendente por padr\xe3o."]}),"\n",(0,r.jsxs)(o.p,{children:["Se s\xf3 for especificado um campo (ordena\xe7\xe3o de um n\xedvel) e for indexado, \xe9 utilizado o \xedndice para a ordem. Se o campo n\xe3o estiver indexado ou se houver mais de um campo, a ordem \xe9 executada sequ\xeancialmente (exceto no caso de \xedndices compostos). O campo pode pertencer a tabela da sele\xe7\xe3o que estiver sendo reordenada ou a uma tabela 1 relacionada com ",(0,r.jsx)(o.em,{children:"tabela"})," por uma rela\xe7\xe3o autom\xe1tica ou manual. Neste caso, a ordem \xe9 sempre sequ\xeancial."]}),"\n",(0,r.jsxs)(o.p,{children:["Se os campos ordenados estiverem inclu\xeddos em um \xedndice composto, ",(0,r.jsx)(o.strong,{children:"ORDER BY"})," utiliza o \xedndice para a ordem."]}),"\n",(0,r.jsxs)(o.p,{children:["Para ordena\xe7\xf5es m\xfaltiplas (ordenar em v\xe1rios campos), pode chamar",(0,r.jsx)(o.strong,{children:"ORDER BY"})," tantas vezes quantas seja necess\xe1rias e especificar o par\xe2metro opcional ",(0,r.jsx)(o.em,{children:"*"}),", exceto para a \xfaltima chamada ",(0,r.jsx)(o.strong,{children:"ORDER BY"}),", que inicia a opera\xe7\xe3o de ordena\xe7\xe3o real. Esta funcionalidade \xe9 \xfatil para a gest\xe3o de ordena\xe7\xf5es multi-crit\xe9rios em interfaces de usu\xe1rio personalizadas.",(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.strong,{children:"Aten\xe7\xe3o"})," com esta sintaxe, s\xf3 pode passar um n\xedvel de ordena\xe7\xe3o (campo) por linha de instru\xe7\xe3o."]}),"\n",(0,r.jsxs)(o.p,{children:["N\xe3o importa como tenha definido uma ordena\xe7\xe3o, se a opera\xe7\xe3o de ordena\xe7\xe3o real for tomar algum tempo para ser realizada, 4D mostra automaticamente uma mensagem que cont\xe9m um term\xf4metro de progresso. Estas mensagens podem ser ativadas e desativadas utilizando os comandos ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/messages-on",children:"MESSAGES ON"})," e ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/messages-off",children:"MESSAGES OFF"}),". Se for mostrado o term\xf4metro de progresso, o usu\xe1rio pode clicar no bot\xe3o Deter para interromper a ordena\xe7\xe3o."]}),"\n",(0,r.jsxs)(o.p,{children:["Se a ordena\xe7\xe3o for realizada corretamente, a vari\xe1vel OK assume o valor ",(0,r.jsx)(o.em,{children:"1"}),". Se o usu\xe1rio clicar em Cancelar, ORDER BY termina sem efetuar a ordena\xe7\xe3o, e a vari\xe1vel OK assume o valor ",(0,r.jsx)(o.em,{children:"0"})," (zero)."]}),"\n",(0,r.jsx)(o.h5,{id:""}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota:"})," Este comando n\xe3o \xe9 compat\xedvel com campos tipo Objeto"]}),"\n",(0,r.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,r.jsx)(o.p,{children:"O exemplo a seguir mostra a caixa de di\xe1logo Ordenar para a tabela [Produtos]:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"\xa0ORDER BY([Produtos])\n"})}),"\n",(0,r.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,r.jsx)(o.p,{children:"O exemplo a seguir mostra a caixa de di\xe1logo Ordenar para a tabela padr\xe3o (se tiver sido definida):"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"\xa0ORDER BY\n"})}),"\n",(0,r.jsx)(o.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,r.jsx)(o.p,{children:"O exemplo a seguir ordena a sele\xe7\xe3o atual de [Produtos] por nome em ordem ascendente:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"\xa0ORDER BY([Produtos];[Produtos]Nome;>)\n"})}),"\n",(0,r.jsx)(o.h4,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,r.jsx)(o.p,{children:"O exemplo ordena a sele\xe7\xe3o atual de [Produtos] por nome em ordem descendente:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"\xa0ORDER BY([Produtos];[Produtos]Nome;<)\n"})}),"\n",(0,r.jsx)(o.h4,{id:"exemplo-5",children:"Exemplo 5"}),"\n",(0,r.jsx)(o.p,{children:"A linha seguinte ordena a sele\xe7\xe3o de [Produtos] por tipo e pre\xe7o em ordem ascendente para ambos os n\xedveis:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"\xa0ORDER BY([Produtos];[Produtos]Tipo;>;[Produtos]Pre\xe7o;>)\n"})}),"\n",(0,r.jsx)(o.h4,{id:"exemplo-6",children:"Exemplo 6"}),"\n",(0,r.jsx)(o.p,{children:"O exemplo ordena a sele\xe7\xe3o atual de [Produtos] por tipo e pre\xe7o em ordem descendente para ambos n\xedveis:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"\xa0ORDER BY([Produtos];[Produtos]Tipo;<;[Produtos]Pre\xe7o;<)\n"})}),"\n",(0,r.jsx)(o.h4,{id:"exemplo-7",children:"Exemplo 7"}),"\n",(0,r.jsx)(o.p,{children:"O exemplo a seguir ordena a sele\xe7\xe3o atual de [Produtos] por tipo em ordem ascendente e por pre\xe7o em ordem descendente:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"\xa0ORDER BY([Produtos];[Produtos]Tipo;>;[Produtos]Pre\xe7o;<)\n"})}),"\n",(0,r.jsx)(o.h4,{id:"exemplo-8",children:"Exemplo 8"}),"\n",(0,r.jsx)(o.p,{children:"O exemplo a seguir ordena a sele\xe7\xe3o atual de [Produtos] por tipo em ordem descendente e por pre\xe7o em ordem ascendente:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"\xa0ORDER BY([Produtos];[Produtos]Tipo;<;[Produtos]Pre\xe7o;>)\n"})}),"\n",(0,r.jsx)(o.h4,{id:"exemplo-9",children:"Exemplo 9"}),"\n",(0,r.jsx)(o.p,{children:"O exemplo a seguir realiza uma ordena\xe7\xe3o indexada se o campo [Produtos]Nome est\xe1 indexado:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"\xa0ORDER BY([Produtos];[Produtos]Nome;>)\n"})}),"\n",(0,r.jsx)(o.h4,{id:"exemplo-10",children:"Exemplo 10"}),"\n",(0,r.jsx)(o.p,{children:"O exemplo a seguir ordena a sele\xe7\xe3o atual de [Produtos] por nome em ordem ascendente:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"\xa0ORDER BY([Produtos];[Produtos]Nome)\n"})}),"\n",(0,r.jsx)(o.h4,{id:"exemplo-11",children:"Exemplo 11"}),"\n",(0,r.jsx)(o.p,{children:"O exemplo a seguir realiza uma ordena\xe7\xe3o sequ\xeancial, sem importar se os campos est\xe3o indexados:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"\xa0ORDER BY([Produtos];[Produtos]Tipo;>;[Produtos]Pre\xe7o;>)\n"})}),"\n",(0,r.jsx)(o.h4,{id:"exemplo-12",children:"Exemplo 12"}),"\n",(0,r.jsx)(o.p,{children:"O exemplo a seguir realiza uma ordena\xe7\xe3o sequ\xeancial utilizando um campo relacionado:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"\xa0SET FIELD RELATION([Employee]Company_ID;Automatic;Do not modify)\n\xa0ORDER BY([Employee];[Company]LastName)\n\xa0SET FIELD RELATION([Employee]Company_ID;Structure configuration;Do not modify)\n"})}),"\n",(0,r.jsx)(o.h4,{id:"exemplo-13",children:"Exemplo 13"}),"\n",(0,r.jsx)(o.p,{children:"O exemplo a seguir realiza uma ordena\xe7\xe3o indexada em dois n\xedveis se um \xedndice composto for especificado no banco [Contatos]Sobrenomes + [Contatos]Nome:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"\xa0ORDER BY([Contatos];[Contatos]Sobrenome;>;[Contatos]Nome;>)\n"})}),"\n",(0,r.jsx)(o.h4,{id:"exemplo-14",children:"Exemplo 14"}),"\n",(0,r.jsxs)(o.p,{children:["Em um formul\xe1rio de sa\xedda mostrado em modo Aplica\xe7\xe3o, voc\xea lhe permite aos usu\xe1rios ordenar uma coluna em ordem crescente simplesmente clicando no cabe\xe7alho da coluna. Se o usu\xe1rio mant\xe9m pressionada a tecla ",(0,r.jsx)(o.strong,{children:"Shift"})," enquanto clica em outros cabe\xe7alhos de colunas, a ordena\xe7\xe3o \xe9 realizada em v\xe1rios n\xedveis:"]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{src:a(996926).A+"",width:"744",height:"457"})}),"\n",(0,r.jsx)(o.p,{children:"Cada cabe\xe7alho de coluna cont\xe9m um bot\xe3o ressaltado associado com o seguinte m\xe9todo de objeto:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"\xa0MULTINIVEL(->[CDs]Titulo)\xa0//Bot\xe3o do cabe\xe7alho da coluna t\xedtulo\n"})}),"\n",(0,r.jsx)(o.p,{children:"Cada bot\xe3o chama ao m\xe9todo de projeto MULTINIVEL passando um ponteiro ao campo da coluna correspondente. O m\xe9todo de projeto MULTINIVEL \xe9 o seguinte:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo de projeto MULTINIVEL\n\xa0\xa0// MULTINIVEL(Ponteiro)\n\xa0\xa0// MULTINIVEL(->[Tabela]Campo)\n\xa0\n\xa0var $1)\xa0\xa0\xa0//N\xedvel de ordena\xe7\xe3o (campo : Pointer\n\xa0var $lNivelNb : Integer\n\xa0\n\xa0\xa0//Constru\xe7\xe3o de crit\xe9rios\n\xa0If(Not(Shift down))&NBSP;&NBSP;\xa0//Ordena\xe7\xe3o simples (um n\xedvel)\n\xa0\xa0\xa0\xa0ARRAY POINTER(aPtrCampoOrdem;1)\n\xa0\xa0\xa0\xa0aPtrCampoOrdem{1}:=$1\n\xa0Else\n\xa0\xa0\xa0\xa0$lNivelNb:=Find in array(aPtrCampoOrdem;$1)&NBSP;&NBSP;\xa0//J\xe1 est\xe1 ordenado este campo?\n\xa0\xa0\xa0\xa0If($lNivelNb<0)&NBSP;&NBSP;\xa0//Sim n\xe3o\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0INSERT IN ARRAY(aPtrCampoOrdem;Size of array(aPtrCampoOrdem)+1;1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0aPtrCampoOrdem{Size of array(aPtrCampoOrdem)}:=$1\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n\xa0\xa0//Execu\xe7\xe3o da ordena\xe7\xe3o\n\xa0$lNivelNb:=Size of array(aPtrCampoOrdem)\n\xa0If($lNivelNb>0)&NBSP;&NBSP;\xa0//H\xe1 pelo menos um n\xedvel de ordena\xe7\xe3o\n\xa0\xa0\xa0\xa0For($i;1;$lNivelNb)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ORDER BY([CDs];(aPtrCampoOrdem{$i})->;>;*)&NBSP;&NBSP;\xa0//Construir a ordena\xe7\xe3o\n\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0ORDER BY([CDs])&NBSP;&NBSP;\xa0//SE n\xe3o houver * termina a defini\xe7\xe3o da ordena\xe7\xe3o e come\xe7a a opera\xe7\xe3o de ordena\xe7\xe3o atual.\n\xa0End if\n"})}),"\n",(0,r.jsxs)(o.p,{children:["Sem importar como se defina a ordena\xe7\xe3o, se a opera\xe7\xe3o de ordena\xe7\xe3o vai a tomar algum tempo, 4D mostra automaticamente uma mensagem que contenha um term\xf4metro de progress\xe3o. Estas mensagens podem ser ativadas e desativadas utilizando os comandos ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/messages-on",title:"MESSAGES ON",children:"MESSAGES ON"})," e ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/messages-off",title:"MESSAGES OFF",children:"MESSAGES OFF"}),". Se for mostrado o term\xf4metro de progresso, o usu\xe1rio pode clicar no bot\xe3o Deter para interromper a ordena\xe7\xe3o. Se a ordena\xe7\xe3o \xe9 terminada corretamente, OK toma o valor 1. Do contr\xe1rio, se a ordena\xe7\xe3o for interrompida, OK toma o valor 0 (zero)."]}),"\n",(0,r.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.a,{href:"/docs/pt/commands/order-by-formula",children:"ORDER BY FORMULA"})})]})}function c(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},996926:(e,o,a)=>{a.d(o,{A:()=>r});const r=a.p+"assets/images/pict16003.es-07bbf38f5cb2b0deb29271469052187b.png"},495165:(e,o,a)=>{a.d(o,{A:()=>r});const r=a.p+"assets/images/pict2286854.pt-caf536cc8d949f87e346a9242218fd92.png"},28453:(e,o,a)=>{a.d(o,{R:()=>s,x:()=>l});var r=a(296540);const n={},d=r.createContext(n);function s(e){const o=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(d.Provider,{value:o},e.children)}}}]);