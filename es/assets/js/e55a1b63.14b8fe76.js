"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77958"],{591992:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>o});var i=JSON.parse('{"id":"commands/mail-convert-to-mime","title":"MAIL Convert to MIME","description":"Historia","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands/mail-convert-to-mime.md","sourceDirName":"commands","slug":"/commands/mail-convert-to-mime","permalink":"/docs/es/commands/mail-convert-to-mime","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fmail-convert-to-mime.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"mail-convert-to-mime","title":"MAIL Convert to MIME","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"MAIL Convert from MIME","permalink":"/docs/es/commands/mail-convert-from-mime"},"next":{"title":"MAIL New attachment","permalink":"/docs/es/commands/mail-new-attachment"}}'),s=t("785893"),r=t("250065");let o={id:"mail-convert-to-mime",title:"MAIL Convert to MIME",displayed_sidebar:"docs"},l=void 0,d={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4}];function a(e){let n={a:"a",blockquote:"blockquote",code:"code",details:"details",em:"em",h4:"h4",i:"i",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Lanzamiento"}),(0,s.jsx)(n.th,{children:"Modificaciones"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"17 R4"}),(0,s.jsx)(n.td,{children:"A\xf1adidos"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"17 R5"}),(0,s.jsx)(n.td,{children:"Modificado"})]})]})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"MAIL Convert to MIME"}),"( ",(0,s.jsx)(n.em,{children:"mail"})," : Object { ; ",(0,s.jsx)(n.em,{children:"options"})," : Object } ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metros"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{style:{textAlign:"center"}}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"mail"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,s.jsx)(n.td,{children:"Objeto Email"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"options"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,s.jsx)(n.td,{children:"Opciones de codificaci\xf3n y de charset del mail"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Result"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2190"}),(0,s.jsx)(n.td,{children:"Objeto email convertido en MIME"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.code,{children:"MAIL Convert to MIME"})," convierte un objeto email en texto MIME. Este comando es llamado internamente por ",(0,s.jsx)(n.a,{href:"/docs/es/API/SMTPTransporterClass#send",children:"SMTP_transporter.send()"})," para formatear el objeto email antes de enviarlo. Se puede utilizar para analizar el formato MIME del objeto."]}),"\n",(0,s.jsxs)(n.p,{children:["En ",(0,s.jsx)(n.em,{children:"mail"}),", pase el contenido y los detalles de la estructura del correo electr\xf3nico a convertir. Esto incluye informaci\xf3n como las direcciones de correo electr\xf3nico (remitente y destinatario(s)), el propio mensaje y el tipo de visualizaci\xf3n del mensaje."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["4D sigue la ",(0,s.jsx)(n.a,{href:"https://jmap.io/spec-mail.html",children:"especificaci\xf3n JMAP"})," para formatear el objeto email."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["En ",(0,s.jsx)(n.em,{children:"options"}),", puede configurar la codificaci\xf3n y el charset del mail. Las siguientes propiedades est\xe1n disponibles:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propiedad"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"headerCharset"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsxs)(n.td,{children:["Charset y codificaci\xf3n utilizados para las siguientes partes del correo electr\xf3nico: asunto, nombres de archivos adjuntos y atributo(s) del nombre del correo electr\xf3nico. Valores posibles:",(0,s.jsx)(n.table,{children:(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Valor"}),(0,s.jsx)(n.th,{children:"Comentario"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modo correo ISO2022JP"}),(0,s.jsx)(n.td,{children:"US-ASCII_ISO-2022-JP_UTF8_QP"}),(0,s.jsx)(n.td,{children:(0,s.jsxs)(n.ul,{children:[(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.i,{children:"headerCharset"}),": US-ASCII si es posible, japon\xe9s (ISO-2022-JP) & Quoted-printable si es posible, de lo contrario UTF-8 & Quoted-printable"]}),(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.i,{children:"bodyCharset"}),": US-ASCII si es posible, japon\xe9s (ISO-2022-JP) y 7 bits si es posible, de lo contrario UTF-8 y Quoted-printable"]})]})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modo correo ISO88591"}),(0,s.jsx)(n.td,{children:"ISO-8859-1"}),(0,s.jsx)(n.td,{children:(0,s.jsxs)(n.ul,{children:[(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.i,{children:"headerCharset"}),": ISO-8859-1 y Quoted-printable"]}),(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.i,{children:"bodyCharset"}),": ISO-8859-1 y 8 bits"]})]})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modo correo UTF8"}),(0,s.jsx)(n.td,{children:"US-ASCII_UTF8_QP"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.i,{children:"headerCharset"})," & ",(0,s.jsx)(n.i,{children:"bodyCharset"}),": US-ASCII si es posible, en caso contrario UTF-8 & Quoted-printable (",(0,s.jsx)(n.strong,{children:"valor por defecto"}),")"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modo correo UTF8 en base64"}),(0,s.jsx)(n.td,{children:"US-ASCII_UTF8_B64"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.i,{children:"headerCharset"})," & ",(0,s.jsx)(n.i,{children:"bodyCharset"}),": US-ASCII si es posible, de lo contrario UTF-8 & base64"]})]})]})})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bodyCharset"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"Charset y codificaci\xf3n utilizados para el contenido html y el texto del cuerpo del correo electr\xf3nico. Valores posibles: los mismos que para headerCharset (ver arriba)"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Si se omite el par\xe1metro ",(0,s.jsx)(n.em,{children:"options"}),", se utiliza la configuraci\xf3n del modo de correo UTF8 para las partes encabezado y cuerpo."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $mail: Object\nvar $mime: Text\n$mail:=New object\n\n// Creation of a mail\n$mail.from:="tsales@massmarket.com"\n$mail.subject:="Terrific Sale! This week only!"\n$mail.textBody:="Text format email"\n$mail.htmlBody:="<html><body>HTML format email</body></html>"\n$mail.to:=New collection\n$mail.to.push(New object ("email";"noreply@4d.com"))\n$mail.to.push(New object ("email";"test@4d.com"))\n\n// transform the mail object in MIME\n$mime:=MAIL Convert to MIME($mail)\n\n// Contents of $mime:\n// MIME-Version: 1.0\n// Date: Thu, 11 Oct 2018 15:42:25 GMT\n// Message-ID: <7CA5D25B2B5E0047A36F2E8CB30362E2>\n// Sender: tsales@massmarket.com\n// From: tsales@massmarket.com\n// To: noreply@4d.com\n// To: test@4d.com\n// Content-Type: multipart/alternative; boundary="E0AE5773D5E95245BBBD80DD0687E218"\n// Subject: Terrific Sale! This week only!\n//\n// --E0AE5773D5E95245BBBD80DD0687E218\n// Content-Type: text/plain; charset="UTF-8"\n// Content-Transfer-Encoding: quoted-printable\n//\n// Text format email\n// --E0AE5773D5E95245BBBD80DD0687E218\n// Content-Type: text/html; charset="UTF-8"\n// Content-Transfer-Encoding: quoted-printable\n//\n// <html><body>HTML format email</body></html>\n// --E0AE5773D5E95245BBBD80DD0687E218--\n'})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var i=t(667294);let s={},r=i.createContext(s);function o(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);