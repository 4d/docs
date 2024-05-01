"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61805],{603905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(667294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=c(a),m=i,k=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(k,s(s({ref:t},d),{},{components:a})):n.createElement(k,s({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},436962:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});a(667294);var n=a(603905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}const s={id:"client-server-optimization",title:"Client/Server Optimization"},r=void 0,l={unversionedId:"ORDA/client-server-optimization",id:"version-20-R5/ORDA/client-server-optimization",title:"Client/Server Optimization",description:"4D provides optimizations for ORDA requests that use entity selections or load entities in client/server architectures. Estas optimizaciones aceleran la ejecuci\xf3n de su aplicaci\xf3n 4D reduciendo dr\xe1sticamente el volumen de informaci\xf3n transmitida por la red. Incluyen:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/ORDA/client-server-optimization.md",sourceDirName:"ORDA",slug:"/ORDA/client-server-optimization",permalink:"/docs/es/ORDA/client-server-optimization",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Fclient-server-optimization.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"client-server-optimization",title:"Client/Server Optimization"},sidebar:"docs",previous:{title:"Privilegios",permalink:"/docs/es/ORDA/privileges"},next:{title:"Glosario",permalink:"/docs/es/ORDA/glossary"}},c={},d=[{value:"Arquitecturas soportadas",id:"arquitecturas-soportadas",level:2},{value:"Optimization context",id:"optimization-context",level:2},{value:"Ejemplo",id:"ejemplo",level:3},{value:"Reusing the <code>context</code> property",id:"reusing-the-context-property",level:3},{value:"List box basado en una selecci\xf3n de entidades",id:"list-box-basado-en-una-selecci\xf3n-de-entidades",level:3},{value:"Preconfiguraci\xf3n de contextos",id:"preconfiguraci\xf3n-de-contextos",level:3},{value:"Cach\xe9 ORDA",id:"cach\xe9-orda",level:2}],p={toc:d};function u(e){var{components:t}=e,s=o(e,["components"]);return(0,n.kt)("wrapper",i({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"4D provides optimizations for ORDA requests that use entity selections or load entities in client/server architectures. Estas optimizaciones aceleran la ejecuci\xf3n de su aplicaci\xf3n 4D reduciendo dr\xe1sticamente el volumen de informaci\xf3n transmitida por la red. Incluyen:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("strong",{parentName:"li"},"optimization context")),(0,n.kt)("li",{parentName:"ul"},"la ",(0,n.kt)("strong",{parentName:"li"},"cach\xe9 ORDA"))),(0,n.kt)("h2",i({},{id:"arquitecturas-soportadas"}),"Arquitecturas soportadas"),(0,n.kt)("p",null,"Las arquitecturas de cliente/servidor ORDA que soportan la optimizaci\xf3n son:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Server datastores accessed by 4D remote desktop applications through ",(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/DataStoreClass#ds"}),(0,n.kt)("strong",{parentName:"a"},(0,n.kt)("inlineCode",{parentName:"strong"},"ds"))),","),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/ORDA/datastores"}),"Remote datastores"),", accessed via ",(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/DataStoreClass#open-datastore"}),(0,n.kt)("strong",{parentName:"a"},(0,n.kt)("inlineCode",{parentName:"strong"},"Open datastore")))," (client REST requests).")),(0,n.kt)("h2",i({},{id:"optimization-context"}),"Optimization context"),(0,n.kt)("p",null,"El contexto de optimizaci\xf3n se basa en las siguientes implementaciones:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Cuando un cliente solicita una selecci\xf3n de entidades al servidor, 4D "aprende" autom\xe1ticamente qu\xe9 atributos de la selecci\xf3n de entidades se utilizan realmente del lado del cliente durante la ejecuci\xf3n del c\xf3digo, y genera un "contexto de optimizaci\xf3n" correspondiente. Este contexto se adjunta a la selecci\xf3n de la entidad y almacena los atributos utilizados. Se actualizar\xe1 din\xe1micamente si se utilizan posteriormente otros atributos. Los siguientes m\xe9todos y funciones activan la fase de aprendizaje:'),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/EntitySelectionClass#create-entity-selection"}),(0,n.kt)("inlineCode",{parentName:"a"},"Create entity selection"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/DataClassClass#fromcollection"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.fromCollection()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/DataClassClass#all"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.all()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/DataClassClass#get"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.get()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/DataClassClass#query"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.query()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/EntitySelectionClass#query"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.query()"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Las solicitudes posteriores enviadas al servidor sobre la misma selecci\xf3n de entidades reutilizan autom\xe1ticamente el contexto de optimizaci\xf3n y s\xf3lo obtienen del servidor los atributos necesarios, lo que acelera el procesamiento. For example, in an ",(0,n.kt)("a",i({parentName:"p"},{href:"#entity-selection-based-list-box"}),"entity selection-based list box"),", the learning phase takes place during the display of the first row. la visualizaci\xf3n de las siguientes l\xedneas est\xe1 optimizada. Las siguientes funciones asocian autom\xe1ticamente el contexto de optimizaci\xf3n de la entity selection de origen a la entity selection devuelta:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/EntitySelectionClass#and"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.and()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/EntitySelectionClass#minus"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.minus()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/EntitySelectionClass#or"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.or()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/EntitySelectionClass#orderBy"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.orderBy()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/EntitySelectionClass#slice"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.slice()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/EntitySelectionClass#drop"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.drop()"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"An existing optimization context can be passed as a property to another entity selection of the same dataclass, thus bypassing the learning phase and accelerating the application (see ",(0,n.kt)("a",i({parentName:"p"},{href:"#reusing-the-context-property"}),"Using the context property")," below).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can build optimization contexts manually using the ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/es/API/DataStoreClass#setremotecontextinfo"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataStore.setRemoteContextInfo()"))," function (see ",(0,n.kt)("a",i({parentName:"p"},{href:"#preconfiguring-contexts"}),"Preconfiguring contexts"),")."))),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(263332).Z,width:"3439",height:"2018"})),(0,n.kt)("admonition",i({},{title:"Nota de compatibilidad",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"Contexts handled in connections established through ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/es/API/DataStoreClass#open-datastore"}),(0,n.kt)("inlineCode",{parentName:"a"},"Open datastore"))," can only be used between similar main versions of 4D. For example, a 4D 20.x remote application can only use contexts of a 4D Server 20.x datastore.")),(0,n.kt)("h3",i({},{id:"ejemplo"}),"Ejemplo"),(0,n.kt)("p",null,"Dado el siguiente c\xf3digo:"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-4d"}),' $sel:=$ds.Employee.query("firstname = ab@")\n For each($e;$sel)\n    $s:=$e.firstname+" "+$e.lastname+" works for "+$e.employer.name // $e.employer refiere a la tabla Company\n End for each\n')),(0,n.kt)("p",null,"Thanks to the optimization, this request will only get data from used attributes (firstname, lastname, employer, employer.name) in ",(0,n.kt)("em",{parentName:"p"},"$sel")," from the second iteration of the loop."),(0,n.kt)("h3",i({},{id:"reusing-the-context-property"}),"Reusing the ",(0,n.kt)("inlineCode",{parentName:"h3"},"context")," property"),(0,n.kt)("p",null,"Puede aumentar los beneficios de la optimizaci\xf3n utilizando la propiedad ",(0,n.kt)("strong",{parentName:"p"},"context"),'. Esta propiedad hace referencia a un contexto de optimizaci\xf3n "aprendido" para una selecci\xf3n de entidades. Se puede pasar como par\xe1metro a las funciones ORDA que devuelven nuevas selecciones de entidades, de forma que las selecciones de entidades soliciten directamente al servidor los atributos utilizados y sin pasar por la fase de aprendizaje.'),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"You can also create contexts using the ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/es/API/DataStoreClass#setremotecontextinfo"}),(0,n.kt)("inlineCode",{parentName:"a"},".setRemoteContextInfo()"))," function.")),(0,n.kt)("p",null,"All ORDA functions that handle entity selections support the ",(0,n.kt)("strong",{"x-id":"1"},"context")," property (for example ",(0,n.kt)("a",{href:"../API/DataClassClass.md#query"},(0,n.kt)("code",null,"dataClass.query()"))," or ",(0,n.kt)("a",{href:"../API/DataClassClass.md#all"},(0,n.kt)("code",null,"dataClass.all()")),"). All ORDA functions that handle entity selections support the ",(0,n.kt)("strong",{parentName:"p"},"context")," property (for example ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/es/API/DataClassClass#query"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.query()"))," or ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/es/API/DataClassClass#all"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.all()")),"). Tenga en cuenta, sin embargo, que un contexto se actualiza autom\xe1ticamente cuando se utilizan nuevos atributos en otras partes del c\xf3digo. Reutilizar el mismo contexto en diferentes c\xf3digos podr\xeda sobrecargar el contexto y, por tanto, reducir su eficacia."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"A similar mechanism is implemented for entities that are loaded, so that only used attributes are requested (see the ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/es/API/DataClassClass#get"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataClass.get()"))," function).")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example with ",(0,n.kt)("inlineCode",{parentName:"strong"},"dataClass.query()"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-4d"}),' var $sel1; $sel2; $sel3; $sel4; $querysettings; $querysettings2 : Object\n var $data : Collection\n $querysettings:=New object("context";"shortList")\n $querysettings2:=New object("context";"longList")\n \n $sel1:=ds.Employee.query("lastname = S@";$querysettings)\n $data:=extractData($sel1) // In extractData method an optimization is triggered   \n // and associated to context "shortList"\n \n $sel2:=ds.Employee.query("lastname = Sm@";$querysettings)\n $data:=extractData($sel2) // In extractData method the optimization associated   \n // to context "shortList" is applied\n \n $sel3:=ds.Employee.query("lastname = Smith";$querysettings2)\n $data:=extractDetailedData($sel3) // In extractDetailedData method an optimization  \n // is triggered and associated to context "longList"\n \n $sel4:=ds.Employee.query("lastname = Brown";$querysettings2)\n $data:=extractDetailedData($sel4) // In extractDetailedData method the optimization  \n // associated to context "longList" is applied\n')),(0,n.kt)("h3",i({},{id:"list-box-basado-en-una-selecci\xf3n-de-entidades"}),"List box basado en una selecci\xf3n de entidades"),(0,n.kt)("p",null,"Entity selection optimization is automatically applied to entity selection-based list boxes in 4D client/server desktop applications, when displaying and scrolling a list box content: only the attributes displayed in the list box are requested from the server."),(0,n.kt)("p",null,'A specific "page mode" context is also provided when loading the current entity through the ',(0,n.kt)("strong",{parentName:"p"},"Current item")," property expression of the list box (see ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/es/FormObjects/listboxOverview#list-box-types"}),"Collection or entity selection type list boxes"),'). Esta funcionalidad le permite no sobrecargar el contexto inicial del list box en este caso, especialmente si la "p\xe1gina" solicita atributos adicionales. Note that only the use of ',(0,n.kt)("strong",{parentName:"p"},"Current item")," expression will create/use the page context (access through ",(0,n.kt)("inlineCode",{parentName:"p"},"entitySelection\\[index]")," will alter the entity selection context)."),(0,n.kt)("p",null,"Las solicitudes posteriores al servidor enviadas por las funciones de navegaci\xf3n de la entidad tambi\xe9n admitir\xe1n esta optimizaci\xf3n. Las siguientes funciones asocian autom\xe1ticamente el contexto de optimizaci\xf3n de la entidad fuente a la entidad devuelta:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/EntityClass#next"}),(0,n.kt)("inlineCode",{parentName:"a"},"entity.next()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/EntityClass#first"}),(0,n.kt)("inlineCode",{parentName:"a"},"entity.first()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/EntityClass#last"}),(0,n.kt)("inlineCode",{parentName:"a"},"entity.last()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/EntityClass#previous"}),(0,n.kt)("inlineCode",{parentName:"a"},"entity.previous()")))),(0,n.kt)("p",null,"Por ejemplo, el siguiente c\xf3digo carga la entidad seleccionada y permite navegar en la selecci\xf3n de entidades. Las entidades se cargan en un contexto separado y el contexto inicial del list box se deja intacto:"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-4d"})," $myEntity:=Form.currentElement //current item expression\n  //... do something\n $myEntity:=$myEntity.next() //loads the next entity using the same context\n")),(0,n.kt)("h3",i({},{id:"preconfiguraci\xf3n-de-contextos"}),"Preconfiguraci\xf3n de contextos"),(0,n.kt)("p",null,"Debe definirse un contexto de optimizaci\xf3n para cada funcionalidad o algoritmo de su aplicaci\xf3n, con el fin de obtener el mejor rendimiento. Por ejemplo, un contexto puede utilizarse para consultas sobre clientes, otro para consultas sobre productos, etc."),(0,n.kt)("p",null,"Si desea entregar aplicaciones finales con el m\xe1ximo nivel de optimizaci\xf3n, puede preconfigurar sus contextos y ahorrarse as\xed fases de aprendizaje siguiendo estos pasos:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Dise\xf1e sus algoritmos."),(0,n.kt)("li",{parentName:"ol"},"Ejecute su aplicaci\xf3n y deje que el mecanismo de aprendizaje autom\xe1tico complete los contextos de optimizaci\xf3n."),(0,n.kt)("li",{parentName:"ol"},"Call the ",(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/DataStoreClass#getremotecontextinfo"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataStore.getRemoteContextInfo()"))," or ",(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/DataStoreClass#getallremotecontexts"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataStore.getAllRemoteContexts()"))," function to collect  contexts. You can use the ",(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/EntitySelectionClass#getremotecontextattributes"}),(0,n.kt)("inlineCode",{parentName:"a"},"entitySelection.getRemoteContextAttributes()"))," and ",(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/EntityClass#getremotecontextattributes"}),(0,n.kt)("inlineCode",{parentName:"a"},"entity.getRemoteContextAttributes()"))," functions to analyse how your algorithms use attributes."),(0,n.kt)("li",{parentName:"ol"},"In the final step, call the ",(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/DataStoreClass#setremotecontextinfo"}),(0,n.kt)("inlineCode",{parentName:"a"},"dataStore.setRemoteContextInfo()"))," function to build contexts at application startup and ",(0,n.kt)("a",i({parentName:"li"},{href:"#reusing-the-context-property"}),"use them")," in your algorithms.")),(0,n.kt)("h2",i({},{id:"cach\xe9-orda"}),"Cach\xe9 ORDA"),(0,n.kt)("p",null,"Por razones de optimizaci\xf3n, los datos solicitados al servidor a trav\xe9s de ORDA se cargan en la cach\xe9 remota de ORDA (que es diferente de la cach\xe9 4D). La cach\xe9 ORDA est\xe1 organizada por dataclass y vence despu\xe9s de 30 segundos."),(0,n.kt)("p",null,"Los datos contenidos en la cach\xe9 se consideran caducados cuando se alcanza el tiempo de espera. Todo acceso a los datos caducados enviar\xe1 una petici\xf3n al servidor. Los datos caducados permanecen en la cach\xe9 hasta que se necesite el espacio."),(0,n.kt)("p",null,"Por defecto, la cach\xe9 ORDA es manejada de forma transparente por 4D. Sin embargo, puede controlar su contenido utilizando las siguientes funciones de la clase ORDA:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/DataClassClass#setremotecachesettings"}),"dataClass.setRemoteCacheSettings()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/DataClassClass#getremotecache"}),"dataClass.getRemoteCache()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/API/DataClassClass#clearremotecache"}),"dataClass.clearRemoteCache()"))))}u.isMDXComponent=!0},263332:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cs-optimization-process-0810df7e186eabd072bc04a037744fb1.png"}}]);