"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7194"],{863532:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>r,metadata:()=>s,assets:()=>o,toc:()=>d,contentTitle:()=>l});var s=JSON.parse('{"id":"REST/attributes","title":"$attributes","description":"Permite seleccionar los atributos relacionales a obtener de la dataclass (por ejemplo, Company(1)?$attributes=employees.lastname o Employee?$attributes=employer.name).","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-19/REST/$attributes.md","sourceDirName":"REST","slug":"/REST/attributes","permalink":"/docs/es/19/REST/attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24attributes.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"attributes","title":"$attributes"},"sidebar":"docs","previous":{"title":"$atomic/$atOnce","permalink":"/docs/es/19/REST/atomic_$atonce"},"next":{"title":"$binary","permalink":"/docs/es/19/REST/binary"}}'),a=t("785893"),i=t("250065");let r={id:"attributes",title:"$attributes"},l=void 0,o={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo con varias entidades relacionadas",id:"ejemplo-con-varias-entidades-relacionadas",level:2},{value:"Ejemplo con una entidad relacionada",id:"ejemplo-con-una-entidad-relacionada",level:2}];function c(e){let n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Permite seleccionar los atributos relacionales a obtener de la dataclass (",(0,a.jsx)(n.em,{children:"por ejemplo"}),", ",(0,a.jsx)(n.code,{children:"Company(1)?$attributes=employees.lastname"})," o ",(0,a.jsx)(n.code,{children:"Employee?$attributes=employer.name"}),")."]}),"\n",(0,a.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["Cuando tenga atributos relacionales en una dataclass, utilice ",(0,a.jsx)(n.code,{children:"$attributes"})," para definir la ruta de los atributos cuyos valores desea obtener para la entidad o entidades relacionadas."]}),"\n",(0,a.jsxs)(n.p,{children:["Puede aplicar ",(0,a.jsx)(n.code,{children:"$attributes"})," a una entidad (",(0,a.jsx)(n.em,{children:"p. Ej."}),", People(1)) o una entity selection (",(0,a.jsx)(n.em,{children:"p. Ej."}),", People/$entityset/0AF4679A5C394746BFEB68D2162A19FF)."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Si ",(0,a.jsx)(n.code,{children:"$attributes"}),' no se especifica en una consulta, o si se pasa el valor "*", se extraen todos los atributos disponibles. Los atributos **de entidad relacionada ** se extraen con la forma simple: un objeto con la propiedad ',(0,a.jsx)(n.code,{children:"__KEY"})," (llave primaria) y ",(0,a.jsx)(n.code,{children:"URI"}),". Los atributos de las ",(0,a.jsx)(n.strong,{children:"entidades relacionadas"})," no se extraen."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Si se especifica ",(0,a.jsx)(n.code,{children:"$attributes"})," para los atributos ",(0,a.jsx)(n.strong,{children:"de entidad relacionada"}),":"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$attributes=relatedEntity"}),": se devuelve la entidad relacionada con forma simple (propiedad __KEY diferida (llave primaria)) y ",(0,a.jsx)(n.code,{children:"URI"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$attributes=relatedEntity.*"}),": se devuelven todos los atributos de la entidad relacionada"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$attributes=relatedEntity.attributePath1, relatedEntity.attributePath2, ..."}),": s\xf3lo se devuelven los atributos de la entidad relacionada."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Si se especifica ",(0,a.jsx)(n.code,{children:"$attributes"})," para los atributos ",(0,a.jsx)(n.strong,{children:"de entidades relacionadas"}),":"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$attributes=relatedEntities.*"}),": se devuelven todas las propiedades de todas las entidades relacionadas"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$attributes=relatedEntities.attributePath1, relatedEntities.attributePath2, ..."}),": s\xf3lo se devuelven los atributos de las entidades relacionadas."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"ejemplo-con-varias-entidades-relacionadas",children:"Ejemplo con varias entidades relacionadas"}),"\n",(0,a.jsx)(n.p,{children:'Si pasamos la petici\xf3n REST siguiente para nuestra clase de datos Company (que tiene un atributo de relaci\xf3n "empleados"):'}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Company(1)/?$attributes=employees.lastname"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Respuesta"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    "__entityModel": "Company",\n    "__KEY": "1",  \n    "__TIMESTAMP": "2018-04-25T14:41:16.237Z",\n    "__STAMP": 2,\n    "employees": {\n        "__ENTITYSET": "/rest/Company(1)/employees?$expand=employees",\n        "__GlobalStamp": 50,\n        "__COUNT": 135,\n        "__FIRST": 0,\n        "__ENTITIES": [\n            {\n                "__KEY": "1",\n                "__TIMESTAMP": "2019-12-01T20:18:26.046Z",\n                "__STAMP": 5,\n                "lastname": "ESSEAL"\n            },\n            {\n                "__KEY": "2",\n                "__TIMESTAMP": "2019-12-04T10:58:42.542Z",\n                "__STAMP": 6,\n                "lastname": "JONES"\n            },\n            ...\n    }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Si desea obtener todos los atributos de los empleados:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Company(1)/?$attributes=employees.*"})}),"\n",(0,a.jsx)(n.p,{children:"Si quiere obtener el apellido y los atributos de nombre del trabajo de los empleados:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Company(1)/?$attributes=employees.lastname,employees.jobname"})}),"\n",(0,a.jsx)(n.h2,{id:"ejemplo-con-una-entidad-relacionada",children:"Ejemplo con una entidad relacionada"}),"\n",(0,a.jsx)(n.p,{children:'Si pasamos la petici\xf3n REST siguiente para nuestra clase de datos Employee (que tiene varios atributos relacionales, incluyendo "employer"):'}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Employee(1)?$attributes=employer.name"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Respuesta"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    "__entityModel": "Employee",\n    "__KEY": "1",\n    "__TIMESTAMP": "2019-12-01T20:18:26.046Z",\n    "__STAMP": 5,\n    "employer": {\n        "__KEY": "1",\n        "__TIMESTAMP": "2018-04-25T14:41:16.237Z",\n        "__STAMP": 0,\n        "name": "Adobe"\n    }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Si desea obtener todos los atributos del empleador:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Employee(1)?$attributes=employer.*"})}),"\n",(0,a.jsx)(n.p,{children:"Si desea obtener los apellidos de todos los empleados de la empresa:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Employee(1)?$attributes=employer.employees.lastname"})})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var s=t(667294);let a={},i=s.createContext(a);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);