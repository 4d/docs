/*! For license information please see 8c42e440.0b4828b7.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22073],{996611:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=o(474848),n=o(28453);const a={id:"expand",title:"$expand"},i=void 0,s={id:"REST/expand",title:"$expand",description:"Expands an image stored in an Image attribute (e.g., Employee(1)/photo?$imageformat=best&$expand=photo) or Expands an BLOB attribute to save it.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/REST/$expand.md",sourceDirName:"REST",slug:"/REST/expand",permalink:"/docs/pt/REST/expand",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24expand.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"expand",title:"$expand"},sidebar:"docs",previous:{title:"$entityset",permalink:"/docs/pt/REST/entityset"},next:{title:"$filter",permalink:"/docs/pt/REST/filter"}},d={},c=[{value:"Vendo um atributo de imagem",id:"Vendo-um-atributo-de-imagem",level:2},{value:"Salvar um atributo BLOB ao disco",id:"Salvar-um-atributo-BLOB-ao-disco",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Expands an image stored in an Image attribute (",(0,r.jsx)(t.em,{children:"e.g."}),", ",(0,r.jsx)(t.code,{children:"Employee(1)/photo?$imageformat=best&$expand=photo"}),")",(0,r.jsx)(t.br,{})," or",(0,r.jsx)(t.br,{})," Expands an BLOB attribute to save it."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Compatibilidad"}),": por razones de compatibilidad, $expand puede utilizarse para expandir un atributo relacional (",(0,r.jsx)(t.em,{children:"por ejemplo"}),", ",(0,r.jsx)(t.code,{children:"Company(1)?$expand=staff"})," o ",(0,r.jsx)(t.code,{children:'Employee/?$filter="firstName BEGIN a"&$expand=employer'}),"). It is however recommended to use ",(0,r.jsx)(t.a,{href:"/docs/pt/REST/attributes",children:(0,r.jsx)(t.code,{children:"$attributes"})})," for this feature."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"Vendo-um-atributo-de-imagem",children:"Vendo um atributo de imagem"}),"\n",(0,r.jsx)(t.p,{children:"Se quiser ver um atributo de imagem integralmente, escreva o abaixo:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo"})}),"\n",(0,r.jsxs)(t.p,{children:["For more information about the image formats, refer to ",(0,r.jsx)(t.a,{href:"/docs/pt/REST/imageformat",children:(0,r.jsx)(t.code,{children:"$imageformat"})}),". For more information about the version parameter, refer to ",(0,r.jsx)(t.a,{href:"/docs/pt/REST/version",children:(0,r.jsx)(t.code,{children:"$version"})}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"Salvar-um-atributo-BLOB-ao-disco",children:"Salvar um atributo BLOB ao disco"}),"\n",(0,r.jsx)(t.p,{children:'Se quiser salvar um BLOB armazenado em sua classe de dados pode escrever o seguinte passando tamb\xe9m "true" a $binary:'}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt"})})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,t,o)=>{var r=o(296540),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,o){var r,a={},c=null,l=null;for(r in void 0!==o&&(c=""+o),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,r)&&!d.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:n,type:e,key:c,ref:l,props:a,_owner:s.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},474848:(e,t,o)=>{e.exports=o(221020)},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>s});var r=o(296540);const n={},a=r.createContext(n);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);