"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88797"],{48198:function(e,o,s){s.r(o),s.d(o,{metadata:()=>n,contentTitle:()=>d,default:()=>m,assets:()=>l,toc:()=>c,frontMatter:()=>a});var n=JSON.parse('{"id":"Project/code-overview","title":"M\xe9todos y clases","description":"El c\xf3digo 4D utilizado en todo el proyecto est\xe1 escrito en m\xe9todos y clases.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/Project/code-overview.md","sourceDirName":"Project","slug":"/Project/code-overview","permalink":"/docs/es/Project/code-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Project%2Fcode-overview.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"code-overview","title":"M\xe9todos y clases"},"sidebar":"docs","previous":{"title":"Documentar un proyecto","permalink":"/docs/es/Project/documentation"},"next":{"title":"Editor de c\xf3digo","permalink":"/docs/es/code-editor/write-class-method"}}'),r=s("785893"),i=s("250065");let a={id:"code-overview",title:"M\xe9todos y clases"},d=void 0,l={},c=[{value:"Creaci\xf3n de m\xe9todos",id:"creaci\xf3n-de-m\xe9todos",level:2},{value:"Crear las clases",id:"crear-las-clases",level:2},{value:"Eliminar los m\xe9todos o las clases",id:"eliminar-los-m\xe9todos-o-las-clases",level:2},{value:"Importar y exportar el c\xf3digo",id:"importar-y-exportar-el-c\xf3digo",level:2},{value:"Propiedades del m\xe9todo proyecto",id:"propiedades-del-m\xe9todo-proyecto",level:2},{value:"Nombre",id:"nombre",level:3},{value:"Atributos",id:"atributos",level:3},{value:"Invisible",id:"invisible",level:4},{value:"Compartido por los componentes y la base local",id:"compartido-por-los-componentes-y-la-base-local",level:4},{value:"Ejecutar en el servidor",id:"ejecutar-en-el-servidor",level:4},{value:"Modo Ejecuci\xf3n",id:"modo-ejecuci\xf3n",level:3},{value:"Disponibilidad",id:"disponibilidad",level:3},{value:"Web Services",id:"web-services",level:4},{value:"Publicado en WSDL",id:"publicado-en-wsdl",level:4},{value:"Etiquetas 4D y URLs (4DACTION...)",id:"etiquetas-4d-y-urls-4daction",level:4},{value:"SQL",id:"sql",level:4},{value:"Servidor REST",id:"servidor-rest",level:4},{value:"Modificar de atributos globalmente",id:"modificar-de-atributos-globalmente",level:4}];function t(e){let o={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:["El c\xf3digo 4D utilizado en todo el proyecto est\xe1 escrito en ",(0,r.jsx)(o.a,{href:"/docs/es/Concepts/methods",children:"m\xe9todos"})," y ",(0,r.jsx)(o.a,{href:"/docs/es/Concepts/classes",children:"clases"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["El IDE de 4D le ofrece varias funcionalidades para crear, editar, exportar o eliminar su c\xf3digo. Por lo general, utilizar\xe1 el ",(0,r.jsx)(o.a,{href:"/docs/es/code-editor/write-class-method",children:"editor de c\xf3digo"})," de 4D para trabajar con su c\xf3digo."]}),"\n",(0,r.jsx)(o.h2,{id:"creaci\xf3n-de-m\xe9todos",children:"Creaci\xf3n de m\xe9todos"}),"\n",(0,r.jsxs)(o.p,{children:["Un m\xe9todo en 4D se almacena en un archivo ",(0,r.jsx)(o.strong,{children:".4dm"})," ubicado en la carpeta apropiada de la carpeta ",(0,r.jsx)(o.a,{href:"/docs/es/Project/architecture#sources",children:(0,r.jsx)(o.code,{children:"/Project/Sources/"})}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["Puede crear ",(0,r.jsx)(o.a,{href:"/docs/es/Concepts/methods",children:"varios tipos de m\xe9todos"}),":"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["Todos los tipos de m\xe9todos pueden crearse o abrirse desde la ventana del ",(0,r.jsx)(o.strong,{children:"Explorador"})," (excepto los m\xe9todos Objeto que se gestionan desde el ",(0,r.jsx)(o.a,{href:"/docs/es/FormEditor/overview",children:"editor de formularios"}),")."]}),"\n",(0,r.jsxs)(o.li,{children:["Los m\xe9todos proyecto tambi\xe9n pueden crearse o abrirse desde el men\xfa ",(0,r.jsx)(o.strong,{children:"Archivo"})," o la barra de herramientas (",(0,r.jsx)(o.strong,{children:"Nuevo/M\xe9todo..."})," o ",(0,r.jsx)(o.strong,{children:"Abrir/M\xe9todo..."}),") o utilizando los accesos directos de la ventana del [editor de c\xf3digo](../code-editor/write-class-method"]}),"\n",(0,r.jsx)(o.li,{children:"Los triggers tambi\xe9n pueden crearse o abrirse desde el editor de Estructura."}),"\n",(0,r.jsxs)(o.li,{children:["Los m\xe9todos formulario tambi\xe9n pueden crearse o abrirse desde el ",(0,r.jsx)(o.a,{href:"/docs/es/FormEditor/overview",children:"editor de formularios"}),"."]}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"crear-las-clases",children:"Crear las clases"}),"\n",(0,r.jsxs)(o.p,{children:["Una clase usuario en 4D est\xe1 definida por un archivo de m\xe9todo espec\xedfico (",(0,r.jsx)(o.strong,{children:".4dm"}),"), almacenado en la carpeta ",(0,r.jsx)(o.a,{href:"/docs/es/Project/architecture#sources",children:(0,r.jsx)(o.code,{children:"/Project/Sources/Classes/"})}),". El nombre del archivo es el nombre de la clase."]}),"\n",(0,r.jsxs)(o.p,{children:["Puede crear un archivo de clase desde el men\xfa ",(0,r.jsx)(o.strong,{children:"Archivo"})," o la barra de herramientas (",(0,r.jsx)(o.strong,{children:"Nuevo/Clase..."}),") o en la p\xe1gina ",(0,r.jsx)(o.strong,{children:"M\xe9todos"})," de la ventana ",(0,r.jsx)(o.strong,{children:"Explorador"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["Para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,r.jsx)(o.a,{href:"/docs/es/Concepts/classes",children:"Clases"}),"."]}),"\n",(0,r.jsx)(o.h2,{id:"eliminar-los-m\xe9todos-o-las-clases",children:"Eliminar los m\xe9todos o las clases"}),"\n",(0,r.jsx)(o.p,{children:"Para eliminar un m\xe9todo o clase existente, puede:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["en su disco, elimine el archivo ",(0,r.jsx)(o.em,{children:".4dm"}),' de la carpeta "Sources",']}),"\n",(0,r.jsxs)(o.li,{children:["en el Explorador 4D, seleccione el m\xe9todo y haga clic ",(0,r.jsx)(o.img,{src:s(849564).Z+"",width:"19",height:"18"})," o elija ",(0,r.jsx)(o.strong,{children:"Mover a la Papelera"})," en el men\xfa contextual."]}),"\n"]}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsxs)(o.p,{children:["Para eliminar un m\xe9todo objeto, seleccione ",(0,r.jsx)(o.strong,{children:"Borrar el m\xe9todo de objeto"})," en el ",(0,r.jsx)(o.a,{href:"/docs/es/FormEditor/overview",children:"editor de formularios"})," (men\xfa ",(0,r.jsx)(o.strong,{children:"Objeto"})," o men\xfa contextual)."]}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"importar-y-exportar-el-c\xf3digo",children:"Importar y exportar el c\xf3digo"}),"\n",(0,r.jsxs)(o.p,{children:["Puede importar y exportar un m\xe9todo o un c\xf3digo de una clase en forma de archivo. Estos comandos se encuentran en el men\xfa ",(0,r.jsx)(o.strong,{children:"M\xe9todo"})," del editor de c\xf3digo ."]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["Cuando se selecciona el comando ",(0,r.jsx)(o.strong,{children:"Exportar el m\xe9todo..."}),", aparece una caja de di\xe1logo est\xe1ndar para guardar archivos, que permite elegir el nombre, la ubicaci\xf3n y el formato del archivo de exportaci\xf3n (ver abajo). Al igual que con la impresi\xf3n, la exportaci\xf3n no tiene en cuenta el estado contra\xeddo de las estructuras de c\xf3digo y se exporta todo el c\xf3digo."]}),"\n",(0,r.jsxs)(o.li,{children:["Cuando se selecciona el comando ",(0,r.jsx)(o.strong,{children:"Importar el m\xe9todo..."}),", aparece una caja de di\xe1logo est\xe1ndar de apertura de archivos que permite designar el archivo a importar. La importaci\xf3n sustituye el texto seleccionado en el m\xe9todo. Para reemplazar un m\xe9todo existente por un m\xe9todo importado, seleccione todo el contenido del m\xe9todo antes de realizar la importaci\xf3n."]}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"La funci\xf3n de importaci\xf3n/exportaci\xf3n es multiplataforma: un m\xe9todo exportado en Mac OS puede ser importado en Windows y viceversa; 4D se encarga de la conversi\xf3n de caracteres cuando es necesario."}),"\n",(0,r.jsx)(o.p,{children:"4D puede exportar e importar m\xe9todos en dos formatos:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["M\xe9todo 4D (extensi\xf3n ",(0,r.jsx)(o.em,{children:".c4d"}),"): en este formato, los m\xe9todos se exportan codificados. Los nombres de los objetos est\xe1n tokenizados (se transforman en referencias). Este formato se utiliza especialmente para el intercambio de m\xe9todos entre las aplicaciones 4D y los plug-ins en diferentes idiomas. Por el contrario, no es posible visualizarlos en un editor de texto."]}),"\n",(0,r.jsxs)(o.li,{children:["Texto (extensi\xf3n ",(0,r.jsx)(o.em,{children:".txt"}),"): en este formato, los m\xe9todos se exportan en forma de texto. En este caso, los m\xe9todos se pueden leer con un editor de texto est\xe1ndar o con una herramienta de control de c\xf3digo fuente."]}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"propiedades-del-m\xe9todo-proyecto",children:"Propiedades del m\xe9todo proyecto"}),"\n",(0,r.jsx)(o.p,{children:"Despu\xe9s de crear un m\xe9todo proyecto, puede cambiar su nombre y modificar sus propiedades. Las propiedades de los m\xe9todos proyecto se refieren principalmente a sus condiciones de acceso y de seguridad (acceso de usuarios, servidores integrados o servicios), as\xed como a su modo de ejecuci\xf3n."}),"\n",(0,r.jsx)(o.p,{children:"Los otros tipos de m\xe9todos no tienen propiedades espec\xedficas. Sus propiedades est\xe1n relacionadas con las de los objetos a los que est\xe1n unidos."}),"\n",(0,r.jsxs)(o.p,{children:["Para mostrar la caja de di\xe1logo ",(0,r.jsx)(o.strong,{children:"Propiedades del m\xe9todo"})," para un m\xe9todo proyecto, puede:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["en el ",(0,r.jsx)(o.a,{href:"/docs/es/code-editor/write-class-method",children:"editor de c\xf3digo"}),", seleccione el comando ",(0,r.jsx)(o.strong,{children:"Propiedades del m\xe9todo..."})," en el men\xfa ",(0,r.jsx)(o.strong,{children:"M\xe9todo"}),","]}),"\n",(0,r.jsxs)(o.li,{children:["o en la p\xe1gina ",(0,r.jsx)(o.strong,{children:"M\xe9todos"})," del Explorador, ",(0,r.jsx)(o.strong,{children:"haga clic derecho"})," en el m\xe9todo proyecto y seleccione ",(0,r.jsx)(o.strong,{children:"Propiedades del m\xe9todo..."})," en el men\xfa contextual o en el men\xfa de opciones."]}),"\n"]}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsxs)(o.p,{children:["Una funci\xf3n de par\xe1metrizaci\xf3n global permite modificar una propiedad para todos o parte de los m\xe9todos proyecto de la base en una sola operaci\xf3n (ver ",(0,r.jsx)(o.a,{href:"#batch-setting-for-method-attributes",children:"Modificar atributos de los m\xe9todos globalmente"}),")."]}),"\n"]}),"\n",(0,r.jsx)(o.h3,{id:"nombre",children:"Nombre"}),"\n",(0,r.jsxs)(o.p,{children:["Puede cambiar el nombre de un m\xe9todo proyecto en el \xe1rea ",(0,r.jsx)(o.strong,{children:"Nombre"})," de la ventana ",(0,r.jsx)(o.strong,{children:"Propiedades del m\xe9todo"})," o en el Explorador."]}),"\n",(0,r.jsxs)(o.p,{children:["El nuevo nombre debe cumplir con las reglas de denominaci\xf3n de 4D (ver ",(0,r.jsx)(o.a,{href:"/docs/es/Concepts/identifiers",children:"Identificadores"}),"). Si ya existe un m\xe9todo con el mismo nombre, 4D muestra un mensaje diciendo que el nombre del m\xe9todo ya ha sido utilizado. Si es necesario, 4D ordena de nuevo la lista de m\xe9todos."]}),"\n",(0,r.jsxs)(o.admonition,{type:"caution",children:[(0,r.jsxs)(o.p,{children:["Cambiar el nombre de un m\xe9todo ya utilizado en la base de datos puede invalidar cualquier m\xe9todo o f\xf3rmula que utilice el antiguo nombre de m\xe9todo y corre el riesgo de interrumpir el funcionamiento de la aplicaci\xf3n. Puede cambiar el nombre del m\xe9todo manualmente, pero se recomienda utilizar la funci\xf3n de cambio de nombre de los m\xe9todos proyecto, descrita en ",(0,r.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Renaming.300-5851389.en.html",children:"Renombrar"}),". Con esta funci\xf3n, puede actualizar autom\xe1ticamente el nombre siempre que se llame al m\xe9todo en todo el entorno Dise\xf1o."]}),(0,r.jsx)(o.p,{children:"Con 4D Server, el nombre del m\xe9todo se cambia en el servidor cuando se termina de editar. Si m\xe1s de un usuario est\xe1 modificando el nombre del m\xe9todo al mismo tiempo, el nombre final del m\xe9todo ser\xe1 el especificado por el \xfaltimo usuario en terminar de editarlo. Es posible que desee designar un propietario del m\xe9todo para que s\xf3lo ciertos usuarios puedan cambiar su nombre"})]}),"\n",(0,r.jsx)(o.admonition,{type:"info",children:(0,r.jsx)(o.p,{children:"Los m\xe9todos base no pueden ser renombrados. Lo mismo ocurre con los triggers, los m\xe9todos formulario y los m\xe9todos objeto, que est\xe1n vinculados a los objetos y toman sus nombre del objeto en cuesti\xf3n."})}),"\n",(0,r.jsx)(o.h3,{id:"atributos",children:"Atributos"}),"\n",(0,r.jsx)(o.p,{children:"Puede controlar c\xf3mo se utilizan y/o llaman los m\xe9todos proyecto en diferentes contextos utilizando atributos. Tenga en cuenta que puede definir los atributos globalmente para una selecci\xf3n de m\xe9todos proyecto utilizando el Explorador (ver la secci\xf3n siguiente)."}),"\n",(0,r.jsx)(o.h4,{id:"invisible",children:"Invisible"}),"\n",(0,r.jsxs)(o.p,{children:["Si no quiere que los usuarios puedan ejecutar un m\xe9todo proyecto utilizando el comando ",(0,r.jsx)(o.strong,{children:"M\xe9todo..."})," del men\xfa ",(0,r.jsx)(o.strong,{children:"Ejecuci\xf3n"}),", puede hacerlo Invisible marcando esta opci\xf3n. Un m\xe9todo invisible no aparece en la caja de di\xe1logo de ejecuci\xf3n del m\xe9todo."]}),"\n",(0,r.jsx)(o.p,{children:"Cuando se hace invisible un m\xe9todo proyecto, sigue estando disponible para los desarrolladores de la base. Permanece en la lista de m\xe9todos del Explorador y del Editor de c\xf3digo."}),"\n",(0,r.jsx)(o.h4,{id:"compartido-por-los-componentes-y-la-base-local",children:"Compartido por los componentes y la base local"}),"\n",(0,r.jsx)(o.p,{children:"Este atributo se utiliza en el marco de los componentes. Cuando est\xe1 marcada, indica que el m\xe9todo estar\xe1 disponible para los componentes cuando la aplicaci\xf3n se utilice como base local. Por otro lado, cuando la aplicaci\xf3n se utiliza como un componente, el m\xe9todo estar\xe1 disponible para las bases locales."}),"\n",(0,r.jsxs)(o.p,{children:["Para m\xe1s informaci\xf3n sobre los componentes, consulte el cap\xedtulo ",(0,r.jsx)(o.a,{href:"/docs/es/Extensions/develop-components",children:"Desarrollo e instalaci\xf3n de componentes 4D"}),"."]}),"\n",(0,r.jsx)(o.h4,{id:"ejecutar-en-el-servidor",children:"Ejecutar en el servidor"}),"\n",(0,r.jsx)(o.p,{children:"Este atributo s\xf3lo se tiene en cuenta para una aplicaci\xf3n 4D en modo cliente-servidor. Cuando esta opci\xf3n est\xe1 marcada, el m\xe9todo del proyecto se ejecuta siempre en el servidor, independientemente de c\xf3mo se llame."}),"\n",(0,r.jsxs)(o.p,{children:["Para m\xe1s informaci\xf3n sobre esta opci\xf3n, consulte ",(0,r.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R6/4D/19-R6/Execute-on-Server-attribute.300-5941841.en.html",children:"Atributo Ejecutar en el servidor"}),"."]}),"\n",(0,r.jsx)(o.h3,{id:"modo-ejecuci\xf3n",children:"Modo Ejecuci\xf3n"}),"\n",(0,r.jsxs)(o.p,{children:["Esta opci\xf3n permite declarar el m\xe9todo elegible para la ejecuci\xf3n en modo apropiativo. Se describe en la ",(0,r.jsx)(o.a,{href:"/docs/es/Develop/processes#preemptive-processes",children:"secci\xf3n Procesos apropiativos"}),"."]}),"\n",(0,r.jsx)(o.h3,{id:"disponibilidad",children:"Disponibilidad"}),"\n",(0,r.jsx)(o.p,{children:"Los atributos de disponibilidad especifican los servicios externos que pueden llamar expl\xedcitamente al m\xe9todo."}),"\n",(0,r.jsx)(o.h4,{id:"web-services",children:"Web Services"}),"\n",(0,r.jsxs)(o.p,{children:["Este atributo le permite publicar el m\xe9todo actual como servicio web accesible a trav\xe9s de peticiones SOAP. Para m\xe1s informaci\xf3n, consulte el cap\xedtulo ",(0,r.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Publication-and-use-of-Web-Services.200-5851321.en.html",children:"Publicaci\xf3n y uso de los servicios web"}),". Cuando esta opci\xf3n est\xe1 marcada, se activa la opci\xf3n ",(0,r.jsx)(o.strong,{children:"Publicado en WSDL"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["En el Explorador, los m\xe9todos proyecto que se ofrecen como Servicio Web reciben un icono espec\xedfico ",(0,r.jsx)(o.img,{src:"https://doc.4d.com/4Dv19R5/picture/440512/pict440512.fr.png",alt:""}),"."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota:"})," no es posible publicar un m\xe9todo como servicio web si su nombre incluye caracteres que no cumplen con la nomenclatura XML (por ejemplo espacios). Si el nombre del m\xe9todo no cumple con esto, 4D no asigna la propiedad."]}),"\n",(0,r.jsx)(o.h4,{id:"publicado-en-wsdl",children:"Publicado en WSDL"}),"\n",(0,r.jsxs)(o.p,{children:['Este atributo s\xf3lo est\xe1 disponible si el atributo "Servicio Web" est\xe1 marcado. Permite incluir el m\xe9todo actual en el WSDL de la aplicaci\xf3n 4D. Para obtener m\xe1s informaci\xf3n al respecto, consulte ',(0,r.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Publishing-a-Web-Service-with-4D.300-5851558.en.html#502689",children:"Generaci\xf3n del WSDL"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["En el Explorador, los m\xe9todos proyecto que se ofrecen como Servicio Web y se publican en WSDL reciben un icono espec\xedfico ",(0,r.jsx)(o.img,{src:"https://doc.4d.com/4Dv19R5/picture/440526/pict440526.fr.png",alt:""}),"."]}),"\n",(0,r.jsx)(o.h4,{id:"etiquetas-4d-y-urls-4daction",children:"Etiquetas 4D y URLs (4DACTION...)"}),"\n",(0,r.jsxs)(o.p,{children:["Esta opci\xf3n se utiliza para reforzar la seguridad del servidor web 4D: cuando no est\xe1 marcada, el m\xe9todo proyecto no puede ejecutarse a trav\xe9s de una petici\xf3n HTTP que contenga la URL especial ",(0,r.jsx)(o.a,{href:"/docs/es/WebServer/httpRequests#4daction",children:"4DACTION"})," utilizada para llamar a los m\xe9todos 4D, ni las etiquetas especiales ",(0,r.jsx)(o.a,{href:"/docs/es/Tags/transformation-tags",children:"4DSCRIPT, 4DTEXT y 4DHTML"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["En el Explorador, los m\xe9todos proyecto con este atributo reciben un icono espec\xedfico ",(0,r.jsx)(o.img,{src:"https://doc.4d.com/4Dv19R5/picture/440496/pict440496.fr.png",alt:""}),"."]}),"\n",(0,r.jsx)(o.p,{children:"Por razones de seguridad, esta opci\xf3n est\xe1 desmarcada por defecto. Cada m\xe9todo que pueda ejecutarse utilizando las URLs y las etiquetas especiales debe indicarse individualmente."}),"\n",(0,r.jsx)(o.h4,{id:"sql",children:"SQL"}),"\n",(0,r.jsx)(o.p,{children:"Cuando est\xe1 marcada, esta opci\xf3n permite que el m\xe9todo proyecto sea ejecutado por el motor SQL de 4D. Por defecto, no est\xe1 seleccionado, lo que significa que, a menos que se autorice expl\xedcitamente, los m\xe9todos proyecto de 4D est\xe1n protegidos y no pueden ser llamados por el motor SQL de 4D."}),"\n",(0,r.jsxs)(o.p,{children:["Esta propiedad se aplica a todas las consultas SQL internas y externas, ejecutadas a trav\xe9s del controlador ODBC, c\xf3digo SQL insertado entre las etiquetas ",(0,r.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Begin-SQL.301-5830074.en.html",children:"Begin SQL"}),"/",(0,r.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/End-SQL.301-5830073.en.html",children:"End SQL"})," o el comando ",(0,r.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/QUERY-BY-SQL.301-5830079.en.html",children:"QUERY BY SQL"}),"."]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.strong,{children:"Notas:"})}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:'Aunque un m\xe9todo tenga el atributo "SQL", los derechos de acceso definidos a nivel de las propiedades de la base y de las propiedades del m\xe9todo se tienen en cuenta para la ejecuci\xf3n del m\xe9todo.'}),"\n",(0,r.jsxs)(o.li,{children:["La funci\xf3n ODBC ",(0,r.jsx)(o.strong,{children:"SQLProcedure"}),' s\xf3lo devuelve los m\xe9todos proyecto con el atributo "SQL".']}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["Para m\xe1s informaci\xf3n, consulte ",(0,r.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/4D-SQL-engine-implementation.300-5871873.en.html",children:"Implementaci\xf3n del motor SQL de 4D"})," en el manual SQL de 4D."]}),"\n",(0,r.jsx)(o.h4,{id:"servidor-rest",children:"Servidor REST"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsxs)(o.em,{children:["Esta opci\xf3n est\xe1 obsoleta. La llamada a c\xf3digo a trav\xe9s de llamadas REST s\xf3lo es compatible con ",(0,r.jsx)(o.a,{href:"/docs/es/REST/classFunctions",children:"Funciones clase modelo de datos ORDA"}),"."]})}),"\n",(0,r.jsx)(o.h4,{id:"modificar-de-atributos-globalmente",children:"Modificar de atributos globalmente"}),"\n",(0,r.jsx)(o.p,{children:'Mediante el cuadro de di\xe1logo "Atributos de los m\xe9todos", puede modificar un atributo (Invisible, Ofrecido como servicio web, etc.) para todos o parte de los m\xe9todos proyecto base en una sola operaci\xf3n. Esta funcionalidad es especialmente \xfatil para modificar los atributos de un gran n\xfamero de m\xe9todos proyecto. Tambi\xe9n puede utilizarse durante el desarrollo para aplicar r\xe1pidamente los atributos comunes a grupos de m\xe9todos similares.'}),"\n",(0,r.jsx)(o.p,{children:"Para la configuraci\xf3n global de los atributos del m\xe9todo:"}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["En la p\xe1gina ",(0,r.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Methods-Page.300-5851337.en.html",children:"M\xe9todos"})," del Explorador 4D, despliegue el men\xfa de opciones y elija el comando ",(0,r.jsx)(o.strong,{children:"Modificar atributos globalmente..."}),". Aparece la caja de di\xe1logo ",(0,r.jsx)(o.strong,{children:"Atributos de los m\xe9todos"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsx)(o.p,{children:'En el \xe1rea "Nombre del m\xe9todo coincidente:", introduzca una cadena que le permita designar los m\xe9todos que desea modificar globalmente.\nLa cadena de caracteres se utiliza como criterio de b\xfasqueda para los nombres de los m\xe9todos.'}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Utilice el caracter comod\xedn @ para ayudar a definir los grupos de m\xe9todos:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["Para designar m\xe9todos cuyos nombres empiezan por..., escriba @ al final de la cadena. Por ejemplo: ",(0,r.jsx)(o.code,{children:"web@"})]}),"\n",(0,r.jsxs)(o.li,{children:["Para designar los m\xe9todos cuyos nombres contengan..., escriba @ en medio de la cadena. Por ejemplo: ",(0,r.jsx)(o.code,{children:"web@write"})]}),"\n",(0,r.jsxs)(o.li,{children:["Para designar los m\xe9todos cuyos nombres terminan en..., escriba @ al inicio de la cadena. Por ejemplo: ",(0,r.jsx)(o.code,{children:"@write"})]}),"\n",(0,r.jsx)(o.li,{children:"Para designar todos los m\xe9todos, basta con escribir @ en el \xe1rea."}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.strong,{children:"Notas:"})}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"La b\xfasqueda no tiene en cuenta las may\xfasculas/min\xfasculas."}),"\n",(0,r.jsxs)(o.li,{children:["Puede introducir varios caracteres @ en la cadena, por ejemplo ",(0,r.jsx)(o.code,{children:"dtro_@web@pro.@"})]}),"\n"]}),"\n",(0,r.jsxs)(o.ol,{start:"3",children:["\n",(0,r.jsxs)(o.li,{children:['En el \xe1rea "Atributo a modificar", elija un atributo de la lista desplegable y, a continuaci\xf3n, haga clic en el bot\xf3n radio ',(0,r.jsx)(o.strong,{children:"True"})," o ",(0,r.jsx)(o.strong,{children:"False"})," correspondiente al valor que debe aplicarse."]}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota:"}),' si el atributo "Publicado en WSDL" se establece como True, s\xf3lo se aplicar\xe1 a los m\xe9todos proyecto que ya contengan el atributo "Ofrecido como servicio web".']}),"\n",(0,r.jsxs)(o.ol,{start:"4",children:["\n",(0,r.jsxs)(o.li,{children:["Haga clic en ",(0,r.jsx)(o.strong,{children:"Aplicar"}),". La modificaci\xf3n se aplica instant\xe1neamente a todos los m\xe9todos proyecto designados por la cadena de caracteres introducida."]}),"\n"]})]})}function m(e={}){let{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},849564:function(e,o,s){s.d(o,{Z:function(){return n}});let n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAIAAAA2bnI+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAACnSURBVDhP1ctPC4JAEAXw+YJlsML2dYMigkyDwIxAMkJz7Z9lZaceu7BevDSeGn6H3Zn3qKw+PB2a13vNQ+dbzdOhqS5vHjqeXjyUqicPHfLKSNJyqEdK6bpuXw8e+GKwR8CGoWlud0oIMdDjOE5PDx5mgxMCNgy0zx7GJs5ni/VoErTCCQEbBvJDZXirbOon43ncCicEbBia5q/+rBmEBQ8to4IjKr7x0nj9UM5kBgAAAABJRU5ErkJggg=="},250065:function(e,o,s){s.d(o,{Z:function(){return d},a:function(){return a}});var n=s(667294);let r={},i=n.createContext(r);function a(e){let o=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);