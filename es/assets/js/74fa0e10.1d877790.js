"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77451"],{568481:function(e,n,s){s.r(n),s.d(n,{default:()=>x,frontMatter:()=>i,metadata:()=>d,assets:()=>o,toc:()=>c,contentTitle:()=>l});var d=JSON.parse('{"id":"REST/lock","title":"$lock","description":"Bloquea y desbloquea una entidad utilizando el mecanismo pesimista.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/REST/$lock.md","sourceDirName":"REST","slug":"/REST/lock","permalink":"/docs/es/REST/lock","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24lock.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"lock","title":"$lock"},"sidebar":"docs","previous":{"title":"$imageformat","permalink":"/docs/es/REST/imageformat"},"next":{"title":"$method","permalink":"/docs/es/REST/method"}}'),r=s("785893"),t=s("250065");let i={id:"lock",title:"$lock"},l=void 0,o={},c=[{value:"Sintaxis",id:"sintaxis",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:3},{value:"Respuesta",id:"respuesta",level:3},{value:"Ejemplo",id:"ejemplo",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Bloquea y desbloquea una entidad utilizando el ",(0,r.jsx)(n.a,{href:"/docs/es/ORDA/entities#pessimistic-lock",children:"mecanismo pesimista"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"sintaxis",children:"Sintaxis"}),"\n",(0,r.jsx)(n.p,{children:"Para bloquear una entidad para las otras sesiones y procesos 4D:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"/?$lock=true\n"})}),"\n",(0,r.jsx)(n.p,{children:"Para desbloquear la entidad para las otras sesiones y procesos 4D:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"/?$lock=false\n"})}),"\n",(0,r.jsxs)(n.p,{children:["La ",(0,r.jsxs)(n.a,{href:"/docs/es/API/EntityClass#lock",children:["propiedad ",(0,r.jsx)(n.code,{children:"lockKindText"})]}),' es "Locked by session".']}),"\n",(0,r.jsx)(n.h3,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["Los bloqueos activados por la API REST se colocan al nivel de la ",(0,r.jsx)(n.a,{href:"/docs/es/REST/authUsers#opening-sessions",children:"sesi\xf3n"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Una entidad bloqueada se ve como ",(0,r.jsx)(n.em,{children:"bloqueada"})," (es decir, las acciones de bloqueo / desbloqueo / actualizaci\xf3n / eliminaci\xf3n no son posibles) por:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"otras sesiones REST"}),"\n",(0,r.jsx)(n.li,{children:"los procesos 4D (cliente/servidor, almac\xe9n de datos remoto, monopuesto) ejecutadas en el servidor REST."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Una entidad bloqueada por la API REST s\xf3lo puede ser desbloqueada:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["por su bloqueador, es decir un ",(0,r.jsx)(n.code,{children:"/?$lock=false"})," en la sesi\xf3n REST que define ",(0,r.jsx)(n.code,{children:"/?$lock=true"})]}),"\n",(0,r.jsxs)(n.li,{children:["o si el ",(0,r.jsx)(n.a,{href:"/docs/es/REST/directory",children:"timeout de inactividad"})," de la sesi\xf3n se alcanza (la sesi\xf3n se cierra)."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"respuesta",children:"Respuesta"}),"\n",(0,r.jsxs)(n.p,{children:["Una petici\xf3n ",(0,r.jsx)(n.code,{children:"?$lock"})," devuelve un objeto JSON con ",(0,r.jsx)(n.code,{children:'"result"=true'})," si la operaci\xf3n de bloqueo se reutiliza y ",(0,r.jsx)(n.code,{children:'"result"=false'})," si falla."]}),"\n",(0,r.jsx)(n.p,{children:'El objeto "__STATUS" devuelto tiene las siguientes propiedades:'}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propiedad"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Disponible s\xf3lo en caso de \xe9xito:"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"success"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"true si la acci\xf3n de bloqueo tiene \xe9xito (o si la entidad ya est\xe1 bloqueada en la sesi\xf3n actual), false en caso contrario (no devuelto en este caso)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Disponible s\xf3lo en caso de error:"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"status"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"C\xf3digo de error, ver abajo"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"statusText"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Descripci\xf3n del error, ver abajo"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lockKind"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"C\xf3digo de bloqueo"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lockKindText"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'"Locked by session" si est\xe1 bloqueado por una sesi\xf3n REST, "Locked by record" si est\xe1 bloqueado por un proceso 4D'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lockInfo"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Informaci\xf3n sobre el origen del bloqueo. Las propiedades devueltas dependen del origen del bloqueo (proceso 4D o sesi\xf3n REST)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Disponible s\xf3lo para un bloqueo por proceso 4D:"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"task_id"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"ID del Proceso"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"user_name"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nombre de usuario de la sesi\xf3n en la m\xe1quina"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"user4d_alias"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nombre o alias del usuario 4D"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"user4d_id"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"ID del usuario en el directorio de la base de datos 4D"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"host_name"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nombre de la m\xe1quina"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"task_name"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nombre del proceso"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"client_version"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Versi\xf3n del cliente"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Disponible s\xf3lo para un bloqueo por sesi\xf3n REST:"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"host"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'URL que bloque\xf3 la entidad (por ejemplo, "127.0.0.1:8043")'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"IPAddr"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Direcci\xf3n IP del bloqueo (por ejemplo: "127.0.0.1")'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"recordNumber"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"N\xfamero del registro bloqueado"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"userAgent"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'userAgent del origin del bloqueo (ej: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36")'})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Los siguientes valores pueden ser devueltos en las propiedade ",(0,r.jsx)(n.em,{children:"status"})," y ",(0,r.jsx)(n.em,{children:"statusText"})," del objeto ",(0,r.jsx)(n.em,{children:"__STATUS"})," en caso de error:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"status"}),(0,r.jsx)(n.th,{children:"statusText"}),(0,r.jsx)(n.th,{children:"Comentario"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:'"Stamp has changed"'}),(0,r.jsx)(n.td,{children:"El valor del sello interno de la entidad no coincide con el de la entidad almacenada en los datos (bloqueo optimista)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:'"Already locked"'}),(0,r.jsx)(n.td,{children:"La entidad est\xe1 bloqueada por un bloqueo pesimista."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:'"Other error"'}),(0,r.jsx)(n.td,{children:"Un error grave es un error de base de datos de bajo nivel (por ejemplo, una llave duplicada), un error de hardware, etc."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{children:'"Entity does not exist anymore"'}),(0,r.jsx)(n.td,{children:"La entidad ya no existe en los datos."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"Bloqueamos una entidad en un primer navegador:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"GET /rest/Customers(1)/?$lock=true\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Response:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n	"result": true,\n	"__STATUS": {\n		"success": true\n	}\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"En un segundo navegador (otra sesi\xf3n), enviamos la misma petici\xf3n."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Response:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n	"result":false,\n	"__STATUS":{\n		"status":3,\n		"statusText":"Already Locked",\n		"lockKind":7,\n		"lockKindText":"Locked By Session",\n		"lockInfo":{\n			"host":"127.0.0.1:8043",\n			"IPAddr":"127.0.0.1",\n			"recordNumber": 7,\n			"userAgent": ""Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36..."\n		}\n	}\n}\n'})})]})}function x(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var d=s(667294);let r={},t=d.createContext(r);function i(e){let n=d.useContext(t);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);