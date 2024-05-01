"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21293],{603905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(a),c=r,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},301388:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});a(667294);var n=a(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={id:"operators",title:"Operadores"},i=void 0,p={unversionedId:"Concepts/operators",id:"version-20-R5/Concepts/operators",title:"Operadores",description:"Un operador es un s\xedmbolo o un grupo de s\xedmbolos que utiliza para verificar, modificar o combinar los valores. Usted ya conoce a la mayor\xeda de los operadores. For example, 1 + 2 uses the addition (or plus sign) operator to add two numbers together, and the result is 3. Comparison operators, like = or >, let you compare two or more values.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/Concepts/operators.md",sourceDirName:"Concepts",slug:"/Concepts/operators",permalink:"/docs/es/Concepts/operators",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Foperators.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"operators",title:"Operadores"},sidebar:"docs",previous:{title:"Un recorrido r\xe1pido",permalink:"/docs/es/Concepts/quick-tour"},next:{title:"Tipos de datos",permalink:"/docs/es/Concepts/data-types"}},s={},u=[{value:"Terminolog\xeda",id:"terminolog\xeda",level:2},{value:"Asignaci\xf3n",id:"asignaci\xf3n",level:2},{value:"Operadores b\xe1sicos",id:"operadores-b\xe1sicos",level:2},{value:"Operadores de asignaci\xf3n compuestos",id:"operadores-de-asignaci\xf3n-compuestos",level:2},{value:"Ejemplos",id:"ejemplos",level:4},{value:"Operadores en cortocircuito",id:"operadores-en-cortocircuito",level:2},{value:"Operador en corto-circuito AND (&amp;&amp;)",id:"operador-en-corto-circuito-and-",level:3},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Operador en corto-circuito OR (||)",id:"operador-en-corto-circuito-or-",level:3},{value:"Ejemplo 1",id:"ejemplo-1-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2-1",level:4},{value:"Prioridad",id:"prioridad",level:3},{value:"Operador ternario",id:"operador-ternario",level:2},{value:"Sintaxis",id:"sintaxis",level:3},{value:"Ejemplos",id:"ejemplos-1",level:3},{value:"Un ejemplo sencillo",id:"un-ejemplo-sencillo",level:4},{value:"Gesti\xf3n de los datos de una tabla",id:"gesti\xf3n-de-los-datos-de-una-tabla",level:4},{value:"Truthy y falsy",id:"truthy-y-falsy",level:2}],d={toc:u};function m(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)("wrapper",r({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Un operador es un s\xedmbolo o un grupo de s\xedmbolos que utiliza para verificar, modificar o combinar los valores. Usted ya conoce a la mayor\xeda de los operadores. For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"1 + 2")," uses the addition (or plus sign) operator to add two numbers together, and the result is 3. Comparison operators, like = or >, let you compare two or more values."),(0,n.kt)("p",null,"El lenguaje 4D es compatible con los operadores que ya conoce de otros lenguajes como C o JavaScript. However, the assignment operator is ",(0,n.kt)("inlineCode",{parentName:"p"},":=")," to prevent it from being mistakenly used when the equal to operator (",(0,n.kt)("inlineCode",{parentName:"p"},"="),") is intended. ",(0,n.kt)("a",r({parentName:"p"},{href:"#basic-operators"}),"Basic operators")," such as arithmetic operators (+, -, ","*",", /, %...) and comparison operators (=, >, >=...) can be used with numbers, but also with boolean, text, date, time, pointer, or picture data types. Like JavaScript, the 4D language supports the concept of ",(0,n.kt)("a",r({parentName:"p"},{href:"#truthy-and-falsy"}),"truthy and falsy values"),", which in use in ",(0,n.kt)("a",r({parentName:"p"},{href:"#short-circuit-operators"}),"short-cicrcuit operators"),"."),(0,n.kt)("h2",r({},{id:"terminolog\xeda"}),"Terminolog\xeda"),(0,n.kt)("p",null,"The 4D language supports ",(0,n.kt)("strong",{parentName:"p"},"binary")," and ",(0,n.kt)("strong",{parentName:"p"},"ternary")," operators:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"binary operators operate on two targets (such as ",(0,n.kt)("inlineCode",{parentName:"li"},"2 + 3"),") and appear in between their two targets."),(0,n.kt)("li",{parentName:"ul"},"los operadores ternarios operan en tres objetivos. Like C, 4D has only one ternary operator, the ",(0,n.kt)("a",r({parentName:"li"},{href:"#ternary-operator"}),"ternary conditional operator")," (",(0,n.kt)("inlineCode",{parentName:"li"},"a ? b : c"),").")),(0,n.kt)("p",null,"Los valores que los operadores afectan son los operandos. In the expression ",(0,n.kt)("inlineCode",{parentName:"p"},"1 + 2"),", the + symbol is a binary operator and its two operands are the values 1 and 2."),(0,n.kt)("h2",r({},{id:"asignaci\xf3n"}),"Asignaci\xf3n"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"assignment operator")," (",(0,n.kt)("inlineCode",{parentName:"p"},"a:=b"),") initializes or updates the value of ",(0,n.kt)("inlineCode",{parentName:"p"},"a")," with the value of ",(0,n.kt)("inlineCode",{parentName:"p"},"b"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'$myNumber:=3 //assigns 3 to MyNumber variable  \n$myDate:=!2018/01/21! //assigns a date literal\n$myLength:=Length("Acme") //assigns the result of the command (4) to $myLength\n$col:=New collection //$col is initialized with an empty collection\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Do NOT confuse the assignment operator ",(0,n.kt)("inlineCode",{parentName:"p"},":=")," with the equality comparison operator ",(0,n.kt)("inlineCode",{parentName:"p"},"="),". A different assignment operator (and not ",(0,n.kt)("inlineCode",{parentName:"p"},"="),") was deliberately chosen to avoid issues and confusion which often occur with == or === in other programming languages. Estos errores son a menudo dif\xedciles de reconocer por el compilador y conducen a una soluci\xf3n de problemas que requiere mucho tiempo.")),(0,n.kt)("h2",r({},{id:"operadores-b\xe1sicos"}),"Operadores b\xe1sicos"),(0,n.kt)("p",null,"Operator results depend on the ",(0,n.kt)("strong",{parentName:"p"},"data types")," they are applied to. 4D supports different operators on scalar data types. Se describen con los tipos de datos, en las siguientes secciones:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/es/Concepts/boolean#logical-operators"}),(0,n.kt)("strong",{parentName:"a"},"Logical operators"))," (on ",(0,n.kt)("strong",{parentName:"li"},"boolean")," expressions)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/es/Concepts/date#date-operators"}),(0,n.kt)("strong",{parentName:"a"},"Date operators"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/es/Concepts/time#time-operators"}),(0,n.kt)("strong",{parentName:"a"},"Time operators"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/es/Concepts/number#number-operators"}),(0,n.kt)("strong",{parentName:"a"},"Number operators"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/es/Concepts/number#bitwise-operators"}),(0,n.kt)("strong",{parentName:"a"},"Bitwise operators"))," (on ",(0,n.kt)("strong",{parentName:"li"},"long integer")," expressions)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/es/Concepts/picture#picture-operators"}),(0,n.kt)("strong",{parentName:"a"},"Picture operators"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/es/Concepts/pointer#pointer-operators"}),(0,n.kt)("strong",{parentName:"a"},"Pointer operators"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/es/Concepts/string#string-operators"}),(0,n.kt)("strong",{parentName:"a"},"String operators"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/es/Concepts/null-undefined#null-operators"}),(0,n.kt)("strong",{parentName:"a"},"Null operators"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/es/Concepts/null-undefined#undefined-operators"}),(0,n.kt)("strong",{parentName:"a"},"Undefined operators")))),(0,n.kt)("h2",r({},{id:"operadores-de-asignaci\xf3n-compuestos"}),"Operadores de asignaci\xf3n compuestos"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Historia"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Lanzamiento"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"19 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,"4D provides ",(0,n.kt)("strong",{parentName:"p"},"compound assignment operators")," that combine assignment with another operation. Un ejemplo es el operador de asignaci\xf3n adicional (",(0,n.kt)("inlineCode",{parentName:"p"},"+="),"):"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"$a:=1 \n$a+=2 // $a=3\n")),(0,n.kt)("p",null,"Se admiten los siguientes operadores de asignaci\xf3n compuestos:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Operador"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Sintaxis"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Asigna"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Ejemplo"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adici\xf3n"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text += Text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'$t+=" World"  //$t:=$t+" World"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number += Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$n+=5 //$n:=$n+5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date += Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fecha"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$d+=5 //$d:=$d+5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Time += Time"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Hora"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$t1+=$t2 //$t1:=$t1+$t2"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Time += Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$t1+=5 //$t1:=$t1+5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Picture += Picture"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Picture"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$p1+=$p2 //$p1:=$p1+$p2 (add $p2 to the right of $p1)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Picture += Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Picture"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$p1+=5 //$p1:=$p1+5 (move $p1 horizontally 5 pixels to the right)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Resta"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number -= Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$n-=5 //$n:=$n-5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date -= Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fecha"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$d-=5 //$d:=$d-5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Time -= Time"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Hora"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$t1-=$t2 //$t1:=$t1-$t2"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Time -= Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$t1-=5 //$t1:=$t1-5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Picture -= Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Picture"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$p1-=5 //$p1:=$p1-5 (mover horizontalemente $p1 de 5 p\xedxeles a la izquierda)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Divisi\xf3n"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number /= Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$n/=5 //$n:=$n/5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Time /= Time"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Hora"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$t1/=$t2 //$t1:=$t1/$t2"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Time /= Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$t1/=5 //$t1:=$t1/5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Picture /= Picture"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Picture"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$p1/=$p2 //$p1:=$p1/$p2 (a\xf1adir $p2 debajo de $p1)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Picture /= Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Picture"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$p1/=5 //$p1:=$p1/5 (desplazar verticalmente $p1 de 5 p\xedxeles)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Multiplicaci\xf3n"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text ","*","= Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'$t*="abc"  //$t:=$t*"abc"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number ","*","= Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$n*=5 //$n:=$n*5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Time ","*","= Time"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Hora"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$t1*=$t2 //$t1:=$t1*$t2"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Time ","*","= Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$t1*=5 //$t1:=$t1*5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Picture ","*","= Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Picture"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"$p1*=5 //$p1:=$p1*5 (redimensionar $p1 de 5)"))))),(0,n.kt)("p",null,"These operators apply on any ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/Concepts/quick-tour#assignable-vs-non-assignable-expressions"}),"assignable expressions")," (except pictures as object properties or collection elements)."),(0,n.kt)("p",null,'The operation "source ',(0,n.kt)("inlineCode",{parentName:"p"},"operator"),' value" is not strictly equivalent to "source := source ',(0,n.kt)("inlineCode",{parentName:"p"},"operator"),' value" because the expression designating the source (variable, field, object property, collection element) is only evaluated once. For example, in such expression as ',(0,n.kt)("inlineCode",{parentName:"p"},"getPointer()->+=1")," the ",(0,n.kt)("inlineCode",{parentName:"p"},"getPointer")," method is called only once."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/Concepts/string#character-reference-symbols"}),"Character indexing in text")," and ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/Concepts/blob#accessing-a-scalar-blobs-bytes"}),"byte indexing in blob")," do not support these operators.")),(0,n.kt)("h4",r({},{id:"ejemplos"}),"Ejemplos"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'// Addition\n$x:=2\n$x+=5 //$x=7\n\n$t:="Hello" \n$t+=" World" //$t="Hello World" \n\n$d:=!2000-11-10!\n$d+=10 //$d=!2000-11-20!\n\n// Subtraction\n$x1:=10\n$x1-=5 //$x1=5\n\n$d1:=!2000-11-10!\n$d1-=10 // $d1=!2000-10-31!\n\n// Division\n$x3:=10\n$x3/=2 // $x3=5\n\n\n// Multiplication\n$x2:=10\n$x2*=5 // $x2=10\n\n$t2:="Hello" \n$t2*=2 // $t2="HelloHello"\n\n')),(0,n.kt)("h2",r({},{id:"operadores-en-cortocircuito"}),"Operadores en cortocircuito"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"&&")," and ",(0,n.kt)("strong",{parentName:"p"},"||")," operators are ",(0,n.kt)("strong",{parentName:"p"},"short circuit operators"),". Un operador en cortocircuito es aquel que no necesariamente eval\xfaa todos sus operandos."),(0,n.kt)("p",null,"The difference with the single ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/Concepts/boolean#logical-operators"}),(0,n.kt)("strong",{parentName:"a"},"&")," and ",(0,n.kt)("strong",{parentName:"a"},"|")," boolean operators")," is that the short-circuit operators ",(0,n.kt)("strong",{parentName:"p"},"&&")," and ",(0,n.kt)("strong",{parentName:"p"},"||")," don't return a boolean value. They evaluate expressions as ",(0,n.kt)("a",r({parentName:"p"},{href:"#truthy-and-falsy"}),"truthy or falsy"),", then return one of the expressions."),(0,n.kt)("h3",r({},{id:"operador-en-corto-circuito-and-"}),"Operador en corto-circuito AND (&&)"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Historia"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Lanzamiento"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"19 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,"La regla es la siguiente:"),(0,n.kt)("p",null,"Dado ",(0,n.kt)("inlineCode",{parentName:"p"},"Expr1 && Expr2"),":"),(0,n.kt)("p",null,"The short-circuit AND operator evaluates operands from left to right, returning immediately with the value of the first falsy operand it encounters; if all values are ",(0,n.kt)("a",r({parentName:"p"},{href:"#truthy-and-falsy"}),"truthy"),", the value of the last operand is returned."),(0,n.kt)("p",null,"The following table summarizes the different cases for the ",(0,n.kt)("strong",{parentName:"p"},"&&")," operator:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Expr1"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Expr2"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Valor devuelto"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"truthy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"truthy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Expr2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"truthy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"falsy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Expr2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"falsy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"truthy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Expr1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"falsy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"falsy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Expr1")))),(0,n.kt)("h4",r({},{id:"ejemplo-1"}),"Ejemplo 1"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'var $v : Variant\n\n$v:= "Hello" && "World" //"World"\n$v:=False && 0 // False\n$v:=0 && False // False\n$v:=5 && !00-00-00! // 00/00/00\n$v := 5 && 10 && "hello" //"hello"\n')),(0,n.kt)("h4",r({},{id:"ejemplo-2"}),"Ejemplo 2"),(0,n.kt)("p",null,"Digamos que tiene una tienda en l\xednea, y algunos productos tienen un tipo de impuesto aplicado, y otros no."),(0,n.kt)("p",null,"Para calcular el impuesto, se multiplica el precio por el tipo impositivo, que puede no haberse especificado."),(0,n.kt)("p",null,"As\xed que puede escribir esto:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"var $tax : Variant\n\n$tax:=$item.taxRate && ($item.price*$item.taxRate)\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$tax")," will be NULL if taxRate is NULL (or undefined), otherwise it will store the result of the calculation."),(0,n.kt)("h4",r({},{id:"ejemplo-3"}),"Ejemplo 3"),(0,n.kt)("p",null,"Los operadores de cortocircuito son \xfatiles en pruebas como:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"If(($myObject#Null) && ($myObject.value>10))\n    //code\nEnd if\n")),(0,n.kt)("p",null,"Si $myObject es Null, el segundo argumento no se ejecuta, por lo que no se lanza ning\xfan error."),(0,n.kt)("h3",r({},{id:"operador-en-corto-circuito-or-"}),"Operador en corto-circuito OR (||)"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Historia"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Lanzamiento"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"19 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,'El operador || devuelve el valor de uno de los operandos especificados. La expresi\xf3n se eval\xfaa de izquierda a derecha y se comprueba la posible evaluaci\xf3n en "cortocircuito" utilizando la siguiente regla:'),(0,n.kt)("p",null,"Dado ",(0,n.kt)("inlineCode",{parentName:"p"},"Expr1 || Expr2"),":"),(0,n.kt)("p",null,"If Expr1 is ",(0,n.kt)("a",r({parentName:"p"},{href:"#truthy-and-falsy"}),"truthy"),", Expr2 is not evaluated and the calculation returns Expr1."),(0,n.kt)("p",null,"If Expr1 is ",(0,n.kt)("a",r({parentName:"p"},{href:"#truthy-and-falsy"}),"falsy"),", the calculation returns Expr2."),(0,n.kt)("p",null,"The following table summarizes the different cases and the value returned for the ",(0,n.kt)("strong",{parentName:"p"},"||")," operator:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Expr1"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Expr2"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Valor devuelto"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"truthy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"truthy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Expr1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"truthy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"falsy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Expr1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"falsy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"truthy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Expr2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"falsy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"falsy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Expr2")))),(0,n.kt)("h4",r({},{id:"ejemplo-1-1"}),"Ejemplo 1"),(0,n.kt)("p",null,"Supongamos que tiene una tabla llamada Employee. Algunos empleados han introducido un n\xfamero de tel\xe9fono y otros no. This means that ",(0,n.kt)("inlineCode",{parentName:"p"},"$emp.phone")," could be NULL, and you cannot assign NULL to a Text variable. Pero puede escribir lo siguiente:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'var $phone : Text\n\n$phone:=$emp.phone || "n/a"\n')),(0,n.kt)("p",null,"In which case ",(0,n.kt)("inlineCode",{parentName:"p"},"$phone"),' will store either a phone number or the "n/a" string.'),(0,n.kt)("h4",r({},{id:"ejemplo-2-1"}),"Ejemplo 2"),(0,n.kt)("p",null,"Given a table called Person with a ",(0,n.kt)("em",{parentName:"p"},"name")," field, as well as a ",(0,n.kt)("em",{parentName:"p"},"maiden name")," field for married women."),(0,n.kt)("p",null,"El siguiente ejemplo comprueba si hay un apellido de soltera y lo almacena en una variable, de lo contrario simplemente almacena el nombre de la persona:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"var $name: Text\n\n$name:=$person.maidenName || $person.name\n")),(0,n.kt)("h3",r({},{id:"prioridad"}),"Prioridad"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"&&")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"||")," operators have the same precedence as the logical operators ",(0,n.kt)("inlineCode",{parentName:"p"},"&")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"|"),", and are evaluated left to right."),(0,n.kt)("p",null,"This means that ",(0,n.kt)("inlineCode",{parentName:"p"},"a || b && c")," is evaluated as ",(0,n.kt)("inlineCode",{parentName:"p"},"(a || b) && c"),"."),(0,n.kt)("h2",r({},{id:"operador-ternario"}),"Operador ternario"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Historia"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Lanzamiento"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"19 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,"El operador condicional ternario permite escribir expresiones condicionales de una l\xednea. For example, it can replace a full sequence of ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/Concepts/control-flow#ifelseend-if"}),"If\u2026Else")," statements."),(0,n.kt)("p",null,"Se necesitan tres operandos en el siguiente orden:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"una condici\xf3n seguida de un signo de interrogaci\xf3n (?)"),(0,n.kt)("li",{parentName:"ul"},"an expression to execute if the condition is ",(0,n.kt)("a",r({parentName:"li"},{href:"#truthy-and-falsy"}),"truthy"),", followed by a colon (:)"),(0,n.kt)("li",{parentName:"ul"},"an expression to execute if the condition is ",(0,n.kt)("a",r({parentName:"li"},{href:"#truthy-and-falsy"}),"falsy"))),(0,n.kt)("h3",r({},{id:"sintaxis"}),"Sintaxis"),(0,n.kt)("p",null,"La sintaxis es la siguiente:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"condition ? condition ? exprIfTruthy : exprIfFalsy")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Since the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19.5/Using-tokens-in-formulas.300-6136716.en.html"}),"token syntax")," uses colons, we recommend inserting a space after the colon ",(0,n.kt)("inlineCode",{parentName:"p"},":")," or enclosing tokens using parentheses to avoid any conflicts.")),(0,n.kt)("h3",r({},{id:"ejemplos-1"}),"Ejemplos"),(0,n.kt)("h4",r({},{id:"un-ejemplo-sencillo"}),"Un ejemplo sencillo"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'var $age : Integer\nvar $beverage : Text\n\n$age:=26\n$beverage:=($age>=21) ? "Beer" : "Juice"\n\nALERT($beverage) // "Beer"\n')),(0,n.kt)("h4",r({},{id:"gesti\xf3n-de-los-datos-de-una-tabla"}),"Gesti\xf3n de los datos de una tabla"),(0,n.kt)("p",null,"Este ejemplo almacena el nombre completo de una persona en una variable, y maneja el caso cuando no se ha especificado el nombre o el apellido:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'var $fullname : Text\n\n// If one of the names is missing, store the one that exists, otherwise store an empty string\n$fullname:=($person.firstname && $person.lastname) ? ($person.firstname+" "+$person.lastname) : ($person.lastname || $person.firstname) || ""\n')),(0,n.kt)("h2",r({},{id:"truthy-y-falsy"}),"Truthy y falsy"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Historia"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Lanzamiento"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"19 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,"As well as a type, each value also has an inherent Boolean value, generally known as either ",(0,n.kt)("strong",{parentName:"p"},"truthy")," or ",(0,n.kt)("strong",{parentName:"p"},"falsy"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"truthy")," and ",(0,n.kt)("strong",{parentName:"p"},"falsy")," values are only evaluated by ",(0,n.kt)("a",r({parentName:"p"},{href:"#short-circuit-operators"}),"short-circuit")," and ",(0,n.kt)("a",r({parentName:"p"},{href:"#ternary-operator"}),"ternary")," operators.")),(0,n.kt)("p",null,"The following values are ",(0,n.kt)("strong",{parentName:"p"},"falsy"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"false"),(0,n.kt)("li",{parentName:"ul"},"Null"),(0,n.kt)("li",{parentName:"ul"},"indefinido"),(0,n.kt)("li",{parentName:"ul"},"Null object"),(0,n.kt)("li",{parentName:"ul"},"Null collection"),(0,n.kt)("li",{parentName:"ul"},"Null pointer"),(0,n.kt)("li",{parentName:"ul"},"Null picture"),(0,n.kt)("li",{parentName:"ul"},"Null date !00-00-00!"),(0,n.kt)("li",{parentName:"ul"},'"" - Cadenas vac\xedas'),(0,n.kt)("li",{parentName:"ul"},"[] - Colecciones vac\xedas"),(0,n.kt)("li",{parentName:"ul"},"{} - Objetos vacios")),(0,n.kt)("p",null,"All other values are considered ",(0,n.kt)("strong",{parentName:"p"},"truthy"),", including:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"0 - cero num\xe9rico (Entero u otro)")),(0,n.kt)("p",null,"In 4D, ",(0,n.kt)("strong",{parentName:"p"},"truthy")," and ",(0,n.kt)("strong",{parentName:"p"},"falsy")," evaluation reflects the ",(0,n.kt)("strong",{parentName:"p"},"usability")," of a value, which means that a truthy value exists and can be processed by the code without generating errors or unexpected results. The rationale behind this is to provide a convenient way to handle ",(0,n.kt)("em",{parentName:"p"},"undefined")," and ",(0,n.kt)("em",{parentName:"p"},"null")," values in objects and collections, so that a reduced number of ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/Concepts/control-flow#ifelseend-if"}),"If\u2026Else")," statements are necessary to avoid runtime errors."),(0,n.kt)("p",null,"For example, when you use a ",(0,n.kt)("a",r({parentName:"p"},{href:"#short-circuit-or-operator-"}),"short-circuit OR operator"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"$value:=$object.value || $defaultValue\n")),(0,n.kt)("p",null,"... you get the default value whenever ",(0,n.kt)("em",{parentName:"p"},"$object")," does not contain the ",(0,n.kt)("inlineCode",{parentName:"p"},"value")," property OR when it is ",(0,n.kt)("em",{parentName:"p"},"null"),". Por lo tanto, este operador comprueba la existencia o utilidad del valor en lugar de un valor espec\xedfico. Note that because the numerical value 0 exists and is usable, it is not treated specially, thus it is ",(0,n.kt)("strong",{parentName:"p"},"truthy"),"."),(0,n.kt)("p",null,'Regarding values representing collections, objects, or strings, "empty" values are considered ',(0,n.kt)("strong",{parentName:"p"},"falsy"),". Es \xfatil cuando se quiere asignar un valor por defecto cuando se encuentra un valor vac\xedo."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'$phone:=$emp.phone || "n/a"\n')))}m.isMDXComponent=!0}}]);