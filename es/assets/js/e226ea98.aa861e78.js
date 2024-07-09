/*! For license information please see e226ea98.aa861e78.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45947],{614396:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>t});var a=r(474848),n=r(28453);const i={id:"subformOverview",title:"Subformulario"},s=void 0,l={id:"FormObjects/subformOverview",title:"Subformulario",description:"Generalidades",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-18/FormObjects/subform_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/subformOverview",permalink:"/docs/es/18/FormObjects/subformOverview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fsubform_overview.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"subformOverview",title:"Subformulario"},sidebar:"docs",previous:{title:"Stepper",permalink:"/docs/es/18/FormObjects/stepper"},next:{title:"Pesta\xf1as",permalink:"/docs/es/18/FormObjects/tabControl"}},d={},t=[{value:"Generalidades",id:"Generalidades",level:2},{value:"Terminolog\xeda",id:"Terminolog\xeda",level:3},{value:"Sub-formularios en lista",id:"Sub-formularios-en-lista",level:2},{value:"Sub-formularios en p\xe1gina",id:"Sub-formularios-en-p\xe1gina",level:2},{value:"Gesti\xf3n de la variable vinculada",id:"Gesti\xf3n-de-la-variable-vinculada",level:3},{value:"Actualizaci\xf3n del contenido del subformulario",id:"Actualizaci\xf3n-del-contenido-del-subformulario",level:4},{value:"Actualizaci\xf3n del contenido del formulario padre",id:"Actualizaci\xf3n-del-contenido-del-formulario-padre",level:4},{value:"Utilizar el objeto asociado al subformulario",id:"Utilizar-el-objeto-asociado-al-subformulario",level:3},{value:"Programaci\xf3n entre formularios avanzada",id:"Programaci\xf3n-entre-formularios-avanzada",level:3},{value:"Comandos Object get pointer y Object get name",id:"Comandos-Object-get-pointer-y-Object-get-name",level:4},{value:"Comando CALL SUBFORM CONTAINER",id:"Comando-CALL-SUBFORM-CONTAINER",level:4},{value:"Comando EXECUTE METHOD IN SUBFORM",id:"Comando-EXECUTE-METHOD-IN-SUBFORM",level:4},{value:"Comando GOTO OBJECT",id:"Comando-GOTO-OBJECT",level:4},{value:"Propiedades soportadas",id:"Propiedades-soportadas",level:2}];function c(e){const o={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.h2,{id:"Generalidades",children:"Generalidades"}),"\n",(0,a.jsx)(o.p,{children:"Un subformulario es un formulario incluido en otro formulario."}),"\n",(0,a.jsx)(o.h3,{id:"Terminolog\xeda",children:"Terminolog\xeda"}),"\n",(0,a.jsx)(o.p,{children:"Con el fin de definir claramente los conceptos implementados con los subformularios, aqu\xed hay algunas definiciones para ciertos t\xe9rminos utilizados:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"Subformulario"}),": un formulario destinado a ser incluido en otro formulario, llamado a su vez formulario padre."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"Formulario padre"}),": un formulario que contiene uno o m\xe1s subformularios."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"Contenedor de subformulario"}),": un objeto incluido en el formulario padre, que muestra una instancia del subformulario."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"Instancia de subformulario"}),": la representaci\xf3n de un subformulario en un formulario padre. Este concepto es importante porque es posible mostrar varias instancias del mismo subformulario en un formulario padre."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"Formulario listado"}),": instancia de subformulario mostrada como una lista."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"Formulario detallado"}),": formulario de entrada tipo p\xe1gina asociado a un subformulario tipo lista al que se accede haciendo doble clic en la lista."]}),"\n"]}),"\n",(0,a.jsx)(o.h2,{id:"Sub-formularios-en-lista",children:"Sub-formularios en lista"}),"\n",(0,a.jsx)(o.p,{children:"Un subformulario lista le permite introducir, ver y modificar datos en otras tablas. Normalmente se utilizan subformularios lista en bases de datos en las que se han establecido relaciones Uno a Muchos. Un subformulario lista en un formulario de una tabla Uno relacionada le permite ver, introducir y modificar datos en una tabla Muchos relacionada. Puede tener varios subformularios procedentes de diferentes tablas en el mismo formulario. Sin embargo, no es posible colocar dos subformularios que pertenecen a la misma tabla en la misma p\xe1gina de un formulario."}),"\n",(0,a.jsx)(o.p,{children:"Por ejemplo, una base de datos del gestor de contactos puede utilizar un subformulario lista para mostrar todos los n\xfameros de tel\xe9fono de un contacto. Aunque los n\xfameros de tel\xe9fono aparecen en la pantalla Contactos, la informaci\xf3n se almacena realmente en una tabla relacionada. Utilizando una relaci\xf3n de Uno a Muchos, este dise\xf1o de base de datos facilita el almacenamiento de un n\xfamero ilimitado de n\xfameros de tel\xe9fono por contacto. Con las relaciones autom\xe1ticas, se puede soportar la entrada de datos directamente en la tabla Muchos relacionada sin programar."}),"\n",(0,a.jsx)(o.p,{children:"Aunque los subformularios lista suelen estar asociados a muchas tablas, una instancia de subformulario puede mostrar los registros de cualquier otra tabla de la base de datos."}),"\n",(0,a.jsx)(o.p,{children:"Tambi\xe9n puede permitir que el usuario introduzca datos en el formulario lista. Dependiendo de la configuraci\xf3n del subformulario, el usuario puede mostrar el formulario detallado haciendo doble clic en un subregistro o utilizando los comandos para a\xf1adir y editar subregistros."}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsxs)(o.p,{children:["4D ofrece tres acciones est\xe1ndar para satisfacer las necesidades b\xe1sicas de gesti\xf3n de los subregistros: ",(0,a.jsx)(o.code,{children:"Edit Subrecord"}),", ",(0,a.jsx)(o.code,{children:"Delete Subrecord"})," y ",(0,a.jsx)(o.code,{children:"Add Subrecord"}),". Cuando el formulario incluye varias instancias de subformulario, la acci\xf3n se aplicar\xe1 al subformulario que tenga el foco."]}),"\n"]}),"\n",(0,a.jsx)(o.h2,{id:"Sub-formularios-en-p\xe1gina",children:"Sub-formularios en p\xe1gina"}),"\n",(0,a.jsx)(o.p,{children:"Los subformularios en modo p\xe1gina pueden mostrar los datos del subregistro actual o todo valor pertinente en funci\xf3n del contexto (variables, im\xe1genes, etc.). Una de las principales ventajas de utilizar subformularios p\xe1gina es que pueden incluir funcionalidades avanzadas y pueden interactuar directamente con el formulario padre (widgets). Los subformularios en p\xe1gina tambi\xe9n tienen sus propiedades y eventos espec\xedficos; puede gestionarlos completamente por programaci\xf3n."}),"\n",(0,a.jsxs)(o.p,{children:["El subformulario en p\xe1gina utiliza el formulario de entrada indicado por la propiedad ",(0,a.jsx)(o.a,{href:"/docs/es/18/FormObjects/propertiesSubform#detail-form",children:"Formulario detallado"}),". A diferencia de un subformulario en modo lista, el formulario utilizado puede proceder de la misma tabla que el formulario padre. Tambi\xe9n es posible utilizar un formulario proyecto. Cuando se ejecuta, un subformulario en modo p\xe1gina tiene las mismas caracter\xedsticas de visualizaci\xf3n est\xe1ndar que un formulario de entrada."]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsxs)(o.p,{children:["Los widgets 4D son objetos compuestos predefinidos basados en subformularios p\xe1gina. Se describen detalladamente en un manual aparte, ",(0,a.jsx)(o.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/4D-Widgets.100-4465257.en.html",children:"4D Widgets"}),"."]}),"\n"]}),"\n",(0,a.jsx)(o.h3,{id:"Gesti\xf3n-de-la-variable-vinculada",children:"Gesti\xf3n de la variable vinculada"}),"\n",(0,a.jsxs)(o.p,{children:["La ",(0,a.jsx)(o.a,{href:"/docs/es/18/FormObjects/propertiesObject#variable-or-expression",children:"variable"})," vinculada a un subformulario p\xe1gina le permite vincular los contextos del formulario padre y del subformulario para dar el toque final de las interfaces sofisticadas. Por ejemplo, imagine un subformulario que represente un reloj din\xe1mico, insertado en un formulario padre que contenga una variable introducible de tipo hora:"]}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{src:r(476241).A+"",width:"812",height:"167"})}),"\n",(0,a.jsxs)(o.p,{children:["Ambos objetos (variable de tiempo y contenedor de subformulario) ",(0,a.jsx)(o.em,{children:"tienen el mismo nombre de variable"}),". En este caso, al abrir el formulario padre, 4D sincroniza ambos valores autom\xe1ticamente. Si el valor de la variable se define en varias ubicaciones, 4D utiliza el valor que se carg\xf3 en \xfaltimo lugar. It applies the following loading order: 1-Object methods of subform 2-Form method of subform 3-Object methods of parent form 4-Form method of parent form"]}),"\n",(0,a.jsx)(o.p,{children:"Cuando se ejecuta el formulario principal, el desarrollador debe tener cuidado de sincronizar las variables utilizando los eventos formularios apropiados. Pueden darse dos tipos de interacciones: de formulario a subformulario y viceversa."}),"\n",(0,a.jsx)(o.h4,{id:"Actualizaci\xf3n-del-contenido-del-subformulario",children:"Actualizaci\xf3n del contenido del subformulario"}),"\n",(0,a.jsxs)(o.p,{children:["Caso 1: se modifica el valor de la variable del formulario padre y esta modificaci\xf3n debe pasarse al subformulario. En nuestro ejemplo, la hora de Paris cambia a 12:15:00, ya sea porque el usuario la ha introducido o porque se ha actualizado din\xe1micamente (a trav\xe9s del comando ",(0,a.jsx)(o.code,{children:"Current time"}),", por ejemplo)."]}),"\n",(0,a.jsx)(o.p,{children:"En este caso, debe utilizar el evento formulario On Bound Variable Change. Este evento debe ser seleccionado en las propiedades del subformulario; se genera en el m\xe9todo formulario del subformulario."}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{src:r(55130).A+"",width:"859",height:"331"})}),"\n",(0,a.jsxs)(o.p,{children:["Se genera el evento formulario ",(0,a.jsx)(o.code,{children:"On Bound Variable Change"}),":"]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"en cuanto se asigna un valor a la variable del formulario padre, incluso si se reasigna el mismo valor,"}),"\n",(0,a.jsx)(o.li,{children:"si el subformulario pertenece a la p\xe1gina formulario actual o a la p\xe1gina 0."}),"\n"]}),"\n",(0,a.jsxs)(o.p,{children:["Tenga en cuenta que, como en el ejemplo anterior, es preferible utilizar el comando ",(0,a.jsx)(o.code,{children:"OBJECT Get pointer"})," que devuelve un puntero al contenedor del subformulario en lugar de su variable porque es posible insertar varios subformularios en el mismo formulario padre (por ejemplo, una ventana que muestra diferentes zonas horarias contiene varios relojes). En este caso, s\xf3lo un puntero permite saber qu\xe9 contenedor de subformulario est\xe1 en el origen del evento."]}),"\n",(0,a.jsx)(o.h4,{id:"Actualizaci\xf3n-del-contenido-del-formulario-padre",children:"Actualizaci\xf3n del contenido del formulario padre"}),"\n",(0,a.jsx)(o.p,{children:'Caso 2: se modifica el contenido del subformulario y esta modificaci\xf3n debe pasar al formulario padre. En nuestro ejemplo, imagine que la interfaz del subformulario permite al usuario mover "manualmente" las agujas del reloj.'}),"\n",(0,a.jsxs)(o.p,{children:["En este caso, desde el subformulario, debe asignar el valor del objeto a la variable del contenedor del subformulario padre. Al igual que en el ejemplo anterior, se recomienda utilizar el comando ",(0,a.jsx)(o.code,{children:"OBJECT Get pointer"})," con el selector ",(0,a.jsx)(o.code,{children:"Object subform container"})," que devuelve un puntero al contenedor del subformulario."]}),"\n",(0,a.jsxs)(o.p,{children:["Al asignar el valor a la variable se genera el evento formulario ",(0,a.jsx)(o.code,{children:"On Data Change"})," en el m\xe9todo del objeto del contenedor del subformulario padre, que permite realizar todo tipo de acci\xf3n. El evento debe estar seleccionado en las propiedades del contenedor del subformulario."]}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{src:r(302883).A+"",width:"996",height:"452"})}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsxs)(o.p,{children:['Si mueve "manualmente" las manecillas del reloj, esto tambi\xe9n genera el evento de formulario ',(0,a.jsx)(o.code,{children:"On Data Change"})," en el m\xe9todo del objeto de la variable ",(0,a.jsx)(o.em,{children:"clockValue"})," en el subformulario."]}),"\n"]}),"\n",(0,a.jsx)(o.h3,{id:"Utilizar-el-objeto-asociado-al-subformulario",children:"Utilizar el objeto asociado al subformulario"}),"\n",(0,a.jsxs)(o.p,{children:["4D vincula autom\xe1ticamente un objeto (",(0,a.jsx)(o.code,{children:"C_OBJECT"}),") a cada subformulario. El contenido de este objeto puede ser le\xeddo y/o modificado desde el contexto del subformulario, lo que permite compartir valores en un contexto local."]}),"\n",(0,a.jsxs)(o.p,{children:["El objeto puede crearse autom\xe1ticamente o ser la variable del contenedor padre, si se nombra expl\xedcitamente y se teclea como Object (ver abajo). En todos los casos, el objeto es devuelto por el comando ",(0,a.jsx)(o.code,{children:"Form"}),", que puede ser llamado directamente al subformulario (utilizando un puntero es in\xfatil). Como los objetos se pasan siempre por referencia, si el usuario modifica el valor de una propiedad en el subformulario, se guardar\xe1 autom\xe1ticamente en el propio objeto."]}),"\n",(0,a.jsx)(o.p,{children:"Por ejemplo, en su subformulario, las etiquetas de los campos se almacenan en el objeto vinculado para poder mostrar diferentes lenguajes:"}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{src:r(642988).A+"",width:"515",height:"280"})}),"\n",(0,a.jsxs)(o.p,{children:["Puede modificar las etiquetas desde el subformulario asignando valores al objeto ",(0,a.jsx)(o.em,{children:"InvoiceAddress"}),":"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:' C_OBJECT($lang)\n $lang:=New object\n If(<>lang="fr")\n    $lang.CompanyName:="Soci\xe9t\xe9 :"\n    $lang.LastName:="Nom :"\n Else\n    $lang.CompanyName:="Company:"\n    $lang.LastName:="Name:"\n End if\n InvoiceAddress. Label:=$lang\n'})}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{src:r(878901).A+"",width:"510",height:"89"})}),"\n",(0,a.jsx)(o.h3,{id:"Programaci\xf3n-entre-formularios-avanzada",children:"Programaci\xf3n entre formularios avanzada"}),"\n",(0,a.jsx)(o.p,{children:'La comunicaci\xf3n entre el formulario padre y las instancias del subformulario puede requerir ir m\xe1s all\xe1 del intercambio de un valor a trav\xe9s de la variable asociada. De hecho, es posible que desee actualizar las variables de los subformularios en funci\xf3n de las acciones realizadas en el formulario principal y viceversa. Si utilizamos el ejemplo anterior del subformulario de tipo "reloj din\xe1mico", es posible que queramos definir una o varias horas de alarma para cada reloj.'}),"\n",(0,a.jsx)(o.p,{children:"4D ha implementado los siguientes mecanismos para satisfacer estas necesidades:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:['Uso del par\xe1metro "subform" con el comando ',(0,a.jsx)(o.code,{children:"OBJECT Get name"})," para especificar el objeto subformulario y el comando ",(0,a.jsx)(o.code,{children:"OBJECT Get pointer"}),"."]}),"\n",(0,a.jsxs)(o.li,{children:["Llamada de un objeto contenedor desde el subformulario utilizando el comando ",(0,a.jsx)(o.code,{children:"CALL SUBFORM CONTAINER"}),","]}),"\n",(0,a.jsxs)(o.li,{children:["Ejecuci\xf3n de un m\xe9todo en el contexto del subformulario mediante el comando ",(0,a.jsx)(o.code,{children:"EXECUTE METHOD IN SUBFORM"}),"."]}),"\n"]}),"\n",(0,a.jsx)(o.h4,{id:"Comandos-Object-get-pointer-y-Object-get-name",children:"Comandos Object get pointer y Object get name"}),"\n",(0,a.jsxs)(o.p,{children:["Adem\xe1s el selector ",(0,a.jsx)(o.code,{children:"Object subform container"}),", el comando ",(0,a.jsx)(o.code,{children:"OBJECT Get pointer"})," admite un par\xe1metro que indica en qu\xe9 subformulario buscar el objeto cuyo nombre se especifica en el segundo par\xe1metro. Esta sintaxis s\xf3lo se puede utilizar cuando se pasa el selector Object named."]}),"\n",(0,a.jsx)(o.p,{children:"Por ejemplo, la siguiente instrucci\xf3n:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:' $ptr:=OBJECT Get pointer(Object named;"MyButton";"MySubForm")\n'})}),"\n",(0,a.jsxs)(o.p,{children:['... recupera un puntero a la variable "MyButton" que se encuentra en el objeto subformulario "MySubForm". Esta sintaxis se puede utilizar para acceder desde el formulario padre a todo objeto que se encuentre en un subformulario. Tambi\xe9n hay que tener en cuenta el comando ',(0,a.jsx)(o.code,{children:"OBJECT Get name"})," que se puede utilizar para recuperar el nombre del objeto que tiene el foco."]}),"\n",(0,a.jsx)(o.h4,{id:"Comando-CALL-SUBFORM-CONTAINER",children:"Comando CALL SUBFORM CONTAINER"}),"\n",(0,a.jsxs)(o.p,{children:["El comando ",(0,a.jsx)(o.code,{children:"CALL SUBFORM CONTAINER"})," permite que una instancia de subformulario env\xede un evento al objeto contenedor del subformulario, que puede procesarlo en el contexto del formulario padre. El evento se recibe en el m\xe9todo del objeto contenedor. Puede estar en el origen de todo evento detectado por el subformulario (clic, arrastrar y soltar, etc.)."]}),"\n",(0,a.jsxs)(o.p,{children:["El c\xf3digo del evento no tiene restricciones (por ejemplo, 20000 o -100). Puede utilizar un c\xf3digo que corresponda a un evento existente (por ejemplo, 3 para ",(0,a.jsx)(o.code,{children:"On Validate"}),"), o utilizar un c\xf3digo personalizado. En el primer caso, s\xf3lo puede utilizar los eventos que haya marcado en la lista de propiedades para los contenedores de subformulario. En el segundo caso, el c\xf3digo no debe corresponder a ning\xfan evento de formulario existente. Se recomienda utilizar un valor negativo para asegurarse de que este c\xf3digo no ser\xe1 utilizado por 4D en futuras versiones."]}),"\n",(0,a.jsxs)(o.p,{children:["Para m\xe1s informaci\xf3n, consulte la descripci\xf3n del comando ",(0,a.jsx)(o.code,{children:"CALL SUBFORM CONTAINER"}),"."]}),"\n",(0,a.jsx)(o.h4,{id:"Comando-EXECUTE-METHOD-IN-SUBFORM",children:"Comando EXECUTE METHOD IN SUBFORM"}),"\n",(0,a.jsxs)(o.p,{children:["El comando ",(0,a.jsx)(o.code,{children:"EXECUTE METHOD IN SUBFORM"})," permite que un formulario o uno de sus objetos solicite la ejecuci\xf3n de un m\xe9todo en el contexto de la instancia del subformulario, lo que le da acceso a las variables, objetos, etc. del subformulario. Este m\xe9todo tambi\xe9n puede recibir par\xe1metros."]}),"\n",(0,a.jsx)(o.p,{children:"Este mecanismo se ilustra en el siguiente diagrama:"}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{src:r(793150).A+"",width:"1022",height:"267"})}),"\n",(0,a.jsxs)(o.p,{children:["Para m\xe1s informaci\xf3n, consulte la descripci\xf3n del comando ",(0,a.jsx)(o.code,{children:"EXECUTE METHOD IN SUBFORM"}),"."]}),"\n",(0,a.jsx)(o.h4,{id:"Comando-GOTO-OBJECT",children:"Comando GOTO OBJECT"}),"\n",(0,a.jsxs)(o.p,{children:["El comando ",(0,a.jsx)(o.code,{children:"GOTO OBJECT"})," busca el objeto de destino en el formulario padre aunque se ejecute desde un subformulario."]}),"\n",(0,a.jsx)(o.h2,{id:"Propiedades-soportadas",children:"Propiedades soportadas"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.a,{href:"/docs/es/18/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Border Line Style"})," - ",(0,a.jsx)(o.a,{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,a.jsx)(o.a,{href:"/docs/es/18/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,a.jsx)(o.a,{href:"/docs/es/18/FormObjects/propertiesSubform#detail-form",children:"Detail Form"})," - ",(0,a.jsx)(o.a,{href:"/docs/es/18/FormObjects/propertiesSubform#double-click-on-empty-row",children:"Double click on empty row"})," - ",(0,a.jsx)(o.a,{href:"/docs/es/18/FormObjects/propertiesSubform#double-click-on-row",children:"Double click on row"})," - ",(0,a.jsx)(o.a,{href:"/docs/es/18/FormObjects/propertiesSubform#enterable-in-list",children:"Enterable in list"})," - ",(0,a.jsx)(o.a,{href:"/docs/es/18/FormObjects/propertiesObject#expression-type",children:"Expression Type"})," - ",(0,a.jsx)(o.a,{href:"/docs/es/18/FormObjects/propertiesEntry#focusable",children:"Focusable"})," - ",(0,a.jsx)(o.a,{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,a.jsx)(o.a,{href:"/docs/es/18/FormObjects/propertiesAppearance#hide-focus-rectangle",children:"Hide focus rectangle"})," - ",(0,a.jsx)(o.a,{href:"/docs/es/18/FormObjects/propertiesAppearance#horizontal-scroll-bar",children:"Horizontal Scroll Bar"})," - ",(0,a.jsx)(o.a,{href:"/docs/es/18/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,a.jsx)(o.a,{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,a.jsx)(o.a,{href:"/docs/es/18/FormObjects/propertiesSubform#list-form",children:"List Form"})," - ",(0,a.jsx)(o.a,{href:"/docs/es/18/FormObjects/propertiesAction#method",children:"Method"})," - ",(0,a.jsx)(o.a,{href:"/docs/es/18/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,a.jsx)(o.a,{href:"/docs/es/18/FormObjects/propertiesPrint#print-frame",children:"Print Frame"})," - ",(0,a.jsx)(o.a,{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,a.jsx)(o.a,{href:"/docs/es/18/FormObjects/propertiesSubform#selection-mode",children:"Selection mode"})," - ",(0,a.jsx)(o.a,{href:"/docs/es/18/FormObjects/propertiesSubform#source",children:"Source"})," - ",(0,a.jsx)(o.a,{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,a.jsx)(o.a,{href:"/docs/es/18/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,a.jsx)(o.a,{href:"/docs/es/18/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," - ",(0,a.jsx)(o.a,{href:"/docs/es/18/FormObjects/propertiesAppearance#vertical-scroll-bar",children:"Vertical Scroll Bar"})," - ",(0,a.jsx)(o.a,{href:"/docs/es/18/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,a.jsx)(o.a,{href:"/docs/es/18/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," - ",(0,a.jsx)(o.a,{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]})]})}function u(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},221020:(e,o,r)=>{var a=r(296540),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function t(e,o,r){var a,i={},t=null,c=null;for(a in void 0!==r&&(t=""+r),void 0!==o.key&&(t=""+o.key),void 0!==o.ref&&(c=o.ref),o)s.call(o,a)&&!d.hasOwnProperty(a)&&(i[a]=o[a]);if(e&&e.defaultProps)for(a in o=e.defaultProps)void 0===i[a]&&(i[a]=o[a]);return{$$typeof:n,type:e,key:t,ref:c,props:i,_owner:l.current}}o.Fragment=i,o.jsx=t,o.jsxs=t},474848:(e,o,r)=>{e.exports=r(221020)},476241:(e,o,r)=>{r.d(o,{A:()=>a});const a="data:image/png;base64,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"},55130:(e,o,r)=>{r.d(o,{A:()=>a});const a=r.p+"assets/images/subforms2-fdeb5168781c7d5cf99dcc2d54f75423.png"},302883:(e,o,r)=>{r.d(o,{A:()=>a});const a=r.p+"assets/images/subforms3-a568914b035307adb69e854c3ec8c659.png"},642988:(e,o,r)=>{r.d(o,{A:()=>a});const a=r.p+"assets/images/subforms4-27522593ad517729524997a4bd563b97.png"},878901:(e,o,r)=>{r.d(o,{A:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAf4AAABZCAIAAABQY9GQAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAASjSURBVHhe7dxbjts2GIDRrMsL8iK6Cu+j6FMBb8aLmfImkvIl9TRyFfs/B0ZGokhKedDnIAHy4wuAYKQfIJyW/j//+tvHx8fH57M/NfjJSH89AOAjST9AONIPEI70A4Qj/QDhSD9AONIPEI70A4Qj/QDhSD9AONIPEI70A4Qj/QDhSD9AONIPEI70A4Qj/QDhSD9AONIPEI70A4Qj/QDhSD9AONIPEI70A4Qj/QDhSD9AONLPO/kDomrvwEakn3ey+QsAb0H6CU36iUn6CU36iUn6eY3z8cdwPLfRJ5SFh9OlnWZ1r59v8sycO+YX4HI6LDdePf36YeATSD8vkCM6Onw+/kr6y17zBmXCesebOU+bXoD5xum4P8Kd+8G7k362V8u/zR+WL+fzeptS4nWKb+Y8r78A6ZmPp9PhTvrr70f7+SjSzwvUPN/WfxlPxqX6RVHkwTKnXZ0u1aFpgyX/N3OGeasH2guQw3/Ov7bZaeW8Lt9D+/kk0s9L3AlyzXYpaL2aD+vRnNnR63I0970cT9ssZzdzmrHVQ+UFSCvLrOVnWTmvy1vPG8O7k35eqNa45neV7CXT9eeqzr3XdcGsLF7t82DO89ILMII/jtK+80ONC/AZpJ/XWiK/TvYy2q8OZV4Kbb10W9x5n0dznpdegOtvj7zdOv35Nt/8SoHfm/SzvcvpuHRzivPS9D6aa3ob7z6tXurNPZ/qpLG2n9zMaaY7PrJ6AdJubfac/ryL8PNhpJ/ttSA3U3tLi6sxOs3Og3OvVxutWpzVHt+fU8xbPfA4/d3PN4C3JP2EtvkLAG9B+glN+olJ+glN+olJ+glN+olJ+glN+olJ+gktvQAQU3sHNiL9AOFIP0A40g8QjvQDhCP9AOFIP0A40g8QjvQDhCP9AOFIP0A40g8QjvQDhCP9AOFIP0A40s87af99LcTT3oGNSD/vZPMXAN6C9BOa9BOT9BOa9BOT9LO3y+nwIzue28D5uDp9qfIC1Bs2h9OlXYPPJf3sbUl/j+4e6e/BLzd/4b3ne8FupJ+99fQvyd01/fV5Xndz6ee3IP3srab/cDzmH7m5q/TXk6Ils80/LF8YbWV2Veyy9uehvZP+0f55vB+Xg3P7uhrLbr7A2sxTe/4yM40srh4V/l/Sz95ayk+XcpB+1kDmNo6jNisf9vm9t1ejXVm+Hrr2n9K/bJonjsGy5HqwjY7rfR/Yk/SztynaNZbH/GsuZTmdk1pO+sFqaZ387ao+SH/fso/349XkdJIfJD9He8ykDT6xHPYi/ext7nc9LlI9UybrwZiWTvrBemmZ/O2q3kl/3rTecx7vx/PgMnUsydKMcvKvy2E30s/e5n4vZ0muZ+rk+kth6exz6b8zdO0m/XnNUvG8fTvOw+M+bfa4Pq1aDc7b9uV9EHYj/ext7neWM5pMzW2m4G6e/u7ODln+W6h+n/EPy+0hk/ooWd8hz7w9bluOlbAD6Se0778Ac9DhXUk/oUk/MUk/oUk/MUk/oW3+AsBbkH5Ck35ikn5CSy8AxNTegY1IP0A40g8QjvQDhCP9AOFIP0A40g8QjvQDhCP9AOGMzn99/QMN4RZfkNPjLQAAAABJRU5ErkJggg=="},793150:(e,o,r)=>{r.d(o,{A:()=>a});const a=r.p+"assets/images/subforms6-2b2d3b3837144e434b9af3266faa6a82.png"},28453:(e,o,r)=>{r.d(o,{R:()=>s,x:()=>l});var a=r(296540);const n={},i=a.createContext(n);function s(e){const o=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(i.Provider,{value:o},e.children)}}}]);