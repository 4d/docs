"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90919"],{132463:function(e,n,a){a.r(n),a.d(n,{default:()=>u,frontMatter:()=>t,metadata:()=>o,assets:()=>l,toc:()=>i,contentTitle:()=>d});var o=JSON.parse('{"id":"commands-legacy/keystroke","title":"Keystroke","description":"Keystroke  : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/keystroke.md","sourceDirName":"commands-legacy","slug":"/commands/keystroke","permalink":"/docs/es/commands/keystroke","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fkeystroke.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"keystroke","title":"Keystroke","slug":"/commands/keystroke","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is editing text","permalink":"/docs/es/commands/is-editing-text"},"next":{"title":"Archivo y carpeta","permalink":"/docs/es/commands/theme/File-and-Folder"}}'),r=a("785893"),s=a("250065");let t={id:"keystroke",title:"Keystroke",slug:"/commands/keystroke",displayed_sidebar:"docs"},d=void 0,l={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Keystroke"}),"  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Car\xe1cter introducido por el usuario"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsx)(n.p,{children:"Keystroke devuelve el car\xe1cter introducido por el usuario en un campo o en un \xe1rea editable."}),"\n",(0,r.jsxs)(n.p,{children:["Generalmente, Keystroke se llama en un m\xe9todo de formulario o de objeto durante la gesti\xf3n del evento de formulario On Before Keystroke. Para detectar eventos de tecleo, utilice el comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/form-event",title:"Form event",children:"Form event"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Para reemplazar el car\xe1cter introducido por el usuario con otro car\xe1cter, utilice el comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/filter-keystroke",title:"FILTER KEYSTROKE",children:"FILTER KEYSTROKE"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," la funci\xf3n Keystroke no funciona en subformularios."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"IMPORTANTE:"})," si quiere efectuar algunas operaciones \u201Cal vuelo\u201D dependiendo del valor actual del \xe1rea de entrada que est\xe1 siendo editada, as\xed como del nuevo car\xe1cter a introducir, recuerde que el texto que ve en la pantalla NO ES a\xfan el valor del campo o de la variable fuente. El valor del campo o de la variable fuente de datos se asigna despu\xe9s de que se valida la entrada de datos para el \xe1rea (tabulaci\xf3n en otra \xe1rea, clic en un bot\xf3n, etc). Por lo tanto depende de usted el colocar los datos introducidos en una variable y luego trabajar con el valor de la variable. Debe hacer esto si necesita saber el valor actual del texto para efectuar acciones especiales. Igualmente puede utilizar la funci\xf3n ",(0,r.jsx)(n.a,{href:"/docs/es/commands/get-edited-text",title:"Get edited text",children:"Get edited text"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Puede utilizar el comando Keystroke para:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"efectuar un filtro personalizado de caracteres"}),"\n",(0,r.jsx)(n.li,{children:"crear un filtro de entrada no disponible en est\xe1ndar, por ejemplo en los filtros de entrada"}),"\n",(0,r.jsx)(n.li,{children:"implementar \xe1reas din\xe1micas de b\xfasqueda o de tecleo anticipado"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsxs)(n.p,{children:["Consulte los ejemplos del comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/filter-keystroke",title:"FILTER KEYSTROKE",children:"FILTER KEYSTROKE"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsxs)(n.p,{children:["Cuando procesa un evento On Before Keystroke, usted est\xe1 administrando la edici\xf3n del \xe1rea de texto actual (donde se encuentra el cursor), no el \u201Cvalor futuro\u201D de la fuente de datos (campo o variable) de esta \xe1rea. El m\xe9todo de proyecto Manejo tecleo permite colocar en una segunda variable los datos introducidos en un \xe1rea de texto, de manera que usted puede utilizar esta variable para efectuar diferentes acciones mientras introduce caracteres en el \xe1rea. Usted pasa como primer par\xe1metro un puntero hacia la fuente de datos del \xe1rea, y como segundo par\xe1metro un puntero hacia la segunda variable. El m\xe9todo devuelve el nuevo valor del \xe1rea de texto en la segunda variable, y devuelve ",(0,r.jsx)(n.a,{href:"/docs/es/commands/true",title:"True",children:"True"})," si este valor es diferente del valor antes de la entrada del \xfaltimo car\xe1cter."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de proyecto Manejo tecleo\n\xa0\xa0// Manejo tecleo ( Puntero ; Puntero ) -> Booleano\n\xa0\xa0// Manejo tecleo ( -> srcArea ; -> curValor ) -> Es un nuevo valor\n\xa0\n\xa0var $1;$2 : Pointer\n\xa0var $vtNuevoValor : Text\n\xa0\n\xa0\xa0// Obtener el texto seleccionado en el \xe1rea editable\n\xa0GET HIGHLIGHT($1->;$vlInicio;$vlFin)\n\xa0\xa0// Comenzar a trabajar con el valor actual\n\xa0$vtNuevoValor:=$2->\n\xa0\xa0// Dependiendo de la tecla presionada o del car\xe1cter introducido,\n\xa0\xa0// Realizar las acciones apropriadas\n\xa0Case of\n\xa0\n\xa0\xa0// La tecla Retroceso ha sido presionada\n\xa0\xa0\xa0\xa0:(Character code(Keystroke)=Backspace)\n\xa0\xa0// Suprimir los caracteres seleccionados o el car\xe1cter a la izquierda del cursor\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtNuevoValor:=Substring($vtNuevoValor;1;$vlInicio-1-Num($vlInicio=$vlFin))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0+Substring($vtNuevoValor;$vlFin)\n\xa0\n\xa0\xa0// Un car\xe1cter aceptable ha sido introducido\n\xa0\xa0\xa0\xa0:(Position(Keystroke;"abcdefghjiklmnopqrstuvwxyz -0123456789")>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlInicio#$vlFin)\n\xa0\xa0// Uno o varios caracteres son seleccionados, el keystroke va a borrarlos\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtNuevoValor:=Substring($vtNuevoValor;1;$vlInicio-1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0+Keystroke+Substring($vtNuevoValor;$vlFin)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// La selecci\xf3n de texto es el cursor\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0// El cursor est\xe1 actualmente al comienzo del texto\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlInicio<=1)\n\xa0\xa0// Inserci\xf3n del car\xe1cter al principio del texto\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtNuevoValor:=Keystroke+$vtNuevoValor\n\xa0\xa0// El cursor est\xe1 actualmente al final del texto\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlInicio>=Length($vtNuevoValor))\n\xa0\xa0// A\xf1adir el car\xe1cter al final del texto\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtNuevoValor:=$vtNuevoValor+Keystroke\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// El cursor se encuentra en el texto, insertar el nuevo car\xe1cter\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtNuevoValor:=Substring($vtNuevoValor;1;$vlInicio-1)+Keystroke\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0+Substring($vtNuevoValor;$vlInicio)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0\xa0// Una tecla flecha ha sido presionada\n\xa0\xa0// No haga nada, s\xf3lo acepte el car\xe1cter tecleado\n\xa0\xa0\xa0\xa0:(Character code(Keystroke)=Left arrow key)\n\xa0\xa0\xa0\xa0:(Character code(Keystroke)=Right arrow key)\n\xa0\xa0\xa0\xa0:(Character code(Keystroke)=Up arrow key)\n\xa0\xa0\xa0\xa0:(Character code(Keystroke)=Down arrow key)\n\xa0\xa0`\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0// No acepte caracteres diferentes de letras, d\xedgitos, espacios y guiones\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FILTER KEYSTROKE("")\n\xa0End case\n\xa0\xa0// \xbfEs diferente el valor ahora?\n\xa0$0:=($vtNuevoValor#$2->)\n\xa0\xa0// Devolver el valor para la gesti\xf3n del pr\xf3ximo keystroke\n\xa0$2->:=$vtNuevoValor\n'})}),"\n",(0,r.jsx)(n.p,{children:"Una vez este m\xe9todo de proyecto se a\xf1ada a su aplicaci\xf3n, puede utilizarlo de la siguiente forma:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de objeto del \xe1rea de entrada MiObjeto\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0MiObjeto:=""\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0MiObjetoCach\xe9:=""\n\xa0\xa0\xa0\xa0:(FORM Event=On Before Keystroke)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Manejo tecleo(->MiObjeto;->MiObjetoCach\xe9))\n\xa0\xa0// Efectuar las acciones apropiadas utilizando el valor almacenado en MiObjetoCach\xe9\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,r.jsx)(n.p,{children:"Examinemos por ejemplo el siguiente formulario:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:a(733263).Z+"",width:"274",height:"345"})}),"\n",(0,r.jsxs)(n.p,{children:["Esta compuesto de los siguientes objetos: un \xe1rea editable ",(0,r.jsx)(n.em,{children:"vsBusqueda"}),", un \xe1rea no editable ",(0,r.jsx)(n.em,{children:"vsMensaje"}),", y un \xe1rea de desplazamiento ",(0,r.jsx)(n.em,{children:"asBusqueda"}),". Durante la entrada de caracteres en ",(0,r.jsx)(n.em,{children:"vsBusqueda"}),", el m\xe9todo para ese objeto efect\xfaa una b\xfasqueda en la tabla [Codigos postales], permitiendo al usuario encontrar ciudades solamente presionando los primeros caracteres de los nombres de la ciudades."]}),"\n",(0,r.jsxs)(n.p,{children:["Este es el m\xe9todo de objeto ",(0,r.jsx)(n.em,{children:"vsBusqueda"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de objeto del \xe1rea de entrada vsBusqueda\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsBusqueda:=""\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsResult:=""\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsMensaje:="Introduzca los primeros caracteres de la ciudad que busca."\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR VARIABLE(asBusqueda)\n\xa0\xa0\xa0\xa0:(FORM Event=On Before Keystroke)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Manejo tecleo(->vsBusqueda;->vsResult))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(vsResult#"")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Codigos postales];[Codigos postales]Ciudad=vsResult+"@")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0MESSAGES OFF\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DISTINCT VALUES([Codigos postales]Ciudad;asBusqueda)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0MESSAGES ON\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlResult:=Size of array(asBusqueda)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlResult=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsMensaje:="No se encontr\xf3 ninguna ciudad."\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlResult=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsMensaje:="Se encontr\xf3 una ciudad."\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsMensaje:=String($vlResult)+" ciudades encontradas."\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE FROM ARRAY(asBusqueda;1;Size of array(asBusqueda))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsMensaje:="Introduzca los primeros caracteres de la ciudad que est\xe1 buscando."\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,r.jsx)(n.p,{children:"Este es el formulario en ejecuci\xf3n:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:a(126162).Z+"",width:"285",height:"346"})}),"\n",(0,r.jsx)(n.p,{children:"Utilizando las habilidades de la comunicaci\xf3n interproceso de 4D, puede construir interfaces de usuario en las cuales las caracter\xedsticas de b\xfasqueda se ofrezcan en ventanas flotantes que se comuniquen con procesos en los cuales los registros son listados o editados."}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/filter-keystroke",children:"FILTER KEYSTROKE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/form-event-code",children:"Form event code"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/get-edited-text",children:"Get edited text"})]}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"390"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},733263:function(e,n,a){a.d(n,{Z:function(){return o}});let o=a.p+"assets/images/pict21523.es-e05579dead487c69ae62b46f55697516.png"},126162:function(e,n,a){a.d(n,{Z:function(){return o}});let o=a.p+"assets/images/pict21524.es-2220a6c3fd283d5814559247eb827aa0.png"},250065:function(e,n,a){a.d(n,{Z:function(){return d},a:function(){return t}});var o=a(667294);let r={},s=o.createContext(r);function t(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);