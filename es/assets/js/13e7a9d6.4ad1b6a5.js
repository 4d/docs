"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59562"],{811340:function(e,o,n){n.r(o),n.d(o,{default:()=>p,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>i,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/new-process","title":"New process","description":"New process ( metodo ; pila {; nombre {; param {; param2 ; ... ; paramN}}}{; *} ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/new-process.md","sourceDirName":"commands-legacy","slug":"/commands/new-process","permalink":"/docs/es/20-R8/commands/new-process","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fnew-process.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"new-process","title":"New process","slug":"/commands/new-process","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET REGISTERED CLIENTS","permalink":"/docs/es/20-R8/commands/get-registered-clients"},"next":{"title":"PAUSE PROCESS","permalink":"/docs/es/20-R8/commands/pause-process"}}'),r=n("785893"),a=n("250065");let d={id:"new-process",title:"New process",slug:"/commands/new-process",displayed_sidebar:"docs"},c=void 0,l={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"M\xe9todo de proceso",id:"m\xe9todo-de-proceso",level:3},{value:"Pila del proceso",id:"pila-del-proceso",level:3},{value:"Nombre del proceso",id:"nombre-del-proceso",level:3},{value:"Par\xe1metros del m\xe9todo proceso",id:"par\xe1metros-del-m\xe9todo-proceso",level:3},{value:"Par\xe1metro opcional *",id:"par\xe1metro-opcional-",level:3},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function t(e){let o={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"New process"})," ( ",(0,r.jsx)(o.em,{children:"metodo"})," ; ",(0,r.jsx)(o.em,{children:"pila"})," {; ",(0,r.jsx)(o.em,{children:"nombre"})," {; ",(0,r.jsx)(o.em,{children:"param"})," {; ",(0,r.jsx)(o.em,{children:"param2"})," ; ... ; ",(0,r.jsx)(o.em,{children:"paramN"}),"}}}{; *} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Par\xe1metro"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"metodo"}),(0,r.jsx)(o.td,{children:"Text"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"M\xe9todo a ejecutar en el proceso"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"pila"}),(0,r.jsx)(o.td,{children:"Integer"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Tama\xf1o de la pila en bytes"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"nombre"}),(0,r.jsx)(o.td,{children:"Text"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Nombre del proceso creado"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"param"}),(0,r.jsx)(o.td,{children:"Expression"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Par\xe1metros del m\xe9todo"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"*"}),(0,r.jsx)(o.td,{children:"Operador"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Proceso \xfanico"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Resultado"}),(0,r.jsx)(o.td,{children:"Integer"}),(0,r.jsx)(o.td,{children:"\u2190"}),(0,r.jsx)(o.td,{children:"N\xfamero del proceso creado recientemente o del proceso que est\xe1 siendo ejecutado"})]})]})]}),"\n",(0,r.jsx)(o.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsx)(o.p,{children:"El comando New process inicia un nuevo proceso (en el mismo equipo) y devuelve el n\xfamero de este proceso."}),"\n",(0,r.jsxs)(o.p,{children:["Si no se pudo crear el proceso (por ejemplo, si no hay suficiente memoria), New process devuelve cero (0) y se genera un error. Puede interceptar este error utilizando un m\xe9todo de gesti\xf3n de errores instalado por el comando ",(0,r.jsx)(o.a,{href:"/docs/es/20-R8/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"."]}),"\n",(0,r.jsx)(o.h3,{id:"m\xe9todo-de-proceso",children:"M\xe9todo de proceso"}),"\n",(0,r.jsxs)(o.p,{children:["En ",(0,r.jsx)(o.em,{children:"metodo"}),", se pasa el nombre del m\xe9todo de gesti\xf3n del nuevo proceso. Una vez que 4D haya definido el contexto para el nuevo proceso, comienza la ejecuci\xf3n de este m\xe9todo que se convierte en el m\xe9todo de proceso."]}),"\n",(0,r.jsxs)(o.p,{children:["Si el contexto de ejecuci\xf3n soporta el modo apropiativo y si el ",(0,r.jsx)(o.em,{children:"metodo"}),' se declara "hilo seguro", el nuevo proceso 4D se ejecutar\xe1 en un hilo seguro apropiativo cuando la aplicaci\xf3n se ejecute en modo compilado. Para m\xe1s informaci\xf3n, consulte la p\xe1gina ',(0,r.jsx)(o.em,{children:"Procesos 4D apropiativos"}),"."]}),"\n",(0,r.jsx)(o.h3,{id:"pila-del-proceso",children:"Pila del proceso"}),"\n",(0,r.jsxs)(o.p,{children:["El par\xe1metro ",(0,r.jsx)(o.em,{children:"pila"}),", le permite indicar la cantidad de memoria asignada para la pila del proceso. Este valor representa el espacio en memoria utilizado para \u201Capilar\u201D las llamadas de m\xe9todos, las variables locales, los par\xe1metros de subrutinas y los registros apilados."]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["Pase 0 en ",(0,r.jsx)(o.em,{children:"pila"})," para utilizar un tama\xf1o de pila predeterminado, adecuado para la mayor\xeda de aplicaciones (valor recomendado)."]}),"\n",(0,r.jsx)(o.li,{children:"En ciertos casos particulares, es posible que desee utilizar un valor personalizado. Debe expresarse en bytes. Esta configuraci\xf3n debe utilizarse con precauci\xf3n, depende de la cadena de proceso y la plataforma."}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota:"})," la pila NO es la memoria total reservada para el proceso. Los procesos comparten memoria para los registros, las variables interproceso, etc. Un proceso utiliza igualmente la memoria extra para almacenar sus variables proceso. La pila contiene diferente informaci\xf3n 4D: la cantidad de informaci\xf3n depende del n\xfamero de llamadas de m\xe9todos anidados, el n\xfamero de formularios que abrir\xe1 antes de cerrarlos y el n\xfamero y tama\xf1o de variables locales utilizadas en cada llamada de m\xe9todo anidado."]}),"\n",(0,r.jsx)(o.h3,{id:"nombre-del-proceso",children:"Nombre del proceso"}),"\n",(0,r.jsxs)(o.p,{children:["Pase el nombre del nuevo proceso en ",(0,r.jsx)(o.em,{children:"nombre"}),". Este nombre aparecer\xe1 en la lista de procesos del Explorador de ejecuci\xf3n y ser\xe1 devuelto por el comando ",(0,r.jsx)(o.a,{href:"/docs/es/20-R8/commands/process-info",children:"Process info"})," cuando se aplica a este nuevo proceso. Puede omitir este par\xe1metro; si lo hace, el nombre del proceso ser\xe1 una cadena vac\xeda. Puede crear un proceso local colocando como prefijo el s\xedmbolo d\xf3lar (",(0,r.jsx)(o.em,{children:"$"}),")."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Importante:"})," Recuerde que en cliente/servidor, los procesos locales no deben acceder a los datos. Para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,r.jsx)(o.em,{children:"Procesos globales y locales"}),"."]}),"\n",(0,r.jsx)(o.h3,{id:"par\xe1metros-del-m\xe9todo-proceso",children:"Par\xe1metros del m\xe9todo proceso"}),"\n",(0,r.jsxs)(o.p,{children:["Puede pasar par\xe1metros al m\xe9todo proceso utilizando uno o m\xe1s par\xe1metros ",(0,r.jsx)(o.em,{children:"param"}),". Puede pasar par\xe1metros de la misma manera que para las subrutinas (ver la secci\xf3n ). Una vez que haya comenzado la ejecuci\xf3n en el contexto del nuevo proceso, el m\xe9todo proceso recibe los valores de los par\xe1metros en ",(0,r.jsx)(o.em,{children:"$1"}),", ",(0,r.jsx)(o.em,{children:"$2"})," , etc. Recuerde que los arrays no pueden pasarse como par\xe1metros a un m\xe9todo. Adem\xe1s, estas consideraciones adicionales deben ser tomadas en cuenta en el contexto del comando ",(0,r.jsx)(o.strong,{children:"New process"}),":"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"Se permite punteros a tablas o campos."}),"\n",(0,r.jsx)(o.li,{children:"Los punteros a las variables, particularmente las variables locales y proceso, no se recomiendan ya que estas variables pueden estar indefinidas en el momento en que m\xe9todo proceso las accede."}),"\n",(0,r.jsxs)(o.li,{children:["Los par\xe1metros est\xe1ndar de tipo objeto o colecci\xf3n se pasan ",(0,r.jsx)(o.strong,{children:"por copia"}),", es decir, 4D crear\xe1 una copia del objeto o la colecci\xf3n en el proceso de destino en lugar de una referencia. Si desea pasar un objeto o un par\xe1metro de colecci\xf3n ",(0,r.jsx)(o.strong,{children:"por referencia"}),", debe utilizar un objeto o colecci\xf3n compartidos (ver ",(0,r.jsx)(o.em,{children:"Objetos y colecciones compartidos"}),")."]}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota"}),": si pasa los par\xe1metros al m\xe9todo proceso, debe pasar el par\xe1metro ",(0,r.jsx)(o.em,{children:"nombre"}),"; no puede omitirse en este caso."]}),"\n",(0,r.jsx)(o.h3,{id:"par\xe1metro-opcional-",children:"Par\xe1metro opcional *"}),"\n",(0,r.jsxs)(o.p,{children:["Le indica a 4D que debe verificar primero si se est\xe1 ejecutando un proceso con el nombre que usted pas\xf3 en ",(0,r.jsx)(o.em,{children:"nombre"}),". Si es as\xed, 4D no inicia un nuevo proceso y devuelve el n\xfamero del proceso con ese nombre."]}),"\n",(0,r.jsx)(o.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(o.p,{children:"Dado el siguiente m\xe9todo proyecto:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"\xa0\xa0// ADD CUSTOMERS\n\xa0SET MENU BAR(1)\n\xa0Repeat\n\xa0\xa0\xa0\xa0ADD RECORD([Customers];*)\n\xa0Until(OK=0)\n"})}),"\n",(0,r.jsxs)(o.p,{children:["Si asocia este m\xe9todo de proyecto a un comando de men\xfa creado en el Editor de barras de men\xfa y le asigna la propiedad Iniciar un nuevo proceso, 4D autom\xe1ticamente iniciar\xe1 un nuevo proceso en el momento de la ejecuci\xf3n del m\xe9todo. La llamada ",(0,r.jsx)(o.a,{href:"/docs/es/20-R8/commands/set-menu-bar",children:"SET MENU BAR"}),"(1) asocia esta barra de men\xfas al nuevo proceso. En ausencia de ventanas (que podr\xeda haber abierto con ",(0,r.jsx)(o.a,{href:"/docs/es/20-R8/commands/open-window",children:"Open window"}),"), la llamada a ",(0,r.jsx)(o.a,{href:"/docs/es/20-R8/commands/add-record",children:"ADD RECORD"})," abrir\xe1 autom\xe1ticamente una."]}),"\n",(0,r.jsx)(o.p,{children:"Para poder iniciar el proceso Add Customers haciendo clic en un bot\xf3n situado en un panel de control personalizado, puede escribir:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de objeto bot\xf3n bAddCustomers\n\xa0$vlProcessID:=New process("Add Customers";0;"Adding Customers")\n'})}),"\n",(0,r.jsx)(o.p,{children:"El bot\xf3n hace lo mismo que el comando de men\xfa personalizado."}),"\n",(0,r.jsx)(o.p,{children:"Si cuando selecciona el elemento de men\xfa o hace clic en el bot\xf3n, usted quiere que el proceso comience (si no existe) o pasado al primer plano (si ya se est\xe1 ejecutando), puede crear el m\xe9todo START ADD CUSTOMERS:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0// START ADD CUSTOMERS\n\xa0$vlProcessID:=New process("Add Customers";0;"Adding Customers";*)\n\xa0If($vlProcessID#0)\n\xa0\xa0\xa0\xa0BRING TO FRONT($vlProcessID)\n\xa0End if\n'})}),"\n",(0,r.jsx)(o.p,{children:"El m\xe9todo de objeto de bAddCustomers se convierte en:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo objeto del bot\xf3n bAddCustomers\n\xa0START ADD CUSTOMERS\n"})}),"\n",(0,r.jsxs)(o.p,{children:["En el editor de barras de men\xfas, puede reemplazar ADD CUSTOMERS por el m\xe9todo START ADD CUSTOMERS, y deseleccionar la propiedad ",(0,r.jsx)(o.strong,{children:"Iniciar un nuevo proceso"})," para el comando de men\xfa."]}),"\n",(0,r.jsx)(o.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"/docs/es/20-R8/commands/execute-on-server",children:"Execute on server"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.em,{children:"Procesos"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.em,{children:"Procesos 4D apropiativos"})]}),"\n",(0,r.jsx)(o.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"N\xfamero de comando"}),(0,r.jsx)(o.td,{children:"317"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Hilo seguro"}),(0,r.jsx)(o.td,{children:"\u2713"})]})]})]})]})}function p(e={}){let{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return c},a:function(){return d}});var s=n(667294);let r={},a=s.createContext(r);function d(e){let o=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(a.Provider,{value:o},e.children)}}}]);