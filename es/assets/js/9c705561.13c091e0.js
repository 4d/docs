/*! For license information please see 9c705561.13c091e0.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[24891],{318312:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=r(474848),o=r(28453);const a={id:"asArray",title:"$asArray"},s=void 0,l={id:"REST/asArray",title:"$asArray",description:"Devuelve el resultado de una petici\xf3n en un array (es decir, una colecci\xf3n) en lugar de un objeto JSON.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/REST/$asArray.md",sourceDirName:"REST",slug:"/REST/asArray",permalink:"/docs/es/19/REST/asArray",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24asArray.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"asArray",title:"$asArray"},sidebar:"docs",previous:{title:"dataClass",permalink:"/docs/es/19/REST/dataClass"},next:{title:"$atomic/$atOnce",permalink:"/docs/es/19/REST/atomic_$atonce"}},i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Devuelve el resultado de una petici\xf3n en un array (es decir, una colecci\xf3n) en lugar de un objeto JSON."}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["Si desea obtener la respuesta en un array, s\xf3lo tiene que a\xf1adir ",(0,t.jsx)(n.code,{children:"$asArray"})," a su petici\xf3n REST (",(0,t.jsx)(n.em,{children:"e.g."}),", ",(0,t.jsx)(n.code,{children:"$asArray=true"}),")."]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"Aqu\xed hay un ejemplo de c\xf3mo recibir la respuesta en un array."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'GET  /rest/Company/?$filter="name begin a"&$top=3&$asArray=true'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Respuesta"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'[\n    {\n        "__KEY": 15,\n        "__STAMP": 0,\n        "ID": 15,\n        "name": "Alpha North Yellow",\n        "creationDate": "!!0000-00-00!!",\n        "revenues": 82000000,\n        "extra": null,\n        "comments": "",\n        "__GlobalStamp": 0\n    },\n    {\n        "__KEY": 34,\n        "__STAMP": 0,\n        "ID": 34,\n        "name": "Astral Partner November",\n        "creationDate": "!!0000-00-00!!",\n        "revenues": 90000000,\n        "extra": null,\n        "comments": "",\n        "__GlobalStamp": 0\n    },\n    {\n        "__KEY": 47,\n        "__STAMP": 0,\n        "ID": 47,\n        "name": "Audio Production Uniform",\n        "creationDate": "!!0000-00-00!!",\n        "revenues": 28000000,\n        "extra": null,\n        "comments": "",\n        "__GlobalStamp": 0\n    }\n]\n'})}),"\n",(0,t.jsx)(n.p,{children:"Los mismos datos en su formato JSON por defecto:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n    "__entityModel": "Company",\n    "__GlobalStamp": 50,\n    "__COUNT": 52,\n    "__FIRST": 0,\n    "__ENTITIES": [\n        {\n            "__KEY": "15",\n            "__TIMESTAMP": "2018-03-28T14:38:07.434Z",\n            "__STAMP": 0,\n            "ID": 15,\n            "name": "Alpha North Yellow",\n            "creationDate": "0!0!0",\n            "revenues": 82000000,\n            "extra": null,\n            "comments": "",\n            "__GlobalStamp": 0,\n            "employees": {\n                "__deferred": {\n                    "uri": "/rest/Company(15)/employees?$expand=employees"\n                }\n            }\n        },\n        {\n            "__KEY": "34",\n            "__TIMESTAMP": "2018-03-28T14:38:07.439Z",\n            "__STAMP": 0,\n            "ID": 34,\n            "name": "Astral Partner November",\n            "creationDate": "0!0!0",\n            "revenues": 90000000,\n            "extra": null,\n            "comments": "",\n            "__GlobalStamp": 0,\n            "employees": {\n                "__deferred": {\n                    "uri": "/rest/Company(34)/employees?$expand=employees"\n                }\n            }\n        },\n        {\n            "__KEY": "47",\n            "__TIMESTAMP": "2018-03-28T14:38:07.443Z",\n            "__STAMP": 0,\n            "ID": 47,\n            "name": "Audio Production Uniform",\n            "creationDate": "0!0!0",\n            "revenues": 28000000,\n            "extra": null,\n            "comments": "",\n            "__GlobalStamp": 0,\n            "employees": {\n                "__deferred": {\n                    "uri": "/rest/Company(47)/employees?$expand=employees"\n                }\n            }\n        }\n    ],\n"__SENT": 3\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},221020:(e,n,r)=>{var t=r(296540),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var t,a={},c=null,d=null;for(t in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,t)&&!i.hasOwnProperty(t)&&(a[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===a[t]&&(a[t]=n[t]);return{$$typeof:o,type:e,key:c,ref:d,props:a,_owner:l.current}}n.Fragment=a,n.jsx=c,n.jsxs=c},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var t=r(296540);const o={},a=t.createContext(o);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);