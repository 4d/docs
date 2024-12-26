"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30809"],{612692:function(e,r,o){o.r(r),o.d(r,{metadata:()=>s,contentTitle:()=>d,default:()=>h,assets:()=>t,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"FormObjects/webAreaOverview","title":"\xc1rea Web","description":"Web areas can display various types of web content within your forms P\xe1ginas HTML com conte\xfados est\xe1ticos ou din\xe2micos, arquivos, imagens, Javascript, etc. O motor de renderizado da \xe1rea web depende da plataforma de execu\xe7\xe3o da aplica\xe7\xe3o e de a op\xe7\xe3o motor de renderizado selecionada.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/FormObjects/webArea_overview.md","sourceDirName":"FormObjects","slug":"/FormObjects/webAreaOverview","permalink":"/docs/pt/20/FormObjects/webAreaOverview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FwebArea_overview.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"webAreaOverview","title":"\xc1rea Web"},"sidebar":"docs","previous":{"title":"Text","permalink":"/docs/pt/20/FormObjects/text"},"next":{"title":"\xc1rea 4D View Pro","permalink":"/docs/pt/20/FormObjects/viewProAreaOverview"}}'),n=o("785893"),a=o("250065");let i={id:"webAreaOverview",title:"\xc1rea Web"},d=void 0,t={},c=[{value:"Propriedades espec\xedficas",id:"propriedades-espec\xedficas",level:2},{value:"Vari\xe1veis associadas",id:"vari\xe1veis-associadas",level:3},{value:"Motor de renderiza\xe7\xe3o Web",id:"motor-de-renderiza\xe7\xe3o-web",level:3},{value:"Acesso a m\xe9todos 4D",id:"acesso-a-m\xe9todos-4d",level:3},{value:"Objecto $4d",id:"objecto-4d",level:3},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"A\xe7\xf5es padr\xe3o",id:"a\xe7\xf5es-padr\xe3o",level:2},{value:"Eventos formul\xe1rio",id:"eventos-formul\xe1rio",level:2},{value:"Regras das \xe1reas web",id:"regras-das-\xe1reas-web",level:2},{value:"Interface do usu\xe1rio",id:"interface-do-usu\xe1rio",level:3},{value:"Subformul\xe1rios",id:"subformul\xe1rios",level:3},{value:"Conflito entre a \xe1rea Web e o servidor Web (Windows)",id:"conflito-entre-a-\xe1rea-web-e-o-servidor-web-windows",level:3},{value:"Inser\xe7\xe3o de protocolo (macOS)",id:"inser\xe7\xe3o-de-protocolo-macos",level:3},{value:"Access to web inspector",id:"access-to-web-inspector",level:2},{value:"Propriedades compat\xedveis",id:"propriedades-compat\xedveis",level:2}];function l(e){let r={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["Web areas can display various types of web content within your forms: HTML pages with static or dynamic contents, files, pictures, JavaScript, etc. As \xe1reas web podem mostrar v\xe1rios tipos de conte\xfado web dentro de seus formul\xe1rios: P\xe1ginas HTML com conte\xfados est\xe1ticos ou din\xe2micos, arquivos, imagens, Javascript, etc. O motor de renderizado da \xe1rea web depende da plataforma de execu\xe7\xe3o da aplica\xe7\xe3o e de ",(0,n.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"a op\xe7\xe3o motor de renderizado"})," selecionada."]}),"\n",(0,n.jsxs)(r.p,{children:["\xc9 poss\xedvel criar v\xe1rias \xe1reas web no mesmo formul\xe1rio. Note, however, that the use of web areas must follow ",(0,n.jsx)(r.a,{href:"#web-areas-rules",children:"several rules"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["V\xe1rias ",(0,n.jsx)(r.a,{href:"#standard-actions",children:"a\xe7\xf5es padr\xe3o"})," dedicadas, numerosos ",(0,n.jsx)(r.a,{href:"https://doc.4d.com/4Dv18/4D/18/Web-Area.201-4504309.en.html",children:"comandos de linguagem"})," assim como tamb\xe9m ",(0,n.jsx)(r.a,{href:"#form-events",children:"eventos formul\xe1rio"})," gen\xe9ricos e espec\xedficos, permitem ao desenvolvedor controlar o funcionamento das \xe1reas web. Specific variables can be used to exchange information between the area and the 4D environment."]}),"\n",(0,n.jsx)(r.h2,{id:"propriedades-espec\xedficas",children:"Propriedades espec\xedficas"}),"\n",(0,n.jsx)(r.h3,{id:"vari\xe1veis-associadas",children:"Vari\xe1veis associadas"}),"\n",(0,n.jsx)(r.p,{children:"Duas vari\xe1veis espec\xedficas podem ser associadas a cada \xe1rea web:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesWebArea#url",children:(0,n.jsx)(r.code,{children:"URL"})})," --para controlar a URL que mostra a \xe1rea web"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesWebArea#progression",children:(0,n.jsx)(r.code,{children:"Progresi\xf3n"})})," -- para controlar a porcentagem de carga da p\xe1gina mostrada na \xe1rea web."]}),"\n"]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:["As of 4D v19 R5, the Progression variable is no longer updated in Web Areas using the ",(0,n.jsx)(r.a,{href:"/docs/pt/20/FormObjects/webAreaOverview#web-rendering-engine",children:"Windows system rendering engine"}),"."]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"motor-de-renderiza\xe7\xe3o-web",children:"Motor de renderiza\xe7\xe3o Web"}),"\n",(0,n.jsxs)(r.p,{children:["Pode escolher entre ",(0,n.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"dois motores de renderiza\xe7\xe3o"})," para a \xe1rea web, dependendo das particularidades de sua aplica\xe7\xe3o."]}),"\n",(0,n.jsx)(r.p,{children:"Selecting the embedded web rendering engine allows you to call 4D methods from the web area. Selecting the system rendering engine is recommended when the web area is connected to the Internet because it always benefits from the latest security updates."}),"\n",(0,n.jsx)(r.h3,{id:"acesso-a-m\xe9todos-4d",children:"Acesso a m\xe9todos 4D"}),"\n",(0,n.jsxs)(r.p,{children:["Quando selecionar a propriedade ",(0,n.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesWebArea#access-4d-methods",children:"Acessar aos m\xe9todos 4D"}),", pode chamar aos m\xe9todos 4D desde uma \xe1rea Web."]}),"\n",(0,n.jsx)(r.admonition,{title:"Notas",type:"note",children:(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["This property is only available if the Web area ",(0,n.jsx)(r.a,{href:"#use-embedded-web-rendering-engine",children:"uses the embedded Web rendering engine"}),"."]}),"\n",(0,n.jsx)(r.li,{children:"For security reasons since it allows executing 4D code, this option should only be enabled for pages you trust, such as pages generated by the application."}),"\n"]})}),"\n",(0,n.jsx)(r.h3,{id:"objecto-4d",children:"Objecto $4d"}),"\n",(0,n.jsxs)(r.p,{children:["O ",(0,n.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"motor de renderiza\xe7\xe3o web embebido de 4D"}),' fornece \xe0 \xe1rea um objeto JavaScript chamado $4d que pode ser associado a qualquer m\xe9todo projeto 4D utilizando a nota\xe7\xe3o objeto ".".']}),"\n",(0,n.jsxs)(r.p,{children:["For example, to call the ",(0,n.jsx)(r.code,{children:"HelloWorld"})," 4D method, you just execute the following statement:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"$4d. HelloWorld();\n"})}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:'JavaScript \xe9 sens\xedvel a mai\xfasculas e min\xfasculas, portanto \xe9 importante notar que o objeto tem o nome $4d (com uma letra min\xfascula "d").'}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"A sintaxe das chamadas aos m\xe9todos 4D \xe9 a seguinte:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"$4d.4DMethodName(param1,paramN,function(result){})\n"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"param1...paramN"}),": You can pass as many parameters as you need to the 4D method. These parameters can be of any type supported by JavaScript (string, number, array, object)."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"function(result)"}),': fun\xe7\xe3o a passar como \xfaltimo argumento. Esta fun\xe7\xe3o "callback" \xe9 chamada de forma s\xedncrona quando o m\xe9todo 4D termina de ser executado. Recebe o par\xe2metro ',(0,n.jsx)(r.code,{children:"result"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"result"}),': Execution result of the 4D method, returned in the "$0" expression. This result can be of any type supported by JavaScript (string, number, array, object). Voc\xea pode usar o comando ',(0,n.jsx)(r.code,{children:"C_OBJECT"})," para retornar os objetos."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:["Por padr\xe3o, 4D trabalha em UTF-8. When you return text containing extended characters, for example characters with accents, make sure the encoding of the page displayed in the Web area is declared as UTF-8, otherwise the characters may be rendered incorrectly. In this case, add the following line in the HTML page to declare the encoding: ",(0,n.jsx)(r.code,{children:'<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'})]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,n.jsxs)(r.p,{children:["Given a 4D project method named ",(0,n.jsx)(r.code,{children:"today"})," that does not receive parameters and returns the current date as a string."]}),"\n",(0,n.jsxs)(r.p,{children:["C\xf3digo 4D do m\xe9todo ",(0,n.jsx)(r.code,{children:"today"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:" C_TEXT($0)\n $0:=String(Current date;System date long)\n"})}),"\n",(0,n.jsx)(r.p,{children:"Na \xe1rea web, o m\xe9todo 4D pode ser chamado com a sintaxe abaixo:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"$4d.today()\n"})}),"\n",(0,n.jsx)(r.p,{children:"The 4D method does not receive any parameters but it does return the value of $0 to the callback function called by 4D after the execution of the method. Queremos mostrar a data na p\xe1gina HTML que \xe9 carrega pela \xe1rea Web."}),"\n",(0,n.jsx)(r.p,{children:"Aqui est\xe1 o c\xf3digo da p\xe1gina HTML:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-html",children:'<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n <script type="text/javascript">\n$4d.today(function(dollarZero)\n{\n    var curDate = dollarZero;\n    document.getElementById("mydiv").innerHTML=curDate;\n});\n<\/script>\n</head>\n<body>Today is: <div id="mydiv"></div>\n</body>\n</html>\n'})}),"\n",(0,n.jsx)(r.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,n.jsxs)(r.p,{children:["The 4D project method ",(0,n.jsx)(r.code,{children:"calcSum"})," receives parameters (",(0,n.jsx)(r.code,{children:"$1...$n"}),") and returns their sum in ",(0,n.jsx)(r.code,{children:"$0"}),":"]}),"\n",(0,n.jsxs)(r.p,{children:["C\xf3digo 4D do m\xe9todo ",(0,n.jsx)(r.code,{children:"calcSum"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:" C_REAL(${1}) // recebe n par\xe2metros do tipo REAL\n C_REAL($0) // devolve um Real\n C_LONGINT($i;$n)\n $n:=Count parameters\n For($i;1;$n)\n    $0:=$0+${$i}\n End for\n"})}),"\n",(0,n.jsx)(r.p,{children:"O c\xf3digo JavaScript que roda na \xe1rea web \xe9:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"$4d.calcSum(33, 45, 75, 102.5, 7, function(dollarZero)\n    {\n        var result = dollarZero // o resultado \xe9 262.5\n    });\n"})}),"\n",(0,n.jsx)(r.h2,{id:"a\xe7\xf5es-padr\xe3o",children:"A\xe7\xf5es padr\xe3o"}),"\n",(0,n.jsxs)(r.p,{children:["H\xe1 quatro a\xe7\xf5es padr\xe3o espec\xedficas para gerenciar as \xe1reas web de forma autom\xe1tica: ",(0,n.jsx)(r.code,{children:"Open Back URL"}),", ",(0,n.jsx)(r.code,{children:"Open Next URL"}),", ",(0,n.jsx)(r.code,{children:"Refresh Current URL"})," e ",(0,n.jsx)(r.code,{children:"Stop Loading URL"}),". Essas a\xe7\xf5es podem ser associadas com bot\xf5es ou comandos de menu e permite implementa\xe7\xe3o r\xe1pida de interfaces web b\xe1sicas. Estas a\xe7\xf5es s\xe3o descritas em ",(0,n.jsx)(r.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Standard-actions.300-4354791.en.html",children:"a\xe7\xf5es standard"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"eventos-formul\xe1rio",children:"Eventos formul\xe1rio"}),"\n",(0,n.jsx)(r.p,{children:"Os eventos formul\xe1rios espec\xedficos est\xe3o destinados \xe0 gest\xe3o programadas das \xe1reas web, mais concretamente \xe0 ativa\xe7\xe3o de links:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/pt/20/Events/onBeginUrlLoading",children:(0,n.jsx)(r.code,{children:"On Begin URL Loading"})})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/pt/20/Events/onUrlResourceLoading",children:(0,n.jsx)(r.code,{children:"On URL Resource Loading"})})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/pt/20/Events/onEndUrlLoading",children:(0,n.jsx)(r.code,{children:"On End URL Loading"})})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/pt/20/Events/onUrlLoadingError",children:(0,n.jsx)(r.code,{children:"On URL Loading Error"})})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/pt/20/Events/onUrlFiltering",children:(0,n.jsx)(r.code,{children:"On URL Filtering"})})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/pt/20/Events/onOpenExternalLink",children:(0,n.jsx)(r.code,{children:"On Open External Link"})})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/pt/20/Events/onWindowOpeningDenied",children:(0,n.jsx)(r.code,{children:"On Window Opening Denied"})})}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Al\xe9m disso, \xe1reas web s\xe3o compat\xedveis com os eventos de formul\xe1rio gen\xe9ricos abaixo:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/pt/20/Events/onLoad",children:(0,n.jsx)(r.code,{children:"On Load"})})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/pt/20/Events/onUnload",children:(0,n.jsx)(r.code,{children:"On Unload"})})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/pt/20/Events/onGettingFocus",children:(0,n.jsx)(r.code,{children:"On Getting Focus"})})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/pt/20/Events/onLosingFocus",children:(0,n.jsx)(r.code,{children:"On Losing Focus"})})}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"regras-das-\xe1reas-web",children:"Regras das \xe1reas web"}),"\n",(0,n.jsx)(r.h3,{id:"interface-do-usu\xe1rio",children:"Interface do usu\xe1rio"}),"\n",(0,n.jsx)(r.p,{children:"Quando o formul\xe1rio for executado, as fun\xe7\xf5es da interface de navegador padr\xe3o est\xe3o dispon\xedveis para o usu\xe1rio na \xe1rea web, o que permite a intera\xe7\xe3o com outras \xe1reas do formul\xe1rio:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Comandos menu Edi\xe7\xe3o"}),": quando a \xe1rea web tiver o foco, os comandos do menu ",(0,n.jsx)(r.strong,{children:"Edi\xe7\xe3o"})," podem ser utilizadas para realizar a\xe7\xf5es como copiar, colar, selecionar tudo, etc., segundo a sele\xe7\xe3o."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"O menu contextual"}),": \xe9 poss\xedvel utilizar o ",(0,n.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesEntry#context-menu",children:"menu contextual"})," padr\xe3o do sistema com a \xe1rea web. Display of the context menu can be controlled using the ",(0,n.jsx)(r.code,{children:"WA SET PREFERENCE"})," command."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Arrastar e soltar"}),': o usu\xe1rio pode arrastar e soltar texto, imagens e documentos dentro da \xe1rea web ou entre uma \xe1rea web e os objetos dos formul\xe1rios 4D, segundo as propriedades dos objetos 4D. Por raz\xf5es de seguran\xe7a, n\xe3o \xe9 permitido mudar os conte\xfados da \xe1rea Web arrastando e soltando seja um arquivo ou URL. In this case, the mouse cursor displays a "forbidden" icon ',(0,n.jsx)(r.img,{src:o(757503).Z+"",width:"26",height:"28"}),". Voc\xea precisa usar a instru\xe7\xe3o ",(0,n.jsx)(r.code,{children:'WA SET PREFERENCE(*; "warea";WA enable URL drop;True)'}),' para exibir um \xedcone "drop" e gerar o evento ',(0,n.jsx)(r.a,{href:"/docs/pt/20/Events/onWindowOpeningDenied",children:(0,n.jsx)(r.code,{children:"On Window Opening Denied"})}),". Neste caso, pode chamar o comando ",(0,n.jsx)(r.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1020.html",children:(0,n.jsx)(r.code,{children:"WA OPEN URL"})})," ou definir a ",(0,n.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesWebArea#url",children:"vari\xe1vel URL"})," em resposta a uma queda do usu\xe1rio."]}),"\n"]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:["Os recursos de arrastar e soltar descritos acima n\xe3o s\xe3o suportados em \xe1reas web usando o mecanismo de renderiza\xe7\xe3o do sistema ",(0,n.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"macOS"}),"."]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"subformul\xe1rios",children:"Subformul\xe1rios"}),"\n",(0,n.jsx)(r.p,{children:"Por raz\xf5es relacionadas com os mecanismos de redesenho de janelas, a inser\xe7\xe3o de uma \xe1rea web em um subformul\xe1rio est\xe1 sujeita \xe0s restri\xe7\xf5es abaixo:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"O subformul\xe1rio n\xe3o deve poder deslocar-se"}),"\n",(0,n.jsx)(r.li,{children:"Os limites da \xe1rea Web n\xe3o devem ultrapassar o tamanho do subformul\xe1rio"}),"\n"]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"N\xe3o \xe9 compat\xedvel sobrepor uma \xe1rea Web no topo ou debaixo dos outros objetos formul\xe1rio."}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"conflito-entre-a-\xe1rea-web-e-o-servidor-web-windows",children:"Conflito entre a \xe1rea Web e o servidor Web (Windows)"}),"\n",(0,n.jsx)(r.p,{children:"Em Windows, n\xe3o \xe9 recomendado acessar, atrav\xe9s de uma \xe1rea web, o servidor web da aplica\xe7\xe3o 4D que contenha a \xe1rea, j\xe1 que esta configura\xe7\xe3o poderia provocar um conflito que paralise a aplica\xe7\xe3o. Com certeza um 4D remoto pode acessar ao servidor web de 4D Server, mas n\xe3o ao seu pr\xf3prio servidor web."}),"\n",(0,n.jsx)(r.h3,{id:"inser\xe7\xe3o-de-protocolo-macos",children:"Inser\xe7\xe3o de protocolo (macOS)"}),"\n",(0,n.jsxs)(r.p,{children:['As URLs manejadas por programa\xe7\xe3o em \xe1reas web em macOS devem come\xe7ar com o  protocolo. Por exemplo, voc\xea precisa passar a cadeia de caracteres "',(0,n.jsx)(r.a,{href:"http://www.mysite.com",children:"http://www.mysite.com"}),'" e n\xe3o apenas "',(0,n.jsx)(r.a,{href:"http://www.mysite.com",children:"www.mysite.com"}),'".']}),"\n",(0,n.jsx)(r.h2,{id:"access-to-web-inspector",children:"Access to web inspector"}),"\n",(0,n.jsx)(r.p,{children:"Pode ver e usar um inspetor web dentro das \xe1reas web de seus formul\xe1rios. The web inspector is a debugger which is provided by the embedded Web engine. It allows parsing the code and the flow of information of the web pages."}),"\n",(0,n.jsxs)(r.p,{children:["To display the web inspector, you can either execute the ",(0,n.jsx)(r.code,{children:"WA OPEN WEB INSPECTOR"})," command, or use the context menu of the web area."]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsxs)(r.strong,{children:["Execute the ",(0,n.jsx)(r.code,{children:"WA OPEN WEB INSPECTOR"})," command"]}),(0,n.jsx)(r.br,{})," This command can be used directly with onscreen (form object) and offscreen web areas."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Use the web area context menu"}),(0,n.jsx)(r.br,{})," This feature can only be used with onscreen web areas and requires that the following conditions are met:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Deve ativar o ",(0,n.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesEntry#context-menu",children:"menu contextual"})," da \xe1rea (este menu se utiliza para chamar ao inspetor)"]}),"\n",(0,n.jsx)(r.li,{children:"Deve habilitar expressamente ao uso do inspetor na \xe1rea mediante a instru\xe7\xe3o abaixo:"}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'    WA SET PREFERENCE(*;"WA";WA enable Web inspector;True)  \n'})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:["Com o mecanismo de renderiza\xe7\xe3o ",(0,n.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"do sistema Windows"}),", uma altera\xe7\xe3o nesta prefer\xeancia requer uma a\xe7\xe3o de navega\xe7\xe3o na \xe1rea (por exemplo, uma atualiza\xe7\xe3o de p\xe1gina) para ser tida em conta."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Para mais informa\xe7\xf5es, consultar a descri\xe7\xe3o do comando ",(0,n.jsx)(r.code,{children:"WA SET PREFERENCE"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["When you have done the settings as described above, you then have new options such as ",(0,n.jsx)(r.strong,{children:"Inspect Element"})," in the context menu of the area. Quando selecionar essa op\xe7\xe3o, a janela do inspetor Web \xe9 exibida."]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Para uma descri\xe7\xe3o detalhada nas funcionalidades do depurador, veja a documenta\xe7\xe3o fornecida pelo motor de renderiza\xe7\xe3o web."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"propriedades-compat\xedveis",children:"Propriedades compat\xedveis"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Border Line Style"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesEntry#context-menu",children:"Context Menu"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesAction#method",children:"Method"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesWebArea#progression",children:"Progression"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesWebArea#url",children:"URL"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"Use embedded Web rendering engine"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesDisplay#visibility",children:"Visibilty"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]})]})}function h(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},757503:function(e,r,o){o.d(r,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAcCAIAAADwcTiEAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA00lEQVR4nK3QWw7CQAgFUPa/Bt9xC2rbrdjWpSgJCSIwQM2Q+zXcOXaE3W3pGEgbm9Kduz87JuHeZqrc/jHL0GUwQ+dY2MC5kEKrnLLkS1MR7BsVFPwDaov5codhsW/EEzxXCUSfUxcCUXOt34zF1tbheF0Uq1ws/sMFos8dx5Ui13yoVnLr9h2uIrbK4N6xnBXdps9VRJ87jwvlNMwY+yguUFSBbnE0p0RGeQLrh2t9gjv2qylwmVaKFV2Uzm0/4SQqJ+4nHIYLKgnXJb256/TqmA8UCWnf7F651gAAAABJRU5ErkJggg=="},250065:function(e,r,o){o.d(r,{Z:function(){return d},a:function(){return i}});var s=o(667294);let n={},a=s.createContext(n);function i(e){let r=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);