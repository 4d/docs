"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20095],{603905:(e,o,a)=>{a.d(o,{Zo:()=>c,kt:()=>u});var t=a(667294);function r(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function n(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?n(Object(a),!0).forEach((function(o){r(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function l(e,o){if(null==e)return{};var a,t,r=function(e,o){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],o.indexOf(a)>=0||(r[a]=e[a]);return r}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),d=function(e){var o=t.useContext(s),a=o;return e&&(a="function"==typeof e?e(o):i(i({},o),e)),a},c=function(e){var o=d(e.components);return t.createElement(s.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},m=t.forwardRef((function(e,o){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(a),u=r,b=m["".concat(s,".").concat(u)]||m[u]||p[u]||n;return a?t.createElement(b,i(i({ref:o},c),{},{components:a})):t.createElement(b,i({ref:o},c))}));function u(e,o){var a=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=m;var l={};for(var s in o)hasOwnProperty.call(o,s)&&(l[s]=o[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<n;d++)i[d]=a[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},677424:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});a(667294);var t=a(603905);function r(){return r=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},r.apply(this,arguments)}function n(e,o){if(null==e)return{};var a,t,r=function(e,o){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],o.indexOf(a)>=0||(r[a]=e[a]);return r}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={id:"code-overview",title:"Methods and classes"},l=void 0,s={unversionedId:"Project/code-overview",id:"version-20-R4/Project/code-overview",title:"Methods and classes",description:"El c\xf3digo 4D utilizado en todo el proyecto est\xe1 escrito en m\xe9todos y clases.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R4/Project/code-overview.md",sourceDirName:"Project",slug:"/Project/code-overview",permalink:"/docs/es/Project/code-overview",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Project%2Fcode-overview.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"code-overview",title:"Methods and classes"},sidebar:"docs",previous:{title:"Documenting a project",permalink:"/docs/es/Project/documentation"},next:{title:"Code Editor",permalink:"/docs/es/code-editor/write-class-method"}},d={},c=[{value:"Creaci\xf3n de m\xe9todos",id:"creaci\xf3n-de-m\xe9todos",level:2},{value:"Crear las clases",id:"crear-las-clases",level:2},{value:"Eliminar los m\xe9todos o las clases",id:"eliminar-los-m\xe9todos-o-las-clases",level:2},{value:"Importar y exportar el c\xf3digo",id:"importar-y-exportar-el-c\xf3digo",level:2},{value:"Propiedades del m\xe9todo proyecto",id:"propiedades-del-m\xe9todo-proyecto",level:2},{value:"Nombre",id:"nombre",level:3},{value:"Atributos",id:"atributos",level:3},{value:"Invisible",id:"invisible",level:4},{value:"Compartido por los componentes y la base local",id:"compartido-por-los-componentes-y-la-base-local",level:4},{value:"Ejecutar en el servidor",id:"ejecutar-en-el-servidor",level:4},{value:"Modo Ejecuci\xf3n",id:"modo-ejecuci\xf3n",level:3},{value:"Disponibilidad",id:"disponibilidad",level:3},{value:"Web Services",id:"web-services",level:4},{value:"Publicado en WSDL",id:"publicado-en-wsdl",level:4},{value:"Etiquetas 4D y URLs (4DACTION...)",id:"etiquetas-4d-y-urls-4daction",level:4},{value:"SQL",id:"sql",level:4},{value:"Servidor REST",id:"servidor-rest",level:4},{value:"Modificar de atributos globalmente",id:"modificar-de-atributos-globalmente",level:4}],p={toc:c};function m(e){var{components:o}=e,i=n(e,["components"]);return(0,t.kt)("wrapper",r({},p,i,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"El c\xf3digo 4D utilizado en todo el proyecto est\xe1 escrito en ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/es/Concepts/methods"}),"m\xe9todos")," y ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/es/Concepts/classes"}),"clases"),"."),(0,t.kt)("p",null,"El IDE de 4D le ofrece varias funcionalidades para crear, editar, exportar o eliminar su c\xf3digo. Por lo general, utilizar\xe1 el ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/es/code-editor/write-class-method"}),"editor de c\xf3digo")," de 4D para trabajar con su c\xf3digo."),(0,t.kt)("h2",r({},{id:"creaci\xf3n-de-m\xe9todos"}),"Creaci\xf3n de m\xe9todos"),(0,t.kt)("p",null,"Un m\xe9todo en 4D se almacena en un archivo ",(0,t.kt)("strong",{parentName:"p"},".4dm")," ubicado en la carpeta correspondiente de la carpeta ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/es/Project/architecture#sources"}),(0,t.kt)("inlineCode",{parentName:"a"},"/Project/Sources/")),"."),(0,t.kt)("p",null,"Puede crear ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/es/Concepts/methods"}),"varios tipos de m\xe9todos"),":"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Todos los tipos de m\xe9todos pueden crearse o abrirse desde la ventana del ",(0,t.kt)("strong",{parentName:"li"},"Explorador")," (excepto los m\xe9todos Objeto que se gestionan desde el ",(0,t.kt)("a",r({parentName:"li"},{href:"/docs/es/FormEditor/"}),"editor de formularios"),")."),(0,t.kt)("li",{parentName:"ul"},"Los m\xe9todos proyecto tambi\xe9n pueden crearse o abrirse desde el men\xfa ",(0,t.kt)("strong",{parentName:"li"},"Archivo")," o la barra de herramientas (",(0,t.kt)("strong",{parentName:"li"},"Nuevo/M\xe9todo...")," o ",(0,t.kt)("strong",{parentName:"li"},"Abrir/M\xe9todo..."),") o utilizando los accesos directos de la ventana del ",(0,t.kt)("a",r({parentName:"li"},{href:"/docs/es/code-editor/write-class-method#shortcuts"}),"editor de c\xf3digo"),"."),(0,t.kt)("li",{parentName:"ul"},"Los triggers tambi\xe9n pueden crearse o abrirse desde el editor de Estructura."),(0,t.kt)("li",{parentName:"ul"},"Los m\xe9todos formulario tambi\xe9n pueden crearse o abrirse desde el ",(0,t.kt)("a",r({parentName:"li"},{href:"/docs/es/FormEditor/"}),"editor de formularios"),".")),(0,t.kt)("h2",r({},{id:"crear-las-clases"}),"Crear las clases"),(0,t.kt)("p",null,"Una clase usuario en 4D est\xe1 definida por un archivo de m\xe9todo espec\xedfico (",(0,t.kt)("strong",{parentName:"p"},".4dm"),"), almacenado en la carpeta ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/es/Project/architecture#sources"}),(0,t.kt)("inlineCode",{parentName:"a"},"/Project/Sources/Classes/")),". El nombre del archivo es el nombre de la clase."),(0,t.kt)("p",null,"Puede crear un archivo de clase desde el men\xfa ",(0,t.kt)("strong",{parentName:"p"},"Archivo")," o la barra de herramientas (",(0,t.kt)("strong",{parentName:"p"},"Nuevo/Clase..."),") o en la p\xe1gina ",(0,t.kt)("strong",{parentName:"p"},"M\xe9todos")," de la ventana ",(0,t.kt)("strong",{parentName:"p"},"Explorador"),"."),(0,t.kt)("p",null,"Para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/es/Concepts/classes"}),"Clases"),"."),(0,t.kt)("h2",r({},{id:"eliminar-los-m\xe9todos-o-las-clases"}),"Eliminar los m\xe9todos o las clases"),(0,t.kt)("p",null,"Para eliminar un m\xe9todo o clase existente, puede:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"en su disco, elimine el archivo ",(0,t.kt)("em",{parentName:"li"},".4dm"),' de la carpeta "Sources",'),(0,t.kt)("li",{parentName:"ul"},"en el Explorador de 4D, seleccione el m\xe9todo o la clase y haga clic ",(0,t.kt)("img",{src:a(773128).Z,width:"19",height:"18"})," o elija ",(0,t.kt)("strong",{parentName:"li"},"Mover a la Papelera")," en el men\xfa contextual.")),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Para eliminar un m\xe9todo objeto, seleccione ",(0,t.kt)("strong",{parentName:"p"},"Borrar el m\xe9todo de objeto")," en el ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/es/FormEditor/"}),"editor de formularios")," (men\xfa ",(0,t.kt)("strong",{parentName:"p"},"Objeto")," o men\xfa contextual).")),(0,t.kt)("h2",r({},{id:"importar-y-exportar-el-c\xf3digo"}),"Importar y exportar el c\xf3digo"),(0,t.kt)("p",null,"Puede importar y exportar un m\xe9todo o un c\xf3digo de una clase en forma de archivo. Estos comandos se encuentran en el men\xfa ",(0,t.kt)("strong",{parentName:"p"},"M\xe9todo")," del editor de c\xf3digo ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/es/code-editor/write-class-method"})),"."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Cuando se selecciona el comando ",(0,t.kt)("strong",{parentName:"li"},"Exportar el m\xe9todo..."),", aparece una caja de di\xe1logo est\xe1ndar para guardar archivos, que permite elegir el nombre, la ubicaci\xf3n y el formato del archivo de exportaci\xf3n (ver abajo). Al igual que con la impresi\xf3n, la exportaci\xf3n no tiene en cuenta el estado contra\xeddo de las estructuras de c\xf3digo y se exporta todo el c\xf3digo."),(0,t.kt)("li",{parentName:"ul"},"Cuando se selecciona el comando ",(0,t.kt)("strong",{parentName:"li"},"Importar el m\xe9todo..."),", aparece una caja de di\xe1logo est\xe1ndar de apertura de archivos que permite designar el archivo a importar. La importaci\xf3n sustituye el texto seleccionado en el m\xe9todo. Para reemplazar un m\xe9todo existente por un m\xe9todo importado, seleccione todo el contenido del m\xe9todo antes de realizar la importaci\xf3n.")),(0,t.kt)("p",null,"La funci\xf3n de importaci\xf3n/exportaci\xf3n es multiplataforma: un m\xe9todo exportado en Mac OS puede ser importado en Windows y viceversa; 4D se encarga de la conversi\xf3n de caracteres cuando es necesario."),(0,t.kt)("p",null,"4D puede exportar e importar m\xe9todos en dos formatos:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"M\xe9todo 4D (extensi\xf3n ",(0,t.kt)("em",{parentName:"li"},".c4d"),"): en este formato, los m\xe9todos se exportan codificados. Los nombres de los objetos est\xe1n tokenizados (se transforman en referencias). Este formato se utiliza especialmente para el intercambio de m\xe9todos entre las aplicaciones 4D y los plug-ins en diferentes idiomas. Por el contrario, no es posible visualizarlos en un editor de texto."),(0,t.kt)("li",{parentName:"ul"},"Texto (extensi\xf3n ",(0,t.kt)("em",{parentName:"li"},".txt"),"): en este formato, los m\xe9todos se exportan en forma de texto. En este caso, los m\xe9todos se pueden leer con un editor de texto est\xe1ndar o con una herramienta de control de c\xf3digo fuente.")),(0,t.kt)("h2",r({},{id:"propiedades-del-m\xe9todo-proyecto"}),"Propiedades del m\xe9todo proyecto"),(0,t.kt)("p",null,"Despu\xe9s de crear un m\xe9todo proyecto, puede cambiar su nombre y modificar sus propiedades. Las propiedades de los m\xe9todos proyecto se refieren principalmente a sus condiciones de acceso y de seguridad (acceso de usuarios, servidores integrados o servicios), as\xed como a su modo de ejecuci\xf3n."),(0,t.kt)("p",null,"Los otros tipos de m\xe9todos no tienen propiedades espec\xedficas. Sus propiedades est\xe1n relacionadas con las de los objetos a los que est\xe1n unidos."),(0,t.kt)("p",null,"Para mostrar la caja de di\xe1logo ",(0,t.kt)("strong",{parentName:"p"},"Propiedades del m\xe9todo")," para un m\xe9todo proyecto, puede:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"en el ",(0,t.kt)("a",r({parentName:"li"},{href:"/docs/es/code-editor/write-class-method"}),"editor de c\xf3digo"),", seleccione el comando ",(0,t.kt)("strong",{parentName:"li"},"Propiedades del m\xe9todo...")," en el men\xfa ",(0,t.kt)("strong",{parentName:"li"},"M\xe9todo"),","),(0,t.kt)("li",{parentName:"ul"},"o en la p\xe1gina ",(0,t.kt)("strong",{parentName:"li"},"M\xe9todos")," del Explorador, ",(0,t.kt)("strong",{parentName:"li"},"haga clic derecho")," en el m\xe9todo proyecto y seleccione ",(0,t.kt)("strong",{parentName:"li"},"Propiedades del m\xe9todo...")," en el men\xfa contextual o en el men\xfa de opciones.")),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Una funci\xf3n de par\xe1metrizaci\xf3n global permite modificar una propiedad para todos o parte de los m\xe9todos proyecto de la base en una sola operaci\xf3n (ver ",(0,t.kt)("a",r({parentName:"p"},{href:"#batch-setting-for-method-attributes"}),"Modificar atributos de los m\xe9todos globalmente"),").")),(0,t.kt)("h3",r({},{id:"nombre"}),"Nombre"),(0,t.kt)("p",null,"Puede cambiar el nombre de un m\xe9todo proyecto en el \xe1rea ",(0,t.kt)("strong",{parentName:"p"},"Nombre")," de la ventana ",(0,t.kt)("strong",{parentName:"p"},"Propiedades del m\xe9todo")," o en el Explorador."),(0,t.kt)("p",null,"El nuevo nombre debe cumplir con las reglas de denominaci\xf3n de 4D (ver ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/es/Concepts/identifiers"}),"Identificadores"),"). Si ya existe un m\xe9todo con el mismo nombre, 4D muestra un mensaje diciendo que el nombre del m\xe9todo ya ha sido utilizado. Si es necesario, 4D ordena de nuevo la lista de m\xe9todos."),(0,t.kt)("admonition",r({},{type:"caution"}),(0,t.kt)("p",{parentName:"admonition"},"Cambiar el nombre de un m\xe9todo ya utilizado en la base de datos puede invalidar cualquier m\xe9todo o f\xf3rmula que utilice el antiguo nombre de m\xe9todo y corre el riesgo de interrumpir el funcionamiento de la aplicaci\xf3n. Puede cambiar el nombre del m\xe9todo manualmente, pero se recomienda utilizar la funci\xf3n de cambio de nombre de los m\xe9todos proyecto, descrita en ",(0,t.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Renaming.300-5851389.en.html"}),"Renombrar"),". Con esta funci\xf3n, puede actualizar autom\xe1ticamente el nombre siempre que se llame al m\xe9todo en todo el entorno Dise\xf1o."),(0,t.kt)("p",{parentName:"admonition"},"Con 4D Server, el nombre del m\xe9todo se cambia en el servidor cuando se termina de editar. Si m\xe1s de un usuario est\xe1 modificando el nombre del m\xe9todo al mismo tiempo, el nombre final del m\xe9todo ser\xe1 el especificado por el \xfaltimo usuario en terminar de editarlo. Es posible que desee designar un propietario del m\xe9todo para que s\xf3lo ciertos usuarios puedan cambiar su nombre")),(0,t.kt)("admonition",r({},{type:"info"}),(0,t.kt)("p",{parentName:"admonition"},"Los m\xe9todos base no pueden ser renombrados. Lo mismo ocurre con los triggers, los m\xe9todos formulario y los m\xe9todos objeto, que est\xe1n vinculados a los objetos y toman sus nombre del objeto en cuesti\xf3n.")),(0,t.kt)("h3",r({},{id:"atributos"}),"Atributos"),(0,t.kt)("p",null,"Puede controlar c\xf3mo se utilizan y/o llaman los m\xe9todos proyecto en diferentes contextos utilizando atributos. Tenga en cuenta que puede definir los atributos globalmente para una selecci\xf3n de m\xe9todos proyecto utilizando el Explorador (ver la secci\xf3n siguiente)."),(0,t.kt)("h4",r({},{id:"invisible"}),"Invisible"),(0,t.kt)("p",null,"Si no quiere que los usuarios puedan ejecutar un m\xe9todo proyecto utilizando el comando ",(0,t.kt)("strong",{parentName:"p"},"M\xe9todo...")," del men\xfa ",(0,t.kt)("strong",{parentName:"p"},"Ejecuci\xf3n"),", puede hacerlo Invisible marcando esta opci\xf3n. Un m\xe9todo invisible no aparece en la caja de di\xe1logo de ejecuci\xf3n del m\xe9todo."),(0,t.kt)("p",null,"Cuando se hace invisible un m\xe9todo proyecto, sigue estando disponible para los desarrolladores de la base. Permanece en la lista de m\xe9todos del Explorador y del Editor de c\xf3digo."),(0,t.kt)("h4",r({},{id:"compartido-por-los-componentes-y-la-base-local"}),"Compartido por los componentes y la base local"),(0,t.kt)("p",null,"Este atributo se utiliza en el marco de los componentes. Cuando est\xe1 marcada, indica que el m\xe9todo estar\xe1 disponible para los componentes cuando la aplicaci\xf3n se utilice como base local. Por otro lado, cuando la aplicaci\xf3n se utiliza como un componente, el m\xe9todo estar\xe1 disponible para las bases locales."),(0,t.kt)("p",null,"Para m\xe1s informaci\xf3n sobre los componentes, consulte el cap\xedtulo ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/es/Extensions/develop-components"}),"Desarrollo e instalaci\xf3n de componentes 4D"),"."),(0,t.kt)("h4",r({},{id:"ejecutar-en-el-servidor"}),"Ejecutar en el servidor"),(0,t.kt)("p",null,"Este atributo s\xf3lo se tiene en cuenta para una aplicaci\xf3n 4D en modo cliente-servidor. Cuando esta opci\xf3n est\xe1 marcada, el m\xe9todo del proyecto se ejecuta siempre en el servidor, independientemente de c\xf3mo se llame."),(0,t.kt)("p",null,"Para m\xe1s informaci\xf3n sobre esta opci\xf3n, consulte ",(0,t.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv19R6/4D/19-R6/Execute-on-Server-attribute.300-5941841.en.html"}),"Atributo Ejecutar en el servidor"),"."),(0,t.kt)("h3",r({},{id:"modo-ejecuci\xf3n"}),"Modo Ejecuci\xf3n"),(0,t.kt)("p",null,"Esta opci\xf3n permite declarar el m\xe9todo elegible para la ejecuci\xf3n en modo apropiativo. Se describe en la ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/es/Develop/processes#preemptive-processes"}),"secci\xf3n Procesos apropiativos"),"."),(0,t.kt)("h3",r({},{id:"disponibilidad"}),"Disponibilidad"),(0,t.kt)("p",null,"Los atributos de disponibilidad especifican los servicios externos que pueden llamar expl\xedcitamente al m\xe9todo."),(0,t.kt)("h4",r({},{id:"web-services"}),"Web Services"),(0,t.kt)("p",null,"Este atributo le permite publicar el m\xe9todo actual como servicio web accesible a trav\xe9s de peticiones SOAP. Para m\xe1s informaci\xf3n, consulte el cap\xedtulo ",(0,t.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Publication-and-use-of-Web-Services.200-5851321.en.html"}),"Publicaci\xf3n y uso de los servicios web"),". Cuando esta opci\xf3n est\xe1 marcada, se activa la opci\xf3n ",(0,t.kt)("strong",{parentName:"p"},"Publicado en WSDL"),"."),(0,t.kt)("p",null,"En el Explorador, los m\xe9todos proyecto que se ofrecen como Servicio Web reciben un icono espec\xedfico ",(0,t.kt)("img",r({parentName:"p"},{src:"https://doc.4d.com/4Dv19R5/picture/440512/pict440512.fr.png",alt:null})),"."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Nota:")," no es posible publicar un m\xe9todo como servicio web si su nombre incluye caracteres que no cumplen con la nomenclatura XML (por ejemplo espacios). Si el nombre del m\xe9todo no cumple con esto, 4D no asigna la propiedad."),(0,t.kt)("h4",r({},{id:"publicado-en-wsdl"}),"Publicado en WSDL"),(0,t.kt)("p",null,'Este atributo s\xf3lo est\xe1 disponible si el atributo "Servicio Web" est\xe1 marcado. Permite incluir el m\xe9todo actual en el WSDL de la aplicaci\xf3n 4D. Para obtener m\xe1s informaci\xf3n al respecto, consulte ',(0,t.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Publishing-a-Web-Service-with-4D.300-5851558.en.html#502689"}),"Generaci\xf3n del WSDL"),"."),(0,t.kt)("p",null,"En el Explorador, los m\xe9todos proyecto que se ofrecen como Servicio Web y se publican en el WSDL reciben un icono espec\xedfico ",(0,t.kt)("img",r({parentName:"p"},{src:"https://doc.4d.com/4Dv19R5/picture/440526/pict440526.fr.png",alt:null})),"."),(0,t.kt)("h4",r({},{id:"etiquetas-4d-y-urls-4daction"}),"Etiquetas 4D y URLs (4DACTION...)"),(0,t.kt)("p",null,"Esta opci\xf3n se utiliza para reforzar la seguridad del servidor web 4D: cuando no est\xe1 marcada, el m\xe9todo proyecto no puede ejecutarse a trav\xe9s de una petici\xf3n HTTP que contenga la URL especial ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/es/WebServer/httpRequests#4daction"}),"4DACTION")," utilizada para llamar a los m\xe9todos 4D, ni las etiquetas especiales ",(0,t.kt)("a",r({parentName:"p"},{href:"/docs/es/Tags/"}),"4DSCRIPT, 4DTEXT y 4DHTML"),"."),(0,t.kt)("p",null,"En el Explorador, los m\xe9todos proyecto con este atributo reciben un icono espec\xedfico",(0,t.kt)("img",r({parentName:"p"},{src:"https://doc.4d.com/4Dv19R5/picture/440496/pict440496.fr.png",alt:null})),"."),(0,t.kt)("p",null,"Por razones de seguridad, esta opci\xf3n est\xe1 desmarcada por defecto. Cada m\xe9todo que pueda ejecutarse utilizando las URLs y las etiquetas especiales debe indicarse individualmente."),(0,t.kt)("h4",r({},{id:"sql"}),"SQL"),(0,t.kt)("p",null,"Cuando est\xe1 marcada, esta opci\xf3n permite que el m\xe9todo proyecto sea ejecutado por el motor SQL de 4D. Por defecto, no est\xe1 seleccionado, lo que significa que, a menos que se autorice expl\xedcitamente, los m\xe9todos proyecto de 4D est\xe1n protegidos y no pueden ser llamados por el motor SQL de 4D."),(0,t.kt)("p",null,"Esta propiedad se aplica a todas las peticiones SQL internas y externas --- ejecutadas a trav\xe9s del driver ODBC, el c\xf3digo SQL insertado en las etiquetas ",(0,t.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Begin-SQL.301-5830074.en.html"}),"Begin SQL"),"/",(0,t.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/End-SQL.301-5830073.en.html"}),"End SQL"),"  o el comando ",(0,t.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/QUERY-BY-SQL.301-5830079.en.html"}),"QUERY BY SQL"),"."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Notas:")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},'Aunque un m\xe9todo tenga el atributo "SQL", los derechos de acceso definidos a nivel de las propiedades de la base y de las propiedades del m\xe9todo se tienen en cuenta para la ejecuci\xf3n del m\xe9todo.'),(0,t.kt)("li",{parentName:"ul"},"La funci\xf3n ODBC ",(0,t.kt)("strong",{parentName:"li"},"SQLProcedure"),' s\xf3lo devuelve los m\xe9todos proyecto con el atributo "SQL".')),(0,t.kt)("p",null,"Para m\xe1s informaci\xf3n, consulte ",(0,t.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/4D-SQL-engine-implementation.300-5871873.en.html"}),"Implementaci\xf3n del motor SQL de 4D")," en el manual SQL de 4D."),(0,t.kt)("h4",r({},{id:"servidor-rest"}),"Servidor REST"),(0,t.kt)("p",null,(0,t.kt)("em",{parentName:"p"},"Esta opci\xf3n est\xe1 obsoleta. La llamada a c\xf3digo a trav\xe9s de llamadas REST s\xf3lo es compatible con ",(0,t.kt)("a",r({parentName:"em"},{href:"/docs/es/REST/classFunctions"}),"Funciones de clase del modelo de datos ORDA"),".")),(0,t.kt)("h4",r({},{id:"modificar-de-atributos-globalmente"}),"Modificar de atributos globalmente"),(0,t.kt)("p",null,'Utilizando la caja de di\xe1logo "Atributos de los m\xe9todos", puede modificar un atributo de m\xe9todo proyecto (Invisible, Ofrecido como servicio web, etc.) para todos o parte de los m\xe9todos de la base en una sola operaci\xf3n. Esta funcionalidad es especialmente \xfatil para modificar los atributos de un gran n\xfamero de m\xe9todos proyecto. Tambi\xe9n puede utilizarse durante el desarrollo para aplicar r\xe1pidamente los atributos comunes a grupos de m\xe9todos similares.'),(0,t.kt)("p",null,"Para la configuraci\xf3n global de los atributos del m\xe9todo:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"En la p\xe1gina ",(0,t.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Methods-Page.300-5851337.en.html"}),"M\xe9todos")," del Explorador 4D, despliegue el men\xfa de opciones y elija el comando ",(0,t.kt)("strong",{parentName:"p"},"Modificar atributos globalmente..."),". Aparece la caja de di\xe1logo ",(0,t.kt)("strong",{parentName:"p"},"Atributos de los m\xe9todos"),".")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},'En el \xe1rea "Nombre del m\xe9todo coincidente:", introduzca una cadena que le permita designar los m\xe9todos que desea modificar globalmente. La cadena de caracteres se utiliza como criterio de b\xfasqueda para los nombres de los m\xe9todos.'))),(0,t.kt)("p",null,"Utilice el caracter comod\xedn @ para ayudar a definir los grupos de m\xe9todos:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Para designar m\xe9todos cuyos nombres empiezan por..., escriba @ al final de la cadena. Por ejemplo: ",(0,t.kt)("inlineCode",{parentName:"li"},"web@")),(0,t.kt)("li",{parentName:"ul"},"Para designar los m\xe9todos cuyos nombres contengan..., escriba @ en medio de la cadena. Por ejemplo: ",(0,t.kt)("inlineCode",{parentName:"li"},"web@write")),(0,t.kt)("li",{parentName:"ul"},"Para designar los m\xe9todos cuyos nombres terminan en..., escriba @ al inicio de la cadena. Por ejemplo: ",(0,t.kt)("inlineCode",{parentName:"li"},"@escribir")),(0,t.kt)("li",{parentName:"ul"},"Para designar todos los m\xe9todos, basta con escribir @ en el \xe1rea.")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Notas:")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"La b\xfasqueda no tiene en cuenta las may\xfasculas/min\xfasculas."),(0,t.kt)("li",{parentName:"ul"},"Puede introducir varios caracteres @ en la cadena, por ejemplo ",(0,t.kt)("inlineCode",{parentName:"li"},"dtro_@web@pro.@"))),(0,t.kt)("ol",r({},{start:3}),(0,t.kt)("li",{parentName:"ol"},'En el \xe1rea "Atributo a modificar", elija un atributo de la lista desplegable y, a continuaci\xf3n, haga clic en el bot\xf3n radio ',(0,t.kt)("strong",{parentName:"li"},"True")," o ",(0,t.kt)("strong",{parentName:"li"},"False")," correspondiente al valor que debe aplicarse.")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Nota:"),' si el atributo "Publicado en WSDL" se establece como True, s\xf3lo se aplicar\xe1 a los m\xe9todos proyecto que ya contengan el atributo "Ofrecido como servicio web".'),(0,t.kt)("ol",r({},{start:4}),(0,t.kt)("li",{parentName:"ol"},"Haga clic en ",(0,t.kt)("strong",{parentName:"li"},"Aplicar"),". La modificaci\xf3n se aplica instant\xe1neamente a todos los m\xe9todos proyecto designados por la cadena de caracteres introducida.")))}m.isMDXComponent=!0},773128:(e,o,a)=>{a.d(o,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAIAAAA2bnI+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAACnSURBVDhP1ctPC4JAEAXw+YJlsML2dYMigkyDwIxAMkJz7Z9lZaceu7BevDSeGn6H3Zn3qKw+PB2a13vNQ+dbzdOhqS5vHjqeXjyUqicPHfLKSNJyqEdK6bpuXw8e+GKwR8CGoWlud0oIMdDjOE5PDx5mgxMCNgy0zx7GJs5ni/VoErTCCQEbBvJDZXirbOon43ncCicEbBia5q/+rBmEBQ8to4IjKr7x0nj9UM5kBgAAAABJRU5ErkJggg=="}}]);