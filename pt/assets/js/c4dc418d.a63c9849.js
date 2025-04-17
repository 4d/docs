"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["40852"],{726316:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>i,assets:()=>d,toc:()=>p,contentTitle:()=>o});var i=JSON.parse('{"id":"commands-legacy/printing-page","title":"Printing page","description":"Printing page  : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/printing-page.md","sourceDirName":"commands-legacy","slug":"/commands/printing-page","permalink":"/docs/pt/commands/printing-page","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprinting-page.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"printing-page","title":"Printing page","slug":"/commands/printing-page","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PRINTERS LIST","permalink":"/docs/pt/commands/printers-list"},"next":{"title":"SET CURRENT PRINTER","permalink":"/docs/pt/commands/set-current-printer"}}'),s=r("785893"),t=r("250065");let a={id:"printing-page",title:"Printing page",slug:"/commands/printing-page",displayed_sidebar:"docs"},o=void 0,d={},p=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Printing page"}),"  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"N\xfamero de p\xe1gina da p\xe1gina atualmente sendo impressa"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["Printing page devolvido o n\xfamero da p\xe1gina em impress\xe3o. Pode ser utilizado s\xf3 quando esteja imprimindo com ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/print-selection",children:"PRINT SELECTION"})," ou com o menu Impress\xe3o no ambiente Usu\xe1rio."]}),"\n",(0,s.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsxs)(n.p,{children:["O exemplo a seguir muda a posi\xe7\xe3o dos n\xfameros de p\xe1gina em um relat\xf3rio de modo a que o relat\xf3rio possa ser reproduzido em um formato de dois lados. O formul\xe1rio para o relat\xf3rio tem duas vari\xe1veis que mostram os n\xfameros de p\xe1gina. Uma vari\xe1vel na esquina inferior esquerda (",(0,s.jsx)(n.em,{children:"vNumPagEsq"}),") imprimir\xe1 os n\xfameros de p\xe1ginas pares. Uma vari\xe1vel na esquina inferior direita (",(0,s.jsx)(n.em,{children:"vNumPagDir"}),") imprimir\xe1 os n\xfameros das p\xe1ginas \xedmpares. O exemplo testa se o n\xfamero da p\xe1gina \xe9 par ou \xedmpar, depois apaga e utiliza as vari\xe1veis apropriadas:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Printing Footer)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If((Printing page% 2)=0)\xa0// Modulo \xe9 0 para um n\xfamero de p\xe1gina par\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vNumPagEsq:=String(Printing page)\xa0// Fixar o n\xfamero de p\xe1gina \xe0 esquerda\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vNumPagDir:=""\xa0// Apagar o n\xfamero de p\xe1gina \xe0 direita\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\xa0// Caso contr\xe1rio, o n\xfamero de p\xe1gina \xe9 \xedmpar\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vNumPagEsq:=""\xa0// Apagar o n\xfamero de p\xe1gina \xe0 esquerda\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vNumPagDir:=String(Printing page)\xa0// Fixar o n\xfamero de p\xe1gina \xe0 direita\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/pt/commands/print-selection",children:"PRINT SELECTION"})}),"\n",(0,s.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"275"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return a}});var i=r(667294);let s={},t=i.createContext(s);function a(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);