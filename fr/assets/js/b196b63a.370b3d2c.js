"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["98989"],{296324:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>o,metadata:()=>t,assets:()=>d,toc:()=>l,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/send-message-to-remote-user","title":"SEND MESSAGE TO REMOTE USER","description":"SEND MESSAGE TO REMOTE USER ( message {; sessionUtilisateur} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/send-message-to-remote-user.md","sourceDirName":"commands-legacy","slug":"/commands/send-message-to-remote-user","permalink":"/docs/fr/commands/send-message-to-remote-user","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsend-message-to-remote-user.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"send-message-to-remote-user","title":"SEND MESSAGE TO REMOTE USER","slug":"/commands/send-message-to-remote-user","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESTART 4D","permalink":"/docs/fr/commands/restart-4d"},"next":{"title":"SET DATABASE LOCALIZATION","permalink":"/docs/fr/commands/set-database-localization"}}'),r=n("785893"),i=n("250065");let o={id:"send-message-to-remote-user",title:"SEND MESSAGE TO REMOTE USER",slug:"/commands/send-message-to-remote-user",displayed_sidebar:"docs"},a=void 0,d={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let s={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"SEND MESSAGE TO REMOTE USER"})," ( ",(0,r.jsx)(s.em,{children:"message"})," {; ",(0,r.jsx)(s.em,{children:"sessionUtilisateur"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Param\xe8tre"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"message"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Texte envoy\xe9 \xe0 l'utilisateur"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"sessionUtilisateur"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"ID de la session de l'utilisateur"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La commande ",(0,r.jsx)(s.strong,{children:"SEND MESSAGE TO REMOTE USER"})," permet d'envoyer un message \xe0 tous les utilisateurs distants ou \xe0 un utilisateur distant sp\xe9cifique."]}),"\n",(0,r.jsxs)(s.p,{children:["Dans ",(0,r.jsx)(s.em,{children:"message"}),", passez le texte du message \xe0 afficher. Il sera affich\xe9 sous forme d'alerte ou de notification sur l'\xe9cran du ou des utilisateur(s) de la session."]}),"\n",(0,r.jsxs)(s.p,{children:["Le param\xe8tre optionnel ",(0,r.jsx)(s.em,{children:"sessionUtilisateur"})," peut \xeatre utilis\xe9 pour d\xe9signer un utilisateur sp\xe9cifique en passant l'ID de sa session. Vous pouvez r\xe9cup\xe9rer l'ID de la session \xe0 l'aide de la commande ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/process-activity",children:"Process activity"}),". Si ",(0,r.jsx)(s.em,{children:"sessionUtilisateur"})," est omis, le message est envoy\xe9 \xe0 tous les utilisateurs."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note"})," : Cette commande ne peut \xeatre ex\xe9cut\xe9e que sur 4D Server. Si la m\xe9thode appelant la commande est ex\xe9cut\xe9e localement sur un 4D distant ou monoposte, ",(0,r.jsx)(s.strong,{children:"SEND MESSAGE TO REMOTE USER"})," ne fait rien."]}),"\n",(0,r.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(s.p,{children:"Vous souhaitez envoyer un message \xe0 tous les utilisateurs, puis \xe0 un utilisateur sp\xe9cifique :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0// M\xe9thode \xe0 ex\xe9cuter sur le serveur\n\xa0var $message : Text\n\xa0var $element : Object\n\xa0var $userCol : Collection\n\xa0\n\xa0\xa0// r\xe9cup\xe9rez l\'information sur la session\n\xa0$userCol:=(Get process activity(Sessions only)).sessions\n\xa0\n\xa0\xa0// envoyez un message \xe0 tous les utilisateurs\n\xa0$message:="Une op\xe9ration de maintenance est pr\xe9vue \xe0 22h. Le serveur sera red\xe9marr\xe9. Veuillez vous d\xe9connecter avant 22h."\n\xa0SEND MESSAGE TO REMOTE USER($message)\n\xa0\n\xa0\xa0// envoyez un message \xe0 un seul utilisateur, "Vanessa"\n\xa0$message:="Salut Vanessa"\n\xa0$userCol:=Get process activity(Sessions only).sessions.query("systemUserName = :1";"Vanessa")\n\xa0For each($element;$userCol)\n\xa0\xa0\xa0\xa0SEND MESSAGE TO REMOTE USER($message;$element.ID)\n\xa0End for each\n'})}),"\n",(0,r.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/fr/commands/drop-remote-user",children:"DROP REMOTE USER"})}),"\n",(0,r.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(s.td,{children:"1632"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread safe"}),(0,r.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return o}});var t=n(667294);let r={},i=t.createContext(r);function o(e){let s=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);