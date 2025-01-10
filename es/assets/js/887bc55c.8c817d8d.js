"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67218"],{712009:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>o,assets:()=>d,toc:()=>c,contentTitle:()=>i});var o=JSON.parse('{"id":"Concepts/identifiers","title":"Identificadores","description":"Esta secci\xf3n describe las convenciones y reglas para nombrar los distintos elementos del lenguaje 4D (variables, tablas, objetos, formularios, etc.).","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-18/Concepts/identifiers.md","sourceDirName":"Concepts","slug":"/Concepts/identifiers","permalink":"/docs/es/18/Concepts/identifiers","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fidentifiers.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"identifiers","title":"Identificadores"},"sidebar":"docs","previous":{"title":"Plug-ins","permalink":"/docs/es/18/Concepts/plug-ins"},"next":{"title":"Generalidades","permalink":"/docs/es/18/Project/overview"}}'),r=s("785893"),a=s("250065");let l={id:"identifiers",title:"Identificadores"},i=void 0,d={},c=[{value:"Reglas b\xe1sicas",id:"reglas-b\xe1sicas",level:2},{value:"Reglas adicionales para las propiedades de los objetos y los nombres ORDA",id:"reglas-adicionales-para-las-propiedades-de-los-objetos-y-los-nombres-orda",level:3},{value:"Reglas adicionales para SQL",id:"reglas-adicionales-para-sql",level:3},{value:"Tablas",id:"tablas",level:2},{value:"Campos",id:"campos",level:2},{value:"Variables interproceso",id:"variables-interproceso",level:2},{value:"Variables proceso",id:"variables-proceso",level:2},{value:"Variables locales",id:"variables-locales",level:2},{value:"Arrays",id:"arrays",level:2},{value:"Arrays interproceso",id:"arrays-interproceso",level:3},{value:"Arrays proceso",id:"arrays-proceso",level:3},{value:"Arrays locales",id:"arrays-locales",level:3},{value:"Elementos de arrays",id:"elementos-de-arrays",level:3},{value:"Elementos de arrays de dos dimensiones",id:"elementos-de-arrays-de-dos-dimensiones",level:3},{value:"Atributos de objetos",id:"atributos-de-objetos",level:2},{value:"Formularios",id:"formularios",level:2},{value:"Objetos de formularios",id:"objetos-de-formularios",level:2},{value:"M\xe9todos proyecto",id:"m\xe9todos-proyecto",level:2},{value:"Comandos de plug-in",id:"comandos-de-plug-in",level:2},{value:"Conjuntos",id:"conjuntos",level:2},{value:"Conjuntos interproceso",id:"conjuntos-interproceso",level:3},{value:"Conjuntos proceso",id:"conjuntos-proceso",level:3},{value:"Conjuntos clientes",id:"conjuntos-clientes",level:3},{value:"Selecciones temporales",id:"selecciones-temporales",level:2},{value:"Selecciones temporales interproceso",id:"selecciones-temporales-interproceso",level:3},{value:"Selecciones temporales proceso",id:"selecciones-temporales-proceso",level:3},{value:"Procesos",id:"procesos",level:2},{value:"Procesos globales",id:"procesos-globales",level:3},{value:"Procesos locales",id:"procesos-locales",level:3},{value:"Resumen de las convenciones de escritura en 4D",id:"resumen-de-las-convenciones-de-escritura-en-4d",level:2},{value:"Resoluci\xf3n de conflictos de nombres",id:"resoluci\xf3n-de-conflictos-de-nombres",level:2}];function t(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Esta secci\xf3n describe las convenciones y reglas para nombrar los distintos elementos del lenguaje 4D (variables, tablas, objetos, formularios, etc.)."}),"\n",(0,r.jsx)(n.h2,{id:"reglas-b\xe1sicas",children:"Reglas b\xe1sicas"}),"\n",(0,r.jsx)(n.p,{children:"Las siguientes reglas se aplican a todas las estructuras de 4D."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'Un nombre debe comenzar por un car\xe1cter alfab\xe9tico, un gui\xf3n bajo o un d\xf3lar ("$") (tenga en cuenta que un signo de d\xf3lar puede denotar un elemento local, ver).'}),"\n",(0,r.jsx)(n.li,{children:'A partir de ah\xed, el nombre puede incluir caracteres alfab\xe9ticos, num\xe9ricos, el car\xe1cter espacio y el car\xe1cter de subrayado ("_").'}),"\n",(0,r.jsx)(n.li,{children:'Puntos (".") Puntos (".") Puntos (".") Puntos (".") Puntos (".") y corchetes ("[ ]") no est\xe1n permitidos en los nombres de tablas, campos, m\xe9todos o variables.'}),"\n",(0,r.jsx)(n.li,{children:"No se permiten comas, barras inclinadas, comillas ni dos puntos."}),"\n",(0,r.jsx)(n.li,{children:"Los caracteres reservados para su uso como operadores, como * y +, no est\xe1n permitidos."}),"\n",(0,r.jsxs)(n.li,{children:["No utilice nombres reservados, es decir, nombres de comandos 4D (",(0,r.jsx)(n.code,{children:"Date"}),", ",(0,r.jsx)(n.code,{children:"Time"}),", etc.), palabras clave (If, For, etc.) y constantes."]}),"\n",(0,r.jsx)(n.li,{children:"Los espacios finales se ignoran."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"reglas-adicionales-para-las-propiedades-de-los-objetos-y-los-nombres-orda",children:"Reglas adicionales para las propiedades de los objetos y los nombres ORDA"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Los caracteres de espacio no est\xe1n permitidos."}),"\n",(0,r.jsx)(n.li,{children:'Puntos (".") Puntos (".") Puntos (".") Puntos (".") Puntos (".") Puntos (".") Puntos (".") Puntos (".") Periods (".") and brackets ("[ ]") are not allowed.'}),"\n",(0,r.jsx)(n.li,{children:"Los nombres son sensibles a las may\xfasculas y min\xfasculas."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"reglas-adicionales-para-sql",children:"Reglas adicionales para SQL"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"S\xf3lo se aceptan los caracteres _0123456789abcdefghijklmnopqrstuvwxyz"}),"\n",(0,r.jsx)(n.li,{children:"Los nombres no deben incluir ninguna palabra clave SQL (comando, atributo, etc.)."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"}),' el \xe1rea "SQL" del Inspector en el editor de estructuras indica autom\xe1ticamente cualquier car\xe1cter no autorizado en el nombre de una tabla o campo.']}),"\n",(0,r.jsx)(n.h2,{id:"tablas",children:"Tablas"}),"\n",(0,r.jsx)(n.p,{children:"Una tabla se designa colocando su nombre entre par\xe9ntesis: [...]. Un nombre de tabla puede contener hasta 31 caracteres."}),"\n",(0,r.jsx)(n.p,{children:"Ejemplos:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'DEFAULT TABLE([Orders])\nFORM SET INPUT([Clients];"Entry")\nADD RECORD([Letters])\n'})}),"\n",(0,r.jsx)(n.h2,{id:"campos",children:"Campos"}),"\n",(0,r.jsx)(n.p,{children:"Para designar un campo hay que especificar primero la tabla a la que pertenece. El nombre del campo va inmediatamente despu\xe9s del nombre de la tabla. Un nombre de campo puede contener hasta 31 caracteres."}),"\n",(0,r.jsx)(n.p,{children:"Ejemplos:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'[Orders]Total:=Sum([Line]Amount)\nQUERY([Clients];[Clients]Name="Smith")\n[Letters]Text:=Capitalize text([Letters]Text)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"variables-interproceso",children:"Variables interproceso"}),"\n",(0,r.jsxs)(n.p,{children:["Una variable interproceso se designa precediendo el nombre de la variable con los s\xedmbolos (",(0,r.jsx)(n.code,{children:"<>"}),') \u2014 un signo "menor que" seguido de un signo "mayor que".']}),"\n",(0,r.jsxs)(n.p,{children:["El nombre de una variable interproceso puede tener hasta 31 caracteres, sin incluir los s\xedmbolos ",(0,r.jsx)(n.code,{children:"<>"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Ejemplos:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'<>vlProcessID:=Current process\n<>vsKey:=Char(KeyCode)\nIf(<>vtName#"")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"variables-proceso",children:"Variables proceso"}),"\n",(0,r.jsxs)(n.p,{children:["Una variable de proceso se designa con su nombre (que no puede empezar con los s\xedmbolos ",(0,r.jsx)(n.code,{children:"<>"})," ni el signo d\xf3lar $). Un nombre de variable proceso puede contener hasta 31 caracteres."]}),"\n",(0,r.jsx)(n.p,{children:"Ejemplos:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'<>vrGrandTotal:=Sum([Accounts]Amount)\nIf(bValidate=1)\nvsCurrentName:=""\n'})}),"\n",(0,r.jsx)(n.h2,{id:"variables-locales",children:"Variables locales"}),"\n",(0,r.jsx)(n.p,{children:"Una variable local se designa colocando un signo de d\xf3lar ($) antes del nombre de la variable. Un nombre de variable local puede contener hasta 31 caracteres, sin incluir el signo del d\xf3lar."}),"\n",(0,r.jsx)(n.p,{children:"Ejemplos:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'For($vlRecord;1;100)\nIf($vsTempVar="No")\n$vsMyString:="Hola"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"arrays",children:"Arrays"}),"\n",(0,r.jsx)(n.p,{children:"Un array se designa escribiendo su nombre, que es el nombre que se pasa a un comando de declaraci\xf3n de array (como ARRAY LONGINT) cuando se crea el array. Los arrays son variables, y desde el punto de vista del alcance, al igual que las variables, hay tres tipos diferentes de arrays:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Arrays interproceso,"}),"\n",(0,r.jsx)(n.li,{children:"Arrays proceso,"}),"\n",(0,r.jsx)(n.li,{children:"Arrays locales."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"arrays-interproceso",children:"Arrays interproceso"}),"\n",(0,r.jsxs)(n.p,{children:["El nombre de un array interproceso va precedido de los s\xedmbolos (",(0,r.jsx)(n.code,{children:"<>"}),') - un signo "menor que" seguido de un signo "mayor que".']}),"\n",(0,r.jsxs)(n.p,{children:["Un nombre de array interproceso puede contener hasta 31 caracteres, sin incluir los s\xedmbolos ",(0,r.jsx)(n.code,{children:"<>"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Ejemplos:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"ARRAY TEXT(<>atSubjects;Records in table([Topics]))\nSORT ARRAY(<>asKeywords;>)\nARRAY INTEGER(<>aiBigArray;10000)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"arrays-proceso",children:"Arrays proceso"}),"\n",(0,r.jsxs)(n.p,{children:["Un array proceso se designa con su nombre (que no puede empezar con los s\xedmbolos ",(0,r.jsx)(n.code,{children:"<>"})," ni el signo d\xf3lar $). Un nombre de array proceso puede contener hasta 31 caracteres."]}),"\n",(0,r.jsx)(n.p,{children:"Ejemplos:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"ARRAY TEXT(atSubjects;Records in table([Topics]))\nSORT ARRAY(asKeywords;>)\nARRAY INTEGER(aiBigArray;10000)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"arrays-locales",children:"Arrays locales"}),"\n",(0,r.jsx)(n.p,{children:"El nombre de un array local va precedido del signo de d\xf3lar ($). Un nombre de array local puede contener hasta 31 caracteres, sin incluir el signo del d\xf3lar."}),"\n",(0,r.jsx)(n.p,{children:"Ejemplos:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"ARRAY TEXT($atSubjects;Records in table([Topics]))\nSORT ARRAY($asKeywords;>)\nARRAY INTEGER($aiBigArray;10000)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"elementos-de-arrays",children:"Elementos de arrays"}),"\n",(0,r.jsx)(n.p,{children:'La referencia a un elemento de un array local, proceso o interproceso se realiza mediante llaves ("{ }"). El elemento al que se hace referencia se indica con una expresi\xf3n num\xe9rica.'}),"\n",(0,r.jsx)(n.p,{children:"Ejemplos:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' //Direccionar un elemento de un array interproceso\nIf(<>asKeywords{1}="Stop")\n<>atSubjects{$vlElem}:=[Topics]Subject\n$viNextValue:=<>aiBigArray{Size of array(<>aiBigArray)}\n\n //Direccionar un elemento de un array proceso\nIf(asKeywords{1}="Stop")\natSubjects{$vlElem}:=[Topics]Subject\n$viNextValue:=aiBigArray{Size of array(aiBigArray)}\n\n //Direccionar un elemento de un array local\nIf($asKeywords{1}="Stop")\n$atSubjects{$vlElem}:=[Topics]Subject\n$viNextValue:=$aiBigArray{Size of array($aiBigArray)}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"elementos-de-arrays-de-dos-dimensiones",children:"Elementos de arrays de dos dimensiones"}),"\n",(0,r.jsx)(n.p,{children:"You reference an element of a two-dimensional array by using the curly braces ({\u2026}) twice. dos veces. El elemento al que se hace referencia se denota mediante dos expresiones num\xe9ricas en dos pares de llaves."}),"\n",(0,r.jsx)(n.p,{children:"Ejemplos:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' //Direccionamiento de un elemento de un array interproceso de dos dimensiones \nIf(<>asKeywords{$vlNextRow}{1}="Stop")\n<>atSubjects{10}{$vlElem}:=[Topics]Subject\n$viNextValue:=<>aiBigArray{$vlSet}{Size of array(<>aiBigArray{$vlSet})}\n\n //Direccionar un elemento de una array proceso de dos dimensiones\nIf(asKeywords{$vlNextRow}{1}="Stop")\natSubjects{10}{$vlElem}:=[Topics]Subject\n$viNextValue:=aiBigArray{$vlSet}{Size of array(aiBigArray{$vlSet})}\n\n //Direccionar un elemento de un array local de dos dimensiones\nIf($asKeywords{$vlNextRow}{1}="Stop")\n$atSubjects{10}{$vlElem}:=[Topics]Subject\n$viNextValue:=$aiBigArray{$vlSet}{Size of array($aiBigArray{$vlSet})}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"atributos-de-objetos",children:"Atributos de objetos"}),"\n",(0,r.jsx)(n.p,{children:'When object notation is enabled, you designate an object attribute (also called object property) by placing a point (".") between the name of the object (or attribute) and the name of the attribute. entre el nombre del objeto (o del atributo) y el nombre del atributo. Un nombre de atributo puede contener hasta 255 caracteres y es sensible a las may\xfasculas y min\xfasculas.'}),"\n",(0,r.jsx)(n.p,{children:"Ejemplos:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'myObject.myAttribute:="10"\n$value:=$clientObj.data.address.city\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," se aplican reglas adicionales a los nombres de atributos de objetos (deben ajustarse a la especificaci\xf3n ECMAScript). Para m\xe1s informaci\xf3n, consulte ",(0,r.jsx)(n.a,{href:"/docs/es/18/Concepts/object#object-property-identifiers",children:"Identificadores de propiedades de objetos"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"formularios",children:"Formularios"}),"\n",(0,r.jsx)(n.p,{children:"Un formulario se designa mediante una expresi\xf3n de tipo cadena que representa su nombre. Un nombre de formulario puede contener hasta 31 caracteres."}),"\n",(0,r.jsx)(n.p,{children:"Ejemplos:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'FORM SET INPUT([People];"Input")\nFORM SET OUTPUT([People];"Output")\nDIALOG([Storage];"Note box"+String($vlStage))\n'})}),"\n",(0,r.jsx)(n.h2,{id:"objetos-de-formularios",children:"Objetos de formularios"}),"\n",(0,r.jsx)(n.p,{children:"Se designa un objeto de formulario pasando su nombre como una cadena, precedida por el par\xe1metro *. Un nombre de objeto de formulario puede contener hasta 255 caracteres."}),"\n",(0,r.jsx)(n.p,{children:"Ejemplo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'OBJECT SET FONT(*;"Binfo";"Times")\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," no confunda los objetos de formulario (botones, list boxes, variables editables, etc.) y los objetos del lenguaje 4D. Los objetos del lenguaje 4D se crean y manipulan a trav\xe9s de la notaci\xf3n de objetos o de comandos dedicados."]}),"\n",(0,r.jsx)(n.h2,{id:"m\xe9todos-proyecto",children:"M\xe9todos proyecto"}),"\n",(0,r.jsx)(n.p,{children:"Un m\xe9todo proyecto (procedimiento o funci\xf3n) se designa utilizando su nombre. Un nombre de m\xe9todo puede contener hasta 31 caracteres."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," un m\xe9todo proyecto que no devuelve un resultado tambi\xe9n se llama un procedimiento. Un m\xe9todo proyecto que devuelve un resultado tambi\xe9n se denomina funci\xf3n."]}),"\n",(0,r.jsx)(n.p,{children:"Ejemplos:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"If(New client)\nDELETE DUPLICATED VALUES\nAPPLY TO SELECTION([Employees];INCREASE SALARIES)\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Consejo:"})," es una buena t\xe9cnica de programaci\xf3n adoptar la misma convenci\xf3n de nomenclatura que la utilizada por 4D para los m\xe9todos integrados. Utilice may\xfasculas para nombrar sus m\xe9todos; sin embargo, si un m\xe9todo es una funci\xf3n, ponga en may\xfascula el primer car\xe1cter de su nombre. De este modo, cuando vuelva a abrir una base para su mantenimiento despu\xe9s de unos meses, ya sabr\xe1 si un m\xe9todo devuelve un resultado simplemente mirando su nombre en la ventana del Explorador."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," cuando llame a un m\xe9todo, s\xf3lo tiene que escribir su nombre. Sin embargo, algunos comandos integrados en 4D, como ",(0,r.jsx)(n.code,{children:"ON EVENT CALL"}),", as\xed como todos los comandos del Plug-In, esperan el nombre de un m\xe9todo como una cadena cuando se pasa un par\xe1metro de tipo m\xe9todo. Ejemplo:"]}),"\n",(0,r.jsx)(n.p,{children:"Ejemplos:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' //Este comando espera un m\xe9todo (funci\xf3n) o una f\xf3rmula\nQUERY BY FORMULA([aTable];Special query)\n //Este comando espera un m\xe9todo (procedimiento) o una instrucci\xf3n\nAPPLY TO SELECTION([Employees];INCREASE SALARIES)\n //Pero este comando espera un nombre de m\xe9todo\nON EVENT CALL("HANDLE EVENTS")\n'})}),"\n",(0,r.jsx)(n.p,{children:"Los m\xe9todos proyecto pueden aceptar par\xe1metros (argumentos). Los par\xe1metros se pasan al m\xe9todo entre par\xe9ntesis, a continuaci\xf3n del nombre del m\xe9todo. Cada par\xe1metro est\xe1 separado del siguiente por un punto y coma (;). Los par\xe1metros est\xe1n disponibles dentro del m\xe9todo llamado como variables locales numeradas secuencialmente: $1, $2,..., $n. The parameters are passed to the method in parentheses, following the name of the method."}),"\n",(0,r.jsx)(n.p,{children:"Dentro de una funci\xf3n, la variable local $0 contiene el valor a devolver."}),"\n",(0,r.jsx)(n.p,{children:"Ejemplos:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' //Dentro de DROP SPACES $1 es un puntero al campo [People]Name\nDROP SPACES(->[People]Name)\n\n //Dentro de Calc creator:\n //- $1 es num\xe9rico e igual a 1\n //- $2 es num\xe9rico e igual a 5\n //- $3 es texto o cadena e igual a "Nice"\n //- El valor resultante se asigna a $0\n$vsResult:=Calc creator(1;5; "Nice")\n\n //Dentro de Dump:\n //- Los tres par\xe1metros son texto o cadena\n //- Pueden direccionarse como $1, $2 o $3\n //- Tambi\xe9n pueden direccionarse como, por ejemplo, ${$vlParam} donde $vlParam es 1, 2 o 3\n //- El valor resultante se asigna a $0\nvtClone:=Dump("is";"the";"it")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"comandos-de-plug-in",children:"Comandos de plug-in"}),"\n",(0,r.jsx)(n.p,{children:"Para designar un comando de plug-in se utiliza su nombre, tal y como lo define el plug-in. El nombre de un comando plug-in puede contener hasta 31 caracteres."}),"\n",(0,r.jsx)(n.p,{children:"Ejemplos:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'$error:=SMTP_From($smtp_id;"henry@gmail.com")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"conjuntos",children:"Conjuntos"}),"\n",(0,r.jsx)(n.p,{children:"Desde el punto de vista del alcance, hay dos tipos de conjuntos:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Conjuntos interproceso"}),"\n",(0,r.jsx)(n.li,{children:"Conjuntos proceso"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"4D Server tambi\xe9n incluye:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Conjuntos clientes"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"conjuntos-interproceso",children:"Conjuntos interproceso"}),"\n",(0,r.jsxs)(n.p,{children:["Un conjunto es un conjunto interproceso cuando el nombre del conjunto est\xe1 precedido por los s\xedmbolos (",(0,r.jsx)(n.code,{children:"<>"}),') - un signo "menor que" seguido de un signo "mayor que".']}),"\n",(0,r.jsxs)(n.p,{children:["Un nombre de conjunto interproceso puede contener hasta 255 caracteres, sin incluir los s\xedmbolos ",(0,r.jsx)(n.code,{children:"<>"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"conjuntos-proceso",children:"Conjuntos proceso"}),"\n",(0,r.jsxs)(n.p,{children:["Para designar un conjunto de procesos utilizando una expresi\xf3n de cadena que representa su nombre (que no puede comenzar con los s\xedmbolos ",(0,r.jsx)(n.code,{children:"<>"})," ni con el signo de d\xf3lar $). El nombre de un conjunto proceso puede contener hasta 255 caracteres."]}),"\n",(0,r.jsx)(n.h3,{id:"conjuntos-clientes",children:"Conjuntos clientes"}),"\n",(0,r.jsx)(n.p,{children:"El nombre de un conjunto cliente debe ser precedido del signo de d\xf3lar ($). Un nombre de conjunto cliente puede contener hasta 255 caracteres, sin incluir el signo del d\xf3lar."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," los conjuntos son mantenidos por el equipo servidor. En algunos casos, por eficiencia o por motivos especiales, es posible que necesite trabajar con conjuntos localmente en los equipos clientes. Para ello, utilice los conjuntos clientes."]}),"\n",(0,r.jsx)(n.p,{children:"Ejemplos:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' //Conjuntos interproceso\nUSE SET("<>Deleted Records")\nCREATE SET([Customers];"<>Customer Orders")\nIf(Records in set("<>Selection"+String($i))>0)\n //Conjuntos proceso\nUSE SET("Deleted Records")\nCREATE SET([Customers];"Customer Orders")\nIf(Records in set("<>Selection"+String($i))>0)\n //Conjuntos cliente\nUSE SET("$Deleted Records")\nCREATE SET([Customers];"$Customer Orders")\nIf(Records in set("$Selection"+String($i))>0)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"selecciones-temporales",children:"Selecciones temporales"}),"\n",(0,r.jsx)(n.p,{children:"Desde el punto de vista del alcance, hay dos tipos de selecciones temporales:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Selecciones temporales interproceso"}),"\n",(0,r.jsx)(n.li,{children:"Selecciones temporales proceso."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"selecciones-temporales-interproceso",children:"Selecciones temporales interproceso"}),"\n",(0,r.jsxs)(n.p,{children:["Una selecci\xf3n temporal es una selecci\xf3n temporal interproceso si su nombre va precedido de los s\xedmbolos (",(0,r.jsx)(n.code,{children:"<>"}),') - un signo "menor que" seguido de un signo "mayor que".']}),"\n",(0,r.jsxs)(n.p,{children:["Un nombre de selecci\xf3n temporal interproceso puede contener hasta 255 caracteres, sin incluir los s\xedmbolos ",(0,r.jsx)(n.code,{children:"<>"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"selecciones-temporales-proceso",children:"Selecciones temporales proceso"}),"\n",(0,r.jsxs)(n.p,{children:["Una selecci\xf3n temporal proceso se designa mediante una expresi\xf3n de cadena que representa su nombre (que no puede comenzar con los s\xedmbolos ",(0,r.jsx)(n.code,{children:"<>"})," ni con el signo de d\xf3lar $). El nombre de una selecci\xf3n temporal puede contener hasta 255 caracteres."]}),"\n",(0,r.jsx)(n.p,{children:"Ejemplos:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' //Selecci\xf3n temporal interproceso\nUSE NAMED SELECTION([Customers];"<>ByZipcode")\n //Selecci\xf3n temporal proceso\nUSE NAMED SELECTION([Customers];"<>ByZipcode")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"procesos",children:"Procesos"}),"\n",(0,r.jsx)(n.p,{children:"En modo monopuesto, o en Cliente/Servidor del lado del Cliente, hay dos tipos de procesos:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Procesos globales"}),"\n",(0,r.jsx)(n.li,{children:"Procesos locales."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"procesos-globales",children:"Procesos globales"}),"\n",(0,r.jsx)(n.p,{children:"Un proceso global se designa mediante una expresi\xf3n de tipo cadena que representa su nombre (que no puede comenzar con el signo de d\xf3lar $). El nombre de un proceso puede contener hasta 255 caracteres."}),"\n",(0,r.jsx)(n.h3,{id:"procesos-locales",children:"Procesos locales"}),"\n",(0,r.jsx)(n.p,{children:"Se denota un proceso local si el nombre del proceso est\xe1 precedido por el signo del d\xf3lar ($). El nombre de un proceso puede contener hasta 255 caracteres, sin incluir el signo del d\xf3lar."}),"\n",(0,r.jsx)(n.p,{children:"Ejemplos:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' //Lanzar el proceso global "Add Customers"\n$vlProcessID:=New process("P_ADD_CUSTOMERS";48*1024;"Add Customers")\n //Iniciar el proceso local "$Follow Mouse Moves"\n$vlProcessID:=New process("P_MOUSE_SNIFFER";16*1024;"$Follow Mouse Moves")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"resumen-de-las-convenciones-de-escritura-en-4d",children:"Resumen de las convenciones de escritura en 4D"}),"\n",(0,r.jsx)(n.p,{children:"La siguiente tabla resume las convenciones de denominaci\xf3n de 4D."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Identificador"}),(0,r.jsx)(n.th,{children:"Longitud Max. Max."}),(0,r.jsx)(n.th,{children:"Ejemplo"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Tabla"}),(0,r.jsx)(n.td,{children:"31"}),(0,r.jsx)(n.td,{children:"[Invoices]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Campo"}),(0,r.jsx)(n.td,{children:"31"}),(0,r.jsx)(n.td,{children:"[Employees]Last Name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Variable/array interproceso"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"<>"})," + 31"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<>vlNextProcessID"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Variable/Array proceso"}),(0,r.jsx)(n.td,{children:"31"}),(0,r.jsx)(n.td,{children:"vsCurrentName"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Variable/Array local"}),(0,r.jsx)(n.td,{children:"$ + 31"}),(0,r.jsx)(n.td,{children:"$vlLocalCounter"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Propiedades de objetos"}),(0,r.jsx)(n.td,{children:"255"}),(0,r.jsx)(n.td,{children:"$o.myAttribute"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Formulario"}),(0,r.jsx)(n.td,{children:"31"}),(0,r.jsx)(n.td,{children:'"My Custom Web Input"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Objetos de formulario"}),(0,r.jsx)(n.td,{children:"255"}),(0,r.jsx)(n.td,{children:'"MyButton"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"M\xe9todos proyecto"}),(0,r.jsx)(n.td,{children:"31"}),(0,r.jsx)(n.td,{children:"M_ADD_CUSTOMERS"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Comando de plug-in"}),(0,r.jsx)(n.td,{children:"31"}),(0,r.jsx)(n.td,{children:"PDF SET ROTATION"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Conjuntos interproceso"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"<>"})," + 255"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'"<>Records to be Archived"'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Conjuntos proceso"}),(0,r.jsx)(n.td,{children:"255"}),(0,r.jsx)(n.td,{children:'"Current selected records"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Conjunto cliente"}),(0,r.jsx)(n.td,{children:"$ + 255"}),(0,r.jsx)(n.td,{children:'"$Previous Subjects"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Selecci\xf3n temporal"}),(0,r.jsx)(n.td,{children:"255"}),(0,r.jsx)(n.td,{children:'"Employees A to Z"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Selecci\xf3n temporal interproceso"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"<>"})," + 255"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'"<>Employees Z to A"'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Proceso local"}),(0,r.jsx)(n.td,{children:"$ + 255"}),(0,r.jsx)(n.td,{children:'"$Follow Events"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Proceso global"}),(0,r.jsx)(n.td,{children:"255"}),(0,r.jsxs)(n.td,{children:['"',(0,r.jsx)(n.em,{children:"P_INVOICES_MODULE"}),'"']})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Sem\xe1foro"}),(0,r.jsx)(n.td,{children:"255"}),(0,r.jsx)(n.td,{children:'"mysemaphore"'})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," si se utilizan caracteres no romanos en los nombres de los identificadores, su longitud m\xe1xima puede ser menor."]}),"\n",(0,r.jsx)(n.h2,{id:"resoluci\xf3n-de-conflictos-de-nombres",children:"Resoluci\xf3n de conflictos de nombres"}),"\n",(0,r.jsx)(n.p,{children:"Aseg\xfarese de utilizar nombres \xfanicos para los diferentes elementos de su base. Si un objeto particular tiene el mismo nombre que otro objeto de diferente tipo (por ejemplo, si un campo se llama Persona y una variable tambi\xe9n se llama Persona), 4D utiliza un sistema de prioridad."}),"\n",(0,r.jsx)(n.p,{children:"4D identifica los nombres utilizados en los m\xe9todos en funci\xf3n del siguiente orden de prioridad:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Campos"}),"\n",(0,r.jsx)(n.li,{children:"Comandos"}),"\n",(0,r.jsx)(n.li,{children:"M\xe9todos"}),"\n",(0,r.jsx)(n.li,{children:"Comandos de plug-in"}),"\n",(0,r.jsx)(n.li,{children:"Constantes predefinidas"}),"\n",(0,r.jsx)(n.li,{children:"Variables."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Por ejemplo, 4D tiene un comando integrado llamado ",(0,r.jsx)(n.code,{children:"Date"}),". Si llama a un m\xe9todo ",(0,r.jsx)(n.em,{children:"Date"}),", 4D lo reconocer\xe1 como el comando integrado ",(0,r.jsx)(n.code,{children:"Date"}),", y no como su m\xe9todo. Esto le impedir\xeda llamar a su m\xe9todo. Sin embargo, si llama a un campo \u201CDate\u201D, 4D intentar\xe1 utilizar su campo en lugar del comando ",(0,r.jsx)(n.code,{children:"Date"}),"."]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var o=s(667294);let r={},a=o.createContext(r);function l(e){let n=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);