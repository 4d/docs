"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[82519],{603905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),o=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=o(n),c=r,k=u["".concat(m,".").concat(c)]||u[c]||d[c]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},870734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>m,toc:()=>s});n(667294);var a=n(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={id:"MailAttachmentClass",title:"MailAttachment"},p=void 0,m={unversionedId:"API/MailAttachmentClass",id:"version-20-R2/API/MailAttachmentClass",title:"MailAttachment",description:"Les objets pi\xe8ces jointes permettent de r\xe9f\xe9rencer des fichiers dans un objet Email. Les objets Attachment (pi\xe8ce jointe) sont cr\xe9\xe9s \xe0 l'aide de la commande MAIL New attachment.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R2/API/MailAttachmentClass.md",sourceDirName:"API",slug:"/API/MailAttachmentClass",permalink:"/docs/fr/20-R2/API/MailAttachmentClass",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FMailAttachmentClass.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"MailAttachmentClass",title:"MailAttachment"},sidebar:"docs",previous:{title:"IMAPTransporter",permalink:"/docs/fr/20-R2/API/IMAPTransporterClass"},next:{title:"POP3Transporter",permalink:"/docs/fr/20-R2/API/POP3TransporterClass"}},o={},s=[{value:"Objet Attachment",id:"objet-attachment",level:3},{value:"MAIL New attachment",id:"mail-new-attachment",level:2},{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"4D.MailAttachment.new()",id:"4dmailattachmentnew",level:2},{value:"Description",id:"description-1",level:4},{value:".cid",id:"cid",level:2},{value:"Description",id:"description-2",level:4},{value:".disposition",id:"disposition",level:2},{value:"Description",id:"description-3",level:4},{value:".getContent()",id:"getcontent",level:2},{value:"Description",id:"description-4",level:4},{value:".name",id:"name",level:2},{value:"Description",id:"description-5",level:4},{value:".path",id:"path",level:2},{value:"Description",id:"description-6",level:4},{value:".platformPath",id:"platformpath",level:2},{value:"Description",id:"description-7",level:4},{value:".type",id:"type",level:2},{value:"Description",id:"description-8",level:4}],d={toc:s};function u(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",r({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Les objets pi\xe8ces jointes permettent de r\xe9f\xe9rencer des fichiers dans un objet ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/20-R2/API/EmailObjectClass"}),(0,a.kt)("inlineCode",{parentName:"a"},"Email")),". Les objets Attachment (pi\xe8ce jointe) sont cr\xe9\xe9s \xe0 l'aide de la commande ",(0,a.kt)("a",r({parentName:"p"},{href:"#mail-new-attachment"}),(0,a.kt)("inlineCode",{parentName:"a"},"MAIL New attachment")),"."),(0,a.kt)("h3",r({},{id:"objet-attachment"}),"Objet Attachment"),(0,a.kt)("p",null,"Les objets Attachment fournissent les propri\xe9t\xe9s et fonctions suivantes en lecture seule :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#cid"}),(0,a.kt)("strong",{parentName:"a"},".cid")," : Text"),"\xa0","\xa0","\xa0","\xa0"," ID de la pi\xe8ce jointe")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#disposition"}),(0,a.kt)("strong",{parentName:"a"},".disposition")," : Text"),"\xa0","\xa0","\xa0","\xa0","la valeur de l'en-t\xeate ",(0,a.kt)("inlineCode",{parentName:"td"},"Content-Disposition"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#getcontent"}),(0,a.kt)("strong",{parentName:"a"},".getContent()")," : 4D.Blob"),"\xa0","\xa0","\xa0","\xa0","renvoie le contenu de l'objet pi\xe8ce jointe dans un objet ",(0,a.kt)("inlineCode",{parentName:"td"},"4D.Blob"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#name"}),(0,a.kt)("strong",{parentName:"a"},".name")," : Text"),"\xa0","\xa0","\xa0","\xa0","le nom et l'extension de la pi\xe8ce jointe")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#path"}),(0,a.kt)("strong",{parentName:"a"},".path")," : Text"),"\xa0","\xa0","\xa0","\xa0","le chemin POSIX du fichier joint, s'il existe")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#platformpath"}),(0,a.kt)("strong",{parentName:"a"},".platformPath")," : Text"),"\xa0","\xa0","\xa0","\xa0","le chemin du fichier joint exprim\xe9 avec la syntaxe de la plate-forme courante")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#type"}),(0,a.kt)("strong",{parentName:"a"},".type")," : Texte"),"\xa0","\xa0","\xa0","\xa0","le ",(0,a.kt)("inlineCode",{parentName:"td"},"content-type")," du fichier joint")))),(0,a.kt)("h2",r({},{id:"mail-new-attachment"}),"MAIL New attachment"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Historique"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Modifications"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v19 R2"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Accepte 4D.File, 4D.ZipFile, 4D.Blob"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"MAIL New attachment"),"( ",(0,a.kt)("em",{parentName:"p"},"file")," : 4D.File { ; ",(0,a.kt)("em",{parentName:"p"},"name")," : Text {; ",(0,a.kt)("em",{parentName:"p"},"cid")," : Text{ ; ",(0,a.kt)("em",{parentName:"p"},"type")," : Text { ; ",(0,a.kt)("em",{parentName:"p"},"disposition")," :Text } } } } ) : 4D.MailAttachment",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"p"},"MAIL New attachment"),"( ",(0,a.kt)("em",{parentName:"p"},"zipFile")," : 4D.ZipFile { ; ",(0,a.kt)("em",{parentName:"p"},"name")," : Text {; ",(0,a.kt)("em",{parentName:"p"},"cid")," : Text{ ; ",(0,a.kt)("em",{parentName:"p"},"type")," : Text { ; ",(0,a.kt)("em",{parentName:"p"},"disposition")," :Text } } } } ) : 4D.MailAttachment",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"p"},"MAIL New attachment"),"( ",(0,a.kt)("em",{parentName:"p"},"blob")," : 4D.Blob { ; ",(0,a.kt)("em",{parentName:"p"},"name")," : Text {; ",(0,a.kt)("em",{parentName:"p"},"cid")," : Text{ ; ",(0,a.kt)("em",{parentName:"p"},"type")," : Text { ; ",(0,a.kt)("em",{parentName:"p"},"disposition")," :Text } } } } ) : 4D.MailAttachment",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"p"},"MAIL New attachment"),"( ",(0,a.kt)("em",{parentName:"p"},"path")," : Text { ; ",(0,a.kt)("em",{parentName:"p"},"name")," : Text {; ",(0,a.kt)("em",{parentName:"p"},"cid")," : Text{ ; ",(0,a.kt)("em",{parentName:"p"},"type")," : Text { ; ",(0,a.kt)("em",{parentName:"p"},"disposition")," :Text } } } } ) : 4D.MailAttachment"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Param\xe8tres"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"file"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"4D.File"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Fichier joint")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"zipFile"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"4D.ZipFile"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Fichier Zip joint")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"blob"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"4D.Blob"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Blob contenant la pi\xe8ce jointe")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"path"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Chemin de la pi\xe8ce jointe")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"name"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nom + extension utilis\xe9s par le client de messagerie pour d\xe9signer la pi\xe8ce jointe")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"cid"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'ID de la pi\xe8ce jointe (messages HTML uniquement) ou " " si aucun cid n\'est requis')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"type"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Valeur de l'en-t\xeate content-type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"disposition"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'Valeur de l\'en-t\xeate content-disposition : "inline" ou "attachment"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"R\xe9sultat"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"4D.MailAttachment"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objet pi\xe8ce jointe")))),(0,a.kt)("p",null,"|"),(0,a.kt)("h4",r({},{id:"description"}),"Description"),(0,a.kt)("p",null,"La commande ",(0,a.kt)("inlineCode",{parentName:"p"},"MAIL New attachment")," vous permet de cr\xe9er un objet de type pi\xe8ce jointe (attachment) que vous pouvez ajouter \xe0 un ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/20-R2/API/EmailObjectClass#objet-email"}),"objet Email"),"."),(0,a.kt)("p",null,"Pour d\xe9finir l'objet attachment, vous pouvez utiliser :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"un ",(0,a.kt)("em",{parentName:"li"},"file"),", en passant un objet ",(0,a.kt)("inlineCode",{parentName:"li"},"4D.File")," contenant le fichier joint."),(0,a.kt)("li",{parentName:"ul"},"un ",(0,a.kt)("em",{parentName:"li"},"zipfile"),", en passant un objet ",(0,a.kt)("inlineCode",{parentName:"li"},"4D.ZipFile")," contenant le fichier joint."),(0,a.kt)("li",{parentName:"ul"},"un ",(0,a.kt)("em",{parentName:"li"},"blob"),", en passant un objet ",(0,a.kt)("inlineCode",{parentName:"li"},"4D.Blob")," contenant la pi\xe8ce jointe elle-m\xeame."),(0,a.kt)("li",{parentName:"ul"},"un ",(0,a.kt)("em",{parentName:"li"},"path"),", en passant une valeur de type ",(0,a.kt)("strong",{parentName:"li"},"text")," contenant le chemin d'acc\xe8s du fichier joint, exprim\xe9 avec la syntaxe du syst\xe8me. Vous pouvez passer un nom de chemin complet ou un simple nom de fichier (auquel cas 4D recherchera le fichier dans le m\xeame r\xe9pertoire que le fichier du projet).")),(0,a.kt)("p",null,"Le param\xe8tre facultatif ",(0,a.kt)("em",{parentName:"p"},"name")," vous permet de passer le nom et l'extension \xe0 utiliser par le client de messagerie pour d\xe9signer la pi\xe8ce jointe. Si le param\xe8tre ",(0,a.kt)("em",{parentName:"p"},"name")," est omis et que :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"vous avez pass\xe9 un chemin d'acc\xe8s au fichier, le nom et l'extension du fichier sont utilis\xe9s,"),(0,a.kt)("li",{parentName:"ul"},"vous avez pass\xe9 un BLOB, un nom al\xe9atoire sans extension est automatiquement g\xe9n\xe9r\xe9.")),(0,a.kt)("p",null,"Le param\xe8tre facultatif ",(0,a.kt)("em",{parentName:"p"},"cid")," vous permet de passer un ID interne pour la pi\xe8ce jointe. Cet ID est la valeur de l'en-t\xeate ",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Id")," et sera utilis\xe9 dans les messages HTML uniquement. Le cid associe la pi\xe8ce jointe \xe0 une r\xe9f\xe9rence d\xe9finie dans le corps du message \xe0 l'aide d'une balise HTML telle que ",(0,a.kt)("inlineCode",{parentName:"p"},'\\&#060;img src="cid:ID"&#062;'),". Cela signifie que le contenu de la pi\xe8ce jointe (par exemple, une image) doit \xeatre affich\xe9 dans le message sur le client de messagerie. Le r\xe9sultat final peut varier en fonction du client de messagerie. Vous pouvez passer une cha\xeene vide dans ",(0,a.kt)("em",{parentName:"p"},"cid")," si vous ne souhaitez pas utiliser ce param\xe8tre."),(0,a.kt)("p",null,"Vous pouvez utiliser le param\xe8tre optionnel ",(0,a.kt)("em",{parentName:"p"},"type")," pour d\xe9finir explicitement le ",(0,a.kt)("inlineCode",{parentName:"p"},"content-type"),' du fichier joint. Par exemple, vous pouvez passer une cha\xeene d\xe9finissant un type MIME ("video/mpeg"). Cette valeur de content-type sera d\xe9finie pour la pi\xe8ce jointe, quelle que soit son extension. Pour plus d\'informations sur les types MIME, veuillez vous r\xe9f\xe9rer \xe0 ',(0,a.kt)("a",r({parentName:"p"},{href:"https://en.wikipedia.org/wiki/MIME"}),"la page type MIME sur Wikipedia"),"."),(0,a.kt)("p",null,"Par d\xe9faut, si le param\xe8tre ",(0,a.kt)("em",{parentName:"p"},"type")," est omis ou contient une cha\xeene vide, le ",(0,a.kt)("inlineCode",{parentName:"p"},"content-type")," du fichier joint est bas\xe9 sur son extension. Les r\xe8gles suivantes sont appliqu\xe9es pour les principaux types MIME :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Extension"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Content Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"jpg, jpeg"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"image/jpeg")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"png"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"image/png")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"gif"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"image/gif")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"pdf"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"application/pdf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"doc"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"application/msword")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"xls"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"application/vnd.ms-excel")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"ppt"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"application/vnd.ms-powerpoint")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"zip"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"application/zip")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"gz"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"application/gzip")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"json"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"application/json")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"js"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"application/javascript")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"ps"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"application/postscript")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"xml"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"application/xml")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"htm, html"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"text/html")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"mp3"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"audio/mpeg")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("em",{parentName:"td"},"other")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"application/octet-stream")))),(0,a.kt)("p",null,"Le param\xe8tre facultatif ",(0,a.kt)("em",{parentName:"p"},"disposition")," vous permet de passer l'en-t\xeate ",(0,a.kt)("inlineCode",{parentName:"p"},"content-disposition"),' de la pi\xe8ce jointe. Vous pouvez passer l\'une des constantes suivantes du th\xe8me de constantes "Mail" :'),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Constante"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Valeur"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Commentaire"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"mail disposition attachment"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'"attachment"'),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'D\xe9finissez la valeur de l\'en-t\xeate Content-disposition sur "attachment", ce qui signifie que le fichier joint doit \xeatre fourni sous forme de lien dans le message.')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"mail disposition inline"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'"inline"'),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'D\xe9finissez la valeur de l\'en-t\xeate Content-disposition sur "inline", ce qui signifie que la pi\xe8ce jointe doit \xeatre rendue dans le contenu du message, \xe0 l\'emplacement du "cid". Le rendu d\xe9pend du client de messagerie.')))),(0,a.kt)("p",null,"Par d\xe9faut, si le param\xe8tre ",(0,a.kt)("em",{parentName:"p"},"disposition")," est omis :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"si le param\xe8tre ",(0,a.kt)("em",{parentName:"li"},"cid")," est utilis\xe9, l'en-t\xeate ",(0,a.kt)("inlineCode",{parentName:"li"},"Content-disposition"),' est d\xe9fini sur "inline",'),(0,a.kt)("li",{parentName:"ul"},"si le param\xe8tre ",(0,a.kt)("em",{parentName:"li"},"cid")," n'est pas pass\xe9 ou est vide, l'en-t\xeate ",(0,a.kt)("inlineCode",{parentName:"li"},"Content-disposition"),' est fix\xe9 \xe0 "attachment".')),(0,a.kt)("h4",r({},{id:"exemple-1"}),"Exemple 1"),(0,a.kt)("p",null,"Vous souhaitez envoyer un e-mail avec un fichier s\xe9lectionn\xe9 par l'utilisateur comme pi\xe8ce jointe et une image int\xe9gr\xe9e dans le corps HTML :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'$doc:=Select document("";"*";"Please select a file to attach";0)\nIf (OK=1) //If a document was selected\n\nC_OBJECT($email;$server;$transporter)\n\n$server:=New object\n$server.host:="smtp.mail.com"\n$server.user:="test_user@mail.com"\n$server.password:="p@ssw@rd"\n$transporter:=SMTP New transporter($server)\n\n$email:=New object\n$email.from:="test_user@mail.com"\n$email.to:="test_user@mail.com"\n$email.subject:="This is a test message with attachments"\n\n//add a link to download file\n$email.attachments:=New collection(MAIL New attachment(Document))\n//insert an inline picture (use a cid)\n$email.attachments[1]:=MAIL New attachment("c:\\\\Pictures\\\\4D.jpg";"";"4D")\n\n$email.htmlBody:="<html>"+\\\n"<body>Hello World!"+\\\n"<img src=\'cid:4D\' >"+\\\n"</body>"+\\\n"</head>"+\\\n"</html>"\n\n$transporter.send($email) //envoyer e-mail\n\nEnd if\n')),(0,a.kt)("h4",r({},{id:"exemple-2"}),"Exemple 2"),(0,a.kt)("p",null,"Vous voulez envoyer un e-mail avec une zone 4D Write Pro en pi\xe8ce jointe :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'C_BLOB($blob)\nWP EXPORT VARIABLE(WPArea;$blob;wk docx)\n\nC_OBJECT($email;$server;$transporter)\n\n$server:=New object\n$server.host:="smtp.mail.com"\n$server.user:="user@mail.com"\n$server.password:="p@ssw@rd"\n$transporter:=SMTP New transporter($server)\n\n$email:=New object\n$email.from:="user@mail.com"\n$email.to:="customer@mail.com"\n$email.subject:="New annual report"\n$email.textBody:="Please find enclosed our latest annual report."\n$email.attachments:=New collection(MAIL New attachment($blob;"Annual report.docx"))\n\n$transporter.send($email)\n')),(0,a.kt)("h2",r({},{id:"4dmailattachmentnew"}),"4D.MailAttachment.new()"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Historique"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Modifications"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v19 R2"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Accepte 4D.File, 4D.ZipFile, 4D.Blob"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4D.MailAttachment.new"),"( ",(0,a.kt)("em",{parentName:"p"},"file")," : 4D.File { ; ",(0,a.kt)("em",{parentName:"p"},"name")," : Text {; ",(0,a.kt)("em",{parentName:"p"},"cid")," : Text{ ; ",(0,a.kt)("em",{parentName:"p"},"type")," : Text { ; ",(0,a.kt)("em",{parentName:"p"},"disposition")," :Text } } } } ) : 4D.MailAttachment",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"p"},"4D.MailAttachment.new"),"( ",(0,a.kt)("em",{parentName:"p"},"zipFile")," : 4D.ZipFile { ; ",(0,a.kt)("em",{parentName:"p"},"name")," : Text {; ",(0,a.kt)("em",{parentName:"p"},"cid")," : Text{ ; ",(0,a.kt)("em",{parentName:"p"},"type")," : Text { ; ",(0,a.kt)("em",{parentName:"p"},"disposition")," :Text } } } } ) : 4D.MailAttachment",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"p"},"4D.MailAttachment.new"),"( ",(0,a.kt)("em",{parentName:"p"},"blob")," : 4D.Blob { ; ",(0,a.kt)("em",{parentName:"p"},"name")," : Text {; ",(0,a.kt)("em",{parentName:"p"},"cid")," : Text{ ; ",(0,a.kt)("em",{parentName:"p"},"type")," : Text { ; ",(0,a.kt)("em",{parentName:"p"},"disposition")," :Text } } } } ) : 4D.MailAttachment",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"p"},"4D.MailAttachment.new"),"( ",(0,a.kt)("em",{parentName:"p"},"path")," : Text { ; ",(0,a.kt)("em",{parentName:"p"},"name")," : Text {; ",(0,a.kt)("em",{parentName:"p"},"cid")," : Text{ ; ",(0,a.kt)("em",{parentName:"p"},"type")," : Text { ; ",(0,a.kt)("em",{parentName:"p"},"disposition")," :Text } } } } ) : 4D.MailAttachment"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Param\xe8tres"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"file"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"4D.File"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Fichier joint")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"zipFile"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"4D.ZipFile"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Fichier Zip joint")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"blob"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"4D.Blob"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Blob contenant la pi\xe8ce jointe")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"path"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Chemin de la pi\xe8ce jointe")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"name"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nom + extension utilis\xe9s par le client de messagerie pour d\xe9signer la pi\xe8ce jointe")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"cid"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'ID de la pi\xe8ce jointe (messages HTML uniquement) ou " " si aucun cid n\'est requis')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"type"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Valeur de l'en-t\xeate content-type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"disposition"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'Valeur de l\'en-t\xeate content-disposition : "inline" ou "attachment"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"R\xe9sultat"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"4D.MailAttachment"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Objet pi\xe8ce jointe")))),(0,a.kt)("p",null,"|"),(0,a.kt)("h4",r({},{id:"description-1"}),"Description"),(0,a.kt)("p",null,"La fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.MailAttachment.new()")," cr\xe9e et renvoie un nouvel objet du type ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.MailAttachment"),". Elle est identique \xe0 la commande (raccourci) ",(0,a.kt)("a",r({parentName:"p"},{href:"#mail-new-attachment"}),(0,a.kt)("inlineCode",{parentName:"a"},"MAIL New attachment")),"."),(0,a.kt)("h2",r({},{id:"cid"}),".cid"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".cid")," : Text"),(0,a.kt)("h4",r({},{id:"description-2"}),"Description"),(0,a.kt)("p",null,"La propri\xe9t\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},".id")," contient l'  ID de la pi\xe8ce jointe. Cette propri\xe9t\xe9 est utilis\xe9e uniquement dans les messages HTML. Si cette propri\xe9t\xe9 est manquante, le fichier est g\xe9r\xe9 comme une simple pi\xe8ce jointe (lien)."),(0,a.kt)("h2",r({},{id:"disposition"}),".disposition"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".disposition")," : Text"),(0,a.kt)("h4",r({},{id:"description-3"}),"Description"),(0,a.kt)("p",null,"La propri\xe9t\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},".disposition")," contient la valeur de l'en-t\xeate ",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Disposition"),". ."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'"inline" : la pi\xe8ce jointe est rendue dans le contenu du message, \xe0 l\'emplacement "cid". Le rendu d\xe9pend du client de messagerie.'),(0,a.kt)("li",{parentName:"ul"},'"attachment" : la pi\xe8ce jointe est fournie sous forme de lien dans le message.')),(0,a.kt)("h2",r({},{id:"getcontent"}),".getContent()"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".getContent()")," : 4D.Blob"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Param\xe8tres"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"R\xe9sultat"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"4D.Blob"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Contenu de la pi\xe8ce jointe")))),(0,a.kt)("p",null,"|"),(0,a.kt)("h4",r({},{id:"description-4"}),"Description"),(0,a.kt)("p",null,"La fonction ",(0,a.kt)("inlineCode",{parentName:"p"},".getContent()")," renvoie le contenu de l'objet pi\xe8ce jointe dans un objet ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.Blob"),". Vous pouvez utiliser cette m\xe9thode avec les pi\xe8ces jointes re\xe7ues par la commande ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/20-R2/API/EmailObjectClass#mail-convert-from-mime"}),(0,a.kt)("inlineCode",{parentName:"a"},"MAIL Convert from MIME")),"."),(0,a.kt)("h2",r({},{id:"name"}),".name"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".name")," : Text"),(0,a.kt)("h4",r({},{id:"description-5"}),"Description"),(0,a.kt)("p",null,"La propri\xe9t\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},".name")," contient le nom et l'extension de la pi\xe8ce jointe.  Par d\xe9faut, c'est le nom du fichier, sauf si un autre nom a \xe9t\xe9 indiqu\xe9 dans la commande ",(0,a.kt)("a",r({parentName:"p"},{href:"#mail-new-attachment"}),(0,a.kt)("inlineCode",{parentName:"a"},"MAIL New attachment")),"."),(0,a.kt)("h2",r({},{id:"path"}),".path"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".path")," : Text"),(0,a.kt)("h4",r({},{id:"description-6"}),"Description"),(0,a.kt)("p",null,"La propri\xe9t\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},".path")," contient le chemin POSIX du fichier joint, s'il existe."),(0,a.kt)("h2",r({},{id:"platformpath"}),".platformPath"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Historique"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Modifications"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v19"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Ajout"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".platformPath")," : Text"),(0,a.kt)("h4",r({},{id:"description-7"}),"Description"),(0,a.kt)("p",null,"La propri\xe9t\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},".platformPath")," retourne le chemin du fichier joint exprim\xe9 avec la syntaxe de la plate-forme courante."),(0,a.kt)("h2",r({},{id:"type"}),".type"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".type")," : Texte"),(0,a.kt)("h4",r({},{id:"description-8"}),"Description"),(0,a.kt)("p",null,"La propri\xe9t\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},".type")," contient le ",(0,a.kt)("inlineCode",{parentName:"p"},"content-type")," du fichier joint. Si ce type n'est pas explicitement pass\xe9 \xe0 la commande ",(0,a.kt)("a",r({parentName:"p"},{href:"#mail-new-attachment"}),(0,a.kt)("inlineCode",{parentName:"a"},"MAIL New attachment")),", le ",(0,a.kt)("inlineCode",{parentName:"p"},"content-type")," est fond\xe9 sur son extension de fichier."))}u.isMDXComponent=!0}}]);