"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79872"],{258342:function(e,n,s){s.r(n),s.d(n,{default:()=>j,frontMatter:()=>o,metadata:()=>a,assets:()=>i,toc:()=>t,contentTitle:()=>l});var a=JSON.parse('{"id":"commands-legacy/json-parse","title":"JSON Parse","description":"JSON Parse ( cadenaJSON {; tipo}{; *} ) : any","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/json-parse.md","sourceDirName":"commands-legacy","slug":"/commands/json-parse","permalink":"/docs/es/commands/json-parse","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fjson-parse.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"json-parse","title":"JSON Parse","slug":"/commands/json-parse","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"JSON","permalink":"/docs/es/commands/theme/JSON"},"next":{"title":"JSON PARSE ARRAY","permalink":"/docs/es/commands/json-parse-array"}}'),r=s("785893"),d=s("250065");let o={id:"json-parse",title:"JSON Parse",slug:"/commands/json-parse",displayed_sidebar:"docs"},l=void 0,i={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ejemplo 3",id:"ejemplo-3",level:2},{value:"Ejemplo 4",id:"ejemplo-4",level:2},{value:"Ejemplo 5",id:"ejemplo-5",level:2},{value:"Ejemplo 6",id:"ejemplo-6",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"JSON Parse"})," ( ",(0,r.jsx)(n.em,{children:"cadenaJSON"})," {; ",(0,r.jsx)(n.em,{children:"tipo"}),"}{; *} ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cadenaJSON"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Cadena en JSON a analizar"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tipo"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Tipo en el cual convertir los valores"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Agrega la posici\xf3n de la l\xednea y el desplazamiento de cada propiedad si el valor devuelto es un objeto"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"any, Object"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valores extra\xeddos de la cadena JSON"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"JSON Parse"})," analiza el contenido de una cadena con formato JSON y extrae los valores que puede almacenar en un campo o variable 4D. Este comando deserializa los datos JSON, realiza la acci\xf3n inversa del comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/json-stringify",children:"JSON Stringify"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"cadenaJSON"}),", pase la cadena con formato JSON cuyo contenido desea analizar. Esta cadena debe tener el formato correcto, de lo contrario se genera un error de an\xe1lisis.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"JSON Parse"})," por lo tanto puede ser utilizado para validar cadenas JSON."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),": si utiliza punteros, debe llamar al comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/json-stringify",children:"JSON Stringify"})," antes de llamar a ",(0,r.jsx)(n.strong,{children:"JSON Parse"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Por defecto, si se omite el par\xe1metro ",(0,r.jsx)(n.em,{children:"tipo"}),", 4D intentar\xe1 convertir el valor obtenido en el tipo de la variable o del campo que se utiliza para almacenar los resultados (si se ha definido). De lo contrario, 4D intenta deducir su tipo. Tambi\xe9n puede forzar la interpretaci\xf3n del tipo pasando el par\xe1metro ",(0,r.jsx)(n.em,{children:"tipo"}),": pase una de las siguientes constantes, disponibles en el tema ",(0,r.jsx)(n.em,{children:"Tipos de campos y variables"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is Boolean"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"6"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is collection"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"42"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is date"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is longint"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is object"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"38"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is real"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is text"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is time"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"11"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Notas"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Los valores de tipo Real deben ser incluidos en el rango \xb1 10.421e\xb110"}),"\n",(0,r.jsx)(n.li,{children:"En los valores de tipo de texto, todos los caracteres especiales deben ser escapados, incluyendo las comillas (ver ejemplos)"}),"\n",(0,r.jsxs)(n.li,{children:["Por defecto cuando se utiliza la constante Is date, el comando considera que una cadena fecha contiene una hora local y no GMT. Puede modificar esta configuraci\xf3n utilizando el selector Dates inside objects del comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:['A partir de 4D v16 R6, si la configuraci\xf3n de almacenamiento de fecha actual es "tipo fecha", las cadenas fecha JSON en formato "AAAA-MM-DD" son devueltas autom\xe1ticamente como valores fecha por el comando ',(0,r.jsx)(n.strong,{children:"JSON Parse"}),'. Para m\xe1s informaci\xf3n sobre esta configuraci\xf3n, consulte la opci\xf3n "Utilizar tipo fecha en lugar de formato fecha ISO en objetos" en ',(0,r.jsx)(n.em,{children:"P\xe1gina Compatibilidad"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Un valor de tipo hora se pueden devolver a partir de n\xfameros en cadenas. Por defecto, 4D considera que el valor es un n\xfamero de segundos."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"*"})," y si el par\xe1metro ",(0,r.jsx)(n.em,{children:"cadenaJSON"})," representa un objeto, el objeto devuelto contiene una propiedad adicional llamada __",(0,r.jsx)(n.em,{children:"symbols"})," que da la ruta, posici\xf3n de l\xednea y desplazamiento de l\xednea de cada propiedad y sub-propiedad del objeto. Esta informaci\xf3n puede ser \xfatil para fines de depuraci\xf3n. La estructura de la propiedad __",(0,r.jsx)(n.em,{children:"symbols"})," es:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:"__symbols:{//descripci\xf3n del objeto\n\xa0\xa0 myAtt.mySubAtt...:{ //ruta de la propiedad\n\xa0\xa0\xa0\xa0\xa0 line:10, //n\xfamero de l\xednea de la propiedad\n\xa0\xa0\xa0\xa0\xa0 offset:35 //offset de la propiedad desde el principio de la l\xednea\n\xa0\xa0\xa0\xa0\xa0 }\n\xa0\xa0 }\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," el par\xe1metro ",(0,r.jsx)(n.em,{children:"*"})," se ignora si el valor devuelto no es del ",(0,r.jsx)(n.em,{children:"tipo"})," objeto."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsx)(n.p,{children:"Ejemplos de conversiones simples:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $r : Real\n\xa0$r:=JSON Parse("42.17")\xa0//$r = 42,17 (Real)\n\xa0\n\xa0var $el : Integer\n\xa0$el:=JSON Parse("120.13";Is longint)\xa0//$el=120\n\xa0\n\xa0var $t : Text\n\xa0$t:=JSON Parse("\\"Year 42\\"";Is text)\xa0// $t="Year 42" (text)\n\xa0\n\xa0var $o : Object\n\xa0$o:=JSON Parse("{\\"name\\":\\"john\\"}")\n\xa0\xa0// $o = {"name":"john"} (4D object)\n\xa0\n\xa0var $b : Boolean\n\xa0$b:=JSON Parse("{\\"manager\\":true}";Is Boolean)\xa0// $b=true\n\xa0\n\xa0var $h : Time\n\xa0$h:=JSON Parse("5120";Is time)\xa0//$h=01:25:20\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"Ejemplo de conversi\xf3n de datos de tipo fecha:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$test:=JSON Parse("\\"1990-12-25T12:00:00Z\\"")\n\xa0\xa0// $test="1990-12-25T12:00:00Z"\n\xa0var $date;$date2;$date3 : Date\n\xa0$date:=JSON Parse("\\"2008-01-01T12:00:00Z\\"";Is date)\n\xa0\xa0//$date=01/01/08\n\xa0$date2:=JSON Parse("\\"2017-07-13T23:00:00.000Z\\"";Is date)\n\xa0\xa0//$date2=14/07/17 (Paris time zone)\n\xa0SET DATABASE PARAMETER(Dates inside objects;String type without time zone)\n\xa0$date3:=JSON Parse("\\"2017-07-13T23:00:00.000Z\\"";Is date)\n\xa0\xa0//$date3=13/07/17\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,r.jsx)(n.p,{children:'Si la configuraci\xf3n de almacenamiento de fecha actual es "tipo fecha", puede escribir:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $o : Object\n\xa0var $json : Text\n\xa0var $birthday : Date\n\xa0\n\xa0$json:="{\\"name\\":\\"Marcus\\",\\"birthday\\":\\"2017-10-16\\"}"\n\xa0$o:=JSON Parse($json)\n\xa0$birthday:=$o.birthday\n\xa0\xa0//$birthday=16/10/17\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"}),' para m\xe1s informaci\xf3n sobre esta configuraci\xf3n, consulte la opci\xf3n "Utilizar tipo fecha en lugar de formato de fecha ISO en objetos" en la ',(0,r.jsx)(n.em,{children:"P\xe1gina Compatibilidad"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,r.jsxs)(n.p,{children:["Este ejemplo muestra el uso combinado de los comandos ",(0,r.jsx)(n.a,{href:"/docs/es/commands/json-stringify",children:"JSON Stringify"})," y ",(0,r.jsx)(n.strong,{children:"JSON Parse"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $JSONContact : Text\n\xa0var $Contact;$Contact2 : Object\n\xa0$Contact:=New object("name";"Monroe";"firstname";"Alan")\n\xa0\n\xa0\xa0// JSON Stringify: conversion of an object into a JSON string\n\xa0$JSONContact:=JSON Stringify($Contact)\n\xa0\n\xa0\xa0// JSON Parse: conversion of JSON string into a new object\n\xa0$Contact2:=JSON Parse($JSONContact)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-5",children:"Ejemplo 5"}),"\n",(0,r.jsx)(n.p,{children:"Usted desea crear una colecci\xf3n 4D desde un array JSON:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $myCol : Collection\n\xa0$myCol:=JSON Parse("[\\"Monday\\",10,\\"Tuesday\\",11,\\"Wednesday\\",12,false]")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-6",children:"Ejemplo 6"}),"\n",(0,r.jsx)(n.p,{children:"Usted desea analizar la siguiente cadena y obtener la posici\xf3n de la l\xednea y el desplazamiento de cada propiedad:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "alpha": 4552,\n\xa0\xa0\xa0 "beta": [\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "echo": 45,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "delta": "text1" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 },\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "echo": 52,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "golf": "text2" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\n\xa0\xa0\xa0 ]\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Puede escribir:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $obInfo : Object\n\xa0$obInfo=JSON Parse("json_string";Is object;*)\xa0//* para obtener la propiedad __symbols\n\xa0\xa0//en el objeto $obInfo devuelto\n'})}),"\n",(0,r.jsxs)(n.p,{children:["El objeto ",(0,r.jsx)(n.em,{children:"$obInfo"})," contiene:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:"{alpha:4552,\nbeta:[{echo:45,delta:text1},{echo:52,golf:text2}],\n__symbols:{alpha:{line:2,offset:4},\nbeta:{line:3,offset:4},\nbeta[0].echo:{line:5,offset:12},\nbeta[0].delta:{line:6,offset:12},\nbeta[1].echo:{line:9,offset:12},\nbeta[1].golf:{line:10,offset:12}}}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/json-parse-array",children:"JSON PARSE ARRAY"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/json-stringify",children:"JSON Stringify"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/json-validate",children:"JSON Validate"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Tipos de campos y variables"})]}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"1218"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return o}});var a=s(667294);let r={},d=a.createContext(r);function o(e){let n=a.useContext(d);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);