/*! For license information please see ae952e15.40fae324.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32930],{420648:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=t(474848),i=t(28453);const o={id:"onOpenExternalLink",title:"On Open External Link"},s=void 0,a={id:"Events/onOpenExternalLink",title:"On Open External Link",description:"| Code | Puede ser llamado por                       | Definici\xf3n                                    |",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/Events/onOpenExternalLink.md",sourceDirName:"Events",slug:"/Events/onOpenExternalLink",permalink:"/docs/es/Events/onOpenExternalLink",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonOpenExternalLink.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"onOpenExternalLink",title:"On Open External Link"},sidebar:"docs",previous:{title:"On Open Detail",permalink:"/docs/es/Events/onOpenDetail"},next:{title:"On Outside Call",permalink:"/docs/es/Events/onOutsideCall"}},l={},d=[{value:"Descripci\xf3n",id:"Descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"Ver-tambi\xe9n",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Code"}),(0,r.jsx)(n.th,{children:"Puede ser llamado por"}),(0,r.jsx)(n.th,{children:"Definici\xf3n"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"52"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/es/FormObjects/webAreaOverview",children:"\xc1rea Web"})}),(0,r.jsx)(n.td,{children:"Se ha abierto una URL externa en el navegador"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"Descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["Este evento se genera cuando la carga de una URL fue bloqueada por el \xe1rea web y la URL fue abierta con el navegador actual del sistema, debido a un filtro configurado a trav\xe9s del comando ",(0,r.jsx)(n.code,{children:"WA SET EXTERNAL LINKS FILTERS"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Puede identificar la URL bloqueada utilizando el comando ",(0,r.jsx)(n.code,{children:"WA Get last filtered URL"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"Ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/es/Events/onUrlFiltering",children:(0,r.jsx)(n.code,{children:"On URL Filtering"})})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},221020:(e,n,t)=>{var r=t(296540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,o={},d=null,c=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)s.call(n,r)&&!l.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:i,type:e,key:d,ref:c,props:o,_owner:a.current}}n.Fragment=o,n.jsx=d,n.jsxs=d},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(296540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);