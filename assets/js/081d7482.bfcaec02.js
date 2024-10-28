"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5187],{30754:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>_,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var i=t(474848),s=t(28453);const r={id:"clean",title:"$clean"},d=void 0,c={id:"REST/clean",title:"$clean",description:"Creates a new entity set from an existing entity set but without its deleted entities, if any (e.g. $clean=true)",source:"@site/versioned_docs/version-20-R6/REST/$clean.md",sourceDirName:"REST",slug:"/REST/clean",permalink:"/docs/20-R6/REST/clean",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24clean.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"clean",title:"$clean"},sidebar:"docs",previous:{title:"$binary",permalink:"/docs/20-R6/REST/binary"},next:{title:"$compute",permalink:"/docs/20-R6/REST/compute"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Creates a new entity set from an existing entity set but without its deleted entities, if any (",(0,i.jsx)(n.em,{children:"e.g."})," ",(0,i.jsx)(n.code,{children:"$clean=true"}),")"]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"$clean"})," creates a new entity set containing the same entities as ",(0,i.jsx)(n.code,{children:"entitySetID"})," but without references to deleted entities (if any)."]}),"\n",(0,i.jsxs)(n.p,{children:["By default, when an entity is ",(0,i.jsx)(n.a,{href:"/docs/20-R6/REST/method#methoddelete",children:"deleted"}),", its reference(s) in existing entity set(s) become ",(0,i.jsx)(n.em,{children:"undefined"}),' but are not removed. They are also still included in the "count" property of the entity set. Calling ',(0,i.jsx)(n.code,{children:"$clean"})," on the entity set returns a new, up-to-date entity set without ",(0,i.jsx)(n.em,{children:"undefined"})," entity references."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"$clean"})," can be followed by ",(0,i.jsx)(n.a,{href:"/docs/20-R6/REST/method#methodentityset",children:(0,i.jsx)(n.code,{children:"$method=entityset"})})," to create the new entity set on the server:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$clean=true&$method=entityset"})}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"We create an entity set:"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'GET /rest/Speciality?$filter="ID<=3"&$method=entityset'})}),"\n",(0,i.jsxs)(n.p,{children:["Three entities are received and we get the entity set ",(0,i.jsx)(n.code,{children:"DF6903FB5879404A9A818884CFC6F62A"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "__ENTITYSET": "/rest/Speciality/$entityset/DF6903FB5879404A9A818884CFC6F62A",\n  "__DATACLASS": "Speciality",\n  "__entityModel": "Speciality",\n  "__GlobalStamp": 0,\n  "__COUNT": 3,\n  "__FIRST": 0,\n  "__ENTITIES": [\n    {\n      "__KEY": "1",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 1,\n      "name": "Surgery",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[1]/infos?$expand=infos"\n        }\n      }\n    },\n    {\n      "__KEY": "2",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 2,\n      "name": "Otolaryngology",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[2]/infos?$expand=infos"\n        }\n      }\n    },\n    {\n      "__KEY": "3",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 3,\n      "name": "Dentist",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[3]/infos?$expand=infos"\n        }\n      }\n    },\n  ],\n  "__SENT": 3\n}\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["We delete the entity with ",(0,i.jsx)(n.code,{children:"KEY=2"})," (see ",(0,i.jsx)(n.a,{href:"/docs/20-R6/REST/method#methoddelete",children:"how to delete an entity"}),"), then this request is sent:"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GET /rest/Speciality/$entityset/DF6903FB5879404A9A818884CFC6F62A"})}),"\n",(0,i.jsx)(n.p,{children:"The entity set is returned and still contains 3 entities. There is an undefined entity for the deleted entity (with stamp = 0):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "__DATACLASS": "Speciality",\n  "__entityModel": "Speciality",\n  "__GlobalStamp": 0,\n  "__COUNT": 3,\n  "__FIRST": 0,\n  "__ENTITIES": [\n    {\n      "__KEY": "1",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 1,\n      "name": "Surgery",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[1]/infos?$expand=infos"\n        }\n      }\n    },\n    {\n      "__STAMP": 0\n    },\n    {\n      "__KEY": "3",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 3,\n      "name": "Dentist",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[3]/infos?$expand=infos"\n        }\n      }\n    },\n  ],\n  "__SENT": 3\n}\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"If this request is sent:"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GET /rest/Speciality/$entityset/DF6903FB5879404A9A818884CFC6F62A?$clean=true&$method=entityset"})}),"\n",(0,i.jsx)(n.p,{children:"We clean the entity set DF6903FB5879404A9A818884CFC6F62A and receive a new entity set (entity set D7BFBC49375B4FE5A94CDD17AA535F73) that does not contain the dropped entity:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "__ENTITYSET": "/rest/Speciality/$entityset/D7BFBC49375B4FE5A94CDD17AA535F73",\n  "__DATACLASS": "Speciality",\n  "__entityModel": "Speciality",\n  "__GlobalStamp": 0,\n  "__COUNT": 2,\n  "__FIRST": 0,\n  "__ENTITIES": [\n    {\n      "__KEY": "1",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 1,\n      "name": "Surgery",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[1]/infos?$expand=infos"\n        }\n      }\n    },\n    {\n      "__KEY": "3",\n      "__TIMESTAMP": "2024-04-23T10:42:28.097Z",\n      "__STAMP": 131,\n      "ID": 3,\n      "name": "Dentist",\n      "infos": {\n        "__deferred": {\n          "uri": "/rest/Speciality[3]/infos?$expand=infos"\n        }\n      }\n    }\n  ],\n  "__SENT": 2\n}\n'})})]})}function _(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>c});var i=t(296540);const s={},r=i.createContext(s);function d(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);