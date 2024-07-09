/*! For license information please see 12aac9a3.a21bd6a8.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17024],{375636:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=t(474848),i=t(28453);const a={id:"classFunctions",title:"Calling ORDA class functions"},r=void 0,l={id:"REST/classFunctions",title:"Calling ORDA class functions",description:"You can call data model class functions defined for the ORDA Data Model through your REST requests, so that you can benefit from the exposed API of the targeted 4D application.",source:"@site/versioned_docs/version-20-R4/REST/ClassFunctions.md",sourceDirName:"REST",slug:"/REST/classFunctions",permalink:"/docs/20-R4/REST/classFunctions",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FClassFunctions.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"classFunctions",title:"Calling ORDA class functions"},sidebar:"docs",previous:{title:"Manipulating Data",permalink:"/docs/20-R4/REST/manData"},next:{title:"About REST Requests",permalink:"/docs/20-R4/REST/REST_requests"}},d={},c=[{value:"Function calls",id:"Function-calls",level:2},{value:"Parameters",id:"Parameters",level:2},{value:"Scalar value parameter",id:"Scalar-value-parameter",level:3},{value:"Entity parameter",id:"Entity-parameter",level:3},{value:"Related entity parameter",id:"Related-entity-parameter",level:4},{value:"Entity selection parameter",id:"Entity-selection-parameter",level:3},{value:"Request examples",id:"Request-examples",level:2},{value:"Using a datastore class function",id:"Using-a-datastore-class-function",level:3},{value:"Result",id:"Result",level:4},{value:"Using a dataclass class function",id:"Using-a-dataclass-class-function",level:3},{value:"Result",id:"Result-1",level:4},{value:"Using an entity class function",id:"Using-an-entity-class-function",level:3},{value:"Result",id:"Result-2",level:4},{value:"Using an entitySelection class function",id:"Using-an-entitySelection-class-function",level:3},{value:"Result",id:"Result-3",level:4},{value:"Using an entitySelection class function and an entitySet",id:"Using-an-entitySelection-class-function-and-an-entitySet",level:3},{value:"Result",id:"Result-4",level:4},{value:"Using an entitySelection class function and an orderBy",id:"Using-an-entitySelection-class-function-and-an-orderBy",level:3},{value:"Result",id:"Result-5",level:4},{value:"Using an entity to be created on the server",id:"Using-an-entity-to-be-created-on-the-server",level:3},{value:"Result",id:"Result-6",level:4},{value:"Using an entity to be updated on the server",id:"Using-an-entity-to-be-updated-on-the-server",level:3},{value:"Result",id:"Result-7",level:4},{value:"Creating an entity with a related entity",id:"Creating-an-entity-with-a-related-entity",level:3},{value:"Result",id:"Result-8",level:4},{value:"Updating an entity with a related entity",id:"Updating-an-entity-with-a-related-entity",level:3},{value:"Result",id:"Result-9",level:4},{value:"Receiving an entity selection as parameter",id:"Receiving-an-entity-selection-as-parameter",level:3},{value:"Result",id:"Result-10",level:4},{value:"Using an entity selection updated on the client",id:"Using-an-entity-selection-updated-on-the-client",level:3}];function o(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["You can call ",(0,s.jsx)(n.a,{href:"/docs/20-R4/ORDA/ordaClasses",children:"data model class functions"})," defined for the ORDA Data Model through your REST requests, so that you can benefit from the exposed API of the targeted 4D application."]}),"\n",(0,s.jsxs)(n.p,{children:["Functions are simply called in POST requests on the appropriate ORDA interface, without (). For example, if you have defined a ",(0,s.jsx)(n.code,{children:"getCity()"})," function in the City dataclass class, you could call it using the following request:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"/rest/City/getCity"})}),"\n",(0,s.jsxs)(n.p,{children:["with data in the body of the POST request: ",(0,s.jsx)(n.code,{children:'["Aguada"]'})]}),"\n",(0,s.jsx)(n.p,{children:"In 4D language, this call is equivalent to, :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'$city:=ds.City.getCity("Aguada")\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Only functions with the ",(0,s.jsx)(n.code,{children:"exposed"})," keyword can be directly called from REST requests. See ",(0,s.jsx)(n.a,{href:"/docs/20-R4/ORDA/ordaClasses#exposed-vs-non-exposed-functions",children:"Exposed vs non-exposed functions"})," section."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"Function-calls",children:"Function calls"}),"\n",(0,s.jsxs)(n.p,{children:["Functions must always be called using REST ",(0,s.jsx)(n.strong,{children:"POST"})," requests (a GET request will receive an error)."]}),"\n",(0,s.jsx)(n.p,{children:"Functions are called on the corresponding object on the server datastore."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Class function"}),(0,s.jsx)(n.th,{children:"Syntax"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/20-R4/ORDA/ordaClasses#datastore-class",children:"datastore class"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/rest/$catalog/DataStoreClassFunction"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/20-R4/ORDA/ordaClasses#dataclass-class",children:"dataclass class"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/rest/\\{dataClass\\}/DataClassClassFunction"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/20-R4/ORDA/ordaClasses#entityselection-class",children:"entitySelection class"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/rest/\\{dataClass\\}/EntitySelectionClassFunction"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/rest/\\{dataClass\\}/EntitySelectionClassFunction/$entityset/entitySetNumber"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/rest/\\{dataClass\\}/EntitySelectionClassFunction/$filter"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/rest/\\{dataClass\\}/EntitySelectionClassFunction/$orderby"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/20-R4/ORDA/ordaClasses#entity-class",children:"entity class"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/rest/\\{dataClass\\}(key)/EntityClassFunction/"})})]})]})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"/rest/\\{dataClass\\}/Function"})," can be used to call either a dataclass or an entity selection function (",(0,s.jsx)(n.code,{children:"/rest/\\{dataClass\\}"})," returns all entities of the DataClass as an entity selection).",(0,s.jsx)(n.br,{}),"\nThe function is searched in the entity selection class first. If not found, it is searched in the dataclass. In other words, if a function with the same name is defined in both the DataClass class and the EntitySelection class, the dataclass class function will never be executed."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["All 4D code called from REST requests ",(0,s.jsx)(n.strong,{children:"must be thread-safe"})," if the project runs in compiled mode, because the REST Server always uses preemptive processes in this case (the ",(0,s.jsxs)(n.a,{href:"/docs/20-R4/WebServer/preemptiveWeb#enabling-the-preemptive-mode-for-the-web-server",children:[(0,s.jsx)(n.em,{children:"Use preemptive process"})," setting value"]})," is ignored by the REST Server)."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"Parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:"You can send parameters to functions defined in ORDA user classes. On the server side, they will be received in the class functions in regular $1, $2, etc. parameters."}),"\n",(0,s.jsx)(n.p,{children:"The following rules apply:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Parameters must be passed in the ",(0,s.jsx)(n.strong,{children:"body of the POST request"})]}),"\n",(0,s.jsx)(n.li,{children:"Parameters must be enclosed within a collection (JSON format)"}),"\n",(0,s.jsx)(n.li,{children:"All scalar data types supported in JSON collections can be passed as parameters."}),"\n",(0,s.jsx)(n.li,{children:"Entity and entity selection can be passed as parameters. The JSON object must contain specific attributes used by the REST server to assign data to the corresponding ORDA objects: __DATACLASS, __ENTITY, __ENTITIES, __DATASET."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"#using-an-entity-to-be-created-on-the-server",children:"this example"})," and ",(0,s.jsx)(n.a,{href:"#receiving-an-entity-selection-as-parameter",children:"this example"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"Scalar-value-parameter",children:"Scalar value parameter"}),"\n",(0,s.jsxs)(n.p,{children:["Parameter(s) must simply be enclosed in a collection defined in the body. For example, with a  dataclass function ",(0,s.jsx)(n.code,{children:"getCities()"})," receiving text parameters:\n",(0,s.jsx)(n.code,{children:"/rest/City/getCities"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Parameters in body:"}),' ["Aguada","Paris"]']}),"\n",(0,s.jsx)(n.p,{children:'All JSON data types are supported in parameters, including JSON pointers. Dates can be passed as strings in ISO 8601 date format (e.g. "2020-08-22T22:00:000Z").'}),"\n",(0,s.jsx)(n.h3,{id:"Entity-parameter",children:"Entity parameter"}),"\n",(0,s.jsxs)(n.p,{children:["Entities passed in parameters are referenced on the server through their key (",(0,s.jsx)(n.em,{children:"i.e."})," __KEY property). If the key parameter is omitted in a request, a new entity is loaded in memory  the server.\nYou can also pass values for any attributes of the entity. These values will automatically be used for the entity handled on the server."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"If the request sends modified attribute values for an existing entity on the server, the called ORDA data model function will be automatically executed on the server with modified values. This feature allows you, for example, to check the result of an operation on an entity, after applying all business rules, from the client application. You can then decide to save or not the entity on the server."}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Properties"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Attributes of the entity"}),(0,s.jsx)(n.td,{children:"mixed"}),(0,s.jsx)(n.td,{children:"Optional - Values to modify"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"__DATACLASS"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Mandatory - Indicates the Dataclass of the entity"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"__ENTITY"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"Mandatory - True to indicate to the server that the parameter is an entity"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"__KEY"}),(0,s.jsx)(n.td,{children:"mixed (same type as the primary key)"}),(0,s.jsx)(n.td,{children:"Optional - Primary key of the entity"})]})]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If __KEY is not provided, a new entity is created on the server with the given attributes."}),"\n",(0,s.jsx)(n.li,{children:"If __KEY is provided, the entity corresponding to __KEY is loaded on the server with the given attributes"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["See examples for ",(0,s.jsx)(n.a,{href:"#creating-an-entity",children:"creating"})," or ",(0,s.jsx)(n.a,{href:"#updating-an-entity",children:"updating"})," entities."]}),"\n",(0,s.jsx)(n.h4,{id:"Related-entity-parameter",children:"Related entity parameter"}),"\n",(0,s.jsxs)(n.p,{children:["Same properties as for an ",(0,s.jsx)(n.a,{href:"#entity-parameter",children:"entity parameter"}),". In addition, the related entity must exist and is referenced by __KEY containing its primary key."]}),"\n",(0,s.jsxs)(n.p,{children:["See examples for ",(0,s.jsx)(n.a,{href:"#creating-an-entity-with-a-related-entity",children:"creating"})," or ",(0,s.jsx)(n.a,{href:"#updating-an-entity-with-a-related-entity",children:"updating"})," entities with related entities."]}),"\n",(0,s.jsx)(n.h3,{id:"Entity-selection-parameter",children:"Entity selection parameter"}),"\n",(0,s.jsxs)(n.p,{children:["The entity selection must have been defined beforehand using ",(0,s.jsx)(n.a,{href:"/docs/20-R4/REST/method#methodentityset",children:"$method=entityset"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"If the request sends a modified entity selection to the server, the called ORDA data model function will be automatically executed on the server with the modified entity selection."}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Properties"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Attributes of the entity"}),(0,s.jsx)(n.td,{children:"mixed"}),(0,s.jsx)(n.td,{children:"Optional - Values to modify"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"__DATASET"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Mandatory - entitySetID (UUID) of the entity selection"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"__ENTITIES"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"Mandatory - True to indicate to the server that the parameter is an entity selection"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["See example for ",(0,s.jsx)(n.a,{href:"#receiving-an-entity-selection-as-parameter",children:"receiving an entity selection"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"Request-examples",children:"Request examples"}),"\n",(0,s.jsx)(n.p,{children:"This database is exposed as a remote datastore on localhost (port 8111):"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"alt-text",src:t(639263).A+"",width:"882",height:"599"})}),"\n",(0,s.jsx)(n.h3,{id:"Using-a-datastore-class-function",children:"Using a datastore class function"}),"\n",(0,s.jsxs)(n.p,{children:["The US_Cities ",(0,s.jsx)(n.code,{children:"DataStore"})," class provides an API:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'// DataStore class\n\nClass extends DataStoreImplementation\n\nexposed Function getName()\n    $0:="US cities and zip codes manager"\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can then run this request:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"POST"})," ",(0,s.jsx)(n.code,{children:"127.0.0.1:8111/rest/$catalog/getName"})]}),"\n",(0,s.jsx)(n.h4,{id:"Result",children:"Result"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n"result": "US cities and zip codes manager"\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"Using-a-dataclass-class-function",children:"Using a dataclass class function"}),"\n",(0,s.jsxs)(n.p,{children:["The Dataclass class ",(0,s.jsx)(n.code,{children:"City"})," provides an API that returns a city entity from a name passed in parameter:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'// City class\n\nClass extends DataClass\n\nexposed Function getCity()\n\tvar $0 : cs.CityEntity\n\tvar $1,$nameParam : text\n\t$nameParam:=$1\n\t$0:=This.query("name = :1";$nameParam).first()\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can then run this request:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"POST"})," ",(0,s.jsx)(n.code,{children:"127.0.0.1:8111/rest/City/getCity"})]}),"\n",(0,s.jsx)(n.p,{children:'Body of the request: ["Aguada"]'}),"\n",(0,s.jsx)(n.h4,{id:"Result-1",children:"Result"}),"\n",(0,s.jsx)(n.p,{children:"The result is an entity:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "__entityModel": "City",\n    "__DATACLASS": "City",\n    "__KEY": "1",\n    "__TIMESTAMP": "2020-03-09T08:03:19.923Z",\n    "__STAMP": 1,\n    "ID": 1,\n    "name": "Aguada",\n    "countyFIPS": 72003,\n    "county": {\n        "__deferred": {\n            "uri": "/rest/County(72003)",\n            "__KEY": "72003"\n        }\n    },\n    "zips": {\n        "__deferred": {\n            "uri": "/rest/City(1)/zips?$expand=zips"\n        }\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"Using-an-entity-class-function",children:"Using an entity class function"}),"\n",(0,s.jsxs)(n.p,{children:["The Entity class ",(0,s.jsx)(n.code,{children:"CityEntity"})," provides an API:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'// CityEntity class\n\nClass extends Entity\n\nexposed Function getPopulation()\n    $0:=This.zips.sum("population")\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can then run this request:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"POST"})," ",(0,s.jsx)(n.code,{children:"127.0.0.1:8111/rest/City(2)/getPopulation"})]}),"\n",(0,s.jsx)(n.h4,{id:"Result-2",children:"Result"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "result": 48814\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"Using-an-entitySelection-class-function",children:"Using an entitySelection class function"}),"\n",(0,s.jsxs)(n.p,{children:["The EntitySelection class ",(0,s.jsx)(n.code,{children:"CitySelection"})," provides an API:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'// CitySelection class\n\nClass extends EntitySelection\n\nexposed Function getPopulation()\n    $0:=This.zips.sum("population")\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can then run this request:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"POST"})," ",(0,s.jsx)(n.code,{children:'127.0.0.1:8111/rest/City/getPopulation/?$filter="ID<3"'})]}),"\n",(0,s.jsx)(n.h4,{id:"Result-3",children:"Result"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "result": 87256\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"Using-an-entitySelection-class-function-and-an-entitySet",children:"Using an entitySelection class function and an entitySet"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"StudentsSelection"})," class has a ",(0,s.jsx)(n.code,{children:"getAgeAverage"})," function:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"// StudentsSelection Class\n\nClass extends EntitySelection\n\nexposed Function getAgeAverage\n\tC_LONGINT($sum;$0)\n\tC_OBJECT($s)\n\n\t$sum:=0\n\tFor each ($s;This)\n\t    $sum:=$sum+$s.age()\n\tEnd for each\n\t$0:=$sum/This.length\n"})}),"\n",(0,s.jsx)(n.p,{children:"Once you have created an entityset, you can run this request:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"POST"})," ",(0,s.jsx)(n.code,{children:"127.0.0.1:8044/rest/Students/getAgeAverage/$entityset/17E83633FFB54ECDBF947E5C620BB532"})]}),"\n",(0,s.jsx)(n.h4,{id:"Result-4",children:"Result"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "result": 34\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"Using-an-entitySelection-class-function-and-an-orderBy",children:"Using an entitySelection class function and an orderBy"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"StudentsSelection"})," class has a ",(0,s.jsx)(n.code,{children:"getLastSummary"})," function:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'// StudentsSelection Class\n\n\nClass extends EntitySelection\n\nexposed Function getLastSummary\n\tC_TEXT($0)\n\tC_OBJECT($last)\n\n\t$last:=This.last()\n\t$0:=$last.firstname+" - "+$last.lastname+" is ... "+String($last.age())\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can then run this request:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"POST"})," ",(0,s.jsx)(n.code,{children:'127.0.0.1:8044/rest/Students/getLastSummary/$entityset/?$filter="lastname=b@"&$orderby="lastname"'})]}),"\n",(0,s.jsx)(n.h4,{id:"Result-5",children:"Result"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "result": "Wilbert - Bull is ... 21"\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"Using-an-entity-to-be-created-on-the-server",children:"Using an entity to be created on the server"}),"\n",(0,s.jsxs)(n.p,{children:["The Dataclass class ",(0,s.jsx)(n.code,{children:"Students"})," has the function ",(0,s.jsx)(n.code,{children:"pushData()"})," receiving an entity containing data from the client. The ",(0,s.jsx)(n.code,{children:"checkData()"})," method runs some controls. If they are OK, the entity is saved and returned."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"// Students Class\n\nClass extends DataClass\n\nexposed Function pushData\n\tvar $1, $entity, $status, $0 : Object\n\n\t$entity:=$1\n\n\t$status:=checkData($entity) // $status is an object with a success boolean property\n\n\t$0:=$status\n\n\tIf ($status.success)\n\t    $status:=$entity.save()\n \t   If ($status.success)\n \t       $0:=$entity\n  \t  End if\n\tEnd if\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"You run this request:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"POST"})," ",(0,s.jsx)(n.code,{children:"http://127.0.0.1:8044/rest/Students/pushData"})]}),"\n",(0,s.jsx)(n.p,{children:"Body of the request:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'[{\n"__DATACLASS":"Students",\n"__ENTITY":true,\n"firstname":"Ann",\n"lastname":"Brown"\n}]\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Since no ",(0,s.jsx)(n.code,{children:"__KEY"})," is given, a new Students entity is loaded on the server ",(0,s.jsx)(n.strong,{children:"with the attributes received from the client"}),". Because the ",(0,s.jsx)(n.code,{children:"pushData()"})," function runs a ",(0,s.jsx)(n.code,{children:"save()"})," action, the new entity is created."]}),"\n",(0,s.jsx)(n.h4,{id:"Result-6",children:"Result"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "__entityModel": "Students",\n    "__DATACLASS": "Students",\n    "__KEY": "55",\n    "__TIMESTAMP": "2020-06-16T10:54:41.805Z",\n    "__STAMP": 1,\n    "ID": 55,\n    "firstname": "Ann",\n    "lastname": "BROWN",\n    "schoolID": null,\n    "school": null\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"Using-an-entity-to-be-updated-on-the-server",children:"Using an entity to be updated on the server"}),"\n",(0,s.jsx)(n.p,{children:"Same as above but with a __KEY attribute"}),"\n",(0,s.jsx)(n.p,{children:"You run this request:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"POST:"}),(0,s.jsx)(n.code,{children:"http://127.0.0.1:8044/rest/Students/pushData"})]}),"\n",(0,s.jsx)(n.p,{children:"Body of the request:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'[{\n"__DATACLASS":"Students",\n"__ENTITY":true,\n"lastname":"Brownie",\n"__KEY":55\n}]\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Since ",(0,s.jsx)(n.code,{children:"__KEY"})," is given, the Students entity with primary key 55 is loaded ",(0,s.jsx)(n.strong,{children:"with the lastname value received from the client"}),". Because the function runs a ",(0,s.jsx)(n.code,{children:"save()"})," action, the entity is updated."]}),"\n",(0,s.jsx)(n.h4,{id:"Result-7",children:"Result"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "__entityModel": "Students",\n    "__DATACLASS": "Students",\n    "__KEY": "55",\n    "__TIMESTAMP": "2020-06-16T11:10:21.679Z",\n    "__STAMP": 3,\n    "ID": 55,\n    "firstname": "Ann",\n    "lastname": "BROWNIE",\n    "schoolID": null,\n    "school": null\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"Creating-an-entity-with-a-related-entity",children:"Creating an entity with a related entity"}),"\n",(0,s.jsx)(n.p,{children:"In this example, we create a new Students entity with the Schools entity having primary key 2."}),"\n",(0,s.jsx)(n.p,{children:"You run this request:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"POST:"}),(0,s.jsx)(n.code,{children:"http://127.0.0.1:8044/rest/Students/pushData"})]}),"\n",(0,s.jsx)(n.p,{children:"Body of the request:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'[{\n"__DATACLASS":"Students",\n"__ENTITY":true,\n"firstname":"John",\n"lastname":"Smith",\n"school":{"__KEY":2}\n}]\n'})}),"\n",(0,s.jsx)(n.h4,{id:"Result-8",children:"Result"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "__entityModel": "Students",\n    "__DATACLASS": "Students",\n    "__KEY": "56",\n    "__TIMESTAMP": "2020-06-16T11:16:47.601Z",\n    "__STAMP": 1,\n    "ID": 56,\n    "firstname": "John",\n    "lastname": "SMITH",\n    "schoolID": 2,\n       "school": {\n        "__deferred": {\n            "uri": "/rest/Schools(2)",\n            "__KEY": "2"\n        }\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"Updating-an-entity-with-a-related-entity",children:"Updating an entity with a related entity"}),"\n",(0,s.jsxs)(n.p,{children:["In this example, we associate an existing school to a Students entity. The ",(0,s.jsx)(n.code,{children:"StudentsEntity"})," class has an API:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"// StudentsEntity class\n\nClass extends Entity\n\nexposed Function putToSchool()\n\tvar $1, $school , $0, $status : Object\n\n\t\t//$1 is a Schools entity\n\t$school:=$1\n\t\t//Associate the related entity school to the current Students entity\n\tThis.school:=$school\n\n\t$status:=This.save()\n\n\t$0:=$status\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You run this request, called on a Students entity :\n",(0,s.jsx)(n.strong,{children:"POST"})," ",(0,s.jsx)(n.code,{children:"http://127.0.0.1:8044/rest/Students(1)/putToSchool"}),"\nBody of the request:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'[{\n"__DATACLASS":"Schools",\n"__ENTITY":true,\n"__KEY":2\n}]\n'})}),"\n",(0,s.jsx)(n.h4,{id:"Result-9",children:"Result"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "result": {\n        "success": true\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"Receiving-an-entity-selection-as-parameter",children:"Receiving an entity selection as parameter"}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.code,{children:"Students"})," Dataclass class, the ",(0,s.jsx)(n.code,{children:"setFinalExam()"})," function updates a received entity selection ($1). It actually updates the ",(0,s.jsx)(n.em,{children:"finalExam"})," attribute with the received value ($2). It returns the primary keys of the updated entities."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"// Students class\n\nClass extends DataClass\n\nexposed Function setFinalExam()\n\n    var $1, $es, $student, $status : Object\n    var $2, $examResult : Text\n\n    var $keys, $0 : Collection\n\n      //Entity selection\n    $es:=$1\n\n    $examResult:=$2\n\n    $keys:=New collection()\n\n      //Loop on the entity selection\n    For each ($student;$es)\n        $student.finalExam:=$examResult\n        $status:=$student.save()\n        If ($status.success)\n            $keys.push($student.ID)\n        End if\n    End for each\n\n    $0:=$keys\n"})}),"\n",(0,s.jsx)(n.p,{children:"An entity set is first created with this request:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'http://127.0.0.1:8044/rest/Students/?$filter="ID<3"&$method=entityset'})}),"\n",(0,s.jsx)(n.p,{children:"Then you can run this request:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"POST"})," ",(0,s.jsx)(n.code,{children:"http://127.0.0.1:8044/rest/Students/setFinalExam"})]}),"\n",(0,s.jsx)(n.p,{children:"Body of the request:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'[\n{\n"__ENTITIES":true,\n"__DATASET":"9B9C053A111E4A288E9C1E48965FE671"\n},\n"Passed"\n]\n\n'})}),"\n",(0,s.jsx)(n.h4,{id:"Result-10",children:"Result"}),"\n",(0,s.jsx)(n.p,{children:"The entities with primary keys 1 and 2 have been updated."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "result": [\n        1,\n        2\n    ]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"Using-an-entity-selection-updated-on-the-client",children:"Using an entity selection updated on the client"}),"\n",(0,s.jsxs)(n.p,{children:["Using the ",(0,s.jsx)(n.code,{children:"getAgeAverage()"})," function ",(0,s.jsx)(n.a,{href:"#using-an-entityselection-class-function-and-an-entityset",children:"defined above"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $remoteDS, $newStudent, $students : Object\nvar $ageAverage : Integer\n\n$remoteDS:=Open datastore(New object("hostname";"127.0.0.1:8044");"students")\n\n// $newStudent is a student entity to procees\n$newStudent:=...\n$students:=$remoteDS.Students.query("school.name = :1";"Math school")\n// We add an entity to the $students entity selection on the client\n$students.add($newStudent)\n\n// We call a function on the StudentsSelection class returning the age average of the students in the entity selection\n// The function is executed on the server on the updated $students entity selection which included the student added from the client\n$ageAverage:=$students.getAgeAverage()\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},221020:(e,n,t)=>{var s=t(296540),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var s,a={},c=null,o=null;for(s in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(o=n.ref),n)r.call(n,s)&&!d.hasOwnProperty(s)&&(a[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===a[s]&&(a[s]=n[s]);return{$$typeof:i,type:e,key:c,ref:o,props:a,_owner:l.current}}n.Fragment=a,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},639263:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/ordastructure-64d64d76ce9764a2365629e381bde282.png"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(296540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);