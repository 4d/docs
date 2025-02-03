"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6818"],{411064:function(e,n,r){r.r(n),r.d(n,{default:()=>c,frontMatter:()=>o,metadata:()=>t,assets:()=>m,toc:()=>a,contentTitle:()=>l});var t=JSON.parse('{"id":"commands/mail-convert-from-mime","title":"MAIL Convert from MIME","description":"Historique","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands/mail-convert-from-mime.md","sourceDirName":"commands","slug":"/commands/mail-convert-from-mime","permalink":"/docs/fr/20-R7/commands/mail-convert-from-mime","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fmail-convert-from-mime.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"mail-convert-from-mime","title":"MAIL Convert from MIME","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"IMAP New transporter","permalink":"/docs/fr/20-R7/commands/imap-new-transporter"},"next":{"title":"MAIL Convert to MIME","permalink":"/docs/fr/20-R7/commands/mail-convert-to-mime"}}'),s=r("785893"),i=r("250065");let o={id:"mail-convert-from-mime",title:"MAIL Convert from MIME",displayed_sidebar:"docs"},l=void 0,m={},a=[{value:"Description",id:"description",level:4},{value:"Objet retourn\xe9",id:"objet-retourn\xe9",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function d(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Release"}),(0,s.jsx)(n.th,{children:"Modifications"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"18"}),(0,s.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"MAIL Convert from MIME"}),"( ",(0,s.jsx)(n.em,{children:"mime"})," : Blob ) : Object",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:"MAIL Convert from MIME"}),"( ",(0,s.jsx)(n.em,{children:"mime"})," : Text ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tres"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"center"}}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"mime"}),(0,s.jsx)(n.td,{children:"Blob, Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,s.jsx)(n.td,{children:"Email en MIME"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2190"}),(0,s.jsx)(n.td,{children:"Objet email"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.code,{children:"MAIL Convert from MIME"})," convertit un document MIME en un objet email valide."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Le format des objets Email de 4D suit la ",(0,s.jsx)(n.a,{href:"https://jmap.io/spec-mail.html",children:"sp\xe9cification JMAP"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Passez dans ",(0,s.jsx)(n.em,{children:"mime"})," un document MIME valide \xe0 convertir. Il peut \xeatre fourni par tout type de serveur ou d'application de messagerie. Il peut \xeatre fourni par tout type de serveur ou d'application de messagerie. Si le MIME provient d'un fichier, il est recommand\xe9 d'utiliser un param\xe8tre BLOB pour \xe9viter les probl\xe8mes li\xe9s aux conversions de charset et de retours \xe0 la ligne."]}),"\n",(0,s.jsx)(n.h4,{id:"objet-retourn\xe9",children:"Objet retourn\xe9"}),"\n",(0,s.jsx)(n.p,{children:"Objet email."}),"\n",(0,s.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,s.jsx)(n.p,{children:"Vous souhaitez charger un template mail enregistr\xe9 au format MIME dans un document texte et l'envoyer par email :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $mime: Blob\nvar $mail;$server;$transporter;$status: Object\n\n$mime:=File("/PACKAGE/Mails/templateMail.txt").getContent())\n\n$mail:=MAIL Convert from MIME($mime)\n$mail.to:="smith@mail.com"\n$mail.subject:="Hello world"\n\n$server:=New object\n$server.host:="smtp.gmail.com"\n$server.port:=465\n$server.user:="test@gmail.com"\n$server.password:="XXXX"\n\n$transporter:=SMTP New transporter($server)\n$status:=$transporter.send($mail)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,s.jsx)(n.p,{children:"Dans cet exemple, vous envoyez directement un document 4D Write Pro contenant des images :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $mime: Blob\nvar $email;$server;$transporter;$status: Object\n\n// Export Mime du document 4D Write Pro\nWP EXPORT VARIABLE(WParea;$mime;wk mime html)\n\n// convertir la variable Mime de 4D Write Pro en objet email\n$email:=MAIL Convert from MIME($mime)\n\n// Remplir les en-t\xeates de l\'objet email\n$email.subject:="4D Write Pro HTML body"\n$email.from:="YourEmail@gmail.com"\n$email.to:="RecipientEmail@mail.com"\n\n$server:=New object\n$server.host:="smtp.gmail.com"\n$server.port:=465\n$server.user:="YourEmail@gmail.com"\n$server.password:="XXXX"\n\n$transporter:=SMTP New transporter($server)\n$status:=$transporter.send($email)\n'})}),"\n",(0,s.jsx)(n.p,{children:"| mime | BLOB, Text | \u2192  | Email in MIME |\n| Function result | Object | \u2190 | Email object |"}),"\n",(0,s.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"1681"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"&amp;amp;amp;amp;amp;amp;amp;amp;check;"})]})]})]})]})}function c(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return o}});var t=r(667294);let s={},i=t.createContext(s);function o(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);