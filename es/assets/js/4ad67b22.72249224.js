"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25927"],{265708:function(e,n,o){o.r(n),o.d(n,{default:()=>j,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"Concepts/object","title":"Object","description":"Las variables, campos o expresiones de tipo objeto pueden contener datos de diversos tipos. La estructura de los objetos nativos de 4D se basa en el principio cl\xe1sico de los pares \\"propiedad/valor\\". La sintaxis de estos objetos se basa en la notaci\xf3n JSON:","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/Concepts/dt_object.md","sourceDirName":"Concepts","slug":"/Concepts/object","permalink":"/docs/es/Concepts/object","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_object.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"object","title":"Object"},"sidebar":"docs","previous":{"title":"Number (Real, Integer)","permalink":"/docs/es/Concepts/number"},"next":{"title":"Picture","permalink":"/docs/es/Concepts/picture"}}'),a=o("785893"),r=o("250065");let d={id:"object",title:"Object"},i=void 0,l={},c=[{value:"Instanciaci\xf3n",id:"instanciaci\xf3n",level:2},{value:"Comando <code>New object</code>",id:"comando-new-object",level:3},{value:"operador \\`{}",id:"operador-",level:3},{value:"Objeto est\xe1ndar o compartido",id:"objeto-est\xe1ndar-o-compartido",level:3},{value:"Propiedades",id:"propiedades",level:2},{value:"Valor Null",id:"valor-null",level:3},{value:"Valor indefinido",id:"valor-indefinido",level:3},{value:"Punteros",id:"punteros",level:3},{value:"Operadores Objeto",id:"operadores-objeto",level:2},{value:"Resources",id:"resources",level:2},{value:"Ejemplos",id:"ejemplos",level:2}];function t(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:'Las variables, campos o expresiones de tipo objeto pueden contener datos de diversos tipos. La estructura de los objetos nativos de 4D se basa en el principio cl\xe1sico de los pares "propiedad/valor". La sintaxis de estos objetos se basa en la notaci\xf3n JSON:'}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:['El nombre de una propiedad es siempre un texto, por ejemplo "Name". Debe seguir ',(0,a.jsx)(n.a,{href:"/docs/es/Concepts/identifiers#object-properties",children:"reglas espec\xedficas"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Un valor de propiedad puede ser del tipo siguiente:"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"n\xfamero (Real, Entero, etc.)"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"text"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"null"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"boolean"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["puntero (almacenado como tal, evaluado utilizando el comando ",(0,a.jsx)(n.code,{children:"JSON Stringify"})," o al copiar),"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"fecha (tipo fecha o cadena en formato fecha ISO)"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"objeto(1) (los objetos pueden ser anidados en varios niveles)"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"imagen(2)"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"collection"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["(1) ",(0,a.jsx)(n.strong,{children:"Objetos no transmisibles en tiempo real"})," como objetos ORDA ([entidades}(ORDA/dsMapping.md#entity), ",(0,a.jsx)(n.a,{href:"/docs/es/ORDA/dsmapping#entity-selection",children:"entity selections"}),", etc.), ",(0,a.jsx)(n.a,{href:"/docs/es/API/FileHandleClass",children:"manejadores de archivos"}),", ",(0,a.jsx)(n.a,{href:"/docs/es/API/WebServerClass",children:"servidor web"}),"... no pueden almacenarse en ",(0,a.jsx)(n.strong,{children:"campos objeto"}),". Se devuelve un error si intentas hacerlo; sin embargo, est\xe1n completamente soportados en ",(0,a.jsx)(n.strong,{children:"variables objeto"})," en la memoria."]}),"\n",(0,a.jsx)(n.p,{children:'(2) Cuando se expone como texto en el depurador o se exporta a JSON, las propiedades de los objetos de tipo imagen indican "[object Picture]".'}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"Tenga en cuenta que los nombres de las propiedades distinguen entre may\xfasculas y min\xfasculas."})}),"\n",(0,a.jsxs)(n.p,{children:["Las variables, campos o expresiones de tipo Objeto se gestionan utilizando la ",(0,a.jsx)(n.a,{href:"#properties",children:"notaci\xf3n de objetos"})," est\xe1ndar o los comandos disponibles en el tema ",(0,a.jsx)(n.strong,{children:"Objetos (Lenguaje)"}),". Tenga en cuenta que comandos espec\xedficos del tema ",(0,a.jsx)(n.strong,{children:"B\xfasquedas"}),", como ",(0,a.jsx)(n.code,{children:"QUERY BY ATTRIBUTE"}),", ",(0,a.jsx)(n.code,{children:"QUERY SELECTION BY ATTRIBUTE"})," o ",(0,a.jsx)(n.code,{children:"ORDER BY ATTRIBUTE"}),", se pueden utilizar para llevar a cabo el procesamiento en los campos objeto."]}),"\n",(0,a.jsx)(n.p,{children:"Cada valor de propiedad al que se accede a trav\xe9s de la notaci\xf3n de objeto se considera una expresi\xf3n. Puede utilizar estos valores siempre que se esperen expresiones 4D:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["en c\xf3digo 4D, ya sea escrito en los m\xe9todos (editor de c\xf3digo) o externalizado (f\xf3rmulas, archivos de etiquetas procesados por ",(0,a.jsx)(n.code,{children:"PROCESS 4D TAGS"})," o el servidor web, archivos de exportaci\xf3n, documentos 4D Write Pro...),"]}),"\n",(0,a.jsx)(n.li,{children:"en las \xe1reas de expresiones del depurador y del explorador de ejecuci\xf3n,"}),"\n",(0,a.jsx)(n.li,{children:"en la lista de propiedades del editor de formularios para los objetos formulario: campo Variable o Expresi\xf3n, as\xed como diversas expresiones de list box y columnas (fuente de datos, color de fondo, estilo o color de fuente)."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"instanciaci\xf3n",children:"Instanciaci\xf3n"}),"\n",(0,a.jsx)(n.p,{children:"Los objetos deben haber sido instanciados, de lo contrario intentar leer o modificar sus propiedades generar\xe1 un error de sintaxis."}),"\n",(0,a.jsx)(n.p,{children:"La instanciaci\xf3n de objetos puede realizarse de una de las siguientes maneras:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["utilizando el comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/new-object",children:(0,a.jsx)(n.code,{children:"New object"})}),","]}),"\n",(0,a.jsxs)(n.li,{children:["utilizando el operador ",(0,a.jsx)(n.code,{children:"{}"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Several 4D commands and functions return objects, for example ",(0,a.jsx)(n.a,{href:"/docs/es/commands/database-measures",children:(0,a.jsx)(n.code,{children:"Database measures"})})," or ",(0,a.jsx)(n.a,{href:"/docs/es/commands/file",children:(0,a.jsx)(n.code,{children:"File"})}),". En este caso, no es necesario instanciar expl\xedcitamente el objeto, el lenguaje 4D lo hace por usted."]})}),"\n",(0,a.jsxs)(n.h3,{id:"comando-new-object",children:["Comando ",(0,a.jsx)(n.code,{children:"New object"})]}),"\n",(0,a.jsxs)(n.p,{children:["El comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/new-object",children:(0,a.jsx)(n.code,{children:"New object"})})," crea un nuevo objeto vac\xedo o prellenado y devuelve su referencia."]}),"\n",(0,a.jsx)(n.p,{children:"Ejemplos:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:' var $obVar : Object //declaraci\xf3n de una variable 4D de tipo objeto\n $obVar:=New object //instanciaci\xf3n de un objeto y asignaci\xf3n a la variable 4D\n \n var $obFilled : Object \n $obFilled:=New object("name";"Smith";"age";42) //instanciaci\xf3n y asignaci\xf3n de un objeto pre-rellenado\n'})}),"\n",(0,a.jsx)(n.h3,{id:"operador-",children:"operador \\`{}"}),"\n",(0,a.jsxs)(n.p,{children:["El operador ",(0,a.jsx)(n.code,{children:"{}"})," permite crear un ",(0,a.jsx)(n.strong,{children:"literal de objeto"}),". Un literal de objeto es una lista separada por semicolumnas de cero o m\xe1s pares de nombres de propiedades y valores asociados de un objeto, encerrados entre llaves (",(0,a.jsx)(n.code,{children:"{}"}),"). La sintaxis literal de objeto crea objetos vac\xedos o llenos."]}),"\n",(0,a.jsxs)(n.p,{children:["Dado que cualquier valor de propiedad se considera una expresi\xf3n, puede crear subobjetos utilizando ",(0,a.jsx)(n.code,{children:"{}"})," en los valores de propiedad.  Tambi\xe9n puede crear y hacer referencia a los ",(0,a.jsx)(n.strong,{children:"literales de colecci\xf3n"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Ejemplos:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:' var $o ; $o2 ; $o3 : Object //declaraci\xf3n de variables de objeto\n $o := {} // instanciaci\xf3n de un objeto vac\xedo \n $o2 := {a: "foo"; b: 42; c: {}; d: ($toto) ? true : false } // instanciaci\xf3n de un objeto\n 		// con propiedades {"a": "foo", "b":42, "c":{}, "d":false})\n\n	// mismas propiedades utilizando variables\n var $a : Text\n var $b : Number\n var $c : Object\n $a:="foo"\n $b:=42\n $c:={}\n $o3:={ a: $a; b: $b; c: $c } // {"a": "foo";b":42; "c":{}}\n\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Puede mezclar las sintaxis ",(0,a.jsx)(n.code,{children:"New object"})," y literal:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'$o:={\\\n	ob1: {age: 42}; \\\n	ob2: New object("message"; "Hello"); \\\n	form1: Formula(return This.ob1.age+10); \\\n	form2 : Formula(ALERT($1)); \\\n	col: [1; 2; 3; 4; 5; 6]\\\n	}\n\n$o.form1()  //52\n$o.form2($o.ob2.message)  // muestra Hello\n$col:=$o.col[5] //6\n'})}),"\n",(0,a.jsx)(n.h3,{id:"objeto-est\xe1ndar-o-compartido",children:"Objeto est\xe1ndar o compartido"}),"\n",(0,a.jsx)(n.p,{children:"Puede crear dos tipos de objetos:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["objetos regulares (no compartidos), utilizando el comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/new-object",children:(0,a.jsx)(n.code,{children:"New object"})})," o la sintaxis literal de objeto (",(0,a.jsx)(n.code,{children:"{}"}),"). Estos objetos pueden ser editados sin ning\xfan control de acceso espec\xedfico, pero no pueden ser compartidos entre procesos."]}),"\n",(0,a.jsxs)(n.li,{children:["objetos compartidos, utilizando el comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/new-shared-object",children:(0,a.jsx)(n.code,{children:"New shared object"})}),". Estos objetos pueden ser compartidos entre procesos, incluidos los hilos apropiativos. Estos objetos pueden ser compartidos entre procesos, incluidos los hilos apropiativos.\nPara m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,a.jsx)(n.a,{href:"/docs/es/Concepts/shared",children:"Objetos y colecciones compartidos"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n",(0,a.jsx)(n.p,{children:"Se accede a los valores de las propiedades de los objetos a trav\xe9s de una cadena de tokens. Se puede acceder a las propiedades de los objetos de dos maneras:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:'utilizando un s\xedmbolo de "punto":'}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"object.propertyName"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Ejemplo:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'     employee.name:="Smith"\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"utilizando una cadena entre corchetes:"}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:'object["propertyName"]'}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Ejemplos:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'     $vName:=employee["name"]\n     //o tambi\xe9n:\n     $property:="name"\n	 $vName:=employee[$property]\n\n'})}),"\n",(0,a.jsx)(n.p,{children:"Dado que un valor de propiedad de un objeto puede ser un objeto o una colecci\xf3n, puede utilizar una secuencia de s\xedmbolos para acceder a subpropiedades, por ejemplo:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:" $vAge:=employee.children[2].age\n"})}),"\n",(0,a.jsx)(n.p,{children:"La notaci\xf3n de objetos est\xe1 disponible en cualquier elemento del lenguaje que pueda contener o devolver un objeto, es decir:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Objetos"})," propiamente dichos (almacenados en variables, campos, propiedades de objetos, arrays de objetos o elementos de colecciones).\nEjemplos:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"     $age:=$myObjVar.employee.age //variable\n     $addr:=[Emp]data_obj.address //campo\n     $city:=$addr.city //propiedad de un objeto\n     $pop:=$aObjCountries{2}.population //array de objetos\n     $val:=$myCollection[3].subvalue //elemento de colecci\xf3n\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Comandos 4D"})," que devuelven objetos.\nEjemplo:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"     $measures:=Database measures.DB.tables\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"M\xe9todos proyecto"})," o ",(0,a.jsx)(n.strong,{children:"Funciones"})," que devuelven objetos.\nEjemplo:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'      // MyMethod1\n     #DECLARE -> $o : Object\n     $o:=New object("a";10;"b";20)\n     \n      //myMethod2\n     $result:=MyMethod1.a //10\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Colecciones"}),"\nEjemplo:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"     myColl.length //tama\xf1o de la colecci\xf3n\n"})}),"\n",(0,a.jsx)(n.h3,{id:"valor-null",children:"Valor Null"}),"\n",(0,a.jsxs)(n.p,{children:["Al usar los objetos, el valor ",(0,a.jsx)(n.em,{children:"null"})," es soportado mediante el comando ",(0,a.jsx)(n.em,{children:"Null"}),". Este comando se puede utilizar para asignar o comparar el valor null a propiedades de objetos, por ejemplo:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:" myObject.address.zip:=Null\n If(myColl[2]=Null)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n, consulte ",(0,a.jsx)(n.a,{href:"/docs/es/Concepts/null-undefined",children:"Null e indefinido"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"valor-indefinido",children:"Valor indefinido"}),"\n",(0,a.jsx)(n.p,{children:"La evaluaci\xf3n de una propiedad de un objeto puede producir a veces un valor indefinido. Asignar un valor indefinido a una propiedad de objeto existente reinicializa o borra su valor. La asignaci\xf3n de un valor indefinido a una propiedad de objeto no existente no hace nada."}),"\n",(0,a.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n, consulte ",(0,a.jsx)(n.a,{href:"/docs/es/Concepts/null-undefined",children:"Null e indefinido"})]}),"\n",(0,a.jsx)(n.h3,{id:"punteros",children:"Punteros"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota preliminar:"})," dado que los objetos se pasan siempre por referencia, no suele ser necesario utilizar punteros. Al pasar el objeto, internamente 4D utiliza autom\xe1ticamente un mecanismo similar a un puntero, minimizando la necesidad de memoria y permitiendo modificar el par\xe1metro y devolver las modificaciones. Como resultado, no es necesario utilizar punteros. Sin embargo, en caso de querer utilizar punteros, se puede acceder a los valores de las propiedades mediante punteros."]}),"\n",(0,a.jsx)(n.p,{children:'El uso de la notaci\xf3n de objetos con punteros es muy similar al uso de la notaci\xf3n de objetos directamente con objetos, excepto que el s\xedmbolo "punto" debe omitirse.'}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Acceso directo:"}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"pointerOnObject->propertyName"}),"\n"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Acceso por nombre:"}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:'pointerOnObject->["propertyName"]'}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Ejemplo:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:" var vObj : Object\n var vPtr : Pointer\n vObj:=New object\n vObj.a:=10\n vPtr:=->vObj\n x:=vPtr->a //x=10\n"})}),"\n",(0,a.jsx)(n.h2,{id:"operadores-objeto",children:"Operadores Objeto"}),"\n",(0,a.jsxs)(n.p,{children:["Puede utilizar operadores de comparaci\xf3n con ",(0,a.jsx)(n.strong,{children:"referencias a objetos"}),", lo que significa que puede evaluar si dos o m\xe1s referencias apuntan a la misma instancia de un objeto."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"var $o1:={a: 42} //referencia a una instancia\nvar $o2:={a: 42} //referencia a otra instancia\nvar $o3:=$o1 //referencia a la misma instancia\n"})}),"\n",(0,a.jsx)(n.p,{children:"Bas\xe1ndonos en el c\xf3digo anterior, la tabla comparativa es:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Operaci\xf3n"}),(0,a.jsx)(n.th,{children:"Sintaxis"}),(0,a.jsx)(n.th,{children:"Devuelve"}),(0,a.jsx)(n.th,{children:"Expression"}),(0,a.jsx)(n.th,{children:"Valor"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Igual"}),(0,a.jsx)(n.td,{children:"objectRef = objectRef"}),(0,a.jsx)(n.td,{children:"Boolean"}),(0,a.jsx)(n.td,{children:"$o1 = $o3"}),(0,a.jsx)(n.td,{children:"True"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{children:"$o1 = $o2"}),(0,a.jsx)(n.td,{children:"False"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Desigualdad"}),(0,a.jsx)(n.td,{children:"objectRef # objectRef"}),(0,a.jsx)(n.td,{children:"Boolean"}),(0,a.jsx)(n.td,{children:"$o1 # $o3"}),(0,a.jsx)(n.td,{children:"False"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{children:"$o1 # $o2"}),(0,a.jsx)(n.td,{children:"True"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,a.jsxs)(n.p,{children:["Los objetos utilizan ",(0,a.jsx)(n.em,{children:"recursos"})," tales documentos, bloqueos de entidades y, por supuesto, memoria. Estos recursos se conservan siempre que los objetos los necesiten. Normalmente, no tiene que preocuparse por ellos, 4D libera autom\xe1ticamente todos los recursos adjuntos a un objeto cuando detecta que el objeto en s\xed ya no est\xe1 referenciado por ninguna variable u otro objeto."]}),"\n",(0,a.jsxs)(n.p,{children:["Por ejemplo, cuando ya no hay referencias a una entidad sobre la que se ha establecido un bloqueo con ",(0,a.jsx)(n.a,{href:"/docs/es/API/EntityClass#lock",children:(0,a.jsx)(n.code,{children:"$entity.lock()"})}),", 4D liberar\xe1 la memoria pero tambi\xe9n liberar\xe1 autom\xe1ticamente el bloqueo asociado, una llamada a ",(0,a.jsx)(n.a,{href:"/docs/es/API/EntityClass#unlock",children:(0,a.jsx)(n.code,{children:"$entity.unlock()"})})," es in\xfatil."]}),"\n",(0,a.jsxs)(n.p,{children:["Si desea liberar inmediatamente todos los recursos ocupados por un objeto sin tener que esperar que 4D lo haga autom\xe1ticamente (al final de la ejecuci\xf3n del m\xe9todo para variables locales, por ejemplo), solo tiene que ",(0,a.jsx)(n.strong,{children:"anular todas sus referencias"}),". Por ejemplo:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\n$doc:=WP Import document("large_novel.4wp")\n	... // hacer algo con $doc\n$doc:=Null // liberar recursos ocupados por $doc\n	... // continuar la ejecuci\xf3n con m\xe1s memoria libre\n\n'})}),"\n",(0,a.jsx)(n.h2,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,a.jsx)(n.p,{children:"La utilizaci\xf3n de la notaci\xf3n de objetos simplifica el c\xf3digo 4D en el manejo de los mismos. Sin embargo, tenga en cuenta que la notaci\xf3n basada en comandos sigue siendo totalmente soportada."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Escritura y lectura de propiedades de objetos (este ejemplo compara la notaci\xf3n de objetos y la notaci\xf3n de comandos):"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'  // Utilizando la notaci\xf3n objeto\n var $myObj : Object //declara un objeto variable 4D \n $myObj:={} //crea un literal de objeto y lo asigna a la variable\n $myObj.age:=56\n $age:=$myObj.age //56\n\n  // Utilizando la notaci\xf3n de comando\n var $myObj2 : Object //declara un objeto variable 4D\n OB SET($myObj2; "age";42) //crea un objeto y a\xf1ade la propiedad age\n $age:=OB Get($myObj2; "age") //42\n\n  // Por supuesto, ambas notaciones pueden mezclarse\n var $myObj3 : Object\n OB SET($myObj3; "age";10)\n $age:=$myObj3.age //10\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Creaci\xf3n de propiedades y asignaci\xf3n de valores, incluyendo objetos:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:' var $Emp : Object\n $Emp:=New object\n $Emp.city:="London" //crea la propiedad city y establece su valor como"London"\n $Emp.city:="Paris" //modifica la propiedad city\n $Emp.phone:=New object("office";"123456789";"home";"0011223344")\n  //crea la propiedad phone y establece su valor para un objeto\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Obtener un valor en un subobjeto es muy sencillo utilizando la notaci\xf3n de objetos:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:' $vCity:=$Emp.city //"Paris"\n $vPhone:=$Emp.phone.home //"0011223344"\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Puede acceder a las propiedades como cadenas utilizando el operador ",(0,a.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:' $Emp["city"]:="Berlin" //modifica la propiedad city\n  //esto puede ser \xfatil para crear propiedades a trav\xe9s de variables\n var $addr : Text\n $addr:="address"\n For($i;1;4)\n    $Emp[$addr+String($i)]:=""\n End for\n  // crea 4 propiedades vac\xedas "address1...address4" en el objeto $Emp\n'})})]})}function j(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return d}});var s=o(667294);let a={},r=s.createContext(a);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);