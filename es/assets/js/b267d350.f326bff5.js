"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89104"],{812762:function(e,n,s){s.r(n),s.d(n,{metadata:()=>o,contentTitle:()=>d,default:()=>m,assets:()=>l,toc:()=>c,frontMatter:()=>r});var o=JSON.parse('{"id":"commands-legacy/web-service-call","title":"WEB SERVICE CALL","description":"WEB SERVICE CALL ( urlAcceso ; soapAccion ; nomMetodo ; nomEspacio {; tipoCompuesto {; *}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-service-call.md","sourceDirName":"commands-legacy","slug":"/commands/web-service-call","permalink":"/docs/es/commands/web-service-call","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-service-call.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-service-call","title":"WEB SERVICE CALL","slug":"/commands/web-service-call","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SERVICE AUTHENTICATE","permalink":"/docs/es/commands/web-service-authenticate"},"next":{"title":"WEB SERVICE Get info","permalink":"/docs/es/commands/web-service-get-info"}}'),a=s("785893"),i=s("250065");let r={id:"web-service-call",title:"WEB SERVICE CALL",slug:"/commands/web-service-call",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Modo RPC, entrada y salida simples",id:"modo-rpc-entrada-y-salida-simples",level:5},{value:"Modo RPC, entrada compuesta y salida simple",id:"modo-rpc-entrada-compuesta-y-salida-simple",level:5},{value:"Modo RPC, entrada simple y salida compuestas",id:"modo-rpc-entrada-simple-y-salida-compuestas",level:5},{value:"Modo RPC, entrada y salida compuestas",id:"modo-rpc-entrada-y-salida-compuestas",level:5},{value:"Modo DOC",id:"modo-doc",level:5},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function t(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"WEB SERVICE CALL"})," ( ",(0,a.jsx)(n.em,{children:"urlAcceso"})," ; ",(0,a.jsx)(n.em,{children:"soapAccion"})," ; ",(0,a.jsx)(n.em,{children:"nomMetodo"})," ; ",(0,a.jsx)(n.em,{children:"nomEspacio"})," {; ",(0,a.jsx)(n.em,{children:"tipoCompuesto"})," {; *}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"urlAcceso"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"URL de acceso al servicio Web"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"soapAccion"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Contenido del campo SOAPAction"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"nomMetodo"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Nombre del m\xe9todo"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"nomEspacio"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Espacio del nombre (Namespace)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"tipoCompuesto"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Configuraci\xf3n de tipos compuestos (tipos simples si se omite)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"*"}),(0,a.jsx)(n.td,{children:"Operador"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"No cerrar la conexi\xf3n"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando ",(0,a.jsx)(n.strong,{children:"WEB SERVICE CALL"})," se utiliza para llamar un servicio web enviando una petici\xf3n HTTP. Esta petici\xf3n contiene el mensaje SOAP creado previamente utilizando el comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/web-service-set-parameter",children:"WEB SERVICE SET PARAMETER"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Toda llamada posterior al comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/web-service-set-parameter",children:"WEB SERVICE SET PARAMETER"})," provocar\xe1 la creaci\xf3n de una nueva petici\xf3n. La ejecuci\xf3n de un comando ",(0,a.jsx)(n.strong,{children:"WEB SERVICE CALL"})," tambi\xe9n borra todo resultado del servicio web llamado anteriormente y lo reemplaza con los nuevos resultados."]}),"\n",(0,a.jsxs)(n.p,{children:["En ",(0,a.jsx)(n.em,{children:"urlAcceso"}),", pase el URL completo que permite acceder al servicio web (no confunda este URL con el del archivo WSDL, que describe el servicio web)."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"Acceso en modo seguro (SSL)"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Si quiere utilizar un servicio web en modo seguro utilizando SSL, pase https:// delante del URL en lugar de http://. Esta configuraci\xf3n activa autom\xe1ticamente la conexi\xf3n en modo seguro."}),"\n",(0,a.jsxs)(n.p,{children:["Note que este comando puede utilizar un certificado servidor (ver el comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/http-set-certificates-folder",children:"HTTP SET CERTIFICATES FOLDER"}),'). Si este certificado no es valido (vencido o revocado), la variable sistema OK toma el valor y se devuelve el error 901 "Certificado servidor invalido". Puede interceptar este error utilizando un m\xe9todo de gesti\xf3n de errores instalado por el comando ',(0,a.jsx)(n.a,{href:"/docs/es/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["En ",(0,a.jsx)(n.em,{children:"soapAccion"}),", pase el contenido del campo SOAPAction de la petici\xf3n. Este campo contiene por lo general el valor \u201CServiceName#MethodName\u201D."]}),"\n",(0,a.jsxs)(n.p,{children:["En ",(0,a.jsx)(n.em,{children:"nomMetodo"}),", pase el nombre del m\xe9todo remoto (que pertenece al servicio web) que quiere ejecutar."]}),"\n",(0,a.jsxs)(n.p,{children:["En ",(0,a.jsx)(n.em,{children:"espacioNombre"}),", pase el espacio del nombre XML (namespace) utilizado para la petici\xf3n SOAP. Para mayor informaci\xf3n sobre los nombres de espacios XML, consulte el Manual de Dise\xf1o."]}),"\n",(0,a.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,a.jsx)(n.em,{children:"tipoCompuesto"})," especifica la configuraci\xf3n de los par\xe1metros web Service enviados o recibidos (definidos utilizando los comandos ",(0,a.jsx)(n.a,{href:"/docs/es/commands/web-service-set-parameter",children:"WEB SERVICE SET PARAMETER"})," y ",(0,a.jsx)(n.a,{href:"/docs/es/commands/web-service-get-result",children:"WEB SERVICE GET RESULT"}),".",(0,a.jsx)(n.br,{}),"\nEl valor del par\xe1metro ",(0,a.jsx)(n.em,{children:"tipoCompuesto"})," depende del modo de publicaci\xf3n del servicio web (DOC o RPC, ver el Manual de Dise\xf1o) y sus propios par\xe1metros."]}),"\n",(0,a.jsxs)(n.p,{children:["En ",(0,a.jsx)(n.em,{children:"tipoCompuesto"}),", debe pasar una de las siguientes constantes, ubicadas en el tema ",(0,a.jsx)(n.em,{children:"Servicios Web (Cliente)"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Constante"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{children:"Valor"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Web Service dynamic"}),(0,a.jsx)(n.td,{children:"Entero largo"}),(0,a.jsx)(n.td,{children:"0"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Web Service manual"}),(0,a.jsx)(n.td,{children:"Entero largo"}),(0,a.jsx)(n.td,{children:"3"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Web Service manual in"}),(0,a.jsx)(n.td,{children:"Entero largo"}),(0,a.jsx)(n.td,{children:"1"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Web Service manual out"}),(0,a.jsx)(n.td,{children:"Entero largo"}),(0,a.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,a.jsx)(n.p,{children:"Cada constante corresponde a una \u201Cconfiguraci\xf3n\u201D. Una configuraci\xf3n representa una combinaci\xf3n entre el modo de publicaci\xf3n (RPC/DOC) y los tipos de par\xe1metros (entrada/salida, simple o compuesto) implementado."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"})," recuerde que la caracter\xedstica \u201Centrada\u201D o \u201Csalida\u201D de los par\xe1metros se eval\xfaa desde el punto de vista del m\xe9todo proxy/servicio web:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"un par\xe1metro \u201Centrada\u201D es un valor pasado al m\xe9todo proxy y por lo tanto al servicio web,"}),"\n",(0,a.jsx)(n.li,{children:"un par\xe1metro \u201Csalida\u201D es devuelto por el servicio web y por lo tanto por el m\xe9todo proxy (generalmente v\xeda $0)."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"La siguiente tabla muestra todas las configuraciones posibles como tambi\xe9n las constantes correspondientes:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Par\xe1metros entrada"})}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"Par\xe1metros entrada"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"Simples"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"Compuestos"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"Simples"})}),(0,a.jsx)(n.td,{children:"Web Service Dynamic"}),(0,a.jsx)(n.td,{children:"Web Service Manual In"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{children:"(Modo RPC)"}),(0,a.jsx)(n.td,{children:"(Modo RPC)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.strong,{children:"Compues"}),"tos"]}),(0,a.jsx)(n.td,{children:"Web Service Manual Out"}),(0,a.jsx)(n.td,{children:"Web Service Manual"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"(Modo RPC)"}),(0,a.jsx)(n.td,{children:"(Modo RPC o Modo DOC)"}),(0,a.jsx)(n.td,{})]})]})]}),"\n",(0,a.jsx)(n.p,{children:"Las cinco configuraciones descritas a continuaci\xf3n pueden implementarse. En todos los caso, 4D administrar\xe1 el formato de la petici\xf3n SOAP a enviar al servicio web como tambi\xe9n su sobre. Es su decisi\xf3n darle formato a los contenidos de esta petici\xf3n de acuerdo a la configuraci\xf3n utilizada."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"})," a pesar del hecho de que los tipos XML compuestos, los arrays de datos son tratados por 4D como tipos simples."]}),"\n",(0,a.jsx)(n.h5,{id:"modo-rpc-entrada-y-salida-simples",children:"Modo RPC, entrada y salida simples"}),"\n",(0,a.jsxs)(n.p,{children:["Esta configuraci\xf3n es la m\xe1s f\xe1cil de utilizar. En este caso, el par\xe1metro ",(0,a.jsx)(n.em,{children:"tipoCompuesto"})," contiene la constante Web Service Dynamic o se omite."]}),"\n",(0,a.jsx)(n.p,{children:"Los par\xe1metros enviados y las respuestas recibidas pueden ser manipulados directamente, sin procesamiento previo."}),"\n",(0,a.jsxs)(n.p,{children:["Consulte el ejemplo del comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/web-service-get-result",children:"WEB SERVICE GET RESULT"}),"."]}),"\n",(0,a.jsx)(n.h5,{id:"modo-rpc-entrada-compuesta-y-salida-simple",children:"Modo RPC, entrada compuesta y salida simple"}),"\n",(0,a.jsxs)(n.p,{children:["En este caso, el par\xe1metro ",(0,a.jsx)(n.em,{children:"tipoComplejo"})," contiene la constante Web Service Manual In. Con esta configuraci\xf3n, debe pasar \u201Cmanualmente\u201D al servicio Web cada elemento XML fuente bajo la forma de un BLOB, con la ayuda del comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/web-service-set-parameter",children:"WEB SERVICE SET PARAMETER"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Depende de usted formatear el BLOB inicial como un elemento XML v\xe1lido. Este BLOB debe contener como primer elemento el primer elemento \u201Chijo\u201D del elemento  de la petici\xf3n final."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Ejemplo"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $1 : Blob\n\xa0var $0 : Boolean\n\xa0\n\xa0WEB SERVICE SET PARAMETER("MyXMLBlob";$1)\n\xa0WEB SERVICE CALL("http://my.domain.com/my_service";"MiAccionSoap";"ElMetodo";"http://mi.nombrespacio.com/";Web Service manual in)\n\xa0WEB SERVICE GET RESULT($0;"MiVarSalida";*)\n'})}),"\n",(0,a.jsx)(n.h5,{id:"modo-rpc-entrada-simple-y-salida-compuestas",children:"Modo RPC, entrada simple y salida compuestas"}),"\n",(0,a.jsxs)(n.p,{children:["En este caso, el par\xe1metro ",(0,a.jsx)(n.em,{children:"tipoCompuesto"})," contiene la constante Web Service Manual Out. Cada par\xe1metro de salida ser\xe1 devuelto por el servicio Web bajo la forma del elemento XML almacenado en un BLOB. Recupera este par\xe1metro utilizando el comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/web-service-get-result",children:"WEB SERVICE GET RESULT"}),". Luego puede analizar el contenido del BLOB recibido utilizando los comandos XML de 4D."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Ejemplo"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $0 : Blob\n\xa0var $1 : Boolean\n\xa0\n\xa0WEB SERVICE SET PARAMETER("MiVarEntrada";$1)\n\xa0WEB SERVICE CALL("http://mi.dominio.com/mi_servicio";"MiAccionSoap";"ElMetodo";"http://mi.nombrespacio.com/";Web Service manual out)\n\xa0WEB SERVICE GET RESULT($0;"MiXMLSalida";*)\n'})}),"\n",(0,a.jsx)(n.h5,{id:"modo-rpc-entrada-y-salida-compuestas",children:"Modo RPC, entrada y salida compuestas"}),"\n",(0,a.jsxs)(n.p,{children:["En este caso, el par\xe1metro ",(0,a.jsx)(n.em,{children:"tipoCompuesto"})," contiene la constantes Web Service Manual. Cada par\xe1metro de entrada y de salida debe ser almacenado en la forma de los elementos XML en los BLOBs, como se describi\xf3 en las dos configuraciones anteriores."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Ejemplo"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $0 : Blob\n\xa0var $1 : Blob\n\xa0\n\xa0WEB SERVICE SET PARAMETER("MiBlobXMLEntrada";$1)\n\xa0WEB SERVICE CALL("http://mi.dominio.com/mi_servicio";"MiAccionSoap";"ElMetodo";"http://mi.nombrespacio.com/";Web Service manual)\n\xa0WEB SERVICE GET RESULT($0;"MiXMLSalida";*)\n'})}),"\n",(0,a.jsx)(n.h5,{id:"modo-doc",children:"Modo DOC"}),"\n",(0,a.jsx)(n.p,{children:"Un m\xe9todo proxy de llamada de un servicio web DOC es similar a un m\xe9todo proxy de llamada de un servicio web RPC utilizando los par\xe1metros de entrada y de salida compuestos."}),"\n",(0,a.jsx)(n.p,{children:"La \xfanica diferencia entre estas dos configuraciones es el nivel del contenido XML de los par\xe1metros BLOB pasados y recibidos. Desde el punto de vista de 4D, la construcci\xf3n y el env\xedo de la petici\xf3n SOAP son id\xe9nticos."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Ejemplo"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $0 : Blob\n\xa0var $1 : Blob\n\xa0\n\xa0WEB SERVICE SET PARAMETER("MiXMLEntrada";$1)\n\xa0WEB SERVICE CALL("http://mi.dominio.com/mi_servicio";"MiAccionSoap";"ElMetodo";"http://mi.nombrespacio.com/";Web Service manual)\n\xa0WEB SERVICE GET RESULT($0;"MiXMLSalida";*)\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"}),' en el caso de los servicios web DOC, el valor de las cadenas (\u201CMiXMLEntrada\u201D y \u201CMiXMLSalida\u201D) pasadas como par\xe1metros no es de importancia; incluso es posible pasar cadenas vac\xedas"". De hecho, estos valores no se utilizan en la petici\xf3n SOAP contenida en el documento XML. Es obligatorio pasar estos par\xe1metros.']}),"\n",(0,a.jsx)(n.p,{children:"Para utilizar un servicio web publicado en modo DOC (o en modo RPC con tipos compuestos), es recomendable proceder de esta forma:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Generar el m\xe9todo proxy utilizando el Asistente Client Web Services.",(0,a.jsx)(n.br,{}),"\nEl m\xe9todo proxy se llamar\xe1 de esta forma: ",(0,a.jsx)(n.em,{children:"$XMLresultadoBlob:=$DOCproxy_Metodo($XMLparamBlob)"})]}),"\n",(0,a.jsxs)(n.li,{children:["Familiariarisece con los contenidos de las peticiones SOAP a enviar al servicio web utilizando una herramienta de prueba en l\xednea (por ejemplo, ",(0,a.jsx)(n.em,{children:(0,a.jsx)(n.a,{href:"http://soapclient.com/soaptest.html",children:"http://soapclient.com/soaptest.html"})}),"). Este tipo de herramienta se utiliza para generar los formularios de prueba HTML, a partir del WSDL del servicio web."]}),"\n",(0,a.jsxs)(n.li,{children:["Copie el contenido XML generado a partir del primer hijo de ",(0,a.jsx)(n.em,{}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Escriba el m\xe9todo permitiendo ubicar los valores reales de los par\xe1metros en el c\xf3digo XML; este c\xf3digo debe estar ubicado en el BLOB ",(0,a.jsx)(n.em,{children:"$XMLparamBlob"}),"."]}),"\n",(0,a.jsx)(n.li,{children:"Para analizar la respuesta, puede igualmente utilizar una herramienta de prueba en l\xednea, o utilizar el WSDL que especifica los elementos devueltos."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["El par\xe1metro ",(0,a.jsx)(n.em,{children:"*"})," puede utilizarse para optimizar llamadas. Cuando se pasa, el comando no cierra la conexi\xf3n utilizada por el proceso al final de su ejecuci\xf3n. En este caso, la pr\xf3xima llamada a ",(0,a.jsx)(n.strong,{children:"WEB SERVICE CALL"})," reutilizar\xe1 la misma conexi\xf3n si se pasa el par\xe1metro ",(0,a.jsx)(n.em,{children:"*"}),", etc. Para cerrar la conexi\xf3n, simplemente ejecute el comando ",(0,a.jsx)(n.strong,{children:"WEB SERVICE CALL"})," sin el par\xe1metro ",(0,a.jsx)(n.em,{children:"*"}),". Este mecanismo puede utilizarse para acelerar sensiblemente los procesos en caso de llamadas sucesivas a varios servicios web en el mismo servidor, en particular en una configuraci\xf3n WAN (v\xeda Internet, por ejemplo). Note que este mecanismo depende del par\xe1metro \u201Ckeep-alive\u201D del servidor web. Este par\xe1metro por lo general define un n\xfamero m\xe1ximo de peticiones v\xeda la misma conexi\xf3n, e incluso puede negar peticiones. Si las peticiones ",(0,a.jsx)(n.strong,{children:"WEB SERVICE CALL"})," encadenadas en la misma conexi\xf3n alcanzan este n\xfamero m\xe1ximo, o si las conexiones keep-alive no son permitidas, 4D crear\xe1 una nueva conexi\xf3n para cada petici\xf3n."]}),"\n",(0,a.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,a.jsx)(n.p,{children:"Si la petici\xf3n se enruta correctamente y el servicio web la acepta, la variable sistema OK toma el valor 1. De lo contrario, toma el valor 0 y se devuelve un error."}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/commands/web-service-get-result",children:"WEB SERVICE GET RESULT"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/web-service-set-parameter",children:"WEB SERVICE SET PARAMETER"})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return r}});var o=s(667294);let a={},i=o.createContext(a);function r(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);