"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[24089],{603905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>u});var r=n(667294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var i=r.createContext({}),c=function(e){var a=r.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},p=function(e){var a=c(e.components);return r.createElement(i.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=t,b=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(b,s(s({ref:a},p),{},{components:n})):r.createElement(b,s({ref:a},p))}));function u(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l.mdxType="string"==typeof e?e:t,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},124595:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});n(667294);var r=n(603905);function t(){return t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},t.apply(this,arguments)}function o(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}const s={id:"identifiers",title:"Identificadores"},l=void 0,i={unversionedId:"Concepts/identifiers",id:"version-20-R3/Concepts/identifiers",title:"Identificadores",description:"Esta secci\xf3n describe las convenciones y reglas para nombrar los distintos elementos del lenguaje 4D (variables, propiedades objeto, tablas, formularios, etc.).",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R3/Concepts/identifiers.md",sourceDirName:"Concepts",slug:"/Concepts/identifiers",permalink:"/docs/es/20-R3/Concepts/identifiers",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fidentifiers.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"identifiers",title:"Identificadores"},sidebar:"docs",previous:{title:"Plug-ins",permalink:"/docs/es/20-R3/Concepts/plug-ins"},next:{title:"Rutas de acceso",permalink:"/docs/es/20-R3/Concepts/paths"}},c={},p=[{value:"Arrays",id:"arrays",level:2},{value:"Clases",id:"clases",level:2},{value:"Funciones",id:"funciones",level:2},{value:"Propiedades de los objetos",id:"propiedades-de-los-objetos",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"M\xe9todos proyecto",id:"m\xe9todos-proyecto",level:2},{value:"Tablas y campos",id:"tablas-y-campos",level:2},{value:"Variables",id:"variables",level:2},{value:"Otros nombres",id:"otros-nombres",level:2}],d={toc:p};function m(e){var{components:a}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",t({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Esta secci\xf3n describe las convenciones y reglas para nombrar los distintos elementos del lenguaje 4D (variables, propiedades objeto, tablas, formularios, etc.)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Si se utilizan caracteres no romanos en los nombres de los identificadores, su longitud m\xe1xima puede ser menor.")),(0,r.kt)("h2",t({},{id:"arrays"}),"Arrays"),(0,r.kt)("p",null,"Los nombres de los arrays siguen las mismas reglas que las ",(0,r.kt)("a",t({parentName:"p"},{href:"#variables"}),"variables"),"."),(0,r.kt)("h2",t({},{id:"clases"}),"Clases"),(0,r.kt)("p",null,"El nombre de una clase puede contener hasta 31 caracteres."),(0,r.kt)("p",null,"Un nombre de clase debe cumplir con el est\xe1ndar ",(0,r.kt)("a",t({parentName:"p"},{href:"#object-properties"}),"reglas de nomenclatura de propiedades")," para la notaci\xf3n de puntos."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"No se recomienda dar el mismo nombre a una clase y a una ",(0,r.kt)("a",t({parentName:"p"},{href:"#tables"}),"tabla de la base"),", para evitar conflictos.")),(0,r.kt)("h2",t({},{id:"funciones"}),"Funciones"),(0,r.kt)("p",null,"Los nombres de funci\xf3n deben cumplir con el est\xe1ndar ",(0,r.kt)("a",t({parentName:"p"},{href:"#object-properties"}),"reglas de nomenclatura de propiedades")," para la notaci\xf3n de puntos."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Consejo:"),' comenzar el nombre de la funci\xf3n con un car\xe1cter de subrayado ("_") excluir\xe1 la funci\xf3n de las funcionalidades de autocompletado en el editor de c\xf3digo 4D.')),(0,r.kt)("h2",t({},{id:"propiedades-de-los-objetos"}),"Propiedades de los objetos"),(0,r.kt)("p",null,"El nombre de una propiedad objeto (tambi\xe9n llamado objeto ",(0,r.kt)("em",{parentName:"p"},"atributo"),") puede contener hasta 255 caracteres."),(0,r.kt)("p",null,"Las propiedades de los objetos pueden hacer referencia a valores escalares, elementos ORDA, funciones de clase, otros objetos, etc. Sea cual sea su naturaleza, los nombres de las propiedades de los objetos deben seguir las siguientes reglas ",(0,r.kt)("strong",{parentName:"p"},"si se quiere utilizar la ",(0,r.kt)("a",t({parentName:"strong"},{href:"/docs/es/20-R3/Concepts/object#object-properties"}),"notaci\xf3n de punto")),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'El nombre de una propiedad debe comenzar con una letra, un gui\xf3n bajo o un d\xf3lar "$".'),(0,r.kt)("li",{parentName:"ul"},'A partir de ah\xed, el nombre puede incluir cualquier letra, d\xedgito, el caracter de subrayado ("_"), o el caracter de d\xf3lar ("$").'),(0,r.kt)("li",{parentName:"ul"},"Los nombres de propiedades son sensibles a las may\xfasculas y min\xfasculas.")),(0,r.kt)("p",null,"Ejemplos:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'myObject.myAttribute:="10"\n$value:=$clientObj.data.address.city\n')),(0,r.kt)("admonition",t({},{type:"tip"}),(0,r.kt)("p",{parentName:"admonition"},'Comenzar el nombre de una propiedad objeto con un car\xe1cter de subrayado ("_") excluir\xe1 la propiedad de las caracter\xedsticas de autocompletado en el editor de c\xf3digo de 4D. Por ejemplo, si declara ',(0,r.kt)("inlineCode",{parentName:"p"},"$o._myPrivateProperty"),", no se propondr\xe1 en el editor de c\xf3digo cuando escriba ",(0,r.kt)("inlineCode",{parentName:"p"},'"$o. "'),".")),(0,r.kt)("p",null,"Ver tambi\xe9n ",(0,r.kt)("a",t({parentName:"p"},{href:"https://www.ecma-international.org/ecma-262/5.1/#sec-7.6"}),"ECMA Script standard"),"."),(0,r.kt)("admonition",t({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"Si utiliza ",(0,r.kt)("strong",{parentName:"p"},"notaci\xf3n de cadena")," entre corchetes, los nombres de las propiedades pueden contener cualquier caracter (ej.: ",(0,r.kt)("inlineCode",{parentName:"p"},'miObjeto["1. First property"]'),").")),(0,r.kt)("h2",t({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("p",null,"Los nombres de los par\xe1metros deben comenzar con un caracter ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," y seguir las mismas reglas que los ",(0,r.kt)("a",t({parentName:"p"},{href:"#variables"}),"nombres de variables"),"."),(0,r.kt)("p",null,"Ejemplos:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"Function getArea($width : Integer; $height : Integer)-> $area : Integer\n\n#DECLARE ($i : Integer ; $param : Date) -> $myResult : Object\n")),(0,r.kt)("h2",t({},{id:"m\xe9todos-proyecto"}),"M\xe9todos proyecto"),(0,r.kt)("p",null,"El nombre de un m\xe9todo proyecto puede contener hasta 31 caracteres."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Un nombre de m\xe9todo proyecto debe comenzar por una letra, un d\xedgito o un gui\xf3n bajo"),(0,r.kt)("li",{parentName:"ul"},'A partir de ah\xed, el nombre puede incluir cualquier letra o d\xedgito, el caracter de subrayado ("_"), o el caracter de espacio.'),(0,r.kt)("li",{parentName:"ul"},"No utilice nombres reservados, es decir, nombres de comandos 4D (",(0,r.kt)("inlineCode",{parentName:"li"},"Date"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Time"),", etc), keywords (",(0,r.kt)("inlineCode",{parentName:"li"},"If"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"For"),", etc.), o nombres de constantes (",(0,r.kt)("inlineCode",{parentName:"li"},"Euro"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Black"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Friday"),", etc.)."),(0,r.kt)("li",{parentName:"ul"},"Los nombres de m\xe9todos proyecto son sensibles a las may\xfasculas y min\xfasculas.")),(0,r.kt)("p",null,"Ejemplos:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"If(New client)\nDELETE DUPLICATED VALUES\nAPPLY TO SELECTION([Employees];INCREASE SALARIES)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Consejo:")," es una buena t\xe9cnica de programaci\xf3n adoptar la misma convenci\xf3n de nomenclatura que la utilizada por 4D para los m\xe9todos integrados. Utilice may\xfasculas para nombrar sus m\xe9todos; sin embargo, si un m\xe9todo devuelve un valor, ponga en may\xfascula el primer car\xe1cter de su nombre. De este modo, cuando vuelva a abrir un proyecto para su mantenimiento despu\xe9s de unos meses, ya sabr\xe1 si un m\xe9todo devuelve un resultado simplemente mirando su nombre en la ventana del Explorador."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Cuando se llama a un m\xe9todo, s\xf3lo hay que escribir su nombre. Sin embargo, algunos comandos integrados en 4D, como ",(0,r.kt)("inlineCode",{parentName:"p"},"ON EVENT CALL"),", as\xed como tambi\xe9n todos los comandos del plug-in, esperan el nombre de un m\xe9todo como una cadena cuando se pasa un par\xe1metro de tipo m\xe9todo.")),(0,r.kt)("p",null,"Ejemplos:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),' //Este comando espera un m\xe9todo (funci\xf3n) o una f\xf3rmula\nQUERY BY FORMULA([aTable];Special query)\n //Este comando espera un m\xe9todo (procedimiento) o una instrucci\xf3n\nAPPLY TO SELECTION([Employees];INCREASE SALARIES)\n //Pero este comando espera un nombre de m\xe9todo\nON EVENT CALL("HANDLE EVENTS")\n')),(0,r.kt)("h2",t({},{id:"tablas-y-campos"}),"Tablas y campos"),(0,r.kt)("p",null,"Una tabla se designa colocando su nombre entre par\xe9ntesis: ","[","...]. Para designar un campo hay que especificar primero la tabla a la que pertenece (el nombre del campo sigue inmediatamente al nombre de la tabla)."),(0,r.kt)("p",null,"Un nombre de tabla y un nombre de campo pueden contener hasta 31 caracteres."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Un nombre de tabla o campo debe comenzar con una letra, un gui\xf3n bajo o un signo d\xf3lar ("$")'),(0,r.kt)("li",{parentName:"ul"},'A partir de ah\xed, el nombre puede incluir caracteres alfab\xe9ticos, num\xe9ricos, el car\xe1cter espacio y el car\xe1cter de subrayado ("_").'),(0,r.kt)("li",{parentName:"ul"},"No utilice nombres reservados, es decir, nombres de comandos 4D (",(0,r.kt)("inlineCode",{parentName:"li"},"Date"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Time"),", etc), keywords (",(0,r.kt)("inlineCode",{parentName:"li"},"If"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"For"),", etc.), o nombres de constantes (",(0,r.kt)("inlineCode",{parentName:"li"},"Euro"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Black"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Friday"),", etc.)."),(0,r.kt)("li",{parentName:"ul"},"Deben respetarse reglas adicionales cuando la base deba manejarse v\xeda SQL: s\xf3lo se aceptan los caracteres _0123456789abcdefghijklmnopqrstuvwxyz, y el nombre no debe incluir ninguna palabra clave SQL (comando, atributo, etc.).")),(0,r.kt)("p",null,"Ejemplos:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'FORM SET INPUT([Clients];"Entry")\nADD RECORD([Letters])\n[Orders]Total:=Sum([Line]Amount)\nQUERY([Clients];[Clients]Name="Smith")\n[Letters]Text:=Capitalize text([Letters]Text)\n\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"No se recomienda dar el mismo nombre a una tabla y a una ",(0,r.kt)("a",t({parentName:"p"},{href:"#classes"}),"clase"),", para evitar conflictos.")),(0,r.kt)("h2",t({},{id:"variables"}),"Variables"),(0,r.kt)("p",null,"El nombre de una variable puede tener hasta 31 caracteres, sin incluir los s\xedmbolos de alcance (",(0,r.kt)("inlineCode",{parentName:"p"},"$")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"<>"),")."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Un nombre de variable debe comenzar con una letra, un gui\xf3n bajo o un d\xf3lar ("$") para ',(0,r.kt)("a",t({parentName:"li"},{href:"/docs/es/20-R3/Concepts/parameters"}),"par\xe1metros")," y ",(0,r.kt)("a",t({parentName:"li"},{href:"/docs/es/20-R3/Concepts/variables#local-variables"}),"variables locales"),", o ",(0,r.kt)("inlineCode",{parentName:"li"},"<>")," para ",(0,r.kt)("a",t({parentName:"li"},{href:"/docs/es/20-R3/Concepts/variables#interprocess-variables"}),"variables de interproceso"),"."),(0,r.kt)("li",{parentName:"ul"},"Un d\xedgito como primer car\xe1cter est\xe1 permitido pero no se recomienda, y no es soportado por la ",(0,r.kt)("a",t({parentName:"li"},{href:"/docs/es/20-R3/Concepts/variables#using-the-var-keyword"})," sintaxis de declaraci\xf3n ",(0,r.kt)("inlineCode",{parentName:"a"},"var")," "),"."),(0,r.kt)("li",{parentName:"ul"},'A partir de ah\xed, el nombre puede incluir cualquier letra o d\xedgito, y el caracter de subrayado ("_").'),(0,r.kt)("li",{parentName:"ul"},"Un caracter de espacio est\xe1 permitido pero no se recomienda, y no es soportado por la ",(0,r.kt)("a",t({parentName:"li"},{href:"/docs/es/20-R3/Concepts/variables#using-the-var-keyword"})," sintaxis de declaraci\xf3n ",(0,r.kt)("inlineCode",{parentName:"a"},"var")," "),"."),(0,r.kt)("li",{parentName:"ul"},"No utilice nombres reservados, es decir, nombres de comandos 4D (",(0,r.kt)("inlineCode",{parentName:"li"},"Date"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Time"),", etc), keywords (",(0,r.kt)("inlineCode",{parentName:"li"},"If"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"For"),", etc.), o nombres de constantes (",(0,r.kt)("inlineCode",{parentName:"li"},"Euro"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Black"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Friday"),", etc.)."),(0,r.kt)("li",{parentName:"ul"},"Los nombres de las variables son sensibles a las may\xfasculas y min\xfasculas.")),(0,r.kt)("p",null,"Ejemplos:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'For($vlRecord;1;100) //variable local\n$vsMyString:="Hello there" //variable local\nvar $vName; $vJob : Text //variables locales \nIf(bValidate=1) //variable proceso \n<>vlProcessID:=Current process() //variable interproceso\n')),(0,r.kt)("h2",t({},{id:"otros-nombres"}),"Otros nombres"),(0,r.kt)("p",null,"En el lenguaje 4D, varios elementos tienen sus nombres manejados como cadenas: ",(0,r.kt)("strong",{parentName:"p"},"formularios"),", ",(0,r.kt)("strong",{parentName:"p"},"objetos de formulario"),", ",(0,r.kt)("strong",{parentName:"p"},"selecciones temporales"),", ",(0,r.kt)("strong",{parentName:"p"},"procesos"),", ",(0,r.kt)("strong",{parentName:"p"},"conjuntos"),", ",(0,r.kt)("strong",{parentName:"p"},"barras de men\xfa"),", etc."),(0,r.kt)("p",null,"Estos nombres de cadena pueden contener hasta 255 caracteres, sin incluir los caracteres ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"<>")," (si los hay)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Los nombres de las cadenas pueden contener cualquier car\xe1cter."),(0,r.kt)("li",{parentName:"ul"},"Los nombres de las cadenas son sensibles a las may\xfasculas y min\xfasculas.")),(0,r.kt)("p",null,"Ejemplos:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'DIALOG([Storage];"Note box"+String($vlStage))\nOBJECT SET FONT(*;"Binfo";"Times")\nUSE NAMED SELECTION([Customers];"Closed")//Selecci\xf3n temporal process\nUSE NAMED SELECTION([Customers];"<>ByZipcode") //Selecci\xf3n temporal interproceso\n //Iniciar el proceso global "Add Customers"\n$vlProcessID:=New process("P_ADD_CUSTOMERS";48*1024;"Add Customers")\n //Iniciar el proceso local "$Follow Mouse Moves"\n$vlProcessID:=New process("P_MOUSE_SNIFFER";16*1024;"$Follow Mouse Moves")\nCREATE SET([Customers];"Customer Orders")//Conjunto process\nUSE SET("<>Deleted Records") //Conjunto interprocess\nIf(Records in set("$Selection"+String($i))>0) //Conjunto client\n\n')))}m.isMDXComponent=!0}}]);