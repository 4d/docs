"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["27169"],{130737:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>t,metadata:()=>i,assets:()=>o,toc:()=>A,contentTitle:()=>s});var i=JSON.parse('{"id":"Debugging/debugging-remote","title":"Depuraci\xf3n desde m\xe1quinas remotas","description":"Generalidades","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/Debugging/debugging-remote.md","sourceDirName":"Debugging","slug":"/Debugging/debugging-remote","permalink":"/docs/es/Debugging/debugging-remote","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Debugging%2Fdebugging-remote.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"debugging-remote","title":"Depuraci\xf3n desde m\xe1quinas remotas"},"sidebar":"docs","previous":{"title":"Puntos de interrupci\xf3n y punto de interrupci\xf3n en comandos","permalink":"/docs/es/Debugging/breakpoints"},"next":{"title":"Archivo de historial","permalink":"/docs/es/Debugging/debugLogFiles"}}'),a=r("785893"),d=r("250065");let t={id:"debugging-remote",title:"Depuraci\xf3n desde m\xe1quinas remotas"},s=void 0,o={},A=[{value:"Generalidades",id:"generalidades",level:2},{value:"Depuradores adjuntos",id:"depuradores-adjuntos",level:2},{value:"Asociar al depurador",id:"asociar-al-depurador",level:2},{value:"Adjuntar el depurador al inicio",id:"adjuntar-el-depurador-al-inicio",level:2},{value:"Peticiones de adjuntos rechazadas",id:"peticiones-de-adjuntos-rechazadas",level:2}];function c(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"generalidades",children:"Generalidades"}),"\n",(0,a.jsx)(n.p,{children:"Cuando una base de datos 4D se ejecuta en 4D Server en modo interpretado, puede depurar el c\xf3digo 4D que se ejecuta en el servidor desde un cliente 4D remoto conectado al proyecto. S\xf3lo tiene que adjuntar el depurador a una m\xe1quina remota espec\xedfica y la ejecuci\xf3n del c\xf3digo puede ser monitoreada en el depurador directamente en la m\xe1quina remota."}),"\n",(0,a.jsxs)(n.p,{children:["En una m\xe1quina remota, la ",(0,a.jsx)(n.a,{href:"/docs/es/Debugging/debugger",children:"ventana de depuraci\xf3n"})," muestra un icono de servidor espec\xedfico y un color de fondo azul para indicar que est\xe1 depurando el c\xf3digo servidor:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"debugger-window-remote",src:r(444994).Z+"",width:"796",height:"446"})}),"\n",(0,a.jsxs)(n.p,{children:["Esta funcionalidad es especialmente \xfatil cuando 4D Server se ejecuta en modo sin interfaz (ver ",(0,a.jsx)(n.a,{href:"/docs/es/Admin/cli",children:"Command Line Interface"}),"), o cuando el acceso a la m\xe1quina del servidor no es f\xe1cil."]}),"\n",(0,a.jsx)(n.h2,{id:"depuradores-adjuntos",children:"Depuradores adjuntos"}),"\n",(0,a.jsxs)(n.p,{children:["S\xf3lo un depurador puede depurar una aplicaci\xf3n 4D Server en un momento dado. Se llama el ",(0,a.jsx)(n.strong,{children:"depurador asociado"}),". El depurador asociado puede ser:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"el depurador local de 4D Server (por defecto) - si el servidor no est\xe1 ejecutando sin interfaz."}),"\n",(0,a.jsx)(n.li,{children:"el depurador de un cliente 4D remoto - si la sesi\xf3n remota tiene acceso al modo Dise\xf1o."}),"\n",(0,a.jsxs)(n.li,{children:["el ",(0,a.jsx)(n.a,{href:"/docs/es/WebServer/qodly-studio#using-qodly-debugger-on-4d-server",children:"depurador Qodly"})," en el servidor 4D - si el servidor permite el acceso a Qodly Studio."]}),"\n",(0,a.jsxs)(n.li,{children:["the ",(0,a.jsx)(n.strong,{children:"VS Code"})," debugger, provided you installed the ",(0,a.jsx)(n.a,{href:"https://github.com/4d/4D-Debugger-VSCode",children:"4D-Debugger"})," extension."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"El depurador asociado es llamado cada vez que se encuentra un 4D Server:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"un punto de ruptura"}),"\n",(0,a.jsxs)(n.li,{children:["a ",(0,a.jsx)(n.code,{children:"TRACE"})," command"]}),"\n",(0,a.jsx)(n.li,{children:"un comando de captura"}),"\n",(0,a.jsx)(n.li,{children:"un error"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Tenga en cuenta que los mensajes de error se env\xedan a la m\xe1quina depuradora asociada. Esto significa que en el caso de un depurador remoto, los mensajes de error del servidor se muestran en el cliente 4D remoto."}),"\n",(0,a.jsx)(n.p,{children:"Note que:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The code executed in the ",(0,a.jsx)(n.code,{children:"On Server Startup Database"})," Method cannot be debugged remotely. S\xf3lo se puede depurar del lado del servidor"]}),"\n",(0,a.jsx)(n.li,{children:"Si no hay un depurador asociado, el c\xf3digo en ejecuci\xf3n no se detiene con los comandos de depuraci\xf3n"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"asociar-al-depurador",children:"Asociar al depurador"}),"\n",(0,a.jsx)(n.p,{children:"Por defecto, cuando se inicia una aplicaci\xf3n interpretada:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"si 4D Server no se est\xe1 ejecutando sin interfaz, el depurador est\xe1 conectado al servidor,"}),"\n",(0,a.jsx)(n.li,{children:"si 4D Server se ejecuta sin interfaz, no se asocia ning\xfan depurador."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Puede asociar el depurador a cualquier cliente 4D remoto que pueda conectarse a la aplicaci\xf3n 4D Server."}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"La sesi\xf3n usuario del cliente 4D remoto debe tener acceso al entorno de dise\xf1o de la base de datos."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Para asociar el depurador a un cliente 4D remoto:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["In the 4D Server menu bar, select ",(0,a.jsx)(n.strong,{children:"Edit"})," > ",(0,a.jsx)(n.strong,{children:"Detach Debugger"})," so that the debugger becomes available to remote machines (this step is useless if the 4D Server is running headless)."]}),"\n",(0,a.jsxs)(n.li,{children:["In a remote 4D client connected to the server, select ",(0,a.jsx)(n.strong,{children:"Run"})," > ",(0,a.jsx)(n.strong,{children:"Attach Remote Debugger"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["If the attachment is accepted (see ",(0,a.jsx)(n.a,{href:"#rejected-attachment-requests",children:"Rejected attachment requests"}),"), the menu command becomes ",(0,a.jsx)(n.strong,{children:"Detach Remote Debugger"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"El depurador se conecta entonces al cliente 4D remoto:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"hasta el final de la sesi\xf3n usuario"}),"\n",(0,a.jsxs)(n.li,{children:["until you select ",(0,a.jsx)(n.code,{children:"Detach Remote Debugger"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Para volver a conectar el depurador al servidor:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["On the remote 4D client that has the debugger attached, select ",(0,a.jsx)(n.strong,{children:"Run"})," > ",(0,a.jsx)(n.strong,{children:"Detach Remote Debugger"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["In the 4D Server menu bar, select ",(0,a.jsx)(n.strong,{children:"Edit"})," > ",(0,a.jsx)(n.strong,{children:"Attach debugger"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Cuando el depurador est\xe1 conectado al servidor (por defecto), todos los procesos del servidor se ejecutan autom\xe1ticamente en modo cooperativo para permitir la depuraci\xf3n. Esto puede tener un impacto significativo en el rendimiento. Cuando no necesite depurar en la m\xe1quina del servidor, se recomienda separar el depurador y adjuntarlo a una m\xe1quina remota si es necesario."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"adjuntar-el-depurador-al-inicio",children:"Adjuntar el depurador al inicio"}),"\n",(0,a.jsx)(n.p,{children:"4D le permite adjuntar autom\xe1ticamente el depurador a un cliente 4D remoto o al servidor al inicio:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["On the server (if not headless), this option is named ",(0,a.jsx)(n.strong,{children:"Attach Debugger At Startup"}),". Cuando el servidor se inicia, adjunta autom\xe1ticamente el depurador (por defecto)."]}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Warning"}),": If this option is selected for a server which is subsequently launched in headless mode, the debugger won't be available for this server."]}),"\n"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["On a remote 4D client, this option is named ",(0,a.jsx)(n.strong,{children:"Attach Remote Debugger At Startup"}),". Cuando se selecciona, el cliente 4D remoto intentar\xe1 autom\xe1ticamente adjuntar el depurador remoto en cada conexi\xf3n posterior a la misma base de datos 4D Server. If the attachment is accepted (see ",(0,a.jsx)(n.a,{href:"#rejected-attachment-requests",children:"Rejected attachment requests"}),"), the remote debugger is automatically attached to the remote 4D client and the ",(0,a.jsx)(n.strong,{children:"Detach Remote Debugger option is displayed"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["This setting is applied per project and is stored locally in the ",(0,a.jsx)(n.a,{href:"/docs/es/Project/architecture#userpreferencesusername",children:(0,a.jsx)(n.code,{children:".4DPreferences"})})," file."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"peticiones-de-adjuntos-rechazadas",children:"Peticiones de adjuntos rechazadas"}),"\n",(0,a.jsx)(n.p,{children:"Mientras el depurador est\xe9 conectado a un cliente 4D remoto o a 4D Server, ninguna otra m\xe1quina puede conectar el depurador."}),"\n",(0,a.jsx)(n.p,{children:"Si una m\xe1quina intenta conectar el depurador cuando ya est\xe1 conectado, se rechaza la conexi\xf3n y aparece una caja de di\xe1logo:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"attach-debugger-dialog",src:r(792815).Z+"",width:"482",height:"231"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"attach-debugger-dialog-2",src:r(315482).Z+"",width:"482",height:"168"})}),"\n",(0,a.jsx)(n.p,{children:"Adjuntar el depurador en este caso requiere que:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["the attached debugger is detached from the server or from the remote 4D client using respectively the ",(0,a.jsx)(n.strong,{children:"Detach debugger"})," or ",(0,a.jsx)(n.strong,{children:"Detach remote debugger"})," menu command,"]}),"\n",(0,a.jsx)(n.li,{children:"se cierra la sesi\xf3n del cliente 4D remoto adjunto."}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},315482:function(e,n,r){r.d(n,{Z:function(){return i}});let i="data:image/png;base64,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"},792815:function(e,n,r){r.d(n,{Z:function(){return i}});let i="data:image/png;base64,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"},444994:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/debuggerWindowRemote-f02d9326511b611372cf8e700627d547.png"},250065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return t}});var i=r(667294);let a={},d=i.createContext(a);function t(e){let n=i.useContext(d);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);