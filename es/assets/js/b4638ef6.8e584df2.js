"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81186"],{674403:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>u,assets:()=>r,toc:()=>l,frontMatter:()=>a});var t=JSON.parse('{"id":"REST/clean","title":"$clean","description":"Crea un nuevo conjunto de entidades a partir de un conjunto de entidades existente pero sin sus entidades eliminadas, si las hubiera (por ejemplo $clean=true)","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/REST/$clean.md","sourceDirName":"REST","slug":"/REST/clean","permalink":"/docs/es/REST/clean","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24clean.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"clean","title":"$clean"},"sidebar":"docs","previous":{"title":"$binary","permalink":"/docs/es/REST/binary"},"next":{"title":"$compute","permalink":"/docs/es/REST/compute"}}'),s=i("785893"),d=i("250065");let a={id:"clean",title:"$clean"},o=void 0,r={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Crea un nuevo conjunto de entidades a partir de un conjunto de entidades existente pero sin sus entidades eliminadas, si las hubiera (",(0,s.jsx)(n.em,{children:"por ejemplo"})," ",(0,s.jsx)(n.code,{children:"$clean=true"}),")"]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"$clean"})," crea un nuevo conjunto de entidades que contiene las mismas entidades que ",(0,s.jsx)(n.code,{children:"entitySetID"})," pero sin referencias a las entidades eliminadas (si las hubiera)."]}),"\n",(0,s.jsxs)(n.p,{children:["Por defecto, cuando una entidad es ",(0,s.jsx)(n.a,{href:"/docs/es/REST/method#methoddelete",children:"eliminada"}),", su(s) referencia(s) en el(los) conjunto(s) de entidades existente(s) se vuelven ",(0,s.jsx)(n.em,{children:"inexistentes"}),' pero no se eliminan. Tambi\xe9n est\xe1n incluidos en la propiedad "count" del conjunto de entidades. Llamar a ',(0,s.jsx)(n.code,{children:"$clean"})," en el conjunto de entidades devuelve un nuevo conjunto de entidades actualizado sin referencias a entidades ",(0,s.jsx)(n.em,{children:"undefined"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"$clean"})," puede ser seguido por ",(0,s.jsx)(n.a,{href:"/docs/es/REST/method#methodentityset",children:(0,s.jsx)(n.code,{children:"$method=entityset"})})," para crear el nuevo conjunto de entidades en el servidor:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$clean=true&$method=entityset"})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Creamos un conjunto de entidades:"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'GET /rest/Speciality?$filter="ID<=3"&$method=entityset'})}),"\n",(0,s.jsxs)(n.p,{children:["Se reciben tres entidades y obtenemos el conjunto de entidades ",(0,s.jsx)(n.code,{children:"DF6903FB5879404A9A818884CFC6F62A"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "__ENTITYSET": "/rest/Speciality/$entityset/DF6903FB5879404A9A818884CFC6F62A",\n  "__DATACLASS": "Speciality",\n  "__entityModel": "Speciality",\n  "__GlobalStamp": 0,\n  "__COUNT": 3,\n  "__FIRST": 0,\n  "__ENTITIES": [\n    {\n      "__KEY": "1",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 1,\n      "name": "Surgery",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[1]/infos?$expand=infos"\n        }\n      }\n    },\n    {\n      "__KEY": "2",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 2,\n      "name": "Otolaryngology",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[2]/infos?$expand=infos"\n        }\n      }\n    },\n    {\n      "__KEY": "3",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 3,\n      "name": "Dentist",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[3]/infos?$expand=infos"\n        }\n      }\n    },\n  ],\n  "__SENT": 3\n}\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Eliminamos la entidad con ",(0,s.jsx)(n.code,{children:"KEY=2"})," (ver ",(0,s.jsx)(n.a,{href:"/docs/es/REST/method#methoddelete",children:"c\xf3mo eliminar una entidad"}),"), luego se env\xeda esta solicitud:"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET /rest/Speciality/$entityset/DF6903FB5879404A9A818884CFC6F62A"})}),"\n",(0,s.jsx)(n.p,{children:"Se devuelve el conjunto de entidades y sigue conteniendo 3 entidades. Hay una entidad indefinida para la entidad eliminada (con sello = 0):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "__DATACLASS": "Speciality",\n  "__entityModel": "Speciality",\n  "__GlobalStamp": 0,\n  "__COUNT": 3,\n  "__FIRST": 0,\n  "__ENTITIES": [\n    {\n      "__KEY": "1",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 1,\n      "name": "Surgery",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[1]/infos?$expand=infos"\n        }\n      }\n    },\n    {\n      "__STAMP": 0\n    },\n    {\n      "__KEY": "3",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 3,\n      "name": "Dentist",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[3]/infos?$expand=infos"\n        }\n      }\n    },\n  ],\n  "__SENT": 3\n}\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Si se env\xeda esta petici\xf3n:"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET /rest/Speciality/$entityset/DF6903FB5879404A9A818884CFC6F62A?$clean=true&$method=entityset"})}),"\n",(0,s.jsx)(n.p,{children:"Limpiamos el conjunto de entidades DF6903FB5879404A9A818884CFC6F62A y recibimos un nuevo conjunto de entidades (conjunto de entidades D7BFBC49375B4FE5A94CDD17AA535F73) que no contiene la entidad eliminada:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "__ENTITYSET": "/rest/Speciality/$entityset/D7BFBC49375B4FE5A94CDD17AA535F73",\n  "__DATACLASS": "Speciality",\n  "__entityModel": "Speciality",\n  "__GlobalStamp": 0,\n  "__COUNT": 2,\n  "__FIRST": 0,\n  "__ENTITIES": [\n    {\n      "__KEY": "1",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 1,\n      "name": "Surgery",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[1]/infos?$expand=infos"\n        }\n      }\n    },\n    {\n      "__KEY": "3",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 3,\n      "name": "Dentist",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[3]/infos?$expand=infos"\n        }\n      }\n    }\n  ],\n  "__SENT": 2\n}\n'})})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return a}});var t=i(667294);let s={},d=t.createContext(s);function a(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);