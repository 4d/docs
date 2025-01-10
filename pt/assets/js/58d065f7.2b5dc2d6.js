"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78203"],{536746:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>d,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/send-message-to-remote-user","title":"SEND MESSAGE TO REMOTE USER","description":"SEND MESSAGE TO REMOTE USER ( message {; userSession} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/send-message-to-remote-user.md","sourceDirName":"commands-legacy","slug":"/commands/send-message-to-remote-user","permalink":"/docs/pt/commands/send-message-to-remote-user","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsend-message-to-remote-user.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"send-message-to-remote-user","title":"SEND MESSAGE TO REMOTE USER","slug":"/commands/send-message-to-remote-user","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESTART 4D","permalink":"/docs/pt/commands/restart-4d"},"next":{"title":"SET DATABASE LOCALIZATION","permalink":"/docs/pt/commands/set-database-localization"}}'),r=n("785893"),o=n("250065");let d={id:"send-message-to-remote-user",title:"SEND MESSAGE TO REMOTE USER",slug:"/commands/send-message-to-remote-user",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let s={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"SEND MESSAGE TO REMOTE USER"})," ( ",(0,r.jsx)(s.em,{children:"message"})," {; ",(0,r.jsx)(s.em,{children:"userSession"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe2metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"message"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Text sent to user"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"userSession"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"User's session ID"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.strong,{children:"SEND MESSAGE TO REMOTE USER"})," command sends a message to all remote users or to a specific remote user."]}),"\n",(0,r.jsxs)(s.p,{children:["In ",(0,r.jsx)(s.em,{children:"message"}),", pass the text of the message to be displayed. It will be displayed as an alert or a notification on the screen of the session user(s)."]}),"\n",(0,r.jsxs)(s.p,{children:["The optional ",(0,r.jsx)(s.em,{children:"userSession"})," parameter can be used to designate a specific user by passing their session ID. You can retrieve the session ID with the ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/process-activity",children:"Process activity"})," command. If ",(0,r.jsx)(s.em,{children:"userSession"})," is omitted, the message is sent to all users."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note"}),": This command can only be executed on 4D Server. If the method calling the command is executed locally on a remote client or on 4D single user, ",(0,r.jsx)(s.strong,{children:"SEND MESSAGE TO REMOTE USER"})," does nothing."]}),"\n",(0,r.jsx)(s.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(s.p,{children:"You want to send a message to all users, then send a message to a specific user:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0// Method to be executed on server\n\xa0var $message : Text\n\xa0var $element : Object\n\xa0var $userCol : Collection\n\xa0\n\xa0\xa0// retrieve session information\n\xa0$userCol:=(Get process activity(Sessions only)).sessions\n\xa0\n\xa0\xa0// send message to all users\n\xa0$message:="A maintenance operation is scheduled for 10pm. The server will be restarted. Please log out before 10pm."\n\xa0SEND MESSAGE TO REMOTE USER($message)\n\xa0\n\xa0\xa0// send message to a single user, "Vanessa"\n\xa0$message:="Hello Vanessa"\n\xa0$userCol:=Get process activity(Sessions only).sessions.query("systemUserName = :1";"Vanessa")\n\xa0For each($element;$userCol)\n\xa0\xa0\xa0\xa0SEND MESSAGE TO REMOTE USER($message;$element.ID)\n\xa0End for each\n'})}),"\n",(0,r.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/pt/commands/drop-remote-user",children:"DROP REMOTE USER"})}),"\n",(0,r.jsx)(s.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"N\xfamero do comando"}),(0,r.jsx)(s.td,{children:"1632"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread-seguro"}),(0,r.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return d}});var t=n(667294);let r={},o=t.createContext(r);function d(e){let s=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);