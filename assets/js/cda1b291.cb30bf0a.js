/*! For license information please see cda1b291.cb30bf0a.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14950],{645613:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=a(474848),n=a(28453);const o={id:"overview",title:"What is ORDA?"},r=void 0,i={id:"ORDA/overview",title:"What is ORDA?",description:"ORDA stands for Object Relational Data Access. It is an enhanced technology allowing to access both the model and the data of a database through objects.",source:"@site/versioned_docs/version-19/ORDA/overview.md",sourceDirName:"ORDA",slug:"/ORDA/overview",permalink:"/docs/19/ORDA/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Foverview.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"overview",title:"What is ORDA?"},sidebar:"docs",previous:{title:"Pathnames",permalink:"/docs/19/Concepts/paths"},next:{title:"Data Model Objects",permalink:"/docs/19/ORDA/dsmapping"}},d={},c=[{value:"Why use ORDA?",id:"Why-use-ORDA",level:2},{value:"How to use ORDA?",id:"How-to-use-ORDA",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["ORDA stands for ",(0,s.jsx)(t.strong,{children:"Object Relational Data Access"}),". It is an enhanced technology allowing to access both the model and the data of a database through objects."]}),"\n",(0,s.jsxs)(t.p,{children:["Relations are transparently included in the concept, in combination with ",(0,s.jsx)(t.a,{href:"/docs/19/ORDA/glossary#lazy-loading",children:"lazy loading"}),", to remove all the typical hassles of data selection or transfer from the developer."]}),"\n",(0,s.jsxs)(t.p,{children:["With ORDA, data is accessed through an abstraction layer, the ",(0,s.jsx)(t.a,{href:"/docs/19/ORDA/dsmapping#datastore",children:"datastore"}),". A datastore is an object that provides an interface to the database model and data through objects and classes. For example, a table is mapped to a ",(0,s.jsx)(t.a,{href:"/docs/19/ORDA/dsmapping#dataclass",children:"dataclass"})," object, a field is an ",(0,s.jsx)(t.a,{href:"/docs/19/ORDA/dsmapping##attribute",children:"attribute"})," of a dataclass, and records are accessed through ",(0,s.jsx)(t.a,{href:"/docs/19/ORDA/dsmapping#entity",children:"entities"})," and ",(0,s.jsx)(t.a,{href:"/docs/19/ORDA/dsmapping#entity-selection",children:"entity selections"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"Why-use-ORDA",children:"Why use ORDA?"}),"\n",(0,s.jsx)(t.p,{children:"Instead of representing information as tables, records, and fields, ORDA uses an alternate approach that more accurately maps data to real-world concepts."}),"\n",(0,s.jsx)(t.p,{children:"Imagine the ability to denormalize a relational structure, yet not affect efficiency. Imagine describing everything about the business objects in your application in such a way that using the data becomes simple and straightforward and removes the need for a complete understanding of the relational structure."}),"\n",(0,s.jsx)(t.p,{children:"In the ORDA data model, a single dataclass can incorporate all of the elements that make up a traditional relational database table, but can also include values from related parent entities, and direct references to related entities and entity selections."}),"\n",(0,s.jsx)(t.p,{children:'A query returns a list of entities called an entity selection, which fulfills the role of a SQL query\u2019s row set. The difference is that each entity "knows" where it belongs in the data model and "understands" its relationship to all other entities. This means that a developer does not need to explain in a query how to relate the various pieces of information, nor in an update how to write modified values back to the relational structure.'}),"\n",(0,s.jsxs)(t.p,{children:["In addition, ORDA objects such as entity selections or entities can be easily bound to UI objects such as list boxes or variables. Combined with powerful features such as the ",(0,s.jsx)(t.code,{children:"This"})," and ",(0,s.jsx)(t.code,{children:"Form"})," commands, they allow the building modern and modular interfaces based upon objects and collections."]}),"\n",(0,s.jsx)(t.h2,{id:"How-to-use-ORDA",children:"How to use ORDA?"}),"\n",(0,s.jsxs)(t.p,{children:["Basically, ORDA handles objects. In ORDA, all main concepts, including the datastore itself, are available through objects. The datastore is automatically ",(0,s.jsx)(t.a,{href:"/docs/19/ORDA/dsmapping",children:"mapped upon the 4D structure"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"ORDA objects can be handled like 4D standard objects, but they automatically benefit from specific properties and methods."}),"\n",(0,s.jsxs)(t.p,{children:["ORDA objects are created and instanciated when necessary by 4D methods (you do not need to create them). However, ORDA data model objects are associated with ",(0,s.jsx)(t.a,{href:"/docs/19/ORDA/ordaClasses",children:"classes where you can add custom functions"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,t,a)=>{var s=a(296540),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,a){var s,o={},c=null,l=null;for(s in void 0!==a&&(c=""+a),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)r.call(t,s)&&!d.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:n,type:e,key:c,ref:l,props:o,_owner:i.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},474848:(e,t,a)=>{e.exports=a(221020)},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>i});var s=a(296540);const n={},o=s.createContext(n);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);