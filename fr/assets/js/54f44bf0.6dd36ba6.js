/*! For license information please see 54f44bf0.6dd36ba6.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97030],{896968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=n(474848),s=n(28453);const o={id:"binary",title:"$binary"},i=void 0,a={id:"REST/binary",title:"$binary",description:'Passez "true" pour enregistrer le BLOB en tant que document (vous devez \xe9galement passer $expand=)',source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/REST/$binary.md",sourceDirName:"REST",slug:"/REST/binary",permalink:"/docs/fr/20/REST/binary",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24binary.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"binary",title:"$binary"},sidebar:"docs",previous:{title:"$attributes",permalink:"/docs/fr/20/REST/attributes"},next:{title:"$compute",permalink:"/docs/fr/20/REST/compute"}},c={},d=[{value:"Description",id:"Description",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:['Passez "true" pour enregistrer le BLOB en tant que document (vous devez \xe9galement passer ',(0,r.jsx)(t.code,{children:"$expand={blobAttributeName}"}),")"]}),"\n",(0,r.jsx)(t.h2,{id:"Description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"$binary"})," vous permet d'enregistrer le BLOB en tant que document.  Vous devez \xe9galement utiliser la commande ",(0,r.jsx)(t.a,{href:"/docs/fr/20/REST/expand",children:(0,r.jsx)(t.code,{children:"$expand"})}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Lorsque vous faites la requ\xeate suivante :"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt\n"})}),"\n",(0,r.jsx)(t.p,{children:"Il vous sera demand\xe9 o\xf9 enregistrer le BLOB sur le disque :"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(647293).A+"",width:"459",height:"353"})})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},221020:(e,t,n)=>{var r=n(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,o={},d=null,u=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:s,type:e,key:d,ref:u,props:o,_owner:a.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},647293:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/binary-31d3b11dfbe0bcc90814f0d5800a53df.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(296540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);