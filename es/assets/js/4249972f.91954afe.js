"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11088"],{173664:function(e,n,o){o.r(n),o.d(n,{default:()=>p,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>t});var r=JSON.parse('{"id":"commands-legacy/on-server-open-connection-database-method","title":"On Server Open Connection database method","description":"$1, $2, $3 -> M\xe9todo base On Server Open Connection -> $0","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/on-server-open-connection-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-server-open-connection-database-method","permalink":"/docs/es/20-R7/commands/on-server-open-connection-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-server-open-connection-database-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"on-server-open-connection-database-method","title":"On Server Open Connection database method","slug":"/commands/on-server-open-connection-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On Server Close Connection database method","permalink":"/docs/es/20-R7/commands/on-server-close-connection-database-method"},"next":{"title":"On Server Shutdown database method","permalink":"/docs/es/20-R7/commands/on-server-shutdown-database-method"}}'),a=o("785893"),s=o("250065");let i={id:"on-server-open-connection-database-method",title:"On Server Open Connection database method",slug:"/commands/on-server-open-connection-database-method",displayed_sidebar:"docs"},t=void 0,c={},d=[{value:"\xbfCu\xe1ndo se llama el m\xe9todo base On Server Open Connection?",id:"cu\xe1ndo-se-llama-el-m\xe9todo-base-on-server-open-connection",level:2},{value:"\xbfC\xf3mo se llama al m\xe9todo base On Server Open Connection?",id:"c\xf3mo-se-llama-al-m\xe9todo-base-on-server-open-connection",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"$1, $2, $3 -> M\xe9todo base On Server Open Connection -> $0"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$1"}),(0,a.jsx)(n.td,{children:"Entero largo"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"N\xfamero de usuario utilizado internamente por 4D Server para identificar los usuarios"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$2"}),(0,a.jsx)(n.td,{children:"Entero largo"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"N\xfamero de conexi\xf3n utilizado internamente por 4D Server para identificar una conexi\xf3n"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$3"}),(0,a.jsx)(n.td,{children:"Entero largo"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Obsoleto: devuelve siempre 0 (pero debe declararse)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$0"}),(0,a.jsx)(n.td,{children:"Entero largo"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"0 o se omite = conexi\xf3n aceptada; otro valor = conexi\xf3n rechazada"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"cu\xe1ndo-se-llama-el-m\xe9todo-base-on-server-open-connection",children:"\xbfCu\xe1ndo se llama el m\xe9todo base On Server Open Connection?"}),"\n",(0,a.jsxs)(n.p,{children:["El ",(0,a.jsx)(n.strong,{children:"M\xe9todo base On Server Open Connection"})," se llama una vez en el equipo servidor cada vez que un equipo 4D remoto inicia un proceso de conexi\xf3n. El ",(0,a.jsx)(n.strong,{children:"M\xe9todo base On Server Open Connection"})," NO se invoca por otro entorno 4D diferente de 4D Server."]}),"\n",(0,a.jsxs)(n.p,{children:["El ",(0,a.jsx)(n.strong,{children:"M\xe9todo base On Server Open Connection"})," se llama cada vez que:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"un 4D remoto se conecta (inicio del proceso principal)"}),"\n",(0,a.jsx)(n.li,{children:"un 4D remoto abre el entorno Dise\xf1o (inicio del proceso de Dise\xf1o)"}),"\n",(0,a.jsxs)(n.li,{children:['un 4D remoto inicia un proceso global, (cuyo nombre o comienza por "$") lo cual necesita de la creaci\xf3n de un proceso cooperativo en el servidor ',(0,a.jsx)(n.strong,{children:"(*)"}),". Este proceso puede crearse utilizando el comando ",(0,a.jsx)(n.a,{href:"/docs/es/20-R7/commands/new-process",children:"New process"}),', un comando de men\xfa o la caja de di\xe1logo "Ejecutar un m\xe9todo".']}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["En cada caso con un 4D remoto, se inician tres procesos. Uno en la m\xe1quina cliente y otros dos en el equipo servidor. En la m\xe1quina cliente, el proceso ejecuta el c\xf3digo y env\xeda las peticiones a 4D Server. En el equipo servidor, el ",(0,a.jsx)(n.strong,{children:"proceso 4D Client"})," mantiene el entorno de la base de datos del proceso cliente (las selecciones actuales y el bloqueo de registros para el proceso usuario) y responde a las peticiones enviadas por el proceso ejecutado en la m\xe1quina cliente. El ",(0,a.jsx)(n.strong,{children:"proceso base 4D Client"})," est\xe1 a cargo de controlar el proceso 4D Client correspondiente."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"(*)"})," A partir de 4D v13, por razones de optimizaci\xf3n los procesos servidores (proceso apropiativo para los accesos al motor de la base y proceso cooperativo para el acceso al lenguaje) s\xf3lo se crean durante la ejecuci\xf3n del c\xf3digo del lado del cliente. Por ejemplo, estos son los detalles de una secuencia de c\xf3digo 4D que se ejecuta en un nuevo proceso cliente:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// el proceso global comienza sin un nuevo proceso en el servidor, como un proceso local.\n\xa0CREATE RECORD([Table_1])\n\xa0[Table_1])field1_1:="Hello world"\n\xa0SAVE RECORD([Table_1])\xa0// creaci\xf3n aqu\xed del proceso apropiativo en el servidor\n\xa0$serverTime:=Current time(*)\xa0// creaci\xf3n aqu\xed del proceso cooperativo en el servidor\n\xa0\xa0// llamada de On Server Open Connection\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Importante"}),": las conexiones web y las conexiones SQL no provocan la ejecuci\xf3n del ",(0,a.jsx)(n.strong,{children:"M\xe9todo base On Server Open Connection"}),". Cuando un navegador web se conecta a 4D Server, se llaman el ",(0,a.jsx)(n.em,{children:"M\xe9todo de base On Web Authentication"})," (si lo hay) y/o la ",(0,a.jsx)(n.a,{href:"metodo-base-on-web-connection.md",children:"M\xe9todo base On Web Connection"}),".",(0,a.jsx)(n.br,{}),"\nCuando 4D Server recibe una petici\xf3n SQL, se llama el ",(0,a.jsx)(n.a,{href:"metodo-base-on-sql-authentication.md",children:"M\xe9todo base On SQL Authentication"}),"(si existe). Para mayor informaci\xf3n, consulte la descripci\xf3n de este m\xe9todo base en el manual de Lenguaje 4D."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Importante"}),": cuando se inicia un procedimiento almacenado, el ",(0,a.jsx)(n.strong,{children:"M\xe9todo base On Server Open Connection"})," NO se llama. Los ",(0,a.jsx)(n.em,{children:"Procedimientos almacenados"})," son procesos servidor y no procesos 4D Client. Ellos ejecutan el c\xf3digo en el equipo servidor, pero no responden a las peticiones intercambiadas por 4D client (u otros clientes) y 4D Server."]}),"\n",(0,a.jsx)(n.h2,{id:"c\xf3mo-se-llama-al-m\xe9todo-base-on-server-open-connection",children:"\xbfC\xf3mo se llama al m\xe9todo base On Server Open Connection?"}),"\n",(0,a.jsx)(n.p,{children:"El M\xe9todo base On Server Open Connection se ejecuta en el equipo servidor en el proceso 4D Client que provoc\xf3 la llamada del m\xe9todo."}),"\n",(0,a.jsxs)(n.p,{children:["Por ejemplo, si un 4D remoto se conecta a una base 4D Server interpretada, se inicia el proceso usuario, el proceso de dise\xf1o y el proceso de registro del cliente (por defecto). El M\xe9todo base On Server Open Connection se ejecuta tres veces seguidas. La primera vez dentro del proceso principal, la segunda vez en el proceso de inscripci\xf3n del cliente y la tercera vez en el proceso de dise\xf1o. Si los tres procesos son respectivamente el sexto, s\xe9ptimo y octavo proceso a iniciar en el equipo servidor, y si llama ",(0,a.jsx)(n.a,{href:"/docs/es/20-R7/commands/current-process",children:"Current process"})," desde el M\xe9todo base On Server Open Connection, la primera vez ",(0,a.jsx)(n.a,{href:"/docs/es/20-R7/commands/current-process",children:"Current process"})," devuelve 6, la segunda vez 7 y la tercera 8."]}),"\n",(0,a.jsxs)(n.p,{children:["Note que el M\xe9todo base On Server Open Connection se ejecuta en el equipo servidor, al interior del proceso 4D Client en el servidor, independiente del proceso ejecutado en el cliente. Adicionalmente, en el momento en que se invoca el m\xe9todo, el proceso 4D Client no se ha nombrado a\xfan (",(0,a.jsx)(n.a,{href:"/docs/es/20-R7/commands/process-info",children:"Process info"})," no devolver\xe1 en este momento el nombre del proceso 4D Client)."]}),"\n",(0,a.jsx)(n.p,{children:"El M\xe9todo base On Server Open Connection no tiene acceso a la tabla de las variables proceso del proceso ejecutado en el client. Esta tabla reside en el equipo client, no en el equipo servidor."}),"\n",(0,a.jsx)(n.p,{children:"Cuando el M\xe9todo base On Server Open Connection accede a una variable proceso, trabaja con una tabla de variables proceso particular, creada din\xe1micamente por el proceso 4D Client."}),"\n",(0,a.jsx)(n.p,{children:"4D Server pasa tres par\xe1metros de tipo Entero largo al M\xe9todo base On Server Open Connection y espera un resultado Entero largo. El m\xe9todo debe por lo tanto ser declarado expl\xedcitamente con tres par\xe1metros Entero largo as\xed como tambi\xe9n con un resultado de funci\xf3n Entero largo:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0var $0;$1;$2;$3 : Integer\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Si no devuelve un valor en ",(0,a.jsx)(n.em,{children:"$0"}),", por consiguiente deja la variable indefinida o inicializada en cero, 4D Server estima que el m\xe9todo base acepta la conexi\xf3n. Si no acepta la conexi\xf3n, devuelve un valor no nulo en ",(0,a.jsx)(n.em,{children:"$0"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Esta tabla detalla la informaci\xf3n ofrecida por los tres par\xe1metros pasados en el m\xe9todo base:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Par\xe1metro"})}),(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$1"}),(0,a.jsx)(n.td,{children:"N\xfamero de usuario utilizado internamente por 4D Server para identificar los usuarios"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$2"}),(0,a.jsx)(n.td,{children:"N\xfamero de conexi\xf3n utilizado internamente por 4D Server para identificar una conexi\xf3n"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$3"}),(0,a.jsx)(n.td,{children:"Obsoleto: siempre devuelve 0 pero debe declararse"})]})]})]}),"\n",(0,a.jsxs)(n.p,{children:["Estos n\xfameros de referencia no son utilizables directamente como fuentes de informaci\xf3n a pasar, por ejemplo, como par\xe1metros a un comando 4D. Sin embargo, ofrecen una manera \xfanica de identificar un proceso 4D Client entre el M\xe9todo base On Server Open Connection y el ",(0,a.jsx)(n.a,{href:"metodo-base-on-server-close-connection.md",children:"M\xe9todo base On Server Close Connection"}),". La combinaci\xf3n de estos valores es \xfanica en cualquier momento de una sesi\xf3n 4D Server. Al guardar esta informaci\xf3n en una tabla o en un array interproceso, los dos m\xe9todos base pueden intercambiar informaci\xf3n. En el ejemplo al final de esta secci\xf3n, los dos m\xe9todos base utilizan esta informaci\xf3n para almacenar la fecha y hora de inicio y fin de una conexi\xf3n en el mismo registro de una tabla."]}),"\n",(0,a.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,a.jsxs)(n.p,{children:["El siguiente ejemplo muestra c\xf3mo mantener un historial de las conexiones a la base de datos utilizando el M\xe9todo base On Server Open Connection y utilizando el ",(0,a.jsx)(n.a,{href:"metodo-base-on-server-close-connection.md",children:"M\xe9todo base On Server Close Connection"}),". La tabla ",(0,a.jsx)(n.em,{children:"[Server Log]"})," (mostrada a continuaci\xf3n) se utiliza para hacer seguimiento a los procesos de conexi\xf3n:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:o(189959).Z+"",width:"151",height:"234"})}),"\n",(0,a.jsxs)(n.p,{children:["La informaci\xf3n almacenada en esta tabla es administrada por el M\xe9todo base On Server Open Connection y el ",(0,a.jsx)(n.a,{href:"metodo-base-on-server-close-connection.md",children:"M\xe9todo base On Server Close Connection"})," listado a continuaci\xf3n:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo base On Server Open Connection\n\xa0\n\xa0var $0;$1;$2;$3 : Integer\n\xa0\xa0// Crear un registro [Server Log]\n\xa0CREATE RECORD([Server Log])\n\xa0[Server Log]Log ID:=Sequence number([Server Log])\n\xa0\xa0// Guardar el historial Fecha y Hora\n\xa0[Server Log]Log Date:=Current date\n\xa0[Server Log]Log Time:=Current time\n\xa0\xa0// Guarda la informaci\xf3n de conexi\xf3n\n\xa0[Server Log]User ID:=$1\n\xa0[Server Log]Connection ID:=$2\n\xa0SAVE RECORD([Server Log])\n\xa0\xa0// No devuelve error de manera que la conexi\xf3n puede continuar\n\xa0$0:=0\n\xa0\n\xa0\xa0// M\xe9todo base On Server Close Connection\n\xa0var $1;$2;$3 : Integer\n\xa0\xa0// Recuperar el registro [Server Log]\n\xa0QUERY([Server Log];[Server Log]User ID=$1;*)\n\xa0QUERY([Server Log];&;[Server Log]Connection ID=$2;*)\n\xa0QUERY([Server Log];&;[Server Log]Process ID=0)\n\xa0\xa0// Guardar fecha y hora de desconexi\xf3n\n\xa0[Server Log]Exit Date:=Current date\n\xa0[Server Log]Exit Time:=Current time\n\xa0\xa0// Guardar informaci\xf3n proceso\n\xa0[Server Log]Process ID:=Current process\n\xa0PROCESS PROPERTIES([Server Log]Process ID;$vsProcName;$vlProcState;$vlProcTime)\n\xa0[Server Log]Process Name:=$vsProcName\n\xa0SAVE RECORD([Server Log])\n"})}),"\n",(0,a.jsx)(n.p,{children:"Estas son algunas entradas en [Server Log] mostrando varias conexiones remotas:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:o(486861).Z+"",width:"845",height:"487"})}),"\n",(0,a.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,a.jsx)(n.p,{children:"El siguiente ejemplo evita una nueva conexi\xf3n entre las 2 y 4 A.M."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo base On Server Open Connection\n\xa0var $0;$1;$2;$3 : Integer\n\xa0\n\xa0If((?02:00:00?<=Current time)&(Current time\n"})})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},189959:function(e,n,o){o.d(n,{Z:function(){return r}});let r=o.p+"assets/images/pict69173.es-10c592d8ece8d67621d90e0dfa14b3d2.png"},486861:function(e,n,o){o.d(n,{Z:function(){return r}});let r=o.p+"assets/images/pict69174.es-6ae503df1ffb9a2bd2c50993b0db7dd2.png"},250065:function(e,n,o){o.d(n,{Z:function(){return t},a:function(){return i}});var r=o(667294);let a={},s=r.createContext(a);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);