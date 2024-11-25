"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18641"],{51262:function(e,n,o){o.r(n),o.d(n,{metadata:()=>r,contentTitle:()=>d,default:()=>m,assets:()=>l,toc:()=>a,frontMatter:()=>c});var r=JSON.parse('{"id":"commands-legacy/qr-count-columns","title":"QR Count columns","description":"QR Count columns ( area ) : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-count-columns.md","sourceDirName":"commands-legacy","slug":"/commands/qr-count-columns","permalink":"/docs/pt/commands/qr-count-columns","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-count-columns.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-count-columns","title":"QR Count columns","slug":"/commands/qr-count-columns","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR BLOB TO REPORT","permalink":"/docs/pt/commands/qr-blob-to-report"},"next":{"title":"QR DELETE COLUMN","permalink":"/docs/pt/commands/qr-delete-column"}}'),t=o("785893"),s=o("250065");let c={id:"qr-count-columns",title:"QR Count columns",slug:"/commands/qr-count-columns",displayed_sidebar:"docs"},d=void 0,l={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function i(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"QR Count columns"})," ( ",(0,t.jsx)(n.em,{children:"area"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"area"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Refer\xeancia da \xe1rea"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"N\xfamero de colunas em \xe1rea"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando QR Count columns devolve o n\xfamero de colunas presentes na ",(0,t.jsx)(n.em,{children:"area"})," do relat\xf3rio r\xe1pido."]}),"\n",(0,t.jsxs)(n.p,{children:["Se passa um n\xfamero de ",(0,t.jsx)(n.em,{children:"area"})," inv\xe1lido, \xe9 gerado o erro -9850."]}),"\n",(0,t.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"O c\xf3digo a seguir permite adicionar uma coluna adicional \xe0 direita da \xfaltima coluna da \xe1rea:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0$ColNb:=QR Count columns(MinhaArea)\n\xa0QR INSERT COLUMN(MinhaArea;$ColNb+1;->[Tabela 1]Campo2)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/commands/qr-delete-column",children:"QR DELETE COLUMN"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/qr-insert-column",children:"QR INSERT COLUMN"})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return d},a:function(){return c}});var r=o(667294);let t={},s=r.createContext(t);function c(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);