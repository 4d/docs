"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[16652],{236313:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>t,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>r});var n=s(474848),i=s(28453);const o={id:"glossary",title:"Glosario"},d=void 0,l={id:"ORDA/glossary",title:"Glosario",description:"Visi\xf3n general de los principales conceptos",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/ORDA/glossary.md",sourceDirName:"ORDA",slug:"/ORDA/glossary",permalink:"/docs/es/19/ORDA/glossary",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Fglossary.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"glossary",title:"Glosario"},sidebar:"docs",previous:{title:"Utilizar un almac\xe9n de datos remoto",permalink:"/docs/es/19/ORDA/datastores"},next:{title:"Funciones de clase y comandos",permalink:"/docs/es/19/API/overview"}},t={},r=[{value:"Visi\xf3n general de los principales conceptos",id:"visi\xf3n-general-de-los-principales-conceptos",level:2},{value:"Atributo",id:"atributo",level:2},{value:"AttributePath",id:"attributepath",level:2},{value:"Class code",id:"class-code",level:2},{value:"Data model class",id:"data-model-class",level:2},{value:"Data model object",id:"data-model-object",level:2},{value:"Data model function",id:"data-model-function",level:2},{value:"Dataclass",id:"dataclass",level:2},{value:"DataClass class",id:"dataclass-class",level:2},{value:"Datastore",id:"datastore",level:2},{value:"DataStore class",id:"datastore-class",level:2},{value:"DataStoreImplementation",id:"datastoreimplementation",level:2},{value:"Copia profunda",id:"copia-profunda",level:2},{value:"ds",id:"ds",level:2},{value:"Entity",id:"entity",level:2},{value:"Entity selection",id:"entity-selection",level:2},{value:"Generic class",id:"generic-class",level:2},{value:"Lazy loading",id:"lazy-loading",level:2},{value:"Datastore principal",id:"datastore-principal",level:2},{value:"M\xe9todo",id:"m\xe9todo",level:2},{value:"Tipo de datos mixtos",id:"tipo-de-datos-mixtos",level:2},{value:"Bloqueo optimista",id:"bloqueo-optimista",level:2},{value:"Bloqueo pesimista",id:"bloqueo-pesimista",level:2},{value:"Propiedad",id:"propiedad",level:2},{value:"PropertyPath",id:"propertypath",level:2},{value:"Regular class",id:"regular-class",level:2},{value:"Related dataclass",id:"related-dataclass",level:2},{value:"Atributo relacional",id:"atributo-relacional",level:2},{value:"Related entities",id:"related-entities",level:2},{value:"Remote datastore",id:"remote-datastore",level:2},{value:"Session",id:"session",level:2},{value:"Copia superficial (Shallow copy)",id:"copia-superficial-shallow-copy",level:2},{value:"Stamp",id:"stamp",level:2}];function c(e){const a={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"visi\xf3n-general-de-los-principales-conceptos",children:"Visi\xf3n general de los principales conceptos"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:s(534718).A+"",width:"478",height:"433"})}),"\n",(0,n.jsx)(a.h2,{id:"atributo",children:"Atributo"}),"\n",(0,n.jsxs)(a.p,{children:["Un atributo es la celda de almacenamiento m\xe1s peque\xf1a de una base de datos relacional (ver tambi\xe9n ",(0,n.jsx)(a.a,{href:"#relaci%C3%B3n-atributo",children:"Atributo relacional"}),"). No hay que confundir los atributos de la dataclass con los atributos de las entidades:"]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"En un objeto dataclass, cada propiedad es un atributo de dataclass que se asigna a un campo correspondiente en la tabla correspondiente (mismo nombre y tipo)."}),"\n",(0,n.jsx)(a.li,{children:"En un objeto entity, los atributos de entidades son propiedades que contienen los valores para los atributos del almac\xe9n de datos correspondientes."}),"\n"]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:'Attributes and properties are similar concepts. "Atributo" se utiliza para designar las propiedades de la dataclass que almacena datos, mientras que "propiedad" es m\xe1s gen\xe9rico y define un dato almacenado dentro de un objeto.'}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"attributepath",children:"AttributePath"}),"\n",(0,n.jsxs)(a.p,{children:["Un attributePath es la ruta de un atributo al interior de una determinada clase de datos o de una entidad. Ver tambi\xe9n ",(0,n.jsx)(a.a,{href:"#propertypath",children:"PropertyPath"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"class-code",children:"Class code"}),"\n",(0,n.jsx)(a.p,{children:"C\xf3digo para la(s) funci\xf3n(es) de clase usuarios."}),"\n",(0,n.jsx)(a.h2,{id:"data-model-class",children:"Data model class"}),"\n",(0,n.jsx)(a.p,{children:"Clase extendida disponible para un objeto del modelo de datos."}),"\n",(0,n.jsx)(a.h2,{id:"data-model-object",children:"Data model object"}),"\n",(0,n.jsx)(a.p,{children:"Objetos de base de datos disponibles a trav\xe9s del concepto ORDA, es decir, datastore, dataclasses, entities y entity selections."}),"\n",(0,n.jsx)(a.h2,{id:"data-model-function",children:"Data model function"}),"\n",(0,n.jsx)(a.p,{children:"Funci\xf3n de una clase de modelo de datos ORDA."}),"\n",(0,n.jsx)(a.h2,{id:"dataclass",children:"Dataclass"}),"\n",(0,n.jsx)(a.p,{children:"Una dataclass es un modelo de objeto que describe los datos. Las tablas de la base de datos suministradas por el datastore se manejan mediante clases de datos. Cada tabla de la base de datos ofrecida por el almac\xe9n de datos tiene una clase de datos correspondiente con el mismo nombre. Cada campo de la tabla es un atributo de la dataclass."}),"\n",(0,n.jsx)(a.p,{children:"Un dataclass est\xe1 relacionado con un \xfanico datastore."}),"\n",(0,n.jsx)(a.h2,{id:"dataclass-class",children:"DataClass class"}),"\n",(0,n.jsx)(a.p,{children:"Clase para los objetos dataclass espec\xedficos, en la que se pueden a\xf1adir funciones personalizadas."}),"\n",(0,n.jsx)(a.h2,{id:"datastore",children:"Datastore"}),"\n",(0,n.jsxs)(a.p,{children:["Un dtastore es el objeto de interfaz suministrado por ORDA para referenciar una estructura y acceder a sus datos. La base de datos principal, devuelta por el comando ",(0,n.jsx)(a.code,{children:"ds"}),", est\xe1 disponible como datastore (el datastore principal)."]}),"\n",(0,n.jsx)(a.p,{children:"Un datastore ofrece:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"una conexi\xf3n a la base de datos 4D"}),"\n",(0,n.jsx)(a.li,{children:"un conjunto de clases de datos para trabajar con la base de datos"}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"La base puede ser una base local 4D (el datastore principal), o una base 4D Server expuesta como recurso REST (un datastore remoto)."}),"\n",(0,n.jsx)(a.p,{children:"Un datastore referencia solo a una base de datos. Sin embargo, es posible abrir varios datastores para acceder a varias bases."}),"\n",(0,n.jsx)(a.h2,{id:"datastore-class",children:"DataStore class"}),"\n",(0,n.jsx)(a.p,{children:"Clase para los objetos datastore, en la que puede agregar funciones personalizadas."}),"\n",(0,n.jsx)(a.h2,{id:"datastoreimplementation",children:"DataStoreImplementation"}),"\n",(0,n.jsxs)(a.p,{children:["Nombre interno de la clase gen\xe9rica DataStore en el class store ",(0,n.jsx)(a.code,{children:"4D"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"copia-profunda",children:"Copia profunda"}),"\n",(0,n.jsx)(a.p,{children:"Una copia profunda (deep copy) duplica un objeto y todas las referencias que contiene. Tras una copia profunda, una colecci\xf3n copiada contiene elementos duplicados y, por tanto, nuevas referencias de todos los elementos originales. Ver tambi\xe9n Copia superficial."}),"\n",(0,n.jsx)(a.h2,{id:"ds",children:"ds"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"ds"})," es el comando del lenguaje 4D que devuelve una referencia de objeto ",(0,n.jsx)(a.a,{href:"/docs/es/19/ORDA/dsmapping#datastore",children:"datastore"}),". Coincide con el datastore disponible en la base de datos principal 4D."]}),"\n",(0,n.jsx)(a.h2,{id:"entity",children:"Entity"}),"\n",(0,n.jsx)(a.p,{children:"Una entidad es un objeto que corresponde a un modelo de dataclass. Una entidad contiene los mismos atributos que la dataclass."}),"\n",(0,n.jsx)(a.p,{children:"Una entidad puede verse como una instancia de la dataclass, como un registro de la tabla correspondiente a la dataclass en su datastore asociado. Sin embargo, una entidad tambi\xe9n contiene los datos relacionados. La finalidad de la entidad es gestionar los datos (crear, actualizar, eliminar)."}),"\n",(0,n.jsx)(a.p,{children:"Para m\xe1s informaci\xf3n, consulte Entidades."}),"\n",(0,n.jsx)(a.h2,{id:"entity-selection",children:"Entity selection"}),"\n",(0,n.jsx)(a.p,{children:"Una selecci\xf3n de entidades es un objeto. Cuando se consulta el datastore, se devuelve una selecci\xf3n de entidades. Una selecci\xf3n de entidades es un conjunto de referencias a las entidades relacionadas con la dataclass."}),"\n",(0,n.jsx)(a.p,{children:"Una selecci\xf3n de entidades contiene:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"un conjunto de 0 a X referencias de entidades,"}),"\n",(0,n.jsx)(a.li,{children:"una propiedad length (siempre),"}),"\n",(0,n.jsx)(a.li,{children:"las propiedades queryPlan y queryPath (si se preguntan durante la consulta)."}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"Una selecci\xf3n de entidades tambi\xe9n puede estar vac\xeda."}),"\n",(0,n.jsx)(a.h2,{id:"generic-class",children:"Generic class"}),"\n",(0,n.jsxs)(a.p,{children:["Clase integrada para los objetos ORDA tales como las entidades o las dataclasses. Las funciones y propiedades de las clases gen\xe9ricas est\xe1n disponibles autom\xe1ticamente en las clases usuario extendidas, por ejemplo ",(0,n.jsx)(a.code,{children:"EmployeeEntity"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"lazy-loading",children:"Lazy loading"}),"\n",(0,n.jsx)(a.p,{children:'Dado que las entidades se gestionan como referencias, los datos s\xf3lo se cargan cuando es necesario, es decir, cuando se accede a ellos en el c\xf3digo o a trav\xe9s de los widgets de la interfaz. Este principio de optimizaci\xf3n se denomina "lazy loading".'}),"\n",(0,n.jsx)(a.h2,{id:"datastore-principal",children:"Datastore principal"}),"\n",(0,n.jsx)(a.p,{children:"El objeto Datastore correspondiente a la base 4D abierta (aut\xf3noma o cliente/servidor). El datastore principal es devuelto por el comando ds."}),"\n",(0,n.jsx)(a.h2,{id:"m\xe9todo",children:"M\xe9todo"}),"\n",(0,n.jsx)(a.p,{children:"Los objetos ORDA, como los datastores, dataclasses, entity selections y entities, definen las clases de objetos. Proporcionan los m\xe9todos espec\xedficos para interactuar directamente con ellos. Estos m\xe9todos tambi\xe9n se llaman funciones miembros (member functions). Estos m\xe9todos se utilizan llam\xe1ndolos sobre una instancia del objeto."}),"\n",(0,n.jsxs)(a.p,{children:["Por ejemplo, el m\xe9todo ",(0,n.jsx)(a.code,{children:"query()"})," es una member function de dataclass. Si ha almacenado un objeto dataclass en la variable ",(0,n.jsx)(a.code,{children:"$myClass"}),", puede escribir:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-code4d",children:'$myClass.query("name = smith")\n'})}),"\n",(0,n.jsx)(a.h2,{id:"tipo-de-datos-mixtos",children:"Tipo de datos mixtos"}),"\n",(0,n.jsx)(a.p,{children:'En esta documentaci\xf3n, el tipo de datos "Mixto" se utiliza para designar los distintos tipos de valores que pueden almacenarse en los atributos de las clases de datos. Incluye:'}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"number"}),"\n",(0,n.jsx)(a.li,{children:"text"}),"\n",(0,n.jsx)(a.li,{children:"null"}),"\n",(0,n.jsx)(a.li,{children:"boolean"}),"\n",(0,n.jsx)(a.li,{children:"date"}),"\n",(0,n.jsx)(a.li,{children:"object"}),"\n",(0,n.jsx)(a.li,{children:"collection"}),"\n",(0,n.jsx)(a.li,{children:"imagen(*)"}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.em,{children:"(*) el tipo Imagen no es soportado por los m\xe9todos estad\xedsticos tales como"})," ",(0,n.jsx)(a.code,{children:"entitySelection.max( )"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"bloqueo-optimista",children:"Bloqueo optimista"}),"\n",(0,n.jsx)(a.p,{children:'En el modo "bloqueo optimista", las entidades no se bloquean expl\xedcitamente antes de actualizarlas. Cada entidad tiene un marcador interno que se incrementa autom\xe1ticamente cada vez que la entidad se guarda en el disco. Los m\xe9todos entity.save( ) o entity.drop( ) devolver\xe1n un error si el marcador de la entidad cargada (en memoria) y el marcador de la entidad en el disco no coinciden, o si la entidad ha sido suprimida. El bloqueo optimista s\xf3lo est\xe1 disponible en la implementaci\xf3n ORDA. Ver tambi\xe9n " Bloqueo pesimista ".'}),"\n",(0,n.jsx)(a.h2,{id:"bloqueo-pesimista",children:"Bloqueo pesimista"}),"\n",(0,n.jsx)(a.p,{children:'Un "bloqueo pesimista" significa que una entidad se bloquea antes de que se acceda a ella, utilizando el m\xe9todo entity.lock( ). Los otros procesos no pueden actualizar ni suprimir la entidad hasta que se desbloquee. El lenguaje 4D cl\xe1sico s\xf3lo permite bloqueos pesimistas. Ver "Bloqueo optimista".'}),"\n",(0,n.jsx)(a.h2,{id:"propiedad",children:"Propiedad"}),"\n",(0,n.jsxs)(a.p,{children:["Ver ",(0,n.jsx)(a.a,{href:"#attribute",children:"Atributo"}),"."]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.em,{children:"Attributes"})," and ",(0,n.jsx)(a.em,{children:"properties"}),' are similar concepts. "Atributo" se utiliza para designar las propiedades de la dataclass que almacena datos, mientras que "propiedad" es m\xe1s gen\xe9rico y define un dato almacenado dentro de un objeto.']}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"propertypath",children:"PropertyPath"}),"\n",(0,n.jsx)(a.p,{children:'Un propertyPath es la ruta de acceso a una propiedad en un objeto dado. Si la propiedad est\xe1 anidada en varios niveles, cada nivel estar\xe1 separado por un punto (".").'}),"\n",(0,n.jsx)(a.h2,{id:"regular-class",children:"Regular class"}),"\n",(0,n.jsx)(a.p,{children:"Clase usuario no relacionada a un objeto ORDA."}),"\n",(0,n.jsx)(a.h2,{id:"related-dataclass",children:"Related dataclass"}),"\n",(0,n.jsx)(a.p,{children:"Estas son dataclasses vinculadas por los atributos de relaci\xf3n."}),"\n",(0,n.jsx)(a.h2,{id:"atributo-relacional",children:"Atributo relacional"}),"\n",(0,n.jsx)(a.p,{children:"Los atributos de relaci\xf3n se utilizan para conceptualizar las relaciones entre las clases de datos (muchos a uno y uno a muchos)."}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Relaci\xf3n Muchos a uno (la dataclassA hace referencia a una instancia de la dataclassB): un atributo de relaci\xf3n est\xe1 disponible en la dataclassA y hace referencia a una instancia de dataclassB."}),"\n",(0,n.jsx)(a.li,{children:"Relaci\xf3n Uno a muchos (una ocurrencia de la dataclassB hace referencia a varias ocurrencias de la dataclassA): un atributo de relaci\xf3n est\xe1 disponible en la dataclassB y hace referencia a varias instancias de la dataclassA."}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"Una dataclass puede tener atributos de relaci\xf3n recursivos."}),"\n",(0,n.jsx)(a.p,{children:"En una entidad, el valor de un atributo de relaci\xf3n puede ser una entidad o una selecci\xf3n de entidades."}),"\n",(0,n.jsx)(a.h2,{id:"related-entities",children:"Related entities"}),"\n",(0,n.jsx)(a.p,{children:"Una entidad relacionada puede verse como la instancia de un atributo de relaci\xf3n en una clase de datos."}),"\n",(0,n.jsx)(a.p,{children:"Las selecciones de entidades pueden referirse a entidades relacionadas seg\xfan los atributos de relaci\xf3n definidos en las clases de datos correspondientes."}),"\n",(0,n.jsx)(a.h2,{id:"remote-datastore",children:"Remote datastore"}),"\n",(0,n.jsx)(a.p,{children:"Una base de datos 4D abierta en un servidor 4D o 4D Server (disponible a trav\xe9s de HTTP) y expuesta como recurso REST. Esta base de datos puede ser referenciada localmente como un Datastore desde otras estaciones de trabajo, donde se le asigna un locaID. El almac\xe9n de datos remoto puede utilizarse mediante los conceptos ORDA (almac\xe9n de datos, clase de datos, selecci\xf3n de entidades...). Este uso se somete a un sistema de licencia."}),"\n",(0,n.jsx)(a.h2,{id:"session",children:"Session"}),"\n",(0,n.jsx)(a.p,{children:"Cuando la aplicaci\xf3n 4D se conecta a un datastore Remoto, se crea una sesi\xf3n en el 4D Server (HTTP). Se genera una cookie de sesi\xf3n y se asocia al identificador del datastore local."}),"\n",(0,n.jsx)(a.p,{children:"Cada vez que se abre una nueva sesi\xf3n, se utiliza una licencia. Cada vez que se cierra una sesi\xf3n, se libera la licencia."}),"\n",(0,n.jsx)(a.p,{children:"Las sesiones inactivas se cierran autom\xe1ticamente despu\xe9s de un tiempo de espera. El tiempo de espera por defecto es de 48 horas, puede ser fijado por el desarrollador (debe ser >= 60 minutos)."}),"\n",(0,n.jsx)(a.h2,{id:"copia-superficial-shallow-copy",children:"Copia superficial (Shallow copy)"}),"\n",(0,n.jsx)(a.p,{children:"Una copia superficial s\xf3lo duplica la estructura de los elementos y mantiene las mismas referencias internas. Tras una copia superficial, dos colecciones compartir\xe1n los elementos individuales. Ver tambi\xe9n Copia profunda."}),"\n",(0,n.jsx)(a.h2,{id:"stamp",children:"Stamp"}),"\n",(0,n.jsx)(a.p,{children:'Utilizado en tecnolog\xeda de bloqueo "optimista". Todas las entidades tienen un contador interno, el marcador, que se incrementa cada vez que se guarda la entidad. Al comparar autom\xe1ticamente los marcadores entre una entidad que se est\xe1 guardando y su versi\xf3n almacenada en disco, 4D puede evitar las modificaciones concurrentes en las mismas entidades.'})]})}function u(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},534718:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/mainConcepts-f749b0303b2e0c0e718d1b7cb8374126.png"},28453:(e,a,s)=>{s.d(a,{R:()=>d,x:()=>l});var n=s(296540);const i={},o=n.createContext(i);function d(e){const a=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(o.Provider,{value:a},e.children)}}}]);