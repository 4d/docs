/*! For license information please see a12f0de0.837f800d.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31262],{651136:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var t=n(474848),r=n(28453);const i={id:"ZipFileClass",title:"ZIPFile"},l=void 0,d={id:"API/ZipFileClass",title:"ZIPFile",description:"The following properties and functions from the File class are available to ZIPFile objects:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/API/ZipFileClass.md",sourceDirName:"API",slug:"/API/ZipFileClass",permalink:"/docs/pt/20-R5/API/ZipFileClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FZipFileClass.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"ZipFileClass",title:"ZIPFile"},sidebar:"docs",previous:{title:"ZIPArchive",permalink:"/docs/pt/20-R5/API/ZipArchiveClass"},next:{title:"ZIPFolder",permalink:"/docs/pt/20-R5/API/ZipFolderClass"}},o={},c=[];function a(e){const s={a:"a",br:"br",code:"code",em:"em",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["The following properties and functions from the ",(0,t.jsx)(s.a,{href:"/docs/pt/20-R5/API/FileClass",children:"File"})," class are available to ",(0,t.jsx)(s.code,{children:"ZIPFile"})," objects:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.th,{children:["APIs dispon\xedveis de ",(0,t.jsx)(s.a,{href:"/docs/pt/20-R5/API/FileClass",children:"File"})," para ZIPFile"]}),(0,t.jsx)(s.th,{children:"Coment\xe1rio"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/pt/20-R5/API/FileClass#copyto",children:[(0,t.jsx)(s.strong,{children:".copyTo"}),"( ",(0,t.jsx)(s.em,{children:"destinationFolder"})," : 4D.Folder { ; ",(0,t.jsx)(s.em,{children:"newName"})," : Text } { ; ",(0,t.jsx)(s.em,{children:"overwrite"})," : Integer } ) : 4D.File"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/pt/20-R5/API/FileClass#creationdate",children:[(0,t.jsx)(s.strong,{children:".creationDate"})," : Date"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/pt/20-R5/API/FileClass#creationtime",children:[(0,t.jsx)(s.strong,{children:".creationTime"})," : Time"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/pt/20-R5/API/FileClass#exists",children:[(0,t.jsx)(s.strong,{children:".exists"})," : Boolean"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/pt/20-R5/API/FileClass#extension",children:[(0,t.jsx)(s.strong,{children:".extension"})," : Text"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/pt/20-R5/API/FileClass#fullname",children:[(0,t.jsx)(s.strong,{children:".fullName"})," : Text"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/pt/20-R5/API/FileClass#getcontent",children:[(0,t.jsx)(s.strong,{children:".getContent( )"})," : 4D.Blob"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/pt/20-R5/API/FileClass#geticon",children:[(0,t.jsx)(s.strong,{children:".getIcon"}),"( { ",(0,t.jsx)(s.em,{children:"size"})," : Integer } ) : Picture"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/pt/20-R5/API/FileClass#gettext",children:[(0,t.jsx)(s.strong,{children:".getText"}),"( { ",(0,t.jsx)(s.em,{children:"charSetName"})," : Text { ; ",(0,t.jsx)(s.em,{children:"breakMode"})," : Integer } } ) : Text",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:".getText"}),"( { ",(0,t.jsx)(s.em,{children:"charSetNum"})," : Integer { ; ",(0,t.jsx)(s.em,{children:"breakMode"})," : Integer } } ) : Text"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/pt/20-R5/API/FileClass#hidden",children:[(0,t.jsx)(s.strong,{children:".hidden"})," : Boolean"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/pt/20-R5/API/FileClass#isalias",children:[(0,t.jsx)(s.strong,{children:".isAlias"})," : Boolean"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/pt/20-R5/API/FileClass#isfile",children:[(0,t.jsx)(s.strong,{children:".isFile"})," : Boolean"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/pt/20-R5/API/FileClass#isfolder",children:[(0,t.jsx)(s.strong,{children:".isFolder"})," : Boolean"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/pt/20-R5/API/FileClass#iswritable",children:[(0,t.jsx)(s.strong,{children:".isWritable"})," : Boolean"]})}),(0,t.jsx)(s.td,{children:"Sempre false com arquivo ZIP"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/pt/20-R5/API/FileClass#modificationdate",children:[(0,t.jsx)(s.strong,{children:".modificationDate"})," : Date"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/pt/20-R5/API/FileClass#modificationtime",children:[(0,t.jsx)(s.strong,{children:".modificationTime"})," : Time"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/pt/20-R5/API/FileClass#name",children:[(0,t.jsx)(s.strong,{children:".name"})," : Text"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/pt/20-R5/API/FileClass#original",children:[(0,t.jsx)(s.strong,{children:".original"})," : 4D.File",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:".original"})," : 4D.Folder"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/pt/20-R5/API/FileClass#parent",children:[(0,t.jsx)(s.strong,{children:".parent"})," : 4D.Folder"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/pt/20-R5/API/FileClass#path",children:[(0,t.jsx)(s.strong,{children:".path"})," : Text"]})}),(0,t.jsx)(s.td,{children:"Devolve um caminho relativo ao arquivo"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/pt/20-R5/API/FileClass#platformpath",children:[(0,t.jsx)(s.strong,{children:".platformPath"})," : Text"]})}),(0,t.jsx)(s.td,{})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},221020:(e,s,n)=>{var t=n(296540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,n){var t,i={},c=null,a=null;for(t in void 0!==n&&(c=""+n),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(a=s.ref),s)l.call(s,t)&&!o.hasOwnProperty(t)&&(i[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===i[t]&&(i[t]=s[t]);return{$$typeof:r,type:e,key:c,ref:a,props:i,_owner:d.current}}s.Fragment=i,s.jsx=c,s.jsxs=c},474848:(e,s,n)=>{e.exports=n(221020)},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>d});var t=n(296540);const r={},i=t.createContext(r);function l(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);