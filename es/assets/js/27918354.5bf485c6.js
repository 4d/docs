"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11613"],{229855:function(e,n,a){a.r(n),a.d(n,{metadata:()=>o,contentTitle:()=>i,default:()=>p,assets:()=>s,toc:()=>c,frontMatter:()=>l});var o=JSON.parse('{"id":"commands-legacy/order-by","title":"ORDER BY","description":"ORDER BY ( {tabla ;}{ unCampo }{; >\xa0o\xa0\xa0o\xa0\xa0o\xa0<N}{; *} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/order-by.md","sourceDirName":"commands-legacy","slug":"/commands/order-by","permalink":"/docs/es/commands/order-by","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Forder-by.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"order-by","title":"ORDER BY","slug":"/commands/order-by","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Last query plan","permalink":"/docs/es/commands/last-query-plan"},"next":{"title":"ORDER BY ATTRIBUTE","permalink":"/docs/es/commands/order-by-attribute"}}'),r=a("785893"),d=a("250065");let l={id:"order-by",title:"ORDER BY",slug:"/commands/order-by",displayed_sidebar:"docs"},i=void 0,s={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Ejemplo 5",id:"ejemplo-5",level:4},{value:"Ejemplo 6",id:"ejemplo-6",level:4},{value:"Ejemplo 7",id:"ejemplo-7",level:4},{value:"Ejemplo 8",id:"ejemplo-8",level:4},{value:"Ejemplo 9",id:"ejemplo-9",level:4},{value:"Ejemplo 10",id:"ejemplo-10",level:4},{value:"Ejemplo 11",id:"ejemplo-11",level:4},{value:"Ejemplo 12",id:"ejemplo-12",level:4},{value:"Ejemplo 13",id:"ejemplo-13",level:4},{value:"Ejemplo 14",id:"ejemplo-14",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function t(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ORDER BY"})," ( {",(0,r.jsx)(n.em,{children:"tabla"})," ;}{ ",(0,r.jsx)(n.em,{children:"unCampo"})," }{; >\xa0o\xa0< }{; ",(0,r.jsx)(n.em,{children:"unCampo2"})," ; >\xa0o\xa0<2 ; ... ; ",(0,r.jsx)(n.em,{children:"unCampoN"})," ; >\xa0o\xa0<N}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tabla"}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Tabla para la cual ordenar los registros seleccionados o Tabla por defecto si se omite"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"unField"}),(0,r.jsx)(n.td,{children:"Field"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Campo en el cual efectuar la ordenaci\xf3n para cada nivel"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:">\xa0o\xa0<"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Sentido de la ordenaci\xf3n para cada nivel: > para orden ascendente o < para orden descendente"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Continua la bandera de ordenaci\xf3n"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["ORDER BY ordena (reordena) los registros de la selecci\xf3n actual de ",(0,r.jsx)(n.em,{children:"tabla"})," para el proceso actual. Una vez efectuada la ordenaci\xf3n, el primer registro de la nueva selecci\xf3n actual se convierte en el registro actual."]}),"\n",(0,r.jsxs)(n.p,{children:["Si omite el par\xe1metro ",(0,r.jsx)(n.em,{children:"tabla"}),", el comando se aplica a la tabla por defecto, si se ha definido una tabla por defecto. Si no 4D utiliza la tabla del primer campo pasado como par\xe1metro. Si no pasa un par\xe1metro y si no se ha definido una tabla por defecto, se devuelve un error."]}),"\n",(0,r.jsxs)(n.p,{children:["Si no especifica el par\xe1metro ",(0,r.jsx)(n.em,{children:"campo"}),", ni los par\xe1metros ",(0,r.jsx)(n.em,{children:"> o <"})," o, ORDER BY muestra la caja de di\xe1logo Ordenar de 4D para ",(0,r.jsx)(n.em,{children:"tabla"}),". Esta es la caja de di\xe1logo del editor:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:a(153154).Z+"",width:"573",height:"348"})}),"\n",(0,r.jsx)(n.p,{children:"Para mayor informaci\xf3n sobre la utilizaci\xf3n de este editor, consulte el Manual de dise\xf1o de 4D."}),"\n",(0,r.jsxs)(n.p,{children:["Si especifica los par\xe1metros ",(0,r.jsx)(n.em,{children:"unCampo"})," y ",(0,r.jsx)(n.em,{children:"> o <"}),", la caja de di\xe1logo est\xe1ndar de Ordenar no se muestra y la ordenaci\xf3n se define por programaci\xf3n. Puede ordenar la selecci\xf3n en un nivel o en varios niveles. Para cada nivel de clasificaci\xf3n, se especifica un campo en ",(0,r.jsx)(n.em,{children:"unCampo"})," y el orden de clasificaci\xf3n en ",(0,r.jsx)(n.em,{children:"> o <"}),'. Si pasa el s\xedmbolo "mayor que" (>), el orden es ascendente. Si pasa el s\xedmbolo "menor que" (<), el orden es descendente.']}),"\n",(0,r.jsxs)(n.p,{children:["Si omite el par\xe1metro de ordenaci\xf3n ",(0,r.jsx)(n.em,{children:"> o <"}),", el orden es ascendente por defecto."]}),"\n",(0,r.jsxs)(n.p,{children:["Si s\xf3lo se especifica un campo (ordenaci\xf3n de un nivel) y se indexa, se utiliza el \xedndice para el orden. Si el campo no est\xe1 indexado o si hay m\xe1s de un campo, el orden se ejecuta secuencialmente (excepto en el caso de \xedndices compuestos). El campo puede pertenecer a la tabla de la selecci\xf3n que est\xe1 siendo reordenada o a una tabla 1 relacionada con ",(0,r.jsx)(n.em,{children:"tabla"})," por una relaci\xf3n autom\xe1tica. En este caso, el orden es siempre secuencial.",(0,r.jsx)(n.br,{}),"\nSi los campos ordenados est\xe1n incluidos en un \xedndice compuesto, ",(0,r.jsx)(n.strong,{children:"ORDER BY"})," utiliza el \xedndice para el orden."]}),"\n",(0,r.jsxs)(n.p,{children:["Para ordenaciones m\xfaltiples (ordenar en varios campos), puede llamar",(0,r.jsx)(n.strong,{children:"ORDER BY"})," tantas veces como sea necesario y especificar el par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"*"}),", excepto para la \xfaltima llamada ",(0,r.jsx)(n.strong,{children:"ORDER BY"}),", que inicia la operaci\xf3n de ordenaci\xf3n real. Esta funcionalidad es \xfatil para la gesti\xf3n de ordenaciones multicriterios en interfaces de usuario personalizadas.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Atenci\xf3n"}),": con esta sintaxis, s\xf3lo puede pasar un nivel de ordenaci\xf3n (campo) por l\xednea de instrucci\xf3n."]}),"\n",(0,r.jsxs)(n.p,{children:["No importa c\xf3mo se haya definido una ordenaci\xf3n, si la operaci\xf3n de ordenaci\xf3n real va a tomar alg\xfan tiempo para realizarse, 4D muestra autom\xe1ticamente un mensaje que contiene un term\xf3metro de progreso. Estos mensajes se pueden activar y desactivar utilizando los comandos ",(0,r.jsx)(n.a,{href:"/docs/es/commands/messages-on",children:"MESSAGES ON"})," y ",(0,r.jsx)(n.a,{href:"/docs/es/commands/messages-off",children:"MESSAGES OFF"}),". Si se muestra el term\xf3metro de progreso, el usuario puede hacer clic en el bot\xf3n Detener para interrumpir la ordenaci\xf3n."]}),"\n",(0,r.jsxs)(n.p,{children:["Si la ordenaci\xf3n se realiza correctamente, la variable OK toma el valor ",(0,r.jsx)(n.em,{children:"1"}),". Si el usuario hace clic en Cancelar, ORDER BY termina sin efectuar la ordenaci\xf3n, y la variable OK toma el valor ",(0,r.jsx)(n.em,{children:"0"})," (cero)."]}),"\n",(0,r.jsx)(n.h5,{id:""}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," este comando no soporta campos de tipo Objeto."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsx)(n.p,{children:"El siguiente ejemplo muestra la caja de di\xe1logo Ordenar para la tabla [Productos]:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ORDER BY([Productos])\n"})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"El siguiente ejemplo muestra la caja de di\xe1logo Ordenar para la tabla por defecto (si ha sido definida):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ORDER BY\n"})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,r.jsx)(n.p,{children:"El ejemplo siguiente ordena la selecci\xf3n actual de [Productos] por nombre en orden ascendente:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ORDER BY([Productos];[Productos]Nombre;>)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,r.jsx)(n.p,{children:"El siguiente ejemplo ordena la selecci\xf3n actual de [Productos] por nombre en orden descendente:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ORDER BY([Productos];[Productos]Nombre;<)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-5",children:"Ejemplo 5"}),"\n",(0,r.jsx)(n.p,{children:"La l\xednea siguiente ordena la selecci\xf3n de [Productos] por tipo y precio en orden ascendente para ambos niveles:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ORDER BY([Productos];[Productos]Tipo;>;[Productos]Precio;>)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-6",children:"Ejemplo 6"}),"\n",(0,r.jsx)(n.p,{children:"El siguiente ejemplo ordena la selecci\xf3n actual de [Productos] por tipo y precio en orden descendente para ambos niveles:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ORDER BY([Productos];[Productos]Tipo;<;[Productos]Precio;<)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-7",children:"Ejemplo 7"}),"\n",(0,r.jsx)(n.p,{children:"El siguiente ejemplo ordena la selecci\xf3n actual de [Productos] por tipo en orden ascendente y por precio en orden descendente:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ORDER BY([Productos];[Productos]Tipo;>;[Productos]Precio;<)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-8",children:"Ejemplo 8"}),"\n",(0,r.jsx)(n.p,{children:"El siguiente ejemplo ordena la selecci\xf3n actual de [Products] por tipo en orden descendente y por precio en orden ascendente:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ORDER BY([Products];[Products]Type;<;[Products]Price;>)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-9",children:"Ejemplo 9"}),"\n",(0,r.jsx)(n.p,{children:"El siguiente ejemplo efect\xfaa una ordenaci\xf3n indexada si el campo [Productos]Nombre est\xe1 indexado:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ORDER BY([Productos];[Productos]Nombre;>)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-10",children:"Ejemplo 10"}),"\n",(0,r.jsx)(n.p,{children:"El siguiente ejemplo ordena la selecci\xf3n actual de [Products] por nombre en orden ascendente:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ORDER BY([Products];[Products]Name\n"})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-11",children:"Ejemplo 11"}),"\n",(0,r.jsx)(n.p,{children:"El siguiente ejemplo efect\xfaa una ordenaci\xf3n secuencial, sin importar si los campos est\xe1n indexados:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ORDER BY([Productos];[Productos]Tipo;>;[Productos]Precio;>)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-12",children:"Ejemplo 12"}),"\n",(0,r.jsx)(n.p,{children:"La siguiente l\xednea realiza una ordenaci\xf3n secuencial utilizando un campo relacionado:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0SET FIELD RELATION([Employee]Company_ID;Automatic;Do not modify)\n\xa0ORDER BY([Employee];[Company]LastName)\n\xa0SET FIELD RELATION([Employee]Company_ID;Structure configuration;Do not modify)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-13",children:"Ejemplo 13"}),"\n",(0,r.jsx)(n.p,{children:"El siguiente ejemplo realiza una ordenaci\xf3n indexada en dos niveles si un \xedndice compuesto [Contacts]LastName + [Contacts]FirstName cse ha especificado en la base:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ORDER BY([Contacts];[Contacts]LastName;>;[Contacts]FirstName;>)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-14",children:"Ejemplo 14"}),"\n",(0,r.jsxs)(n.p,{children:["En un formulario de salida mostrado en modo Aplicaci\xf3n, usted le permite a los usuarios ordenar una columna en orden creciente simplemente haciendo clic en el encabezado de la columna. Si el usuario mantiene presionada la tecla ",(0,r.jsx)(n.strong,{children:"May\xfas"})," mientras hace clic en otros encabezados de columnas, la ordenaci\xf3n se lleva a cabo en varios niveles:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:a(432344).Z+"",width:"744",height:"457"})}),"\n",(0,r.jsx)(n.p,{children:"Cada encabezado de columna contiene un bot\xf3n resaltado asociado con el siguiente m\xe9todo de objeto:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0MULTILEVEL(->[CDs]Title)\xa0//Bot\xf3n del encabezado de la columna t\xedtulo\n"})}),"\n",(0,r.jsx)(n.p,{children:"Cada bot\xf3n llama al m\xe9todo de proyecto MULTINIVEL con un puntero al campo de la columna correspondiente. El m\xe9todo proyecto MULTINIVEL es el siguiente:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo proyecto MULTINIVEL\n\xa0\xa0// MULTILEVEL (Pointer)\n\xa0\xa0// MULTILEVEL (->[Table]Field)\n\xa0\n\xa0var $1)\xa0\xa0\xa0//Nivel de ordenaci\xf3n (campo : Pointer\n\xa0var $lLevelNb : Integer\n\xa0\n\xa0\xa0//Construcci\xf3n de criterios\n\xa0If(Not(Shift down))\xa0//Ordenaci\xf3n simple (un nivel)\n\xa0\xa0\xa0\xa0ARRAY POINTER(aPtrSortField;1)\n\xa0\xa0\xa0\xa0aPtrSortField{1}:=$1\n\xa0Else\n\xa0\xa0\xa0\xa0$lLevelNb:=Find in array(aPtrSortField;$1)\xa0//\xbfYa est\xe1 ordenado este campo?\n\xa0\xa0\xa0\xa0If($lLevelNb<0)\xa0//Si no\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0INSERT IN ARRAY(aPtrSortField;Size of array(aPtrSortField)+1;1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0aPtrSortField{Size of array(aPtrSortField)}:=$1\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n\xa0\xa0//Ejecuci\xf3n de la ordenaci\xf3n\n\xa0$lLevelNb:=Size of array(aPtrSortField)\n\xa0If($lLevelNb>0)\xa0//Hay por lo menos un nivel de ordenaci\xf3n\n\xa0\xa0\xa0\xa0For($i;1;$lLevelNb)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ORDER BY([CDs];(aPtrSortField{$i})->;>;*)\xa0//Construir la ordenaci\xf3n\n\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0ORDER BY([CDs])\xa0//No * termina la definici\xf3n de la ordenaci\xf3n y comienza la operaci\xf3n de ordenaci\xf3n actual.\n\xa0End if\n"})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/es/commands/order-by-formula",children:"ORDER BY FORMULA"})}),"\n",(0,r.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"49"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifica variables"}),(0,r.jsx)(n.td,{children:"OK"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifica el registro actual"}),(0,r.jsx)(n.td,{})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},432344:function(e,n,a){a.d(n,{Z:function(){return o}});let o=a.p+"assets/images/pict16003.es-07bbf38f5cb2b0deb29271469052187b.png"},153154:function(e,n,a){a.d(n,{Z:function(){return o}});let o=a.p+"assets/images/pict2286854.es-133878dfbac0fdc22f712be980cc6120.png"},250065:function(e,n,a){a.d(n,{Z:function(){return i},a:function(){return l}});var o=a(667294);let r={},d=o.createContext(r);function l(e){let n=o.useContext(d);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);