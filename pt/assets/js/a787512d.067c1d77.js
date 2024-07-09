/*! For license information please see a787512d.067c1d77.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43736],{282899:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=t(474848),i=t(28453);const r={id:"MailAttachmentClass",title:"MailAttachment"},d=void 0,o={id:"API/MailAttachmentClass",title:"MailAttachment",description:"Objetos anexo permite referenciar arquivos dentro de um objetoEmail. Objetos anexos s\xe3o criados usando o comando MAIL New attachment.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/API/MailAttachmentClass.md",sourceDirName:"API",slug:"/API/MailAttachmentClass",permalink:"/docs/pt/19/API/MailAttachmentClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FMailAttachmentClass.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"MailAttachmentClass",title:"MailAttachment"},sidebar:"docs",previous:{title:"IMAPTransporter",permalink:"/docs/pt/19/API/IMAPTransporterClass"},next:{title:"POP3Transporter",permalink:"/docs/pt/19/API/POP3TransporterClass"}},a={},l=[{value:"Objeto anexos",id:"Objeto-anexos",level:3},{value:"MAIL New attachment",id:"MAIL-New-attachment",level:2},{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"Exemplo-1",level:4},{value:"Exemplo 2",id:"Exemplo-2",level:4},{value:"4D. MailAttachment.new()",id:"4D-MailAttachmentnew",level:2},{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o-1",level:4},{value:".cid",id:"cid",level:2},{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o-2",level:4},{value:".disposition",id:"disposition",level:2},{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o-3",level:4},{value:".getContent()",id:"getContent",level:2},{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o-4",level:4},{value:".name",id:"name",level:2},{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o-5",level:4},{value:".path",id:"path",level:2},{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o-6",level:4},{value:".platformPath",id:"platformPath",level:2},{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o-7",level:4},{value:".type",id:"type",level:2},{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o-8",level:4}];function c(e){const n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Objetos anexo permite referenciar arquivos dentro de um objeto",(0,s.jsx)(n.a,{href:"/docs/pt/19/API/EmailObjectClass",children:(0,s.jsx)(n.code,{children:"Email"})}),". Objetos anexos s\xe3o criados usando o comando ",(0,s.jsx)(n.a,{href:"#mail-new-attachment",children:(0,s.jsx)(n.code,{children:"MAIL New attachment"})}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"Objeto-anexos",children:"Objeto anexos"}),"\n",(0,s.jsx)(n.p,{children:"Objetos anexos oferecem as propriedades e fun\xe7\xf5es apenas leitura abaixo:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{})})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsx)(n.tr,{children:(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.a,{href:"#cid",children:[(0,s.jsx)(n.strong,{children:".cid"})," : Text"]}),"\xa0\xa0\xa0\xa0 a ID do anexo"]})}),(0,s.jsx)(n.tr,{children:(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.a,{href:"#disposition",children:[(0,s.jsx)(n.strong,{children:".disposition"})," : Text"]}),"\xa0\xa0\xa0\xa0o valor do cabe\xe7alho ",(0,s.jsx)(n.code,{children:"Content-Disposition"})]})}),(0,s.jsx)(n.tr,{children:(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.a,{href:"#getcontent",children:[(0,s.jsx)(n.strong,{children:".getContent()"})," : Blob"]}),"\xa0\xa0\xa0\xa0retorna o conte\xfado do objeto attachment em um BLOB"]})}),(0,s.jsx)(n.tr,{children:(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.a,{href:"#name",children:[(0,s.jsx)(n.strong,{children:".name"})," : Text"]}),"\xa0\xa0\xa0\xa0o nome e extens\xe3o do anexo"]})}),(0,s.jsx)(n.tr,{children:(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.a,{href:"#path",children:[(0,s.jsx)(n.strong,{children:".path"})," : Text"]}),"\xa0\xa0\xa0\xa0o caminho POSIX do arquivo anexo, se este existir"]})}),(0,s.jsx)(n.tr,{children:(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.a,{href:"#platformpath",children:[(0,s.jsx)(n.strong,{children:".platformPath"})," : Text"]}),"\xa0\xa0\xa0\xa0A propriedade ",(0,s.jsx)(n.code,{children:".platformPath"})," devolve"]})}),(0,s.jsx)(n.tr,{children:(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.a,{href:"#type",children:[(0,s.jsx)(n.strong,{children:".type"})," : Text"]}),"\xa0\xa0\xa0\xa0o ",(0,s.jsx)(n.code,{children:"content-type"})," do ficheiro anexo"]})})]})]}),"\n",(0,s.jsx)(n.h2,{id:"MAIL-New-attachment",children:"MAIL New attachment"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"MAIL New attachment"}),"( ",(0,s.jsx)(n.em,{children:"path"})," : Text { ; ",(0,s.jsx)(n.em,{children:"name"})," : Text {; ",(0,s.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,s.jsx)(n.em,{children:"type"})," : Text { ; ",(0,s.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:"MAIL New attachment"}),"( ",(0,s.jsx)(n.em,{children:"blob"})," : Blob { ; ",(0,s.jsx)(n.em,{children:"name"})," : Text {; ",(0,s.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,s.jsx)(n.em,{children:"type"})," : Text { ; ",(0,s.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{style:{textAlign:"center"}}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"path"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"Pode passar uma rota ou um Blob para definir o anexo."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"blob"}),(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"Blob contendo o anexo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"name"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"Nome + extens\xe3o usado pelo cliente email para designar o anexo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cid"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:'ID do anexo (apenas mensagens HTML), ou " " se nenhum cid for exigido'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"type"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"Valor do cabe\xe7alho content-type"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"disposition"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:'Valor do cabe\xe7alho content-disposition: "inline" ou "attachment".'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultados"}),(0,s.jsx)(n.td,{children:"4D. MailAttachment"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(n.td,{children:"Objeto anexo"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"|"}),"\n",(0,s.jsx)(n.h4,{id:"Descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["Comando ",(0,s.jsx)(n.code,{children:"MAIL New attachment"})," permite criar um objeto anexo que adicione um objeto ",(0,s.jsx)(n.a,{href:"/docs/pt/19/API/EmailObjectClass#email-object",children:"Email"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Pode passar um caminho ou um Blob para definir o anexo."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If you use a ",(0,s.jsx)(n.em,{children:"path"}),", pass a ",(0,s.jsx)(n.strong,{children:"text"})," value containing the path of the attachment file, expressed with the system syntax. Pode passar um nome de rota completo ou um nome de arquivo simples (em cujo caso 4D vai pesquisar para o arquivo no mesmo diret\xf3rio como o arquivo projeto)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If you use a ",(0,s.jsx)(n.em,{children:"blob"}),", pass a ",(0,s.jsx)(n.strong,{children:"BLOB"})," value containing the attachment itself."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["O par\xe2metro opcional ",(0,s.jsx)(n.em,{children:"name"})," permite passar o nome e extens\xe3o para ser usado pelo cliente email para designar o anexo. Se ",(0,s.jsx)(n.em,{children:"name"})," for omitido e:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"passar uma rota de arquivo, o nome e extens\xe3o do arquivo \xe9 usado,"}),"\n",(0,s.jsx)(n.li,{children:"passar um BLOB, um nome aleat\xf3rio sem extens\xe3o \xe9 gerado automaticamente."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["O par\xe2metro opcional ",(0,s.jsx)(n.em,{children:"cid"})," permite passar uma ID interna para o anexo. A ID \xe9 o valor do cabe\xe7alho ",(0,s.jsx)(n.code,{children:"Content-Id"}),", vai ser usado apenas em mensagens HTML. O cid associa o anexo com uma refer\xeancia definida no corpo da mensagem usando uma tag HTML tais como",(0,s.jsx)(n.code,{children:'\\&#060;img src="cid:ID"&#062;'}),". Isso significa que os conte\xfados do anexo (por exemplo uma imagem) deve ser exibida dentro da mensagem do cliente mail. O resultado final deve variar dependendo do cliente mail. Pode passar uma string vazia em ",(0,s.jsx)(n.em,{children:"cid"})," se n\xe3o quiser usar esse par\xe2metro."]}),"\n",(0,s.jsxs)(n.p,{children:["Pode usar o par\xe2metro opcional ",(0,s.jsx)(n.em,{children:"type"})," para estabe\xe7ecer explicitamente o ",(0,s.jsx)(n.code,{children:"content-type"}),' do arquivo anexo. Por exemplo, pode passar uma string definindo um tipo MIME ("video/mpeg"). Esse valor de content-type vai ser estabelecido para o anexo, independente de sua extens\xe3o. Para saber mais sobre tipos MIME veja a p\xe1gina sobre tipos MIME ',(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/MIME",children:"em Wikipedia"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Como padr\xe3o, se o par\xe2metro ",(0,s.jsx)(n.em,{children:"type"})," for omitido ou conter uma string vazia, o ",(0,s.jsx)(n.code,{children:"content-type"})," do arquivo anexo \xe9 baseado em sua extens\xe3o. As regras abaixo s\xe3o aplicadas aos tipos MIME:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Extens\xe3o"}),(0,s.jsx)(n.th,{children:"Tipo"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"jpg, jpeg"}),(0,s.jsx)(n.td,{children:"image/jpeg"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"png"}),(0,s.jsx)(n.td,{children:"image/png"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"gif"}),(0,s.jsx)(n.td,{children:"image/gif"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pdf"}),(0,s.jsx)(n.td,{children:"application/pdf"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"doc"}),(0,s.jsx)(n.td,{children:"application/msword"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"xls"}),(0,s.jsx)(n.td,{children:"application/vnd.ms-excel"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ppt"}),(0,s.jsx)(n.td,{children:"application/vnd.ms-powerpoint"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"zip"}),(0,s.jsx)(n.td,{children:"application/zip"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"gz"}),(0,s.jsx)(n.td,{children:"application/gzip"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"json"}),(0,s.jsx)(n.td,{children:"application/json"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"js"}),(0,s.jsx)(n.td,{children:"application/javascript"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ps"}),(0,s.jsx)(n.td,{children:"application/postscript"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"xml"}),(0,s.jsx)(n.td,{children:"application/xml"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"htm, html"}),(0,s.jsx)(n.td,{children:"text/html"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"mp3"}),(0,s.jsx)(n.td,{children:"audio/mpeg"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"outro"})}),(0,s.jsx)(n.td,{children:"application/octet-stream"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["O par\xe2metro opcional ",(0,s.jsx)(n.em,{children:"disposition"})," permite passar o cabe\xe7alho ",(0,s.jsx)(n.code,{children:"content-disposition"}),' do anexo. Pode passar uma das constantes abaixo da constante tema de "Mail":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metros"}),(0,s.jsx)(n.th,{children:"Valor"}),(0,s.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"mail disposition attachment"}),(0,s.jsx)(n.td,{children:'"attachment"'}),(0,s.jsx)(n.td,{children:'Estabelece o valor de cabe\xe7alho Content-disposition para "attachment" que significa que o arquivo anexo deve ser fornecido como um link na mensagem.'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"mail disposition inline"}),(0,s.jsx)(n.td,{children:'"inline"'}),(0,s.jsx)(n.td,{children:'Estabelece o valor de cabe\xe7alho Content-disposition para "inline", o que significa que o anexo deve ser renderizado dentro do conte\xfado da mensagem, no local "cid". A renderiza\xe7\xe3o depende do cliente mail.'})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Como padr\xe3o, se o par\xe2metro ",(0,s.jsx)(n.em,{children:"disposition"})," for omitido:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["se o par\xe2metro ",(0,s.jsx)(n.em,{children:"cid"})," for usado, o cabe\xe7alho ",(0,s.jsx)(n.code,{children:"Content-disposition"}),' \xe9 estabelecido como "inline",']}),"\n",(0,s.jsxs)(n.li,{children:["se o par\xe2metro ",(0,s.jsx)(n.em,{children:"cid"})," n\xe3o for passado ou estiver vazio, o cabe\xe7alho ",(0,s.jsx)(n.code,{children:"Content-disposition"}),' \xe9 estabelecido para "attachment".']}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"Exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"Se quiser enviar um email com um arquivo selecionado pelo usu\xe1rio como um anexo e uma imagem embebida no corpo HTML:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'$doc:=Select document("";"*";"Please select a file to attach";0)\nIf (OK=1) //If a document was selected C_OBJECT($email;$server;$transporter)\n\n$server:=New object\n$server.host:="smtp.mail.com"\n$server.user:="test_user@mail.com"\n$server.password:="p@ssw@rd"\n$transporter:=SMTP New transporter($server)\n\n$email:=New object\n$email.from:="test_user@mail.com"\n$email.to:="test_user@mail.com"\n$email.subject:="This is a test message with attachments"\n\n//add a link to download file\n$email.attachments:=New collection(MAIL New attachment(Document))\n//insert an inline picture (use a cid)\n$email.attachments[1]:=MAIL New attachment("c:\\\\Pictures\\\\4D.jpg";"";"4D")\n\n$email.htmlBody:="<html>"+\\\n"<body>Hello World!"+\\\n"<img src=\'cid:4D\' >"+\\\n"</body>"+\\\n"</head>"+\\\n"</html>"\n\n$transporter.send($email) //send mail End if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"Exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Se quiser enviar um email com uma \xe1rea 4D Write pro como um anexo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'C_BLOB($blob)\nWP EXPORT VARIABLE(WPArea;$blob;wk docx) C_OBJECT($email;$server;$transporter)\n\n$server:=New object\n$server.host:="smtp.mail.com"\n$server.user:="user@mail.com"\n$server.password:="p@ssw@rd"\n$transporter:=SMTP New transporter($server)\n\n$email:=New object\n$email.from:="user@mail.com"\n$email.to:="customer@mail.com"\n$email.subject:="New annual report"\n$email.textBody:="Please find enclosed our latest annual report."\n$email.attachments:=New collection(MAIL New attachment($blob;"Annual report.docx"))\n\n$transporter.send($email)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"4D-MailAttachmentnew",children:"4D. MailAttachment.new()"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"4D.MailAttachment.new"}),"( ",(0,s.jsx)(n.em,{children:"path"})," : Text { ; ",(0,s.jsx)(n.em,{children:"name"})," : Text {; ",(0,s.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,s.jsx)(n.em,{children:"type"})," : Text { ; ",(0,s.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:"4D.MailAttachment.new"}),"( ",(0,s.jsx)(n.em,{children:"blob"})," : Blob { ; ",(0,s.jsx)(n.em,{children:"name"})," : Text {; ",(0,s.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,s.jsx)(n.em,{children:"type"})," : Text { ; ",(0,s.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{style:{textAlign:"center"}}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"path"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"Pode passar uma rota ou um Blob para definir o anexo."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"blob"}),(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"Blob contendo o anexo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"name"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"Nome + extens\xe3o usado pelo cliente email para designar o anexo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cid"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:'ID do anexo (apenas mensagens HTML), ou " " se nenhum cid for exigido'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"type"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"Valor do cabe\xe7alho content-type"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"disposition"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:'Valor do cabe\xe7alho content-disposition: "inline" ou "attachment".'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultados"}),(0,s.jsx)(n.td,{children:"4D. MailAttachment"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(n.td,{children:"Objeto anexo"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"|"}),"\n",(0,s.jsx)(n.h4,{id:"Descri\xe7\xe3o-1",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["A fun\xe7\xe3o ",(0,s.jsx)(n.code,{children:"4D. MailAttachment.new()"})," cria e devolve um novo objecto do tipo ",(0,s.jsx)(n.code,{children:"4D. MailAttachment"}),". . Isso \xe9 id\xeantico ao comando ",(0,s.jsx)(n.a,{href:"#mail-new-attachment",children:(0,s.jsx)(n.code,{children:"MAIL New attachment"})})," (atalho)."]}),"\n",(0,s.jsx)(n.h2,{id:"cid",children:".cid"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:".cid"})," : Text"]}),"\n",(0,s.jsx)(n.h4,{id:"Descri\xe7\xe3o-2",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["A propriedade ",(0,s.jsx)(n.code,{children:".cid"})," cont\xe9m  a ID do anexo. Essa funcionalidade \xe9 usada em mensagens HTML apenas. Se essa propriedade faltar, o arquivo \xe9 manejado como um anexo simples (link)."]}),"\n",(0,s.jsx)(n.h2,{id:"disposition",children:".disposition"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:".disposition"})," : Text"]}),"\n",(0,s.jsx)(n.h4,{id:"Descri\xe7\xe3o-3",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["A propriedade ",(0,s.jsx)(n.code,{children:".disposition"})," cont\xe9m o valor do cabe\xe7alho ",(0,s.jsx)(n.code,{children:"Content-Disposition"}),". Dois valores eset\xe3o dispon\xedveis:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'"inline": o anexo \xe9 renderizado dentro dos conte\xfados da mensagem, no local "cid". A renderiza\xe7\xe3o depende do cliente mail.'}),"\n",(0,s.jsx)(n.li,{children:'"attachment": o anexo \xe9 fornecido como um link na mensagem.'}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"getContent",children:".getContent()"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:".getContent()"})," : Blob"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{style:{textAlign:"center"}}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultados"}),(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(n.td,{children:"Conte\xfado do anexo"})]})})]}),"\n",(0,s.jsx)(n.p,{children:"|"}),"\n",(0,s.jsx)(n.h4,{id:"Descri\xe7\xe3o-4",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["A fun\xe7\xe3o ",(0,s.jsx)(n.code,{children:".getContent()"})," retorna o conte\xfado do objeto attachment em um BLOB. You can use this method with attachment objects received by the ",(0,s.jsx)(n.a,{href:"#mail-convert-from-mime",children:(0,s.jsx)(n.code,{children:"MAIL Convert from MIME"})})," command."]}),"\n",(0,s.jsx)(n.h2,{id:"name",children:".name"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:".name"})," : Text"]}),"\n",(0,s.jsx)(n.h4,{id:"Descri\xe7\xe3o-5",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["A propriedade ",(0,s.jsx)(n.code,{children:".name"})," cont\xe9m o nome e extens\xe3o do anexo.  Como padr\xe3o, \xe9 o nome do arquivo, a n\xe3o ser que outro nome tenha sido especificado no comando ",(0,s.jsx)(n.a,{href:"#mail-new-attachment",children:(0,s.jsx)(n.code,{children:"MAIL New attachment"})}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"path",children:".path"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:".path"})," : Text"]}),"\n",(0,s.jsx)(n.h4,{id:"Descri\xe7\xe3o-6",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["A propriedade ",(0,s.jsx)(n.code,{children:".path"})," cont\xe9m o caminho POSIX do arquivo anexo, se este existir."]}),"\n",(0,s.jsx)(n.h2,{id:"platformPath",children:".platformPath"}),"\n",(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Release"}),(0,s.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"19"}),(0,s.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:".platformPath"})," : Text"]}),"\n",(0,s.jsx)(n.h4,{id:"Descri\xe7\xe3o-7",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["A propriedade ",(0,s.jsx)(n.code,{children:".platformPath"})," devolve A propriedade ",(0,s.jsx)(n.code,{children:".platformPath"})," devolve."]}),"\n",(0,s.jsx)(n.h2,{id:"type",children:".type"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:".type"})," : Text"]}),"\n",(0,s.jsx)(n.h4,{id:"Descri\xe7\xe3o-8",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["A propriedade ",(0,s.jsx)(n.code,{children:".type"})," cont\xe9m o ",(0,s.jsx)(n.code,{children:"content-type"})," do ficheiro anexo. Se o tipo n\xe3o for passado explicitamente ao comando ",(0,s.jsx)(n.a,{href:"#mail-new-attachment",children:(0,s.jsx)(n.code,{children:"MAIL New attachment"})}),", o ",(0,s.jsx)(n.code,{children:"content-type"})," \xe9 baseado na sua extens\xe3o de arquivo."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},221020:(e,n,t)=>{var s=t(296540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var s,r={},l=null,c=null;for(s in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)d.call(n,s)&&!a.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:i,type:e,key:l,ref:c,props:r,_owner:o.current}}n.Fragment=r,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>o});var s=t(296540);const i={},r=s.createContext(i);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);