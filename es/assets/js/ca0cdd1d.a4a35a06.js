/*! For license information please see ca0cdd1d.a4a35a06.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[85999],{438810:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>t});var s=n(474848),c=n(28453);const a={id:"shared",title:"Objetos y colecciones compartidos"},r=void 0,i={id:"Concepts/shared",title:"Objetos y colecciones compartidos",description:"Generalidades",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-18/Concepts/shared.md",sourceDirName:"Concepts",slug:"/Concepts/shared",permalink:"/docs/es/18/Concepts/shared",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fshared.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"shared",title:"Objetos y colecciones compartidos"},sidebar:"docs",previous:{title:"Par\xe1metros",permalink:"/docs/es/18/Concepts/parameters"},next:{title:"Condiciones y bucles",permalink:"/docs/es/18/Concepts/control-flow"}},d={},t=[{value:"Generalidades",id:"generalidades",level:2},{value:"Utilizaci\xf3n de objetos o colecciones compartidos",id:"utilizaci\xf3n-de-objetos-o-colecciones-compartidos",level:2},{value:"Modificaci\xf3n",id:"modificaci\xf3n",level:3},{value:"Lectura",id:"lectura",level:3},{value:"Duplication",id:"duplication",level:3},{value:"Storage",id:"storage",level:3},{value:"Use...End use",id:"useend-use",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2}];function l(e){const o={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h2,{id:"generalidades",children:"Generalidades"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Los objetos compartidos"})," y ",(0,s.jsx)(o.strong,{children:"las colecciones compartidas"})," son ",(0,s.jsx)(o.a,{href:"/docs/es/18/Concepts/object",children:"objetos"})," y ",(0,s.jsx)(o.a,{href:"/docs/es/18/Concepts/collection",children:"colecciones"})," espec\xedficas cuyo contenido se comparte entre procesos. A diferencia de las ",(0,s.jsx)(o.a,{href:"/docs/es/18/Concepts/variables#interprocess-variables",children:"variables interproceso"}),", los objetos compartidos y las colecciones compartidas tienen la ventaja de ser compatibles con los ",(0,s.jsx)(o.strong,{children:"procesos 4D apropiativos"}),": pueden pasarse por referencia como par\xe1metros a comandos como ",(0,s.jsx)(o.code,{children:"New process"})," o ",(0,s.jsx)(o.code,{children:"CALL WORKER"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Los objetos compartidos y las colecciones compartidas pueden almacenarse en variables declaradas con los comandos est\xe1ndar ",(0,s.jsx)(o.code,{children:"C_OBJECT"})," y ",(0,s.jsx)(o.code,{children:"C_COLLECTION"}),", pero deben instanciarse utilizando comandos espec\xedficos:"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["para crear un objeto compartido, utilice el comando ",(0,s.jsx)(o.code,{children:"New shared object"}),","]}),"\n",(0,s.jsxs)(o.li,{children:["para crear una colecci\xf3n compartida, utilice el comando ",(0,s.jsx)(o.code,{children:"New shared collection"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nota:"})," los objetos y colecciones compartidos pueden definirse como propiedades de objetos o colecciones est\xe1ndar (no compartidos)."]}),"\n",(0,s.jsxs)(o.p,{children:["Para modificar un objeto/colecci\xf3n compartido, se debe llamar a la estructura ",(0,s.jsx)(o.strong,{children:"Use...End use"}),". La lectura de un valor de objeto/colecci\xf3n compartido no requiere ",(0,s.jsx)(o.strong,{children:"Use...End use"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Un cat\xe1logo \xfanico y global devuelto por el comando ",(0,s.jsx)(o.code,{children:"Storage"})," est\xe1 siempre disponible en toda la base y sus componentes, y puede utilizarse para almacenar todos los objetos y colecciones compartidos."]}),"\n",(0,s.jsx)(o.h2,{id:"utilizaci\xf3n-de-objetos-o-colecciones-compartidos",children:"Utilizaci\xf3n de objetos o colecciones compartidos"}),"\n",(0,s.jsxs)(o.p,{children:["Una vez instanciado con los comandos ",(0,s.jsx)(o.code,{children:"Nuevo objeto compartido"})," o ",(0,s.jsx)(o.code,{children:"Nueva colecci\xf3n compartida"}),", las propiedades y elementos del objeto compartido/colecci\xf3n pueden ser modificados o le\xeddos desde cualquier proceso de la aplicaci\xf3n."]}),"\n",(0,s.jsx)(o.h3,{id:"modificaci\xf3n",children:"Modificaci\xf3n"}),"\n",(0,s.jsx)(o.p,{children:"Las siguientes modificaciones pueden efectuarse en objetos y colecciones compartidos:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"a\xf1adir o eliminar propiedades de los objetos,"}),"\n",(0,s.jsx)(o.li,{children:"a\xf1adir o editar valores (siempre que se soporten en objetos compartidos), incluyendo otros objetos compartidos o colecciones (lo que crea un grupo compartido, ver abajo)."}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["Sin embargo, todas las instrucciones de modificaci\xf3n en un objeto compartido o colecci\xf3n deben estar rodeadas por las palabras clave ",(0,s.jsx)(o.code,{children:"Use...End use"}),", de lo contrario se genera un error."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:' $s_obj:=New shared object("prop1";"alpha")\n Use($s_obj)\n    $s_obj.prop1:="omega"\n End Use\n'})}),"\n",(0,s.jsxs)(o.p,{children:["Un objeto/una colecci\xf3n compartido(a) s\xf3lo puede modificarse por un proceso a la vez. A shared object/collection can only be modified by one process at a time. Intentar modificar un objeto/colecci\xf3n compartido sin al menos un ",(0,s.jsx)(o.code,{children:"Use...End use"})," genera un error. Cuando un proceso llama a ",(0,s.jsx)(o.code,{children:"Use...End use"})," en un objeto/colecci\xf3n compartido que ya est\xe1 en uso por otro proceso, simplemente se pone en espera hasta que el ",(0,s.jsx)(o.code,{children:"End use"})," lo desbloquee (no se genera ning\xfan error). En consecuencia, las instrucciones dentro de las estructuras ",(0,s.jsx)(o.code,{children:"Use...End use"})," deben ejecutarse r\xe1pidamente y desbloquear los elementos lo antes posible. Por lo tanto, se recomienda enf\xe1ticamente evitar modificar un objeto o colecci\xf3n compartido directamente desde la interfaz, por ejemplo, a trav\xe9s de una caja de di\xe1logo."]}),"\n",(0,s.jsxs)(o.p,{children:["La asignaci\xf3n de objetos/colecciones compartidos a propiedades o elementos de otros objetos/colecciones compartidos est\xe1 permitida y crea ",(0,s.jsx)(o.strong,{children:"grupos compartidos"}),". Un grupo compartido se crea autom\xe1ticamente cuando un objeto/colecci\xf3n compartido se define como valor de propiedad o elemento de otro objeto/colecci\xf3n compartido. Los grupos compartidos permiten anidar objetos y colecciones compartidos, pero imponen reglas adicionales:"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["Al llamar a ",(0,s.jsx)(o.code,{children:"Use"})," en un objeto/colecci\xf3n compartido de un grupo se bloquear\xe1n las propiedades/elementos de todos los objetos/colecciones compartidos que pertenezcan al mismo grupo."]}),"\n",(0,s.jsx)(o.li,{children:"Un objeto/colecci\xf3n compartido s\xf3lo puede pertenecer a un grupo compartido. Se devuelve un error si se intenta asignar un objeto/colecci\xf3n compartido ya agrupado a un grupo diferente."}),"\n",(0,s.jsx)(o.li,{children:"Los objetos/colecciones compartidos agrupados no se pueden desagrupar. Una vez incluido en un grupo compartido, un objeto/colecci\xf3n compartido queda vinculado permanentemente a ese grupo durante toda la sesi\xf3n. Incluso si todas las referencias de un objeto/colecci\xf3n se eliminan del objeto/colecci\xf3n padre, seguir\xe1n vinculadas."}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"Consulte el ejemplo 2 para ver una ilustraci\xf3n de las reglas de los grupos compartidos."}),"\n",(0,s.jsx)(o.h3,{id:"lectura",children:"Lectura"}),"\n",(0,s.jsxs)(o.p,{children:["Se permite la lectura de propiedades o elementos de un objeto/colecci\xf3n compartida sin tener que llamar a la estructura ",(0,s.jsx)(o.code,{children:"Use...End use"}),", incluso si el objeto/colecci\xf3n compartida est\xe1 en uso por otro proceso."]}),"\n",(0,s.jsxs)(o.p,{children:["Sin embargo, cuando varios valores son interdependientes y deben ser le\xeddos simult\xe1neamente, es necesario enmarcar el acceso de lectura con una estructura ",(0,s.jsx)(o.code,{children:"Use...End use"})," por coherencia."]}),"\n",(0,s.jsx)(o.h3,{id:"duplication",children:"Duplication"}),"\n",(0,s.jsxs)(o.p,{children:["Llamar a ",(0,s.jsx)(o.code,{children:"OB Copy"})," con un objeto compartido (o con un objeto cuyas propiedades son objetos compartidos) es posible, pero en este caso se devuelve un objeto est\xe1ndar (no compartido)."]}),"\n",(0,s.jsx)(o.h3,{id:"storage",children:"Storage"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Storage"})," es un objeto compartido \xfanico, disponible autom\xe1ticamente en cada aplicaci\xf3n y m\xe1quina. Este objeto compartido es devuelto por el comando ",(0,s.jsx)(o.code,{children:"Storage"}),". Puede utilizar este objeto para hacer referencia a todos los objetos/colecciones compartidos definidos durante la sesi\xf3n que desee que est\xe9n disponibles desde cualquier proceso preventivo o est\xe1ndar."]}),"\n",(0,s.jsxs)(o.p,{children:["Tenga en cuenta que, a diferencia de los objetos compartidos est\xe1ndar, el objeto ",(0,s.jsx)(o.code,{children:"Storage"})," no crea un grupo compartido cuando se a\xf1aden objetos/colecciones compartidos como sus propiedades. Esta excepci\xf3n permite utilizar el objeto ",(0,s.jsx)(o.strong,{children:"Storage"})," sin bloquear todos los objetos o colecciones compartidos conectados."]}),"\n",(0,s.jsxs)(o.p,{children:["Para m\xe1s informaci\xf3n, consulte la descripci\xf3n del comando ",(0,s.jsx)(o.code,{children:"Storage"}),"."]}),"\n",(0,s.jsx)(o.h2,{id:"useend-use",children:"Use...End use"}),"\n",(0,s.jsxs)(o.p,{children:["La sintaxis de la estructura ",(0,s.jsx)(o.code,{children:"Use...End use"})," es:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" Use(Shared_object_or_Shared_collection)\n    instrucci\xf3n(es)\n End use\n"})}),"\n",(0,s.jsxs)(o.p,{children:["La estructura ",(0,s.jsx)(o.code,{children:"Use...End use"})," define una secuencia de instrucciones que ejecutar\xe1n tareas sobre el par\xe1metro ",(0,s.jsx)(o.em,{children:"Shared_object_or_Shared_collection"})," bajo la protecci\xf3n de un sem\xe1foro interno. ",(0,s.jsx)(o.em,{children:"Shared_object_or_Shared_collection"})," puede ser cualquier objeto o colecci\xf3n compartido v\xe1lido."]}),"\n",(0,s.jsxs)(o.p,{children:["Los objetos compartidos y las colecciones compartidas est\xe1n dise\xf1ados para permitir la comunicaci\xf3n entre procesos, en particular, ",(0,s.jsx)(o.strong,{children:"procesos 4D preferentes"}),". Se pueden pasar por referencia como par\xe1metros de un proceso a otro. Para obtener informaci\xf3n detallada sobre los objetos compartidos o las colecciones compartidas, consulte la p\xe1gina ",(0,s.jsx)(o.strong,{children:"Objetos y colecciones compartidos"}),". Es obligatorio rodear las modificaciones en los objetos o colecciones compartidas con las palabras clave ",(0,s.jsx)(o.code,{children:"Use...End use"})," para evitar el acceso concurrente entre procesos."]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["Una vez que se ejecuta con \xe9xito la l\xednea ",(0,s.jsx)(o.strong,{children:"Use"}),", todas las propiedades/elementos de ",(0,s.jsx)(o.em,{children:"Shared_object_or_Shared_collection"})," se bloquean para el resto de procesos en acceso de escritura hasta que se ejecute la l\xednea ",(0,s.jsx)(o.code,{children:"End use"})," correspondiente."]}),"\n",(0,s.jsxs)(o.li,{children:["La secuencia ",(0,s.jsx)(o.em,{children:"de instrucciones"})," puede ejecutar cualquier modificaci\xf3n en las propiedades/elementos de Shared_object_o_Shared_collection sin riesgo de acceso concurrente."]}),"\n",(0,s.jsxs)(o.li,{children:["Si se a\xf1ade otro objeto o colecci\xf3n compartida como propiedad del par\xe1metro ",(0,s.jsx)(o.em,{children:"Shared_object_or_Shared_collection"}),", se conectan dentro del mismo grupo compartido (ver ",(0,s.jsx)(o.strong,{children:"Uso de objetos o colecciones compartidos"}),")."]}),"\n",(0,s.jsxs)(o.li,{children:["Si otro proceso intenta acceder a una de las propiedades ",(0,s.jsx)(o.em,{children:"Objeto_compartido_o_Colecci\xf3n_compartida"})," o una propiedad conectad mientras se est\xe1 ejecutando una secuencia ",(0,s.jsx)(o.strong,{children:"Use... End use"}),", se pone autom\xe1ticamente en espera y espera hasta que la secuencia actual finalice."]}),"\n",(0,s.jsxs)(o.li,{children:["La l\xednea ",(0,s.jsx)(o.strong,{children:"End use"})," desbloquea las propiedades ",(0,s.jsx)(o.em,{children:"Shared_object_or_Shared_collection"})," y todos los objetos que comparten el mismo identificador de bloqueo."]}),"\n",(0,s.jsxs)(o.li,{children:["En el c\xf3digo 4D se pueden anidar varias estructuras ",(0,s.jsx)(o.strong,{children:"Use...End use"}),". En ese caso, todos los bloqueos se apilan y las propiedades/elementos se liberar\xe1n s\xf3lo cuando se ejecute la \xfaltima llamada de End use."]}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nota:"})," si un m\xe9todo de una colecci\xf3n modifica una colecci\xf3n compartida, se llama autom\xe1ticamente un ",(0,s.jsx)(o.strong,{children:"Use"})," interno para esta colecci\xf3n compartida mientras se ejecuta la funci\xf3n."]}),"\n",(0,s.jsx)(o.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(o.p,{children:"Se desea lanzar varios procesos que realicen una tarea de inventario en diferentes productos y que actualicen el mismo objeto compartido. El proceso principal instancia un objeto compartido vac\xedo y luego, lanza los otros procesos, pasando el objeto compartido y los productos a contar como par\xe1metros:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:' ARRAY TEXT($_items;0)\n ... //llenar el array con los elementos a contar\n $nbItems:=Size of array($_items)\n C_OBJECT($inventory)\n $inventory:=New shared object\n Use($inventory)\n    $inventory.nbItems:=$nbItems\n End use\n\n  //Crear procesos\n For($i;1;$nbItems)\n    $ps:=New process("HowMany";0;"HowMany_"+$_items{$i};$_items{$i};$inventory)\n  //$inventory object sent by reference\n End for\n'})}),"\n",(0,s.jsx)(o.p,{children:'En el m\xe9todo "HowMany", el inventario se realiza y el objeto compartido $inventory se actualiza lo antes posible:'}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" C_TEXT($1)\n C_TEXT($what)\n C_OBJECT($2)\n C_OBJECT($inventory)\n $what:=$1 //para una mejor legibilidad\n $inventory:=$2\n\n $count:=CountMethod($what) //m\xe9todo para contar productos\n Use($inventory) //utilizar el objeto compartido\n    $inventory[$what]:=$count  //guardar los resultados de este art\xedculo\n End use\n"})}),"\n",(0,s.jsx)(o.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(o.p,{children:"Los siguientes ejemplos ilustran las reglas espec\xedficas para el manejo de los grupos compartidos:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" $ob1:=New shared object\n $ob2:=New shared object\n Use($ob1)\n    $ob1.a:=$ob2  //se crea el grupo 1\n End use\n\n $ob3:=New shared object\n $ob4:=New shared object\n Use($ob3)\n    $ob3.a:=$ob4  //se crea el grupo 2\n End use\n\n Use($ob1) //utilizar un objeto del grupo 1\n    $ob1.b:=$ob4  //ERROR\n  //$ob4 ya pertenece a otro grupo\n  //la asignaci\xf3n no est\xe1 permitida\n End use\n\n Use($ob3)\n    $ob3.a:=Null //eliminar cualquier referencia a $ob4 del grupo 2\n End use\n\n Use($ob1) //utilizar un objeto del grupo 1\n    $ob1.b:=$ob4  //ERROR\n  //$ob4 a\xfan pertenece al grupo 2\n  //la asignaci\xf3n no est\xe1 permitida\n End use\n"})})]})}function p(e={}){const{wrapper:o}={...(0,c.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,o,n)=>{var s=n(296540),c=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function t(e,o,n){var s,a={},t=null,l=null;for(s in void 0!==n&&(t=""+n),void 0!==o.key&&(t=""+o.key),void 0!==o.ref&&(l=o.ref),o)r.call(o,s)&&!d.hasOwnProperty(s)&&(a[s]=o[s]);if(e&&e.defaultProps)for(s in o=e.defaultProps)void 0===a[s]&&(a[s]=o[s]);return{$$typeof:c,type:e,key:t,ref:l,props:a,_owner:i.current}}o.Fragment=a,o.jsx=t,o.jsxs=t},474848:(e,o,n)=>{e.exports=n(221020)},28453:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>i});var s=n(296540);const c={},a=s.createContext(c);function r(e){const o=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(a.Provider,{value:o},e.children)}}}]);