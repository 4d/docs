/*! For license information please see 6b141bb1.a805ca08.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20614],{592635:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var o=r(474848),t=r(28453);const a={id:"asArray",title:"$asArray"},s=void 0,l={id:"REST/asArray",title:"$asArray",description:"Devolve o resultado de uma consulta num array (ou seja, uma cole\xe7\xe3o) em vez de um objecto JSON.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/REST/$asArray.md",sourceDirName:"REST",slug:"/REST/asArray",permalink:"/docs/pt/18/REST/asArray",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24asArray.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"asArray",title:"$asArray"},sidebar:"docs",previous:{title:"{dataClass}",permalink:"/docs/pt/18/REST/{dataClass}"},next:{title:"$atomic/$atOnce",permalink:"/docs/pt/18/REST/atomic_$atonce"}},c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2}];function m(e){const n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Devolve o resultado de uma consulta num array (ou seja, uma cole\xe7\xe3o) em vez de um objecto JSON."}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["Se quisere receber a resposta num array, basta adicionar ",(0,o.jsx)(n.code,{children:"$asArray"})," ao seu pedido REST (",(0,o.jsx)(n.em,{children:"e.g."}),", ",(0,o.jsx)(n.code,{children:"$asArray=true"}),")."]}),"\n",(0,o.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.p,{children:"Eis um exemplo de como receber a resposta num array."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:'GET  /rest/Company/?$filter="name begin a"&$top=3&$asArray=true'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Resposta"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'[\n    {\n        "__KEY": 15,\n        "__STAMP": 0,\n        "ID": 15,\n        "name": "Alpha North Yellow",\n        "creationDate": "!!0000-00-00!!",\n        "revenues": 82000000,\n        "extra": null,\n        "comments": "",\n        "__GlobalStamp": 0\n    },\n    {\n        "__KEY": 34,\n        "__STAMP": 0,\n        "ID": 34,\n        "name": "Astral Partner November",\n        "creationDate": "!!0000-00-00!!",\n        "revenues": 90000000,\n        "extra": null,\n        "comments": "",\n        "__GlobalStamp": 0\n    },\n    {\n        "__KEY": 47,\n        "__STAMP": 0,\n        "ID": 47,\n        "name": "Audio Production Uniform",\n        "creationDate": "!!0000-00-00!!",\n        "revenues": 28000000,\n        "extra": null,\n        "comments": "",\n        "__GlobalStamp": 0\n    }\n]\n'})}),"\n",(0,o.jsx)(n.p,{children:"Os mesmos dados no seu formato JSON predefinido:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'{\n    "__entityModel": "Company",\n    "__GlobalStamp": 50,\n    "__COUNT": 52,\n    "__FIRST": 0,\n    "__ENTITIES": [\n        {\n            "__KEY": "15",\n            "__TIMESTAMP": "2018-03-28T14:38:07.434Z",\n            "__STAMP": 0,\n            "ID": 15,\n            "name": "Alpha North Yellow",\n            "creationDate": "0!0!0",\n            "revenues": 82000000,\n            "extra": null,\n            "comments": "",\n            "__GlobalStamp": 0,\n            "employees": {\n                "__deferred": {\n                    "uri": "/rest/Company(15)/employees?$expand=employees"\n                }\n            }\n        },\n        {\n            "__KEY": "34",\n            "__TIMESTAMP": "2018-03-28T14:38:07.439Z",\n            "__STAMP": 0,\n            "ID": 34,\n            "name": "Astral Partner November",\n            "creationDate": "0!0!0",\n            "revenues": 90000000,\n            "extra": null,\n            "comments": "",\n            "__GlobalStamp": 0,\n            "employees": {\n                "__deferred": {\n                    "uri": "/rest/Company(34)/employees?$expand=employees"\n                }\n            }\n        },\n        {\n            "__KEY": "47",\n            "__TIMESTAMP": "2018-03-28T14:38:07.443Z",\n            "__STAMP": 0,\n            "ID": 47,\n            "name": "Audio Production Uniform",\n            "creationDate": "0!0!0",\n            "revenues": 28000000,\n            "extra": null,\n            "comments": "",\n            "__GlobalStamp": 0,\n            "employees": {\n                "__deferred": {\n                    "uri": "/rest/Company(47)/employees?$expand=employees"\n                }\n            }\n        }\n    ],\n"__SENT": 3\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},221020:(e,n,r)=>{var o=r(296540),t=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,r){var o,a={},i=null,m=null;for(o in void 0!==r&&(i=""+r),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(m=n.ref),n)s.call(n,o)&&!c.hasOwnProperty(o)&&(a[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===a[o]&&(a[o]=n[o]);return{$$typeof:t,type:e,key:i,ref:m,props:a,_owner:l.current}}n.Fragment=a,n.jsx=i,n.jsxs=i},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var o=r(296540);const t={},a=o.createContext(t);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);