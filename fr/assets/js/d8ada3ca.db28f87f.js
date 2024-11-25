"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["156"],{66642:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>d,default:()=>u,assets:()=>c,toc:()=>a,frontMatter:()=>i});var t=JSON.parse('{"id":"commands-legacy/drop-remote-user","title":"DROP REMOTE USER","description":"DROP REMOTE USER ( sessionUtilisateur )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/drop-remote-user.md","sourceDirName":"commands-legacy","slug":"/commands/drop-remote-user","permalink":"/docs/fr/commands/drop-remote-user","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdrop-remote-user.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"drop-remote-user","title":"DROP REMOTE USER","slug":"/commands/drop-remote-user","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Database measures","permalink":"/docs/fr/commands/database-measures"},"next":{"title":"ds","permalink":"/docs/fr/commands/ds"}}'),r=n("785893"),o=n("250065");let i={id:"drop-remote-user",title:"DROP REMOTE USER",slug:"/commands/drop-remote-user",displayed_sidebar:"docs"},d=void 0,c={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function l(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"DROP REMOTE USER"})," ( ",(0,r.jsx)(s.em,{children:"sessionUtilisateur"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Param\xe8tre"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"sessionUtilisateur"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"ID de la session de l'utilisateur"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La commande ",(0,r.jsx)(s.strong,{children:"DROP REMOTE USER"})," permet de d\xe9connecter un utilisateur distant sp\xe9cifique connect\xe9 \xe0 4D Server."]}),"\n",(0,r.jsxs)(s.p,{children:["Dans ",(0,r.jsx)(s.em,{children:"userSession"}),", passez l'ID de la session de l'utilisateur que vous souhaitez d\xe9connecter du serveur. Vous pouvez r\xe9cup\xe9rer l'ID de la session \xe0 l'aide de la commande ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/process-activity",children:"Process activity"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note :"})," Cette commande est ex\xe9cut\xe9e de mani\xe8re asynchrone et uniquement sur 4D Server. Si la m\xe9thode appelant la commande est ex\xe9cut\xe9e localement sur un 4D distant ou monoposte, ",(0,r.jsx)(s.strong,{children:"DROP REMOTE USER"})," ne fait rien."]}),"\n",(0,r.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(s.p,{children:"Vous souhaitez supprimer un utilisateur distant sp\xe9cifique :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0// M\xe9thode \xe0 ex\xe9cuter sur le serveur\n\xa0var $userCol : Collection\n\xa0var $element : Object\n\xa0\n\xa0\xa0//d\xe9connectez l\'utilisateur distant Vanessa\n\xa0$userCol:=Get process activity(Sessions only).sessions.query("systemUserName = :1";"Vanessa")\n\xa0For each($element;$userCol)\n\xa0\xa0\xa0\xa0DROP REMOTE USER($element.ID)\n\xa0End for each\n'})}),"\n",(0,r.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/fr/commands/reject-new-remote-connections",children:"REJECT NEW REMOTE CONNECTIONS"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/fr/commands/send-message-to-remote-user",children:"SEND MESSAGE TO REMOTE USER"})]})]})}function u(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return i}});var t=n(667294);let r={},o=t.createContext(r);function i(e){let s=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);