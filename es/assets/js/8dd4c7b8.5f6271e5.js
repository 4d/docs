"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78759],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,r,i=function(e,a){if(null==e)return{};var n,r,i={},t=Object.keys(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var a=r.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},d=function(e){var a=c(e.components);return r.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var n=e.components,i=e.mdxType,t=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,v=p["".concat(s,".").concat(m)]||p[m]||u[m]||t;return n?r.createElement(v,o(o({ref:a},d),{},{components:n})):r.createElement(v,o({ref:a},d))}));function m(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var t=n.length,o=new Array(t);o[0]=p;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<t;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},56693:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});n(67294);var r=n(3905);function i(){return i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function t(e,a){if(null==e)return{};var n,r,i=function(e,a){if(null==e)return{};var n,r,i={},t=Object.keys(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const o={id:"client-server",title:"P\xe1gina Cliente/Servidor"},l=void 0,s={unversionedId:"settings/client-server",id:"version-19-R8/settings/client-server",title:"P\xe1gina Cliente/Servidor",description:"Las p\xe1ginas Cliente-Servidor agrupan los par\xe1metros relacionados con el uso de la base de datos en modo cliente-servidor. Naturalmente, estas propiedades s\xf3lo se tienen en cuenta cuando la base de datos se utiliza en modo remoto.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R8/settings/client-server.md",sourceDirName:"settings",slug:"/settings/client-server",permalink:"/docs/es/settings/client-server",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R8/settings/client-server.md",tags:[],version:"19-R8",frontMatter:{id:"client-server",title:"P\xe1gina Cliente/Servidor"},sidebar:"docs",previous:{title:"P\xe1gina de respaldo",permalink:"/docs/es/settings/backup"},next:{title:"P\xe1gina Web",permalink:"/docs/es/settings/web"}},c={},d=[{value:"P\xe1gina Opciones red",id:"p\xe1gina-opciones-red",level:2},{value:"Red",id:"red",level:3},{value:"Publicar la base al inicio",id:"publicar-la-base-al-inicio",level:4},{value:"Nombre de publicaci\xf3n",id:"nombre-de-publicaci\xf3n",level:4},{value:"N\xfamero de puerto",id:"n\xfamero-de-puerto",level:4},{value:"4D Server y n\xfameros de puerto",id:"4d-server-y-n\xfameros-de-puerto",level:4},{value:"Autenticaci\xf3n del usuario con el servidor de dominio",id:"autenticaci\xf3n-del-usuario-con-el-servidor-de-dominio",level:4},{value:"Service Principal Name",id:"service-principal-name",level:4},{value:"Tiempo antes de desconexi\xf3n Cliente-Servidor",id:"tiempo-antes-de-desconexi\xf3n-cliente-servidor",level:4},{value:"Comunicaci\xf3n cliente-servidor",id:"comunicaci\xf3n-cliente-servidor",level:3},{value:"Registrar los clientes al Inicio para Execute On Client",id:"registrar-los-clientes-al-inicio-para-execute-on-client",level:4},{value:"Cifrar las comunicaciones Cliente-Servidor",id:"cifrar-las-comunicaciones-cliente-servidor",level:4},{value:"Actualizar la carpeta Resources durante una sesi\xf3n",id:"actualizar-la-carpeta-resources-durante-una-sesi\xf3n",level:4},{value:"P\xe1gina Configuraci\xf3n IP",id:"p\xe1gina-configuraci\xf3n-ip",level:2},{value:"Tabla de configuraci\xf3n Autorizar-Rechazar",id:"tabla-de-configuraci\xf3n-autorizar-rechazar",level:3}],u={toc:d};function p(e){var{components:a}=e,o=t(e,["components"]);return(0,r.kt)("wrapper",i({},u,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Las p\xe1ginas Cliente-Servidor agrupan los par\xe1metros relacionados con el uso de la base de datos en modo cliente-servidor. Naturalmente, estas propiedades s\xf3lo se tienen en cuenta cuando la base de datos se utiliza en modo remoto."),(0,r.kt)("h2",i({},{id:"p\xe1gina-opciones-red"}),"P\xe1gina Opciones red"),(0,r.kt)("h3",i({},{id:"red"}),"Red"),(0,r.kt)("h4",i({},{id:"publicar-la-base-al-inicio"}),"Publicar la base al inicio"),(0,r.kt)("p",null,"Esta opci\xf3n le permite indicar si la base de datos 4D Server aparecer\xe1 o no en la lista de bases de datos publicadas."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cuando esta opci\xf3n est\xe1 marcada (por defecto), la base de datos se hace p\xfablica y aparece en la lista de bases de datos publicadas (pesta\xf1a",(0,r.kt)("strong",{parentName:"li"},"Disponible"),")."),(0,r.kt)("li",{parentName:"ul"},"Cuando la opci\xf3n no est\xe1 marcada, la base de datos no se hace p\xfablica y no aparece en la lista de bases de datos publicadas. Para conectarse, los usuarios deben introducir manualmente la direcci\xf3n de la base de datos en la pesta\xf1a ",(0,r.kt)("strong",{parentName:"li"},"Personalizada")," de la caja de di\xe1logo de conexi\xf3n.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Si modifica este par\xe1metro, deber\xe1 reiniciar la base del servidor para que se tenga en cuenta.")),(0,r.kt)("h4",i({},{id:"nombre-de-publicaci\xf3n"}),"Nombre de publicaci\xf3n"),(0,r.kt)("p",null,"Esta opci\xf3n permite cambiar el nombre de publicaci\xf3n de una base de datos 4D Server, ",(0,r.kt)("em",{parentName:"p"},"es decir"),", el nombre que se muestra en la pesta\xf1a din\xe1mica ",(0,r.kt)("strong",{parentName:"p"},"Disponible")," de la caja de di\xe1logo de conexi\xf3n (ver la secci\xf3n ",(0,r.kt)("a",i({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Connecting-to-a-4D-Server-Database.300-5422486.en.html"}),"Conexi\xf3n a una base de datos 4D Server"),"). Por defecto, 4D Server utiliza el nombre del archivo de proyecto. Puede introducir cualquier nombre personalizado que desee."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Este par\xe1metro no se tiene en cuenta en las aplicaciones cliente-servidor personalizadas. En teor\xeda, la aplicaci\xf3n cliente se conecta directamente a la aplicaci\xf3n servidor, sin pasar por la caja de di\xe1logo de conexi\xf3n. Sin embargo, en caso de error, puede aparecer esta caja de di\xe1logo; en este caso, el nombre de publicaci\xf3n de la aplicaci\xf3n servidor es el nombre del proyecto compilado.")),(0,r.kt)("h4",i({},{id:"n\xfamero-de-puerto"}),"N\xfamero de puerto"),(0,r.kt)("p",null,"Esta opci\xf3n le permite cambiar el n\xfamero del puerto TCP en el que 4D Server publica la base de datos. Esta informaci\xf3n se almacena en el proyecto y en cada m\xe1quina cliente. Por defecto, el n\xfamero de puerto TCP utilizado por 4D Server y 4D en modo remoto es 19813."),(0,r.kt)("p",null,"La personalizaci\xf3n de este valor es necesaria cuando desea utilizar varias aplicaciones 4D en la misma m\xe1quina; en este caso, debe especificar un n\xfamero de puerto diferente para cada aplicaci\xf3n. Cuando se modifica este valor desde 4D Server o 4D, se transmite autom\xe1ticamente a todas las m\xe1quinas 4D conectadas a la base de datos."),(0,r.kt)("p",null,"Para actualizar las otras m\xe1quinas clientes que no est\xe9n conectadas, basta con introducir el nuevo n\xfamero de puerto (precedido de dos puntos) despu\xe9s de la direcci\xf3n IP del equipo servidor en la pesta\xf1a ",(0,r.kt)("strong",{parentName:"p"},"Personalizado")," de la caja de di\xe1logo de conexi\xf3n en el momento de la siguiente conexi\xf3n. Por ejemplo, si el nuevo n\xfamero de puerto es 19888:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(67169).Z,width:"466",height:"488"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"S\xf3lo las bases de datos publicadas en el mismo puerto que el definido en 4D client son visibles en la p\xe1gina de publicaci\xf3n din\xe1mica TCP/IP.")),(0,r.kt)("h4",i({},{id:"4d-server-y-n\xfameros-de-puerto"}),"4D Server y n\xfameros de puerto"),(0,r.kt)("p",null,"4D Server utiliza tres puertos TCP para las comunicaciones entre los servidores internos y los clientes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SQL Server"),': 19812 por defecto (puede modificarse a trav\xe9s de la p\xe1gina "SQL/Configuraci\xf3n" de las Preferencias).'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Servidor de aplicaciones"),': 19813 por defecto (puede modificarse a trav\xe9s de la p\xe1gina "Cliente-Servidor/Configuraci\xf3n" de las Preferencias, ver arriba).'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Servidor DB4D")," (servidor de base de datos): 19814 por defecto. This port number cannot be modified directly but it always consists of the application server port number + 1.\\\nWhen a 4D client connects to 4D Server, it uses the TCP port of the application server (19813 or the port indicated after the colon ':' in the IP address shown in the connection dialog box). Connection to other servers via their respective ports is then automatic; it is no longer necessary to specify them.\\\nNote that in the case of access via a router or a firewall, the three TCP ports must be opened explicitly.")),(0,r.kt)("h4",i({},{id:"autenticaci\xf3n-del-usuario-con-el-servidor-de-dominio"}),"Autenticaci\xf3n del usuario con el servidor de dominio"),(0,r.kt)("p",null,"Esta opci\xf3n le permite implementar las funcionalidades SSO (",(0,r.kt)("em",{parentName:"p"},"Single Sign On"),") en su base de datos 4D Server en Windows. Al marcar esta opci\xf3n, 4D se conecta de forma transparente al directorio Active del servidor de dominio Windows y obtiene los tokens de autenticaci\xf3n disponibles. Esta opci\xf3n se describe en la secci\xf3n ",(0,r.kt)("a",i({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Single-Sign-On-SSO-on-Windows.300-5422467.en.html"}),"Single Sign On (SSO) en Windows"),"."),(0,r.kt)("h4",i({},{id:"service-principal-name"}),"Service Principal Name"),(0,r.kt)("p",null,"Cuando la autenticaci\xf3n \xfanica (SSO) est\xe1 activa (ver arriba), debe llenar este campo si desea utilizar Kerberos como protocolo de autenticaci\xf3n. Esta opci\xf3n se describe en la secci\xf3n ",(0,r.kt)("a",i({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Single-Sign-On-SSO-on-Windows.300-5422467.en.html"}),"Single Sign On (SSO) en Windows"),"."),(0,r.kt)("h4",i({},{id:"tiempo-antes-de-desconexi\xf3n-cliente-servidor"}),"Tiempo antes de desconexi\xf3n Cliente-Servidor"),(0,r.kt)("p",null,"Este dispositivo se utiliza para definir el tiempo de espera (periodo de inactividad m\xe1s all\xe1 del cual se cierra la conexi\xf3n) entre 4D Server y las m\xe1quinas cliente que se conectan a \xe9l. La opci\xf3n ilimitada elimina el tiempo de espera. Cuando se selecciona esta opci\xf3n, se elimina el control de la actividad del cliente."),(0,r.kt)("p",null,"Cuando se selecciona un tiempo de espera, el servidor cerrar\xe1 la conexi\xf3n de un cliente si no recibe ninguna petici\xf3n de \xe9ste durante el tiempo l\xedmite especificado."),(0,r.kt)("h3",i({},{id:"comunicaci\xf3n-cliente-servidor"}),"Comunicaci\xf3n cliente-servidor"),(0,r.kt)("h4",i({},{id:"registrar-los-clientes-al-inicio-para-execute-on-client"}),"Registrar los clientes al Inicio para Execute On Client"),(0,r.kt)("p",null,"Cuando esta opci\xf3n est\xe1 marcada, todas las m\xe1quinas remotas 4D que se conectan a la base de datos pueden ejecutar m\xe9todos remotamente. Este mecanismo se detalla en la secci\xf3n ",(0,r.kt)("a",i({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Stored-procedures-on-client-machines.300-5422461.en.html"}),"Procedimientos almacenados en las m\xe1quinas cliente"),"."),(0,r.kt)("h4",i({},{id:"cifrar-las-comunicaciones-cliente-servidor"}),"Cifrar las comunicaciones Cliente-Servidor"),(0,r.kt)("p",null,"Esta opci\xf3n permite activar el modo seguro para las comunicaciones entre la m\xe1quina servidor y las m\xe1quinas remotas 4D. Esta opci\xf3n se detalla en la secci\xf3n ",(0,r.kt)("a",i({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Encrypting-ClientServer-Connections.300-5422465.en.html"}),"Cifrar las de conexiones cliente/servidor"),"."),(0,r.kt)("h4",i({},{id:"actualizar-la-carpeta-resources-durante-una-sesi\xf3n"}),"Actualizar la carpeta Resources durante una sesi\xf3n"),(0,r.kt)("p",null,"Este par\xe1metro puede utilizarse para definir globalmente el modo de actualizaci\xf3n de la instancia local de la carpeta ",(0,r.kt)("strong",{parentName:"p"},"Resources")," en los equipos 4D conectados cuando se modifica la carpeta ",(0,r.kt)("strong",{parentName:"p"},"Resources")," de la base de datos durante la sesi\xf3n (la carpeta ",(0,r.kt)("strong",{parentName:"p"},"Resources")," se sincroniza autom\xe1ticamente en el equipo remoto cada vez que se abre una sesi\xf3n). Hay tres par\xe1metros disponibles:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Nunca"),": la carpeta local ",(0,r.kt)("strong",{parentName:"li"},"Resources")," no se actualiza durante la sesi\xf3n. La notificaci\xf3n enviada por el servidor es ignorada. La carpeta ",(0,r.kt)("strong",{parentName:"li"},"Resources")," local puede actualizarse manualmente mediante el comando ",(0,r.kt)("strong",{parentName:"li"},"Update Local Resources")," del men\xfa de acci\xf3n (ver ",(0,r.kt)("a",i({parentName:"li"},{href:"https://doc.4d.com/4Dv19/4D/19/Using-the-Resources-explorer.300-5416788.en.html"}),"Uso del explorador de recursos"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Siempre"),": la sincronizaci\xf3n de la carpeta local ",(0,r.kt)("strong",{parentName:"li"},"Resources")," se realiza autom\xe1ticamente durante la sesi\xf3n cada vez que el servidor env\xeda una notificaci\xf3n."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Preguntar"),": cuando la notificaci\xf3n es enviada por el servidor, se muestra una caja de di\xe1logo en las m\xe1quinas cliente, indicando la modificaci\xf3n. A continuaci\xf3n, el usuario puede aceptar o rechazar la sincronizaci\xf3n de la carpeta local ",(0,r.kt)("strong",{parentName:"li"},"Resources"),".\\\nLa carpeta ",(0,r.kt)("strong",{parentName:"li"},"Resources")," centraliza los archivos personalizados necesarios para la interfaz de la base (archivos de traducci\xf3n, im\xe1genes, etc.). Se pueden utilizar mecanismos autom\xe1ticos o manuales para notificar a cada cliente cu\xe1ndo se ha modificado el contenido de esta carpeta. Para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,r.kt)("a",i({parentName:"li"},{href:"https://doc.4d.com/4Dv19/4D/19/Managing-the-Resources-folder.300-5422466.en.html"}),"Gesti\xf3n de la carpeta Resources"),".")),(0,r.kt)("h2",i({},{id:"p\xe1gina-configuraci\xf3n-ip"}),"P\xe1gina Configuraci\xf3n IP"),(0,r.kt)("h3",i({},{id:"tabla-de-configuraci\xf3n-autorizar-rechazar"}),"Tabla de configuraci\xf3n Autorizar-Rechazar"),(0,r.kt)("p",null,"Esta tabla permite definir las reglas de control de acceso a la base en funci\xf3n de las direcciones IP de las m\xe1quinas 4D remotas. Esta opci\xf3n permite reforzar la seguridad, por ejemplo, para aplicaciones estrat\xe9gicas."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Esta tabla de configuraci\xf3n no controla las conexiones web.")),(0,r.kt)("p",null,"El funcionamiento de la tabla de configuraci\xf3n es el siguiente:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'La columna "Autorizar-Rechazar" permite seleccionar el tipo de regla a aplicar (Autorizar-Rechazar) mediante un men\xfa emergente. Para a\xf1adir una regla, haga clic en el bot\xf3n A\xf1adir. Aparece una nueva l\xednea en la tabla. El bot\xf3n ',(0,r.kt)("strong",{parentName:"li"},"Borrar")," permite eliminar la l\xednea actual."),(0,r.kt)("li",{parentName:"ul"},'La columna "Direcci\xf3n IP" permite designar las direcciones IP afectadas por la regla. Para especificar una direcci\xf3n, haga clic en la columna e introduzca la direcci\xf3n de la siguiente forma: 123.45.67.89 (formato IPv4) o 2001:0DB8:0000:85A3:0000:0000:AC1F:8001 (formato IPv6). Puede utilizar un caracter ',(0,r.kt)("em",{parentName:"li"},' (asterisco) para especificar las direcciones del tipo "comienza por". Por ejemplo, 192.168.')," indica todas las direcciones que empiezan por 192.168."),(0,r.kt)("li",{parentName:"ul"},"La aplicaci\xf3n de las reglas se basa en el orden de visualizaci\xf3n de la tabla. Si dos reglas son contradictorias, se da prioridad a la regla situada m\xe1s arriba en la tabla. Puede reordenar las l\xedneas modificando la ordenaci\xf3n actual (haga clic en el encabezado de la columna para alternar la direcci\xf3n de la ordenaci\xf3n). Tambi\xe9n puede mover las l\xedneas utilizando arrastrar y soltar."),(0,r.kt)("li",{parentName:"ul"},"Por razones de seguridad, s\xf3lo las direcciones que realmente coincidan con una regla podr\xe1n conectarse. En otras palabras, si la tabla s\xf3lo contiene una o m\xe1s reglas de tipo Rechazar, todas las direcciones ser\xe1n rechazadas porque ninguna coincidir\xe1 con al menos una regla. Si desea denegar s\xf3lo determinadas direcciones (y permitir otras), a\xf1ada una regla Autorizar* al final de la tabla. Por ejemplo:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Denegar 192.168.* (denegar todas las direcciones que empiecen por 192.168)"),(0,r.kt)("li",{parentName:"ul"},"Autorizar * (y permitir todas las dem\xe1s direcciones)")))),(0,r.kt)("p",null,"Por defecto, 4D Server no aplica ninguna restricci\xf3n de conexi\xf3n: la primera l\xednea de la tabla contiene la etiqueta Autorizar y el caracter * (todas las direcciones)."))}p.isMDXComponent=!0},67169:(e,a,n)=>{n.d(a,{Z:()=>r});const r=n.p+"assets/images/client-server-network-2b3907f0e2e18d3fb768dafd1606ab20.png"}}]);