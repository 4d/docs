"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19204],{603905:(e,a,r)=>{r.d(a,{Zo:()=>d,kt:()=>m});var o=r(667294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function s(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?s(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function t(e,a){if(null==e)return{};var r,o,n=function(e,a){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),c=function(e){var a=o.useContext(i),r=a;return e&&(r="function"==typeof e?e(a):l(l({},a),e)),r},d=function(e){var a=c(e.components);return o.createElement(i.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},p=o.forwardRef((function(e,a){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,d=t(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,b=p["".concat(i,".").concat(m)]||p[m]||u[m]||s;return r?o.createElement(b,l(l({ref:a},d),{},{components:r})):o.createElement(b,l({ref:a},d))}));function m(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=r.length,l=new Array(s);l[0]=p;var t={};for(var i in a)hasOwnProperty.call(a,i)&&(t[i]=a[i]);t.originalType=e,t.mdxType="string"==typeof e?e:n,l[1]=t;for(var c=2;c<s;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},602010:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});r(667294);var o=r(603905);function n(){return n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n.apply(this,arguments)}function s(e,a){if(null==e)return{};var r,o,n=function(e,a){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const l={id:"variables",title:"Variables"},t=void 0,i={unversionedId:"Concepts/variables",id:"version-18/Concepts/variables",title:"Variables",description:"Los datos en 4D se almacenan de dos formas fundamentalmente diferentes. Los campos almacenan los datos permanentemente en el disco; las variables almacenan los datos en la memoria de forma temporal.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-18/Concepts/variables.md",sourceDirName:"Concepts",slug:"/Concepts/variables",permalink:"/docs/es/18/Concepts/variables",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fvariables.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"variables",title:"Variables"},sidebar:"docs",previous:{title:"Variant",permalink:"/docs/es/18/Concepts/variant"},next:{title:"Arrays",permalink:"/docs/es/18/Concepts/arrays"}},c={},d=[{value:"Creaci\xf3n de variables",id:"creaci\xf3n-de-variables",level:2},{value:"Asignar los valores",id:"asignar-los-valores",level:2},{value:"Variables locales, proceso e interproceso",id:"variables-locales-proceso-e-interproceso",level:2},{value:"Variables locales",id:"variables-locales",level:3},{value:"Variables proceso",id:"variables-proceso",level:3},{value:"Variables interproceso",id:"variables-interproceso",level:3}],u={toc:d};function p(e){var{components:a}=e,r=s(e,["components"]);return(0,o.kt)("wrapper",n({},u,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Los datos en 4D se almacenan de dos formas fundamentalmente diferentes. ",(0,o.kt)("strong",{parentName:"p"},"Los campos")," almacenan los datos permanentemente en el disco; ",(0,o.kt)("strong",{parentName:"p"},"las variables")," almacenan los datos en la memoria de forma temporal."),(0,o.kt)("p",null,"Cuando define su base, especifique a 4D los nombres y los tipos de campos que desea utilizar. Las variables son muy parecidas, tambi\xe9n se les da nombres y tipos diferentes (ver ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/es/18/Concepts/data-types"}),"Tipos de datos"),")."),(0,o.kt)("p",null,"Las variables son objetos del lenguaje; puede crear y utilizar variables que nunca aparecer\xe1n en la pantalla. En sus formularios, puede mostrar variables en la pantalla (excepto de los punteros y de los BLOB), introducir datos en ellas e imprimirlas en informes. De este modo, las variables de \xe1rea introducibles y no introducibles act\xfaan igual que los campos, y los mismos controles integrados est\xe1n disponibles al crearlos. Las variables de formulario tambi\xe9n pueden controlar botones, list boxes, \xe1reas de desplazamiento, botones imagen, etc., o mostrar los resultados de c\xe1lculos que no necesitan ser guardados."),(0,o.kt)("h2",n({},{id:"creaci\xf3n-de-variables"}),"Creaci\xf3n de variables"),(0,o.kt)("p",null,'Las variables se crean declar\xe1ndolas mediante uno de los comandos de los temas "Compilador" o "Arrays".'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Nota:"),"los arrays son un tipo particular de variables. Un array es una serie ordenada de variables del mismo tipo. Para m\xe1s informaci\xf3n, consulte ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/es/18/Concepts/arrays"}),"Arrays"),"."),(0,o.kt)("p",null,"Por ejemplo, si se quiere definir una variable de tipo texto, se escribe:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-4d"})," C_TEXT(myText)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," aunque no se suele recomendar, se pueden crear variables simplemente utiliz\xe1ndolas; no es necesario definirlas formalmente como se hace con los campos. Por ejemplo, si desea crear una variable que contenga la fecha actual m\xe1s 30 d\xedas, puede escribir:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-4d"})," MyDate:=Current date+30 //MyDate se crea y obtiene la fecha actual m\xe1s 30 d\xedas\n")),(0,o.kt)("p",null,"Una vez creada, puede utilizar una variable en el lugar que necesite en su base de datos. Por ejemplo, podr\xeda necesitar almacenar la variable texto en un campo del mismo tipo:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-4d"})," [MyTable]MyField:=MyText\n")),(0,o.kt)("p",null,"A continuaci\xf3n se presentan algunas declaraciones de variables b\xe1sicas:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"\n C_BLOB(vxMyBlob) // La variable proceso vxMyBlob se declara como una variable de tipo BLOB\n C_DATE($vdCurDate) // La variable local $vdCurDate se declara como una variable de tipo Fecha\n C_LONGINT(vg1;vg2;vg3) // Las 3 variables de proceso vg1, vg2 y vg3 se declaran como variables de tipo Entero largo\n C_OBJECT($vObj) // La variable local $vObj se declara como una variable de tipo Objeto\n C_COLLECTION($vCol) // La variable local $vCol se declara como una variable de tipo Colecci\xf3n\n ARRAY LONGINT(alAnArray;10) //La variable del proceso alAnArray se declara como un array Entero largo de 10 elementos\n")),(0,o.kt)("h2",n({},{id:"asignar-los-valores"}),"Asignar los valores"),(0,o.kt)("p",null,"Los datos pueden introducirse y copiarse en variables y arrays. Poner datos en una variable se llama ",(0,o.kt)("strong",{parentName:"p"},"asignar los datos a la variable")," y se hace con el operador de asignaci\xf3n (:=). El operador de asignaci\xf3n tambi\xe9n se utiliza para asignar datos a campos."),(0,o.kt)("p",null,"El operador de asignaci\xf3n es la principal forma de crear una variable y de introducir datos en ella. Se escribe el nombre de la variable que se quiere crear a la izquierda del operador de asignaci\xf3n. Por ejemplo:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"MyNumber:=3\n")),(0,o.kt)("p",null,"crea la variable ",(0,o.kt)("em",{parentName:"p"},"MyNumber")," y pone en ella el n\xfamero 3. Si MyNumber ya existe, entonces toma el valor 3."),(0,o.kt)("p",null,"Por supuesto, las variables no ser\xedan muy \xfatiles si no se pudieran obtener valores de ellas. Una vez m\xe1s, se utiliza el operador de asignaci\xf3n. Si necesita poner el valor de MyNumber en un campo llamado ","[Products]","Size, escribir\xeda ",(0,o.kt)("em",{parentName:"p"},"MyNumber")," a la derecha del operador de asignaci\xf3n:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"[Products]Size:=MyNumber\n")),(0,o.kt)("p",null,"En este caso, ",(0,o.kt)("em",{parentName:"p"},"[Products]","Size")," ser\xeda igual a 3. Este ejemplo es bastante sencillo, pero ilustra la forma fundamental en que se transfieren los datos de un lugar a otro utilizando el lenguaje."),(0,o.kt)("p",null,"Los valores se asignan a los elementos del array utilizando llaves ({...}):"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'atNames{1}:="Richard"\n')),(0,o.kt)("h2",n({},{id:"variables-locales-proceso-e-interproceso"}),"Variables locales, proceso e interproceso"),(0,o.kt)("p",null,"Puedes crear tres tipos de variables: ",(0,o.kt)("strong",{parentName:"p"},"local"),", ",(0,o.kt)("strong",{parentName:"p"},"proceso"),", e ",(0,o.kt)("strong",{parentName:"p"},"interproceso"),". La diferencia entre los tres tipos de elementos es su alcance, o los objetos para los que est\xe1n disponibles."),(0,o.kt)("h3",n({},{id:"variables-locales"}),"Variables locales"),(0,o.kt)("p",null,'Una variable local, como su nombre indica, es local a un m\xe9todo, accesible s\xf3lo dentro del m\xe9todo en el que fue creada y no accesible fuera de ese m\xe9todo. Ser local a un m\xe9todo se conoce formalmente como ser de "alcance local." Las variables locales se utilizan para restringir una variable para que funcione s\xf3lo dentro del m\xe9todo.'),(0,o.kt)("p",null,"Es posible que desee utilizar una variable local para:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Evitar conflictos con los nombres de otras variables"),(0,o.kt)("li",{parentName:"ul"},"Utilizar los datos temporalmente"),(0,o.kt)("li",{parentName:"ul"},"Reducir el n\xfamero de variables proceso")),(0,o.kt)("p",null,"El nombre de una variable local siempre comienza por el signo d\xf3lar ($) y puede contener hasta 31 caracteres adicionales. Si introduce un nombre m\xe1s largo, 4D lo trunca a la longitud adecuada."),(0,o.kt)("p",null,"Cuando se trabaja en una base con muchos m\xe9todos y variables, a menudo se encuentra que se necesita utilizar una variable s\xf3lo dentro del m\xe9todo en el que se est\xe1 trabajando. Puede crear y utilizar una variable local en el m\xe9todo sin preocuparse de si ha utilizado el mismo nombre de variable en otro lugar."),(0,o.kt)("p",null,"Frequently, in a database, small pieces of information are needed from the user. El comando ",(0,o.kt)("inlineCode",{parentName:"p"},"Request")," puede obtener esta informaci\xf3n. Muestra una caja de di\xe1logo con un mensaje que solicita al usuario una respuesta. Cuando el usuario introduce la respuesta, el comando devuelve la informaci\xf3n que el usuario introdujo. Generalmente no es necesario mantener esta informaci\xf3n en sus m\xe9todos durante mucho tiempo. Esta es una forma t\xedpica de utilizar una variable local. Aqu\xed un ejemplo:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-4d"}),' $vsID:=Request("Introduzca su identificaci\xf3n:")\n If(OK=1)\n    QUERY([People];[People]ID =$vsID)\n End if\n')),(0,o.kt)("p",null,"Este m\xe9todo simplemente pide al usuario que introduzca un ID. Pone la respuesta en una variable local, $vsID, y luego busca el ID que el usuario introdujo. Cuando este m\xe9todo termina, la variable local $vsID se borra de la memoria. Este funcionamiento est\xe1 bien, porque la variable se necesita s\xf3lo una vez y s\xf3lo en este m\xe9todo."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Nota de compatibilidad:")," no se recomienda esta funcionalidad para declarar variables dentro de m\xe9todos. Se recomienda utilizar la palabra clave ",(0,o.kt)("a",n({parentName:"p"},{href:"#using-the-var-keyword"}),"var"),"."),(0,o.kt)("h3",n({},{id:"variables-proceso"}),"Variables proceso"),(0,o.kt)("p",null,"Una variable proceso s\xf3lo est\xe1 disponible dentro de un proceso. Es accesible al m\xe9todo del proceso y a todos los m\xe9todos llamados desde el proceso."),(0,o.kt)("p",null,"Una variable proceso no tiene un prefijo antes de su nombre. Un nombre de variable proceso puede contener hasta 31 caracteres."),(0,o.kt)("p",null,'En modo interpretado, las variables se mantienen din\xe1micamente; se crean y se borran de la memoria "sobre la marcha". En modo compilado, todos los procesos que se crean (procesos usuario) comparten la misma definici\xf3n de variables proceso, pero cada proceso tiene una instancia diferente para cada variable. Por ejemplo, la variable miVar es una variable en el proceso P_1 y otra en el proceso P_2.'),(0,o.kt)("p",null,"Un proceso puede leer y escribir las variables proceso de otro proceso utilizando los comandos ",(0,o.kt)("inlineCode",{parentName:"p"},"GET PROCESS VARIABLE")," y ",(0,o.kt)("inlineCode",{parentName:"p"},"SET PROCESS VARIABLE"),". Es una buena pr\xe1ctica de programaci\xf3n restringir el uso de estos comandos a la situaci\xf3n para la que fueron creados en 4D:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Comunicaci\xf3n interprocesos en lugares espec\xedficos de su c\xf3digo"),(0,o.kt)("li",{parentName:"ul"},"Gesti\xf3n de arrastrar y soltar interproceso"),(0,o.kt)("li",{parentName:"ul"},"En Cliente/Servidor, la comunicaci\xf3n entre los procesos en las m\xe1quinas cliente y los procedimientos almacenados ejecutados en las m\xe1quinas servidoras")),(0,o.kt)("p",null,"Para m\xe1s informaci\xf3n, consulte el cap\xedtulo ",(0,o.kt)("strong",{parentName:"p"},"Procesos")," y la descripci\xf3n de estos comandos."),(0,o.kt)("h3",n({},{id:"variables-interproceso"}),"Variables interproceso"),(0,o.kt)("p",null,"Las variables interproceso est\xe1n disponibles en toda la base y son compartidas por todos los procesos cooperativos. Se utilizan principalmente para compartir informaci\xf3n entre procesos."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"No se recomienda el uso de variables interproceso, ya que no est\xe1n disponibles para los procesos apropiativos y tienden a hacer que el c\xf3digo sea menos mantenible.")),(0,o.kt)("p",null,"El nombre de una variable interproceso siempre comienza con los s\xedmbolos (",(0,o.kt)("inlineCode",{parentName:"p"},"<>"),') \u2014 un signo "menor que" seguido de un signo "mayor que"- seguido de 31 caracteres.'),(0,o.kt)("p",null,"En modo cliente/servidor, cada m\xe1quina (cliente y servidor) comparten la misma definici\xf3n de las variables interproceso, pero cada m\xe1quina tiene una instancia diferente para cada variable."))}p.isMDXComponent=!0}}]);