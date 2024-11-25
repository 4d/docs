"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89785"],{662073:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>l,default:()=>m,assets:()=>c,toc:()=>i,frontMatter:()=>r});var o=JSON.parse('{"id":"commands-legacy/delete-from-blob","title":"DELETE FROM BLOB","description":"DELETE FROM BLOB ( BLOB ; offset ; tamanho )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/delete-from-blob.md","sourceDirName":"commands-legacy","slug":"/commands/delete-from-blob","permalink":"/docs/pt/commands/delete-from-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-from-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"delete-from-blob","title":"DELETE FROM BLOB","slug":"/commands/delete-from-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DECRYPT BLOB","permalink":"/docs/pt/commands/decrypt-blob"},"next":{"title":"DOCUMENT TO BLOB","permalink":"/docs/pt/commands/document-to-blob"}}'),d=t("785893"),s=t("250065");let r={id:"delete-from-blob",title:"DELETE FROM BLOB",slug:"/commands/delete-from-blob",displayed_sidebar:"docs"},l=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Nota",id:"nota",level:5},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function a(e){let n={a:"a",em:"em",h4:"h4",h5:"h5",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"DELETE FROM BLOB"})," ( ",(0,d.jsx)(n.em,{children:"BLOB"})," ; ",(0,d.jsx)(n.em,{children:"offset"})," ; ",(0,d.jsx)(n.em,{children:"tamanho"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Blob"}),(0,d.jsx)(n.td,{children:"Blob"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"BLOB do qual deletar bytes"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"offset"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Offset inicial onde os bytes ser\xe3o deletados"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tamanho"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero de bytes a serem exclu\xeddos"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["O comando DELETE FROM BLOB apaga o n\xfamero de bytes especificado por ",(0,d.jsx)(n.em,{children:"tamanho"})," do BLOB ",(0,d.jsx)(n.em,{children:"blob"})," a partir da posi\xe7\xe3o especificada por ",(0,d.jsx)(n.em,{children:"offset"})," (expressada de modo relativo ao come\xe7o do BLOB). O tamanho do BLOB \xe9 reduzido em ",(0,d.jsx)(n.em,{children:"tamanho"})," de bytes."]}),"\n",(0,d.jsx)(n.h5,{id:"nota",children:"Nota"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota de compatibilidade"}),": como este comando altera o blob passado como par\xe2metro, n\xe3o \xe9 compat\xedvel com objetos blob (tipo 4D.Blob). Ver ",(0,d.jsx)(n.em,{children:"Passing blobs and blob objects to 4D commands"})," em developer.4d.com"]}),"\n",(0,d.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/pt/commands/insert-in-blob",children:"INSERT IN BLOB"})})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var o=t(667294);let d={},s=o.createContext(d);function r(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);