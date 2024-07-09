/*! For license information please see 843c6a0d.9dda6d42.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2998],{980892:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var o=n(474848),i=n(28453);const t={id:"sql-server",title:"P\xe1gina servidor SQL"},s=void 0,a={id:"ServerWindow/sql-server",title:"P\xe1gina servidor SQL",description:"La p\xe1gina Servidor SQL agrupa informaci\xf3n sobre el servidor SQL integrado de 4D Server. It also includes a button that can be used to control the activation of the server.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/ServerWindow/sql-server.md",sourceDirName:"ServerWindow",slug:"/ServerWindow/sql-server",permalink:"/docs/pt/ServerWindow/sql-server",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fsql-server.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"sql-server",title:"P\xe1gina servidor SQL"},sidebar:"docs",previous:{title:"P\xe1gina Servidor de aplica\xe7\xf5es",permalink:"/docs/pt/ServerWindow/application-server"},next:{title:"P\xe1gina Servidor HTTP",permalink:"/docs/pt/ServerWindow/http-server"}},d={},l=[{value:"Iniciar / Parar o SQL Server",id:"Iniciar--Parar-o-SQL-Server",level:2},{value:"Informa\xe7\xe3o",id:"Informa\xe7\xe3o",level:2},{value:"Configura\xe7\xe3o",id:"Configura\xe7\xe3o",level:3},{value:"Conex\xf5es",id:"Conex\xf5es",level:3},{value:"Liga\xe7\xf5es m\xe1ximas",id:"Liga\xe7\xf5es-m\xe1ximas",level:3}];function c(e){const r={blockquote:"blockquote",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:["La p\xe1gina ",(0,o.jsx)(r.strong,{children:"Servidor SQL"})," agrupa informaci\xf3n sobre el servidor SQL integrado de 4D Server. It also includes a button that can be used to control the activation of the server."]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{src:n(582243).A+"",width:"1036",height:"498"})}),"\n",(0,o.jsx)(r.p,{children:"The upper part of the page provides information about the current status of the SQL server of 4D Server."}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Estado"}),": Iniciado o Detenido"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Hora de inicio"}),": fecha y hora en que el servidor SQL se inici\xf3 por \xfaltima vez."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Duraci\xf3n del funcionamiento"}),": tiempo transcurrido desde el \xfaltimo arranque del servidor SQL."]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"Iniciar--Parar-o-SQL-Server",children:"Iniciar / Parar o SQL Server"}),"\n",(0,o.jsx)(r.p,{children:"Este bot\xe3o alterna e pode ser usado para controlar a ativa\xe7\xe3o do servidor SQL de 4D Server."}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:['Cuando el estado del servidor SQL es "Iniciado", el bot\xf3n se etiqueta ',(0,o.jsx)(r.strong,{children:"Detener el servidor SQL"}),". If you click on this button, the 4D Server SQL server is immediately stopped; it no longer replies to any external SQL requests received on the designated TCP port."]}),"\n",(0,o.jsxs)(r.li,{children:['Cuando el estado del servidor SQL es "Detenido", el bot\xf3n se etiqueta ',(0,o.jsx)(r.strong,{children:"Iniciar el servidor SQL"}),". If you click on this button, the 4D Server SQL server is immediately started; it replies to any external SQL queries received on the designated TCP port. Note that you will need a suitable license to be able to use the 4D SQL server."]}),"\n"]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsx)(r.p,{children:"The SQL server can also be launched automatically on application startup (option in the Settings) or by programming."}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"Informa\xe7\xe3o",children:"Informa\xe7\xe3o"}),"\n",(0,o.jsx)(r.h3,{id:"Configura\xe7\xe3o",children:"Configura\xe7\xe3o"}),"\n",(0,o.jsx)(r.p,{children:"This area provides information about the SQL server configuration parameters: automatic launching on startup, listening IP address, TCP port (19812 by default) and enabling of SSL for SQL connections (does not concern 4D nor HTTP connections)."}),"\n",(0,o.jsx)(r.p,{children:"Estes par\xe2metros podem ser modificados atrav\xe9s das Prefer\xeancias 4D."}),"\n",(0,o.jsx)(r.h3,{id:"Conex\xf5es",children:"Conex\xf5es"}),"\n",(0,o.jsx)(r.p,{children:"N\xfamero de liga\xe7\xf5es SQL atualmente abertas no 4D Server."}),"\n",(0,o.jsx)(r.h3,{id:"Liga\xe7\xf5es-m\xe1ximas",children:"Liga\xe7\xf5es m\xe1ximas"}),"\n",(0,o.jsx)(r.p,{children:"N\xfamero m\xe1ximo de liga\xe7\xf5es SQL simult\xe2neas permitidas. Este valor depende da licen\xe7a instalada na m\xe1quina do servidor."})]})}function u(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},221020:(e,r,n)=>{var o=n(296540),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var o,t={},l=null,c=null;for(o in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(c=r.ref),r)s.call(r,o)&&!d.hasOwnProperty(o)&&(t[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===t[o]&&(t[o]=r[o]);return{$$typeof:i,type:e,key:l,ref:c,props:t,_owner:a.current}}r.Fragment=t,r.jsx=l,r.jsxs=l},474848:(e,r,n)=>{e.exports=n(221020)},582243:(e,r,n)=>{n.d(r,{A:()=>o});const o=n.p+"assets/images/server-admin-sql-page-073207509ee5a53f2e3e69c2d106d4ab.png"},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>a});var o=n(296540);const i={},t=o.createContext(i);function s(e){const r=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(t.Provider,{value:r},e.children)}}}]);