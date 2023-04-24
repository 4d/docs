"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70502],{3905:(e,a,n)=>{n.d(a,{Zo:()=>s,kt:()=>m});var t=n(67294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=t.createContext({}),d=function(e){var a=t.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},s=function(e){var a=d(e.components);return t.createElement(c.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,b=u["".concat(c,".").concat(m)]||u[m]||p[m]||r;return n?t.createElement(b,o(o({ref:a},s),{},{components:n})):t.createElement(b,o({ref:a},s))}));function m(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},23232:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});n(67294);var t=n(3905);function i(){return i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},i.apply(this,arguments)}function r(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const o={id:"webAdmin",title:"WebAdmin"},l=void 0,c={unversionedId:"Admin/webAdmin",id:"version-19-R8/Admin/webAdmin",title:"WebAdmin",description:"Un componente de servidor web integrado, llamado WebAdmin, es utilizado por 4D y 4D Server para dar un acceso web seguro a funciones de gesti\xf3n espec\xedficas como el Explorador de datos. Puede conectarse local o remotamente a este servidor web desde un navegador o cualquier aplicaci\xf3n web y acceder a la aplicaci\xf3n 4D asociada.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R8/Admin/webAdmin.md",sourceDirName:"Admin",slug:"/Admin/webAdmin",permalink:"/docs/es/19-R8/Admin/webAdmin",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2FwebAdmin.md%20(19-R8)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R8",frontMatter:{id:"webAdmin",title:"WebAdmin"},sidebar:"docs",previous:{title:"Administraci\xf3n desde m\xe1quinas remotas",permalink:"/docs/es/19-R8/ServerWindow/remote-admin"},next:{title:"Explorador de datos Web",permalink:"/docs/es/19-R8/Admin/dataExplorer"}},d={},s=[{value:"Iniciar el servidor web WebAdmin",id:"iniciar-el-servidor-web-webadmin",level:2},{value:"Lanzamiento al inicio",id:"lanzamiento-al-inicio",level:3},{value:"Iniciar y detener",id:"iniciar-y-detener",level:3},{value:"Propiedades WebAdmin",id:"propiedades-webadmin",level:2},{value:"Caja de di\xe1logo de par\xe1metros",id:"caja-de-di\xe1logo-de-par\xe1metros",level:3},{value:"Inicio autom\xe1tico de la administraci\xf3n del servidor web",id:"inicio-autom\xe1tico-de-la-administraci\xf3n-del-servidor-web",level:4},{value:"Conexiones HTTP en localhost aceptadas",id:"conexiones-http-en-localhost-aceptadas",level:4},{value:"Puerto HTTP",id:"puerto-http",level:4},{value:"Aceptar HTTPS",id:"aceptar-https",level:4},{value:"Puerto HTTPS",id:"puerto-https",level:4},{value:"Ruta de la carpeta de certificados",id:"ruta-de-la-carpeta-de-certificados",level:4},{value:"Modo de registro de depuraci\xf3n",id:"modo-de-registro-de-depuraci\xf3n",level:4},{value:"Llave de acceso",id:"llave-de-acceso",level:4},{value:"Configuraci\xf3n de WebAdmin sin interfaz",id:"configuraci\xf3n-de-webadmin-sin-interfaz",level:2},{value:"Autenticaci\xf3n y sesi\xf3n",id:"autenticaci\xf3n-y-sesi\xf3n",level:2}],p={toc:s};function u(e){var{components:a}=e,o=r(e,["components"]);return(0,t.kt)("wrapper",i({},p,o,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Un componente de servidor web integrado, llamado ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin"),", es utilizado por 4D y 4D Server para dar un acceso web seguro a funciones de gesti\xf3n espec\xedficas como el ",(0,t.kt)("a",i({parentName:"p"},{href:"/docs/es/19-R8/Admin/dataExplorer"}),"Explorador de datos"),". Puede conectarse local o remotamente a este servidor web desde un navegador o cualquier aplicaci\xf3n web y acceder a la aplicaci\xf3n 4D asociada."),(0,t.kt)("p",null,'El WebAdmin se encarga de la autenticaci\xf3n de los usuarios con privilegios "WebAdmin", para que puedan abrir sesiones de administraci\xf3n y acceder a las interfaces dedicadas.'),(0,t.kt)("p",null,"Esta funcionalidad se puede utilizar en aplicaciones 4D que se ejecutan con o sin interfaces."),(0,t.kt)("h2",i({},{id:"iniciar-el-servidor-web-webadmin"}),"Iniciar el servidor web WebAdmin"),(0,t.kt)("p",null,"Por defecto, el servidor web ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin")," no se lanza. Es necesario configurar el lanzamiento al inicio, o (en las versiones con interfaz) lanzarlo manualmente mediante una opci\xf3n de men\xfa."),(0,t.kt)("h3",i({},{id:"lanzamiento-al-inicio"}),"Lanzamiento al inicio"),(0,t.kt)("p",null,"Puede configurar el servidor web ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin")," para que se lance al inicio de la aplicaci\xf3n 4D o 4D Server (antes de que se cargue cualquier proyecto)."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Si utiliza una aplicaci\xf3n 4D con interfaz, seleccione la opci\xf3n de men\xfa ",(0,t.kt)("strong",{parentName:"li"},"Archivo > Administraci\xf3n web > Propiedades..."),".")),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"alt-text",src:n(11438).Z,width:"470",height:"294"})),(0,t.kt)("p",null,"Seleccione la opci\xf3n ",(0,t.kt)("strong",{parentName:"p"},"Inicio autom\xe1tico de la administraci\xf3n del servidor web")," en la caja de di\xe1logo de configuraci\xf3n:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"alt-text",src:n(3544).Z,width:"702",height:"205"})),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Tanto si utiliza la aplicaci\xf3n 4D con o sin interfaz, puede habilitar el modo de inicio autom\xe1tico utilizando el siguiente argumento ",(0,t.kt)("em",{parentName:"li"},"Interfaz de l\xednea de comandos"),":")),(0,t.kt)("pre",null,(0,t.kt)("code",i({parentName:"pre"},{}),"open ~/Desktop/4D.app --webadmin-auto-start true\n")),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Si el puerto TCP utilizado por el servidor web ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin")," (",(0,t.kt)("a",i({parentName:"p"},{href:"#https-port"}),"HTTPS")," o ",(0,t.kt)("a",i({parentName:"p"},{href:"#http-port"}),"HTTP"),", seg\xfan la configuraci\xf3n) no est\xe1 disponible al inicio, 4D intentar\xe1 sucesivamente los 20 puertos siguientes, y utilizar\xe1 el primero que est\xe9 disponible. Si no hay ning\xfan puerto disponible, el servidor web no se lanza y se muestra un error o para las aplicaciones sin interfaz, aparece en la consola.")),(0,t.kt)("h3",i({},{id:"iniciar-y-detener"}),"Iniciar y detener"),(0,t.kt)("p",null,"Si utiliza una aplicaci\xf3n 4D con interfaz, puede iniciar o detener el servidor web ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin")," de su proyecto en cualquier momento:"),(0,t.kt)("p",null,"Seleccione la opci\xf3n de men\xfa ",(0,t.kt)("strong",{parentName:"p"},"Archivo > Administraci\xf3n web > Iniciar el servidor"),"."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"alt-text",src:n(67278).Z,width:"473",height:"354"})),(0,t.kt)("p",null,"El elemento de men\xfa se convierte en ",(0,t.kt)("strong",{parentName:"p"},"Detener el servidor")," cuando se lanza el servidor; seleccione ",(0,t.kt)("strong",{parentName:"p"},"Detener el servidor")," para detener el servidor web ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin"),"."),(0,t.kt)("h2",i({},{id:"propiedades-webadmin"}),"Propiedades WebAdmin"),(0,t.kt)("p",null,"La configuraci\xf3n del componente ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin")," es obligatoria, en particular para definir la",(0,t.kt)("a",i({parentName:"p"},{href:"#access-key"}),(0,t.kt)("strong",{parentName:"a"}," clave de acceso")),". Por defecto, cuando la clave de acceso no est\xe1 configurada, no se permite el acceso a trav\xe9s de una URL."),(0,t.kt)("p",null,"Puede configurar el componente ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin")," en la ",(0,t.kt)("a",i({parentName:"p"},{href:"#settings-dialog-box"}),"caja de di\xe1logo Configuraci\xf3n de la administraci\xf3n web")," (ver m\xe1s abajo)."),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Si utiliza una aplicaci\xf3n 4D sin interfaz, puede utilizar los ",(0,t.kt)("a",i({parentName:"p"},{href:"#webadmin-headless-configuration"}),"argumentos de ",(0,t.kt)("em",{parentName:"a"},"la interfaz de l\xednea de comandos"))," para definir la configuraci\xf3n b\xe1sica. Tendr\xe1 que personalizar el archivo de configuraci\xf3n para definir los par\xe1metros avanzados.")),(0,t.kt)("h3",i({},{id:"caja-de-di\xe1logo-de-par\xe1metros"}),"Caja de di\xe1logo de par\xe1metros"),(0,t.kt)("p",null,"Para abrir la caja de di\xe1logo de configuraci\xf3n de administraci\xf3n web, seleccione ",(0,t.kt)("strong",{parentName:"p"},"Archivo > Administraci\xf3n Web > Configuraci\xf3n..."),"."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"alt-text",src:n(11438).Z,width:"470",height:"294"})),(0,t.kt)("p",null,"Se muestra la siguiente caja de di\xe1logo:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"alt-text",src:n(79995).Z,width:"702",height:"462"})),(0,t.kt)("h4",i({},{id:"inicio-autom\xe1tico-de-la-administraci\xf3n-del-servidor-web"}),"Inicio autom\xe1tico de la administraci\xf3n del servidor web"),(0,t.kt)("p",null,"Marque esta opci\xf3n para lanzar el servidor web ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin")," autom\xe1ticamente cuando se inicie la aplicaci\xf3n 4D o 4D Server (ver ",(0,t.kt)("a",i({parentName:"p"},{href:"#lanzamiento-al-inicio"}),"arriba"),"). Por defecto, esta opci\xf3n no est\xe1 seleccionada."),(0,t.kt)("h4",i({},{id:"conexiones-http-en-localhost-aceptadas"}),"Conexiones HTTP en localhost aceptadas"),(0,t.kt)("p",null,"Cuando esta opci\xf3n est\xe1 seleccionada, podr\xe1 conectarse al servidor web ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin")," a trav\xe9s de HTTP en la misma m\xe1quina que la aplicaci\xf3n 4D. Por defecto, esta opci\xf3n est\xe1 seleccionada."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Notas:")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Nunca se aceptan conexiones con HTTP que no sean localhost."),(0,t.kt)("li",{parentName:"ul"},"Incluso si esta opci\xf3n est\xe1 activada, cuando ",(0,t.kt)("a",i({parentName:"li"},{href:"#aceptar-https"}),"HTTPS aceptada")," est\xe1 activada y la configuraci\xf3n TLS es v\xe1lida, las conexiones localhost utilizan HTTPS.")),(0,t.kt)("h4",i({},{id:"puerto-http"}),"Puerto HTTP"),(0,t.kt)("p",null,"N\xfamero de puerto a utilizar para las conexiones al servidor web ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin")," a trav\xe9s de HTTP cuando la opci\xf3n ",(0,t.kt)("strong",{parentName:"p"},"Conexiones HTTP en localhost aceptadas")," est\xe1 marcada. El valor por defecto es 7080."),(0,t.kt)("h4",i({},{id:"aceptar-https"}),"Aceptar HTTPS"),(0,t.kt)("p",null,"Cuando esta opci\xf3n est\xe1 seleccionada, podr\xe1 conectarse al servidor web ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin")," a trav\xe9s de HTTPS. Por defecto, esta opci\xf3n est\xe1 seleccionada."),(0,t.kt)("h4",i({},{id:"puerto-https"}),"Puerto HTTPS"),(0,t.kt)("p",null,"N\xfamero de puerto a utilizar para las conexiones al servidor web ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin")," a trav\xe9s de HTTPS cuando la opci\xf3n ",(0,t.kt)("strong",{parentName:"p"},"HTTPS aceptada")," est\xe1 marcada. El valor por defecto es 7443."),(0,t.kt)("h4",i({},{id:"ruta-de-la-carpeta-de-certificados"}),"Ruta de la carpeta de certificados"),(0,t.kt)("p",null,"Ruta de la carpeta donde se encuentran los archivos del certificado TLS. Por defecto, la ruta de la carpeta de certificados est\xe1 vac\xeda y 4D o 4D Server utiliza los archivos de certificados contenidos en la aplicaci\xf3n 4D (los certificados personalizados deben almacenarse junto a la carpeta de proyecto)."),(0,t.kt)("h4",i({},{id:"modo-de-registro-de-depuraci\xf3n"}),"Modo de registro de depuraci\xf3n"),(0,t.kt)("p",null,"Estado o formato del archivo de registro de peticiones HTTP (HTTPDebugLog_",(0,t.kt)("em",{parentName:"p"},"nn"),'.txt, almacenado en la carpeta "Logs" de la aplicaci\xf3n -- ',(0,t.kt)("em",{parentName:"p"},"nn")," es el n\xfamero de archivo). Las siguientes opciones est\xe1n disponibles:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Desactivado")," (por defecto)"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Con todas las partes del cuerpo")," - habilitado con partes del cuerpo de las peticiones y respuestas"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Sin las partes del cuerpo")," - activado sin partes del cuerpo (se indica el tama\xf1o del cuerpo)"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Con los cuerpos de las peticiones")," - activado con la partes del cuerpo \xfanicamente en las peticiones"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Con la respuesta cuerpos")," - activado con la partes del cuerpo \xfanicamente en las respuestas")),(0,t.kt)("h4",i({},{id:"llave-de-acceso"}),"Llave de acceso"),(0,t.kt)("p",null,"La configuraci\xf3n de una llave de acceso es obligatoria para desbloquear el acceso al servidor web ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin")," a trav\xe9s de una URL (el acceso a trav\xe9s de un comando del men\xfa 4D no requiere una llave de acceso). Cuando no se define ninguna llave de acceso, no se permite que ning\xfan cliente web se conecte a trav\xe9s de una URL a una interfaz de administraci\xf3n web como la p\xe1gina ",(0,t.kt)("a",i({parentName:"p"},{href:"/docs/es/19-R8/Admin/dataExplorer"}),"Explorador de datos"),". Se devuelve una p\xe1gina de error en caso de solicitud de conexi\xf3n:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"alt-text",src:n(54069).Z,width:"193",height:"126"})),(0,t.kt)("p",null,"Una llave de acceso es similar a una contrase\xf1a pero no est\xe1 asociada a un inicio de sesi\xf3n."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Para definir una nueva llave de acceso: haga clic en el bot\xf3n ",(0,t.kt)("strong",{parentName:"li"},"Definir"),", introduzca la cadena de la llave de acceso en la caja de di\xe1logo y haga clic en ",(0,t.kt)("strong",{parentName:"li"},"OK"),". La etiqueta del bot\xf3n se convierte en ",(0,t.kt)("strong",{parentName:"li"},"Modificar"),"."),(0,t.kt)("li",{parentName:"ul"},"Para modificar la llave de acceso: haga clic en el bot\xf3n ",(0,t.kt)("strong",{parentName:"li"},"Modificar"),", introduzca la nueva cadena de la llave de acceso en la caja de di\xe1logo y haga clic en ",(0,t.kt)("strong",{parentName:"li"},"OK"),"."),(0,t.kt)("li",{parentName:"ul"},"Para eliminar la llave de acceso: haga clic en el bot\xf3n ",(0,t.kt)("strong",{parentName:"li"},"Modificar"),", deje vac\xeda el \xe1rea de la llave de acceso y haga clic en ",(0,t.kt)("strong",{parentName:"li"},"OK"),".")),(0,t.kt)("h2",i({},{id:"configuraci\xf3n-de-webadmin-sin-interfaz"}),"Configuraci\xf3n de WebAdmin sin interfaz"),(0,t.kt)("p",null,"Todos ",(0,t.kt)("a",i({parentName:"p"},{href:"#webadmin-settings"}),"los par\xe1metros de WebAdmin")," se almacenan en el archivo ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin.4DSettings"),". Hay un archivo ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin.4DSettings")," por defecto por cada aplicaci\xf3n 4D y 4D Server, por lo que es posible desplegar varias aplicaciones en la misma m\xe1quina local."),(0,t.kt)("p",null,"Cuando se ejecuta una aplicaci\xf3n 4D o 4D Server sin interfaz, se puede configurar y utilizar el archivo ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin.4DSettings")," por defecto, o designar un archivo ",(0,t.kt)("inlineCode",{parentName:"p"},".4DSettings")," personalizado."),(0,t.kt)("p",null,"Para establecer el contenido del archivo, puede utilizar la ",(0,t.kt)("a",i({parentName:"p"},{href:"#settings-dialog-box"}),"ventana de par\xe1metros WebAdmin")," de la aplicaci\xf3n 4D con una interfaz y ejecutarla luego sin interfaz. Se utiliza entonces el archivo por defecto ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin.4DSettings"),"."),(0,t.kt)("p",null,"O bien, puede definir un archivo personalizado ",(0,t.kt)("inlineCode",{parentName:"p"},".4DSettings")," (formato xml) y utilizarlo en lugar del archivo predeterminado. En la ",(0,t.kt)("a",i({parentName:"p"},{href:"/docs/es/19-R8/Admin/cli"}),"Interfaz de l\xednea de comandos")," hay varios argumentos dedicados para soportar esta funcionalidad."),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"La clave de acceso no se almacena de manera transparente en el archivo ",(0,t.kt)("inlineCode",{parentName:"p"},".4DSettings"),".")),(0,t.kt)("p",null,"Ejemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",i({parentName:"pre"},{}),'"%HOMEPATH%\\Desktop\\4D Server.exe" MyApp.4DLink --webadmin-access-key \n    "my Fabulous AccessKey" --webadmin-auto-start true   \n    --webadmin-store-settings\n\n')),(0,t.kt)("h2",i({},{id:"autenticaci\xf3n-y-sesi\xf3n"}),"Autenticaci\xf3n y sesi\xf3n"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Cuando se accede a una p\xe1gina de gesti\xf3n web introduciendo una URL y sin identificaci\xf3n previa, se requiere una autenticaci\xf3n. El usuario debe introducir la ",(0,t.kt)("a",i({parentName:"p"},{href:"#access-key"}),"llave-de-acceso")," en una ventana de autenticaci\xf3n. Si la llave de acceso no fue definida en la configuraci\xf3n de ",(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin"),", no es posible el acceso v\xeda URL.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Cuando se accede a una p\xe1gina de gesti\xf3n web directamente desde un elemento de men\xfa de 4D o 4D Server (como ",(0,t.kt)("strong",{parentName:"p"},"Registros > Explorador de datos")," o ",(0,t.kt)("strong",{parentName:"p"},"Ventana > Explorador de datos")," (4D Server)), el acceso se concede sin autenticaci\xf3n, el usuario se autentifica autom\xe1ticamente."))),(0,t.kt)("p",null,"Una vez concedido el acceso, se crea una ",(0,t.kt)("a",i({parentName:"p"},{href:"/docs/es/19-R8/WebServer/sessions"}),"sesi\xf3n web"),' con el privilegio "WebAdmin" en la aplicaci\xf3n 4D. Mientras la sesi\xf3n actual tenga el privilegio "WebAdmin", el componente ',(0,t.kt)("inlineCode",{parentName:"p"},"WebAdmin")," entrega las p\xe1ginas solicitadas."))}u.isMDXComponent=!0},54069:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/accessKey-30f179ff95de611714487b2467b3bed6.png"},11438:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/waMenu1-8cc55577b6eb6a9cbe4ddd02b766d0c8.png"},67278:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/waMenu2-972bfa6edeb61987599802e7665b50e9.png"},3544:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/waSettings-061bfd4438352b9f6e272f496fe01ac4.png"},79995:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/waSettings2-ec384a33ca25a5cd6198e8da121bbc75.png"}}]);