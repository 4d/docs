"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33319"],{837867:function(e,o,r){r.r(o),r.d(o,{default:()=>p,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>t,contentTitle:()=>i});var s=JSON.parse('{"id":"FormObjects/webAreaOverview","title":"\xc1rea Web","description":"As \xe1reas da Web podem exibir v\xe1rios tipos de conte\xfado da Web em seus formul\xe1rios: P\xe1ginas HTML com conte\xfado est\xe1tico ou din\xe2mico, arquivos, imagens, JavaScript, etc. O mecanismo de renderiza\xe7\xe3o da \xe1rea da Web depende da plataforma de execu\xe7\xe3o do aplicativo e da [op\xe7\xe3o de mecanismo de renderiza\xe7\xe3o] selecionada (properties_WebArea.md#use-embedded-web-rendering-engine).","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/FormObjects/webArea_overview.md","sourceDirName":"FormObjects","slug":"/FormObjects/webAreaOverview","permalink":"/docs/pt/20-R6/FormObjects/webAreaOverview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FwebArea_overview.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"webAreaOverview","title":"\xc1rea Web"},"sidebar":"docs","previous":{"title":"Text","permalink":"/docs/pt/20-R6/FormObjects/text"},"next":{"title":"\xc1rea 4D View Pro","permalink":"/docs/pt/20-R6/FormObjects/viewProAreaOverview"}}'),a=r("785893"),n=r("250065");let d={id:"webAreaOverview",title:"\xc1rea Web"},i=void 0,c={},t=[{value:"Propriedades espec\xedficas",id:"propriedades-espec\xedficas",level:2},{value:"Vari\xe1veis associadas",id:"vari\xe1veis-associadas",level:3},{value:"Motor de renderiza\xe7\xe3o Web",id:"motor-de-renderiza\xe7\xe3o-web",level:3},{value:"Acesso a m\xe9todos 4D",id:"acesso-a-m\xe9todos-4d",level:3},{value:"Objecto $4d",id:"objecto-4d",level:3},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"A\xe7\xf5es padr\xe3o",id:"a\xe7\xf5es-padr\xe3o",level:2},{value:"Eventos formul\xe1rio",id:"eventos-formul\xe1rio",level:2},{value:"Regras das \xe1reas web",id:"regras-das-\xe1reas-web",level:2},{value:"Interface do usu\xe1rio",id:"interface-do-usu\xe1rio",level:3},{value:"Subformul\xe1rios",id:"subformul\xe1rios",level:3},{value:"Conflito entre a \xe1rea Web e o servidor Web (Windows)",id:"conflito-entre-a-\xe1rea-web-e-o-servidor-web-windows",level:3},{value:"Inser\xe7\xe3o de protocolo (macOS)",id:"inser\xe7\xe3o-de-protocolo-macos",level:3},{value:"Access to web inspector",id:"access-to-web-inspector",level:2},{value:"Propriedades compat\xedveis",id:"propriedades-compat\xedveis",level:2},{value:"4DCEFParameters.json",id:"4dcefparametersjson",level:2},{value:"Exemplos",id:"exemplos",level:3},{value:"Arquivo padr\xe3o",id:"arquivo-padr\xe3o",level:4},{value:"Exemplo de desativa\xe7\xe3o do switch padr\xe3o",id:"exemplo-de-desativa\xe7\xe3o-do-switch-padr\xe3o",level:4},{value:"Exemplo para Autoplay",id:"exemplo-para-autoplay",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:3}];function l(e){let o={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.p,{children:"As \xe1reas da Web podem exibir v\xe1rios tipos de conte\xfado da Web em seus formul\xe1rios: P\xe1ginas HTML com conte\xfado est\xe1tico ou din\xe2mico, arquivos, imagens, JavaScript, etc. O mecanismo de renderiza\xe7\xe3o da \xe1rea da Web depende da plataforma de execu\xe7\xe3o do aplicativo e da [op\xe7\xe3o de mecanismo de renderiza\xe7\xe3o] selecionada (properties_WebArea.md#use-embedded-web-rendering-engine)."}),"\n",(0,a.jsxs)(o.p,{children:["\xc9 poss\xedvel criar v\xe1rias \xe1reas web no mesmo formul\xe1rio. No entanto, observe que o uso de \xe1reas web deve seguir ",(0,a.jsx)(o.a,{href:"#web-area-rules",children:"v\xe1rias regras"}),"."]}),"\n",(0,a.jsxs)(o.p,{children:["V\xe1rias [a\xe7\xf5es padr\xe3o] dedicadas (#standard-actions), v\xe1rios [comandos de idioma] (",(0,a.jsx)(o.a,{href:"https://doc.4d.com/4Dv18/4D/18/Web-Area.201-4504309.en.html",children:"https://doc.4d.com/4Dv18/4D/18/Web-Area.201-4504309.en.html"}),"), bem como [eventos de formul\xe1rio] gen\xe9ricos e espec\xedficos (#form-events) permitem que o desenvolvedor controle o funcionamento das \xe1reas da Web. Vari\xe1veis espec\xedficas podem ser usadas para trocar informa\xe7\xf5es entre a \xe1rea e o ambiente 4D."]}),"\n",(0,a.jsx)(o.h2,{id:"propriedades-espec\xedficas",children:"Propriedades espec\xedficas"}),"\n",(0,a.jsx)(o.h3,{id:"vari\xe1veis-associadas",children:"Vari\xe1veis associadas"}),"\n",(0,a.jsx)(o.p,{children:"Duas vari\xe1veis espec\xedficas podem ser associadas a cada \xe1rea web:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesWebArea#url",children:(0,a.jsx)(o.code,{children:"URL"})})," -- para controlar a URL exibida pela \xe1rea da Web"]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesWebArea#progression",children:(0,a.jsx)(o.code,{children:"Progression"})})," -- para controlar a porcentagem de carregamento da p\xe1gina exibida na \xe1rea da Web."]}),"\n"]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsxs)(o.p,{children:["A partir do 4D v19 R5, a vari\xe1vel Progression n\xe3o \xe9 mais atualizada em Web Areas usando o ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/webAreaOverview#web-rendering-engine",children:"mecanismo de renderiza\xe7\xe3o do sistema Windows"}),"."]}),"\n"]}),"\n",(0,a.jsx)(o.h3,{id:"motor-de-renderiza\xe7\xe3o-web",children:"Motor de renderiza\xe7\xe3o Web"}),"\n",(0,a.jsx)(o.p,{children:"Voc\xea pode escolher entre [dois mecanismos de renderiza\xe7\xe3o] (properties_WebArea.md#use-embedded-web-rendering-engine) para a \xe1rea da Web, dependendo das especificidades do seu aplicativo."}),"\n",(0,a.jsx)(o.p,{children:"A sele\xe7\xe3o do mecanismo de renderiza\xe7\xe3o da Web incorporado permite chamar m\xe9todos 4D da \xe1rea da Web e garantir que os recursos do macOS e do Windows sejam semelhantes. A sele\xe7\xe3o do mecanismo de renderiza\xe7\xe3o do sistema \xe9 recomendada quando a \xe1rea da web est\xe1 conectada \xe0 internet, porque ela sempre se beneficia das \xfaltimas atualiza\xe7\xf5es de seguran\xe7a."}),"\n",(0,a.jsx)(o.h3,{id:"acesso-a-m\xe9todos-4d",children:"Acesso a m\xe9todos 4D"}),"\n",(0,a.jsxs)(o.p,{children:["Quando a propriedade ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesWebArea#access-4d-methods",children:"Access 4D methods"})," estiver selecionada, voc\xea pode chamar m\xe9todos 4D de uma \xe1rea web."]}),"\n",(0,a.jsx)(o.admonition,{title:"Notas",type:"note",children:(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"Essa propriedade s\xf3 estar\xe1 dispon\xedvel se a \xe1rea da Web [usar o mecanismo de renderiza\xe7\xe3o da Web incorporado] (properties_WebArea.md#use-embedded-web-rendering-engine)."}),"\n",(0,a.jsx)(o.li,{children:"Por motivos de seguran\xe7a, j\xe1 que permite a execu\xe7\xe3o de c\xf3digo 4D, essa op\xe7\xe3o s\xf3 deve ser ativada para p\xe1ginas confi\xe1veis, como as p\xe1ginas geradas pelo aplicativo."}),"\n"]})}),"\n",(0,a.jsx)(o.h3,{id:"objecto-4d",children:"Objecto $4d"}),"\n",(0,a.jsx)(o.p,{children:'O [4D embedded web rendering engine] (properties_WebArea.md#use-embedded-web-rendering-engine) fornece \xe0 \xe1rea um objeto JavaScript chamado $4d que voc\xea pode associar a qualquer m\xe9todo de projeto 4D usando a nota\xe7\xe3o de objeto ".".'}),"\n",(0,a.jsxs)(o.p,{children:["Por exemplo, para chamar o m\xe9todo ",(0,a.jsx)(o.code,{children:"HelloWorld"})," 4D, basta executar a seguinte instru\xe7\xe3o:"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-js",children:"$4d. HelloWorld();\n"})}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:'JavaScript \xe9 sens\xedvel a mai\xfasculas e min\xfasculas, portanto \xe9 importante notar que o objeto tem o nome $4d (com uma letra min\xfascula "d").'}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:"A sintaxe das chamadas aos m\xe9todos 4D \xe9 a seguinte:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-js",children:"$4d.4DMethodName(param1,paramN,function(result){})\n"})}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.code,{children:"param1...paramN"}),": Voc\xea pode passar tantos par\xe2metros quanto precisa para o m\xe9todo 4D.\nEsses par\xe2metros podem ser de qualquer tipo suportado pelo JavaScript (cadeia de caracteres, n\xfamero, matriz, objeto)."]}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.code,{children:"function(result)"}),': Fun\xe7\xe3o a ser passada como \xfaltimo argumento. Esta fun\xe7\xe3o "callback" \xe9 chamada de forma s\xedncrona quando o m\xe9todo 4D termina de ser executado. Ele recebe o par\xe2metro ',(0,a.jsx)(o.code,{children:"result"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.code,{children:"result"}),': Resultado da execu\xe7\xe3o do m\xe9todo 4D, retornado na express\xe3o "$0". Esse resultado pode ser de qualquer tipo suportado pelo JavaScript (cadeia de caracteres, n\xfamero, matriz, objeto). Voc\xea pode usar o comando ',(0,a.jsx)(o.code,{children:"C_OBJECT"})," para retornar os objetos."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsxs)(o.p,{children:["Por padr\xe3o, 4D trabalha em UTF-8. Quando voc\xea retornar texto contendo caracteres estendidos, por exemplo, caracteres com acentos, certifique-se de que a codifica\xe7\xe3o da p\xe1gina exibida na \xe1rea da Web seja declarada como UTF-8, caso contr\xe1rio, os caracteres poder\xe3o ser renderizados incorretamente. Nesse caso, adicione a seguinte linha na p\xe1gina HTML para declarar a codifica\xe7\xe3o:\n",(0,a.jsx)(o.code,{children:'<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'})]}),"\n"]}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,a.jsxs)(o.p,{children:["Dado um m\xe9todo de projeto 4D chamado ",(0,a.jsx)(o.code,{children:"today"})," que n\xe3o recebe par\xe2metros e retorna a data atual como uma string."]}),"\n",(0,a.jsxs)(o.p,{children:["C\xf3digo 4D do m\xe9todo ",(0,a.jsx)(o.code,{children:"today"}),":"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:" C_TEXT($0)\n $0:=String(Current date;System date long)\n"})}),"\n",(0,a.jsx)(o.p,{children:"Na \xe1rea web, o m\xe9todo 4D pode ser chamado com a sintaxe abaixo:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-js",children:"$4d.today()\n"})}),"\n",(0,a.jsx)(o.p,{children:"O m\xe9todo 4D n\xe3o recebe nenhum par\xe2metro, mas retorna o valor $0 para a fun\xe7\xe3o de callback chamada por 4D ap\xf3s a execu\xe7\xe3o do m\xe9todo. Queremos mostrar a data na p\xe1gina HTML que \xe9 carrega pela \xe1rea Web."}),"\n",(0,a.jsx)(o.p,{children:"Aqui est\xe1 o c\xf3digo da p\xe1gina HTML:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-html",children:'<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n <script type="text/javascript">\n$4d.today(function(dollarZero)\n{\n    var curDate = dollarZero;\n    document.getElementById("mydiv").innerHTML=curDate;\n});\n<\/script>\n</head>\n<body>Today is: <div id="mydiv"></div>\n</body>\n</html>\n'})}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,a.jsxs)(o.p,{children:["O m\xe9todo ",(0,a.jsx)(o.code,{children:"calcSum"})," do projeto 4D recebe par\xe2metros (",(0,a.jsx)(o.code,{children:"$1...$n"}),") e retorna sua soma em ",(0,a.jsx)(o.code,{children:"$0"}),":"]}),"\n",(0,a.jsxs)(o.p,{children:["C\xf3digo 4D do m\xe9todo ",(0,a.jsx)(o.code,{children:"calcSum"}),":"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:" C_REAL(${1}) // receives n REAL type parameters\n C_REAL($0) // returns a Real\n C_LONGINT($i;$n)\n $n:=Count parameters\n For($i;1;$n)\n    $0:=$0+${$i}\n End for\n"})}),"\n",(0,a.jsx)(o.p,{children:"O c\xf3digo JavaScript que roda na \xe1rea web \xe9:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-js",children:"$4d.calcSum(33, 45, 75, 102.5, 7, function(dollarZero)\n    {\n        var result = dollarZero // o resultado \xe9 262.5\n    });\n"})}),"\n",(0,a.jsx)(o.h2,{id:"a\xe7\xf5es-padr\xe3o",children:"A\xe7\xf5es padr\xe3o"}),"\n",(0,a.jsxs)(o.p,{children:["Quatro a\xe7\xf5es padr\xe3o espec\xedficas est\xe3o dispon\xedveis para gerenciar \xe1reas da Web automaticamente: ",(0,a.jsx)(o.code,{children:"Abrir URL anterior"}),", ",(0,a.jsx)(o.code,{children:"Abrir URL anterior"}),", ",(0,a.jsx)(o.code,{children:"Refrescar URL atual"})," e ",(0,a.jsx)(o.code,{children:"Parar de carregar URL"}),". Essas a\xe7\xf5es podem ser associadas com bot\xf5es ou comandos de menu e permite implementa\xe7\xe3o r\xe1pida de interfaces web b\xe1sicas. Essas a\xe7\xf5es s\xe3o descritas em ",(0,a.jsx)(o.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Standard-actions.300-4354791.en.html",children:"A\xe7\xf5es Padr\xe3o"}),"."]}),"\n",(0,a.jsx)(o.h2,{id:"eventos-formul\xe1rio",children:"Eventos formul\xe1rio"}),"\n",(0,a.jsx)(o.p,{children:"Os eventos formul\xe1rios espec\xedficos est\xe3o destinados \xe0 gest\xe3o programadas das \xe1reas web, mais concretamente \xe0 ativa\xe7\xe3o de links:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/Events/onBeginUrlLoading",children:(0,a.jsx)(o.code,{children:"On Begin URL Loading"})})}),"\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/Events/onUrlResourceLoading",children:(0,a.jsx)(o.code,{children:"On URL Resource Loading"})})}),"\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/Events/onEndUrlLoading",children:(0,a.jsx)(o.code,{children:"On End URL Loading"})})}),"\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/Events/onUrlLoadingError",children:(0,a.jsx)(o.code,{children:"On URL Loading Error"})})}),"\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/Events/onUrlFiltering",children:(0,a.jsx)(o.code,{children:"On URL Filtering"})})}),"\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/Events/onOpenExternalLink",children:(0,a.jsx)(o.code,{children:"On Open External Link"})})}),"\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/Events/onWindowOpeningDenied",children:(0,a.jsx)(o.code,{children:"On Window Opening Denied"})})}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:"Al\xe9m disso, \xe1reas web s\xe3o compat\xedveis com os eventos de formul\xe1rio gen\xe9ricos abaixo:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/Events/onLoad",children:(0,a.jsx)(o.code,{children:"On Load"})})}),"\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/Events/onUnload",children:(0,a.jsx)(o.code,{children:"On Unload"})})}),"\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/Events/onGettingFocus",children:(0,a.jsx)(o.code,{children:"On Getting Focus"})})}),"\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/Events/onLosingFocus",children:(0,a.jsx)(o.code,{children:"On Losing Focus"})})}),"\n"]}),"\n",(0,a.jsx)(o.h2,{id:"regras-das-\xe1reas-web",children:"Regras das \xe1reas web"}),"\n",(0,a.jsx)(o.h3,{id:"interface-do-usu\xe1rio",children:"Interface do usu\xe1rio"}),"\n",(0,a.jsx)(o.p,{children:"Quando o formul\xe1rio for executado, as fun\xe7\xf5es da interface de navegador padr\xe3o est\xe3o dispon\xedveis para o usu\xe1rio na \xe1rea web, o que permite a intera\xe7\xe3o com outras \xe1reas do formul\xe1rio:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["Comandos do menu ",(0,a.jsx)(o.strong,{children:"Editar"}),": Quando a \xe1rea da Web est\xe1 em foco, os comandos do menu ",(0,a.jsx)(o.strong,{children:"Edit"})," podem ser usados para executar a\xe7\xf5es como copiar, colar, selecionar tudo etc., de acordo com a sele\xe7\xe3o."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"Menu de contexto"}),": \xc9 poss\xedvel usar o ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesEntry#context-menu",children:"contexto menu"})," padr\xe3o do sistema com a \xe1rea web. Exibi\xe7\xe3o do menu de contexto pode ser controlado usando o comando ",(0,a.jsx)(o.code,{children:"WA SET PREFERENCE"}),"."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"Arrastar e soltar"}),': O usu\xe1rio pode arrastar e soltar texto, imagens e documentos dentro da \xe1rea da Web ou entre uma \xe1rea da Web e os objetos do formul\xe1rio 4D, de acordo com as propriedades do objeto 4D.\nPor raz\xf5es de seguran\xe7a, n\xe3o \xe9 permitido mudar os conte\xfados da \xe1rea Web arrastando e soltando seja um arquivo ou URL. Neste caso, o cursor exibe um \xedcone "proibido" ',(0,a.jsx)(o.img,{src:r(715510).Z+"",width:"26",height:"28"}),". Voc\xea precisa usar a instru\xe7\xe3o ",(0,a.jsx)(o.code,{children:'WA SET PREFERENCE(*; "warea";WA enable URL drop;True)'}),' para exibir um \xedcone "drop" e gerar o evento [',(0,a.jsx)(o.code,{children:"On Window Opening Denied"}),"] (Events/onWindowOpeningDenied.md). Nesse caso, voc\xea pode chamar o comando [",(0,a.jsx)(o.code,{children:"WA OPEN URL"}),"] (",(0,a.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1020.html",children:"https://doc.4d.com/4dv19/help/command/en/page1020.html"}),") ou definir a [vari\xe1vel URL] (properties_WebArea.md#url) em resposta a um drop do usu\xe1rio."]}),"\n"]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"Os recursos de arrastar e soltar descritos acima n\xe3o s\xe3o compat\xedveis com as \xe1reas da Web que usam o [mecanismo de renderiza\xe7\xe3o do sistema macOS] (properties_WebArea.md#use-embedded-web-rendering-engine)."}),"\n"]}),"\n",(0,a.jsx)(o.h3,{id:"subformul\xe1rios",children:"Subformul\xe1rios"}),"\n",(0,a.jsx)(o.p,{children:"Por raz\xf5es relacionadas com os mecanismos de redesenho de janelas, a inser\xe7\xe3o de uma \xe1rea web em um subformul\xe1rio est\xe1 sujeita \xe0s restri\xe7\xf5es abaixo:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"O subformul\xe1rio n\xe3o deve poder deslocar-se"}),"\n",(0,a.jsx)(o.li,{children:"Os limites da \xe1rea Web n\xe3o devem ultrapassar o tamanho do subformul\xe1rio"}),"\n"]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"N\xe3o \xe9 compat\xedvel sobrepor uma \xe1rea Web no topo ou debaixo dos outros objetos formul\xe1rio."}),"\n"]}),"\n",(0,a.jsx)(o.h3,{id:"conflito-entre-a-\xe1rea-web-e-o-servidor-web-windows",children:"Conflito entre a \xe1rea Web e o servidor Web (Windows)"}),"\n",(0,a.jsx)(o.p,{children:"Em Windows, n\xe3o \xe9 recomendado acessar, atrav\xe9s de uma \xe1rea web, o servidor web da aplica\xe7\xe3o 4D que contenha a \xe1rea, j\xe1 que esta configura\xe7\xe3o poderia provocar um conflito que paralise a aplica\xe7\xe3o. Com certeza um 4D remoto pode acessar ao servidor web de 4D Server, mas n\xe3o ao seu pr\xf3prio servidor web."}),"\n",(0,a.jsx)(o.h3,{id:"inser\xe7\xe3o-de-protocolo-macos",children:"Inser\xe7\xe3o de protocolo (macOS)"}),"\n",(0,a.jsxs)(o.p,{children:['As URLs manejadas por programa\xe7\xe3o em \xe1reas web em macOS devem come\xe7ar com o  protocolo. Por exemplo, voc\xea precisa passar a cadeia de caracteres "',(0,a.jsx)(o.a,{href:"http://www.mysite.com",children:"http://www.mysite.com"}),'" e n\xe3o apenas "',(0,a.jsx)(o.a,{href:"http://www.mysite.com",children:"www.mysite.com"}),'".']}),"\n",(0,a.jsx)(o.h2,{id:"access-to-web-inspector",children:"Access to web inspector"}),"\n",(0,a.jsx)(o.p,{children:"Pode ver e usar um inspetor web dentro das \xe1reas web de seus formul\xe1rios. The web inspector is a debugger which is provided by the embedded Web engine. It allows parsing the code and the flow of information of the web pages."}),"\n",(0,a.jsxs)(o.p,{children:["Para exibir o inspetor da Web, voc\xea pode executar o comando ",(0,a.jsx)(o.code,{children:"WA OPEN WEB INSPECTOR"})," ou usar o menu de contexto da \xe1rea da Web."]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:[(0,a.jsxs)(o.strong,{children:["Execute o comando ",(0,a.jsx)(o.code,{children:"WA OPEN WEB INSPECTOR"})]}),(0,a.jsx)(o.br,{}),"\nEsse comando pode ser usado diretamente com \xe1reas da Web na tela (objeto de formul\xe1rio) e fora da tela."]}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Use o menu de contexto da \xe1rea da Web"}),(0,a.jsx)(o.br,{}),"\nEsse recurso s\xf3 pode ser usado com \xe1reas da Web na tela e requer que as seguintes condi\xe7\xf5es sejam atendidas:"]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["o ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesEntry#context-menu",children:"menu de contexto"})," para a \xe1rea web est\xe1 ativado"]}),"\n",(0,a.jsx)(o.li,{children:"Deve habilitar expressamente ao uso do inspetor na \xe1rea mediante a instru\xe7\xe3o abaixo:"}),"\n"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'	WA SET PREFERENCE(*; "WA";WA enable Web inspector;True)  \n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"Com [engenharia de renderiza\xe7\xe3o de sistema Windows](properties_WebArea. d#use-embedded-web-rendering-engine), uma mudan\xe7a nesta prefer\xeancia requer que uma a\xe7\xe3o de navega\xe7\xe3o na \xe1rea (por exemplo, uma atualiza\xe7\xe3o de p\xe1gina) seja levada em conta."}),"\n"]}),"\n",(0,a.jsxs)(o.p,{children:["Para obter mais informa\xe7\xf5es, consulte a descri\xe7\xe3o do comando ",(0,a.jsx)(o.code,{children:"WA SET PREFERENCE"}),"."]}),"\n",(0,a.jsxs)(o.p,{children:["Quando voc\xea fez as configura\xe7\xf5es conforme descrito acima, voc\xea tem novas op\xe7\xf5es como ",(0,a.jsx)(o.strong,{children:"Inspecionar Elemento"})," no menu de contexto da \xe1rea. Quando selecionar essa op\xe7\xe3o, a janela do inspetor Web \xe9 exibida."]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"Para uma descri\xe7\xe3o detalhada nas funcionalidades do depurador, veja a documenta\xe7\xe3o fornecida pelo motor de renderiza\xe7\xe3o web."}),"\n"]}),"\n",(0,a.jsx)(o.h2,{id:"propriedades-compat\xedveis",children:"Propriedades compat\xedveis"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Estilo de linha de bordo"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Inferior"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesEntry#context-menu",children:"Menu de contexto"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesCoordinatesAndSizing#height",children:"Altura"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Dimensionamiento horizontal"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesCoordinatesAndSizing#left",children:"Esquerda"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesAction#method",children:"M\xe9todo"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesObject#object-name",children:"Nome do objeto"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesWebArea#progression",children:"Progress\xe3o"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesCoordinatesAndSizing#right",children:"Dereita"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesCoordinatesAndSizing#top",children:"Topo"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesObject#type",children:"Tipo"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesWebArea#url",children:"URL"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"Usar o mecanismo de renderiza\xe7\xe3o da Web"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesObject#variable-or-expression",children:"Vari\xe1vel ou Express\xe3o"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Tamanho Vertical"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesDisplay#visibility",children:"Visibilidade"})," - ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/FormObjects/propertiesCoordinatesAndSizing#width",children:"Largura"})]}),"\n",(0,a.jsx)(o.h2,{id:"4dcefparametersjson",children:"4DCEFParameters.json"}),"\n",(0,a.jsx)(o.p,{children:"O 4DCEFParameters.json \xe9 um arquivo de configura\xe7\xe3o que permite a personaliza\xe7\xe3o dos par\xe2metros CEF para gerenciar o comportamento das \xe1reas da Web nos aplicativos 4D."}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.a,{href:"#default-file",children:"As op\xe7\xf5es padr\xe3o"})," s\xe3o fornecidas, mas voc\xea pode substitu\xed-las usando um arquivo 4DCEFParameters.json personalizado."]}),"\n",(0,a.jsx)(o.p,{children:"Na fase de desenvolvimento (usando o aplicativo 4D), crie um arquivo 4DCEFParameters.json no seguinte local:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["Windows: ",(0,a.jsx)(o.code,{children:"Users\\[userName]\\AppData\\Roaming\\4D\\4DCEFParameters.json"})]}),"\n",(0,a.jsxs)(o.li,{children:["macOS: ",(0,a.jsx)(o.code,{children:"$HOME/Library/Application Support/4D/4DCEFParameters.json"})]}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:"Antes de criar um aplicativo final, adicione o arquivo personalizado 4DCEFParameters.json \xe0 pasta Resources do projeto."}),"\n",(0,a.jsx)(o.admonition,{type:"warning",children:(0,a.jsxs)(o.p,{children:["A adi\xe7\xe3o de um arquivo 4DCEFParameters.json personalizado pode afetar fundamentalmente todas as \xe1reas da Web incorporadas 4D, incluindo ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R6/ViewPro/configuring#form-area-properties",children:"\xe1reas 4D View Pro"}),". \xc9 responsabilidade do desenvolvedor garantir que os switches personalizados n\xe3o desestabilizem o aplicativo 4D."]})}),"\n",(0,a.jsx)(o.p,{children:"O formato do arquivo 4DCEFParameters.json \xe9 o seguinte:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-json",children:'\n{\n  "switches":{\n     "key":value\n  },\n  "macOS":{\n    "switches": {\n     "key":value\n    }\n  },\n  "windows": {\n    "switches": {\n     "key":value\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(o.p,{children:"A estrutura do arquivo 4DCEFParameters.json cont\xe9m:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"switches"}),": uma lista de switches CEF e seus valores correspondentes aplicados ao macOS e ao Windows."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"macOS.switches"}),": switches CEF espec\xedficos do macOS."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"windows.switches"}),": Comutadores CEF espec\xedficos do Windows."]}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:'Os interruptores no arquivo personalizado t\xeam prioridade. Em caso de duplica\xe7\xe3o de switches no mesmo arquivo, os switches definidos na subse\xe7\xe3o espec\xedfica da plataforma ("macOS.switches" ou "windows.switches") t\xeam prioridade e s\xe3o usados para configura\xe7\xe3o.'}),"\n",(0,a.jsx)(o.admonition,{type:"note",children:(0,a.jsx)(o.p,{children:"A lista de switches compat\xedveis est\xe1 em constante evolu\xe7\xe3o e \xe9 gerenciada pela equipe de desenvolvimento da CEF. Para obter informa\xe7\xf5es sobre os switches dispon\xedveis, voc\xea precisa consultar a comunidade de desenvolvedores da CEF."})}),"\n",(0,a.jsx)(o.h3,{id:"exemplos",children:"Exemplos"}),"\n",(0,a.jsx)(o.h4,{id:"arquivo-padr\xe3o",children:"Arquivo padr\xe3o"}),"\n",(0,a.jsx)(o.p,{children:"O arquivo 4DCEFParameters.json padr\xe3o cont\xe9m os seguintes bot\xf5es:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-json",children:'{\n  "switches":{\n     "enable-media-stream":true,\n     "enable-print-preview":true\n  },\n  "macOS":{\n    "switches": {\n      "use-mock-keychain": true\n    }\n  },\n  "windows": {\n    "switches": {\n      "disable-features": "WinUseBrowserSpellChecker"\n    }\n  }\n}\n\n'})}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-de-desativa\xe7\xe3o-do-switch-padr\xe3o",children:"Exemplo de desativa\xe7\xe3o do switch padr\xe3o"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-json",children:'{\n  "switches": {\n    "disable-javascript": true,\n    "disable-web-security": true\n  }\n}\n'})}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-para-autoplay",children:"Exemplo para Autoplay"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-json",children:'{\n  "switches":{\n     "autoplay-policy": "no-user-gesture-required"\n  }\n}\n'})}),"\n",(0,a.jsx)(o.h3,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.a,{href:"https://blog.4d.com/specify-your-own-parameters-to-initialize-the-embedded-web-area",children:"Especifique seus pr\xf3prios par\xe2metros para inicializar a \xe1rea Web incorporada (postagem no blog)"})})]})}function p(e={}){let{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},715510:function(e,o,r){r.d(o,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAcCAIAAADwcTiEAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA00lEQVR4nK3QWw7CQAgFUPa/Bt9xC2rbrdjWpSgJCSIwQM2Q+zXcOXaE3W3pGEgbm9Kduz87JuHeZqrc/jHL0GUwQ+dY2MC5kEKrnLLkS1MR7BsVFPwDaov5codhsW/EEzxXCUSfUxcCUXOt34zF1tbheF0Uq1ws/sMFos8dx5Ui13yoVnLr9h2uIrbK4N6xnBXdps9VRJ87jwvlNMwY+yguUFSBbnE0p0RGeQLrh2t9gjv2qylwmVaKFV2Uzm0/4SQqJ+4nHIYLKgnXJb256/TqmA8UCWnf7F651gAAAABJRU5ErkJggg=="},250065:function(e,o,r){r.d(o,{Z:function(){return i},a:function(){return d}});var s=r(667294);let a={},n=s.createContext(a);function d(e){let o=s.useContext(n);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(n.Provider,{value:o},e.children)}}}]);