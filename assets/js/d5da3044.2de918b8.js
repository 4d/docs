"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68675"],{94322:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"commands/theme/Data_Security_theme","title":"Data Security","description":"||","source":"@site/versioned_docs/version-20-R9/commands/theme/Data_Security.md","sourceDirName":"commands/theme","slug":"/commands/theme/Data-Security","permalink":"/docs/commands/theme/Data-Security","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Ftheme%2FData_Security.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"Data_Security_theme","title":"Data Security","slug":"/commands/theme/Data-Security"},"sidebar":"docs","previous":{"title":"REJECT","permalink":"/docs/commands/reject"},"next":{"title":"Data file encryption status","permalink":"/docs/commands/data-file-encryption-status"}}'),n=r("785893"),c=r("250065");let a={id:"Data_Security_theme",title:"Data Security",slug:"/commands/theme/Data-Security"},d=void 0,i={},l=[];function o(e){let t={a:"a",br:"br",em:"em",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsx)(t.tr,{children:(0,n.jsx)(t.th,{})})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsx)(t.tr,{children:(0,n.jsxs)(t.td,{children:[(0,n.jsxs)(t.a,{href:"/docs/commands/data-file-encryption-status",children:[(0,n.jsx)(t.strong,{children:"Data file encryption status"})," ( structurePath , dataPath ) : Object"]}),(0,n.jsx)(t.br,{})]})}),(0,n.jsx)(t.tr,{children:(0,n.jsxs)(t.td,{children:[(0,n.jsxs)(t.a,{href:"/docs/commands/decrypt-data-blob",children:[(0,n.jsx)(t.strong,{children:"Decrypt data BLOB"})," ( ",(0,n.jsx)(t.em,{children:"blobToDecrypt"})," ; ",(0,n.jsx)(t.em,{children:"keyObject"})," ; ",(0,n.jsx)(t.em,{children:"salt"})," ; ",(0,n.jsx)(t.em,{children:"decryptedBLOB"})," ) : Boolean",(0,n.jsx)(t.br,{}),(0,n.jsx)(t.strong,{children:"Decrypt data BLOB"})," ( ",(0,n.jsx)(t.em,{children:"blobToDecrypt"})," ; ",(0,n.jsx)(t.em,{children:"passPhrase"})," ; ",(0,n.jsx)(t.em,{children:"salt"})," ; ",(0,n.jsx)(t.em,{children:"decryptedBLOB"})," ) : Boolean"]}),(0,n.jsx)(t.br,{})]})}),(0,n.jsx)(t.tr,{children:(0,n.jsxs)(t.td,{children:[(0,n.jsxs)(t.a,{href:"/docs/commands/discover-data-key",children:[(0,n.jsx)(t.strong,{children:"Discover data key"}),"  : Boolean"]}),(0,n.jsx)(t.br,{})]})}),(0,n.jsx)(t.tr,{children:(0,n.jsxs)(t.td,{children:[(0,n.jsxs)(t.a,{href:"/docs/commands/encrypt-data-blob",children:[(0,n.jsx)(t.strong,{children:"Encrypt data BLOB"})," ( ",(0,n.jsx)(t.em,{children:"blobToEncrypt"})," ; ",(0,n.jsx)(t.em,{children:"keyObject"})," ; ",(0,n.jsx)(t.em,{children:"salt"})," ; ",(0,n.jsx)(t.em,{children:"encryptedBLOB"})," ) : Boolean",(0,n.jsx)(t.br,{}),(0,n.jsx)(t.strong,{children:"Encrypt data BLOB"})," ( ",(0,n.jsx)(t.em,{children:"blobToEncrypt"})," ; ",(0,n.jsx)(t.em,{children:"passPhrase"})," ; ",(0,n.jsx)(t.em,{children:"salt"})," ; ",(0,n.jsx)(t.em,{children:"encryptedBLOB"})," ) : Boolean"]}),(0,n.jsx)(t.br,{})]})}),(0,n.jsx)(t.tr,{children:(0,n.jsxs)(t.td,{children:[(0,n.jsxs)(t.a,{href:"/docs/commands/encrypt-data-file",children:[(0,n.jsx)(t.strong,{children:"Encrypt data file"})," ( ",(0,n.jsx)(t.em,{children:"structurePath"})," ; ",(0,n.jsx)(t.em,{children:"dataPath"})," {; ",(0,n.jsx)(t.em,{children:"newPassPhrase"})," {; ",(0,n.jsx)(t.em,{children:"archiveFolder"})," {; ",(0,n.jsx)(t.em,{children:"curPassPhrase"})," {; ",(0,n.jsx)(t.em,{children:"methodName"}),"}}}} ) : Text<br/",(0,n.jsx)(t.strong,{children:"Encrypt data file"})," ( ",(0,n.jsx)(t.em,{children:"structurePath"})," ; ",(0,n.jsx)(t.em,{children:"dataPath"})," {; ",(0,n.jsx)(t.em,{children:"newDataKey"})," {; ",(0,n.jsx)(t.em,{children:"archiveFolder"})," {; ",(0,n.jsx)(t.em,{children:"curDataKey"})," {; ",(0,n.jsx)(t.em,{children:"methodName"}),"}}}} ) : Text"]}),(0,n.jsx)(t.br,{})]})}),(0,n.jsx)(t.tr,{children:(0,n.jsxs)(t.td,{children:[(0,n.jsxs)(t.a,{href:"/docs/commands/new-data-key",children:[(0,n.jsx)(t.strong,{children:"New data key"})," ( ",(0,n.jsx)(t.em,{children:"passPhrase"})," ) : Object"]}),(0,n.jsx)(t.br,{})]})}),(0,n.jsx)(t.tr,{children:(0,n.jsxs)(t.td,{children:[(0,n.jsxs)(t.a,{href:"/docs/commands/register-data-key",children:[(0,n.jsx)(t.strong,{children:"Register data key"})," ( ",(0,n.jsx)(t.em,{children:"curPassPhrase"})," ) : Boolean",(0,n.jsx)(t.br,{}),(0,n.jsx)(t.strong,{children:"Register data key"})," ( ",(0,n.jsx)(t.em,{children:"curDataKey"})," ) : Boolean"]}),(0,n.jsx)(t.br,{})]})})]})]})}function h(e={}){let{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},250065:function(e,t,r){r.d(t,{Z:function(){return d},a:function(){return a}});var s=r(667294);let n={},c=s.createContext(n);function a(e){let t=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);