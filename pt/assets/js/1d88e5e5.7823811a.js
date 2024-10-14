"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36940],{293538:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=a(474848),n=a(28453);const s={id:"overview",title:"O que \xe9 ORDA?"},i=void 0,r={id:"ORDA/overview",title:"O que \xe9 ORDA?",description:"ORDA stands for Object Relational Data Access. It is an enhanced technology allowing to access both the model and the data of a database through objects.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/ORDA/overview.md",sourceDirName:"ORDA",slug:"/ORDA/overview",permalink:"/docs/pt/19/ORDA/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Foverview.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"overview",title:"O que \xe9 ORDA?"},sidebar:"docs",previous:{title:"Pathnames",permalink:"/docs/pt/19/Concepts/paths"},next:{title:"Objetos Data Model",permalink:"/docs/pt/19/ORDA/dsmapping"}},d={},c=[{value:"Porqu\xea utilizar ORDA?",id:"porqu\xea-utilizar-orda",level:2},{value:"Como utilizar ORDA?",id:"como-utilizar-orda",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["ORDA stands for ",(0,o.jsx)(t.strong,{children:"Object Relational Data Access"}),". It is an enhanced technology allowing to access both the model and the data of a database through objects."]}),"\n",(0,o.jsxs)(t.p,{children:["Relations are transparently included in the concept, in combination with ",(0,o.jsx)(t.a,{href:"/docs/pt/19/ORDA/glossary#lazy-loading",children:"lazy loading"}),", to remove all the typical hassles of data selection or transfer from the developer."]}),"\n",(0,o.jsxs)(t.p,{children:["With ORDA, data is accessed through an abstraction layer, the ",(0,o.jsx)(t.a,{href:"/docs/pt/19/ORDA/dsmapping#datastore",children:"datastore"}),". A datastore is an object that provides an interface to the database model and data through objects and classes. For example, a table is mapped to a ",(0,o.jsx)(t.a,{href:"/docs/pt/19/ORDA/dsmapping#dataclass",children:"dataclass"})," object, a field is an ",(0,o.jsx)(t.a,{href:"/docs/pt/19/ORDA/dsmapping##attribute",children:"attribute"})," of a dataclass, and records are accessed through ",(0,o.jsx)(t.a,{href:"/docs/pt/19/ORDA/dsmapping#entity",children:"entities"})," and ",(0,o.jsx)(t.a,{href:"/docs/pt/19/ORDA/dsmapping#entity-selection",children:"entity selections"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"porqu\xea-utilizar-orda",children:"Porqu\xea utilizar ORDA?"}),"\n",(0,o.jsx)(t.p,{children:"Instead of representing information as tables, records, and fields, ORDA uses an alternate approach that more accurately maps data to real-world concepts."}),"\n",(0,o.jsx)(t.p,{children:"Imagine the ability to denormalize a relational structure, yet not affect efficiency. Imagine describing everything about the business objects in your application in such a way that using the data becomes simple and straightforward and removes the need for a complete understanding of the relational structure."}),"\n",(0,o.jsx)(t.p,{children:"In the ORDA data model, a single dataclass can incorporate all of the elements that make up a traditional relational database table, but can also include values from related parent entities, and direct references to related entities and entity selections."}),"\n",(0,o.jsx)(t.p,{children:'Uma consulta retorna uma lista de entidades chamada sele\xe7\xe3o de entidades, que cumpre o papel de um conjunto de linhas de uma consulta SQL. The difference is that each entity "knows" where it belongs in the data model and "understands" its relationship to all other entities. This means that a developer does not need to explain in a query how to relate the various pieces of information, nor in an update how to write modified values back to the relational structure.'}),"\n",(0,o.jsxs)(t.p,{children:["In addition, ORDA objects such as entity selections or entities can be easily bound to UI objects such as list boxes or variables. Combined with powerful features such as the ",(0,o.jsx)(t.code,{children:"This"})," and ",(0,o.jsx)(t.code,{children:"Form"})," commands, they allow the building modern and modular interfaces based upon objects and collections."]}),"\n",(0,o.jsx)(t.h2,{id:"como-utilizar-orda",children:"Como utilizar ORDA?"}),"\n",(0,o.jsxs)(t.p,{children:["Basicamente, o ORDA lida com objetos. No ORDA, todos os conceitos principais, incluindo o pr\xf3prio datastore, est\xe3o dispon\xedveis atrav\xe9s de objectos. The datastore is automatically ",(0,o.jsx)(t.a,{href:"/docs/pt/19/ORDA/dsmapping",children:"mapped upon the 4D structure"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"ORDA objects can be handled like 4D standard objects, but they automatically benefit from specific properties and methods."}),"\n",(0,o.jsxs)(t.p,{children:["ORDA objects are created and instanciated when necessary by 4D methods (you do not need to create them). However, ORDA data model objects are associated with ",(0,o.jsx)(t.a,{href:"/docs/pt/19/ORDA/ordaClasses",children:"classes where you can add custom functions"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>r});var o=a(296540);const n={},s=o.createContext(n);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);