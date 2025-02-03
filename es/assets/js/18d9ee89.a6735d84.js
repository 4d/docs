"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9722"],{273782:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>d,assets:()=>i,toc:()=>c,contentTitle:()=>o});var d=JSON.parse('{"id":"commands/open-datastore","title":"Open datastore","description":"Historia","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands/open-datastore.md","sourceDirName":"commands","slug":"/commands/open-datastore","permalink":"/docs/es/commands/open-datastore","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fopen-datastore.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"open-datastore","title":"Open datastore","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OPEN DATABASE","permalink":"/docs/es/commands/open-database"},"next":{"title":"OPEN RUNTIME EXPLORER","permalink":"/docs/es/commands/open-runtime-explorer"}}'),r=s("785893"),a=s("250065");let t={id:"open-datastore",title:"Open datastore",displayed_sidebar:"docs"},o=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Gesti\xf3n de errores",id:"gesti\xf3n-de-errores",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",admonition:"admonition",code:"code",details:"details",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20 R6"}),(0,r.jsx)(n.td,{children:"Soporte para acceder a las instancias de Qodly"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20 R4"}),(0,r.jsxs)(n.td,{children:["Nueva propiedad ",(0,r.jsx)(n.em,{children:"passwordAlgorithm"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Open datastore"}),"( ",(0,r.jsx)(n.em,{children:"connectionInfo"})," : Object ; ",(0,r.jsx)(n.em,{children:"localID"})," : Text ) : cs.DataStore"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"connectionInfo"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Propiedades de conexi\xf3n utilizadas para alcanzar el almac\xe9n de datos remoto"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"localID"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Id para asignar al almac\xe9n de datos abierto en la aplicaci\xf3n local (obligatorio)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"cs.DataStore"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Objeto del almac\xe9n de datos"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.code,{children:"Open datastore"})," conecta la aplicaci\xf3n a la base de datos remota identificada por el par\xe1metro ",(0,r.jsx)(n.em,{children:"connectionInfo"})," y devuelve un objeto ",(0,r.jsx)(n.code,{children:"cs.DataStore"})," asociado al alias local ",(0,r.jsx)(n.em,{children:"localID"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"El comando admite los siguientes almacenes de datos remotos:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Tipo de almac\xe9n de datos"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Aplicaci\xf3n 4D remota"}),(0,r.jsxs)(n.td,{children:["Una aplicaci\xf3n 4D disponible como datastore remoto, es decir:",(0,r.jsx)(n.li,{children:" su servidor web se ejecuta con http y/o https activados,"}),(0,r.jsxs)(n.li,{children:["su datastore est\xe1 expuesto a REST (opci\xf3n ",(0,r.jsx)(n.a,{href:"/docs/es/REST/configuration#starting-the-rest-server",children:(0,r.jsx)(n.strong,{children:"Exponer como servidor REST"})})," activada)."]}),"Puede exigirse una licencia (ver nota)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://developer.qodly.com/docs/cloud/getStarted",children:"Aplicaci\xf3n Qodly"})}),(0,r.jsxs)(n.td,{children:["Una aplicaci\xf3n Qodly Server que le proporcion\xf3 un ",(0,r.jsx)(n.strong,{children:"api endpoint"})," y una ",(0,r.jsx)(n.strong,{children:"api key"})," v\xe1lida asociada a un rol definido. Debe pasar la llave api en la propiedad ",(0,r.jsx)(n.code,{children:"api-key"})," del objeto ",(0,r.jsx)(n.em,{children:"connectionInfo"}),". A continuaci\xf3n, podr\xe1 trabajar con el objeto datastore devuelto, con todos los privilegios concedidos al rol asociado."]})]})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Las peticiones ",(0,r.jsx)(n.code,{children:"Open datastore"})," dependen de la API REST 4D y pueden requerir una licencia 4D Client para abrir la conexi\xf3n en un 4D Server remoto. Consulte la secci\xf3n ",(0,r.jsx)(n.a,{href:"/docs/es/REST/authUsers#user-login-modes",children:"User login mode"})," para saber c\xf3mo configurar la autenticaci\xf3n dependiendo del modo de inicio de sesi\xf3n actual seleccionado."]})}),"\n",(0,r.jsxs)(n.p,{children:["Pase en ",(0,r.jsx)(n.em,{children:"connectionInfo"})," un objeto que describa el almac\xe9n de datos remoto al que desea conectarse. Puede contener las siguientes propiedades (todas las propiedades son opcionales excepto ",(0,r.jsx)(n.em,{children:"hostname"}),"):"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propiedad"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Aplicaci\xf3n 4D remota"}),(0,r.jsx)(n.th,{children:"Aplicaci\xf3n Qodly"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hostname"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:'Nombre o direcci\xf3n IP de la base de datos remota + ":" + n\xfamero de puerto (el n\xfamero de puerto es obligatorio)'}),(0,r.jsx)(n.td,{children:"API Endpoint de la instancia Qodly cloud"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"user"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Nombre de usuario"}),(0,r.jsx)(n.td,{children:"- (ignorado)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"contrase\xf1a"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Contrase\xf1a del usuario"}),(0,r.jsx)(n.td,{children:"- (ignorado)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"idleTimeout"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsxs)(n.td,{children:["Tiempo de espera de la sesi\xf3n de inactividad (en minutos), despu\xe9s del cual la sesi\xf3n es cerrada autom\xe1ticamente por 4D. Si se omite, el valor por defecto es 60 (1h). El valor no puede ser < 60 (si se pasa un valor inferior, el tiempo de espera se establece en 60). Para m\xe1s informaci\xf3n, consulte ",(0,r.jsx)(n.strong,{children:"Cierre de sesiones"}),"."]}),(0,r.jsx)(n.td,{children:"- (ignorado)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tls"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"True para utilizar una conexi\xf3n segura(1). Si se omite, es false por defecto. Se recomienda utilizar una conexi\xf3n segura siempre que sea posible."}),(0,r.jsx)(n.td,{children:"True para usar conexi\xf3n segura. Si se omite, es false por defecto"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"type"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:'debe ser "4D Server"'}),(0,r.jsx)(n.td,{children:"- (ignorado)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"api-key"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"- (ignorado)"}),(0,r.jsx)(n.td,{children:"API key de la instancia Qodly cloud"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["(1) Si ",(0,r.jsx)(n.code,{children:"tls"})," es true, se utiliza el protocolo HTTPS si:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"HTTPS est\xe1 activado en el almac\xe9n de datos remoto"}),"\n",(0,r.jsx)(n.li,{children:"el n\xfamero de puerto especificado coincide con el puerto HTTPS configurado en los ajustes de la base de datos"}),"\n",(0,r.jsx)(n.li,{children:'un certificado v\xe1lido y una llave privada de encriptaci\xf3n est\xe1n instalados en la aplicaci\xf3n 4D. En caso contrario, se produce el error "1610 - Una solicitud remota al host xxx ha fallado"'}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"localID"})," es un alias local para la sesi\xf3n abierta en el almac\xe9n de datos remoto. Si ",(0,r.jsx)(n.em,{children:"localID"})," ya existe en la aplicaci\xf3n, se utiliza. En caso contrario, se crea una nueva sesi\xf3n ",(0,r.jsx)(n.em,{children:"localID"})," cuando se utiliza el objeto datastore."]}),"\n",(0,r.jsx)(n.p,{children:"Una vez abierta la sesi\xf3n, las siguientes sentencias son equivalentes y devuelven una referencia sobre el mismo objeto datastore:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' $myds:=Open datastore(connectionInfo;"myLocalId")\n $myds2:=ds("myLocalId")\n  //$myds y $myds2 son equivalentes\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Los objetos disponibles en el ",(0,r.jsx)(n.code,{children:"cs.Datastore"})," son mapeados en funci\xf3n de las ",(0,r.jsx)(n.a,{href:"/docs/es/ORDA/dsmapping#reglas-generales",children:"reglas generales ORDA"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si no se encuentra ning\xfan datastore coincidente, ",(0,r.jsx)(n.code,{children:"Open datastore"})," devuelve ",(0,r.jsx)(n.strong,{children:"Null"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsx)(n.p,{children:"Conexi\xf3n a un almac\xe9n de datos remoto sin usuario/contrase\xf1a:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' var $connectTo : Object\n var $remoteDS : cs.DataStore\n $connectTo:=New object("type";"4D Server";"hostname";"192.168.18.11:8044")\n $remoteDS:=Open datastore($connectTo;"students")\n ALERT("This remote datastore contains "+String($remoteDS.Students.all().length)+" students")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"Conexi\xf3n a un almac\xe9n de datos remoto con usuario/contrase\xf1a/ timeout / tls:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' var $connectTo : Object\n var $remoteDS : cs.DataStore\n $connectTo:=New object("type";"4D Server";"hostname";\\"192.168.18.11:4443";\\  \n  "user";"marie";"password";$pwd;"idleTimeout";70;"tls";True)\n $remoteDS:=Open datastore($connectTo;"students")\n ALERT("This remote datastore contains "+String($remoteDS.Students.all().length)+" students")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,r.jsx)(n.p,{children:"Trabajar con varios almacenes de datos remotos:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' var $connectTo : Object\n var $frenchStudents; $foreignStudents : cs.DataStore\n $connectTo:=New object("hostname";"192.168.18.11:8044")\n $frenchStudents:=Open datastore($connectTo;"french")\n $connectTo.hostname:="192.168.18.11:8050"\n $foreignStudents:=Open datastore($connectTo;"foreign")\n ALERT("They are "+String($frenchStudents.Students.all().length)+" French students")\n ALERT("They are "+String($foreignStudents.Students.all().length)+" foreign students")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,r.jsx)(n.p,{children:"Conexi\xf3n a una aplicaci\xf3n Qodly:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $connectTo : Object:={hostname: "https://xxx-x54xxx-xx-xxxxx-8xx5-xxxxxx.xx-api.cloud.com"; tls: True}\n\nvar $remoteDS : 4D.DataStoreImplementation\nvar $data : 4D.EntitySelection\n\n$connectTo["api-key"]:="fxxxx-xxxx-4xxx-txxx-xxxxxxxx0" //solo con fines de ejemplo\n  //se recomienda almacenar la clave de API en un lugar seguro (por ejemplo, un archivo)\n  //y cargarla en el c\xf3digo\n\n$remoteDS:=Open datastore($connectTo; "remoteId")\n$data:=$remoteDS.item.all()\n\nALERT(String($data.length)+" items have been read")\n\n'})}),"\n",(0,r.jsx)(n.h4,{id:"gesti\xf3n-de-errores",children:"Gesti\xf3n de errores"}),"\n",(0,r.jsxs)(n.p,{children:["En caso de error, el comando devuelve ",(0,r.jsx)(n.strong,{children:"Null"}),'. Si no se puede acceder al almac\xe9n de datos remoto (direcci\xf3n incorrecta, servidor web no iniciado, http y https no habilitados...), se produce el error 1610 "Ha fallado una petici\xf3n remota al host XXX". Puede interceptar este error con un m\xe9todo instalado por ',(0,r.jsx)(n.code,{children:"ON ERR CALL"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/es/commands/ds",children:"ds"})}),"\n",(0,r.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"1452"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"&amp;amp;amp;amp;amp;amp;amp;amp;amp;check;"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifies variables"}),(0,r.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return t}});var d=s(667294);let r={},a=d.createContext(r);function t(e){let n=d.useContext(a);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),d.createElement(a.Provider,{value:n},e.children)}}}]);