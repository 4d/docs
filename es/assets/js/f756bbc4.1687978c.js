"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["15662"],{990418:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>a,assets:()=>c,toc:()=>r,contentTitle:()=>l});var a=JSON.parse('{"id":"ORDA/client-server-optimization","title":"Optimizaci\xf3n cliente/servidor","description":"4D ofrece optimizaciones para las peticiones ORDA que utilizan selecciones de entidades o cargan entidades en arquitecturas cliente/servidor. Estas optimizaciones aceleran la ejecuci\xf3n de su aplicaci\xf3n 4D reduciendo dr\xe1sticamente el volumen de informaci\xf3n transmitida por la red. Incluyen:","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/ORDA/client-server-optimization.md","sourceDirName":"ORDA","slug":"/ORDA/client-server-optimization","permalink":"/docs/es/ORDA/client-server-optimization","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Fclient-server-optimization.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"client-server-optimization","title":"Optimizaci\xf3n cliente/servidor"},"sidebar":"docs","previous":{"title":"Privilegios","permalink":"/docs/es/ORDA/privileges"},"next":{"title":"Glosario","permalink":"/docs/es/ORDA/glossary"}}'),i=s("785893"),t=s("250065");let o={id:"client-server-optimization",title:"Optimizaci\xf3n cliente/servidor"},l=void 0,c={},r=[{value:"Arquitecturas soportadas",id:"arquitecturas-soportadas",level:2},{value:"Contexto de optimizaci\xf3n",id:"contexto-de-optimizaci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:3},{value:"Reutilizando la propiedad <code>context</code>",id:"reutilizando-la-propiedad-context",level:3},{value:"List box basado en una selecci\xf3n de entidades",id:"list-box-basado-en-una-selecci\xf3n-de-entidades",level:3},{value:"Preconfiguraci\xf3n de contextos",id:"preconfiguraci\xf3n-de-contextos",level:3},{value:"Cach\xe9 ORDA",id:"cach\xe9-orda",level:2}];function d(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"4D ofrece optimizaciones para las peticiones ORDA que utilizan selecciones de entidades o cargan entidades en arquitecturas cliente/servidor. Estas optimizaciones aceleran la ejecuci\xf3n de su aplicaci\xf3n 4D reduciendo dr\xe1sticamente el volumen de informaci\xf3n transmitida por la red. Incluyen:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["el ",(0,i.jsx)(n.strong,{children:"contexto de optimizaci\xf3n"})]}),"\n",(0,i.jsxs)(n.li,{children:["la ",(0,i.jsx)(n.strong,{children:"cach\xe9 ORDA"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"arquitecturas-soportadas",children:"Arquitecturas soportadas"}),"\n",(0,i.jsx)(n.p,{children:"Las arquitecturas de cliente/servidor ORDA que soportan la optimizaci\xf3n son:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Server datastores accessed by 4D remote desktop applications through ",(0,i.jsx)(n.a,{href:"/docs/es/commands/ds",children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"ds"})})}),","]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/es/ORDA/datastores",children:"Remote datastores"}),", accessed via ",(0,i.jsx)(n.a,{href:"/docs/es/commands/open-datastore",children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"Open datastore"})})})," (client REST requests)."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"contexto-de-optimizaci\xf3n",children:"Contexto de optimizaci\xf3n"}),"\n",(0,i.jsx)(n.p,{children:"El contexto de optimizaci\xf3n se basa en las siguientes implementaciones:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Cuando un cliente solicita una selecci\xf3n de entidades al servidor, 4D "aprende" autom\xe1ticamente qu\xe9 atributos de la selecci\xf3n de entidades se utilizan realmente del lado del cliente durante la ejecuci\xf3n del c\xf3digo, y genera un "contexto de optimizaci\xf3n" correspondiente. Este contexto se adjunta a la selecci\xf3n de la entidad y almacena los atributos utilizados. Se actualizar\xe1 din\xe1micamente si se utilizan posteriormente otros atributos. Los siguientes m\xe9todos y funciones activan la fase de aprendizaje:'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/es/commands/create-entity-selection",children:(0,i.jsx)(n.code,{children:"Create entity selection"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/es/API/DataClassClass#fromcollection",children:(0,i.jsx)(n.code,{children:"dataClass.fromCollection()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/es/API/DataClassClass#all",children:(0,i.jsx)(n.code,{children:"dataClass.all()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/es/API/DataClassClass#get",children:(0,i.jsx)(n.code,{children:"dataClass.get()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/es/API/DataClassClass#query",children:(0,i.jsx)(n.code,{children:"dataClass.query()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/es/API/EntitySelectionClass#query",children:(0,i.jsx)(n.code,{children:"entitySelection.query()"})})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Las solicitudes posteriores enviadas al servidor sobre la misma selecci\xf3n de entidades reutilizan autom\xe1ticamente el contexto de optimizaci\xf3n y s\xf3lo obtienen del servidor los atributos necesarios, lo que acelera el procesamiento. Por ejemplo, en un ",(0,i.jsx)(n.a,{href:"#entity-selection-based-list-box",children:"list box de tipo entity selection"}),", la fase de aprendizaje tiene lugar durante la visualizaci\xf3n de la primera l\xednea. la visualizaci\xf3n de las siguientes l\xedneas est\xe1 optimizada. Las siguientes funciones asocian autom\xe1ticamente el contexto de optimizaci\xf3n de la entity selection de origen a la entity selection devuelta:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/es/API/EntitySelectionClass#and",children:(0,i.jsx)(n.code,{children:"entitySelection.and()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/es/API/EntitySelectionClass#minus",children:(0,i.jsx)(n.code,{children:"entitySelection.minus()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/es/API/EntitySelectionClass#or",children:(0,i.jsx)(n.code,{children:"entitySelection.or()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/es/API/EntitySelectionClass#orderBy",children:(0,i.jsx)(n.code,{children:"entitySelection.orderBy()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/es/API/EntitySelectionClass#slice",children:(0,i.jsx)(n.code,{children:"entitySelection.slice()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/es/API/EntitySelectionClass#drop",children:(0,i.jsx)(n.code,{children:"entitySelection.drop()"})})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Un contexto de optimizaci\xf3n existente puede pasarse como propiedad a otra selecci\xf3n de entidad de la misma dataclass, evitando as\xed la fase de aprendizaje y acelerar la aplicaci\xf3n (ver abajo ",(0,i.jsx)(n.a,{href:"#reusing-the-context-property",children:"Reutilizaci\xf3n de la propiedad context"}),")."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Puede crear contextos de optimizaci\xf3n manualmente mediante la funci\xf3n ",(0,i.jsx)(n.a,{href:"/docs/es/API/DataStoreClass#setremotecontextinfo",children:(0,i.jsx)(n.code,{children:"dataStore.setRemoteContextInfo()"})})," (consulte ",(0,i.jsx)(n.a,{href:"#preconfiguring-contexts",children:"Preconfiguraci\xf3n de contextos"}),")."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(612727).Z+"",width:"3439",height:"2018"})}),"\n",(0,i.jsx)(n.admonition,{title:"Nota de compatibilidad",type:"note",children:(0,i.jsxs)(n.p,{children:["Contexts handled in connections established through ",(0,i.jsx)(n.a,{href:"/docs/es/commands/open-datastore",children:(0,i.jsx)(n.code,{children:"Open datastore"})})," can only be used between similar main versions of 4D. Por ejemplo, una aplicaci\xf3n remota 4D 20.x s\xf3lo puede utilizar contextos de un almacen de datos 4D Server 20.x."]})}),"\n",(0,i.jsx)(n.h3,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(n.p,{children:"Dado el siguiente c\xf3digo:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' $sel:=$ds.Employee.query("firstname = ab@")\n For each($e;$sel)\n    $s:=$e.firstname+" "+$e.lastname+" works for "+$e.employer.name // $e.employer refiere a la tabla Company\n End for each\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Gracias a la optimizaci\xf3n, esta petici\xf3n s\xf3lo obtendr\xe1 los datos de los atributos utilizados (firstname, lastname, employer, employer.name) en ",(0,i.jsx)(n.em,{children:"$sel"})," a partir de la segunda iteraci\xf3n del bucle."]}),"\n",(0,i.jsxs)(n.h3,{id:"reutilizando-la-propiedad-context",children:["Reutilizando la propiedad ",(0,i.jsx)(n.code,{children:"context"})]}),"\n",(0,i.jsxs)(n.p,{children:["Puede aumentar los beneficios de la optimizaci\xf3n utilizando la propiedad ",(0,i.jsx)(n.strong,{children:"context"}),'. Esta propiedad hace referencia a un contexto de optimizaci\xf3n "aprendido" para una selecci\xf3n de entidades. Se puede pasar como par\xe1metro a las funciones ORDA que devuelven nuevas selecciones de entidades, de forma que las selecciones de entidades soliciten directamente al servidor los atributos utilizados y sin pasar por la fase de aprendizaje.']}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Tambi\xe9n puede crear contextos utilizando la funci\xf3n ",(0,i.jsx)(n.a,{href:"/docs/es/API/DataStoreClass#setremotecontextinfo",children:(0,i.jsx)(n.code,{children:".setRemoteContextInfo()"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["All ORDA functions that handle entity selections support the ",(0,i.jsx)(n.strong,{"x-id":"1",children:"context"})," property (for example ",(0,i.jsx)(n.a,{href:"../API/DataClassClass.md#query",children:(0,i.jsx)(n.code,{children:"dataClass.query()"})})," or ",(0,i.jsx)(n.a,{href:"../API/DataClassClass.md#all",children:(0,i.jsx)(n.code,{children:"dataClass.all()"})}),"). Todas las funciones ORDA que manejan entity selections soportan la propiedad ",(0,i.jsx)(n.strong,{children:"context"})," (por ejemplo ",(0,i.jsx)(n.a,{href:"/docs/es/API/DataClassClass#query",children:(0,i.jsx)(n.code,{children:"dataClass.query()"})})," o ",(0,i.jsx)(n.a,{href:"/docs/es/API/DataClassClass#all",children:(0,i.jsx)(n.code,{children:"dataClass.all()"})}),"). Tenga en cuenta, sin embargo, que un contexto se actualiza autom\xe1ticamente cuando se utilizan nuevos atributos en otras partes del c\xf3digo. Reutilizar el mismo contexto en diferentes c\xf3digos podr\xeda sobrecargar el contexto y, por tanto, reducir su eficacia."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Se implementa un mecanismo similar para las entidades que se cargan, de modo que s\xf3lo se solicitan los atributos utilizados (ver la funci\xf3n ",(0,i.jsx)(n.a,{href:"/docs/es/API/DataClassClass#get",children:(0,i.jsx)(n.code,{children:"dataClass.get()"})}),")."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["Ejemplo con ",(0,i.jsx)(n.code,{children:"dataClass.query()"}),":"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' var $sel1; $sel2; $sel3; $sel4; $querysettings; $querysettings2 : Object\n var $data : Collection\n $querysettings:=New object("context";"shortList")\n $querysettings2:=New object("context";"longList")\n\n $sel1:=ds.Employee.query("lastname = S@";$querysettings)\n $data:=extractData($sel1) // En el m\xe9todo extractData la optimizaci\xf3n asociada\n // al contexto "shortList" se aplica\n\n $sel2:=ds.Employee.query("lastname = Sm@";$querysettings)\n $data:=extractData($sel2) // En el m\xe9todo extractData una optimizaci\xf3n\n // se activa y asocia al contexto "shortList"\n\n $sel3:=ds.Employee.query("lastname = Smith";$querysettings2)\n $data:=extractDetailedData($sel3) // En el m\xe9todo extractDetailedData una optimizaci\xf3n\n // se activa y asocia al contexto "longList"\n\n $sel4:=ds.Employee.query("lastname = Brown";$querysettings2)\n $data:=extractDetailedData($sel4) // En el m\xe9todo extractDetailedData la optimizaci\xf3n\n // asociada al contexto "longList" se aplica\n'})}),"\n",(0,i.jsx)(n.h3,{id:"list-box-basado-en-una-selecci\xf3n-de-entidades",children:"List box basado en una selecci\xf3n de entidades"}),"\n",(0,i.jsx)(n.p,{children:"La optimizaci\xf3n de entity selection se aplica autom\xe1ticamente a los list boxes basados en una entity selection en las aplicaciones de escritorio cliente/servidor 4D, al mostrar y desplazar el contenido de un list box: s\xf3lo se solicitan al servidor los atributos mostrados en el list box."}),"\n",(0,i.jsxs)(n.p,{children:['Tambi\xe9n se suministra un contexto espec\xedfico denominado "modo p\xe1gina" cuando se carga la entidad actual de la selecci\xf3n mediante la expresi\xf3n de la propiedad ',(0,i.jsx)(n.strong,{children:"elemento actual"})," del list box (ver ",(0,i.jsx)(n.a,{href:"/docs/es/FormObjects/listboxOverview#list-box-types",children:"list box de tipo colecci\xf3n o entity selection"}),'). Esta funcionalidad le permite no sobrecargar el contexto inicial del list box en este caso, especialmente si la "p\xe1gina" solicita atributos adicionales. Tenga en cuenta que s\xf3lo el uso de la expresi\xf3n ',(0,i.jsx)(n.strong,{children:"Elemento actual"})," permitir\xe1 crear/utilizar el contexto de la p\xe1gina (el acceso a trav\xe9s de ",(0,i.jsx)(n.code,{children:"entitySelection\\[index]"})," alterar\xe1 el contexto de la entity selection)."]}),"\n",(0,i.jsx)(n.p,{children:"Las solicitudes posteriores al servidor enviadas por las funciones de navegaci\xf3n de la entidad tambi\xe9n admitir\xe1n esta optimizaci\xf3n. Las siguientes funciones asocian autom\xe1ticamente el contexto de optimizaci\xf3n de la entidad fuente a la entidad devuelta:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/es/API/EntityClass#next",children:(0,i.jsx)(n.code,{children:"entity.next()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/es/API/EntityClass#first",children:(0,i.jsx)(n.code,{children:"entity.first()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/es/API/EntityClass#last",children:(0,i.jsx)(n.code,{children:"entity.last()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/es/API/EntityClass#previous",children:(0,i.jsx)(n.code,{children:"entity.previous()"})})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Por ejemplo, el siguiente c\xf3digo carga la entidad seleccionada y permite navegar en la selecci\xf3n de entidades. Las entidades se cargan en un contexto separado y el contexto inicial del list box se deja intacto:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" $myEntity:=Form.currentElement //expresi\xf3n del elemento actual\n  //... hacer algo\n $myEntity:=$myEntity.next() //carga la siguiente entidad utilizando el mismo contexto\n"})}),"\n",(0,i.jsx)(n.h3,{id:"preconfiguraci\xf3n-de-contextos",children:"Preconfiguraci\xf3n de contextos"}),"\n",(0,i.jsx)(n.p,{children:"Debe definirse un contexto de optimizaci\xf3n para cada funcionalidad o algoritmo de su aplicaci\xf3n, con el fin de obtener el mejor rendimiento. Por ejemplo, un contexto puede utilizarse para consultas sobre clientes, otro para consultas sobre productos, etc."}),"\n",(0,i.jsx)(n.p,{children:"Si desea entregar aplicaciones finales con el m\xe1ximo nivel de optimizaci\xf3n, puede preconfigurar sus contextos y ahorrarse as\xed fases de aprendizaje siguiendo estos pasos:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Dise\xf1e sus algoritmos."}),"\n",(0,i.jsx)(n.li,{children:"Ejecute su aplicaci\xf3n y deje que el mecanismo de aprendizaje autom\xe1tico complete los contextos de optimizaci\xf3n."}),"\n",(0,i.jsxs)(n.li,{children:["Llame la funci\xf3n ",(0,i.jsx)(n.a,{href:"/docs/es/API/DataStoreClass#getremotecontextinfo",children:(0,i.jsx)(n.code,{children:"dataStore.getRemoteContextInfo()"})})," o ",(0,i.jsx)(n.a,{href:"/docs/es/API/DataStoreClass#getallremotecontexts",children:(0,i.jsx)(n.code,{children:"dataStore.getAllRemoteContexts()"})})," para recopilar contextos. Puede utilizar las funciones ",(0,i.jsx)(n.a,{href:"/docs/es/API/EntitySelectionClass#getremotecontextattributes",children:(0,i.jsx)(n.code,{children:"entitySelection.getRemoteContextAttributes()"})})," y ",(0,i.jsx)(n.a,{href:"/docs/es/API/EntityClass#getremotecontextattributes",children:(0,i.jsx)(n.code,{children:"entity.getRemoteContextAttributes()"})})," para analizar c\xf3mo utilizan los atributos sus algoritmos."]}),"\n",(0,i.jsxs)(n.li,{children:["En el \xfaltimo paso, llama a la funci\xf3n ",(0,i.jsx)(n.a,{href:"/docs/es/API/DataStoreClass#setremotecontextinfo",children:(0,i.jsx)(n.code,{children:"dataStore.setRemoteContextInfo()"})})," para construir contextos al inicio de la aplicaci\xf3n y ",(0,i.jsx)(n.a,{href:"#reutilizando-la-propiedad-context",children:"utilizarlos"})," en sus algoritmos."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"cach\xe9-orda",children:"Cach\xe9 ORDA"}),"\n",(0,i.jsx)(n.p,{children:"Por razones de optimizaci\xf3n, los datos solicitados al servidor a trav\xe9s de ORDA se cargan en la cach\xe9 remota de ORDA (que es diferente de la cach\xe9 4D). La cach\xe9 ORDA est\xe1 organizada por dataclass y vence despu\xe9s de 30 segundos."}),"\n",(0,i.jsx)(n.p,{children:"Los datos contenidos en la cach\xe9 se consideran caducados cuando se alcanza el tiempo de espera. Todo acceso a los datos caducados enviar\xe1 una petici\xf3n al servidor. Los datos caducados permanecen en la cach\xe9 hasta que se necesite el espacio."}),"\n",(0,i.jsxs)(n.p,{children:["Puede forzar que los datos de la selecci\xf3n de entidades en la cach\xe9 ORDA expiren en cualquier momento utilizando la funci\xf3n ",(0,i.jsx)(n.a,{href:"/docs/es/API/EntitySelectionClass#refresh",children:(0,i.jsx)(n.code,{children:"refresh()"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Por defecto, la cach\xe9 ORDA es manejada de forma transparente por 4D. Sin embargo, puede controlar su contenido utilizando las siguientes funciones de la clase ORDA:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/es/API/DataClassClass#setremotecachesettings",children:"dataClass.setRemoteCacheSettings()"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/es/API/DataClassClass#getremotecache",children:"dataClass.getRemoteCache()"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/es/API/DataClassClass#clearremotecache",children:"dataClass.clearRemoteCache()"})}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},612727:function(e,n,s){s.d(n,{Z:function(){return a}});let a=s.p+"assets/images/cs-optimization-process-0810df7e186eabd072bc04a037744fb1.png"},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return o}});var a=s(667294);let i={},t=a.createContext(i);function o(e){let n=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);