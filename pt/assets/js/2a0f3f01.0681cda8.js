"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58655"],{330177:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>_,assets:()=>a,toc:()=>c,frontMatter:()=>o});var i=JSON.parse('{"id":"REST/clean","title":"$clean","description":"Cria um conjunto de entidades a partir de um conjunto de entidades existente, mas sem suas entidades exclu\xeddas, se houver (e.g. $clean=true)","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/REST/$clean.md","sourceDirName":"REST","slug":"/REST/clean","permalink":"/docs/pt/20-R6/REST/clean","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24clean.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"clean","title":"$clean"},"sidebar":"docs","previous":{"title":"$binary","permalink":"/docs/pt/20-R6/REST/binary"},"next":{"title":"$compute","permalink":"/docs/pt/20-R6/REST/compute"}}'),s=t("785893"),d=t("250065");let o={id:"clean",title:"$clean"},r=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2}];function l(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Cria um conjunto de entidades a partir de um conjunto de entidades existente, mas sem suas entidades exclu\xeddas, se houver (",(0,s.jsx)(n.em,{children:"e.g."})," ",(0,s.jsx)(n.code,{children:"$clean=true"}),")"]}),"\n",(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"$clean"})," creates a new entity set containing the same entities as ",(0,s.jsx)(n.code,{children:"entitySetID"})," but without references to deleted entities (if any)."]}),"\n",(0,s.jsxs)(n.p,{children:["By default, when an entity is ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R6/REST/method#methoddelete",children:"deleted"}),", its reference(s) in existing entity set(s) become ",(0,s.jsx)(n.em,{children:"undefined"}),' but are not removed. They are also still included in the "count" property of the entity set. Chamar ',(0,s.jsx)(n.code,{children:"$clean"})," no conjunto de entidades retorna um novo conjunto de entidades atualizado, sem refer\xeancias de entidades ",(0,s.jsx)(n.em,{children:"undefined"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"$clean"})," can be followed by ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R6/REST/method#methodentityset",children:(0,s.jsx)(n.code,{children:"$method=entityset"})})," to create the new entity set on the server:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$clean=true&$method=entityset"})}),"\n",(0,s.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Criamos um conjunto de entidades:"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'GET /rest/Speciality?$filter="ID<=3"&$method=entityset'})}),"\n",(0,s.jsxs)(n.p,{children:["Tr\xeas entidades s\xe3o recebidas e obtemos o conjunto de entidades ",(0,s.jsx)(n.code,{children:"DF6903FB5879404A9A818884CFC6F62A"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "__ENTITYSET": "/rest/Speciality/$entityset/DF6903FB5879404A9A818884CFC6F62A",\n  "__DATACLASS": "Speciality",\n  "__entityModel": "Speciality",\n  "__GlobalStamp": 0,\n  "__COUNT": 3,\n  "__FIRST": 0,\n  "__ENTITIES": [\n    {\n      "__KEY": "1",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 1,\n      "name": "Surgery",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[1]/infos?$expand=infos"\n        }\n      }\n    },\n    {\n      "__KEY": "2",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 2,\n      "name": "Otolaryngology",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[2]/infos?$expand=infos"\n        }\n      }\n    },\n    {\n      "__KEY": "3",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 3,\n      "name": "Dentist",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[3]/infos?$expand=infos"\n        }\n      }\n    },\n  ],\n  "__SENT": 3\n}\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Exclu\xedmos a entidade de ",(0,s.jsx)(n.code,{children:"KEY=2"})," (consulte ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R6/REST/method#methoddelete",children:"how to delete an entity"}),") e, em seguida, essa solicita\xe7\xe3o \xe9 enviada:"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET /rest/Speciality/$entityset/DF6903FB5879404A9A818884CFC6F62A"})}),"\n",(0,s.jsx)(n.p,{children:"O conjunto de entidades \xe9 retornado e ainda cont\xe9m 3 entidades. There is an undefined entity for the deleted entity (with stamp = 0):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "__DATACLASS": "Speciality",\n  "__entityModel": "Speciality",\n  "__GlobalStamp": 0,\n  "__COUNT": 3,\n  "__FIRST": 0,\n  "__ENTITIES": [\n    {\n      "__KEY": "1",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 1,\n      "name": "Surgery",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[1]/infos?$expand=infos"\n        }\n      }\n    },\n    {\n      "__STAMP": 0\n    },\n    {\n      "__KEY": "3",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 3,\n      "name": "Dentist",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[3]/infos?$expand=infos"\n        }\n      }\n    },\n  ],\n  "__SENT": 3\n}\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Se essa solicita\xe7\xe3o for enviada:"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET /rest/Speciality/$entityset/DF6903FB5879404A9A818884CFC6F62A?$clean=true&$method=entityset"})}),"\n",(0,s.jsx)(n.p,{children:"We clean the entity set DF6903FB5879404A9A818884CFC6F62A and receive a new entity set (entity set D7BFBC49375B4FE5A94CDD17AA535F73) that does not contain the dropped entity:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "__ENTITYSET": "/rest/Speciality/$entityset/D7BFBC49375B4FE5A94CDD17AA535F73",\n  "__DATACLASS": "Speciality",\n  "__entityModel": "Speciality",\n  "__GlobalStamp": 0,\n  "__COUNT": 2,\n  "__FIRST": 0,\n  "__ENTITIES": [\n    {\n      "__KEY": "1",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 1,\n      "name": "Surgery",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[1]/infos?$expand=infos"\n        }\n      }\n    },\n    {\n      "__KEY": "3",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 3,\n      "name": "Dentist",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[3]/infos?$expand=infos"\n        }\n      }\n    }\n  ],\n  "__SENT": 2\n}\n'})})]})}function _(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return o}});var i=t(667294);let s={},d=i.createContext(s);function o(e){let n=i.useContext(d);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);