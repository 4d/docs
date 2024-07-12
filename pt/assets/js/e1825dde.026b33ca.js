/*! For license information please see e1825dde.026b33ca.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36369],{524520:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var n=o(474848),s=o(28453);const r={id:"distinct",title:"$distinct"},i=void 0,c={id:"REST/distinct",title:"$distinct",description:'Devolve os valores distintos de um atributo espec\xedfico numa cole\xe7\xe3o (e.g., Company/name?$filter="name=a*"&$distinct=true)',source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/REST/$distinct.md",sourceDirName:"REST",slug:"/REST/distinct",permalink:"/docs/pt/18/REST/distinct",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24distinct.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"distinct",title:"$distinct"},sidebar:"docs",previous:{title:"$compute",permalink:"/docs/pt/18/REST/compute"},next:{title:"$entityset",permalink:"/docs/pt/18/REST/entityset"}},d={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2}];function l(e){const t={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Devolve os valores distintos de um atributo espec\xedfico numa cole\xe7\xe3o (",(0,n.jsx)(t.em,{children:"e.g."}),", ",(0,n.jsx)(t.code,{children:'Company/name?$filter="name=a*"&$distinct=true'}),")"]}),"\n",(0,n.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"$distinct"})," permite-lhe devolver uma cole\xe7\xe3o que cont\xe9m os valores distintos de uma consulta sobre um atributo espec\xedfico. S\xf3 pode ser especificado um atributo na dataclass. Geralmente, o tipo String \xe9 o melhor; no entanto, tamb\xe9m pode ser utilizado em qualquer tipo de atributo que possa conter v\xe1rios valores."]}),"\n",(0,n.jsxs)(t.p,{children:["Tamb\xe9m pode utilizar ",(0,n.jsx)(t.code,{children:"$skip"})," e ",(0,n.jsx)(t.code,{children:"$top/$limit"}),", se pretender navegar na sele\xe7\xe3o antes de esta ser colocada num array."]}),"\n",(0,n.jsx)(t.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsx)(t.p,{children:'No nosso exemplo abaixo, queremos obter os valores distintos de um nome de empresa que come\xe7a com a letra "a":'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'GET  /rest/Company/name?$filter="name=a*"&$distinct=true'})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Resposta"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'[\n    "Adobe",\n    "Apple"\n]\n'})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,t,o)=>{var n=o(296540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,o){var n,r={},a=null,l=null;for(n in void 0!==o&&(a=""+o),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,n)&&!d.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:s,type:e,key:a,ref:l,props:r,_owner:c.current}}t.Fragment=r,t.jsx=a,t.jsxs=a},474848:(e,t,o)=>{e.exports=o(221020)},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>c});var n=o(296540);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);