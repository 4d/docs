"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31785"],{138852:function(e,s,n){n.r(s),n.d(s,{metadata:()=>r,contentTitle:()=>o,default:()=>h,assets:()=>i,toc:()=>c,frontMatter:()=>l});var r=JSON.parse('{"id":"API/ZipFolderClass","title":"ZIPFolder","description":"The following properties and functions from the Folder class are available to ZIPFolder objects:","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/API/ZipFolderClass.md","sourceDirName":"API","slug":"/API/ZipFolderClass","permalink":"/docs/pt/20-R6/API/ZipFolderClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FZipFolderClass.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"ZipFolderClass","title":"ZIPFolder"},"sidebar":"docs","previous":{"title":"ZIPFile","permalink":"/docs/pt/20-R6/API/ZipFileClass"},"next":{"title":"Processos e Workers","permalink":"/docs/pt/20-R6/Develop/processes"}}'),d=n("785893"),t=n("250065");let l={id:"ZipFolderClass",title:"ZIPFolder"},o=void 0,i={},c=[];function a(e){let s={a:"a",code:"code",em:"em",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.p,{children:["The following properties and functions from the ",(0,d.jsx)(s.a,{href:"/docs/pt/20-R6/API/FolderClass",children:"Folder"})," class are available to ",(0,d.jsx)(s.code,{children:"ZIPFolder"})," objects:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsxs)(s.th,{children:["Available ",(0,d.jsx)(s.a,{href:"/docs/pt/20-R6/API/FolderClass",children:"Folder"})," APIs for ZIPFolder"]}),(0,d.jsx)(s.th,{children:"Coment\xe1rio"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsxs)(s.a,{href:"/docs/pt/20-R6/API/FolderClass#copyto",children:[(0,d.jsx)(s.strong,{children:".copyTo"}),"( ",(0,d.jsx)(s.em,{children:"destinationFolder"})," : 4D.Folder { ; ",(0,d.jsx)(s.em,{children:"newName"})," : Text } { ; ",(0,d.jsx)(s.em,{children:"overwrite"})," : Integer } ) : 4D.Folder"]})}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsxs)(s.a,{href:"/docs/pt/20-R6/API/FolderClass#creationdate",children:[(0,d.jsx)(s.strong,{children:".creationDate"})," : Date"]})}),(0,d.jsxs)(s.td,{children:["A data pode ser diferente para a pasta ",(0,d.jsx)(s.code,{children:"root"})," de uma pasta dentro do arquivo"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsxs)(s.a,{href:"/docs/pt/20-R6/API/FolderClass#creationtime",children:[(0,d.jsx)(s.strong,{children:".creationTime"})," : Time"]})}),(0,d.jsxs)(s.td,{children:["A hora pode ser diferente para a pasta ",(0,d.jsx)(s.code,{children:"root"})," de uma pasta dentro do arquivo"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsxs)(s.a,{href:"/docs/pt/20-R6/API/FolderClass#exists",children:[(0,d.jsx)(s.strong,{children:".exists"})," : Boolean"]})}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsxs)(s.a,{href:"/docs/pt/20-R6/API/FolderClass#extension",children:[(0,d.jsx)(s.strong,{children:".extension"})," : Text"]})}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsxs)(s.a,{href:"/docs/pt/20-R6/API/FolderClass#file",children:[(0,d.jsx)(s.strong,{children:".file"}),"( ",(0,d.jsx)(s.em,{children:"path"})," : Text ) : 4D.File"]})}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsxs)(s.a,{href:"/docs/pt/20-R6/API/FolderClass#files",children:[(0,d.jsx)(s.strong,{children:".files"}),"( { ",(0,d.jsx)(s.em,{children:"options"})," : Integer } ) : Collection"]})}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsxs)(s.a,{href:"/docs/pt/20-R6/API/FolderClass#folder",children:[(0,d.jsx)(s.strong,{children:".folder"}),"( ",(0,d.jsx)(s.em,{children:"path"})," : Text ) : 4D.Folder"]})}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsxs)(s.a,{href:"/docs/pt/20-R6/API/FolderClass#folders",children:[(0,d.jsx)(s.strong,{children:".folders"}),"( { ",(0,d.jsx)(s.em,{children:"options"})," : Integer } ) : Collection"]})}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsxs)(s.a,{href:"/docs/pt/20-R6/API/FolderClass#fullname",children:[(0,d.jsx)(s.strong,{children:".fullName"})," : Text"]})}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsxs)(s.a,{href:"/docs/pt/20-R6/API/FolderClass#geticon",children:[(0,d.jsx)(s.strong,{children:".getIcon"}),"( { ",(0,d.jsx)(s.em,{children:"size"})," : Integer } ) : Picture"]})}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsxs)(s.a,{href:"/docs/pt/20-R6/API/FolderClass#hidden",children:[(0,d.jsx)(s.strong,{children:".hidden"})," : Boolean"]})}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsxs)(s.a,{href:"/docs/pt/20-R6/API/FolderClass#isalias",children:[(0,d.jsx)(s.strong,{children:".isAlias"})," : Boolean"]})}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsxs)(s.a,{href:"/docs/pt/20-R6/API/FolderClass#isfile",children:[(0,d.jsx)(s.strong,{children:".isFile"})," : Boolean"]})}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsxs)(s.a,{href:"/docs/pt/20-R6/API/FolderClass#isfolder",children:[(0,d.jsx)(s.strong,{children:".isFolder"})," : Boolean"]})}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsxs)(s.a,{href:"/docs/pt/20-R6/API/FolderClass#ispackage",children:[(0,d.jsx)(s.strong,{children:".isPackage"})," : Boolean"]})}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsxs)(s.a,{href:"/docs/pt/20-R6/API/FolderClass#modificationdate",children:[(0,d.jsx)(s.strong,{children:".modificationDate"})," : Date"]})}),(0,d.jsxs)(s.td,{children:["A data pode ser diferente para a pasta ",(0,d.jsx)(s.code,{children:"root"})," de uma pasta dentro do arquivo"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsxs)(s.a,{href:"/docs/pt/20-R6/API/FolderClass#modificationtime",children:[(0,d.jsx)(s.strong,{children:".modificationTime"})," : Time"]})}),(0,d.jsxs)(s.td,{children:["A hora pode ser diferente para a pasta ",(0,d.jsx)(s.code,{children:"root"})," de uma pasta dentro do arquivo"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsxs)(s.a,{href:"/docs/pt/20-R6/API/FolderClass#name",children:[(0,d.jsx)(s.strong,{children:".name"})," : Text"]})}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsxs)(s.a,{href:"/docs/pt/20-R6/API/FolderClass#original",children:[(0,d.jsx)(s.strong,{children:".original"})," : 4D.Folder"]})}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsxs)(s.a,{href:"/docs/pt/20-R6/API/FolderClass#parent",children:[(0,d.jsx)(s.strong,{children:".parent"})," : 4D.Folder"]})}),(0,d.jsxs)(s.td,{children:["A pasta virtual ",(0,d.jsx)(s.code,{children:"root"})," do arquivo n\xe3o tem pai. No entanto, as pastas dentro do arquivo podem ter um pai que n\xe3o seja a raiz."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsxs)(s.a,{href:"/docs/pt/20-R6/API/FolderClass#path",children:[(0,d.jsx)(s.strong,{children:".path"})," : Text"]})}),(0,d.jsx)(s.td,{children:"Devolve um caminho relativo ao arquivo"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsxs)(s.a,{href:"/docs/pt/20-R6/API/FolderClass#platformpath",children:[(0,d.jsx)(s.strong,{children:".platformPath"})," : Text"]})}),(0,d.jsx)(s.td,{})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return l}});var r=n(667294);let d={},t=r.createContext(d);function l(e){let s=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);