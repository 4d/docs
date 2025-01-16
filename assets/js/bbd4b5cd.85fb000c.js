"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["47634"],{18843:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>d,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"WebServer/http-request-handler","title":"HTTP Request handler","description":"By default, HTTP requests received by the 4D web server are handled through built-in processing features or the REST server.","source":"@site/versioned_docs/version-20-R8/WebServer/http-request-handler.md","sourceDirName":"WebServer","slug":"/WebServer/http-request-handler","permalink":"/docs/WebServer/http-request-handler","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2Fhttp-request-handler.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"http-request-handler","title":"HTTP Request handler"},"sidebar":"docs","previous":{"title":"Processing HTTP requests","permalink":"/docs/WebServer/httpRequests"},"next":{"title":"Allowing project methods","permalink":"/docs/WebServer/allowProject"}}'),t=s("785893"),i=s("250065");let a={id:"http-request-handler",title:"HTTP Request handler"},l=void 0,d={},o=[{value:"Requirements",id:"requirements",level:2},{value:"HTTPHandlers.json File",id:"httphandlersjson-file",level:2},{value:"Handler definition",id:"handler-definition",level:2},{value:"URL patterns",id:"url-patterns",level:3},{value:"Pattern matching",id:"pattern-matching",level:4},{value:"Forbidden patterns",id:"forbidden-patterns",level:4},{value:"Class and method",id:"class-and-method",level:3},{value:"Verbs",id:"verbs",level:3},{value:"Example",id:"example",level:2},{value:"Request handler code",id:"request-handler-code",level:2},{value:"Function configuration",id:"function-configuration",level:3},{value:"Input: an instance of the 4D.IncomingMessage class",id:"input-an-instance-of-the-4dincomingmessage-class",level:3},{value:"Output: an instance of the 4D.OutgoingMessage class",id:"output-an-instance-of-the-4doutgoingmessage-class",level:3},{value:"Example",id:"example-1",level:3},{value:"See also",id:"see-also",level:2}];function c(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["By default, HTTP requests received by the 4D web server are handled through ",(0,t.jsx)(n.a,{href:"/docs/WebServer/httpRequests",children:"built-in processing features"})," or the ",(0,t.jsx)(n.a,{href:"/docs/REST/REST_requests",children:"REST server"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In addition, 4D supports the implementation of ",(0,t.jsx)(n.strong,{children:"custom HTTP Request handlers"}),", allowing you to intercept specific incoming HTTP requests and process them using your own code."]}),"\n",(0,t.jsxs)(n.p,{children:["When a custom HTTP request handler intercepts a request, it is processed directly and no other processing features (e.g. ",(0,t.jsx)(n.a,{href:"/docs/WebServer/authentication#on-web-authentication",children:"On Web authentication"})," or ",(0,t.jsx)(n.a,{href:"/docs/WebServer/httpRequests#on-web-connection",children:"On Web connection"})," database methods) are called."]}),"\n",(0,t.jsx)(n.p,{children:"Custom HTTP request handlers meet various needs, including:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"using a given URL as a resource provider or a file-uploading box (to download or upload various files),"}),"\n",(0,t.jsx)(n.li,{children:"redirecting on specific pages according to a context (user authenticated, privileges granted...),"}),"\n",(0,t.jsx)(n.li,{children:"handle an authentication via oAuth 2.0."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsx)(n.p,{children:"Custom HTTP Request handlers are supported:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["when ",(0,t.jsx)(n.a,{href:"/docs/WebServer/sessions#enabling-web-sessions",children:"scalable sessions"})," are enabled,"]}),"\n",(0,t.jsxs)(n.li,{children:["with the main Web Server only (HTTP Request handlers that may have been defined in ",(0,t.jsx)(n.a,{href:"/docs/WebServer/webServerObject",children:"Web Servers of components"})," are ignored)."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"httphandlersjson-file",children:"HTTPHandlers.json File"}),"\n",(0,t.jsxs)(n.p,{children:["You define your custom HTTP Request handlers in a configuration file named ",(0,t.jsx)(n.strong,{children:"HTTPHandlers.json"})," stored in the ",(0,t.jsx)(n.a,{href:"/docs/Project/architecture#sources",children:(0,t.jsx)(n.code,{children:"Project/Sources"})})," folder."]}),"\n",(0,t.jsx)(n.p,{children:"This file contains all listened URL patterns, the handled verbs, and the code to be called. Handlers are provided as a collection in JSON format."}),"\n",(0,t.jsx)(n.p,{children:"At runtime, the first pattern matching the URL is executed, the others are ignored."}),"\n",(0,t.jsxs)(n.p,{children:["Here is an example of a ",(0,t.jsx)(n.em,{children:"HTTPHandlers.json"})," file contents:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'\n[\n    {\n        "class": "GeneralHandling",\n        "method": "gettingStarted",\n        "pattern": "start",\n        "verbs": "get, post"\n    }\n]\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This handler declaration can be read as: when any request starting by ",(0,t.jsx)(n.code,{children:"/start/"})," with a ",(0,t.jsx)(n.code,{children:"GET"})," or ",(0,t.jsx)(n.code,{children:"POST"})," verb is received by the server, the ",(0,t.jsx)(n.code,{children:"gettingStarted"})," function of the ",(0,t.jsx)(n.code,{children:"GeneralHandling"})," singleton is executed."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"You must restart the Web server so that modifications made in this file are taken into account."})}),"\n",(0,t.jsx)(n.h2,{id:"handler-definition",children:"Handler definition"}),"\n",(0,t.jsx)(n.p,{children:"A handler is defined by:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"a listened URL pattern"}),"\n",(0,t.jsx)(n.li,{children:"a function and its class where the code is implemented to handle the listened URL pattern"}),"\n",(0,t.jsx)(n.li,{children:"the verbs with which the URL can be called to trigger the handler"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The handler identifier is the couple [pattern + a verb among the verbs list]."}),"\n",(0,t.jsx)(n.h3,{id:"url-patterns",children:"URL patterns"}),"\n",(0,t.jsxs)(n.p,{children:["URL patterns can be given as ",(0,t.jsx)(n.strong,{children:"prefixes"})," or using ",(0,t.jsx)(n.strong,{children:"regular expressions"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:['To declare a prefix pattern, use the "pattern" property name in the HTTPHandlers.json file. Prefixes are considered as regular expressions already containing starting and ending ',(0,t.jsx)(n.code,{children:"/"}),".",(0,t.jsx)(n.br,{}),"\nEx: ",(0,t.jsx)(n.code,{children:'"pattern" : "docs"'})," or ",(0,t.jsx)(n.code,{children:'"pattern" : "docs/invoices"'})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:['To declare a regular expression pattern, use the "regexPattern" property name in the HTTPHandlers.json file. Regular expressions patterns are handled directly.\nEx: ',(0,t.jsx)(n.code,{children:'"regexPattern" : "/docs/**/index.html"'})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'"Pattern" and "regexPattern" properties cannot be used in the same handler definition (in this case, only the "regexPattern" property is taken into account).'}),"\n",(0,t.jsx)(n.h4,{id:"pattern-matching",children:"Pattern matching"}),"\n",(0,t.jsx)(n.p,{children:"URL patterns are triggered in the given order:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"the first matching pattern is executed"}),"\n",(0,t.jsx)(n.li,{children:"the following patterns are not executed even if they match the URL"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"As a consequence, you need to apply a accurate strategy when writing your handlers: the most detailed patterns must be written before the more general patterns."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "class": "InvoiceslHandling",\n        "method": "handleTheInvoice",\n        "regexPattern": "/docs/invoices/details/theInvoice",\n        "verbs": "GET"\n    },\n    {\n        "class": "InvoiceslHandling",\n        "method": "handleUnauthorizedVerbs",\n        "regexPattern": "/docs/invoices/details/theInvoice",\n        "comment": "This handler is triggered for all verbs except GET (handled above)"\n    },\n    {\n        "class": "DocsHandling",\n        "method": "handleDocs",\n        "regexPattern": "/docs",\n        "comment": "This handler is triggered for all the verbs"\n    }\n]\n\n'})}),"\n",(0,t.jsx)(n.h4,{id:"forbidden-patterns",children:"Forbidden patterns"}),"\n",(0,t.jsx)(n.p,{children:"URL patterns matching 4D built-in HTTP processing features are not allowed in custom HTTP handlers. For example, the following patterns cannot be handled:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"/4DACTION"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"/rest"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"/$lib/renderer"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"/$shared"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"class-and-method",children:"Class and method"}),"\n",(0,t.jsx)(n.p,{children:'You declare the code to be executed when a defined URL pattern is intercepted using the "class" and "method" properties.'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:['"class": class name without ',(0,t.jsx)(n.code,{children:"cs."}),', e.g. "UsersHandling" for the ',(0,t.jsx)(n.code,{children:"cs.UsersHandling"})," user class. It must be a ",(0,t.jsx)(n.a,{href:"/docs/Concepts/classes#shared-singleton",children:(0,t.jsx)(n.strong,{children:"shared"})})," and ",(0,t.jsx)(n.a,{href:"/docs/Concepts/classes#singleton-classes",children:(0,t.jsx)(n.strong,{children:"singleton"})})," class."]}),"\n",(0,t.jsx)(n.li,{children:'"method": class function belonging to the class.'}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"#request-handler-code",children:"See below"})," for information about the request handler code."]}),"\n",(0,t.jsx)(n.h3,{id:"verbs",children:"Verbs"}),"\n",(0,t.jsx)(n.p,{children:'You can use the "verbs" property in the handler definition to declare HTTP verbs that are supported in incoming requests for this handler. A request that uses a verb that is not explicitely allowed is automatically rejected by the server.'}),"\n",(0,t.jsx)(n.p,{children:"You can declare several verbs, separated by a comma. Verb names are not case sensitive."}),"\n",(0,t.jsxs)(n.p,{children:["Ex: ",(0,t.jsx)(n.code,{children:'"verbs" : "PUT, POST"'})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"No control is done on verb names. All names can be used."})}),"\n",(0,t.jsxs)(n.p,{children:['By default, if the "verbs" property is not used for a handler, ',(0,t.jsx)(n.strong,{children:"all"})," HTTP verbs are supported in incoming requests for this handler (except those possibly used beforehand in a more detailed pattern, as shown in the example above)."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The HTTP verb can also be evaluated ",(0,t.jsxs)(n.a,{href:"/docs/API/IncomingMessageClass#verb",children:["using the ",(0,t.jsx)(n.code,{children:".verb"})," property within the request handler code"]})," to be accepted or rejected."]})}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"Here is a detailed example of a HTTPHandlers.json file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'\n[\n   {\n        "class": "GeneralHandling",\n        "method": "handle",\n        "pattern": "info", //URL prefix\n        "verbs": "GET"\n    }, \n    {\n        "class": "UsersHandling",\n        "method": "manageAccount",\n        "pattern": "userAccount/update",   //URL prefix\n        "verbs": "PUT,POST"\n    }, \n    {\n        "class": "FinancialHandling",\n        "method": "handleInvoices",\n        "regexPattern": "/docs/invoices/(past|today)", //URL prefix given as a regex\n        "verbs": "GET"\n    },\n    {\n        "class": "DocsHandling",\n        "method": "handleDocs",\n        "regexPattern": "/docs/myPage.html",  //URL prefix given as a regex\n        "verbs": "GET"\n    },\n    {\n        "class": "InvoicesHandling",\n        "method": "handleTheInvoice",\n        "pattern": "docs/invoices/details/theInvoice", // The most specific URL first\n        "verbs": "GET,POST"\n    },\n    {\n        "class": "InvoicesHandling",\n        "method": "handleDetails",\n        "pattern": "docs/invoices/details",    // The general URLs after\n        "verbs": "GET"\n    },\n    {\n        "class": "InvoicesHandling",\n        "method": "handleInvoices",   // The general URLs after\n        "pattern": "docs/invoices",\n        "verbs": "GET"\n    }\n]\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"In this example, you must implement the following functions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"handle function"})," in the ",(0,t.jsx)(n.em,{children:"GeneralHandling"})," class"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"manageAccount"})," in the ",(0,t.jsx)(n.em,{children:"UsersHandling"})," class"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"handleInvoices"})," in the ",(0,t.jsx)(n.em,{children:"FinancialHandling"})," class"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"handleDocs"})," in the ",(0,t.jsx)(n.em,{children:"DocsHandling"})," class"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"handleTheInvoice"})," / ",(0,t.jsx)(n.em,{children:"handleDetails"})," / ",(0,t.jsx)(n.em,{children:"handleInvoices"})," in the ",(0,t.jsx)(n.em,{children:"InvoicesHandling"})," class"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Examples of URLs triggering the handlers:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"IP:port/info/"})," with a GET verb\n",(0,t.jsx)(n.code,{children:"IP:port/info/general"})," with a GET verb"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"IP:port/userAccount/update/"})," with a POST verb\n",(0,t.jsx)(n.code,{children:"IP:port/userAccount/update/profile"})," with a POST verb"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"IP:port/docs/invoices/past"})," with a GET verb\n",(0,t.jsx)(n.code,{children:"IP:port/docs/invoices/today/latest"})," with a GET verb"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"IP:port//docs/myPage.html"})," with a GET verb"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"IP:port//docs/invoices/"})," with a GET verb, calls ",(0,t.jsx)(n.em,{children:"handleInvoices"})," function (",(0,t.jsx)(n.em,{children:"InvoicesHandling"})," class)\n",(0,t.jsx)(n.code,{children:"IP:port//docs/invoices/details/"})," with a GET verb, calls ",(0,t.jsx)(n.em,{children:"handleDetails"})," function (",(0,t.jsx)(n.em,{children:"InvoicesHandling"})," class)\n",(0,t.jsx)(n.code,{children:"IP:port//docs/invoices/details/theInvoice/xxxxxx"})," with a GET verb, calls ",(0,t.jsx)(n.em,{children:"handleTheInvoice"})," function (",(0,t.jsx)(n.em,{children:"InvoiceslHandling"})," class)"]}),"\n",(0,t.jsx)(n.h2,{id:"request-handler-code",children:"Request handler code"}),"\n",(0,t.jsx)(n.h3,{id:"function-configuration",children:"Function configuration"}),"\n",(0,t.jsxs)(n.p,{children:["The HTTP Request handler code must be implemented in a function of a ",(0,t.jsx)(n.a,{href:"/docs/Concepts/classes#shared-singleton",children:(0,t.jsx)(n.strong,{children:"Shared"})})," ",(0,t.jsx)(n.a,{href:"/docs/Concepts/classes#singleton-classes",children:(0,t.jsx)(n.strong,{children:"singleton class"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:['If the singleton is missing or not shared, an error "Cannot find singleton" is returned by the server. If the class or the function ',(0,t.jsx)(n.a,{href:"#handler-definition",children:"defined as handler"}),' in the HTTPHandlers.json file is not found, an error "Cannot find singleton function" is returned by the server.']}),"\n",(0,t.jsxs)(n.p,{children:["Request handler functions are not necessarily shared, unless some request handler properties are updated by the functions. In this case, you need to declare its functions with the ",(0,t.jsxs)(n.a,{href:"/docs/Concepts/classes#shared-functions",children:[(0,t.jsx)(n.code,{children:"shared"})," keyword"]}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["It is ",(0,t.jsx)(n.strong,{children:"not recommended"})," to expose request handler functions to external REST calls using ",(0,t.jsx)(n.a,{href:"/docs/ORDA/ordaClasses#exposed-vs-non-exposed-functions",children:(0,t.jsx)(n.code,{children:"exposed"})})," or ",(0,t.jsx)(n.a,{href:"/docs/ORDA/ordaClasses#onhttpget-keyword",children:(0,t.jsx)(n.code,{children:"onHttpGet"})})," keywords."]})}),"\n",(0,t.jsx)(n.h3,{id:"input-an-instance-of-the-4dincomingmessage-class",children:"Input: an instance of the 4D.IncomingMessage class"}),"\n",(0,t.jsxs)(n.p,{children:["When a request has been intercepted by the handler, it is received on the server as an instance of the ",(0,t.jsx)(n.a,{href:"/docs/API/IncomingMessageClass",children:"4D.IncomingMessage class"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"All necessary information about the request are available in this object, including the request url, verb, headers, and, if any, parameters (put in the URL) and body."}),"\n",(0,t.jsx)(n.p,{children:"Then, the request handler can use this information to trigger appropriate business logic."}),"\n",(0,t.jsx)(n.h3,{id:"output-an-instance-of-the-4doutgoingmessage-class",children:"Output: an instance of the 4D.OutgoingMessage class"}),"\n",(0,t.jsxs)(n.p,{children:["The request handler can return an object instance of the ",(0,t.jsx)(n.a,{href:"/docs/API/OutgoingMessageClass",children:"4D.OutGoingMessage class"}),", i.e. some full web content ready for a browser to handle, such as a file content."]}),"\n",(0,t.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/docs/API/IncomingMessageClass",children:"4D.IncomingMessage class"})," provides functions to get the ",(0,t.jsx)(n.a,{href:"/docs/API/IncomingMessageClass#headers",children:"headers"})," and the ",(0,t.jsx)(n.a,{href:"/docs/API/IncomingMessageClass#gettext",children:"body"})," of the request."]}),"\n",(0,t.jsx)(n.p,{children:"Here is a simple example to upload a file on the server."}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"HTTPHandlers.json"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "class": "UploadFile",\n        "method": "uploadFile",\n        "regexPattern": "/putFile",\n        "verbs": "POST"\n    }\n]\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The called URL is: ",(0,t.jsx)(n.a,{href:"http://127.0.0.1:8044/putFile?fileName=testFile",children:"http://127.0.0.1:8044/putFile?fileName=testFile"})]}),"\n",(0,t.jsxs)(n.p,{children:["The binary content of the file is put in the body of the request and a POST verb is used. The file name is given as parameter (",(0,t.jsx)(n.em,{children:"fileName"}),") in the URL. It is received in the ",(0,t.jsx)(n.a,{href:"/docs/API/IncomingMessageClass#urlquery",children:(0,t.jsx)(n.code,{children:"urlQuery"})})," object in the request."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'    //UploadFile class\n\nshared singleton Class constructor()\n	\n	\nFunction uploadFile($request : 4D.IncomingMessage) : 4D.OutgoingMessage\n	\n	var $response:=4D.OutgoingMessage.new()\n	\n	var $body:="Not supported file"\n	var $fileName; $fileType : Text\n	var $file : 4D.File\n	var $picture : Picture\n	var $created : Boolean\n	\n	$fileName:=$request.urlQuery.fileName\n	$fileType:=$request.getHeader("Content-Type")\n	\n	Case of \n		: ($fileType="application/pdf")\n			$file:=File("/PACKAGE/Files/"+$fileName+".pdf")\n			$created:=$file.create()\n			$file.setContent($request.getBlob())\n			$body:="Upload OK - File size: "+String($file.size)\n			\n		: ($fileType="image/jpeg")\n			$file:=File("/PACKAGE/Files/"+$fileName+".jpg")\n			$picture:=$request.getPicture()\n			WRITE PICTURE FILE($file.platformPath; $picture)\n			$body:="Upload OK - Image size: "+String($file.size)\n			\n	End case \n	\n	$response.setBody($body)\n	$response.setHeader("Content-Type"; "text/plain")\n	\n	return $response\n\n'})}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://blog.4d.com/perfect-mastery-of-your-back-end-business-logic-thanks-to-HTTP-requests-handlers",children:"Perfect mastery of your back end business logic thanks to HTTP requests handlers"})," (blog post)"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return a}});var r=s(667294);let t={},i=r.createContext(t);function a(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);