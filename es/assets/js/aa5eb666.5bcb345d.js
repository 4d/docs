/*! For license information please see aa5eb666.5bcb345d.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12503],{187548:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=t(474848),a=t(28453);const i={id:"attributes",title:"$attributes"},r=void 0,o={id:"REST/attributes",title:"$attributes",description:"Permite seleccionar los atributos relacionales a obtener de la dataclass (por ejemplo, Company(1)?$attributes=employees.lastname o Employee?$attributes=employer.name).",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/REST/$attributes.md",sourceDirName:"REST",slug:"/REST/attributes",permalink:"/docs/es/20/REST/attributes",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24attributes.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"attributes",title:"$attributes"},sidebar:"docs",previous:{title:"$atomic/$atOnce",permalink:"/docs/es/20/REST/atomic_$atonce"},next:{title:"$binary",permalink:"/docs/es/20/REST/binary"}},l={},d=[{value:"Descripci\xf3n",id:"Descripci\xf3n",level:2},{value:"Ejemplo con varias entidades relacionadas",id:"Ejemplo-con-varias-entidades-relacionadas",level:2},{value:"Ejemplo con una entidad relacionada",id:"Ejemplo-con-una-entidad-relacionada",level:2}];function c(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Permite seleccionar los atributos relacionales a obtener de la dataclass (",(0,s.jsx)(n.em,{children:"por ejemplo"}),", ",(0,s.jsx)(n.code,{children:"Company(1)?$attributes=employees.lastname"})," o ",(0,s.jsx)(n.code,{children:"Employee?$attributes=employer.name"}),")."]}),"\n",(0,s.jsx)(n.h2,{id:"Descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["Cuando tenga atributos relacionales en una dataclass, utilice ",(0,s.jsx)(n.code,{children:"$attributes"})," para definir la ruta de los atributos cuyos valores desea obtener para la entidad o entidades relacionadas."]}),"\n",(0,s.jsxs)(n.p,{children:["Puede aplicar ",(0,s.jsx)(n.code,{children:"$attributes"})," a una entidad (",(0,s.jsx)(n.em,{children:"p. Ej."}),", People(1)) o una entity selection (",(0,s.jsx)(n.em,{children:"p. Ej."}),", People/$entityset/0AF4679A5C394746BFEB68D2162A19FF)."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Si ",(0,s.jsx)(n.code,{children:"$attributes"}),' no se especifica en una consulta, o si se pasa el valor "*", se extraen todos los atributos disponibles. Los atributos **de entidad relacionada ** se extraen con la forma simple: un objeto con la propiedad ',(0,s.jsx)(n.code,{children:"__KEY"})," (llave primaria) y ",(0,s.jsx)(n.code,{children:"URI"}),". Los atributos de las ",(0,s.jsx)(n.strong,{children:"entidades relacionadas"})," no se extraen."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Si se especifica ",(0,s.jsx)(n.code,{children:"$attributes"})," para los atributos ",(0,s.jsx)(n.strong,{children:"de entidad relacionada"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$attributes=relatedEntity"}),": se devuelve la entidad relacionada con forma simple (propiedad __KEY diferida (llave primaria)) y ",(0,s.jsx)(n.code,{children:"URI"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$attributes=relatedEntity.*"}),": se devuelven todos los atributos de la entidad relacionada"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$attributes=relatedEntity.attributePath1, relatedEntity.attributePath2, ..."}),": s\xf3lo se devuelven los atributos de la entidad relacionada."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Si se especifica ",(0,s.jsx)(n.code,{children:"$attributes"})," para los atributos ",(0,s.jsx)(n.strong,{children:"de entidades relacionadas"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$attributes=relatedEntities.*"}),": se devuelven todas las propiedades de todas las entidades relacionadas"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$attributes=relatedEntities.attributePath1, relatedEntities.attributePath2, ..."}),": s\xf3lo se devuelven los atributos de las entidades relacionadas."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"Ejemplo-con-varias-entidades-relacionadas",children:"Ejemplo con varias entidades relacionadas"}),"\n",(0,s.jsx)(n.p,{children:'Si pasamos la petici\xf3n REST siguiente para nuestra clase de datos Company (que tiene un atributo de relaci\xf3n "empleados"):'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/Company(1)/?$attributes=employees.lastname"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Respuesta"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "__entityModel": "Company",\n    "__KEY": "1",  \n    "__TIMESTAMP": "2018-04-25T14:41:16.237Z",\n    "__STAMP": 2,\n    "employees": {\n        "__ENTITYSET": "/rest/Company(1)/employees?$expand=employees",\n        "__GlobalStamp": 50,\n        "__COUNT": 135,\n        "__FIRST": 0,\n        "__ENTITIES": [\n            {\n                "__KEY": "1",\n                "__TIMESTAMP": "2019-12-01T20:18:26.046Z",\n                "__STAMP": 5,\n                "lastname": "ESSEAL"\n            },\n            {\n                "__KEY": "2",\n                "__TIMESTAMP": "2019-12-04T10:58:42.542Z",\n                "__STAMP": 6,\n                "lastname": "JONES"\n            },\n            ...\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Si desea obtener todos los atributos de los empleados:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/Company(1)/?$attributes=employees.*"})}),"\n",(0,s.jsx)(n.p,{children:"Si quiere obtener el apellido y los atributos de nombre del trabajo de los empleados:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/Company(1)/?$attributes=employees.lastname,employees.jobname"})}),"\n",(0,s.jsx)(n.h2,{id:"Ejemplo-con-una-entidad-relacionada",children:"Ejemplo con una entidad relacionada"}),"\n",(0,s.jsx)(n.p,{children:'Si pasamos la petici\xf3n REST siguiente para nuestra clase de datos Employee (que tiene varios atributos relacionales, incluyendo "employer"):'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/Employee(1)?$attributes=employer.name"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Respuesta"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "__entityModel": "Employee",\n    "__KEY": "1",\n    "__TIMESTAMP": "2019-12-01T20:18:26.046Z",\n    "__STAMP": 5,\n    "employer": {\n        "__KEY": "1",\n        "__TIMESTAMP": "2018-04-25T14:41:16.237Z",\n        "__STAMP": 0,\n        "name": "Adobe"\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Si desea obtener todos los atributos del empleador:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/Employee(1)?$attributes=employer.*"})}),"\n",(0,s.jsx)(n.p,{children:"Si desea obtener los apellidos de todos los empleados de la empresa:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET  /rest/Employee(1)?$attributes=employer.employees.lastname"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},221020:(e,n,t)=>{var s=t(296540),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var s,i={},d=null,c=null;for(s in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)r.call(n,s)&&!l.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:a,type:e,key:d,ref:c,props:i,_owner:o.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(296540);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);