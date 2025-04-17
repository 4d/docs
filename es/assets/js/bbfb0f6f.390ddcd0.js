"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33234"],{69652:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>t,assets:()=>r,toc:()=>a,contentTitle:()=>l});var t=JSON.parse('{"id":"API/MailAttachmentClass","title":"MailAttachment","description":"Los objetos Attachment permiten referenciar archivos en un objeto Email. Los objetos Attachment son creados utilizando el comando MAIL New attachment.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/API/MailAttachmentClass.md","sourceDirName":"API","slug":"/API/MailAttachmentClass","permalink":"/docs/es/API/MailAttachmentClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FMailAttachmentClass.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"MailAttachmentClass","title":"MailAttachment"},"sidebar":"docs","previous":{"title":"IncomingMessage","permalink":"/docs/es/API/IncomingMessageClass"},"next":{"title":"OutgoingMessage","permalink":"/docs/es/API/OutgoingMessageClass"}}'),s=i("785893"),d=i("250065");let c={id:"MailAttachmentClass",title:"MailAttachment"},l=void 0,r={},a=[{value:"Objetos adjuntos",id:"objetos-adjuntos",level:3},{value:"4D.MailAttachment.new()",id:"4dmailattachmentnew",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:".cid",id:"cid",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-1",level:4},{value:".disposition",id:"disposition",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-2",level:4},{value:".getContent()",id:"getcontent",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-3",level:4},{value:".name",id:"name",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-4",level:4},{value:".path",id:"path",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-5",level:4},{value:".platformPath",id:"platformpath",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-6",level:4},{value:".size",id:"size",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-7",level:4},{value:".type",id:"type",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-8",level:4}];function o(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Los objetos Attachment permiten referenciar archivos en un objeto ",(0,s.jsx)(n.a,{href:"/docs/es/API/EmailObjectClass",children:(0,s.jsx)(n.code,{children:"Email"})}),". Los objetos Attachment son creados utilizando el comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/mail-new-attachment",children:(0,s.jsx)(n.code,{children:"MAIL New attachment"})}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"objetos-adjuntos",children:"Objetos adjuntos"}),"\n",(0,s.jsx)(n.p,{children:"Los objetos Attachment ofrecen las siguientes propiedades y funciones de s\xf3lo lectura:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{})})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsx)(n.tr,{children:(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.a,{href:"#cid",children:[(0,s.jsx)(n.strong,{children:".cid"})," : Text"]}),(0,s.jsx)(n.br,{}),"el ID del archivo adjunto"]})}),(0,s.jsx)(n.tr,{children:(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.a,{href:"#disposition",children:[(0,s.jsx)(n.strong,{children:".disposition"})," : Text"]}),(0,s.jsx)(n.br,{}),"el valor del encabezado ",(0,s.jsx)(n.code,{children:"Content-Disposition"})]})}),(0,s.jsx)(n.tr,{children:(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.a,{href:"#getcontent",children:[(0,s.jsx)(n.strong,{children:".getContent()"})," : 4D.Blob"]}),(0,s.jsx)(n.br,{}),"devuelve el contenido del objeto adjunto en un objeto ",(0,s.jsx)(n.code,{children:"4D.Blob"})]})}),(0,s.jsx)(n.tr,{children:(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.a,{href:"#name",children:[(0,s.jsx)(n.strong,{children:".name"})," : Text"]}),(0,s.jsx)(n.br,{}),"el nombre y la extensi\xf3n del adjunto"]})}),(0,s.jsx)(n.tr,{children:(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.a,{href:"#path",children:[(0,s.jsx)(n.strong,{children:".path"})," : Text"]}),(0,s.jsx)(n.br,{}),"la ruta POSIX del archivo adjunto, si existe"]})}),(0,s.jsx)(n.tr,{children:(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.a,{href:"#platformpath",children:[(0,s.jsx)(n.strong,{children:".platformPath"})," : Text"]}),(0,s.jsx)(n.br,{}),"la ruta del archivo adjunto expresada con la sintaxis de la plataforma actual"]})}),(0,s.jsx)(n.tr,{children:(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.a,{href:"#size",children:[(0,s.jsx)(n.strong,{children:".size"})," : Integer"]}),(0,s.jsx)(n.br,{}),"el valor del encabezado ",(0,s.jsx)(n.code,{children:"size"})," del archivo adjunto"]})}),(0,s.jsx)(n.tr,{children:(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.a,{href:"#type",children:[(0,s.jsx)(n.strong,{children:".type"})," : Text"]}),(0,s.jsx)(n.br,{}),"el ",(0,s.jsx)(n.code,{children:"content-type"})," del archivo adjunto"]})})]})]}),"\n",(0,s.jsx)(n.h2,{id:"4dmailattachmentnew",children:"4D.MailAttachment.new()"}),"\n",(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Lanzamiento"}),(0,s.jsx)(n.th,{children:"Modificaciones"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"19 R2"}),(0,s.jsx)(n.td,{children:"Acepta 4D.File, 4D.ZipFile, 4D.Blob"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"4D.MailAttachment.new"}),"( ",(0,s.jsx)(n.em,{children:"file"})," : 4D.File { ; ",(0,s.jsx)(n.em,{children:"name"})," : Text {; ",(0,s.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,s.jsx)(n.em,{children:"type"})," : Text { ; ",(0,s.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:"4D.MailAttachment.new"}),"( ",(0,s.jsx)(n.em,{children:"zipFile"})," : 4D.ZipFile { ; ",(0,s.jsx)(n.em,{children:"name"})," : Text {; ",(0,s.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,s.jsx)(n.em,{children:"type"})," : Text { ; ",(0,s.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:"4D.MailAttachment.new"}),"( ",(0,s.jsx)(n.em,{children:"blob"})," : 4D.Blob { ; ",(0,s.jsx)(n.em,{children:"name"})," : Text {; ",(0,s.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,s.jsx)(n.em,{children:"type"})," : Text { ; ",(0,s.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:"4D.MailAttachment.new"}),"( ",(0,s.jsx)(n.em,{children:"path"})," : Text { ; ",(0,s.jsx)(n.em,{children:"name"})," : Text {; ",(0,s.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,s.jsx)(n.em,{children:"type"})," : Text { ; ",(0,s.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metros"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{style:{textAlign:"center"}}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"file"}),(0,s.jsx)(n.td,{children:"4D.File"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"Archivo adjunto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"zIPFile"}),(0,s.jsx)(n.td,{children:"4D.ZipFile"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"Archivo zip adjunto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"blob"}),(0,s.jsx)(n.td,{children:"4D.Blob"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"BLOB que contiene el adjunto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"path"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"Ruta del archivo adjunto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"name"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"Nombre + extensi\xf3n utilizados por el cliente de correo para designar el archivo adjunto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cid"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:'ID del archivo adjunto (s\xf3lo en mensajes HTML), o " " si no se requiere cid'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"type"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"Valor del encabezado content-type"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"disposition"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:'Valor del encabezado content-disposition: "inline" o "attachment".'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"4D.MailAttachment"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(n.td,{children:"Objeto adjunto"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["La funci\xf3n ",(0,s.jsx)(n.code,{children:"4D.MailAttachment.new()"})," crea y devuelve un nuevo objeto de tipo ",(0,s.jsx)(n.code,{children:"4D.MailAttachment"}),". Es id\xe9ntico al comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/mail-new-attachment",children:(0,s.jsx)(n.code,{children:"MAIL New attachment"})})," (acceso directo)."]}),"\n",(0,s.jsx)(n.h2,{id:"cid",children:".cid"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:".cid"})," : Text"]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n-1",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["La propiedad ",(0,s.jsx)(n.code,{children:".cid"})," contiene el ID del archivo adjunto. Esta propiedad se utiliza s\xf3lo en los mensajes HTML. Si falta esta propiedad, el archivo se maneja como un simple adjunto (enlace)."]}),"\n",(0,s.jsx)(n.h2,{id:"disposition",children:".disposition"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:".disposition"})," : Text"]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n-2",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["La propiedad ",(0,s.jsx)(n.code,{children:".disposition"})," contiene el valor del encabezado ",(0,s.jsx)(n.code,{children:"Content-Disposition"}),". Hay dos valores disponibles:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'"inline": el archivo adjunto se muestra dentro del contenido del mensaje, en la ubicaci\xf3n "cid". La renderizaci\xf3n depende del cliente de correo.'}),"\n",(0,s.jsx)(n.li,{children:'"attachment": el archivo adjunto se presenta como un enlace en el mensaje.'}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"getcontent",children:".getContent()"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:".getContent()"})," : 4D.Blob"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metros"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{style:{textAlign:"center"}}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"4D.Blob"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(n.td,{children:"Contenido del anexo"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n-3",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["La funci\xf3n ",(0,s.jsx)(n.code,{children:".getContent()"})," devuelve el contenido del objeto adjunto en un objeto ",(0,s.jsx)(n.code,{children:"4D.Blob"}),". Puede utilizar este m\xe9todo con objetos adjuntos recibidos por el comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/mail-convert-from-mime",children:(0,s.jsx)(n.code,{children:"MAIL Convert from MIME"})}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"name",children:".name"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:".name"})," : Text"]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n-4",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["La propiedad ",(0,s.jsx)(n.code,{children:".name"})," contiene el nombre y la extensi\xf3n del adjunto.  Por defecto, es el nombre del archivo, a menos que se haya indicado otro nombre en el comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/mail-new-attachment",children:(0,s.jsx)(n.code,{children:"MAIL New attachment"})}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"path",children:".path"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:".path"})," : Text"]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n-5",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["La propiedad ",(0,s.jsx)(n.code,{children:".path"})," contiene la ruta POSIX del archivo adjunto, si existe."]}),"\n",(0,s.jsx)(n.h2,{id:"platformpath",children:".platformPath"}),"\n",(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Lanzamiento"}),(0,s.jsx)(n.th,{children:"Modificaciones"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"19"}),(0,s.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:".platformPath"})," : Text"]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n-6",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["La propiedad ",(0,s.jsx)(n.code,{children:".platformPath"})," contiene la ruta del archivo adjunto expresada con la sintaxis de la plataforma actual."]}),"\n",(0,s.jsx)(n.h2,{id:"size",children:".size"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:".size"})," : Integer"]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n-7",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["La propiedad ",(0,s.jsx)(n.code,{children:".size"})," contiene el valor del encabezado ",(0,s.jsx)(n.code,{children:"size"})," del archivo adjunto. La propiedad ",(0,s.jsx)(n.code,{children:".size"})," se devuelve cuando el mensaje MIME define un encabezado de tama\xf1o en la parte adjunta."]}),"\n",(0,s.jsx)(n.h2,{id:"type",children:".type"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:".type"})," : Text"]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n-8",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["La propiedad ",(0,s.jsx)(n.code,{children:".type"})," contiene el ",(0,s.jsx)(n.code,{children:"content-type"})," del archivo adjunto. Si este tipo no se pasa expl\xedcitamente al comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/mail-new-attachment",children:(0,s.jsx)(n.code,{children:"MAIL New attachment"})}),", el ",(0,s.jsx)(n.code,{children:"content-type"})," se basa en su extensi\xf3n de archivo."]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return c}});var t=i(667294);let s={},d=t.createContext(s);function c(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);