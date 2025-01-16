"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30321"],{487769:function(e,a,s){s.r(a),s.d(a,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>t,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/num","title":"Num","description":"Num ( expressao {; separador} ) : Real","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/num.md","sourceDirName":"commands-legacy","slug":"/commands/num","permalink":"/docs/pt/commands/num","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fnum.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"num","title":"Num","slug":"/commands/num","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Match regex","permalink":"/docs/pt/commands/match-regex"},"next":{"title":"Position","permalink":"/docs/pt/commands/position"}}'),o=s("785893"),n=s("250065");let d={id:"num",title:"Num",slug:"/commands/num",displayed_sidebar:"docs"},i=void 0,t={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let a={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"Num"})," ( ",(0,o.jsx)(a.em,{children:"expressao"})," {; ",(0,o.jsx)(a.em,{children:"separador"}),"} ) : Real"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(a.table,{children:[(0,o.jsx)(a.thead,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.th,{children:"Par\xe2metro"}),(0,o.jsx)(a.th,{children:"Tipo"}),(0,o.jsx)(a.th,{}),(0,o.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(a.tbody,{children:[(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"expressao"}),(0,o.jsx)(a.td,{children:"Text, Boolean, Integer"}),(0,o.jsx)(a.td,{children:"\u2192"}),(0,o.jsx)(a.td,{children:"Cadeia para a qual retornar a forma num\xe9rica, ou Booleano para devolver 0 ou 1, ou express\xe3o num\xe9rica"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"separador"}),(0,o.jsx)(a.td,{children:"Text"}),(0,o.jsx)(a.td,{children:"\u2192"}),(0,o.jsx)(a.td,{children:"Separador decimal"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"Resultado"}),(0,o.jsx)(a.td,{children:"Real"}),(0,o.jsx)(a.td,{children:"\u2190"}),(0,o.jsx)(a.td,{children:"Formato num\xe9rico do par\xe2metro da express\xe3o"})]})]})]}),"\n",(0,o.jsx)(a.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(a.p,{children:["O comando Num devolve em forma num\xe9rica a express\xe3o de tipo cadeia, booleano, ou num\xe9rica que passou em ",(0,o.jsx)(a.em,{children:"expressao"}),". O par\xe2metro opcional ",(0,o.jsx)(a.em,{children:"separador"})," pode ser utilizado para determinar um separador decimal para a avalia\xe7\xe3o das express\xf5es de tipo cadeia."]}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"Express\xf5es de tipo cadeia"}),"\nSe ",(0,o.jsx)(a.em,{children:"expressao"})," consiste apenas de um ou mais caracteres alfab\xe9ticos, Num devolve zero. Se ",(0,o.jsx)(a.em,{children:"expressao"}),' inclui caracteres alfab\xe9ticos e caracteres num\xe9ricos, o comando ignora os caracteres alfab\xe9ticos. Assim, Num transforma a cadeia "a1b2c3" no n\xfamero 123.']}),"\n",(0,o.jsxs)(a.p,{children:["H\xe1 tr\xeas caracteres reservados que Num trata de maneira especial: o separador decimal definido dentro do sistema (se o par\xe2metro ",(0,o.jsx)(a.em,{children:"separador"})," n\xe3o for passado), o h\xedfen \u201C-\u201D, e \u201C",(0,o.jsx)(a.em,{children:"e"}),"\u201D ou \u201C",(0,o.jsx)(a.em,{children:"E"}),"\u201D. Estes caracteres s\xe3o interpretados como caracteres de formato num\xe9rico."]}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"O separador decimal \xe9 interpretado como uma casa decimal e deve aparecer em uma cadeia num\xe9rica. Como padr\xe3o, o comando utiliza o separador decimal definido no sistema operativo. Pode modificar este caractere utilizando o par\xe2metro separador (ver a continua\xe7\xe3o)."}),"\n",(0,o.jsxs)(a.li,{children:["O h\xedfen define um n\xfamero ou expoente negativo. O h\xedfen deve aparecer antes dos caracteres num\xe9ricos negativos ou depois da \u201Ce\u201D para um expoente. Exceto pelo caractere \u201Ce\u201D, se um h\xedfen est\xe1 em uma cadeia num\xe9rica, a por\xe7\xe3o da cadeia depois do h\xedfen \xe9 ignorado. Por exemplo, ",(0,o.jsx)(a.strong,{children:"Num"}),'("123-456") devolve 123, mas ',(0,o.jsx)(a.strong,{children:"Num"}),'("-9") devolve -9.']}),"\n",(0,o.jsxs)(a.li,{children:['O "e" ou "E" faz com que todos os caracteres num\xe9ricos \xe0 direita sejam interpretados como a pot\xeancia de um expoente. O \u201Ce\u201D deve estar em uma cadeia num\xe9rica. Desta forma, ',(0,o.jsx)(a.strong,{children:"Num"}),'("123e\u20132") devolve 1,23.']}),"\n",(0,o.jsxs)(a.li,{children:['Note que no caso de uma cadeia ter mais de um caractere "e", a convers\xe3o poder\xe1 dar resultados diferentes em Mac OS e em Windows.\nO par\xe2metro ',(0,o.jsx)(a.em,{children:"separador"})," pode ser utilizado para determinar um separador decimal personalizado para a avalia\xe7\xe3o de ",(0,o.jsx)(a.em,{children:"expressao"}),". Quando a cadeia a avaliar for expressa com um separador decimal diferente do separador do sistema, o comando devolve um resultado incorreto. O par\xe2metro ",(0,o.jsx)(a.em,{children:"separador"})," pode ser utilizado neste caso para obter uma avalia\xe7\xe3o correta. Quando se passa este par\xe2metro, o comando n\xe3o considera o separador decimal do sistema. Pode passar um ou mais caracteres."]}),"\n"]}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"Nota"}),": o comando ",(0,o.jsx)(a.a,{href:"/docs/pt/commands/get-system-format",children:"GET SYSTEM FORMAT"})," pode ser utilizado para descobrir qual o separador decimal atual assim como outros par\xe2metros de sistema regionais."]}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.strong,{children:"Express\xf5es de tipo Booleano"})}),"\n",(0,o.jsxs)(a.p,{children:["Se passar uma express\xe3o booleana, Num devolve 1 se a express\xe3o for True; do contr\xe1rio devolve ",(0,o.jsx)(a.em,{children:"0 (zero)"}),"."]}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.strong,{children:"Express\xf5es num\xe9ricas"})}),"\n",(0,o.jsxs)(a.p,{children:["Se passar uma express\xe3o num\xe9rica no par\xe2metro ",(0,o.jsx)(a.em,{children:"expressao"}),", Num devolve o valor passado no par\xe2metro ",(0,o.jsx)(a.em,{children:"expressao"})," da maneira que estiver. Isso pode ser \xfatil especialmente no caso de programa\xe7\xe3o gen\xe9rica utilizando ponteiros."]}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"Express\xf5es indefinidas"}),(0,o.jsx)(a.br,{}),"\nSe a ",(0,o.jsx)(a.em,{children:"expressao"})," for avaliada como indefinida, o comando devolve 0 (zero). Isso \xe9 \xfatil quando se espera que o resultado de uma express\xe3o (por exemplo, um atributo objeto) seja um n\xfamero, mesmo se puder ser indefinido."]}),"\n",(0,o.jsx)(a.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,o.jsxs)(a.p,{children:["O exemplo abaixo ilustra como funciona Num quando for passado um argumento de tipo cadeia. Cada linha atribui um n\xfamero \xe0 vari\xe1vel ",(0,o.jsx)(a.em,{children:"vResult"}),". Os coment\xe1rios descrevem os resultados:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:'\xa0vResult:=Num("ABCD")\xa0// vResult vale 0\n\xa0vResult:=Num("A1B2C3")\xa0// vResult vale 123\n\xa0vResult:=Num("123")\xa0// vResult vale 123\n\xa0vResult:=Num("123,4")\xa0// vResult vale 123,4\n\xa0vResult:=Num("-123")\xa0// vResult vale -123\n\xa0vResult:=Num("-123e2")\xa0// vResult vale -12300\n'})}),"\n",(0,o.jsx)(a.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,o.jsxs)(a.p,{children:["Neste exemplo, ",(0,o.jsx)(a.em,{children:"[Cliente]D\xedvida"})," \xe9 comparado com o valor ",(0,o.jsx)(a.em,{children:"$1000"}),". O comando Num aplicado a esta compara\xe7\xe3o devolve 1 ou 0. A multiplica\xe7\xe3o de uma cadeia por 1 ou 0 devolve a cadeia ou a cadeia vazia. Como resultado, ",(0,o.jsx)(a.em,{children:"[Cliente]Risco"})," recebe o valor \u201CAceit\xe1vel\u201D ou \u201CInaceit\xe1vel\u201D:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:'\xa0\xa0// Se o cliente tiver d\xedvidas menores a 1000, o risco \xe9 aceit\xe1vel.\n\xa0\xa0// Se o cliente tiver d\xedvidas superiores a 1000, o risco \xe9 inaceit\xe1vel.\n\xa0[Cliente]Risco:=("Aceit\xe1vel"*Num([Cliente]D\xedvida<1000))+("Inaceit\xe1vel"*Num([Cliente]D\xedvida>=1000))\n'})}),"\n",(0,o.jsx)(a.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,o.jsx)(a.p,{children:"Este exemplo compara os resultados obtidos dependendo do separador \u201Catual\u201D:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:'\xa0$umaCadeia:="33,333.33"\n\xa0$num:=Num($umaCadeia)\n\xa0\xa0// by default, $num \xe9 igual a 33,33333 em um sistema franc\xeas\n\xa0$num:=Num($umaCadeia;".")\n\xa0\xa0// $num ser\xe1 avaliada corretamente sem importar o sistema;\n\xa0\xa0// por exemplo, 33 333,33 em um sistema franc\xeas\n'})}),"\n",(0,o.jsx)(a.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.a,{href:"/docs/pt/commands/bool",children:"Bool"}),(0,o.jsx)(a.br,{}),"\n",(0,o.jsx)(a.a,{href:"/docs/pt/commands/get-system-format",children:"GET SYSTEM FORMAT"}),(0,o.jsx)(a.br,{}),"\n",(0,o.jsx)(a.a,{href:"/docs/pt/commands/string",children:"String"})]}),"\n",(0,o.jsx)(a.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(a.table,{children:[(0,o.jsx)(a.thead,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.th,{}),(0,o.jsx)(a.th,{})]})}),(0,o.jsxs)(a.tbody,{children:[(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"N\xfamero do comando"}),(0,o.jsx)(a.td,{children:"11"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"Thread-seguro"}),(0,o.jsx)(a.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,a,s){s.d(a,{Z:function(){return i},a:function(){return d}});var r=s(667294);let o={},n=r.createContext(o);function d(e){let a=r.useContext(n);return r.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(n.Provider,{value:a},e.children)}}}]);