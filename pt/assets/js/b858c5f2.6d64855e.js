/*! For license information please see b858c5f2.6d64855e.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[13606],{668765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=n(474848),o=n(28453);const s={id:"binary",title:"$binary"},i=void 0,a={id:"REST/binary",title:"$binary",description:'Passe "true" para guardar o BLOB como um documento (deve tamb\xe9m passar $expand=)',source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/REST/$binary.md",sourceDirName:"REST",slug:"/REST/binary",permalink:"/docs/pt/18/REST/binary",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24binary.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"binary",title:"$binary"},sidebar:"docs",previous:{title:"$attributes",permalink:"/docs/pt/18/REST/attributes"},next:{title:"$compute",permalink:"/docs/pt/18/REST/compute"}},c={},d=[{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:['Passe "true" para guardar o BLOB como um documento (deve tamb\xe9m passar ',(0,r.jsx)(t.code,{children:"$expand={blobAttributeName}"}),")"]}),"\n",(0,r.jsx)(t.h2,{id:"Descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"$binary"})," permite-lhe guardar o BLOB como um documento.  Tamb\xe9m \xe9 necess\xe1rio utilizar o comando ",(0,r.jsx)(t.a,{href:"/docs/pt/18/REST/expand",children:(0,r.jsx)(t.code,{children:"$expand"})})," em conjunto com ele."]}),"\n",(0,r.jsx)(t.p,{children:"Quando fizer o seguinte pedido:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt\n"})}),"\n",(0,r.jsx)(t.p,{children:"Ser-lhe-\xe1 perguntado onde guardar o BLOB no disco:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(13780).A+"",width:"459",height:"353"})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},221020:(e,t,n)=>{var r=n(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,s={},d=null,u=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:d,ref:u,props:s,_owner:a.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},13780:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/binary-31d3b11dfbe0bcc90814f0d5800a53df.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(296540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);