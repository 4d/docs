"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6366],{41983:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var s=r(474848),o=r(28453);const t={id:"orderby",title:"$orderby"},d=void 0,i={id:"REST/orderby",title:"$orderby",description:'Ordena los datos devueltos por el atributo y el orden de clasificaci\xf3n definidos (por ejemplo, $orderby="lastName desc, salary asc")',source:"@site/i18n/es/docusaurus-plugin-content-docs/version-18/REST/$orderby.md",sourceDirName:"REST",slug:"/REST/orderby",permalink:"/docs/es/18/REST/orderby",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24orderby.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"orderby",title:"$orderby"},sidebar:"docs",previous:{title:"$method",permalink:"/docs/es/18/REST/method"},next:{title:"$querypath",permalink:"/docs/es/18/REST/querypath"}},a={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2}];function l(e){const n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Ordena los datos devueltos por el atributo y el orden de clasificaci\xf3n definidos (",(0,s.jsx)(n.em,{children:"por ejemplo"}),", ",(0,s.jsx)(n.code,{children:'$orderby="lastName desc, salary asc"'}),")"]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"$orderby"})," ordena las entidades devueltas por la petici\xf3n REST. Para cada atributo, se especifica el orden como ",(0,s.jsx)(n.code,{children:"ASC"})," (o ",(0,s.jsx)(n.code,{children:"asc"}),") para el orden ascendente y ",(0,s.jsx)(n.code,{children:"DESC"})," (",(0,s.jsx)(n.code,{children:"desc"}),") para el orden descendente. Por defecto, los datos se clasifican en orden ascendente. By default, the data is sorted in ascending order."]}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"En este ejemplo, recuperamos las entidades y las ordenamos al mismo tiempo:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'GET  /rest/Employee/?$filter="salary!=0"&$orderby="salary DESC,lastName ASC,firstName ASC"'})}),"\n",(0,s.jsx)(n.p,{children:"El ejemplo siguiente ordena el conjunto de entidades por el atributo lastName en orden ascendente:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$orderby="lastName"'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Resultado"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    __entityModel: "Employee",\n    __COUNT: 10,\n    __SENT: 10,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "1",\n            __STAMP: 1,\n            firstName: "John",\n            lastName: "Smith",\n            salary: 90000\n        },\n        {\n            __KEY: "2",\n            __STAMP: 2,\n            firstName: "Susan",\n            lastName: "O\'Leary",\n            salary: 80000\n        },\n// more entities\n    ]\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>i});var s=r(296540);const o={},t=s.createContext(o);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);