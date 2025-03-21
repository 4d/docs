"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55067"],{632059:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>r,assets:()=>l,toc:()=>d,contentTitle:()=>c});var r=JSON.parse('{"id":"Desktop/clientServer","title":"Gesti\xf3n Cliente/Servidor","description":"Las aplicaciones 4D Desktop pueden utilizarse en una configuraci\xf3n Cliente/Servidor, ya sea como aplicaciones combinadas cliente/servidor o como proyectos remotos.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/Desktop/clientServer.md","sourceDirName":"Desktop","slug":"/Desktop/clientServer","permalink":"/docs/es/Desktop/clientServer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Desktop%2FclientServer.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"clientServer","title":"Gesti\xf3n Cliente/Servidor"},"sidebar":"docs","previous":{"title":"Desktop Applications","permalink":"/docs/es/category/desktop-applications"},"next":{"title":"Access Rights","permalink":"/docs/es/category/access-rights"}}'),a=i("785893"),o=i("250065");let s={id:"clientServer",title:"Gesti\xf3n Cliente/Servidor"},c=void 0,l={},d=[{value:"Abrir una aplicaci\xf3n cliente/servidor fusionada",id:"abrir-una-aplicaci\xf3n-clienteservidor-fusionada",level:2},{value:"Abrir un proyecto remoto",id:"abrir-un-proyecto-remoto",level:2},{value:"Actualizaci\xf3n de los archivos del proyecto en el servidor",id:"actualizaci\xf3n-de-los-archivos-del-proyecto-en-el-servidor",level:3},{value:"Actualizaci\xf3n de los archivos de proyecto en las m\xe1quinas remotas",id:"actualizaci\xf3n-de-los-archivos-de-proyecto-en-las-m\xe1quinas-remotas",level:3},{value:"Utilizar 4D y 4D Server en la misma m\xe1quina",id:"utilizar-4d-y-4d-server-en-la-misma-m\xe1quina",level:2},{value:"Sesiones de usuarios remotos",id:"sesiones-de-usuarios-remotos",level:2},{value:"Utilizaci\xf3n",id:"utilizaci\xf3n",level:3},{value:"Disponibilidad",id:"disponibilidad",level:3},{value:"Ver tambi\xe9n (entrada de blog)",id:"ver-tambi\xe9n-entrada-de-blog",level:3}];function t(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Las aplicaciones 4D Desktop pueden utilizarse en una configuraci\xf3n Cliente/Servidor, ya sea como aplicaciones combinadas cliente/servidor o como proyectos remotos."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Las ",(0,a.jsx)(n.strong,{children:"aplicaciones cliente/servidor fusionadas"})," son generadas por el ",(0,a.jsx)(n.a,{href:"/docs/es/Desktop/building#clientserver-page",children:"gestor de creaci\xf3n de aplicaciones"}),". Se utilizan para el despliegue de aplicaciones."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Los ",(0,a.jsx)(n.strong,{children:"proyectos remotos"})," son archivos ",(0,a.jsx)(n.a,{href:"/docs/es/Project/architecture",children:".4DProject"})," abiertos por 4D Server y a los que se accede con 4D en modo remoto. El servidor env\xeda una versi\xf3n .4dz del proyecto (",(0,a.jsx)(n.a,{href:"/docs/es/Desktop/building#build-compiled-structure",children:"formato comprimido"}),") al 4D remoto, por lo que los archivos de estructura son de s\xf3lo lectura. Esta configuraci\xf3n se suele utilizar para probar la aplicaci\xf3n."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:i(296437).Z+"",width:"581",height:"249"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["La conexi\xf3n a un proyecto remoto desde ",(0,a.jsx)(n.strong,{children:"la misma m\xe1quina que 4D Server"})," permite modificar los archivos del proyecto. Esta ",(0,a.jsx)(n.a,{href:"#using-4d-and-4d-server-on-the-same-machine",children:"funcionalidad espec\xedfica"})," permite desarrollar una aplicaci\xf3n cliente/servidor en el mismo contexto del despliegue."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"abrir-una-aplicaci\xf3n-clienteservidor-fusionada",children:"Abrir una aplicaci\xf3n cliente/servidor fusionada"}),"\n",(0,a.jsx)(n.p,{children:"Una aplicaci\xf3n cliente/servidor fusionada se personaliza y su puesta en marcha se simplifica:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Para lanzar la parte del servidor, el usuario simplemente hace doble clic en la aplicaci\xf3n servidor. No es necesario seleccionar el archivo proyecto."}),"\n",(0,a.jsx)(n.li,{children:"Para lanzar la parte cliente, el usuario simplemente hace doble clic en la aplicaci\xf3n cliente, que se conecta directamente a la aplicaci\xf3n servidor."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Estos principios se detallan en la p\xe1gina ",(0,a.jsx)(n.a,{href:"/docs/es/Desktop/building#what-is-a-clientserver-application",children:"Creaci\xf3n de aplicaciones"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"abrir-un-proyecto-remoto",children:"Abrir un proyecto remoto"}),"\n",(0,a.jsxs)(n.p,{children:["La primera vez que se conecte a un proyecto 4D Server a trav\xe9s de un 4D remoto, normalmente utilizar\xe1 la caja de di\xe1logo de conexi\xf3n est\xe1ndar. Luego, podr\xe1 conectarse directamente utilizando el men\xfa ",(0,a.jsx)(n.strong,{children:"Abrir proyectos recientes"})," o un archivo de acceso directo 4DLink."]}),"\n",(0,a.jsx)(n.p,{children:"Para conectarse remotamente a un proyecto 4D Server:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Haga una de las siguientes cosas:"}),"\n"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Seleccione ",(0,a.jsx)(n.strong,{children:"Conectar a 4D Server"})," en la caja de di\xe1logo del asistente de bienvenida"]}),"\n",(0,a.jsxs)(n.li,{children:["Seleccione ",(0,a.jsx)(n.strong,{children:"Abrir/Proyecto remoto..."})," desde el men\xfa ",(0,a.jsx)(n.strong,{children:"Archivo"})," o del bot\xf3n",(0,a.jsx)(n.strong,{children:"Abrir"})," de la barra de herramientas."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Aparece el di\xe1logo de conexi\xf3n de 4D Server. Este di\xe1logo tiene tres pesta\xf1as: ",(0,a.jsx)(n.strong,{children:"Reciente"}),", ",(0,a.jsx)(n.strong,{children:"Disponible"})," y ",(0,a.jsx)(n.strong,{children:"Personalizado"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Si 4D Server est\xe1 conectado a la misma subred que el 4D remoto, seleccione ",(0,a.jsx)(n.strong,{children:"Disponible"}),". 4D Server incluye un sistema de difusi\xf3n integrado que, por defecto, publica el nombre de los proyectos 4D Server disponibles en la red. La lista se ordena por orden de aparici\xf3n y se actualiza din\xe1micamente."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:i(559806).Z+"",width:"522",height:"482"})}),"\n",(0,a.jsxs)(n.p,{children:["Para conectarse a un servidor de la lista, haga doble clic en su nombre o selecci\xf3nelo y presione el bot\xf3n ",(0,a.jsx)(n.strong,{children:"Aceptar"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Si el proyecto publicado no aparece en la lista ",(0,a.jsx)(n.strong,{children:"Disponible"}),", seleccione ",(0,a.jsx)(n.strong,{children:"Personalizado"}),". La p\xe1gina Personalizada le permite conectarse a un servidor publicado en la red utilizando su direcci\xf3n de red y asign\xe1ndole un nombre personalizado."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:i(84655).Z+"",width:"522",height:"522"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Nombre del proyecto"}),": define el nombre local del proyecto 4D Server. Este nombre se utilizar\xe1 en la p\xe1gina ",(0,a.jsx)(n.strong,{children:"Reciente"})," cuando se haga referencia al proyecto."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Direcci\xf3n red"}),": la direcci\xf3n IP de la m\xe1quina donde se lanz\xf3 el 4D Server.\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Si dos servidores se ejecutan simult\xe1neamente en la misma m\xe1quina, la direcci\xf3n IP debe ir seguida de dos puntos y del n\xfamero de puerto, por ejemplo: ",(0,a.jsx)(n.code,{children:"192.168.92.104:19814"}),"."]}),"\n",(0,a.jsx)(n.li,{children:"Por defecto, el puerto de publicaci\xf3n de un 4D Server es el 19813. Este n\xfamero puede modificarse en los par\xe1metros del proyecto."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["La opci\xf3n ",(0,a.jsx)(n.strong,{children:"Activar modo desarrollo"})," abre la conexi\xf3n remota en un modo especial de lectura/escritura y requiere acceder a la carpeta del proyecto desde el 4D remoto (opci\xf3n de compatibilidad)."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Una vez que esta p\xe1gina asigna un servidor, al hacer clic en el bot\xf3n ",(0,a.jsx)(n.strong,{children:"Aceptar"})," podr\xe1 conectarse al servidor."]}),"\n",(0,a.jsxs)(n.p,{children:["Una vez establecida la conexi\xf3n con el servidor, el proyecto remoto aparecer\xe1 en la pesta\xf1a ",(0,a.jsx)(n.strong,{children:"Recientes"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"actualizaci\xf3n-de-los-archivos-del-proyecto-en-el-servidor",children:"Actualizaci\xf3n de los archivos del proyecto en el servidor"}),"\n",(0,a.jsxs)(n.p,{children:["4D Server crea y env\xeda autom\xe1ticamente a las m\xe1quinas remotas una versi\xf3n ",(0,a.jsx)(n.a,{href:"/docs/es/Desktop/building#build-compiled-structure",children:".4dz"})," del archivo proyecto ",(0,a.jsx)(n.em,{children:".4DProject"})," (no comprimido) en modo interpretado."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Una versi\xf3n .4dz actualizada del proyecto se produce autom\xe1ticamente cuando es necesario, *es decir, *cuando el proyecto ha sido modificado y recargado por 4D Server. El proyecto se recarga:\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"autom\xe1ticamente, cuando la ventana de la aplicaci\xf3n 4D Server pasa al frente del sistema operativo o cuando la aplicaci\xf3n 4D en la misma m\xe1quina guarda una modificaci\xf3n (ver abajo)."}),"\n",(0,a.jsxs)(n.li,{children:["cuando se ejecuta el comando ",(0,a.jsx)(n.code,{children:"RELOAD PROJECT"}),". Llamar a este comando es necesario cuando, por ejemplo, se ha sacado una nueva versi\xf3n del proyecto desde la plataforma de control de fuentes."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"actualizaci\xf3n-de-los-archivos-de-proyecto-en-las-m\xe1quinas-remotas",children:"Actualizaci\xf3n de los archivos de proyecto en las m\xe1quinas remotas"}),"\n",(0,a.jsx)(n.p,{children:"Cuando se ha producido una versi\xf3n .4dz actualizada del proyecto en 4D Server, las m\xe1quinas 4D remotas conectadas deben cerrar la sesi\xf3n y volver a conectarse a 4D Server para poder beneficiarse de la versi\xf3n actualizada."}),"\n",(0,a.jsx)(n.h2,{id:"utilizar-4d-y-4d-server-en-la-misma-m\xe1quina",children:"Utilizar 4D y 4D Server en la misma m\xe1quina"}),"\n",(0,a.jsx)(n.p,{children:"Cuando 4D se conecta a un 4D Server en la misma m\xe1quina, la aplicaci\xf3n se comporta como 4D en modo monopuesto y el entorno de dise\xf1o le permite editar los archivos del proyecto. Esta funcionalidad le permite desarrollar una aplicaci\xf3n cliente/servidor en el mismo contexto de despliegue."}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Cuando 4D se conecta a un 4D Server en la misma m\xe1quina, el ",(0,a.jsx)(n.strong,{children:"modo desarrollo"})," se activa autom\xe1ticamente, sea cual sea el estado de la ",(0,a.jsx)(n.a,{href:"#opening-a-remote-project",children:"opci\xf3n de apertura"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Cada vez que 4D realiza una acci\xf3n ",(0,a.jsx)(n.strong,{children:"Guardar todo"})," desde el entorno de dise\xf1o (expl\xedcitamente desde el men\xfa ",(0,a.jsx)(n.strong,{children:"Archivo"})," o impl\xedcitamente al cambiar al modo aplicaci\xf3n, por ejemplo), 4D Server recarga sincronizadamente los archivos del proyecto. 4D espera a que 4D Server termine de recargar los archivos del proyecto antes de continuar."]}),"\n",(0,a.jsxs)(n.p,{children:["Sin embargo, debe prestar atenci\xf3n a las siguientes diferencias de comportamiento en comparaci\xf3n con ",(0,a.jsx)(n.a,{href:"/docs/es/Project/architecture",children:"la arquitectura proyecto est\xe1ndar"}),":"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:'la carpeta userPreferences.{username} utilizada por 4D no es la misma carpeta utilizada por 4D Server en la carpeta proyecto. En su lugar, es una carpeta dedicada, llamada "userPreferences", almacenada en la carpeta sistema del proyecto (es decir, la misma ubicaci\xf3n que al abrir un proyecto .4dz).'}),"\n",(0,a.jsx)(n.li,{children:'la carpeta utilizada por 4D para los datos derivados no es la carpeta llamada "DerivedData" en la carpeta proyecto. En su lugar, se trata de una carpeta dedicada llamada "DerivedDataRemote" situada en la carpeta del sistema del proyecto.'}),"\n",(0,a.jsx)(n.li,{children:"el archivo catalog.4DCatalog no es editado por 4D sino por 4D Server. La informaci\xf3n del cat\xe1logo se sincroniza mediante peticiones cliente/servidor"}),"\n",(0,a.jsx)(n.li,{children:"el archivo directory.json no es editado por 4D sino por 4D Server. La informaci\xf3n del directorio se sincroniza mediante peticiones cliente/servidor"}),"\n",(0,a.jsx)(n.li,{children:"4D utiliza sus propios componentes internos y plug-ins en lugar de los de 4D Server."}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"No se recomienda instalar plug-ins o componentes a nivel de la aplicaci\xf3n 4D o 4D Server."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"sesiones-de-usuarios-remotos",children:"Sesiones de usuarios remotos"}),"\n",(0,a.jsxs)(n.p,{children:["En el servidor, el comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/session",children:(0,a.jsx)(n.code,{children:"Session"})})," devuelve un objeto ",(0,a.jsx)(n.code,{children:"session"})," que describe la sesi\xf3n de usuario actual. Este objeto se maneja a trav\xe9s de las funciones y propiedades de la ",(0,a.jsxs)(n.a,{href:"/docs/es/API/SessionClass",children:["clase ",(0,a.jsx)(n.code,{children:"Session"})]}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"utilizaci\xf3n",children:"Utilizaci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El objeto ",(0,a.jsx)(n.code,{children:"session"})," permite obtener informaci\xf3n sobre la sesi\xf3n del usuario remoto. Puede compartir datos entre todos los procesos de la sesi\xf3n del usuario utilizando el objeto compartido ",(0,a.jsx)(n.a,{href:"/docs/es/API/SessionClass#storage",children:(0,a.jsx)(n.code,{children:"session.storage"})}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Por ejemplo, puede iniciar un procedimiento de autenticaci\xf3n y verificaci\xf3n de usuario cuando un cliente se conecta al servidor, que involucra ingresar un c\xf3digo enviado por correo electr\xf3nico o SMS en la aplicaci\xf3n. A continuaci\xf3n, a\xf1ada la informaci\xf3n de usuario al almacenamiento de sesi\xf3n, permitiendo al servidor identificar al usuario. De este modo, el servidor 4D puede acceder a la informaci\xf3n del usuario para todos los procesos del cliente, lo que permite escribir c\xf3digo personalizado seg\xfan el rol del usuario."}),"\n",(0,a.jsx)(n.h3,{id:"disponibilidad",children:"Disponibilidad"}),"\n",(0,a.jsxs)(n.p,{children:["El objeto ",(0,a.jsx)(n.code,{children:"session"})," del usuario remoto est\xe1 disponible en:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["M\xe9todos proyecto que tienen el atributo ",(0,a.jsx)(n.a,{href:"/docs/es/Project/code-overview#execute-on-server",children:"Ejecutar en el Servidor"}),' (se ejecutan en el proceso "twinned" del proceso cliente),']}),"\n",(0,a.jsx)(n.li,{children:"Triggers,"}),"\n",(0,a.jsxs)(n.li,{children:["ORDA ",(0,a.jsx)(n.a,{href:"/docs/es/ORDA/ordaClasses",children:"funciones del modelo de datos"})," (excepto las declaradas con la palabra clave ",(0,a.jsx)(n.a,{href:"/docs/es/ORDA/ordaClasses#local-functions",children:(0,a.jsx)(n.code,{children:"local"})}),","]}),"\n",(0,a.jsxs)(n.li,{children:["Los m\xe9todos base ",(0,a.jsx)(n.code,{children:"On Server Open Connection"})," y ",(0,a.jsx)(n.code,{children:"On Server Shutdown Connection"})," de la base de datos."]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Todos los procedimientos almacenados en el servidor comparten la misma sesi\xf3n de usuario virtual. Para m\xe1s informaci\xf3n, consulte ",(0,a.jsx)(n.a,{href:"https://doc.4d.com/4Dv20R5/4D/20-R5/4D-Server-and-the-4D-Language.300-6932726.en.html",children:"esta p\xe1gina en doc.4d.com"}),"."]})}),"\n",(0,a.jsx)(n.h3,{id:"ver-tambi\xe9n-entrada-de-blog",children:"Ver tambi\xe9n (entrada de blog)"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://blog.4d.com/new-4D-remote-session-object-with-client-server-connection-and-stored-procedure",children:"Objeto sesi\xf3n remota 4D con conexi\xf3n cliente/servidor y procedimiento almacenado"}),"."]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},84655:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/serverConnect2-2617f5a73a8b33f5ebfac1b36a006c1c.png"},296437:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/localremote-5c33fe5479db4c271ef3a6dabde98395.png"},559806:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/serverConnect-cb74aeff8307fbc27a084e5c6ec84144.png"},250065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return s}});var r=i(667294);let a={},o=r.createContext(a);function s(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);