"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["93937"],{799939:function(e,s,n){n.r(s),n.d(s,{default:()=>a,frontMatter:()=>d,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"API/OutgoingMessageClass","title":"OutgoingMessage","description":"The 4D.OutgoingMessage class allows you to build messages to be returned by your application functions in response to REST requests. If the response is of type 4D.OutgoingMessage, the REST server does not return an object but the object instance of the OutgoingMessage class.","source":"@site/versioned_docs/version-20-R7/API/OutgoingMessageClass.md","sourceDirName":"API","slug":"/API/OutgoingMessageClass","permalink":"/docs/20-R7/API/OutgoingMessageClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FOutgoingMessageClass.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"OutgoingMessageClass","title":"OutgoingMessage"},"sidebar":"docs","previous":{"title":"MailAttachment","permalink":"/docs/20-R7/API/MailAttachmentClass"},"next":{"title":"POP3Transporter","permalink":"/docs/20-R7/API/POP3TransporterClass"}}'),i=n("785893"),r=n("250065");let d={id:"OutgoingMessageClass",title:"OutgoingMessage"},l=void 0,o={},c=[{value:"Example",id:"example",level:3},{value:"OutgoingMessage Object",id:"outgoingmessage-object",level:3},{value:".body",id:"body",level:2},{value:"Description",id:"description",level:4},{value:".headers",id:"headers",level:2},{value:"Description",id:"description-1",level:4},{value:".setBody()",id:"setbody",level:2},{value:"Description",id:"description-2",level:4},{value:".setHeader()",id:"setheader",level:2},{value:"Description",id:"description-3",level:4},{value:".setStatus()",id:"setstatus",level:2},{value:"Description",id:"description-4",level:4},{value:".status",id:"status",level:2},{value:"Description",id:"description-5",level:4}];function h(e){let s={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"4D.OutgoingMessage"})," class allows you to build messages to be returned by your application functions in response to ",(0,i.jsx)(s.a,{href:"/docs/20-R7/REST/REST_requests",children:"REST requests"}),". If the response is of type ",(0,i.jsx)(s.code,{children:"4D.OutgoingMessage"}),", the REST server does not return an object but the object instance of the ",(0,i.jsx)(s.code,{children:"OutgoingMessage"})," class."]}),"\n",(0,i.jsxs)(s.p,{children:["Typically, this class can be used in functions declared with the ",(0,i.jsx)(s.a,{href:"/docs/20-R7/ORDA/ordaClasses#onhttpget-keyword",children:(0,i.jsx)(s.code,{children:"onHttpGet"})})," keyword and designed to handle HTTP GET requests. Such requests are used, for example, to implement features such as download file, generate and download picture as well as receiving any content-type via a browser."]}),"\n",(0,i.jsxs)(s.p,{children:["An instance of this class is built on 4D Server and can be sent to the browser by the ",(0,i.jsx)(s.a,{href:"/docs/20-R7/REST/gettingStarted",children:"4D REST Server"})," only. This class allows to use other technologies than HTTP (e.g. mobile)."]}),"\n",(0,i.jsxs)(s.details,{children:[(0,i.jsx)(s.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Release"}),(0,i.jsx)(s.th,{children:"Changes"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"20 R7"}),(0,i.jsx)(s.td,{children:"Class added"})]})})]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(s.p,{children:["In this example, a ",(0,i.jsx)(s.code,{children:"getFile()"})," function is implemented in the ",(0,i.jsx)(s.a,{href:"/docs/20-R7/ORDA/ordaClasses#datastore-class",children:"Datastore class"})," and ",(0,i.jsx)(s.a,{href:"/docs/20-R7/ORDA/ordaClasses#onhttpget-keyword",children:"can be called"})," by a REST request. The purpose is to return a ",(0,i.jsx)(s.strong,{children:"testFile.pdf"})," file as a response to the request:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'Class extends DataStoreImplementation\n\nexposed onHTTPGet Function getFile() : 4D.OutgoingMessage\n	\n	var $result:=4D.OutgoingMessage.new()\n	var $file:=File("/RESOURCES/testFile.pdf")\n	\n	$result.setBody($file.getContent())  // This is binary content\n	$result.setHeader("Content-Type"; "application/pdf")\n	return $result\n'})}),"\n",(0,i.jsx)(s.h3,{id:"outgoingmessage-object",children:"OutgoingMessage Object"}),"\n",(0,i.jsx)(s.p,{children:"4D.OutgoingMessage objects provide the following properties and functions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsx)(s.tr,{children:(0,i.jsx)(s.th,{})})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"#body",children:[(0,i.jsx)(s.strong,{children:"body"})," : any"]}),(0,i.jsx)(s.br,{}),"the outgoing message body"]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"#headers",children:[(0,i.jsx)(s.strong,{children:"headers"})," : Object"]}),(0,i.jsx)(s.br,{}),"the current headers of the outgoing message as key/value pairs"]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"#setbody",children:[(0,i.jsx)(s.strong,{children:".setBody"}),"( ",(0,i.jsx)(s.em,{children:"body"})," : any )"]}),(0,i.jsx)(s.br,{}),"sets the outgoing message ",(0,i.jsx)(s.em,{children:"body"})]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"#setheader",children:[(0,i.jsx)(s.strong,{children:".setHeader"}),"( ",(0,i.jsx)(s.em,{children:"key"})," : Text ; ",(0,i.jsx)(s.em,{children:"value"})," : Text )"]}),(0,i.jsx)(s.br,{}),"sets the outgoing message header ",(0,i.jsx)(s.em,{children:"key"})," with the provided ",(0,i.jsx)(s.em,{children:"value"})]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"#setstatus",children:[(0,i.jsx)(s.strong,{children:".setStatus"}),"( ",(0,i.jsx)(s.em,{children:"status"})," : Integer )"]}),(0,i.jsx)(s.br,{}),"sets the ",(0,i.jsx)(s.code,{children:"status"})," property with the given ",(0,i.jsx)(s.em,{children:"status"})]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"#status",children:[(0,i.jsx)(s.strong,{children:"status"})," : Integer"]}),(0,i.jsx)(s.br,{}),"the current status of the outgoing message"]})})]})]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["A 4D.OutgoingMessage object is a ",(0,i.jsx)(s.a,{href:"/docs/20-R7/Concepts/shared",children:"non-sharable"})," object."]})}),"\n",(0,i.jsx)(s.h2,{id:"body",children:".body"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"body"})," : any"]}),"\n",(0,i.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:".body"})," property contains the outgoing message body. The following data types are supported in the ",(0,i.jsx)(s.code,{children:".body"})," property:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"text"}),"\n",(0,i.jsx)(s.li,{children:"blob"}),"\n",(0,i.jsx)(s.li,{children:"object"}),"\n",(0,i.jsx)(s.li,{children:"image"}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:".body"})," property is read-write."]}),"\n",(0,i.jsxs)(s.p,{children:["You can also set the ",(0,i.jsx)(s.code,{children:".body"})," property using the ",(0,i.jsx)(s.a,{href:"#setbody",children:(0,i.jsx)(s.code,{children:"setBody()"})})," function, in which case the ",(0,i.jsx)(s.code,{children:"content-type"})," header is automatically set."]}),"\n",(0,i.jsx)(s.h2,{id:"headers",children:".headers"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"headers"})," : Object"]}),"\n",(0,i.jsx)(s.h4,{id:"description-1",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:".headers"})," property contains the current headers of the outgoing message as key/value pairs."]}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:".headers"})," property is read-only. To set a header, use the ",(0,i.jsx)(s.a,{href:"#setheader",children:(0,i.jsx)(s.code,{children:"setHeader()"})})," function."]}),"\n",(0,i.jsx)(s.h2,{id:"setbody",children:".setBody()"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:".setBody"}),"( ",(0,i.jsx)(s.em,{children:"body"})," : any )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Parameter"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"body"}),(0,i.jsx)(s.td,{children:"any"}),(0,i.jsx)(s.td,{children:"->"}),(0,i.jsx)(s.td,{children:"Body of the outgoing message"})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"description-2",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:".setBody()"})," function sets the outgoing message ",(0,i.jsx)(s.em,{children:"body"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["The following data types are supported in the ",(0,i.jsx)(s.em,{children:"body"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Text"}),"\n",(0,i.jsx)(s.li,{children:"Blob"}),"\n",(0,i.jsx)(s.li,{children:"Object"}),"\n",(0,i.jsx)(s.li,{children:"Image"}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["When this function is used, the content-type header is automatically set depending on the ",(0,i.jsx)(s.em,{children:"body"})," type:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Content-Type:text/plain if the body is a Text"}),"\n",(0,i.jsx)(s.li,{children:"Content-Type:application/octet-stream if body is a Blob"}),"\n",(0,i.jsx)(s.li,{children:"Content-Type:application/json if body is an Object"}),"\n",(0,i.jsx)(s.li,{children:"Content-Type:image/jpeg, image/gif... if body is an Image"}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["If ",(0,i.jsx)(s.em,{children:"body"})," is not of a supported value type, an error is returned."]}),"\n",(0,i.jsx)(s.h2,{id:"setheader",children:".setHeader()"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:".setHeader"}),"( ",(0,i.jsx)(s.em,{children:"key"})," : Text ; ",(0,i.jsx)(s.em,{children:"value"})," : Text )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Parameter"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"key"}),(0,i.jsx)(s.td,{children:"Text"}),(0,i.jsx)(s.td,{children:"->"}),(0,i.jsx)(s.td,{children:"Header property to set"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"value"}),(0,i.jsx)(s.td,{children:"Text"}),(0,i.jsx)(s.td,{children:"->"}),(0,i.jsx)(s.td,{children:"Value of the header property"})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"description-3",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:".setHeader()"})," function sets the outgoing message header ",(0,i.jsx)(s.em,{children:"key"})," with the provided ",(0,i.jsx)(s.em,{children:"value"}),". If both parameters are not Text values, an error is raised."]}),"\n",(0,i.jsxs)(s.p,{children:["When returning a 4D.OutgoingMessage object instance, 4D automatically sets some headers (e.g. ",(0,i.jsx)(s.code,{children:"Set-Cookie"})," with ",(0,i.jsx)(s.code,{children:"WASID4D=..."})," and ",(0,i.jsx)(s.code,{children:"4DSID__ProjectName_=...."}),")."]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["If you set a ",(0,i.jsx)(s.em,{children:"value"}),' for the "Content-Type" header ',(0,i.jsx)(s.em,{children:"key"}),", make sure you call this function after the call to ",(0,i.jsx)(s.a,{href:"#setbody",children:(0,i.jsx)(s.code,{children:"setBody()"})}),", because ",(0,i.jsx)(s.code,{children:"setBody()"}),' automatically fills this header. For a list of "Content-Type" header values, please refer to the ',(0,i.jsx)(s.a,{href:"/docs/20-R7/commands/web-send-blob",children:(0,i.jsx)(s.code,{children:"WEB SEND BLOB"})})," documentation."]})}),"\n",(0,i.jsx)(s.h2,{id:"setstatus",children:".setStatus()"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:".setStatus"}),"( ",(0,i.jsx)(s.em,{children:"status"})," : Integer )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Parameter"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"status"}),(0,i.jsx)(s.td,{children:"Integer"}),(0,i.jsx)(s.td,{children:"->"}),(0,i.jsx)(s.td,{children:"Status to set"})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"description-4",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:".setStatus()"})," function sets the ",(0,i.jsx)(s.code,{children:"status"})," property with the given ",(0,i.jsx)(s.em,{children:"status"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["If ",(0,i.jsx)(s.em,{children:"status"})," is not an integer value, an error is raised."]}),"\n",(0,i.jsxs)(s.p,{children:["For a list of HTTP status codes, please refer the ",(0,i.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes",children:"HTTP status code list on Wikipedia"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"status",children:".status"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"status"})," : Integer"]}),"\n",(0,i.jsx)(s.h4,{id:"description-5",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:".status"})," property contains the current status of the outgoing message. This property can be set using the ",(0,i.jsx)(s.a,{href:"setstatus",children:(0,i.jsx)(s.code,{children:"setStatus()"})})," function."]})]})}function a(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return d}});var t=n(667294);let i={},r=t.createContext(i);function d(e){let s=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);