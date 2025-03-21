"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33405"],{49724:function(e,n,a){a.r(n),a.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/num","title":"Num","description":"Num ( expresion {; separador} ) : Real","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/num.md","sourceDirName":"commands-legacy","slug":"/commands/num","permalink":"/docs/es/20-R7/commands/num","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fnum.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"num","title":"Num","slug":"/commands/num","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Match regex","permalink":"/docs/es/20-R7/commands/match-regex"},"next":{"title":"Position","permalink":"/docs/es/20-R7/commands/position"}}'),r=a("785893"),l=a("250065");let i={id:"num",title:"Num",slug:"/commands/num",displayed_sidebar:"docs"},o=void 0,d={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ejemplo 3",id:"ejemplo-3",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function t(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Num"})," ( ",(0,r.jsx)(n.em,{children:"expresion"})," {; ",(0,r.jsx)(n.em,{children:"separador"}),"} ) : Real"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"expresion"}),(0,r.jsx)(n.td,{children:"Text, Boolean, Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Cadena a convertir en num\xe9rico o  Booleano a convertir en 0 \xf3 1, o  Expresi\xf3n num\xe9rica"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"separador"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Separador decimal"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valor num\xe9rico del par\xe1metro  expresi\xf3n"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando Num devuelve en forma num\xe9rica la expresi\xf3n de tipo cadena, booleano, o num\xe9rica que pas\xf3 en ",(0,r.jsx)(n.em,{children:"expresion"}),". El par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"separador"})," puede utilizarse para designar un separador decimal para la evaluaci\xf3n de las expresiones de tipo cadena."]}),"\n",(0,r.jsx)(n.p,{children:"Expresiones de tipo cadena"}),"\n",(0,r.jsxs)(n.p,{children:["Si ",(0,r.jsx)(n.em,{children:"expresion"})," consiste \xfanicamente uno o m\xe1s caracteres alfab\xe9ticos, Num devuelve cero. Si ",(0,r.jsx)(n.em,{children:"expresion"}),' incluye caracteres alfab\xe9ticos y caracteres num\xe9ricos, Num ignora los caracteres alfab\xe9ticos. De esta forma, Num transforma la cadena "a1b2c3" en el n\xfamero 123.']}),"\n",(0,r.jsxs)(n.p,{children:["Hay tres caracteres reservados que Num trata de manera particular: el separador decimal definido en el sistema (si el par\xe1metro ",(0,r.jsx)(n.em,{children:"separador"})," no se pasa), el gui\xf3n \u201C",(0,r.jsx)(n.em,{children:"-"}),"\u201D, y \u201C",(0,r.jsx)(n.em,{children:"e"}),"\u201D ",(0,r.jsx)(n.em,{children:"o"})," \u201CE\u201D. Estos caracteres son interpretados como caracteres de formato num\xe9rico."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["El separador decimal se interpreta como un lugar decimal y debe aparecer en una cadena num\xe9rica. Por defecto, el comando utiliza el separador decimal definido en el sistema operativo. Puede modificar este car\xe1cter utilizando el par\xe1metro ",(0,r.jsx)(n.em,{children:"separador"})," (ver a continuaci\xf3n)."]}),"\n",(0,r.jsxs)(n.li,{children:["El gui\xf3n define un n\xfamero o exponente negativo. El gui\xf3n debe aparecer antes de los caracteres num\xe9ricos negativos o despu\xe9s de la \u201Ce\u201D para un exponente. Excepto por el car\xe1cter \u201Ce\u201D, si un gui\xf3n est\xe1 en una cadena num\xe9rica, la porci\xf3n de la cadena despu\xe9s del gui\xf3n se ignora. Por ejemplo, ",(0,r.jsx)(n.strong,{children:"Num"}),'("123-456") devuelve 123, pero ',(0,r.jsx)(n.strong,{children:"Num"}),'("-9") devuelve -9.']}),"\n",(0,r.jsxs)(n.li,{children:["La e o E hace que todos los caracteres num\xe9ricos a la derecha se interpreten como la potencia de un exponente. La \u201Ce\u201D debe estar en una cadena num\xe9rica. De esta forma, ",(0,r.jsx)(n.strong,{children:"Num"}),'("123e\u20132") devuelve 1,23.']}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'Note que en el caso de que una cadena tenga m\xe1s de un car\xe1cter "e", la conversi\xf3n podr\xe1 dar resultados diferentes bajo Mac OS y bajo Windows.'}),"\n",(0,r.jsxs)(n.p,{children:["El par\xe1metro ",(0,r.jsx)(n.em,{children:"separador"})," puede utilizarse para designar un separador decimal personalizado para la evaluaci\xf3n de ",(0,r.jsx)(n.em,{children:"expresion"}),". Cuando la cadena a evaluar se expresa con un separador decimal diferente del separador del sistema, el comando devuelve un resultado incorrecto. El par\xe1metro ",(0,r.jsx)(n.em,{children:"separador"})," puede utilizarse en este caso para obtener una evaluaci\xf3n correcta. Cuando se pasa este par\xe1metro, el comando no tiene en cuenta el separador decimal del sistema. Puede pasar uno o m\xe1s caracteres."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," el comando ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/get-system-format",children:"GET SYSTEM FORMAT"})," puede utilizarse para buscar el separador decimal actual como tambi\xe9n otros par\xe1metros sistema regionales."]}),"\n",(0,r.jsx)(n.p,{children:"Expresiones de tipo Booleano"}),"\n",(0,r.jsxs)(n.p,{children:["Si pasa una expresi\xf3n booleana en el par\xe1metro expresi\xf3n, Num devuelve 1 si la expresi\xf3n es True; de lo contrario devuelve ",(0,r.jsx)(n.em,{children:"0"})," (cero)."]}),"\n",(0,r.jsx)(n.p,{children:"Expresiones num\xe9ricas"}),"\n",(0,r.jsxs)(n.p,{children:["Si pasa una expresi\xf3n num\xe9rica en el par\xe1metro ",(0,r.jsx)(n.em,{children:"expresion"}),", Num devuelve tal cual el valor pasado en ",(0,r.jsx)(n.em,{children:"expresion"}),". Esto puede ser \xfatil especialmente en el caso de programaci\xf3n gen\xe9rica utilizando punteros."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Expresiones indefinidas"}),(0,r.jsx)(n.br,{}),"\nSi la ",(0,r.jsx)(n.em,{children:"expresion"})," se eval\xfaa como indefinida, el comando devuelve 0 (cero). Esto es \xfatil cuando se espera que el resultado de una expresi\xf3n (por ejemplo, un atributo objeto) sea un n\xfamero, incluso si puede ser indefinido."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsxs)(n.p,{children:["El siguiente ejemplo ilustra c\xf3mo funciona Num cuando se pasa un argumento de tipo cadena. Cada l\xednea asigna un n\xfamero a la variable ",(0,r.jsx)(n.em,{children:"vResult"}),". Los comentarios describen los resultados:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0vResult:=Num("ABCD")\xa0// vResult vale 0\n\xa0vResult:=Num("A1B2C3")\xa0// vResult vale 123\n\xa0vResult:=Num("123")\xa0// vResult vale 123\n\xa0vResult:=Num("123,4")\xa0// vResult vale 123,4\n\xa0vResult:=Num("-123")\xa0// vResult vale -123\n\xa0vResult:=Num("-123e2")\xa0// vResult vale -12300\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsxs)(n.p,{children:["En este ejemplo, ",(0,r.jsx)(n.em,{children:"[Cliente]Deuda"})," se compara con el valor ",(0,r.jsx)(n.em,{children:"$1000"}),". El comando Num aplicado a esta comparaci\xf3n devuelve 1 o 0. La multiplicaci\xf3n de una cadena por 1 \xf3 0 devuelve la cadena o la cadena vac\xeda. Como resultado, ",(0,r.jsx)(n.em,{children:"[Cliente]Riesgo"})," recibe el valor \u201CAceptable\u201D o \u201CInaceptable\u201D:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Si el cliente tiene deudas menores a 1000, el riesgo es aceptable.\n\xa0\xa0// Si el cliente tiene deudas superiores a 1000, el riesgo es inaceptable.\n\xa0[Cliente]Riesgo:=("Aceptable"*Num([Cliente]Deuda<1000))+("Inaceptable"*Num([Cliente]Deuda>=1000))\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,r.jsx)(n.p,{children:"Este ejemplo compara los resultados obtenidos dependiendo del separador \u201Cactual\u201D:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$lacadena:="33,333.33"\n\xa0$elnum:=Num($lacadena)\n\xa0\xa0// by default, $elnum es igual a 33,33333 en un sistema franc\xe9s\n\xa0$elnum:=Num($lacadena;".")\n\xa0\xa0// $elnum se evaluar\xe1 correctamente sin importar el sistema;\n\xa0\xa0// por ejemplo, 33 333,33 en un sistema franc\xe9s\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/bool",children:"Bool"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/get-system-format",children:"GET SYSTEM FORMAT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/string",children:"String"})]}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"11"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return o},a:function(){return i}});var s=a(667294);let r={},l=s.createContext(r);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);