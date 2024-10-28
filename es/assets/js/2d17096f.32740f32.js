"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58804],{240566:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var r=s(474848),o=s(28453);const d={id:"operators",title:"Operadores"},i=void 0,l={id:"Concepts/operators",title:"Operadores",description:"Un operador es un s\xedmbolo o un grupo de s\xedmbolos que utiliza para verificar, modificar o combinar los valores. Usted ya conoce a la mayor\xeda de los operadores. Por ejemplo, 1 + 2 utiliza el operador de adici\xf3n (o signo m\xe1s) para sumar dos n\xfameros, y el resultado es 3. Los operadores de comparaci\xf3n, como = o >, le permiten comparar dos o m\xe1s valores.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/Concepts/operators.md",sourceDirName:"Concepts",slug:"/Concepts/operators",permalink:"/docs/es/20-R6/Concepts/operators",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Foperators.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"operators",title:"Operadores"},sidebar:"docs",previous:{title:"Un recorrido r\xe1pido",permalink:"/docs/es/20-R6/Concepts/quick-tour"},next:{title:"Tipos de datos",permalink:"/docs/es/20-R6/Concepts/data-types"}},a={},c=[{value:"Terminolog\xeda",id:"terminolog\xeda",level:2},{value:"Asignaci\xf3n",id:"asignaci\xf3n",level:2},{value:"Operadores b\xe1sicos",id:"operadores-b\xe1sicos",level:2},{value:"Operadores de asignaci\xf3n compuestos",id:"operadores-de-asignaci\xf3n-compuestos",level:2},{value:"Ejemplos",id:"ejemplos",level:4},{value:"Operadores en cortocircuito",id:"operadores-en-cortocircuito",level:2},{value:"Operador en corto-circuito AND (&amp;&amp;)",id:"operador-en-corto-circuito-and-",level:3},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Operador en corto-circuito OR (||)",id:"operador-en-corto-circuito-or-",level:3},{value:"Ejemplo 1",id:"ejemplo-1-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2-1",level:4},{value:"Prioridad",id:"prioridad",level:3},{value:"Operador ternario",id:"operador-ternario",level:2},{value:"Sintaxis",id:"sintaxis",level:3},{value:"Ejemplos",id:"ejemplos-1",level:3},{value:"Un ejemplo sencillo",id:"un-ejemplo-sencillo",level:4},{value:"Gesti\xf3n de los datos de una tabla",id:"gesti\xf3n-de-los-datos-de-una-tabla",level:4},{value:"Truthy y falsy",id:"truthy-y-falsy",level:2}];function t(e){const n={a:"a",blockquote:"blockquote",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Un operador es un s\xedmbolo o un grupo de s\xedmbolos que utiliza para verificar, modificar o combinar los valores. Usted ya conoce a la mayor\xeda de los operadores. Por ejemplo, ",(0,r.jsx)(n.code,{children:"1 + 2"})," utiliza el operador de adici\xf3n (o signo m\xe1s) para sumar dos n\xfameros, y el resultado es 3. Los operadores de comparaci\xf3n, como = o >, le permiten comparar dos o m\xe1s valores."]}),"\n",(0,r.jsxs)(n.p,{children:["El lenguaje 4D es compatible con los operadores que ya conoce de otros lenguajes como C o JavaScript. Sin embargo, el operador de asignaci\xf3n es ",(0,r.jsx)(n.code,{children:":="}),' para evitar que se utilice de forma err\xf3nea cuando el operador "igual a" (',(0,r.jsx)(n.code,{children:"="}),") est\xe1 planeado. Los ",(0,r.jsx)(n.a,{href:"#operadores-basicos",children:"operadores b\xe1sicos"})," tales como los operadores aritm\xe9ticos (+, -, *, /, %...) y los operadores de comparaci\xf3n (=, >, >=...) puede utilizarse con datos de tipo num\xe9rico, pero tambi\xe9n booleanos, texto, fecha, hora, puntero o imagen. Al igual que JavaScript, el lenguaje 4D soporta el concepto de valores ",(0,r.jsx)(n.a,{href:"#truthy-and-falsy",children:"truthy y falsy"}),", que se utilizan en ",(0,r.jsx)(n.a,{href:"#short-circuit-operators",children:"los operadores de corto-cicrcuit"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"terminolog\xeda",children:"Terminolog\xeda"}),"\n",(0,r.jsxs)(n.p,{children:["El lenguaje 4D soporta los operadores ",(0,r.jsx)(n.strong,{children:"binarios"})," y ",(0,r.jsx)(n.strong,{children:"ternarios"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["los operadores binarios operan en dos objetivos (como ",(0,r.jsx)(n.code,{children:"2 + 3"}),") y aparecen entre sus dos objetivos."]}),"\n",(0,r.jsxs)(n.li,{children:["los operadores ternarios operan en tres objetivos. Like C, 4D has only one ternary operator, the ",(0,r.jsx)(n.a,{href:"#ternary-operator",children:"ternary conditional operator"})," (",(0,r.jsx)(n.code,{children:"a ? b : c"}),")."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Los valores que los operadores afectan son los operandos. En la expresi\xf3n ",(0,r.jsx)(n.code,{children:"1 + 2"}),", el s\xedmbolo + es un operador binario y sus dos operandos son los valores 1 y 2."]}),"\n",(0,r.jsx)(n.h2,{id:"asignaci\xf3n",children:"Asignaci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El ",(0,r.jsx)(n.strong,{children:"operador de asignaci\xf3n"})," (",(0,r.jsx)(n.code,{children:"a:=b"}),") inicializa o actualiza el valor de ",(0,r.jsx)(n.code,{children:"a"})," con el valor de ",(0,r.jsx)(n.code,{children:"b"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'$myNumber:=3 //asigna 3 a la variable MyNumber\n$myDate:=!2018/01/21! //asigna un literal de fecha\n$myLength:=Length("Acme") //asigna el resultado del comando (4) a $myLength\n$col:=New collection //$col se inicializa con una colecci\xf3n vac\xeda\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["NO confunda el operador de asignaci\xf3n ",(0,r.jsx)(n.code,{children:":="})," con el operador de comparaci\xf3n de igualdad ",(0,r.jsx)(n.code,{children:"="}),". Se ha elegido deliberadamente un operador de asignaci\xf3n diferente (y no ",(0,r.jsx)(n.code,{children:"="}),") para evitar los problemas y la confusi\xf3n que suelen producirse con == o === en otros lenguajes de programaci\xf3n. Estos errores son a menudo dif\xedciles de reconocer por el compilador y conducen a una soluci\xf3n de problemas que requiere mucho tiempo."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"operadores-b\xe1sicos",children:"Operadores b\xe1sicos"}),"\n",(0,r.jsxs)(n.p,{children:["Los resultados del operador dependen de los ",(0,r.jsx)(n.strong,{children:"tipos de datos"})," a los que se aplican. 4D soporta diferentes operadores en tipos de datos escalares. Se describen con los tipos de datos, en las siguientes secciones:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R6/Concepts/boolean#operadores-logicos",children:(0,r.jsx)(n.strong,{children:"Operadores l\xf3gicos"})})," (en expresiones ",(0,r.jsx)(n.strong,{children:"booleanas"}),")"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/es/20-R6/Concepts/date#operadores-de-fechas",children:(0,r.jsx)(n.strong,{children:"Operadores de fechas"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/es/20-R6/Concepts/time#operadores-de-tiempo",children:(0,r.jsx)(n.strong,{children:"Operadores de tiempo"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/es/20-R6/Concepts/number#operadores-numericos",children:(0,r.jsx)(n.strong,{children:"Operadores de n\xfameros"})})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R6/Concepts/number#operadores--de-bits",children:(0,r.jsx)(n.strong,{children:"Operadores de bits"})})," (en expresiones de tipo ",(0,r.jsx)(n.strong,{children:"entero largo"}),")"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/es/20-R6/Concepts/picture#operadores-de-imagenes",children:(0,r.jsx)(n.strong,{children:"Operadores de im\xe1genes"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/es/20-R6/Concepts/pointer#operadores-de-punteros",children:(0,r.jsx)(n.strong,{children:"Operadores de punteros"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/es/20-R6/Concepts/string#operadores-de-cadenas",children:(0,r.jsx)(n.strong,{children:"Operadores de cadenas"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/es/20-R6/Concepts/object#operadores-en-los-objetos",children:(0,r.jsx)(n.strong,{children:"Operadores en las referencias de objetos"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/es/20-R6/Concepts/collection#collection-operators",children:(0,r.jsx)(n.strong,{children:"Operadores de referencia de colecci\xf3n"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/es/20-R6/Concepts/null-undefined#operadores-null",children:(0,r.jsx)(n.strong,{children:"Operadores null"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/es/20-R6/Concepts/null-undefined#operadores-undefined",children:(0,r.jsx)(n.strong,{children:"Operadores Undefined"})})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"operadores-de-asignaci\xf3n-compuestos",children:"Operadores de asignaci\xf3n compuestos"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R4"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["4D ofrece ",(0,r.jsx)(n.strong,{children:"operadores de asignaci\xf3n compuestos"})," que combinan la asignaci\xf3n con otra operaci\xf3n. Un ejemplo es el operador de asignaci\xf3n adicional (",(0,r.jsx)(n.code,{children:"+="}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"$a:=1 \n$a+=2 // $a=3\n"})}),"\n",(0,r.jsx)(n.p,{children:"Se admiten los siguientes operadores de asignaci\xf3n compuestos:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Operador"}),(0,r.jsx)(n.th,{children:"Sintaxis"}),(0,r.jsx)(n.th,{children:"Asigna"}),(0,r.jsx)(n.th,{children:"Ejemplo"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Adici\xf3n"}),(0,r.jsx)(n.td,{children:"Text += Text"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'$t+=" World"  //$t:=$t+" World"'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Number += Number"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"$n+=5 //$n:=$n+5"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Date += Number"}),(0,r.jsx)(n.td,{children:"Fecha"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"$d+=5 //$d:=$d+5"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Time += Time"}),(0,r.jsx)(n.td,{children:"Hora"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"$t1+=$t2 //$t1:=$t1+$t2"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Time += Number"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"$t1+=5 //$t1:=$t1+5"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Picture += Picture"}),(0,r.jsx)(n.td,{children:"Picture"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"$p1+=$p2 //$p1:=$p1+$p2 (add $p2 to the right of $p1)"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Picture += Number"}),(0,r.jsx)(n.td,{children:"Picture"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"$p1+=5 //$p1:=$p1+5 (move $p1 horizontally 5 pixels to the right)"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resta"}),(0,r.jsx)(n.td,{children:"Number -= Number"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"$n-=5 //$n:=$n-5"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Date -= Number"}),(0,r.jsx)(n.td,{children:"Fecha"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"$d-=5 //$d:=$d-5"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Time -= Time"}),(0,r.jsx)(n.td,{children:"Hora"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"$t1-=$t2 //$t1:=$t1-$t2"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Time -= Number"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"$t1-=5 //$t1:=$t1-5"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Picture -= Number"}),(0,r.jsx)(n.td,{children:"Picture"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"$p1-=5 //$p1:=$p1-5 (mover horizontalemente $p1 de 5 p\xedxeles a la izquierda)"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Divisi\xf3n"}),(0,r.jsx)(n.td,{children:"Number /= Number"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"$n/=5 //$n:=$n/5"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Time /= Time"}),(0,r.jsx)(n.td,{children:"Hora"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"$t1/=$t2 //$t1:=$t1/$t2"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Time /= Number"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"$t1/=5 //$t1:=$t1/5"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Picture /= Picture"}),(0,r.jsx)(n.td,{children:"Picture"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"$p1/=$p2 //$p1:=$p1/$p2 (a\xf1adir $p2 debajo de $p1)"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Picture /= Number"}),(0,r.jsx)(n.td,{children:"Picture"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"$p1/=5 //$p1:=$p1/5 (desplazar verticalmente $p1 de 5 p\xedxeles)"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Multiplicaci\xf3n"}),(0,r.jsx)(n.td,{children:"Text *= Number"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'$t*="abc"  //$t:=$t*"abc"'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Number *= Number"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"$n*=5 //$n:=$n*5"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Time *= Time"}),(0,r.jsx)(n.td,{children:"Hora"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"$t1*=$t2 //$t1:=$t1*$t2"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Time *= Number"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"$t1*=5 //$t1:=$t1*5"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Picture *= Number"}),(0,r.jsx)(n.td,{children:"Picture"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"$p1*=5 //$p1:=$p1*5 (redimensionar $p1 de 5)"})})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Estos operadores se aplican a todas las ",(0,r.jsx)(n.a,{href:"/docs/es/20-R6/Concepts/quick-tour#assignable-vs-non-assignable-expressions",children:"expresiones asignables"})," (excepto de las im\xe1genes como propiedades de objeto o elementos de colecci\xf3n)."]}),"\n",(0,r.jsxs)(n.p,{children:['La operaci\xf3n "source ',(0,r.jsx)(n.code,{children:"operator"}),' value" no es estrictamente equivalente a "source := source ',(0,r.jsx)(n.code,{children:"operator"}),' value" porque la expresi\xf3n que designa la fuente (variable, campo, propiedad del objeto, elemento de colecci\xf3n) s\xf3lo se eval\xfaa una vez. Por ejemplo, en una expresi\xf3n tal como ',(0,r.jsx)(n.code,{children:"getPointer()->+=1"})," el m\xe9todo ",(0,r.jsx)(n.code,{children:"getPointer"})," es llamado s\xf3lo una vez."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R6/Concepts/string#character-reference-symbols",children:"La indexaci\xf3n de caracteres en el texto"})," y ",(0,r.jsx)(n.a,{href:"/docs/es/20-R6/Concepts/blob#accessing-a-scalar-blobs-bytes",children:"la indexaci\xf3n de bytes en el blob"})," no soporta a estos operadores."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'// Adici\xf3n\n$x:=2\n$x+=5 //$x=7\n\n$t:="Hola" \n$t+=" World" //$t="Hola Mundo" \n\n$d:=! \xa1000-11-10!\n$d+=10 //$d=!2000-11-20!\n\n// Restar\n$x1:=10\n$x1-=5 //$x1=5\n\n$d1:=!\n$d1-=10 // $d1=!2000-10-31!\n\n// Divisi\xf3n\n$x3:=10\n$x3/=2 // $x3=5\n\n\n// Multiplicaci\xf3n\n$x2:=10\n$x2*=5 // $x2=10\n\n$t2:="Hello" \n$t2*=2 // $t2="HelloHello"\n\n'})}),"\n",(0,r.jsx)(n.h2,{id:"operadores-en-cortocircuito",children:"Operadores en cortocircuito"}),"\n",(0,r.jsxs)(n.p,{children:["Los operadores ",(0,r.jsx)(n.strong,{children:"&&"})," y ",(0,r.jsx)(n.strong,{children:"||"})," son los ",(0,r.jsx)(n.strong,{children:"operadores en cortocircuito"}),". Un operador en cortocircuito es aquel que no necesariamente eval\xfaa todos sus operandos."]}),"\n",(0,r.jsxs)(n.p,{children:["La diferencia con los ",(0,r.jsxs)(n.a,{href:"/docs/es/20-R6/Concepts/boolean#operadores-logicos",children:["operadores booleanos simples ",(0,r.jsx)(n.strong,{children:"&"})," y ",(0,r.jsx)(n.strong,{children:"|"})]})," es que los operadores en cortocircuito ",(0,r.jsx)(n.strong,{children:"&&"})," y ",(0,r.jsx)(n.strong,{children:"||"})," no devuelven un valor booleano. Eval\xfaan las expresiones como ",(0,r.jsx)(n.a,{href:"#truthy-and-falsy",children:"truthy o falsy"}),", y luego devuelven una de las expresiones."]}),"\n",(0,r.jsx)(n.h3,{id:"operador-en-corto-circuito-and-",children:"Operador en corto-circuito AND (&&)"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R4"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"La regla es la siguiente:"}),"\n",(0,r.jsxs)(n.p,{children:["Dado ",(0,r.jsx)(n.code,{children:"Expr1 && Expr2"}),":"]}),"\n",(0,r.jsxs)(n.p,{children:["El operador en cortocircuito AND eval\xfaa los operandos de izquierda a derecha, devolviendo inmediatamente el valor del primer operando falso que encuentra; si todos los valores son ",(0,r.jsx)(n.a,{href:"#truthy-and-falsy",children:"truthy"}),", se devuelve el valor del \xfaltimo operando."]}),"\n",(0,r.jsxs)(n.p,{children:["La siguiente tabla resume los diferentes casos para el operador ",(0,r.jsx)(n.strong,{children:"&&"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Expr1"}),(0,r.jsx)(n.th,{children:"Expr2"}),(0,r.jsx)(n.th,{children:"Valor devuelto"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"truthy"}),(0,r.jsx)(n.td,{children:"truthy"}),(0,r.jsx)(n.td,{children:"Expr2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"truthy"}),(0,r.jsx)(n.td,{children:"falsy"}),(0,r.jsx)(n.td,{children:"Expr2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"falsy"}),(0,r.jsx)(n.td,{children:"truthy"}),(0,r.jsx)(n.td,{children:"Expr1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"falsy"}),(0,r.jsx)(n.td,{children:"falsy"}),(0,r.jsx)(n.td,{children:"Expr1"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $v : Variant\n\n$v:= "Hello" && "World" //"World"\n$v:=False && 0 // False\n$v:=0 && False // False\n$v:=5 && !00-00-00! // 00/00/00\n$v := 5 && 10 && "hello" //"hello"\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"Digamos que tiene una tienda en l\xednea, y algunos productos tienen un tipo de impuesto aplicado, y otros no."}),"\n",(0,r.jsx)(n.p,{children:"Para calcular el impuesto, se multiplica el precio por el tipo impositivo, que puede no haberse especificado."}),"\n",(0,r.jsx)(n.p,{children:"As\xed que puede escribir esto:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"var $tax : Variant\n\n$tax:=$item.taxRate && ($item.price*$item.taxRate)\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$tax"})," sera NULL si taxRate es NULL (o indefinido), de lo contrario almacenar\xe1 el resultado del c\xe1lculo."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,r.jsx)(n.p,{children:"Los operadores de cortocircuito son \xfatiles en pruebas como:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"If(($myObject#Null) && ($myObject.value>10))\n\t//c\xf3digo\nEnd if\n"})}),"\n",(0,r.jsx)(n.p,{children:"Si $myObject es Null, el segundo argumento no se ejecuta, por lo que no se lanza ning\xfan error."}),"\n",(0,r.jsx)(n.h3,{id:"operador-en-corto-circuito-or-",children:"Operador en corto-circuito OR (||)"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R4"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'El operador || devuelve el valor de uno de los operandos especificados. La expresi\xf3n se eval\xfaa de izquierda a derecha y se comprueba la posible evaluaci\xf3n en "cortocircuito" utilizando la siguiente regla:'}),"\n",(0,r.jsxs)(n.p,{children:["Dado ",(0,r.jsx)(n.code,{children:"Expr1 || Expr2"}),":"]}),"\n",(0,r.jsxs)(n.p,{children:["Si Expr1 es ",(0,r.jsx)(n.a,{href:"#truthy-and-falsy",children:"truthy"}),", Expr2 no se eval\xfaa y el c\xe1lculo devuelve Expr1."]}),"\n",(0,r.jsxs)(n.p,{children:["Si Expr1 es ",(0,r.jsx)(n.a,{href:"#truthy-and-falsy",children:"falsy"}),", el c\xe1lculo devuelve Expr2."]}),"\n",(0,r.jsxs)(n.p,{children:["La siguiente tabla resume los diferentes casos y el valor devuelto por el operador ",(0,r.jsx)(n.strong,{children:"||"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Expr1"}),(0,r.jsx)(n.th,{children:"Expr2"}),(0,r.jsx)(n.th,{children:"Valor devuelto"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"truthy"}),(0,r.jsx)(n.td,{children:"truthy"}),(0,r.jsx)(n.td,{children:"Expr1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"truthy"}),(0,r.jsx)(n.td,{children:"falsy"}),(0,r.jsx)(n.td,{children:"Expr1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"falsy"}),(0,r.jsx)(n.td,{children:"truthy"}),(0,r.jsx)(n.td,{children:"Expr2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"falsy"}),(0,r.jsx)(n.td,{children:"falsy"}),(0,r.jsx)(n.td,{children:"Expr2"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-1-1",children:"Ejemplo 1"}),"\n",(0,r.jsxs)(n.p,{children:["Supongamos que tiene una tabla llamada Employee. Algunos empleados han introducido un n\xfamero de tel\xe9fono y otros no. Esto significa que ",(0,r.jsx)(n.code,{children:"$emp.phone"})," podr\xeda ser NULL, y no se puede asignar NULL a una variable texto. Pero puede escribir lo siguiente:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $phone : Text\n\n$phone:=$emp.phone || "n/a"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["En este caso, ",(0,r.jsx)(n.code,{children:"$phone"}),' almacenar\xe1 un n\xfamero de tel\xe9fono o la cadena "n/a".']}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-2-1",children:"Ejemplo 2"}),"\n",(0,r.jsxs)(n.p,{children:["Dada una tabla llamada Person con un campo ",(0,r.jsx)(n.em,{children:"name"}),", as\xed como un campo ",(0,r.jsx)(n.em,{children:"maiden name"})," para las mujeres casadas."]}),"\n",(0,r.jsx)(n.p,{children:"El siguiente ejemplo comprueba si hay un apellido de soltera y lo almacena en una variable, de lo contrario simplemente almacena el nombre de la persona:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"var $name: Text\n\n$name:=$person.maidenName || $person.name\n"})}),"\n",(0,r.jsx)(n.h3,{id:"prioridad",children:"Prioridad"}),"\n",(0,r.jsxs)(n.p,{children:["Los operadores ",(0,r.jsx)(n.code,{children:"&&"})," y ",(0,r.jsx)(n.code,{children:"||"})," tienen la misma prioridad que los operadores l\xf3gicos ",(0,r.jsx)(n.code,{children:"&"})," y ",(0,r.jsx)(n.code,{children:"|"}),", y se eval\xfaan de izquierda a derecha."]}),"\n",(0,r.jsxs)(n.p,{children:["Esto significa que ",(0,r.jsx)(n.code,{children:"a || b && c"})," se eval\xfaa como ",(0,r.jsx)(n.code,{children:"(a || b) && c"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"operador-ternario",children:"Operador ternario"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R4"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["El operador condicional ternario permite escribir expresiones condicionales de una l\xednea. Por ejemplo, puede reemplazar una secuencia completa de instrucciones ",(0,r.jsx)(n.a,{href:"/docs/es/20-R6/Concepts/control-flow#ifelseend-if",children:"If\u2026Else"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Se necesitan tres operandos en el siguiente orden:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"una condici\xf3n seguida de un signo de interrogaci\xf3n (?)"}),"\n",(0,r.jsxs)(n.li,{children:["una expresi\xf3n a ejecutar si la condici\xf3n es ",(0,r.jsx)(n.a,{href:"#truthy-and-falsy",children:"truthy"}),", seguida de dos puntos (:)"]}),"\n",(0,r.jsxs)(n.li,{children:["una expresi\xf3n a ejecutar si la condici\xf3n es ",(0,r.jsx)(n.a,{href:"#truthy-and-falsy",children:"falsy"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"sintaxis",children:"Sintaxis"}),"\n",(0,r.jsx)(n.p,{children:"La sintaxis es la siguiente:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"condition ? condition ? exprIfTruthy : exprIfFalsy"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Dado que la ",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4Dv19/4D/19.5/Using-tokens-in-formulas.300-6136716.en.html",children:"sintaxis con tokens"})," utiliza dos puntos, se recomienda insertar un espacio despu\xe9s de los dos puntos ",(0,r.jsx)(n.code,{children:":"})," o encerrar los tokens utilizando par\xe9ntesis para evitar cu"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"ejemplos-1",children:"Ejemplos"}),"\n",(0,r.jsx)(n.h4,{id:"un-ejemplo-sencillo",children:"Un ejemplo sencillo"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $age : Integer\nvar $beverage : Text\n\n$age:=26\n$beverage:=($age>=21) ? "Beer" : "Juice"\n\nALERT($beverage) // "Beer"\n'})}),"\n",(0,r.jsx)(n.h4,{id:"gesti\xf3n-de-los-datos-de-una-tabla",children:"Gesti\xf3n de los datos de una tabla"}),"\n",(0,r.jsx)(n.p,{children:"Este ejemplo almacena el nombre completo de una persona en una variable, y maneja el caso cuando no se ha especificado el nombre o el apellido:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $fullname : Text\n\n// Si falta uno de los nombres, almacenar el que existe, de lo contrario almacenar una cadena vac\xeda\n$fullname:=($person.firstname && $person.lastname) ? ($person.firstname+" "+$person.lastname) : ($person.lastname || $person.firstname) || ""\n'})}),"\n",(0,r.jsx)(n.h2,{id:"truthy-y-falsy",children:"Truthy y falsy"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R4"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Adem\xe1s de un tipo, cada valor tambi\xe9n tiene un valor booleano inherente, conocido generalmente como ",(0,r.jsx)(n.strong,{children:"truthy"})," o ",(0,r.jsx)(n.strong,{children:"falsy<"}),"."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Los valores ",(0,r.jsx)(n.strong,{children:"truthy"})," y ",(0,r.jsx)(n.strong,{children:"falsy"})," s\xf3lo son evaluados por los operadores ",(0,r.jsx)(n.a,{href:"#short-circuit-operators",children:"en cortocircuito"})," y ",(0,r.jsx)(n.a,{href:"#ternary-operator",children:"ternarios"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Los siguientes valores son ",(0,r.jsx)(n.strong,{children:"falsy"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"false"}),"\n",(0,r.jsx)(n.li,{children:"Null"}),"\n",(0,r.jsx)(n.li,{children:"indefinido"}),"\n",(0,r.jsx)(n.li,{children:"Null object"}),"\n",(0,r.jsx)(n.li,{children:"Null collection"}),"\n",(0,r.jsx)(n.li,{children:"Null pointer"}),"\n",(0,r.jsx)(n.li,{children:"Null picture"}),"\n",(0,r.jsx)(n.li,{children:"Null date !00-00-00!"}),"\n",(0,r.jsx)(n.li,{children:'"" - Cadenas vac\xedas'}),"\n",(0,r.jsx)(n.li,{children:"[] - Colecciones vac\xedas"}),"\n",(0,r.jsx)(n.li,{children:"{} - Objetos vacios"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Todos los dem\xe1s valores se consideran ",(0,r.jsx)(n.strong,{children:"truthy"}),", incluyendo:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"0 - cero num\xe9rico (Entero u otro)"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["En 4D, la evaluaci\xf3n ",(0,r.jsx)(n.strong,{children:"truthy"})," y ",(0,r.jsx)(n.strong,{children:"falsy"})," refleja la ",(0,r.jsx)(n.strong,{children:"usabilidad"})," de un valor, lo que significa que un valor truthy existe y puede ser procesado por el c\xf3digo sin generar errores o resultados inesperados. La raz\xf3n de ser de esto es ofrecer una forma conveniente de manejar valores ",(0,r.jsx)(n.em,{children:"undefined"})," y ",(0,r.jsx)(n.em,{children:"null"})," en objetos y colecciones, de modo que un n\xfamero reducido de instrucciones ",(0,r.jsx)(n.a,{href:"/docs/es/20-R6/Concepts/control-flow#ifelseend-if",children:"If\u2026Else"})," sean necesarias para evitar errores de ejecu"]}),"\n",(0,r.jsxs)(n.p,{children:["Por ejemplo, cuando se utiliza un operador en ",(0,r.jsx)(n.a,{href:"#short-circuit-or-operator-",children:"cortocircuito OR"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"$value:=$object.value || $defaultValue\n"})}),"\n",(0,r.jsxs)(n.p,{children:["... se obtiene el valor por defecto cada vez que ",(0,r.jsx)(n.em,{children:"$object"})," no contiene la propiedad ",(0,r.jsx)(n.code,{children:"value"})," O cuando es ",(0,r.jsx)(n.em,{children:"null"}),". Por lo tanto, este operador comprueba la existencia o utilidad del valor en lugar de un valor espec\xedfico. Obs\xe9rvese que como el valor num\xe9rico 0 existe y es utilizable, no se le da un tratamiento especial, por lo que es ",(0,r.jsx)(n.strong,{children:"truthy"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:['En cuanto a los valores que representan las colecciones, los objetos o las cadenas, los valores "vac\xedos" se consideran como ',(0,r.jsx)(n.strong,{children:"falsy"}),". Es \xfatil cuando se quiere asignar un valor por defecto cuando se encuentra un valor vac\xedo."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'$phone:=$emp.phone || "n/a"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var r=s(296540);const o={},d=r.createContext(o);function i(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);