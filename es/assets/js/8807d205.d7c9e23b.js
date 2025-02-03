"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90286"],{887040:function(e,n,a){a.r(n),a.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>r,assets:()=>t,toc:()=>d,contentTitle:()=>i});var r=JSON.parse('{"id":"Concepts/pointer","title":"Puntero","description":"Una variable o expresi\xf3n puntero es una referencia a otra variable (incluyendo arrays y elementos de arrays), tabla, campo u objeto. No hay ning\xfan campo de tipo Puntero.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/Concepts/dt_pointer.md","sourceDirName":"Concepts","slug":"/Concepts/pointer","permalink":"/docs/es/20-R7/Concepts/pointer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_pointer.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"pointer","title":"Puntero"},"sidebar":"docs","previous":{"title":"Picture","permalink":"/docs/es/20-R7/Concepts/picture"},"next":{"title":"String","permalink":"/docs/es/20-R7/Concepts/string"}}'),o=a("785893"),l=a("250065");let s={id:"pointer",title:"Puntero"},i=void 0,t={},d=[{value:"Utilizar punteros: ejemplo b\xe1sico",id:"utilizar-punteros-ejemplo-b\xe1sico",level:2},{value:"Operadores en punteros",id:"operadores-en-punteros",level:2},{value:"Principales usos",id:"principales-usos",level:2},{value:"Punteros a tablas",id:"punteros-a-tablas",level:3},{value:"Punteros a campos",id:"punteros-a-campos",level:3},{value:"Punteros a variables locales",id:"punteros-a-variables-locales",level:3},{value:"Punteros a elementos del array",id:"punteros-a-elementos-del-array",level:3},{value:"Punteros a arrays",id:"punteros-a-arrays",level:3},{value:"Punteros como par\xe1metros a los m\xe9todos",id:"punteros-como-par\xe1metros-a-los-m\xe9todos",level:3},{value:"Punteros a punteros",id:"punteros-a-punteros",level:3}];function c(e){let n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Una variable o expresi\xf3n puntero es una referencia a otra variable (incluyendo arrays y elementos de arrays), tabla, campo u objeto. No hay ning\xfan campo de tipo Puntero."}),"\n",(0,o.jsx)(n.p,{children:"Los punteros ofrecen una forma avanzada (en programaci\xf3n) de referirse a los datos. Cuando se utiliza el lenguaje, se accede a varios objetos -en particular, tablas, campos, variables, objetos y arrays- simplemente utilizando sus nombres. Sin embargo, con frecuencia es \xfatil referirse a estos elementos y acceder a ellos sin conocer sus nombres. Esto es lo que los punteros le permiten hacer."}),"\n",(0,o.jsx)(n.p,{children:'El concepto de los punteros no es tan raro en la vida cotidiana. A menudo se hace referencia a algo sin conocer su identidad exacta. Por ejemplo, puede decirle a un amigo: "Vamos a dar una vuelta en tu coche" en lugar de "Vamos a dar una vuelta en el coche con matr\xedcula 123ABD." En este caso, se refiere al coche con matr\xedcula 123ABD utilizando la frase " tu coche." La frase "coche con matr\xedcula 123ABD" es como el nombre de un objeto, y usar la frase "tu coche" es como usar un puntero para referenciar el objeto.'}),"\n",(0,o.jsx)(n.p,{children:'Poder referirse a algo sin conocer su identidad exacta es muy \xfatil. De hecho, su amigo podr\xeda comprarse un coche nuevo, y la frase " tu coche" seguir\xeda siendo correcta: seguir\xeda siendo un coche y usted podr\xeda seguir dando un paseo en \xe9l. Los punteros funcionan de la misma manera. Por ejemplo, un puntero podr\xeda referirse en un momento dado a un campo num\xe9rico llamado Edad, y m\xe1s tarde referirse a una variable num\xe9rica llamada Vejez. En ambos casos, el puntero hace referencia a datos num\xe9ricos que podr\xedan utilizarse en un c\xe1lculo.'}),"\n",(0,o.jsx)(n.p,{children:"Puede utilizar punteros para referenciar tablas, campos, variables, arrays, elementos de arrays y objetos. La siguiente tabla ofrece un ejemplo de cada tipo de datos:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{children:"Referenciaci\xf3n"}),(0,o.jsx)(n.th,{children:"Uso"}),(0,o.jsx)(n.th,{children:"Asignaci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Tabla"}),(0,o.jsx)(n.td,{children:"vpTable:=->[Table]"}),(0,o.jsx)(n.td,{children:"DEFAULT TABLE(vpTable->)"}),(0,o.jsx)(n.td,{children:"n/a"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Campo"}),(0,o.jsx)(n.td,{children:"vpField:=->[Table]Field"}),(0,o.jsx)(n.td,{children:"ALERT(vpField->)"}),(0,o.jsx)(n.td,{children:'vpField->:="John"'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Variable"}),(0,o.jsx)(n.td,{children:"vpVar:=->Variable"}),(0,o.jsx)(n.td,{children:"ALERT(vpVar->)"}),(0,o.jsx)(n.td,{children:'vpVar->:="John"'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Array"}),(0,o.jsx)(n.td,{children:"vpArr:=->Array"}),(0,o.jsx)(n.td,{children:"SORT ARRAY(vpArr->;>)"}),(0,o.jsx)(n.td,{children:"COPY ARRAY (Arr;vpArr->)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"array"}),(0,o.jsx)(n.td,{children:"vpElem:=->Array{1}"}),(0,o.jsx)(n.td,{children:"ALERT (vpElem->)"}),(0,o.jsx)(n.td,{children:'vpElem->:="John"'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"vpObj:=->myObject"}),(0,o.jsx)(n.td,{children:"ALERT (vpObj->myProp)"}),(0,o.jsx)(n.td,{children:'vpObj->myProp:="John"'})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"utilizar-punteros-ejemplo-b\xe1sico",children:"Utilizar punteros: ejemplo b\xe1sico"}),"\n",(0,o.jsx)(n.p,{children:"Lo m\xe1s f\xe1cil es explicar el uso de los punteros mediante un ejemplo. Este ejemplo muestra c\xf3mo acceder a una variable a trav\xe9s de un puntero. Comenzamos creando una variable:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'$MyVar:="Hello"\n'})}),"\n",(0,o.jsx)(n.p,{children:"$MyVar es ahora una variable que contiene la cadena \u201CHello.\u201D Ahora podemos crear un puntero a $MyVar:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"var $MyPointer : Pointer\n$MyPointer:=->$MyVar\n"})}),"\n",(0,o.jsx)(n.p,{children:'El s\xedmbolo -> significa "obtener un puntero a." Este s\xedmbolo est\xe1 formado por un gui\xf3n seguido de un signo "mayor que". En este caso, obtiene el puntero que hace referencia o "apunta" a $MyVar. Este puntero se asigna a MyPointer con el operador de asignaci\xf3n.'}),"\n",(0,o.jsx)(n.p,{children:'$MyPointer es ahora una variable que contiene un puntero a $MyVar. $MyPointer no contiene " Hello ", que es el valor en $MyVar, pero se puede utilizar $MyPointer para obtener este valor. La siguiente expresi\xf3n devuelve el valor de $MyVar:'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"$MyPointer->\n"})}),"\n",(0,o.jsx)(n.p,{children:'En este caso, devuelve la cadena "Hello". El s\xedmbolo ->, cuando sigue a un puntero, hace referencia al objeto apuntado. Esto se llama desreferenciaci\xf3n.'}),"\n",(0,o.jsx)(n.p,{children:"Es importante entender que se puede utilizar un puntero seguido del s\xedmbolo -> en cualquier lugar donde se podr\xeda haber utilizado el objeto al que apunta el puntero. Esto significa que podr\xeda utilizar la expresi\xf3n $MyPointer-> en cualquier lugar en el que pudiera utilizar la variable original $MyVar. Por ejemplo, la siguiente l\xednea muestra un cuadro de alerta con la palabra Hello:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"ALERT($MyPointer->)\n"})}),"\n",(0,o.jsx)(n.p,{children:'Tambi\xe9n puede utilizar $MyPointer para cambiar los datos en $MyVar. Por ejemplo, la siguiente instrucci\xf3n almacena la cadena "Goodbye" en la variable $MyVar:'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'$MyPointer->:="Goodbye"\n'})}),"\n",(0,o.jsx)(n.p,{children:"Si examina los dos usos de la expresi\xf3n $MyPointer->, ver\xe1 que act\xfaa igual que si hubiera utilizado $MyVar en su lugar. En resumen, las dos l\xedneas siguientes realizan la misma acci\xf3n: ambas muestran un cuadro de alerta con el valor actual de la variable $MyVar:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"ALERT($MyPointer->)\nALERT($MyVar)\n"})}),"\n",(0,o.jsx)(n.p,{children:'Las siguientes dos l\xedneas realizan la misma acci\xf3n - ambas asignan la cadena "Goodbye" a $MyVar:'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'$MyPointer->:="Goodbye"\n$MyVar:="Goodbye"\n'})}),"\n",(0,o.jsx)(n.h2,{id:"operadores-en-punteros",children:"Operadores en punteros"}),"\n",(0,o.jsx)(n.p,{children:"Con:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"  ` vPtrA y vPtrB apuntan al mismo objeto\n vPtrA:=->anObject\n vPtrB:=->anObject\n  ` vPtrC apunta a otro objeto\n vPtrC:=-anotherObject\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Operaci\xf3n"}),(0,o.jsx)(n.th,{children:"Sintaxis"}),(0,o.jsx)(n.th,{children:"Devuelve"}),(0,o.jsx)(n.th,{children:"Expression"}),(0,o.jsx)(n.th,{children:"Valor"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Igual"}),(0,o.jsx)(n.td,{children:"Puntero = Puntero"}),(0,o.jsx)(n.td,{children:"Boolean"}),(0,o.jsx)(n.td,{children:"vPtrA = vPtrB"}),(0,o.jsx)(n.td,{children:"True"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{children:"vPtrA = vPtrC"}),(0,o.jsx)(n.td,{children:"False"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Desigualdad"}),(0,o.jsx)(n.td,{children:"Puntero # Puntero"}),(0,o.jsx)(n.td,{children:"Boolean"}),(0,o.jsx)(n.td,{children:"vPtrA # vPtrC"}),(0,o.jsx)(n.td,{children:"True"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{children:"vPtrA # vPtrB"}),(0,o.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,o.jsxs)(n.admonition,{title:"Punteros Null",type:"warning",children:[(0,o.jsx)(n.p,{children:'Trying to assign or to read a null pointer (aka "nil") will produce an error at runtime. Por ejemplo:'}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"var $p : Pointer // non initialized pointer (Nil value)\n$v:=$p-> // error\n$p->:=$v // error\n"})}),(0,o.jsx)(n.p,{children:"To prevent such errors, you can write:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"If ($p#Null)\n  $p->:=$v\nEnd if\n"})})]}),"\n",(0,o.jsx)(n.h2,{id:"principales-usos",children:"Principales usos"}),"\n",(0,o.jsx)(n.h3,{id:"punteros-a-tablas",children:"Punteros a tablas"}),"\n",(0,o.jsx)(n.p,{children:"En cualquier lugar en el que el lenguaje espere ver una tabla, se puede utilizar un puntero desreferenciado a la tabla. Se crea un puntero a una tabla utilizando una l\xednea de instrucci\xf3n como esta:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"$TablePtr:=->[anyTable]\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Tambi\xe9n puede obtener un puntero a una tabla utilizando el comando ",(0,o.jsx)(n.code,{children:"Table"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"$TablePtr:=Table(20)\n"})}),"\n",(0,o.jsx)(n.p,{children:"Puedes utilizar el puntero desreferenciado en los comandos, as\xed:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"DEFAULT TABLE($TablePtr->)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"punteros-a-campos",children:"Punteros a campos"}),"\n",(0,o.jsx)(n.p,{children:"En cualquier lugar en el que el lenguaje espere ver un campo, se puede utilizar un puntero desreferenciado para referenciar el campo. Se crea un puntero a un campo utilizando una l\xednea de instrucci\xf3n como esta:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"$FieldPtr:=->[aTable]ThisField\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Tambi\xe9n puede obtener un puntero a un campo utilizando el comando ",(0,o.jsx)(n.code,{children:"Campo"}),", por ejemplo:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"$FieldPtr:=Field(1;2)\n"})}),"\n",(0,o.jsx)(n.p,{children:"Puedes utilizar el puntero desreferenciado en los comandos, as\xed:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'OBJECT SET FONT($FieldPtr->;"Arial")\n'})}),"\n",(0,o.jsx)(n.h3,{id:"punteros-a-variables-locales",children:"Punteros a variables locales"}),"\n",(0,o.jsx)(n.p,{children:"Cuando se utilizan punteros a variables de proceso o locales, hay que asegurarse de que la variable a la que se apunta ya est\xe1 definida cuando se utilice el puntero. Tenga en cuenta que las variables locales se borran cuando el m\xe9todo que las cre\xf3 ha terminado su ejecuci\xf3n y las variables de proceso se borran al final del proceso que las cre\xf3. Cuando un puntero llama a una variable que ya no existe, esto provoca un error de sintaxis en modo interpretado (variable no definida) pero puede generar un error m\xe1s grave en modo compilado."}),"\n",(0,o.jsxs)(n.p,{children:["Los punteros a variables locales permiten guardar las variables del proceso en muchos casos. Los punteros a variables locales s\xf3lo pueden utilizarse dentro del mismo proceso. En el depurador, cuando se muestra un puntero a una variable local que ha sido declarada en otro m\xe9todo, el nombre del m\xe9todo original se indica entre par\xe9ntesis, despu\xe9s del puntero. For example, if you write in ",(0,o.jsx)(n.em,{children:"Method1"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' $MyVar:="Hello world"\n Method2(->$MyVar)\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"Method2"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"#DECLARE($param : Pointer)\n...\n"})}),"\n",(0,o.jsx)(n.p,{children:"The debugger will display $param as follows:"}),"\n\n\n\n\n\n\n\n",(0,o.jsx)(n.table,{children:(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"$param"}),(0,o.jsx)(n.th,{children:"->$MyVar (Method1)"})]})})}),"\n",(0,o.jsx)(n.p,{children:"You can expand $param and its value will be:"}),"\n\n\n\n\n\n\n\n",(0,o.jsx)(n.table,{children:(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"$MyVar"}),(0,o.jsx)(n.th,{children:'"Hello world"'})]})})}),"\n",(0,o.jsx)(n.h3,{id:"punteros-a-elementos-del-array",children:"Punteros a elementos del array"}),"\n",(0,o.jsx)(n.p,{children:"Puede crear un puntero a un elemento del array. Por ejemplo, las siguientes l\xedneas crean un array y asignan un puntero al primer elemento del array a una variable llamada $ElemPtr:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"ARRAY REAL($anArray;10) //Crear un array\n$ElemPtr:=->$anArray{1} //Crear un puntero al elemento de array\n"})}),"\n",(0,o.jsx)(n.p,{children:"Puede utilizar el puntero desreferenciado para asignar un valor al elemento, as\xed:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"$ElemPtr->:=8\n"})}),"\n",(0,o.jsx)(n.h3,{id:"punteros-a-arrays",children:"Punteros a arrays"}),"\n",(0,o.jsx)(n.p,{children:"Puede crear un puntero a un array. Por ejemplo, las siguientes l\xedneas crean un array y asignan un puntero al array a una variable llamada $ArrPtr:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"ARRAY REAL($anArray;10) //Crear un array\n$ArrPtr:=->$anArray //Crear un puntero al array\n"})}),"\n",(0,o.jsx)(n.p,{children:"Es importante entender que el puntero apunta al array; no apunta a un elemento del array. Por ejemplo, puede utilizar el puntero desreferenciado de las l\xedneas anteriores de esta manera:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"SORT ARRAY($ArrPtr->;>) //Ordenar el array\n"})}),"\n",(0,o.jsx)(n.p,{children:"Si debe referirse al cuarto elemento del array utilizando el puntero, haga lo siguiente:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:" ArrPtr->{4}:=84\n"})}),"\n",(0,o.jsx)(n.h3,{id:"punteros-como-par\xe1metros-a-los-m\xe9todos",children:"Punteros como par\xe1metros a los m\xe9todos"}),"\n",(0,o.jsxs)(n.p,{children:["Puede pasar un puntero como par\xe1metro de un m\xe9todo. Dentro del m\xe9todo, puede modificar el objeto referenciado por el puntero. Por ejemplo, el siguiente m\xe9todo, ",(0,o.jsx)(n.code,{children:"takeTwo"}),", toma dos par\xe1metros que son punteros. Cambia el objeto referenciado por el primer par\xe1metro a caracteres en may\xfasculas, y el objeto referenciado por el segundo par\xe1metro a caracteres en min\xfasculas. Este es el m\xe9todo del proyecto:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"  //takeTwo project method\n  //$changeUp \u2013 Pointer to a string field or variable. Change this to uppercase.\n  //$changeLow \u2013 Pointer to a string field or variable. Change this to lowercase.\n #DECLARE($changeUp : Pointer ; $changeLow : Pointer)\n $changeUp->:=Uppercase($changeUp->)\n $changeLow->:=Lowercase($changeLow->)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["La siguiente l\xednea utiliza el m\xe9todo ",(0,o.jsx)(n.code,{children:"takeTwo"})," para cambiar un campo a may\xfasculas y para cambiar una variable a min\xfasculas:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"takeTwo(->[myTable]myField;->$MyVar)\n"})}),"\n",(0,o.jsx)(n.p,{children:'Si el campo [myTable]myField conten\xeda la cadena "jones", se cambiar\xeda por la cadena "JONES". Si la variable $MyVar conten\xeda la cadena "HELLO", se cambiar\xeda por la cadena "hello".'}),"\n",(0,o.jsx)(n.p,{children:"En el m\xe9todo takeTwo, y de hecho, siempre que se utilicen punteros, es importante que el tipo de datos del objeto al que se hace referencia sea correcto. En el ejemplo anterior, los punteros deben apuntar a algo que contenga una cadena o texto."}),"\n",(0,o.jsx)(n.h3,{id:"punteros-a-punteros",children:"Punteros a punteros"}),"\n",(0,o.jsx)(n.p,{children:"Si realmente le gusta complicar las cosas, puede utilizar punteros para referenciar otros punteros. Considere este ejemplo:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' $MyVar:="Hello"\n $PointerOne:=->$MyVar\n $PointerTwo:=->$PointerOne\n ($PointerTwo->)->:="Goodbye"\n ALERT(($PointerTwo->)->)\n'})}),"\n",(0,o.jsx)(n.p,{children:'Muestra un cuadro de alerta con la palabra "Goodbye".'}),"\n",(0,o.jsx)(n.p,{children:"A continuaci\xf3n se explica cada l\xednea del ejemplo:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'$MyVar:="Hello"\n--\x3e Esta l\xednea pone la cadena "Hello" en la variable $MyVar.'}),"\n",(0,o.jsx)(n.li,{children:"$PointerOne:=-$MyVar\n--\x3e $PointerOne ahora contiene un puntero a $MyVar."}),"\n",(0,o.jsx)(n.li,{children:"$PointerTwo:=->$PointerOne\n--\x3e $PointerTwo (una nueva variable) contiene un puntero a $PointerOne, que a su vez apunta a $MyVar."}),"\n",(0,o.jsx)(n.li,{children:'($PointerTwo->)->:="Goodbye"\n--\x3e $PointerTwo-> hace referencia al contenido de $PointerOne, que a su vez hace referencia a $MyVar. Por lo tanto, ($PointerTwo->)-> referencia el contenido de $MyVar. As\xed que en este caso, a $MyVar se le asigna "Goodbye".'}),"\n",(0,o.jsx)(n.li,{children:"ALERT (($PointerTwo->)->)\n--\x3e Lo mismo que: $PointerTwo-> referencia el contenido de $PointerOne, que a su vez referencia $MyVar. Por lo tanto, ($PointerTwo->)-> referencia el contenido de $MyVar. Therefore ($PointerTwo->)-> references the contents of $MyVar."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:'La siguiente l\xednea pone "Hello" en $MyVar:'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'($PointerTwo->)->:="Hello"\n'})}),"\n",(0,o.jsx)(n.p,{children:'La siguiente l\xednea obtiene "Hello de $MyVar y lo pone en $NewVar:'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"$NewVar:=($PointerTwo->)->\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Importante:"})," la desreferenciaci\xf3n m\xfaltiple requiere par\xe9ntesis."]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return i},a:function(){return s}});var r=a(667294);let o={},l=r.createContext(o);function s(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);