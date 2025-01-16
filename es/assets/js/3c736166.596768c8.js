"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7800"],{430121:function(e,n,i){i.r(n),i.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>r,assets:()=>c,toc:()=>t,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/web-service-set-option","title":"WEB SERVICE SET OPTION","description":"WEB SERVICE SET OPTION ( opci\xf3n ; valor )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-service-set-option.md","sourceDirName":"commands-legacy","slug":"/commands/web-service-set-option","permalink":"/docs/es/20-R7/commands/web-service-set-option","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-service-set-option.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-service-set-option","title":"WEB SERVICE SET OPTION","slug":"/commands/web-service-set-option","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SERVICE GET RESULT","permalink":"/docs/es/20-R7/commands/web-service-get-result"},"next":{"title":"WEB SERVICE SET PARAMETER","permalink":"/docs/es/20-R7/commands/web-service-set-parameter"}}'),a=i("785893"),s=i("250065");let o={id:"web-service-set-option",title:"WEB SERVICE SET OPTION",slug:"/commands/web-service-set-option",displayed_sidebar:"docs"},d=void 0,c={},t=[{value:"Nota preliminar",id:"nota-preliminar",level:4},{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"WEB SERVICE SET OPTION"})," ( ",(0,a.jsx)(n.em,{children:"opci\xf3n"})," ; ",(0,a.jsx)(n.em,{children:"valor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"opci\xf3n"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"C\xf3digo de la opci\xf3n a definir"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"valor"}),(0,a.jsx)(n.td,{children:"Integer, Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Valor de la opci\xf3n"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"nota-preliminar",children:"Nota preliminar"}),"\n",(0,a.jsx)(n.p,{children:"Este comando est\xe1 dise\xf1ado para los usuarios de servicios web. Su uso es opcional."}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando ",(0,a.jsx)(n.strong,{children:"WEB SERVICE SET OPTION"})," permite definir diferentes opciones que se utilizar\xe1n durante la pr\xf3xima petici\xf3n SOAP provocada por el comando ",(0,a.jsx)(n.a,{href:"/docs/es/20-R7/commands/web-service-call",children:"WEB SERVICE CALL"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Puede llamar este comando tantas veces como opciones a definir."}),"\n",(0,a.jsxs)(n.p,{children:["En el par\xe1metro ",(0,a.jsx)(n.em,{children:"opcion"}),", pase el n\xfamero de la opci\xf3n a definir y en el par\xe1metro ",(0,a.jsx)(n.em,{children:"valor"}),", pase el nuevo valor de la opci\xf3n. Para estos par\xe1metros, puede utilizar una de las siguientes constantes predefinidas del tema ",(0,a.jsx)(n.em,{children:"Servicios Web (Cliente)"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Constante"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{children:"Valor"}),(0,a.jsx)(n.th,{children:"Comentario"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Web Service display auth dialog"}),(0,a.jsx)(n.td,{children:"Entero largo"}),(0,a.jsx)(n.td,{children:"4"}),(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.em,{children:"valor"})," = 0 (no mostrar la caja de di\xe1logo) \xf3 1 (mostrar caja de di\xe1logo)",(0,a.jsx)(n.br,{}),"Esta opci\xf3n administra la visualizaci\xf3n de la caja de di\xe1logo de actualizaci\xf3n durante la ejecuci\xf3n del comando ",(0,a.jsx)(n.em,{children:"CALL WEB SERVICE"}),". Por defecto, este comando nunca muestra la caja de di\xe1logo; por lo general, para hacerlo debe utilizar el comando ",(0,a.jsx)(n.em,{children:"AUTHENTICATE WEB SERVICE"}),". Sin embargo, si quiere que aparezca la caja de di\xe1logo de autenticaci\xf3n para que el usuario introduzca sus identificadores, deber\xe1 utilizar esta opci\xf3n: pase 1 en ",(0,a.jsx)(n.em,{children:"valor"})," para mostrar la caja de di\xe1logo, de lo contrario pase 0. La caja de di\xe1logo s\xf3lo aparece si el servicio web necesita autenticaci\xf3n."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Web Service HTTP compression"}),(0,a.jsx)(n.td,{children:"Entero largo"}),(0,a.jsx)(n.td,{children:"6"}),(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.em,{children:"valor"})," = Web Service Compression ",(0,a.jsx)(n.br,{})," Esta opci\xf3n permite activar un mecanismo interno de compresi\xf3n de las peticiones SOAP con el fin de acelerar los intercambios entre aplicaciones 4D. Cuando ejecuta la instrucci\xf3n ",(0,a.jsx)(n.a,{href:"/docs/es/20-R7/commands/web-service-set-option",children:"WEB SERVICE SET OPTION"}),'(Web Service HTTP Compression; Web Service Compression) en el cliente 4D del servicio web, los datos de la pr\xf3xima petici\xf3n SOAP enviados por el cliente ser\xe1n comprimidos utilizando un mecanismo est\xe1ndar HTTP ("gzip" o "deflate" en funci\xf3n del contenido de la petici\xf3n) antes de su env\xedo al servidor SOAP 4D. El servidor descomprimir\xe1 y analizar\xe1 la petici\xf3n, luego responder\xe1 autom\xe1ticamente utilizando el mismo mecanismo. S\xf3lo se afecta la petici\xf3n que sigue la llamada al comando ',(0,a.jsx)(n.a,{href:"/docs/es/20-R7/commands/web-service-set-option",children:"WEB SERVICE SET OPTION"}),". Por lo tanto debe llamar este comando cada vez que quiera utilizar la compresi\xf3n. Por defecto, 4D no comprime las peticiones HTTP de los servicios web.",(0,a.jsx)(n.br,{}),(0,a.jsx)(n.strong,{children:"Nota:"})," este mecanismo no puede utilizarse para las peticiones enviadas a un servidor SOAP 4D de una versi\xf3n anterior a la 11.3. Para que pueda optimizar m\xe1s este funcionamiento, las opciones adicionales configuran el l\xedmite y la tasa de compresi\xf3n de las peticiones. Estas opciones son accesibles v\xeda el comando ",(0,a.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Web Service HTTP timeout"}),(0,a.jsx)(n.td,{children:"Entero largo"}),(0,a.jsx)(n.td,{children:"1"}),(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.em,{children:"valor"}),' = "timeout" de la parte cliente expresado en segundos.',(0,a.jsx)(n.br,{}),"El timeout de la parte clientes es el periodo de espera del cliente servicio web en caso de que no haya respuesta del servidor. Despu\xe9s de este per\xedodo, el cliente cierra la sesi\xf3n y se pierde la petici\xf3n. ",(0,a.jsx)(n.br,{}),"Por defecto, este timeout es de 180 segundos. Puede modificarse por razones espec\xedficas (estado de la red, especificaciones del servicio web, etc.)."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Web Service reset auth settings"}),(0,a.jsx)(n.td,{children:"Entero largo"}),(0,a.jsx)(n.td,{children:"5"}),(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.em,{children:"valor"})," = 0 (no borrar la informaci\xf3n) \xf3 1 (borra la informaci\xf3n)",(0,a.jsx)(n.br,{}),"Esta opci\xf3n le permite indicar a 4D memorizar la informaci\xf3n de autenticaci\xf3n del usuario (nombre de usuario, contrase\xf1a, m\xe9todo, etc.), para reutilizarla posteriormente. Por defecto, esta informaci\xf3n se borra despu\xe9s de cada ejecuci\xf3n del comando  CALL WEB SERVICE. Pase 0 en valor para guardar la informaci\xf3n y 1 para borrarla. Note que cuando pasa 0, la informaci\xf3n se conserva durante la sesi\xf3n pero no se almacena."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Web Service SOAP header"}),(0,a.jsx)(n.td,{children:"Entero largo"}),(0,a.jsx)(n.td,{children:"2"}),(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.em,{children:"valor"})," = referencia del elemento XML ra\xedz a insertar como encabezado de la petici\xf3n SOAP.",(0,a.jsx)(n.br,{}),"Esta opci\xf3n permite insertar un encabezado en la petici\xf3n SOAP generada utilizando el comando  CALL WEB SERVICE. Por defecto, las peticiones SOAP no contienen un encabezado espec\xedfico. Sin embargo, algunos servicios web requieren un encabezado, por ejemplo para la gesti\xf3n de los par\xe1metros de identificaci\xf3n."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Web Service SOAP version"}),(0,a.jsx)(n.td,{children:"Entero largo"}),(0,a.jsx)(n.td,{children:"3"}),(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.em,{children:"valor"})," = Web Service SOAP_1_1 o Web Service SOAP_1_2",(0,a.jsx)(n.br,{}),"Esta opci\xf3n permite precisar la versi\xf3n del protocolo SOAP utilizado en la petici\xf3n. Pase en valor la constante Web Service SOAP_1_1 para indicar la versi\xf3n 1.1 y la constante Web Service SOAP_1_2 para indicar la versi\xf3n 1.2."]})]})]})]}),"\n",(0,a.jsxs)(n.p,{children:["El orden de llamada de las opciones no es importante. Si la misma ",(0,a.jsx)(n.em,{children:"opcion"})," est\xe1 definida varias veces, s\xf3lo el valor de la primera llamada se tiene en cuenta."]}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,a.jsx)(n.p,{children:"Inserci\xf3n de un encabezado personalizado en la petici\xf3n SOAP:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Creaci\xf3n de una referencia XML\n\xa0var vRootRef;vElemRef : Text\n\xa0vRootRef:=DOM Create XML Ref("RootElement")\n\xa0vxPath:="/RootElement/Elem1/Elem2/Elem3"\n\xa0vElemRef:=DOM Create XML element(vRootRef;vxPath)\n\xa0\xa0//Modificaci\xf3n del encabezado SOAP con la referencia\n\xa0WEB SERVICE SET OPTION(Web Service SOAP header;vElemRef)\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,a.jsx)(n.p,{children:"Utilizaci\xf3n de la versi\xf3n 1.2 del protocolo SOAP:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0WEB SERVICE SET OPTION(Web Service SOAP version;Web Service SOAP_1_2)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/es/20-R7/commands/web-service-call",children:"WEB SERVICE CALL"})}),"\n",(0,a.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"901"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return o}});var r=i(667294);let a={},s=r.createContext(a);function o(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);