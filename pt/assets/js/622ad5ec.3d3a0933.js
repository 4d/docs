"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70378"],{840767:function(e,n,s){s.r(n),s.d(n,{metadata:()=>d,contentTitle:()=>t,default:()=>a,assets:()=>c,toc:()=>l,frontMatter:()=>o});var d=JSON.parse('{"id":"API/Transporter","title":"Classe Transporter","description":"Descri\xe7\xe3o","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/API/Transporter.md","sourceDirName":"API","slug":"/API/Transporter","permalink":"/docs/pt/19/API/Transporter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FTransporter.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"Transporter","title":"Classe Transporter"}}'),r=s("785893"),i=s("250065");let o={id:"Transporter",title:"Classe Transporter"},t=void 0,c={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:".acceptUnsecureConnection",id:"acceptunsecureconnection",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:4},{value:".authenticationMode",id:"authenticationmode",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-2",level:4},{value:".authenticationMode",id:"authenticationmode-1",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-3",level:4},{value:".authenticationMode",id:"authenticationmode-2",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-4",level:4},{value:".bodyCharset",id:"bodycharset",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-5",level:4},{value:".connectionTimeOut",id:"connectiontimeout",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-6",level:4},{value:".headerCharset",id:"headercharset",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-7",level:4},{value:".host",id:"host",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-8",level:4},{value:".logFile",id:"logfile",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-9",level:4},{value:".port",id:"port",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-10",level:4},{value:".sendTimeOut",id:"sendtimeout",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-11",level:4},{value:".user",id:"user",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-12",level:4},{value:".checkConnection()",id:"checkconnection",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-13",level:4},{value:"Objeto devolvido",id:"objeto-devolvido",level:4}];function h(e){let n={a:"a",code:"code",details:"details",em:"em",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsx)(n.h2,{id:"acceptunsecureconnection",children:".acceptUnsecureConnection"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".acceptUnsecureConnection"})," : Boolean"]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-1",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["A propriedade ",(0,r.jsx)(n.code,{children:".acceptUnsecureConnection"})," cont\xe9m ",(0,r.jsx)(n.strong,{children:"Verdadeiro"})," se 4D for permitido estabelecer uma liga\xe7\xe3o n\xe3o encriptada quando a liga\xe7\xe3o encriptada n\xe3o \xe9 poss\xedvel."]}),"\n",(0,r.jsxs)(n.p,{children:["Cont\xe9m ",(0,r.jsx)(n.strong,{children:"False"})," se conex\xf5es cifradas n\xe3o forem permitidas, neste caso um erro \xe9 retornado quando a conex\xe3o criptografada n\xe3o for poss\xedvel."]}),"\n",(0,r.jsx)(n.p,{children:"Est\xe3o dispon\xedveis portos seguros:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"SMTP"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"465: SMTPS"}),"\n",(0,r.jsx)(n.li,{children:"587 ou 25: SMTP com atualiza\xe7\xe3o STARTTLS se for compat[ivel com o servidor."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"IMAP"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"143: IMAP non-encrypted port"}),"\n",(0,r.jsx)(n.li,{children:"993: IMAP com atualiza\xe7\xe3o STARTTLS se for compat\xedvel com o servidor"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"POP3"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"110: Porta n\xe3o criptografada POP3"}),"\n",(0,r.jsx)(n.li,{children:"995: POP3 com atualiza\xe7\xe3o STARTTLS se suportado pelo servidor."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"authenticationmode",children:".authenticationMode"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".authenticationMode"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-2",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["A propriedade ",(0,r.jsx)(n.code,{children:".authenticationMode<"})," cont\xe9m o modo de autentica\xe7\xe3o utilizado para abrir a sess\xe3o no servidor de correio."]}),"\n",(0,r.jsx)(n.p,{children:"Por padr\xe3o, o modo mais seguro suportado pelo servidor \xe9 usado."}),"\n",(0,r.jsx)(n.p,{children:"Valores poss\xedveis:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Constantes"}),(0,r.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CRAM-MD5"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"IMAP authentication CRAM MD5"})}),(0,r.jsx)(n.td,{children:"Autentica\xe7\xe3o usando o protocolo CRAM-MD5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"LOGIN"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"IMAP authentication login"})}),(0,r.jsx)(n.td,{children:"Autentica\xe7\xe3o usando o protocolo LOGIN"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OAUTH2"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Autentica\xe7\xe3o IMAP OAUTH2"})}),(0,r.jsx)(n.td,{children:"Autentica\xe7\xe3o usando o protocolo OAuth2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PLAIN"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"IMAP authentication plain"})}),(0,r.jsx)(n.td,{children:"Autentica\xe7\xe3o usando o protocolo PLAIN"})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"authenticationmode-1",children:".authenticationMode"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".authenticationMode"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-3",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["A propriedade ",(0,r.jsx)(n.code,{children:".authenticationMode"})," cont\xe9m o modo de autentica\xe7\xe3o utilizado para abrir a sess\xe3o no servidor de correio."]}),"\n",(0,r.jsx)(n.p,{children:"Por padr\xe3o, o modo mais seguro suportado pelo servidor \xe9 usado."}),"\n",(0,r.jsx)(n.p,{children:"Valores poss\xedveis:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Constantes"}),(0,r.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"APOP"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Autentica\xe7\xe3o POP3 APOP"})}),(0,r.jsx)(n.td,{children:"Autentica\xe7\xe3o usando o protocolo APOP (POP3 apenas)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CRAM-MD5"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Autentica\xe7\xe3o POP3 CRAM-MD5"})}),(0,r.jsx)(n.td,{children:"Autentica\xe7\xe3o usando o protocolo CRAM-MD5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"LOGIN"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"POP3 authentication login"})}),(0,r.jsx)(n.td,{children:"Autentica\xe7\xe3o usando o protocolo LOGIN"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OAUTH2"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"POP3 authentication OAUTH2"})}),(0,r.jsx)(n.td,{children:"Autentica\xe7\xe3o usando o protocolo OAuth2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PLAIN"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Autentica\xe7\xe3o POP3 simples"})}),(0,r.jsx)(n.td,{children:"Autentica\xe7\xe3o usando o protocolo PLAIN"})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"authenticationmode-2",children:".authenticationMode"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".authenticationMode"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-4",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["A propriedade ",(0,r.jsx)(n.code,{children:".authenticationMode"})," cont\xe9m o modo de autentica\xe7\xe3o utilizado para abrir a sess\xe3o no servidor de correio."]}),"\n",(0,r.jsx)(n.p,{children:"Por padr\xe3o, o modo mais seguro suportado pelo servidor \xe9 usado."}),"\n",(0,r.jsx)(n.p,{children:"Valores poss\xedveis:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Constantes"}),(0,r.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CRAM-MD5"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"SMTP authentication CRAM MD5"})}),(0,r.jsx)(n.td,{children:"Autentica\xe7\xe3o usando o protocolo CRAM-MD5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"LOGIN"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"SMTP authentication login"})}),(0,r.jsx)(n.td,{children:"Autentica\xe7\xe3o usando o protocolo LOGIN"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OAUTH2"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"SMTP authentication OAUTH2"})}),(0,r.jsx)(n.td,{children:"Autentica\xe7\xe3o usando o protocolo OAuth2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PLAIN"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"SMTP authentication plain"})}),(0,r.jsx)(n.td,{children:"Autentica\xe7\xe3o usando o protocolo PLAIN"})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"bodycharset",children:".bodyCharset"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18"}),(0,r.jsx)(n.td,{children:"Suporte de UTF8 base64"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R5"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".bodyCharset"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-5",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["A propriedade ",(0,r.jsx)(n.code,{children:".bodyCharset"})," cont\xe9m   o charset e a codifica\xe7\xe3o utilizados para a parte do corpo do e-mail."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Valores poss\xedveis:"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metros"}),(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mail mode ISO2022JP"}),(0,r.jsx)(n.td,{children:"US-ASCII_ISO-2022-JP_UTF8_QP"}),(0,r.jsx)(n.td,{children:(0,r.jsxs)(n.ul,{children:[(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"headerCharset"}),": US-ASCII se for poss\xedvel, japon\xeas (ISO-2022-JP) & Quoted-printable se for poss\xedvel, do contr\xe1rio UTF-8 & Quoted-printable"]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"bodyCharset"}),": US-ASCII se poss\xedvel, japon\xeas (ISO-2022-JP) e 7 bits se for poss\xedvel, do contr\xe1rio UTF-8 & Quoted-printable"]})]})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mail mode ISO88591"}),(0,r.jsx)(n.td,{children:"ISO-8859-1"}),(0,r.jsx)(n.td,{children:(0,r.jsxs)(n.ul,{children:[(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"headerCharset"}),": ISO-8859-1 & Quoted-printable"]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"bodyCharset"}),": ISO-8859-1 & 8-bit"]})]})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mail mode UTF8"}),(0,r.jsx)(n.td,{children:"US-ASCII_UTF8_QP"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"headerCharset"})," & ",(0,r.jsx)(n.em,{children:"bodyCharset"}),": US-ASCII se poss\xedvel, caso contr\xe1rio UTF-8 & Quoted-printable (",(0,r.jsx)(n.strong,{children:"valor por defeito"}),")"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"modo de correio UTF8 na base64"}),(0,r.jsx)(n.td,{children:"US-ASCII_UTF8_B64"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"headerCharset"})," & ",(0,r.jsx)(n.em,{children:"bodyCharset"}),": US-ASCII se poss\xedvel, sen\xe3o UTF-8 & base64"]})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"connectiontimeout",children:".connectionTimeOut"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R5"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".connectionTimeOut"})," : Integer"]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-6",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["A propriedade ",(0,r.jsx)(n.code,{children:".sendTimeOut"})," cont\xe9m o tempo m\xe1ximo de espera (em segundos) de uma chamada para ",(0,r.jsx)(n.code,{children:".send( )"})," antes de ocorrer um timeout. ."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"headercharset",children:".headerCharset"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R5"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".headerCharset"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-7",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["A propriedade ",(0,r.jsx)(n.code,{children:".headerCharset"})," cont\xe9m  o charset e a codifica\xe7\xe3o utilizados para o cabe\xe7alho do correio eletr\xf4nico. O cabe\xe7alho inclui as seguintes partes do e-mail:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"assunto,"}),"\n",(0,r.jsx)(n.li,{children:"nome(s) de arquivo anexo,"}),"\n",(0,r.jsx)(n.li,{children:"email name."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Valores poss\xedveis:"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metros"}),(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mail mode ISO2022JP"}),(0,r.jsx)(n.td,{children:"US-ASCII_ISO-2022-JP_UTF8_QP"}),(0,r.jsx)(n.td,{children:(0,r.jsxs)(n.ul,{children:[(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"headerCharset"}),": US-ASCII se for poss\xedvel, japon\xeas (ISO-2022-JP) & Quoted-printable se for poss\xedvel, do contr\xe1rio UTF-8 & Quoted-printable"]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"bodyCharset"}),": US-ASCII se poss\xedvel, japon\xeas (ISO-2022-JP) e 7 bits se for poss\xedvel, do contr\xe1rio UTF-8 & Quoted-printable"]})]})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mail mode ISO88591"}),(0,r.jsx)(n.td,{children:"ISO-8859-1"}),(0,r.jsx)(n.td,{children:(0,r.jsxs)(n.ul,{children:[(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"headerCharset"}),": ISO-8859-1 & Quoted-printable"]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"bodyCharset"}),": ISO-8859-1 & 8-bit"]})]})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mail mode UTF8"}),(0,r.jsx)(n.td,{children:"US-ASCII_UTF8_QP"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"headerCharset"})," & ",(0,r.jsx)(n.em,{children:"bodyCharset"}),": US-ASCII se poss\xedvel, caso contr\xe1rio UTF-8 & Quoted-printable (valor por defeito)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"modo de correio UTF8 na base64"}),(0,r.jsx)(n.td,{children:"US-ASCII_UTF8_B64"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"headerCharset"})," & ",(0,r.jsx)(n.em,{children:"bodyCharset"}),": US-ASCII se poss\xedvel, sen\xe3o UTF-8 & base64"]})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"host",children:".host"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R5"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".host"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-8",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["A propriedade ",(0,r.jsx)(n.code,{children:".host"})," cont\xe9m o nome ou o endere\xe7o IP do servidor anfitri\xe3o. Utilizado para transac\xe7\xf5es postais (SMTP, POP3, IMAP)."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"logfile",children:".logFile"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R5"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".logFile"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-9",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["A propriedade ",(0,r.jsx)(n.code,{children:".logFile"})," cont\xe9m o caminho do arquivo de registo alargado definido (se existir) para a liga\xe7\xe3o de correio. Pode ser relativo (\xe0 pasta atual de Logs) ou absoluto."]}),"\n",(0,r.jsxs)(n.p,{children:["Ao contr\xe1rio dos arquivos de registo regulares (ativados atrav\xe9s do comando ",(0,r.jsx)(n.code,{children:"SET DATABASE PARAMETER"})," ), os arquivos de registo armazenam o conte\xfado MIME de todos os e-mails enviados e n\xe3o t\xeam qualquer limite de tamanho. Para mais informa\xe7\xf5es sobre arquivos de registo estendidos, consultar:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"SMTP connections"})," - ",(0,r.jsx)(n.a,{href:"/docs/pt/19/Admin/debugLogFiles#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt",children:"4DSMTPLog.txt"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"POP3 connections"})," - ",(0,r.jsx)(n.a,{href:"/docs/pt/19/Admin/debugLogFiles#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt",children:"4DPOP3Log.txt"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"IMAP connections"})," - ",(0,r.jsx)(n.a,{href:"/docs/pt/19/Admin/debugLogFiles#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt",children:"4DIMAPLog.txt"})]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"port",children:".port"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".port"})," : Integer"]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-10",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["A propriedade ",(0,r.jsx)(n.code,{children:".port"})," cont\xe9m  o n\xfamero do porto utilizado para as transa\xe7\xf5es postais. Por padr\xe3o, se a propriedade ",(0,r.jsx)(n.em,{children:"port"})," n\xe3o tiver sido definida no objeto ",(0,r.jsx)(n.em,{children:"server"})," (utilizado para criar o objecto transportador com ",(0,r.jsx)(n.code,{children:"SMTP New transporter"}),", ",(0,r.jsx)(n.code,{children:"POP3 New transporter"}),", ",(0,r.jsx)(n.code,{children:"IMAP New transporter"}),"), a porta utilizada \xe9:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"SMTP"})," - 587"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"POP3"})," - 995"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"IMAP"})," - 993"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"sendtimeout",children:".sendTimeOut"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".sendTimeOut"})," : Integer"]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-11",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["A propriedade ",(0,r.jsx)(n.code,{children:".connectionTimeOut"})," cont\xe9m  o tempo m\xe1ximo de espera (em segundos) de uma chamada para ",(0,r.jsx)(n.code,{children:".send( )"})," antes de ocorrer um timeout. Por padr\xe3o, se a propriedade ",(0,r.jsx)(n.code,{children:".sendTimeOut"})," n\xe3o tiver sido definida no objecto ",(0,r.jsx)(n.code,{children:"server"}),", \xe9 utilizado o valor 100."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"user",children:".user"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".user"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-12",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["A propriedade ",(0,r.jsx)(n.code,{children:".user"})," cont\xe9m  o nome de usu\xe1rio utilizado para autentica\xe7\xe3o no servidor de correio."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"checkconnection",children:".checkConnection()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".checkConnection()"})," : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultados"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsx)(n.td,{children:"Estado da liga\xe7\xe3o do objecto transportador"})]})})]}),"\n",(0,r.jsx)(n.p,{children:"|"}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-13",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["A fun\xe7\xe3o ",(0,r.jsx)(n.code,{children:".checkConnection()"}),"  verifica a liga\xe7\xe3o utilizando a informa\xe7\xe3o armazenada no objeto de transporte, recria a liga\xe7\xe3o, se necess\xe1rio, e devolve o estado. Esta fun\xe7\xe3o permite verificar se os valores fornecidos pelo utilizador s\xe3o v\xe1lidos e consistentes."]}),"\n",(0,r.jsx)(n.h4,{id:"objeto-devolvido",children:"Objeto devolvido"}),"\n",(0,r.jsx)(n.p,{children:"A fun\xe7\xe3o envia um pedido para o servidor de correio e devolve um objecto descrevendo o estado do correio. Este objeto pode conter as seguintes propriedades:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propriedade"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"success"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Verdadeiro se a verifica\xe7\xe3o for bem sucedida, Falso de outra forma"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"status"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"(apenas SMTP) C\xf3digo de estado devolvido pelo servidor de correio (0 no caso de um problema n\xe3o relacionado com o processamento de correio)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"statusText"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Mensagem de estado devolvida pelo servidor de correio, ou \xfaltimo erro devolvido na pilha de erros 4D"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"errors"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"collection"}),(0,r.jsx)(n.td,{children:"pilha de erros 4D (n\xe3o devolvida se for recebida uma resposta do servidor de correio)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"[ ].errCode"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"C\xf3digo de erro 4D"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"[ ].message"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Descri\xe7\xe3o do erro 4D"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"[ ].componentSignature"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Assinatura da componente interna que devolveu o erro"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return o}});var d=s(667294);let r={},i=d.createContext(r);function o(e){let n=d.useContext(i);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);