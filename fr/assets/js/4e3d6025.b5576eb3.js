"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61721"],{578004:function(e,t,n){n.r(t),n.d(t,{default:()=>m,frontMatter:()=>o,metadata:()=>r,assets:()=>l,toc:()=>d,contentTitle:()=>a});var r=JSON.parse('{"id":"REST/imageformat","title":"$imageformat","description":"D\xe9finit le format d\'image \xe0 utiliser pour r\xe9cup\xe9rer des images (par exemple, $imageformat=png)","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/REST/$imageformat.md","sourceDirName":"REST","slug":"/REST/imageformat","permalink":"/docs/fr/REST/imageformat","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24imageformat.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"imageformat","title":"$imageformat"},"sidebar":"docs","previous":{"title":"$format","permalink":"/docs/fr/REST/format"},"next":{"title":"$lock","permalink":"/docs/fr/REST/lock"}}'),i=n("785893"),s=n("250065");let o={id:"imageformat",title:"$imageformat"},a=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2}];function c(e){let t={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["D\xe9finit le format d'image \xe0 utiliser pour r\xe9cup\xe9rer des images (par exemple, ",(0,i.jsx)(t.code,{children:"$imageformat=png"}),")"]}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"D\xe9finissez le format \xe0 utiliser pour afficher les images. Vous pouvez utiliser l'un des formats suivants (extensions, types MIME et OsType Mac sont pris en charge) :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:'"best"'}),(0,i.jsx)(t.td,{children:"Meilleur format bas\xe9 sur l'image"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:'".gif" or "image/gif"'}),(0,i.jsx)(t.td,{children:"Format GIF"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:'".png" or "image/png"'}),(0,i.jsx)(t.td,{children:"Format PNG"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:'".jpeg" or "image/jpeg"'}),(0,i.jsx)(t.td,{children:"Format JPEG"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:'".tiff" or "image/tiff"'}),(0,i.jsx)(t.td,{children:"Format TIFF"})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["Une fois que vous avez d\xe9fini le format, vous devez passer l'attribut de l'image \xe0 ",(0,i.jsx)(t.a,{href:"/docs/fr/REST/expand",children:(0,i.jsx)(t.code,{children:"$expand"})})," pour charger compl\xe8tement la photo."]}),"\n",(0,i.jsxs)(t.p,{children:["S'il n'y a pas d'image \xe0 charger ou si le format ne permet pas de charger l'image, la r\xe9ponse sera un objet vide ",(0,i.jsx)(t.code,{children:"{}"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(t.p,{children:"L'exemple suivant d\xe9finit le format d'image au format JPEG, quel que soit le v\xe9ritable type de la photo et passe le v\xe9ritable num\xe9ro de version envoy\xe9 par le serveur :"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"GET  /rest/Employee(1)/photo?$imageformat=.jpeg&$version=3&$expand=photo"})})]})}function m(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return o}});var r=n(667294);let i={},s=r.createContext(i);function o(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);