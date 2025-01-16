"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2139"],{353808:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>o,toc:()=>l,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/copy-blob","title":"COPY BLOB","description":"COPY BLOB ( srcBLOB ; dstBLOB ; srcOffset ; dstOffset ; nombre )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/copy-blob.md","sourceDirName":"commands-legacy","slug":"/commands/copy-blob","permalink":"/docs/fr/commands/copy-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcopy-blob.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"copy-blob","title":"COPY BLOB","slug":"/commands/copy-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"COMPRESS BLOB","permalink":"/docs/fr/commands/compress-blob"},"next":{"title":"DECRYPT BLOB","permalink":"/docs/fr/commands/decrypt-blob"}}'),t=s("785893"),d=s("250065");let i={id:"copy-blob",title:"COPY BLOB",slug:"/commands/copy-blob",displayed_sidebar:"docs"},c=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"COPY BLOB"})," ( ",(0,t.jsx)(n.em,{children:"srcBLOB"})," ; ",(0,t.jsx)(n.em,{children:"dstBLOB"})," ; ",(0,t.jsx)(n.em,{children:"srcOffset"})," ; ",(0,t.jsx)(n.em,{children:"dstOffset"})," ; ",(0,t.jsx)(n.em,{children:"nombre"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"srcBlob"}),(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"BLOB source"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"dstBlob"}),(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"BLOB de destination"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"srcOffset"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Position dans la source pour la copie"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"dstOffset"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Position dans la destination pour la copie"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nombre"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre d'octets \xe0 copier"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"COPY BLOB"})," copie le nombre d'octets sp\xe9cifi\xe9 par ",(0,t.jsx)(n.em,{children:"nombre"})," du BLOB ",(0,t.jsx)(n.em,{children:"srcBLOB"})," vers le BLOB ",(0,t.jsx)(n.em,{children:"dstBLOB"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["La copie commence \xe0 la position (exprim\xe9e par rapport \xe0 l'origine du BLOB source) d\xe9finie par ",(0,t.jsx)(n.em,{children:"srcOffset"})," et est plac\xe9e \xe0 partir de la position (exprim\xe9e par rapport \xe0 l'origine du BLOB de destination) d\xe9finie par ",(0,t.jsx)(n.em,{children:"dstOffset"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Notez que le BLOB de destination peut \xeatre redimensionn\xe9 si n\xe9cessaire."}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/delete-from-blob",children:"DELETE FROM BLOB"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/insert-in-blob",children:"INSERT IN BLOB"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"558"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var r=s(667294);let t={},d=r.createContext(t);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);