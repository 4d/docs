"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["56121"],{227338:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"API/MailAttachmentClass","title":"MailAttachment","description":"Os objetos Attachment permitem fazer refer\xeancia a arquivos em um objeto Email. Os objetos Attachment s\xe3o criados usando o comando MAIL New attachment.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/API/MailAttachmentClass.md","sourceDirName":"API","slug":"/API/MailAttachmentClass","permalink":"/docs/pt/20-R6/API/MailAttachmentClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FMailAttachmentClass.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"MailAttachmentClass","title":"MailAttachment"},"sidebar":"docs","previous":{"title":"IMAPTransporter","permalink":"/docs/pt/20-R6/API/IMAPTransporterClass"},"next":{"title":"POP3Transporter","permalink":"/docs/pt/20-R6/API/POP3TransporterClass"}}'),i=t("785893"),r=t("250065");let d={id:"MailAttachmentClass",title:"MailAttachment"},l=void 0,c={},a=[{value:"Objeto anexos",id:"objeto-anexos",level:3},{value:"MAIL New attachment",id:"mail-new-attachment",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"4D. MailAttachment.new()",id:"4d-mailattachmentnew",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:4},{value:".cid",id:"cid",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-2",level:4},{value:".disposition",id:"disposition",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-3",level:4},{value:".getContent()",id:"getcontent",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-4",level:4},{value:".name",id:"name",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-5",level:4},{value:".path",id:"path",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-6",level:4},{value:".platformPath",id:"platformpath",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-7",level:4},{value:".size",id:"size",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-8",level:4},{value:".type",id:"type",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-9",level:4}];function o(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Os objetos Attachment permitem fazer refer\xeancia a arquivos em um objeto ",(0,i.jsx)(n.a,{href:"/docs/pt/20-R6/API/EmailObjectClass",children:(0,i.jsx)(n.code,{children:"Email"})}),". Os objetos Attachment s\xe3o criados usando o comando ",(0,i.jsx)(n.a,{href:"#mail-new-attachment",children:(0,i.jsx)(n.code,{children:"MAIL New attachment"})}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"objeto-anexos",children:"Objeto anexos"}),"\n",(0,i.jsx)(n.p,{children:"Objetos anexos oferecem as propriedades e fun\xe7\xf5es apenas leitura abaixo:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{})})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#cid",children:[(0,i.jsx)(n.strong,{children:".cid"})," : Text"]}),(0,i.jsx)(n.br,{})," the ID of the attachment"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#disposition",children:[(0,i.jsx)(n.strong,{children:".disposition"})," : Text"]}),(0,i.jsx)(n.br,{}),"the value of the ",(0,i.jsx)(n.code,{children:"Content-Disposition"})," header"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#getcontent",children:[(0,i.jsx)(n.strong,{children:".getContent()"})," : 4D.Blob"]}),(0,i.jsx)(n.br,{}),"returns the contents of the attachment object in a ",(0,i.jsx)(n.code,{children:"4D.Blob"})," object"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#name",children:[(0,i.jsx)(n.strong,{children:".name"})," : Text"]}),(0,i.jsx)(n.br,{}),"the name and extension of the attachment"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#path",children:[(0,i.jsx)(n.strong,{children:".path"})," : Text"]}),(0,i.jsx)(n.br,{}),"the POSIX path of the attachment file, if it exists"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#platformpath",children:[(0,i.jsx)(n.strong,{children:".platformPath"})," : Text"]}),(0,i.jsx)(n.br,{}),"the path of the attachment file expressed with the current platform syntax"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#size",children:[(0,i.jsx)(n.strong,{children:".size"})," : Integer"]}),(0,i.jsx)(n.br,{}),"the value of the ",(0,i.jsx)(n.code,{children:"size"})," header of the attachment file"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#type",children:[(0,i.jsx)(n.strong,{children:".type"})," : Text"]}),(0,i.jsx)(n.br,{}),"the ",(0,i.jsx)(n.code,{children:"content-type"})," of the attachment file"]})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"mail-new-attachment",children:"MAIL New attachment"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"19 R2"}),(0,i.jsx)(n.td,{children:"Accepts 4D. File, 4D. ZipFile, 4D. Blob"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"MAIL New attachment"}),"( ",(0,i.jsx)(n.em,{children:"file"})," : 4D.File { ; ",(0,i.jsx)(n.em,{children:"name"})," : Text {; ",(0,i.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,i.jsx)(n.em,{children:"type"})," : Text { ; ",(0,i.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"MAIL New attachment"}),"( ",(0,i.jsx)(n.em,{children:"zipFile"})," : 4D.ZipFile { ; ",(0,i.jsx)(n.em,{children:"name"})," : Text {; ",(0,i.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,i.jsx)(n.em,{children:"type"})," : Text { ; ",(0,i.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"MAIL New attachment"}),"( ",(0,i.jsx)(n.em,{children:"blob"})," : 4D.Blob { ; ",(0,i.jsx)(n.em,{children:"name"})," : Text {; ",(0,i.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,i.jsx)(n.em,{children:"type"})," : Text { ; ",(0,i.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"MAIL New attachment"}),"( ",(0,i.jsx)(n.em,{children:"path"})," : Text { ; ",(0,i.jsx)(n.em,{children:"name"})," : Text {; ",(0,i.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,i.jsx)(n.em,{children:"type"})," : Text { ; ",(0,i.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe2metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"file"}),(0,i.jsx)(n.td,{children:"4D. File"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Par\xe2metros"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"zipFile"}),(0,i.jsx)(n.td,{children:"4D. ZipFile"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Arquivo zip"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"blob"}),(0,i.jsx)(n.td,{children:"4D. Blob"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Blob contendo o anexo"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"path"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Pode passar uma rota ou um Blob para definir o anexo."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"name"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Nome + extens\xe3o usado pelo cliente email para designar o anexo"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"cid"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:'ID do anexo (apenas mensagens HTML), ou " " se nenhum cid for exigido'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"type"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Valor do cabe\xe7alho content-type"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"disposition"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:'Valor do cabe\xe7alho content-disposition: "inline" ou "attachment".'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultados"}),(0,i.jsx)(n.td,{children:"4D. MailAttachment"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,i.jsx)(n.td,{children:"Objeto anexo"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"MAIL New attachment"})," command allows you to create an attachment object that you can add to an ",(0,i.jsx)(n.a,{href:"/docs/pt/20-R6/API/EmailObjectClass#email-object",children:"Email object"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Para definir o anexo, pode utilizar:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["um ",(0,i.jsx)(n.em,{children:"file"}),", passe um objeto ",(0,i.jsx)(n.code,{children:"4D.File"})," contendo o arquivo anexo."]}),"\n",(0,i.jsxs)(n.li,{children:["um ",(0,i.jsx)(n.em,{children:"zipfile"}),", passe um objeto ",(0,i.jsx)(n.code,{children:"4D.ZipFile"})," contendo o arquivo anexo."]}),"\n",(0,i.jsxs)(n.li,{children:["um ",(0,i.jsx)(n.em,{children:"blob"}),", passe um objeto ",(0,i.jsx)(n.code,{children:"4D.Blob"})," contendo o pr\xf3prio anexo."]}),"\n",(0,i.jsxs)(n.li,{children:["se usar ",(0,i.jsx)(n.em,{children:"path"}),", passe um valor ",(0,i.jsx)(n.strong,{children:"text"})," contendo a rota do arquivo anexo, expresso com a sintaxe sistema. Pode passar um nome de rota completo ou um nome de arquivo simples (em cujo caso 4D vai pesquisar para o arquivo no mesmo diret\xf3rio como o arquivo projeto)."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Pode passar uma rota ou um Blob para definir o anexo. Se ",(0,i.jsx)(n.em,{children:"name"})," for omitido e:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"passar uma rota de arquivo, o nome e extens\xe3o do arquivo \xe9 usado,"}),"\n",(0,i.jsx)(n.li,{children:"passar um BLOB, um nome aleat\xf3rio sem extens\xe3o \xe9 gerado automaticamente."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The optional ",(0,i.jsx)(n.em,{children:"cid"})," parameter lets you pass an internal ID for the attachment. This ID is the value of the ",(0,i.jsx)(n.code,{children:"Content-Id"})," header, it will be used in HTML messages only. The cid associates the attachment with a reference defined in the message body using an HTML tag such as ",(0,i.jsx)(n.code,{children:'\\<img src="cid:ID">'}),". Isso significa que os conte\xfados do anexo (por exemplo uma imagem) deve ser exibida dentro da mensagem do cliente mail. O resultado final deve variar dependendo do cliente mail. You can pass an empty string in ",(0,i.jsx)(n.em,{children:"cid"})," if you do not want to use this parameter."]}),"\n",(0,i.jsxs)(n.p,{children:["You can use the optional ",(0,i.jsx)(n.em,{children:"type"})," parameter to explicitly set the ",(0,i.jsx)(n.code,{children:"content-type"}),' of the attachment file. Por exemplo, pode passar uma string definindo um tipo MIME ("video/mpeg"). Esse valor de content-type vai ser estabelecido para o anexo, independente de sua extens\xe3o. For more information about MIME types, please refer to the ',(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/MIME",children:"MIME type page on Wikipedia"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["By default, if the ",(0,i.jsx)(n.em,{children:"type"})," parameter is omitted or contains an empty string, the ",(0,i.jsx)(n.code,{children:"content-type"})," of the attachment file is based on its extension. As regras abaixo s\xe3o aplicadas aos tipos MIME:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Extens\xe3o"}),(0,i.jsx)(n.th,{children:"Tipo"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"jpg, jpeg"}),(0,i.jsx)(n.td,{children:"image/jpeg"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"png"}),(0,i.jsx)(n.td,{children:"image/png"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"gif"}),(0,i.jsx)(n.td,{children:"image/gif"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"pdf"}),(0,i.jsx)(n.td,{children:"application/pdf"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"doc"}),(0,i.jsx)(n.td,{children:"application/msword"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"xls"}),(0,i.jsx)(n.td,{children:"application/vnd.ms-excel"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ppt"}),(0,i.jsx)(n.td,{children:"application/vnd.ms-powerpoint"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"zip"}),(0,i.jsx)(n.td,{children:"application/zip"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"gz"}),(0,i.jsx)(n.td,{children:"application/gzip"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"json"}),(0,i.jsx)(n.td,{children:"application/json"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"js"}),(0,i.jsx)(n.td,{children:"application/javascript"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ps"}),(0,i.jsx)(n.td,{children:"application/postscript"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"xml"}),(0,i.jsx)(n.td,{children:"application/xml"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"htm, html"}),(0,i.jsx)(n.td,{children:"text/html"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mp3"}),(0,i.jsx)(n.td,{children:"audio/mpeg"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"outro"})}),(0,i.jsx)(n.td,{children:"application/octet-stream"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["The optional ",(0,i.jsx)(n.em,{children:"disposition"})," parameter lets you pass the ",(0,i.jsx)(n.code,{children:"content-disposition"}),' header of the attachment. Pode passar uma das constantes abaixo da constante tema de "Mail":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe2metros"}),(0,i.jsx)(n.th,{children:"Valor"}),(0,i.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mail disposition attachment"}),(0,i.jsx)(n.td,{children:'"attachment"'}),(0,i.jsx)(n.td,{children:'Estabelece o valor de cabe\xe7alho Content-disposition para "attachment" que significa que o arquivo anexo deve ser fornecido como um link na mensagem.'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mail disposition inline"}),(0,i.jsx)(n.td,{children:'"inline"'}),(0,i.jsx)(n.td,{children:'Estabelece o valor de cabe\xe7alho Content-disposition para "inline", o que significa que o anexo deve ser renderizado dentro do conte\xfado da mensagem, no local "cid". A renderiza\xe7\xe3o depende do cliente mail.'})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["By default, if the ",(0,i.jsx)(n.em,{children:"disposition"})," parameter is omitted:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["if the ",(0,i.jsx)(n.em,{children:"cid"})," parameter is used, the ",(0,i.jsx)(n.code,{children:"Content-disposition"}),' header is set to "inline",']}),"\n",(0,i.jsxs)(n.li,{children:["if the ",(0,i.jsx)(n.em,{children:"cid"})," parameter is not passed or empty, the ",(0,i.jsx)(n.code,{children:"Content-disposition"}),' header is set to "attachment".']}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,i.jsx)(n.p,{children:"Se quiser enviar um email com um arquivo selecionado pelo usu\xe1rio como um anexo e uma imagem embebida no corpo HTML:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'$doc:=Select document("";"*";"Please select a file to attach";0)\nIf (OK=1) //If a document was selected\n\nC_OBJECT($email;$server;$transporter)\n\n$server:=New object\n$server.host:="smtp.mail.com"\n$server.user:="test_user@mail.com"\n$server.password:="p@ssw@rd"\n$transporter:=SMTP New transporter($server)\n\n$email:=New object\n$email.from:="test_user@mail.com"\n$email.to:="test_user@mail.com"\n$email.subject:="This is a test message with attachments"\n\n//add a link to download file\n$email.attachments:=New collection(MAIL New attachment(Document))\n//insert an inline picture (use a cid)\n$email.attachments[1]:=MAIL New attachment("c:\\\\Pictures\\\\4D.jpg";"";"4D")\n\n$email.htmlBody:="<html>"+\\\n"<body>Hello World!"+\\\n"<img src=\'cid:4D\' >"+\\\n"</body>"+\\\n"</head>"+\\\n"</html>"\n\n$transporter.send($email) //send mail\n\nEnd if\n'})}),"\n",(0,i.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,i.jsx)(n.p,{children:"Se quiser enviar um email com uma \xe1rea 4D Write pro como um anexo:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'C_BLOB($blob)\nWP EXPORT VARIABLE(WPArea;$blob;wk docx)\n\nC_OBJECT($email;$server;$transporter)\n\n$server:=New object\n$server.host:="smtp.mail.com"\n$server.user:="user@mail.com"\n$server.password:="p@ssw@rd"\n$transporter:=SMTP New transporter($server)\n\n$email:=New object\n$email.from:="user@mail.com"\n$email.to:="customer@mail.com"\n$email.subject:="New annual report"\n$email.textBody:="Please find enclosed our latest annual report."\n$email.attachments:=New collection(MAIL New attachment($blob;"Annual report.docx"))\n\n$transporter.send($email)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"4d-mailattachmentnew",children:"4D. MailAttachment.new()"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"19 R2"}),(0,i.jsx)(n.td,{children:"Accepts 4D. File, 4D. ZipFile, 4D. Blob"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"4D.MailAttachment.new"}),"( ",(0,i.jsx)(n.em,{children:"file"})," : 4D.File { ; ",(0,i.jsx)(n.em,{children:"name"})," : Text {; ",(0,i.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,i.jsx)(n.em,{children:"type"})," : Text { ; ",(0,i.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"4D.MailAttachment.new"}),"( ",(0,i.jsx)(n.em,{children:"zipFile"})," : 4D.ZipFile { ; ",(0,i.jsx)(n.em,{children:"name"})," : Text {; ",(0,i.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,i.jsx)(n.em,{children:"type"})," : Text { ; ",(0,i.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"4D.MailAttachment.new"}),"( ",(0,i.jsx)(n.em,{children:"blob"})," : 4D.Blob { ; ",(0,i.jsx)(n.em,{children:"name"})," : Text {; ",(0,i.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,i.jsx)(n.em,{children:"type"})," : Text { ; ",(0,i.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"4D.MailAttachment.new"}),"( ",(0,i.jsx)(n.em,{children:"path"})," : Text { ; ",(0,i.jsx)(n.em,{children:"name"})," : Text {; ",(0,i.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,i.jsx)(n.em,{children:"type"})," : Text { ; ",(0,i.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe2metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"file"}),(0,i.jsx)(n.td,{children:"4D. File"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Par\xe2metros"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"zipFile"}),(0,i.jsx)(n.td,{children:"4D. ZipFile"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Arquivo zip"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"blob"}),(0,i.jsx)(n.td,{children:"4D. Blob"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Blob contendo o anexo"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"path"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Pode passar uma rota ou um Blob para definir o anexo."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"name"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Nome + extens\xe3o usado pelo cliente email para designar o anexo"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"cid"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:'ID do anexo (apenas mensagens HTML), ou " " se nenhum cid for exigido'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"type"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Valor do cabe\xe7alho content-type"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"disposition"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:'Valor do cabe\xe7alho content-disposition: "inline" ou "attachment".'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultados"}),(0,i.jsx)(n.td,{children:"4D. MailAttachment"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,i.jsx)(n.td,{children:"Objeto anexo"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o-1",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"4D.MailAttachment.new()"})," function creates and returns a new object of the ",(0,i.jsx)(n.code,{children:"4D.MailAttachment"})," type. Ele \xe9 id\xeantico ao comando (atalho) ",(0,i.jsx)(n.a,{href:"#mail-new-attachment",children:(0,i.jsx)(n.code,{children:"MAIL New attachment"})}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"cid",children:".cid"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".cid"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o-2",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".cid"})," property contains  the ID of the attachment. Essa funcionalidade \xe9 usada em mensagens HTML apenas. Se essa propriedade faltar, o arquivo \xe9 manejado como um anexo simples (link)."]}),"\n",(0,i.jsx)(n.h2,{id:"disposition",children:".disposition"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".disposition"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o-3",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".disposition"})," property contains the value of the ",(0,i.jsx)(n.code,{children:"Content-Disposition"})," header. Dois valores eset\xe3o dispon\xedveis:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'"inline": o anexo \xe9 renderizado dentro dos conte\xfados da mensagem, no local "cid". A renderiza\xe7\xe3o depende do cliente mail.'}),"\n",(0,i.jsx)(n.li,{children:'"attachment": o anexo \xe9 fornecido como um link na mensagem.'}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"getcontent",children:".getContent()"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".getContent()"})," : 4D.Blob"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe2metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultados"}),(0,i.jsx)(n.td,{children:"4D. Blob"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,i.jsx)(n.td,{children:"Conte\xfado do anexo"})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o-4",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".getContent()"})," function returns the contents of the attachment object in a ",(0,i.jsx)(n.code,{children:"4D.Blob"})," object. Voc\xea pode usar esse m\xe9todo com objetos de anexo recebidos pelo comando ",(0,i.jsx)(n.a,{href:"/docs/pt/20-R6/API/EmailObjectClass#mail-convert-from-mime",children:(0,i.jsx)(n.code,{children:"MAIL Convert from MIME"})}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"name",children:".name"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".name"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o-5",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".name"})," property contains the name and extension of the attachment.  By default, it is the name of the file, unless another name was specified in the ",(0,i.jsx)(n.a,{href:"#mail-new-attachment",children:(0,i.jsx)(n.code,{children:"MAIL New attachment"})})," command."]}),"\n",(0,i.jsx)(n.h2,{id:"path",children:".path"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".path"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o-6",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".path"})," property contains the POSIX path of the attachment file, if it exists."]}),"\n",(0,i.jsx)(n.h2,{id:"platformpath",children:".platformPath"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"19"}),(0,i.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".platformPath"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o-7",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".platformPath"})," property returns the path of the attachment file expressed with the current platform syntax."]}),"\n",(0,i.jsx)(n.h2,{id:"size",children:".size"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".size"})," : Integer"]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o-8",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".size"})," property contains the value of the ",(0,i.jsx)(n.code,{children:"size"})," header of the attachment file. The ",(0,i.jsx)(n.code,{children:".size"})," property is returned when the MIME message defines a size header in the attachment part."]}),"\n",(0,i.jsx)(n.h2,{id:"type",children:".type"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".type"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o-9",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".type"})," property contains the ",(0,i.jsx)(n.code,{children:"content-type"})," of the attachment file. If this type is not explicitly passed to the ",(0,i.jsx)(n.a,{href:"#mail-new-attachment",children:(0,i.jsx)(n.code,{children:"MAIL New attachment"})})," command, the ",(0,i.jsx)(n.code,{children:"content-type"})," is based on its file extension."]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var s=t(667294);let i={},r=s.createContext(i);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);