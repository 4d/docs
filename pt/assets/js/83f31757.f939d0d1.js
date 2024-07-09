/*! For license information please see 83f31757.f939d0d1.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[56657],{959221:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=t(474848),o=t(28453);const r={id:"attributes",title:"$attributes"},a=void 0,i={id:"REST/attributes",title:"$attributes",description:"Permite selecionar os atributos relacionados que deseja obter da classe de dados (por exemplo, Company(1)?$attributes=employees.lastname ou Employee?$attributes=employer.name).",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/REST/$attributes.md",sourceDirName:"REST",slug:"/REST/attributes",permalink:"/docs/pt/18/REST/attributes",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24attributes.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"attributes",title:"$attributes"},sidebar:"docs",previous:{title:"$atomic/$atOnce",permalink:"/docs/pt/18/REST/atomic_$atonce"},next:{title:"$binary",permalink:"/docs/pt/18/REST/binary"}},d={},l=[{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o",level:2},{value:"Exemplo com entidades relacionadas",id:"Exemplo-com-entidades-relacionadas",level:2},{value:"Exemplo com entidade relacionada",id:"Exemplo-com-entidade-relacionada",level:2}];function c(e){const s={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["Permite selecionar os atributos relacionados que deseja obter da classe de dados (",(0,n.jsx)(s.em,{children:"por exemplo"}),", ",(0,n.jsx)(s.code,{children:"Company(1)?$attributes=employees.lastname"})," ou ",(0,n.jsx)(s.code,{children:"Employee?$attributes=employer.name"}),")."]}),"\n",(0,n.jsx)(s.h2,{id:"Descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(s.p,{children:["Quando tiver atributos de rela\xe7\xe3o numa classe de dados, utilize ",(0,n.jsx)(s.code,{children:"$attributes"})," para definir o caminho dos atributos cujos valores pretende obter para a entidade ou entidades relacionadas."]}),"\n",(0,n.jsxs)(s.p,{children:["\xc9 poss\xedvel aplicar ",(0,n.jsx)(s.code,{children:"$attributes"})," a uma entidade (",(0,n.jsx)(s.em,{children:"por exemplo"}),", People(1)) ou a uma sele\xe7\xe3o de entidades (",(0,n.jsx)(s.em,{children:"por exemplo"}),", People/$entityset/0AF4679A5C394746BFEB68D2162A19FF) ."]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Se ",(0,n.jsx)(s.code,{children:"$attributes"}),' n\xe3o for especificado numa consulta, ou se for passado o valor "*", s\xe3o extra\xeddos todos os atributos dispon\xedveis. ',(0,n.jsx)(s.strong,{children:"Os atributos da entidade relacionada"})," s\xe3o extra\xeddos de forma simples: um objeto com a propriedade ",(0,n.jsx)(s.code,{children:"__KEY"})," (chave prim\xe1ria) e ",(0,n.jsx)(s.code,{children:"URI"}),". Atributos de ",(0,n.jsx)(s.strong,{children:"Entidades relacionadas"}),"  n\xe3o s\xe3o extra\xeddos."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Se ",(0,n.jsx)(s.code,{children:"$attributes"})," for especificado para atributos de ",(0,n.jsx)(s.strong,{children:"entidade relacionada"}),":"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"$attributes=relatedEntity"}),": a entidade relacionada \xe9 devolvida com um formul\xe1rio simples (propriedade __KEY diferida (chave prim\xe1ria)) e ",(0,n.jsx)(s.code,{children:"URI"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"$attributes=relatedEntity.*"}),": todos os atributos da entidade relacionada s\xe3o devolvidos"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"$attributes=relatedEntity.attributePath1, relatedEntity.attributePath2, ..."}),": s\xf3 s\xe3o devolvidos os atributos da entidade relacionada."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Se ",(0,n.jsx)(s.code,{children:"$attributes"})," for especificado para ",(0,n.jsx)(s.strong,{children:"entidades relacionadas"})," atributos:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"$attributes=relatedEntities.*"}),": todas as propriedades de todas as entidades relacionadas s\xe3o devolvidas"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"$attributes=relatedEntities.attributePath1, relatedEntities.attributePath2, ..."}),": s\xf3 s\xe3o devolvidos os atributos das entidades relacionadas."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"Exemplo-com-entidades-relacionadas",children:"Exemplo com entidades relacionadas"}),"\n",(0,n.jsx)(s.p,{children:'Se passarmos a peti\xe7\xe3o REST seguinte para nossa classe de dados Company (que tem um atributo de rela\xe7\xe3o "empregados"):'}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"GET  /rest/Company(1)/?$attributes=employees.lastname"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Resposta"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:'{\n    "__entityModel": "Company",\n    "__KEY": "1",  \n    "__TIMESTAMP": "2018-04-25T14:41:16.237Z",\n    "__STAMP": 2,\n    "employees": {\n        "__ENTITYSET": "/rest/Company(1)/employees?$expand=employees",\n        "__GlobalStamp": 50,\n        "__COUNT": 135,\n        "__FIRST": 0,\n        "__ENTITIES": [\n            {\n                "__KEY": "1",\n                "__TIMESTAMP": "2019-12-01T20:18:26.046Z",\n                "__STAMP": 5,\n                "lastname": "ESSEAL"\n            },\n            {\n                "__KEY": "2",\n                "__TIMESTAMP": "2019-12-04T10:58:42.542Z",\n                "__STAMP": 6,\n                "lastname": "JONES"\n            },\n            ...\n    }\n}\n'})}),"\n",(0,n.jsx)(s.p,{children:"Se se pretender obter todos os atributos dos empregados:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"GET  /rest/Company(1)/?$attributes=employees.*"})}),"\n",(0,n.jsx)(s.p,{children:"Se pretender obter os atributos apelido e nome da profiss\xe3o dos empregados:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"GET  /rest/Company(1)/?$attributes=employees.lastname,employees.jobname"})}),"\n",(0,n.jsx)(s.h2,{id:"Exemplo-com-entidade-relacionada",children:"Exemplo com entidade relacionada"}),"\n",(0,n.jsx)(s.p,{children:'Se passarmos a peti\xe7\xe3o REST seguinte para nossa classe de dados Employee (que tem v\xe1rios atributos relacionais, incluindo "employer"):'}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"GET  /rest/Employee(1)?$attributes=employer.name"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Resposta"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:'{\n    "__entityModel": "Employee",\n    "__KEY": "1",\n    "__TIMESTAMP": "2019-12-01T20:18:26.046Z",\n    "__STAMP": 5,\n    "employer": {\n        "__KEY": "1",\n        "__TIMESTAMP": "2018-04-25T14:41:16.237Z",\n        "__STAMP": 0,\n        "name": "Adobe"\n    }\n}\n'})}),"\n",(0,n.jsx)(s.p,{children:"Se quiser obter todos os atributos do empregador:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"GET  /rest/Employee(1)?$attributes=employer.*"})}),"\n",(0,n.jsx)(s.p,{children:"Se quiser obter os sobrenomes de todos os funcion\xe1rios da empresa:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"GET  /rest/Employee(1)?$attributes=employer.employees.lastname"})})]})}function p(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},221020:(e,s,t)=>{var n=t(296540),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,t){var n,r={},l=null,c=null;for(n in void 0!==t&&(l=""+t),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(c=s.ref),s)a.call(s,n)&&!d.hasOwnProperty(n)&&(r[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===r[n]&&(r[n]=s[n]);return{$$typeof:o,type:e,key:l,ref:c,props:r,_owner:i.current}}s.Fragment=r,s.jsx=l,s.jsxs=l},474848:(e,s,t)=>{e.exports=t(221020)},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>i});var n=t(296540);const o={},r=n.createContext(o);function a(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);