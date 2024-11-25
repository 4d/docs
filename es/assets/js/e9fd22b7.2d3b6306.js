"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41097"],{709186:function(e,n,s){s.r(n),s.d(n,{metadata:()=>a,contentTitle:()=>l,default:()=>u,assets:()=>r,toc:()=>c,frontMatter:()=>t});var a=JSON.parse('{"id":"REST/classFunctions","title":"Llamar a las funciones de clase ORDA","description":"Puede llamar a funciones de clase de modelos de datos definidas para el modelo de datos ORDA a trav\xe9s de sus peticiones REST, para poder beneficiarse de la API expuesta de la aplicaci\xf3n 4D objetivo.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-19/REST/ClassFunctions.md","sourceDirName":"REST","slug":"/REST/classFunctions","permalink":"/docs/es/19/REST/classFunctions","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FClassFunctions.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"classFunctions","title":"Llamar a las funciones de clase ORDA"},"sidebar":"docs","previous":{"title":"Manipulaci\xf3n de datos","permalink":"/docs/es/19/REST/manData"},"next":{"title":"Acerca de las peticiones REST","permalink":"/docs/es/19/REST/REST_requests"}}'),d=s("785893"),i=s("250065");let t={id:"classFunctions",title:"Llamar a las funciones de clase ORDA"},l=void 0,r={},c=[{value:"Llamadas de las funciones",id:"llamadas-de-las-funciones",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Par\xe1metro de valor escalar",id:"par\xe1metro-de-valor-escalar",level:3},{value:"Par\xe1metro de entidad",id:"par\xe1metro-de-entidad",level:3},{value:"Par\xe1metro de entidad asociado",id:"par\xe1metro-de-entidad-asociado",level:4},{value:"Par\xe1metro de selecci\xf3n de entidad",id:"par\xe1metro-de-selecci\xf3n-de-entidad",level:3},{value:"Ejemplos de peticiones",id:"ejemplos-de-peticiones",level:2},{value:"Utilizar una funci\xf3n de clase de datastore",id:"utilizar-una-funci\xf3n-de-clase-de-datastore",level:3},{value:"Result",id:"result",level:4},{value:"Utilizar una funci\xf3n de clase de dataclass",id:"utilizar-una-funci\xf3n-de-clase-de-dataclass",level:3},{value:"Result",id:"result-1",level:4},{value:"Utilizar una funci\xf3n de clase de una entidad",id:"utilizar-una-funci\xf3n-de-clase-de-una-entidad",level:3},{value:"Result",id:"result-2",level:4},{value:"Utilizar una funci\xf3n clase entitySelection",id:"utilizar-una-funci\xf3n-clase-entityselection",level:3},{value:"Result",id:"result-3",level:4},{value:"Utilizar una funci\xf3n de clase de selecci\xf3n de entidades y un conjunto de entidades",id:"utilizar-una-funci\xf3n-de-clase-de-selecci\xf3n-de-entidades-y-un-conjunto-de-entidades",level:3},{value:"Result",id:"result-4",level:4},{value:"Utilizar una funci\xf3n de clase de selecci\xf3n de entidades y unorderBy",id:"utilizar-una-funci\xf3n-de-clase-de-selecci\xf3n-de-entidades-y-unorderby",level:3},{value:"Result",id:"result-5",level:4},{value:"Utilizar una entidad que se crear\xe1 en el servidor",id:"utilizar-una-entidad-que-se-crear\xe1-en-el-servidor",level:3},{value:"Result",id:"result-6",level:4},{value:"Utilizar una entidad a actualizar en el servidor",id:"utilizar-una-entidad-a-actualizar-en-el-servidor",level:3},{value:"Result",id:"result-7",level:4},{value:"Crear una entidad con una entidad relacionada",id:"crear-una-entidad-con-una-entidad-relacionada",level:3},{value:"Result",id:"result-8",level:4},{value:"Actualizar una entidad con una entidad relacionada",id:"actualizar-una-entidad-con-una-entidad-relacionada",level:3},{value:"Result",id:"result-9",level:4},{value:"Recibir una selecci\xf3n de entidades como par\xe1metro",id:"recibir-una-selecci\xf3n-de-entidades-como-par\xe1metro",level:3},{value:"Result",id:"result-10",level:4},{value:"Utilizar una selecci\xf3n de entidades actualizada en el cliente",id:"utilizar-una-selecci\xf3n-de-entidades-actualizada-en-el-cliente",level:3}];function o(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:["Puede llamar a ",(0,d.jsx)(n.a,{href:"/docs/es/19/ORDA/ordaClasses",children:"funciones de clase de modelos de datos"})," definidas para el modelo de datos ORDA a trav\xe9s de sus peticiones REST, para poder beneficiarse de la API expuesta de la aplicaci\xf3n 4D objetivo."]}),"\n",(0,d.jsxs)(n.p,{children:["Las funciones se llaman simplemente en peticiones POST en la interfaz ORDA apropiada, sin (). Por ejemplo, si ha definido una funci\xf3n ",(0,d.jsx)(n.code,{children:"getCity()"})," en la dataclass City, podr\xeda llamarla utilizando la siguiente petici\xf3n:"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"/rest/City/getCity"})}),"\n",(0,d.jsxs)(n.p,{children:["con los datos en el cuerpo de la petici\xf3n POST: ",(0,d.jsx)(n.code,{children:'["Aguada"]'})]}),"\n",(0,d.jsx)(n.p,{children:"En el lenguaje 4D, esta llamada equivale a:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'$city:=ds.City.getCity("Aguada")\n'})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["S\xf3lo las funciones con la palabra clave ",(0,d.jsx)(n.code,{children:"exposed"})," pueden ser llamadas directamente desde las peticiones REST. Ver la secci\xf3n ",(0,d.jsx)(n.a,{href:"/docs/es/19/ORDA/ordaClasses#exposed-vs-non-exposed-functions",children:"Funciones expuestas vs. no expuestas"}),"."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"llamadas-de-las-funciones",children:"Llamadas de las funciones"}),"\n",(0,d.jsxs)(n.p,{children:["Las funciones deben llamarse siempre utilizando peticiones ",(0,d.jsx)(n.strong,{children:"POST"})," (una petici\xf3n GET recibir\xe1 un error)."]}),"\n",(0,d.jsx)(n.p,{children:"Las funciones son llamadas en el objeto correspondiente en el almac\xe9n de datos del servidor."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Funci\xf3n de clase"}),(0,d.jsx)(n.th,{children:"Sintaxis"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/es/19/ORDA/ordaClasses#datastore-class",children:"datastore class"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"/rest/$catalog/DataStoreClassFunction"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/es/19/ORDA/ordaClasses#dataclass-class",children:"dataclass class"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"/rest/\\{dataClass\\}/DataClassClassFunction"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/es/19/ORDA/ordaClasses#entityselection-class",children:"entitySelection class"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"/rest/\\{dataClass\\}/EntitySelectionClassFunction"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"/rest/\\{dataClass\\}/EntitySelectionClassFunction/$entityset/entitySetNumber"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"/rest/\\{dataClass\\}/EntitySelectionClassFunction/$filter"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"/rest/\\{dataClass\\}/EntitySelectionClassFunction/$orderby"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/es/19/ORDA/ordaClasses#entity-class",children:"entity class"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"/rest/\\{dataClass\\}(key)/EntityClassFunction/"})})]})]})]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"/rest/\\{dataClass\\}/Funci\xf3n"})," puede utilizarse para llamar a una clase de datos o a una funci\xf3n de selecci\xf3n de entidades (",(0,d.jsx)(n.code,{children:"/rest/\\{dataClass\\}"})," devuelve todas las entidades de la DataClass como una selecci\xf3n de entidades). La funci\xf3n se busca primero en la clase de selecci\xf3n de entidades. Si no se encuentra, se busca en la dataclass. En otras palabras, si una funci\xf3n con el mismo nombre se define tanto en la clase DataClass como en la clase EntitySelection, la funci\xf3n de clase de DataClass nunca se ejecutar\xe1."]}),"\n"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["Todo el c\xf3digo 4D llamado desde las peticiones REST ",(0,d.jsx)(n.strong,{children:"debe ser hilo seguro"})," si el proyecto se ejecuta en modo compilado, porque el Servidor REST siempre utiliza procesos apropiativos en este caso (el valor de la propiedad ",(0,d.jsx)(n.a,{href:"/docs/es/19/WebServer/preemptiveWeb#enabling-the-preemptive-mode-for-the-web-server",children:(0,d.jsx)(n.em,{children:"Utilizar proceso apropiativo"})})," es ignorado por el Servidor REST)."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"par\xe1metros",children:"Par\xe1metros"}),"\n",(0,d.jsx)(n.p,{children:"Puede enviar los par\xe1metros a las funciones definidas en las clases usuarios ORDA. Del lado del servidor, se recibir\xe1n en las funciones de clase en los par\xe1metros normales $1, $2, etc."}),"\n",(0,d.jsx)(n.p,{children:"Se aplican las siguientes reglas:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Los par\xe1metros deben pasarse en el ",(0,d.jsx)(n.strong,{children:"cuerpo de la petici\xf3n POST"})]}),"\n",(0,d.jsx)(n.li,{children:"Los par\xe1metros deben estar incluidos en una colecci\xf3n (formato JSON)"}),"\n",(0,d.jsx)(n.li,{children:"Todos los tipos de datos escalares soportados en las colecciones JSON pueden ser pasados como par\xe1metros."}),"\n",(0,d.jsx)(n.li,{children:"La selecci\xf3n de entidades y la entidad se pueden pasar como par\xe1metros. El objeto JSON debe contener atributos espec\xedficos utilizados por el servidor REST para asignar datos a los objetos ORDA correspondientes: __DATACLASS,__ENTITY, __ENTITIES,__DATASET."}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Ver ",(0,d.jsx)(n.a,{href:"#request-receiving-an-entity-as-parameter",children:"este ejemplo"})," y ",(0,d.jsx)(n.a,{href:"#request-receiving-an-entity-selection-as-parameter",children:"este ejemplo"}),"."]}),"\n",(0,d.jsx)(n.h3,{id:"par\xe1metro-de-valor-escalar",children:"Par\xe1metro de valor escalar"}),"\n",(0,d.jsxs)(n.p,{children:["El(los) par\xe1metros deben estar simplemente incluirse en una colecci\xf3n definida en el cuerpo. For example, with a  dataclass function ",(0,d.jsx)(n.code,{children:"getCities()"})," receiving text parameters: ",(0,d.jsx)(n.code,{children:"/rest/City/getCities"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Par\xe1metros en el cuerpo:"}),' ["Aguada","Paris"]']}),"\n",(0,d.jsx)(n.p,{children:'Todos los tipos de datos JSON son soportados en los par\xe1metros, incluidos los punteros JSON. Las fechas se pueden pasar como cadenas en formato de fecha ISO 8601 (por ejemplo, "2020-08-22T22:00:000Z").'}),"\n",(0,d.jsx)(n.h3,{id:"par\xe1metro-de-entidad",children:"Par\xe1metro de entidad"}),"\n",(0,d.jsxs)(n.p,{children:["Las entidades pasadas en los par\xe1metros son referenciadas en el servidor a trav\xe9s de su llave (",(0,d.jsx)(n.em,{children:"es decir,"})," propiedad __KEY). Si el par\xe1metro llave se omite en una petici\xf3n, una nueva entidad se carga en memoria del servidor. Tambi\xe9n puede pasar valores para todos los atributos de la entidad. Estos valores se utilizar\xe1n autom\xe1ticamente para la entidad manejada en el servidor."]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"Si la petici\xf3n env\xeda los valores de atributo modificados para una entidad existente en el servidor, la funci\xf3n de modelo de datos ORDA llamada se ejecutar\xe1 autom\xe1ticamente en el servidor con los valores modificados. Esta funcionalidad le permite, por ejemplo, verificar el resultado de una operaci\xf3n en una entidad, tras aplicar todas las reglas de negocio, desde la aplicaci\xf3n cliente. A continuaci\xf3n, puede decidir guardar o no la entidad en el servidor."}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Propiedades"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Atributos de la entidad"}),(0,d.jsx)(n.td,{children:"mixto"}),(0,d.jsx)(n.td,{children:"Opcional - Valores a modificar"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"__DATACLASS"}),(0,d.jsx)(n.td,{children:"String"}),(0,d.jsx)(n.td,{children:"Obligatorio - Indica la Dataclass de la entidad"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"__ENTITY"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"Obligatorio - True para indicar al servidor que el par\xe1metro es una entidad"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"__KEY"}),(0,d.jsx)(n.td,{children:"mixto (mismo tipo que la llave primaria)"}),(0,d.jsx)(n.td,{children:"Opcional - llave primaria de la entidad"})]})]})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Si no se proporciona __KEY, se crea una nueva entidad en el servidor con los atributos dados."}),"\n",(0,d.jsx)(n.li,{children:"Si se suministra __KEY, la entidad correspondiente a__KEY se carga en el servidor con los atributos dados"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Ver los ejemplos de ",(0,d.jsx)(n.a,{href:"#creating-an-entity",children:"creaci\xf3n"})," o de ",(0,d.jsx)(n.a,{href:"#updating-an-entity",children:"actualizaci\xf3n"})," de las entidades."]}),"\n",(0,d.jsx)(n.h4,{id:"par\xe1metro-de-entidad-asociado",children:"Par\xe1metro de entidad asociado"}),"\n",(0,d.jsxs)(n.p,{children:["Las mismas propiedades que para un ",(0,d.jsx)(n.a,{href:"#entity-parameter",children:"par\xe1metro de entidad"}),". Adem\xe1s, la entidad relacionada debe existir y ser referenciada por __KEY, que contiene su llave primaria."]}),"\n",(0,d.jsxs)(n.p,{children:["Ver los ejemplos para ",(0,d.jsx)(n.a,{href:"#creating-an-entity-with-a-related-entity",children:"creaci\xf3n"})," o ",(0,d.jsx)(n.a,{href:"#updating-an-entity-with-a-related-entity",children:"actualizaci\xf3n"})," de las entidades con las entidades relacionadas."]}),"\n",(0,d.jsx)(n.h3,{id:"par\xe1metro-de-selecci\xf3n-de-entidad",children:"Par\xe1metro de selecci\xf3n de entidad"}),"\n",(0,d.jsxs)(n.p,{children:["La selecci\xf3n de entidades debe haber sido definida previamente utilizando ",(0,d.jsx)(n.a,{href:"/docs/es/19/REST/method#methodentityset",children:"$method=entityset"}),"."]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"Si la petici\xf3n env\xeda una selecci\xf3n de entidades modificada al servidor, la funci\xf3n del modelo de datos ORDA llamada se ejecutar\xe1 autom\xe1ticamente en el servidor con la selecci\xf3n de entidades modificada."}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Propiedades"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Atributos de la entidad"}),(0,d.jsx)(n.td,{children:"mixto"}),(0,d.jsx)(n.td,{children:"Opcional - Valores a modificar"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"__DATASET"}),(0,d.jsx)(n.td,{children:"String"}),(0,d.jsx)(n.td,{children:"Obligatorio - entitySetID (UUID) de la selecci\xf3n de entidades"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"__ENTITIES"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"Obligatorio - True para indicar al servidor que el par\xe1metro es una selecci\xf3n de entidades"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Ver ejemplo para ",(0,d.jsx)(n.a,{href:"#receiving-an-entity-selection-as-parameter",children:"recibir una selecci\xf3n de entidades"}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"ejemplos-de-peticiones",children:"Ejemplos de peticiones"}),"\n",(0,d.jsx)(n.p,{children:"Esta base de datos se expone como un almac\xe9n de datos remoto en localhost (puerto 8111):"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"alt-text",src:s(684956).Z+"",width:"882",height:"599"})}),"\n",(0,d.jsx)(n.h3,{id:"utilizar-una-funci\xf3n-de-clase-de-datastore",children:"Utilizar una funci\xf3n de clase de datastore"}),"\n",(0,d.jsxs)(n.p,{children:["La clase de ",(0,d.jsx)(n.code,{children:"DataStore"})," US_Cities ofrece una API:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'// DataStore class\n\nClass extends DataStoreImplementation\n\nexposed Function getName()\n    $0:="US cities and zip codes manager" \n'})}),"\n",(0,d.jsx)(n.p,{children:"A continuaci\xf3n, puede ejecutar esta petici\xf3n:"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"POST"})," ",(0,d.jsx)(n.code,{children:"127.0.0.1:8111/rest/$catalog/getName"})]}),"\n",(0,d.jsx)(n.h4,{id:"result",children:"Result"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n"result": "US cities and zip codes manager" \n}\n'})}),"\n",(0,d.jsx)(n.h3,{id:"utilizar-una-funci\xf3n-de-clase-de-dataclass",children:"Utilizar una funci\xf3n de clase de dataclass"}),"\n",(0,d.jsxs)(n.p,{children:["La clase de Dataclass ",(0,d.jsx)(n.code,{children:"City"})," ofrece una PI que devuelve una entidad de ciudad a partir del nombre pasado en par\xe1metro:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'// Clase City \n\nClass extends DataClass\n\nexposed Function getCity()\n var $0 : cs.CityEntity\n var $1,$nameParam : text\n $nameParam:=$1\n $0:=This.query("name = :1";$nameParam).first()\n'})}),"\n",(0,d.jsx)(n.p,{children:"A continuaci\xf3n, puede ejecutar esta petici\xf3n:"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"POST"})," ",(0,d.jsx)(n.code,{children:"127.0.0.1:8111/rest/City/getCity"})]}),"\n",(0,d.jsx)(n.p,{children:'Petici\xf3n: ["Aguada"]'}),"\n",(0,d.jsx)(n.h4,{id:"result-1",children:"Result"}),"\n",(0,d.jsx)(n.p,{children:"El resultado es una entidad:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n    "__entityModel": "City",\n    "__DATACLASS": "City",\n    "__KEY": "1",\n    "__TIMESTAMP": "2020-03-09T08:03:19.923Z",\n    "__STAMP": 1,\n    "ID": 1,\n    "name": "Aguada",\n    "countyFIPS": 72003,\n    "county": {\n        "__deferred": {\n            "uri": "/rest/County(72003)",\n            "__KEY": "72003" \n        }\n    },\n    "zips": {\n        "__deferred": {\n            "uri": "/rest/City(1)/zips?$expand=zips" \n        }\n    }\n}\n'})}),"\n",(0,d.jsx)(n.h3,{id:"utilizar-una-funci\xf3n-de-clase-de-una-entidad",children:"Utilizar una funci\xf3n de clase de una entidad"}),"\n",(0,d.jsxs)(n.p,{children:["La clase de entidad ",(0,d.jsx)(n.code,{children:"CityEntity"})," ofrece una API:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'// CityEntity class\n\nClass extends Entity\n\nexposed Function getPopulation()\n    $0:=This.zips.sum("population")\n'})}),"\n",(0,d.jsx)(n.p,{children:"A continuaci\xf3n, puede ejecutar esta petici\xf3n:"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"POST"})," ",(0,d.jsx)(n.code,{children:"127.0.0.1:8111/rest/City(2)/getPopulation"})]}),"\n",(0,d.jsx)(n.h4,{id:"result-2",children:"Result"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n    "result": 48814\n}\n'})}),"\n",(0,d.jsx)(n.h3,{id:"utilizar-una-funci\xf3n-clase-entityselection",children:"Utilizar una funci\xf3n clase entitySelection"}),"\n",(0,d.jsxs)(n.p,{children:["La clase de selecci\xf3n de entidad ",(0,d.jsx)(n.code,{children:"CityEntity"})," ofrece una API:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'// CitySelection class\n\nClass extends EntitySelection\n\nexposed Function getPopulation()\n    $0:=This.zips.sum("population")\n'})}),"\n",(0,d.jsx)(n.p,{children:"A continuaci\xf3n, puede ejecutar esta petici\xf3n:"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"POST"})," ",(0,d.jsx)(n.code,{children:'127.0.0.1:8111/rest/City/getPopulation/?$filter="ID<3"'})]}),"\n",(0,d.jsx)(n.h4,{id:"result-3",children:"Result"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n    "result": 87256\n}\n'})}),"\n",(0,d.jsx)(n.h3,{id:"utilizar-una-funci\xf3n-de-clase-de-selecci\xf3n-de-entidades-y-un-conjunto-de-entidades",children:"Utilizar una funci\xf3n de clase de selecci\xf3n de entidades y un conjunto de entidades"}),"\n",(0,d.jsxs)(n.p,{children:["La clase ",(0,d.jsx)(n.code,{children:"StudentsSelection"})," tine una funci\xf3n ",(0,d.jsx)(n.code,{children:"getAgeAverage"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"// Clase StudentsSelection \n\nClass extends EntitySelection\n\nexposed Function getAgeAverage\n C_LONGINT($sum;$0)\n C_OBJECT($s)\n\n $sum:=0\n For each ($s;This)\n     $sum:=$sum+$s.age()\n End for each \n $0:=$sum/This.length\n"})}),"\n",(0,d.jsx)(n.p,{children:"Una vez que haya creado un conjunto de entidades, puede ejecutar esta petici\xf3n:"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"POST"})," ",(0,d.jsx)(n.code,{children:"127.0.0.1:8044/rest/Students/getAgeAverage/$entityset/17E83633FFB54ECDBF947E5C620BB532"})]}),"\n",(0,d.jsx)(n.h4,{id:"result-4",children:"Result"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n    "result": 34\n}\n'})}),"\n",(0,d.jsx)(n.h3,{id:"utilizar-una-funci\xf3n-de-clase-de-selecci\xf3n-de-entidades-y-unorderby",children:"Utilizar una funci\xf3n de clase de selecci\xf3n de entidades y unorderBy"}),"\n",(0,d.jsxs)(n.p,{children:["La clase ",(0,d.jsx)(n.code,{children:"StudentsSelection"})," tiene una funci\xf3n ",(0,d.jsx)(n.code,{children:"getLastSummary"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'// Clase StudentsSelection \n\n\nClass extends EntitySelection\n\nexposed Function getLastSummary\n C_TEXT($0)\n C_OBJECT($last)\n\n $last:=This.last()\n $0:=$last.firstname+" - "+$last.lastname+" is ... "+String($last.age())\n'})}),"\n",(0,d.jsx)(n.p,{children:"A continuaci\xf3n, puede ejecutar esta petici\xf3n:"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"POST"})," ",(0,d.jsx)(n.code,{children:'127.0.0.1:8044/rest/Students/getLastSummary/$entityset/?$filter="lastname=b@"&$orderby="lastname"'})]}),"\n",(0,d.jsx)(n.h4,{id:"result-5",children:"Result"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n    "result": "Wilbert - Bull is ... 21" \n}\n'})}),"\n",(0,d.jsx)(n.h3,{id:"utilizar-una-entidad-que-se-crear\xe1-en-el-servidor",children:"Utilizar una entidad que se crear\xe1 en el servidor"}),"\n",(0,d.jsxs)(n.p,{children:["La clase de Dataclass ",(0,d.jsx)(n.code,{children:"Students"})," tiene la funci\xf3n ",(0,d.jsx)(n.code,{children:"pushData()"})," que recibe una entidad que contiene los datos del cliente. El m\xe9todo ",(0,d.jsx)(n.code,{children:"checkData()"})," efect\xfaa algunos controles. Si son v\xe1lidos, la entidad se guarda y se devuelve."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"// Clase Students \n\nClass extends DataClass\n\nexposed Function pushData\n var $1, $entity, $status, $0 : Object\n\n $entity:=$1\n\n $status:=checkData($entity) // $status es un objeto con una propiedad booleana success\n\n $0:=$status\n\n If ($status.success)\n     $status:=$entity.save()\n     If ($status.success)\n         $0:=$entity\n     End if \n End if\n\n"})}),"\n",(0,d.jsx)(n.p,{children:"Lance esta petici\xf3n:"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"POST"})," ",(0,d.jsx)(n.code,{children:"http://127.0.0.1:8044/rest/Students/pushData"})]}),"\n",(0,d.jsx)(n.p,{children:"Cuerpo de la petici\xf3n:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'[{\n"__DATACLASS":"Students",\n"__ENTITY":true,\n"firstname":"Ann",\n"lastname":"Brown" \n}]\n'})}),"\n",(0,d.jsxs)(n.p,{children:["Como ninguna ",(0,d.jsx)(n.code,{children:"__KEY"})," es dada, una nueva entidad Students est\xe1 cargada en el servidor ",(0,d.jsx)(n.strong,{children:"con los atributos del cliente"}),". Como la funci\xf3n ",(0,d.jsx)(n.code,{children:"pushData()"})," ejecuta una acci\xf3n ",(0,d.jsx)(n.code,{children:"save()"}),", la nueva entidad es creada."]}),"\n",(0,d.jsx)(n.h4,{id:"result-6",children:"Result"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n    "__entityModel": "Students",\n    "__DATACLASS": "Students",\n    "__KEY": "55",\n    "__TIMESTAMP": "2020-06-16T10:54:41.805Z",\n    "__STAMP": 1,\n    "ID": 55,\n    "firstname": "Ann",\n    "lastname": "BROWN",\n    "schoolID": null,\n    "school": null\n}\n'})}),"\n",(0,d.jsx)(n.h3,{id:"utilizar-una-entidad-a-actualizar-en-el-servidor",children:"Utilizar una entidad a actualizar en el servidor"}),"\n",(0,d.jsx)(n.p,{children:"Igual que el anterior pero con el atributo __KEY"}),"\n",(0,d.jsx)(n.p,{children:"Lance esta petici\xf3n:"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"POST:"}),(0,d.jsx)(n.code,{children:"http://127.0.0.1:8044/rest/Students/pushData"})]}),"\n",(0,d.jsx)(n.p,{children:"Cuerpo de la petici\xf3n:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'[{\n"__DATACLASS":"Students",\n"__ENTITY":true,\n"lastname":"Brownie",\n"__KEY":55\n}]\n'})}),"\n",(0,d.jsxs)(n.p,{children:["Como ",(0,d.jsx)(n.code,{children:"__KEY"})," es dada, la entidad Students est\xe1 cargada con llave primaria 55 ",(0,d.jsx)(n.strong,{children:"con el valor lastname recibido por el cliente"}),". Como la funci\xf3n ejecuta una acci\xf3n ",(0,d.jsx)(n.code,{children:"save()"}),", la nueva entidad es actualizada."]}),"\n",(0,d.jsx)(n.h4,{id:"result-7",children:"Result"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n    "__entityModel": "Students",\n    "__DATACLASS": "Students",\n    "__KEY": "55",\n    "__TIMESTAMP": "2020-06-16T11:10:21.679Z",\n    "__STAMP": 3,\n    "ID": 55,\n    "firstname": "Ann",\n    "lastname": "BROWNIE",\n    "schoolID": null,\n    "school": null \n}\n'})}),"\n",(0,d.jsx)(n.h3,{id:"crear-una-entidad-con-una-entidad-relacionada",children:"Crear una entidad con una entidad relacionada"}),"\n",(0,d.jsx)(n.p,{children:"En este ejemplo, creamos una nueva entidad Students con la entidad Schools con la llave primaria 2."}),"\n",(0,d.jsx)(n.p,{children:"Lance esta petici\xf3n:"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"POST:"}),(0,d.jsx)(n.code,{children:"http://127.0.0.1:8044/rest/Students/pushData"})]}),"\n",(0,d.jsx)(n.p,{children:"Cuerpo de la petici\xf3n:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'[{\n"__DATACLASS":"Students",\n"__ENTITY":true,\n"firstname":"John",\n"lastname":"Smith",\n"school":{"__KEY":2}\n}]\n'})}),"\n",(0,d.jsx)(n.h4,{id:"result-8",children:"Result"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n    "__entityModel": "Students",\n    "__DATACLASS": "Students",\n    "__KEY": "56",\n    "__TIMESTAMP": "2020-06-16T11:16:47.601Z",\n    "__STAMP": 1,\n    "ID": 56,\n    "firstname": "John",\n    "lastname": "SMITH",\n    "schoolID": 2,\n       "school": {\n        "__deferred": {\n            "uri": "/rest/Schools(2)",\n            "__KEY": "2" \n        }\n    }\n}\n'})}),"\n",(0,d.jsx)(n.h3,{id:"actualizar-una-entidad-con-una-entidad-relacionada",children:"Actualizar una entidad con una entidad relacionada"}),"\n",(0,d.jsxs)(n.p,{children:["En este ejemplo, asociamos una escuela existente a una entidad Students. La clase ",(0,d.jsx)(n.code,{children:"StudentsEntity"})," tiene una API:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'// StudentsEntity class\n\nClass extends Entity\n\nexposed Function putToSchool()\n    var $1, $school , $0, $status : Object\n\n  //$1 es una entidad Schools\n $school:=$1\n  //Asocia la entidad relacionada "school" con la entidad actual "Students"\n This.school:=$school\n\n $status:=This.save()\n\n $0:=$status\n'})}),"\n",(0,d.jsxs)(n.p,{children:["You run this request, called on a Students entity : ",(0,d.jsx)(n.strong,{children:"POST"})," ",(0,d.jsx)(n.code,{children:"http://127.0.0.1:8044/rest/Students(1)/putToSchool"})," Body of the request:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'[{\n"__DATACLASS":"Schools",\n"__ENTITY":true,\n"__KEY":2\n}]\n'})}),"\n",(0,d.jsx)(n.h4,{id:"result-9",children:"Result"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n    "result": {\n        "success": true\n    }\n}\n'})}),"\n",(0,d.jsx)(n.h3,{id:"recibir-una-selecci\xf3n-de-entidades-como-par\xe1metro",children:"Recibir una selecci\xf3n de entidades como par\xe1metro"}),"\n",(0,d.jsxs)(n.p,{children:["En la clase de Dataclass ",(0,d.jsx)(n.code,{children:"Students"}),", la funci\xf3n ",(0,d.jsx)(n.code,{children:"setFinalExam()"})," actualiza una selecci\xf3n de entidad recibida ($1). En realidad, actualiza el atributo ",(0,d.jsx)(n.em,{children:"finalExam"})," con el valor recibido ($2). Devuelve las llaves primarias de las entidades actualizadas."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"// Students class\n\nClass extends DataClass\n\nexposed Function setFinalExam()\n\n    var $1, $es, $student, $status : Object\n    var $2, $examResult : Text\n\n    var $keys, $0 : Collection\n\n      //Entity selection\n    $es:=$1\n\n    $examResult:=$2\n\n    $keys:=New collection()\n\n      //Bucle en la selecci\xf3n de entidades\n    For each ($student;$es)\n        $student.finalExam:=$examResult\n        $status:=$student.save()\n        If ($status.success)\n            $keys.push($student.ID)\n        End if \n    End for each \n\n    $0:=$keys\n"})}),"\n",(0,d.jsx)(n.p,{children:"Un conjunto de entidades se crea primero con esta petici\xf3n:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:'http://127.0.0.1:8044/rest/Students/?$filter="ID<3"&$method=entityset'})}),"\n",(0,d.jsx)(n.p,{children:"A continuaci\xf3n, puede ejecutar esta petici\xf3n:"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"POST"})," ",(0,d.jsx)(n.code,{children:"http://127.0.0.1:8044/rest/Students/setFinalExam"})]}),"\n",(0,d.jsx)(n.p,{children:"Cuerpo de la petici\xf3n:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'[\n{\n"__ENTITIES":true,\n"__DATASET":"9B9C053A111E4A288E9C1E48965FE671" \n},\n"Passed" \n]\n\n'})}),"\n",(0,d.jsx)(n.h4,{id:"result-10",children:"Result"}),"\n",(0,d.jsx)(n.p,{children:"Se han actualizado las entidades con llaves primarias 1 y 2."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n    "result": [\n        1,\n        2\n    ]\n}\n'})}),"\n",(0,d.jsx)(n.h3,{id:"utilizar-una-selecci\xf3n-de-entidades-actualizada-en-el-cliente",children:"Utilizar una selecci\xf3n de entidades actualizada en el cliente"}),"\n",(0,d.jsxs)(n.p,{children:["Utilizando la funci\xf3n ",(0,d.jsx)(n.code,{children:"getAgeAverage()"})," ",(0,d.jsx)(n.a,{href:"#using-an-entityselection-class-function-and-an-entityset",children:"definida anteriormente"}),"."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'var $remoteDS, $newStudent, $students : Object\nvar $ageAverage : Integer\n\n$remoteDS:=Open datastore(New object("hostname";"127.0.0.1:8044");"students")\n\n// $newStudent es una entidad "student" a procesar\n$newStudent:=...\n$students:=$remoteDS.Students.query("school.name = :1";"Math school")\n// Hemos a\xf1adido una entidad a la selecci\xf3n de entidades $students en el cliente\n$students.add($newStudent) \n\n// Llamamos a una funci\xf3n en la clase StudentsSelection que devuelve la edad media de los estudiantes en la selecci\xf3n de entidades\n// La funci\xf3n se utiliza en el servidor en la selecci\xf3n de la entidad $students actualizada, que incluye el estudiante a\xf1adido por el cliente\n$ageAverage:=$students.getAgeAverage()\n'})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},684956:function(e,n,s){s.d(n,{Z:function(){return a}});let a=s.p+"assets/images/ordastructure-64d64d76ce9764a2365629e381bde282.png"},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return t}});var a=s(667294);let d={},i=a.createContext(d);function t(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);