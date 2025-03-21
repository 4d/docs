"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68547"],{76485:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>r,assets:()=>t,toc:()=>l,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/web-get-server-info","title":"WEB Get server info","description":"WEB Get server info {( conCach\xe9 )} : Object","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-get-server-info.md","sourceDirName":"commands-legacy","slug":"/commands/web-get-server-info","permalink":"/docs/es/20-R7/commands/web-get-server-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-get-server-info.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-get-server-info","title":"WEB Get server info","slug":"/commands/web-get-server-info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB GET OPTION","permalink":"/docs/es/20-R7/commands/web-get-option"},"next":{"title":"WEB GET STATISTICS","permalink":"/docs/es/20-R7/commands/web-get-statistics"}}'),d=s("785893"),i=s("250065");let c={id:"web-get-server-info",title:"WEB Get server info",slug:"/commands/web-get-server-info",displayed_sidebar:"docs"},o=void 0,t={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Propiedad cache",id:"propiedad-cache",level:3},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"WEB Get server info"})," {( ",(0,d.jsx)(n.em,{children:"conCach\xe9"})," )} : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"conCach\xe9"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"True para devolver la descripci\xf3n de la cach\xe9 Web. De lo contrario (por defecto), no se devuelve la descripci\xf3n de la cach\xe9."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Resultado"}),(0,d.jsx)(n.td,{children:"Object"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Informaci\xf3n sobre el servidor Web en ejecuci\xf3n y el servidor SOAP"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando ",(0,d.jsx)(n.strong,{children:"WEB Get server info"})," devuelve un objeto que contiene informaci\xf3n del tiempo de ejecuci\xf3n detallada en la sesi\xf3n actual del servidor web 4D. La informaci\xf3n devuelta incluye el servidor SOAP."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," este comando devuelve informaci\xf3n de tiempo de ejecuci\xf3n, es decir, par\xe1metros reales utilizados por el servidor web. Estos par\xe1metros pueden diferir de los devueltos por el comando ",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/web-get-option",children:"WEB GET OPTION"})," ya que dependen de la configuraci\xf3n del sistema, los recursos disponibles, etc."]}),"\n",(0,d.jsxs)(n.p,{children:['De forma predeterminada, el comando no devuelve la propiedad "cach\xe9", ya que puede ser muy grande. Sin embargo, si desea conocer el contenido de la cach\xe9, pase True en el par\xe1metro opcional ',(0,d.jsx)(n.em,{children:"conCache"}),"."]}),"\n",(0,d.jsx)(n.p,{children:"El objeto devuelto contiene las siguientes propiedades (los nombres de propiedad son sensibles a las may\xfasculas y min\xfasculas):"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Propiedad"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Tipo de valor"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"started"}),(0,d.jsx)(n.td,{children:"Booleano"}),(0,d.jsx)(n.td,{children:"true si se inicia el servidor http, de lo contrario false"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"uptime"}),(0,d.jsx)(n.td,{children:"N\xfamero"}),(0,d.jsx)(n.td,{children:"Tiempo transcurrido desde el \xfaltimo inicio del servidor http"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"httpRequestCount"}),(0,d.jsx)(n.td,{children:"N\xfamero"}),(0,d.jsx)(n.td,{children:"N\xfamero de visitas HTTP recibidas por el servidor desde que se inici\xf3"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"startMode"}),(0,d.jsx)(n.td,{children:"Cadena"}),(0,d.jsx)(n.td,{children:'"autom\xe1tico" si est\xe1 activada la opci\xf3n "Iniciar servidor web al arrancar", de lo contrario "manual".'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"SOAPServerStarted"}),(0,d.jsx)(n.td,{children:"Booleano"}),(0,d.jsx)(n.td,{children:"true si se inicia el servidor SOAP, en caso contrario false"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"cache"}),(0,d.jsx)(n.td,{children:"Objeto"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.em,{children:"Esta propiedad s\xf3lo se incluye si el valor de la propiedad del par\xe1metro cacheInfo es True"}),". Describe el contenido de la cach\xe9 del servidor web (ver ",(0,d.jsx)(n.em,{children:"Propiedad cache"})," a continuaci\xf3n)"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"security"}),(0,d.jsx)(n.td,{children:"Objeto"}),(0,d.jsx)(n.td,{children:"Estado actual de las distintas opciones de seguridad"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"cipherSuite"}),(0,d.jsx)(n.td,{children:"Cadena"}),(0,d.jsx)(n.td,{children:"Lista de cifras utilizada por 4D para el protocolo seguro (corresponde al par\xe1metro de la base SSL cipher list)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"HTTPEnabled"}),(0,d.jsx)(n.td,{children:"Booleano"}),(0,d.jsx)(n.td,{children:"True si HTTP est\xe1 activado"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"HTTPSEnabled"}),(0,d.jsx)(n.td,{children:"Booleano"}),(0,d.jsx)(n.td,{children:"True si HTTPS est\xe1 activado"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"HSTSEnabled"}),(0,d.jsx)(n.td,{children:"Booleano"}),(0,d.jsx)(n.td,{children:"True si HSTS est\xe1 activado en el servidor"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"HSTSMaxAge"}),(0,d.jsx)(n.td,{children:"N\xfamero"}),(0,d.jsx)(n.td,{children:"Edad m\xe1xima (en segundos) para HSTS. El valor por defecto es 2 a\xf1os (63,072,000 segundos)."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"minTLSVersion"}),(0,d.jsx)(n.td,{children:"Cadena"}),(0,d.jsx)(n.td,{children:"Versi\xf3n TLS m\xednima aceptada para las conexiones (corresponde al par\xe1metro de base de datos Min TLS version)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"openSSLVersion"}),(0,d.jsx)(n.td,{children:"Cadena"}),(0,d.jsx)(n.td,{children:"Versi\xf3n de la librer\xeda OpenSSL utilizada"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"perfectForwardSecrecy"}),(0,d.jsx)(n.td,{children:"Booleano"}),(0,d.jsx)(n.td,{children:"True si PFS est\xe1 disponible en el servidor, de lo contrario False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"options"}),(0,d.jsx)(n.td,{children:"Objeto"}),(0,d.jsx)(n.td,{children:"Estado actual de varias opciones del servidor web est\xe1ndar"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"CORSEnabled"}),(0,d.jsx)(n.td,{children:"Booleano"}),(0,d.jsx)(n.td,{children:"True si el servicio CORS est\xe1 habilitado en el servidor, de lo contrario False (predeterminado)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"CORSSettings"}),(0,d.jsx)(n.td,{children:"Colecci\xf3n"}),(0,d.jsx)(n.td,{children:"Colecci\xf3n de objetos CORS que definen la lista de host(s) y m\xe9todo(s) permitidos (ver la opci\xf3n web Web CORS settings)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"webCharacterSet"}),(0,d.jsx)(n.td,{children:"Cadena"}),(0,d.jsx)(n.td,{children:"Nombre de conjunto de caracteres (corresponde a la opci\xf3n web Web character set)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"webHTTPCompressionLevel"}),(0,d.jsx)(n.td,{children:"N\xfamero"}),(0,d.jsx)(n.td,{children:"Nivel de compresi\xf3n para los intercambios HTTP comprimidos (corresponde a la opci\xf3n web Web HTTP compression level)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"webHTTPCompressionThreshold"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"Valor de compresi\xf3n (corresponde a la opci\xf3n web Web HTTP compression threshold)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"webHTTPSPortID"}),(0,d.jsx)(n.td,{children:"N\xfamero"}),(0,d.jsx)(n.td,{children:"N\xfamero de puerto TCP utilizado por el servidor Web para conexiones seguras (corresponde a la opci\xf3n web Web HTTPS port ID)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.em,{children:"webInactiveProcessTimeout"})}),(0,d.jsx)(n.td,{children:"N\xfamero"}),(0,d.jsxs)(n.td,{children:[(0,d.jsxs)(n.strong,{children:["No es significativo en el modo de sesiones web escalables, ver ",(0,d.jsx)(n.em,{children:"Gesti\xf3n de las sesiones web (heredado)"})]}),". Duraci\xf3n de vida de los procesos de sesi\xf3n inactivos (corresponde a la opci\xf3n web Web inactive process timeout)"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.em,{children:"webInactiveSessionTimeout"})}),(0,d.jsx)(n.td,{children:"N\xfamero"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.strong,{children:"No es significativo en el modo de sesiones web escalables, ver"})," ",(0,d.jsx)(n.em,{children:(0,d.jsx)(n.strong,{children:"Gesti\xf3n de las sesiones web (heredado)"})}),". Duraci\xf3n de la vida de las sesiones inactivas (corresponde a la opci\xf3n web Web inactive session timeout)"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"webIPAddressToListen"}),(0,d.jsx)(n.td,{children:"Colecci\xf3n"}),(0,d.jsx)(n.td,{children:'La direcci\xf3n IP en el "formato" definido en el que el servidor web recibe las solicitudes http (corresponde a la opci\xf3n web Web IP address to listen)'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.em,{children:"webMaxConcurrentProcesses"})}),(0,d.jsx)(n.td,{children:"N\xfamero"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.strong,{children:"No es significativo en el modo de sesiones web escalables, ver"})," ",(0,d.jsx)(n.em,{children:(0,d.jsx)(n.strong,{children:"Gesti\xf3n de las sesiones web (heredado)"})}),". N\xfamero m\xe1ximo de procesos web concurrentes (corresponde a la opci\xf3n web Web max concurrent processes)"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"webPortID"}),(0,d.jsx)(n.td,{children:"N\xfamero"}),(0,d.jsx)(n.td,{children:"Puerto TCP utilizado por el servidor web (corresponde a la opci\xf3n web Web port ID)"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"4D Server"}),': el comando devuelve informaci\xf3n sobre el servidor web local. Si desea monitorear el servidor web 4D Server desde un 4D remoto, debe aplicar la propiedad "Ejecutar en el servidor" al m\xe9todo.']}),"\n",(0,d.jsx)(n.h3,{id:"propiedad-cache",children:"Propiedad cache"}),"\n",(0,d.jsxs)(n.p,{children:["Si pasa ",(0,d.jsx)(n.strong,{children:"true"})," en el par\xe1metro ",(0,d.jsx)(n.em,{children:"conCache"}),', el comando devuelve la propiedad objeto "cache" con el siguiente contenido:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Nombre de la propiedad"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Tipo de valor"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"cacheUsage"}),(0,d.jsx)(n.td,{children:"N\xfamero"}),(0,d.jsx)(n.td,{children:"Tasa de uso de la cach\xe9"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"numOfLoads"}),(0,d.jsx)(n.td,{children:"N\xfamero"}),(0,d.jsx)(n.td,{children:"N\xfamero de objetos cargados"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"currentSize"}),(0,d.jsx)(n.td,{children:"N\xfamero"}),(0,d.jsx)(n.td,{children:"Tama\xf1o actual de la cach\xe9"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"maxSize"}),(0,d.jsx)(n.td,{children:"N\xfamero"}),(0,d.jsx)(n.td,{children:"Tama\xf1o m\xe1ximo de la cach\xe9"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"objectMaxSize"}),(0,d.jsx)(n.td,{children:"N\xfamero"}),(0,d.jsx)(n.td,{children:"Tama\xf1o m\xe1ximo de objetos cargables en la cach\xe9"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"enabled"}),(0,d.jsx)(n.td,{children:"Booleano"}),(0,d.jsx)(n.td,{children:"true si la cach\xe9 del servidor web est\xe1 activada"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"nbCachedObjects"}),(0,d.jsx)(n.td,{children:"N\xfamero"}),(0,d.jsx)(n.td,{children:"N\xfamero de objetos en la cach\xe9"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"cachedObjects"}),(0,d.jsx)(n.td,{children:"Colecci\xf3n"}),(0,d.jsx)(n.td,{children:"Colecci\xf3n de objetos en la cach\xe9. Cada objeto en cach\xe9 es definido por diferentes propiedades (url, mimeType, expirationType, lastModified, etc.)"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsx)(n.p,{children:"Despu\xe9s de ejecutar el siguiente c\xf3digo:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0$webServerInfo:=WEB Get server info(True)\n"})}),"\n",(0,d.jsx)(n.p,{children:"... $webServerInfo contendr\xe1 por ejemplo:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{ \n "started": true,  \n "uptime": 40,  \n "SOAPServerStarted": true,  \n "startMode": "manual",  \n "httpRequestCount": 0,  \n "options": {  \n "CORSEnabled": false,  \n "CORSSettings": null,  \n "webCharacterSet": "UTF-8",  \n "webHTTPCompressionLevel": 1,  \n "webHTTPCompressionThreshold": 1024,  \n "webHTTPSPortID": 443,  \n "webIPAddressToListen": ["192.168.xxx.xxx"],  \n "webInactiveProcessTimeout": 28800,  \n "webInactiveSessionTimeout": 28800,  \n "webMaxConcurrentProcesses": 100,  \n "webPortID": 80  \n },  \n "security": {  \n "HTTPEnabled": true,  \n "cipherSuite": "ECDHE-RSA-AES128-GCM-SHA256:...:CAMELLIA128-SHA",  \n "openSSLVersion": "OpenSSL 1.0.2h 3 May 2016",  \n "perfectForwardSecrecy": true,  \n "minTLSVersion": "1.2"   \n },  \n "cache": {  \n "cacheUsage": 1,  \n "numOfLoads": 24,  \n "currentSize": 154219,  \n "maxSize": 10485760,  \n "objectMaxSize": 524288,  \n "enabled": true,  \n "nbCachedObjects": 23,  \n "cachedObjects": [  \n {...},{...}  \n ]  \n }  \n}\n'})}),"\n",(0,d.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/license-info",children:"License info"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/process-activity",children:"Process activity"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/soap-reject-new-requests",children:"SOAP REJECT NEW REQUESTS"})]}),"\n",(0,d.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"1531"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return c}});var r=s(667294);let d={},i=r.createContext(d);function c(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);