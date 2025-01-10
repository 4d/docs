"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22149"],{879990:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands/mail-convert-to-mime","title":"MAIL Convert to MIME","description":"Historique","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands/mail-convert-to-mime.md","sourceDirName":"commands","slug":"/commands/mail-convert-to-mime","permalink":"/docs/fr/commands/mail-convert-to-mime","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fmail-convert-to-mime.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"mail-convert-to-mime","title":"MAIL Convert to MIME","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"MAIL Convert from MIME","permalink":"/docs/fr/commands/mail-convert-from-mime"},"next":{"title":"MAIL New attachment","permalink":"/docs/fr/commands/mail-new-attachment"}}'),i=t("785893"),r=t("250065");let l={id:"mail-convert-to-mime",title:"MAIL Convert to MIME",displayed_sidebar:"docs"},d=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",blockquote:"blockquote",code:"code",details:"details",em:"em",h4:"h4",i:"i",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R4"}),(0,i.jsx)(n.td,{children:"Ajout"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R5"}),(0,i.jsx)(n.td,{children:"Modifi\xe9"})]})]})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"MAIL Convert to MIME"}),"( ",(0,i.jsx)(n.em,{children:"mail"})," : Object { ; ",(0,i.jsx)(n.em,{children:"options"})," : Object } ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tres"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mail"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,i.jsx)(n.td,{children:"Objet email"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"options"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,i.jsx)(n.td,{children:"Options d'encodage et de charset du mail"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"R\xe9sultat"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2190"}),(0,i.jsx)(n.td,{children:"Objet email converti en MIME"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.code,{children:"MAIL Convert to MIME"})," convertit un objet email en texte MIME. La commande ",(0,i.jsx)(n.code,{children:"MAIL Convert to MIME"})," convertit un objet email en texte MIME. Elle peut \xeatre utilis\xe9e pour analyser le format MIME de l'objet."]}),"\n",(0,i.jsxs)(n.p,{children:["Dans ",(0,i.jsx)(n.em,{children:"mail"}),", passez les \xe9l\xe9ments du contenu et de la structure de l'email \xe0 convertir. Cela inclut des informations telles que les adresses e-mail (exp\xe9diteur et destinataire(s)), le contenu de l'e-mail lui-m\xeame et son type d'affichage."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Le format des objets Email de 4D suit la ",(0,i.jsx)(n.a,{href:"https://jmap.io/spec-mail.html",children:"sp\xe9cification JMAP"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Dans ",(0,i.jsx)(n.em,{children:"options"}),", vous pouvez configurer l'encodage et le charset du mail. Les propri\xe9t\xe9s suivantes sont disponibles :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"headerCharset"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsxs)(n.td,{children:["Charset et encodage utilis\xe9s pour les parties de mail suivantes : le sujet, les noms de fichiers joints et le nom du mail. Valeurs possibles :",(0,i.jsx)(n.table,{children:(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Valeur"}),(0,i.jsx)(n.th,{children:"Commentaire"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Mode courrier ISO2022JP"}),(0,i.jsx)(n.td,{children:"US-ASCII_ISO-2022-JP_UTF8_QP"}),(0,i.jsx)(n.td,{children:(0,i.jsxs)(n.ul,{children:[(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.i,{children:"headerCharset"}),": US-ASCII si possible, japonais (ISO-2022-JP) & Quoted-printable si possible, sinon UTF-8 & Quoted-printable"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.i,{children:"bodyCharset"}),": US-ASCII si possible, japonais (ISO-2022-JP) & 7-bit si possible, sinon UTF-8 & Quoted-printable"]})]})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mode courrier ISO88591"}),(0,i.jsx)(n.td,{children:"ISO-8859-1"}),(0,i.jsx)(n.td,{children:(0,i.jsxs)(n.ul,{children:[(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.i,{children:"headerCharset"}),": ISO-8859-1 & Quoted-printable"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.i,{children:"bodyCharset"}),": ISO-8859-1 & 8-bit"]})]})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mode courrier UTF8"}),(0,i.jsx)(n.td,{children:"US-ASCII_UTF8_QP"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.i,{children:"headerCharset"})," & ",(0,i.jsx)(n.i,{children:"bodyCharset"}),": US-ASCII si possible, sinon UTF-8 & Quoted-printable (",(0,i.jsx)(n.strong,{children:"valeur par d\xe9faut"}),")"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mode courrier UTF8 en base64"}),(0,i.jsx)(n.td,{children:"US-ASCII_UTF8_B64"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.i,{children:"headerCharset"})," & ",(0,i.jsx)(n.i,{children:"bodyCharset"}),": US-ASCII si possible, sinon UTF-8 & base64"]})]})]})})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"bodyCharset"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Charset et encodage utilis\xe9s pour le contenu html et le texte du body du mail. Valeurs possibles : Identiques \xe0 celles de headerCharset (voir ci-dessus)"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Si le param\xe8tre ",(0,i.jsx)(n.em,{children:"options"})," est omis, la configuration mail mode UTF8 est utilis\xe9e pour les parties en-t\xeate et corps."]}),"\n",(0,i.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'var $mail: Object\nvar $mime: Text\n$mail:=New object\n\n// Creation of a mail\n$mail.from:="tsales@massmarket.com"\n$mail.subject:="Terrific Sale! This week only!"\n$mail.textBody:="Text format email"\n$mail.htmlBody:="<html><body>HTML format email</body></html>"\n$mail.to:=New collection\n$mail.to.push(New object ("email";"noreply@4d.com"))\n$mail.to.push(New object ("email";"test@4d.com"))\n\n// transform the mail object in MIME\n$mime:=MAIL Convert to MIME($mail)\n\n// Contents of $mime:\n// MIME-Version: 1.0\n// Date: Thu, 11 Oct 2018 15:42:25 GMT\n// Message-ID: <7CA5D25B2B5E0047A36F2E8CB30362E2>\n// Sender: tsales@massmarket.com\n// From: tsales@massmarket.com\n// To: noreply@4d.com\n// To: test@4d.com\n// Content-Type: multipart/alternative; boundary="E0AE5773D5E95245BBBD80DD0687E218"\n// Subject: Terrific Sale! This week only!\n//\n// --E0AE5773D5E95245BBBD80DD0687E218\n// Content-Type: text/plain; charset="UTF-8"\n// Content-Transfer-Encoding: quoted-printable\n//\n// Text format email\n// --E0AE5773D5E95245BBBD80DD0687E218\n// Content-Type: text/html; charset="UTF-8"\n// Content-Transfer-Encoding: quoted-printable\n//\n// <html><body>HTML format email</body></html>\n// --E0AE5773D5E95245BBBD80DD0687E218--\n'})}),"\n",(0,i.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"1604"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"&amp;amp;amp;amp;amp;amp;amp;amp;check;"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return l}});var s=t(667294);let i={},r=s.createContext(i);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);