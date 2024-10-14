"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[85823],{936339:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(474848),a=n(28453);const o={id:"asArray",title:"$asArray"},s=void 0,l={id:"REST/asArray",title:"$asArray",description:"Devuelve el resultado de una petici\xf3n en un array (es decir, una colecci\xf3n) en lugar de un objeto JSON.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/REST/$asArray.md",sourceDirName:"REST",slug:"/REST/asArray",permalink:"/docs/es/REST/asArray",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24asArray.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"asArray",title:"$asArray"},sidebar:"docs",previous:{title:"dataClass",permalink:"/docs/es/REST/dataClass"},next:{title:"$atomic/$atOnce",permalink:"/docs/es/REST/atomic_$atonce"}},i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2}];function d(t){const e={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"Devuelve el resultado de una petici\xf3n en un array (es decir, una colecci\xf3n) en lugar de un objeto JSON."}),"\n",(0,r.jsx)(e.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(e.p,{children:["Si desea obtener la respuesta en un array, s\xf3lo tiene que a\xf1adir ",(0,r.jsx)(e.code,{children:"$asArray"})," a su petici\xf3n REST (",(0,r.jsx)(e.em,{children:"e.g."}),", ",(0,r.jsx)(e.code,{children:"$asArray=true"}),")."]}),"\n",(0,r.jsx)(e.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(e.p,{children:"Aqu\xed hay un ejemplo de c\xf3mo recibir la respuesta en un array."}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:'GET  /rest/Company/?$filter="name begin a"&$top=3&$asArray=true'})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Response"}),":"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'[\n\t{\n\t\t"__KEY": 15,\n\t\t"__STAMP": 0,\n\t\t"ID": 15,\n\t\t"name": "Alpha North Yellow",\n\t\t"creationDate": "!!0000-00-00!!",\n\t\t"revenues": 82000000,\n\t\t"extra": null,\n\t\t"comments": "",\n\t\t"__GlobalStamp": 0\n\t},\n\t{\n\t\t"__KEY": 34,\n\t\t"__STAMP": 0,\n\t\t"ID": 34,\n\t\t"name": "Astral Partner November",\n\t\t"creationDate": "!!0000-00-00!!",\n\t\t"revenues": 90000000,\n\t\t"extra": null,\n\t\t"comments": "",\n\t\t"__GlobalStamp": 0\n\t},\n\t{\n\t\t"__KEY": 47,\n\t\t"__STAMP": 0,\n\t\t"ID": 47,\n\t\t"name": "Audio Production Uniform",\n\t\t"creationDate": "!!0000-00-00!!",\n\t\t"revenues": 28000000,\n\t\t"extra": null,\n\t\t"comments": "",\n\t\t"__GlobalStamp": 0\n\t}\n]\n'})}),"\n",(0,r.jsx)(e.p,{children:"Los mismos datos en su formato JSON por defecto:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'{\n\t"__entityModel": "Company",\n\t"__GlobalStamp": 50,\n\t"__COUNT": 52,\n\t"__FIRST": 0,\n\t"__ENTITIES": [\n\t\t{\n\t\t\t"__KEY": "15",\n\t\t\t"__TIMESTAMP": "2018-03-28T14:38:07.434Z",\n\t\t\t"__STAMP": 0,\n\t\t\t"ID": 15,\n\t\t\t"name": "Alpha North Yellow",\n\t\t\t"creationDate": "0!0!0",\n\t\t\t"revenues": 82000000,\n\t\t\t"extra": null,\n\t\t\t"comments": "",\n\t\t\t"__GlobalStamp": 0,\n\t\t\t"employees": {\n\t\t\t\t"__deferred": {\n\t\t\t\t\t"uri": "/rest/Company(15)/employees?$expand=employees"\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"__KEY": "34",\n\t\t\t"__TIMESTAMP": "2018-03-28T14:38:07.439Z",\n\t\t\t"__STAMP": 0,\n\t\t\t"ID": 34,\n\t\t\t"name": "Astral Partner November",\n\t\t\t"creationDate": "0!0!0",\n\t\t\t"revenues": 90000000,\n\t\t\t"extra": null,\n\t\t\t"comments": "",\n\t\t\t"__GlobalStamp": 0,\n\t\t\t"employees": {\n\t\t\t\t"__deferred": {\n\t\t\t\t\t"uri": "/rest/Company(34)/employees?$expand=employees"\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"__KEY": "47",\n\t\t\t"__TIMESTAMP": "2018-03-28T14:38:07.443Z",\n\t\t\t"__STAMP": 0,\n\t\t\t"ID": 47,\n\t\t\t"name": "Audio Production Uniform",\n\t\t\t"creationDate": "0!0!0",\n\t\t\t"revenues": 28000000,\n\t\t\t"extra": null,\n\t\t\t"comments": "",\n\t\t\t"__GlobalStamp": 0,\n\t\t\t"employees": {\n\t\t\t\t"__deferred": {\n\t\t\t\t\t"uri": "/rest/Company(47)/employees?$expand=employees"\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t],\n"__SENT": 3\n}\n'})})]})}function m(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>l});var r=n(296540);const a={},o=r.createContext(a);function s(t){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:s(t.components),r.createElement(o.Provider,{value:e},t.children)}}}]);