"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83139],{738462:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var r=i(474848),s=i(28453);const o={id:"sql-server",title:"P\xe1gina servidor SQL"},a=void 0,d={id:"ServerWindow/sql-server",title:"P\xe1gina servidor SQL",description:"La p\xe1gina Servidor SQL agrupa informaci\xf3n sobre el servidor SQL integrado de 4D Server. Tambi\xe9n incluye un bot\xf3n que puede utilizarse para controlar la activaci\xf3n del servidor.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/ServerWindow/sql-server.md",sourceDirName:"ServerWindow",slug:"/ServerWindow/sql-server",permalink:"/docs/es/ServerWindow/sql-server",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fsql-server.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"sql-server",title:"P\xe1gina servidor SQL"},sidebar:"docs",previous:{title:"P\xe1gina Servidor de aplicaci\xf3n",permalink:"/docs/es/ServerWindow/application-server"},next:{title:"P\xe1gina del servidor HTTP",permalink:"/docs/es/ServerWindow/http-server"}},t={},c=[{value:"Iniciar/detener el servidor SQL",id:"iniciardetener-el-servidor-sql",level:2},{value:"Informaci\xf3n",id:"informaci\xf3n",level:2},{value:"Configuraci\xf3n",id:"configuraci\xf3n",level:3},{value:"Conecciones",id:"conecciones",level:3},{value:"Conexiones m\xe1ximas",id:"conexiones-m\xe1ximas",level:3}];function l(e){const n={blockquote:"blockquote",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["La p\xe1gina ",(0,r.jsx)(n.strong,{children:"Servidor SQL"})," agrupa informaci\xf3n sobre el servidor SQL integrado de 4D Server. Tambi\xe9n incluye un bot\xf3n que puede utilizarse para controlar la activaci\xf3n del servidor."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(388557).A+"",width:"1036",height:"498"})}),"\n",(0,r.jsx)(n.p,{children:"La parte superior de la p\xe1gina provee informaci\xf3n sobre el estado actual del servidor SQL de 4D Server."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Estado"}),": Iniciado o Detenido"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Hora de inicio"}),": fecha y hora en que el servidor SQL se inici\xf3 por \xfaltima vez."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Duraci\xf3n del funcionamiento"}),": tiempo transcurrido desde el \xfaltimo arranque del servidor SQL."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"iniciardetener-el-servidor-sql",children:"Iniciar/detener el servidor SQL"}),"\n",(0,r.jsx)(n.p,{children:"Este bot\xf3n se alterna y puede utilizarse para controlar la activaci\xf3n del servidor SQL de 4D Server."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['Cuando el estado del servidor SQL es "Iniciado", el bot\xf3n se etiqueta ',(0,r.jsx)(n.strong,{children:"Detener el servidor SQL"}),". Si presiona este bot\xf3n, el servidor SQL de 4D Server se detiene inmediatamente; ya no responde a ninguna petici\xf3n SQL externa recibida en el puerto TCP designado."]}),"\n",(0,r.jsxs)(n.li,{children:['Cuando el estado del servidor SQL es "Detenido", el bot\xf3n se etiqueta ',(0,r.jsx)(n.strong,{children:"Iniciar el servidor SQL"}),". Si presiona este bot\xf3n, el servidor SQL de 4D Server se inicia inmediatamente; responde a las peticiones SQL externas recibida en el puerto TCP designado. Tenga en cuenta que necesitar\xe1 una licencia adecuada para poder utilizar el servidor SQL de 4D."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"El servidor SQL tambi\xe9n puede iniciarse autom\xe1ticamente al iniciar la aplicaci\xf3n (opci\xf3n de las Preferencias) o por programaci\xf3n."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"informaci\xf3n",children:"Informaci\xf3n"}),"\n",(0,r.jsx)(n.h3,{id:"configuraci\xf3n",children:"Configuraci\xf3n"}),"\n",(0,r.jsx)(n.p,{children:"Esta \xe1rea ofrece informaci\xf3n sobre los par\xe1metros de configuraci\xf3n del servidor SQL: lanzamiento autom\xe1tico al inicio, direcci\xf3n IP de escucha, puerto TCP (19812 por defecto) y habilitaci\xf3n de SSL para conexiones SQL (no afecta a las conexiones 4D ni HTTP)."}),"\n",(0,r.jsx)(n.p,{children:"Estos par\xe1metros pueden modificarse a trav\xe9s de las Preferencias de 4D."}),"\n",(0,r.jsx)(n.h3,{id:"conecciones",children:"Conecciones"}),"\n",(0,r.jsx)(n.p,{children:"N\xfamero de conexiones SQL abiertas actualmente en 4D Server."}),"\n",(0,r.jsx)(n.h3,{id:"conexiones-m\xe1ximas",children:"Conexiones m\xe1ximas"}),"\n",(0,r.jsx)(n.p,{children:"N\xfamero m\xe1ximo de conexiones SQL simult\xe1neas autorizadas. Este valor depende de la licencia instalada en el equipo servidor."})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},388557:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/server-admin-sql-page-073207509ee5a53f2e3e69c2d106d4ab.png"},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>d});var r=i(296540);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);