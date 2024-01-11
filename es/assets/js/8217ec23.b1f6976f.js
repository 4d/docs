"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74151],{603905:(e,o,a)=>{a.d(o,{Zo:()=>p,kt:()=>m});var n=a(667294);function t(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function r(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?r(Object(a),!0).forEach((function(o){t(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function c(e,o){if(null==e)return{};var a,n,t=function(e,o){if(null==e)return{};var a,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],o.indexOf(a)>=0||(t[a]=e[a]);return t}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var i=n.createContext({}),l=function(e){var o=n.useContext(i),a=o;return e&&(a="function"==typeof e?e(o):s(s({},o),e)),a},p=function(e){var o=l(e.components);return n.createElement(i.Provider,{value:o},e.children)},d={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},u=n.forwardRef((function(e,o){var a=e.components,t=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(a),m=t,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(b,s(s({ref:o},p),{},{components:a})):n.createElement(b,s({ref:o},p))}));function m(e,o){var a=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var r=a.length,s=new Array(r);s[0]=u;var c={};for(var i in o)hasOwnProperty.call(o,i)&&(c[i]=o[i]);c.originalType=e,c.mdxType="string"==typeof e?e:t,s[1]=c;for(var l=2;l<r;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},140766:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});a(667294);var n=a(603905);function t(){return t=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},t.apply(this,arguments)}function r(e,o){if(null==e)return{};var a,n,t=function(e,o){if(null==e)return{};var a,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],o.indexOf(a)>=0||(t[a]=e[a]);return t}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}const s={id:"shared",title:"Objetos y colecciones compartidos"},c=void 0,i={unversionedId:"Concepts/shared",id:"version-19/Concepts/shared",title:"Objetos y colecciones compartidos",description:"Los objetos compartidos y las colecciones compartidas son objetos y colecciones espec\xedficas cuyo contenido se comparte entre procesos. A diferencia de las variables interproceso, los objetos compartidos y las colecciones compartidas tienen la ventaja de ser compatibles con los procesos 4D apropiativos: pueden pasarse por referencia como par\xe1metros a comandos como New process o CALL WORKER.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Concepts/shared.md",sourceDirName:"Concepts",slug:"/Concepts/shared",permalink:"/docs/es/19/Concepts/shared",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fshared.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"shared",title:"Objetos y colecciones compartidos"},sidebar:"docs",previous:{title:"Par\xe1metros",permalink:"/docs/es/19/Concepts/parameters"},next:{title:"Clases",permalink:"/docs/es/19/Concepts/classes"}},l={},p=[{value:"Utilizaci\xf3n de objetos o colecciones compartidos",id:"utilizaci\xf3n-de-objetos-o-colecciones-compartidos",level:2},{value:"Modificaci\xf3n",id:"modificaci\xf3n",level:3},{value:"Lectura",id:"lectura",level:3},{value:"Duplication",id:"duplication",level:3},{value:"Storage",id:"storage",level:3},{value:"Use...End use",id:"useend-use",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2}],d={toc:p};function u(e){var{components:o}=e,a=r(e,["components"]);return(0,n.kt)("wrapper",t({},d,a,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Los objetos compartidos")," y ",(0,n.kt)("strong",{parentName:"p"},"las colecciones compartidas")," son ",(0,n.kt)("a",t({parentName:"p"},{href:"/docs/es/19/Concepts/object"}),"objetos")," y ",(0,n.kt)("a",t({parentName:"p"},{href:"/docs/es/19/Concepts/collection"}),"colecciones")," espec\xedficas cuyo contenido se comparte entre procesos. A diferencia de las ",(0,n.kt)("a",t({parentName:"p"},{href:"/docs/es/19/Concepts/variables#interprocess-variables"}),"variables interproceso"),", los objetos compartidos y las colecciones compartidas tienen la ventaja de ser compatibles con los ",(0,n.kt)("strong",{parentName:"p"},"procesos 4D apropiativos"),": pueden pasarse por referencia como par\xe1metros a comandos como ",(0,n.kt)("inlineCode",{parentName:"p"},"New process")," o ",(0,n.kt)("inlineCode",{parentName:"p"},"CALL WORKER"),"."),(0,n.kt)("p",null,"Los objetos compartidos y las colecciones compartidas pueden almacenarse en variables de tipo est\xe1ndar ",(0,n.kt)("inlineCode",{parentName:"p"},"Object")," y ",(0,n.kt)("inlineCode",{parentName:"p"},"Collection"),", pero deben instanciarse utilizando comandos espec\xedficos:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"para crear un objeto compartido, utilice el comando ",(0,n.kt)("a",t({parentName:"li"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1471.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"New shared object")),","),(0,n.kt)("li",{parentName:"ul"},"para crear una colecci\xf3n compartida, utilice el comando ",(0,n.kt)("a",t({parentName:"li"},{href:"/docs/es/19/API/CollectionClass#new-shared-collection"}),(0,n.kt)("inlineCode",{parentName:"a"},"New shared collection")),".")),(0,n.kt)("admonition",t({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"Los objetos y colecciones compartidos pueden definirse como propiedades de objetos o colecciones est\xe1ndar (no compartidos).")),(0,n.kt)("p",null,"Para modificar un objeto/colecci\xf3n compartido, se debe llamar a la estructura ",(0,n.kt)("strong",{parentName:"p"},"Use...End use"),". La lectura de un valor de objeto/colecci\xf3n compartido no requiere ",(0,n.kt)("strong",{parentName:"p"},"Use...End use"),"."),(0,n.kt)("p",null,"Un cat\xe1logo \xfanico y global devuelto por el comando ",(0,n.kt)("inlineCode",{parentName:"p"},"Storage")," est\xe1 siempre disponible en toda la aplicaci\xf3n y sus componentes, y puede utilizarse para almacenar todos los objetos y colecciones compartidos."),(0,n.kt)("h2",t({},{id:"utilizaci\xf3n-de-objetos-o-colecciones-compartidos"}),"Utilizaci\xf3n de objetos o colecciones compartidos"),(0,n.kt)("p",null,"Una vez instanciado con los comandos ",(0,n.kt)("inlineCode",{parentName:"p"},"Nuevo objeto compartido")," o ",(0,n.kt)("inlineCode",{parentName:"p"},"Nueva colecci\xf3n compartida"),", las propiedades y elementos del objeto compartido/colecci\xf3n pueden ser modificados o le\xeddos desde cualquier proceso de la aplicaci\xf3n, bajo ciertas condiciones."),(0,n.kt)("h3",t({},{id:"modificaci\xf3n"}),"Modificaci\xf3n"),(0,n.kt)("p",null,"Las siguientes modificaciones pueden efectuarse en objetos y colecciones compartidos:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a\xf1adir o eliminar propiedades de los objetos,"),(0,n.kt)("li",{parentName:"ul"},"a\xf1adir o editar valores (siempre que se soporten en objetos compartidos), incluyendo otros objetos compartidos o colecciones (lo que crea un grupo compartido, ver abajo).")),(0,n.kt)("p",null,"Todas las instrucciones de modificaci\xf3n de un objeto compartido o colecci\xf3n deben estar protegidas dentro de un bloque ",(0,n.kt)("a",t({parentName:"p"},{href:"#use-end-use"}),(0,n.kt)("inlineCode",{parentName:"a"},"Use...End use")),", de lo contrario se genera un error."),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),' $s_obj:=New shared object("prop1";"alpha")\n Use($s_obj)\n    $s_obj.prop1:="omega"\n End Use\n')),(0,n.kt)("p",null,"Por comodidad, todas las ",(0,n.kt)("a",t({parentName:"p"},{href:"/docs/es/19/API/CollectionClass"}),"funciones colecci\xf3n")," que modifican el objeto compartido o la colecci\xf3n insertan un bloque interno ",(0,n.kt)("inlineCode",{parentName:"p"},"Use...End use")," para que no tenga que codificarlo usted mismo. Por ejemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'$col:=Nueva colecci\xf3n compartida()\n$col.push("alpha") //.push() desencadena internamente el uso de Use/End, por lo que no es necesario que lo hagan ustedes mismos\n')),(0,n.kt)("p",null,"Si necesita ejecutar varias modificaciones en la misma colecci\xf3n, puede proteger todas las modificaciones con un \xfanico ",(0,n.kt)("inlineCode",{parentName:"p"},"Use...End use")," para que las modificaciones se realicen de forma at\xf3mica."),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),'$col:=Storage.mySharedCollection\nUse($col)\n    $col[0]:="omega" //modificar un elemento requiere realizarse dentro de Use/End use\n    $col.push("alpha") //.push() desencadena internamente Use/End use, pero queremos realizar ambas modificaciones at\xf3micamente\nEnd Use\n')),(0,n.kt)("p",null,"Un objeto/una colecci\xf3n compartido(a) s\xf3lo puede modificarse por un proceso a la vez. Un objeto/una colecci\xf3n compartido(a) s\xf3lo puede modificarse por un proceso a la vez. . Intentar modificar un objeto/colecci\xf3n compartido sin al menos un ",(0,n.kt)("inlineCode",{parentName:"p"},"Use...End use")," genera un error. Cuando un proceso llama a ",(0,n.kt)("inlineCode",{parentName:"p"},"Use...End use")," en un objeto/colecci\xf3n compartido que ya est\xe1 en uso por otro proceso, simplemente se pone en espera hasta que el ",(0,n.kt)("inlineCode",{parentName:"p"},"End use")," lo desbloquee (no se genera ning\xfan error). En consecuencia, las instrucciones dentro de las estructuras ",(0,n.kt)("inlineCode",{parentName:"p"},"Use...End use")," deben ejecutarse r\xe1pidamente y desbloquear los elementos lo antes posible. Por lo tanto, se recomienda enf\xe1ticamente evitar modificar un objeto o colecci\xf3n compartido directamente desde la interfaz, por ejemplo, a trav\xe9s de una caja de di\xe1logo."),(0,n.kt)("p",null,"La asignaci\xf3n de objetos/colecciones compartidos a propiedades o elementos de otros objetos/colecciones compartidos est\xe1 permitida y crea ",(0,n.kt)("strong",{parentName:"p"},"grupos compartidos"),". Un grupo compartido se crea autom\xe1ticamente cuando un objeto/colecci\xf3n compartido se define como valor de propiedad o elemento de otro objeto/colecci\xf3n compartido. Los grupos compartidos permiten anidar objetos y colecciones compartidos, pero imponen reglas adicionales:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Al llamar a ",(0,n.kt)("inlineCode",{parentName:"li"},"Use")," en un objeto/colecci\xf3n compartido que pertenece a un grupo se bloquean las propiedades/elementos de todos los objetos/colecciones del grupo y se incrementa su conteo de bloqueo. La llamada a ",(0,n.kt)("inlineCode",{parentName:"li"},"End use")," disminuye el contador de bloqueo del grupo y cuando el contador est\xe1 a 0, todos los objetos/colecciones compartidos vinculados se desbloquean."),(0,n.kt)("li",{parentName:"ul"},"Un objeto/colecci\xf3n compartido s\xf3lo puede pertenecer a un grupo compartido. Se devuelve un error si se intenta asignar un objeto/colecci\xf3n compartido ya agrupado a un grupo diferente."),(0,n.kt)("li",{parentName:"ul"},"Los objetos/colecciones compartidos agrupados no se pueden desagrupar. Una vez incluido en un grupo compartido, un objeto/colecci\xf3n compartido queda vinculado permanentemente a ese grupo durante toda la sesi\xf3n. Incluso si todas las referencias de un objeto/colecci\xf3n se eliminan del objeto/colecci\xf3n padre, seguir\xe1n vinculadas.")),(0,n.kt)("p",null,"Consulte el ejemplo 2 para ver una ilustraci\xf3n de las reglas de los grupos compartidos."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Nota:")," Los grupos compartidos se gestionan a trav\xe9s de una propiedad interna llamada ",(0,n.kt)("em",{parentName:"p"},"locking identifier"),". Para obtener informaci\xf3n detallada sobre este valor, consulte la Referencia del Lenguaje 4D."),(0,n.kt)("h3",t({},{id:"lectura"}),"Lectura"),(0,n.kt)("p",null,"Se permite la lectura de propiedades o elementos de un objeto/colecci\xf3n compartida sin tener que llamar a la estructura ",(0,n.kt)("inlineCode",{parentName:"p"},"Use...End use"),", incluso si el objeto/colecci\xf3n compartida est\xe1 en uso por otro proceso."),(0,n.kt)("p",null,"Sin embargo, cuando varios valores son interdependientes y deben ser le\xeddos simult\xe1neamente, es necesario enmarcar el acceso de lectura con una estructura ",(0,n.kt)("inlineCode",{parentName:"p"},"Use...End use")," por coherencia."),(0,n.kt)("h3",t({},{id:"duplication"}),"Duplication"),(0,n.kt)("p",null,"Llamar a ",(0,n.kt)("inlineCode",{parentName:"p"},"OB Copy")," con un objeto compartido (o con un objeto cuyas propiedades son objetos compartidos) es posible, pero en este caso se devuelve un objeto est\xe1ndar (no compartido)."),(0,n.kt)("h3",t({},{id:"storage"}),"Storage"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Storage")," es un objeto compartido \xfanico, disponible autom\xe1ticamente en cada aplicaci\xf3n y m\xe1quina. Este objeto compartido es devuelto por el comando ",(0,n.kt)("a",t({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1525.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"Storage")),". Puede utilizar este objeto para hacer referencia a todos los objetos/colecciones compartidos definidos durante la sesi\xf3n que desee que est\xe9n disponibles desde cualquier proceso preventivo o est\xe1ndar."),(0,n.kt)("p",null,"Tenga en cuenta que, a diferencia de los objetos compartidos est\xe1ndar, el objeto ",(0,n.kt)("inlineCode",{parentName:"p"},"Storage")," no crea un grupo compartido cuando se a\xf1aden objetos/colecciones compartidos como sus propiedades. Esta excepci\xf3n permite utilizar el objeto ",(0,n.kt)("strong",{parentName:"p"},"Storage")," sin bloquear todos los objetos o colecciones compartidos conectados."),(0,n.kt)("p",null,"Para m\xe1s informaci\xf3n, consulte la descripci\xf3n del comando ",(0,n.kt)("inlineCode",{parentName:"p"},"Storage"),"."),(0,n.kt)("h2",t({},{id:"useend-use"}),"Use...End use"),(0,n.kt)("p",null,"La sintaxis de la estructura ",(0,n.kt)("inlineCode",{parentName:"p"},"Use...End use")," es:"),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"})," Use(Shared_object_or_Shared_collection)\n    instrucci\xf3n(es)\n End use\n")),(0,n.kt)("p",null,"La estructura ",(0,n.kt)("inlineCode",{parentName:"p"},"Use...End use")," define una secuencia de instrucciones que ejecutar\xe1n tareas sobre el par\xe1metro ",(0,n.kt)("em",{parentName:"p"},"Shared_object_or_Shared_collection")," bajo la protecci\xf3n de un sem\xe1foro interno. ",(0,n.kt)("em",{parentName:"p"},"Shared_object_or_Shared_collection")," puede ser cualquier objeto o colecci\xf3n compartido v\xe1lido."),(0,n.kt)("p",null,"Los objetos compartidos y las colecciones compartidas est\xe1n dise\xf1ados para permitir la comunicaci\xf3n entre procesos, en particular, ",(0,n.kt)("strong",{parentName:"p"},"procesos 4D preferentes"),". Se pueden pasar por referencia como par\xe1metros de un proceso a otro. Es obligatorio rodear las modificaciones en los objetos o colecciones compartidas con las palabras clave ",(0,n.kt)("inlineCode",{parentName:"p"},"Use...End use")," para evitar el acceso concurrente entre procesos."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Una vez que se ejecuta con \xe9xito la l\xednea ",(0,n.kt)("strong",{parentName:"li"},"Use"),", todas las propiedades/elementos de ",(0,n.kt)("em",{parentName:"li"},"Shared_object_or_Shared_collection")," se bloquean para el resto de procesos en acceso de escritura hasta que se ejecute la l\xednea ",(0,n.kt)("inlineCode",{parentName:"li"},"End use")," correspondiente."),(0,n.kt)("li",{parentName:"ul"},"La secuencia ",(0,n.kt)("em",{parentName:"li"},"de instrucciones")," puede ejecutar cualquier modificaci\xf3n en las propiedades/elementos de Shared_object_o_Shared_collection sin riesgo de acceso concurrente."),(0,n.kt)("li",{parentName:"ul"},"Si se a\xf1ade otro objeto o colecci\xf3n compartida como propiedad del par\xe1metro ",(0,n.kt)("em",{parentName:"li"},"Shared_object_or_Shared_collection"),", se conectan dentro del mismo grupo compartido."),(0,n.kt)("li",{parentName:"ul"},"Si otro proceso intenta acceder a una de las propiedades ",(0,n.kt)("em",{parentName:"li"},"Objeto_compartido_o_Colecci\xf3n_compartida")," o una propiedad conectad mientras se est\xe1 ejecutando una secuencia ",(0,n.kt)("strong",{parentName:"li"},"Use... End use"),", se pone autom\xe1ticamente en espera y espera hasta que la secuencia actual finalice."),(0,n.kt)("li",{parentName:"ul"},"La l\xednea ",(0,n.kt)("strong",{parentName:"li"},"End use")," desbloquea las propiedades ",(0,n.kt)("em",{parentName:"li"},"Shared_object_or_Shared_collection")," y todos los objetos del mismo grupo."),(0,n.kt)("li",{parentName:"ul"},"En el c\xf3digo 4D se pueden anidar varias estructuras ",(0,n.kt)("strong",{parentName:"li"},"Use...End use"),". Para modificar un objeto/colecci\xf3n compartido, se debe llamar a la estructura ",(0,n.kt)("strong",{parentName:"li"},"Use...End use"),".")),(0,n.kt)("admonition",t({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"Tenga en cuenta que las ",(0,n.kt)("a",t({parentName:"p"},{href:"/docs/es/19/API/CollectionClass"}),"funciones colecci\xf3n")," que modifican colecciones compartidas activan autom\xe1ticamente un ",(0,n.kt)("strong",{parentName:"p"},"Use")," interno para esta colecci\xf3n compartida mientras se ejecuta la funci\xf3n.")),(0,n.kt)("h2",t({},{id:"ejemplo-1"}),"Ejemplo 1"),(0,n.kt)("p",null,"Se desea lanzar varios procesos que realicen una tarea de inventario en diferentes productos y que actualicen el mismo objeto compartido. El proceso principal instancia un objeto compartido vac\xedo y luego, lanza los otros procesos, pasando el objeto compartido y los productos a contar como par\xe1metros:"),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),' ARRAY TEXT($_items;0)\n ... //llenar el array con los elementos a contar\n $nbItems:=Size of array($_items)\n var $inventory : Object\n $inventory:=New shared object\n Use($inventory)\n    $inventory.nbItems:=$nbItems\n End use\n\n  //Crear procesos\n For($i;1;$nbItems)\n    $ps:=New process("HowMany";0;"HowMany_"+$_items{$i};$_items{$i};$inventory)\n  //$inventory object sent by reference\n End for\n')),(0,n.kt)("p",null,'En el m\xe9todo "HowMany", el inventario se realiza y el objeto compartido $inventory se actualiza lo antes posible:'),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"}),"    //HowMany\n #DECLARE ($what : Text ; $inventory : Object)\n\n $count:=CountMethod($what) //m\xe9todo para contar productos\n Use($inventory) //utilizar el objeto compartido\n    $inventory[$what]:=$count  //guardar los resultados de este elemento\n End use\n")),(0,n.kt)("h2",t({},{id:"ejemplo-2"}),"Ejemplo 2"),(0,n.kt)("p",null,"Los siguientes ejemplos ilustran las reglas espec\xedficas para el manejo de los grupos compartidos:"),(0,n.kt)("pre",null,(0,n.kt)("code",t({parentName:"pre"},{className:"language-4d"})," $ob1:=New shared object\n $ob2:=New shared object\n Use($ob1)\n    $ob1.a:=$ob2  //se crea el grupo 1\n End use\n\n $ob3:=New shared object\n $ob4:=New shared object\n Use($ob3)\n    $ob3.a:=$ob4  //se crea el grupo 2\n End use\n\n Use($ob1) //utilizar un objeto del grupo 1\n    $ob1.b:=$ob4  //ERROR\n  //$ob4 ya pertenece a otro grupo\n  //la asignaci\xf3n no est\xe1 permitida\n End use\n\n Use($ob3)\n    $ob3.a:=Null //eliminar cualquier referencia a $ob4 del grupo 2\n End use\n\n Use($ob1) //utilizar un objeto del grupo 1\n    $ob1.b:=$ob4  //ERROR\n  //$ob4 a\xfan pertenece al grupo 2\n  //la asignaci\xf3n no est\xe1 permitida\n End use\n")))}u.isMDXComponent=!0}}]);