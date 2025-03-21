"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["23987"],{272405:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>a,contentTitle:()=>c});var r=JSON.parse('{"id":"API/IncomingMessageClass","title":"IncomingMessage","description":"The 4D.IncomingMessage class allows you to handle the object received by a custom HTTP request handler. HTTP requests and their properties are automatically received as an instance of the 4D.IncomingMessage class. Los par\xe1metros dados directamente en la petici\xf3n con el verbo GET son manejados por la propiedad .urlQuery, mientras que los par\xe1metros pasados en el cuerpo de la solicitud est\xe1n disponibles a trav\xe9s de funciones como .getBlob() o getText().","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/API/IncomingMessageClass.md","sourceDirName":"API","slug":"/API/IncomingMessageClass","permalink":"/docs/es/API/IncomingMessageClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FIncomingMessageClass.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"IncomingMessageClass","title":"IncomingMessage"},"sidebar":"docs","previous":{"title":"IMAPTransporter","permalink":"/docs/es/API/IMAPTransporterClass"},"next":{"title":"MailAttachment","permalink":"/docs/es/API/MailAttachmentClass"}}'),i=s("785893"),t=s("250065");let d={id:"IncomingMessageClass",title:"IncomingMessage"},c=void 0,l={},a=[{value:"Ejemplo",id:"ejemplo",level:3},{value:"IncomingMessage Object",id:"incomingmessage-object",level:3},{value:".getBlob()",id:"getblob",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:".getHeader()",id:"getheader",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-1",level:4},{value:"Ejemplo",id:"ejemplo-1",level:4},{value:".getJSON()",id:"getjson",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-2",level:4},{value:".getPicture()",id:"getpicture",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-3",level:4},{value:".getText()",id:"gettext",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-4",level:4},{value:".headers",id:"headers",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-5",level:4},{value:".url",id:"url",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-6",level:4},{value:".urlPath",id:"urlpath",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-7",level:4},{value:".urlQuery",id:"urlquery",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-8",level:4},{value:"Direct parameters",id:"direct-parameters",level:4},{value:"JSON contents parameters",id:"json-contents-parameters",level:4},{value:".verb",id:"verb",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-9",level:4}];function o(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"4D.IncomingMessage"})," class allows you to handle the object received by a custom ",(0,i.jsx)(n.a,{href:"/docs/es/WebServer/http-request-handler",children:(0,i.jsx)(n.strong,{children:"HTTP request handler"})}),". HTTP requests and their properties are automatically received as an instance of the ",(0,i.jsx)(n.code,{children:"4D.IncomingMessage"})," class. Los par\xe1metros dados directamente en la petici\xf3n con el verbo GET son manejados por la propiedad ",(0,i.jsx)(n.a,{href:"#urlquery",children:(0,i.jsx)(n.code,{children:".urlQuery"})}),", mientras que los par\xe1metros pasados en el cuerpo de la solicitud est\xe1n disponibles a trav\xe9s de funciones como ",(0,i.jsx)(n.a,{href:"#getblob",children:(0,i.jsx)(n.code,{children:".getBlob()"})})," o ",(0,i.jsx)(n.a,{href:"#gettext",children:(0,i.jsx)(n.code,{children:"getText()"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The HTTP request handler can return any value (or nothing). It usually returns an instance of the ",(0,i.jsx)(n.a,{href:"/docs/es/API/OutgoingMessageClass",children:(0,i.jsx)(n.code,{children:"4D.OutgoingMessage"})})," class."]}),"\n",(0,i.jsx)(n.p,{children:"All properties of this class are read-only. They are automatically filled by the request handler."}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Lanzamiento"}),(0,i.jsx)(n.th,{children:"Modificaciones"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"20 R8"}),(0,i.jsx)(n.td,{children:"Clase a\xf1adida"})]})})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsxs)(n.p,{children:["The following ",(0,i.jsxs)(n.a,{href:"/docs/es/WebServer/http-request-handler",children:[(0,i.jsx)(n.strong,{children:"HTTPHandlers.json"})," file"]})," has been defined:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "class": "GeneralHandling",\n        "method": "gettingStarted",\n        "pattern": "start",\n        "verbs": "get, post"\n    }\n]\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"http://127.0.0.1/start/example?param=demo&name=4D"})," request is run with a ",(0,i.jsx)(n.code,{children:"GET"})," verb in a browser. It is handled by the ",(0,i.jsx)(n.em,{children:"gettingStarted"})," function of the following ",(0,i.jsx)(n.em,{children:"GeneralHandling"})," singleton class:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'shared singleton Class constructor()\n        \nFunction gettingStarted($request : 4D.IncomingMessage) : 4D.OutgoingMessage\n    \n    var $result:=4D.OutgoingMessage.new()\n    var $body : Text\n    \n    $body:="Called URL: "+$request.url+"\\n"\n    \n    $body+="The parameters are received as an object: \\n"+JSON Stringify($request.urlQuery; *)+"\\n"\n    \n    $body+="The verb is: "+$request.verb+"\\n"\n    \n    $body+="There are "+String($request.urlPath.length)+" url parts - Url parts are: "\\\n    +$request.urlPath.join(" - ")+"\\n\\n"\n    \n    \n    $result.setBody($body)\n    $result.setHeader("Content-Type"; "text/plain")\n    \n    return $result\n\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The request is received on the server as ",(0,i.jsx)(n.em,{children:"$request"}),", an object instance of the ",(0,i.jsx)(n.code,{children:"4D.IncomingMessage"})," class."]}),"\n",(0,i.jsx)(n.p,{children:"Here is the response:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'Called URL: /start/example? param=demo&name=4D \nThe parameters are received as an object:\n{\n  "param": "demo",\n  "name": "4D"\n}\nThe verb is: GET\nThere are 2 url parts - Url parts are: start - example\n'})}),"\n",(0,i.jsx)(n.h3,{id:"incomingmessage-object",children:"IncomingMessage Object"}),"\n",(0,i.jsx)(n.p,{children:"4D.IncomingMessage objects provide the following properties and functions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{})})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#getblob",children:[(0,i.jsx)(n.strong,{children:".getBlob"}),"() : Blob"]}),(0,i.jsx)(n.br,{}),"devuelve el cuerpo de la petici\xf3n como un Blob"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#getheader",children:[(0,i.jsx)(n.strong,{children:".getHeader"}),"( ",(0,i.jsx)(n.em,{children:"key"})," : Text ) : Text"]}),(0,i.jsx)(n.br,{}),"devuelve el valor del encabezado ",(0,i.jsx)(n.em,{children:"key"})]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#getjson",children:[(0,i.jsx)(n.strong,{children:".getJSON"}),"() : Variant"]}),(0,i.jsx)(n.br,{}),"devuelve el cuerpo de la solicitud como una resoluci\xf3n JSON"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#getpicture",children:[(0,i.jsx)(n.strong,{children:".getPicture"}),"() : Picture"]}),(0,i.jsx)(n.br,{}),"devuelve el cuerpo de la petici\xf3n como una imagen (en caso de que un cuerpo enviado como una imagen)"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#gettext",children:[(0,i.jsx)(n.strong,{children:".getText"}),"() : Text"]}),(0,i.jsx)(n.br,{}),"devuelve el cuerpo de la solicitud como un valor de texto"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#headers",children:[(0,i.jsx)(n.strong,{children:"headers"})," : Object"]}),(0,i.jsx)(n.br,{}),"los encabezados actuales del mensaje entrante como pares llave/valor (cadenas)"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#url",children:[(0,i.jsx)(n.strong,{children:"url"})," : Text"]}),(0,i.jsx)(n.br,{}),"la URL de la petici\xf3n sin la parte ",(0,i.jsx)(n.em,{children:"IP:port"})," y como cadena"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#urlpath",children:[(0,i.jsx)(n.strong,{children:"urlPath"})," : Collection"]}),(0,i.jsx)(n.br,{}),"la URL de la solicitud sin la parte ",(0,i.jsx)(n.em,{children:"IP:port"})," y como una colecci\xf3n de cadenas"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#urlquery",children:[(0,i.jsx)(n.strong,{children:"urlQuery"})," : Object"]}),(0,i.jsx)(n.br,{}),"los par\xe1metros de la petici\xf3n cuando se han dado en la URL como pares llave/valor"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#verb",children:[(0,i.jsx)(n.strong,{children:"verb"})," : Text"]}),(0,i.jsx)(n.br,{}),"el verbo usado por la petici\xf3n"]})})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["A 4D.IncomingMessage object is a ",(0,i.jsx)(n.a,{href:"/docs/es/Concepts/shared",children:"non-sharable"})," object."]})}),"\n",(0,i.jsx)(n.h2,{id:"getblob",children:".getBlob()"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".getBlob"}),"() : Blob"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metros"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultado"}),(0,i.jsx)(n.td,{children:"Blob"}),(0,i.jsx)(n.td,{children:"<-"}),(0,i.jsx)(n.td,{children:"Body of the request as a Blob"})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["La funci\xf3n ",(0,i.jsx)(n.code,{children:".getBlob()"})," devuelve el cuerpo de la petici\xf3n como un Blob."]}),"\n",(0,i.jsx)(n.p,{children:"If the body has not been given as a binary content, the function tries to convert the value but it can give unexpected results."}),"\n",(0,i.jsx)(n.h2,{id:"getheader",children:".getHeader()"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".getHeader"}),"( ",(0,i.jsx)(n.em,{children:"key"})," : Text ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metros"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"key"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"Header property to get"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultado"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"<-"}),(0,i.jsx)(n.td,{children:"Valor de la propiedad del encabezado"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n-1",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["La funci\xf3n ",(0,i.jsx)(n.code,{children:".getHeader()"})," devuelve el valor del encabezado ",(0,i.jsx)(n.em,{children:"key"})," ."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"key"})," parameter is not case sensitive."]})}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'var $value : Text\nvar $request : 4D.IncomingMessage\n$value := $request.getHeader("content-type")\n'})}),"\n",(0,i.jsx)(n.h2,{id:"getjson",children:".getJSON()"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".getJSON"}),"() : Variant"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metros"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultado"}),(0,i.jsx)(n.td,{children:"Variant"}),(0,i.jsx)(n.td,{children:"<-"}),(0,i.jsx)(n.td,{children:"JSON resolution of the body of the request"})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n-2",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["La funci\xf3n ",(0,i.jsx)(n.code,{children:".getJSON()"})," devuelve el cuerpo de la solicitud como una resoluci\xf3n JSON."]}),"\n",(0,i.jsx)(n.p,{children:"If the body has not been given as JSON valid content, an error is raised."}),"\n",(0,i.jsx)(n.h2,{id:"getpicture",children:".getPicture()"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".getPicture"}),"() : Picture"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metros"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultado"}),(0,i.jsx)(n.td,{children:"Picture"}),(0,i.jsx)(n.td,{children:"<-"}),(0,i.jsx)(n.td,{children:"Body of the request as picture"})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n-3",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["La funci\xf3n ",(0,i.jsx)(n.code,{children:".getPicture()"})," devuelve el cuerpo de la petici\xf3n como una imagen (en caso de que un cuerpo enviado como una imagen)."]}),"\n",(0,i.jsx)(n.p,{children:"The content-type must be given in the headers to indicate that the body is a picture."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["If the request is built using the ",(0,i.jsxs)(n.a,{href:"/docs/es/API/HTTPRequestClass",children:[(0,i.jsx)(n.code,{children:"HTTPRequest"})," class"]}),", the picture must be sent in the body as a Blob with the appropriate content-type."]})}),"\n",(0,i.jsx)(n.p,{children:"If the body is not received as a valid picture, the function returns null."}),"\n",(0,i.jsx)(n.h2,{id:"gettext",children:".getText()"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".getText"}),"() : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metros"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultado"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"<-"}),(0,i.jsx)(n.td,{children:"Body of the request as text"})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n-4",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["La funci\xf3n ",(0,i.jsx)(n.code,{children:".getText()"})," devuelve el cuerpo de la solicitud como un valor de texto."]}),"\n",(0,i.jsx)(n.p,{children:"If the body has not been given as a string value, the function tries to convert the value but it can give unexpected results."}),"\n",(0,i.jsx)(n.h2,{id:"headers",children:".headers"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"headers"})," : Object"]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n-5",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["La propiedad ",(0,i.jsx)(n.code,{children:".headers"})," contiene los encabezados actuales del mensaje entrante como pares llave/valor (cadenas)."]}),"\n",(0,i.jsxs)(n.p,{children:["La propiedad ",(0,i.jsx)(n.code,{children:".headers"})," es de s\xf3lo lectura."]}),"\n",(0,i.jsx)(n.p,{children:"Header names (keys) are lowercased. Note header names are case sensitive."}),"\n",(0,i.jsx)(n.h2,{id:"url",children:".url"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"url"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n-6",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["La propiedad ",(0,i.jsx)(n.code,{children:".url"})," contiene la URL de la petici\xf3n sin la parte ",(0,i.jsx)(n.em,{children:"IP:port"})," y como cadena."]}),"\n",(0,i.jsxs)(n.p,{children:['For example, if the request is addressed to: "',(0,i.jsx)(n.a,{href:"http://127.0.0.1:80/docs/invoices/today",children:"http://127.0.0.1:80/docs/invoices/today"}),'", the ',(0,i.jsx)(n.code,{children:".url"}),' property is "/docs/invoices/today".']}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".url"})," property is read-only."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:['La parte "host" de la petici\xf3n (',(0,i.jsx)(n.em,{children:"IP:port"}),") es suministrada por el ",(0,i.jsxs)(n.a,{href:"#headers",children:["encabezado ",(0,i.jsx)(n.code,{children:"host"})]}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"urlpath",children:".urlPath"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"urlPath"})," : Collection"]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n-7",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["La propiedad ",(0,i.jsx)(n.code,{children:".urlPath"})," contiene la URL de la solicitud sin la parte ",(0,i.jsx)(n.em,{children:"IP:port"})," y como una colecci\xf3n de cadenas."]}),"\n",(0,i.jsxs)(n.p,{children:['For example, if the request is addressed to: "',(0,i.jsx)(n.a,{href:"http://127.0.0.1:80/docs/invoices/today",children:"http://127.0.0.1:80/docs/invoices/today"}),'", the ',(0,i.jsx)(n.code,{children:".urlPath"}),' property is ["docs", "invoices" ,"today"].']}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".urlPath"})," property is read-only."]}),"\n",(0,i.jsx)(n.h2,{id:"urlquery",children:".urlQuery"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"urlQuery"})," : Object"]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n-8",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["La propiedad ",(0,i.jsx)(n.code,{children:".urlQuery"})," contiene los par\xe1metros de la petici\xf3n cuando se han dado en la URL como pares llave/valor."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".urlQuery"})," property is read-only."]}),"\n",(0,i.jsxs)(n.p,{children:["Parameters can be passed in the URL of requests ",(0,i.jsx)(n.strong,{children:"directly"})," or ",(0,i.jsx)(n.strong,{children:"as JSON contents"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"direct-parameters",children:"Direct parameters"}),"\n",(0,i.jsxs)(n.p,{children:["Example: ",(0,i.jsx)(n.code,{children:"http://127.0.0.1:8044/myCall?firstname=Marie&id=2&isWoman=true"})]}),"\n",(0,i.jsxs)(n.p,{children:["In this case, parameters are received as stringified values in the ",(0,i.jsx)(n.code,{children:"urlQuery"})," property: ",(0,i.jsx)(n.code,{children:'urlQuery = {"firstname":"Marie" ,"id":"2" ,"isWoman":"true"}'})]}),"\n",(0,i.jsx)(n.h4,{id:"json-contents-parameters",children:"JSON contents parameters"}),"\n",(0,i.jsxs)(n.p,{children:["Example: ",(0,i.jsx)(n.code,{children:'http://127.0.0.1:8044/myCall/?myparams=\'[{"firstname": "Marie","isWoman": true,"id": 3}]\''}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Parameters are passed in JSON format and enclosed within a collection."}),"\n",(0,i.jsxs)(n.p,{children:["In this case, parameters are received as JSON text in the ",(0,i.jsx)(n.code,{children:"urlQuery"})," property and can be parsed using ",(0,i.jsx)(n.a,{href:"/docs/es/commands/json-parse",children:(0,i.jsx)(n.code,{children:"JSON Parse"})}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'//urlQuery.myparams: "[{"firstname": "Marie","isWoman": true,"id": 3}]"\n$test:=Value type(JSON Parse($r.urlQuery.myparams))=Is collection) //true\n'})}),"\n",(0,i.jsx)(n.p,{children:"Special characters such as simple quotes or carriage returns must be escaped."}),"\n",(0,i.jsxs)(n.p,{children:["Example: ",(0,i.jsx)(n.code,{children:"http://127.0.0.1:8044/syntax/?mdcode=%60%60%604d"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"//urlQuery.mdcode = ```4d\n$test:=Length($r.urlQuery.mdcode) //5\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Los par\xe1metros dados en el cuerpo de la petici\xf3n utilizando los verbos POST o PUT son manejados a trav\xe9s de funciones dedicadas: ",(0,i.jsx)(n.a,{href:"#gettext",children:(0,i.jsx)(n.code,{children:"getText()"})}),", ",(0,i.jsx)(n.a,{href:"#getpicture",children:(0,i.jsx)(n.code,{children:"getPicture()"})}),", ",(0,i.jsx)(n.a,{href:"#getblob",children:(0,i.jsx)(n.code,{children:"getBlob()"})}),", ",(0,i.jsx)(n.a,{href:"#getjson",children:(0,i.jsx)(n.code,{children:"getJSON()"})}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"verb",children:".verb"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"verb"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n-9",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["La propiedad ",(0,i.jsx)(n.code,{children:".verb"})," contiene el verbo usado por la petici\xf3n."]}),"\n",(0,i.jsx)(n.p,{children:'HTTP and HTTPS request verbs include for example "get", "post", "put", etc.'}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".verb"})," property is read-only."]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var r=s(667294);let i={},t=r.createContext(i);function d(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);