"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78856],{44361:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var s=n(474848),o=n(28453);const a={id:"webAreaOverview",title:"\xc1rea Web"},i=void 0,d={id:"FormObjects/webAreaOverview",title:"\xc1rea Web",description:"Las \xe1reas web pueden mostrar varios tipos de contenido web dentro de sus formularios: p\xe1ginas HTML con contenidos est\xe1ticos o din\xe1micos, archivos, im\xe1genes, JavaScript, etc. El motor de renderizado del \xe1rea web depende de la plataforma de ejecuci\xf3n de la aplicaci\xf3n y de la opci\xf3n motor de renderizado seleccionada.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/FormObjects/webArea_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/webAreaOverview",permalink:"/docs/es/20-R6/FormObjects/webAreaOverview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FwebArea_overview.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"webAreaOverview",title:"\xc1rea Web"},sidebar:"docs",previous:{title:"Text",permalink:"/docs/es/20-R6/FormObjects/text"},next:{title:"\xc1rea 4D View Pro",permalink:"/docs/es/20-R6/FormObjects/viewProAreaOverview"}},c={},l=[{value:"Propiedades espec\xedficas",id:"propiedades-espec\xedficas",level:2},{value:"Variables asociadas",id:"variables-asociadas",level:3},{value:"Motor de renderizaci\xf3n web",id:"motor-de-renderizaci\xf3n-web",level:3},{value:"Acceder a los m\xe9todos 4D",id:"acceder-a-los-m\xe9todos-4d",level:3},{value:"Objeto $4d",id:"objeto-4d",level:3},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Acciones est\xe1ndar",id:"acciones-est\xe1ndar",level:2},{value:"Eventos formulario",id:"eventos-formulario",level:2},{value:"Reglas de las \xe1reas web",id:"reglas-de-las-\xe1reas-web",level:2},{value:"Interfaz de usuario",id:"interfaz-de-usuario",level:3},{value:"Subformularios",id:"subformularios",level:3},{value:"Conflicto entre el \xe1rea web y el servidor web (Windows)",id:"conflicto-entre-el-\xe1rea-web-y-el-servidor-web-windows",level:3},{value:"Inserci\xf3n del protocolo (macOS)",id:"inserci\xf3n-del-protocolo-macos",level:3},{value:"Acceso al inspector web",id:"acceso-al-inspector-web",level:2},{value:"Propiedades soportadas",id:"propiedades-soportadas",level:2}];function t(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["Las \xe1reas web pueden mostrar varios tipos de contenido web dentro de sus formularios: p\xe1ginas HTML con contenidos est\xe1ticos o din\xe1micos, archivos, im\xe1genes, JavaScript, etc. El motor de renderizado del \xe1rea web depende de la plataforma de ejecuci\xf3n de la aplicaci\xf3n y de ",(0,s.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"la opci\xf3n motor de renderizado"})," seleccionada."]}),"\n",(0,s.jsxs)(r.p,{children:["Es posible crear varias \xe1reas web en el mismo formulario. Tenga en cuenta, sin embargo, que el uso de las \xe1reas web debe seguir ",(0,s.jsx)(r.a,{href:"#web-area-rules",children:"varias reglas"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["Varias ",(0,s.jsx)(r.a,{href:"#standard-actions",children:"acciones est\xe1ndar"})," dedicadas, numerosos ",(0,s.jsx)(r.a,{href:"https://doc.4d.com/4Dv18/4D/18/Web-Area.201-4504309.en.html",children:"comandos de lenguaje"})," as\xed como tambi\xe9n ",(0,s.jsx)(r.a,{href:"#form-events",children:"eventos formulario"})," gen\xe9ricos y espec\xedficos, permiten al desarrollador controlar el funcionamiento de las \xe1reas web. Se pueden utilizar variables espec\xedficas para intercambiar informaci\xf3n entre el \xe1rea y el entorno 4D."]}),"\n",(0,s.jsx)(r.h2,{id:"propiedades-espec\xedficas",children:"Propiedades espec\xedficas"}),"\n",(0,s.jsx)(r.h3,{id:"variables-asociadas",children:"Variables asociadas"}),"\n",(0,s.jsx)(r.p,{children:"Se pueden asociar dos variables espec\xedficas a cada \xe1rea web:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/propertiesWebArea#url",children:(0,s.jsx)(r.code,{children:"URL"})})," --para controlar la URL que muestra el \xe1rea web"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/propertiesWebArea#progression",children:(0,s.jsx)(r.code,{children:"Progresi\xf3n"})})," -- para controlar el porcentaje de carga de la p\xe1gina mostrada en el \xe1rea web."]}),"\n"]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["A partir de 4D v19 R5, la variable Progression ya no se actualiza en las \xc1reas Web que utilizan el ",(0,s.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/webAreaOverview#web-rendering-engine",children:"motor de renderizado del sistema Windows"}),"."]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"motor-de-renderizaci\xf3n-web",children:"Motor de renderizaci\xf3n web"}),"\n",(0,s.jsxs)(r.p,{children:["Puede elegir entre ",(0,s.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"dos motores de renderizado"})," para el \xe1rea web, dependiendo de las particularidades de su aplicaci\xf3n."]}),"\n",(0,s.jsx)(r.p,{children:"Seleccionar el motor de renderizado web anidado permite llamar a los m\xe9todos de 4D desde el \xe1rea web y asegurarse de que las funcionalidades en macOS y Windows sean similares. Se recomienda seleccionar el motor de renderizado del sistema cuando el \xe1rea web est\xe1 conectada a Internet porque siempre se beneficia de las \xfaltimas actualizaciones de seguridad."}),"\n",(0,s.jsx)(r.h3,{id:"acceder-a-los-m\xe9todos-4d",children:"Acceder a los m\xe9todos 4D"}),"\n",(0,s.jsxs)(r.p,{children:["Cuando se selecciona la propiedad ",(0,s.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/propertiesWebArea#access-4d-methods",children:"Acceder a los m\xe9todos 4D"}),", se puede llamar a los m\xe9todos 4D desde un \xe1rea web."]}),"\n",(0,s.jsx)(r.admonition,{title:"Notas",type:"note",children:(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Esta propiedad s\xf3lo est\xe1 disponible si el \xe1rea web ",(0,s.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"utiliza el motor de renderizado web integrado"}),"."]}),"\n",(0,s.jsx)(r.li,{children:"Por razones de seguridad, ya que permite ejecutar c\xf3digo 4D, esta opci\xf3n solo debe habilitarse para p\xe1ginas de confianza, como las p\xe1ginas generadas por la aplicaci\xf3n."}),"\n"]})}),"\n",(0,s.jsx)(r.h3,{id:"objeto-4d",children:"Objeto $4d"}),"\n",(0,s.jsxs)(r.p,{children:["El ",(0,s.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"motor de renderizado web integrado 4D"}),' suministra al \xe1rea un objeto JavaScript llamado $4d que puede asociar a cualquier m\xe9todo proyecto 4D utilizando la notaci\xf3n objeto ".".']}),"\n",(0,s.jsxs)(r.p,{children:["Por ejemplo, para llamar al m\xe9todo ",(0,s.jsx)(r.code,{children:"HelloWorld"})," de 4D, basta con ejecutar la siguiente declaraci\xf3n:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-codeJS",children:"$4d.HelloWorld();\n"})}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:'JavaScript es sensible a las may\xfasculas y min\xfasculas, por lo que es importante tener en cuenta que el objeto se llama $4d (con "d" min\xfascula).'}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"La sintaxis de las llamadas a los m\xe9todos 4D es la siguiente:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-codeJS",children:"$4d.4DMethodName(param1,paramN,function(result){})\n"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"param1...paramN"}),": Puede pasar tantos par\xe1metros como necesite al m\xe9todo 4D. Estos par\xe1metros pueden ser de cualquier tipo soportado por JavaScript (cadena, n\xfamero, array, objeto)."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"function(result)"}),': Funci\xf3n a pasar como \xfaltimo argumento. Esta funci\xf3n "callback" se llama de forma sincr\xf3nica una vez que el m\xe9todo 4D termina de ejecutarse. Recibe el par\xe1metro ',(0,s.jsx)(r.code,{children:"result"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"result"}),': resultado de la ejecuci\xf3n del m\xe9todo 4D, devuelto en la expresi\xf3n "$0". Este resultado puede ser de cualquier tipo soportado por JavaScript (cadena, n\xfamero, array, objeto). Puede utilizar el comando ',(0,s.jsx)(r.code,{children:"C_OBJECT"})," para devolver los objetos."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["Por defecto, 4D trabaja en UTF-8. Cuando devuelva un texto que contenga caracteres extendidos, por ejemplo, caracteres con acentos, aseg\xfarese de que la codificaci\xf3n de la p\xe1gina mostrada en el \xe1rea web est\xe9 declarada como UTF-8, ya que de lo contrario los caracteres podr\xedan representarse incorrectamente. In this case, add the following line in the HTML page to declare the encoding: ",(0,s.jsx)(r.code,{children:'<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'})]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsxs)(r.p,{children:["Dado un m\xe9todo proyecto 4D llamado ",(0,s.jsx)(r.code,{children:"today"})," que no recibe par\xe1metros y devuelve la fecha actual como una cadena."]}),"\n",(0,s.jsxs)(r.p,{children:["C\xf3digo 4D del m\xe9todo ",(0,s.jsx)(r.code,{children:"today"}),":"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:" C_TEXT($0)\n $0:=String(Current date;System date long)\n"})}),"\n",(0,s.jsx)(r.p,{children:"En el \xe1rea web, el m\xe9todo 4D puede ser llamado con la siguiente sintaxis:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"$4d.today()\n"})}),"\n",(0,s.jsx)(r.p,{children:"El m\xe9todo 4D no recibe ning\xfan par\xe1metro pero devuelve el valor $0 a la funci\xf3n callback llamada por 4D tras la ejecuci\xf3n del m\xe9todo. Queremos mostrar la fecha en la p\xe1gina HTML que es cargada por el \xe1rea web."}),"\n",(0,s.jsx)(r.p,{children:"Aqu\xed est\xe1 el c\xf3digo de la p\xe1gina HTML:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-html",children:'<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n <script type="text/javascript">\n$4d.today(function(dollarZero)\n{\n    var curDate = dollarZero;\n    document.getElementById("mydiv").innerHTML=curDate;\n});\n<\/script>\n</head>\n<body>Today is: <div id="mydiv"></div>\n</body>\n</html>\n'})}),"\n",(0,s.jsx)(r.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsxs)(r.p,{children:["El m\xe9todo proyecto 4D ",(0,s.jsx)(r.code,{children:"calcSum"})," recibe los par\xe1metros (",(0,s.jsx)(r.code,{children:"$1...$n"}),") y devuelve su suma en ",(0,s.jsx)(r.code,{children:"$0"}),":"]}),"\n",(0,s.jsxs)(r.p,{children:["C\xf3digo 4D del m\xe9todo ",(0,s.jsx)(r.code,{children:"calcSum"}),":"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:" C_REAL(${1}) // recibe n par\xe1metros de tipo REAL\n C_REAL($0) // devuelve un Real\n C_LONGINT($i;$n)\n $n:=Count parameters\n For($i;1;$n)\n    $0:=$0+${$i}\n End for\n"})}),"\n",(0,s.jsx)(r.p,{children:"El c\xf3digo JavaScript que se ejecuta en el \xe1rea web es el siguiente:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"$4d.calcSum(33, 45, 75, 102.5, 7, function(dollarZero)\n    {\n        var result = dollarZero // el resultado es 262.5\n    });\n"})}),"\n",(0,s.jsx)(r.h2,{id:"acciones-est\xe1ndar",children:"Acciones est\xe1ndar"}),"\n",(0,s.jsxs)(r.p,{children:["Hay cuatro acciones est\xe1ndar espec\xedficas para gestionar las \xe1reas web de forma autom\xe1tica: ",(0,s.jsx)(r.code,{children:"Open Back URL"}),", ",(0,s.jsx)(r.code,{children:"Open Forward URL"}),", ",(0,s.jsx)(r.code,{children:"Refresh Current URL"})," y ",(0,s.jsx)(r.code,{children:"Stop Loading URL"}),". Estas acciones pueden asociarse a botones o comandos de men\xfa y permiten una r\xe1pida implementaci\xf3n de interfaces web b\xe1sicas. Estas acciones se describen en ",(0,s.jsx)(r.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Standard-actions.300-4354791.en.html",children:"Acciones est\xe1ndar"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"eventos-formulario",children:"Eventos formulario"}),"\n",(0,s.jsx)(r.p,{children:"Los eventos formulario espec\xedficos est\xe1n destinados a la gesti\xf3n programada de las \xe1reas de la web, m\xe1s concretamente a la activaci\xf3n de los enlaces:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/es/20-R6/Events/onBeginUrlLoading",children:(0,s.jsx)(r.code,{children:"On Begin URL Loading"})})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/es/20-R6/Events/onUrlResourceLoading",children:(0,s.jsx)(r.code,{children:"On URL Resource Loading"})})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/es/20-R6/Events/onEndUrlLoading",children:(0,s.jsx)(r.code,{children:"On End URL Loading"})})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/es/20-R6/Events/onUrlLoadingError",children:(0,s.jsx)(r.code,{children:"On URL Loading Error"})})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/es/20-R6/Events/onUrlFiltering",children:(0,s.jsx)(r.code,{children:"On URL Filtering"})})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/es/20-R6/Events/onOpenExternalLink",children:(0,s.jsx)(r.code,{children:"On Open External Link"})})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/es/20-R6/Events/onWindowOpeningDenied",children:(0,s.jsx)(r.code,{children:"On Window Opening Denied"})})}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Adem\xe1s, las \xe1reas web soportan los siguientes eventos de formulario gen\xe9ricos:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/es/20-R6/Events/onLoad",children:(0,s.jsx)(r.code,{children:"On Load"})})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/es/20-R6/Events/onUnload",children:(0,s.jsx)(r.code,{children:"On Unload"})})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/es/20-R6/Events/onGettingFocus",children:(0,s.jsx)(r.code,{children:"On Getting Focus"})})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/es/20-R6/Events/onLosingFocus",children:(0,s.jsx)(r.code,{children:"On Losing Focus"})})}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"reglas-de-las-\xe1reas-web",children:"Reglas de las \xe1reas web"}),"\n",(0,s.jsx)(r.h3,{id:"interfaz-de-usuario",children:"Interfaz de usuario"}),"\n",(0,s.jsx)(r.p,{children:"Cuando se ejecuta el formulario, las funciones est\xe1ndar de la interfaz del navegador est\xe1n disponibles para el usuario en el \xe1rea web, lo que permite la interacci\xf3n con otras \xe1reas del formulario:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Comandos men\xfa Edici\xf3n"}),": cuando el \xe1rea web tiene el foco, los comandos del men\xfa ",(0,s.jsx)(r.strong,{children:"Edici\xf3n"})," pueden utilizarse para realizar acciones como copiar, pegar, seleccionar todo, etc., seg\xfan la selecci\xf3n."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"El men\xfa contextual"}),": es posible utilizar el ",(0,s.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/propertiesEntry#context-menu",children:"men\xfa contextual"})," est\xe1ndar del sistema con el \xe1rea web. La visualizaci\xf3n del men\xfa contextual se puede controlar con el comando ",(0,s.jsx)(r.code,{children:"WA SET PREFERENCE"}),"."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Arrastrar y soltar"}),': el usuario puede arrastrar y soltar texto, im\xe1genes y documentos dentro del \xe1rea web o entre un \xe1rea web y los objetos de los formularios 4D, seg\xfan las propiedades de los objetos 4D. Por razones de seguridad, no se permite por defecto cambiar el contenido de un \xe1rea web mediante la acci\xf3n de arrastrar y soltar un archivo o una URL. En este caso, el cursor muestra un icono "prohibido" ',(0,s.jsx)(r.img,{src:n(338740).A+"",width:"26",height:"28"}),". Tiene que utilizar la instrucci\xf3n ",(0,s.jsx)(r.code,{children:'WA SET PREFERENCE(*; "warea";WA enable URL drop;True)'}),' para mostrar un icono "soltar" y generar el evento ',(0,s.jsx)(r.a,{href:"/docs/es/20-R6/Events/onWindowOpeningDenied",children:(0,s.jsx)(r.code,{children:"On Window Opening Denied"})}),". En este evento, se puede llamar al comando ",(0,s.jsx)(r.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1020.html",children:(0,s.jsx)(r.code,{children:"WA OPEN URL"})})," o establecer la variable ",(0,s.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/propertiesWebArea#url",children:"URL"})," en respuesta a una ca\xedda del usuario."]}),"\n"]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["Las funciones de arrastrar y soltar descritas anteriormente no son compatibles con las \xe1reas web que utilizan el motor de renderizaci\xf3n del sistema ",(0,s.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"de macOS"}),"."]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"subformularios",children:"Subformularios"}),"\n",(0,s.jsx)(r.p,{children:"Por razones relacionadas con los mecanismos de redibujado de ventanas, la inserci\xf3n de un \xe1rea web en un subformulario est\xe1 sujeta a las siguientes restricciones:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"El subformulario no debe poder desplazarse"}),"\n",(0,s.jsx)(r.li,{children:"Los l\xedmites del \xe1rea web no deben superar el tama\xf1o del subformulario"}),"\n"]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"No se soporta la superposici\xf3n de un \xe1rea web sobre o debajo de otros objetos formulario."}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"conflicto-entre-el-\xe1rea-web-y-el-servidor-web-windows",children:"Conflicto entre el \xe1rea web y el servidor web (Windows)"}),"\n",(0,s.jsx)(r.p,{children:"En Windows, no se recomienda acceder, a trav\xe9s de un \xe1rea web, al servidor web de la aplicaci\xf3n 4D que contiene el \xe1rea, ya que esta configuraci\xf3n podr\xeda provocar un conflicto que paralice la aplicaci\xf3n. Por supuesto, un 4D remoto puede acceder al servidor web de 4D Server, pero no a su propio servidor web."}),"\n",(0,s.jsx)(r.h3,{id:"inserci\xf3n-del-protocolo-macos",children:"Inserci\xf3n del protocolo (macOS)"}),"\n",(0,s.jsxs)(r.p,{children:['Las URLs manejadas por programaci\xf3n en \xe1reas web bajo macOS deben comenzar con el protocolo. Por ejemplo, debe pasar la cadena "',(0,s.jsx)(r.a,{href:"http://www.mysite.com",children:"http://www.mysite.com"}),'" y no s\xf3lo "',(0,s.jsx)(r.a,{href:"http://www.mysite.com",children:"www.mysite.com"}),'".']}),"\n",(0,s.jsx)(r.h2,{id:"acceso-al-inspector-web",children:"Acceso al inspector web"}),"\n",(0,s.jsx)(r.p,{children:"Puede visualizar y utilizar un inspector web dentro de las \xe1reas web de sus formularios o en las \xe1reas web fuera de la pantalla. El inspector web es un depurador que permite analizar el c\xf3digo y el flujo de informaci\xf3n de las p\xe1ginas web."}),"\n",(0,s.jsxs)(r.p,{children:["Para mostrar el inspector Web, puede ejecutar el comando ",(0,s.jsx)(r.code,{children:"WA OPEN WEB INSPECTOR"})," o utilizar el men\xfa contextual del \xe1rea web."]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsxs)(r.strong,{children:["Execute the ",(0,s.jsx)(r.code,{children:"WA OPEN WEB INSPECTOR"})," command"]}),(0,s.jsx)(r.br,{})," This command can be used directly with onscreen (form object) and offscreen web areas."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Use the web area context menu"}),(0,s.jsx)(r.br,{})," This feature can only be used with onscreen web areas and requires that the following conditions are met:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["el ",(0,s.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/propertiesEntry#context-menu",children:"men\xfa contextual"})," del \xe1rea web est\xe1 activado"]}),"\n",(0,s.jsx)(r.li,{children:"el uso del inspector est\xe1 expresamente autorizado en el \xe1rea mediante la siguiente declaraci\xf3n:"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'    WA SET PREFERENCE(*;"WA";WA enable Web inspector;True)  \n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["Con ",(0,s.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"Motor de renderizado del sistema Windows"}),", un cambio en esta preferencia requiere que se tenga en cuenta una acci\xf3n de navegaci\xf3n en el \xe1rea (por ejemplo, una actualizaci\xf3n de la p\xe1gina)."]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["Para m\xe1s informaci\xf3n, consulte la descripci\xf3n del comando ",(0,s.jsx)(r.code,{children:"WA SET PREFERENCE"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["Cuando haya realizado los ajustes como se ha descrito anteriormente, entonces tendr\xe1 nuevas opciones como ",(0,s.jsx)(r.strong,{children:"Inspeccionar elemento"})," en el men\xfa contextual del \xe1rea. Al seleccionar esta opci\xf3n, se muestra la ventana del inspector web."]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"Para una descripci\xf3n detallada de las funcionalidades de este depurador, consulte la documentaci\xf3n que ofrece el motor de renderizado web."}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"propiedades-soportadas",children:"Propiedades soportadas"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"BEstilo del borde"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Inferior"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/propertiesObject#css-class",children:"Clase"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/propertiesEntry#context-menu",children:"Men\xfa contextual"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/propertiesCoordinatesAndSizing#height",children:"Altura"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Dim. horizontal"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/propertiesCoordinatesAndSizing#left",children:"Izquierda"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/propertiesAction#method",children:"M\xe9todo"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/propertiesObject#object-name",children:"Nombre del objeto"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/propertiesWebArea#progression",children:"Progresi\xf3n"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/propertiesCoordinatesAndSizing#right",children:"Derecha"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/propertiesCoordinatesAndSizing#top",children:"Arriba"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/propertiesObject#type",children:"Tipo"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/propertiesWebArea#url",children:"URL"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"Utilizar el motor de renderizado Web integrado"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/propertiesObject#variable-or-expression",children:"Variable o expresi\xf3n"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Dim. vertical"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/propertiesDisplay#visibility",children:"Visibilidad"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/propertiesCoordinatesAndSizing#width",children:"Ancho"})]})]})}function p(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},338740:(e,r,n)=>{n.d(r,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAcCAIAAADwcTiEAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA00lEQVR4nK3QWw7CQAgFUPa/Bt9xC2rbrdjWpSgJCSIwQM2Q+zXcOXaE3W3pGEgbm9Kduz87JuHeZqrc/jHL0GUwQ+dY2MC5kEKrnLLkS1MR7BsVFPwDaov5codhsW/EEzxXCUSfUxcCUXOt34zF1tbheF0Uq1ws/sMFos8dx5Ui13yoVnLr9h2uIrbK4N6xnBXdps9VRJ87jwvlNMwY+yguUFSBbnE0p0RGeQLrh2t9gjv2qylwmVaKFV2Uzm0/4SQqJ+4nHIYLKgnXJb256/TqmA8UCWnf7F651gAAAABJRU5ErkJggg=="},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>d});var s=n(296540);const o={},a=s.createContext(o);function i(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);