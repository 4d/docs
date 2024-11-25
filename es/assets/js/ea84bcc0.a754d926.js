"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["17071"],{709540:function(e,n,a){a.r(n),a.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/sql-login","title":"SQL LOGIN","description":"SQL LOGIN {( entradaDatos ; nomUsuario ; contrase\xf1a ; * )}","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sql-login.md","sourceDirName":"commands-legacy","slug":"/commands/sql-login","permalink":"/docs/es/commands/sql-login","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-login.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sql-login","title":"SQL LOGIN","slug":"/commands/sql-login","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL LOAD RECORD","permalink":"/docs/es/commands/sql-load-record"},"next":{"title":"SQL LOGOUT","permalink":"/docs/es/commands/sql-logout"}}'),i=a("785893"),r=a("250065");let d={id:"sql-login",title:"SQL LOGIN",slug:"/commands/sql-login",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Ejemplo 5",id:"ejemplo-5",level:4},{value:"Ejemplo 6",id:"ejemplo-6",level:4},{value:"Ejemplo 7",id:"ejemplo-7",level:4},{value:"Ejemplo 8",id:"ejemplo-8",level:4},{value:"Ejemplo 9",id:"ejemplo-9",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function t(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",puerto:"puerto",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SQL LOGIN"})," {( ",(0,i.jsx)(n.em,{children:"entradaDatos"})," ; ",(0,i.jsx)(n.em,{children:"nomUsuario"})," ; ",(0,i.jsx)(n.em,{children:"contrase\xf1a"})," ; * )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"entradaDatos"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsxs)(n.td,{children:["Nombre de publicaci\xf3n de base 4D o ",(0,i.jsx)(n.br,{}),"Direcci\xf3n IP de la base remota o ",(0,i.jsx)(n.br,{}),"Nombre de la fuente de datos en el administrador ODBC o",(0,i.jsx)(n.br,{}),'"" para mostrar el di\xe1logo de selecci\xf3n']})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"nomUsuario"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nombre del usuario registrado en la fuente de datos"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"contrase\xf1a"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Contrase\xf1a del usuario registrado en la fuente de datos"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operador"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Aplicado a Begin SQL/End SQL Si se omite: no aplicar (base de datos local); si se pasa: aplicar"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.strong,{children:"SQL LOGIN"})," permite conectarse a una fuente de datos SQL especificada en el par\xe1metro ",(0,i.jsx)(n.em,{children:"entradaDatos"})," y designa el objetivo de las b\xfasquedas SQL ejecutadas posteriormente en el proceso actual:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["v\xeda el comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/sql-execute",children:"SQL EXECUTE"}),","]}),"\n",(0,i.jsxs)(n.li,{children:["v\xeda el c\xf3digo ubicado dentro de las etiquetas Begin SQL / End SQL (si se pasa el par\xe1metro ",(0,i.jsx)(n.em,{children:"*"}),")."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"La fuente de datos SQL puede ser:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"una base 4D Server externa a la que acceda directamente,"}),"\n",(0,i.jsx)(n.li,{children:"una fuente ODBC externa,"}),"\n",(0,i.jsx)(n.li,{children:"la base 4D local (base interna)."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["En ",(0,i.jsx)(n.em,{children:"entradaDatos"}),", puede pasar uno de los siguientes valores: una direcci\xf3n IP, un nombre de publicaci\xf3n de base 4D, un nombre de fuente de datos ODBC, una cadena vac\xeda o la constante SQL_INTERNAL."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Direcci\xf3n IP"}),(0,i.jsx)(n.br,{}),"\nSintaxis: ",(0,i.jsxs)(n.strong,{children:["IP:<Direcci\xf3n IP>{:",(0,i.jsx)(n.puerto,{tcp:"",children:"}"})]}),(0,i.jsx)(n.br,{}),'\nEn este caso, el comando abre una conexi\xf3n directa con la base 4D Server ejecutada en la m\xe1quina con la direcci\xf3n IP definida. En la m\xe1quina "objetivo", debe iniciarse el servidor SQL. Si pasa un n\xfamero de puerto TCP, debe haber sido especificado como puerto de publicaci\xf3n del servidor SQL en la base "objetivo". Si no pasa el n\xfamero de puerto TCP, se utilizar\xe1 el n\xfamero de puerto por defecto (19812). El n\xfamero de puerto TCP del servidor SQL puede modificarse en la p\xe1gina "SQL" de las Propiedades de la base. Consulte los ejemplos 4 y 5.',(0,i.jsx)(n.br,{}),'\nSi activa el TLS para el servidor SQL "objetivo" (opci\xf3n disponible en las Propiedades de la base), debe a\xf1adir la palabra clave ":ssl" al final de la direcci\xf3n IP y el n\xfamero de puerto TCP (obligatorio en ese caso) para que el servidor pueda manejar la petici\xf3n correctamente (ver el ejemplo 6).']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Nombre de la publicaci\xf3n de base 4D"}),(0,i.jsx)(n.br,{}),"\nSintaxis: 4D:<Nombre_de_Publicaci\xf3n>",(0,i.jsx)(n.br,{}),'\nEn este caso, el comando abre una conexi\xf3n directa con la base 4D Server cuyo nombre de publicaci\xf3n en la red corresponde al nombre especificado. El nombre de la publicaci\xf3n de red de una base se define en la p\xe1gina "Cliente-Servidor/Configuraci\xf3n" de las Propiedades de la base.',(0,i.jsx)(n.br,{}),"\nConsulte el ejemplo 4.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Nota:"})," el n\xfamero de puerto TCP del servidor SQL 4D objetivo (que publica la base 4D) y el n\xfamero de puerto TCP del servidor SQL de la aplicaci\xf3n 4D que abre la conexi\xf3n deben ser id\xe9nticos."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"nombre de fuente de datos ODBC v\xe1lida"}),(0,i.jsx)(n.br,{}),"\nSintaxis: ",(0,i.jsx)(n.strong,{children:"ODBC:<Mi_DSN> o <Mi_DSN>"}),(0,i.jsx)(n.br,{}),"\nEn este caso, el par\xe1metro ",(0,i.jsx)(n.em,{children:"entradaDatos"})," contiene el nombre de la fuente de datos como ha sido definida en el administrador del driver ODBC.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Notas:"})]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Por razones de compatibilidad con las versiones anteriores de 4D, es posible omitir el prefijo "ODBC:". Sin embargo, por razones de legibilidad del c\xf3digo, se recomienda utilizar este prefijo. Consulte el ejemplo 2.'}),"\n",(0,i.jsx)(n.li,{children:'En Windows, el nombre de la fuente de datos distingue entre may\xfasculas y min\xfasculas. Por ejemplo, si la fuente de datos se defini\xf3 como "4D_v16", pasar el valor "4D_V16" fallar\xe1.'}),"\n",(0,i.jsx)(n.li,{children:'En Windows y Mac, el prefijo "ODBC:" debe introducirse con letras may\xfasculas. Si pasa "odbc:", la conexi\xf3n fallar\xe1.'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"cadena vac\xeda"}),(0,i.jsx)(n.br,{}),"\nSintaxis: ",(0,i.jsx)(n.em,{children:'""'}),(0,i.jsx)(n.br,{}),"\nEn este caso, el comando muestra la caja de di\xe1logo de conexi\xf3n de manera que la fuente de datos a conectar pueda introducirse manualmente:"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:a(30860).Z+"",width:"479",height:"300"})}),"\n",(0,i.jsx)(n.p,{children:"Esta caja de di\xe1logo incluye varias p\xe1ginas. La p\xe1gina TCP/IP incluye los siguientes elementos:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Nombre de objetivo: este men\xfa se crea utilizando dos listas:"}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:['la lista de bases abiertas recientemente en conexi\xf3n directa. El mecanismo para actualizar esta lista es id\xe9ntico al de la aplicaci\xf3n 4D, excepto que la carpeta que contiene los archivos .4DLink se llama "Favorites SQL vXX" en lugar de "Favorites vXX".\n',(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["la lista de aplicaciones 4D Server cuyo servidor SQL se inicia y cuyo puerto TCP para las conexiones SQL es el mismo que para la aplicaci\xf3n fuente. Esta lista se actualiza din\xe1micamente en cada nueva llamada al comando ",(0,i.jsx)(n.strong,{children:"SQL LOGIN"})," sin el par\xe1metro ",(0,i.jsx)(n.em,{children:"entradaDatos"}),'. Si el car\xe1cter "^" se ubica antes de un nombre de la base, indica que la conexi\xf3n se efect\xfao en modo seguro v\xeda TLS.']}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Direcci\xf3n de red: esta \xe1rea muestra la direcci\xf3n y posiblemente el puerto TCP de la base seleccionada en el men\xfa Nombre de objetivo. Tambi\xe9n puede introducir una direcci\xf3n IP en esta \xe1rea y luego hacer clic en el bot\xf3n de conexi\xf3n para conectar la base 4D Server correspondiente. Tambi\xe9n puede especificar el puerto TCP introduciendo dos puntos (:) seguidos por el n\xfamero de puerto despu\xe9s de la direcci\xf3n. Por ejemplo: 192.168.93.105:19855"}),"\n",(0,i.jsx)(n.li,{children:"Nombre de usuario y Contrase\xf1a: estas \xe1reas pueden utilizarse para introducir los identificadores de conexi\xf3n."}),"\n",(0,i.jsx)(n.li,{children:"Las p\xe1ginas DSN de usuario y DSN de sistema muestran, respectivamente, la lista de usuario y fuentes de datos ODBC del sistema en el driver ODBC de la m\xe1quina. Estas p\xe1ginas pueden utilizarse para seleccionar una fuente de datos e introducir identificadores para abrir una conexi\xf3n con una fuente de datos externa ODBC."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Si se establece la conexi\xf3n, la variable sistema OK toma el valor 1. De lo contrario, toma el valor 0 y se genera un error. Este error puede interceptarse v\xeda un m\xe9todo de gesti\xf3n de errores instalado por el comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Constante SQL_INTERNAL"}),(0,i.jsx)(n.br,{}),"\nSintaxis: SQL_INTERNAL",(0,i.jsx)(n.br,{}),"\nEn este caso, el comando redirecciona las b\xfasquedas SQL posteriores a la base 4D interna."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Atenci\xf3n:"})," los prefijos utilizados en el par\xe1metro ",(0,i.jsx)(n.em,{children:"entradaDatos"})," (IP, ODBC, 4D) deben escribirse en may\xfasculas."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"nombreUsuario"})," contiene el nombre del usuario autorizado a conectarse a la fuente de datos externa. Por ejemplo, con Oracle\xae, el nombre de usuario puede ser \u201CSamuel\u201D."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"contrase\xf1a"})," contiene la contrase\xf1a del usuario autorizado a conectarse a la fuente de datos externos. Por ejemplo, conOracle\xae, la contrase\xf1a puede ser \u201Ctiger\u201D."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," en el caso de una conexi\xf3n directa, si pasa una cadena vac\xeda en los par\xe1metros ",(0,i.jsx)(n.em,{children:"nombreUsuario"})," y ",(0,i.jsx)(n.em,{children:"contrase\xf1a"}),", la conexi\xf3n s\xf3lo se aceptar\xe1 si las contrase\xf1as 4D no est\xe1n activas en la base objetivo. De lo contrario, la conexi\xf3n se rechazar\xe1."]}),"\n",(0,i.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,i.jsx)(n.em,{children:"*"})," puede utilizarse para cambiar el objetivo del c\xf3digo SQL ejecutado dentro de las etiquetas Begin SQL/End SQL. Si no pasa este par\xe1metro, el c\xf3digo ubicado dentro de las etiquetas Begin SQL/End SQL a\xfan se enviar\xe1 al motor SQL interno de 4D, sin tener en cuenta la configuraci\xf3n especificada por el comando ",(0,i.jsx)(n.strong,{children:"SQL LOGIN"})," . Si pasa este par\xe1metro, el c\xf3digo SQL ejecutado dentro de las etiquetas Begin SQL/End SQL se enviar\xe1 a la fuente especificada en el par\xe1metro ",(0,i.jsx)(n.em,{children:"entradaDatos"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Para cerrar la conexi\xf3n actual y liberar la memoria, simplemente ejecute el comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/sql-logout",children:"SQL LOGOUT"}),". Todas las b\xfasquedas SQL se env\xedan a la base 4D SQL interna.",(0,i.jsx)(n.br,{}),"\nSi llama nuevamente a ",(0,i.jsx)(n.strong,{children:"SQL LOGIN"}),"  sin haber cerrado expl\xedcitamente la conexi\xf3n actual, la conexi\xf3n se cerrar\xe1 autom\xe1ticamente."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," en caso de falla de un intento de conexi\xf3n externa v\xeda ",(0,i.jsx)(n.strong,{children:"SQL LOGIN"}),", la base 4D interna se convierte autom\xe1ticamente en la fuente de datos actual."]}),"\n",(0,i.jsx)(n.p,{children:"Estos par\xe1metros son opcionales; si no se pasa ning\xfan par\xe1metro, el comando produce la visualizaci\xf3n de la caja de di\xe1logo Seleccionar origen de datos ODBC, que le permite seleccionar la fuente de datos externos:"}),"\n",(0,i.jsx)(n.p,{children:"El alcance de este comando es el proceso; en otras palabras, si quiere ejecutar dos conexiones distintas, debe crear dos procesos y ejecutar cada conexi\xf3n en cada proceso."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Atenci\xf3n:"})," no es posible abrir una conexi\xf3n ODBC en el contexto descrito abajo. Estas configuraciones conllevan al bloqueo de la aplicaci\xf3n:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"conexi\xf3n v\xeda ODBC desde la aplicaci\xf3n en ejecuci\xf3n hacia ella misma"}),"\n",(0,i.jsx)(n.li,{children:"conexi\xf3n v\xeda ODBC desde una aplicaci\xf3n 4D a 4D Server cuando una conexi\xf3n cliente/servidor cl\xe1sica ya est\xe1 abierta entre estas dos aplicaciones."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,i.jsx)(n.p,{children:"Esta instrucci\xf3n provoca la visualizaci\xf3n de la caja de di\xe1logo Seleccionar origen de datos ODBC:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0SQL LOGIN\n"})}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,i.jsxs)(n.p,{children:['Apertura de una conexi\xf3n v\xeda el protocolo ODBC con la fuente de datos externa "MyOracle". Las b\xfasquedas SQL ejecutadas v\xeda el comando ',(0,i.jsx)(n.a,{href:"/docs/es/commands/sql-execute",title:"SQL EXECUTE",children:"SQL EXECUTE"})," y b\xfasquedas incluidas dentro de las etiquetas ",(0,i.jsx)(n.a,{href:"/docs/es/commands/begin-sql",title:"Begin SQL",children:"Begin SQL"}),"/",(0,i.jsx)(n.a,{href:"/docs/es/commands/end-sql",title:"End SQL",children:"End SQL"})," se redireccionar\xe1 para esta conexi\xf3n. Esta instrucci\xf3n conectar\xe1 la fuente de datos ODBC llamada \u201CMyOracle\u201D utilizando Scott/tiger como nombre/contrase\xf1a:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0SQL LOGIN("ODBC:MyOracle";"Scott";"tiger";*)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,i.jsx)(n.p,{children:"Apertura de una conexi\xf3n con el motor SQL interno de 4D:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0SQL LOGIN(SQL_INTERNAL;$user;$password)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,i.jsxs)(n.p,{children:["Apertura de una conexi\xf3n directa con la aplicaci\xf3n 4D Server ejecutada en la m\xe1quina con la direcci\xf3n IP 192.168.45.34 y respondiendo en el puerto TCP por defecto. Las b\xfasquedas SQL ejecutadas v\xeda el comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/sql-execute",title:"SQL EXECUTE",children:"SQL EXECUTE"})," se redireccionan a esta conexi\xf3n; las b\xfasquedas incluidas dentro de las etiquetas ",(0,i.jsx)(n.a,{href:"/docs/es/commands/begin-sql",title:"Begin SQL",children:"Begin SQL"}),"/",(0,i.jsx)(n.a,{href:"/docs/es/commands/end-sql",title:"End SQL",children:"End SQL"})," no se redireccionar\xe1n."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0SQL LOGIN("IP:192.168.45.34";"Juan";"azerty")\n'})}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-5",children:"Ejemplo 5"}),"\n",(0,i.jsxs)(n.p,{children:["Apertura de una conexi\xf3n directa con la aplicaci\xf3n 4D Server ejecutada en la m\xe1quina con la direcci\xf3n IP 192.168.45.34 y respondiendo al puerto TCP 20150. Las b\xfasquedas SQL ejecutadas v\xeda el comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/sql-execute",title:"SQL EXECUTE",children:"SQL EXECUTE"})," y las b\xfasquedas incluidas dentro de las etiquetas ",(0,i.jsx)(n.a,{href:"/docs/es/commands/begin-sql",title:"Begin SQL",children:"Begin SQL"}),"/",(0,i.jsx)(n.a,{href:"/docs/es/commands/end-sql",title:"End SQL",children:"End SQL"})," se redireccionar\xe1n a esta conexi\xf3n."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0SQL LOGIN("IP:192.168.45.34:20150";"Juan";"azerty";*)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-6",children:"Ejemplo 6"}),"\n",(0,i.jsx)(n.p,{children:"Apertura de una conexi\xf3n directa en SSL con la aplicaci\xf3n 4D Server ejecutada en la m\xe1quina con la direcci\xf3n IP 192.168.45.34 y responder en el puerto TCP por defecto. Debe tener activado SSL para el servidor SQL en la aplicaci\xf3n 4D Server:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0SQL LOGIN("IP:192.168.45.34:19812:ssl";"Admin";"sd156")\xa0// Note the ":ssl" after of the IP address and TCP port\n'})}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-7",children:"Ejemplo 7"}),"\n",(0,i.jsxs)(n.p,{children:["Apertura de una conexi\xf3n directa con la aplicaci\xf3n 4D Server ejecutada en la m\xe1quina que tiene la direcci\xf3n IPv6 2a01: e35:2e41:c960:dc39:3eb0:f29b:3747 y responde en el puerto TCP 20150. Las consultas SQL ejecutadas a trav\xe9s del comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/sql-execute",children:"SQL EXECUTE"})," ser\xe1n redirigidas a esta conexi\xf3n; Las consultas incluidas en las etiquetas ",(0,i.jsx)(n.a,{href:"/docs/es/commands/begin-sql",children:"Begin SQL"}),"/",(0,i.jsx)(n.a,{href:"/docs/es/commands/end-sql",children:"End SQL"})," no se redirigir\xe1n."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0SQL LOGIN("IP:[2a01:e35:2e41:c960:dc39:3eb0:f29b:3747]:20150";"John";"qwerty")\n'})}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-8",children:"Ejemplo 8"}),"\n",(0,i.jsxs)(n.p,{children:['Apertura de una conexi\xf3n directa con la aplicaci\xf3n 4D Server que publica en la red local una base cuyo nombre de publicaci\xf3n es "Accounts_DB." El puerto TCP utilizado por el servidor SQL de ambas bases (definido en la p\xe1gina "SQL" de las Propiedades de la base) debe ser el mismo (19812 por defecto). Las b\xfasquedas SQL ejecutadas v\xeda el comando ',(0,i.jsx)(n.a,{href:"/docs/es/commands/sql-execute",title:"SQL EXECUTE",children:"SQL EXECUTE"})," se redireccionar\xe1n a esta conexi\xf3n; las b\xfasquedas incluidas dentro de las etiquetas ",(0,i.jsx)(n.a,{href:"/docs/es/commands/begin-sql",title:"Begin SQL",children:"Begin SQL"}),"/",(0,i.jsx)(n.a,{href:"/docs/es/commands/end-sql",title:"End SQL",children:"End SQL"})," no se redireccionar\xe1n."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0SQL LOGIN("4D:Accounts_DB";"Juan";"azerty")\n'})}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-9",children:"Ejemplo 9"}),"\n",(0,i.jsx)(n.p,{children:"Este ejemplo muestra las posibilidades de conexi\xf3n ofrecidas por el comando SQL LOGIN:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT(aNombres;0)\n\xa0ARRAY LONGINT(aEdades;0)SQL LOGIN("ODBC:MyORACLE";"Marc";"azerty")\n\xa0If(OK=1)\xa0//La siguiente b\xfasqueda se redireccionar\xe1 a la base de datos ORACLE externa\n\xa0\xa0\xa0\xa0SQL EXECUTE("SELECT Nombre, edad FROM PERSONS";aNombres;aEdades)\n\xa0\xa0//La siguiente b\xfasqueda se enviar\xe1 a la base de datos 4D local\n\xa0\xa0\xa0\xa0Begin SQL\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SELECT Nombre, Edad\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FROM PERSONS\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0INTO :aNombres, :aEdades;\n\xa0\xa0\xa0\xa0End SQL\xa0//El siguiente comando SQL LOGIN cierra la conexi\xf3n actual\n\xa0\xa0//con la base de datos ORACLE externa y abre una nueva conexi\xf3n\n\xa0\xa0//con una base de datos MySQL externa\n\xa0\xa0\xa0\xa0SQL LOGIN("ODBC:MySQL";"Juan";"qwerty";*)\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0//La siguiente b\xfasqueda ser\xe1 redireccionada a la base de datos MySQL externa\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SQL EXECUTE("SELECT Nombre, Edad FROM PERSONS";aNombres;aEdades)\n\xa0\xa0//La siguiente b\xfasqueda tambi\xe9n ser\xe1 redireccionada a la base de datos MySQL externa\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Begin SQL\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SELECT Nombre, Edad\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FROM PERSONS\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0INTO :aNombres, :aEdades;\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End SQL\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SQL LOGOUT\n\xa0\xa0//La siguiente b\xfasqueda se enviar\xe1 a la base de datos 4D local\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Begin SQL\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SELECT Nombre, Edad\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FROM PERSONS\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0INTO :aNombres, :aEdades;\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End SQL\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,i.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,i.jsx)(n.p,{children:"Si la conexi\xf3n es exitosa, el variable sistema OK toma el valor 1; de lo contrario, toma el valor 0."}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/commands/begin-sql",children:"Begin SQL"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/end-sql",children:"End SQL"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/sql-logout",children:"SQL LOGOUT"})]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},30860:function(e,n,a){a.d(n,{Z:function(){return s}});let s=a.p+"assets/images/pict33536.es-7e6b2d472cf073420987e9a468a13dd4.png"},250065:function(e,n,a){a.d(n,{Z:function(){return o},a:function(){return d}});var s=a(667294);let i={},r=s.createContext(i);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);