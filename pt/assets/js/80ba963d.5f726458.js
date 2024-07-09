/*! For license information please see 80ba963d.5f726458.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73020],{429322:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=o(474848),n=o(28453);const r={id:"top_$limit",title:"$top/$limit"},s=void 0,d={id:"REST/top_$limit",title:"$top/$limit",description:"Limita o n\xfamero de entidades a devolver (por exemplo, $top=50)",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/REST/$top_$limit.md",sourceDirName:"REST",slug:"/REST/top_$limit",permalink:"/docs/pt/19/REST/top_$limit",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24top_%24limit.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"top_$limit",title:"$top/$limit"},sidebar:"docs",previous:{title:"$timeout",permalink:"/docs/pt/19/REST/timeout"},next:{title:"$version",permalink:"/docs/pt/19/REST/version"}},l={},c=[{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o",level:2},{value:"Exemplo",id:"Exemplo",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",p:"p",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Limita o n\xfamero de entidades a devolver (por exemplo, ",(0,i.jsx)(t.code,{children:"$top=50"}),")"]}),"\n",(0,i.jsx)(t.h2,{id:"Descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"$top/$limit"})," define o limite de entidades a devolver. Por defeito, o n\xfamero \xe9 limitado a 100. Pode utilizar qualquer uma das palavras-chave: ",(0,i.jsx)(t.code,{children:"$top"})," ou ",(0,i.jsx)(t.code,{children:"$limit"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Quando utilizado em conjunto com ",(0,i.jsx)(t.a,{href:"/docs/pt/19/REST/skip",children:(0,i.jsx)(t.code,{children:"$skip"})}),", pode navegar atrav\xe9s da sele\xe7\xe3o de entidades devolvida pelo pedido REST."]}),"\n",(0,i.jsx)(t.h2,{id:"Exemplo",children:"Exemplo"}),"\n",(0,i.jsx)(t.p,{children:"No exemplo seguinte, pedimos as dez entidades seguintes ap\xf3s a 20.\xaa entidade:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20&$top=10"})})]})}function a(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},221020:(e,t,o)=>{var i=o(296540),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,o){var i,r={},c=null,p=null;for(i in void 0!==o&&(c=""+o),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(p=t.ref),t)s.call(t,i)&&!l.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===r[i]&&(r[i]=t[i]);return{$$typeof:n,type:e,key:c,ref:p,props:r,_owner:d.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},474848:(e,t,o)=>{e.exports=o(221020)},28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>d});var i=o(296540);const n={},r=i.createContext(n);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);