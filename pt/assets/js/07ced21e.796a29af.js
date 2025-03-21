"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18273"],{88164:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>o,assets:()=>d,toc:()=>l,contentTitle:()=>i});var o=JSON.parse('{"id":"commands-legacy/set-query-destination","title":"SET QUERY DESTINATION","description":"SET QUERY DESTINATION ( tipoDestino {; objetoDestino {; destPonteiro}} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-query-destination.md","sourceDirName":"commands-legacy","slug":"/commands/set-query-destination","permalink":"/docs/pt/20-R7/commands/set-query-destination","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-query-destination.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-query-destination","title":"SET QUERY DESTINATION","slug":"/commands/set-query-destination","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET QUERY AND LOCK","permalink":"/docs/pt/20-R7/commands/set-query-and-lock"},"next":{"title":"SET QUERY LIMIT","permalink":"/docs/pt/20-R7/commands/set-query-limit"}}'),a=s("785893"),r=s("250065");let t={id:"set-query-destination",title:"SET QUERY DESTINATION",slug:"/commands/set-query-destination",displayed_sidebar:"docs"},i=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"SET QUERY DESTINATION"})," ( ",(0,a.jsx)(n.em,{children:"tipoDestino"})," {; ",(0,a.jsx)(n.em,{children:"objetoDestino"})," {; ",(0,a.jsx)(n.em,{children:"destPonteiro"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe2metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"tipoDestino"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"0 - sele\xe7\xe3o atual 1 - conjunto 2 - sele\xe7\xe3o tempor\xe1ria 3 - vari\xe1vel"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"objetoDestino"}),(0,a.jsx)(n.td,{children:"Text, Variable"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Nome do conjunto, ou nome da sele\xe7\xe3o tempor\xe1ria, ou Vari\xe1vel"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"destPointer"}),(0,a.jsx)(n.td,{children:"Pointer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Poneiro a vari\xe1vel local se destina\xe7\xe3o for Tipo=3"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(n.p,{children:["O comando ",(0,a.jsx)(n.strong,{children:"SET QUERY DESTINATION"})," permite indicar a 4D onde colocar o resultado de todas as pesquisas posteriores para o processo atual."]}),"\n",(0,a.jsxs)(n.p,{children:["Especifique o tipo de destino no par\xe2metro ",(0,a.jsx)(n.em,{children:"destinoTipo"}),'. 4D oferece as seguintes constantes pr\xe9-definidas, que s\xe3o encontradas no tema "',(0,a.jsx)(n.em,{children:"Destinos de pesquisa"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Constante"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{children:"Valor"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Into current selection"}),(0,a.jsx)(n.td,{children:"Inteiro longo"}),(0,a.jsx)(n.td,{children:"0"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Into named selection"}),(0,a.jsx)(n.td,{children:"Inteiro longo"}),(0,a.jsx)(n.td,{children:"2"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Into set"}),(0,a.jsx)(n.td,{children:"Inteiro longo"}),(0,a.jsx)(n.td,{children:"1"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Into variable"}),(0,a.jsx)(n.td,{children:"Inteiro longo"}),(0,a.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,a.jsxs)(n.p,{children:["Voc\xea especifica o destino da pesquisa no par\xe2metro opcional ",(0,a.jsx)(n.em,{children:"destinoObjeto"})," de acordo com a tabela a seguir:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Par\xe2metro destinoTipo"})}),(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Par\xe2metro destinoObjeto"})})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"0 (sele\xe7\xe3o atual)"}),(0,a.jsx)(n.td,{children:"Omite o par\xe2metro"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"1 (conjunto)"}),(0,a.jsx)(n.td,{children:"Passa o nome de um conjunto (existente ou a criar)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"2 (sele\xe7\xe3o temporal)"}),(0,a.jsx)(n.td,{children:"Passa o nome da sele\xe7\xe3o tempor\xe1ria (existente ou a criar)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"3 (vari\xe1vel)"}),(0,a.jsx)(n.td,{children:'Passa uma vari\xe1vel num\xe9rica (existente) ou uma string vazia "" para usar o par\xe2metro destinoPtr'})]})]})]}),"\n",(0,a.jsx)(n.p,{children:"* Com:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0SET QUERY DESTINATION(Into current selection)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Os registros encontrados pela pesquisa se colocar\xe3o na sele\xe7\xe3o atual da tabela na qual se efetua a pesquisa."}),"\n",(0,a.jsx)(n.p,{children:"* Com:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0SET QUERY DESTINATION(Into set;"meuConjunto")\n'})}),"\n",(0,a.jsxs)(n.p,{children:['Os registros encontrados pela pesquisa se localizar\xe3o no conjunto "',(0,a.jsx)(n.em,{children:"meuConjunto"}),'". A sele\xe7\xe3o atual e o registro atual da tabela na qual realiza a pesquisa permanecem iguais.']}),"\n",(0,a.jsx)(n.p,{children:"* Com:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0SET QUERY DESTINATION(Into named selection;"minhaSele\xe7\xe3oTempor\xe1ria")\n'})}),"\n",(0,a.jsxs)(n.p,{children:['Os registros encontrados pela pesquisa se localizar\xe3o na sele\xe7\xe3o tempor\xe1ria "',(0,a.jsx)(n.em,{children:"minhaSele\xe7\xe3oTempor\xe1ria"}),'". A sele\xe7\xe3o atual e o registro atual para a tabela na que se realiza a pesquisa permanecem iguais.']}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Se a sele\xe7\xe3o tempor\xe1ria n\xe3o existe de antem\xe3o, se criar\xe1 automaticamente ao final da pesquisa."}),"\n",(0,a.jsxs)(n.li,{children:["Este comando administra as sele\xe7\xf5es tempor\xe1rias como o comando ",(0,a.jsx)(n.a,{href:"/docs/pt/20-R7/commands/cut-named-selection",children:"CUT NAMED SELECTION"}),": s\xf3 s\xe3o conservadas as refer\xeancias. Uma vez se utiliza a sele\xe7\xe3o temporal, j\xe1 n\xe3o existe."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Com:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0SET QUERY DESTINATION(Into variable;$vlResult)\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota"}),": com esta sintaxe, a vari\xe1vel $valorResultado deve ter sido definida, sen\xe3o retorna um erro."]}),"\n",(0,a.jsx)(n.p,{children:"Ou:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0SET QUERY DESTINATION(Into variable;"";->$vlResult)\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota"}),": este segunda sintaxe facilita o uso conjunto do comando com ",(0,a.jsx)(n.a,{href:"/docs/pt/20-R7/commands/get-query-destination",children:"GET QUERY DESTINATION"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["O n\xfamero de registros encontrado pela pesquisa ser\xe1 localizado na vari\xe1vel ",(0,a.jsx)(n.em,{children:"$vlResult"}),". A sele\xe7\xe3o atual e o registro atual para a tabela na que se realiza a pesquisa permanecem iguais."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Advert\xeancia"}),": ",(0,a.jsx)(n.strong,{children:"SET QUERY DESTINATION"})," afeta todas as pesquisas seguintes no processo atual. Lembre sempre de compensar uma chamada a ",(0,a.jsx)(n.strong,{children:"SET QUERY DESTINATION"}),"(onde ",(0,a.jsx)(n.em,{children:"destinoTipe#0"}),") com uma chamada a ",(0,a.jsx)(n.strong,{children:"SET QUERY DESTINATION"}),"(0) para restaurar o modo de pesquisa padr\xe3o."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"SET QUERY DESTINATION"})," muda apenas o comportamento dos comandos de pesquisa, ou seja:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/pt/20-R7/commands/query",children:"QUERY"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/pt/20-R7/commands/query-selection",children:"QUERY SELECTION"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/pt/20-R7/commands/query-by-example",children:"QUERY BY EXAMPLE"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/pt/20-R7/commands/query-by-formula",children:"QUERY BY FORMULA"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/pt/20-R7/commands/query-by-sql",children:"QUERY BY SQL"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/pt/20-R7/commands/query-selection-by-formula",children:"QUERY SELECTION BY FORMULA"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/pt/20-R7/commands/query-selection-with-array",children:"QUERY SELECTION WITH ARRAY"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/pt/20-R7/commands/query-with-array",children:"QUERY WITH ARRAY"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/pt/20-R7/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/pt/20-R7/commands/query-selection-by-attribute",children:"QUERY SELECTION BY ATTRIBUTE"}),"\nPor outro lado, ",(0,a.jsx)(n.strong,{children:"SET QUERY DESTINATION"})," n\xe3o afeta outros comandos que modificam a sele\xe7\xe3o atual da tabela como ",(0,a.jsx)(n.a,{href:"/docs/pt/20-R7/commands/all-records",children:"ALL RECORDS"}),", ",(0,a.jsx)(n.a,{href:"/docs/pt/20-R7/commands/relate-many",children:"RELATE MANY"}),", etc."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,a.jsxs)(n.p,{children:["Se cria um formul\xe1rio que mostra os registros da tabela [",(0,a.jsx)(n.em,{children:"Agenda telef\xf4nica"}),"]. Se cria um objeto de tipo aba chamado ",(0,a.jsx)(n.em,{children:"asRolodex"})," (com uma aba para cada letra do alfabeto) e um sub-formul\xe1rio que mostra os registros da tabela [",(0,a.jsx)(n.em,{children:"Agenda telef\xf4nica"}),"]. Ao escolher uma aba, mostra os registros que correspondem \xe1 letra."]}),"\n",(0,a.jsxs)(n.p,{children:["Em sua aplica\xe7\xe3o, a tabela [",(0,a.jsx)(n.em,{children:"Agenda telef\xf4nica"}),"] cont\xe9m um conjunto de dados est\xe1ticos, de modo a que n\xe3o necessita realizar uma pesquisa cada vez que seleciona uma aba. Dessa maneira, pode economizar tempo precioso ao executar as pesquisas."]}),"\n",(0,a.jsxs)(n.p,{children:["Para fazer isso, pode redirecionar suas pesquisas nas sele\xe7\xf5es tempor\xe1rias para reutiliz\xe1-las quando seja necess\xe1rio. Escreva o m\xe9todo de objeto da aba ",(0,a.jsx)(n.em,{children:"asRolodex"})," como se indica a continua\xe7\xe3o:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de objeto asRolodex\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0// Antes de que o formul\xe1rio apare\xe7a na tela,\n\xa0\xa0// inicializar o rolodex e o array de booleanos que\n\xa0\xa0// nos indica se uma pesquisa para a letra correspondente\n\xa0\xa0// foi realizada ou n\xe3o\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY STRING(1;asRolodex;26)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY BOOLEAN(abQueryDone;26)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlElem;1;26)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0asRolodex{$vlElem}:=Char(64+$vlElem)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0abQueryDone{$vlElem}:=False\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Clicked)\n\xa0\xa0// Quando um usu\xe1rio faz clique na aba, verificar se a pesquisa correspondente\n\xa0\xa0// foi realizada ou n\xe3o\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Not(abQueryDone{asRolodex}))\n\xa0\xa0// Se n\xe3o, redirecionar a pr\xf3xima pesquisa a uma sele\xe7\xe3o temporal\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET QUERY DESTINATION(Into named selection;"temp")\n\xa0\xa0// Efetuar a pesquisa\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Lista telef\xf4nica];[Lista telef\xf4nica]Last name=asRolodex{asRolodex}+"@")\n\xa0\xa0// Restaurar o modo de busca estandarte\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET QUERY DESTINATION(Into current selection)\n\xa0\xa0// Utilizar os registros encontrados\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0USE NAMED SELECTION("temp")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0COPY NAMED SELECTION([Phone book];"Rolodex+asRolodex{asRolodex})\n\xa0\xa0// A pr\xf3xima vez que selecionemos esta letra, n\xe3o realizaremos a pesquisa novamente\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0abQueryDone{asRolodex}:=True\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// Utilize a sele\xe7\xe3o temporal existente para mostrar os registros correspondentes \xe0 letra selecionada\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0USE NAMED SELECTION("Rolodex"+asRolodex{asRolodex}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Unload)\n\xa0\xa0// Logo o formul\xe1rio desaparece da tela\n\xa0\xa0// Apagar as sele\xe7\xf5es temporais\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlElem;1;26)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(abQueryDone{$vlElem})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR NAMED SELECTION("Rolodex"+asRolodex{$vlElem})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0// Apagar os dois arrays que j\xe1 n\xe3o necessitamos\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR VARIABLE(asRolodex)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR VARIABLE(abQueryDone)\n\xa0End case\n'})}),"\n",(0,a.jsx)(n.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,a.jsx)(n.p,{children:"O m\xe9todo de projeto Valores Unicos neste exemplo lhe permite verificar se os valores s\xe3o \xfanicos para os campos em uma tabela. O registro atual pode ser um registro existente ou um registro novo."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo de projeto Valores Unicos\n\xa0\xa0// Valores Unicos ( Ponteiro ; Ponteiro { ; Ponteiro... } ) -> Booleano\n\xa0\xa0// Valores Unicos ( ->Tabela ; ->Campo { ; ->Campo2... } ) -> Yes ou No\n\xa0\n\xa0var $0 : Boolean\n\xa0var ${1} : Pointer\n\xa0var $vlCampo;$vlNbCampos;$vlEncontrado;$vlRegistroAtual : Integer\n\xa0$vlNbCampos:=Count parameters-1\n\xa0$vlRegistroAtual:=Record number($1->)\n\xa0If($vlNbCampos>0)\n\xa0\xa0\xa0\xa0If($vlRegistroAtual#-1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlRegistroAtual<0)\n\xa0\xa0// O registro atual \xe9 um novo registro que n\xe3o foi guardado (n\xfamero de registro -3);\n\xa0\xa0// portanto podemos deter a pesquisa logo que se encontre pelo menos um registro\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET QUERY LIMIT(1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// O registro atual \xe9 um registro existente;\n\xa0\xa0// portanto podemos deter a pesquisa logo que se encontrem pelo menos dois registros.\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET QUERY LIMIT(2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0// A pesquisa devolver\xe1 seu resultado em $vlFound\n\xa0\xa0// sem mudar o registro atual nem a sele\xe7\xe3o atual\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET QUERY DESTINATION(Into variable;$vlFound)\n\xa0\xa0// Construir a pesquisa de acordo ao n\xfamero de campos especificados\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlNbCampos=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY($1->;$2->=$2->)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlNbCampos=2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY($1->;$2->=$2->;*)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY($1->;&;$3->=$3->)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY($1->;$2->=$2->;*)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlCampo;2;$vlNbCampos-1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY($1->;&;${1+$vlCampo}->=${1+$vlCampo}->;*)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY($1->;&;${1+$vlNbCampos}->=${1+$vlNbCampos}->)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET QUERY DESTINATION(Into current selection)\xa0// Restaurar o modo de pesquisa padr\xe3o\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET QUERY LIMIT(0)\xa0// N\xe3o h\xe1 limites de pesquisas\n\xa0\xa0// Processar o resultado da pesquisa\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlEncontrado=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=True\xa0// N\xe3o h\xe1 valores duplicados\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlEncontrado=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlRegistroAtual<0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=False\xa0// Um registro existente foi encontrado com os mesmos valores que o novo registro\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=True\xa0// N\xe3o h\xe1 valores duplicados, encontramos o mesmo registro\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlEncontrado=2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=False\xa0// Qualquer que seja o caso, os valores est\xe3o duplicados\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(\u25CADebugOn)\xa0// N\xe3o tem sentido; assinale-o durante a vers\xe3o de desenvolvimento\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0TRACE\xa0// ATEN\xc7\xc3O! Este m\xe9todo \xe9 chamado sem registro atual\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=False\xa0// N\xe3o \xe9 poss\xedvel garantir o resultado\n\xa0\xa0\xa0\xa0End if\n\xa0Else\n\xa0\xa0\xa0\xa0If(\u25CADebugOn)\xa0// N\xe3o faz sentido; assinale-o se a vers\xe3o de desenvolvimento\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0TRACE\xa0// ATEN\xc7\xc3O! Este m\xe9todo \xe9 chamado sem condi\xe7\xe3o de pesquisa\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0$0:=False\xa0// N\xe3o posso garantir o resultado\n\xa0End if\n"})}),"\n",(0,a.jsx)(n.p,{children:"Depois de implementar este m\xe9todo de projeto em sua aplica\xe7\xe3o, pode escrever:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// ...\n\xa0If(ValoresUnicos(->[Contatos];->[Contatos]Empresa;->[Contatos]Sobrenome;->[Contatos]Nome))\n\xa0\xa0// Realize a\xe7\xf5es apropriadas para o registro que tenha valores \xfanicos\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("J\xe1 existe um contato com este nome para esta empresa.")\n\xa0End if\n\xa0\xa0// ...\n'})}),"\n",(0,a.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/pt/20-R7/commands/get-query-destination",children:"GET QUERY DESTINATION"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/pt/20-R7/commands/query",children:"QUERY"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/pt/20-R7/commands/query-by-example",children:"QUERY BY EXAMPLE"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/pt/20-R7/commands/query-by-formula",children:"QUERY BY FORMULA"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/pt/20-R7/commands/query-by-sql",children:"QUERY BY SQL"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/pt/20-R7/commands/query-selection",children:"QUERY SELECTION"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/pt/20-R7/commands/query-selection-by-formula",children:"QUERY SELECTION BY FORMULA"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/pt/20-R7/commands/query-with-array",children:"QUERY WITH ARRAY"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/pt/20-R7/commands/set-query-limit",children:"SET QUERY LIMIT"})]}),"\n",(0,a.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero do comando"}),(0,a.jsx)(n.td,{children:"396"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread-seguro"}),(0,a.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return t}});var o=s(667294);let a={},r=o.createContext(a);function t(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);