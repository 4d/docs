/*! For license information please see 01d682fd.1fab1822.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75848],{471635:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>_,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var i=t(474848),s=t(28453);const r={id:"clean",title:"$clean"},d=void 0,o={id:"REST/clean",title:"$clean",description:"Creates a new entity set from an existing entity set but without its deleted entities, if any (e.g. $clean=true)",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/REST/$clean.md",sourceDirName:"REST",slug:"/REST/clean",permalink:"/docs/es/REST/clean",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24clean.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"clean",title:"$clean"},sidebar:"docs",previous:{title:"$binary",permalink:"/docs/es/REST/binary"},next:{title:"$compute",permalink:"/docs/es/REST/compute"}},c={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Creates a new entity set from an existing entity set but without its deleted entities, if any (",(0,i.jsx)(n.em,{children:"e.g."})," ",(0,i.jsx)(n.code,{children:"$clean=true"}),")"]}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"$clean"})," creates a new entity set containing the same entities as ",(0,i.jsx)(n.code,{children:"entitySetID"})," but without references to deleted entities (if any)."]}),"\n",(0,i.jsxs)(n.p,{children:["By default, when an entity is ",(0,i.jsx)(n.a,{href:"/docs/es/REST/method#methoddelete",children:"deleted"}),", its reference(s) in existing entity set(s) become ",(0,i.jsx)(n.em,{children:"undefined"}),' but are not removed. Tambi\xe9n est\xe1n incluidos en la propiedad "count" del conjunto de entidades. Llamar a ',(0,i.jsx)(n.code,{children:"$clean"})," en el conjunto de entidades devuelve un nuevo conjunto de entidades actualizado sin referencias a entidades ",(0,i.jsx)(n.em,{children:"undefined"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"$clean"})," puede ser seguido por ",(0,i.jsx)(n.a,{href:"/docs/es/REST/method#methodentityset",children:(0,i.jsx)(n.code,{children:"$method=entityset"})})," para crear el nuevo conjunto de entidades en el servidor:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$clean=true&$method=entityset"})}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Creamos un conjunto de entidades:"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'GET /rest/Speciality?$filter="ID<=3"&$method=entityset'})}),"\n",(0,i.jsxs)(n.p,{children:["Se reciben tres entidades y obtenemos el conjunto de entidades ",(0,i.jsx)(n.code,{children:"DF6903FB5879404A9A818884CFC6F62A"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "__ENTITYSET": "/rest/Speciality/$entityset/DF6903FB5879404A9A818884CFC6F62A",\n  "__DATACLASS": "Speciality",\n  "__entityModel": "Speciality",\n  "__GlobalStamp": 0,\n  "__COUNT": 3,\n  "__FIRST": 0,\n  "__ENTITIES": [\n    {\n      "__KEY": "1",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 1,\n      "name": "Surgery",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[1]/infos?$expand=infos"\n        }\n      }\n    },\n    {\n      "__KEY": "2",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 2,\n      "name": "Otolaryngology",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[2]/infos?$expand=infos"\n        }\n      }\n    },\n    {\n      "__KEY": "3",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 3,\n      "name": "Dentist",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[3]/infos?$expand=infos"\n        }\n      }\n    },\n  ],\n  "__SENT": 3\n}\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Eliminamos la entidad con ",(0,i.jsx)(n.code,{children:"KEY=2"})," (ver ",(0,i.jsx)(n.a,{href:"/docs/es/REST/method#methoddelete",children:"c\xf3mo eliminar una entidad"}),"), luego se env\xeda esta solicitud:"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GET /rest/Speciality/$entityset/DF6903FB5879404A9A818884CFC6F62A"})}),"\n",(0,i.jsx)(n.p,{children:"Se devuelve el conjunto de entidades y sigue conteniendo 3 entidades. Hay una entidad indefinida para la entidad eliminada (con sello = 0):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "__DATACLASS": "Speciality",\n  "__entityModel": "Speciality",\n  "__GlobalStamp": 0,\n  "__COUNT": 3,\n  "__FIRST": 0,\n  "__ENTITIES": [\n    {\n      "__KEY": "1",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 1,\n      "name": "Surgery",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[1]/infos?$expand=infos"\n        }\n      }\n    },\n    {\n      "__STAMP": 0\n    },\n    {\n      "__KEY": "3",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 3,\n      "name": "Dentist",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[3]/infos?$expand=infos"\n        }\n      }\n    },\n  ],\n  "__SENT": 3\n}\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Si se env\xeda esta petici\xf3n:"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GET /rest/Speciality/$entityset/DF6903FB5879404A9A818884CFC6F62A?$clean=true&$method=entityset"})}),"\n",(0,i.jsx)(n.p,{children:"We clean the entity set DF6903FB5879404A9A818884CFC6F62A and receive a new entity set (entity set D7BFBC49375B4FE5A94CDD17AA535F73) that does not contain the dropped entity:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "__ENTITYSET": "/rest/Speciality/$entityset/D7BFBC49375B4FE5A94CDD17AA535F73",\n  "__DATACLASS": "Speciality",\n  "__entityModel": "Speciality",\n  "__GlobalStamp": 0,\n  "__COUNT": 2,\n  "__FIRST": 0,\n  "__ENTITIES": [\n    {\n      "__KEY": "1",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 1,\n      "name": "Surgery",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[1]/infos?$expand=infos"\n        }\n      }\n    },\n    {\n      "__KEY": "3",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 3,\n      "name": "Dentist",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[3]/infos?$expand=infos"\n        }\n      }\n    }\n  ],\n  "__SENT": 2\n}\n'})})]})}function _(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},221020:(e,n,t)=>{var i=t(296540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var i,r={},a=null,l=null;for(i in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(l=n.ref),n)d.call(n,i)&&!c.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===r[i]&&(r[i]=n[i]);return{$$typeof:s,type:e,key:a,ref:l,props:r,_owner:o.current}}n.Fragment=r,n.jsx=a,n.jsxs=a},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>o});var i=t(296540);const s={},r=i.createContext(s);function d(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);