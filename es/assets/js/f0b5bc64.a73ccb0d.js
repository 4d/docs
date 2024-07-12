/*! For license information please see f0b5bc64.a73ccb0d.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43593],{724172:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var s=o(474848),a=o(28453);const i={id:"object",title:"Object"},r=void 0,d={id:"Concepts/object",title:"Object",description:'Las variables, campos o expresiones de tipo objeto pueden contener datos de diversos tipos. La estructura de los objetos "nativos" 4D se basa en el principio cl\xe1sico de los pares "propiedad/valor". La sintaxis de estos objetos se basa en la notaci\xf3n JSON:',source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Concepts/dt_object.md",sourceDirName:"Concepts",slug:"/Concepts/object",permalink:"/docs/es/19/Concepts/object",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_object.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"object",title:"Object"},sidebar:"docs",previous:{title:"N\xfamero (Real, Entero largo, Entero)",permalink:"/docs/es/19/Concepts/number"},next:{title:"Picture",permalink:"/docs/es/19/Concepts/picture"}},l={},c=[{value:"Inicializaci\xf3n",id:"inicializaci\xf3n",level:2},{value:"Objeto est\xe1ndar o compartido",id:"objeto-est\xe1ndar-o-compartido",level:3},{value:"Principios de la sintaxis",id:"principios-de-la-sintaxis",level:2},{value:"Propiedades de los objetos",id:"propiedades-de-los-objetos",level:3},{value:"Punteros",id:"punteros",level:3},{value:"Valor Null",id:"valor-null",level:3},{value:"Valor indefinido",id:"valor-indefinido",level:3},{value:"Ejemplos",id:"ejemplos",level:2}];function t(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:'Las variables, campos o expresiones de tipo objeto pueden contener datos de diversos tipos. La estructura de los objetos "nativos" 4D se basa en el principio cl\xe1sico de los pares "propiedad/valor". La sintaxis de estos objetos se basa en la notaci\xf3n JSON:'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:['El nombre de una propiedad es siempre un texto, por ejemplo "Name". Debe seguir ',(0,s.jsx)(n.a,{href:"/docs/es/19/Concepts/identifiers#object-properties",children:"reglas espec\xedficas"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Un valor de propiedad puede ser del tipo siguiente:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"n\xfamero (Real, Entero, etc.)"}),"\n",(0,s.jsx)(n.li,{children:"text"}),"\n",(0,s.jsx)(n.li,{children:"null"}),"\n",(0,s.jsx)(n.li,{children:"boolean"}),"\n",(0,s.jsxs)(n.li,{children:["puntero (almacenado como tal, evaluado con el comando ",(0,s.jsx)(n.code,{children:"JSON Stringify"})," o al copiar),"]}),"\n",(0,s.jsx)(n.li,{children:"fecha (tipo fecha o cadena en formato fecha ISO)"}),"\n",(0,s.jsx)(n.li,{children:"objeto(1) (los objetos pueden ser anidados en varios niveles)"}),"\n",(0,s.jsx)(n.li,{children:"imagen(2)"}),"\n",(0,s.jsx)(n.li,{children:"collection"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["(1) ",(0,s.jsx)(n.strong,{children:"Non-streamable objects"})," such as ORDA objects (",(0,s.jsx)(n.a,{href:"/docs/es/19/ORDA/dsmapping#entity",children:"entities"}),", ",(0,s.jsx)(n.a,{href:"/docs/es/19/ORDA/dsmapping#entity-selection",children:"entity selections"}),", etc.), ",(0,s.jsx)(n.a,{href:"/docs/es/19/API/WebServerClass",children:"web server"}),"... cannot be stored in ",(0,s.jsx)(n.strong,{children:"object fields"}),". Se devuelve un error si intentas hacerlo; sin embargo, est\xe1n completamente soportados en ",(0,s.jsx)(n.strong,{children:"variables objeto"})," en la memoria."]}),"\n",(0,s.jsx)(n.p,{children:'(2) Cuando se expone como texto en el depurador o se exporta a JSON, las propiedades de los objetos de tipo imagen indican "[objeto Imagen]".'}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Atenci\xf3n:"})," recuerde que los nombres de atributos diferencian entre may\xfasculas y min\xfasculas."]}),"\n",(0,s.jsxs)(n.p,{children:["Las variables, campos o expresiones de tipo Objeto se gestionan utilizando la ",(0,s.jsx)(n.a,{href:"/docs/es/19/Concepts/object#syntax-basics",children:"notaci\xf3n objeto"})," o los comandos cl\xe1sicos disponibles en el tema ",(0,s.jsx)(n.strong,{children:"Objetos (Lenguaje)"}),". Tenga en cuenta que se pueden utilizar comandos espec\xedficos del tema ",(0,s.jsx)(n.strong,{children:"B\xfasquedas"}),", como ",(0,s.jsx)(n.code,{children:"QUERY BY ATTRIBUTE"}),", ",(0,s.jsx)(n.code,{children:"QUERY SELECTION BY ATTRIBUTE"}),", o ",(0,s.jsx)(n.code,{children:"ORDER BY ATTRIBUTE"})," para llevar a cabo el procesamiento de los campos objetos."]}),"\n",(0,s.jsx)(n.p,{children:"Cada valor de propiedad al que se accede a trav\xe9s de la notaci\xf3n de objeto se considera una expresi\xf3n. Puede utilizar estos valores siempre que se esperen expresiones 4D:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["en c\xf3digo 4D, ya sea escrito en los m\xe9todos (editor de m\xe9todos) o externalizado (f\xf3rmulas, archivos de etiquetas procesados por ",(0,s.jsx)(n.code,{children:"PROCESS 4D TAGS"})," o el servidor web, archivos de exportaci\xf3n, documentos 4D Write Pro...),"]}),"\n",(0,s.jsx)(n.li,{children:"en las \xe1reas de expresiones del depurador y del explorador de ejecuci\xf3n,"}),"\n",(0,s.jsx)(n.li,{children:"en la lista de propiedades del editor de formularios para los objetos formulario: campo Variable o Expresi\xf3n, as\xed como diversas expresiones de list box y columnas (fuente de datos, color de fondo, estilo o color de fuente)."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"inicializaci\xf3n",children:"Inicializaci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["Los objetos deben haber sido inicializados, por ejemplo utilizando el comando ",(0,s.jsx)(n.code,{children:"New object"}),", de lo contrario al intentar leer o modificar sus propiedades se generar\xe1 un error de sintaxis."]}),"\n",(0,s.jsx)(n.p,{children:"Ejemplo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:" C_OBJECT($obVar) //creaci\xf3n de una variable 4D de tipo objeto\n $obVar:=New object //inicializaci\xf3n del objeto y asignaci\xf3n a la variable 4D\n"})}),"\n",(0,s.jsx)(n.h3,{id:"objeto-est\xe1ndar-o-compartido",children:"Objeto est\xe1ndar o compartido"}),"\n",(0,s.jsx)(n.p,{children:"Puede crear dos tipos de objetos:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["objetos est\xe1ndar (no compartidos), utilizando el comando ",(0,s.jsx)(n.code,{children:"New object"}),". Estos objetos pueden ser editados sin ning\xfan control de acceso espec\xedfico, pero no pueden ser compartidos entre procesos."]}),"\n",(0,s.jsxs)(n.li,{children:["objetos compartidos, utilizando el comando ",(0,s.jsx)(n.code,{children:"New shared object"}),". Estos objetos pueden ser compartidos entre procesos, incluidos los hilos apropiativos. El acceso a estos objetos se controla mediante estructuras ",(0,s.jsx)(n.code,{children:"Use...End use"}),". Para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,s.jsx)(n.a,{href:"/docs/es/19/Concepts/shared",children:"Objetos y colecciones compartidos"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"principios-de-la-sintaxis",children:"Principios de la sintaxis"}),"\n",(0,s.jsx)(n.p,{children:"La notaci\xf3n de objetos puede utilizarse para acceder a los valores de las propiedades de objetos a trav\xe9s de una cadena de tokens."}),"\n",(0,s.jsx)(n.h3,{id:"propiedades-de-los-objetos",children:"Propiedades de los objetos"}),"\n",(0,s.jsx)(n.p,{children:"Con la notaci\xf3n de objetos, se puede acceder a las propiedades de los objetos de dos maneras:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'using a "dot" symbol: > object.propertyName'}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Ejemplo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'     employee.name:="Smith"\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'using a string within square brackets: > object["propertyName"]'}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Ejemplos:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'     $vName:=employee["name"]\n     //o tambi\xe9n:\n     $property:="name"\n     $vName:=employee[$property]\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"Como el valor de una propiedad de objeto puede ser un objeto o una colecci\xf3n, la notaci\xf3n objeto acepta una secuencia de s\xedmbolos para acceder a subpropiedades, por ejemplo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:" $vAge:=employee.children[2].age\n"})}),"\n",(0,s.jsx)(n.p,{children:"La notaci\xf3n de objetos est\xe1 disponible en cualquier elemento del lenguaje que pueda contener o devolver un objeto, es decir:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["con los ",(0,s.jsx)(n.strong,{children:"Objetos"})," mismos (almacenados en variables, campos, propiedades de objetos, arrays de objetos o elementos de colecciones). Ejemplos:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"     $age:=$myObjVar.employee.age //variable\n     $addr:=[Emp]data_obj.address //campo\n     $city:=$addr.city //propiedad de un objeto\n     $pop:=$aObjCountries{2}.population //array de objetos\n     $val:=$myCollection[3].subvalue //elemento de colecci\xf3n\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"comandos 4D"})," que devuelven objetos. Ejemplo:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"     $measures:=Get database measures. DB.tables\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"M\xe9todos proyecto"})," que devuelven objetos. Ejemplo:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'      // MyMethod1\n     C_OBJECT($0)\n     $0:=New object("a";10;"b";20)\n\n      //myMethod2\n     $result:=MyMethod1.a //10\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Collections"})," Example:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"     myColl.length //tama\xf1o de la colecci\xf3n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"punteros",children:"Punteros"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota preliminar:"})," dado que los objetos se pasan siempre por referencia, no suele ser necesario utilizar punteros. Al pasar el objeto, internamente 4D utiliza autom\xe1ticamente un mecanismo similar a un puntero, minimizando la necesidad de memoria y permitiendo modificar el par\xe1metro y devolver las modificaciones. Como resultado, no es necesario utilizar punteros. Sin embargo, en caso de querer utilizar punteros, se puede acceder a los valores de las propiedades mediante punteros."]}),"\n",(0,s.jsx)(n.p,{children:'El uso de la notaci\xf3n de objetos con punteros es muy similar al uso de la notaci\xf3n de objetos directamente con objetos, excepto que el s\xedmbolo "punto" debe omitirse.'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Acceso directo:"}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"pointerOnObject->propertyName"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Acceso por nombre:"}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:'pointerOnObject->["propertyName"]'}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Ejemplo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:" C_OBJECT(vObj)\n C_POINTER(vPtr)\n vObj:=New object\n vObj.a:=10\n vPtr:=->vObj\n x:=vPtr->a //x=10\n"})}),"\n",(0,s.jsx)(n.h3,{id:"valor-null",children:"Valor Null"}),"\n",(0,s.jsxs)(n.p,{children:["Cuando se utiliza la notaci\xf3n de objetos, se soporta el valor ",(0,s.jsx)(n.strong,{children:"null"})," con el comando ",(0,s.jsx)(n.strong,{children:"Null"}),". Este comando puede utilizarse para asignar o comparar el valor nulo a propiedades de objetos o a elementos de colecciones, por ejemplo:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:" myObject.address.zip:=Null\n If(myColl[2]=Null)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n, consulte la descripci\xf3n del comando ",(0,s.jsx)(n.code,{children:"Null"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"valor-indefinido",children:"Valor indefinido"}),"\n",(0,s.jsx)(n.p,{children:"La evaluaci\xf3n de una propiedad de un objeto puede producir a veces un valor indefinido. Normalmente, al intentar leer o asignar expresiones indefinidas, 4D generar\xe1 errores. Esto no ocurre en los siguientes casos:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["La lectura de una propiedad de un objeto o valor indefinido devuelve un indefinido; la asignaci\xf3n de un valor indefinido a variables (excepto arrays) tiene el mismo efecto que llamar ",(0,s.jsx)(n.code,{children:"CLEAR VARIABLE"})," con ellas:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"     C_OBJECT($o)\n     C_LONGINT($val)\n     $val:=10 //$val=10\n     $val:=$o.a //$o. es indefinido (no hay error), y la asignaci\xf3n de este valor borra la variable\n      //$val=0\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["La lectura de la propiedad ",(0,s.jsx)(n.strong,{children:"length"})," de una colecci\xf3n indefinida produce 0:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"     C_COLLECTION($c) //variable creada pero no se ha definido ninguna colecci\xf3n\n     $size:=$c.length //$size = 0\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Un valor indefinido pasado como par\xe1metro a un m\xe9todo proyecto se convierte autom\xe1ticamente en 0 o "" seg\xfan el tipo de par\xe1metro declarado.'}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'     C_OBJECT($o)\n     mymethod($o.a) //pasa un par\xe1metro indefinido\n\n      //En el m\xe9todo mymethod\n     C_TEXT($1) //Par\xe1metro de tipo texto\n      // $1 contiene ""\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Una expresi\xf3n de condici\xf3n se convierte autom\xe1ticamente en falsa cuando se eval\xfaa a indefinido con las palabras clave If y Case of:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"     C_OBJECT($o)\n     If($o.a) // false\n     End if\n     Case of\n        :($o.a) // false\n     End case\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"La asignaci\xf3n de un valor indefinido a una propiedad de objeto existente reinicializa o borra su valor, dependiendo de su tipo:"}),"\n",(0,s.jsx)(n.li,{children:"Objeto, colecci\xf3n, puntero: Null"}),"\n",(0,s.jsx)(n.li,{children:"Imagen: imagen vac\xeda"}),"\n",(0,s.jsx)(n.li,{children:"Booleano: False"}),"\n",(0,s.jsx)(n.li,{children:'Cadena: ""'}),"\n",(0,s.jsx)(n.li,{children:"N\xfamero: 0"}),"\n",(0,s.jsx)(n.li,{children:'Fecha: !00-00-00! Date: !00-00-00! if "Use date type instead of ISO date format in objects" setting is enabled, otherwise ""'}),"\n",(0,s.jsx)(n.li,{children:"Hora: 0 (n\xfamero de ms)"}),"\n",(0,s.jsx)(n.li,{children:"Indefinido, Null: sin cambios"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'     C_OBJECT($o)\n     $o:=New object("a";2)\n     $o.a:=$o.b //$o.a=0\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"La asignaci\xf3n de un valor indefinido a una propiedad de objeto no existente no hace nada."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Cuando se esperan expresiones de un tipo determinado en su c\xf3digo 4D, puede asegurarse de que tienen el tipo correcto incluso cuando se eval\xfaan como indefinidas, rode\xe1ndolas con el comando de transformaci\xf3n 4D apropiado: ",(0,s.jsx)(n.code,{children:"String"}),", ",(0,s.jsx)(n.code,{children:"Num"}),", ",(0,s.jsx)(n.code,{children:"Date"}),", ",(0,s.jsx)(n.code,{children:"Time"}),", ",(0,s.jsx)(n.code,{children:"Bool"}),". Estos comandos devuelven un valor vac\xedo del tipo especificado cuando la expresi\xf3n se eval\xfaa como indefinida. Por ejemplo:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:" $myString:=Lowercase(String($o.a.b)) //asegurarse de obtener un valor de cadena aunque sea indefinido\n  //para evitar errores en el c\xf3digo\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,s.jsx)(n.p,{children:"La utilizaci\xf3n de la notaci\xf3n de objetos simplifica el c\xf3digo 4D en el manejo de los mismos. Sin embargo, tenga en cuenta que la notaci\xf3n basada en comandos sigue siendo totalmente soportada."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Escritura y lectura de propiedades de objetos (este ejemplo compara la notaci\xf3n de objetos y la notaci\xf3n de comandos):"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'  // Utilizando la notaci\xf3n de objeto\n C_OBJECT($myObj) //declaraci\xf3n de una variable objeto 4D\n $myObj:=New object //crea un objeto y lo asigna a la variable\n $myObj.age:=56\n $age:=$myObj.age //56\n\n  // Usando la notaci\xf3n por comando\n C_OBJECT($myObj2) //declara una variable objeto 4D\n OB SET($myObj2;"age";42) //crea un objeto y a\xf1ade la propiedad age\n $age:=OB Get($myObj2;"age") //42\n\n  // Por supuesto, se pueden mezclar ambas notaciones\n C_OBJECT($myObj3)\n OB SET($myObj3;"age";10)\n $age:=$myObj3.age //10\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Creaci\xf3n de propiedades y asignaci\xf3n de valores, incluyendo objetos:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' C_OBJECT($Emp)\n $Emp:=New object\n $Emp.city:="London" //crea la propiedad city con el valor "London"\n $Emp.city:="Paris" //modifica la propiedad city\n $Emp.phone:=New object("office";"123456789";"home";"0011223344")\n  //crea la propiedad phone y define su valor para un objeto\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Obtener un valor en un subobjeto es muy sencillo utilizando la notaci\xf3n de objetos:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' $vCity:=$Emp.city //"Paris"\n $vPhone:=$Emp.phone.home //"0011223344"\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Puede acceder a las propiedades como cadenas utilizando el operador [ ]"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' $Emp["city"]:="Berlin" //modifica la propiedad city\n  //esto puede ser \xfatil para crear propiedades a trav\xe9s de variables\n C_TEXT($addr)\n $addr:="address"\n For($i;1;4)\n    $Emp[$addr+String($i)]:="\n End for\n  // crea 4 propiedades vac\xedas "direcci\xf3n1...direcci\xf3n4" en el objeto $Emp\n'})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},221020:(e,n,o)=>{var s=o(296540),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,o){var s,i={},c=null,t=null;for(s in void 0!==o&&(c=""+o),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(t=n.ref),n)r.call(n,s)&&!l.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:a,type:e,key:c,ref:t,props:i,_owner:d.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},474848:(e,n,o)=>{e.exports=o(221020)},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>d});var s=o(296540);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);