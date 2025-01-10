"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52255"],{48964:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/delete-from-blob","title":"DELETE FROM BLOB","description":"DELETE FROM BLOB ( BLOB ; offset ; numero )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/delete-from-blob.md","sourceDirName":"commands-legacy","slug":"/commands/delete-from-blob","permalink":"/docs/es/commands/delete-from-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-from-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"delete-from-blob","title":"DELETE FROM BLOB","slug":"/commands/delete-from-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DECRYPT BLOB","permalink":"/docs/es/commands/decrypt-blob"},"next":{"title":"DOCUMENT TO BLOB","permalink":"/docs/es/commands/document-to-blob"}}'),s=t("785893"),d=t("250065");let o={id:"delete-from-blob",title:"DELETE FROM BLOB",slug:"/commands/delete-from-blob",displayed_sidebar:"docs"},l=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Nota",id:"nota",level:5},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={a:"a",em:"em",h4:"h4",h5:"h5",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DELETE FROM BLOB"})," ( ",(0,s.jsx)(n.em,{children:"BLOB"})," ; ",(0,s.jsx)(n.em,{children:"offset"})," ; ",(0,s.jsx)(n.em,{children:"numero"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"BLOB del cual borrar los bytes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"offset"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Offset a partir del cual borrar los bytes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numero"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de bytes a borrar"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando DELETE FROM BLOB borra el n\xfamero de bytes especificado por ",(0,s.jsx)(n.em,{children:"numero"})," del BLOB ",(0,s.jsx)(n.em,{children:"blob"})," a partir de la posici\xf3n especificada por ",(0,s.jsx)(n.em,{children:"offset"})," (expresada de manera relativa al comienzo del BLOB). El tama\xf1o del BLOB se reduce en ",(0,s.jsx)(n.em,{children:"numero"})," de bytes."]}),"\n",(0,s.jsx)(n.h5,{id:"nota",children:"Nota"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota de compatibilidad"}),": como este comando altera el blob pasado como par\xe1metro, no soporta objetos blob (tipo 4D.Blob). Ver ",(0,s.jsx)(n.em,{children:"Pasar blobs y objetos blob a comandos 4D"})," en developer.4d.com."]}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/commands/insert-in-blob",children:"INSERT IN BLOB"})}),"\n",(0,s.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"560"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var r=t(667294);let s={},d=r.createContext(s);function o(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);