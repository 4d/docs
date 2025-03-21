"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["73497"],{651418:function(a,e,o){o.r(e),o.d(e,{default:()=>p,frontMatter:()=>t,metadata:()=>r,assets:()=>i,toc:()=>A,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/append-data-to-pasteboard","title":"APPEND DATA TO PASTEBOARD","description":"APPEND DATA TO PASTEBOARD ( tipoDados ; dados )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/append-data-to-pasteboard.md","sourceDirName":"commands-legacy","slug":"/commands/append-data-to-pasteboard","permalink":"/docs/pt/commands/append-data-to-pasteboard","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fappend-data-to-pasteboard.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"append-data-to-pasteboard","title":"APPEND DATA TO PASTEBOARD","slug":"/commands/append-data-to-pasteboard","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Pasteboard","permalink":"/docs/pt/commands/theme/Pasteboard"},"next":{"title":"CLEAR PASTEBOARD","permalink":"/docs/pt/commands/clear-pasteboard"}}'),n=o("785893"),s=o("250065");let t={id:"append-data-to-pasteboard",title:"APPEND DATA TO PASTEBOARD",slug:"/commands/append-data-to-pasteboard",displayed_sidebar:"docs"},d=void 0,i={},A=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(a){let e={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...a.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"APPEND DATA TO PASTEBOARD"})," ( ",(0,n.jsx)(e.em,{children:"tipoDados"})," ; ",(0,n.jsx)(e.em,{children:"dados"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"Par\xe2metro"}),(0,n.jsx)(e.th,{children:"Tipo"}),(0,n.jsx)(e.th,{}),(0,n.jsx)(e.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"tipoDados"}),(0,n.jsx)(e.td,{children:"Text"}),(0,n.jsx)(e.td,{children:"\u2192"}),(0,n.jsx)(e.td,{children:"Tipo de dados a adiconar"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"dados"}),(0,n.jsx)(e.td,{children:"Blob"}),(0,n.jsx)(e.td,{children:"\u2192"}),(0,n.jsx)(e.td,{children:"Dados a anexar na \xe1rea de transfer\xeancia"})]})]})]}),"\n",(0,n.jsx)(e.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(e.p,{children:["O comando APPEND DATA TO PASTEBOARD adiciona na \xe1rea de transfer\xeancia os dados do tipo especificado em ",(0,n.jsx)(e.em,{children:"tipoDados"})," no BLOB ",(0,n.jsx)(e.em,{children:"dados"}),"."]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Nota:"})," no caso de opera\xe7\xf5es copiar/colar, o contendor de dados corresponde a \xe1rea de transfer\xeancia."]}),"\n",(0,n.jsxs)(e.p,{children:["Passe em ",(0,n.jsx)(e.em,{children:"tipoDados"})," um valor definindo o tipo de dados a adicionar. Pode passar uma assinatura 4D, um tipo UTI (Mac OS), um nome/n\xfamero de formato (Windows), ou um tipo de 4 caracteres (compatibilidade). Para maior informa\xe7\xe3o sobre estes tipos, consulte a se\xe7\xe3o ",(0,n.jsx)(e.em,{children:"Gerenciar \xe1rea de transfer\xeancia"})]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Nota para os usu\xe1rios Windows"}),": quando o comando se utiliza com dados de tipo texto (",(0,n.jsx)(e.em,{children:"tipoDados"})," ",(0,n.jsx)(e.em,{children:"dataType \xe9"}),' "TEXT", com.4d.private.text.native ou com.4d.private.text.utf16), a string contida no par\xe2metro BLOB ',(0,n.jsx)(e.em,{children:"dados"})," deve terminar com o caractere NULL em Windows."]}),"\n",(0,n.jsx)(e.p,{children:"Se os dados do BLOB se adiciona corretamente a \xe1rea de transfer\xeancia, a vari\xe1vel OK toma o valor 1. Do contr\xe1rio a vari\xe1vel OK toma o valor 0 e se pode gerar um erro."}),"\n",(0,n.jsxs)(e.p,{children:["Geralmente, se utiliza o comando APPEND DATA TO PASTEBOARD para agregar m\xfaltiplas inst\xe2ncias dos mesmos dados a \xe1rea de transfer\xeancia ou para adicionar dados que n\xe3o s\xe3o de tipo TEXT ou PICT. Para adicionar novos dados a \xe1rea de transfer\xeancia, primeiro deve limpar a \xe1rea de transfer\xeancia utilizando o comando ",(0,n.jsx)(e.a,{href:"/docs/pt/commands/clear-pasteboard",children:"CLEAR PASTEBOARD"}),"."]}),"\n",(0,n.jsx)(e.p,{children:"Se quer limpar e adiciona:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["texto para a \xe1rea de transfer\xeancia, utilize o comando ",(0,n.jsx)(e.a,{href:"/docs/pt/commands/set-text-to-pasteboard",children:"SET TEXT TO PASTEBOARD"}),","]}),"\n",(0,n.jsxs)(e.li,{children:["uma imagem para a \xe1rea de transfer\xeancia, utilize o comando ",(0,n.jsx)(e.a,{href:"/docs/pt/commands/set-picture-to-pasteboard",children:"SET PICTURE TO PASTEBOARD"}),","]}),"\n",(0,n.jsxs)(e.li,{children:["um nome do caminho do arquivo arrastar/soltar, utilize o comando ",(0,n.jsx)(e.a,{href:"/docs/pt/commands/set-file-to-pasteboard",children:"SET FILE TO PASTEBOARD"}),"."]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"Entretanto, note que se um BLOB contiver texto ou uma imagem, voc\xea pode utilizar o comando APPEND DATA TO PASTEBOARD para adicionar um texto ou uma imagem para a \xe1rea de transfer\xeancias."}),"\n",(0,n.jsx)(e.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsx)(e.p,{children:"Utilizando os comandos do tema \xe1rea de transfer\xeancias e dos BLOBs, pode construir esquemas sofisticados de Cortar/Copiar/Colar para administrar dados estruturados ao inv\xe9s de uma s\xf3 pe\xe7a de informa\xe7\xe3o. No exemplo a seguir, os dois m\xe9todos de projeto SET RECORD TO CLIPBOARD e GET RECORD FROM CLIPBOARD lhe permitem tratar um registro de uma informa\xe7\xe3o a copiar desde a \xe1rea de transfer\xeancia."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de projeto ENVIAR REGISTRO A AREA DE TRANSFERENCIA\n\xa0\xa0// ENVIAR REGISTRO A AREA DE TRANSFERENCIA ( Num\xe9rico )\n\xa0\xa0// ENVIAR REGISTRO A AREA DE TRANSFERENCIA ( N\xfamero de tabela )\n\xa0\n\xa0var $1;$vlCampo;$vlTipoCampo : Integer\n\xa0var $vpTabela;$vpCampo : Pointer\n\xa0C_STRING(255;$vsDocNome)\n\xa0var $vtRegistroDados;$vtCampoDados : Text\n\xa0var $vxRegistroDados : Blob\n\xa0\n\xa0\xa0// Limpar a \xe1rea de transfer\xeancia (estar\xe1 vazio se n\xe3o h\xe1 um registro atual)\n\xa0CLEAR PASTEBOARD\n\xa0\xa0// Obter um ponteiro a tabela cujo n\xfamero se passa como par\xe2metro\n\xa0$vpTabla:=Table($1)\n\xa0\xa0// Se houver um registro atual para essa tabela\n\xa0If((Record number($vpTabla->)>=0)|(Is new record($vpTabla->)))\n\xa0\xa0// Inicializar a vari\xe1vel texto que conter\xe1 a imagem de texto do registro\n\xa0\xa0\xa0\xa0$vtRegistroDados:=""\n\xa0\xa0// Para cada campo do registro:\n\xa0\xa0\xa0\xa0For($vlCampo;1;Count fields($1))\n\xa0\xa0// Obter o tipo de campo\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET FIELD PROPERTIES($1;$vlCamp;$vlCampoTipo)\n\xa0\xa0// Obter um ponteiro at\xe9 o campo\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vpCampo:=Field($1;$vlCampo)\n\xa0\xa0// Dependendo do tipo de campo, copiar (ou n\xe3o) seus dados de maneira apropriada\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(($vlCampoTipo=Is alpha field)|($vlCampoTipo=Is text))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtCampoDados:=$vpCampo->\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(($vlCampoTipo=Is real)|($vlCampoTipo=Is integer)|($vlCampoTipo=Is longint)|($vlCampoTipo=Is date)|($vlCampoTipo=Is time))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtCampoDados:=String($vpCampo->)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlCampoTipo=Is Boolean)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtCampoDados:=String(Num($vpCampo->);"S\xedm;;N\xe3o")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// Passar e ignorar os outros tipos de campos\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtCampoDados:=""\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0// Acumular os dados do campo em uma vari\xe1vel de texto que armazena a imagem de texto do registro\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtRegistroDados:=$vtRegistroDados+Field name($1;$vlCampo)+":"+Char(9)+$vtCampoDados+CR\n\xa0\xa0// Nota: o m\xe9todo CR devolve Char(13) em Macintosh e Char(13)+Char(10) em Windows\n\xa0\xa0\xa0\xa0End for\n\xa0\xa0// Colocar a imagem de texto do registro na \xe1rea de transfer\xeancia\n\xa0\xa0\xa0\xa0SET TEXT TO PASTEBOARD($vtRegistroDados)\n\xa0\xa0// Nome do arquivo scrap na pasta Tempor\xe1rias\n\xa0\xa0\xa0\xa0$vsDocNome:=Temporary folder+"Scrap"+String(1+(Random%99))\n\xa0\xa0// Apagar o arquivo scrap se existir (\xe9 necess\xe1rio fazer um teste de erro aqui)\n\xa0\xa0\xa0\xa0DELETE DOCUMENT($vsDocNome)\n\xa0\xa0// Criar arquivo scrap\n\xa0\xa0\xa0\xa0SET CHANNEL(10;$vsDocNome)\n\xa0\xa0//Enviar o registro completo ao arquivo scrap\n\xa0\xa0\xa0\xa0SEND RECORD($vpTabla->)\n\xa0\xa0// Fechar o arquivo scrap\n\xa0\xa0\xa0\xa0SET CHANNEL(11)\n\xa0\xa0// Carregar o arquivo scrap em um BLOB\n\xa0\xa0\xa0\xa0DOCUMENT TO BLOB($vsDocNome;$vxRegistroDados)\n\xa0\xa0// N\xe3o necessitamos mais o arquivo scrap\n\xa0\xa0\xa0\xa0DELETE DOCUMENT($vsDocNome)\n\xa0\xa0// Adicionar a imagem completa do registro a \xe1rea de transfer\xeancia\n\xa0\xa0// Nota: utilizamos arbitrariamente o tipo de dados "4Drc"\n\xa0\xa0\xa0\xa0APPEND DATA TO PASTEBOARD("4Drc";$vxRegistroDados)\n\xa0\xa0// Nesse ponto, a \xe1rea de transfer\xeancia cont\xe9m:\n\xa0\xa0// (1) Uma imagem de texto do registro (como se mostra nas c\xf3pias de tela a seguir)\n\xa0\xa0// (2) Uma imagem completa do registro (incluindo imagens, subarquivos e os campos de tipo BLOB)\n\xa0End if\n'})}),"\n",(0,n.jsx)(e.p,{children:"Ao introduzir o registro a seguir:"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:o(968527).Z+"",width:"620",height:"444"})}),"\n",(0,n.jsxs)(e.p,{children:["Se aplica o m\xe9todoENVIAR REGISTRO A \xe1rea de transfer\xeancia a tabela [Empregados], a \xe1rea de transfer\xeancia conter\xe1 o texto do registro e a imagem completa do registro.",(0,n.jsx)(e.br,{}),"\n",(0,n.jsx)(e.img,{src:o(507853).Z+"",width:"342",height:"314"})]}),"\n",(0,n.jsx)(e.p,{children:"Pode colar esta imagem do registro em outro registro, utilizando o m\xe9todo GET RECORD FROM CLIPBOARD, como se mostra a continua\xe7\xe3o:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo OBTER REGISTRO DESDE AREA DE TRANSFERENCIA\n\xa0\xa0// OBTER REGISTRO DESDE AREA DE TRANSFERENCIA ( N\xfamero )\n\xa0\xa0// OBTER REGISTRO DESDE AREA DE TRANSFERENCIA ( N\xfamero de tabela )\n\xa0var $1;$vlCampo;$vlCampoTipo;$vlPosCR;$vlPosVirgula : Integer\n\xa0var $vpTabela;$vpCampo : Pointer\n\xa0C_STRING(255;$vsDocNome)\n\xa0var $vxAreaTransferenciaDados : Blob\n\xa0var $vtAreaTransferenciaDados;$vtCampoDados : Text\n\xa0\n\xa0\xa0// Obter um ponteiro at\xe9 a tabela cujo n\xfamero se passa como par\xe2metro\n\xa0$vpTabela:=Table($1)\n\xa0\xa0// Se houver um registro atual\n\xa0If((Record number($vpTabela->)>=0)|(Is new record($vpTabela->)))\n\xa0\xa0\xa0\xa0Case of\n\xa0\xa0// A \xe1rea de transfer\xeancia cont\xe9m uma imagem completa do registro?\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Pasteboard data size("4Drc")>0)\n\xa0\xa0// Se for assim, extraia o conte\xfado da \xe1rea de transfer\xeancia\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET PASTEBOARD DATA("4Drc";$vxAreaTransferenciaDados)\n\xa0\xa0// Nome para o arquivo scrap na pasta tempor\xe1ria\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsDocNome:=Temporary folder+"Scrap"+String(1+(Random%99))\n\xa0\xa0// Apagar o arquivo scrap se existir (Se deve realizar um teste de erro aqui)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE DOCUMENT($vsDocNome)\n\xa0\xa0// Salvar o BLOB no arquivo scrap\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO DOCUMENT($vsDocNome;$vxAreaTransferenciaDados)\n\xa0\xa0// Abrir o arquivo scrap\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET CHANNEL(10;$vsDocNome)\n\xa0\xa0// Recibir o registro completo do arquivo scrap\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE RECORD($vpTabela->)\n\xa0\xa0// Fechar o arquivo scrap\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET CHANNEL(11)\n\xa0\xa0// N\xe3o necessitamos mais o arquivo scrap\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE DOCUMENT($vsDocNome)\n\xa0\xa0// A \xe1rea de transfer\xeancia cont\xe9m TEXT?\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Pasteboard data size("TEXT")>0)\n\xa0\xa0// Extrair o texto da \xe1rea de transfer\xeancia\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtAreaTransferenciaDados:=Get text from pasteboard\n\xa0\xa0// Inicializar o n\xfamero de campos a incrementar\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlCampo:=0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Repeat\n\xa0\xa0// Buscar a linha de campo seguinte no texto\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlPosCR:=Position(CR;$vtAreaTransferenciaDados)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlPosCR>0)\n\xa0\xa0// Extrair a linha de campo\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtCampoDados:=Substring($vtAreaTransferenciaDados;1;$vlPosCR-1)\n\xa0\xa0// Se houver dois pontos ":"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlPosVirgula:=Position(":";$vtCampoDados)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlPosVirgula>0)\n\xa0\xa0// Tomar s\xf3 os dados de campo (eliminar o nome de campo)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtCampoDados:=Substring($vtCampoDados;$vlPosVirgula+2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0// Incrementar o n\xfamero de campo\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlCampo:=$vlCampo+1\n\xa0\xa0// A area de transferencia pode conter mais informa\xe7\xe3o da que necessitamos...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlCampo<=Count fields($vpTabela))\n\xa0\xa0// Obter o tipo de campo\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET FIELD PROPERTIES($1;$vlCampo;$vlCampoTipo)\n\xa0\xa0// Obter um ponteiro ao campo\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vpCampo:=Field($1;$vlCampo)\n\xa0\xa0// Dependendo do tipo de campo, copiar (ou n\xe3o) o texto de uma maneira apropriada\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(($vlCampoTipo=Is alpha field)|($vlCampoTipo=Is text))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vpCampo->:=$vtCampoDados\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(($vlCampoTipo=Is real)|($vlCampoTipo=Is integer)|($vlCampoTipo=Is longint))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vpCampo->:=Num($vtCampoDados)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlCampoTipo=Is date)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vpCampo->:=Date($vtCampoDados)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlCampoTipo=Is time)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vpCampo->:=Time($vtCampoDados)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlCampoTipo=Is Boolean)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vpCampo->:=($vtCampoDados="Sim")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// Passar e ignorar os outros tipos de dados de campos\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// Todos os campos foram atribu\xeddos, sair do loop\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtAreaTransferenciaDados:=""\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0// Eliminar o texto que acaba de ser extra\xeddo\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtAreaTransferenciaDados:=Substring($vtAreaTransferenciaDados;$vlPosCR+Length(CR))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// N\xe3o se encontrou um delimitador, sair do loop\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtAreaTransferenciaDados:=""\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0// Repetir enquanto houver dados\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Until(Length($vtAreaTransferenciaDados)=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("A \xe1rea de transfer\xeancia n\xe3o cont\xe9m dados que possam ser colados como um registro.")\n\xa0\xa0\xa0\xa0End case\n\xa0End if\n'})}),"\n",(0,n.jsx)(e.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,n.jsx)(e.p,{children:"Se os dados no BLOB s\xe3o adicionados corretamente \xe1 \xe1rea de transfer\xeancia, a vari\xe1vel sistema OK toma o valor 1; do contr\xe1rio OK toma o valor 0 e se poderia gerar um erro."}),"\n",(0,n.jsx)(e.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.a,{href:"/docs/pt/commands/clear-pasteboard",children:"CLEAR PASTEBOARD"}),(0,n.jsx)(e.br,{}),"\n",(0,n.jsx)(e.a,{href:"/docs/pt/commands/set-picture-to-pasteboard",children:"SET PICTURE TO PASTEBOARD"}),(0,n.jsx)(e.br,{}),"\n",(0,n.jsx)(e.a,{href:"/docs/pt/commands/set-text-to-pasteboard",children:"SET TEXT TO PASTEBOARD"})]}),"\n",(0,n.jsx)(e.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{}),(0,n.jsx)(e.th,{})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"N\xfamero do comando"}),(0,n.jsx)(e.td,{children:"403"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Thread-seguro"}),(0,n.jsx)(e.td,{children:"\u2717"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Modificar vari\xe1veis"}),(0,n.jsx)(e.td,{children:"OK"})]})]})]})]})}function p(a={}){let{wrapper:e}={...(0,s.a)(),...a.components};return e?(0,n.jsx)(e,{...a,children:(0,n.jsx)(c,{...a})}):c(a)}},968527:function(a,e,o){o.d(e,{Z:function(){return r}});let r=o.p+"assets/images/pict27501.en-cc942f97dc2671a0f59ff49bc2eb4a00.png"},507853:function(a,e,o){o.d(e,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVYAAAE6CAIAAADC++31AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGFwc1CBLOIcAAABHCSURBVHic7d3btdu2EoBh6iw3kBbcgl1AHtyCU8JJCXEtLsFuwQ8uILuEpBUdnc2ECxszGAwA3sT5vwdbosDLloQhCGKgaQIQ1c+fP989/rvf70cfCYC93W63x7/v5icvLy+HHgyAXc1V/tdff/3P0UcC4Ejv0ic/fvyorvDp06f06YcPH1Y+Irz1pA00vhgdss+6tT521N8pCwEPX79+tTfxxx9/pAf6ePz9+/fqjjHi8+fPRx9CM74YfbLPurU+tpafZAh4+Ouvv0pnnt9++y1b8uGVvVeMeN5WAF+MVupnndXHRx389u3b8rhaPqWWV0LAy6vHg19++WVZ+P79e7WZQbDfgWwFfPz4cXn8559/zk/TB+p27FdHyC3zxegjP2tZH//+++9SfVTLT+X6O6khYJatXypGsN+ajOhGTd6ievfhi9HBaPE562NHeT0EyPXTJSmC/Q7SM4PzPG+3C7KFWZuitDDdZrpExRejj9rvI2tfqT5Ohda+odgKmNn1fyLYb2+kL2Cuqx9fpXU7XZiGg7RkWj5bPX1QigV8MTpUP+tqfXz49u3b40pBln9EZLWz0AoB6fq0Ag7UfUdg5GKhdIZ3rs4Xo4/8rNWz+h6tAE/9nwj22zvkjoB9hvfgi9FB/azns7qzPhrlv76S5fUQINenFXCg9MwgG/ab6qv/E1+MXmqLz18fO8rrIcAzzGhGsN+aPDMsUWB5WlpXLZMtVLcmOwukdEVZjC9Gh1KLz18fO8orIaDpWoJgvwN5Zsiq/fK0tFx9ai+X25TF0iXZq3wx+jj7Agyt5f+fLXi/35fw44ncTzpeLZTtRgFhT6310V/+8e/vv/8+yRAAIIIlBJAsDIRGCABCe9MdyOUAcG2ysyC/IzBfHgC4JNnxp9wUZDZR4Fncbjd/hZ3nC83QFwCERggAQiMEAKHpOQLZNUN378C8nR06F5YddR/5bocKnIo1X8Dz1of5yG+vPH+F2k0CRFCZNWiRnWaXOiYfl06naTWTq6tbSwuXFhrmg5mjgH2Sl80HIAirL2CuP9kSeYJNy6gLp6R6q6/K/crCTVsA4NR2IZAuUc+oTdcO9llareTdNf95L2qATXkvBHaQ1dLxEAOg6uCbgpu26rPOBa4dAMlqBSx1pmMEojylp5WweomR1di5C0AuXPHIgZj0EODvBbBb79W+g5LWq4DlJaPPv2OPwOUd2RfAuRo43GohoKMaU/OBw5EjAIRGCABCIwQAoRECgNAIAUBo3vkCBtPps6TdpgnPVsF0AIDKmyY0PvfG/tUeQFX/fAEyLzjNulcrvFxoTCJQmpjAXsv/t1R3qpYELqZtvoD0pfTBksZfHagrLzHUKQCMiQnGJw7w7HSVHQHn1zlxmDyZewbhp1VrWbG6fXXLI7MbenZaLQxcw+gA4bRi+6PArDRTmHO/zcfatVPa/7i2FW4KjqcAjp9pO6YD4PQOTOMhYKl7WS+AUcFkyY4gcks0HaF/p607Ap5R83wBfdN7ldYyHjgfG4dRLdy0U+CSGB0IhEYIAEIjBAChEQKA0AgBQGiEACA0QgAQWmW+gCzJf1moZubZC53JfAfOLODPO2D2AVxGpRVgZNRsVwGOHYe3dWogAw1xKsU0IZnSk00HMJljge1veTUP/yQzC1SP1r87+QbKd49mBfZX7wvwVOasUaAuLL1anZJgtufMAmpMGZlfQF5YpQ+YkgAHqswX4E8EbmXnER04s4C/meDPeqx2KwBHOew3Be06duDMAvd/f8K4L+p1XGLQBMCBKhcCaYLtzvzn2Cae3rj96yT1H0cZHRcgr8NLC9VV7AopN9gUjPw7cm5kehuYsoXO3cleyS2uswCn+nwB6uOOAs48/Owltf/MeQzqjpy77tuIs2T1HQN2w+hAIDRCABAaIQAIjRAAhEYIAEIjBAChEQKA0Kz5Ata6U3076xQAapZea04B8NRWbgWURsUdOwDWyN4rZemlCXzAhTWkCdnnzLuWDJ+tXj0Jp9n1cmF1Lfv40/yfbJXB1CDgeTW0AmRme3YirY51Nc60pTx8f07+urpzCoDn0tkKyJY7z8CT1hRXC6uPSytuceqmOYAgvK2A7PQ7K3WhqdSrgL7r7XuidV0AqebuwJEzsOeU3sHZaFcTe+VLQChWCEjz3tXMdplFX71ElyU7gkjrFABqtn+6qUlrpNAdgAjq8wXIhXa3XzVn/qgpAJyv0hZAKIwOBEIjBAChEQKA0AgBQGiEACA0QgAQGiEACK2SI2APmysNqjFWWZf68x7LYyO5UN2CHAikbrm60D5C+2+xt7a1VT677D0pvautnxQ2cthvCo6T362sPsu84CwjWB38V/3mNY1odJbcNJhuEZRL2yyNwkxfndo/KWzHCgHpB1Y60xoLl080S/idyXqYlZFZ/Zn7258eLZU0zs9yC7a7+LFTuSTbb/omTLU/Sg1PWfVwvpmTeD+rNUotqR62/cUYbxBhT66fFU0tH6T62ZfKyzK3cv7/eAqgeoFgJDtk61azA0qvpvmLpUCpvloKiPKvyP5Az5spt1Nih0vnNj1vYHqqdx4bNlIMAdUrOicZLErtBXXXHV8O9Vsla2Z6JGnlsetwWlfVeGd/+40/x748yf4K+SfYC6vsj7vpU1DfwOxDMaJV3/Gjm6s7cEWyZi5nsPkLkT7t2L7zrCK/ix37Mnbd9751XJg4FzodXvc8cRDr0lsB/rPiOBkU0sNo2qlan/0bcZact2/UtJN/feWfuefH7cHVwZ6a7wjc/51pc0rOWupCY8V0yfJ4ctxj88h2ke3Xboo7S9qrt57M5THLDdqHOml/6ZREq9J2Wg/PPrbxt3qVLwCaeOcLyD5p+VgutDeiLrGfVo+zVN5zBd5U0v9uGO9P05E7V/G8AzJCtX4ugwfQsTq2w+jAcEaaA7ieJx4ahD6t3fvbHQnOgFYAEBohAAiNEACERggAQiMEAKG5MgUnkSu2Cnv7pYFG6tg1Z7FsRzeR6KYOUKVXHBdWDAGywme1ZRqrG61bWKp0WlFLA06WYmkgUPel3iTPRvtzIx0XVskRyBbekqTU5UE2KDUtVhone6pB4KUB8/PTwwfMA5vq6QswTsI7U6NMR3yhhiOsFboD0/NkWv2Wdvgq0jSkdNeyqTK1X19MRAFEtf4dgY2aBvd/efbeVJ8Pb8sAB9JDQGtFUssbfQHG9se74gejQLb6qbotgNUVWwFpf7h6a20q3HJz7lhuP22TOzvhS4fXQY0C1H9cnjUuYN1kfk+Bkbx0IyG/9NQoRrVHECskCzPTC/C8VggB1HzgeZEjAIRGCABCIwQAoRECgNAIAUBolWTh2Z59/qX9MkoH2IIeAkrJwnKhZ0U/6jmwM+tCIJsFQD7Ixuc6y3RMIiC3DGAVVprQZP7cfZq6Z0yzkZXpRtMA2EIlTWgqV11nik5WpmMSgSwM0RAAVlRJE/I02u06udbZm5oPbGH0pmBrzWydRCC9mljrmgLAojh9qMyWl5f9MqtfLePP6rcnKQCwOv1CoNR6VzPqm7LuWycR6NgCAD9GBwKhEQKA0AgBQGiEACA0QgAQGiEACI0QAIRmJQunlsHCztvyrdMNjKQJy315fvvEMxkBycu4vPrQoI6fCdiz5siRiKUxS6WSdh4EcG2V3xGQ6UBpc6BpZhH1DKxWs9JZfaOYomZDzQGCKIDLq08ZUqp41bOouql0lWyhUbJPd66BzH0Arqr/14Q2rSRZvTX2NZ+rjfLZ1UHHARARcGGV6UOP+uo37bc6u0n33ukOxOUVk4Wn3q/+Fin9zumJpre9fSseAHBV1oWAfWPPuFOQNc7nC/tsSVYs62Vsuqcoj6S6O89mgQga5guoZvLbr1a3WbqZ17GvpoUdy4HLYHQgEFrPHQHOjcBl0AoAQiMEAKERAoDQCAFAaIQAILTKAOGZkSlkvDquKe1/cCEQkzVlyEmqhyftf3Dh3n8ScBqVAcLq3CGTbzqAdMCvnFzAnnQAwD70voBSm9lI4y+9Op6u0532D6Cq2ApYzs/OqUFKr8rUnezMb88FkG6fRjuwOuuOgDGZT8Z+tbpxAEdpvinY1xaYqa0Jo5FP+x/YWnHKkDSTf0pqr5GE62+oNxUrHcmKC4GweuYLUBP77VcNm84F0DRrABBQ//ShrZiuBzih/UIANR84IXIEgNAIAUBohAAgNEIAEBohAAit/6dETo6RP4DHCr8peMLKxrBiwKltypDSpABTIaFQTTqW62ZLBqcYSNcFYGvrC5CTAmTDgbOUwSXdOF04U0umL/UhoRho0jY60Fk5B8/AI1MMTCKaEBEAQ0MIyGbdM0puVOs8m5VXDVscCXAZ1sRhRhp/3846VmydYgBAk2JfQJpXn53/s1Or7Bq4JUortubtcz4HtmBdCMhaV5oLQJ04wN6UvX1b0xUBAMNOycJ9o4yYYgDY2k4hoK8OU/OBrZEjAIRGCABCIwQAoRECgNAIAUBoVqbgIuuZ9+cC2ow7hVlSYGnLaiqhXQZAqvKbgqU0PvUlY7lkb0c9kizX0N5guhBASf1CQE37lS+pjMH8Rn12nrdl2lL3cEMgrJWHBnWM5/NUeOdmGU0ItFq5O1BOKOKptMale3YJkE5SNImq7r8MATA78o4AHXXA4eohQP1lbvlSaV170oHSjQB7C8QOYC2uScSzXOC0WpbuFzrrZzWD0N5dazEAGT0E2FVoZEaAVTbStC/CAWBgdCAQGiEACI0QAIRGCABCIwQAoRECgNAIAUBorl8W3nk0XnU+Ankk+6wCXM/pWgGe3yaWvy+2wyrAJTUnC8vzpJq3nz7IatT97c8Ed+vYCMkFQMaVI5AtWaq0/H3B0hYG6x4pAMBGXL8p2N0klklEacahnxp6OgIBsQPI7NQXMB5NAGxhzRBQnQI0LTkeCzo2ssp+gStpCwFpU3x5uiz0zB1SbYrbuyjNF7bDKsAlueYLyKYMMcrLB56n9t5LC/1HNbIKcG2nGxcAYE+EACA0QgAQGiEACI0QAIRGCABCIwQAoVnzBSxKd8tlXmBpC6Via8kGJlXzlwDMXGlCHWQe8eAGq6j2QAfvfAHqpACtO1NnEyht1p6YoLT90g+c9R0wcHlWX8DWSTXpbCLZzCLdE/ikJZkFCKja6kLAozpi39klsbyahg8AHs0Th+2pNQYtUQCAU/NNwQPrmOfChAt+oIk3BHgmBVhR2kfQ2iWR3YAg/x8wuOYLyBZWZwcobUct73ls78W5IwASowOB0AgBQGiEACA0QgAQGiEACI0QAIRGCABCa5gvgAE2wPVYrYCRHDt+ugt4Cj1pQs7E/ultOrBahjYFcKyeNKFqYr8cpS/LADgDqxWw1NVqYn8Hzv/AGRw5ZQiAwx12U5D+QuAMRkNAKSdfdg2Qtw+cUM98AcZjT3l7LQB7YnQgEBohAAiNEACERggAQiMEAKERAoDQCAFAaHoIyIbuLU/VIX2M8wOeVz1ZOB3Sx3ge4GIqIUCdGsDI+U2TCxkODJxfPVnY+NlvOUFIqTyAc1q/OzBtCBAOgJOrzB04tUzyo04lBuDMKq2A7igwcacAeAb1CwE1CqRTAKQnf7oDgOfimi8gmwik9Li0FoDTYnQgEBohAAiNEACERggAQiMEAKERAoDQCAFAaIQAIDRCABAaIQAIjRAAhEYIAEIjBAChEQKA0AgBQGiEACA0QgAQGiEACI0QAIRGCABCIwQAoRECgNAIAUBohAAgNEIAEBohAAiNEACERggAQiMEAKERAoDQCAFAaIQAIDRCABDaO7nodrvtfxwA+gxWWCUE3O/3kS0C2M2j/g9WWCUEAHguLy8v3evSFwCERggArunDq2oxQgBwQY/K/7g6+PLlS7UkIQC4mrn+f//+/fPnz9W2ACEAuJSs/lfbAoQA4Dpk/a+2BQgBwEUY9d9oCzAuALiIR4V/VHW1/s+P1bUIAcBFvH/VVP8nQgBwMWpbwChPCAAuRbYF7PKEAOCClrZAtSTJwsAFzW0BT8k3IeC/r7Y5JABn9CYEjKQcAnhGDA0CQvunFcD5HwCAeH6+OvooABzjf1b4dwHt7IxfAAAAAElFTkSuQmCC"},250065:function(a,e,o){o.d(e,{Z:function(){return d},a:function(){return t}});var r=o(667294);let n={},s=r.createContext(n);function t(a){let e=r.useContext(s);return r.useMemo(function(){return"function"==typeof a?a(e):{...e,...a}},[e,a])}function d(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(n):a.components||n:t(a.components),r.createElement(s.Provider,{value:e},a.children)}}}]);