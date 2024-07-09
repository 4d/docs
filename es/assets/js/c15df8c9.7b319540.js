/*! For license information please see c15df8c9.7b319540.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[67486],{310593:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>r});var s=a(474848),d=a(28453);const i={id:"manData",title:"Manipulaci\xf3n de datos"},t=void 0,l={id:"REST/manData",title:"Manipulaci\xf3n de datos",description:"Todos los atributos, dataclasses expuestos y todas las funciones pueden ser accedidos a trav\xe9s de REST. Los nombres de clases de datos, de atributos y de funciones son sensibles a las may\xfasculas y min\xfasculas; sin embargo, los datos de las b\xfasquedas no lo son.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/REST/manData.md",sourceDirName:"REST",slug:"/REST/manData",permalink:"/docs/es/20/REST/manData",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FmanData.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"manData",title:"Manipulaci\xf3n de datos"},sidebar:"docs",previous:{title:"Obtener informaci\xf3n del servidor",permalink:"/docs/es/20/REST/genInfo"},next:{title:"Llamar a las funciones de clase ORDA",permalink:"/docs/es/20/REST/classFunctions"}},o={},r=[{value:"Buscar datos",id:"Buscar-datos",level:2},{value:"A\xf1adir, modificar y eliminar entidades",id:"A\xf1adir-modificar-y-eliminar-entidades",level:2},{value:"Navegaci\xf3n de datos",id:"Navegaci\xf3n-de-datos",level:2},{value:"Creaci\xf3n y gesti\xf3n del conjunto de entidades",id:"Creaci\xf3n-y-gesti\xf3n-del-conjunto-de-entidades",level:2},{value:"C\xe1lculo de datos",id:"C\xe1lculo-de-datos",level:2},{value:"Llamar las funciones de clase del modelo de datos",id:"Llamar-las-funciones-de-clase-del-modelo-de-datos",level:2},{value:"Selecci\xf3n de atributos a obtener",id:"Selecci\xf3n-de-atributos-a-obtener",level:2},{value:"Ejemplos",id:"Ejemplos",level:3},{value:"Ejemplo con una dataclass",id:"Ejemplo-con-una-dataclass",level:4},{value:"Ejemplo de entidad",id:"Ejemplo-de-entidad",level:4},{value:"Ejemplo de conjunto de entidades",id:"Ejemplo-de-conjunto-de-entidades",level:4},{value:"Visualizaci\xf3n de un atributo de imagen",id:"Visualizaci\xf3n-de-un-atributo-de-imagen",level:2},{value:"Guardar un atributo BLOB en el disco",id:"Guardar-un-atributo-BLOB-en-el-disco",level:2},{value:"Recuperar s\xf3lo una entidad",id:"Recuperar-s\xf3lo-una-entidad",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Todos ",(0,s.jsx)(n.a,{href:"/docs/es/20/REST/configuration#exposing-tables-and-fields",children:"los atributos, dataclasses expuestos"})," y todas las ",(0,s.jsx)(n.a,{href:"/docs/es/20/REST/classFunctions",children:"funciones"})," pueden ser accedidos a trav\xe9s de REST. Los nombres de clases de datos, de atributos y de funciones son sensibles a las may\xfasculas y min\xfasculas; sin embargo, los datos de las b\xfasquedas no lo son."]}),"\n",(0,s.jsx)(n.h2,{id:"Buscar-datos",children:"Buscar datos"}),"\n",(0,s.jsxs)(n.p,{children:["Para consultar los datos directamente, puede hacerlo mediante la funci\xf3n ",(0,s.jsx)(n.a,{href:"/docs/es/20/REST/filter",children:(0,s.jsx)(n.code,{children:"$filter"})}),'. Por ejemplo, para encontrar a una persona llamada "Smith", podr\xeda escribir:']}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'http://127.0.0.1:8081/rest/Person/?$filter="lastName=Smith"'})}),"\n",(0,s.jsx)(n.h2,{id:"A\xf1adir-modificar-y-eliminar-entidades",children:"A\xf1adir, modificar y eliminar entidades"}),"\n",(0,s.jsx)(n.p,{children:"Con la API REST, puede realizar todas las manipulaciones a los datos como puede hacerlo en 4D."}),"\n",(0,s.jsxs)(n.p,{children:["Para a\xf1adir y modificar entidades, puede llamar a ",(0,s.jsx)(n.a,{href:"/docs/es/20/REST/method#methodupdate",children:(0,s.jsx)(n.code,{children:"$method=update"})}),". Si desea eliminar una o varias entidades, puede utilizar ",(0,s.jsx)(n.a,{href:"/docs/es/20/REST/method#methoddelete",children:(0,s.jsx)(n.code,{children:"$method=delete"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Besides retrieving a single entity in a dataclass using ",(0,s.jsx)(n.a,{href:"/docs/es/20/REST/dataClass#dataclasskey",children:"{dataClass}({key})"}),", you can also write a ",(0,s.jsx)(n.a,{href:"/docs/es/20/REST/classFunctions#function-calls",children:"class function"})," that returns an entity selection (or a collection)."]}),"\n",(0,s.jsxs)(n.p,{children:["Antes de devolver una selecci\xf3n, tambi\xe9n puede ordenarla utilizando ",(0,s.jsx)(n.a,{href:"/docs/es/20/REST/orderby",children:(0,s.jsx)(n.code,{children:"$orderby"})})," uno o varios atributos (incluso los atributos de relaci\xf3n)."]}),"\n",(0,s.jsx)(n.h2,{id:"Navegaci\xf3n-de-datos",children:"Navegaci\xf3n de datos"}),"\n",(0,s.jsxs)(n.p,{children:["A\xf1ada el ",(0,s.jsx)(n.a,{href:"/docs/es/20/REST/skip",children:(0,s.jsx)(n.code,{children:"$skip"})})," (para definir con qu\xe9 entidad empezar) y ",(0,s.jsx)(n.a,{href:"/docs/es/20/REST/top_$limit",children:(0,s.jsx)(n.code,{children:"$top/$limit"})})," (para definir cu\xe1ntas entidades devolver) de las peticiones REST a sus consultas o selecciones de entidades para navegar por la colecci\xf3n de entidades."]}),"\n",(0,s.jsx)(n.h2,{id:"Creaci\xf3n-y-gesti\xf3n-del-conjunto-de-entidades",children:"Creaci\xf3n y gesti\xf3n del conjunto de entidades"}),"\n",(0,s.jsxs)(n.p,{children:["Un conjunto de entidades (tambi\xe9n conocido como ",(0,s.jsx)(n.em,{children:"selecci\xf3n de entidades"}),") es una colecci\xf3n de entidades obtenidas a trav\xe9s de una petici\xf3n REST que se almacena en la cach\xe9 de 4D Server. El uso de un conjunto de entidades evita que se consulte continuamente la aplicaci\xf3n para obtener los mismos resultados. El acceso a un conjunto de entidades es mucho m\xe1s r\xe1pido y puede mejorar la velocidad de su aplicaci\xf3n."]}),"\n",(0,s.jsxs)(n.p,{children:["Para crear un conjunto de entidades, llame a ",(0,s.jsx)(n.a,{href:"/docs/es/20/REST/method#methodentityset",children:(0,s.jsx)(n.code,{children:"$method=entityset"})})," en su solicitud REST. Como medida de seguridad, tambi\xe9n se puede utilizar ",(0,s.jsx)(n.a,{href:"/docs/es/20/REST/savedfilter",children:(0,s.jsx)(n.code,{children:"$savedfilter"})})," y/o ",(0,s.jsx)(n.a,{href:"/docs/es/20/REST/savedorderby",children:(0,s.jsx)(n.code,{children:"$savedorderby"})})," cuando se llame a ",(0,s.jsx)(n.a,{href:"/docs/es/20/REST/filter",children:(0,s.jsx)(n.code,{children:"$filter"})})," y/o ",(0,s.jsx)(n.a,{href:"/docs/es/20/REST/orderby",children:(0,s.jsx)(n.code,{children:"$orderby"})})," para que si alguna vez el conjunto de entidades se agota o se elimina del servidor, se pueda recuperar r\xe1pidamente con el mismo ID que antes."]}),"\n",(0,s.jsxs)(n.p,{children:["To access the entity set, you must use ",(0,s.jsx)(n.code,{children:"$entityset/\\{entitySetID\\}"}),", for example:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"/rest/People/$entityset/0AF4679A5C394746BFEB68D2162A19FF"})}),"\n",(0,s.jsxs)(n.p,{children:["Por defecto, un conjunto de entidades se almacena durante dos horas; sin embargo, puede cambiar el tiempo de espera pasando un nuevo valor a ",(0,s.jsx)(n.a,{href:"/docs/es/20/REST/timeout",children:(0,s.jsx)(n.code,{children:"$timeout"})}),". El tiempo de espera se restablece continuamente al valor definido para su tiempo de espera (ya sea el predeterminado o el que usted defina) cada vez que lo utilice."]}),"\n",(0,s.jsxs)(n.p,{children:["Si desea eliminar un conjunto de entidades de la cach\xe9 de 4D Server, puede utilizar ",(0,s.jsx)(n.a,{href:"/docs/es/20/REST/method#methodrelease",children:(0,s.jsx)(n.code,{children:"$method=release"})}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Si se modifica alguno de los atributos de la entidad en el conjunto de entidades, los valores se actualizar\xe1n. Sin embargo, si se modifica un valor que formaba parte de la consulta ejecutada para crear el conjunto de entidades, no se eliminar\xe1 del conjunto de entidades aunque ya no se ajuste a los criterios de b\xfasqueda. Las entidades que elimine, por supuesto, dejar\xe1n de formar parte del conjunto de entidades."}),"\n",(0,s.jsx)(n.p,{children:"Si el conjunto de entidades ya no existe en la cach\xe9 de 4D Server, se recrear\xe1 con un nuevo tiempo de espera por defecto de 10 minutos. El conjunto de entidades se refrescar\xe1 (pueden incluirse ciertas entidades y eliminarse otras) desde la \xfaltima vez que se cre\xf3, si ya no exist\xeda antes de recrearlo."}),"\n",(0,s.jsxs)(n.p,{children:["Using ",(0,s.jsx)(n.a,{href:"/docs/es/20/REST/entityset#entitysetentitysetidoperatorothercollection",children:(0,s.jsx)(n.code,{children:"$entityset/\\{entitySetID\\}?$logicOperator... &$otherCollection"})}),", you can combine two entity sets that you previously created. Puede combinar los resultados en ambos, devolver s\xf3lo lo que es com\xfan entre los dos, o devolver lo que no es com\xfan entre los dos."]}),"\n",(0,s.jsxs)(n.p,{children:["Se devuelve una nueva selecci\xf3n de entidades; sin embargo, tambi\xe9n se puede crear un nuevo conjunto de entidades llamando ",(0,s.jsx)(n.a,{href:"/docs/es/20/REST/method#methodentityset",children:(0,s.jsx)(n.code,{children:"$method=entityset"})})," al final de la petici\xf3n REST."]}),"\n",(0,s.jsx)(n.h2,{id:"C\xe1lculo-de-datos",children:"C\xe1lculo de datos"}),"\n",(0,s.jsxs)(n.p,{children:["Utilizando ",(0,s.jsx)(n.a,{href:"/docs/es/20/REST/compute",children:(0,s.jsx)(n.code,{children:"$compute"})}),", se puede calcular el ",(0,s.jsx)(n.strong,{children:"promedio"}),", el ",(0,s.jsx)(n.strong,{children:"count"}),", el ",(0,s.jsx)(n.strong,{children:"min"}),", el ",(0,s.jsx)(n.strong,{children:"max"}),", o la ",(0,s.jsx)(n.strong,{children:"suma"})," para un atributo espec\xedfico en una clase de datos. Tambi\xe9n puede calcular todos los valores con la palabra clave $all."]}),"\n",(0,s.jsx)(n.p,{children:"Por ejemplo, para obtener el salario m\xe1s alto:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"/rest/Employee/salary/?$compute=max"})}),"\n",(0,s.jsx)(n.p,{children:"Para calcular todos los valores y devolver un objeto JSON:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"/rest/Employee/salary/?$compute=$all"})}),"\n",(0,s.jsx)(n.h2,{id:"Llamar-las-funciones-de-clase-del-modelo-de-datos",children:"Llamar las funciones de clase del modelo de datos"}),"\n",(0,s.jsxs)(n.p,{children:["Puede llamar las ",(0,s.jsx)(n.a,{href:"/docs/es/20/REST/classFunctions",children:"funciones de clase usuarios"})," ORDA del modelo de datos v\xeda las peticiones POST, para poder beneficiarse del API de la aplicaci\xf3n objetivo. Por ejemplo, si ha definido una funci\xf3n ",(0,s.jsx)(n.code,{children:"getCity()"})," en la dataclass City, podr\xeda llamarla utilizando la siguiente petici\xf3n:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"/rest/City/getCity"})}),"\n",(0,s.jsxs)(n.p,{children:["con los datos en el cuerpo de la petici\xf3n: ",(0,s.jsx)(n.code,{children:'["Paris"]'})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Las llamadas a los m\xe9todos proyecto 4D que se exponen como servicio REST a\xfan se soportan, pero son obsoletas."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"Selecci\xf3n-de-atributos-a-obtener",children:"Selecci\xf3n de atributos a obtener"}),"\n",(0,s.jsxs)(n.p,{children:["Siempre se puede definir qu\xe9 atributos devolver en la respuesta REST despu\xe9s de una solicitud inicial pasando su ruta en la solicitud (",(0,s.jsx)(n.em,{children:"por ejemplo"}),", ",(0,s.jsx)(n.code,{children:"Company(1)/name,revenues/"}),")"]}),"\n",(0,s.jsx)(n.p,{children:"Puede aplicar este filtro de las siguientes maneras:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Object"}),(0,s.jsx)(n.th,{children:"Sintaxis"}),(0,s.jsx)(n.th,{children:"Ejemplo"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Dataclass"}),(0,s.jsx)(n.td,{children:"{dataClass}/{att1,att2...}"}),(0,s.jsx)(n.td,{children:"/People/firstName,lastName"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Collection de entidades"}),(0,s.jsx)(n.td,{children:'{dataClass}/{att1,att2...}/?$filter="{filter}"'}),(0,s.jsx)(n.td,{children:"/People/firstName,lastName/?$filter=\"lastName='a@'\""})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Entidad espec\xedfica"}),(0,s.jsx)(n.td,{children:"{dataClass}({ID})/{att1,att2...}"}),(0,s.jsx)(n.td,{children:"/People(1)/firstName,lastName"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"{dataClass}:{attribute}(value)/{att1,att2...}/"}),(0,s.jsx)(n.td,{children:"/People:firstName(Larry)/firstName,lastName/"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Entity selection"}),(0,s.jsx)(n.td,{children:"{dataClass}/{att1,att2...}/$entityset/{entitySetID}"}),(0,s.jsx)(n.td,{children:"/People/firstName/$entityset/528BF90F10894915A4290158B4281E61"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Los atributos deben estar delimitados por una coma, ",(0,s.jsx)(n.em,{children:"i.e."}),", ",(0,s.jsx)(n.code,{children:"/Employee/firstName,lastName,salary"}),". Se pueden pasar atributos de almacenamiento o relacionales."]}),"\n",(0,s.jsx)(n.h3,{id:"Ejemplos",children:"Ejemplos"}),"\n",(0,s.jsx)(n.p,{children:"A continuaci\xf3n se presentan algunos ejemplos, que muestran c\xf3mo especificar qu\xe9 atributos devolver en funci\xf3n de la t\xe9cnica utilizada para recuperar las entidades."}),"\n",(0,s.jsx)(n.p,{children:"Puede aplicar esta t\xe9cnica a:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Clases de datos (todas o una colecci\xf3n de entidades en una clase de datos)"}),"\n",(0,s.jsx)(n.li,{children:"Entidades espec\xedficas"}),"\n",(0,s.jsx)(n.li,{children:"Conjuntos de entidades"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"Ejemplo-con-una-dataclass",children:"Ejemplo con una dataclass"}),"\n",(0,s.jsxs)(n.p,{children:["Las siguientes peticiones devuelven s\xf3lo el nombre y el apellido de la clase de datos People (ya sea toda la clase de datos o una selecci\xf3n de entidades basada en la b\xfasqueda definida en ",(0,s.jsx)(n.code,{children:"$filter"}),")."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/People/firstName,lastName/"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Resultado"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    __entityModel: "People",\n    __COUNT: 4,\n    __SENT: 4,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "1",\n            __STAMP: 1,\n            firstName: "John",\n            lastName: "Smith"\n        },\n        {\n            __KEY: "2",\n            __STAMP: 2,\n            firstName: "Susan",\n            lastName: "O\'Leary"\n        },\n        {\n            __KEY: "3",\n            __STAMP: 2,\n            firstName: "Pete",\n            lastName: "Marley"\n        },\n        {\n            __KEY: "4",\n            __STAMP: 1,\n            firstName: "Beth",\n            lastName: "Adams"\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/People/firstName,lastName/?$filter=\"lastName='A@'\"/"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Resultado"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    __entityModel: "People",\n    __COUNT: 1,\n    __SENT: 1,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "4",\n            __STAMP: 4,\n            firstName: "Beth",\n            lastName: "Adams"\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"Ejemplo-de-entidad",children:"Ejemplo de entidad"}),"\n",(0,s.jsx)(n.p,{children:"La siguiente petici\xf3n devuelve s\xf3lo los atributos de nombre y apellido de una entidad espec\xedfica de la clase de datos People:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/People(3)/firstName,lastName/"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Resultado"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    __entityModel: "People",\n    __KEY: "3",\n    __STAMP: 2,\n    firstName: "Pete",\n    lastName: "Marley"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/People(3)/"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Resultado"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    __entityModel: "People",\n    __KEY: "3",\n    __STAMP: 2,\n    ID: 3,\n    firstName: "Pete",\n    lastName: "Marley",\n    salary: 30000,\n    employer: {\n        __deferred: {\n            uri: "http://127.0.0.1:8081/rest/Company(3)",\n            __KEY: "3"\n        }\n    },\n    fullName: "Pete Marley",\n    employerName: "microsoft"\n\n}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"Ejemplo-de-conjunto-de-entidades",children:"Ejemplo de conjunto de entidades"}),"\n",(0,s.jsxs)(n.p,{children:["Una vez que haya ",(0,s.jsx)(n.a,{href:"#creating-and-managing-entity-set",children:"creado un conjunto de entidades"}),", puede filtrar la informaci\xf3n que contiene definiendo qu\xe9 atributos debe devolver:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/People/firstName,employer.name/$entityset/BDCD8AABE13144118A4CF8641D5883F5?$expand=employer"})}),"\n",(0,s.jsx)(n.h2,{id:"Visualizaci\xf3n-de-un-atributo-de-imagen",children:"Visualizaci\xf3n de un atributo de imagen"}),"\n",(0,s.jsx)(n.p,{children:"Si desea visualizar un atributo de imagen en su totalidad, escriba lo siguiente:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo"})}),"\n",(0,s.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre los formatos de imagen, consulte ",(0,s.jsx)(n.a,{href:"/docs/es/20/REST/imageformat",children:(0,s.jsx)(n.code,{children:"$imageformat"})}),". Para m\xe1s informaci\xf3n sobre el par\xe1metro de versi\xf3n, consulte ",(0,s.jsx)(n.a,{href:"/docs/es/20/REST/version",children:(0,s.jsx)(n.code,{children:"$version"})}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"Guardar-un-atributo-BLOB-en-el-disco",children:"Guardar un atributo BLOB en el disco"}),"\n",(0,s.jsx)(n.p,{children:"Si quiere guardar un BLOB almacenado en su clase de datos, puedes escribir lo siguiente:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt"})}),"\n",(0,s.jsx)(n.h2,{id:"Recuperar-s\xf3lo-una-entidad",children:"Recuperar s\xf3lo una entidad"}),"\n",(0,s.jsxs)(n.p,{children:["You can use the ",(0,s.jsx)(n.a,{href:"%7BdataClass%7D.html#dataclassattributevalue",children:(0,s.jsx)(n.code,{children:"\\{dataClass\\}:\\{attribute\\}(value)"})})," syntax when you want to retrieve only one entity. Es especialmente \xfatil cuando se quiere hacer una b\xfasqueda relacionada que no se crea en la llave primaria de la clase de datos. Por ejemplo, puede escribir:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'GET  /rest/Company:companyCode("Acme001")'})})]})}function u(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},221020:(e,n,a)=>{var s=a(296540),d=Symbol.for("react.element"),i=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function r(e,n,a){var s,i={},r=null,c=null;for(s in void 0!==a&&(r=""+a),void 0!==n.key&&(r=""+n.key),void 0!==n.ref&&(c=n.ref),n)t.call(n,s)&&!o.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:d,type:e,key:r,ref:c,props:i,_owner:l.current}}n.Fragment=i,n.jsx=r,n.jsxs=r},474848:(e,n,a)=>{e.exports=a(221020)},28453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>l});var s=a(296540);const d={},i=s.createContext(d);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);