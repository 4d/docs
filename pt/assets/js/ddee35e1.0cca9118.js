"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["93539"],{240347:function(e,o,s){s.r(o),s.d(o,{default:()=>c,frontMatter:()=>i,metadata:()=>a,assets:()=>d,toc:()=>m,contentTitle:()=>t});var a=JSON.parse('{"id":"commands-legacy/semaphore","title":"Semaphore","description":"Semaphore ( semaforo {; tickCount} ) : Boolean","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/semaphore.md","sourceDirName":"commands-legacy","slug":"/commands/semaphore","permalink":"/docs/pt/commands/semaphore","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsemaphore.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"semaphore","title":"Semaphore","slug":"/commands/semaphore","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"New signal","permalink":"/docs/pt/commands/new-signal"},"next":{"title":"SET PROCESS VARIABLE","permalink":"/docs/pt/commands/set-process-variable"}}'),r=s("785893"),n=s("250065");let i={id:"semaphore",title:"Semaphore",slug:"/commands/semaphore",displayed_sidebar:"docs"},t=void 0,d={},m=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Exemplo 3",id:"exemplo-3",level:2},{value:"Exemplo 4",id:"exemplo-4",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Semaphore"})," ( ",(0,r.jsx)(o.em,{children:"semaforo"})," {; ",(0,r.jsx)(o.em,{children:"tickCount"}),"} ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Par\xe2metro"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"semaforo"}),(0,r.jsx)(o.td,{children:"Text"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Sem\xe1foro a testar e estabelecer"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"tickCount"}),(0,r.jsx)(o.td,{children:"Integer"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"M\xe1ximo tempo de espera"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Resultado"}),(0,r.jsx)(o.td,{children:"Boolean"}),(0,r.jsx)(o.td,{children:"\u2190"}),(0,r.jsx)(o.td,{children:"O sem\xe1foro foi criado corretamente (FALSE) ou O sem\xe1foro j\xe1 tinha sido criado (TRUE)"})]})]})]}),"\n",(0,r.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsx)(o.p,{children:"Um sem\xe1foro \xe9 uma bandeira compartihada entre esta\xe7\xf5es de trabalho (o computador de cada usu\xe1rio) ou entre processos na mesma esta\xe7\xe3o de trabalho. Um sem\xe1foro simplesmente existe ou n\xe3o existe. Os m\xe9todos que cada usu\xe1rio executa podem provar a exist\xeancia de um sem\xe1foro. Criando e provando sem\xe1foros, os m\xe9todos podem ser comunicados entre esta\xe7\xf5es de trabalho."}),"\n",(0,r.jsxs)(o.p,{children:["A fun\xe7\xe3o ",(0,r.jsx)(o.strong,{children:"Semaphore"})," devolve TRUE e n\xe3o faz nada se o ",(0,r.jsx)(o.em,{children:"semaforo"})," existe. Se n\xe3o existe o sem\xe1foro, Semaphore o cria e devolve FALSE. S\xf3 um usu\xe1rio ao tempo pode criar um sem\xe1foro. Se ",(0,r.jsx)(o.em,{children:"semaforo"})," devolve FALSE, isto significa que o sem\xe1foro n\xe3o existe, mas tamb\xe9m significa que o sem\xe1foro foi criado para o processo no qual a chamada for realizada."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Semaphore"})," devolve FALSE se o sem\xe1foro n\xe3o foi definido. Tamb\xe9m devolve FALSE se o sem\xe1foro j\xe1 foi definido pelo mesmo processo no qual a chamada tenha sido realizada. Um sem\xe1foro est\xe1 limitado a 255 caracteres, incluindo prefixos (<>, $). Se passa uma cadeia mais longa, o sem\xe1foro ser\xe1 provado com a cadeia truncada."]}),"\n",(0,r.jsx)(o.p,{children:'Lembre que os nomes dos sem\xe1foros s\xe3o sens\xedveis as mai\xfasculas e min\xfasculas em 4D (por exemplo, o programa considera que "MySemaphore" \xe9 diferente de "mysemaphore"'}),"\n",(0,r.jsxs)(o.p,{children:["O par\xe2metro opcional ",(0,r.jsx)(o.em,{children:"tickCount"})," lhe permite especificar um tempo de espera (em ticks) se ",(0,r.jsx)(o.em,{children:"semaforo"})," j\xe1 est\xe1 definido. Neste caso, a fun\xe7\xe3o esperar\xe1 o que o sem\xe1foro seja liberado ou o tempo de espera para terminar antes de devolver ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/true",title:"True",children:"True"}),"."]}),"\n",(0,r.jsx)(o.p,{children:"H\xe1 dois tipos de sem\xe1foros em 4D: sem\xe1foros locais e sem\xe1foros globais."}),"\n",(0,r.jsxs)(o.p,{children:["\u2022 Um sem\xe1foro local \xe9 vis\xedvel para todos os processos de uma mesma esta\xe7\xe3o de trabalho e somente na esta\xe7\xe3o de trabalho. Um sem\xe1foro local pode ser criado colocando ao nome do sem\xe1foro o signo d\xf3lar ($) como prefixo. Os sem\xe1foros locais se utilizam para monitorar opera\xe7\xf5es entre os diferentes processos executados na mesma esta\xe7\xe3o de trabalho. Por exemplo, um sem\xe1foro local pode ser utilizado para monitorar o acesso a um array interprocesso compartilhado por todos os processos em um banco mono usu\xe1rio ou na esta\xe7\xe3o de trabalho.",(0,r.jsx)(o.br,{}),"\n\u2022 Um sem\xe1foro global \xe9 vis\xedvel para todos os usu\xe1rios e todos seus processos. Os sem\xe1foros globais s\xe3o utilizados para monitorar opera\xe7\xf5es entre usu\xe1rios de uma base multi-usu\xe1rio."]}),"\n",(0,r.jsx)(o.p,{children:"Os sem\xe1foros globais e locais s\xe3o id\xeanticos em sua l\xf3gica."}),"\n",(0,r.jsx)(o.p,{children:"A diferen\xe7a reside em seu alcance. Em 4D Server, os sem\xe1foros globais s\xe3o compartilhados entre todos os processos executados de todos os clientes. Um sem\xe1foro local s\xf3 se comparte entre os processos executados na m\xe1quina cliente onde for criada. Em 4D , os sem\xe1foros globais e locais tem o mesmo alcance porque voc\xea \xe9 o \xfanico usu\xe1rio."}),"\n",(0,r.jsx)(o.p,{children:"Recomendamos usar sem\xe1foros locais quando precisar de um sem\xe1foro para gerenciar um aspecto local para um cliente da aplica\xe7\xe3o, tais como a interface ou um array de vari\xe1veis interprocesso. Se usar um sem\xe1foro global nesse caso, n\xe3o apenas causaria trocas de network desnecess\xe1rias, como poderia afetar outras m\xe1quinas clientes desnecessariamente. Usando um sem\xe1foro local evitaria esses efeitos colaterais indesejados."}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota"}),": os sem\xe1foros locais se recomendam quando o uso de um sem\xe1foro for necess\xe1rio para manejar um aspecto local para um cliente da aplica\xe7\xe3o, tal como a interface ou um array de valores interprocesso. O uso de um sem\xe1foro global provocar\xe1 neste caso, n\xe3o s\xf3 interc\xe2mbios de rede desnecess\xe1rios, mas tamb\xe9m pode afetar outras m\xe1quinas cliente. O uso de um sem\xe1foro local evitar\xe1 estes efeitos indesej\xe1veis."]}),"\n",(0,r.jsx)(o.p,{children:"Os sem\xe1foros n\xe3o s\xe3o utilizados para proteger o acesso aos registros. Esta gest\xe3o \xe9 realizada automaticamente 4D e 4D Server. Utilize sem\xe1foros para evitar que v\xe1rios usu\xe1rios realizem a mesma opera\xe7\xe3o ao mesmo tempo."}),"\n",(0,r.jsx)(o.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,r.jsx)(o.p,{children:"Abaixo um c\xf3digo t\xedpico para usar um sem\xe1foro:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0While(Semaphore("MySemaphore";300))\n\xa0\xa0\xa0\xa0IDLE\n\xa0End while\n\xa0\xa0// coloque o c\xf3digo protegido por sem\xe1foro aqui\n\xa0CLEAR SEMAPHORE("MySemaphore")\n'})}),"\n",(0,r.jsx)(o.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,r.jsx)(o.p,{children:"Neste exemplo, voc\xea quer evitar que dois usu\xe1rios realizem simult\xe2neamente uma atualiza\xe7\xe3o global dos pre\xe7os em uma tabela Produtos. O seguinte m\xe9todo utiliza sem\xe1foros para fazer isto:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0If(Semaphore("AtualizacaoPre\xe7os"))\xa0// tente criar o sem\xe1foro\n\xa0\xa0\xa0\xa0ALERT("Outro usu\xe1rio j\xe1 est\xe1 atualizando os pre\xe7os. Tente mais tarde.")\n\xa0Else\n\xa0\xa0\xa0\xa0AtualizarPre\xe7os\xa0// Atualiza\xe7\xe3o de todos os pre\xe7os\n\xa0\xa0\xa0\xa0CLEAR SEMAPHORE("Atualiza\xe7\xe3oPre\xe7os")\xa0// Apagar o sem\xe1foro\n\xa0End if\n'})}),"\n",(0,r.jsx)(o.h2,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,r.jsx)(o.p,{children:'O exemplo a seguir utiliza um sem\xe1foro local. Em um banco de dados com v\xe1rios processos, voc\xea pode querer manter uma lista de "Coisas a fazer". Voc\xea deseja manter a lista em um array interprocesso e n\xe3o em uma tabela. Voc\xea utiliza um sem\xe1foro para evitar o acesso simult\xe2neo. Nesta situa\xe7\xe3o, s\xf3 necessita utilizar um sem\xe1foro local, porque sua lista "Coisas a fazer" serve apenas para seu uso pessoal.'}),"\n",(0,r.jsx)(o.p,{children:"O array interprocesso se inicializa no m\xe9todo Startup:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"\xa0ARRAY TEXT(\u25CAListaFazer;0)\xa0// A lista de coisas a fazer est\xe1 inicialmente vazia\n"})}),"\n",(0,r.jsx)(o.p,{children:"Este \xe9 o m\xe9todo utilizado para adicionar elementos \xe0 lista de coisas por fazer:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de projeto AGREGAR A LISTA DE COISAS A FAZER\n\xa0\xa0// AGREGAR A LISTA DE COISAS A FAZER ( Texto )\n\xa0\xa0// AGREGAR A LISTA DE COISAS A FAZER ( Elemento da lista de coisas a fazer)\n\xa0var $1 : Text\n\xa0If(Not(Semaphore("$AcessoLista";300)))\n\xa0\xa0// Espera 5 segundos se o sem\xe1foro j\xe1 existe\n\xa0\xa0\xa0\xa0$vlElem:=Size of array(\u25CAListaFazer)+1\n\xa0\xa0\xa0\xa0INSERT IN ARRAY(\u25CAListaFazer;$vlElem)\n\xa0\xa0\xa0\xa0\u25CAListaFazer{$vlElem}:=$1\n\xa0\xa0\xa0\xa0CLEAR SEMAPHORE("$AcessoLista")\xa0// Apagar o sem\xe1foro\n\xa0End if\n'})}),"\n",(0,r.jsx)(o.p,{children:"Pode chamar este m\xe9todo desde qualquer processo."}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.em,{children:"Close"})}),"\n",(0,r.jsx)(o.h2,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,r.jsx)(o.p,{children:"Este m\xe9todo permite n\xe3o executar um m\xe9todo se o sem\xe1foro est\xe1 presente; o m\xe9todo informa o m\xe9todo de chamada com um c\xf3digo de erro e um texto plano."}),"\n",(0,r.jsx)(o.p,{children:"Sintaxe:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"\xa0$L_Error:=Semaphore_proof(->$T_Text_error)\n"})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0// Estrutura de prote\xe7\xe3o por sem\xe1foro\n\xa0var $0 : Integer\n\xa0var $1 : Pointer\xa0// mensagem de erro\n\xa0\n\xa0\xa0// Inicio do m\xe9todo\n\xa0var $L_MyError : Integer\n\xa0$L_MyError:=1\n\xa0\n\xa0var $T_Sema_local : Text\n\xa0$T_Sema_local:="$tictac"\n\xa0\n\xa0If(Semaphore($T_Sema_local;300))\n\xa0\xa0// Esper\xe1vamos 300 tics mas o sem\xe1foro\n\xa0\xa0// n\xe3o foi lan\xe7ado pelo que o localizou:\n\xa0\xa0// terminamos aqui\n\xa0\xa0\xa0\xa0$L_MyError:=-1\n\xa0\n\xa0Else\n\xa0\n\xa0\xa0// Este m\xe9todo somente executa por um processo de cada vez\n\xa0\n\xa0\xa0// Localizamos o sem\xe1foro ao mesmo tempo que o introduzimos\n\xa0\xa0// assim que somos os \xfanicos que o podemos excluir\n\xa0\n\xa0\xa0// Fazer algo\n\xa0\xa0\xa0\xa0...\n\xa0\xa0// Terminar excluindo o sem\xe1foro\n\xa0\xa0\xa0\xa0CLEAR SEMAPHORE($T_Sema_local)\n\xa0End if\n\xa0\n\xa0var $T_Message : Text\n\xa0If($L_MyError=-1)\n\xa0\xa0\xa0\xa0$T_Message:="O sem\xe1foro "+$T_Sema_local+" tem o acesso bloqueado ao resto do c\xf3digo"\n\xa0Else\n\xa0\xa0\xa0\xa0$T_Message:="OK"\n\xa0End if\n\xa0\n\xa0$0:=$L_MyError\n\xa0$1->:=$T_Message \xa0// O m\xe9todo chamado recebe um c\xf3digo de erro e uma explica\xe7\xe3o em texto plano\n'})}),"\n",(0,r.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"/docs/pt/commands/clear-semaphore",children:"CLEAR SEMAPHORE"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.em,{children:"Sem\xe1foros e Sinais"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"/docs/pt/commands/test-semaphore",children:"Test semaphore"})]}),"\n",(0,r.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"N\xfamero do comando"}),(0,r.jsx)(o.td,{children:"143"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Thread-seguro"}),(0,r.jsx)(o.td,{children:"\u2713"})]})]})]})]})}function c(e={}){let{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,o,s){s.d(o,{Z:function(){return t},a:function(){return i}});var a=s(667294);let r={},n=a.createContext(r);function i(e){let o=a.useContext(n);return a.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(n.Provider,{value:o},e.children)}}}]);