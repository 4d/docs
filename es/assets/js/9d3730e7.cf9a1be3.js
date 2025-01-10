"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63670"],{550430:function(e,a,n){n.r(a),n.d(a,{default:()=>p,frontMatter:()=>l,metadata:()=>r,assets:()=>i,toc:()=>t,contentTitle:()=>d});var r=JSON.parse('{"id":"Concepts/parameters","title":"Par\xe1metros","description":"A menudo encontrar\xe1 que necesita pasar datos a sus m\xe9todos y funciones. Esto se hace f\xe1cilmente con par\xe1metros.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/Concepts/parameters.md","sourceDirName":"Concepts","slug":"/Concepts/parameters","permalink":"/docs/es/Concepts/parameters","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fparameters.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"parameters","title":"Par\xe1metros"},"sidebar":"docs","previous":{"title":"M\xe9todos","permalink":"/docs/es/Concepts/methods"},"next":{"title":"Objetos y colecciones compartidos","permalink":"/docs/es/Concepts/shared"}}'),o=n("785893"),s=n("250065");let l={id:"parameters",title:"Par\xe1metros"},d=void 0,i={},t=[{value:"Generalidades",id:"generalidades",level:2},{value:"Declaraci\xf3n de par\xe1metros",id:"declaraci\xf3n-de-par\xe1metros",level:2},{value:"Valor devuelto",id:"valor-devuelto",level:3},{value:"Tipos de datos soportados",id:"tipos-de-datos-soportados",level:3},{value:"Inicializaci\xf3n",id:"inicializaci\xf3n",level:3},{value:"<code>return {expression}</code>",id:"return-expression",level:2},{value:"Indirecci\xf3n de par\xe1metros (${N})",id:"indirecci\xf3n-de-par\xe1metros-n",level:2},{value:"Utilizaci\xf3n de par\xe1metros variables",id:"utilizaci\xf3n-de-par\xe1metros-variables",level:3},{value:"Declaraci\xf3n de par\xe1metros variables",id:"declaraci\xf3n-de-par\xe1metros-variables",level:3},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Triggers y On Drag Over",id:"triggers-y-on-drag-over",level:2},{value:"Tipo de par\xe1metro equivocado",id:"tipo-de-par\xe1metro-equivocado",level:2},{value:"Utilizaci\xf3n de las propiedades de objeto como par\xe1metros con nombre",id:"utilizaci\xf3n-de-las-propiedades-de-objeto-como-par\xe1metros-con-nombre",level:2},{value:"Par\xe1metros opcionales",id:"par\xe1metros-opcionales",level:2},{value:"Valores o referencias",id:"valores-o-referencias",level:2},{value:"Casos particulares: objetos y colecciones",id:"casos-particulares-objetos-y-colecciones",level:3}];function c(e){let a={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.p,{children:"A menudo encontrar\xe1 que necesita pasar datos a sus m\xe9todos y funciones. Esto se hace f\xe1cilmente con par\xe1metros."}),"\n",(0,o.jsx)(a.h2,{id:"generalidades",children:"Generalidades"}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"Los par\xe1metros"})," (o ",(0,o.jsx)(a.strong,{children:"argumentos"}),") son piezas de datos que un m\xe9todo o una funci\xf3n de clase necesita para realizar su tarea. Los t\xe9rminos ",(0,o.jsx)(a.em,{children:"par\xe1metros"})," y ",(0,o.jsx)(a.em,{children:"argumentos"}),' se utilizan indistintamente en este manual. Los par\xe1metros tambi\xe9n se pasan a los comandos integrados de 4D. En este ejemplo, la cadena "Hello" es un argumento para el comando integrado ',(0,o.jsx)(a.code,{children:"ALERT"}),":"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:'ALERT("Hello")\n'})}),"\n",(0,o.jsxs)(a.p,{children:["Los par\xe1metros se pasan de la misma manera a los m\xe9todos o las funciones de clase. Por ejemplo, si una funci\xf3n de clase llamada ",(0,o.jsx)(a.code,{children:"getArea()"})," acepta dos par\xe1metros, una llamada a la funci\xf3n de clase podr\xeda verse as\xed:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"$area:=$o.getArea(50;100)\n"})}),"\n",(0,o.jsxs)(a.p,{children:["O, si un m\xe9todo proyecto llamado ",(0,o.jsx)(a.code,{children:"DO_SOMETHING"})," acepta tres par\xe1metros, una llamada al m\xe9todo podr\xeda verse as\xed:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"DO_SOMETHING($WithThis;$AndThat;$ThisWay)\n"})}),"\n",(0,o.jsx)(a.p,{children:"Los par\xe1metros de entrada est\xe1n separados por punto y coma (;)."}),"\n",(0,o.jsx)(a.p,{children:"Los mismos principios se aplican cuando los m\xe9todos se ejecutan a trav\xe9s de comandos dedicados, por ejemplo:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:'EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/20!)  \n//pasar la fecha !05/05/20! como par\xe1metro a SetCalendarDate  \n//en el contexto de un subformulario\n'})}),"\n",(0,o.jsxs)(a.p,{children:["Los datos tambi\xe9n pueden ser ",(0,o.jsx)(a.strong,{children:"devueltos"})," desde m\xe9todos y funciones de clase. Por ejemplo, la siguiente l\xednea de instrucci\xf3n utiliza el comando integrado, ",(0,o.jsx)(a.code,{children:"Length"}),", para devolver la longitud de una cadena. La instrucci\xf3n pone el valor devuelto por ",(0,o.jsx)(a.code,{children:"Length"})," en una variable llamada ",(0,o.jsx)(a.em,{children:"MyLength"}),". Esta es la instrucci\xf3n:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:'MyLength:=Length("How did I get here?")\n'})}),"\n",(0,o.jsx)(a.p,{children:"Toda subrutina puede devolver un valor. S\xf3lo se puede declarar un \xfanico par\xe1metro de salida por m\xe9todo o funci\xf3n de clase."}),"\n",(0,o.jsxs)(a.p,{children:["Los valores de entrada y salida son ",(0,o.jsx)(a.a,{href:"#values-or-references",children:"evaluados"})," en el momento de la llamada y copiados en o desde variables locales dentro de la funci\xf3n o m\xe9todo de la clase llamada. Los par\xe1metros variables deben ser ",(0,o.jsx)(a.a,{href:"#declaring-parameters",children:"declarados"})," en el c\xf3digo llamado."]}),"\n",(0,o.jsx)(a.admonition,{title:"Compatibilidad",type:"info",children:(0,o.jsxs)(a.p,{children:["The legacy declaration syntax, where parameters are automatically copied in sequentially numbered local variables $0, $1, etc. and declared using compiler directives such as ",(0,o.jsx)(a.code,{children:"C_TEXT($1;$2)"}),", is ",(0,o.jsx)(a.strong,{children:"deprecated"})," as of 4D 20 R7."]})}),"\n",(0,o.jsx)(a.h2,{id:"declaraci\xf3n-de-par\xe1metros",children:"Declaraci\xf3n de par\xe1metros"}),"\n",(0,o.jsxs)(a.p,{children:["En los m\xe9todos llamados o en las funciones de clase, los valores de los par\xe1metros se asignan a las variables locales. Generalmente se declararan los par\xe1metros utilizando un ",(0,o.jsx)(a.strong,{children:"nombre de par\xe1metro"})," con un ",(0,o.jsx)(a.strong,{children:"tipo de par\xe1metro"}),", separados por dos puntos."]}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:["For class functions, parameters are declared along with the function prototype, i.e. when using the ",(0,o.jsx)(a.code,{children:"Function"})," or ",(0,o.jsx)(a.code,{children:"Class Constructor"})," keywords."]}),"\n",(0,o.jsxs)(a.li,{children:["Para los m\xe9todos (m\xe9todos proyecto, m\xe9todos objeto formulario, m\xe9todos base y triggers), los par\xe1metros se declaran utilizando la palabra clave ",(0,o.jsx)(a.code,{children:"#DECLARE"})," al principio del c\xf3digo del m\xe9todo."]}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:"Ejemplos:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"Function getArea($width : Integer; $height : Integer) -> $area : Integer\n"})}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:" //myProjectMethod\n#DECLARE ($i : Integer) -> $myResult : Object\n"})}),"\n",(0,o.jsx)(a.p,{children:"Se aplican las siguientes reglas:"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"La l\xednea de declaraci\xf3n debe ser la primera l\xednea del c\xf3digo del m\xe9todo o de la funci\xf3n, de lo contrario se mostrar\xe1 un error (s\xf3lo los comentarios o los saltos de l\xednea pueden preceder la declaraci\xf3n)."}),"\n",(0,o.jsxs)(a.li,{children:["Los nombres de los par\xe1metros deben comenzar con un car\xe1cter ",(0,o.jsx)(a.code,{children:"$"})," y cumplir con ",(0,o.jsx)(a.a,{href:"/docs/es/Concepts/identifiers#object-properties",children:"reglas de denominaci\xf3n de las propiedades"}),"."]}),"\n",(0,o.jsx)(a.li,{children:"M\xfaltiples par\xe1metros (y tipos) est\xe1n separados por punto y coma (;)."}),"\n",(0,o.jsx)(a.li,{children:'Las sintaxis multil\xednea est\xe1n soportadas (utilizando el car\xe1cter "\\").'}),"\n"]}),"\n",(0,o.jsxs)(a.p,{children:["Por ejemplo, cuando se llama a una funci\xf3n ",(0,o.jsx)(a.code,{children:"getArea()"})," con dos par\xe1metros:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"$area:=$o.getArea(50;100)\n"})}),"\n",(0,o.jsx)(a.p,{children:"En el c\xf3digo de la funci\xf3n clase, el valor de cada par\xe1metro se copia en el par\xe1metro declarado correspondiente:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"// Class: Polygon\nFunction getArea($width : Integer; $height : Integer)-> $area : Integer\n	$area:=$width*$height\n"})}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsxs)(a.p,{children:["Si no se define el tipo, el par\xe1metro se definir\xe1 como ",(0,o.jsx)(a.a,{href:"/docs/es/Concepts/variant",children:(0,o.jsx)(a.code,{children:"Variant"})}),"."]}),"\n"]}),"\n",(0,o.jsxs)(a.p,{children:["Todos los tipos de m\xe9todos de 4D soportan la palabra clave ",(0,o.jsx)(a.code,{children:"#DECLARE"}),", incluidos los m\xe9todos base. Por ejemplo, en el m\xe9todo base ",(0,o.jsx)(a.code,{children:"On Web Authentication"}),", puede declarar par\xe1metros temporales:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:'// M\xe9todo base On Web Authentication\n#DECLARE ($url : Text; $header : Text; \\\n  $BrowserIP : Text; $ServerIP : Text; \\\n  $user : Text; $password : Text) \\\n  -> $RequestAccepted : Boolean\n$entitySelection:=ds.User.query("login=:1"; $user)\n// Verificar la contrase\xf1a hash...\n'})}),"\n",(0,o.jsx)(a.h3,{id:"valor-devuelto",children:"Valor devuelto"}),"\n",(0,o.jsx)(a.p,{children:"El par\xe1metro de retorno de una funci\xf3n se declara a\xf1adiendo una flecha (->) y la definici\xf3n del par\xe1metro despu\xe9s de la lista de par\xe1metros de entrada. Por ejemplo:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"Function add($x : Variant; $y : Integer) -> $result : Integer\n"})}),"\n",(0,o.jsxs)(a.p,{children:["Tambi\xe9n puede declarar el par\xe1metro de retorno a\xf1adiendo s\xf3lo ",(0,o.jsx)(a.code,{children:": type"}),", en cuyo caso puede ser manejado por un ",(0,o.jsx)(a.a,{href:"#return-expression",children:"return"}),". Por ejemplo:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"Function add($x : Variant; $y : Integer): Integer\n	return $x+$y\n"})}),"\n",(0,o.jsxs)(a.admonition,{type:"warning",children:[(0,o.jsx)(a.p,{children:"Los par\xe1metros, que incluyen el valor devuelto, deben declararse una sola vez. En particular, no se puede declarar el mismo par\xe1metro como entrada y salida, incluso con el mismo tipo. Por ejemplo:"}),(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-qs",children:"	//invalid declaration\nFunction myTransform ($x : Integer) -> $x : Integer\n	//error: $x is declared twice\n"})})]}),"\n",(0,o.jsx)(a.h3,{id:"tipos-de-datos-soportados",children:"Tipos de datos soportados"}),"\n",(0,o.jsxs)(a.p,{children:["Con los par\xe1metros con nombre, puede utilizar los mismos tipos de datos que son ",(0,o.jsxs)(a.a,{href:"/docs/es/Concepts/variables#utilizando-la-palabra-clave-var",children:["soportados por la palabra clave ",(0,o.jsx)(a.code,{children:"var"})]}),", incluidos los objetos de clase. Por ejemplo:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"Function saveToFile($entity : cs.ShapesEntity; $file : 4D.File)\n"})}),"\n",(0,o.jsx)(a.admonition,{type:"note",children:(0,o.jsxs)(a.p,{children:["Las expresiones de tablas o arrays s\xf3lo pueden pasarse ",(0,o.jsx)(a.a,{href:"/docs/es/Concepts/pointer#pointers-as-parameters-to-methods",children:"como referencia utilizando un puntero"}),"."]})}),"\n",(0,o.jsx)(a.h3,{id:"inicializaci\xf3n",children:"Inicializaci\xf3n"}),"\n",(0,o.jsxs)(a.p,{children:["Cuando se declaran los par\xe1metros, se inicializan con el ",(0,o.jsx)(a.a,{href:"/docs/es/Concepts/data-types#valores-por-defecto",children:(0,o.jsx)(a.strong,{children:"valor por defecto correspondiente a su tipo"})}),", que mantendr\xe1n durante la sesi\xf3n mientras no hayan sido asignados."]}),"\n",(0,o.jsx)(a.h2,{id:"return-expression",children:(0,o.jsx)(a.code,{children:"return {expression}"})}),"\n",(0,o.jsxs)(a.details,{children:[(0,o.jsx)(a.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(a.table,{children:[(0,o.jsx)(a.thead,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.th,{children:"Lanzamiento"}),(0,o.jsx)(a.th,{children:"Modificaciones"})]})}),(0,o.jsx)(a.tbody,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"19 R4"}),(0,o.jsx)(a.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,o.jsxs)(a.p,{children:["La instrucci\xf3n ",(0,o.jsx)(a.code,{children:"return"})," finaliza la ejecuci\xf3n de una funci\xf3n o de un m\xe9todo y puede utilizarse para devolver una expresi\xf3n a quien la llama."]}),"\n",(0,o.jsx)(a.p,{children:"Por ejemplo, la siguiente funci\xf3n devuelve el cuadrado de su argumento, $x, donde $x es un n\xfamero."}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"Function square($x : Integer) -> $result : Integer\n   return $x * $x\n"})}),"\n",(0,o.jsx)(a.admonition,{type:"note",children:(0,o.jsxs)(a.p,{children:["Internally, ",(0,o.jsx)(a.code,{children:"return x"})," executes ",(0,o.jsx)(a.code,{children:"myReturnValue:=x"}),", and returns to the caller. Si ",(0,o.jsx)(a.code,{children:"return"})," se utiliza sin una expresi\xf3n, la funci\xf3n o el m\xe9todo devuelve un valor nulo del tipo de retorno declarado (si lo hay), de lo contrario ",(0,o.jsx)(a.em,{children:"undefined"}),"."]})}),"\n",(0,o.jsxs)(a.p,{children:["La instrucci\xf3n ",(0,o.jsx)(a.code,{children:"return"})," puede utilizarse junto con la sintaxis est\xe1ndar para los ",(0,o.jsx)(a.a,{href:"#valor-devuelto",children:"valores devueltos"})," (el valor devuelto debe ser del tipo declarado). Sin embargo, hay que tener en cuenta que termina inmediatamente la ejecuci\xf3n del c\xf3digo. Por ejemplo:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"Function getValue -> $v : Integer\n	$v:=10\n	return 20\n	// returns 20\n\nFunction getValue -> $v : Integer\n	return 10\n	$v:=20 // never executed\n	// returns 10\n"})}),"\n",(0,o.jsx)(a.h2,{id:"indirecci\xf3n-de-par\xe1metros-n",children:"Indirecci\xf3n de par\xe1metros (${N})"}),"\n",(0,o.jsxs)(a.p,{children:["Los m\xe9todos y funciones 4D aceptan un n\xfamero variable de par\xe1metros. Puede dirigirse a esos par\xe1metros con un bucle ",(0,o.jsx)(a.code,{children:"For...End for"}),", el comando ",(0,o.jsx)(a.a,{href:"https://doc.4d.com/4dv20/help/command/en/page259.html",children:(0,o.jsx)(a.code,{children:"Count parameters"})})," y la ",(0,o.jsx)(a.strong,{children:"sintaxis de indirecci\xf3n de par\xe1metros"}),". Dentro del m\xe9todo, una direcci\xf3n de indirecci\xf3n tiene el formato ",(0,o.jsx)(a.code,{children:"${N}"}),", donde ",(0,o.jsx)(a.code,{children:"N"})," es una expresi\xf3n num\xe9rica."]}),"\n",(0,o.jsx)(a.h3,{id:"utilizaci\xf3n-de-par\xe1metros-variables",children:"Utilizaci\xf3n de par\xe1metros variables"}),"\n",(0,o.jsx)(a.p,{children:"Por ejemplo, considere un m\xe9todo que suma valores y devuelve la suma formateada seg\xfan un formato que se pasa como par\xe1metro. Cada vez que se llama a este m\xe9todo, el n\xfamero de valores a sumar puede variar. Debemos pasar los valores como par\xe1metros al m\xe9todo y el formato en forma de cadena de caracteres. El n\xfamero de valores puede variar de una llamada a otra."}),"\n",(0,o.jsxs)(a.p,{children:["Aqu\xed est\xe1 el m\xe9todo, llamado ",(0,o.jsx)(a.code,{children:"MySum"}),":"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:" #DECLARE($format : Text) -> $result : Text\n $sum:=0\n For($i;2;Count parameters)\n    $sum:=$sum+${$i}\n End for\n $result:=String($sum;$format)\n"})}),"\n",(0,o.jsx)(a.p,{children:"Los par\xe1metros del m\xe9todo deben pasarse en el orden correcto, primero el formato y luego un n\xfamero variable de valores:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:' Result:=MySum("##0.00";125,2;33,5;24) //"182.70"\n Result:=MySum("000";1;2;200) //"203"\n'})}),"\n",(0,o.jsxs)(a.p,{children:["Tenga en cuenta que aunque haya declarado 0, 1 o m\xe1s par\xe1metros, siempre puede pasar el n\xfamero de par\xe1metros que desee. Los par\xe1metros est\xe1n todos disponibles dentro del c\xf3digo llamado a trav\xe9s de la sintaxis ",(0,o.jsx)(a.code,{children:"${N}"})," y el tipo de par\xe1metros extra es ",(0,o.jsx)(a.a,{href:"/docs/es/Concepts/variant",children:"Variant"})," por defecto (puede declararlos utilizando la ",(0,o.jsx)(a.a,{href:"#declaring-variadic-parameters",children:"notaci\xf3n variadic"}),"). Solo necesita asegurarse de que los par\xe1metros existan, gracias al comando ",(0,o.jsx)(a.a,{href:"https://doc.4d.com/4dv20/help/command/en/page259.html",children:(0,o.jsx)(a.code,{children:"Count parameters"})}),". Por ejemplo:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:'//m\xe9todo foo\n#DECLARE($p1: Text;$p2 : Text; $p3 : Date)\nFor($i;1;Count parameters)\n	ALERT("param "+String($i)+" = "+String(${$i}))\nEnd for\n'})}),"\n",(0,o.jsx)(a.p,{children:"Este m\xe9todo se puede llamar:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:'foo("hello";"world";!01/01/2021!;42;?12:00:00?) //se pasan par\xe1metros adicionales\n'})}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsx)(a.p,{children:"La indirecci\xf3n de par\xe1metros se gestiona mejor si se respeta la siguiente convenci\xf3n: si s\xf3lo algunos de los par\xe1metros se dirigen por indirecci\xf3n, deben pasarse despu\xe9s de los dem\xe1s."}),"\n"]}),"\n",(0,o.jsx)(a.h3,{id:"declaraci\xf3n-de-par\xe1metros-variables",children:"Declaraci\xf3n de par\xe1metros variables"}),"\n",(0,o.jsxs)(a.p,{children:["No es obligatorio declarar par\xe1metros variables. Los par\xe1metros variables no declarados obtienen autom\xe1ticamente el tipo ",(0,o.jsx)(a.a,{href:"/docs/es/Concepts/variant",children:"Variant"}),"."]}),"\n",(0,o.jsx)(a.p,{children:'Sin embargo, para evitar errores de correspondencia de tipos durante la ejecuci\xf3n del c\xf3digo, puede declarar un n\xfamero variable de par\xe1metros utilizando la notaci\xf3n "..." en los prototipos de sus funciones, constructores de clases y m\xe9todos (par\xe1metros variables). Especifique el tipo del par\xe1metro siguiendo la notaci\xf3n "..." con el tipo deseado.'}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"#DECLARE ( ... : Text ) // N\xfamero indefinido de par\xe1metros 'Text'\n\n"})}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"Function myfunction ( ... : Text)\n\n"})}),"\n",(0,o.jsx)(a.p,{children:"Cuando se declaran varios par\xe1metros, debe emplearse la notaci\xf3n variable en la \xfaltima posici\xf3n, por ejemplo:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"#DECLARE ( param: Real ; ... : Text )\n\n"})}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"Function myfunction (var1: Integer ; ... : Text)\n"})}),"\n",(0,o.jsx)(a.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsxs)(a.p,{children:["Aqu\xed tenemos un m\xe9todo llamado ",(0,o.jsx)(a.code,{children:"SumNumbers"})," que devuelve el total calculado para todos los n\xfameros pasados como par\xe1metros:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"\n#DECLARE( ... : Real) : Real\n\n\n\nvar $number; $total : Real\n\nFor each ($number; 1; Count parameters)\n	$total+=${$number}\nEnd for each\n\nreturn $total\n\n"})}),"\n",(0,o.jsx)(a.p,{children:"Este m\xe9todo puede llamarse con un n\xfamero variable de par\xe1metros Real. En caso de que el tipo de par\xe1metro sea incorrecto, se devolver\xe1 un error antes de que se ejecute el m\xe9todo:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:'\n$total1:=SumNumbers // returns 0\n$total2:=SumNumbers(1; 2; 3; 4; 5) // returns 15\n$total3:=SumNumbers(1; 2; "hello"; 4; 5) // error\n\n'})}),"\n",(0,o.jsx)(a.admonition,{title:"Compatibilidad",type:"note",children:(0,o.jsxs)(a.p,{children:["The legacy syntax for declaring variadic parameters (",(0,o.jsx)(a.code,{children:"C_TEXT(${4})"}),") is deprecated as of 4D 20 R7."]})}),"\n",(0,o.jsx)(a.h2,{id:"triggers-y-on-drag-over",children:"Triggers y On Drag Over"}),"\n",(0,o.jsx)(a.p,{children:'Algunos contextos no soportan la declaraci\xf3n en un m\xe9todo "Compiler_", por lo que se tratan de forma espec\xedfica:'}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"Triggers - El par\xe1metro $0 (Entero largo), que es el resultado de un trigger, ser\xe1 digitado por el compilador si el par\xe1metro no ha sido declarado expl\xedcitamente. Sin embargo, si quiere declararlo, debe hacerlo en el propio trigger."}),"\n"]}),"\n",(0,o.jsx)(a.h2,{id:"tipo-de-par\xe1metro-equivocado",children:"Tipo de par\xe1metro equivocado"}),"\n",(0,o.jsxs)(a.p,{children:["Llamar a un par\xe1metro con un tipo incorrecto es un ",(0,o.jsx)(a.a,{href:"/docs/es/Concepts/error-handling",children:"error"})," que impide la correcta ejecuci\xf3n. Por ejemplo, si escribe los siguientes m\xe9todos:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"// method1\n#DECLARE($value : Text)\n"})}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"// method2\nmethod1(42) //tipo incorrecto, texto esperado\n"})}),"\n",(0,o.jsx)(a.p,{children:"Este caso es tratado por 4D en funci\xf3n del contexto:"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:["en ",(0,o.jsx)(a.a,{href:"/docs/es/Concepts/interpreted-compiled",children:"proyectos compilados"}),", se genera un error en el paso de compilaci\xf3n siempre que sea posible. En caso contrario, se genera un error cuando se llama al m\xe9todo."]}),"\n",(0,o.jsxs)(a.li,{children:["en los proyectos interpretados:\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:["si el par\xe1metro se declar\xf3 utilizando la ",(0,o.jsx)(a.a,{href:"#named-parameters",children:"sintaxis nombrada"})," (",(0,o.jsx)(a.code,{children:"#DECLARE"})," o ",(0,o.jsx)(a.code,{children:"Function"}),"), se genera un error cuando se llama al m\xe9todo."]}),"\n",(0,o.jsxs)(a.li,{children:["if the parameter was declared using a legacy (",(0,o.jsx)(a.code,{children:"_C_XXX"}),") syntax, no error is generated, the called method receives an empty value of the expected type."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(a.h2,{id:"utilizaci\xf3n-de-las-propiedades-de-objeto-como-par\xe1metros-con-nombre",children:"Utilizaci\xf3n de las propiedades de objeto como par\xe1metros con nombre"}),"\n",(0,o.jsxs)(a.p,{children:["La utilizaci\xf3n de objetos como par\xe1metros permite manejar ",(0,o.jsx)(a.strong,{children:"par\xe1metros con nombre"}),". Este estilo de programaci\xf3n es simple, flexible y f\xe1cil de leer."]}),"\n",(0,o.jsxs)(a.p,{children:["Por ejemplo, utilizando el m\xe9todo ",(0,o.jsx)(a.code,{children:"CreatePerson"}),":"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:'  //CreatePerson\n var $person : Object\n $person:=New object("Name";"Smith";"Age";40)\n ChangeAge($person)\n ALERT(String($person.Age))  \n'})}),"\n",(0,o.jsxs)(a.p,{children:["En el m\xe9todo ",(0,o.jsx)(a.code,{children:"ChangeAge"})," puede escribir:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:'  //ChangeAge\n #DECLARE ($para : Object)\n $para.Age:=$para.Age+10\n ALERT($para.Name+" is "+String($para.Age)+" years old.")\n'})}),"\n",(0,o.jsxs)(a.p,{children:["Esto ofrece una poderosa manera de definir ",(0,o.jsx)(a.a,{href:"#optional-parameters",children:"par\xe1metros opcionales"})," (ver tambi\xe9n abajo). Para manejar los par\xe1metros que faltan, puede:"]}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:["verificar si se suministran todos los par\xe1metros esperados compar\xe1ndolos con el valor ",(0,o.jsx)(a.code,{children:"Null"}),", o"]}),"\n",(0,o.jsx)(a.li,{children:"predefinir los valores de los par\xe1metros, o"}),"\n",(0,o.jsx)(a.li,{children:"utilizarlos como valores vac\xedos."}),"\n"]}),"\n",(0,o.jsxs)(a.p,{children:["En el m\xe9todo ",(0,o.jsx)(a.code,{children:"ChangeAge"})," anterior, las propiedades Age y Name son obligatorias y producir\xedan errores si faltaran. Para evitar este caso, puede escribir simplemente:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:'  //ChangeAge\n #DECLARE ($para : Object)\n $para.Age:=Num($para.Age)+10\n ALERT(String($para.Name)+" is "+String($para.Age)+" years old.")\n'})}),"\n",(0,o.jsx)(a.p,{children:'Entonces ambos par\xe1metros son opcionales; si no se llenan, el resultado ser\xe1 " is 10 years old", pero no se generar\xe1 ning\xfan error.'}),"\n",(0,o.jsx)(a.p,{children:"Por \xfaltimo, con los par\xe1metros con nombre, el mantenimiento o la reproducci\xf3n de las aplicaciones es muy sencillo y seguro. Imagine que m\xe1s adelante se da cuenta de que a\xf1adir 10 a\xf1os no siempre es apropiado. Necesita otro par\xe1metro para definir cu\xe1ntos a\xf1os hay que a\xf1adir. Escriba:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:'$person:=New object("Name";"Smith";"Age";40;"toAdd";10)\nChangeAge($person)\n\n//ChangeAge\n#DECLARE ($para : Object)  \nIf ($para.toAdd=Null)\n	$para.toAdd:=10\nEnd if\n$para.Age:=Num($para.Age)+$para.toAdd\nALERT(String($para.Name)+" is "+String($para.Age)+" years old.")\n'})}),"\n",(0,o.jsx)(a.p,{children:"El poder aqu\xed es que no tendr\xe1 que cambiar su c\xf3digo existente. Siempre funcionar\xe1 como en la versi\xf3n anterior, pero si es necesario, puede utilizar otro valor que no sea 10 a\xf1os."}),"\n",(0,o.jsx)(a.p,{children:"Con las variables con nombre, cualquier par\xe1metro puede ser opcional. En el ejemplo anterior, todos los par\xe1metros son opcionales y se puede dar cualquiera, en cualquier orden."}),"\n",(0,o.jsx)(a.h2,{id:"par\xe1metros-opcionales",children:"Par\xe1metros opcionales"}),"\n",(0,o.jsxs)(a.p,{children:["En el manual ",(0,o.jsx)(a.em,{children:"Lenguaje de 4D"}),", los caracteres { } (llaves) indican par\xe1metros opcionales. Por ejemplo, ",(0,o.jsx)(a.code,{children:"ALERT (message{; okButtonTitle})"})," significa que el par\xe1metro ",(0,o.jsx)(a.em,{children:"okButtonTitle"})," puede omitirse al llamar al comando. Se puede llamar de las siguientes maneras:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:'ALERT("Are you sure?";"Yes I am") //2 par\xe1metros\nALERT("Time is over") //1 par\xe1metro\n'})}),"\n",(0,o.jsxs)(a.p,{children:["Los m\xe9todos y las funciones 4D tambi\xe9n aceptan estos par\xe1metros opcionales. Tenga en cuenta que aunque haya declarado 0, 1 o m\xe1s par\xe1metros en el m\xe9todo, siempre puede pasar el n\xfamero de par\xe1metros que desee. Si llama a un m\xe9todo o funci\xf3n con menos par\xe1metros que los declarados, los par\xe1metros que faltan se procesan como valores por defecto en el c\xf3digo llamado, ",(0,o.jsx)(a.a,{href:"/docs/es/Concepts/data-types#default-values",children:"seg\xfan su tipo"}),". Por ejemplo:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:'// funci\xf3n "concate" de myClass\nFunction concate ($param1 : Text ; $param2 : Text)->$result : Text\n$result:=$param1+" "+$param2\n'})}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:'  // M\xe9todo llamante\n $class:=cs.myClass.new()\n $class.concate("Hello") // "Hello "\n $class.concate() // Displays " "\n'})}),"\n",(0,o.jsx)(a.admonition,{type:"note",children:(0,o.jsxs)(a.p,{children:["Tambi\xe9n puede llamar a un m\xe9todo o funci\xf3n con m\xe1s par\xe1metros de los declarados. Estar\xe1n disponibles en el c\xf3digo llamado a trav\xe9s de la sintaxis ",(0,o.jsx)(a.a,{href:"#parameter-indirection-n",children:"${N}"}),"."]})}),"\n",(0,o.jsxs)(a.p,{children:["Utilizando el comando ",(0,o.jsx)(a.code,{children:"Count parameters"})," desde dentro del m\xe9todo llamado, puede detectar el n\xfamero real de par\xe1metros y realizar diferentes operaciones dependiendo de lo que haya recibido."]}),"\n",(0,o.jsx)(a.p,{children:"El siguiente ejemplo muestra un mensaje de texto y puede insertar el texto en un documento en el disco o en un \xe1rea de 4D Write Pro:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"// APPEND TEXT Project Method\n// APPEND TEXT ( Text { ; Text { ; Object } } )\n// APPEND TEXT ( Message { ; Path { ; 4DWPArea } } )\n \n #DECLARE ($message : Text; $path : Text; $wpArea : Object)\n  \n ALERT($message)\n If(Count parameters>=3)\n    WP SET TEXT($wpArea;$1;wk append)\n Else\n    If(Count parameters>=2)\n       TEXT TO DOCUMENT($path;$message)\n    End if\n End if\n"})}),"\n",(0,o.jsx)(a.p,{children:"Despu\xe9s de a\xf1adir este m\xe9todo proyecto a su aplicaci\xf3n, puede escribir:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:'APPEND TEXT(vtSomeText) //S\xf3lo mostrar\xe1 el mensaje\nAPPEND TEXT(vtSomeText;$path) //Muestra el mensaje y el anexo al documento en $path\nAPPEND TEXT(vtSomeText;"";$wpArea) //Muestra el mensaje y lo escribe en $wpArea\n'})}),"\n",(0,o.jsx)(a.admonition,{type:"tip",children:(0,o.jsxs)(a.p,{children:["Cuando los par\xe1metros opcionales son necesarios en sus m\xe9todos, tambi\xe9n puede considerar el uso de ",(0,o.jsx)(a.a,{href:"#using-objects-properties-as-named-parameters",children:"propiedades de objeto como par\xe1metros con nombre"})," que ofrecen una forma flexible de manejar un n\xfamero variab"]})}),"\n",(0,o.jsx)(a.h2,{id:"valores-o-referencias",children:"Valores o referencias"}),"\n",(0,o.jsxs)(a.p,{children:["Cuando pasa un par\xe1metro, 4D siempre eval\xfaa la expresi\xf3n del par\xe1metro en el contexto del m\xe9todo que llama y define el ",(0,o.jsx)(a.strong,{children:"valor resultante"})," en las variables locales en la funci\xf3n de clase o la subrutina. Las variables/par\xe1metros locales no son los campos, variables o expresiones reales pasados por el m\xe9todo que llama; s\xf3lo contienen los valores que se han pasado. Las variables/par\xe1metros locales no son los campos, variables o expresiones reales pasados por el m\xe9todo que llama; s\xf3lo contienen los valores que se han pasado. Por ejemplo:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:'	//Aqu\xed hay un c\xf3digo del m\xe9todo MY_METHOD\nDO_SOMETHING([People]Name) ///Digamos [People]El valor del nombre es "williams"\nALERT([People]Name)\n\n	//Aqu\xed est\xe1 el c\xf3digo del m\xe9todo DO_SOMETHING\n #DECLARE($param : Text)\n $param:=Uppercase($param)\n ALERT($param)\n'})}),"\n",(0,o.jsxs)(a.p,{children:["La caja de alerta mostrada por ",(0,o.jsx)(a.code,{children:"DO_SOMETHING"}),' dir\xe1 "WILLIAMS" y la caja de alerta mostrada por ',(0,o.jsx)(a.code,{children:"MY_METHOD"}),' dir\xe1 "williams". The method locally changed the value of the parameter $param, but this does not affect the value of the field ',(0,o.jsx)(a.code,{children:"[People]Name"})," passed as parameter by the method ",(0,o.jsx)(a.code,{children:"MY_METHOD"}),"."]}),"\n",(0,o.jsxs)(a.p,{children:["Hay dos formas de hacer que el m\xe9todo ",(0,o.jsx)(a.code,{children:"DO_SOMETHING"})," cambie el valor del campo:"]}),"\n",(0,o.jsxs)(a.ol,{children:["\n",(0,o.jsx)(a.li,{children:"En lugar de pasar el campo al m\xe9todo, se pasa un puntero al mismo, por lo que se escribir\xeda:"}),"\n"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:'  //Aqu\xed hay un c\xf3digo del m\xe9todo MY_METHOD\nDO_SOMETHING(->[People]Name) ///Digamos [People]El valor del nombre es "williams"\nALERT([People]Last Name)\n\n  //Aqu\xed el c\xf3digo del m\xe9todo DO_SOMETHING\n#DECLARE($param : Text)\n$param->:=Uppercase($param->)\nALERT($param->)\n'})}),"\n",(0,o.jsxs)(a.p,{children:["Aqu\xed el par\xe1metro no es el campo, sino un puntero al mismo. Therefore, within the ",(0,o.jsx)(a.code,{children:"DO SOMETHING"})," method, $param is no longer the value of the field but a pointer to the field. The object ",(0,o.jsx)(a.strong,{children:"referenced"}),' by $param ($param-> in the code above) is the actual field. Por lo tanto, cambiar el objeto referenciado va m\xe1s all\xe1 del alcance de la subrutina, y el campo real se ve afectado. En este ejemplo, las dos cajas de alerta dir\xe1n "WILLIAMS".']}),"\n",(0,o.jsxs)(a.ol,{start:"2",children:["\n",(0,o.jsxs)(a.li,{children:["En lugar de que el m\xe9todo ",(0,o.jsx)(a.code,{children:"DO_SOMETHING"}),' "haga algo", puede reescribir el m\xe9todo para que devuelva un valor. Por lo tanto, escribir\xeda:']}),"\n"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:'	//Aqu\xed hay un c\xf3digo del m\xe9todo MY METHOD\n [People]Name:=DO_SOMETHING([People]Name) ///Digamos [People]El valor del nombre es "williams"\n ALERT([People]Name)\n\n	//Aqu\xed el c\xf3digo del m\xe9todo DO SOMETHING\n #DECLARE ($param : Text) -> ($result : Text)\n $result:=Uppercase($param)\n ALERT($result)\n'})}),"\n",(0,o.jsxs)(a.p,{children:['This second technique of returning a value by a subroutine is called "using a function". Se describe en el p\xe1rrafo ',(0,o.jsx)(a.a,{href:"#returning-values",children:"Valores devueltos"}),"."]}),"\n",(0,o.jsx)(a.h3,{id:"casos-particulares-objetos-y-colecciones",children:"Casos particulares: objetos y colecciones"}),"\n",(0,o.jsxs)(a.p,{children:["Debe prestar atenci\xf3n al hecho de que los tipos de datos Objeto y Colecci\xf3n s\xf3lo pueden manejarse a trav\xe9s de una referencia (es decir, un ",(0,o.jsx)(a.em,{children:"puntero"})," interno)."]}),"\n",(0,o.jsxs)(a.p,{children:["Consequently, when using such data types as parameters, ",(0,o.jsx)(a.code,{children:"$param, $return..."})," do not contain ",(0,o.jsx)(a.em,{children:"values"})," but ",(0,o.jsx)(a.em,{children:"references"}),". Modifying the value of the ",(0,o.jsx)(a.code,{children:"$param, $return..."})," parameters within the subroutine will be propagated wherever the source object or collection is used. Este es el mismo principio que para ",(0,o.jsx)(a.a,{href:"/docs/es/Concepts/pointer#pointers-as-parameters-to-methods",children:"los punteros"}),", excepto que los par\xe1metros ",(0,o.jsx)(a.code,{children:"$param, $return..."})," no necesitan ser desreferenciados en la subrutina."]}),"\n",(0,o.jsxs)(a.p,{children:["Por ejemplo, considere el m\xe9todo ",(0,o.jsx)(a.code,{children:"CreatePerson"})," que crea un objeto y lo env\xeda como par\xe1metro:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:'  //CreatePerson\n var $person : Object\n $person:=New object("Name";"Smith";"Age";40)\n ChangeAge($person)\n ALERT(String($person.Age))  \n'})}),"\n",(0,o.jsxs)(a.p,{children:["El m\xe9todo ",(0,o.jsx)(a.code,{children:"ChangeAge"})," a\xf1ade 10 al atributo Age del objeto recibido"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"  //ChangeAge\n #DECLARE ($person : Object)\n $person.Age:=$person.Age+10\n ALERT(String($person.Age))\n"})}),"\n",(0,o.jsxs)(a.p,{children:["Cuando se ejecuta el m\xe9todo ",(0,o.jsx)(a.code,{children:"CreatePerson"}),', las dos cajas de alerta dir\xe1n "50" ya que la misma referencia de objeto es manejada por ambos m\xe9todos.']}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"4D Server:"}),' cuando se pasan par\xe1metros entre m\xe9todos que no se ejecutan en la misma m\xe1quina (utilizando por ejemplo la opci\xf3n "Ejecutar en el servidor"), las referencias no son utilizables. En estos casos, se env\xedan copias de los par\xe1metros de objetos y colecciones en lugar de referencias.']})]})}function p(e={}){let{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,a,n){n.d(a,{Z:function(){return d},a:function(){return l}});var r=n(667294);let o={},s=r.createContext(o);function l(e){let a=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(s.Provider,{value:a},e.children)}}}]);