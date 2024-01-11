"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34370],{603905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,b=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return a?n.createElement(b,i(i({ref:t},d),{},{components:a})):n.createElement(b,i({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},396977:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});a(667294);var n=a(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={id:"attributes",title:"$attributes"},l=void 0,s={unversionedId:"REST/attributes",id:"version-20/REST/attributes",title:"$attributes",description:"Permite selecionar os atributos relacionados que deseja obter da classe de dados (por exemplo, Company(1)?$attributes=employees.lastname ou Employee?$attributes=employer.name).",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/REST/$attributes.md",sourceDirName:"REST",slug:"/REST/attributes",permalink:"/docs/pt/20/REST/attributes",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24attributes.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"attributes",title:"$attributes"},sidebar:"docs",previous:{title:"$atomic/$atOnce",permalink:"/docs/pt/20/REST/atomic_$atonce"},next:{title:"$binary",permalink:"/docs/pt/20/REST/binary"}},p={},d=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo com entidades relacionadas",id:"exemplo-com-entidades-relacionadas",level:2},{value:"Exemplo com entidade relacionada",id:"exemplo-com-entidade-relacionada",level:2}],m={toc:d};function u(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",r({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Permite selecionar os atributos relacionados que deseja obter da classe de dados (",(0,n.kt)("em",{parentName:"p"},"por exemplo"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Company(1)?$attributes=employees.lastname")," ou ",(0,n.kt)("inlineCode",{parentName:"p"},"Employee?$attributes=employer.name"),")."),(0,n.kt)("h2",r({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"Quando tiver atributos de rela\xe7\xe3o numa classe de dados, utilize ",(0,n.kt)("inlineCode",{parentName:"p"},"$attributes")," para definir o caminho dos atributos cujos valores pretende obter para a entidade ou entidades relacionadas."),(0,n.kt)("p",null,"\xc9 poss\xedvel aplicar ",(0,n.kt)("inlineCode",{parentName:"p"},"$attributes")," a uma entidade (",(0,n.kt)("em",{parentName:"p"},"por exemplo"),", People(1)) ou a uma sele\xe7\xe3o de entidades (",(0,n.kt)("em",{parentName:"p"},"por exemplo"),", People/$entityset/0AF4679A5C394746BFEB68D2162A19FF) ."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Se ",(0,n.kt)("inlineCode",{parentName:"p"},"$attributes"),' n\xe3o for especificado numa consulta, ou se for passado o valor "*", s\xe3o extra\xeddos todos os atributos dispon\xedveis. ',(0,n.kt)("strong",{parentName:"p"},"Os atributos da entidade relacionada")," s\xe3o extra\xeddos de forma simples: um objeto com a propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},"__KEY")," (chave prim\xe1ria) e ",(0,n.kt)("inlineCode",{parentName:"p"},"URI"),". Atributos de ",(0,n.kt)("strong",{parentName:"p"},"Entidades relacionadas"),"  n\xe3o s\xe3o extra\xeddos.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Se ",(0,n.kt)("inlineCode",{parentName:"p"},"$attributes")," for especificado para atributos de ",(0,n.kt)("strong",{parentName:"p"},"entidade relacionada"),":"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$attributes=relatedEntity"),": a entidade relacionada \xe9 devolvida com um formul\xe1rio simples (propriedade __KEY diferida (chave prim\xe1ria)) e ",(0,n.kt)("inlineCode",{parentName:"li"},"URI"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$attributes=relatedEntity.*"),": todos os atributos da entidade relacionada s\xe3o devolvidos"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$attributes=relatedEntity.attributePath1, relatedEntity.attributePath2, ..."),": s\xf3 s\xe3o devolvidos os atributos da entidade relacionada.")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Se ",(0,n.kt)("inlineCode",{parentName:"li"},"$attributes")," for especificado para ",(0,n.kt)("strong",{parentName:"li"},"entidades relacionadas")," atributos:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$attributes=relatedEntities.*"),": todas as propriedades de todas as entidades relacionadas s\xe3o devolvidas"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$attributes=relatedEntities.attributePath1, relatedEntities.attributePath2, ..."),": s\xf3 s\xe3o devolvidos os atributos das entidades relacionadas.")))),(0,n.kt)("h2",r({},{id:"exemplo-com-entidades-relacionadas"}),"Exemplo com entidades relacionadas"),(0,n.kt)("p",null,'Se passarmos a peti\xe7\xe3o REST seguinte para nossa classe de dados Company (que tem um atributo de rela\xe7\xe3o "empregados"):'),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(1)/?$attributes=employees.lastname")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resposta"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'{\n    "__entityModel": "Company",\n    "__KEY": "1",  \n    "__TIMESTAMP": "2018-04-25T14:41:16.237Z",\n    "__STAMP": 2,\n    "employees": {\n        "__ENTITYSET": "/rest/Company(1)/employees?$expand=employees",\n        "__GlobalStamp": 50,\n        "__COUNT": 135,\n        "__FIRST": 0,\n        "__ENTITIES": [\n            {\n                "__KEY": "1",\n                "__TIMESTAMP": "2019-12-01T20:18:26.046Z",\n                "__STAMP": 5,\n                "lastname": "ESSEAL"\n            },\n            {\n                "__KEY": "2",\n                "__TIMESTAMP": "2019-12-04T10:58:42.542Z",\n                "__STAMP": 6,\n                "lastname": "JONES"\n            },\n            ...\n    }\n}\n')),(0,n.kt)("p",null,"Se se pretender obter todos os atributos dos empregados:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(1)/?$attributes=employees.*")),(0,n.kt)("p",null,"Se pretender obter os atributos apelido e nome da profiss\xe3o dos empregados:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(1)/?$attributes=employees.lastname,employees.jobname")),(0,n.kt)("h2",r({},{id:"exemplo-com-entidade-relacionada"}),"Exemplo com entidade relacionada"),(0,n.kt)("p",null,'Se passarmos a peti\xe7\xe3o REST seguinte para nossa classe de dados Employee (que tem v\xe1rios atributos relacionais, incluindo "employer"):'),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)?$attributes=employer.name")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resposta"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'{\n    "__entityModel": "Employee",\n    "__KEY": "1",\n    "__TIMESTAMP": "2019-12-01T20:18:26.046Z",\n    "__STAMP": 5,\n    "employer": {\n        "__KEY": "1",\n        "__TIMESTAMP": "2018-04-25T14:41:16.237Z",\n        "__STAMP": 0,\n        "name": "Adobe"\n    }\n}\n')),(0,n.kt)("p",null,"Se quiser obter todos os atributos do empregador:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)?$attributes=employer.*")),(0,n.kt)("p",null,"Se quiser obter os sobrenomes de todos os funcion\xe1rios da empresa:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)?$attributes=employer.employees.lastname")))}u.isMDXComponent=!0}}]);