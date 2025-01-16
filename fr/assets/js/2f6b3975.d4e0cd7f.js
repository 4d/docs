"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65719"],{800624:function(e,s,n){n.r(s),n.d(s,{default:()=>a,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>d});var r=JSON.parse('{"id":"API/ZipFileClass","title":"ZIPFile","description":"Les propri\xe9t\xe9s et fonctions suivantes de la classe File sont disponibles pour les objets ZIPFile :","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/API/ZipFileClass.md","sourceDirName":"API","slug":"/API/ZipFileClass","permalink":"/docs/fr/API/ZipFileClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FZipFileClass.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"ZipFileClass","title":"ZIPFile"},"sidebar":"docs","previous":{"title":"ZIPArchive","permalink":"/docs/fr/API/ZipArchiveClass"},"next":{"title":"ZIPFolder","permalink":"/docs/fr/API/ZipFolderClass"}}'),i=n("785893"),t=n("250065");let l={id:"ZipFileClass",title:"ZIPFile"},d=void 0,c={},o=[];function h(e){let s={a:"a",br:"br",code:"code",em:"em",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["Les propri\xe9t\xe9s et fonctions suivantes de la classe ",(0,i.jsx)(s.a,{href:"/docs/fr/API/FileClass",children:"File"})," sont disponibles pour les objets ",(0,i.jsx)(s.code,{children:"ZIPFile"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.th,{children:["API disponibles de ",(0,i.jsx)(s.a,{href:"/docs/fr/API/FileClass",children:"File"})," API des ZIPFile"]}),(0,i.jsx)(s.th,{children:"Commentaire"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsxs)(s.a,{href:"/docs/fr/API/FileClass#copyto",children:[(0,i.jsx)(s.strong,{children:".copyTo"}),"( ",(0,i.jsx)(s.em,{children:"destinationFolder"})," : 4D.Folder { ; ",(0,i.jsx)(s.em,{children:"newName"})," : Text } { ; ",(0,i.jsx)(s.em,{children:"overwrite"})," : Integer } ) : 4D.File"]})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsxs)(s.a,{href:"/docs/fr/API/FileClass#creationdate",children:[(0,i.jsx)(s.strong,{children:".creationDate"})," : Date"]})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsxs)(s.a,{href:"/docs/fr/API/FileClass#creationtime",children:[(0,i.jsx)(s.strong,{children:".creationTime"})," : Time"]})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsxs)(s.a,{href:"/docs/fr/API/FileClass#exists",children:[(0,i.jsx)(s.strong,{children:".exists"})," : Boolean"]})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsxs)(s.a,{href:"/docs/fr/API/FileClass#extension",children:[(0,i.jsx)(s.strong,{children:".extension"})," : Text"]})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsxs)(s.a,{href:"/docs/fr/API/FileClass#fullname",children:[(0,i.jsx)(s.strong,{children:".fullName"})," : Text"]})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsxs)(s.a,{href:"/docs/fr/API/FileClass#getcontent",children:[(0,i.jsx)(s.strong,{children:".getContent( )"})," : 4D.Blob"]})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsxs)(s.a,{href:"/docs/fr/API/FileClass#geticon",children:[(0,i.jsx)(s.strong,{children:".getIcon"}),"( { ",(0,i.jsx)(s.em,{children:"size"})," : Integer } ) : Picture"]})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsxs)(s.a,{href:"/docs/fr/API/FileClass#gettext",children:[(0,i.jsx)(s.strong,{children:".getText"}),"( { ",(0,i.jsx)(s.em,{children:"charSetName"})," : Text { ; ",(0,i.jsx)(s.em,{children:"breakMode"})," : Integer } } ) : Text",(0,i.jsx)(s.br,{}),(0,i.jsx)(s.strong,{children:".getText"}),"( { ",(0,i.jsx)(s.em,{children:"charSetNum"})," : Integer { ; ",(0,i.jsx)(s.em,{children:"breakMode"})," : Integer } } ) : Text"]})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsxs)(s.a,{href:"/docs/fr/API/FileClass#hidden",children:[(0,i.jsx)(s.strong,{children:".hidden"})," : Boolean"]})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsxs)(s.a,{href:"/docs/fr/API/FileClass#isalias",children:[(0,i.jsx)(s.strong,{children:".isAlias"})," : Boolean"]})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsxs)(s.a,{href:"/docs/fr/API/FileClass#isfile",children:[(0,i.jsx)(s.strong,{children:".isFile"})," : Boolean"]})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsxs)(s.a,{href:"/docs/fr/API/FileClass#isfolder",children:[(0,i.jsx)(s.strong,{children:".isFolder"})," : Boolean"]})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsxs)(s.a,{href:"/docs/fr/API/FileClass#iswritable",children:[(0,i.jsx)(s.strong,{children:".isWritable"})," : Boolean"]})}),(0,i.jsx)(s.td,{children:"Toujours Faux avec ZIP archive"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsxs)(s.a,{href:"/docs/fr/API/FileClass#modificationdate",children:[(0,i.jsx)(s.strong,{children:".modificationDate"})," : Date"]})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsxs)(s.a,{href:"/docs/fr/API/FileClass#modificationtime",children:[(0,i.jsx)(s.strong,{children:".modificationTime"})," : Time"]})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsxs)(s.a,{href:"/docs/fr/API/FileClass#name",children:[(0,i.jsx)(s.strong,{children:".name"})," : Text"]})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsxs)(s.a,{href:"/docs/fr/API/FileClass#original",children:[(0,i.jsx)(s.strong,{children:".original"})," : 4D.File",(0,i.jsx)(s.br,{}),(0,i.jsx)(s.strong,{children:".original"})," : 4D.Folder"]})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsxs)(s.a,{href:"/docs/fr/API/FileClass#parent",children:[(0,i.jsx)(s.strong,{children:".parent"})," : 4D.Folder"]})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsxs)(s.a,{href:"/docs/fr/API/FileClass#path",children:[(0,i.jsx)(s.strong,{children:".path"})," : Text"]})}),(0,i.jsx)(s.td,{children:"Retourne un chemin relatif \xe0 l'archive"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsxs)(s.a,{href:"/docs/fr/API/FileClass#platformpath",children:[(0,i.jsx)(s.strong,{children:".platformPath"})," : Text"]})}),(0,i.jsx)(s.td,{})]})]})]})]})}function a(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return l}});var r=n(667294);let i={},t=r.createContext(i);function l(e){let s=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);