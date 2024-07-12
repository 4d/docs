/*! For license information please see df81bc4e.34e814e7.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[85688],{980896:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var i=a(474848),s=a(28453);const c={id:"webAdmin",title:"WebAdmin"},d=void 0,r={id:"Admin/webAdmin",title:"WebAdmin",description:"Un componente de servidor web integrado, llamado WebAdmin, es utilizado por 4D y 4D Server para dar un acceso web seguro a funciones de gesti\xf3n espec\xedficas como el Explorador de datos. Puede conectarse local o remotamente a este servidor web desde un navegador o cualquier aplicaci\xf3n web y acceder a la aplicaci\xf3n 4D asociada.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/Admin/webAdmin.md",sourceDirName:"Admin",slug:"/Admin/webAdmin",permalink:"/docs/es/Admin/webAdmin",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2FwebAdmin.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"webAdmin",title:"WebAdmin"},sidebar:"docs",previous:{title:"Web Administration",permalink:"/docs/es/category/web-administration"},next:{title:"Explorador de datos",permalink:"/docs/es/Admin/dataExplorer"}},o={},l=[{value:"Iniciar el servidor web WebAdmin",id:"iniciar-el-servidor-web-webadmin",level:2},{value:"Lanzamiento al inicio",id:"lanzamiento-al-inicio",level:3},{value:"Iniciar y detener",id:"iniciar-y-detener",level:3},{value:"Propiedades WebAdmin",id:"propiedades-webadmin",level:2},{value:"Caja de di\xe1logo de par\xe1metros",id:"caja-de-di\xe1logo-de-par\xe1metros",level:3},{value:"Iniciar el servidor WebAdmin al inicio",id:"iniciar-el-servidor-webadmin-al-inicio",level:4},{value:"Conexiones HTTP en localhost aceptadas",id:"conexiones-http-en-localhost-aceptadas",level:4},{value:"Puerto HTTP",id:"puerto-http",level:4},{value:"Aceptar HTTPS",id:"aceptar-https",level:4},{value:"Puerto HTTPS",id:"puerto-https",level:4},{value:"Ruta de la carpeta de certificados",id:"ruta-de-la-carpeta-de-certificados",level:4},{value:"Modo de registro de depuraci\xf3n",id:"modo-de-registro-de-depuraci\xf3n",level:4},{value:"Llave de acceso",id:"llave-de-acceso",level:4},{value:"Activar el acceso a Qodly Studio",id:"activar-el-acceso-a-qodly-studio",level:4},{value:"Configuraci\xf3n de WebAdmin sin interfaz",id:"configuraci\xf3n-de-webadmin-sin-interfaz",level:2},{value:"Autenticaci\xf3n y sesi\xf3n",id:"autenticaci\xf3n-y-sesi\xf3n",level:2}];function t(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Un componente de servidor web integrado, llamado ",(0,i.jsx)(n.code,{children:"WebAdmin"}),", es utilizado por 4D y 4D Server para dar un acceso web seguro a funciones de gesti\xf3n espec\xedficas como el ",(0,i.jsx)(n.a,{href:"/docs/es/Admin/dataExplorer",children:"Explorador de datos"}),". Puede conectarse local o remotamente a este servidor web desde un navegador o cualquier aplicaci\xf3n web y acceder a la aplicaci\xf3n 4D asociada."]}),"\n",(0,i.jsx)(n.p,{children:'El WebAdmin se encarga de la autenticaci\xf3n de los usuarios con privilegios "WebAdmin", para que puedan abrir sesiones de administraci\xf3n y acceder a las interfaces dedicadas.'}),"\n",(0,i.jsx)(n.p,{children:"Esta funcionalidad se puede utilizar en aplicaciones 4D que se ejecutan con o sin interfaces."}),"\n",(0,i.jsx)(n.h2,{id:"iniciar-el-servidor-web-webadmin",children:"Iniciar el servidor web WebAdmin"}),"\n",(0,i.jsxs)(n.p,{children:["Por defecto, el\nservidor web ",(0,i.jsx)(n.code,{children:"WebAdmin"})," no se lanza. Es necesario configurar el lanzamiento al inicio, o (en las versiones con interfaz) lanzarlo manualmente mediante una opci\xf3n de men\xfa."]}),"\n",(0,i.jsx)(n.h3,{id:"lanzamiento-al-inicio",children:"Lanzamiento al inicio"}),"\n",(0,i.jsxs)(n.p,{children:["Puede configurar el servidor web ",(0,i.jsx)(n.code,{children:"WebAdmin"})," para que se lance al inicio de la aplicaci\xf3n 4D o 4D Server (antes de que se cargue cualquier proyecto)."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Si utiliza una aplicaci\xf3n 4D con interfaz, seleccione la opci\xf3n de men\xfa ",(0,i.jsx)(n.strong,{children:"Archivo > Administraci\xf3n web > Par\xe1metros...."}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt-text",src:a(76954).A+"",width:"470",height:"294"})}),"\n",(0,i.jsxs)(n.p,{children:["Seleccione la opci\xf3n ",(0,i.jsx)(n.strong,{children:"Iniciar servidor WebAdmin al inicio"})," en la caja de di\xe1logo de par\xe1metros:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt-text",src:a(821565).A+"",width:"702",height:"205"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Tanto si utiliza la aplicaci\xf3n 4D con o sin interfaz, puede habilitar el modo de inicio autom\xe1tico utilizando el siguiente argumento ",(0,i.jsx)(n.em,{children:"Interfaz de l\xednea de comandos"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"open ~/Desktop/4D.app --webadmin-auto-start true\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Si el puerto TCP utilizado por el servidor web ",(0,i.jsx)(n.code,{children:"WebAdmin"})," (",(0,i.jsx)(n.a,{href:"#https-port",children:"HTTPS"})," o ",(0,i.jsx)(n.a,{href:"#http-port",children:"HTTP"}),", seg\xfan la configuraci\xf3n) no est\xe1 disponible al inicio, 4D intentar\xe1 sucesivamente los 20 puertos siguientes, y utilizar\xe1 el primero que est\xe9 disponible. Si no hay ning\xfan puerto disponible, el servidor web no se lanza y se muestra un error o para las aplicaciones sin interfaz, aparece en la consola."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"iniciar-y-detener",children:"Iniciar y detener"}),"\n",(0,i.jsxs)(n.p,{children:["Si utiliza una aplicaci\xf3n 4D con interfaz, puede iniciar o detener el servidor web ",(0,i.jsx)(n.code,{children:"WebAdmin"})," de su proyecto en cualquier momento:"]}),"\n",(0,i.jsxs)(n.p,{children:["Seleccione la opci\xf3n de men\xfa ",(0,i.jsx)(n.strong,{children:"Archivo > Administraci\xf3n web > Iniciar el servidor"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt-text",src:a(685265).A+"",width:"473",height:"354"})}),"\n",(0,i.jsxs)(n.p,{children:["El elemento de men\xfa se convierte en ",(0,i.jsx)(n.strong,{children:"Detener el servidor"})," cuando se lanza el servidor; seleccione ",(0,i.jsx)(n.strong,{children:"Detener el servidor"})," para detener el servidor web ",(0,i.jsx)(n.code,{children:"WebAdmin"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"propiedades-webadmin",children:"Propiedades WebAdmin"}),"\n",(0,i.jsxs)(n.p,{children:["La configuraci\xf3n del componente ",(0,i.jsx)(n.code,{children:"WebAdmin"})," es obligatoria, en particular para definir la ",(0,i.jsx)(n.a,{href:"#access-key",children:(0,i.jsx)(n.strong,{children:"llave de acceso"})}),". Por defecto, cuando la clave de acceso no est\xe1 configurada, no se permite el acceso a trav\xe9s de una URL."]}),"\n",(0,i.jsxs)(n.p,{children:["Puede configurar el componente ",(0,i.jsx)(n.code,{children:"WebAdmin"})," utilizando la ",(0,i.jsx)(n.a,{href:"#settings-dialog-box",children:"caja de di\xe1logo Par\xe1metros de la administraci\xf3n web"})," (ver abajo)."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Si utiliza una aplicaci\xf3n 4D sin interfaz, puede utilizar los ",(0,i.jsxs)(n.a,{href:"#webadmin-headless-configuration",children:["argumentos de la ",(0,i.jsx)(n.em,{children:"Interfaz de L\xednea de Comandos"})]})," para definir la configuraci\xf3n b\xe1sica. Tendr\xe1 que personalizar el archivo de configuraci\xf3n para definir los par\xe1metros avanzados."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"caja-de-di\xe1logo-de-par\xe1metros",children:"Caja de di\xe1logo de par\xe1metros"}),"\n",(0,i.jsxs)(n.p,{children:["Para abrir la caja de di\xe1logo de configuraci\xf3n de administraci\xf3n web, seleccione ",(0,i.jsx)(n.strong,{children:"Archivo > Administraci\xf3n Web > Configuraci\xf3n...."}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt-text",src:a(76954).A+"",width:"470",height:"294"})}),"\n",(0,i.jsx)(n.p,{children:"Se muestra la siguiente caja de di\xe1logo:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt-text",src:a(509083).A+"",width:"702",height:"462"})}),"\n",(0,i.jsx)(n.h4,{id:"iniciar-el-servidor-webadmin-al-inicio",children:"Iniciar el servidor WebAdmin al inicio"}),"\n",(0,i.jsxs)(n.p,{children:["Marque esta opci\xf3n si desea que el servidor web ",(0,i.jsx)(n.code,{children:"WebAdmin"})," se lance autom\xe1ticamente cuando la aplicaci\xf3n 4D o 4D Server se inicie (",(0,i.jsx)(n.a,{href:"#lanzamiento-al-inicio",children:"ver arriba"}),"). Por defecto, esta opci\xf3n no est\xe1 seleccionada."]}),"\n",(0,i.jsx)(n.h4,{id:"conexiones-http-en-localhost-aceptadas",children:"Conexiones HTTP en localhost aceptadas"}),"\n",(0,i.jsxs)(n.p,{children:["Cuando esta opci\xf3n est\xe1 seleccionada, podr\xe1 conectarse al servidor web ",(0,i.jsx)(n.code,{children:"WebAdmin"})," a trav\xe9s de HTTP en la misma m\xe1quina que la aplicaci\xf3n 4D. Por defecto, esta opci\xf3n est\xe1 seleccionada."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Nunca se aceptan conexiones con HTTP que no sean localhost."}),"\n",(0,i.jsxs)(n.li,{children:["Incluso si esta opci\xf3n est\xe1 activada, cuando ",(0,i.jsx)(n.a,{href:"#accept-https",children:"HTTPS aceptada"})," est\xe1 activada y la configuraci\xf3n TLS es v\xe1lida, las conexiones localhost utilizan HTTPS."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"puerto-http",children:"Puerto HTTP"}),"\n",(0,i.jsxs)(n.p,{children:["N\xfamero de puerto a utilizar para las conexiones al servidor web ",(0,i.jsx)(n.code,{children:"WebAdmin"})," a trav\xe9s de HTTP cuando la opci\xf3n ",(0,i.jsx)(n.strong,{children:"Conexiones HTTP en localhost aceptadas"})," est\xe1 marcada. El valor por defecto es 7080."]}),"\n",(0,i.jsx)(n.h4,{id:"aceptar-https",children:"Aceptar HTTPS"}),"\n",(0,i.jsxs)(n.p,{children:["Cuando esta opci\xf3n est\xe1 seleccionada, podr\xe1 conectarse al servidor web ",(0,i.jsx)(n.code,{children:"WebAdmin"})," a trav\xe9s de HTTPS. Por defecto, esta opci\xf3n est\xe1 seleccionada."]}),"\n",(0,i.jsx)(n.h4,{id:"puerto-https",children:"Puerto HTTPS"}),"\n",(0,i.jsxs)(n.p,{children:["N\xfamero de puerto a utilizar para las conexiones al servidor web ",(0,i.jsx)(n.code,{children:"WebAdmin"})," a trav\xe9s de HTTPS cuando la opci\xf3n ",(0,i.jsx)(n.strong,{children:"HTTPS aceptada"})," est\xe1 marcada. El valor por defecto es 7443."]}),"\n",(0,i.jsx)(n.h4,{id:"ruta-de-la-carpeta-de-certificados",children:"Ruta de la carpeta de certificados"}),"\n",(0,i.jsx)(n.p,{children:"Ruta de la carpeta donde se encuentran los archivos del certificado TLS. Por defecto, la ruta de la carpeta de certificados est\xe1 vac\xeda y 4D o 4D Server utiliza los archivos de certificados contenidos en la aplicaci\xf3n 4D (los certificados personalizados deben almacenarse junto a la carpeta de proyecto)."}),"\n",(0,i.jsx)(n.h4,{id:"modo-de-registro-de-depuraci\xf3n",children:"Modo de registro de depuraci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["Estado o formato del archivo de registro de peticiones HTTP (HTTPDebugLog_",(0,i.jsx)(n.em,{children:"nn"}),'.txt, almacenado en la carpeta "Logs" de la aplicaci\xf3n -- ',(0,i.jsx)(n.em,{children:"nn"})," es el n\xfamero de archivo). Las siguientes opciones est\xe1n disponibles:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Desactivado"})," (por defecto)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Con todas las partes del body"})," - activado con las partes del cuerpo en respuesta y petici\xf3n"]}),"\n",(0,i.jsx)(n.li,{children:"**Sin las partes del body ** - activado sin partes del cuerpo (se indica el tama\xf1o del cuerpo)"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Con los cuerpos de las peticiones"})," - activado con la partes del cuerpo \xfanicamente en las peticiones"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Con la respuesta body"})," - activado con la partes del cuerpo \xfanicamente en las respuestas"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"llave-de-acceso",children:"Llave de acceso"}),"\n",(0,i.jsxs)(n.p,{children:["La configuraci\xf3n de una llave de acceso es obligatoria para desbloquear el acceso al servidor web ",(0,i.jsx)(n.code,{children:"WebAdmin"})," a trav\xe9s de una URL (el acceso a trav\xe9s de un comando del men\xfa 4D no requiere una llave de acceso). Cuando no se define ninguna llave de acceso, no se permite que ning\xfan cliente web se conecte a trav\xe9s de una URL a una interfaz de administraci\xf3n web como la ",(0,i.jsx)(n.a,{href:"/docs/es/Admin/dataExplorer",children:"p\xe1gina Explorador de datos"}),". Se devuelve una p\xe1gina de error en caso de solicitud de conexi\xf3n:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt-text",src:a(513331).A+"",width:"193",height:"126"})}),"\n",(0,i.jsx)(n.p,{children:"Una llave de acceso es similar a una contrase\xf1a pero no est\xe1 asociada a un inicio de sesi\xf3n."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Para definir una nueva llave de acceso: haga clic en el bot\xf3n ",(0,i.jsx)(n.strong,{children:"Definir"}),", introduzca la cadena de la llave de acceso en la caja de di\xe1logo y haga clic en ",(0,i.jsx)(n.strong,{children:"OK"}),". La etiqueta del\nbot\xf3n se convierte en ",(0,i.jsx)(n.strong,{children:"Modificar"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Para modificar la llave de acceso: haga clic en el bot\xf3n ",(0,i.jsx)(n.strong,{children:"Modificar"}),", introduzca la nueva cadena de la llave de acceso en la caja de di\xe1logo y haga clic en ",(0,i.jsx)(n.strong,{children:"OK"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Para eliminar la llave de acceso: haga clic en el bot\xf3n ",(0,i.jsx)(n.strong,{children:"Modificar"}),", deje vac\xeda el \xe1rea de la llave de acceso y haga clic en ",(0,i.jsx)(n.strong,{children:"OK"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"activar-el-acceso-a-qodly-studio",children:"Activar el acceso a Qodly Studio"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Esta opci\xf3n s\xf3lo aparece si la licencia de Qodly Studio est\xe1 activa."})}),"\n",(0,i.jsxs)(n.p,{children:["Esta opci\xf3n permite al usuario acceder a ",(0,i.jsx)(n.a,{href:"/docs/es/WebServer/qodly-studio",children:"Qodly Studio"})," a nivel de la aplicaci\xf3n 4D. Ten en cuenta que tambi\xe9n necesita ",(0,i.jsx)(n.a,{href:"/docs/es/settings/web#enable-access-to-qodly-studio",children:"habilitar el acceso en cada nivel de proyecto"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"configuraci\xf3n-de-webadmin-sin-interfaz",children:"Configuraci\xf3n de WebAdmin sin interfaz"}),"\n",(0,i.jsxs)(n.p,{children:["Todos los ",(0,i.jsx)(n.a,{href:"#webadmin-settings",children:"par\xe1metros WebAdmin"})," se almacenan en el archivo ",(0,i.jsx)(n.code,{children:"WebAdmin.4DSettings"}),". Hay un archivo ",(0,i.jsx)(n.code,{children:"WebAdmin.4DSettings"})," por defecto por cada aplicaci\xf3n 4D y 4D Server, por lo que es posible desplegar varias aplicaciones en la misma m\xe1quina local."]}),"\n",(0,i.jsxs)(n.p,{children:["Cuando se ejecuta una aplicaci\xf3n 4D o 4D Server sin interfaz, se puede configurar y utilizar el archivo ",(0,i.jsx)(n.code,{children:"WebAdmin.4DSettings"})," por defecto, o designar un archivo ",(0,i.jsx)(n.code,{children:".4DSettings"})," personalizado."]}),"\n",(0,i.jsxs)(n.p,{children:["Para definir el contenido del archivo, puedes utilizar la ",(0,i.jsx)(n.a,{href:"#settings-dialog-box",children:"ventana de par\xe1metros WebAdmin"})," de la aplicaci\xf3n 4D con interfaz y luego ejecutarla sin interfaz. Se utiliza entonces\nel archivo por defecto ",(0,i.jsx)(n.code,{children:"WebAdmin.4DSettings"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["O bien, puede definir un archivo personalizado ",(0,i.jsx)(n.code,{children:".4DSettings"})," (formato xml) y utilizarlo en lugar del archivo predeterminado. Hay varios argumentos dedicados disponibles en la ",(0,i.jsx)(n.a,{href:"/docs/es/Admin/cli",children:"Interfaz de l\xednea de comandos"})," para soportar esta funcionalidad."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["La llave de acceso no se almacena de manera transparente en el archivo ",(0,i.jsx)(n.code,{children:".4DSettings"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Ejemplo:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'"%HOMEPATH%\\Desktop\\4D Server.exe" MyApp.4DLink --webadmin-access-key \n\t"my Fabulous AccessKey" --webadmin-auto-start true   \n\t--webadmin-store-settings\n\n'})}),"\n",(0,i.jsx)(n.h2,{id:"autenticaci\xf3n-y-sesi\xf3n",children:"Autenticaci\xf3n y sesi\xf3n"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Cuando se accede a una p\xe1gina de gesti\xf3n web introduciendo una URL y sin identificaci\xf3n previa, se requiere una autenticaci\xf3n. El usuario debe introducir la ",(0,i.jsx)(n.a,{href:"#access-key",children:"llave-de-acceso"})," en una ventana de autenticaci\xf3n. Si la llave de acceso no fue definida en la configuraci\xf3n de ",(0,i.jsx)(n.code,{children:"WebAdmin"}),", no es posible el acceso v\xeda URL."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Cuando se accede a una p\xe1gina de gesti\xf3n web directamente desde un elemento de men\xfa de 4D o 4D Server (como ",(0,i.jsx)(n.strong,{children:"Registros > Explorador de datos"})," o ",(0,i.jsx)(n.strong,{children:"Ventana > Explorador de datos"})," (4D Server)), el acceso se concede sin autenticaci\xf3n, el usuario se autentifica autom\xe1ticamente."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Una vez concedido el acceso, se crea una ",(0,i.jsx)(n.a,{href:"/docs/es/WebServer/sessions",children:"sesi\xf3n web"}),' con el privilegio "WebAdmin" en la aplicaci\xf3n 4D. Mientras la sesi\xf3n actual tenga el privilegio "WebAdmin", el componente ',(0,i.jsx)(n.code,{children:"WebAdmin"})," entrega las p\xe1ginas solicitadas."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},221020:(e,n,a)=>{var i=a(296540),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,r=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,a){var i,c={},l=null,t=null;for(i in void 0!==a&&(l=""+a),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(t=n.ref),n)d.call(n,i)&&!o.hasOwnProperty(i)&&(c[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===c[i]&&(c[i]=n[i]);return{$$typeof:s,type:e,key:l,ref:t,props:c,_owner:r.current}}n.Fragment=c,n.jsx=l,n.jsxs=l},474848:(e,n,a)=>{e.exports=a(221020)},513331:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/accessKey-30f179ff95de611714487b2467b3bed6.png"},76954:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/waMenu1-8cc55577b6eb6a9cbe4ddd02b766d0c8.png"},685265:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/waMenu2-972bfa6edeb61987599802e7665b50e9.png"},821565:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/waSettings-061bfd4438352b9f6e272f496fe01ac4.png"},509083:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/waSettings2-ec384a33ca25a5cd6198e8da121bbc75.png"},28453:(e,n,a)=>{a.d(n,{R:()=>d,x:()=>r});var i=a(296540);const s={},c=i.createContext(s);function d(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);