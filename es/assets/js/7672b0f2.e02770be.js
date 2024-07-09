/*! For license information please see 7672b0f2.e02770be.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51409],{199466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var o=n(474848),s=n(28453);const r={id:"timeout",title:"$timeout"},i=void 0,d={id:"REST/timeout",title:"$timeout",description:"Define el n\xfamero de segundos para guardar un conjunto de entidades en la cach\xe9 de 4D Server (por ejemplo, $timeout=1800)",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/REST/$timeout.md",sourceDirName:"REST",slug:"/REST/timeout",permalink:"/docs/es/20/REST/timeout",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24timeout.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"timeout",title:"$timeout"},sidebar:"docs",previous:{title:"$skip",permalink:"/docs/es/20/REST/skip"},next:{title:"$top/$limit",permalink:"/docs/es/20/REST/top_$limit"}},a={},c=[{value:"Descripci\xf3n",id:"Descripci\xf3n",level:2},{value:"Ejemplo",id:"Ejemplo",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Define el n\xfamero de segundos para guardar un conjunto de entidades en la cach\xe9 de 4D Server (",(0,o.jsx)(t.em,{children:"por ejemplo"}),", ",(0,o.jsx)(t.code,{children:"$timeout=1800"}),")"]}),"\n",(0,o.jsx)(t.h2,{id:"Descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(t.p,{children:["Para definir un tiempo de espera para un conjunto de entidades creado con ",(0,o.jsx)(t.a,{href:"/docs/es/20/REST/method#methodentityset",children:(0,o.jsx)(t.code,{children:"$method=entityset"})}),", pase el n\xfamero de segundos a ",(0,o.jsx)(t.code,{children:"$timeout"}),". Por ejemplo, si quiere fijar el tiempo de espera en 20 minutos, pase 1200. Por defecto, el tiempo de espera es de dos (2) horas."]}),"\n",(0,o.jsxs)(t.p,{children:["Una vez que se ha definido el tiempo de espera, cada vez que se llama a un conjunto de entidades (mediante el uso de ",(0,o.jsx)(t.code,{children:"$method=entityset"}),"), el tiempo de espera se recalcula bas\xe1ndose en la hora actual y el tiempo de espera."]}),"\n",(0,o.jsxs)(t.p,{children:["Si se elimina un conjunto de entidades y se vuelve a crear con ",(0,o.jsx)(t.code,{children:"$method=entityset"})," junto con ",(0,o.jsx)(t.a,{href:"/docs/es/20/REST/savedfilter",children:(0,o.jsx)(t.code,{children:"$savedfilter"})}),", el nuevo tiempo de espera por defecto es de 10 minutos, independientemente del tiempo de espera que haya definido al llamar a ",(0,o.jsx)(t.code,{children:"$timeout"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"Ejemplo",children:"Ejemplo"}),"\n",(0,o.jsx)(t.p,{children:"En el conjunto de entidades que estamos creando, definimos el tiempo de espera a 20 minutos:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:'GET  /rest/Employee/?$filter="salary!=0"&$method=entityset&$timeout=1200'})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var o=n(296540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var o,r={},c=null,l=null;for(o in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,o)&&!a.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===r[o]&&(r[o]=t[o]);return{$$typeof:s,type:e,key:c,ref:l,props:r,_owner:d.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var o=n(296540);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);