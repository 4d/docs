"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1621"],{377718:function(e,n,a){a.r(n),a.d(n,{metadata:()=>r,contentTitle:()=>d,default:()=>p,assets:()=>l,toc:()=>t,frontMatter:()=>o});var r=JSON.parse('{"id":"commands-legacy/activity-snapshot","title":"ACTIVITY SNAPSHOT","description":"ACTIVITY SNAPSHOT ( arrActividades | arrUUID ; arrInicio ; arrDuracion ; arrInfo {; arrDetails}{; *} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/activity-snapshot.md","sourceDirName":"commands-legacy","slug":"/commands/activity-snapshot","permalink":"/docs/es/commands/activity-snapshot","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Factivity-snapshot.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"activity-snapshot","title":"ACTIVITY SNAPSHOT","slug":"/commands/activity-snapshot","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Tools","permalink":"/docs/es/category/tools"},"next":{"title":"BASE64 DECODE","permalink":"/docs/es/commands/base64-decode"}}'),i=a("785893"),s=a("250065");let o={id:"activity-snapshot",title:"ACTIVITY SNAPSHOT",slug:"/commands/activity-snapshot",displayed_sidebar:"docs"},d=void 0,l={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Primera sintaxis: ACTIVITY SNAPSHOT ( {* ;} arrActivities )",id:"primera-sintaxis-activity-snapshot----arractivities-",level:5},{value:"Segunda sintaxis: ACTIVITY SNAPSHOT ( {* ;} arrUUID ; arrStart ; arrDuration ; arrInfo {;arrSubOp} )",id:"segunda-sintaxis-activity-snapshot----arruuid--arrstart--arrduration--arrinfo-arrsubop-",level:5},{value:"Ejemplo",id:"ejemplo",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ACTIVITY SNAPSHOT"})," ( arrActividades | arrUUID ; ",(0,i.jsx)(n.em,{children:"arrInicio"})," ; ",(0,i.jsx)(n.em,{children:"arrDuracion"})," ; ",(0,i.jsx)(n.em,{children:"arrInfo"})," {; ",(0,i.jsx)(n.em,{children:"arrDetails"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"arrActividades | arrUUID"}),(0,i.jsx)(n.td,{children:"Array objeto, Array texto"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsxs)(n.td,{children:["Descripci\xf3n completa de operaciones (array objeto) o",(0,i.jsx)(n.br,{}),"UUIDs de las operaciones (array texto)"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"arrInicio"}),(0,i.jsx)(n.td,{children:"Text array"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Horas de inicio de las operaciones"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"arrDuracion"}),(0,i.jsx)(n.td,{children:"Integer array"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Duraci\xf3n de las operaciones en milisegundos"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"arrInfo"}),(0,i.jsx)(n.td,{children:"Text array"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Descripci\xf3n"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"arrDetails"}),(0,i.jsx)(n.td,{children:"Object array"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Detalles del contexto y sub operaciones (si las hay)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operador"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si se pasa = Traer actividad del servidor"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.strong,{children:"ACTIVITY SNAPSHOT"})," retorna un array o varios que describen las operaciones en progreso sobre los datos 4D. Estas operaciones usualmente muestran una ventana de progreso."]}),"\n",(0,i.jsx)(n.p,{children:"Este comando se usa para traer una imagen de las x operaciones que m\xe1s consumen tiempo tiempo y/o que corren m\xe1s frecuentemente, tales como escritura de cach\xe9 o ejecuci\xf3n de f\xf3rmulas."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," La informaci\xf3n devuelta por el comando ",(0,i.jsx)(n.strong,{children:"ACTIVITY SNAPSHOT"}),' es la misma mostrada en la p\xe1gina "Monitor en tiempo real" (RTM) de la ventana de administraci\xf3n de 4D Server (vea el ',(0,i.jsx)(n.em,{children:"Manual de 4D Server"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["Por defecto, ",(0,i.jsx)(n.strong,{children:"ACTIVITY SNAPSHOT"})," procesa las operaciones realizadas a nivel local (con 4D monopuesto, 4D Server o 4D en modo remoto). Sin embargo, con 4D en modo remoto, tambi\xe9n puede obtener una instant\xe1nea de las operaciones realizadas en el servidor: s\xf3lo tiene que pasar el asterisco (*) como \xfaltimo par\xe1metro. En este caso, el servidor de datos se recupera localmente.",(0,i.jsx)(n.br,{}),"\nEl par\xe1metro ",(0,i.jsx)(n.em,{children:"*"})," se ignora cuando el comando se ejecuta en 4D Server o 4D monopuesto."]}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.strong,{children:"ACTIVITY SNAPSHOT"}),"  acepta dos sintaxis:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"sintaxis usando solamente un array de objetos."}),"\n",(0,i.jsx)(n.li,{children:"sintaxis utilizando varios arrays."}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"primera-sintaxis-activity-snapshot----arractivities-",children:"Primera sintaxis: ACTIVITY SNAPSHOT ( {* ;} arrActivities )"}),"\n",(0,i.jsxs)(n.p,{children:["Con esta sintaxis, todas las operaciones se devuelven en un formulario estructurado en el array objetos 4D (",(0,i.jsx)(n.em,{children:"arrActividades"}),"). Cada elemento del array es un objeto construido de la siguiente manera:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\xa0\xa0\xa0 {\xa0\xa0\xa0 \xa0\xa0\xa0 "message":"xxx",\xa0\xa0\xa0 \xa0\xa0\xa0 "maxValue":12321,\xa0\xa0\xa0 \xa0\xa0\xa0 "currentValue":63212,\xa0\xa0\xa0 \xa0\xa0\xa0 "interruptible:0,\xa0\xa0\xa0 \xa0\xa0\xa0 "remote":0,\xa0\xa0\xa0 \xa0\xa0\xa0 "uuid":"deadbeef",\xa0\xa0\xa0 \xa0\xa0\xa0 "taskId":xxx,\xa0\xa0\xa0 \xa0\xa0\xa0 "startTime":"2014-03-20 13:37:00:123",\xa0\xa0\xa0 \xa0\xa0\xa0 "duration":92132,\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "dbContextInfo":{\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "task_id": xxx,\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "user_name": Jean,\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "host_name": HAL,\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "task_name": "CreateIndexLocal",\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "client_uid": "DE4DB33F33F"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "user4d_id ": 1,\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "client_version ": 123456\xa0\xa0\xa0\xa0\xa0\xa0\xa0 },\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "dbOperationDetails":{\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 table: "myTable"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 field: "Field_1"\xa0\xa0\xa0\xa0\xa0\xa0\xa0 },\xa0\xa0\xa0 \xa0\xa0\xa0 "subOperations":[\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 {"message":"xxx",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 ...}\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 ]\xa0\xa0\xa0 },\xa0\xa0\xa0 {...}]\n'})}),"\n",(0,i.jsx)(n.p,{children:"Esta es un descripci\xf3n de cada propiedad devuelta:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"message"})," (texto): etiqueta de la operaci\xf3n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"maxValue"})," (n\xfamero): n\xfamero de iteraciones definidas para la operaci\xf3n (-1 si la operaci\xf3n no es iterativa)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"currentValue"})," (n\xfamero): iteraci\xf3n actual"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"interruptible"})," (n\xfamero): la operaci\xf3n puede ser interrumpida por el usuario (0=true, 1=false)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"remote"})," (n\xfamero): operaci\xf3n por pares entre cliente y servidor (0=true, 1=false)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"uuid"})," (text): identificador UUID de la operaci\xf3n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"taskId"})," (n\xfamero): identificador interno del proceso en el origen de la operaci\xf3n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"startTime"}),' (texto): la hora de inicio de la operaci\xf3n en formato "aaaa:mm:dd hh:mm:ss:mls"']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"duration"})," (n\xfamero): duraci\xf3n de la operaci\xf3n en milisegundos"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"dbContextInfo"})," (objeto): informaci\xf3n relativa a las operaciones manejadas por el motor de la base de datos. Contiene las siguientes propiedades:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"host_name"})," (cadena): nombre del host que lanz\xf3 la operaci\xf3n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"user_name"})," (cadena): nombre del usuario 4D cuya sesi\xf3n lanz\xf3 la operaci\xf3n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"task_name"})," (cadena): nombre del proceso que lanz\xf3 la operaci\xf3n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"task_id"})," (num): n\xfamero del ID del proceso que lanz\xf3 la operaci\xf3n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"client_uid"})," (cadena): opcional, uuid del cliente que lanz\xf3 la operaci\xf3n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"is_remote_context"})," (booleano, 0 o 1): opcional, indica si la operaci\xf3n de la base fue lanzada por un cliente (valor 1) o por el servidor por medio del procedimiento almacenado (valor 0)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"user4d_id"})," (num): n\xfamero del ID del usuario 4D actual del lado del cliente"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"client_version"})," (cadena): cuatro d\xedgitos representan la versi\xf3n del motor 4D de la aplicaci\xf3n, como los devolvi\xf3 el comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/application-version",children:"Application version"}),".",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Nota:"})," client_uid and is_remote_context s\xf3lo est\xe1 disponible en modo cliente/servidor. client_uid s\xf3lo se devuelve si la operaci\xf3n de la base de datos se inici\xf3 en un equipo cliente."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"dbOperationDetails"})," (objeto): propiedad devuelta \xfanicamente si la operaci\xf3n llama al motor de base de datos (este es el caso, por ejemplo, para b\xfasqueda y ordenaciones). Este es un objeto que contiene informaci\xf3n espec\xedfica relacionada con la operaci\xf3n en s\xed. Las propiedades disponibles dependen del tipo de la operaci\xf3n de base de datos realizada. M\xe1s espec\xedficamente, estas propiedades incluyen:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"table (cadena): nombre de la tabla implicado en la operaci\xf3n"}),"\n",(0,i.jsx)(n.li,{children:"field (cadena): nombre del campo implicado en la operaci\xf3n"}),"\n",(0,i.jsx)(n.li,{children:"queryPlan (cadena): plan de b\xfasqueda definido para la operaci\xf3n"}),"\n",(0,i.jsx)(n.li,{children:"..."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"subOperations"})," (array): array de objetos que contienen sub-operaciones de la operaci\xf3n actual (si existe). La estructura de cada sub-elemento es id\xe9ntica a la del objeto principal. Si la operaci\xf3n actual no tiene sub-operaciones, entonces subOperations est\xe1 vac\xedo."]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"segunda-sintaxis-activity-snapshot----arruuid--arrstart--arrduration--arrinfo-arrsubop-",children:"Segunda sintaxis: ACTIVITY SNAPSHOT ( {* ;} arrUUID ; arrStart ; arrDuration ; arrInfo {;arrSubOp} )"}),"\n",(0,i.jsx)(n.p,{children:"Con esta sintaxis, todas las operaciones se devuelven en varios arrays sincronizados (cada operaci\xf3n provoca que un elemento se a\xf1ada a todos los arrays). Los siguientes arrays se devuelven:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"arrUUID"}),": contiene los identificadores UUID de cada operaci\xf3n (corresponde a la propiedad ",(0,i.jsx)(n.em,{children:"uuid"})," del objeto ",(0,i.jsx)(n.em,{children:"arrActividades"})," en la sintaxis anterior)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"arrInicio"}),": contiene las horas de inicio de cada operaci\xf3n (corresponde a la propiedad ",(0,i.jsx)(n.em,{children:"startTime"})," del objeto ",(0,i.jsx)(n.em,{children:"arrActividades"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"arrDuracion"}),": contiene las duraciones de cada operaci\xf3n en milisegundos (corresponde a la propiedad ",(0,i.jsx)(n.em,{children:"duration"})," del objeto ",(0,i.jsx)(n.em,{children:"arrActividades"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"arrInfo"}),": contiene las etiquetas que describen cada operaci\xf3n (corresponde a la propiedad ",(0,i.jsx)(n.em,{children:"message"})," del objeto ",(0,i.jsx)(n.em,{children:"arrActividades"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"arrDetalles"})," (opcional): cada elemento de este array es un objeto que contiene las siguientes propiedades:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:'"dbContextInfo"'})," (objeto): ver arriba"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:'"dbOperationDetails"'})," (objeto): ver arriba"]}),"\n",(0,i.jsxs)(n.li,{children:['"subOperaciones". El valor de esta propiedad es un array objeto que contiene todas las sub-operaciones de la operaci\xf3n actual. Si la operaci\xf3n actual no tiene sub-operaciones, el valor de la propiedad ',(0,i.jsx)(n.em,{children:"suboperaciones"})," es un array vac\xedo. (corresponde a la propiedad ",(0,i.jsx)(n.em,{children:"subOperations"})," del objeto ",(0,i.jsx)(n.em,{children:"arrActividades"}),")."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(n.p,{children:"Este m\xe9todo, ejecutado en un proceso separado en 4D o 4D Server, ofrece una instant\xe1nea de las operaciones que est\xe1n en marcha:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT(arrUUID;0)\n\xa0ARRAY TEXT(arrStart;0)\n\xa0ARRAY LONGINT(arrDuration;0)\n\xa0ARRAY TEXT(arrInfo;0)\n\xa0\n\xa0Repeat\n\xa0\xa0\xa0\xa0ACTIVITY SNAPSHOT(arrUUID;arrStart;arrDuration;arrInfo)\n\xa0\xa0\xa0\xa0If(Size of array(arrUUID)>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0TRACE\xa0// llamada del depurador\n\xa0\xa0\xa0\xa0End if\n\xa0Until(False)\xa0// Bucle infinito\n"})}),"\n",(0,i.jsx)(n.p,{children:"Obtiene arrays del tipo:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:a(98637).Z+"",width:"773",height:"624"})})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},98637:function(e,n,a){a.d(n,{Z:function(){return r}});let r=a.p+"assets/images/pict1213741.es-116e52f78ffbfd6f7b4803198af83202.png"},250065:function(e,n,a){a.d(n,{Z:function(){return d},a:function(){return o}});var r=a(667294);let i={},s=r.createContext(i);function o(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);