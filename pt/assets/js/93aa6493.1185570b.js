"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["56396"],{998134:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>d,assets:()=>i,toc:()=>l,contentTitle:()=>c});var d=JSON.parse('{"id":"commands-legacy/qr-find-column","title":"QR Find column","description":"QR Find column ( area ; expressao ) : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/qr-find-column.md","sourceDirName":"commands-legacy","slug":"/commands/qr-find-column","permalink":"/docs/pt/commands/qr-find-column","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-find-column.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"qr-find-column","title":"QR Find column","slug":"/commands/qr-find-column","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR EXECUTE COMMAND","permalink":"/docs/pt/commands/qr-execute-command"},"next":{"title":"QR Get area property","permalink":"/docs/pt/commands/qr-get-area-property"}}'),s=r("785893"),t=r("250065");let o={id:"qr-find-column",title:"QR Find column",slug:"/commands/qr-find-column",displayed_sidebar:"docs"},c=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Propriedades",id:"propriedades",level:2}];function a(e){let n={br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QR Find column"})," ( ",(0,s.jsx)(n.em,{children:"area"})," ; ",(0,s.jsx)(n.em,{children:"expressao"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"area"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Refer\xeancia da \xe1rea"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"expressao"}),(0,s.jsx)(n.td,{children:"Text, Pointer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Objeto de coluna"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"N\xfamero da coluna"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando QR Find column devolve o n\xfamero da primeira coluna cujo conte\xfado corresponde \xe0 ",(0,s.jsx)(n.em,{children:"expressao"})," passada em par\xe2metro."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"expressao"})," pode ser uma cadeia ou um ponteiro."]}),"\n",(0,s.jsx)(n.p,{children:"QR Find column devolve \u20131 se n\xe3o se encontra nada."}),"\n",(0,s.jsxs)(n.p,{children:["Se passa um n\xfamero de ",(0,s.jsx)(n.em,{children:"area"})," inv\xe1lido, se gera o erro -9850."]}),"\n",(0,s.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:"O c\xf3digo a seguir permite recuperar o n\xfamero da coluna que cont\xe9m o campo [G.NQR Tests]Trimestre e apaga essa coluna:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0$NumColumn:=QR Find column(MinhaArea;->[G.NQR Tests]Trimestre)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["ou:",(0,s.jsx)(n.br,{}),'\n$NumColumn:=QR Find column (MiArea; "[G.NQR Tests]Trimestre")']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0If($NumColumn#-1)\n\xa0\xa0\xa0\xa0QR DELETE COLUMN(MinhaArea;$NumColumn)\n\xa0End if\n"})}),"\n",(0,s.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"776"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,s.jsx)(n.td,{children:"error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return o}});var d=r(667294);let s={},t=d.createContext(s);function o(e){let n=d.useContext(t);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);