"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67101"],{500823:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>a,contentTitle:()=>o});var t=JSON.parse('{"id":"API/OutgoingMessageClass","title":"OutgoingMessage","description":"The 4D.OutgoingMessage class allows you to build messages to be returned by your application functions in response to REST requests. If the response is of type 4D.OutgoingMessage, the REST server does not return an object but the object instance of the OutgoingMessage class.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/API/OutgoingMessageClass.md","sourceDirName":"API","slug":"/API/OutgoingMessageClass","permalink":"/docs/pt/20-R7/API/OutgoingMessageClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FOutgoingMessageClass.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"OutgoingMessageClass","title":"OutgoingMessage"},"sidebar":"docs","previous":{"title":"MailAttachment","permalink":"/docs/pt/20-R7/API/MailAttachmentClass"},"next":{"title":"POP3Transporter","permalink":"/docs/pt/20-R7/API/POP3TransporterClass"}}'),r=n("785893"),d=n("250065");let i={id:"OutgoingMessageClass",title:"OutgoingMessage"},o=void 0,l={},a=[{value:"Exemplo",id:"exemplo",level:3},{value:"Objeto OutgoingMessage",id:"objeto-outgoingmessage",level:3},{value:".body",id:"body",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:".headers",id:"headers",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:4},{value:".setBody()",id:"setbody",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-2",level:4},{value:".setHeader()",id:"setheader",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-3",level:4},{value:".setStatus()",id:"setstatus",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-4",level:4},{value:".status",id:"status",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-5",level:4}];function c(e){let s={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"4D.OutgoingMessage"})," class allows you to build messages to be returned by your application functions in response to ",(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/REST/REST_requests",children:"REST requests"}),". If the response is of type ",(0,r.jsx)(s.code,{children:"4D.OutgoingMessage"}),", the REST server does not return an object but the object instance of the ",(0,r.jsx)(s.code,{children:"OutgoingMessage"})," class."]}),"\n",(0,r.jsxs)(s.p,{children:["Typically, this class can be used in functions declared with the ",(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/ORDA/ordaClasses#onhttpget-keyword",children:(0,r.jsx)(s.code,{children:"onHttpGet"})})," keyword and designed to handle HTTP GET requests. Such requests are used, for example, to implement features such as download file, generate and download picture as well as receiving any content-type via a browser."]}),"\n",(0,r.jsxs)(s.p,{children:["An instance of this class is built on 4D Server and can be sent to the browser by the ",(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/REST/gettingStarted",children:"4D REST Server"})," only. This class allows to use other technologies than HTTP (e.g. mobile)."]}),"\n",(0,r.jsxs)(s.details,{children:[(0,r.jsx)(s.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Release"}),(0,r.jsx)(s.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"20 R7"}),(0,r.jsx)(s.td,{children:"Classe adicionada"})]})})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsxs)(s.p,{children:["In this example, a ",(0,r.jsx)(s.code,{children:"getFile()"})," function is implemented in the ",(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/ORDA/ordaClasses#datastore-class",children:"Datastore class"})," and ",(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/ORDA/ordaClasses#onhttpget-keyword",children:"can be called"})," by a REST request. The purpose is to return a ",(0,r.jsx)(s.strong,{children:"testFile.pdf"})," file as a response to the request:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'Class extends DataStoreImplementation\n\nexposed onHTTPGet Function getFile() : 4D.OutgoingMessage\n	\n	var $result:=4D.OutgoingMessage.new()\n	var $file:=File("/RESOURCES/testFile.pdf")\n	\n	$result.setBody($file.getContent())  // This is binary content\n	$result.setHeader("Content-Type"; "application/pdf")\n	return $result\n'})}),"\n",(0,r.jsx)(s.h3,{id:"objeto-outgoingmessage",children:"Objeto OutgoingMessage"}),"\n",(0,r.jsx)(s.p,{children:"4D.OutgoingMessage objects provide the following properties and functions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{})})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#body",children:[(0,r.jsx)(s.strong,{children:"body"})," : any"]}),(0,r.jsx)(s.br,{}),"the outgoing message body"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#headers",children:[(0,r.jsx)(s.strong,{children:"headers"})," : Object"]}),(0,r.jsx)(s.br,{}),"the current headers of the outgoing message as key/value pairs"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#setbody",children:[(0,r.jsx)(s.strong,{children:".setBody"}),"( ",(0,r.jsx)(s.em,{children:"body"})," : any )"]}),(0,r.jsx)(s.br,{}),"define a mensagem de sa\xedda ",(0,r.jsx)(s.em,{children:"body"})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#setheader",children:[(0,r.jsx)(s.strong,{children:".setHeader"}),"( ",(0,r.jsx)(s.em,{children:"key"})," : Text ; ",(0,r.jsx)(s.em,{children:"value"})," : Text )"]}),(0,r.jsx)(s.br,{}),"sets the outgoing message header ",(0,r.jsx)(s.em,{children:"key"})," with the provided ",(0,r.jsx)(s.em,{children:"value"})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#setstatus",children:[(0,r.jsx)(s.strong,{children:".setStatus"}),"( ",(0,r.jsx)(s.em,{children:"status"})," : Integer )"]}),(0,r.jsx)(s.br,{}),"sets the ",(0,r.jsx)(s.code,{children:"status"})," property with the given ",(0,r.jsx)(s.em,{children:"status"})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#status",children:[(0,r.jsx)(s.strong,{children:"status"})," : Integer"]}),(0,r.jsx)(s.br,{})," o status atual da mensagem de sa\xedda"]})})]})]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["Um objeto 4D.OutgoingMessage \xe9 um objeto ",(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/Concepts/shared",children:"n\xe3o compartilh\xe1vel"}),"."]})}),"\n",(0,r.jsx)(s.h2,{id:"body",children:".body"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"body"})," : any"]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".body"})," property contains the outgoing message body. The following data types are supported in the ",(0,r.jsx)(s.code,{children:".body"})," property:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"text"}),"\n",(0,r.jsx)(s.li,{children:"blob"}),"\n",(0,r.jsx)(s.li,{children:"object"}),"\n",(0,r.jsx)(s.li,{children:"image"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".body"})," property is read-write."]}),"\n",(0,r.jsxs)(s.p,{children:["Voc\xea tamb\xe9m pode definir a propriedade ",(0,r.jsx)(s.code,{children:".body"})," usando a fun\xe7\xe3o ",(0,r.jsx)(s.a,{href:"#setbody",children:(0,r.jsx)(s.code,{children:"setBody()"})}),", caso em que o cabe\xe7alho ",(0,r.jsx)(s.code,{children:"content-type"})," \xe9 automaticamente definido."]}),"\n",(0,r.jsx)(s.h2,{id:"headers",children:".headers"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"headers"})," : Object"]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o-1",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".headers"})," property contains the current headers of the outgoing message as key/value pairs."]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".headers"})," property is read-only. Para definir um cabe\xe7alho, use a fun\xe7\xe3o ",(0,r.jsx)(s.a,{href:"#setheader",children:(0,r.jsx)(s.code,{children:"setHeader()"})}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"setbody",children:".setBody()"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".setBody"}),"( ",(0,r.jsx)(s.em,{children:"body"})," : any )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe2metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"body"}),(0,r.jsx)(s.td,{children:"any"}),(0,r.jsx)(s.td,{children:"->"}),(0,r.jsx)(s.td,{children:"Body of the outgoing message"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o-2",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["A fun\xe7\xe3o ",(0,r.jsx)(s.code,{children:".setBody()"})," define a mensagem de sa\xedda ",(0,r.jsx)(s.em,{children:"body"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["The following data types are supported in the ",(0,r.jsx)(s.em,{children:"body"}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Text"}),"\n",(0,r.jsx)(s.li,{children:"Blob"}),"\n",(0,r.jsx)(s.li,{children:"Object"}),"\n",(0,r.jsx)(s.li,{children:"Imagem"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["When this function is used, the content-type header is automatically set depending on the ",(0,r.jsx)(s.em,{children:"body"})," type:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Content-Type:text/plain if the body is a Text"}),"\n",(0,r.jsx)(s.li,{children:"Content-Type:application/octet-stream if body is a Blob"}),"\n",(0,r.jsx)(s.li,{children:"Content-Type:application/json if body is an Object"}),"\n",(0,r.jsx)(s.li,{children:"Content-Type:image/jpeg, image/gif... if body is an Image"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["If ",(0,r.jsx)(s.em,{children:"body"})," is not of a supported value type, an error is returned."]}),"\n",(0,r.jsx)(s.h2,{id:"setheader",children:".setHeader()"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".setHeader"}),"( ",(0,r.jsx)(s.em,{children:"key"})," : Text ; ",(0,r.jsx)(s.em,{children:"value"})," : Text )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe2metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"|"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"->"}),(0,r.jsx)(s.td,{children:"Propriedade de cabe\xe7alho para definir"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"value"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"->"}),(0,r.jsx)(s.td,{children:"Value of the header property"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o-3",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".setHeader()"})," function sets the outgoing message header ",(0,r.jsx)(s.em,{children:"key"})," with the provided ",(0,r.jsx)(s.em,{children:"value"}),". If both parameters are not Text values, an error is raised."]}),"\n",(0,r.jsxs)(s.p,{children:["When returning a 4D.OutgoingMessage object instance, 4D automatically sets some headers (e.g. ",(0,r.jsx)(s.code,{children:"Set-Cookie"})," with ",(0,r.jsx)(s.code,{children:"WASID4D=..."})," and ",(0,r.jsx)(s.code,{children:"4DSID__ProjectName_=...."}),")."]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["If you set a ",(0,r.jsx)(s.em,{children:"value"}),' for the "Content-Type" header ',(0,r.jsx)(s.em,{children:"key"}),", make sure you call this function after the call to ",(0,r.jsx)(s.a,{href:"#setbody",children:(0,r.jsx)(s.code,{children:"setBody()"})}),", because ",(0,r.jsx)(s.code,{children:"setBody()"}),' automatically fills this header. For a list of "Content-Type" header values, please refer to the ',(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/commands/web-send-blob",children:(0,r.jsx)(s.code,{children:"WEB SEND BLOB"})})," documentation."]})}),"\n",(0,r.jsx)(s.h2,{id:"setstatus",children:".setStatus()"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".setStatus"}),"( ",(0,r.jsx)(s.em,{children:"status"})," : Integer )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe2metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"status"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"->"}),(0,r.jsx)(s.td,{children:"Status para definir"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o-4",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".setStatus()"})," function sets the ",(0,r.jsx)(s.code,{children:"status"})," property with the given ",(0,r.jsx)(s.em,{children:"status"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["If ",(0,r.jsx)(s.em,{children:"status"})," is not an integer value, an error is raised."]}),"\n",(0,r.jsxs)(s.p,{children:["For a list of HTTP status codes, please refer the ",(0,r.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes",children:"HTTP status code list on Wikipedia"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"status",children:".status"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"status"})," : Integer"]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o-5",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["A propriedade ",(0,r.jsx)(s.code,{children:".status"})," cont\xe9m  o status atual da mensagem de sa\xedda . Essa propriedade pode ser definida com a fun\xe7\xe3o ",(0,r.jsx)(s.a,{href:"setstatus",children:(0,r.jsx)(s.code,{children:"setStatus()"})}),"."]})]})}function h(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return i}});var t=n(667294);let r={},d=t.createContext(r);function i(e){let s=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);