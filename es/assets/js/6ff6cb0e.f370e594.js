"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81706"],{945595:function(e,o,s){s.r(o),s.d(o,{metadata:()=>n,contentTitle:()=>i,default:()=>p,assets:()=>d,toc:()=>t,frontMatter:()=>r});var n=JSON.parse('{"id":"Concepts/shared","title":"Objetos y colecciones compartidos","description":"Los objetos compartidos y las colecciones compartidas son objetos y colecciones espec\xedficas cuyo contenido se comparte entre procesos. A diferencia de las variables interproceso, los objetos compartidos y las colecciones compartidas tienen la ventaja de ser compatibles con los procesos 4D apropiativos: pueden pasarse por referencia como par\xe1metros a comandos como New process o CALL WORKER.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/Concepts/shared.md","sourceDirName":"Concepts","slug":"/Concepts/shared","permalink":"/docs/es/Concepts/shared","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fshared.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"shared","title":"Objetos y colecciones compartidos"},"sidebar":"docs","previous":{"title":"Par\xe1metros","permalink":"/docs/es/Concepts/parameters"},"next":{"title":"Clases","permalink":"/docs/es/Concepts/classes"}}'),c=s("785893"),a=s("250065");let r={id:"shared",title:"Objetos y colecciones compartidos"},i=void 0,d={},t=[{value:"Utilizaci\xf3n de objetos o colecciones compartidos",id:"utilizaci\xf3n-de-objetos-o-colecciones-compartidos",level:2},{value:"Modificaci\xf3n",id:"modificaci\xf3n",level:3},{value:"Lectura",id:"lectura",level:3},{value:"Duplication",id:"duplication",level:3},{value:"Storage",id:"storage",level:3},{value:"Use...End use",id:"useend-use",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2}];function l(e){let o={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(o.p,{children:[(0,c.jsx)(o.strong,{children:"Los objetos compartidos"})," y ",(0,c.jsx)(o.strong,{children:"las colecciones compartidas"})," son ",(0,c.jsx)(o.a,{href:"/docs/es/Concepts/object",children:"objetos"})," y ",(0,c.jsx)(o.a,{href:"/docs/es/Concepts/collection",children:"colecciones"})," espec\xedficas cuyo contenido se comparte entre procesos. A diferencia de las ",(0,c.jsx)(o.a,{href:"/docs/es/Concepts/variables#variables-interproceso",children:"variables interproceso"}),", los objetos compartidos y las colecciones compartidas tienen la ventaja de ser compatibles con los ",(0,c.jsx)(o.strong,{children:"procesos 4D apropiativos"}),": pueden pasarse por referencia como par\xe1metros a comandos como ",(0,c.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page317.html",children:(0,c.jsx)(o.code,{children:"New process"})})," o ",(0,c.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1389.html",children:(0,c.jsx)(o.code,{children:"CALL WORKER"})}),"."]}),"\n",(0,c.jsxs)(o.p,{children:["Los objetos compartidos y las colecciones compartidas se almacenan en variables est\xe1ndar ",(0,c.jsx)(o.a,{href:"/docs/es/Concepts/object",children:(0,c.jsx)(o.code,{children:"Object"})})," y ",(0,c.jsx)(o.a,{href:"/docs/es/Concepts/collection",children:(0,c.jsx)(o.code,{children:"Collection"})}),", pero deben instanciarse utilizando comandos espec\xedficos:"]}),"\n",(0,c.jsxs)(o.ul,{children:["\n",(0,c.jsxs)(o.li,{children:["para crear un objeto compartido, utilice el comando ",(0,c.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1471.html",children:(0,c.jsx)(o.code,{children:"New shared object"})})," o llama a la funci\xf3n ",(0,c.jsx)(o.a,{href:"/docs/es/API/ClassClass#new",children:(0,c.jsx)(o.code,{children:"new()"})})," de una ",(0,c.jsx)(o.a,{href:"/docs/es/Concepts/classes#clases-compartidas",children:"clase compartida"}),","]}),"\n",(0,c.jsxs)(o.li,{children:["para crear una colecci\xf3n compartida, utilice el comando ",(0,c.jsx)(o.a,{href:"/docs/es/commands/new-shared-collection",children:(0,c.jsx)(o.code,{children:"New shared collection"})}),"."]}),"\n"]}),"\n",(0,c.jsx)(o.p,{children:"Los objetos y colecciones compartidas solo pueden contener valores escalares u otros objetos y colecciones compartidas. Sin embargo, los objetos y colecciones compartidos pueden establecerse como propiedades de objetos o colecciones est\xe1ndar (no compartidos)."}),"\n",(0,c.jsxs)(o.p,{children:["Para modificar un objeto/colecci\xf3n compartido, se debe llamar a la estructura ",(0,c.jsx)(o.strong,{children:"Use...End use"}),". La lectura de un valor de objeto/colecci\xf3n compartido no requiere ",(0,c.jsx)(o.strong,{children:"Use...End use"}),"."]}),"\n",(0,c.jsxs)(o.p,{children:["Un cat\xe1logo \xfanico y global devuelto por el comando ",(0,c.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1525.html",children:(0,c.jsx)(o.code,{children:"Storage"})})," siempre est\xe1 disponible en toda la aplicaci\xf3n y sus componentes, y puede ser utilizado para almacenar todos los objetos compartidos y colecciones."]}),"\n",(0,c.jsx)(o.h2,{id:"utilizaci\xf3n-de-objetos-o-colecciones-compartidos",children:"Utilizaci\xf3n de objetos o colecciones compartidos"}),"\n",(0,c.jsxs)(o.p,{children:["Una vez instanciado con los comandos ",(0,c.jsx)(o.code,{children:"Nuevo objeto compartido"})," o ",(0,c.jsx)(o.code,{children:"Nueva colecci\xf3n compartida"}),", las propiedades y elementos del objeto compartido/colecci\xf3n pueden ser modificados o le\xeddos desde cualquier proceso de la aplicaci\xf3n, bajo ciertas condiciones."]}),"\n",(0,c.jsx)(o.h3,{id:"modificaci\xf3n",children:"Modificaci\xf3n"}),"\n",(0,c.jsx)(o.p,{children:"Las siguientes modificaciones pueden efectuarse en objetos y colecciones compartidos:"}),"\n",(0,c.jsxs)(o.ul,{children:["\n",(0,c.jsx)(o.li,{children:"a\xf1adir o eliminar propiedades de los objetos,"}),"\n",(0,c.jsx)(o.li,{children:"a\xf1adir o editar valores (siempre que se soporten en objetos compartidos), incluyendo otros objetos compartidos o colecciones (lo que crea un grupo compartido, ver abajo)."}),"\n"]}),"\n",(0,c.jsx)(o.admonition,{type:"note",children:(0,c.jsx)(o.p,{children:"Tenga en cuenta que los objetos o colecciones definidas como el contenido de un objeto compartido o colecci\xf3n deben ser compartidos por s\xed mismos."})}),"\n",(0,c.jsxs)(o.p,{children:["Todas las instrucciones de modificaci\xf3n en un objeto compartido o colecci\xf3n requieren estar protegidas dentro de un bloque ",(0,c.jsx)(o.a,{href:"#use-end-use",children:(0,c.jsx)(o.code,{children:"Use...End use"})}),", de lo contrario se genera un error."]}),"\n",(0,c.jsx)(o.pre,{children:(0,c.jsx)(o.code,{className:"language-4d",children:' $s_obj:=New shared object("prop1";"alpha")\n Use($s_obj)\n    $s_obj.prop1:="omega"\n End Use\n'})}),"\n",(0,c.jsxs)(o.p,{children:["Por comodidad, todas las ",(0,c.jsx)(o.a,{href:"/docs/es/API/CollectionClass",children:"funciones colecci\xf3n"})," que modifican el objeto compartido o la colecci\xf3n insertan un bloque interno ",(0,c.jsx)(o.code,{children:"Use...End use"})," para que no tenga que codificarlo usted mismo. Por ejemplo:"]}),"\n",(0,c.jsx)(o.pre,{children:(0,c.jsx)(o.code,{className:"language-4d",children:'$col:=Nueva colecci\xf3n compartida()\n$col.push("alpha") //.push() desencadena internamente el uso de Use/End, por lo que no es necesario que lo hagan ustedes mismos\n'})}),"\n",(0,c.jsxs)(o.p,{children:["Si necesita ejecutar varias modificaciones en la misma colecci\xf3n, puede proteger todas las modificaciones con un \xfanico ",(0,c.jsx)(o.code,{children:"Use...End use"})," para que las modificaciones se realicen de forma at\xf3mica."]}),"\n",(0,c.jsx)(o.pre,{children:(0,c.jsx)(o.code,{className:"language-4d",children:'$col:=Storage.mySharedCollection\nUse($col)\n	$col[0]:="omega" //modificar un elemento requiere realizarse dentro de Use/End use\n	$col.push("alpha") //.push() desencadena internamente Use/End use, pero queremos realizar ambas modificaciones at\xf3micamente\nEnd Use\n'})}),"\n",(0,c.jsxs)(o.p,{children:["Un objeto/una colecci\xf3n compartido(a) s\xf3lo puede modificarse por un proceso a la vez. Un objeto/una colecci\xf3n compartido(a) s\xf3lo puede modificarse por un proceso a la vez. . Intentar modificar un objeto/colecci\xf3n compartido sin al menos un ",(0,c.jsx)(o.code,{children:"Use...End use"})," genera un error. Cuando un proceso llama a ",(0,c.jsx)(o.code,{children:"Use...End use"})," en un objeto/colecci\xf3n compartido que ya est\xe1 en uso por otro proceso, simplemente se pone en espera hasta que el ",(0,c.jsx)(o.code,{children:"End use"})," lo desbloquee (no se genera ning\xfan error). En consecuencia, las instrucciones dentro de las estructuras ",(0,c.jsx)(o.code,{children:"Use...End use"})," deben ejecutarse r\xe1pidamente y desbloquear los elementos lo antes posible. Por lo tanto, se recomienda enf\xe1ticamente evitar modificar un objeto o colecci\xf3n compartido directamente desde la interfaz, por ejemplo, a trav\xe9s de una caja de di\xe1logo."]}),"\n",(0,c.jsxs)(o.p,{children:["La asignaci\xf3n de objetos/colecciones compartidos a propiedades o elementos de otros objetos/colecciones compartidos est\xe1 permitida y crea ",(0,c.jsx)(o.strong,{children:"grupos compartidos"}),". Un grupo compartido se crea autom\xe1ticamente cuando un objeto/colecci\xf3n compartido se define como valor de propiedad o elemento de otro objeto/colecci\xf3n compartido. Los grupos compartidos permiten anidar objetos y colecciones compartidos, pero imponen reglas adicionales:"]}),"\n",(0,c.jsxs)(o.ul,{children:["\n",(0,c.jsxs)(o.li,{children:["Al llamar a ",(0,c.jsx)(o.code,{children:"Use"})," en un objeto/colecci\xf3n compartido que pertenece a un grupo se bloquean las propiedades/elementos de todos los objetos/colecciones del grupo y se incrementa su conteo de bloqueo. La llamada a ",(0,c.jsx)(o.code,{children:"End use"})," disminuye el contador de bloqueo del grupo y cuando el contador est\xe1 a 0, todos los objetos/colecciones compartidos vinculados se desbloquean."]}),"\n",(0,c.jsx)(o.li,{children:"Un objeto/colecci\xf3n compartido s\xf3lo puede pertenecer a un grupo compartido. Se devuelve un error si se intenta asignar un objeto/colecci\xf3n compartido ya agrupado a un grupo diferente."}),"\n",(0,c.jsx)(o.li,{children:"Los objetos/colecciones compartidos agrupados no se pueden desagrupar. Una vez incluido en un grupo compartido, un objeto/colecci\xf3n compartido queda vinculado permanentemente a ese grupo durante toda la sesi\xf3n. Incluso si todas las referencias de un objeto/colecci\xf3n se eliminan del objeto/colecci\xf3n padre, seguir\xe1n vinculadas."}),"\n"]}),"\n",(0,c.jsx)(o.p,{children:"Consulte el ejemplo 2 para ver una ilustraci\xf3n de las reglas de los grupos compartidos."}),"\n",(0,c.jsx)(o.h3,{id:"lectura",children:"Lectura"}),"\n",(0,c.jsxs)(o.p,{children:["Se permite la lectura de propiedades o elementos de un objeto/colecci\xf3n compartida sin tener que llamar a la estructura ",(0,c.jsx)(o.code,{children:"Use...End use"}),", incluso si el objeto/colecci\xf3n compartida est\xe1 en uso por otro proceso."]}),"\n",(0,c.jsxs)(o.p,{children:["Sin embargo, cuando varios valores son interdependientes y deben ser le\xeddos simult\xe1neamente, es necesario enmarcar el acceso de lectura con una estructura ",(0,c.jsx)(o.code,{children:"Use...End use"})," por coherencia."]}),"\n",(0,c.jsx)(o.h3,{id:"duplication",children:"Duplication"}),"\n",(0,c.jsxs)(o.p,{children:["Llamar a ",(0,c.jsx)(o.code,{children:"OB Copy"})," con un objeto compartido (o con un objeto cuyas propiedades son objetos compartidos) es posible, pero en este caso se devuelve un objeto est\xe1ndar (no compartido)."]}),"\n",(0,c.jsx)(o.h3,{id:"storage",children:"Storage"}),"\n",(0,c.jsxs)(o.p,{children:[(0,c.jsx)(o.strong,{children:"Storage"})," es un objeto compartido \xfanico, disponible autom\xe1ticamente en cada aplicaci\xf3n y m\xe1quina. Este objeto compartido es devuelto por el comando ",(0,c.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1525.html",children:(0,c.jsx)(o.code,{children:"Storage"})}),". Puede utilizar este objeto para hacer referencia a todos los objetos/colecciones compartidos definidos durante la sesi\xf3n que desee que est\xe9n disponibles desde cualquier proceso preventivo o est\xe1ndar."]}),"\n",(0,c.jsxs)(o.p,{children:["Tenga en cuenta que, a diferencia de los objetos compartidos est\xe1ndar, el objeto ",(0,c.jsx)(o.code,{children:"Storage"})," no crea un grupo compartido cuando se a\xf1aden objetos/colecciones compartidos como sus propiedades. Esta excepci\xf3n permite utilizar el objeto ",(0,c.jsx)(o.strong,{children:"Storage"})," sin bloquear todos los objetos o colecciones compartidos conectados."]}),"\n",(0,c.jsxs)(o.p,{children:["Para m\xe1s informaci\xf3n, consulte la descripci\xf3n del comando ",(0,c.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1525.html",children:(0,c.jsx)(o.code,{children:"Storage"})}),"."]}),"\n",(0,c.jsx)(o.h2,{id:"useend-use",children:"Use...End use"}),"\n",(0,c.jsxs)(o.p,{children:["La sintaxis de la estructura ",(0,c.jsx)(o.code,{children:"Use...End use"})," es:"]}),"\n",(0,c.jsx)(o.pre,{children:(0,c.jsx)(o.code,{className:"language-4d",children:" Use(Shared_object_or_Shared_collection)\n    instrucci\xf3n(es)\n End use\n"})}),"\n",(0,c.jsxs)(o.p,{children:["La estructura ",(0,c.jsx)(o.code,{children:"Use...End use"})," define una secuencia de instrucciones que ejecutar\xe1n tareas sobre el par\xe1metro ",(0,c.jsx)(o.em,{children:"Shared_object_or_Shared_collection"})," bajo la protecci\xf3n de un sem\xe1foro interno. ",(0,c.jsx)(o.em,{children:"Shared_object_or_Shared_collection"})," puede ser cualquier objeto o colecci\xf3n compartido v\xe1lido."]}),"\n",(0,c.jsxs)(o.p,{children:["Los objetos compartidos y las colecciones compartidas est\xe1n dise\xf1ados para permitir la comunicaci\xf3n entre procesos, en particular, ",(0,c.jsx)(o.strong,{children:"procesos 4D preferentes"}),". Se pueden pasar por referencia como par\xe1metros de un proceso a otro. Es obligatorio rodear las modificaciones en los objetos o colecciones compartidas con las palabras clave ",(0,c.jsx)(o.code,{children:"Use...End use"})," para evitar el acceso concurrente entre procesos."]}),"\n",(0,c.jsxs)(o.ul,{children:["\n",(0,c.jsxs)(o.li,{children:["Una vez que la l\xednea ",(0,c.jsx)(o.strong,{children:"Use"})," se ejecuta con \xe9xito, todas las propiedades/elementos de ",(0,c.jsx)(o.em,{children:"Shared_object_or_Shared_collection"})," est\xe1n bloqueados para todos los dem\xe1s procesos en acceso de escritura hasta que se ejecute la l\xednea ",(0,c.jsx)(o.code,{children:"End use"})," correspondiente."]}),"\n",(0,c.jsxs)(o.li,{children:["La secuencia ",(0,c.jsx)(o.em,{children:"statement(s)"})," puede ejecutar cualquier modificaci\xf3n en las propiedades/elementos de Shared_object_o_Shared_collection sin riesgo de acceso concurrente."]}),"\n",(0,c.jsxs)(o.li,{children:["Si se a\xf1ade otro objeto o colecci\xf3n compartida como propiedad del par\xe1metro ",(0,c.jsx)(o.em,{children:"Shared_object_or_Shared_collection"}),", se conectan dentro del mismo grupo compartido."]}),"\n",(0,c.jsxs)(o.li,{children:["Si otro proceso intenta acceder a una de las propiedades ",(0,c.jsx)(o.em,{children:"Shared_object_or_Shared_collection"})," o una propiedad conectada mientras se est\xe1 ejecutando una secuencia ",(0,c.jsx)(o.strong,{children:"Use...End use"}),", se pone autom\xe1ticamente en espera y espera hasta que la secuencia actual finalice."]}),"\n",(0,c.jsxs)(o.li,{children:["La l\xednea ",(0,c.jsx)(o.strong,{children:"End use"})," desbloquea las propiedades ",(0,c.jsx)(o.em,{children:"Shared_object_or_Shared_collection"})," y todos los objetos del mismo grupo."]}),"\n",(0,c.jsxs)(o.li,{children:["En el c\xf3digo 4D se pueden anidar varias estructuras ",(0,c.jsx)(o.strong,{children:"Use...End use"}),". Para modificar un objeto/colecci\xf3n compartido, se debe llamar a la estructura ",(0,c.jsx)(o.strong,{children:"Use...End use"}),"."]}),"\n"]}),"\n",(0,c.jsxs)(o.admonition,{type:"note",children:[(0,c.jsxs)(o.p,{children:["Las siguientes funciones activan autom\xe1ticamente un ",(0,c.jsx)(o.strong,{children:"Use/End use"})," interno, haciendo innecesaria una llamada expl\xedcita a la estructura cuando se ejecuta la funci\xf3n:"]}),(0,c.jsxs)(o.ul,{children:["\n",(0,c.jsxs)(o.li,{children:[(0,c.jsx)(o.a,{href:"/docs/es/API/CollectionClass",children:"funciones de collection"})," que modifican las colecciones compartidas"]}),"\n",(0,c.jsxs)(o.li,{children:[(0,c.jsx)(o.a,{href:"/docs/es/Concepts/classes#shared-functions",children:"funciones compartidas"})," (definidas en ",(0,c.jsx)(o.a,{href:"/docs/es/Concepts/classes#shared-classes",children:"clases compartidas"}),")."]}),"\n"]})]}),"\n",(0,c.jsx)(o.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,c.jsx)(o.p,{children:"Se desea lanzar varios procesos que realicen una tarea de inventario en diferentes productos y que actualicen el mismo objeto compartido. El proceso principal instancia un objeto compartido vac\xedo y luego, lanza los otros procesos, pasando el objeto compartido y los productos a contar como par\xe1metros:"}),"\n",(0,c.jsx)(o.pre,{children:(0,c.jsx)(o.code,{className:"language-4d",children:' ARRAY TEXT($_items;0)\n ... //llenar el array con los elementos a contar\n $nbItems:=Size of array($_items)\n var $inventory : Object\n $inventory:=New shared object\n Use($inventory)\n    $inventory.nbItems:=$nbItems\n End use\n\n  //Crear procesos\n For($i;1;$nbItems)\n    $ps:=New process("HowMany";0;"HowMany_"+$_items{$i};$_items{$i};$inventory)\n  //$inventory object sent by reference\n End for\n'})}),"\n",(0,c.jsx)(o.p,{children:'En el m\xe9todo "HowMany", el inventario se realiza y el objeto compartido $inventory se actualiza lo antes posible:'}),"\n",(0,c.jsx)(o.pre,{children:(0,c.jsx)(o.code,{className:"language-4d",children:"//HowMany\n #DECLARE ($what : Text ; $inventory : Object)\n\n $count:=CountMethod($what) //m\xe9todo para contar productos\n Use($inventory) //utilizar el objeto compartido\n    $inventory[$what]:=$count  //guardar los resultados de este elemento\n End use\n"})}),"\n",(0,c.jsx)(o.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,c.jsx)(o.p,{children:"Los siguientes ejemplos ilustran las reglas espec\xedficas para el manejo de los grupos compartidos:"}),"\n",(0,c.jsx)(o.pre,{children:(0,c.jsx)(o.code,{className:"language-4d",children:" $ob1:=New shared object\n $ob2:=New shared object\n Use($ob1)\n    $ob1.a:=$ob2  //se crea el grupo 1\n End use\n\n $ob3:=New shared object\n $ob4:=New shared object\n Use($ob3)\n    $ob3.a:=$ob4  //se crea el grupo 2\n End use\n\n Use($ob1) //utilizar un objeto del grupo 1\n    $ob1.b:=$ob4  //ERROR\n  //$ob4 ya pertenece a otro grupo\n  //la asignaci\xf3n no est\xe1 permitida\n End use\n\n Use($ob3)\n    $ob3.a:=Null //eliminar cualquier referencia a $ob4 del grupo 2\n End use\n\n Use($ob1) //utilizar un objeto del grupo 1\n    $ob1.b:=$ob4  //ERROR\n  //$ob4 a\xfan pertenece al grupo 2\n  //la asignaci\xf3n no est\xe1 permitida\n End use\n"})})]})}function p(e={}){let{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,c.jsx)(o,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},250065:function(e,o,s){s.d(o,{Z:function(){return i},a:function(){return r}});var n=s(667294);let c={},a=n.createContext(c);function r(e){let o=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),n.createElement(a.Provider,{value:o},e.children)}}}]);