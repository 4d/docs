"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66999"],{246724:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>r,metadata:()=>i,assets:()=>c,toc:()=>t,contentTitle:()=>l});var i=JSON.parse('{"id":"commands/session","title":"Session","description":"Session : 4D.Session","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands/session.md","sourceDirName":"commands","slug":"/commands/session","permalink":"/docs/es/commands/session","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fsession.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"session","title":"Session","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESUME PROCESS","permalink":"/docs/es/commands/resume-process"},"next":{"title":"Session info","permalink":"/docs/es/commands/session-info"}}'),o=n("785893"),d=n("250065");let r={id:"session",title:"Session",displayed_sidebar:"docs"},l=void 0,c={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Sesiones web",id:"sesiones-web",level:2},{value:"Sesiones de cliente remoto",id:"sesiones-de-cliente-remoto",level:2},{value:"Sesi\xf3n de procedimientos almacenados",id:"sesi\xf3n-de-procedimientos-almacenados",level:2},{value:"Sesi\xf3n independiente",id:"sesi\xf3n-independiente",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:3},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let s={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Session"})," : 4D.Session"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe1metros"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,o.jsx)(s.tbody,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Resultado"}),(0,o.jsx)(s.td,{children:"4D.Session"}),(0,o.jsx)(s.td,{children:"\u2190"}),(0,o.jsx)(s.td,{children:"Objeto Session"})]})})]}),"\n",(0,o.jsxs)(s.details,{children:[(0,o.jsx)(s.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Lanzamiento"}),(0,o.jsx)(s.th,{children:"Modificaciones"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"20 R8"}),(0,o.jsx)(s.td,{children:"Support of standalone sessions"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"20 R5"}),(0,o.jsx)(s.td,{children:"Soporte de cliente remoto y sesiones de procedimientos almacenados"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"18 R6"}),(0,o.jsx)(s.td,{children:"A\xf1adidos"})]})]})]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(s.p,{children:["El comando ",(0,o.jsx)(s.code,{children:"Session"})," devuelve el objeto ",(0,o.jsx)(s.code,{children:"Session"})," correspondiente a la sesi\xf3n usuario actual."]}),"\n",(0,o.jsx)(s.p,{children:"Dependiendo del proceso desde el que se llame al comando, la sesi\xf3n de usuario actual puede ser:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["una sesi\xf3n web (cuando las ",(0,o.jsx)(s.a,{href:"/docs/es/WebServer/sessions#enabling-web-sessions",children:"sesiones escalables est\xe1n activadas"}),"),"]}),"\n",(0,o.jsx)(s.li,{children:"una sesi\xf3n de cliente remoto,"}),"\n",(0,o.jsx)(s.li,{children:"la sesi\xf3n de procedimientos almacenados,"}),"\n",(0,o.jsxs)(s.li,{children:["the ",(0,o.jsx)(s.em,{children:"designer"})," session in a standalone application."]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["Para obtener m\xe1s informaci\xf3n, consulte el p\xe1rrafo ",(0,o.jsx)(s.a,{href:"/docs/es/API/SessionClass#session-types",children:"Tipos de sesion"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["If the command is called from a non supported context (e.g. scalable sessions disabled), it returns ",(0,o.jsx)(s.em,{children:"Null"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"sesiones-web",children:"Sesiones web"}),"\n",(0,o.jsxs)(s.p,{children:["El objeto ",(0,o.jsx)(s.code,{children:"Session"})," de las sesiones web est\xe1 disponible desde cualquier proceso web:"]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["M\xe9todos base ",(0,o.jsx)(s.code,{children:"On Web Authentication"}),", ",(0,o.jsx)(s.code,{children:"On Web Connection"})," y ",(0,o.jsx)(s.code,{children:"On REST Authentication"}),","]}),"\n",(0,o.jsx)(s.li,{children:"c\xf3digo procesado a trav\xe9s de las etiquetas 4D en las p\xe1ginas semidin\xe1micas (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)"}),"\n",(0,o.jsx)(s.li,{children:'los m\xe9todos proyecto con el atributo "Available through 4D tags and URLs (4DACTION...)" y llamados a trav\xe9s de 4DACTION/ urls,'}),"\n",(0,o.jsxs)(s.li,{children:["m\xe9todos base ",(0,o.jsx)(s.a,{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication",children:(0,o.jsx)(s.code,{children:"On Mobile App Authentication"})})," y ",(0,o.jsx)(s.a,{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action",children:(0,o.jsx)(s.code,{children:"On Mobile App Action"})})," para peticiones m\xf3viles,"]}),"\n",(0,o.jsxs)(s.li,{children:["Funciones ORDA ",(0,o.jsx)(s.a,{href:"/docs/es/REST/classFunctions",children:"llamadas con peticiones REST"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["Para m\xe1s informaci\xf3n sobre las sesiones usuario web, consulte la secci\xf3n ",(0,o.jsx)(s.a,{href:"/docs/es/WebServer/sessions",children:"Sesiones web"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"sesiones-de-cliente-remoto",children:"Sesiones de cliente remoto"}),"\n",(0,o.jsxs)(s.p,{children:["El objeto ",(0,o.jsx)(s.code,{children:"Session"})," de las sesiones cliente remotas est\xe1 disponible desde:"]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["M\xe9todos proyecto que tienen el atributo ",(0,o.jsx)(s.a,{href:"/docs/es/Project/code-overview#execute-on-server",children:"Ejecutar en el Servidor"}),' (se ejecutan en el proceso "twinned" del proceso cliente),']}),"\n",(0,o.jsx)(s.li,{children:"Triggers,"}),"\n",(0,o.jsxs)(s.li,{children:["Los m\xe9todos base ",(0,o.jsx)(s.code,{children:"On Server Open Connection"})," y ",(0,o.jsx)(s.code,{children:"On Server Shutdown Connection"})," de la base de datos."]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["Para m\xe1s informaci\xf3n sobre las sesiones usuario remoto, por favor consulte el p\xe1rrafo ",(0,o.jsx)(s.a,{href:"/docs/es/Desktop/clientServer#remote-user-sessions",children:(0,o.jsx)(s.strong,{children:"Sesiones usuario cliente remoto"})}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"sesi\xf3n-de-procedimientos-almacenados",children:"Sesi\xf3n de procedimientos almacenados"}),"\n",(0,o.jsxs)(s.p,{children:["Todos los procesos de procedimientos almacenados comparten la misma sesi\xf3n virtual de usuario. El objeto ",(0,o.jsx)(s.code,{children:"Session"})," de los procedimientos almacenados est\xe1 disponible desde:"]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["m\xe9todos llamados con el comando ",(0,o.jsx)(s.a,{href:"/docs/es/commands/execute-on-server",children:(0,o.jsx)(s.code,{children:"Execute on server"})}),","]}),"\n",(0,o.jsxs)(s.li,{children:["Los m\xe9todos base ",(0,o.jsx)(s.code,{children:"On Server Startup"}),", ",(0,o.jsx)(s.code,{children:"On Server Shutdown"}),", ",(0,o.jsx)(s.code,{children:"On Backup Startup"}),", ",(0,o.jsx)(s.code,{children:"On Backup Shutdown"})," y ",(0,o.jsx)(s.code,{children:"On System event"})]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["Para obtener informaci\xf3n sobre la sesi\xf3n de usuario virtual de los procedimientos almacenados, consulte la p\xe1gina ",(0,o.jsx)(s.a,{href:"https://doc.4d.com/4Dv20/4D/20/4D-Server-and-the-4D-Language.300-6330554.en.html",children:"4D Server y lenguaje 4D"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"sesi\xf3n-independiente",children:"Sesi\xf3n independiente"}),"\n",(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(s.code,{children:"Session"})," object is available from any process in standalone (single-user) applications so that you can write and test your client/server code using the ",(0,o.jsx)(s.code,{children:"Session"})," object in your 4D development environment."]}),"\n",(0,o.jsx)(s.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsxs)(s.p,{children:["Ha definido el m\xe9todo ",(0,o.jsx)(s.code,{children:"action_Session"}),' con el atributo "Disponible a trav\xe9s de etiquetas 4D y URLs". Se llama al m\xe9todo introduciendo la siguiente URL en el navegador:']}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:"IP:port/4DACTION/action_Session\n"})}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'  //m\xe9todo action_Session\n Case of\n    :(Session#Null)\n       If(Session.hasPrivilege("WebAdmin")) //llamando a la funci\xf3n hasPrivilege\n          WEB SEND TEXT("4DACTION --\x3e Session is WebAdmin")\n       Else\n          WEB SEND TEXT("4DACTION --\x3e Session is not WebAdmin")\n       End if\n    Else\n       WEB SEND TEXT("4DACTION --\x3e Session is null")\n End case\n'})}),"\n",(0,o.jsx)(s.h3,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/docs/es/commands/session-storage",children:"Session storage"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/es/API/SessionClass",children:"Session API"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/es/WebServer/sessions",children:"Web server user sessions"})]}),"\n",(0,o.jsx)(s.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"N\xfamero de comando"}),(0,o.jsx)(s.td,{children:"1714"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Hilo seguro"}),(0,o.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return r}});var i=n(667294);let o={},d=i.createContext(o);function r(e){let s=i.useContext(d);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(d.Provider,{value:s},e.children)}}}]);