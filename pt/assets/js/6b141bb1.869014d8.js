"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1944"],{748784:function(e,n,r){r.r(n),r.d(n,{default:()=>d,frontMatter:()=>s,metadata:()=>t,assets:()=>i,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"REST/asArray","title":"$asArray","description":"Devolve o resultado de uma consulta num array (ou seja, uma cole\xe7\xe3o) em vez de um objecto JSON.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/REST/$asArray.md","sourceDirName":"REST","slug":"/REST/asArray","permalink":"/docs/pt/18/REST/asArray","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24asArray.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"asArray","title":"$asArray"},"sidebar":"docs","previous":{"title":"{dataClass}","permalink":"/docs/pt/18/REST/{dataClass}"},"next":{"title":"$atomic/$atOnce","permalink":"/docs/pt/18/REST/atomic_$atonce"}}'),o=r("785893"),a=r("250065");let s={id:"asArray",title:"$asArray"},l=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2}];function m(e){let n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Devolve o resultado de uma consulta num array (ou seja, uma cole\xe7\xe3o) em vez de um objecto JSON."}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["Se quisere receber a resposta num array, basta adicionar ",(0,o.jsx)(n.code,{children:"$asArray"})," ao seu pedido REST (",(0,o.jsx)(n.em,{children:"e.g."}),", ",(0,o.jsx)(n.code,{children:"$asArray=true"}),")."]}),"\n",(0,o.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.p,{children:"Eis um exemplo de como receber a resposta num array."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:'GET  /rest/Company/?$filter="name begin a"&$top=3&$asArray=true'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Resposta"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'[\n    {\n        "__KEY": 15,\n        "__STAMP": 0,\n        "ID": 15,\n        "name": "Alpha North Yellow",\n        "creationDate": "!!0000-00-00!!",\n        "revenues": 82000000,\n        "extra": null,\n        "comments": "",\n        "__GlobalStamp": 0\n    },\n    {\n        "__KEY": 34,\n        "__STAMP": 0,\n        "ID": 34,\n        "name": "Astral Partner November",\n        "creationDate": "!!0000-00-00!!",\n        "revenues": 90000000,\n        "extra": null,\n        "comments": "",\n        "__GlobalStamp": 0\n    },\n    {\n        "__KEY": 47,\n        "__STAMP": 0,\n        "ID": 47,\n        "name": "Audio Production Uniform",\n        "creationDate": "!!0000-00-00!!",\n        "revenues": 28000000,\n        "extra": null,\n        "comments": "",\n        "__GlobalStamp": 0\n    }\n]\n'})}),"\n",(0,o.jsx)(n.p,{children:"Os mesmos dados no seu formato JSON predefinido:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'{\n    "__entityModel": "Company",\n    "__GlobalStamp": 50,\n    "__COUNT": 52,\n    "__FIRST": 0,\n    "__ENTITIES": [\n        {\n            "__KEY": "15",\n            "__TIMESTAMP": "2018-03-28T14:38:07.434Z",\n            "__STAMP": 0,\n            "ID": 15,\n            "name": "Alpha North Yellow",\n            "creationDate": "0!0!0",\n            "revenues": 82000000,\n            "extra": null,\n            "comments": "",\n            "__GlobalStamp": 0,\n            "employees": {\n                "__deferred": {\n                    "uri": "/rest/Company(15)/employees?$expand=employees"\n                }\n            }\n        },\n        {\n            "__KEY": "34",\n            "__TIMESTAMP": "2018-03-28T14:38:07.439Z",\n            "__STAMP": 0,\n            "ID": 34,\n            "name": "Astral Partner November",\n            "creationDate": "0!0!0",\n            "revenues": 90000000,\n            "extra": null,\n            "comments": "",\n            "__GlobalStamp": 0,\n            "employees": {\n                "__deferred": {\n                    "uri": "/rest/Company(34)/employees?$expand=employees"\n                }\n            }\n        },\n        {\n            "__KEY": "47",\n            "__TIMESTAMP": "2018-03-28T14:38:07.443Z",\n            "__STAMP": 0,\n            "ID": 47,\n            "name": "Audio Production Uniform",\n            "creationDate": "0!0!0",\n            "revenues": 28000000,\n            "extra": null,\n            "comments": "",\n            "__GlobalStamp": 0,\n            "employees": {\n                "__deferred": {\n                    "uri": "/rest/Company(47)/employees?$expand=employees"\n                }\n            }\n        }\n    ],\n"__SENT": 3\n}\n'})})]})}function d(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return s}});var t=r(667294);let o={},a=t.createContext(o);function s(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);