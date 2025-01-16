"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86616"],{687573:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>d,metadata:()=>o,assets:()=>c,toc:()=>a,contentTitle:()=>t});var o=JSON.parse('{"id":"commands/session","title":"Session","description":"Session : 4D.Session","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands/session.md","sourceDirName":"commands","slug":"/commands/session","permalink":"/docs/pt/20-R7/commands/session","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fsession.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"session","title":"Session","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESUME PROCESS","permalink":"/docs/pt/20-R7/commands/resume-process"},"next":{"title":"Session info","permalink":"/docs/pt/20-R7/commands/session-info"}}'),i=n("785893"),r=n("250065");let d={id:"session",title:"Session",displayed_sidebar:"docs"},t=void 0,c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Sess\xf5es web",id:"sess\xf5es-web",level:4},{value:"Sess\xf5es cliente remoto",id:"sess\xf5es-cliente-remoto",level:4},{value:"a sess\xe3o de procedimentos armazenados",id:"a-sess\xe3o-de-procedimentos-armazenados",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:3},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let s={a:"a",br:"br",code:"code",details:"details",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Session"})," : 4D.Session"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Par\xe2metro"}),(0,i.jsx)(s.th,{children:"Tipo"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Resultado"}),(0,i.jsx)(s.td,{children:"4D. Session"}),(0,i.jsx)(s.td,{children:"\u2190"}),(0,i.jsx)(s.td,{children:"Objecto Session"})]})})]}),"\n",(0,i.jsxs)(s.details,{children:[(0,i.jsx)(s.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Release"}),(0,i.jsx)(s.th,{children:"Mudan\xe7as"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"20 R5"}),(0,i.jsx)(s.td,{children:"Support of remote client and stored procedure sessions"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"18 R6"}),(0,i.jsx)(s.td,{children:"Adicionado"})]})]})]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"Session"})," command returns the ",(0,i.jsx)(s.code,{children:"Session"})," object corresponding to the current user session."]}),"\n",(0,i.jsx)(s.p,{children:"Dependendo do processo a partir do qual o comando \xe9 chamado, a sess\xe3o atual do usu\xe1rio pode ser:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["uma sess\xe3o web (quando ",(0,i.jsx)(s.a,{href:"/docs/pt/20-R7/WebServer/sessions#enabling-sessions",children:"sess\xf5es escal\xe1veis s\xe3o ativadas"}),"),"]}),"\n",(0,i.jsx)(s.li,{children:"uma sess\xe3o de cliente remoto,"}),"\n",(0,i.jsx)(s.li,{children:"a sess\xe3o de procedimentos armazenados."}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["For more information, see the ",(0,i.jsx)(s.a,{href:"../command/session.md-types",children:"Session types"})," paragraph."]}),"\n",(0,i.jsxs)(s.p,{children:["If the command is called from a non supported context (single-user application, scalable sessions disabled...), it returns ",(0,i.jsx)(s.em,{children:"Null"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"sess\xf5es-web",children:"Sess\xf5es web"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"Session"})," object of web sessions is available from any web process:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"On Web Authentication"}),", ",(0,i.jsx)(s.code,{children:"On Web Connection"}),", and ",(0,i.jsx)(s.code,{children:"On REST Authentication"})," database methods,"]}),"\n",(0,i.jsx)(s.li,{children:"c\xf3digo processado a trav\xe9s das etiquetas 4D nas p\xe1ginas semidin\xe2micas (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)"}),"\n",(0,i.jsx)(s.li,{children:'os m\xe9todos projeto com o atributo "Available through 4D tags and URLs (4DACTION...)" e chamados atrav\xe9s de 4DACTION/ urls,'}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication",children:(0,i.jsx)(s.code,{children:"On Mobile App Authentication"})})," and ",(0,i.jsx)(s.a,{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action",children:(0,i.jsx)(s.code,{children:"On Mobile App Action"})})," database methods for mobile requests,"]}),"\n",(0,i.jsxs)(s.li,{children:["Fun\xe7\xf5es ORDA ",(0,i.jsx)(s.a,{href:"/docs/pt/20-R7/REST/classFunctions",children:"chamadas com solicita\xe7\xf5es REST"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["For more information on web user sessions, please refer to the ",(0,i.jsx)(s.a,{href:"/docs/pt/20-R7/WebServer/sessions",children:"Web Server Sessions"})," section."]}),"\n",(0,i.jsx)(s.h4,{id:"sess\xf5es-cliente-remoto",children:"Sess\xf5es cliente remoto"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"Session"})," object of remote client sessions is available from:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["M\xe9todos de projeto que t\xeam o atributo ",(0,i.jsx)(s.a,{href:"/docs/pt/20-R7/Project/code-overview#execute-on-server",children:"Execute on Server"}),' (s\xe3o executados no processo "geminado" do processo do cliente),']}),"\n",(0,i.jsx)(s.li,{children:"Triggers,"}),"\n",(0,i.jsx)(s.li,{children:"'Conex\xe3o aberta com o servidor' e 'Conex\xe3o com o servidor' m\xe9todos de banco de dados."}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Para mais informa\xe7\xf5es em sess\xf5es usu\xe1rios remotos, consulte o par\xe1grafo ",(0,i.jsx)(s.a,{href:"/docs/pt/20-R7/Desktop/clientServer#remote-user-sessions",children:(0,i.jsx)(s.strong,{children:"Sess\xf5es usu\xe1rio cliente remoto"})}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"a-sess\xe3o-de-procedimentos-armazenados",children:"a sess\xe3o de procedimentos armazenados"}),"\n",(0,i.jsxs)(s.p,{children:["Todos os processos de procedimento armazenado compartilham a mesma sess\xe3o de usu\xe1rio virtual. O objeto ",(0,i.jsx)(s.code,{children:"Session"})," de procedimentos armazenados est\xe1 dispon\xedvel em:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["m\xe9todos chamados com o comando ",(0,i.jsx)(s.a,{href:"/docs/pt/20-R7/commands/execute-on-server",children:(0,i.jsx)(s.code,{children:"Execute on server"})}),","]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"On Server Startup"}),", ",(0,i.jsx)(s.code,{children:"On Server Shutdown"}),", ",(0,i.jsx)(s.code,{children:"On Backup Startup"}),", ",(0,i.jsx)(s.code,{children:"On Backup Shutdown"}),", and ",(0,i.jsx)(s.code,{children:"On System event"})," database methods"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["For information on stored procedures virtual user session, please refer to the ",(0,i.jsx)(s.a,{href:"https://doc.4d.com/4Dv20R5/4D/20-R5/4D-Server-and-the-4D-Language.300-6932726.en.html",children:"4D Server and the 4D Language"})," page."]}),"\n",(0,i.jsx)(s.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,i.jsxs)(s.p,{children:["You have defined the ",(0,i.jsx)(s.code,{children:"action_Session"}),' method with attribute "Available through 4D tags and URLs". Pode chamar ao m\xe9todo introduzindo a URL abaixo no navegador:']}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"IP:port/4DACTION/action_Session\n"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'  //action_Session method\n Case of\n    :(Session#Null)\n       If(Session.hasPrivilege("WebAdmin")) //calling the hasPrivilege function\n          WEB SEND TEXT("4DACTION --\x3e Session is WebAdmin")\n       Else\n          WEB SEND TEXT("4DACTION --\x3e Session is not WebAdmin")\n       End if\n    Else\n       WEB SEND TEXT("4DACTION --\x3e Session is null")\n End case\n'})}),"\n",(0,i.jsx)(s.h3,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/pt/20-R7/commands/session-storage",children:"Session storage"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/pt/20-R7/API/SessionClass",children:"Session API"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/pt/20-R7/WebServer/sessions",children:"Web server user sessions"})]}),"\n",(0,i.jsx)(s.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Command number"}),(0,i.jsx)(s.td,{children:"1714"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Thread safe"}),(0,i.jsx)(s.td,{children:"&check;"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return t},a:function(){return d}});var o=n(667294);let i={},r=o.createContext(i);function d(e){let s=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),o.createElement(r.Provider,{value:s},e.children)}}}]);