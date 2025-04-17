"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96590"],{657680:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/restart-4d","title":"RESTART 4D","description":"RESTART 4D {( time {; message} )}","source":"@site/versioned_docs/version-20-R8/commands-legacy/restart-4d.md","sourceDirName":"commands-legacy","slug":"/commands/restart-4d","permalink":"/docs/20-R8/commands/restart-4d","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frestart-4d.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"restart-4d","title":"RESTART 4D","slug":"/commands/restart-4d","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RELOAD PROJECT","permalink":"/docs/20-R8/commands/reload-project"},"next":{"title":"SEND MESSAGE TO REMOTE USER","permalink":"/docs/20-R8/commands/send-message-to-remote-user"}}'),r=n("785893"),i=n("250065");let a={id:"restart-4d",title:"RESTART 4D",slug:"/commands/restart-4d",displayed_sidebar:"docs"},d=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let t={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"RESTART 4D"})," {( ",(0,r.jsx)(t.em,{children:"time"})," {; ",(0,r.jsx)(t.em,{children:"message"}),"} )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"time"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Time delay (seconds) before 4D restarts"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"message"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Text to display on client machines"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"RESTART 4D"})," command restarts the current 4D application."]}),"\n",(0,r.jsxs)(t.p,{children:["This command is mainly intended for use in the context of a merged application (client/server or single-user) and in conjunction with the ",(0,r.jsx)(t.a,{href:"/docs/20-R8/commands/set-update-folder",children:"SET UPDATE FOLDER"})," command. In this case, the automatic update process is launched: the new version of the application designated by ",(0,r.jsx)(t.a,{href:"/docs/20-R8/commands/set-update-folder",children:"SET UPDATE FOLDER"})," automatically replaces the current version at the time of the restart resulting from ",(0,r.jsx)(t.strong,{children:"RESTART 4D"}),". The pathname of the data file is saved and used automatically."]}),"\n",(0,r.jsxs)(t.p,{children:["If no update information was specified using the ",(0,r.jsx)(t.a,{href:"/docs/20-R8/commands/set-update-folder",children:"SET UPDATE FOLDER"})," command in the current session, the command simply restarts the 4D application with the current structure and data files."]}),"\n",(0,r.jsxs)(t.p,{children:["You can use the ",(0,r.jsx)(t.em,{children:"time"})," parameter to defer restarting the application in order to give client machines time to disconnect. You must pass a value in seconds for the ",(0,r.jsx)(t.em,{children:"time"}),". If you omit this parameter, the server application waits, for a maximum of 10 minutes, for all the client applications to be disconnected. After that, all client applications are automatically disconnected."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," The ",(0,r.jsx)(t.em,{children:"time"})," and ",(0,r.jsx)(t.em,{children:"message"})," parameters are only taken into account with server applications (they are ignored if the command is executed in a single-user or remote application)."]}),"\n",(0,r.jsxs)(t.p,{children:["The optional ",(0,r.jsx)(t.em,{children:"message"})," parameter displays a custom message for connected client applications."]}),"\n",(0,r.jsxs)(t.p,{children:["If the command is executed correctly, the OK system variable is set to 1; otherwise, it is set to 0 and the application restarts. You can intercept any errors generated by the command using a method installed using the ",(0,r.jsx)(t.a,{href:"/docs/20-R8/commands/on-err-call",children:"ON ERR CALL"})," command."]}),"\n",(0,r.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/20-R8/commands/last-update-log-path",children:"Last update log path"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/20-R8/commands/set-update-folder",children:"SET UPDATE FOLDER"})]}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"1292"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2713"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Modifies variables"}),(0,r.jsx)(t.td,{children:"OK, error"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return a}});var s=n(667294);let r={},i=s.createContext(r);function a(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);