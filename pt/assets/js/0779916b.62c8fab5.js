"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62295"],{523946:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"WebServer/authentication","title":"Autentica\xe7\xe3o","description":"A autentica\xe7\xe3o de usu\xe1rios \xe9 necess\xe1ria quando se deseja fornecer direitos de acesso espec\xedficos aos usu\xe1rios Web. A autentica\xe7\xe3o determina como as informa\xe7\xf5es referentes \xe0s credenciais do usu\xe1rio (geralmente nome e senha) s\xe3o coletadas e processadas.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/WebServer/authentication.md","sourceDirName":"WebServer","slug":"/WebServer/authentication","permalink":"/docs/pt/20-R7/WebServer/authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2Fauthentication.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"authentication","title":"Autentica\xe7\xe3o"},"sidebar":"docs","previous":{"title":"P\xe1ginas de erro HTTP personalizadas","permalink":"/docs/pt/20-R7/WebServer/errorPages"},"next":{"title":"Sess\xf5es web","permalink":"/docs/pt/20-R7/WebServer/sessions"}}'),o=s("785893"),t=s("250065");let a={id:"authentication",title:"Autentica\xe7\xe3o"},d=void 0,i={},c=[{value:"Modos de autentica\xe7\xe3o",id:"modos-de-autentica\xe7\xe3o",level:2},{value:"Vis\xe3o Geral",id:"vis\xe3o-geral",level:3},{value:"Personalizado (padr\xe3o)",id:"personalizado-padr\xe3o",level:3},{value:"Protocolo Basic",id:"protocolo-basic",level:3},{value:"Protocolo DIGEST",id:"protocolo-digest",level:3},{value:"On Web Authentication",id:"on-web-authentication",level:2},{value:"Chamadas dos m\xe9todos banco",id:"chamadas-dos-m\xe9todos-banco",level:3},{value:"Sintaxe",id:"sintaxe",level:3},{value:"$url - URL",id:"url---url",level:4},{value:"$content - Header and Body of the HTTP request",id:"content---header-and-body-of-the-http-request",level:4},{value:"$IPClient - Endere\xe7o IP do cliente Web",id:"ipclient---endere\xe7o-ip-do-cliente-web",level:4},{value:"$IPServer - Endere\xe7o IP do servidor",id:"ipserver---endere\xe7o-ip-do-servidor",level:4},{value:"$user e $password - Nome de usu\xe1rio e senha",id:"user-e-password---nome-de-usu\xe1rio-e-senha",level:4},{value:"$accept - Retorno de fun\xe7\xe3o",id:"accept---retorno-de-fun\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:3}];function l(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"A autentica\xe7\xe3o de usu\xe1rios \xe9 necess\xe1ria quando se deseja fornecer direitos de acesso espec\xedficos aos usu\xe1rios Web. A autentica\xe7\xe3o determina como as informa\xe7\xf5es referentes \xe0s credenciais do usu\xe1rio (geralmente nome e senha) s\xe3o coletadas e processadas."}),"\n",(0,o.jsx)(n.h2,{id:"modos-de-autentica\xe7\xe3o",children:"Modos de autentica\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["El servidor web 4D ofrece tres modos de autenticaci\xf3n, que puede seleccionar en la p\xe1gina ",(0,o.jsx)(n.strong,{children:"Web"}),"/",(0,o.jsx)(n.strong,{children:"Opciones (I)"})," de la ventana Propiedades:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(948717).Z+"",width:"790",height:"176"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Se recomienda utilizar una autenticaci\xf3n ",(0,o.jsx)(n.strong,{children:"personalizada"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"vis\xe3o-geral",children:"Vis\xe3o Geral"}),"\n",(0,o.jsx)(n.p,{children:"O funcionamento do sistema de acesso do servidor web 4D est\xe1 resumido no diagrama seguinte:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(129931).Z+"",width:"680",height:"498"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Las peticiones que comienzan por ",(0,o.jsx)(n.code,{children:"rest/"})," son gestionadas directamente por el ",(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/REST/configuration",children:"servidor REST"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"personalizado-padr\xe3o",children:"Personalizado (padr\xe3o)"}),"\n",(0,o.jsxs)(n.p,{children:["Basicamente, nesse modo, cabe ao desenvolvedor definir como autenticar os usu\xe1rios. 4D s\xf3lo eval\xfaa las peticiones HTTP ",(0,o.jsx)(n.a,{href:"#database-method-calls",children:"que requieren una autenticaci\xf3n"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Este modo de autentica\xe7\xe3o \xe9 o mais flex\xedvel porque permite que voc\xea:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"ou delegar a autentica\xe7\xe3o do usu\xe1rio a um aplicativo de terceiros (por exemplo, uma rede social, SSO);"}),"\n",(0,o.jsxs)(n.li,{children:["o bien, ofrecer una interfaz al usuario (por ejemplo, un formulario web) para que pueda crear su cuenta en su base de datos clientes; luego, puede autenticar a los usuarios con cualquier algoritmo personalizado (ver ",(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/WebServer/sessions#example",children:"este ejemplo"})," del O importante \xe9 que voc\xea nunca armazene a senha de forma n\xe3o protegida, usando esse c\xf3digo: O importante \xe9 que voc\xea nunca armazene a senha de forma n\xe3o protegida, usando esse c\xf3digo: O importante \xe9 que voc\xea nunca armazene a senha de forma n\xe3o protegida, usando esse c\xf3digo:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"//... criar conta de usu\xe1rio\nds.webUser.password:=Generate password hash($password)  \nds.webUser.save()\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Ver tambi\xe9n ",(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/WebServer/gettingStarted#authenticating-users",children:"este ejemplo"}),' del cap\xedtulo "C\xf3mo comenzar".']}),"\n",(0,o.jsxs)(n.p,{children:["Se nenhuma autentica\xe7\xe3o personalizada for fornecida, 4D chama o m\xe9todo banco de dados ",(0,o.jsx)(n.a,{href:"#on-web-authentication",children:(0,o.jsx)(n.code,{children:"On Web Authentication"})})," (se existir). In addition to $urll and $content, only the IP addresses of the browser and the server ($IPClient and $IPServer) are provided, the user name and password ($user and $password) are empty. El m\xe9todo debe devolver ",(0,o.jsx)(n.strong,{children:"True"})," en $0 si el usuario se autentifica con \xe9xito, entonces se sirve el recurso solicitado, o ",(0,o.jsx)(n.strong,{children:"False"})," en $0 si la autenticaci\xf3n fall\xf3."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Atenci\xf3n"}),": si el m\xe9todo de base de datos ",(0,o.jsx)(n.code,{children:"On Web Authentication"})," no existe, las conexiones se aceptan autom\xe1ticamente (modo de prueba)."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"protocolo-basic",children:"Protocolo Basic"}),"\n",(0,o.jsx)(n.p,{children:"Quando um usu\xe1rio se conecta ao servidor, uma caixa de di\xe1logo padr\xe3o \xe9 exibida no navegador para que ele digite o nome de usu\xe1rio e a senha."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"O nome e a palavra-passe introduzidos pelo utilizador s\xe3o enviados sem encripta\xe7\xe3o no cabe\xe7alho do pedido HTTP. Este modo requer normalmente HTTPS para garantir a confidencialidade."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Os valores introduzidos s\xe3o ent\xe3o avaliados:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Si la opci\xf3n ",(0,o.jsx)(n.strong,{children:"Incluir contrase\xf1as de 4D"})," est\xe1 marcada, las credenciales de los usuarios se evaluar\xe1n primero contra la ",(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/Users/overview",children:"tabla interna de usuarios 4D"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Se o nome de usu\xe1rio enviado pelo navegador existir na tabela de usu\xe1rios 4D e a senha estiver correta, a conex\xe3o ser\xe1 aceita. Se a palavra-passe estiver incorreta, a liga\xe7\xe3o \xe9 recusada."}),"\n",(0,o.jsxs)(n.li,{children:["Se o nome de usu\xe1rio n\xe3o existir na tabela de usu\xe1rios 4D, o m\xe9todo de banco de dados ",(0,o.jsx)(n.a,{href:"#on-web-authentication",children:(0,o.jsx)(n.code,{children:"On Web Authentication"})})," ser\xe1 chamado. Si el m\xe9todo base ",(0,o.jsx)(n.code,{children:"On Web Authentication"})," no existe, se rechazan las conexiones."]}),"\n",(0,o.jsxs)(n.li,{children:["If the ",(0,o.jsx)(n.strong,{children:"Include 4D passwords"})," option is not checked, user credentials are sent to the ",(0,o.jsx)(n.a,{href:"#on-web-authentication",children:(0,o.jsx)(n.code,{children:"On Web Authentication"})})," database method along with the other connection parameters (IP address and port, URL...) para que voc\xea possa process\xe1-los. Si el m\xe9todo base ",(0,o.jsx)(n.code,{children:"On Web Authentication"})," no existe, se rechazan las conexiones."]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Com o servidor da Web 4D Client, lembre-se de que todos os sites publicados pelas m\xe1quinas 4D Client compartilhar\xe3o a mesma tabela de usu\xe1rios. Valida\xe7\xe3o de usu\xe1rios/senhas \xe9 realizada pela aplica\xe7\xe3o 4D Server."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"protocolo-digest",children:"Protocolo DIGEST"}),"\n",(0,o.jsx)(n.p,{children:"Esse modo oferece um n\xedvel maior de seguran\xe7a, pois as informa\xe7\xf5es de autentica\xe7\xe3o s\xe3o processadas por um processo unidirecional chamado hashing, que impossibilita decifrar seu conte\xfado."}),"\n",(0,o.jsxs)(n.p,{children:["Como no modo BASIC, os usu\xe1rios devem digitar seu nome e senha ao se conectarem. O m\xe9todo banco de dados ",(0,o.jsx)(n.a,{href:"#on-web-authentication",children:(0,o.jsx)(n.code,{children:"On Web Authentication"})})," \xe9 ent\xe3o chamado. Quando o modo DIGEST \xe9 ativado, o par\xe2metro $password (senha) \xe9 sempre retornado vazio. De fato, ao usar esse modo, essas informa\xe7\xf5es n\xe3o passam pela rede como texto claro (n\xe3o criptografado). Por lo tanto, en este caso es imprescindible evaluar las solicitudes de conexi\xf3n mediante el comando ",(0,o.jsx)(n.code,{children:"WEB Validate digest"}),"."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Voc\xea deve reiniciar o servidor Web para que as altera\xe7\xf5es feitas nesses par\xe2metros sejam levadas em conta."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"on-web-authentication",children:"On Web Authentication"}),"\n",(0,o.jsxs)(n.p,{children:["El m\xe9todo de base de datos ",(0,o.jsx)(n.code,{children:"On Web Authentication"})," se encarga de gestionar el acceso al motor del servidor web. \xc9 chamado por 4D ou 4D Server quando uma solicita\xe7\xe3o HTTP din\xe2mica \xe9 recebida."]}),"\n",(0,o.jsx)(n.h3,{id:"chamadas-dos-m\xe9todos-banco",children:"Chamadas dos m\xe9todos banco"}),"\n",(0,o.jsxs)(n.p,{children:["El m\xe9todo base ",(0,o.jsx)(n.code,{children:"On Web Authentication"})," se llama autom\xe1ticamente cuando una solicitud o procesamiento requiere la ejecuci\xf3n de alg\xfan c\xf3digo 4D (excepto para las llamadas REST). Ele tamb\xe9m \xe9 chamado quando o servidor Web recebe um URL est\xe1tico inv\xe1lido (por exemplo, se a p\xe1gina est\xe1tica solicitada n\xe3o existir)."]}),"\n",(0,o.jsxs)(n.p,{children:["Por tanto, se llama al m\xe9todo base ",(0,o.jsx)(n.code,{children:"On Web Authentication"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"quando o servidor da Web recebe um URL solicitando um recurso que n\xe3o existe"}),"\n",(0,o.jsxs)(n.li,{children:["cuando el servidor web recibe una URL que empieza por ",(0,o.jsx)(n.code,{children:"4DACTION/"}),", ",(0,o.jsx)(n.code,{children:"4DCGI/"}),"..."]}),"\n",(0,o.jsxs)(n.li,{children:["cuando el servidor web recibe una URL de acceso a la ra\xedz y no se ha definido ninguna p\xe1gina de inicio en la Configuraci\xf3n o mediante el comando ",(0,o.jsx)(n.code,{children:"WEB SET HOME PAGE"})]}),"\n",(0,o.jsxs)(n.li,{children:["cuando el servidor web procesa una etiqueta que ejecuta c\xf3digo (por ejemplo, ",(0,o.jsx)(n.code,{children:"4DSCRIPT"}),") en una p\xe1gina semidin\xe1mica."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Por tanto, NO se llama al m\xe9todo base ",(0,o.jsx)(n.code,{children:"On Web Authentication"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"quando o servidor Web recebe um URL solicitando uma p\xe1gina est\xe1tica v\xe1lida."}),"\n",(0,o.jsxs)(n.li,{children:["when the web server receives a URL beginning with ",(0,o.jsx)(n.code,{children:"rest/"})," and the REST server is launched (in this case, the authentication is handled through the ",(0,o.jsxs)(n.a,{href:"../REST/authUsers#force-login-mode",children:[(0,o.jsx)(n.code,{children:"ds.authentify"})," function"]})," or (deprecated) the ",(0,o.jsx)(n.code,{children:"On REST Authentication"})," database method or Structure settings."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"sintaxe",children:"Sintaxe"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"On Web Authentication"}),"( ",(0,o.jsx)(n.em,{children:"$url"})," : Text ; ",(0,o.jsx)(n.em,{children:"$content"})," : Text ; ",(0,o.jsx)(n.em,{children:"$IPClient"})," : Text ; ",(0,o.jsx)(n.em,{children:"$IPServer"})," : Text ; ",(0,o.jsx)(n.em,{children:"$user"})," : Text ; ",(0,o.jsx)(n.em,{children:"$password"})," : Text ) -> $accept : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metros"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{style:{textAlign:"center"}}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"$url"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,o.jsx)(n.td,{children:"URL"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"$content"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,o.jsx)(n.td,{children:"Cabe\xe7alhos HTTP + corpo HTTP (at\xe9 um limite de 32 kb)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"$IPClient"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,o.jsx)(n.td,{children:"Endere\xe7o IP do cliente Web (browser)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"$IPServer"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,o.jsx)(n.td,{children:"Endere\xe7o IP do servidor"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"$user"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,o.jsx)(n.td,{children:"Nome de usuario"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"$password"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,o.jsx)(n.td,{children:"Senha"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"$accept"}),(0,o.jsx)(n.td,{children:"Par\xe2metros"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,o.jsx)(n.td,{children:"True = pedido aceite, False = pedido rejeitado"})]})]})]}),"\n",(0,o.jsx)(n.p,{children:"Estes par\xe2metros devem ser declarados da seguinte forma:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"// On Web Authentication database method\n#DECLARE ($url : Text; $content : Text; \\\n  $IPClient : Text; $IPServer : Text; \\\n  $user : Text; $password : Text) \\\n  -> $accept : Boolean\n\n//Code for the method\n\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Todos los par\xe1metros del m\xe9todo base ",(0,o.jsx)(n.code,{children:"On Web Authentication"})," no est\xe1n necesariamente rellenados. La informaci\xf3n recibida por el m\xe9todo base depende del ",(0,o.jsx)(n.a,{href:"#authentication-modes",children:"modo de autenticaci\xf3n"})," seleccionado)."]})}),"\n",(0,o.jsx)(n.h4,{id:"url---url",children:"$url - URL"}),"\n",(0,o.jsxs)(n.p,{children:["The first parameter (",(0,o.jsx)(n.code,{children:"$url"}),") is the URL received by the server, from which the host address has been removed."]}),"\n",(0,o.jsx)(n.p,{children:"Vejamos o exemplo de uma liga\xe7\xe3o Intranet. Suponha que o endere\xe7o IP do seu Web Server 4D \xe9 123.45.67.89. The following table shows the values of $urll depending on the URL entered in the Web browser:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"URL introduzido no navegador Web"}),(0,o.jsx)(n.th,{children:"Valor do par\xe2metro $urll"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"123.45.67.89"}),(0,o.jsx)(n.td,{children:"/"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"http://123.45.67.89",children:"http://123.45.67.89"})}),(0,o.jsx)(n.td,{children:"/"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"123.45.67.89/Customers"}),(0,o.jsx)(n.td,{children:"/Customers"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"http://123.45.67.89/Customers/Add",children:"http://123.45.67.89/Customers/Add"})}),(0,o.jsx)(n.td,{children:"/Customers/Add"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"123.45.67.89/Do_This/If_OK/Do_That"}),(0,o.jsx)(n.td,{children:"/Do_This/If_OK/Do_That"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"content---header-and-body-of-the-http-request",children:"$content - Header and Body of the HTTP request"}),"\n",(0,o.jsxs)(n.p,{children:["The second parameter (",(0,o.jsx)(n.code,{children:"$content"}),") is the header and the body of the HTTP request sent by the web browser. Tenga en cuenta que esta informaci\xf3n se pasa a su m\xe9todo base ",(0,o.jsx)(n.code,{children:"On Web Authentication"})," tal cual. Seu conte\xfado varia conforme a natureza do navegador Web que est\xe1 tentando se conectar."]}),"\n",(0,o.jsxs)(n.p,{children:["Se o seu aplicativo usar essas informa\xe7\xf5es, caber\xe1 a voc\xea analisar o cabe\xe7alho e o corpo. Puede utilizar los comandos ",(0,o.jsx)(n.code,{children:"WEB GET HTTP HEADER"})," y ",(0,o.jsx)(n.code,{children:"WEB GET HTTP BODY"}),"."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"For performance reasons, the size of data passing through the $content parameter must not exceed 32 KB. Para al\xe9m deste tamanho, s\xe3o truncados pelo servidor HTTP 4D."}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"ipclient---endere\xe7o-ip-do-cliente-web",children:"$IPClient - Endere\xe7o IP do cliente Web"}),"\n",(0,o.jsxs)(n.p,{children:["O par\xe2metro ",(0,o.jsx)(n.code,{children:"$IPClient"})," recebe o endere\xe7o IP da m\xe1quina do navegador. Essas informa\xe7\xf5es permitem distinguir entre conex\xf5es de intranet e de Internet."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["4D devolve endere\xe7os IPv4 em formato h\xedbrido IPv6/IPv4 escritos com um prefixo de 96 bits, por exemplo ::ffff:192.168.2.34 para o endere\xe7o IPv4 192.168.2.34. Para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/WebServer/webServerConfig#about-ipv6-support",children:"Soporte IPv6"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"ipserver---endere\xe7o-ip-do-servidor",children:"$IPServer - Endere\xe7o IP do servidor"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"$IPServer"})," parameter receives the IP address used to call the web server. 4D permite multi-home que voc\xea explore m\xe1quinas com mais de um endere\xe7o IP. Para m\xe1s informaci\xf3n, consulte la ",(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/WebServer/webServerConfig#ip-address-to-listen",children:"p\xe1gina Configuraci\xf3n"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"user-e-password---nome-de-usu\xe1rio-e-senha",children:"$user e $password - Nome de usu\xe1rio e senha"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"$user"})," and ",(0,o.jsx)(n.code,{children:"$password"})," parameters receive the user name and password entered by the user in the standard identification dialog box displayed by the browser. Esta caja de di\xe1logo aparece para cada conexi\xf3n, si se selecciona la autenticaci\xf3n ",(0,o.jsx)(n.a,{href:"#basic-protocol",children:"basic"})," o ",(0,o.jsx)(n.a,{href:"#digest-protocol",children:"digest"}),"."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"If the user name sent by the browser exists in 4D, the $password parameter (the user\u2019s password) is not returned for security reasons."}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"accept---retorno-de-fun\xe7\xe3o",children:"$accept - Retorno de fun\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"On Web Authentication"})," database method returns a boolean:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"If it is True, the connection is accepted."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"If it is False, the connection is refused."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["El m\xe9todo base ",(0,o.jsx)(n.code,{children:"On Web Connection"})," s\xf3lo se ejecuta si la conexi\xf3n ha sido aceptada por ",(0,o.jsx)(n.code,{children:"On Web Authentication"}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If no value is returned, the connection is considered as ",(0,o.jsx)(n.strong,{children:"accepted"})," and the ",(0,o.jsx)(n.code,{children:"On Web Connection"})," database method is executed."]}),"\n",(0,o.jsxs)(n.li,{children:["Do not call any interface elements in the ",(0,o.jsx)(n.code,{children:"On Web Authentication"})," database method (",(0,o.jsx)(n.code,{children:"ALERT"}),", ",(0,o.jsx)(n.code,{children:"DIALOG"}),", etc.) because otherwise its execution will be interrupted and the connection refused. O mesmo acontecer\xe1 se ocorrer um erro durante seu processamento."]}),"\n"]})}),"\n",(0,o.jsx)(n.h3,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsxs)(n.p,{children:["Ejemplo del m\xe9todo base ",(0,o.jsx)(n.code,{children:"On Web Authentication"})," en ",(0,o.jsx)(n.a,{href:"#digest-protocol",children:"Modo DIGEST"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' // On Web Authentication Database Method\n #DECLARE ($url : Text; $header : Text; $ipB : Text; $ipS : Text; \\\n 	$user : Text; $pw : Text) -> $valid : Boolean\n  \n var $found : cs.WebUserSelection\n $valid:=False\n\n $found:=ds.WebUser.query("User === :1";$user)\n If($found.length=1) // User is found\n 	$valid:=WEB Validate digest($user;[WebUser]password)\n Else\n    $valid:=False // User does not exist\n End if\n'})})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},948717:function(e,n,s){s.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},129931:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/serverAccess-b28091b35f6bc6b3f5605b27e8333135.png"},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return a}});var r=s(667294);let o={},t=r.createContext(o);function a(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);