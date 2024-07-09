/*! For license information please see 4edde94a.805ea2fb.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[33193],{211326:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>t,toc:()=>l});var i=n(474848),o=n(28453);const s={id:"sql-server",title:"P\xe1gina servidor SQL"},a=void 0,t={id:"ServerWindow/sql-server",title:"P\xe1gina servidor SQL",description:"La p\xe1gina Servidor SQL agrupa informaci\xf3n sobre el servidor SQL integrado de 4D Server. Tambi\xe9n incluye un bot\xf3n que puede utilizarse para controlar la activaci\xf3n del servidor.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/ServerWindow/sql-server.md",sourceDirName:"ServerWindow",slug:"/ServerWindow/sql-server",permalink:"/docs/es/20/ServerWindow/sql-server",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fsql-server.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"sql-server",title:"P\xe1gina servidor SQL"},sidebar:"docs",previous:{title:"P\xe1gina Servidor de aplicaci\xf3n",permalink:"/docs/es/20/ServerWindow/application-server"},next:{title:"P\xe1gina del servidor HTTP",permalink:"/docs/es/20/ServerWindow/http-server"}},d={},l=[{value:"Iniciar/detener el servidor SQL",id:"Iniciardetener-el-servidor-SQL",level:2},{value:"Informaci\xf3n",id:"Informaci\xf3n",level:2},{value:"Configuraci\xf3n",id:"Configuraci\xf3n",level:3},{value:"Conecciones",id:"Conecciones",level:3},{value:"Conexiones m\xe1ximas",id:"Conexiones-m\xe1ximas",level:3}];function c(e){const r={blockquote:"blockquote",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:["La p\xe1gina ",(0,i.jsx)(r.strong,{children:"Servidor SQL"})," agrupa informaci\xf3n sobre el servidor SQL integrado de 4D Server. Tambi\xe9n incluye un bot\xf3n que puede utilizarse para controlar la activaci\xf3n del servidor."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{src:n(767519).A+"",width:"1036",height:"498"})}),"\n",(0,i.jsx)(r.p,{children:"La parte superior de la p\xe1gina provee informaci\xf3n sobre el estado actual del servidor SQL de 4D Server."}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Estado"}),": Iniciado o Detenido"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Hora de inicio"}),": fecha y hora en que el servidor SQL se inici\xf3 por \xfaltima vez."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Duraci\xf3n del funcionamiento"}),": tiempo transcurrido desde el \xfaltimo arranque del servidor SQL."]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"Iniciardetener-el-servidor-SQL",children:"Iniciar/detener el servidor SQL"}),"\n",(0,i.jsx)(r.p,{children:"Este bot\xf3n se alterna y puede utilizarse para controlar la activaci\xf3n del servidor SQL de 4D Server."}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:['Cuando el estado del servidor SQL es "Iniciado", el bot\xf3n se etiqueta ',(0,i.jsx)(r.strong,{children:"Detener el servidor SQL"}),". Si presiona este bot\xf3n, el servidor SQL de 4D Server se detiene inmediatamente; ya no responde a ninguna petici\xf3n SQL externa recibida en el puerto TCP designado."]}),"\n",(0,i.jsxs)(r.li,{children:['Cuando el estado del servidor SQL es "Detenido", el bot\xf3n se etiqueta ',(0,i.jsx)(r.strong,{children:"Iniciar el servidor SQL"}),". Si presiona este bot\xf3n, el servidor SQL de 4D Server se inicia inmediatamente; responde a las peticiones SQL externas recibida en el puerto TCP designado. Tenga en cuenta que necesitar\xe1 una licencia adecuada para poder utilizar el servidor SQL de 4D."]}),"\n"]}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:"El servidor SQL tambi\xe9n puede iniciarse autom\xe1ticamente al iniciar la aplicaci\xf3n (opci\xf3n de las Preferencias) o por programaci\xf3n."}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"Informaci\xf3n",children:"Informaci\xf3n"}),"\n",(0,i.jsx)(r.h3,{id:"Configuraci\xf3n",children:"Configuraci\xf3n"}),"\n",(0,i.jsx)(r.p,{children:"Esta \xe1rea ofrece informaci\xf3n sobre los par\xe1metros de configuraci\xf3n del servidor SQL: lanzamiento autom\xe1tico al inicio, direcci\xf3n IP de escucha, puerto TCP (19812 por defecto) y habilitaci\xf3n de SSL para conexiones SQL (no afecta a las conexiones 4D ni HTTP)."}),"\n",(0,i.jsx)(r.p,{children:"Estos par\xe1metros pueden modificarse a trav\xe9s de las Preferencias de 4D."}),"\n",(0,i.jsx)(r.h3,{id:"Conecciones",children:"Conecciones"}),"\n",(0,i.jsx)(r.p,{children:"N\xfamero de conexiones SQL abiertas actualmente en 4D Server."}),"\n",(0,i.jsx)(r.h3,{id:"Conexiones-m\xe1ximas",children:"Conexiones m\xe1ximas"}),"\n",(0,i.jsx)(r.p,{children:"N\xfamero m\xe1ximo de conexiones SQL simult\xe1neas autorizadas. Este valor depende de la licencia instalada en el equipo servidor."})]})}function u(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},221020:(e,r,n)=>{var i=n(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,t=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var i,s={},l=null,c=null;for(i in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(c=r.ref),r)a.call(r,i)&&!d.hasOwnProperty(i)&&(s[i]=r[i]);if(e&&e.defaultProps)for(i in r=e.defaultProps)void 0===s[i]&&(s[i]=r[i]);return{$$typeof:o,type:e,key:l,ref:c,props:s,_owner:t.current}}r.Fragment=s,r.jsx=l,r.jsxs=l},474848:(e,r,n)=>{e.exports=n(221020)},767519:(e,r,n)=>{n.d(r,{A:()=>i});const i=n.p+"assets/images/server-admin-sql-page-073207509ee5a53f2e3e69c2d106d4ab.png"},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>t});var i=n(296540);const o={},s=i.createContext(o);function a(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);