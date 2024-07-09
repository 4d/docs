/*! For license information please see 9fac5097.29abbe54.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92413],{758529:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(474848),a=t(28453);const o={id:"expand",title:"$expand"},i=void 0,s={id:"REST/expand",title:"$expand",description:"Expands an image stored in an Image attribute (e.g., Employee(1)/photo?$imageformat=best&$expand=photo) or Expands an BLOB attribute to save it.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/REST/$expand.md",sourceDirName:"REST",slug:"/REST/expand",permalink:"/docs/es/19/REST/expand",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24expand.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"expand",title:"$expand"},sidebar:"docs",previous:{title:"$entityset",permalink:"/docs/es/19/REST/entityset"},next:{title:"$filter",permalink:"/docs/es/19/REST/filter"}},d={},c=[{value:"Visualizaci\xf3n de un atributo de imagen",id:"Visualizaci\xf3n-de-un-atributo-de-imagen",level:2},{value:"Guardar un atributo BLOB en el disco",id:"Guardar-un-atributo-BLOB-en-el-disco",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Expands an image stored in an Image attribute (",(0,r.jsx)(n.em,{children:"e.g."}),", ",(0,r.jsx)(n.code,{children:"Employee(1)/photo?$imageformat=best&$expand=photo"}),")",(0,r.jsx)(n.br,{})," or",(0,r.jsx)(n.br,{})," Expands an BLOB attribute to save it."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Compatibilidad"}),": por razones de compatibilidad, $expand puede utilizarse para expandir un atributo relacional (",(0,r.jsx)(n.em,{children:"por ejemplo"}),", ",(0,r.jsx)(n.code,{children:"Company(1)?$expand=staff"})," o ",(0,r.jsx)(n.code,{children:'Employee/?$filter="firstName BEGIN a"&$expand=employer'}),"). Sin embargo, se recomienda utilizar ",(0,r.jsx)(n.a,{href:"/docs/es/19/REST/attributes",children:(0,r.jsx)(n.code,{children:"$attributes"})})," para esta funcionalidad."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"Visualizaci\xf3n-de-un-atributo-de-imagen",children:"Visualizaci\xf3n de un atributo de imagen"}),"\n",(0,r.jsx)(n.p,{children:"Si desea visualizar un atributo de imagen en su totalidad, escriba lo siguiente:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo"})}),"\n",(0,r.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre los formatos de imagen, consulte ",(0,r.jsx)(n.a,{href:"/docs/es/19/REST/imageformat",children:(0,r.jsx)(n.code,{children:"$imageformat"})}),". Para m\xe1s informaci\xf3n sobre el par\xe1metro de versi\xf3n, consulte ",(0,r.jsx)(n.a,{href:"/docs/es/19/REST/version",children:(0,r.jsx)(n.code,{children:"$version"})}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"Guardar-un-atributo-BLOB-en-el-disco",children:"Guardar un atributo BLOB en el disco"}),"\n",(0,r.jsx)(n.p,{children:'Si quiere guardar un BLOB almacenado en su clase de datos, puedes escribir lo siguiente pasando tambi\xe9n "true" a $binary:'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,n,t)=>{var r=t(296540),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,o={},c=null,l=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,r)&&!d.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:a,type:e,key:c,ref:l,props:o,_owner:s.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var r=t(296540);const a={},o=r.createContext(a);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);