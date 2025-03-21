"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22738"],{683770:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>o,assets:()=>l,toc:()=>c,contentTitle:()=>i});var o=JSON.parse('{"id":"commands-legacy/insert-in-blob","title":"INSERT IN BLOB","description":"INSERT IN BLOB ( BLOB ; offset ; len {; filler} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/insert-in-blob.md","sourceDirName":"commands-legacy","slug":"/commands/insert-in-blob","permalink":"/docs/pt/20-R7/commands/insert-in-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Finsert-in-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"insert-in-blob","title":"INSERT IN BLOB","slug":"/commands/insert-in-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EXPAND BLOB","permalink":"/docs/pt/20-R7/commands/expand-blob"},"next":{"title":"INTEGER TO BLOB","permalink":"/docs/pt/20-R7/commands/integer-to-blob"}}'),t=s("785893"),r=s("250065");let d={id:"insert-in-blob",title:"INSERT IN BLOB",slug:"/commands/insert-in-blob",displayed_sidebar:"docs"},i=void 0,l={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Nota",id:"nota",level:3},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function a(e){let n={a:"a",em:"em",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"INSERT IN BLOB"})," ( ",(0,t.jsx)(n.em,{children:"BLOB"})," ; ",(0,t.jsx)(n.em,{children:"offset"})," ; ",(0,t.jsx)(n.em,{children:"len"})," {; ",(0,t.jsx)(n.em,{children:"filler"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"BLOB no qual inserir os bytes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"offset"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Posi\xe7\xe3o de in\xedcio de inser\xe7\xe3o dos bytes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"len"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de bytes a ser inserido"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"filler"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Valor de byte padr\xe3o (0x00..0xFF) 0x00 se omitido"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando INSERT IN BLOB insere o n\xfamero de bytes especificado por ",(0,t.jsx)(n.em,{children:"len"})," no BLOB ",(0,t.jsx)(n.em,{children:"blob"})," na posi\xe7\xe3o especificada pelo deslocamento. O BLOB, ent\xe3o torna-se ",(0,t.jsx)(n.em,{children:"len"})," bytes maior."]}),"\n",(0,t.jsxs)(n.p,{children:["Se voc\xea n\xe3o especificar o par\xe2metro ",(0,t.jsx)(n.em,{children:"offset"})," de preenchimento facultativo, os bytes inseridos no BLOB s\xe3o ajustados para 0x00. Caso contr\xe1rio, os bytes s\xe3o definidos para o valor que voc\xea passa em preenchimento (modulo 256-0.. 255)."]}),"\n",(0,t.jsxs)(n.p,{children:["Antes da chamada, voc\xea passa no par\xe2metro ",(0,t.jsx)(n.em,{children:"offset"})," a posi\xe7\xe3o de inser\xe7\xe3o em rela\xe7\xe3o ao in\xedcio do BLOB."]}),"\n",(0,t.jsx)(n.h3,{id:"nota",children:"Nota"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota de compatibilidade"}),": como este comando altera o blob passado como par\xe2metro, n\xe3o \xe9 compat\xedvel com objetos blob (tipo 4D.Blob). Ver ",(0,t.jsx)(n.em,{children:"Passing blobs and blob objects to 4D commands"})," em developer.4d.com"]}),"\n",(0,t.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/commands/delete-from-blob",children:"DELETE FROM BLOB"})}),"\n",(0,t.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"559"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var o=s(667294);let t={},r=o.createContext(t);function d(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);