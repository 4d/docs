"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48571"],{709215:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>t,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/send-message-to-remote-user","title":"SEND MESSAGE TO REMOTE USER","description":"SEND MESSAGE TO REMOTE USER ( mensaje {; sesionUsuario} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/send-message-to-remote-user.md","sourceDirName":"commands-legacy","slug":"/commands/send-message-to-remote-user","permalink":"/docs/es/20-R7/commands/send-message-to-remote-user","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsend-message-to-remote-user.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"send-message-to-remote-user","title":"SEND MESSAGE TO REMOTE USER","slug":"/commands/send-message-to-remote-user","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESTART 4D","permalink":"/docs/es/20-R7/commands/restart-4d"},"next":{"title":"SET DATABASE LOCALIZATION","permalink":"/docs/es/20-R7/commands/set-database-localization"}}'),o=n("785893"),a=n("250065");let t={id:"send-message-to-remote-user",title:"SEND MESSAGE TO REMOTE USER",slug:"/commands/send-message-to-remote-user",displayed_sidebar:"docs"},i=void 0,d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let s={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"SEND MESSAGE TO REMOTE USER"})," ( ",(0,o.jsx)(s.em,{children:"mensaje"})," {; ",(0,o.jsx)(s.em,{children:"sesionUsuario"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe1metro"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"mensaje"}),(0,o.jsx)(s.td,{children:"Text"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Texto enviado al usuario"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"sesionUsuario"}),(0,o.jsx)(s.td,{children:"Text"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"ID de sesi\xf3n del usuario"})]})]})]}),"\n",(0,o.jsx)(s.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(s.p,{children:["El comando ",(0,o.jsx)(s.strong,{children:"SEND MESSAGE TO REMOTE USER"})," env\xeda un mensaje a todos los usuarios remotos o a un usuario remoto espec\xedfico."]}),"\n",(0,o.jsxs)(s.p,{children:["En ",(0,o.jsx)(s.em,{children:"mensaje"}),", pase el texto del mensaje que se mostrar\xe1. Se mostrar\xe1 como una alerta o una notificaci\xf3n en la pantalla de los usuarios de la sesi\xf3n."]}),"\n",(0,o.jsxs)(s.p,{children:["El par\xe1metro opcional ",(0,o.jsx)(s.em,{children:"sesionUsuario"})," se puede utilizar para designar un usuario espec\xedfico al pasar su ID de sesi\xf3n. Puede recuperar el ID de sesi\xf3n con el comando ",(0,o.jsx)(s.a,{href:"/docs/es/20-R7/commands/process-activity",children:"Process activity"}),". Si se omite ",(0,o.jsx)(s.em,{children:"sesionUsuario"}),", el mensaje se env\xeda a todos los usuarios."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Nota"}),": este comando solo puede ejecutarse en 4D Server. Si el m\xe9todo que llama al comando se ejecuta localmente en un 4D remoto o monopuesto, ",(0,o.jsx)(s.strong,{children:"SEND MESSAGE TO REMOTE USER"})," no hace nada."]}),"\n",(0,o.jsx)(s.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsx)(s.p,{children:"Desea enviar un mensaje a todos los usuarios y luego enviar un mensaje a un usuario espec\xedfico:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo a ejecutar en el servidor\n\xa0var $message : Text\n\xa0var $element : Object\n\xa0var $userCol : Collection\n\xa0\n\xa0\xa0// recuperar informaci\xf3n de la sesi\xf3n\n\xa0$userCol:=(Get process activity(Sessions only)).sessions\n\xa0\n\xa0\xa0// enviar mensaje a todos los usuarios\n\xa0$message:="Una operaci\xf3n de mantenimiento est\xe1 programada para las 10 p. m. El servidor se reiniciar\xe1. Por favor, cierre la sesi\xf3n antes de las 10 p.m."\n\xa0SEND MESSAGE TO REMOTE USER($message)\n\xa0\n\xa0\xa0// enviar mensaje a un solo usuario, "Vanessa"\n\xa0$message:="Hello Vanessa"\n\xa0$userCol:=Get process activity(Sessions only).sessions.query("systemUserName = :1";"Vanessa")\n\xa0For each($element;$userCol)\n\xa0\xa0\xa0\xa0SEND MESSAGE TO REMOTE USER($message;$element.ID)\n\xa0End for each\n'})}),"\n",(0,o.jsx)(s.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.a,{href:"/docs/es/20-R7/commands/drop-remote-user",children:"DROP REMOTE USER"})}),"\n",(0,o.jsx)(s.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"N\xfamero de comando"}),(0,o.jsx)(s.td,{children:"1632"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Hilo seguro"}),(0,o.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return t}});var r=n(667294);let o={},a=r.createContext(o);function t(e){let s=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);