/*! For license information please see 84e8250d.4e87dadd.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7475],{120999:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var n=o(474848),a=o(28453);const i={id:"datastores",title:"Bases de datos remotas"},t=void 0,r={id:"ORDA/datastores",title:"Bases de datos remotas",description:"A remote datastore is a reference, on a local 4D application (4D or 4D Server), to a datastore stored in another 4D application.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/ORDA/remoteDatastores.md",sourceDirName:"ORDA",slug:"/ORDA/datastores",permalink:"/docs/es/ORDA/datastores",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2FremoteDatastores.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"datastores",title:"Bases de datos remotas"},sidebar:"docs",previous:{title:"Utilizando el sello global",permalink:"/docs/es/ORDA/global-stamp"},next:{title:"Privilegios",permalink:"/docs/es/ORDA/privileges"}},d={},l=[{value:"Utilizando sesiones web",id:"Utilizando-sesiones-web",level:2},{value:"Visualizaci\xf3n de las sesiones",id:"Visualizaci\xf3n-de-las-sesiones",level:3},{value:"Cierre de las sesiones",id:"Cierre-de-las-sesiones",level:2},{value:"Bloqueo y transacciones",id:"Bloqueo-y-transacciones",level:2}];function c(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["A ",(0,n.jsx)(s.strong,{children:"remote datastore"})," is a reference, on a local 4D application (4D or 4D Server), to a ",(0,n.jsx)(s.a,{href:"/docs/es/ORDA/dsmapping#datastore",children:"datastore"})," stored in another 4D application."]}),"\n",(0,n.jsxs)(s.p,{children:["The local 4D application connects to and references the remote datastore through a call to the ",(0,n.jsx)(s.a,{href:"/docs/es/API/DataStoreClass#open-datastore",children:(0,n.jsx)(s.code,{children:"Open datastore"})})," command."]}),"\n",(0,n.jsxs)(s.p,{children:["On the remote machine, 4D opens a ",(0,n.jsx)(s.a,{href:"/docs/es/WebServer/sessions",children:"session"})," to handle requests from the application that call ",(0,n.jsx)(s.code,{children:"Open datastore"}),". Requests internally use the ",(0,n.jsx)(s.a,{href:"/docs/es/REST/gettingStarted",children:"REST API"}),", which means that they might require ",(0,n.jsx)(s.a,{href:"/docs/es/REST/authUsers",children:"available licenses"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"Utilizando-sesiones-web",children:"Utilizando sesiones web"}),"\n",(0,n.jsxs)(s.p,{children:["When you work with a remote datastore referenced through calls to the ",(0,n.jsx)(s.a,{href:"/docs/es/API/DataStoreClass#open-datastore",children:(0,n.jsx)(s.code,{children:"Open datastore"})})," command, the connection with the requesting processes is handled via ",(0,n.jsx)(s.a,{href:"/docs/es/WebServer/sessions",children:"web sessions"})," on the remote machine."]}),"\n",(0,n.jsxs)(s.p,{children:["The web session created on the remote datastore is identified using a internal session ID which is associated to the ",(0,n.jsx)(s.code,{children:"localID"})," on the 4D application side. Esta sesi\xf3n gestiona autom\xe1ticamente el acceso a los datos, a las selecciones de entidades o a las entidades."]}),"\n",(0,n.jsxs)(s.p,{children:["El ",(0,n.jsx)(s.code,{children:"localID"})," es local a la m\xe1quina que se conecta al datastore remoto, lo que significa:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Si otros procesos de la misma aplicaci\xf3n necesitan acceder al mismo datastore remoto, pueden utilizar el mismo ",(0,n.jsx)(s.code,{children:"localID"})," y, de este modo, compartir la misma sesi\xf3n."]}),"\n",(0,n.jsxs)(s.li,{children:["Si otro proceso de la misma aplicaci\xf3n abre el mismo datastore remoto pero con otro ",(0,n.jsx)(s.code,{children:"localID"}),", crear\xe1 una nueva sesi\xf3n en el datastore remoto."]}),"\n",(0,n.jsxs)(s.li,{children:["Si otra m\xe1quina se conecta al mismo datastore remoto con el mismo ",(0,n.jsx)(s.code,{children:"localID"}),", crear\xe1 otra sesi\xf3n con otra cookie."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Estos principios se ilustran en los gr\xe1ficos siguientes:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:o(874713).A+"",width:"962",height:"719"})}),"\n",(0,n.jsx)(s.h3,{id:"Visualizaci\xf3n-de-las-sesiones",children:"Visualizaci\xf3n de las sesiones"}),"\n",(0,n.jsx)(s.p,{children:"Los procesos que gestionan las sesiones de acceso al datastore se muestran en la ventana de administraci\xf3n de 4D Server:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:'nombre: "REST Handler: \\<process name>"'}),"\n",(0,n.jsx)(s.li,{children:"tipo: tipo Worker Server HTTP"}),"\n",(0,n.jsxs)(s.li,{children:["sesi\xf3n: el nombre de la sesi\xf3n es el nombre de usuario que se pasa al comando ",(0,n.jsx)(s.code,{children:"Open datastore"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"En el siguiente ejemplo, se est\xe1n ejecutando dos procesos para la misma sesi\xf3n:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:o(643411).A+"",width:"1402",height:"708"})}),"\n",(0,n.jsx)(s.h2,{id:"Cierre-de-las-sesiones",children:"Cierre de las sesiones"}),"\n",(0,n.jsxs)(s.p,{children:["As described in the ",(0,n.jsx)(s.a,{href:"/docs/es/WebServer/sessions#session-lifetime",children:"session lifetime"})," paragraph, a web session is automatically closed by 4D when there has been no activity during its timeout period. El tiempo de espera por defecto es de 60 mn, pero este valor puede modificarse utilizando el par\xe1metro ",(0,n.jsx)(s.em,{children:"connectionInfo"})," del comando ",(0,n.jsx)(s.code,{children:"Open datastore"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"Si se env\xeda una solicitud al almac\xe9n de datos remoto despu\xe9s de haber cerrado la sesi\xf3n, \xe9sta se vuelve a crear autom\xe1ticamente si es posible (licencia disponible, servidor no detenido...). However, keep in mind that the context of the session regarding locks and transactions is lost (see below)."}),"\n",(0,n.jsx)(s.h2,{id:"Bloqueo-y-transacciones",children:"Bloqueo y transacciones"}),"\n",(0,n.jsx)(s.p,{children:"Las funcionalidades ORDA relacionadas con el bloqueo de entidades y transacciones se gestionan a nivel del proceso en los datastores remotos, igual que en el modo cliente/servidor ORDA:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Si un proceso bloquea una entidad de un datastores remoto, la entidad se bloquea para todos los otros procesos, incluso cuando estos procesos comparten la misma sesi\xf3n (ver ",(0,n.jsx)(s.a,{href:"/docs/es/ORDA/entities#entity-locking",children:"Bloqueo de entidades"}),"). Si varias entidades que apuntan a un mismo registro han sido bloqueadas en un proceso, todas deben ser desbloqueadas en el proceso para eliminar el bloqueo. Si se ha puesto un bloqueo en una entidad, el bloqueo se elimina cuando ya no hay ninguna referencia a esta entidad en la memoria."]}),"\n",(0,n.jsxs)(s.li,{children:["Las transacciones pueden iniciarse, validarse o cancelarse por separado en cada almac\xe9n de datos remoto mediante las funciones ",(0,n.jsx)(s.code,{children:"dataStore.startTransaction()"}),", ",(0,n.jsx)(s.code,{children:"dataStore.cancelTransaction()"})," y ",(0,n.jsx)(s.code,{children:"dataStore.validateTransaction()"}),". No afectan a otros almacenes de datos."]}),"\n",(0,n.jsxs)(s.li,{children:["Los comandos cl\xe1sicos del lenguaje 4D (",(0,n.jsx)(s.code,{children:"START TRANSACTION"}),", ",(0,n.jsx)(s.code,{children:"VALIDATE TRANSACTION"}),", ",(0,n.jsx)(s.code,{children:"CANCEL TRANSACTION"}),") s\xf3lo se aplican al datastore principal (devuelto por ",(0,n.jsx)(s.code,{children:"ds"}),").\nSi una entidad de un datastore remoto es retenida por una transacci\xf3n en un proceso, los otros procesos no pueden actualizarla, incluso si estos procesos comparten la misma sesi\xf3n."]}),"\n",(0,n.jsxs)(s.li,{children:["Los bloqueos en las entidades son eliminados y las transacciones son anuladas:\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"cuando el proceso es eliminado."}),"\n",(0,n.jsx)(s.li,{children:"cuando la sesi\xf3n se cierra en el servidor"}),"\n",(0,n.jsx)(s.li,{children:"cuando la sesi\xf3n es terminada desde la ventana de administraci\xf3n del servidor."}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},221020:(e,s,o)=>{var n=o(296540),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,o){var n,i={},l=null,c=null;for(n in void 0!==o&&(l=""+o),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(c=s.ref),s)t.call(s,n)&&!d.hasOwnProperty(n)&&(i[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===i[n]&&(i[n]=s[n]);return{$$typeof:a,type:e,key:l,ref:c,props:i,_owner:r.current}}s.Fragment=i,s.jsx=l,s.jsxs=l},474848:(e,s,o)=>{e.exports=o(221020)},643411:(e,s,o)=>{o.d(s,{A:()=>n});const n=o.p+"assets/images/sessionAdmin-fb7129cb6aaab939e9e8b20cb43bce8f.png"},874713:(e,s,o)=>{o.d(s,{A:()=>n});const n=o.p+"assets/images/sessions-69775ca2d11bfdbc289284efe41c0b59.png"},28453:(e,s,o)=>{o.d(s,{R:()=>t,x:()=>r});var n=o(296540);const a={},i=n.createContext(a);function t(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);