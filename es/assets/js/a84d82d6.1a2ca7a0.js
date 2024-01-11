"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[29686],{603905:(e,a,n)=>{n.d(a,{Zo:()=>m,kt:()=>p});var r=n(667294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var i=r.createContext({}),d=function(e){var a=r.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},m=function(e){var a=d(e.components);return r.createElement(i.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=d(n),p=t,y=c["".concat(i,".").concat(p)]||c[p]||u[p]||o;return n?r.createElement(y,l(l({ref:a},m),{},{components:n})):r.createElement(y,l({ref:a},m))}));function p(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,l=new Array(o);l[0]=c;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:t,l[1]=s;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},114394:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>m});n(667294);var r=n(603905);function t(){return t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},t.apply(this,arguments)}function o(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}const l={id:"arrays",title:"Arrays"},s=void 0,i={unversionedId:"Concepts/arrays",id:"version-20-R3/Concepts/arrays",title:"Arrays",description:"Un array es una serie ordenada de variables del mismo tipo. Cada variable se llama un elemento del array. Un array recibe su tama\xf1o cuando se crea; luego se puede redimensionar tantas veces como sea necesario a\xf1adiendo, insertando o eliminando elementos, o redimensionando el array utilizando el mismo comando utilizado para crearlo. Los elementos del array se numeran de 1 a N, siendo N el tama\xf1o del array. Un array siempre tiene un elemento cero especial. Los arrays son variables 4D. Como toda variable, un array tiene un alcance y sigue las reglas del lenguaje 4D, aunque con algunas diferencias \xfanicas.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R3/Concepts/arrays.md",sourceDirName:"Concepts",slug:"/Concepts/arrays",permalink:"/docs/es/20-R3/Concepts/arrays",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Farrays.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"arrays",title:"Arrays"},sidebar:"docs",previous:{title:"Variables",permalink:"/docs/es/20-R3/Concepts/variables"},next:{title:"M\xe9todos",permalink:"/docs/es/20-R3/Concepts/methods"}},d={},m=[{value:"Crear arrays",id:"crear-arrays",level:2},{value:"Asignar valores en arrays",id:"asignar-valores-en-arrays",level:2},{value:"Asignaci\xf3n de un array a otro array",id:"asignaci\xf3n-de-un-array-a-otro-array",level:3},{value:"Utilizar el elemento cero de un array",id:"utilizar-el-elemento-cero-de-un-array",level:2},{value:"Arrays de dos dimensiones",id:"arrays-de-dos-dimensiones",level:2},{value:"Arrays y memoria",id:"arrays-y-memoria",level:2}],u={toc:m};function c(e){var{components:a}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",t({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Un ",(0,r.kt)("strong",{parentName:"p"},"array")," es una serie ordenada de ",(0,r.kt)("strong",{parentName:"p"},"variables")," del mismo tipo. Cada variable se llama un ",(0,r.kt)("strong",{parentName:"p"},"elemento")," del array. Un array recibe su tama\xf1o cuando se crea; luego se puede redimensionar tantas veces como sea necesario a\xf1adiendo, insertando o eliminando elementos, o redimensionando el array utilizando el mismo comando utilizado para crearlo. Los elementos del array se numeran de 1 a N, siendo N el tama\xf1o del array. Un array siempre tiene un ",(0,r.kt)("a",t({parentName:"p"},{href:"#using-the-element-zero-of-an-array"}),"elemento cero")," especial. Los arrays son variables 4D. Como toda variable, un array tiene un alcance y sigue las reglas del lenguaje 4D, aunque con algunas diferencias \xfanicas."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"En la mayor\xeda de los casos, se recomienda utilizar ",(0,r.kt)("strong",{parentName:"p"},"colecciones")," en lugar de ",(0,r.kt)("strong",{parentName:"p"},"arrays"),". Las colecciones son m\xe1s flexibles y ofrecen una amplia gama de m\xe9todos dedicados. Para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,r.kt)("a",t({parentName:"p"},{href:"/docs/es/20-R3/Concepts/collection"}),"Colecci\xf3n"),".")),(0,r.kt)("h2",t({},{id:"crear-arrays"}),"Crear arrays"),(0,r.kt)("p",null,'Se crea un array con uno de los comandos de declaraci\xf3n del tema "Arrays". Cada comando de declaraci\xf3n de arrays puede crear o redimensionar arrays unidimensionales o bidimensionales. Para m\xe1s informaci\xf3n sobre los arrays bidimensionales, consulte la secci\xf3n ',(0,r.kt)("a",t({parentName:"p"},{href:"#two-dimensional-arrays"}),"arrays bidimensionales"),"."),(0,r.kt)("p",null,"La siguiente l\xednea de c\xf3digo crea (declara) un array de enteros de 10 elementos:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"})," ARRAY INTEGER(aiAnArray;10)\n")),(0,r.kt)("p",null,"A continuaci\xf3n, el siguiente c\xf3digo redimensiona ese mismo array a 20 elementos:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"ARRAY INTEGER(aiAnArray;20)\n")),(0,r.kt)("p",null,"A continuaci\xf3n, el siguiente c\xf3digo redimensiona ese mismo array a 0 elementos:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"ARRAY INTEGER(aiAnArray;0)\n")),(0,r.kt)("h2",t({},{id:"asignar-valores-en-arrays"}),"Asignar valores en arrays"),(0,r.kt)("p",null,"Para referirse a los elementos de un array se utilizan llaves ({...}). Dentro de las llaves se utiliza un n\xfamero para dirigirse a un elemento concreto; este n\xfamero se denomina n\xfamero de elemento. Las siguientes l\xedneas ponen cinco nombres en el array llamado atNames y luego los muestran en ventanas de alerta:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),' ARRAY TEXT(atNames;5)\n atNames{1}:="Richard"\n atNames{2}:="Sarah"\n atNames{3}:="Sam"\n atNames{4}:="Jane"\n atNames{5}:="John"\n For($vlElem;1;5)\n    ALERT("The element #"+String($vlElem)+" is equal to: "+atNames{$vlElem})\n End for\n')),(0,r.kt)("p",null,"Tenga en cuenta la sintaxis atNames{$vlElem}. En lugar de especificar un literal num\xe9rico como atNames{3}, puede utilizar una variable num\xe9rica para indicar a qu\xe9 elemento de un array se dirige. Utilizando la iteraci\xf3n que ofrece una estructura de bucle ( ",(0,r.kt)("inlineCode",{parentName:"p"},"For...End for"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Repeat...Until")," o ",(0,r.kt)("inlineCode",{parentName:"p"},"While...End while"),"), las piezas compactas de c\xf3digo pueden dirigirse a todos o a parte de los elementos de un array."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Importante:")," tenga cuidado de no confundir el operador de asignaci\xf3n (:=) con el operador de comparaci\xf3n, igual (=). La asignaci\xf3n y la comparaci\xf3n son operaciones muy diferentes."),(0,r.kt)("h3",t({},{id:"asignaci\xf3n-de-un-array-a-otro-array"}),"Asignaci\xf3n de un array a otro array"),(0,r.kt)("p",null,"A diferencia de las variables de tipo texto o cadena, no se puede asignar un array a otro. Para copiar (asignar) un array a otro, utilice ",(0,r.kt)("inlineCode",{parentName:"p"},"COPY ARRAY"),"."),(0,r.kt)("h2",t({},{id:"utilizar-el-elemento-cero-de-un-array"}),"Utilizar el elemento cero de un array"),(0,r.kt)("p",null,"Un array siempre tiene un elemento cero. Aunque el elemento cero no se muestra cuando un array soporta un objeto de formulario, no hay ninguna restricci\xf3n(*) para utilizarlo en el lenguaje."),(0,r.kt)("p",null,"He aqu\xed otro ejemplo: quiere inicializar un objeto de formulario con un valor texto pero sin definir un valor por defecto. Puede utilizar el elemento cero del array:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'  // m\xe9todo para un combo box o una lista desplegable  \n  // vinculado al array de variables atName\n Case of\n    :(Form event code=On Load)\n  // Inicializar el array (como se muestra m\xe1s arriba)  \n  // Pero utiliza el elemento cero\n        ARRAY TEXT(atName;5)\n        atName{0}:=Seleccione un elemento"\n        atName{1}:="Texto1"\n        atName{2}:="Texto2"\n        atName{3}:="Texto3"\n        atName{4}:="Texto4"\n        atName{5}:="Texto5"\n    // Posicionar el array en el elemento 0\n        atName:=0\n End case\n')),(0,r.kt)("p",null,"(*) Sin embargo, hay una excepci\xf3n: en un array tipo List Box, el elemento cero se utiliza internamente para almacenar el valor anterior de un elemento que se est\xe1 editando, por lo que no es posible utilizarlo en este contexto particular."),(0,r.kt)("h2",t({},{id:"arrays-de-dos-dimensiones"}),"Arrays de dos dimensiones"),(0,r.kt)("p",null,"Cada comando de declaraci\xf3n de arrays puede crear o redimensionar arrays unidimensionales o bidimensionales. Ejemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"})," ARRAY TEXT(atTopics;100;50) // Crear un array texto compuesto por 100 l\xedneas de 50 columnas\n")),(0,r.kt)("p",null,"Los arrays de dos dimensiones son esencialmente objetos de lenguaje; no se pueden mostrar ni imprimir."),(0,r.kt)("p",null,"En el ejemplo anterior:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"atTopics es una array de dos dimensiones"),(0,r.kt)("li",{parentName:"ul"},"atTopics{8}{5} es el 5\xba elemento (5\xaa columna...) de la 8\xaa fila"),(0,r.kt)("li",{parentName:"ul"},"atTopics{20} es la vig\xe9sima fila y es a su vez un array de una dimensi\xf3n"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Tama\xf1o del array(atTopics)")," devuelve 100, que es el n\xfamero de filas"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Tama\xf1o de array(atTopics{17})")," devuelve 50, que es el n\xfamero de columnas de la l\xednea 17")),(0,r.kt)("p",null,"En el siguiente ejemplo, un puntero a cada campo de cada tabla de la base se almacena en un array de dos dimensiones:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),' C_LONGINT($vlLastTable;$vlLastField)\n C_LONGINT($vlFieldNumber)\n  // Crear tantas l\xedneas (vac\xedas y sin columnas) como tablas haya\n $vlLastTable:=Get last table number\n ARRAY POINTER(<>apFields;$vlLastTable;0) /Array 2D con X l\xedneas y cero columnas\n  // Para cada tabla\n For($vlTable;1;$vlLastTable)\n    If(Is table number valid($vlTable))\n       $vlLastField:=Obtener el n\xfamero del \xfaltimo campo($vlTable)\n  // Dar valor a los elementos\n       $vlColumnNumber:=0\n       For($vlField;1;$vlLastField)\n          If(Is field number valid($vlTable;$vlField))\n             $vlColumnNumber:=$vlColumnNumber+1\n  //Inserta una columna en una l\xednea de la tabla en curso\n             INSERT IN ARRAY(<>apFields{$vlTable};$vlColumnNumber;1)\n  //Asignar la "celda" con el puntero\n             <>apFields{$vlTable}{$vlColumnNumber}:=Field($vlTable;$vlField)\n          End if\n       End for\n    End if\n End for\n')),(0,r.kt)("p",null,"Siempre que se haya inicializado este array de dos dimensiones, se pueden obtener los punteros a los campos de una tabla concreta de la siguiente manera:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"  // Get the pointers to the fields for the table currently displayed at the screen: COPY ARRAY(\u25caapFields{Table(Current form table)};$apTheFieldsIamWorkingOn)\n  // Initialize Boolean and Date fields\n For($vlElem;1;Size of array($apTheFieldsIamWorkingOn))\n    Case of\n       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is date)\n          $apTheFieldsIamWorkingOn{$vlElem}->:=Current date\n       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is Boolean)\n          $apTheFieldsIamWorkingOn{$vlElem}->:=True\n    End case\n End for\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nota:")," como sugiere este ejemplo, las l\xedneas de un array de dos dimensiones pueden tener el mismo tama\xf1o o diferentes tama\xf1os."),(0,r.kt)("h2",t({},{id:"arrays-y-memoria"}),"Arrays y memoria"),(0,r.kt)("p",null,"A diferencia de los datos que se almacenan en el disco mediante tablas y registros, un array se mantiene siempre en memoria en su totalidad."),(0,r.kt)("p",null,"Por ejemplo, si se introdujeran todos los c\xf3digos postales de EE. UU. en la tabla ","[Zip Codes]",", \xe9sta contendr\xeda unos 100.000 registros. Adem\xe1s, esa tabla incluir\xeda varios campos: el propio c\xf3digo postal y la ciudad, el condado y el estado correspondientes. Si selecciona s\xf3lo los c\xf3digos postales de California, el motor de la base 4D crea la correspondiente selecci\xf3n de registros dentro de la tabla ","[Zip Codes]",", y luego carga los registros s\xf3lo cuando se necesitan (es decir, cuando se visualizan o imprimen). En palabras de orden, se trabaja con una serie ordenada de valores (del mismo tipo para cada campo) que se carga parcialmente desde el disco a la memoria por el motor de la base 4D."),(0,r.kt)("p",null,"Hacer lo mismo con arrays ser\xeda prohibido por las siguientes razones:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Para mantener los cuatro tipos de informaci\xf3n (c\xf3digo postal, ciudad, condado, estado), habr\xeda que mantener cuatro grandes arrays en memoria."),(0,r.kt)("li",{parentName:"ul"},"Como un array se mantiene siempre en memoria en su totalidad, habr\xeda que mantener toda la informaci\xf3n de los c\xf3digos postales en memoria durante toda la sesi\xf3n de trabajo, aunque los datos no est\xe9n siempre en uso."),(0,r.kt)("li",{parentName:"ul"},"De nuevo, dado que un array se mantiene siempre en memoria en su totalidad, cada vez que se inicia la aplicaci\xf3n y se sale de ella, los cuatro arrays tendr\xedan que cargarse y luego guardarse en el disco, aunque los datos no se utilicen ni se modifiquen durante la sesi\xf3n de trabajo.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Conclusi\xf3n:")," los arrays est\xe1n pensados para mantener cantidades razonables de datos durante un corto periodo de tiempo. Por otro lado, como los arrays se mantienen en memoria, son f\xe1ciles de manejar y r\xe1pidos de manipular."),(0,r.kt)("p",null,"Sin embargo, en algunas circunstancias, puede ser necesario trabajar con arrays que contengan cientos o miles de elementos. La siguiente tabla muestra las f\xf3rmulas utilizadas para calcular la cantidad de memoria utilizada para cada tipo de array:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",t({parentName:"tr"},{align:null}),"Tipo de array"),(0,r.kt)("th",t({parentName:"tr"},{align:null}),"F\xf3rmula para determinar el uso de la memoria en bytes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",t({parentName:"tr"},{align:null}),"Blob"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"(1+n\xfamero de elementos) * 12 + Suma del tama\xf1o de cada blob")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",t({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"(31+n\xfamero de elementos)\\N8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",t({parentName:"tr"},{align:null}),"Fecha"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"(1+n\xfamero de elementos) * 6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",t({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"(1+n\xfamero de elementos) * 2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",t({parentName:"tr"},{align:null}),"Entero largo"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"(1+n\xfamero de elementos) * 4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",t({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"(1+n\xfamero de elementos) * 8 + Suma del tama\xf1o de cada objeto")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",t({parentName:"tr"},{align:null}),"Picture"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"(1+n\xfamero de elementos) * 8 + Suma del tama\xf1o de cada imagen")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",t({parentName:"tr"},{align:null}),"Puntero"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"(1+n\xfamero de elementos) * 8 + Suma del tama\xf1o de cada puntero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",t({parentName:"tr"},{align:null}),"Real"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"(1+n\xfamero de elementos) * 8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",t({parentName:"tr"},{align:null}),"Text"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"(1+n\xfamero de elementos) ",(0,r.kt)("em",{parentName:"td"}," 20 + (suma de la longitud de cada texto) ")," 2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",t({parentName:"tr"},{align:null}),"Hora"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"(1+n\xfamero de elementos) * 4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",t({parentName:"tr"},{align:null}),"Dos dimensiones"),(0,r.kt)("td",t({parentName:"tr"},{align:null}),"(1+n\xfamero de elementos) * 16 + Suma del tama\xf1o de cada array")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notas:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"El tama\xf1o de un texto en memoria se calcula con esta f\xf3rmula ((Longitud + 1) * 2)"),(0,r.kt)("li",{parentName:"ul"},"Se requieren algunos bytes adicionales para llevar la cuenta del elemento seleccionado, el n\xfamero de elementos y el propio array.")))}c.isMDXComponent=!0}}]);