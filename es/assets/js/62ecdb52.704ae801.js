/*! For license information please see 62ecdb52.704ae801.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19176],{354322:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>t,frontMatter:()=>d,metadata:()=>A,toc:()=>l});var r=a(474848),s=a(28453);const d={id:"string",title:"String"},c=void 0,A={id:"Concepts/string",title:"String",description:"Cadena es un t\xe9rmino gen\xe9rico utilizado para:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/Concepts/dt_string.md",sourceDirName:"Concepts",slug:"/Concepts/string",permalink:"/docs/es/20/Concepts/string",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_string.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"string",title:"String"},sidebar:"docs",previous:{title:"Puntero",permalink:"/docs/es/20/Concepts/pointer"},next:{title:"Hora",permalink:"/docs/es/20/Concepts/time"}},i={},l=[{value:"Constantes literales de tipo cadena",id:"Constantes-literales-de-tipo-cadena",level:2},{value:"Secuencias de escape",id:"Secuencias-de-escape",level:3},{value:"Operadores de cadenas",id:"Operadores-de-cadenas",level:2},{value:"Comparaciones de cadenas",id:"Comparaciones-de-cadenas",level:2},{value:"Arroba (@)",id:"Arroba-",level:3},{value:"Palabras claves",id:"Palabras-claves",level:3},{value:"S\xedmbolos de indice de cadena",id:"S\xedmbolos-de-indice-de-cadena",level:2},{value:"Nota avanzada sobre la referencia de caracteres inv\xe1lidos",id:"Nota-avanzada-sobre-la-referencia-de-caracteres-inv\xe1lidos",level:3},{value:"Ejemplo",id:"Ejemplo",level:3}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Cadena es un t\xe9rmino gen\xe9rico utilizado para:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Los campos o variables de tipo texto: un campo, variable o expresi\xf3n de tipo texto puede contener de 0 a 2 GB de texto."}),"\n",(0,r.jsx)(n.li,{children:"Campos alfanum\xe9ricos: un campo alfanum\xe9rico puede contener de 0 a 255 caracteres (l\xedmite fijado al definir el campo)."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"Constantes-literales-de-tipo-cadena",children:"Constantes literales de tipo cadena"}),"\n",(0,r.jsx)(n.p,{children:'Una constante literal de tipo cadena se encierra entre comillas dobles y rectas ("..."). Estos son algunos ejemplos:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'"A\xf1adir registros"\n"No se han encontrado registros."\n"Factura"\n'})}),"\n",(0,r.jsx)(n.p,{children:'Una cadena vac\xeda se especifica con dos comillas sin nada entre ellas ("").'}),"\n",(0,r.jsx)(n.h3,{id:"Secuencias-de-escape",children:"Secuencias de escape"}),"\n",(0,r.jsx)(n.p,{children:"Las siguientes secuencias de escape pueden utilizarse dentro de las cadenas:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Secuencias de escape"}),(0,r.jsx)(n.th,{children:"Car\xe1cter reemplazado"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\\n"}),(0,r.jsx)(n.td,{children:"LF (Retorno l\xednea)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\\t"}),(0,r.jsx)(n.td,{children:"HT (Tabulaci\xf3n)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\\r"}),(0,r.jsx)(n.td,{children:"CR (Retorno carro)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\\\\"}),(0,r.jsx)(n.td,{children:"\\ (Barra invertida)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'\\"'}),(0,r.jsx)(n.td,{children:'" (Comillas)'})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"}),' el car\xe1cter \\ (barra invertida) se utiliza como separador en las rutas de acceso en Windows. Por lo tanto, debe utilizar una doble barra invertida \\\\ en las rutas cuando quiera tener una barra invertida delante de un caracter utilizado en una de las secuencias de escape reconocidas por 4D (por ejemplo, "C:\\MisDocumentos\\\\Nuevos.txt").']}),"\n",(0,r.jsx)(n.h2,{id:"Operadores-de-cadenas",children:"Operadores de cadenas"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Operaci\xf3n"}),(0,r.jsx)(n.th,{children:"Sintaxis"}),(0,r.jsx)(n.th,{children:"Devuelve"}),(0,r.jsx)(n.th,{children:"Expression"}),(0,r.jsx)(n.th,{children:"Valor"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Concatenaci\xf3n"}),(0,r.jsx)(n.td,{children:"Cadena + Cadena"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:'"abc" + "def"'}),(0,r.jsx)(n.td,{children:'"abcdef"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Repetici\xf3n"}),(0,r.jsx)(n.td,{children:"Cadena * N\xfamero"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:'"ab" * 3'}),(0,r.jsx)(n.td,{children:'"ababab"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Igual"}),(0,r.jsx)(n.td,{children:"Cadena = Cadena"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:'"abc" = "abc"'}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:'"abc" = "abd"'}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Desigualdad"}),(0,r.jsx)(n.td,{children:"Cadena # Cadena"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:'"abc" # "abd"'}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:'"abc" # "abc"'}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Mayor que"}),(0,r.jsx)(n.td,{children:"Cadena > Cadena"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:'"abd" > "abc"'}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:'"abc" > "abc"'}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Menor que"}),(0,r.jsx)(n.td,{children:"Cadena < Cadena"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:'"abc" < "abd"'}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:'"abc" < "abc"'}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Mayor o igual que"}),(0,r.jsx)(n.td,{children:"Cadena >= Cadena"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:'"abd" >= "abc"'}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:'"abc" >= "abd"'}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Menor o igual que"}),(0,r.jsx)(n.td,{children:"Cadena <= Cadena"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:'"abc" <= "abd"'}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:'"abd" <= "abc"'}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Contiene palabra clave"}),(0,r.jsx)(n.td,{children:"Cadena % Cadena"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:'"Alpha Bravo" % "Bravo"'}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:'"Alpha Bravo" % "ravo"'}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Imagen % Cadena"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:'Picture_expr % "Mer"'}),(0,r.jsx)(n.td,{children:"True (*)"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:'(*) Si la palabra clave "Mer" est\xe1 asociada a la imagen almacenada en la expresi\xf3n imagen (campo o variable).'}),"\n",(0,r.jsx)(n.h2,{id:"Comparaciones-de-cadenas",children:"Comparaciones de cadenas"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Las cadenas se comparan caracter por caracter (excepto en el caso de la b\xfasqueda por ",(0,r.jsx)(n.a,{href:"/docs/es/20/Concepts/string#keywords",children:"palabras clave"}),", ver m\xe1s abajo)."]}),"\n",(0,r.jsxs)(n.li,{children:['Cuando se comparan cadenas, se ignoran las may\xfasculas y min\xfasculas de los caracteres; as\xed, "a"="A" devuelve ',(0,r.jsx)(n.code,{children:"TRUE"}),". Para saber si los caracteres est\xe1n en may\xfasculas o min\xfasculas, compare sus c\xf3digos de caracteres. Por ejemplo, la siguiente expresi\xf3n devuelve ",(0,r.jsx)(n.code,{children:"FALSE"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'Character code("A")=Character code("a") // porque 65 no es igual a 97\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["When strings are compared, diacritical characters are compared using the system character comparison table of your computer. Por ejemplo, las siguientes expresiones devuelven ",(0,r.jsx)(n.code,{children:"TRUE"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'     "n"="\xf1"\n     "n"="\xd1"\n     "A"="\xe5"\n      // etc\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," la comparaci\xf3n de cadenas tiene en cuenta las especificidades del lenguaje ",(0,r.jsx)(n.strong,{children:"definido para el archivo de datos 4D"})," (que no siempre es el mismo que el lenguaje definido para el sistema)."]}),"\n",(0,r.jsx)(n.h3,{id:"Arroba-",children:"Arroba (@)"}),"\n",(0,r.jsxs)(n.p,{children:["El lenguaje 4D soporta ",(0,r.jsx)(n.strong,{children:"@"})," como car\xe1cter comod\xedn. Este car\xe1cter se puede utilizar en cualquier comparaci\xf3n de cadenas para que coincida con cualquier n\xfamero de caracteres. Por ejemplo, la siguiente expresi\xf3n es ",(0,r.jsx)(n.code,{children:"TRUE"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'"abcdefghij"="abc@"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["El car\xe1cter comod\xedn debe utilizarse dentro del segundo operando (la cadena de la derecha) para que coincida con cualquier n\xfamero de caracteres. La siguiente expresi\xf3n es ",(0,r.jsx)(n.code,{children:"FALSE"}),", porque la @ se considera s\xf3lo como un car\xe1cter en el primer operando:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'    "abc@"="abcdefghij"\n'})}),"\n",(0,r.jsxs)(n.p,{children:['El comod\xedn significa "uno o m\xe1s caracteres o nada". Las expresiones siguientes son ',(0,r.jsx)(n.code,{children:"TRUE"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'     "abcdefghij"="abcdefghij@"\n     "abcdefghij"="@abcdefghij"\n     "abcdefghij"="abcd@efghij"\n     "abcdefghij"="@abcdefghij@"\n     "abcdefghij"="@abcde@fghij@"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Por otro lado, sea cual sea el caso, una comparaci\xf3n de cadenas con dos comodines consecutivos siempre devolver\xe1 ",(0,r.jsx)(n.code,{children:"FALSE"}),". La siguiente expresi\xf3n es ",(0,r.jsx)(n.code,{children:"FALSE"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'"abcdefghij"="abc@@fg"\n'})}),"\n",(0,r.jsx)(n.p,{children:"Cuando el operador de comparaci\xf3n es o contiene un s\xedmbolo < o >, s\xf3lo se soporta la comparaci\xf3n con un \xfanico comod\xedn situado al final del operando:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'     "abcd"<="abc@" // Comparaci\xf3n v\xe1lida\n     "abcd"<="abc@ef" //No es una comparaci\xf3n v\xe1lida\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Si desea ejecutar comparaciones o consultas utilizando @ como car\xe1cter (y no como comod\xedn), debe utilizar la instrucci\xf3n ",(0,r.jsx)(n.code,{children:"Character code(At sign)"}),". Imagine, por ejemplo, que quiere saber si una cadena termina con el car\xe1cter @. La siguiente expresi\xf3n (si $vsValue no est\xe1 vac\xedo) es siempre ",(0,r.jsx)(n.code,{children:"TRUE"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'($vsValue[[Length($vsValue)]]="@")\n'})}),"\n",(0,r.jsx)(n.p,{children:"La siguiente expresi\xf3n se evaluar\xe1 correctamente:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"(Character code($vsValue[[Length($vsValue)]])#64)  \n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," una opci\xf3n 4D del modo Dise\xf1o permite definir c\xf3mo se interpreta el car\xe1cter @ cuando se incluye en una cadena de caracteres."]}),"\n",(0,r.jsx)(n.h3,{id:"Palabras-claves",children:"Palabras claves"}),"\n",(0,r.jsxs)(n.p,{children:['A diferencia de otras comparaciones de cadenas, la b\xfasqueda por palabras clave busca "palabras" en los "textos": las palabras se consideran tanto individualmente como en su conjunto. El operador ',(0,r.jsx)(n.strong,{children:"%"})," siempre devuelve ",(0,r.jsx)(n.code,{children:"False"}),' si la consulta se refiere a varias palabras o s\xf3lo a una parte de ellas (por ejemplo, una s\xedlaba). Las "palabras" son cadenas de caracteres rodeadas de "separadores", que son espacios y caracteres de puntuaci\xf3n y guiones. Un ap\xf3strofe, como en "Today\'s", se considera normalmente como parte de la palabra, pero se ignorar\xe1 en ciertos casos (ver las reglas m\xe1s abajo). Los n\xfameros se pueden buscar porque se eval\xfaan como un todo (incluidos los s\xedmbolos decimales). Los dem\xe1s s\xedmbolos (moneda, temperatura, etc.) ser\xe1n ignorados.']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'     "Alpha Bravo Charlie"%"Bravo" // DevuelveTrue\n     "Alpha Bravo Charlie"%"vo" // Devuelve False\n     "Alpha Bravo Charlie"%"Alpha Bravo" // Devuelve False\n     "Alpha,Bravo,Charlie"%"Alpha" // Devuelve True\n     "Software and Computers"%"comput@" // Devuelve True\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["4D utiliza la librer\xeda ICU para comparar cadenas (utilizando los operadores ",(0,r.jsx)(n.code,{children:"<>=#"}),") y detectar palabras claves. Para m\xe1s informaci\xf3n sobre las normas aplicadas, consulte la siguiente direcci\xf3n: ",(0,r.jsx)(n.a,{href:"http://www.unicode.org/reports/tr29/#Word_Boundaries",children:"http://www.unicode.org/reports/tr29/#Word_Boundaries"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"En la versi\xf3n japonesa, en lugar de ICU, 4D utiliza por defecto Mecab para detectar las palabras claves."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"S\xedmbolos-de-indice-de-cadena",children:"S\xedmbolos de indice de cadena"}),"\n",(0,r.jsx)(n.p,{children:"Los s\xedmbolos de indice de cadena son: [[...]]"}),"\n",(0,r.jsx)(n.p,{children:"Estos s\xedmbolos se utilizan para referirse a un solo car\xe1cter dentro de una cadena. Esta sintaxis permite direccionar individualmente los caracteres en un campo o una variable de tipo Alfa o Texto."}),"\n",(0,r.jsx)(n.p,{children:"Si los s\xedmbolos de referencia de caracteres aparecen a la izquierda del operador de asignaci\xf3n (:=), se asigna un car\xe1cter a la posici\xf3n referenciada en la cadena. Por ejemplo, si vsName no es una cadena vac\xeda, la siguiente l\xednea pone el primer car\xe1cter de vsName en may\xfasculas:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'If(vsNom#"")\n    vsNom[[1]]:=Uppercase(vsNom[[1]])\nEnd if\n'})}),"\n",(0,r.jsx)(n.p,{children:"En caso contrario, si los s\xedmbolos de referencia de caracteres aparecen dentro de una expresi\xf3n, devuelven el caracter (al que se refieren) como una cadena de 1 caracter. Por ejemplo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'//El siguiente ejemplo comprueba si el \xfaltimo caracter de vtText es una arroba "@". If(vtText#"")\n    If(Character code(Substring(vtText;Length(vtText);1))=At sign)\n  //...\n    End if\n End if\n\n  //Using the character reference syntax, you would write in a simpler manner: If(vtText#"")\n    If(Character code(vtText[[Length(vtText)]])=At sign)\n  // ...\n    End if\n End if\n'})}),"\n",(0,r.jsx)(n.h3,{id:"Nota-avanzada-sobre-la-referencia-de-caracteres-inv\xe1lidos",children:"Nota avanzada sobre la referencia de caracteres inv\xe1lidos"}),"\n",(0,r.jsx)(n.p,{children:"Al utilizar los s\xedmbolos de indice de cadena, debe dirigirse a los caracteres existentes en la cadena de la misma manera que se dirige a los elementos existentes de un array. Por ejemplo, si se referencia el 20\xba car\xe1cter de una variable cadena, esta variable DEBE contener al menos 20 caracteres."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"No hacerlo, en modo interpretado, no causa un error de sintaxis."}),"\n",(0,r.jsx)(n.li,{children:"No hacerlo, en modo compilado (sin opciones), puede llevar a la corrupci\xf3n de la memoria, si, por ejemplo, se escribe un caracter m\xe1s all\xe1 del final de una cadena o un texto."}),"\n",(0,r.jsx)(n.li,{children:"Si no lo hace, en el modo compilado, se produce un error con la opci\xf3n Range Checking On. Por ejemplo, ejecutando el siguiente c\xf3digo:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'//Muy malo y desagradable, \xa1Boo!\n //Very bad and nasty thing to do, boo!\n vsAnyText:=""\n vsAnyText[[1]]:="A"\n'})}),"\n",(0,r.jsx)(n.p,{children:"provocar\xe1 el error de tiempo de ejecuci\xf3n que se muestra aqu\xed:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"alt-text",src:a(919532).A+"",width:"642",height:"332"})}),"\n",(0,r.jsx)(n.h3,{id:"Ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"El siguiente m\xe9todo proyecto pone en may\xfasculas el primer car\xe1cter de cada palabra del texto recibido como par\xe1metro y devuelve el texto resultante en may\xfasculas:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'  //M\xe9todo proyecto Capitalize_text\n  //Capitalize_text ( Texto ) -> Texto\n  //Capitalize_text ( Texto fuente ) -> Texto en may\xfasculas\n\n $0:=$1\n $vlLen:=Length($0)\n If($vlLen>0)\n    $0[[1]]:=Uppercase($0[[1]])\n    For($vlChar;1;$vlLen-1)\n       If(Position($0[[$vlChar]];" !&()-{}:;<>?/,.=+*")>0)\n          $0[[$vlChar+1]]:=Uppercase($0[[$vlChar+1]])\n       End if\n    End for\n End if\n'})}),"\n",(0,r.jsx)(n.p,{children:"Por ejemplo, la l\xednea:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'ALERT(Capitalize_text("hola, me llamo jane doe y me presento a la presidencia"))\n'})}),"\n",(0,r.jsx)(n.p,{children:"muestra la alerta que aparece aqu\xed:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"alt-text",src:a(238945).A+"",width:"512",height:"282"})})]})}function t(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},221020:(e,n,a)=>{var r=a(296540),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,A=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,a){var r,d={},l=null,o=null;for(r in void 0!==a&&(l=""+a),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(o=n.ref),n)c.call(n,r)&&!i.hasOwnProperty(r)&&(d[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===d[r]&&(d[r]=n[r]);return{$$typeof:s,type:e,key:l,ref:o,props:d,_owner:A.current}}n.Fragment=d,n.jsx=l,n.jsxs=l},474848:(e,n,a)=>{e.exports=a(221020)},238945:(e,n,a)=>{a.d(n,{A:()=>r});const r="data:image/png;base64,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"},919532:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/Syntax_Error.en-9839a6b23f8e4a167fb902c93d5e8c08.png"},28453:(e,n,a)=>{a.d(n,{R:()=>c,x:()=>A});var r=a(296540);const s={},d=r.createContext(s);function c(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function A(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);