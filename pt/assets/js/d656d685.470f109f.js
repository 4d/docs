"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74338],{603905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},62894:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});a(667294);var n=a(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={id:"overview",title:"ORDA"},s=void 0,l={unversionedId:"ORDA/overview",id:"version-20-R5/ORDA/overview",title:"ORDA",description:"ORDA stands for Object Relational Data Access. It is an enhanced technology allowing to access both the model and the data of a database through objects.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/ORDA/overview.md",sourceDirName:"ORDA",slug:"/ORDA/overview",permalink:"/docs/pt/ORDA/overview",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Foverview.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"overview",title:"ORDA"},sidebar:"docs",previous:{title:"Arquivo de hist\xf3rico",permalink:"/docs/pt/Debugging/debugLogFiles"},next:{title:"Objetos Data Model",permalink:"/docs/pt/ORDA/dsmapping"}},c={},d=[{value:"Porqu\xea utilizar ORDA?",id:"porqu\xea-utilizar-orda",level:2},{value:"Como utilizar ORDA?",id:"como-utilizar-orda",level:2}],p={toc:d};function u(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",r({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"ORDA stands for ",(0,n.kt)("strong",{parentName:"p"},"Object Relational Data Access"),". It is an enhanced technology allowing to access both the model and the data of a database through objects."),(0,n.kt)("p",null,"Relations are transparently included in the concept, in combination with ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/ORDA/glossary#lazy-loading"}),"lazy loading"),", to remove all the typical hassles of data selection or transfer from the developer."),(0,n.kt)("p",null,"With ORDA, data is accessed through an abstraction layer, the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/ORDA/dsmapping#datastore"}),"datastore"),". A datastore is an object that provides an interface to the database model and data through objects and classes. For example, a table is mapped to a ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/ORDA/dsmapping#dataclass"}),"dataclass")," object, a field is an ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/ORDA/dsmapping##attribute"}),"attribute")," of a dataclass, and records are accessed through ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/ORDA/dsmapping#entity"}),"entities")," and ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/ORDA/dsmapping#entity-selection"}),"entity selections"),"."),(0,n.kt)("h2",r({},{id:"porqu\xea-utilizar-orda"}),"Porqu\xea utilizar ORDA?"),(0,n.kt)("p",null,"Instead of representing information as tables, records, and fields, ORDA uses an alternate approach that more accurately maps data to real-world concepts."),(0,n.kt)("p",null,"Imagine the ability to denormalize a relational structure, yet not affect efficiency. Imagine describing everything about the business objects in your application in such a way that using the data becomes simple and straightforward and removes the need for a complete understanding of the relational structure."),(0,n.kt)("p",null,"In the ORDA data model, a single dataclass can incorporate all of the elements that make up a traditional relational database table, but can also include values from related parent entities, and direct references to related entities and entity selections."),(0,n.kt)("p",null,'A query returns a list of entities called an entity selection, which fulfills the role of a SQL query\u2019s row set. The difference is that each entity "knows" where it belongs in the data model and "understands" its relationship to all other entities. This means that a developer does not need to explain in a query how to relate the various pieces of information, nor in an update how to write modified values back to the relational structure.'),(0,n.kt)("p",null,"In addition, ORDA objects such as entity selections or entities can be easily bound to UI objects such as list boxes or variables. Combined with powerful features such as the ",(0,n.kt)("inlineCode",{parentName:"p"},"This")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Form")," commands, they allow the building modern and modular interfaces based upon objects and collections."),(0,n.kt)("h2",r({},{id:"como-utilizar-orda"}),"Como utilizar ORDA?"),(0,n.kt)("p",null,"Basicamente, o ORDA lida com objetos. No ORDA, todos os conceitos principais, incluindo o pr\xf3prio datastore, est\xe3o dispon\xedveis atrav\xe9s de objectos. In 4D, the datastore is automatically ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/ORDA/dsmapping"}),"mapped upon the 4D structure"),"."),(0,n.kt)("p",null,"ORDA objects can be handled like 4D standard objects, but they automatically benefit from specific properties and methods."),(0,n.kt)("p",null,"ORDA objects are created and instanciated when necessary by 4D methods (you do not need to create them). However, ORDA data model objects are associated with ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/ORDA/ordaClasses"}),"classes where you can add custom functions"),"."))}u.isMDXComponent=!0}}]);