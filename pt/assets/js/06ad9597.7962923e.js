/*! For license information please see 06ad9597.7962923e.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23884],{242654:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var t=o(474848),n=o(28453);const a={id:"imageformat",title:"$imageformat"},i=void 0,s={id:"REST/imageformat",title:"$imageformat",description:"Define o formato de imagem a utilizar para a recupera\xe7\xe3o de imagens (por exemplo, $imageformat=png)",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R4/REST/$imageformat.md",sourceDirName:"REST",slug:"/REST/imageformat",permalink:"/docs/pt/20-R4/REST/imageformat",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24imageformat.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"imageformat",title:"$imageformat"},sidebar:"docs",previous:{title:"$filter",permalink:"/docs/pt/20-R4/REST/filter"},next:{title:"$lock",permalink:"/docs/pt/20-R4/REST/lock"}},d={},m=[{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o",level:2},{value:"Exemplo",id:"Exemplo",level:2}];function c(e){const r={a:"a",code:"code",em:"em",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["Define o formato de imagem a utilizar para a recupera\xe7\xe3o de imagens (",(0,t.jsx)(r.em,{children:"por exemplo"}),", ",(0,t.jsx)(r.code,{children:"$imageformat=png"}),")"]}),"\n",(0,t.jsx)(r.h2,{id:"Descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsx)(r.p,{children:"Definir o formato a utilizar para mostrar imagens. Pode utilizar um dos seguintes formatos (s\xe3o suportadas extens\xf5es, tipos mime e OsType Mac):"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Tipo"}),(0,t.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:'"best"'}),(0,t.jsx)(r.td,{children:"Melhor formato com base na imagem"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:'".gif" ou "image/gif"'}),(0,t.jsx)(r.td,{children:"Formato GIF"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:'".png" ou "image/png"'}),(0,t.jsx)(r.td,{children:"Formato PNG"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:'".jpeg" or "image/jpeg"'}),(0,t.jsx)(r.td,{children:"Formato JPEG"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:'".tiff" ou "image/tiff"'}),(0,t.jsx)(r.td,{children:"Formato TIFF"})]})]})]}),"\n",(0,t.jsxs)(r.p,{children:["Uma vez definido o formato, \xe9 necess\xe1rio passar o atributo de imagem a ",(0,t.jsx)(r.a,{href:"/docs/pt/20-R4/REST/expand",children:(0,t.jsx)(r.code,{children:"$expand"})})," para carregar completamente a fotografia."]}),"\n",(0,t.jsxs)(r.p,{children:["Se n\xe3o houver nenhuma imagem a carregar ou se o formato n\xe3o permitir que a imagem seja carregada, a resposta ser\xe1 um objeto vazio ",(0,t.jsx)(r.code,{children:"{}"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"Exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(r.p,{children:"O exemplo seguinte define o formato de imagem como JPEG, independentemente do tipo real da fotografia, e passa o n\xfamero de vers\xe3o real enviado pelo servidor:"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"GET  /rest/Employee(1)/photo?$imageformat=.jpeg&$version=3&$expand=photo"})})]})}function l(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},221020:(e,r,o)=>{var t=o(296540),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function m(e,r,o){var t,a={},m=null,c=null;for(t in void 0!==o&&(m=""+o),void 0!==r.key&&(m=""+r.key),void 0!==r.ref&&(c=r.ref),r)i.call(r,t)&&!d.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{$$typeof:n,type:e,key:m,ref:c,props:a,_owner:s.current}}r.Fragment=a,r.jsx=m,r.jsxs=m},474848:(e,r,o)=>{e.exports=o(221020)},28453:(e,r,o)=>{o.d(r,{R:()=>i,x:()=>s});var t=o(296540);const n={},a=t.createContext(n);function i(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);