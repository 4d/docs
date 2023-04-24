"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58694],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>m});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var r=n.createContext({}),c=function(e){var a=n.useContext(r),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(r.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,k=u["".concat(r,".").concat(m)]||u[m]||p[m]||o;return t?n.createElement(k,s(s({ref:a},d),{},{components:t})):n.createElement(k,s({ref:a},d))}));function m(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=u;var l={};for(var r in a)hasOwnProperty.call(a,r)&&(l[r]=a[r]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},54053:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});t(67294);var n=t(3905);function i(){return i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const s={id:"datastores",title:"Utilizar un almac\xe9n de datos remoto"},l=void 0,r={unversionedId:"ORDA/datastores",id:"version-20/ORDA/datastores",title:"Utilizar un almac\xe9n de datos remoto",description:"Un datastore expuesto en una aplicaci\xf3n 4D se puede acceder simult\xe1neamente a trav\xe9s de diferentes clientes:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/ORDA/remoteDatastores.md",sourceDirName:"ORDA",slug:"/ORDA/datastores",permalink:"/docs/es/ORDA/datastores",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2FremoteDatastores.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"datastores",title:"Utilizar un almac\xe9n de datos remoto"},sidebar:"docs",previous:{title:"Trabajar con los datos",permalink:"/docs/es/ORDA/entities"},next:{title:"Privilegios",permalink:"/docs/es/ORDA/privileges"}},c={},d=[{value:"Apertura de las sesiones",id:"apertura-de-las-sesiones",level:2},{value:"Visualizaci\xf3n de las sesiones",id:"visualizaci\xf3n-de-las-sesiones",level:3},{value:"Bloqueo y transacciones",id:"bloqueo-y-transacciones",level:3},{value:"Cierre de las sesiones",id:"cierre-de-las-sesiones",level:3},{value:"Optimizaci\xf3n cliente/servidor",id:"optimizaci\xf3n-clienteservidor",level:2},{value:"Contexto",id:"contexto",level:3},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Reutilizaci\xf3n de la propiedad context",id:"reutilizaci\xf3n-de-la-propiedad-context",level:4},{value:"List box basado en una selecci\xf3n de entidades",id:"list-box-basado-en-una-selecci\xf3n-de-entidades",level:4},{value:"Preconfiguraci\xf3n de contextos",id:"preconfiguraci\xf3n-de-contextos",level:4},{value:"Cach\xe9 ORDA",id:"cach\xe9-orda",level:3}],p={toc:d};function u(e){var{components:a}=e,s=o(e,["components"]);return(0,n.kt)("wrapper",i({},p,s,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Un ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/es/ORDA/dsmapping#datastore"}),"datastore")," expuesto en una aplicaci\xf3n 4D se puede acceder simult\xe1neamente a trav\xe9s de diferentes clientes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Las aplicaciones 4D remotas que utilizan ORDA para acceder al almac\xe9n de datos principal con el comando ",(0,n.kt)("inlineCode",{parentName:"li"},"ds"),". Tenga en cuenta que la aplicaci\xf3n 4D remota puede seguir accediendo a la base de datos en modo cl\xe1sico. Estos accesos son gestionados por el ",(0,n.kt)("strong",{parentName:"li"},"servidor de aplicaciones"),"."),(0,n.kt)("li",{parentName:"ul"},"Otras aplicaciones 4D (4D remote, 4D Server) abriendo una sesi\xf3n en el datastore remoto a trav\xe9s del comando ",(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/DataStoreClass#open-datastore"}),(0,n.kt)("inlineCode",{parentName:"a"},"Open datastore")),". Estos accesos son gestionados por el ",(0,n.kt)("strong",{parentName:"li"},"servidor HTTP REST"),"."),(0,n.kt)("li",{parentName:"ul"},"Las peticiones ",(0,n.kt)("a",i({parentName:"li"},{href:"https://developer.4d.com/go-mobile/"}),"4D for iOS o 4D for Android")," para actualizar las aplicaciones m\xf3viles. Estos accesos son gestionados por el ",(0,n.kt)("strong",{parentName:"li"},"servidor HTTP"),".")),(0,n.kt)("h2",i({},{id:"apertura-de-las-sesiones"}),"Apertura de las sesiones"),(0,n.kt)("p",null,"Cuando se trabaja con un datastore remoto referenciado a trav\xe9s de llamadas al comando ",(0,n.kt)("inlineCode",{parentName:"p"},"Open datastore"),", la conexi\xf3n entre los procesos que efect\xfaan la petici\xf3n y el datastore remoto se gestiona a trav\xe9s de sesiones."),(0,n.kt)("p",null,"Se crea una sesi\xf3n en el datastore remoto para gestionar la conexi\xf3n. Esta sesi\xf3n se identifica mediante un ID de sesi\xf3n interno que se asocia al ",(0,n.kt)("inlineCode",{parentName:"p"},"localID")," del lado de la aplicaci\xf3n 4D. Esta sesi\xf3n gestiona autom\xe1ticamente el acceso a los datos, a las selecciones de entidades o a las entidades."),(0,n.kt)("p",null,"El ",(0,n.kt)("inlineCode",{parentName:"p"},"localID")," es local a la m\xe1quina que se conecta al datastore remoto, lo que significa:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Si otros procesos de la misma aplicaci\xf3n necesitan acceder al mismo datastore remoto, pueden utilizar el mismo ",(0,n.kt)("inlineCode",{parentName:"li"},"localID")," y, de este modo, compartir la misma sesi\xf3n."),(0,n.kt)("li",{parentName:"ul"},"Si otro proceso de la misma aplicaci\xf3n abre el mismo datastore remoto pero con otro ",(0,n.kt)("inlineCode",{parentName:"li"},"localID"),", crear\xe1 una nueva sesi\xf3n en el datastore remoto."),(0,n.kt)("li",{parentName:"ul"},"Si otra m\xe1quina se conecta al mismo datastore remoto con el mismo ",(0,n.kt)("inlineCode",{parentName:"li"},"localID"),", crear\xe1 otra sesi\xf3n con otra cookie.")),(0,n.kt)("p",null,"Estos principios se ilustran en los gr\xe1ficos siguientes:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(55010).Z,width:"962",height:"719"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Para las sesiones abiertas por peticiones REST, consulte ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/es/REST/authUsers"}),"Usuarios y sesiones"),".")),(0,n.kt)("h3",i({},{id:"visualizaci\xf3n-de-las-sesiones"}),"Visualizaci\xf3n de las sesiones"),(0,n.kt)("p",null,"Los procesos que gestionan las sesiones de acceso al datastore se muestran en la ventana de administraci\xf3n de 4D Server:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'nombre: "REST Handler: \\<process name',">",'"'),(0,n.kt)("li",{parentName:"ul"},"tipo: tipo Worker Server HTTP"),(0,n.kt)("li",{parentName:"ul"},"sesi\xf3n: el nombre de la sesi\xf3n es el nombre de usuario que se pasa al comando ",(0,n.kt)("inlineCode",{parentName:"li"},"Open datastore"),".")),(0,n.kt)("p",null,"En el siguiente ejemplo, se est\xe1n ejecutando dos procesos para la misma sesi\xf3n:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(58741).Z,width:"1402",height:"708"})),(0,n.kt)("h3",i({},{id:"bloqueo-y-transacciones"}),"Bloqueo y transacciones"),(0,n.kt)("p",null,"Las funcionalidades ORDA relacionadas con el bloqueo de entidades y transacciones se gestionan a nivel del proceso en los datastores remotos, igual que en el modo cliente/servidor ORDA:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Si un proceso bloquea una entidad de un datastores remoto, la entidad se bloquea para todos los otros procesos, incluso cuando estos procesos comparten la misma sesi\xf3n (ver ",(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/ORDA/entities#entity-locking"}),"Bloqueo de entidades"),"). Si varias entidades que apuntan a un mismo registro han sido bloqueadas en un proceso, todas deben ser desbloqueadas en el proceso para eliminar el bloqueo. Si se ha puesto un bloqueo en una entidad, el bloqueo se elimina cuando ya no hay ninguna referencia a esta entidad en la memoria."),(0,n.kt)("li",{parentName:"ul"},"Las transacciones pueden iniciarse, validarse o cancelarse por separado en cada almac\xe9n de datos remoto mediante las funciones ",(0,n.kt)("inlineCode",{parentName:"li"},"dataStore.startTransaction()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"dataStore.cancelTransaction()")," y ",(0,n.kt)("inlineCode",{parentName:"li"},"dataStore.validateTransaction()"),". No afectan a otros almacenes de datos."),(0,n.kt)("li",{parentName:"ul"},"Los comandos cl\xe1sicos del lenguaje 4D (",(0,n.kt)("inlineCode",{parentName:"li"},"START TRANSACTION"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"VALIDATE TRANSACTION"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"CANCEL TRANSACTION"),") s\xf3lo se aplican al datastore principal (devuelto por ",(0,n.kt)("inlineCode",{parentName:"li"},"ds"),"). Si una entidad de un datastore remoto es retenida por una transacci\xf3n en un proceso, los otros procesos no pueden actualizarla, incluso si estos procesos comparten la misma sesi\xf3n."),(0,n.kt)("li",{parentName:"ul"},"Los bloqueos en las entidades son eliminados y las transacciones son anuladas:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"cuando el proceso es eliminado."),(0,n.kt)("li",{parentName:"ul"},"cuando la sesi\xf3n se cierra en el servidor"),(0,n.kt)("li",{parentName:"ul"},"cuando la sesi\xf3n es terminada desde la ventana de administraci\xf3n del servidor.")))),(0,n.kt)("h3",i({},{id:"cierre-de-las-sesiones"}),"Cierre de las sesiones"),(0,n.kt)("p",null,"4D cierra autom\xe1ticamente una sesi\xf3n cuando no hay actividad durante el tiempo de espera. El tiempo de espera por defecto es de 60 mn, pero este valor puede modificarse utilizando el par\xe1metro ",(0,n.kt)("em",{parentName:"p"},"connectionInfo")," del comando ",(0,n.kt)("inlineCode",{parentName:"p"},"Open datastore"),"."),(0,n.kt)("p",null,"Si se env\xeda una solicitud al almac\xe9n de datos remoto despu\xe9s de haber cerrado la sesi\xf3n, \xe9sta se vuelve a crear autom\xe1ticamente si es posible (licencia disponible, servidor no detenido...). Sin embargo, hay que tener en cuenta que se pierde el contexto de la sesi\xf3n en cuanto a bloqueos y transacciones (ver arriba)."),(0,n.kt)("h2",i({},{id:"optimizaci\xf3n-clienteservidor"}),"Optimizaci\xf3n cliente/servidor"),(0,n.kt)("p",null,"4D optimiza las peticiones ORDA que utilizan entity selections o cargan entidades en configuraciones cliente/servidor (datastore accesible remotamente a trav\xe9s de ",(0,n.kt)("inlineCode",{parentName:"p"},"ds")," o de ",(0,n.kt)("inlineCode",{parentName:"p"},"Open datastore"),"). Estas optimizaciones aceleran la ejecuci\xf3n de su aplicaci\xf3n 4D reduciendo dr\xe1sticamente el volumen de informaci\xf3n transmitida por la red. Incluyen:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"el ",(0,n.kt)("strong",{parentName:"li"},"contexto de optimizaci\xf3n")),(0,n.kt)("li",{parentName:"ul"},"la ",(0,n.kt)("strong",{parentName:"li"},"cach\xe9 ORDA"))),(0,n.kt)("h3",i({},{id:"contexto"}),"Contexto"),(0,n.kt)("p",null,"El contexto de optimizaci\xf3n se basa en las siguientes implementaciones:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Cuando un cliente solicita una selecci\xf3n de entidades al servidor, 4D "aprende" autom\xe1ticamente qu\xe9 atributos de la selecci\xf3n de entidades se utilizan realmente del lado del cliente durante la ejecuci\xf3n del c\xf3digo, y genera un "contexto de optimizaci\xf3n" correspondiente. Este contexto se adjunta a la selecci\xf3n de la entidad y almacena los atributos utilizados. Se actualizar\xe1 din\xe1micamente si se utilizan posteriormente otros atributos. Los siguientes m\xe9todos y funciones activan la fase de aprendizaje:'),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/EntitySelectionClass#create-entity-selection"}),(0,n.kt)("inlineCode",{parentName:"a"},"Create entity selection"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/DataClassClass#fromcollection"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.fromCollection()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/DataClassClass#all"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.all()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/DataClassClass#get"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.get()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/DataClassClass#query"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.query()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/EntitySelectionClass#query"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.query()"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Las solicitudes posteriores enviadas al servidor sobre la misma selecci\xf3n de entidades reutilizan autom\xe1ticamente el contexto de optimizaci\xf3n y s\xf3lo obtienen del servidor los atributos necesarios, lo que acelera el procesamiento. Por ejemplo, en un ",(0,n.kt)("a",i({parentName:"p"},{href:"#entity-selection-based-list-box"}),"list box de tipo entity selection"),", la fase de aprendizaje tiene lugar durante la visualizaci\xf3n de la primera l\xednea. la visualizaci\xf3n de las siguientes l\xedneas est\xe1 optimizada. Las siguientes funciones asocian autom\xe1ticamente el contexto de optimizaci\xf3n de la entity selection de origen a la entity selection devuelta:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/EntitySelectionClass#and"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.and()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/EntitySelectionClass#minus"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.minus()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/EntitySelectionClass#or"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.or()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/EntitySelectionClass#orderBy"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.orderBy()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/EntitySelectionClass#slice"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.slice()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/EntitySelectionClass#drop"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.drop()"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Un contexto de optimizaci\xf3n existente puede pasarse como propiedad a otra selecci\xf3n de entidad de la misma dataclass, evitando as\xed la fase de aprendizaje y acelerando la aplicaci\xf3n (ver ",(0,n.kt)("a",i({parentName:"p"},{href:"#reusing-the-context-property"}),"Uso de la propiedad context")," abajo).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Puede crear contextos de optimizaci\xf3n manualmente utilizando la funci\xf3n ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/es/API/DataStoreClass#setremotecontextinfo"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataStore.setRemoteContextInfo()"))," (ver ",(0,n.kt)("a",i({parentName:"p"},{href:"#preconfiguring-contexts"}),"Preconfiguraci\xf3n de contextos"),")."))),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(36747).Z,width:"3439",height:"2018"})),(0,n.kt)("h4",i({},{id:"ejemplo"}),"Ejemplo"),(0,n.kt)("p",null,"Dado el siguiente c\xf3digo:"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-4d"}),' $sel:=$ds.Employee.query("firstname = ab@")\n For each($e;$sel)\n    $s:=$e.firstname+" "+$e.lastname+" works for "+$e.employer.name // $e.employer refiere a la tabla Company\n End for each\n')),(0,n.kt)("p",null,"Gracias a la optimizaci\xf3n, esta petici\xf3n s\xf3lo obtendr\xe1 los datos de los atributos utilizados (firstname, lastname, employer, employer.name) en ",(0,n.kt)("em",{parentName:"p"},"$sel")," a partir de la segunda iteraci\xf3n del bucle."),(0,n.kt)("h4",i({},{id:"reutilizaci\xf3n-de-la-propiedad-context"}),"Reutilizaci\xf3n de la propiedad context"),(0,n.kt)("p",null,"Puede aumentar los beneficios de la optimizaci\xf3n utilizando la propiedad ",(0,n.kt)("strong",{parentName:"p"},"context"),'. Esta propiedad hace referencia a un contexto de optimizaci\xf3n "aprendido" para una selecci\xf3n de entidades. Se puede pasar como par\xe1metro a las funciones ORDA que devuelven nuevas selecciones de entidades, de forma que las selecciones de entidades soliciten directamente al servidor los atributos utilizados y sin pasar por la fase de aprendizaje.'),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Tambi\xe9n puede crear contextos utilizando la funci\xf3n ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/es/API/DataStoreClass#setremotecontextinfo"}),(0,n.kt)("inlineCode",{parentName:"a"},".setRemoteContextInfo()")),".")),(0,n.kt)("p",null,"All ORDA functions that handle entity selections support the ",(0,n.kt)("strong",{parentName:"p"},"context")," property (for example ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/es/API/DataClassClass#query"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.query()"))," or ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/es/API/DataClassClass#all"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.all()")),"). The same optimization context property can be passed to unlimited number of entity selections on the same dataclass. Tenga en cuenta, sin embargo, que un contexto se actualiza autom\xe1ticamente cuando se utilizan nuevos atributos en otras partes del c\xf3digo. Reutilizar el mismo contexto en diferentes c\xf3digos podr\xeda sobrecargar el contexto y, por tanto, reducir su eficacia."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Se implementa un mecanismo similar para las entidades que se cargan, de modo que s\xf3lo se solicitan los atributos utilizados (ver la funci\xf3n ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/es/API/DataClassClass#get"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.get()")),").")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Ejemplo con ",(0,n.kt)("inlineCode",{parentName:"strong"},"dataClass.query()"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-4d"}),' var $sel1; $sel2; $sel3; $sel4; $querysettings; $querysettings2 : Object\n var $data : Collection\n $querysettings:=New object("context";"shortList")\n $querysettings2:=New object("context";"longList")\n\n $sel1:=ds.Employee.query("lastname = S@";$querysettings)\n $data:=extractData($sel1) // En el m\xe9todo extractData la optimizaci\xf3n asociada\n // al contexto "shortList" se aplica\n\n $sel2:=ds.Employee.query("lastname = Sm@";$querysettings)\n $data:=extractData($sel2) // En el m\xe9todo extractData una optimizaci\xf3n\n // se activa y asocia al contexto "shortList"\n\n $sel3:=ds.Employee.query("lastname = Smith";$querysettings2)\n $data:=extractDetailedData($sel3) // En el m\xe9todo extractDetailedData una optimizaci\xf3n\n // se activa y asocia al contexto "longList"\n\n $sel4:=ds.Employee.query("lastname = Brown";$querysettings2)\n $data:=extractDetailedData($sel4) // En el m\xe9todo extractDetailedData la optimizaci\xf3n\n // asociada al contexto "longList" se aplica\n')),(0,n.kt)("h4",i({},{id:"list-box-basado-en-una-selecci\xf3n-de-entidades"}),"List box basado en una selecci\xf3n de entidades"),(0,n.kt)("p",null,"La optimizaci\xf3n de la selecci\xf3n de entidades se aplica autom\xe1ticamente a los list boxes basados en la selecci\xf3n de entidades en configuraciones cliente/servidor, al mostrar y desplazar el contenido de un list box: s\xf3lo se solicitan al servidor los atributos mostrados en el list box."),(0,n.kt)("p",null,'Tambi\xe9n se ofrece un contexto espec\xedfico "modo p\xe1gina" cuando se carga la entidad actual a trav\xe9s de la expresi\xf3n propiedad ',(0,n.kt)("strong",{parentName:"p"},"Elemento actual")," del list box (ver ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/es/FormObjects/listboxOverview#list-box-types"}),"List box de tipo colecci\xf3n o entity selection"),'). Esta funcionalidad le permite no sobrecargar el contexto inicial del list box en este caso, especialmente si la "p\xe1gina" solicita atributos adicionales. Tenga en cuenta que s\xf3lo el uso de la expresi\xf3n ',(0,n.kt)("strong",{parentName:"p"},"Elemento actual")," permitir\xe1 crear/utilizar el contexto de la p\xe1gina (el acceso a trav\xe9s de ",(0,n.kt)("inlineCode",{parentName:"p"},"entitySelection[index]")," alterar\xe1 el contexto de la selecci\xf3n de entidad)."),(0,n.kt)("p",null,"Las solicitudes posteriores al servidor enviadas por las funciones de navegaci\xf3n de la entidad tambi\xe9n admitir\xe1n esta optimizaci\xf3n. Las siguientes funciones asocian autom\xe1ticamente el contexto de optimizaci\xf3n de la entidad fuente a la entidad devuelta:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/EntityClass#next"}),(0,n.kt)("inlineCode",{parentName:"a"},"entity.next()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/EntityClass#first"}),(0,n.kt)("inlineCode",{parentName:"a"},"entity.first()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/EntityClass#last"}),(0,n.kt)("inlineCode",{parentName:"a"},"entity.last()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/EntityClass#previous"}),(0,n.kt)("inlineCode",{parentName:"a"},"entity.previous()")))),(0,n.kt)("p",null,"Por ejemplo, el siguiente c\xf3digo carga la entidad seleccionada y permite navegar en la selecci\xf3n de entidades. Las entidades se cargan en un contexto separado y el contexto inicial del list box se deja intacto:"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-4d"})," $myEntity:=Form.currentElement //expresi\xf3n del elemento actual\n  //... hacer algo\n $myEntity:=$myEntity.next() //carga la siguiente entidad utilizando el mismo contexto\n")),(0,n.kt)("h4",i({},{id:"preconfiguraci\xf3n-de-contextos"}),"Preconfiguraci\xf3n de contextos"),(0,n.kt)("p",null,"Debe definirse un contexto de optimizaci\xf3n para cada funcionalidad o algoritmo de su aplicaci\xf3n, con el fin de obtener el mejor rendimiento. Por ejemplo, un contexto puede utilizarse para consultas sobre clientes, otro para consultas sobre productos, etc."),(0,n.kt)("p",null,"Si desea entregar aplicaciones finales con el m\xe1ximo nivel de optimizaci\xf3n, puede preconfigurar sus contextos y ahorrarse as\xed fases de aprendizaje siguiendo estos pasos:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Dise\xf1e sus algoritmos."),(0,n.kt)("li",{parentName:"ol"},"Ejecute su aplicaci\xf3n y deje que el mecanismo de aprendizaje autom\xe1tico complete los contextos de optimizaci\xf3n."),(0,n.kt)("li",{parentName:"ol"},"Llame la funci\xf3n ",(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/DataStoreClass#getremotecontextinfo"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataStore.getRemoteContextInfo()"))," o ",(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/DataStoreClass#getallremotecontexts"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataStore.getAllRemoteContexts()"))," para recoger contextos. Puede utilizar las funciones ",(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/EntitySelectionClass#getremotecontextattributes"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.getRemoteContextAttributes()"))," y ",(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/EntityClass#getremotecontextattributes"}),(0,n.kt)("inlineCode",{parentName:"a"},"entity.getRemoteContextAttributes()"))," para analizar c\xf3mo utilizan los atributos sus algoritmos."),(0,n.kt)("li",{parentName:"ol"},"En el paso final, llame a la funci\xf3n ",(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/DataStoreClass#setremotecontextinfo"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataStore.setRemoteContextInfo()"))," para crear contextos al inicio de la aplicaci\xf3n y ",(0,n.kt)("a",i({parentName:"li"},{href:"#reusing-the-context-property"}),"utilizarlos")," en sus algoritmos.")),(0,n.kt)("h3",i({},{id:"cach\xe9-orda"}),"Cach\xe9 ORDA"),(0,n.kt)("p",null,"Por razones de optimizaci\xf3n, los datos solicitados al servidor a trav\xe9s de ORDA se cargan en la cach\xe9 remota de ORDA (que es diferente de la cach\xe9 4D). La cach\xe9 ORDA est\xe1 organizada por dataclass y vence despu\xe9s de 30 segundos."),(0,n.kt)("p",null,"Los datos contenidos en la cach\xe9 se consideran caducados cuando se alcanza el tiempo de espera. Todo acceso a los datos caducados enviar\xe1 una petici\xf3n al servidor. Los datos caducados permanecen en la cach\xe9 hasta que se necesite el espacio."),(0,n.kt)("p",null,"Por defecto, la cach\xe9 ORDA es manejada de forma transparente por 4D. Sin embargo, puede controlar su contenido utilizando las siguientes funciones de la clase ORDA:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/DataClassClass#setremotecachesettings"}),"dataClass.setRemoteCacheSettings()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/DataClassClass#getremotecache"}),"dataClass.getRemoteCache()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/DataClassClass#clearremotecache"}),"dataClass.clearRemoteCache()"))))}u.isMDXComponent=!0},36747:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/cs-optimization-process-0810df7e186eabd072bc04a037744fb1.png"},58741:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/sessionAdmin-fb7129cb6aaab939e9e8b20cb43bce8f.png"},55010:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/sessions-69775ca2d11bfdbc289284efe41c0b59.png"}}]);