/*! For license information please see 2df9415e.b20f53c9.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91353],{928815:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>t,contentTitle:()=>s,default:()=>m,frontMatter:()=>d,metadata:()=>i,toc:()=>c});var n=r(474848),a=r(28453);const d={id:"error-handling",title:"Gest\xe3o de erros"},s=void 0,i={id:"Concepts/error-handling",title:"Gest\xe3o de erros",description:"O manejo de erros \xe9 o processo de antecipar e responder aos erros que possam ocorrer em sua aplica\xe7\xe3o. 4D oferece assist\xeancia completa \xe0 detec\xe7\xe3o e notifica\xe7\xe3o de erros no tempo de execu\xe7\xe3o, assim como a an\xe1lise de suas condi\xe7\xf5es.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/Concepts/error-handling.md",sourceDirName:"Concepts",slug:"/Concepts/error-handling",permalink:"/docs/pt/Concepts/error-handling",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Ferror-handling.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"error-handling",title:"Gest\xe3o de erros"},sidebar:"docs",previous:{title:"Fluxo de controlo",permalink:"/docs/pt/Concepts/control-flow"},next:{title:"Modos interpretado e compilado",permalink:"/docs/pt/Concepts/interpreted-compiled"}},t={},c=[{value:"Erro ou status",id:"erro-ou-status",level:2},{value:"Instala\xe7\xe3o de um m\xe9todo de gest\xe3o de erros",id:"instala\xe7\xe3o-de-um-m\xe9todo-de-gest\xe3o-de-erros",level:2},{value:"Alcance e componentes",id:"alcance-e-componentes",level:3},{value:"Manejo de erros dentro do m\xe9todo",id:"manejo-de-erros-dentro-do-m\xe9todo",level:3},{value:"Exemplo",id:"exemplo",level:4},{value:"Utilizar um m\xe9todo de gest\xe3o de erro vazio",id:"utilizar-um-m\xe9todo-de-gest\xe3o-de-erro-vazio",level:3},{value:"Try(expression)",id:"tryexpression",level:2},{value:"Exemplos",id:"exemplos",level:3},{value:"Try...Catch...End try",id:"trycatchend-try",level:2},{value:"Exemplo",id:"exemplo-1",level:3}];function l(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"O manejo de erros \xe9 o processo de antecipar e responder aos erros que possam ocorrer em sua aplica\xe7\xe3o. 4D oferece assist\xeancia completa \xe0 detec\xe7\xe3o e notifica\xe7\xe3o de erros no tempo de execu\xe7\xe3o, assim como a an\xe1lise de suas condi\xe7\xf5es."}),"\n",(0,n.jsx)(o.p,{children:"Manejo de erros responde \xe0 duas necessidades principais:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"descobrir e consertar erros potenciais e bugs no c\xf3digo durante a fase de desenvolvimento,"}),"\n",(0,n.jsx)(o.li,{children:"capturando e recuperando de erros inesperados em aplicativos implementados; em particular, voc\xea pode substituir caixas de di\xe1logo de erro do sistema (disco cheio, arquivo em falta, etc.) com sua pr\xf3pria interface."}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Basicamente, h\xe1 duas maneiras de lidar com erros em 4D. Pode:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.a,{href:"#installing-an-error-handling-method",children:"instalar un m\xe9todo de gesti\xf3n de errores"}),", o"]}),"\n",(0,n.jsxs)(o.li,{children:["use uma palavra-chave ",(0,n.jsx)(o.a,{href:"#tryexpression",children:(0,n.jsx)(o.code,{children:"Try()"})})," ou uma estrutura ",(0,n.jsx)(o.a,{href:"#trycatchend-try",children:(0,n.jsx)(o.code,{children:"Try/Catch"})})," antes de peda\xe7os de c\xf3digo que chamem uma fun\xe7\xe3o, m\xe9todo ou express\xe3o que possam lan\xe7ar um erro."]}),"\n"]}),"\n",(0,n.jsx)(o.admonition,{title:"Boas pr\xe1ticas",type:"tip",children:(0,n.jsxs)(o.p,{children:["> > \xc9 recomendado instalar um m\xe9todo de gerenciamento de erros em 4D Server, para todos os c\xf3digos rodando no servidor. Quando o servidor 4D n\xe3o estiver executando ",(0,n.jsx)(o.a,{href:"/docs/pt/Admin/cli",children:"headless"})," (ou seja, inicializado com sua [janela de administra\xe7\xe3o](.. ServerWindow/overview.md)), este m\xe9todo evitaria caixas de di\xe1logo inesperadas a serem exibidas na m\xe1quina do servidor. No modo headless, erros s\xe3o registrados no ",(0,n.jsx)(o.a,{href:"../Depuring/debugLogFiles.md#4ddebuglogtxt-standard",children:"arquivo 4DDebugLog"})," para an\xe1lise posterior."]})}),"\n",(0,n.jsx)(o.h2,{id:"erro-ou-status",children:"Erro ou status"}),"\n",(0,n.jsxs)(o.p,{children:["Muitas fun\xe7\xf5es de classe 4D, tais como ",(0,n.jsx)(o.code,{children:"entity.save()"})," ou ",(0,n.jsx)(o.code,{children:"transporter.send()"}),", retornam um objeto de ",(0,n.jsx)(o.em,{children:"status"}),'. Este objecto \xe9 utilizado para armazenar erros "previs\xedveis" no contexto do tempo de execu\xe7\xe3o, por exemplo, palavra-passe inv\xe1lida, entidade bloqueada, etc., que n\xe3o interrompem a execu\xe7\xe3o do programa. Esta categoria de erros pode ser tratada por c\xf3digo normal.']}),"\n",(0,n.jsxs)(o.p,{children:['Outros erros "imprevis\xedveis" incluem erro de grava\xe7\xe3o em disco, falha de rede, ou em geral qualquer interrup\xe7\xe3o inesperada. Esta categoria de erros gera exce\xe7\xf5es e precisa ser tratada atrav\xe9s de um m\xe9todo de manipula\xe7\xe3o de erros ou uma palavra-chave ',(0,n.jsx)(o.code,{children:"Try()"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"instala\xe7\xe3o-de-um-m\xe9todo-de-gest\xe3o-de-erros",children:"Instala\xe7\xe3o de um m\xe9todo de gest\xe3o de erros"}),"\n",(0,n.jsxs)(o.p,{children:["Em 4D, todos os erros podem ser capturados e tratados por m\xe9todos espec\xedficos do projeto, denominados m\xe9todos de ",(0,n.jsx)(o.strong,{children:"tratamento de erros"})," (ou ",(0,n.jsx)(o.strong,{children:"captura de erros"}),")."]}),"\n",(0,n.jsx)(o.p,{children:"Uma vez instalados, os manipuladores de erros s\xe3o automaticamente chamados em modo interpretado ou compilado em caso de erro na aplica\xe7\xe3o 4D ou num dos seus componentes. Um manipulador de erros diferente pode ser chamado em fun\xe7\xe3o do contexto de execu\xe7\xe3o (ver abaixo)."}),"\n",(0,n.jsxs)(o.p,{children:["Para ",(0,n.jsx)(o.em,{children:"instalar"})," um m\xe9todo de projeto de manipula\xe7\xe3o de erros, voc\xea s\xf3 precisa chamar o [",(0,n.jsx)(o.code,{children:"LIGA DE ERRO CALL"}),"](",(0,n.jsx)(o.a,{href:"https://doc.4d",children:"https://doc.4d"}),". comando/4dv19/help/command/en/page155.html) com o nome do m\xe9todo do projeto e (opcionnalmente) escopo como par\xe2metros. Por exemplo:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'ON ERR CALL("IO_ERRORS") //Instala o m\xe9todo de gest\xe3o de erros\n'})}),"\n",(0,n.jsxs)(o.p,{children:["Para deixar de detectar erros para um contexto de execu\xe7\xe3o e devolver o controle, chame ",(0,n.jsx)(o.code,{children:"ON ERR CALL"})," com uma string vazia:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'ON ERR CALL("";ek local) // d\xe1 o controle para o processo local\n'})}),"\n",(0,n.jsxs)(o.p,{children:["O comando ",(0,n.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page704.html",children:(0,n.jsx)(o.code,{children:"M\xe9todo chamado erro"})})," permite que voc\xea saiba o nome do m\xe9todo instalado por ",(0,n.jsx)(o.code,{children:"ON ERR CALL"})," para o processo atual. \xc9 particularmente \xfatil no contexto dos componentes porque permite mudar temporariamente e depois restaurar o m\xe9todo de captura de erros do banco de dados local:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:' $methCurrent:=M\xe9todo chamado em caso de erro(ek local)\nON ERR CALL("NewMethod";ek local)\n  //Se o documento n\xe3o pode ser aberto, um erro \xe9 gerado\n $ref:=Abrir documento("MyDocument")\n  //Reinstala\xe7\xe3o do m\xe9todo anterior\nON ERR CALL($methCurrent;ek local)\n\n'})}),"\n",(0,n.jsx)(o.h3,{id:"alcance-e-componentes",children:"Alcance e componentes"}),"\n",(0,n.jsx)(o.p,{children:"Um m\xe9todo de tratamento de erros pode ser definido para diferentes contextos de execu\xe7\xe3o:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["para o ",(0,n.jsx)(o.strong,{children:"processo atual"}),"- um manipulador de erros local ser\xe1 chamado apenas para erros que ocorreram no processo atual do projeto atual,"]}),"\n",(0,n.jsxs)(o.li,{children:["para o ",(0,n.jsx)(o.strong,{children:"aplicativo inteiro"})," - um manipulador de erros global ser\xe1 chamado para todos os erros que ocorreram no contexto de execu\xe7\xe3o do aplicativo do projeto atual,"]}),"\n",(0,n.jsxs)(o.li,{children:["dos ",(0,n.jsx)(o.strong,{children:"componentes"})," - esse manipulador de erros \xe9 definido em um projeto host e ser\xe1 chamado para todos os erros que ocorreram nos componentes quando eles ainda n\xe3o foram capturados por um manipulador de componentes."]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Exemplos:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'ON ERR CALL("IO_Errors";ek local) //Instala um m\xe9todo local de tratamento de erros ON ERR CALL("globalHandler";ek global) //Instala um m\xe9todo global de tratamento de erros ON ERR CALL("componentHandler";ek erros de componentes) //Instala um m\xe9todo de tratamento de erros de componentes\n'})}),"\n",(0,n.jsx)(o.p,{children:'Pode instalar um gerenciador de erros global que servir\xe1 como "fallback" e m\xe9todos de erros locais espec\xedficos para certos processos. Um manipulador de erros global \xe9 tamb\xe9m \xfatil no servidor para evitar di\xe1logos de erro no servidor quando executado com interface.'}),"\n",(0,n.jsx)(o.p,{children:"Pode definir um \xfanico m\xe9todo de captura de erros para toda a aplica\xe7\xe3o ou diferentes m\xe9todos por m\xf3dulo de aplica\xe7\xe3o. Entretanto, apenas um m\xe9todo pode ser instalado por processo."}),"\n",(0,n.jsx)(o.p,{children:"Quando ocorre um erro, apenas um m\xe9todo \xe9 chamado, como descrito no diagrama seguinte:"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"error management",src:r(298244).A+"",width:"1195",height:"578"})}),"\n",(0,n.jsx)(o.h3,{id:"manejo-de-erros-dentro-do-m\xe9todo",children:"Manejo de erros dentro do m\xe9todo"}),"\n",(0,n.jsx)(o.p,{children:"Within the custom error method, you have access to several pieces of information that will help you identifying the error:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"vari\xe1veis sistema (*):"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"Erro"})," (inteiro longo): c\xf3digo de erro"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"Error line"})," (entero largo): n\xfamero de l\xednea del m\xe9todo que ha provocado el error"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"Linha de erro"})," (longin): n\xfamero de linha no m\xe9todo que desencadeou o erro"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"F\xf3rmula de erro"})," (texto): f\xf3rmula do c\xf3digo 4D (texto bruto) que est\xe1 na origem do erro."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsxs)(o.p,{children:["O 4D mant\xe9m automaticamente uma s\xe9rie de vari\xe1veis chamadas ",(0,n.jsx)(o.strong,{children:"vari\xe1veis sistema"}),", que respondem a diferentes necessidades. Ver o manual da linguagem 4D*."]})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["o comando ",(0,n.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1799.html",children:(0,n.jsx)(o.code,{children:"\xdaltimos erros"})})," que retorna uma cole\xe7\xe3o da pilha de erros atual que ocorreu na aplica\xe7\xe3o 4D. Voc\xea tamb\xe9m pode usar o comando ",(0,n.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1015.html",children:(0,n.jsx)(o.code,{children:"GET LAST ERROR STACK"})})," que retorna a mesma informa\xe7\xe3o que as matrizes."]}),"\n",(0,n.jsxs)(o.li,{children:["o comando ",(0,n.jsx)(o.code,{children:"Get call chain"})," que retorna uma cole\xe7\xe3o de objetos que descrevem cada etapa da cadeia de chamadas de m\xe9todos no processo atual."]}),"\n"]}),"\n",(0,n.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsx)(o.p,{children:"Aqui est\xe1 um sistema de gest\xe3o de erros simples:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'//instalar o m\xe9todo de gest\xe3o de erros\n ON ERR CALL("errorMethod")\n //... executar o c\xf3digo\n ON ERR CALL("") //retorna o controle para 4D\n'})}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'// M\xe9todo do projeto errorMethod\n If(Error#1006) //isso n\xe3o \xe9 uma interrup\xe7\xe3o do usu\xe1rio\n    ALERT("The error "+String(Error)+" occurred". O c\xf3digo em quest\xe3o \xe9: \\""+Error formula+"\\"")\n End if\n'})}),"\n",(0,n.jsx)(o.h3,{id:"utilizar-um-m\xe9todo-de-gest\xe3o-de-erro-vazio",children:"Utilizar um m\xe9todo de gest\xe3o de erro vazio"}),"\n",(0,n.jsxs)(o.p,{children:["Se quiser que a caixa de di\xe1logo fique escondida, pode instalar um m\xe9todo de gest\xe3o de erros vazio. A vari\xe1vel ",(0,n.jsx)(o.code,{children:"Error"})," do sistema pode ser testada em qualquer m\xe9todo, ou seja, fora do m\xe9todo de gest\xe3o de erros:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'ERR CALL("emptyMethod") //vazityMethod existe mas est\xe1 vazio\n$doc:=Open document( "myFile. xt")\nSe (Error=-43)\n\t\u251cALERT("Arquivo n\xe3o encontrado.")\nFinalize se\nNO ERR CALL("")\n'})}),"\n",(0,n.jsx)(o.h2,{id:"tryexpression",children:"Try(expression)"}),"\n",(0,n.jsxs)(o.p,{children:["A instru\xe7\xe3o ",(0,n.jsx)(o.code,{children:"Try(expression)"})," permite que voc\xea teste uma express\xe3o de linha \xfanica no contexto de execu\xe7\xe3o atual (incluindo, em particular, valores vari\xe1veis locais) e para interceptar erros que ele lan\xe7a para que a caixa de di\xe1logo de erro 4D n\xe3o seja exibida. O uso de ",(0,n.jsx)(o.code,{children:"Try(expression)"})," oferece uma maneira f\xe1cil de tratar casos de erro simples com um n\xfamero muito baixo de linhas de c\xf3digo e sem exigir um m\xe9todo de tratamento de erros."]}),"\n",(0,n.jsx)(o.admonition,{type:"note",children:(0,n.jsxs)(o.p,{children:["Se voc\xea quiser tentar um c\xf3digo mais complexo do que uma express\xe3o de uma \xfanica linha, voc\xea pode considerar usar uma estrutura ",(0,n.jsx)(o.a,{href:"#trycatchend-try",children:(0,n.jsx)(o.code,{children:"Try/Catch"})}),"."]})}),"\n",(0,n.jsxs)(o.p,{children:["A sintaxe formal da instru\xe7\xe3o ",(0,n.jsx)(o.code,{children:"Try(expression)"})," \xe9:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:"\nTry (expression) : any | Undefined\n\n"})}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.em,{children:"express\xe3o"})," pode ser qualquer express\xe3o v\xe1lida."]}),"\n",(0,n.jsxs)(o.p,{children:["Se ocorrer um erro durante sua execu\xe7\xe3o, ele ser\xe1 interceptado e nenhuma caixa de di\xe1logo de erro ser\xe1 exibida, independentemente de um [m\xe9todo de tratamento de erros] (#installing-an-error-handling-method) ter sido instalado ou n\xe3o antes da chamada para ",(0,n.jsx)(o.code,{children:"Try()"}),". Se ",(0,n.jsx)(o.em,{children:"express\xe3o"})," retorna um valor, ",(0,n.jsx)(o.code,{children:"Try()"})," retorna o \xfaltimo valor avaliado, caso contr\xe1rio, ele retorna ",(0,n.jsx)(o.code,{children:"Undefined"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["Voc\xea pode lidar com o(s) erro(s) usando o comando ",(0,n.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1799.html",children:(0,n.jsx)(o.code,{children:"\xdaltimos erros"})}),". Se a ",(0,n.jsx)(o.em,{children:"express\xe3o"})," lan\xe7ar um erro em uma pilha de chamadas ",(0,n.jsx)(o.code,{children:"Try()"}),", o fluxo de execu\xe7\xe3o ser\xe1 interrompido e retornar\xe1 ao \xfaltimo ",(0,n.jsx)(o.code,{children:"Try()"})," executado (o primeiro encontrado na pilha de chamadas)."]}),"\n",(0,n.jsx)(o.admonition,{type:"note",children:(0,n.jsxs)(o.p,{children:["Se um m\xe9todo de tratamento de erros for instalado por ",(0,n.jsx)(o.em,{children:"express\xe3o"}),", ele \xe9 chamado em caso de erro."]})}),"\n",(0,n.jsx)(o.h3,{id:"exemplos",children:"Exemplos"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsx)(o.li,{children:"You want to display the contents of a file if the file can be open without error, and if its contents can be read. Voc\xea pode escrever:"}),"\n"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'var $text : Text\nvar $file : 4D.File := File("/RESOURCES/myFile.txt")\nvar $fileHandle : 4D.FileHandle := Try($file.open())\nIf ($fileHandle # Null)\n  $text:=Try($fileHandle.readText()) || "Erro ao ler o arquivo"\nEnd if\n'})}),"\n",(0,n.jsxs)(o.ol,{start:"2",children:["\n",(0,n.jsx)(o.li,{children:"Voc\xea deseja tratar o erro de divis\xe3o por zero. Nesse caso, voc\xea deseja retornar 0 e lan\xe7ar um erro:"}),"\n"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'function divide( $p1: real; $p2: real)-> $result: real\n  if ($p2=0)\n     $result:=0 //apenas por claridade (0 se o padr\xe3o for reais)\n     throw(-12345; "Division by zero")\n  else\n    $result:=$p1/$p2\n  end if\n\nfunction test()\n  $result:=Try(divide($p1;$p2))\n  If (Last errors # null)\n    ALERT("Error")\n  End if\n\n'})}),"\n",(0,n.jsxs)(o.ol,{start:"3",children:["\n",(0,n.jsxs)(o.li,{children:["Voc\xea deseja lidar com erros ",(0,n.jsx)(o.a,{href:"#error-or-status",children:"previs\xedveis e n\xe3o previs\xedveis"}),":"]}),"\n"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'var $e:=ds.Employee.new()\n$e.name:="Smith"\n$status:=Try($e.save()) // Captura de erros previs\xedveis e n\xe3o previs\xedveis\nIf ($status.success)\n   ALERT( "Success")\nElse\n   ALERT( "Error: "+JSON Stringify($status.errors))\nEnd if\n'})}),"\n",(0,n.jsx)(o.h2,{id:"trycatchend-try",children:"Try...Catch...End try"}),"\n",(0,n.jsxs)(o.p,{children:["A estrutura ",(0,n.jsx)(o.code,{children:"Try...Catch...End try"})," permite que voc\xea teste um bloco de c\xf3digo em seu contexto de execu\xe7\xe3o atual (incluindo, em particular, os valores de vari\xe1veis locais) e intercepte os erros que ele lan\xe7a, para que a caixa de di\xe1logo de erro do 4D n\xe3o seja exibida."]}),"\n",(0,n.jsxs)(o.p,{children:["Ao contr\xe1rio da palavra-chave ",(0,n.jsx)(o.code,{children:"Try(express\xe3o)"})," que avalia uma express\xe3o de linha \xfanica, a ",(0,n.jsx)(o.code,{children:"Experimente...Catch... a estrutura nd try"})," permite que voc\xea avalie qualquer bloco de c\xf3digo, do mais simples para o mais complexo, sem exigir um m\xe9todo de manipula\xe7\xe3o de erro. Al\xe9m disso, o bloco ",(0,n.jsx)(o.code,{children:"Catch"})," pode ser usado para tratar o erro de qualquer forma personalizada."]}),"\n",(0,n.jsxs)(o.p,{children:["A sintaxe formal da estrutura ",(0,n.jsx)(o.code,{children:"Try...Catch...End try"})," \xe9:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:"\nTry \n\tstatement(s) // C\xf3digo a ser avaliado\nCatch\n\tstatement(s) // C\xf3digo a ser executado em caso de erro\nEnd try\n\n"})}),"\n",(0,n.jsxs)(o.p,{children:["O c\xf3digo colocado entre as palavras-chave ",(0,n.jsx)(o.code,{children:"Try"})," e ",(0,n.jsx)(o.code,{children:"Catch"})," \xe9 executado primeiro e, em seguida, o fluxo depende do(s) erro(s) encontrado(s) durante essa execu\xe7\xe3o."]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Se nenhum erro for lan\xe7ado, a execu\xe7\xe3o do c\xf3digo continuar\xe1 ap\xf3s a palavra-chave ",(0,n.jsx)(o.code,{children:"End try"})," correspondente. O c\xf3digo colocado entre as palavras-chave ",(0,n.jsx)(o.code,{children:"Catch"})," e ",(0,n.jsx)(o.code,{children:"End try"})," n\xe3o \xe9 executado."]}),"\n",(0,n.jsxs)(o.li,{children:["Se a execu\xe7\xe3o do bloco de c\xf3digo lan\xe7ar um ",(0,n.jsx)(o.em,{children:"erro n\xe3o diferido"}),", o fluxo de execu\xe7\xe3o \xe9 interrompido e o bloco de c\xf3digo ",(0,n.jsx)(o.code,{children:"Catch"})," correspondente \xe9 executado."]}),"\n",(0,n.jsxs)(o.li,{children:["Se o bloco de execu\xe7\xe3o de c\xf3digo lan\xe7ar um ",(0,n.jsx)(o.em,{children:"erro atrasado"}),", o fluxo de execu\xe7\xe3o continua at\xe9 o final do bloco ",(0,n.jsx)(o.code,{children:"Try"})," e, em seguida, executa o bloco de c\xf3digo ",(0,n.jsx)(o.code,{children:"Catch"})," correspondente."]}),"\n"]}),"\n",(0,n.jsx)(o.admonition,{type:"note",children:(0,n.jsxs)(o.p,{children:["Se um erro ",(0,n.jsx)(o.em,{children:"deferred"})," for lan\xe7ado fora do bloco ",(0,n.jsx)(o.code,{children:"Try"}),", a execu\xe7\xe3o do c\xf3digo continua at\xe9 o final do m\xe9todo ou fun\xe7\xe3o."]})}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsxs)(o.p,{children:["Para obter mais informa\xe7\xf5es sobre erros ",(0,n.jsx)(o.em,{children:"deferred"})," e ",(0,n.jsx)(o.em,{children:"non-deferred"}),", consulte a descri\xe7\xe3o do comando ",(0,n.jsx)(o.a,{href:"https://doc.4d.com/4dv20R/help/command/pt/page1805.html",children:(0,n.jsx)(o.code,{children:"throw"})}),"."]})}),"\n",(0,n.jsxs)(o.p,{children:["No bloco de c\xf3digo ",(0,n.jsx)(o.code,{children:"Catch"}),", voc\xea pode lidar com o(s) erro(s) usando comandos padr\xe3o de tratamento de erros. A fun\xe7\xe3o ",(0,n.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1799.html",children:(0,n.jsx)(o.code,{children:"\xdaltimos Erros"})})," cont\xe9m a \xfaltima cole\xe7\xe3o de erros. Voc\xea pode ",(0,n.jsx)(o.a,{href:"#installing-an-error-handling-method",children:"declarar um m\xe9todo de tratamento de erros"})," neste bloco de c\xf3digo, caso em que ele \xe9 chamado em caso de erro (caso contr\xe1rio, a caixa de di\xe1logo de erro do 4D \xe9 exibida)."]}),"\n",(0,n.jsx)(o.admonition,{type:"note",children:(0,n.jsxs)(o.p,{children:["Se um ",(0,n.jsx)(o.a,{href:"#instalando-um-m%C3%A9todo-de-tratamento-de-erros",children:"m\xe9todo de tratamento de erros"})," for instalado no c\xf3digo colocado entre as palavras-chave ",(0,n.jsx)(o.code,{children:"Try"})," e ",(0,n.jsx)(o.code,{children:"Catch"}),", ele \xe9 chamado em caso de erro."]})}),"\n",(0,n.jsx)(o.h3,{id:"exemplo-1",children:"Exemplo"}),"\n",(0,n.jsxs)(o.p,{children:["A combina\xe7\xe3o de transa\xe7\xf5es e estruturas ",(0,n.jsx)(o.code,{children:"Try...Catch...End try"})," permite escrever c\xf3digo seguro para recursos cr\xedticos."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:"Function createInvoice($customer : cs.customerEntity; $items : Collection; $invoiceRef : Text) : cs.invoiceEntity\n\tvar $newInvoice : cs.invoiceEntity\n\tvar $newInvoiceLine : cs.invoiceLineEntity\n\tvar $item : Object\n\tds.startTransaction()\n\tTry\n\t\t$newInvoice:=This.new()\n\t\t$newInvoice.customer:=$customer\n\t\t$newInvoice.invoiceRef:=$invoiceRef\n\t\tFor each ($item; $items)\n\t\t\t$newInvoiceLine:=ds.invoiceLine.new()\n\t\t\t$newInvoiceLine.item:=$item.item\n\t\t\t$newInvoiceLine.amount:=$item.amount\n\t\t\t$newInvoiceLine.invoice:=$newInvoice\n\t\t\t//chamar outras fun\xe7\xf5es espec\xedficas para validar a linha de fatura\n\t\t\t$newInvoiceLine.save()\n\t\tEnd for each \n\t\t$newInvoice.save()\n\t\tds.validateTransaction()\n\tCatch\n\t\tds.cancelTransaction()\n\t\tds.logErrors(Last errors)\n\t\t$newInvoice:=Null\n\tEnd try\n\treturn $newInvoice\n\n"})})]})}function m(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,o,r)=>{var n=r(296540),a=Symbol.for("react.element"),d=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function c(e,o,r){var n,d={},c=null,l=null;for(n in void 0!==r&&(c=""+r),void 0!==o.key&&(c=""+o.key),void 0!==o.ref&&(l=o.ref),o)s.call(o,n)&&!t.hasOwnProperty(n)&&(d[n]=o[n]);if(e&&e.defaultProps)for(n in o=e.defaultProps)void 0===d[n]&&(d[n]=o[n]);return{$$typeof:a,type:e,key:c,ref:l,props:d,_owner:i.current}}o.Fragment=d,o.jsx=c,o.jsxs=c},474848:(e,o,r)=>{e.exports=r(221020)},298244:(e,o,r)=>{r.d(o,{A:()=>n});const n=r.p+"assets/images/error-schema-973d40c4618e79de87f884622e4e930f.png"},28453:(e,o,r)=>{r.d(o,{R:()=>s,x:()=>i});var n=r(296540);const a={},d=n.createContext(a);function s(e){const o=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(d.Provider,{value:o},e.children)}}}]);