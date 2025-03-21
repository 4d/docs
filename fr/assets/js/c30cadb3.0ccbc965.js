"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89037"],{408957:function(e,t,s){s.r(t),s.d(t,{default:()=>u,frontMatter:()=>l,metadata:()=>n,assets:()=>a,toc:()=>d,contentTitle:()=>o});var n=JSON.parse('{"id":"REST/attributes","title":"$attributes","description":"Allows selecting the attribute(s) to get from the dataclass (e.g., Company(1)?$attributes=name,city, Company(1)?$attributes=employees.lastname, or Employee?$attributes=employer.name).","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/REST/$attributes.md","sourceDirName":"REST","slug":"/REST/attributes","permalink":"/docs/fr/20/REST/attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24attributes.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"attributes","title":"$attributes"},"sidebar":"docs","previous":{"title":"$atomic/$atOnce","permalink":"/docs/fr/20/REST/atomic_$atonce"},"next":{"title":"$binary","permalink":"/docs/fr/20/REST/binary"}}'),i=s("785893"),r=s("250065");let l={id:"attributes",title:"$attributes"},o=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Exemple avec plusieurs entit\xe9s li\xe9es",id:"exemple-avec-plusieurs-entit\xe9s-li\xe9es",level:2},{value:"Exemple avec une entit\xe9 li\xe9e",id:"exemple-avec-une-entit\xe9-li\xe9e",level:2}];function c(e){let t={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Allows selecting the attribute(s) to get from the dataclass (",(0,i.jsx)(t.em,{children:"e.g."}),", ",(0,i.jsx)(t.code,{children:"Company(1)?$attributes=name,city"}),", ",(0,i.jsx)(t.code,{children:"Company(1)?$attributes=employees.lastname"}),", or ",(0,i.jsx)(t.code,{children:"Employee?$attributes=employer.name"}),")."]}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["If you have relation attributes in a dataclass, use ",(0,i.jsx)(t.code,{children:"$attributes"})," to define the path of attributes whose values you want to get for the related entity or entities."]}),"\n",(0,i.jsxs)(t.p,{children:["Vous pouvez appliquer des ",(0,i.jsx)(t.code,{children:"$attributes"})," \xe0 une entit\xe9 (par exemple, People (1)) ou \xe0 une entity selection (par exemple, People/$entityset/0AF4679A5C394746BFEB68D2162A19FF)."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Si ",(0,i.jsx)(t.code,{children:"$attributes"}),' n\'est pas sp\xe9cifi\xe9 dans une requ\xeate, ou si la valeur "*" est pass\xe9e, tous les attributs disponibles sont extraits. Les attributs ',(0,i.jsx)(t.strong,{children:"d'entit\xe9 relative"})," sont extraits avec la forme simple : un objet avec la propri\xe9t\xe9 ",(0,i.jsx)(t.code,{children:"__KEY"})," (cl\xe9 primaire) et ",(0,i.jsx)(t.code,{children:"URI"}),". Les attributs des ",(0,i.jsx)(t.strong,{children:"entit\xe9s relatives"})," ne sont pas extraits."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Si ",(0,i.jsx)(t.code,{children:"$attributes"})," est sp\xe9cifi\xe9 pour les attributs **d'entit\xe9 relative ** :"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"$attributes=relatedEntity"})," : l'entit\xe9 relative est retourn\xe9e sous une forme simple (propri\xe9t\xe9 __KEY diff\xe9r\xe9e (cl\xe9 primaire)) et ",(0,i.jsx)(t.code,{children:"URI"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"$attributes=relatedEntity.*"})," : tous les attributs de l'entit\xe9 relative sont retourn\xe9s"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"$attributes=relatedEntity.attributePath1, relatedEntity.attributePath2, ..."})," : seuls ces attributs de l'entit\xe9 relative sont retourn\xe9s."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Si ",(0,i.jsx)(t.code,{children:"$attributes"})," est sp\xe9cifi\xe9 pour les attributs ",(0,i.jsx)(t.strong,{children:"d'entit\xe9s relatives"})," :"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"$attributes=relatedEntities.*"})," : toutes les propri\xe9t\xe9s des entit\xe9s relatives sont retourn\xe9es"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"$attributes=relatedEntities.attributePath1, relatedEntity.attributePath2, ..."})," : seuls ces attributs des entit\xe9s relatives sont retourn\xe9s."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["If ",(0,i.jsx)(t.code,{children:"$attributes"})," is specified for ",(0,i.jsx)(t.strong,{children:"storage"})," attributes:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"$attributes=attribute1, attribute2, ..."}),": only those attributes of the entities are returned."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"exemple-avec-plusieurs-entit\xe9s-li\xe9es",children:"Exemple avec plusieurs entit\xe9s li\xe9es"}),"\n",(0,i.jsx)(t.p,{children:'Si nous ex\xe9cutons la requ\xeate REST suivante pour la dataclass Company (qui poss\xe8de un attribut relatif "employees"):'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"GET  /rest/Company(1)/?$attributes=employees.lastname"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"R\xe9ponse"})," :"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'{\n    "__entityModel": "Company",\n    "__KEY": "1",  \n    "__TIMESTAMP": "2018-04-25T14:41:16.237Z",\n    "__STAMP": 2,\n    "employees": {\n        "__ENTITYSET": "/rest/Company(1)/employees?$expand=employees",\n        "__GlobalStamp": 50,\n        "__COUNT": 135,\n        "__FIRST": 0,\n        "__ENTITIES": [\n            {\n                "__KEY": "1",\n                "__TIMESTAMP": "2019-12-01T20:18:26.046Z",\n                "__STAMP": 5,\n                "lastname": "ESSEAL"\n            },\n            {\n                "__KEY": "2",\n                "__TIMESTAMP": "2019-12-04T10:58:42.542Z",\n                "__STAMP": 6,\n                "lastname": "JONES"\n            },\n            ...\n    }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Si vous souhaitez obtenir tous les attributs des employ\xe9s :"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"GET  /rest/Company(1)/?$attributes=employees.*"})}),"\n",(0,i.jsx)(t.p,{children:"Si vous souhaitez obtenir le nom de famille et les attributs de nom de poste des employ\xe9s :"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"GET  /rest/Company(1)/?$attributes=employees.lastname,employees.jobname"})}),"\n",(0,i.jsx)(t.h2,{id:"exemple-avec-une-entit\xe9-li\xe9e",children:"Exemple avec une entit\xe9 li\xe9e"}),"\n",(0,i.jsx)(t.p,{children:'Si nous passons la requ\xeate REST suivante pour la dataclass Employee (qui a plusieurs attributs relationnels, y compris "employer") :'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"GET  /rest/Employee(1)?$attributes=employer.name"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"R\xe9ponse"})," :"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'{\n    "__entityModel": "Employee",\n    "__KEY": "1",\n    "__TIMESTAMP": "2019-12-01T20:18:26.046Z",\n    "__STAMP": 5,\n    "employer": {\n        "__KEY": "1",\n        "__TIMESTAMP": "2018-04-25T14:41:16.237Z",\n        "__STAMP": 0,\n        "name": "Adobe"\n    }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Si vous souhaitez obtenir tous les attributs de l'employeur :"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"GET  /rest/Employee(1)?$attributes=employer.*"})}),"\n",(0,i.jsx)(t.p,{children:"Si vous souhaitez obtenir les noms de famille de tous les employ\xe9s de l'employeur :"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"GET  /rest/Employee(1)?$attributes=employer.employees.lastname"})})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return o},a:function(){return l}});var n=s(667294);let i={},r=n.createContext(i);function l(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);