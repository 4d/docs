"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33951"],{28713:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>d,contentTitle:()=>a});var s=JSON.parse('{"id":"REST/attributes","title":"$attributes","description":"Allows selecting the attribute(s) to get from the dataclass (e.g., Company(1)?$attributes=name,city, Company(1)?$attributes=employees.lastname, or Employee?$attributes=employer.name).","source":"@site/versioned_docs/version-20-R9/REST/$attributes.md","sourceDirName":"REST","slug":"/REST/attributes","permalink":"/docs/REST/attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24attributes.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"attributes","title":"$attributes"},"sidebar":"docs","previous":{"title":"$atomic/$atOnce","permalink":"/docs/REST/atomic_$atonce"},"next":{"title":"$binary","permalink":"/docs/REST/binary"}}'),r=n("785893"),i=n("250065");let l={id:"attributes",title:"$attributes"},a=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Example with related entities",id:"example-with-related-entities",level:2},{value:"Example with related entity",id:"example-with-related-entity",level:2}];function c(e){let t={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Allows selecting the attribute(s) to get from the dataclass (",(0,r.jsx)(t.em,{children:"e.g."}),", ",(0,r.jsx)(t.code,{children:"Company(1)?$attributes=name,city"}),", ",(0,r.jsx)(t.code,{children:"Company(1)?$attributes=employees.lastname"}),", or ",(0,r.jsx)(t.code,{children:"Employee?$attributes=employer.name"}),")."]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["If you have relation attributes in a dataclass, use ",(0,r.jsx)(t.code,{children:"$attributes"})," to define the path of attributes whose values you want to get for the related entity or entities."]}),"\n",(0,r.jsxs)(t.p,{children:["You can apply ",(0,r.jsx)(t.code,{children:"$attributes"})," to an entity (",(0,r.jsx)(t.em,{children:"e.g."}),", People(1)) or an entity selection (",(0,r.jsx)(t.em,{children:"e.g."}),", People/$entityset/0AF4679A5C394746BFEB68D2162A19FF) ."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["If ",(0,r.jsx)(t.code,{children:"$attributes"}),' is not specified in a query, or if the "*" value is passed, all available attributes are extracted. ',(0,r.jsx)(t.strong,{children:"Related entity"})," attributes are extracted with the simple form: an object with property ",(0,r.jsx)(t.code,{children:"__KEY"})," (primary key) and ",(0,r.jsx)(t.code,{children:"URI"}),". ",(0,r.jsx)(t.strong,{children:"Related entities"})," attributes are not extracted."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["If ",(0,r.jsx)(t.code,{children:"$attributes"})," is specified for ",(0,r.jsx)(t.strong,{children:"related entity"})," attributes:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"$attributes=relatedEntity"}),": the related entity is returned with simple form (deferred __KEY property (primary key)) and ",(0,r.jsx)(t.code,{children:"URI"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"$attributes=relatedEntity.*"}),": all the attributes of the related entity are returned"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"$attributes=relatedEntity.attributePath1, relatedEntity.attributePath2, ..."}),": only those attributes of the related entity are returned."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["If ",(0,r.jsx)(t.code,{children:"$attributes"})," is specified for ",(0,r.jsx)(t.strong,{children:"related entities"})," attributes:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"$attributes=relatedEntities.*"}),": all the properties of all the related entities are returned"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"$attributes=relatedEntities.attributePath1, relatedEntities.attributePath2, ..."}),": only those attributes of the related entities are returned."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["If ",(0,r.jsx)(t.code,{children:"$attributes"})," is specified for ",(0,r.jsx)(t.strong,{children:"storage"})," attributes:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"$attributes=attribute1, attribute2, ..."}),": only those attributes of the entities are returned."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"example-with-related-entities",children:"Example with related entities"}),"\n",(0,r.jsx)(t.p,{children:'If we pass the following REST request for our Company dataclass (which has a relation attribute "employees"):'}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Company(1)/?$attributes=employees.lastname"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Response"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'{\n    "__entityModel": "Company",\n    "__KEY": "1",  \n    "__TIMESTAMP": "2018-04-25T14:41:16.237Z",\n    "__STAMP": 2,\n    "employees": {\n		"__ENTITYSET": "/rest/Company(1)/employees?$expand=employees",\n		"__GlobalStamp": 50,\n		"__COUNT": 135,\n		"__FIRST": 0,\n		"__ENTITIES": [\n			{\n				"__KEY": "1",\n				"__TIMESTAMP": "2019-12-01T20:18:26.046Z",\n				"__STAMP": 5,\n				"lastname": "ESSEAL"\n			},\n			{\n				"__KEY": "2",\n				"__TIMESTAMP": "2019-12-04T10:58:42.542Z",\n				"__STAMP": 6,\n				"lastname": "JONES"\n			},\n			...\n    }\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"If you want to get all attributes from employees:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Company(1)/?$attributes=employees.*"})}),"\n",(0,r.jsx)(t.p,{children:"If you want to get last name and job name attributes from employees:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Company(1)/?$attributes=employees.lastname,employees.jobname"})}),"\n",(0,r.jsx)(t.h2,{id:"example-with-related-entity",children:"Example with related entity"}),"\n",(0,r.jsx)(t.p,{children:'If we pass the following REST request for our Employee dataclass (which has several relation attributes, including "employer"):'}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Employee(1)?$attributes=employer.name"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Response"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'{\n	"__entityModel": "Employee",\n	"__KEY": "1",\n	"__TIMESTAMP": "2019-12-01T20:18:26.046Z",\n	"__STAMP": 5,\n	"employer": {\n		"__KEY": "1",\n		"__TIMESTAMP": "2018-04-25T14:41:16.237Z",\n		"__STAMP": 0,\n		"name": "Adobe"\n	}\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"If you want to get all attributes of the employer:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Employee(1)?$attributes=employer.*"})}),"\n",(0,r.jsx)(t.p,{children:"If you want to get the last names of all employees of the employer:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Employee(1)?$attributes=employer.employees.lastname"})})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return l}});var s=n(667294);let r={},i=s.createContext(r);function l(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);