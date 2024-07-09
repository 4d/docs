/*! For license information please see fdb91658.8a42e24e.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11696],{127713:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>t});var s=r(474848),o=r(28453);const d={id:"operators",title:"Operadores"},i=void 0,l={id:"Concepts/operators",title:"Operadores",description:"Um operador \xe9 um s\xedmbolo ou um grupo de s\xedmbolos que \xe9 utilizado para verificar, modificar ou combinar valores. J\xe1 est\xe1 familiarizado com muitos operadores. Por ejemplo, 1 + 2 utiliza el operador de adici\xf3n (o signo m\xe1s) para sumar dos n\xfameros, y el resultado es 3. Los operadores de comparaci\xf3n, como = o >, le permiten comparar dos o m\xe1s valores.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/Concepts/operators.md",sourceDirName:"Concepts",slug:"/Concepts/operators",permalink:"/docs/pt/Concepts/operators",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Foperators.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"operators",title:"Operadores"},sidebar:"docs",previous:{title:"Uma visita r\xe1pida",permalink:"/docs/pt/Concepts/quick-tour"},next:{title:"Tipos de dados",permalink:"/docs/pt/Concepts/data-types"}},a={},t=[{value:"Terminologia",id:"Terminologia",level:2},{value:"Operador de atribui\xe7\xe3o",id:"Operador-de-atribui\xe7\xe3o",level:2},{value:"Operadores b\xe1sicos",id:"Operadores-b\xe1sicos",level:2},{value:"Operadores de atribui\xe7\xe3o compostos",id:"Operadores-de-atribui\xe7\xe3o-compostos",level:2},{value:"Exemplos",id:"Exemplos",level:4},{value:"Operadores curto-circuito",id:"Operadores-curto-circuito",level:2},{value:"Operador em curto-circuito AND (&amp;&amp;)",id:"Operador-em-curto-circuito-AND-",level:3},{value:"Exemplo 1",id:"Exemplo-1",level:4},{value:"Exemplo 2",id:"Exemplo-2",level:4},{value:"Exemplo 3",id:"Exemplo-3",level:4},{value:"Operador em curto-circuito OR (||)",id:"Operador-em-curto-circuito-OR-",level:3},{value:"Exemplo 1",id:"Exemplo-1-1",level:4},{value:"Exemplo 2",id:"Exemplo-2-1",level:4},{value:"Preced\xeancia",id:"Preced\xeancia",level:3},{value:"Operador tern\xe1rio",id:"Operador-tern\xe1rio",level:2},{value:"Sintaxe",id:"Sintaxe",level:3},{value:"Exemplos",id:"Exemplos-1",level:3},{value:"Um exemplo simple",id:"Um-exemplo-simple",level:4},{value:"Tratamento de dados de uma tabela",id:"Tratamento-de-dados-de-uma-tabela",level:4},{value:"Truthy e falsy",id:"Truthy-e-falsy",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Um operador \xe9 um s\xedmbolo ou um grupo de s\xedmbolos que \xe9 utilizado para verificar, modificar ou combinar valores. J\xe1 est\xe1 familiarizado com muitos operadores. Por ejemplo, ",(0,s.jsx)(n.code,{children:"1 + 2"})," utiliza el operador de adici\xf3n (o signo m\xe1s) para sumar dos n\xfameros, y el resultado es 3. Los operadores de comparaci\xf3n, como = o >, le permiten comparar dos o m\xe1s valores."]}),"\n",(0,s.jsxs)(n.p,{children:["A linguagem 4D suporta os operadores que talvez j\xe1 conhe\xe7a de outras linguagens como C ou JavaScript. Sin embargo, el operador de asignaci\xf3n es ",(0,s.jsx)(n.code,{children:":="}),' para evitar que se utilice de forma err\xf3nea cuando el operador "igual a" (',(0,s.jsx)(n.code,{children:"="}),") est\xe1 planeado. ",(0,s.jsx)(n.a,{href:"#basic-operators",children:"Basic operators"})," such as arithmetic operators (+, -, *, /, %...) and comparison operators (=, >, >=...) can be used with numbers, but also with boolean, text, date, time, pointer, or picture data types. Al igual que JavaScript, el lenguaje 4D soporta el concepto de valores ",(0,s.jsx)(n.a,{href:"#truthy-and-falsy",children:"truthy y falsy"}),", que se utilizan en ",(0,s.jsx)(n.a,{href:"#short-circuit-operators",children:"los operadores de corto-cicrcuit"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"Terminologia",children:"Terminologia"}),"\n",(0,s.jsxs)(n.p,{children:["El lenguaje 4D soporta los operadores ",(0,s.jsx)(n.strong,{children:"binarios"})," y ",(0,s.jsx)(n.strong,{children:"ternarios"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["los operadores binarios operan en dos objetivos (como ",(0,s.jsx)(n.code,{children:"2 + 3"}),") y aparecen entre sus dos objetivos."]}),"\n",(0,s.jsxs)(n.li,{children:["os operadores tern\xe1rios operam em tr\xeas objectivos. Like C, 4D has only one ternary operator, the ",(0,s.jsx)(n.a,{href:"#ternary-operator",children:"ternary conditional operator"})," (",(0,s.jsx)(n.code,{children:"a ? b : c"}),")."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Os valores que os operadores afectam s\xe3o os operandos. En la expresi\xf3n ",(0,s.jsx)(n.code,{children:"1 + 2"}),", el s\xedmbolo + es un operador binario y sus dos operandos son los valores 1 y 2."]}),"\n",(0,s.jsx)(n.h2,{id:"Operador-de-atribui\xe7\xe3o",children:"Operador de atribui\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["El ",(0,s.jsx)(n.strong,{children:"operador de asignaci\xf3n"})," (",(0,s.jsx)(n.code,{children:"a:=b"}),") inicializa o actualiza el valor de ",(0,s.jsx)(n.code,{children:"a"})," con el valor de ",(0,s.jsx)(n.code,{children:"b"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'$myNumber:=3 //assigns 3 to MyNumber variable  \n$myDate:=!2018/01/21! //assigns a date literal\n$myLength:=Length("Acme") //assigns the result of the command (4) to $myLength\n$col:=New collection //$col is initialized with an empty collection\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["NO confunda el operador de asignaci\xf3n ",(0,s.jsx)(n.code,{children:":="})," con el operador de comparaci\xf3n de igualdad ",(0,s.jsx)(n.code,{children:"="}),". Se ha elegido deliberadamente un operador de asignaci\xf3n diferente (y no ",(0,s.jsx)(n.code,{children:"="}),") para evitar los problemas y la confusi\xf3n que suelen producirse con == o === en otros lenguajes de programaci\xf3n. Esses erros s\xe3o geralmente dif\xedceis de reconhecer pelo compilador e geram problemas trabalhosos."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"Operadores-b\xe1sicos",children:"Operadores b\xe1sicos"}),"\n",(0,s.jsxs)(n.p,{children:["Los resultados del operador dependen de los ",(0,s.jsx)(n.strong,{children:"tipos de datos"})," a los que se aplican. 4D soporta diferentes operadores en tipos de datos escalares. S\xe3o descritos com os tipos de dados, nas sec\xe7\xf5es seguintes:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/Concepts/boolean#logical-operators",children:(0,s.jsx)(n.strong,{children:"Logical operators"})})," (on ",(0,s.jsx)(n.strong,{children:"boolean"})," expressions)"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/pt/Concepts/date#date-operators",children:(0,s.jsx)(n.strong,{children:"Date operators"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/pt/Concepts/time#time-operators",children:(0,s.jsx)(n.strong,{children:"Time operators"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/pt/Concepts/number#number-operators",children:(0,s.jsx)(n.strong,{children:"Number operators"})})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/Concepts/number#bitwise-operators",children:(0,s.jsx)(n.strong,{children:"Bitwise operators"})})," (on ",(0,s.jsx)(n.strong,{children:"long integer"})," expressions)"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/pt/Concepts/picture#picture-operators",children:(0,s.jsx)(n.strong,{children:"Picture operators"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/pt/Concepts/pointer#pointer-operators",children:(0,s.jsx)(n.strong,{children:"Pointer operators"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/pt/Concepts/string#string-operators",children:(0,s.jsx)(n.strong,{children:"String operators"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/pt/Concepts/null-undefined#null-operators",children:(0,s.jsx)(n.strong,{children:"Null operators"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/pt/Concepts/null-undefined#undefined-operators",children:(0,s.jsx)(n.strong,{children:"Undefined operators"})})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"Operadores-de-atribui\xe7\xe3o-compostos",children:"Operadores de atribui\xe7\xe3o compostos"}),"\n",(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Release"}),(0,s.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"19 R4"}),(0,s.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["4D ofrece ",(0,s.jsx)(n.strong,{children:"operadores de asignaci\xf3n compuestos"})," que combinan la asignaci\xf3n con otra operaci\xf3n. Um exemplo \xe9 o operador de atribui\xe7\xe3o de adi\xe7\xe3o (",(0,s.jsx)(n.code,{children:"+="}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"$a:=1 \n$a+=2 // $a=3\n"})}),"\n",(0,s.jsx)(n.p,{children:"S\xe3o suportados os seguintes operadores de atribui\xe7\xe3o compostos:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Operador"}),(0,s.jsx)(n.th,{children:"Sintaxe"}),(0,s.jsx)(n.th,{children:"Atribui\xe7\xf5es"}),(0,s.jsx)(n.th,{children:"Exemplo"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Adi\xe7\xe3o"}),(0,s.jsx)(n.td,{children:"Text += Text"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'$t+=" World"  //$t:=$t+" World"'})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Number += Number"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$n+=5 //$n:=$n+5"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Date += Number"}),(0,s.jsx)(n.td,{children:"Date"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$d+=5 //$d:=$d+5"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Time += Time"}),(0,s.jsx)(n.td,{children:"Hora"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$t1+=$t2 //$t1:=$t1+$t2"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Time += Number"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$t1+=5 //$t1:=$t1+5"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Picture += Picture"}),(0,s.jsx)(n.td,{children:"Imagem"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$p1+=$p2 //$p1:=$p1+$p2 (add $p2 to the right of $p1)"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Picture += Number"}),(0,s.jsx)(n.td,{children:"Imagem"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$p1+=5 //$p1:=$p1+5 (move $p1 horizontally 5 pixels to the right)"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Subtra\xe7\xe3o"}),(0,s.jsx)(n.td,{children:"Number -= Number"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$n-=5 //$n:=$n-5"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Date -= Number"}),(0,s.jsx)(n.td,{children:"Date"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$d-=5 //$d:=$d-5"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Time -= Time"}),(0,s.jsx)(n.td,{children:"Hora"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$t1-=$t2 //$t1:=$t1-$t2"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Time -= Number"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$t1-=5 //$t1:=$t1-5"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Picture -= Number"}),(0,s.jsx)(n.td,{children:"Imagem"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$p1-=5 //$p1:=$p1-5 (mover horizontalmente $p1 5 pixels para a esquerda)"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Divis\xe3o"}),(0,s.jsx)(n.td,{children:"Number /= Number"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$n/=5 //$n:=$n/5"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Time /= Time"}),(0,s.jsx)(n.td,{children:"Hora"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$t1/=$t2 //$t1:=$t1/$t2"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Time /= Number"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$t1/=5 //$t1:=$t1/5"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Picture /= Picture"}),(0,s.jsx)(n.td,{children:"Imagem"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$p1/=$p2 //$p1:=$p1/$p2 (adicione $p2 ao fundo de $p1)"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Picture /= Number"}),(0,s.jsx)(n.td,{children:"Imagem"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$p1/=5 //$p1:=$p1/5 (mover $p1 verticalmente 5 pixels)"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Multiplica\xe7\xe3o"}),(0,s.jsx)(n.td,{children:"Text *= Number"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'$t*="abc"  //$t:=$t*"abc"'})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Number *= Number"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$n*=5 //$n:=$n*5"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Time *= Time"}),(0,s.jsx)(n.td,{children:"Hora"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$t1*=$t2 //$t1:=$t1*$t2"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Time *= Number"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$t1*=5 //$t1:=$t1*5"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Picture *= Number"}),(0,s.jsx)(n.td,{children:"Imagem"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"$p1*=5 //$p1:=$p1*5 (redimensionar $p1 por 5)"})})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Estos operadores se aplican a todas las ",(0,s.jsx)(n.a,{href:"/docs/pt/Concepts/quick-tour#assignable-vs-non-assignable-expressions",children:"expresiones asignables"})," (excepto de las im\xe1genes como propiedades de objeto o elementos de colecci\xf3n)."]}),"\n",(0,s.jsxs)(n.p,{children:['La operaci\xf3n "source ',(0,s.jsx)(n.code,{children:"operator"}),' value" no es estrictamente equivalente a "source := source ',(0,s.jsx)(n.code,{children:"operator"}),' value" porque la expresi\xf3n que designa la fuente (variable, campo, propiedad del objeto, elemento de colecci\xf3n) s\xf3lo se eval\xfaa una vez. Por ejemplo, en una expresi\xf3n tal como ',(0,s.jsx)(n.code,{children:"getPointer()->+=1"})," el m\xe9todo ",(0,s.jsx)(n.code,{children:"getPointer"})," es llamado s\xf3lo una vez."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/Concepts/string#character-reference-symbols",children:"La indexaci\xf3n de caracteres en el texto"})," y ",(0,s.jsx)(n.a,{href:"/docs/pt/Concepts/blob#accessing-a-scalar-blobs-bytes",children:"la indexaci\xf3n de bytes en el blob"})," no soporta a estos operadores."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"Exemplos",children:"Exemplos"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'// Addition\n$x:=2\n$x+=5 //$x=7\n\n$t:="Hello" \n$t+=" World" //$t="Hello World" \n\n$d:=!2000-11-10!\n$d+=10 //$d=!2000-11-20!\n\n// Subtraction\n$x1:=10\n$x1-=5 //$x1=5\n\n$d1:=!2000-11-10!\n$d1-=10 // $d1=!2000-10-31!\n\n// Division\n$x3:=10\n$x3/=2 // $x3=5\n\n\n// Multiplication\n$x2:=10\n$x2*=5 // $x2=10\n\n$t2:="Hello" \n$t2*=2 // $t2="HelloHello"\n\n'})}),"\n",(0,s.jsx)(n.h2,{id:"Operadores-curto-circuito",children:"Operadores curto-circuito"}),"\n",(0,s.jsxs)(n.p,{children:["Los operadores ",(0,s.jsx)(n.strong,{children:"&&"})," y ",(0,s.jsx)(n.strong,{children:"||"})," son los ",(0,s.jsx)(n.strong,{children:"operadores en cortocircuito"}),". Um operador de curto-circuito \xe9 aquele que n\xe3o avalia necessariamente todos os seus operandos."]}),"\n",(0,s.jsxs)(n.p,{children:["The difference with the single ",(0,s.jsxs)(n.a,{href:"/docs/pt/Concepts/boolean#logical-operators",children:[(0,s.jsx)(n.strong,{children:"&"})," and ",(0,s.jsx)(n.strong,{children:"|"})," boolean operators"]})," is that the short-circuit operators ",(0,s.jsx)(n.strong,{children:"&&"})," and ",(0,s.jsx)(n.strong,{children:"||"})," don't return a boolean value. Eval\xfaan las expresiones como ",(0,s.jsx)(n.a,{href:"#truthy-and-falsy",children:"truthy o falsy"}),", y luego devuelven una de las expresiones."]}),"\n",(0,s.jsx)(n.h3,{id:"Operador-em-curto-circuito-AND-",children:"Operador em curto-circuito AND (&&)"}),"\n",(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Release"}),(0,s.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"19 R4"}),(0,s.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"A regra \xe9 a seguinte:"}),"\n",(0,s.jsxs)(n.p,{children:["Dado ",(0,s.jsx)(n.code,{children:"Expr1 && Expr2"}),":"]}),"\n",(0,s.jsxs)(n.p,{children:["El operador en cortocircuito AND eval\xfaa los operandos de izquierda a derecha, devolviendo inmediatamente el valor del primer operando falso que encuentra; si todos los valores son ",(0,s.jsx)(n.a,{href:"#truthy-and-falsy",children:"truthy"}),", se devuelve el valor del \xfaltimo operando."]}),"\n",(0,s.jsxs)(n.p,{children:["La siguiente tabla resume los diferentes casos para el operador ",(0,s.jsx)(n.strong,{children:"&&"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Expr1"}),(0,s.jsx)(n.th,{children:"Expr2"}),(0,s.jsx)(n.th,{children:"Valor devolvido"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"truthy"}),(0,s.jsx)(n.td,{children:"truthy"}),(0,s.jsx)(n.td,{children:"Expr2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"truthy"}),(0,s.jsx)(n.td,{children:"falsy"}),(0,s.jsx)(n.td,{children:"Expr2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"falsy"}),(0,s.jsx)(n.td,{children:"truthy"}),(0,s.jsx)(n.td,{children:"Expr1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"falsy"}),(0,s.jsx)(n.td,{children:"falsy"}),(0,s.jsx)(n.td,{children:"Expr1"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"Exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $v : Variant\n\n$v:= "Hello" && "World" //"World"\n$v:=False && 0 // False\n$v:=0 && False // False\n$v:=5 && !00-00-00! // 00/00/00\n$v := 5 && 10 && "hello" //"hello"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"Exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Digamos que tem uma loja online e que alguns produtos t\xeam uma taxa de imposto aplicada e outros n\xe3o."}),"\n",(0,s.jsx)(n.p,{children:"Para calcular o imposto, multiplica-se o pre\xe7o pela taxa de imposto, que pode n\xe3o ter sido especificada."}),"\n",(0,s.jsx)(n.p,{children:"Portanto, pode escrever isto:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"var $tax : Variant\n\n$tax:=$item.taxRate && ($item.price*$item.taxRate)\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"$tax"})," sera NULL si taxRate es NULL (o indefinido), de lo contrario almacenar\xe1 el resultado del c\xe1lculo."]}),"\n",(0,s.jsx)(n.h4,{id:"Exemplo-3",children:"Exemplo 3"}),"\n",(0,s.jsx)(n.p,{children:"Os operadores de curto-circuito s\xe3o \xfateis em provas como:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"If(($myObject#Null) && ($myObject.value>10))\n\t//code\nEnd if\n"})}),"\n",(0,s.jsx)(n.p,{children:"Se $myObject for nulo, o segundo argumento n\xe3o \xe9 executado e, por conseguinte, n\xe3o \xe9 lan\xe7ado qualquer erro."}),"\n",(0,s.jsx)(n.h3,{id:"Operador-em-curto-circuito-OR-",children:"Operador em curto-circuito OR (||)"}),"\n",(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Release"}),(0,s.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"19 R4"}),(0,s.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:'O operador || devolve o valor de um dos operandos especificados. A express\xe3o \xe9 avaliada da esquerda para a direita e testada para uma poss\xedvel avalia\xe7\xe3o de "curto-circuito" utilizando a seguinte regra:'}),"\n",(0,s.jsxs)(n.p,{children:["Dado ",(0,s.jsx)(n.code,{children:"Expr1 || Expr2"}),":"]}),"\n",(0,s.jsxs)(n.p,{children:["Si Expr1 es ",(0,s.jsx)(n.a,{href:"#truthy-and-falsy",children:"truthy"}),", Expr2 no se eval\xfaa y el c\xe1lculo devuelve Expr1."]}),"\n",(0,s.jsxs)(n.p,{children:["Si Expr1 es ",(0,s.jsx)(n.a,{href:"#truthy-and-falsy",children:"falsy"}),", el c\xe1lculo devuelve Expr2."]}),"\n",(0,s.jsxs)(n.p,{children:["La siguiente tabla resume los diferentes casos y el valor devuelto por el operador ",(0,s.jsx)(n.strong,{children:"||"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Expr1"}),(0,s.jsx)(n.th,{children:"Expr2"}),(0,s.jsx)(n.th,{children:"Valor devolvido"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"truthy"}),(0,s.jsx)(n.td,{children:"truthy"}),(0,s.jsx)(n.td,{children:"Expr1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"truthy"}),(0,s.jsx)(n.td,{children:"falsy"}),(0,s.jsx)(n.td,{children:"Expr1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"falsy"}),(0,s.jsx)(n.td,{children:"truthy"}),(0,s.jsx)(n.td,{children:"Expr2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"falsy"}),(0,s.jsx)(n.td,{children:"falsy"}),(0,s.jsx)(n.td,{children:"Expr2"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"Exemplo-1-1",children:"Exemplo 1"}),"\n",(0,s.jsxs)(n.p,{children:["Digamos que tem uma tabela chamada Employee. Alguns empregados introduziram um n\xfamero de telefone e outros n\xe3o. Esto significa que ",(0,s.jsx)(n.code,{children:"$emp.phone"})," podr\xeda ser NULL, y no se puede asignar NULL a una variable texto. Mas pode escrever o seguinte:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $phone : Text\n\n$phone:=$emp.phone || "n/a"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["En este caso, ",(0,s.jsx)(n.code,{children:"$phone"}),' almacenar\xe1 un n\xfamero de tel\xe9fono o la cadena "n/a".']}),"\n",(0,s.jsx)(n.h4,{id:"Exemplo-2-1",children:"Exemplo 2"}),"\n",(0,s.jsxs)(n.p,{children:["Dada una tabla llamada Person con un campo ",(0,s.jsx)(n.em,{children:"name"}),", as\xed como un campo ",(0,s.jsx)(n.em,{children:"maiden name"})," para las mujeres casadas."]}),"\n",(0,s.jsx)(n.p,{children:"O exemplo seguinte verifica se existe um nome de solteira e armazena-o numa vari\xe1vel; caso contr\xe1rio, armazena simplesmente o nome da pessoa:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"var $name: Text\n\n$name:=$person.maidenName || $person.name\n"})}),"\n",(0,s.jsx)(n.h3,{id:"Preced\xeancia",children:"Preced\xeancia"}),"\n",(0,s.jsxs)(n.p,{children:["Los operadores ",(0,s.jsx)(n.code,{children:"&&"})," y ",(0,s.jsx)(n.code,{children:"||"})," tienen la misma prioridad que los operadores l\xf3gicos ",(0,s.jsx)(n.code,{children:"&"})," y ",(0,s.jsx)(n.code,{children:"|"}),", y se eval\xfaan de izquierda a derecha."]}),"\n",(0,s.jsxs)(n.p,{children:["Esto significa que ",(0,s.jsx)(n.code,{children:"a || b && c"})," se eval\xfaa como ",(0,s.jsx)(n.code,{children:"(a || b) && c"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"Operador-tern\xe1rio",children:"Operador tern\xe1rio"}),"\n",(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Release"}),(0,s.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"19 R4"}),(0,s.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["O operador condicional tern\xe1rio permite-lhe escrever express\xf5es condicionais de uma linha. Por ejemplo, puede reemplazar una secuencia completa de instrucciones ",(0,s.jsx)(n.a,{href:"/docs/pt/Concepts/control-flow#ifelseend-if",children:"If\u2026Else"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Aceita tr\xeas operandos na seguinte ordem:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"uma condi\xe7\xe3o seguida de um ponto de interroga\xe7\xe3o (?)"}),"\n",(0,s.jsxs)(n.li,{children:["una expresi\xf3n a ejecutar si la condici\xf3n es ",(0,s.jsx)(n.a,{href:"#truthy-and-falsy",children:"truthy"}),", seguida de dos puntos (:)"]}),"\n",(0,s.jsxs)(n.li,{children:["una expresi\xf3n a ejecutar si la condici\xf3n es ",(0,s.jsx)(n.a,{href:"#truthy-and-falsy",children:"falsy"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"Sintaxe",children:"Sintaxe"}),"\n",(0,s.jsx)(n.p,{children:"A sintaxe \xe9 a seguinte:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"condition ? exprIfTruthy : exprIfFalsy"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Dado que la ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4Dv19/4D/19.5/Using-tokens-in-formulas.300-6136716.en.html",children:"sintaxis con tokens"})," utiliza dos puntos, se recomienda insertar un espacio despu\xe9s de los dos puntos ",(0,s.jsx)(n.code,{children:":"})," o encerrar los tokens utilizando par\xe9ntesis para evitar cu"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"Exemplos-1",children:"Exemplos"}),"\n",(0,s.jsx)(n.h4,{id:"Um-exemplo-simple",children:"Um exemplo simple"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $age : Integer\nvar $beverage : Text\n\n$age:=26\n$beverage:=($age>=21) ? "Beer" : "Juice"\n\nALERT($beverage) // "Beer"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"Tratamento-de-dados-de-uma-tabela",children:"Tratamento de dados de uma tabela"}),"\n",(0,s.jsx)(n.p,{children:"Este exemplo armazena o nome completo de uma pessoa numa vari\xe1vel e trata do caso em que n\xe3o foi especificado o primeiro nome ou o \xfaltimo nome:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $fullname : Text\n\n// If one of the names is missing, store the one that exists, otherwise store an empty string\n$fullname:=($person.firstname && $person.lastname) ? ($person.firstname+" "+$person.lastname) : ($person.lastname || $person.firstname) || ""\n'})}),"\n",(0,s.jsx)(n.h2,{id:"Truthy-e-falsy",children:"Truthy e falsy"}),"\n",(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Release"}),(0,s.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"19 R4"}),(0,s.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Adem\xe1s de un tipo, cada valor tambi\xe9n tiene un valor booleano inherente, conocido generalmente como ",(0,s.jsx)(n.strong,{children:"truthy"})," o ",(0,s.jsx)(n.strong,{children:"falsy<"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Los valores ",(0,s.jsx)(n.strong,{children:"truthy"})," y ",(0,s.jsx)(n.strong,{children:"falsy"})," s\xf3lo son evaluados por los operadores ",(0,s.jsx)(n.a,{href:"#short-circuit-operators",children:"en cortocircuito"})," y ",(0,s.jsx)(n.a,{href:"#ternary-operator",children:"ternarios"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Los siguientes valores son ",(0,s.jsx)(n.strong,{children:"falsy"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"false"}),"\n",(0,s.jsx)(n.li,{children:"Null"}),"\n",(0,s.jsx)(n.li,{children:"indefinido"}),"\n",(0,s.jsx)(n.li,{children:"Null object"}),"\n",(0,s.jsx)(n.li,{children:"Null collection"}),"\n",(0,s.jsx)(n.li,{children:"Null pointer"}),"\n",(0,s.jsx)(n.li,{children:"Null picture"}),"\n",(0,s.jsx)(n.li,{children:"Null date !00-00-00!"}),"\n",(0,s.jsx)(n.li,{children:'"" - Empty strings'}),"\n",(0,s.jsx)(n.li,{children:"[] - Colec\xe7\xf5es vazias"}),"\n",(0,s.jsx)(n.li,{children:"{} - Objectos vazios"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Todos los dem\xe1s valores se consideran ",(0,s.jsx)(n.strong,{children:"truthy"}),", incluyendo:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"0 - zero num\xe9rico (inteiro ou n\xe3o)"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["En 4D, la evaluaci\xf3n ",(0,s.jsx)(n.strong,{children:"truthy"})," y ",(0,s.jsx)(n.strong,{children:"falsy"})," refleja la ",(0,s.jsx)(n.strong,{children:"usabilidad"})," de un valor, lo que significa que un valor truthy existe y puede ser procesado por el c\xf3digo sin generar errores o resultados inesperados. La raz\xf3n de ser de esto es ofrecer una forma conveniente de manejar valores ",(0,s.jsx)(n.em,{children:"undefined"})," y ",(0,s.jsx)(n.em,{children:"null"})," en objetos y colecciones, de modo que un n\xfamero reducido de instrucciones ",(0,s.jsx)(n.a,{href:"/docs/pt/Concepts/control-flow#ifelseend-if",children:"If\u2026Else"})," sean necesarias para evitar errores de ejecu"]}),"\n",(0,s.jsxs)(n.p,{children:["Por ejemplo, cuando se utiliza un operador en ",(0,s.jsx)(n.a,{href:"#short-circuit-or-operator-",children:"cortocircuito OR"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"$value:=$object.value || $defaultValue\n"})}),"\n",(0,s.jsxs)(n.p,{children:["... you get the default value whenever ",(0,s.jsx)(n.em,{children:"$object"})," does not contain the ",(0,s.jsx)(n.code,{children:"value"})," property OR when it is ",(0,s.jsx)(n.em,{children:"null"}),". Assim, este operador verifica a exist\xeancia ou a possibilidade de utiliza\xe7\xe3o do valor em vez de um valor espec\xedfico. Obs\xe9rvese que como el valor num\xe9rico 0 existe y es utilizable, no se le da un tratamiento especial, por lo que es ",(0,s.jsx)(n.strong,{children:"truthy"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:['En cuanto a los valores que representan las colecciones, los objetos o las cadenas, los valores "vac\xedos" se consideran como ',(0,s.jsx)(n.strong,{children:"falsy"}),". \xc9 \xfatil quando se pretende atribuir um valor por defeito sempre que se encontra um valor vazio."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'$phone:=$emp.phone || "n/a"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},221020:(e,n,r)=>{var s=r(296540),o=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function t(e,n,r){var s,d={},t=null,c=null;for(s in void 0!==r&&(t=""+r),void 0!==n.key&&(t=""+n.key),void 0!==n.ref&&(c=n.ref),n)i.call(n,s)&&!a.hasOwnProperty(s)&&(d[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===d[s]&&(d[s]=n[s]);return{$$typeof:o,type:e,key:t,ref:c,props:d,_owner:l.current}}n.Fragment=d,n.jsx=t,n.jsxs=t},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var s=r(296540);const o={},d=s.createContext(o);function i(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);