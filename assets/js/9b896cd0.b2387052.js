"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57582],{278139:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=t(474848),a=t(28453);const i={id:"catalog",title:"$catalog"},l=void 0,r={id:"REST/catalog",title:"$catalog",description:"The catalog describes all the dataclasses, attributes, and interprocess (shared) singletons available in the project.",source:"@site/versioned_docs/version-20-R7/REST/$catalog.md",sourceDirName:"REST",slug:"/REST/catalog",permalink:"/docs/REST/catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24catalog.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"catalog",title:"$catalog"},sidebar:"docs",previous:{title:"API (general)",permalink:"/docs/category/api-general"},next:{title:"$info",permalink:"/docs/REST/info"}},d={},c=[{value:"Available syntaxes",id:"available-syntaxes",level:2},{value:"$catalog",id:"catalog",level:2},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"$catalog/$all",id:"catalogall",level:2},{value:"Description",id:"description-1",level:3},{value:"Example",id:"example-1",level:3},{value:"$catalog/{dataClass}",id:"catalogdataclass",level:2},{value:"Description",id:"description-2",level:3},{value:"DataClass",id:"dataclass",level:3},{value:"Attribute(s)",id:"attributes",level:3},{value:"Primary Key",id:"primary-key",level:3},{value:"Example",id:"example-2",level:3},{value:"singletons",id:"singletons",level:2},{value:"Example",id:"example-3",level:3}];function o(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["The catalog describes all the dataclasses, attributes, and ",(0,s.jsx)(e.a,{href:"/docs/Concepts/classes#singleton-classes",children:"interprocess (shared) singletons"})," available in the project."]}),"\n",(0,s.jsx)(e.h2,{id:"available-syntaxes",children:"Available syntaxes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Syntax"}),(0,s.jsx)(e.th,{children:"Example"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"#catalog",children:(0,s.jsx)(e.strong,{children:"$catalog"})})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"/$catalog"})}),(0,s.jsxs)(e.td,{children:["Returns ",(0,s.jsx)(e.a,{href:"#singletons",children:"shared singletons"})," (if any) and a list of the dataclasses in your project along with two URIs"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"#catalogall",children:(0,s.jsx)(e.strong,{children:"$catalog/$all"})})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"/$catalog/$all"})}),(0,s.jsxs)(e.td,{children:["Returns ",(0,s.jsx)(e.a,{href:"#singletons",children:"shared singletons"})," (if any) and information about all of your project's dataclasses and their attributes"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"#catalogdataclass",children:(0,s.jsx)(e.strong,{children:"$catalog/{dataClass}"})})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"/$catalog/Employee"})}),(0,s.jsx)(e.td,{children:"Returns information about a dataclass and its attributes"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"/docs/REST/classFunctions#function-calls",children:(0,s.jsx)(e.strong,{children:"$catalog/DataStoreClassFunction"})})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"/$catalog/authentify"})}),(0,s.jsx)(e.td,{children:"Executes the datastore class function if it exists"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"catalog",children:"$catalog"}),"\n",(0,s.jsxs)(e.p,{children:["Returns ",(0,s.jsx)(e.a,{href:"#singletons",children:"shared singletons"})," (if any) and a list of the dataclasses in your project along with two URIs: one to access the information about its structure and one to retrieve the data in the dataclass"]}),"\n",(0,s.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(e.p,{children:["When you call ",(0,s.jsx)(e.code,{children:"$catalog"}),", a list of the dataclasses is returned along with two URIs for each dataclass in your project's datastore."]}),"\n",(0,s.jsxs)(e.p,{children:["Only the exposed dataclasses are shown in this list for your project's datastore. For more information, please refer to ",(0,s.jsx)(e.a,{href:"/docs/REST/configuration#exposing-tables-and-fields",children:(0,s.jsx)(e.strong,{children:"Exposing tables and fields"})})," section."]}),"\n",(0,s.jsx)(e.p,{children:"Here is a description of the properties returned for each dataclass in your project's datastore:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Property"}),(0,s.jsx)(e.th,{children:"Type"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"name"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Name of the dataclass."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"uri"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"A URI allowing you to obtain information about the dataclass and its attributes."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"dataURI"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"A URI that allows you to view the data in the dataclass."})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"GET  /rest/$catalog"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Result"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n    dataClass: [\n        {\n            name: "Company",\n            uri: "http://127.0.0.1:8081/rest/$catalog/Company",\n            dataURI: "http://127.0.0.1:8081/rest/Company"\n        },\n        {\n            name: "Employee",\n            uri: "http://127.0.0.1:8081/rest/$catalog/Employee",\n            dataURI: "http://127.0.0.1:8081/rest/Employee"\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"catalogall",children:"$catalog/$all"}),"\n",(0,s.jsxs)(e.p,{children:["Returns ",(0,s.jsx)(e.a,{href:"#singletons",children:"shared singletons"})," (if any) and information about all of your project's dataclasses and their attributes"]}),"\n",(0,s.jsx)(e.h3,{id:"description-1",children:"Description"}),"\n",(0,s.jsxs)(e.p,{children:["Calling ",(0,s.jsx)(e.code,{children:"$catalog/$all"})," allows you to receive detailed information about the attributes in each of the dataclasses in your project's active model."]}),"\n",(0,s.jsxs)(e.p,{children:["For more information about what is returned for each dataclass and its attributes, use ",(0,s.jsx)(e.a,{href:"#catalogdataclass",children:(0,s.jsx)(e.code,{children:"$catalog/\\{dataClass\\}"})}),"."]}),"\n",(0,s.jsx)(e.h3,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"GET  /rest/$catalog/$all"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Result"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n\n    "dataClasses": [\n        {\n            "name": "Company",\n            "className": "Company",\n            "collectionName": "CompanySelection",\n            "tableNumber": 2,\n            "scope": "public",\n            "dataURI": "/rest/Company",\n            "attributes": [\n                {\n                    "name": "ID",\n                    "kind": "storage",\n                    "fieldPos": 1,\n                    "scope": "public",\n                    "indexed": true,\n                    "type": "long",\n                    "identifying": true\n                },\n                {\n                    "name": "name",\n                    "kind": "storage",\n                    "fieldPos": 2,\n                    "scope": "public",\n                    "type": "string"\n                },\n                {\n                    "name": "revenues",\n                    "kind": "storage",\n                    "fieldPos": 3,\n                    "scope": "public",\n                    "type": "number"\n                },\n                {\n                    "name": "staff",\n                    "kind": "relatedEntities",\n                    "fieldPos": 4,\n                    "scope": "public",\n                    "type": "EmployeeSelection",\n                    "reversePath": true,\n                    "path": "employer"\n                },\n                {\n                    "name": "url",\n                    "kind": "storage",\n                    "scope": "public",\n                    "type": "string"\n                }\n            ],\n            "key": [\n                {\n                    "name": "ID"\n                }\n            ]\n        },\n        {\n            "name": "Employee",\n            "className": "Employee",\n            "collectionName": "EmployeeSelection",\n            "tableNumber": 1,\n            "scope": "public",\n            "dataURI": "/rest/Employee",\n            "attributes": [\n                {\n                    "name": "ID",\n                    "kind": "storage",\n                    "scope": "public",\n                    "indexed": true,\n                    "type": "long",\n                    "identifying": true\n                },\n                {\n                    "name": "firstname",\n                    "kind": "storage",\n                    "scope": "public",\n                    "type": "string"\n                },\n                {\n                    "name": "lastname",\n                    "kind": "storage",\n                    "scope": "public",\n                    "type": "string"\n                },\n                {\n                    "name": "employer",\n                    "kind": "relatedEntity",\n                    "scope": "public",\n                    "type": "Company",\n                    "path": "Company"\n                }\n            ],\n            "key": [\n                {\n                    "name": "ID"\n                }\n            ]\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"catalogdataclass",children:"$catalog/{dataClass}"}),"\n",(0,s.jsx)(e.p,{children:"Returns information about a dataclass and its attributes"}),"\n",(0,s.jsx)(e.h3,{id:"description-2",children:"Description"}),"\n",(0,s.jsxs)(e.p,{children:["Calling ",(0,s.jsx)(e.code,{children:"$catalog/\\{dataClass\\}"})," for a specific dataclass will return the following information about the dataclass and the attributes it contains. If you want to retrieve this information for all the dataclasses in your project's datastore, use ",(0,s.jsx)(e.a,{href:"#catalogall",children:(0,s.jsx)(e.code,{children:"$catalog/$all"})}),"."]}),"\n",(0,s.jsx)(e.p,{children:"The information you retrieve concerns the following:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Dataclass"}),"\n",(0,s.jsx)(e.li,{children:"Attribute(s)"}),"\n",(0,s.jsx)(e.li,{children:"Method(s) if any"}),"\n",(0,s.jsx)(e.li,{children:"Primary key"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"dataclass",children:"DataClass"}),"\n",(0,s.jsx)(e.p,{children:"The following properties are returned for an exposed dataclass:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Property"}),(0,s.jsx)(e.th,{children:"Type"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"name"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Name of the dataclass"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"collectionName"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Name of an entity selection on the dataclass"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"tableNumber"}),(0,s.jsx)(e.td,{children:"Number"}),(0,s.jsx)(e.td,{children:"Table number in the 4D database"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"scope"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsxs)(e.td,{children:["Scope for the dataclass (note that only dataclasses whose ",(0,s.jsx)(e.strong,{children:"Scope"})," is public are displayed)"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"dataURI"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"A URI to the data in the dataclass"})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"attributes",children:"Attribute(s)"}),"\n",(0,s.jsx)(e.p,{children:"Here are the properties for each exposed attribute that are returned:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Property"}),(0,s.jsx)(e.th,{children:"Type"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"name"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Attribute name."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"kind"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Attribute type (storage or relatedEntity)."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"fieldPos"}),(0,s.jsx)(e.td,{children:"Number"}),(0,s.jsx)(e.td,{children:"Position of the field in the database table)."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"scope"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Scope of the attribute (only those attributes whose scope is Public will appear)."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"indexed"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsxs)(e.td,{children:["If any ",(0,s.jsx)(e.strong,{children:"Index Kind"})," was selected, this property will return true. Otherwise, this property does not appear."]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"type"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Attribute type (bool, blob, byte, date, duration, image, long, long64, number, string, uuid, or word) or the dataclass for a N->1 relation attribute."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"identifying"}),(0,s.jsx)(e.td,{children:"Boolean"}),(0,s.jsx)(e.td,{children:"This property returns True if the attribute is the primary key. Otherwise, this property does not appear."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"path"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Name of the dataclass for a relatedEntity attribute, or name of the relation for a relatedEntities attribute."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"foreignKey"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"For a relatedEntity attribute, name of the related attribute."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"inverseName"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Name of the opposite relation for a relatedEntity or relateEntities attribute."})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"primary-key",children:"Primary Key"}),"\n",(0,s.jsxs)(e.p,{children:["The key object returns the ",(0,s.jsx)(e.strong,{children:"name"})," of the attribute defined as the ",(0,s.jsx)(e.strong,{children:"Primary Key"})," for the dataclass."]}),"\n",(0,s.jsx)(e.h3,{id:"example-2",children:"Example"}),"\n",(0,s.jsx)(e.p,{children:"You can retrieve the information regarding a specific dataclass."}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"GET  /rest/$catalog/Employee"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Result"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n    name: "Employee",\n    className: "Employee",\n    collectionName: "EmployeeCollection",\n    scope: "public",\n    dataURI: "http://127.0.0.1:8081/rest/Employee",\n    defaultTopSize: 20,\n    extraProperties: {\n        panelColor: "#76923C",\n        __CDATA: "\\n\\n\\t\\t\\n",\n        panel: {\n            isOpen: "true",\n            pathVisible: "true",\n            __CDATA: "\\n\\n\\t\\t\\t\\n",\n            position: {\n                X: "394",\n                Y: "42"\n            }\n        }\n    },\n    attributes: [\n        {\n            name: "ID",\n            kind: "storage",\n            scope: "public",\n            indexed: true,\n            type: "long",\n            identifying: true\n        },\n        {\n            name: "firstName",\n            kind: "storage",\n            scope: "public",\n            type: "string"\n        },\n        {\n            name: "lastName",\n            kind: "storage",\n            scope: "public",\n            type: "string"\n        },\n        {\n            name: "fullName",\n            kind: "calculated",\n            scope: "public",\n            type: "string",\n            readOnly: true\n        },\n        {\n            name: "salary",\n            kind: "storage",\n            scope: "public",\n            type: "number",\n            defaultFormat: {\n                format: "$###,###.00"\n            }\n        },\n        {\n            name: "photo",\n            kind: "storage",\n            scope: "public",\n            type: "image"\n        },\n        {\n            name: "employer",\n            kind: "relatedEntity",\n            scope: "public",\n            type: "Company",\n            path: "Company"\n        },\n        {\n            name: "employerName",\n            kind: "alias",\n            scope: "public",\n\n            type: "string",\n            path: "employer.name",\n            readOnly: true\n        },\n        {\n            name: "description",\n            kind: "storage",\n            scope: "public",\n            type: "string",\n            multiLine: true\n        },\n   ],\n    key: [\n        {\n            name: "ID"\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"singletons",children:"singletons"}),"\n",(0,s.jsxs)(e.p,{children:["If you have defined ",(0,s.jsx)(e.a,{href:"/docs/Concepts/classes#singleton-classes",children:"shared singletons"})," containing at least one ",(0,s.jsx)(e.a,{href:"/docs/ORDA/ordaClasses#exposed-vs-non-exposed-functions",children:"exposed function"}),", a ",(0,s.jsx)(e.code,{children:"singletons"})," section is added to the returned json for both the ",(0,s.jsx)(e.code,{children:"/$catalog"})," and ",(0,s.jsx)(e.code,{children:"/$catalog/$all"})," syntaxes. It contains the collection of singleton classes as objects with their ",(0,s.jsx)(e.strong,{children:"name"})," and ",(0,s.jsx)(e.strong,{children:"methods"})," (i.e., exposed functions)."]}),"\n",(0,s.jsxs)(e.p,{children:["Singleton functions can be called by REST requests using the ",(0,s.jsxs)(e.a,{href:"/docs/REST/singleton",children:[(0,s.jsx)(e.code,{children:"$singleton"})," command"]}),"."]}),"\n",(0,s.jsx)(e.h3,{id:"example-3",children:"Example"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"GET  /rest/$catalog/$all"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Result"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{...\n\tsingletons": [\n    {\n      "name": "VehicleFactory",\n      "methods": [\n        {\n          "name": "buildVehicle",\n          "allowedOnHTTPGET": false,\n          "exposed": true\n        }\n      ]\n    }\n  ],\n\n\tdataClasses: [...]\n}\n'})})]})}function h(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>r});var s=t(296540);const a={},i=s.createContext(a);function l(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:l(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);