"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62848"],{865183:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>t});var s=JSON.parse('{"id":"commands-legacy/soap-declaration","title":"SOAP DECLARATION","description":"SOAP DECLARATION ( variavel ; tipo ; entrada_saida {; apelido} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/soap-declaration.md","sourceDirName":"commands-legacy","slug":"/commands/soap-declaration","permalink":"/docs/pt/20-R7/commands/soap-declaration","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsoap-declaration.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"soap-declaration","title":"SOAP DECLARATION","slug":"/commands/soap-declaration","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Web Services (Server)","permalink":"/docs/pt/20-R7/commands/theme/Web-Services-Server"},"next":{"title":"SOAP get info","permalink":"/docs/pt/20-R7/commands/soap-get-info"}}'),r=o("785893"),a=o("250065");let d={id:"soap-declaration",title:"SOAP DECLARATION",slug:"/commands/soap-declaration",displayed_sidebar:"docs"},t=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Uso de tipos XML",id:"uso-de-tipos-xml",level:3},{value:"m\xe9todo COMPILER_WEB",id:"m\xe9todo-compiler_web",level:3},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Exemplo 3",id:"exemplo-3",level:2},{value:"Exemplo 4",id:"exemplo-4",level:2},{value:"Exemplo 5",id:"exemplo-5",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",types:"types",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SOAP DECLARATION"})," ( ",(0,r.jsx)(n.em,{children:"variavel"})," ; ",(0,r.jsx)(n.em,{children:"tipo"})," ; entrada_saida {; ",(0,r.jsx)(n.em,{children:"apelido"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"variavel"}),(0,r.jsx)(n.td,{children:"Variable"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Vari\xe1vel que referencia um argumento de entrada ou sa\xedda SOAP"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tipo"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Tipo 4D para o qual o argumento aponta"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"entrada_saida"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"1 = entrada SOAP; 2 = sa\xedda SOAP"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"apelido"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nome publicado por esse argumento usando trocas SOAP"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsx)(n.p,{children:"O comando SOAP DECLARATION permite declarar explicitamente o tipo dos par\xe2metros utilizados em um m\xe9todo 4D publicado como servi\xe7o web."}),"\n",(0,r.jsxs)(n.p,{children:["Quando for publicado um m\xe9todo como servi\xe7o web, os par\xe2metros padr\xe3o ",(0,r.jsx)(n.em,{children:"$0, $1... $n"})," s\xe3o utilizados para descrever os par\xe2metros do servi\xe7o web ao mundo exterior (mais particularmente no arquivo WSDL). O protocolo SOAP necessita que os par\xe2metros sejam nomeados explicitamente; 4D utiliza como padr\xe3o os nomes \u201CFourD_arg0, FourD_arg1 ... FourD_argn\u201D."]}),"\n",(0,r.jsx)(n.p,{children:"Este funcionamento como padr\xe3o pode ser problem\xe1tico pelas seguintes raz\xf5es:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["N\xe3o \xe9 poss\xedvel declarar ",(0,r.jsx)(n.em,{children:"$0"})," ou ",(0,r.jsx)(n.em,{children:"$1, $2"}),", etc. como um array. Portanto, \xe9 necess\xe1rio utilizar ponteiros; entretanto, neste caso, \xe9 necess\xe1rio conhecer o tipo dos valores para a gera\xe7\xe3o do arquivo WSDL."]}),"\n",(0,r.jsx)(n.li,{children:"Depois, pode ser \xfatil ou necess\xe1rio personalizar os nomes dos par\xe2metros (entrada e sa\xedda)."}),"\n",(0,r.jsx)(n.li,{children:"Pode utilizar par\xe2metros como as estruturas XML e refer\xeancias DOM."}),"\n",(0,r.jsx)(n.li,{children:"Tamb\xe9m pode ser necess\xe1rio devolver os valores de um tamanho superior a 32 KB (limite dos argumentos de tipo Texto em banco de dados que est\xe3o em modo n\xe3o-Unicode)."}),"\n",(0,r.jsxs)(n.li,{children:["Finalmente, este funcionamento torna imposs\xedvel devolver mais de um valor por chamada RPC (em ",(0,r.jsx)(n.em,{children:"$0"}),")."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"O comando SOAP DECLARATION lhe permite liberar estes limites. Pode executar este comando para cada par\xe2metro de entrada e sa\xedda e atribuir-lhe um nome e um tipo."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),": Mesmo quando esse comando for usado, \xe9 necess\xe1rio declarar as vari\xe1veis 4D e arrays no m\xe9todo Compiler_Web utilizando os comandos do tema \u201C",(0,r.jsx)(n.em,{children:"Compilador"}),"\u201D."]}),"\n",(0,r.jsxs)(n.p,{children:["Em ",(0,r.jsx)(n.em,{children:"variavel"}),", passe a vari\xe1vel 4D a referenciar quando chame ao servi\xe7o web."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Aviso"}),": Pode referenciar apenas as vari\xe1veis processo ou os argumentos dos m\xe9todos 4D (",(0,r.jsx)(n.em,{children:"$0"})," a ",(0,r.jsx)(n.em,{children:"$n"}),"). As vari\xe1veis locais e interprocesso n\xe3o podem ser utilizados."]}),"\n",(0,r.jsx)(n.p,{children:"Como padr\xe3o, como apenas podem ser utilizados os argumento de tipo texto, as respostas do servidor SOAP est\xe3o limitadas a 32 KB. Entretanto, \xe9 poss\xedvel devolver argumentos SOAP com um tamanho maior a 32 KB, utilizando BLOBs. Para exceder este limite, simplesmente necessita declarar os argumentos como BLOBs antes de chamar ao comando SOAP DECLARATION (ver exemplo 4)."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Do lado do cliente, se assina este tipo de servi\xe7o web com 4D, o assistente de servi\xe7os web gerar\xe1 naturalmente uma vari\xe1vel de tipo Texto no m\xe9todo proxy. Para poder utiliz\xe1-la, apenas necessita digitar novamente esta vari\xe1vel como um BLOB no m\xe9todo proxy."}),"\n",(0,r.jsxs)(n.li,{children:["Esse comando n\xe3o \xe9 compat\xedvel com objetos blob (tipo 4D Blob). Veja em ",(0,r.jsx)(n.em,{children:"Passing blobs and blob objects to 4D commands"})," developer.4d.com"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Em ",(0,r.jsx)(n.em,{children:"tipo"}),", passe o tipo 4D correspondente. Podem ser utilizados a maioria dos tipos de vari\xe1veis e arrays 4D. Pode utilizar as seguintes constantes predefinidas, que ficam no tema \u201C",(0,r.jsx)(n.em,{children:"Tipos de campos e vari\xe1veis"}),"\u201D, al\xe9m de, para tipos XML, duas constantes do tema ",(0,r.jsx)(n.em,{children:"Servi\xe7os Web (Servidor)"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Boolean array"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"22"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Date array"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"17"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Integer array"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"15"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is BLOB"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"30"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is Boolean"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"6"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is date"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is integer"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is longint"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is real"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is string var"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"24"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is text"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is time"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"11"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"LongInt array"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"16"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Real array"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"14"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"String array"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"21"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"18"})]})]})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is DOM reference"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"37"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is XML"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"36"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Em ",(0,r.jsx)(n.em,{children:"entrada_sa\xedda"}),", passe um valor indicando se o par\xe2metro processado for \u201Centrada\u201D (ou seja corresponde a um valor recebido pelo m\xe9todo) ou \u201Csa\xedda\u201D (por exemplo corresponde a um valor retornado pelo m\xe9todo). Pode utilizar as seguintes constantes predefinidas, que ficam no tema \u201C",(0,r.jsx)(n.em,{children:"Servi\xe7os Web (Servidor)"}),"\u201D:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SOAP input"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SOAP output"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"uso-de-tipos-xml",children:"Uso de tipos XML"}),"\n",(0,r.jsx)(n.p,{children:'Pode declarar as vari\xe1veis de tipo "estrutura XML" e "DOM reference", de entrada e sa\xedda, atrav\xe9s das constantes Is XML e Is DOM reference. Quando os par\xe2metros deste tipo s\xe3o definidos, n\xe3o se aplica nenhum processo nem codifica\xe7\xe3o e os dados s\xe3o transmitidos "tal qual" (ver exemplo 5).'}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Par\xe2metros de sa\xedda"}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Is XML indica que o par\xe2metro cont\xe9m uma estrutura XML,"}),"\n",(0,r.jsxs)(n.li,{children:["Is DOM reference indica que o par\xe2metro cont\xe9m a refer\xeancia DOM de uma estrutura XML. Neste caso, a inser\xe7\xe3o da estrutura XML na mensagem SOAP \xe9 equivalente a executar o comando ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/dom-export-to-var",children:"DOM EXPORT TO VAR"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),": No caso das refer\xeancias DOM utilizadas como par\xe2metros de sa\xedda, se recomenda utilizar as refer\xeancias globais, criadas, por exemplo, ao in\xedcio ou ao fechamento da aplica\xe7\xe3o. De fato, uma refer\xeancia DOM criada dentro do mesmo servi\xe7o web n\xe3o pode ser fechada com ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/dom-close-xml",children:"DOM CLOSE XML"}),", do contr\xe1rio o servi\xe7o web n\xe3o devolve nada. As chamadas m\xfaltiplas ao servi\xe7o web implicam portanto a cria\xe7\xe3o de m\xfaltiplas refer\xeancias DOM n\xe3o fechadas, as quais podem provocar uma satura\xe7\xe3o da mem\xf3ria."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Par\xe2metros de entrada"}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Is XML indica que o par\xe2metro deve receber um argumento XML enviado pelo cliente SOAP."}),"\n",(0,r.jsx)(n.li,{children:"Is DOM reference indica que o par\xe2metro deve receber a refer\xeancia DOM de uma estrutura XML correspondente ao argumento XML enviado pelo cliente SOAP."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:['Modifica\xe7\xe3o do WSDL As estruturas XML ser\xe3o declaradas por 4D como "anyType" (tipo indeterminado) no WSDL. Se desejar dar um tipo preciso a estrutura XML, deve guardar o arquivo WSDL e adicionar manualmente o esquema de dados que deseja na se\xe7\xe3o ',(0,r.jsx)(n.types,{children:" do WSDL."})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"m\xe9todo-compiler_web",children:"m\xe9todo COMPILER_WEB"}),"\n",(0,r.jsx)(n.p,{children:"Os argumentos SOAP entrantes referenciados com a ajuda de vari\xe1veis 4D (e n\xe3o pelos argumentos de m\xe9todos 4D) devem ser declarados primeiro no m\xe9todo de projeto COMPILER_WEB. De fato, o uso de vari\xe1veis de processo nos m\xe9todos Web Services necessitam ser declaradas antes da chamada ao m\xe9todo. Se chama o m\xe9todo de projeto COMPILER_WEB, se existir, para cada peti\xe7\xe3o SOAP aceitada. Como padr\xe3o, o m\xe9todo COMPILER_WEB n\xe3o existe. Voc\xea deve cri\xe1-lo especificamente."}),"\n",(0,r.jsxs)(n.p,{children:["Note que o m\xe9todo COMPILER_WEB tamb\xe9m \xe9 chamado pelo servidor web de 4D durante a recep\xe7\xe3o de peti\xe7\xf5es web \u201Cconvencionais\u201D de tipo POST (ver a se\xe7\xe3o ",(0,r.jsx)(n.em,{children:"A\xe7\xf5es URL e Formul\xe1rio"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["Em ",(0,r.jsx)(n.em,{children:"apelido"}),", passe o nome do argumento que deve aparecer em WSDL e nos interc\xe2mbios SOAP."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Aviso"}),": este nome deve ser \xfanico na chamada RPC (par\xe2metros de entrada e sa\xedda), do contr\xe1rio, apenas a \xfaltima declara\xe7\xe3o ser\xe1 levada em considera\xe7\xe3o por 4D."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),": os nomes dos argumentos n\xe3o devem come\xe7ar por um n\xfamero nem conter espa\xe7os. Al\xe9m disso, para evitar riscos de incompatibilidade, \xe9 recomendado n\xe3o utilizar caracteres estendidos (como caracteres acentuados).",(0,r.jsx)(n.br,{}),"\nSe for omitido o par\xe2metro ",(0,r.jsx)(n.em,{children:"apelido"}),", 4D utilizar\xe1, como padr\xe3o, o nome da vari\xe1vel ou FourD_argN para os argumentos dos m\xe9todos 4D (",(0,r.jsx)(n.em,{children:"$0"})," a ",(0,r.jsx)(n.em,{children:"$n"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),": o comando SOAP DECLARATION deve estar inclu\xeddo no m\xe9todo publicado como servi\xe7o web. N\xe3o \xe9 poss\xedvel cham\xe1-lo desde outro m\xe9todo."]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,r.jsx)(n.p,{children:"Este exemplo especifica um nome de par\xe2metro:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// No m\xe9todo COMPILER_WEB\n\xa0var $1 : Integer\n\xa0\n\xa0\xa0// No m\xe9todo do servi\xe7o Web\n\xa0\xa0// Durante a gera\xe7\xe3o do arquivo WSDL e as chamadas SOAP, a palavra\n\xa0\xa0// zipcode se utilizar\xe1 ao inv\xe9s de fourD_arg1\n\xa0SOAP DECLARATION($1;Is longint;SOAP input;"zipcode")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"Este exemplo \xe9 utilizado para recuperar um array de c\xf3digos postais na forma de inteiros longos:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//No m\xe9todo COMPILER_WEB\n\xa0ARRAY LONGINT(codes;0)\n\xa0\n\xa0\xa0//No m\xe9todo do servi\xe7o Web\n\xa0SOAP DECLARATION(codes;LongInt array;SOAP input;"in_codes")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,r.jsx)(n.p,{children:"Este exemplo se utiliza para referenciar dois valores devolvidos sem especificar um nome de argumento:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0SOAP DECLARATION(ret1;Is longint;SOAP output)\n\xa0SOAP DECLARATION(ret2;Is longint;SOAP output)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,r.jsx)(n.p,{children:"Este exemplo permite ao servidor 4D SOAP devolver um argumento de um tamanho maior a 32 KB:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0var $0 : Blob\n\xa0SOAP DECLARATION($0;Is text;SOAP output)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Note o tipo Is Text (e n\xe3o Is BLOB). Isso permite que o argumento seja processado corretamente."}),"\n",(0,r.jsx)(n.h2,{id:"exemplo-5",children:"Exemplo 5"}),"\n",(0,r.jsx)(n.p,{children:"Este exemplo illustra os resultados dos diferentes tipos de declara\xe7\xf5es:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ALL RECORDS([Contatos])\n\xa0\n\xa0\xa0//Constru\xe7\xe3o de uma estrutura XML da sele\xe7\xe3o de contatos e armazenar o XML em um BLOB\n\xa0var ws_vx_xmlBlob : Blob\n\xa0obterContatosXML(->ws_vx_xmlBlob)\n\xa0\xa0//Recuperar a estrutura XML em uma v\xe1riavel de tipo texto\n\xa0var ws_vt_xml : Text\n\xa0ws_vt_xml:=BLOB to text(ws_vx_xmlBlob;UTF8 text without length)\n\xa0\xa0//Recuperar uma refer\xeancia DOM a estrutura XML\n\xa0var ws_vt_xmlRef : Text\n\xa0ws_vt_xmlRef:=DOM Parse XML variable(ws_vt_xml)\n\xa0\n\xa0\xa0//Testa as diferentes declara\xe7\xf5es\n\xa0SOAP DECLARATION(ws_vx_xmlBlob;Is BLOB;SOAP output;"contactListsX")\n\xa0\xa0//O XML se converte em Base64 por 4D\n\xa0\n\xa0SOAP DECLARATION(ws_vt_xml;Is text;SOAP output;"contactListsText")\n\xa0\xa0//O XML se converte em texto por 4D (< > become entities)\n\xa0\n\xa0SOAP DECLARATION(ws_vt_xml;Is XML;SOAP output;"xmlContacts")\n\xa0\xa0//O XML se passa a texto XML\n\xa0\n\xa0SOAP DECLARATION(ws_vx_xmlBlob;Is XML;SOAP output;"blobContacts")\n\xa0\xa0//O XML se passa a um blob XML\n\xa0\n\xa0SOAP DECLARATION(ws_vt_xmlRef;Is DOM reference;SOAP output;"contactByRef")\n\xa0\xa0//O XML se passa como una refer\xeancia\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/is-data-file-locked",children:"Is data file locked"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/soap-get-info",children:"SOAP get info"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/soap-send-fault",children:"SOAP SEND FAULT"})]}),"\n",(0,r.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"782"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return t},a:function(){return d}});var s=o(667294);let r={},a=s.createContext(r);function d(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);