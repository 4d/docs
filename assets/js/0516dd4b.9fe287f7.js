"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7845],{276467:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=t(474848),a=t(28453);const r={id:"{dataClass}",title:"{dataClass}"},d=void 0,i={id:"REST/{dataClass}",title:"{dataClass}",description:"Dataclass names can be used directly in the REST requests to work with entities, entity selections, or methods of the dataclass.",source:"@site/versioned_docs/version-18/REST/{dataClass}.md",sourceDirName:"REST",slug:"/REST/{dataClass}",permalink:"/docs/18/REST/{dataClass}",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%7BdataClass%7D.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"{dataClass}",title:"{dataClass}"},sidebar:"docs",previous:{title:"$upload",permalink:"/docs/18/REST/upload"},next:{title:"$asArray",permalink:"/docs/18/REST/asArray"}},l={},c=[{value:"Available syntaxes",id:"available-syntaxes",level:2},{value:"{dataClass}",id:"dataclass",level:2},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"{dataClass}({key})",id:"dataclasskey",level:2},{value:"Description",id:"description-1",level:3},{value:"Example",id:"example-1",level:3},{value:"{dataClass}:{attribute}(value)",id:"dataclassattributevalue",level:2},{value:"Description",id:"description-2",level:3},{value:"Example",id:"example-2",level:3},{value:"{dataClass}/{method} and {dataClass}({key})/{method}",id:"dataclassmethod-and-dataclasskeymethod",level:2},{value:"Description",id:"description-3",level:3},{value:"4D Configuration",id:"4d-configuration",level:3},{value:"Passing Parameters to a Method",id:"passing-parameters-to-a-method",level:3},{value:"Examples",id:"examples",level:3},{value:"Table scope",id:"table-scope",level:4},{value:"Current record scope",id:"current-record-scope",level:4},{value:"Current selection scope",id:"current-selection-scope",level:4}];function o(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Dataclass names can be used directly in the REST requests to work with entities, entity selections, or methods of the dataclass."}),"\n",(0,s.jsx)(n.h2,{id:"available-syntaxes",children:"Available syntaxes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Syntax"}),(0,s.jsx)(n.th,{children:"Example"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#dataClass",children:(0,s.jsx)(n.strong,{children:"{dataClass}"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/Employee"})}),(0,s.jsx)(n.td,{children:"Returns all the data (by default the first 100 entities) for the dataclass"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#dataclasskey",children:(0,s.jsx)(n.strong,{children:"{dataClass}({key})"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/Employee(22)"})}),(0,s.jsx)(n.td,{children:"Returns the data for the specific entity defined by the dataclass's primary key"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#dataclassattributevalue",children:(0,s.jsx)(n.strong,{children:"{dataClass}:{attribute}(value)"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/Employee:firstName(John)"})}),(0,s.jsx)(n.td,{children:"Returns the data for one entity in which the attribute's value is defined"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#dataclassmethod-and-dataclasskeymethod",children:(0,s.jsx)(n.strong,{children:"{dataClass}/{method}"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/Employee/getHighSalaries"})}),(0,s.jsx)(n.td,{children:"Executes a project method and returns an object or a collection (the project method must be exposed)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#dataclassmethod-and-dataclasskeymethod",children:(0,s.jsx)(n.strong,{children:"{dataClass}({key})/{method}"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/Employee(22)/getAge"})}),(0,s.jsx)(n.td,{children:"Returns a value based on an entity method"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"dataclass",children:"{dataClass}"}),"\n",(0,s.jsxs)(n.p,{children:["Returns all the data (by default the first 100 entities) for a specific dataclass (",(0,s.jsx)(n.em,{children:"e.g."}),", ",(0,s.jsx)(n.code,{children:"Company"}),")"]}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["When you call this parameter in your REST request, the first 100 entities are returned unless you have specified a value using ",(0,s.jsx)(n.a,{href:"/docs/18/REST/top_$limit",children:(0,s.jsx)(n.code,{children:"$top/$limit"})}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Here is a description of the data returned:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"__entityModel"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Name of the dataclass."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"__COUNT"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"Number of entities in the dataclass."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"__SENT"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsxs)(n.td,{children:["Number of entities sent by the REST request. This number can be the total number of entities if it is less than the value defined by ",(0,s.jsx)(n.code,{children:"$top/$limit"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"__FIRST"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsxs)(n.td,{children:["Entity number that the selection starts at. Either 0 by default or the value defined by ",(0,s.jsx)(n.code,{children:"$skip"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"__ENTITIES"}),(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsx)(n.td,{children:"This collection of objects contains an object for each entity with all its attributes. All relational attributes are returned as objects with a URI to obtain information regarding the parent."})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Each entity contains the following properties:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"__KEY"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Value of the primary key defined for the dataclass."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"__TIMESTAMP"}),(0,s.jsx)(n.td,{children:"Date"}),(0,s.jsx)(n.td,{children:"Timestamp of the last modification of the entity"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"__STAMP"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsxs)(n.td,{children:["Internal stamp that is needed when you modify any of the values in the entity when using ",(0,s.jsx)(n.code,{children:"$method=update"}),"."]})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["If you want to specify which attributes you want to return, define them using the following syntax ",(0,s.jsx)(n.a,{href:"/docs/18/REST/manData##selecting-attributes-to-get",children:"{attribute1, attribute2, ...}"}),". For example:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/Company/name,address"})}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Return all the data for a specific dataclass."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/Company"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Result"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "__entityModel": "Company",\n    "__GlobalStamp": 51,\n    "__COUNT": 250,\n    "__SENT": 100,\n    "__FIRST": 0,\n    "__ENTITIES": [\n        {\n            "__KEY": "1",\n            "__TIMESTAMP": "2020-04-10T10:44:49.927Z",\n            "__STAMP": 1,\n            "ID": 1,\n            "name": "Adobe",\n            "address": null,\n            "city": "San Jose",\n            "country": "USA",\n            "revenues": 500000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(1)/staff?$expand=staff"\n                }\n            }\n        },\n        {\n            "__KEY": "2",\n            "__TIMESTAMP": "2018-04-25T14:42:18.351Z",\n            "__STAMP": 1,\n            "ID": 2,\n            "name": "Apple",\n            "address": null,\n            "city": "Cupertino",\n            "country": "USA",\n            "revenues": 890000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(2)/staff?$expand=staff"\n                }\n            }\n        },\n        {\n            "__KEY": "3",\n            "__TIMESTAMP": "2018-04-23T09:03:49.021Z",\n            "__STAMP": 2,\n            "ID": 3,\n            "name": "4D",\n            "address": null,\n            "city": "Clichy",\n            "country": "France",\n            "revenues": 700000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(3)/staff?$expand=staff"\n                }\n            }\n        },\n        {\n            "__KEY": "4",\n            "__TIMESTAMP": "2018-03-28T14:38:07.430Z",\n            "__STAMP": 1,\n            "ID": 4,\n            "name": "Microsoft",\n            "address": null,\n            "city": "Seattle",\n            "country": "USA",\n            "revenues": 650000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(4)/staff?$expand=staff"\n                }\n            }\n        }\n.....//more entities here \n    ]\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"dataclasskey",children:"{dataClass}({key})"}),"\n",(0,s.jsxs)(n.p,{children:["Returns the data for the specific entity defined by the dataclass's primary key, ",(0,s.jsx)(n.em,{children:"e.g."}),", ",(0,s.jsx)(n.code,{children:'Company(22) or Company("IT0911AB2200")'})]}),"\n",(0,s.jsx)(n.h3,{id:"description-1",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["By passing the dataclass and a key, you can retrieve all the public information for that entity. The key is the value in the attribute defined as the Primary Key for your dataclass. For more information about defining a primary key, refer to the ",(0,s.jsx)(n.strong,{children:"Modifying the Primary Key"})," section in the ",(0,s.jsx)(n.strong,{children:"Data Model Editor"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For more information about the data returned, refer to ",(0,s.jsx)(n.a,{href:"#datastoreclass",children:"{datastoreClass}"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If you want to specify which attributes you want to return, define them using the following syntax ",(0,s.jsx)(n.a,{href:"/docs/18/REST/manData##selecting-attributes-to-get",children:"{attribute1, attribute2, ...}"}),". For example:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/Company(1)/name,address"})}),"\n",(0,s.jsxs)(n.p,{children:["If you want to expand a relation attribute using ",(0,s.jsx)(n.code,{children:"$expand"}),", you do so by specifying it as shown below:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/Company(1)/name,address,staff?$expand=staff"})}),"\n",(0,s.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"The following request returns all the public data in the Company dataclass whose key is 1."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/Company(1)"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Result"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "__entityModel": "Company",\n    "__KEY": "1",\n    "__TIMESTAMP": "2020-04-10T10:44:49.927Z",\n    "__STAMP": 2,\n    "ID": 1,\n    "name": "Apple",\n    "address": Infinite Loop,\n    "city": "Cupertino",\n    "country": "USA",\n    "url": http://www.apple.com,\n    "revenues": 500000,\n    "staff": {\n        "__deferred": {\n            "uri": "http://127.0.0.1:8081/rest/Company(1)/staff?$expand=staff"\n        }\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"dataclassattributevalue",children:"{dataClass}:{attribute}(value)"}),"\n",(0,s.jsx)(n.p,{children:"Returns the data for one entity in which the attribute's value is defined"}),"\n",(0,s.jsx)(n.h3,{id:"description-2",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["By passing the ",(0,s.jsx)(n.em,{children:"dataClass"})," and an ",(0,s.jsx)(n.em,{children:"attribute"})," along with a value, you can retrieve all the public information for that entity. The value is a unique value for attribute, but is not the primary key."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/Company:companyCode(Acme001)"})}),"\n",(0,s.jsxs)(n.p,{children:["If you want to specify which attributes you want to return, define them using the following syntax ",(0,s.jsx)(n.a,{href:"/docs/18/REST/manData##selecting-attributes-to-get",children:"{attribute1, attribute2, ...}"}),". For example:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/Company:companyCode(Acme001)/name,address"})}),"\n",(0,s.jsxs)(n.p,{children:["If you want to use a relation attribute using ",(0,s.jsx)(n.a,{href:"/docs/18/REST/attributes",children:"$attributes"}),", you do so by specifying it as shown below:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/Company:companyCode(Acme001)?$attributes=name,address,staff.name"})}),"\n",(0,s.jsx)(n.h3,{id:"example-2",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:'The following request returns all the public data of the employee named "Jones".'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/Employee:lastname(Jones)"})}),"\n",(0,s.jsx)(n.h2,{id:"dataclassmethod-and-dataclasskeymethod",children:"{dataClass}/{method} and {dataClass}({key})/{method}"}),"\n",(0,s.jsx)(n.p,{children:"Returns an object or a collection based on a project method."}),"\n",(0,s.jsx)(n.h3,{id:"description-3",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Project methods are called through a dataclass (table) or an entity (record), and must return either an object or a collection."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"POST  /rest/Employee/getHighSalaries"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"POST  /rest/Employee(52)/getFullName"})}),"\n",(0,s.jsx)(n.h3,{id:"4d-configuration",children:"4D Configuration"}),"\n",(0,s.jsx)(n.p,{children:"To be called in a REST request, a method must:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'have been declared as "Available through REST server" in 4D,'}),"\n",(0,s.jsxs)(n.li,{children:["have its master table and scope defined accordingly:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Table"}),": 4D table (i.e. dataclass) on which the method is called. The table must be ",(0,s.jsx)(n.a,{href:"/docs/18/REST/configuration#exposing-tables-and-fields",children:"exposed to REST"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Scope"}),": This setting is useful when the method uses the 4D classic language and thus, needs to have a database context on the server side.\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Table"})," -for methods applied to the whole table (dataclass)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Current record"})," -for methods applied to the current record (entity) using the ",(0,s.jsx)(n.code,{children:"\\{dataClass\\}(key)/{method}"})," syntax."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Current selection"})," -for methods applied to the current selection"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"alt-text",src:t(469758).A+"",width:"552",height:"557"})}),"\n",(0,s.jsx)(n.h3,{id:"passing-parameters-to-a-method",children:"Passing Parameters to a Method"}),"\n",(0,s.jsx)(n.p,{children:"You can also pass parameters to a method in a POST."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"POST  /rest/Employee/addEmployee"})}),"\n",(0,s.jsx)(n.p,{children:"You can POST data in the body part of the request, for example:"}),"\n",(0,s.jsx)(n.p,{children:'["John","Smith"]'}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.h4,{id:"table-scope",children:"Table scope"}),"\n",(0,s.jsxs)(n.p,{children:["Call of a ",(0,s.jsx)(n.code,{children:"getAverage"})," method:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"on [Employee] table"}),"\n",(0,s.jsxs)(n.li,{children:["with ",(0,s.jsx)(n.strong,{children:"Table"})," scope"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' //getAverage  \nALL RECORDS([Employee])\n$0:=New object("ageAverage";Average([Employee]age))\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"POST  /rest/Employee/getAverage"})}),"\n",(0,s.jsx)(n.p,{children:"Result:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "result": {\n        "ageAverage": 44.125\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"current-record-scope",children:"Current record scope"}),"\n",(0,s.jsxs)(n.p,{children:["Call of a ",(0,s.jsx)(n.code,{children:"getFullName"})," method:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"on [Employee] table"}),"\n",(0,s.jsxs)(n.li,{children:["with ",(0,s.jsx)(n.strong,{children:"Current record"})," scope"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' //getFullName  \n$0:=New object("fullName";[Employee]firstname+" "+[Employee]lastname)\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"POST  /rest/Employee(3)/getFullName"})}),"\n",(0,s.jsx)(n.p,{children:"Result:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "result": {\n        "fullName": "John Smith"\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"current-selection-scope",children:"Current selection scope"}),"\n",(0,s.jsxs)(n.p,{children:["Call of a ",(0,s.jsx)(n.code,{children:"updateSalary"})," method:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"on [Employee] table"}),"\n",(0,s.jsxs)(n.li,{children:["with ",(0,s.jsx)(n.strong,{children:"Current selection"})," scope"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' //updateSalary  \nC_REAL($1;$vCount)\nREAD WRITE([Employee])\n$vCount:=0\nFIRST RECORD([Employee])\nWhile (Not(End selection([Employee]))  \n [Employee]salary:=[Employee]salary * $1\n    SAVE RECORD([Employee])\n    $vCount:=$vCount+1\n    NEXT RECORD([Employee])\nEnd while \nUNLOAD RECORD([Employee])\n$0:=New object("updates";$vCount)\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'POST  /rest/Employee/updateSalary/?$filter="salary<1500"'})}),"\n",(0,s.jsx)(n.p,{children:"POST data (in the request body):\n[1.5]"}),"\n",(0,s.jsx)(n.p,{children:"Result:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "result": {\n        "updated": 42\n    }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},469758:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/MethodProp-81c3e8a0e2bb72d44d9ac3e5d10d4a7f.png"},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>i});var s=t(296540);const a={},r=s.createContext(a);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);