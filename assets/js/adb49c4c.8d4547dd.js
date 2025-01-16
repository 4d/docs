"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9873"],{669377:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"commands/mail-convert-to-mime","title":"MAIL Convert to MIME","description":"History","source":"@site/versioned_docs/version-20-R8/commands/mail-convert-to-mime.md","sourceDirName":"commands","slug":"/commands/mail-convert-to-mime","permalink":"/docs/commands/mail-convert-to-mime","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fmail-convert-to-mime.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"mail-convert-to-mime","title":"MAIL Convert to MIME","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"MAIL Convert from MIME","permalink":"/docs/commands/mail-convert-from-mime"},"next":{"title":"MAIL New attachment","permalink":"/docs/commands/mail-new-attachment"}}'),i=t("785893"),r=t("250065");let d={id:"mail-convert-to-mime",title:"MAIL Convert to MIME",displayed_sidebar:"docs"},l=void 0,o={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",blockquote:"blockquote",code:"code",details:"details",em:"em",h4:"h4",i:"i",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Changes"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R4"}),(0,i.jsx)(n.td,{children:"Added"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R5"}),(0,i.jsx)(n.td,{children:"Modified"})]})]})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"MAIL Convert to MIME"}),"( ",(0,i.jsx)(n.em,{children:"mail"})," : Object { ; ",(0,i.jsx)(n.em,{children:"options"})," : Object } ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mail"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,i.jsx)(n.td,{children:"Email object"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"options"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,i.jsx)(n.td,{children:"Charset and encoding mail options"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Result"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2190"}),(0,i.jsx)(n.td,{children:"Email object converted to MIME"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"MAIL Convert to MIME"})," command converts an email object into MIME text. This command is called internally by ",(0,i.jsx)(n.a,{href:"/docs/API/SMTPTransporterClass#send",children:"SMTP_transporter.send()"})," to format the email object before sending it. It can be used to analyze the MIME format of the object."]}),"\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.em,{children:"mail"}),", pass the content and the structure details of the email to convert. This includes information such as the email addresses (sender and recipient(s)), the message itself, and the type of display for the message."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["4D follows the ",(0,i.jsx)(n.a,{href:"https://jmap.io/spec-mail.html",children:"JMAP specification"})," to format the email object."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.em,{children:"options"}),", you can set a specific charset and encoding configuration for the mail. The following properties are available:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"headerCharset"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsxs)(n.td,{children:["Charset and encoding used for the following parts of the email: subject, attachment filenames, and email name attribute(s). Possible values:",(0,i.jsx)(n.table,{children:(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constant"}),(0,i.jsx)(n.th,{children:"Value"}),(0,i.jsx)(n.th,{children:"Comment"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mail mode ISO2022JP"}),(0,i.jsx)(n.td,{children:"US-ASCII_ISO-2022-JP_UTF8_QP"}),(0,i.jsx)(n.td,{children:(0,i.jsxs)(n.ul,{children:[(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.i,{children:"headerCharset"}),": US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.i,{children:"bodyCharset"}),": US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable"]})]})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mail mode ISO88591"}),(0,i.jsx)(n.td,{children:"ISO-8859-1"}),(0,i.jsx)(n.td,{children:(0,i.jsxs)(n.ul,{children:[(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.i,{children:"headerCharset"}),": ISO-8859-1 & Quoted-printable"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.i,{children:"bodyCharset"}),": ISO-8859-1 & 8-bit"]})]})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mail mode UTF8"}),(0,i.jsx)(n.td,{children:"US-ASCII_UTF8_QP"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.i,{children:"headerCharset"})," & ",(0,i.jsx)(n.i,{children:"bodyCharset"}),": US-ASCII if possible, otherwise UTF-8 & Quoted-printable (",(0,i.jsx)(n.strong,{children:"default value"}),")"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mail mode UTF8 in base64"}),(0,i.jsx)(n.td,{children:"US-ASCII_UTF8_B64"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.i,{children:"headerCharset"})," & ",(0,i.jsx)(n.i,{children:"bodyCharset"}),": US-ASCII if possible, otherwise UTF-8 & base64"]})]})]})})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"bodyCharset"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Charset and encoding used for the html and text body contents of the email. Possible values: Same as for headerCharset (see above)"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.em,{children:"options"})," parameter is omitted, the mail mode UTF8 configuration is used for header and body parts."]}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'var $mail: Object\nvar $mime: Text\n$mail:=New object\n\n// Creation of a mail\n$mail.from:="tsales@massmarket.com"\n$mail.subject:="Terrific Sale! This week only!"\n$mail.textBody:="Text format email"\n$mail.htmlBody:="<html><body>HTML format email</body></html>"\n$mail.to:=New collection\n$mail.to.push(New object ("email";"noreply@4d.com"))\n$mail.to.push(New object ("email";"test@4d.com"))\n\n// transform the mail object in MIME\n$mime:=MAIL Convert to MIME($mail)\n\n// Contents of $mime:\n// MIME-Version: 1.0\n// Date: Thu, 11 Oct 2018 15:42:25 GMT\n// Message-ID: <7CA5D25B2B5E0047A36F2E8CB30362E2>\n// Sender: tsales@massmarket.com\n// From: tsales@massmarket.com\n// To: noreply@4d.com\n// To: test@4d.com\n// Content-Type: multipart/alternative; boundary="E0AE5773D5E95245BBBD80DD0687E218"\n// Subject: Terrific Sale! This week only!\n//\n// --E0AE5773D5E95245BBBD80DD0687E218\n// Content-Type: text/plain; charset="UTF-8"\n// Content-Transfer-Encoding: quoted-printable\n//\n// Text format email\n// --E0AE5773D5E95245BBBD80DD0687E218\n// Content-Type: text/html; charset="UTF-8"\n// Content-Transfer-Encoding: quoted-printable\n//\n// <html><body>HTML format email</body></html>\n// --E0AE5773D5E95245BBBD80DD0687E218--\n'})}),"\n",(0,i.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"1604"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var s=t(667294);let i={},r=s.createContext(i);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);