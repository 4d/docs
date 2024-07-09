/*! For license information please see 49983baf.5dadd2a9.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71487],{25750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=n(474848),a=n(28453);const r={id:"attributes",title:"$attributes"},o=void 0,i={id:"REST/attributes",title:"$attributes",description:"Permite seleccionar los atributos relacionales a obtener de la dataclass (por ejemplo, Company(1)?$attributes=employees.lastname o Employee?$attributes=employer.name).",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/REST/$attributes.md",sourceDirName:"REST",slug:"/REST/attributes",permalink:"/docs/pt/REST/attributes",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24attributes.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"attributes",title:"$attributes"},sidebar:"docs",previous:{title:"$atomic/$atOnce",permalink:"/docs/pt/REST/atomic_$atonce"},next:{title:"$binary",permalink:"/docs/pt/REST/binary"}},d={},l=[{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o",level:2},{value:"Exemplo com entidades relacionadas",id:"Exemplo-com-entidades-relacionadas",level:2},{value:"Exemplo com entidade relacionada",id:"Exemplo-com-entidade-relacionada",level:2}];function c(e){const t={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Permite seleccionar los atributos relacionales a obtener de la dataclass (",(0,s.jsx)(t.em,{children:"por ejemplo"}),", ",(0,s.jsx)(t.code,{children:"Company(1)?$attributes=employees.lastname"})," o ",(0,s.jsx)(t.code,{children:"Employee?$attributes=employer.name"}),")."]}),"\n",(0,s.jsx)(t.h2,{id:"Descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(t.p,{children:["Cuando tenga atributos relacionales en una dataclass, utilice ",(0,s.jsx)(t.code,{children:"$attributes"})," para definir la ruta de los atributos cuyos valores desea obtener para la entidad o entidades relacionadas."]}),"\n",(0,s.jsxs)(t.p,{children:["Puede aplicar ",(0,s.jsx)(t.code,{children:"$attributes"})," a una entidad (",(0,s.jsx)(t.em,{children:"p. Ej."}),", People(1)) o una entity selection (",(0,s.jsx)(t.em,{children:"p. Ej."}),", People/$entityset/0AF4679A5C394746BFEB68D2162A19FF)."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Si ",(0,s.jsx)(t.code,{children:"$attributes"}),' no se especifica en una consulta, o si se pasa el valor "*", se extraen todos los atributos disponibles. Los atributos **de entidad relacionada ** se extraen con la forma simple: un objeto con la propiedad ',(0,s.jsx)(t.code,{children:"__KEY"})," (llave primaria) y ",(0,s.jsx)(t.code,{children:"URI"}),". Los atributos de las ",(0,s.jsx)(t.strong,{children:"entidades relacionadas"})," no se extraen."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Si se especifica ",(0,s.jsx)(t.code,{children:"$attributes"})," para los atributos ",(0,s.jsx)(t.strong,{children:"de entidad relacionada"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"$attributes=relatedEntity"}),": se devuelve la entidad relacionada con forma simple (propiedad __KEY diferida (llave primaria)) y ",(0,s.jsx)(t.code,{children:"URI"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"$attributes=relatedEntity.*"}),": se devuelven todos los atributos de la entidad relacionada"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"$attributes=relatedEntity.attributePath1, relatedEntity.attributePath2, ..."}),": s\xf3lo se devuelven los atributos de la entidad relacionada."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Si se especifica ",(0,s.jsx)(t.code,{children:"$attributes"})," para los atributos ",(0,s.jsx)(t.strong,{children:"de entidades relacionadas"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"$attributes=relatedEntities.*"}),": se devuelven todas las propiedades de todas las entidades relacionadas"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"$attributes=relatedEntities.attributePath1, relatedEntities.attributePath2, ..."}),": s\xf3lo se devuelven los atributos de las entidades relacionadas."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"Exemplo-com-entidades-relacionadas",children:"Exemplo com entidades relacionadas"}),"\n",(0,s.jsx)(t.p,{children:'Se passarmos a peti\xe7\xe3o REST seguinte para nossa classe de dados Company (que tem um atributo de rela\xe7\xe3o "empregados"):'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"GET  /rest/Company(1)/?$attributes=employees.lastname"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Response"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'{\n    "__entityModel": "Company",\n    "__KEY": "1",  \n    "__TIMESTAMP": "2018-04-25T14:41:16.237Z",\n    "__STAMP": 2,\n    "employees": {\n\t\t"__ENTITYSET": "/rest/Company(1)/employees?$expand=employees",\n\t\t"__GlobalStamp": 50,\n\t\t"__COUNT": 135,\n\t\t"__FIRST": 0,\n\t\t"__ENTITIES": [\n\t\t\t{\n\t\t\t\t"__KEY": "1",\n\t\t\t\t"__TIMESTAMP": "2019-12-01T20:18:26.046Z",\n\t\t\t\t"__STAMP": 5,\n\t\t\t\t"lastname": "ESSEAL"\n\t\t\t},\n\t\t\t{\n\t\t\t\t"__KEY": "2",\n\t\t\t\t"__TIMESTAMP": "2019-12-04T10:58:42.542Z",\n\t\t\t\t"__STAMP": 6,\n\t\t\t\t"lastname": "JONES"\n\t\t\t},\n\t\t\t...\n    }\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"Se se pretender obter todos os atributos dos empregados:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"GET  /rest/Company(1)/?$attributes=employees.*"})}),"\n",(0,s.jsx)(t.p,{children:"Se pretender obter os atributos apelido e nome da profiss\xe3o dos empregados:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"GET  /rest/Company(1)/?$attributes=employees.lastname,employees.jobname"})}),"\n",(0,s.jsx)(t.h2,{id:"Exemplo-com-entidade-relacionada",children:"Exemplo com entidade relacionada"}),"\n",(0,s.jsx)(t.p,{children:'Se passarmos a peti\xe7\xe3o REST seguinte para nossa classe de dados Employee (que tem v\xe1rios atributos relacionais, incluindo "employer"):'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"GET  /rest/Employee(1)?$attributes=employer.name"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Response"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'{\n\t"__entityModel": "Employee",\n\t"__KEY": "1",\n\t"__TIMESTAMP": "2019-12-01T20:18:26.046Z",\n\t"__STAMP": 5,\n\t"employer": {\n\t\t"__KEY": "1",\n\t\t"__TIMESTAMP": "2018-04-25T14:41:16.237Z",\n\t\t"__STAMP": 0,\n\t\t"name": "Adobe"\n\t}\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"Se quiser obter todos os atributos do empregador:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"GET  /rest/Employee(1)?$attributes=employer.*"})}),"\n",(0,s.jsx)(t.p,{children:"Se quiser obter os sobrenomes de todos os funcion\xe1rios da empresa:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"GET  /rest/Employee(1)?$attributes=employer.employees.lastname"})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},221020:(e,t,n)=>{var s=n(296540),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var s,r={},l=null,c=null;for(s in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,s)&&!d.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===r[s]&&(r[s]=t[s]);return{$$typeof:a,type:e,key:l,ref:c,props:r,_owner:i.current}}t.Fragment=r,t.jsx=l,t.jsxs=l},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(296540);const a={},r=s.createContext(a);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);