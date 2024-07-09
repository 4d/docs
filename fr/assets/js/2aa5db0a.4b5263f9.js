/*! For license information please see 2aa5db0a.4b5263f9.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43325],{383706:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var t=s(474848),n=s(28453);const o={id:"savedorderby",title:"$savedorderby"},d=void 0,i={id:"REST/savedorderby",title:"$savedorderby",description:"Enregistre le tri d\xe9fini par $orderby lors de la cr\xe9ation d'un ensemble d'entit\xe9s (par exemple, $savedorderby=\"\")",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R4/REST/$savedorderby.md",sourceDirName:"REST",slug:"/REST/savedorderby",permalink:"/docs/fr/20-R4/REST/savedorderby",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24savedorderby.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"savedorderby",title:"$savedorderby"},sidebar:"docs",previous:{title:"$savedfilter",permalink:"/docs/fr/20-R4/REST/savedfilter"},next:{title:"$skip",permalink:"/docs/fr/20-R4/REST/skip"}},l={},a=[{value:"Description",id:"Description",level:2},{value:"Exemple",id:"Exemple",level:2}];function c(e){const r={a:"a",code:"code",h2:"h2",p:"p",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["Enregistre le tri d\xe9fini par ",(0,t.jsx)(r.code,{children:"$orderby"})," lors de la cr\xe9ation d'un ensemble d'entit\xe9s (par exemple, ",(0,t.jsx)(r.code,{children:'$savedorderby="{orderby}"'}),")"]}),"\n",(0,t.jsx)(r.h2,{id:"Description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:["Lorsque vous cr\xe9ez un ensemble d'entit\xe9s, vous pouvez, par s\xe9curit\xe9, enregistrer l'ordre de tri et le filtre utilis\xe9s pour sa cr\xe9ation. Si l'ensemble d'entit\xe9s que vous avez cr\xe9\xe9 est supprim\xe9 du cache de 4D Server (en raison du timeout, du besoin d'espace sur le serveur ou de la suppression apr\xe8s avoir appel\xe9 ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R4/REST/method#methodrelease",children:(0,t.jsx)(r.code,{children:"$method=release"})}),")."]}),"\n",(0,t.jsxs)(r.p,{children:["Utilisez ",(0,t.jsx)(r.code,{children:"$savedorderby"})," pour enregistrer l'ordre que vous avez d\xe9fini lors de la cr\xe9ation de votre ensemble d'entit\xe9s, puis passez ",(0,t.jsx)(r.code,{children:"$savedorderby"})," avec votre appel, pour r\xe9cup\xe9rer \xe0 chaque fois l'ensemble d'entit\xe9s."]}),"\n",(0,t.jsxs)(r.p,{children:["Si l'ensemble d'entit\xe9s n'est plus dans le cache de 4D Server, il sera recr\xe9\xe9 avec un nouveau timeout de 10 minutes. Si vous avez utilis\xe9 \xe0 la fois ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R4/REST/savedfilter",children:(0,t.jsx)(r.code,{children:"$savedfilter"})})," et ",(0,t.jsx)(r.code,{children:"$savedorderby"})," dans votre appel lors de la cr\xe9ation d'un ensemble d'entit\xe9s et que vous en omettez un, le nouvel ensemble d'entit\xe9s, qui aura le m\xeame num\xe9ro de r\xe9f\xe9rence, le refl\xe9tera."]}),"\n",(0,t.jsx)(r.h2,{id:"Exemple",children:"Exemple"}),"\n",(0,t.jsxs)(r.p,{children:["Appelez d'abord ",(0,t.jsx)(r.code,{children:"$savedorderby"}),", dans l'appel initial, pour cr\xe9er un ensemble d'entit\xe9s :"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:'GET  /rest/People/?$filter="lastName!=\'\'"&$savedfilter="lastName!=\'\'"&$orderby="salary"&$savedorderby="salary"&$method=entityset'})}),"\n",(0,t.jsx)(r.p,{children:"Ensuite, lorsque vous acc\xe9dez \xe0 votre ensemble d'entit\xe9s, \xe9crivez ce qui suit (en utilisant \xe0 la fois $savedfilter et $savedorderby) pour vous assurer que le filtre et son ordre de tri existent toujours :"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:'GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="lastName!=\'\'"&$savedorderby="salary"'})})]})}function u(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},221020:(e,r,s)=>{var t=s(296540),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,s){var t,o={},a=null,c=null;for(t in void 0!==s&&(a=""+s),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(c=r.ref),r)d.call(r,t)&&!l.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:n,type:e,key:a,ref:c,props:o,_owner:i.current}}r.Fragment=o,r.jsx=a,r.jsxs=a},474848:(e,r,s)=>{e.exports=s(221020)},28453:(e,r,s)=>{s.d(r,{R:()=>d,x:()=>i});var t=s(296540);const n={},o=t.createContext(n);function d(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);