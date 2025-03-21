"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["39161"],{717168:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>d,assets:()=>l,toc:()=>o,contentTitle:()=>c});var d=JSON.parse('{"id":"commands-legacy/license-usage","title":"License usage","description":"License usage : Collection","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/license-usage.md","sourceDirName":"commands-legacy","slug":"/commands/license-usage","permalink":"/docs/es/commands/license-usage","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flicense-usage.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"license-usage","title":"License usage","slug":"/commands/license-usage","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"License info","permalink":"/docs/es/commands/license-info"},"next":{"title":"Refresh license","permalink":"/docs/es/commands/refresh-license"}}'),i=s("785893"),r=s("250065");let t={id:"license-usage",title:"License usage",slug:"/commands/license-usage",displayed_sidebar:"docs"},c=void 0,l={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"objeto de sesi\xf3n para sesiones de clientes 4D",id:"objeto-de-sesi\xf3n-para-sesiones-de-clientes-4d",level:2},{value:"objeto sesi\xf3n para sesiones SQL",id:"objeto-sesi\xf3n-para-sesiones-sql",level:2},{value:"objeto sesi\xf3n para sesiones REST",id:"objeto-sesi\xf3n-para-sesiones-rest",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"License usage"})," : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultado"}),(0,i.jsx)(n.td,{children:"Collection"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Una colecci\xf3n de objetos con informaci\xf3n sobre las licencias retenidas."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.strong,{children:"License usage"})," devuelve una colecci\xf3n de objetos que contienen informaci\xf3n sobre las licencias retenidas."]}),"\n",(0,i.jsx)(n.p,{children:"Cada objeto de la colecci\xf3n devuelta tiene los siguientes atributos:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Nombre de la propiedad"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Tipo"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"productId"}),(0,i.jsx)(n.td,{children:"N\xfamero"}),(0,i.jsx)(n.td,{children:"ID del tipo de licencia"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"productName"}),(0,i.jsx)(n.td,{children:"Texto"}),(0,i.jsx)(n.td,{children:"Nombre del tipo de licencia"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"productUsedCount"}),(0,i.jsx)(n.td,{children:"N\xfamero"}),(0,i.jsx)(n.td,{children:"N\xfamero de licencias retenidas (incluida \xe9sta) cuando se retuvo la licencia"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"productBalance"}),(0,i.jsx)(n.td,{children:"N\xfamero"}),(0,i.jsx)(n.td,{children:"N\xfamero de licencias restantes para el producto (justo despu\xe9s de la acci\xf3n)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"globalProductUsedCount"}),(0,i.jsx)(n.td,{children:"N\xfamero"}),(0,i.jsx)(n.td,{children:"Cuando hay varios servidores funcionando en la misma m\xe1quina, muestra el recuento retenido para todos ellos"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"token"}),(0,i.jsx)(n.td,{children:"N\xfamero"}),(0,i.jsx)(n.td,{children:"ID \xfanico de la operaci\xf3n"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"time"}),(0,i.jsx)(n.td,{children:"Texto"}),(0,i.jsx)(n.td,{children:"Marca de tiempo que indica cu\xe1ndo se retuvo la licencia, en formato ISO 8601"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"reason"}),(0,i.jsx)(n.td,{children:"Texto"}),(0,i.jsx)(n.td,{children:"El motivo/la causa de este uso de la licencia"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"session"}),(0,i.jsx)(n.td,{children:"Objeto"}),(0,i.jsx)(n.td,{children:"Contiene informaci\xf3n espec\xedfica sobre la sesi\xf3n de la licencia retenida"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Dependiendo del tipo de sesi\xf3n (cliente 4D o REST, por ejemplo), el contenido del objeto de sesi\xf3n en la tabla anterior variar\xe1. Ver m\xe1s abajo para m\xe1s detalles."}),"\n",(0,i.jsx)(n.h2,{id:"objeto-de-sesi\xf3n-para-sesiones-de-clientes-4d",children:"objeto de sesi\xf3n para sesiones de clientes 4D"}),"\n",(0,i.jsxs)(n.p,{children:["Dentro de la colecci\xf3n devuelta para las sesiones 4D, cada elemento contiene un objeto de sesi\xf3n id\xe9ntico al devuelto por el comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/process-activity",children:"Process activity"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Nombre de la propiedad"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Tipo"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"type"}),(0,i.jsx)(n.td,{children:"Texto (enum)"}),(0,i.jsx)(n.td,{children:'Tipo de sesi\xf3n. Valores posibles: "remote", "storedProcedure", "web", "rest"'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"userName"}),(0,i.jsx)(n.td,{children:"Texto"}),(0,i.jsx)(n.td,{children:"Nombre de usuario"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"machineName"}),(0,i.jsx)(n.td,{children:"Texto"}),(0,i.jsx)(n.td,{children:"Nombre de la m\xe1quina remota"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"systemUserName"}),(0,i.jsx)(n.td,{children:"Texto"}),(0,i.jsx)(n.td,{children:"Nombre de la sesi\xf3n del sistema abierta en la m\xe1quina remota"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"IPAddress"}),(0,i.jsx)(n.td,{children:"Texto"}),(0,i.jsx)(n.td,{children:"Direcci\xf3n IP de la m\xe1quina remota"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"hostType"}),(0,i.jsx)(n.td,{children:"Texto (enum)"}),(0,i.jsx)(n.td,{children:'Tipo de host. Valores posibles: "windows", "mac", "browser"'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"creationDateTime"}),(0,i.jsx)(n.td,{children:"Fecha ISO 8601"}),(0,i.jsx)(n.td,{children:"Fecha y hora de conexi\xf3n de la m\xe1quina remota"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"state"}),(0,i.jsx)(n.td,{children:"Texto (enum)"}),(0,i.jsx)(n.td,{children:'Estado de la sesi\xf3n. Valores posibles: "activa", "pospuesta", "dormida"'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ID"}),(0,i.jsx)(n.td,{children:"Texto"}),(0,i.jsx)(n.td,{children:"UUID de la sesi\xf3n"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"persistentID"}),(0,i.jsx)(n.td,{children:"Texto"}),(0,i.jsx)(n.td,{children:"ID persistente de la sesi\xf3n"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"objeto-sesi\xf3n-para-sesiones-sql",children:"objeto sesi\xf3n para sesiones SQL"}),"\n",(0,i.jsx)(n.p,{children:"Esta tabla detalla el contenido del objeto de sesi\xf3n para las sesiones SQL:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Nombre de la propiedad"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Tipo"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"IPAddress"}),(0,i.jsx)(n.td,{children:"Texto"}),(0,i.jsx)(n.td,{children:"Direcci\xf3n IP de la sesi\xf3n"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"userAgent"}),(0,i.jsx)(n.td,{children:"Texto"}),(0,i.jsx)(n.td,{children:"Agente de usuario"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"userName"}),(0,i.jsx)(n.td,{children:"Texto"}),(0,i.jsx)(n.td,{children:"Nombre de usuario"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"userId"}),(0,i.jsx)(n.td,{children:"N\xfamero"}),(0,i.jsx)(n.td,{children:"ID de usuario"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"objeto-sesi\xf3n-para-sesiones-rest",children:"objeto sesi\xf3n para sesiones REST"}),"\n",(0,i.jsx)(n.p,{children:"Esta tabla detalla el contenido del objeto de sesi\xf3n para las sesiones REST:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Nombre de la propiedad"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Tipo"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"userName"}),(0,i.jsx)(n.td,{children:"Texto"}),(0,i.jsx)(n.td,{children:"Nombre de usuario"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sessionID"}),(0,i.jsx)(n.td,{children:"Texto"}),(0,i.jsx)(n.td,{children:"ID de la sesi\xf3n REST"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"IPAddress"}),(0,i.jsx)(n.td,{children:"Texto"}),(0,i.jsx)(n.td,{children:"ID del cliente que inici\xf3 la sesi\xf3n REST"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"isDatastore"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"True si la solicitud REST proviene de un datastore"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"1782"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return t}});var d=s(667294);let i={},r=d.createContext(i);function t(e){let n=d.useContext(r);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);