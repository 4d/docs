/*! For license information please see 6b195a5e.90bda338.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80961],{793156:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(474848),s=n(28453);const i={id:"attributes",title:"$attributes"},l=void 0,a={id:"REST/attributes",title:"$attributes",description:"Allows selecting the related attribute(s) to get from the dataclass (e.g., Company(1)?$attributes=employees.lastname or Employee?$attributes=employer.name).",source:"@site/versioned_docs/version-18/REST/$attributes.md",sourceDirName:"REST",slug:"/REST/attributes",permalink:"/docs/18/REST/attributes",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24attributes.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"attributes",title:"$attributes"},sidebar:"docs",previous:{title:"$atomic/$atOnce",permalink:"/docs/18/REST/atomic_$atonce"},next:{title:"$binary",permalink:"/docs/18/REST/binary"}},o={},d=[{value:"Description",id:"description",level:2},{value:"Example with related entities",id:"example-with-related-entities",level:2},{value:"Example with related entity",id:"example-with-related-entity",level:2}];function c(e){const t={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Allows selecting the related attribute(s) to get from the dataclass (",(0,r.jsx)(t.em,{children:"e.g."}),", ",(0,r.jsx)(t.code,{children:"Company(1)?$attributes=employees.lastname"})," or ",(0,r.jsx)(t.code,{children:"Employee?$attributes=employer.name"}),")."]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["When you have relation attributes in a dataclass, use ",(0,r.jsx)(t.code,{children:"$attributes"})," to define the path of attributes whose values you want to get for the related entity or entities."]}),"\n",(0,r.jsxs)(t.p,{children:["You can apply ",(0,r.jsx)(t.code,{children:"$attributes"})," to an entity (",(0,r.jsx)(t.em,{children:"e.g."}),", People(1)) or an entity selection (",(0,r.jsx)(t.em,{children:"e.g."}),", People/$entityset/0AF4679A5C394746BFEB68D2162A19FF) ."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["If ",(0,r.jsx)(t.code,{children:"$attributes"}),' is not specified in a query, or if the "*" value is passed, all available attributes are extracted. ',(0,r.jsx)(t.strong,{children:"Related entity"})," attributes are extracted with the simple form: an object with property ",(0,r.jsx)(t.code,{children:"__KEY"})," (primary key) and ",(0,r.jsx)(t.code,{children:"URI"}),". ",(0,r.jsx)(t.strong,{children:"Related entities"})," attributes are not extracted."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["If ",(0,r.jsx)(t.code,{children:"$attributes"})," is specified for ",(0,r.jsx)(t.strong,{children:"related entity"})," attributes:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"$attributes=relatedEntity"}),": the related entity is returned with simple form (deferred __KEY property (primary key)) and ",(0,r.jsx)(t.code,{children:"URI"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"$attributes=relatedEntity.*"}),": all the attributes of the related entity are returned"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"$attributes=relatedEntity.attributePath1, relatedEntity.attributePath2, ..."}),": only those attributes of the related entity are returned."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["If ",(0,r.jsx)(t.code,{children:"$attributes"})," is specified for ",(0,r.jsx)(t.strong,{children:"related entities"})," attributes:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"$attributes=relatedEntities.*"}),": all the properties of all the related entities are returned"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"$attributes=relatedEntities.attributePath1, relatedEntities.attributePath2, ..."}),": only those attributes of the related entities are returned."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"example-with-related-entities",children:"Example with related entities"}),"\n",(0,r.jsx)(t.p,{children:'If we pass the following REST request for our Company dataclass (which has a relation attribute "employees"):'}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Company(1)/?$attributes=employees.lastname"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Response"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'{\n    "__entityModel": "Company",\n    "__KEY": "1",  \n    "__TIMESTAMP": "2018-04-25T14:41:16.237Z",\n    "__STAMP": 2,\n    "employees": {\n\t\t"__ENTITYSET": "/rest/Company(1)/employees?$expand=employees",\n\t\t"__GlobalStamp": 50,\n\t\t"__COUNT": 135,\n\t\t"__FIRST": 0,\n\t\t"__ENTITIES": [\n\t\t\t{\n\t\t\t\t"__KEY": "1",\n\t\t\t\t"__TIMESTAMP": "2019-12-01T20:18:26.046Z",\n\t\t\t\t"__STAMP": 5,\n\t\t\t\t"lastname": "ESSEAL"\n\t\t\t},\n\t\t\t{\n\t\t\t\t"__KEY": "2",\n\t\t\t\t"__TIMESTAMP": "2019-12-04T10:58:42.542Z",\n\t\t\t\t"__STAMP": 6,\n\t\t\t\t"lastname": "JONES"\n\t\t\t},\n\t\t\t...\n    }\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"If you want to get all attributes from employees:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Company(1)/?$attributes=employees.*"})}),"\n",(0,r.jsx)(t.p,{children:"If you want to get last name and job name attributes from employees:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Company(1)/?$attributes=employees.lastname,employees.jobname"})}),"\n",(0,r.jsx)(t.h2,{id:"example-with-related-entity",children:"Example with related entity"}),"\n",(0,r.jsx)(t.p,{children:'If we pass the following REST request for our Employee dataclass (which has several relation attributes, including "employer"):'}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Employee(1)?$attributes=employer.name"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Response"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'{\n\t"__entityModel": "Employee",\n\t"__KEY": "1",\n\t"__TIMESTAMP": "2019-12-01T20:18:26.046Z",\n\t"__STAMP": 5,\n\t"employer": {\n\t\t"__KEY": "1",\n\t\t"__TIMESTAMP": "2018-04-25T14:41:16.237Z",\n\t\t"__STAMP": 0,\n\t\t"name": "Adobe"\n\t}\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"If you want to get all attributes of the employer:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Employee(1)?$attributes=employer.*"})}),"\n",(0,r.jsx)(t.p,{children:"If you want to get the last names of all employees of the employer:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Employee(1)?$attributes=employer.employees.lastname"})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},221020:(e,t,n)=>{var r=n(296540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,i={},d=null,c=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,r)&&!o.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:d,ref:c,props:i,_owner:a.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var r=n(296540);const s={},i=r.createContext(s);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);