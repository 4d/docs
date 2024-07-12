/*! For license information please see 389b7c94.17a4bec9.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51110],{970216:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=o(474848),n=o(28453);const r={id:"top_$limit",title:"$top/$limit"},s=void 0,l={id:"REST/top_$limit",title:"$top/$limit",description:"Limita el n\xfamero de entidades a devolver (por ejemplo, $top=50)",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/REST/$top_$limit.md",sourceDirName:"REST",slug:"/REST/top_$limit",permalink:"/docs/pt/20-R5/REST/top_$limit",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24top_%24limit.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"top_$limit",title:"$top/$limit"},sidebar:"docs",previous:{title:"$timeout",permalink:"/docs/pt/20-R5/REST/timeout"},next:{title:"$version",permalink:"/docs/pt/20-R5/REST/version"}},d={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",p:"p",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Limita el n\xfamero de entidades a devolver (por ejemplo, ",(0,i.jsx)(t.code,{children:"$top=50"}),")"]}),"\n",(0,i.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"$top/$limit"})," define el l\xedmite de entidades a devolver. Por defeito, o n\xfamero \xe9 limitado a 100. Puede utilizar las siguientes palabras claves: ",(0,i.jsx)(t.code,{children:"$top"})," o ",(0,i.jsx)(t.code,{children:"$limit"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["When used in conjunction with ",(0,i.jsx)(t.a,{href:"/docs/pt/20-R5/REST/skip",children:(0,i.jsx)(t.code,{children:"$skip"})}),", you can navigate through the entity selection returned by the REST request."]}),"\n",(0,i.jsx)(t.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,i.jsx)(t.p,{children:"No exemplo seguinte, pedimos as dez entidades seguintes ap\xf3s a 20.\xaa entidade:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20&$top=10"})})]})}function a(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},221020:(e,t,o)=>{var i=o(296540),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,o){var i,r={},c=null,p=null;for(i in void 0!==o&&(c=""+o),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(p=t.ref),t)s.call(t,i)&&!d.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===r[i]&&(r[i]=t[i]);return{$$typeof:n,type:e,key:c,ref:p,props:r,_owner:l.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},474848:(e,t,o)=>{e.exports=o(221020)},28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>l});var i=o(296540);const n={},r=i.createContext(n);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);