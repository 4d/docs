"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7699"],{924996:function(e,a,n){n.r(a),n.d(a,{default:()=>m,frontMatter:()=>d,metadata:()=>o,assets:()=>t,toc:()=>c,contentTitle:()=>i});var o=JSON.parse('{"id":"code-editor/creating-using-macros","title":"Creaci\xf3n y uso de macros","description":"Puede utilizar macrocomandos en sus m\xe9todos. El uso de macrocomandos permite ahorrar mucho tiempo durante la entrada de c\xf3digo.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20/code-editor/creating-using-macros.md","sourceDirName":"code-editor","slug":"/code-editor/creating-using-macros","permalink":"/docs/es/20/code-editor/creating-using-macros","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20code-editor%2Fcreating-using-macros.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"creating-using-macros","title":"Creaci\xf3n y uso de macros"},"sidebar":"docs","previous":{"title":"Editor de c\xf3digo","permalink":"/docs/es/20/code-editor/write-class-method"},"next":{"title":"Etiquetas de transformaci\xf3n","permalink":"/docs/es/20/Tags/tags"}}'),r=n("785893"),s=n("250065");let d={id:"creating-using-macros",title:"Creaci\xf3n y uso de macros"},i=void 0,t={},c=[{value:"\xbfQu\xe9 es una macro?",id:"qu\xe9-es-una-macro",level:2},{value:"Ubicaci\xf3n de las macros",id:"ubicaci\xf3n-de-las-macros",level:2},{value:"Macros por defecto",id:"macros-por-defecto",level:2},{value:"A\xf1adir macros personalizadas",id:"a\xf1adir-macros-personalizadas",level:2},{value:"Comprobaci\xf3n de la sintaxis de las macros personalizadas",id:"comprobaci\xf3n-de-la-sintaxis-de-las-macros-personalizadas",level:3},{value:"S\xedntaxis de macros 4D",id:"s\xedntaxis-de-macros-4d",level:2},{value:"Sobre la etiqueta <code>&lt;method&gt;</code>",id:"sobre-la-etiqueta-method",level:2},{value:"Llamando macros",id:"llamando-macros",level:2},{value:"Men\xfa contextual y barra de herramientas",id:"men\xfa-contextual-y-barra-de-herramientas",level:3},{value:"Autocompletar",id:"autocompletar",level:3},{value:"Lista del editor de c\xf3digo",id:"lista-del-editor-de-c\xf3digo",level:3},{value:"Notas de compatibilidad",id:"notas-de-compatibilidad",level:2},{value:"Variables de selecci\xf3n de texto para m\xe9todos",id:"variables-de-selecci\xf3n-de-texto-para-m\xe9todos",level:3},{value:"Incompatibilidades relacionadas con el est\xe1ndar XML",id:"incompatibilidades-relacionadas-con-el-est\xe1ndar-xml",level:3}];function l(e){let a={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.p,{children:"Puede utilizar macrocomandos en sus m\xe9todos. El uso de macrocomandos permite ahorrar mucho tiempo durante la entrada de c\xf3digo."}),"\n",(0,r.jsx)(a.h2,{id:"qu\xe9-es-una-macro",children:"\xbfQu\xe9 es una macro?"}),"\n",(0,r.jsxs)(a.p,{children:["Un macro-comando es una parte de c\xf3digo 4D accesible permanentemente y que puede insertarse en cualquier parte de sus m\xe9todos, sea cual sea el tipo de la base abierta. Las macros pueden contener todo tipo de texto, comandos y constantes 4D, as\xed como tambi\xe9n etiquetas especiales, que se sustituyen en el momento de la inserci\xf3n de la macro por valores derivados del contexto del m\xe9todo. Por ejemplo, una macro puede contener la etiqueta ",(0,r.jsx)(a.code,{children:"<method_name/>;"})," en el momento de la inserci\xf3n de la macro, esta etiqueta ser\xe1 sustituida por el nombre del m\xe9todo proyecto actual."]}),"\n",(0,r.jsx)(a.p,{children:"Las macros se almacenan en uno o varios archivos en formato XML (texto). Pueden colocarse en una lista del editor de c\xf3digo; tambi\xe9n pueden llamarse utilizando el men\xfa contextual del editor o utilizando la funci\xf3n de entrada predictiva."}),"\n",(0,r.jsx)(a.p,{children:"Las macros 4D est\xe1n escritas en formato XML. Puede utilizar el archivo de macros por defecto de 4D tal como est\xe1 o modificarlo."}),"\n",(0,r.jsx)(a.h2,{id:"ubicaci\xf3n-de-las-macros",children:"Ubicaci\xf3n de las macros"}),"\n",(0,r.jsxs)(a.p,{children:["4D carga las macros desde una carpeta llamada ",(0,r.jsx)(a.strong,{children:"Macros v2"}),". Las macros deben estar en forma de uno o varios archivos XML ubicados en esta carpeta."]}),"\n",(0,r.jsx)(a.p,{children:'La carpeta "Macros v2" puede ser ubicada:'}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["En la carpeta 4D activa de la m\xe1quina. Las macros son compartidas para todas las bases. ",(0,r.jsx)(a.strong,{children:"Note:"}),"\xa0The location of the active 4D folder varies according to the operating system used. For more information, refer to the description of the\xa0",(0,r.jsx)(a.a,{href:"https://doc.4d.com/4Dv19R4/4D/19-R4/Get-4D-folder.301-5739515.en.html",children:"Get 4D folder"}),"\xa0command in the 4D\xa0",(0,r.jsx)(a.em,{children:"Language Reference"}),"\xa0manual."]}),"\n",(0,r.jsx)(a.li,{children:"Junto al archivo de estructura de la base. Las macros s\xf3lo se cargan para esta estructura."}),"\n",(0,r.jsxs)(a.li,{children:["Para los componentes: en la carpeta ",(0,r.jsx)(a.strong,{children:"Components"})," de la base. Las macros s\xf3lo se cargan si el componente est\xe1 instalado."]}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:'Estas tres ubicaciones pueden utilizarse simult\xe1neamente: es posible instalar una carpeta "Macros v2" en cada una de ellas. Las macros se cargar\xe1n en el siguiente orden: carpeta 4D, archivo de estructura, componente 1... componente X.'}),"\n",(0,r.jsx)(a.h2,{id:"macros-por-defecto",children:"Macros por defecto"}),"\n",(0,r.jsxs)(a.p,{children:['4D ofrece un conjunto de macros por defecto que contienen, por ejemplo, palabras clave de flujo de control. Estas macros se incluyen en el archivo por defecto "',(0,r.jsx)(a.em,{children:"Macros.xml"}),'", ubicado en la carpeta "Macros v2" que se crea en la carpeta 4D activa de la m\xe1quina durante el arranque inicial de 4D.']}),"\n",(0,r.jsx)(a.p,{children:"Posteriormente, puede modificar este archivo o el contenido de la carpeta como desee (ver el p\xe1rrafo siguiente). En caso de problemas con esta carpeta, se puede borrar y 4D la volver\xe1 a crear en el siguiente inicio."}),"\n",(0,r.jsx)(a.h2,{id:"a\xf1adir-macros-personalizadas",children:"A\xf1adir macros personalizadas"}),"\n",(0,r.jsx)(a.p,{children:'Puede a\xf1adir macros personalizadas en el archivo "Macros.xml" utilizando un editor de texto est\xe1ndar o por programaci\xf3n. Tambi\xe9n puede a\xf1adir archivos XML de macros personalizados en esta carpeta.'}),"\n",(0,r.jsx)(a.p,{children:"En modo local, el archivo de macros puede abrirse mientras se utiliza 4D. La lista de macros disponibles se actualiza en cada evento de activaci\xf3n de 4D. Por ejemplo, es posible traer el editor de texto al primer plano, modificar el archivo de macros y, a continuaci\xf3n, volver al m\xe9todo: la nueva macro estar\xe1 entonces disponible en el Editor de c\xf3digo."}),"\n",(0,r.jsx)(a.p,{children:"No se muestran macros vac\xedas o err\xf3neas."}),"\n",(0,r.jsx)(a.h3,{id:"comprobaci\xf3n-de-la-sintaxis-de-las-macros-personalizadas",children:"Comprobaci\xf3n de la sintaxis de las macros personalizadas"}),"\n",(0,r.jsxs)(a.p,{children:["Los archivos de macrocomandos de 4D deben ser conformes al est\xe1ndar XML. Esto significa, m\xe1s concretamente, que las declaraciones XML ",(0,r.jsx)(a.code,{children:'<?xml version="1.0" ...?>'})," y la declaraci\xf3n de documento ",(0,r.jsx)(a.code,{children:'<!DOCTYPE macros SYSTEM "http://www.4d.com/dtd/2007/macros.dtd">'})," son obligatorias al principio de un archivo de macros para que pueda cargarse. Se soportan los diferentes tipos de codificaci\xf3n XML. No obstante, se recomienda utilizar una codificaci\xf3n compatible con Mac/PC (UTF-8). 4D ofrece un DTD que puede utilizarse para validar los archivos de macros. Este archivo se encuentra en la siguiente ubicaci\xf3n:"]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Windows: \\Resources\\DTD\\macros.dtd"}),"\n",(0,r.jsx)(a.li,{children:"Mac OS: :Contents:Resources:DTD:macros.dtd"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Si un archivo de macros no contiene las declaraciones o no puede validarse, no se carga."}),"\n",(0,r.jsx)(a.h2,{id:"s\xedntaxis-de-macros-4d",children:"S\xedntaxis de macros 4D"}),"\n",(0,r.jsx)(a.p,{children:'Las macros 4D se crean utilizando etiquetas XML personalizadas llamadas "elementos"'}),"\n",(0,r.jsxs)(a.p,{children:["Algunas etiquetas indican el inicio y el final de la definici\xf3n (etiquetas dobles del tipo ",(0,r.jsx)(a.code,{children:"<tag> </tag>"}),"), otras se sustituyen por valores de contexto de inserci\xf3n (",(0,r.jsx)(a.code,{children:"<tag/>"}),")."]}),"\n",(0,r.jsx)(a.p,{children:"De conformidad con las especificaciones XML, algunas etiquetas de elementos pueden incluir atributos. A menos que se indique lo contrario, estos atributos son opcionales y se utiliza un valor por defecto cuando se omiten. La sintaxis de los elementos con atributos es la siguiente:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Etiquetas dobles: ",(0,r.jsx)(a.code,{children:'<tag attribute="value"> </macro>'})]}),"\n",(0,r.jsxs)(a.li,{children:["Etiquetas individuales: ",(0,r.jsx)(a.code,{children:'<tag attribute="value"/>'})]}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["If the element accepts several attributes, you can group them in the same line of command, separated by a space: ",(0,r.jsx)(a.code,{children:'\\&#060;tag attribute1="value" attribute2="value" attribute3="value"... &#062;'})]}),"\n",(0,r.jsx)(a.p,{children:"Aqu\xed est\xe1 la lista de etiquetas y su modo de uso:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:(0,r.jsx)(a.strong,{children:"Etiquetas de elementos"})}),(0,r.jsx)(a.th,{children:(0,r.jsx)(a.strong,{children:"Descripci\xf3n"})})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"<macros> </macros>"})}),(0,r.jsx)(a.td,{children:"Inicio y fin del archivo macro (etiqueta obligatoria)."})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"<macro> </macro>"})}),(0,r.jsx)(a.td,{children:"Inicio y fin de la definici\xf3n de una macro y sus atributos."})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{}),(0,r.jsxs)(a.td,{children:[(0,r.jsx)(a.em,{children:"Atributos"}),":"]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{}),(0,r.jsx)(a.td,{children:"- name: Nombre**de la macro tal y como aparece en los men\xfas y en las listas del Editor de c\xf3digo (atributo obligatorio)."})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{}),(0,r.jsx)(a.td,{children:"- type_ahead_text: Cadena de caracteres** que debe introducirse para llamar a la macro utilizando la funci\xf3n type-ahead (tambi\xe9n conocida como autocompletar)*."})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{}),(0,r.jsx)(a.td,{children:'- in_menu: booleano que indica si la macro se puede llamar utilizando el men\xfa contextual*. Valores = "true" (por defecto) o "false"'})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{}),(0,r.jsx)(a.td,{children:'- type_ahead: Booleano que indica si la macro puede llamarse utilizando la funci\xf3n de tecleo predictivo (o autocompletar)*. Valores = "true" (por defecto) o "false"'})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{}),(0,r.jsx)(a.td,{children:'- method_event: se utiliza para activar la llamada autom\xe1tica de la macro en funci\xf3n de la fase actualde manejo de cada m\xe9todo (creaci\xf3n, cierre, etc.). Valores = "on_load": la macro se dispara al abrir cada m\xe9todo, "on_save": la macro se dispara al guardar cada m\xe9todo (cierre de un m\xe9todo modificado o guardado utilizando el comando File>Save, "on_create": la macro se dispara cuando se crea cada m\xe9todo, "on_close": la macro se dispara cuando se cierra cada m\xe9todo.'})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{}),(0,r.jsx)(a.td,{children:'"on_save" y "on_close" pueden utilizarse conjuntamente --- en otras palabras, ambos eventos se generan cuando se cierra un m\xe9todo modificado. Por otro lado, "on_create" y "on_load" nunca se generan de forma consecutiva. Este atributo puede utilizarse, por ejemplo, para preformatear los m\xe9todos cuando se crean (comentarios en el \xe1rea de encabezado) o para registrar informaci\xf3n como la fecha y la hora en que se cierran.'})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{}),(0,r.jsxs)(a.td,{children:['- version: utilizada para activar el nuevo modo de soportar selecciones de texto para la macro (ver m\xe1s adelante la secci\xf3n "Acerca de la etiqueta ',(0,r.jsx)(a.code,{children:"<method>"}),'"). Para activar este nuevo modo, pase el valor "2". Si omite este atributo o pasa la version="1", se conserva el modo anterior.']})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{}),(0,r.jsx)(a.td,{children:'- in_toolbar: booleano que indica si la macro debe estar presente en el men\xfa del bot\xf3n Macro de la barra de herramientas. Valores= "true" (por defecto) o "false".'})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"<selection/>"})}),(0,r.jsx)(a.td,{children:"Etiqueta reemplazada por el texto seleccionado cuando la macro se inserta. La selecci\xf3n puede estar vac\xeda."})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"<text> </text>"})}),(0,r.jsx)(a.td,{children:"Inicio y fin del c\xf3digo que debe insertarse en el m\xe9todo. Se a\xf1adir\xe1 un retorno de carro antes y despu\xe9s del c\xf3digo."})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"<method> </method>"})}),(0,r.jsxs)(a.td,{children:['Inicio y fin del nombre del m\xe9todo proyecto y de su par\xe1metro (opcional). El m\xe9todo se ejecuta cuando se llama a la macro. Puede pasar un par\xe1metro de la forma ("param1;param2;..."). Este par\xe1metro se recibir\xe1 en el m\xe9todo utilizando las variables $1, $2, etc. Para m\xe1s informaci\xf3n sobre esta etiqueta, consulte la secci\xf3n "Acerca de la etiqueta ',(0,r.jsx)(a.code,{children:"<method>"}),'".']})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"<caret/>"})}),(0,r.jsx)(a.td,{children:"Ubicaci\xf3n del punto de inserci\xf3n en el c\xf3digo una vez insertada la macro."})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"<user_4D/>"})}),(0,r.jsx)(a.td,{children:"Etiqueta reemplazada por el nombre del usuario 4D actual."})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"<user_os/>"})}),(0,r.jsx)(a.td,{children:"Etiqueta reemplazada por el nombre de usuario actual del sistema."})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"<method_name/>"})}),(0,r.jsx)(a.td,{children:"Etiqueta reemplazada por el nombre del m\xe9todo actual."})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"<method_path/>"})}),(0,r.jsxs)(a.td,{children:["Etiqueta sustituida por la sintaxis de la ruta (tal como la devuelve ",(0,r.jsx)(a.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1164.html",children:(0,r.jsx)(a.code,{children:"METHOD Get path"})})," del m\xe9todo actual."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"<date/>"})}),(0,r.jsx)(a.td,{children:"Etiqueta reemplazada por la fecha actual."})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{}),(0,r.jsxs)(a.td,{children:[(0,r.jsx)(a.em,{children:"Atributo"}),":"]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{}),(0,r.jsx)(a.td,{children:"- format: formato 4D utilizado para mostrar la fecha. Si no se define ning\xfan formato, se utilizar\xe1 el formato predeterminado. Valores = n\xfamero de formato 4D (0 a 8)."})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"<time/>"})}),(0,r.jsx)(a.td,{children:"Etiqueta reemplazada por la hora actual."})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{}),(0,r.jsxs)(a.td,{children:[(0,r.jsx)(a.em,{children:"Atributo"}),":"]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{}),(0,r.jsx)(a.td,{children:"- format: formato 4D utilizado para mostrar la hora. Si no se define ning\xfan formato, se utilizar\xe1 el formato predeterminado. Valores = n\xfamero de formato 4D (0 a 6)."})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"<clipboard/>"})}),(0,r.jsx)(a.td,{children:"Etiqueta reemplazada por el contenido del portapapeles."})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{}),(0,r.jsxs)(a.td,{children:[(0,r.jsx)(a.em,{children:"Atributo"}),":"]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{}),(0,r.jsx)(a.td,{children:"- index: portapapeles a pegar. Valores = n\xfamero del portapapeles (0 a 9)."})]})]})]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Macros can be called using the context menu of the Code Editor or using the type-ahead function (see the following section).",(0,r.jsx)(a.br,{}),"\n** If you want to conform to XML language specifications, you must not use extended characters (accented characters, quotation marks, etc.)."]}),"\n",(0,r.jsx)(a.li,{children:"Si desea ajustarse a las especificaciones del lenguaje XML, no debe utilizar caracteres extendidos (caracteres acentuados, comillas, etc.)."}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Este es un ejemplo de definici\xf3n de una macro:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:(0,r.jsx)(a.strong,{children:"Contenido de la macro"})}),(0,r.jsx)(a.th,{children:(0,r.jsx)(a.strong,{children:"Comentarios"})})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:'<?xml version="1.0"...?>'})}),(0,r.jsx)(a.td,{children:"Declaraci\xf3n XML"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"<!DOCTYPE macros SYSTEM>"})}),(0,r.jsx)(a.td,{children:"Declaraci\xf3n del documento"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"<macros>"})}),(0,r.jsx)(a.td,{children:"Inicio del archivo XML de macros"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:'<macro name="RecordLoop">'})}),(0,r.jsx)(a.td,{children:"Inicio de la definici\xf3n y del nombre de la macro"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"<text>"})}),(0,r.jsx)(a.td,{children:"Inicio del c\xf3digo de la macro"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsxs)(a.td,{children:["For($i;1;Records in selection(",(0,r.jsx)(a.code,{children:"<Selection/>"}),"))"]}),(0,r.jsxs)(a.td,{children:["La etiqueta ",(0,r.jsx)(a.code,{children:"<Selection/>"})," ser\xe1 reemplazada por el c\xf3digo seleccionado en el m\xe9todo 4D al momento de la inserci\xf3n de la macro (por ejemplo, un nombre de tabla)"]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsxs)(a.td,{children:["SAVE RECORD(",(0,r.jsx)(a.code,{children:"<Selection/>"}),")"]}),(0,r.jsx)(a.td,{})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsxs)(a.td,{children:["NEXT RECORD(",(0,r.jsx)(a.code,{children:"<Selection/>"}),")"]}),(0,r.jsx)(a.td,{})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"End for"}),(0,r.jsx)(a.td,{})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"</text>"})}),(0,r.jsx)(a.td,{children:"Fin del c\xf3digo macro"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"</macro>"})}),(0,r.jsx)(a.td,{children:"Fin de la definici\xf3n de macro"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.code,{children:"</macros>"})}),(0,r.jsx)(a.td,{children:"Fin del archivo XML de macros"})]})]})]}),"\n",(0,r.jsxs)(a.h2,{id:"sobre-la-etiqueta-method",children:["Sobre la etiqueta ",(0,r.jsx)(a.code,{children:"<method>"})]}),"\n",(0,r.jsxs)(a.p,{children:["La etiqueta ",(0,r.jsx)(a.code,{children:"<method>"})," permite generar y utilizar macrocomandos que ejecutan m\xe9todos proyecto 4D. Esto permite a los desarrolladores crear funciones sofisticadas que pueden distribuirse mediante macrocomandos asociados a los componentes. For example, the following macro will cause the\xa0",(0,r.jsx)(a.em,{children:"MyMethod"}),"\xa0method to be executed with the name of the current method as parameter:"]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.code,{children:'<method>MyMethod("<method_name/>")</method>'})}),"\n",(0,r.jsx)(a.p,{children:"El c\xf3digo de un m\xe9todo llamado se ejecuta en un nuevo proceso. Este proceso se cierra una vez se ejecuta el m\xe9todo."}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Note:"}),"\xa0The structure process remains frozen until the called method execution is completed. Debe asegurarse de que la ejecuci\xf3n es r\xe1pida y de que no hay riesgo de que bloquee la aplicaci\xf3n. If this occurs, use the\xa0",(0,r.jsx)(a.strong,{children:"Ctrl+F8"}),"\xa0(Windows) or\xa0",(0,r.jsx)(a.strong,{children:"Command+F8"}),'\xa0(Mac OS) command to "kill" the process.']}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"llamando-macros",children:"Llamando macros"}),"\n",(0,r.jsx)(a.p,{children:"Por defecto, las macros pueden llamarse mediante el men\xfa contextual o la barra de herramientas del editor de c\xf3digo, de la funci\xf3n de autocompletar o de una lista espec\xedfica en la parte inferior de la ventana del editor de c\xf3digo."}),"\n",(0,r.jsx)(a.p,{children:"Tenga en cuenta que para cada macro es posible restringir la posibilidad de llamarla utilizando el men\xfa contextual y/o la funci\xf3n de autocompletar."}),"\n",(0,r.jsx)(a.h3,{id:"men\xfa-contextual-y-barra-de-herramientas",children:"Men\xfa contextual y barra de herramientas"}),"\n",(0,r.jsxs)(a.p,{children:["By default, all macros can be called via the context menu of the Code Editor (using the\xa0",(0,r.jsx)(a.strong,{children:"Insert macro"}),"\xa0hierarchical command) or the ",(0,r.jsx)(a.strong,{children:"Macros"})," button of the toolbar."]}),"\n",(0,r.jsxs)(a.p,{children:["The\xa0",(0,r.jsx)(a.em,{children:"in_menu"}),"\xa0attribute of the ",(0,r.jsx)(a.code,{children:"<macro>"})," tag is used to set whether or not the macro appears in this menu."]}),"\n",(0,r.jsx)(a.p,{children:'En el men\xfa contextual, las macros se muestran en el orden del archivo "Macros.xml" y de cualquier archivo XML adicional. Por lo tanto, es posible cambiar el orden modificando estos archivos.'}),"\n",(0,r.jsx)(a.h3,{id:"autocompletar",children:"Autocompletar"}),"\n",(0,r.jsxs)(a.p,{children:["By default, all macros are accessible using the autocomplete (aka type-ahead) function (see\xa0",(0,r.jsx)(a.a,{href:"/docs/es/20/code-editor/write-class-method",children:"Writing a method"}),"). The\xa0",(0,r.jsx)(a.em,{children:"type_ahead"}),"\xa0attribute of the ",(0,r.jsx)(a.code,{children:"<macro>"})," tag can be used to exclude a macro from this type of operation."]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Note:"}),"\xa0If the macro contains the ",(0,r.jsx)(a.code,{children:"<selection/>"})," tag, it will not appear in the autocomplete pop-up window."]}),"\n",(0,r.jsx)(a.h3,{id:"lista-del-editor-de-c\xf3digo",children:"Lista del editor de c\xf3digo"}),"\n",(0,r.jsxs)(a.p,{children:["You can display your macros in a list of the Code Editor (see\xa0",(0,r.jsx)(a.a,{href:"/docs/es/20/code-editor/write-class-method",children:"Writing a method"}),"). Basta con hacer doble clic en el nombre de una macro de la lista para llamarla. No es posible excluir una macro espec\xedfica de esta lista."]}),"\n",(0,r.jsx)(a.h2,{id:"notas-de-compatibilidad",children:"Notas de compatibilidad"}),"\n",(0,r.jsx)(a.p,{children:"El soporte de macros puede cambiar de una versi\xf3n de 4D a otra. Con el fin de mantener la compatibilidad entre las diferentes versiones y conservar sus personalizaciones, 4D no elimina ninguna versi\xf3n anterior. Si desea utilizar las \xfaltimas funciones disponibles, debe adaptar su versi\xf3n en consecuencia."}),"\n",(0,r.jsx)(a.h3,{id:"variables-de-selecci\xf3n-de-texto-para-m\xe9todos",children:"Variables de selecci\xf3n de texto para m\xe9todos"}),"\n",(0,r.jsxs)(a.p,{children:["It is recommended to manage text selections using the\xa0",(0,r.jsx)(a.a,{href:"https://doc.4d.com/4Dv19R4/4D/19-R4/GET-MACRO-PARAMETER.301-5739797.en.html",children:"GET MACRO PARAMETER"}),"and\xa0",(0,r.jsx)(a.a,{href:"https://doc.4d.com/4Dv19R4/4D/19-R4/SET-MACRO-PARAMETER.301-5739788.en.html",children:"SET MACRO PARAMETER"}),"\xa0commands. Estos comandos pueden utilizarse para superar la partici\xf3n de los espacios de ejecuci\xf3n del proyecto local/componente y permitir as\xed la creaci\xf3n de componentes dedicados a la gesti\xf3n de macros. Para activar este modo para una macro, debe declarar el atributo Version con el valor 2 en el elemento Macro. In this case, 4D no longer manages the predefined variables _textSel,_textReplace, etc. and the\xa0",(0,r.jsx)(a.a,{href:"https://doc.4d.com/4Dv19R4/4D/19-R4/GET-MACRO-PARAMETER.301-5739797.en.html",children:"GET MACRO PARAMETER"}),"and\xa0",(0,r.jsx)(a.a,{href:"https://doc.4d.com/4Dv19R4/4D/19-R4/SET-MACRO-PARAMETER.301-5739788.en.html",children:"SET MACRO PARAMETER"}),"\xa0are used. Este atributo debe declararse as\xed:"]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:'<macro name="MyMacro" version="2">'}),(0,r.jsx)(a.br,{})," ",(0,r.jsx)(a.code,{children:"--- Text of the macro ---"}),(0,r.jsx)(a.br,{})," ",(0,r.jsx)(a.code,{children:"</macro>"})]}),"\n",(0,r.jsx)(a.p,{children:"Si no se pasa este atributo, el modo anterior se mantiene."}),"\n",(0,r.jsx)(a.h3,{id:"incompatibilidades-relacionadas-con-el-est\xe1ndar-xml",children:"Incompatibilidades relacionadas con el est\xe1ndar XML"}),"\n",(0,r.jsx)(a.p,{children:"Para que los archivos de macros respeten la norma XML, deben observarse reglas sint\xe1cticas estrictas. Esto puede provocar incompatibilidades con el c\xf3digo de las macros creadas con versiones anteriores e impedir la carga de archivos XML. Las siguientes son las principales fuentes de mal funcionamiento:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:['Los comentarios del tipo "// mi comentario", permitidos dentro de los elementos ',(0,r.jsx)(a.code,{children:"<macro>"})," en versiones anteriores de 4D, no son compatibles con la sintaxis XML. Las l\xedneas de comentarios deben respetar la forma est\xe1ndar ",(0,r.jsx)(a.code,{children:'"\x3c!-- mi comentario --\x3e"'}),"."]}),"\n",(0,r.jsxs)(a.li,{children:["Los s\xedmbolos ",(0,r.jsx)(a.code,{children:"<>"})," utilizados m\xe1s particularmente para los nombres de objetos interprocesos deben codificarse. Por ejemplo, la variable ",(0,r.jsx)(a.code,{children:"<>params"})," debe escribirse ",(0,r.jsx)(a.code,{children:"&lt;>params"}),"."]}),"\n",(0,r.jsxs)(a.li,{children:["La etiqueta de declaraci\xf3n inicial ",(0,r.jsx)(a.code,{children:"<macros>"})," pod\xeda omitirse en versiones anteriores de 4D. Ahora es obligatorio; de lo contrario, el archivo no se cargar\xe1."]}),"\n"]})]})}function m(e={}){let{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,a,n){n.d(a,{Z:function(){return i},a:function(){return d}});var o=n(667294);let r={},s=o.createContext(r);function d(e){let a=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(s.Provider,{value:a},e.children)}}}]);