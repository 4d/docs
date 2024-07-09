/*! For license information please see 60f3942a.2dc79d8c.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25832],{448134:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var t=i(474848),s=i(28453);const r={id:"MailAttachmentClass",title:"MailAttachment"},d=void 0,l={id:"API/MailAttachmentClass",title:"MailAttachment",description:"Los objetos adjuntos permiten referenciar archivos en un objeto Email. Los objetos Attachment (adjuntos) son creados utilizando el comando MAIL New attachment.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R4/API/MailAttachmentClass.md",sourceDirName:"API",slug:"/API/MailAttachmentClass",permalink:"/docs/es/20-R4/API/MailAttachmentClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FMailAttachmentClass.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"MailAttachmentClass",title:"MailAttachment"},sidebar:"docs",previous:{title:"IMAPTransporter",permalink:"/docs/es/20-R4/API/IMAPTransporterClass"},next:{title:"POP3Transporter",permalink:"/docs/es/20-R4/API/POP3TransporterClass"}},c={},a=[{value:"Objetos adjuntos",id:"Objetos-adjuntos",level:3},{value:"MAIL New attachment",id:"MAIL-New-attachment",level:2},{value:"Descripci\xf3n",id:"Descripci\xf3n",level:4},{value:"Ejemplo 1",id:"Ejemplo-1",level:4},{value:"Ejemplo 2",id:"Ejemplo-2",level:4},{value:"4D.MailAttachment.new()",id:"4DMailAttachmentnew",level:2},{value:"Descripci\xf3n",id:"Descripci\xf3n-1",level:4},{value:".cid**.cid** : Text#### Descripci\xf3n",id:"cidcid--Text-Descripci\xf3n",level:2},{value:"Descripci\xf3n",id:"Descripci\xf3n-2",level:4},{value:".disposition**.disposition** : Text#### Descripci\xf3n",id:"dispositiondisposition--Text-Descripci\xf3n",level:2},{value:"Descripci\xf3n",id:"Descripci\xf3n-3",level:4},{value:".getContent()",id:"getContent",level:2},{value:"Descripci\xf3n",id:"Descripci\xf3n-4",level:4},{value:".name",id:"name",level:2},{value:"Descripci\xf3n",id:"Descripci\xf3n-5",level:4},{value:".path",id:"path",level:2},{value:"Descripci\xf3n",id:"Descripci\xf3n-6",level:4},{value:".platformPath",id:"platformPath",level:2},{value:"Descripci\xf3n",id:"Descripci\xf3n-7",level:4},{value:".size",id:"size",level:2},{value:"Descripci\xf3n",id:"Descripci\xf3n-8",level:4},{value:".type",id:"type",level:2},{value:"Descripci\xf3n",id:"Descripci\xf3n-9",level:4}];function o(e){const n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Los objetos adjuntos permiten referenciar archivos en un objeto ",(0,t.jsx)(n.a,{href:"/docs/es/20-R4/API/EmailObjectClass",children:(0,t.jsx)(n.code,{children:"Email"})}),". Los objetos Attachment (adjuntos) son creados utilizando el comando ",(0,t.jsx)(n.a,{href:"#mail-new-attachment",children:(0,t.jsx)(n.code,{children:"MAIL New attachment"})}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"Objetos-adjuntos",children:"Objetos adjuntos"}),"\n",(0,t.jsx)(n.p,{children:"Los objetos Attachment ofrecen las siguientes propiedades y funciones de s\xf3lo lectura:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.th,{})})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#cid",children:[(0,t.jsx)(n.strong,{children:".cid"})," : Text"]}),"\xa0\xa0\xa0\xa0 el ID del archivo adjunto"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#disposition",children:[(0,t.jsx)(n.strong,{children:".disposition"})," : Text"]}),"\xa0\xa0\xa0\xa0el valor del encabezado ",(0,t.jsx)(n.code,{children:"Content-Disposition"})]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#getcontent",children:[(0,t.jsx)(n.strong,{children:".getContent()"})," : 4D.Blob"]}),"\xa0\xa0\xa0\xa0devuelve el contenido del objeto adjunto en un objeto ",(0,t.jsx)(n.code,{children:"4D.Blob"})]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#name",children:[(0,t.jsx)(n.strong,{children:".name"})," : Text"]}),"\xa0\xa0\xa0\xa0el nombre y la extensi\xf3n del archivo adjunto"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#path",children:[(0,t.jsx)(n.strong,{children:".path"})," : Text"]}),"\xa0\xa0\xa0\xa0la ruta POSIX del archivo adjunto, si existe"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#platformpath",children:[(0,t.jsx)(n.strong,{children:".platformPath"})," : Text"]}),"\xa0\xa0\xa0\xa0The ",(0,t.jsx)(n.code,{children:".platformPath"})," property returns"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#size",children:[(0,t.jsx)(n.strong,{children:".size"})," : Integer"]}),"\xa0\xa0\xa0\xa0el valor del encabezado ",(0,t.jsx)(n.code,{children:"size"})," del archivo adjunto"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#type",children:[(0,t.jsx)(n.strong,{children:".type"})," : Text"]}),"\xa0\xa0\xa0\xa0el ",(0,t.jsx)(n.code,{children:"content-type"})," del archivo adjunto"]})})]})]}),"\n",(0,t.jsx)(n.h2,{id:"MAIL-New-attachment",children:"MAIL New attachment"}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Lanzamiento"}),(0,t.jsx)(n.th,{children:"Modificaciones"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"19 R2"}),(0,t.jsx)(n.td,{children:"Acepta 4D.File, 4D.ZipFile, 4D.Blob"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"MAIL New attachment"}),"( ",(0,t.jsx)(n.em,{children:"file"})," : 4D.File { ; ",(0,t.jsx)(n.em,{children:"name"})," : Text {; ",(0,t.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,t.jsx)(n.em,{children:"type"})," : Text { ; ",(0,t.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"MAIL New attachment"}),"( ",(0,t.jsx)(n.em,{children:"zipFile"})," : 4D.ZipFile { ; ",(0,t.jsx)(n.em,{children:"name"})," : Text {; ",(0,t.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,t.jsx)(n.em,{children:"type"})," : Text { ; ",(0,t.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"MAIL New attachment"}),"( ",(0,t.jsx)(n.em,{children:"blob"})," : 4D.Blob { ; ",(0,t.jsx)(n.em,{children:"name"})," : Text {; ",(0,t.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,t.jsx)(n.em,{children:"type"})," : Text { ; ",(0,t.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"MAIL New attachment"}),"( ",(0,t.jsx)(n.em,{children:"path"})," : Text { ; ",(0,t.jsx)(n.em,{children:"name"})," : Text {; ",(0,t.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,t.jsx)(n.em,{children:"type"})," : Text { ; ",(0,t.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metros"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{style:{textAlign:"center"}}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"file"}),(0,t.jsx)(n.td,{children:"4D.File"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"Archivo adjunto"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"zIPFile"}),(0,t.jsx)(n.td,{children:"4D.ZipFile"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"Archivo zip adjunto"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"blob"}),(0,t.jsx)(n.td,{children:"4D.Blob"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"BLOB que contiene el adjunto"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"path"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"Ruta del archivo adjunto"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"name"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"Nombre + extensi\xf3n utilizados por el cliente de correo para designar el archivo adjunto"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cid"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:'ID del archivo adjunto (s\xf3lo en mensajes HTML), o " " si no se requiere cid'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"type"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"Valor del encabezado content-type"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"disposition"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:'Valor del encabezado content-disposition: "inline" o "attachment".'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Result"}),(0,t.jsx)(n.td,{children:"4D.MailAttachment"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,t.jsx)(n.td,{children:"Objeto adjunto"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"Descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.code,{children:"MAIL New attachment"})," le permite crear un objeto adjunto que puede a\xf1adir a un ",(0,t.jsx)(n.a,{href:"/docs/es/20-R4/API/EmailObjectClass#email-object",children:"objeto correo electr\xf3nico"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Para definir el adjunto, puede utilizar:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["un ",(0,t.jsx)(n.em,{children:"file"}),", pase un objeto ",(0,t.jsx)(n.code,{children:"4D.File"})," que contenga el propio archivo adjunto."]}),"\n",(0,t.jsxs)(n.li,{children:["un ",(0,t.jsx)(n.em,{children:"zipfile"}),", pase un objeto ",(0,t.jsx)(n.code,{children:"4D.ZipFile"})," que contenga el propio archivo adjunto."]}),"\n",(0,t.jsxs)(n.li,{children:["un ",(0,t.jsx)(n.em,{children:"blob"}),", pase un objeto ",(0,t.jsx)(n.code,{children:"4D.Blob"})," que contenga el propio archivo adjunto."]}),"\n",(0,t.jsxs)(n.li,{children:["un ",(0,t.jsx)(n.em,{children:"path"}),", pase un valor ",(0,t.jsx)(n.strong,{children:"texto"})," que contenga la ruta del archivo adjunto, expresada con la sintaxis del sistema. Puede pasar un nombre de ruta completo o un simple nombre de archivo (en cuyo caso 4D buscar\xe1 el archivo en el mismo directorio que el archivo del proyecto)."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,t.jsx)(n.em,{children:"name"})," permite pasar el nombre y la extensi\xf3n que utilizar\xe1 el cliente de correo para designar el archivo adjunto. Si se omite ",(0,t.jsx)(n.em,{children:"name"})," y:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"pas\xf3 una ruta de archivo, se utiliza el nombre y la extensi\xf3n del archivo,"}),"\n",(0,t.jsx)(n.li,{children:"pas\xf3 un BLOB, se genera autom\xe1ticamente un nombre aleatorio sin extensi\xf3n."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,t.jsx)(n.em,{children:"cid"})," permite pasar un ID interno para el archivo adjunto. Este ID es el valor del encabezado ",(0,t.jsx)(n.code,{children:"Content-Id"}),", se utilizar\xe1 s\xf3lo en mensajes HTML. El cid asocia el archivo adjunto a una referencia definida en el cuerpo del mensaje mediante una etiqueta HTML como ",(0,t.jsx)(n.code,{children:'\\N&#060;img src="cid:ID"&#062;'}),". Esto significa que el contenido del archivo adjunto (por ejemplo, una imagen) debe mostrarse dentro del mensaje en el cliente de correo. El resultado final puede variar en funci\xf3n del cliente de correo. Puede pasar una cadena vac\xeda en ",(0,t.jsx)(n.em,{children:"cid"})," si no quiere utilizar este par\xe1metro."]}),"\n",(0,t.jsxs)(n.p,{children:["Puede utilizar el par\xe1metro opcional ",(0,t.jsx)(n.em,{children:"type"})," para definir expl\xedcitamente el ",(0,t.jsx)(n.code,{children:"content-type"}),' del archivo adjunto. Por ejemplo, puede pasar una cadena que defina un tipo MIME ("video/mpeg"). Este valor de content-type se definir\xe1 para el archivo adjunto, independientemente de su extensi\xf3n. Para m\xe1s informaci\xf3n sobre los tipos MIME, consulte la p\xe1gina ',(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/MIME",children:"Tipo MIME en Wikipedia"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Por defecto, si el par\xe1metro ",(0,t.jsx)(n.em,{children:"type"})," se omite o contiene una cadena vac\xeda, el ",(0,t.jsx)(n.code,{children:"content-type"})," del archivo adjunto se basa en su extensi\xf3n. Se aplican las siguientes reglas para los principales tipos MIME:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Extensi\xf3n"}),(0,t.jsx)(n.th,{children:"Content Type"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"jpg, jpeg"}),(0,t.jsx)(n.td,{children:"image/jpeg"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"png"}),(0,t.jsx)(n.td,{children:"image/png"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"gif"}),(0,t.jsx)(n.td,{children:"image/gif"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pdf"}),(0,t.jsx)(n.td,{children:"application/pdf"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"doc"}),(0,t.jsx)(n.td,{children:"application/msword"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"xls"}),(0,t.jsx)(n.td,{children:"application/vnd.ms-excel"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ppt"}),(0,t.jsx)(n.td,{children:"application/vnd.ms-powerpoint"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"zip"}),(0,t.jsx)(n.td,{children:"application/zip"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"gz"}),(0,t.jsx)(n.td,{children:"application/gzip"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"json"}),(0,t.jsx)(n.td,{children:"application/json"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"js"}),(0,t.jsx)(n.td,{children:"application/javascript"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ps"}),(0,t.jsx)(n.td,{children:"application/postscript"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"xml"}),(0,t.jsx)(n.td,{children:"application/xml"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"htm, html"}),(0,t.jsx)(n.td,{children:"text/html"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"mp3"}),(0,t.jsx)(n.td,{children:"audio/mpeg"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"otro"})}),(0,t.jsx)(n.td,{children:"application/octet-stream"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,t.jsx)(n.em,{children:"disposition"})," permite pasar el encabezado ",(0,t.jsx)(n.code,{children:"content-disposition"}),' del adjunto. Puede pasar una de las siguientes constantes del tema constante "Mail":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Valor"}),(0,t.jsx)(n.th,{children:"Comentario"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"mail disposition attachment"}),(0,t.jsx)(n.td,{children:'"attachment"'}),(0,t.jsx)(n.td,{children:'Define el valor del encabezado Content-disposition como "attachment", lo que significa que el archivo adjunto debe proporcionarse como un enlace en el mensaje.'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"mail disposition inline"}),(0,t.jsx)(n.td,{children:'"inline"'}),(0,t.jsx)(n.td,{children:'Define el valor del encabezado Content-disposition como "inline", lo que significa que el archivo adjunto debe aparecer dentro del contenido del mensaje, en la ubicaci\xf3n "cid". La renderizaci\xf3n depende del cliente de correo.'})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Por defecto, si se omite el par\xe1metro ",(0,t.jsx)(n.em,{children:"disposition"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["si el par\xe1metro ",(0,t.jsx)(n.em,{children:"cid"})," se utiliza, el encabezado ",(0,t.jsx)(n.code,{children:"Content-disposition"}),' es definido como "inline",']}),"\n",(0,t.jsxs)(n.li,{children:["si el par\xe1metro ",(0,t.jsx)(n.em,{children:"cid"})," no se pasa o est\xe1 vac\xedo, el encabezado ",(0,t.jsx)(n.code,{children:"Content-disposition"}),' es definido como "attachment".']}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"Ejemplo-1",children:"Ejemplo 1"}),"\n",(0,t.jsx)(n.p,{children:"Desea enviar un correo electr\xf3nico con un archivo seleccionado por el usuario como adjunto y una imagen integrada en el cuerpo HTML:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$doc:=Select document("";"*";"Please select a file to attach";0)\nIf (OK=1) //Si se ha seleccionado un documento\n\nC_OBJECT($email;$server;$transporter)\n\n$server:=New object\n$server.host:="smtp.mail.com"\n$server.user:="test_user@mail.com"\n$server.password:="p@ssw@rd"\n$transporter:=SMTP New transporter($server)\n\n$email:=New object\n$email.from:="test_user@mail.com"\n$email.to:="test_user@mail.com"\n$email.subject:="This is a test message with attachments"\n\n//a\xf1adir un enlace para descargar el archivo\n$email.attachments:=New collection(MAIL New attachment(Document))\n//insertar una imagen en l\xednea (utilice un cid)\n$email.attachments[1]:=MAIL New attachment("c:\\\\Pictures\\\\4D.jpg";"";"4D")\n\n$email.htmlBody:="<html>"+\\\n"<body>Hello World!"+\\\n"<img src=\'cid:4D\' >"+\\\n"</body>"+\\\n"</head>"+\\\n"</html>"\n\n$transporter.send($email) //enviar mail\n\nEnd if\n'})}),"\n",(0,t.jsx)(n.h4,{id:"Ejemplo-2",children:"Ejemplo 2"}),"\n",(0,t.jsx)(n.p,{children:"Desea enviar un correo electr\xf3nico con un \xe1rea 4D Write Pro como archivo adjunto:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'C_BLOB($blob)\nWP EXPORT VARIABLE(WPArea;$blob;wk docx)\n\nC_OBJECT($email;$server;$transporter)\n\n$server:=New object\n$server.host:="smtp.mail.com"\n$server.user:="user@mail.com"\n$server.password:="p@ssw@rd"\n$transporter:=SMTP New transporter($server)\n\n$email:=New object\n$email.from:="user@mail.com"\n$email.to:="customer@mail.com"\n$email.subject:="New annual report"\n$email.textBody:="Please find enclosed our latest annual report."\n$email.attachments:=New collection(MAIL New attachment($blob;"Annual report.docx"))\n\n$transporter.send($email)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"4DMailAttachmentnew",children:"4D.MailAttachment.new()"}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Lanzamiento"}),(0,t.jsx)(n.th,{children:"Modificaciones"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"19 R2"}),(0,t.jsx)(n.td,{children:"Acepta 4D.File, 4D.ZipFile, 4D.Blob"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"4D.MailAttachment.new"}),"( ",(0,t.jsx)(n.em,{children:"file"})," : 4D.File { ; ",(0,t.jsx)(n.em,{children:"name"})," : Text {; ",(0,t.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,t.jsx)(n.em,{children:"type"})," : Text { ; ",(0,t.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"4D.MailAttachment.new"}),"( ",(0,t.jsx)(n.em,{children:"zipFile"})," : 4D.ZipFile { ; ",(0,t.jsx)(n.em,{children:"name"})," : Text {; ",(0,t.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,t.jsx)(n.em,{children:"type"})," : Text { ; ",(0,t.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"4D.MailAttachment.new"}),"( ",(0,t.jsx)(n.em,{children:"blob"})," : 4D.Blob { ; ",(0,t.jsx)(n.em,{children:"name"})," : Text {; ",(0,t.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,t.jsx)(n.em,{children:"type"})," : Text { ; ",(0,t.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"4D.MailAttachment.new"}),"( ",(0,t.jsx)(n.em,{children:"path"})," : Text { ; ",(0,t.jsx)(n.em,{children:"name"})," : Text {; ",(0,t.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,t.jsx)(n.em,{children:"type"})," : Text { ; ",(0,t.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metros"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{style:{textAlign:"center"}}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"file"}),(0,t.jsx)(n.td,{children:"4D.File"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"Archivo adjunto"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"zIPFile"}),(0,t.jsx)(n.td,{children:"4D.ZipFile"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"Archivo zip adjunto"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"blob"}),(0,t.jsx)(n.td,{children:"4D.Blob"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"BLOB que contiene el adjunto"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"path"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"Ruta del archivo adjunto"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"name"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"Nombre + extensi\xf3n utilizados por el cliente de correo para designar el archivo adjunto"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cid"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:'ID del archivo adjunto (s\xf3lo en mensajes HTML), o " " si no se requiere cid'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"type"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"Valor del encabezado content-type"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"disposition"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:'Valor del encabezado content-disposition: "inline" o "attachment".'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Result"}),(0,t.jsx)(n.td,{children:"4D.MailAttachment"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,t.jsx)(n.td,{children:"Objeto adjunto"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"Descripci\xf3n-1",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["La funci\xf3n ",(0,t.jsx)(n.code,{children:"4D.MailAttachment.new()"})," crea y devuelve un nuevo objeto del tipo ",(0,t.jsx)(n.code,{children:"4D.MailAttachment"}),". La propiedad ",(0,t.jsx)(n.code,{children:".type"})," contiene el ",(0,t.jsx)(n.code,{children:"content-type"})," del archivo adjunto."]}),"\n",(0,t.jsx)(n.h2,{id:"cidcid--Text-Descripci\xf3n",children:".cid**.cid** : Text#### Descripci\xf3n"}),"\n",(0,t.jsx)(n.p,{children:"."}),"\n",(0,t.jsx)(n.h4,{id:"Descripci\xf3n-2",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["La propiedad ",(0,t.jsx)(n.code,{children:".cid"})," contiene  el ID del archivo adjunto. Esta propiedad se utiliza s\xf3lo en los mensajes HTML. Si falta esta propiedad, el archivo se maneja como un simple adjunto (enlace)."]}),"\n",(0,t.jsx)(n.h2,{id:"dispositiondisposition--Text-Descripci\xf3n",children:".disposition**.disposition** : Text#### Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".disposition"})," : Text"]}),"\n",(0,t.jsx)(n.h4,{id:"Descripci\xf3n-3",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["La propiedad ",(0,t.jsx)(n.code,{children:".disposition"})," contiene el valor del encabezado ",(0,t.jsx)(n.code,{children:"Content-Disposition"}),". Hay dos valores disponibles:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'"inline": el archivo adjunto se muestra dentro del contenido del mensaje, en la ubicaci\xf3n "cid". La renderizaci\xf3n depende del cliente de correo.'}),"\n",(0,t.jsx)(n.li,{children:'"attachment": el archivo adjunto se presenta como un enlace en el mensaje.'}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"getContent",children:".getContent()"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".getContent()"})," : 4D.Blob"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metros"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{style:{textAlign:"center"}}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Result"}),(0,t.jsx)(n.td,{children:"4D.Blob"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,t.jsx)(n.td,{children:"Contenido del anexo"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"Descripci\xf3n-4",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["La funci\xf3n ",(0,t.jsx)(n.code,{children:".getContent()"})," devuelve el contenido del objeto adjunto en un objeto ",(0,t.jsx)(n.code,{children:"4D.Blob"}),". Puede utilizar esta funci\xf3n con los objetos adjuntos recibidos por el comando ",(0,t.jsx)(n.a,{href:"/docs/es/20-R4/API/EmailObjectClass#mail-convert-from-mime",children:(0,t.jsx)(n.code,{children:"MAIL Convert from MIME"})}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"name",children:".name"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".name"})," : Text"]}),"\n",(0,t.jsx)(n.h4,{id:"Descripci\xf3n-5",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["La propiedad ",(0,t.jsx)(n.code,{children:".name"})," contiene el nombre y la extensi\xf3n del archivo adjunto.  Por defecto, es el nombre del archivo, a menos que se haya indicado otro nombre en el comando ",(0,t.jsx)(n.a,{href:"#mail-new-attachment",children:(0,t.jsx)(n.code,{children:"MAIL New attachment"})}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"path",children:".path"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".path"})," : Text"]}),"\n",(0,t.jsx)(n.h4,{id:"Descripci\xf3n-6",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["La propiedad ",(0,t.jsx)(n.code,{children:".path"})," contiene la ruta POSIX del archivo adjunto, si existe."]}),"\n",(0,t.jsx)(n.h2,{id:"platformPath",children:".platformPath"}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Lanzamiento"}),(0,t.jsx)(n.th,{children:"Modificaciones"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"19"}),(0,t.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".platformPath"})," : Text"]}),"\n",(0,t.jsx)(n.h4,{id:"Descripci\xf3n-7",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["La propiedad ",(0,t.jsx)(n.code,{children:".platformPath"})," devuelve The ",(0,t.jsx)(n.code,{children:".platformPath"})," property returns."]}),"\n",(0,t.jsx)(n.h2,{id:"size",children:".size"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".size"})," : Integer"]}),"\n",(0,t.jsx)(n.h4,{id:"Descripci\xf3n-8",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["La propiedad ",(0,t.jsx)(n.code,{children:".size"})," contiene el valor del encabezado ",(0,t.jsx)(n.code,{children:"size"})," del archivo adjunto. La propiedad ",(0,t.jsx)(n.code,{children:".size"})," se devuelve cuando el mensaje MIME define un encabezado de tama\xf1o en la parte adjunta."]}),"\n",(0,t.jsx)(n.h2,{id:"type",children:".type"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".type"})," : Text"]}),"\n",(0,t.jsx)(n.h4,{id:"Descripci\xf3n-9",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["La propiedad ",(0,t.jsx)(n.code,{children:".type"})," contiene el ",(0,t.jsx)(n.code,{children:"content-type"})," del archivo adjunto. Si este tipo no se pasa expl\xedcitamente al comando ",(0,t.jsx)(n.a,{href:"#mail-new-attachment",children:(0,t.jsx)(n.code,{children:"MAIL New attachment"})}),", el ",(0,t.jsx)(n.code,{children:"content-type"})," se basa en su extensi\xf3n de archivo."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},221020:(e,n,i)=>{var t=i(296540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,i){var t,r={},a=null,o=null;for(t in void 0!==i&&(a=""+i),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(o=n.ref),n)d.call(n,t)&&!c.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:s,type:e,key:a,ref:o,props:r,_owner:l.current}}n.Fragment=r,n.jsx=a,n.jsxs=a},474848:(e,n,i)=>{e.exports=i(221020)},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>l});var t=i(296540);const s={},r=t.createContext(s);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);