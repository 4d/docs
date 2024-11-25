"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["94932"],{190743:function(e,n,i){i.r(n),i.d(n,{metadata:()=>a,contentTitle:()=>s,default:()=>p,assets:()=>l,toc:()=>d,frontMatter:()=>c});var a=JSON.parse('{"id":"ServerWindow/application-server","title":"P\xe1gina Servidor de aplicaci\xf3n","description":"La p\xe1gina Servidor de aplicaciones agrupa informaci\xf3n sobre la aplicaci\xf3n de escritorio publicada por 4D Server y puede utilizarse para gestionar esta publicaci\xf3n.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/ServerWindow/application-server.md","sourceDirName":"ServerWindow","slug":"/ServerWindow/application-server","permalink":"/docs/es/20-R6/ServerWindow/application-server","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fapplication-server.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"application-server","title":"P\xe1gina Servidor de aplicaci\xf3n"},"sidebar":"docs","previous":{"title":"P\xe1gina Mantenimiento","permalink":"/docs/es/20-R6/ServerWindow/maintenance"},"next":{"title":"P\xe1gina servidor SQL","permalink":"/docs/es/20-R6/ServerWindow/sql-server"}}'),r=i("785893"),o=i("250065");let c={id:"application-server",title:"P\xe1gina Servidor de aplicaci\xf3n"},s=void 0,l={},d=[{value:"Aceptar/Rechazar nuevas conexiones",id:"aceptarrechazar-nuevas-conexiones",level:2},{value:"Informaci\xf3n",id:"informaci\xf3n",level:2},{value:"Configuraci\xf3n",id:"configuraci\xf3n",level:3},{value:"Memoria",id:"memoria",level:3},{value:"Conexiones aplicaci\xf3n servidor",id:"conexiones-aplicaci\xf3n-servidor",level:3}];function t(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"La p\xe1gina Servidor de aplicaciones agrupa informaci\xf3n sobre la aplicaci\xf3n de escritorio publicada por 4D Server y puede utilizarse para gestionar esta publicaci\xf3n."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(127078).Z+"",width:"1036",height:"699"})}),"\n",(0,r.jsx)(n.p,{children:"La parte superior de la p\xe1gina ofrece informaci\xf3n sobre el estado actual del servidor de aplicaciones de 4D Server."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Estado"}),": Iniciado o Detenido."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Hora de inicio"}),": fecha y hora de inicio del servidor de aplicaciones. Esta fecha corresponde a la apertura del proyecto por parte de 4D Server."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Duraci\xf3n de funcionamiento"}),": tiempo transcurrido desde la \xfaltima apertura del proyecto por el servidor."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"aceptarrechazar-nuevas-conexiones",children:"Aceptar/Rechazar nuevas conexiones"}),"\n",(0,r.jsx)(n.p,{children:"Este bot\xf3n se activa y se puede utilizar para gestionar el acceso de nuevas m\xe1quinas cliente de escritorio al servidor de aplicaciones."}),"\n",(0,r.jsx)(n.p,{children:"Por defecto, cuando se publica el proyecto:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'La etiqueta del bot\xf3n es "Rechazar nuevas conexiones."'}),"\n",(0,r.jsx)(n.li,{children:"Los nuevos clientes de escritorio pueden conectarse libremente (dentro de los l\xedmites de las conexiones permitidas por la licencia)."}),"\n",(0,r.jsx)(n.li,{children:'El nombre del proyecto se publica en la caja de di\xe1logo de conexi\xf3n remota (si la opci\xf3n "Publicar el nombre de la base al inicio en el di\xe1logo de conexi\xf3n" est\xe1 marcada en las Preferencias).'}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Si presiona el bot\xf3n ",(0,r.jsx)(n.strong,{children:"Rechazar nuevas conexiones"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'El t\xedtulo del bot\xf3n cambia a "Aceptar nuevas conexiones."'}),"\n",(0,r.jsx)(n.li,{children:"Ning\xfan nuevo cliente puede entonces conectarse. Los clientes que intenten conectarse recibir\xe1n el siguiente mensaje:"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(18989).Z+"",width:"671",height:"255"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"El nombre del proyecto ya no aparece en el di\xe1logo de conexi\xf3n remota."}),"\n",(0,r.jsx)(n.li,{children:"Los clientes de escritorio que ya est\xe1n conectados no se desconectan y pueden seguir trabajando con normalidad."}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Puede realizar la misma acci\xf3n con el comando ",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1635.html",children:(0,r.jsx)(n.code,{children:"REJECT NEW REMOTE CONNECTIONS"})}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Si presiona el bot\xf3n ",(0,r.jsx)(n.strong,{children:"Aceptar nuevas conexiones"}),", el servidor de aplicaciones vuelve a su estado por defecto."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Esta funci\xf3n permite, por ejemplo, que un administrador realice diversas operaciones de mantenimiento (verificaci\xf3n, compactaci\xf3n, etc.) justo despu\xe9s de haber iniciado el servidor. Si el administrador utiliza una conexi\xf3n remota, puede estar seguro de ser el \xfanico que modifica los datos. Tambi\xe9n es posible utilizar esta funci\xf3n para preparar una operaci\xf3n de mantenimiento que requiera que no haya ninguna m\xe1quina cliente conectada."}),"\n",(0,r.jsx)(n.h2,{id:"informaci\xf3n",children:"Informaci\xf3n"}),"\n",(0,r.jsx)(n.h3,{id:"configuraci\xf3n",children:"Configuraci\xf3n"}),"\n",(0,r.jsx)(n.p,{children:"Esta \xe1rea ofrece informaci\xf3n sobre el proyecto 4D publicado por el servidor: nombre y ubicaci\xf3n de los archivos de datos y de estructura y nombre del archivo de historial de la base. Puede hacer clic en el nombre del archivo de estructura o de datos para ver su ruta de acceso completa."}),"\n",(0,r.jsxs)(n.p,{children:["El campo ",(0,r.jsx)(n.strong,{children:"Mode"})," indica el modo de ejecuci\xf3n actual de la aplicaci\xf3n: compilada o interpretada."]}),"\n",(0,r.jsx)(n.p,{children:"La parte inferior del \xe1rea indica los par\xe1metros de configuraci\xf3n del servidor (lanzados como servicio, puerto y direcci\xf3n IP) y la activaci\xf3n del TLS para las conexiones cliente-servidor (no afecta a las conexiones SQL ni HTTP)."}),"\n",(0,r.jsx)(n.h3,{id:"memoria",children:"Memoria"}),"\n",(0,r.jsxs)(n.p,{children:["Esta \xe1rea indica la ",(0,r.jsx)(n.strong,{children:"memoria cach\xe9 total"})," (par\xe1metro definido en las preferencias de la base) y la ",(0,r.jsx)(n.strong,{children:"memoria cach\xe9 utilizada"})," (asignaci\xf3n din\xe1mica por 4D Server en funci\xf3n de sus necesidades)."]}),"\n",(0,r.jsx)(n.h3,{id:"conexiones-aplicaci\xf3n-servidor",children:"Conexiones aplicaci\xf3n servidor"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"M\xe1ximo"}),": n\xfamero m\xe1ximo de conexiones cliente simult\xe1neas permitidas para el servidor de aplicaciones. Este valor depende de la licencia instalada en el equipo servidor."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Utilizado"}),": n\xfamero real de conexiones que se est\xe1n utilizando actualmente."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},127078:function(e,n,i){i.d(n,{Z:function(){return a}});let a=i.p+"assets/images/server-admin-application-page-2790afb1ca369f9c919e14a195be066d.png"},18989:function(e,n,i){i.d(n,{Z:function(){return a}});let a=i.p+"assets/images/server-error-5a94dad40acb679497621d693b40b05b.png"},250065:function(e,n,i){i.d(n,{Z:function(){return s},a:function(){return c}});var a=i(667294);let r={},o=a.createContext(r);function c(e){let n=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);