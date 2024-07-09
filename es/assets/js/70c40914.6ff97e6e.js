/*! For license information please see 70c40914.6ff97e6e.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22053],{610840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var o=n(474848),s=n(28453);const i={id:"timeout",title:"$timeout"},r=void 0,d={id:"REST/timeout",title:"$timeout",description:"Define el n\xfamero de segundos para guardar un conjunto de entidades en la cach\xe9 de 4D Server (por ejemplo, $timeout=1800)",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/REST/$timeout.md",sourceDirName:"REST",slug:"/REST/timeout",permalink:"/docs/es/REST/timeout",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24timeout.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"timeout",title:"$timeout"},sidebar:"docs",previous:{title:"$skip",permalink:"/docs/es/REST/skip"},next:{title:"$top/$limit",permalink:"/docs/es/REST/top_$limit"}},c={},a=[{value:"Descripci\xf3n",id:"Descripci\xf3n",level:2},{value:"Ejemplo",id:"Ejemplo",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Define el n\xfamero de segundos para guardar un conjunto de entidades en la cach\xe9 de 4D Server (",(0,o.jsx)(t.em,{children:"por ejemplo"}),", ",(0,o.jsx)(t.code,{children:"$timeout=1800"}),")"]}),"\n",(0,o.jsx)(t.h2,{id:"Descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(t.p,{children:["To define a timeout for an entity set that you create using ",(0,o.jsx)(t.a,{href:"/docs/es/REST/method#methodentityset",children:(0,o.jsx)(t.code,{children:"$method=entityset"})}),", pass the number of seconds to ",(0,o.jsx)(t.code,{children:"$timeout"}),". Por ejemplo, si quiere fijar el tiempo de espera en 20 minutos, pase 1200. Por defecto, el tiempo de espera es de dos (2) horas."]}),"\n",(0,o.jsxs)(t.p,{children:["Una vez que se ha definido el tiempo de espera, cada vez que se llama a un conjunto de entidades (mediante el uso de ",(0,o.jsx)(t.code,{children:"$method=entityset"}),"), el tiempo de espera se recalcula bas\xe1ndose en la hora actual y el tiempo de espera."]}),"\n",(0,o.jsxs)(t.p,{children:["If an entity set is removed and then recreated using ",(0,o.jsx)(t.code,{children:"$method=entityset"})," along with ",(0,o.jsx)(t.a,{href:"/docs/es/REST/savedfilter",children:(0,o.jsx)(t.code,{children:"$savedfilter"})}),", the new default timeout is 10 minutes regardless of the timeout you defined when calling ",(0,o.jsx)(t.code,{children:"$timeout"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"Ejemplo",children:"Ejemplo"}),"\n",(0,o.jsx)(t.p,{children:"En el conjunto de entidades que estamos creando, definimos el tiempo de espera a 20 minutos:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:' GET  /rest/Employee/?$filter="salary!=0"&$method=entityset&$timeout=1200'})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var o=n(296540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,d=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var o,i={},a=null,l=null;for(o in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)r.call(t,o)&&!c.hasOwnProperty(o)&&(i[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===i[o]&&(i[o]=t[o]);return{$$typeof:s,type:e,key:a,ref:l,props:i,_owner:d.current}}t.Fragment=i,t.jsx=a,t.jsxs=a},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var o=n(296540);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);