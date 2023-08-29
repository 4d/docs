"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54033],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=o.createContext({}),d=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=n,b=c["".concat(i,".").concat(m)]||c[m]||u[m]||r;return a?o.createElement(b,s(s({ref:t},p),{},{components:a})):o.createElement(b,s({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var d=2;d<r;d++)s[d]=a[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},62320:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});a(67294);var o=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},n.apply(this,arguments)}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const s={id:"dsmapping",title:"Objetos Data Model"},l=void 0,i={unversionedId:"ORDA/dsmapping",id:"version-19/ORDA/dsmapping",title:"Objetos Data Model",description:"The ORDA technology is based upon an automatic mapping of an underlying 4D structure. Tamb\xe9m fornece acesso aos dados atrav\xe9s de objetos sele\xe7\xe3o de entidades (entity selection) e entidades (entity). Como resultado, ORDA exp\xf5e toda a base de dados como um conjunto de objetos de modelo de dados.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/ORDA/dsMapping.md",sourceDirName:"ORDA",slug:"/ORDA/dsmapping",permalink:"/docs/pt/19/ORDA/dsmapping",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2FdsMapping.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"dsmapping",title:"Objetos Data Model"},sidebar:"docs",previous:{title:"O que \xe9 ORDA?",permalink:"/docs/pt/19/ORDA/overview"},next:{title:"Classes de modelo de dados",permalink:"/docs/pt/19/ORDA/ordaClasses"}},d={},p=[{value:"Mapeamento da estrutura",id:"mapeamento-da-estrutura",level:2},{value:"Regras gerais",id:"regras-gerais",level:3},{value:"Regras para o controlo do acesso remoto",id:"regras-para-o-controlo-do-acesso-remoto",level:3},{value:"Actualiza\xe7\xe3o do modelo de dados",id:"actualiza\xe7\xe3o-do-modelo-de-dados",level:3},{value:"Defini\xe7\xe3o de objetos",id:"defini\xe7\xe3o-de-objetos",level:2},{value:"Datastore",id:"datastore",level:3},{value:"Dataclass",id:"dataclass",level:3},{value:"Atributo",id:"atributo",level:3},{value:"Atributos de armazenamento e de rela\xe7\xe3o",id:"atributos-de-armazenamento-e-de-rela\xe7\xe3o",level:4},{value:"Entity",id:"entity",level:3},{value:"Sele\xe7\xe3o de entidades",id:"sele\xe7\xe3o-de-entidades",level:3},{value:"Entity selections ordenadas ou n\xe3o ordenadas",id:"entity-selections-ordenadas-ou-n\xe3o-ordenadas",level:4}],u={toc:p};function c(e){var{components:t}=e,s=r(e,["components"]);return(0,o.kt)("wrapper",n({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ORDA technology is based upon an automatic mapping of an underlying 4D structure. Tamb\xe9m fornece acesso aos dados atrav\xe9s de objetos sele\xe7\xe3o de entidades (entity selection) e entidades (entity). Como resultado, ORDA exp\xf5e toda a base de dados como um conjunto de objetos de modelo de dados."),(0,o.kt)("h2",n({},{id:"mapeamento-da-estrutura"}),"Mapeamento da estrutura"),(0,o.kt)("p",null,"When you call a datastore using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ds")," or the ",(0,o.kt)("inlineCode",{parentName:"p"},"Open datastore")," command, 4D automatically references tables and fields of the corresponding 4D structure as properties of the returned ",(0,o.kt)("a",n({parentName:"p"},{href:"#datastore"}),"datastore")," object:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As tabelas correspondem \xe0s dataclasses."),(0,o.kt)("li",{parentName:"ul"},"Os campos s\xe3o mapeados para atributos de armazenamento."),(0,o.kt)("li",{parentName:"ul"},"Relations are mapped to relation attributes - relation names, defined in the Structure editor, are used as relation attribute names.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(17664).Z,width:"961",height:"480"})),(0,o.kt)("h3",n({},{id:"regras-gerais"}),"Regras gerais"),(0,o.kt)("p",null,"As seguintes regras s\xe3o aplicadas a quaisquer convers\xf5es:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Os nomes de tabelas, campos e rela\xe7\xf5es s\xe3o mapeados para nomes de propriedade de objeto. Make sure that such names comply with general object naming rules, as explained in the ",(0,o.kt)("a",n({parentName:"li"},{href:"/docs/pt/19/Concepts/identifiers"}),"object naming conventions")," section."),(0,o.kt)("li",{parentName:"ul"},"Uma datastore s\xf3 referencia as tabelas com uma \xfanica chave prim\xe1ria. As tabelas seguintes n\xe3o s\xe3o referenciadas:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Tabelas sem chave prim\xe1ria"),(0,o.kt)("li",{parentName:"ul"},"Tabelas com chaves prim\xe1rias compostas."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",n({parentName:"li"},{href:"/docs/pt/19/Concepts/blob"}),"BLOB")," type attributes are not managed in the datastore. BLOB type attributes are returned as Null in entities and cannot be assigned.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"ORDA mapping does not take into account:  "),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},'a op\xe7\xe3o "Invis\xedvel" para tabelas ou campos,'),(0,o.kt)("li",{parentName:"ul"},"the virtual structure defined through ",(0,o.kt)("inlineCode",{parentName:"li"},"SET TABLE TITLES")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"SET FIELD TITLES"),","),(0,o.kt)("li",{parentName:"ul"},'a propriedade "Manual" ou "Autom\xe1tica" das rela\xe7\xf5es.'))),(0,o.kt)("h3",n({},{id:"regras-para-o-controlo-do-acesso-remoto"}),"Regras para o controlo do acesso remoto"),(0,o.kt)("p",null,"When accessing a remote datastore through the ",(0,o.kt)("inlineCode",{parentName:"p"},"Open datastore")," command or ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/REST/gettingStarted"}),"REST requests"),", only tables and fields with the ",(0,o.kt)("strong",{parentName:"p"},"Expose as REST resource")," property are available remotely."),(0,o.kt)("p",null,"This option must be selected at the 4D structure level for each table and each field that you want to be exposed as dataclass and attribute in the datastore:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(46609).Z,width:"279",height:"362"})),(0,o.kt)("h3",n({},{id:"actualiza\xe7\xe3o-do-modelo-de-dados"}),"Actualiza\xe7\xe3o do modelo de dados"),(0,o.kt)("p",null,"Any modifications applied at the level of the database structure invalidate the current ORDA model layer. Estas modifica\xe7\xf5es incluem:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"adicionar ou remover uma tabela, um campo ou uma rela\xe7\xe3o"),(0,o.kt)("li",{parentName:"ul"},"renomea\xe7\xe3o de uma tabela, um campo ou uma rela\xe7\xe3o"),(0,o.kt)("li",{parentName:"ul"},"changing a core property of a field (type, unique, index, autoincrement, null value support)")),(0,o.kt)("p",null,"When the current ORDA model layer has been invalidated, it is automatically reloaded and updated in subsequent calls of the local ",(0,o.kt)("inlineCode",{parentName:"p"},"ds")," datastore on 4D and 4D Server. Note that existing references to ORDA objects such as entities or entity selections will continue to use the model from which they have been created, until they are regenerated."),(0,o.kt)("p",null,"However, the updated ORDA model layer is not automatically available in the following contexts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a remote 4D application connected to 4D Server -- the remote application must reconnect to the server."),(0,o.kt)("li",{parentName:"ul"},"a remote datastore opened using ",(0,o.kt)("inlineCode",{parentName:"li"},"Open datastore")," or through ",(0,o.kt)("a",n({parentName:"li"},{href:"/docs/pt/19/REST/gettingStarted"}),"REST calls")," -- a new session must be opened.")),(0,o.kt)("h2",n({},{id:"defini\xe7\xe3o-de-objetos"}),"Defini\xe7\xe3o de objetos"),(0,o.kt)("h3",n({},{id:"datastore"}),"Datastore"),(0,o.kt)("p",null,"O datastore \xe9 o objeto de interface para um banco de dados. Constr\xf3i uma representa\xe7\xe3o de todo o banco de dados como objeto. A datastore is made of a ",(0,o.kt)("strong",{parentName:"p"},"model")," and ",(0,o.kt)("strong",{parentName:"p"},"data"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The model contains and describes all the dataclasses that make up the datastore. \xc9 independente do pr\xf3prio banco de dados subjacente."),(0,o.kt)("li",{parentName:"ul"},"Os dados referem-se \xe0 informa\xe7\xe3o que vai ser utilizada e armazenada neste modelo. For example, names, addresses, and birthdates of employees are pieces of data that you can work with in a datastore.")),(0,o.kt)("p",null,"When handled through the code, the datastore is an object whose properties are all of the ",(0,o.kt)("a",n({parentName:"p"},{href:"#dataclass"}),"dataclasses")," which have been specifically exposed."),(0,o.kt)("p",null,"4D permite lidar com os seguintes datastores:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the local datastore, based on the current 4D database, returned by the ",(0,o.kt)("inlineCode",{parentName:"li"},"ds")," command (the main datastore)."),(0,o.kt)("li",{parentName:"ul"},"one or more remote datastore(s) exposed as REST resources in remote 4D databases, returned by the ",(0,o.kt)("inlineCode",{parentName:"li"},"Open datastore")," command.")),(0,o.kt)("p",null,"A datastore references only a single local or remote database."),(0,o.kt)("p",null,"O pr\xf3prio objeto datastore n\xe3o pode ser copiado como um objeto:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"$mydatastore:=OB Copy(ds) //retorna nulo\n")),(0,o.kt)("p",null,"No entanto, as propriedades do datastore s\xe3o enumer\xe1veis:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-4d"})," ARRAY TEXT($prop;0)\n OB GET PROPERTY NAMES(ds;$prop)\n  //$prop cont\xe9m os nomes de todas as classes de dados\n")),(0,o.kt)("p",null,"The main (default) datastore is always available through the ",(0,o.kt)("inlineCode",{parentName:"p"},"ds")," command, but the ",(0,o.kt)("inlineCode",{parentName:"p"},"Open datastore")," command allows referencing any remote datastore."),(0,o.kt)("h3",n({},{id:"dataclass"}),"Dataclass"),(0,o.kt)("p",null,"Uma dataclass \xe9 o equivalente a uma tabela. It is used as an object model and references all fields as attributes, including relational attributes (attributes built upon relations between dataclasses). Os atributos relacionais podem ser utilizados em consultas como qualquer outro atributo."),(0,o.kt)("p",null,"All dataclasses in a 4D project are available as a property of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ds")," datastore. For remote datastores accessed through ",(0,o.kt)("inlineCode",{parentName:"p"},"Open datastore")," or ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/REST/gettingStarted"}),"REST requests"),", the ",(0,o.kt)("strong",{parentName:"p"},"Expose as REST resource")," option must be selected at the 4D structure level for each exposed table that you want to be exposed as dataclass in the datastore."),(0,o.kt)("p",null,"Por exemplo, considere a seguinte tabela na estrutura 4D:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(38700).Z,width:"137",height:"188"})),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Company")," table is automatically available as a dataclass in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ds")," datastore. Voc\xea pode escrever:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"var $compClass : cs. Company //declares a $compClass object variable of the Company class\n$compClass:=ds. Company //assigns the Company dataclass reference to $compClass\n")),(0,o.kt)("p",null,"Um objeto de classe de dados pode conter:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"attributes"),(0,o.kt)("li",{parentName:"ul"},"atributos relacionais")),(0,o.kt)("p",null,"The dataclass offers an abstraction of the physical database and allows handling a conceptual data model. A dataclass \xe9 a \xfanica forma de consultar o datastore. Uma consulta \xe9 feita a partir de uma \xfanica dataclass. As consultas s\xe3o constru\xeddas em torno de atributos e nomes de atributos de rela\xe7\xe3o das dataclasses. Assim, os atributos de rela\xe7\xe3o s\xe3o o meio de envolver v\xe1rias tabelas ligadas numa consulta."),(0,o.kt)("p",null,"O pr\xf3prio objeto dataclass n\xe3o pode ser copiado como um objeto:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"$mydataclass:=OB Copy(ds. Employee) //returns null\n")),(0,o.kt)("p",null,"No entanto, as propriedades da dataclass s\xe3o enumer\xe1veis:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-code4d"}),"ARRAY TEXT($prop;0)\nOB GET PROPERTY NAMES(ds.Employee;$prop)\n//$prop contains the names of all the dataclasse attributes\n")),(0,o.kt)("h3",n({},{id:"atributo"}),"Atributo"),(0,o.kt)("p",null,"Dataclass properties are attribute objects describing the underlying fields or relations. Por exemplo:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-4d"}),' $nameAttribute:=ds. Company.name //reference to class attribute\n $revenuesAttribute:=ds. Company["revenues"] //alternate way\n')),(0,o.kt)("p",null,"This code assigns to ",(0,o.kt)("inlineCode",{parentName:"p"},"$nameAttribute")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"$revenuesAttribute")," references to the name and revenues attributes of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Company")," class. Essa sintaxe NAO devolve valores mantidos dentro do atributo, mas sim devolve refer\xeancias aos pr\xf3prios atributos. To handle values, you need to go through ",(0,o.kt)("a",n({parentName:"p"},{href:"#entity"}),"Entities"),"."),(0,o.kt)("p",null,"All eligible fieds in a table are available as attributes of their parent ",(0,o.kt)("a",n({parentName:"p"},{href:"#dataclass"}),"dataclass"),". For remote datastores accessed through ",(0,o.kt)("inlineCode",{parentName:"p"},"Open datastore")," or ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/REST/gettingStarted"}),"REST requests"),", the ",(0,o.kt)("strong",{parentName:"p"},"Expose as REST resource")," option must be selected at the 4D structure level for each field that you want to be exposed as a dataclass attribute."),(0,o.kt)("h4",n({},{id:"atributos-de-armazenamento-e-de-rela\xe7\xe3o"}),"Atributos de armazenamento e de rela\xe7\xe3o"),(0,o.kt)("p",null,"Dataclass attributes come in several kinds: storage, relatedEntity, and relatedEntities. Attributes that are scalar (",(0,o.kt)("em",{parentName:"p"},"i.e."),", provide only a single value) support the standard 4D data type (integer, text, object, etc.)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"storage attribute")," is equivalent to a field in the 4D database and can be indexed. Values assigned to a storage attribute are stored as part of the entity when it is saved. When a storage attribute is accessed, its value comes directly from the datastore. Storage attributes are the most basic building block of an entity and are defined by name and data type."),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"relation attribute"),' provides access to other entities. Relation attributes can result in either a single entity (or no entity) or an entity selection (0 to N entities). Relation attributes are built upon "classic" relations in the relational structure to provide direct access to related entity or related entities. Relation attributes are directy available in ORDA using their names.')),(0,o.kt)("p",null,"For example, consider the following partial database structure and the relation properties:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(48877).Z,width:"690",height:"533"})),(0,o.kt)("p",null,"All storage attributes will be automatically available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'in the Project dataclass: "ID", "name", and "companyID"'),(0,o.kt)("li",{parentName:"ul"},'na dataclass Company: "ID", "name" e "discount"')),(0,o.kt)("p",null,"In addition, the following relation attributes will also be automatically available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"in the Project dataclass: ",(0,o.kt)("strong",{parentName:"li"},"theClient"),' attribute, of the "relatedEntity" kind; there is at most one Company for each Project (the client)'),(0,o.kt)("li",{parentName:"ul"},"in the Company dataclass: ",(0,o.kt)("strong",{parentName:"li"},"companyProjects"),' attribute, of the "relatedEntities" kind; for each Company there is any number of related Projects.',(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("blockquote",{parentName:"blockquote"},(0,o.kt)("blockquote",{parentName:"blockquote"},(0,o.kt)("p",{parentName:"blockquote"},"The Manual or Automatic property of a database relation has no effect in ORDA.")))))),(0,o.kt)("p",null,"All dataclass attributes are exposed as properties of the dataclass:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(80658).Z,width:"1049",height:"288"})),(0,o.kt)("p",null,"Keep in mind that these objects describe attributes, but do not give access to data. Reading or writing data is done through ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/ORDA/entities#using-entity-attributes"}),"entity objects"),"."),(0,o.kt)("h3",n({},{id:"entity"}),"Entity"),(0,o.kt)("p",null,"Uma entidade \xe9 o equivalente a um registo. Na verdade, \xe9 um objeto que referir-se a um registo no banco de dados. It can be seen as an instance of a ",(0,o.kt)("a",n({parentName:"p"},{href:"#dataclass"}),"dataclass"),", like a record of the table matching the dataclass. However, an entity also contains data correlated to the database related to the datastore."),(0,o.kt)("p",null,"O objetivo da entidade \xe9 gerir dados (criar, atualizar, apagar). When an entity reference is obtained by means of an entity selection, it also retains information about the entity selection which allows iteration through the selection."),(0,o.kt)("p",null,"O objeto entidade em si n\xe3o pode ser copiado como um objeto:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-4d"})," $myentity:=OB Copy(ds. Employee.get(1)) //retorna null\n")),(0,o.kt)("p",null,"As propriedades da entidade s\xe3o, no entanto, enumer\xe1veis:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-4d"})," ARRAY TEXT($prop;0)\n OB GET PROPERTY NAMES(ds. Employee.get(1);$prop)\n  //$prop contains the names of all the entity attributes\n")),(0,o.kt)("h3",n({},{id:"sele\xe7\xe3o-de-entidades"}),"Sele\xe7\xe3o de entidades"),(0,o.kt)("p",null,"An entity selection is an object containing one or more reference(s) to entities belonging to the same dataclass. \xc9 normalmente criado como resultado de uma consulta ou devolvido a partir de um atributo de rela\xe7\xe3o. Uma sele\xe7\xe3o de entidades pode conter 0, 1 ou X entidades da dataclass -- onde X pode representar o n\xfamero total de entidades contidas na dataclass."),(0,o.kt)("p",null,"Exemplo:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"var $e : cs. EmployeeSelection //declares a $e object variable of the EmployeeSelection class type\n$e:=ds. Employee.all() //assigns the resulting entity selection reference to the $e variable\n")),(0,o.kt)("p",null,'Entity selections can be "sorted" or "unsorted" (',(0,o.kt)("a",n({parentName:"p"},{href:"#ordered-or-unordered-entity-selection"}),"see below"),")."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'Entity selections can also be "shareable" or "non-shareable", depending on ',(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/ORDA/entities#shareable-or-alterable-entity-selections"}),"how they have been created"),".")),(0,o.kt)("p",null,"O pr\xf3prio objeto de sele\xe7\xe3o de entidades n\xe3o pode ser copiado como um objeto:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-4d"})," $myentitysel:=OB Copy(ds. Employee.all()) //returns null\n")),(0,o.kt)("p",null,"No entanto, as propriedades de sele\xe7\xe3o de entidades s\xe3o enumer\xe1veis:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-4d"}),' ARRAY TEXT($prop;0)\n OB GET PROPERTY NAMES(ds. Employee.all();$prop)\n  //$prop contains the names of the entity selection properties\n  //("length", 00", "01"...)\n')),(0,o.kt)("h4",n({},{id:"entity-selections-ordenadas-ou-n\xe3o-ordenadas"}),"Entity selections ordenadas ou n\xe3o ordenadas"),(0,o.kt)("p",null,"For optimization reasons, by default 4D ORDA usually creates unordered entity selections, except when you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"orderBy( )"),' method or use specific options. In this documentation, unless specified, "entity selection" usually refers to an "unordered entity selection".'),(0,o.kt)("p",null,"Ordered entity selections are created only when necessary or when specifically requested using options, i.e. in the following cases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"result of an ",(0,o.kt)("inlineCode",{parentName:"li"},"orderBy()")," on a selection (of any type) or an ",(0,o.kt)("inlineCode",{parentName:"li"},"orderBy()")," on a dataclass"),(0,o.kt)("li",{parentName:"ul"},"result of the ",(0,o.kt)("inlineCode",{parentName:"li"},"newSelection()")," method with the ",(0,o.kt)("inlineCode",{parentName:"li"},"dk keep ordered")," option")),(0,o.kt)("p",null,"As selec\xe7\xf5es de entidades n\xe3o ordenadas s\xe3o criadas nos seguintes casos:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"result of a standard ",(0,o.kt)("inlineCode",{parentName:"li"},"query()")," on a selection (of any type) or a ",(0,o.kt)("inlineCode",{parentName:"li"},"query()")," on a dataclass,"),(0,o.kt)("li",{parentName:"ul"},"resultado do m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"li"},"newSelection()")," sem op\xe7\xe3o,"),(0,o.kt)("li",{parentName:"ul"},"result of any of the comparison methods, whatever the input selection types: ",(0,o.kt)("inlineCode",{parentName:"li"},"or()"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"and()"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"minus()"),".",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("blockquote",{parentName:"blockquote"},(0,o.kt)("blockquote",{parentName:"blockquote"},(0,o.kt)("p",{parentName:"blockquote"},"The following entity selections are always ",(0,o.kt)("strong",{parentName:"p"},"ordered"),": > > ",(0,o.kt)("em",{parentName:"p"}," entity selections returned by 4D Server to a remote client > ")," entity selections built upon remote datastores."))),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("blockquote",{parentName:"blockquote"},(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("blockquote",{parentName:"blockquote"},(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"entity selections returned by 4D Server to a remote client > * entity selections built upon remote datastores."))))))))),(0,o.kt)("li",{parentName:"ul"},"selec\xe7\xf5es de entidades constru\xeddas em datastores remotos."))))),(0,o.kt)("p",null,"Note that when an ordered entity selection becomes an unordered entity selection, any repeated entity references are removed."))}c.isMDXComponent=!0},46609:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/ExposeDataclass-493afc3bdbd30cb758f171009c9d11bb.png"},38700:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/companyTable-15e8c71e579a6392b89a8e3f45aa8536.png"},80658:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/dataclassProperties-b0e6524ae14723315b5d45435df82853.png"},17664:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/datastoreMapping-833be12255d9e7b9cde49426a0cc902f.png"},48877:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/relationProperties-f7d9bc6fc793e2bae76ea2164c37ffe3.png"}}]);