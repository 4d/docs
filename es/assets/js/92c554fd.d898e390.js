"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37580"],{958497:function(e,o,a){a.r(o),a.d(o,{metadata:()=>s,contentTitle:()=>d,default:()=>m,assets:()=>l,toc:()=>t,frontMatter:()=>r});var s=JSON.parse('{"id":"code-editor/overview","title":"Gesti\xf3n del c\xf3digo","description":"El c\xf3digo 4D utilizado en su aplicaci\xf3n est\xe1 escrito en los m\xe9todos y las clases.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20/code-editor/overview.md","sourceDirName":"code-editor","slug":"/code-editor/overview","permalink":"/docs/es/20/code-editor/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20code-editor%2Foverview.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"overview","title":"Gesti\xf3n del c\xf3digo"},"sidebar":"docs","previous":{"title":"ZIPFolder","permalink":"/docs/es/20/API/ZipFolderClass"},"next":{"title":"Editor de c\xf3digo","permalink":"/docs/es/20/code-editor/write-class-method"}}'),n=a("785893"),i=a("250065");let r={id:"overview",title:"Gesti\xf3n del c\xf3digo"},d=void 0,l={},t=[{value:"Creaci\xf3n de m\xe9todos",id:"creaci\xf3n-de-m\xe9todos",level:2},{value:"Crear las clases",id:"crear-las-clases",level:2},{value:"Eliminar los m\xe9todos o las clases",id:"eliminar-los-m\xe9todos-o-las-clases",level:2},{value:"Importar y exportar el c\xf3digo",id:"importar-y-exportar-el-c\xf3digo",level:2},{value:"Propiedades del m\xe9todo proyecto",id:"propiedades-del-m\xe9todo-proyecto",level:2},{value:"Nombre",id:"nombre",level:3},{value:"Atributos",id:"atributos",level:3},{value:"Invisible",id:"invisible",level:4},{value:"Compartido por los componentes y la base local",id:"compartido-por-los-componentes-y-la-base-local",level:4},{value:"Ejecutar en el servidor",id:"ejecutar-en-el-servidor",level:4},{value:"Modo Ejecuci\xf3n",id:"modo-ejecuci\xf3n",level:3},{value:"Disponibilidad",id:"disponibilidad",level:3},{value:"Web Services",id:"web-services",level:4},{value:"Publicado en WSDL",id:"publicado-en-wsdl",level:4},{value:"Etiquetas 4D y URLs (4DACTION...)",id:"etiquetas-4d-y-urls-4daction",level:4},{value:"SQL",id:"sql",level:4},{value:"Servidor REST",id:"servidor-rest",level:4},{value:"Modificar de atributos globalmente",id:"modificar-de-atributos-globalmente",level:4}];function c(e){let o={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:["El c\xf3digo 4D utilizado en su aplicaci\xf3n est\xe1 escrito en los ",(0,n.jsx)(o.a,{href:"/docs/es/20/Concepts/methods",children:"m\xe9todos"})," y las ",(0,n.jsx)(o.a,{href:"/docs/es/20/Concepts/classes",children:"clases"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["El IDE de 4D le ofrece varias funcionalidades para crear, editar, exportar o eliminar su c\xf3digo. Por lo general, utilizar\xe1 el ",(0,n.jsx)(o.a,{href:"/docs/es/20/code-editor/write-class-method",children:"editor de c\xf3digo de 4D"})," para trabajar con su c\xf3digo."]}),"\n",(0,n.jsx)(o.h2,{id:"creaci\xf3n-de-m\xe9todos",children:"Creaci\xf3n de m\xe9todos"}),"\n",(0,n.jsxs)(o.p,{children:["Un m\xe9todo en 4D se almacena en un archivo ",(0,n.jsx)(o.strong,{children:".4dm"})," ubicado en la carpeta correspondiente de la carpeta ",(0,n.jsx)(o.a,{href:"/docs/es/20/Project/architecture#sources",children:(0,n.jsx)(o.code,{children:"/Project/Sources/"})}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["Puede crear ",(0,n.jsx)(o.a,{href:"/docs/es/20/Concepts/methods",children:"varios tipos de m\xe9todos"}),":"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Todos los tipos de m\xe9todos pueden crearse o abrirse desde la ventana del ",(0,n.jsx)(o.strong,{children:"Explorador"})," (excepto los m\xe9todos Objeto que se gestionan desde el ",(0,n.jsx)(o.a,{href:"/docs/es/20/FormEditor/overview",children:"editor de formularios"}),")."]}),"\n",(0,n.jsxs)(o.li,{children:["Los m\xe9todos proyecto tambi\xe9n pueden crearse o abrirse desde el men\xfa ",(0,n.jsx)(o.strong,{children:"Archivo"})," o la barra de herramientas (",(0,n.jsx)(o.strong,{children:"Nuevo/M\xe9todo..."})," o ",(0,n.jsx)(o.strong,{children:"Abrir/M\xe9todo..."}),") o utilizando los accesos directos de la ventana del ",(0,n.jsx)(o.a,{href:"/docs/es/20/code-editor/write-class-method#shortcuts",children:"editor de c\xf3digo"}),"."]}),"\n",(0,n.jsx)(o.li,{children:"Los triggers tambi\xe9n pueden crearse o abrirse desde el editor de Estructura."}),"\n",(0,n.jsxs)(o.li,{children:["Los m\xe9todos formulario tambi\xe9n pueden crearse o abrirse desde el ",(0,n.jsx)(o.a,{href:"/docs/es/20/FormEditor/overview",children:"editor de formularios"}),"."]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"crear-las-clases",children:"Crear las clases"}),"\n",(0,n.jsxs)(o.p,{children:["Una clase usuario en 4D est\xe1 definida por un archivo de m\xe9todo espec\xedfico (",(0,n.jsx)(o.strong,{children:".4dm"}),"), almacenado en la carpeta ",(0,n.jsx)(o.a,{href:"/docs/es/20/Project/architecture#sources",children:(0,n.jsx)(o.code,{children:"/Project/Sources/Classes/"})}),". El nombre del archivo es el nombre de la clase."]}),"\n",(0,n.jsxs)(o.p,{children:["Puede crear un archivo de clase desde el men\xfa ",(0,n.jsx)(o.strong,{children:"Archivo"})," o la barra de herramientas (",(0,n.jsx)(o.strong,{children:"Nuevo/Clase..."}),") o en la p\xe1gina ",(0,n.jsx)(o.strong,{children:"M\xe9todos"})," de la ventana ",(0,n.jsx)(o.strong,{children:"Explorador"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["Para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,n.jsx)(o.a,{href:"/docs/es/20/Concepts/classes",children:"Clases"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"eliminar-los-m\xe9todos-o-las-clases",children:"Eliminar los m\xe9todos o las clases"}),"\n",(0,n.jsx)(o.p,{children:"Para eliminar un m\xe9todo o clase existente, puede:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["en su disco, elimine el archivo ",(0,n.jsx)(o.em,{children:".4dm"}),' de la carpeta "Sources",']}),"\n",(0,n.jsxs)(o.li,{children:["en el Explorador de 4D, seleccione el m\xe9todo o la clase y haga clic ",(0,n.jsx)(o.img,{src:a(953054).Z+"",width:"19",height:"18"})," o elija ",(0,n.jsx)(o.strong,{children:"Mover a la Papelera"})," en el men\xfa contextual."]}),"\n"]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsxs)(o.p,{children:["Para eliminar un m\xe9todo objeto, seleccione ",(0,n.jsx)(o.strong,{children:"Borrar el m\xe9todo de objeto"})," en el ",(0,n.jsx)(o.a,{href:"/docs/es/20/FormEditor/overview",children:"editor de formularios"})," (men\xfa ",(0,n.jsx)(o.strong,{children:"Objeto"})," o men\xfa contextual)."]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"importar-y-exportar-el-c\xf3digo",children:"Importar y exportar el c\xf3digo"}),"\n",(0,n.jsxs)(o.p,{children:["Puede importar y exportar un m\xe9todo o un c\xf3digo de una clase en forma de archivo. Estos comandos se encuentran en el men\xfa ",(0,n.jsx)(o.strong,{children:"M\xe9todo"})," del editor de c\xf3digo."]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Cuando se selecciona el comando ",(0,n.jsx)(o.strong,{children:"Exportar el m\xe9todo..."}),", aparece una caja de di\xe1logo est\xe1ndar para guardar archivos, que permite elegir el nombre, la ubicaci\xf3n y el formato del archivo de exportaci\xf3n (ver abajo). Al igual que con la impresi\xf3n, la exportaci\xf3n no tiene en cuenta el estado contra\xeddo de las estructuras de c\xf3digo y se exporta todo el c\xf3digo."]}),"\n",(0,n.jsxs)(o.li,{children:["Cuando se selecciona el comando ",(0,n.jsx)(o.strong,{children:"Importar el m\xe9todo..."}),", aparece una caja de di\xe1logo est\xe1ndar de apertura de archivos que permite designar el archivo a importar. La importaci\xf3n sustituye el texto seleccionado en el m\xe9todo. Para reemplazar un m\xe9todo existente por un m\xe9todo importado, seleccione todo el contenido del m\xe9todo antes de realizar la importaci\xf3n."]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"La funci\xf3n de importaci\xf3n/exportaci\xf3n es multiplataforma: un m\xe9todo exportado en Mac OS puede ser importado en Windows y viceversa; 4D se encarga de la conversi\xf3n de caracteres cuando es necesario."}),"\n",(0,n.jsx)(o.p,{children:"4D puede exportar e importar m\xe9todos en dos formatos:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["M\xe9todo 4D (extensi\xf3n ",(0,n.jsx)(o.em,{children:".c4d"}),"): en este formato, los m\xe9todos se exportan codificados. Los nombres de los objetos est\xe1n tokenizados (se transforman en referencias). Este formato se utiliza especialmente para el intercambio de m\xe9todos entre las aplicaciones 4D y los plug-ins en diferentes idiomas. Por el contrario, no es posible visualizarlos en un editor de texto."]}),"\n",(0,n.jsxs)(o.li,{children:["Texto (extensi\xf3n ",(0,n.jsx)(o.em,{children:".txt"}),"): en este formato, los m\xe9todos se exportan en forma de texto. En este caso, los m\xe9todos se pueden leer con un editor de texto est\xe1ndar o con una herramienta de control de c\xf3digo fuente."]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"propiedades-del-m\xe9todo-proyecto",children:"Propiedades del m\xe9todo proyecto"}),"\n",(0,n.jsx)(o.p,{children:"Despu\xe9s de crear un m\xe9todo proyecto, puede cambiar su nombre y modificar sus propiedades. Las propiedades de los m\xe9todos proyecto se refieren principalmente a sus condiciones de acceso y de seguridad (acceso de usuarios, servidores integrados o servicios), as\xed como a su modo de ejecuci\xf3n."}),"\n",(0,n.jsx)(o.p,{children:"Los otros tipos de m\xe9todos no tienen propiedades espec\xedficas. Sus propiedades est\xe1n relacionadas con las de los objetos a los que est\xe1n unidos."}),"\n",(0,n.jsxs)(o.p,{children:["Para mostrar la caja de di\xe1logo ",(0,n.jsx)(o.strong,{children:"Propiedades del m\xe9todo"})," para un m\xe9todo proyecto, puede:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["en el ",(0,n.jsx)(o.a,{href:"/docs/es/20/code-editor/write-class-method",children:"editor de c\xf3digo"}),", seleccione el comando ",(0,n.jsx)(o.strong,{children:"Propiedades del m\xe9todo..."})," en el men\xfa ",(0,n.jsx)(o.strong,{children:"M\xe9todo"}),","]}),"\n",(0,n.jsxs)(o.li,{children:["o en la p\xe1gina ",(0,n.jsx)(o.strong,{children:"M\xe9todos"})," del Explorador, ",(0,n.jsx)(o.strong,{children:"haga clic derecho"})," en el m\xe9todo proyecto y seleccione ",(0,n.jsx)(o.strong,{children:"Propiedades del m\xe9todo..."})," en el men\xfa contextual o en el men\xfa de opciones."]}),"\n"]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsxs)(o.p,{children:["Una funci\xf3n de par\xe1metrizaci\xf3n global permite modificar una propiedad para todos o parte de los m\xe9todos proyecto de la base en una sola operaci\xf3n (ver ",(0,n.jsx)(o.a,{href:"#batch-setting-for-method-attributes",children:"Modificar atributos de los m\xe9todos globalmente"}),")."]}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"nombre",children:"Nombre"}),"\n",(0,n.jsxs)(o.p,{children:["Puede cambiar el nombre de un m\xe9todo proyecto en el \xe1rea ",(0,n.jsx)(o.strong,{children:"Nombre"})," de la ventana ",(0,n.jsx)(o.strong,{children:"Propiedades del m\xe9todo"})," o en el Explorador."]}),"\n",(0,n.jsxs)(o.p,{children:["El nuevo nombre debe cumplir con las reglas de denominaci\xf3n de 4D (ver ",(0,n.jsx)(o.a,{href:"/docs/es/20/Concepts/identifiers",children:"Identificadores"}),"). Si ya existe un m\xe9todo con el mismo nombre, 4D muestra un mensaje diciendo que el nombre del m\xe9todo ya ha sido utilizado. Si es necesario, 4D ordena de nuevo la lista de m\xe9todos."]}),"\n",(0,n.jsxs)(o.admonition,{type:"caution",children:[(0,n.jsxs)(o.p,{children:["Cambiar el nombre de un m\xe9todo ya utilizado en la base de datos puede invalidar cualquier m\xe9todo o f\xf3rmula que utilice el antiguo nombre de m\xe9todo y corre el riesgo de interrumpir el funcionamiento de la aplicaci\xf3n. Puede cambiar el nombre del m\xe9todo manualmente, pero se recomienda utilizar la funci\xf3n de cambio de nombre de los m\xe9todos proyecto, descrita en ",(0,n.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Renaming.300-5851389.en.html",children:"Renombrar"}),". Con esta funci\xf3n, puede actualizar autom\xe1ticamente el nombre siempre que se llame al m\xe9todo en todo el entorno Dise\xf1o."]}),(0,n.jsx)(o.p,{children:"Con 4D Server, el nombre del m\xe9todo se cambia en el servidor cuando se termina de editar. Si m\xe1s de un usuario est\xe1 modificando el nombre del m\xe9todo al mismo tiempo, el nombre final del m\xe9todo ser\xe1 el especificado por el \xfaltimo usuario en terminar de editarlo. Es posible que desee designar un propietario del m\xe9todo para que s\xf3lo ciertos usuarios puedan cambiar su nombre"})]}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsx)(o.p,{children:"Los m\xe9todos base no pueden ser renombrados. Lo mismo ocurre con los triggers, los m\xe9todos formulario y los m\xe9todos objeto, que est\xe1n vinculados a los objetos y toman sus nombre del objeto en cuesti\xf3n."})}),"\n",(0,n.jsx)(o.h3,{id:"atributos",children:"Atributos"}),"\n",(0,n.jsx)(o.p,{children:"Puede controlar c\xf3mo se utilizan y/o llaman los m\xe9todos proyecto en diferentes contextos utilizando atributos. Tenga en cuenta que puede definir los atributos globalmente para una selecci\xf3n de m\xe9todos proyecto utilizando el Explorador (ver la secci\xf3n siguiente)."}),"\n",(0,n.jsx)(o.h4,{id:"invisible",children:"Invisible"}),"\n",(0,n.jsxs)(o.p,{children:["Si no quiere que los usuarios puedan ejecutar un m\xe9todo proyecto utilizando el comando ",(0,n.jsx)(o.strong,{children:"M\xe9todo..."})," del men\xfa ",(0,n.jsx)(o.strong,{children:"Ejecuci\xf3n"}),", puede hacerlo Invisible marcando esta opci\xf3n. Un m\xe9todo invisible no aparece en la caja de di\xe1logo de ejecuci\xf3n del m\xe9todo."]}),"\n",(0,n.jsx)(o.p,{children:"Cuando se hace invisible un m\xe9todo proyecto, sigue estando disponible para los desarrolladores de la base. Permanece en la lista de m\xe9todos del Explorador y del Editor de c\xf3digo."}),"\n",(0,n.jsx)(o.h4,{id:"compartido-por-los-componentes-y-la-base-local",children:"Compartido por los componentes y la base local"}),"\n",(0,n.jsx)(o.p,{children:"Este atributo se utiliza en el marco de los componentes. Cuando est\xe1 marcada, indica que el m\xe9todo estar\xe1 disponible para los componentes cuando la aplicaci\xf3n se utilice como base local. Por otro lado, cuando la aplicaci\xf3n se utiliza como un componente, el m\xe9todo estar\xe1 disponible para las bases locales."}),"\n",(0,n.jsxs)(o.p,{children:["Para m\xe1s informaci\xf3n sobre los componentes, consulte el cap\xedtulo ",(0,n.jsx)(o.a,{href:"/docs/es/20/Extensions/develop-components",children:"Desarrollo e instalaci\xf3n de componentes 4D"}),"."]}),"\n",(0,n.jsx)(o.h4,{id:"ejecutar-en-el-servidor",children:"Ejecutar en el servidor"}),"\n",(0,n.jsx)(o.p,{children:"Este atributo s\xf3lo se tiene en cuenta para una aplicaci\xf3n 4D en modo cliente-servidor. Cuando esta opci\xf3n est\xe1 marcada, el m\xe9todo del proyecto se ejecuta siempre en el servidor, independientemente de c\xf3mo se llame."}),"\n",(0,n.jsxs)(o.p,{children:["Para m\xe1s informaci\xf3n sobre esta opci\xf3n, consulte ",(0,n.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R6/4D/19-R6/Execute-on-Server-attribute.300-5941841.en.html",children:"Atributo Ejecutar en el servidor"}),"."]}),"\n",(0,n.jsx)(o.h3,{id:"modo-ejecuci\xf3n",children:"Modo Ejecuci\xf3n"}),"\n",(0,n.jsx)(o.p,{children:"Esta opci\xf3n permite declarar el m\xe9todo elegible para la ejecuci\xf3n en modo apropiativo. Por defecto, 4D ejecuta todos los m\xe9todos proyecto de sus aplicaciones en modo cooperativo."}),"\n",(0,n.jsx)(o.p,{children:"Si quiere beneficiarse de la funci\xf3n del modo apropiativo, debe declarar expl\xedcitamente todos los m\xe9todos que quiera que se inicien en modo apropiativo. El compilador verificar\xe1 entonces que estos m\xe9todos sean realmente hilo seguro."}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Nota:"})," la ejecuci\xf3n en modo apropiativo s\xf3lo est\xe1 disponible en modo compilado. Para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,n.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R6/4D/19-R6/Preemptive-4D-processes.300-5911166.en.html",children:"Procesos 4D apropiativos"}),"."]}),"\n",(0,n.jsx)(o.p,{children:"Se ofrecen las siguientes opciones:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Puede ser ejecutado en procesos apropiativo"}),': al marcar esta opci\xf3n, usted declara que el m\xe9todo es capaz de ser ejecutado en un proceso apropiativo y por lo tanto debe ser ejecutado en modo apropiativo siempre que sea posible. La propiedad "preemptive" del m\xe9todo toma el valor "capable".']}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Cuando esta opci\xf3n est\xe1 seleccionada, el compilador de 4D verificar\xe1 que el m\xe9todo es realmente capaz y devolver\xe1 errores si este no es el caso, por ejemplo, si llama directa o indirectamente a comandos o m\xe9todos que no pueden ser ejecutados en modo apropiativo (la cadena de llamadas completa es analizada pero los errores s\xf3lo son reportados al primer nivel). A continuaci\xf3n, puede editar el m\xe9todo para que sea hilo seguro, o seleccionar otra opci\xf3n."}),"\n",(0,n.jsxs)(o.p,{children:['Si la elegibilidad del m\xe9todo apropiativo es aprobada, \xe9ste se etiquetar\xe1 internamente como "thread-safe" y se ejecutar\xe1 en modo apropiativo siempre que se cumplan las condiciones requeridas. Esta propiedad define la elegibilidad del modo apropiativo, pero no garantiza que el m\xe9todo se ejecute realmente en modo apropiativo, ya que este modo de ejecuci\xf3n requiere un contexto espec\xedfico (ver ',(0,n.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Preemptive-4D-processes.300-5830919.en.html#2822148",children:"\xbfCu\xe1ndo se inicia un proceso de forma apropiativa?"}),")."]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"No puede ser ejecutado en procesos apropiativos"}),': marcando esta opci\xf3n, declara que el m\xe9todo nunca debe ser ejecutado en modo apropiativo, y por lo tanto debe ser ejecutado siempre en modo cooperativo, como en versiones anteriores de 4D. La propiedad "preemptive" del m\xe9todo toma el valor "incapable".']}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:'Cuando esta opci\xf3n est\xe1 marcada, el compilador de 4D no verificar\xe1 la capacidad del m\xe9todo para ejecutarse de forma apropiativa; se etiquetar\xe1 autom\xe1ticamente como "thread-unsafe" internamente (incluso si es te\xf3ricamente compatible). Cuando se llama en ejecuci\xf3n, este m\xe9todo "contaminar\xe1" todos los otros m\xe9todos en el mismo hilo, forzando as\xed que este hilo se ejecute en modo cooperativo, incluso si los otros m\xe9todos son hilo-seguro.'}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Indiferente"}),'(por defecto): al marcar esta opci\xf3n, se declara que no se quiere manejar la propiedad del modo apropiativo para el m\xe9todo. La propiedad "preemptive" del m\xe9todo se establece como "indifferent".']}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:'Cuando esta opci\xf3n est\xe1 seleccionada, el compilador de 4D evaluar\xe1 la compatibilidad del m\xe9todo con el modo apropiativo y lo etiquetar\xe1 internamente como "thread-safe" o "thread-unsafe". No se devuelve ning\xfan error relacionado con la ejecuci\xf3n apropiativa. Si el m\xe9todo se eval\xfaa como "thread-safe", en la ejecuci\xf3n no impedir\xe1 el uso del modo apropiativo si se llama en un contexto apropiativo. Por el contrario, si el m\xe9todo se eval\xfaa como "thread-unsafe", en ejecuci\xf3n impedir\xe1 la ejecuci\xf3n del modo apropiativo cuando sea llamado.'}),"\n",(0,n.jsxs)(o.p,{children:["Tenga en cuenta que con esta opci\xf3n, sea cual sea la evaluaci\xf3n de su compatibilidad con el modo apropiativo, el m\xe9todo siempre se ejecutar\xe1 en modo cooperativo cuando sea llamado directamente por 4D como primer m\xe9todo padre (por ejemplo a trav\xe9s del comando ",(0,n.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/New-process.301-5830903.en.html",children:"Nuevo proceso"}),'). Si se marca como "thread-safe" internamente, s\xf3lo se tiene en cuenta cuando se llama desde otros m\xe9todos dentro de una cadena de llamadas.']}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsxs)(o.strong,{children:[(0,n.jsx)(o.em,{children:"Caso particular"}),":"]})," si el m\xe9todo tiene tambi\xe9n la propiedad ",(0,n.jsx)(o.a,{href:"shared-by-components-and-host-database",children:(0,n.jsx)(o.strong,{children:"Compartido entre componentes y base local"})}),", al seleccionar la opci\xf3n ",(0,n.jsx)(o.strong,{children:"Indiferente"})," se etiquetar\xe1 autom\xe1ticamente el m\xe9todo como thread-unsafe. Si quiere que un m\xe9todo de componente compartido sea hilo seguro, debe configurarlo expl\xedcitamente como ",(0,n.jsx)(o.strong,{children:"Puede ejecutarse en procesos apropiativos"}),"."]}),"\n",(0,n.jsx)(o.h3,{id:"disponibilidad",children:"Disponibilidad"}),"\n",(0,n.jsx)(o.p,{children:"Los atributos de disponibilidad especifican los servicios externos que pueden llamar expl\xedcitamente al m\xe9todo."}),"\n",(0,n.jsx)(o.h4,{id:"web-services",children:"Web Services"}),"\n",(0,n.jsxs)(o.p,{children:["Este atributo le permite publicar el m\xe9todo actual como servicio web accesible a trav\xe9s de peticiones SOAP. Para m\xe1s informaci\xf3n, consulte el cap\xedtulo ",(0,n.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Publication-and-use-of-Web-Services.200-5851321.en.html",children:"Publicaci\xf3n y uso de los servicios web"}),". Cuando esta opci\xf3n est\xe1 marcada, se activa la opci\xf3n ",(0,n.jsx)(o.strong,{children:"Publicado en WSDL"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["En el Explorador, los m\xe9todos proyecto que se ofrecen como Servicio Web reciben un icono espec\xedfico ",(0,n.jsx)(o.img,{src:"https://doc.4d.com/4Dv19R5/picture/440512/pict440512.fr.png",alt:""}),"."]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Nota:"})," no es posible publicar un m\xe9todo como servicio web si su nombre incluye caracteres que no cumplen con la nomenclatura XML (por ejemplo espacios). Si el nombre del m\xe9todo no cumple con esto, 4D no asigna la propiedad."]}),"\n",(0,n.jsx)(o.h4,{id:"publicado-en-wsdl",children:"Publicado en WSDL"}),"\n",(0,n.jsxs)(o.p,{children:['Este atributo s\xf3lo est\xe1 disponible si el atributo "Servicio Web" est\xe1 marcado. Permite incluir el m\xe9todo actual en el WSDL de la aplicaci\xf3n 4D. Para obtener m\xe1s informaci\xf3n al respecto, consulte ',(0,n.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Publishing-a-Web-Service-with-4D.300-5851558.en.html#502689",children:"Generaci\xf3n del WSDL"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["En el Explorador, los m\xe9todos proyecto que se ofrecen como Servicio Web y se publican en el WSDL reciben un icono espec\xedfico ",(0,n.jsx)(o.img,{src:"https://doc.4d.com/4Dv19R5/picture/440526/pict440526.fr.png",alt:""}),"."]}),"\n",(0,n.jsx)(o.h4,{id:"etiquetas-4d-y-urls-4daction",children:"Etiquetas 4D y URLs (4DACTION...)"}),"\n",(0,n.jsxs)(o.p,{children:["Esta opci\xf3n se utiliza para reforzar la seguridad del servidor web 4D: cuando no est\xe1 marcada, el m\xe9todo proyecto no puede ejecutarse a trav\xe9s de una petici\xf3n HTTP que contenga la URL especial ",(0,n.jsx)(o.a,{href:"/docs/es/20/WebServer/httpRequests#4daction",children:"4DACTION"})," utilizada para llamar a los m\xe9todos 4D, ni las etiquetas especiales ",(0,n.jsx)(o.a,{href:"/docs/es/20/Tags/tags",children:"4DSCRIPT, 4DTEXT y 4DHTML"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["En el Explorador, los m\xe9todos proyecto con este atributo reciben un icono espec\xedfico",(0,n.jsx)(o.img,{src:"https://doc.4d.com/4Dv19R5/picture/440496/pict440496.fr.png",alt:""}),"."]}),"\n",(0,n.jsx)(o.p,{children:"Por razones de seguridad, esta opci\xf3n est\xe1 desmarcada por defecto. Cada m\xe9todo que pueda ejecutarse utilizando las URLs y las etiquetas especiales debe indicarse individualmente."}),"\n",(0,n.jsx)(o.h4,{id:"sql",children:"SQL"}),"\n",(0,n.jsx)(o.p,{children:"Cuando est\xe1 marcada, esta opci\xf3n permite que el m\xe9todo proyecto sea ejecutado por el motor SQL de 4D. Por defecto, no est\xe1 seleccionado, lo que significa que, a menos que se autorice expl\xedcitamente, los m\xe9todos proyecto de 4D est\xe1n protegidos y no pueden ser llamados por el motor SQL de 4D."}),"\n",(0,n.jsxs)(o.p,{children:["Esta propiedad se aplica a todas las peticiones SQL internas y externas --- ejecutadas a trav\xe9s del driver ODBC, el c\xf3digo SQL insertado en las etiquetas ",(0,n.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Begin-SQL.301-5830074.en.html",children:"Begin SQL"}),"/",(0,n.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/End-SQL.301-5830073.en.html",children:"End SQL"}),"  o el comando ",(0,n.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/QUERY-BY-SQL.301-5830079.en.html",children:"QUERY BY SQL"}),"."]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Notas:"})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:'Aunque un m\xe9todo tenga el atributo "SQL", los derechos de acceso definidos a nivel de las propiedades de la base y de las propiedades del m\xe9todo se tienen en cuenta para la ejecuci\xf3n del m\xe9todo.'}),"\n",(0,n.jsxs)(o.li,{children:["La funci\xf3n ODBC ",(0,n.jsx)(o.strong,{children:"SQLProcedure"}),' s\xf3lo devuelve los m\xe9todos proyecto con el atributo "SQL".']}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["Para m\xe1s informaci\xf3n, consulte ",(0,n.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/4D-SQL-engine-implementation.300-5871873.en.html",children:"Implementaci\xf3n del motor SQL de 4D"})," en el manual SQL de 4D."]}),"\n",(0,n.jsx)(o.h4,{id:"servidor-rest",children:"Servidor REST"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsxs)(o.em,{children:["Esta opci\xf3n est\xe1 obsoleta. La llamada a c\xf3digo a trav\xe9s de llamadas REST s\xf3lo es compatible con ",(0,n.jsx)(o.a,{href:"/docs/es/20/REST/classFunctions",children:"Funciones de clase del modelo de datos ORDA"}),"."]})}),"\n",(0,n.jsx)(o.h4,{id:"modificar-de-atributos-globalmente",children:"Modificar de atributos globalmente"}),"\n",(0,n.jsx)(o.p,{children:'Utilizando la caja de di\xe1logo "Atributos de los m\xe9todos", puede modificar un atributo de m\xe9todo proyecto (Invisible, Ofrecido como servicio web, etc.) para todos o parte de los m\xe9todos de la base en una sola operaci\xf3n. Esta funcionalidad es especialmente \xfatil para modificar los atributos de un gran n\xfamero de m\xe9todos proyecto. Tambi\xe9n puede utilizarse durante el desarrollo para aplicar r\xe1pidamente los atributos comunes a grupos de m\xe9todos similares.'}),"\n",(0,n.jsx)(o.p,{children:"Para la configuraci\xf3n global de los atributos del m\xe9todo:"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["En la p\xe1gina ",(0,n.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Methods-Page.300-5851337.en.html",children:"M\xe9todos"})," del Explorador 4D, despliegue el men\xfa de opciones y elija el comando ",(0,n.jsx)(o.strong,{children:"Modificar atributos globalmente..."}),". Aparece la caja de di\xe1logo ",(0,n.jsx)(o.strong,{children:"Atributos de los m\xe9todos"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:'En el \xe1rea "Nombre del m\xe9todo coincidente:", introduzca una cadena que le permita designar los m\xe9todos que desea modificar globalmente. La cadena de caracteres se utiliza como criterio de b\xfasqueda para los nombres de los m\xe9todos.'}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Utilice el caracter comod\xedn @ para ayudar a definir los grupos de m\xe9todos:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Para designar m\xe9todos cuyos nombres empiezan por..., escriba @ al final de la cadena. Por ejemplo: ",(0,n.jsx)(o.code,{children:"web@"})]}),"\n",(0,n.jsxs)(o.li,{children:["Para designar los m\xe9todos cuyos nombres contengan..., escriba @ en medio de la cadena. Por ejemplo: ",(0,n.jsx)(o.code,{children:"web@write"})]}),"\n",(0,n.jsxs)(o.li,{children:["Para designar los m\xe9todos cuyos nombres terminan en..., escriba @ al inicio de la cadena. Por ejemplo: ",(0,n.jsx)(o.code,{children:"@escribir"})]}),"\n",(0,n.jsx)(o.li,{children:"Para designar todos los m\xe9todos, basta con escribir @ en el \xe1rea."}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Notas:"})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"La b\xfasqueda no tiene en cuenta las may\xfasculas/min\xfasculas."}),"\n",(0,n.jsxs)(o.li,{children:["Puede introducir varios caracteres @ en la cadena, por ejemplo ",(0,n.jsx)(o.code,{children:"dtro_@web@pro.@"})]}),"\n"]}),"\n",(0,n.jsxs)(o.ol,{start:"3",children:["\n",(0,n.jsxs)(o.li,{children:['En el \xe1rea "Atributo a modificar", elija un atributo de la lista desplegable y, a continuaci\xf3n, haga clic en el bot\xf3n radio ',(0,n.jsx)(o.strong,{children:"True"})," o ",(0,n.jsx)(o.strong,{children:"False"})," correspondiente al valor que debe aplicarse."]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Nota:"}),' si el atributo "Publicado en WSDL" se establece como True, s\xf3lo se aplicar\xe1 a los m\xe9todos proyecto que ya contengan el atributo "Ofrecido como servicio web".']}),"\n",(0,n.jsxs)(o.ol,{start:"4",children:["\n",(0,n.jsxs)(o.li,{children:["Haga clic en ",(0,n.jsx)(o.strong,{children:"Aplicar"}),". La modificaci\xf3n se aplica instant\xe1neamente a todos los m\xe9todos proyecto designados por la cadena de caracteres introducida."]}),"\n"]})]})}function m(e={}){let{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},953054:function(e,o,a){a.d(o,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAIAAAA2bnI+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAACnSURBVDhP1ctPC4JAEAXw+YJlsML2dYMigkyDwIxAMkJz7Z9lZaceu7BevDSeGn6H3Zn3qKw+PB2a13vNQ+dbzdOhqS5vHjqeXjyUqicPHfLKSNJyqEdK6bpuXw8e+GKwR8CGoWlud0oIMdDjOE5PDx5mgxMCNgy0zx7GJs5ni/VoErTCCQEbBvJDZXirbOon43ncCicEbBia5q/+rBmEBQ8to4IjKr7x0nj9UM5kBgAAAABJRU5ErkJggg=="},250065:function(e,o,a){a.d(o,{Z:function(){return d},a:function(){return r}});var s=a(667294);let n={},i=s.createContext(n);function r(e){let o=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);