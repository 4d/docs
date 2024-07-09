/*! For license information please see d41cd86a.b31d5e26.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[29628],{773080:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=o(474848),t=o(28453);const s={id:"orderby",title:"$orderby"},d=void 0,a={id:"REST/orderby",title:"$orderby",description:'Ordena os dados devolvidos pelo atributo e pela ordem de ordena\xe7\xe3o definidos (e.g., $orderby="lastName desc, salary asc")',source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/REST/$orderby.md",sourceDirName:"REST",slug:"/REST/orderby",permalink:"/docs/pt/19/REST/orderby",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24orderby.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"orderby",title:"$orderby"},sidebar:"docs",previous:{title:"$method",permalink:"/docs/pt/19/REST/method"},next:{title:"$querypath",permalink:"/docs/pt/19/REST/querypath"}},i={},c=[{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o",level:2},{value:"Exemplo",id:"Exemplo",level:2}];function l(e){const r={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["Ordena os dados devolvidos pelo atributo e pela ordem de ordena\xe7\xe3o definidos (",(0,n.jsx)(r.em,{children:"e.g."}),", ",(0,n.jsx)(r.code,{children:'$orderby="lastName desc, salary asc"'}),")"]}),"\n",(0,n.jsx)(r.h2,{id:"Descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"$orderby"})," ordena as entidades devolvidas pelo pedido REST. Para cada atributo, especifica-se a ordem como ",(0,n.jsx)(r.code,{children:"ASC"})," (ou ",(0,n.jsx)(r.code,{children:"asc"}),") para ordem ascendente e ",(0,n.jsx)(r.code,{children:"DESC"})," (",(0,n.jsx)(r.code,{children:"desc"}),") para ordem descendente. Por defeito, os dados s\xe3o ordenados por ordem ascendente. By default, the data is sorted in ascending order."]}),"\n",(0,n.jsx)(r.h2,{id:"Exemplo",children:"Exemplo"}),"\n",(0,n.jsx)(r.p,{children:"Neste exemplo, recuperamos entidades e ordenamo-las em simult\xe2neo:"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:'GET  /rest/Employee/?$filter="salary!=0"&$orderby="salary DESC,lastName ASC,firstName ASC"'})}),"\n",(0,n.jsx)(r.p,{children:"O exemplo abaixo ordena o conjunto de entidades pelo atributo lastName em ordem ascendente:"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:'GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$orderby="lastName"'})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Resultadoi"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:'{\n    __entityModel: "Employee",\n    __COUNT: 10,\n    __SENT: 10,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "1",\n            __STAMP: 1,\n            firstName: "John",\n            lastName: "Smith",\n            salary: 90000\n        },\n        {\n            __KEY: "2",\n            __STAMP: 2,\n            firstName: "Susan",\n            lastName: "O\'Leary",\n            salary: 80000\n        },\n// more entities\n    ]\n}\n'})})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,r,o)=>{var n=o(296540),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,o){var n,s={},c=null,l=null;for(n in void 0!==o&&(c=""+o),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(l=r.ref),r)d.call(r,n)&&!i.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:t,type:e,key:c,ref:l,props:s,_owner:a.current}}r.Fragment=s,r.jsx=c,r.jsxs=c},474848:(e,r,o)=>{e.exports=o(221020)},28453:(e,r,o)=>{o.d(r,{R:()=>d,x:()=>a});var n=o(296540);const t={},s=n.createContext(t);function d(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);