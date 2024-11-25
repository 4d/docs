"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3161"],{684008:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>h,assets:()=>d,toc:()=>l,frontMatter:()=>a});var r=JSON.parse('{"id":"WebServer/httpRequests","title":"Processamento de pedidos HTTP","description":"O servidor web 4D oferece v\xe1rias funcionalidades para lidar com solicita\xe7\xf5es HTTP:","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/WebServer/httpRequests.md","sourceDirName":"WebServer","slug":"/WebServer/httpRequests","permalink":"/docs/pt/20/WebServer/httpRequests","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FhttpRequests.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"httpRequests","title":"Processamento de pedidos HTTP"},"sidebar":"docs","previous":{"title":"P\xe1ginas de modelo","permalink":"/docs/pt/20/WebServer/templates"},"next":{"title":"Permitir m\xe9todos projeto","permalink":"/docs/pt/20/WebServer/allowProject"}}'),s=t("785893"),o=t("250065");let a={id:"httpRequests",title:"Processamento de pedidos HTTP"},i=void 0,d={},l=[{value:"On Web Connection",id:"on-web-connection",level:2},{value:"Chamadas m\xe9todos de base",id:"chamadas-m\xe9todos-de-base",level:3},{value:"Sintaxe",id:"sintaxe",level:3},{value:"$1 - Dados extra do URL",id:"1---dados-extra-do-url",level:3},{value:"$2 - Cabe\xe7alho e corpo do pedido HTTP",id:"2---cabe\xe7alho-e-corpo-do-pedido-http",level:3},{value:"$3 - Endere\xe7o IP do cliente Web",id:"3---endere\xe7o-ip-do-cliente-web",level:3},{value:"$4 - Endere\xe7o IP do servidor",id:"4---endere\xe7o-ip-do-servidor",level:3},{value:"$5 e $6 - Nome de usu\xe1rio e palavra-passe",id:"5-e-6---nome-de-usu\xe1rio-e-palavra-passe",level:3},{value:"/4DACTION",id:"4daction",level:2},{value:"Exemplo",id:"exemplo",level:4},{value:"4DACCI\xd3N para publicar formul\xe1rios",id:"4dacci\xf3n-para-publicar-formul\xe1rios",level:3},{value:"Exemplo",id:"exemplo-1",level:4},{value:"Obter valores de pedidos HTTP",id:"obter-valores-de-pedidos-http",level:2},{value:"Outros comandos do servidor Web",id:"outros-comandos-do-servidor-web",level:2},{value:"M\xe9todo projeto COMPILER_WEB",id:"m\xe9todo-projeto-compiler_web",level:2}];function c(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"O servidor web 4D oferece v\xe1rias funcionalidades para lidar com solicita\xe7\xf5es HTTP:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["the ",(0,s.jsx)(n.code,{children:"On Web Connection"})," database method, a router for your web application,"]}),"\n",(0,s.jsxs)(n.li,{children:["o URL ",(0,s.jsx)(n.code,{children:"/4DACTION"})," para chamar o c\xf3digo do lado do servidor"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WEB GET VARIABLES"})," to get values from HTML objects sent to the server"]}),"\n",(0,s.jsxs)(n.li,{children:["other commands such as ",(0,s.jsx)(n.code,{children:"WEB GET HTTP BODY"}),", ",(0,s.jsx)(n.code,{children:"WEB GET HTTP HEADER"}),", or ",(0,s.jsx)(n.code,{children:"WEB GET BODY PART"})," allow to customize the request processing, including cookies."]}),"\n",(0,s.jsxs)(n.li,{children:["o m\xe9todo projeto ",(0,s.jsx)(n.em,{children:"COMPILER_WEB"}),", para declarar suas vari\xe1veis."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"on-web-connection",children:"On Web Connection"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"On Web Connection"})," database method can be used as the entry point for the 4D Web server."]}),"\n",(0,s.jsx)(n.h3,{id:"chamadas-m\xe9todos-de-base",children:"Chamadas m\xe9todos de base"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"On Web Connection"})," database method is automatically called when the server receives any URL that is not a path to an existing page on the server. O m\xe9todo da base de dados \xe9 chamado com o URL."]}),"\n",(0,s.jsxs)(n.p,{children:['Por exemplo, a URL "',(0,s.jsx)(n.em,{children:"a/b/c"}),'" chamar\xe1 o m\xe9todo do banco de dados, mas "',(0,s.jsx)(n.em,{children:"a/b/c. tml"}),'" n\xe3o chamar\xe1 o m\xe9todo de banco de dados se a p\xe1gina "c.html" existir no subdiret\xf3rio "a/b" do arquivo ',(0,s.jsx)(n.a,{href:"/docs/pt/20/WebServer/webServerConfig#root-folder",children:"WebFolder"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["The request should have previously been accepted by the ",(0,s.jsx)(n.a,{href:"/docs/pt/20/WebServer/authentication#on-web-authentication",children:(0,s.jsx)(n.code,{children:"On Web Authentication"})})," database method (if it exists) and the web server must be launched."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"sintaxe",children:"Sintaxe"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"On Web Connection"}),"( ",(0,s.jsx)(n.em,{children:"$1"})," : Text ; ",(0,s.jsx)(n.em,{children:"$2"})," : Text ; ",(0,s.jsx)(n.em,{children:"$3"})," : Text ; ",(0,s.jsx)(n.em,{children:"$4"})," : Text ; ",(0,s.jsx)(n.em,{children:"$5"})," : Text ; ",(0,s.jsx)(n.em,{children:"$6"})," : Text )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metros"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{style:{textAlign:"center"}}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$1"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(n.td,{children:"URL"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$2"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(n.td,{children:"Cabe\xe7alhos HTTP + corpo HTTP (at\xe9 um limite de 32 kb)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$3"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(n.td,{children:"Endere\xe7o IP do cliente Web (browser)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$4"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(n.td,{children:"Endere\xe7o IP do servidor"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$5"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(n.td,{children:"Nome de usuario"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$6"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(n.td,{children:"Senha"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Estes par\xe2metros devem ser declarados como se indica a seguir:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"//M\xe9todo base On Web Authentication\n\n C_TEXT($1;$2;$3;$4;$5;$6)\n\n//C\xf3digo do m\xe9todo\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Alternatively, you can use the ",(0,s.jsx)(n.a,{href:"/docs/pt/20/Concepts/parameters#named-parameters",children:"named parameters"})," syntax:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"// On Web Connection database method\n#DECLARE ($url : Text; $header : Text; \\\n  $BrowserIP : Text; $ServerIP : Text; \\\n  $user : Text; $password : Text)\n\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Calling a 4D command that displays an interface element (",(0,s.jsx)(n.code,{children:"DIALOG"}),", ",(0,s.jsx)(n.code,{children:"ALERT"}),", etc.) is not allowed and ends the method processing."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"1---dados-extra-do-url",children:"$1 - Dados extra do URL"}),"\n",(0,s.jsx)(n.p,{children:"The first parameter ($1) is the URL entered by users in the address area of their web browser, without the host address."}),"\n",(0,s.jsx)(n.p,{children:"Vamos utilizar uma liga\xe7\xe3o intranet como exemplo. Suponha que o endere\xe7o IP do seu Web Server 4D \xe9 123.4.567.89. The following table shows the values of $1 depending on the URL entered in the web browser:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"URL introduzido no navegador Web"}),(0,s.jsx)(n.th,{children:"Valor do par\xe2metro $1"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"123.4.567.89"}),(0,s.jsx)(n.td,{children:"/"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"http://123.45.67.89",children:"http://123.45.67.89"})}),(0,s.jsx)(n.td,{children:"/"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"123.4.567.89/Customers"}),(0,s.jsx)(n.td,{children:"/Customers"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"http://123.45.67.89/Customers/Add",children:"http://123.45.67.89/Customers/Add"})}),(0,s.jsx)(n.td,{children:"/Customers/Add"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"123.4.567.89/Do_This/If_OK/Do_That"}),(0,s.jsx)(n.td,{children:"/Do_This/If_OK/Do_That"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:['Note que voc\xea est\xe1 livre para usar este par\xe2metro a sua conveni\xeancia. 4D simplesmente ignora o valor passado al\xe9m da parte do host da URL. For example, you can establish a convention where the value "',(0,s.jsx)(n.em,{children:"/Customers/Add"}),'" means \u201Cgo directly to add a new record in the ',(0,s.jsx)(n.code,{children:"[Customers]"})," table.\u201D By supplying the web users with a list of possible values and/or default bookmarks, you can provide shortcuts to different parts of your application. This way, web users can quickly access resources of your website without going through the entire navigation path each time they make a new connection."]}),"\n",(0,s.jsx)(n.h3,{id:"2---cabe\xe7alho-e-corpo-do-pedido-http",children:"$2 - Cabe\xe7alho e corpo do pedido HTTP"}),"\n",(0,s.jsxs)(n.p,{children:["O segundo par\xe2metro ($2) \xe9 o cabe\xe7alho e o corpo da solicita\xe7\xe3o HTTP enviada pelo navegador Web. Note that this information is passed to your ",(0,s.jsx)(n.code,{children:"On Web Connection"}),' database method "as is". Its contents will vary depending on the nature of the web browser attempting the connection.']}),"\n",(0,s.jsxs)(n.p,{children:["If your application uses this information, it is up to you to parse the header and the body. Voc\xea pode usar os comandos ",(0,s.jsx)(n.code,{children:"WEB GET HTTP HEADER"})," e ",(0,s.jsx)(n.code,{children:"WEB GET HTTP BODY"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"For performance reasons, the size of data passing through the $2 parameter must not exceed 32 KB. Para al\xe9m deste tamanho, s\xe3o truncados pelo servidor HTTP 4D."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"3---endere\xe7o-ip-do-cliente-web",children:"$3 - Endere\xe7o IP do cliente Web"}),"\n",(0,s.jsx)(n.p,{children:"O par\xe2metro $3 recebe o endere\xe7o IP do computador do navegador. This information can allow you to distinguish between intranet and internet connections."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["4D devolve endere\xe7os IPv4 em formato h\xedbrido IPv6/IPv4 escritos com um prefixo de 96 bits, por exemplo ::ffff:192.168.2.34 para o endere\xe7o IPv4 192.168.2.34. For more information, refer to the ",(0,s.jsx)(n.a,{href:"/docs/pt/20/WebServer/webServerConfig#about-ipv6-support",children:"IPv6 Support"})," section."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"4---endere\xe7o-ip-do-servidor",children:"$4 - Endere\xe7o IP do servidor"}),"\n",(0,s.jsxs)(n.p,{children:["The $4 parameter receives the IP address requested by the 4D Web Server. 4D allows for multi-homing, which allows you to use machines with more than one IP address. For more information, please refer to the ",(0,s.jsx)(n.a,{href:"webServerConfig.html#ip-address-to-listen",children:"Configuration page"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"5-e-6---nome-de-usu\xe1rio-e-palavra-passe",children:"$5 e $6 - Nome de usu\xe1rio e palavra-passe"}),"\n",(0,s.jsxs)(n.p,{children:["The $5 and $6 parameters receive the user name and password entered by the user in the standard identification dialog box displayed by the browser, if applicable (see the ",(0,s.jsx)(n.a,{href:"/docs/pt/20/WebServer/authentication",children:"authentication page"}),")."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"If the user name sent by the browser exists in 4D, the $6 parameter (the user\u2019s password) is not returned for security reasons."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"4daction",children:"/4DACTION"}),"\n",(0,s.jsxs)(n.p,{children:["***/4DACTION/",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"MethodName"})}),(0,s.jsx)(n.br,{})," **/4DACTION/*****",(0,s.jsx)(n.em,{children:"MethodName/Param"})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metros"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{style:{textAlign:"center"}}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MethodName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"Nome do m\xe9todo de projeto 4D a ser executado"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Param"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"Par\xe2metro texto a ser passado para o m\xe9todo projeto"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Utiliza\xe7\xe3o:"})," URL ou a\xe7\xe3o de formul\xe1rio."]}),"\n",(0,s.jsxs)(n.p,{children:["This URL allows you to call the ",(0,s.jsx)(n.em,{children:"MethodName"})," 4D project method with an optional ",(0,s.jsx)(n.em,{children:"Param"})," text parameter. O m\xe9todo receber\xe1 este par\xe2metro em ",(0,s.jsx)(n.em,{children:"$1"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The 4D project method must have been ",(0,s.jsx)(n.a,{href:"/docs/pt/20/WebServer/allowProject",children:"allowed for web requests"}),": the \u201CAvailable through 4D tags and URLs (4DACTION...)\u201D attribute value must have been checked in the properties of the method. Se o atributo n\xe3o for verificado, o pedido Web \xe9 rejeitado."]}),"\n",(0,s.jsxs)(n.li,{children:["When 4D receives a ",(0,s.jsx)(n.code,{children:"/4DACTION/MethodName/Param"})," request, the ",(0,s.jsx)(n.code,{children:"On Web Authentication"})," database method (if it exists) is called."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"4DACTION/"})," pode ser associado a um URL em uma p\xe1gina Web est\xe1tica:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<A HREF="/4DACTION/MyMethod/hello">Do Something</A>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"MyMethod"}),' project method should generally return a "reply" (sending of an HTML page using ',(0,s.jsx)(n.code,{children:"WEB SEND FILE"})," or ",(0,s.jsx)(n.code,{children:"WEB SEND TEXT"}),", etc.). Be sure to make the processing as short as possible in order not to block the browser."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["A method called by ",(0,s.jsx)(n.code,{children:"/4DACTION"})," must not call interface elements (",(0,s.jsx)(n.code,{children:"DIALOG"}),", ",(0,s.jsx)(n.code,{children:"ALERT"}),", etc.)."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsxs)(n.p,{children:["This example describes the association of the ",(0,s.jsx)(n.code,{children:"/4DACTION"})," URL with an HTML picture object in order to dynamically display a picture in the page. Inserir as seguintes instru\xe7\xf5es numa p\xe1gina HTML est\xe1tica:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<IMG SRC="/4DACTION/getPhoto/smith">\n'})}),"\n",(0,s.jsxs)(n.p,{children:["O m\xe9todo ",(0,s.jsx)(n.code,{children:"getPhoto"})," \xe9 o seguinte:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'C_TEXT($1) // This parameter must always be declared\nvar $path : Text\nvar $PictVar : Picture\nvar $BlobVar : Blob\n\n //find the picture in the Images folder within the Resources folder\n$path:=Get 4D folder(Current resources folder)+"Images"+Folder separator+$1+".psd"\n\nREAD PICTURE FILE($path;$PictVar) //put the picture in the picture variable\nPICTURE TO BLOB($PictVar;$BLOB;".png") //convert the picture to ".png" format\nWEB SEND BLOB($BLOB;"image/png")\n'})}),"\n",(0,s.jsx)(n.h3,{id:"4dacci\xf3n-para-publicar-formul\xe1rios",children:"4DACCI\xd3N para publicar formul\xe1rios"}),"\n",(0,s.jsx)(n.p,{children:"The 4D Web server also allows you to use \u201Cposted\u201D forms, which are static HTML pages that send data to the Web server, and to easily retrieve all the values. The POST type must be associated to them and the form\u2019s action must imperatively start with /4DACTION/MethodName."}),"\n",(0,s.jsx)(n.p,{children:"Um formul\xe1rio pode ser enviado por dois m\xe9todos (ambos podem ser usados com 4D):"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"POST, normalmente utilizado para enviar dados para o servidor Web,"}),"\n",(0,s.jsx)(n.li,{children:"GET, normalmente utilizado para pedir dados ao servidor Web."}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["When the Web server receives a posted form, it calls the ",(0,s.jsx)(n.code,{children:"On Web Authentication"})," database method (if it exists)."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In the called method, you must call the ",(0,s.jsx)(n.code,{children:"WEB GET VARIABLES"})," command in order to ",(0,s.jsx)(n.a,{href:"#getting-values-from-the-requests",children:"retrieve the names and values"})," of all the fields included in an HTML page submitted to the server."]}),"\n",(0,s.jsx)(n.p,{children:"Exemplo para definir a a\xe7\xe3o de um formul\xe1rio:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<FORM ACTION="/4DACTION/MethodName" METHOD=POST>\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo"}),"\n",(0,s.jsxs)(n.p,{children:['In a Web application, we would like for the browsers to be able to search among the records by using a static HTML page. Esta p\xe1gina chama-se "search.htm". The application contains other static pages that allow you to, for example, display the search result (\u201Cresults.htm\u201D). The POST type has been associated to the page, as well as the ',(0,s.jsx)(n.code,{children:"/4DACTION/SEARCH"})," action."]}),"\n",(0,s.jsx)(n.p,{children:"Aqui est\xe1 o c\xf3digo HTML que corresponde a esta p\xe1gina:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<form action="/4daction/processForm" method=POST>\n<input type=text name=vName value=""><br/>\n<input type=checkbox name=vExact value="Word">Whole word<br/>\n<input type=submit name=OK value="Search">\n</FORM>\n'})}),"\n",(0,s.jsxs)(n.p,{children:['During data entry, type \u201CABCD\u201D in the data entry area, check the "Whole word" option and validate it by clicking the ',(0,s.jsx)(n.strong,{children:"Search"})," button. No pedido enviado ao servidor Web:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'vName="ABCD"\nvExact="Word" OK="Search"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["4D calls the ",(0,s.jsx)(n.code,{children:"On Web Authentication"})," database method (if it exists), then the ",(0,s.jsx)(n.code,{children:"processForm"})," project method is called, which is as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' C_TEXT($1) //mandatory for compiled mode\n C_LONGINT($vName)\n C_TEXT(vName;vLIST)\n ARRAY TEXT($arrNames;0)\n ARRAY TEXT($arrVals;0)\n WEB GET VARIABLES($arrNames;$arrVals) //we retrieve all the variables of the form\n $vName:=Find in array($arrNames;"vName")\n vName:=$arrVals{$vName}\n If(Find in array($arrNames;"vExact")=-1) //If the option has not been checked\n    vName:=vName+"@"\n End if\n QUERY([Jockeys];[Jockeys]Name=vName)\n FIRST RECORD([Jockeys])\n While(Not(End selection([Jockeys])))\n    vLIST:=vLIST+[Jockeys]Name+" "+[Jockeys]Tel+"<br/>"\n    NEXT RECORD([Jockeys])\n End while\n WEB SEND FILE("results.htm") //Send the list to the results.htm form\n  //which contains a reference to the variable vLIST,\n  //for example \x3c!--4DHTML vLIST--\x3e\n  //...\nEnd if\n'})}),"\n",(0,s.jsx)(n.h2,{id:"obter-valores-de-pedidos-http",children:"Obter valores de pedidos HTTP"}),"\n",(0,s.jsx)(n.p,{children:"4D's Web server lets you recover data sent through POST or GET requests, using Web forms or URLs."}),"\n",(0,s.jsxs)(n.p,{children:["When the Web server receives a request with data in the header or in the URL, 4D can retrieve the values of any HTML objects it contains. This principle can be implemented in the case of a Web form, sent for example using ",(0,s.jsx)(n.code,{children:"WEB SEND FILE"})," or ",(0,s.jsx)(n.code,{children:"WEB SEND BLOB"}),", where the user enters or modifies values, then clicks on the validation button."]}),"\n",(0,s.jsxs)(n.p,{children:["In this case, 4D can retrieve the values of the HTML objects found in the request using the ",(0,s.jsx)(n.code,{children:"WEB GET VARIABLES"})," command. The ",(0,s.jsx)(n.code,{children:"WEB GET VARIABLES"})," command retrieves the values as text."]}),"\n",(0,s.jsx)(n.p,{children:"Considere o seguinte c\xf3digo fonte da p\xe1gina HTML:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<html>\n<head>\n  <title>Welcome</title>\n  <script language="JavaScript">\x3c!--\nfunction GetBrowserInformation(formObj){\nformObj.vtNav_appName.value = navigator.appName\nformObj.vtNav_appVersion.value = navigator.appVersion\nformObj.vtNav_appCodeName.value = navigator.appCodeName\nformObj.vtNav_userAgent.value = navigator.userAgent\nreturn true\n}\nfunction LogOn(formObj){\nif(formObj.vtUserName.value!=""){\nreturn true\n} else {\nalert("Enter your name, then try again.")\nreturn false\n}\n}\n//--\x3e<\/script>\n</head>\n<body>\n<form action="/4DACTION/WWW_STD_FORM_POST" method="post"\n name="frmWelcome"\n onsubmit="return GetBrowserInformation(frmWelcome)">\n  <h1>Welcome to Spiders United</h1>\n  <p><b>Please enter your name:</b>\n  <input name="vtUserName" value="" size="30" type="text"></p>\n  <p> \n<input name="vsbLogOn" value="Log On" onclick="return LogOn(frmWelcome)" type="submit"> \n<input name="vsbRegister" value="Register" type="submit">\n<input name="vsbInformation" value="Information" type="submit"></p>\n<p> \n<input name="vtNav_appName" value="" type="hidden"> \n<input name="vtNav_appVersion" value="" type="hidden"> \n<input name="vtNav_appCodeName" value="" type="hidden">\n<input name="vtNav_userAgent" value="" type="hidden"></p>\n</form>\n</body>\n</html>\nreturn false\n}\n}\n//--\x3e<\/script>\n</head>\n<body>\n<form action="/4DACTION/WWW_STD_FORM_POST" method="post"\n name="frmWelcome"\n onsubmit="return GetBrowserInformation(frmWelcome)">\n  <h1>Welcome to Spiders United</h1>\n  <b>Please enter your name:</b>\n  <input name="vtUserName" value="" size="30" type="text"></p>\n\n<input name="vsbLogOn" value="Log On" onclick="return LogOn(frmWelcome)" type="submit"> \n<input name="vsbRegister" value="Register" type="submit">\n<input name="vsbInformation" value="Information" type="submit"></p>\n\n<input name="vtNav_appName" value="" type="hidden"> \n<input name="vtNav_appVersion" value="" type="hidden"> \n<input name="vtNav_appCodeName" value="" type="hidden">\n<input name="vtNav_userAgent" value="" type="hidden"></p>\n</form>\n</body>\n</html>\nreturn false\n}\n}\n//--\x3e<\/script>\n</head>\n<body>\n<form action="/4DACTION/WWW_STD_FORM_POST" method="post"\n name="frmWelcome"\n onsubmit="return GetBrowserInformation(frmWelcome)">\n  <h1>Welcome to Spiders United</h1>\n  <p><b>Please enter your name:</b>\n  <input name="vtUserName" value="" size="30" type="text"></p>\n  <p>\n<input name="vsbLogOn" value="Log On" onclick="return LogOn(frmWelcome)" type="submit">\n<input name="vsbRegister" value="Register" type="submit">\n<input name="vsbInformation" value="Information" type="submit"></p>\n<p>\n<input name="vtNav_appName" value="" type="hidden">\n<input name="vtNav_appVersion" value="" type="hidden">\n<input name="vtNav_appCodeName" value="" type="hidden">\n<input name="vtNav_userAgent" value="" type="hidden"></p>\n</form>\n</body>\n</html>\n'})}),"\n",(0,s.jsx)(n.p,{children:"Quando 4D envia a p\xe1gina para um navegador Web, ela se parece com isso:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(200446).Z+"",width:"446",height:"156"})}),"\n",(0,s.jsx)(n.p,{children:"As principais caracter\xedsticas desta p\xe1gina s\xe3o:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["It includes three ",(0,s.jsx)(n.strong,{children:"Submit"})," buttons: ",(0,s.jsx)(n.code,{children:"vsbLogOn"}),", ",(0,s.jsx)(n.code,{children:"vsbRegister"})," and ",(0,s.jsx)(n.code,{children:"vsbInformation"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["When you click ",(0,s.jsx)(n.strong,{children:"Log On"}),", the submission of the form is first processed by the JavaScript function ",(0,s.jsx)(n.code,{children:"LogOn"}),". If no name is entered, the form is not even submitted to 4D, and a JavaScript alert is displayed."]}),"\n",(0,s.jsxs)(n.li,{children:["The form has a POST 4D method as well as a Submit script (",(0,s.jsx)(n.em,{children:"GetBrowserInformation"}),") that copies the browser properties to the four hidden objects whose names starts with ",(0,s.jsx)(n.em,{children:"vtNav_App"}),". Inclui tamb\xe9m o objecto ",(0,s.jsx)(n.code,{children:"vtUserName"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Let\u2019s examine the 4D method ",(0,s.jsx)(n.code,{children:"WWW_STD_FORM_POST"})," that is called when the user clicks on one of the buttons on the HTML form."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'  // Retrieval of value of variables\n ARRAY TEXT($arrNames;0)\n ARRAY TEXT($arrValues;0)\n WEB GET VARIABLES($arrNames;$arrValues)\n C_LONGINT($user)\n\n Case of\n\n  // The Log On button was clicked\n    :(Find in array($arrNames;"vsbLogOn")#-1)\n       $user :=Find in array($arrNames;"vtUserName")\n       QUERY([WWW Users];[WWW Users]UserName=$arrValues{$user})\n       $0:=(Records in selection([WWW Users])>0)\n       If($0)\n          WWW POST EVENT("Log On";WWW Log information)\n  // The WWW POST EVENT method saves the information in a database table\n       Else\n\n          $0:=WWW Register\n  // The WWW Register method lets a new Web user register\n       End if\n\n  // The Register button was clicked\n    :(Find in array($arrNames;"vsbRegister")#-1)\n       $0:=WWW Register\n\n  // The Information button was clicked\n    :(Find in array($arrNames;"vsbInformation")#-1)\n       WEB SEND FILE("userinfos.html")\n End case\n'})}),"\n",(0,s.jsx)(n.p,{children:"As funcionalidades deste m\xe9todo s\xe3o:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The values of the variables ",(0,s.jsx)(n.em,{children:"vtNav_appName"}),", ",(0,s.jsx)(n.em,{children:"vtNav_appVersion"}),", ",(0,s.jsx)(n.em,{children:"vtNav_appCodeName"}),", and ",(0,s.jsx)(n.em,{children:"vtNav_userAgent"})," (bound to the HTML objects having the same names) are retrieved using the ",(0,s.jsx)(n.code,{children:"WEB GET VARIABLES"})," command from HTML objects created by the ",(0,s.jsx)(n.em,{children:"GetBrowserInformation"})," JavaScript script."]}),"\n",(0,s.jsxs)(n.li,{children:["Out of the ",(0,s.jsx)(n.em,{children:"vsbLogOn"}),", ",(0,s.jsx)(n.em,{children:"vsbRegister"})," and ",(0,s.jsx)(n.em,{children:"vsbInformation"})," variables bound to the three Submit buttons, only the one corresponding to the button that was clicked will be retrieved by the ",(0,s.jsx)(n.code,{children:"WEB GET VARIABLES"})," command. When the submit is performed by one of these buttons, the browser returns the value of the clicked button to 4D. Isto diz-lhe qual o bot\xe3o em que se clicou."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Tenha em aten\xe7\xe3o que, com HTML, todos os objetos s\xe3o objetos texto. If you use a SELECT object, it is the value of the highlighted element in the object that is returned in the ",(0,s.jsx)(n.code,{children:"WEB GET VARIABLES"})," command, and not the position of the element in the array as in 4D. ",(0,s.jsx)(n.code,{children:"WEB GET VARIABLES"})," sempre retorna valores do tipo Text."]}),"\n",(0,s.jsx)(n.h2,{id:"outros-comandos-do-servidor-web",children:"Outros comandos do servidor Web"}),"\n",(0,s.jsx)(n.p,{children:"The 4D web server provides several low-level web commands allowing you to develop custom processing of requests:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["o comando ",(0,s.jsx)(n.code,{children:"WEB GET HTTP BODY"})," retorna o corpo como texto bruto, permitindo qualquer an\xe1lise que voc\xea possa precisar"]}),"\n",(0,s.jsxs)(n.li,{children:["o comando ",(0,s.jsx)(n.code,{children:"WEB GET HTTP HEADER"})," retornam os cabe\xe7alhos da solicita\xe7\xe3o. \xc9 \xfatil lidar com cookies personalizados, por exemplo (com o comando ",(0,s.jsx)(n.code,{children:"WEB SET HTTP HEADER"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["the ",(0,s.jsx)(n.code,{children:"WEB GET BODY PART"})," and ",(0,s.jsx)(n.code,{children:"WEB Get body part count"})," commands to parse the body part of a multi-part request and retrieve text values, but also files posted, using BLOBs."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Esses comandos est\xe3o resumidos no gr\xe1fico a seguir:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(195285).Z+"",width:"676",height:"374"})}),"\n",(0,s.jsxs)(n.p,{children:['The 4D web server supports files uploaded in chunked transfer encoding from any Web client. A codifica\xe7\xe3o de transfer\xeancia em peda\xe7os \xe9 um mecanismo de transfer\xeancia de dados especificado no HTTP/1.1. It allows data to be transferred in a series of "chunks" (parts) without knowing the final data size. The 4D Web Server also supports chunked transfer encoding from the server to Web clients (using ',(0,s.jsx)(n.code,{children:"WEB SEND RAW DATA"}),")."]}),"\n",(0,s.jsx)(n.h2,{id:"m\xe9todo-projeto-compiler_web",children:"M\xe9todo projeto COMPILER_WEB"}),"\n",(0,s.jsxs)(n.p,{children:["O m\xe9todo COMPILER_WEB, se existir, \xe9 chamado sistematicamente quando o servidor HTTP recebe uma solicita\xe7\xe3o din\xe2mica e chama ao motor 4D. This is the case, for example, when the 4D Web server receives a posted form or a URL to process in ",(0,s.jsx)(n.a,{href:"#on-web-connection",children:(0,s.jsx)(n.code,{children:"On Web Connection"})}),". This method is intended to contain typing and/or variable initialization directives used during Web exchanges. \xc9 utilizado pelo compilador quando a aplica\xe7\xe3o \xe9 compilada. O m\xe9todo COMPILER_WEB \xe9 comum a todos os formul\xe1rios Web. Por defeito, o m\xe9todo COMPILER_WEB n\xe3o existe. \xc9 necess\xe1rio cri\xe1-lo explicitamente."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"The COMPILER_WEB project method is also called, if it exists, for each SOAP request accepted."}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},195285:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/httpCommands-f0f40e81d3278591838e7c262365beb9.png"},200446:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/spiders-0e4915c8e3496e1dd10f0b15a4319274.png"},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return a}});var r=t(667294);let s={},o=r.createContext(s);function a(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);