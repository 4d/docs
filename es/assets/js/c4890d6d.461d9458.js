/*! For license information please see c4890d6d.461d9458.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86073],{998330:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>t,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var n=i(474848),o=i(28453);const s={id:"http-server",title:"P\xe1gina del servidor HTTP"},a=void 0,d={id:"ServerWindow/http-server",title:"P\xe1gina del servidor HTTP",description:"La p\xe1gina Servidor HTTP agrupa la informaci\xf3n sobre el servidor Web y el servidor SOAP de 4D Server. El servidor web le permite publicar contenido web, como p\xe1ginas HTML o im\xe1genes para los navegadores web, y gestionar las peticiones REST. El servidor SOAP gestiona la publicaci\xf3n de los servicios web. Estos servidores dependen del servidor HTTP interno de 4D Server.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/ServerWindow/http-server.md",sourceDirName:"ServerWindow",slug:"/ServerWindow/http-server",permalink:"/docs/es/20-R5/ServerWindow/http-server",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fhttp-server.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"http-server",title:"P\xe1gina del servidor HTTP"},sidebar:"docs",previous:{title:"P\xe1gina servidor SQL",permalink:"/docs/es/20-R5/ServerWindow/sql-server"},next:{title:"P\xe1gina de seguimiento en tiempo real",permalink:"/docs/es/20-R5/ServerWindow/real-time-monitor"}},t={},c=[{value:"Iniciar/detener el servidor HTTP",id:"iniciardetener-el-servidor-http",level:2},{value:"Informaci\xf3n Web",id:"informaci\xf3n-web",level:2},{value:"Informaci\xf3n SOAP",id:"informaci\xf3n-soap",level:2},{value:"Configuraci\xf3n servidor HTTP",id:"configuraci\xf3n-servidor-http",level:2}];function l(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["La p\xe1gina ",(0,n.jsx)(r.strong,{children:"Servidor HTTP"})," agrupa la informaci\xf3n sobre el servidor Web y el servidor SOAP de 4D Server. El servidor web le permite publicar contenido web, como p\xe1ginas HTML o im\xe1genes para los navegadores web, y gestionar las peticiones REST. El servidor SOAP gestiona la publicaci\xf3n de los servicios web. Estos servidores dependen del servidor HTTP interno de 4D Server."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:i(546901).A+"",width:"1036",height:"701"})}),"\n",(0,n.jsx)(r.p,{children:"La parte superior de la p\xe1gina ofrece informaci\xf3n sobre el estado actual del servidor HTTP de 4D Server."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Estado"}),": Iniciado o Detenido"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Hora de inicio"}),": fecha y hora en que el servidor HTTP fue lanzado por \xfaltima vez."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Duraci\xf3n del funcionamiento"}),": tiempo transcurrido desde el \xfaltimo arranque del servidor HTTP."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Total de hits HTTP"}),": n\xfamero de hits HTTP (de bajo nivel) recibidos por el servidor HTTP desde que se inici\xf3."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"iniciardetener-el-servidor-http",children:"Iniciar/detener el servidor HTTP"}),"\n",(0,n.jsx)(r.p,{children:"Este bot\xf3n se alterna y puede utilizarse para controlar la activaci\xf3n del servidor HTTP de 4D Server."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:['Cuando el estado del servidor HTTP es "Iniciado", el bot\xf3n se etiqueta',(0,n.jsx)(r.strong,{children:"Detener el servidor HTTP"}),". Si hace clic en este bot\xf3n, el servidor HTTP de 4D Server se detiene inmediatamente; el servidor web, el servidor REST y el servidor SOAP dejan de aceptar peticiones."]}),"\n",(0,n.jsxs)(r.li,{children:['Cuando el estado del servidor HTTP es "Detenido", el bot\xf3n se titula ',(0,n.jsx)(r.strong,{children:"Iniciar servidor HTTP"}),". Si hace clic en este bot\xf3n, el servidor HTTP de 4D Server se inicia inmediatamente; se aceptan peticiones Web, REST y SOAP."]}),"\n"]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Debe tener una licencia adecuada para poder iniciar el servidor HTTP."}),"\n",(0,n.jsx)(r.p,{children:"El servidor HTTP tambi\xe9n puede lanzarse autom\xe1ticamente al iniciar la aplicaci\xf3n (Preferencias) o por programaci\xf3n."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"informaci\xf3n-web",children:"Informaci\xf3n Web"}),"\n",(0,n.jsx)(r.p,{children:"Esta \xe1rea ofrece informaci\xf3n espec\xedfica sobre el servidor web de 4D Server."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Peticiones web"}),": aceptadas o rechazadas. Esta informaci\xf3n indica si el servidor web est\xe1 activado. Dado que el servidor web est\xe1 directamente vinculado al servidor HTTP, las peticiones web se aceptan cuando se inicia el servidor HTTP y se rechazan cuando se detiene."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Conexiones m\xe1ximas"}),": n\xfamero m\xe1ximo de conexiones web permitidas. Este valor depende de la licencia instalada en el equipo servidor."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"informaci\xf3n-soap",children:"Informaci\xf3n SOAP"}),"\n",(0,n.jsx)(r.p,{children:"Esta \xe1rea ofrece informaci\xf3n espec\xedfica sobre el servidor SOAP de 4D Server e incluye un bot\xf3n de control."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Peticiones SOAP"}),": aceptadas o rechazadas. Esta informaci\xf3n indica si el servidor SOAP est\xe1 activado. Para que las peticiones SOAP sean aceptadas, el servidor HTTP debe estar iniciado y el servidor SOAP debe aceptar expl\xedcitamente las peticiones (ver el bot\xf3n Aceptar/Rechazar)."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Conexiones m\xe1ximas"}),": n\xfamero m\xe1ximo de conexiones SOAP permitidas. Este valor depende de la licencia instalada en el equipo servidor."]}),"\n",(0,n.jsxs)(r.li,{children:["Bot\xf3n ",(0,n.jsx)(r.strong,{children:"Aceptar/rechazar las peticiones SOAP"}),": este bot\xf3n se alterna y puede utilizarse para controlar la activaci\xf3n del servidor SOAP de 4D Server. Este bot\xf3n modifica el valor de la opci\xf3n ",(0,n.jsx)(r.strong,{children:"Autorizar peticiones de servicios web"}),' en la p\xe1gina "Servicios web" de las Propiedades de la base (y viceversa). Tambi\xe9n puede utilizar el comando ',(0,n.jsx)(r.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1636.html",children:(0,n.jsx)(r.code,{children:"SOAP REJECT NEW REQUESTS"})})," para rechazar nuevas peticiones SOAP, sin embargo esto no modifica el valor de la opci\xf3n ",(0,n.jsx)(r.strong,{children:"Permitir solicitudes de servicios web"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Si presiona el bot\xf3n ",(0,n.jsx)(r.strong,{children:"Aceptar las peticiones SOAP"})," y el servidor HTTP est\xe1 detenido, 4D lo inicia autom\xe1ticamente."]}),"\n",(0,n.jsx)(r.h2,{id:"configuraci\xf3n-servidor-http",children:"Configuraci\xf3n servidor HTTP"}),"\n",(0,n.jsx)(r.p,{children:"Esta \xe1rea ofrece informaci\xf3n sobre los par\xe1metros de configuraci\xf3n y el funcionamiento del servidor HTTP:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Lanzamiento autom\xe1tico al inicio"}),": par\xe1metro definido a trav\xe9s de las Propiedades."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Proceso servidor HTTP (utilizado/total)"}),": n\xfamero de procesos HTTP creados en el servidor (n\xfamero actual de procesos / total de todos los procesos creados)."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Memoria cach\xe9"}),": tama\xf1o de la memoria cach\xe9 del servidor HTTP, cuando est\xe1 activada (tama\xf1o realmente utilizado por la cach\xe9 / tama\xf1o m\xe1ximo te\xf3ricamente asignado a la cach\xe9 en las Propiedades). Puede hacer clic en el bot\xf3n ",(0,n.jsx)(r.strong,{children:"Borrar cach\xe9"})," para vaciar la cach\xe9 actual."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Escuchando IP"}),", ",(0,n.jsx)(r.strong,{children:"puerto HTTP"})," (80 por defecto), ",(0,n.jsx)(r.strong,{children:"TLS habilitado"})," para conexiones HTTP (no afecta a conexiones 4D ni SQL) y ",(0,n.jsx)(r.strong,{children:"puerto HTTP"})," utilizado: [par\xe1metros de configuraci\xf3n](WebServer/webServerConfig. d) del servidor HTTP, especificado a trav\xe9s de la Configuraci\xf3n o por programaci\xf3n."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Informaci\xf3n del archivo de registro"}),": nombre, formato y fecha de la siguiente copia de seguridad autom\xe1tica del registro del servidor HTTP (archivo logweb.txt)."]}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,r,i)=>{var n=i(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,i){var n,s={},c=null,l=null;for(n in void 0!==i&&(c=""+i),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(l=r.ref),r)a.call(r,n)&&!t.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:o,type:e,key:c,ref:l,props:s,_owner:d.current}}r.Fragment=s,r.jsx=c,r.jsxs=c},474848:(e,r,i)=>{e.exports=i(221020)},546901:(e,r,i)=>{i.d(r,{A:()=>n});const n=i.p+"assets/images/server-admin-web-page-bc12a227b63b011be095b5746524f47a.png"},28453:(e,r,i)=>{i.d(r,{R:()=>a,x:()=>d});var n=i(296540);const o={},s=n.createContext(o);function a(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);