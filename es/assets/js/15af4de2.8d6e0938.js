/*! For license information please see 15af4de2.8d6e0938.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71861],{727107:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=s(474848),t=s(28453);const i={id:"classFunctions",title:"Calling class functions"},d=void 0,l={id:"REST/classFunctions",title:"Calling class functions",description:"Puede llamar a funciones de clase de modelos de datos definidas para el modelo de datos ORDA a trav\xe9s de sus peticiones REST, para poder beneficiarse de la API expuesta de la aplicaci\xf3n 4D objetivo.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/REST/ClassFunctions.md",sourceDirName:"REST",slug:"/REST/classFunctions",permalink:"/docs/es/REST/classFunctions",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FClassFunctions.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"classFunctions",title:"Calling class functions"},sidebar:"docs",previous:{title:"Manipulaci\xf3n de datos",permalink:"/docs/es/REST/manData"},next:{title:"Acerca de las peticiones REST",permalink:"/docs/es/REST/REST_requests"}},r={},c=[{value:"Llamadas de las funciones",id:"llamadas-de-las-funciones",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Par\xe1metro de valor escalar",id:"par\xe1metro-de-valor-escalar",level:3},{value:"Par\xe1metro de entidad",id:"par\xe1metro-de-entidad",level:3},{value:"Par\xe1metro de entidad asociado",id:"par\xe1metro-de-entidad-asociado",level:4},{value:"Par\xe1metro de selecci\xf3n de entidad",id:"par\xe1metro-de-selecci\xf3n-de-entidad",level:3},{value:"Ejemplos de peticiones",id:"ejemplos-de-peticiones",level:2},{value:"Utilizar una funci\xf3n de clase de datastore",id:"utilizar-una-funci\xf3n-de-clase-de-datastore",level:3},{value:"Result",id:"result",level:4},{value:"Utilizar una funci\xf3n de clase de dataclass",id:"utilizar-una-funci\xf3n-de-clase-de-dataclass",level:3},{value:"Result",id:"result-1",level:4},{value:"Utilizar una funci\xf3n de clase de una entidad",id:"utilizar-una-funci\xf3n-de-clase-de-una-entidad",level:3},{value:"Result",id:"result-2",level:4},{value:"Utilizar una funci\xf3n clase entitySelection",id:"utilizar-una-funci\xf3n-clase-entityselection",level:3},{value:"Result",id:"result-3",level:4},{value:"Utilizar una funci\xf3n de clase de selecci\xf3n de entidades y un conjunto de entidades",id:"utilizar-una-funci\xf3n-de-clase-de-selecci\xf3n-de-entidades-y-un-conjunto-de-entidades",level:3},{value:"Result",id:"result-4",level:4},{value:"Utilizar una funci\xf3n de clase de selecci\xf3n de entidades y unorderBy",id:"utilizar-una-funci\xf3n-de-clase-de-selecci\xf3n-de-entidades-y-unorderby",level:3},{value:"Result",id:"result-5",level:4},{value:"Utilizar una entidad que se crear\xe1 en el servidor",id:"utilizar-una-entidad-que-se-crear\xe1-en-el-servidor",level:3},{value:"Result",id:"result-6",level:4},{value:"Utilizar una entidad a actualizar en el servidor",id:"utilizar-una-entidad-a-actualizar-en-el-servidor",level:3},{value:"Result",id:"result-7",level:4},{value:"Crear una entidad con una entidad relacionada",id:"crear-una-entidad-con-una-entidad-relacionada",level:3},{value:"Result",id:"result-8",level:4},{value:"Actualizar una entidad con una entidad relacionada",id:"actualizar-una-entidad-con-una-entidad-relacionada",level:3},{value:"Result",id:"result-9",level:4},{value:"Recibir una selecci\xf3n de entidades como par\xe1metro",id:"recibir-una-selecci\xf3n-de-entidades-como-par\xe1metro",level:3},{value:"Result",id:"result-10",level:4},{value:"Utilizar una selecci\xf3n de entidades actualizada en el cliente",id:"utilizar-una-selecci\xf3n-de-entidades-actualizada-en-el-cliente",level:3}];function o(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Puede llamar a ",(0,a.jsx)(n.a,{href:"/docs/es/ORDA/ordaClasses",children:"funciones de clase de modelos de datos"})," definidas para el modelo de datos ORDA a trav\xe9s de sus peticiones REST, para poder beneficiarse de la API expuesta de la aplicaci\xf3n 4D objetivo."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["You can also call singleton functions, see ",(0,a.jsx)(n.a,{href:"/docs/es/REST/singleton",children:"this page"})," for more information."]})}),"\n",(0,a.jsxs)(n.p,{children:["Las funciones se llaman simplemente en peticiones POST en la interfaz ORDA apropiada, sin (). Por ejemplo, si ha definido una funci\xf3n ",(0,a.jsx)(n.code,{children:"getCity()"})," en la dataclass City, podr\xeda llamarla utilizando la siguiente petici\xf3n:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"/rest/City/getCity"})}),"\n",(0,a.jsxs)(n.p,{children:["con los datos en el cuerpo de la petici\xf3n POST: ",(0,a.jsx)(n.code,{children:'["Aguada"]'})]}),"\n",(0,a.jsx)(n.p,{children:"En el lenguaje 4D, esta llamada equivale a:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'$city:=ds.City.getCity("Aguada")\n'})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["S\xf3lo las funciones con la palabra clave ",(0,a.jsx)(n.code,{children:"exposed"})," pueden ser llamadas directamente desde las peticiones REST. Ver la secci\xf3n ",(0,a.jsx)(n.a,{href:"/docs/es/ORDA/ordaClasses#exposed-vs-non-exposed-functions",children:"Funciones expuestas vs. no expuestas"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"llamadas-de-las-funciones",children:"Llamadas de las funciones"}),"\n",(0,a.jsxs)(n.p,{children:["Las funciones deben llamarse siempre utilizando peticiones ",(0,a.jsx)(n.strong,{children:"POST"})," (una petici\xf3n GET recibir\xe1 un error)."]}),"\n",(0,a.jsx)(n.p,{children:"Las funciones son llamadas en el objeto correspondiente en el almac\xe9n de datos del servidor."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Funci\xf3n de clase"}),(0,a.jsx)(n.th,{children:"Sintaxis"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"/docs/es/ORDA/ordaClasses#datastore-class",children:"datastore class"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"/rest/$catalog/DataStoreClassFunction"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"/docs/es/ORDA/ordaClasses#dataclass-class",children:"dataclass class"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"/rest/\\{dataClass\\}/DataClassClassFunction"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"/docs/es/ORDA/ordaClasses#entityselection-class",children:"entitySelection class"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"/rest/\\{dataClass\\}/EntitySelectionClassFunction"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"/rest/\\{dataClass\\}/EntitySelectionClassFunction/$entityset/entitySetNumber"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"/rest/\\{dataClass\\}/EntitySelectionClassFunction/$filter"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"/rest/\\{dataClass\\}/EntitySelectionClassFunction/$orderby"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"/docs/es/ORDA/ordaClasses#entity-class",children:"entity class"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"/rest/\\{dataClass\\}(key)/EntityClassFunction/"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"/docs/es/Concepts/classes#singleton-classes",children:"Singleton class"})}),(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.code,{children:"/rest/$singleton/SingletonClass/SingletonClassFunction"})," (see ",(0,a.jsx)(n.a,{href:"/docs/es/REST/singleton",children:"$singleton page"}),")"]})]})]})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"/rest/\\{dataClass\\}/Function"})," can be used to call either a dataclass or an entity selection function (",(0,a.jsx)(n.code,{children:"/rest/\\{dataClass\\}"})," returns all entities of the DataClass as an entity selection).",(0,a.jsx)(n.br,{}),"\nLa funci\xf3n se busca primero en la clase de selecci\xf3n de entidades. Si no se encuentra, se busca en la dataclass. En otras palabras, si una funci\xf3n con el mismo nombre se define tanto en la clase DataClass como en la clase EntitySelection, la funci\xf3n de clase de DataClass nunca se ejecutar\xe1."]}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["All 4D code called from REST requests ",(0,a.jsx)(n.strong,{children:"must be thread-safe"})," if the project runs in compiled mode, because the REST Server always uses preemptive processes in this case (the ",(0,a.jsxs)(n.a,{href:"/docs/es/WebServer/preemptiveWeb#enabling-the-preemptive-mode-for-the-web-server",children:[(0,a.jsx)(n.em,{children:"Use preemptive process"})," setting value"]})," is ignored by the REST Server)."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"par\xe1metros",children:"Par\xe1metros"}),"\n",(0,a.jsxs)(n.p,{children:["Puede enviar los par\xe1metros a las funciones definidas en las clases usuarios ORDA. Del lado del servidor, ser\xe1n recibidos en los ",(0,a.jsx)(n.a,{href:"/docs/es/Concepts/parameters#declaring-parameters",children:"par\xe1metros declarados"})," de las funciones clase."]}),"\n",(0,a.jsx)(n.p,{children:"Se aplican las siguientes reglas:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Los par\xe1metros deben pasarse en el ",(0,a.jsx)(n.strong,{children:"cuerpo de la petici\xf3n POST"})]}),"\n",(0,a.jsx)(n.li,{children:"Los par\xe1metros deben estar incluidos en una colecci\xf3n (formato JSON)"}),"\n",(0,a.jsx)(n.li,{children:"Todos los tipos de datos escalares soportados en las colecciones JSON pueden ser pasados como par\xe1metros."}),"\n",(0,a.jsxs)(n.li,{children:["La selecci\xf3n de entidades y la entidad se pueden pasar como par\xe1metros. The JSON object must contain specific attributes used by the REST server to assign data to the corresponding ORDA objects: ",(0,a.jsx)(n.code,{children:"__DATACLASS"}),", ",(0,a.jsx)(n.code,{children:"__ENTITY"}),", ",(0,a.jsx)(n.code,{children:"__ENTITIES"}),", ",(0,a.jsx)(n.code,{children:"__DATASET"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)(n.a,{href:"#using-an-entity-to-be-created-on-the-server",children:"this example"})," and ",(0,a.jsx)(n.a,{href:"#receiving-an-entity-selection-as-parameter",children:"this example"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"par\xe1metro-de-valor-escalar",children:"Par\xe1metro de valor escalar"}),"\n",(0,a.jsxs)(n.p,{children:["El(los) par\xe1metros deben estar simplemente incluirse en una colecci\xf3n definida en el cuerpo. For example, with a  dataclass function ",(0,a.jsx)(n.code,{children:"getCities()"})," receiving text parameters: ",(0,a.jsx)(n.code,{children:"/rest/City/getCities"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Par\xe1metros en el cuerpo:"}),' ["Aguada","Paris"]']}),"\n",(0,a.jsx)(n.p,{children:'Todos los tipos de datos JSON son soportados en los par\xe1metros, incluidos los punteros JSON. Las fechas se pueden pasar como cadenas en formato de fecha ISO 8601 (por ejemplo, "2020-08-22T22:00:000Z").'}),"\n",(0,a.jsx)(n.h3,{id:"par\xe1metro-de-entidad",children:"Par\xe1metro de entidad"}),"\n",(0,a.jsxs)(n.p,{children:["Las entidades pasadas en los par\xe1metros son referenciadas en el servidor a trav\xe9s de su llave (",(0,a.jsx)(n.em,{children:"es decir,"})," propiedad __KEY). Si el par\xe1metro llave se omite en una petici\xf3n, una nueva entidad se carga en memoria del servidor.\nTambi\xe9n puede pasar valores para todos los atributos de la entidad. Estos valores se utilizar\xe1n autom\xe1ticamente para la entidad manejada en el servidor."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Si la petici\xf3n env\xeda los valores de atributo modificados para una entidad existente en el servidor, la funci\xf3n de modelo de datos ORDA llamada se ejecutar\xe1 autom\xe1ticamente en el servidor con los valores modificados. Esta funcionalidad le permite, por ejemplo, verificar el resultado de una operaci\xf3n en una entidad, tras aplicar todas las reglas de negocio, desde la aplicaci\xf3n cliente. A continuaci\xf3n, puede decidir guardar o no la entidad en el servidor."}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Propiedades"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Atributos de la entidad"}),(0,a.jsx)(n.td,{children:"mixto"}),(0,a.jsx)(n.td,{children:"Opcional - Valores a modificar"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__DATACLASS"}),(0,a.jsx)(n.td,{children:"String"}),(0,a.jsx)(n.td,{children:"Obligatorio - Indica la Dataclass de la entidad"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__ENTITY"}),(0,a.jsx)(n.td,{children:"Boolean"}),(0,a.jsx)(n.td,{children:"Obligatorio - True para indicar al servidor que el par\xe1metro es una entidad"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__KEY"}),(0,a.jsx)(n.td,{children:"mixto (mismo tipo que la llave primaria)"}),(0,a.jsx)(n.td,{children:"Opcional - llave primaria de la entidad"})]})]})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["If ",(0,a.jsx)(n.code,{children:"__KEY"})," is not provided, a new entity is created on the server with the given attributes."]}),"\n",(0,a.jsxs)(n.li,{children:["Si ",(0,a.jsx)(n.code,{children:"__KEY"})," es suministrado, la entidad correspondiente a ",(0,a.jsx)(n.code,{children:"__KEY"})," se carga en el servidor con los atributos dados"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Ver los ejemplos de ",(0,a.jsx)(n.a,{href:"#creating-an-entity",children:"creaci\xf3n"})," o de ",(0,a.jsx)(n.a,{href:"#updating-an-entity",children:"actualizaci\xf3n"})," de las entidades."]}),"\n",(0,a.jsx)(n.h4,{id:"par\xe1metro-de-entidad-asociado",children:"Par\xe1metro de entidad asociado"}),"\n",(0,a.jsxs)(n.p,{children:["Las mismas propiedades que para un ",(0,a.jsx)(n.a,{href:"#entity-parameter",children:"par\xe1metro de entidad"}),". Adem\xe1s, la entidad relacionada debe existir y ser referenciada por __KEY, que contiene su llave primaria."]}),"\n",(0,a.jsxs)(n.p,{children:["Ver los ejemplos para ",(0,a.jsx)(n.a,{href:"#creating-an-entity-with-a-related-entity",children:"creaci\xf3n"})," o ",(0,a.jsx)(n.a,{href:"#updating-an-entity-with-a-related-entity",children:"actualizaci\xf3n"})," de las entidades con las entidades relacionadas."]}),"\n",(0,a.jsx)(n.h3,{id:"par\xe1metro-de-selecci\xf3n-de-entidad",children:"Par\xe1metro de selecci\xf3n de entidad"}),"\n",(0,a.jsxs)(n.p,{children:["La selecci\xf3n de entidades debe haber sido definida previamente utilizando ",(0,a.jsx)(n.a,{href:"/docs/es/REST/method#methodentityset",children:"$method=entityset"}),"."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Si la petici\xf3n env\xeda una selecci\xf3n de entidades modificada al servidor, la funci\xf3n del modelo de datos ORDA llamada se ejecutar\xe1 autom\xe1ticamente en el servidor con la selecci\xf3n de entidades modificada."}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Propiedades"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Atributos de la entidad"}),(0,a.jsx)(n.td,{children:"mixto"}),(0,a.jsx)(n.td,{children:"Opcional - Valores a modificar"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__DATASET"}),(0,a.jsx)(n.td,{children:"String"}),(0,a.jsx)(n.td,{children:"Obligatorio - entitySetID (UUID) de la selecci\xf3n de entidades"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__ENTITIES"}),(0,a.jsx)(n.td,{children:"Boolean"}),(0,a.jsx)(n.td,{children:"Obligatorio - True para indicar al servidor que el par\xe1metro es una selecci\xf3n de entidades"})]})]})]}),"\n",(0,a.jsxs)(n.p,{children:["Ver ejemplo para ",(0,a.jsx)(n.a,{href:"#receiving-an-entity-selection-as-parameter",children:"recibir una selecci\xf3n de entidades"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"ejemplos-de-peticiones",children:"Ejemplos de peticiones"}),"\n",(0,a.jsx)(n.p,{children:"Esta base de datos se expone como un almac\xe9n de datos remoto en localhost (puerto 8111):"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"alt-text",src:s(814356).A+"",width:"882",height:"599"})}),"\n",(0,a.jsx)(n.h3,{id:"utilizar-una-funci\xf3n-de-clase-de-datastore",children:"Utilizar una funci\xf3n de clase de datastore"}),"\n",(0,a.jsxs)(n.p,{children:["La clase de ",(0,a.jsx)(n.code,{children:"DataStore"})," US_Cities ofrece una API:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'// DataStore class\n\nClass extends DataStoreImplementation\n\nexposed Function getName() : Text\n    return "US cities and zip codes manager"\n'})}),"\n",(0,a.jsx)(n.p,{children:"A continuaci\xf3n, puede ejecutar esta petici\xf3n:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"POST"})," ",(0,a.jsx)(n.code,{children:"127.0.0.1:8111/rest/$catalog/getName"})]}),"\n",(0,a.jsx)(n.h4,{id:"result",children:"Result"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n"result": "US cities and zip codes manager"\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"utilizar-una-funci\xf3n-de-clase-de-dataclass",children:"Utilizar una funci\xf3n de clase de dataclass"}),"\n",(0,a.jsxs)(n.p,{children:["La clase de Dataclass ",(0,a.jsx)(n.code,{children:"City"})," ofrece una PI que devuelve una entidad de ciudad a partir del nombre pasado en par\xe1metro:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'// ClassCity \n\nClass extends DataClass\n\nexposed Function getCity($city : Text ) : cs.CityEntity\n\treturn This.query("name = :1";$city).first()\n'})}),"\n",(0,a.jsx)(n.p,{children:"A continuaci\xf3n, puede ejecutar esta petici\xf3n:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"POST"})," ",(0,a.jsx)(n.code,{children:"127.0.0.1:8111/rest/City/getCity"})]}),"\n",(0,a.jsx)(n.p,{children:'Petici\xf3n: ["Aguada"]'}),"\n",(0,a.jsx)(n.h4,{id:"result-1",children:"Result"}),"\n",(0,a.jsx)(n.p,{children:"El resultado es una entidad:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    "__entityModel": "City",\n    "__DATACLASS": "City",\n    "__KEY": "1",\n    "__TIMESTAMP": "2020-03-09T08:03:19.923Z",\n    "__STAMP": 1,\n    "ID": 1,\n    "name": "Aguada",\n    "countyFIPS": 72003,\n    "county": {\n        "__deferred": {\n            "uri": "/rest/County(72003)",\n            "__KEY": "72003"\n        }\n    },\n    "zips": {\n        "__deferred": {\n            "uri": "/rest/City(1)/zips?$expand=zips"\n        }\n    }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"utilizar-una-funci\xf3n-de-clase-de-una-entidad",children:"Utilizar una funci\xf3n de clase de una entidad"}),"\n",(0,a.jsxs)(n.p,{children:["La clase de entidad ",(0,a.jsx)(n.code,{children:"CityEntity"})," ofrece una API:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'// CityEntity class\n\nClass extends Entity\n\nexposed Function getPopulation()\n    return This.zips.sum("population")\n'})}),"\n",(0,a.jsx)(n.p,{children:"A continuaci\xf3n, puede ejecutar esta petici\xf3n:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"POST"})," ",(0,a.jsx)(n.code,{children:"127.0.0.1:8111/rest/City(2)/getPopulation"})]}),"\n",(0,a.jsx)(n.h4,{id:"result-2",children:"Result"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    "result": 48814\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"utilizar-una-funci\xf3n-clase-entityselection",children:"Utilizar una funci\xf3n clase entitySelection"}),"\n",(0,a.jsxs)(n.p,{children:["La clase de selecci\xf3n de entidad ",(0,a.jsx)(n.code,{children:"CityEntity"})," ofrece una API:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'// CitySelection class\n\nClass extends EntitySelection\n\nexposed Function getPopulation()\n    return This.zips.sum("population")\n'})}),"\n",(0,a.jsx)(n.p,{children:"A continuaci\xf3n, puede ejecutar esta petici\xf3n:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"POST"})," ",(0,a.jsx)(n.code,{children:'127.0.0.1:8111/rest/City/getPopulation/?$filter="ID<3"'})]}),"\n",(0,a.jsx)(n.h4,{id:"result-3",children:"Result"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    "result": 87256\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"utilizar-una-funci\xf3n-de-clase-de-selecci\xf3n-de-entidades-y-un-conjunto-de-entidades",children:"Utilizar una funci\xf3n de clase de selecci\xf3n de entidades y un conjunto de entidades"}),"\n",(0,a.jsxs)(n.p,{children:["La clase ",(0,a.jsx)(n.code,{children:"StudentsSelection"})," tine una funci\xf3n ",(0,a.jsx)(n.code,{children:"getAgeAverage"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"// StudentsSelection Class\n\nClass extends EntitySelection\n\nexposed Function getAgeAverage : Integer\n\tvar $sum : Integer\n\tvar $s : Object\n\n\t$sum:=0\n\tFor each ($s;This)\n\t    $sum:=$sum+$s.age()\n\tEnd for each\n\treturn $sum/This.length\n"})}),"\n",(0,a.jsx)(n.p,{children:"Una vez que haya creado un conjunto de entidades, puede ejecutar esta petici\xf3n:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"POST"})," ",(0,a.jsx)(n.code,{children:"127.0.0.1:8044/rest/Students/getAgeAverage/$entityset/17E83633FFB54ECDBF947E5C620BB532"})]}),"\n",(0,a.jsx)(n.h4,{id:"result-4",children:"Result"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    "result": 34\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"utilizar-una-funci\xf3n-de-clase-de-selecci\xf3n-de-entidades-y-unorderby",children:"Utilizar una funci\xf3n de clase de selecci\xf3n de entidades y unorderBy"}),"\n",(0,a.jsxs)(n.p,{children:["La clase ",(0,a.jsx)(n.code,{children:"StudentsSelection"})," tiene una funci\xf3n ",(0,a.jsx)(n.code,{children:"getLastSummary"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'// StudentsSelection Class\n\n\nClass extends EntitySelection\n\nexposed Function getLastSummary : Text\n\tvar $last : Object\n\n\t$last:=This.last()\n\treturn =$last.firstname+" - "+$last.lastname+" is ... "+String($last.age())\n'})}),"\n",(0,a.jsx)(n.p,{children:"A continuaci\xf3n, puede ejecutar esta petici\xf3n:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"POST"})," ",(0,a.jsx)(n.code,{children:'127.0.0.1:8044/rest/Students/getLastSummary/$entityset/?$filter="lastname=b@"&$orderby="lastname"'})]}),"\n",(0,a.jsx)(n.h4,{id:"result-5",children:"Result"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    "result": "Wilbert - Bull is ... 21"\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"utilizar-una-entidad-que-se-crear\xe1-en-el-servidor",children:"Utilizar una entidad que se crear\xe1 en el servidor"}),"\n",(0,a.jsxs)(n.p,{children:["La clase de Dataclass ",(0,a.jsx)(n.code,{children:"Students"})," tiene la funci\xf3n ",(0,a.jsx)(n.code,{children:"pushData()"})," que recibe una entidad que contiene los datos del cliente. El m\xe9todo ",(0,a.jsx)(n.code,{children:"checkData()"})," efect\xfaa algunos controles. Si son v\xe1lidos, la entidad se guarda y se devuelve."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"// Students Class\n\nClass extends DataClass\n\nexposed Function pushData($entity : Object) : Object\n\tvar $status : Object\n\n\t$status:=checkData($entity) // $status is an object with a success boolean property\n\n\tIf ($status.success)\n\t    $status:=$entity.save()\n \t   If ($status.success)\n \t       return $entity\n  \t  End if\n\tEnd if\n\n\treturn $status\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"Lance esta petici\xf3n:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"POST"})," ",(0,a.jsx)(n.code,{children:"http://127.0.0.1:8044/rest/Students/pushData"})]}),"\n",(0,a.jsx)(n.p,{children:"Cuerpo de la petici\xf3n:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'[{\n"__DATACLASS":"Students",\n"__ENTITY":true,\n"firstname":"Ann",\n"lastname":"Brown"\n}]\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Como ninguna ",(0,a.jsx)(n.code,{children:"__KEY"})," es dada, una nueva entidad Students est\xe1 cargada en el servidor ",(0,a.jsx)(n.strong,{children:"con los atributos del cliente"}),". Como la funci\xf3n ",(0,a.jsx)(n.code,{children:"pushData()"})," ejecuta una acci\xf3n ",(0,a.jsx)(n.code,{children:"save()"}),", la nueva entidad es creada."]}),"\n",(0,a.jsx)(n.h4,{id:"result-6",children:"Result"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    "__entityModel": "Students",\n    "__DATACLASS": "Students",\n    "__KEY": "55",\n    "__TIMESTAMP": "2020-06-16T10:54:41.805Z",\n    "__STAMP": 1,\n    "ID": 55,\n    "firstname": "Ann",\n    "lastname": "BROWN",\n    "schoolID": null,\n    "school": null\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"utilizar-una-entidad-a-actualizar-en-el-servidor",children:"Utilizar una entidad a actualizar en el servidor"}),"\n",(0,a.jsx)(n.p,{children:"Igual que el anterior pero con el atributo __KEY"}),"\n",(0,a.jsx)(n.p,{children:"Lance esta petici\xf3n:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"POST:"}),(0,a.jsx)(n.code,{children:"http://127.0.0.1:8044/rest/Students/pushData"})]}),"\n",(0,a.jsx)(n.p,{children:"Cuerpo de la petici\xf3n:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'[{\n"__DATACLASS":"Students",\n"__ENTITY":true,\n"lastname":"Brownie",\n"__KEY":55\n}]\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Como ",(0,a.jsx)(n.code,{children:"__KEY"})," es dada, la entidad Students est\xe1 cargada con llave primaria 55 ",(0,a.jsx)(n.strong,{children:"con el valor lastname recibido por el cliente"}),". Como la funci\xf3n ejecuta una acci\xf3n ",(0,a.jsx)(n.code,{children:"save()"}),", la nueva entidad es actualizada."]}),"\n",(0,a.jsx)(n.h4,{id:"result-7",children:"Result"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    "__entityModel": "Students",\n    "__DATACLASS": "Students",\n    "__KEY": "55",\n    "__TIMESTAMP": "2020-06-16T11:10:21.679Z",\n    "__STAMP": 3,\n    "ID": 55,\n    "firstname": "Ann",\n    "lastname": "BROWNIE",\n    "schoolID": null,\n    "school": null\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"crear-una-entidad-con-una-entidad-relacionada",children:"Crear una entidad con una entidad relacionada"}),"\n",(0,a.jsx)(n.p,{children:"En este ejemplo, creamos una nueva entidad Students con la entidad Schools con la llave primaria 2."}),"\n",(0,a.jsx)(n.p,{children:"Lance esta petici\xf3n:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"POST:"}),(0,a.jsx)(n.code,{children:"http://127.0.0.1:8044/rest/Students/pushData"})]}),"\n",(0,a.jsx)(n.p,{children:"Cuerpo de la petici\xf3n:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'[{\n"__DATACLASS":"Students",\n"__ENTITY":true,\n"firstname":"John",\n"lastname":"Smith",\n"school":{"__KEY":2}\n}]\n'})}),"\n",(0,a.jsx)(n.h4,{id:"result-8",children:"Result"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    "__entityModel": "Students",\n    "__DATACLASS": "Students",\n    "__KEY": "56",\n    "__TIMESTAMP": "2020-06-16T11:16:47.601Z",\n    "__STAMP": 1,\n    "ID": 56,\n    "firstname": "John",\n    "lastname": "SMITH",\n    "schoolID": 2,\n       "school": {\n        "__deferred": {\n            "uri": "/rest/Schools(2)",\n            "__KEY": "2"\n        }\n    }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"actualizar-una-entidad-con-una-entidad-relacionada",children:"Actualizar una entidad con una entidad relacionada"}),"\n",(0,a.jsxs)(n.p,{children:["En este ejemplo, asociamos una escuela existente a una entidad Students. La clase ",(0,a.jsx)(n.code,{children:"StudentsEntity"})," tiene una API:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"// StudentsEntity class\n\nClass extends Entity\n\nexposed Function putToSchool()\n\tvar $1, $school , $0, $status : Object\n\n\t\t//$1 is a Schools entity\n\t$school:=$1\n\t\t//Associate the related entity school to the current Students entity\n\tThis.school:=$school\n\n\t$status:=This.save()\n\n\t$0:=$status\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You run this request, called on a Students entity : ",(0,a.jsx)(n.strong,{children:"POST"})," ",(0,a.jsx)(n.code,{children:"http://127.0.0.1:8044/rest/Students(1)/putToSchool"})," Body of the request:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'[{\n"__DATACLASS":"Schools",\n"__ENTITY":true,\n"__KEY":2\n}]\n'})}),"\n",(0,a.jsx)(n.h4,{id:"result-9",children:"Result"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    "result": {\n        "success": true\n    }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"recibir-una-selecci\xf3n-de-entidades-como-par\xe1metro",children:"Recibir una selecci\xf3n de entidades como par\xe1metro"}),"\n",(0,a.jsxs)(n.p,{children:["En la clase de Dataclass ",(0,a.jsx)(n.code,{children:"Students"}),", la funci\xf3n ",(0,a.jsx)(n.code,{children:"setFinalExam()"})," actualiza una selecci\xf3n de entidad recibida ($1). En realidad, actualiza el atributo ",(0,a.jsx)(n.em,{children:"finalExam"})," con el valor recibido ($2). Devuelve las llaves primarias de las entidades actualizadas."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"// Students class\n\nClass extends DataClass\n\nexposed Function setFinalExam()\n\n    var $1, $es, $student, $status : Object\n    var $2, $examResult : Text\n\n    var $keys, $0 : Collection\n\n      //Entity selection\n    $es:=$1\n\n    $examResult:=$2\n\n    $keys:=New collection()\n\n      //Loop on the entity selection\n    For each ($student;$es)\n        $student.finalExam:=$examResult\n        $status:=$student.save()\n        If ($status.success)\n            $keys.push($student.ID)\n        End if\n    End for each\n\n    $0:=$keys\n"})}),"\n",(0,a.jsx)(n.p,{children:"Un conjunto de entidades se crea primero con esta petici\xf3n:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:'http://127.0.0.1:8044/rest/Students/?$filter="ID<3"&$method=entityset'})}),"\n",(0,a.jsx)(n.p,{children:"A continuaci\xf3n, puede ejecutar esta petici\xf3n:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"POST"})," ",(0,a.jsx)(n.code,{children:"http://127.0.0.1:8044/rest/Students/setFinalExam"})]}),"\n",(0,a.jsx)(n.p,{children:"Cuerpo de la petici\xf3n:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'[\n{\n"__ENTITIES":true,\n"__DATASET":"9B9C053A111E4A288E9C1E48965FE671"\n},\n"Passed"\n]\n\n'})}),"\n",(0,a.jsx)(n.h4,{id:"result-10",children:"Result"}),"\n",(0,a.jsx)(n.p,{children:"Se han actualizado las entidades con llaves primarias 1 y 2."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    "result": [\n        1,\n        2\n    ]\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"utilizar-una-selecci\xf3n-de-entidades-actualizada-en-el-cliente",children:"Utilizar una selecci\xf3n de entidades actualizada en el cliente"}),"\n",(0,a.jsxs)(n.p,{children:["Utilizando la funci\xf3n ",(0,a.jsx)(n.code,{children:"getAgeAverage()"})," ",(0,a.jsx)(n.a,{href:"#using-an-entityselection-class-function-and-an-entityset",children:"definida anteriormente"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'var $remoteDS, $newStudent, $students : Object\nvar $ageAverage : Integer\n\n$remoteDS:=Open datastore(New object("hostname";"127.0.0.1:8044");"students")\n\n// $newStudent is a student entity to procees\n$newStudent:=...\n$students:=$remoteDS.Students.query("school.name = :1";"Math school")\n// We add an entity to the $students entity selection on the client\n$students.add($newStudent)\n\n// We call a function on the StudentsSelection class returning the age average of the students in the entity selection\n// The function is executed on the server on the updated $students entity selection which included the student added from the client\n$ageAverage:=$students.getAgeAverage()\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},221020:(e,n,s)=>{var a=s(296540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var a,i={},c=null,o=null;for(a in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(o=n.ref),n)d.call(n,a)&&!r.hasOwnProperty(a)&&(i[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===i[a]&&(i[a]=n[a]);return{$$typeof:t,type:e,key:c,ref:o,props:i,_owner:l.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},474848:(e,n,s)=>{e.exports=s(221020)},814356:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/ordastructure-64d64d76ce9764a2365629e381bde282.png"},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>l});var a=s(296540);const t={},i=a.createContext(t);function d(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);