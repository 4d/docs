"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["71054"],{840258:function(e,a,t){t.r(a),t.d(a,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>r});var s=JSON.parse('{"id":"ORDA/overview","title":"ORDA","description":"ORDA significa Object Relational Data Access. It is an enhanced technology allowing to access both the model and the data of a database through objects.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/ORDA/overview.md","sourceDirName":"ORDA","slug":"/ORDA/overview","permalink":"/docs/pt/ORDA/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Foverview.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"overview","title":"ORDA"},"sidebar":"docs","previous":{"title":"Arquivo de hist\xf3rico","permalink":"/docs/pt/Debugging/debugLogFiles"},"next":{"title":"Objetos Data Model","permalink":"/docs/pt/ORDA/dsmapping"}}'),n=t("785893"),o=t("250065");let i={id:"overview",title:"ORDA"},r=void 0,d={},c=[{value:"Porqu\xea utilizar ORDA?",id:"porqu\xea-utilizar-orda",level:2},{value:"Como utilizar ORDA?",id:"como-utilizar-orda",level:2}];function l(e){let a={a:"a",code:"code",h2:"h2",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["ORDA significa ",(0,n.jsx)(a.strong,{children:"Object Relational Data Access"}),". It is an enhanced technology allowing to access both the model and the data of a database through objects."]}),"\n",(0,n.jsxs)(a.p,{children:["Las relaciones se incluyen de forma transparente en el concepto, en combinaci\xf3n con el principio del ",(0,n.jsx)(a.a,{href:"/docs/pt/ORDA/glossary#lazy-loading",children:"lazy loading"}),", para eliminar todas las molestias t\xedpicas de la selecci\xf3n o la transferencia de datos del desarrollador."]}),"\n",(0,n.jsxs)(a.p,{children:["Con ORDA, se accede a los datos a trav\xe9s de una capa de abstracci\xf3n, el ",(0,n.jsx)(a.a,{href:"/docs/pt/ORDA/dsmapping#datastore",children:"datastore"}),". A datastore is an object that provides an interface to the database model and data through objects and classes. For example, a table is mapped to a ",(0,n.jsx)(a.a,{href:"/docs/pt/ORDA/dsmapping#dataclass",children:"dataclass"})," object, a field is an ",(0,n.jsx)(a.a,{href:"/docs/pt/ORDA/dsmapping##attribute",children:"attribute"})," of a dataclass, and records are accessed through ",(0,n.jsx)(a.a,{href:"/docs/pt/ORDA/dsmapping#entity",children:"entities"})," and ",(0,n.jsx)(a.a,{href:"/docs/pt/ORDA/dsmapping#entity-selection",children:"entity selections"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"porqu\xea-utilizar-orda",children:"Porqu\xea utilizar ORDA?"}),"\n",(0,n.jsx)(a.p,{children:"Instead of representing information as tables, records, and fields, ORDA uses an alternate approach that more accurately maps data to real-world concepts."}),"\n",(0,n.jsx)(a.p,{children:"Imagine the ability to denormalize a relational structure, yet not affect efficiency. Imagine describing everything about the business objects in your application in such a way that using the data becomes simple and straightforward and removes the need for a complete understanding of the relational structure."}),"\n",(0,n.jsx)(a.p,{children:"In the ORDA data model, a single dataclass can incorporate all of the elements that make up a traditional relational database table, but can also include values from related parent entities, and direct references to related entities and entity selections."}),"\n",(0,n.jsx)(a.p,{children:'Uma consulta retorna uma lista de entidades chamada sele\xe7\xe3o de entidades, que cumpre o papel de um conjunto de linhas de uma consulta SQL. The difference is that each entity "knows" where it belongs in the data model and "understands" its relationship to all other entities. This means that a developer does not need to explain in a query how to relate the various pieces of information, nor in an update how to write modified values back to the relational structure.'}),"\n",(0,n.jsxs)(a.p,{children:["In addition, ORDA objects such as entity selections or entities can be easily bound to UI objects such as list boxes or variables. Combinadas con las funcionalidades poderosas tales como los comandos ",(0,n.jsx)(a.code,{children:"This"})," y ",(0,n.jsx)(a.code,{children:"Form"}),", permiten construir interfaces modernas y modulares basadas en objetos y colecciones."]}),"\n",(0,n.jsx)(a.h2,{id:"como-utilizar-orda",children:"Como utilizar ORDA?"}),"\n",(0,n.jsxs)(a.p,{children:["Basicamente, o ORDA lida com objetos. No ORDA, todos os conceitos principais, incluindo o pr\xf3prio datastore, est\xe3o dispon\xedveis atrav\xe9s de objectos. En 4D, el datastore es autom\xe1ticamente ",(0,n.jsx)(a.a,{href:"/docs/pt/ORDA/dsmapping",children:"mapeado sobre la estructura 4D"}),"."]}),"\n",(0,n.jsx)(a.p,{children:"ORDA objects can be handled like 4D standard objects, but they automatically benefit from specific properties and methods."}),"\n",(0,n.jsxs)(a.p,{children:["ORDA objects are created and instanciated when necessary by 4D methods (you do not need to create them). Sin embargo, los objetos del modelo de datos ORDA est\xe1n asociados a las ",(0,n.jsx)(a.a,{href:"/docs/pt/ORDA/ordaClasses",children:"clases en las que se pueden a\xf1adir funciones personalizadas"}),"."]})]})}function u(e={}){let{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,a,t){t.d(a,{Z:function(){return r},a:function(){return i}});var s=t(667294);let n={},o=s.createContext(n);function i(e){let a=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(o.Provider,{value:a},e.children)}}}]);