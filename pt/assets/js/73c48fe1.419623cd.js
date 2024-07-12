/*! For license information please see 73c48fe1.419623cd.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17404],{703601:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var n=o(474848),i=o(28453);const r={id:"timeout",title:"$timeout"},s=void 0,d={id:"REST/timeout",title:"$timeout",description:"Define el n\xfamero de segundos para guardar un conjunto de entidades en la cach\xe9 de 4D Server (por ejemplo, $timeout=1800)",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/REST/$timeout.md",sourceDirName:"REST",slug:"/REST/timeout",permalink:"/docs/pt/REST/timeout",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24timeout.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"timeout",title:"$timeout"},sidebar:"docs",previous:{title:"$skip",permalink:"/docs/pt/REST/skip"},next:{title:"$top/$limit",permalink:"/docs/pt/REST/top_$limit"}},a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Define el n\xfamero de segundos para guardar un conjunto de entidades en la cach\xe9 de 4D Server (",(0,n.jsx)(t.em,{children:"por ejemplo"}),", ",(0,n.jsx)(t.code,{children:"$timeout=1800"}),")"]}),"\n",(0,n.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(t.p,{children:["To define a timeout for an entity set that you create using ",(0,n.jsx)(t.a,{href:"/docs/pt/REST/method#methodentityset",children:(0,n.jsx)(t.code,{children:"$method=entityset"})}),", pass the number of seconds to ",(0,n.jsx)(t.code,{children:"$timeout"}),". Por exemplo, se pretender definir o tempo limite para 20 minutos, introduza 1200. Por defeito, o tempo limite \xe9 de duas (2) horas."]}),"\n",(0,n.jsxs)(t.p,{children:["Una vez que se ha definido el tiempo de espera, cada vez que se llama a un conjunto de entidades (mediante el uso de ",(0,n.jsx)(t.code,{children:"$method=entityset"}),"), el tiempo de espera se recalcula bas\xe1ndose en la hora actual y el tiempo de espera."]}),"\n",(0,n.jsxs)(t.p,{children:["If an entity set is removed and then recreated using ",(0,n.jsx)(t.code,{children:"$method=entityset"})," along with ",(0,n.jsx)(t.a,{href:"/docs/pt/REST/savedfilter",children:(0,n.jsx)(t.code,{children:"$savedfilter"})}),", the new default timeout is 10 minutes regardless of the timeout you defined when calling ",(0,n.jsx)(t.code,{children:"$timeout"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsx)(t.p,{children:"No nosso conjunto de entidades que criamos, definimos o tempo limite para 20 minutos:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:' GET  /rest/Employee/?$filter="salary!=0"&$method=entityset&$timeout=1200'})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,t,o)=>{var n=o(296540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,o){var n,r={},c=null,l=null;for(n in void 0!==o&&(c=""+o),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,n)&&!a.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:i,type:e,key:c,ref:l,props:r,_owner:d.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},474848:(e,t,o)=>{e.exports=o(221020)},28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>d});var n=o(296540);const i={},r=n.createContext(i);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);