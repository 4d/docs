"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89772],{463099:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(474848),o=n(28453);const s={id:"asArray",title:"$asArray"},a=void 0,l={id:"REST/asArray",title:"$asArray",description:"Retourne le r\xe9sultat d'une requ\xeate sous forme de tableau (c'est-\xe0-dire une collection) au lieu d'un objet JSON.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/REST/$asArray.md",sourceDirName:"REST",slug:"/REST/asArray",permalink:"/docs/fr/20-R6/REST/asArray",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24asArray.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"asArray",title:"$asArray"},sidebar:"docs",previous:{title:"dataClass",permalink:"/docs/fr/20-R6/REST/dataClass"},next:{title:"$atomic/$atOnce",permalink:"/docs/fr/20-R6/REST/atomic_$atonce"}},i={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2}];function u(t){const e={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"Retourne le r\xe9sultat d'une requ\xeate sous forme de tableau (c'est-\xe0-dire une collection) au lieu d'un objet JSON."}),"\n",(0,r.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(e.p,{children:["Si vous souhaitez obtenir la r\xe9ponse sous forme de tableau, il vous suffit d'ajouter ",(0,r.jsx)(e.code,{children:"$asArray"})," \xe0 votre requ\xeate REST (",(0,r.jsx)(e.em,{children:"ex :"}),", ",(0,r.jsx)(e.code,{children:"$asArray=true"}),")."]}),"\n",(0,r.jsx)(e.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(e.p,{children:"Voici un exemple pour obtenir une r\xe9ponse sous forme de tableau."}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:'GET  /rest/Company/?$filter="name begin a"&$top=3&$asArray=true'})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"R\xe9ponse"})," :"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'[\n\t{\n\t\t"__KEY": 15,\n\t\t"__STAMP": 0,\n\t\t"ID": 15,\n\t\t"name": "Alpha North Yellow",\n\t\t"creationDate": "!!0000-00-00!!",\n\t\t"revenues": 82000000,\n\t\t"extra": null,\n\t\t"comments": "",\n\t\t"__GlobalStamp": 0\n\t},\n\t{\n\t\t"__KEY": 34,\n\t\t"__STAMP": 0,\n\t\t"ID": 34,\n\t\t"name": "Astral Partner November",\n\t\t"creationDate": "!!0000-00-00!!",\n\t\t"revenues": 90000000,\n\t\t"extra": null,\n\t\t"comments": "",\n\t\t"__GlobalStamp": 0\n\t},\n\t{\n\t\t"__KEY": 47,\n\t\t"__STAMP": 0,\n\t\t"ID": 47,\n\t\t"name": "Audio Production Uniform",\n\t\t"creationDate": "!!0000-00-00!!",\n\t\t"revenues": 28000000,\n\t\t"extra": null,\n\t\t"comments": "",\n\t\t"__GlobalStamp": 0\n\t}\n]\n'})}),"\n",(0,r.jsx)(e.p,{children:"Les m\xeames donn\xe9es au format JSON par d\xe9faut :"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'{\n\t"__entityModel": "Company",\n\t"__GlobalStamp": 50,\n\t"__COUNT": 52,\n\t"__FIRST": 0,\n\t"__ENTITIES": [\n\t\t{\n\t\t\t"__KEY": "15",\n\t\t\t"__TIMESTAMP": "2018-03-28T14:38:07.434Z",\n\t\t\t"__STAMP": 0,\n\t\t\t"ID": 15,\n\t\t\t"name": "Alpha North Yellow",\n\t\t\t"creationDate": "0!0!0",\n\t\t\t"revenues": 82000000,\n\t\t\t"extra": null,\n\t\t\t"comments": "",\n\t\t\t"__GlobalStamp": 0,\n\t\t\t"employees": {\n\t\t\t\t"__deferred": {\n\t\t\t\t\t"uri": "/rest/Company(15)/employees?$expand=employees"\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"__KEY": "34",\n\t\t\t"__TIMESTAMP": "2018-03-28T14:38:07.439Z",\n\t\t\t"__STAMP": 0,\n\t\t\t"ID": 34,\n\t\t\t"name": "Astral Partner November",\n\t\t\t"creationDate": "0!0!0",\n\t\t\t"revenues": 90000000,\n\t\t\t"extra": null,\n\t\t\t"comments": "",\n\t\t\t"__GlobalStamp": 0,\n\t\t\t"employees": {\n\t\t\t\t"__deferred": {\n\t\t\t\t\t"uri": "/rest/Company(34)/employees?$expand=employees"\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"__KEY": "47",\n\t\t\t"__TIMESTAMP": "2018-03-28T14:38:07.443Z",\n\t\t\t"__STAMP": 0,\n\t\t\t"ID": 47,\n\t\t\t"name": "Audio Production Uniform",\n\t\t\t"creationDate": "0!0!0",\n\t\t\t"revenues": 28000000,\n\t\t\t"extra": null,\n\t\t\t"comments": "",\n\t\t\t"__GlobalStamp": 0,\n\t\t\t"employees": {\n\t\t\t\t"__deferred": {\n\t\t\t\t\t"uri": "/rest/Company(47)/employees?$expand=employees"\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t],\n"__SENT": 3\n}\n'})})]})}function d(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(u,{...t})}):u(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>a,x:()=>l});var r=n(296540);const o={},s=r.createContext(o);function a(t){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:a(t.components),r.createElement(s.Provider,{value:e},t.children)}}}]);