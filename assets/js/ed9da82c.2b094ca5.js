"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76678"],{848641:function(e,s,n){n.r(s),n.d(s,{metadata:()=>i,contentTitle:()=>d,default:()=>a,assets:()=>c,toc:()=>l,frontMatter:()=>t});var i=JSON.parse('{"id":"commands/session","title":"Session","description":"Session : 4D.Session","source":"@site/versioned_docs/version-20-R7/commands/session.md","sourceDirName":"commands","slug":"/commands/session","permalink":"/docs/commands/session","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fsession.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"session","title":"Session","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESUME PROCESS","permalink":"/docs/commands/resume-process"},"next":{"title":"Session info","permalink":"/docs/commands/session-info"}}'),r=n("785893"),o=n("250065");let t={id:"session",title:"Session",displayed_sidebar:"docs"},d=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"Web sessions",id:"web-sessions",level:4},{value:"Remote client sessions",id:"remote-client-sessions",level:4},{value:"Stored procedures session",id:"stored-procedures-session",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:3}];function h(e){let s={a:"a",br:"br",code:"code",details:"details",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Session"})," : 4D.Session"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Function result"}),(0,r.jsx)(s.td,{children:"4D.Session"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Session object"})]})})]}),"\n",(0,r.jsxs)(s.details,{children:[(0,r.jsx)(s.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Release"}),(0,r.jsx)(s.th,{children:"Changes"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"20 R5"}),(0,r.jsx)(s.td,{children:"Support of remote client and stored procedure sessions"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"18 R6"}),(0,r.jsx)(s.td,{children:"Added"})]})]})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"Session"})," command returns the ",(0,r.jsx)(s.code,{children:"Session"})," object corresponding to the current user session."]}),"\n",(0,r.jsx)(s.p,{children:"Depending on the process from which the command is called, the current user session can be:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["a web session (when ",(0,r.jsx)(s.a,{href:"/docs/WebServer/sessions#enabling-sessions",children:"scalable sessions are enabled"}),"),"]}),"\n",(0,r.jsx)(s.li,{children:"a remote client session,"}),"\n",(0,r.jsx)(s.li,{children:"the stored procedures session."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["For more information, see the ",(0,r.jsx)(s.a,{href:"../command/session.md-types",children:"Session types"})," paragraph."]}),"\n",(0,r.jsxs)(s.p,{children:["If the command is called from a non supported context (single-user application, scalable sessions disabled...), it returns ",(0,r.jsx)(s.em,{children:"Null"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"web-sessions",children:"Web sessions"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"Session"})," object of web sessions is available from any web process:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"On Web Authentication"}),", ",(0,r.jsx)(s.code,{children:"On Web Connection"}),", and ",(0,r.jsx)(s.code,{children:"On REST Authentication"})," database methods,"]}),"\n",(0,r.jsx)(s.li,{children:"code processed through 4D tags in semi-dynamic pages (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)"}),"\n",(0,r.jsx)(s.li,{children:'project methods with the "Available through 4D tags and URLs (4DACTION...)" attribute and called through 4DACTION/ urls,'}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication",children:(0,r.jsx)(s.code,{children:"On Mobile App Authentication"})})," and ",(0,r.jsx)(s.a,{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action",children:(0,r.jsx)(s.code,{children:"On Mobile App Action"})})," database methods for mobile requests,"]}),"\n",(0,r.jsxs)(s.li,{children:["ORDA functions ",(0,r.jsx)(s.a,{href:"/docs/REST/classFunctions",children:"called with REST requests"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["For more information on web user sessions, please refer to the ",(0,r.jsx)(s.a,{href:"/docs/WebServer/sessions",children:"Web Server Sessions"})," section."]}),"\n",(0,r.jsx)(s.h4,{id:"remote-client-sessions",children:"Remote client sessions"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"Session"})," object of remote client sessions is available from:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Project methods that have the ",(0,r.jsx)(s.a,{href:"/docs/Project/code-overview#execute-on-server",children:"Execute on Server"}),' attribute (they are executed in the "twinned" process of the client process),']}),"\n",(0,r.jsx)(s.li,{children:"Triggers,"}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"On Server Open Connection"})," and ",(0,r.jsx)(s.code,{children:"On Server Shutdown Connection"})," database methods."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["For more information on remote user sessions, please refer to the ",(0,r.jsx)(s.a,{href:"/docs/Desktop/clientServer#remote-user-sessions",children:(0,r.jsx)(s.strong,{children:"Remote client user sessions"})})," paragraph."]}),"\n",(0,r.jsx)(s.h4,{id:"stored-procedures-session",children:"Stored procedures session"}),"\n",(0,r.jsxs)(s.p,{children:["All stored procedure processes share the same virtual user session. The ",(0,r.jsx)(s.code,{children:"Session"})," object of stored procedures is available from:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["methods called with the ",(0,r.jsx)(s.a,{href:"/docs/commands/execute-on-server",children:(0,r.jsx)(s.code,{children:"Execute on server"})})," command,"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"On Server Startup"}),", ",(0,r.jsx)(s.code,{children:"On Server Shutdown"}),", ",(0,r.jsx)(s.code,{children:"On Backup Startup"}),", ",(0,r.jsx)(s.code,{children:"On Backup Shutdown"}),", and ",(0,r.jsx)(s.code,{children:"On System event"})," database methods"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["For information on stored procedures virtual user session, please refer to the ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4Dv20R5/4D/20-R5/4D-Server-and-the-4D-Language.300-6932726.en.html",children:"4D Server and the 4D Language"})," page."]}),"\n",(0,r.jsx)(s.h4,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(s.p,{children:["You have defined the ",(0,r.jsx)(s.code,{children:"action_Session"}),' method with attribute "Available through 4D tags and URLs". You call the method by entering the following URL in your browser:']}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"IP:port/4DACTION/action_Session\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'  //action_Session method\n Case of\n    :(Session#Null)\n       If(Session.hasPrivilege("WebAdmin")) //calling the hasPrivilege function\n          WEB SEND TEXT("4DACTION --\x3e Session is WebAdmin")\n       Else\n          WEB SEND TEXT("4DACTION --\x3e Session is not WebAdmin")\n       End if\n    Else\n       WEB SEND TEXT("4DACTION --\x3e Session is null")\n End case\n'})}),"\n",(0,r.jsx)(s.h3,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/commands/session-storage",children:"Session storage"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/API/SessionClass",children:"Session API"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/WebServer/sessions",children:"Web server user sessions"})]})]})}function a(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return t}});var i=n(667294);let r={},o=i.createContext(r);function t(e){let s=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);