"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4078],{603905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(a),u=r,k=s["".concat(p,".").concat(u)]||s[u]||c[u]||l;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},827288:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>m});a(667294);var n=a(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={id:"MailAttachmentClass",title:"MailAttachment"},o=void 0,p={unversionedId:"API/MailAttachmentClass",id:"version-19/API/MailAttachmentClass",title:"MailAttachment",description:"Los objetos adjuntos permiten referenciar archivos en un objeto Email. Los objetos Attachment (adjuntos) son creados utilizando el comando MAIL New attachment.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/API/MailAttachmentClass.md",sourceDirName:"API",slug:"/API/MailAttachmentClass",permalink:"/docs/es/19/API/MailAttachmentClass",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FMailAttachmentClass.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"MailAttachmentClass",title:"MailAttachment"},sidebar:"docs",previous:{title:"IMAPTransporter",permalink:"/docs/es/19/API/IMAPTransporterClass"},next:{title:"POP3Transporter",permalink:"/docs/es/19/API/POP3TransporterClass"}},d={},m=[{value:"Objetos adjuntos",id:"objetos-adjuntos",level:3},{value:"MAIL New attachment",id:"mail-new-attachment",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"4D.MailAttachment.new()",id:"4dmailattachmentnew",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-1",level:4},{value:".cid<strong>.cid</strong> : Text#### Descripci\xf3n",id:"cidcid--text-descripci\xf3n",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-2",level:4},{value:".disposition<strong>.disposition</strong> : Text#### Descripci\xf3n",id:"dispositiondisposition--text-descripci\xf3n",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-3",level:4},{value:".getContent()",id:"getcontent",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-4",level:4},{value:".name",id:"name",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-5",level:4},{value:".path",id:"path",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-6",level:4},{value:".platformPath",id:"platformpath",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-7",level:4},{value:".type",id:"type",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-8",level:4}],c={toc:m};function s(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)("wrapper",r({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Los objetos adjuntos permiten referenciar archivos en un objeto ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/19/API/EmailObjectClass"}),(0,n.kt)("inlineCode",{parentName:"a"},"Email")),". Los objetos Attachment (adjuntos) son creados utilizando el comando ",(0,n.kt)("a",r({parentName:"p"},{href:"#mail-new-attachment"}),(0,n.kt)("inlineCode",{parentName:"a"},"MAIL New attachment")),"."),(0,n.kt)("h3",r({},{id:"objetos-adjuntos"}),"Objetos adjuntos"),(0,n.kt)("p",null,"Los objetos Attachment ofrecen las siguientes propiedades y funciones de s\xf3lo lectura:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#cid"}),(0,n.kt)("strong",{parentName:"a"},".cid")," : Text"),"\xa0","\xa0","\xa0","\xa0"," el ID del archivo adjunto")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#disposition"}),(0,n.kt)("strong",{parentName:"a"},".disposition")," : Text"),"\xa0","\xa0","\xa0","\xa0","el valor del encabezado ",(0,n.kt)("inlineCode",{parentName:"td"},"Content-Disposition"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#getcontent"}),(0,n.kt)("strong",{parentName:"a"},".getContent()"),": Blob"),"\xa0","\xa0","\xa0","\xa0","devuelve el contenido del objeto adjunto en un BLOB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#name"}),(0,n.kt)("strong",{parentName:"a"},".name")," : Text"),"\xa0","\xa0","\xa0","\xa0","el nombre y la extensi\xf3n del archivo adjunto")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#path"}),(0,n.kt)("strong",{parentName:"a"},".path")," : Text"),"\xa0","\xa0","\xa0","\xa0","la ruta POSIX del archivo adjunto, si existe")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#platformpath"}),(0,n.kt)("strong",{parentName:"a"},".platformPath")," : Text"),"\xa0","\xa0","\xa0","\xa0","The ",(0,n.kt)("inlineCode",{parentName:"td"},".platformPath")," property returns")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#type"}),(0,n.kt)("strong",{parentName:"a"},".type")," : Text"),"\xa0","\xa0","\xa0","\xa0","el ",(0,n.kt)("inlineCode",{parentName:"td"},"content-type")," del archivo adjunto")))),(0,n.kt)("h2",r({},{id:"mail-new-attachment"}),"MAIL New attachment"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"MAIL New attachment"),"( ",(0,n.kt)("em",{parentName:"p"},"path")," : Text { ; ",(0,n.kt)("em",{parentName:"p"},"name")," : Text {; ",(0,n.kt)("em",{parentName:"p"},"cid")," : Text{ ; ",(0,n.kt)("em",{parentName:"p"},"type")," : Text { ; ",(0,n.kt)("em",{parentName:"p"},"disposition")," :Text } } } } ) : 4D.MailAttachment",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"p"},"MAIL New attachment"),"( ",(0,n.kt)("em",{parentName:"p"},"blob")," : Blob { ; ",(0,n.kt)("em",{parentName:"p"},"name")," : Text {; ",(0,n.kt)("em",{parentName:"p"},"cid")," : Text{ ; ",(0,n.kt)("em",{parentName:"p"},"type")," : Text { ; ",(0,n.kt)("em",{parentName:"p"},"disposition")," :Text } } } } ) : 4D.MailAttachment"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"path"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Ruta del archivo adjunto")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"blob"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Blob"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"BLOB que contiene el adjunto")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"name"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nombre + extensi\xf3n utilizados por el cliente de correo para designar el archivo adjunto")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"cid"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'ID del archivo adjunto (s\xf3lo en mensajes HTML), o " " si no se requiere cid')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"type"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Valor del encabezado content-type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"disposition"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Valor del encabezado content-disposition: "inline" o "attachment".')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4D.MailAttachment"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Objeto adjunto")))),(0,n.kt)("h4",r({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,n.kt)("p",null,"El comando ",(0,n.kt)("inlineCode",{parentName:"p"},"MAIL New attachment")," le permite crear un objeto adjunto que puede a\xf1adir a un ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/19/API/EmailObjectClass#email-object"}),"objeto correo electr\xf3nico"),"."),(0,n.kt)("p",null,"Puede pasar una ruta o un Blob para definir el archivo adjunto."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Si utiliza un ",(0,n.kt)("em",{parentName:"p"},"ruta"),", pase un valor ",(0,n.kt)("strong",{parentName:"p"},"texto")," que contenga la ruta del archivo adjunto, expresada con la sintaxis del sistema. Puede pasar un nombre de ruta completo o un simple nombre de archivo (en cuyo caso 4D buscar\xe1 el archivo en el mismo directorio que el archivo del proyecto).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Si utiliza un ",(0,n.kt)("em",{parentName:"p"},"blob"),", pase un valor ",(0,n.kt)("strong",{parentName:"p"},"BLOB")," que contenga el propio archivo adjunto."))),(0,n.kt)("p",null,"El par\xe1metro opcional ",(0,n.kt)("em",{parentName:"p"},"name")," permite pasar el nombre y la extensi\xf3n que utilizar\xe1 el cliente de correo para designar el archivo adjunto. Si se omite ",(0,n.kt)("em",{parentName:"p"},"name")," y:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"pas\xf3 una ruta de archivo, se utiliza el nombre y la extensi\xf3n del archivo,"),(0,n.kt)("li",{parentName:"ul"},"pas\xf3 un BLOB, se genera autom\xe1ticamente un nombre aleatorio sin extensi\xf3n.")),(0,n.kt)("p",null,"El par\xe1metro opcional ",(0,n.kt)("em",{parentName:"p"},"cid")," permite pasar un ID interno para el archivo adjunto. Este ID es el valor del encabezado ",(0,n.kt)("inlineCode",{parentName:"p"},"Content-Id"),", se utilizar\xe1 s\xf3lo en mensajes HTML. El cid asocia el archivo adjunto a una referencia definida en el cuerpo del mensaje mediante una etiqueta HTML como ",(0,n.kt)("inlineCode",{parentName:"p"},'\\N&#060;img src="cid:ID"&#062;'),". Esto significa que el contenido del archivo adjunto (por ejemplo, una imagen) debe mostrarse dentro del mensaje en el cliente de correo. El resultado final puede variar en funci\xf3n del cliente de correo. Puede pasar una cadena vac\xeda en ",(0,n.kt)("em",{parentName:"p"},"cid")," si no quiere utilizar este par\xe1metro."),(0,n.kt)("p",null,"Puede utilizar el par\xe1metro opcional ",(0,n.kt)("em",{parentName:"p"},"type")," para definir expl\xedcitamente el ",(0,n.kt)("inlineCode",{parentName:"p"},"content-type"),' del archivo adjunto. Por ejemplo, puede pasar una cadena que defina un tipo MIME ("video/mpeg"). Este valor de content-type se definir\xe1 para el archivo adjunto, independientemente de su extensi\xf3n. Para m\xe1s informaci\xf3n sobre los tipos MIME, consulte la p\xe1gina ',(0,n.kt)("a",r({parentName:"p"},{href:"https://en.wikipedia.org/wiki/MIME"}),"Tipo MIME en Wikipedia"),"."),(0,n.kt)("p",null,"Por defecto, si el par\xe1metro ",(0,n.kt)("em",{parentName:"p"},"type")," se omite o contiene una cadena vac\xeda, el ",(0,n.kt)("inlineCode",{parentName:"p"},"content-type")," del archivo adjunto se basa en su extensi\xf3n. Se aplican las siguientes reglas para los principales tipos MIME:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Extensi\xf3n"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Content Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"jpg, jpeg"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"image/jpeg")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"png"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"image/png")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"gif"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"image/gif")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"pdf"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"application/pdf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"doc"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"application/msword")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"xls"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"application/vnd.ms-excel")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"ppt"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"application/vnd.ms-powerpoint")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"zip"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"application/zip")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"gz"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"application/gzip")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"json"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"application/json")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"js"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"application/javascript")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"ps"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"application/postscript")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"xml"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"application/xml")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"htm, html"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"text/html")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"mp3"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"audio/mpeg")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"otro")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"application/octet-stream")))),(0,n.kt)("p",null,"El par\xe1metro opcional ",(0,n.kt)("em",{parentName:"p"},"disposition")," permite pasar el encabezado ",(0,n.kt)("inlineCode",{parentName:"p"},"content-disposition"),' del adjunto. Puede pasar una de las siguientes constantes del tema constante "Mail":'),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Constante"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Valor"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Comentario"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"mail disposition attachment"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"attachment"'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Define el valor del encabezado Content-disposition como "attachment", lo que significa que el archivo adjunto debe proporcionarse como un enlace en el mensaje.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"mail disposition inline"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"inline"'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Define el valor del encabezado Content-disposition como "inline", lo que significa que el archivo adjunto debe aparecer dentro del contenido del mensaje, en la ubicaci\xf3n "cid". La renderizaci\xf3n depende del cliente de correo.')))),(0,n.kt)("p",null,"Por defecto, si se omite el par\xe1metro ",(0,n.kt)("em",{parentName:"p"},"disposition"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"si el par\xe1metro ",(0,n.kt)("em",{parentName:"li"},"cid")," se utiliza, el encabezado ",(0,n.kt)("inlineCode",{parentName:"li"},"Content-disposition"),' es definido como "inline",'),(0,n.kt)("li",{parentName:"ul"},"si el par\xe1metro ",(0,n.kt)("em",{parentName:"li"},"cid")," no se pasa o est\xe1 vac\xedo, el encabezado ",(0,n.kt)("inlineCode",{parentName:"li"},"Content-disposition"),' es definido como "attachment".')),(0,n.kt)("h4",r({},{id:"ejemplo-1"}),"Ejemplo 1"),(0,n.kt)("p",null,"Desea enviar un correo electr\xf3nico con un archivo seleccionado por el usuario como adjunto y una imagen integrada en el cuerpo HTML:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'$doc:=Select document("";"*";"Please select a file to attach";0)\nIf (OK=1) //Si se ha seleccionado un documento\n\nC_OBJECT($email;$server;$transporter)\n\n$server:=New object\n$server.host:="smtp.mail.com"\n$server.user:="test_user@mail.com"\n$server.password:="p@ssw@rd"\n$transporter:=SMTP New transporter($server)\n\n$email:=New object\n$email.from:="test_user@mail.com"\n$email.to:="test_user@mail.com"\n$email.subject:="This is a test message with attachments"\n\n//a\xf1adir un enlace para descargar el archivo\n$email.attachments:=New collection(MAIL New attachment(Document))\n//insertar una imagen en l\xednea (utilice un cid)\n$email.attachments[1]:=MAIL New attachment("c:\\\\Pictures\\\\4D.jpg";"";"4D")\n\n$email.htmlBody:="<html>"+\\\n"<body>Hello World!"+\\\n"<img src=\'cid:4D\' >"+\\\n"</body>"+\\\n"</head>"+\\\n"</html>"\n\n$transporter.send($email) //enviar mail\n\nEnd if\n')),(0,n.kt)("h4",r({},{id:"ejemplo-2"}),"Ejemplo 2"),(0,n.kt)("p",null,"Desea enviar un correo electr\xf3nico con un \xe1rea 4D Write Pro como archivo adjunto:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'C_BLOB($blob)\nWP EXPORT VARIABLE(WPArea;$blob;wk docx)\n\nC_OBJECT($email;$server;$transporter)\n\n$server:=New object\n$server.host:="smtp.mail.com"\n$server.user:="user@mail.com"\n$server.password:="p@ssw@rd"\n$transporter:=SMTP New transporter($server)\n\n$email:=New object\n$email.from:="user@mail.com"\n$email.to:="customer@mail.com"\n$email.subject:="New annual report"\n$email.textBody:="Please find enclosed our latest annual report."\n$email.attachments:=New collection(MAIL New attachment($blob;"Annual report.docx"))\n\n$transporter.send($email)\n')),(0,n.kt)("h2",r({},{id:"4dmailattachmentnew"}),"4D.MailAttachment.new()"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"4D.MailAttachment.new"),"( ",(0,n.kt)("em",{parentName:"p"},"path")," : Text { ; ",(0,n.kt)("em",{parentName:"p"},"name")," : Text {; ",(0,n.kt)("em",{parentName:"p"},"cid")," : Text{ ; ",(0,n.kt)("em",{parentName:"p"},"type")," : Text { ; ",(0,n.kt)("em",{parentName:"p"},"disposition")," :Text } } } } ) : 4D.MailAttachment",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"p"},"4D.MailAttachment.new"),"( ",(0,n.kt)("em",{parentName:"p"},"blob")," : Blob { ; ",(0,n.kt)("em",{parentName:"p"},"name")," : Text {; ",(0,n.kt)("em",{parentName:"p"},"cid")," : Text{ ; ",(0,n.kt)("em",{parentName:"p"},"type")," : Text { ; ",(0,n.kt)("em",{parentName:"p"},"disposition")," :Text } } } } ) : 4D.MailAttachment"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"path"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Ruta del archivo adjunto")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"blob"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Blob"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"BLOB que contiene el adjunto")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"name"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nombre + extensi\xf3n utilizados por el cliente de correo para designar el archivo adjunto")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"cid"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'ID del archivo adjunto (s\xf3lo en mensajes HTML), o " " si no se requiere cid')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"type"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Valor del encabezado content-type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"disposition"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Valor del encabezado content-disposition: "inline" o "attachment".')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4D.MailAttachment"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Objeto adjunto")))),(0,n.kt)("h4",r({},{id:"descripci\xf3n-1"}),"Descripci\xf3n"),(0,n.kt)("p",null,"La funci\xf3n ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.MailAttachment.new()")," crea y devuelve un nuevo objeto del tipo ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.MailAttachment"),". La propiedad ",(0,n.kt)("inlineCode",{parentName:"p"},".type")," contiene el ",(0,n.kt)("inlineCode",{parentName:"p"},"content-type")," del archivo adjunto."),(0,n.kt)("h2",r({},{id:"cidcid--text-descripci\xf3n"}),".cid",(0,n.kt)("strong",{parentName:"h2"},".cid")," : Text#### Descripci\xf3n"),(0,n.kt)("p",null,"."),(0,n.kt)("h4",r({},{id:"descripci\xf3n-2"}),"Descripci\xf3n"),(0,n.kt)("p",null,"La propiedad ",(0,n.kt)("inlineCode",{parentName:"p"},".cid")," contiene  el ID del archivo adjunto. Esta propiedad se utiliza s\xf3lo en los mensajes HTML. Si falta esta propiedad, el archivo se maneja como un simple adjunto (enlace)."),(0,n.kt)("h2",r({},{id:"dispositiondisposition--text-descripci\xf3n"}),".disposition",(0,n.kt)("strong",{parentName:"h2"},".disposition")," : Text#### Descripci\xf3n"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".disposition")," : Text"),(0,n.kt)("h4",r({},{id:"descripci\xf3n-3"}),"Descripci\xf3n"),(0,n.kt)("p",null,"La propiedad ",(0,n.kt)("inlineCode",{parentName:"p"},".disposition")," contiene el valor del encabezado ",(0,n.kt)("inlineCode",{parentName:"p"},"Content-Disposition"),". Hay dos valores disponibles:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'"inline": el archivo adjunto se muestra dentro del contenido del mensaje, en la ubicaci\xf3n "cid". La renderizaci\xf3n depende del cliente de correo.'),(0,n.kt)("li",{parentName:"ul"},'"attachment": el archivo adjunto se presenta como un enlace en el mensaje.')),(0,n.kt)("h2",r({},{id:"getcontent"}),".getContent()"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".getContent()"),": Blob"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Blob"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Contenido del anexo")))),(0,n.kt)("h4",r({},{id:"descripci\xf3n-4"}),"Descripci\xf3n"),(0,n.kt)("p",null,"La funci\xf3n ",(0,n.kt)("inlineCode",{parentName:"p"},".getContent()")," devuelve el contenido del objeto adjunto en un BLOB. Puede utilizar esta funci\xf3n con los objetos adjuntos recibidos por el comando ",(0,n.kt)("a",r({parentName:"p"},{href:"#mail-convert-from-mime"}),(0,n.kt)("inlineCode",{parentName:"a"},"MAIL Convert from MIME")),"."),(0,n.kt)("h2",r({},{id:"name"}),".name"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".name")," : Text"),(0,n.kt)("h4",r({},{id:"descripci\xf3n-5"}),"Descripci\xf3n"),(0,n.kt)("p",null,"La propiedad ",(0,n.kt)("inlineCode",{parentName:"p"},".name")," contiene el nombre y la extensi\xf3n del archivo adjunto.  Por defecto, es el nombre del archivo, a menos que se haya indicado otro nombre en el comando ",(0,n.kt)("a",r({parentName:"p"},{href:"#mail-new-attachment"}),(0,n.kt)("inlineCode",{parentName:"a"},"MAIL New attachment")),"."),(0,n.kt)("h2",r({},{id:"path"}),".path"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".path")," : Text"),(0,n.kt)("h4",r({},{id:"descripci\xf3n-6"}),"Descripci\xf3n"),(0,n.kt)("p",null,"La propiedad ",(0,n.kt)("inlineCode",{parentName:"p"},".path")," contiene la ruta POSIX del archivo adjunto, si existe."),(0,n.kt)("h2",r({},{id:"platformpath"}),".platformPath"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Lanzamiento"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"19"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".platformPath")," : Text"),(0,n.kt)("h4",r({},{id:"descripci\xf3n-7"}),"Descripci\xf3n"),(0,n.kt)("p",null,"La propiedad ",(0,n.kt)("inlineCode",{parentName:"p"},".platformPath")," devuelve The ",(0,n.kt)("inlineCode",{parentName:"p"},".platformPath")," property returns."),(0,n.kt)("h2",r({},{id:"type"}),".type"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".type")," : Text"),(0,n.kt)("h4",r({},{id:"descripci\xf3n-8"}),"Descripci\xf3n"),(0,n.kt)("p",null,"La propiedad ",(0,n.kt)("inlineCode",{parentName:"p"},".type")," contiene el ",(0,n.kt)("inlineCode",{parentName:"p"},"content-type")," del archivo adjunto. Si este tipo no se pasa expl\xedcitamente al comando ",(0,n.kt)("a",r({parentName:"p"},{href:"#mail-new-attachment"}),(0,n.kt)("inlineCode",{parentName:"a"},"MAIL New attachment")),", el ",(0,n.kt)("inlineCode",{parentName:"p"},"content-type")," se basa en su extensi\xf3n de archivo."))}s.isMDXComponent=!0}}]);