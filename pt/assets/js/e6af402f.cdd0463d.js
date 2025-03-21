"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3161"],{684008:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>a,assets:()=>d,toc:()=>c,contentTitle:()=>i});var a=JSON.parse('{"id":"WebServer/httpRequests","title":"Processamento de pedidos HTTP","description":"O servidor da web 4D oferece v\xe1rias funcionalidades para lidar com solicita\xe7\xf5es HTTP:","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/WebServer/httpRequests.md","sourceDirName":"WebServer","slug":"/WebServer/httpRequests","permalink":"/docs/pt/20/WebServer/httpRequests","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FhttpRequests.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"httpRequests","title":"Processamento de pedidos HTTP"},"sidebar":"docs","previous":{"title":"P\xe1ginas de modelo","permalink":"/docs/pt/20/WebServer/templates"},"next":{"title":"Permitir m\xe9todos projeto","permalink":"/docs/pt/20/WebServer/allowProject"}}'),r=o("785893"),s=o("250065");let t={id:"httpRequests",title:"Processamento de pedidos HTTP"},i=void 0,d={},c=[{value:"On Web Connection",id:"on-web-connection",level:2},{value:"Chamadas dos m\xe9todos banco",id:"chamadas-dos-m\xe9todos-banco",level:3},{value:"Sintaxe",id:"sintaxe",level:3},{value:"$1 - Dados extra do URL",id:"1---dados-extra-do-url",level:3},{value:"$2 - Cabe\xe7alho e corpo do pedido HTTP",id:"2---cabe\xe7alho-e-corpo-do-pedido-http",level:3},{value:"$3 - Endere\xe7o IP do cliente Web",id:"3---endere\xe7o-ip-do-cliente-web",level:3},{value:"$4 - Endere\xe7o IP do servidor",id:"4---endere\xe7o-ip-do-servidor",level:3},{value:"$5 e $6 - Nome de usu\xe1rio e palavra-passe",id:"5-e-6---nome-de-usu\xe1rio-e-palavra-passe",level:3},{value:"/4DACTION",id:"4daction",level:2},{value:"Exemplo",id:"exemplo",level:4},{value:"4DACCI\xd3N para publicar formul\xe1rios",id:"4dacci\xf3n-para-publicar-formul\xe1rios",level:3},{value:"Exemplo",id:"exemplo-1",level:4},{value:"Obter valores de pedidos HTTP",id:"obter-valores-de-pedidos-http",level:2},{value:"Outros comandos do servidor Web",id:"outros-comandos-do-servidor-web",level:2},{value:"M\xe9todo projeto COMPILER_WEB",id:"m\xe9todo-projeto-compiler_web",level:2}];function l(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"O servidor da web 4D oferece v\xe1rias funcionalidades para lidar com solicita\xe7\xf5es HTTP:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["o m\xe9todo banco de dados ",(0,r.jsx)(n.code,{children:"On Web Connection"}),", um roteador para sua aplica\xe7\xe3o web,"]}),"\n",(0,r.jsxs)(n.li,{children:["o URL ",(0,r.jsx)(n.code,{children:"/4DACTION"})," para chamar o c\xf3digo do lado do servidor"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"WEB GET VARIABLES"})," para obter valores de objetos HTML enviados ao servidor"]}),"\n",(0,r.jsxs)(n.li,{children:["outros comandos como ",(0,r.jsx)(n.code,{children:"WEB GET HTTP BODY"}),", ",(0,r.jsx)(n.code,{children:"WEB GET HTTP HEADER"}),", ou ",(0,r.jsx)(n.code,{children:"WEB GET PARTE BODY"})," permite personalizar o processamento de requisi\xe7\xe3o, incluindo cookies."]}),"\n",(0,r.jsxs)(n.li,{children:["o m\xe9todo projeto ",(0,r.jsx)(n.em,{children:"COMPILER_WEB"}),", para declarar suas vari\xe1veis."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"on-web-connection",children:"On Web Connection"}),"\n",(0,r.jsxs)(n.p,{children:["O m\xe9todo banco de dados ",(0,r.jsx)(n.code,{children:"On Web Connection"})," pode ser usado como ponto de entrada para o servidor Web 4D."]}),"\n",(0,r.jsx)(n.h3,{id:"chamadas-dos-m\xe9todos-banco",children:"Chamadas dos m\xe9todos banco"}),"\n",(0,r.jsxs)(n.p,{children:["O m\xe9todo da base de dados \xe9 chamado com o URL. The ",(0,r.jsx)(n.code,{children:"On Web Connection"})," database method is automatically called when the server receives any URL that is not a path to an existing page on the server."]}),"\n",(0,r.jsxs)(n.p,{children:['Por exemplo, a URL "',(0,r.jsx)(n.em,{children:"a/b/c"}),'" chamar\xe1 o m\xe9todo do banco de dados, mas "',(0,r.jsx)(n.em,{children:"a/b/c. tml"}),'" n\xe3o chamar\xe1 o m\xe9todo de banco de dados se a p\xe1gina "c.html" existir no subdiret\xf3rio "a/b" do arquivo ',(0,r.jsx)(n.a,{href:"/docs/pt/20/WebServer/webServerConfig#root-folder",children:"WebFolder"}),"."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["O pedido deve ter sido aceite anteriormente pelo m\xe9todo de banco de dados ",(0,r.jsx)(n.a,{href:"/docs/pt/20/WebServer/authentication#on-web-authentication",children:(0,r.jsx)(n.code,{children:"On Web Authentication"})})," (se existir) e o servidor deve ser iniciado."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"sintaxe",children:"Sintaxe"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"On Web Connection"}),"( ",(0,r.jsx)(n.em,{children:"$1"})," : Text ; ",(0,r.jsx)(n.em,{children:"$2"})," : Text ; ",(0,r.jsx)(n.em,{children:"$3"})," : Text ; ",(0,r.jsx)(n.em,{children:"$4"})," : Text ; ",(0,r.jsx)(n.em,{children:"$5"})," : Text ; ",(0,r.jsx)(n.em,{children:"$6"})," : Text )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"$1"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsx)(n.td,{children:"URL"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"$2"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsx)(n.td,{children:"Cabe\xe7alhos HTTP + corpo HTTP (at\xe9 um limite de 32 kb)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"$3"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsx)(n.td,{children:"Endere\xe7o IP do cliente Web (browser)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"$4"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsx)(n.td,{children:"Endere\xe7o IP do servidor"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"$5"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsx)(n.td,{children:"Nome de usuario"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"$6"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsx)(n.td,{children:"Senha"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Estes par\xe2metros devem ser declarados como se indica a seguir:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"//M\xe9todo base On Web Authentication\n\n C_TEXT($1;$2;$3;$4;$5;$6)\n\n//C\xf3digo do m\xe9todo\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Como alternativa, voc\xea pode usar a sintaxe de ",(0,r.jsx)(n.a,{href:"/docs/pt/20/Concepts/parameters",children:"par\xe2metros temporais"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"// M\xe9todo banco de dados On Web Connection \n#DECLARE ($url : Text; $header : Text; \\\n  $BrowserIP : Text; $ServerIP : Text; \\\n  $user : Text; $password : Text)\n\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Chamando um comando 4D que exibe um elemento de interface (",(0,r.jsx)(n.code,{children:"DIALOG"}),", ",(0,r.jsx)(n.code,{children:"ALERT"}),", etc.) n\xe3o \xe9 permitido e termina o processamento do m\xe9todo."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"1---dados-extra-do-url",children:"$1 - Dados extra do URL"}),"\n",(0,r.jsx)(n.p,{children:"O primeiro par\xe2metro ($1) \xe9 a URL inserida pelos usu\xe1rios na \xe1rea de endere\xe7o de seu navegador da web, sem o endere\xe7o host."}),"\n",(0,r.jsx)(n.p,{children:"Vamos utilizar uma liga\xe7\xe3o intranet como exemplo. Suponha que o endere\xe7o IP do seu Web Server 4D \xe9 123.4.567.89. A tabela a seguir mostra os valores de $1 dependendo do URL inserida no navegador da Web:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"URL introduzido no navegador Web"}),(0,r.jsx)(n.th,{children:"Valor do par\xe2metro $1"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"123.4.567.89"}),(0,r.jsx)(n.td,{children:"/"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"http://123.45.67.89",children:"http://123.45.67.89"})}),(0,r.jsx)(n.td,{children:"/"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"123.4.567.89/Customers"}),(0,r.jsx)(n.td,{children:"/Customers"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"http://123.45.67.89/Customers/Add",children:"http://123.45.67.89/Customers/Add"})}),(0,r.jsx)(n.td,{children:"/Customers/Add"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"123.4.567.89/Do_This/If_OK/Do_That"}),(0,r.jsx)(n.td,{children:"/Do_This/If_OK/Do_That"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:['Note que voc\xea est\xe1 livre para usar este par\xe2metro a sua conveni\xeancia. 4D simplesmente ignora o valor passado al\xe9m da parte do host da URL. Por exemplo, voc\xea pode estabelecer uma conven\xe7\xe3o onde o valor "',(0,r.jsx)(n.em,{children:"/Customers/Add"}),'" significa "v\xe1 diretamente para adicionar um novo registro na tabela ',(0,r.jsx)(n.code,{children:"[Customers]"}),'." Fornecendo aos usu\xe1rios web uma lista de valores poss\xedveis e/ou favoritos padr\xe3o, voc\xea pode fornecer atalhos para diferentes partes de sua aplica\xe7\xe3o. Desta forma, os usu\xe1rios da web podem acessar rapidamente os recursos do seu site sem percorrer todo o caminho de navega\xe7\xe3o toda vez que fizerem uma nova conex\xe3o.']}),"\n",(0,r.jsx)(n.h3,{id:"2---cabe\xe7alho-e-corpo-do-pedido-http",children:"$2 - Cabe\xe7alho e corpo do pedido HTTP"}),"\n",(0,r.jsxs)(n.p,{children:['O segundo par\xe2metro ($2) \xe9 o cabe\xe7alho e o corpo da solicita\xe7\xe3o HTTP enviada pelo navegador Web. Note que esta informa\xe7\xe3o \xe9 passada "assim como est\xe1" para o seu m\xe9todo banco de dados ',(0,r.jsx)(n.code,{children:"On Web Connection"}),". Seu conte\xfado v\xe1ria conforme o navegador da Web que tenta a conex\xe3o."]}),"\n",(0,r.jsxs)(n.p,{children:["Se o seu aplicativo usar essas informa\xe7\xf5es, caber\xe1 a voc\xea analisar o cabe\xe7alho e o corpo. Voc\xea pode usar os comandos ",(0,r.jsx)(n.code,{children:"WEB GET HTTP HEADER"})," e ",(0,r.jsx)(n.code,{children:"WEB GET HTTP BODY"}),"."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Por motivos de desempenho, o tamanho dos dados que passam pelo par\xe2metro $2 n\xe3o deve exceder 32 KB. Para al\xe9m deste tamanho, s\xe3o truncados pelo servidor HTTP 4D."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"3---endere\xe7o-ip-do-cliente-web",children:"$3 - Endere\xe7o IP do cliente Web"}),"\n",(0,r.jsx)(n.p,{children:"O par\xe2metro $3 recebe o endere\xe7o IP do computador do navegador. Essas informa\xe7\xf5es permitem distinguir entre conex\xf5es de intranet e de Internet."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["4D devolve endere\xe7os IPv4 em formato h\xedbrido IPv6/IPv4 escritos com um prefixo de 96 bits, por exemplo ::ffff:192.168.2.34 para o endere\xe7o IPv4 192.168.2.34. Para obter mais informa\xe7\xf5es, consulte a se\xe7\xe3o ",(0,r.jsx)(n.a,{href:"/docs/pt/20/WebServer/webServerConfig#about-ipv6-support",children:"Suporte IPv6"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"4---endere\xe7o-ip-do-servidor",children:"$4 - Endere\xe7o IP do servidor"}),"\n",(0,r.jsxs)(n.p,{children:["O par\xe2metro $4 recebe o endere\xe7o IP solicitado pelo servidor Web 4D. 4D permite multi-home que voc\xea pode usar m\xe1quinas com mais de um endere\xe7o IP. Para obter mais informa\xe7\xf5es, consulte a ",(0,r.jsx)(n.a,{href:"webServerConfig.html#ip-address-to-listen",children:"p\xe1gina Configura\xe7\xe3o"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"5-e-6---nome-de-usu\xe1rio-e-palavra-passe",children:"$5 e $6 - Nome de usu\xe1rio e palavra-passe"}),"\n",(0,r.jsxs)(n.p,{children:["Os par\xe2metros $5 e $6 recebem o nome de usu\xe1rio e a senha inseridos pelo usu\xe1rio na caixa de di\xe1logo de identifica\xe7\xe3o padr\xe3o exibida pelo navegador, se aplic\xe1vel (consulte a p\xe1gina ",(0,r.jsx)(n.a,{href:"/docs/pt/20/WebServer/authentication",children:"Autentica\xe7\xe3o"}),")."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Se o nome de usu\xe1rio enviado pelo navegador existir em 4D, o par\xe2metro $6 (a senha do usu\xe1rio) n\xe3o \xe9 retornado por raz\xf5es de seguran\xe7a."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"4daction",children:"/4DACTION"}),"\n",(0,r.jsxs)(n.p,{children:["***/4DACTION/",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"MethodName"})}),(0,r.jsx)(n.br,{})," **/4DACTION/*****",(0,r.jsx)(n.em,{children:"MethodName/Param"})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MethodName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Nome do m\xe9todo de projeto 4D a ser executado"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Param"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Par\xe2metro texto a ser passado para o m\xe9todo projeto"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Utiliza\xe7\xe3o:"})," URL ou a\xe7\xe3o de formul\xe1rio."]}),"\n",(0,r.jsxs)(n.p,{children:["Este URL permite que voc\xea chame o m\xe9todo projeto ",(0,r.jsx)(n.em,{children:"MethodName"})," 4D com um par\xe2metro de texto opcional ",(0,r.jsx)(n.em,{children:"Param"}),". O m\xe9todo receber\xe1 este par\xe2metro em ",(0,r.jsx)(n.em,{children:"$1"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["O m\xe9todo projeto 4D deve ter sido ",(0,r.jsx)(n.a,{href:"/docs/pt/20/WebServer/allowProject",children:"permitido para solicita\xe7\xf5es web"}),': a "Dispon\xedvel atrav\xe9s de etiquetas 4D e URLs (4DACTION...)" o valor do atributo deve ter sido verificado nas propriedades do m\xe9todo. Se o atributo n\xe3o for verificado, o pedido Web \xe9 rejeitado.']}),"\n",(0,r.jsxs)(n.li,{children:["Quando 4D recebe um pedido ",(0,r.jsx)(n.code,{children:"/4DACTION/MethodName/Param"}),", o m\xe9todo banco de dados ",(0,r.jsx)(n.code,{children:"No Web Authentication"})," (se existir) \xe9 chamado."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"4DACTION/"})," pode ser associado a um URL em uma p\xe1gina Web est\xe1tica:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<A HREF="/4DACTION/MyMethod/hello">Do Something</A>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["O m\xe9todo projeto ",(0,r.jsx)(n.code,{children:"MyMethod"}),' geralmente deve retornar uma "resposta" (envio de uma p\xe1gina HTML usando ',(0,r.jsx)(n.code,{children:"WEB SEND FILE"})," ou ",(0,r.jsx)(n.code,{children:"WEB SEND TEXT"}),", etc.). Certifique-se de tornar o processamento o mais curto poss\xedvel para n\xe3o bloquear o navegador."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Um m\xe9todo chamado por ",(0,r.jsx)(n.code,{children:"/4DACTION"})," n\xe3o deve chamar elementos da interface (",(0,r.jsx)(n.code,{children:"DIALOG"}),", ",(0,r.jsx)(n.code,{children:"ALERT"}),", etc.)."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsxs)(n.p,{children:["Este exemplo descreve a associa\xe7\xe3o do URL ",(0,r.jsx)(n.code,{children:"/4DACTION"})," com um objeto imagem HTML para exibir dinamicamente uma imagem na p\xe1gina. Inserir as seguintes instru\xe7\xf5es numa p\xe1gina HTML est\xe1tica:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<IMG SRC="/4DACTION/getPhoto/smith">\n'})}),"\n",(0,r.jsxs)(n.p,{children:["O m\xe9todo ",(0,r.jsx)(n.code,{children:"getPhoto"})," \xe9 o seguinte:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'C_TEXT($1) // This parameter must always be declared\nvar $path : Text\nvar $PictVar : Picture\nvar $BlobVar : Blob\n\n //find the picture in the Images folder within the Resources folder\n$path:=Get 4D folder(Current resources folder)+"Images"+Folder separator+$1+".psd" READ PICTURE FILE($path;$PictVar) //put the picture in the picture variable PICTURE TO BLOB($PictVar;$BLOB;".png") //convert the picture to ".png" format WEB SEND BLOB($BLOB;"image/png")\n'})}),"\n",(0,r.jsx)(n.h3,{id:"4dacci\xf3n-para-publicar-formul\xe1rios",children:"4DACCI\xd3N para publicar formul\xe1rios"}),"\n",(0,r.jsx)(n.p,{children:'O servidor Web 4D tamb\xe9m permite que voc\xea use formul\xe1rios "postados", p\xe1ginas HTML est\xe1ticas que enviam dados para o servidor da Web e para recuperar facilmente todos os valores. O tipo POST deve ser associado a eles e a a\xe7\xe3o do formul\xe1rio deve come\xe7ar imperativamente com /4DACTION/MethodName.'}),"\n",(0,r.jsx)(n.p,{children:"Um formul\xe1rio pode ser enviado por dois m\xe9todos (ambos podem ser usados com 4D):"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"POST, normalmente utilizado para enviar dados para o servidor Web,"}),"\n",(0,r.jsx)(n.li,{children:"GET, normalmente utilizado para pedir dados ao servidor Web."}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Quando o servidor web recebe um formul\xe1rio publicado, ele chama o m\xe9todo banco de dados ",(0,r.jsx)(n.code,{children:"On Web Authentication"})," (se existir)."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["No m\xe9todo chamado, voc\xea usa o comando ",(0,r.jsx)(n.code,{children:"WEB GET VARIABLES"})," para ",(0,r.jsx)(n.a,{href:"#getting-values-from-http-requests",children:"recuperar os nomes e os valores"})," de todos os campos inclu\xeddos em uma p\xe1gina HTML enviada ao servidor."]}),"\n",(0,r.jsx)(n.p,{children:"Exemplo para definir a a\xe7\xe3o de um formul\xe1rio:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<FORM ACTION="/4DACTION/MethodName" METHOD=POST>\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo"}),"\n",(0,r.jsxs)(n.p,{children:['Em uma aplica\xe7\xe3o Web, gostar\xedamos que os navegadores conseguissem pesquisar entre os registros usando uma p\xe1gina HTML est\xe1tica. Esta p\xe1gina chama-se "search.htm". A aplica\xe7\xe3o cont\xe9m outras p\xe1ginas est\xe1ticas que permitem, por exemplo, exibir o resultado da pesquisa (\u201Cresults.htm\u201D). O tipo POST foi associado \xe0 p\xe1gina, assim como a a\xe7\xe3o ',(0,r.jsx)(n.code,{children:"/4DACTION/SEARCH"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Aqui est\xe1 o c\xf3digo HTML que corresponde a esta p\xe1gina:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<form action="/4daction/processForm" method=POST>\n<input type=text name=vName value=""><br/>\n<input type=checkbox name=vExact value="Word">Whole word<br/>\n<input type=submit name=OK value="Search">\n</FORM>\n'})}),"\n",(0,r.jsxs)(n.p,{children:['Durante a entrada de dados, digite "ABCD" na \xe1rea de entrada de dados, marque a op\xe7\xe3o "toda a palavra" e valide-a clicando no bot\xe3o ',(0,r.jsx)(n.strong,{children:"Pesquisar"}),". No pedido enviado ao servidor Web:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'vName="ABCD"\nvExact="Word" OK="Search"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["4D chama o m\xe9todo ",(0,r.jsx)(n.code,{children:"On Web Authentication"})," de banco de dados (se existir), ent\xe3o o m\xe9todo do projeto ",(0,r.jsx)(n.code,{children:"processForm"})," \xe9 chamado, o seguinte:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' C_TEXT($1) //obrigat\xf3rio para o modo compilado\n C_LONGINT($vName)\n C_TEXT(vName; LIST)\n ARRAY TEXT($arrNames;0)\n ARRAY TEXT($arrVals;0)\n  WEB GET VARIABLES($arrNames;$arrVals) //recuperamos todas as vari\xe1veis do formul\xe1rio\n  $vName:=Find in array($arrNames;"vName")\n vName:=$arrVals{$vName}\n If(Find in array($arrNames;"vExact")=-1) //Se a op\xe7\xe3o n\xe3o foi verificada\n    vName:=vName+"@"\n End if\n QUERY([Jockeys];[Jockeys]Name=vName)\n FIRST RECORD([Jockeys])\n While(Not(End selection([Jockeys])))\n    vLIST:=vLIST+[Jockeys]Name+" "+[Jockeys]Tel+"<br/>"\n    NEXT RECORD([Jockeys])\n End while\n WEB SEND FILE("results.htm") //Enviar a lista para os resultados. formul\xe1rio tm\n  //que cont\xe9m uma refer\xeancia \xe0 vari\xe1vel vLIST,\n  ///por exemplo <! -4DHTML vLIST--\x3e\n  //...\nEnd if\n'})}),"\n",(0,r.jsx)(n.h2,{id:"obter-valores-de-pedidos-http",children:"Obter valores de pedidos HTTP"}),"\n",(0,r.jsx)(n.p,{children:"O servidor Web 4D permite que voc\xea recupere dados enviados atrav\xe9s de solicita\xe7\xf5es POST ou GET, usando formul\xe1rios Web ou URLs."}),"\n",(0,r.jsxs)(n.p,{children:["Quando o servidor web recebe uma solicita\xe7\xe3o com dados no cabe\xe7alho ou no URL, 4D pode recuperar os valores de qualquer objeto HTML que ele cont\xe9m. Este princ\xedpio pode ser implementado no caso de um formul\xe1rio Web, enviado, por exemplo, usando ",(0,r.jsx)(n.code,{children:"WEB SEND FILE"})," ou ",(0,r.jsx)(n.code,{children:"WEB SEND BLOB"}),", onde o usu\xe1rio insere ou modifica valores, em seguida, clica no bot\xe3o de valida\xe7\xe3o."]}),"\n",(0,r.jsxs)(n.p,{children:["Neste caso, 4D pode recuperar os valores dos objetos HTML encontrados na solicita\xe7\xe3o usando o comando ",(0,r.jsx)(n.code,{children:"WEB GET VARIABLES"}),". O comando ",(0,r.jsx)(n.code,{children:"WEB GET VARIABLES"})," recupera os valores como texto."]}),"\n",(0,r.jsx)(n.p,{children:"Considere o seguinte c\xf3digo fonte da p\xe1gina HTML:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<html>\n<head>\n  <title>Welcome</title>\n  <script language="JavaScript">\x3c!--\nfunction GetBrowserInformation(formObj){\nformObj.vtNav_appName.value = navigator.appName\nformObj.vtNav_appVersion.value = navigator.appVersion\nformObj.vtNav_appCodeName.value = navigator.appCodeName\nformObj.vtNav_userAgent.value = navigator.userAgent\nreturn true\n}\nfunction LogOn(formObj){\nif(formObj.vtUserName.value!=""){\nreturn true\n} else {\nalert("Enter your name, then try again.")\nreturn false\n}\n}\n//--\x3e<\/script>\n</head>\n<body>\n<form action="/4DACTION/WWW_STD_FORM_POST" method="post"\n name="frmWelcome"\n onsubmit="return GetBrowserInformation(frmWelcome)">\n  <h1>Welcome to Spiders United</h1>\n  <p><b>Please enter your name:</b>\n  <input name="vtUserName" value="" size="30" type="text"></p>\n  <p> \n<input name="vsbLogOn" value="Log On" onclick="return LogOn(frmWelcome)" type="submit"> \n<input name="vsbRegister" value="Register" type="submit">\n<input name="vsbInformation" value="Information" type="submit"></p>\n<p> \n<input name="vtNav_appName" value="" type="hidden"> \n<input name="vtNav_appVersion" value="" type="hidden"> \n<input name="vtNav_appCodeName" value="" type="hidden">\n<input name="vtNav_userAgent" value="" type="hidden"></p>\n</form>\n</body>\n</html>\nreturn false\n}\n}\n//--\x3e<\/script>\n</head>\n<body>\n<form action="/4DACTION/WWW_STD_FORM_POST" method="post"\n name="frmWelcome"\n onsubmit="return GetBrowserInformation(frmWelcome)">\n  <h1>Welcome to Spiders United</h1>\n  <b>Please enter your name:</b>\n  <input name="vtUserName" value="" size="30" type="text"></p>\n\n<input name="vsbLogOn" value="Log On" onclick="return LogOn(frmWelcome)" type="submit"> \n<input name="vsbRegister" value="Register" type="submit">\n<input name="vsbInformation" value="Information" type="submit"></p>\n\n<input name="vtNav_appName" value="" type="hidden"> \n<input name="vtNav_appVersion" value="" type="hidden"> \n<input name="vtNav_appCodeName" value="" type="hidden">\n<input name="vtNav_userAgent" value="" type="hidden"></p>\n</form>\n</body>\n</html>\nreturn false\n}\n}\n//--\x3e<\/script>\n</head>\n<body>\n<form action="/4DACTION/WWW_STD_FORM_POST" method="post"\n name="frmWelcome"\n onsubmit="return GetBrowserInformation(frmWelcome)">\n  <h1>Welcome to Spiders United</h1>\n  <p><b>Please enter your name:</b>\n  <input name="vtUserName" value="" size="30" type="text"></p>\n  <p>\n<input name="vsbLogOn" value="Log On" onclick="return LogOn(frmWelcome)" type="submit">\n<input name="vsbRegister" value="Register" type="submit">\n<input name="vsbInformation" value="Information" type="submit"></p>\n<p>\n<input name="vtNav_appName" value="" type="hidden">\n<input name="vtNav_appVersion" value="" type="hidden">\n<input name="vtNav_appCodeName" value="" type="hidden">\n<input name="vtNav_userAgent" value="" type="hidden"></p>\n</form>\n</body>\n</html>\nreturn false\n}\n}\n//--\x3e<\/script>\n</head>\n<body>\n<form action="/4DACTION/WWW_STD_FORM_POST" method="post"\n name="frmWelcome"\n onsubmit="return GetBrowserInformation(frmWelcome)">\n  <h1>Welcome to Spiders United</h1>\n  <p><b>Please enter your name:</b>\n  <input name="vtUserName" value="" size="30" type="text"></p>\n  <p>\n<input name="vsbLogOn" value="Log On" onclick="return LogOn(frmWelcome)" type="submit">\n<input name="vsbRegister" value="Register" type="submit">\n<input name="vsbInformation" value="Information" type="submit"></p>\n<p>\n<input name="vtNav_appName" value="" type="hidden">\n<input name="vtNav_appVersion" value="" type="hidden">\n<input name="vtNav_appCodeName" value="" type="hidden">\n<input name="vtNav_userAgent" value="" type="hidden"></p>\n</form>\n</body>\n</html>\nreturn false\n}\n}\n//--\x3e<\/script>\n</head>\n<body>\n<form action="/4DACTION/WWW_STD_FORM_POST" method="post"\n name="frmWelcome"\n onsubmit="return GetBrowserInformation(frmWelcome)">\n  <h1>Welcome to Spiders United</h1>\n  <p><b>Please enter your name:</b>\n  <input name="vtUserName" value="" size="30" type="text"></p>\n  <p>\n<input name="vsbLogOn" value="Log On" onclick="return LogOn(frmWelcome)" type="submit">\n<input name="vsbRegister" value="Register" type="submit">\n<input name="vsbInformation" value="Information" type="submit"></p>\n<p>\n<input name="vtNav_appName" value="" type="hidden">\n<input name="vtNav_appVersion" value="" type="hidden">\n<input name="vtNav_appCodeName" value="" type="hidden">\n<input name="vtNav_userAgent" value="" type="hidden"></p>\n</form>\n</body>\n</html>\nreturn false\n}\n}\n//--\x3e<\/script>\n</head>\n<body>\n<form action="/4DACTION/WWW_STD_FORM_POST" method="post"\n name="frmWelcome"\n onsubmit="return GetBrowserInformation(frmWelcome)">\n  <h1>Welcome to Spiders United</h1>\n  <p><b>Please enter your name:</b>\n  <input name="vtUserName" value="" size="30" type="text"></p>\n  <p>\n<input name="vsbLogOn" value="Log On" onclick="return LogOn(frmWelcome)" type="submit">\n<input name="vsbRegister" value="Register" type="submit">\n<input name="vsbInformation" value="Information" type="submit"></p>\n<p>\n<input name="vtNav_appName" value="" type="hidden">\n<input name="vtNav_appVersion" value="" type="hidden">\n<input name="vtNav_appCodeName" value="" type="hidden">\n<input name="vtNav_userAgent" value="" type="hidden"></p>\n</form>\n</body>\n</html>\nreturn false\n}\n}\n//--\x3e<\/script>\n</head>\n<body>\n<form action="/4DACTION/WWW_STD_FORM_POST" method="post"\n name="frmWelcome"\n onsubmit="return GetBrowserInformation(frmWelcome)">\n  <h1>Welcome to Spiders United</h1>\n  <p><b>Please enter your name:</b>\n  <input name="vtUserName" value="" size="30" type="text"></p>\n  <p>\n<input name="vsbLogOn" value="Log On" onclick="return LogOn(frmWelcome)" type="submit">\n<input name="vsbRegister" value="Register" type="submit">\n<input name="vsbInformation" value="Information" type="submit"></p>\n<p>\n<input name="vtNav_appName" value="" type="hidden">\n<input name="vtNav_appVersion" value="" type="hidden">\n<input name="vtNav_appCodeName" value="" type="hidden">\n<input name="vtNav_userAgent" value="" type="hidden"></p>\n</form>\n</body>\n</html>\nreturn false\n}\n}\n//--\x3e<\/script>\n</head>\n<body>\n<form action="/4DACTION/WWW_STD_FORM_POST" method="post"\n name="frmWelcome"\n onsubmit="return GetBrowserInformation(frmWelcome)">\n  <h1>Welcome to Spiders United</h1>\n  <p><b>Please enter your name:</b>\n  <input name="vtUserName" value="" size="30" type="text"></p>\n  <p>\n<input name="vsbLogOn" value="Log On" onclick="return LogOn(frmWelcome)" type="submit">\n<input name="vsbRegister" value="Register" type="submit">\n<input name="vsbInformation" value="Information" type="submit"></p>\n<p>\n<input name="vtNav_appName" value="" type="hidden">\n<input name="vtNav_appVersion" value="" type="hidden">\n<input name="vtNav_appCodeName" value="" type="hidden">\n<input name="vtNav_userAgent" value="" type="hidden"></p>\n</form>\n</body>\n</html>\nreturn false\n}\n}\n//--\x3e<\/script>\n</head>\n<body>\n<form action="/4DACTION/WWW_STD_FORM_POST" method="post"\n name="frmWelcome"\n onsubmit="return GetBrowserInformation(frmWelcome)">\n  <h1>Welcome to Spiders United</h1>\n  <p><b>Please enter your name:</b>\n  <input name="vtUserName" value="" size="30" type="text"></p>\n  <p>\n<input name="vsbLogOn" value="Log On" onclick="return LogOn(frmWelcome)" type="submit">\n<input name="vsbRegister" value="Register" type="submit">\n<input name="vsbInformation" value="Information" type="submit"></p>\n<p>\n<input name="vtNav_appName" value="" type="hidden">\n<input name="vtNav_appVersion" value="" type="hidden">\n<input name="vtNav_appCodeName" value="" type="hidden">\n<input name="vtNav_userAgent" value="" type="hidden"></p>\n</form>\n</body>\n</html>\n'})}),"\n",(0,r.jsx)(n.p,{children:"Quando 4D envia a p\xe1gina para um navegador Web, ela se parece com isso:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:o(200446).Z+"",width:"446",height:"156"})}),"\n",(0,r.jsx)(n.p,{children:"As principais caracter\xedsticas desta p\xe1gina s\xe3o:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Inclui tr\xeas bot\xf5es: ",(0,r.jsx)(n.strong,{children:"Submit"}),(0,r.jsx)(n.code,{children:"vsbLogOn"}),", ",(0,r.jsx)(n.code,{children:"vsbRegister"})," e ",(0,r.jsx)(n.code,{children:"vsbInformation"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Ao clicar em ",(0,r.jsx)(n.strong,{children:"Log On"}),", a submiss\xe3o do formul\xe1rio \xe9 processada pela primeira vez pela fun\xe7\xe3o JavaScript ",(0,r.jsx)(n.code,{children:"LogOn"}),". Se nenhum nome for inserido, o formul\xe1rio nem \xe9 enviado para 4D, e um alerta JavaScript \xe9 exibido."]}),"\n",(0,r.jsxs)(n.li,{children:["O formul\xe1rio tem um m\xe9todo POST 4D, bem como um script Submit (",(0,r.jsx)(n.em,{children:"GetBrowserInformation"}),") que copia as propriedades do navegador para os quatro objetos ocultos cujos nomes come\xe7am com ",(0,r.jsx)(n.em,{children:"vtNav_App"}),". Inclui tamb\xe9m o objecto ",(0,r.jsx)(n.code,{children:"vtUserName"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Vamos examinar o m\xe9todo 4D ",(0,r.jsx)(n.code,{children:"WWW_STD_FORM_POST"})," que \xe9 chamado quando o usu\xe1rio clica em um dos bot\xf5es do formul\xe1rio HTML."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'  // Recupera\xe7\xe3o de valor de vari\xe1veis\n ARRAY TEXT($arrNames;0)\n ARRAY TEXT($arrValues;0)\n WEB GET VARIABLES($arrNames;$arrValues)\n C_LONGINT($user)\n\n Case of\n\n  // O bot\xe3o Log On foi clicado em\n     :(Find in array($arrNames;"vsbLogOn")#-1)\n       $user :=Find in array($arrNames;"vtUserName")\n       QUERY([WWW Users];[WWW Users]UserName=$arrValues{$user})\n       $0:=(Records in selection([WWW Users])>0)\n       If($0)\n          WWW POST EVENT("Log On";WWW Log information)\n  // O m\xe9todo WWW POST EVENT salva as informa\xe7\xf5es em uma tabela de banco de dados\n       Else\n\n          $0:=WWW Register\n  // O m\xe9todo WWW Register permite que um novo usu\xe1rio Web registre\n        End if\n\n  // O bot\xe3o Register foi clicado\n    :(Find in array($arrNames; vsbRegister")#-1)\n       $0:=WWW Register\n\n  // O bot\xe3o de Informa\xe7\xe3o foi clicado \n    :(Find in array($arrNames;"vsbInformation")#-1)\n       WEB SEND FILE("userinfos.html")\n End case\n'})}),"\n",(0,r.jsx)(n.p,{children:"As funcionalidades deste m\xe9todo s\xe3o:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Os valores das vari\xe1veis ",(0,r.jsx)(n.em,{children:"vtNav_appName"}),", ",(0,r.jsx)(n.em,{children:"vtNav_appVersion"}),", ",(0,r.jsx)(n.em,{children:"vtNav_appCodeName"}),", e ",(0,r.jsx)(n.em,{children:"vtNav_userAgent"})," (vinculados a objetos HTML que t\xeam os mesmos nomes) s\xe3o recuperados usando o comando ",(0,r.jsx)(n.code,{children:"WEB GET VARIABLES"})," dos objetos HTML criados pelo script JavaScript ",(0,r.jsx)(n.em,{children:"GetBrowserInformation"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Das vari\xe1veis vinculadas ",(0,r.jsx)(n.em,{children:"vsbLogOn"}),", ",(0,r.jsx)(n.em,{children:"vsbRegister"})," e ",(0,r.jsx)(n.em,{children:"vsbInformation"})," para os tr\xeas bot\xf5es de envio, apenas o correspondente ao bot\xe3o pressionado ser\xe1 recuperado pelo comando ",(0,r.jsx)(n.code,{children:"WEB GET VARIABLES"}),". Quando o envio \xe9 realizado por um desses bot\xf5es, o navegador retorna o valor do bot\xe3o clicado para 4D. Isto diz-lhe qual o bot\xe3o em que se clicou."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Tenha em aten\xe7\xe3o que, com HTML, todos os objetos s\xe3o objetos texto. Se voc\xea usar um objeto SELECT, \xe9 o valor do elemento destacado no objeto retornado no comando ",(0,r.jsx)(n.code,{children:"WEB GET VARIABLES"}),", e n\xe3o a posi\xe7\xe3o do elemento no array como em 4D. ",(0,r.jsx)(n.code,{children:"WEB GET VARIABLES"})," sempre retorna valores do tipo Text."]}),"\n",(0,r.jsx)(n.h2,{id:"outros-comandos-do-servidor-web",children:"Outros comandos do servidor Web"}),"\n",(0,r.jsx)(n.p,{children:"O servidor web 4D fornece v\xe1rios comandos web de baixo n\xedvel, permitindo que voc\xea desenvolva processamento personalizado de solicita\xe7\xf5es:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["o comando ",(0,r.jsx)(n.code,{children:"WEB GET HTTP BODY"})," retorna o corpo como texto bruto, permitindo qualquer an\xe1lise que voc\xea possa precisar"]}),"\n",(0,r.jsxs)(n.li,{children:["o comando ",(0,r.jsx)(n.code,{children:"WEB GET HTTP HEADER"})," retornam os cabe\xe7alhos da solicita\xe7\xe3o. \xc9 \xfatil lidar com cookies personalizados, por exemplo (com o comando ",(0,r.jsx)(n.code,{children:"WEB SET HTTP HEADER"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:["os comandos ",(0,r.jsx)(n.code,{children:"WEB GET BODY PART"})," e ",(0,r.jsx)(n.code,{children:"WEB Get body part count"})," para analisar a parte do corpo de uma solicita\xe7\xe3o de v\xe1rias partes e recuperar valores de texto, mas tamb\xe9m arquivos publicados, utilizando BLOBs."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Esses comandos est\xe3o resumidos no gr\xe1fico a seguir:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:o(195285).Z+"",width:"676",height:"374"})}),"\n",(0,r.jsxs)(n.p,{children:['O servidor 4D oferece suporte a arquivos enviados na codifica\xe7\xe3o de transfer\xeancia chunked de qualquer cliente web. A codifica\xe7\xe3o de transfer\xeancia em peda\xe7os \xe9 um mecanismo de transfer\xeancia de dados especificado no HTTP/1.1. Ele permite que os dados sejam transferidos em uma s\xe9rie de "chunks" (partes) sem saber o tamanho final dos dados. O servidor Web 4D tamb\xe9m suporta codifica\xe7\xe3o de transfer\xeancia chunked do servidor para clientes web (usando ',(0,r.jsx)(n.code,{children:"WEB SEND RAW DATA"}),")."]}),"\n",(0,r.jsx)(n.h2,{id:"m\xe9todo-projeto-compiler_web",children:"M\xe9todo projeto COMPILER_WEB"}),"\n",(0,r.jsxs)(n.p,{children:["O m\xe9todo COMPILER_WEB, se existir, \xe9 chamado sistematicamente quando o servidor HTTP recebe uma solicita\xe7\xe3o din\xe2mica e chama ao motor 4D. Este e o caso, por exemplo, quando o servidor da Web 4D recebe um formul\xe1rio postado ou um URL para processo em ",(0,r.jsx)(n.a,{href:"#on-web-connection",children:(0,r.jsx)(n.code,{children:"On Web Connection"})}),". Este m\xe9todo destina-se a conter diretivas de inicializa\xe7\xe3o de tipagem e/ou vari\xe1veis utilizadas durante trocas web. \xc9 utilizado pelo compilador quando a aplica\xe7\xe3o \xe9 compilada. O m\xe9todo COMPILER_WEB \xe9 comum a todos os formul\xe1rios Web. Por defeito, o m\xe9todo COMPILER_WEB n\xe3o existe. \xc9 necess\xe1rio cri\xe1-lo explicitamente."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"O m\xe9todo projeto COMPILER_WEB tamb\xe9m \xe9 chamado, se existir, para cada solicita\xe7\xe3o SOAP aceite."}),"\n"]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},195285:function(e,n,o){o.d(n,{Z:function(){return a}});let a=o.p+"assets/images/httpCommands-f0f40e81d3278591838e7c262365beb9.png"},200446:function(e,n,o){o.d(n,{Z:function(){return a}});let a=o.p+"assets/images/spiders-0e4915c8e3496e1dd10f0b15a4319274.png"},250065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return t}});var a=o(667294);let r={},s=a.createContext(r);function t(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);