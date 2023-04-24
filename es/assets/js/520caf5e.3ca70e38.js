"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17517],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>m});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},u=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(t),m=l,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return t?n.createElement(k,r(r({ref:a},u),{},{components:t})):n.createElement(k,r({ref:a},u))}));function m(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=c;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var d=2;d<o;d++)r[d]=t[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},56722:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});t(67294);var n=t(3905);function l(){return l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l.apply(this,arguments)}function o(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}const r={id:"manData",title:"Manipulaci\xf3n de datos"},i=void 0,s={unversionedId:"REST/manData",id:"version-19-R8/REST/manData",title:"Manipulaci\xf3n de datos",description:"Todos los atributos, dataclasses expuestos y todas las funciones pueden ser accedidos a trav\xe9s de REST. Los nombres de clases de datos, de atributos y de funciones son sensibles a las may\xfasculas y min\xfasculas; sin embargo, los datos de las b\xfasquedas no lo son.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R8/REST/manData.md",sourceDirName:"REST",slug:"/REST/manData",permalink:"/docs/es/19-R8/REST/manData",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FmanData.md%20(19-R8)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R8",frontMatter:{id:"manData",title:"Manipulaci\xf3n de datos"},sidebar:"docs",previous:{title:"Obtener informaci\xf3n del servidor",permalink:"/docs/es/19-R8/REST/genInfo"},next:{title:"Llamar a las funciones de clase ORDA",permalink:"/docs/es/19-R8/REST/classFunctions"}},d={},u=[{value:"Buscar datos",id:"buscar-datos",level:2},{value:"A\xf1adir, modificar y eliminar entidades",id:"a\xf1adir-modificar-y-eliminar-entidades",level:2},{value:"Navegaci\xf3n de datos",id:"navegaci\xf3n-de-datos",level:2},{value:"Creaci\xf3n y gesti\xf3n del conjunto de entidades",id:"creaci\xf3n-y-gesti\xf3n-del-conjunto-de-entidades",level:2},{value:"C\xe1lculo de datos",id:"c\xe1lculo-de-datos",level:2},{value:"Llamar las funciones de clase del modelo de datos",id:"llamar-las-funciones-de-clase-del-modelo-de-datos",level:2},{value:"Selecci\xf3n de atributos a obtener",id:"selecci\xf3n-de-atributos-a-obtener",level:2},{value:"Ejemplos",id:"ejemplos",level:3},{value:"Ejemplo con una dataclass",id:"ejemplo-con-una-dataclass",level:4},{value:"Ejemplo de entidad",id:"ejemplo-de-entidad",level:4},{value:"Ejemplo de conjunto de entidades",id:"ejemplo-de-conjunto-de-entidades",level:4},{value:"Visualizaci\xf3n de un atributo de imagen",id:"visualizaci\xf3n-de-un-atributo-de-imagen",level:2},{value:"Guardar un atributo BLOB en el disco",id:"guardar-un-atributo-blob-en-el-disco",level:2},{value:"Recuperar s\xf3lo una entidad",id:"recuperar-s\xf3lo-una-entidad",level:2}],p={toc:u};function c(e){var{components:a}=e,t=o(e,["components"]);return(0,n.kt)("wrapper",l({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Todos ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/19-R8/REST/configuration#exposing-tables-and-fields"}),"los atributos, dataclasses expuestos")," y todas las ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/19-R8/REST/classFunctions"}),"funciones")," pueden ser accedidos a trav\xe9s de REST. Los nombres de clases de datos, de atributos y de funciones son sensibles a las may\xfasculas y min\xfasculas; sin embargo, los datos de las b\xfasquedas no lo son."),(0,n.kt)("h2",l({},{id:"buscar-datos"}),"Buscar datos"),(0,n.kt)("p",null,"Para consultar los datos directamente, puede hacerlo mediante la funci\xf3n ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/19-R8/REST/filter"}),(0,n.kt)("inlineCode",{parentName:"a"},"$filter")),'. Por ejemplo, para encontrar a una persona llamada "Smith", podr\xeda escribir:'),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'http://127.0.0.1:8081/rest/Person/?$filter="lastName=Smith"')),(0,n.kt)("h2",l({},{id:"a\xf1adir-modificar-y-eliminar-entidades"}),"A\xf1adir, modificar y eliminar entidades"),(0,n.kt)("p",null,"Con la API REST, puede realizar todas las manipulaciones a los datos como puede hacerlo en 4D."),(0,n.kt)("p",null,"Para a\xf1adir y modificar entidades, puede llamar a ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/19-R8/REST/method#methodupdate"}),(0,n.kt)("inlineCode",{parentName:"a"},"$method=update")),". Si desea eliminar una o varias entidades, puede utilizar ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/19-R8/REST/method#methoddelete"}),(0,n.kt)("inlineCode",{parentName:"a"},"$method=delete")),"."),(0,n.kt)("p",null,"Adem\xe1s la recuperaci\xf3n de una sola entidad en una clase de datos utilizando ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/19-R8/REST/dataClass#dataclasskey"}),"{dataClass}({key})"),", tambi\xe9n puede escribir una ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/19-R8/REST/classFunctions#function-calls"}),"funci\xf3n de clase")," que devuelva una entity selection (o una colecci\xf3n)."),(0,n.kt)("p",null,"Antes de devolver una selecci\xf3n, tambi\xe9n puede ordenarla utilizando ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/19-R8/REST/orderby"}),(0,n.kt)("inlineCode",{parentName:"a"},"$orderby"))," uno o varios atributos (incluso los atributos de relaci\xf3n)."),(0,n.kt)("h2",l({},{id:"navegaci\xf3n-de-datos"}),"Navegaci\xf3n de datos"),(0,n.kt)("p",null,"A\xf1ada el ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/19-R8/REST/skip"}),(0,n.kt)("inlineCode",{parentName:"a"},"$skip"))," (para definir con qu\xe9 entidad empezar) y ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/19-R8/REST/top_$limit"}),(0,n.kt)("inlineCode",{parentName:"a"},"$top/$limit"))," (para definir cu\xe1ntas entidades devolver) de las peticiones REST a sus consultas o selecciones de entidades para navegar por la colecci\xf3n de entidades."),(0,n.kt)("h2",l({},{id:"creaci\xf3n-y-gesti\xf3n-del-conjunto-de-entidades"}),"Creaci\xf3n y gesti\xf3n del conjunto de entidades"),(0,n.kt)("p",null,"Un conjunto de entidades (tambi\xe9n conocido como ",(0,n.kt)("em",{parentName:"p"},"selecci\xf3n de entidades"),") es una colecci\xf3n de entidades obtenidas a trav\xe9s de una petici\xf3n REST que se almacena en la cach\xe9 de 4D Server. El uso de un conjunto de entidades evita que se consulte continuamente la aplicaci\xf3n para obtener los mismos resultados. El acceso a un conjunto de entidades es mucho m\xe1s r\xe1pido y puede mejorar la velocidad de su aplicaci\xf3n."),(0,n.kt)("p",null,"Para crear un conjunto de entidades, llame a ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/19-R8/REST/method#methodentityset"}),(0,n.kt)("inlineCode",{parentName:"a"},"$method=entityset"))," en su solicitud REST. Como medida de seguridad, tambi\xe9n se puede utilizar ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/19-R8/REST/savedfilter"}),(0,n.kt)("inlineCode",{parentName:"a"},"$savedfilter"))," y/o ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/19-R8/REST/savedorderby"}),(0,n.kt)("inlineCode",{parentName:"a"},"$savedorderby"))," cuando se llame a ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/19-R8/REST/filter"}),(0,n.kt)("inlineCode",{parentName:"a"},"$filter"))," y/o ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/19-R8/REST/orderby"}),(0,n.kt)("inlineCode",{parentName:"a"},"$orderby"))," para que si alguna vez el conjunto de entidades se agota o se elimina del servidor, se pueda recuperar r\xe1pidamente con el mismo ID que antes."),(0,n.kt)("p",null,"Para acceder al conjunto de entidades, debe utilizar ",(0,n.kt)("inlineCode",{parentName:"p"},"$entityset/{entitySetID}"),", por ejemplo:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"/rest/People/$entityset/0AF4679A5C394746BFEB68D2162A19FF")),(0,n.kt)("p",null,"Por defecto, un conjunto de entidades se almacena durante dos horas; sin embargo, puede cambiar el tiempo de espera pasando un nuevo valor a ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/19-R8/REST/timeout"}),(0,n.kt)("inlineCode",{parentName:"a"},"$timeout")),". El tiempo de espera se restablece continuamente al valor definido para su tiempo de espera (ya sea el predeterminado o el que usted defina) cada vez que lo utilice."),(0,n.kt)("p",null,"Si desea eliminar un conjunto de entidades de la cach\xe9 de 4D Server, puede utilizar ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/19-R8/REST/method#methodrelease"}),(0,n.kt)("inlineCode",{parentName:"a"},"$method=release")),"."),(0,n.kt)("p",null,"Si se modifica alguno de los atributos de la entidad en el conjunto de entidades, los valores se actualizar\xe1n. Sin embargo, si se modifica un valor que formaba parte de la consulta ejecutada para crear el conjunto de entidades, no se eliminar\xe1 del conjunto de entidades aunque ya no se ajuste a los criterios de b\xfasqueda. Las entidades que elimine, por supuesto, dejar\xe1n de formar parte del conjunto de entidades."),(0,n.kt)("p",null,"Si el conjunto de entidades ya no existe en la cach\xe9 de 4D Server, se recrear\xe1 con un nuevo tiempo de espera por defecto de 10 minutos. El conjunto de entidades se refrescar\xe1 (pueden incluirse ciertas entidades y eliminarse otras) desde la \xfaltima vez que se cre\xf3, si ya no exist\xeda antes de recrearlo."),(0,n.kt)("p",null,"Utilizando ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/19-R8/REST/entityset#entitysetentitysetidoperatorothercollection"}),(0,n.kt)("inlineCode",{parentName:"a"},"$entityset/{entitySetID}?$logicOperator... &$otherCollection")),", puede combinar dos conjuntos de entidades que haya creado previamente. Puede combinar los resultados en ambos, devolver s\xf3lo lo que es com\xfan entre los dos, o devolver lo que no es com\xfan entre los dos."),(0,n.kt)("p",null,"Se devuelve una nueva selecci\xf3n de entidades; sin embargo, tambi\xe9n se puede crear un nuevo conjunto de entidades llamando ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/19-R8/REST/method#methodentityset"}),(0,n.kt)("inlineCode",{parentName:"a"},"$method=entityset"))," al final de la petici\xf3n REST."),(0,n.kt)("h2",l({},{id:"c\xe1lculo-de-datos"}),"C\xe1lculo de datos"),(0,n.kt)("p",null,"Utilizando ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/19-R8/REST/compute"}),(0,n.kt)("inlineCode",{parentName:"a"},"$compute")),", se puede calcular el ",(0,n.kt)("strong",{parentName:"p"},"promedio"),", el ",(0,n.kt)("strong",{parentName:"p"},"count"),", el ",(0,n.kt)("strong",{parentName:"p"},"min"),", el ",(0,n.kt)("strong",{parentName:"p"},"max"),", o la ",(0,n.kt)("strong",{parentName:"p"},"suma")," para un atributo espec\xedfico en una clase de datos. Tambi\xe9n puede calcular todos los valores con la palabra clave $all."),(0,n.kt)("p",null,"Por ejemplo, para obtener el salario m\xe1s alto:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"/rest/Employee/salary/?$compute=max")),(0,n.kt)("p",null,"Para calcular todos los valores y devolver un objeto JSON:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"/rest/Employee/salary/?$compute=$all")),(0,n.kt)("h2",l({},{id:"llamar-las-funciones-de-clase-del-modelo-de-datos"}),"Llamar las funciones de clase del modelo de datos"),(0,n.kt)("p",null,"Puede llamar las ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/19-R8/REST/classFunctions"}),"funciones de clase usuarios")," ORDA del modelo de datos v\xeda las peticiones POST, para poder beneficiarse del API de la aplicaci\xf3n objetivo. Por ejemplo, si ha definido una funci\xf3n ",(0,n.kt)("inlineCode",{parentName:"p"},"getCity()")," en la dataclass City, podr\xeda llamarla utilizando la siguiente petici\xf3n:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"/rest/City/getCity")),(0,n.kt)("p",null,"con los datos en el cuerpo de la petici\xf3n: ",(0,n.kt)("inlineCode",{parentName:"p"},'["Paris"]')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Las llamadas a los m\xe9todos proyecto 4D que se exponen como servicio REST a\xfan se soportan, pero son obsoletas.")),(0,n.kt)("h2",l({},{id:"selecci\xf3n-de-atributos-a-obtener"}),"Selecci\xf3n de atributos a obtener"),(0,n.kt)("p",null,"Siempre se puede definir qu\xe9 atributos devolver en la respuesta REST despu\xe9s de una solicitud inicial pasando su ruta en la solicitud (",(0,n.kt)("em",{parentName:"p"},"por ejemplo"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Company(1)/name,revenues/"),")"),(0,n.kt)("p",null,"Puede aplicar este filtro de las siguientes maneras:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Sintaxis"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Ejemplo"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Dataclass"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"{dataClass}/{att1,att2...}"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"/People/firstName,lastName")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Collection de entidades"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),'{dataClass}/{att1,att2...}/?$filter="{filter}"'),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"/People/firstName,lastName/?$filter=\"lastName='a@'\"")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Entidad espec\xedfica"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"{dataClass}({ID})/{att1,att2...}"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"/People(1)/firstName,lastName")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null})),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"{dataClass}:{attribute}(value)/{att1,att2...}/"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"/People:firstName(Larry)/firstName,lastName/")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Entity selection"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"{dataClass}/{att1,att2...}/$entityset/{entitySetID}"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"/People/firstName/$entityset/528BF90F10894915A4290158B4281E61")))),(0,n.kt)("p",null,"Los atributos deben estar delimitados por una coma, ",(0,n.kt)("em",{parentName:"p"},"i.e."),", ",(0,n.kt)("inlineCode",{parentName:"p"},"/Employee/firstName,lastName,salary"),". Se pueden pasar atributos de almacenamiento o relacionales."),(0,n.kt)("h3",l({},{id:"ejemplos"}),"Ejemplos"),(0,n.kt)("p",null,"A continuaci\xf3n se presentan algunos ejemplos, que muestran c\xf3mo especificar qu\xe9 atributos devolver en funci\xf3n de la t\xe9cnica utilizada para recuperar las entidades."),(0,n.kt)("p",null,"Puede aplicar esta t\xe9cnica a:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Clases de datos (todas o una colecci\xf3n de entidades en una clase de datos)"),(0,n.kt)("li",{parentName:"ul"},"Entidades espec\xedficas"),(0,n.kt)("li",{parentName:"ul"},"Conjuntos de entidades")),(0,n.kt)("h4",l({},{id:"ejemplo-con-una-dataclass"}),"Ejemplo con una dataclass"),(0,n.kt)("p",null,"Las siguientes peticiones devuelven s\xf3lo el nombre y el apellido de la clase de datos People (ya sea toda la clase de datos o una selecci\xf3n de entidades basada en la b\xfasqueda definida en ",(0,n.kt)("inlineCode",{parentName:"p"},"$filter"),")."),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/People/firstName,lastName/")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resultado"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),'{\n    __entityModel: "People",\n    __COUNT: 4,\n    __SENT: 4,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "1",\n            __STAMP: 1,\n            firstName: "John",\n            lastName: "Smith"\n        },\n        {\n            __KEY: "2",\n            __STAMP: 2,\n            firstName: "Susan",\n            lastName: "O\'Leary"\n        },\n        {\n            __KEY: "3",\n            __STAMP: 2,\n            firstName: "Pete",\n            lastName: "Marley"\n        },\n        {\n            __KEY: "4",\n            __STAMP: 1,\n            firstName: "Beth",\n            lastName: "Adams"\n        }\n    ]\n}\n')),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/People/firstName,lastName/?$filter=\"lastName='A@'\"/")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resultado"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),'{\n    __entityModel: "People",\n    __COUNT: 1,\n    __SENT: 1,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "4",\n            __STAMP: 4,\n            firstName: "Beth",\n            lastName: "Adams"\n        }\n    ]\n}\n')),(0,n.kt)("h4",l({},{id:"ejemplo-de-entidad"}),"Ejemplo de entidad"),(0,n.kt)("p",null,"La siguiente petici\xf3n devuelve s\xf3lo los atributos de nombre y apellido de una entidad espec\xedfica de la clase de datos People:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/People(3)/firstName,lastName/")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resultado"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),'{\n    __entityModel: "People",\n    __KEY: "3",\n    __STAMP: 2,\n    firstName: "Pete",\n    lastName: "Marley"\n}\n')),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/People(3)/")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resultado"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),'{\n    __entityModel: "People",\n    __KEY: "3",\n    __STAMP: 2,\n    ID: 3,\n    firstName: "Pete",\n    lastName: "Marley",\n    salary: 30000,\n    employer: {\n        __deferred: {\n            uri: "http://127.0.0.1:8081/rest/Company(3)",\n            __KEY: "3"\n        }\n    },\n    fullName: "Pete Marley",\n    employerName: "microsoft"\n\n}\n')),(0,n.kt)("h4",l({},{id:"ejemplo-de-conjunto-de-entidades"}),"Ejemplo de conjunto de entidades"),(0,n.kt)("p",null,"Una vez que haya ",(0,n.kt)("a",l({parentName:"p"},{href:"#creating-and-managing-entity-set"}),"creado un conjunto de entidades"),", puede filtrar la informaci\xf3n que contiene definiendo qu\xe9 atributos debe devolver:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/People/firstName,employer.name/$entityset/BDCD8AABE13144118A4CF8641D5883F5?$expand=employer")),(0,n.kt)("h2",l({},{id:"visualizaci\xf3n-de-un-atributo-de-imagen"}),"Visualizaci\xf3n de un atributo de imagen"),(0,n.kt)("p",null,"Si desea visualizar un atributo de imagen en su totalidad, escriba lo siguiente:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo")),(0,n.kt)("p",null,"Para m\xe1s informaci\xf3n sobre los formatos de imagen, consulte ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/19-R8/REST/imageformat"}),(0,n.kt)("inlineCode",{parentName:"a"},"$imageformat")),". Para m\xe1s informaci\xf3n sobre el par\xe1metro de versi\xf3n, consulte ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/19-R8/REST/version"}),(0,n.kt)("inlineCode",{parentName:"a"},"$version")),"."),(0,n.kt)("h2",l({},{id:"guardar-un-atributo-blob-en-el-disco"}),"Guardar un atributo BLOB en el disco"),(0,n.kt)("p",null,"Si quiere guardar un BLOB almacenado en su clase de datos, puedes escribir lo siguiente:"),(0,n.kt)("p",null,"  ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt")),(0,n.kt)("h2",l({},{id:"recuperar-s\xf3lo-una-entidad"}),"Recuperar s\xf3lo una entidad"),(0,n.kt)("p",null,"Puede utilizar la sintaxis ",(0,n.kt)("a",l({parentName:"p"},{href:"%7BdataClass%7D.html#dataclassattributevalue"}),(0,n.kt)("inlineCode",{parentName:"a"},"{dataClass}:{attribute}(value)"))," cuando quiera recuperar s\xf3lo una entidad. Es especialmente \xfatil cuando se quiere hacer una b\xfasqueda relacionada que no se crea en la llave primaria de la clase de datos. Por ejemplo, puede escribir:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},'GET  /rest/Company:companyCode("Acme001")')))}c.isMDXComponent=!0}}]);