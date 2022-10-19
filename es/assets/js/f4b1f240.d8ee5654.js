"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95441],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=d(a),m=o,b=u["".concat(i,".").concat(m)]||u[m]||p[m]||s;return a?n.createElement(b,l(l({ref:t},c),{},{components:a})):n.createElement(b,l({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,l=new Array(s);l[0]=u;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var d=2;d<s;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},20486:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});a(67294);var n=a(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const l={id:"dsmapping",title:"Objeto del modelo de datos"},r=void 0,i={unversionedId:"ORDA/dsmapping",id:"version-19/ORDA/dsmapping",title:"Objeto del modelo de datos",description:"La tecnolog\xeda ORDA se basa en un mapeo autom\xe1tico de una estructura 4D subyacente. Tambi\xe9n ofrece acceso a los datos a trav\xe9s de los objetos selecci\xf3n de entidades (entity selection) y entidad (entity). As a result, ORDA exposes the whole database as a set of data model objects.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/ORDA/dsMapping.md",sourceDirName:"ORDA",slug:"/ORDA/dsmapping",permalink:"/docs/es/19/ORDA/dsmapping",draft:!1,tags:[],version:"19",frontMatter:{id:"dsmapping",title:"Objeto del modelo de datos"},sidebar:"docs",previous:{title:"\xbfQu\xe9 es ORDA?",permalink:"/docs/es/19/ORDA/overview"},next:{title:"Clases del modelo de datos",permalink:"/docs/es/19/ORDA/ordaClasses"}},d={},c=[{value:"Cartograf\xeda de la estructura",id:"cartograf\xeda-de-la-estructura",level:2},{value:"Reglas generales",id:"reglas-generales",level:3},{value:"Normas de control de acceso remoto",id:"normas-de-control-de-acceso-remoto",level:3},{value:"Actualizaci\xf3n del modelo de datos",id:"actualizaci\xf3n-del-modelo-de-datos",level:3},{value:"Definiciones de los objetos",id:"definiciones-de-los-objetos",level:2},{value:"Datastore",id:"datastore",level:3},{value:"Dataclass",id:"dataclass",level:3},{value:"Atributo",id:"atributo",level:3},{value:"Atributos de almacenamiento y relacionales",id:"atributos-de-almacenamiento-y-relacionales",level:4},{value:"Entity",id:"entity",level:3},{value:"Entity selection",id:"entity-selection",level:3},{value:"Entity selections ordenadas o no ordenadas",id:"entity-selections-ordenadas-o-no-ordenadas",level:4}],p={toc:c};function u(e){var{components:t}=e,l=s(e,["components"]);return(0,n.kt)("wrapper",o({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"La tecnolog\xeda ORDA se basa en un mapeo autom\xe1tico de una estructura 4D subyacente. Tambi\xe9n ofrece acceso a los datos a trav\xe9s de los objetos selecci\xf3n de entidades (entity selection) y entidad (entity). As a result, ORDA exposes the whole database as a set of data model objects."),(0,n.kt)("h2",o({},{id:"cartograf\xeda-de-la-estructura"}),"Cartograf\xeda de la estructura"),(0,n.kt)("p",null,"When you call a datastore using the ",(0,n.kt)("inlineCode",{parentName:"p"},"ds")," or the ",(0,n.kt)("inlineCode",{parentName:"p"},"Open datastore")," command, 4D automatically references tables and fields of the corresponding 4D structure as properties of the returned ",(0,n.kt)("a",o({parentName:"p"},{href:"#datastore"}),"datastore")," object:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Las tablas correspondientes a las dataclasses."),(0,n.kt)("li",{parentName:"ul"},"Los campos corresponden a los atributos de almacenamiento."),(0,n.kt)("li",{parentName:"ul"},"Relations are mapped to relation attributes - relation names, defined in the Structure editor, are used as relation attribute names.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(56260).Z,width:"961",height:"480"})),(0,n.kt)("h3",o({},{id:"reglas-generales"}),"Reglas generales"),(0,n.kt)("p",null,"Se aplican las siguientes reglas para todas las conversiones:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Los nombres de tabla, campo y relaci\xf3n se mapean a los nombres de propiedad de objeto. Aseg\xfarese de que dichos nombres cumplen con las reglas generales de denominaci\xf3n de objetos, como se explica en la secci\xf3n ",(0,n.kt)("a",o({parentName:"li"},{href:"/docs/es/19/Concepts/identifiers"}),"Convenciones de denominaci\xf3n de objetos"),"."),(0,n.kt)("li",{parentName:"ul"},"Un datastore s\xf3lo hace referencia a las tablas con una sola llave primaria. Las siguientes tablas no est\xe1n referenciadas:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Tablas sin llave primaria"),(0,n.kt)("li",{parentName:"ul"},"Tablas con llaves primarias compuestas."))),(0,n.kt)("li",{parentName:"ul"},"Los atributos de tipo ",(0,n.kt)("a",o({parentName:"li"},{href:"/docs/es/19/Concepts/blob"}),"BLOB")," no se gestionan en el datastore. Los atributos de tipo BLOB se devuelven como Null en las entidades y no se pueden asignar.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"ORDA mapping does not take into account:  "),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},'la opci\xf3n "Invisible" para las tablas o los campos,'),(0,n.kt)("li",{parentName:"ul"},"the virtual structure defined through ",(0,n.kt)("inlineCode",{parentName:"li"},"SET TABLE TITLES")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"SET FIELD TITLES"),","),(0,n.kt)("li",{parentName:"ul"},'the "Manual" or "Automatic" property of relations.'))),(0,n.kt)("h3",o({},{id:"normas-de-control-de-acceso-remoto"}),"Normas de control de acceso remoto"),(0,n.kt)("p",null,"When accessing a remote datastore through the ",(0,n.kt)("inlineCode",{parentName:"p"},"Open datastore")," command or ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/19/REST/gettingStarted"}),"REST requests"),", only tables and fields with the ",(0,n.kt)("strong",{parentName:"p"},"Expose as REST resource")," property are available remotely."),(0,n.kt)("p",null,"This option must be selected at the 4D structure level for each table and each field that you want to be exposed as dataclass and attribute in the datastore:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(76930).Z,width:"279",height:"362"})),(0,n.kt)("h3",o({},{id:"actualizaci\xf3n-del-modelo-de-datos"}),"Actualizaci\xf3n del modelo de datos"),(0,n.kt)("p",null,"Any modifications applied at the level of the database structure invalidate the current ORDA model layer. Estas modificaciones incluyen:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"la adici\xf3n o la eliminaci\xf3n de una tabla, de un campo, o de una relaci\xf3n"),(0,n.kt)("li",{parentName:"ul"},"el cambio de nombre de una tabla, de un campo o de una relaci\xf3n"),(0,n.kt)("li",{parentName:"ul"},"changing a core property of a field (type, unique, index, autoincrement, null value support)")),(0,n.kt)("p",null,"When the current ORDA model layer has been invalidated, it is automatically reloaded and updated in subsequent calls of the local ",(0,n.kt)("inlineCode",{parentName:"p"},"ds")," datastore on 4D and 4D Server. Note that existing references to ORDA objects such as entities or entity selections will continue to use the model from which they have been created, until they are regenerated."),(0,n.kt)("p",null,"However, the updated ORDA model layer is not automatically available in the following contexts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a remote 4D application connected to 4D Server -- the remote application must reconnect to the server."),(0,n.kt)("li",{parentName:"ul"},"a remote datastore opened using ",(0,n.kt)("inlineCode",{parentName:"li"},"Open datastore")," or through ",(0,n.kt)("a",o({parentName:"li"},{href:"/docs/es/19/REST/gettingStarted"}),"REST calls")," -- a new session must be opened.")),(0,n.kt)("h2",o({},{id:"definiciones-de-los-objetos"}),"Definiciones de los objetos"),(0,n.kt)("h3",o({},{id:"datastore"}),"Datastore"),(0,n.kt)("p",null,"El datastore es el objeto de interfaz de una base de datos. Crea una representaci\xf3n de toda la base como objeto. A datastore is made of a ",(0,n.kt)("strong",{parentName:"p"},"model")," and ",(0,n.kt)("strong",{parentName:"p"},"data"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The model contains and describes all the dataclasses that make up the datastore. Es independiente de la propia base de datos subyacente."),(0,n.kt)("li",{parentName:"ul"},"Data refers to the information that is going to be used and stored in this model. For example, names, addresses, and birthdates of employees are pieces of data that you can work with in a datastore.")),(0,n.kt)("p",null,"When handled through the code, the datastore is an object whose properties are all of the ",(0,n.kt)("a",o({parentName:"p"},{href:"#dataclass"}),"dataclasses")," which have been specifically exposed."),(0,n.kt)("p",null,"4D le permite gestionar los siguientes datastores:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the local datastore, based on the current 4D database, returned by the ",(0,n.kt)("inlineCode",{parentName:"li"},"ds")," command (the main datastore)."),(0,n.kt)("li",{parentName:"ul"},"one or more remote datastore(s) exposed as REST resources in remote 4D databases, returned by the ",(0,n.kt)("inlineCode",{parentName:"li"},"Open datastore")," command.")),(0,n.kt)("p",null,"Un datastore hace referencia s\xf3lo a una base de datos local o remota."),(0,n.kt)("p",null,"El objeto datastore en s\xed no puede ser copiado como un objeto:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"$mydatastore:=OB Copy(ds) //devuelve null\n")),(0,n.kt)("p",null,"Las propiedades del datastore son sin embargo enumerables:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"})," ARRAY TEXT($prop;0)\n OB GET PROPERTY NAMES(ds;$prop)\n  //$prop contains the names of all the dataclasses\n")),(0,n.kt)("p",null,"The main (default) datastore is always available through the ",(0,n.kt)("inlineCode",{parentName:"p"},"ds")," command, but the ",(0,n.kt)("inlineCode",{parentName:"p"},"Open datastore")," command allows referencing any remote datastore."),(0,n.kt)("h3",o({},{id:"dataclass"}),"Dataclass"),(0,n.kt)("p",null,"Una dataclass es el equivalente de una tabla. It is used as an object model and references all fields as attributes, including relational attributes (attributes built upon relations between dataclasses). Los atributos relacionales pueden utilizarse en las peticiones como cualquier otro atributo."),(0,n.kt)("p",null,"All dataclasses in a 4D project are available as a property of the ",(0,n.kt)("inlineCode",{parentName:"p"},"ds")," datastore. For remote datastores accessed through ",(0,n.kt)("inlineCode",{parentName:"p"},"Open datastore")," or ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/19/REST/gettingStarted"}),"REST requests"),", the ",(0,n.kt)("strong",{parentName:"p"},"Expose as REST resource")," option must be selected at the 4D structure level for each exposed table that you want to be exposed as dataclass in the datastore."),(0,n.kt)("p",null,"Por ejemplo, considere la siguiente tabla en la estructura 4D:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(26492).Z,width:"137",height:"188"})),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Company")," table is automatically available as a dataclass in the ",(0,n.kt)("inlineCode",{parentName:"p"},"ds")," datastore. Puede escribir:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"var $compClass : cs.Company //declares a $compClass object variable of the Company class\n$compClass:=ds.Company //assigns the Company dataclass reference to $compClass\n")),(0,n.kt)("p",null,"Un objeto dataclass puede contener:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"attributes"),(0,n.kt)("li",{parentName:"ul"},"atributos relacionales")),(0,n.kt)("p",null,"The dataclass offers an abstraction of the physical database and allows handling a conceptual data model. El dataclass es el \xfanico medio para consultar al datastore. Una consulta se hace desde una \xfanica dataclass. Queries are built around attributes and relation attribute names of the dataclasses. So the relation attributes are the means to involve several linked tables in a query."),(0,n.kt)("p",null,"El objeto dataclass mismo no puede copiarse como un objeto:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"$mydataclass:=OB Copy(ds.Employee) //devuelve null\n")),(0,n.kt)("p",null,"Las propiedades de la dataclass son sin embargo enumerables:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-code4d"}),"ARRAY TEXT($prop;0)\nOB GET PROPERTY NAMES(ds.Employee;$prop)\n//$prop contains the names of all the dataclasse attributes\n")),(0,n.kt)("h3",o({},{id:"atributo"}),"Atributo"),(0,n.kt)("p",null,"Dataclass properties are attribute objects describing the underlying fields or relations. Por ejemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),' $nameAttribute:=ds.Company.name //reference to class attribute\n $revenuesAttribute:=ds.Company["revenues"] //alternate way\n')),(0,n.kt)("p",null,"This code assigns to ",(0,n.kt)("inlineCode",{parentName:"p"},"$nameAttribute")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"$revenuesAttribute")," references to the name and revenues attributes of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Company")," class. Esta sintaxis NO devuelve los valores mantenidos dentro del atributo, sino que devuelve referencias a los propios atributos. Para manejar los valores, es necesario pasar por ",(0,n.kt)("a",o({parentName:"p"},{href:"#entity"}),"Entidades"),"."),(0,n.kt)("p",null,"All eligible fieds in a table are available as attributes of their parent ",(0,n.kt)("a",o({parentName:"p"},{href:"#dataclass"}),"dataclass"),". For remote datastores accessed through ",(0,n.kt)("inlineCode",{parentName:"p"},"Open datastore")," or ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/19/REST/gettingStarted"}),"REST requests"),", the ",(0,n.kt)("strong",{parentName:"p"},"Expose as REST resource")," option must be selected at the 4D structure level for each field that you want to be exposed as a dataclass attribute."),(0,n.kt)("h4",o({},{id:"atributos-de-almacenamiento-y-relacionales"}),"Atributos de almacenamiento y relacionales"),(0,n.kt)("p",null,"Dataclass attributes come in several kinds: storage, relatedEntity, and relatedEntities. Attributes that are scalar (",(0,n.kt)("em",{parentName:"p"},"i.e."),", provide only a single value) support the standard 4D data type (integer, text, object, etc.)."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("strong",{parentName:"li"},"storage attribute")," is equivalent to a field in the 4D database and can be indexed. Values assigned to a storage attribute are stored as part of the entity when it is saved. When a storage attribute is accessed, its value comes directly from the datastore. Storage attributes are the most basic building block of an entity and are defined by name and data type."),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("strong",{parentName:"li"},"relation attribute"),' provides access to other entities. Relation attributes can result in either a single entity (or no entity) or an entity selection (0 to N entities). Relation attributes are built upon "classic" relations in the relational structure to provide direct access to related entity or related entities. Relation attributes are directy available in ORDA using their names.')),(0,n.kt)("p",null,"For example, consider the following partial database structure and the relation properties:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(42202).Z,width:"690",height:"533"})),(0,n.kt)("p",null,"Todos los atributos de almacenamiento estar\xe1n disponibles autom\xe1ticamente:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'en la dataclass Project: "ID", "name", y "companyID"'),(0,n.kt)("li",{parentName:"ul"},'en la dataclasss Company: "ID", "name" y "discount"')),(0,n.kt)("p",null,"In addition, the following relation attributes will also be automatically available:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"in the Project dataclass: ",(0,n.kt)("strong",{parentName:"li"},"theClient"),' attribute, of the "relatedEntity" kind; there is at most one Company for each Project (the client)'),(0,n.kt)("li",{parentName:"ul"},"in the Company dataclass: ",(0,n.kt)("strong",{parentName:"li"},"companyProjects"),' attribute, of the "relatedEntities" kind; for each Company there is any number of related Projects.',(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("blockquote",{parentName:"blockquote"},(0,n.kt)("p",{parentName:"blockquote"},"The Manual or Automatic property of a database relation has no effect in ORDA."))))),(0,n.kt)("p",null,"All dataclass attributes are exposed as properties of the dataclass:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(42684).Z,width:"1049",height:"288"})),(0,n.kt)("p",null,"Keep in mind that these objects describe attributes, but do not give access to data. Reading or writing data is done through ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/19/ORDA/entities#using-entity-attributes"}),"entity objects"),"."),(0,n.kt)("h3",o({},{id:"entity"}),"Entity"),(0,n.kt)("p",null,"Una entidad es el equivalente a un registro. En realidad es un objeto que hace referencia a un registro de la base de datos. It can be seen as an instance of a ",(0,n.kt)("a",o({parentName:"p"},{href:"#dataclass"}),"dataclass"),", like a record of the table matching the dataclass. However, an entity also contains data correlated to the database related to the datastore."),(0,n.kt)("p",null,"The purpose of the entity is to manage data (create, update, delete). When an entity reference is obtained by means of an entity selection, it also retains information about the entity selection which allows iteration through the selection."),(0,n.kt)("p",null,"El objeto entidad en s\xed no puede ser copiado como un objeto:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"})," $myentity:=OB Copy(ds.Employee.get(1)) //devuelve null\n")),(0,n.kt)("p",null,"Sin embargo, las propiedades de la entidad son enumerables:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"})," ARRAY TEXT($prop;0)\n OB GET PROPERTY NAMES(ds.Employee.get(1);$prop)\n  //$prop contains the names of all the entity attributes\n")),(0,n.kt)("h3",o({},{id:"entity-selection"}),"Entity selection"),(0,n.kt)("p",null,"An entity selection is an object containing one or more reference(s) to entities belonging to the same dataclass. It is usually created as a result of a query or returned from a relation attribute. Una entity selection puede contener 0, 1 o X entidades de la dataclass -- donde X puede representar el n\xfamero total de entidades contenidas en la dataclass."),(0,n.kt)("p",null,"Ejemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"var $e : cs.EmployeeSelection //declares a $e object variable of the EmployeeSelection class type\n$e:=ds.Employee.all() //assigns the resulting entity selection reference to the $e variable\n")),(0,n.kt)("p",null,'Entity selections can be "sorted" or "unsorted" (',(0,n.kt)("a",o({parentName:"p"},{href:"#ordered-or-unordered-entity-selection"}),"see below"),")."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'Entity selections can also be "shareable" or "non-shareable", depending on ',(0,n.kt)("a",o({parentName:"p"},{href:"/docs/es/19/ORDA/entities#shareable-or-alterable-entity-selections"}),"how they have been created"),".")),(0,n.kt)("p",null,"El objeto selecci\xf3n de entidades en s\xed no puede ser copiado como un objeto:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"})," $myentitysel:=OB Copy(ds.Employee.all()) //devuelve null\n")),(0,n.kt)("p",null,"Las propiedades de las selecciones de entidades son sin embargo enumerables:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"}),' ARRAY TEXT($prop;0)\n OB GET PROPERTY NAMES(ds.Employee.all();$prop)\n  //$prop contains the names of the entity selection properties\n  //("length", 00", "01"...)\n')),(0,n.kt)("h4",o({},{id:"entity-selections-ordenadas-o-no-ordenadas"}),"Entity selections ordenadas o no ordenadas"),(0,n.kt)("p",null,"For optimization reasons, by default 4D ORDA usually creates unordered entity selections, except when you use the ",(0,n.kt)("inlineCode",{parentName:"p"},"orderBy( )"),' method or use specific options. In this documentation, unless specified, "entity selection" usually refers to an "unordered entity selection".'),(0,n.kt)("p",null,"Ordered entity selections are created only when necessary or when specifically requested using options, i.e. in the following cases:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"result of an ",(0,n.kt)("inlineCode",{parentName:"li"},"orderBy()")," on a selection (of any type) or an ",(0,n.kt)("inlineCode",{parentName:"li"},"orderBy()")," on a dataclass"),(0,n.kt)("li",{parentName:"ul"},"result of the ",(0,n.kt)("inlineCode",{parentName:"li"},"newSelection()")," method with the ",(0,n.kt)("inlineCode",{parentName:"li"},"dk keep ordered")," option")),(0,n.kt)("p",null,"Las selecciones de entidades desordenadas se crean en los siguientes casos:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"result of a standard ",(0,n.kt)("inlineCode",{parentName:"li"},"query()")," on a selection (of any type) or a ",(0,n.kt)("inlineCode",{parentName:"li"},"query()")," on a dataclass,"),(0,n.kt)("li",{parentName:"ul"},"resultado del m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"li"},"newSelection()")," sin opci\xf3n,"),(0,n.kt)("li",{parentName:"ul"},"result of any of the comparison methods, whatever the input selection types: ",(0,n.kt)("inlineCode",{parentName:"li"},"or()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"and()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"minus()"),".",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("blockquote",{parentName:"blockquote"},(0,n.kt)("p",{parentName:"blockquote"},"The following entity selections are always ",(0,n.kt)("strong",{parentName:"p"},"ordered"),": > > ",(0,n.kt)("em",{parentName:"p"}," entity selections returned by 4D Server to a remote client > ")," entity selections built upon remote datastores.")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("blockquote",{parentName:"blockquote"},(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("blockquote",{parentName:"blockquote"},(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("blockquote",{parentName:"blockquote"},(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"entity selections returned by 4D Server to a remote client > * entity selections built upon remote datastores."))))))))))))),(0,n.kt)("li",{parentName:"ul"},"selecciones de entidades basadas en datastores remotos."))))),(0,n.kt)("p",null,"Note that when an ordered entity selection becomes an unordered entity selection, any repeated entity references are removed."))}u.isMDXComponent=!0},76930:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ExposeDataclass-493afc3bdbd30cb758f171009c9d11bb.png"},26492:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/companyTable-15e8c71e579a6392b89a8e3f45aa8536.png"},42684:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dataclassProperties-b0e6524ae14723315b5d45435df82853.png"},56260:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/datastoreMapping-833be12255d9e7b9cde49426a0cc902f.png"},42202:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/relationProperties-f7d9bc6fc793e2bae76ea2164c37ffe3.png"}}]);