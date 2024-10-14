"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20710],{341826:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=s(474848),n=s(28453);const r={id:"variables",title:"Variables"},l=void 0,i={id:"Concepts/variables",title:"Variables",description:"Los datos en 4D se almacenan de dos formas fundamentalmente diferentes. Los campos almacenan los datos permanentemente en el disco; las variables almacenan los datos en la memoria de forma temporal.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-18/Concepts/variables.md",sourceDirName:"Concepts",slug:"/Concepts/variables",permalink:"/docs/es/18/Concepts/variables",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fvariables.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"variables",title:"Variables"},sidebar:"docs",previous:{title:"Variant",permalink:"/docs/es/18/Concepts/variant"},next:{title:"Arrays",permalink:"/docs/es/18/Concepts/arrays"}},c={},d=[{value:"Creaci\xf3n de variables",id:"creaci\xf3n-de-variables",level:2},{value:"Asignar los valores",id:"asignar-los-valores",level:2},{value:"Variables locales, proceso e interproceso",id:"variables-locales-proceso-e-interproceso",level:2},{value:"Variables locales",id:"variables-locales",level:3},{value:"Variables proceso",id:"variables-proceso",level:3},{value:"Variables interproceso",id:"variables-interproceso",level:3}];function t(e){const a={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.p,{children:["Los datos en 4D se almacenan de dos formas fundamentalmente diferentes. ",(0,o.jsx)(a.strong,{children:"Los campos"})," almacenan los datos permanentemente en el disco; ",(0,o.jsx)(a.strong,{children:"las variables"})," almacenan los datos en la memoria de forma temporal."]}),"\n",(0,o.jsxs)(a.p,{children:["Cuando define su base, especifique a 4D los nombres y los tipos de campos que desea utilizar. Las variables son muy parecidas, tambi\xe9n se les da nombres y tipos diferentes (ver ",(0,o.jsx)(a.a,{href:"/docs/es/18/Concepts/data-types",children:"Tipos de datos"}),")."]}),"\n",(0,o.jsx)(a.p,{children:"Las variables son objetos del lenguaje; puede crear y utilizar variables que nunca aparecer\xe1n en la pantalla. En sus formularios, puede mostrar variables en la pantalla (excepto de los punteros y de los BLOB), introducir datos en ellas e imprimirlas en informes. De este modo, las variables de \xe1rea introducibles y no introducibles act\xfaan igual que los campos, y los mismos controles integrados est\xe1n disponibles al crearlos. Las variables de formulario tambi\xe9n pueden controlar botones, list boxes, \xe1reas de desplazamiento, botones imagen, etc., o mostrar los resultados de c\xe1lculos que no necesitan ser guardados."}),"\n",(0,o.jsx)(a.h2,{id:"creaci\xf3n-de-variables",children:"Creaci\xf3n de variables"}),"\n",(0,o.jsx)(a.p,{children:'Las variables se crean declar\xe1ndolas mediante uno de los comandos de los temas "Compilador" o "Arrays".'}),"\n",(0,o.jsxs)(a.p,{children:["**Nota:**los arrays son un tipo particular de variables. Un array es una serie ordenada de variables del mismo tipo. Para m\xe1s informaci\xf3n, consulte ",(0,o.jsx)(a.a,{href:"/docs/es/18/Concepts/arrays",children:"Arrays"}),"."]}),"\n",(0,o.jsx)(a.p,{children:"Por ejemplo, si se quiere definir una variable de tipo texto, se escribe:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:" C_TEXT(myText)\n"})}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"Note:"})," aunque no se suele recomendar, se pueden crear variables simplemente utiliz\xe1ndolas; no es necesario definirlas formalmente como se hace con los campos. Por ejemplo, si desea crear una variable que contenga la fecha actual m\xe1s 30 d\xedas, puede escribir:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:" MyDate:=Current date+30 //MyDate se crea y obtiene la fecha actual m\xe1s 30 d\xedas\n"})}),"\n",(0,o.jsx)(a.p,{children:"Una vez creada, puede utilizar una variable en el lugar que necesite en su base de datos. Por ejemplo, podr\xeda necesitar almacenar la variable texto en un campo del mismo tipo:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:" [MyTable]MyField:=MyText\n"})}),"\n",(0,o.jsx)(a.p,{children:"A continuaci\xf3n se presentan algunas declaraciones de variables b\xe1sicas:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"\n C_BLOB(vxMyBlob) // La variable proceso vxMyBlob se declara como una variable de tipo BLOB\n C_DATE($vdCurDate) // La variable local $vdCurDate se declara como una variable de tipo Fecha\n C_LONGINT(vg1;vg2;vg3) // Las 3 variables de proceso vg1, vg2 y vg3 se declaran como variables de tipo Entero largo\n C_OBJECT($vObj) // La variable local $vObj se declara como una variable de tipo Objeto\n C_COLLECTION($vCol) // La variable local $vCol se declara como una variable de tipo Colecci\xf3n\n ARRAY LONGINT(alAnArray;10) //La variable del proceso alAnArray se declara como un array Entero largo de 10 elementos\n"})}),"\n",(0,o.jsx)(a.h2,{id:"asignar-los-valores",children:"Asignar los valores"}),"\n",(0,o.jsxs)(a.p,{children:["Los datos pueden introducirse y copiarse en variables y arrays. Poner datos en una variable se llama ",(0,o.jsx)(a.strong,{children:"asignar los datos a la variable"})," y se hace con el operador de asignaci\xf3n (:=). El operador de asignaci\xf3n tambi\xe9n se utiliza para asignar datos a campos."]}),"\n",(0,o.jsx)(a.p,{children:"El operador de asignaci\xf3n es la principal forma de crear una variable y de introducir datos en ella. Se escribe el nombre de la variable que se quiere crear a la izquierda del operador de asignaci\xf3n. Por ejemplo:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"MyNumber:=3\n"})}),"\n",(0,o.jsxs)(a.p,{children:["crea la variable ",(0,o.jsx)(a.em,{children:"MyNumber"})," y pone en ella el n\xfamero 3. Si MyNumber ya existe, entonces toma el valor 3."]}),"\n",(0,o.jsxs)(a.p,{children:["Por supuesto, las variables no ser\xedan muy \xfatiles si no se pudieran obtener valores de ellas. Una vez m\xe1s, se utiliza el operador de asignaci\xf3n. Si necesita poner el valor de MyNumber en un campo llamado [Products]Size, escribir\xeda ",(0,o.jsx)(a.em,{children:"MyNumber"})," a la derecha del operador de asignaci\xf3n:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"[Products]Size:=MyNumber\n"})}),"\n",(0,o.jsxs)(a.p,{children:["En este caso, ",(0,o.jsx)(a.em,{children:"[Products]Size"})," ser\xeda igual a 3. Este ejemplo es bastante sencillo, pero ilustra la forma fundamental en que se transfieren los datos de un lugar a otro utilizando el lenguaje."]}),"\n",(0,o.jsx)(a.p,{children:"Los valores se asignan a los elementos del array utilizando llaves ({...}):"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:'atNames{1}:="Richard"\n'})}),"\n",(0,o.jsx)(a.h2,{id:"variables-locales-proceso-e-interproceso",children:"Variables locales, proceso e interproceso"}),"\n",(0,o.jsxs)(a.p,{children:["Puedes crear tres tipos de variables: ",(0,o.jsx)(a.strong,{children:"local"}),", ",(0,o.jsx)(a.strong,{children:"proceso"}),", e ",(0,o.jsx)(a.strong,{children:"interproceso"}),". La diferencia entre los tres tipos de elementos es su alcance, o los objetos para los que est\xe1n disponibles."]}),"\n",(0,o.jsx)(a.h3,{id:"variables-locales",children:"Variables locales"}),"\n",(0,o.jsx)(a.p,{children:'Una variable local, como su nombre indica, es local a un m\xe9todo, accesible s\xf3lo dentro del m\xe9todo en el que fue creada y no accesible fuera de ese m\xe9todo. Ser local a un m\xe9todo se conoce formalmente como ser de "alcance local." Las variables locales se utilizan para restringir una variable para que funcione s\xf3lo dentro del m\xe9todo.'}),"\n",(0,o.jsx)(a.p,{children:"Es posible que desee utilizar una variable local para:"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"Evitar conflictos con los nombres de otras variables"}),"\n",(0,o.jsx)(a.li,{children:"Utilizar los datos temporalmente"}),"\n",(0,o.jsx)(a.li,{children:"Reducir el n\xfamero de variables proceso"}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:"El nombre de una variable local siempre comienza por el signo d\xf3lar ($) y puede contener hasta 31 caracteres adicionales. Si introduce un nombre m\xe1s largo, 4D lo trunca a la longitud adecuada."}),"\n",(0,o.jsx)(a.p,{children:"Cuando se trabaja en una base con muchos m\xe9todos y variables, a menudo se encuentra que se necesita utilizar una variable s\xf3lo dentro del m\xe9todo en el que se est\xe1 trabajando. Puede crear y utilizar una variable local en el m\xe9todo sin preocuparse de si ha utilizado el mismo nombre de variable en otro lugar."}),"\n",(0,o.jsxs)(a.p,{children:["Frequently, in a database, small pieces of information are needed from the user. El comando ",(0,o.jsx)(a.code,{children:"Request"})," puede obtener esta informaci\xf3n. Muestra una caja de di\xe1logo con un mensaje que solicita al usuario una respuesta. Cuando el usuario introduce la respuesta, el comando devuelve la informaci\xf3n que el usuario introdujo. Generalmente no es necesario mantener esta informaci\xf3n en sus m\xe9todos durante mucho tiempo. Esta es una forma t\xedpica de utilizar una variable local. Aqu\xed un ejemplo:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:' $vsID:=Request("Introduzca su identificaci\xf3n:")\n If(OK=1)\n    QUERY([People];[People]ID =$vsID)\n End if\n'})}),"\n",(0,o.jsx)(a.p,{children:"Este m\xe9todo simplemente pide al usuario que introduzca un ID. Pone la respuesta en una variable local, $vsID, y luego busca el ID que el usuario introdujo. Cuando este m\xe9todo termina, la variable local $vsID se borra de la memoria. Este funcionamiento est\xe1 bien, porque la variable se necesita s\xf3lo una vez y s\xf3lo en este m\xe9todo."}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"Nota de compatibilidad:"})," no se recomienda esta funcionalidad para declarar variables dentro de m\xe9todos. Se recomienda utilizar la palabra clave ",(0,o.jsx)(a.a,{href:"#using-the-var-keyword",children:"var"}),"."]}),"\n",(0,o.jsx)(a.h3,{id:"variables-proceso",children:"Variables proceso"}),"\n",(0,o.jsx)(a.p,{children:"Una variable proceso s\xf3lo est\xe1 disponible dentro de un proceso. Es accesible al m\xe9todo del proceso y a todos los m\xe9todos llamados desde el proceso."}),"\n",(0,o.jsx)(a.p,{children:"Una variable proceso no tiene un prefijo antes de su nombre. Un nombre de variable proceso puede contener hasta 31 caracteres."}),"\n",(0,o.jsx)(a.p,{children:'En modo interpretado, las variables se mantienen din\xe1micamente; se crean y se borran de la memoria "sobre la marcha". En modo compilado, todos los procesos que se crean (procesos usuario) comparten la misma definici\xf3n de variables proceso, pero cada proceso tiene una instancia diferente para cada variable. Por ejemplo, la variable miVar es una variable en el proceso P_1 y otra en el proceso P_2.'}),"\n",(0,o.jsxs)(a.p,{children:["Un proceso puede leer y escribir las variables proceso de otro proceso utilizando los comandos ",(0,o.jsx)(a.code,{children:"GET PROCESS VARIABLE"})," y ",(0,o.jsx)(a.code,{children:"SET PROCESS VARIABLE"}),". Es una buena pr\xe1ctica de programaci\xf3n restringir el uso de estos comandos a la situaci\xf3n para la que fueron creados en 4D:"]}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"Comunicaci\xf3n interprocesos en lugares espec\xedficos de su c\xf3digo"}),"\n",(0,o.jsx)(a.li,{children:"Gesti\xf3n de arrastrar y soltar interproceso"}),"\n",(0,o.jsx)(a.li,{children:"En Cliente/Servidor, la comunicaci\xf3n entre los procesos en las m\xe1quinas cliente y los procedimientos almacenados ejecutados en las m\xe1quinas servidoras"}),"\n"]}),"\n",(0,o.jsxs)(a.p,{children:["Para m\xe1s informaci\xf3n, consulte el cap\xedtulo ",(0,o.jsx)(a.strong,{children:"Procesos"})," y la descripci\xf3n de estos comandos."]}),"\n",(0,o.jsx)(a.h3,{id:"variables-interproceso",children:"Variables interproceso"}),"\n",(0,o.jsx)(a.p,{children:"Las variables interproceso est\xe1n disponibles en toda la base y son compartidas por todos los procesos cooperativos. Se utilizan principalmente para compartir informaci\xf3n entre procesos."}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsx)(a.p,{children:"No se recomienda el uso de variables interproceso, ya que no est\xe1n disponibles para los procesos apropiativos y tienden a hacer que el c\xf3digo sea menos mantenible."}),"\n"]}),"\n",(0,o.jsxs)(a.p,{children:["El nombre de una variable interproceso siempre comienza con los s\xedmbolos (",(0,o.jsx)(a.code,{children:"<>"}),') \u2014 un signo "menor que" seguido de un signo "mayor que"- seguido de 31 caracteres.']}),"\n",(0,o.jsx)(a.p,{children:"En modo cliente/servidor, cada m\xe1quina (cliente y servidor) comparten la misma definici\xf3n de las variables interproceso, pero cada m\xe1quina tiene una instancia diferente para cada variable."})]})}function u(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(t,{...e})}):t(e)}},28453:(e,a,s)=>{s.d(a,{R:()=>l,x:()=>i});var o=s(296540);const n={},r=o.createContext(n);function l(e){const a=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),o.createElement(r.Provider,{value:a},e.children)}}}]);