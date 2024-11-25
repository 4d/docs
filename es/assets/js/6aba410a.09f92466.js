"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51904"],{225203:function(e,s,n){n.r(s),n.d(s,{metadata:()=>o,contentTitle:()=>i,default:()=>m,assets:()=>d,toc:()=>c,frontMatter:()=>l});var o=JSON.parse('{"id":"commands-legacy/display-selection","title":"DISPLAY SELECTION","description":"DISPLAY SELECTION ( {; modoSelecci\xf3n}{; entradaList}{; }{; } )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/display-selection.md","sourceDirName":"commands-legacy","slug":"/commands/display-selection","permalink":"/docs/es/commands/display-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdisplay-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"display-selection","title":"DISPLAY SELECTION","slug":"/commands/display-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DELETE SELECTION","permalink":"/docs/es/commands/delete-selection"},"next":{"title":"Displayed line number","permalink":"/docs/es/commands/displayed-line-number"}}'),r=n("785893"),a=n("250065");let l={id:"display-selection",title:"DISPLAY SELECTION",slug:"/commands/display-selection",displayed_sidebar:"docs"},i=void 0,d={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function t(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"DISPLAY SELECTION"})," ( {",(0,r.jsx)(s.em,{children:"tabla"}),"}{; ",(0,r.jsx)(s.em,{children:"modoSelecci\xf3n"}),"}{; ",(0,r.jsx)(s.em,{children:"entradaList"}),"}{; *}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe1metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"tabla"}),(0,r.jsx)(s.td,{children:"Table"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Tabla a mostrar, o Tabla por defecto, si se omite"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"modoSelecci\xf3n"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Modo de selecci\xf3n"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"entradaList"}),(0,r.jsx)(s.td,{children:"Boolean"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Autorizar entrada en lista"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"*"}),(0,r.jsx)(s.td,{children:"Operator"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Utilizar el formulario de salida en caso de selecci\xf3n de un solo registro y ocultar las barras de desplazamiento en el formulario de entrada"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"*"}),(0,r.jsx)(s.td,{children:"Operator"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Mostrar las barras de desplazamiento en el formulario de entrada (anular el segundo efecto del primer par\xe1metro *)"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,r.jsx)(s.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(s.p,{children:["DISPLAY SELECTION muestra la selecci\xf3n de ",(0,r.jsx)(s.em,{children:"tabla"}),", utilizando el formulario de salida. Los registros se muestran en una lista por la cual se puede desplazar similar a la del modo Dise\xf1o. Si el usuario hace doble clic en un registro, por defecto se muestra el registro en el formulario de entrada actual. La lista se muestra en la ventana del primer plano."]}),"\n",(0,r.jsxs)(s.p,{children:["Para mostrar una selecci\xf3n y poder igualmente modificar un registro en el formulario de entrada actual despu\xe9s de hacer doble clic en \xe9l (como lo hace en la ventana del entorno Dise\xf1o), utilice ",(0,r.jsx)(s.a,{href:"/docs/es/commands/object-set-enterable",children:"OBJECT SET ENTERABLE"})," en lugar de DISPLAY SELECTION."]}),"\n",(0,r.jsx)(s.p,{children:"La informaci\xf3n a continuaci\xf3n aplica a ambos comandos, excepto por la informaci\xf3n sobre la modificaci\xf3n de registros."}),"\n",(0,r.jsxs)(s.p,{children:["Despu\xe9s de ejecutar DISPLAY SELECTION, no hay registro actual. Utilice un comando tal como ",(0,r.jsx)(s.a,{href:"/docs/es/commands/first-record",children:"FIRST RECORD"})," o ",(0,r.jsx)(s.a,{href:"/docs/es/commands/last-record",children:"LAST RECORD"})," para seleccionar uno."]}),"\n",(0,r.jsxs)(s.p,{children:["El par\xe1metro ",(0,r.jsx)(s.em,{children:"modoSeleccion"})," se utiliza para definir las posibilidades de selecci\xf3n de registros en la lista utilizando el rat\xf3n. En este par\xe1metro puede pasar una de las siguientes constantes del tema \u201C",(0,r.jsx)(s.em,{children:"Par\xe1metro de formulario"}),"\u201D:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Constante"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{children:"Valor"}),(0,r.jsx)(s.th,{children:"Comentario"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Multiple selection"}),(0,r.jsx)(s.td,{children:"Entero largo"}),(0,r.jsx)(s.td,{children:"2"}),(0,r.jsxs)(s.td,{children:["El usuario puede seleccionar varios registros al tiempo. Para seleccionar registros contiguos, haga clic en el primer registro a seleccionar, luego presione la tecla ",(0,r.jsx)(s.strong,{children:"May\xfas"})," antes de hacer clic en el \xfaltimo registro a incluir en la selecci\xf3n. Para seleccionar registros no adyacentes, haga clic en cada registro por separado mientras presiona la tecla ",(0,r.jsx)(s.strong,{children:"Ctrl"})," (Windows) o ",(0,r.jsx)(s.strong,{children:"Comando"})," (Mac OS)."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"No selection"}),(0,r.jsx)(s.td,{children:"Entero largo"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"No es posible seleccionar un registro en la lista"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Single selection"}),(0,r.jsx)(s.td,{children:"Entero largo"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"S\xf3lo es posible seleccionar un registro a la vez"})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:["Si no pasa el par\xe1metro ",(0,r.jsx)(s.em,{children:"modoSelecci\xf3n"}),", por defecto se utiliza el modo \u201CSelecci\xf3n m\xfaltiple\u201D."]}),"\n",(0,r.jsxs)(s.p,{children:["El par\xe1metro ",(0,r.jsx)(s.em,{children:"entradaLista"})," le permite autorizar el modo \u201CEntrada en lista\u201D en la lista mostrada. Este modo permite al usuario seleccionar y modificar directamente los valores de los registros en el formulario de salida. Pase ",(0,r.jsx)(s.a,{href:"/docs/es/commands/true",title:"True",children:"True"})," para activar este modo o ",(0,r.jsx)(s.a,{href:"/docs/es/commands/false",title:"False",children:"False"})," para desactivarlo. Por defecto, si no pasa el par\xe1metro ",(0,r.jsx)(s.em,{children:"entradaLista"}),", el modo \u201CEntrada en lista\u201D se desactiva."]}),"\n",(0,r.jsxs)(s.p,{children:["Recuerde que con el comando DISPLAY SELECTION, este par\xe1metro s\xf3lo permite la selecci\xf3n de los valores en la lista y no su modificaci\xf3n. De hecho, el comando DISPLAY SELECTION carga los registros de la selecci\xf3n actual en modo s\xf3lo lectura. S\xf3lo el comando ",(0,r.jsx)(s.a,{href:"/docs/es/commands/modify-selection",children:"MODIFY SELECTION"})," permite efectivamente la entrada de valores."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Nota:"})," el comando ",(0,r.jsx)(s.a,{href:"/docs/es/commands/object-set-enterable",children:"OBJECT SET ENTERABLE"})," permite activar o desactivar f\xe1cilmente el modo Entrada en lista."]}),"\n",(0,r.jsxs)(s.p,{children:["Algunas reglas relacionadas con el par\xe1metro opcional ",(0,r.jsx)(s.em,{children:"*"}),":"]}),"\n",(0,r.jsxs)(s.p,{children:["- Si la selecci\xf3n contiene s\xf3lo un registro y el primer par\xe1metro opcional ",(0,r.jsx)(s.em,{children:"*"})," no se utiliza, el registro se mostrar\xe1 en el formulario de entrada en lugar del formulario de salida.",(0,r.jsx)(s.br,{}),"\n- Si el primer par\xe1metro opcional ",(0,r.jsx)(s.em,{children:"*"})," se especifica, el registro \xfanico ser\xe1 mostrado en el formulario de salida.",(0,r.jsx)(s.br,{}),"\n- Si el primer par\xe1metro opcional ",(0,r.jsx)(s.em,{children:"*"})," se especifica y el usuario muestra el registro en el formulario de entrada haciendo doble clic en \xe9l, se ocultar\xe1n las barras de desplazamiento del formulario. Para anular este efecto, pase el segundo par\xe1metro opcional *."]}),"\n",(0,r.jsxs)(s.p,{children:["Puede poner botones personalizados en el \xe1rea del encabezado o del pie de p\xe1gina del formulario de salida para terminar la ejecuci\xf3n del comando DISPLAY SELECTION. Puede utilizar los botones autom\xe1ticos Aceptar o Cancelar para salir, o utilizar un m\xe9todo de objeto que llame a los comandos ",(0,r.jsx)(s.a,{href:"/docs/es/commands/accept",children:"ACCEPT"})," o ",(0,r.jsx)(s.a,{href:"/docs/es/commands/cancel",children:"CANCEL"}),". Cuando un formulario de salida llamado por el comando DISPLAY SELECTION no tiene botones, s\xf3lo la tecla ",(0,r.jsx)(s.strong,{children:"Escape"})," (Windows) o ",(0,r.jsx)(s.strong,{children:"Esc"})," (Mac OS) permiten salir de la lista."]}),"\n",(0,r.jsx)(s.p,{children:"Durante y despu\xe9s de la ejecuci\xf3n de DISPLAY SELECTION, los registros que el usuario selecciona se conservan en un conjunto llamado UserSet. UserSet est\xe1 disponible por medio de DISPLAY SELECTION a los m\xe9todos de objeto de los botones, a los m\xe9todos llamados por los comandos de men\xfa, as\xed como para el m\xe9todo de proyecto que llam\xf3 DISPLAY SELECTION."}),"\n",(0,r.jsx)(s.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsxs)(s.p,{children:["El siguiente ejemplo selecciona todos los registros en la tabla [Personas]. El comando DISPLAY SELECTION muestra los registros y permite al usuario seleccionar los registros a imprimir. Finalmente, selecciona los registros con ",(0,r.jsx)(s.a,{href:"/docs/es/commands/use-set",title:"USE SET",children:"USE SET"}),", y los imprime con ",(0,r.jsx)(s.a,{href:"/docs/es/commands/print-selection",title:"PRINT SELECTION",children:"PRINT SELECTION"}),":"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0ALL RECORDS([Personas])\xa0// Selecci\xf3n de todos los registros\n\xa0DISPLAY SELECTION([Personas];*)\xa0// Visualizaci\xf3n de los registros\n\xa0USE SET("UserSet")\xa0// Utilizar s\xf3lo los registros seleccionados por el usuario\n\xa0PRINT SELECTION([Personas])\xa0// Imprimir los registros que el usuario seleccion\xf3\n'})}),"\n",(0,r.jsx)(s.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsxs)(s.p,{children:["Ver el ejemplo #6 del comando ",(0,r.jsx)(s.a,{href:"/docs/es/commands/form-event",title:"Form event",children:"Form event"}),". Este ejemplo muestra todas las pruebas que puede necesitar para efectuar monitoreo total de los eventos que ocurren durante la ejecuci\xf3n del comando DISPLAY SELECTION."]}),"\n",(0,r.jsx)(s.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,r.jsxs)(s.p,{children:["Para reproducir las funcionalidades ofrecidas por el men\xfa Registros del entorno Dise\xf1o cuando utiliza DISPLAY SELECTION o ",(0,r.jsx)(s.a,{href:"/docs/es/commands/modify-selection",title:"MODIFY SELECTION",children:"MODIFY SELECTION"})," en modo Aplicaci\xf3n, proceda de la siguiente forma:"]}),"\n",(0,r.jsx)(s.p,{children:"a. En el entorno Dise\xf1o, cree una barra de men\xfas con los comandos de men\xfa que quiera, por ejemplo, Mostrar todos, Buscar y Ordenar."}),"\n",(0,r.jsxs)(s.p,{children:["b. Asocie esta barra de men\xfas (utilizando el men\xfa \u201CBarra de men\xfas asociada\u201D en la caja de di\xe1logo de propiedades del formulario) con el formulario de salida utilizado con los comandos DISPLAY SELECTION o ",(0,r.jsx)(s.a,{href:"/docs/es/commands/modify-selection",title:"MODIFY SELECTION",children:"MODIFY SELECTION"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"c. Asocie los siguientes m\xe9todos de proyecto a sus comandos de men\xfa:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"\xa0\xa0// M_SHOW_ALL (asociado al comando de men\xfa Mostrar todos)\n\xa0$vpCurTabla:=Current form table\n\xa0ALL RECORDS($vpCurTabla->)\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"\xa0\xa0// M_QUERY (asociado al comando de men\xfa Buscar)\n\xa0$vpCurTabla:=Current form table\n\xa0QUERY($vpCurTable->)\n\xa0\n\xa0\xa0// M_ORDER_BY (asociado al comando de men\xfa Ordenar)\n\xa0$vpCurTabla:=Current form table\n\xa0ORDER BY($vpCurTabla->)\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Tambi\xe9n puede utilizar otros comandos, tales como ",(0,r.jsx)(s.a,{href:"/docs/es/commands/print-selection",title:"PRINT SELECTION",children:"PRINT SELECTION"}),", ",(0,r.jsx)(s.a,{href:"/docs/es/commands/qr-report",title:"QR REPORT",children:"QR REPORT"}),", etc. para ofrecer todas las opciones de men\xfa est\xe1ndar que quiera cada vez que visualice o modifique una selecci\xf3n en el modo Aplicaci\xf3n. Gracias al comando ",(0,r.jsx)(s.a,{href:"/docs/es/commands/current-form-table",title:"Current form table",children:"Current form table"}),", estos m\xe9todo son gen\xe9ricos, y la barra de men\xfas a los cuales soporta puede asociarse a todo formulario de salida de cualquier tabla."]}),"\n",(0,r.jsx)(s.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"Conjuntos"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/es/commands/form-event-code",children:"Form event code"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/es/commands/modify-selection",children:"MODIFY SELECTION"})]})]})}function m(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return l}});var o=n(667294);let r={},a=o.createContext(r);function l(e){let s=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(a.Provider,{value:s},e.children)}}}]);