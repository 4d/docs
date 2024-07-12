/*! For license information please see 3ffcf166.9ce4572e.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61638],{272898:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=i(474848),n=i(28453);const s={id:"top_$limit",title:"$top/$limit"},r=void 0,l={id:"REST/top_$limit",title:"$top/$limit",description:"Limita el n\xfamero de entidades a devolver (por ejemplo, $top=50)",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/REST/$top_$limit.md",sourceDirName:"REST",slug:"/REST/top_$limit",permalink:"/docs/es/20/REST/top_$limit",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24top_%24limit.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"top_$limit",title:"$top/$limit"},sidebar:"docs",previous:{title:"$timeout",permalink:"/docs/es/20/REST/timeout"},next:{title:"$version",permalink:"/docs/es/20/REST/version"}},d={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",p:"p",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Limita el n\xfamero de entidades a devolver (por ejemplo, ",(0,o.jsx)(t.code,{children:"$top=50"}),")"]}),"\n",(0,o.jsx)(t.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"$top/$limit"})," define el l\xedmite de entidades a devolver. Por defecto, el n\xfamero est\xe1 limitado a 100. Puede utilizar las siguientes palabras claves: ",(0,o.jsx)(t.code,{children:"$top"})," o ",(0,o.jsx)(t.code,{children:"$limit"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Cuando se utiliza junto con ",(0,o.jsx)(t.a,{href:"/docs/es/20/REST/skip",children:(0,o.jsx)(t.code,{children:"$skip"})}),", se puede navegar a trav\xe9s de la selecci\xf3n de entidades devuelta por la petici\xf3n REST."]}),"\n",(0,o.jsx)(t.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsx)(t.p,{children:"En el siguiente ejemplo, solicitamos las diez entidades siguientes a la vig\xe9sima entidad:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20&$top=10"})})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},221020:(e,t,i)=>{var o=i(296540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,i){var o,s={},c=null,a=null;for(o in void 0!==i&&(c=""+i),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(a=t.ref),t)r.call(t,o)&&!d.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===s[o]&&(s[o]=t[o]);return{$$typeof:n,type:e,key:c,ref:a,props:s,_owner:l.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},474848:(e,t,i)=>{e.exports=i(221020)},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>l});var o=i(296540);const n={},s=o.createContext(n);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);