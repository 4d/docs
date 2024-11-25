"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29048"],{29491:function(e,n,a){a.r(n),a.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>u,assets:()=>d,toc:()=>t,frontMatter:()=>i});var r=JSON.parse('{"id":"WebServer/httpRequests","title":"Procesamiento de peticiones HTTP","description":"El servidor web de 4D ofrece varias funcionalidades para gestionar las peticiones HTTP:","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20/WebServer/httpRequests.md","sourceDirName":"WebServer","slug":"/WebServer/httpRequests","permalink":"/docs/es/20/WebServer/httpRequests","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FhttpRequests.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"httpRequests","title":"Procesamiento de peticiones HTTP"},"sidebar":"docs","previous":{"title":"P\xe1ginas de plantillas","permalink":"/docs/es/20/WebServer/templates"},"next":{"title":"Permitir m\xe9todos proyecto","permalink":"/docs/es/20/WebServer/allowProject"}}'),o=a("785893"),s=a("250065");let i={id:"httpRequests",title:"Procesamiento de peticiones HTTP"},l=void 0,d={},t=[{value:"On Web Connection",id:"on-web-connection",level:2},{value:"Llamadas a m\xe9todos base",id:"llamadas-a-m\xe9todos-base",level:3},{value:"Sintaxis",id:"sintaxis",level:3},{value:"$1 - Datos adicionales de la URL",id:"1---datos-adicionales-de-la-url",level:3},{value:"$2 - Encabezado y cuerpo de la petici\xf3n HTTP",id:"2---encabezado-y-cuerpo-de-la-petici\xf3n-http",level:3},{value:"$3 - Direcci\xf3n IP del cliente web",id:"3---direcci\xf3n-ip-del-cliente-web",level:3},{value:"$4 - Direcci\xf3n IP del servidor",id:"4---direcci\xf3n-ip-del-servidor",level:3},{value:"$5 y $6 - Nombre de usuario y contrase\xf1a",id:"5-y-6---nombre-de-usuario-y-contrase\xf1a",level:3},{value:"/4DACTION",id:"4daction",level:2},{value:"Ejemplo",id:"ejemplo",level:4},{value:"4DACCI\xd3N para publicar formularios",id:"4dacci\xf3n-para-publicar-formularios",level:3},{value:"Ejemplo",id:"ejemplo-1",level:4},{value:"Obtener valores de las peticiones HTTP",id:"obtener-valores-de-las-peticiones-http",level:2},{value:"Otros comandos del servidor web",id:"otros-comandos-del-servidor-web",level:2},{value:"M\xe9todo proyecto COMPILER_WEB",id:"m\xe9todo-proyecto-compiler_web",level:2}];function c(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"El servidor web de 4D ofrece varias funcionalidades para gestionar las peticiones HTTP:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["el m\xe9todo base ",(0,o.jsx)(n.code,{children:"On Web Connection"}),", un enrutador para su aplicaci\xf3n web,"]}),"\n",(0,o.jsxs)(n.li,{children:["la URL ",(0,o.jsx)(n.code,{children:"/4DACTION"})," para llamar al c\xf3digo del lado del servidor"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"WEB GET VARIABLES"})," para obtener valores de los objetos HTML enviados al servidor"]}),"\n",(0,o.jsxs)(n.li,{children:["otros comandos como ",(0,o.jsx)(n.code,{children:"WEB GET HTTP BODY"}),", ",(0,o.jsx)(n.code,{children:"WEB GET HTTP HEADER"}),", o ",(0,o.jsx)(n.code,{children:"WEB GET BODY PART"})," permiten personalizar el tratamiento de las solicitudes, incluidas las cookies."]}),"\n",(0,o.jsxs)(n.li,{children:["el m\xe9todo proyecto ",(0,o.jsx)(n.em,{children:"COMPILER_WEB"}),", para declarar sus variables."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"on-web-connection",children:"On Web Connection"}),"\n",(0,o.jsxs)(n.p,{children:["El m\xe9todo base ",(0,o.jsx)(n.code,{children:"On Web Connection"})," puede utilizarse como punto de entrada al servidor web de 4D."]}),"\n",(0,o.jsx)(n.h3,{id:"llamadas-a-m\xe9todos-base",children:"Llamadas a m\xe9todos base"}),"\n",(0,o.jsxs)(n.p,{children:["El m\xe9todo base ",(0,o.jsx)(n.code,{children:"On Web Connection"})," se llama autom\xe1ticamente cuando el servidor recibe cualquier URL que no sea una ruta a una p\xe1gina existente en el servidor. Se llama al m\xe9todo de la base de datos con la URL."]}),"\n",(0,o.jsxs)(n.p,{children:['Por ejemplo, la URL "',(0,o.jsx)(n.em,{children:"a/b/c"}),'" llamar\xe1 al m\xe9todo base, pero "',(0,o.jsx)(n.em,{children:"a/b/c.html"}),'" no llamar\xe1 al m\xe9todo base si la p\xe1gina "c.html" existe en la subcarpeta "a/b" del ',(0,o.jsx)(n.a,{href:"/docs/es/20/WebServer/webServerConfig#root-folder",children:"WebFolder"}),"."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["La petici\xf3n debe haber sido aceptada previamente por el m\xe9todo base ",(0,o.jsx)(n.a,{href:"/docs/es/20/WebServer/authentication#on-web-authentication",children:(0,o.jsx)(n.code,{children:"On Web Authentication"})})," (si existe) y el servidor web debe ser lanzado."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"sintaxis",children:"Sintaxis"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"On Web Connection"}),"( ",(0,o.jsx)(n.em,{children:"$1"})," : Text ; ",(0,o.jsx)(n.em,{children:"$2"})," : Text ; ",(0,o.jsx)(n.em,{children:"$3"})," : Text ; ",(0,o.jsx)(n.em,{children:"$4"})," : Text ; ",(0,o.jsx)(n.em,{children:"$5"})," : Text ; ",(0,o.jsx)(n.em,{children:"$6"})," : Text )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metros"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{style:{textAlign:"center"}}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"$1"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,o.jsx)(n.td,{children:"URL"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"$2"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,o.jsx)(n.td,{children:"Encabezados HTTP + cuerpo HTTP (hasta un l\xedmite de 32 kb)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"$3"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,o.jsx)(n.td,{children:"Direcci\xf3n IP del cliente web (navegador)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"$4"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,o.jsx)(n.td,{children:"Direcci\xf3n IP del servidor"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"$5"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,o.jsx)(n.td,{children:"Nombre de usuario"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"$6"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,o.jsx)(n.td,{children:"Contrase\xf1a"})]})]})]}),"\n",(0,o.jsx)(n.p,{children:"Debe declarar estos par\xe1metros de la siguiente manera:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"//M\xe9todo base On Web Connection\n\n C_TEXT($1;$2;$3;$4;$5;$6)\n\n//C\xf3digo para el m\xe9todod\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Como alternativa, puede utilizar la sintaxis ",(0,o.jsx)(n.a,{href:"/docs/es/20/Concepts/parameters#named-parameters",children:"par\xe1metros nombrados"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"// M\xe9todo base On Web Connection\n#DECLARE ($url : Text; $header : Text; \\\n  $BrowserIP : Text; $ServerIP : Text; \\\n  $user : Text; $password : Text)\n\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Llamar a un comando 4D que muestra un elemento de interfaz (",(0,o.jsx)(n.code,{children:"DIALOG"}),", ",(0,o.jsx)(n.code,{children:"ALERT"}),", etc.) no est\xe1 permitido y termina el procesamiento del m\xe9todo."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"1---datos-adicionales-de-la-url",children:"$1 - Datos adicionales de la URL"}),"\n",(0,o.jsx)(n.p,{children:"El primer par\xe1metro ($1) es la URL introducida por los usuarios en el \xe1rea de direcciones de su navegador web, sin la direcci\xf3n local."}),"\n",(0,o.jsx)(n.p,{children:"Utilicemos como ejemplo una conexi\xf3n de intranet. Supongamos que la direcci\xf3n IP de su m\xe1quina 4D Web Server es 123.4.567.89. La siguiente tabla muestra los valores de $1 en funci\xf3n de la URL introducida en el navegador web:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"URL introducida en el navegador web"}),(0,o.jsx)(n.th,{children:"Valor del par\xe1metro $1"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"123.4.567.89"}),(0,o.jsx)(n.td,{children:"/"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"http://123.45.67.89",children:"http://123.45.67.89"})}),(0,o.jsx)(n.td,{children:"/"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"123.4.567.89/Customers"}),(0,o.jsx)(n.td,{children:"/Customers"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"http://123.45.67.89/Customers/Add",children:"http://123.45.67.89/Customers/Add"})}),(0,o.jsx)(n.td,{children:"/Customers/Add"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"123.4.567.89/Do_This/If_OK/Do_That"}),(0,o.jsx)(n.td,{children:"/Do_This/If_OK/Do_That"})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:['Tenga en cuenta que es libre de utilizar este par\xe1metro a su conveniencia. 4D simplemente ignora el valor pasado m\xe1s all\xe1 de la parte del host de la URL. Por ejemplo, puede establecer una convenci\xf3n en la que el valor "',(0,o.jsx)(n.em,{children:"/Customers/Add"}),'" significa "ir directamente a a\xf1adir un nuevo registro en la tabla ',(0,o.jsx)(n.code,{children:"[Customers]"}),".\u201D Al proporcionar a los usuarios de la web una lista de posibles valores y/o marcadores por defecto, puede dar accesos directos a diferentes partes de su aplicaci\xf3n. De este modo, los usuarios de la web pueden acceder r\xe1pidamente a los recursos de su sitio web sin tener que recorrer toda la ruta de navegaci\xf3n cada vez que realicen una nueva conexi\xf3n."]}),"\n",(0,o.jsx)(n.h3,{id:"2---encabezado-y-cuerpo-de-la-petici\xf3n-http",children:"$2 - Encabezado y cuerpo de la petici\xf3n HTTP"}),"\n",(0,o.jsxs)(n.p,{children:["El segundo par\xe1metro ($2) es el encabezado y el cuerpo de la petici\xf3n HTTP enviada por el navegador web. Tenga en cuenta que esta informaci\xf3n se pasa a su m\xe9todo base ",(0,o.jsx)(n.code,{children:"On Web Connection"}),' "tal cual". Su contenido variar\xe1 en funci\xf3n de la naturaleza del navegador web que intenta la conexi\xf3n.']}),"\n",(0,o.jsxs)(n.p,{children:["Si su aplicaci\xf3n utiliza esta informaci\xf3n, deber\xe1 analizar el encabezado y el cuerpo. Puede utilizar los comandos ",(0,o.jsx)(n.code,{children:"WEB GET HTTP HEADER"})," y ",(0,o.jsx)(n.code,{children:"WEB GET HTTP BODY"}),"."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Por razones de rendimiento, el tama\xf1o de los datos que pasan por el par\xe1metro $2 no debe superar los 32 KB. M\xe1s all\xe1 de este tama\xf1o, son truncados por el servidor HTTP de 4D."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"3---direcci\xf3n-ip-del-cliente-web",children:"$3 - Direcci\xf3n IP del cliente web"}),"\n",(0,o.jsx)(n.p,{children:"El par\xe1metro $3 recibe la direcci\xf3n IP de la m\xe1quina del navegador. Esta informaci\xf3n puede permitirle distinguir entre las conexiones a la intranet y a Internet."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["4D devuelve las direcciones IPv4 en un formato h\xedbrido IPv6/IPv4 escrito con un prefijo de 96 bits, por ejemplo ::ffff:192.168.2.34 para la direcci\xf3n IPv4 192.168.2.34. Para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,o.jsx)(n.a,{href:"/docs/es/20/WebServer/webServerConfig#about-ipv6-support",children:"Soporte IPv6"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"4---direcci\xf3n-ip-del-servidor",children:"$4 - Direcci\xf3n IP del servidor"}),"\n",(0,o.jsxs)(n.p,{children:["El par\xe1metro $4 recibe la direcci\xf3n IP solicitada por el servidor web 4D. 4D permite el multi-homing, que permite utilizar m\xe1quinas con m\xe1s de una direcci\xf3n IP. Para m\xe1s informaci\xf3n, consulte la ",(0,o.jsx)(n.a,{href:"webServerConfig.html#ip-address-to-listen",children:"p\xe1gina Configuraci\xf3n"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"5-y-6---nombre-de-usuario-y-contrase\xf1a",children:"$5 y $6 - Nombre de usuario y contrase\xf1a"}),"\n",(0,o.jsxs)(n.p,{children:["Los par\xe1metros $5 y $6 reciben el nombre de usuario y la contrase\xf1a introducidos por el usuario en el cuadro de di\xe1logo de identificaci\xf3n est\xe1ndar que muestra el navegador, si procede (ver la p\xe1gina ",(0,o.jsx)(n.a,{href:"/docs/es/20/WebServer/authentication",children:"autenticaci\xf3n"}),")."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Si el nombre de usuario enviado por el navegador existe en 4D, el par\xe1metro $6 (la contrase\xf1a del usuario) no se devuelve por razones de seguridad."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"4daction",children:"/4DACTION"}),"\n",(0,o.jsxs)(n.p,{children:["***/4DACTION/",(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"MethodName"})}),(0,o.jsx)(n.br,{})," **/4DACTION/*****",(0,o.jsx)(n.em,{children:"MethodName/Param"})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metros"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{style:{textAlign:"center"}}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"MethodName"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,o.jsx)(n.td,{children:"Nombre del m\xe9todo de proyecto 4D a ejecutar"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Param"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,o.jsx)(n.td,{children:"Par\xe1metro texto a pasar al m\xe9todo proyecto"})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Uso:"})," URL o acci\xf3n del formulario."]}),"\n",(0,o.jsxs)(n.p,{children:["Esta URL permite llamar al m\xe9todo proyecto 4D ",(0,o.jsx)(n.em,{children:"MethodName"})," con un par\xe1metro texto opcional ",(0,o.jsx)(n.em,{children:"Param"}),". El m\xe9todo recibir\xe1 este par\xe1metro en ",(0,o.jsx)(n.em,{children:"$1"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["El m\xe9todo proyecto 4D debe haber sido ",(0,o.jsx)(n.a,{href:"/docs/es/20/WebServer/allowProject",children:"permitido para peticiones web"}),': el valor del atributo "Disponible a trav\xe9s de etiquetas y URLs 4D (4DACTION...)" debe haber sido marcado en las propiedades del m\xe9todo. Si no se comprueba el atributo, se rechaza la solicitud web.']}),"\n",(0,o.jsxs)(n.li,{children:["Cuando 4D recibes una petici\xf3n ",(0,o.jsx)(n.code,{children:"/4DACTION/MethodName/Param"}),", se llama el m\xe9todo base ",(0,o.jsx)(n.code,{children:"On Web Authentication"})," (si existe)."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"4DACTION/"})," puede asociarse a una URL en una p\xe1gina web est\xe1tica:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<A HREF="/4DACTION/MyMethod/hello">Do Something</A>\n'})}),"\n",(0,o.jsxs)(n.p,{children:["El m\xe9todo proyecto ",(0,o.jsx)(n.code,{children:"MyMethod"}),' debe devolver generalmente una "respuesta" (env\xedo de una p\xe1gina HTML utilizando ',(0,o.jsx)(n.code,{children:"WEB SEND FILE"})," o ",(0,o.jsx)(n.code,{children:"WEB SEND TEXT"}),", etc.). Aseg\xfarese de que el tratamiento sea lo m\xe1s breve posible para no bloquear el navegador."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Un m\xe9todo llamado por ",(0,o.jsx)(n.code,{children:"/4DACTION"})," no debe llamar a elementos de la interfaz (",(0,o.jsx)(n.code,{children:"DIALOG"}),", ",(0,o.jsx)(n.code,{children:"ALERT"}),", etc.)."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsxs)(n.p,{children:["Este ejemplo describe la asociaci\xf3n de la URL ",(0,o.jsx)(n.code,{children:"/4DACTION"})," con un objeto imagen HTML para mostrar din\xe1micamente una imagen en la p\xe1gina. Inserta las siguientes instrucciones en una p\xe1gina HTML est\xe1tica:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<IMG SRC="/4DACTION/getPhoto/smith">\n'})}),"\n",(0,o.jsxs)(n.p,{children:["El m\xe9todo ",(0,o.jsx)(n.code,{children:"getPhoto"})," es el siguiente:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'C_TEXT($1) // Este par\xe1metro debe declararse siempre\nvar $path : Text\nvar $PictVar : Picture\nvar $BlobVar : Blob\n\n //busca la imagen en la carpeta Im\xe1genes dentro de la carpeta Resources\n$path:=Get 4D folder(Current resources folder)+"Images"+Folder separator+$1+".psd"\n\nREAD PICTURE FILE($path;$PictVar) //pone la imagen en la variable imagen\nPICTURE TO BLOB($PictVar;$BLOB;".png") //convierte la imagen en formato ".png". WEB SEND BLOB($BLOB;"image/png")\n'})}),"\n",(0,o.jsx)(n.h3,{id:"4dacci\xf3n-para-publicar-formularios",children:"4DACCI\xd3N para publicar formularios"}),"\n",(0,o.jsx)(n.p,{children:'El servidor web de 4D tambi\xe9n le permite utilizar formularios "publicados", que son p\xe1ginas HTML est\xe1ticas que env\xedan datos al servidor web y recuperar f\xe1cilmente todos los valores. Se les debe asociar el tipo POST y la acci\xf3n del formulario debe empezar imperativamente por /4DACTION/MethodName.'}),"\n",(0,o.jsx)(n.p,{children:"Un formulario puede ser enviado a trav\xe9s de dos m\xe9todos (ambos pueden ser utilizados con 4D):"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"POST, normalmente utilizado para enviar datos al servidor web,"}),"\n",(0,o.jsx)(n.li,{children:"GET, normalmente utilizado para solicitar datos del servidor web."}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Cuando el servidor web recibe un formulario publicado, llama al m\xe9todo base ",(0,o.jsx)(n.code,{children:"On Web Authentication"})," (si existe)."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["En el m\xe9todo llamado, debe llamar al comando ",(0,o.jsx)(n.code,{children:"WEB GET VARIABLES"})," para ",(0,o.jsx)(n.a,{href:"#getting-values-from-the-requests",children:"recuperar los nombres y valores"})," de todos los campos incluidos en una p\xe1gina HTML enviada al servidor."]}),"\n",(0,o.jsx)(n.p,{children:"Ejemplo para definir la acci\xf3n de un formulario:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<FORM ACTION="/4DACTION/MethodName" METHOD=POST>\n'})}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo"}),"\n",(0,o.jsxs)(n.p,{children:['En una aplicaci\xf3n web, nos gustar\xeda que los navegadores pudieran buscar entre los registros mediante una p\xe1gina HTML est\xe1tica. Esta p\xe1gina se llama "search.htm". La aplicaci\xf3n contiene otras p\xe1ginas est\xe1ticas que permiten, por ejemplo, mostrar el resultado de la b\xfasqueda ("results.htm"). Se ha asociado el tipo POST a la p\xe1gina, as\xed como la acci\xf3n ',(0,o.jsx)(n.code,{children:"/4DACTION/SEARCH"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Aqu\xed est\xe1 el c\xf3digo HTML que corresponde a esta p\xe1gina:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<form action="/4daction/processForm" method=POST>\n<input type=text name=vName value=""><br/>\n<input type=checkbox name=vExact value="Word">Whole word<br/>\n<input type=submit name=OK value="Search">\n</FORM>\n'})}),"\n",(0,o.jsxs)(n.p,{children:['Durante la entrada de datos, escriba "ABCD" en el \xe1rea de entrada de datos, marque la opci\xf3n "Whole word" y val\xeddela haciendo clic en el bot\xf3n ',(0,o.jsx)(n.strong,{children:"Search"}),". En la solicitud enviada al servidor web:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'vName="ABCD"\nvExact="Word"\nOK="Search"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["4D llama al m\xe9todo base ",(0,o.jsx)(n.code,{children:"<On Web Authentication>"})," (si existe), luego se llama al m\xe9todo proyecto ",(0,o.jsx)(n.code,{children:"processForm"}),", que es el siguiente:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' C_TEXT($1) //obligatorio para el modo compilado\n C_LONGINT($vName)\n C_TEXT(vName;vLIST)\n ARRAY TEXT($arrNames;0)\n ARRAY TEXT($arrVals;0)\n WEB GET VARIABLES($arrNames;$arrVals) //recuperamos todas las variables del formulario\n $vName:=Find in array($arrNames;"vName")\n vName:=$arrVals{$vName}\n If(Find in array($arrNames;"vExact")=-1) //Si la opci\xf3n no ha sido marcada\n    vName:=vName+"@"\n End if\n QUERY([Jockeys];[Jockeys]Name=vName)\n FIRST RECORD([Jockeys])\n While(Not(End selection([Jockeys])))\n    vLIST:=vLIST+[Jockeys]Name+" "+[Jockeys]Tel+"<br/>"\n    NEXT RECORD([Jockeys])\n End while\n WEB SEND FILE("results.htm") //Enviar la lista al formulario results.htm\n  //que contiene una referencia a la variable vLIST,\n  //por ejemplo \x3c!--4DHTML vLIST--\x3e\n  //...\nEnd if\n'})}),"\n",(0,o.jsx)(n.h2,{id:"obtener-valores-de-las-peticiones-http",children:"Obtener valores de las peticiones HTTP"}),"\n",(0,o.jsx)(n.p,{children:"El servidor web de 4D le permite recuperar datos enviados a trav\xe9s de peticiones POST o GET, utilizando formularios web o URLs."}),"\n",(0,o.jsxs)(n.p,{children:["Cuando el servidor web recibe una petici\xf3n con datos en el encabezado o en la URL, 4D puede recuperar los valores de cualquier objeto HTML que contenga. Este principio puede implementarse en el caso de un formulario web, enviado por ejemplo utilizando ",(0,o.jsx)(n.code,{children:"WEB SEND FILE"})," o ",(0,o.jsx)(n.code,{children:"WEB SEND BLOB"}),", en el que el usuario introduce o modifica valores y luego hace clic en el bot\xf3n de validaci\xf3n."]}),"\n",(0,o.jsxs)(n.p,{children:["En este caso, 4D puede recuperar los valores de los objetos HTML encontrados en la petici\xf3n utilizando el comando ",(0,o.jsx)(n.code,{children:"WEB GET VARIABLES"}),". El comando ",(0,o.jsx)(n.code,{children:"WEB GET VARIABLES"})," recupera los valores como texto."]}),"\n",(0,o.jsx)(n.p,{children:"Considere el siguiente c\xf3digo fuente de la p\xe1gina HTML:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<html>\n<head>\n  <title>Welcome</title>\n  <script language="JavaScript">\x3c!--\nfunction GetBrowserInformation(formObj){\nformObj.vtNav_appName.value = navigator.appName\nformObj.vtNav_appVersion.value = navigator.appVersion\nformObj.vtNav_appCodeName.value = navigator.appCodeName\nformObj.vtNav_userAgent.value = navigator.userAgent\nreturn true\n}\nfunction LogOn(formObj){\nif(formObj.vtUserName.value!=""){\nreturn true\n} else {\nalert("Enter your name, then try again.")\nreturn false\n}\n}\n//--\x3e<\/script>\n</head>\n<body>\n<form action="/4DACTION/WWW_STD_FORM_POST" method="post"\n name="frmWelcome"\n onsubmit="return GetBrowserInformation(frmWelcome)">\n  <h1>Welcome to Spiders United</h1>\n  <p><b>Please enter your name:</b>\n  <input name="vtUserName" value="" size="30" type="text"></p>\n  <p> \n<input name="vsbLogOn" value="Log On" onclick="return LogOn(frmWelcome)" type="submit"> \n<input name="vsbRegister" value="Register" type="submit">\n<input name="vsbInformation" value="Information" type="submit"></p>\n<p> \n<input name="vtNav_appName" value="" type="hidden"> \n<input name="vtNav_appVersion" value="" type="hidden"> \n<input name="vtNav_appCodeName" value="" type="hidden">\n<input name="vtNav_userAgent" value="" type="hidden"></p>\n</form>\n</body>\n</html>\nreturn false\n}\n}\n//--\x3e<\/script>\n</head>\n<body>\n<form action="/4DACTION/WWW_STD_FORM_POST" method="post"\n name="frmWelcome"\n onsubmit="return GetBrowserInformation(frmWelcome)">\n  <h1>Welcome to Spiders United</h1>\n  <p><b>Please enter your name:</b>\n  <input name="vtUserName" value="" size="30" type="text"></p>\n  <p>\n<input name="vsbLogOn" value="Log On" onclick="return LogOn(frmWelcome)" type="submit">\n<input name="vsbRegister" value="Register" type="submit">\n<input name="vsbInformation" value="Information" type="submit"></p>\n<p>\n<input name="vtNav_appName" value="" type="hidden">\n<input name="vtNav_appVersion" value="" type="hidden">\n<input name="vtNav_appCodeName" value="" type="hidden">\n<input name="vtNav_userAgent" value="" type="hidden"></p>\n</form>\n</body>\n</html>\n'})}),"\n",(0,o.jsx)(n.p,{children:"Cuando 4D env\xeda la p\xe1gina a un navegador web, tiene el siguiente aspecto:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:a(686572).Z+"",width:"446",height:"156"})}),"\n",(0,o.jsx)(n.p,{children:"Las principales caracter\xedsticas de esta p\xe1gina son:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Incluye tres botones ",(0,o.jsx)(n.strong,{children:"Submit"}),": ",(0,o.jsx)(n.code,{children:"vsbLogOn"}),", ",(0,o.jsx)(n.code,{children:"vsbRegister"})," y ",(0,o.jsx)(n.code,{children:"vsbInformation"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Cuando se hace clic en ",(0,o.jsx)(n.strong,{children:"Log On"}),", el env\xedo del formulario se procesa primero por la funci\xf3n de JavaScript ",(0,o.jsx)(n.code,{children:"LogOn"}),". Si no se introduce ning\xfan nombre, el formulario ni siquiera se env\xeda a 4D, y se muestra una alerta de JavaScript."]}),"\n",(0,o.jsxs)(n.li,{children:["El formulario tiene un m\xe9todo POST 4D as\xed como un script Submit (",(0,o.jsx)(n.em,{children:"GetBrowserInformation"}),") que copia las propiedades del navegador a los cuatro objetos ocultos cuyos nombres empiezan por ",(0,o.jsx)(n.em,{children:"vtNav_App"}),". Tambi\xe9n incluye el objeto ",(0,o.jsx)(n.code,{children:"vtUserName"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Examinemos el m\xe9todo 4D ",(0,o.jsx)(n.code,{children:"WWW_STD_FORM_POST"})," que se llama cuando el usuario hace clic en uno de los botones del formulario HTML."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'  // Recuperaci\xf3n del valor de las variables\n ARRAY TEXT($arrNames;0)\n ARRAY TEXT($arrValues;0)\n WEB GET VARIABLES($arrNames;$arrValues)\n C_LONGINT($user)\n\n Case of\n\n  // Se ha presionado el bot\xf3n Log On\n    :(Find in array($arrNames;"vsbLogOn")#-1)\n       $user :=Find in array($arrNames;"vtUserName")\n       QUERY([WWW Users];[WWW Users]UserName=$arrValues{$user})\n       $0:=(Records in selection([WWW Users])>0)\n       If($0)\n          WWW POST EVENT("Log On";WWW Log information)\n  // El m\xe9todo WWW POST EVENT guarda la informaci\xf3n en una tabla de la base\n       Else\n\n          $0:=WWW Register\n  // El m\xe9todo WWW Register permite que un nuevo usuario de la Web se registre\n       End if\n\n  // Se ha presionado el bot\xf3n Register\n    :(Find in array($arrNames;"vsbRegister")#-1)\n       $0:=WWW Register\n\n  // Se ha presionado el bot\xf3n de informaci\xf3n\n    :(Find in array($arrNames;"vsbInformation")#-1)\n       WEB SEND FILE("userinfos.html")\n End case\n'})}),"\n",(0,o.jsx)(n.p,{children:"Las funcionalidades de este m\xe9todo son:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Los valores de las variables ",(0,o.jsx)(n.em,{children:"vtNav_appName"}),", ",(0,o.jsx)(n.em,{children:"vtNav_appVersion"}),", ",(0,o.jsx)(n.em,{children:"vtNav_appCodeName"}),", y ",(0,o.jsx)(n.em,{children:"vtNav_userAgent"})," (vinculadas a los objetos HTML que tienen los mismos nombres) se recuperan utilizando el comando ",(0,o.jsx)(n.code,{children:"WEB GET VARIABLES"})," a partir de los objetos HTML creados por el script JavaScript ",(0,o.jsx)(n.em,{children:"GetBrowserInformation"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["De las variables vinculadas ",(0,o.jsx)(n.em,{children:"vsbLogOn"}),", ",(0,o.jsx)(n.em,{children:"vsbRegister"})," y ",(0,o.jsx)(n.em,{children:"vsbInformation"})," a los tres botones de env\xedo, s\xf3lo la correspondiente al bot\xf3n que se ha presionado ser\xe1 recuperada por el comando ",(0,o.jsx)(n.code,{children:"WEB GET VARIABLES"}),". Cuando el env\xedo se realiza mediante uno de estos botones, el navegador devuelve a 4D el valor del bot\xf3n presionado. Esto le indica qu\xe9 bot\xf3n se ha presionado."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Tenga en cuenta que con HTML, todos los objetos son objetos de texto. Si se utiliza un objeto SELECT, es el valor del elemento resaltado en el objeto el que se devuelve en el comando ",(0,o.jsx)(n.code,{children:"WEB GET VARIABLES"}),", y no la posici\xf3n del elemento en el array como en 4D. ",(0,o.jsx)(n.code,{children:"WEB GET VARIABLES"})," siempre devuelve valores de tipo Texto."]}),"\n",(0,o.jsx)(n.h2,{id:"otros-comandos-del-servidor-web",children:"Otros comandos del servidor web"}),"\n",(0,o.jsx)(n.p,{children:"El servidor web de 4D ofrece varios comandos web de bajo nivel que le permiten desarrollar un procesamiento personalizado de las solicitudes:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["el comando ",(0,o.jsx)(n.code,{children:"WEB GET HTTP BODY"})," devuelve el cuerpo como texto sin procesar, permitiendo cualquier an\xe1lisis que pueda necesitar"]}),"\n",(0,o.jsxs)(n.li,{children:["el comando ",(0,o.jsx)(n.code,{children:"WEB GET HTTP HEADER"})," devuelve los encabezados de la petici\xf3n. Es \xfatil para manejar cookies personalizadas, por ejemplo (junto con el comando ",(0,o.jsx)(n.code,{children:"WEB SET HTTP HEADER"}),")."]}),"\n",(0,o.jsxs)(n.li,{children:["los comandos ",(0,o.jsx)(n.code,{children:"WEB GET BODY PART"})," y ",(0,o.jsx)(n.code,{children:"WEB Get body part count"})," para analizar la parte del cuerpo de una petici\xf3n de varias partes y recuperar los valores de texto, pero tambi\xe9n los archivos publicados, utilizando BLOBs."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Estos comandos se resumen en el siguiente gr\xe1fico:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:a(154967).Z+"",width:"676",height:"374"})}),"\n",(0,o.jsxs)(n.p,{children:['El servidor web de 4D ahora soporta archivos cargados con codificaci\xf3n chunked desde cualquier cliente web. La codificaci\xf3n de transferencia en trozos es un mecanismo de transferencia de datos especificado en HTTP/1.1. Permite transferir datos en una serie de "trozos" (partes) sin conocer el tama\xf1o final de los datos. El servidor web de 4D tambi\xe9n soporta la codificaci\xf3n de transferencia en trozos desde el servidor a los clientes web (utilizando ',(0,o.jsx)(n.code,{children:"WEB SEND RAW DATA"}),")."]}),"\n",(0,o.jsx)(n.h2,{id:"m\xe9todo-proyecto-compiler_web",children:"M\xe9todo proyecto COMPILER_WEB"}),"\n",(0,o.jsxs)(n.p,{children:["El m\xe9todo COMPILER\\WEB, si existe, es llamado sistem\xe1ticamente cuando el servidor HTTP recibe una petici\xf3n din\xe1mica y llama al motor 4D. Este es el caso, por ejemplo, cuando el servidor web de 4D recibe un formulario publicado o una URL para procesar en ",(0,o.jsx)(n.a,{href:"#on-web-connection",children:(0,o.jsx)(n.code,{children:"On Web Connection"})}),". Este m\xe9todo est\xe1 destinado a contener directivas de digitaci\xf3n y/o inicializaci\xf3n de variables utilizadas durante los intercambios web. Es utilizado por el compilador cuando se compila la aplicaci\xf3n. El m\xe9todo COMPILER\\WEB es com\xfan a todos los formularios web. Por defecto, el m\xe9todo COMPILER_WEB no existe. Debe crearlo expl\xedcitamente."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Tambi\xe9n se llama al m\xe9todo proyecto COMPILER_WEB, si existe, para cada solicitud SOAP aceptada."}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},154967:function(e,n,a){a.d(n,{Z:function(){return r}});let r=a.p+"assets/images/httpCommands-f0f40e81d3278591838e7c262365beb9.png"},686572:function(e,n,a){a.d(n,{Z:function(){return r}});let r=a.p+"assets/images/spiders-0e4915c8e3496e1dd10f0b15a4319274.png"},250065:function(e,n,a){a.d(n,{Z:function(){return l},a:function(){return i}});var r=a(667294);let o={},s=r.createContext(o);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);