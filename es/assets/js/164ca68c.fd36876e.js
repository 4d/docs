"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57211"],{863894:function(e,a,i){i.r(a),i.d(a,{metadata:()=>r,contentTitle:()=>l,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>s});var r=JSON.parse('{"id":"Backup/log","title":"Archivo de historial (.journal)","description":"Una aplicaci\xf3n de uso continuo siempre est\xe1 registrando cambios, adiciones o supresiones. Realizar copias de seguridad peri\xf3dicas de los datos es importante, pero no permite (en caso de incidente) restaurar los datos introducidos desde la \xfaltima copia de seguridad. Para responder a esta necesidad, 4D ofrece ahora una herramienta espec\xedfica: el archivo de historial. Este archivo permite garantizar la seguridad permanente de los datos.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/Backup/log.md","sourceDirName":"Backup","slug":"/Backup/log","permalink":"/docs/es/20-R6/Backup/log","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Backup%2Flog.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"log","title":"Archivo de historial (.journal)"},"sidebar":"docs","previous":{"title":"Par\xe1metros de la copia de seguridad","permalink":"/docs/es/20-R6/Backup/settings"},"next":{"title":"Restaurar","permalink":"/docs/es/20-R6/Backup/restore"}}'),n=i("785893"),o=i("250065");let s={id:"log",title:"Archivo de historial (.journal)"},l=void 0,d={},c=[{value:"Funcionamiento del archivo de historial",id:"funcionamiento-del-archivo-de-historial",level:2},{value:"Crear el archivo de historial",id:"crear-el-archivo-de-historial",level:2},{value:"Par\xe1metros del archivo de historial",id:"par\xe1metros-del-archivo-de-historial",level:2},{value:"Cerrar el historial",id:"cerrar-el-historial",level:2}];function t(e){let a={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"Una aplicaci\xf3n de uso continuo siempre est\xe1 registrando cambios, adiciones o supresiones. Realizar copias de seguridad peri\xf3dicas de los datos es importante, pero no permite (en caso de incidente) restaurar los datos introducidos desde la \xfaltima copia de seguridad. Para responder a esta necesidad, 4D ofrece ahora una herramienta espec\xedfica: el archivo de historial. Este archivo permite garantizar la seguridad permanente de los datos."}),"\n",(0,n.jsx)(a.p,{children:"Adem\xe1s, 4D trabaja continuamente con una cach\xe9 de datos en la memoria. Esto acelera el funcionamiento de las aplicaciones; de hecho, el acceso a la memoria es m\xe1s r\xe1pido que el acceso al disco duro. Todos los cambios realizados en los datos de la aplicaci\xf3n se almacenan temporalmente en la cach\xe9 antes de escribirse en el disco duro. Si se produce un incidente en la aplicaci\xf3n antes de que los datos almacenados en la cach\xe9 puedan escribirse en el disco, deber\xe1 incluir el archivo de historial actual para poder recuperar la aplicaci\xf3n por completo."}),"\n",(0,n.jsxs)(a.p,{children:["Por \xfaltimo, 4D dispone de funciones que analizan el contenido del archivo de historial, permitiendo revertir las operaciones realizadas sobre los datos de la aplicaci\xf3n. Estas funciones est\xe1n disponibles en el CSM: consulte la p\xe1gina ",(0,n.jsx)(a.a,{href:"/docs/es/20-R6/MSC/analysis",children:"An\xe1lisis de actividades"})," y la p\xe1gina ",(0,n.jsx)(a.a,{href:"/docs/es/20-R6/MSC/rollback",children:"Retroceder"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"funcionamiento-del-archivo-de-historial",children:"Funcionamiento del archivo de historial"}),"\n",(0,n.jsxs)(a.p,{children:["El archivo de historial generado por 4D contiene una descripci\xf3n de todas las operaciones realizadas en los datos de las tablas registradas en el diario, que se registran de forma secuencial. Por defecto, todas las tablas se registran en el diario, es decir, se incluyen en el archivo de historial, pero puede anular la selecci\xf3n de tablas individuales mediante la propiedad ",(0,n.jsx)(a.strong,{children:"Incluir en el archivo de historial"}),"."]}),"\n",(0,n.jsx)(a.p,{children:"As\xed, cada operaci\xf3n realizada por un usuario provoca dos acciones simult\xe1neas: la primera en el archivo de datos (la instrucci\xf3n se ejecuta normalmente) y la segunda en el archivo de historial (se registra la descripci\xf3n de la operaci\xf3n). El archivo de historial se crea de forma independiente, sin perturbar ni ralentizar el trabajo del usuario. El archivo de historial se crea de forma independiente, sin perturbar ni ralentizar el trabajo del usuario. El archivo de historial registra los siguientes tipos de acciones:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Apertura y cierre del archivo de datos,"}),"\n",(0,n.jsx)(a.li,{children:"Apertura y cierre del proceso (contextos),"}),"\n",(0,n.jsx)(a.li,{children:"Adici\xf3n de registros o BLOBs,"}),"\n",(0,n.jsx)(a.li,{children:"Modificaci\xf3n de registros,"}),"\n",(0,n.jsx)(a.li,{children:"Eliminaci\xf3n de registros,"}),"\n",(0,n.jsx)(a.li,{children:"Creaci\xf3n y cierre de transacciones."}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["Para m\xe1s informaci\xf3n sobre estas acciones, consulte la p\xe1gina ",(0,n.jsx)(a.a,{href:"/docs/es/20-R6/MSC/analysis",children:"An\xe1lisis de actividades"})," del CSM."]}),"\n",(0,n.jsx)(a.p,{children:"4D gestiona el archivo de historial. Tiene en cuenta todas las operaciones que afectan al archivo de datos por igual, independientemente de las manipulaciones realizadas por un usuario, m\xe9todos 4D, el motor SQL, los plug-ins, o un navegador web o una aplicaci\xf3n m\xf3vil."}),"\n",(0,n.jsx)(a.p,{children:"La siguiente ilustraci\xf3n resume el funcionamiento del archivo de historial:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:i(630651).Z+"",width:"523",height:"448"})}),"\n",(0,n.jsx)(a.p,{children:"El archivo de historial actual se guarda autom\xe1ticamente con el archivo de datos actual. Este mecanismo tiene dos ventajas distintas:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Evitar la saturaci\xf3n del volumen de disco donde se almacena el archivo de historial. Sin una copia de seguridad, el archivo de historial se har\xeda cada vez m\xe1s grande con el uso, y acabar\xeda utilizando todo el espacio disponible en el disco. Para cada copia de seguridad del archivo de datos, 4D o 4D Server cierra el archivo de historial actual e inmediatamente inicia un nuevo archivo vac\xedo, evitando as\xed el riesgo de saturaci\xf3n. A continuaci\xf3n, el archivo de historial antiguo se archiva y, finalmente, se destruye en funci\xf3n del mecanismo de gesti\xf3n de los conjuntos de copias de seguridad."}),"\n",(0,n.jsx)(a.li,{children:"Conservar los archivos de historial correspondientes a las copias de seguridad para poder analizar o reparar una aplicaci\xf3n en un momento posterior. La integraci\xf3n de un archivo de historial s\xf3lo puede hacerse en la aplicaci\xf3n a la que corresponde. Para poder integrar correctamente un archivo de historial en una copia de seguridad, es importante que las copias de seguridad y los archivos de historial se archiven simult\xe1neamente."}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"crear-el-archivo-de-historial",children:"Crear el archivo de historial"}),"\n",(0,n.jsxs)(a.p,{children:["Por defecto, toda aplicaci\xf3n creada con 4D utiliza un archivo de historial (opci\xf3n definida en la p\xe1gina ",(0,n.jsx)(a.strong,{children:"General"})," de las Preferencias). El archivo de historial se llama ",(0,n.jsx)(a.em,{children:"data.journal"})," y se coloca en la carpeta Data."]}),"\n",(0,n.jsxs)(a.p,{children:["Puede averiguar si su aplicaci\xf3n utiliza un archivo de historial en cualquier momento: s\xf3lo tiene que comprobar si la opci\xf3n ",(0,n.jsx)(a.strong,{children:"Utilizar el archivo de historial"})," est\xe1 seleccionada en la p\xe1gina ",(0,n.jsx)(a.strong,{children:"Backup/Configuraci\xf3n"})," de las Propiedades. Si deselecciona esta opci\xf3n, o si utiliza una aplicaci\xf3n sin archivo de historial y desea configurar una estrategia de copia de seguridad con un archivo de historial, tendr\xe1 que crear uno."]}),"\n",(0,n.jsx)(a.p,{children:"Para crear un archivo de historial:"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["En la p\xe1gina ",(0,n.jsx)(a.strong,{children:"Copia de seguridad/Configuraci\xf3n"})," de las Propiedades de estructura, marque la opci\xf3n ",(0,n.jsx)(a.strong,{children:"Utilizar el archivo de historial"}),".\nEl programa muestra una caja de di\xe1logo est\xe1ndar de abrir/nuevo archivo. Por defecto, el archivo de historial se llama ",(0,n.jsx)(a.em,{children:"data.journal"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Mantenga el nombre por defecto o cambie el nombre, y luego seleccione la ubicaci\xf3n del archivo.\nSi tiene al menos dos discos duros, se recomienda colocar el archivo de historial en un disco distinto al que contiene el proyecto de aplicaci\xf3n. Si se pierde el disco duro de la aplicaci\xf3n, a\xfan puede recuperar su archivo de historial."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Presione ",(0,n.jsx)(a.strong,{children:"Guardar"}),".\nEl disco y el nombre del archivo de historial abierto se muestran ahora en el \xe1rea ",(0,n.jsx)(a.strong,{children:"Utilizar historial"})," de la caja de di\xe1logo. Puede hacer clic en esta \xe1rea para que aparezca un men\xfa emergente con la ruta del historial en el disco."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Valide la caja de di\xe1logo de las Propiedades."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"Para poder crear directamente un archivo de historial, los datos deben estar en una de las siguientes situaciones:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"El archivo de datos est\xe1 en blanco,"}),"\n",(0,n.jsx)(a.li,{children:"Acaba de realizar una copia de seguridad y a\xfan no se han realizado cambios en los datos."}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["Si hace clic en ",(0,n.jsx)(a.strong,{"x-id":"1",children:"Aceptar"}),", la copia de seguridad comienza inmediatamente, y luego se activa el archivo de historial. Si hace clic en ",(0,n.jsx)(a.strong,{children:"Aceptar"}),", la copia de seguridad comienza inmediatamente, y luego se activa el archivo de historial. Si hace clic en ",(0,n.jsx)(a.strong,{children:"Cancelar"}),", la solicitud se guarda pero la creaci\xf3n del archivo de historial se pospone y en realidad s\xf3lo se crear\xe1 despu\xe9s de la siguiente copia de seguridad de la aplicaci\xf3n. Esta precauci\xf3n es indispensable porque, para restaurar una aplicaci\xf3n despu\xe9s de alg\xfan incidente, necesitar\xe1 una copia de la aplicaci\xf3n en la que se integrar\xe1n las operaciones registradas en el archivo de historial."]}),"\n",(0,n.jsx)(a.p,{children:"Sin tener que hacer nada m\xe1s, todas las operaciones realizadas sobre los datos se registran en este archivo y se utilizar\xe1n en el futuro cuando se abra la aplicaci\xf3n."}),"\n",(0,n.jsx)(a.p,{children:"Debe crear otro archivo de historial si crea un nuevo archivo de datos. Debe establecer o crear otro archivo de historial si abre otro archivo de datos que no est\xe1 asociado a un archivo de historial (o si falta el archivo de historial)."}),"\n",(0,n.jsx)(a.h2,{id:"par\xe1metros-del-archivo-de-historial",children:"Par\xe1metros del archivo de historial"}),"\n",(0,n.jsxs)(a.p,{children:["Los ",(0,n.jsx)(a.a,{href:"/docs/es/20-R6/Backup/settings#log-file-management",children:"par\xe1metros del archivo de historial"})," se basa en dos datos: un valor booleano y una ruta."]}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Valor booleano"}),': indica si la funcionalidad "Utilizar archivo de registro" est\xe1 activada o desactivada en la aplicaci\xf3n. Por defecto, el valor booleano se almacena en ',(0,n.jsx)(a.em,{children:"catalog.4DCatalog"}),". Sin embargo, cuando se activan los ",(0,n.jsx)(a.a,{href:"/docs/es/20-R6/Desktop/user-settings",children:"par\xe1metros usuario"}),", la configuraci\xf3n del archivo ",(0,n.jsx)(a.em,{children:"catalog.4DCatalog"})," se anula, y el valor booleano puede definirse tanto en el archivo ",(0,n.jsx)(a.em,{children:"Backup.4DSettings"})," ",(0,n.jsx)(a.a,{href:"/docs/es/20-R6/Project/architecture#settings-user-data",children:"junto al archivo de datos"})," como en el archivo ",(0,n.jsx)(a.em,{children:"Backup.4DSettings"})," ",(0,n.jsx)(a.a,{href:"/docs/es/20-R6/Project/architecture#settings-user",children:"en la carpeta del proyecto"})," (ver tambi\xe9n la documentaci\xf3n de la llave de backup xml ",(0,n.jsx)(a.code,{children:"JournalFileEnabled"})," en ",(0,n.jsx)(a.a,{href:"https://doc.4d.com",children:"doc.4d.com"}),")."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Ruta"}),": una cadena que indica d\xf3nde se encuentra el archivo de registro. La ruta del archivo de registro siempre se almacena en el archivo de datos vinculados."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"cerrar-el-historial",children:"Cerrar el historial"}),"\n",(0,n.jsxs)(a.p,{children:["Si desea dejar de registrar las operaciones en el archivo de historial actual, s\xf3lo tiene que anular la selecci\xf3n de la opci\xf3n ",(0,n.jsx)(a.strong,{children:"Utilizar el archivo de historial"})," en la p\xe1gina ",(0,n.jsx)(a.strong,{children:"Copia de seguridad/Configuraci\xf3n"})," de las Propiedades."]}),"\n",(0,n.jsx)(a.p,{children:"4D muestra entonces un mensaje de alerta para recordarle que esta acci\xf3n le impide aprovechar la seguridad que ofrece el archivo de historial:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:i(961494).Z+"",width:"482",height:"188"})}),"\n",(0,n.jsxs)(a.p,{children:["Si hace clic en el bot\xf3n ",(0,n.jsx)(a.strong,{children:"Parar"}),", el archivo de historial actual se cierra inmediatamente (la caja de dialogo de las Propiedades no necesita ser validada despu\xe9s)."]}),"\n",(0,n.jsx)(a.p,{children:"Si desea cerrar el archivo de historial actual porque es demasiado grande, puede considerar la posibilidad de realizar una copia de seguridad del archivo de datos, lo que har\xe1 que el archivo de historial se copie tambi\xe9n."}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"4D Server:"})," el comando ",(0,n.jsx)(a.code,{children:"New log file"})," cierra autom\xe1ticamente el archivo de historial actual e inicia uno nuevo.\nSi por alguna raz\xf3n el archivo de historial no est\xe1 disponible durante una sesi\xf3n de trabajo, se genera el error 1274 y 4D Server no permite a los usuarios escribir m\xe1s datos. Cuando el archivo de historial est\xe1 disponible de nuevo, es necesario hacer una copia de seguridad."]}),"\n"]})]})}function h(e={}){let{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(t,{...e})}):t(e)}},630651:function(e,a,i){i.d(a,{Z:function(){return r}});let r=i.p+"assets/images/backup05-467406274aac70bb97c1fc96ec032647.png"},961494:function(e,a,i){i.d(a,{Z:function(){return r}});let r="data:image/png;base64,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"},250065:function(e,a,i){i.d(a,{Z:function(){return l},a:function(){return s}});var r=i(667294);let n={},o=r.createContext(n);function s(e){let a=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(o.Provider,{value:a},e.children)}}}]);