"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76943"],{701622:function(e,r,o){o.r(r),o.d(r,{default:()=>p,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>t,contentTitle:()=>i});var s=JSON.parse('{"id":"FormObjects/webAreaOverview","title":"\xc1rea Web","description":"As \xe1reas da Web podem exibir v\xe1rios conte\xfado Web em seus formul\xe1rios P\xe1ginas HTML com conte\xfados est\xe1ticos ou din\xe2micos, arquivos, imagens, Javascript, etc. O motor de renderizado da \xe1rea web depende da plataforma de execu\xe7\xe3o da aplica\xe7\xe3o e de a op\xe7\xe3o motor de renderizado selecionada. O mecanismo de renderiza\xe7\xe3o da \xe1rea da Web depende da plataforma de execu\xe7\xe3o do aplicativo e da [op\xe7\xe3o de mecanismo de renderiza\xe7\xe3o] selecionada (properties_WebArea.md#use-embedded-web-rendering-engine).","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/FormObjects/webArea_overview.md","sourceDirName":"FormObjects","slug":"/FormObjects/webAreaOverview","permalink":"/docs/pt/FormObjects/webAreaOverview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FwebArea_overview.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"webAreaOverview","title":"\xc1rea Web"},"sidebar":"docs","previous":{"title":"Text","permalink":"/docs/pt/FormObjects/text"},"next":{"title":"\xc1rea 4D View Pro","permalink":"/docs/pt/FormObjects/viewProAreaOverview"}}'),a=o("785893"),n=o("250065");let d={id:"webAreaOverview",title:"\xc1rea Web"},i=void 0,c={},t=[{value:"Propriedades espec\xedficas",id:"propriedades-espec\xedficas",level:2},{value:"Vari\xe1veis associadas",id:"vari\xe1veis-associadas",level:3},{value:"Motor de renderiza\xe7\xe3o Web",id:"motor-de-renderiza\xe7\xe3o-web",level:3},{value:"Acessar m\xe9todos 4D",id:"acessar-m\xe9todos-4d",level:3},{value:"$4d Object",id:"4d-object",level:2},{value:"Controlling $4d Access",id:"controlling-4d-access",level:3},{value:"Calling 4D Methods from JavaScript",id:"calling-4d-methods-from-javascript",level:3},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"A\xe7\xf5es padr\xe3o",id:"a\xe7\xf5es-padr\xe3o",level:2},{value:"Eventos formul\xe1rio",id:"eventos-formul\xe1rio",level:2},{value:"Regras das \xe1reas web",id:"regras-das-\xe1reas-web",level:2},{value:"Interface do usu\xe1rio",id:"interface-do-usu\xe1rio",level:3},{value:"Subformul\xe1rios",id:"subformul\xe1rios",level:3},{value:"Conflito entre a \xe1rea Web e o servidor Web (Windows)",id:"conflito-entre-a-\xe1rea-web-e-o-servidor-web-windows",level:3},{value:"Inser\xe7\xe3o de protocolo (macOS)",id:"inser\xe7\xe3o-de-protocolo-macos",level:3},{value:"Access to web inspector",id:"access-to-web-inspector",level:2},{value:"Propriedades compat\xedveis",id:"propriedades-compat\xedveis",level:2},{value:"4DCEFParameters.json",id:"4dcefparametersjson",level:2},{value:"Exemplos",id:"exemplos",level:3},{value:"Arquivo padr\xe3o",id:"arquivo-padr\xe3o",level:4},{value:"Exemplo de desativa\xe7\xe3o do switch padr\xe3o",id:"exemplo-de-desativa\xe7\xe3o-do-switch-padr\xe3o",level:4},{value:"Exemplo para Autoplay",id:"exemplo-para-autoplay",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:3}];function l(e){let r={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:["As \xe1reas da Web podem exibir v\xe1rios conte\xfado Web em seus formul\xe1rios: p\xe1ginas HTML com conte\xfado est\xe1tico ou din\xe2mico, arquivos, imagens, JavaScript, etc. As \xe1reas web podem mostrar v\xe1rios tipos de conte\xfado web dentro de seus formul\xe1rios: P\xe1ginas HTML com conte\xfados est\xe1ticos ou din\xe2micos, arquivos, imagens, Javascript, etc. O motor de renderizado da \xe1rea web depende da plataforma de execu\xe7\xe3o da aplica\xe7\xe3o e de ",(0,a.jsx)(r.a,{href:"properties_WebArea.md#use-embedded-web-rendering-engine",children:"a op\xe7\xe3o motor de renderizado"})," selecionada. O mecanismo de renderiza\xe7\xe3o da \xe1rea da Web depende da plataforma de execu\xe7\xe3o do aplicativo e da [op\xe7\xe3o de mecanismo de renderiza\xe7\xe3o] selecionada (properties_WebArea.md#use-embedded-web-rendering-engine)."]}),"\n",(0,a.jsxs)(r.p,{children:["\xc9 poss\xedvel criar v\xe1rias \xe1reas web no mesmo formul\xe1rio. No entanto, observe que o uso de \xe1reas web deve seguir ",(0,a.jsx)(r.a,{href:"#web-area-rules",children:"v\xe1rias regras"}),"."]}),"\n",(0,a.jsxs)(r.p,{children:["Several dedicated ",(0,a.jsx)(r.a,{href:"#standard-actions",children:"standard actions"}),", numerous ",(0,a.jsx)(r.a,{href:"../category/web-area",children:"language commands"})," as well as generic and specific ",(0,a.jsx)(r.a,{href:"#form-events",children:"form events"})," allow the developer to control the functioning of web areas. Vari\xe1veis espec\xedficas podem ser usadas para trocar informa\xe7\xf5es entre a \xe1rea e o ambiente 4D."]}),"\n",(0,a.jsx)(r.h2,{id:"propriedades-espec\xedficas",children:"Propriedades espec\xedficas"}),"\n",(0,a.jsx)(r.h3,{id:"vari\xe1veis-associadas",children:"Vari\xe1veis associadas"}),"\n",(0,a.jsx)(r.p,{children:"Duas vari\xe1veis espec\xedficas podem ser associadas a cada \xe1rea web:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesWebArea#url",children:(0,a.jsx)(r.code,{children:"URL"})})," -- para controlar a URL exibida pela \xe1rea Web"]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesWebArea#progression",children:(0,a.jsx)(r.code,{children:"Progression"})})," -- para controlar a porcentagem de carregamento da p\xe1gina exibida na \xe1rea Web."]}),"\n"]}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsxs)(r.p,{children:["A partir do 4D v19 R5, a vari\xe1vel Progression n\xe3o \xe9 mais atualizada em Web Areas usando o ",(0,a.jsx)(r.a,{href:"/docs/pt/FormObjects/webAreaOverview#web-rendering-engine",children:"mecanismo de renderiza\xe7\xe3o do sistema Windows"}),"."]}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:"motor-de-renderiza\xe7\xe3o-web",children:"Motor de renderiza\xe7\xe3o Web"}),"\n",(0,a.jsx)(r.p,{children:"Voc\xea pode escolher entre [dois mecanismos de renderiza\xe7\xe3o] (properties_WebArea.md#use-embedded-web-rendering-engine) para a \xe1rea da Web, dependendo das especificidades do seu aplicativo."}),"\n",(0,a.jsx)(r.p,{children:"A sele\xe7\xe3o do motor de renderiza\xe7\xe3o web aninhado permite chamar aos m\xe9todos 4D desde a \xe1rea web. A sele\xe7\xe3o do mecanismo de renderiza\xe7\xe3o do sistema \xe9 recomendada quando a \xe1rea da web est\xe1 conectada \xe0 internet, porque ela sempre se beneficia das \xfaltimas atualiza\xe7\xf5es de seguran\xe7a."}),"\n",(0,a.jsx)(r.h3,{id:"acessar-m\xe9todos-4d",children:"Acessar m\xe9todos 4D"}),"\n",(0,a.jsxs)(r.p,{children:["Quando a propriedade ",(0,a.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesWebArea#access-4d-methods",children:"Acessar aos m\xe9todos 4D"})," estiver selecionada, voc\xea pode chamar m\xe9todos 4D de uma \xe1rea web."]}),"\n",(0,a.jsx)(r.admonition,{title:"Notas",type:"note",children:(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Essa propriedade s\xf3 estar\xe1 dispon\xedvel se a \xe1rea da Web [usar o mecanismo de renderiza\xe7\xe3o da Web incorporado] (properties_WebArea.md#use-embedded-web-rendering-engine)."}),"\n",(0,a.jsx)(r.li,{children:"Por motivos de seguran\xe7a, j\xe1 que permite a execu\xe7\xe3o de c\xf3digo 4D, essa op\xe7\xe3o s\xf3 deve ser ativada para p\xe1ginas confi\xe1veis, como as p\xe1ginas geradas pela aplica\xe7\xe3o."}),"\n"]})}),"\n",(0,a.jsx)(r.h2,{id:"4d-object",children:"$4d Object"}),"\n",(0,a.jsxs)(r.p,{children:["The ",(0,a.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:(0,a.jsx)(r.code,{children:"4D embedded web rendering engine"})})," provides a ",(0,a.jsxs)(r.strong,{children:["JavaScript object named ",(0,a.jsx)(r.code,{children:"$4d"})]})," in the web area. By default, ",(0,a.jsx)(r.code,{children:"$4d"})," allows access to all 4D project methods using dot notation."]}),"\n",(0,a.jsxs)(r.p,{children:["For example, calling the ",(0,a.jsx)(r.code,{children:"HelloWorld"})," method in 4D:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:"$4d. HelloWorld();\n"})}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Note:"})," JavaScript is ",(0,a.jsx)(r.strong,{children:"case-sensitive"}),", so the object is named ",(0,a.jsx)(r.strong,{children:(0,a.jsx)(r.code,{children:"$4d"})}),' (with a lowercase "d").']}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:"controlling-4d-access",children:"Controlling $4d Access"}),"\n",(0,a.jsxs)(r.p,{children:["With ",(0,a.jsx)(r.a,{href:"../commands/wa-set-context-object.md",children:(0,a.jsx)(r.code,{children:"WA SET CONTEXT OBJECT"})}),", developers can control what can be available through ",(0,a.jsx)(r.code,{children:"$4d"})," from a Web Area. Using this command you define a ",(0,a.jsx)(r.strong,{children:"context object"})," that declares for example 4D methods through formulas and class instances."]}),"\n",(0,a.jsxs)(r.p,{children:["To check the currently defined context, use ",(0,a.jsx)(r.a,{href:"../commands/wa-get-context-object.md",children:(0,a.jsx)(r.code,{children:"WA Get context object"})}),"."]}),"\n",(0,a.jsxs)(r.p,{children:["For more information, please refer to ",(0,a.jsx)(r.a,{href:"../commands/wa-set-context-object.md",children:(0,a.jsx)(r.code,{children:"WA SET CONTEXT OBJECT"})}),"."]}),"\n",(0,a.jsx)(r.h3,{id:"calling-4d-methods-from-javascript",children:"Calling 4D Methods from JavaScript"}),"\n",(0,a.jsx)(r.p,{children:"A sintaxe das chamadas aos m\xe9todos 4D \xe9 a seguinte:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:"$4d.4DMethodName(param1,paramN,function(result){})\n"})}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"param1...paramN"}),": Voc\xea pode passar tantos par\xe2metros quanto precisa para o m\xe9todo 4D.\nEsses par\xe2metros podem ser de qualquer tipo suportado pelo JavaScript (cadeia de caracteres, n\xfamero, array, objeto)."]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"function(result)"}),': Fun\xe7\xe3o a ser passada como \xfaltimo argumento. Esta fun\xe7\xe3o "callback" \xe9 chamada de forma s\xedncrona quando o m\xe9todo 4D termina de ser executado. Ele recebe o par\xe2metro ',(0,a.jsx)(r.code,{children:"result"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"result"}),": Execution result of the 4D method. Este resultado pode ser de qualquer tipo suportado pelo JavaScript (cadeia de caracteres, n\xfamero, array, objeto)."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsxs)(r.p,{children:["Por padr\xe3o, 4D trabalha em UTF-8. Quando voc\xea retornar texto contendo caracteres estendidos, por exemplo, caracteres com acentos, certifique-se de que a codifica\xe7\xe3o da p\xe1gina exibida na \xe1rea Web seja declarada como UTF-8, caso contr\xe1rio, os caracteres poder\xe3o ser renderizados incorretamente. Nesse caso, adicione a seguinte linha na p\xe1gina HTML para declarar a codifica\xe7\xe3o:\n",(0,a.jsx)(r.code,{children:'<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'})]}),"\n"]}),"\n",(0,a.jsx)(r.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,a.jsxs)(r.p,{children:["Dado um m\xe9todo de projeto 4D chamado ",(0,a.jsx)(r.code,{children:"today"})," que n\xe3o recebe par\xe2metros e retorna a data atual como uma string."]}),"\n",(0,a.jsxs)(r.p,{children:["C\xf3digo 4D do m\xe9todo ",(0,a.jsx)(r.code,{children:"today"}),":"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:"#DECLARE -> $result : Text\n$result := String(Current date;System date long)\n"})}),"\n",(0,a.jsx)(r.p,{children:"Na \xe1rea web, o m\xe9todo 4D pode ser chamado com a sintaxe abaixo:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:"$4d.today()\n"})}),"\n",(0,a.jsx)(r.p,{children:"The 4D method does not receive any parameters but it does return the result to the callback function called by 4D after the execution of the method. Queremos mostrar a data na p\xe1gina HTML que \xe9 carrega pela \xe1rea Web."}),"\n",(0,a.jsx)(r.p,{children:"Aqui est\xe1 o c\xf3digo da p\xe1gina HTML:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-html",children:'<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n <script type="text/javascript">\n$4d.today(function(result)\n{\n    var curDate = result;\n    document.getElementById("mydiv").innerHTML=curDate;\n});\n<\/script>\n</head>\n<body>Today is: <div id="mydiv"></div>\n</body>\n</html>\n'})}),"\n",(0,a.jsx)(r.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,a.jsxs)(r.p,{children:["Instead of using a standalone method, we can also define a ",(0,a.jsx)(r.strong,{children:"class"})," to handle the calculation."]}),"\n",(0,a.jsxs)(r.p,{children:["Define the Class with 4D project method ",(0,a.jsx)(r.code,{children:"calcSum"})," which receives parameters and returns their sum:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:"// SumCalculator user class\n\nFunction calcSum(... : Real) -> $sum : Real\n   // receives n Real type parameters\n   // and returns a Real\n  var $i; $n : Integer\n  $n := Count parameters\n\n  For ($i; 1; $n)\n    $sum += ${$i}\n  End for\n"})}),"\n",(0,a.jsx)(r.p,{children:"In another method, we create an instance and assign it to $4d"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:'var $myCalculator := cs.SumCalculator.new()\nWA SET CONTEXT OBJECT(*; "myWebArea"; $myCalculator)\n'})}),"\n",(0,a.jsx)(r.p,{children:"O c\xf3digo JavaScript que roda na \xe1rea web \xe9:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:"$4d.calcSum(33, 45, 75, 102.5, 7, function(theSum)\n    {\n        var result = theSum // o resultado \xe9 262.5\n});\n"})}),"\n",(0,a.jsx)(r.h2,{id:"a\xe7\xf5es-padr\xe3o",children:"A\xe7\xf5es padr\xe3o"}),"\n",(0,a.jsxs)(r.p,{children:["Quatro a\xe7\xf5es padr\xe3o espec\xedficas est\xe3o dispon\xedveis para gerenciar \xe1reas da Web automaticamente: ",(0,a.jsx)(r.code,{children:"Abrir URL anterior"}),", ",(0,a.jsx)(r.code,{children:"Abrir URL anterior"}),", ",(0,a.jsx)(r.code,{children:"Refrescar URL atual"})," e ",(0,a.jsx)(r.code,{children:"Parar de carregar URL"}),". Essas a\xe7\xf5es podem ser associadas com bot\xf5es ou comandos de menu e permite implementa\xe7\xe3o r\xe1pida de interfaces web b\xe1sicas. Essas a\xe7\xf5es podem ser associadas com bot\xf5es ou comandos de menu e permite implementa\xe7\xe3o r\xe1pida de interfaces web b\xe1sicas."]}),"\n",(0,a.jsx)(r.h2,{id:"eventos-formul\xe1rio",children:"Eventos formul\xe1rio"}),"\n",(0,a.jsx)(r.p,{children:"Os eventos formul\xe1rios espec\xedficos est\xe3o destinados \xe0 gest\xe3o programadas das \xe1reas web, mais concretamente \xe0 ativa\xe7\xe3o de links:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/docs/pt/Events/onBeginUrlLoading",children:(0,a.jsx)(r.code,{children:"On Begin URL Loading"})})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/docs/pt/Events/onUrlResourceLoading",children:(0,a.jsx)(r.code,{children:"On URL Resource Loading"})})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/docs/pt/Events/onEndUrlLoading",children:(0,a.jsx)(r.code,{children:"On End URL Loading"})})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/docs/pt/Events/onUrlLoadingError",children:(0,a.jsx)(r.code,{children:"On URL Loading Error"})})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/docs/pt/Events/onUrlFiltering",children:(0,a.jsx)(r.code,{children:"On URL Filtering"})})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/docs/pt/Events/onOpenExternalLink",children:(0,a.jsx)(r.code,{children:"On Open External Link"})})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/docs/pt/Events/onWindowOpeningDenied",children:(0,a.jsx)(r.code,{children:"On Window Opening Denied"})})}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"Al\xe9m disso, \xe1reas web s\xe3o compat\xedveis com os eventos de formul\xe1rio gen\xe9ricos abaixo:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/docs/pt/Events/onLoad",children:(0,a.jsx)(r.code,{children:"On Load"})})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/docs/pt/Events/onUnload",children:(0,a.jsx)(r.code,{children:"On Unload"})})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/docs/pt/Events/onGettingFocus",children:(0,a.jsx)(r.code,{children:"On Getting Focus"})})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/docs/pt/Events/onLosingFocus",children:(0,a.jsx)(r.code,{children:"On Losing Focus"})})}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"regras-das-\xe1reas-web",children:"Regras das \xe1reas web"}),"\n",(0,a.jsx)(r.h3,{id:"interface-do-usu\xe1rio",children:"Interface do usu\xe1rio"}),"\n",(0,a.jsx)(r.p,{children:"Quando o formul\xe1rio for executado, as fun\xe7\xf5es da interface de navegador padr\xe3o est\xe3o dispon\xedveis para o usu\xe1rio na \xe1rea web, o que permite a intera\xe7\xe3o com outras \xe1reas do formul\xe1rio:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["Comandos do menu ",(0,a.jsx)(r.strong,{children:"Editar"}),": Quando a \xe1rea da Web est\xe1 em foco, os comandos do menu ",(0,a.jsx)(r.strong,{children:"Edit"})," podem ser usados para executar a\xe7\xf5es como copiar, colar, selecionar tudo etc., de acordo com a sele\xe7\xe3o."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Menu contextual"}),": \xe9 poss\xedvel usar o ",(0,a.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesEntry#context-menu",children:"menu contextual"})," padr\xe3o do sistema com a \xe1rea web. Display of the context menu can be controlled using the ",(0,a.jsx)(r.a,{href:"/docs/pt/commands/wa-set-preference",children:(0,a.jsx)(r.code,{children:"WA SET PREFERENCE"})})," command."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"Arrastar e soltar"}),': O usu\xe1rio pode arrastar e soltar texto, imagens e documentos dentro da \xe1rea da Web ou entre uma \xe1rea da Web e os objetos do formul\xe1rio 4D, de acordo com as propriedades do objeto 4D.\nPor raz\xf5es de seguran\xe7a, n\xe3o \xe9 permitido mudar os conte\xfados da \xe1rea Web arrastando e soltando seja um arquivo ou URL. Neste caso, o cursor exibe um \xedcone "proibido" ',(0,a.jsx)(r.img,{src:o(554241).Z+"",width:"26",height:"28"}),". Voc\xea precisa usar a instru\xe7\xe3o ",(0,a.jsx)(r.code,{children:'WA SET PREFERENCE(*; "warea";WA enable URL drop;True)'}),' para exibir um \xedcone "drop" e gerar o evento [',(0,a.jsx)(r.code,{children:"On Window Opening Denied"}),"] (Events/onWindowOpeningDenied.md). In this event, you can call the ",(0,a.jsx)(r.a,{href:"/docs/pt/commands/wa-open-url",children:(0,a.jsx)(r.code,{children:"WA OPEN URL"})})," command or set the ",(0,a.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesWebArea#url",children:"URL variable"})," in response to a user drop."]}),"\n"]}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsx)(r.p,{children:"Os recursos de arrastar e soltar descritos acima n\xe3o s\xe3o compat\xedveis com as \xe1reas da Web que usam o [mecanismo de renderiza\xe7\xe3o do sistema macOS] (properties_WebArea.md#use-embedded-web-rendering-engine)."}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:"subformul\xe1rios",children:"Subformul\xe1rios"}),"\n",(0,a.jsx)(r.p,{children:"Por raz\xf5es relacionadas com os mecanismos de redesenho de janelas, a inser\xe7\xe3o de uma \xe1rea web em um subformul\xe1rio est\xe1 sujeita \xe0s restri\xe7\xf5es abaixo:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"O subformul\xe1rio n\xe3o deve poder deslocar-se"}),"\n",(0,a.jsx)(r.li,{children:"Os limites da \xe1rea Web n\xe3o devem ultrapassar o tamanho do subformul\xe1rio"}),"\n"]}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsx)(r.p,{children:"N\xe3o \xe9 compat\xedvel sobrepor uma \xe1rea Web no topo ou debaixo dos outros objetos formul\xe1rio."}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:"conflito-entre-a-\xe1rea-web-e-o-servidor-web-windows",children:"Conflito entre a \xe1rea Web e o servidor Web (Windows)"}),"\n",(0,a.jsx)(r.p,{children:"Em Windows, n\xe3o \xe9 recomendado acessar, atrav\xe9s de uma \xe1rea web, o servidor web da aplica\xe7\xe3o 4D que contenha a \xe1rea, j\xe1 que esta configura\xe7\xe3o poderia provocar um conflito que paralise a aplica\xe7\xe3o. Com certeza um 4D remoto pode acessar ao servidor web de 4D Server, mas n\xe3o ao seu pr\xf3prio servidor web."}),"\n",(0,a.jsx)(r.h3,{id:"inser\xe7\xe3o-de-protocolo-macos",children:"Inser\xe7\xe3o de protocolo (macOS)"}),"\n",(0,a.jsxs)(r.p,{children:['As URLs manejadas por programa\xe7\xe3o em \xe1reas web em macOS devem come\xe7ar com o  protocolo. Por exemplo, voc\xea precisa passar a cadeia de caracteres "',(0,a.jsx)(r.a,{href:"http://www.mysite.com",children:"http://www.mysite.com"}),'" e n\xe3o apenas "',(0,a.jsx)(r.a,{href:"http://www.mysite.com",children:"www.mysite.com"}),'".']}),"\n",(0,a.jsx)(r.h2,{id:"access-to-web-inspector",children:"Access to web inspector"}),"\n",(0,a.jsx)(r.p,{children:"Pode ver e usar um inspetor web dentro das \xe1reas web de seus formul\xe1rios. The web inspector is a debugger which is provided by the embedded Web engine. It allows parsing the code and the flow of information of the web pages."}),"\n",(0,a.jsxs)(r.p,{children:["Para exibir o inspetor da Web, voc\xea pode executar o comando ",(0,a.jsx)(r.code,{children:"WA OPEN WEB INSPECTOR"})," ou usar o menu de contexto da \xe1rea da Web."]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsxs)(r.strong,{children:["Execute the ",(0,a.jsx)(r.code,{children:"WA OPEN WEB INSPECTOR"})," command"]}),(0,a.jsx)(r.br,{}),"\nThis command can be used directly with onscreen (form object) and offscreen web areas."]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Use the web area context menu"}),(0,a.jsx)(r.br,{}),"\nThis feature can only be used with onscreen web areas and requires that the following conditions are met:"]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["o ",(0,a.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesEntry#context-menu",children:"menu contextual"})," para a \xe1rea web est\xe1 ativado"]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"o uso do inspetor \xe9 expressamente permitido na \xe1rea por meio da seguinte declara\xe7\xe3o:"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:'	WA SET PREFERENCE(*; "WA";WA enable Web inspector;True)  \n'})}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsx)(r.p,{children:"Com [engenharia de renderiza\xe7\xe3o de sistema Windows](properties_WebArea. d#use-embedded-web-rendering-engine), uma mudan\xe7a nesta prefer\xeancia requer que uma a\xe7\xe3o de navega\xe7\xe3o na \xe1rea (por exemplo, uma atualiza\xe7\xe3o de p\xe1gina) seja levada em conta."}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:["For more information, refer to the description of the ",(0,a.jsx)(r.a,{href:"/docs/pt/commands/wa-set-preference",children:(0,a.jsx)(r.code,{children:"WA SET PREFERENCE"})})," command."]}),"\n",(0,a.jsxs)(r.p,{children:["Quando voc\xea fez as configura\xe7\xf5es conforme descrito acima, voc\xea tem novas op\xe7\xf5es como ",(0,a.jsx)(r.strong,{children:"Inspecionar Elemento"})," no menu de contexto da \xe1rea. Quando selecionar essa op\xe7\xe3o, a janela do inspetor Web \xe9 exibida."]}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsx)(r.p,{children:"Para uma descri\xe7\xe3o detalhada nas funcionalidades do depurador, veja a documenta\xe7\xe3o fornecida pelo motor de renderiza\xe7\xe3o web."}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"propriedades-compat\xedveis",children:"Propriedades compat\xedveis"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Estilo de linha de bordo"})," - ",(0,a.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Inferior"})," - ",(0,a.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,a.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesEntry#context-menu",children:"Menu de contexto"})," - ",(0,a.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#height",children:"Altura"})," - ",(0,a.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Dimensionamiento horizontal"})," - ",(0,a.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#left",children:"Esquerda"})," - ",(0,a.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesAction#method",children:"M\xe9todo"})," - ",(0,a.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesObject#object-name",children:"Nome do objeto"})," - ",(0,a.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesWebArea#progression",children:"Progress\xe3o"})," - ",(0,a.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#right",children:"Dereita"})," - ",(0,a.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#top",children:"Topo"})," - ",(0,a.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesObject#type",children:"Tipo"})," - ",(0,a.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesWebArea#url",children:"URL"})," - ",(0,a.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"Usar o mecanismo de renderiza\xe7\xe3o da Web"})," - ",(0,a.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesObject#variable-or-expression",children:"Vari\xe1vel ou Express\xe3o"})," - ",(0,a.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Tamanho Vertical"})," - ",(0,a.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesDisplay#visibility",children:"Visibilidade"})," - ",(0,a.jsx)(r.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#width",children:"Largura"})]}),"\n",(0,a.jsx)(r.h2,{id:"4dcefparametersjson",children:"4DCEFParameters.json"}),"\n",(0,a.jsx)(r.p,{children:"O 4DCEFParameters.json \xe9 um arquivo de configura\xe7\xe3o que permite a personaliza\xe7\xe3o dos par\xe2metros CEF para gerenciar o comportamento das \xe1reas da Web nos aplicativos 4D."}),"\n",(0,a.jsxs)(r.p,{children:["Os ",(0,a.jsx)(r.a,{href:"#default-file",children:"Interruptores padr\xe3o"})," s\xe3o fornecidos, mas voc\xea pode substitu\xed-los usando um arquivo 4DCEFParameters.json personalizado."]}),"\n",(0,a.jsx)(r.p,{children:"Na fase de desenvolvimento (usando o aplicativo 4D), crie um arquivo 4DCEFParameters.json no seguinte local:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["Windows: ",(0,a.jsx)(r.code,{children:"Users\\[userName]\\AppData\\Roaming\\4D\\4DCEFParameters.json"})]}),"\n",(0,a.jsxs)(r.li,{children:["macOS: ",(0,a.jsx)(r.code,{children:"$HOME/Library/Application Support/4D/4DCEFParameters.json"})]}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"Antes de criar um aplicativo final, adicione o arquivo personalizado 4DCEFParameters.json \xe0 pasta Resources do projeto."}),"\n",(0,a.jsx)(r.admonition,{type:"warning",children:(0,a.jsxs)(r.p,{children:["A adi\xe7\xe3o de um arquivo 4DCEFParameters.json personalizado pode afetar fundamentalmente todas as \xe1reas da Web incorporadas 4D, incluindo ",(0,a.jsx)(r.a,{href:"/docs/pt/ViewPro/configuring#form-area-properties",children:"\xe1reas 4D View Pro"}),". \xc9 responsabilidade do desenvolvedor garantir que os switches personalizados n\xe3o desestabilizem o aplicativo 4D."]})}),"\n",(0,a.jsx)(r.p,{children:"O formato do arquivo 4DCEFParameters.json \xe9 o seguinte:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-json",children:'\n{\n  "switches":{\n     "key":value\n  },\n  "macOS":{\n    "switches": {\n     "key":value\n    }\n  },\n  "windows": {\n    "switches": {\n     "key":value\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(r.p,{children:"A estrutura do arquivo 4DCEFParameters.json cont\xe9m:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"switches"}),": uma lista de switches CEF e seus valores correspondentes aplicados ao macOS e ao Windows."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"macOS.switches"}),": switches CEF espec\xedficos do macOS."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"windows.switches"}),": Comutadores CEF espec\xedficos do Windows."]}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:'Os interruptores no arquivo personalizado t\xeam prioridade. Em caso de duplica\xe7\xe3o de switches no mesmo arquivo, os switches definidos na subse\xe7\xe3o espec\xedfica da plataforma ("macOS.switches" ou "windows.switches") t\xeam prioridade e s\xe3o usados para configura\xe7\xe3o.'}),"\n",(0,a.jsx)(r.admonition,{type:"note",children:(0,a.jsx)(r.p,{children:"A lista de switches compat\xedveis est\xe1 em constante evolu\xe7\xe3o e \xe9 gerenciada pela equipe de desenvolvimento da CEF. Para obter informa\xe7\xf5es sobre os switches dispon\xedveis, voc\xea precisa consultar a comunidade de desenvolvedores da CEF."})}),"\n",(0,a.jsx)(r.h3,{id:"exemplos",children:"Exemplos"}),"\n",(0,a.jsx)(r.h4,{id:"arquivo-padr\xe3o",children:"Arquivo padr\xe3o"}),"\n",(0,a.jsx)(r.p,{children:"O arquivo 4DCEFParameters.json padr\xe3o cont\xe9m os seguintes bot\xf5es:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-json",children:'{\n  "switches":{\n     "enable-media-stream":true,\n     "enable-print-preview":true\n  },\n  "macOS":{\n    "switches": {\n      "use-mock-keychain": true\n    }\n  },\n  "windows": {\n    "switches": {\n      "disable-features": "WinUseBrowserSpellChecker"\n    }\n  }\n}\n\n'})}),"\n",(0,a.jsx)(r.h4,{id:"exemplo-de-desativa\xe7\xe3o-do-switch-padr\xe3o",children:"Exemplo de desativa\xe7\xe3o do switch padr\xe3o"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-json",children:'{\n  "switches": {\n    "disable-javascript": true,\n    "disable-web-security": true\n  }\n}\n'})}),"\n",(0,a.jsx)(r.h4,{id:"exemplo-para-autoplay",children:"Exemplo para Autoplay"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-json",children:'{\n  "switches":{\n     "autoplay-policy": "no-user-gesture-required"\n  }\n}\n'})}),"\n",(0,a.jsx)(r.h3,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.a,{href:"https://blog.4d.com/specify-your-own-parameters-to-initialize-the-embedded-web-area",children:"Especifique seus pr\xf3prios par\xe2metros para inicializar a \xe1rea Web incorporada (postagem no blog)"})})]})}function p(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},554241:function(e,r,o){o.d(r,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAcCAIAAADwcTiEAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA00lEQVR4nK3QWw7CQAgFUPa/Bt9xC2rbrdjWpSgJCSIwQM2Q+zXcOXaE3W3pGEgbm9Kduz87JuHeZqrc/jHL0GUwQ+dY2MC5kEKrnLLkS1MR7BsVFPwDaov5codhsW/EEzxXCUSfUxcCUXOt34zF1tbheF0Uq1ws/sMFos8dx5Ui13yoVnLr9h2uIrbK4N6xnBXdps9VRJ87jwvlNMwY+yguUFSBbnE0p0RGeQLrh2t9gjv2qylwmVaKFV2Uzm0/4SQqJ+4nHIYLKgnXJb256/TqmA8UCWnf7F651gAAAABJRU5ErkJggg=="},250065:function(e,r,o){o.d(r,{Z:function(){return i},a:function(){return d}});var s=o(667294);let a={},n=s.createContext(a);function d(e){let r=s.useContext(n);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);