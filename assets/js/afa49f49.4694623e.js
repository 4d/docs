"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["45129"],{578452:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"REST/dataClass","title":"dataClass","description":"Dataclass names can be used directly in the REST requests to work with entities and entity selections, or class functions of the dataclass.","source":"@site/versioned_docs/version-20/REST/dataClass.md","sourceDirName":"REST","slug":"/REST/dataClass","permalink":"/docs/20/REST/dataClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FdataClass.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"dataClass","title":"dataClass"},"sidebar":"docs","previous":{"title":"API (dataClass)","permalink":"/docs/20/category/api-dataclass"},"next":{"title":"$asArray","permalink":"/docs/20/REST/asArray"}}'),a=t("785893"),i=t("250065");let r={id:"dataClass",title:"dataClass"},d=void 0,l={},c=[{value:"Available syntaxes",id:"available-syntaxes",level:2},{value:"{dataClass}",id:"dataclass",level:2},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"{dataClass}[{key}]",id:"dataclasskey",level:2},{value:"Description",id:"description-1",level:3},{value:"Example",id:"example-1",level:3},{value:"{dataClass}:{attribute}(value)",id:"dataclassattributevalue",level:2},{value:"Description",id:"description-2",level:3},{value:"Example",id:"example-2",level:3}];function o(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Dataclass names can be used directly in the REST requests to work with entities and entity selections, or class functions of the dataclass."}),"\n",(0,a.jsx)(n.h2,{id:"available-syntaxes",children:"Available syntaxes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Syntax"}),(0,a.jsx)(n.th,{children:"Example"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"#dataClass",children:(0,a.jsx)(n.strong,{children:"{dataClass}"})})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"/Employee"})}),(0,a.jsx)(n.td,{children:"Returns all the data (by default the first 100 entities) for the dataclass"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"#dataclasskey",children:(0,a.jsx)(n.strong,{children:"{dataClass}[{key}]"})})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"/Employee[22]"})}),(0,a.jsx)(n.td,{children:"Returns the data for the specific entity defined by the dataclass's primary key"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"#dataclassattributevalue",children:(0,a.jsx)(n.strong,{children:"{dataClass}:{attribute}(value)"})})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"/Employee:firstName(John)"})}),(0,a.jsx)(n.td,{children:"Returns the data for one entity in which the attribute's value is defined"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"/docs/20/REST/classFunctions#function-calls",children:(0,a.jsx)(n.strong,{children:"{dataClass}/{DataClassClassFunction}"})})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"/City/getCity"})}),(0,a.jsx)(n.td,{children:"Executes a dataclass class function"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"/docs/20/REST/classFunctions#function-calls",children:(0,a.jsx)(n.strong,{children:"{dataClass}/{EntitySelectionClassFunction}"})})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:'/City/getPopulation/?$filter="ID<3"'})}),(0,a.jsx)(n.td,{children:"Executes an entity selection class function"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"/docs/20/REST/classFunctions#function-calls",children:(0,a.jsx)(n.strong,{children:"{dataClass}[{key}]/{EntityClassFunction}"})})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"City[2]/getPopulation"})}),(0,a.jsx)(n.td,{children:"Executes an entity class function"})]})]})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Function calls are detailed in the ",(0,a.jsx)(n.a,{href:"/docs/20/REST/classFunctions",children:"Calling ORDA class functions"})," section."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"dataclass",children:"{dataClass}"}),"\n",(0,a.jsxs)(n.p,{children:["Returns all the data (by default the first 100 entities) for a specific dataclass (",(0,a.jsx)(n.em,{children:"e.g."}),", ",(0,a.jsx)(n.code,{children:"Company"}),")"]}),"\n",(0,a.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["When you call this parameter in your REST request, the first 100 entities are returned unless you have specified a value using ",(0,a.jsx)(n.a,{href:"/docs/20/REST/top_$limit",children:(0,a.jsx)(n.code,{children:"$top/$limit"})}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Here is a description of the data returned:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Property"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__entityModel"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"Name of the dataclass."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__COUNT"}),(0,a.jsx)(n.td,{children:"Number"}),(0,a.jsx)(n.td,{children:"Number of entities in the dataclass."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__SENT"}),(0,a.jsx)(n.td,{children:"Number"}),(0,a.jsxs)(n.td,{children:["Number of entities sent by the REST request. This number can be the total number of entities if it is less than the value defined by ",(0,a.jsx)(n.code,{children:"$top/$limit"}),"."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__FIRST"}),(0,a.jsx)(n.td,{children:"Number"}),(0,a.jsxs)(n.td,{children:["Entity number that the selection starts at. Either 0 by default or the value defined by ",(0,a.jsx)(n.code,{children:"$skip"}),"."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__ENTITIES"}),(0,a.jsx)(n.td,{children:"Collection"}),(0,a.jsx)(n.td,{children:"This collection of objects contains an object for each entity with all its attributes. All relational attributes are returned as objects with a URI to obtain information regarding the parent."})]})]})]}),"\n",(0,a.jsx)(n.p,{children:"Each entity contains the following properties:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Property"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__KEY"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"Value of the primary key defined for the dataclass."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__TIMESTAMP"}),(0,a.jsx)(n.td,{children:"Date"}),(0,a.jsx)(n.td,{children:"Timestamp of the last modification of the entity"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__STAMP"}),(0,a.jsx)(n.td,{children:"Number"}),(0,a.jsxs)(n.td,{children:["Internal stamp that is needed when you modify any of the values in the entity when using ",(0,a.jsx)(n.code,{children:"$method=update"}),"."]})]})]})]}),"\n",(0,a.jsxs)(n.p,{children:["If you want to specify which attributes you want to return, define them using the following syntax ",(0,a.jsx)(n.a,{href:"/docs/20/REST/manData#selecting-attributes-to-get",children:"{attribute1, attribute2, ...}"}),". For example:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Company/name,address"})}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:"Return all the data for a specific dataclass."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Company"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Result"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "__entityModel": "Company",\n    "__GlobalStamp": 51,\n    "__COUNT": 250,\n    "__SENT": 100,\n    "__FIRST": 0,\n    "__ENTITIES": [\n        {\n            "__KEY": "1",\n            "__TIMESTAMP": "2020-04-10T10:44:49.927Z",\n            "__STAMP": 1,\n            "ID": 1,\n            "name": "Adobe",\n            "address": null,\n            "city": "San Jose",\n            "country": "USA",\n            "revenues": 500000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(1)/staff?$expand=staff"\n                }\n            }\n        },\n        {\n            "__KEY": "2",\n            "__TIMESTAMP": "2018-04-25T14:42:18.351Z",\n            "__STAMP": 1,\n            "ID": 2,\n            "name": "Apple",\n            "address": null,\n            "city": "Cupertino",\n            "country": "USA",\n            "revenues": 890000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(2)/staff?$expand=staff"\n                }\n            }\n        },\n        {\n            "__KEY": "3",\n            "__TIMESTAMP": "2018-04-23T09:03:49.021Z",\n            "__STAMP": 2,\n            "ID": 3,\n            "name": "4D",\n            "address": null,\n            "city": "Clichy",\n            "country": "France",\n            "revenues": 700000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(3)/staff?$expand=staff"\n                }\n            }\n        },\n        {\n            "__KEY": "4",\n            "__TIMESTAMP": "2018-03-28T14:38:07.430Z",\n            "__STAMP": 1,\n            "ID": 4,\n            "name": "Microsoft",\n            "address": null,\n            "city": "Seattle",\n            "country": "USA",\n            "revenues": 650000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(4)/staff?$expand=staff"\n                }\n            }\n        }\n.....//more entities here \n    ]\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"dataclasskey",children:"{dataClass}[{key}]"}),"\n",(0,a.jsxs)(n.p,{children:["Returns the data for the specific entity defined by the dataclass's primary key, ",(0,a.jsx)(n.em,{children:"e.g."}),", ",(0,a.jsx)(n.code,{children:"Company[22]"})," or ",(0,a.jsx)(n.code,{children:"Company[IT0911AB2200]"})]}),"\n",(0,a.jsx)(n.h3,{id:"description-1",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["By passing the dataclass and a key, you can retrieve all the public information for that entity. The key is the value in the attribute defined as the Primary Key for your dataclass. For more information about defining a primary key, refer to the ",(0,a.jsx)(n.strong,{children:"Modifying the Primary Key"})," section in the ",(0,a.jsx)(n.strong,{children:"Data Model Editor"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["For more information about the data returned, refer to ",(0,a.jsx)(n.a,{href:"#dataclass",children:"{dataClass}"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["If you want to specify which attributes you want to return, define them using the following syntax ",(0,a.jsx)(n.a,{href:"/docs/20/REST/manData#selecting-attributes-to-get",children:"{attribute1, attribute2, ...}"}),". For example:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Company[1]/name,address"})}),"\n",(0,a.jsxs)(n.p,{children:["If you want to expand a relation attribute using ",(0,a.jsx)(n.code,{children:"$expand"}),", you do so by specifying it as shown below:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Company[1]/name,address,staff?$expand=staff"})}),"\n",(0,a.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:"The following request returns all the public data in the Company dataclass whose key is 1."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Company[1]"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Result"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "__entityModel": "Company",\n    "__KEY": "1",\n    "__TIMESTAMP": "2020-04-10T10:44:49.927Z",\n    "__STAMP": 2,\n    "ID": 1,\n    "name": "Apple",\n    "address": Infinite Loop,\n    "city": "Cupertino",\n    "country": "USA",\n    "url": http://www.apple.com,\n    "revenues": 500000,\n    "staff": {\n        "__deferred": {\n            "uri": "http://127.0.0.1:8081/rest/Company(1)/staff?$expand=staff"\n        }\n    }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"dataclassattributevalue",children:"{dataClass}:{attribute}(value)"}),"\n",(0,a.jsx)(n.p,{children:"Returns the data for one entity in which the attribute's value is defined"}),"\n",(0,a.jsx)(n.h3,{id:"description-2",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["By passing the ",(0,a.jsx)(n.em,{children:"dataClass"})," and an ",(0,a.jsx)(n.em,{children:"attribute"})," along with a value, you can retrieve all the public information for that entity. The value is a unique value for attribute, but is not the primary key."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Company:companyCode(Acme001)"})}),"\n",(0,a.jsxs)(n.p,{children:["If you want to specify which attributes you want to return, define them using the following syntax ",(0,a.jsx)(n.a,{href:"/docs/20/REST/manData#selecting-attributes-to-get",children:"{attribute1, attribute2, ...}"}),". For example:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Company:companyCode(Acme001)/name,address"})}),"\n",(0,a.jsxs)(n.p,{children:["If you want to use a relation attribute using ",(0,a.jsx)(n.a,{href:"/docs/20/REST/attributes",children:"$attributes"}),", you do so by specifying it as shown below:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Company:companyCode(Acme001)?$attributes=name,address,staff.name"})}),"\n",(0,a.jsx)(n.h3,{id:"example-2",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:'The following request returns all the public data of the employee named "Jones".'}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Employee:lastname(Jones)"})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return r}});var s=t(667294);let a={},i=s.createContext(a);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);