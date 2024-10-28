"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89759],{895037:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>t});var r=n(474848),s=n(28453);const o={id:"arrays",title:"Arrays"},l=void 0,i={id:"Concepts/arrays",title:"Arrays",description:"Un array es una serie ordenada de variables del mismo tipo. Cada variable se llama un elemento del array. Un array recibe su tama\xf1o cuando se crea; luego se puede redimensionar tantas veces como sea necesario a\xf1adiendo, insertando o eliminando elementos, o redimensionando el array utilizando el mismo comando utilizado para crearlo. Los elementos del array se numeran de 1 a N, siendo N el tama\xf1o del array. Un array siempre tiene un elemento cero especial. Los arrays son variables 4D. Como toda variable, un array tiene un alcance y sigue las reglas del lenguaje 4D, aunque con algunas diferencias \xfanicas.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/Concepts/arrays.md",sourceDirName:"Concepts",slug:"/Concepts/arrays",permalink:"/docs/es/20-R6/Concepts/arrays",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Farrays.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"arrays",title:"Arrays"},sidebar:"docs",previous:{title:"Variables",permalink:"/docs/es/20-R6/Concepts/variables"},next:{title:"M\xe9todos",permalink:"/docs/es/20-R6/Concepts/methods"}},d={},t=[{value:"Crear arrays",id:"crear-arrays",level:2},{value:"Asignar valores en arrays",id:"asignar-valores-en-arrays",level:2},{value:"Asignaci\xf3n de un array a otro array",id:"asignaci\xf3n-de-un-array-a-otro-array",level:3},{value:"Utilizar el elemento cero de un array",id:"utilizar-el-elemento-cero-de-un-array",level:2},{value:"Arrays de dos dimensiones",id:"arrays-de-dos-dimensiones",level:2},{value:"Arrays y memoria",id:"arrays-y-memoria",level:2}];function c(e){const a={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:["Un ",(0,r.jsx)(a.strong,{children:"array"})," es una serie ordenada de ",(0,r.jsx)(a.strong,{children:"variables"})," del mismo tipo. Cada variable se llama un ",(0,r.jsx)(a.strong,{children:"elemento"})," del array. Un array recibe su tama\xf1o cuando se crea; luego se puede redimensionar tantas veces como sea necesario a\xf1adiendo, insertando o eliminando elementos, o redimensionando el array utilizando el mismo comando utilizado para crearlo. Los elementos del array se numeran de 1 a N, siendo N el tama\xf1o del array. Un array siempre tiene un ",(0,r.jsx)(a.a,{href:"#using-the-element-zero-of-an-array",children:"elemento cero"})," especial. Los arrays son variables 4D. Como toda variable, un array tiene un alcance y sigue las reglas del lenguaje 4D, aunque con algunas diferencias \xfanicas."]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsxs)(a.p,{children:["En la mayor\xeda de los casos, se recomienda utilizar ",(0,r.jsx)(a.strong,{children:"colecciones"})," en lugar de ",(0,r.jsx)(a.strong,{children:"arrays"}),". Las colecciones son m\xe1s flexibles y ofrecen una amplia gama de m\xe9todos dedicados. Para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,r.jsx)(a.a,{href:"/docs/es/20-R6/Concepts/collection",children:"Colecci\xf3n"}),"."]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"crear-arrays",children:"Crear arrays"}),"\n",(0,r.jsxs)(a.p,{children:['Se crea un array con uno de los comandos de declaraci\xf3n del tema "Arrays". Cada comando de declaraci\xf3n de arrays puede crear o redimensionar arrays unidimensionales o bidimensionales. Para m\xe1s informaci\xf3n sobre los arrays bidimensionales, consulte la secci\xf3n ',(0,r.jsx)(a.a,{href:"#two-dimensional-arrays",children:"arrays bidimensionales"}),"."]}),"\n",(0,r.jsx)(a.p,{children:"La siguiente l\xednea de c\xf3digo crea (declara) un array de enteros de 10 elementos:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:" ARRAY INTEGER(aiAnArray;10)\n"})}),"\n",(0,r.jsx)(a.p,{children:"A continuaci\xf3n, el siguiente c\xf3digo redimensiona ese mismo array a 20 elementos:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:"ARRAY INTEGER(aiAnArray;20)\n"})}),"\n",(0,r.jsx)(a.p,{children:"A continuaci\xf3n, el siguiente c\xf3digo redimensiona ese mismo array a 0 elementos:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:"ARRAY INTEGER(aiAnArray;0)\n"})}),"\n",(0,r.jsx)(a.h2,{id:"asignar-valores-en-arrays",children:"Asignar valores en arrays"}),"\n",(0,r.jsx)(a.p,{children:"Para referirse a los elementos de un array se utilizan llaves ({...}). Dentro de las llaves se utiliza un n\xfamero para dirigirse a un elemento concreto; este n\xfamero se denomina n\xfamero de elemento. Las siguientes l\xedneas ponen cinco nombres en el array llamado atNames y luego los muestran en ventanas de alerta:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:' ARRAY TEXT(atNames;5)\n atNames{1}:="Richard"\n atNames{2}:="Sarah"\n atNames{3}:="Sam"\n atNames{4}:="Jane"\n atNames{5}:="John"\n For($vlElem;1;5)\n    ALERT("The element #"+String($vlElem)+" is equal to: "+atNames{$vlElem})\n End for\n'})}),"\n",(0,r.jsxs)(a.p,{children:["Tenga en cuenta la sintaxis atNames{$vlElem}. En lugar de especificar un literal num\xe9rico como atNames{3}, puede utilizar una variable num\xe9rica para indicar a qu\xe9 elemento de un array se dirige. Utilizando la iteraci\xf3n que ofrece una estructura de bucle ( ",(0,r.jsx)(a.code,{children:"For...End for"}),", ",(0,r.jsx)(a.code,{children:"Repeat...Until"})," o ",(0,r.jsx)(a.code,{children:"While...End while"}),"), las piezas compactas de c\xf3digo pueden dirigirse a todos o a parte de los elementos de un array."]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Importante:"})," tenga cuidado de no confundir el operador de asignaci\xf3n (:=) con el operador de comparaci\xf3n, igual (=). La asignaci\xf3n y la comparaci\xf3n son operaciones muy diferentes."]}),"\n",(0,r.jsx)(a.h3,{id:"asignaci\xf3n-de-un-array-a-otro-array",children:"Asignaci\xf3n de un array a otro array"}),"\n",(0,r.jsxs)(a.p,{children:["A diferencia de las variables de tipo texto o cadena, no se puede asignar un array a otro. Para copiar (asignar) un array a otro, utilice ",(0,r.jsx)(a.code,{children:"COPY ARRAY"}),"."]}),"\n",(0,r.jsx)(a.h2,{id:"utilizar-el-elemento-cero-de-un-array",children:"Utilizar el elemento cero de un array"}),"\n",(0,r.jsx)(a.p,{children:"Un array siempre tiene un elemento cero. Aunque el elemento cero no se muestra cuando un array soporta un objeto de formulario, no hay ninguna restricci\xf3n(*) para utilizarlo en el lenguaje."}),"\n",(0,r.jsx)(a.p,{children:"He aqu\xed otro ejemplo: quiere inicializar un objeto de formulario con un valor texto pero sin definir un valor por defecto. Puede utilizar el elemento cero del array:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'  // m\xe9todo para un combo box o una lista desplegable  \n  // vinculado al array de variables atName\n Case of\n    :(Form event code=On Load)\n  // Inicializar el array (como se muestra m\xe1s arriba)   \n  // Pero utiliza el elemento cero\n\t\tARRAY TEXT(atName;5)\n\t\tatName{0}:=Please select an item"\n\t\tatName{1}:="Text1"\n\t\tatName{2}:="Text2"\n\t\tatName{3}:="Text3"\n\t\tatName{4}:="Text4"\n\t\tatName{5}:="Text5"\n\t// Posicionar el array en el elemento 0\n  \t\tatName:=0\n End case\n'})}),"\n",(0,r.jsx)(a.p,{children:"(*) Sin embargo, hay una excepci\xf3n: en un array tipo List Box, el elemento cero se utiliza internamente para almacenar el valor anterior de un elemento que se est\xe1 editando, por lo que no es posible utilizarlo en este contexto particular."}),"\n",(0,r.jsx)(a.h2,{id:"arrays-de-dos-dimensiones",children:"Arrays de dos dimensiones"}),"\n",(0,r.jsx)(a.p,{children:"Cada comando de declaraci\xf3n de arrays puede crear o redimensionar arrays unidimensionales o bidimensionales. Ejemplo:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:" ARRAY TEXT(atTopics;100;50) // Crear un array texto compuesto por 100 l\xedneas de 50 columnas\n"})}),"\n",(0,r.jsx)(a.p,{children:"Los arrays de dos dimensiones son esencialmente objetos de lenguaje; no se pueden mostrar ni imprimir."}),"\n",(0,r.jsx)(a.p,{children:"En el ejemplo anterior:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"atTopics es una array de dos dimensiones"}),"\n",(0,r.jsx)(a.li,{children:"atTopics{8}{5} es el quinto elemento (quinta columna..) de la 8\xaa fila"}),"\n",(0,r.jsx)(a.li,{children:"atTopics{20} es la vig\xe9sima fila y es a su vez un array de una dimensi\xf3n"}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"Tama\xf1o del array(atTopics)"})," devuelve 100, que es el n\xfamero de filas"]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"Tama\xf1o de array(atTopics{17})"})," devuelve 50, que es el n\xfamero de columnas de la l\xednea 17"]}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"En el siguiente ejemplo, un puntero a cada campo de cada tabla de la base se almacena en un array de dos dimensiones:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:' C_LONGINT($vlLastTable;$vlLastField)\n C_LONGINT($vlFieldNumber)\n  // Crear tantas l\xedneas (vac\xedas y sin columnas) como tablas haya\n $vlLastTable:=Get last table number\n  ARRAY POINTER(<>apFields;$vlLastTable;0) //Array 2D con X l\xedneas y cero columnas\n  // Para cada tabla\n For($vlTable;1;$vlLastTable)\n    If(Is table number valid($vlTable))\n       $vlLastField:=Obtener el n\xfamero del \xfaltimo campo($vlTable)\n  // Dar valor a los elementos\n       $vlColumnNumber:=0\n       For($vlField;1;$vlLastField)\n          If(Is field number valid($vlTable;$vlField))\n             $vlColumnNumber:=$vlColumnNumber+1\n  //Inserta una columna en una l\xednea de la tabla en curso\n                          INSERT IN ARRAY(<>apFields{$vlTable};$vlColumnNumber;1)\n  //Asignar la "celda" con el puntero\n             <>apFields{$vlTable}{$vlColumnNumber}:=Field($vlTable;$vlField)\n          End if\n       End for\n    End if\n End for\n'})}),"\n",(0,r.jsx)(a.p,{children:"Siempre que se haya inicializado este array de dos dimensiones, se pueden obtener los punteros a los campos de una tabla concreta de la siguiente manera:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:"  // Obtener los punteros a los campos para la tabla que se muestra actualmente en la pantalla:\n COPY ARRAY(\u25caapFields{Table(Current form table)};$apTheFieldsIamWorkingOn)\n  // Inicializar los campos booleanos y de fecha\n For($vlElem;1;Size of array($apTheFieldsIamWorkingOn))\n    Case of\n       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is date)\n          $apTheFieldsIamWorkingOn{$vlElem}->:=Current date\n       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is Boolean)\n          $apTheFieldsIamWorkingOn{$vlElem}->:=True\n    End case\n End for\n"})}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Nota:"})," como sugiere este ejemplo, las l\xedneas de un array de dos dimensiones pueden tener el mismo tama\xf1o o diferentes tama\xf1os."]}),"\n",(0,r.jsx)(a.h2,{id:"arrays-y-memoria",children:"Arrays y memoria"}),"\n",(0,r.jsx)(a.p,{children:"A diferencia de los datos que se almacenan en el disco mediante tablas y registros, un array se mantiene siempre en memoria en su totalidad."}),"\n",(0,r.jsx)(a.p,{children:"Por ejemplo, si se introdujeran todos los c\xf3digos postales de EE. UU. en la tabla [Zip Codes], \xe9sta contendr\xeda unos 100.000 registros. Adem\xe1s, esa tabla incluir\xeda varios campos: el propio c\xf3digo postal y la ciudad, el condado y el estado correspondientes. Si selecciona s\xf3lo los c\xf3digos postales de California, el motor de la base 4D crea la correspondiente selecci\xf3n de registros dentro de la tabla [Zip Codes], y luego carga los registros s\xf3lo cuando se necesitan (es decir, cuando se visualizan o imprimen). En palabras de orden, se trabaja con una serie ordenada de valores (del mismo tipo para cada campo) que se carga parcialmente desde el disco a la memoria por el motor de la base 4D."}),"\n",(0,r.jsx)(a.p,{children:"Hacer lo mismo con arrays ser\xeda prohibido por las siguientes razones:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Para mantener los cuatro tipos de informaci\xf3n (c\xf3digo postal, ciudad, condado, estado), habr\xeda que mantener cuatro grandes arrays en memoria."}),"\n",(0,r.jsx)(a.li,{children:"Como un array se mantiene siempre en memoria en su totalidad, habr\xeda que mantener toda la informaci\xf3n de los c\xf3digos postales en memoria durante toda la sesi\xf3n de trabajo, aunque los datos no est\xe9n siempre en uso."}),"\n",(0,r.jsx)(a.li,{children:"De nuevo, dado que un array se mantiene siempre en memoria en su totalidad, cada vez que se inicia la aplicaci\xf3n y se sale de ella, los cuatro arrays tendr\xedan que cargarse y luego guardarse en el disco, aunque los datos no se utilicen ni se modifiquen durante la sesi\xf3n de trabajo."}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Conclusi\xf3n:"})," los arrays est\xe1n pensados para mantener cantidades razonables de datos durante un corto periodo de tiempo. Por otro lado, como los arrays se mantienen en memoria, son f\xe1ciles de manejar y r\xe1pidos de manipular."]}),"\n",(0,r.jsx)(a.p,{children:"Sin embargo, en algunas circunstancias, puede ser necesario trabajar con arrays que contengan cientos o miles de elementos. La siguiente tabla muestra las f\xf3rmulas utilizadas para calcular la cantidad de memoria utilizada para cada tipo de array:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Tipo de array"}),(0,r.jsx)(a.th,{children:"F\xf3rmula para determinar el uso de la memoria en bytes"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Blob"}),(0,r.jsx)(a.td,{children:"(1+n\xfamero de elementos) * 12 + Suma del tama\xf1o de cada blob"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Boolean"}),(0,r.jsx)(a.td,{children:"(31+n\xfamero de elementos)\\N8"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Fecha"}),(0,r.jsx)(a.td,{children:"(1+n\xfamero de elementos) * 6"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Integer"}),(0,r.jsx)(a.td,{children:"(1+n\xfamero de elementos) * 2"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Entero largo"}),(0,r.jsx)(a.td,{children:"(1+n\xfamero de elementos) * 4"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Object"}),(0,r.jsx)(a.td,{children:"(1+n\xfamero de elementos) * 8 + Suma del tama\xf1o de cada objeto"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Picture"}),(0,r.jsx)(a.td,{children:"(1+n\xfamero de elementos) * 8 + Suma del tama\xf1o de cada imagen"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Puntero"}),(0,r.jsx)(a.td,{children:"(1+n\xfamero de elementos) * 8 + Suma del tama\xf1o de cada puntero"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Real"}),(0,r.jsx)(a.td,{children:"(1+n\xfamero de elementos) * 8"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Text"}),(0,r.jsx)(a.td,{children:"(1+n\xfamero de elementos) * 20 + (suma de la longitud de cada texto) * 2"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Hora"}),(0,r.jsx)(a.td,{children:"(1+n\xfamero de elementos) * 4"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Dos dimensiones"}),(0,r.jsx)(a.td,{children:"(1+n\xfamero de elementos) * 16 + Suma del tama\xf1o de cada array"})]})]})]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Notas:"})}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"El tama\xf1o de un texto en memoria se calcula con esta f\xf3rmula ((Longitud + 1) * 2)"}),"\n",(0,r.jsx)(a.li,{children:"Se requieren algunos bytes adicionales para llevar la cuenta del elemento seleccionado, el n\xfamero de elementos y el propio array."}),"\n"]})]})}function m(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>l,x:()=>i});var r=n(296540);const s={},o=r.createContext(s);function l(e){const a=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(o.Provider,{value:a},e.children)}}}]);