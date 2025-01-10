"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49097"],{482057:function(e,s,n){n.r(s),n.d(s,{default:()=>j,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>d});var r=JSON.parse('{"id":"API/ZipFileClass","title":"ZIPFile","description":"File \u30AF\u30E9\u30B9\u306E\u6B21\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3084\u95A2\u6570\u306F ZIPFile \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u304A\u3044\u3066\u5229\u7528\u53EF\u80FD\u3067\u3059:","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/API/ZipFileClass.md","sourceDirName":"API","slug":"/API/ZipFileClass","permalink":"/docs/ja/API/ZipFileClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FZipFileClass.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"ZipFileClass","title":"ZIPFile"},"sidebar":"docs","previous":{"title":"ZIPArchive","permalink":"/docs/ja/API/ZipArchiveClass"},"next":{"title":"ZIPFolder","permalink":"/docs/ja/API/ZipFolderClass"}}'),t=n("785893"),i=n("250065");let l={id:"ZipFileClass",title:"ZIPFile"},d=void 0,c={},a=[];function o(e){let s={a:"a",br:"br",code:"code",em:"em",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/ja/API/FileClass",children:"File"})," \u30AF\u30E9\u30B9\u306E\u6B21\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3084\u95A2\u6570\u306F ",(0,t.jsx)(s.code,{children:"ZIPFile"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u304A\u3044\u3066\u5229\u7528\u53EF\u80FD\u3067\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.th,{children:["ZIPFile \u3067\u5229\u7528\u53EF\u80FD\u306A ",(0,t.jsx)(s.a,{href:"/docs/ja/API/FileClass",children:"File"})," API"]}),(0,t.jsx)(s.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/ja/API/FileClass#copyto",children:[(0,t.jsx)(s.strong,{children:".copyTo"}),"( ",(0,t.jsx)(s.em,{children:"destinationFolder"})," : 4D.Folder { ; ",(0,t.jsx)(s.em,{children:"newName"})," : Text } { ; ",(0,t.jsx)(s.em,{children:"overwrite"})," : Integer } ) : 4D.File"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/ja/API/FileClass#creationdate",children:[(0,t.jsx)(s.strong,{children:".creationDate"})," : Date"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/ja/API/FileClass#creationtime",children:[(0,t.jsx)(s.strong,{children:".creationTime"})," : Time"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/ja/API/FileClass#exists",children:[(0,t.jsx)(s.strong,{children:".exists"})," : Boolean"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/ja/API/FileClass#extension",children:[(0,t.jsx)(s.strong,{children:".extension"})," : Text"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/ja/API/FileClass#fullname",children:[(0,t.jsx)(s.strong,{children:".fullName"})," : Text"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/ja/API/FileClass#getcontent",children:[(0,t.jsx)(s.strong,{children:".getContent( )"})," : 4D.Blob"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/ja/API/FileClass#geticon",children:[(0,t.jsx)(s.strong,{children:".getIcon"}),"( { ",(0,t.jsx)(s.em,{children:"size"})," : Integer } ) : Picture"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/ja/API/FileClass#gettext",children:[(0,t.jsx)(s.strong,{children:".getText"}),"( { ",(0,t.jsx)(s.em,{children:"charSetName"})," : Text { ; ",(0,t.jsx)(s.em,{children:"breakMode"})," : Integer } } ) : Text",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:".getText"}),"( { ",(0,t.jsx)(s.em,{children:"charSetNum"})," : Integer { ; ",(0,t.jsx)(s.em,{children:"breakMode"})," : Integer } } ) : Text"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/ja/API/FileClass#hidden",children:[(0,t.jsx)(s.strong,{children:".hidden"})," : Boolean"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/ja/API/FileClass#isalias",children:[(0,t.jsx)(s.strong,{children:".isAlias"})," : Boolean"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/ja/API/FileClass#isfile",children:[(0,t.jsx)(s.strong,{children:".isFile"})," : Boolean"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/ja/API/FileClass#isfolder",children:[(0,t.jsx)(s.strong,{children:".isFolder"})," : Boolean"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/ja/API/FileClass#iswritable",children:[(0,t.jsx)(s.strong,{children:".isWritable"})," : Boolean"]})}),(0,t.jsx)(s.td,{children:"ZIP\u30A2\u30FC\u30AB\u30A4\u30D6\u306E\u5834\u5408\u306F\u5E38\u306B false"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/ja/API/FileClass#modificationdate",children:[(0,t.jsx)(s.strong,{children:".modificationDate"})," : Date"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/ja/API/FileClass#modificationtime",children:[(0,t.jsx)(s.strong,{children:".modificationTime"})," : Time"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/ja/API/FileClass#name",children:[(0,t.jsx)(s.strong,{children:".name"})," : Text"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/ja/API/FileClass#original",children:[(0,t.jsx)(s.strong,{children:".original"})," : 4D.File",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:".original"})," : 4D.Folder"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/ja/API/FileClass#parent",children:[(0,t.jsx)(s.strong,{children:".parent"})," : 4D.Folder"]})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/ja/API/FileClass#path",children:[(0,t.jsx)(s.strong,{children:".path"})," : Text"]})}),(0,t.jsx)(s.td,{children:"\u30A2\u30FC\u30AB\u30A4\u30D6\u3092\u8D77\u70B9\u3068\u3057\u305F\u76F8\u5BFE\u30D1\u30B9\u3092\u8FD4\u3057\u307E\u3059"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsxs)(s.a,{href:"/docs/ja/API/FileClass#platformpath",children:[(0,t.jsx)(s.strong,{children:".platformPath"})," : Text"]})}),(0,t.jsx)(s.td,{})]})]})]})]})}function j(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return l}});var r=n(667294);let t={},i=r.createContext(t);function l(e){let s=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);