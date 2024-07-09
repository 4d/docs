/*! For license information please see 978d39fb.22e2b3d7.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8063],{655305:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=o(474848),r=o(28453);const n={id:"expand",title:"$expand"},i=void 0,s={id:"REST/expand",title:"$expand",description:"Expande uma imagem armazenada num atributo Image (, por exemplo,, Employee(1)/photo?$imageformat=best&$expand=photo) ou Expande um atributo BLOB para o guardar.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/REST/$expand.md",sourceDirName:"REST",slug:"/REST/expand",permalink:"/docs/pt/19/REST/expand",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24expand.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"expand",title:"$expand"},sidebar:"docs",previous:{title:"$entityset",permalink:"/docs/pt/19/REST/entityset"},next:{title:"$filter",permalink:"/docs/pt/19/REST/filter"}},d={},c=[{value:"Vendo um atributo de imagem",id:"Vendo-um-atributo-de-imagem",level:2},{value:"Salvar um atributo BLOB ao disco",id:"Salvar-um-atributo-BLOB-ao-disco",level:2}];function m(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Expande uma imagem armazenada num atributo Image (",(0,a.jsx)(t.em,{children:", por exemplo,"}),", ",(0,a.jsx)(t.code,{children:"Employee(1)/photo?$imageformat=best&$expand=photo"}),")",(0,a.jsx)(t.br,{})," ou",(0,a.jsx)(t.br,{})," Expande um atributo BLOB para o guardar."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Compatibilidade"}),": Por raz\xf5es de compatibilidade, $expand pode ser utilizado para expandir um atributo relacional (",(0,a.jsx)(t.em,{children:"e.g."}),", ",(0,a.jsx)(t.code,{children:"Company(1)?$expand=staff"})," ou ",(0,a.jsx)(t.code,{children:'Employee/?$filter="firstName BEGIN a"&$expand=employer'}),"). No entanto, recomenda-se a utiliza\xe7\xe3o do endere\xe7o ",(0,a.jsx)(t.a,{href:"/docs/pt/19/REST/attributes",children:(0,a.jsx)(t.code,{children:"$attributes"})})," para esta funcionalidade."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"Vendo-um-atributo-de-imagem",children:"Vendo um atributo de imagem"}),"\n",(0,a.jsx)(t.p,{children:"Se quiser ver um atributo de imagem integralmente, escreva o abaixo:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo"})}),"\n",(0,a.jsxs)(t.p,{children:["Para saber mais sobre formatos de imagem, veja ",(0,a.jsx)(t.a,{href:"/docs/pt/19/REST/imageformat",children:(0,a.jsx)(t.code,{children:"$imageformat"})}),". Para saber mais sobre par\xe2metros de vers\xe3o, veja ",(0,a.jsx)(t.a,{href:"/docs/pt/19/REST/version",children:(0,a.jsx)(t.code,{children:"$version"})}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"Salvar-um-atributo-BLOB-ao-disco",children:"Salvar um atributo BLOB ao disco"}),"\n",(0,a.jsx)(t.p,{children:'Se quiser salvar um BLOB armazenado em sua classe de dados pode escrever o seguinte passando tamb\xe9m "true" a $binary:'}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt"})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},221020:(e,t,o)=>{var a=o(296540),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,o){var a,n={},c=null,m=null;for(a in void 0!==o&&(c=""+o),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(m=t.ref),t)i.call(t,a)&&!d.hasOwnProperty(a)&&(n[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===n[a]&&(n[a]=t[a]);return{$$typeof:r,type:e,key:c,ref:m,props:n,_owner:s.current}}t.Fragment=n,t.jsx=c,t.jsxs=c},474848:(e,t,o)=>{e.exports=o(221020)},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>s});var a=o(296540);const r={},n=a.createContext(r);function i(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);