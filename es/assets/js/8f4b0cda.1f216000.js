"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34711"],{126261:function(e,n,a){a.r(n),a.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/date","title":"Date","description":"Date ( expresion ) : Date","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/date.md","sourceDirName":"commands-legacy","slug":"/commands/date","permalink":"/docs/es/commands/date","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdate.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"date","title":"Date","slug":"/commands/date","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Current time","permalink":"/docs/es/commands/current-time"},"next":{"title":"Day number","permalink":"/docs/es/commands/day-number"}}'),o=a("785893"),r=a("250065");let t={id:"date",title:"Date",slug:"/commands/date",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ejemplo 3",id:"ejemplo-3",level:2},{value:"Ejemplo 4",id:"ejemplo-4",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Date"})," ( ",(0,o.jsx)(n.em,{children:"expresion"})," ) : Date"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"expresion"}),(0,o.jsx)(n.td,{children:"Text, Date"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Cadena que contiene la fecha a devolver"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultado"}),(0,o.jsx)(n.td,{children:"Date"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Fecha"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando Date eval\xfaa ",(0,o.jsx)(n.em,{children:"expresion"})," y devuelve una fecha."]}),"\n",(0,o.jsxs)(n.p,{children:["El par\xe1metro ",(0,o.jsx)(n.em,{children:"expresion"})," debe respetar el formato fecha ISO o los par\xe1metros regionales del sistema."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Formato fecha ISO"}),(0,o.jsx)(n.br,{}),'\nLa cadena debe estar en el formato: "AAAA-MM-DD',(0,o.jsx)(n.strong,{children:"T"}),'HH:MM:SS", por ejemplo "2013-11-20T10:20:00". En este caso, ',(0,o.jsx)(n.strong,{children:"Date"})," eval\xfaa el par\xe1metro ",(0,o.jsx)(n.em,{children:"expresion"}),' correctamente, sin importar la configuraci\xf3n de lenguaje actual. Los decimales de segundos, precedidos por un punto, se soportan (ejemplo: "2013-11-20T10:20:00.9854").',(0,o.jsx)(n.br,{}),"\nSi el formato ",(0,o.jsx)(n.em,{children:"expresion"})," no respeta este esquema ISO, luego la fecha se eval\xfaa como un formato fecha corto basado en los par\xe1metros regionales del sistema."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"}),' a partir de 4D v14, se recomienda utilizar el formato "YYYY-MM-DDTHH:MM:SS',(0,o.jsx)(n.strong,{children:"Z"}),'", conforme a la norma ISO y permiti\xe9ndole expresar la zona horaria.']}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Par\xe1metros regionales"}),(0,o.jsx)(n.br,{}),"\nSi ",(0,o.jsx)(n.em,{children:"expresion"})," no corresponde al formato ISO, los par\xe1metros regionales definidos en el sistema operativo para una fecha corta son utilizados para la evaluaci\xf3n. Por ejemplo, en la versi\xf3n en espa\xf1ol de 4D, por defecto la fecha debe estar en el orden MM/DD/AA (mes, d\xeda, a\xf1o). El mes y el d\xeda pueden tener uno o dos d\xedgitos. El a\xf1o puede ser de dos o cuatro d\xedgitos. Si el a\xf1o es de dos d\xedgitos, entonces Date considera si la fecha pertenece al siglo 20 o 21 en funci\xf3n del valor introducido. Por defecto el valor pivote es 30:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"si el valor introducido es superior o igual a 30, 4D considera que la fecha pertenece al siglo 20 y a\xf1ade 19 delante del valor."}),"\n",(0,o.jsx)(n.li,{children:"si el valor introducido es inferior a 30, 4D considera que la fecha pertenece al siglo 21 y a\xf1ade 20 delante del valor."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Este mecanismo puede configurarse utilizando el comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/set-default-century",children:"SET DEFAULT CENTURY"}),".",(0,o.jsx)(n.br,{}),"\nLos siguientes caracteres son separadores de fecha v\xe1lidos: barra oblicua (/), espacio, punto (.), coma (,) y gui\xf3n (-)."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:['Si se pasa una fecha invalida (tal como "13/35/94" o "aa/12/94") en ',(0,o.jsx)(n.em,{children:"expresion"}),", ",(0,o.jsx)(n.strong,{children:"Date"})," devolver\xe1 una fecha vac\xeda (!00/00/00!). Es su responsabilidad verificar que ",(0,o.jsx)(n.em,{children:"expresion"})," sea una fecha v\xe1lida."]}),"\n",(0,o.jsxs)(n.li,{children:["Si la expresi\xf3n ",(0,o.jsx)(n.em,{children:"expresion"})," se eval\xfaa como indefinida, ",(0,o.jsx)(n.strong,{children:"Date"})," devuelve una fecha vac\xeda (!00/00/00!). Esto es \xfatil cuando se espera que el resultado de una expresi\xf3n (por ejemplo, un atributo objeto) sea una fecha, incluso si puede ser indefinido (por ejemplo un atributo objeto)."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota"}),": a partir de 4D v16 R6, las fechas pueden almacenarse en atributos objeto como valores de tipo de fecha. En versiones anteriores, solo pod\xedan almacenarse como cadenas (para m\xe1s informaci\xf3n sobre esta opci\xf3n, consulte la secci\xf3n ",(0,o.jsx)(n.em,{children:"P\xe1gina Compatibilidad"}),', "Utilizar el tipo fecha en lugar del formato fecha ISO en los objetos"). Para saber si un atributo contiene una fecha almacenada como una cadena o como una fecha, debe usar el comando ',(0,o.jsx)(n.a,{href:"/docs/es/commands/value-type",children:"Value type"})," (ver el \xfaltimo ejemplo)."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Expresi\xf3n tipo fecha"}),(0,o.jsx)(n.br,{}),"\nSi la ",(0,o.jsx)(n.em,{children:"expresion"})," es del tipo de fecha, ",(0,o.jsx)(n.strong,{children:"Date"})," devuelve la fecha pasada en el par\xe1metro 'tal como est\xe1'. Esto es particularmente \xfatil en el contexto de la programaci\xf3n gen\xe9rica utilizando punteros o atributos de objeto."]}),"\n",(0,o.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,o.jsxs)(n.p,{children:["El siguiente ejemplo utiliza una caja para que el usuario introduzca una fecha. La cadena introducida por el usuario se convierte en una fecha y se guarda en la variable ",(0,o.jsx)(n.em,{children:"reqFecha"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0vdReqFecha:=Date(Request("Por favor introduzca una fecha:";String(Current date)))\n\xa0If(OK=1)\n\xa0\xa0// Hacer algo con la fecha guardada en vdReqFecha\n\xa0End if\n'})}),"\n",(0,o.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,o.jsx)(n.p,{children:"Los siguientes ejemplos muestran varios casos:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0vdDate:=Date("12/25/94")\xa0//12/25/94 on a US system\n\xa0vdDate2:=Date("40/40/94")\xa0//00/00/00\n\xa0vdDate3:=Date("It was the 6/30/2016")\xa0//06/30/16\n\xa0var $vobj : Object\n\xa0$vobj:=New object("expDate";"2020-11-17T00:00:00.0000")\n\xa0vdDate4:=Date($vobj.expDate)\xa0//11/17/20\n\xa0vdDate5:=Date($vobj.creationDate)\xa0//00/00/00\n'})}),"\n",(0,o.jsx)(n.h2,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,o.jsx)(n.p,{children:"Fecha de evaluaci\xf3n basada en una fecha en formato ISO:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0$vtDateISO:="2013-06-05T20:00:00"\n\xa0$vDate:=Date($vtDateISO)\n\xa0\xa0//$vDate representa el 5 de junio de 2013 sin importar el lenguaje del sistema\n'})}),"\n",(0,o.jsx)(n.h2,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,o.jsx)(n.p,{children:"Usted desea obtener una fecha de un atributo objeto, sea cual sea la opci\xf3n de almacenamiento de fecha del atributo actual:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0If(Value type($myObj.myDate)=Is date)\xa0//se almacena como fecha, no hay necesidad de convertir\n\xa0\xa0\xa0\xa0$vDate:=$myObj.myDate\n\xa0Else\xa0//es almacenado como cadena\n\xa0\xa0\xa0\xa0$vDate:=Date($myObj.myDate)\n\xa0End if\n"})}),"\n",(0,o.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/commands/bool",children:"Bool"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/string",children:"String"})]}),"\n",(0,o.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"102"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return d},a:function(){return t}});var s=a(667294);let o={},r=s.createContext(o);function t(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);