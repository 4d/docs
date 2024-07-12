/*! For license information please see 2ac54e72.6e096fd6.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10670],{678016:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=a(474848),o=a(28453);const r={id:"quick-tour",title:"Un recorrido r\xe1pido",sidebar_label:"Un recorrido r\xe1pido"},d=void 0,l={id:"Concepts/quick-tour",title:"Un recorrido r\xe1pido",description:'Utilizando el lenguaje 4D, la impresi\xf3n del tradicional mensaje "Hello, world!" en pantalla puede hacerse de varias maneras. Lo m\xe1s sencillo es probablemente escribir la siguiente l\xednea \xfanica en un m\xe9todo de proyecto:',source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Concepts/quick-tour.md",sourceDirName:"Concepts",slug:"/Concepts/quick-tour",permalink:"/docs/es/19/Concepts/quick-tour",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fquick-tour.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"quick-tour",title:"Un recorrido r\xe1pido",sidebar_label:"Un recorrido r\xe1pido"},sidebar:"docs",previous:{title:"Acerca del lenguaje 4D",permalink:"/docs/es/19/Concepts/about"},next:{title:"Tipos de datos",permalink:"/docs/es/19/Concepts/data-types"}},i={},c=[{value:"Asignar los valores",id:"asignar-los-valores",level:2},{value:"Variables",id:"variables",level:2},{value:"Comandos",id:"comandos",level:2},{value:"Constantes",id:"constantes",level:2},{value:"M\xe9todos",id:"m\xe9todos",level:2},{value:"Tipos de datos",id:"tipos-de-datos",level:2},{value:"Objetos y colecciones",id:"objetos-y-colecciones",level:2},{value:"Clases",id:"clases",level:2},{value:"Operadores",id:"operadores",level:2},{value:"Expresiones",id:"expresiones",level:2},{value:"Tese de expresiones",id:"tese-de-expresiones",level:3},{value:"Expresiones asignables y no asignables",id:"expresiones-asignables-y-no-asignables",level:3},{value:"Punteros",id:"punteros",level:2},{value:"C\xf3digo en varias l\xedneas",id:"c\xf3digo-en-varias-l\xedneas",level:2},{value:"Comentarios",id:"comentarios",level:2},{value:"Comentarios de una l\xednea (<code>//comentario</code>)",id:"comentarios-de-una-l\xednea-comentario",level:4},{value:"Comentarios en l\xednea o multil\xednea (<code>/*comment*/</code>)",id:"comentarios-en-l\xednea-o-multil\xednea-comment",level:4},{value:"Secuencias de escape",id:"secuencias-de-escape",level:2}];function t(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",u:"u",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:'Utilizando el lenguaje 4D, la impresi\xf3n del tradicional mensaje "Hello, world!" en pantalla puede hacerse de varias maneras. Lo m\xe1s sencillo es probablemente escribir la siguiente l\xednea \xfanica en un m\xe9todo de proyecto:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'ALERT("Hello, World!")\n'})}),"\n",(0,s.jsx)(n.p,{children:'Este c\xf3digo mostrar\xe1 una caja de di\xe1logo de alerta est\xe1ndar de la plataforma con el mensaje "Hello, World!", que contiene un bot\xf3n de OK. Para ejecutar el c\xf3digo, basta con hacer clic en el bot\xf3n de ejecuci\xf3n en el editor de c\xf3digo:'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"hello world",src:a(576649).A+"",width:"613",height:"322"})}),"\n",(0,s.jsx)(n.p,{children:"O bien, podr\xeda adjuntar este c\xf3digo a un bot\xf3n de formulario y ejecutarlo, en cuyo caso al hacer clic en el bot\xf3n se mostrar\xeda la caja de di\xe1logo de alerta. En todo caso, \xa1acaba de ejecutar su primera l\xednea de c\xf3digo 4D!"}),"\n",(0,s.jsx)(n.h2,{id:"asignar-los-valores",children:"Asignar los valores"}),"\n",(0,s.jsx)(n.p,{children:"Los datos pueden introducirse y copiarse en variables, campos, elementos de arrays... Poner datos en una variable se llama asignar los datos a la variable y se hace con el operador de asignaci\xf3n (:=). El operador de asignaci\xf3n tambi\xe9n se utiliza para asignar datos a campos o elementos de arrays."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'$MyNumber:=3 //assigns 3 to MyNumber variable  \n[Products]Size:=$MyNumber //assigns MyNumber variable to [Products]Size field\narrDays{2}:="Tuesday" //assigns "Tuesday" string to the 2nd arrDays element\nMyVar:=Length("Acme") //assigns the result of the function (4) to MyVar\n$myDate:=!2018/01/21! //assigns a date literal\n$myHour:=?08:12:55? //assigns a time literal //asigna una fecha literal\n$myHour:=?08:12:55? //asigna una hora literal\n'})}),"\n",(0,s.jsx)(n.p,{children:"Debe distinguir el operador de asignaci\xf3n := de los dem\xe1s operadores. En lugar de combinar expresiones en una nueva expresi\xf3n, el operador de asignaci\xf3n copia el valor de la expresi\xf3n a la derecha del operador de asignaci\xf3n en la variable o campo a la izquierda del operador."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Importante:"})," no confunda el operador de asignaci\xf3n (:=) con el signo igual (=). Se ha elegido deliberadamente un operador de asignaci\xf3n diferente (y no =) para evitar los problemas y la confusi\xf3n que suelen producirse con == o === en otros lenguajes de programaci\xf3n. Estos errores son a menudo dif\xedciles de reconocer por el compilador y conducen a una soluci\xf3n de problemas que requiere mucho tiempo."]}),"\n",(0,s.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n",(0,s.jsxs)(n.p,{children:["El lenguaje 4D es estricto con los tipos de datos, aunque se permite cierta flexibilidad en muchos casos. Por ejemplo, para crear una variable de tipo fecha, puede escribir: Se crea una variable digitada utilizando la palabra clave ",(0,s.jsx)(n.code,{children:"var"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"var MyDate : Date \n"})}),"\n",(0,s.jsxs)(n.p,{children:["La palabra clave ",(0,s.jsx)(n.code,{children:"var"})," permite declarar variables objeto de un tipo de clase definido, por ejemplo:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"var myPerson : cs.Person \n//de la clase de usuario Person\n"})}),"\n",(0,s.jsx)(n.p,{children:"Aunque no se suele recomendar, se pueden declarar variables simplemente utiliz\xe1ndolas; no es necesario definirlas formalmente. Por ejemplo, si desea una variable que contenga la fecha actual m\xe1s 30 d\xedas, puede escribir:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"MyOtherDate:=Current date+30\n"})}),"\n",(0,s.jsxs)(n.p,{children:['La l\xednea de c\xf3digo dice "MyOtherDate obtiene la fecha actual m\xe1s 30 d\xedas" Esta l\xednea declara la variable, la asigna con el tipo de fecha (temporal) y un contenido. Esta l\xednea declara la variable, la asigna con el tipo de fecha (temporal) y un contenido. Una variable declarada por asignaci\xf3n se interpreta como sin tipo, es decir, puede ser asignada con otros tipos en otras l\xedneas y entonces cambia el tipo din\xe1micamente. Una variable digitada con ',(0,s.jsx)(n.code,{children:"var"})," no puede cambiar de tipo. Sin embargo, en ",(0,s.jsx)(n.a,{href:"/docs/es/19/Concepts/interpreted-compiled",children:"modo compilado"}),", el tipo nunca puede cambiarse, independientemente de c\xf3mo se haya declarado la variable."]}),"\n",(0,s.jsx)(n.h2,{id:"comandos",children:"Comandos"}),"\n",(0,s.jsx)(n.p,{children:"Los comandos 4D son m\xe9todos integrados para realizar una acci\xf3n. Los comandos se utilizan a menudo con par\xe1metros, que se pasan entre corchetes () y separados por punto y coma (;). Ejemplo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'COPY DOCUMENT("folder1\\\\name1";"folder2\\\\" ; "new")\n'})}),"\n",(0,s.jsx)(n.p,{children:"Algunos comandos se adjuntan a colecciones u objetos, en cuyo caso son funciones temporales que se utilizan con la notaci\xf3n de puntos. Por ejemplo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"$c:=New collection(1;2;3;4;5)\n$nc:=$c.slice(0;3) //$nc=[1,2,3]  \n\n$lastEmployee:=$employee.last()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Puede utilizar los plug-ins o los componentes 4D que a\xf1aden nuevos comandos a su entorno de desarrollo 4D."}),"\n",(0,s.jsxs)(n.p,{children:["Hay muchos plug-ins propuestos por la comunidad de usuarios de 4D o por desarrolladores terceros. Por ejemplo, utilizando el ",(0,s.jsx)(n.a,{href:"https://github.com/miyako/4d-plugin-pdf-pages",children:"4d-plugin-pdf-pages"})," en macOS:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"PDF REMOVE PAGE(path;page)\n"})}),"\n",(0,s.jsx)(n.p,{children:"4D SVG es un ejemplo de componente utilitario que aumenta las capacidades de su aplicaci\xf3n:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"//hacer un dibujo\nsvgRef:=SVG_New\nobjectRef:=SVG_New_arc(svgRef;100;100;90;90;180)\n"})}),"\n",(0,s.jsx)(n.p,{children:"4D SVG est\xe1 incluido en 4D."}),"\n",(0,s.jsx)(n.h2,{id:"constantes",children:"Constantes"}),"\n",(0,s.jsxs)(n.p,{children:["4D ofrece un conjunto extensivo de constantes predefinidas, cuyos valores son accesibles por nombre. Permiten escribir un c\xf3digo m\xe1s legible. Por ejemplo, ",(0,s.jsx)(n.code,{children:"Read Mode"})," es una constante (valor 2)."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'vRef:=Open document("PassFile";"TEXT";Read Mode) // abrir el documento en modo de s\xf3lo lectura\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Las constantes predefinidas aparecen ",(0,s.jsx)(n.u,{children:"subrayadas"})," por defecto en el editor de c\xf3digo 4D."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"m\xe9todos",children:"M\xe9todos"}),"\n",(0,s.jsxs)(n.p,{children:["4D ofrece un gran n\xfamero de m\xe9todos (o comandos) integrados, pero tambi\xe9n le permite crear sus propios ",(0,s.jsx)(n.strong,{children:"m\xe9todos de proyecto"}),". Los m\xe9todos de proyecto son m\xe9todos definidos por el usuario que contienen comandos, operadores y otras partes del lenguaje. Los m\xe9todos proyecto son m\xe9todos gen\xe9ricos, pero hay otros tipos de m\xe9todos: m\xe9todos objeto, m\xe9todos formulario, m\xe9todos tabla (Triggers) y m\xe9todos base."]}),"\n",(0,s.jsx)(n.p,{children:"Un m\xe9todo se compone de varias l\xedneas de instrucciones, cada una de las cuales consta de una l\xednea en el m\xe9todo. Una l\xednea de instrucci\xf3n realiza una acci\xf3n, y puede ser simple o compleja."}),"\n",(0,s.jsx)(n.p,{children:"Por ejemplo, la siguiente l\xednea es una sentencia que mostrar\xe1 una caja de di\xe1logo de confirmaci\xf3n:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'CONFIRM("\xbfRealmente quiere cerrar esta cuenta?"; "S\xed"; "No")\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Un m\xe9todo tambi\xe9n contiene pruebas y bucles que controlan el flujo de ejecuci\xf3n. 4D methods support ",(0,s.jsx)(n.code,{children:"If...Else...End if"})," and ",(0,s.jsx)(n.code,{children:"Case of... Else...End case"})," branching structures as well as looping structures: ",(0,s.jsx)(n.code,{children:"While...End while"}),", ",(0,s.jsx)(n.code,{children:"Repeat...Until"}),", ",(0,s.jsx)(n.code,{children:"For...End for"}),", and ",(0,s.jsx)(n.code,{children:"For each... End for each"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"El siguiente ejemplo recorre todos los caracteres del texto vtSomeText:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"For($vlChar;1;Length(vtSomeText))\n    //Haga algo con el caracter si es un TAB\n\n\n    If(Character code(vtSomeText[[$vlChar]])=Tab)\n        //...\n    End if\nEnd for\n"})}),"\n",(0,s.jsx)(n.p,{children:"Un m\xe9todo proyecto puede llamar a otro m\xe9todo proyecto con o sin par\xe1metros (argumentos). Los par\xe1metros se pasan al m\xe9todo entre par\xe9ntesis, a continuaci\xf3n del nombre del m\xe9todo. Cada par\xe1metro est\xe1 separado del siguiente por un punto y coma (;). Los par\xe1metros est\xe1n disponibles directamente en el m\xe9todo llamado si se han declarado. Un m\xe9todo puede devolver un \xfanico valor en un par\xe1metro, que debe ser declarado. Cuando se llama a un m\xe9todo, s\xf3lo hay que escribir su nombre:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'$myText:="hello"\n$myText:=Hacer_algo($myText) //Llamar al m\xe9todo Do_Something\nALERT($myText) //"HELLO"\n\n  //Aqu\xed el c\xf3digo del m\xe9todo Do_Something\n#DECLARE ($in : Text) -> $out : Text\n$out:=Uppercase($in)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"tipos-de-datos",children:"Tipos de datos"}),"\n",(0,s.jsx)(n.p,{children:"En el lenguaje, los distintos tipos de datos que se pueden manejar se denominan tipos de datos. Existen tipos de datos b\xe1sicos (cadena, num\xe9rico, fecha, hora, booleano, imagen, punteros, arrays), y tambi\xe9n tipos de datos compuestos (BLOBs, objetos, colecciones)."}),"\n",(0,s.jsx)(n.p,{children:"Tenga en cuenta que los datos de tipo cadena y num\xe9rico pueden asociarse a m\xe1s de un tipo de campo. Cuando se introducen datos en un campo, el lenguaje convierte autom\xe1ticamente los datos en el tipo correcto para el campo. Por ejemplo, si se utiliza un campo entero, sus datos se tratan autom\xe1ticamente como num\xe9ricos. En otras palabras, no tiene que preocuparse por mezclar tipos de campos similares al utilizar el lenguaje; \xe9ste los gestionar\xe1 por usted."}),"\n",(0,s.jsx)(n.p,{children:'Sin embargo, al utilizar el lenguaje es importante no mezclar los diferentes tipos de datos. Del mismo modo que no tiene sentido almacenar "ABC" en un campo de fecha, tampoco tiene sentido poner "ABC" en una variable utilizada para fechas. En la mayor\xeda de los casos, 4D es muy tolerante y tratar\xe1 de dar sentido a lo que est\xe1 haciendo. Por ejemplo, si a\xf1ade un n\xfamero a una fecha, 4D asumir\xe1 que quiere a\xf1adir ese n\xfamero de d\xedas a la fecha, pero si intenta a\xf1adir una cadena a una fecha, 4D le dir\xe1 que la operaci\xf3n no puede funcionar.'}),"\n",(0,s.jsx)(n.p,{children:'Hay casos en los que es necesario almacenar datos como un tipo y utilizarlos como otro. El lenguaje contiene un conjunto completo de comandos que permiten convertir de un tipo de datos a otro. Por ejemplo, es posible que necesite crear un n\xfamero de pieza que empiece por un n\xfamero y termine con caracteres como "abc". En este caso, podr\xeda escribir:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'[Products]Part Number:=String(Number)+"abc"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Si ",(0,s.jsx)(n.em,{children:"Number"})," es 17, then ",(0,s.jsx)(n.em,{children:"[Products]Part Number"})," obtendr\xe1 el valor \u201c17abc\u201d."]}),"\n",(0,s.jsxs)(n.p,{children:["Los tipos de datos est\xe1n completamente definidos en la secci\xf3n ",(0,s.jsx)(n.a,{href:"/docs/es/19/Concepts/data-types",children:"Tipos de datos"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"objetos-y-colecciones",children:"Objetos y colecciones"}),"\n",(0,s.jsx)(n.p,{children:"Puedes manejar objetos y colecciones del lenguaje 4D utilizando la notaci\xf3n objeto para obtener o definir sus valores. Por ejemplo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'employee.name:="Smith"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Tambi\xe9n puede utilizar una cadena entre corchetes, por ejemplo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'$vName:=employee["name"]\n'})}),"\n",(0,s.jsx)(n.p,{children:"Como el valor de una propiedad de objeto puede ser un objeto o una colecci\xf3n, la notaci\xf3n objeto acepta una secuencia de s\xedmbolos para acceder a subpropiedades, por ejemplo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"$vAge:=employee.children[2].age\n"})}),"\n",(0,s.jsx)(n.p,{children:"Tenga en cuenta que si el valor de la propiedad del objeto es un objeto que encapsula un m\xe9todo (una f\xf3rmula), debe a\xf1adir par\xe9ntesis () al nombre de la propiedad para ejecutar el m\xe9todo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'$f:=New object\n$f.message:=Formula(ALERT("Hello world!"))\n$f.message() //displays "Hello world!"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Para acceder a un elemento de la colecci\xf3n, debe pasar el n\xfamero del elemento entre corchetes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var myColl : Collection\nmyColl:=New collection("A";"B";1;2;Current time)\nmyColl[3]  //acceso al 4\xba elemento de la colecci\xf3n\n'})}),"\n",(0,s.jsx)(n.h2,{id:"clases",children:"Clases"}),"\n",(0,s.jsxs)(n.p,{children:["El lenguaje 4D soporta las clases de objetos. A\xf1ade un archivo ",(0,s.jsx)(n.code,{children:"myClass.4dm"}),' en la carpeta Project/Sources/Classes de un proyecto para crear una clase llamada "myClass".']}),"\n",(0,s.jsxs)(n.p,{children:["Para instanciar un objeto de la clase en un m\xe9todo, llame la clase usuario desde el ",(0,s.jsx)(n.em,{children:"class store"})," (",(0,s.jsx)(n.code,{children:"cs"}),") y utilice la funci\xf3n miembro ",(0,s.jsx)(n.code,{children:"new()"}),". Se pueden pasar par\xe1metros."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"// en un m\xe9todo 4D\n$o:=cs.myClass.new() \n"})}),"\n",(0,s.jsxs)(n.p,{children:["En el m\xe9todo clase ",(0,s.jsx)(n.code,{children:"myClass"}),", utilice la instrucci\xf3n ",(0,s.jsx)(n.code,{children:"Function<methodName>"})," para definir la funci\xf3n miembro clase ",(0,s.jsx)(n.em,{children:"methodName"}),". Una funci\xf3n miembro de clase puede recibir y devolver par\xe1metros como todo m\xe9todo, y utilizar ",(0,s.jsx)(n.code,{children:"This"})," como instancia del objeto."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'//en el archivo myClass.4dm\nFunction hello -> $welcome : Text\n  $welcome:="Hello "+This.who\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Para ejecutar una funci\xf3n miembro de clase, basta con utilizar el operador ",(0,s.jsx)(n.code,{children:"()"})," en la funci\xf3n miembro de la instancia del objeto."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'$o:=cs.myClass.new()\n$o.who:="World"\n$message:=$o.myClass.hello()  \n//$message: "Hello World"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Opcionalmente, utilice la palabra clave ",(0,s.jsx)(n.code,{children:"Class constructor"})," para declarar las propiedades del objeto."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'//en el archivo Rectangle.4dm\nClass constructor ($height: Integer; $width : Integer)\nThis.height:=$height\nThis.width:=$width \nThis.name:="Rectangle"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Una clase puede extender otra clase utilizando ",(0,s.jsx)(n.code,{children:"Class extends <ClassName>"}),". Las superclasses se pueden llamar con el comando ",(0,s.jsx)(n.code,{children:"Super"}),". Por ejemplo:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'//en el archivo Square.4dm\nClass extends rectangle\n\nClass constructor ($length : Integer)\n\n  // Llama al constructor de la clase padre con las longitudes   \n  // ofrecidas para el ancho y alto del rect\xe1ngulo\nSuper($length;$length)\n\nThis.name:="Square"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"operadores",children:"Operadores"}),"\n",(0,s.jsx)(n.p,{children:"Cuando se utiliza el lenguaje, es raro que se quiera simplemente un dato. Es m\xe1s probable que quiera hacer algo con esos datos. Estos c\xe1lculos se realizan con operadores. Los operadores, en general, toman dos datos y realizan una operaci\xf3n sobre ellos que da como resultado un nuevo dato. Usted ya conoce a la mayor\xeda de los operadores. You are already familiar with many operators. For example, 1 + 2 uses the addition (or plus sign) operator to add two numbers together, and the result is 3."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Operador"}),(0,s.jsx)(n.th,{children:"Operaci\xf3n"}),(0,s.jsx)(n.th,{children:"Ejemplo"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"+"}),(0,s.jsx)(n.td,{children:"Adici\xf3n"}),(0,s.jsx)(n.td,{children:"1 + 2 = 3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u2013"}),(0,s.jsx)(n.td,{children:"Resta"}),(0,s.jsx)(n.td,{children:"3 - 2 = 1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Multiplicaci\xf3n"}),(0,s.jsx)(n.td,{children:"2 * 3 = 6"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"/"}),(0,s.jsx)(n.td,{children:"Divisi\xf3n"}),(0,s.jsx)(n.td,{children:"6 / 2 = 3"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Los operadores num\xe9ricos son s\xf3lo un tipo de operador disponible. 4D soporta m\xfaltiples tipos de datos, como n\xfameros, texto, fechas e im\xe1genes, por lo que existen operadores que realizan operaciones con estos diferentes tipos de datos."}),"\n",(0,s.jsx)(n.p,{children:"Los mismos s\xedmbolos se utilizan a menudo para diferentes operaciones, dependiendo del tipo de datos. Por ejemplo, el signo m\xe1s (+) realiza diferentes operaciones con diferentes datos:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Tipos de datos"}),(0,s.jsx)(n.th,{children:"Operaci\xf3n"}),(0,s.jsx)(n.th,{children:"Ejemplo"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"Adici\xf3n"}),(0,s.jsx)(n.td,{children:"1 + 2 suma los n\xfameros y da como resultado 3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Concatenaci\xf3n"}),(0,s.jsx)(n.td,{children:'"Hola" + "a todos" concatena (une) las cadenas y da como resultado "Hola a todos"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Fecha y N\xfamero"}),(0,s.jsx)(n.td,{children:"Adici\xf3n de fecha"}),(0,s.jsx)(n.td,{children:"!1989-01-01! !1989-01-01! + 20 adds 20 days to the date January 1, 1989, and results in the date January 21, 1989"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"expresiones",children:"Expresiones"}),"\n",(0,s.jsx)(n.p,{children:"En pocas palabras, las expresiones devuelven un valor. De hecho, al utilizar el lenguaje 4D, se utilizan expresiones todo el tiempo y se tiende a pensar en ellas s\xf3lo en t\xe9rminos del valor que representan. Las expresiones tambi\xe9n se llaman f\xf3rmulas."}),"\n",(0,s.jsx)(n.p,{children:"Las expresiones se componen de casi todas las dem\xe1s partes del lenguaje: comandos, operadores, variables, campos, propiedades de objetos y elementos de colecci\xf3n. Se utilizan expresiones para escribir l\xedneas de c\xf3digo, que a su vez se utilizan para construir m\xe9todos. El lenguaje utiliza expresiones siempre que necesita un dato."}),"\n",(0,s.jsx)(n.p,{children:'Las expresiones son rara vez "aut\xf3nomas." Hay varios lugares en 4D donde una expresi\xf3n puede ser utilizada por s\xed misma. Incluye:'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Editor de f\xf3rmulas (apply formula, query with formula, order by formula)"}),"\n",(0,s.jsxs)(n.li,{children:["El comando ",(0,s.jsx)(n.code,{children:"EXECUTE FORMULA"})]}),"\n",(0,s.jsx)(n.li,{children:"La lista de propiedades, donde se puede utilizar una expresi\xf3n como fuente de datos para la mayor\xeda de los widgets"}),"\n",(0,s.jsx)(n.li,{children:"Depurador donde se puede comprobar el valor de las expresiones"}),"\n",(0,s.jsx)(n.li,{children:"En el editor de informes r\xe1pidos como f\xf3rmula para una columna"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"tese-de-expresiones",children:"Tese de expresiones"}),"\n",(0,s.jsx)(n.p,{children:"Se hace referencia a una expresi\xf3n por el tipo de datos que devuelve. Hay varios tipos de expresiones. En la siguiente tabla se dan ejemplos de cada tipo de expresi\xf3n."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Expression"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u201cHello\u201d"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"La palabra Hola es una constante cadena, indicada por las comillas dobles."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u201cHello \u201d + \u201cthere\u201d"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:'Dos cadenas, "Hola" y "a todos", se suman (concatenan) con el operador de concatenaci\xf3n de cadenas (+). Se devuelve la cadena "Hola".'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u201cSr. \u201d + [People]Name"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:'Se concatenan dos cadenas: la cadena "Sr." y el valor actual del campo Nombre de la tabla Personas. Si el campo contiene "Smith", la expresi\xf3n devuelve "Mr. Smith".'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:'Uppercase("smith")'}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsxs)(n.td,{children:["Esta expresi\xf3n utiliza ",(0,s.jsx)(n.code,{children:"Uppercase"}),', un comando del lenguaje, para convertir la cadena "smith" a may\xfasculas. Devuelve \u201cSMITH\u201d.']})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"Se trata de una constante num\xe9rica, 4."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"4 * 2"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"Dos n\xfameros, 4 y 2, se multiplican utilizando el operador de multiplicaci\xf3n (*). El resultado es el n\xfamero 8."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"myButton"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"Es una variable asociada a un bot\xf3n. Devuelve el valor actual del bot\xf3n: 1 si se ha hecho clic, 0 si no."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"!1997-01-25!"}),(0,s.jsx)(n.td,{children:"Fecha"}),(0,s.jsx)(n.td,{children:"Esta es una constante fecha para la fecha 1/25/97 (25 de enero de 1997)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Current date+ 30"}),(0,s.jsx)(n.td,{children:"Fecha"}),(0,s.jsxs)(n.td,{children:["Esta es una expresi\xf3n de tipo Fecha que utiliza el comando ",(0,s.jsx)(n.code,{children:"Current date"})," para obtener la fecha de hoy. A\xf1ade 30 d\xedas a la fecha de hoy y devuelve la nueva fecha."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"?8:05:30?"}),(0,s.jsx)(n.td,{children:"Hora"}),(0,s.jsx)(n.td,{children:"Es una constante hora que representa 8 horas, 5 minutos y 30 segundos."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"?2:03:04? + ?1:02:03? ?2:03:04? + ?1:02:03? ?2:03:04? + ?1:02:03? ?2:03:04? + ?1:02:03? + ?1:02:03?"}),(0,s.jsx)(n.td,{children:"Hora"}),(0,s.jsx)(n.td,{children:"Esta expresi\xf3n suma dos horas y devuelve la hora 3:05:07."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"True"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"Este comando devuelve el valor booleano TRUE."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"10 # 20"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:'Se trata de una comparaci\xf3n l\xf3gica entre dos n\xfameros. El s\xedmbolo n\xfamero (#) significa "es diferente de". Como 10 "es diferente de" 20, la expresi\xf3n devuelve TRUE.'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u201cABC\u201d = \u201cXYZ\u201d"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"Se trata de una comparaci\xf3n l\xf3gica entre dos cadenas. Son diferentes, por lo que la expresi\xf3n devuelve FALSE."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"My Picture + 50"}),(0,s.jsx)(n.td,{children:"Picture"}),(0,s.jsx)(n.td,{children:"Esta expresi\xf3n toma la imagen en My Picture, la mueve 50 p\xedxeles a la derecha y devuelve la imagen resultante."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"->[People]Name"}),(0,s.jsx)(n.td,{children:"Puntero"}),(0,s.jsx)(n.td,{children:"Esta expresi\xf3n devuelve un puntero al campo llamado [People]Name."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Table (1)"}),(0,s.jsx)(n.td,{children:"Puntero"}),(0,s.jsx)(n.td,{children:"Este es un comando que devuelve un puntero a la primera tabla."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"JSON Parse (MyString)"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"Este es un comando que devuelve MyString como un objeto (si el formato es el adecuado)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"JSON Parse (MyJSONArray)"}),(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsx)(n.td,{children:"Este es un comando que devuelve MyJSONArray en forma de colecci\xf3n (si el formato es el adecuado)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form.pageNumber"}),(0,s.jsx)(n.td,{children:"Propiedad objeto"}),(0,s.jsx)(n.td,{children:"Una propiedad objeto es una expresi\xf3n que puede ser de todo tipo soportado"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Col[5]"}),(0,s.jsx)(n.td,{children:"Elementos de colecci\xf3n"}),(0,s.jsx)(n.td,{children:"Un elemento de colecci\xf3n es una expresi\xf3n que puede ser de todo tipo soportado"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$entitySel[0]"}),(0,s.jsx)(n.td,{children:"Entity"}),(0,s.jsxs)(n.td,{children:["Un elemento de una selecci\xf3n de entidades ORDA es una expresi\xf3n de tipo entidad. Este tipo de expresi\xf3n es ",(0,s.jsx)(n.strong,{children:"no asignable"})]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"expresiones-asignables-y-no-asignables",children:"Expresiones asignables y no asignables"}),"\n",(0,s.jsxs)(n.p,{children:['Una expresi\xf3n puede ser simplemente una constante literal, como el n\xfamero 4 o la cadena "Hello", o una variable como ',(0,s.jsx)(n.code,{children:"$myButton"}),". Tambi\xe9n puede utilizar los operadores. Por ejemplo, 4 + 2 es una expresi\xf3n que utiliza el operador de adici\xf3n para sumar dos n\xfameros y devolver el resultado 6. En todos los casos, estas expresiones son ",(0,s.jsx)(n.strong,{children:"no asignables"}),", lo que significa que no se les puede asignar un valor. En 4D, las expresiones pueden ser ",(0,s.jsx)(n.strong,{children:"asignables"}),". Una expresi\xf3n es asignable cuando puede utilizarse a la izquierda del operador de asignaci\xf3n. Por ejemplo:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'//$myVar variable is assignable, you can write:  \n$myVar:="Hello" //assign "Hello" to myVar\n//Form.pageNumber is assignable, you can write: Form.pageNumber:=10 //assign 10 to Form.pageNumber\n//Form.pageTotal-Form.pageNumber is not assignable: Form.pageTotal- Form.pageNumber:=10 //error, non-assignable\n'})}),"\n",(0,s.jsxs)(n.p,{children:["En general, las expresiones que utilizan un operador no son asignables. Por ejemplo, ",(0,s.jsx)(n.code,{children:'[Person]FirstName+" "+[Person]LastName'})," no es asignable."]}),"\n",(0,s.jsx)(n.h2,{id:"punteros",children:"Punteros"}),"\n",(0,s.jsx)(n.p,{children:"El lenguaje 4D ofrece una implementaci\xf3n avanzada de punteros, que permite escribir c\xf3digo poderoso y modular. Puede utilizar punteros para referenciar tablas, campos, variables, arrays y elementos de arrays."}),"\n",(0,s.jsx)(n.p,{children:'Un puntero a un elemento se crea a\xf1adiendo un s\xedmbolo "->" antes del nombre del elemento, y se puede desreferenciar a\xf1adiendo el s\xedmbolo "->" despu\xe9s del nombre del puntero.'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'MyVar:="Hello"\nMyPointer:=->MyVar\nALERT(MyPointer->)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"c\xf3digo-en-varias-l\xedneas",children:"C\xf3digo en varias l\xedneas"}),"\n",(0,s.jsxs)(n.p,{children:["Puede escribir una \xfanica instrucci\xf3n en varias l\xedneas terminando cada l\xednea de la instrucci\xf3n con un caracter barra invertida final ",(0,s.jsx)(n.code,{children:"\\"}),". El lenguaje 4D considerar\xe1 todas las l\xedneas a la vez. Por ejemplo, ambas sentencias son equivalentes:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'$str:=String("hello world!")\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'$str:=String("hello"+\\\n" world"+\\\n+"!")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"comentarios",children:"Comentarios"}),"\n",(0,s.jsx)(n.p,{children:"Los comentarios son l\xedneas de instrucciones inactivas. Estas l\xedneas no son interpretadas por el programa 4D y no se ejecutan cuando el c\xf3digo se llama."}),"\n",(0,s.jsx)(n.p,{children:"Hay dos maneras de crear comentarios:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"//"})," para crear una l\xednea de comentario"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/*...*/"})," para los bloques de comentarios en l\xednea o multil\xednea."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Ambos estilos de comentarios pueden utilizarse simult\xe1neamente."}),"\n",(0,s.jsxs)(n.h4,{id:"comentarios-de-una-l\xednea-comentario",children:["Comentarios de una l\xednea (",(0,s.jsx)(n.code,{children:"//comentario"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:["Inserte ",(0,s.jsx)(n.code,{children:"//"})," al principio de una l\xednea o despu\xe9s de una instrucci\xf3n para a\xf1adir una l\xednea de comentario. Ejemplo:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"//Este es un comentario\nFor($vCounter;1;100) //Bucle inicial\n  //comentario\n  //comentario\n  //comentario\nEnd for\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"comentarios-en-l\xednea-o-multil\xednea-comment",children:["Comentarios en l\xednea o multil\xednea (",(0,s.jsx)(n.code,{children:"/*comment*/"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:["Rodea el contenido con los caracteres ",(0,s.jsx)(n.code,{children:"/*"})," ... ",(0,s.jsx)(n.code,{children:"*/"})," para crear comentarios en l\xednea o bloques de comentarios multil\xednea. Tanto los bloques de comentarios en l\xednea como los multil\xednea comienzan con ",(0,s.jsx)(n.code,{children:"/*"})," y terminan con ",(0,s.jsx)(n.code,{children:"*/"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Las ",(0,s.jsx)(n.strong,{children:"l\xedneas de comentarios en l\xednea"})," se pueden insertar en cualquier parte del c\xf3digo. Ejemplo:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"For /* l\xednea de comentario */ ($vCounter;1;100)\n    ...\nEnd for\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Los ",(0,s.jsx)(n.strong,{children:"bloques de comentarios multil\xedneas"})," permiten comentar un n\xfamero ilimitado de l\xedneas. Los bloques de comentarios pueden anidarse (\xfatil desde que el editor de c\xf3digo 4D soporta los bloques contra\xeddos). Ejemplo:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"For ($vCounter;1;100)\n/*\ncomentarios  \n    /* \n    otros comentarios\n    */\n*/\n...\nEnd for\n"})}),"\n",(0,s.jsx)(n.h2,{id:"secuencias-de-escape",children:"Secuencias de escape"}),"\n",(0,s.jsx)(n.p,{children:'El lenguaje 4D permite utilizar secuencias de escape (tambi\xe9n llamadas caracteres de escape). Una secuencia de escape es una secuencia de caracteres que puede utilizarse para sustituir a un caracter "especial".'}),"\n",(0,s.jsxs)(n.p,{children:["La secuencia consiste en una barra invertida ",(0,s.jsx)(n.code,{children:"\\"}),", seguida de un caracter. Por ejemplo, ",(0,s.jsx)(n.code,{children:"\\t"})," es una secuencia de escape para el caracter ",(0,s.jsx)(n.strong,{children:"Tab"}),". Las secuencias de escape facilitan la introducci\xf3n de caracteres especiales: el ejemplo anterior (",(0,s.jsx)(n.code,{children:"\\t"}),') sustituye a la entrada "Caracter(Tab)".']}),"\n",(0,s.jsx)(n.p,{children:"En 4D, se pueden utilizar las siguientes secuencias de escape:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Secuencias de escape"}),(0,s.jsx)(n.th,{children:"Car\xe1cter reemplazado"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"\\n"})}),(0,s.jsx)(n.td,{children:"LF (Retorno l\xednea)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"\\t"})}),(0,s.jsx)(n.td,{children:"HT (Tabulaci\xf3n)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"\\r"})}),(0,s.jsx)(n.td,{children:"CR (Retorno carro)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"``\\`"}),(0,s.jsx)(n.td,{children:"``` (barra inversa)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'\\"'})}),(0,s.jsx)(n.td,{children:'" (Comillas)'})]})]})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Es posible utilizar may\xfasculas o min\xfasculas en las secuencias de escape."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["En el siguiente ejemplo, el caracter ",(0,s.jsx)(n.strong,{children:"Retorno de carro"})," (secuencia de escape ",(0,s.jsx)(n.code,{children:"\\r"}),") se inserta en una sentencia para obtener un di\xe1logo:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'ALERT("The operation has been completed successfully.\\rYou may now disconnect.")'})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},221020:(e,n,a)=>{var s=a(296540),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,a){var s,r={},c=null,t=null;for(s in void 0!==a&&(c=""+a),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(t=n.ref),n)d.call(n,s)&&!i.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:o,type:e,key:c,ref:t,props:r,_owner:l.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},474848:(e,n,a)=>{e.exports=a(221020)},576649:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/helloworld-3e6e70b5b735baa9c97019730d06bfdd.png"},28453:(e,n,a)=>{a.d(n,{R:()=>d,x:()=>l});var s=a(296540);const o={},r=s.createContext(o);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);