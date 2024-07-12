/*! For license information please see d61bed5c.27f27c76.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2127],{739995:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=a(474848),n=a(28453);const i={id:"glossary",title:"Glossary"},l=void 0,r={id:"ORDA/glossary",title:"Glossary",description:"Main concepts at a glance",source:"@site/versioned_docs/version-20-R6/ORDA/glossary.md",sourceDirName:"ORDA",slug:"/ORDA/glossary",permalink:"/docs/ORDA/glossary",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Fglossary.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"glossary",title:"Glossary"},sidebar:"docs",previous:{title:"Client/Server Optimization",permalink:"/docs/ORDA/client-server-optimization"},next:{title:"About the 4D Language",permalink:"/docs/Concepts/about"}},o={},d=[{value:"Main concepts at a glance",id:"main-concepts-at-a-glance",level:2},{value:"Action",id:"action",level:2},{value:"Attribute",id:"attribute",level:2},{value:"AttributePath",id:"attributepath",level:2},{value:"Class code",id:"class-code",level:2},{value:"Computed attribute",id:"computed-attribute",level:2},{value:"Data model class",id:"data-model-class",level:2},{value:"Data model object",id:"data-model-object",level:2},{value:"Data model function",id:"data-model-function",level:2},{value:"Dataclass",id:"dataclass",level:2},{value:"DataClass class",id:"dataclass-class",level:2},{value:"Datastore",id:"datastore",level:2},{value:"DataStore class",id:"datastore-class",level:2},{value:"DataStoreImplementation",id:"datastoreimplementation",level:2},{value:"Deep copy",id:"deep-copy",level:2},{value:"ds",id:"ds",level:2},{value:"Entity",id:"entity",level:2},{value:"Entity selection",id:"entity-selection",level:2},{value:"Generic class",id:"generic-class",level:2},{value:"Lazy loading",id:"lazy-loading",level:2},{value:"Main datastore",id:"main-datastore",level:2},{value:"Method",id:"method",level:2},{value:"Mixed data type",id:"mixed-data-type",level:2},{value:"Optimistic Lock",id:"optimistic-lock",level:2},{value:"Pessimistic Lock",id:"pessimistic-lock",level:2},{value:"Privilege",id:"privilege",level:2},{value:"Property",id:"property",level:2},{value:"PropertyPath",id:"propertypath",level:2},{value:"Regular class",id:"regular-class",level:2},{value:"Related dataclass",id:"related-dataclass",level:2},{value:"Relation attribute",id:"relation-attribute",level:2},{value:"Related entities",id:"related-entities",level:2},{value:"Remote datastore",id:"remote-datastore",level:2},{value:"Resource",id:"resource",level:2},{value:"Role",id:"role",level:2},{value:"Session",id:"session",level:2},{value:"Shallow copy",id:"shallow-copy",level:2},{value:"Stamp",id:"stamp",level:2},{value:"Storage attribute",id:"storage-attribute",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"main-concepts-at-a-glance",children:"Main concepts at a glance"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:a(249006).A+"",width:"478",height:"433"})}),"\n",(0,s.jsx)(t.h2,{id:"action",children:"Action"}),"\n",(0,s.jsxs)(t.p,{children:["Every action that can be done on a ",(0,s.jsx)(t.a,{href:"#resource",children:"resource"}),". Available actions are: create, read, update, drop, execute, promote, and describe."]}),"\n",(0,s.jsx)(t.h2,{id:"attribute",children:"Attribute"}),"\n",(0,s.jsxs)(t.p,{children:["An attribute is the smallest storage cell in a relational database (see also ",(0,s.jsx)(t.a,{href:"#relation-attribute",children:"Relation attribute"}),"). Do not confuse dataclass attributes and entity attributes:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"In a dataclass object, each property is a dataclass attribute that maps to a corresponding field in the corresponding table (same name and type)."}),"\n",(0,s.jsx)(t.li,{children:"In an entity object, entity attributes are properties that contain values for the corresponding datastore attributes."}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Attributes"})," and ",(0,s.jsx)(t.em,{children:"properties"}),' are similar concepts. "Attribute" is used to designate dataclass properties that store data, while "property" is more generic and defines a piece of data stored within an object.']}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"attributepath",children:"AttributePath"}),"\n",(0,s.jsxs)(t.p,{children:["An attributePath is the path of an attribute inside a given dataclass or entity. See also ",(0,s.jsx)(t.a,{href:"#propertyPath",children:"PropertyPath"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"class-code",children:"Class code"}),"\n",(0,s.jsx)(t.p,{children:"Code for the user class function(s)."}),"\n",(0,s.jsx)(t.h2,{id:"computed-attribute",children:"Computed attribute"}),"\n",(0,s.jsx)(t.p,{children:'A computed attribute doesn\'t actually store information. Instead, it determines its value based on other values from the same entity or from other entities, attributes or functions. When a computed attribute is referenced, the underlying "computation" is evaluated to determine the value. Computed attributes may even be assigned values where user-defined code determines what to do during the assignment.'}),"\n",(0,s.jsx)(t.h2,{id:"data-model-class",children:"Data model class"}),"\n",(0,s.jsx)(t.p,{children:"Extended class available for a data model object."}),"\n",(0,s.jsx)(t.h2,{id:"data-model-object",children:"Data model object"}),"\n",(0,s.jsx)(t.p,{children:"Database objects available through the ORDA concept, i.e. datastore, dataclasses, entities and entity selections."}),"\n",(0,s.jsx)(t.h2,{id:"data-model-function",children:"Data model function"}),"\n",(0,s.jsx)(t.p,{children:"Function of an ORDA data model class."}),"\n",(0,s.jsx)(t.h2,{id:"dataclass",children:"Dataclass"}),"\n",(0,s.jsx)(t.p,{children:"A dataclass is an object model that describes the data. Tables in the database provided by the datastore are handled through dataclasses. Each table in the database provided by the datastore has a corresponding dataclass with the same name. Each field of the table is an attribute of the dataclass."}),"\n",(0,s.jsx)(t.p,{children:"A dataclass is related to a single datastore."}),"\n",(0,s.jsx)(t.h2,{id:"dataclass-class",children:"DataClass class"}),"\n",(0,s.jsx)(t.p,{children:"Class for specific dataclass objects, in which you can add custom functions."}),"\n",(0,s.jsx)(t.h2,{id:"datastore",children:"Datastore"}),"\n",(0,s.jsxs)(t.p,{children:["A datastore is the interface object provided by ORDA to reference a structure and access its data. The main database, returned by the ",(0,s.jsx)(t.code,{children:"ds"})," command, is available as a datastore (the main datastore)."]}),"\n",(0,s.jsx)(t.p,{children:"A datastore provides:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"a connection to the 4D database"}),"\n",(0,s.jsx)(t.li,{children:"a set of dataclasses to work with the database"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The database can be a 4D local database (the Main datastore), or a 4D Server database exposed as REST resource (a Remote datastore)."}),"\n",(0,s.jsx)(t.p,{children:"A datastore references only a single database. It is, however, possible to open several datastores to access several databases."}),"\n",(0,s.jsx)(t.h2,{id:"datastore-class",children:"DataStore class"}),"\n",(0,s.jsx)(t.p,{children:"Class for datastore objects, in which you can add custom functions."}),"\n",(0,s.jsx)(t.h2,{id:"datastoreimplementation",children:"DataStoreImplementation"}),"\n",(0,s.jsxs)(t.p,{children:["Internal name of the generic DataStore class in the ",(0,s.jsx)(t.code,{children:"4D"})," class store."]}),"\n",(0,s.jsx)(t.h2,{id:"deep-copy",children:"Deep copy"}),"\n",(0,s.jsx)(t.p,{children:"A deep copy duplicates an object and all the references it contains. After a deep copy, a copied collection contains duplicated elements and thus, new references, of all of the orginal elements. See also Shallow copy."}),"\n",(0,s.jsx)(t.h2,{id:"ds",children:"ds"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"ds"})," is the 4D language command that returns a ",(0,s.jsx)(t.a,{href:"/docs/ORDA/dsmapping#datastore",children:"datastore"})," object reference. It matches the datastore available upon the 4D main database."]}),"\n",(0,s.jsx)(t.h2,{id:"entity",children:"Entity"}),"\n",(0,s.jsx)(t.p,{children:"An entity is an object that corresponds to a dataclass model. An entity contains the same attributes as the dataclass."}),"\n",(0,s.jsx)(t.p,{children:"An entity can be seen as an instance of the dataclass, like a record of the table matching the dataclass in its associated datastore. However, an entity also contains related data. The purpose of the entity is to manage data (create, update, delete)."}),"\n",(0,s.jsx)(t.p,{children:"For more information, see Entities."}),"\n",(0,s.jsx)(t.h2,{id:"entity-selection",children:"Entity selection"}),"\n",(0,s.jsx)(t.p,{children:"An entity selection is an object. When querying the datastore, an entity selection is returned. An entity selection is a set of references to entities related to the same dataclass."}),"\n",(0,s.jsx)(t.p,{children:"An entity selection contains:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"a set of 0 to X entity references,"}),"\n",(0,s.jsx)(t.li,{children:"a length property (always),"}),"\n",(0,s.jsx)(t.li,{children:"queryPlan and queryPath properties (if asked while querying)."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"An entity selection can also be empty."}),"\n",(0,s.jsx)(t.h2,{id:"generic-class",children:"Generic class"}),"\n",(0,s.jsxs)(t.p,{children:["Built-in class for ORDA objects such as entities, or dataclasses. Functions and properties of generic classes are automatically available in user extended classes, e.g. ",(0,s.jsx)(t.code,{children:"EmployeeEntity"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"lazy-loading",children:"Lazy loading"}),"\n",(0,s.jsx)(t.p,{children:"Since entities are managed as references, data is loaded only when necessary, i.e. when accessing it in the code or through interface widgets. This optimization principle is called lazy loading."}),"\n",(0,s.jsx)(t.h2,{id:"main-datastore",children:"Main datastore"}),"\n",(0,s.jsx)(t.p,{children:"The Datastore object matching the opened 4D database (standalone or client/server). The main datastore is returned by the ds command."}),"\n",(0,s.jsx)(t.h2,{id:"method",children:"Method"}),"\n",(0,s.jsx)(t.p,{children:"ORDA objects such as datastores, dataclasses, entity selections, and entities, define classes of objects. They provide specific methods to directly interact with them. These methods are also called member functions. Such methods are used by calling them on an instance of the object."}),"\n",(0,s.jsxs)(t.p,{children:["For example, the ",(0,s.jsx)(t.code,{children:"query()"})," method is a dataclass member function. If you have stored a dataclass object in the ",(0,s.jsx)(t.code,{children:"$myClass"})," variable, you can write:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-code4d",children:'$myClass.query("name = smith")\n'})}),"\n",(0,s.jsx)(t.h2,{id:"mixed-data-type",children:"Mixed data type"}),"\n",(0,s.jsx)(t.p,{children:'In this documentation, "Mixed" data type is used to designate the various type of values that can be stored within dataclass attributes. It includes:'}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"number"}),"\n",(0,s.jsx)(t.li,{children:"text"}),"\n",(0,s.jsx)(t.li,{children:"null"}),"\n",(0,s.jsx)(t.li,{children:"boolean"}),"\n",(0,s.jsx)(t.li,{children:"date"}),"\n",(0,s.jsx)(t.li,{children:"object"}),"\n",(0,s.jsx)(t.li,{children:"collection"}),"\n",(0,s.jsx)(t.li,{children:"picture(*)"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"(*) picture type is not supported by statistical methods such as"})," ",(0,s.jsx)(t.code,{children:"entitySelection.max( )"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"optimistic-lock",children:"Optimistic Lock"}),"\n",(0,s.jsx)(t.p,{children:'In "optimistic lock" mode, entities are not locked explicitly before updating them. Each entity has an internal stamp that is automatically incremented each time the entity is saved on disk. The entity.save( ) or entity.drop( ) methods will return an error if the stamp of the loaded entity (in memory) and the stamp of the entity on disk do not match, or if the entity has been dropped. Optimistic locking is only available in ORDA implementation. See also "Pessimistic lock".'}),"\n",(0,s.jsx)(t.h2,{id:"pessimistic-lock",children:"Pessimistic Lock"}),"\n",(0,s.jsx)(t.p,{children:'A "pessimistic lock" means that an entity is locked prior to its being accessed, using the entity.lock( ) method. Other processes can neither update nor drop the entity until it is unlocked. The classic 4D language only allows pessimistic locks. See "Optimistic lock".'}),"\n",(0,s.jsx)(t.h2,{id:"privilege",children:"Privilege"}),"\n",(0,s.jsxs)(t.p,{children:["The ability to run one or more ",(0,s.jsx)(t.a,{href:"#actions",children:"actions"})," on ",(0,s.jsx)(t.a,{href:"#resource",children:"resources"}),". Several privileges can be gathered in a ",(0,s.jsx)(t.a,{href:"#role",children:"role"})," according to the business logic."]}),"\n",(0,s.jsx)(t.h2,{id:"property",children:"Property"}),"\n",(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"#attribute",children:"Attribute"}),"."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:'Attributes and properties are similar concepts. "Attribute" is used to designate dataclass properties that store data, while "property" is more generic and defines a piece of data stored within an object.'}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"propertypath",children:"PropertyPath"}),"\n",(0,s.jsx)(t.p,{children:'A propertyPath is the path to a property in a given object. If the property is nested in several levels, each level separated is by a dot (".").'}),"\n",(0,s.jsx)(t.h2,{id:"regular-class",children:"Regular class"}),"\n",(0,s.jsx)(t.p,{children:"User class not related to an ORDA object."}),"\n",(0,s.jsx)(t.h2,{id:"related-dataclass",children:"Related dataclass"}),"\n",(0,s.jsx)(t.p,{children:"These are dataclasses linked by relation attributes."}),"\n",(0,s.jsx)(t.h2,{id:"relation-attribute",children:"Relation attribute"}),"\n",(0,s.jsx)(t.p,{children:"Relation attributes are used to conceptualize relations between dataclasses (many-to-one and one-to-many)."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Many-to-one relation (dataclassA references an occurrence of dataclassB): a relation attribute is available in dataclassA and references one instance of dataclassB."}),"\n",(0,s.jsx)(t.li,{children:"One-to-many relation (an occurence of dataclassB references several occurrences of dataclassA): a relation attribute is available in dataclassB and references several instances of dataclassA."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"A dataclass can have recursive relation attributes."}),"\n",(0,s.jsx)(t.p,{children:"In an entity, the value of a relation attribute can be an entity or an entity selection."}),"\n",(0,s.jsx)(t.h2,{id:"related-entities",children:"Related entities"}),"\n",(0,s.jsx)(t.p,{children:"A related entity can be seen as the instance of a relation attribute in a dataclass."}),"\n",(0,s.jsx)(t.p,{children:"Entity selections may refer to related entities according to the relation attributes defined in the corresponding dataclasses."}),"\n",(0,s.jsx)(t.h2,{id:"remote-datastore",children:"Remote datastore"}),"\n",(0,s.jsx)(t.p,{children:"A 4D database opened on a 4D or 4D Server (available through HTTP) and exposed as a REST resource. This database can be referenced locally as a Datastore from other workstations, where it is assigned a locaID. The remote datastore can be used through ORDA concepts (datastore, dataclass, entity selection...). This use is submitted to a licencing system."}),"\n",(0,s.jsx)(t.h2,{id:"resource",children:"Resource"}),"\n",(0,s.jsxs)(t.p,{children:["An ORDA element on which any ",(0,s.jsx)(t.a,{href:"#action",children:"action"})," can be allowed or not according to a ",(0,s.jsx)(t.a,{href:"#privilege",children:"privilege"}),". Available resources are: the datastore, a dataclass, a dataclass attribute, an ORDA Data model function, or a project method."]}),"\n",(0,s.jsx)(t.h2,{id:"role",children:"Role"}),"\n",(0,s.jsxs)(t.p,{children:["A role is a published ",(0,s.jsx)(t.a,{href:"#privilege",children:"privilege"})," intended to be used by an administrator. It can contain one or more privileges."]}),"\n",(0,s.jsx)(t.h2,{id:"session",children:"Session"}),"\n",(0,s.jsx)(t.p,{children:"When the 4D application connects to a Remote datastore, a session is created on the 4D Server (HTTP). A session cookie is generated and associated to the local datastore id."}),"\n",(0,s.jsx)(t.p,{children:"Each time a new session is opened, a license is used. Each time a session is closed, the license is freed."}),"\n",(0,s.jsx)(t.p,{children:"Inactive sessions are automatically closed after a timeout. The default timeout is 48 hours, it can be set by the developer (it must be >= 60 minutes)."}),"\n",(0,s.jsx)(t.h2,{id:"shallow-copy",children:"Shallow copy"}),"\n",(0,s.jsx)(t.p,{children:"A shallow copy only duplicates the structure of elements, and keeps the same internal references. After a shallow copy, two collections will both share the individual elements. See also Deep copy."}),"\n",(0,s.jsx)(t.h2,{id:"stamp",children:"Stamp"}),"\n",(0,s.jsx)(t.p,{children:'Used in "optimistic" locking technology. All entities have an internal counter, the stamp, which is incremented each time the entity is saved. By automatically comparing stamps between an entity being saved and its version stored on disk, 4D can prevent concurrent modifications on the same entities.'}),"\n",(0,s.jsx)(t.h2,{id:"storage-attribute",children:"Storage attribute"}),"\n",(0,s.jsx)(t.p,{children:"A storage attribute (sometimes referred to as a scalar attribute) is the most basic type of attribute in a datastore class and most directly corresponds to a field in a relational database. A storage attribute holds a single value for each entity in the class."})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},221020:(e,t,a)=>{var s=a(296540),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,a){var s,i={},d=null,c=null;for(s in void 0!==a&&(d=""+a),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,s)&&!o.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:n,type:e,key:d,ref:c,props:i,_owner:r.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},474848:(e,t,a)=>{e.exports=a(221020)},249006:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/mainConcepts-f749b0303b2e0c0e718d1b7cb8374126.png"},28453:(e,t,a)=>{a.d(t,{R:()=>l,x:()=>r});var s=a(296540);const n={},i=s.createContext(n);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);