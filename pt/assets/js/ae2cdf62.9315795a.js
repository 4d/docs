"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22914],{232146:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=n(474848),r=n(28453);const i={id:"OutGoingMessageClass",title:"OutGoingMessage"},d=void 0,o={id:"API/OutGoingMessageClass",title:"OutGoingMessage",description:"The 4D.OutGoingMessage class allows you to build messages to be returned by your application functions in response to REST requests. If the response is of type 4D.OutGoingMessage, the REST server does not return an object but the object instance of the OutgoingMessage class.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/API/OutGoingMessageClass.md",sourceDirName:"API",slug:"/API/OutGoingMessageClass",permalink:"/docs/pt/API/OutGoingMessageClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FOutGoingMessageClass.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"OutGoingMessageClass",title:"OutGoingMessage"},sidebar:"docs",previous:{title:"MailAttachment",permalink:"/docs/pt/API/MailAttachmentClass"},next:{title:"POP3Transporter",permalink:"/docs/pt/API/POP3TransporterClass"}},l={},c=[{value:"Exemplo",id:"exemplo",level:3},{value:"OutGoingMessage Object",id:"outgoingmessage-object",level:3},{value:".body",id:"body",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:".headers",id:"headers",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:4},{value:".setBody()",id:"setbody",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-2",level:4},{value:".setHeader()",id:"setheader",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-3",level:4},{value:".setStatus()",id:"setstatus",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-4",level:4},{value:".status",id:"status",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-5",level:4}];function h(e){const s={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"4D.OutGoingMessage"})," class allows you to build messages to be returned by your application functions in response to ",(0,t.jsx)(s.a,{href:"/docs/pt/REST/REST_requests",children:"REST requests"}),". If the response is of type ",(0,t.jsx)(s.code,{children:"4D.OutGoingMessage"}),", the REST server does not return an object but the object instance of the ",(0,t.jsx)(s.code,{children:"OutgoingMessage"})," class."]}),"\n",(0,t.jsxs)(s.p,{children:["Typically, this class can be used in functions declared with the ",(0,t.jsx)(s.a,{href:"/docs/pt/ORDA/ordaClasses#onhttpget-keyword",children:(0,t.jsx)(s.code,{children:"onHttpGet"})})," keyword and designed to handle HTTP GET requests. Such requests are used, for example, to implement features such as download file, generate and download picture as well as receiving any content-type via a browser."]}),"\n",(0,t.jsxs)(s.p,{children:["An instance of this class is built on 4D Server and can be sent to the browser by the ",(0,t.jsx)(s.a,{href:"/docs/pt/REST/gettingStarted",children:"4D REST Server"})," only. This class allows to use other technologies than HTTP (e.g. mobile)."]}),"\n",(0,t.jsxs)(s.details,{children:[(0,t.jsx)(s.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Release"}),(0,t.jsx)(s.th,{children:"Mudan\xe7as"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"20 R7"}),(0,t.jsx)(s.td,{children:"Classe adicionada"})]})})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsxs)(s.p,{children:["In this example, a ",(0,t.jsx)(s.code,{children:"getFile()"})," function is implemented in the ",(0,t.jsx)(s.a,{href:"/docs/pt/ORDA/ordaClasses#datastore-class",children:"Datastore class"})," and ",(0,t.jsx)(s.a,{href:"/docs/pt/ORDA/ordaClasses#onhttpget-keyword",children:"can be called"})," by a REST request. The purpose is to return a ",(0,t.jsx)(s.strong,{children:"testFile.pdf"})," file as a response to the request:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'Class extends DataStoreImplementation\n\nexposed onHTTPGet Function getFile() : 4D.OutgoingMessage\n\t\n\tvar $result:=4D.OutgoingMessage.new()\n\tvar $file:=File("/RESOURCES/testFile.pdf")\n\t\n\t$result.setBody($file.getContent())  // This is binary content\n\t$result.setHeader("Content-Type"; "application/pdf")\n\treturn $result\n'})}),"\n",(0,t.jsx)(s.h3,{id:"outgoingmessage-object",children:"OutGoingMessage Object"}),"\n",(0,t.jsx)(s.p,{children:"4D.OutGoingMessage objects provide the following properties and functions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsx)(s.tr,{children:(0,t.jsx)(s.th,{})})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsx)(s.tr,{children:(0,t.jsxs)(s.td,{children:[(0,t.jsxs)(s.a,{href:"#body",children:[(0,t.jsx)(s.strong,{children:"body"})," : any"]}),(0,t.jsx)(s.br,{}),"the outgoing message body"]})}),(0,t.jsx)(s.tr,{children:(0,t.jsxs)(s.td,{children:[(0,t.jsxs)(s.a,{href:"#headers",children:[(0,t.jsx)(s.strong,{children:"headers"})," : Object"]}),(0,t.jsx)(s.br,{}),"the current headers of the outgoing message as key/value pairs"]})}),(0,t.jsx)(s.tr,{children:(0,t.jsxs)(s.td,{children:[(0,t.jsxs)(s.a,{href:"#setbody",children:[(0,t.jsx)(s.strong,{children:".setBody"}),"( ",(0,t.jsx)(s.em,{children:"body"})," : any )"]}),(0,t.jsx)(s.br,{}),"sets the outgoing message ",(0,t.jsx)(s.em,{children:"body"})]})}),(0,t.jsx)(s.tr,{children:(0,t.jsxs)(s.td,{children:[(0,t.jsxs)(s.a,{href:"#setheader",children:[(0,t.jsx)(s.strong,{children:".setHeader"}),"( ",(0,t.jsx)(s.em,{children:"key"})," : Text ; ",(0,t.jsx)(s.em,{children:"value"})," : Text )"]}),(0,t.jsx)(s.br,{}),"sets the outgoing message header ",(0,t.jsx)(s.em,{children:"key"})," with the provided ",(0,t.jsx)(s.em,{children:"value"})]})}),(0,t.jsx)(s.tr,{children:(0,t.jsxs)(s.td,{children:[(0,t.jsxs)(s.a,{href:"#setstatus",children:[(0,t.jsx)(s.strong,{children:".setStatus"}),"( ",(0,t.jsx)(s.em,{children:"status"})," : Integer )"]}),(0,t.jsx)(s.br,{}),"sets the ",(0,t.jsx)(s.code,{children:"status"})," property with the given ",(0,t.jsx)(s.em,{children:"status"})]})}),(0,t.jsx)(s.tr,{children:(0,t.jsxs)(s.td,{children:[(0,t.jsxs)(s.a,{href:"#status",children:[(0,t.jsx)(s.strong,{children:"status"})," : Integer"]}),(0,t.jsx)(s.br,{}),"the current status of the outgoing message"]})})]})]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["A 4D.OutGoingMessage object is a ",(0,t.jsx)(s.a,{href:"/docs/pt/Concepts/shared",children:"non-sharable"})," object."]})}),"\n",(0,t.jsx)(s.h2,{id:"body",children:".body"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"body"})," : any"]}),"\n",(0,t.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:".body"})," property contains the outgoing message body. The following data types are supported in the ",(0,t.jsx)(s.code,{children:".body"})," property:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"text"}),"\n",(0,t.jsx)(s.li,{children:"blob"}),"\n",(0,t.jsx)(s.li,{children:"object"}),"\n",(0,t.jsx)(s.li,{children:"image"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:".body"})," property is read-write."]}),"\n",(0,t.jsxs)(s.p,{children:["You can also set the ",(0,t.jsx)(s.code,{children:".body"})," property using the ",(0,t.jsx)(s.a,{href:"#setbody",children:(0,t.jsx)(s.code,{children:"setBody()"})})," function, in which case the ",(0,t.jsx)(s.code,{children:"content-type"})," header is automatically set."]}),"\n",(0,t.jsx)(s.h2,{id:"headers",children:".headers"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"headers"})," : Object"]}),"\n",(0,t.jsx)(s.h4,{id:"descri\xe7\xe3o-1",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:".headers"})," property contains the current headers of the outgoing message as key/value pairs."]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:".headers"})," property is read-only. To set a header, use the ",(0,t.jsx)(s.a,{href:"#setheader",children:(0,t.jsx)(s.code,{children:"setHeader()"})})," function."]}),"\n",(0,t.jsx)(s.h2,{id:"setbody",children:".setBody()"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:".setBody"}),"( ",(0,t.jsx)(s.em,{children:"body"})," : any )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Par\xe2metro"}),(0,t.jsx)(s.th,{children:"Tipo"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"body"}),(0,t.jsx)(s.td,{children:"any"}),(0,t.jsx)(s.td,{children:"->"}),(0,t.jsx)(s.td,{children:"Body of the outgoing message"})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"descri\xe7\xe3o-2",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:".setBody()"})," function sets the outgoing message ",(0,t.jsx)(s.em,{children:"body"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["The following data types are supported in the ",(0,t.jsx)(s.em,{children:"body"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Text"}),"\n",(0,t.jsx)(s.li,{children:"Blob"}),"\n",(0,t.jsx)(s.li,{children:"Object"}),"\n",(0,t.jsx)(s.li,{children:"Imagem"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["When this function is used, the content-type header is automatically set depending on the ",(0,t.jsx)(s.em,{children:"body"})," type:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Content-Type:text/plain if the body is a Text"}),"\n",(0,t.jsx)(s.li,{children:"Content-Type:application/octet-stream if body is a Blob"}),"\n",(0,t.jsx)(s.li,{children:"Content-Type:application/json if body is an Object"}),"\n",(0,t.jsx)(s.li,{children:"Content-Type:image/jpeg, image/gif... if body is an Image"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["If ",(0,t.jsx)(s.em,{children:"body"})," is not of a supported value type, an error is returned."]}),"\n",(0,t.jsx)(s.h2,{id:"setheader",children:".setHeader()"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:".setHeader"}),"( ",(0,t.jsx)(s.em,{children:"key"})," : Text ; ",(0,t.jsx)(s.em,{children:"value"})," : Text )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Par\xe2metro"}),(0,t.jsx)(s.th,{children:"Tipo"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"|"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"->"}),(0,t.jsx)(s.td,{children:"Header property to set"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"value"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"->"}),(0,t.jsx)(s.td,{children:"Value of the header property"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"descri\xe7\xe3o-3",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:".setHeader()"})," function sets the outgoing message header ",(0,t.jsx)(s.em,{children:"key"})," with the provided ",(0,t.jsx)(s.em,{children:"value"}),". If both parameters are not Text values, an error is raised."]}),"\n",(0,t.jsxs)(s.p,{children:["When returning a 4D.OutGoingMessage object instance, 4D automatically sets some headers (e.g. ",(0,t.jsx)(s.code,{children:"Set-Cookie"})," with ",(0,t.jsx)(s.code,{children:"WASID4D=..."})," and ",(0,t.jsx)(s.code,{children:"4DSID__ProjectName_=...."}),")."]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["If you set a ",(0,t.jsx)(s.em,{children:"value"}),' for the "Content-Type" header ',(0,t.jsx)(s.em,{children:"key"}),", make sure you call this function after the call to ",(0,t.jsx)(s.a,{href:"#setbody",children:(0,t.jsx)(s.code,{children:"setBody()"})}),", because ",(0,t.jsx)(s.code,{children:"setBody()"}),' automatically fills this header. For a list of "Content-Type" header values, please refer to the ',(0,t.jsx)(s.a,{href:"/docs/pt/commands/web-send-blob",children:(0,t.jsx)(s.code,{children:"WEB SEND BLOB"})})," documentation."]})}),"\n",(0,t.jsx)(s.h2,{id:"setstatus",children:".setStatus()"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:".setStatus"}),"( ",(0,t.jsx)(s.em,{children:"status"})," : Integer )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Par\xe2metro"}),(0,t.jsx)(s.th,{children:"Tipo"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"status"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"->"}),(0,t.jsx)(s.td,{children:"Status to set"})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"descri\xe7\xe3o-4",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:".setStatus()"})," function sets the ",(0,t.jsx)(s.code,{children:"status"})," property with the given ",(0,t.jsx)(s.em,{children:"status"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["If ",(0,t.jsx)(s.em,{children:"status"})," is not an integer value, an error is raised."]}),"\n",(0,t.jsxs)(s.p,{children:["For a list of HTTP status codes, please refer the ",(0,t.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes",children:"HTTP status code list on Wikipedia"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"status",children:".status"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"status"})," : Integer"]}),"\n",(0,t.jsx)(s.h4,{id:"descri\xe7\xe3o-5",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:".status"})," property contains the current status of the outgoing message. This property can be set using the ",(0,t.jsx)(s.a,{href:"setstatus",children:(0,t.jsx)(s.code,{children:"setStatus()"})})," function."]})]})}function a(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>o});var t=n(296540);const r={},i=t.createContext(r);function d(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);