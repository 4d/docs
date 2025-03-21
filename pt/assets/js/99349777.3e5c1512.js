"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66644"],{320703:function(e,n,r){r.r(n),r.d(n,{default:()=>c,frontMatter:()=>s,metadata:()=>t,assets:()=>d,toc:()=>a,contentTitle:()=>l});var t=JSON.parse('{"id":"commands/mail-convert-from-mime","title":"MAIL Convert from MIME","description":"Hist\xf3ria","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands/mail-convert-from-mime.md","sourceDirName":"commands","slug":"/commands/mail-convert-from-mime","permalink":"/docs/pt/20-R7/commands/mail-convert-from-mime","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fmail-convert-from-mime.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"mail-convert-from-mime","title":"MAIL Convert from MIME","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"IMAP New transporter","permalink":"/docs/pt/20-R7/commands/imap-new-transporter"},"next":{"title":"MAIL Convert to MIME","permalink":"/docs/pt/20-R7/commands/mail-convert-to-mime"}}'),o=r("785893"),i=r("250065");let s={id:"mail-convert-from-mime",title:"MAIL Convert from MIME",displayed_sidebar:"docs"},l=void 0,d={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Objeto devolvido",id:"objeto-devolvido",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Propriedades",id:"propriedades",level:2}];function m(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.details,{children:[(0,o.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Release"}),(0,o.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"18"}),(0,o.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"MAIL Convert from MIME"}),"( ",(0,o.jsx)(n.em,{children:"mime"})," : Blob ) : Object",(0,o.jsx)(n.br,{}),(0,o.jsx)(n.strong,{children:"MAIL Convert from MIME"}),"( ",(0,o.jsx)(n.em,{children:"mime"})," : Text ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{style:{textAlign:"center"}}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"mime"}),(0,o.jsx)(n.td,{children:"Blob, Text"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,o.jsx)(n.td,{children:"E-mail no MIME"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultados"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"\u2190"}),(0,o.jsx)(n.td,{children:"Objeto Email"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"MAIL Convert from MIME"})," command converts a MIME document into a valid email object."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["O formato dos objetos de email 4D segue a ",(0,o.jsx)(n.a,{href:"https://jmap.io/spec-mail.html",children:"especifica\xe7\xe3o JMAP"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Passe em ",(0,o.jsx)(n.em,{children:"mime"})," um documento MIME v\xe1lido para converter. Pode ser fornecido por qualquer servidor de correio ou aplicativo. Pode ser fornecido por qualquer servidor de correio ou aplicativo. Se o MIME vier de um arquivo, \xe9 recomendado utilizar um par\xe2metro BLOB para evitar problemas relacionados ao conjunto de caracteres e convers\xf5es de quebra de linha."]}),"\n",(0,o.jsx)(n.h2,{id:"objeto-devolvido",children:"Objeto devolvido"}),"\n",(0,o.jsx)(n.p,{children:"Objeto Email."}),"\n",(0,o.jsx)(n.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,o.jsx)(n.p,{children:"Se quiser carregar um modelo de e-mail salvo como MIME em um documento de texto e enviar um e-mail:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'var $mime: Blob\nvar $mail;$server;$transporter;$status: Object\n\n$mime:=File("/PACKAGE/Mails/templateMail.txt").getContent())\n\n$mail:=MAIL Convert from MIME($mime)\n$mail.to:="smith@mail.com"\n$mail.subject:="Hello world"\n\n$server:=New object\n$server.host:="smtp.gmail.com"\n$server.port:=465\n$server.user:="test@gmail.com"\n$server.password:="XXXX"\n\n$transporter:=SMTP New transporter($server)\n$status:=$transporter.send($mail)\n'})}),"\n",(0,o.jsx)(n.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,o.jsx)(n.p,{children:"Neste exemplo, voc\xea envia diretamente um documento 4D Write Pro contendo fotos:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'var $mime: Blob\nvar $email;$server;$transporter;$status: Object\n\n// Mime export of the 4D Write Pro document WP EXPORT VARIABLE(WParea;$mime;wk mime html)\n\n// convert 4D Write Pro Mime variable in mail object\n$email:=MAIL Convert from MIME($mime)\n\n// Fill your mail object headers\n$email.subject:="4D Write Pro HTML body"\n$email.from:="YourEmail@gmail.com"\n$email.to:="RecipientEmail@mail.com"\n\n$server:=New object\n$server.host:="smtp.gmail.com"\n$server.port:=465\n$server.user:="YourEmail@gmail.com"\n$server.password:="XXXX"\n\n$transporter:=SMTP New transporter($server)\n$status:=$transporter.send($email)\n'})}),"\n",(0,o.jsx)(n.p,{children:"| mime | BLOB, Text | \u2192  | Email in MIME |\n| Function result | Object | \u2190 | Email object |"}),"\n",(0,o.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Command number"}),(0,o.jsx)(n.td,{children:"1681"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread safe"}),(0,o.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function c(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return s}});var t=r(667294);let o={},i=t.createContext(o);function s(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);