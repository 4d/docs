/*! For license information please see ba1f2bc6.d10278ac.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46934],{584728:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var t=n(474848),s=n(28453);const o={id:"orderby",title:"$orderby"},i=void 0,d={id:"REST/orderby",title:"$orderby",description:"Trie les donn\xe9es retourn\xe9es par l'attribut et l'ordre de tri d\xe9finis (par exemple,$orderby=\"lastName desc, salaire asc\")",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/REST/$orderby.md",sourceDirName:"REST",slug:"/REST/orderby",permalink:"/docs/fr/20/REST/orderby",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24orderby.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"orderby",title:"$orderby"},sidebar:"docs",previous:{title:"$method",permalink:"/docs/fr/20/REST/method"},next:{title:"$querypath",permalink:"/docs/fr/20/REST/querypath"}},l={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2}];function c(e){const r={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["Trie les donn\xe9es retourn\xe9es par l'attribut et l'ordre de tri d\xe9finis (par exemple,",(0,t.jsx)(r.code,{children:'$orderby="lastName desc, salaire asc"'}),")"]}),"\n",(0,t.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"$orderby"})," ordonne les entit\xe9s retourn\xe9es par la requ\xeate REST. Pour chaque attribut, d\xe9finissez l'ordre sur ",(0,t.jsx)(r.code,{children:"ASC"})," (ou ",(0,t.jsx)(r.code,{children:"asc"}),") pour l'ordre croissant et sur ",(0,t.jsx)(r.code,{children:"DESC"})," (",(0,t.jsx)(r.code,{children:"desc"}),") pour l'ordre d\xe9croissant. Par d\xe9faut, les donn\xe9es sont tri\xe9es par ordre croissant. By default, the data is sorted in ascending order."]}),"\n",(0,t.jsx)(r.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(r.p,{children:"Dans cet exemple, nous r\xe9cup\xe9rons les entit\xe9s et les trions en m\xeame temps :"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:'GET  /rest/Employee/?$filter="salary!=0"&$orderby="salary DESC,lastName ASC,firstName ASC"'})}),"\n",(0,t.jsx)(r.p,{children:"L'exemple ci-dessous trie l'entit\xe9 d\xe9finie par l'attribut lastName dans l'ordre croissant :"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:'GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$orderby="lastName"'})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"R\xe9sultat"})," :"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'{\n    __entityModel: "Employee",\n    __COUNT: 10,\n    __SENT: 10,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "1",\n            __STAMP: 1,\n            firstName: "John",\n            lastName: "Smith",\n            salary: 90000\n        },\n        {\n            __KEY: "2",\n            __STAMP: 2,\n            firstName: "Susan",\n            lastName: "O\'Leary",\n            salary: 80000\n        },\n// plus d\'entit\xe9s\n    ]\n}\n'})})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},221020:(e,r,n)=>{var t=n(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,n){var t,o={},a=null,c=null;for(t in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(c=r.ref),r)i.call(r,t)&&!l.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:s,type:e,key:a,ref:c,props:o,_owner:d.current}}r.Fragment=o,r.jsx=a,r.jsxs=a},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>d});var t=n(296540);const s={},o=t.createContext(s);function i(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);