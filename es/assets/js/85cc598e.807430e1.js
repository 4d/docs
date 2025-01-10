"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61865"],{996018:function(e,a,s){s.r(a),s.d(a,{default:()=>u,frontMatter:()=>o,metadata:()=>n,assets:()=>d,toc:()=>c,contentTitle:()=>i});var n=JSON.parse('{"id":"commands-legacy/query","title":"QUERY","description":"QUERY ( {tabla }{;}{ criterioBusqueda {; *}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/query.md","sourceDirName":"commands-legacy","slug":"/commands/query","permalink":"/docs/es/commands/query","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fquery.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"query","title":"QUERY","slug":"/commands/query","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ORDER BY FORMULA","permalink":"/docs/es/commands/order-by-formula"},"next":{"title":"QUERY BY ATTRIBUTE","permalink":"/docs/es/commands/query-by-attribute"}}'),l=s("785893"),r=s("250065");let o={id:"query",title:"QUERY",slug:"/commands/query",displayed_sidebar:"docs"},i=void 0,d={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Construcci\xf3n de una l\xednea de b\xfasqueda",id:"construcci\xf3n-de-una-l\xednea-de-b\xfasqueda",level:4},{value:"Ejemplo 5",id:"ejemplo-5",level:4},{value:"Ejemplo 6",id:"ejemplo-6",level:4},{value:"Ejemplo 7",id:"ejemplo-7",level:4},{value:"Ejemplo 8",id:"ejemplo-8",level:4},{value:"Ejemplo 9",id:"ejemplo-9",level:4},{value:"Ejemplo 10",id:"ejemplo-10",level:4},{value:"Ejemplo 11",id:"ejemplo-11",level:4},{value:"Ejemplo 12",id:"ejemplo-12",level:4},{value:"Ejemplo 13",id:"ejemplo-13",level:4},{value:"Ejemplo 14",id:"ejemplo-14",level:4},{value:"Ejemplo 15",id:"ejemplo-15",level:4},{value:"Ejemplo 16",id:"ejemplo-16",level:4},{value:"Ejemplo 17",id:"ejemplo-17",level:4},{value:"Ejemplo 18",id:"ejemplo-18",level:4},{value:"Ejemplo 19",id:"ejemplo-19",level:4},{value:"Ejemplo 20",id:"ejemplo-20",level:4},{value:"Ejemplo 21",id:"ejemplo-21",level:4},{value:"Ejemplo 22",id:"ejemplo-22",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function t(e){let a={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a.p,{children:[(0,l.jsx)(a.strong,{children:"QUERY"})," ( {",(0,l.jsx)(a.em,{children:"tabla"})," }{;}{ ",(0,l.jsx)(a.em,{children:"criterioBusqueda"})," {; *}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(a.table,{children:[(0,l.jsx)(a.thead,{children:(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.th,{children:"Par\xe1metro"}),(0,l.jsx)(a.th,{children:"Tipo"}),(0,l.jsx)(a.th,{}),(0,l.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,l.jsxs)(a.tbody,{children:[(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"tabla"}),(0,l.jsx)(a.td,{children:"Table"}),(0,l.jsx)(a.td,{children:"\u2192"}),(0,l.jsx)(a.td,{children:"Tabla para la cual devolver una selecci\xf3n de registros o Tabla por defecto, si se omite"})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"criterioBusqueda"}),(0,l.jsx)(a.td,{children:"Expression"}),(0,l.jsx)(a.td,{children:"\u2192"}),(0,l.jsx)(a.td,{children:"Criterio de b\xfasqueda"})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"*"}),(0,l.jsx)(a.td,{children:"Operador"}),(0,l.jsx)(a.td,{children:"\u2192"}),(0,l.jsx)(a.td,{children:"Continuar la ejecuci\xf3n de la b\xfasqueda"})]})]})]}),"\n",(0,l.jsx)(a.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsxs)(a.p,{children:["El comando QUERY busca los registros que corresponden al criterio especificado en ",(0,l.jsx)(a.em,{children:"criterioBusqueda"})," y devuelve una selecci\xf3n de registros de ",(0,l.jsx)(a.em,{children:"tabla"}),". QUERY modifica la selecci\xf3n actual de ",(0,l.jsx)(a.em,{children:"tabla"})," para el proceso actual y vuelve el primer registro de la nueva selecci\xf3n el registro actual."]}),"\n",(0,l.jsxs)(a.p,{children:["Si omite el par\xe1metro ",(0,l.jsx)(a.em,{children:"tabla"}),", el comando se aplica a la tabla por defecto. Si no se ha definido una tabla por defecto, se genera un error."]}),"\n",(0,l.jsxs)(a.p,{children:["Si no especifica ",(0,l.jsx)(a.em,{children:"criterioBusqueda"})," ni el par\xe1metro ",(0,l.jsx)(a.em,{children:"*"}),", QUERY muestra la caja de di\xe1logo del editor de b\xfasquedas para ",(0,l.jsx)(a.em,{children:"tabla"})," (excepto cuando es la \xfaltima fila de una b\xfasqueda m\xfaltiple, ver ejemplo 2):"]}),"\n",(0,l.jsx)(a.p,{children:(0,l.jsx)(a.img,{src:s(224743).Z+"",width:"856",height:"164"})}),"\n",(0,l.jsx)(a.p,{children:"Para mayor informaci\xf3n sobre la utilizaci\xf3n de este editor, consulte el Manual de Dise\xf1o."}),"\n",(0,l.jsxs)(a.p,{children:["El usuario construye la b\xfasqueda, luego hace clic en el bot\xf3n Buscar o Buscar en la selecci\xf3n. Si la b\xfasqueda se realiza sin interrupciones, la variable sistema OK toma el valor 1. Si el usuario hace clic en Cancelar, el comando QUERY es interrumpido sin realizar la b\xfasqueda y la variable OK toma el valor ",(0,l.jsx)(a.em,{children:"0"})," (cero)."]}),"\n",(0,l.jsx)(a.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,l.jsx)(a.p,{children:"El ejemplo siguiente muestra el editor de b\xfasquedas para la tabla [Productos]:"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-4d",children:"\xa0QUERY([Productos])\n"})}),"\n",(0,l.jsx)(a.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,l.jsx)(a.p,{children:"La l\xednea siguiente muestra el editor de b\xfasquedas para la tabla por defecto (si se ha definido)"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-4d",children:"\xa0QUERY\n"})}),"\n",(0,l.jsxs)(a.p,{children:["Si especifica el par\xe1metro ",(0,l.jsx)(a.em,{children:"criterioBusqueda"}),", el editor de b\xfasquedas no se muestra y la b\xfasqueda se define por programaci\xf3n. Para b\xfasquedas simples (b\xfasquedas en un solo campo) usted llama QUERY una vez con el par\xe1metro ",(0,l.jsx)(a.em,{children:"criterioBusqueda"}),". Para b\xfasquedas complejas (b\xfasquedas en m\xfaltiples campos o con m\xfaltiples condiciones), llame QUERY tantas veces como sea necesario con el par\xe1metro ",(0,l.jsx)(a.em,{children:"criterioBusqueda"}),", y el par\xe1metro opcional *, excepto para la \xfaltima llama QUERY, la cual inicia la b\xfasqueda."]}),"\n",(0,l.jsx)(a.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,l.jsx)(a.p,{children:"El siguiente ejemplo busca las [Personas] cuyo nombre comienza por \u201Ca\u201D:"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-4d",children:'\xa0QUERY([Personas];[Personas]Nombre="a@")\n'})}),"\n",(0,l.jsx)(a.h4,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,l.jsx)(a.p,{children:"El siguiente ejemplo busca las [Personas] cuyo nombre comienza por \u201Ca\u201D o \u201Cb\u201D:"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-4d",children:'\xa0QUERY([Personas];[Personas]Nombre="a@";*)\xa0// * indica que hay otro criterio de b\xfasqueda\n\xa0QUERY([Personas];|;[Personas]Nombre="b@")\xa0// Sin * indica el fin de la definici\xf3n de los criterios de b\xfasqueda y el inicio de la ejecuci\xf3n de la b\xfasqueda.\n\xa0\n'})}),"\n",(0,l.jsxs)(a.p,{children:[(0,l.jsx)(a.strong,{children:"Nota:"})," el modo de interpretaci\xf3n del car\xe1cter @ en las b\xfasquedas puede modificarse en una opci\xf3n de las preferencias. Para mayor informaci\xf3n, consulte la secci\xf3n ",(0,l.jsx)(a.em,{children:"Operadores de comparaci\xf3n"}),"."]}),"\n",(0,l.jsx)(a.h4,{id:"construcci\xf3n-de-una-l\xednea-de-b\xfasqueda",children:"Construcci\xf3n de una l\xednea de b\xfasqueda"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsxs)(a.li,{children:["El par\xe1metro ",(0,l.jsx)(a.em,{children:"criterioBusqueda"})," utiliza la siguiente sintaxis:"]}),"\n"]}),"\n",(0,l.jsx)(a.p,{children:"{ operador; } campo comparador valor"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsx)(a.li,{children:"El operador se utiliza para unir las llamadas a QUERY cuando se definen b\xfasquedas m\xfaltiples. Los operadores disponibles son los mismos del editor de b\xfasquedas:"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(a.table,{children:[(0,l.jsx)(a.thead,{children:(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.th,{children:(0,l.jsx)(a.strong,{children:"Operador"})}),(0,l.jsx)(a.th,{children:(0,l.jsx)(a.strong,{children:"S\xedmbolo a utilizar con QUERY"})})]})}),(0,l.jsxs)(a.tbody,{children:[(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"AND"}),(0,l.jsx)(a.td,{children:"&"})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"OR"}),(0,l.jsx)(a.td,{children:"|"})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"Except"}),(0,l.jsx)(a.td,{children:"#"})]})]})]}),"\n",(0,l.jsx)(a.p,{children:"El operador es opcional y no es necesario para la primera llamada a QUERY de una b\xfasqueda m\xfaltiple, o si la b\xfasqueda es una b\xfasqueda simple."}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsxs)(a.li,{children:["El ",(0,l.jsx)(a.em,{children:"campo"})," es el campo a buscar. El ",(0,l.jsx)(a.em,{children:"campo"})," puede pertenecer a otra tabla si pertenece a una tabla Uno relacionada a ",(0,l.jsx)(a.em,{children:"tabla"})," con relaci\xf3n autom\xe1tica o manual. La tabla a la cual se aplica QUERY debe ser la tabla Muchos."]}),"\n",(0,l.jsxs)(a.li,{children:["El ",(0,l.jsx)(a.em,{children:"operador"})," es el elemento que permite comparar ",(0,l.jsx)(a.em,{children:"campo"})," y ",(0,l.jsx)(a.em,{children:"criterioBusqueda"}),". Esta es la lista de posibles comparadores:"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(a.table,{children:[(0,l.jsx)(a.thead,{children:(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.th,{children:(0,l.jsx)(a.strong,{children:"Comparador"})}),(0,l.jsx)(a.th,{children:(0,l.jsx)(a.strong,{children:"S\xedmbolo a utilizar con QUERY"})})]})}),(0,l.jsxs)(a.tbody,{children:[(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"Igual a"}),(0,l.jsx)(a.td,{children:"="})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"Diferente de"}),(0,l.jsx)(a.td,{children:"#"})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"Menor que"}),(0,l.jsx)(a.td,{children:"<"})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"Mayor que"}),(0,l.jsx)(a.td,{children:">"})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"Menor o igual a"}),(0,l.jsx)(a.td,{children:"<="})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"Mayor o igual a"}),(0,l.jsx)(a.td,{children:">="})]})]})]}),"\n",(0,l.jsxs)(a.p,{children:[(0,l.jsx)(a.strong,{children:"Nota:"})," es posible definir el comparador bajo la forma de una expresi\xf3n alfanum\xe9rica en lugar de un s\xedmbolo. En ese caso, es obligatorio utilizar punto y comas para disociar los elementos de la cadena de b\xfasqueda. Este principio permite por ejemplo crear secuencias de b\xfasquedas par\xe1metrables variando el comparador, o construir interfaces de b\xfasqueda usuario personalizadas. Consulte el ejemplo 21."]}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsxs)(a.li,{children:["El ",(0,l.jsx)(a.em,{children:"valor"})," es el dato que se compara con el contenido de ",(0,l.jsx)(a.em,{children:"campo"}),". El valor puede ser una expresi\xf3n del mismo tipo que ",(0,l.jsx)(a.em,{children:"campo"}),'. El tipo de valor se eval\xfaa una vez, al comienzo de la b\xfasqueda y no para cada registro. Si la b\xfasqueda se refiere al contenido de una cadena de caracteres, utilice en valor el s\xedmbolo arroba (@) para aislar el contenido a buscar, por ejemplo "@Perez@". Es de anotar, en este caso, que usted se beneficiar\xe1 s\xf3lo de forma parcial de una b\xfasqueda indexada (compactibidad de almacenamiento).',(0,l.jsx)(a.br,{}),"\nLa b\xfasqueda por palabras claves est\xe1 s\xf3lo disponible para campos tipo Alfa y Texto. Por favor consulte la secci\xf3n ",(0,l.jsx)(a.em,{children:"Operadores de comparaci\xf3n"})," para m\xe1s informaci\xf3n acerca de este tipo de b\xfasqueda."]}),"\n"]}),"\n",(0,l.jsx)(a.p,{children:"Estas son las reglas a tener en cuenta para la construcci\xf3n de b\xfasquedas m\xfaltiples:"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsx)(a.li,{children:"La primera l\xednea no debe contener un operador."}),"\n",(0,l.jsx)(a.li,{children:"La siguientes l\xedneas deben comenzar con un operador."}),"\n",(0,l.jsx)(a.li,{children:"Todas las l\xedneas, excepto la \xfaltima, deben utilizar el par\xe1metro *."}),"\n",(0,l.jsx)(a.li,{children:"Para iniciar la b\xfasqueda, no pase el par\xe1metro * durante la construcci\xf3n de su \xfaltima l\xednea. Alternativamente, puede ejecutar el comando QUERY sin otros par\xe1metros diferentes a la tabla (el editor de b\xfasquedas no se muestra; en su lugar, se ejecuta la b\xfasqueda m\xfaltiple)."}),"\n"]}),"\n",(0,l.jsxs)(a.p,{children:[(0,l.jsx)(a.strong,{children:"Nota:"})," cada tabla mantiene su propia construcci\xf3n de b\xfasqueda actual. Esto significa que puede crear m\xfaltiples b\xfasquedas simult\xe1neamente, una por cada tabla. Debe utilizar el par\xe1metro tabla o especificar una tabla por defecto."]}),"\n",(0,l.jsx)(a.p,{children:"Sin importar de qu\xe9 manera se ha definido una b\xfasqueda:"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsxs)(a.li,{children:["Si la operaci\xf3n de b\xfasqueda va a tomar alg\xfan tiempo, 4D muestra autom\xe1ticamente un mensaje que contiene un term\xf3metro de progreso. Estos mensajes pueden ser activados o desactivados utilizando los comandos ",(0,l.jsx)(a.a,{href:"/docs/es/commands/messages-on",children:"MESSAGES ON"})," y ",(0,l.jsx)(a.a,{href:"/docs/es/commands/messages-off",children:"MESSAGES OFF"}),". Si se muestra el term\xf3metro de progreso, el usuario puede hacer clic en el bot\xf3n Detener para interrumpir la b\xfasqueda. Si la b\xfasqueda se completa, OK toma el valor 1. De lo contrario, si la b\xfasqueda es interrumpida, OK toma el valor 0 (cero)."]}),"\n",(0,l.jsxs)(a.li,{children:["Si los campos indexados son especificados, la b\xfasqueda es optimizada cada vez que sea posible (se busca primero en los campo indexados) reduciendo al m\xe1ximo la duraci\xf3n de la operaci\xf3n. El comando usa los \xedndices compuestos para las b\xfasquedas utilizando ",(0,l.jsx)(a.em,{children:"AND"})," (&)"]}),"\n"]}),"\n",(0,l.jsx)(a.h4,{id:"ejemplo-5",children:"Ejemplo 5"}),"\n",(0,l.jsx)(a.p,{children:"Buscamos los registros para que correspondan a personas con el apellido L\xf3pez:"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-4d",children:'\xa0QUERY([Personas];[Personas]Apellido="L\xf3pez")\n'})}),"\n",(0,l.jsxs)(a.p,{children:[(0,l.jsx)(a.strong,{children:"Nota:"})," si el campo Apellido est\xe1 indexado, nos beneficiamos de una b\xfasqueda acelerada utilizando el \xedndice."]}),"\n",(0,l.jsxs)(a.p,{children:[(0,l.jsx)(a.strong,{children:"Recordatorio:"})," esta b\xfasqueda encontrar\xe1 registros como \u201CL\xf3pez\u201D, \u201Cl\xf3pez\u201D, \u201CL\xd3PEZ\u201D, etc. Si quiere que la b\xfasqueda tenga en cuenta las may\xfasculas y min\xfasculas, defina criterios suplementarios que utilicen los c\xf3digos ASCII."]}),"\n",(0,l.jsx)(a.h4,{id:"ejemplo-6",children:"Ejemplo 6"}),"\n",(0,l.jsx)(a.p,{children:"El siguiente ejemplo busca los registros de personas llamadas Carlos L\xf3pez. El campo Apellido est\xe1 indexado. El campo Nombre no est\xe1 indexado."}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-4d",children:'\xa0QUERY([Personas];[Personas]Last Name="l\xf3pez";*)\xa0// Buscar todas las personas de apellido L\xf3pez\n\xa0QUERY([Personas];\xa0&\xa0;[Personas]First Name="carlos")\xa0// llamadas Carlos\n'})}),"\n",(0,l.jsx)(a.p,{children:"Cuando se realiza la b\xfasqueda, primero se efect\xfaa una b\xfasqueda r\xe1pida en el campo indexado Apellido, y se reduce la selecci\xf3n de registros a las personas de apellido L\xf3pez. La b\xfasqueda luego busca secuencialmente en el campo Nombre en esta selecci\xf3n de registros."}),"\n",(0,l.jsx)(a.h4,{id:"ejemplo-7",children:"Ejemplo 7"}),"\n",(0,l.jsxs)(a.p,{children:["El siguiente ejemplo aprovechar\xe1 autom\xe1ticamente un \xedndice compuesto de los campos ",(0,l.jsx)(a.em,{children:"[People]First Name"}),"+",(0,l.jsx)(a.em,{children:"[People]Last Name"})," (si existe) para encontrar los registros de todas las personas llamadas John Smith."]}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-4d",children:'\xa0QUERY([People];[People]First Name="john";*)\xa0// Buscar a cada persona llamada John\n\xa0QUERY([People];&;[People]Last Name="smith")\xa0// con apellido Smith\n'})}),"\n",(0,l.jsxs)(a.p,{children:["Para m\xe1s informaci\xf3n, consulte ",(0,l.jsx)(a.em,{children:"\xcdndices compuestos"}),"."]}),"\n",(0,l.jsx)(a.h4,{id:"ejemplo-8",children:"Ejemplo 8"}),"\n",(0,l.jsx)(a.p,{children:"El siguiente ejemplo busca registros de personas de apellido L\xf3pez o G\xf3mez. El campo Apellido est\xe1 indexado."}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-4d",children:'\xa0QUERY([Personas];[Personas]Apellido="l\xf3pez";*)\xa0// Buscar todas las personas de apellido L\xf3pez\u2026\n\xa0QUERY([Personas];|;[Personas]Apellido="g\xf3mez")\xa0// ...o G\xf3mez\n'})}),"\n",(0,l.jsx)(a.p,{children:"El comando QUERY utiliza el \xedndice del campo Apellido para ambas b\xfasquedas. Las dos b\xfasquedas se efect\xfaan, y sus resultados se colocan en conjuntos internos que son combinados eventualmente utilizando una operaci\xf3n de uni\xf3n."}),"\n",(0,l.jsx)(a.h4,{id:"ejemplo-9",children:"Ejemplo 9"}),"\n",(0,l.jsx)(a.p,{children:"El siguiente ejemplo busca los registros de personas que no trabajan en una empresa. La b\xfasqueda se realiza probando si el nombre de la empresa es una cadena vac\xeda."}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-4d",children:'\xa0QUERY([Personas];[Personas]Empresa="")\xa0// Buscar las personas sin empresa\n'})}),"\n",(0,l.jsx)(a.h4,{id:"ejemplo-10",children:"Ejemplo 10"}),"\n",(0,l.jsx)(a.p,{children:"El siguiente ejemplo busca cada persona cuyo apellido es L\xf3pez, y trabaja para una empresa en Barcelona. La segunda b\xfasqueda utiliza un campo de otra tabla. Esta b\xfasqueda se puede efectuar porque la tabla [Personas] est\xe1 relacionada a la tabla [Empresa] por una relaci\xf3n muchos a uno:"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-4d",children:'\xa0QUERY([Personas];[Personas]Apellido="l\xf3pez";*)\xa0// Buscar todas las personas de apellido L\xf3pez\u2026\n\xa0QUERY([Personas];&;[Empresa]Ciudad ="Barcelona")\xa0// ... que trabajan para una empresa en Barcelona\n'})}),"\n",(0,l.jsx)(a.h4,{id:"ejemplo-11",children:"Ejemplo 11"}),"\n",(0,l.jsx)(a.p,{children:"El siguiente ejemplo busca el registro de cada persona cuyo inicial del nombre est\xe9 entre la letra A (incluida) y M (incluida):"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-4d",children:'\xa0QUERY([Personas];[Personas]Nombre<"n")\xa0// Encontrar todas las personas entre A y M\n'})}),"\n",(0,l.jsx)(a.h4,{id:"ejemplo-12",children:"Ejemplo 12"}),"\n",(0,l.jsx)(a.p,{children:"El siguiente ejemplo busca los registros de las personas que viven en Madrid o Barcelona:"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-4d",children:'\xa0QUERY([Personas];[Personas]CodigoPostal="28@";*)\xa0// Buscar toda las personas que viven en Madrid\u2026\n\xa0QUERY([Personas];|;[Personas]ZIP CodigoPostal="08@")\xa0// ...o en Barcelona\n'})}),"\n",(0,l.jsx)(a.h4,{id:"ejemplo-13",children:"Ejemplo 13"}),"\n",(0,l.jsx)(a.p,{children:'B\xfasqueda por palabra clave: el siguiente ejemplo busca en toda la tabla [Productos] los registros cuyo campo Descripci\xf3n contenga la palabra "f\xe1cil":'}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-4d",children:'\xa0QUERY([Productos];[Productos]Descripcion%"f\xe1cil")\xa0// Buscar productos cuya descripci\xf3n contenga la palabra clave f\xe1cil\n'})}),"\n",(0,l.jsx)(a.h4,{id:"ejemplo-14",children:"Ejemplo 14"}),"\n",(0,l.jsx)(a.p,{children:"El siguiente ejemplo busca los registros que corresponden a la referencia de la factura introducida en una caja de di\xe1logo:"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-4d",children:'\xa0vBuscar:=Request("Introducir una referencia de factura:")\xa0// Obtener una referencia de factura del usuario\n\xa0If(OK=1)\xa0// Si el usuario hace clic en OK\n\xa0\xa0\xa0\xa0QUERY([Factura];[Factura]Ref=vBuscar)\xa0// Buscar la referencia de factura que corresponda a vBuscar\n\xa0End if\n'})}),"\n",(0,l.jsx)(a.h4,{id:"ejemplo-15",children:"Ejemplo 15"}),"\n",(0,l.jsx)(a.p,{children:"El siguiente ejemplo busca los registros de facturas introducidas en 1996. Buscamos todos los registros introducidos entre el 31/12/95 y 1/1/97:"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-4d",children:"\xa0QUERY([Facturas];[Facturas]FechaFactura >!31/12/95!;*)\xa0// Buscar facturas despu\xe9s de 31/12/95\u2026\n\xa0QUERY([Facturas];&;[Facturas]FechaFactura \n"})}),"\n",(0,l.jsx)(a.h4,{id:"ejemplo-16",children:"Ejemplo 16"}),"\n",(0,l.jsx)(a.p,{children:"El siguiente ejemplo busca los empleados cuyo salario est\xe1 entre $10 000 y $50 000. La b\xfasqueda incluye los empleados que ganan $10 000, pero excluye a los que ganan $50 000:"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-4d",children:"\xa0QUERY([Empleados];[Empleados]Salario >=10000;*)\xa0// Buscar los empleados que tengan un salario entre\u2026\n\xa0QUERY([Empleados];&;[Empleados]Salario <50000)\xa0// ...$10 000 y $50 000\n"})}),"\n",(0,l.jsx)(a.h4,{id:"ejemplo-17",children:"Ejemplo 17"}),"\n",(0,l.jsx)(a.p,{children:"El siguiente ejemplo busca los empleados del departamento de mercadeo con salarios superiores a $20 000. Se busca primero en el campo Salario porque est\xe1 indexado. Observe que la segunda b\xfasqueda utiliza un campo de otra tabla. Esto es posible porque la tabla [Dept] est\xe1 relacionada a la tabla [Empleados] por una relaci\xf3n autom\xe1tica de muchos a uno. Aunque el campo [Dept]Nombre est\xe1 indexado, la b\xfasqueda no es indexada porque la relaci\xf3n debe ser activada secuencialmente para cada registro en la tabla [Empleados]:"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-4d",children:'\xa0QUERY([Empleados];[Empleados]Salario >20000;*)\xa0// Buscar los empleados con salarios superiores a $20 000 y...\n\xa0QUERY([Empleados];&;[Dept]Nombre="mercadeo")\xa0// ...que trabajen en el departamento de mercadeo\n'})}),"\n",(0,l.jsx)(a.h4,{id:"ejemplo-18",children:"Ejemplo 18"}),"\n",(0,l.jsx)(a.p,{children:'Se tienen tres tablas relacionadas de muchos a uno: [Ciudad] -> [Departamento] -> [Region]. El siguiente ejemplo busca las regiones cuyas ciudades comienzan con "New".'}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-4d",children:'\xa0QUERY([Region];[Ciudad]Nombre="New")\xa0// Buscar todas las regiosnes cuyas ciudades comienzan por "New"\n'})}),"\n",(0,l.jsx)(a.h4,{id:"ejemplo-19",children:"Ejemplo 19"}),"\n",(0,l.jsxs)(a.p,{children:["El siguiente ejemplo busca la informaci\xf3n igual al valor de la variable ",(0,l.jsx)(a.em,{children:"miVar"}),"."]}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-4d",children:"\xa0QUERY([Leyes];[Leyes]Texto =miVar)\xa0// Buscar todas las leyes que son iguales al valor de miVar\n"})}),"\n",(0,l.jsxs)(a.p,{children:["La b\xfasqueda puede tener muchos resultados diferentes, dependiendo del valor de ",(0,l.jsx)(a.em,{children:"miVar"}),". La b\xfasqueda se realizar\xe1 tambi\xe9n de manera diferente. Por ejemplo:"]}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsxs)(a.li,{children:["Si ",(0,l.jsx)(a.em,{children:"miVar"})," es igual a ",(0,l.jsx)(a.em,{children:'"Copyright@"'}),", la selecci\xf3n contiene todas las leyes que contienen textos que comienzan por Copyright."]}),"\n",(0,l.jsxs)(a.li,{children:["Si ",(0,l.jsx)(a.em,{children:"miVar"})," es igual a ",(0,l.jsx)(a.em,{children:'"@Copyright@"'}),", la selecci\xf3n contiene todas las leyes que contienen al menos una ocurrencia de Copyright."]}),"\n"]}),"\n",(0,l.jsx)(a.h4,{id:"ejemplo-20",children:"Ejemplo 20"}),"\n",(0,l.jsx)(a.p,{children:"El siguiente ejemplo a\xf1ade o no l\xedneas a una b\xfasqueda compleja dependiendo del valor de las variables. De esta forma, s\xf3lo los criterios v\xe1lidos son tenidos en cuenta para la b\xfasqueda."}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-4d",children:'\xa0QUERY([Factura];[Factura]Pagada=False;*)\n\xa0If($ciudad#"")\xa0// si se ha especificado un nombre de ciudad `\n\xa0\xa0\xa0\xa0QUERY([Factura];[Factura]Ciudad_entrega=$ciudad;*)\n\xa0End if\n\xa0\n\xa0If($Codigo_Postal#"")\xa0// si se ha especificado un c\xf3digo postal\n\xa0\n\xa0\xa0\xa0\xa0QUERY([Factura];[Factura]Codigo_Postal=$Codigo_Postal;*)\n\xa0End if\n\xa0QUERY([Factura])\xa0// Ejecuci\xf3n de la b\xfasqueda sobre los criterios\n'})}),"\n",(0,l.jsx)(a.h4,{id:"ejemplo-21",children:"Ejemplo 21"}),"\n",(0,l.jsx)(a.p,{children:"Este ejemplo ilustra la utilizaci\xf3n de un operador de comparaci\xf3n como expresi\xf3n alfanum\xe9rica. El valor del operador de comparaci\xf3n est\xe1 definido a trav\xe9s de un men\xfa desplegable ubicado en una caja de di\xe1logo de b\xfasqueda personalizada:"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-4d",children:'\xa0var $oper : Text\n\xa0$oper:=_popup_operator{_popup_operator}\xa0//$oper igual por ejemplo "#" o "="\n'})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-4d",children:"\xa0If(OK=1)\n\xa0\xa0\xa0\xa0QUERY([Factura];[Factura]Cantidad;$oper;$cantidad)\n\xa0End if\n"})}),"\n",(0,l.jsx)(a.h4,{id:"ejemplo-22",children:"Ejemplo 22"}),"\n",(0,l.jsx)(a.p,{children:"El uso de los \xedndices de palabras claves puede acelerar de manera importante sus aplicaciones."}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-4d",children:'\xa0QUERY([IMAGENES];[IMAGENES]Fotos%"gatos")\xa0// buscar fotos asociadas con la palabra clave "gatos"\n'})}),"\n",(0,l.jsx)(a.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,l.jsxs)(a.p,{children:["Si la b\xfasqueda se lleva a cabo correctamente, la variable sistema OK toma el valor 1.",(0,l.jsx)(a.br,{}),"\nLa variable OK toma el valor 0 si: - el usuario hace clic en Cancelar en la caja de di\xe1logo de b\xfasqueda,",(0,l.jsx)(a.br,{}),"\n- en modo 'b\xfasqueda y bloqueo' (ver el comando ",(0,l.jsx)(a.a,{href:"/docs/es/commands/set-query-and-lock",title:"SET QUERY AND LOCK",children:"SET QUERY AND LOCK"}),"), la b\xfasqueda encuentra al menos un registro bloqueado. En este caso igualmente, el conjunto sistema LockedSet se actualiza."]}),"\n",(0,l.jsx)(a.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,l.jsx)(a.p,{children:(0,l.jsx)(a.a,{href:"/docs/es/commands/query-selection",children:"QUERY SELECTION"})}),"\n",(0,l.jsx)(a.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(a.table,{children:[(0,l.jsx)(a.thead,{children:(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.th,{}),(0,l.jsx)(a.th,{})]})}),(0,l.jsxs)(a.tbody,{children:[(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"N\xfamero de comando"}),(0,l.jsx)(a.td,{children:"277"})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"Hilo seguro"}),(0,l.jsx)(a.td,{children:"\u2713"})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"Modifica variables"}),(0,l.jsx)(a.td,{children:"OK"})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"Modifica el registro actual"}),(0,l.jsx)(a.td,{})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"Modifica la selecci\xf3n actual"}),(0,l.jsx)(a.td,{})]})]})]})]})}function u(e={}){let{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},224743:function(e,a,s){s.d(a,{Z:function(){return n}});let n=s.p+"assets/images/pict1581957.es-4f7d8295c765769a7a8bb7c532baae00.png"},250065:function(e,a,s){s.d(a,{Z:function(){return i},a:function(){return o}});var n=s(667294);let l={},r=n.createContext(l);function o(e){let a=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);