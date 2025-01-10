"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25855"],{765054:function(e,a,n){n.r(a),n.d(a,{default:()=>p,frontMatter:()=>t,metadata:()=>r,assets:()=>o,toc:()=>d,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/get-text-keywords","title":"GET TEXT KEYWORDS","description":"GET TEXT KEYWORDS ( texto ; arrPalabrasClaves {; *} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-text-keywords.md","sourceDirName":"commands-legacy","slug":"/commands/get-text-keywords","permalink":"/docs/es/commands/get-text-keywords","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-text-keywords.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-text-keywords","title":"GET TEXT KEYWORDS","slug":"/commands/get-text-keywords","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Delete string","permalink":"/docs/es/commands/delete-string"},"next":{"title":"Insert string","permalink":"/docs/es/commands/insert-string"}}'),s=n("785893"),l=n("250065");let t={id:"get-text-keywords",title:"GET TEXT KEYWORDS",slug:"/commands/get-text-keywords",displayed_sidebar:"docs"},i=void 0,o={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let a={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"GET TEXT KEYWORDS"})," ( ",(0,s.jsx)(a.em,{children:"texto"})," ; ",(0,s.jsx)(a.em,{children:"arrPalabrasClaves"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"Par\xe1metro"}),(0,s.jsx)(a.th,{children:"Tipo"}),(0,s.jsx)(a.th,{}),(0,s.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"texto"}),(0,s.jsx)(a.td,{children:"Text"}),(0,s.jsx)(a.td,{children:"\u2192"}),(0,s.jsx)(a.td,{children:"Texto original"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"arrPalabrasClaves"}),(0,s.jsx)(a.td,{children:"Text array"}),(0,s.jsx)(a.td,{children:"\u2190"}),(0,s.jsx)(a.td,{children:"Array que contiene las palabras claves"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"*"}),(0,s.jsx)(a.td,{children:"Operador"}),(0,s.jsx)(a.td,{children:"\u2192"}),(0,s.jsx)(a.td,{children:"Si se pasa = palabras \xfanicas"})]})]})]}),"\n",(0,s.jsx)(a.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(a.p,{children:["El comando ",(0,s.jsx)(a.strong,{children:"GET TEXT KEYWORDS"})," divide todo el ",(0,s.jsx)(a.em,{children:"texto"})," en palabras individuales y crea, para cada palabra obtenida, un elemento en el array texto ",(0,s.jsx)(a.em,{children:"arrPalabrasClaves"})," para cada palabra."]}),"\n",(0,s.jsxs)(a.p,{children:["4D utiliza el mismo algoritmo para dividir el texto en palabras individuales que utiliza para crear los ",(0,s.jsx)(a.em,{children:"\xcdndice de palabras claves"}),". Este algoritmo est\xe1 basado en la librer\xeda ICU. Para m\xe1s informaci\xf3n sobre c\xf3mo se separa un texto en palabras, consulte la siguiente direcci\xf3n: ",(0,s.jsx)(a.a,{href:"http://userguide.icu-project.org/boundaryanalysis",children:"http://userguide.icu-project.org/boundaryanalysis"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Nota"}),': por petici\xf3n de los usuarios, se introdujo una excepci\xf3n para el franc\xe9s y el italiano: el ap\xf3strofe (\') seguido por una vocal o la letra "h" se considera como un separador de palabra. Por ejemplo, las cadenas "L\'homme" o "l\'arbre" se dividen en "L\u2019"+"homme" y "l\'"+"arbre".']}),"\n",(0,s.jsxs)(a.p,{children:["El algoritmo utilizado difiere si la opci\xf3n ",(0,s.jsx)(a.strong,{children:"Considerar s\xf3lo caracteres no alfanum\xe9ricos para las palabras claves"})," est\xe1 seleccionada en las ",(0,s.jsx)(a.a,{href:"https://developer.4d.com/docs/es/settings/database/#comparaci%C3%B3n-de-texto",children:"propiedades de la base"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["En el par\xe1metro ",(0,s.jsx)(a.em,{children:"texto"}),", pase el texto original a dividir en palabras. Este texto puede tener estilo, en cuyo caso las etiquetas de estilo se ignoran."]}),"\n",(0,s.jsxs)(a.p,{children:["Para el par\xe1metro ",(0,s.jsx)(a.em,{children:"arrPalabrasClaves"}),", el comando llena este array texto con las palabras extra\xeddas del texto."]}),"\n",(0,s.jsxs)(a.p,{children:["Si pasa el par\xe1metro opcional ",(0,s.jsx)(a.em,{children:"*"}),", el comando s\xf3lo almacena cada palabra diferente una vez en ",(0,s.jsx)(a.em,{children:"arrPalabrasClaves"}),". Por defecto, si este par\xe1metro se omite, todas las palabras extra\xeddas del texto se guardan en el array, incluso si aparecen varias veces."]}),"\n",(0,s.jsx)(a.p,{children:'Este comando permite efectuar de manera simple las b\xfasquedas entre los registros que contienen grandes cantidades de texto garantizando utilizar las mismas palabras claves que 4D. Por ejemplo, imagine que tiene un texto que contiene "10,000 Jean-Pierre BC45". Si este texto se divide en las palabras claves "10,000" + "Jean-Pierre" + "BC45", el array contendr\xe1 4 elementos. Entonces es f\xe1cil hacer un bucle en este array para encontrar los registros que contienen una o m\xe1s de estas palabras clave utilizando el operador % (ver ejemplos).'}),"\n",(0,s.jsx)(a.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsxs)(a.p,{children:["En un formulario que contiene un \xe1rea de b\xfasqueda, los usuarios pueden introducir una o m\xe1s palabras. Cuando un usuario valida este formulario, buscamos los registros cuyo campo ",(0,s.jsx)(a.em,{children:"Micampo"})," contenga al menos una de las palabras claves introducidas por el usuario."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:'\xa0\xa0// vSearch es la variable del \xe1rea de b\xfasqueda en el formulario\n\xa0GET TEXT KEYWORDS(vSearch;arrSearch;*)\n\xa0\xa0//* en el caso de que un usuario introduzca la misma palabra m\xe1s de una vez\n\xa0CREATE SET([MiTabla];"Totalfound")\n\xa0$n:=Size of array(arrSearch)\n\xa0For($i;1;$n)\n\xa0\xa0\xa0\xa0QUERY([MiTabla];[MiTabla]MiCampo % arrSearch{$i})\n\xa0\xa0\xa0\xa0CREATE SET(([MiTabla];"encontrado")\n\xa0\xa0\xa0\xa0UNION("Totalfound";"encontrado";"Totalfound")\n\xa0End for\n\xa0USE SET("Totalfound")\n'})}),"\n",(0,s.jsx)(a.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsxs)(a.p,{children:["En el mismo formulario que antes, buscamos los registros donde el campo ",(0,s.jsx)(a.em,{children:"MiCampo"})," contenga todas las palabras claves introducidas por el usuario."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:"\xa0\xa0// vSearch es la variable del \xe1rea de entrada en el formulario\n\xa0GET TEXT KEYWORDS(vSearch;arrSearch;*)\n\xa0$n:=Size of array(arrSearch)\n\xa0QUERY([MiTabla];[MiTabla]MiCampo >=0;*)\n\xa0\xa0// inicializar la b\xfasqueda = todos los registros\n\xa0For($i;1;$n)\n\xa0\xa0\xa0\xa0QUERY([MyTable];&;[MyTable]MyField % arrSearch{$i};*)\n\xa0\xa0// a\xf1adir el criterio\n\xa0End for\n\xa0QUERY([MiTabla])\xa0//b\xfasqueda\n"})}),"\n",(0,s.jsx)(a.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsx)(a.p,{children:"Para contar las palabras de un texto:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:'\xa0GET TEXT KEYWORDS(vText;arrWords)\xa0// todas las palabras\n\xa0$n:=Size of array(arrWords)\n\xa0GET TEXT KEYWORDS(vText;arrWords;*)\xa0// palabras diferentes\n\xa0$m:=Size of array(arrWords)\n\xa0ALERT("Este texto contiene "+String($n)+" palabras de "+String($m))\n'})}),"\n",(0,s.jsx)(a.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.a,{href:"/docs/es/commands/distinct-values",children:"DISTINCT VALUES"})}),"\n",(0,s.jsx)(a.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{}),(0,s.jsx)(a.th,{})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"N\xfamero de comando"}),(0,s.jsx)(a.td,{children:"1141"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Hilo seguro"}),(0,s.jsx)(a.td,{children:"\u2713"})]})]})]})]})}function p(e={}){let{wrapper:a}={...(0,l.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,a,n){n.d(a,{Z:function(){return i},a:function(){return t}});var r=n(667294);let s={},l=r.createContext(s);function t(e){let a=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(l.Provider,{value:a},e.children)}}}]);