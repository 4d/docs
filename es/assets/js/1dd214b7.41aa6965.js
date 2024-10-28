"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[66552],{347509:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>t,toc:()=>l});var s=n(474848),a=n(28453);const c={id:"receive-buffer",title:"RECEIVE BUFFER",slug:"/commands/receive-buffer",displayed_sidebar:"docs"},o=void 0,t={id:"commands-legacy/receive-buffer",title:"RECEIVE BUFFER",description:"RECEIVE BUFFER ( varRecep )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/receive-buffer.md",sourceDirName:"commands-legacy",slug:"/commands/receive-buffer",permalink:"/docs/es/commands/receive-buffer",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freceive-buffer.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"receive-buffer",title:"RECEIVE BUFFER",slug:"/commands/receive-buffer",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"GET SERIAL PORT MAPPING",permalink:"/docs/es/commands/get-serial-port-mapping"},next:{title:"RECEIVE PACKET",permalink:"/docs/es/commands/receive-packet"}},i={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function d(e){const r={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"RECEIVE BUFFER"})," ( ",(0,s.jsx)(r.em,{children:"varRecep"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Par\xe1metro"}),(0,s.jsx)(r.th,{children:"Tipo"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"varRecep"}),(0,s.jsx)(r.td,{children:"Text"}),(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:"Variable para recibir datos"})]})})]}),"\n",(0,s.jsx)(r.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(r.p,{children:["RECEIVE BUFFER lee los datos del puerto serial abierto previamente por el comando ",(0,s.jsx)(r.a,{href:"/docs/es/commands/set-channel",children:"SET CHANNEL"}),". El puerto serial tiene un buffer que se llena con caracteres hasta que un comando los lee. RECEIVE BUFFER obtiene los caracteres del buffer serial, los coloca en la variable ",(0,s.jsx)(r.em,{children:"varRecep"})," y luego limpia el buffer. Si no hay caracteres en el buffer, la variable ",(0,s.jsx)(r.em,{children:"varRecep"})," estar\xe1 vac\xeda."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"En Windows"}),(0,s.jsx)(r.br,{}),"\nEl buffer de puerto serial en Windows est\xe1 limitado en tama\xf1o a 10 Kbytes. Esto significa que el buffer puede saturarse. Cuando est\xe1 lleno y se reciben nuevos caracteres, los nuevos caracteres se reemplazan los antiguos caracteres. Los antiguos caracteres se pierden; por lo tanto, es esencial que el buffer se lea r\xe1pidamente cuando se reciben nuevos caracteres."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"En Mac OS"}),(0,s.jsx)(r.br,{}),"\nEl buffer del puerto serial en Mac OS X tiene una capacidad en principio ilimitada (depende de la memoria disponible). Si el buffer est\xe1 lleno y se reciben nuevos caracteres, los nuevos caracteres reemplazan los antiguos caracteres. Los antiguos caracteres se pierden; por lo tanto, es esencial que el buffer se lea r\xe1pidamente cuando se reciben nuevos caracteres."]}),"\n",(0,s.jsxs)(r.p,{children:["El comando RECEIVE BUFFER es diferente de ",(0,s.jsx)(r.a,{href:"/docs/es/commands/receive-packet",children:"RECEIVE PACKET"})," en la medida en que recupera todo lo que encuentra en el buffer y lo devuelve inmediatamente. ",(0,s.jsx)(r.a,{href:"/docs/es/commands/receive-packet",children:"RECEIVE PACKET"})," espera hasta encontrar un car\xe1cter espec\xedfico o un cierto n\xfamero de caracteres en el buffer."]}),"\n",(0,s.jsxs)(r.p,{children:["Durante la ejecuci\xf3n de RECEIVE BUFFER, el usuario puede interrumpir la recepci\xf3n presionando ",(0,s.jsx)(r.strong,{children:"Ctrl-Alt-May\xfas"})," (Windows) o ",(0,s.jsx)(r.strong,{children:"Comando-Opci\xf3n-May\xfas"})," (Macintosh). Esta interrupci\xf3n genera un error -9994 que puede interceptar con la ayuda de un m\xe9todo instalado por el comando ",(0,s.jsx)(r.a,{href:"/docs/es/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,s.jsx)(r.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(r.p,{children:"El m\xe9todo de proyecto ESCUCHAR PUERTO SERIAL utiliza RECEIVE BUFFER para obtener texto del puerto serial y acumularlo en una variable interproceso:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0\xa0// ESCUCHAR PUERTO SERIAL\n\xa0\xa0// Abrir el puerto serial\n\xa0SET CHANNEL(201;Speed 9600+Data bits 8+Stop bits one+Parity none)\n\xa0<>IP_Escuchar_Puerto_Serial:=True\n\xa0While(<>IP_Escuchar_Puerto_Serial)\n\xa0\xa0\xa0\xa0RECEIVE BUFFER($vtBuffer)\n\xa0\xa0\xa0\xa0If((Length($vtBuffer)+Length(<>vtBuffer))>MAXTEXTLEN)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0<>vtBuffer:=""\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0<>vtBuffer:=<>vtBuffer+$Buffer\n\xa0End while\n'})}),"\n",(0,s.jsxs)(r.p,{children:["En este punto, cualquier otro proceso puede leer la variable interproceso ",(0,s.jsx)(r.em,{children:"vtBuffer"})," para trabajar con los datos que vienen del puerto serial."]}),"\n",(0,s.jsx)(r.p,{children:"Para dejar de escuchar al puerto serial, ejecute:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:"\xa0\xa0// Dejar de escuchar al puerto serial\n\xa0\u25caIP_Escuchar_Puerto_Serial:=False\n"})}),"\n",(0,s.jsxs)(r.p,{children:["Note que el acceso a la variable interproceso ",(0,s.jsx)(r.em,{children:"vtBuffer"})," debe estar protegido por un sem\xe1foro, de manera que los procesos no entren en conflicto. Para mayor informaci\xf3n ver el comando ",(0,s.jsx)(r.a,{href:"/docs/es/commands/semaphore",title:"Semaphore",children:"Semaphore"}),"."]}),"\n",(0,s.jsx)(r.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/es/commands/on-err-call",children:"ON ERR CALL"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/es/commands/receive-packet",children:"RECEIVE PACKET"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/es/commands/semaphore",children:"Semaphore"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/es/commands/set-channel",children:"SET CHANNEL"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/es/commands/use-character-set",children:"USE CHARACTER SET"})]})]})}function u(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>t});var s=n(296540);const a={},c=s.createContext(a);function o(e){const r=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(c.Provider,{value:r},e.children)}}}]);