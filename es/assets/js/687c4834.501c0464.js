"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["94175"],{341874:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>a,assets:()=>i,toc:()=>t,contentTitle:()=>d});var a=JSON.parse('{"id":"commands-legacy/set-query-destination","title":"SET QUERY DESTINATION","description":"SET QUERY DESTINATION ( destinoTipo {; destinoObjeto {; destPunt}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-query-destination.md","sourceDirName":"commands-legacy","slug":"/commands/set-query-destination","permalink":"/docs/es/commands/set-query-destination","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-query-destination.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-query-destination","title":"SET QUERY DESTINATION","slug":"/commands/set-query-destination","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET QUERY AND LOCK","permalink":"/docs/es/commands/set-query-and-lock"},"next":{"title":"SET QUERY LIMIT","permalink":"/docs/es/commands/set-query-limit"}}'),r=s("785893"),o=s("250065");let l={id:"set-query-destination",title:"SET QUERY DESTINATION",slug:"/commands/set-query-destination",displayed_sidebar:"docs"},d=void 0,i={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET QUERY DESTINATION"})," ( ",(0,r.jsx)(n.em,{children:"destinoTipo"})," {; ",(0,r.jsx)(n.em,{children:"destinoObjeto"})," {; ",(0,r.jsx)(n.em,{children:"destPunt"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"destinoTipo"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"0 = selecci\xf3n actual, 1 = conjunto, 2 = selecci\xf3n temporal, 3 = variable"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"destinoObjeto"}),(0,r.jsx)(n.td,{children:"Text, Variable"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre del conjunto o Nombre de la selecci\xf3n temporal o variable"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"destPunt"}),(0,r.jsx)(n.td,{children:"Pointer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Puntero a la variable local si destinoTipo=3"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"SET QUERY DESTINATION"})," permite indicar a 4D donde ubicar el resultado de todas las b\xfasquedas posteriores a la llamada a este comando en el proceso actual."]}),"\n",(0,r.jsxs)(n.p,{children:["Especifique el tipo de destino en el par\xe1metro ",(0,r.jsx)(n.em,{children:"destinoTipo."})," 4D ofrece las siguientes constantes predefinidas, que se encuentran en el tema ",(0,r.jsx)(n.em,{children:"Destinos de b\xfasqueda"})," ",(0,r.jsx)(n.em,{children:":"})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Into current selection"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Into named selection"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Into set"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Into variable"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Especifique el destino de la b\xfasqueda en el par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"destinoObjeto"})," de acuerdo a la siguiente tabla:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Par\xe1metro destinoTipo"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Par\xe1metro destinoObjeto"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0 (selecci\xf3n actual)"}),(0,r.jsx)(n.td,{children:"Omita el par\xe1metro"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1 (conjunto)"}),(0,r.jsx)(n.td,{children:"Pase el nombre de un conjunto (existente o a crear)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2 (selecci\xf3n temporal)"}),(0,r.jsx)(n.td,{children:"Pase el nombre de la selecci\xf3n temporal (existente o a crear)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3 (variable)"}),(0,r.jsxs)(n.td,{children:['Pase una variable num\xe9rica (existente), bien sea una cadena vac\xeda "" para utilizar el par\xe1metro ',(0,r.jsx)(n.em,{children:"destPunt"})]})]})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Con:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0SET QUERY DESTINATION(Into current selection)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Los registros encontrados por la b\xfasqueda se colocar\xe1n en la selecci\xf3n actual de la tabla en la cual se efect\xfaa la b\xfasqueda."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Con:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0SET QUERY DESTINATION(Into set;"miConjunto")\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Los registros encontrados por la b\xfasqueda se ubicar\xe1n en el conjunto ",(0,r.jsx)(n.em,{children:'"miConjunto"'}),". La selecci\xf3n actual y el registro actual de la tabla en la cual realiza la b\xfasqueda permanecen iguales."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Con:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0SET QUERY DESTINATION(Into named selection;"miSeleccionTemporal")\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Los registros encontrados por la b\xfasqueda se ubicar\xe1n en la selecci\xf3n temporal ",(0,r.jsx)(n.em,{children:'"miSeleccionTemporal"'}),". La selecci\xf3n actual y el registro actual para la tabla en la que se efect\xfaa la b\xfasqueda permanecen iguales."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Si la selecci\xf3n temporal no existe de antemano, se crear\xe1 autom\xe1ticamente al final de la b\xfasqueda."}),"\n",(0,r.jsxs)(n.li,{children:["Este comando administra las selecciones temporales como el comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/cut-named-selection",children:"CUT NAMED SELECTION"}),": solo se conservan las referencias. Una vez se utiliza la selecci\xf3n temporal, ya no existe.\nCon:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0SET QUERY DESTINATION(Into variable;$vlResult)\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),": con esta sintaxis, la variable *",(0,r.jsx)(n.em,{children:"$vlResult"})," debe haber sido definida previamente, de lo contrario se genera un error."]}),"\n",(0,r.jsx)(n.p,{children:"O:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0SET QUERY DESTINATION(Into variable;"";->$vlResult)\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),": este segunda sintaxis facilita el uso conjunto del comando con ",(0,r.jsx)(n.a,{href:"/docs/es/commands/get-query-destination",children:"GET QUERY DESTINATION"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["El n\xfamero de registros encontrado por la b\xfasqueda se ubicar\xe1 en la variable ",(0,r.jsx)(n.em,{children:"$vlResult"}),". La selecci\xf3n actual y el registro actual para la tabla en la que se efect\xfaa la b\xfasqueda permanecen iguales."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Advertencia:"})," ",(0,r.jsx)(n.strong,{children:"SET QUERY DESTINATION"})," afecta todas las b\xfasquedas siguientes en el proceso actual. RECUERDE siempre compensar una llamada a ",(0,r.jsx)(n.strong,{children:"SET QUERY DESTINATION"})," (donde ",(0,r.jsx)(n.em,{children:"destinoTipe#0"}),") con una llamada a ",(0,r.jsx)(n.strong,{children:"SET QUERY DESTINATION"}),"(0) para restaurar el modo de b\xfasqueda est\xe1ndar."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET QUERY DESTINATION"})," cambia \xfanicamente el comportamiento de los comandos de b\xfasqueda, es decir:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/es/commands/query",children:"QUERY"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/es/commands/query-selection",children:"QUERY SELECTION"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/es/commands/query-by-example",children:"QUERY BY EXAMPLE"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/es/commands/query-by-formula",children:"QUERY BY FORMULA"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/es/commands/query-by-sql",children:"QUERY BY SQL"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/es/commands/query-selection-by-formula",children:"QUERY SELECTION BY FORMULA"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/es/commands/query-selection-with-array",children:"QUERY SELECTION WITH ARRAY"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/es/commands/query-with-array",children:"QUERY WITH ARRAY"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/es/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/query-selection-by-attribute",children:"QUERY SELECTION BY ATTRIBUTE"}),"\nPor otra parte, ",(0,r.jsx)(n.strong,{children:"SET QUERY DESTINATION"})," no afecta otros comandos que modifican la selecci\xf3n actual de la tabla como ",(0,r.jsx)(n.a,{href:"/docs/es/commands/all-records",children:"ALL RECORDS"}),", ",(0,r.jsx)(n.a,{href:"/docs/es/commands/relate-many",children:"RELATE MANY"}),", etc."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsxs)(n.p,{children:["Se crea un formulario que muestra los registros de la tabla ",(0,r.jsx)(n.em,{children:"[Libreta telefonica]"}),". Se crea un objeto de tipo pesta\xf1a llamado ",(0,r.jsx)(n.em,{children:"asRolodex"})," (con una pesta\xf1a para cada letra del alfabeto) y un subformulario que muestra los registros de la tabla ",(0,r.jsx)(n.em,{children:"[Libreta telefonica]"}),". Al elegir una pesta\xf1a, muestra los registros que corresponden a la letra."]}),"\n",(0,r.jsxs)(n.p,{children:["En su aplicaci\xf3n, la tabla ",(0,r.jsx)(n.em,{children:"[Libreta telefonica]"})," contiene un conjunto de de datos est\xe1ticos, de manera que no necesita realizar una b\xfasqueda cada vez que selecciona una pesta\xf1a. De esta manera, puede ahorrar tiempo precioso al ejecutar las b\xfasquedas."]}),"\n",(0,r.jsxs)(n.p,{children:["Para hacer esto, puede redireccionar sus b\xfasquedas en las selecciones temporales para reutilizarlas cuando sea necesario. Escriba el m\xe9todo de objeto de la pesta\xf1a ",(0,r.jsx)(n.em,{children:"asRolodex"})," como se indica a continuaci\xf3n:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de objeto asRolodex\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0// Antes de que el formulario aparezca en la pantalla,\n\xa0\xa0// inicializar el rolodex y el array de booleanos que\n\xa0\xa0// nos indica si una b\xfasqueda para la letra correspondiente\n\xa0\xa0// ha sido realizada o no\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY STRING(1;asRolodex;26)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY BOOLEAN(abQueryDone;26)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlElem;1;26)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0asRolodex{$vlElem}:=Char(64+$vlElem)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0abQueryDone{$vlElem}:=False\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Clicked)\n\xa0\xa0// Cuando un usuario hace clic en la pesta\xf1a, verificar si la b\xfasqueda correspondiente\n\xa0\xa0// ha sido realizada o no\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Not(abQueryDone{asRolodex}))\n\xa0\xa0// Si no, redireccionar la pr\xf3xima b\xfasqueda a una selecci\xf3n temporal\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET QUERY DESTINATION(Into named selection;"temp")\n\xa0\xa0// Efectuar la b\xfasqueda\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY([Libreta telefonica];[Libreta telefonica]Last name=asRolodex{asRolodex}+"@")\n\xa0\xa0// Restaurar el modo de b\xfasqueda est\xe1ndar\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET QUERY DESTINATION(Into current selection)\n\xa0\xa0// Utilizar los registros encontrados\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0USE NAMED SELECTION("temp")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0COPY NAMED SELECTION([Phone book];"Rolodex+asRolodex{asRolodex})\n\xa0\xa0// La pr\xf3xima vez que seleccionemos esta letra, no realizaremos la b\xfasqueda nuevamente\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0abQueryDone{asRolodex}:=True\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// Utilice la selecci\xf3n temporal existente para mostrar los registros correspondientes a la letra seleccionada\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0USE NAMED SELECTION("Rolodex"+asRolodex{asRolodex}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Unload)\n\xa0\xa0// Luego el formulario desaparece de la pantalla\n\xa0\xa0// Borrar las selecciones temporales\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlElem;1;26)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(abQueryDone{$vlElem})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR NAMED SELECTION("Rolodex"+asRolodex{$vlElem})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0// Borrar los dos arrays que ya no necesitamos\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR VARIABLE(asRolodex)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR VARIABLE(abQueryDone)\n\xa0End case\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"El m\xe9todo de proyecto ValoresUnicos en este ejemplo le permite verificar si los valores son \xfanicos para los campos en una tabla. El registro actual puede ser un registro existente o un registro nuevo."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo de proyecto ValoresUnicos\n\xa0\xa0// ValoresUnicos ( Puntero ; Puntero { ; Puntero... } ) -> Booleano\n\xa0\xa0// ValoresUnicos ( ->Tabla ; ->Campo { ; ->Campo2... } ) -> Yes o No\n\xa0\n\xa0var $0 : Boolean\n\xa0var ${1} : Pointer\n\xa0var $vlCampo;$vlNbCampos;$vlEncontrado;$vlRegistroActual : Integer\n\xa0$vlNbCampos:=Count parameters-1\n\xa0$vlRegistroActual:=Record number($1->)\n\xa0If($vlNbCampos>0)\n\xa0\xa0\xa0\xa0If($vlRegistroActual#-1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlRegistroActual<0)\n\xa0\xa0// El registro actual es un nuevo registro que no ha sido guardado (n\xfamero de registro -3);\n\xa0\xa0// por lo tanto podemos detener la b\xfasqueda tan pronto como se encuentre al menos un registro\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET QUERY LIMIT(1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// El registro actual es un registro existente;\n\xa0\xa0// por lo tanto podemos detener la b\xfasqueda tan pronto como se encuentren al menos dos registros.\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET QUERY LIMIT(2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0// La b\xfasqueda devolver\xe1 su resultado en $vlFound\n\xa0\xa0// sin cambiar el registro actual ni la selecci\xf3na actual\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET QUERY DESTINATION(Into variable;$vlFound)\n\xa0\xa0// Construir la b\xfasqueda de acuerdo al n\xfamero de campos especificados\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlNbCampos=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY($1->;$2->=$2->)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlNbCampos=2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY($1->;$2->=$2->;*)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY($1->;&;$3->=$3->)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY($1->;$2->=$2->;*)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlCampo;2;$vlNbCampos-1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY($1->;&;${1+$vlCampo}->=${1+$vlCampo}->;*)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0QUERY($1->;&;${1+$vlNbCampos}->=${1+$vlNbCampos}->)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET QUERY DESTINATION(Into current selection)\xa0// Restaurar el modo de b\xfasqueda est\xe1ndar\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET QUERY LIMIT(0)\xa0// No hay l\xedmites de b\xfasquedas\n\xa0\xa0// Procesar el resultado de la b\xfasqueda\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlEncontrado=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=True\xa0// No hay valores duplicados\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlEncontrado=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlRegistroActual<0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=False\xa0// Se encontr\xf3 un registro existente con los mismos valores que el nuevo registro\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=True\xa0// No hay valores duplicado, encontramos el mismo registro\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlEncontrado=2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=False\xa0// Cualquiera que sea el caso, los valores est\xe1n duplicados\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(\u25CADebugOn)\xa0// No tiene sentido; se\xf1\xe1lelo durante la versi\xf3n de desarrollo\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0TRACE\xa0// \xa1ATENCI\xd3N! Este m\xe9todo es llamado sin registro actual\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=False\xa0// No es posible garantizar el resultado\n\xa0\xa0\xa0\xa0End if\n\xa0Else\n\xa0\xa0\xa0\xa0If(\u25CADebugOn)\xa0// No tiene sentido; se\xf1\xe1lelo si la versi\xf3n de desarrollo\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0TRACE\xa0// \xa1ATENCI\xd3N! Este m\xe9todo es llamado sin condici\xf3n de b\xfasqueda\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0$0:=False\xa0// No puedo garantizar el resultado\n\xa0End if\n"})}),"\n",(0,r.jsx)(n.p,{children:"Despu\xe9s de implementar este m\xe9todo de proyecto en su aplicaci\xf3n, puede escribir:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// ...\n\xa0If(ValoresUnicos(->[Contactos];->[Contactos]Empresa;->[Contactos]Apellido;->[Contactos]Nombre))\n\xa0\xa0// Realice acciones apropiadas para el registro que tiene valores \xfanicos\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("Ya existe un contacto con este nombre para esta empresa.")\n\xa0End if\n\xa0\xa0// ...\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/get-query-destination",children:"GET QUERY DESTINATION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/query",children:"QUERY"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/query-by-example",children:"QUERY BY EXAMPLE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/query-by-formula",children:"QUERY BY FORMULA"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/query-by-sql",children:"QUERY BY SQL"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/query-selection",children:"QUERY SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/query-selection-by-formula",children:"QUERY SELECTION BY FORMULA"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/query-with-array",children:"QUERY WITH ARRAY"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/set-query-limit",children:"SET QUERY LIMIT"})]}),"\n",(0,r.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"396"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var a=s(667294);let r={},o=a.createContext(r);function l(e){let n=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);