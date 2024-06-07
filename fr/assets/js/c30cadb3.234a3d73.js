"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[85214],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,b=c["".concat(o,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(b,l(l({ref:t},u),{},{components:n})):r.createElement(b,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},29724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});n(667294);var r=n(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"attributes",title:"$attributes"},s=void 0,o={unversionedId:"REST/attributes",id:"version-20/REST/attributes",title:"$attributes",description:"Permet de s\xe9lectionner les attributs relationnels \xe0 obtenir \xe0 partir de la dataclass (par exemple, Company(1)?$attributes=employees.lastname or Employee?$attributes=employer.name).",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/REST/$attributes.md",sourceDirName:"REST",slug:"/REST/attributes",permalink:"/docs/fr/20/REST/attributes",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24attributes.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"attributes",title:"$attributes"},sidebar:"docs",previous:{title:"$atomic/$atOnce",permalink:"/docs/fr/20/REST/atomic_$atonce"},next:{title:"$binary",permalink:"/docs/fr/20/REST/binary"}},p={},u=[{value:"Description",id:"description",level:2},{value:"Exemple avec plusieurs entit\xe9s li\xe9es",id:"exemple-avec-plusieurs-entit\xe9s-li\xe9es",level:2},{value:"Exemple avec une entit\xe9 li\xe9e",id:"exemple-avec-une-entit\xe9-li\xe9e",level:2}],m={toc:u};function c(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Permet de s\xe9lectionner les attributs relationnels \xe0 obtenir \xe0 partir de la dataclass (par exemple, ",(0,r.kt)("inlineCode",{parentName:"p"},"Company(1)?$attributes=employees.lastname")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Employee?$attributes=employer.name"),")."),(0,r.kt)("h2",a({},{id:"description"}),"Description"),(0,r.kt)("p",null,"Lorsque vous avez des attributs relationnels dans une dataclass, utilisez ",(0,r.kt)("inlineCode",{parentName:"p"},"$attributes")," pour d\xe9finir le chemin des attributs dont vous souhaitez obtenir les valeurs pour l'entit\xe9 ou les entit\xe9s associ\xe9es."),(0,r.kt)("p",null,"Vous pouvez appliquer des ",(0,r.kt)("inlineCode",{parentName:"p"},"$attributes")," \xe0 une entit\xe9 (par exemple, People (1)) ou \xe0 une entity selection (par exemple, People/$entityset/0AF4679A5C394746BFEB68D2162A19FF)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Si ",(0,r.kt)("inlineCode",{parentName:"p"},"$attributes"),' n\'est pas sp\xe9cifi\xe9 dans une requ\xeate, ou si la valeur "*" est pass\xe9e, tous les attributs disponibles sont extraits. Les attributs ',(0,r.kt)("strong",{parentName:"p"},"d'entit\xe9 relative")," sont extraits avec la forme simple : un objet avec la propri\xe9t\xe9 ",(0,r.kt)("inlineCode",{parentName:"p"},"__KEY")," (cl\xe9 primaire) et ",(0,r.kt)("inlineCode",{parentName:"p"},"URI"),". Les attributs des ",(0,r.kt)("strong",{parentName:"p"},"entit\xe9s relatives")," ne sont pas extraits.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Si ",(0,r.kt)("inlineCode",{parentName:"p"},"$attributes")," est sp\xe9cifi\xe9 pour les attributs ",(0,r.kt)("strong",{parentName:"p"},"d'entit\xe9 relative ")," :"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$attributes=relatedEntity")," : l'entit\xe9 relative est retourn\xe9e sous une forme simple (propri\xe9t\xe9 __KEY diff\xe9r\xe9e (cl\xe9 primaire)) et ",(0,r.kt)("inlineCode",{parentName:"li"},"URI"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$attributes=relatedEntity.*")," : tous les attributs de l'entit\xe9 relative sont retourn\xe9s"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$attributes=relatedEntity.attributePath1, relatedEntity.attributePath2, ...")," : seuls ces attributs de l'entit\xe9 relative sont retourn\xe9s.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Si ",(0,r.kt)("inlineCode",{parentName:"li"},"$attributes")," est sp\xe9cifi\xe9 pour les attributs ",(0,r.kt)("strong",{parentName:"li"},"d'entit\xe9s relatives")," :",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$attributes=relatedEntities.*")," : toutes les propri\xe9t\xe9s des entit\xe9s relatives sont retourn\xe9es"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$attributes=relatedEntities.attributePath1, relatedEntity.attributePath2, ...")," : seuls ces attributs des entit\xe9s relatives sont retourn\xe9s.")))),(0,r.kt)("h2",a({},{id:"exemple-avec-plusieurs-entit\xe9s-li\xe9es"}),"Exemple avec plusieurs entit\xe9s li\xe9es"),(0,r.kt)("p",null,'Si nous ex\xe9cutons la requ\xeate REST suivante pour la dataclass Company (qui poss\xe8de un attribut relatif "employees"):'),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(1)/?$attributes=employees.lastname")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"R\xe9ponse")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'{\n    "__entityModel": "Company",\n    "__KEY": "1",  \n    "__TIMESTAMP": "2018-04-25T14:41:16.237Z",\n    "__STAMP": 2,\n    "employees": {\n        "__ENTITYSET": "/rest/Company(1)/employees?$expand=employees",\n        "__GlobalStamp": 50,\n        "__COUNT": 135,\n        "__FIRST": 0,\n        "__ENTITIES": [\n            {\n                "__KEY": "1",\n                "__TIMESTAMP": "2019-12-01T20:18:26.046Z",\n                "__STAMP": 5,\n                "lastname": "ESSEAL"\n            },\n            {\n                "__KEY": "2",\n                "__TIMESTAMP": "2019-12-04T10:58:42.542Z",\n                "__STAMP": 6,\n                "lastname": "JONES"\n            },\n            ...\n    }\n}\n')),(0,r.kt)("p",null,"Si vous souhaitez obtenir tous les attributs des employ\xe9s :"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(1)/?$attributes=employees.*")),(0,r.kt)("p",null,"Si vous souhaitez obtenir le nom de famille et les attributs de nom de poste des employ\xe9s :"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(1)/?$attributes=employees.lastname,employees.jobname")),(0,r.kt)("h2",a({},{id:"exemple-avec-une-entit\xe9-li\xe9e"}),"Exemple avec une entit\xe9 li\xe9e"),(0,r.kt)("p",null,'Si nous passons la requ\xeate REST suivante pour la dataclass Employee (qui a plusieurs attributs relationnels, y compris "employer") :'),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)?$attributes=employer.name")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"R\xe9ponse")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'{\n    "__entityModel": "Employee",\n    "__KEY": "1",\n    "__TIMESTAMP": "2019-12-01T20:18:26.046Z",\n    "__STAMP": 5,\n    "employer": {\n        "__KEY": "1",\n        "__TIMESTAMP": "2018-04-25T14:41:16.237Z",\n        "__STAMP": 0,\n        "name": "Adobe"\n    }\n}\n')),(0,r.kt)("p",null,"Si vous souhaitez obtenir tous les attributs de l'employeur :"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)?$attributes=employer.*")),(0,r.kt)("p",null,"Si vous souhaitez obtenir les noms de famille de tous les employ\xe9s de l'employeur :"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)?$attributes=employer.employees.lastname")))}c.isMDXComponent=!0}}]);