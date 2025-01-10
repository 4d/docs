"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52763"],{471656:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>d,assets:()=>c,toc:()=>l,contentTitle:()=>i});var d=JSON.parse('{"id":"commands-legacy/copy-blob","title":"COPY BLOB","description":"COPY BLOB ( oriBLOB  ; dstBLOB ; oriOffset  ; dstOffset ; tamanho )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/copy-blob.md","sourceDirName":"commands-legacy","slug":"/commands/copy-blob","permalink":"/docs/pt/commands/copy-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcopy-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"copy-blob","title":"COPY BLOB","slug":"/commands/copy-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"COMPRESS BLOB","permalink":"/docs/pt/commands/compress-blob"},"next":{"title":"DECRYPT BLOB","permalink":"/docs/pt/commands/decrypt-blob"}}'),t=s("785893"),r=s("250065");let o={id:"copy-blob",title:"COPY BLOB",slug:"/commands/copy-blob",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"COPY BLOB"})," ( ",(0,t.jsx)(n.em,{children:"oriBLOB"}),"  ; ",(0,t.jsx)(n.em,{children:"dstBLOB"})," ; ",(0,t.jsx)(n.em,{children:"oriOffset"}),"  ; ",(0,t.jsx)(n.em,{children:"dstOffset"})," ; ",(0,t.jsx)(n.em,{children:"tamanho"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"oriBlob"}),(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"BLOB origem"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"dstBlob"}),(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"BLOB destino"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"oriOffset"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Posi\xe7\xe3o da fonte para a c\xf3pia"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"dstOffset"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Posi\xe7\xe3o de destino para a c\xf3pia"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tamanho"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de bytes a copiar"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando COPY BLOB copia o n\xfamero de bytes especificado por ",(0,t.jsx)(n.em,{children:"tamanho"})," do BLOB ",(0,t.jsx)(n.em,{children:"oriBLOB"})," para o BLOB ",(0,t.jsx)(n.em,{children:"dstBLOB"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["A c\xf3pia come\xe7a na posi\xe7\xe3o (expressa em rela\xe7\xe3o ao in\xedcio do BLOB fonte) especificado pelo ",(0,t.jsx)(n.em,{children:"oriOffset"})," e realiza-se na posi\xe7\xe3o (expressa em rela\xe7\xe3o ao in\xedcio do BLOB destino) especificado pelo ",(0,t.jsx)(n.em,{children:"dstOffset"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," O BLOB de destino pode ser redimensionado, se necess\xe1rio."]}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/commands/delete-from-blob",children:"DELETE FROM BLOB"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/insert-in-blob",children:"INSERT IN BLOB"})]}),"\n",(0,t.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"558"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return o}});var d=s(667294);let t={},r=d.createContext(t);function o(e){let n=d.useContext(r);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);