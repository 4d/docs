/*! For license information please see 98b7d565.c3061511.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94483],{989315:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(474848),i=t(28453);const s={id:"distinct",title:"$distinct"},o=void 0,c={id:"REST/distinct",title:"$distinct",description:'Devuelve los diferentes valores de un atributo espec\xedfico en una colecci\xf3n (por ejemplo, Company/name?$filter="name=a*"&$distinct=true)',source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/REST/$distinct.md",sourceDirName:"REST",slug:"/REST/distinct",permalink:"/docs/es/REST/distinct",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24distinct.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"distinct",title:"$distinct"},sidebar:"docs",previous:{title:"$compute",permalink:"/docs/es/REST/compute"},next:{title:"$entityset",permalink:"/docs/es/REST/entityset"}},l={},d=[{value:"Descripci\xf3n",id:"Descripci\xf3n",level:2},{value:"Ejemplo",id:"Ejemplo",level:2}];function a(e){const n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Devuelve los diferentes valores de un atributo espec\xedfico en una colecci\xf3n (",(0,r.jsx)(n.em,{children:"por ejemplo"}),", ",(0,r.jsx)(n.code,{children:'Company/name?$filter="name=a*"&$distinct=true'}),")"]}),"\n",(0,r.jsx)(n.h2,{id:"Descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$distinct"})," permite devolver una colecci\xf3n que contiene los diferente valores de una petici\xf3n sobre un atributo espec\xedfico. S\xf3lo se puede especificar un atributo en la dataclass. Generalmente, el tipo String es el mejor; sin embargo, tambi\xe9n puede utilizarlo en cualquier tipo de atributo que pueda contener m\xfaltiples valores."]}),"\n",(0,r.jsxs)(n.p,{children:["Tambi\xe9n puede utilizar ",(0,r.jsx)(n.code,{children:"$skip"})," y ",(0,r.jsx)(n.code,{children:"$top/$limit"}),", si desea navegar por la selecci\xf3n antes de colocarla en un array."]}),"\n",(0,r.jsx)(n.h2,{id:"Ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:'En nuestro ejemplo siguiente, queremos recuperar los diferentes valores de un nombre de empresa que empiece por la letra "a":'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:'GET  /rest/Company/name?$filter="name=a*"&$distinct=true'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Response"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'[\n    "Adobe",\n    "Apple"\n]\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,n,t)=>{var r=t(296540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,s={},d=null,a=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)o.call(n,r)&&!l.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:i,type:e,key:d,ref:a,props:s,_owner:c.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(296540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);