"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[64359],{817571:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var i=t(474848),s=t(28453);const r={id:"MailAttachmentClass",title:"MailAttachment"},l=void 0,d={id:"API/MailAttachmentClass",title:"MailAttachment",description:"Les objets pi\xe8ces jointes permettent de r\xe9f\xe9rencer des fichiers dans un objet Email. Les objets Attachment (pi\xe8ce jointe) sont cr\xe9\xe9s \xe0 l'aide de la commande MAIL New attachment.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/API/MailAttachmentClass.md",sourceDirName:"API",slug:"/API/MailAttachmentClass",permalink:"/docs/fr/19/API/MailAttachmentClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FMailAttachmentClass.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"MailAttachmentClass",title:"MailAttachment"},sidebar:"docs",previous:{title:"IMAPTransporter",permalink:"/docs/fr/19/API/IMAPTransporterClass"},next:{title:"POP3Transporter",permalink:"/docs/fr/19/API/POP3TransporterClass"}},c={},a=[{value:"Objet Attachment",id:"objet-attachment",level:3},{value:"MAIL New attachment",id:"mail-new-attachment",level:2},{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"4D.MailAttachment.new()",id:"4dmailattachmentnew",level:2},{value:"Description",id:"description-1",level:4},{value:".cid",id:"cid",level:2},{value:"Description",id:"description-2",level:4},{value:".disposition",id:"disposition",level:2},{value:"Description",id:"description-3",level:4},{value:".getContent()",id:"getcontent",level:2},{value:"Description",id:"description-4",level:4},{value:".name",id:"name",level:2},{value:"Description",id:"description-5",level:4},{value:".path",id:"path",level:2},{value:"Description",id:"description-6",level:4},{value:".platformPath",id:"platformpath",level:2},{value:"Description",id:"description-7",level:4},{value:".type",id:"type",level:2},{value:"Description",id:"description-8",level:4}];function o(e){const n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Les objets pi\xe8ces jointes permettent de r\xe9f\xe9rencer des fichiers dans un objet ",(0,i.jsx)(n.a,{href:"/docs/fr/19/API/EmailObjectClass",children:(0,i.jsx)(n.code,{children:"Email"})}),". Les objets Attachment (pi\xe8ce jointe) sont cr\xe9\xe9s \xe0 l'aide de la commande ",(0,i.jsx)(n.a,{href:"#mail-new-attachment",children:(0,i.jsx)(n.code,{children:"MAIL New attachment"})}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"objet-attachment",children:"Objet Attachment"}),"\n",(0,i.jsx)(n.p,{children:"Les objets Attachment fournissent les propri\xe9t\xe9s et fonctions suivantes en lecture seule :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{})})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#cid",children:[(0,i.jsx)(n.strong,{children:".cid"})," : Text"]}),"\xa0\xa0\xa0\xa0 ID de la pi\xe8ce jointe"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#disposition",children:[(0,i.jsx)(n.strong,{children:".disposition"})," : Text"]}),"\xa0\xa0\xa0\xa0la valeur de l'en-t\xeate ",(0,i.jsx)(n.code,{children:"Content-Disposition"})]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#getcontent",children:[(0,i.jsx)(n.strong,{children:".getContent()"})," : Blob"]}),"\xa0\xa0\xa0\xa0The ",(0,i.jsx)(n.code,{children:".getContent()"})," function"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#name",children:[(0,i.jsx)(n.strong,{children:".name"})," : Text"]}),"\xa0\xa0\xa0\xa0le nom et l'extension de la pi\xe8ce jointe"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#path",children:[(0,i.jsx)(n.strong,{children:".path"})," : Text"]}),"\xa0\xa0\xa0\xa0le chemin POSIX du fichier joint, s'il existe"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#platformpath",children:[(0,i.jsx)(n.strong,{children:".platformPath"})," : Text"]}),"\xa0\xa0\xa0\xa0le chemin du fichier joint exprim\xe9 avec la syntaxe de la plate-forme courante"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#type",children:[(0,i.jsx)(n.strong,{children:".type"})," : Texte"]}),"\xa0\xa0\xa0\xa0le ",(0,i.jsx)(n.code,{children:"content-type"})," du fichier joint"]})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"mail-new-attachment",children:"MAIL New attachment"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"MAIL New attachment"}),"( ",(0,i.jsx)(n.em,{children:"path"})," : Text { ; ",(0,i.jsx)(n.em,{children:"name"})," : Text {; ",(0,i.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,i.jsx)(n.em,{children:"type"})," : Text { ; ",(0,i.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"MAIL New attachment"}),"( ",(0,i.jsx)(n.em,{children:"blob"})," : Blob { ; ",(0,i.jsx)(n.em,{children:"name"})," : Text {; ",(0,i.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,i.jsx)(n.em,{children:"type"})," : Text { ; ",(0,i.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tres"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"path"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Chemin de la pi\xe8ce jointe"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"blob"}),(0,i.jsx)(n.td,{children:"Blob"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Blob contenant la pi\xe8ce jointe"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"name"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Nom + extension utilis\xe9s par le client de messagerie pour d\xe9signer la pi\xe8ce jointe"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"cid"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:'ID de la pi\xe8ce jointe (messages HTML uniquement) ou " " si aucun cid n\'est requis'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"type"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Valeur de l'en-t\xeate content-type"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"disposition"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:'Valeur de l\'en-t\xeate content-disposition : "inline" ou "attachment"'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"R\xe9sultat"}),(0,i.jsx)(n.td,{children:"4D.MailAttachment"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,i.jsx)(n.td,{children:"Objet pi\xe8ce jointe"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"|"}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.code,{children:"MAIL New attachment"})," vous permet de cr\xe9er un objet de type pi\xe8ce jointe (attachment) que vous pouvez ajouter \xe0 un ",(0,i.jsx)(n.a,{href:"/docs/fr/19/API/EmailObjectClass#objet-email",children:"objet Email"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Vous pouvez passer un chemin ou un Blob pour d\xe9finir la pi\xe8ce jointe."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Si vous utilisez un ",(0,i.jsx)(n.em,{children:"chemin"}),", passez une valeur ",(0,i.jsx)(n.strong,{children:"text"})," contenant le chemin du fichier joint, exprim\xe9 avec la syntaxe syst\xe8me. Vous pouvez passer un nom de chemin complet ou un simple nom de fichier (auquel cas 4D recherchera le fichier dans le m\xeame r\xe9pertoire que le fichier du projet)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Si vous utilisez un ",(0,i.jsx)(n.em,{children:"blob"}),", passez une valeur ",(0,i.jsx)(n.strong,{children:"BLOB"})," contenant le fichier joint."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Le param\xe8tre facultatif ",(0,i.jsx)(n.em,{children:"name"})," vous permet de passer le nom et l'extension \xe0 utiliser par le client de messagerie pour d\xe9signer la pi\xe8ce jointe. Si le param\xe8tre ",(0,i.jsx)(n.em,{children:"name"})," est omis et que :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"vous avez pass\xe9 un chemin d'acc\xe8s au fichier, le nom et l'extension du fichier sont utilis\xe9s,"}),"\n",(0,i.jsx)(n.li,{children:"vous avez pass\xe9 un BLOB, un nom al\xe9atoire sans extension est automatiquement g\xe9n\xe9r\xe9."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Le param\xe8tre facultatif ",(0,i.jsx)(n.em,{children:"cid"})," vous permet de passer un ID interne pour la pi\xe8ce jointe. Cet ID est la valeur de l'en-t\xeate ",(0,i.jsx)(n.code,{children:"Content-Id"})," et sera utilis\xe9 dans les messages HTML uniquement. Le cid associe la pi\xe8ce jointe \xe0 une r\xe9f\xe9rence d\xe9finie dans le corps du message \xe0 l'aide d'une balise HTML telle que ",(0,i.jsx)(n.code,{children:'\\&#060;img src="cid:ID"&#062;'}),". Cela signifie que le contenu de la pi\xe8ce jointe (par exemple, une image) doit \xeatre affich\xe9 dans le message sur le client de messagerie. Le r\xe9sultat final peut varier en fonction du client de messagerie. Vous pouvez passer une cha\xeene vide dans ",(0,i.jsx)(n.em,{children:"cid"})," si vous ne souhaitez pas utiliser ce param\xe8tre."]}),"\n",(0,i.jsxs)(n.p,{children:["Vous pouvez utiliser le param\xe8tre optionnel ",(0,i.jsx)(n.em,{children:"type"})," pour d\xe9finir explicitement le ",(0,i.jsx)(n.code,{children:"content-type"}),' du fichier joint. Par exemple, vous pouvez passer une cha\xeene d\xe9finissant un type MIME ("video/mpeg"). Cette valeur de content-type sera d\xe9finie pour la pi\xe8ce jointe, quelle que soit son extension. Pour plus d\'informations sur les types MIME, veuillez vous r\xe9f\xe9rer \xe0 ',(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/MIME",children:"la page type MIME sur Wikipedia"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Par d\xe9faut, si le param\xe8tre ",(0,i.jsx)(n.em,{children:"type"})," est omis ou contient une cha\xeene vide, le ",(0,i.jsx)(n.code,{children:"content-type"})," du fichier joint est bas\xe9 sur son extension. Les r\xe8gles suivantes sont appliqu\xe9es pour les principaux types MIME :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Extension"}),(0,i.jsx)(n.th,{children:"Content Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"jpg, jpeg"}),(0,i.jsx)(n.td,{children:"image/jpeg"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"png"}),(0,i.jsx)(n.td,{children:"image/png"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"gif"}),(0,i.jsx)(n.td,{children:"image/gif"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"pdf"}),(0,i.jsx)(n.td,{children:"application/pdf"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"doc"}),(0,i.jsx)(n.td,{children:"application/msword"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"xls"}),(0,i.jsx)(n.td,{children:"application/vnd.ms-excel"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ppt"}),(0,i.jsx)(n.td,{children:"application/vnd.ms-powerpoint"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"zip"}),(0,i.jsx)(n.td,{children:"application/zip"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"gz"}),(0,i.jsx)(n.td,{children:"application/gzip"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"json"}),(0,i.jsx)(n.td,{children:"application/json"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"js"}),(0,i.jsx)(n.td,{children:"application/javascript"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ps"}),(0,i.jsx)(n.td,{children:"application/postscript"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"xml"}),(0,i.jsx)(n.td,{children:"application/xml"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"htm, html"}),(0,i.jsx)(n.td,{children:"text/html"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mp3"}),(0,i.jsx)(n.td,{children:"audio/mpeg"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"other"})}),(0,i.jsx)(n.td,{children:"application/octet-stream"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Le param\xe8tre facultatif ",(0,i.jsx)(n.em,{children:"disposition"})," vous permet de passer l'en-t\xeate ",(0,i.jsx)(n.code,{children:"content-disposition"}),' de la pi\xe8ce jointe. Vous pouvez passer l\'une des constantes suivantes du th\xe8me de constantes "Mail" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Valeur"}),(0,i.jsx)(n.th,{children:"Commentaire"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mail disposition attachment"}),(0,i.jsx)(n.td,{children:'"attachment"'}),(0,i.jsx)(n.td,{children:'D\xe9finissez la valeur de l\'en-t\xeate Content-disposition sur "attachment", ce qui signifie que le fichier joint doit \xeatre fourni sous forme de lien dans le message.'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mail disposition inline"}),(0,i.jsx)(n.td,{children:'"inline"'}),(0,i.jsx)(n.td,{children:'D\xe9finissez la valeur de l\'en-t\xeate Content-disposition sur "inline", ce qui signifie que la pi\xe8ce jointe doit \xeatre rendue dans le contenu du message, \xe0 l\'emplacement du "cid". Le rendu d\xe9pend du client de messagerie.'})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Par d\xe9faut, si le param\xe8tre ",(0,i.jsx)(n.em,{children:"disposition"})," est omis :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["si le param\xe8tre ",(0,i.jsx)(n.em,{children:"cid"})," est utilis\xe9, l'en-t\xeate ",(0,i.jsx)(n.code,{children:"Content-disposition"}),' est d\xe9fini sur "inline",']}),"\n",(0,i.jsxs)(n.li,{children:["si le param\xe8tre ",(0,i.jsx)(n.em,{children:"cid"})," n'est pas pass\xe9 ou est vide, l'en-t\xeate ",(0,i.jsx)(n.code,{children:"Content-disposition"}),' est fix\xe9 \xe0 "attachment".']}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,i.jsx)(n.p,{children:"Vous souhaitez envoyer un e-mail avec un fichier s\xe9lectionn\xe9 par l'utilisateur comme pi\xe8ce jointe et une image int\xe9gr\xe9e dans le corps HTML :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'$doc:=Select document("";"*";"Please select a file to attach";0)\nIf (OK=1) //If a document was selected\n\nC_OBJECT($email;$server;$transporter)\n\n$server:=New object\n$server.host:="smtp.mail.com"\n$server.user:="test_user@mail.com"\n$server.password:="p@ssw@rd"\n$transporter:=SMTP New transporter($server)\n\n$email:=New object\n$email.from:="test_user@mail.com"\n$email.to:="test_user@mail.com"\n$email.subject:="This is a test message with attachments"\n\n//add a link to download file\n$email.attachments:=New collection(MAIL New attachment(Document))\n//insert an inline picture (use a cid)\n$email.attachments[1]:=MAIL New attachment("c:\\\\Pictures\\\\4D.jpg";"";"4D")\n\n$email.htmlBody:="<html>"+\\\n"<body>Hello World!"+\\\n"<img src=\'cid:4D\' >"+\\\n"</body>"+\\\n"</head>"+\\\n"</html>"\n\n$transporter.send($email) //envoyer e-mail\n\nEnd if\n'})}),"\n",(0,i.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,i.jsx)(n.p,{children:"Vous voulez envoyer un e-mail avec une zone 4D Write Pro en pi\xe8ce jointe :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'C_BLOB($blob)\nWP EXPORT VARIABLE(WPArea;$blob;wk docx)\n\nC_OBJECT($email;$server;$transporter)\n\n$server:=New object\n$server.host:="smtp.mail.com"\n$server.user:="user@mail.com"\n$server.password:="p@ssw@rd"\n$transporter:=SMTP New transporter($server)\n\n$email:=New object\n$email.from:="user@mail.com"\n$email.to:="customer@mail.com"\n$email.subject:="New annual report"\n$email.textBody:="Please find enclosed our latest annual report."\n$email.attachments:=New collection(MAIL New attachment($blob;"Annual report.docx"))\n\n$transporter.send($email)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"4dmailattachmentnew",children:"4D.MailAttachment.new()"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"4D.MailAttachment.new"}),"( ",(0,i.jsx)(n.em,{children:"path"})," : Text { ; ",(0,i.jsx)(n.em,{children:"name"})," : Text {; ",(0,i.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,i.jsx)(n.em,{children:"type"})," : Text { ; ",(0,i.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"4D.MailAttachment.new"}),"( ",(0,i.jsx)(n.em,{children:"blob"})," : Blob { ; ",(0,i.jsx)(n.em,{children:"name"})," : Text {; ",(0,i.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,i.jsx)(n.em,{children:"type"})," : Text { ; ",(0,i.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tres"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"path"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Chemin de la pi\xe8ce jointe"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"blob"}),(0,i.jsx)(n.td,{children:"Blob"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Blob contenant la pi\xe8ce jointe"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"name"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Nom + extension utilis\xe9s par le client de messagerie pour d\xe9signer la pi\xe8ce jointe"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"cid"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:'ID de la pi\xe8ce jointe (messages HTML uniquement) ou " " si aucun cid n\'est requis'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"type"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Valeur de l'en-t\xeate content-type"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"disposition"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:'Valeur de l\'en-t\xeate content-disposition : "inline" ou "attachment"'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"R\xe9sultat"}),(0,i.jsx)(n.td,{children:"4D.MailAttachment"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,i.jsx)(n.td,{children:"Objet pi\xe8ce jointe"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"|"}),"\n",(0,i.jsx)(n.h4,{id:"description-1",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La fonction ",(0,i.jsx)(n.code,{children:"4D.MailAttachment.new()"})," cr\xe9e et renvoie un nouvel objet du type ",(0,i.jsx)(n.code,{children:"4D.MailAttachment"}),". Elle est identique \xe0 la commande (raccourci) ",(0,i.jsx)(n.a,{href:"#mail-new-attachment",children:(0,i.jsx)(n.code,{children:"MAIL New attachment"})}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"cid",children:".cid"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".cid"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"description-2",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".id"})," contient l'  ID de la pi\xe8ce jointe. Cette propri\xe9t\xe9 est utilis\xe9e uniquement dans les messages HTML. Si cette propri\xe9t\xe9 est manquante, le fichier est g\xe9r\xe9 comme une simple pi\xe8ce jointe (lien)."]}),"\n",(0,i.jsx)(n.h2,{id:"disposition",children:".disposition"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".disposition"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"description-3",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".disposition"})," contient la valeur de l'en-t\xeate ",(0,i.jsx)(n.code,{children:"Content-Disposition"}),". ."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'"inline" : la pi\xe8ce jointe est rendue dans le contenu du message, \xe0 l\'emplacement "cid". Le rendu d\xe9pend du client de messagerie.'}),"\n",(0,i.jsx)(n.li,{children:'"attachment" : la pi\xe8ce jointe est fournie sous forme de lien dans le message.'}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"getcontent",children:".getContent()"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".getContent()"})," : Blob"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tres"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"R\xe9sultat"}),(0,i.jsx)(n.td,{children:"Blob"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,i.jsx)(n.td,{children:"Contenu de la pi\xe8ce jointe"})]})})]}),"\n",(0,i.jsx)(n.p,{children:"|"}),"\n",(0,i.jsx)(n.h4,{id:"description-4",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La fonction ",(0,i.jsx)(n.code,{children:".getContent()"})," The ",(0,i.jsx)(n.code,{children:".getContent()"})," function. Vous pouvez utiliser cette fonction avec les objets pi\xe8ce jointe re\xe7us par la commande ",(0,i.jsx)(n.a,{href:"#mail-convert-from-mime",children:(0,i.jsx)(n.code,{children:"MAIL Convert from MIME"})}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"name",children:".name"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".name"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"description-5",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".name"})," contient le nom et l'extension de la pi\xe8ce jointe.  Par d\xe9faut, c'est le nom du fichier, sauf si un autre nom a \xe9t\xe9 indiqu\xe9 dans la commande ",(0,i.jsx)(n.a,{href:"#mail-new-attachment",children:(0,i.jsx)(n.code,{children:"MAIL New attachment"})}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"path",children:".path"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".path"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"description-6",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".path"})," contient le chemin POSIX du fichier joint, s'il existe."]}),"\n",(0,i.jsx)(n.h2,{id:"platformpath",children:".platformPath"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"19"}),(0,i.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".platformPath"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"description-7",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".platformPath"})," retourne le chemin du fichier joint exprim\xe9 avec la syntaxe de la plate-forme courante."]}),"\n",(0,i.jsx)(n.h2,{id:"type",children:".type"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".type"})," : Texte"]}),"\n",(0,i.jsx)(n.h4,{id:"description-8",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".type"})," contient le ",(0,i.jsx)(n.code,{children:"content-type"})," du fichier joint. Si ce type n'est pas explicitement pass\xe9 \xe0 la commande ",(0,i.jsx)(n.a,{href:"#mail-new-attachment",children:(0,i.jsx)(n.code,{children:"MAIL New attachment"})}),", le ",(0,i.jsx)(n.code,{children:"content-type"})," est fond\xe9 sur son extension de fichier."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var i=t(296540);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);