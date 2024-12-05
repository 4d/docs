"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["71533"],{413296:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>o,assets:()=>l,toc:()=>h,frontMatter:()=>r});var s=JSON.parse('{"id":"API/MailAttachmentClass","title":"MailAttachment","description":"Attachment objects allow referencing files within a Email object. Attachment objects are created using the MAIL New attachment command.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/API/MailAttachmentClass.md","sourceDirName":"API","slug":"/API/MailAttachmentClass","permalink":"/docs/pt/API/MailAttachmentClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FMailAttachmentClass.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"MailAttachmentClass","title":"MailAttachment"},"sidebar":"docs","previous":{"title":"IMAPTransporter","permalink":"/docs/pt/API/IMAPTransporterClass"},"next":{"title":"OutgoingMessage","permalink":"/docs/pt/API/OutgoingMessageClass"}}'),i=t("785893"),d=t("250065");let r={id:"MailAttachmentClass",title:"MailAttachment"},c=void 0,l={},h=[{value:"Objeto anexos",id:"objeto-anexos",level:3},{value:"4D. MailAttachment.new()",id:"4d-mailattachmentnew",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:".cid",id:"cid",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:4},{value:".disposition",id:"disposition",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-2",level:4},{value:".getContent()",id:"getcontent",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-3",level:4},{value:".name",id:"name",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-4",level:4},{value:".path",id:"path",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-5",level:4},{value:".platformPath",id:"platformpath",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-6",level:4},{value:".size",id:"size",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-7",level:4},{value:".type",id:"type",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-8",level:4}];function a(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Attachment objects allow referencing files within a ",(0,i.jsx)(n.a,{href:"/docs/pt/API/EmailObjectClass",children:(0,i.jsx)(n.code,{children:"Email"})})," object. Attachment objects are created using the ",(0,i.jsx)(n.a,{href:"/docs/pt/commands/mail-new-attachment",children:(0,i.jsx)(n.code,{children:"MAIL New attachment"})})," command."]}),"\n",(0,i.jsx)(n.h3,{id:"objeto-anexos",children:"Objeto anexos"}),"\n",(0,i.jsx)(n.p,{children:"Objetos anexos oferecem as propriedades e fun\xe7\xf5es apenas leitura abaixo:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{})})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#cid",children:[(0,i.jsx)(n.strong,{children:".cid"})," : Text"]}),(0,i.jsx)(n.br,{})," the ID of the attachment"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#disposition",children:[(0,i.jsx)(n.strong,{children:".disposition"})," : Text"]}),(0,i.jsx)(n.br,{}),"the value of the ",(0,i.jsx)(n.code,{children:"Content-Disposition"})," header"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#getcontent",children:[(0,i.jsx)(n.strong,{children:".getContent()"})," : 4D.Blob"]}),(0,i.jsx)(n.br,{}),"returns the contents of the attachment object in a ",(0,i.jsx)(n.code,{children:"4D.Blob"})," object"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#name",children:[(0,i.jsx)(n.strong,{children:".name"})," : Text"]}),(0,i.jsx)(n.br,{}),"the name and extension of the attachment"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#path",children:[(0,i.jsx)(n.strong,{children:".path"})," : Text"]}),(0,i.jsx)(n.br,{}),"the POSIX path of the attachment file, if it exists"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#platformpath",children:[(0,i.jsx)(n.strong,{children:".platformPath"})," : Text"]}),(0,i.jsx)(n.br,{}),"the path of the attachment file expressed with the current platform syntax"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#size",children:[(0,i.jsx)(n.strong,{children:".size"})," : Integer"]}),(0,i.jsx)(n.br,{}),"the value of the ",(0,i.jsx)(n.code,{children:"size"})," header of the attachment file"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#type",children:[(0,i.jsx)(n.strong,{children:".type"})," : Text"]}),(0,i.jsx)(n.br,{}),"the ",(0,i.jsx)(n.code,{children:"content-type"})," of the attachment file"]})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"4d-mailattachmentnew",children:"4D. MailAttachment.new()"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"19 R2"}),(0,i.jsx)(n.td,{children:"Accepts 4D. File, 4D. ZipFile, 4D. Blob"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"4D.MailAttachment.new"}),"( ",(0,i.jsx)(n.em,{children:"file"})," : 4D.File { ; ",(0,i.jsx)(n.em,{children:"name"})," : Text {; ",(0,i.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,i.jsx)(n.em,{children:"type"})," : Text { ; ",(0,i.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"4D.MailAttachment.new"}),"( ",(0,i.jsx)(n.em,{children:"zipFile"})," : 4D.ZipFile { ; ",(0,i.jsx)(n.em,{children:"name"})," : Text {; ",(0,i.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,i.jsx)(n.em,{children:"type"})," : Text { ; ",(0,i.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"4D.MailAttachment.new"}),"( ",(0,i.jsx)(n.em,{children:"blob"})," : 4D.Blob { ; ",(0,i.jsx)(n.em,{children:"name"})," : Text {; ",(0,i.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,i.jsx)(n.em,{children:"type"})," : Text { ; ",(0,i.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"4D.MailAttachment.new"}),"( ",(0,i.jsx)(n.em,{children:"path"})," : Text { ; ",(0,i.jsx)(n.em,{children:"name"})," : Text {; ",(0,i.jsx)(n.em,{children:"cid"})," : Text{ ; ",(0,i.jsx)(n.em,{children:"type"})," : Text { ; ",(0,i.jsx)(n.em,{children:"disposition"})," :Text } } } } ) : 4D.MailAttachment"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe2metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"file"}),(0,i.jsx)(n.td,{children:"4D. File"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Par\xe2metros"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"zipFile"}),(0,i.jsx)(n.td,{children:"4D. ZipFile"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Arquivo zip"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"blob"}),(0,i.jsx)(n.td,{children:"4D. Blob"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Blob contendo o anexo"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"path"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Pode passar uma rota ou um Blob para definir o anexo."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"name"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Nome + extens\xe3o usado pelo cliente email para designar o anexo"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"cid"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:'ID do anexo (apenas mensagens HTML), ou " " se nenhum cid for exigido'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"type"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Valor do cabe\xe7alho content-type"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"disposition"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:'Valor do cabe\xe7alho content-disposition: "inline" ou "attachment".'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultados"}),(0,i.jsx)(n.td,{children:"4D. MailAttachment"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,i.jsx)(n.td,{children:"Objeto anexo"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"4D.MailAttachment.new()"})," function creates and returns a new object of the ",(0,i.jsx)(n.code,{children:"4D.MailAttachment"})," type. It is identical to the ",(0,i.jsx)(n.a,{href:"/docs/pt/commands/mail-new-attachment",children:(0,i.jsx)(n.code,{children:"MAIL New attachment"})})," command (shortcut)."]}),"\n",(0,i.jsx)(n.h2,{id:"cid",children:".cid"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".cid"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o-1",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".cid"})," property contains  the ID of the attachment. Essa funcionalidade \xe9 usada em mensagens HTML apenas. Se essa propriedade faltar, o arquivo \xe9 manejado como um anexo simples (link)."]}),"\n",(0,i.jsx)(n.h2,{id:"disposition",children:".disposition"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".disposition"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o-2",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".disposition"})," property contains the value of the ",(0,i.jsx)(n.code,{children:"Content-Disposition"})," header. Dois valores eset\xe3o dispon\xedveis:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'"inline": o anexo \xe9 renderizado dentro dos conte\xfados da mensagem, no local "cid". A renderiza\xe7\xe3o depende do cliente mail.'}),"\n",(0,i.jsx)(n.li,{children:'"attachment": o anexo \xe9 fornecido como um link na mensagem.'}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"getcontent",children:".getContent()"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".getContent()"})," : 4D.Blob"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe2metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultados"}),(0,i.jsx)(n.td,{children:"4D. Blob"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,i.jsx)(n.td,{children:"Conte\xfado do anexo"})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o-3",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".getContent()"})," function returns the contents of the attachment object in a ",(0,i.jsx)(n.code,{children:"4D.Blob"})," object. You can use this method with attachment objects received by the ",(0,i.jsx)(n.a,{href:"/docs/pt/API/EmailObjectClass#mail-convert-from-mime",children:(0,i.jsx)(n.code,{children:"MAIL Convert from MIME"})})," command."]}),"\n",(0,i.jsx)(n.h2,{id:"name",children:".name"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".name"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o-4",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".name"})," property contains the name and extension of the attachment.  By default, it is the name of the file, unless another name was specified in the ",(0,i.jsx)(n.a,{href:"/docs/pt/commands/mail-new-attachment",children:(0,i.jsx)(n.code,{children:"MAIL New attachment"})})," command."]}),"\n",(0,i.jsx)(n.h2,{id:"path",children:".path"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".path"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o-5",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".path"})," property contains the POSIX path of the attachment file, if it exists."]}),"\n",(0,i.jsx)(n.h2,{id:"platformpath",children:".platformPath"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"19"}),(0,i.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".platformPath"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o-6",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".platformPath"})," property returns the path of the attachment file expressed with the current platform syntax."]}),"\n",(0,i.jsx)(n.h2,{id:"size",children:".size"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".size"})," : Integer"]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o-7",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".size"})," property contains the value of the ",(0,i.jsx)(n.code,{children:"size"})," header of the attachment file. The ",(0,i.jsx)(n.code,{children:".size"})," property is returned when the MIME message defines a size header in the attachment part."]}),"\n",(0,i.jsx)(n.h2,{id:"type",children:".type"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".type"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o-8",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".type"})," property contains the ",(0,i.jsx)(n.code,{children:"content-type"})," of the attachment file. If this type is not explicitly passed to the ",(0,i.jsx)(n.a,{href:"/docs/pt/commands/mail-new-attachment",children:(0,i.jsx)(n.code,{children:"MAIL New attachment"})})," command, the ",(0,i.jsx)(n.code,{children:"content-type"})," is based on its file extension."]})]})}function o(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return r}});var s=t(667294);let i={},d=s.createContext(i);function r(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);