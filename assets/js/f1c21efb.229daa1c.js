"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22651"],{458937:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>a,assets:()=>d,toc:()=>c,contentTitle:()=>l});var a=JSON.parse('{"id":"REST/catalog","title":"$catalog","description":"The catalog describes all the dataclasses and attributes available in the datastore.","source":"@site/versioned_docs/version-20/REST/$catalog.md","sourceDirName":"REST","slug":"/REST/catalog","permalink":"/docs/20/REST/catalog","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24catalog.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"catalog","title":"$catalog"},"sidebar":"docs","previous":{"title":"API (general)","permalink":"/docs/20/category/api-general"},"next":{"title":"$directory","permalink":"/docs/20/REST/directory"}}'),s=t("785893"),r=t("250065");let i={id:"catalog",title:"$catalog"},l=void 0,d={},c=[{value:"Available syntaxes",id:"available-syntaxes",level:2},{value:"$catalog",id:"catalog",level:2},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"$catalog/$all",id:"catalogall",level:2},{value:"Description",id:"description-1",level:3},{value:"Example",id:"example-1",level:3},{value:"$catalog/{dataClass}",id:"catalogdataclass",level:2},{value:"Description",id:"description-2",level:3},{value:"DataClass",id:"dataclass",level:3},{value:"Attribute(s)",id:"attributes",level:3},{value:"Primary Key",id:"primary-key",level:3},{value:"Example",id:"example-2",level:3}];function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The catalog describes all the dataclasses and attributes available in the datastore."}),"\n",(0,s.jsx)(n.h2,{id:"available-syntaxes",children:"Available syntaxes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Syntax"}),(0,s.jsx)(n.th,{children:"Example"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#catalog",children:(0,s.jsx)(n.strong,{children:"$catalog"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/$catalog"})}),(0,s.jsx)(n.td,{children:"Returns a list of the dataclasses in your project along with two URIs"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#catalogall",children:(0,s.jsx)(n.strong,{children:"$catalog/$all"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/$catalog/$all"})}),(0,s.jsx)(n.td,{children:"Returns information about all of your project's dataclasses and their attributes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#catalogdataclass",children:(0,s.jsx)(n.strong,{children:"$catalog/{dataClass}"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/$catalog/Employee"})}),(0,s.jsx)(n.td,{children:"Returns information about a dataclass and its attributes"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"catalog",children:"$catalog"}),"\n",(0,s.jsx)(n.p,{children:"Returns a list of the dataclasses in your project along with two URIs: one to access the information about its structure and one to retrieve the data in the dataclass"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["When you call ",(0,s.jsx)(n.code,{children:"$catalog"}),", a list of the dataclasses is returned along with two URIs for each dataclass in your project's datastore."]}),"\n",(0,s.jsxs)(n.p,{children:["Only the exposed dataclasses are shown in this list for your project's datastore. For more information, please refer to ",(0,s.jsx)(n.a,{href:"/docs/20/REST/configuration#exposing-tables-and-fields",children:(0,s.jsx)(n.strong,{children:"Exposing tables and fields"})})," section."]}),"\n",(0,s.jsx)(n.p,{children:"Here is a description of the properties returned for each dataclass in your project's datastore:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"name"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"Name of the dataclass."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"uri"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"A URI allowing you to obtain information about the dataclass and its attributes."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dataURI"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"A URI that allows you to view the data in the dataclass."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/$catalog"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Result"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    dataClasses: [\n        {\n            name: "Company",\n            uri: "http://127.0.0.1:8081/rest/$catalog/Company",\n            dataURI: "http://127.0.0.1:8081/rest/Company"\n        },\n        {\n            name: "Employee",\n            uri: "http://127.0.0.1:8081/rest/$catalog/Employee",\n            dataURI: "http://127.0.0.1:8081/rest/Employee"\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"catalogall",children:"$catalog/$all"}),"\n",(0,s.jsx)(n.p,{children:"Returns information about all of your project's dataclasses and their attributes"}),"\n",(0,s.jsx)(n.h3,{id:"description-1",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Calling ",(0,s.jsx)(n.code,{children:"$catalog/$all"})," allows you to receive detailed information about the attributes in each of the dataclasses in your project's active model."]}),"\n",(0,s.jsxs)(n.p,{children:["For more information about what is returned for each dataclass and its attributes, use ",(0,s.jsx)(n.a,{href:"#catalogdataclass",children:(0,s.jsx)(n.code,{children:"$catalog/\\{dataClass\\}"})}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/$catalog/$all"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Result"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n \n    "dataClasses": [\n        {\n            "name": "Company",\n            "className": "Company",\n            "collectionName": "CompanySelection",\n            "tableNumber": 2,\n            "scope": "public",\n            "dataURI": "/rest/Company",\n            "attributes": [\n                {\n                    "name": "ID",\n                    "kind": "storage",\n                    "fieldPos": 1,\n                    "scope": "public",\n                    "indexed": true,\n                    "type": "long",\n                    "identifying": true\n                },\n                {\n                    "name": "name",\n                    "kind": "storage",\n                    "fieldPos": 2,\n                    "scope": "public",\n                    "type": "string"\n                },\n                {\n                    "name": "revenues",\n                    "kind": "storage",\n                    "fieldPos": 3,\n                    "scope": "public",\n                    "type": "number"\n                },\n                {\n                    "name": "staff",\n                    "kind": "relatedEntities",\n                    "fieldPos": 4,\n                    "scope": "public",\n                    "type": "EmployeeSelection",\n                    "reversePath": true,\n                    "path": "employer"\n                },\n                {\n                    "name": "url",\n                    "kind": "storage",\n                    "scope": "public",\n                    "type": "string"\n                }\n            ],\n            "key": [\n                {\n                    "name": "ID"\n                }\n            ]\n        },\n        {\n            "name": "Employee",\n            "className": "Employee",\n            "collectionName": "EmployeeSelection",\n            "tableNumber": 1,\n            "scope": "public",\n            "dataURI": "/rest/Employee",\n            "attributes": [\n                {\n                    "name": "ID",\n                    "kind": "storage",\n                    "scope": "public",\n                    "indexed": true,\n                    "type": "long",\n                    "identifying": true\n                },\n                {\n                    "name": "firstname",\n                    "kind": "storage",\n                    "scope": "public",\n                    "type": "string"\n                },\n                {\n                    "name": "lastname",\n                    "kind": "storage",\n                    "scope": "public",\n                    "type": "string"\n                },\n                {\n                    "name": "employer",\n                    "kind": "relatedEntity",\n                    "scope": "public",\n                    "type": "Company",\n                    "path": "Company"\n                }\n            ],\n            "key": [\n                {\n                    "name": "ID"\n                }\n            ]\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"catalogdataclass",children:"$catalog/{dataClass}"}),"\n",(0,s.jsx)(n.p,{children:"Returns information about a dataclass and its attributes"}),"\n",(0,s.jsx)(n.h3,{id:"description-2",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Calling ",(0,s.jsx)(n.code,{children:"$catalog/\\{dataClass\\}"})," for a specific dataclass will return the following information about the dataclass and the attributes it contains. If you want to retrieve this information for all the dataclasses in your project's datastore, use ",(0,s.jsx)(n.a,{href:"#catalogall",children:(0,s.jsx)(n.code,{children:"$catalog/$all"})}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The information you retrieve concerns the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Dataclass"}),"\n",(0,s.jsx)(n.li,{children:"Attribute(s)"}),"\n",(0,s.jsx)(n.li,{children:"Method(s) if any"}),"\n",(0,s.jsx)(n.li,{children:"Primary key"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"dataclass",children:"DataClass"}),"\n",(0,s.jsx)(n.p,{children:"The following properties are returned for an exposed dataclass:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"name"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"Name of the dataclass"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"collectionName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"Name of an entity selection on the dataclass"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tableNumber"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"Table number in the 4D database"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"scope"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsxs)(n.td,{children:["Scope for the dataclass (note that only dataclasses whose ",(0,s.jsx)(n.strong,{children:"Scope"})," is public are displayed)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dataURI"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"A URI to the data in the dataclass"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"attributes",children:"Attribute(s)"}),"\n",(0,s.jsx)(n.p,{children:"Here are the properties for each exposed attribute that are returned:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"name"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"Attribute name."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"kind"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"Attribute type (storage or relatedEntity)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fieldPos"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"Position of the field in the database table)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"scope"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"Scope of the attribute (only those attributes whose scope is Public will appear)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"indexed"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsxs)(n.td,{children:["If any ",(0,s.jsx)(n.strong,{children:"Index Kind"})," was selected, this property will return true. Otherwise, this property does not appear."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"type"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"Attribute type (bool, blob, byte, date, duration, image, long, long64, number, string, uuid, or word) or the dataclass for a N->1 relation attribute."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"identifying"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"This property returns True if the attribute is the primary key. Otherwise, this property does not appear."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"path"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"Name of the dataclass for a relatedEntity attribute, or name of the relation for a relatedEntities attribute."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"foreignKey"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"For a relatedEntity attribute, name of the related attribute."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"inverseName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"Name of the opposite relation for a relatedEntity or relateEntities attribute."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"primary-key",children:"Primary Key"}),"\n",(0,s.jsxs)(n.p,{children:["The key object returns the ",(0,s.jsx)(n.strong,{children:"name"})," of the attribute defined as the ",(0,s.jsx)(n.strong,{children:"Primary Key"})," for the dataclass."]}),"\n",(0,s.jsx)(n.h3,{id:"example-2",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"You can retrieve the information regarding a specific dataclass."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/$catalog/Employee"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Result"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    name: "Employee",\n    className: "Employee",\n    collectionName: "EmployeeCollection",\n    scope: "public",\n    dataURI: "http://127.0.0.1:8081/rest/Employee",\n    defaultTopSize: 20,\n    extraProperties: {\n        panelColor: "#76923C",\n        __CDATA: "\\n\\n\\t\\t\\n",\n        panel: {\n            isOpen: "true",\n            pathVisible: "true",\n            __CDATA: "\\n\\n\\t\\t\\t\\n",\n            position: {\n                X: "394",\n                Y: "42"\n            }\n        }\n    },\n    attributes: [\n        {\n            name: "ID",\n            kind: "storage",\n            scope: "public",\n            indexed: true,\n            type: "long",\n            identifying: true\n        },\n        {\n            name: "firstName",\n            kind: "storage",\n            scope: "public",\n            type: "string"\n        },\n        {\n            name: "lastName",\n            kind: "storage",\n            scope: "public",\n            type: "string"\n        },\n        {\n            name: "fullName",\n            kind: "calculated",\n            scope: "public",\n            type: "string",\n            readOnly: true\n        },\n        {\n            name: "salary",\n            kind: "storage",\n            scope: "public",\n            type: "number",\n            defaultFormat: {\n                format: "$###,###.00"\n            }\n        },\n        {\n            name: "photo",\n            kind: "storage",\n            scope: "public",\n            type: "image"\n        },\n        {\n            name: "employer",\n            kind: "relatedEntity",\n            scope: "public",\n            type: "Company",\n            path: "Company"\n        },\n        {\n            name: "employerName",\n            kind: "alias",\n            scope: "public",\n\n            type: "string",\n            path: "employer.name",\n            readOnly: true\n        },\n        {\n            name: "description",\n            kind: "storage",\n            scope: "public",\n            type: "string",\n            multiLine: true\n        },\n   ],\n    key: [\n        {\n            name: "ID"\n        }\n    ]\n}\n'})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var a=t(667294);let s={},r=a.createContext(s);function i(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);