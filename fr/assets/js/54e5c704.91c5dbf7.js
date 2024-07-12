/*! For license information please see 54e5c704.91c5dbf7.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[85400],{993309:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=t(474848),s=t(28453);const o={id:"binary",title:"$binary"},i=void 0,a={id:"REST/binary",title:"$binary",description:'Passez "true" pour enregistrer le BLOB en tant que document (vous devez \xe9galement passer $expand=)',source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/REST/$binary.md",sourceDirName:"REST",slug:"/REST/binary",permalink:"/docs/fr/REST/binary",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24binary.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"binary",title:"$binary"},sidebar:"docs",previous:{title:"$attributes",permalink:"/docs/fr/REST/attributes"},next:{title:"$clean",permalink:"/docs/fr/REST/clean"}},c={},d=[{value:"Description",id:"description",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:['Passez "true" pour enregistrer le BLOB en tant que document (vous devez \xe9galement passer ',(0,r.jsx)(n.code,{children:"$expand={blobAttributeName}"}),")"]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$binary"})," vous permet d'enregistrer le BLOB en tant que document.  Vous devez \xe9galement utiliser la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/REST/expand",children:(0,r.jsx)(n.code,{children:"$expand"})})," en conjonction avec celle-ci."]}),"\n",(0,r.jsx)(n.p,{children:"Lorsque vous faites la requ\xeate suivante :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt\n"})}),"\n",(0,r.jsx)(n.p,{children:"Il vous sera demand\xe9 o\xf9 enregistrer le BLOB sur le disque :"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(119766).A+"",width:"459",height:"353"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,n,t)=>{var r=t(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,o={},d=null,l=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,r)&&!c.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:s,type:e,key:d,ref:l,props:o,_owner:a.current}}n.Fragment=o,n.jsx=d,n.jsxs=d},474848:(e,n,t)=>{e.exports=t(221020)},119766:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/binary-31d3b11dfbe0bcc90814f0d5800a53df.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(296540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);