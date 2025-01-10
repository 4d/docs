"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81031"],{262272:function(e,n,c){c.r(n),c.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>o,assets:()=>d,toc:()=>r,contentTitle:()=>a});var o=JSON.parse('{"id":"Concepts/collection","title":"Collection","description":"Las colecciones son listas ordenadas de valores de tipos similares o diferentes (texto, n\xfamero, fecha, objeto, booleano, colecci\xf3n o null).","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/Concepts/dt_collection.md","sourceDirName":"Concepts","slug":"/Concepts/collection","permalink":"/docs/es/Concepts/collection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_collection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"collection","title":"Collection"},"sidebar":"docs","previous":{"title":"Boolean","permalink":"/docs/es/Concepts/boolean"},"next":{"title":"Fecha","permalink":"/docs/es/Concepts/date"}}'),l=c("785893"),i=c("250065");let s={id:"collection",title:"Collection"},a=void 0,d={},r=[{value:"Instanciaci\xf3n",id:"instanciaci\xf3n",level:2},{value:"Comando <code>New collection</code>",id:"comando-new-collection",level:3},{value:"operador <code>[]</code>",id:"operador-",level:3},{value:"Colecci\xf3n est\xe1ndar o compartida",id:"colecci\xf3n-est\xe1ndar-o-compartida",level:3},{value:"Funciones de colecci\xf3n",id:"funciones-de-colecci\xf3n",level:2},{value:"par\xe1metro rutaPropiedad",id:"par\xe1metro-rutapropiedad",level:3},{value:"Operadores en las colecciones",id:"operadores-en-las-colecciones",level:2},{value:"Indefinido",id:"indefinido",level:2}];function t(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Las colecciones son listas ordenadas de valores de tipos similares o diferentes (texto, n\xfamero, fecha, objeto, booleano, colecci\xf3n o null)."}),"\n",(0,l.jsxs)(n.p,{children:["Las variables de tipo Collection se administran utilizando ",(0,l.jsx)(n.a,{href:"/docs/es/Concepts/object#properties",children:"notaci\xf3n de objetos"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"Para acceder a un elemento de la colecci\xf3n, hay que pasar el n\xfamero del elemento entre corchetes:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"collectionRef[expression]\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Puede pasar toda expresi\xf3n 4D v\xe1lida que devuelva un entero positivo en ",(0,l.jsx)(n.em,{children:"expression"}),". Ejemplos:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:" myCollection[5]  //acceso al 6\xba elemento de la colecci\xf3n\n myCollection[$var]\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Atenci\xf3n:"})," los elementos de la colecci\xf3n se numeran a partir de 0."]}),"\n",(0,l.jsx)(n.p,{children:"Puede asignar un valor a un elemento de la colecci\xf3n u obtener el valor de un elemento de colecci\xf3n:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' myCol[10]:="My new element"\n $myVar:=myCol[0]\n'})}),"\n",(0,l.jsx)(n.p,{children:"Si se asigna un \xedndice de elemento que sobrepasa el \xfaltimo elemento existente de la colecci\xf3n, la colecci\xf3n se redimensiona autom\xe1ticamente y a todos los nuevos elementos intermedios se les asigna un valor nulo:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' var myCol : Collection\n myCol:=New collection("A";"B")\n myCol[5]:="Z"\n  //myCol[2]=null\n  //myCol[3]=null\n  //myCol[4]=null\n'})}),"\n",(0,l.jsx)(n.h2,{id:"instanciaci\xf3n",children:"Instanciaci\xf3n"}),"\n",(0,l.jsx)(n.p,{children:"Las colecciones deben haber sido instanciadas, de lo contrario intentar leer o modificar sus elementos generar\xe1 un error de sintaxis."}),"\n",(0,l.jsx)(n.p,{children:"La instanciaci\xf3n de la colecci\xf3n puede realizarse de una de las siguientes maneras:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["usando el comando ",(0,l.jsx)(n.a,{href:"/docs/es/commands/new-collection",children:(0,l.jsx)(n.code,{children:"New collection"})})]}),"\n",(0,l.jsxs)(n.li,{children:["utilizando el operador ",(0,l.jsx)(n.code,{children:"[]"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsxs)(n.p,{children:["Varios comandos y funciones 4D devuelven colecciones, por ejemplo ",(0,l.jsx)(n.a,{href:"/docs/es/commands/monitored-activity",children:(0,l.jsx)(n.code,{children:"Monitored activity"})})," o ",(0,l.jsx)(n.a,{href:"/docs/es/API/CollectionClass#copy",children:(0,l.jsx)(n.code,{children:"collection.copy"})}),". En este caso, no es necesario instanciar expl\xedcitamente la colecci\xf3n, el lenguaje 4D lo hace por usted."]})}),"\n",(0,l.jsxs)(n.h3,{id:"comando-new-collection",children:["Comando ",(0,l.jsx)(n.code,{children:"New collection"})]}),"\n",(0,l.jsxs)(n.p,{children:["El comando ",(0,l.jsx)(n.a,{href:"/docs/es/commands/new-collection",children:(0,l.jsx)(n.code,{children:"New collection"})})," crea una nueva colecci\xf3n vac\xeda o prellenada y devuelve su referencia."]}),"\n",(0,l.jsx)(n.p,{children:"Ejemplos:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' var $colVar : Collection //declaraci\xf3n de una colecci\xf3n de tipo 4D variable\n $colVar:=New collection //instanciaci\xf3n de la colecci\xf3n y asignaci\xf3n a la variable 4D\n \n var $colFilled : Collection\n $colFilled:=New collection("a";"b";1;42;{}) //instanciaci\xf3n y asignaci\xf3n de una colecci\xf3n pre-rellenada\n'})}),"\n",(0,l.jsxs)(n.h3,{id:"operador-",children:["operador ",(0,l.jsx)(n.code,{children:"[]"})]}),"\n",(0,l.jsxs)(n.p,{children:["El operador ",(0,l.jsx)(n.code,{children:"[]"})," permite crear un ",(0,l.jsx)(n.strong,{children:"literal de colecci\xf3n"}),". Un literal de colecci\xf3n es una lista de cero o m\xe1s expresiones, cada una de las cuales representa un elemento de la colecci\xf3n, encerradas entre corchetes (",(0,l.jsx)(n.code,{children:"[]"}),"). Cuando se crea una colecci\xf3n utilizando un literal de colecci\xf3n, se instancia con los valores especificados como sus elementos, y su longitud se establece en el n\xfamero de argumentos especificados."]}),"\n",(0,l.jsxs)(n.p,{children:["Dado que cualquier elemento se considera una expresi\xf3n, puede crear subcolecciones utilizando ",(0,l.jsx)(n.code,{children:"[]"})," en los elementos.  Tambi\xe9n puede crear y referenciar ",(0,l.jsx)(n.strong,{children:"literales objeto"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"Si un elemento no est\xe1 definido, aparecer\xe1 como Null en la colecci\xf3n."}),"\n",(0,l.jsx)(n.p,{children:"Ejemplos:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'var $col1; $col2; $users : Collection\n$col1:=[] //colecci\xf3n vac\xeda\n$col2:=[1;2;3;4;5;6] //colecci\xf3n de n\xfameros\n//colecci\xf3n de objetos\n$users:=[{name: "Alice"; \\\n	height: 183; \\\n	eyecolor: "hazel"; \\\n	id: $col2[5]\\\n	}; \\\n	{name: "Bob"; \\\n	height: 172; \\\n	eyecolor: "blue"\\\n	}]\n'})}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:["Si crea un literal de colecci\xf3n que contenga un \xfanico elemento, aseg\xfarese de no utilizar un nombre que corresponda a un nombre de tabla existente; de lo contrario, la sintaxis de la tabla ",(0,l.jsx)(n.code,{children:"[tableName]"})," tendr\xe1 prioridad."]})}),"\n",(0,l.jsx)(n.h3,{id:"colecci\xf3n-est\xe1ndar-o-compartida",children:"Colecci\xf3n est\xe1ndar o compartida"}),"\n",(0,l.jsx)(n.p,{children:"Puede crear dos tipos de colecciones:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["las colecciones est\xe1ndar (no compartidas), utilizando el comando ",(0,l.jsx)(n.a,{href:"/docs/es/commands/new-collection",children:(0,l.jsx)(n.code,{children:"New collection"})})," o la sintaxis literal de la colecci\xf3n (",(0,l.jsx)(n.code,{children:"[]"}),"). Estas colecciones pueden ser editadas sin ning\xfan control de acceso espec\xedfico, pero no pueden ser compartidas entre procesos."]}),"\n",(0,l.jsxs)(n.li,{children:["las colecciones compartidas, utilizando el comando ",(0,l.jsx)(n.a,{href:"/docs/es/commands/new-shared-collection",children:(0,l.jsx)(n.code,{children:"New shared collection"})}),". Estas colecciones pueden ser compartidas entre procesos, incluidos los hilos apropiativos. El acceso a estas colecciones se controla mediante estructuras ",(0,l.jsx)(n.a,{href:"/docs/es/Concepts/shared#useend-use",children:(0,l.jsx)(n.code,{children:"Use...End use"})}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,l.jsx)(n.a,{href:"/docs/es/Concepts/shared",children:"Objetos y colecciones compartidos"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"funciones-de-colecci\xf3n",children:"Funciones de colecci\xf3n"}),"\n",(0,l.jsxs)(n.p,{children:["Las referencias a colecciones 4D se benefician de funciones de clase espec\xedficas (a veces llamados ",(0,l.jsx)(n.em,{children:"funciones miembro"}),"). Las funciones de colecci\xf3n est\xe1n listadas en la secci\xf3n ",(0,l.jsx)(n.a,{href:"/docs/es/API/CollectionClass",children:"Referencia de la API de Clase"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"Por ejemplo:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"$newCol:=$col.copy() //copia de $col a $newCol\n$col.push(10;100) //a\xf1ade de 10 y 100 a la colecci\xf3n\n"})}),"\n",(0,l.jsx)(n.p,{children:"Ciertas funciones devuelven la colecci\xf3n original despu\xe9s de la modificaci\xf3n, para que pueda ejecutar las llamadas en una secuencia:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:" $col:=New collection(5;20)\n $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]\n"})}),"\n",(0,l.jsx)(n.h3,{id:"par\xe1metro-rutapropiedad",children:"par\xe1metro rutaPropiedad"}),"\n",(0,l.jsxs)(n.p,{children:["Varias funciones aceptan un ",(0,l.jsx)(n.em,{children:"propertyPath"})," como par\xe1metro. Este par\xe1metro significa:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:'o bien un nombre de propiedad del objeto, por ejemplo "apellido"'}),"\n",(0,l.jsx)(n.li,{children:'o una ruta de propiedades del objeto, es decir, una secuencia jer\xe1rquica de subpropiedades vinculadas con caracteres de punto, por ejemplo "empleado.hijos.nombre".'}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Atenci\xf3n:"})," Cuando utilice funciones y par\xe1metros ",(0,l.jsx)(n.em,{children:"propertyPath"}),', no puede utilizar ".", "[ ]", o espacios en los nombres de las propiedades ya que impedir\xe1 que 4D analice correctamente la ruta:']}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' $vmin:=$col.min("My.special.property") //undefined\n $vmin:=$col.min(["My.special.property"]) //error\n'})}),"\n",(0,l.jsx)(n.h2,{id:"operadores-en-las-colecciones",children:"Operadores en las colecciones"}),"\n",(0,l.jsxs)(n.p,{children:["Puede utilizar operadores de comparaci\xf3n con ",(0,l.jsx)(n.strong,{children:"referencias de colecci\xf3n"}),", lo que significa que puede evaluar si dos o m\xe1s referencias apuntan a la misma instancia de una colecci\xf3n."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'var $c1:=["a";42] //referencia a una instancia\nvar $c2:=["a";42] //referencia a otra instancia\nvar $c3:=$c1 //referencia a la misma instancia\n'})}),"\n",(0,l.jsx)(n.p,{children:"Bas\xe1ndonos en el c\xf3digo anterior, la tabla comparativa es:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Operaci\xf3n"}),(0,l.jsx)(n.th,{children:"Sintaxis"}),(0,l.jsx)(n.th,{children:"Devuelve"}),(0,l.jsx)(n.th,{children:"Expression"}),(0,l.jsx)(n.th,{children:"Valor"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Igual"}),(0,l.jsx)(n.td,{children:"collectionRef = collectionRef"}),(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsx)(n.td,{children:"$c1 = $c3"}),(0,l.jsx)(n.td,{children:"True"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"$c1 = $c2"}),(0,l.jsx)(n.td,{children:"False"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Desigualdad"}),(0,l.jsx)(n.td,{children:"collectionRef # collectionRef"}),(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsx)(n.td,{children:"$c1 # $c3"}),(0,l.jsx)(n.td,{children:"False"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"$c1 # $c2"}),(0,l.jsx)(n.td,{children:"True"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"indefinido",children:"Indefinido"}),"\n",(0,l.jsxs)(n.p,{children:["La lectura de la propiedad ",(0,l.jsx)(n.strong,{children:"length"})," de una colecci\xf3n indefinida produce 0:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"     var $c : Collection //variable creada pero sin colecci\xf3n definida\n     $size:=$c.length //$size = 0\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},250065:function(e,n,c){c.d(n,{Z:function(){return a},a:function(){return s}});var o=c(667294);let l={},i=o.createContext(l);function s(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);