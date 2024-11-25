"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8782"],{976996:function(e,n,o){o.r(n),o.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>c,assets:()=>d,toc:()=>l,frontMatter:()=>a});var t=JSON.parse('{"id":"commands-legacy/text-to-array","title":"TEXT TO ARRAY","description":"TEXT TO ARRAY ( varText ; arrText ; largo ; nomFonte ; tamFonte {; estiloFonte {; *}} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/text-to-array.md","sourceDirName":"commands-legacy","slug":"/commands/text-to-array","permalink":"/docs/pt/commands/text-to-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftext-to-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"text-to-array","title":"TEXT TO ARRAY","slug":"/commands/text-to-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SORT ARRAY","permalink":"/docs/pt/commands/sort-array"},"next":{"title":"Backup","permalink":"/docs/pt/category/backup"}}'),r=o("785893"),s=o("250065");let a={id:"text-to-array",title:"TEXT TO ARRAY",slug:"/commands/text-to-array",displayed_sidebar:"docs"},i=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Exemplo 4",id:"exemplo-4",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function m(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"TEXT TO ARRAY"})," ( ",(0,r.jsx)(n.em,{children:"varText"})," ; ",(0,r.jsx)(n.em,{children:"arrText"})," ; ",(0,r.jsx)(n.em,{children:"largo"})," ; ",(0,r.jsx)(n.em,{children:"nomFonte"})," ; ",(0,r.jsx)(n.em,{children:"tamFonte"})," {; ",(0,r.jsx)(n.em,{children:"estiloFonte"})," {; *}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"varText"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Texto original a dividir"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"arrText"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Array que cont\xe9m o texto dividido em palavras ou linhas"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"largo"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Largo m\xe1ximo da cadeia(em pixeles)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nomFonte"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nome da fonte"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tamFonte"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Tamanho da fonte"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"estiloFonte"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Estilo da fonte"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Se passado = interpretar o texto como multistyle"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.strong,{children:"TEXT TO ARRAY"})," transforma uma vari\xe1vel texto em um array texto. El texto original (com estilo ou n\xe3o) se divide e cada parte se converte em um elemento do array ",(0,r.jsx)(n.em,{children:"arrText"})," que \xe9 devolvido pelo comando. Este comando se pode utilizar por exemplo para encher as p\xe1ginas ou as colunas com texto de um tamanho fixo."]}),"\n",(0,r.jsx)(n.p,{children:'O texto original se divide em "palavras", baseado em um tamanho de linha definido pelos par\xe2metros do comando e tendo em conta todos os estilos utilizados.'}),"\n",(0,r.jsxs)(n.p,{children:["No par\xe2metro ",(0,r.jsx)(n.em,{children:"varText"}),", passe o texto a dividir em elementos de array. Este texto pode ser ou n\xe3o multi-estilo. Alguns par\xe2metros se ignoram quando o texto \xe9 multi-estilo."]}),"\n",(0,r.jsxs)(n.p,{children:["Passe no par\xe2metro ",(0,r.jsx)(n.em,{children:"arrText"})," o nome do array a encher com o texto dividido."]}),"\n",(0,r.jsxs)(n.p,{children:["No par\xe2metro ",(0,r.jsx)(n.em,{children:"largo"}),', passe um tamanho em pixeles que indique a longitude m\xe1xima de linha a ser medida para dividir o texto. Para todo o texto, o comando avaliara o n\xfamero m\xe1ximo de palavras que podem "encaixar" neste largo em fun\xe7\xe3o dos atributos gr\xe1ficos do texto (fonte, estilo).']}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Se o texto \xe9 multi-estilo, os estilos do texto original se t\xeam em conta e os seguintes par\xe2metros se ignoram se passam. Neste caso, as linhas de texto no array resultante conservam seu estilo original (de maneira que se podem imprimir uma por uma via uma vari\xe1vel texto ou alfa por exemplo)."}),"\n",(0,r.jsx)(n.li,{children:"Se tratado de um texto plano (sem estilos), deve passar todos os par\xe2metros para que o comando possa calcular a longitude das linhas."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Cada elemento do array deve conter ao menos uma palavra. Se o largo passado \xe9 muito pequeno para que a regra de divis\xe3o se respeite estritamente, o array se enche o mais aproximadamente poss\xedvel de acordo aos par\xe2metros e a vari\xe1vel OK toma o valor 0. Por exemplo, se passa um largo de 3 pixeles, \xe9 prov\xe1vel que a maioria das palavras sejam mais grandes que esta longitude. Neste caso, a vari\xe1vel OK toma o valor 0.",(0,r.jsx)(n.br,{}),"\nIsto tamb\xe9m significa que o tamanho m\xe1ximo te\xf3rico do array devolvido \xe9 igual ao n\xfamero de palavras presentes em ",(0,r.jsx)(n.em,{children:"varText"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Nos par\xe2metros ",(0,r.jsx)(n.em,{children:"nomFonte"})," e ",(0,r.jsx)(n.em,{children:"tamFonte"}),", passe o nome e o tamanho da fonte com a qual ",(0,r.jsx)(n.em,{children:"varText"})," deve ser avaliado pelo comando para fazer a divis\xe3o. Estes par\xe2metros s\xe3o obrigat\xf3rios no caso de texto sem formato."]}),"\n",(0,r.jsxs)(n.p,{children:["No par\xe2metro ",(0,r.jsx)(n.em,{children:"estiloFonte"}),", passe uma ou mais constantes do tema ",(0,r.jsx)(n.em,{children:"Estilos de fonte"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Bold"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Italic"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Plain"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Underline"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"4"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Este par\xe2metro \xe9 opcional; quando se omite, se utiliza o estilo Normal."}),"\n",(0,r.jsxs)(n.p,{children:["O par\xe2metro opcional ",(0,r.jsx)(n.em,{children:"*"}),", se passado, permite for\xe7ar quando se toma em conta os par\xe2metros ",(0,r.jsx)(n.em,{children:"nomFuente"}),", ",(0,r.jsx)(n.em,{children:"tamFuente"})," e o ",(0,r.jsx)(n.em,{children:"estiloFuente"})," para os textos multi-estilos quando estes par\xe2metros n\xe3o est\xe3o definidos no texto original. No entanto, se estes par\xe2metros est\xe3o definidos no texto original, os par\xe2metros passados ao comando se ignoram em todos os casos."]}),"\n",(0,r.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,r.jsx)(n.p,{children:"Queremos dividir um texto multistyle em linhas com um tamanho m\xe1ximo de 200 pixeles:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0TEXT TO ARRAY(theText;TextArray;200;"Arial";20;Normal;*)\n\xa0\xa0// os atributos Arial, 20 e Normal s\xf3 s\xe3o tomados em conta se n\xe3o est\xe3o definidos no texto\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"Queremos dividir um texto em linhas de um tamanho m\xe1ximo de 350 pixeles em fonte Bodoni negrito 14. Como o comando no funciona corretamente caso a fonte n\xe3o est\xe1 dispon\xedvel, \xe9 \xfatil verificar sua presen\xe7a:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($FontList;0)\n\xa0FONT LIST($FontList)\n\xa0$Font:="Bodoni"\n\xa0$p:=Find in array($FontList;$Font)\n\xa0If($p>0)\n\xa0\xa0\xa0\xa0TEXT TO ARRAY(theText;TextArray;350;"Bodoni";14;Bold)\n\xa0Else\n\xa0\xa0// utilizar outra fonte\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,r.jsx)(n.p,{children:"Um texto multi-estilo deve imprimir-se sem estilo na fonte Arial normal 12 com um largo m\xe1ximo de 600 pixeles:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// transformamos o texto multi-estilo em texto bruto\n\xa0$RawText:=OBJECT Get plain text(vText)\n\xa0\xa0// enchemos o array\n\xa0TEXT TO ARRAY($RawText;TextArray;600;"Arial";12)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,r.jsx)(n.p,{children:"Deve imprimir em uma \xe1rea de 400 pixeles de largo um texto de um m\xe1ximo de 80 linhas com a fonte mais grande poss\xedvel (sem exceder os 24 pontos). Pode escrever:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT(TextArray;0)\n\xa0$Size:=24\n\xa0Repeat\n\xa0\xa0\xa0\xa0TEXT TO ARRAY($RawText;TextArray;400;"Arial";$Size)\n\xa0\xa0\xa0\xa0$Size:=$Size-1\n\xa0\xa0\xa0\xa0$n:=Size of array(TextArray)\n\xa0Until($n<=80)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/commands/split-string",children:"Split string"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/st-get-plain-text",children:"ST Get plain text"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/st-get-text",children:"ST Get text"})]})]})}function c(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return a}});var t=o(667294);let r={},s=t.createContext(r);function a(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);