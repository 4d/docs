/*! For license information please see fb71775b.86895160.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81236],{109381:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var s=t(474848),r=t(28453);const a={id:"httpRequests",title:"Processing HTTP requests"},i=void 0,o={id:"WebServer/httpRequests",title:"Processing HTTP requests",description:"The 4D web server provides several features to handle HTTP requests:",source:"@site/versioned_docs/version-19/WebServer/httpRequests.md",sourceDirName:"WebServer",slug:"/WebServer/httpRequests",permalink:"/docs/19/WebServer/httpRequests",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FhttpRequests.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"httpRequests",title:"Processing HTTP requests"},sidebar:"docs",previous:{title:"Template pages",permalink:"/docs/19/WebServer/templates"},next:{title:"Allowing project methods",permalink:"/docs/19/WebServer/allowProject"}},d={},h=[{value:"On Web Connection",id:"on-web-connection",level:2},{value:"Database method calls",id:"database-method-calls",level:3},{value:"Syntax",id:"syntax",level:3},{value:"$1 - URL extra data",id:"1---url-extra-data",level:3},{value:"$2 - Header and Body of the HTTP request",id:"2---header-and-body-of-the-http-request",level:3},{value:"$3 - Web client IP address",id:"3---web-client-ip-address",level:3},{value:"$4 - Server IP address",id:"4---server-ip-address",level:3},{value:"$5 and $6 - User Name and Password",id:"5-and-6---user-name-and-password",level:3},{value:"/4DACTION",id:"4daction",level:2},{value:"Example",id:"example",level:4},{value:"4DACTION to post forms",id:"4daction-to-post-forms",level:3},{value:"Example",id:"example-1",level:4},{value:"Getting values from HTTP requests",id:"getting-values-from-http-requests",level:2},{value:"Other Web Server Commands",id:"other-web-server-commands",level:2},{value:"COMPILER_WEB Project Method",id:"compiler_web-project-method",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The 4D web server provides several features to handle HTTP requests:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["the ",(0,s.jsx)(n.code,{children:"On Web Connection"})," database method, a router for your web application,"]}),"\n",(0,s.jsxs)(n.li,{children:["the ",(0,s.jsx)(n.code,{children:"/4DACTION"})," URL to call server-side code"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WEB GET VARIABLES"})," to get values from HTML objects sent to the server"]}),"\n",(0,s.jsxs)(n.li,{children:["other commands such as ",(0,s.jsx)(n.code,{children:"WEB GET HTTP BODY"}),", ",(0,s.jsx)(n.code,{children:"WEB GET HTTP HEADER"}),", or ",(0,s.jsx)(n.code,{children:"WEB GET BODY PART"})," allow to customize the request processing, including cookies."]}),"\n",(0,s.jsxs)(n.li,{children:["the ",(0,s.jsx)(n.em,{children:"COMPILER_WEB"})," project method, to declare your variables."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"on-web-connection",children:"On Web Connection"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"On Web Connection"})," database method can be used as the entry point for the 4D Web server."]}),"\n",(0,s.jsx)(n.h3,{id:"database-method-calls",children:"Database method calls"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"On Web Connection"})," database method is automatically called when the server reveives any URL that is not a path to an existing page on the server. The database method is called with the URL."]}),"\n",(0,s.jsxs)(n.p,{children:['For example, the URL "',(0,s.jsx)(n.em,{children:"a/b/c"}),'" will call the database method, but "',(0,s.jsx)(n.em,{children:"a/b/c.html"}),'" will not call the database method if the page "c.html" exists in the "a/b" subfolder of the ',(0,s.jsx)(n.a,{href:"/docs/19/WebServer/webServerConfig#root-folder",children:"WebFolder"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["The request should have previously been accepted by the ",(0,s.jsx)(n.a,{href:"/docs/19/WebServer/authentication#on-web-authentication",children:(0,s.jsx)(n.code,{children:"On Web Authentication"})})," database method (if it exists) and the web server must be launched."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"On Web Connection"}),"( ",(0,s.jsx)(n.em,{children:"$1"})," : Text ; ",(0,s.jsx)(n.em,{children:"$2"})," : Text ; ",(0,s.jsx)(n.em,{children:"$3"})," : Text ; ",(0,s.jsx)(n.em,{children:"$4"})," : Text ; ",(0,s.jsx)(n.em,{children:"$5"})," : Text ; ",(0,s.jsx)(n.em,{children:"$6"})," : Text )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameters"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"center"}}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$1"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(n.td,{children:"URL"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$2"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(n.td,{children:"HTTP headers + HTTP body (up to 32 kb limit)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$3"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(n.td,{children:"IP address of the web client (browser)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$4"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(n.td,{children:"IP address of the server"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$5"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(n.td,{children:"User name"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$6"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(n.td,{children:"Password"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"You must declare these parameters as shown below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"//On Web Connection database method\n \n C_TEXT($1;$2;$3;$4;$5;$6)\n \n//Code for the method\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Alternatively, you can use the ",(0,s.jsx)(n.a,{href:"/docs/19/Concepts/parameters#named-parameters",children:"named parameters"})," syntax:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"// On Web Connection database method\n#DECLARE ($url : Text; $header : Text; \\\n  $BrowserIP : Text; $ServerIP : Text; \\\n  $user : Text; $password : Text)\n\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Calling a 4D command that displays an interface element (",(0,s.jsx)(n.code,{children:"DIALOG"}),", ",(0,s.jsx)(n.code,{children:"ALERT"}),", etc.) is not allowed and ends the method processing."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"1---url-extra-data",children:"$1 - URL extra data"}),"\n",(0,s.jsx)(n.p,{children:"The first parameter ($1) is the URL entered by users in the address area of their web browser, without the host address."}),"\n",(0,s.jsx)(n.p,{children:"Let\u2019s use an intranet connection as an example. Suppose that the IP address of your 4D Web Server machine is 123.4.567.89. The following table shows the values of $1 depending on the URL entered in the web browser:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"URL entered in web browser"}),(0,s.jsx)(n.th,{children:"Value of parameter $1"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"123.4.567.89"}),(0,s.jsx)(n.td,{children:"/"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"http://123.45.67.89",children:"http://123.45.67.89"})}),(0,s.jsx)(n.td,{children:"/"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"123.4.567.89/Customers"}),(0,s.jsx)(n.td,{children:"/Customers"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"http://123.45.67.89/Customers/Add",children:"http://123.45.67.89/Customers/Add"})}),(0,s.jsx)(n.td,{children:"/Customers/Add"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"123.4.567.89/Do_This/If_OK/Do_That"}),(0,s.jsx)(n.td,{children:"/Do_This/If_OK/Do_That"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:['Note that you are free to use this parameter at your convenience. 4D simply ignores the value passed beyond the host part of the URL. For example, you can establish a convention where the value "',(0,s.jsx)(n.em,{children:"/Customers/Add"}),'" means \u201cgo directly to add a new record in the ',(0,s.jsx)(n.code,{children:"[Customers]"})," table.\u201d By supplying the web users with a list of possible values and/or default bookmarks, you can provide shortcuts to different parts of your application. This way, web users can quickly access resources of your website without going through the entire navigation path each time they make a new connection."]}),"\n",(0,s.jsx)(n.h3,{id:"2---header-and-body-of-the-http-request",children:"$2 - Header and Body of the HTTP request"}),"\n",(0,s.jsxs)(n.p,{children:["The second parameter ($2) is the header and the body of the HTTP request sent by the web browser. Note that this information is passed to your ",(0,s.jsx)(n.code,{children:"On Web Connection"}),' database method "as is". Its contents will vary depending on the nature of the web browser attempting the connection.']}),"\n",(0,s.jsxs)(n.p,{children:["If your application uses this information, it is up to you to parse the header and the body. You can use the ",(0,s.jsx)(n.code,{children:"WEB GET HTTP HEADER"})," and the ",(0,s.jsx)(n.code,{children:"WEB GET HTTP BODY"})," commands."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"For performance reasons, the size of data passing through the $2 parameter must not exceed 32 KB. Beyond this size, they are truncated by the 4D HTTP server."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"3---web-client-ip-address",children:"$3 - Web client IP address"}),"\n",(0,s.jsx)(n.p,{children:"The $3 parameter receives the IP address of the browser\u2019s machine. This information can allow you to distinguish between intranet and internet connections."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["4D returns IPv4 addresses in a hybrid IPv6/IPv4 format written with a 96-bit prefix, for example ::ffff:192.168.2.34 for the IPv4 address 192.168.2.34. For more information, refer to the ",(0,s.jsx)(n.a,{href:"/docs/19/WebServer/webServerConfig#about-ipv6-support",children:"IPv6 Support"})," section."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"4---server-ip-address",children:"$4 - Server IP address"}),"\n",(0,s.jsxs)(n.p,{children:["The $4 parameter receives the IP address requested by the 4D Web Server. 4D allows for multi-homing, which allows you to use machines with more than one IP address. For more information, please refer to the ",(0,s.jsx)(n.a,{href:"webServerConfig.html#ip-address-to-listen",children:"Configuration page"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"5-and-6---user-name-and-password",children:"$5 and $6 - User Name and Password"}),"\n",(0,s.jsxs)(n.p,{children:["The $5 and $6 parameters receive the user name and password entered by the user in the standard identification dialog box displayed by the browser, if applicable (see the ",(0,s.jsx)(n.a,{href:"/docs/19/WebServer/authentication",children:"authentication page"}),")."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"If the user name sent by the browser exists in 4D, the $6 parameter (the user\u2019s password) is not returned for security reasons."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"4daction",children:"/4DACTION"}),"\n",(0,s.jsxs)(n.p,{children:["**/4DACTION/**",(0,s.jsx)(n.em,{children:"MethodName"}),(0,s.jsx)(n.br,{}),"\n**/4DACTION/**",(0,s.jsx)(n.em,{children:"MethodName/Param"})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameters"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"center"}}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MethodName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"Name of the 4D project method to be executed"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Param"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"Text parameter to pass to the project method"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Usage:"})," URL or Form action."]}),"\n",(0,s.jsxs)(n.p,{children:["This URL allows you to call the ",(0,s.jsx)(n.em,{children:"MethodName"})," 4D project method with an optional ",(0,s.jsx)(n.em,{children:"Param"})," text parameter. The method will receive this parameter in ",(0,s.jsx)(n.em,{children:"$1"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The 4D project method must have been ",(0,s.jsx)(n.a,{href:"/docs/19/WebServer/allowProject",children:"allowed for web requests"}),": the \u201cAvailable through 4D tags and URLs (4DACTION...)\u201d attribute value must have been checked in the properties of the method. If the attribute is not checked, the web request is rejected."]}),"\n",(0,s.jsxs)(n.li,{children:["When 4D receives a ",(0,s.jsx)(n.code,{children:"/4DACTION/MethodName/Param"})," request, the ",(0,s.jsx)(n.code,{children:"On Web Authentication"})," database method (if it exists) is called."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"4DACTION/"})," can be associated with a URL in a static Web page:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<A HREF="/4DACTION/MyMethod/hello">Do Something</A>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"MyMethod"}),' project method should generally return a "reply" (sending of an HTML page using ',(0,s.jsx)(n.code,{children:"WEB SEND FILE"})," or ",(0,s.jsx)(n.code,{children:"WEB SEND TEXT"}),", etc.). Be sure to make the processing as short as possible in order not to block the browser."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["A method called by ",(0,s.jsx)(n.code,{children:"/4DACTION"})," must not call interface elements (",(0,s.jsx)(n.code,{children:"DIALOG"}),", ",(0,s.jsx)(n.code,{children:"ALERT"}),", etc.)."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["This example describes the association of the ",(0,s.jsx)(n.code,{children:"/4DACTION"})," URL with an HTML picture object in order to dynamically display a picture in the page. You insert the following instructions in a static HTML page:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<IMG SRC="/4DACTION/getPhoto/smith">\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"getPhoto"})," method is as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'C_TEXT($1) // This parameter must always be declared\nvar $path : Text\nvar $PictVar : Picture\nvar $BlobVar : Blob\n\n //find the picture in the Images folder within the Resources folder \n$path:=Get 4D folder(Current resources folder)+"Images"+Folder separator+$1+".psd"\n\nREAD PICTURE FILE($path;$PictVar) //put the picture in the picture variable\nPICTURE TO BLOB($PictVar;$BLOB;".png") //convert the picture to ".png" format\nWEB SEND BLOB($BLOB;"image/png")\n'})}),"\n",(0,s.jsx)(n.h3,{id:"4daction-to-post-forms",children:"4DACTION to post forms"}),"\n",(0,s.jsx)(n.p,{children:"The 4D Web server also allows you to use \u201cposted\u201d forms, which are static HTML pages that send data to the Web server, and to easily retrieve all the values. The POST type must be associated to them and the form\u2019s action must imperatively start with /4DACTION/MethodName."}),"\n",(0,s.jsx)(n.p,{children:"A form can be submitted through two methods (both can be used with 4D):"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"POST, usually used to send data to the Web server,"}),"\n",(0,s.jsx)(n.li,{children:"GET, usually used to request data from the Web server."}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["When the Web server receives a posted form, it calls the ",(0,s.jsx)(n.code,{children:"On Web Authentication"})," database method (if it exists)."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In the called method, you must call the ",(0,s.jsx)(n.code,{children:"WEB GET VARIABLES"})," command in order to ",(0,s.jsx)(n.a,{href:"#getting-values-from-the-requests",children:"retrieve the names and values"})," of all the fields included in an HTML page submitted to the server."]}),"\n",(0,s.jsx)(n.p,{children:"Example to define the action of a form:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<FORM ACTION="/4DACTION/MethodName" METHOD=POST>\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["In a Web application, we would like for the browsers to be able to search among the records by using a static HTML page. This page is called \u201csearch.htm\u201d. The application contains other static pages that allow you to, for example, display the search result (\u201cresults.htm\u201d). The POST type has been associated to the page, as well as the ",(0,s.jsx)(n.code,{children:"/4DACTION/SEARCH"})," action."]}),"\n",(0,s.jsx)(n.p,{children:"Here is the HTML code that corresponds to this page:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<form action="/4daction/processForm" method=POST>\n<input type=text name=vName value=""><br/>\n<input type=checkbox name=vExact value="Word">Whole word<br/>\n<input type=submit name=OK value="Search">\n</FORM>\n'})}),"\n",(0,s.jsxs)(n.p,{children:['During data entry, type \u201cABCD\u201d in the data entry area, check the "Whole word" option and validate it by clicking the ',(0,s.jsx)(n.strong,{children:"Search"})," button. In the request sent to the Web server:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'vName="ABCD"\nvExact="Word"\nOK="Search"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["4D calls the ",(0,s.jsx)(n.code,{children:"On Web Authentication"})," database method (if it exists), then the ",(0,s.jsx)(n.code,{children:"processForm"})," project method is called, which is as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' C_TEXT($1) //mandatory for compiled mode\n C_LONGINT($vName)\n C_TEXT(vName;vLIST)\n ARRAY TEXT($arrNames;0)\n ARRAY TEXT($arrVals;0)\n WEB GET VARIABLES($arrNames;$arrVals) //we retrieve all the variables of the form\n $vName:=Find in array($arrNames;"vName")\n vName:=$arrVals{$vName}\n If(Find in array($arrNames;"vExact")=-1) //If the option has not been checked\n    vName:=vName+"@"\n End if\n QUERY([Jockeys];[Jockeys]Name=vName)\n FIRST RECORD([Jockeys])\n While(Not(End selection([Jockeys])))\n    vLIST:=vLIST+[Jockeys]Name+" "+[Jockeys]Tel+"<br/>"\n    NEXT RECORD([Jockeys])\n End while\n WEB SEND FILE("results.htm") //Send the list to the results.htm form\n  //which contains a reference to the variable vLIST,\n  //for example \x3c!--4DHTML vLIST--\x3e\n  //...\nEnd if\n'})}),"\n",(0,s.jsx)(n.h2,{id:"getting-values-from-http-requests",children:"Getting values from HTTP requests"}),"\n",(0,s.jsx)(n.p,{children:"4D's Web server lets you recover data sent through POST or GET requests, using Web forms or URLs."}),"\n",(0,s.jsxs)(n.p,{children:["When the Web server receives a request with data in the header or in the URL, 4D can retrieve the values of any HTML objects it contains. This principle can be implemented in the case of a Web form, sent for example using ",(0,s.jsx)(n.code,{children:"WEB SEND FILE"})," or ",(0,s.jsx)(n.code,{children:"WEB SEND BLOB"}),", where the user enters or modifies values, then clicks on the validation button."]}),"\n",(0,s.jsxs)(n.p,{children:["In this case, 4D can retrieve the values of the HTML objects found in the request using the ",(0,s.jsx)(n.code,{children:"WEB GET VARIABLES"})," command. The ",(0,s.jsx)(n.code,{children:"WEB GET VARIABLES"})," command retrieves the values as text."]}),"\n",(0,s.jsx)(n.p,{children:"Consider the following HTML page source code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<html>\n<head>\n  <title>Welcome</title>\n  <script language="JavaScript">\x3c!--\nfunction GetBrowserInformation(formObj){\nformObj.vtNav_appName.value = navigator.appName\nformObj.vtNav_appVersion.value = navigator.appVersion\nformObj.vtNav_appCodeName.value = navigator.appCodeName\nformObj.vtNav_userAgent.value = navigator.userAgent\nreturn true\n}\nfunction LogOn(formObj){\nif(formObj.vtUserName.value!=""){\nreturn true\n} else {\nalert("Enter your name, then try again.")\nreturn false\n}\n}\n//--\x3e<\/script>\n</head>\n<body>\n<form action="/4DACTION/WWW_STD_FORM_POST" method="post"\n name="frmWelcome"\n onsubmit="return GetBrowserInformation(frmWelcome)">\n  <h1>Welcome to Spiders United</h1>\n  <b>Please enter your name:</b>\n  <input name="vtUserName" value="" size="30" type="text"></p>\n   \n<input name="vsbLogOn" value="Log On" onclick="return LogOn(frmWelcome)" type="submit"> \n<input name="vsbRegister" value="Register" type="submit">\n<input name="vsbInformation" value="Information" type="submit"></p>\n \n<input name="vtNav_appName" value="" type="hidden"> \n<input name="vtNav_appVersion" value="" type="hidden"> \n<input name="vtNav_appCodeName" value="" type="hidden">\n<input name="vtNav_userAgent" value="" type="hidden"></p>\n</form>\n</body>\n</html>\n'})}),"\n",(0,s.jsx)(n.p,{children:"When 4D sends the page to a Web Browser, it looks like this:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(612430).A+"",width:"446",height:"156"})}),"\n",(0,s.jsx)(n.p,{children:"The main features of this page are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["It includes three ",(0,s.jsx)(n.strong,{children:"Submit"})," buttons: ",(0,s.jsx)(n.code,{children:"vsbLogOn"}),", ",(0,s.jsx)(n.code,{children:"vsbRegister"})," and ",(0,s.jsx)(n.code,{children:"vsbInformation"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["When you click ",(0,s.jsx)(n.strong,{children:"Log On"}),", the submission of the form is first processed by the JavaScript function ",(0,s.jsx)(n.code,{children:"LogOn"}),". If no name is entered, the form is not even submitted to 4D, and a JavaScript alert is displayed."]}),"\n",(0,s.jsxs)(n.li,{children:["The form has a POST 4D method as well as a Submit script (",(0,s.jsx)(n.em,{children:"GetBrowserInformation"}),") that copies the browser properties to the four hidden objects whose names starts with ",(0,s.jsx)(n.em,{children:"vtNav_App"}),".\nIt also includes the ",(0,s.jsx)(n.code,{children:"vtUserName"})," object."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Let\u2019s examine the 4D method ",(0,s.jsx)(n.code,{children:"WWW_STD_FORM_POST"})," that is called when the user clicks on one of the buttons on the HTML form."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'  // Retrieval of value of variables\n ARRAY TEXT($arrNames;0)\n ARRAY TEXT($arrValues;0)\n WEB GET VARIABLES($arrNames;$arrValues)\n C_LONGINT($user)\n \n Case of\n \n  // The Log On button was clicked\n    :(Find in array($arrNames;"vsbLogOn")#-1)\n       $user :=Find in array($arrNames;"vtUserName")\n       QUERY([WWW Users];[WWW Users]UserName=$arrValues{$user})\n       $0:=(Records in selection([WWW Users])>0)\n       If($0)\n          WWW POST EVENT("Log On";WWW Log information)\n  // The WWW POST EVENT method saves the information in a database table\n       Else\n \n          $0:=WWW Register\n  // The WWW Register method lets a new Web user register\n       End if\n \n  // The Register button was clicked\n    :(Find in array($arrNames;"vsbRegister")#-1)\n       $0:=WWW Register\n \n  // The Information button was clicked\n    :(Find in array($arrNames;"vsbInformation")#-1)\n       WEB SEND FILE("userinfos.html")\n End case\n'})}),"\n",(0,s.jsx)(n.p,{children:"The features of this method are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The values of the variables ",(0,s.jsx)(n.em,{children:"vtNav_appName"}),", ",(0,s.jsx)(n.em,{children:"vtNav_appVersion"}),", ",(0,s.jsx)(n.em,{children:"vtNav_appCodeName"}),", and ",(0,s.jsx)(n.em,{children:"vtNav_userAgent"})," (bound to the HTML objects having the same names) are retrieved using the ",(0,s.jsx)(n.code,{children:"WEB GET VARIABLES"})," command from HTML objects created by the ",(0,s.jsx)(n.em,{children:"GetBrowserInformation"})," JavaScript script."]}),"\n",(0,s.jsxs)(n.li,{children:["Out of the ",(0,s.jsx)(n.em,{children:"vsbLogOn"}),", ",(0,s.jsx)(n.em,{children:"vsbRegister"})," and ",(0,s.jsx)(n.em,{children:"vsbInformation"})," variables bound to the three Submit buttons, only the one corresponding to the button that was clicked will be retrieved by the ",(0,s.jsx)(n.code,{children:"WEB GET VARIABLES"})," command. When the submit is performed by one of these buttons, the browser returns the value of the clicked button to 4D. This tells you which button was clicked."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Keep in main that with HTML, all objects are text objects. If you use a SELECT object, it is the value of the highlighted element in the object that is returned in the ",(0,s.jsx)(n.code,{children:"WEB GET VARIABLES"})," command, and not the position of the element in the array as in 4D. ",(0,s.jsx)(n.code,{children:"WEB GET VARIABLES"})," always returns values of the Text type."]}),"\n",(0,s.jsx)(n.h2,{id:"other-web-server-commands",children:"Other Web Server Commands"}),"\n",(0,s.jsx)(n.p,{children:"The 4D web server provides several low-level web commands allowing you to develop custom processing of requests:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["the ",(0,s.jsx)(n.code,{children:"WEB GET HTTP BODY"})," command returns the body as raw text, allowing any parsing you may need"]}),"\n",(0,s.jsxs)(n.li,{children:["the ",(0,s.jsx)(n.code,{children:"WEB GET HTTP HEADER"})," command return the headers of the request. It is useful to handle custom cookies, for example (along with the ",(0,s.jsx)(n.code,{children:"WEB SET HTTP HEADER"})," command)."]}),"\n",(0,s.jsxs)(n.li,{children:["the ",(0,s.jsx)(n.code,{children:"WEB GET BODY PART"})," and ",(0,s.jsx)(n.code,{children:"WEB Get body part count"})," commands to parse the body part of a multi-part request and retrieve text values, but also files posted, using BLOBs."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"These commands are summarized in the following graphic:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(29944).A+"",width:"676",height:"374"})}),"\n",(0,s.jsxs)(n.p,{children:['The 4D web server supports files uploaded in chunked transfer encoding from any Web client. Chunked transfer encoding is a data transfer mechanism specified in HTTP/1.1. It allows data to be transferred in a series of "chunks" (parts) without knowing the final data size. The 4D Web Server also supports chunked transfer encoding from the server to Web clients (using ',(0,s.jsx)(n.code,{children:"WEB SEND RAW DATA"}),")."]}),"\n",(0,s.jsx)(n.h2,{id:"compiler_web-project-method",children:"COMPILER_WEB Project Method"}),"\n",(0,s.jsxs)(n.p,{children:["The COMPILER_WEB method, if it exists, is systematically called when the HTTP server receives a dynamic request and calls the 4D engine. This is the case, for example, when the 4D Web server receives a posted form or a URL to process in ",(0,s.jsx)(n.a,{href:"#on-web-connection",children:(0,s.jsx)(n.code,{children:"On Web Connection"})}),". This method is intended to contain typing and/or variable initialization directives used during Web exchanges. It is used by the compiler when the application is compiled. The COMPILER_WEB method is common to all the Web forms. By default, the COMPILER_WEB method does not exist. You must explicitly create it."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"The COMPILER_WEB project method is also called, if it exists, for each SOAP request accepted."}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,n,t)=>{var s=t(296540),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function h(e,n,t){var s,a={},h=null,l=null;for(s in void 0!==t&&(h=""+t),void 0!==n.key&&(h=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,s)&&!d.hasOwnProperty(s)&&(a[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===a[s]&&(a[s]=n[s]);return{$$typeof:r,type:e,key:h,ref:l,props:a,_owner:o.current}}n.Fragment=a,n.jsx=h,n.jsxs=h},474848:(e,n,t)=>{e.exports=t(221020)},29944:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/httpCommands-f0f40e81d3278591838e7c262365beb9.png"},612430:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/spiders-0e4915c8e3496e1dd10f0b15a4319274.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(296540);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);