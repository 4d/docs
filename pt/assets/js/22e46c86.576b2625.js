"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25276"],{634665:function(e,o,r){r.r(o),r.d(o,{metadata:()=>n,contentTitle:()=>c,default:()=>m,assets:()=>t,toc:()=>i,frontMatter:()=>s});var n=JSON.parse('{"id":"commands-legacy/receive-packet","title":"RECEIVE PACKET","description":"RECEIVE PACKET ( {docRef ;} receiveVar ; stopChar | numBytes )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/receive-packet.md","sourceDirName":"commands-legacy","slug":"/commands/receive-packet","permalink":"/docs/pt/commands/receive-packet","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freceive-packet.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"receive-packet","title":"RECEIVE PACKET","slug":"/commands/receive-packet","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RECEIVE BUFFER","permalink":"/docs/pt/commands/receive-buffer"},"next":{"title":"RECEIVE RECORD","permalink":"/docs/pt/commands/receive-record"}}'),a=r("785893"),d=r("250065");let s={id:"receive-packet",title:"RECEIVE PACKET",slug:"/commands/receive-packet",displayed_sidebar:"docs"},c=void 0,t={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Exemplo 4",id:"exemplo-4",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"RECEIVE PACKET"})," ( {",(0,a.jsx)(o.em,{children:"docRef"})," ;} ",(0,a.jsx)(o.em,{children:"receiveVar"})," ; stopChar | numBytes )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Par\xe2metro"}),(0,a.jsx)(o.th,{children:"Tipo"}),(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"docRef"}),(0,a.jsx)(o.td,{children:"Time"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"N\xfamero de refer\xeancia do documento, o canal atual (porta serial ou documento)"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"receiveVar"}),(0,a.jsx)(o.td,{children:"Text, Blob"}),(0,a.jsx)(o.td,{children:"\u2190"}),(0,a.jsx)(o.td,{children:"Vari\xe1vel a receber os dados"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"stopChar | numBytes"}),(0,a.jsx)(o.td,{children:"String, Inteiro longo"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Caractere(s) no qual parar a recep\xe7\xe3o, ou N\xfamero de bytes a receber"})]})]})]}),"\n",(0,a.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsx)(o.p,{children:"RECEIVE PACKET l\xea caracteres a partir de uma porta serial ou de um documento."}),"\n",(0,a.jsxs)(o.p,{children:["Se ",(0,a.jsx)(o.em,{children:"docRef"})," \xe9 especificado, este comando recupera dados de um documento aberto, usando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/open-document",children:"Open document"}),", ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/create-document",children:"Create document"})," ou ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/append-document",children:"Append document"}),". Se ",(0,a.jsx)(o.em,{children:"docRef"})," for omitido, o comando recupera dados da porta serial ou o documento aberto usando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/set-channel",children:"SET CHANNEL"}),"."]}),"\n",(0,a.jsxs)(o.p,{children:["Seja qual for a fonte, os caracteres lidos s\xe3o retornados em ",(0,a.jsx)(o.em,{children:"receiveVar"}),", que deve ser um texto, String ou vari\xe1vel BLOB. Se os caracteres foram enviados pelo comando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/send-packet",children:"SEND PACKET"}),", o tipo deve corresponder ao do pacote enviado."]}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.strong,{children:"Notas:"})}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["Quando o pacote recebido \xe9 do tipo BLOB, o comando n\xe3o leva em conta qualquer conjunto de caracteres definido pelo comando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/use-character-set",children:"USE CHARACTER SET"}),". O BLOB \xe9 retornado sem nenhuma modifica\xe7\xe3o"]}),"\n",(0,a.jsxs)(o.li,{children:["Quando o pacote recebido \xe9 do tipo texto, o comando RECEIVE PACKET suporta Byte Order Marks (BOM). Neste caso, se o conjunto de caracteres atual \xe9 do tipo Unicode (UTF-8, UTF-16 ou UTF-32), 4D tenta identificar um BOM entre os primeiros bytes recebidos. Se algum for detectado, ele \xe9 filtrado da vari\xe1vel ",(0,a.jsx)(o.em,{children:"receiveVar"})," e 4D usa o conjunto de caracteres que define, em vez do conjunto de caracteres atual."]}),"\n"]}),"\n",(0,a.jsxs)(o.p,{children:["Para ler um determinado n\xfamero de caracteres, passe este n\xfamero em ",(0,a.jsx)(o.em,{children:"numBytes"}),". Se a vari\xe1vel ",(0,a.jsx)(o.em,{children:"receiveVar"})," \xe9 do tipo de texto, em uma \xfanica chamada voc\xea pode ler at\xe9 2 GB de texto (valor te\xf3rico)."]}),"\n",(0,a.jsxs)(o.p,{children:["Para receber dados at\xe9 que uma cadeia particular (composta por um ou mais caracteres) passe essa cadeia em ",(0,a.jsx)(o.em,{children:"stopChar"})," (a cadeia n\xe3o \xe9 devolvida em ",(0,a.jsx)(o.em,{children:"receiveVar"}),")."]}),"\n",(0,a.jsxs)(o.p,{children:["Neste caso, se a seq\xfc\xeancia de caracteres especificada pelo ",(0,a.jsx)(o.em,{children:"stopChar"})," n\xe3o \xe9 encontrada:"]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"Quando RECEIVE PACKET estiver lendo um documento, ele ir\xe1 parar de ler no final do documento."}),"\n",(0,a.jsxs)(o.li,{children:["Quando RECEIVE PACKET estiver lendo a partir de uma porta serial, ele vai tentar esperar indefinidamente at\xe9 que o tempo limite (se houver) haja decorrido (ver ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/set-timeout",children:"SET TIMEOUT"}),") ou at\xe9 que o usu\xe1rio interrompa a recep\xe7\xe3o (veja abaixo)."]}),"\n"]}),"\n",(0,a.jsxs)(o.p,{children:["Durante a execu\xe7\xe3o do RECEIVE PACKET, o usu\xe1rio pode interromper a recep\xe7\xe3o pressionando Ctrl-Alt-Shift (Windows) ou Command + Option + Shift (Macintosh). Esta interrup\xe7\xe3o gera um erro -9994, que voc\xea pode pegar com um m\xe9todo de tratamento de erros instalado usando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/on-err-call",children:"ON ERR CALL"}),". Normalmente, voc\xea s\xf3 ter\xe1 de lidar com a interrup\xe7\xe3o de uma recep\xe7\xe3o na comunica\xe7\xe3o atrav\xe9s de uma porta serial."]}),"\n",(0,a.jsx)(o.p,{children:"Ao ler um documento, o primeiro RECEIVE PACKET come\xe7a a ler no in\xedcio do documento. A leitura de cada pacote subseq\xfcente come\xe7a no caractere ap\xf3s o \xfaltimo byte lido."}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Nota:"})," Este comando \xe9 \xfatil para um documento aberto com ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/set-channel",children:"SET CHANNEL"}),". Por outro lado, para um documento aberto com o ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/open-document",children:"Open document"}),", ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/create-document",children:"Create document"})," ou ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/append-document",children:"Append document"})," voc\xea pode usar os comandos ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/get-document-position",children:"Get document position"})," e ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/set-document-position",children:"SET DOCUMENT POSITION"})," para obter e alterar o local no documento onde acontecer\xe1 a pr\xf3xima escrita (",(0,a.jsx)(o.a,{href:"/docs/pt/commands/send-packet",children:"SEND PACKET"}),") ou leitura (RECEIVE PACKET)."]}),"\n",(0,a.jsx)(o.p,{children:"Ao tentar ler ap\xf3s o final de um arquivo, RECEIVE PACKET retornar\xe1 os dados lidos at\xe9 aquele ponto e a vari\xe1vel OK ser\xe1 definido como 1. Ent\xe3o, o pr\xf3ximo RECEIVE PACKET ir\xe1 retornar uma string vazia e definir a vari\xe1vel OK para zero."}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Nota:"})," Em modo n\xe3o-Unicode (modo de compatibilidade), quando voc\xea usar o comando RECEIVE PACKET para ler caracteres de um documento do Windows e n\xe3o quiser usar mapas para converter caracteres ASCII em caracteres Windows Mac OS, voc\xea pode usar a fun\xe7\xe3o ",(0,a.jsx)(o.em,{children:"Win to Mac"}),"."]}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,a.jsxs)(o.p,{children:["O exemplo a seguir l\xea 20 caracteres de uma porta serial na vari\xe1vel ",(0,a.jsx)(o.em,{children:"getTwenty"}),":"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"\xa0RECEIVE PACKET(getTwenty;20)\n"})}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,a.jsxs)(o.p,{children:["O exemplo a seguir l\xea os dados do documento referenciado pela vari\xe1vel ",(0,a.jsx)(o.em,{children:"myDoc"})," na vari\xe1vel ",(0,a.jsx)(o.em,{children:"vData"}),". Ele l\xea at\xe9 encontrar um retorno de carro:"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"\xa0RECEIVE PACKET(myDoc;vData;Char(Carriage return))\n"})}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,a.jsxs)(o.p,{children:["O exemplo a seguir l\xea os dados do documento referenciado pela vari\xe1vel ",(0,a.jsx)(o.em,{children:"myDoc"})," na vari\xe1vel ",(0,a.jsx)(o.em,{children:"vData"}),". Ele l\xea at\xe9 encontrar o  (Fim da c\xe9lula da tabela)"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0RECEIVE PACKET(myDoc;vData;"")\n'})}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,a.jsx)(o.p,{children:"O exemplo a seguir l\xea dados de um documento em campos. Os dados s\xe3o armazenados como campos de comprimento fixo. O m\xe9todo chama uma subrotina para retirar espa\xe7os \xe0 direita (espa\xe7os no final da cadeia). A sub-rotina segue o m\xe9todo:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0$vhDocRef :=Open document("";"TEXT")\xa0// Abertura de um documento de tipo TEXTO\n\xa0If(OK=1)\xa0// Se o documento est\xe1 aberto\n\xa0\xa0\xa0\xa0Repeat\xa0// Loop at\xe9 que n\xe3o haja mais dados\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE PACKET($vhDocRef;$Var1;15)\xa0// Leitura de 15 caracteres\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE PACKET($vhDocRef;$Var2;15)\xa0// Faz o mesmo para o segundo campo\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(($Var1#"")|($Var2#""))\xa0// Se pelo menos um dos campos n\xe3o estiver vazio\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CREATE RECORD([Pessoas])\xa0// Cria um novo registro\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Pessoas]Nome:=Strip($Var1)\xa0// Salva o nome\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Pessoas]Sobrenome:=Strip($Var2)\xa0// Salva o sobrenome\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SAVE RECORD([Pessoas])\xa0// Salvar o registro\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0Until(OK=0)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\xa0// Fecha o documento\n\xa0End if\n'})}),"\n",(0,a.jsx)(o.p,{children:"Os espa\xe7os no final dos dados s\xe3o removidos atrav\xe9s do seguinte m\xe9todo, chamado Strip:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0For($i;Length($1);1;-1)\xa0// Loop desde o fim da string ao in\xedcio\xa0\n\xa0\xa0\xa0\xa0If($1[[$i]]#" ")\xa0// Se n\xe3o \xe9 um espa\xe7o\u2026\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$i :=-$i \xa0// For\xe7ar o loop a parar\xa0\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n\xa0$0:=Delete string($1;-$i;Length($1))\xa0// Apagar os espa\xe7os\n'})}),"\n",(0,a.jsx)(o.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,a.jsx)(o.p,{children:"Depois de um chamado a RECEIVE PACKET, a vari\xe1vel sistema OK recebe o valor 1 se o pacote \xe9 recebido sem erros. Caso contr\xe1rio, a vari\xe1vel sistema OK recebe o valor 0."}),"\n",(0,a.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.a,{href:"/docs/pt/commands/get-document-position",children:"Get document position"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/commands/receive-buffer",children:"RECEIVE BUFFER"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/commands/send-packet",children:"SEND PACKET"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/commands/set-document-position",children:"SET DOCUMENT POSITION"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/commands/set-timeout",children:"SET TIMEOUT"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/commands/use-character-set",children:"USE CHARACTER SET"})]}),"\n",(0,a.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"N\xfamero do comando"}),(0,a.jsx)(o.td,{children:"104"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Thread-seguro"}),(0,a.jsx)(o.td,{children:"\u2713"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Modificar vari\xe1veis"}),(0,a.jsx)(o.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,d.a)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return c},a:function(){return s}});var n=r(667294);let a={},d=n.createContext(a);function s(e){let o=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(d.Provider,{value:o},e.children)}}}]);