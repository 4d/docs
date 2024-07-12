/*! For license information please see 5ac378be.750cc9b1.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[68897],{777890:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=r(474848),t=r(28453);const s={id:"orderby",title:"$orderby"},d=void 0,a={id:"REST/orderby",title:"$orderby",description:'Ordena los datos devueltos por el atributo y el orden de clasificaci\xf3n definidos (por ejemplo, $orderby="lastName desc, salary asc")',source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/REST/$orderby.md",sourceDirName:"REST",slug:"/REST/orderby",permalink:"/docs/es/20-R5/REST/orderby",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24orderby.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"orderby",title:"$orderby"},sidebar:"docs",previous:{title:"$method",permalink:"/docs/es/20-R5/REST/method"},next:{title:"$querypath",permalink:"/docs/es/20-R5/REST/querypath"}},i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2}];function l(e){const n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Ordena los datos devueltos por el atributo y el orden de clasificaci\xf3n definidos (",(0,o.jsx)(n.em,{children:"por ejemplo"}),", ",(0,o.jsx)(n.code,{children:'$orderby="lastName desc, salary asc"'}),")"]}),"\n",(0,o.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"$orderby"})," ordena las entidades devueltas por la petici\xf3n REST. Para cada atributo, se especifica el orden como ",(0,o.jsx)(n.code,{children:"ASC"})," (o ",(0,o.jsx)(n.code,{children:"asc"}),") para el orden ascendente y ",(0,o.jsx)(n.code,{children:"DESC"})," (",(0,o.jsx)(n.code,{children:"desc"}),") para el orden descendente. Por defecto, los datos se clasifican en orden ascendente. By default, the data is sorted in ascending order."]}),"\n",(0,o.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsx)(n.p,{children:"En este ejemplo, recuperamos las entidades y las ordenamos al mismo tiempo:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:'GET  /rest/Employee/?$filter="salary!=0"&$orderby="salary DESC,lastName ASC,firstName ASC"'})}),"\n",(0,o.jsx)(n.p,{children:"El ejemplo siguiente ordena el conjunto de entidades por el atributo lastName en orden ascendente:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:'GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$orderby="lastName"'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Resultado"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'{\n    __entityModel: "Employee",\n    __COUNT: 10,\n    __SENT: 10,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "1",\n            __STAMP: 1,\n            firstName: "John",\n            lastName: "Smith",\n            salary: 90000\n        },\n        {\n            __KEY: "2",\n            __STAMP: 2,\n            firstName: "Susan",\n            lastName: "O\'Leary",\n            salary: 80000\n        },\n// more entities\n    ]\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,n,r)=>{var o=r(296540),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var o,s={},c=null,l=null;for(o in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)d.call(n,o)&&!i.hasOwnProperty(o)&&(s[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===s[o]&&(s[o]=n[o]);return{$$typeof:t,type:e,key:c,ref:l,props:s,_owner:a.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>a});var o=r(296540);const t={},s=o.createContext(t);function d(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);