"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42891"],{215523:function(e,r,n){n.r(r),n.d(r,{default:()=>t,frontMatter:()=>c,metadata:()=>o,assets:()=>l,toc:()=>d,contentTitle:()=>a});var o=JSON.parse('{"id":"GettingStarted/creating","title":"Trabajar con un proyecto","description":"Los proyectos 4D se crean y desarrollan utilizando la aplicaci\xf3n 4D, que ofrece un completo Entorno de Desarrollo Integrado (IDE). 4D Server tambi\xe9n puede crear nuevos proyectos vac\xedos.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20/GettingStarted/creating.md","sourceDirName":"GettingStarted","slug":"/GettingStarted/creating","permalink":"/docs/es/20/GettingStarted/creating","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20GettingStarted%2Fcreating.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"creating","title":"Trabajar con un proyecto"},"sidebar":"docs","previous":{"title":"Instalaci\xf3n","permalink":"/docs/es/20/GettingStarted/installation"},"next":{"title":"Notas del lanzamiento","permalink":"/docs/es/20/Notes/updates"}}'),i=n("785893"),s=n("250065");let c={id:"creating",title:"Trabajar con un proyecto"},a=void 0,l={},d=[{value:"Crear un proyecto",id:"crear-un-proyecto",level:2},{value:"Abrir un proyecto",id:"abrir-un-proyecto",level:2},{value:"Opciones",id:"opciones",level:3},{value:"Atajos de apertura de los proyectos",id:"atajos-de-apertura-de-los-proyectos",level:2},{value:"Abrir un proyecto con un archivo 4DLink",id:"abrir-un-proyecto-con-un-archivo-4dlink",level:3},{value:"Sobre 4DLink Files",id:"sobre-4dlink-files",level:2},{value:"Guardado de archivos",id:"guardado-de-archivos",level:2}];function A(e){let r={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:["Los proyectos 4D se crean y desarrollan utilizando la aplicaci\xf3n ",(0,i.jsx)(r.strong,{children:"4D"}),", que ofrece un completo Entorno de Desarrollo Integrado (IDE). ",(0,i.jsx)(r.strong,{children:"4D Server"})," tambi\xe9n puede crear nuevos proyectos vac\xedos."]}),"\n",(0,i.jsxs)(r.p,{children:["El desarrollo multiusuario se gestiona a trav\xe9s de herramientas est\xe1ndar del repositorio de ",(0,i.jsx)(r.strong,{children:"control de fuentes"})," (Perforce, Git, SVN, etc.), que permiten a los desarrolladores trabajar en diferentes ramas y comparar, fusionar o revertir las modificaciones."]}),"\n",(0,i.jsx)(r.h2,{id:"crear-un-proyecto",children:"Crear un proyecto"}),"\n",(0,i.jsxs)(r.p,{children:["Se pueden crear nuevos proyectos de aplicaciones 4D desde ",(0,i.jsx)(r.strong,{children:"4D"})," o ",(0,i.jsx)(r.strong,{children:"4D Server"}),". En cualquier caso, los archivos del proyecto se almacenan en la m\xe1quina local."]}),"\n",(0,i.jsx)(r.p,{children:"Para crear un nuevo proyecto:"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Lance 4D o 4D Server."}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Haga una de las siguientes cosas:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Seleccione ",(0,i.jsx)(r.strong,{children:"Nuevo > Proyecto"})," desde el men\xfa ",(0,i.jsx)(r.strong,{children:"Archivo"}),": ",(0,i.jsx)(r.img,{src:n(835458).Z+"",width:"558",height:"199"})]}),"\n",(0,i.jsxs)(r.li,{children:["(S\xf3lo 4D) Seleccione ",(0,i.jsx)(r.strong,{children:"Proyecto..."})," en el bot\xf3n de la barra de herramientas ",(0,i.jsx)(r.strong,{children:"Nuevo"}),":",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{src:n(928687).Z+"",width:"176",height:"230"})}),"Aparece un di\xe1logo est\xe1ndar ",(0,i.jsx)(r.strong,{children:"Guardar"})," para que pueda elegir el nombre y la ubicaci\xf3n de la carpeta principal del proyecto 4D."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["Introduzca el nombre de su carpeta de proyecto y haga clic en ",(0,i.jsx)(r.strong,{children:"Guardar"}),". Este nombre se utilizar\xe1:"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"como nombre de la carpeta del proyecto,"}),"\n",(0,i.jsxs)(r.li,{children:["como nombre del archivo .4DProject en el primer nivel de la ",(0,i.jsx)(r.a,{href:"/docs/es/20/Project/architecture#project-folder",children:'carpeta "Project"'}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Puedes elegir cualquier nombre permitido por su sistema operativo. Sin embargo, si su proyecto est\xe1 destinado a funcionar en otros sistemas o a ser guardado a trav\xe9s de una herramienta de control de fuente, debe tener en cuenta sus recomendaciones de denominaci\xf3n espec\xedficas."}),"\n",(0,i.jsxs)(r.p,{children:["Al validar el di\xe1logo ",(0,i.jsx)(r.strong,{children:"Guardar"}),", 4D cierra el proyecto actual (si lo hay), crea una carpeta de proyecto en la ubicaci\xf3n indicada y coloca en ella todos los archivos necesarios para el proyecto. Para m\xe1s informaci\xf3n, consulte ",(0,i.jsx)(r.a,{href:"/docs/es/20/Project/architecture",children:"Arquitectura de un proyecto 4D"}),"."]}),"\n",(0,i.jsx)(r.p,{children:"A continuaci\xf3n, puede empezar a desarrollar su proyecto."}),"\n",(0,i.jsx)(r.h2,{id:"abrir-un-proyecto",children:"Abrir un proyecto"}),"\n",(0,i.jsx)(r.p,{children:"Para abrir un proyecto existente desde 4D:"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Haga una de las siguientes cosas:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Seleccione ",(0,i.jsx)(r.strong,{children:"Abrir/Proyecto local..."})," desde el men\xfa ",(0,i.jsx)(r.strong,{children:"Archivo"})," o del bot\xf3n",(0,i.jsx)(r.strong,{children:"Abrir"})," de la barra de herramientas."]}),"\n",(0,i.jsxs)(r.li,{children:["Seleccione ",(0,i.jsx)(r.strong,{children:"Abrir un proyecto de aplicaci\xf3n local"})," en el di\xe1logo del Asistente de Bienvenida"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Aparece la caja de di\xe1logo est\xe1ndar de apertura de archivos."}),"\n",(0,i.jsxs)(r.ol,{start:"2",children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["Seleccione el archivo ",(0,i.jsx)(r.code,{children:".4dproject"})," del proyecto (situado dentro de la carpeta ",(0,i.jsx)(r.a,{href:"/docs/es/20/Project/architecture#project-folder",children:'"Project" del proyecto'}),") y haga clic en ",(0,i.jsx)(r.strong,{children:"Abrir"}),"."]}),"\n",(0,i.jsx)(r.p,{children:"Por defecto, el proyecto se abre con su archivo de datos actual. Se sugieren otros tipos de archivos:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.em,{children:"Archivos de proyectos empaquetados"}),": extensi\xf3n ",(0,i.jsx)(r.code,{children:".4dz"})," - proyectos de despliegue"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.em,{children:"Archivos de acceso directo"}),": extensi\xf3n ",(0,i.jsx)(r.code,{children:".4DLink"})," - almacenan los par\xe1metros adicionales necesarios para abrir proyectos o aplicaciones (direcciones, identificadores, etc.)"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.em,{children:"Archivos binarios"}),": extensi\xf3n ",(0,i.jsx)(r.code,{children:".4db"})," o ",(0,i.jsx)(r.code,{children:".4dc"})," - formatos de base de datos 4D heredados"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"opciones",children:"Opciones"}),"\n",(0,i.jsxs)(r.p,{children:["Adem\xe1s de las opciones sistema est\xe1ndar, la caja de di\xe1logo ",(0,i.jsx)(r.em,{children:"Abrir"})," de 4D ofrece dos men\xfas con opciones espec\xedficas disponibles utilizando el bot\xf3n ",(0,i.jsx)(r.strong,{children:"Abrir"})," y el men\xfa ",(0,i.jsx)(r.strong,{children:"Archivo de datos"}),"."]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Abrir"})," - modo de apertura del proyecto:"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Interpretado"})," o ",(0,i.jsx)(r.strong,{children:"Compilado"}),": estas opciones est\xe1n disponibles cuando el proyecto seleccionado contiene ",(0,i.jsx)(r.a,{href:"/docs/es/20/Concepts/interpreted-compiled",children:"c\xf3digo interpretado y compilado"}),"."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.a,{href:"/docs/es/20/MSC/overview",children:"Centro de seguridad y de mantenimiento"})}),": apertura en modo seguro que permite el acceso a los proyectos da\xf1ados para realizar las reparaciones necesarias."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Archivo de datos"})," - especifica el archivo de datos a utilizar con el proyecto. Por defecto, est\xe1 seleccionada la opci\xf3n ",(0,i.jsx)(r.strong,{children:"Archivo de datos actual"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"atajos-de-apertura-de-los-proyectos",children:"Atajos de apertura de los proyectos"}),"\n",(0,i.jsx)(r.p,{children:"4D ofrece varias formas de abrir proyectos directamente y evitar el di\xe1logo de apertura:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"mediante las opciones de men\xfa:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.em,{children:"Barra de men\xfas"})," - ",(0,i.jsx)(r.strong,{children:"Archivo"})," > ",(0,i.jsx)(r.strong,{children:"Abrir proyectos recientes / {project name}"})]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.em,{children:"Barra de herramientas 4D"})," - Seleccione el proyecto en el men\xfa asociado al bot\xf3n ",(0,i.jsx)(r.strong,{children:"Abrir"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"v\xeda las preferencias:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Fije la preferencia general ",(0,i.jsx)(r.strong,{children:"Al inicio"})," en ",(0,i.jsx)(r.strong,{children:"Abrir el \xfaltimo proyecto utilizado"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["utilizando un archivo ",(0,i.jsx)(r.code,{children:".4DLink"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"abrir-un-proyecto-con-un-archivo-4dlink",children:"Abrir un proyecto con un archivo 4DLink"}),"\n",(0,i.jsxs)(r.p,{children:["Puede utilizar un archivo ",(0,i.jsx)(r.a,{href:"#about-4DLink-files",children:(0,i.jsx)(r.code,{children:".4DLink"})})," para lanzar la aplicaci\xf3n 4D y abrir el proyecto 4D objetivo. Hay dos maneras de hacer esto:"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["haga doble clic o arrastre y suelte el archivo ",(0,i.jsx)(r.code,{children:".4DLink"})," en la aplicaci\xf3n 4D"]}),"\n",(0,i.jsxs)(r.li,{children:["vaya a ",(0,i.jsx)(r.strong,{children:"Archivo"})," > ",(0,i.jsx)(r.strong,{children:"Abrir los proyectos recientes"})," y seleccione un proyecto"]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"open-recent-projects",src:n(109857).Z+"",width:"500",height:"225"})}),"\n",(0,i.jsx)(r.p,{children:'Un archivo .4DLink de tipo "proyecto remoto" puede copiarse y utilizarse en varias m\xe1quinas.'}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:"Tambi\xe9n es posible seleccionar un archivo 4DLink en la caja de di\xe1logo de apertura de 4D y 4D Server (abriendo s\xf3lo el proyecto local)."}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"sobre-4dlink-files",children:"Sobre 4DLink Files"}),"\n",(0,i.jsxs)(r.p,{children:["Los archivos con la extensi\xf3n ",(0,i.jsx)(r.code,{children:".4DLink"})," son archivos XML que contienen par\xe1metros destinados a automatizar y a simplificar la apertura de proyectos 4D locales o remotos."]}),"\n",(0,i.jsxs)(r.p,{children:["Los archivos ",(0,i.jsx)(r.code,{children:".4DLink"})," pueden guardar la direcci\xf3n de un proyecto 4D, as\xed como sus identificadores de conexi\xf3n y el modo de apertura, lo que permite ahorrar tiempo al abrir los proyectos."]}),"\n",(0,i.jsxs)(r.p,{children:["4D genera autom\xe1ticamente un archivo ",(0,i.jsx)(r.code,{children:".4DLink"})," cuando se abre un proyecto local por primera vez o cuando se conecta a un servidor por primera vez. El archivo se almacena en la carpeta de preferencias locales en la siguiente ubicaci\xf3n:"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Windows 7 y superior: C:|Users\\NuserName\\NappData\\Roaming\\4D\\Favorites vXX\\"}),"\n",(0,i.jsx)(r.li,{children:"OS X: Users/UserName/Library/Application Support/4D/Favorites vXX/"}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:'XX representa el n\xfamero de versi\xf3n de la aplicaci\xf3n. Por ejemplo, "Favoritos v19" para 4D v19.'}),"\n",(0,i.jsx)(r.p,{children:"Esa carpeta est\xe1 dividida en dos subcarpetas:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["la carpeta ",(0,i.jsx)(r.strong,{children:"Local"})," contiene los archivos ",(0,i.jsx)(r.code,{children:".4DLink"})," que pueden utilizarse para abrir proyectos locales"]}),"\n",(0,i.jsxs)(r.li,{children:["la carpeta ",(0,i.jsx)(r.strong,{children:"Remote"})," contiene los archivos ",(0,i.jsx)(r.code,{children:".4DLink"})," de proyectos remotos recientes"]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["Los archivos ",(0,i.jsx)(r.code,{children:".4DLink"})," tambi\xe9n pueden crearse con un editor XML."]}),"\n",(0,i.jsxs)(r.p,{children:["4D ofrece un DTD que describe las llaves XML que pueden utilizarse para crear un archivo ",(0,i.jsx)(r.code,{children:".4DLink"}),". Este DTD se llama database_link.dtd y se encuentra en la subcarpeta \\Resources\\DTD de la aplicaci\xf3n 4D."]}),"\n",(0,i.jsx)(r.h2,{id:"guardado-de-archivos",children:"Guardado de archivos"}),"\n",(0,i.jsxs)(r.p,{children:["Cuando trabaja en un proyecto en 4D, puede utilizar los editores integrados de 4D para crear, modificar o guardar elementos de la estructura, los m\xe9todos, los formularios, etc. Las modificaciones se guardan en el disco cuando se selecciona una opci\xf3n de men\xfa ",(0,i.jsx)(r.strong,{children:"Guardar"}),", o cuando la ventana del editor pierde o recupera el foco."]}),"\n",(0,i.jsxs)(r.p,{children:["Dado que los editores utilizan archivos en el disco, podr\xedan producirse conflictos si se modifica el mismo archivo o incluso se borra desde diferentes ubicaciones. Por ejemplo, si se edita el mismo m\xe9todo en una ventana del Editor de C\xf3digo ",(0,i.jsx)(r.em,{children:"y"})," en un editor de texto, al guardar ambas modificaciones se producir\xe1 un conflicto."]}),"\n",(0,i.jsx)(r.p,{children:"El marco de desarrollo 4D incluye un gestor de acceso a los archivos para controlar los accesos simult\xe1neos:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["if an open file is read-only at the OS level, a locked icon is displayed in the editor: ",(0,i.jsx)(r.img,{src:n(581384).Z+"",width:"22",height:"31"})]}),"\n",(0,i.jsx)(r.li,{children:"si un archivo abierto se edita simult\xe1neamente desde diferentes ubicaciones, 4D muestra un di\xe1logo de alerta al intentar guardar los cambios:"}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{src:n(494794).Z+"",width:"352",height:"185"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"S\xed"}),": ignorar los cambios del editor y volver a cargar la versi\xf3n modificada"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"No"}),": guardar los cambios y sobrescribir la otra versi\xf3n"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Cancelar"}),": no guardar"]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Esta funcionalidad est\xe1 activa para todos los editores 4D integrados (Estructura, Formulario, M\xe9todo, Par\xe1metros y Caja de herramientas)."})]})}function t(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(A,{...e})}):A(e)}},109857:function(e,r,n){n.d(r,{Z:function(){return o}});let o=n.p+"assets/images/4Dlinkfiles-96f51627e9276395742d3cb918b30a6b.png"},581384:function(e,r,n){n.d(r,{Z:function(){return o}});let o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAfCAIAAABs2aqkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAE1SURBVEhL7ZQ9DoMwDEZ7ScaOPQMTDEhcgw1xAK7BIcoBUNmRaF9iKwk/EVLbAVV9U2x//uJEkMv4Mae1aNs2TdOrhQWhFiIsLPq+z/M8y7Ku6x4WFoQkKalow8ICadM08zw/AwhJUlLRBm/BwGxIwzRNdV3fLCwISVKKnchbcGzGZlvaiqK4W1gQkqSEQKVLvAWXx+FRsznNkmRBSJISAkmu8BZJkiAFFpqyxPKOv4XnSxbDMFRVheIQZIil02EsKJRlSU12i4EAGWLpdBgLPp7DfgEZYul0GAsmVEmATK5BAEnpdJzHwv1gIbsWuz+bsXC/+SG7v7yxcI+NCiPEHh5jAdS2T14IJQTIRB+iFryulIFRV/dCSFKqu4+wWggMyVG5MLlLgZBk7OGEhcV7/IjFOL4AhB3iYxYMqdEAAAAASUVORK5CYII="},494794:function(e,r,n){n.d(r,{Z:function(){return o}});let o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWAAAAC5CAIAAACZRXJIAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAABSsSURBVHhe7Z29biTHEcc3MexXUKZ3YEYYSg0YEHCAEpvJQbzjkkdSwIXO+ApMFflywSkBA5cwly8TFBxwggDHgh9Asl3Vn9XdVT2zy5ndneX/h8Gpt7ururq6+8/e5YdWb8GTOb+8rZ4317cnJydfPXtevnx5fn5+cXFxeXl5fX19c3Pzjcat4+rqivrQv+v1mmypM9g7LBD/AwCABggEAMAEAgEAMIFAAABMIBAAABMIBADABAIBADCBQAAATCAQAAATCAQAR85qtfr+++/DCwFVUlN4YTBWIB7Wq9X6IbxgqOL0/mN4AQA4WEgIfvf7P1QaoVa2jBOIj/enp+v1qVSEkQIBHQFg/1RyMFIdiFECwfpw/9H/G6ogEAAsiiQKqRAauowRiI9BGeJ/HeLkUz29lWH8mxBuovtGqPMUb08AAHvAS8N4dSBGCETWBakQSSCEUjysXYlqRBVuEAAcBrMIhFQFKse7QDz5XCXgVikKEAgADgKvDvRvKoSGLoMCwdeBkvw+IgpE9f4BAgHAYVGJwniNGBKI+oAnPUgNVKg0AAIBwAGhysFIjRgQiPZ8R4UQLVwVqd9i8ItYDwDYA3T+VCGgSmoKLwxGfEgJAHiuQCAAACYQCACACQQCAGACgQAAmEAgAAAmEAgAgAkEAgBgAoEAAJhAIAAAJhAIAIAJBAIAYAKBAACYQCAAACYQCACACQQCAGACgQAAmEAgAAAmEAgAgAkEAgBgAoEAAJjMIBD//js/AIDlM4NAPH7ODwBg+UwtEHR3eL/iB5cIAJbP1ALx+Pl//7WiB5cIAI6ASQXCXR9+/YkfXCIAOAImFQh3ffj1Z352c4l4uPv29N0v4cV2/Pzh9OTb1cm360f2tjr74P+fgVy+++SKo5ggkppf7s8m97kHPr77rshqLDNG8kciPQsOOm8z7JN5mU4g0vXBCcSElwjeOm4blc97/r+APjXdn9Zud3rkHuUyBGIKbIEwkz8SCMQOmE4gxPXBP5NfItpD+9R081ew7+5/Dq8k7Vh9Zlj4IxSIAjv5I1mEQFRBPleBqK4P/pn6kwgIxBKBQEAglOuDf6a9RFgCwWsg3nckRL2yEUVrMJT+q7H6roheJPGddq/e3uibzk6tr8NTT2ycde7mMjAiAGVdQv3ZhwfqFodLWS1sm+QTokMxO8uzwMxbNQTBfVoPxnqReSeHxYzCKBxJrnT9aycj1jQE+fi+7b8DphAI9frgn0kvEe0C++1CGXev+D1t6sBNaQk5uVpmyy9i0n9dHnLVieTju/faEOU78HfNNo3bK/oswrBC6tUb4UmUbvmli0fmJOfBbvKHTYadxu0n35yF7llg561eu2IJEsZ6+dH1HBaBldkIx9u/GHSizTqoRuy2Y6YQCOP64J8JLxFytTxVTV6McvP5NWu3wiiBGOfKjKQiLXzttqXYZ0wysUKyQx0ZHnerd3M+UWV6yyTkoetTJ8cqwiijzU3mLHqeBXbeXFMSDl4LLQkFlTypOexlow6y60SdtesjVmHHPFkgmuuDJ72c8BJRJZegmrzeRFpOLrBUy6fo6SlXRfrP5XGuzEgcbo2Tudhw9NLco+VuZuIJsUKyQ+2Hl5AZIKrNzVb+pWIuYyuapJPCv5V8axZdzwI7b00wZbeMtV56DjvZaILsOkkjhsf3NKa5I54sEM31oRaI6S4RxfZybLJmGmMFYtiVGYnbK3mBG288EHUo5+XoC4QWkh2qHV6BzABRb02y8i8V82kFYtTsjJPTEwhX9oOmQgV3VtfLzKEScB5xE4GonASWLBDapw+tQEx1iai2L2Gmmzdf2hM2YwRinKuRC8+L3e6DMowIb/RivqmbFZIdqhleicwAUW9NsvIv24GK2Iq5sM/opPBf9sxN1iy6ngV23hxkxamgucg+CXu9gmEi9WwDFiOOFQhr1ssWCO3TB0UgJrpE5D0UMdPtO+eV/uX+Tktxs3WS/7o85MqMRC68K6f6derPnYut73AbPW+aYt9bIXXqrURJ2Fxk2BSIdqAcmysnKx5oQ4FonYdZ9DwLenljeBbv19oHSYy1Xi6qsZtNjii6ERs4iWu3WIHQrg/0qAIxySWCMyhXuptuwmU8PEW3RH+PirEGXXUicV+FnC0tc6oPm88/rToQvM9O333y252fZu7RvBhare+EJ2FbMUpHIIg8rzon4Yjy479pGq0K/3byCXUWHc+CgbwFJ4phQF+voRwOZ8ON2HeiztqY5o54gkAY37zQBWKGH6wEYCu8gsgzDEy2FQjj+kCPJRBTfRIBwJPgm4tyewIq2wqE/bMPpkDgEgH2D64Pm7GVQNjXB3o6AoFLBNgj4WOC+iMJ0GMrgej+6GRPIHCJAGBRbC4Q3esDPX2BwCUCgAWxuUB0rw/0DAgELhEALIcNBWLo+jDqwSUCgIWwoUAMXR9GPrhEALAINhGIcdeHwbcY/OASAXZI9WOaT8T60UYeZX8/8jgTmwjEuOvDKIF4xpcI+TO5/sG35edm7wIhF31Zyz1aICb59EE+z/US0Wwv9/vFz+Bn+6xzRXSaJmE3AiEp+3xap9H5ly/UX705UEYLxESfPsjneV4itO3lfp/n2H+A5xkLhMT6OxQHyjiBoK/z/1z99sPqtx8nfX5YkdsRl4jw47Gc9HBPK3+LjlaChTnXi571zuC94uvLv3qq+Cl+4TKP6HdbHsL5V2NTCQOFV5HyC0snfk+746Vbw5zTKH/Hmbs1zivP/FJEm1vt5BQrFWydAqb+xfT1psEMEGHK5tKbvypqOjcmRbAHX2/+sdw0SmeydSSHzziBoK/zdJJneoYvESHj6c0bZ7naSSLpbi3T6jrb2Fo0+d1g+9ngj5fml8VwKmFbh1cRF4w/vZ34M3wq5A7Of8LINufyoECUnv3s0knLo2zxl131iTuqplEZ8FblkrFh8iMm0kSoO+9OKpqU20YiTbTJmhM5ZDb5kHJvNJnlRQq71u2StN7FSQvkznl/e+Qq1n4qqt1m7mZ1ZxQYHWJsvfglnJOkmBye99kzZ5N6+sp+FVlybu/TnzBgV1qKjKNI1Bk2MlM0jc2As5Lx1N3yfHNUo52LSfW2jaQvEFyjZPvQWYxA5MPA5DWrV0Js1kjs3DRJW3XVudJdENwzfAYYd6gqPxJ1oLxNO/GXSD8UUshPz3ykQOQJUgd2G2dU9eeXWnKKlRLxyIAriqatMsCwYYonPD6YvGRDzpVJNSbWROTGaPtwjZbtAwcCEWybFWWrXCNs5T4glAAKPzXNQI7kvxN/DdX7L32p0DcfKxBxCtTfuWXxIp/SvJecvQpEZRgYJxDGpBoTayJ9gVgoR/EWQ65E5w4prDy8otG2v9u4Nb6cQSB4a4Zz1Ym/IZxGGjHF0zOvdbaaiIDi+e7+8cNpiNNLg6v0YXST81SBGJ2B2mFrGMkz7Ti3JtWMzt60ich8dia7LJYjEHldC71oV4LXKa+07OzKqTNvCFsg5E5yZXkG5LmqDcmtf9nuRYc6kHRox9/AY9V/f7VjzkOnJj993TNbnZ659xcOMqSXOexuciyBKMoVZdPIDNSZbA3l3/KNHkzn5qRcnzSQz1s5rkeOokyWaxSZO3AW9BZD/zOk7S4h3EkInYv96hc7OpG2rZ/shOrFehf7oDWknv6l3HACGZt7jK+NsUMZf0W5dyO2eTN9MRGJ8yACc3ORrvIQTXJMgUijNwG3TWMywH0aV+7814bKkmnOrUl1to2kHKWZLDuEQMwC59raJU/BWunlMFdmAPA8Z4FY/uniL+zlPRaASXlWAkF+8nFy98nlXfkEuD6A2XleNwj55rP+DGlRhIkYnyAAMBWLEAgAwH6AQAAATCAQAAATCAQAwAQCAQAwgUAAAEwgEAAAEwgEAMAEAgEAMIFAAABMIBAAABMIBADABAIBADCBQAAATCAQAAATCAQAwAQCAQAwgUAAAEwWIRAP69Vqta7/QNzH+9PV6vR++I9Sk/mYbhWlFYfQRBDhSJQRthsXgANiKQJxSpSHjY+sLRDycG53UJOVE6L1em0KhItEGWG7cQE4IBYjEOt1qRBUx4fWOoHycG53UCsrHk8VCNKP9f19LV/MduMCcEAsRiDuP8ojSqfS18QT6L7MO6gP1UfYwnV7CB3ykc0m4ujHytP7+1ECwfLwEMJJNbWHIgDf3RWLAQA4QK6vr5ciEOKMhgMZ6lMH5mHtSqKGy/EsctH7yCV3Xutmd4aTB4KaQndBiCP91/DAlW1R9AXgQFmSQKRzSK/dwRL1/PU4wm2xSZrLMpvkwxkc5nPu6/KL1EWSu6eS7kG6ssoAHCKLEgh//uiuHo5VrKfq+vQOncnShGo3FwiqKaHuEAhwXLx582ZBAuGK+eqf6rm2PGry7KllNgknPotFruS6wiU1JYGQDh1ZF1QPsr9VBuAQWZpA8LnTDqo7jgHXTm2xbJzJbCJOaTCjqs6HlNKhIwuE6kH2t8oAHCKLEAgAwH64urqCQAAAdC4vLyEQAAAd/mlECAQAQOXi4gICAQDQef36NQQCAKDz6tWrwxeI+J1DR/pm4/7hb5Tu9/uUc3yj9Ok+l/vt2xGRb7Po0yYketvJ9js/P1+EQMREcFL2KxEHtfunCkb6ebrPg0rRRkwY+bQplbTeZkz4ixcvFiUQc+ZiHHsPQDJVMNNm+KBStBETRj5tSiWttxkTTuKwKIGgIl8gyotEkx+qCORObFLWNTV1hfNb/J54duy6pIFd4T79DGWMJTpsfi7TiD8HkFpTW1X2iBrFtp5PW+EgJxGudj57vx0vbT1Vm+4hDxMcuG4jk1aPbkVTDE1NqZ8dxsgRE24I7mPEz+RBnHURVe5pDqE1KUH6SKqxpG0y5p7rNVU3Aw2xFIFIiCkrxQrOi0sl56xcwrYmdeaiK7lxaweiWy67nj4ILtYlt2TJykGNdfy5/9BwiVSj2VJdHMIhzMMEE9Izu2q8dmzVTLYeEsmV65bcNyWRtGTCRS5RReU14HwK98Ese00kn7mtN2KmMGyiTggPvmc2SjaDQ6SmbKYFKfqLnmJluDL12Iil3SCKOcdEt1PnhHhcG1uV66fXCLhRjJvHk5WprFWSw8I6v3BQTRl/GVJs1jxnYo1q62aUDZQJJqxRpH+BtC2HdhjeqBjwNcZAqU5WBkMHjeZqcseM5rMqUzEQnWdH9oiZ5MrwH7BaY7kzhDrf7D55awveNvuiBvdCdNiQpQmESIBPWpE6T92lzhozpkYfV1amslYZBy8qBb499yoDIAN7uIQYS7FluMVvv7JPiTWK7r9Aaep7oJJvNbqluqHRubo6vKpPWW7D2GRER3JrjeWxWmO5M0TbpAapFGpbanAvRIcNWe4Nwmet/lOVTOqeO0szT1tDZnYNd/d5l7lOZasy2LB17hCh2iL+3F8Ml0uuvXKijCUtPDwOd1LsI8mPVe7Y8nhlk+Yh1eXuWjcuiJmLytRVEqeWUH2KcqorwthgROEiFaqyx2qV5rVNpG3iGi3IquDL7U6oOpS+uyxFIBLF3EQyJC6H3Lc+fp5o0dREO4arOJXuo51Y4QhmsYPznwplOXSl1+LTLwG3J79EDkB0jk60P9Irxmptk2Eao55gJvQtJuWrW/+1bTOS6iHa50UxBorOjI8M3RixTxOK4TOX2zDGjZhJrqyxAsEr2xo9Oyltm4I7Mq4+pBSNvme21QYtysMsQiBMaK5VYidls1T24DVTIp05/oVjJA3skiULBG2gic6vwWQCQY4UT7PHv2z0pIHdslCB8LeoubfPEwXCB+mpvhLuJv4l0kka2ANLvkEAAGYGAgEAMIFAAABMIBAAABMIBADA5O3bBfyftQAA++H65VcQCACAzl+//BICAQDQwWcQAAATCAQAwAQCAQAwgUAAAEwgEAAAEwgEAMAEAgEAMAkC8RMAADQEgfgPAAA0QCAAACYQCACACQQCAGACgQAAmEAgAAAmEAgAgAkEAgBgAoEAAJhAIIZZ/e3Ho3/CVBv+8QwIU20IzUdNmKoNBGKY6iwd5ROm2kB76OejpnNInvPcExCIYfwRCkk9OiAQYaoNEAgCAjEMBOKIgUD0eXv1FwjEABCIIwYC0efFF19AIAaAQBwxEIg+f/riBQRigBkF4t3ZKnJy9xgqVR7vToa6bMduBcJN+OxdeMVQzSzzGslMAsHzLKb5RGbJEgRiGuYSCN5EadVnE4Ahdi4QJycn8uwco0DQYp6cnZ1MOK+9CQTeYgwzj0CwIhRfY5qK3bB7gbh7R+cn7fYjFAjWh7tH/2+oeip7Ewh8SDnMLAKhyEHaUXI3pPJcB2kPAvEoJyOKnJNATI1rvQtvxOaY/wwCEdexUAh1InZlMEtlUZmz5JPETXRd2eItzSiBwLc5B5lLINI2CPDKu0Ue2iKTsheBMApxj3MmcmU+CJufgUGmF4i8snKN1YlYldIq5aEqcNGV2DIZbAQEYhrmEoh6u6f91N8iE7MngXBFTkCsKRMSGotZy/JkTC4QUhXEnNSJbF7JHgUygZsDgZiGWQSiOhBEruhukanZm0CECceaMh9U617I/rNkYGqBoCArRq7puMpm15T9NwMCMQ3zCIRb2bzY/CKus9gFuXr7fdBnfwLhJ0qkCcZZ5wTI/rNkYGKBqGNMM1Enolb2Vz9XRaSTzRgjELe3txCIAeYSCIKXOxD2hCfVn51pm2lK9ikQQSJiTdALIvWR/WfJwLQC0YYYj7s6EWN2VPSoq5+z5DeNdLIZYwTi5uYGAjHAjAJxAOxWIA6OaQViWYwRCLzFGAYCccRAIPpAIIaBQBwxEIg+EIhhIBBHDASiDwRiGH+EjvsJU22AQBwxEIhpqM7SUT5hqg20h46eMNWG0HzUhKnaQCAAACYQCACACQQCAGACgQAAmEAgAAAmEAgAgAkEAgBg8vb1nyEQAACdzz77IwQCAKCDtxgAAJMgEOCJnF/eVs+b69uTk5Ovnj0vX748Pz+/uLi4vLy8vr6+ubn5RuPWcXV1RX3o3/V6TbbUeTfQoJ43EYqBAqYwKPLXr1+/evXq66+/fvHiRVjv58Pbt/8H0Btl0Ys5KvoAAAAASUVORK5CYII="},835458:function(e,r,n){n.d(r,{Z:function(){return o}});let o=n.p+"assets/images/projectCreate1-2b4b8620d716caed56f0b5edbc72d0e9.png"},928687:function(e,r,n){n.d(r,{Z:function(){return o}});let o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAADmCAYAAAB1YA+0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAA3FSURBVHhe7Z2/bxRJFsf9p2xIsAnSaQL+CwIgQcLDBQtIllYiAmkDJEa2NmKJEEyEcGSftDg4ifvBLcEu5ofsZCVOwvGJEHHSrURS16+6q/vVm+pyt13jrtfzDT5yd9Wr6mHm029emy732ufPn80vR/8dJQ/2/9cZeh+APmqB//2fL6NCyhwDAusFAhdAYL1A4AIInJbDw8Ng+zKAwAUQOC0QOAFS0hgQOC0QOAFS0hgQOC0QOAFS0hgQOC0QOAFS0hgQOC0QOAFS0hgQOC2qBf7LX1+a9el1c+nSpd5Mr//Zjg/N2xcpaQwInBbVApO8f3/5i/n06VNv/vbPf1mJQ/P2RUoaYyiBf/vtN3Pz5s3gyUxsb28Hx+WOaoHpjQ/J2RUaH5q3L1LSGEMJTPK+ffvWfP36dYFXr16Zy5cvq5QYAgfm7YuUNMZQAl+5ciUor8NJTO9JDDoRKJuHjjEEoxb41q1bwXYHjQ/N2xcpaYyhBCY5Q+L25c2bN1bi0DGGYNQCd+kPzdsXKWkM7QIT9L6FjjEEEDgwb1+kpDEgcFogcGDevkhJY0DgtIxKYKp5qa0NWRNTW2jevkhJY0DgtCADB+bti5Q0BgROCwQOzNsXKWmMoQSmf2tIxpMAgQMSnAQI3B0IfHrOXGD8HrgBAp+eMxf4OCDwyYDAAQlOAgTuDgQ+PckFPs3daC/+8XIpd6OdO3eulSEFvnHjRuvNPH1Yxn8lh94rRyieo1rgXO8HDn0Qrm8ogekGHJI49F70YVk384Tes1CcRLXAueDk5PAPgrcPJbAG+HsW6g8BgRPABeVIeQkIHKePvAQEToCUNAYETgsEToCUNAYETgsEToCUNAYETgsEToCUNAYETgsEToCUNAYETgsEToCUNAYETgsEToCUNAYETgsEToCUNAYETgsEToCUNAYETgsEToCUNAYETosygXfNlbU1s3Z1V7RNzN1fedzZIiWNcaYC76ybNXq/KiabB+E4xaQR+LV5srFhNhhPXi/GJRJ4Ys7/iQsLgUMcbE4KadfNTt12YDYnhcjrO16cdtIJfN88/xjqa0gm8N1nW4XEW+YFb/OErrJOlakfX10z5+8dsn4W/2wqMnp/pKQxzkZgknViNg9E+8GmmdRS75j14n3Y3Gyy9PoOj6f+6n2spV8cM3RWX6bAr59smPvPP9rtj8/vJxS4kI+kvPLMb6OYpv3Q3K0y9Yt7RTZykhbCUgZ3QvtynwwpaYwzEdgTlVNm4VLUSlAnpy03mjE76y6OnwzxMUOwnBLiiXldt9N2+TOpwHbbZmHRVmUGh5X51yJjr03N42KOx1eL2DqDN5KHj9cNKWmM4QXmMvIszfcrURmN9G1jhmHZJQRlXpKaMnFigcvMev7elhA4JKQT1UlP+4XQJHZdipwcKWmMsykhWsQKlRCtAofEjI0ZhqXXwK+f1Bd1yQV2+81FHYkZLgms7Kx0oP0rV4ty4pTlAyEljTH0RVxTs5J8zb6Nn2yag2CsY9UEXmoJUUEXYbzNlgvuq68sG5o4Vx8H9k+BlDTGWQlMlBI3ZYAvZCnf+rqLESLabO3Gdsnaw7CcGrgsGZZwEZcnUtIYZylwnOHlS0EagbsBgQsgcFogcAKkpDHyERj0BQIXQGC9QOACCKyXWuAxQmJ2Rb4xQAdWYAC0YgV+//49AKqoBX737p1t+PLlCwAqIF/JW2JtZ2cHAgNVkK/kLbEgcOgCZ5n89OYPADoBgYFqIDBQDRf46dOnZnt7GwIDPXCBHz58aB49egSBgR64wHfu3DGz2QwCAz1wgenZIiRxhgL/bC7UN22XN3Vf3JUxHdj90Xxz0rEgS7jA0+nU3L59O1eBG/F++H5i1r790fywELdM/NcA8oALfO3aNR0CDyMTBM6REQhcbl+4SGvGrpvvqN+WCk3JceFBaJyMq8ZafjcXv+XjaVyzv3bx5yoODI1Kgf0SopTrm+9/Z7FMWq/u5fP4c/704Ho1RylvM59DxIMsUCQwy4BethRiWWF5/x/mu4tOaBYrsnSdWQPjSyBwjigSuE2e0wgcEBUCq2J8Att9WUI4IXlsGbdYKnQtIeRcoW2wbEYocIGV1pUGvE/EenFVCVHHNe3uZKBM3sTxudq2wbJRInAqSK5QeQC0sloCP7g+wH+AgGWyGgLXpQK+2sfGaggMRgsEBqqBwEA1EBioppPA7g9GnBXuuAB0BQID1UBgoJqsBP7w4QMAnchSYHdcALoCgYFqIDBQDQQGqoHAQDUQGKgGAgPVQGCgGggMVJO5wPtmLp5SPts7CsSloOVYR3tmtjEze0cuxm2DHFAgMBemkmy+z2JCnES0LmMgcG4oE7jAZsS52ffiJBB4VdAn8JcjszfbMPP9cn9/zr72bWamMbItFMfnJNrk5O0ixp5Mbt7jTiqwDNQLHI5tkzHWR+1M8oLyGG3zinn250usz0EbSgX2xWmka5GrNY4TOpZsZ9te9q04tjYHqdEnMK+BvXqYiy3GtcZxTiIwyoahUSYw7bPygbLqbM8c0bYVKiBaNI4jjxVql9uhX+vF4kPzg9OgQGD+NS0FKOth2zebmznLrPVFm/1ab49raBMsIqE9Gap562O1xbfND05D5gIDEAcCA9VAYKAaCAxUA4GBaiAwUA0EBqqBwEA1EBioBgID1UBgoBoIDFQDgYFqdAi8O60f/0pMtg5Z/66Zrk3M1iGLdxxumUlb36loOaZ3vMjrAsnIX2ArLxfh0GxNuMTLEiU2b5djQuCzIHOBS1mnu6LdZrqp2bX7EHiVyVtgT1QOie3kqETZpVhZYgiJ7HyuFOHzlieKK1GmuzSu2V+b7lZxjjY5efvxr2s6nRTt5evYnYaOx+MmZiJPZvp2mmyZQ7e/guQvcPAD4pmZPuTiQ3dxrXUo3y4oPvxSKFmSOER8pz55vNjrCh3T9bXEkbDsZCLpF76dVozxZGAmU/PBsj4v+1aQDK3HWJz3+D7e3vF1ubHehWrbHLTvXmuxveLZl8hbYC/TMjzp5Icss3PV1ybqmQnc8rqoz3sN8ZPzcKsoJYqM7H669lUlc4ELbGbigtGHKutJtt8qtxznKMVabF+U5/i+yPFiJx2vZW0cn0Mch/on0yL78nZ53Mj4kZG/wIT39SozcvkhlRc6sl98gFaOZh7/Yqlpd+PrC6vgRVwTT5Si8uP1eF3VSWTjPDllXIl9Xd5rWjxubPyY0CHwiaEPMFQe6AYXbw3jFph/NY8FW0Lg4s0xToHrUmFMX5+uzBh3SdCXcWdgMHogMFANBAaqgcBANRAYqAYCA9VAYKCarAT+8OEDAJ3IUmB3XAC6AoGBaiAwUA0EBqqBwEA1EBioBgID1UBgoBoIDFSTtcD142IFi88ndsQe54pHvY4RJRm4q3wQeNWAwEA1agX2ygv7lHgWt988Rb4pN8Qc3pPm52a/mhfoYgQZmPfRdiHkbM8cUZ+VlPeFtgv255G6GuSMXoEL6eoM3CZmAWXq+b7o87JvRZ3FgSZ0CmwFdF/7R2Zv1iYw9bUJjLJhDOgUmLJva5nA6l5PVD6HiKuRMaFtkBM6Ba4yq/3qn83NXGTg+XxWlwZl9g3MIcsIW0K0SSuPD3JBicAAhIHAQDUQGKgGAgPVQGCgGggMVAOBgWogMFANBAaqgcBANRAYqAYCA9VAYKCazAWmu8DYHWMFWDkBOAoExm2MoB0IDFSjV2BxQ7q8cb28qZ1WY1RzsJXKFHu019z0jrJELwoEbiR18rn2WtrYsiI3h1uCVC0GrfvtPtbHaUVnBvbWupUEVx/bvr77QBMQGAKrRqfAtl2WEKHVx333u2yDnFAqcIF3Ecdj5Jg++122QU5kLjAAcSAwUA0EBqqBwEA1EBioBgID1UBgoBoIDFQDgYFqIDBQDQQGqoHAQDUQGKgmc4HpLrCN1kdglcuC+t4llurOMtyhlgMKBJ6ZWf0QF9knb6UMIUWDwGNChcC0QHNh4SWtZZvPO0gEgceMCoH3jugnX0LkHm4oJPJucqd46nf7BfxRWsHnKcs52KoP0Tfb2/OPDQZBicB8zVsBiWRXGXOBhcxFhi7FFO12v5DQW6XMlyPJpUp8/qbvZPU3SI0agRtp+z7/mMXIOUPHaFssyo4fngcMgR6BXdlAX/21SHH5Fuc4Zh8Cq0ORwAXyj5J4/bQt6tnQHNH9cg6/hAiXF34JIecIbYNloEtgm4V5hhT9VjhZQpRZtHNJ4c0h5KtOIMK/iONztG2DZZC5wADEgcBANRAYqAYCA9VAYKAaCAxUA4GBaiAwUA0EBqqBwEA1EBioBgID1UBgoBolAtNdaO4OsYLQ/cALY8AqkL/A1e2N9T26Vdue3YfAq07mApeZ15PXAwKvOnkL7K2ICOELXN+4TtR/DMUvP8qTIdQGNJK/wN46NElbBmbt9u9HOJkrQm1AJaPKwHzJT70cqKqhQ3/7YXH9HNBG3gL3qYE92Wmcn5nLRZj+XKE2oIvMBS6osqonWSHrwm8hKM6VG1ZmX2CChJVZt2nj2bxtG+RG/gIT1Vd+XR4Efw/MLsxmczN3GdgrK6oMHWqDwCrRITAALUBgoBoIDFQDgYFqshIYgK5AYKAaCAxU00lgAHIHAgPVBAUGQBOewCGePn1qHj58aO7cuWNu3LhhptOpHQRADpCT5GarwNvb2+bRo0eGHjhIgWQ7ALlATs5mM/N/T+4D+EUlCmMAAAAASUVORK5CYII="},250065:function(e,r,n){n.d(r,{Z:function(){return a},a:function(){return c}});var o=n(667294);let i={},s=o.createContext(i);function c(e){let r=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);