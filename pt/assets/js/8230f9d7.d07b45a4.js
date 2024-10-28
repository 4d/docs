"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1044],{57468:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>t,toc:()=>c});var i=o(474848),s=o(28453);const n={id:"http-server",title:"P\xe1gina Servidor HTTP"},a=void 0,t={id:"ServerWindow/http-server",title:"P\xe1gina Servidor HTTP",description:"La p\xe1gina Servidor HTTP agrupa la informaci\xf3n sobre el servidor Web y el servidor SOAP de 4D Server. The Web server lets you publish Web content such as HTML pages or pictures for Web browsers, and to handle REST requests. O servidor SOAP gere a publica\xe7\xe3o de servi\xe7os Web. Esses servidores dependem do servidor HTTP interno de 4D Server.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/ServerWindow/http-server.md",sourceDirName:"ServerWindow",slug:"/ServerWindow/http-server",permalink:"/docs/pt/ServerWindow/http-server",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fhttp-server.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"http-server",title:"P\xe1gina Servidor HTTP"},sidebar:"docs",previous:{title:"P\xe1gina servidor SQL",permalink:"/docs/pt/ServerWindow/sql-server"},next:{title:"P\xe1gina do monitor em tempo real",permalink:"/docs/pt/ServerWindow/real-time-monitor"}},d={},c=[{value:"Iniciar/parar o servidor HTTP",id:"iniciarparar-o-servidor-http",level:2},{value:"Informa\xe7\xe3o Web",id:"informa\xe7\xe3o-web",level:2},{value:"Informa\xe7\xe3o SOAP",id:"informa\xe7\xe3o-soap",level:2},{value:"Configura\xe7\xe3o servidor HTTP",id:"configura\xe7\xe3o-servidor-http",level:2}];function l(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:["La p\xe1gina ",(0,i.jsx)(r.strong,{children:"Servidor HTTP"})," agrupa la informaci\xf3n sobre el servidor Web y el servidor SOAP de 4D Server. The Web server lets you publish Web content such as HTML pages or pictures for Web browsers, and to handle REST requests. O servidor SOAP gere a publica\xe7\xe3o de servi\xe7os Web. Esses servidores dependem do servidor HTTP interno de 4D Server."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{src:o(634491).A+"",width:"1036",height:"701"})}),"\n",(0,i.jsx)(r.p,{children:"A parte superior da p\xe1gina fornece informa\xe7\xf5es sobre o estado atual do servidor HTTP do 4D Server."}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Estado"}),": Iniciado o Detenido"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Hora de inicio"}),": fecha y hora en que el servidor HTTP fue lanzado por \xfaltima vez."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Duraci\xf3n del funcionamiento"}),": tiempo transcurrido desde el \xfaltimo arranque del servidor HTTP."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Total de hits HTTP"}),": n\xfamero de hits HTTP (de bajo nivel) recibidos por el servidor HTTP desde que se inici\xf3."]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"iniciarparar-o-servidor-http",children:"Iniciar/parar o servidor HTTP"}),"\n",(0,i.jsx)(r.p,{children:"Esse bot\xe3o alterna e pode ser usado para controlar a ativa\xe7\xe3o do servidor HTTP do 4D Server."}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:['Cuando el estado del servidor HTTP es "Iniciado", el bot\xf3n se etiqueta',(0,i.jsx)(r.strong,{children:"Detener el servidor HTTP"}),". If you click on this button, the 4D Server HTTP server is immediately stopped; the Web server, REST server, and SOAP server no longer accept any requests."]}),"\n",(0,i.jsxs)(r.li,{children:['Cuando el estado del servidor HTTP es "Detenido", el bot\xf3n se titula ',(0,i.jsx)(r.strong,{children:"Iniciar servidor HTTP"}),". Se voc\xea clicar nesse bot\xe3o, o servidor HTTP de 4D Server ser\xe1 iniciado imediatamente; solicita\xe7\xf5es Web, REST e SOAP ser\xe3o aceitas."]}),"\n"]}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:"Voc\xea deve ter uma licen\xe7a adequada para poder iniciar o servidor HTTP."}),"\n",(0,i.jsx)(r.p,{children:"The HTTP server can also be launched automatically on application startup (Settings) or by programming."}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"informa\xe7\xe3o-web",children:"Informa\xe7\xe3o Web"}),"\n",(0,i.jsx)(r.p,{children:"Esta \xe1rea fornece informa\xe7\xf5es espec\xedficas sobre o servidor Web de 4D Server."}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Peticiones web"}),": aceptadas o rechazadas. Esta informa\xe7\xe3o indica se o servidor Web est\xe1 ativado. Como o servidor da Web est\xe1 diretamente vinculado ao servidor HTTP, as solicita\xe7\xf5es Web s\xe3o aceitas quando o servidor HTTP \xe9 iniciado e rejeitadas quando ele \xe9 interrompido."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Conexiones m\xe1ximas"}),": n\xfamero m\xe1ximo de conexiones web permitidas. Este valor depende da licen\xe7a instalada na m\xe1quina do servidor."]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"informa\xe7\xe3o-soap",children:"Informa\xe7\xe3o SOAP"}),"\n",(0,i.jsx)(r.p,{children:"This area provides specific information about the SOAP server of 4D Server and includes a control button."}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Peticiones SOAP"}),": aceptadas o rechazadas. Esta informa\xe7\xe3o indica se o servidor SOAP est\xe1 ativado. Para que as solicita\xe7\xf5es SOAP sejam aceitas, o servidor HTTP deve ser iniciado e o servidor SOAP deve aceitar explicitamente as solicita\xe7\xf5es (consulte o bot\xe3o Aceitar/Rejeitar)."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Conexiones m\xe1ximas"}),": n\xfamero m\xe1ximo de conexiones SOAP permitidas. Este valor depende da licen\xe7a instalada na m\xe1quina do servidor."]}),"\n",(0,i.jsxs)(r.li,{children:["Bot\xf3n ",(0,i.jsx)(r.strong,{children:"Aceptar/rechazar las peticiones SOAP"}),": este bot\xf3n se alterna y puede utilizarse para controlar la activaci\xf3n del servidor SOAP de 4D Server. Este bot\xf3n modifica el valor de la opci\xf3n ",(0,i.jsx)(r.strong,{children:"Autorizar peticiones de servicios web"}),' en la p\xe1gina "Servicios web" de las Propiedades de la base (y viceversa). You can also use the ',(0,i.jsx)(r.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1636.html",children:(0,i.jsx)(r.code,{children:"SOAP REJECT NEW REQUESTS"})})," command to refuse new SOAP requests, however this does not modify the value of the ",(0,i.jsx)(r.strong,{children:"Allow Web Services Requests"})," option."]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["Si presiona el bot\xf3n ",(0,i.jsx)(r.strong,{children:"Aceptar las peticiones SOAP"})," y el servidor HTTP est\xe1 detenido, 4D lo inicia autom\xe1ticamente."]}),"\n",(0,i.jsx)(r.h2,{id:"configura\xe7\xe3o-servidor-http",children:"Configura\xe7\xe3o servidor HTTP"}),"\n",(0,i.jsx)(r.p,{children:"This area provides information about the configuration parameters and operation of the HTTP server:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Lanzamiento autom\xe1tico al inicio"}),": par\xe1metro definido a trav\xe9s de las Propiedades."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Proceso servidor HTTP (utilizado/total)"}),": n\xfamero de procesos HTTP creados en el servidor (n\xfamero actual de procesos / total de todos los procesos creados)."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Memoria cach\xe9"}),": tama\xf1o de la memoria cach\xe9 del servidor HTTP, cuando est\xe1 activada (tama\xf1o realmente utilizado por la cach\xe9 / tama\xf1o m\xe1ximo te\xf3ricamente asignado a la cach\xe9 en las Propiedades). Puede hacer clic en el bot\xf3n ",(0,i.jsx)(r.strong,{children:"Borrar cach\xe9"})," para vaciar la cach\xe9 actual."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Listening to IP"}),", ",(0,i.jsx)(r.strong,{children:"HTTP Port"})," (80 by default), ",(0,i.jsx)(r.strong,{children:"TLS enabled"})," for HTTP connections (does not concern 4D nor SQL connections) and ",(0,i.jsx)(r.strong,{children:"HTTPS Port"})," used: current ",(0,i.jsx)(r.a,{href:"/docs/pt/WebServer/webServerConfig",children:"configuration parameters"})," of the HTTP server, specified through the Settings or by programming."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Informaci\xf3n del archivo de registro"}),": nombre, formato y fecha de la siguiente copia de seguridad autom\xe1tica del registro del servidor HTTP (archivo logweb.txt)."]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},634491:(e,r,o)=>{o.d(r,{A:()=>i});const i=o.p+"assets/images/server-admin-web-page-bc12a227b63b011be095b5746524f47a.png"},28453:(e,r,o)=>{o.d(r,{R:()=>a,x:()=>t});var i=o(296540);const s={},n=i.createContext(s);function a(e){const r=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(n.Provider,{value:r},e.children)}}}]);