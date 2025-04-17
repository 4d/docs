"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["71062"],{487477:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>o,contentTitle:()=>d});var r=JSON.parse('{"id":"WebServer/httpRequests","title":"Traitement des requ\xeates HTTP","description":"The 4D web server provides several built-in features to handle HTTP requests:","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/WebServer/httpRequests.md","sourceDirName":"WebServer","slug":"/WebServer/httpRequests","permalink":"/docs/fr/20-R8/WebServer/httpRequests","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FhttpRequests.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"httpRequests","title":"Traitement des requ\xeates HTTP"},"sidebar":"docs","previous":{"title":"Pages templates","permalink":"/docs/fr/20-R8/WebServer/templates"},"next":{"title":"HTTP Request handler","permalink":"/docs/fr/20-R8/WebServer/http-request-handler"}}'),t=s("785893"),a=s("250065");let i={id:"httpRequests",title:"Traitement des requ\xeates HTTP"},d=void 0,l={},o=[{value:"On Web Connection",id:"on-web-connection",level:2},{value:"Appels des m\xe9thodes base",id:"appels-des-m\xe9thodes-base",level:3},{value:"Syntaxe",id:"syntaxe",level:3},{value:"$url - URL extra data",id:"url---url-extra-data",level:3},{value:"$header - Header and Body of the HTTP request",id:"header---header-and-body-of-the-http-request",level:3},{value:"$BrowserIP - Web client IP address",id:"browserip---web-client-ip-address",level:3},{value:"$ServerIP - Server IP address",id:"serverip---server-ip-address",level:3},{value:"$user and $password - User Name and Password",id:"user-and-password---user-name-and-password",level:3},{value:"/4DACTION",id:"4daction",level:2},{value:"Exemple",id:"exemple",level:4},{value:"4DACTION pour poster des formulaires",id:"4daction-pour-poster-des-formulaires",level:3},{value:"Exemple",id:"exemple-1",level:4},{value:"R\xe9cup\xe9rer des valeurs depuis des requ\xeates HTTP",id:"r\xe9cup\xe9rer-des-valeurs-depuis-des-requ\xeates-http",level:2},{value:"Autres commandes de serveur Web",id:"autres-commandes-de-serveur-web",level:2},{value:"M\xe9thode projet COMPILER_WEB",id:"m\xe9thode-projet-compiler_web",level:2}];function c(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The 4D web server provides several built-in features to handle HTTP requests:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["la m\xe9thode base ",(0,t.jsx)(n.code,{children:"On Web Connection"}),", un routeur pour votre application web,"]}),"\n",(0,t.jsxs)(n.li,{children:["l'URL ",(0,t.jsx)(n.code,{children:"/4DACTION"})," pour appeler le code c\xf4t\xe9 serveur"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"WEB GET VARIABLES"})," pour r\xe9cup\xe9rer les valeurs des objets HTML envoy\xe9s au serveur"]}),"\n",(0,t.jsxs)(n.li,{children:["d'autres commandes telles que ",(0,t.jsx)(n.code,{children:"WEB GET HTTP BODY"}),", ",(0,t.jsx)(n.code,{children:"WEB GET HTTP HEADER"}),", ou ",(0,t.jsx)(n.code,{children:"WEB GET BODY PART"})," permettent de personnaliser le traitement des requ\xeates, y compris les cookies."]}),"\n",(0,t.jsxs)(n.li,{children:["la m\xe9thode projet ",(0,t.jsx)(n.em,{children:"COMPILER_WEB"})," pour d\xe9clarer vos variables."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["You can also implement your own HTTP request handlers for a customized control over incoming requests and outgoing responses. When a custom HTTP request handler is triggered, no database method is called. See ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/WebServer/http-request-handler",children:(0,t.jsx)(n.strong,{children:"HTTP Request Handler"})})," section."]})}),"\n",(0,t.jsx)(n.h2,{id:"on-web-connection",children:"On Web Connection"}),"\n",(0,t.jsxs)(n.p,{children:["La m\xe9thode base ",(0,t.jsx)(n.code,{children:"On Web Connection"})," peut \xeatre utilis\xe9e comme point d'entr\xe9e pour le serveur Web 4D."]}),"\n",(0,t.jsx)(n.h3,{id:"appels-des-m\xe9thodes-base",children:"Appels des m\xe9thodes base"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"On Web Connection"})," database method is automatically called when the server receives any URL that is not a valid path to an existing page on the server (and is not a URL with a pattern triggering a ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/WebServer/http-request-handler",children:"custom HTTP Request Handler"}),")."]}),"\n",(0,t.jsx)(n.p,{children:"La m\xe9thode base est appel\xe9e avec l'URL."}),"\n",(0,t.jsxs)(n.p,{children:["Par exemple, l'URL \"",(0,t.jsx)(n.em,{children:"a/b/c"}),'" appellera la m\xe9thode base, mais "',(0,t.jsx)(n.em,{children:"a/b/c.html"}),'" n\'appellera pas la m\xe9thode base si la page "c.html" existe dans le sous-dossier "a/b" du ',(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/WebServer/webServerConfig#root-folder",children:"WebFolder"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["La requ\xeate doit avoir \xe9t\xe9 accept\xe9e pr\xe9alablement par la m\xe9thode base ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/WebServer/authentication#on-web-authentication",children:(0,t.jsx)(n.code,{children:"On Web Authentication"})})," (si elle existe) et le serveur web doit \xeatre lanc\xe9."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"syntaxe",children:"Syntaxe"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"On Web Connection"}),"( ",(0,t.jsx)(n.em,{children:"$url"})," : Text; ",(0,t.jsx)(n.em,{children:"$header"})," : Text; ",(0,t.jsx)(n.em,{children:"$BrowserIP"})," : Text; ",(0,t.jsx)(n.em,{children:"$ServerIP"})," : Text; ",(0,t.jsx)(n.em,{children:"$user"})," : Text; ",(0,t.jsx)(n.em,{children:"$password"})," : Text )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"center"}}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$url"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,t.jsx)(n.td,{children:"Variable URL"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$header"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,t.jsx)(n.td,{children:"En-t\xeates HTTP + Corps HTTP (jusqu'\xe0 une limite de 32 ko)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$BrowserIP"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,t.jsx)(n.td,{children:"Adresse IP du client web (navigateur)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$ServerIP"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,t.jsx)(n.td,{children:"Adresse IP du serveur"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$user"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,t.jsx)(n.td,{children:"Nom d'utilisateur"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$password"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,t.jsx)(n.td,{children:"Mot de passe"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"You must declare these parameters:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"// On Web Connection\n#DECLARE ($url : Text; $header : Text; \\\n  $BrowserIP : Text; $ServerIP : Text; \\\n  $user : Text; $password : Text)\n\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Appeler une commande 4D qui affiche un \xe9l\xe9ment d'interface (",(0,t.jsx)(n.code,{children:"DIALOG"}),", ",(0,t.jsx)(n.code,{children:"ALERT"}),", etc.) n'est pas autoris\xe9 et met fin au traitement de la m\xe9thode."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"url---url-extra-data",children:"$url - URL extra data"}),"\n",(0,t.jsx)(n.p,{children:"The first parameter ($url) is the URL entered by users in the address area of their web browser, without the host address."}),"\n",(0,t.jsx)(n.p,{children:"Prenons une connexion intranet comme exemple. Supposons que l'adresse IP de votre machine serveur Web 4D est 123.4.567.89. The following table shows the values of $url depending on the URL entered in the web browser:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"URL entr\xe9e dans le navigateur web"}),(0,t.jsx)(n.th,{children:"Value of parameter $url"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"123.4.567.89"}),(0,t.jsx)(n.td,{children:"/"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"http://123.45.67.89",children:"http://123.45.67.89"})}),(0,t.jsx)(n.td,{children:"/"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"123.4.567.89/Customers"}),(0,t.jsx)(n.td,{children:"/Customers"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"http://123.45.67.89/Customers/Add",children:"http://123.45.67.89/Customers/Add"})}),(0,t.jsx)(n.td,{children:"/Customers/Add"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"123.4.567.89/Do_This/If_OK/Do_That"}),(0,t.jsx)(n.td,{children:"/Do_This/If_OK/Do_That"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Notez que vous \xeates libre d'utiliser ce param\xe8tre \xe0 votre convenance. 4D ignore simplement la valeur pass\xe9e au-del\xe0 de la partie h\xf4te de l'URL. Par exemple, vous pouvez \xe9tablir une convention o\xf9 la valeur \"",(0,t.jsx)(n.em,{children:"/Customers/Add"}),'" signifie "acc\xe8s direct pour ajouter un nouvel enregistrement dans la table ',(0,t.jsx)(n.code,{children:"[Customers]"}),'". En proposant aux utilisateurs web une liste de valeurs possibles et/ou des signets par d\xe9faut, vous pouvez leur fournir des raccourcis vers diff\xe9rentes parties de votre application. De cette fa\xe7on, les utilisateurs web peuvent acc\xe9der rapidement aux ressources de votre site web sans passer par le chemin de navigation complet \xe0 chaque nouvelle connexion.']}),"\n",(0,t.jsx)(n.h3,{id:"header---header-and-body-of-the-http-request",children:"$header - Header and Body of the HTTP request"}),"\n",(0,t.jsxs)(n.p,{children:["The second parameter ($header) is the header and the body of the HTTP request sent by the web browser. Notez que ces informations sont pass\xe9es telles quelles \xe0 votre m\xe9thode base ",(0,t.jsx)(n.code,{children:"On Web Connection"}),". Son contenu variera en fonction de la nature du navigateur web qui tente la connexion."]}),"\n",(0,t.jsxs)(n.p,{children:["Si votre application utilise ces informations, il vous appartient d'analyser l'en-t\xeate et le corps. Vous pouvez utiliser les commandes ",(0,t.jsx)(n.code,{children:"WEB GET HTTP HEADER"})," et ",(0,t.jsx)(n.code,{children:"WEB GET HTTP BODY"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"For performance reasons, the size of data passing through the $header parameter must not exceed 32 KB. Au-del\xe0 de cette taille, ils sont tronqu\xe9s par le serveur HTTP 4D."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"browserip---web-client-ip-address",children:"$BrowserIP - Web client IP address"}),"\n",(0,t.jsx)(n.p,{children:"The $BrowserIP parameter receives the IP address of the browser\u2019s machine. Cette information peut vous permettre de distinguer entre les connexions intranet et internet."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["4D renvoie les adresses IPv4 dans un format hybride IPv6/IPv4 \xe9crit avec un pr\xe9fixe de 96 bits, par exemple ::ffff:192.168.2.34 pour l'adresse IPv4 192.168.2.34. Pour plus d'informations, consultez la section ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/WebServer/webServerConfig#about-ipv6-support",children:"Support IPv6"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"serverip---server-ip-address",children:"$ServerIP - Server IP address"}),"\n",(0,t.jsxs)(n.p,{children:["The $ServerIP parameter receives the IP address requested by the 4D Web Server. 4D prend en charge le multi-homing, ce qui vous permet d'exploiter des machines avec plus d'une adresse IP. Pour plus d'informations, veuillez consulter la ",(0,t.jsx)(n.a,{href:"webServerConfig.html#ip-address-to-listen",children:"Page Configuration"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"user-and-password---user-name-and-password",children:"$user and $password - User Name and Password"}),"\n",(0,t.jsxs)(n.p,{children:["The $user and $password parameters receive the user name and password entered by the user in the standard identification dialog box displayed by the browser, if applicable (see the ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/WebServer/authentication",children:"authentication page"}),")."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"If the user name sent by the browser exists in 4D, the $password parameter (the user\u2019s password) is not returned for security reasons."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"4daction",children:"/4DACTION"}),"\n",(0,t.jsxs)(n.p,{children:["**/4DACTION/**",(0,t.jsx)(n.em,{children:"MethodName"}),(0,t.jsx)(n.br,{}),"\n**/4DACTION/**",(0,t.jsx)(n.em,{children:"MethodName/Param"})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"center"}}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"MethodName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"Nom de la m\xe9thode projet 4D \xe0 ex\xe9cuter"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Param"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"Param\xe8tre texte \xe0 passer \xe0 la m\xe9thode projet"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Utilisation :"})," URL ou action du formulaire."]}),"\n",(0,t.jsxs)(n.p,{children:["Cette URL vous permet d'appeler la m\xe9thode projet 4D ",(0,t.jsx)(n.em,{children:"MethodName"})," avec un param\xe8tre texte ",(0,t.jsx)(n.em,{children:"Param"})," optionnel. The method will receive this parameter."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["La m\xe9thode projet 4D doit avoir \xe9t\xe9 ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/WebServer/allowProject",children:"autoris\xe9e pour les requ\xeates web"})," : l'attribut \"Disponible via Balises HTML et URLs 4D (4DACTION. .)\u201D doit avoir \xe9t\xe9 coch\xe9 dans les propri\xe9t\xe9s de la m\xe9thode. Si l'attribut n'est pas coch\xe9, la requ\xeate web est rejet\xe9e."]}),"\n",(0,t.jsxs)(n.li,{children:["Lorsque 4D re\xe7oit une requ\xeate ",(0,t.jsx)(n.code,{children:"/4DACTION/MethodName/Param"}),", la m\xe9thode base ",(0,t.jsx)(n.code,{children:"On Web Authentication"})," est appel\xe9e (si elle existe)."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"4DACTION/"})," peut \xeatre associ\xe9 \xe0 une URL dans une page Web statique :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<A HREF="/4DACTION/MyMethod/hello">Do Something</A>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["La m\xe9thode de projet ",(0,t.jsx)(n.code,{children:"MyMethod"})," doit g\xe9n\xe9ralement retourner une \"r\xe9ponse\" (envoi d'une page HTML \xe0 l'aide de ",(0,t.jsx)(n.code,{children:"WEB SEND FILE"})," ou ",(0,t.jsx)(n.code,{children:"WEB SEND TEXT"}),", etc.). Assurez-vous de rendre le traitement aussi court que possible afin de ne pas bloquer le navigateur."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Une m\xe9thode appel\xe9e par ",(0,t.jsx)(n.code,{children:"/4DACTION"})," ne doit pas appeler d'\xe9l\xe9ment d'interface (",(0,t.jsx)(n.code,{children:"DIALOG"}),", ",(0,t.jsx)(n.code,{children:"ALERT"}),", etc.)."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(n.p,{children:["Cet exemple d\xe9crit l'association de l'URL ",(0,t.jsx)(n.code,{children:"/4DACTION"})," avec un objet image HTML afin d'afficher dynamiquement une image dans la page. Vous ins\xe9rez les instructions suivantes dans une page HTML statique :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<IMG SRC="/4DACTION/getPhoto/smith">\n'})}),"\n",(0,t.jsxs)(n.p,{children:["La m\xe9thode ",(0,t.jsx)(n.code,{children:"getPhoto"})," est la suivante :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'#DECLARE ($url : Text) // This parameter must always be declared\nvar $path : Text\nvar $PictVar : Picture\nvar $BlobVar : Blob\n\n //find the picture in the Images folder within the Resources folder\n$path:=Get 4D folder(Current resources folder)+"Images"+Folder separator+$url+".psd"\n\nREAD PICTURE FILE($path;$PictVar) //put the picture in the picture variable\nPICTURE TO BLOB($PictVar;$BLOB;".png") //convert the picture to ".png" format\nWEB SEND BLOB($BLOB;"image/png")\n'})}),"\n",(0,t.jsx)(n.h3,{id:"4daction-pour-poster-des-formulaires",children:"4DACTION pour poster des formulaires"}),"\n",(0,t.jsx)(n.p,{children:"Le serveur Web 4D vous permet \xe9galement d'utiliser des formulaires \"post\xe9s\", qui sont des pages HTML statiques envoyant des donn\xe9es au serveur Web, et de r\xe9cup\xe9rer facilement toutes les valeurs. Le type POST doit leur \xeatre associ\xe9 et l'action du formulaire doit imp\xe9rativement commencer par /4DACTION/NomDeLaM\xe9thode."}),"\n",(0,t.jsx)(n.p,{children:"Il existe deux m\xe9thodes pour soumettre un formulaire (toutes deux pouvant \xeatre utilis\xe9es avec 4D) :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"POST, g\xe9n\xe9ralement utilis\xe9e pour envoyer des donn\xe9es au serveur Web,"}),"\n",(0,t.jsx)(n.li,{children:"GET, g\xe9n\xe9ralement utilis\xe9e pour r\xe9cup\xe9rer des donn\xe9es du serveur Web."}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Lorsque le serveur Web re\xe7oit un formulaire post\xe9, il appelle la m\xe9thode base ",(0,t.jsx)(n.code,{children:"On Web Authentication"})," (si elle existe)."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In the called method, you must call the ",(0,t.jsx)(n.code,{children:"WEB GET VARIABLES"})," command in order to ",(0,t.jsx)(n.a,{href:"#getting-values-from-http-requests",children:"retrieve the names and values"})," of all the fields included in an HTML page submitted to the server."]}),"\n",(0,t.jsx)(n.p,{children:"Exemple pour d\xe9finir l'action d'un formulaire :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<FORM ACTION="/4DACTION/MethodName" METHOD=POST>\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple"}),"\n",(0,t.jsxs)(n.p,{children:["Dans une application Web, nous aimerions que les navigateurs puissent rechercher parmi les enregistrements en utilisant une page HTML statique. Cette page s'appelle \u201Csearch.htm\u201D. L'application contient d'autres pages statiques qui vous permettent, par exemple, d'afficher le r\xe9sultat de la recherche (\"results.htm\"). Le type POST a \xe9t\xe9 associ\xe9 \xe0 la page, ainsi que l'action ",(0,t.jsx)(n.code,{children:"/4DACTION/SEARCH"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Voici le code HTML qui correspond \xe0 cette page :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<form action="/4daction/processForm" method=POST>\n<input type=text name=vName value=""><br/>\n<input type=checkbox name=vExact value="Word">Whole word<br/>\n<input type=submit name=OK value="Search">\n</FORM>\n'})}),"\n",(0,t.jsxs)(n.p,{children:['Pendant la saisie des donn\xe9es, tapez "ABCD" dans la zone de saisie, cochez l\'option "Mot entier" et validez en cliquant sur le bouton ',(0,t.jsx)(n.strong,{children:"Rechercher"}),". Dans la requ\xeate envoy\xe9e au serveur Web :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'vName="ABCD"\nvExact="Word"\nOK="Search"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["4D appelle la m\xe9thode base ",(0,t.jsx)(n.code,{children:"On Web Authentication"})," (si elle existe), puis la m\xe9thode de projet ",(0,t.jsx)(n.code,{children:"processForm"})," est appel\xe9e, qui est la suivante :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' #DECLARE ($url : Text) //mandatory for compiled mode\n var $vName : Integer\n var vName;vLIST : Text\n ARRAY TEXT($arrNames;0)\n ARRAY TEXT($arrVals;0)\n WEB GET VARIABLES($arrNames;$arrVals) //we retrieve all the variables of the form\n $vName:=Find in array($arrNames;"vName")\n vName:=$arrVals{$vName}\n If(Find in array($arrNames;"vExact")=-1) //If the option has not been checked\n    vName:=vName+"@"\n End if\n QUERY([Jockeys];[Jockeys]Name=vName)\n FIRST RECORD([Jockeys])\n While(Not(End selection([Jockeys])))\n    vLIST:=vLIST+[Jockeys]Name+" "+[Jockeys]Tel+"<br/>"\n    NEXT RECORD([Jockeys])\n End while\n WEB SEND FILE("results.htm") //Send the list to the results.htm form\n  //which contains a reference to the variable vLIST,\n  //for example \x3c!--4DHTML vLIST--\x3e\n  //...\nEnd if\n'})}),"\n",(0,t.jsx)(n.h2,{id:"r\xe9cup\xe9rer-des-valeurs-depuis-des-requ\xeates-http",children:"R\xe9cup\xe9rer des valeurs depuis des requ\xeates HTTP"}),"\n",(0,t.jsx)(n.p,{children:"Le serveur Web de 4D vous permet de r\xe9cup\xe9rer les donn\xe9es envoy\xe9es via des requ\xeates POST ou GET, en utilisant des formulaires Web ou des URL."}),"\n",(0,t.jsxs)(n.p,{children:["Lorsque le serveur Web re\xe7oit une requ\xeates avec des donn\xe9es dans l'en-t\xeate ou dans l'URL, 4D peut r\xe9cup\xe9rer les valeurs de tous les objets HTML qu'elle contient. This principle can be implemented in the case of a Web form, sent for example using ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/web-send-file",children:(0,t.jsx)(n.code,{children:"WEB SEND FILE"})})," or ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/web-send-blob",children:(0,t.jsx)(n.code,{children:"WEB SEND BLOB"})}),", where the user enters or modifies values, then clicks on the validation button."]}),"\n",(0,t.jsxs)(n.p,{children:["In this case, 4D can retrieve the values of the HTML objects found in the request using the ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/web-get-variables",children:(0,t.jsx)(n.code,{children:"WEB GET VARIABLES"})})," command. La commande ",(0,t.jsx)(n.code,{children:"WEB GET VARIABLES"})," r\xe9cup\xe8re les valeurs en tant que texte."]}),"\n",(0,t.jsx)(n.p,{children:"Consid\xe9rons le code source HTML suivant :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<html>\n<head>\n  <title>Welcome</title>\n  <script language="JavaScript">\x3c!--\nfunction GetBrowserInformation(formObj){\nformObj.vtNav_appName.value = navigator.appName\nformObj.vtNav_appVersion.value = navigator.appVersion\nformObj.vtNav_appCodeName.value = navigator.appCodeName\nformObj.vtNav_userAgent.value = navigator.userAgent\nreturn true\n}\nfunction LogOn(formObj){\nif(formObj.vtUserName.value!=""){\nreturn true\n} else {\nalert("Enter your name, then try again.")\nreturn false\n}\n}\n//--\x3e<\/script>\n</head>\n<body>\n<form action="/4DACTION/WWW_STD_FORM_POST" method="post"\n name="frmWelcome"\n onsubmit="return GetBrowserInformation(frmWelcome)">\n  <h1>Welcome to Spiders United</h1>\n  <p><b>Please enter your name:</b>\n  <input name="vtUserName" value="" size="30" type="text"></p>\n  <p>\n<input name="vsbLogOn" value="Log On" onclick="return LogOn(frmWelcome)" type="submit">\n<input name="vsbRegister" value="Register" type="submit">\n<input name="vsbInformation" value="Information" type="submit"></p>\n<p>\n<input name="vtNav_appName" value="" type="hidden">\n<input name="vtNav_appVersion" value="" type="hidden">\n<input name="vtNav_appCodeName" value="" type="hidden">\n<input name="vtNav_userAgent" value="" type="hidden"></p>\n</form>\n</body>\n</html>\n'})}),"\n",(0,t.jsx)(n.p,{children:"Quand 4D envoie la page \xe0 un navigateur Web, cela ressemble \xe0 ceci :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(864217).Z+"",width:"446",height:"156"})}),"\n",(0,t.jsx)(n.p,{children:"Les principales caract\xe9ristiques de cette page sont les suivantes :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Elle comprend trois boutons ",(0,t.jsx)(n.strong,{children:"Submit"})," : ",(0,t.jsx)(n.code,{children:"vsbLogOn"}),", ",(0,t.jsx)(n.code,{children:"vsbRegister"})," et ",(0,t.jsx)(n.code,{children:"vsbInformation"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Lorsque vous cliquez sur ",(0,t.jsx)(n.strong,{children:"Log On"}),", la soumission du formulaire est d'abord trait\xe9e par la fonction JavaScript ",(0,t.jsx)(n.code,{children:"LogOn"}),". Si aucun nom n'est saisi, le formulaire n'est m\xeame pas envoy\xe9 \xe0 4D et une alerte JavaScript est affich\xe9e."]}),"\n",(0,t.jsxs)(n.li,{children:["Le formulaire a une m\xe9thode 4D POST ainsi qu'un script Submit (",(0,t.jsx)(n.em,{children:"GetBrowserInformation"}),") qui copie les propri\xe9t\xe9s du navigateur dans les quatre objets cach\xe9s dont les noms commencent par ",(0,t.jsx)(n.em,{children:"vtNav_App"}),".\nIl inclut \xe9galement l'objet ",(0,t.jsx)(n.code,{children:"vtUserName"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Examinons la m\xe9thode 4D ",(0,t.jsx)(n.code,{children:"WWW_STD_FORM_POST"})," qui est appel\xe9e lorsque l'utilisateur clique sur l'un des boutons du formulaire HTML."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'  // Retrieval of value of variables\n ARRAY TEXT($arrNames;0)\n ARRAY TEXT($arrValues;0)\n WEB GET VARIABLES($arrNames;$arrValues)\n var $user : Integer\n\n Case of\n\n  // The Log On button was clicked\n    :(Find in array($arrNames;"vsbLogOn")#-1)\n       $user :=Find in array($arrNames;"vtUserName")\n       QUERY([WWW Users];[WWW Users]UserName=$arrValues{$user})\n       $0:=(Records in selection([WWW Users])>0)\n       If($0)\n          WWW POST EVENT("Log On";WWW Log information)\n  // The WWW POST EVENT method saves the information in a database table\n       Else\n\n          $0:=WWW Register\n  // The WWW Register method lets a new Web user register\n       End if\n\n  // The Register button was clicked\n    :(Find in array($arrNames;"vsbRegister")#-1)\n       $0:=WWW Register\n\n  // The Information button was clicked\n    :(Find in array($arrNames;"vsbInformation")#-1)\n       WEB SEND FILE("userinfos.html")\n End case\n'})}),"\n",(0,t.jsx)(n.p,{children:"Les caract\xe9ristiques de cette m\xe9thode sont :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Les valeurs des variables ",(0,t.jsx)(n.em,{children:"vtNav_appName"}),", ",(0,t.jsx)(n.em,{children:"vtNav_appVersion"}),", ",(0,t.jsx)(n.em,{children:"vtNav_appCodeName"})," et ",(0,t.jsx)(n.em,{children:"vtNav_userAgent"})," (li\xe9es aux objets HTML portant les m\xeames noms) sont r\xe9cup\xe9r\xe9es \xe0 l'aide de la commande ",(0,t.jsx)(n.code,{children:"WEB GET VARIABLES"})," \xe0 partir des objets HTML cr\xe9\xe9s par le script JavaScript ",(0,t.jsx)(n.em,{children:"GetBrowserInformation"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Parmi les variables ",(0,t.jsx)(n.em,{children:"vsbLogOn"}),", ",(0,t.jsx)(n.em,{children:"vsbRegister"})," et ",(0,t.jsx)(n.em,{children:"vsbInformation"})," li\xe9es aux trois boutons Submit, seule celle correspondant au bouton cliqu\xe9 sera r\xe9cup\xe9r\xe9e par la commande ",(0,t.jsx)(n.code,{children:"WEB GET VARIABLES"}),". Lorsque l'envoi est effectu\xe9 par l'un de ces boutons, le navigateur renvoie la valeur du bouton cliqu\xe9 \xe0 4D. Cela vous indique sur quel bouton on a cliqu\xe9."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Gardez \xe0 l'esprit qu'en HTML, tous les objets sont des objets de texte. Si vous utilisez un objet SELECT, c'est la valeur de l'\xe9l\xe9ment mis en \xe9vidence dans l'objet qui est renvoy\xe9e dans la commande ",(0,t.jsx)(n.code,{children:"WEB GET VARIABLES"}),", et non la position de l'\xe9l\xe9ment dans le tableau comme dans 4D. ",(0,t.jsx)(n.code,{children:"WEB GET VARIABLES"})," retourne toujours des valeurs de type Texte."]}),"\n",(0,t.jsx)(n.h2,{id:"autres-commandes-de-serveur-web",children:"Autres commandes de serveur Web"}),"\n",(0,t.jsx)(n.p,{children:"Le serveur web 4D fournit plusieurs commandes web de bas niveau vous permettant de d\xe9velopper un traitement personnalis\xe9 des requ\xeates :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["the ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/web-get-http-body",children:(0,t.jsx)(n.code,{children:"WEB GET HTTP BODY"})})," command returns the body as raw text, allowing any parsing you may need"]}),"\n",(0,t.jsxs)(n.li,{children:["the ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/web-get-http-header",children:(0,t.jsx)(n.code,{children:"WEB GET HTTP HEADER"})})," command return the headers of the request. Elle est utile pour g\xe9rer des cookies personnalis\xe9s, par exemple (en plus de la commande ",(0,t.jsx)(n.code,{children:"WEB SET HTTP HEADER"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:["the ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/web-get-body-part",children:(0,t.jsx)(n.code,{children:"WEB GET BODY PART"})})," and ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/web-get-body-part-count",children:(0,t.jsx)(n.code,{children:"WEB Get body part count"})})," commands to parse the body part of a multi-part request and retrieve text values, but also files posted, using BLOBs."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Ces commandes sont r\xe9sum\xe9es dans le graphique suivant :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(108240).Z+"",width:"676",height:"374"})}),"\n",(0,t.jsxs)(n.p,{children:['Le serveur web 4D prend en charge les fichiers envoy\xe9s en encodage de transfert par morceaux (chunked transfer encoding) depuis n\'importe quel client Web. L\'encodage de transfert chunked est un m\xe9canisme de transfert de donn\xe9es sp\xe9cifi\xe9 en HTTP/1.1. Il permet le transfert de donn\xe9es sous forme de s\xe9ries de "chunks" ou "morceaux" (parts) sans conna\xeetre la taille finale des donn\xe9es. The 4D Web Server also supports chunked transfer encoding from the server to Web clients (using ',(0,t.jsx)(n.a,{href:"/docs/fr/20-R8/commands/web-send-raw-data",children:(0,t.jsx)(n.code,{children:"WEB SEND RAW DATA"})}),")."]}),"\n",(0,t.jsx)(n.h2,{id:"m\xe9thode-projet-compiler_web",children:"M\xe9thode projet COMPILER_WEB"}),"\n",(0,t.jsx)(n.p,{children:"La m\xe9thode COMPILER_WEB, si elle existe, est syst\xe9matiquement appel\xe9e lorsque le serveur HTTP re\xe7oit une requ\xeate dynamique et appelle le moteur 4D. La m\xe9thode COMPILER_WEB, si elle existe, est syst\xe9matiquement appel\xe9e lorsque le serveur HTTP re\xe7oit une requ\xeate dynamique et appelle le moteur 4D. Cette m\xe9thode est destin\xe9e \xe0 contenir des directives de typage et/ou d'initialisation de variables utilis\xe9es lors des \xe9changes Web. Elle est utilis\xe9e par le compilateur lorsque l'application est compil\xe9e. La m\xe9thode COMPILER_WEB est commune \xe0 tous les formulaires Web. Par d\xe9faut, la m\xe9thode COMPILER_WEB n'existe pas. Vous devez la cr\xe9er explicitement."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"La m\xe9thode projet COMPILER_WEB est \xe9galement appel\xe9e, si elle existe, pour chaque requ\xeate SOAP accept\xe9e."}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},108240:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/httpCommands-f0f40e81d3278591838e7c262365beb9.png"},864217:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/spiders-0e4915c8e3496e1dd10f0b15a4319274.png"},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var r=s(667294);let t={},a=r.createContext(t);function i(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);