"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["17601"],{63969:function(e,s,r){r.r(s),r.d(s,{default:()=>x,frontMatter:()=>a,metadata:()=>n,assets:()=>c,toc:()=>l,contentTitle:()=>d});var n=JSON.parse('{"id":"commands-legacy/web-set-option","title":"WEB SET OPTION","description":"WEB SET OPTION ( selector ; valor )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-set-option.md","sourceDirName":"commands-legacy","slug":"/commands/web-set-option","permalink":"/docs/es/20-R7/commands/web-set-option","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-set-option.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-set-option","title":"WEB SET OPTION","slug":"/commands/web-set-option","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SET HTTP HEADER","permalink":"/docs/es/20-R7/commands/web-set-http-header"},"next":{"title":"WEB SET ROOT FOLDER","permalink":"/docs/es/20-R7/commands/web-set-root-folder"}}'),o=r("785893"),i=r("250065");let a={id:"web-set-option",title:"WEB SET OPTION",slug:"/commands/web-set-option",displayed_sidebar:"docs"},d=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function t(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"WEB SET OPTION"})," ( ",(0,o.jsx)(s.em,{children:"selector"})," ; ",(0,o.jsx)(s.em,{children:"valor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe1metro"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"selector"}),(0,o.jsx)(s.td,{children:"Integer"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"C\xf3digo de la opci\xf3n a modificar"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"valor"}),(0,o.jsx)(s.td,{children:"Integer, Text, Collection"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Valor de la opci\xf3n"})]})]})]}),"\n",(0,o.jsx)(s.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(s.p,{children:["El comando ",(0,o.jsx)(s.strong,{children:"WEB SET OPTION"})," modifica el valor actual de las diferentes opciones de funcionamiento del servidor web de 4D."]}),"\n",(0,o.jsx)(s.p,{children:"Los cambios realizados en estas opciones se conservan si el servidor 4D Web se detiene y reinicia, sin embargo, no se conservan si la aplicaci\xf3n 4D se detiene y se reinicia."}),"\n",(0,o.jsxs)(s.p,{children:["En el par\xe1metro ",(0,o.jsx)(s.em,{children:"selector"}),", pase una de las constantes del tema ",(0,o.jsx)(s.em,{children:"Servidor web"})," y pase el nuevo valor de la opci\xf3n en ",(0,o.jsx)(s.em,{children:"valor"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Constante"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{children:"Valor"}),(0,o.jsx)(s.th,{children:"Comentario"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Web character set"}),(0,o.jsx)(s.td,{children:"Entero largo"}),(0,o.jsx)(s.td,{children:"17"}),(0,o.jsxs)(s.td,{children:[(0,o.jsx)(s.strong,{children:"Alcance"}),": 4D local, 4D Server",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Descripci\xf3n"}),": conjunto de caracteres que el servidor Web 4D (con 4D en modo local y 4D Server) utiliza para comunicarse con los navegadores web que se conectan a base. El valor por defecto depende del lenguaje del sistema operativo. Este par\xe1metro se define en las Propiedades de la base.",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Valores"}),": los valores posibles dependen del modo de ejecuci\xf3n de la base relativos al conjunto de caracteres. ",(0,o.jsx)(s.em,{children:"Modo Unicode"}),": cuando la aplicaci\xf3n se ejecuta en modo Unicode, los valores a pasar para este par\xe1metro son los identificadores de conjunto de caracteres (MIBEnum longint o Name string, identificadores definidos por IANA, consulte: ",(0,o.jsx)(s.a,{href:"http://www.iana.org/assignments/character-sets",children:"http://www.iana.org/assignments/character-sets"}),"). Esta es la lista de los identificadores correspondientes a los conjuntos de caracteres que admite el servidor Web de 4D:",(0,o.jsx)(s.br,{}),"4=ISO-8859-1",(0,o.jsx)(s.br,{}),"12=ISO-8859-9",(0,o.jsx)(s.br,{}),"13=ISO-8859-10",(0,o.jsx)(s.br,{}),"17=Shift-JIS",(0,o.jsx)(s.br,{}),"2024=Windows-31J",(0,o.jsx)(s.br,{}),"2026=Big5",(0,o.jsx)(s.br,{}),"38=euc-kr",(0,o.jsx)(s.br,{}),"106=UTF-8",(0,o.jsx)(s.br,{}),"2250=Windows-1250",(0,o.jsx)(s.br,{}),"2251=Windows-1251",(0,o.jsx)(s.br,{}),"2253=Windows-1253",(0,o.jsx)(s.br,{}),"2255=Windows-1255",(0,o.jsx)(s.br,{}),"2256=Windows-1256 ",(0,o.jsx)(s.em,{children:"Modo compatibilidad ASCII"}),":",(0,o.jsx)(s.br,{}),"0: Occidental",(0,o.jsx)(s.br,{}),"1: Japon\xe9s",(0,o.jsx)(s.br,{}),"2: Chino",(0,o.jsx)(s.br,{}),"3: Coreano",(0,o.jsx)(s.br,{}),"4: Definido por el usuario",(0,o.jsx)(s.br,{}),"5: Reservado",(0,o.jsx)(s.br,{}),"6: Europa central",(0,o.jsx)(s.br,{}),"7: Cir\xedlico",(0,o.jsx)(s.br,{}),"8: \xc1rabe",(0,o.jsx)(s.br,{}),"9: Griego",(0,o.jsx)(s.br,{}),"10: Hebreo",(0,o.jsx)(s.br,{}),"11: Turco",(0,o.jsx)(s.br,{}),"12: N\xf3rdico"]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Web Client IP address to listen"}),(0,o.jsx)(s.td,{children:"Entero largo"}),(0,o.jsx)(s.td,{children:"23"}),(0,o.jsxs)(s.td,{children:[(0,o.jsx)(s.strong,{children:"Alcance"}),": todas las m\xe1quinas remotas 4D",(0,o.jsx)(s.br,{})," ",(0,o.jsx)(s.strong,{children:"Valores posibles"}),": ver Web IP address to listen",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Descripci\xf3n"}),": se utiliza para especificar este par\xe1metro para todas las m\xe1quinas 4D remotas utilizadas como servidores web (aplicado al servidor web remoto \xfanicamente).",(0,o.jsx)(s.br,{})]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Web CORS enabled"}),(0,o.jsx)(s.td,{children:"Entero largo"}),(0,o.jsx)(s.td,{children:"92"}),(0,o.jsxs)(s.td,{children:[(0,o.jsx)(s.strong,{children:"Alcance"}),": servidor web local ",(0,o.jsx)(s.strong,{children:"Descripci\xf3n"}),": estado del servicio CORS (",(0,o.jsx)(s.em,{children:"Cross-origin resource sharing"}),") para el servidor web. Si est\xe1 habilitado, se pueden permitir llamadas XHR (por ejemplo, REST) desde p\xe1ginas web fuera del dominio en su aplicaci\xf3n. (",(0,o.jsx)(s.strong,{children:"Nota"}),': tambi\xe9n se debe definir una lista de direcciones y m\xe9todos permitidos para utilizar el servicio CORS; ver Web CORS settings). Cuando el servicio CORS est\xe1 deshabilitado, las solicitudes CORS se ignoran. Cuando el servicio CORS est\xe1 habilitado y un dominio o m\xe9todo no permitido env\xeda una solicitud entre sitios, se rechaza con una respuesta de error "403 prohibido".',(0,o.jsx)(s.br,{}),(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Valores posibles"}),": 0 (deshabilitado, predeterminado) o 1 (habilitado)"]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Web CORS settings"}),(0,o.jsx)(s.td,{children:"Entero largo"}),(0,o.jsx)(s.td,{children:"93"}),(0,o.jsxs)(s.td,{children:[(0,o.jsx)(s.strong,{children:"Alcance"}),": servidor web local",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Descripci\xf3n"}),": lista de host(s) y m\xe9todos(s) permitidos para el servicio CORS.",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Valores posibles"}),": Colecci\xf3n de objetos CORS con las siguientes propiedades:                   ",(0,o.jsx)(s.table,{children:(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.strong,{children:"Propiedad"})}),(0,o.jsx)(s.td,{children:(0,o.jsxs)(s.strong,{children:["Tipo ",(0,o.jsx)(s.br,{})]})}),(0,o.jsx)(s.td,{children:(0,o.jsxs)(s.strong,{children:["Descripci\xf3n ",(0,o.jsx)(s.br,{})]})})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"[ ].host"}),(0,o.jsx)(s.td,{children:"Texto"}),(0,o.jsxs)(s.td,{children:[(0,o.jsxs)(s.em,{children:[(0,o.jsx)(s.em,{children:"Obligatorio"})," -- Si el host no est\xe1 presente o vac\xedo, el objeto se ignora."]}),(0,o.jsx)(s.br,{}),"Nombre de dominio o direcci\xf3n IP desde donde las p\xe1ginas externas pueden enviar solicitudes de datos al Servidor a trav\xe9s de CORS. Se pueden agregar m\xfaltiples atributos de dominio para crear una lista blanca. Se soporatn varias sintaxis:",(0,o.jsx)(s.br,{}),"192.168.5.17:8081",(0,o.jsx)(s.br,{}),"192.168.5.17",(0,o.jsx)(s.br,{}),"192.168.*",(0,o.jsx)(s.br,{}),"192.168.*:8081",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.a,{href:"http://192.168.5.17:8081",children:"http://192.168.5.17:8081"}),(0,o.jsx)(s.br,{}),"http://*.myDomain.com",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.a,{href:"http://myProject.myDomain.com",children:"http://myProject.myDomain.com"}),(0,o.jsx)(s.br,{}),"*.myDomain.com",(0,o.jsx)(s.br,{}),"myProject.myDomain.com",(0,o.jsx)(s.br,{}),"*"]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"[ ].methods"}),(0,o.jsx)(s.td,{children:"Texto"}),(0,o.jsxs)(s.td,{children:["M\xe9todo(s) HTTP aceptado(s) para el ",(0,o.jsx)(s.em,{children:"host"}),' CORS correspondiente. Separe cada m\xe9todo con un ";" (por ejemplo: "post;get")',(0,o.jsx)(s.br,{}),"Si los ",(0,o.jsx)(s.em,{children:"m\xe9todos"})," est\xe1n vac\xedos, son nulos o no est\xe1n definidos: todos los m\xe9todos est\xe1n habilitados."]})]})]})})]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Web debug log"}),(0,o.jsx)(s.td,{children:"Entero largo"}),(0,o.jsx)(s.td,{children:"84"}),(0,o.jsxs)(s.td,{children:[(0,o.jsx)(s.strong,{children:"Alcance:"})," servidor web local",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Nota:"})," si se reinicia el servidor HTTP, se utiliza un nuevo archivo de historial",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Descripci\xf3n:"}),' le permite obtener o definir el estado del archivo de historial de peticiones HTTP del servidor Web 4D. Cuando se activa, este archivo, llamado "',(0,o.jsxs)(s.strong,{children:["HTTPDebugLog_",(0,o.jsx)(s.em,{children:"nn"}),".txt"]}),'", se guarda en la carpeta "Logs" de la aplicaci\xf3n (',(0,o.jsx)(s.em,{children:"nn"})," es el n\xfamero de archivo). Es \xfatil para problemas de depuraci\xf3n relacionados con el servidor web. Registra cada petici\xf3n y cada respuesta en modo raw. La totalidad de las peticiones, encabezados, se registran; opcionalmente, tambi\xe9n se pueden registrar partes del cuerpo. Para mayor informaci\xf3n sobre archivos HTTPDebugLog, consulte la secci\xf3n ",(0,o.jsx)(s.em,{children:"Descripci\xf3n de archivos de historial"}),".",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Valores"}),': una de las constantes con el prefijo "wdl" (consulte las descripciones de estas constantes en este tema).',(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Valor por defecto"}),": 0 (no activado)"]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Web HSTS enabled"}),(0,o.jsx)(s.td,{children:"Entero largo"}),(0,o.jsx)(s.td,{children:"86"}),(0,o.jsxs)(s.td,{children:[(0,o.jsx)(s.strong,{children:"Alcance"}),": 4D local, 4D Server. ",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Descripci\xf3n"}),": estado HTTP Strict Transport Security (HSTS). HSTS permite que el servidor Web 4D declare que los navegadores solo deber\xedan interactuar con \xe9l a trav\xe9s de conexiones HTTPS seguras. Una vez activado, el servidor web 4D agregar\xe1 autom\xe1ticamente informaci\xf3n relacionada con HSTS a todos los encabezados de respuesta.Los navegadores registrar\xe1n la informaci\xf3n HSTS la primera vez que reciban una respuesta del servidor web 4D, luego toda solicitud HTTP futura se transformar\xe1 autom\xe1ticamente en solicitudes HTTPS. El tiempo que el navegador almacena esta informaci\xf3n se especifica con el selector Web HSTS max age. ",(0,o.jsx)(s.br,{}),"HSTS requiere que HTTPS est\xe9 habilitado en el servidor. HTTP tambi\xe9n debe estar habilitado para permitir las conexiones iniciales del cliente.",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Valores posibles"}),": 0 (desactivado, predeterminado) o 1 (activado)",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Nota:"})," el servidor web 4D debe reiniciarse para que se aplique esta configuraci\xf3n."]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Web HSTS max age"}),(0,o.jsx)(s.td,{children:"Entero largo"}),(0,o.jsx)(s.td,{children:"87"}),(0,o.jsxs)(s.td,{children:[(0,o.jsx)(s.strong,{children:"Alcance"}),": 4D local, 4D Server",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Descripci\xf3n"}),": especifica el tiempo m\xe1ximo (en segundos) que HSTS est\xe1 activo para cada conexi\xf3n de cliente nuevo. Esta informaci\xf3n se almacena en el lado del cliente durante la duraci\xf3n especificada.",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Valores posibles"}),": Entero largo (segundos)",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Valor por defecto"}),": 63072000 (2 a\xf1os)",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.br,{}),(0,o.jsxs)(s.em,{children:[(0,o.jsx)(s.em,{children:"Atenci\xf3n:"})," una vez que HSTS est\xe9 habilitado, las conexiones cliente continuar\xe1n usando este mecanismo por la duraci\xf3n especificada. Cuando est\xe9 probando sus aplicaciones, se recomienda establecer una duraci\xf3n corta para poder cambiar entre los modos de conexi\xf3n segura y no segura si es necesario."]})," ",(0,o.jsx)(s.em,{children:(0,o.jsx)(s.br,{})})]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Web HTTP compression level"}),(0,o.jsx)(s.td,{children:"Entero largo"}),(0,o.jsx)(s.td,{children:"50"}),(0,o.jsxs)(s.td,{children:[(0,o.jsx)(s.strong,{children:"Alcance"}),": Servidor web local",(0,o.jsx)(s.br,{})," ",(0,o.jsx)(s.strong,{children:"Descripci\xf3n"}),": nivel de compresi\xf3n para todos los intercambios HTTP comprimidos efectuados para el servidor HTTP de 4D (peticiones cliente o respuestas servidor, Web y servicio web). Este selector permite optimizar los intercambios con un enfoque en la velocidad de ejecuci\xf3n (menor compresi\xf3n) o la cantidad de compresi\xf3n (menor velocidad). La elecci\xf3n de un valor depende del tama\xf1o y la naturaleza de los datos intercambiados. Pase de 1 a 9 en el par\xe1metro ",(0,o.jsx)(s.em,{children:"valor"}),", 1 es la compresi\xf3n m\xe1s r\xe1pida y 9 la m\xe1s alta. Tambi\xe9n puede pasar -1 para obtener un compromiso entre velocidad y tasa de compresi\xf3n. El nivel de compresi\xf3n por defecto es 1 (compresi\xf3n r\xe1pida).",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Valores posibles"}),": 1 a 9 (1 = m\xe1s r\xe1pido, m\xe1s comprimido = 9) o -1 = mejor compromiso."]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Web HTTP compression threshold"}),(0,o.jsx)(s.td,{children:"Entero largo"}),(0,o.jsx)(s.td,{children:"51"}),(0,o.jsxs)(s.td,{children:[(0,o.jsx)(s.strong,{children:"Alcance"}),": Servidor HTTP local",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Descripci\xf3n"}),": en intercambios HTTP optimizados, l\xedmite de tama\xf1o de petici\xf3n por debajo del cual los intercambios no deben comprimirse. Esta opci\xf3n es \xfatil para evitar p\xe9rdidas de tiempo de m\xe1quina para comprimir intercambios muy peque\xf1os.",(0,o.jsx)(s.br,{}),"Pase en ",(0,o.jsx)(s.em,{children:"valor"})," un tama\xf1o en bytes. Por defecto, el l\xedmite de compresi\xf3n se establece en 1024 bytes.",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Valores posibles"}),": todo valor de tipo entero largo. El par\xe1metro ",(0,o.jsx)(s.em,{children:"valor"})," contiene una tama\xf1o expresado en bytes. Por defecto, el umbral de compresi\xf3n est\xe1 definido en 1024 bytes."]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Web HTTP enabled"}),(0,o.jsx)(s.td,{children:"Entero largo"}),(0,o.jsx)(s.td,{children:"88"}),(0,o.jsxs)(s.td,{children:[(0,o.jsx)(s.strong,{children:"Alcance"}),": 4D local, 4D Server",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Descripci\xf3n"}),": estados para comunicaci\xf3n sobre HTTP.",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Valores posibles"}),": 0 (desactivado) o 1 (activado)"]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Web HTTP TRACE"}),(0,o.jsx)(s.td,{children:"Entero largo"}),(0,o.jsx)(s.td,{children:"85"}),(0,o.jsxs)(s.td,{children:[(0,o.jsx)(s.strong,{children:"Alcance"}),": servidor web local",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Descripci\xf3n"}),": le permite activar o desactivar el m\xe9todo HTTP TRACE en el servidor web de 4D. Por razones de seguridad, a partir de 4D v15 R2, por defecto, el servidor web 4D rechaza peticiones TRACE HTTP con un error 405 (ver desactivaci\xf3n de HTTP TRACE). Si es necesario, puede activar el m\xe9todo HTTP TRACE para la sesi\xf3n pasando esta constante con el valor 1. Cuando se activa esta opci\xf3n, el servidor web 4D responde a las solicitudes HTTP TRACE con la l\xednea de petici\xf3n, el encabezado y el cuerpo.",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Valores posibles"}),": 0 (desactivado) o 1 (activado)",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Valor por defecto"}),": 0 (desactivado)"]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Web HTTPS enabled"}),(0,o.jsx)(s.td,{children:"Entero largo"}),(0,o.jsx)(s.td,{children:"89"}),(0,o.jsxs)(s.td,{children:[(0,o.jsx)(s.strong,{children:"Alcance"}),": 4D local, 4D Server",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Descripci\xf3n"}),": estado para comunicaci\xf3n sobre HTTPS.",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Valores posibles"}),": 0 (desactivado) o 1 (activado)"]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Web HTTPS port ID"}),(0,o.jsx)(s.td,{children:"Entero largo"}),(0,o.jsx)(s.td,{children:"39"}),(0,o.jsxs)(s.td,{children:[(0,o.jsx)(s.strong,{children:"Alcance"}),": 4D local, 4D Server",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Valores posibles"}),": 0 a 65535",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Descripci\xf3n"}),': n\xfamero del puerto TCP utilizado por el servidor web de 4D en modo local y de 4D Server para conexiones seguras v\xeda TLS (protocolo HTTPS). El n\xfamero de puerto HTTPS se define en la p\xe1gina "Web/Configuraci\xf3n" de la caja de di\xe1logo Propiedades de la base.',(0,o.jsx)(s.br,{}),"Por defecto, el valor es 443 (valor est\xe1ndar). Puede utilizar las constantes del tema ",(0,o.jsx)(s.em,{children:"N\xfameros de puerto TCP"})," para el par\xe1metro ",(0,o.jsx)(s.em,{children:"valor"}),"."]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Web inactive process timeout"}),(0,o.jsx)(s.td,{children:"Entero largo"}),(0,o.jsx)(s.td,{children:"78"}),(0,o.jsxs)(s.td,{children:[(0,o.jsx)(s.strong,{children:"Alcance"}),": servidor web local",(0,o.jsx)(s.br,{})," ",(0,o.jsx)(s.strong,{children:"Descripci\xf3n"}),": permite modificar el timeout del proceso utilizado para la sesi\xf3n (opci\xf3n relativa al proceso). Despu\xe9s del timeout, el proceso se elimina en el servidor, se llama al ",(0,o.jsx)(s.em,{children:"M\xe9todo base On Web Legacy Close Session"})," y luego el contexto de la sesi\xf3n se destruye.",(0,o.jsx)(s.br,{})," ",(0,o.jsx)(s.strong,{children:"Valores"}),": Entero largo (minutos)",(0,o.jsx)(s.br,{})," ",(0,o.jsx)(s.strong,{children:"Valores por defecto"}),": 480 minutos (pase 0 para restablecer el valor por defecto)"]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Web inactive session timeout"}),(0,o.jsx)(s.td,{children:"Entero largo"}),(0,o.jsx)(s.td,{children:"72"}),(0,o.jsxs)(s.td,{children:[(0,o.jsx)(s.strong,{children:"Alcance"}),": servidor web local",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Descripci\xf3n"}),": permite modificar la duraci\xf3n de vida de las sesiones inactivas (duraci\xf3n definida en cookie). Al final de este periodo, la cookie de sesi\xf3n expira y no se env\xeda m\xe1s al cliente HTTP.",(0,o.jsx)(s.br,{})," ",(0,o.jsx)(s.strong,{children:"Valores"}),": Entero largo (minutos)",(0,o.jsx)(s.br,{})," ",(0,o.jsx)(s.strong,{children:"Valores por defecto"}),": 480 minutos (pase 0 para restablecer el valor por defecto)"]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Web IP address to listen"}),(0,o.jsx)(s.td,{children:"Entero largo"}),(0,o.jsx)(s.td,{children:"16"}),(0,o.jsxs)(s.td,{children:[(0,o.jsx)(s.strong,{children:"Alcance"}),": 4D local, 4D Server",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Descripci\xf3n"}),": direcci\xf3n IP en la que el servidor web debe recibir las peticiones HTTP con 4D en modo local y 4D Server. Por defecto, ninguna direcci\xf3n se especifica. Este par\xe1metro se define en las Propiedades de la base. Este selector es \xfatil en el caso de los servidores web 4D compilados y fusionados con 4D Desktop (no hay acceso al modo Dise\xf1o). ",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Valores posibles"}),': direcci\xf3n IP en forma de cadena. Ambos formatos cadena IPv6 (por ejemplo, "2001:0db8:0000:0000:0000:ff00:0042:8329") y los formatos cadena IPv4 (por ejemplo, "123.45.67.89") son compatibles.',(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Nota:"})," por compatibilidad, las direcciones IPv4 expresadas en como longitudes hexadecimales (obsoletas) a\xfan son compatibles."]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Web legacy session"}),(0,o.jsx)(s.td,{children:"Entero largo"}),(0,o.jsx)(s.td,{children:"70"}),(0,o.jsxs)(s.td,{children:[(0,o.jsx)(s.strong,{children:"Alcance"}),": servidor web local**",(0,o.jsx)(s.br,{}),"Descripci\xf3n**: permite activar o desactivar el modo de gesti\xf3n de las sesiones (descrito en la secci\xf3n ",(0,o.jsx)(s.em,{children:"Gesti\xf3n de las sesiones web (heredado)"}),"). ",(0,o.jsx)(s.br,{})," ",(0,o.jsx)(s.strong,{children:"Valores"}),": 1 (activar modo) \xf3 0 (desactivar modo)",(0,o.jsx)(s.br,{})," ",(0,o.jsx)(s.strong,{children:"Valor por defecto"}),": 1 para bases creadas en la versi\xf3n 13, 0 para bases convertidas. Note que este modo activa igualmente el mecanismo de reutilizaci\xf3n de los contextos temporales en modo remoto. Para mayor informaci\xf3n sobre este mecanismo, consulte la descripci\xf3n de esta opci\xf3n en la secci\xf3n ",(0,o.jsx)(s.em,{children:"Par\xe1metros del servidor web"}),"."]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Web log recording"}),(0,o.jsx)(s.td,{children:"Entero largo"}),(0,o.jsx)(s.td,{children:"29"}),(0,o.jsxs)(s.td,{children:[(0,o.jsx)(s.strong,{children:"Alcance"}),": 4D local, 4D Server",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Descripci\xf3n"}),": inicia o detiene el registro de peticiones solicitudes Web recibida por el servidor web de 4D en modo local o 4D Server. Por defecto, el valor es 0 (no hay registro de peticiones).",(0,o.jsx)(s.br,{}),'El historial de las peticiones web se guarda en un archivo texto llamado "logweb.txt" que se ubica autom\xe1ticamente en la carpeta Logs de la base, junto al archivo de estructura. El formato de este fichero es determinado por el valor que se pase. Para m\xe1s informaci\xf3n sobre los diferentes formatos de historial de las peticiones, consulte la secci\xf3n [#title id= "2833"/]. La activaci\xf3n de este archivo tambi\xe9n se puede definir en la p\xe1gina "Web/Avanzado" de las Preferencias de 4D.',(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Valores posibles"}),": 0 = No guardar (por defecto), 1 = Registrar en formato CLF, 2 = Registrar en formato DLF, 3 = Registrar en formato DLF, 4 = Guardar en formato WLF.",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Atenci\xf3n"}),': los formatos 3 y 4 formatos son formatos personalizados, los contenidos deben ser definidos de antemano en las Preferencias de la aplicaci\xf3n, p\xe1gina "Web/Formato del historial". Si usted utiliza uno de estos formatos sin que sus campos hayan sido seleccionados, el archivo de las peticiones no se generar\xe1.',(0,o.jsx)(s.br,{}),(0,o.jsx)(s.br,{})]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Web max concurrent processes"}),(0,o.jsx)(s.td,{children:"Entero largo"}),(0,o.jsx)(s.td,{children:"18"}),(0,o.jsxs)(s.td,{children:[(0,o.jsx)(s.strong,{children:"Alcance"}),": 4D local, 4D Server",(0,o.jsx)(s.br,{})," ",(0,o.jsx)(s.strong,{children:"Descripci\xf3n"}),': l\xedmite estrictamente superior del n\xfamero de procesos web de todo tipo aceptados por el servidor web con 4D en modo local y 4D Server. Cuando se alcanza el n\xfamero l\xedmite (menos uno), 4D no crea un nuevo proceso y devuelve el mensaje "Servidor no disponible" (estado HTTP 503 - Servicio no disponible) a toda nueva petici\xf3n.',(0,o.jsx)(s.br,{}),"Este par\xe1metro previene la saturaci\xf3n del servidor web de 4D que puede ocurrir durante un env\xedo masivo de peticiones o de una demanda excesiva de creaci\xf3n de contextos. Tambi\xe9n puede definirse en la caja de di\xe1logo de la Propiedades de la base.",(0,o.jsx)(s.br,{}),"En teor\xeda, el n\xfamero m\xe1ximo de procesos web es el resultado de dividir la memoria disponible / tama\xf1o de la pila de un proceso web. Otra soluci\xf3n es ver la informaci\xf3n sobre los procesos web que se muestra en el Explorador de ejecuci\xf3n: se indican el n\xfamero actual de procesos web y el n\xfamero m\xe1ximo alcanzado desde el inicio del servidor web.",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Valores"}),": todo valor entre 10 y 32 000. El valor por defecto es 100."]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Web max sessions"}),(0,o.jsx)(s.td,{children:"Entero largo"}),(0,o.jsx)(s.td,{children:"71"}),(0,o.jsxs)(s.td,{children:[(0,o.jsx)(s.strong,{children:"Alcance"}),": servidor web local**",(0,o.jsx)(s.br,{}),"** ",(0,o.jsx)(s.strong,{children:"Descripci\xf3n"}),": permite limitar el n\xfamero de sesiones simult\xe1neas. Cuando se alcanza el n\xfamero definido, la sesi\xf3n m\xe1s antigua se cierra (y se llama al ",(0,o.jsx)(s.em,{children:"M\xe9todo base On Web Legacy Close Session"}),") si el servidor web necesita crear una nueva.",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Valores posibles:"})," Entero largo. El n\xfamero de sesiones simult\xe1neas no puede superar el n\xfamero total de procesos web (opci\xf3n Web Max Concurrent Processes, 100 por defecto)",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Valores por defecto"}),": 100 (pase 0 para restablecer el valor por defecto)"]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Web maximum requests size"}),(0,o.jsx)(s.td,{children:"Entero largo"}),(0,o.jsx)(s.td,{children:"27"}),(0,o.jsxs)(s.td,{children:[(0,o.jsx)(s.strong,{children:"Alcance"}),": 4D local, 4D Server",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Descripci\xf3n"}),": tama\xf1o m\xe1ximo (en bytes) de las peticiones HTTP entrantes (POST) que el servidor Web est\xe1 autorizado a tratar. Por defecto, el valor es 2 000 000, es decir, un poco menos de 2 MB. El valor m\xe1ximo (2 147 483 648) significa en la pr\xe1ctica que ning\xfan l\xedmite se establece.",(0,o.jsx)(s.br,{}),"Esta configuraci\xf3n evita la saturaci\xf3n del servidor Web, causada por peticiones entrantes de gran tama\xf1o. Cuando una petici\xf3n llega al l\xedmite, el servidor web de 4D la rechaza.",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Valores posibles"}),": 500 000 a 2 147 483 648."]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Web port ID"}),(0,o.jsx)(s.td,{children:"Entero largo"}),(0,o.jsx)(s.td,{children:"15"}),(0,o.jsxs)(s.td,{children:[(0,o.jsx)(s.strong,{children:"Alcance"}),": 4D en modo local y 4D Server. ",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Descripci\xf3n"}),': establece u obtiene el n\xfamero del puerto TCP utilizado por el servidor web 4D con 4D en modo local y 4D Server. Por defecto, el valor es 80. El n\xfamero de puerto TCP se define en la p\xe1gina "Web/Configuraci\xf3n" de la caja de di\xe1logo Propiedades de la base. Puede utilizar una de las constantes del tema ',(0,o.jsx)(s.em,{children:"N\xfameros de puerto TCP"})," para el par\xe1metro ",(0,o.jsx)(s.em,{children:"valor"}),". Este selector es \xfatil en el marco de servidores web 4D que se compilan y fusionan utilizando 4D de escritorio (sin acceso al entorno Dise\xf1o). ",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Valores posibles"}),": para obtener m\xe1s informaci\xf3n sobre el n\xfamero de puerto TCP, consulte la secci\xf3n ",(0,o.jsx)(s.em,{children:"Par\xe1metros del servidor web"}),". ",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Valor por defecto"}),": 80"]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Web scalable session"}),(0,o.jsx)(s.td,{children:"Entero largo"}),(0,o.jsx)(s.td,{children:"90"}),(0,o.jsxs)(s.td,{children:[(0,o.jsx)(s.strong,{children:"Alcance"}),": servidor Web local",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Descripci\xf3n:"})," activa o desactiva el modo de gesti\xf3n de sesiones escalable (descrito en la ",(0,o.jsx)(s.em,{children:"p\xe1gina Sesiones de usuario"})," en ",(0,o.jsx)(s.em,{children:"developer.4d.com"}),")",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Valores posibles"}),": 1 (modo de activaci\xf3n) o 0 (modo de desactivaci\xf3n). Si se modifica el valor, el servidor web debe ser reiniciado para que se tenga en cuenta el cambio. Cuando se habilita este modo, se ignoran las siguientes opciones: Web inactive process timeout, Web max concurrent processes, Web session cookie name y Web inactive session timeout."]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Web session cookie domain"}),(0,o.jsx)(s.td,{children:"Entero largo"}),(0,o.jsx)(s.td,{children:"81"}),(0,o.jsxs)(s.td,{children:[(0,o.jsx)(s.strong,{children:"Alcance"}),": Servidor web local ",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Descripci\xf3n"}),': define u obtiene el valor del campo "dominio" de la cookie de sesi\xf3n. Este selector (as\xed como el selector 82) es \xfatil para controlar el alcance de las cookies de sesi\xf3n: si configura, por ejemplo, el valor "/*.4d.fr" para este selector, el cliente s\xf3lo enviar\xe1 una cookie cuando la petici\xf3n se dirige al dominio ".4d.fr", que excluye los servidores que alojan los datos est\xe1ticos externos. ',(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Valores posibles"}),": Texto"]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Web session cookie name"}),(0,o.jsx)(s.td,{children:"Entero largo"}),(0,o.jsx)(s.td,{children:"73"}),(0,o.jsxs)(s.td,{children:[(0,o.jsx)(s.strong,{children:"Alcance"}),": servidor web local",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Descripci\xf3n"}),": permite definir el nombre de la cookie utilizada para almacenar el ID de la sesi\xf3n. ",(0,o.jsx)(s.br,{})," ",(0,o.jsx)(s.strong,{children:"Valores"}),": Texto",(0,o.jsx)(s.br,{})," ",(0,o.jsx)(s.strong,{children:"Valores por defecto"}),': "4DSID" (pase una cadena vac\xeda para restablecer el valor por defecto)']})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Web session cookie path"}),(0,o.jsx)(s.td,{children:"Entero largo"}),(0,o.jsx)(s.td,{children:"82"}),(0,o.jsxs)(s.td,{children:[(0,o.jsx)(s.strong,{children:"Alcance"}),": servidor web local ",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Descripci\xf3n"}),': define u obtiene el valor del campo "path" de la cookie de sesi\xf3n. Este selector (as\xed como elselector 81) es \xfatil para controlar el alcance de las cookies de sesi\xf3n: si configura, por ejemplo, el valor "/4DACTION" para este selector, el cliente deber\xe1 enviar s\xf3lo una cookie para peticiones din\xe1micas que comiencen con 4DACTION , y no para las im\xe1genes, p\xe1ginas est\xe1ticas, etc.',(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Valores posibles"}),": Texto"]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Web session enable IP address validation"}),(0,o.jsx)(s.td,{children:"Entero largo"}),(0,o.jsx)(s.td,{children:"83"}),(0,o.jsxs)(s.td,{children:[(0,o.jsx)(s.strong,{children:"Alcance"}),": servidorWeb Local ",(0,o.jsx)(s.strong,{children:(0,o.jsx)(s.br,{})})," ",(0,o.jsx)(s.strong,{children:"Descripci\xf3n"}),": Activa o desactiva la validaci\xf3n de las direcciones IP para las cookies de sesi\xf3n. Por razones de seguridad, por defecto, el servidor web de 4D verifica la direcci\xf3n IP de cada solicitud que contiene una cookie de sesi\xf3n y la rechaza si esta direcci\xf3n no coincide con la direcci\xf3n IP utilizada para crear la cookie. En algunas aplicaciones espec\xedficas, es posible que desee desactivar esta validaci\xf3n y aceptar las cookies de sesi\xf3n, incluso cuando sus direcciones IP no coincidan. Por ejemplo, cuando los dispositivos m\xf3viles cambian entre redes WiFi y 3G/4G, su direcci\xf3n IP cambia. En este caso, debe pasar 0 en esta opci\xf3n para permitir que los clientes puedan seguir utilizando sus sesiones web incluso cuando las direcciones IP cambien. Tenga en cuenta que esta configuraci\xf3n reduce el nivel de seguridad de la aplicaci\xf3n. ",(0,o.jsx)(s.br,{}),"Cuando se modifica, esta configuraci\xf3n es efectiva inmediatamente (no es necesario reiniciar el servidor HTTP).",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Valores posibles"}),": 0 (desactivado) o 1 (activado)",(0,o.jsx)(s.br,{}),(0,o.jsx)(s.strong,{children:"Valor por defecto"}),": 1 (las direcciones IP son verificadas)"]})]})]})]}),"\n",(0,o.jsxs)(s.p,{children:["Al utilizar el ",(0,o.jsx)(s.em,{children:"selector"})," Web debug log, puede pasar una de las siguientes constantes en el par\xe1metro ",(0,o.jsx)(s.em,{children:"valor"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Constante"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{children:"Valor"}),(0,o.jsx)(s.th,{children:"Comentario"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"wdl disable web log"}),(0,o.jsx)(s.td,{children:"Entero largo"}),(0,o.jsx)(s.td,{children:"0"}),(0,o.jsx)(s.td,{children:"El archivo de historial de peticiones HTTP Web est\xe1 desactivado"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"wdl enable with all body parts"}),(0,o.jsx)(s.td,{children:"Entero largo"}),(0,o.jsx)(s.td,{children:"7"}),(0,o.jsx)(s.td,{children:"El archivo de historial de peticiones HTTP Web est\xe1 activado con el cuerpo de la respuesta y la respuesta"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"wdl enable with request body"}),(0,o.jsx)(s.td,{children:"Entero largo"}),(0,o.jsx)(s.td,{children:"5"}),(0,o.jsx)(s.td,{children:"El archivo de historial de peticiones HTTP Web est\xe1 activado con el cuerpo de la respuesta \xfanicamente"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"wdl enable with response body"}),(0,o.jsx)(s.td,{children:"Entero largo"}),(0,o.jsx)(s.td,{children:"3"}),(0,o.jsx)(s.td,{children:"El archivo de historial de peticiones HTTP Web est\xe1 activado con el cuerpo de la respuesta \xfanicamente"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"wdl enable without body"}),(0,o.jsx)(s.td,{children:"Entero largo"}),(0,o.jsx)(s.td,{children:"1"}),(0,o.jsx)(s.td,{children:"El archivo de historial de peticiones HTTP Web est\xe1 desactivado sin el cuerpo (el tama\xf1o del cuerpo se entrega en este caso)"})]})]})]}),"\n",(0,o.jsx)(s.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsx)(s.p,{children:"La activaci\xf3n del archivo de historial de depuraci\xf3n de las peticiones HTTP sin las partes del cuerpo:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:"\xa0WEB SET OPTION(Web debug log;wdl enable without body)\n"})}),"\n",(0,o.jsx)(s.p,{children:"Una entrada registrada se ve as\xed:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-RAW",children:"# REQUEST# SocketID: 1592# PeerIP: 127.0.0.1# PeerPort: 54912# TimeStamp: 39089388#ConnectionID: 9808E3B4B06E4EB5A60E9A3FC69116BD#SequenceNumber:5GET /4DWEBTEST HTTP/1.1Accept: text/html,(...)Accept-Encoding: gzip, deflateConnection: keep-aliveHost: 127.0.0.1User-Agent: 4D_HTTP_Client/0.0.0.0# RESPONSE# SocketID: 1592# PeerIP: 127.0.0.1# PeerPort: 54912# TimeStamp: 39089389 (elapsed time: 1 ms)#ConnectionID: 9808E3B4B06E4EB5A60E9A3FC69116BD#SequenceNumber:6HTTP/1.1 200 OKAccept-Ranges: bytesConnection: keep-aliveContent-Encoding: gzipContent-Length: 3555Content-Type: text/plain; charset=UTF-8Date: Thu, 20 Apr 2017 10:51:29 GMTExpires: Thu, 20 Apr 2017 10:51:29 GMTServer: 4D/16.0.1[Body Size: 3555]\n"})}),"\n",(0,o.jsx)(s.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/docs/es/20-R7/commands/web-get-option",children:"WEB GET OPTION"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/es/20-R7/commands/web-legacy-get-session-expiration",children:"WEB LEGACY GET SESSION EXPIRATION"})]}),"\n",(0,o.jsx)(s.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"N\xfamero de comando"}),(0,o.jsx)(s.td,{children:"5"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Hilo seguro"}),(0,o.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function x(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(t,{...e})}):t(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return d},a:function(){return a}});var n=r(667294);let o={},i=n.createContext(o);function a(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);