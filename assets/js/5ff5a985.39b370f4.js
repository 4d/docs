/*! For license information please see 5ff5a985.39b370f4.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[56418],{166985:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>i,contentTitle:()=>l,default:()=>a,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var n=r(474848),d=r(28453);const t={id:"ZipFolderClass",title:"ZIPFolder"},l=void 0,o={id:"API/ZipFolderClass",title:"ZIPFolder",description:"The following properties and functions from the Folder class are available to ZIPFolder objects:",source:"@site/versioned_docs/version-20/API/ZipFolderClass.md",sourceDirName:"API",slug:"/API/ZipFolderClass",permalink:"/docs/20/API/ZipFolderClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FZipFolderClass.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"ZipFolderClass",title:"ZIPFolder"},sidebar:"docs",previous:{title:"ZIPFile",permalink:"/docs/20/API/ZipFileClass"},next:{title:"Handling Code",permalink:"/docs/20/code-editor/overview"}},i={},c=[];function h(e){const s={a:"a",code:"code",em:"em",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["The following properties and functions from the ",(0,n.jsx)(s.a,{href:"/docs/20/API/FolderClass",children:"Folder"})," class are available to ",(0,n.jsx)(s.code,{children:"ZIPFolder"})," objects:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.th,{children:["Available ",(0,n.jsx)(s.a,{href:"/docs/20/API/FolderClass",children:"Folder"})," APIs for ZIPFolder"]}),(0,n.jsx)(s.th,{children:"Comment"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/20/API/FolderClass#copyto",children:[(0,n.jsx)(s.strong,{children:".copyTo"}),"( ",(0,n.jsx)(s.em,{children:"destinationFolder"})," : 4D.Folder { ; ",(0,n.jsx)(s.em,{children:"newName"})," : Text } { ; ",(0,n.jsx)(s.em,{children:"overwrite"})," : Integer } ) : 4D.Folder"]})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/20/API/FolderClass#creationdate",children:[(0,n.jsx)(s.strong,{children:".creationDate"})," : Date"]})}),(0,n.jsxs)(s.td,{children:["Date may be different for the ",(0,n.jsx)(s.code,{children:"root"})," folder from a folder within the archive"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/20/API/FolderClass#creationtime",children:[(0,n.jsx)(s.strong,{children:".creationTime"})," : Time"]})}),(0,n.jsxs)(s.td,{children:["Time may be different for the ",(0,n.jsx)(s.code,{children:"root"})," folder from a folder within the archive"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/20/API/FolderClass#exists",children:[(0,n.jsx)(s.strong,{children:".exists"})," : Boolean"]})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/20/API/FolderClass#extension",children:[(0,n.jsx)(s.strong,{children:".extension"})," : Text"]})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/20/API/FolderClass#file",children:[(0,n.jsx)(s.strong,{children:".file"}),"( ",(0,n.jsx)(s.em,{children:"path"})," : Text ) : 4D.File"]})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/20/API/FolderClass#files",children:[(0,n.jsx)(s.strong,{children:".files"}),"( { ",(0,n.jsx)(s.em,{children:"options"})," : Integer } ) : Collection"]})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/20/API/FolderClass#folder",children:[(0,n.jsx)(s.strong,{children:".folder"}),"( ",(0,n.jsx)(s.em,{children:"path"})," : Text ) : 4D.Folder"]})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/20/API/FolderClass#folders",children:[(0,n.jsx)(s.strong,{children:".folders"}),"( { ",(0,n.jsx)(s.em,{children:"options"})," : Integer } ) : Collection"]})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/20/API/FolderClass#fullname",children:[(0,n.jsx)(s.strong,{children:".fullName"})," : Text"]})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/20/API/FolderClass#geticon",children:[(0,n.jsx)(s.strong,{children:".getIcon"}),"( { ",(0,n.jsx)(s.em,{children:"size"})," : Integer } ) : Picture"]})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/20/API/FolderClass#hidden",children:[(0,n.jsx)(s.strong,{children:".hidden"})," : Boolean"]})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/20/API/FolderClass#isalias",children:[(0,n.jsx)(s.strong,{children:".isAlias"})," : Boolean"]})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/20/API/FolderClass#isfile",children:[(0,n.jsx)(s.strong,{children:".isFile"})," : Boolean"]})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/20/API/FolderClass#isfolder",children:[(0,n.jsx)(s.strong,{children:".isFolder"})," : Boolean"]})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/20/API/FolderClass#ispackage",children:[(0,n.jsx)(s.strong,{children:".isPackage"})," : Boolean"]})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/20/API/FolderClass#modificationdate",children:[(0,n.jsx)(s.strong,{children:".modificationDate"})," : Date"]})}),(0,n.jsxs)(s.td,{children:["Date may be different for the ",(0,n.jsx)(s.code,{children:"root"})," folder from a folder within the archive"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/20/API/FolderClass#modificationtime",children:[(0,n.jsx)(s.strong,{children:".modificationTime"})," : Time"]})}),(0,n.jsxs)(s.td,{children:["Time may be different for the ",(0,n.jsx)(s.code,{children:"root"})," folder from a folder within the archive"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/20/API/FolderClass#name",children:[(0,n.jsx)(s.strong,{children:".name"})," : Text"]})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/20/API/FolderClass#original",children:[(0,n.jsx)(s.strong,{children:".original"})," : 4D.Folder"]})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/20/API/FolderClass#parent",children:[(0,n.jsx)(s.strong,{children:".parent"})," : 4D.Folder"]})}),(0,n.jsxs)(s.td,{children:["The archive's virtual ",(0,n.jsx)(s.code,{children:"root"})," folder has no parent. However, the folders within the archive may have a parent other than the root."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/20/API/FolderClass#path",children:[(0,n.jsx)(s.strong,{children:".path"})," : Text"]})}),(0,n.jsx)(s.td,{children:"Returns a path relative to the archive"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.a,{href:"/docs/20/API/FolderClass#platformpath",children:[(0,n.jsx)(s.strong,{children:".platformPath"})," : Text"]})}),(0,n.jsx)(s.td,{})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},221020:(e,s,r)=>{var n=r(296540),d=Symbol.for("react.element"),t=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,r){var n,t={},c=null,h=null;for(n in void 0!==r&&(c=""+r),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(h=s.ref),s)l.call(s,n)&&!i.hasOwnProperty(n)&&(t[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===t[n]&&(t[n]=s[n]);return{$$typeof:d,type:e,key:c,ref:h,props:t,_owner:o.current}}s.Fragment=t,s.jsx=c,s.jsxs=c},474848:(e,s,r)=>{e.exports=r(221020)},28453:(e,s,r)=>{r.d(s,{R:()=>l,x:()=>o});var n=r(296540);const d={},t=n.createContext(d);function l(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);