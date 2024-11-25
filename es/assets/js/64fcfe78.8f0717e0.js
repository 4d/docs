"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49803"],{160686:function(e,s,n){n.r(s),n.d(s,{metadata:()=>o,contentTitle:()=>t,default:()=>h,assets:()=>d,toc:()=>a,frontMatter:()=>r});var o=JSON.parse('{"id":"FormEditor/stylesheets","title":"Hojas de estilo","description":"Generalidades","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-18/FormEditor/createStylesheet.md","sourceDirName":"FormEditor","slug":"/FormEditor/stylesheets","permalink":"/docs/es/18/FormEditor/stylesheets","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2FcreateStylesheet.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"stylesheets","title":"Hojas de estilo"},"sidebar":"docs","previous":{"title":"Librer\xedas de objetos","permalink":"/docs/es/18/FormEditor/objectLibrary"},"next":{"title":"Im\xe1genes","permalink":"/docs/es/18/FormEditor/pictures"}}'),l=n("785893"),i=n("250065");let r={id:"stylesheets",title:"Hojas de estilo"},t=void 0,d={},a=[{value:"Generalidades",id:"generalidades",level:2},{value:"Archivos hojas de estilo",id:"archivos-hojas-de-estilo",level:3},{value:"Arquitectura de las hojas de estilo",id:"arquitectura-de-las-hojas-de-estilo",level:3},{value:"Selectores de hojas de estilo",id:"selectores-de-hojas-de-estilo",level:2},{value:"Tipo de objeto",id:"tipo-de-objeto",level:3},{value:"Nombre del objeto",id:"nombre-del-objeto",level:3},{value:"Class",id:"class",level:3},{value:"Todos los objetos",id:"todos-los-objetos",level:3},{value:"Atributos espec\xedficos",id:"atributos-espec\xedficos",level:3},{value:"Sintaxis soportadas",id:"sintaxis-soportadas",level:4},{value:"Ejemplos",id:"ejemplos",level:4},{value:"Declaraciones de hojas de estilo",id:"declaraciones-de-hojas-de-estilo",level:2},{value:"Mapa de atributos",id:"mapa-de-atributos",level:3},{value:"Valores de atributos espec\xedficos",id:"valores-de-atributos-espec\xedficos",level:3},{value:"Orden de prioridad",id:"orden-de-prioridad",level:2},{value:"JSON vs Hoja de estilo",id:"json-vs-hoja-de-estilo",level:3},{value:"Hojas de estilo m\xfaltiples",id:"hojas-de-estilo-m\xfaltiples",level:3},{value:"Creaci\xf3n o modificaci\xf3n de hojas de estilo",id:"creaci\xf3n-o-modificaci\xf3n-de-hojas-de-estilo",level:2}];function c(e){let s={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h2,{id:"generalidades",children:"Generalidades"}),"\n",(0,l.jsx)(s.p,{children:"Una hoja de estilo agrupa una combinaci\xf3n de atributos de objetos formulario, desde los atributos de texto hasta casi todos los atributos de objeto disponibles."}),"\n",(0,l.jsx)(s.p,{children:"Adem\xe1s de armonizar la interfaz de sus aplicaciones, las hojas de estilo ofrecen tres grandes ventajas:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Permite ahorrar tiempo durante el desarrollo: para cada objeto tiene un grupo espec\xedfico de par\xe1metros dentro de una sola operaci\xf3n."}),"\n",(0,l.jsx)(s.li,{children:"Facilita el mantenimiento: las hojas de estilo modifican la apariencia de todos los objetos que las utilicen, por lo que cambiar el tama\xf1o de la fuente en una hoja de estilo cambiar\xe1 el tama\xf1o de la fuente para todos los objetos que utilicen esta misma hoja de estilo."}),"\n",(0,l.jsx)(s.li,{children:"Control del desarrollo multiplataforma: las hojas de estilo se pueden aplicar a las plataformas macOS y Windows, s\xf3lo a macOS o s\xf3lo a Windows. Cuando se aplica una hoja de estilo, 4D utiliza autom\xe1ticamente la hoja de estilo apropiada."}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"archivos-hojas-de-estilo",children:"Archivos hojas de estilo"}),"\n",(0,l.jsx)(s.p,{children:"4D acepta tres archivos espec\xedficos de hojas de estilo:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Hoja de estilo"}),(0,l.jsx)(s.th,{children:"Plataforma"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"styleSheets.css"}),(0,l.jsx)(s.td,{children:"Hoja de estilo global por defecto para macOS y Windows"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"styleSheets_mac.css"}),(0,l.jsx)(s.td,{children:"Para definir los estilos de atributos espec\xedficos de macOS \xfanicamente"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"styleSheets_windows.css"}),(0,l.jsx)(s.td,{children:"Para definir los estilos de atributos espec\xedficos para Windows \xfanicamente"})]})]})]}),"\n",(0,l.jsx)(s.p,{children:'Estos archivos se almacenan en la carpeta "/SOURCES" del proyecto.'}),"\n",(0,l.jsx)(s.h3,{id:"arquitectura-de-las-hojas-de-estilo",children:"Arquitectura de las hojas de estilo"}),"\n",(0,l.jsx)(s.p,{children:"Aunque adaptadas para satisfacer las necesidades espec\xedficas de los formularios 4D, las hojas de estilo de las bases proyecto suelen seguir la sintaxis y la gram\xe1tica CSS2."}),"\n",(0,l.jsx)(s.p,{children:"Cada regla de estilo de una hoja de estilo contiene dos partes:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["un ",(0,l.jsx)(s.em,{children:"selector"}),' - Un selector define d\xf3nde aplicar el estilo. 4D soporta los selectores "object type", "object name", "class", "all objects" y "attribute value".']}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["una ",(0,l.jsx)(s.em,{children:"declaraci\xf3n"})," - La declaraci\xf3n define el estilo real a aplicar. Se pueden agrupar varias l\xedneas de declaraci\xf3n para formar un bloque de declaraci\xf3n. Cada l\xednea de un bloque de declaraci\xf3n CSS debe terminar con un punto y coma, y todo el bloque debe estar rodeado de llaves."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"selectores-de-hojas-de-estilo",children:"Selectores de hojas de estilo"}),"\n",(0,l.jsx)(s.h3,{id:"tipo-de-objeto",children:"Tipo de objeto"}),"\n",(0,l.jsx)(s.p,{children:"El tipo de objeto define el tipo de objeto al que hay que aplicar el estilo, y corresponde al selector de elementos CSS."}),"\n",(0,l.jsx)(s.p,{children:"Especifique el tipo de objeto, luego entre llaves, declare el estilo o los estilos a aplicar."}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsxs)(s.p,{children:["El tipo objeto corresponde a la propiedad JSON ",(0,l.jsx)(s.a,{href:"/docs/es/18/FormObjects/propertiesObject#type",children:"tipo"})," de los objetos formulario."]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["En el siguiente ejemplo, todos los objetos del tipo ",(0,l.jsx)(s.em,{children:"bot\xf3n"})," mostrar\xe1n el texto en la fuente Helvetica Neue, con un tama\xf1o de 20 p\xedxeles:"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:"button {\n    font-family: Helvetica Neue;\n    font-size: 20px;\n}\n"})}),"\n",(0,l.jsx)(s.p,{children:'Para aplicar el mismo estilo a varios tipos de objetos, especifique los tipos de objetos separados por un "," y luego, entre llaves, declare el o los estilos a aplicar:'}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:"text, input {\n  text-align: left;\n  stroke: grey;\n}\n"})}),"\n",(0,l.jsx)(s.h3,{id:"nombre-del-objeto",children:"Nombre del objeto"}),"\n",(0,l.jsxs)(s.p,{children:["El nombre del objeto corresponde al ",(0,l.jsx)(s.strong,{children:"selector de ID"})," CSS y define un objeto espec\xedfico al que hay que dar estilo, ya que el nombre del objeto es \xfanico dentro del formulario."]}),"\n",(0,l.jsx)(s.p,{children:'Designe el objeto con un car\xe1cter "#" antes del nombre del objeto y, a continuaci\xf3n, entre llaves, declare el o los estilos a aplicar.'}),"\n",(0,l.jsx)(s.p,{children:'En el siguiente ejemplo, el texto del objeto con el nombre "okButton" se mostrar\xe1 en fuente Helvetica Neue, con un tama\xf1o de 20 p\xedxeles:'}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:"#okButton {\n    font-family: Helvetica Neue;\n    font-size: 20px;\n}\n"})}),"\n",(0,l.jsx)(s.h3,{id:"class",children:"Class"}),"\n",(0,l.jsxs)(s.p,{children:["Class corresponde al ",(0,l.jsx)(s.strong,{children:"selector class"})," CSS y define el estilo para todos los objetos formulario con el atributo ",(0,l.jsx)(s.code,{children:"class"}),"."]}),"\n",(0,l.jsx)(s.p,{children:'Puede especificar las clases a utilizar con un caracter "." seguido del nombre de la clase, y entre llaves, declarar el o los estilos a aplicar.'}),"\n",(0,l.jsxs)(s.p,{children:["En el siguiente ejemplo, el texto de todos los objetos con el nombre de la clase ",(0,l.jsx)(s.code,{children:"okButtons"})," se mostrar\xe1 en la fuente Helvetica Neue, con un tama\xf1o de 20 p\xedxeles, alineado al centro:"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:".okButtons {\n    font-family: Helvetica Neue;\n    font-size: 20px;\n    text-align: center;\n}\n"})}),"\n",(0,l.jsx)(s.p,{children:'Para indicar que un estilo debe aplicarse s\xf3lo a los objetos de un tipo determinado, especifique el tipo seguido de "." y el nombre de la clase, y luego, entre llaves, declare el estilo o los estilos a aplicar.'}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:"text.center {\n  text-align: center;\n  stroke: red;\n}\n"})}),"\n",(0,l.jsxs)(s.p,{children:["En la descripci\xf3n del formulario 4D, se asocia un nombre de clase a un objeto mediante el atributo ",(0,l.jsx)(s.code,{children:"class"}),". Este atributo contiene uno o varios nombres de clase, separados por un espacio:"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:'class: "okButtons important"       \n'})}),"\n",(0,l.jsx)(s.h3,{id:"todos-los-objetos",children:"Todos los objetos"}),"\n",(0,l.jsxs)(s.p,{children:["En correspondencia con el selector CSS ",(0,l.jsx)(s.strong,{children:"universal"}),', el car\xe1cter "*" indica que el siguiente estilo se aplicar\xe1 a todos los objetos del formulario.']}),"\n",(0,l.jsx)(s.p,{children:'Indique que un estilo debe aplicarse a todos los objetos formulario con el car\xe1cter "*" y, a continuaci\xf3n, entre llaves, declare el o los estilos que deben aplicarse.'}),"\n",(0,l.jsx)(s.p,{children:"En el siguiente ejemplo, todos los objetos tendr\xe1n un fondo gris:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:"* {\n  fill: gray;\n}\n"})}),"\n",(0,l.jsx)(s.h3,{id:"atributos-espec\xedficos",children:"Atributos espec\xedficos"}),"\n",(0,l.jsxs)(s.p,{children:["Los estilos correspondientes a los ",(0,l.jsx)(s.strong,{children:"selectores de atributos"})," CSS se pueden aplicar a todos los objetos formulario con un atributo espec\xedfico."]}),"\n",(0,l.jsx)(s.p,{children:"Especifique el atributo entre corchetes y, a continuaci\xf3n, entre llaves, declare el estilo o los estilos a aplicar."}),"\n",(0,l.jsx)(s.h4,{id:"sintaxis-soportadas",children:"Sintaxis soportadas"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Sintaxis"}),(0,l.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"[attribute]"}),(0,l.jsxs)(s.td,{children:["coincide con objetos con el ",(0,l.jsx)(s.code,{children:"attribute"})]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:'[attribute="value"]'}),(0,l.jsxs)(s.td,{children:["coincide con objetos cuyo valor del ",(0,l.jsx)(s.code,{children:"attribute"}),' contenga exactamente el "valor" especificado']})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:'[attribute~="value"]'}),(0,l.jsxs)(s.td,{children:["coincide con los objetos con el valor del ",(0,l.jsx)(s.code,{children:"attribute"}),' que contiene el "valor" entre una lista de palabras separadas por espacios']})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:'[attribute|="value"]'}),(0,l.jsxs)(s.td,{children:["coincide con objetos con un ",(0,l.jsx)(s.code,{children:"attribute"}),' cuyo valor empieza por "valor"']})]})]})]}),"\n",(0,l.jsx)(s.h4,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,l.jsxs)(s.p,{children:["Todos los objetos con el atributo ",(0,l.jsx)(s.code,{children:"borderStyle"})," tendr\xe1n l\xedneas moradas:"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:"[borderStyle]\n{\n     stroke: purple;\n}\n"})}),"\n",(0,l.jsx)(s.p,{children:'Todos los objetos de tipo texto con un atributo texto cuyo valor sea "Hello" tendr\xe1n letras azules:'}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:"text[text=Hello]\n{\n     stroke: blue;\n}\n"})}),"\n",(0,l.jsx)(s.p,{children:'Todos los objetos con un atributo texto cuyo valor sea "Hello" tendr\xe1n letras azules:'}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:"[text~=Hello]\n{\n     stroke: blue;\n}\n\n"})}),"\n",(0,l.jsx)(s.p,{children:'Todos los objetos de tipo texto con un atributo texto cuyo valor comience por "Hello" tendr\xe1n letras azules:'}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:"text[text|=Hello]\n{\n     stroke: yellow;\n}\n"})}),"\n",(0,l.jsx)(s.h2,{id:"declaraciones-de-hojas-de-estilo",children:"Declaraciones de hojas de estilo"}),"\n",(0,l.jsx)(s.p,{children:"La mayor\xeda de los atributos del objeto formulario pueden ser definidos dentro de una hoja de estilo, excepto los siguientes atributos:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:'"method"'}),"\n",(0,l.jsx)(s.li,{children:'"type"'}),"\n",(0,l.jsx)(s.li,{children:'"class"'}),"\n",(0,l.jsx)(s.li,{children:'"event"'}),"\n",(0,l.jsx)(s.li,{children:"choiceList, excludedList, labels, list, requiredList (list type)"}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["Los atributos del objeto formulario pueden declararse con su nombre JSON como atributos CSS (sin incluir los tipos de objetos, m\xe9todos, eventos y listas). Para m\xe1s informaci\xf3n, consulte la p\xe1gina ",(0,l.jsx)(s.strong,{children:"Formularios din\xe1micos"})," en el Manual de Dise\xf1o."]}),"\n",(0,l.jsx)(s.h3,{id:"mapa-de-atributos",children:"Mapa de atributos"}),"\n",(0,l.jsx)(s.p,{children:"Los atributos listados a continuaci\xf3n pueden aceptar el nombre 4D o el nombre CSS."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"4D"}),(0,l.jsx)(s.th,{children:"CSS"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"borderStyle"}),(0,l.jsx)(s.td,{children:"border-style"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"fill"}),(0,l.jsx)(s.td,{children:"background-color"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"fontFamily"}),(0,l.jsx)(s.td,{children:"font-family"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"fontSize"}),(0,l.jsx)(s.td,{children:"font-size"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"fontStyle"}),(0,l.jsx)(s.td,{children:"font-style"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"fontWeight"}),(0,l.jsx)(s.td,{children:"font-weight"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"stroke"}),(0,l.jsx)(s.td,{children:"color"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"textAlign"}),(0,l.jsx)(s.td,{children:"text-align"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"textDecoration"}),(0,l.jsx)(s.td,{children:"text-decoration"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"verticalAlign"}),(0,l.jsx)(s.td,{children:"vertical-align"})]})]})]}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsx)(s.p,{children:'Los valores espec\xedficos 4D (*por ejemplo, *, "hundido") no se soportan cuando se utilizan nombres de atributos CSS.'}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"valores-de-atributos-espec\xedficos",children:"Valores de atributos espec\xedficos"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["Para los atributos ",(0,l.jsx)(s.code,{children:"icon"}),", ",(0,l.jsx)(s.code,{children:"picture"})," y ",(0,l.jsx)(s.code,{children:"customBackgroundPicture"})," que soportan una ruta a una imagen, la sintaxis es:"]}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:'icon: url("/RESOURCES/Images/Buttons/edit.png"); /* ruta absoluta */\nicon: url("edit.png"); /* ruta relativa al archivo del formulario */\n'})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["Para ",(0,l.jsx)(s.code,{children:"fill"}),", ",(0,l.jsx)(s.code,{children:"stroke"})," , ",(0,l.jsx)(s.code,{children:"alternateFill"})," , ",(0,l.jsx)(s.code,{children:"horizontalLineStroke"})," y ",(0,l.jsx)(s.code,{children:"verticalLineStroke"}),", se soportan tres sintaxis:"]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["nombre del color css: ",(0,l.jsx)(s.code,{children:"fill: red;"})]}),"\n",(0,l.jsxs)(s.li,{children:["valor hexad\xe9cimal: ",(0,l.jsx)(s.code,{children:"fill: #FF0000;"})]}),"\n",(0,l.jsxs)(s.li,{children:["funci\xf3n ",(0,l.jsx)(s.code,{children:"rgb()"}),": ",(0,l.jsx)(s.code,{children:"fill:rgb(255,0,0)"})]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"Si una cadena utiliza caracteres prohibidos en CSS, puede rodear la cadena con comillas simples o dobles. Por ejemplo:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["una referencia xliff: ",(0,l.jsx)(s.code,{children:'tooltip: ":xliff:CommonMenuFile";'})]}),"\n",(0,l.jsxs)(s.li,{children:["un datasource con la expresi\xf3n de campo: ",(0,l.jsx)(s.code,{children:'dataSource: "[Table_1:1]ID:1";'})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"orden-de-prioridad",children:"Orden de prioridad"}),"\n",(0,l.jsx)(s.p,{children:"Los proyectos 4D priorizan las definiciones de estilo en conflicto, primero por la definici\xf3n del formulario y luego por las hojas de estilo."}),"\n",(0,l.jsx)(s.h3,{id:"json-vs-hoja-de-estilo",children:"JSON vs Hoja de estilo"}),"\n",(0,l.jsx)(s.p,{children:"Si un atributo est\xe1 definido en la descripci\xf3n del formulario JSON y en una hoja de estilo, 4D utilizar\xe1 el valor del archivo JSON."}),"\n",(0,l.jsxs)(s.p,{children:["Para anular este comportamiento, el valor del estilo debe ir seguido de una declaraci\xf3n ",(0,l.jsx)(s.code,{children:"!important"}),"."]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Ejemplo 1:"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Descripci\xf3n del formulario JSON"}),(0,l.jsx)(s.th,{children:"Hoja de estilo"}),(0,l.jsx)(s.th,{children:"4D muestra"})]})}),(0,l.jsx)(s.tbody,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:'"text": "Button",'})}),(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"text: Edit;"})}),(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:'"Button"'})})]})})]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Ejemplo 2:"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Descripci\xf3n del formulario JSON"}),(0,l.jsx)(s.th,{children:"Hoja de estilo"}),(0,l.jsx)(s.th,{children:"4D muestra"})]})}),(0,l.jsx)(s.tbody,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:'"text": "Button",'})}),(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"text: Edit !important;"})}),(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:'"Edit"'})})]})})]}),"\n",(0,l.jsx)(s.h3,{id:"hojas-de-estilo-m\xfaltiples",children:"Hojas de estilo m\xfaltiples"}),"\n",(0,l.jsx)(s.p,{children:"Durante la ejecuci\xf3n, 4D prioriza autom\xe1ticamente las hojas de estilo en el siguiente orden:"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["El formulario 4D cargar\xe1 primero el archivo CSS por defecto ",(0,l.jsx)(s.code,{children:"/SOURCES/styleSheets.css"}),"."]}),"\n",(0,l.jsxs)(s.li,{children:["Luego cargar\xe1 el archivo CSS para la plataforma actual ",(0,l.jsx)(s.code,{children:"/SOURCES/styleSheets_mac.css"})," o ",(0,l.jsx)(s.code,{children:"/SOURCES/styleSheets_windows.css"}),"."]}),"\n",(0,l.jsx)(s.li,{children:"Si existe, entonces cargar\xe1 un archivo CSS espec\xedfico definido en el formulario JSON:"}),"\n"]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"un archivo para ambas plataformas:"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:'"css": "<path>"\n'})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"o una lista de archivos para ambas plataformas:"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:'"css": [\n     "<path1>",\n     "<path2>"\n      ],\n'})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"o una lista de archivos por plataforma:"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:' "css": [\n        {"path": "<path>", "media": "mac"},\n        {"path": "<path>", "media": "windows"},\n    ],\n'})}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsx)(s.p,{children:"Las rutas de los archivos pueden ser relativas o absolutas."}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Las rutas relativas se resuelven en relaci\xf3n con el archivo de descripci\xf3n del formulario JSON."}),"\n",(0,l.jsxs)(s.li,{children:["Por razones de seguridad, s\xf3lo se aceptan las rutas del sistema de archivos para las rutas absolutas. (",(0,l.jsx)(s.em,{children:"e.g."}),', "/RESOURCES", "/DATA")']}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"creaci\xf3n-o-modificaci\xf3n-de-hojas-de-estilo",children:"Creaci\xf3n o modificaci\xf3n de hojas de estilo"}),"\n",(0,l.jsx)(s.p,{children:'Puede crear hojas de estilo utilizando su editor de texto preferido y guardando el archivo con extensi\xf3n ".css" en la carpeta "/SOURCES" del proyecto.'}),"\n",(0,l.jsxs)(s.p,{children:["La caja de herramientas de 4D ofrece una p\xe1gina ",(0,l.jsx)(s.strong,{children:"Hojas de estilo"})," como opci\xf3n de acceso directo para crear y editar una de las tres hojas de estilo con nombre espec\xedficas de la plataforma."]}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["Abra la p\xe1gina ",(0,l.jsx)(s.strong,{children:"Estilos"})," eligiendo la ",(0,l.jsx)(s.strong,{children:"Caja de herramientas > Styles"})," del men\xfa Dise\xf1o o haga clic en el icono ",(0,l.jsx)(s.strong,{children:"Caja de herramientas"})," de la barra de herramientas del editor de formularios."]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.img,{src:n(655082).Z+"",width:"787",height:"582"})}),"\n",(0,l.jsxs)(s.ol,{start:"2",children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["Seleccione el tipo de hoja de estilo que desea crear y haga clic en el bot\xf3n ",(0,l.jsx)(s.strong,{children:"Crear"})," o ",(0,l.jsx)(s.strong,{children:"Editar"}),": ",(0,l.jsx)(s.img,{src:n(90314).Z+"",width:"116",height:"23"})]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"La hoja de estilo se abrir\xe1 en su editor de texto predeterminado."}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},90314:function(e,s,n){n.d(s,{Z:function(){return o}});let o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAAXCAIAAABVmPyEAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEFSURBVGhD7ZbBDYMwDEXZiW0ySW+swipM0XMnoTF17IBDpVYYI/SffIjj30MfFm03AzdIbvd4olwKch1L5L7AcUCuI5DrSKzcaeg7ph8mvrwPcXIXsWnkLreDnH9gTBd+LFFySa2a/R/Itey6JVkplZ3W1waH85ihC+14bvKxxMltLxz5KpNqK8e0jsuoynzLxxAnt71clSBdw4VPPM8ZI7eZDyVI7q7djax1RG/yqSn3AkYrouTyDqoM/rdQyVoS0hAyJI9Grs2Lbns4hTi5GfqqBbZSy1oHyEnp6TdPP0B8jG3yotIeTiFU7t2BXEcg1xHIdWQrF3V8Qa5jZbnACch1Y57fiJdV2WNWgUcAAAAASUVORK5CYII="},655082:function(e,s,n){n.d(s,{Z:function(){return o}});let o=n.p+"assets/images/stylesheets-566a8cb29cc275a6544f20ce64e0118e.png"},250065:function(e,s,n){n.d(s,{Z:function(){return t},a:function(){return r}});var o=n(667294);let l={},i=o.createContext(l);function r(e){let s=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),o.createElement(i.Provider,{value:s},e.children)}}}]);