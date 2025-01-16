"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55549"],{688251:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>d,assets:()=>l,toc:()=>i,contentTitle:()=>o});var d=JSON.parse('{"id":"commands-legacy/qr-get-totals-data","title":"QR GET TOTALS DATA","description":"QR GET TOTALS DATA ( area ; numColuna ; numQuebra ; operador ; texto )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-get-totals-data.md","sourceDirName":"commands-legacy","slug":"/commands/qr-get-totals-data","permalink":"/docs/pt/20-R7/commands/qr-get-totals-data","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-totals-data.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-get-totals-data","title":"QR GET TOTALS DATA","slug":"/commands/qr-get-totals-data","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR Get text property","permalink":"/docs/pt/20-R7/commands/qr-get-text-property"},"next":{"title":"QR GET TOTALS SPACING","permalink":"/docs/pt/20-R7/commands/qr-get-totals-spacing"}}'),s=r("785893"),t=r("250065");let a={id:"qr-get-totals-data",title:"QR GET TOTALS DATA",slug:"/commands/qr-get-totals-data",displayed_sidebar:"docs"},o=void 0,l={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"List Mode",id:"list-mode",level:5},{value:"Relat\xf3rio de tabela cruzada",id:"relat\xf3rio-de-tabela-cruzada",level:5},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",h5:"h5",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QR GET TOTALS DATA"})," ( ",(0,s.jsx)(n.em,{children:"area"})," ; ",(0,s.jsx)(n.em,{children:"numColuna"})," ; ",(0,s.jsx)(n.em,{children:"numQuebra"})," ; ",(0,s.jsx)(n.em,{children:"operador"})," ; ",(0,s.jsx)(n.em,{children:"texto"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"area"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Refer\xeancia da \xe1rea"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numColuna"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xba da coluna"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numQuebra"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de quebra"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"operador"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Valor do operador para a c\xe9lula"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"texto"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Conte\xfado da c\xe9lula"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsx)(n.h5,{id:"list-mode",children:"List Mode"}),"\n",(0,s.jsx)(n.p,{children:"O comando QR GET TOTALS DATA permite recuperar o conte\xfado de uma linha de quebra espec\xedfica."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"area"})," \xe9 a referencia da \xe1rea do relat\xf3rio r\xe1pido."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"numColuna"})," \xe9 o n\xfamero da coluna da c\xe9lula cujos dados ser\xe3o recuperados.",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"numQuebra"})," \xe9 o n\xfamero da linha de quebra cujos dados ser\xe3o recuperados (subtotal ou total geral). Para uma linha de subtotal, ",(0,s.jsx)(n.em,{children:"numQuebra"})," corresponde ao n\xfamero da linha. Para o total geral, ",(0,s.jsx)(n.em,{children:"numQuebra"})," vale -3 (tamb\xe9m pode utilizar a constante ",(0,s.jsx)(n.em,{children:"qr grand total"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"operador"})," devolve a soma de todos os operadores presentes na c\xe9lula. Pode utilizar as constantes do tema ",(0,s.jsx)(n.em,{children:"QR Operadores"})," para tratar os valores devolvidos:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr sum"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr average"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr min"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr max"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"8"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr count"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"16"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr standard deviation"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"32"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Se ",(0,s.jsx)(n.em,{children:"operador"})," devolve 0, a c\xe9lula n\xe3o cont\xe9m nenhum operador."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"texto"})," devolve o texto na c\xe9lula."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota"}),": ",(0,s.jsx)(n.em,{children:"operador"})," e ",(0,s.jsx)(n.em,{children:"texto"})," s\xe3o mutuamente exclusivos, de maneira que s\xf3 um dos dois par\xe2metros devolve um valor."]}),"\n",(0,s.jsx)(n.h5,{id:"relat\xf3rio-de-tabela-cruzada",children:"Relat\xf3rio de tabela cruzada"}),"\n",(0,s.jsx)(n.p,{children:"O comando QR GET TOTALS DATA permite recuperar o conte\xfado de una c\xe9lula espec\xedfica."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"area"})," \xe9 a refer\xeancia da \xe1rea do relat\xf3rio r\xe1pido."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"numColuna"})," \xe9 o n\xfamero da coluna da c\xe9lula cujos dados v\xe3o a ser recuperados."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"numQuebra"})," \xe9 o n\xfamero da linha da c\xe9lula cujos dados v\xe3o a ser recuperados."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"operador"})," devolve a soma de todos os operadores presentes na c\xe9lula. Pode utilizar as constantes do tema ",(0,s.jsx)(n.em,{children:"QR Operadores"})," para processar o valor devolvido (ver o par\xe1grafo anterior)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"texto"})," devolve o texto na c\xe9lula."]}),"\n",(0,s.jsxs)(n.p,{children:["A seguinte imagem mostra como os par\xe2metros ",(0,s.jsx)(n.em,{children:"numColuna"})," e ",(0,s.jsx)(n.em,{children:"numQuebra"})," s\xe3o combinados em uma tabela cruzada:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(808495).Z+"",width:"713",height:"329"})}),"\n",(0,s.jsxs)(n.p,{children:["Se passa um n\xfamero de ",(0,s.jsx)(n.em,{children:"area"})," inv\xe1lido, se gera o erro -9850.",(0,s.jsx)(n.br,{}),"\nSe o par\xe2metro ",(0,s.jsx)(n.em,{children:"numColuna"})," \xe9 incorreto, se gera o erro -9852.",(0,s.jsx)(n.br,{}),"\nSe o par\xe2metro ",(0,s.jsx)(n.em,{children:"numQuebra"})," \xe9 incorreto, se gera o erro -9853."]}),"\n",(0,s.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/qr-set-totals-data",children:"QR SET TOTALS DATA"})}),"\n",(0,s.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"768"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,s.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},808495:function(e,n,r){r.d(n,{Z:function(){return d}});let d=r.p+"assets/images/pict30726.en-b526388b470cd1458e999a64fbb97a0c.png"},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return a}});var d=r(667294);let s={},t=d.createContext(s);function a(e){let n=d.useContext(t);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);