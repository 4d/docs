"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28820"],{908472:function(e,n,r){r.r(n),r.d(n,{default:()=>x,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>t,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/match-regex","title":"Match regex","description":"Match regex ( padrao ; umaCadeia ; posi\xe7ao {; posencont ; comprencont}{; *} ) -> Resultado","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/match-regex.md","sourceDirName":"commands-legacy","slug":"/commands/match-regex","permalink":"/docs/pt/commands/match-regex","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmatch-regex.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"match-regex","title":"Match regex","slug":"/commands/match-regex","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Lowercase","permalink":"/docs/pt/commands/lowercase"},"next":{"title":"Num","permalink":"/docs/pt/commands/num"}}'),o=r("785893"),a=r("250065");let d={id:"match-regex",title:"Match regex",slug:"/commands/match-regex",displayed_sidebar:"docs"},i=void 0,c={},t=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Exemplo 3",id:"exemplo-3",level:2},{value:"Exemplo 4",id:"exemplo-4",level:2},{value:"Gest\xe3o de erros",id:"gest\xe3o-de-erros",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Match regex"})," ( ",(0,o.jsx)(n.em,{children:"padrao"})," ; ",(0,o.jsx)(n.em,{children:"umaCadeia"})," ; ",(0,o.jsx)(n.em,{children:"posi\xe7ao"})," {; pos_encont ; compr_encont}{; *} ) -> Resultado\xa0",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.strong,{children:"Match regex"})," ( ",(0,o.jsx)(n.em,{children:"padrao"})," ; ",(0,o.jsx)(n.em,{children:"umaCadeia"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"padrao"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Express\xe3o regular"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"umaCadeia"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Cadeia na qual ser\xe1 realizada a pesquisa"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"posi\xe7ao"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Posi\xe7\xe3o em umaCadeia onde come\xe7a a pesquisa"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"pos_encont"}),(0,o.jsx)(n.td,{children:"Integer array, Integer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Posi\xe7\xe3o da ocorr\xeancia"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"compr_encont"}),(0,o.jsx)(n.td,{children:"Integer array, Integer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Comprimento da ocorr\xeancia"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Operador"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Se passado, a fun\xe7\xe3o pesquisa apenas na posi\xe7\xe3o indicada"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultado"}),(0,o.jsx)(n.td,{children:"Boolean"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"True=pesquisa encontrou uma ocorr\xeancia, se n\xe3o, False"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Match regex ( padrao ; umaCadeia ) -> Resultado"}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Par\xe2metro"}),(0,o.jsx)(n.td,{children:"Tipo"}),(0,o.jsx)(n.td,{children:"Descri\xe7\xe3o"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"padrao"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Express\xe3o regular (igualdade completa)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"umaCadeia"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Cadeia na qual ser\xe1 realizada a pesquisa"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultado"}),(0,o.jsx)(n.td,{children:"Boolean"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"True = pesquisa encontrou uma ocorr\xeancia, se n\xe3o, False"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["O comando ",(0,o.jsx)(n.strong,{children:"Match regex"})," permite provar a conformidade de uma cadeia de caracteres relativo a um conjunto de regras sintetizadas por meio de um metalinguagem chamado \u201Cexpress\xe3o regular\u201D ou \u201Cexpress\xe3o racional.\u201D A abrevia\xe7\xe3o regex \xe9 comumente empregada para indicar estes tipos de nota\xe7\xf5es."]}),"\n",(0,o.jsxs)(n.p,{children:["Passe em ",(0,o.jsx)(n.em,{children:"padrao"})," a express\xe3o regular a procurar. Consiste em um conjunto de caracteres utilizado para descrever uma cadeia de caracteres, utilizando caracteres especiais."]}),"\n",(0,o.jsxs)(n.p,{children:["Passe em ",(0,o.jsx)(n.em,{children:"umaCadeia"})," a cadeia na qual buscar a express\xe3o regular."]}),"\n",(0,o.jsxs)(n.p,{children:["Passe em ",(0,o.jsx)(n.em,{children:"in\xedcio"}),", a posi\xe7\xe3o em ",(0,o.jsx)(n.em,{children:"umaCadeia"})," onde deve come\xe7ar a pesquisa."]}),"\n",(0,o.jsxs)(n.p,{children:["Se ",(0,o.jsx)(n.em,{children:"pos_encont"}),". e ",(0,o.jsx)(n.em,{children:"compr_encont"})," s\xe3o vari\xe1veis, o comando devolve a posi\xe7\xe3o e o comprimento da ocorr\xeancia nestas vari\xe1veis. Se passa arrays, o comando devolve a posi\xe7\xe3o e o comprimento da ocorr\xeancia no elemento zero dos arrays e as posi\xe7\xf5es e comprimentos dos grupos capturados pela express\xe3o regular nos elementos seguintes."]}),"\n",(0,o.jsxs)(n.p,{children:["O par\xe2metro opcional ",(0,o.jsx)(n.em,{children:"*"})," indica, quando for passado, que a pesquisa deve ser realizada na posi\xe7\xe3o especificada por ",(0,o.jsx)(n.em,{children:"in\xedcio"})," e para de pesquisar em caso de falhas."]}),"\n",(0,o.jsxs)(n.p,{children:["O comando devolve ",(0,o.jsx)(n.strong,{children:"True"})," se a pesquisa encontrar uma ocorr\xeancia."]}),"\n",(0,o.jsxs)(n.p,{children:["Para maior informa\xe7\xe3o sobre regex, consulte o seguinte endere\xe7o:",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"http://en.wikipedia.org/wiki/Regular%5Fexpression",children:"http://pt.wikipedia.org/wiki/Express%C3%A3o_regular"})]}),"\n",(0,o.jsxs)(n.p,{children:["Para maior informa\xe7\xe3o sobre a sintaxe das express\xf5es regulares passadas no par\xe2metro ",(0,o.jsx)(n.em,{children:"padrao"}),", consulte o seguinte endere\xe7o:",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.em,{children:(0,o.jsx)(n.a,{href:"https://unicode-org.github.io/icu/userguide/strings/regexp.html#regular-expressions",children:"https://unicode-org.github.io/icu/userguide/strings/regexp.html#regular-expressions"})})]}),"\n",(0,o.jsx)(n.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,o.jsx)(n.p,{children:"Pesquisa de igualdade completa:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0vencont:=Match regex(motivo;meutexto)\n\xa0QUERY BY FORMULA([Empregados];Match regex(".*vargas.*";[Empregados]sobrenome))\n'})}),"\n",(0,o.jsx)(n.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,o.jsx)(n.p,{children:"Pesquisa no texto por posi\xe7\xe3o:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0vencont:=Match regex(motivo;meutexto;inicio;pos_encont;compr_encont)\n"})}),"\n",(0,o.jsx)(n.p,{children:"Exemplo para mostrar todas as etiquetas de $1:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0inicio:=1\n\xa0Repeat\n\xa0\xa0\xa0\xa0vencont:=Match regex("<.*>";$1;inicio;pos_encont;compr_encont)\n\xa0\xa0\xa0\xa0If(vencont)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT(Substring($1;pos_encont;compr_encont))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0inicio:=pos_encont+compr_encont\n\xa0\xa0\xa0\xa0End if\n\xa0Until(Not(vencont))\n'})}),"\n",(0,o.jsx)(n.h2,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,o.jsxs)(n.p,{children:["Pesquisa compat\xedvel com \u201Cgrupos capturados\u201D atrav\xe9s de par\xeanteses. ( ) s\xe3o utilizadas para especificar grupos nos regex:",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.em,{children:"vencont:=Match regex(motivo;meutexto; inicio; pos_encont; compr_encont_array)"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY LONGINT(pos_encont_array;0)\n\xa0ARRAY LONGINT(compr_encont_array;0)\n\xa0vencont:=Match regex("(.*)stuff(.*)";$1;1;pos_encont_array;compr_encont_array)\n\xa0If(vencont)\n\xa0\xa0\xa0\xa0$grupo1:=Substring($1;pos_encont_array{1};compr_encont_array{1})\n\xa0\xa0\xa0\xa0$grupo2:=Substring($1;pos_encont_array{2};compr_encont_array{2})\n\xa0End if\n'})}),"\n",(0,o.jsx)(n.h2,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,o.jsxs)(n.p,{children:["Pesquisa limitando a compara\xe7\xe3o do motivo a posi\xe7\xe3o indicada:",(0,o.jsx)(n.br,{}),"\nAdicionar una estrela ao final de uma das duas sintaxes anteriores."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0vencont:=Match regex("a.b";"---a-b---";1;$pos_encont;$compr_encont )\n\xa0\xa0//devolve True\n\xa0vencont:=Match regex("a.b";"---a-b---";1;$pos_encont;$compr_encont ;*)\n\xa0\xa0//devolve False\n\xa0vencont:=Match regex("a.b";"---a-b---";4;$pos_encont;$compr_encont ;*)\n\xa0\xa0//devolve True\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," as posi\xe7\xf5es e comprimentos retornados s\xe3o significativos apenas em modo Unicode ou se o texto manipulado for de tipo ASCII 7-bits."]}),"\n",(0,o.jsx)(n.h2,{id:"gest\xe3o-de-erros",children:"Gest\xe3o de erros"}),"\n",(0,o.jsxs)(n.p,{children:["Em caso de erro, o comando gera um erro que pode interceptar atrav\xe9s de um m\xe9todo instalado pelo comando ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"1019"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2713"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,o.jsx)(n.td,{children:"error"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return d}});var s=r(667294);let o={},a=s.createContext(o);function d(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);