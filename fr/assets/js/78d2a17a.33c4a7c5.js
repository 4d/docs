/*! For license information please see 78d2a17a.33c4a7c5.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47994],{242919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(474848),i=n(28453);const o={id:"skip",title:"$skip"},s=void 0,l={id:"REST/skip",title:"$skip",description:"D\xe9marre l'entit\xe9 d\xe9finie par ce num\xe9ro dans la collection (par exemple, $skip=10)",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/REST/$skip.md",sourceDirName:"REST",slug:"/REST/skip",permalink:"/docs/fr/18/REST/skip",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24skip.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"skip",title:"$skip"},sidebar:"docs",previous:{title:"$savedorderby",permalink:"/docs/fr/18/REST/savedorderby"},next:{title:"$timeout",permalink:"/docs/fr/18/REST/timeout"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["D\xe9marre l'entit\xe9 d\xe9finie par ce num\xe9ro dans la collection (par exemple, ",(0,r.jsx)(t.code,{children:"$skip=10"}),")"]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"$skip"})," d\xe9finit l'entit\xe9 de la collection par laquelle commencer. Par d\xe9faut, la collection envoy\xe9e commence par la premi\xe8re entit\xe9. Pour commencer avec la 10e entit\xe9 de la collection, passez 10."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"$skip"})," est g\xe9n\xe9ralement utilis\xe9 avec ",(0,r.jsx)(t.a,{href:"/docs/fr/18/REST/top_$limit",children:(0,r.jsx)(t.code,{children:"$top/$limit"})})," pour naviguer dans une s\xe9lection d'entit\xe9s."]}),"\n",(0,r.jsx)(t.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(t.p,{children:"Dans l'exemple suivant, nous allons \xe0 la 20e entit\xe9 de notre entity selection :"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20"})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,t,n)=>{var r=n(296540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,o={},d=null,a=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(a=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:d,ref:a,props:o,_owner:l.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(296540);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);