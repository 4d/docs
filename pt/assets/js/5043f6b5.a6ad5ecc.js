/*! For license information please see 5043f6b5.a6ad5ecc.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53904],{798689:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=n(474848),s=n(28453);const i={id:"webAreaOverview",title:"\xc1rea Web"},t=void 0,a={id:"FormObjects/webAreaOverview",title:"\xc1rea Web",description:"Vis\xe3o Geral",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/FormObjects/webArea_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/webAreaOverview",permalink:"/docs/pt/18/FormObjects/webAreaOverview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FwebArea_overview.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"webAreaOverview",title:"\xc1rea Web"},sidebar:"docs",previous:{title:"Text",permalink:"/docs/pt/18/FormObjects/text"},next:{title:"\xc1rea 4D View Pro",permalink:"/docs/pt/18/FormObjects/viewProAreaOverview"}},d={},c=[{value:"Vis\xe3o Geral",id:"Vis\xe3o-Geral",level:2},{value:"Propriedades espec\xedficas",id:"Propriedades-espec\xedficas",level:2},{value:"Vari\xe1veis associadas",id:"Vari\xe1veis-associadas",level:3},{value:"Motor de renderiza\xe7\xe3o Web",id:"Motor-de-renderiza\xe7\xe3o-Web",level:3},{value:"Acesso a m\xe9todos 4D",id:"Acesso-a-m\xe9todos-4D",level:3},{value:"Objecto $4d",id:"Objecto-4d",level:3},{value:"Exemplo 1",id:"Exemplo-1",level:4},{value:"Exemplo 2",id:"Exemplo-2",level:4},{value:"A\xe7\xf5es padr\xe3o",id:"A\xe7\xf5es-padr\xe3o",level:2},{value:"Eventos formul\xe1rio",id:"Eventos-formul\xe1rio",level:2},{value:"Regras das \xe1reas web",id:"Regras-das-\xe1reas-web",level:2},{value:"Interface do usu\xe1rio",id:"Interface-do-usu\xe1rio",level:3},{value:"Subformul\xe1rios",id:"Subformul\xe1rios",level:3},{value:"Conflito entre a \xe1rea Web e o servidor Web (Windows)",id:"Conflito-entre-a-\xe1rea-Web-e-o-servidor-Web-Windows",level:3},{value:"Plugins Web e applets Java",id:"Plugins-Web-e-applets-Java",level:3},{value:"Inser\xe7\xe3o de protocolo (macOS)",id:"Inser\xe7\xe3o-de-protocolo-macOS",level:3},{value:"Acesso ao inspetor Web",id:"Acesso-ao-inspetor-Web",level:2},{value:"Exibir o inspector Web",id:"Exibir-o-inspector-Web",level:3},{value:"Utilizar o inspetor Web",id:"Utilizar-o-inspetor-Web",level:3},{value:"Propriedades compat\xedveis",id:"Propriedades-compat\xedveis",level:2}];function l(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h2,{id:"Vis\xe3o-Geral",children:"Vis\xe3o Geral"}),"\n",(0,o.jsxs)(r.p,{children:["The Web areas can display various types of Web content within your forms: HTML pages with static or dynamic contents, files, pictures, Javascript, etc. The rendering engine of the Web area depends on the execution platform of the application and the selected ",(0,o.jsx)(r.a,{href:"/docs/pt/18/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"rendering engine option"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["\xc9 poss\xedvel criar v\xe1rias \xe1reas Web no mesmo formul\xe1rio. Note, however, that the use of Web areas must follow ",(0,o.jsx)(r.a,{href:"#web-areas-rules",children:"several rules"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["Several dedicated ",(0,o.jsx)(r.a,{href:"#standard-actions",children:"standard actions"}),", numerous ",(0,o.jsx)(r.a,{href:"https://doc.4d.com/4Dv18/4D/18/Web-Area.201-4504309.en.html",children:"language commands"})," as well as generic and specific ",(0,o.jsx)(r.a,{href:"#form-events",children:"form events"})," allow the developer to control the functioning of Web areas. Specific variables can be used to exchange information between the area and the 4D environment."]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsx)(r.p,{children:"The use of Web plugins and Java applets is not recommended in Web areas because they may lead to instability in the operation of 4D, particularly at the event management level."}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"Propriedades-espec\xedficas",children:"Propriedades espec\xedficas"}),"\n",(0,o.jsx)(r.h3,{id:"Vari\xe1veis-associadas",children:"Vari\xe1veis associadas"}),"\n",(0,o.jsx)(r.p,{children:"Duas vari\xe1veis espec\xedficas podem ser associadas a cada \xe1rea da Web:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/docs/pt/18/FormObjects/propertiesWebArea#url",children:(0,o.jsx)(r.code,{children:"URL"})})," --to control the URL displayed by the Web area"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/docs/pt/18/FormObjects/propertiesWebArea#progression",children:(0,o.jsx)(r.code,{children:"Progression"})})," -- to control the loading percentage of the page displayed in the Web area."]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"Motor-de-renderiza\xe7\xe3o-Web",children:"Motor de renderiza\xe7\xe3o Web"}),"\n",(0,o.jsxs)(r.p,{children:["You can choose between ",(0,o.jsx)(r.a,{href:"/docs/pt/18/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"two rendering engines"})," for the Web area, depending on the specifics of your application."]}),"\n",(0,o.jsx)(r.p,{children:"Selecting the embedded web rendering engine allows you to call 4D methods from the Web area."}),"\n",(0,o.jsx)(r.h3,{id:"Acesso-a-m\xe9todos-4D",children:"Acesso a m\xe9todos 4D"}),"\n",(0,o.jsxs)(r.p,{children:["When the ",(0,o.jsx)(r.a,{href:"/docs/pt/18/FormObjects/propertiesWebArea#access-4d-methods",children:"Access 4D methods"})," property is selected, you can call 4D methods from a Web area."]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:["This property is only available if the Web area ",(0,o.jsx)(r.a,{href:"#use-embedded-web-rendering-engine",children:"uses the embedded Web rendering engine"}),"."]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"Objecto-4d",children:"Objecto $4d"}),"\n",(0,o.jsxs)(r.p,{children:["O ",(0,o.jsx)(r.a,{href:"#use-embedded-web-rendering-engine",children:"motor de renderiza\xe7\xe3o web embebido de 4D"}),' fornece \xe0 \xe1rea um objeto JavaScript chamado $4d que pode ser associado a qualquer m\xe9todo projeto 4D utilizando a nota\xe7\xe3o objeto ".".']}),"\n",(0,o.jsxs)(r.p,{children:["For example, to call the ",(0,o.jsx)(r.code,{children:"HelloWorld"})," 4D method, you just execute the following statement:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-codeJS",children:"$4d. HelloWorld();\n"})}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsx)(r.p,{children:'JavaScript is case sensitive so it is important to note that the object is named $4d (with a lowercase "d").'}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"A sintaxe das chamadas aos m\xe9todos 4D \xe9 a seguinte:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-codeJS",children:"$4d.4DMethodName(param1,paramN,function(result){})\n"})}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"param1...paramN"}),": You can pass as many parameters as you need to the 4D method. These parameters can be of any type supported by JavaScript (string, number, array, object)."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"function(result)"}),': fun\xe7\xe3o a passar como \xfaltimo argumento. Esta fun\xe7\xe3o "callback" \xe9 chamada de forma s\xedncrona quando o m\xe9todo 4D termina de ser executado. Recebe o par\xe2metro ',(0,o.jsx)(r.code,{children:"result"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"result"}),': Execution result of the 4D method, returned in the "$0" expression. This result can be of any type supported by JavaScript (string, number, array, object). Voc\xea pode usar o comando ',(0,o.jsx)(r.code,{children:"C_OBJECT"})," para retornar os objetos."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:["Por padr\xe3o, 4D trabalha em UTF-8. When you return text containing extended characters, for example characters with accents, make sure the encoding of the page displayed in the Web area is declared as UTF-8, otherwise the characters may be rendered incorrectly. In this case, add the following line in the HTML page to declare the encoding: ",(0,o.jsx)(r.code,{children:'<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'})]}),"\n"]}),"\n",(0,o.jsx)(r.h4,{id:"Exemplo-1",children:"Exemplo 1"}),"\n",(0,o.jsxs)(r.p,{children:["Given a 4D project method named ",(0,o.jsx)(r.code,{children:"today"})," that does not receive parameters and returns the current date as a string."]}),"\n",(0,o.jsxs)(r.p,{children:["C\xf3digo 4D do m\xe9todo ",(0,o.jsx)(r.code,{children:"today"}),":"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:" C_TEXT($0)\n $0:=String(Current date;System date long)\n"})}),"\n",(0,o.jsx)(r.p,{children:"Na \xe1rea Web, o m\xe9todo 4D pode ser chamado com a seguinte sintaxe:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:"$4d.today()\n"})}),"\n",(0,o.jsx)(r.p,{children:"The 4D method does not receive any parameters but it does return the value of $0 to the callback function called by 4D after the execution of the method. We want to display the date in the HTML page that is loaded by the Web area."}),"\n",(0,o.jsx)(r.p,{children:"Aqui est\xe1 o c\xf3digo da p\xe1gina HTML:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-html",children:'<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n <script type="text/javascript">\n$4d.today(function(dollarZero)\n{\n    var curDate = dollarZero;\n    document.getElementById("mydiv").innerHTML=curDate;\n});\n<\/script>\n</head>\n<body>Today is: <div id="mydiv"></div>\n</body>\n</html>\n'})}),"\n",(0,o.jsx)(r.h4,{id:"Exemplo-2",children:"Exemplo 2"}),"\n",(0,o.jsxs)(r.p,{children:["The 4D project method ",(0,o.jsx)(r.code,{children:"calcSum"})," receives parameters (",(0,o.jsx)(r.code,{children:"$1...$n"}),") and returns their sum in ",(0,o.jsx)(r.code,{children:"$0"}),":"]}),"\n",(0,o.jsxs)(r.p,{children:["C\xf3digo 4D do m\xe9todo ",(0,o.jsx)(r.code,{children:"calcSum"}),":"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:" C_REAL(${1}) // recebe n par\xe2metros do tipo REAL\n C_REAL($0) // devolve um Real\n C_LONGINT($i;$n)\n $n:=Count parameters\n For($i;1;$n)\n    $0:=$0+${$i}\n End for\n"})}),"\n",(0,o.jsx)(r.p,{children:"O c\xf3digo JavaScript executado na \xe1rea Web \xe9:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:"$4d.calcSum(33, 45, 75, 102.5, 7, function(dollarZero)\n    {\n        var result = dollarZero // o resultado \xe9 262.5\n    });\n"})}),"\n",(0,o.jsx)(r.h2,{id:"A\xe7\xf5es-padr\xe3o",children:"A\xe7\xf5es padr\xe3o"}),"\n",(0,o.jsxs)(r.p,{children:["Four specific standard actions are available for managing Web areas automatically: ",(0,o.jsx)(r.code,{children:"Open Back URL"}),", ",(0,o.jsx)(r.code,{children:"Open Next URL"}),", ",(0,o.jsx)(r.code,{children:"Refresh Current URL"})," and ",(0,o.jsx)(r.code,{children:"Stop Loading URL"}),". These actions can be associated with buttons or menu commands and allow quick implementation of basic Web interfaces. Estas a\xe7\xf5es s\xe3o descritas em ",(0,o.jsx)(r.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Standard-actions.300-4354791.en.html",children:"a\xe7\xf5es standard"}),"."]}),"\n",(0,o.jsx)(r.h2,{id:"Eventos-formul\xe1rio",children:"Eventos formul\xe1rio"}),"\n",(0,o.jsx)(r.p,{children:"Specific form events are intended for programmed management of Web areas, more particularly concerning the activation of links:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"On Begin URL Loading"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"On URL Resource Loading"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"On End URL Loading"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"On URL Loading Error"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"On URL Filtering"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"On Open External Link"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"On Window Opening Denied"})}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"Al\xe9m disso, as \xe1reas da Web s\xe3o compat\xedveis com os seguintes eventos de formul\xe1rio gen\xe9ricos:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"On Load"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"On Unload"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"On Getting Focus"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.code,{children:"On Losing Focus"})}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"Regras-das-\xe1reas-web",children:"Regras das \xe1reas web"}),"\n",(0,o.jsx)(r.h3,{id:"Interface-do-usu\xe1rio",children:"Interface do usu\xe1rio"}),"\n",(0,o.jsx)(r.p,{children:"When the form is executed, standard browser interface functions are available to the user in the Web area, which permit interaction with other form areas:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Edit menu commands"}),": When the Web area has the focus, the ",(0,o.jsx)(r.strong,{children:"Edit"})," menu commands can be used to carry out actions such as copy, paste, select all, etc., according to the selection."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Context menu"}),": It is possible to use the standard ",(0,o.jsx)(r.a,{href:"/docs/pt/18/FormObjects/propertiesEntry#context-menu",children:"context menu"})," of the system with the Web area. Display of the context menu can be controlled using the ",(0,o.jsx)(r.code,{children:"WA SET PREFERENCE"})," command."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Drag and drop"}),': The user can drag and drop text, pictures and documents within the Web area or between a Web area and the 4D form objects, according to the 4D object properties. For security reasons, changing the contents of a Web area by means of dragging and dropping a file or URL is not allowed by default. Neste caso, o cursor do rato apresenta um \xedcone "proibido" ',(0,o.jsx)(r.img,{src:n(565542).A+"",width:"26",height:"28"}),". You have to use the ",(0,o.jsx)(r.code,{children:"WA SET PREFERENCE"})," command to explicitly allow the dropping of URLs or files in the area."]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"Subformul\xe1rios",children:"Subformul\xe1rios"}),"\n",(0,o.jsx)(r.p,{children:"For reasons related to window redrawing mechanisms, the insertion of a Web area into a subform is subject to the following constraints:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"O subformul\xe1rio n\xe3o deve poder deslocar-se"}),"\n",(0,o.jsx)(r.li,{children:"Os limites da \xe1rea Web n\xe3o devem ultrapassar o tamanho do subformul\xe1rio"}),"\n"]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsx)(r.p,{children:"Superimposing a Web area on top of or beneath other form objects is not supported."}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"Conflito-entre-a-\xe1rea-Web-e-o-servidor-Web-Windows",children:"Conflito entre a \xe1rea Web e o servidor Web (Windows)"}),"\n",(0,o.jsx)(r.p,{children:"Under Windows, it is not recommended to access, via a Web area, the Web server of the 4D application containing the area because this configuration could lead to a conflict that freezes the application. Of course, a remote 4D can access the Web server of 4D Server, but not its own Web server."}),"\n",(0,o.jsx)(r.h3,{id:"Plugins-Web-e-applets-Java",children:"Plugins Web e applets Java"}),"\n",(0,o.jsx)(r.p,{children:"The use of Web plugins and Java applets is not recommended in Web areas because they may lead to instability in the operation of 4D, particularly at the event management level."}),"\n",(0,o.jsx)(r.h3,{id:"Inser\xe7\xe3o-de-protocolo-macOS",children:"Inser\xe7\xe3o de protocolo (macOS)"}),"\n",(0,o.jsxs)(r.p,{children:['The URLs handled by programming in Web areas under macOS must begin with the protocol. Por exemplo, voc\xea precisa passar a cadeia de caracteres "',(0,o.jsx)(r.a,{href:"http://www.mysite.com",children:"http://www.mysite.com"}),'" e n\xe3o apenas "',(0,o.jsx)(r.a,{href:"http://www.mysite.com",children:"www.mysite.com"}),'".']}),"\n",(0,o.jsx)(r.h2,{id:"Acesso-ao-inspetor-Web",children:"Acesso ao inspetor Web"}),"\n",(0,o.jsx)(r.p,{children:"Voc\xea pode visualizar e usar um inspetor Web nas \xe1reas Web dos seus formul\xe1rios. O inspetor Web \xe9 um depurador fornecido pelo motor Web integrado. It allows to parse the code and the flow of information of the Web pages."}),"\n",(0,o.jsx)(r.h3,{id:"Exibir-o-inspector-Web",children:"Exibir o inspector Web"}),"\n",(0,o.jsx)(r.p,{children:"The following conditions must be met in order to view the Web inspector in a Web area:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["You must ",(0,o.jsx)(r.a,{href:"/docs/pt/18/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"select the embedded Web rendering engine"})," for the area (the Web inspector is only available with this configuration)."]}),"\n",(0,o.jsxs)(r.li,{children:["You must enable the ",(0,o.jsx)(r.a,{href:"/docs/pt/18/FormObjects/propertiesEntry#context-menu",children:"context menu"})," for the area (this menu is used to call the inspector)"]}),"\n",(0,o.jsx)(r.li,{children:"You must expressly enable the use of the inspector in the area by means of the following statement:"}),"\n"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:' WA SET PREFERENCE(*;"WA";WA enable Web inspector;True)\n'})}),"\n",(0,o.jsx)(r.h3,{id:"Utilizar-o-inspetor-Web",children:"Utilizar o inspetor Web"}),"\n",(0,o.jsxs)(r.p,{children:["When you have done the settings as described above, you then have new options such as ",(0,o.jsx)(r.strong,{children:"Inspect Element"})," in the context menu of the area. Quando voc\xea seleciona essa op\xe7\xe3o, a janela do inspetor da Web \xe9 exibida."]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsx)(r.p,{children:"O inspetor Web est\xe1 inclu\xeddo no mecanismo de renderiza\xe7\xe3o Web incorporado. For a detailed description of the features of this debugger, refer to the documentation provided by the Web rendering engine."}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"Propriedades-compat\xedveis",children:"Propriedades compat\xedveis"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/pt/18/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Border Line Style"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/18/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/18/FormObjects/propertiesEntry#context-menu",children:"Context Menu"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/18/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/18/FormObjects/propertiesAction#method",children:"Method"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/18/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/18/FormObjects/propertiesWebArea#progression",children:"Progression"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/18/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/18/FormObjects/propertiesWebArea#url",children:"URL"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/18/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"Use embedded Web rendering engine"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/18/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/18/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/18/FormObjects/propertiesDisplay#visibility",children:"Visibilty"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,r,n)=>{var o=n(296540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var o,i={},c=null,l=null;for(o in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(l=r.ref),r)t.call(r,o)&&!d.hasOwnProperty(o)&&(i[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===i[o]&&(i[o]=r[o]);return{$$typeof:s,type:e,key:c,ref:l,props:i,_owner:a.current}}r.Fragment=i,r.jsx=c,r.jsxs=c},474848:(e,r,n)=>{e.exports=n(221020)},565542:(e,r,n)=>{n.d(r,{A:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAcCAIAAADwcTiEAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA00lEQVR4nK3QWw7CQAgFUPa/Bt9xC2rbrdjWpSgJCSIwQM2Q+zXcOXaE3W3pGEgbm9Kduz87JuHeZqrc/jHL0GUwQ+dY2MC5kEKrnLLkS1MR7BsVFPwDaov5codhsW/EEzxXCUSfUxcCUXOt34zF1tbheF0Uq1ws/sMFos8dx5Ui13yoVnLr9h2uIrbK4N6xnBXdps9VRJ87jwvlNMwY+yguUFSBbnE0p0RGeQLrh2t9gjv2qylwmVaKFV2Uzm0/4SQqJ+4nHIYLKgnXJb256/TqmA8UCWnf7F651gAAAABJRU5ErkJggg=="},28453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>a});var o=n(296540);const s={},i=o.createContext(s);function t(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);