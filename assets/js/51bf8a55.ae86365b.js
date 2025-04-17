"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83801"],{121588:function(e,t,a){a.r(t),a.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>n,assets:()=>l,toc:()=>d,contentTitle:()=>o});var n=JSON.parse('{"id":"ORDA/dsmapping","title":"Data Model Objects","description":"The ORDA technology is based upon an automatic mapping of an underlying database structure. It also provides access to data through entity and entity selection objects. As a result, ORDA exposes the whole database as a set of data model objects.","source":"@site/versioned_docs/version-20-R8/ORDA/dsMapping.md","sourceDirName":"ORDA","slug":"/ORDA/dsmapping","permalink":"/docs/20-R8/ORDA/dsmapping","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2FdsMapping.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"dsmapping","title":"Data Model Objects"},"sidebar":"docs","previous":{"title":"ORDA","permalink":"/docs/20-R8/ORDA/overview"},"next":{"title":"Data Model Classes","permalink":"/docs/20-R8/ORDA/ordaClasses"}}'),s=a("785893"),r=a("250065");let i={id:"dsmapping",title:"Data Model Objects"},o=void 0,l={},d=[{value:"Structure mapping",id:"structure-mapping",level:2},{value:"General rules",id:"general-rules",level:3},{value:"Rules for remote access control",id:"rules-for-remote-access-control",level:3},{value:"Data model update",id:"data-model-update",level:3},{value:"Object definition",id:"object-definition",level:2},{value:"Datastore",id:"datastore",level:3},{value:"Dataclass",id:"dataclass",level:3},{value:"Attribute",id:"attribute",level:3},{value:"Storage and Relation attributes",id:"storage-and-relation-attributes",level:4},{value:"Computed and Alias attributes",id:"computed-and-alias-attributes",level:4},{value:"Entity",id:"entity",level:3},{value:"Entity selection",id:"entity-selection",level:3},{value:"Ordered or unordered entity selection",id:"ordered-or-unordered-entity-selection",level:4}];function c(e){let t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"The ORDA technology is based upon an automatic mapping of an underlying database structure. It also provides access to data through entity and entity selection objects. As a result, ORDA exposes the whole database as a set of data model objects."}),"\n",(0,s.jsx)(t.h2,{id:"structure-mapping",children:"Structure mapping"}),"\n",(0,s.jsxs)(t.p,{children:["When you call a datastore using the ",(0,s.jsx)(t.a,{href:"/docs/20-R8/commands/ds",children:(0,s.jsx)(t.code,{children:"ds"})})," or the ",(0,s.jsx)(t.a,{href:"/docs/20-R8/commands/open-datastore",children:(0,s.jsx)(t.code,{children:"Open datastore"})})," command, 4D automatically references tables and fields of the corresponding 4D structure as properties of the returned ",(0,s.jsx)(t.a,{href:"#datastore",children:"datastore"})," object:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Tables are mapped to dataclasses."}),"\n",(0,s.jsx)(t.li,{children:"Fields are mapped to storage attributes."}),"\n",(0,s.jsx)(t.li,{children:"Relations are mapped to relation attributes - relation names, defined in the Structure editor, are used as relation attribute names."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:a(117590).Z+"",width:"961",height:"480"})}),"\n",(0,s.jsx)(t.h3,{id:"general-rules",children:"General rules"}),"\n",(0,s.jsx)(t.p,{children:"The following rules are applied for any conversions:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Table, field, and relation names are mapped to object property names. Make sure that such names comply with general object naming rules, as explained in the ",(0,s.jsx)(t.a,{href:"/docs/20-R8/Concepts/identifiers",children:"object naming conventions"})," section."]}),"\n",(0,s.jsxs)(t.li,{children:["A datastore only references tables with a single primary key. The following tables are not referenced:\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Tables without a primary key"}),"\n",(0,s.jsx)(t.li,{children:"Tables with composite primary keys."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["BLOB fields are automatically available as attributes of the ",(0,s.jsx)(t.a,{href:"/docs/20-R8/Concepts/blob#blob-types",children:"Blob object"})," type."]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"ORDA mapping does not take into account:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'the "Invisible" option for tables or fields,'}),"\n",(0,s.jsxs)(t.li,{children:["the virtual structure defined through ",(0,s.jsx)(t.code,{children:"SET TABLE TITLES"})," or ",(0,s.jsx)(t.code,{children:"SET FIELD TITLES"}),","]}),"\n",(0,s.jsx)(t.li,{children:'the "Manual" or "Automatic" property of relations.'}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"rules-for-remote-access-control",children:"Rules for remote access control"}),"\n",(0,s.jsxs)(t.p,{children:["When accessing a remote datastore through the ",(0,s.jsx)(t.code,{children:"Open datastore"})," command or ",(0,s.jsx)(t.a,{href:"/docs/20-R8/REST/gettingStarted",children:"REST requests"}),", only tables and fields with the ",(0,s.jsx)(t.strong,{children:"Expose as REST resource"})," property are available remotely."]}),"\n",(0,s.jsx)(t.p,{children:"This option must be selected at the 4D structure level for each table and each field that you want to be exposed as dataclass and attribute in the datastore:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:a(165784).Z+"",width:"279",height:"362"})}),"\n",(0,s.jsx)(t.h3,{id:"data-model-update",children:"Data model update"}),"\n",(0,s.jsx)(t.p,{children:"Any modifications applied at the level of the database structure invalidate the current ORDA model layer. These modifications include:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"adding or removing a table, a field, or a relation"}),"\n",(0,s.jsx)(t.li,{children:"renaming of a table, a field, or a relation"}),"\n",(0,s.jsx)(t.li,{children:"changing a core property of a field (type, unique, index, autoincrement, null value support)"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["When the current ORDA model layer has been invalidated, it is automatically reloaded and updated in subsequent calls of the local ",(0,s.jsx)(t.code,{children:"ds"})," datastore on 4D and 4D Server. Note that existing references to ORDA objects such as entities or entity selections will continue to use the model from which they have been created, until they are regenerated."]}),"\n",(0,s.jsx)(t.p,{children:"However, the updated ORDA model layer is not automatically available in the following contexts:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"a remote 4D application connected to 4D Server -- the remote application must reconnect to the server."}),"\n",(0,s.jsxs)(t.li,{children:["a remote datastore opened using ",(0,s.jsx)(t.code,{children:"Open datastore"})," or through ",(0,s.jsx)(t.a,{href:"/docs/20-R8/REST/gettingStarted",children:"REST calls"})," -- a new session must be opened."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"object-definition",children:"Object definition"}),"\n",(0,s.jsx)(t.h3,{id:"datastore",children:"Datastore"}),"\n",(0,s.jsxs)(t.p,{children:["The datastore is the interface object to a database. It builds a representation of the whole database as object. A datastore is made of a ",(0,s.jsx)(t.strong,{children:"model"})," and ",(0,s.jsx)(t.strong,{children:"data"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The model contains and describes all the dataclasses that make up the datastore. It is independant from the underlying database itself."}),"\n",(0,s.jsx)(t.li,{children:"Data refers to the information that is going to be used and stored in this model. For example, names, addresses, and birthdates of employees are pieces of data that you can work with in a datastore."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["When handled through the code, the datastore is an object whose properties are all of the ",(0,s.jsx)(t.a,{href:"#dataclass",children:"dataclasses"})," which have been specifically exposed."]}),"\n",(0,s.jsx)(t.p,{children:"4D allows you to handle the following datastores:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["the local datastore, based on the current 4D database, returned by the ",(0,s.jsx)(t.code,{children:"ds"})," command (the main datastore)."]}),"\n",(0,s.jsxs)(t.li,{children:["one or more remote datastore(s) exposed as REST resources in remote 4D databases, returned by the ",(0,s.jsx)(t.code,{children:"Open datastore"})," command."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"A datastore references only a single local or remote database."}),"\n",(0,s.jsx)(t.p,{children:"The datastore object itself cannot be copied as an object:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:"$mydatastore:=OB Copy(ds) //returns null\n"})}),"\n",(0,s.jsx)(t.p,{children:"The datastore properties are however enumerable:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:" ARRAY TEXT($prop;0)\n OB GET PROPERTY NAMES(ds;$prop)\n  //$prop contains the names of all the dataclasses\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The main (default) datastore is always available through the ",(0,s.jsx)(t.code,{children:"ds"})," command, but the ",(0,s.jsx)(t.code,{children:"Open datastore"})," command allows referencing any remote datastore."]}),"\n",(0,s.jsx)(t.h3,{id:"dataclass",children:"Dataclass"}),"\n",(0,s.jsx)(t.p,{children:"A dataclass is the equivalent of a table. It is used as an object model and references all fields as attributes, including relational attributes (attributes built upon relations between dataclasses). Relational attributes can be used in queries like any other attribute."}),"\n",(0,s.jsxs)(t.p,{children:["All dataclasses in a 4D project are available as a property of the ",(0,s.jsx)(t.code,{children:"ds"})," datastore. For remote datastores accessed through ",(0,s.jsx)(t.code,{children:"Open datastore"})," or ",(0,s.jsx)(t.a,{href:"/docs/20-R8/REST/gettingStarted",children:"REST requests"}),", the ",(0,s.jsx)(t.strong,{children:"Expose as REST resource"})," option must be selected at the 4D structure level for each exposed table that you want to be exposed as dataclass in the datastore."]}),"\n",(0,s.jsx)(t.p,{children:"For example, consider the following table in the 4D structure:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:a(473691).Z+"",width:"137",height:"188"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"Company"})," table is automatically available as a dataclass in the ",(0,s.jsx)(t.code,{children:"ds"})," datastore. You can write:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:"var $compClass : cs.Company //declares a $compClass object variable of the Company class\n$compClass:=ds.Company //assigns the Company dataclass reference to $compClass\n"})}),"\n",(0,s.jsx)(t.p,{children:"A dataclass object can contain:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"attributes"}),"\n",(0,s.jsx)(t.li,{children:"relation attributes"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The dataclass offers an abstraction of the physical database and allows handling a conceptual data model. The dataclass is the only means to query the datastore. A query is done from a single dataclass. Queries are built around attributes and relation attribute names of the dataclasses. So the relation attributes are the means to involve several linked tables in a query."}),"\n",(0,s.jsx)(t.p,{children:"The dataclass object itself cannot be copied as an object:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:"$mydataclass:=OB Copy(ds.Employee) //returns null\n"})}),"\n",(0,s.jsx)(t.p,{children:"The dataclass properties are however enumerable:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-code4d",children:"ARRAY TEXT($prop;0)\nOB GET PROPERTY NAMES(ds.Employee;$prop)\n//$prop contains the names of all the dataclass attributes\n"})}),"\n",(0,s.jsx)(t.h3,{id:"attribute",children:"Attribute"}),"\n",(0,s.jsx)(t.p,{children:"Dataclass properties are attribute objects describing the underlying fields or relations. For example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:' $nameAttribute:=ds.Company.name //reference to class attribute\n $revenuesAttribute:=ds.Company["revenues"] //alternate way\n'})}),"\n",(0,s.jsxs)(t.p,{children:["This code assigns to ",(0,s.jsx)(t.code,{children:"$nameAttribute"})," and ",(0,s.jsx)(t.code,{children:"$revenuesAttribute"})," references to the name and revenues attributes of the ",(0,s.jsx)(t.code,{children:"Company"})," class. This syntax does NOT return values held inside of the attribute, but instead returns references to the attributes themselves. To handle values, you need to go through ",(0,s.jsx)(t.a,{href:"#entity",children:"Entities"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["All eligible fields in a table are available as attributes of their parent ",(0,s.jsx)(t.a,{href:"#dataclass",children:"dataclass"}),". For remote datastores accessed through ",(0,s.jsx)(t.code,{children:"Open datastore"})," or ",(0,s.jsx)(t.a,{href:"/docs/20-R8/REST/gettingStarted",children:"REST requests"}),", the ",(0,s.jsx)(t.strong,{children:"Expose as REST resource"})," option must be selected at the 4D structure level for each field that you want to be exposed as a dataclass attribute."]}),"\n",(0,s.jsx)(t.h4,{id:"storage-and-relation-attributes",children:"Storage and Relation attributes"}),"\n",(0,s.jsxs)(t.p,{children:["Dataclass attributes come in several kinds: storage, relatedEntity, and relatedEntities. Attributes that are scalar (",(0,s.jsx)(t.em,{children:"i.e."}),", provide only a single value) support all the standard 4D data types (integer, text, object, etc.)."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(t.strong,{children:"storage attribute"})," is equivalent to a field in the 4D database and can be indexed. Values assigned to a storage attribute are stored as part of the entity when it is saved. When a storage attribute is accessed, its value comes directly from the datastore. Storage attributes are the most basic building block of an entity and are defined by name and data type."]}),"\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(t.strong,{children:"relation attribute"}),' provides access to other entities. Relation attributes can result in either a single entity (or no entity) or an entity selection (0 to N entities). Relation attributes are built upon "classic" relations in the relational structure to provide direct access to related entity or related entities. Relation attributes are directy available in ORDA using their names.']}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"For example, consider the following partial database structure and the relation properties:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:a(110192).Z+"",width:"690",height:"533"})}),"\n",(0,s.jsx)(t.p,{children:"All storage attributes will be automatically available:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'in the Project dataclass: "ID", "name", and "companyID"'}),"\n",(0,s.jsx)(t.li,{children:'in the Company dataclass: "ID", "name", and "discount"'}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"In addition, the following relation attributes will also be automatically available:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["in the Project dataclass: ",(0,s.jsx)(t.strong,{children:"theClient"}),' attribute, of the "relatedEntity" kind; there is at most one Company for each Project (the client)']}),"\n",(0,s.jsxs)(t.li,{children:["in the Company dataclass: ",(0,s.jsx)(t.strong,{children:"companyProjects"}),' attribute, of the "relatedEntities" kind; for each Company there is any number of related Projects.']}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The Manual or Automatic property of a database relation has no effect in ORDA."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"All dataclass attributes are exposed as properties of the dataclass:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:a(294125).Z+"",width:"1049",height:"288"})}),"\n",(0,s.jsxs)(t.p,{children:["Keep in mind that these objects describe attributes, but do not give access to data. Reading or writing data is done through ",(0,s.jsx)(t.a,{href:"/docs/20-R8/ORDA/entities#using-entity-attributes",children:"entity objects"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"computed-and-alias-attributes",children:"Computed and Alias attributes"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/20-R8/ORDA/ordaClasses#computed-attributes",children:"Computed attributes"})," and ",(0,s.jsx)(t.a,{href:"/docs/20-R8/ORDA/ordaClasses#alias-attributes",children:"alias attributes"}),' are "virtual" attributes. Their value is not stored but evaluated each time they are accessed. They do not belong to the underlying database structure, but are built upon it and can be used as any attribute of the data model.']}),"\n",(0,s.jsx)(t.h3,{id:"entity",children:"Entity"}),"\n",(0,s.jsxs)(t.p,{children:["An entity is the equivalent of a record. It is actually an object that references a record in the database. It can be seen as an instance of a ",(0,s.jsx)(t.a,{href:"#dataclass",children:"dataclass"}),", like a record of the table matching the dataclass. However, an entity also contains data correlated to the database related to the datastore."]}),"\n",(0,s.jsx)(t.p,{children:"The purpose of the entity is to manage data (create, update, delete). When an entity reference is obtained by means of an entity selection, it also retains information about the entity selection which allows iteration through the selection."}),"\n",(0,s.jsx)(t.p,{children:"The entity object itself cannot be copied as an object:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:" $myentity:=OB Copy(ds.Employee.get(1)) //returns null\n"})}),"\n",(0,s.jsx)(t.p,{children:"The entity properties are however enumerable:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:" ARRAY TEXT($prop;0)\n OB GET PROPERTY NAMES(ds.Employee.get(1);$prop)\n  //$prop contains the names of all the entity attributes\n"})}),"\n",(0,s.jsx)(t.h3,{id:"entity-selection",children:"Entity selection"}),"\n",(0,s.jsx)(t.p,{children:"An entity selection is an object containing one or more reference(s) to entities belonging to the same dataclass. It is usually created as a result of a query or returned from a relation attribute. An entity selection can contain 0, 1 or X entities from the dataclass -- where X can represent the total number of entities contained in the dataclass."}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:"var $e : cs.EmployeeSelection //declares a $e object variable of the EmployeeSelection class type\n$e:=ds.Employee.all() //assigns the resulting entity selection reference to the $e variable\n"})}),"\n",(0,s.jsxs)(t.p,{children:['Entity selections can be "sorted" or "unsorted" (',(0,s.jsx)(t.a,{href:"#ordered-or-unordered-entity-selection",children:"see below"}),")."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:['Entity selections can also be "shareable" or "non-shareable", depending on ',(0,s.jsx)(t.a,{href:"/docs/20-R8/ORDA/entities#shareable-or-alterable-entity-selections",children:"how they have been created"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The entity selection object itself cannot be copied as an object:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:" $myentitysel:=OB Copy(ds.Employee.all()) //returns null\n"})}),"\n",(0,s.jsx)(t.p,{children:"The entity selection properties are however enumerable:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:' ARRAY TEXT($prop;0)\n OB GET PROPERTY NAMES(ds.Employee.all();$prop)\n  //$prop contains the names of the entity selection properties\n  //("length", 00", "01"...)\n'})}),"\n",(0,s.jsx)(t.h4,{id:"ordered-or-unordered-entity-selection",children:"Ordered or unordered entity selection"}),"\n",(0,s.jsxs)(t.p,{children:["For optimization reasons, by default 4D ORDA usually creates unordered entity selections, except when you use the ",(0,s.jsx)(t.code,{children:"orderBy( )"}),' method or use specific options. In this documentation, unless specified, "entity selection" usually refers to an "unordered entity selection".']}),"\n",(0,s.jsx)(t.p,{children:"Ordered entity selections are created only when necessary or when specifically requested using options, i.e. in the following cases:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["result of an ",(0,s.jsx)(t.code,{children:"orderBy()"})," on a selection (of any type) or an ",(0,s.jsx)(t.code,{children:"orderBy()"})," on a dataclass"]}),"\n",(0,s.jsxs)(t.li,{children:["result of the ",(0,s.jsx)(t.code,{children:"newSelection()"})," method with the ",(0,s.jsx)(t.code,{children:"dk keep ordered"})," option"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Unordered entity selections are created in the following cases:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["result of a standard ",(0,s.jsx)(t.code,{children:"query()"})," on a selection (of any type) or a ",(0,s.jsx)(t.code,{children:"query()"})," on a dataclass,"]}),"\n",(0,s.jsxs)(t.li,{children:["result of the ",(0,s.jsx)(t.code,{children:"newSelection()"})," method without option,"]}),"\n",(0,s.jsxs)(t.li,{children:["result of any of the comparison methods, whatever the input selection types: ",(0,s.jsx)(t.code,{children:"or()"}),", ",(0,s.jsx)(t.code,{children:"and()"}),", ",(0,s.jsx)(t.code,{children:"minus()"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["The following entity selections are always ",(0,s.jsx)(t.strong,{children:"ordered"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"entity selections returned by 4D Server to a remote client"}),"\n",(0,s.jsx)(t.li,{children:"entity selections built upon remote datastores."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Note that when an ordered entity selection becomes an unordered entity selection, any repeated entity references are removed."})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},165784:function(e,t,a){a.d(t,{Z:function(){return n}});let n=a.p+"assets/images/ExposeDataclass-493afc3bdbd30cb758f171009c9d11bb.png"},473691:function(e,t,a){a.d(t,{Z:function(){return n}});let n=a.p+"assets/images/companyTable-15e8c71e579a6392b89a8e3f45aa8536.png"},294125:function(e,t,a){a.d(t,{Z:function(){return n}});let n=a.p+"assets/images/dataclassProperties-b0e6524ae14723315b5d45435df82853.png"},117590:function(e,t,a){a.d(t,{Z:function(){return n}});let n=a.p+"assets/images/datastoreMapping-833be12255d9e7b9cde49426a0cc902f.png"},110192:function(e,t,a){a.d(t,{Z:function(){return n}});let n=a.p+"assets/images/relationProperties-f7d9bc6fc793e2bae76ea2164c37ffe3.png"},250065:function(e,t,a){a.d(t,{Z:function(){return o},a:function(){return i}});var n=a(667294);let s={},r=n.createContext(s);function i(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);