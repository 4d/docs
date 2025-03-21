"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["71245"],{268637:function(s,e,a){a.r(e),a.d(e,{default:()=>m,frontMatter:()=>i,metadata:()=>n,assets:()=>d,toc:()=>c,contentTitle:()=>t});var n=JSON.parse('{"id":"commands-legacy/compare-strings","title":"Compare strings","description":"Compare strings ( string ; stringB {; op\xe7\xf5es} ) : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/compare-strings.md","sourceDirName":"commands-legacy","slug":"/commands/compare-strings","permalink":"/docs/pt/20-R7/commands/compare-strings","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcompare-strings.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"compare-strings","title":"Compare strings","slug":"/commands/compare-strings","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Character code","permalink":"/docs/pt/20-R7/commands/character-code"},"next":{"title":"CONVERT FROM TEXT","permalink":"/docs/pt/20-R7/commands/convert-from-text"}}'),r=a("785893"),o=a("250065");let i={id:"compare-strings",title:"Compare strings",slug:"/commands/compare-strings",displayed_sidebar:"docs"},t=void 0,d={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(s){let e={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...s.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Compare strings"})," ( ",(0,r.jsx)(e.em,{children:"string"})," ; ",(0,r.jsx)(e.em,{children:"stringB"})," {; ",(0,r.jsx)(e.em,{children:"op\xe7\xf5es"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Par\xe2metro"}),(0,r.jsx)(e.th,{children:"Tipo"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"string"}),(0,r.jsx)(e.td,{children:"Text"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"String a comparar"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"stringB"}),(0,r.jsx)(e.td,{children:"Text"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"String a ser comparada"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"op\xe7\xf5es"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"Regras de compara\xe7\xe3o"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Resultado"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:"\u2190"}),(0,r.jsx)(e.td,{children:"Resultado da compara\xe7\xe3o de strings"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(e.p,{children:["O comando ",(0,r.jsx)(e.strong,{children:"Compare strings"})," retorna um valor negativo, zero ou positivo dependendo de se ",(0,r.jsx)(e.em,{children:"stringA"})," for avaliada como menor, igual ou maior que ",(0,r.jsx)(e.em,{children:"stringB"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:["No par\xe2metro ",(0,r.jsx)(e.em,{children:"stringA"}),", passe um valor ",(0,r.jsx)(e.a,{href:"#",title:"A character string that may contain from 0 to 2 GB of text",children:"texto"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:["No par\xe2metro ",(0,r.jsx)(e.em,{children:"stringB"}),", passe um valor texto  a ser comparado com ",(0,r.jsx)(e.em,{children:"stringA"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:["Como padr\xe3o, ",(0,r.jsx)(e.strong,{children:"Compare strings"}),' funciona como se o operador "<" (menor que) fosse usado. (Ver ',(0,r.jsx)(e.em,{children:"String operators"}),"). Isso pode ser modificado com o par\xe2metro ",(0,r.jsx)(e.em,{children:"op\xe7\xf5es"}),". Pode passar uma constante ou uma combina\xe7\xe3o das constantes a seguir do tema ",(0,r.jsx)(e.em,{children:"Strings"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Constante"}),(0,r.jsx)(e.th,{children:"Valor"}),(0,r.jsx)(e.th,{children:"Coment\xe1rio"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"sk case insensitive"}),(0,r.jsx)(e.td,{children:"2"}),(0,r.jsxs)(e.td,{children:['As strings s\xe3o comparadas segundo a linguagem atual dos dados sem levar em considera\xe7\xe3o as diferen\xe7as de mai\xfasculas e min\xfasculas. Note que os signos diacr\xedticos s\xe3o levados em considera\xe7\xe3o. Por exemplo, "A" \xe9 considerado a mesma coisa que "a". Entretanto "a" n\xe3o \xe9 considerado o mesmo que "\xe0". Como padr\xe3o, a compara\xe7\xe3o de strings 4D n\xe3o considera mai\xfasculas e min\xfasculas. ',(0,r.jsx)(e.br,{}),"Pode ser combinado com: sk char codes OU sk diacritic insensitive sk whole word (",(0,r.jsx)(e.a,{href:"/docs/pt/20-R7/commands/position",children:"Position"})," apenas comando Essa constante implica o uso das constantes abaixo (que podem ser combinadas para melhorar a legibilidade): sk kana insensitive sk width insensitive sk strict"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"sk char codes"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:'As strings s\xe3o comparadas segundo os c\xf3digos de caracteres. Os par\xe2metros atuais da linguagem de dados n\xe3o s\xe3o levados em considera\xe7\xe3o durante a compara\xe7\xe3o. Pode ser combinada com: sk case insensitive S\xf3 para os intervalos "a-z" ou "A-Z". (por exemplo., Alpha = alpha, mas Alpha # \xe2lph\xe0)'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"sk diacritic insensitive"}),(0,r.jsx)(e.td,{children:"4"}),(0,r.jsxs)(e.td,{children:['As strings s\xe3o comparadas de acordo com a linguagem atual dos dados. Entretanto, os acentos ou s\xedmbolos das letras s\xe3o ignorados. Por exemplo, "a" \xe9 considerado a mesma coisa que "\xe0". Pode ser combinado com sk case insensitive sk whole word (',(0,r.jsx)(e.a,{href:"/docs/pt/20-R7/commands/position",children:"Position"})," s\xf3 comandos) Essa constante implica o uso das constantes abaixo (que podem tamb\xe9m ser combinados para melhor a legibilidade): sk kana insensitive sk width insensitive sk strict"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"sk kana insensitive"}),(0,r.jsx)(e.td,{children:"8"}),(0,r.jsxs)(e.td,{children:['Para a linguagem japonesa. Controla a diferencia\xe7\xe3o entre as s\xedlabas em Hiragana e Katakana. De um ponto de vista sem\xe2ntico, a diferen\xe7a entre Hiragana e Katana \xe9 geralmente importante, msa n\xe3o captura tantos resultados quanto poss\xedvel. O modo padr\xe3o em 4D \xe9 ignorar a diferen\xe7a (kana insensitive). Por exemplo, "\u3042" \xe9 considerado como a mesma coisa que "\u30A2". A op\xe7\xe3o sk strict realiza compara\xe7\xf5es sens\xedveis a kana. sk kana insensitive pode ser usado para parcialmente relaxar a regra de insens\xedvel a kana. ',(0,r.jsx)(e.strong,{children:"Nota:"})," A linguagem de dados deve ser estabelecida para Japon\xeas para usar essa op\xe7\xe3o. Para todas as outras linguagens, essa op\xe7\xe3o \xe9 ignorada e ",(0,r.jsx)(e.a,{href:"/docs/pt/20-R7/commands/compare-strings",children:"Compare strings"})," vai funcionar como se sk strict tivesse sido especificada. Ou seja, estabelecer essa op\xe7\xe3o para contextos n\xe3o-japoneses faria com que a compara\xe7\xe3o fosse sens\xedvel a kana (o efeito oposto). Pode ser combinado com: sk case insensitive sk diacritic insensitive Essa constante implica o uso das constantes abaixo (que podem tamb\xe9m ser combinados para melhor a legibilidade): sk width insensitive sk strict"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"sk strict"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Strings s\xe3o comparadas para correspond\xeancias exatas de acordo com a linguagem atual. Na maioria dos casos, capitaliza\xe7\xe3o e marcas diacr\xedticas de letras s\xe3o levadas em considera\xe7\xe3o durante a compara\xe7\xe3o. Pode ser combinado com: sk case insensitive sk diacritic insensitive sk kana insensitive Essa constante implica o uso das constantes abaixo (que podem tamb\xe9m ser combinados para melhor a legibilidade): sk width insensitive"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"sk width insensitive"}),(0,r.jsx)(e.td,{children:"16"}),(0,r.jsxs)(e.td,{children:['Para a linguagem japonesa. Corresponde \xe0 norma Unicode "East Asian Width", definida em ',(0,r.jsx)(e.a,{href:"http://www.unicode.org/reports/tr11/",children:"Anexo #11 do padr\xe3o Unicode"}),'.Desde um ponto de vista sem\xe2ntico, a diferen\xe7a entre um car\xe1cter "estreito" e "largo" ou um caractere "largura completa" e "meia largura" costuma ser insignificante, que \xe9 o modo normal em 4D.Por exemplo, "\uFF71" se considera a mesma coisa que "\u30A2". A op\xe7\xe3o sk strict realiza uma compara\xe7\xe3o sens\xedvel \xe0 largura.  Strings s\xe3o comparadas por tamanho de caractere de acordo com a linguagem de dados atual. por exemplo, "\uFF71" \xe9 considerado o mesmo que "\u30A2". ',(0,r.jsx)(e.strong,{children:"Notas:"})," O idioma dos dados deve ser o japon\xeas para poder usar essa op\xe7\xe3o. Para todos os demais idiomas, a op\xe7\xe3o \xe9 ignorada e ",(0,r.jsx)(e.a,{href:"/docs/pt/20-R7/commands/compare-strings",children:"Compare strings"})," funcionar\xe1 como se especificasse sk strict. Em outras palavras, estabelecer essa op\xe7\xe3o em um contexto que n\xe3o seja japon\xeas faria que a compara\xe7\xe3o fosse sens\xedvel \xe0 largura (o efeito contr\xe1rio). Esta op\xe7\xe3o \xe9 ignorada pela fun\xe7\xe3o ",(0,r.jsx)(e.a,{href:"/docs/pt/20-R7/commands/position",children:"Position"}),". A compara\xe7\xe3o insens\xecvel \xe0 largura de Unicode \xe9 assim\xe9trica e imposs\xedvel de localizar por posi\xe7\xe3o ou largura. Pode ser combinada com: sk case insensitive sk diacritic insensitive sk kana insensitive sk strict Essa constante implica o uso das constantes abaixo (que podem tamb\xe9m ser combinados para melhor a legibilidade): sk strict"]})]})]})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Aviso:"})," Voc\xea n\xe3o pode usar o caractere coringa @ com ",(0,r.jsx)(e.strong,{children:"Compare strings"}),". Por exemplo se passar ",(0,r.jsx)(e.em,{children:'"abc@"'})," em ",(0,r.jsx)(e.em,{children:"stringA"})," ou ",(0,r.jsx)(e.em,{children:"stringB"})," o comando vai realmente avaliar a string ",(0,r.jsx)(e.em,{children:'"abc@"'}),' e n\xe3o uma string "abc" mais qualquer caractere.']}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Valores retornados"})}),"\n",(0,r.jsx)(e.p,{children:"O comando retorna os valores longint a seguir:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"Valor"})}),(0,r.jsx)(e.th,{children:(0,r.jsxs)(e.strong,{children:["Descri\xe7\xe3o ",(0,r.jsx)(e.br,{})]})})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-1"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.em,{children:"stringA"})," antes de ",(0,r.jsx)(e.em,{children:"stringB"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"0"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.em,{children:"stringA"})," \xe9 igual a ",(0,r.jsx)(e.em,{children:"stringB"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"1"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.em,{children:"stringA"})," \xe9 depois de ",(0,r.jsx)(e.em,{children:"stringB"})]})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,r.jsx)(e.p,{children:"Se quiser comparar as strings:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0$string1:="alpha Bravo charlie Delta Echo Fox-Trot"\n\xa0$string2:="Alpha Bravo Charlie Delta Echo Fox-Trot"\n\xa0\n\xa0\xa0//comparar ls strings utilizando o c\xf3digo de caracteres\n\xa0$result:=Compare strings($string1;$string2;sk char codes)\n\xa0\xa0// $result = 1\n\xa0\n\xa0\xa0//comparar as strings utilizando o c\xf3digo de caracteres mas ignorando as mai\xfasculas e min\xfasculas\n\xa0$result:=Compare strings($string1;$string2;sk char codes+sk case insensitive)\n\xa0\xa0// $result = 0\n'})}),"\n",(0,r.jsx)(e.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,r.jsxs)(e.p,{children:["Os exemplos abaixo ilustram o impacto espec\xedfico das op\xe7\xf5es no ",(0,r.jsx)(e.strong,{children:"contexto da linguagem de dados japon\xeas"}),":"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0\xa0//como padr\xe3o n\xe3o \xe9 sens\xedvel a kana\n\xa0$result:=Compare strings("\u30A4\u30ED\u30CF";"\u3044\u308D\u306F")\xa0// igual\n\xa0$result:=Compare strings("\u30A4\u30ED\u30CF";"\u3044\u308D\u306F";sk strict)\xa0// n\xe3o \xe9 igual\n\xa0$result:=Compare strings("\u30A4\u30ED\u30CF";"\u3044\u308D\u306F";sk kana insensitive)\xa0// iguais\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0\xa0//como padr\xe3o n\xe3o diferencia entre mai\xfasculas e min\xfasculas\n\xa0$result:=Compare strings("\u3055\u3064\u304D";"\u3055\u3063\u304D")\xa0// igual\n\xa0$result:=Compare strings("\u3055\u3064\u304D";"\u3055\u3063\u304D";sk strict)\xa0// n\xe3o \xe9 igual\n\xa0$result:=Compare strings("\u3055\u3064\u304D";"\u3055\u3063\u304D";sk case insensitive)\xa0// igual\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0\xa0//como padr\xe3o \xe9 sens\xedvel aos diacr\xedticos quando o idioma dos dados for o japon\xeas (diferente do resto de idiomas)\n\xa0$result:=Compare strings("ete";"\xe9t\xe9")\xa0// igual no idioma de dato diferentes do japon\xe9s\n\xa0$result:=Compare strings("ete";"\xe9t\xe9")\xa0// diferente na linguagem de dados japonesa\n\xa0$result:=Compare strings("\u3046\u304C\u3044";"\u3046\u304B\u3044")\xa0// n\xe3o \xe9 igual\n\xa0$result:=Compare strings("\u3046\u304C\u3044";"\u3046\u304B\u3044";sk strict)\xa0// n\xe3o \xe9 igual\n\xa0$result:=Compare strings("\u3046\u304C\u3044";"\u3046\u304B\u3044";sk diacritic insensitive)\xa0// igual\n'})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Nota:"}),' a op\xe7\xe3o "Ordena\xe7\xe3o adequada para a pesquisa" (ver ) tem um impacto no comando ',(0,r.jsx)(e.strong,{children:"Compare strings"}),'. Em particular, a "Marca sonora katakana-hiragana prolongada" ou "\u9577\u97F3\u8A18\u53F7" se interpretar\xe1 de forma diferente. O ajuste tamb\xe9m impacta nas "marcas de itera\xe7\xe3o japonesas" como "\u309D" ou "\u309E". Por exemplo:']}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0$result:=Compare strings("\u3044\u3059\u305A";"\u3044\u3059\u309E")\xa0// igual se a op\xe7\xe3o estiver desativada\n\xa0$result:=Compare strings("\u3044\u3059\u305A";"\u3044\u3059\u309E")\xa0// n\xe3o \xe9 igual se a op\xe7\xe3o estiver desativada\n\xa0$result:=Compare strings("\u30E9\u30FC\u30E1\u30F3";"\uFF97\uFF70\uFF92\uFF9D")\xa0// igual se a op\xe7\xe3o estiver desativada\n\xa0$result:=Compare strings("\u30E9\u30FC\u30E1\u30F3";"\uFF97\uFF71\uFF92\uFF9D")\xa0// n\xe3 \xe9 igual se a op\xe7\xe3o estiver desativada\n'})}),"\n",(0,r.jsx)(e.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"/docs/pt/20-R7/commands/position",children:"Position"})}),"\n",(0,r.jsx)(e.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"N\xfamero do comando"}),(0,r.jsx)(e.td,{children:"1756"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Thread-seguro"}),(0,r.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function m(s={}){let{wrapper:e}={...(0,o.a)(),...s.components};return e?(0,r.jsx)(e,{...s,children:(0,r.jsx)(l,{...s})}):l(s)}},250065:function(s,e,a){a.d(e,{Z:function(){return t},a:function(){return i}});var n=a(667294);let r={},o=n.createContext(r);function i(s){let e=n.useContext(o);return n.useMemo(function(){return"function"==typeof s?s(e):{...e,...s}},[e,s])}function t(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(r):s.components||r:i(s.components),n.createElement(o.Provider,{value:e},s.children)}}}]);