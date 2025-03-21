"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7169"],{671029:function(e,a,s){s.r(a),s.d(a,{default:()=>u,frontMatter:()=>l,metadata:()=>n,assets:()=>i,toc:()=>r,contentTitle:()=>t});var n=JSON.parse('{"id":"ORDA/dsmapping","title":"Objeto del modelo de datos","description":"La tecnolog\xeda ORDA se basa en un mapeo autom\xe1tico de una estructura de base subyacente. Tambi\xe9n ofrece acceso a los datos a trav\xe9s de los objetos selecci\xf3n de entidades (entity selection) y entidad (entity). Como resultado, ORDA expone toda la base de datos como un conjunto de objetos del modelo de datos.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/ORDA/dsMapping.md","sourceDirName":"ORDA","slug":"/ORDA/dsmapping","permalink":"/docs/es/ORDA/dsmapping","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2FdsMapping.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"dsmapping","title":"Objeto del modelo de datos"},"sidebar":"docs","previous":{"title":"ORDA","permalink":"/docs/es/ORDA/overview"},"next":{"title":"Clases del modelo de datos","permalink":"/docs/es/ORDA/ordaClasses"}}'),o=s("785893"),d=s("250065");let l={id:"dsmapping",title:"Objeto del modelo de datos"},t=void 0,i={},r=[{value:"Mapeo de la estructura",id:"mapeo-de-la-estructura",level:2},{value:"Reglas generales",id:"reglas-generales",level:3},{value:"Normas de control de acceso remoto",id:"normas-de-control-de-acceso-remoto",level:3},{value:"Actualizaci\xf3n del modelo de datos",id:"actualizaci\xf3n-del-modelo-de-datos",level:3},{value:"Definiciones de los objetos",id:"definiciones-de-los-objetos",level:2},{value:"Datastore",id:"datastore",level:3},{value:"Dataclass",id:"dataclass",level:3},{value:"Atributo",id:"atributo",level:3},{value:"Atributos de almacenamiento y relacionales",id:"atributos-de-almacenamiento-y-relacionales",level:4},{value:"Atributos calculados y alias",id:"atributos-calculados-y-alias",level:4},{value:"Entity",id:"entity",level:3},{value:"Entity selection",id:"entity-selection",level:3},{value:"Entity selections ordenadas o no ordenadas",id:"entity-selections-ordenadas-o-no-ordenadas",level:4}];function c(e){let a={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.p,{children:"La tecnolog\xeda ORDA se basa en un mapeo autom\xe1tico de una estructura de base subyacente. Tambi\xe9n ofrece acceso a los datos a trav\xe9s de los objetos selecci\xf3n de entidades (entity selection) y entidad (entity). Como resultado, ORDA expone toda la base de datos como un conjunto de objetos del modelo de datos."}),"\n",(0,o.jsx)(a.h2,{id:"mapeo-de-la-estructura",children:"Mapeo de la estructura"}),"\n",(0,o.jsxs)(a.p,{children:["Cuando llama a un datastore usando los comandos ",(0,o.jsx)(a.a,{href:"/docs/es/commands/ds",children:(0,o.jsx)(a.code,{children:"ds"})})," u ",(0,o.jsx)(a.a,{href:"/docs/es/commands/open-datastore",children:(0,o.jsx)(a.code,{children:"Open datastore"})}),", 4D hace referencia autom\xe1ticamente a tablas y campos de la estructura 4D correspondiente como propiedades del objeto devuelto ",(0,o.jsx)(a.a,{href:"#datastore",children:"datastore"}),":"]}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"Las tablas correspondientes a las dataclasses."}),"\n",(0,o.jsx)(a.li,{children:"Los campos corresponden a los atributos de almacenamiento."}),"\n",(0,o.jsx)(a.li,{children:"Las relaciones se mapean a los atributos de relaci\xf3n: los nombres de relaci\xf3n, definidos en el editor de estructura, se utilizan como nombres de atributo de relaci\xf3n."}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{src:s(510803).Z+"",width:"961",height:"480"})}),"\n",(0,o.jsx)(a.h3,{id:"reglas-generales",children:"Reglas generales"}),"\n",(0,o.jsx)(a.p,{children:"Se aplican las siguientes reglas para todas las conversiones:"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:["Los nombres de tabla, campo y relaci\xf3n se mapean a los nombres de propiedad de objeto. Aseg\xfarese de que dichos nombres cumplen con las reglas generales de denominaci\xf3n de objetos, como se explica en la secci\xf3n ",(0,o.jsx)(a.a,{href:"/docs/es/Concepts/identifiers",children:"Convenciones de denominaci\xf3n de objetos"}),"."]}),"\n",(0,o.jsx)(a.li,{children:"Un datastore s\xf3lo hace referencia a las tablas con una sola llave primaria. Las siguientes tablas no est\xe1n referenciadas:"}),"\n",(0,o.jsx)(a.li,{children:"Tablas sin llave primaria"}),"\n",(0,o.jsx)(a.li,{children:"Tablas con llaves primarias compuestas."}),"\n",(0,o.jsxs)(a.li,{children:["Los campos BLOB est\xe1n disponibles autom\xe1ticamente como atributos del tipo ",(0,o.jsx)(a.a,{href:"/docs/es/Concepts/blob#blob-types",children:"objeto Blob"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsx)(a.p,{children:"El mapeo ORDA no tiene en cuenta:"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:'la opci\xf3n "Invisible" para las tablas o los campos,'}),"\n",(0,o.jsxs)(a.li,{children:["la estructura virtual definida mediante ",(0,o.jsx)(a.code,{children:"SET TABLE TITLES"})," o ",(0,o.jsx)(a.code,{children:"SET FIELD TITLES"}),","]}),"\n",(0,o.jsx)(a.li,{children:'la propiedad "Manual" o "Autom\xe1tica" de las relaciones.'}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(a.h3,{id:"normas-de-control-de-acceso-remoto",children:"Normas de control de acceso remoto"}),"\n",(0,o.jsxs)(a.p,{children:["Cuando se accede a un datastore remoto a trav\xe9s del comando ",(0,o.jsx)(a.code,{children:"Abrir datastore"})," o ",(0,o.jsx)(a.a,{href:"/docs/es/REST/gettingStarted",children:"peticiones REST"}),", s\xf3lo las tablas y los campos con la propiedad ",(0,o.jsx)(a.strong,{children:"Exponer como recurso REST"})," est\xe1n disponibles de forma remota."]}),"\n",(0,o.jsx)(a.p,{children:"Esta opci\xf3n debe seleccionarse al nivel de la estructura 4D para cada tabla y cada campo que desee exponer como dataclass y atributo en el datastore:"}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{src:s(36334).Z+"",width:"279",height:"362"})}),"\n",(0,o.jsx)(a.h3,{id:"actualizaci\xf3n-del-modelo-de-datos",children:"Actualizaci\xf3n del modelo de datos"}),"\n",(0,o.jsx)(a.p,{children:"Toda modificaci\xf3n aplicada a la estructura de la base invalida la capa actual del modelo ORDA. Estas modificaciones incluyen:"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"la adici\xf3n o la eliminaci\xf3n de una tabla, de un campo, o de una relaci\xf3n"}),"\n",(0,o.jsx)(a.li,{children:"el cambio de nombre de una tabla, de un campo o de una relaci\xf3n"}),"\n",(0,o.jsx)(a.li,{children:"la modificaci\xf3n de una propiedad principal de un campo (tipo, \xfanico, \xedndice, autoincremento, valor null)"}),"\n"]}),"\n",(0,o.jsxs)(a.p,{children:["Cuando la capa actual del modelo ORDA ha sido invalidada, es autom\xe1ticamente recargada y actualizada en llamadas posteriores del datastore local ",(0,o.jsx)(a.code,{children:"ds"})," en 4D y 4D Server. Tenga en cuenta que las referencias existentes a objetos ORDA, tales como entidades o selecciones de entidades, seguir\xe1n utilizando el modelo a partir del cual se han creado, hasta que se regeneren."]}),"\n",(0,o.jsx)(a.p,{children:"Sin embargo, la capa actualizada del modelo ORDA no est\xe1 disponible autom\xe1ticamente en los siguientes contextos:"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"una aplicaci\xf3n 4D remota conectada a 4D Server -- la aplicaci\xf3n remota debe reconectarse al servidor."}),"\n",(0,o.jsxs)(a.li,{children:["un datastore remoto abierto mediante ",(0,o.jsx)(a.code,{children:"Open datastore"})," o a trav\xe9s de ",(0,o.jsx)(a.a,{href:"/docs/es/REST/gettingStarted",children:"llamadas REST"})," -- debe abrirse una nueva sesi\xf3n."]}),"\n"]}),"\n",(0,o.jsx)(a.h2,{id:"definiciones-de-los-objetos",children:"Definiciones de los objetos"}),"\n",(0,o.jsx)(a.h3,{id:"datastore",children:"Datastore"}),"\n",(0,o.jsxs)(a.p,{children:["El datastore es el objeto de interfaz de una base de datos. Crea una representaci\xf3n de toda la base como objeto. Un datastore est\xe1 formado por un ",(0,o.jsx)(a.strong,{children:"modelo"})," y ",(0,o.jsx)(a.strong,{children:"datos"}),":"]}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"El modelo contiene y describe todas las dataclasses que componen el datastore. Es independiente de la propia base de datos subyacente."}),"\n",(0,o.jsx)(a.li,{children:"Los datos se refieren a la informaci\xf3n que se va a utilizar y almacenar en este modelo. Por ejemplo, los nombres, direcciones y fechas de nacimiento de los empleados son datos con los que se puede trabajar en un datastore."}),"\n"]}),"\n",(0,o.jsxs)(a.p,{children:["Cuando se maneja a trav\xe9s del c\xf3digo, el datastore es un objeto cuyas propiedades son todas las ",(0,o.jsx)(a.a,{href:"#dataclass",children:"dataclasses"})," que se han expuesto espec\xedficamente."]}),"\n",(0,o.jsx)(a.p,{children:"4D le permite gestionar los siguientes datastores:"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:["el datastore local, basado en la base 4D actual, devuelta por el comando ",(0,o.jsx)(a.code,{children:"ds"})," (el datastore principal)."]}),"\n",(0,o.jsxs)(a.li,{children:["uno o m\xe1s datastores remotos expuestos como recursos REST en las bases 4D remotas, devueltos por el comando ",(0,o.jsx)(a.code,{children:"Open datastore"}),"."]}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:"Un datastore hace referencia s\xf3lo a una base de datos local o remota."}),"\n",(0,o.jsx)(a.p,{children:"El objeto datastore en s\xed no puede ser copiado como un objeto:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"$mydatastore:=OB Copy(ds) //devuelve null\n"})}),"\n",(0,o.jsx)(a.p,{children:"Las propiedades del datastore son sin embargo enumerables:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:" ARRAY TEXT($prop;0)\n OB GET PROPERTY NAMES(ds;$prop)\n  //$prop contiene los nombres de todas las dataclasses\n"})}),"\n",(0,o.jsxs)(a.p,{children:["El datastore principal (por defecto) siempre est\xe1 disponible a trav\xe9s del comando ",(0,o.jsx)(a.code,{children:"ds"}),", pero el comando ",(0,o.jsx)(a.code,{children:"Open datastore"})," permite hacer referencia a todo datastore remoto."]}),"\n",(0,o.jsx)(a.h3,{id:"dataclass",children:"Dataclass"}),"\n",(0,o.jsx)(a.p,{children:"Una dataclass es el equivalente de una tabla. Se utiliza como modelo de objetos y hace referencia a todos los campos como atributos, incluidos los atributos relacionales (atributos construidos a partir de relaciones entre las dataclasses). Los atributos relacionales pueden utilizarse en las peticiones como cualquier otro atributo."}),"\n",(0,o.jsxs)(a.p,{children:["Todas las dataclasses de un proyecto 4D est\xe1n disponibles como propiedad del datastore ",(0,o.jsx)(a.code,{children:"ds"}),". Para los datastores remotos a los que se accede a trav\xe9s de ",(0,o.jsx)(a.code,{children:"Open datastore"})," o ",(0,o.jsx)(a.a,{href:"/docs/es/REST/gettingStarted",children:"peticiones REST"}),", se debe seleccionar la opci\xf3n ",(0,o.jsx)(a.strong,{children:"Exponer como recurso REST"})," al nivel de la estructura 4D para cada tabla expuesta que se desee exponer como dataclass en el datastore."]}),"\n",(0,o.jsx)(a.p,{children:"Por ejemplo, considere la siguiente tabla en la estructura 4D:"}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{src:s(651791).Z+"",width:"137",height:"188"})}),"\n",(0,o.jsxs)(a.p,{children:["La tabla ",(0,o.jsx)(a.code,{children:"Company"})," est\xe1 disponible autom\xe1ticamente como dataclass en el datastore ",(0,o.jsx)(a.code,{children:"ds"}),". Puede escribir:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"var $compClass : cs.Empresa //declara una variable objeto $compClass de la clase Company \n$compClass:=ds.Company //asigna la referencia de la dataclass Company a $compClass\n"})}),"\n",(0,o.jsx)(a.p,{children:"Un objeto dataclass puede contener:"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"attributes"}),"\n",(0,o.jsx)(a.li,{children:"atributos relacionales"}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:"La dataclass ofrece una abstracci\xf3n de la base de datos f\xedsica y permite manejar un modelo de datos conceptual. El dataclass es el \xfanico medio para consultar al datastore. Una consulta se hace desde una \xfanica dataclass. Las consultas se crean en torno a los atributos y a los nombres de atributos relacionales de las dataclasses. As\xed pues, los atributos relacionales son el medio para implicar varias tablas vinculadas en una consulta."}),"\n",(0,o.jsx)(a.p,{children:"El objeto dataclass mismo no puede copiarse como un objeto:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"$mydataclass:=OB Copy(ds.Employee) //devuelve null\n"})}),"\n",(0,o.jsx)(a.p,{children:"Las propiedades de la dataclass son sin embargo enumerables:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-code4d",children:"ARRAY TEXT($prop;0)\nOB GET PROPERTY NAMES(ds.Employee;$prop)\n//$prop contiene los nombres de todos los atributos de dataclass\n"})}),"\n",(0,o.jsx)(a.h3,{id:"atributo",children:"Atributo"}),"\n",(0,o.jsx)(a.p,{children:"Las propiedades de dataclass son objetos atributo que describen los campos o relaciones subyacentes. Por ejemplo:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:' $nameAttribute:=ds.Company.name ///referencia a un atributo de clase\n $revenuesAttribute:=ds.Company["revenues"] //forma alternativa\n'})}),"\n",(0,o.jsxs)(a.p,{children:["Este c\xf3digo asigna a ",(0,o.jsx)(a.code,{children:"$nameAttribute"})," y ",(0,o.jsx)(a.code,{children:"$revenuesAttribute"})," las referencias a los atributos name y revenues de la clase ",(0,o.jsx)(a.code,{children:"Company"}),". Esta sintaxis NO devuelve los valores mantenidos dentro del atributo, sino que devuelve referencias a los propios atributos. Para manejar los valores, es necesario pasar por ",(0,o.jsx)(a.a,{href:"#entity",children:"Entidades"}),"."]}),"\n",(0,o.jsxs)(a.p,{children:["Todos los campos elegibles de una tabla est\xe1n disponibles como atributos de su ",(0,o.jsx)(a.a,{href:"#dataclass",children:"dataclass"})," padre. Para los datastores remotos a los que se accede a trav\xe9s de ",(0,o.jsx)(a.code,{children:"Open datastore"})," o ",(0,o.jsx)(a.a,{href:"/docs/es/REST/gettingStarted",children:"peticiones REST"}),", se debe seleccionar la opci\xf3n ",(0,o.jsx)(a.strong,{children:"Exponer como recurso REST"})," al nivel de la estructura 4D para cada campo que se desee exponer como at"]}),"\n",(0,o.jsx)(a.h4,{id:"atributos-de-almacenamiento-y-relacionales",children:"Atributos de almacenamiento y relacionales"}),"\n",(0,o.jsxs)(a.p,{children:["Los atributos de la Dataclass son de varios tipos: almacenamiento, relatedEntity y relatedEntities. Los atributos escalares (",(0,o.jsx)(a.em,{children:"es decir"}),", ofrecen un \xfanico valor) soportan todos los tipos de datos est\xe1ndar 4D (entero, texto, objeto, etc.)."]}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:["Un ",(0,o.jsx)(a.strong,{children:"atributo de almacenamiento"})," equivale a un campo en la base de datos 4D y puede indexarse. Los valores asignados a un atributo de almacenamiento se almacenan como parte de la entidad cuando se guarda. Cuando se accede a un atributo de almacenamiento, su valor procede directamente del datastore. Los atributos de almacenamiento son el bloque de construcci\xf3n m\xe1s b\xe1sico de una entidad y se definen por nombre y tipo de datos."]}),"\n",(0,o.jsxs)(a.li,{children:["Un ",(0,o.jsx)(a.strong,{children:"atributo relacional"}),' ofrece acceso a otras entidades. Los atributos relacionales pueden dar como resultado una entidad \xfanica (o ninguna entidad), o una selecci\xf3n de entidades (de 0 a N entidades). Los atributos relacionales se basan en las relaciones "cl\xe1sicas" en la estructura relacional para ofrecer acceso directo a una entidad o a entidades relacionadas. Los atributos relacionales est\xe1n disponibles directamente en ORDA utilizando sus nombres.']}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:"Por ejemplo, considere la siguiente estructura de base de datos parcial y las propiedades relacionales:"}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{src:s(785453).Z+"",width:"690",height:"533"})}),"\n",(0,o.jsx)(a.p,{children:"Todos los atributos de almacenamiento estar\xe1n disponibles autom\xe1ticamente:"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:'en la dataclass Project: "ID", "name", y "companyID"'}),"\n",(0,o.jsx)(a.li,{children:'en la dataclasss Company: "ID", "name" y "discount"'}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:"Adem\xe1s, los siguientes atributos relacionales tambi\xe9n estar\xe1n disponibles autom\xe1ticamente:"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:["en la dataclass Project: el atributo ",(0,o.jsx)(a.strong,{children:"theClient"}),', del tipo "relatedEntity"; hay como m\xe1ximo una Empresa para cada Proyecto (el cliente)']}),"\n",(0,o.jsxs)(a.li,{children:["en la dataclass Company: el atributo ",(0,o.jsx)(a.strong,{children:"companyProjects"}),', del tipo "relatedEntities"; para cada empresa existe un cierto n\xfamero de proyectos relacionados.']}),"\n"]}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsx)(a.p,{children:"La propiedad Manual o Autom\xe1tica de una relaci\xf3n de base de datos no tiene efecto en ORDA."}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:"Todos los atributos de la dataclass se exponen como propiedades de la dataclass:"}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{src:s(908800).Z+"",width:"1049",height:"288"})}),"\n",(0,o.jsxs)(a.p,{children:["Tenga en cuenta que estos objetos describen los atributos, pero no dan acceso a los datos. La lectura o escritura de los datos se realiza a trav\xe9s de los ",(0,o.jsx)(a.a,{href:"/docs/es/ORDA/entities#using-entity-attributes",children:"objetos entidad"}),"."]}),"\n",(0,o.jsx)(a.h4,{id:"atributos-calculados-y-alias",children:"Atributos calculados y alias"}),"\n",(0,o.jsxs)(a.p,{children:["Los ",(0,o.jsx)(a.a,{href:"/docs/es/ORDA/ordaClasses#computed-attributes",children:"atributos calculados"})," y ",(0,o.jsx)(a.a,{href:"/docs/es/ORDA/ordaClasses#alias-attributes",children:"alias"}),' son atributos "virtuales". Su valor no se guarda, sino que se eval\xfaa cada vez que se accede a ellos. No pertenecen a la estructura subyacente de la base, sino que se construyen sobre ella y pueden utilizarse como cualquier atributo del modelo de datos.']}),"\n",(0,o.jsx)(a.h3,{id:"entity",children:"Entity"}),"\n",(0,o.jsxs)(a.p,{children:["Una entidad es el equivalente a un registro. En realidad es un objeto que hace referencia a un registro de la base de datos. Puede verse como una instancia de una ",(0,o.jsx)(a.a,{href:"#dataclass",children:"dataclass"}),", como un registro de la tabla correspondiente a la dataclass. Sin embargo, una entidad tambi\xe9n contiene datos correlacionados a la base de datos relacionados con el datastore."]}),"\n",(0,o.jsx)(a.p,{children:"La finalidad de la entidad es gestionar los datos (crear, actualizar, eliminar). Cuando se obtiene una referencia de entidad mediante una selecci\xf3n de entidad, tambi\xe9n conserva informaci\xf3n sobre la selecci\xf3n de entidad que permite la iteraci\xf3n a trav\xe9s de la selecci\xf3n."}),"\n",(0,o.jsx)(a.p,{children:"El objeto entidad en s\xed no puede ser copiado como un objeto:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:" $myentity:=OB Copy(ds.Employee.get(1)) //devuelve null\n"})}),"\n",(0,o.jsx)(a.p,{children:"Sin embargo, las propiedades de la entidad son enumerables:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:" ARRAY TEXT($prop;0)\n OB GET PROPERTY NAMES(ds.Employee.get(1);$prop)\n  //$prop contiene los nombres de todos los atributos de la entidad\n"})}),"\n",(0,o.jsx)(a.h3,{id:"entity-selection",children:"Entity selection"}),"\n",(0,o.jsx)(a.p,{children:"Una selecci\xf3n de entidades es un objeto que contiene una o varias referencias a entidades pertenecientes a la misma dataclass. Suele crearse como resultado de una consulta o devolverse a partir de un atributo relacional. Una entity selection puede contener 0, 1 o X entidades de la dataclass -- donde X puede representar el n\xfamero total de entidades contenidas en la dataclass."}),"\n",(0,o.jsx)(a.p,{children:"Ejemplo:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"var $e : cs.EmployeeSelection //declara una variable objeto $e del tipo de clase EmployeeSelection\n$e:=ds.Employee.all() //asigna la referencia de la selecci\xf3n de entidad resultante a la variable $e\n"})}),"\n",(0,o.jsxs)(a.p,{children:['Las entity selections pueden estar "ordenadas" o "sin ordenar" (',(0,o.jsx)(a.a,{href:"#ordered-or-unordered-entity-selection",children:"ver abajo"}),")."]}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsxs)(a.p,{children:['Las entity selections tambi\xe9n pueden ser "compartibles" o "no compartibles", dependiendo de ',(0,o.jsx)(a.a,{href:"/docs/es/ORDA/entities#shareable-or-alterable-entity-selections",children:"c\xf3mo se hayan creado"}),"."]}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:"El objeto selecci\xf3n de entidades en s\xed no puede ser copiado como un objeto:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:" $myentitysel:=OB Copy(ds.Employee.all()) //devuelve null\n"})}),"\n",(0,o.jsx)(a.p,{children:"Las propiedades de las selecciones de entidades son sin embargo enumerables:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:' ARRAY TEXT($prop;0)\n OB GET PROPERTY NAMES(ds.Employee.all();$prop)\n  //$prop contiene los nombres de las propiedades de la selecci\xf3n de entidades\n  //("length", 00", "01"...)\n'})}),"\n",(0,o.jsx)(a.h4,{id:"entity-selections-ordenadas-o-no-ordenadas",children:"Entity selections ordenadas o no ordenadas"}),"\n",(0,o.jsxs)(a.p,{children:["Por razones de optimizaci\xf3n, por defecto, 4D ORDA normalmente crea selecciones de entidades no ordenadas, excepto cuando utiliza el m\xe9todo ",(0,o.jsx)(a.code,{children:"orderBy( )"}),' o utiliza opciones espec\xedficas. En esta documentaci\xf3n, a menos que se especifique, "selecci\xf3n de entidades" suele referirse a una "selecci\xf3n de entidades no ordenada".']}),"\n",(0,o.jsx)(a.p,{children:"Las selecciones de entidades ordenadas s\xf3lo se crean cuando es necesario o cuando se solicitan espec\xedficamente mediante opciones, es decir, en los siguientes casos:"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:["resultado de un ",(0,o.jsx)(a.code,{children:"orderBy()"})," sobre una selecci\xf3n (de cualquier tipo) o de un ",(0,o.jsx)(a.code,{children:"orderBy()"})," sobre una dataclass"]}),"\n",(0,o.jsxs)(a.li,{children:["resultado del m\xe9todo ",(0,o.jsx)(a.code,{children:"newSelection()"})," con la opci\xf3n ",(0,o.jsx)(a.code,{children:"dk keep ordered"})]}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:"Las selecciones de entidades desordenadas se crean en los siguientes casos:"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:["resultado de un ",(0,o.jsx)(a.code,{children:"query()"})," est\xe1ndar sobre una selecci\xf3n (de cualquier tipo) o de un ",(0,o.jsx)(a.code,{children:"query()"})," sobre una dataclass,"]}),"\n",(0,o.jsxs)(a.li,{children:["resultado del m\xe9todo ",(0,o.jsx)(a.code,{children:"newSelection()"})," sin opci\xf3n,"]}),"\n",(0,o.jsxs)(a.li,{children:["resultado de uno de los m\xe9todos de comparaci\xf3n, sean cuales sean los tipos de selecci\xf3n de entrada: ",(0,o.jsx)(a.code,{children:"or()"}),", ",(0,o.jsx)(a.code,{children:"and()"}),", ",(0,o.jsx)(a.code,{children:"minus()"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsxs)(a.p,{children:["Las siguientes selecciones de entidades son siempre ",(0,o.jsx)(a.strong,{children:"ordenadas"}),":"]}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"selecciones de entidades devueltas por 4D Server a un cliente remoto"}),"\n",(0,o.jsx)(a.li,{children:"selecciones de entidades basadas en datastores remotos."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:"Tenga en cuenta que cuando una selecci\xf3n de entidades ordenada se convierte en una selecci\xf3n de entidades no ordenada, se elimina toda referencia de entidad repetida."})]})}function u(e={}){let{wrapper:a}={...(0,d.a)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},36334:function(e,a,s){s.d(a,{Z:function(){return n}});let n=s.p+"assets/images/ExposeDataclass-493afc3bdbd30cb758f171009c9d11bb.png"},651791:function(e,a,s){s.d(a,{Z:function(){return n}});let n=s.p+"assets/images/companyTable-15e8c71e579a6392b89a8e3f45aa8536.png"},908800:function(e,a,s){s.d(a,{Z:function(){return n}});let n=s.p+"assets/images/dataclassProperties-b0e6524ae14723315b5d45435df82853.png"},510803:function(e,a,s){s.d(a,{Z:function(){return n}});let n=s.p+"assets/images/datastoreMapping-833be12255d9e7b9cde49426a0cc902f.png"},785453:function(e,a,s){s.d(a,{Z:function(){return n}});let n=s.p+"assets/images/relationProperties-f7d9bc6fc793e2bae76ea2164c37ffe3.png"},250065:function(e,a,s){s.d(a,{Z:function(){return t},a:function(){return l}});var n=s(667294);let o={},d=n.createContext(o);function l(e){let a=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),n.createElement(d.Provider,{value:a},e.children)}}}]);