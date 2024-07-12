/*! For license information please see 97bef8eb.d1d45406.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14463],{511710:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(474848),s=t(28453);const o={id:"orderby",title:"$orderby"},d=void 0,i={id:"REST/orderby",title:"$orderby",description:'Sorts the data returned by the attribute and sorting order defined (e.g., $orderby="lastName desc, salary asc")',source:"@site/versioned_docs/version-20-R6/REST/$orderby.md",sourceDirName:"REST",slug:"/REST/orderby",permalink:"/docs/REST/orderby",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24orderby.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"orderby",title:"$orderby"},sidebar:"docs",previous:{title:"$method",permalink:"/docs/REST/method"},next:{title:"$querypath",permalink:"/docs/REST/querypath"}},a={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}];function l(e){const r={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["Sorts the data returned by the attribute and sorting order defined (",(0,n.jsx)(r.em,{children:"e.g."}),", ",(0,n.jsx)(r.code,{children:'$orderby="lastName desc, salary asc"'}),")"]}),"\n",(0,n.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"$orderby"})," orders the entities returned by the REST request. For each attribute, you specify the order as ",(0,n.jsx)(r.code,{children:"ASC"})," (or ",(0,n.jsx)(r.code,{children:"asc"}),") for ascending order and ",(0,n.jsx)(r.code,{children:"DESC"})," (",(0,n.jsx)(r.code,{children:"desc"}),") for descending order. By default, the data is sorted in ascending order. If you want to specify multiple attributes, you can delimit them with a comma, ",(0,n.jsx)(r.em,{children:"e.g."}),", ",(0,n.jsx)(r.code,{children:'$orderby="lastName desc, firstName asc"'}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.p,{children:"In this example, we retrieve entities and sort them at the same time:"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:'GET  /rest/Employee/?$filter="salary!=0"&$orderby="salary DESC,lastName ASC,firstName ASC"'})}),"\n",(0,n.jsx)(r.p,{children:"The example below sorts the entity set by lastName attribute in ascending order:"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:'GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$orderby="lastName"'})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Result"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:'{\n    __entityModel: "Employee",\n    __COUNT: 10,\n    __SENT: 10,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "1",\n            __STAMP: 1,\n            firstName: "John",\n            lastName: "Smith",\n            salary: 90000\n        },\n        {\n            __KEY: "2",\n            __STAMP: 2,\n            firstName: "Susan",\n            lastName: "O\'Leary",\n            salary: 80000\n        },\n// more entities\n    ]\n}\n'})})]})}function m(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,r,t)=>{var n=t(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,o={},c=null,l=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(l=r.ref),r)d.call(r,n)&&!a.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:s,type:e,key:c,ref:l,props:o,_owner:i.current}}r.Fragment=o,r.jsx=c,r.jsxs=c},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>d,x:()=>i});var n=t(296540);const s={},o=n.createContext(s);function d(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);