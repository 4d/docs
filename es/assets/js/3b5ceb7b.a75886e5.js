"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[82974],{960628:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>t,toc:()=>l});var o=s(474848),a=s(28453);const r={id:"on-event-call",title:"ON EVENT CALL",slug:"/commands/on-event-call",displayed_sidebar:"docs"},i=void 0,t={id:"commands-legacy/on-event-call",title:"ON EVENT CALL",description:"ON EVENT CALL ( metodoEvento {; nombreProceso} )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/on-event-call.md",sourceDirName:"commands-legacy",slug:"/commands/on-event-call",permalink:"/docs/es/commands/on-event-call",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-event-call.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"on-event-call",title:"ON EVENT CALL",slug:"/commands/on-event-call",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"ON ERR CALL",permalink:"/docs/es/commands/on-err-call"},next:{title:"SET ASSERT ENABLED",permalink:"/docs/es/commands/set-assert-enabled"}},d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"ON EVENT CALL"})," ( ",(0,o.jsx)(n.em,{children:"metodoEvento"})," {; ",(0,o.jsx)(n.em,{children:"nombreProceso"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"metodoEvento"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"M\xe9todo de evento a llamar, o Cadena vac\xeda para detener la interceptaci\xf3n de eventos"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"nombreProceso"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nombre del proceso"})]})]})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando ",(0,o.jsx)(n.strong,{children:"ON EVENT CALL"})," instala el m\xe9todo, cuyo nombre se pasa en ",(0,o.jsx)(n.em,{children:"metodoEvento"}),", como m\xe9todo de gesti\xf3n de eventos."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Consejo:"})," este comando necesita un nivel de conocimiento avanzado en programaci\xf3n. Generalmente, no necesita utilizar ",(0,o.jsx)(n.strong,{children:"ON EVENT CALL"})," para trabajar con eventos. Cuando utiliza formularios, 4D administra los eventos y los env\xeda a los objetos y formularios apropiados."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Consejo:"})," comandos tales como ",(0,o.jsx)(n.a,{href:"/docs/es/commands/mouse-position",children:"MOUSE POSITION"}),", ",(0,o.jsx)(n.a,{href:"/docs/es/commands/shift-down",children:"Shift down"}),", etc., para obtener informaci\xf3n sobre eventos. Estos comandos pueden llamarse desde los m\xe9todos de objeto para obtener la informaci\xf3n que necesita sobre un evento involucrado con un objeto. Utilizarlos le ahorra la escritura de un algoritmo basado en una estructura de tipo ",(0,o.jsx)(n.strong,{children:"ON EVENT CALL"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["El alcance de este comando es la sesi\xf3n de trabajo actual. Por defecto, el m\xe9todo se ejecuta en un proceso local separado. S\xf3lo puede tener un m\xe9todo de gesti\xf3n de eventos a la vez. Para detener un m\xe9todo de gesti\xf3n de eventos, llame nuevamente ",(0,o.jsx)(n.strong,{children:"ON EVENT CALL"})," y pase una cadena vac\xeda en ",(0,o.jsx)(n.em,{children:"metodoEvento"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Como el m\xe9todo de gesti\xf3n de eventos se ejecuta en un proceso separado, est\xe1 activo constantemente, incluso si ning\xfan m\xe9todo de 4D se est\xe1 ejecutando. Despu\xe9s de la instalaci\xf3n, 4D llama al m\xe9todo de gesti\xf3n de eventos cada vez que ocurre un evento. Un evento puede ser un clic con el rat\xf3n o presionar una tecla."}),"\n",(0,o.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,o.jsx)(n.em,{children:"nomProces"})," da nombre al proceso creado por el comando ON EVENT CALL. Si ",(0,o.jsx)(n.em,{children:"nomProces"})," comienza por el s\xedmbolo pesos (",(0,o.jsx)(n.em,{children:"$"}),"), comienza un proceso local, lo cual generalmente es lo que usted quiere. Si omite el par\xe1metro ",(0,o.jsx)(n.em,{children:"nomProces"}),", 4D crea por defecto un proceso local llamado ",(0,o.jsx)(n.em,{children:"$Event Manager"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Advertencia:"})," sea muy cuidadoso con lo que escribe en un m\xe9todo de gesti\xf3n de eventos. NO llame comandos que generen eventos, de lo contrario ser\xe1 extremadamente dif\xedcil salir de la ejecuci\xf3n del m\xe9todo de gesti\xf3n de eventos. La combinaci\xf3n de teclas ",(0,o.jsx)(n.strong,{children:"Ctrl+May\xfas+Retroceso"})," (en Windows) o ",(0,o.jsx)(n.strong,{children:"Comando-May\xfas-Control-Retroceso"})," (en Mac) le permite matar el proceso en el Gestor de eventos. Podr\xeda utilizar esta t\xe9cnica para recuperar un m\xe9todo de gesti\xf3n de eventos incontrolable (por ejemplo, uno que tenga eventos que disparen bugs)."]}),"\n",(0,o.jsx)(n.p,{children:"En el m\xe9todo de gesti\xf3n de eventos, puede leer las siguientes variables sistema MouseDown, KeyCode, Modifiers, MouseX, MouseY y MouseProc. Note que estas variables son variables proceso. Su alcance es por lo tanto el proceso de gesti\xf3n de eventos. C\xf3pielas en las variables interproceso si quiere que sus valores est\xe9n disponibles en otro proceso."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"La variable sistema MouseDown toma el valor 1 si el evento es un clic del rat\xf3n y 0 si no."}),"\n",(0,o.jsxs)(n.li,{children:["La variable sistema KeyCode contiene el c\xf3digo del car\xe1cter digitado en el teclado o el c\xf3digo de una tecla de funci\xf3n. Consulte las secciones ",(0,o.jsx)(n.em,{children:"C\xf3digos Unicode"})," y ",(0,o.jsx)(n.a,{href:"/docs/es/commands/export-text",children:"EXPORT TEXT"})," que listan los c\xf3digos de caracteres utilizados por 4D, as\xed como tambi\xe9n la secci\xf3n ",(0,o.jsx)(n.em,{children:"C\xf3digos de teclas de funci\xf3n"}),".4D ofrece constantes predefinidas para los principales y teclas de funciones. En la ventana del explorador, busque los temas de estas constantes."]}),"\n",(0,o.jsxs)(n.li,{children:["La variable sistema Modifiers contiene el valor modificador. Indica si una tecla de modificaci\xf3n ha sido presionada cuando el evento ocurri\xf3. Las siguientes teclas pueden ser detectadas:",(0,o.jsx)(n.br,{}),"\n| ",(0,o.jsx)(n.strong,{children:"Plataforma"})," | ",(0,o.jsx)(n.strong,{children:"Modificadores"}),"                                            |",(0,o.jsx)(n.br,{}),"\n| -------------- | ------------------------------------------------------------ |",(0,o.jsx)(n.br,{}),"\n| Windows        | May\xfas, Bloqueo de may\xfasculas, Alt, Ctrl,                     |",(0,o.jsx)(n.br,{}),"\n| Macintosh      | May\xfas, Bloqueo de may\xfasculas, Alt u Opci\xf3n, Comando, Control |"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Las teclas modificadoras no generan un evento por su cuenta; otra tecla o el bot\xf3n del rat\xf3n tambi\xe9n deben ser presionadas. La variable Modifiers es una variable Entero largo que contiene un campo de bits. 4D ofrece constantes predefinidas que especifican la posici\xf3n del bit o la m\xe1scara de bits para cada tecla de modificaci\xf3n. Por ejemplo, para detectar si la tecla May\xfas fue presionada para el evento, puede escribir:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0If(Modifiers?? Shift key bit)\xa0//Si la tecla May\xfas fue presionada  \n"})}),"\n",(0,o.jsx)(n.p,{children:"o:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0If((Modifiers&Shift key mask)#0)\xa0//Si la tecla May\xfas fue presionada  \n"})}),"\n",(0,o.jsxs)(n.p,{children:["Puede utilizar una de las siguientes constantes, dependiendo de la tecla del modificador a probar en la plataforma, que se encuentra en el tema ",(0,o.jsx)(n.em,{children:"Eventos (Modificadores)"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Modificador"})}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Constante"})})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"May\xfascula"}),(0,o.jsx)(n.td,{children:"Shift key bit / Shift key mask"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Bloqueo de may\xfasculas"}),(0,o.jsx)(n.td,{children:"Caps lock key bit / Caps lock key mask"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Alt (tambi\xe9n llamado Opci\xf3n en OS X)"}),(0,o.jsx)(n.td,{children:"Option key bit / Option key mask"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Ctrl en Windows"}),(0,o.jsx)(n.td,{children:"Command key bit / Command key mask"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Ctrl en OS X"}),(0,o.jsx)(n.td,{children:"Control key bit / Control key mask"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Comando en OS X"}),(0,o.jsx)(n.td,{children:"Command key bit / Command key mask"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Clic derecho"}),(0,o.jsx)(n.td,{children:"Control key bit / Control key mask"})]})]})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Las variables sistema MouseX y MouseY contienen las posiciones horizontal y vertical del clic del rat\xf3n, expresadas en el sistema de coordenadas locales de la ventana donde el clic se produjo. La esquina superior izquierda de la ventana es la posici\xf3n 0,0. Estas variables son significativas s\xf3lo cuando hay un clic del rat\xf3n."}),"\n",(0,o.jsx)(n.li,{children:"La variable sistema MouseProc contiene el n\xfamero de referencia del proceso en el cual ocurri\xf3 el evento (clic del rat\xf3n)."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Importante:"})," las variables sistema MouseDown, KeyCode, Modifiers, MouseX, MouseY y MouseProc s\xf3lo contienen valores significativos en un m\xe9todo de gesti\xf3n de eventos instalado con ",(0,o.jsx)(n.strong,{children:"ON EVENT CALL"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsxs)(n.p,{children:["Este ejemplo cancela la impresi\xf3n si el usuario presiona las teclas Ctrl+punto. Primero, el m\xe9todo de gesti\xf3n de eventos se instala. Luego aparece un mensaje, anunciando que el usuario puede cancelar la impresi\xf3n. Si la variable interproceso ",(0,o.jsx)(n.em,{children:"vbWeStop"})," es igual a True en el m\xe9todo de gesti\xf3n de eventos, una caja de di\xe1logo de alerta aparece para mostrar al usuario el n\xfamero de registros que han sido impresos. Luego el m\xe9todo de gesti\xf3n de eventos se desinstala:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0PAGE SETUP\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\u25cavbWeStop:=False\n\xa0\xa0\xa0\xa0ON EVENT CALL("GESTI\xd3N DE EVENTOS")\xa0// Instala el m\xe9todo de gesti\xf3n de eventos\n\xa0\xa0\xa0\xa0ALL RECORDS([Personas])\n\xa0\xa0\xa0\xa0MESSAGE("Para interrumpir la impresi\xf3n presione Ctrl+Punto.")\n\xa0\xa0\xa0\xa0$vlNbRegistros:=Records in selection([People])\n\xa0\xa0\xa0\xa0For($vlRegistro;1;$vlNbRegistros)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(\u25cavbWeStop)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Printing cancelled at record "+String($vlRegistro)+" of "+String($vlNbRegistros))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlRegistro:=$vlNbRegistros+1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Print form([Personas];"Informe especial")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0PAGE BREAK\n\xa0\xa0\xa0\xa0ON EVENT CALL("")\xa0// Desinstala el m\xe9todo de gesti\xf3n de eventos\n\xa0End if\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Si se ha presionado la combinaci\xf3n Ctrl+punto, el m\xe9todo de gesti\xf3n de eventos da a ",(0,o.jsx)(n.em,{children:"vbWeStop"})," el valor True:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de proyecto GESTI\xd3N DE EVENTOS\n\xa0If((Modifiers?? Command key bit)&(KeyCode=Period))\n\xa0\xa0\xa0\xa0CONFIRM("\xbfEst\xe1 seguro?")\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\u25cavbWeStop:=True\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FILTER EVENT\xa0// NO olvide este llamado; de lo contrario 4D tambi\xe9n obtendr\xe1 este evento\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Note que este ejemplo utiliza ON EVENT CALL porque realiza un informe especial de impresi\xf3n utilizando los comandos ",(0,o.jsx)(n.em,{children:"PAGE SETUP"}),", ",(0,o.jsx)(n.a,{href:"/docs/es/commands/print-form",title:"Print form",children:"Print form"})," y ",(0,o.jsx)(n.a,{href:"/docs/es/commands/page-break",title:"PAGE BREAK",children:"PAGE BREAK"})," en una estructura de tipo bucle ",(0,o.jsx)(n.em,{children:"For...End for"}),".",(0,o.jsx)(n.br,{}),"\nSi imprime un informe utilizando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/print-selection",title:"PRINT SELECTION",children:"PRINT SELECTION"}),", NO necesita administrar los eventos que permiten al usuario interrumpir la impresi\xf3n; ",(0,o.jsx)(n.a,{href:"/docs/es/commands/print-selection",title:"PRINT SELECTION",children:"PRINT SELECTION"})," hace esto por usted."]}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/commands/filter-event",children:"FILTER EVENT"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/mouse-position",children:"MOUSE POSITION"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/method-called-on-event",children:"Method called on event"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/shift-down",children:"Shift down"})]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>t});var o=s(296540);const a={},r=o.createContext(a);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);