"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78759"],{275411:function(e,n,s){s.r(n),s.d(n,{metadata:()=>a,contentTitle:()=>d,default:()=>m,assets:()=>i,toc:()=>l,frontMatter:()=>o});var a=JSON.parse('{"id":"commands-legacy/qr-set-totals-spacing","title":"QR SET TOTALS SPACING","description":"QR SET TOTALS SPACING ( area ; subtotal ; valor )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-set-totals-spacing.md","sourceDirName":"commands-legacy","slug":"/commands/qr-set-totals-spacing","permalink":"/docs/pt/commands/qr-set-totals-spacing","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-set-totals-spacing.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-set-totals-spacing","title":"QR SET TOTALS SPACING","slug":"/commands/qr-set-totals-spacing","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR SET TOTALS DATA","permalink":"/docs/pt/commands/qr-set-totals-data"},"next":{"title":"Record Locking","permalink":"/docs/pt/category/record-locking"}}'),t=s("785893"),r=s("250065");let o={id:"qr-set-totals-spacing",title:"QR SET TOTALS SPACING",slug:"/commands/qr-set-totals-spacing",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"QR SET TOTALS SPACING"})," ( ",(0,t.jsx)(n.em,{children:"area"})," ; ",(0,t.jsx)(n.em,{children:"subtotal"})," ; ",(0,t.jsx)(n.em,{children:"valor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"area"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Refer\xeancia da \xe1rea"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"subtotal"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xba de subtotal"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valor"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"0=sem espa\xe7o, 32000=insere um salta de p\xe1gina, >0=espa\xe7o adicionado ao topo da quebra de n\xedvel, <0=incremento proporcional"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsx)(n.p,{children:"O comando QR SET TOTALS SPACING permite definir um espa\xe7o sobre a linha de subtotal. Aplica unicamente ao modo lista."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"area"})," \xe9 a refer\xeancia da \xe1rea do relat\xf3rio r\xe1pido.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"subtotal"})," \xe9 o n\xedvel do subtotal (ou de quebra) a ser modificado."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"valor"})," define o valor do espa\xe7o:"]}),"\n",(0,t.jsxs)(n.p,{children:["* Se ",(0,t.jsx)(n.em,{children:"valor"})," \xe9 igual a 0, n\xe3o se adiciona nenhum espa\xe7o."]}),"\n",(0,t.jsxs)(n.p,{children:["* Se ",(0,t.jsx)(n.em,{children:"valor"})," \xe9 igual a 32000, se adiciona um salto de p\xe1gina.",(0,t.jsx)(n.br,{}),"\n* Se ",(0,t.jsx)(n.em,{children:"valor"})," \xe9 um valor positivo, expressa o espa\xe7o a adicionar em p\xedxels.",(0,t.jsx)(n.br,{}),"\n* Se ",(0,t.jsx)(n.em,{children:"valor"})," \xe9 um valor negativo, expressa o espa\xe7o como uma porcentagem da linha de subtotal. Por exemplo, o valor -100 definir\xe1 um espa\xe7o debaixo da linha do subtotal correspondente a 100% da altura da linha."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota"}),": se o espa\xe7o debaixo da linha de subtotal \u201Cempurra\u201D a linha a seguinte p\xe1gina, n\xe3o ser\xe1 inserido espa\xe7o sobre a linha nessa p\xe1gina."]}),"\n",(0,t.jsxs)(n.p,{children:["Se passa um n\xfamero de ",(0,t.jsx)(n.em,{children:"area"})," inv\xe1lido, se gera o erro -9850.",(0,t.jsx)(n.br,{}),"\nSe o par\xe2metro ",(0,t.jsx)(n.em,{children:"subtotal"}),", \xe9 incorreto, se gera o erro -9852."]}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/pt/commands/qr-get-totals-spacing",children:"QR GET TOTALS SPACING"})})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return o}});var a=s(667294);let t={},r=a.createContext(t);function o(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);