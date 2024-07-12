/*! For license information please see d2722d57.c824ac5d.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17876],{538950:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(474848),d=r(28453);const l={id:"ZipFolderClass",title:"ZIPFolder"},t=void 0,i={id:"API/ZipFolderClass",title:"ZIPFolder",description:"Les propri\xe9t\xe9s et fonctions suivantes de la classe Folder sont disponibles pour les objets ZIPFolder :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/API/ZipFolderClass.md",sourceDirName:"API",slug:"/API/ZipFolderClass",permalink:"/docs/fr/20-R5/API/ZipFolderClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FZipFolderClass.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"ZipFolderClass",title:"ZIPFolder"},sidebar:"docs",previous:{title:"ZIPFile",permalink:"/docs/fr/20-R5/API/ZipFileClass"},next:{title:"Processes et Workers",permalink:"/docs/fr/20-R5/Develop/processes"}},o={},c=[];function a(e){const s={a:"a",code:"code",em:"em",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["Les propri\xe9t\xe9s et fonctions suivantes de la classe ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/API/FolderClass",children:"Folder"})," sont disponibles pour les objets ",(0,n.jsx)(s.code,{children:"ZIPFolder"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.th,{children:["API disponibles de ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R5/API/FolderClass",children:"Folder"})," API des ZIPFolder"]}),(0,n.jsx)(s.th,{children:"Commentaire"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/fr/20-R5/API/FolderClass#copyto",children:[(0,n.jsx)(s.strong,{children:".copyTo"}),"( ",(0,n.jsx)(s.em,{children:"destinationFolder"})," : 4D.Folder { ; ",(0,n.jsx)(s.em,{children:"newName"})," : Text } { ; ",(0,n.jsx)(s.em,{children:"overwrite"})," : Integer } ) : 4D.Folder"]})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/fr/20-R5/API/FolderClass#creationdate",children:[(0,n.jsx)(s.strong,{children:".creationDate"})," : Date"]})}),(0,n.jsxs)(s.td,{children:["La date du dossier ",(0,n.jsx)(s.code,{children:"racine"})," peut \xeatre diff\xe9rente de celle du dossier de l'archive."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/fr/20-R5/API/FolderClass#creationtime",children:[(0,n.jsx)(s.strong,{children:".creationTime"})," : Time"]})}),(0,n.jsxs)(s.td,{children:["L'heure du dossier ",(0,n.jsx)(s.code,{children:"racine"})," peut \xeatre diff\xe9rente de celle du dossier de l'archive."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/fr/20-R5/API/FolderClass#exists",children:[(0,n.jsx)(s.strong,{children:".exists"})," : Boolean"]})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/fr/20-R5/API/FolderClass#extension",children:[(0,n.jsx)(s.strong,{children:".extension"})," : Text"]})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/fr/20-R5/API/FolderClass#file",children:[(0,n.jsx)(s.strong,{children:".file"}),"( ",(0,n.jsx)(s.em,{children:"path"})," : Text ) : 4D.File"]})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/fr/20-R5/API/FolderClass#files",children:[(0,n.jsx)(s.strong,{children:".files"}),"( { ",(0,n.jsx)(s.em,{children:"options"})," : Integer } ) : Collection"]})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/fr/20-R5/API/FolderClass#folder",children:[(0,n.jsx)(s.strong,{children:".folder"}),"( ",(0,n.jsx)(s.em,{children:"path"})," : Text ) : 4D.Folder"]})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/fr/20-R5/API/FolderClass#folders",children:[(0,n.jsx)(s.strong,{children:".folders"}),"( { ",(0,n.jsx)(s.em,{children:"options"})," : Integer } ) : Collection"]})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/fr/20-R5/API/FolderClass#fullname",children:[(0,n.jsx)(s.strong,{children:".fullName"})," : Text"]})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/fr/20-R5/API/FolderClass#geticon",children:[(0,n.jsx)(s.strong,{children:".getIcon"}),"( { ",(0,n.jsx)(s.em,{children:"size"})," : Integer } ) : Picture"]})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/fr/20-R5/API/FolderClass#hidden",children:[(0,n.jsx)(s.strong,{children:".hidden"})," : Boolean"]})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/fr/20-R5/API/FolderClass#isalias",children:[(0,n.jsx)(s.strong,{children:".isAlias"})," : Boolean"]})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/fr/20-R5/API/FolderClass#isfile",children:[(0,n.jsx)(s.strong,{children:".isFile"})," : Boolean"]})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/fr/20-R5/API/FolderClass#isfolder",children:[(0,n.jsx)(s.strong,{children:".isFolder"})," : Boolean"]})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/fr/20-R5/API/FolderClass#ispackage",children:[(0,n.jsx)(s.strong,{children:".isPackage"})," : Boolean"]})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/fr/20-R5/API/FolderClass#modificationdate",children:[(0,n.jsx)(s.strong,{children:".modificationDate"})," : Date"]})}),(0,n.jsxs)(s.td,{children:["La date du dossier ",(0,n.jsx)(s.code,{children:"racine"})," peut \xeatre diff\xe9rente de celle du dossier de l'archive."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/fr/20-R5/API/FolderClass#modificationtime",children:[(0,n.jsx)(s.strong,{children:".modificationTime"})," : Time"]})}),(0,n.jsxs)(s.td,{children:["L'heure du dossier ",(0,n.jsx)(s.code,{children:"racine"})," peut \xeatre diff\xe9rente de celle du dossier de l'archive."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/fr/20-R5/API/FolderClass#name",children:[(0,n.jsx)(s.strong,{children:".name"})," : Text"]})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/fr/20-R5/API/FolderClass#original",children:[(0,n.jsx)(s.strong,{children:".original"})," : 4D.Folder"]})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/fr/20-R5/API/FolderClass#parent",children:[(0,n.jsx)(s.strong,{children:".parent"})," : 4D.Folder"]})}),(0,n.jsxs)(s.td,{children:["Le dossier ",(0,n.jsx)(s.code,{children:"racine"})," virtuel de l'archive n'a pas de parent. Cependant, les dossiers de l'archive peuvent avoir un parent autre que la racine."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/fr/20-R5/API/FolderClass#path",children:[(0,n.jsx)(s.strong,{children:".path"})," : Text"]})}),(0,n.jsx)(s.td,{children:"Retourne un chemin relatif \xe0 l'archive"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/fr/20-R5/API/FolderClass#platformpath",children:[(0,n.jsx)(s.strong,{children:".platformPath"})," : Text"]})}),(0,n.jsx)(s.td,{})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},221020:(e,s,r)=>{var n=r(296540),d=Symbol.for("react.element"),l=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,r){var n,l={},c=null,a=null;for(n in void 0!==r&&(c=""+r),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(a=s.ref),s)t.call(s,n)&&!o.hasOwnProperty(n)&&(l[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===l[n]&&(l[n]=s[n]);return{$$typeof:d,type:e,key:c,ref:a,props:l,_owner:i.current}}s.Fragment=l,s.jsx=c,s.jsxs=c},474848:(e,s,r)=>{e.exports=r(221020)},28453:(e,s,r)=>{r.d(s,{R:()=>t,x:()=>i});var n=r(296540);const d={},l=n.createContext(d);function t(e){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);