/*! For license information please see bafc1054.b4e67eeb.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31845],{307507:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var a=s(474848),t=s(28453);const d={id:"manData",title:"Manipulaci\xf3n de datos"},i=void 0,o={id:"REST/manData",title:"Manipulaci\xf3n de datos",description:"Todos los atributos, dataclasses expuestos y todas las funciones pueden ser accedidos a trav\xe9s de REST. Los nombres de clases de datos, de atributos y de funciones son sensibles a las may\xfasculas y min\xfasculas; sin embargo, los datos de las b\xfasquedas no lo son.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/REST/manData.md",sourceDirName:"REST",slug:"/REST/manData",permalink:"/docs/es/REST/manData",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FmanData.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"manData",title:"Manipulaci\xf3n de datos"},sidebar:"docs",previous:{title:"Obtener informaci\xf3n del servidor",permalink:"/docs/es/REST/genInfo"},next:{title:"Llamar a las funciones de clase ORDA",permalink:"/docs/es/REST/classFunctions"}},r={},l=[{value:"Buscar datos",id:"Buscar-datos",level:2},{value:"A\xf1adir, modificar y eliminar entidades",id:"A\xf1adir-modificar-y-eliminar-entidades",level:2},{value:"Navegaci\xf3n de datos",id:"Navegaci\xf3n-de-datos",level:2},{value:"Creaci\xf3n y gesti\xf3n del conjunto de entidades",id:"Creaci\xf3n-y-gesti\xf3n-del-conjunto-de-entidades",level:2},{value:"C\xe1lculo de datos",id:"C\xe1lculo-de-datos",level:2},{value:"Llamar las funciones de clase del modelo de datos",id:"Llamar-las-funciones-de-clase-del-modelo-de-datos",level:2},{value:"Selecci\xf3n de atributos a obtener",id:"Selecci\xf3n-de-atributos-a-obtener",level:2},{value:"Ejemplos",id:"Ejemplos",level:3},{value:"Ejemplo con una dataclass",id:"Ejemplo-con-una-dataclass",level:4},{value:"Ejemplo de entidad",id:"Ejemplo-de-entidad",level:4},{value:"Ejemplo de conjunto de entidades",id:"Ejemplo-de-conjunto-de-entidades",level:4},{value:"Visualizaci\xf3n de un atributo de imagen",id:"Visualizaci\xf3n-de-un-atributo-de-imagen",level:2},{value:"Guardar un atributo BLOB en el disco",id:"Guardar-un-atributo-BLOB-en-el-disco",level:2},{value:"Recuperar s\xf3lo una entidad",id:"Recuperar-s\xf3lo-una-entidad",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Todos ",(0,a.jsx)(n.a,{href:"/docs/es/REST/configuration#exposing-tables-and-fields",children:"los atributos, dataclasses expuestos"})," y todas las ",(0,a.jsx)(n.a,{href:"/docs/es/REST/classFunctions",children:"funciones"})," pueden ser accedidos a trav\xe9s de REST. Los nombres de clases de datos, de atributos y de funciones son sensibles a las may\xfasculas y min\xfasculas; sin embargo, los datos de las b\xfasquedas no lo son."]}),"\n",(0,a.jsx)(n.h2,{id:"Buscar-datos",children:"Buscar datos"}),"\n",(0,a.jsxs)(n.p,{children:["To query data directly, you can do so using the ",(0,a.jsx)(n.a,{href:"/docs/es/REST/filter",children:(0,a.jsx)(n.code,{children:"$filter"})}),' function. Por ejemplo, para encontrar a una persona llamada "Smith", podr\xeda escribir:']}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:'http://127.0.0.1:8081/rest/Person/?$filter="lastName=Smith"'})}),"\n",(0,a.jsx)(n.h2,{id:"A\xf1adir-modificar-y-eliminar-entidades",children:"A\xf1adir, modificar y eliminar entidades"}),"\n",(0,a.jsx)(n.p,{children:"Con la API REST, puede realizar todas las manipulaciones a los datos como puede hacerlo en 4D."}),"\n",(0,a.jsxs)(n.p,{children:["To add and modify entities, you can call ",(0,a.jsx)(n.a,{href:"/docs/es/REST/method#methodupdate",children:(0,a.jsx)(n.code,{children:"$method=update"})}),". If you want to delete one or more entities, you can use ",(0,a.jsx)(n.a,{href:"/docs/es/REST/method#methoddelete",children:(0,a.jsx)(n.code,{children:"$method=delete"})}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Besides retrieving a single entity in a dataclass using ",(0,a.jsx)(n.a,{href:"/docs/es/REST/dataClass#dataclasskey",children:"{dataClass}({key})"}),", you can also write a ",(0,a.jsx)(n.a,{href:"/docs/es/REST/classFunctions#function-calls",children:"class function"})," that returns an entity selection (or a collection)."]}),"\n",(0,a.jsxs)(n.p,{children:["Before returning a selection, you can also sort it by using ",(0,a.jsx)(n.a,{href:"/docs/es/REST/orderby",children:(0,a.jsx)(n.code,{children:"$orderby"})})," one one or more attributes (even relation attributes)."]}),"\n",(0,a.jsx)(n.h2,{id:"Navegaci\xf3n-de-datos",children:"Navegaci\xf3n de datos"}),"\n",(0,a.jsxs)(n.p,{children:["Add the ",(0,a.jsx)(n.a,{href:"/docs/es/REST/skip",children:(0,a.jsx)(n.code,{children:"$skip"})})," (to define with which entity to start) and ",(0,a.jsx)(n.a,{href:"/docs/es/REST/top_$limit",children:(0,a.jsx)(n.code,{children:"$top/$limit"})})," (to define how many entities to return) REST requests to your queries or entity selections to navigate the collection of entities."]}),"\n",(0,a.jsx)(n.h2,{id:"Creaci\xf3n-y-gesti\xf3n-del-conjunto-de-entidades",children:"Creaci\xf3n y gesti\xf3n del conjunto de entidades"}),"\n",(0,a.jsxs)(n.p,{children:["Un conjunto de entidades (tambi\xe9n conocido como ",(0,a.jsx)(n.em,{children:"selecci\xf3n de entidades"}),") es una colecci\xf3n de entidades obtenidas a trav\xe9s de una petici\xf3n REST que se almacena en la cach\xe9 de 4D Server. El uso de un conjunto de entidades evita que se consulte continuamente la aplicaci\xf3n para obtener los mismos resultados. El acceso a un conjunto de entidades es mucho m\xe1s r\xe1pido y puede mejorar la velocidad de su aplicaci\xf3n."]}),"\n",(0,a.jsxs)(n.p,{children:["To create an entity set, call ",(0,a.jsx)(n.a,{href:"/docs/es/REST/method#methodentityset",children:(0,a.jsx)(n.code,{children:"$method=entityset"})})," in your REST request. As a measure of security, you can also use ",(0,a.jsx)(n.a,{href:"/docs/es/REST/savedfilter",children:(0,a.jsx)(n.code,{children:"$savedfilter"})})," and/or ",(0,a.jsx)(n.a,{href:"/docs/es/REST/savedorderby",children:(0,a.jsx)(n.code,{children:"$savedorderby"})})," when you call ",(0,a.jsx)(n.a,{href:"/docs/es/REST/filter",children:(0,a.jsx)(n.code,{children:"$filter"})})," and/or ",(0,a.jsx)(n.a,{href:"/docs/es/REST/orderby",children:(0,a.jsx)(n.code,{children:"$orderby"})})," so that if ever the entity set timed out or was removed from the server, it can be quickly retrieved with the same ID as before."]}),"\n",(0,a.jsxs)(n.p,{children:["To access the entity set, you must use ",(0,a.jsx)(n.code,{children:"$entityset/\\{entitySetID\\}"}),", for example:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"/rest/People/$entityset/0AF4679A5C394746BFEB68D2162A19FF"})}),"\n",(0,a.jsxs)(n.p,{children:["By default, an entity set is stored for two hours; however, you can change the timeout by passing a new value to ",(0,a.jsx)(n.a,{href:"/docs/es/REST/timeout",children:(0,a.jsx)(n.code,{children:"$timeout"})}),". El tiempo de espera se restablece continuamente al valor definido para su tiempo de espera (ya sea el predeterminado o el que usted defina) cada vez que lo utilice."]}),"\n",(0,a.jsxs)(n.p,{children:["If you want to remove an entity set from 4D Server's cache, you can use ",(0,a.jsx)(n.a,{href:"/docs/es/REST/method#methodrelease",children:(0,a.jsx)(n.code,{children:"$method=release"})}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Si se modifica alguno de los atributos de la entidad en el conjunto de entidades, los valores se actualizar\xe1n. Sin embargo, si se modifica un valor que formaba parte de la consulta ejecutada para crear el conjunto de entidades, no se eliminar\xe1 del conjunto de entidades aunque ya no se ajuste a los criterios de b\xfasqueda. Las entidades que elimine, por supuesto, dejar\xe1n de formar parte del conjunto de entidades."}),"\n",(0,a.jsx)(n.p,{children:"Si el conjunto de entidades ya no existe en la cach\xe9 de 4D Server, se recrear\xe1 con un nuevo tiempo de espera por defecto de 10 minutos. El conjunto de entidades se refrescar\xe1 (pueden incluirse ciertas entidades y eliminarse otras) desde la \xfaltima vez que se cre\xf3, si ya no exist\xeda antes de recrearlo."}),"\n",(0,a.jsxs)(n.p,{children:["Utilizando ",(0,a.jsx)(n.a,{href:"/docs/es/REST/entityset#entitysetentitysetidoperatorothercollection",children:(0,a.jsx)(n.code,{children:"$entityset/\\{entitySetID\\}?$logicOperator... &$otherCollection"})}),", you can combine two entity sets that you previously created. Puede combinar los resultados en ambos, devolver s\xf3lo lo que es com\xfan entre los dos, o devolver lo que no es com\xfan entre los dos."]}),"\n",(0,a.jsxs)(n.p,{children:["A new selection of entities is returned; however, you can also create a new entity set by calling ",(0,a.jsx)(n.a,{href:"/docs/es/REST/method#methodentityset",children:(0,a.jsx)(n.code,{children:"$method=entityset"})})," at the end of the REST request."]}),"\n",(0,a.jsx)(n.h2,{id:"C\xe1lculo-de-datos",children:"C\xe1lculo de datos"}),"\n",(0,a.jsxs)(n.p,{children:["By using ",(0,a.jsx)(n.a,{href:"/docs/es/REST/compute",children:(0,a.jsx)(n.code,{children:"$compute"})}),", you can compute the ",(0,a.jsx)(n.strong,{children:"average"}),", ",(0,a.jsx)(n.strong,{children:"count"}),", ",(0,a.jsx)(n.strong,{children:"min"}),", ",(0,a.jsx)(n.strong,{children:"max"}),", or ",(0,a.jsx)(n.strong,{children:"sum"})," for a specific attribute in a dataclass. Tambi\xe9n puede calcular todos los valores con la palabra clave $all."]}),"\n",(0,a.jsx)(n.p,{children:"Por ejemplo, para obtener el salario m\xe1s alto:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"/rest/Employee/salary/?$compute=max"})}),"\n",(0,a.jsx)(n.p,{children:"Para calcular todos los valores y devolver un objeto JSON:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"/rest/Employee/salary/?$compute=$all"})}),"\n",(0,a.jsx)(n.h2,{id:"Llamar-las-funciones-de-clase-del-modelo-de-datos",children:"Llamar las funciones de clase del modelo de datos"}),"\n",(0,a.jsxs)(n.p,{children:["Puede llamar las ",(0,a.jsx)(n.a,{href:"/docs/es/REST/classFunctions",children:"funciones de clase usuarios"})," ORDA del modelo de datos v\xeda las peticiones POST, para poder beneficiarse del API de la aplicaci\xf3n objetivo. Por ejemplo, si ha definido una funci\xf3n ",(0,a.jsx)(n.code,{children:"getCity()"})," en la dataclass City, podr\xeda llamarla utilizando la siguiente petici\xf3n:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"/rest/City/getCity"})}),"\n",(0,a.jsxs)(n.p,{children:["con los datos en el cuerpo de la petici\xf3n: ",(0,a.jsx)(n.code,{children:'["Paris"]'})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Las llamadas a los m\xe9todos proyecto 4D que se exponen como servicio REST a\xfan se soportan, pero son obsoletas."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"Selecci\xf3n-de-atributos-a-obtener",children:"Selecci\xf3n de atributos a obtener"}),"\n",(0,a.jsxs)(n.p,{children:["Siempre se puede definir qu\xe9 atributos devolver en la respuesta REST despu\xe9s de una solicitud inicial pasando su ruta en la solicitud (",(0,a.jsx)(n.em,{children:"por ejemplo"}),", ",(0,a.jsx)(n.code,{children:"Company(1)/name,revenues/"}),")"]}),"\n",(0,a.jsx)(n.p,{children:"Puede aplicar este filtro de las siguientes maneras:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Object"}),(0,a.jsx)(n.th,{children:"Sintaxis"}),(0,a.jsx)(n.th,{children:"Ejemplo"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Dataclass"}),(0,a.jsx)(n.td,{children:"{dataClass}/{att1,att2...}"}),(0,a.jsx)(n.td,{children:"/People/firstName,lastName"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Collection de entidades"}),(0,a.jsx)(n.td,{children:'{dataClass}/{att1,att2...}/?$filter="{filter}"'}),(0,a.jsx)(n.td,{children:"/People/firstName,lastName/?$filter=\"lastName='a@'\""})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Entidad espec\xedfica"}),(0,a.jsx)(n.td,{children:"{dataClass}({ID})/{att1,att2...}"}),(0,a.jsx)(n.td,{children:"/People(1)/firstName,lastName"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{children:"{dataClass}:{attribute}(value)/{att1,att2...}/"}),(0,a.jsx)(n.td,{children:"/People:firstName(Larry)/firstName,lastName/"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Entity selection"}),(0,a.jsx)(n.td,{children:"{dataClass}/{att1,att2...}/$entityset/{entitySetID}"}),(0,a.jsx)(n.td,{children:"/People/firstName/$entityset/528BF90F10894915A4290158B4281E61"})]})]})]}),"\n",(0,a.jsxs)(n.p,{children:["Los atributos deben estar delimitados por una coma, ",(0,a.jsx)(n.em,{children:"i.e."}),", ",(0,a.jsx)(n.code,{children:"/Employee/firstName,lastName,salary"}),". Se pueden pasar atributos de almacenamiento o relacionales."]}),"\n",(0,a.jsx)(n.h3,{id:"Ejemplos",children:"Ejemplos"}),"\n",(0,a.jsx)(n.p,{children:"A continuaci\xf3n se presentan algunos ejemplos, que muestran c\xf3mo especificar qu\xe9 atributos devolver en funci\xf3n de la t\xe9cnica utilizada para recuperar las entidades."}),"\n",(0,a.jsx)(n.p,{children:"Puede aplicar esta t\xe9cnica a:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Clases de datos (todas o una colecci\xf3n de entidades en una clase de datos)"}),"\n",(0,a.jsx)(n.li,{children:"Entidades espec\xedficas"}),"\n",(0,a.jsx)(n.li,{children:"Conjuntos de entidades"}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"Ejemplo-con-una-dataclass",children:"Ejemplo con una dataclass"}),"\n",(0,a.jsxs)(n.p,{children:["Las siguientes peticiones devuelven s\xf3lo el nombre y el apellido de la clase de datos People (ya sea toda la clase de datos o una selecci\xf3n de entidades basada en la b\xfasqueda definida en ",(0,a.jsx)(n.code,{children:"$filter"}),")."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/People/firstName,lastName/"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Resultado"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    __entityModel: "People",\n    __COUNT: 4,\n    __SENT: 4,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "1",\n            __STAMP: 1,\n            firstName: "John",\n            lastName: "Smith"\n        },\n        {\n            __KEY: "2",\n            __STAMP: 2,\n            firstName: "Susan",\n            lastName: "O\'Leary"\n        },\n        {\n            __KEY: "3",\n            __STAMP: 2,\n            firstName: "Pete",\n            lastName: "Marley"\n        },\n        {\n            __KEY: "4",\n            __STAMP: 1,\n            firstName: "Beth",\n            lastName: "Adams"\n        }\n    ]\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/People/firstName,lastName/?$filter=\"lastName='A@'\"/"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Resultado"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    __entityModel: "People",\n    __COUNT: 1,\n    __SENT: 1,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "4",\n            __STAMP: 4,\n            firstName: "Beth",\n            lastName: "Adams"\n        }\n    ]\n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"Ejemplo-de-entidad",children:"Ejemplo de entidad"}),"\n",(0,a.jsx)(n.p,{children:"La siguiente petici\xf3n devuelve s\xf3lo los atributos de nombre y apellido de una entidad espec\xedfica de la clase de datos People:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/People(3)/firstName,lastName/"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Resultado"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    __entityModel: "People",\n    __KEY: "3",\n    __STAMP: 2,\n    firstName: "Pete",\n    lastName: "Marley"\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/People(3)/"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Resultado"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    __entityModel: "People",\n    __KEY: "3",\n    __STAMP: 2,\n    ID: 3,\n    firstName: "Pete",\n    lastName: "Marley",\n    salary: 30000,\n    employer: {\n        __deferred: {\n            uri: "http://127.0.0.1:8081/rest/Company(3)",\n            __KEY: "3"\n        }\n    },\n    fullName: "Pete Marley",\n    employerName: "microsoft"\n \n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"Ejemplo-de-conjunto-de-entidades",children:"Ejemplo de conjunto de entidades"}),"\n",(0,a.jsxs)(n.p,{children:["Una vez que haya ",(0,a.jsx)(n.a,{href:"#creating-and-managing-entity-set",children:"creado un conjunto de entidades"}),", puede filtrar la informaci\xf3n que contiene definiendo qu\xe9 atributos debe devolver:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/People/firstName,employer.name/$entityset/BDCD8AABE13144118A4CF8641D5883F5?$expand=employer"})}),"\n",(0,a.jsx)(n.h2,{id:"Visualizaci\xf3n-de-un-atributo-de-imagen",children:"Visualizaci\xf3n de un atributo de imagen"}),"\n",(0,a.jsx)(n.p,{children:"Si desea visualizar un atributo de imagen en su totalidad, escriba lo siguiente:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo"})}),"\n",(0,a.jsxs)(n.p,{children:["For more information about the image formats, refer to ",(0,a.jsx)(n.a,{href:"/docs/es/REST/imageformat",children:(0,a.jsx)(n.code,{children:"$imageformat"})}),". For more information about the version parameter, refer to ",(0,a.jsx)(n.a,{href:"/docs/es/REST/version",children:(0,a.jsx)(n.code,{children:"$version"})}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"Guardar-un-atributo-BLOB-en-el-disco",children:"Guardar un atributo BLOB en el disco"}),"\n",(0,a.jsx)(n.p,{children:"Si quiere guardar un BLOB almacenado en su clase de datos, puedes escribir lo siguiente:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt"})}),"\n",(0,a.jsx)(n.h2,{id:"Recuperar-s\xf3lo-una-entidad",children:"Recuperar s\xf3lo una entidad"}),"\n",(0,a.jsxs)(n.p,{children:["You can use the ",(0,a.jsx)(n.a,{href:"%7BdataClass%7D.html#dataclassattributevalue",children:(0,a.jsx)(n.code,{children:"\\{dataClass\\}:{attribute}(value)"})})," syntax when you want to retrieve only one entity. Es especialmente \xfatil cuando se quiere hacer una b\xfasqueda relacionada que no se crea en la llave primaria de la clase de datos. Por ejemplo, puede escribir:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:'GET  /rest/Company:companyCode("Acme001")'})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},221020:(e,n,s)=>{var a=s(296540),t=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,s){var a,d={},l=null,c=null;for(a in void 0!==s&&(l=""+s),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)i.call(n,a)&&!r.hasOwnProperty(a)&&(d[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===d[a]&&(d[a]=n[a]);return{$$typeof:t,type:e,key:l,ref:c,props:d,_owner:o.current}}n.Fragment=d,n.jsx=l,n.jsxs=l},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var a=s(296540);const t={},d=a.createContext(t);function i(e){const n=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);