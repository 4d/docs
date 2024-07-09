/*! For license information please see d3be6dc1.30a352c8.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9553],{289774:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var s=t(474848),r=t(28453);const i={id:"authentication",title:"Authentication"},d=void 0,a={id:"WebServer/authentication",title:"Authentication",description:"Authenticating users is necessary when you want to provide specific access rights to web users. Authentication designates the way the information concerning the user credentials (usually name and password) are collected and processed.",source:"@site/versioned_docs/version-20-R4/WebServer/authentication.md",sourceDirName:"WebServer",slug:"/WebServer/authentication",permalink:"/docs/20-R4/WebServer/authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2Fauthentication.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"authentication",title:"Authentication"},sidebar:"docs",previous:{title:"Custom HTTP Error Pages",permalink:"/docs/20-R4/WebServer/errorPages"},next:{title:"User sessions",permalink:"/docs/20-R4/WebServer/sessions"}},c={},o=[{value:"Authentication modes",id:"Authentication-modes",level:2},{value:"Overview",id:"Overview",level:3},{value:"Custom (default)",id:"Custom-default",level:3},{value:"Basic protocol",id:"Basic-protocol",level:3},{value:"DIGEST protocol",id:"DIGEST-protocol",level:3},{value:"On Web Authentication",id:"On-Web-Authentication",level:2},{value:"Database method calls",id:"Database-method-calls",level:3},{value:"Syntax",id:"Syntax",level:3},{value:"$1 - URL",id:"1---URL",level:4},{value:"$2 - Header and Body of the HTTP request",id:"2---Header-and-Body-of-the-HTTP-request",level:4},{value:"$3 - Web client IP address",id:"3---Web-client-IP-address",level:4},{value:"$4 - Server IP address",id:"4---Server-IP-address",level:4},{value:"$5 and $6 - User Name and Password",id:"5-and-6---User-Name-and-Password",level:4},{value:"$0 parameter",id:"0-parameter",level:4},{value:"Example",id:"Example",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Authenticating users is necessary when you want to provide specific access rights to web users. Authentication designates the way the information concerning the user credentials (usually name and password) are collected and processed."}),"\n",(0,s.jsx)(n.h2,{id:"Authentication-modes",children:"Authentication modes"}),"\n",(0,s.jsxs)(n.p,{children:["The 4D web server proposes three authentication modes, that you can select in the ",(0,s.jsx)(n.strong,{children:"Web"}),"/",(0,s.jsx)(n.strong,{children:"Options (I)"})," page of the Settings dialog box:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(168203).A+"",width:"790",height:"176"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Using a ",(0,s.jsx)(n.strong,{children:"custom"})," authentication is recommended."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"Overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"The operation of the 4D web server's access system is summarized in the following diagram:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(717876).A+"",width:"680",height:"498"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Requests starting with ",(0,s.jsx)(n.code,{children:"rest/"})," are directly handled by the ",(0,s.jsx)(n.a,{href:"/docs/20-R4/REST/configuration",children:"REST server"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"Custom-default",children:"Custom (default)"}),"\n",(0,s.jsxs)(n.p,{children:["Basically in this mode, it's up to the developer to define how to authenticate users. 4D only evaluates HTTP requests ",(0,s.jsx)(n.a,{href:"#method-calls",children:"that require an authentication"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"This authentication mode is the most flexible because it allows you to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"either, delegate the user authentication to a third-party application (e.g. a social network, SSO);"}),"\n",(0,s.jsxs)(n.li,{children:["or, provide an interface to the user (e.g. a web form) so that they can create their account in your customer database; then, you can authenticate users with any custom algorithm (see ",(0,s.jsx)(n.a,{href:"/docs/20-R4/WebServer/sessions#example",children:"this example"}),' from the "User sessions" chapter). The important thing is that you never store the password in clear, using such code:']}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"//... user account creation\nds.webUser.password:=Generate password hash($password)  \nds.webUser.save()\n"})}),"\n",(0,s.jsxs)(n.p,{children:["See also ",(0,s.jsx)(n.a,{href:"/docs/20-R4/WebServer/gettingStarted#authenticating-users",children:"this example"}),' from the "Getting started" chapter.']}),"\n",(0,s.jsxs)(n.p,{children:["If no custom authentication is provided, 4D calls the ",(0,s.jsx)(n.a,{href:"#on-web-authentication",children:(0,s.jsx)(n.code,{children:"On Web Authentication"})})," database method (if it exists). In addition to $1 and $2, only the IP addresses of the browser and the server ($3 and $4) are provided, the user name and password ($5 and $6) are empty. The method must return ",(0,s.jsx)(n.strong,{children:"True"})," in $0 if the user is successfully authenticated, then the resquested resource is served, or ",(0,s.jsx)(n.strong,{children:"False"})," in $0 if the authentication failed."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Warning:"})," If the ",(0,s.jsx)(n.code,{children:"On Web Authentication"})," database method does not exist, connections are automatically accepted (test mode)."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"Basic-protocol",children:"Basic protocol"}),"\n",(0,s.jsx)(n.p,{children:"When a user connects to the server, a standard dialog box appears on their browser in order for them to enter their user name and password."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"The name and password entered by the user are sent unencrypted in the HTTP request header. This mode typically requires HTTPS to provide confidentiality."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Entered values are then evaluated:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If the ",(0,s.jsx)(n.strong,{children:"Include 4D passwords"})," option is checked, user credentials will be first evaluated against the ",(0,s.jsx)(n.a,{href:"/docs/20-R4/Users/overview",children:"internal 4D users table"}),".\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the user name sent by the browser exists in the table of 4D users and the password is correct, the connection is accepted. If the password is incorrect, the connection is refused."}),"\n",(0,s.jsxs)(n.li,{children:["If the user name does not exist in the table of 4D users, the ",(0,s.jsx)(n.a,{href:"#on-web-authentication",children:(0,s.jsx)(n.code,{children:"On Web Authentication"})})," database method is called. If the ",(0,s.jsx)(n.code,{children:"On Web Authentication"})," database method does not exist, connections are rejected."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["If the ",(0,s.jsx)(n.strong,{children:"Include 4D passwords"})," option is not checked, user credentials are sent to the ",(0,s.jsx)(n.a,{href:"#on-web-authentication",children:(0,s.jsx)(n.code,{children:"On Web Authentication"})})," database method along with the other connection parameters (IP address and port, URL...) so that you can process them. If the ",(0,s.jsx)(n.code,{children:"On Web Authentication"})," database method does not exist, connections are rejected."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"With the 4D Client web server, keep in mind that all the sites published by the 4D Client machines will share the same table of users. Validation of users/passwords is carried out by the 4D Server application."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"DIGEST-protocol",children:"DIGEST protocol"}),"\n",(0,s.jsx)(n.p,{children:"This mode provides a greater level of security since the authentication information is processed by a one-way process called hashing which makes their contents impossible to decipher."}),"\n",(0,s.jsxs)(n.p,{children:["As in BASIC mode, users must enter their name and password when they connect. The ",(0,s.jsx)(n.a,{href:"#on-web-authentication",children:(0,s.jsx)(n.code,{children:"On Web Authentication"})})," database method is then called. When the DIGEST mode is activated, the $6 parameter (password) is always returned empty. In fact, when using this mode, this information does not pass by the network as clear text (unencrypted). It is therefore imperative in this case to evaluate connection requests using the ",(0,s.jsx)(n.code,{children:"WEB Validate digest"})," command."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"You must restart the web server in order for the changes made to these parameters to be taken into account."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"On-Web-Authentication",children:"On Web Authentication"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"On Web Authentication"})," database method is in charge of managing web server engine access. It is called by 4D or 4D Server when a dynamic HTTP request is received."]}),"\n",(0,s.jsx)(n.h3,{id:"Database-method-calls",children:"Database method calls"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"On Web Authentication"})," database method is automatically called when a request or processing requires the execution of some 4D code (except for REST calls). It is also called when the web server receives an invalid static URL (for example, if the static page requested does not exist)."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"On Web Authentication"})," database method is therefore called:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"when the web server receives a URL requesting a resource that does not exist"}),"\n",(0,s.jsxs)(n.li,{children:["when the web server receives a URL beginning with ",(0,s.jsx)(n.code,{children:"4DACTION/"}),", ",(0,s.jsx)(n.code,{children:"4DCGI/"}),"..."]}),"\n",(0,s.jsxs)(n.li,{children:["when the web server receives a root access URL and no home page has been set in the Settings or by means of the ",(0,s.jsx)(n.code,{children:"WEB SET HOME PAGE"})," command"]}),"\n",(0,s.jsxs)(n.li,{children:["when the web server processes a tag executing code (e.g ",(0,s.jsx)(n.code,{children:"4DSCRIPT"}),") in a semi-dynamic page."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"On Web Authentication"})," database method is NOT called:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"when the web server receives a URL requesting a valid static page."}),"\n",(0,s.jsxs)(n.li,{children:["when the web server reveives a URL beginning with ",(0,s.jsx)(n.code,{children:"rest/"})," and the REST server is launched (in this case, the authentication is handled through the ",(0,s.jsxs)(n.a,{href:"/docs/20-R4/REST/configuration#using-the-on-rest-authentication-database-method",children:[(0,s.jsx)(n.code,{children:"On REST Authentication"})," database method"]})," or ",(0,s.jsx)(n.a,{href:"/docs/20-R4/REST/configuration#using-the-structure-settings",children:"Structure settings"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"Syntax",children:"Syntax"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"On Web Authentication"}),"( ",(0,s.jsx)(n.em,{children:"$1"})," : Text ; ",(0,s.jsx)(n.em,{children:"$2"})," : Text ; ",(0,s.jsx)(n.em,{children:"$3"})," : Text ; ",(0,s.jsx)(n.em,{children:"$4"})," : Text ; ",(0,s.jsx)(n.em,{children:"$5"})," : Text ; ",(0,s.jsx)(n.em,{children:"$6"})," : Text ) -> $0 : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameters"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"center"}}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$1"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(n.td,{children:"URL"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$2"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(n.td,{children:"HTTP headers + HTTP body (up to 32 kb limit)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$3"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(n.td,{children:"IP address of the web client (browser)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$4"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(n.td,{children:"IP address of the server"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$5"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(n.td,{children:"User name"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$6"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(n.td,{children:"Password"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$0"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"True = request accepted, False = request rejected"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"You must declare these parameters as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"//On Web Authentication database method\n \n C_TEXT($1;$2;$3;$4;$5;$6)\n C_BOOLEAN($0)\n \n//Code for the method\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Alternatively, you can use the ",(0,s.jsx)(n.a,{href:"/docs/20-R4/Concepts/parameters#named-parameters",children:"named parameters"})," syntax:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"// On Web Authentication database method\n#DECLARE ($url : Text; $header : Text; \\\n  $BrowserIP : Text; $ServerIP : Text; \\\n  $user : Text; $password : Text) \\\n  -> $RequestAccepted : Boolean\n\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["All the ",(0,s.jsx)(n.code,{children:"On Web Authentication"})," database method's parameters are not necessarily filled in. The information received by the database method depends on the selected ",(0,s.jsx)(n.a,{href:"#authentication-mode",children:"authentication mode"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"1---URL",children:"$1 - URL"}),"\n",(0,s.jsxs)(n.p,{children:["The first parameter (",(0,s.jsx)(n.code,{children:"$1"}),") is the URL received by the server, from which the host address has been removed."]}),"\n",(0,s.jsx)(n.p,{children:"Let\u2019s take the example of an Intranet connection. Suppose that the IP address of your 4D Web Server machine is 123.45.67.89. The following table shows the values of $1 depending on the URL entered in the Web browser:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"URL entered in web browser"}),(0,s.jsx)(n.th,{children:"Value of parameter $1"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"123.45.67.89"}),(0,s.jsx)(n.td,{children:"/"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"http://123.45.67.89",children:"http://123.45.67.89"})}),(0,s.jsx)(n.td,{children:"/"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"123.45.67.89/Customers"}),(0,s.jsx)(n.td,{children:"/Customers"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"http://123.45.67.89/Customers/Add",children:"http://123.45.67.89/Customers/Add"})}),(0,s.jsx)(n.td,{children:"/Customers/Add"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"123.45.67.89/Do_This/If_OK/Do_That"}),(0,s.jsx)(n.td,{children:"/Do_This/If_OK/Do_That"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"2---Header-and-Body-of-the-HTTP-request",children:"$2 - Header and Body of the HTTP request"}),"\n",(0,s.jsxs)(n.p,{children:["The second parameter (",(0,s.jsx)(n.code,{children:"$2"}),") is the header and the body of the HTTP request sent by the web browser. Note that this information is passed to your ",(0,s.jsx)(n.code,{children:"On Web Authentication"})," database method as it is. Its contents will vary depending on the nature of the web browser which is attempting the connection."]}),"\n",(0,s.jsxs)(n.p,{children:["If your application uses this information, it is up to you to parse the header and the body. You can use the ",(0,s.jsx)(n.code,{children:"WEB GET HTTP HEADER"})," and the ",(0,s.jsx)(n.code,{children:"WEB GET HTTP BODY"})," commands."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"For performance reasons, the size of data passing through the $2 parameter must not exceed 32 KB. Beyond this size, they are truncated by the 4D HTTP server."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"3---Web-client-IP-address",children:"$3 - Web client IP address"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"$3"})," parameter receives the IP address of the browser\u2019s machine. This information can allow you to distinguish between intranet and internet connections."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["4D returns IPv4 addresses in a hybrid IPv6/IPv4 format written with a 96-bit prefix, for example ::ffff:192.168.2.34 for the IPv4 address 192.168.2.34. For more information, refer to the ",(0,s.jsx)(n.a,{href:"/docs/20-R4/WebServer/webServerConfig#about-ipv6-support",children:"IPv6 Support"})," section."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"4---Server-IP-address",children:"$4 - Server IP address"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"$4"})," parameter receives the IP address used to call the web server. 4D allows for multi-homing, which allows you to exploit machines with more than one IP address. For more information, please refer to the ",(0,s.jsx)(n.a,{href:"/docs/20-R4/WebServer/webServerConfig#ip-address-to-listen",children:"Configuration page"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"5-and-6---User-Name-and-Password",children:"$5 and $6 - User Name and Password"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"$5"})," and ",(0,s.jsx)(n.code,{children:"$6"})," parameters receive the user name and password entered by the user in the standard identification dialog box displayed by the browser. This dialog box appears for each connection, if ",(0,s.jsx)(n.a,{href:"#basic-protocol",children:"basic"})," or ",(0,s.jsx)(n.a,{href:"#digest-protocol",children:"digest"})," authentication is selected."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"If the user name sent by the browser exists in 4D, the $6 parameter (the user\u2019s password) is not returned for security reasons."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"0-parameter",children:"$0 parameter"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"On Web Authentication"})," database method returns a boolean in $0:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If $0 is True, the connection is accepted."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If $0 is False, the connection is refused."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"On Web Connection"})," database method is only executed if the connection has been accepted by ",(0,s.jsx)(n.code,{children:"On Web Authentication"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WARNING"}),(0,s.jsx)(n.br,{}),"If no value is set to $0 or if $0 is not defined in the ",(0,s.jsx)(n.code,{children:"On Web Authentication"})," database method, the connection is considered as accepted and the ",(0,s.jsx)(n.code,{children:"On Web Connection"})," database method is executed."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Do not call any interface elements in the ",(0,s.jsx)(n.code,{children:"On Web Authentication"})," database method (",(0,s.jsx)(n.code,{children:"ALERT"}),", ",(0,s.jsx)(n.code,{children:"DIALOG"}),", etc.) because otherwise its execution will be interrupted and the connection refused. The same thing will happen if an error occurs during its processing."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"Example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["Example of the ",(0,s.jsx)(n.code,{children:"On Web Authentication"})," database method in ",(0,s.jsx)(n.a,{href:"#digest-protocol",children:"DIGEST mode"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' // On Web Authentication Database Method\n #DECLARE ($url : Text; $header : Text; $ipB : Text; $ipS : Text; \\\n \t$user : Text; $pw : Text) -> $valid : Boolean\n  \n var $found : cs.WebUserSelection\n $valid:=False\n\n $found:=ds.WebUser.query("User === :1";$user)\n If($found.length=1) // User is found\n \t$valid:=WEB Validate digest($user;[WebUser]password)\n Else\n    $valid:=False // User does not exist\n End if\n'})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},221020:(e,n,t)=>{var s=t(296540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var s,i={},o=null,h=null;for(s in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(h=n.ref),n)d.call(n,s)&&!c.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:r,type:e,key:o,ref:h,props:i,_owner:a.current}}n.Fragment=i,n.jsx=o,n.jsxs=o},474848:(e,n,t)=>{e.exports=t(221020)},168203:(e,n,t)=>{t.d(n,{A:()=>s});const s="data:image/png;base64,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"},717876:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/serverAccess-b28091b35f6bc6b3f5605b27e8333135.png"},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>a});var s=t(296540);const r={},i=s.createContext(r);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);