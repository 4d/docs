"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[85037],{580765:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>d,metadata:()=>a,toc:()=>i});var n=o(474848),s=o(28453);const d={id:"on-err-call",title:"ON ERR CALL",slug:"/commands/on-err-call",displayed_sidebar:"docs"},l=void 0,a={id:"commands-legacy/on-err-call",title:"ON ERR CALL",description:"ON ERR CALL ( metodoError {; alcance} )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/on-err-call.md",sourceDirName:"commands-legacy",slug:"/commands/on-err-call",permalink:"/docs/es/commands/on-err-call",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-err-call.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"on-err-call",title:"ON ERR CALL",slug:"/commands/on-err-call",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Method called on event",permalink:"/docs/es/commands/method-called-on-event"},next:{title:"ON EVENT CALL",permalink:"/docs/es/commands/on-event-call"}},c={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function t(e){const r={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"ON ERR CALL"})," ( ",(0,n.jsx)(r.em,{children:"metodoError"})," {; ",(0,n.jsx)(r.em,{children:"alcance"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Par\xe1metro"}),(0,n.jsx)(r.th,{children:"Tipo"}),(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"metodoError"}),(0,n.jsx)(r.td,{children:"Text"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"M\xe9todo de gesti\xf3n de errores a llamar o cadena vac\xeda para desinstalar el m\xe9todo"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"alcance"}),(0,n.jsx)(r.td,{children:"Integer"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"Alcance del m\xe9todo de gesti\xf3n de errores"})]})]})]}),"\n",(0,n.jsx)(r.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,n.jsxs)(r.p,{children:["El comando ",(0,n.jsx)(r.strong,{children:"ON ERR CALL"})," instala el m\xe9todo proyecto, cuyo nombre se pasa en ",(0,n.jsx)(r.em,{children:"metodoError"}),", como m\xe9todo de intercepci\xf3n de errores para el contexto de ejecuci\xf3n definido en el proyecto actual. Este m\xe9todo se denomina ",(0,n.jsx)(r.strong,{children:"m\xe9todo de gesti\xf3n de errores"})," o ",(0,n.jsx)(r.strong,{children:"m\xe9todo de detecci\xf3n de errores."})]}),"\n",(0,n.jsx)(r.p,{children:"Los m\xe9todos de gesti\xf3n de errores se instalan por proyecto: los componentes y los proyectos anfitriones pueden definir sus propios m\xe9todos de tratamiento de errores, s\xf3lo se llamar\xe1 al m\xe9todo del proyecto en el que se produjo el error."}),"\n",(0,n.jsx)(r.p,{children:"Una vez que se instala un proyecto de control de errores, 4D llama al m\xe9todo cada vez que se produce un error durante la ejecuci\xf3n de un comando de lenguaje 4D en el contexto de ejecuci\xf3n definido."}),"\n",(0,n.jsxs)(r.p,{children:["El ",(0,n.jsx)(r.em,{children:"alcance"})," de este comando designa el contexto de ejecuci\xf3n desde donde un error dispar\xe1 la llamada de ",(0,n.jsx)(r.em,{children:"metodoError"}),". Por defecto, si se omite el par\xe1metro ",(0,n.jsx)(r.em,{children:"alcance"}),", el alcance del comando es el contexto de ejecuci\xf3n local, es decir, el proceso actual. Puede pasar una de las siguientes constantes en el par\xe1metro ",(0,n.jsx)(r.em,{children:"alcance"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Constante"}),(0,n.jsx)(r.th,{children:"Valor"}),(0,n.jsx)(r.th,{children:"Comentario"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ek errors from components"}),(0,n.jsx)(r.td,{children:"2"}),(0,n.jsx)(r.td,{children:"Errores ocurridos en los componentes"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ek global"}),(0,n.jsx)(r.td,{children:"1"}),(0,n.jsx)(r.td,{children:"Errores ocurridos en el contexto de ejecuci\xf3n global del proyecto"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ek local"}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsxs)(r.td,{children:["Errores ocurridos en el contexto de ejecuci\xf3n local (por defecto si se omite el par\xe1metro ",(0,n.jsx)(r.em,{children:"alcance"}),")"]})]})]})]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["si ",(0,n.jsx)(r.em,{children:"alcance"})," = ek local (o si se omite ",(0,n.jsx)(r.em,{children:"alcance"}),"), s\xf3lo los errores producidos en el proceso actual llamar\xe1n a ",(0,n.jsx)(r.em,{children:"metodoError"}),". Puede tener un m\xe9todo de gesti\xf3n de errores por proceso a la vez, pero puede tener diferentes m\xe9todos de gesti\xf3n de errores para varios procesos."]}),"\n",(0,n.jsxs)(r.li,{children:["si ",(0,n.jsx)(r.em,{children:"alcance"})," = ek global, todos los errores ocurridos en la aplicaci\xf3n, sea cual sea el proceso (excepto los componentes), llamar\xe1n a ",(0,n.jsx)(r.em,{children:"metodoError"}),". Tenga en cuenta que, si tambi\xe9n se define un gestor de errores ek local para un proceso, no se llamar\xe1 al gestor de errores ek global . Este principio permite definir un m\xe9todo gen\xe9rico que interceptar\xe1 todos los errores, mientras que los m\xe9todos locales de gesti\xf3n de errores pueden ser definidos para algunos procesos espec\xedficos.",(0,n.jsx)(r.br,{}),"\nTenga en cuenta tambi\xe9n que un m\xe9todo global de gesti\xf3n de errores es \xfatil en el servidor, donde se puede manejar los errores en las funciones del lado del servidor."]}),"\n",(0,n.jsxs)(r.li,{children:["si ",(0,n.jsx)(r.em,{children:"alcance"})," = ek errors from components, s\xf3lo los errores generados por los componentes instalados en la aplicaci\xf3n llamar\xe1n a ",(0,n.jsx)(r.em,{children:"metodoError"}),". Tenga en cuenta que, si se define un m\xe9todo de gesti\xf3n de errores en un componente, se le llama en caso de error en el componente, y no se llama al gestor de errores ek errors from components definido en la aplicaci\xf3n local."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Nota:"})," si ",(0,n.jsx)(r.strong,{children:"ON ERR CALL"})," se llama desde un proceso para el cual usted ha solicitado ejecuci\xf3n apropiativa (en modo compilado), el compilador verifica si ",(0,n.jsx)(r.em,{children:"metodoError"})," es hilo seguro y devuelve los errores si no es compatible con el modo apropiativo. Para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,n.jsx)(r.em,{children:"Procesos 4D apropiativos"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Para desinstalar un m\xe9todo de gesti\xf3n de errores, llame a ",(0,n.jsx)(r.strong,{children:"ON ERR CALL"})," de nuevo con el par\xe1metro ",(0,n.jsx)(r.em,{children:"alcance"})," deseado (si lo hay) y pase la cadena vac\xeda en ",(0,n.jsx)(r.em,{children:"metodoError"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Puede identificar errores leyendo la variable sistema Error, la cual contiene el n\xfamero de c\xf3digo del error. Los c\xf3digos de errores se listan en el tema ",(0,n.jsx)(r.em,{children:"C\xf3digos de error"}),". Por ejemplo, puede ver la secci\xf3n ",(0,n.jsx)(r.em,{children:"Errores de sintaxis"}),". El valor de la variable Error es significativo s\xf3lo en el m\xe9todo de gesti\xf3n de errores; si necesita el c\xf3digo del error en el m\xe9todo que provoc\xf3 el error, copie la variable Error en su propia variable proceso. Tambi\xe9n puede acceder a las variables sistema Error method, Error line y Error formula las cuales contienen respectivamente, el nombre del m\xe9todo, el n\xfamero de l\xednea y el texto de la f\xf3rmula donde ocurri\xf3 el error (ver ",(0,n.jsx)(r.a,{href:"https://developer.4d.com/docs/Concepts/error-handling#handling-errors-within-the-method",children:"Gesti\xf3n de errores dentro del m\xe9todo"}),")."]}),"\n",(0,n.jsxs)(r.p,{children:["Puede utilizar el comando ",(0,n.jsx)(r.a,{href:"/docs/es/commands/last-errors",children:"Last errors"})," o ",(0,n.jsx)(r.a,{href:"/docs/es/commands/last-errors",children:"Last errors"}),'  para obtener la secuencia de errores (la "pila" de errores) en el origen de la interrupci\xf3n.']}),"\n",(0,n.jsx)(r.p,{children:"El m\xe9todo de gesti\xf3n de errores debe tratar los errores de manera apropiada o mostrar un mensaje de error al usuario. Los errores pueden ser generados durante los procesos efectuados por:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"El motor de base de datos de 4D; por ejemplo, cuando guarda un registro provoca la violaci\xf3n de una regla de trigger."}),"\n",(0,n.jsx)(r.li,{children:"El entorno de 4D; por ejemplo, cuando no tienen suficiente memoria parar llenar un array."}),"\n",(0,n.jsx)(r.li,{children:"El sistema operativo en el cual se ejecuta la base; por ejemplo, disco lleno o errores de entrada/salida."}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["El comando ",(0,n.jsx)(r.a,{href:"/docs/es/commands/abort",children:"ABORT"})," puede utilizarse para terminar el proceso. Si no llama ",(0,n.jsx)(r.a,{href:"/docs/es/commands/abort",children:"ABORT"})," en el m\xe9todo de gesti\xf3n de errores, 4D devuelve el m\xe9todo interrumpido y contin\xfaa la ejecuci\xf3n del m\xe9todo. Utilice el comando ",(0,n.jsx)(r.a,{href:"/docs/es/commands/abort",children:"ABORT"})," cuando un error no puede recuperarse."]}),"\n",(0,n.jsx)(r.p,{children:"Si ocurre un error en el m\xe9todo de gesti\xf3n de errores, 4D retoma el control de la gesti\xf3n de errores. Por lo tanto, debe asegurarse de que el m\xe9todo de gesti\xf3n de errores no pueda generar un error. Igualmente, no puede utilizar ON ERR CALL dentro del m\xe9todo de gesti\xf3n de errores."}),"\n",(0,n.jsx)(r.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,n.jsx)(r.p,{children:"Desea definir un gestor de errores global, por ejemplo en el m\xe9todo base On Open:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'\xa0ON ERR CALL("myGlobalErrorHandler";ek global)\n'})}),"\n",(0,n.jsx)(r.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,n.jsx)(r.p,{children:"El siguiente m\xe9todo de proyecto trata de crear un documento cuyo nombre se recibe como par\xe1metro. Si no se puede crear el documento, el m\xe9todo de proyecto devuelve 0 (cero) o el c\xf3digo de error:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de proyecto Crear doc\n\xa0\xa0// Crear doc ( String ; Pointer ) -> Entero largo\n\xa0\xa0// Crear doc ( DocName ; ->DocRef ) -> C\xf3digo de error resultante\n\xa0\n\xa0gError:=0\n\xa0ON ERR CALL("IO MANEJADOR DE ERRORES")\n\xa0$2->:=Create document($1)\n\xa0ON ERR CALL("")\n\xa0$0:=gError\n'})}),"\n",(0,n.jsx)(r.p,{children:"El m\xe9todo de proyecto IO_GESTION_ERRORES es el siguiente:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo de proyecto IO_GESTION_ERRORES\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:"\xa0gError:=Error\xa0// Simplemente copie el c\xf3digo del error en la variable de proceso gError\n"})}),"\n",(0,n.jsx)(r.p,{children:"Note la utilizaci\xf3n de la variable proceso gError para obtener el c\xf3digo del error en el m\xe9todo de ejecuci\xf3n actual. Una vez estos m\xe9todos est\xe9n presentes en su base de datos, puede escribir:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'\xa0\xa0// ...\n\xa0var vhDocRef : Time\n\xa0$vlErrCode:=Crear doc($vsDocumentNombre;->vhDocRef)\n\xa0If($vlErrCode=0)\n\xa0\xa0//...\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vlErrCode)\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("El documento no pudo ser creado, error de E/S "+String($vlErrCode))\n\xa0End if\n'})}),"\n",(0,n.jsx)(r.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,n.jsxs)(r.p,{children:["Mientras implementa un conjunto de operaciones complejas, puede terminar con varias subrutinas que necesiten diferentes m\xe9todos de gesti\xf3n de errores. S\xf3lo puede tener un m\xe9todo de gesti\xf3n de errores por proceso, de manera que tiene dos opciones:",(0,n.jsx)(r.br,{}),"\n- Mantener contacto con el actual cada vez que llama a ON ERR CALL, o",(0,n.jsx)(r.br,{}),"\n- Utiliza la variable array proceso (en este caso, ",(0,n.jsx)(r.em,{children:"asMetodoError"}),") para \u201capilar\u201d los m\xe9todos de gesti\xf3n de errores y un m\xe9todo de proyecto (en este caso, ON ERROR CALL) para instalar y desinstalar los m\xe9todos de gesti\xf3n de errores.",(0,n.jsx)(r.br,{}),"\nDebe inicializar el array al comienzo de la ejecuci\xf3n del proceso:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:"\xa0\xa0// NO olvide inicializar el array al inicio\n\xa0\xa0// del m\xe9todo de proceso (el m\xe9todo de proyecto que ejecuta el proceso)\n\xa0ARRAY STRING(63;asMetodoError;0)\n"})}),"\n",(0,n.jsx)(r.p,{children:"Este es el m\xe9todo personalizado ON ERROR CALL:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de proyecto ON ERROR CALL\n\xa0\xa0// ON ERROR CALL { ( Cadena) }\n\xa0\xa0// ON ERROR CALL { ( Nombre del m\xe9todo ) }\n\xa0\n\xa0C_STRING(63;$1;$MetodoError)\n\xa0var $vlElem : Integer\n\xa0\n\xa0If(Count parameters>0)\n\xa0\xa0\xa0\xa0$MetodoError:=$1\n\xa0Else\n\xa0\xa0\xa0\xa0$MetodoError:=""\n\xa0End if\n\xa0\n\xa0If($MetodoError#"")\n\xa0\xa0\xa0\xa0var gError : Integer\n\xa0\xa0\xa0\xa0gError:=0\n\xa0\xa0\xa0\xa0$vlElem:=1+Size of array(asMetodoError)\n\xa0\xa0\xa0\xa0INSERT IN ARRAY(asMetodoError;$vlElem)\n\xa0\xa0\xa0\xa0asMetodoError{$vlElem}:=$1\n\xa0\xa0\xa0\xa0ON ERR CALL($1)\n\xa0Else\n\xa0\xa0\xa0\xa0ON ERR CALL("")\n\xa0\xa0\xa0\xa0$vlElem:=Size of array(asMetodoError)\n\xa0\xa0\xa0\xa0If($vlElem>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE FROM ARRAY(asMetodoError;$vlElem)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlElem>1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ON ERR CALL(asMetodoError{$vlElem-1})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,n.jsx)(r.p,{children:"Luego, puede llamarlo de esta manera:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'\xa0gError:=0\n\xa0ON ERROR CALL("IO ERRORS")\xa0// Instale el m\xe9todo de gesti\xf3n de errores IO ERRORS\n\xa0\xa0// ...\n\xa0ON ERROR CALL("ALL ERRORS")\xa0// Instale el m\xe9todo de gesti\xf3n de errores ALL ERRORS\n\xa0\xa0// ...\n\xa0ON ERROR CALL\xa0// Desinstale el m\xe9todo de gesti\xf3n de errores ALL ERRORS y reinstale IO ERRORS\n\xa0\xa0// ...\n\xa0ON ERROR CALL\xa0// Desinstale el m\xe9todo de gesti\xf3n de errores IO ERRORS\n\xa0\xa0// ...\n'})}),"\n",(0,n.jsx)(r.h4,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,n.jsx)(r.p,{children:"El siguiente m\xe9todo de gesti\xf3n de errores ignora las interrupciones del usuario y muestra el texto del error:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'\xa0\xa0//M\xe9todo de proyecto Show_errors_only\n\xa0If(Error#1006)\xa0//esta no es una interrupci\xf3n del usuario\n\xa0\xa0\xa0\xa0ALERT("The error "+String(Error)+" occurred. The code in question is: \\""+Error formula+"\\"")\n\xa0End if\n'})}),"\n",(0,n.jsx)(r.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/es/commands/abort",children:"ABORT"}),(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.em,{children:"Gesti\xf3n de errores"}),(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.a,{href:"/docs/es/commands/last-errors",children:"Last errors"}),(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.a,{href:"/docs/es/commands/last-errors",children:"Last errors"}),(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.a,{href:"/docs/es/commands/method-called-on-error",children:"Method called on error"}),(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.em,{children:"Variables sistema"})]})]})}function m(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(t,{...e})}):t(e)}},28453:(e,r,o)=>{o.d(r,{R:()=>l,x:()=>a});var n=o(296540);const s={},d=n.createContext(s);function l(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);