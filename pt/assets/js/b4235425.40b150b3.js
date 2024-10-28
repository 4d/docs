"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40156],{552150:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>t,contentTitle:()=>s,default:()=>m,frontMatter:()=>d,metadata:()=>i,toc:()=>c});var a=r(474848),n=r(28453);const d={id:"verify-data-file",title:"VERIFY DATA FILE",slug:"/commands/verify-data-file",displayed_sidebar:"docs"},s=void 0,i={id:"commands-legacy/verify-data-file",title:"VERIFY DATA FILE",description:"VERIFY DATA FILE ( endEstrutura ; endDados ; objetos ; op\xe7oes ; metodo {; arrayTabelas {; arrayCampos}} )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/verify-data-file.md",sourceDirName:"commands-legacy",slug:"/commands/verify-data-file",permalink:"/docs/pt/commands/verify-data-file",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fverify-data-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"verify-data-file",title:"VERIFY DATA FILE",slug:"/commands/verify-data-file",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"VERIFY CURRENT DATA FILE",permalink:"/docs/pt/commands/verify-current-data-file"},next:{title:"Version type",permalink:"/docs/pt/commands/version-type"}},t={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Exemplo 4",id:"exemplo-4",level:4},{value:"Exemplo 5",id:"exemplo-5",level:4},{value:"Exemplo 6",id:"exemplo-6",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){const o={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"VERIFY DATA FILE"})," ( ",(0,a.jsx)(o.em,{children:"endEstrutura"})," ; ",(0,a.jsx)(o.em,{children:"endDados"})," ; ",(0,a.jsx)(o.em,{children:"objetos"})," ; ",(0,a.jsx)(o.em,{children:"op\xe7oes"})," ; ",(0,a.jsx)(o.em,{children:"metodo"})," {; ",(0,a.jsx)(o.em,{children:"arrayTabelas"})," {; ",(0,a.jsx)(o.em,{children:"arrayCampos"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Par\xe2metro"}),(0,a.jsx)(o.th,{children:"Tipo"}),(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"endEstrutura"}),(0,a.jsx)(o.td,{children:"Text"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Endere\xe7o do arquivo de estrutura a ser verificado"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"endDados"}),(0,a.jsx)(o.td,{children:"Text"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Endere\xe7o do arquivo de dados a ser verificado"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"objetos"}),(0,a.jsx)(o.td,{children:"Integer"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Objetos a serem verificados"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"op\xe7oes"}),(0,a.jsx)(o.td,{children:"Integer"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Op\xe7\xf5es de verifica\xe7\xe3o"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"metodo"}),(0,a.jsx)(o.td,{children:"Text"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Nome do m\xe9todo 4D de retrochamada"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"arrayTabelas"}),(0,a.jsx)(o.td,{children:"Integer array"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"N\xfameros de tabelas a serem verificadas"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"arrayCampos"}),(0,a.jsx)(o.td,{children:"2D Integer array, 2D Integer array, 2D Real array"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"N\xfamero de \xedndices a serem verificados"})]})]})]}),"\n",(0,a.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(o.p,{children:["O comando VERIFY DATA FILE[#descv] realiza uma verifica\xe7\xe3o estrutural dos objetos contidos no arquivo de dados 4D criado por ",(0,a.jsx)(o.em,{children:"endere\xe7oEstrutura"})," e ",(0,a.jsx)(o.em,{children:"endere\xe7oDados"}),".[#descv]"]}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Nota:"})," para maiores informa\xe7\xf5es sobre o processo de verifica\xe7\xe3o de dados, consulte o Manual de Desenho. endere\xe7oEstrutura seleciona o arquivo de estrutura (compilado ou n\xe3o) associado com o arquivo de dados a ser verificado. Pode se tratar do arquivo de estrutura aberto ou de qualquer outro arquivo de estrutura. Voc\xea deve passar um nome de endere\xe7o completo, expressado com a sintaxe do sistema operacional. Tamb\xe9m pode passar uma string vazia, neste caso aparece uma caixa de di\xe1logo padr\xe3o de abertura de arquivos que permite ao usu\xe1rio selecionar o arquivo de estrutura a ser utilizado."]}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.em,{children:"endere\xe7oDados"})," seleciona um arquivo de dados 4D (.4DD). Deve corresponder ao arquivo de estrutura definido pelo par\xe2metro ",(0,a.jsx)(o.em,{children:"endere\xe7oEstrutura"}),". Aten\xe7\xe3o, voc\xea pode selecionar o arquivo de estrutura atual mas o arquivo de dados n\xe3o deve ser o arquivo atual (aberto). Para verificar se o arquivo de dados est\xe1 aberto, utilize o comando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/verify-current-data-file",children:"VERIFY CURRENT DATA FILE"}),". Se voc\xea tenta verificar o arquivo de dados atual com o comando VERIFY DATA FILE, \xe9 gerado um erro."]}),"\n",(0,a.jsx)(o.p,{children:"O arquivo de dados selecionado \xe9 aberto em modo somente leitura. Voc\xea deve ter certeza que nenhuma aplica\xe7\xe3o acesse a este arquivo em modo escrita, caso contr\xe1rio os resultados da verifica\xe7\xe3o poderiam ser distorcidos."}),"\n",(0,a.jsxs)(o.p,{children:["No par\xe2metro ",(0,a.jsx)(o.em,{children:"endere\xe7oDados"}),", \xe9 poss\xedvel passar uma cadeia vazia, um nome de arquivo ou um endere\xe7o de acesso completo, expressado na sintaxe do sistema operacional. Se voc\xea passar uma cadeia vazia, aparecer\xe1 a caixa de di\xe1logo padr\xe3o de abertura de arquivos de modo que o usu\xe1rio possa especificar o arquivo a ser revisado (note que neste caso, n\xe3o \xe9 poss\xedvel selecionar o arquivo de dados atual). Se voc\xea passar somente um nome de arquivo de dados, 4D o buscar\xe1 no mesmo n\xedvel que o arquivo de estrutura especificado."]}),"\n",(0,a.jsxs)(o.p,{children:["O par\xe2metro ",(0,a.jsx)(o.em,{children:"objetos"})," \xe9 utilizado para selecionar os tipos de objetos a serem verificados. Voc\xea pode verificar os tipos de objetos: registros e \xedndices. Voc\xea pode utilizar as seguintes constantes, que se encontram no tema \u201c",(0,a.jsx)(o.em,{children:"Manuten\xe7\xe3o do arquivo de dados"}),"\u201d:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Constante"}),(0,a.jsx)(o.th,{children:"Tipo"}),(0,a.jsx)(o.th,{children:"Valor"}),(0,a.jsx)(o.th,{children:"Coment\xe1rio"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Do not create log file"}),(0,a.jsx)(o.td,{children:"Inteiro longo"}),(0,a.jsx)(o.td,{children:"16384"}),(0,a.jsx)(o.td,{children:"Geralmente, esse comando cria um arquivo de hist\xf3rico em formato XML (veja o final da descri\xe7\xe3o do comando). Voc\xea pode cancelar esta opera\xe7\xe3o a partir desta op\xe7\xe3o."})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Timestamp log file name"}),(0,a.jsx)(o.td,{children:"Inteiro longo"}),(0,a.jsx)(o.td,{children:"262144"}),(0,a.jsx)(o.td,{children:"Quando esta op\xe7\xe3o for passada, o nome do arquivo de hist\xf3rico gerado conter\xe1 a data e a hora de sua cria\xe7\xe3o; como resulado, n\xe3o substituir\xe1 nenhum arquivo de hist\xf3rico gerado anteriormente. Como padr\xe3o, se esta op\xe7\xe3o n\xe3o for passada, os nomes de arquivo de hist\xf3rico n\xe3o ter\xe3o uma timestamp e cada novo arquivo gerado vai substituir o anterior."})]})]})]}),"\n",(0,a.jsxs)(o.p,{children:["Geralmente, o comando VERIFY DATA FILE cria um arquivo de hist\xf3rico em formato XML (por favor, veja o final da descri\xe7\xe3o deste comando). Voc\xea pode cancelar esta opera\xe7\xe3o passando esta op\xe7\xe3o. Para criar o arquivo de hist\xf3rico, passe 0 em ",(0,a.jsx)(o.em,{children:"op\xe7oes"}),"."]}),"\n",(0,a.jsxs)(o.p,{children:["O par\xe2metro ",(0,a.jsx)(o.em,{children:"m\xe9todo"})," permite definir um m\xe9todo de callback que ser\xe1 chamado regularmente durante a verifica\xe7\xe3o. Se voc\xea passar uma cadeia vazia,nenhum m\xe9todo \xe9 chamado. Se o m\xe9todo passado n\xe3o existe, a verifica\xe7\xe3o n\xe3o \xe9 realizada, \xe9 gerado um erro e a vari\xe1vel OK toma o valor 0. Quando se chama, este m\xe9todo, voc\xea recebe at\xe9 5 par\xe2metros dependendo do tipo de evento que origina a chamada (ver a tabela de chamadas). \xc9 imperativo declarar estes par\xe2metros no m\xe9todo:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"- $1"}),(0,a.jsx)(o.th,{children:"Inteiro longo"}),(0,a.jsx)(o.th,{children:"Tipo de mensagem (ver tabela)"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"- $2"}),(0,a.jsx)(o.td,{children:"Inteiro longo"}),(0,a.jsx)(o.td,{children:"Tipo de objeto"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"- $3"}),(0,a.jsx)(o.td,{children:"Text"}),(0,a.jsx)(o.td,{children:"Mensagem"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"- $4"}),(0,a.jsx)(o.td,{children:"Inteiro longo"}),(0,a.jsx)(o.td,{children:"N\xfamero de tabela"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"- $5"}),(0,a.jsx)(o.td,{children:"Inteiro longo"}),(0,a.jsx)(o.td,{children:"Reservado"})]})]})]}),"\n",(0,a.jsx)(o.p,{children:"A tabela a seguir descreve o conte\xfado dos par\xe2metros em fun\xe7\xe3o do tipo de evento:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:(0,a.jsx)(o.strong,{children:"Evento"})}),(0,a.jsx)(o.th,{children:(0,a.jsx)(o.strong,{children:"$1 (Inteiro longo)"})}),(0,a.jsx)(o.th,{children:(0,a.jsx)(o.strong,{children:"$2 (Inteiro longo)"})}),(0,a.jsx)(o.th,{children:(0,a.jsx)(o.strong,{children:"$3 (Texto)"})}),(0,a.jsx)(o.th,{children:(0,a.jsx)(o.strong,{children:"$4 (Inteiro longo)"})}),(0,a.jsx)(o.th,{children:(0,a.jsx)(o.strong,{children:"$5 (Inteiro longo)"})})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Mensagem"}),(0,a.jsx)(o.td,{children:"1"}),(0,a.jsx)(o.td,{children:"0"}),(0,a.jsx)(o.td,{children:"Mensagem de progresso"}),(0,a.jsx)(o.td,{children:"Porcentagem realizado"}),(0,a.jsx)(o.td,{children:"Reservado"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Fim da verifica\xe7\xe3o (**)"}),(0,a.jsx)(o.td,{children:"2"}),(0,a.jsx)(o.td,{children:"Tipo de objeto (**)"}),(0,a.jsx)(o.td,{children:"Texto da mensagem OK"}),(0,a.jsx)(o.td,{children:"N\xfamero de tabela ou \xedndice"}),(0,a.jsx)(o.td,{children:"Reservado"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Error"}),(0,a.jsx)(o.td,{children:"3"}),(0,a.jsx)(o.td,{children:"Tipo de objeto (**)"}),(0,a.jsx)(o.td,{children:"Texto de mensagem de erro"}),(0,a.jsx)(o.td,{children:"N\xfamero de tabela ou \xedndice"}),(0,a.jsx)(o.td,{children:"Reservado"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Fim de execu\xe7\xe3o"}),(0,a.jsx)(o.td,{children:"4"}),(0,a.jsx)(o.td,{children:"0"}),(0,a.jsx)(o.td,{children:"DONE"}),(0,a.jsx)(o.td,{children:"0"}),(0,a.jsx)(o.td,{children:"Reservado"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Advert\xeancia"}),(0,a.jsx)(o.td,{children:"5"}),(0,a.jsx)(o.td,{children:"Tipo de objeto (**)"}),(0,a.jsx)(o.td,{children:"Texto de mensagem de erro"}),(0,a.jsx)(o.td,{children:"N\xfamero de tabela ou \xedndice"}),(0,a.jsx)(o.td,{children:"Reservado"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"mensaje"}),(0,a.jsx)(o.td,{children:"n\xfamero"}),(0,a.jsx)(o.td,{}),(0,a.jsx)(o.td,{}),(0,a.jsx)(o.td,{}),(0,a.jsx)(o.td,{})]})]})]}),"\n",(0,a.jsxs)(o.p,{children:["(*) O evento Fim da verifica\xe7\xe3o ($2=1) n\xe3o \xe9 devolvido nunca quando o modo de verifica\xe7\xe3o for Verify All. S\xf3 se utiliza em modo Verify Records ou Verify Indexes.",(0,a.jsx)(o.br,{}),'\n(**)Tipo de objeto: quando um objeto for verificado, \xe9 poss\xedvel enviar uma mensagem "finalizado" ($1=2), de erro ($1=3) ou de advert\xeancia ($1=5). O tipo de objeto retornado em $2 pode ser um dos seguintes:']}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"0 = indeterminado"}),"\n",(0,a.jsx)(o.li,{children:"4 = registro"}),"\n",(0,a.jsx)(o.li,{children:"8 = \xedndice"}),"\n",(0,a.jsx)(o.li,{children:"16 = objeto estrutura (controle preliminar do arquivo de dados).\nCaso particular: quando $4 = 0 para $1=2, 3 ou 5, a mensagem n\xe3o se refere a uma tabela ou \xedndice, e sim a um arquivo de dados em seu conjunto. O m\xe9todo de callback tamb\xe9m deve retornar um valor $0 (Inteiro longo), permitindo controlar a execu\xe7\xe3o da opera\xe7\xe3o:"}),"\n",(0,a.jsx)(o.li,{children:"Se $0 = 0, a opera\xe7\xe3o continua normalmente"}),"\n",(0,a.jsx)(o.li,{children:"Se $0 = -128, a opera\xe7\xe3o para sem que seja gerado um erro"}),"\n",(0,a.jsxs)(o.li,{children:["Se $0 = outro valor, a opera\xe7\xe3o para e o valor passado em $0 \xe9 retornado como o n\xfamero de erro. Este erro pode ser interceptado por um m\xe9todo de gest\xe3o de erros.\n",(0,a.jsx)(o.strong,{children:"Nota:"})," N\xe3o \xe9 poss\xedvel interromper a execu\xe7\xe3o via $0 depois de que o evento tenha sido gerado Fim de execu\xe7\xe3o ($4=1)."]}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:"Dois arrays opcionais tamb\xe9m pode ser utilizados por este comando:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["O array ",(0,a.jsx)(o.em,{children:"arrayTabelas"})," cont\xe9m os n\xfameros das tabelas cujos registros ser\xe3o verificados. Permite limitar a verifica\xe7\xe3o de certas tabelas. Se este par\xe2metro n\xe3o se passa ou se o array est\xe1 vazio e o par\xe2metro ",(0,a.jsx)(o.em,{children:"objetos"})," cont\xe9m Verify Records, todas as tabelas ser\xe3o verificadas."]}),"\n",(0,a.jsxs)(o.li,{children:["O ",(0,a.jsx)(o.em,{children:"arrayCampos"})," cont\xe9m os n\xfameros dos campos indexados que devem ser verificados. Se este par\xe2metro n\xe3o for passado ou se o array estiver vazio e o par\xe2metro ",(0,a.jsx)(o.em,{children:"objetos"})," cont\xe9m Verify Records, todos os \xedndices ser\xe3o verificados. O comando ignora os campos que n\xe3o est\xe3o indexados. Se um campo cont\xe9m v\xe1rios \xedndices, todos s\xe3o verificados. Se um campo forma parte de um \xedndice composto, o total do \xedndice \xe9 verificado.",(0,a.jsx)(o.br,{}),"\nVoc\xea deve passar um array 2D em ",(0,a.jsx)(o.em,{children:"arrayCampos"}),". Para cada linha do array:",(0,a.jsx)(o.br,{}),"\n- O elemento {0} cont\xe9m o n\xfamero da tabela,",(0,a.jsx)(o.br,{}),"\n- Os outros elementos {1...x} cont\xe9m os n\xfameros dos campos."]}),"\n"]}),"\n",(0,a.jsxs)(o.p,{children:["Por padr\xe3o, o comando VERIFY DATA FILE cria um arquivo de hist\xf3rico em formato XML (se voc\xea n\xe3o passou a op\xe7\xe3o Do not create log file, veja o par\xe2metro ",(0,a.jsx)(o.em,{children:"op\xe7oes"}),"). Seu nome est\xe1 baseado no arquivo de dados e est\xe1 localizado junto a este arquivo. Por exemplo, para um arquivo de dados chamado \u201cdata.4dd,\u201d o arquivo de hist\xf3rico ser\xe1 chamado \u201cdata_verify_log.xml.\u201d"]}),"\n",(0,a.jsxs)(o.p,{children:['Se tiver passado a op\xe7\xe3o nome Timestamp arquivo hist\xf3rico, o nome do arquivo de hist\xf3rico inclui a data e a hora de sua cria\xe7\xe3o na forma "AAAA-MM-DD HH-MM-SS", que nos d\xe1, por exemplo: \u201cmyDB_Verify_Log_2015-09-27 15-20-35.xml\u201d. Isto significa que cada novo arquivo de hist\xf3rico n\xe3o substitui ao anterior, mas poderia pedir a\xe7\xe3o manual posterior para eliminar arquivos desnecess\xe1rios.',(0,a.jsx)(o.br,{}),"\nIndependentemente da op\xe7\xe3o selecionada, logo que gerar um arquivo de hist\xf3rico, sua rota se devolve na vari\xe1vel de sistema Document depois da execu\xe7\xe3o de comando."]}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,a.jsx)(o.p,{children:"Simples verifica\xe7\xe3o dos dados e dos \xedndices:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0VERIFY DATA FILE($NomEstrutura;$NomData;Verify indexes+Verify records;Do not create log file;"")\n'})}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,a.jsx)(o.p,{children:"Verifica\xe7\xe3o completa com arquivo de hist\xf3rico:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0VERIFY DATA FILE($NomEstrutura;$NomData;Verify All No Callback;0;"")\n'})}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,a.jsx)(o.p,{children:"Verifica\xe7\xe3o somente dos registros:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0VERIFY DATA FILE($NomEstrutura;$NomData;Verify records;0;"")\n'})}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,a.jsx)(o.p,{children:"Verifica\xe7\xe3o dos registros das tabelas 3 e 7 somente:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0ARRAY LONGINT($arrTablaNums;2)\n\xa0$arrTableNums{1}:=3\n\xa0$arrTableNums{2}:=7\n\xa0VERIFY DATA FILE($NomeEstrutura;$NomeData;Verify records;0;"FollowScan";$arrTableNums)\n'})}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-5",children:"Exemplo 5"}),"\n",(0,a.jsx)(o.p,{children:"Verifica\xe7\xe3o de \xedndices espec\xedficos (\xedndice do campo 1 da tabela 4 e \xedndice dos campos 2 e 3 da tabela 5):"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0ARRAY LONGINT($arrTablaNums;0)\xa0//n\xe3o utilizado, mas obrigat\xf3rio\n\xa0ARRAY LONGINT($arrIndex;2;0)\xa0//2 linhas (colunas adicionadas depois)\n\xa0$arrIndex{1}{0}:=4\xa0// n\xfamero de tabela no elemento 0\n\xa0APPEND TO ARRAY($arrIndex{1};1)\xa0//n\xfamero do primeiro campo a verificar\n\xa0$arrIndex{2}{0}:=5\xa0// n\xfamero da tabela no elemento 0\n\xa0APPEND TO ARRAY($arrIndex{2};2)\xa0// n\xfamero do primeiro campo a ser verificado\n\xa0APPEND TO ARRAY($arrIndex{2};3)\xa0// n\xfamero do segundo campo a ser verificado\n\xa0VERIFY DATA FILE($NomEstrutura;$NomData;Verify indexes;0;"FollowScan";$arrTablaNums;$arrIndex)\n'})}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-6",children:"Exemplo 6"}),"\n",(0,a.jsx)(o.p,{children:"Verificar o arquivo de dados, criar e exibir o arquivo de hist\xf3rico:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0VERIFY DATA FILE(Structure file;Data file;Verify all;0;"")\n\xa0SHOW ON DISK(File(Verification log file).platformPath)\n'})}),"\n",(0,a.jsx)(o.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,a.jsx)(o.p,{children:"Se o m\xe9todo de callback n\xe3o existir, a verifica\xe7\xe3o n\xe3o \xe9 efetuada, \xe9 gerado um erro e a vari\xe1vel sistema OK recebe o valor 0. Se um arquivo de log hist\xf3rico for erado, seu nome de caminho completo \xe9 retornado na vari\xe1vel de sistema Document."}),"\n",(0,a.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.a,{href:"/docs/pt/commands/verify-current-data-file",children:"VERIFY CURRENT DATA FILE"})})]})}function m(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,o,r)=>{r.d(o,{R:()=>s,x:()=>i});var a=r(296540);const n={},d=a.createContext(n);function s(e){const o=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(d.Provider,{value:o},e.children)}}}]);