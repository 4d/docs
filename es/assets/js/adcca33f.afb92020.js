"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[96631],{3905:(e,a,r)=>{r.d(a,{Zo:()=>d,kt:()=>m});var n=r(67294);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function l(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?l(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var i=n.createContext({}),c=function(e){var a=n.useContext(i),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},d=function(e){var a=c(e.components);return n.createElement(i.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=t,b=u["".concat(i,".").concat(m)]||u[m]||p[m]||l;return r?n.createElement(b,o(o({ref:a},d),{},{components:r})):n.createElement(b,o({ref:a},d))}));function m(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=r.length,o=new Array(l);o[0]=u;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:t,o[1]=s;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},45328:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});r(67294);var n=r(3905);function t(){return t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.apply(this,arguments)}function l(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}const o={id:"variables",title:"Variables"},s=void 0,i={unversionedId:"Concepts/variables",id:"version-20-R2/Concepts/variables",title:"Variables",description:"Los datos en 4D se almacenan de dos formas fundamentalmente diferentes. Los campos almacenan los datos permanentemente en el disco; las variables almacenan los datos en la memoria de forma temporal.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R2/Concepts/variables.md",sourceDirName:"Concepts",slug:"/Concepts/variables",permalink:"/docs/es/20-R2/Concepts/variables",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fvariables.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"variables",title:"Variables"},sidebar:"docs",previous:{title:"Variant",permalink:"/docs/es/20-R2/Concepts/variant"},next:{title:"Arrays",permalink:"/docs/es/20-R2/Concepts/arrays"}},c={},d=[{value:"Declaraci\xf3n de variables",id:"declaraci\xf3n-de-variables",level:2},{value:"Utilizando la palabra clave <code>var</code>",id:"utilizando-la-palabra-clave-var",level:3},{value:"Ejemplos",id:"ejemplos",level:4},{value:"Utilizando un C_ directive",id:"utilizando-un-c_-directive",level:3},{value:"Asignar los valores",id:"asignar-los-valores",level:2},{value:"Variables locales, proceso e interproceso",id:"variables-locales-proceso-e-interproceso",level:2},{value:"Variables locales",id:"variables-locales",level:3},{value:"Variables proceso",id:"variables-proceso",level:3},{value:"Variables interproceso",id:"variables-interproceso",level:3}],p={toc:d};function u(e){var{components:a}=e,r=l(e,["components"]);return(0,n.kt)("wrapper",t({},p,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Los datos en 4D se almacenan de dos formas fundamentalmente diferentes. ",(0,n.kt)("strong",{parentName:"p"},"Los campos")," almacenan los datos permanentemente en el disco; ",(0,n.kt)("strong",{parentName:"p"},"las variables")," almacenan los datos en la memoria de forma temporal."),(0,n.kt)("p",null,"Cuando define su base, especifique a 4D los nombres y los tipos de campos que desea utilizar. Las variables son muy parecidas, tambi\xe9n se les da nombres y tipos diferentes (ver ",(0,n.kt)("a",t({parentName:"p"},{href:"/docs/es/20-R2/Concepts/data-types"}),"Tipos de datos"),")."),(0,n.kt)("p",null,"Una vez creada, puede utilizar una variable dondequiera que la necesite en su aplicaci\xf3n. Por ejemplo, podr\xeda necesitar almacenar una variable texto en un campo del mismo tipo:"),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"})," [MyTable]MyField:=MyText\n")),(0,n.kt)("p",null,"Las variables son objetos del lenguaje; puede crear y utilizar variables que nunca aparecer\xe1n en la pantalla. En sus formularios, puede mostrar variables en la pantalla (excepto de los punteros y de los BLOB), introducir datos en ellas e imprimirlas en informes. De este modo, las variables de \xe1rea introducibles y no introducibles act\xfaan igual que los campos, y los mismos controles integrados est\xe1n disponibles al crearlos. Las variables de formulario tambi\xe9n pueden controlar botones, list boxes, \xe1reas de desplazamiento, botones imagen, etc., o mostrar los resultados de c\xe1lculos que no necesitan ser guardados."),(0,n.kt)("h2",t({},{id:"declaraci\xf3n-de-variables"}),"Declaraci\xf3n de variables"),(0,n.kt)("p",null,"Las variables se crean declar\xe1ndolas. El lenguaje 4D ofrece dos formas de declarar las variables:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"utilizando la palabra clave ",(0,n.kt)("inlineCode",{parentName:"li"},"var")," (recomendado, especialmente si su c\xf3digo utiliza objetos y clases),"),(0,n.kt)("li",{parentName:"ul"},'utilizando uno de los comandos del lenguaje 4D del tema "Compilador" o "Arrays" (lenguaje cl\xe1sico \xfanicamente).')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," aunque no se suele recomendar, puede crear variables b\xe1sicas simplemente utiliz\xe1ndolas; no es necesario definirlas formalmente. Por ejemplo, si declara una variable que contenga la fecha actual m\xe1s 30 d\xedas, puede escribir:"),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"})," MyDate:=Current date+30 //MyDate is created  \n // 4D guesses it is of date type  \n // and assigns the current date plus 30 days\n")),(0,n.kt)("p",null,"Cuando se declaran las variables, se inicializan con el ",(0,n.kt)("a",t({parentName:"p"},{href:"/docs/es/20-R2/Concepts/data-types#default-values"}),(0,n.kt)("strong",{parentName:"a"},"valor por defecto correspondiente a su tipo")),", que mantendr\xe1n durante la sesi\xf3n mientras no se les haya ",(0,n.kt)("a",t({parentName:"p"},{href:"#assigning-data"}),"asignado"),"."),(0,n.kt)("h3",t({},{id:"utilizando-la-palabra-clave-var"}),"Utilizando la palabra clave ",(0,n.kt)("inlineCode",{parentName:"h3"},"var")),(0,n.kt)("p",null,"Se recomienda declarar las variables utilizando la palabra clave ",(0,n.kt)("inlineCode",{parentName:"p"},"var")," ya que esta sintaxis permite vincular las variables objeto con las clases. Using this syntax enhances code editor suggestions and type-ahead features."),(0,n.kt)("p",null,"Para declarar una variable de cualquier tipo con la palabra clave ",(0,n.kt)("inlineCode",{parentName:"p"},"var"),", utilice la siguiente sintaxis:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"var <varName>{; <varName2>;...}{ : <varType>}")),(0,n.kt)("p",null,"Por ejemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"var $myText : Text  //una variable texto\nvar myDate1; myDate2 : Date  //varias variables fecha\nvar $myFile : 4D.File  //una variable objeto clase archivo\nvar $myVar //una variable variant\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"varName")," es el nombre de la variable, debe cumplir con las ",(0,n.kt)("a",t({parentName:"p"},{href:"/docs/es/20-R2/Concepts/identifiers"}),"reglas de 4D")," sobre los identificadores. Esta sintaxis s\xf3lo soporta declaraciones de ",(0,n.kt)("a",t({parentName:"p"},{href:"#local-process-and-interprocess-variables"}),"variables locales y proceso"),", por lo que se excluyen ",(0,n.kt)("a",t({parentName:"p"},{href:"#interprocess-variables"}),"variables interproceso")," y ",(0,n.kt)("a",t({parentName:"p"},{href:"/docs/es/20-R2/Concepts/arrays"}),"arrays"),"."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"varType")," puede ser:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"un ",(0,n.kt)("a",t({parentName:"li"},{href:"/docs/es/20-R2/Concepts/data-types"}),"tipo b\xe1sico"),", en cuyo caso la variable contiene un valor del tipo declarado,"),(0,n.kt)("li",{parentName:"ul"},"una ",(0,n.kt)("a",t({parentName:"li"},{href:"/docs/es/20-R2/Concepts/classes"}),"referencia de clase")," (clase 4D o clase usuario), en cuyo caso la variable contiene una referencia a un objeto de la clase definida.")),(0,n.kt)("p",null,"Si ",(0,n.kt)("inlineCode",{parentName:"p"},"varType")," se omite, una variable de tipo ",(0,n.kt)("strong",{parentName:"p"},"variant")," se crea."),(0,n.kt)("p",null,"La siguiente tabla enumera todos los valores ",(0,n.kt)("inlineCode",{parentName:"p"},"varType")," soportados:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",t({parentName:"tr"},{align:null}),"varType"),(0,n.kt)("th",t({parentName:"tr"},{align:null}),"Contenido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",t({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Text")),(0,n.kt)("td",t({parentName:"tr"},{align:null}),"Valor texto")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",t({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Fecha")),(0,n.kt)("td",t({parentName:"tr"},{align:null}),"Valor fecha")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",t({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Hora")),(0,n.kt)("td",t({parentName:"tr"},{align:null}),"Valor Hora")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",t({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,n.kt)("td",t({parentName:"tr"},{align:null}),"Valor booleano")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",t({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Integer")),(0,n.kt)("td",t({parentName:"tr"},{align:null}),"Valor entero largo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",t({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Real")),(0,n.kt)("td",t({parentName:"tr"},{align:null}),"Valor real")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",t({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Puntero")),(0,n.kt)("td",t({parentName:"tr"},{align:null}),"Valor puntero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",t({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Picture")),(0,n.kt)("td",t({parentName:"tr"},{align:null}),"Valor imagen")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",t({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Blob")),(0,n.kt)("td",t({parentName:"tr"},{align:null}),"Valeor Blob escalar")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",t({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Collection")),(0,n.kt)("td",t({parentName:"tr"},{align:null}),"Valor colecci\xf3n")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",t({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Variant")),(0,n.kt)("td",t({parentName:"tr"},{align:null}),"Valor variant")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",t({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Object")),(0,n.kt)("td",t({parentName:"tr"},{align:null}),"Objeto con clase por defecto (4D.object)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",t({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"4D.<className>")),(0,n.kt)("td",t({parentName:"tr"},{align:null}),"Objeto del nombre de la clase 4D")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",t({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"cs.<className>")),(0,n.kt)("td",t({parentName:"tr"},{align:null}),"Objeto del nombre de la clase usuario")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",t({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"cs.<namespace><className>")),(0,n.kt)("td",t({parentName:"tr"},{align:null}),"Objeto del nombre de la clase del componente ",(0,n.kt)("inlineCode",{parentName:"td"},"<namespace>"))))),(0,n.kt)("h4",t({},{id:"ejemplos"}),"Ejemplos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Para declarar variables b\xe1sicas locales y de proceso:")),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"var $myText; myText; $vt : Text\nvar myVar //variant\n\nvar $o : Object    \n//equivalente a:  \nvar $o : 4D.Object\n//tambi\xe9n equivalente a C_OBJECT($o)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Para declarar las variables objeto de la clase 4D:")),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"var $myFolder : 4D.Folder\nvar $myFile : 4D.File\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Para declarar las variables objeto de la clase usuario:")),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"var $myClass : cs.MyClass\nvar $dataclass : cs.Employee\nvar $entity : cs.EmployeeEntity\n")),(0,n.kt)("h3",t({},{id:"utilizando-un-c_-directive"}),"Utilizando un C_ directive"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Nota:")," los par\xe1metros $1, $2... pasados a los m\xe9todos son variables locales. Se recomienda utilizar la palabra clave ",(0,n.kt)("a",t({parentName:"p"},{href:"#using-the-var-keyword"}),"var"),".")),(0,n.kt)("p",null,'Las directivas del tema "Compilador" permiten declarar variables de tipos b\xe1sicos.'),(0,n.kt)("p",null,"Por ejemplo, si se quiere definir una variable de tipo texto, se escribe:"),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"})," C_TEXT(myText)\n")),(0,n.kt)("p",null,"A continuaci\xf3n se presentan algunas declaraciones de variables b\xe1sicas:"),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"})," C_BLOB(vxMyBlob) // La variable proceso vxMyBlob se declara como una variable de tipo BLOB \nC_DATE($vdCurDate) // La variable local $vdCurDate se declara como una variable de tipo Fecha\n C_LONGINT(vg1;vg2;vg3) // Las 3 variables de proceso vg1, vg2 y vg3 se declaran como variables de tipo Entero largo\n C_OBJECT($vObj) // La variable local $vObj se declara como una variable de tipo Objeto\n C_COLLECTION($vCol) // La variable local $vCol se declara como una variable de tipo Colecci\xf3n\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Nota:")," los array son un tipo particular de variables (un array es una serie ordenada de variables del mismo tipo). Los arrays se declaran con comandos espec\xedficos, como ",(0,n.kt)("inlineCode",{parentName:"p"},"ARRAY LONGINT(alAnArray;10)"),". Para m\xe1s informaci\xf3n, consulte ",(0,n.kt)("a",t({parentName:"p"},{href:"/docs/es/20-R2/Concepts/arrays"}),"Arrays"),"."),(0,n.kt)("h2",t({},{id:"asignar-los-valores"}),"Asignar los valores"),(0,n.kt)("p",null,"Los datos pueden introducirse y copiarse en variables y arrays. Poner datos en una variable se llama ",(0,n.kt)("strong",{parentName:"p"},"asignar los datos a la variable")," y se hace con el operador de asignaci\xf3n (:=). El operador de asignaci\xf3n tambi\xe9n se utiliza para asignar datos a campos."),(0,n.kt)("p",null,"El operador de asignaci\xf3n es un primer medio para crear una variable e introducir datos en ella. Se escribe el nombre de la variable que se quiere crear a la izquierda del operador de asignaci\xf3n. Por ejemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"MyNumber:=3\n")),(0,n.kt)("p",null,"crea la variable ",(0,n.kt)("em",{parentName:"p"},"MyNumber")," y pone en ella el n\xfamero 3. Si MyNumber ya existe, entonces toma el valor 3."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Normalmente no se recomienda crear variables sin ",(0,n.kt)("a",t({parentName:"p"},{href:"#declaring-variables"}),"declarar su tipo"),".")),(0,n.kt)("p",null,"Por supuesto, las variables no ser\xedan muy \xfatiles si no se pudieran obtener valores de ellas. Una vez m\xe1s, se utiliza el operador de asignaci\xf3n. Si necesita poner el valor de MyNumber en un campo llamado ","[Products]","Size, escribir\xeda ",(0,n.kt)("em",{parentName:"p"},"MyNumber")," a la derecha del operador de asignaci\xf3n:"),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"[Products]Size:=MyNumber\n")),(0,n.kt)("p",null,"En este caso, ",(0,n.kt)("em",{parentName:"p"},"[Products]","Size")," ser\xeda igual a 3. Este ejemplo es bastante sencillo, pero ilustra la forma fundamental en que se transfieren los datos de un lugar a otro utilizando el lenguaje."),(0,n.kt)("p",null,"Los valores se asignan a los elementos del array utilizando llaves ({...}):"),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'atNames{1}:="Richard"\n')),(0,n.kt)("h2",t({},{id:"variables-locales-proceso-e-interproceso"}),"Variables locales, proceso e interproceso"),(0,n.kt)("p",null,"Puedes crear tres tipos de variables: ",(0,n.kt)("strong",{parentName:"p"},"local"),", ",(0,n.kt)("strong",{parentName:"p"},"proceso"),", e ",(0,n.kt)("strong",{parentName:"p"},"interproceso"),". La diferencia entre los tres tipos de elementos es su alcance, o los objetos para los que est\xe1n disponibles."),(0,n.kt)("h3",t({},{id:"variables-locales"}),"Variables locales"),(0,n.kt)("p",null,'Una variable local, como su nombre indica, es local a un m\xe9todo, accesible s\xf3lo dentro del m\xe9todo en el que fue creada y no accesible fuera de ese m\xe9todo. Ser local a un m\xe9todo se conoce formalmente como ser de "alcance local." Las variables locales se utilizan para restringir una variable para que funcione s\xf3lo dentro del m\xe9todo.'),(0,n.kt)("p",null,"Es posible que desee utilizar una variable local para:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Evitar conflictos con los nombres de otras variables"),(0,n.kt)("li",{parentName:"ul"},"Utilizar los datos temporalmente"),(0,n.kt)("li",{parentName:"ul"},"Reducir el n\xfamero de variables proceso")),(0,n.kt)("p",null,"El nombre de una variable local siempre comienza por el signo d\xf3lar ($) y puede contener hasta 31 caracteres adicionales. Si introduce un nombre m\xe1s largo, 4D lo trunca a la longitud adecuada."),(0,n.kt)("p",null,"Cuando se trabaja en un proyecto de aplicaci\xf3n con muchos m\xe9todos y variables, a menudo se encuentra que se necesita utilizar una variable s\xf3lo dentro del m\xe9todo en el que se est\xe1 trabajando. Puede crear y utilizar una variable local en el m\xe9todo sin preocuparse de si ha utilizado el mismo nombre de variable en otro lugar."),(0,n.kt)("p",null,"Con frecuencia, en una aplicaci\xf3n, se necesitan peque\xf1as piezas de informaci\xf3n del usuario. El comando ",(0,n.kt)("inlineCode",{parentName:"p"},"Request")," puede obtener esta informaci\xf3n. Muestra una caja de di\xe1logo con un mensaje que solicita al usuario una respuesta. Cuando el usuario introduce la respuesta, el comando devuelve la informaci\xf3n que el usuario introdujo. Generalmente no es necesario mantener esta informaci\xf3n en sus m\xe9todos durante mucho tiempo. Esta es una forma t\xedpica de utilizar una variable local. Aqu\xed un ejemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),' $vsID:=Request("Introduzca su identificaci\xf3n:")\n If(OK=1)\n    QUERY([People];[People]ID =$vsID)\n End if\n')),(0,n.kt)("p",null,"Este m\xe9todo simplemente pide al usuario que introduzca un ID. Pone la respuesta en una variable local, $vsID, y luego busca el ID que el usuario introdujo. Cuando este m\xe9todo termina, la variable local $vsID se borra de la memoria. Este funcionamiento est\xe1 bien, porque la variable se necesita s\xf3lo una vez y s\xf3lo en este m\xe9todo."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Nota de compatibilidad:")," no se recomienda esta funcionalidad para declarar variables dentro de m\xe9todos. Se recomienda utilizar la palabra clave ",(0,n.kt)("a",t({parentName:"p"},{href:"#using-the-var-keyword"}),"var"),"."),(0,n.kt)("h3",t({},{id:"variables-proceso"}),"Variables proceso"),(0,n.kt)("p",null,"Una variable proceso s\xf3lo est\xe1 disponible dentro de un proceso. Es accesible al m\xe9todo del proceso y a todos los m\xe9todos llamados desde el proceso."),(0,n.kt)("p",null,"Una variable proceso no tiene un prefijo antes de su nombre. Un nombre de variable proceso puede contener hasta 31 caracteres."),(0,n.kt)("p",null,'En modo interpretado, las variables se mantienen din\xe1micamente; se crean y se borran de la memoria "sobre la marcha". En modo compilado, todos los procesos que se crean (procesos usuario) comparten la misma definici\xf3n de variables proceso, pero cada proceso tiene una instancia diferente para cada variable. Por ejemplo, la variable miVar es una variable en el proceso P_1 y otra en el proceso P_2.'),(0,n.kt)("p",null,"Un proceso puede leer y escribir las variables proceso de otro proceso utilizando los comandos ",(0,n.kt)("inlineCode",{parentName:"p"},"GET PROCESS VARIABLE")," y ",(0,n.kt)("inlineCode",{parentName:"p"},"SET PROCESS VARIABLE"),". Es una buena pr\xe1ctica de programaci\xf3n restringir el uso de estos comandos a la situaci\xf3n para la que fueron creados en 4D:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Comunicaci\xf3n interprocesos en lugares espec\xedficos de su c\xf3digo"),(0,n.kt)("li",{parentName:"ul"},"Gesti\xf3n de arrastrar y soltar interproceso"),(0,n.kt)("li",{parentName:"ul"},"En Cliente/Servidor, la comunicaci\xf3n entre los procesos en las m\xe1quinas cliente y los procedimientos almacenados ejecutados en las m\xe1quinas servidoras")),(0,n.kt)("p",null,"Para m\xe1s informaci\xf3n, consulte el cap\xedtulo ",(0,n.kt)("strong",{parentName:"p"},"Procesos")," y la descripci\xf3n de estos comandos."),(0,n.kt)("h3",t({},{id:"variables-interproceso"}),"Variables interproceso"),(0,n.kt)("p",null,"Las variables interproceso est\xe1n disponibles en todo el proyecto y son compartidas por todos los procesos cooperativos. Se utilizan principalmente para compartir informaci\xf3n entre procesos."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"No se recomienda el uso de variables interproceso, ya que no est\xe1n disponibles para los procesos apropiativos y tienden a hacer que el c\xf3digo sea menos mantenible.")),(0,n.kt)("p",null,"El nombre de una variable interproceso siempre comienza con los s\xedmbolos ",(0,n.kt)("inlineCode",{parentName:"p"},"<>"),' \u2014 un signo "menor que" seguido de un signo "mayor que"- seguido de 31 caracteres.'),(0,n.kt)("p",null,"En modo cliente/servidor, cada m\xe1quina (cliente y servidor) comparten la misma definici\xf3n de las variables interproceso, pero cada m\xe1quina tiene una instancia diferente para cada variable."))}u.isMDXComponent=!0}}]);