"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31016"],{172499:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>t,contentTitle:()=>a});var s=JSON.parse('{"id":"Concepts/operators","title":"Operadores","description":"Um operador \xe9 um s\xedmbolo ou um grupo de s\xedmbolos que \xe9 utilizado para verificar, modificar ou combinar valores. J\xe1 est\xe1 familiarizado com muitos operadores. Por exemplo, 1 + 2 utiliza o operador de adi\xe7\xe3o (ou sinal de mais) para adicionar dois n\xfameros e o resultado \xe9 3. Os operadores de compara\xe7\xe3o, como = ou >, permitem-lhe comparar dois ou mais valores.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/Concepts/operators.md","sourceDirName":"Concepts","slug":"/Concepts/operators","permalink":"/docs/pt/20/Concepts/operators","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Foperators.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"operators","title":"Operadores"},"sidebar":"docs","previous":{"title":"Uma visita r\xe1pida","permalink":"/docs/pt/20/Concepts/quick-tour"},"next":{"title":"Tipos de dados","permalink":"/docs/pt/20/Concepts/data-types"}}'),o=n("785893"),d=n("250065");let i={id:"operators",title:"Operadores"},a=void 0,l={},t=[{value:"Terminologia",id:"terminologia",level:2},{value:"Operador de atribui\xe7\xe3o",id:"operador-de-atribui\xe7\xe3o",level:2},{value:"Operadores b\xe1sicos",id:"operadores-b\xe1sicos",level:2},{value:"Operadores de atribui\xe7\xe3o compostos",id:"operadores-de-atribui\xe7\xe3o-compostos",level:2},{value:"Exemplos",id:"exemplos",level:4},{value:"Operadores curto-circuito",id:"operadores-curto-circuito",level:2},{value:"Operador em curto-circuito AND (&amp;&amp;)",id:"operador-em-curto-circuito-and-",level:3},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Operador em curto-circuito OR (||)",id:"operador-em-curto-circuito-or-",level:3},{value:"Exemplo 1",id:"exemplo-1-1",level:4},{value:"Exemplo 2",id:"exemplo-2-1",level:4},{value:"Preced\xeancia",id:"preced\xeancia",level:3},{value:"Operador tern\xe1rio",id:"operador-tern\xe1rio",level:2},{value:"Sintaxe",id:"sintaxe",level:3},{value:"Exemplos",id:"exemplos-1",level:3},{value:"Um exemplo simple",id:"um-exemplo-simple",level:4},{value:"Tratamento de dados de uma tabela",id:"tratamento-de-dados-de-uma-tabela",level:4},{value:"Truthy e falsy",id:"truthy-e-falsy",level:2}];function c(e){let r={a:"a",blockquote:"blockquote",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:["Um operador \xe9 um s\xedmbolo ou um grupo de s\xedmbolos que \xe9 utilizado para verificar, modificar ou combinar valores. J\xe1 est\xe1 familiarizado com muitos operadores. Por exemplo, ",(0,o.jsx)(r.code,{children:"1 + 2"})," utiliza o operador de adi\xe7\xe3o (ou sinal de mais) para adicionar dois n\xfameros e o resultado \xe9 3. Os operadores de compara\xe7\xe3o, como = ou >, permitem-lhe comparar dois ou mais valores."]}),"\n",(0,o.jsxs)(r.p,{children:["A linguagem 4D suporta os operadores que talvez j\xe1 conhe\xe7a de outras linguagens como C ou JavaScript. No entanto, o operador de atribui\xe7\xe3o \xe9 ",(0,o.jsx)(r.code,{children:":="})," para evitar que seja utilizado por engano quando se pretende utilizar o operador igual a (",(0,o.jsx)(r.code,{children:"="}),"). ",(0,o.jsx)(r.a,{href:"#basic-operators",children:"Operadores b\xe1sicos"})," tais como operadores aritm\xe9ticos (+, -, *, /, %...) e operadores de compara\xe7\xe3o (=, >, >=...) podem ser utilizados com n\xfameros, mas tamb\xe9m com tipos de dados booleanos, texto, data, hora, ponteiro ou imagem. Tal como JavaScript, a linguagem 4D suporta o conceito de ",(0,o.jsx)(r.a,{href:"#truthy-and-falsy",children:"valores truthy e falsy"}),", que s\xe3o usados em ",(0,o.jsx)(r.a,{href:"#short-circuit-operators",children:"operadores de curto-circuito"}),"."]}),"\n",(0,o.jsx)(r.h2,{id:"terminologia",children:"Terminologia"}),"\n",(0,o.jsxs)(r.p,{children:["A linguagem 4D suporta os operadores ",(0,o.jsx)(r.strong,{children:"bin\xe1rios"})," e ",(0,o.jsx)(r.strong,{children:"tern\xe1rios"}),":"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["os operadores bin\xe1rios operam sobre dois objectivos (como ",(0,o.jsx)(r.code,{children:"2 + 3"}),") e aparecem entre os seus dois objectivos."]}),"\n",(0,o.jsxs)(r.li,{children:["os operadores tern\xe1rios operam em tr\xeas objectivos. Tal como C, 4D tem apenas um operador tern\xe1rio, o operador condicional tern\xe1rio ",(0,o.jsx)(r.a,{href:"#ternary-operator"})," (",(0,o.jsx)(r.code,{children:"a ? b : c"}),")."]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["Os valores que os operadores afectam s\xe3o os operandos. Na express\xe3o ",(0,o.jsx)(r.code,{children:"1 + 2"}),", o s\xedmbolo + \xe9 um operador bin\xe1rio e os seus dois operandos s\xe3o os valores 1 e 2."]}),"\n",(0,o.jsx)(r.h2,{id:"operador-de-atribui\xe7\xe3o",children:"Operador de atribui\xe7\xe3o"}),"\n",(0,o.jsxs)(r.p,{children:["O ",(0,o.jsx)(r.strong,{children:"operador de atribui\xe7\xe3o"})," (",(0,o.jsx)(r.code,{children:"a:=b"}),") inicializa ou actualiza o valor de ",(0,o.jsx)(r.code,{children:"a"})," com o valor de ",(0,o.jsx)(r.code,{children:"b"}),":"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:'$myNumber:=3 //atribui 3 \xe0 vari\xe1vel MyNumber  \n$myDate:=!2018/01/21! //atribui uma data literal\n$myLength:=Length("Acme") //atribui o resultado do comando (4) a $myLength\n$col:=New collection //$col \xe9 inicializado com uma colec\xe7\xe3o vazia\n'})}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:["N\xc3O confundir o operador de atribui\xe7\xe3o ",(0,o.jsx)(r.code,{children:":="})," com o operador de compara\xe7\xe3o de igualdade ",(0,o.jsx)(r.code,{children:"="}),". Foi deliberadamente escolhido um operador de atribui\xe7\xe3o diferente (e n\xe3o ",(0,o.jsx)(r.code,{children:"="}),") para evitar problemas e confus\xf5es que ocorrem frequentemente com == ou === noutras linguagens de programa\xe7\xe3o. Esses erros s\xe3o geralmente dif\xedceis de reconhecer pelo compilador e geram problemas trabalhosos."]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"operadores-b\xe1sicos",children:"Operadores b\xe1sicos"}),"\n",(0,o.jsxs)(r.p,{children:["Os resultados dos operadores dependem dos ",(0,o.jsx)(r.strong,{children:"tipos de dados"})," aos quais s\xe3o aplicados. 4D suporta diferentes operadores em tipos de dados escalares. S\xe3o descritos com os tipos de dados, nas sec\xe7\xf5es seguintes:"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/docs/pt/20/Concepts/boolean#logical-operators",children:(0,o.jsx)(r.strong,{children:"Operadores l\xf3gicos"})})," (em express\xf5es ",(0,o.jsx)(r.strong,{children:"booleanas"}),")"]}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/docs/pt/20/Concepts/date#date-operators",children:(0,o.jsx)(r.strong,{children:"Operadores de data"})})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/docs/pt/20/Concepts/time#time-operators",children:(0,o.jsx)(r.strong,{children:"Operadores de horas"})})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/docs/pt/20/Concepts/number#number-operators",children:(0,o.jsx)(r.strong,{children:"Operadores de n\xfameros"})})}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/docs/pt/20/Concepts/number#bitwise-operators",children:(0,o.jsx)(r.strong,{children:"Operadores Bitwise"})})," (em ",(0,o.jsx)(r.strong,{children:"express\xf5es de n\xfameros inteiros longos"}),")"]}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/docs/pt/20/Concepts/picture#picture-operators",children:(0,o.jsx)(r.strong,{children:"Operadores de imagem"})})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/docs/pt/20/Concepts/pointer#pointer-operators",children:(0,o.jsx)(r.strong,{children:"Operadores de Ponteiros"})})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/docs/pt/20/Concepts/string#string-operators",children:(0,o.jsx)(r.strong,{children:"Operadores de string"})})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/docs/pt/20/Concepts/null-undefined#null-operators",children:(0,o.jsx)(r.strong,{children:"Operadores Null"})})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/docs/pt/20/Concepts/null-undefined#undefined-operators",children:(0,o.jsx)(r.strong,{children:"Operadores indefinidos"})})}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"operadores-de-atribui\xe7\xe3o-compostos",children:"Operadores de atribui\xe7\xe3o compostos"}),"\n",(0,o.jsxs)(r.details,{children:[(0,o.jsx)(r.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Release"}),(0,o.jsx)(r.th,{children:"Mudan\xe7as"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"19 R4"}),(0,o.jsx)(r.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["4D fornece ",(0,o.jsx)(r.strong,{children:"operadores de atribui\xe7\xe3o compostos"})," que combinam a atribui\xe7\xe3o com outra opera\xe7\xe3o. Um exemplo \xe9 o operador de atribui\xe7\xe3o de adi\xe7\xe3o (",(0,o.jsx)(r.code,{children:"+="}),"):"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:"$a:=1 \n$a+=2 // $a=3\n"})}),"\n",(0,o.jsx)(r.p,{children:"S\xe3o suportados os seguintes operadores de atribui\xe7\xe3o compostos:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Operador"}),(0,o.jsx)(r.th,{children:"Sintaxe"}),(0,o.jsx)(r.th,{children:"Atribui\xe7\xf5es"}),(0,o.jsx)(r.th,{children:"Exemplo"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Adi\xe7\xe3o"}),(0,o.jsx)(r.td,{children:"Text += Text"}),(0,o.jsx)(r.td,{children:"Text"}),(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:'$t+=" World"  //$t:=$t+" World"'})})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{}),(0,o.jsx)(r.td,{children:"Number += Number"}),(0,o.jsx)(r.td,{children:"Number"}),(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"$n+=5 //$n:=$n+5"})})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{}),(0,o.jsx)(r.td,{children:"Date += Number"}),(0,o.jsx)(r.td,{children:"Date"}),(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"$d+=5 //$d:=$d+5"})})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{}),(0,o.jsx)(r.td,{children:"Time += Time"}),(0,o.jsx)(r.td,{children:"Hora"}),(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"$t1+=$t2 //$t1:=$t1+$t2"})})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{}),(0,o.jsx)(r.td,{children:"Time += Number"}),(0,o.jsx)(r.td,{children:"Number"}),(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"$t1+=5 //$t1:=$t1+5"})})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{}),(0,o.jsx)(r.td,{children:"Picture += Picture"}),(0,o.jsx)(r.td,{children:"Imagem"}),(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"$p1+=$p2 //$p1:=$p1+$p2 (add $p2 to the right of $p1)"})})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{}),(0,o.jsx)(r.td,{children:"Picture += Number"}),(0,o.jsx)(r.td,{children:"Imagem"}),(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"$p1+=5 //$p1:=$p1+5 (move $p1 horizontally 5 pixels to the right)"})})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Subtra\xe7\xe3o"}),(0,o.jsx)(r.td,{children:"Number -= Number"}),(0,o.jsx)(r.td,{children:"Number"}),(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"$n-=5 //$n:=$n-5"})})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{}),(0,o.jsx)(r.td,{children:"Date -= Number"}),(0,o.jsx)(r.td,{children:"Date"}),(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"$d-=5 //$d:=$d-5"})})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{}),(0,o.jsx)(r.td,{children:"Time -= Time"}),(0,o.jsx)(r.td,{children:"Hora"}),(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"$t1-=$t2 //$t1:=$t1-$t2"})})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{}),(0,o.jsx)(r.td,{children:"Time -= Number"}),(0,o.jsx)(r.td,{children:"Number"}),(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"$t1-=5 //$t1:=$t1-5"})})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{}),(0,o.jsx)(r.td,{children:"Picture -= Number"}),(0,o.jsx)(r.td,{children:"Imagem"}),(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"$p1-=5 //$p1:=$p1-5 (mover horizontalmente $p1 5 pixels para a esquerda)"})})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Divis\xe3o"}),(0,o.jsx)(r.td,{children:"Number /= Number"}),(0,o.jsx)(r.td,{children:"Number"}),(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"$n/=5 //$n:=$n/5"})})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{}),(0,o.jsx)(r.td,{children:"Time /= Time"}),(0,o.jsx)(r.td,{children:"Hora"}),(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"$t1/=$t2 //$t1:=$t1/$t2"})})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{}),(0,o.jsx)(r.td,{children:"Time /= Number"}),(0,o.jsx)(r.td,{children:"Number"}),(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"$t1/=5 //$t1:=$t1/5"})})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{}),(0,o.jsx)(r.td,{children:"Picture /= Picture"}),(0,o.jsx)(r.td,{children:"Imagem"}),(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"$p1/=$p2 //$p1:=$p1/$p2 (adicione $p2 ao fundo de $p1)"})})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{}),(0,o.jsx)(r.td,{children:"Picture /= Number"}),(0,o.jsx)(r.td,{children:"Imagem"}),(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"$p1/=5 //$p1:=$p1/5 (mover $p1 verticalmente 5 pixels)"})})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Multiplica\xe7\xe3o"}),(0,o.jsx)(r.td,{children:"Text *= Number"}),(0,o.jsx)(r.td,{children:"Text"}),(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:'$t*="abc"  //$t:=$t*"abc"'})})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{}),(0,o.jsx)(r.td,{children:"Number *= Number"}),(0,o.jsx)(r.td,{children:"Number"}),(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"$n*=5 //$n:=$n*5"})})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{}),(0,o.jsx)(r.td,{children:"Time *= Time"}),(0,o.jsx)(r.td,{children:"Hora"}),(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"$t1*=$t2 //$t1:=$t1*$t2"})})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{}),(0,o.jsx)(r.td,{children:"Time *= Number"}),(0,o.jsx)(r.td,{children:"Number"}),(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"$t1*=5 //$t1:=$t1*5"})})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{}),(0,o.jsx)(r.td,{children:"Picture *= Number"}),(0,o.jsx)(r.td,{children:"Imagem"}),(0,o.jsx)(r.td,{children:(0,o.jsx)(r.code,{children:"$p1*=5 //$p1:=$p1*5 (redimensionar $p1 por 5)"})})]})]})]}),"\n",(0,o.jsxs)(r.p,{children:["Estes operadores aplicam-se a quaisquer ",(0,o.jsx)(r.a,{href:"/docs/pt/20/Concepts/quick-tour#assignable-vs-non-assignable-expressions",children:"express\xf5es atribu\xedveis"})," (exceto imagens como propriedades de objecto ou elementos de colec\xe7\xf5es)."]}),"\n",(0,o.jsxs)(r.p,{children:['A opera\xe7\xe3o "source ',(0,o.jsx)(r.code,{children:"operator"}),' value" n\xe3o \xe9 estritamente equivalente a "source := source ',(0,o.jsx)(r.code,{children:"operator"}),' value" porque a express\xe3o que designa a fonte (vari\xe1vel, campo, propriedade de objeto, elemento de cole\xe7\xe3o) s\xf3 \xe9 avaliada uma vez. Por exemplo, numa express\xe3o como ',(0,o.jsx)(r.code,{children:"getPointer()->+=1"})," o m\xe9todo ",(0,o.jsx)(r.code,{children:"getPointer"})," \xe9 chamado apenas uma vez."]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/pt/20/Concepts/string#character-reference-symbols",children:"A indexa\xe7\xe3o de caracteres no texto"})," e ",(0,o.jsx)(r.a,{href:"/docs/pt/20/Concepts/blob#accessing-a-scalar-blobs-bytes",children:"a indexa\xe7\xe3o de bytes no blob"})," n\xe3o suportam estes operadores."]}),"\n"]}),"\n",(0,o.jsx)(r.h4,{id:"exemplos",children:"Exemplos"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:'// Addition\n$x:=2\n$x+=5 //$x=7\n\n$t:="Hello" \n$t+=" World" //$t="Hello World" \n\n$d:=!2000-11-10!\n$d+=10 //$d=!2000-11-20!\n\n// Subtrac\xe7\xe3o\n$x1:=10\n$x1-=5 //$x1=5\n\n$d1:=!2000-11-10!\n$d1-=10 // $d1=!2000-10-31!\n\n// Divis\xe3o\n$x3:=10\n$x3/=2 // $x3=5\n\n\n// Multiplica\xe7\xe3o\n$x2:=10\n$x2*=5 // $x2=50\n\n$t2:="Hello" \n$t2*=2 // $t2="HelloHello"\n\n'})}),"\n",(0,o.jsx)(r.h2,{id:"operadores-curto-circuito",children:"Operadores curto-circuito"}),"\n",(0,o.jsxs)(r.p,{children:["Os operadores ",(0,o.jsx)(r.strong,{children:"&&"})," e ",(0,o.jsx)(r.strong,{children:"||"})," s\xe3o os ",(0,o.jsx)(r.strong,{children:"operadores de curto-circuito"}),". Um operador de curto-circuito \xe9 aquele que n\xe3o avalia necessariamente todos os seus operandos."]}),"\n",(0,o.jsxs)(r.p,{children:["A diferen\xe7a em rela\xe7\xe3o aos operadores booleanos simples ",(0,o.jsxs)(r.a,{href:"/docs/pt/20/Concepts/boolean#logical-operators",children:[(0,o.jsx)(r.strong,{children:"&"})," e ",(0,o.jsx)(r.strong,{children:"|"})]})," \xe9 que os operadores de curto-circuito ",(0,o.jsx)(r.strong,{children:"&&"})," e ",(0,o.jsx)(r.strong,{children:"||"})," n\xe3o devolvem um valor booleano. Avaliam as express\xf5es como ",(0,o.jsx)(r.a,{href:"#truthy-and-falsy",children:"truthy ou falsy"}),"e, em seguida, devolvem uma das express\xf5es."]}),"\n",(0,o.jsx)(r.h3,{id:"operador-em-curto-circuito-and-",children:"Operador em curto-circuito AND (&&)"}),"\n",(0,o.jsxs)(r.details,{children:[(0,o.jsx)(r.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Release"}),(0,o.jsx)(r.th,{children:"Mudan\xe7as"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"19 R4"}),(0,o.jsx)(r.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"A regra \xe9 a seguinte:"}),"\n",(0,o.jsxs)(r.p,{children:["Dado ",(0,o.jsx)(r.code,{children:"Expr1 && Expr2"}),":"]}),"\n",(0,o.jsxs)(r.p,{children:["O operador de curto-circuito AND avalia os operandos da esquerda para a direita, retornando imediatamente com o valor do primeiro operando falsy que encontrar; se todos os valores forem ",(0,o.jsx)(r.a,{href:"#truthy-and-falsy",children:"truthy"}),", o valor do \xfaltimo operando \xe9 retornado."]}),"\n",(0,o.jsxs)(r.p,{children:["A tabela seguinte resume os diferentes casos para o operador ",(0,o.jsx)(r.strong,{children:"&&"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Expr1"}),(0,o.jsx)(r.th,{children:"Expr2"}),(0,o.jsx)(r.th,{children:"Valor devolvido"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"truthy"}),(0,o.jsx)(r.td,{children:"truthy"}),(0,o.jsx)(r.td,{children:"Expr2"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"truthy"}),(0,o.jsx)(r.td,{children:"falsy"}),(0,o.jsx)(r.td,{children:"Expr2"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"falsy"}),(0,o.jsx)(r.td,{children:"truthy"}),(0,o.jsx)(r.td,{children:"Expr1"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"falsy"}),(0,o.jsx)(r.td,{children:"falsy"}),(0,o.jsx)(r.td,{children:"Expr1"})]})]})]}),"\n",(0,o.jsx)(r.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:'var $v : Variant\n\n$v:= "Hello" && "World" //"World"\n$v:=False && 0 // False\n$v:=0 && False // False\n$v:=5 && !00-00-00! // 00/00/00\n$v := 5 && 10 && "hello" //"hello"\n'})}),"\n",(0,o.jsx)(r.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,o.jsx)(r.p,{children:"Digamos que tem uma loja online e que alguns produtos t\xeam uma taxa de imposto aplicada e outros n\xe3o."}),"\n",(0,o.jsx)(r.p,{children:"Para calcular o imposto, multiplica-se o pre\xe7o pela taxa de imposto, que pode n\xe3o ter sido especificada."}),"\n",(0,o.jsx)(r.p,{children:"Portanto, pode escrever isto:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:"var $tax : Variant\n\n$tax:=$item.taxRate && ($item.price*$item.taxRate)\n"})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"$tax"})," ser\xe1 NULL se taratet\xe9 \xe9 NULL (ou indefinido); caso contr\xe1rio, armazenar\xe1 o resultado do c\xe1lculo."]}),"\n",(0,o.jsx)(r.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,o.jsx)(r.p,{children:"Os operadores de curto-circuito s\xe3o \xfateis em provas como:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:"If(($myObject#Null) && ($myObject.value>10))\n    //code End if\n"})}),"\n",(0,o.jsx)(r.p,{children:"Se $myObject for nulo, o segundo argumento n\xe3o \xe9 executado e, por conseguinte, n\xe3o \xe9 lan\xe7ado qualquer erro."}),"\n",(0,o.jsx)(r.h3,{id:"operador-em-curto-circuito-or-",children:"Operador em curto-circuito OR (||)"}),"\n",(0,o.jsxs)(r.details,{children:[(0,o.jsx)(r.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Release"}),(0,o.jsx)(r.th,{children:"Mudan\xe7as"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"19 R4"}),(0,o.jsx)(r.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:'O operador || devolve o valor de um dos operandos especificados. A express\xe3o \xe9 avaliada da esquerda para a direita e testada para uma poss\xedvel avalia\xe7\xe3o de "curto-circuito" utilizando a seguinte regra:'}),"\n",(0,o.jsxs)(r.p,{children:["Dado ",(0,o.jsx)(r.code,{children:"Expr1 || Expr2"}),":"]}),"\n",(0,o.jsxs)(r.p,{children:["Se Expr1 \xe9 ",(0,o.jsx)(r.a,{href:"#truthy-and-falsy",children:"truthy"}),", Expr2 n\xe3o \xe9 avaliado e o c\xe1lculo devolve Expr1."]}),"\n",(0,o.jsxs)(r.p,{children:["Se Expr1 \xe9 ",(0,o.jsx)(r.a,{href:"#truthy-and-falsy",children:"falsy"}),", o c\xe1lculo devolve Expr2."]}),"\n",(0,o.jsxs)(r.p,{children:["A tabela seguinte resume os diferentes casos e o valor retornado para o operador ",(0,o.jsx)(r.strong,{children:"||"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Expr1"}),(0,o.jsx)(r.th,{children:"Expr2"}),(0,o.jsx)(r.th,{children:"Valor devolvido"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"truthy"}),(0,o.jsx)(r.td,{children:"truthy"}),(0,o.jsx)(r.td,{children:"Expr1"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"truthy"}),(0,o.jsx)(r.td,{children:"falsy"}),(0,o.jsx)(r.td,{children:"Expr1"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"falsy"}),(0,o.jsx)(r.td,{children:"truthy"}),(0,o.jsx)(r.td,{children:"Expr2"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"falsy"}),(0,o.jsx)(r.td,{children:"falsy"}),(0,o.jsx)(r.td,{children:"Expr2"})]})]})]}),"\n",(0,o.jsx)(r.h4,{id:"exemplo-1-1",children:"Exemplo 1"}),"\n",(0,o.jsxs)(r.p,{children:["Digamos que tem uma tabela chamada Employee. Alguns empregados introduziram um n\xfamero de telefone e outros n\xe3o. Some employees have entered a phone number, and others haven't. Some employees have entered a phone number, and others haven't. This means that ",(0,o.jsx)(r.code,{children:"$emp.phone"})," could be NULL, and you cannot assign NULL to a Text variable. Mas pode escrever o seguinte:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:'var $phone : Text\n\n$phone:=$emp.phone || "n/a"\n'})}),"\n",(0,o.jsxs)(r.p,{children:["Nesse caso, ",(0,o.jsx)(r.code,{children:"$phone"}),' guardar\xe1 um n\xfamero de telefone ou a cadeia "n/a".']}),"\n",(0,o.jsx)(r.h4,{id:"exemplo-2-1",children:"Exemplo 2"}),"\n",(0,o.jsxs)(r.p,{children:["Dada uma tabela chamada Person com um campo ",(0,o.jsx)(r.em,{children:"name"}),", bem como um campo ",(0,o.jsx)(r.em,{children:"maiden name"})," para mulheres casadas."]}),"\n",(0,o.jsx)(r.p,{children:"O exemplo seguinte verifica se existe um nome de solteira e armazena-o numa vari\xe1vel; caso contr\xe1rio, armazena simplesmente o nome da pessoa:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:"var $name: Text\n\n$name:=$person.maidenName || $person.name\n"})}),"\n",(0,o.jsx)(r.h3,{id:"preced\xeancia",children:"Preced\xeancia"}),"\n",(0,o.jsxs)(r.p,{children:["Os operadores ",(0,o.jsx)(r.code,{children:"&&"})," e ",(0,o.jsx)(r.code,{children:"||"})," t\xeam a mesma preced\xeancia que os operadores l\xf3gicos ",(0,o.jsx)(r.code,{children:"&"})," e ",(0,o.jsx)(r.code,{children:"|"}),", e s\xe3o avaliados da esquerda para a direita."]}),"\n",(0,o.jsxs)(r.p,{children:["Isto significa que ",(0,o.jsx)(r.code,{children:"a || b && c"})," \xe9 avaliado como ",(0,o.jsx)(r.code,{children:"(a || b) && c"}),"."]}),"\n",(0,o.jsx)(r.h2,{id:"operador-tern\xe1rio",children:"Operador tern\xe1rio"}),"\n",(0,o.jsxs)(r.details,{children:[(0,o.jsx)(r.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Release"}),(0,o.jsx)(r.th,{children:"Mudan\xe7as"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"19 R4"}),(0,o.jsx)(r.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["O operador condicional tern\xe1rio permite-lhe escrever express\xf5es condicionais de uma linha. For example, it can replace a full sequence of ",(0,o.jsx)(r.a,{href:"/docs/pt/20/Concepts/control-flow#ifelseend-if",children:"If\u2026 Else"})," statements."]}),"\n",(0,o.jsx)(r.p,{children:"Aceita tr\xeas operandos na seguinte ordem:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"uma condi\xe7\xe3o seguida de um ponto de interroga\xe7\xe3o (?)"}),"\n",(0,o.jsxs)(r.li,{children:["uma express\xe3o a executar se a condi\xe7\xe3o \xe9 ",(0,o.jsx)(r.a,{href:"#truthy-and-falsy",children:"truthy"}),", seguida de dois pontos (:)"]}),"\n",(0,o.jsxs)(r.li,{children:["uma express\xe3o a executar se a condi\xe7\xe3o \xe9 ",(0,o.jsx)(r.a,{href:"#truthy-and-falsy",children:"falsy"})]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"sintaxe",children:"Sintaxe"}),"\n",(0,o.jsx)(r.p,{children:"A sintaxe \xe9 a seguinte:"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.code,{children:"condition ? exprIfTruthy : exprIfFalsy"})}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:["Uma vez que a sintaxe do token ",(0,o.jsx)(r.a,{href:"https://doc.4d.com/4Dv19/4D/19.5/Using-tokens-in-formulas.300-6136716.en.html"})," utiliza dois pontos, recomenda-se a inser\xe7\xe3o de um espa\xe7o ap\xf3s os dois pontos ",(0,o.jsx)(r.code,{children:":"})," ou a utiliza\xe7\xe3o de par\xeanteses para encerrar os tokens, a fim de evitar conflitos."]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"exemplos-1",children:"Exemplos"}),"\n",(0,o.jsx)(r.h4,{id:"um-exemplo-simple",children:"Um exemplo simple"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:'var $age : Integer\nvar $beverage : Text\n\n$age:=26\n$beverage:=($age>=21) ? "Beer" : "Juice" ALERT($beverage) // "Beer"\n'})}),"\n",(0,o.jsx)(r.h4,{id:"tratamento-de-dados-de-uma-tabela",children:"Tratamento de dados de uma tabela"}),"\n",(0,o.jsx)(r.p,{children:"Este exemplo armazena o nome completo de uma pessoa numa vari\xe1vel e trata do caso em que n\xe3o foi especificado o primeiro nome ou o \xfaltimo nome:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:'var $fullname : Text\n\n// Se um dos nomes estiver em falta, guardar o que existe, caso contr\xe1rio guardar uma cadeia vazia\n$fullname:=($person.firstname && $person.lastname) ? ($person.firstname+" "+$person.lastname) : ($person.lastname || $person.firstname) || ""\n'})}),"\n",(0,o.jsx)(r.h2,{id:"truthy-e-falsy",children:"Truthy e falsy"}),"\n",(0,o.jsxs)(r.details,{children:[(0,o.jsx)(r.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Release"}),(0,o.jsx)(r.th,{children:"Mudan\xe7as"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"19 R4"}),(0,o.jsx)(r.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["Para al\xe9m de um tipo, cada valor tem tamb\xe9m um valor booliano inerente, geralmente conhecido como ",(0,o.jsx)(r.strong,{children:"truthy"})," ou ",(0,o.jsx)(r.strong,{children:"falsy"}),"."]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:["Os valores ",(0,o.jsx)(r.strong,{children:"truthy"})," e ",(0,o.jsx)(r.strong,{children:"falsy"})," s\xf3 s\xe3o avaliados pelos operadores ",(0,o.jsx)(r.a,{href:"#short-circuit-operators",children:"de curto-circuito"})," e ",(0,o.jsx)(r.a,{href:"#ternary-operator",children:"tern\xe1rios"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["Os seguintes valores s\xe3o ",(0,o.jsx)(r.strong,{children:"falsy"}),":"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"false"}),"\n",(0,o.jsx)(r.li,{children:"Null"}),"\n",(0,o.jsx)(r.li,{children:"indefinido"}),"\n",(0,o.jsx)(r.li,{children:"Null object"}),"\n",(0,o.jsx)(r.li,{children:"Null collection"}),"\n",(0,o.jsx)(r.li,{children:"Null pointer"}),"\n",(0,o.jsx)(r.li,{children:"Null picture"}),"\n",(0,o.jsx)(r.li,{children:"Null date !00-00-00!"}),"\n",(0,o.jsx)(r.li,{children:'"" - Empty strings'}),"\n",(0,o.jsx)(r.li,{children:"[] - Colec\xe7\xf5es vazias"}),"\n",(0,o.jsx)(r.li,{children:"{} - Objectos vazios"}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["Todos os outros valores s\xe3o considerados ",(0,o.jsx)(r.strong,{children:"truthy"}),", incluindo:"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"0 - zero num\xe9rico (inteiro ou n\xe3o)"}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["Em 4D, a avalia\xe7\xe3o ",(0,o.jsx)(r.strong,{children:"truthy"})," e ",(0,o.jsx)(r.strong,{children:"falsy"})," reflecte a ",(0,o.jsx)(r.strong,{children:"usabilidade"})," de um valor, o que significa que um valor truthy existe e pode ser processado pelo c\xf3digo sem gerar erros ou resultados inesperados. The rationale behind this is to provide a convenient way to handle ",(0,o.jsx)(r.em,{children:"undefined"})," and ",(0,o.jsx)(r.em,{children:"null"})," values in objects and collections, so that a reduced number of ",(0,o.jsx)(r.a,{href:"/docs/pt/20/Concepts/control-flow#ifelseend-if",children:"If\u2026 Else"})," statements are necessary to avoid runtime errors."]}),"\n",(0,o.jsxs)(r.p,{children:["Por exemplo, quando se utiliza um ",(0,o.jsx)(r.a,{href:"#short-circuit-or-operator-",children:"operador OR curto-circuito"}),":"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:"$value:=$object.value || $defaultValue\n"})}),"\n",(0,o.jsxs)(r.p,{children:["... obt\xe9m o valor padr\xe3o sempre que ",(0,o.jsx)(r.em,{children:"$object"})," n\xe3o cont\xe9m a propriedade ",(0,o.jsx)(r.code,{children:"value"})," OU quando \xe9 ",(0,o.jsx)(r.em,{children:"null"}),". Assim, este operador verifica a exist\xeancia ou a possibilidade de utiliza\xe7\xe3o do valor em vez de um valor espec\xedfico. Note-se que, como o valor num\xe9rico 0 existe e \xe9 utiliz\xe1vel, n\xe3o \xe9 tratado de forma especial, pelo que \xe9 ",(0,o.jsx)(r.strong,{children:"truthy"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:['Para valores que representam cole\xe7\xf5es, objetos ou cadeias de caracteres, os valores "vazios" s\xe3o considerados como ',(0,o.jsx)(r.strong,{children:"falsy"}),". \xc9 \xfatil quando se pretende atribuir um valor por defeito sempre que se encontra um valor vazio."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:'$phone:=$emp.phone || "n/a"\n'})})]})}function h(e={}){let{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return a},a:function(){return i}});var s=n(667294);let o={},d=s.createContext(o);function i(e){let r=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);