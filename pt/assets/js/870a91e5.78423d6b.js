"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41583"],{363759:function(e,r,o){o.r(r),o.d(r,{default:()=>p,frontMatter:()=>d,metadata:()=>n,assets:()=>i,toc:()=>c,contentTitle:()=>t});var n=JSON.parse('{"id":"commands-legacy/php-execute","title":"PHP Execute","description":"PHP Execute ( rotaScript {; nomeFuncao {; resultadoPHP {; param} {; param2 ; ... ; paramN}}} ) : Boolean","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/php-execute.md","sourceDirName":"commands-legacy","slug":"/commands/php-execute","permalink":"/docs/pt/20-R7/commands/php-execute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fphp-execute.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"php-execute","title":"PHP Execute","slug":"/commands/php-execute","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PHP","permalink":"/docs/pt/20-R7/category/php"},"next":{"title":"PHP GET FULL RESPONSE","permalink":"/docs/pt/20-R7/commands/php-get-full-response"}}'),s=o("785893"),a=o("250065");let d={id:"php-execute",title:"PHP Execute",slug:"/commands/php-execute",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Convers\xe3o dos dados devolvidos",id:"convers\xe3o-dos-dados-devolvidos",level:5},{value:"Usar vari\xe1veis de ambiente",id:"usar-vari\xe1veis-de-ambiente",level:5},{value:"Fun\xe7\xf5es especiais",id:"fun\xe7\xf5es-especiais",level:5},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Exemplo 4",id:"exemplo-4",level:4},{value:"Exemplo 5",id:"exemplo-5",level:4},{value:"Exemplo 6",id:"exemplo-6",level:4},{value:"Exemplo 7",id:"exemplo-7",level:4},{value:"Exemplo 8",id:"exemplo-8",level:4},{value:"Exemplo 9",id:"exemplo-9",level:4},{value:"Exemplo 10",id:"exemplo-10",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let r={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"PHP Execute"})," ( ",(0,s.jsx)(r.em,{children:"rotaScript"})," {; ",(0,s.jsx)(r.em,{children:"nomeFuncao"})," {; ",(0,s.jsx)(r.em,{children:"resultadoPHP"})," {; ",(0,s.jsx)(r.em,{children:"param"}),"} {; ",(0,s.jsx)(r.em,{children:"param2"})," ; ... ; ",(0,s.jsx)(r.em,{children:"paramN"}),"}}} ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Par\xe2metro"}),(0,s.jsx)(r.th,{children:"Tipo"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"rotaScript"}),(0,s.jsx)(r.td,{children:"Text"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:'Rota de acesso ao script PHP ou "" para executar a fun\xe7\xe3o PHP'})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"nomeFuncao"}),(0,s.jsx)(r.td,{children:"Text"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Fun\xe7\xe3o PHP a ser executada"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"resultadoPHP"}),(0,s.jsx)(r.td,{children:"*, Variable, Field"}),(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:"Resultado da fun\xe7\xe3o PHP executada ou * para n\xe3o receber nenhum resultado"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"param"}),(0,s.jsx)(r.td,{children:"Text, Boolean, Real, Integer, Date, Time"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Par\xe2metros da fun\xe7\xe3o PHP"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Resultado"}),(0,s.jsx)(r.td,{children:"Boolean"}),(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:"True =execu\xe7\xe3o correta; False = erro de execu\xe7\xe3o"})]})]})]}),"\n",(0,s.jsx)(r.admonition,{title:"Compatibilidade",type:"info",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"PHP est\xe1 obsoleto em 4D"}),". Recomenda-se usar a classe ",(0,s.jsx)(r.a,{href:"/docs/pt/20-R7/API/SystemWorkerClass",children:(0,s.jsx)(r.code,{children:"4D.SystemWorker class"})}),"."]})}),"\n",(0,s.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsx)(r.p,{children:"O comando PHP Execute permite executar um script ou uma fun\xe7\xe3o PHP."}),"\n",(0,s.jsxs)(r.p,{children:["Passe no par\xe2metro ",(0,s.jsx)(r.em,{children:"rutaScrip"}),"t a rota de acesso do arquivo de script PHP a executar. Pode ser uma rota de acesso relativa se o arquivo est\xe1 localizado junto \xe0 estrutura do banco ou de uma rota absoluta. A rota de acesso pode ser expressa em sintaxe sistema ou POSIX.",(0,s.jsx)(r.br,{}),'\nSe deseja executar diretamente uma fun\xe7\xe3o PHP padr\xe3o, passe uma string vazia ("") em ',(0,s.jsx)(r.em,{children:"rotaScript"}),". O nome da fun\xe7\xe3o deve ser passada no segundo par\xe2metro."]}),"\n",(0,s.jsxs)(r.p,{children:["Passe no par\xe2metro ",(0,s.jsx)(r.em,{children:"nomFun\xe7\xe3o"})," um nome de fun\xe7\xe3o PHP se quer executar uma fun\xe7\xe3o espec\xedfica no script ",(0,s.jsx)(r.em,{children:"rotaScript"}),". Se passa uma string vazia ou omite o par\xe2metro ",(0,s.jsx)(r.em,{children:"nomFun\xe7\xe3o"}),", o script se executa completamente."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Nota:"})," PHP considera as mai\xfasculas e min\xfasculas dos caracteres no nome da fun\xe7\xe3o. N\xe3o utilize par\xeanteses, introduza unicamente o nome da fun\xe7\xe3o."]}),"\n",(0,s.jsxs)(r.p,{children:["O par\xe2metro ",(0,s.jsx)(r.em,{children:"resultPHP"})," recebe o resultado da execu\xe7\xe3o da fun\xe7\xe3o PHP. Pode passar:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"uma vari\xe1vel, um array ou um campo para receber o resultado,"}),"\n",(0,s.jsx)(r.li,{children:"o caractere * se a fun\xe7\xe3o n\xe3o devolve nenhum resultado ou se n\xe3o quer recuperar o resultado."}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["O par\xe2metro ",(0,s.jsx)(r.em,{children:"resultPHP"})," pode ser de tipo texto, inteiro longo, real, booleano ou data assim como tamb\xe9m (exceto para arrays) BLOB ou hora. 4D efetuar\xe1 a convers\xe3o dos dados e os ajustes necess\xe1rios seguindo os princ\xedpios descritos na se\xe7\xe3o a continua\xe7\xe3o."]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["se passa um nome de fun\xe7\xe3o no par\xe2metro ",(0,s.jsx)(r.em,{children:"nomFuncao"}),", ",(0,s.jsx)(r.em,{children:"resultPHP"})," receber\xe1 o que o desenvolvedor PHP devolve com o comando return do corpo da fun\xe7\xe3o."]}),"\n",(0,s.jsxs)(r.li,{children:["Se utiliza o comando sem passar um nome de fun\xe7\xe3o no par\xe2metro ",(0,s.jsx)(r.em,{children:"nomFuncao"}),", ",(0,s.jsx)(r.em,{children:"r"})," ",(0,s.jsx)(r.em,{children:"esultPHP"})," receber\xe1 o que o desenvolvedor PHP devolveu com o comando echo ( ou um comando similar)."]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["Se chama a uma fun\xe7\xe3o PHP que espera argumentos, utilize os par\xe2metros ",(0,s.jsx)(r.em,{children:"param1...N"})," para passar um ou v\xe1rios valores. Os valores devem estar separados por ponto e v\xedrgula. Pode passar valores de tipo alfa, texto, booleano, real, inteiro, inteiro longo, data ou hora. As imagens e os BLOBs n\xe3o s\xe3o aceitos. Pode enviar um array; neste caso deve passar um ponteiro no array ao comando PHP Execute, do contr\xe1rio o \xedndice atual do array se enviar\xe1 como um inteiro (ver o exemplo). O comando aceita todos os tipos de arrays exceto os arrays ponteiro, os arrays imagem e os arrays 2D.",(0,s.jsx)(r.br,{}),"\nOs par\xe2metros ",(0,s.jsx)(r.em,{children:"param1...N"})," s\xe3o enviados em PHP no formato JSON em UTF-8. Eles s\xe3o codificados automaticamente com o comando PHP ",(0,s.jsx)(r.strong,{children:"json_decode"})," antes de ser enviados \xe0 fun\xe7\xe3o PHP ",(0,s.jsx)(r.em,{children:"nomeFun\xe7ao"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Nota:"})," por raz\xf5es t\xe9cnicas, o tamanho dos par\xe2metros passados atrav\xe9s do protocolo FastCGI n\xe3o deve passar os 64 KB. Deve considerar esta limita\xe7\xe3o se utiliza par\xe2metros de tipo Texto."]}),"\n",(0,s.jsxs)(r.p,{children:["O comando devolve True se a execu\xe7\xe3o for realizada corretamente do lado de 4D, em outras palavras, se o lan\xe7amento do ambiente de execu\xe7\xe3o, a abertura do script e o estabelecimento da comunica\xe7\xe3o com o int\xe9rprete PHP foram exitosos. Do contr\xe1rio, se gera um erro, que pode interceptar com o comando ",(0,s.jsx)(r.a,{href:"/docs/pt/20-R7/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"})," e analizar com ",(0,s.jsx)(r.a,{href:"/docs/pt/20-R7/commands/last-errors",children:"Last errors"}),".",(0,s.jsx)(r.br,{}),"\nAl\xe9m disso, o script mesmo pode gerar erros PHP. Neste caso, deve utilizar o comando ",(0,s.jsx)(r.a,{href:"/docs/pt/20-R7/commands/php-get-full-response",title:"PHP GET FULL RESPONSE",children:"PHP GET FULL RESPONSE"})," para analizar a fonte do erro (ver exemplo 4)."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Nota:"})," PHP permite configurar a gest\xe3o de erros. Para maior informa\xe7\xe3o, consulte por exemplo a p\xe1gina: ",(0,s.jsx)(r.a,{href:"http://www.php.net/manual/en/errorfunc.configuration.php#ini.error-reporting",children:"http://www.php.net/manual/en/errorfunc.configuration.php#ini.error-reporting"}),"."]}),"\n",(0,s.jsx)(r.h5,{id:"convers\xe3o-dos-dados-devolvidos",children:"Convers\xe3o dos dados devolvidos"}),"\n",(0,s.jsxs)(r.p,{children:["A tabela a seguir especifica como 4D interpreta e converte os dados devolvidos em fun\xe7\xe3o do tipo do par\xe2metro ",(0,s.jsx)(r.em,{children:"resultPHP"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:(0,s.jsxs)(r.strong,{children:["Tipo do par\xe2metro ",(0,s.jsx)(r.em,{children:"resultPHP"})]})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Processo 4D"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Exemplo"})})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"BLOB"}),(0,s.jsx)(r.td,{children:"4D recupera os dados recebidos sem nenhuma modifica\xe7\xe3o(*)."}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Texto"}),(0,s.jsxs)(r.td,{children:["4D espera os dados codificados em UTF-8 (*). O desenvolvedor PHP pode necessitar utilizar o comando PHP ",(0,s.jsx)(r.strong,{children:"utf8_encode"}),"."]}),(0,s.jsx)(r.td,{children:"Exemplo de script PHP: echo utf8_encode(meuTexto)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Data"}),(0,s.jsx)(r.td,{children:'4D espera uma data enviada como uma string em formato RFC 3339 (tamb\xe9m chamado DATE_ATOM em PHP). Este formato \xe9 de tipo "AAAA-MM-DDTHH:MM:SS", por exemplo: 2005-08-15T15:52:01+00:00. 4D ignora a parte hora e devolve a data em UTC.'}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Hora"}),(0,s.jsx)(r.td,{children:"4D espera uma hora enviada em forma de string em formato RFC 3339 (ver o tipo Data). 4D ignora a parte data e devolve o n\xfamero de segundos transcorridos desde a meia noite considerando a data na zona hor\xe1ria local."}),(0,s.jsx)(r.td,{children:"Exemplo de script PHP para enviar 2h30'45\": echo date( DATE_ATOM, mktime( 2,30,45))"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Inteiro ou Real"}),(0,s.jsx)(r.td,{children:"4D interpreta o valor num\xe9rico expresso com n\xfameros, signo + ou - e/ou o exponente com o prefixo 'e'. Todo car\xe1cter '.' ou ',' se interpreta como um separador decimal."}),(0,s.jsx)(r.td,{children:"Exemplo de script PHP: echo -1.4e-16;"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Booleano"}),(0,s.jsx)(r.td,{children:'4D devolve True se recebe a string "true" desde PHP ou se a avalia\xe7\xe3o num\xe9rica d\xe1 um valor n\xe3o nulo.'}),(0,s.jsx)(r.td,{children:"Exemplo de script PHP: echo (a==b);"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Array"}),(0,s.jsx)(r.td,{children:"4D considera que o array PHP foi devolvido no formato JSON."}),(0,s.jsx)(r.td,{children:'Exemplo de script PHP para devolver um array dos textos: echo json_encode( array( "ola", "mundo"));'})]})]})]}),"\n",(0,s.jsxs)(r.p,{children:["(*) Por padr\xe3o, n\xe3o s\xe3o devolvidos os cabe\xe7alhos HTTP:",(0,s.jsx)(r.br,{}),"\n- Se utiliza ",(0,s.jsx)(r.a,{href:"/docs/pt/20-R7/commands/php-execute",children:"PHP Execute"})," ao passar uma fun\xe7\xe3o no par\xe2metro ",(0,s.jsx)(r.em,{children:"nomFuncao"}),", os cabe\xe7alhos HTTP nunca s\xe3o devolvidos em ",(0,s.jsx)(r.em,{children:"resultPHP"}),". S\xf3 est\xe3o dispon\xedveis atrav\xe9s do comando ",(0,s.jsx)(r.a,{href:"/docs/pt/20-R7/commands/php-get-full-response",children:"PHP GET FULL RESPONSE"}),".",(0,s.jsx)(r.br,{}),"\n- Se utiliza ",(0,s.jsx)(r.a,{href:"/docs/pt/20-R7/commands/php-execute",children:"PHP Execute"})," sem um nome de fun\xe7\xe3o (o par\xe2metro ",(0,s.jsx)(r.em,{children:"nomFun\xe7ao"})," se omite ou cont\xe9m uma string vazia), pode devolver os cabe\xe7alhos HTTP fixando a op\xe7\xe3o PHP Raw result em True utilizando o comando ",(0,s.jsx)(r.a,{href:"/docs/pt/20-R7/commands/php-set-option",children:"PHP SET OPTION"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Nota:"})," se precisar recuperar grandes volumes de dados utilizando PHP, \xe9 mais eficiente passar pelo canal do buffer ",(0,s.jsx)(r.em,{children:"stdOut"})," (comando ",(0,s.jsx)(r.strong,{children:"echo"})," ou similar) que pelo retorno de fun\xe7\xe3o. Para maior informa\xe7\xe3o, consulte a descri\xe7\xe3o do comando ",(0,s.jsx)(r.a,{href:"/docs/pt/20-R7/commands/php-get-full-response",children:"PHP GET FULL RESPONSE"}),"."]}),"\n",(0,s.jsx)(r.h5,{id:"usar-vari\xe1veis-de-ambiente",children:"Usar vari\xe1veis de ambiente"}),"\n",(0,s.jsxs)(r.p,{children:["Pode utilizar o comando ",(0,s.jsx)(r.a,{href:"/docs/pt/20-R7/commands/set-environment-variable",title:"SET ENVIRONMENT VARIABLE",children:"SET ENVIRONMENT VARIABLE"})," para definir as vari\xe1veis de ambiente utilizadas pelo script. Aten\xe7\xe3o: depois de chamar ",(0,s.jsx)(r.a,{href:"/docs/pt/20-R7/commands/launch-external-process",title:"LAUNCH EXTERNAL PROCESS",children:"LAUNCH EXTERNAL PROCESS"})," ou PHP Execute, o conjunto das vari\xe1veis de ambiente se apaga."]}),"\n",(0,s.jsx)(r.h5,{id:"fun\xe7\xf5es-especiais",children:"Fun\xe7\xf5es especiais"}),"\n",(0,s.jsx)(r.p,{children:"4D oferece as seguintes fun\xe7\xf5es especiais:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"quit_4d_php"}),": permite sair do int\xe9rprete PHP e de todos seus processos filhos. Se ao menos um dos processos filho est\xe1 executando um script, o int\xe9rprete n\xe3o sai e o comando PHP Execute devolve False."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"relaunch_4d_php"}),": permite relan\xe7ar o int\xe9rprete PHP."]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Note que o int\xe9rprete \xe9 relan\xe7ado automaticamente quando a primeira peti\xe7\xe3o \xe9 enviada por PHP Execute."}),"\n",(0,s.jsx)(r.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsx)(r.p,{children:'Chamada do script "myPhpFile.php" sem fun\xe7\xe3o. Este \xe9 o conte\xfado do script:'}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-PHP"})}),"\n",(0,s.jsx)(r.p,{children:"O c\xf3digo 4D a seguir:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0var $result : Text\n\xa0var $isOK : Boolean\n\xa0$isOK:=PHP Execute("C:\\php\\myPhpFile.php";"";$result)\n\xa0ALERT($Result)\n'})}),"\n",(0,s.jsx)(r.p,{children:"... mostrar\xe1 a vers\xe3o atual do PHP."}),"\n",(0,s.jsx)(r.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsxs)(r.p,{children:["Chamada da fun\xe7\xe3o ",(0,s.jsx)(r.em,{children:"myPhpFunction"}),' no script "myNewScript.php" com par\xe2metros. Este \xe9 o conte\xfado do script:']}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-PHP"})}),"\n",(0,s.jsx)(r.p,{children:"Chamada com fun\xe7\xe3o:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0var $result : Text\n\xa0var $param1 : Text\n\xa0var $param2 : Text\n\xa0var $isOk : Boolean\n\xa0$param1 :="Ol\xe1"\n\xa0$param2 :="mundo 4D!"\n\xa0$isOk:=PHP Execute("C:\\MyFolder\\myNewScript.php";"myPhpFunction";$result;$param1;$param2)\n\xa0ALERT($result)\xa0// Mostra "Ol\xe1 mundo 4D!"\n'})}),"\n",(0,s.jsx)(r.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,s.jsx)(r.p,{children:"Sair do int\xe9rprete PHP:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0$ifOk:=PHP Execute("";"quit_4d_php")\n'})}),"\n",(0,s.jsx)(r.h4,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,s.jsx)(r.p,{children:"Gest\xe3o de erros:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0\xa0// Instala\xe7\xe3o do m\xe9todo de gest\xe3o de erros\n\xa0phpCommError:=""\xa0// Modificado por PHPErrorHandler\n\xa0$T_saveErrorHandler :=Method called on error\n\xa0ON ERR CALL("PHPErrorHandler")\n\n\xa0// Execu\xe7\xe3o do script\n\xa0var $T_result : Text\n\xa0If(PHP Execute("C:\\MyScripts\\MiscInfos.php";"";$T_result))\n\xa0\xa0// Nenhum erro, $T_Result cont\xe9m o resultado\n\xa0Else\n\xa0\xa0// Se detectou um erro, administrado por PHPErrorHandler\n\xa0\xa0\xa0\xa0If(phpCommError="")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\xa0// error PHP, utilize PHP GET FULL RESPONSE\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT(phpCommError)\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n\xa0\n\xa0\xa0// Desinstala\xe7\xe3o do m\xe9todo\n\xa0ON ERR CALL($T_saveErrorHandler)\n\n\n'})}),"\n",(0,s.jsx)(r.p,{children:"O m\xe9todo PHP_errHandler \xe9 o seguinte:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0phpCommError:=""\n\xa0GET LAST ERROR STACK(arrCodes;arrComps;arrLabels)\n\xa0For($i;1;Size of array(arrCodes))\n\xa0\xa0\xa0\xa0phpCommError:=phpCommError+String(arrCodes{$i})+" "+arrComps{$i}+" "+\n\xa0\xa0\xa0\xa0arrLabels{$i}+Char(Carriage return)\n\xa0End for\n'})}),"\n",(0,s.jsx)(r.h4,{id:"exemplo-5",children:"Exemplo 5"}),"\n",(0,s.jsx)(r.p,{children:"Cria\xe7\xe3o din\xe2mica por 4D de um script antes de sua execu\xe7\xe3o:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0DOCUMENT TO BLOB("C:\\Scripts\\MyScript.php";$blobDoc)\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0$strDoc:=BLOB to text($blobDoc;UTF8 text without length)\n\xa0\n\xa0\xa0\xa0\xa0$strPosition:=Position("function2Rename";$strDoc)\n\xa0\n\xa0\xa0\xa0\xa0$strDoc:=Insert string($strDoc;"_v2";Length("function2Rename")+$strPosition)\n\xa0\n\xa0\xa0\xa0\xa0TEXT TO BLOB($strDoc;$blobDoc;UTF8 text without length)\n\xa0\xa0\xa0\xa0BLOB TO DOCUMENT("C:\\Scripts\\MyScript.php";$blobDoc)\n\xa0\xa0\xa0\xa0If(OK#1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Error on script creation")\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,s.jsx)(r.p,{children:"Se executa o script:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0$err:=PHP Execute("C:\\Scripts\\MyScript.php";"function2Rename_v2";*)\n'})}),"\n",(0,s.jsx)(r.h4,{id:"exemplo-6",children:"Exemplo 6"}),"\n",(0,s.jsx)(r.p,{children:"Recupera\xe7\xe3o direta de um valor de tipo data e hora. Este \xe9 o conte\xfado do script:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-PHP"})}),"\n",(0,s.jsx)(r.p,{children:"Recep\xe7\xe3o da data do lado 4D:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0var $phpResult_date : Date\n\xa0$result :=PHP Execute("C:\\php_scripts\\ReturnDate.php";"";$phpResult_date)\n\xa0\xa0//$phpResult_date is !05/04/2009 !\n\xa0\n\xa0var $phpResult_time : Time\n\xa0$result :=PHP Execute("C:\\php_scripts\\ReturnDate.php";"";$phpResult_time)\n\xa0\xa0//$phpResult_time is ?01 :02 :03 ?\n'})}),"\n",(0,s.jsx)(r.h4,{id:"exemplo-7",children:"Exemplo 7"}),"\n",(0,s.jsx)(r.p,{children:"Distribui\xe7\xe3o de dados em arrays:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0ARRAY TEXT($arText ;0)\n\xa0ARRAY LONGINT($arLong ;0)\n\xa0$p1 :=","\n\xa0$p2 :="11,22,33,44,55"\n\xa0$phpok :=PHP Execute("";"explode";$arText;$p1;$p2)\n\xa0$phpok :=PHP Execute("";"explode";$arLong;$p1;$p2)\n\xa0\n\xa0\xa0// $arText cont\xe9m os valores Alfa "11", "22", "33", etc.\n\xa0\xa0// $arLong cont\xe9m os n\xfameros, 11, 22, 33, etc.\n'})}),"\n",(0,s.jsx)(r.h4,{id:"exemplo-8",children:"Exemplo 8"}),"\n",(0,s.jsx)(r.p,{children:"Inicializa\xe7\xe3o de um array:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0ARRAY TEXT($arText ;0)\n\xa0$phpok :=PHP Execute("";"array_pad";$arText;->$arText;50;"indefinido")\n\xa0\xa0// Execute em PHP: $arrTest = array_pad($arrTest, 50, \u2019indefinido\u2019);\n\xa0\xa0// Preencher o array $arText com 50 elementos "indefinido"\n'})}),"\n",(0,s.jsx)(r.h4,{id:"exemplo-9",children:"Exemplo 9"}),"\n",(0,s.jsx)(r.p,{children:"Passo de par\xe2metros atrav\xe9s de um array:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0ARRAY INTEGER($arInt;0)\n\xa0$phpok :=PHP Execute("";"json_decode";$arInt;"[13,51,69,42,7]")\n\xa0\xa0// Execute en PHP: $arInt = json_decode(\u2019[13,51,69,42,7]\u2019);\n\xa0\xa0// Preencha o array com os valores iniciais\n'})}),"\n",(0,s.jsx)(r.h4,{id:"exemplo-10",children:"Exemplo 10"}),"\n",(0,s.jsx)(r.p,{children:"Este \xe9 um exemplo da utiliza\xe7\xe3o b\xe1sica da fun\xe7\xe3o trim, para eliminar espa\xe7os adicionais e/ou caracteres invis\xedveis de princ\xedpio a fim de uma cadeia:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0var $T_String : Text\n\xa0$T_String:="\xa0\xa0 Hello\xa0 "\n\xa0var $B : Boolean\n\xa0$B:=PHP Execute("";"trim";$T_String;$T_String)\n'})}),"\n",(0,s.jsx)(r.p,{children:"Para obter mais informa\xe7\xe3o sobre a fun\xe7\xe3o trim, por favor, consulte a documenta\xe7\xe3o de PHP."}),"\n",(0,s.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"Executar scripts PHP em 4D"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/pt/20-R7/commands/php-get-full-response",children:"PHP GET FULL RESPONSE"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/pt/20-R7/commands/php-set-option",children:"PHP SET OPTION"})]}),"\n",(0,s.jsx)(r.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"N\xfamero do comando"}),(0,s.jsx)(r.td,{children:"1058"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Thread-seguro"}),(0,s.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function p(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,r,o){o.d(r,{Z:function(){return t},a:function(){return d}});var n=o(667294);let s={},a=n.createContext(s);function d(e){let r=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);