"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91658"],{119514:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"API/OutgoingMessageClass","title":"OutgoingMessage","description":"The 4D.OutgoingMessage class allows you to build messages to be returned by your application functions in response to REST requests. If the response is of type 4D.OutgoingMessage, the REST server does not return an object but the object instance of the OutgoingMessage class.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/API/OutgoingMessageClass.md","sourceDirName":"API","slug":"/API/OutgoingMessageClass","permalink":"/docs/es/20-R7/API/OutgoingMessageClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FOutgoingMessageClass.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"OutgoingMessageClass","title":"OutgoingMessage"},"sidebar":"docs","previous":{"title":"MailAttachment","permalink":"/docs/es/20-R7/API/MailAttachmentClass"},"next":{"title":"POP3Transporter","permalink":"/docs/es/20-R7/API/POP3TransporterClass"}}'),i=n("785893"),d=n("250065");let r={id:"OutgoingMessageClass",title:"OutgoingMessage"},l=void 0,a={},c=[{value:"Ejemplo",id:"ejemplo",level:3},{value:"Objeto OutgoingMessage",id:"objeto-outgoingmessage",level:3},{value:".body",id:"body",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:".headers",id:"headers",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-1",level:4},{value:".setBody()",id:"setbody",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-2",level:4},{value:".setHeader()",id:"setheader",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-3",level:4},{value:".setStatus()",id:"setstatus",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-4",level:4},{value:".status",id:"status",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-5",level:4}];function o(e){let s={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"4D.OutgoingMessage"})," class allows you to build messages to be returned by your application functions in response to ",(0,i.jsx)(s.a,{href:"/docs/es/20-R7/REST/REST_requests",children:"REST requests"}),". If the response is of type ",(0,i.jsx)(s.code,{children:"4D.OutgoingMessage"}),", the REST server does not return an object but the object instance of the ",(0,i.jsx)(s.code,{children:"OutgoingMessage"})," class."]}),"\n",(0,i.jsxs)(s.p,{children:["T\xedpicamente, esta clase puede ser usada en funciones declaradas con la palabra clave ",(0,i.jsx)(s.a,{href:"/docs/es/20-R7/ORDA/ordaClasses#onhttpget-keyword",children:(0,i.jsx)(s.code,{children:"onHttpGet"})})," y dise\xf1adas para manejar las peticiones HTTP GET. Such requests are used, for example, to implement features such as download file, generate and download picture as well as receiving any content-type via a browser."]}),"\n",(0,i.jsxs)(s.p,{children:["An instance of this class is built on 4D Server and can be sent to the browser by the ",(0,i.jsx)(s.a,{href:"/docs/es/20-R7/REST/gettingStarted",children:"4D REST Server"})," only. This class allows to use other technologies than HTTP (e.g. mobile)."]}),"\n",(0,i.jsxs)(s.details,{children:[(0,i.jsx)(s.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Lanzamiento"}),(0,i.jsx)(s.th,{children:"Modificaciones"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"20 R7"}),(0,i.jsx)(s.td,{children:"Clase a\xf1adida"})]})})]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsxs)(s.p,{children:["En este ejemplo, una funci\xf3n ",(0,i.jsx)(s.code,{children:"getFile()"})," es implementada en la ",(0,i.jsx)(s.a,{href:"/docs/es/20-R7/ORDA/ordaClasses#datastore-class",children:"Datastore class"})," y ",(0,i.jsx)(s.a,{href:"/docs/es/20-R7/ORDA/ordaClasses#onhttpget-keyword",children:"puede ser llamada"})," por una petici\xf3n REST. The purpose is to return a ",(0,i.jsx)(s.strong,{children:"testFile.pdf"})," file as a response to the request:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'Class extends DataStoreImplementation\n\nexposed onHTTPGet Function getFile() : 4D.OutgoingMessage\n	\n	var $result:=4D.OutgoingMessage.new()\n	var $file:=File("/RESOURCES/testFile.pdf")\n	\n	$result.setBody($file.getContent())  // This is binary content\n	$result.setHeader("Content-Type"; "application/pdf")\n	return $result\n'})}),"\n",(0,i.jsx)(s.h3,{id:"objeto-outgoingmessage",children:"Objeto OutgoingMessage"}),"\n",(0,i.jsx)(s.p,{children:"4D.OutgoingMessage objects provide the following properties and functions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsx)(s.tr,{children:(0,i.jsx)(s.th,{})})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"#body",children:[(0,i.jsx)(s.strong,{children:"body"})," : any"]}),(0,i.jsx)(s.br,{}),"el cuerpo del mensaje saliente"]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"#headers",children:[(0,i.jsx)(s.strong,{children:"headers"})," : Object"]}),(0,i.jsx)(s.br,{}),"los encabezados actuales del mensaje saliente en forma de pares clave/valor"]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"#setbody",children:[(0,i.jsx)(s.strong,{children:".setBody"}),"( ",(0,i.jsx)(s.em,{children:"body"})," : any )"]}),(0,i.jsx)(s.br,{}),"define el mensaje saliente ",(0,i.jsx)(s.em,{children:"body"})]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"#setheader",children:[(0,i.jsx)(s.strong,{children:".setHeader"}),"( ",(0,i.jsx)(s.em,{children:"key"})," : Text ; ",(0,i.jsx)(s.em,{children:"value"})," : Text )"]}),(0,i.jsx)(s.br,{}),"define lla llave ",(0,i.jsx)(s.em,{children:"key"})," del encabezado del mensaje saliente con el ",(0,i.jsx)(s.em,{children:"valuer"})," suministrado"]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"#setstatus",children:[(0,i.jsx)(s.strong,{children:".setStatus"}),"( ",(0,i.jsx)(s.em,{children:"status"})," : Integer )"]}),(0,i.jsx)(s.br,{}),"establece la propiedad ",(0,i.jsx)(s.code,{children:"status"})," con el ",(0,i.jsx)(s.em,{children:"status"})]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"#status",children:[(0,i.jsx)(s.strong,{children:"status"})," : Integer"]}),(0,i.jsx)(s.br,{}),"el estado actual del mensaje saliente"]})})]})]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["A 4D.OutgoingMessage object is a ",(0,i.jsx)(s.a,{href:"/docs/es/20-R7/Concepts/shared",children:"non-sharable"})," object."]})}),"\n",(0,i.jsx)(s.h2,{id:"body",children:".body"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"body"})," : any"]}),"\n",(0,i.jsx)(s.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(s.p,{children:["La propiedad ",(0,i.jsx)(s.code,{children:".body"})," contiene el cuerpo del mensaje saliente. The following data types are supported in the ",(0,i.jsx)(s.code,{children:".body"})," property:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"text"}),"\n",(0,i.jsx)(s.li,{children:"blob"}),"\n",(0,i.jsx)(s.li,{children:"object"}),"\n",(0,i.jsx)(s.li,{children:"image"}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["La propiedad ",(0,i.jsx)(s.code,{children:".body"})," es de lectura-escritura."]}),"\n",(0,i.jsxs)(s.p,{children:["Tambi\xe9n puede definir la propiedad ",(0,i.jsx)(s.code,{children:".body"})," utilizando la funci\xf3n ",(0,i.jsx)(s.a,{href:"#setbody",children:(0,i.jsx)(s.code,{children:"setBody()"})}),", en cuyo caso el encabezado ",(0,i.jsx)(s.code,{children:"content-type"})," se define autom\xe1ticamente."]}),"\n",(0,i.jsx)(s.h2,{id:"headers",children:".headers"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"headers"})," : Object"]}),"\n",(0,i.jsx)(s.h4,{id:"descripci\xf3n-1",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(s.p,{children:["La propiedad ",(0,i.jsx)(s.code,{children:".headers"})," contiene los encabezados actuales del mensaje saliente en forma de pares clave/valor."]}),"\n",(0,i.jsxs)(s.p,{children:["La propiedad ",(0,i.jsx)(s.code,{children:".headers"})," es de s\xf3lo lectura. Para definir un encabezado, use la funci\xf3n ",(0,i.jsx)(s.a,{href:"#setheader",children:(0,i.jsx)(s.code,{children:"setHeader()"})}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"setbody",children:".setBody()"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:".setBody"}),"( ",(0,i.jsx)(s.em,{children:"body"})," : any )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Par\xe1metros"}),(0,i.jsx)(s.th,{children:"Tipo"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"body"}),(0,i.jsx)(s.td,{children:"any"}),(0,i.jsx)(s.td,{children:"->"}),(0,i.jsx)(s.td,{children:"Body of the outgoing message"})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"descripci\xf3n-2",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(s.p,{children:["La funci\xf3n ",(0,i.jsx)(s.code,{children:".setBody()"})," define el mensaje saliente ",(0,i.jsx)(s.em,{children:"body"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["The following data types are supported in the ",(0,i.jsx)(s.em,{children:"body"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Text"}),"\n",(0,i.jsx)(s.li,{children:"Blob"}),"\n",(0,i.jsx)(s.li,{children:"Object"}),"\n",(0,i.jsx)(s.li,{children:"Imagen"}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["When this function is used, the content-type header is automatically set depending on the ",(0,i.jsx)(s.em,{children:"body"})," type:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Content-Type:text/plain if the body is a Text"}),"\n",(0,i.jsx)(s.li,{children:"Content-Type:application/octet-stream if body is a Blob"}),"\n",(0,i.jsx)(s.li,{children:"Content-Type:application/json if body is an Object"}),"\n",(0,i.jsx)(s.li,{children:"Content-Type:image/jpeg, image/gif... si el body es una imagen"}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["If ",(0,i.jsx)(s.em,{children:"body"})," is not of a supported value type, an error is returned."]}),"\n",(0,i.jsx)(s.h2,{id:"setheader",children:".setHeader()"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:".setHeader"}),"( ",(0,i.jsx)(s.em,{children:"key"})," : Text ; ",(0,i.jsx)(s.em,{children:"value"})," : Text )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Par\xe1metros"}),(0,i.jsx)(s.th,{children:"Tipo"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"key"}),(0,i.jsx)(s.td,{children:"Text"}),(0,i.jsx)(s.td,{children:"->"}),(0,i.jsx)(s.td,{children:"Propiedad de encabezado a definir"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"value"}),(0,i.jsx)(s.td,{children:"Text"}),(0,i.jsx)(s.td,{children:"->"}),(0,i.jsx)(s.td,{children:"Valor de la propiedad del encabezado"})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"descripci\xf3n-3",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(s.p,{children:["La funci\xf3n ",(0,i.jsx)(s.code,{children:".setHeader()"})," define lla llave ",(0,i.jsx)(s.em,{children:"key"})," del encabezado del mensaje saliente con el ",(0,i.jsx)(s.em,{children:"valuer"})," suministrado. If both parameters are not Text values, an error is raised."]}),"\n",(0,i.jsxs)(s.p,{children:["When returning a 4D.OutgoingMessage object instance, 4D automatically sets some headers (e.g. ",(0,i.jsx)(s.code,{children:"Set-Cookie"})," with ",(0,i.jsx)(s.code,{children:"WASID4D=..."})," and ",(0,i.jsx)(s.code,{children:"4DSID__ProjectName_=...."}),")."]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["Si define un ",(0,i.jsx)(s.em,{children:"value"})," para la ",(0,i.jsx)(s.em,{children:"key"}),' el encabezado "Content-Type", aseg\xfarese de llamar a esta funci\xf3n despu\xe9s de la llamada a ',(0,i.jsx)(s.a,{href:"#setbody",children:(0,i.jsx)(s.code,{children:"setBody()"})}),", porque ",(0,i.jsx)(s.code,{children:"setBody()"}),' llena autom\xe1ticamente este encabezado. For a list of "Content-Type" header values, please refer to the ',(0,i.jsx)(s.a,{href:"/docs/es/20-R7/commands/web-send-blob",children:(0,i.jsx)(s.code,{children:"WEB SEND BLOB"})})," documentation."]})}),"\n",(0,i.jsx)(s.h2,{id:"setstatus",children:".setStatus()"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:".setStatus"}),"( ",(0,i.jsx)(s.em,{children:"status"})," : Integer )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Par\xe1metros"}),(0,i.jsx)(s.th,{children:"Tipo"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"status"}),(0,i.jsx)(s.td,{children:"Integer"}),(0,i.jsx)(s.td,{children:"->"}),(0,i.jsx)(s.td,{children:"Estado a definir"})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"descripci\xf3n-4",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(s.p,{children:["La funci\xf3n ",(0,i.jsx)(s.code,{children:".setStatus()"})," establece la propiedad ",(0,i.jsx)(s.code,{children:"status"})," con el ",(0,i.jsx)(s.em,{children:"status"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["If ",(0,i.jsx)(s.em,{children:"status"})," is not an integer value, an error is raised."]}),"\n",(0,i.jsxs)(s.p,{children:["For a list of HTTP status codes, please refer the ",(0,i.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes",children:"HTTP status code list on Wikipedia"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"status",children:".status"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"status"})," : Integer"]}),"\n",(0,i.jsx)(s.h4,{id:"descripci\xf3n-5",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(s.p,{children:["La propiedad ",(0,i.jsx)(s.code,{children:".status"})," contiene el estado actual del mensaje saliente. This property can be set using the ",(0,i.jsx)(s.a,{href:"setstatus",children:(0,i.jsx)(s.code,{children:"setStatus()"})})," function."]})]})}function h(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return r}});var t=n(667294);let i={},d=t.createContext(i);function r(e){let s=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);