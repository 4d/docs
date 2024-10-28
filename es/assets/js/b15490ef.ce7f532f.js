"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79277],{714991:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(474848),i=t(28453);const o={id:"imageformat",title:"$imageformat"},a=void 0,s={id:"REST/imageformat",title:"$imageformat",description:"Define qu\xe9 formato de imagen utilizar para recuperar im\xe1genes (por ejemplo, $imageformat=png)",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/REST/$imageformat.md",sourceDirName:"REST",slug:"/REST/imageformat",permalink:"/docs/es/REST/imageformat",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24imageformat.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"imageformat",title:"$imageformat"},sidebar:"docs",previous:{title:"$format",permalink:"/docs/es/REST/format"},next:{title:"$lock",permalink:"/docs/es/REST/lock"}},d={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Define qu\xe9 formato de imagen utilizar para recuperar im\xe1genes (por ejemplo, ",(0,r.jsx)(n.code,{children:"$imageformat=png"}),")"]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsx)(n.p,{children:"Definir el formato a utilizar para mostrar las im\xe1genes. Puede utilizar uno de los siguientes formatos (se soportan extensiones, tipos mime y OsType Mac):"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'"best"'}),(0,r.jsx)(n.td,{children:"El mejor formato en funci\xf3n de la imagen"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'".gif" o "image/gif"'}),(0,r.jsx)(n.td,{children:"Formato GIF"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'".png" o "image/png"'}),(0,r.jsx)(n.td,{children:"Formato PNG"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'".jpeg" o "image/jpeg"'}),(0,r.jsx)(n.td,{children:"Formato JPEG"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'".tiff" o "image/tiff"'}),(0,r.jsx)(n.td,{children:"Formato TIFF"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Una vez definido el formato, debe pasar el atributo de imagen a ",(0,r.jsx)(n.a,{href:"/docs/es/REST/expand",children:(0,r.jsx)(n.code,{children:"$expand"})})," para cargar la foto por completo."]}),"\n",(0,r.jsxs)(n.p,{children:["Si no hay ninguna imagen para cargar o el formato no permite cargar la imagen, la respuesta ser\xe1 un objeto vac\xedo ",(0,r.jsx)(n.code,{children:"{}"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"El siguiente ejemplo define el formato de la imagen a JPEG independientemente del tipo real de la foto y pasa el n\xfamero de versi\xf3n real enviado por el servidor:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET  /rest/Employee(1)/photo?$imageformat=.jpeg&$version=3&$expand=photo"})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var r=t(296540);const i={},o=r.createContext(i);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);