/*! For license information please see 5ec68923.96911e84.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95346],{989750:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=t(474848),o=t(28453);const s={id:"sql-server",title:"P\xe1gina servidor SQL"},i=void 0,a={id:"ServerWindow/sql-server",title:"P\xe1gina servidor SQL",description:"The SQL Server page groups together information about the integrated SQL server of 4D Server. It also includes a button that can be used to control the activation of the server.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/ServerWindow/sql-server.md",sourceDirName:"ServerWindow",slug:"/ServerWindow/sql-server",permalink:"/docs/pt/20/ServerWindow/sql-server",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fsql-server.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"sql-server",title:"P\xe1gina servidor SQL"},sidebar:"docs",previous:{title:"P\xe1gina Servidor de aplica\xe7\xf5es",permalink:"/docs/pt/20/ServerWindow/application-server"},next:{title:"P\xe1gina Servidor HTTP",permalink:"/docs/pt/20/ServerWindow/http-server"}},l={},d=[{value:"Iniciar / Parar o SQL Server",id:"iniciar--parar-o-sql-server",level:2},{value:"Informa\xe7\xe3o",id:"informa\xe7\xe3o",level:2},{value:"Configura\xe7\xe3o",id:"configura\xe7\xe3o",level:3},{value:"Conex\xf5es",id:"conex\xf5es",level:3},{value:"Liga\xe7\xf5es m\xe1ximas",id:"liga\xe7\xf5es-m\xe1ximas",level:3}];function c(e){const r={blockquote:"blockquote",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.strong,{children:"SQL Server"})," page groups together information about the integrated SQL server of 4D Server. It also includes a button that can be used to control the activation of the server."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:t(889111).A+"",width:"1036",height:"498"})}),"\n",(0,n.jsx)(r.p,{children:"The upper part of the page provides information about the current status of the SQL server of 4D Server."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Estado"}),": Iniciado ou Parado"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Starting time"}),": Date and time the SQL server was last launched."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Uptime"}),": Time elapsed since last startup of the SQL server."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"iniciar--parar-o-sql-server",children:"Iniciar / Parar o SQL Server"}),"\n",(0,n.jsx)(r.p,{children:"Este bot\xe3o alterna e pode ser usado para controlar a ativa\xe7\xe3o do servidor SQL de 4D Server."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:['When the SQL server state is "Started," the button is titled ',(0,n.jsx)(r.strong,{children:"Stop SQL Server"}),". If you click on this button, the 4D Server SQL server is immediately stopped; it no longer replies to any external SQL requests received on the designated TCP port."]}),"\n",(0,n.jsxs)(r.li,{children:['When the SQL server state is "Stopped," the button is titled ',(0,n.jsx)(r.strong,{children:"Start SQL Server"}),". If you click on this button, the 4D Server SQL server is immediately started; it replies to any external SQL queries received on the designated TCP port. Note that you will need a suitable license to be able to use the 4D SQL server."]}),"\n"]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"The SQL server can also be launched automatically on application startup (option in the Settings) or by programming."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"informa\xe7\xe3o",children:"Informa\xe7\xe3o"}),"\n",(0,n.jsx)(r.h3,{id:"configura\xe7\xe3o",children:"Configura\xe7\xe3o"}),"\n",(0,n.jsx)(r.p,{children:"This area provides information about the SQL server configuration parameters: automatic launching on startup, listening IP address, TCP port (19812 by default) and enabling of SSL for SQL connections (does not concern 4D nor HTTP connections)."}),"\n",(0,n.jsx)(r.p,{children:"Estes par\xe2metros podem ser modificados atrav\xe9s das Prefer\xeancias 4D."}),"\n",(0,n.jsx)(r.h3,{id:"conex\xf5es",children:"Conex\xf5es"}),"\n",(0,n.jsx)(r.p,{children:"N\xfamero de liga\xe7\xf5es SQL atualmente abertas no 4D Server."}),"\n",(0,n.jsx)(r.h3,{id:"liga\xe7\xf5es-m\xe1ximas",children:"Liga\xe7\xf5es m\xe1ximas"}),"\n",(0,n.jsx)(r.p,{children:"N\xfamero m\xe1ximo de liga\xe7\xf5es SQL simult\xe2neas permitidas. Este valor depende da licen\xe7a instalada na m\xe1quina do servidor."})]})}function u(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},221020:(e,r,t)=>{var n=t(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var n,s={},d=null,c=null;for(n in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(c=r.ref),r)i.call(r,n)&&!l.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:o,type:e,key:d,ref:c,props:s,_owner:a.current}}r.Fragment=s,r.jsx=d,r.jsxs=d},474848:(e,r,t)=>{e.exports=t(221020)},889111:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/server-admin-sql-page-073207509ee5a53f2e3e69c2d106d4ab.png"},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var n=t(296540);const o={},s=n.createContext(o);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);