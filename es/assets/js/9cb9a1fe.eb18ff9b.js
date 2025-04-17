"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99469"],{809689:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>o,assets:()=>d,toc:()=>i,contentTitle:()=>c});var o=JSON.parse('{"id":"commands-legacy/call-worker","title":"CALL WORKER","description":"CALL WORKER ( proceso ; metodo {; param}{; param2 ; ... ; paramN} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/call-worker.md","sourceDirName":"commands-legacy","slug":"/commands/call-worker","permalink":"/docs/es/commands/call-worker","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcall-worker.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"call-worker","title":"CALL WORKER","slug":"/commands/call-worker","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Process (Communications)","permalink":"/docs/es/commands/theme/Process-Communications"},"next":{"title":"CLEAR SEMAPHORE","permalink":"/docs/es/commands/clear-semaphore"}}'),s=r("785893"),a=r("250065");let l={id:"call-worker",title:"CALL WORKER",slug:"/commands/call-worker",displayed_sidebar:"docs"},c=void 0,d={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function t(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"CALL WORKER"})," ( ",(0,s.jsx)(n.em,{children:"proceso"})," ; ",(0,s.jsx)(n.em,{children:"metodo"})," {; ",(0,s.jsx)(n.em,{children:"param"}),"}{; ",(0,s.jsx)(n.em,{children:"param2"})," ; ... ; ",(0,s.jsx)(n.em,{children:"paramN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"proceso"}),(0,s.jsx)(n.td,{children:"Text, Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nombre o n\xfamero del proceso worker"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"metodo"}),(0,s.jsx)(n.td,{children:"Object, Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nombre del m\xe9todo proyecto a llamar"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"param"}),(0,s.jsx)(n.td,{children:"Expression"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Par\xe1metros pasados al m\xe9todo"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"CALL WORKER"})," crea o llama al proceso worker cuyo nombre o ID se pasa en ",(0,s.jsx)(n.em,{children:"proceso"})," y pide la ejecuci\xf3n del c\xf3digo designado por ",(0,s.jsx)(n.em,{children:"formula"})," en su contexto con el par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"param"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"CALL WORKER"})," encapsula los par\xe1metros ",(0,s.jsx)(n.em,{children:"param"})," en un mensaje y lo env\xeda en el buz\xf3n de mensajes del worker. Para obtener m\xe1s informaci\xf3n sobre los procesos worker, por favor consulte la secci\xf3n ",(0,s.jsx)(n.em,{children:"Sobre workers"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["En el par\xe1metro ",(0,s.jsx)(n.em,{children:"proceso"}),", puede especificar el worker utilizando su nombre o su n\xfamero de proceso:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Si pasa el n\xfamero de un proceso que no existe, o si el proceso especificado no fue creado por ",(0,s.jsx)(n.strong,{children:"CALL WORKER"})," ni por 4D (tal como el proceso principal de la aplicaci\xf3n), ",(0,s.jsx)(n.strong,{children:"CALL WORKER"})," no hace nada."]}),"\n",(0,s.jsx)(n.li,{children:"Si pasa el nombre de un proceso que no existe, se crea un nuevo proceso worker."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," el ",(0,s.jsx)(n.strong,{children:"proceso principal"}),", creado por 4D para la interfaz de usuario y el modo de aplicaci\xf3n cuando se abre una base, es un proceso worker y puede ser llamado por ",(0,s.jsx)(n.strong,{children:"CALL WORKER"}),".Sin embargo, ya que su nombre puede variar en funci\xf3n del lenguaje de 4D, es preferible designar este proceso utilizando su n\xfamero (siempre 1) cuando se utiliza ",(0,s.jsx)(n.strong,{children:"CALL WORKER"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["El proceso worker aparece en la lista de procesos del Explorador de ejecuci\xf3n y es devuelto por el comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/process-info",children:"Process info"})," cuando se aplica a este proceso."]}),"\n",(0,s.jsxs)(n.p,{children:["En ",(0,s.jsx)(n.em,{children:"formula"}),", designe el c\xf3digo 4D que se ejecutar\xe1 en el contexto del proceso padre de ",(0,s.jsx)(n.em,{children:"ventana"}),". Puede pasar:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["un ",(0,s.jsx)(n.strong,{children:"objeto f\xf3rmula"})," (ver ",(0,s.jsx)(n.em,{children:"Objetos F\xf3rmula"}),"). Los objetos f\xf3rmula pueden encapsular cualquier expresi\xf3n ejecutable, incluyendo funciones y m\xe9todos proyecto;"]}),"\n",(0,s.jsxs)(n.li,{children:["una ",(0,s.jsx)(n.strong,{children:"cadena"})," que contenga el nombre de un m\xe9todo proyecto. Se puede pasar una cadena vac\xeda; en este caso, el worker ejecuta el m\xe9todo que se utiliz\xf3 originalmente para iniciar su proceso, si lo hay (es decir, el m\xe9todo de inicio del worker).",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Nota"}),": no es posible pasar una cadena vac\xeda en ",(0,s.jsx)(n.em,{children:"formula"})," cuando el comando llama al proceso principal (proceso n\xfamero 1) ya que no fue iniciado utilizando un m\xe9todo proyecto. Como resultado, ",(0,s.jsxs)(n.em,{children:[(0,s.jsx)(n.em,{children:"CALL WORKER"}),' (1;"")']})," no hace nada."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Tambi\xe9n puede pasar par\xe1metros a la f\xf3rmula utilizando uno o m\xe1s par\xe1metros ",(0,s.jsx)(n.em,{children:"param"}),". Puede utilizar ",(0,s.jsx)(n.em,{children:"par\xe1metros secuenciales"})," o, si la expresi\xf3n de la f\xf3rmula es una funci\xf3n o un m\xe9todo de proyecto, ",(0,s.jsx)(n.em,{children:"par\xe1metros nombrados"}),". Al iniciar la ejecuci\xf3n en el contexto del formulario, la f\xf3rmula proceso recibe los valores par\xe1metro en ",(0,s.jsx)(n.em,{children:"$1"}),", ",(0,s.jsx)(n.em,{children:"$2"}),", etc. Recuerde que los arrays no pueden ser pasados \u200B\u200Bcomo par\xe1metros a un m\xe9todo. Adem\xe1s, en el contexto del comando ",(0,s.jsx)(n.strong,{children:"CALL WORKER"}),", las siguientes consideraciones adicionales deben tenerse en cuenta:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Se permite punteros a tablas o campos."}),"\n",(0,s.jsx)(n.li,{children:"Los punteros a las variables, particularmente las variables locales y de proceso, no se recomiendan ya que estas variables pueden estar indefinidas en el momento de su acceso por el m\xe9todo de proceso."}),"\n",(0,s.jsxs)(n.li,{children:["Los par\xe1metros de tipo de colecci\xf3n u objeto est\xe1ndar se pasan ",(0,s.jsx)(n.strong,{children:"por copia"}),", es decir, 4D crear\xe1 una copia del objeto o la colecci\xf3n en el proceso de destino si el worker est\xe1 en un proceso diferente del que llama al comando ",(0,s.jsx)(n.strong,{children:"CALL WORKER"}),". En este contexto, si desea pasar un objeto o un par\xe1metro colecci\xf3n ",(0,s.jsx)(n.strong,{children:"by reference"}),", debe utilizar un objeto o colecci\xf3n compartidos (ver ",(0,s.jsx)(n.em,{children:"Objetos y colecciones compartidos"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["Si pasa un par\xe1metro de tipo Objeto o una Colecci\xf3n, 4D crea una copia del objeto o de la colecci\xf3n en el proceso de destino si el worker se encuentra en un proceso diferente del que llama al comando ",(0,s.jsx)(n.strong,{children:"CALL WORKER"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Un proceso worker se mantiene vivo hasta que la aplicaci\xf3n est\xe9 cerrada o el comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/kill-worker",children:"KILL WORKER"})," se llame expl\xedcitamente. Para liberar memoria, no olvide llamar a este comando una vez un proceso worker ya no sea necesario."]}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"En un formulario, un bot\xf3n inicia un c\xe1lculo, por ejemplo las estad\xedsticas con respecto al a\xf1o seleccionado. El bot\xf3n crea o llama a un proceso de worker que va a calcular los datos mientras el usuario puede continuar trabajando en el formulario."}),"\n",(0,s.jsx)(n.p,{children:"El m\xe9todo del bot\xf3n es:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//llamar al worker myWorker con el par\xe1metro\n\xa0var $vYear: Integer\n\xa0$vYear:=2015\xa0// podr\xeda haber sido seleccionado por el usuario en el formulario\n\xa0CALL WORKER("myWorker";Formula(workerMethod);$vYear;Current form window)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["El c\xf3digo de ",(0,s.jsx)(n.em,{children:"workerMethod"})," es:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// este es el m\xe9todo del worker\n\xa0\xa0// puede ser apropiativo o cooperativo\n\xa0#DECLARE($vYearInteger;$windowInteger)\xa0//referencia de la ventana y a\xf1o\n\xa0var $vStatResults : Object\xa0//para almacenar los resultados estad\xedsticos\n\xa0...\xa0//calcular estad\xedsticas\n\xa0\xa0//una vez terminado, vuelve a llamar el formulario con los valores calculados\n\xa0\xa0//$vStatResults podr\xeda mostrar los resultados en el formulario\n\xa0CALL FORM($window;Formula(displayStats);$vStatResults)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/commands/call-form",children:"CALL FORM"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/current-process-name",children:"Current process name"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/kill-worker",children:"KILL WORKER"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"Sobre workers"})]}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"1389"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return l}});var o=r(667294);let s={},a=o.createContext(s);function l(e){let n=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);