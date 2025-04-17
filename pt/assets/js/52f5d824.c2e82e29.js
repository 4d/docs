"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["44455"],{724439:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/qr-get-totals-spacing","title":"QR GET TOTALS SPACING","description":"QR GET TOTALS SPACING ( area ; subtotal ; valor )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/qr-get-totals-spacing.md","sourceDirName":"commands-legacy","slug":"/commands/qr-get-totals-spacing","permalink":"/docs/pt/20-R8/commands/qr-get-totals-spacing","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-totals-spacing.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"qr-get-totals-spacing","title":"QR GET TOTALS SPACING","slug":"/commands/qr-get-totals-spacing","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR GET TOTALS DATA","permalink":"/docs/pt/20-R8/commands/qr-get-totals-data"},"next":{"title":"QR INSERT COLUMN","permalink":"/docs/pt/20-R8/commands/qr-insert-column"}}'),t=r("785893"),a=r("250065");let o={id:"qr-get-totals-spacing",title:"QR GET TOTALS SPACING",slug:"/commands/qr-get-totals-spacing",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"QR GET TOTALS SPACING"})," ( ",(0,t.jsx)(n.em,{children:"area"})," ; ",(0,t.jsx)(n.em,{children:"subtotal"})," ; ",(0,t.jsx)(n.em,{children:"valor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"area"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Refer\xeancia da \xe1rea"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"subtotal"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xba de subtotal"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valor"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"0= sem espa\xe7o, 32000=insere um salto de p\xe1gina, >0=espa\xe7o adicionado no topo do n\xedvel de quebra, <0=incremento proporcional"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsx)(n.p,{children:"O comando QR GET TOTALS SPACING permite recuperar o valor do espa\xe7o adicionado sobre uma linha de subtotal. Aplica unicamente em modo listado."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"area"})," \xe9 a refer\xeancia da \xe1rea do relat\xf3rio r\xe1pido."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"subtotal"})," \xe9 o n\xedvel do subtotal (o n\xedvel de quebra) que se afetar\xe1. ",(0,t.jsx)(n.em,{children:"subtotal"})," \xe9 um valor entre 1 e o n\xfamero de linhas do subtotal/quebra."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"valor"})," define o valor do espa\xe7o:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Se ",(0,t.jsx)(n.em,{children:"valo"}),"r for igual a 0, no se adiciona nenhum espa\xe7o."]}),"\n",(0,t.jsxs)(n.li,{children:["Se ",(0,t.jsx)(n.em,{children:"valor"})," for igual a 32000, se insere um salto de p\xe1gina."]}),"\n",(0,t.jsxs)(n.li,{children:["Se ",(0,t.jsx)(n.em,{children:"valor"})," for um valor positivo, expressa o espa\xe7o a adicionar em p\xedxels."]}),"\n",(0,t.jsxs)(n.li,{children:["Se ",(0,t.jsx)(n.em,{children:"valor"})," for um valor negativo, expressa o espa\xe7o como uma porcentagem da linha de subtotal. Por exemplo, o valor -100 indicar\xe1 um espa\xe7o debaixo da linha do subtotal correspondente a 100% da altura da linha."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Se passa um n\xfamero de ",(0,t.jsx)(n.em,{children:"area"})," inv\xe1lido, se gera o erro -9850.",(0,t.jsx)(n.br,{}),"\nSe o par\xe2metro ",(0,t.jsx)(n.em,{children:"subtotal"})," for incorreto, se gera o erro -9852."]}),"\n",(0,t.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/pt/20-R8/commands/qr-set-totals-spacing",children:"QR SET TOTALS SPACING"})}),"\n",(0,t.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"762"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,t.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return o}});var s=r(667294);let t={},a=s.createContext(t);function o(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);