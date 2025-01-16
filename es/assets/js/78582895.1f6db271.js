"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49125"],{505032:function(e,n,d){d.r(n),d.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>a,assets:()=>o,toc:()=>l,contentTitle:()=>r});var a=JSON.parse('{"id":"REST/method","title":"$method","description":"Este par\xe1metro permite definir la operaci\xf3n a ejecutar con la entidad o selecci\xf3n de entidades devuelta.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/REST/$method.md","sourceDirName":"REST","slug":"/REST/method","permalink":"/docs/es/20-R7/REST/method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"method","title":"$method"},"sidebar":"docs","previous":{"title":"$lock","permalink":"/docs/es/20-R7/REST/lock"},"next":{"title":"$orderby","permalink":"/docs/es/20-R7/REST/orderby"}}'),s=d("785893"),i=d("250065");let t={id:"method",title:"$method"},r=void 0,o={},l=[{value:"Sintaxis disponible",id:"sintaxis-disponible",level:2},{value:"$method=delete",id:"methoddelete",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:3},{value:"Ejemplo",id:"ejemplo",level:3},{value:"$method=entityset",id:"methodentityset",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-1",level:3},{value:"Ejemplo",id:"ejemplo-1",level:3},{value:"$method=release",id:"methodrelease",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-2",level:3},{value:"Ejemplo",id:"ejemplo-2",level:3},{value:"Respuesta:",id:"respuesta",level:4},{value:"$method=subentityset",id:"methodsubentityset",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-3",level:3},{value:"Ejemplo",id:"ejemplo-3",level:3},{value:"Respuesta:",id:"respuesta-1",level:4},{value:"$method=update",id:"methodupdate",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-4",level:3},{value:"Ejemplo",id:"ejemplo-4",level:3}];function c(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Este par\xe1metro permite definir la operaci\xf3n a ejecutar con la entidad o selecci\xf3n de entidades devuelta."}),"\n",(0,s.jsx)(n.h2,{id:"sintaxis-disponible",children:"Sintaxis disponible"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Sintaxis"}),(0,s.jsx)(n.th,{children:"Ejemplo"}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#methoddelete",children:(0,s.jsx)(n.strong,{children:"$method=delete"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'POST /Employee?$filter="ID=11"& $method=delete'})}),(0,s.jsx)(n.td,{children:"Elimina la entidad actual, la colecci\xf3n de entidades o la selecci\xf3n de entidades"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#methodentityset",children:(0,s.jsx)(n.strong,{children:"$method=entityset"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'GET /People/?$filter="ID>320"& $method=entityset& $timeout=600'})}),(0,s.jsx)(n.td,{children:"Crea un conjunto de entidades en la cach\xe9 de 4D Server basado en la colecci\xf3n de entidades definidas en la solicitud REST"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#methodrelease",children:(0,s.jsx)(n.strong,{children:"$method=release"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"GET /Employee/$entityset/<entitySetID>?$method=release"})}),(0,s.jsx)(n.td,{children:"Libera un conjunto de entidades existente almacenado en la cach\xe9 de 4D Server"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#methodsubentityset",children:(0,s.jsx)(n.strong,{children:"$method=subentityset"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"GET /Company(1)/staff?$expand=staff& $method=subentityset&   $subOrderby=lastName ASC"})}),(0,s.jsx)(n.td,{children:"Crea un conjunto de entidades basado en la colecci\xf3n de entidades relativas definidas en la petici\xf3n REST"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#methodupdate",children:(0,s.jsx)(n.strong,{children:"$method=update"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"POST /Person/?$method=update"})}),(0,s.jsx)(n.td,{children:"Actualiza y/o crea una o varias entidades"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"methoddelete",children:"$method=delete"}),"\n",(0,s.jsx)(n.p,{children:"Elimina la entidad actual, la colecci\xf3n de entidades o la selecci\xf3n de entidad actual (creada v\xeda REST)"}),"\n",(0,s.jsx)(n.h3,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["Con ",(0,s.jsx)(n.code,{children:"$method=delete"}),", puede eliminar una entidad o una colecci\xf3n de entidades entera. Puede definir la colecci\xf3n de entidades utilizando, por ejemplo, ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/REST/filter",children:(0,s.jsx)(n.code,{children:"$filter"})})," o especificando una directamente utilizando ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/REST/dataClass#dataclasskey",children:(0,s.jsx)(n.code,{children:"{dataClass\\}(\\{key\\})"})})," ",(0,s.jsx)(n.em,{children:"(p.ej."}),", /Employee(22))."]}),"\n",(0,s.jsxs)(n.p,{children:["Tambi\xe9n puede eliminar las entidades en un conjunto de entidades, llamando a ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/REST/entityset#entitysetentitysetid",children:(0,s.jsx)(n.code,{children:"$entityset/\\{entitySetID\\}"})}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"A continuaci\xf3n, puede escribir la siguiente petici\xf3n REST para eliminar la entidad cuya llave es 22:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"POST  /rest/Employee(22)/?$method=delete"})}),"\n",(0,s.jsx)(n.p,{children:"Tambi\xe9n se puede hacer una petici\xf3n de informaci\xf3n utilizando $filter:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'POST  /rest/Employee?$filter="ID=11"&$method=delete'})}),"\n",(0,s.jsx)(n.p,{children:"Tambi\xe9n puede eliminar un conjunto de entidades utilizando $entityset/{entitySetID}:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"POST  /rest/Employee/$entityset/73F46BE3A0734EAA9A33CA8B14433570?$method=delete"})}),"\n",(0,s.jsx)(n.p,{children:"Respuesta:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "ok": true\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"methodentityset",children:"$method=entityset"}),"\n",(0,s.jsx)(n.p,{children:"Crea un conjunto de entidades en la cach\xe9 de 4D Server basado en la colecci\xf3n de entidades definidas en la solicitud REST"}),"\n",(0,s.jsx)(n.h3,{id:"descripci\xf3n-1",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["Cuando se crea una colecci\xf3n de entidades en REST, tambi\xe9n se puede crear un conjunto de entidades que se guardar\xe1 en la cach\xe9 de 4D Server. El conjunto de entidades tendr\xe1 un n\xfamero de referencia que puede pasar a ",(0,s.jsx)(n.code,{children:"$entityset/\\{entitySetID\\}"})," para acceder a \xe9l. Por defecto, es v\xe1lido durante dos horas; sin embargo, puede modificar esa cantidad de tiempo pasando un valor (en segundos) a $timeout."]}),"\n",(0,s.jsxs)(n.p,{children:["Si ha utilizado ",(0,s.jsx)(n.code,{children:"$savedfilter"})," y/o ",(0,s.jsx)(n.code,{children:"$savedorderby"})," (junto con ",(0,s.jsx)(n.code,{children:"$filter"})," y/o ",(0,s.jsx)(n.code,{children:"$orderby"}),") cuando cre\xf3 su conjunto de entidades, puede volver a crearlo con el mismo ID de referencia aunque se haya eliminado de la cach\xe9 de 4D Server."]}),"\n",(0,s.jsx)(n.h3,{id:"ejemplo-1",children:"Ejemplo"}),"\n",(0,s.jsxs)(n.p,{children:["Para crear un conjunto de entidades, que se guardar\xe1 en la cach\xe9 de 4D Server durante dos horas, a\xf1ada ",(0,s.jsx)(n.code,{children:"$method=entityset"})," al final de su petici\xf3n REST:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'GET  /rest/People/?$filter="ID>320"&$method=entityset'})}),"\n",(0,s.jsxs)(n.p,{children:["Puede crear un conjunto de entidades que se almacenar\xe1 en la cach\xe9 de 4D Server durante s\xf3lo diez minutos pasando un nuevo tiempo de espera a ",(0,s.jsx)(n.code,{children:"$timeout"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'GET  /rest/People/?$filter="ID>320"&$method=entityset&$timeout=600'})}),"\n",(0,s.jsxs)(n.p,{children:["Tambi\xe9n puede guardar el filtro y ordenar por, pasando true a ",(0,s.jsx)(n.code,{children:"$savedfilter"})," y ",(0,s.jsx)(n.code,{children:"$savedorderby"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"$skip"})," y ",(0,s.jsx)(n.code,{children:"$top/$limit"})," no se tienen en cuenta al guardar un conjunto de entidades."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Despu\xe9s de crear un conjunto de entidades, el primer elemento, ",(0,s.jsx)(n.code,{children:"__ENTITYSET"}),", se a\xf1ade al objeto devuelto e indica la URI a utilizar para acceder al conjunto de entidades:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'__ENTITYSET: "http://127.0.0.1:8081/rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7"`\n'})}),"\n",(0,s.jsx)(n.h2,{id:"methodrelease",children:"$method=release"}),"\n",(0,s.jsx)(n.p,{children:"Libera un conjunto de entidades existente almacenado en la cach\xe9 de 4D Server."}),"\n",(0,s.jsx)(n.h3,{id:"descripci\xf3n-2",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["Puede liberar un entity set, que cre\xf3 utilizando ",(0,s.jsx)(n.a,{href:"#methodentityset",children:(0,s.jsx)(n.code,{children:"$method=entityset"})}),", de la cach\xe9 del servidor 4D."]}),"\n",(0,s.jsx)(n.h3,{id:"ejemplo-2",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"Muestra un conjunto de entidades existente:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/Employee/$entityset/4C51204DD8184B65AC7D79F09A077F24?$method=release"})}),"\n",(0,s.jsx)(n.h4,{id:"respuesta",children:"Respuesta:"}),"\n",(0,s.jsx)(n.p,{children:"Si la petici\xf3n fue exitosa, se devuelve la siguiente respuesta:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "ok": true\n}\nSi no se encuentra el conjunto de entidades, se devuelve un error:\n\n{\n    "__ERROR": [\n        {\n             "message": "Error code: 1802\\nEntitySet  \\"4C51204DD8184B65AC7D79F09A077F24\\" cannot be found\\ncomponent:  \'dbmg\'\\ntask 22, name: \'HTTP connection handler\'\\n",\n            "componentSignature": "dbmg",\n            "errCode": 1802\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"methodsubentityset",children:"$method=subentityset"}),"\n",(0,s.jsx)(n.p,{children:"Crea un conjunto de entidades en la cach\xe9 de 4D Server basado en la colecci\xf3n de entidades relativas definidas en la petici\xf3n REST"}),"\n",(0,s.jsx)(n.h3,{id:"descripci\xf3n-3",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"$method=subentityset"})," permite ordenar los datos devueltos por el atributo relacional definido en la petici\xf3n REST."]}),"\n",(0,s.jsxs)(n.p,{children:["Para ordenar los datos, se utiliza la propiedad ",(0,s.jsx)(n.code,{children:"$subOrderby"}),". Para cada atributo, se define el orden como ASC (o asc) para el orden ascendente y DESC (desc) para el orden descendente. Por defecto, los datos se clasifican en orden ascendente."]}),"\n",(0,s.jsxs)(n.p,{children:["Si desea especificar varios atributos, puede delimitarlos con una coma, \xb5, ",(0,s.jsx)(n.code,{children:'$subOrderby="lastName desc, firstName asc"'}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"ejemplo-3",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"Si quiere recuperar s\xf3lo las entidades relacionadas para una entidad espec\xedfica, puede hacer la siguiente petici\xf3n REST donde personal es el atributo de relaci\xf3n en la clase de datos Company vinculada a la clase de datos Employee:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:" GET  /rest/Company(1)/staff?$expand=staff&$method=subentityset&$subOrderby=lastName ASC"})}),"\n",(0,s.jsx)(n.h4,{id:"respuesta-1",children:"Respuesta:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n\n    "__ENTITYSET": "/rest/Employee/$entityset/FF625844008E430B9862E5FD41C741AB",\n    "__entityModel": "Employee",\n    "__COUNT": 2,\n    "__SENT": 2,\n    "__FIRST": 0,\n    "__ENTITIES": [\n        {\n            "__KEY": "4",\n            "__STAMP": 1,\n            "ID": 4,\n            "firstName": "Linda",\n            "lastName": "Jones",\n            "birthday": "1970-10-05T14:23:00Z",\n            "employer": {\n                "__deferred": {\n                    "uri": "/rest/Company(1)",\n                    "__KEY": "1"\n                }\n            }\n        },\n        {\n            "__KEY": "1",\n            "__STAMP": 3,\n            "ID": 1,\n            "firstName": "John",\n            "lastName": "Smith",\n            "birthday": "1985-11-01T15:23:00Z",\n            "employer": {\n                "__deferred": {\n                    "uri": "/rest/Company(1)",\n                    "__KEY": "1"\n                }\n            }\n        }\n    ]\n\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"methodupdate",children:"$method=update"}),"\n",(0,s.jsx)(n.p,{children:"Actualiza y/o crea una o varias entidades"}),"\n",(0,s.jsx)(n.h3,{id:"descripci\xf3n-4",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"$method=update"})," le permite actualizar y/o crear una o m\xe1s entidades en un solo ",(0,s.jsx)(n.strong,{children:"POST"}),". Si se actualiza y/o crea una entidad, se efect\xfaa en un objeto con, para cada propiedad, un atributo y su valor, ",(0,s.jsx)(n.em,{children:"por ejemplo"})," ",(0,s.jsx)(n.code,{children:'{ lastName: "Smith" }'}),". Si actualiza y/o crea varias entidades, debe crear una colecci\xf3n de objetos."]}),"\n",(0,s.jsxs)(n.p,{children:["En cualquier caso, debe definir los ",(0,s.jsx)(n.strong,{children:"POST"})," datos en el ",(0,s.jsx)(n.strong,{children:"body"})," de la petici\xf3n."]}),"\n",(0,s.jsxs)(n.p,{children:["Para actualizar una entidad, debes pasar los par\xe1metros ",(0,s.jsx)(n.code,{children:"__KEY"})," y ",(0,s.jsx)(n.code,{children:"__STAMP"})," en el objeto junto con todos los atributos modificados. Si faltan ambos par\xe1metros, se a\xf1adir\xe1 una entidad con los valores del objeto que env\xede en el cuerpo de su ",(0,s.jsx)(n.strong,{children:"POST"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Los triggers se ejecutan inmediatamente al guardar la entidad en el servidor. La respuesta contiene todos los datos tal y como existen en el servidor."}),"\n",(0,s.jsxs)(n.p,{children:["Tambi\xe9n puede poner estas solicitudes para crear o actualizar entidades en una transacci\xf3n llamando a ",(0,s.jsx)(n.code,{children:"$atomic/$atOnce"}),". Si se produce alg\xfan error durante la validaci\xf3n de los datos, no se guarda ninguna de las entidades. Tambi\xe9n puede utilizar ",(0,s.jsx)(n.code,{children:"$method=validate"})," para validar las entidades antes de crearlas o actualizarlas."]}),"\n",(0,s.jsx)(n.p,{children:"Si surge un problema al a\xf1adir o modificar una entidad, se le devolver\xe1 un error con esa informaci\xf3n."}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Las fechas"}),' deben expresarse en formato JS: YYYY-MM-DDTHH:MM:SSZ (por ejemplo, "2010-10-05T23:00:00Z"). Si ha seleccionado la propiedad Fecha \xfanicamente para su atributo Fecha, se eliminar\xe1 la zona horaria y la hora (hora, minutos y segundos). En este caso, tambi\xe9n puede enviar la fecha en el formato que se le devuelve dd!mm!aaaa (por ejemplo, 05!10!2013).']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Booleanos"})," son true o false."]}),"\n",(0,s.jsxs)(n.li,{children:["Los archivos subidos mediante ",(0,s.jsx)(n.code,{children:"$upload"})," pueden aplicarse a un atributo de tipo Imagen o BLOB pasando el objeto devuelto en el siguiente formato ",(0,s.jsx)(n.code,{children:'{ "ID": "D507BC03E613487E9B4C2F6A0512FE50"}'}),":::"]}),"\n"]}),(0,s.jsx)(n.h3,{id:"ejemplo-4",children:"Ejemplo"}),(0,s.jsx)(n.p,{children:"Para actualizar una entidad espec\xedfica, se utiliza la siguiente URL:"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"POST  /rest/Person/?$method=update"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"POST data:"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    __KEY: "340",\n    __STAMP: 2,\n    firstName: "Pete",\n    lastName: "Miller"\n}\n'})}),(0,s.jsx)(n.p,{children:"Los atributos firstName y lastName de la entidad indicada anteriormente se modificar\xe1n dejando todos los dem\xe1s atributos (excepto los calculados basados en estos atributos) sin cambios."}),(0,s.jsx)(n.p,{children:"Si quiere crear una entidad, puede enviar, v\xeda POST los atributos utilizando esta URL:"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"POST  /rest/Person/?$method=update"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"POST data:"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    firstName: "John",\n    lastName: "Smith"\n}\n'})}),(0,s.jsx)(n.p,{children:"Tambi\xe9n puede crear y actualizar m\xfaltiples entidades al mismo tiempo utilizando la misma URL anterior pasando m\xfaltiples objetos en un array al POST:"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"POST  /rest/Person/?$method=update"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"POST data:"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[{\n    "__KEY": "309",\n    "__STAMP": 5,\n    "ID": "309",\n    "firstName": "Penelope",\n    "lastName": "Miller"\n}, {\n    "firstName": "Ann",\n    "lastName": "Jones"\n}]\n'})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Response:"})}),(0,s.jsx)(n.p,{children:"Cuando a\xf1ade o modifica una entidad, se devuelve con los atributos modificados. Por ejemplo, si se crea el nuevo empleado anterior, se devolver\xe1 lo siguiente:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "__KEY": "622",\n    "__STAMP": 1,\n    "uri": "http://127.0.0.1:8081/rest/Employee(622)",\n    "__TIMESTAMP": "!!2020-04-03!!",\n    "ID": 622,\n    "firstName": "John",\n    "firstName": "Smith"\n}\n'})}),(0,s.jsx)(n.p,{children:"Si, por ejemplo, el sello no es correcto, se devuelve el siguiente error:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "__STATUS": {\n        "status": 2,\n        "statusText": "Stamp has changed",\n        "success": false\n    },\n    "__KEY": "1",\n    "__STAMP": 12,\n    "__TIMESTAMP": "!!2020-03-31!!",\n    "ID": 1,\n    "firstname": "Denise",\n    "lastname": "O\'Peters",\n    "isWoman": true,\n    "numberOfKids": 1,\n    "addressID": 1,\n    "gender": true,\n    "imageAtt": {\n        "__deferred": {\n            "uri": "/rest/Persons(1)/imageAtt?$imageformat=best&$version=12&$expand=imageAtt",\n            "image": true\n        }\n    },\n    "extra": {\n        "num": 1,\n        "alpha": "I am 1"\n    },\n    "address": {\n        "__deferred": {\n            "uri": "/rest/Address(1)",\n            "__KEY": "1"\n        }\n    },\n    "__ERROR": [\n        {\n            "message": "Given stamp does not match current one for record# 0 of table Persons",\n            "componentSignature": "dbmg",\n            "errCode": 1263\n        },\n        {\n            "message": "Cannot save record 0 in table Persons of database remote_dataStore",\n            "componentSignature": "dbmg",\n            "errCode": 1046\n        },\n        {\n            "message": "The entity# 1 in the \\"Persons\\" dataclass cannot be saved",\n            "componentSignature": "dbmg",\n            "errCode": 1517\n        }\n    ]\n}{}\n\n'})})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return r},a:function(){return t}});var a=d(667294);let s={},i=a.createContext(s);function t(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);