"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[64610],{603905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>u});var n=t(667294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),s=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(d.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(t),u=r,k=p["".concat(d,".").concat(u)]||p[u]||m[u]||o;return t?n.createElement(k,l(l({ref:a},c),{},{components:t})):n.createElement(k,l({ref:a},c))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},976762:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>c});t(667294);var n=t(603905);function r(){return r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},r.apply(this,arguments)}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const l={id:"creating-using-macros",title:"Creaci\xf3n y uso de macros"},i=void 0,d={unversionedId:"code-editor/creating-using-macros",id:"version-20-R3/code-editor/creating-using-macros",title:"Creaci\xf3n y uso de macros",description:"Puede utilizar macrocomandos en sus m\xe9todos. El uso de macrocomandos permite ahorrar mucho tiempo durante la entrada de c\xf3digo.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R3/code-editor/creating-using-macros.md",sourceDirName:"code-editor",slug:"/code-editor/creating-using-macros",permalink:"/docs/es/20-R3/code-editor/creating-using-macros",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20code-editor%2Fcreating-using-macros.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"creating-using-macros",title:"Creaci\xf3n y uso de macros"},sidebar:"docs",previous:{title:"Editor de c\xf3digo",permalink:"/docs/es/20-R3/code-editor/write-class-method"},next:{title:"Etiquetas de transformaci\xf3n",permalink:"/docs/es/20-R3/Tags/tags"}},s={},c=[{value:"\xbfQu\xe9 es una macro?",id:"qu\xe9-es-una-macro",level:2},{value:"Ubicaci\xf3n de las macros",id:"ubicaci\xf3n-de-las-macros",level:2},{value:"Macros por defecto",id:"macros-por-defecto",level:2},{value:"A\xf1adir macros personalizadas",id:"a\xf1adir-macros-personalizadas",level:2},{value:"Comprobaci\xf3n de la sintaxis de las macros personalizadas",id:"comprobaci\xf3n-de-la-sintaxis-de-las-macros-personalizadas",level:3},{value:"S\xedntaxis de macros 4D",id:"s\xedntaxis-de-macros-4d",level:2},{value:"Sobre la etiqueta <code>&lt;method&gt;</code>",id:"sobre-la-etiqueta-method",level:2},{value:"Llamando macros",id:"llamando-macros",level:2},{value:"Men\xfa contextual y barra de herramientas",id:"men\xfa-contextual-y-barra-de-herramientas",level:3},{value:"Autocompletar",id:"autocompletar",level:3},{value:"Lista del editor de c\xf3digo",id:"lista-del-editor-de-c\xf3digo",level:3},{value:"Notas de compatibilidad",id:"notas-de-compatibilidad",level:2},{value:"Variables de selecci\xf3n de texto para m\xe9todos",id:"variables-de-selecci\xf3n-de-texto-para-m\xe9todos",level:3},{value:"Incompatibilidades relacionadas con el est\xe1ndar XML",id:"incompatibilidades-relacionadas-con-el-est\xe1ndar-xml",level:3}],m={toc:c};function p(e){var{components:a}=e,t=o(e,["components"]);return(0,n.kt)("wrapper",r({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Puede utilizar macrocomandos en sus m\xe9todos. El uso de macrocomandos permite ahorrar mucho tiempo durante la entrada de c\xf3digo."),(0,n.kt)("h2",r({},{id:"qu\xe9-es-una-macro"}),"\xbfQu\xe9 es una macro?"),(0,n.kt)("p",null,"Un macro-comando es una parte de c\xf3digo 4D accesible permanentemente y que puede insertarse en cualquier parte de sus m\xe9todos, sea cual sea el tipo de la base abierta. Las macros pueden contener todo tipo de texto, comandos y constantes 4D, as\xed como tambi\xe9n etiquetas especiales, que se sustituyen en el momento de la inserci\xf3n de la macro por valores derivados del contexto del m\xe9todo. Por ejemplo, una macro puede contener la etiqueta ",(0,n.kt)("inlineCode",{parentName:"p"},"<method_name/>;")," en el momento de la inserci\xf3n de la macro, esta etiqueta ser\xe1 sustituida por el nombre del m\xe9todo proyecto actual."),(0,n.kt)("p",null,"Las macros se almacenan en uno o varios archivos en formato XML (texto). Pueden colocarse en una lista del editor de c\xf3digo; tambi\xe9n pueden llamarse utilizando el men\xfa contextual del editor o utilizando la funci\xf3n de entrada predictiva."),(0,n.kt)("p",null,"Las macros 4D est\xe1n escritas en formato XML. Puede utilizar el archivo de macros por defecto de 4D tal como est\xe1 o modificarlo."),(0,n.kt)("h2",r({},{id:"ubicaci\xf3n-de-las-macros"}),"Ubicaci\xf3n de las macros"),(0,n.kt)("p",null,"4D carga las macros desde una carpeta llamada ",(0,n.kt)("strong",{parentName:"p"},"Macros v2"),". Las macros deben estar en forma de uno o varios archivos XML ubicados en esta carpeta."),(0,n.kt)("p",null,'La carpeta "Macros v2" puede ser ubicada:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"En la carpeta 4D activa de la m\xe1quina. Las macros son compartidas para todas las bases. ",(0,n.kt)("strong",{parentName:"li"},"Note:"),"\xa0The location of the active 4D folder varies according to the operating system used. For more information, refer to the description of the\xa0",(0,n.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4Dv19R4/4D/19-R4/Get-4D-folder.301-5739515.en.html"}),"Get 4D folder"),"\xa0command in the 4D\xa0",(0,n.kt)("em",{parentName:"li"},"Language Reference"),"\xa0manual."),(0,n.kt)("li",{parentName:"ul"},"Junto al archivo de estructura de la base. Las macros s\xf3lo se cargan para esta estructura."),(0,n.kt)("li",{parentName:"ul"},"Para los componentes: en la carpeta ",(0,n.kt)("strong",{parentName:"li"},"Components")," de la base. Las macros s\xf3lo se cargan si el componente est\xe1 instalado.")),(0,n.kt)("p",null,'Estas tres ubicaciones pueden utilizarse simult\xe1neamente: es posible instalar una carpeta "Macros v2" en cada una de ellas. Las macros se cargar\xe1n en el siguiente orden: carpeta 4D, archivo de estructura, componente 1... componente X.'),(0,n.kt)("h2",r({},{id:"macros-por-defecto"}),"Macros por defecto"),(0,n.kt)("p",null,'4D ofrece un conjunto de macros por defecto que contienen, por ejemplo, palabras clave de flujo de control. Estas macros se incluyen en el archivo por defecto "',(0,n.kt)("em",{parentName:"p"},"Macros.xml"),'", ubicado en la carpeta "Macros v2" que se crea en la carpeta 4D activa de la m\xe1quina durante el arranque inicial de 4D.'),(0,n.kt)("p",null,"Posteriormente, puede modificar este archivo o el contenido de la carpeta como desee (ver el p\xe1rrafo siguiente). En caso de problemas con esta carpeta, se puede borrar y 4D la volver\xe1 a crear en el siguiente inicio."),(0,n.kt)("h2",r({},{id:"a\xf1adir-macros-personalizadas"}),"A\xf1adir macros personalizadas"),(0,n.kt)("p",null,'Puede a\xf1adir macros personalizadas en el archivo "Macros.xml" utilizando un editor de texto est\xe1ndar o por programaci\xf3n. Tambi\xe9n puede a\xf1adir archivos XML de macros personalizados en esta carpeta.'),(0,n.kt)("p",null,"En modo local, el archivo de macros puede abrirse mientras se utiliza 4D. La lista de macros disponibles se actualiza en cada evento de activaci\xf3n de 4D. Por ejemplo, es posible traer el editor de texto al primer plano, modificar el archivo de macros y, a continuaci\xf3n, volver al m\xe9todo: la nueva macro estar\xe1 entonces disponible en el Editor de c\xf3digo."),(0,n.kt)("p",null,"No se muestran macros vac\xedas o err\xf3neas."),(0,n.kt)("h3",r({},{id:"comprobaci\xf3n-de-la-sintaxis-de-las-macros-personalizadas"}),"Comprobaci\xf3n de la sintaxis de las macros personalizadas"),(0,n.kt)("p",null,"Los archivos de macrocomandos de 4D deben ser conformes al est\xe1ndar XML. Esto significa, m\xe1s concretamente, que las declaraciones XML ",(0,n.kt)("inlineCode",{parentName:"p"},'<?xml version="1.0" ...?>')," y la declaraci\xf3n de documento ",(0,n.kt)("inlineCode",{parentName:"p"},'<!DOCTYPE macros SYSTEM "http://www.4d.com/dtd/2007/macros.dtd">')," son obligatorias al principio de un archivo de macros para que pueda cargarse. Se soportan los diferentes tipos de codificaci\xf3n XML. No obstante, se recomienda utilizar una codificaci\xf3n compatible con Mac/PC (UTF-8). 4D ofrece un DTD que puede utilizarse para validar los archivos de macros. Este archivo se encuentra en la siguiente ubicaci\xf3n:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Windows: \\Resources\\DTD\\macros.dtd"),(0,n.kt)("li",{parentName:"ul"},"Mac OS: :Contents:Resources:DTD:macros.dtd")),(0,n.kt)("p",null,"Si un archivo de macros no contiene las declaraciones o no puede validarse, no se carga."),(0,n.kt)("h2",r({},{id:"s\xedntaxis-de-macros-4d"}),"S\xedntaxis de macros 4D"),(0,n.kt)("p",null,'Las macros 4D se crean utilizando etiquetas XML personalizadas llamadas "elementos"'),(0,n.kt)("p",null,"Algunas etiquetas indican el inicio y el final de la definici\xf3n (etiquetas dobles del tipo ",(0,n.kt)("inlineCode",{parentName:"p"},"<tag> </tag>"),"), otras se sustituyen por valores de contexto de inserci\xf3n (",(0,n.kt)("inlineCode",{parentName:"p"},"<tag/>"),")."),(0,n.kt)("p",null,"De conformidad con las especificaciones XML, algunas etiquetas de elementos pueden incluir atributos. A menos que se indique lo contrario, estos atributos son opcionales y se utiliza un valor por defecto cuando se omiten. La sintaxis de los elementos con atributos es la siguiente:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Etiquetas dobles: ",(0,n.kt)("inlineCode",{parentName:"li"},'<tag attribute="value"> </macro>')),(0,n.kt)("li",{parentName:"ul"},"Etiquetas individuales: ",(0,n.kt)("inlineCode",{parentName:"li"},'<tag attribute="value"/>'))),(0,n.kt)("p",null,"If the element accepts several attributes, you can group them in the same line of command, separated by a space: ",(0,n.kt)("inlineCode",{parentName:"p"},'\\&#060;tag attribute1="value" attribute2="value" attribute3="value"... &#062;')),(0,n.kt)("p",null,"Aqu\xed est\xe1 la lista de etiquetas y su modo de uso:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Etiquetas de elementos")),(0,n.kt)("th",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Descripci\xf3n")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<macros> </macros>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Inicio y fin del archivo macro (etiqueta obligatoria).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<macro> </macro>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Inicio y fin de la definici\xf3n de una macro y sus atributos.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Atributos"),":")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"- name: Nombre**de la macro tal y como aparece en los men\xfas y en las listas del Editor de c\xf3digo (atributo obligatorio).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"- type_ahead_text: Cadena de caracteres*",(0,n.kt)("em",{parentName:"td"}," que debe introducirse para llamar a la macro utilizando la funci\xf3n type-ahead (tambi\xe9n conocida como autocompletar)"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'- in_menu: booleano que indica si la macro se puede llamar utilizando el men\xfa contextual*. Valores = "true" (por defecto) o "false"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'- type_ahead: Booleano que indica si la macro puede llamarse utilizando la funci\xf3n de tecleo predictivo (o autocompletar)*. Valores = "true" (por defecto) o "false"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'- method_event: se utiliza para activar la llamada autom\xe1tica de la macro en funci\xf3n de la fase actualde manejo de cada m\xe9todo (creaci\xf3n, cierre, etc.). Valores = "on_load": la macro se dispara al abrir cada m\xe9todo, "on_save": la macro se dispara al guardar cada m\xe9todo (cierre de un m\xe9todo modificado o guardado utilizando el comando File>Save, "on_create": la macro se dispara cuando se crea cada m\xe9todo, "on_close": la macro se dispara cuando se cierra cada m\xe9todo.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'"on_save" y "on_close" pueden utilizarse conjuntamente --- en otras palabras, ambos eventos se generan cuando se cierra un m\xe9todo modificado. Por otro lado, "on_create" y "on_load" nunca se generan de forma consecutiva. Este atributo puede utilizarse, por ejemplo, para preformatear los m\xe9todos cuando se crean (comentarios en el \xe1rea de encabezado) o para registrar informaci\xf3n como la fecha y la hora en que se cierran.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'- version: utilizada para activar el nuevo modo de soportar selecciones de texto para la macro (ver m\xe1s adelante la secci\xf3n "Acerca de la etiqueta ',(0,n.kt)("inlineCode",{parentName:"td"},"<method>"),'"). Para activar este nuevo modo, pase el valor "2". Si omite este atributo o pasa la version="1", se conserva el modo anterior.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'- in_toolbar: booleano que indica si la macro debe estar presente en el men\xfa del bot\xf3n Macro de la barra de herramientas. Valores= "true" (por defecto) o "false".')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<selection/>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Etiqueta reemplazada por el texto seleccionado cuando la macro se inserta. La selecci\xf3n puede estar vac\xeda.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<text> </text>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Inicio y fin del c\xf3digo que debe insertarse en el m\xe9todo. Se a\xf1adir\xe1 un retorno de carro antes y despu\xe9s del c\xf3digo.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<method> </method>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Inicio y fin del nombre del m\xe9todo proyecto y de su par\xe1metro (opcional). El m\xe9todo se ejecuta cuando se llama a la macro. Puede pasar un par\xe1metro de la forma ("param1;param2;..."). Este par\xe1metro se recibir\xe1 en el m\xe9todo utilizando las variables $1, $2, etc. Para m\xe1s informaci\xf3n sobre esta etiqueta, consulte la secci\xf3n "Acerca de la etiqueta ',(0,n.kt)("inlineCode",{parentName:"td"},"<method>"),'".')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<caret/>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Ubicaci\xf3n del punto de inserci\xf3n en el c\xf3digo una vez insertada la macro.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<user_4D/>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Etiqueta reemplazada por el nombre del usuario 4D actual.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<user_os/>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Etiqueta reemplazada por el nombre de usuario actual del sistema.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<method_name/>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Etiqueta reemplazada por el nombre del m\xe9todo actual.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<method_path/>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Etiqueta sustituida por la sintaxis de la ruta (tal como la devuelve ",(0,n.kt)("a",r({parentName:"td"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1164.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"METHOD Get path"))," del m\xe9todo actual.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<date/>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Etiqueta reemplazada por la fecha actual.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Atributo"),":")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"- format: formato 4D utilizado para mostrar la fecha. Si no se define ning\xfan formato, se utilizar\xe1 el formato predeterminado. Valores = n\xfamero de formato 4D (0 a 8).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<time/>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Etiqueta reemplazada por la hora actual.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Atributo"),":")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"- format: formato 4D utilizado para mostrar la hora. Si no se define ning\xfan formato, se utilizar\xe1 el formato predeterminado. Valores = n\xfamero de formato 4D (0 a 6).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<clipboard/>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Etiqueta reemplazada por el contenido del portapapeles.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Atributo"),":")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"- index: portapapeles a pegar. Valores = n\xfamero del portapapeles (0 a 9).")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Macros can be called using the context menu of the Code Editor or using the type-ahead function (see the following section).\\\n** If you want to conform to XML language specifications, you must not use extended characters (accented characters, quotation marks, etc.)."),(0,n.kt)("li",{parentName:"ul"},"Si desea ajustarse a las especificaciones del lenguaje XML, no debe utilizar caracteres extendidos (caracteres acentuados, comillas, etc.).")),(0,n.kt)("p",null,"Este es un ejemplo de definici\xf3n de una macro:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Contenido de la macro")),(0,n.kt)("th",r({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Comentarios")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'<?xml version="1.0"...?>')),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Declaraci\xf3n XML")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<!DOCTYPE macros SYSTEM>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Declaraci\xf3n del documento")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<macros>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Inicio del archivo XML de macros")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'<macro name="RecordLoop">')),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Inicio de la definici\xf3n y del nombre de la macro")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"<text>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Inicio del c\xf3digo de la macro")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"For($i;1;Records in selection(",(0,n.kt)("inlineCode",{parentName:"td"},"<Selection/>"),"))"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"La etiqueta ",(0,n.kt)("inlineCode",{parentName:"td"},"<Selection/>")," ser\xe1 reemplazada por el c\xf3digo seleccionado en el m\xe9todo 4D al momento de la inserci\xf3n de la macro (por ejemplo, un nombre de tabla)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"SAVE RECORD(",(0,n.kt)("inlineCode",{parentName:"td"},"<Selection/>"),")"),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"NEXT RECORD(",(0,n.kt)("inlineCode",{parentName:"td"},"<Selection/>"),")"),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"End for"),(0,n.kt)("td",r({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"</text>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fin del c\xf3digo macro")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"</macro>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fin de la definici\xf3n de macro")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"</macros>")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fin del archivo XML de macros")))),(0,n.kt)("h2",r({},{id:"sobre-la-etiqueta-method"}),"Sobre la etiqueta ",(0,n.kt)("inlineCode",{parentName:"h2"},"<method>")),(0,n.kt)("p",null,"La etiqueta ",(0,n.kt)("inlineCode",{parentName:"p"},"<method>")," permite generar y utilizar macrocomandos que ejecutan m\xe9todos proyecto 4D. Esto permite a los desarrolladores crear funciones sofisticadas que pueden distribuirse mediante macrocomandos asociados a los componentes. For example, the following macro will cause the\xa0",(0,n.kt)("em",{parentName:"p"},"MyMethod"),"\xa0method to be executed with the name of the current method as parameter:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'<method>MyMethod("<method_name/>")</method>')),(0,n.kt)("p",null,"El c\xf3digo de un m\xe9todo llamado se ejecuta en un nuevo proceso. Este proceso se cierra una vez se ejecuta el m\xe9todo."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:"),"\xa0The structure process remains frozen until the called method execution is completed. Debe asegurarse de que la ejecuci\xf3n es r\xe1pida y de que no hay riesgo de que bloquee la aplicaci\xf3n. If this occurs, use the\xa0",(0,n.kt)("strong",{parentName:"p"},"Ctrl+F8"),"\xa0(Windows) or\xa0",(0,n.kt)("strong",{parentName:"p"},"Command+F8"),'\xa0(Mac OS) command to "kill" the process.')),(0,n.kt)("h2",r({},{id:"llamando-macros"}),"Llamando macros"),(0,n.kt)("p",null,"Por defecto, las macros pueden llamarse mediante el men\xfa contextual o la barra de herramientas del editor de c\xf3digo, de la funci\xf3n de autocompletar o de una lista espec\xedfica en la parte inferior de la ventana del editor de c\xf3digo."),(0,n.kt)("p",null,"Tenga en cuenta que para cada macro es posible restringir la posibilidad de llamarla utilizando el men\xfa contextual y/o la funci\xf3n de autocompletar."),(0,n.kt)("h3",r({},{id:"men\xfa-contextual-y-barra-de-herramientas"}),"Men\xfa contextual y barra de herramientas"),(0,n.kt)("p",null,"By default, all macros can be called via the context menu of the Code Editor (using the\xa0",(0,n.kt)("strong",{parentName:"p"},"Insert macro"),"\xa0hierarchical command) or the ",(0,n.kt)("strong",{parentName:"p"},"Macros")," button of the toolbar."),(0,n.kt)("p",null,"The\xa0",(0,n.kt)("em",{parentName:"p"},"in_menu"),"\xa0attribute of the ",(0,n.kt)("inlineCode",{parentName:"p"},"<macro>")," tag is used to set whether or not the macro appears in this menu."),(0,n.kt)("p",null,'En el men\xfa contextual, las macros se muestran en el orden del archivo "Macros.xml" y de cualquier archivo XML adicional. Por lo tanto, es posible cambiar el orden modificando estos archivos.'),(0,n.kt)("h3",r({},{id:"autocompletar"}),"Autocompletar"),(0,n.kt)("p",null,"By default, all macros are accessible using the autocomplete (aka type-ahead) function (see\xa0",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/20-R3/code-editor/write-class-method"}),"Writing a method"),"). The\xa0",(0,n.kt)("em",{parentName:"p"},"type_ahead"),"\xa0attribute of the ",(0,n.kt)("inlineCode",{parentName:"p"},"<macro>")," tag can be used to exclude a macro from this type of operation."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:"),"\xa0If the macro contains the ",(0,n.kt)("inlineCode",{parentName:"p"},"<selection/>")," tag, it will not appear in the autocomplete pop-up window."),(0,n.kt)("h3",r({},{id:"lista-del-editor-de-c\xf3digo"}),"Lista del editor de c\xf3digo"),(0,n.kt)("p",null,"You can display your macros in a list of the Code Editor (see\xa0",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/20-R3/code-editor/write-class-method"}),"Writing a method"),"). Basta con hacer doble clic en el nombre de una macro de la lista para llamarla. No es posible excluir una macro espec\xedfica de esta lista."),(0,n.kt)("h2",r({},{id:"notas-de-compatibilidad"}),"Notas de compatibilidad"),(0,n.kt)("p",null,"El soporte de macros puede cambiar de una versi\xf3n de 4D a otra. Con el fin de mantener la compatibilidad entre las diferentes versiones y conservar sus personalizaciones, 4D no elimina ninguna versi\xf3n anterior. Si desea utilizar las \xfaltimas funciones disponibles, debe adaptar su versi\xf3n en consecuencia."),(0,n.kt)("h3",r({},{id:"variables-de-selecci\xf3n-de-texto-para-m\xe9todos"}),"Variables de selecci\xf3n de texto para m\xe9todos"),(0,n.kt)("p",null,"It is recommended to manage text selections using the\xa0",(0,n.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv19R4/4D/19-R4/GET-MACRO-PARAMETER.301-5739797.en.html"}),"GET MACRO PARAMETER"),"and\xa0",(0,n.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv19R4/4D/19-R4/SET-MACRO-PARAMETER.301-5739788.en.html"}),"SET MACRO PARAMETER"),"\xa0commands. Estos comandos pueden utilizarse para superar la partici\xf3n de los espacios de ejecuci\xf3n del proyecto local/componente y permitir as\xed la creaci\xf3n de componentes dedicados a la gesti\xf3n de macros. Para activar este modo para una macro, debe declarar el atributo Version con el valor 2 en el elemento Macro. In this case, 4D no longer manages the predefined variables _textSel,_textReplace, etc. and the\xa0",(0,n.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv19R4/4D/19-R4/GET-MACRO-PARAMETER.301-5739797.en.html"}),"GET MACRO PARAMETER"),"and\xa0",(0,n.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv19R4/4D/19-R4/SET-MACRO-PARAMETER.301-5739788.en.html"}),"SET MACRO PARAMETER"),"\xa0are used. Este atributo debe declararse as\xed:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'<macro name="MyMacro" version="2">'),(0,n.kt)("br",null)," ",(0,n.kt)("inlineCode",{parentName:"p"},"--- Text of the macro ---"),(0,n.kt)("br",null)," ",(0,n.kt)("inlineCode",{parentName:"p"},"</macro>")),(0,n.kt)("p",null,"Si no se pasa este atributo, el modo anterior se mantiene."),(0,n.kt)("h3",r({},{id:"incompatibilidades-relacionadas-con-el-est\xe1ndar-xml"}),"Incompatibilidades relacionadas con el est\xe1ndar XML"),(0,n.kt)("p",null,"Para que los archivos de macros respeten la norma XML, deben observarse reglas sint\xe1cticas estrictas. Esto puede provocar incompatibilidades con el c\xf3digo de las macros creadas con versiones anteriores e impedir la carga de archivos XML. Las siguientes son las principales fuentes de mal funcionamiento:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Los comentarios del tipo "// mi comentario", permitidos dentro de los elementos ',(0,n.kt)("inlineCode",{parentName:"li"},"<macro>")," en versiones anteriores de 4D, no son compatibles con la sintaxis XML. Las l\xedneas de comentarios deben respetar la forma est\xe1ndar ",(0,n.kt)("inlineCode",{parentName:"li"},'"\x3c!-- mi comentario --\x3e"'),"."),(0,n.kt)("li",{parentName:"ul"},"Los s\xedmbolos ",(0,n.kt)("inlineCode",{parentName:"li"},"<>")," utilizados m\xe1s particularmente para los nombres de objetos interprocesos deben codificarse. Por ejemplo, la variable ",(0,n.kt)("inlineCode",{parentName:"li"},"<>params")," debe escribirse ",(0,n.kt)("inlineCode",{parentName:"li"},"&lt;>params"),"."),(0,n.kt)("li",{parentName:"ul"},"La etiqueta de declaraci\xf3n inicial ",(0,n.kt)("inlineCode",{parentName:"li"},"<macros>")," pod\xeda omitirse en versiones anteriores de 4D. Ahora es obligatorio; de lo contrario, el archivo no se cargar\xe1.")))}p.isMDXComponent=!0}}]);