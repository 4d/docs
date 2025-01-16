"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48492"],{848430:function(e,s,a){a.r(s),a.d(s,{default:()=>u,frontMatter:()=>r,metadata:()=>n,assets:()=>d,toc:()=>c,contentTitle:()=>t});var n=JSON.parse('{"id":"ORDA/datastores","title":"Bases de datos remotas","description":"Un datastore remoto es una referencia, en una aplicaci\xf3n 4D local (4D o 4D Server), a un datastore almacenado en otra aplicaci\xf3n 4D.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/ORDA/remoteDatastores.md","sourceDirName":"ORDA","slug":"/ORDA/datastores","permalink":"/docs/es/ORDA/datastores","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2FremoteDatastores.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"datastores","title":"Bases de datos remotas"},"sidebar":"docs","previous":{"title":"Utilizando el sello global","permalink":"/docs/es/ORDA/global-stamp"},"next":{"title":"Privilegios","permalink":"/docs/es/ORDA/privileges"}}'),o=a("785893"),i=a("250065");let r={id:"datastores",title:"Bases de datos remotas"},t=void 0,d={},c=[{value:"Utilizando sesiones web",id:"utilizando-sesiones-web",level:2},{value:"Visualizaci\xf3n de las sesiones",id:"visualizaci\xf3n-de-las-sesiones",level:3},{value:"Cierre de las sesiones",id:"cierre-de-las-sesiones",level:2},{value:"Bloqueo y transacciones",id:"bloqueo-y-transacciones",level:2}];function l(e){let s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:["Un ",(0,o.jsx)(s.strong,{children:"datastore remoto"})," es una referencia, en una aplicaci\xf3n 4D local (4D o 4D Server), a un ",(0,o.jsx)(s.a,{href:"/docs/es/ORDA/dsmapping#datastore",children:"datastore"})," almacenado en otra aplicaci\xf3n 4D."]}),"\n",(0,o.jsxs)(s.p,{children:["The local 4D application connects to and references the remote datastore through a call to the ",(0,o.jsx)(s.a,{href:"/docs/es/commands/open-datastore",children:(0,o.jsx)(s.code,{children:"Open datastore"})})," command."]}),"\n",(0,o.jsxs)(s.p,{children:["En la m\xe1quina remota, 4D abre una ",(0,o.jsx)(s.a,{href:"/docs/es/WebServer/sessions",children:"sesi\xf3n"})," para gestionar las peticiones de la aplicaci\xf3n que llaman a ",(0,o.jsx)(s.code,{children:"Open datastore"}),". Las solicitudes utilizan internamente la ",(0,o.jsx)(s.a,{href:"/docs/es/REST/gettingStarted",children:"API REST"}),", lo que significa que pueden requerir ",(0,o.jsx)(s.a,{href:"/docs/es/REST/authUsers",children:"licencias disponibles"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"utilizando-sesiones-web",children:"Utilizando sesiones web"}),"\n",(0,o.jsxs)(s.p,{children:["When you work with a remote datastore referenced through calls to the ",(0,o.jsx)(s.a,{href:"/docs/es/commands/open-datastore",children:(0,o.jsx)(s.code,{children:"Open datastore"})})," command, the connection with the requesting processes is handled via ",(0,o.jsx)(s.a,{href:"/docs/es/WebServer/sessions",children:"web sessions"})," on the remote machine."]}),"\n",(0,o.jsxs)(s.p,{children:["La sesi\xf3n web creada en el almac\xe9n de datos remoto se identifica utilizando un ID de sesi\xf3n interno que se asocia al ",(0,o.jsx)(s.code,{children:"localID"})," del lado de la aplicaci\xf3n 4D. Esta sesi\xf3n gestiona autom\xe1ticamente el acceso a los datos, a las selecciones de entidades o a las entidades."]}),"\n",(0,o.jsxs)(s.p,{children:["El ",(0,o.jsx)(s.code,{children:"localID"})," es local a la m\xe1quina que se conecta al datastore remoto, lo que significa:"]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Si otros procesos de la misma aplicaci\xf3n necesitan acceder al mismo datastore remoto, pueden utilizar el mismo ",(0,o.jsx)(s.code,{children:"localID"})," y, de este modo, compartir la misma sesi\xf3n."]}),"\n",(0,o.jsxs)(s.li,{children:["Si otro proceso de la misma aplicaci\xf3n abre el mismo datastore remoto pero con otro ",(0,o.jsx)(s.code,{children:"localID"}),", crear\xe1 una nueva sesi\xf3n en el datastore remoto."]}),"\n",(0,o.jsxs)(s.li,{children:["Si otra m\xe1quina se conecta al mismo datastore remoto con el mismo ",(0,o.jsx)(s.code,{children:"localID"}),", crear\xe1 otra sesi\xf3n con otra cookie."]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"Estos principios se ilustran en los gr\xe1ficos siguientes:"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{src:a(984027).Z+"",width:"962",height:"719"})}),"\n",(0,o.jsx)(s.h3,{id:"visualizaci\xf3n-de-las-sesiones",children:"Visualizaci\xf3n de las sesiones"}),"\n",(0,o.jsx)(s.p,{children:"Los procesos que gestionan las sesiones de acceso al datastore se muestran en la ventana de administraci\xf3n de 4D Server:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:'nombre: "REST Handler: <process name>"'}),"\n",(0,o.jsx)(s.li,{children:"tipo: tipo Worker Server HTTP"}),"\n",(0,o.jsxs)(s.li,{children:["sesi\xf3n: el nombre de la sesi\xf3n es el nombre de usuario que se pasa al comando ",(0,o.jsx)(s.code,{children:"Open datastore"}),"."]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"En el siguiente ejemplo, se est\xe1n ejecutando dos procesos para la misma sesi\xf3n:"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{src:a(288044).Z+"",width:"1402",height:"708"})}),"\n",(0,o.jsx)(s.h2,{id:"cierre-de-las-sesiones",children:"Cierre de las sesiones"}),"\n",(0,o.jsxs)(s.p,{children:["Como se describe en el p\xe1rrafo ",(0,o.jsx)(s.a,{href:"/docs/es/WebServer/sessions#session-lifetime",children:"tiempo de vida de la sesi\xf3n"})," una sesi\xf3n web es cerrada autom\xe1ticamente por 4D cuando no ha habido actividad durante su periodo de tiempo de espera. El tiempo de espera por defecto es de 60 mn, pero este valor puede modificarse utilizando el par\xe1metro ",(0,o.jsx)(s.em,{children:"connectionInfo"})," del comando ",(0,o.jsx)(s.code,{children:"Open datastore"}),"."]}),"\n",(0,o.jsx)(s.p,{children:"Si se env\xeda una solicitud al almac\xe9n de datos remoto despu\xe9s de haber cerrado la sesi\xf3n, \xe9sta se vuelve a crear autom\xe1ticamente si es posible (licencia disponible, servidor no detenido...). Sin embargo, hay que tener en cuenta que se pierde el contexto de la sesi\xf3n en cuanto a bloqueos y transacciones (ver abajo)."}),"\n",(0,o.jsx)(s.h2,{id:"bloqueo-y-transacciones",children:"Bloqueo y transacciones"}),"\n",(0,o.jsx)(s.p,{children:"Las funcionalidades ORDA relacionadas con el bloqueo de entidades y transacciones se gestionan a nivel del proceso en los datastores remotos, igual que en el modo cliente/servidor ORDA:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Si un proceso bloquea una entidad de un datastores remoto, la entidad se bloquea para todos los otros procesos, incluso cuando estos procesos comparten la misma sesi\xf3n (ver ",(0,o.jsx)(s.a,{href:"/docs/es/ORDA/entities#entity-locking",children:"Bloqueo de entidades"}),"). Si varias entidades que apuntan a un mismo registro han sido bloqueadas en un proceso, todas deben ser desbloqueadas en el proceso para eliminar el bloqueo. Si se ha puesto un bloqueo en una entidad, el bloqueo se elimina cuando ya no hay ninguna referencia a esta entidad en la memoria."]}),"\n",(0,o.jsxs)(s.li,{children:["Las transacciones pueden iniciarse, validarse o cancelarse por separado en cada almac\xe9n de datos remoto mediante las funciones ",(0,o.jsx)(s.code,{children:"dataStore.startTransaction()"}),", ",(0,o.jsx)(s.code,{children:"dataStore.cancelTransaction()"})," y ",(0,o.jsx)(s.code,{children:"dataStore.validateTransaction()"}),". No afectan a otros almacenes de datos."]}),"\n",(0,o.jsxs)(s.li,{children:["Classic 4D language commands (",(0,o.jsx)(s.a,{href:"/docs/es/commands/start-transaction",children:(0,o.jsx)(s.code,{children:"START TRANSACTION"})}),", ",(0,o.jsx)(s.a,{href:"/docs/es/commands/validate-transaction",children:(0,o.jsx)(s.code,{children:"VALIDATE TRANSACTION"})}),", ",(0,o.jsx)(s.a,{href:"/docs/es/commands/cancel-transaction",children:(0,o.jsx)(s.code,{children:"CANCEL TRANSACTION"})}),") only apply to the main datastore (returned by ",(0,o.jsx)(s.code,{children:"ds"}),").\nSi una entidad de un datastore remoto es retenida por una transacci\xf3n en un proceso, los otros procesos no pueden actualizarla, incluso si estos procesos comparten la misma sesi\xf3n."]}),"\n",(0,o.jsxs)(s.li,{children:["Los bloqueos en las entidades son eliminados y las transacciones son anuladas:\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"cuando el proceso es eliminado."}),"\n",(0,o.jsx)(s.li,{children:"cuando la sesi\xf3n se cierra en el servidor"}),"\n",(0,o.jsx)(s.li,{children:"cuando la sesi\xf3n es terminada desde la ventana de administraci\xf3n del servidor."}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},288044:function(e,s,a){a.d(s,{Z:function(){return n}});let n=a.p+"assets/images/sessionAdmin-fb7129cb6aaab939e9e8b20cb43bce8f.png"},984027:function(e,s,a){a.d(s,{Z:function(){return n}});let n=a.p+"assets/images/sessions-69775ca2d11bfdbc289284efe41c0b59.png"},250065:function(e,s,a){a.d(s,{Z:function(){return t},a:function(){return r}});var n=a(667294);let o={},i=n.createContext(o);function r(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);