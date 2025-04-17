"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51507"],{855282:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/qr-set-html-template","title":"QR SET HTML TEMPLATE","description":"QR SET HTML TEMPLATE ( area ; modelo )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/qr-set-html-template.md","sourceDirName":"commands-legacy","slug":"/commands/qr-set-html-template","permalink":"/docs/pt/20-R8/commands/qr-set-html-template","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-set-html-template.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"qr-set-html-template","title":"QR SET HTML TEMPLATE","slug":"/commands/qr-set-html-template","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR SET HEADER AND FOOTER","permalink":"/docs/pt/20-R8/commands/qr-set-header-and-footer"},"next":{"title":"QR SET INFO COLUMN","permalink":"/docs/pt/20-R8/commands/qr-set-info-column"}}'),a=n("785893"),r=n("250065");let d={id:"qr-set-html-template",title:"QR SET HTML TEMPLATE",slug:"/commands/qr-set-html-template",displayed_sidebar:"docs"},i=void 0,o={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Etiquetas HTML",id:"etiquetas-html",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let t={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"QR SET HTML TEMPLATE"})," ( ",(0,a.jsx)(t.em,{children:"area"})," ; ",(0,a.jsx)(t.em,{children:"modelo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Par\xe2metro"}),(0,a.jsx)(t.th,{children:"Tipo"}),(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"area"}),(0,a.jsx)(t.td,{children:"Integer"}),(0,a.jsx)(t.td,{children:"\u2192"}),(0,a.jsx)(t.td,{children:"Refer\xeancia da \xe1rea"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"modelo"}),(0,a.jsx)(t.td,{children:"Text"}),(0,a.jsx)(t.td,{children:"\u2192"}),(0,a.jsx)(t.td,{children:"Modelo HTML"})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(t.p,{children:["O comando QR SET HTML TEMPLATE define o ",(0,a.jsx)(t.em,{children:"modelo"})," HTML a utilizar para a \xe1rea de relat\xf3rio r\xe1pido referenciada por ",(0,a.jsx)(t.em,{children:"area"}),". Este modelo se utilizar\xe1 durante a cria\xe7\xe3o do relat\xf3rio em formato HTML."]}),"\n",(0,a.jsx)(t.p,{children:"O modelo utiliza um conjunto de etiquetas para processar os dados. Este funcionamento permite gerar documentos HTML pr\xf3ximos ao relat\xf3rio original ou documentos com apar\xeancia totalmente personalizada."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Nota:"})," primeiro deve chamar ",(0,a.jsx)(t.a,{href:"/docs/pt/20-R8/commands/qr-set-destination",title:"QR SET DESTINATION",children:"QR SET DESTINATION"})," para definir o formato HTML como destino de sa\xedda."]}),"\n",(0,a.jsx)(t.h2,{id:"etiquetas-html",children:"Etiquetas HTML"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:" ... "}),(0,a.jsx)(t.br,{}),"\nOs t\xedtulos das colunas ser\xe3o inseridos entre as etiquetas. Estas etiquetas geralmente s\xe3o utilizadas para definir a linha do t\xedtulo do relat\xf3rio."]}),"\n",(0,a.jsxs)(t.p,{children:["... ",(0,a.jsx)(t.br,{}),"\nA informa\xe7\xe3o inserida entre estas etiquetas se repete para cada linha de dados (incluindo as linhas de detalhe e subtotal)."]}),"\n",(0,a.jsxs)(t.p,{children:["... ",(0,a.jsx)(t.br,{}),"\nA informa\xe7\xe3o inserida entre estas etiquetas \xe9 repetida para cada coluna de dados dentro de uma linha. A ordem da coluna permanecer\xe1 id\xeantica a ordem no relat\xf3rio. Quando se utilizam conjuntamente com  ... , as etiquetas  ...  n\xe3o ser\xe3o efetivas atrav\xe9s das colunas cujos conte\xfados n\xe3o s\xe3o inseridos utilizando  ... ."]}),"\n",(0,a.jsx)(t.p,{children:"Por exemplo, em um relat\xf3rio que tem cinco colunas, voc\xea utiliza as etiquetas  ...  para inserir os dados da segunda coluna,  ...  ir\xe3o por cada fila, atrav\xe9s das colunas 1, 3, 4, e 5. Estas \xfaltimas etiquetas ignoram a coluna cujo conte\xfado se publica utilizando  ... ."}),"\n",(0,a.jsxs)(t.p,{children:["... ",(0,a.jsx)(t.br,{}),"\nA informa\xe7\xe3o inserida entre estas etiquetas \xe9 extra\xedda da coluna do relat\xf3rio cujo n\xfamero \xe9 \u201Cn\u201D. Se quer mostrar por exemplo as colunas em uma ordem diferente ao do relat\xf3rio inicial, pode escrever:"]}),"\n",(0,a.jsx)(t.p,{children:"...  ...  ...  "}),"\n",(0,a.jsx)(t.p,{children:"Neste exemplo, as colunas s\xe3o inseridas na ordem inversa do relat\xf3rio."}),"\n",(0,a.jsxs)(t.p,{children:["... ",(0,a.jsx)(t.br,{}),"\nO conte\xfado HTML inserido entre estas etiquetas ser\xe1 utilizada para a defini\xe7\xe3o da fonte da coluna ou c\xe9lula atual."]}),"\n",(0,a.jsx)(t.p,{children:"se substituir\xe1 por uma defini\xe7\xe3o de fonte HTML e  se substituir\xe1 pela etiqueta de fechamento padr\xe3o ()."}),"\n",(0,a.jsxs)(t.p,{children:["... ",(0,a.jsx)(t.br,{}),"\nO conte\xfado HTML inserido entre estas etiquetas ser\xe1 utilizado para a defini\xe7\xe3o do estilo da coluna ou c\xe9lula atual."]}),"\n",(0,a.jsx)(t.p,{children:"se substituir\xe1 por una defini\xe7\xe3o de estilo HTML  se substituir\xe1 pela etiqueta de fechamento padr\xe3o ()."}),"\n",(0,a.jsx)(t.p,{children:"Esta etiqueta de cor se substituir\xe1 pela defini\xe7\xe3o de cor da c\xe9lula atual."}),"\n",(0,a.jsx)(t.p,{children:"Esta etiqueta se substituir\xe1 pelos dados da c\xe9lula atual."}),"\n",(0,a.jsx)(t.p,{children:"!--#4DQRdata--\x3e"}),"\n",(0,a.jsx)(t.p,{children:"!--#4DQRdata--\x3e"}),"\n",(0,a.jsxs)(t.p,{children:["!--#4DQRdata--\x3e",(0,a.jsx)(t.br,{}),"\nEssas etiquetas se substituir\xe3o respectivamente pelos dados no cabe\xe7alho da esquerda, centro e direita."]}),"\n",(0,a.jsx)(t.p,{children:"!--#4DQRdata--\x3e"}),"\n",(0,a.jsx)(t.p,{children:"!--#4DQRdata--\x3e"}),"\n",(0,a.jsx)(t.p,{children:"!--#4DQRdata--\x3e"}),"\n",(0,a.jsx)(t.p,{children:"Estas etiquetas se substituir\xe3o respectivamente pelos dados do rodap\xe9 da esquerda, centro ou direita."}),"\n",(0,a.jsx)(t.p,{children:"Se passa um n\xfamero de \xe1rea inv\xe1lido, se gera o erro -9850."}),"\n",(0,a.jsx)(t.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"/docs/pt/20-R8/commands/qr-get-html-template",children:"QR Get HTML template"})}),"\n",(0,a.jsx)(t.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"N\xfamero do comando"}),(0,a.jsx)(t.td,{children:"750"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Thread-seguro"}),(0,a.jsx)(t.td,{children:"\u2717"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Modificar vari\xe1veis"}),(0,a.jsx)(t.td,{children:"error"})]})]})]})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return d}});var s=n(667294);let a={},r=s.createContext(a);function d(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);