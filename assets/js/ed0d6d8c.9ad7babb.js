"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48717"],{476979:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/soap-declaration","title":"SOAP DECLARATION","description":"SOAP DECLARATION ( variable ; type ; input_output {; alias} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/soap-declaration.md","sourceDirName":"commands-legacy","slug":"/commands/soap-declaration","permalink":"/docs/20-R8/commands/soap-declaration","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsoap-declaration.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"soap-declaration","title":"SOAP DECLARATION","slug":"/commands/soap-declaration","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Web Services (Server)","permalink":"/docs/20-R8/commands/theme/Web-Services-Server"},"next":{"title":"SOAP Get info","permalink":"/docs/20-R8/commands/soap-get-info"}}'),r=t("785893"),i=t("250065");let d={id:"soap-declaration",title:"SOAP DECLARATION",slug:"/commands/soap-declaration",displayed_sidebar:"docs"},l=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Use of XML types",id:"use-of-xml-types",level:3},{value:"COMPILER_WEB method",id:"compiler_web-method",level:3},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"Example 4",id:"example-4",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",types:"types",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SOAP DECLARATION"})," ( ",(0,r.jsx)(n.em,{children:"variable"})," ; ",(0,r.jsx)(n.em,{children:"type"})," ; input_output {; ",(0,r.jsx)(n.em,{children:"alias"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"variable"}),(0,r.jsx)(n.td,{children:"Variable"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Variable referring to an incoming or outgoing SOAP argument"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"type"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"4D type to which the argument points"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"input_output"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"1 = SOAP Input, 2 = SOAP Output"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"alias"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Name published for this argument during SOAP exchanges"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"The SOAP DECLARATION command explicitly declares the type of parameters used in a 4D method published as a Web Service."}),"\n",(0,r.jsxs)(n.p,{children:["When a method is published as a Web Service, the standard parameters ",(0,r.jsx)(n.em,{children:"$0"}),", ",(0,r.jsx)(n.em,{children:"$1"}),"... ",(0,r.jsx)(n.em,{children:"$n"})," describe the parameters of the Web Service to the outside world (more particularly in the WSDL file). The SOAP protocol requires that parameters be explicitly named; 4D uses the names \u201CFourD_arg0, FourD_arg1 ... FourD_argn\u201D by default."]}),"\n",(0,r.jsx)(n.p,{children:"This default operation can nevertheless prove to be problematic for the following reasons:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["It is not possible to declare ",(0,r.jsx)(n.em,{children:"$0"})," or ",(0,r.jsx)(n.em,{children:"$1"}),", ",(0,r.jsx)(n.em,{children:"$2"}),", etc. as an array. Therefore, it is necessary to use pointers; however, in this case, the type of values must be known for the generation of the WSDL file."]}),"\n",(0,r.jsx)(n.li,{children:"It can be useful or necessary to customize the parameter names (incoming and outgoing)."}),"\n",(0,r.jsx)(n.li,{children:"You may want to use parameters such as XML structures and DOM references."}),"\n",(0,r.jsx)(n.li,{children:"It may also be necessary to retur values with a size greater than 32 KB (limit for Text arguments in databases that are in non-Unicode mode)."}),"\n",(0,r.jsxs)(n.li,{children:["Finally, this operation makes it impossible to return more than one value per RPC call (in ",(0,r.jsx)(n.em,{children:"$0"}),")."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The SOAP DECLARATION command lets you be free from these limits. You can execute this command for each incoming and outgoing parameter to assign it a name and a type."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," Even when the this command is used, it is still necessary to declare 4D variables and arrays in the Compiler_Web method using commands of the \u201C",(0,r.jsx)(n.em,{children:"Compiler"}),"\u201D theme."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"variable"}),", pass the 4D variable to be referred to when calling the Web Service."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Warning:"})," You can only refer to process variables or 4D method arguments (",(0,r.jsx)(n.em,{children:"$0"})," to ",(0,r.jsx)(n.em,{children:"$n"}),"). Local and interprocess variables cannot be used."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"On the client side, if you subscribe to this type of Web Service with 4D, the Web Services Wizard will of course generate a Text type variable. To be able to use it, you just need to re-type this return variable as a BLOB in the proxy method."}),"\n",(0,r.jsxs)(n.li,{children:["This command does not support blob objects (4D.Blob type). See ",(0,r.jsx)(n.em,{children:"Passing blobs and blob objects to 4D commands"})," on developer.4d.com."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"type"}),", pass the corresponding 4D type. Most types of 4D variables and arrays can be used. You can use the following predefined constants, located in the \u201C",(0,r.jsx)(n.em,{children:"Field and Variable Types"}),"\u201D theme, as well as, for XML types, two constants of the ",(0,r.jsx)(n.em,{children:"Web Services (Server)"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Boolean array"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"22"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Date array"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"17"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Integer array"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"15"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is BLOB"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"30"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is Boolean"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"6"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is date"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is integer"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is longint"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is real"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is string var"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"24"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is text"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is time"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"11"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"LongInt array"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"16"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Real array"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"14"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"String array"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"21"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"18"})]})]})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is DOM reference"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"37"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is XML"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"36"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"input_output"}),", pass a value indicating whether the processed parameter is \u201Cincoming\u201D (i.e. corresponding to a value received by the method) or \u201Coutgoing\u201D (i.e. corresponding to a value returned by the method). You can use the following predefined constants, located in the ",(0,r.jsx)(n.em,{children:"Web Services (Server)"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SOAP input"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SOAP output"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"use-of-xml-types",children:"Use of XML types"}),"\n",(0,r.jsx)(n.p,{children:'You can declare variables of the "XML structure" and "DOM reference" type, both incoming and outgoing, via the Is XML and Is DOM reference constants. When parameters of this type are specified, no processing or encoding is applied to them and the data are transmitted "as is" (see example 5).'}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Outgoing parameters:\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Is XML indicates that the parameter contains an XML structure,"}),"\n",(0,r.jsxs)(n.li,{children:["Is DOM reference indicates that the parameter contains the DOM reference of an XML structure. In this case, inserting the XML structure into the SOAP message is equivalent to executing the ",(0,r.jsx)(n.a,{href:"/docs/20-R8/commands/dom-export-to-var",children:"DOM EXPORT TO VAR"})," command."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," In the case of DOM references used as outgoing parameters, it is recommended to use global references, created, for example, on startup and closed when the application is closed. In fact, a DOM reference created within the Web Service itself cannot be closed with ",(0,r.jsx)(n.a,{href:"/docs/20-R8/commands/dom-close-xml",children:"DOM CLOSE XML"}),", otherwise the Web Service no longer returns anything. Multiple calls to the Web Service therefore involve creating multiple unclosed DOM references, which can lead to memory saturation"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Incoming parameters:\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Is XML indicates that the parameter must receive an XML argument sent by the SOAP client."}),"\n",(0,r.jsx)(n.li,{children:"Is DOM reference indicates that the parameter must receive the DOM reference of an XML structure corresponding to the XML argument sent by the SOAP client."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:['Modification of the WSDL: These XML structures will be declared by 4D as the "anyType" type (undetermined) in the WSDL. If you want to type an XML structure precisely, you must save the WSDL file and manually add the desired data schema in the ',(0,r.jsx)(n.types,{children:" section of the WSDL"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"compiler_web-method",children:"COMPILER_WEB method"}),"\n",(0,r.jsx)(n.p,{children:"Incoming SOAP arguments referred to using 4D variables (and not 4D method arguments) must first be declared in the COMPILER_WEB project method. In fact, the use of process variables in Web Services methods requires that they be declared before the method is called. The COMPILER_WEB project method is called, if it exists, for each SOAP request accepted. By default, the COMPILER_WEB method does not exist. You must specifically create it."}),"\n",(0,r.jsxs)(n.p,{children:["Note that the COMPILER_WEB method is also called by the 4D Web server when receiving \u201Cconventional\u201D Web requests of the POST type (see ",(0,r.jsx)(n.em,{children:"URLs and Form Actions"})," section)."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"alias"}),", pass the name of the argument as it must appear in the WSDL and in the SOAP exchanges."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Warning:"})," This name must be unique in the RPC call (both input and output parameters taken together), otherwise, only the last declaration will be taken into account by 4D."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The argument names must not begin with a number nor contain spaces. Moreover, to avoid any risks of incompatibility, it is recommended to not use extended characters (such as accented characters).",(0,r.jsx)(n.br,{}),"\nIf the ",(0,r.jsx)(n.em,{children:"alias"})," parameter is omitted, 4D will use, by default, the name of the variable or FourD_argN for the 4D method arguments (",(0,r.jsx)(n.em,{children:"$0"})," to ",(0,r.jsx)(n.em,{children:"$n"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The ",(0,r.jsx)(n.strong,{children:"SOAP DECLARATION"})," command must be included in the method published as a Web Service. It is not possible to call it from another method."]}),"\n",(0,r.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(n.p,{children:"This example specifies a parameter name:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// In the COMPILER_WEB method\n\xa0var $1 : Integer\n\xa0\n\xa0\xa0// In the Web Service method\n\xa0\xa0// During generation of the WSDL file and SOAP calls, the word\n\xa0\xa0// zipcode will be used instead of fourD_arg1\n\xa0SOAP DECLARATION($1;Is longint;SOAP input;"zipcode")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(n.p,{children:"This example retrieves an array of zip codes in the form of longints:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//In the COMPILER_WEB method\n\xa0ARRAY LONGINT(codes;0)\n\xa0\n\xa0\xa0//In the Web service method\n\xa0SOAP DECLARATION(codes;LongInt array;SOAP input;"in_codes")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,r.jsx)(n.p,{children:"This example refers to two return values without specifying an argument name:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0SOAP DECLARATION(ret1;Is longint;SOAP output)\n\xa0SOAP DECLARATION(ret2;Is longint;SOAP output)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"example-4",children:"Example 4"}),"\n",(0,r.jsx)(n.p,{children:"This example illustrates the results of different types of declarations:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ALL RECORDS([Contact])\n\xa0\n\xa0\xa0//Build an XML structure from the Contacts selection and store the XML in a BLOB\n\xa0var ws_vx_xmlBlob : Blob\n\xa0getContactsXML(->ws_vx_xmlBlob)\n\xa0\xa0//Retrieve the XML structure in a text variable\n\xa0var ws_vt_xml : Text\n\xa0ws_vt_xml:=BLOB to text(ws_vx_xmlBlob;UTF8 text without length)\n\xa0\xa0//Retrieve a DOM reference to the XML structure\n\xa0var ws_vt_xmlRef : Text\n\xa0ws_vt_xmlRef:=DOM Parse XML variable(ws_vt_xml)\n\xa0\n\xa0\xa0//Test the various declarations\n\xa0SOAP DECLARATION(ws_vx_xmlBlob;Is BLOB;SOAP output;"contactListsX")\n\xa0\xa0//The XML is converted into Base64 by 4D\n\xa0\n\xa0SOAP DECLARATION(ws_vt_xml;Is text;SOAP output;"contactListsText")\n\xa0\xa0//The XML is converted into text by 4D (< > become entities)\n\xa0\n\xa0SOAP DECLARATION(ws_vt_xml;Is XML;SOAP output;"xmlContacts")\n\xa0\xa0//The XML is passed as XML text\n\xa0\n\xa0SOAP DECLARATION(ws_vx_xmlBlob;Is XML;SOAP output;"blobContacts")\n\xa0\xa0//The XML is passed as an XML BLOB\n\xa0\n\xa0SOAP DECLARATION(ws_vt_xmlRef;Is DOM reference;SOAP output;"contactByRef")\n\xa0\xa0//The XML is passed as a reference\n'})}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/20-R8/commands/is-data-file-locked",children:"Is data file locked"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R8/commands/soap-get-info",children:"SOAP Get info"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R8/commands/soap-send-fault",children:"SOAP SEND FAULT"})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"782"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var s=t(667294);let r={},i=s.createContext(r);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);