"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32131],{604885:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=n(474848),r=n(28453);const o={id:"variables",title:"Variables"},l=void 0,i={id:"Concepts/variables",title:"Variables",description:"Los datos en 4D se almacenan de dos formas fundamentalmente diferentes. Los campos almacenan datos permanentemente en el disco; las variables almacenan datos temporalmente en la memoria.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/Concepts/variables.md",sourceDirName:"Concepts",slug:"/Concepts/variables",permalink:"/docs/es/20-R5/Concepts/variables",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fvariables.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"variables",title:"Variables"},sidebar:"docs",previous:{title:"Variant",permalink:"/docs/es/20-R5/Concepts/variant"},next:{title:"Arrays",permalink:"/docs/es/20-R5/Concepts/arrays"}},d={},c=[{value:"Declaraci\xf3n de variables",id:"declaraci\xf3n-de-variables",level:2},{value:"Ejemplos",id:"ejemplos",level:3},{value:"Inicializaci\xf3n de variables en la l\xednea de declaraci\xf3n",id:"inicializaci\xf3n-de-variables-en-la-l\xednea-de-declaraci\xf3n",level:2},{value:"Asignar los valores",id:"asignar-los-valores",level:2},{value:"Variables locales, proceso e interproceso",id:"variables-locales-proceso-e-interproceso",level:2},{value:"Variables locales",id:"variables-locales",level:3},{value:"Variables proceso",id:"variables-proceso",level:3},{value:"Variables interproceso",id:"variables-interproceso",level:3},{value:"Variables del sistema",id:"variables-del-sistema",level:2}];function t(e){const a={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.p,{children:["Los datos en 4D se almacenan de dos formas fundamentalmente diferentes. Los ",(0,s.jsx)(a.strong,{children:"campos"})," almacenan datos permanentemente en el disco; las ",(0,s.jsx)(a.strong,{children:"variables"})," almacenan datos temporalmente en la memoria."]}),"\n",(0,s.jsxs)(a.p,{children:["Cuando define su base, especifique a 4D los nombres y los tipos de campos que desea utilizar. Las variables son muy parecidas, tambi\xe9n se les da nombres y tipos diferentes (ver ",(0,s.jsx)(a.a,{href:"/docs/es/20-R5/Concepts/data-types",children:"Tipos de datos"}),")."]}),"\n",(0,s.jsx)(a.p,{children:"Una vez creada, puede utilizar una variable dondequiera que la necesite en su aplicaci\xf3n. Por ejemplo, podr\xeda necesitar almacenar una variable texto en un campo del mismo tipo:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:" [MyTable]MyField:=MyText\n"})}),"\n",(0,s.jsx)(a.p,{children:"Las variables son objetos del lenguaje; puede crear y utilizar variables que nunca aparecer\xe1n en la pantalla. En sus formularios, puede mostrar variables en la pantalla (excepto de los punteros y de los BLOB), introducir datos en ellas e imprimirlas en informes. De este modo, las variables de \xe1rea introducibles y no introducibles act\xfaan igual que los campos, y los mismos controles integrados est\xe1n disponibles al crearlos. Las variables de formulario tambi\xe9n pueden controlar botones, list boxes, \xe1reas de desplazamiento, botones imagen, etc., o mostrar los resultados de c\xe1lculos que no necesitan ser guardados."}),"\n",(0,s.jsx)(a.h2,{id:"declaraci\xf3n-de-variables",children:"Declaraci\xf3n de variables"}),"\n",(0,s.jsx)(a.p,{children:"Generalmente se crean variables declar\xe1ndolas. El lenguaje 4D ofrece dos formas de declarar las variables:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["utilizando la palabra clave ",(0,s.jsx)(a.code,{children:"var"})," (recomendada especialmente si su c\xf3digo utiliza objetos y clases, y esta sintaxis mejora las sugerencias del editor de c\xf3digo y las funciones de tecleo predictivo),"]}),"\n",(0,s.jsx)(a.li,{children:'utilizando uno de los comandos del lenguaje 4D del tema "Compilador" o "Arrays" (sintaxis heredada).'}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["Cuando se declaran las variables, se inicializan con el ",(0,s.jsx)(a.a,{href:"/docs/es/20-R5/Concepts/data-types#default-values",children:(0,s.jsx)(a.strong,{children:"valor por defecto correspondiente a su tipo"})}),", que mantendr\xe1n durante la sesi\xf3n mientras no hayan sido ",(0,s.jsx)(a.a,{href:"#assigning-data",children:"asignadas"}),". Alternativamente, al declarar variables, puede ",(0,s.jsx)(a.a,{href:"#inicializar-variables-en-la-l%C3%ADnea-de-declaraci%C3%B3n",children:"inicializar"})," su valor junto con su tipo de datos todo dentro de una l\xednea."]}),"\n",(0,s.jsxs)(a.admonition,{type:"note",children:[(0,s.jsx)(a.p,{children:"Aunque no es recomendable, puede crear variables simplemente utiliz\xe1ndolas; no es necesario declararlas formalmente. Por ejemplo, para crear una variable que mantenga la fecha actual m\xe1s 30 d\xedas, puede escribir:"}),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:" MyDate:=Current date+30 //MyDate se crea\n // 4D asume que es de tipo fecha  \n //  y asigna la fecha actual m\xe1s 30 d\xedas\n"})}),(0,s.jsx)(a.p,{children:"Cuando una variable se crea antes de ser declarada, no se inicializa en el paso de declaraci\xf3n."})]}),"\n",(0,s.jsx)(a.p,{children:"Para declarar una variable de cualquier tipo, utilice la siguiente sintaxis:"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.code,{children:"var <varName>{; <varName2>;...}{ : <varType>}"})}),"\n",(0,s.jsx)(a.p,{children:"Por ejemplo:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:"var $myText : Text  //una variable texto\nvar myDate1; myDate2 : Date  //varias variables fecha\nvar $myFile : 4D.File  //una variable objeto clase archivo\nvar $myVar //una variable variant\n"})}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.code,{children:"varName"})," es el nombre de la variable, debe cumplir con las ",(0,s.jsx)(a.a,{href:"/docs/es/20-R5/Concepts/identifiers",children:"reglas 4D"})," sobre identificadores.\nEsta sintaxis s\xf3lo soporta declaraciones de ",(0,s.jsx)(a.a,{href:"#local-process-and-interprocess-variables",children:"variables locales y de proceso"}),", por lo que excluye ",(0,s.jsx)(a.a,{href:"#interprocess-variables",children:"variables interproceso"})," y ",(0,s.jsx)(a.a,{href:"/docs/es/20-R5/Concepts/arrays",children:"arrays"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.code,{children:"varType"})," puede ser:"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["un ",(0,s.jsx)(a.a,{href:"/docs/es/20-R5/Concepts/data-types",children:"tipo b\xe1sico"}),", en cuyo caso la variable contiene un valor del tipo declarado,"]}),"\n",(0,s.jsxs)(a.li,{children:["una ",(0,s.jsx)(a.a,{href:"/docs/es/20-R5/Concepts/classes",children:"referencia de clase"})," (clase 4D o clase usuario), en cuyo caso la variable contiene una referencia a un objeto de la clase definida."]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["Si se omite ",(0,s.jsx)(a.code,{children:"varType"}),", se crea una variable de tipo ",(0,s.jsx)(a.strong,{children:"variant"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["La siguiente tabla enumera todos los valores ",(0,s.jsx)(a.code,{children:"varType"})," soportados:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"varType"}),(0,s.jsx)(a.th,{children:"Contenido"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"Text"})}),(0,s.jsx)(a.td,{children:"Valor texto"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"Date"})}),(0,s.jsx)(a.td,{children:"Valor fecha"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"Time"})}),(0,s.jsx)(a.td,{children:"Valor Hora"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"Boolean"})}),(0,s.jsx)(a.td,{children:"Valor booleano"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"Integer"})}),(0,s.jsx)(a.td,{children:"Valor entero largo"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"Real"})}),(0,s.jsx)(a.td,{children:"Valor real"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"Pointer"})}),(0,s.jsx)(a.td,{children:"Valor puntero"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"Picture"})}),(0,s.jsx)(a.td,{children:"Valor imagen"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"Blob"})}),(0,s.jsx)(a.td,{children:"Valeor Blob escalar"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"Collection"})}),(0,s.jsx)(a.td,{children:"Valor colecci\xf3n"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"Variant"})}),(0,s.jsx)(a.td,{children:"Valor variant"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"Object"})}),(0,s.jsx)(a.td,{children:"Objeto con clase por defecto (4D.object)"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"4D.<className>"})}),(0,s.jsx)(a.td,{children:"Objeto del nombre de la clase 4D"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"cs.<className>"})}),(0,s.jsx)(a.td,{children:"Objeto del nombre de la clase usuario"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"cs.<namespace><className>"})}),(0,s.jsxs)(a.td,{children:["Objeto del componente ",(0,s.jsx)(a.code,{children:"<namespace>"})," nombre de la clase"]})]})]})]}),"\n",(0,s.jsx)(a.h3,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Para declarar variables b\xe1sicas locales y de proceso:"}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:"var $myText; myText; $vt : Text\nvar myVar //variant\n\nvar $o : Object    \n//equivalente a:  \nvar $o : 4D.Object\n//tambi\xe9n equivalente a C_OBJECT($o)\n"})}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Para declarar las variables objeto de la clase 4D:"}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:"var $myFolder : 4D.Folder\nvar $myFile : 4D.File\n"})}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Para declarar las variables objeto de la clase usuario:"}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:"var $myClass : cs.MyClass\nvar $dataclass : cs.Employee\nvar $entity : cs.EmployeeEntity\n"})}),"\n",(0,s.jsx)(a.h2,{id:"inicializaci\xf3n-de-variables-en-la-l\xednea-de-declaraci\xf3n",children:"Inicializaci\xf3n de variables en la l\xednea de declaraci\xf3n"}),"\n",(0,s.jsx)(a.p,{children:"Al declarar variables, tiene la flexibilidad de especificar su tipo de datos y proporcionar un valor inicial en una sola declaraci\xf3n. He aqu\xed algunos ejemplos:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:'var $a : Text:="hello"\nvar $b : Date:=!2023-09-12!\nvar $c : Object:=New object()\nvar $d : cs.Customer:=cs.Customer.new()\n'})}),"\n",(0,s.jsx)(a.p,{children:"Las variables tambi\xe9n pueden ser declaradas e inicializadas sin mencionar expl\xedcitamente su tipo de datos, en cuyo caso su tipo ser\xe1 inferido por 4D. He aqu\xed algunos ejemplos:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:'var $text:="hello" // Inferido como Texto \nvar $number:=20 // Inferido como Real \nvar $obj:={}  // Inferido como Objeto \nvar $mycol:=[] // Inferido como Colecci\xf3n  \n\n'})}),"\n",(0,s.jsxs)(a.admonition,{type:"note",children:[(0,s.jsxs)(a.p,{children:["El tipo inferido podr\xeda ser diferente entre ",(0,s.jsx)(a.a,{href:"/docs/es/20-R5/Concepts/interpreted-compiled",children:"modo interpretado y compilado"})," si la evaluaci\xf3n del valor es demasiado ambigua. En este caso, el compilador genera una advertencia y se utiliza un tipo variable. Por ejemplo, en el siguiente $a el tipo se inferir\xe1 correctamente en modo interpretado (Texto), pero la comprobaci\xf3n sint\xe1ctica generar\xe1 una advertencia y $a se escribir\xe1 como una variable para el modo compilado."]}),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:'var $class:={test: "a"}\nvar $a:=$class.test\n\n'})})]}),"\n",(0,s.jsxs)(a.p,{children:["4D intenta deducir el tipo m\xe1s general. Por ejemplo, utiliza el tipo Real en lugar del tipo Entero cuando una variable se inicializa con un valor entero (por ejemplo, ",(0,s.jsx)(a.code,{children:"var $a:=10 //Se infiere el tipo Real"}),"). En tales casos, o cuando se inicializa una variable con un tipo complejo como la instanciaci\xf3n de una clase, se recomienda pasar el tipo expl\xedcitamente."]}),"\n",(0,s.jsx)(a.p,{children:"En la mayor\xeda de los casos, todos los tipos de variables se determinan autom\xe1ticamente. La excepci\xf3n es cuando se asigna un valor a una variable de proceso o interproceso, lo que desencadena un mensaje de advertencia."}),"\n",(0,s.jsxs)(a.admonition,{type:"note",children:[(0,s.jsx)(a.p,{children:"No se admiten asignaciones m\xfaltiples en una l\xednea:"}),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:"var $a; $b : Integer:=15 //error\n\n"})})]}),"\n",(0,s.jsx)(a.h2,{id:"asignar-los-valores",children:"Asignar los valores"}),"\n",(0,s.jsxs)(a.p,{children:["Los datos pueden introducirse y copiarse en variables y arrays. Poner datos en una variable se llama ",(0,s.jsx)(a.strong,{children:"asignar los datos a la variable"})," y se hace con el operador de asignaci\xf3n (:=). El operador de asignaci\xf3n tambi\xe9n se utiliza para asignar datos a campos."]}),"\n",(0,s.jsx)(a.p,{children:"El operador de asignaci\xf3n es un primer medio para crear una variable e introducir datos en ella. Se escribe el nombre de la variable que se quiere crear a la izquierda del operador de asignaci\xf3n. Por ejemplo:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:"MyNumber:=3\n"})}),"\n",(0,s.jsxs)(a.p,{children:["crea la variable ",(0,s.jsx)(a.em,{children:"MyNumber"})," y pone el n\xfamero 3 en ella. Si MyNumber ya existe, entonces toma el valor 3."]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsxs)(a.p,{children:["Normalmente no se recomienda crear variables sin ",(0,s.jsx)(a.a,{href:"#declaring-variables",children:"declarar su tipo"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["Por supuesto, las variables no ser\xedan muy \xfatiles si no se pudieran obtener valores de ellas. Una vez m\xe1s, se utiliza el operador de asignaci\xf3n. Si necesita poner el valor de MyNumber en un campo llamado [Products]Size, escribir\xeda ",(0,s.jsx)(a.em,{children:"MyNumber"})," a la derecha del operador de asignaci\xf3n:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:"[Products]Size:=MyNumber\n"})}),"\n",(0,s.jsxs)(a.p,{children:["En este caso, ",(0,s.jsx)(a.em,{children:"[Products]Size"})," ser\xeda igual a 3. Este ejemplo es bastante sencillo, pero ilustra la forma fundamental en que se transfieren los datos de un lugar a otro utilizando el lenguaje."]}),"\n",(0,s.jsx)(a.p,{children:"Los valores se asignan a los elementos del array utilizando llaves ({...}):"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:'atNames{1}:="Richard"\n'})}),"\n",(0,s.jsx)(a.h2,{id:"variables-locales-proceso-e-interproceso",children:"Variables locales, proceso e interproceso"}),"\n",(0,s.jsxs)(a.p,{children:["Puede crear tres tipos de variables: ",(0,s.jsx)(a.strong,{children:"local"}),", ",(0,s.jsx)(a.strong,{children:"proceso"})," e interproceso**. La diferencia entre los tres tipos de elementos es su alcance, o los objetos para los que est\xe1n disponibles."]}),"\n",(0,s.jsx)(a.h3,{id:"variables-locales",children:"Variables locales"}),"\n",(0,s.jsx)(a.p,{children:'Una variable local, como su nombre indica, es local a un m\xe9todo, accesible s\xf3lo dentro del m\xe9todo en el que fue creada y no accesible fuera de ese m\xe9todo. Ser local a un m\xe9todo se conoce formalmente como ser de "alcance local." Las variables locales se utilizan para restringir una variable para que funcione s\xf3lo dentro del m\xe9todo.'}),"\n",(0,s.jsx)(a.p,{children:"Es posible que desee utilizar una variable local para:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Evitar conflictos con los nombres de otras variables"}),"\n",(0,s.jsx)(a.li,{children:"Utilizar los datos temporalmente"}),"\n",(0,s.jsx)(a.li,{children:"Reducir el n\xfamero de variables proceso"}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"El nombre de una variable local siempre comienza por el signo d\xf3lar ($) y puede contener hasta 31 caracteres adicionales. Si introduce un nombre m\xe1s largo, 4D lo trunca a la longitud adecuada."}),"\n",(0,s.jsx)(a.p,{children:"Cuando se trabaja en un proyecto de aplicaci\xf3n con muchos m\xe9todos y variables, a menudo se encuentra que se necesita utilizar una variable s\xf3lo dentro del m\xe9todo en el que se est\xe1 trabajando. Puede crear y utilizar una variable local en el m\xe9todo sin preocuparse de si ha utilizado el mismo nombre de variable en otro lugar."}),"\n",(0,s.jsxs)(a.p,{children:["Con frecuencia, en una aplicaci\xf3n, se necesitan peque\xf1as piezas de informaci\xf3n del usuario. El comando ",(0,s.jsx)(a.code,{children:"Request"})," puede obtener esta informaci\xf3n. Muestra una caja de di\xe1logo con un mensaje que solicita al usuario una respuesta. Cuando el usuario introduce la respuesta, el comando devuelve la informaci\xf3n que el usuario introdujo. Generalmente no es necesario mantener esta informaci\xf3n en sus m\xe9todos durante mucho tiempo. Esta es una forma t\xedpica de utilizar una variable local. Aqu\xed un ejemplo:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:' $vsID:=Request("Please enter your ID:")\n If(OK=1)\n    QUERY([People];[People]ID =$vsID)\n End if\n'})}),"\n",(0,s.jsx)(a.p,{children:"Este m\xe9todo simplemente pide al usuario que introduzca un ID. Pone la respuesta en una variable local, $vsID, y luego busca el ID que el usuario introdujo. Cuando este m\xe9todo termina, la variable local $vsID se borra de la memoria. Este funcionamiento est\xe1 bien, porque la variable se necesita s\xf3lo una vez y s\xf3lo en este m\xe9todo."}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Nota:"})," los par\xe1metros $1, $2... pasadas a los m\xe9todos son variables locales. Para m\xe1s informaci\xf3n, consulte ",(0,s.jsx)(a.a,{href:"/docs/es/20-R5/Concepts/parameters",children:"Par\xe1metros"}),"."]}),"\n",(0,s.jsx)(a.h3,{id:"variables-proceso",children:"Variables proceso"}),"\n",(0,s.jsx)(a.p,{children:"Una variable proceso s\xf3lo est\xe1 disponible dentro de un proceso. Es accesible al m\xe9todo del proceso y a todos los m\xe9todos llamados desde el proceso."}),"\n",(0,s.jsx)(a.p,{children:"Una variable proceso no tiene un prefijo antes de su nombre. Un nombre de variable proceso puede contener hasta 31 caracteres."}),"\n",(0,s.jsx)(a.p,{children:'En modo interpretado, las variables se mantienen din\xe1micamente; se crean y se borran de la memoria "sobre la marcha". En modo compilado, todos los procesos que se crean (procesos usuario) comparten la misma definici\xf3n de variables proceso, pero cada proceso tiene una instancia diferente para cada variable. Por ejemplo, la variable miVar es una variable en el proceso P_1 y otra en el proceso P_2.'}),"\n",(0,s.jsxs)(a.p,{children:["Un proceso puede leer y escribir las variables proceso de otro proceso utilizando los comandos ",(0,s.jsx)(a.code,{children:"GET PROCESS VARIABLE"})," y ",(0,s.jsx)(a.code,{children:"SET PROCESS VARIABLE"}),". Es una buena pr\xe1ctica de programaci\xf3n restringir el uso de estos comandos a la situaci\xf3n para la que fueron creados en 4D:"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Comunicaci\xf3n interprocesos en lugares espec\xedficos de su c\xf3digo"}),"\n",(0,s.jsx)(a.li,{children:"Gesti\xf3n de arrastrar y soltar interproceso"}),"\n",(0,s.jsx)(a.li,{children:"En Cliente/Servidor, la comunicaci\xf3n entre los procesos en las m\xe1quinas cliente y los procedimientos almacenados ejecutados en las m\xe1quinas servidoras"}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["Para m\xe1s informaci\xf3n, consulte el cap\xedtulo ",(0,s.jsx)(a.strong,{children:"Procesos"})," y la descripci\xf3n de estos comandos."]}),"\n",(0,s.jsx)(a.h3,{id:"variables-interproceso",children:"Variables interproceso"}),"\n",(0,s.jsx)(a.admonition,{title:"Obsoleto",type:"warning",children:(0,s.jsxs)(a.p,{children:["No se recomienda el uso de variables interproceso, ya que no est\xe1n disponibles para los ",(0,s.jsx)(a.a,{href:"/docs/es/20-R5/Develop/preemptive-processes",children:"procesos apropiativos"})," y tienden a hacer que el c\xf3digo sea menos mantenible."]})}),"\n",(0,s.jsx)(a.p,{children:"Las variables interproceso est\xe1n disponibles en todo el proyecto y son compartidas por todos los procesos cooperativos. Se utilizan principalmente para compartir informaci\xf3n entre procesos."}),"\n",(0,s.jsxs)(a.p,{children:["El nombre de una variable interproceso siempre comienza con los s\xedmbolos ",(0,s.jsx)(a.code,{children:"<>"}),' \u2014 un signo "menor que" seguido de un signo "mayor que"\u2014 seguido de 31 caracteres.']}),"\n",(0,s.jsx)(a.p,{children:"En modo cliente/servidor, cada m\xe1quina (cliente y servidor) comparten la misma definici\xf3n de las variables interproceso, pero cada m\xe1quina tiene una instancia diferente para cada variable."}),"\n",(0,s.jsx)(a.h2,{id:"variables-del-sistema",children:"Variables del sistema"}),"\n",(0,s.jsxs)(a.p,{children:["El lenguaje 4D maneja varias ",(0,s.jsx)(a.strong,{children:"variables sistema"}),", las cuales le permiten controlar la ejecuci\xf3n de diferentes operaciones. Puedes probar sus valores y usarlos como cualquier variable. Todas las variables del sistema son ",(0,s.jsx)(a.a,{href:"#process-variables",children:"variables proceso"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["Las variables del sistema son utilizadas por los ",(0,s.jsx)(a.a,{href:"/docs/es/20-R5/Concepts/commands",children:"comandos 4D"}),'. Consulte el p\xe1rrafo "Variables del sistema y conjuntos" en la descripci\xf3n de un comando para averiguar si afecta a una variable del sistema.']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"Nombre de la variable del sistema"}),(0,s.jsx)(a.th,{children:"Tipo"}),(0,s.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"OK"})}),(0,s.jsx)(a.td,{children:"Longint"}),(0,s.jsxs)(a.td,{children:["Normalmente se establece en 1 despu\xe9s de que un comando haya mostrado una caja de di\xe1logo y el usuario haya hecho clic en el bot\xf3n ",(0,s.jsx)(a.strong,{children:"Aceptar"}),", y en 0 si hizo clic en ",(0,s.jsx)(a.strong,{children:"Cancelar"}),". Algunos comandos tambi\xe9n modifican el valor de la variable del sistema ",(0,s.jsx)(a.code,{children:"OK"})," cuando se ejecuta una operaci\xf3n con \xe9xito."]})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"Document"})}),(0,s.jsx)(a.td,{children:"Text"}),(0,s.jsxs)(a.td,{children:['Contiene el "nombre largo" (ruta completa+nombre) del \xfaltimo archivo abierto o creado utilizando comandos como ',(0,s.jsx)(a.a,{href:"https://doc.4d.com/4dv20/help/command/en/page264.html",children:"Open document"})," o ",(0,s.jsx)(a.a,{href:"https://doc.4d.com/4dv20/help/command/en/page345.html",children:"SELECT LOG FILE"}),"."]})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsxs)(a.td,{children:[(0,s.jsx)(a.code,{children:"FldDelimit"}),", ",(0,s.jsx)(a.code,{children:"RecDelimit"})]}),(0,s.jsx)(a.td,{children:"Text"}),(0,s.jsxs)(a.td,{children:["Contienen los c\xf3digos de caracteres que se utilizar\xe1n respectivamente como separador de campos (por defecto es ",(0,s.jsx)(a.strong,{children:"Tab"})," (9)) y separador de registros (por defecto es ",(0,s.jsx)(a.strong,{children:"retorno de carro"})," (13)) al importar o exportar texto. Para utilizar un separador diferente, asigne un nuevo valor a la variable del sistema."]})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsxs)(a.td,{children:[(0,s.jsx)(a.code,{children:"Error"}),", ",(0,s.jsx)(a.code,{children:"Error method"}),", ",(0,s.jsx)(a.code,{children:"Error line"}),", ",(0,s.jsx)(a.code,{children:"Error formula"})]}),(0,s.jsx)(a.td,{children:"Text, Longint"}),(0,s.jsxs)(a.td,{children:["Utilizado en un m\xe9todo de captura de errores instalado por el comando ",(0,s.jsx)(a.a,{href:"https://doc.4d.com/4dv20/help/command/en/page155.html",children:(0,s.jsx)(a.code,{children:"ON ERR CALL"})}),". Ver ",(0,s.jsx)(a.a,{href:"/docs/es/20-R5/Concepts/error-handling#handling-errors-within-the-method",children:"Gesti\xf3n de errores en el m\xe9todo"}),"."]})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"MouseDown"})}),(0,s.jsx)(a.td,{children:"Longint"}),(0,s.jsxs)(a.td,{children:["Utilizado en un m\xe9todo instalado por el comando ",(0,s.jsx)(a.a,{href:"https://doc.4d.com/4dv20/help/command/en/page190.html",children:(0,s.jsx)(a.code,{children:"ON EVENT CALL"})}),". Toma el valor 1 cuando se presiona el bot\xf3n del rat\xf3n, de lo contrario 0."]})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsxs)(a.td,{children:[(0,s.jsx)(a.code,{children:"MouseX"}),", ",(0,s.jsx)(a.code,{children:"MouseY"})]}),(0,s.jsx)(a.td,{children:"Longint"}),(0,s.jsxs)(a.td,{children:["Utilizado en un m\xe9todo instalado por el comando ",(0,s.jsx)(a.a,{href:"https://doc.4d.com/4dv20/help/command/en/page190.html",children:(0,s.jsx)(a.code,{children:"ON EVENT CALL"})}),". ",(0,s.jsxs)(a.li,{children:["En un evento ",(0,s.jsx)(a.code,{children:"MouseDown=1"}),", ",(0,s.jsx)(a.code,{children:"MouseX"})," y ",(0,s.jsx)(a.code,{children:"MouseY"})," se establecen respectivamente en las coordenadas verticales y horizontales del clic. Ambos valores se expresan en p\xedxeles y utilizan el sistema de coordenadas local de la ventana. "]}),(0,s.jsxs)(a.li,{children:["En el caso de un campo imagen o variable, ",(0,s.jsx)(a.code,{children:"MouseX"})," y ",(0,s.jsx)(a.code,{children:"MouseY"})," devuelven las coordenadas locales de un clic de rat\xf3n en los eventos de formulario ",(0,s.jsx)(a.a,{href:"/docs/es/20-R5/Events/onClicked",children:(0,s.jsx)(a.code,{children:"On Clicked"})}),", ",(0,s.jsx)(a.a,{href:"/docs/es/20-R5/Events/onDoubleClicked",children:(0,s.jsx)(a.code,{children:"On Double Clicked"})})," y ",(0,s.jsx)(a.a,{href:"/docs/es/20-R5/Events/onMouseUp",children:(0,s.jsx)(a.code,{children:"On Mouse Up"})}),". Las coordenadas locales del cursor del rat\xf3n tambi\xe9n se retornan en los eventos formulario ",(0,s.jsx)(a.a,{href:"/docs/es/20-R5/Events/onMouseEnter",children:(0,s.jsx)(a.code,{children:"On Mouse Enter"})})," y ",(0,s.jsx)(a.a,{href:"/docs/es/20-R5/Events/onMouseMove",children:(0,s.jsx)(a.code,{children:"On Mouse Move"})}),". Para obtener m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,s.jsx)(a.a,{href:"/docs/es/20-R5/FormEditor/pictures#coordenadas-del-rat%C3%B3n-en-una-imagen",children:"Coordenadas del rat\xf3n en una imagen"}),"."]})]})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"KeyCode"})}),(0,s.jsx)(a.td,{children:"Longint"}),(0,s.jsxs)(a.td,{children:["Utilizado en un m\xe9todo instalado por el comando ",(0,s.jsx)(a.a,{href:"https://doc.4d.com/4dv20/help/command/en/page190.html",children:(0,s.jsx)(a.code,{children:"ON EVENT CALL"})}),". Define el c\xf3digo de car\xe1cter de la tecla que se acaba de presionar. Si la tecla es una tecla de funci\xf3n, ",(0,s.jsx)(a.code,{children:"KeyCode"})," se establece como un c\xf3digo especial."]})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"Modifiers"})}),(0,s.jsx)(a.td,{children:"Longint"}),(0,s.jsxs)(a.td,{children:["Utilizado en un m\xe9todo instalado por el comando ",(0,s.jsx)(a.a,{href:"https://doc.4d.com/4dv20/help/command/en/page190.html",children:(0,s.jsx)(a.code,{children:"ON EVENT CALL"})}),". Establece las teclas modificadoras del teclado (Ctrl/Command, Alt/Option, Shift, Caps Lock)."]})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"MouseProc"})}),(0,s.jsx)(a.td,{children:"Longint"}),(0,s.jsxs)(a.td,{children:["Utilizado en un m\xe9todo instalado por el comando ",(0,s.jsx)(a.a,{href:"https://doc.4d.com/4dv20/help/command/en/page190.html",children:(0,s.jsx)(a.code,{children:"ON EVENT CALL"})}),". Define el n\xfamero de proceso en el que tuvo lugar el \xfaltimo evento"]})]})]})]}),"\n",(0,s.jsx)(a.admonition,{type:"note",children:(0,s.jsx)(a.p,{children:"Por lo tanto, no se puede crear una variable, m\xe9todo o funci\xf3n usando ninguno de estos nombres de variables."})})]})}function u(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>l,x:()=>i});var s=n(296540);const r={},o=s.createContext(r);function l(e){const a=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(o.Provider,{value:a},e.children)}}}]);