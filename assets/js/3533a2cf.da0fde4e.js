"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1398"],{605261:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>d});var r=JSON.parse('{"id":"Notes/updates","title":"Release Notes","description":"4D 20 R7","source":"@site/versioned_docs/version-20-R7/Notes/updates.md","sourceDirName":"Notes","slug":"/Notes/updates","permalink":"/docs/Notes/updates","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Notes%2Fupdates.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"updates","title":"Release Notes"},"sidebar":"docs","previous":{"title":"Creating or opening a project","permalink":"/docs/GettingStarted/creating"},"next":{"title":"Core Development","permalink":"/docs/category/core-development"}}'),i=s("785893"),t=s("250065");let d={id:"updates",title:"Release Notes"},o=void 0,l={},c=[{value:"4D 20 R7",id:"4d-20-r7",level:2},{value:"Highlights",id:"highlights",level:4},{value:"Behavior changes",id:"behavior-changes",level:4},{value:"4D 20 R6",id:"4d-20-r6",level:2},{value:"Highlights",id:"highlights-1",level:4},{value:"Behavior changes",id:"behavior-changes-1",level:4},{value:"4D 20 R5",id:"4d-20-r5",level:2},{value:"Highlights",id:"highlights-2",level:4},{value:"Behavior changes",id:"behavior-changes-2",level:4},{value:"4D 20 R4",id:"4d-20-r4",level:2},{value:"Highlights",id:"highlights-3",level:4},{value:"Behavior changes",id:"behavior-changes-3",level:4},{value:"4D 20 R3",id:"4d-20-r3",level:2},{value:"Highlights",id:"highlights-4",level:4},{value:"Behavior changes",id:"behavior-changes-4",level:4},{value:"4D 20 R2",id:"4d-20-r2",level:2},{value:"Highlights",id:"highlights-5",level:4},{value:"Behavior changes",id:"behavior-changes-5",level:4},{value:"4D 20.x LTS",id:"4d-20x-lts",level:2},{value:"Library table",id:"library-table",level:2}];function a(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"4d-20-r7",children:"4D 20 R7"}),"\n",(0,i.jsxs)(n.p,{children:["Read ",(0,i.jsx)(n.a,{href:"https://blog.4d.com/en-whats-new-in-4d-v20-R7/",children:(0,i.jsx)(n.strong,{children:"What\u2019s new in 4D 20 R7"})}),", the blog post that lists all new features and enhancements in 4D 20 R7."]}),"\n",(0,i.jsx)(n.h4,{id:"highlights",children:"Highlights"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["List box columns and headers of type time now support the ",(0,i.jsx)(n.a,{href:"/docs/FormObjects/propertiesDisplay#time-format",children:'"blankIfNull" option'}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["New properties in ",(0,i.jsx)(n.a,{href:"/docs/API/IMAPTransporterClass#getboxinfo",children:(0,i.jsx)(n.code,{children:".getBoxInfo()"})})," and ",(0,i.jsx)(n.a,{href:"/docs/API/IMAPTransporterClass#getboxlist",children:(0,i.jsx)(n.code,{children:".getBoxList()"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["You can now ",(0,i.jsx)(n.a,{href:"/docs/Project/components#adding-and-removing-dependencies",children:"add and remove components using the Component manager interface"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["New ",(0,i.jsx)(n.a,{href:"/docs/Project/compiler#enabling-direct-typing",children:(0,i.jsx)(n.strong,{children:"direct typing mode"})})," in which you declare all variables and parameters in your code using ",(0,i.jsx)(n.code,{children:"var"})," and ",(0,i.jsx)(n.code,{children:"#DECLARE"}),"/",(0,i.jsx)(n.code,{children:"Function"})," keywords (only mode supported in new projects). ",(0,i.jsx)(n.a,{href:"/docs/Project/compiler#check-syntax",children:"Syntax checking feature"})," has been enhanced accordingly."]}),"\n",(0,i.jsxs)(n.li,{children:["Support of ",(0,i.jsx)(n.a,{href:"/docs/Concepts/classes#singleton-classes",children:"Session singletons"})," and new ",(0,i.jsx)(n.a,{href:"/docs/API/ClassClass#issessionsingleton",children:(0,i.jsx)(n.code,{children:".isSessionSingleton"})})," Class property."]}),"\n",(0,i.jsxs)(n.li,{children:["New ",(0,i.jsxs)(n.a,{href:"/docs/ORDA/ordaClasses#onhttpget-keyword",children:[(0,i.jsx)(n.code,{children:"onHttpGet"})," function keyword"]})," to define singleton or ORDA functions that can be called through ",(0,i.jsx)(n.a,{href:"/docs/REST/classFunctions#function-calls",children:"HTTP REST GET requests"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["New ",(0,i.jsx)(n.a,{href:"/docs/API/OutGoingMessageClass",children:(0,i.jsx)(n.code,{children:"4D.OutGoingMessage"})})," class for the REST server to return any web contents."]}),"\n",(0,i.jsxs)(n.li,{children:["Qodly Studio: You can now ",(0,i.jsx)(n.a,{href:"/docs/WebServer/qodly-studio#using-qodly-debugger-on-4d-server",children:"attach the Qodly debugger to 4D Server"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["New Build Application keys for remote 4D applications to validate the server certificate authority ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv20R7/4D/20-R7/CertificateAuthoritiesCertificates.300-7425900.en.html",children:"signatures"})," and/or ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv20R7/4D/20-R7/CertificateDomainName.300-7425906.en.html",children:"domain"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["4D Language:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["New commands: ",(0,i.jsx)(n.a,{href:"/docs/commands/process-info",children:"Process info"}),", ",(0,i.jsx)(n.a,{href:"/docs/commands/session-info",children:"Session info"}),", ",(0,i.jsx)(n.a,{href:"/docs/commands/set-window-document-icon",children:"SET WINDOW DOCUMENT ICON"})]}),"\n",(0,i.jsxs)(n.li,{children:["Modified commands: ",(0,i.jsx)(n.a,{href:"/docs/commands/process-activity",children:"Process activity"}),", ",(0,i.jsx)(n.a,{href:"/docs/commands/process-number",children:"Process number"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["4D Write Pro:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["New command: ",(0,i.jsx)(n.a,{href:"/docs/WritePro/commands/wp-delete-section",children:"WP DELETE SECTION"})]}),"\n",(0,i.jsxs)(n.li,{children:["Modified commands: ",(0,i.jsx)(n.a,{href:"/docs/WritePro/commands/wp-delete-subsection",children:"WP DELETE SUBSECTION"})," and ",(0,i.jsx)(n.a,{href:"/docs/WritePro/commands/wp-reset-attributes",children:"WP RESET ATTRIBUTES"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv20R7/4D/20-R7/What-s-new.901-7239607.en.html",children:"What's new page"})," in 4D Write Pro Reference."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://bugs.4d.fr/fixedbugslist?version=20_R7",children:(0,i.jsx)(n.strong,{children:"Fixed bug list"})}),": list of all bugs that have been fixed in 4D 20 R7."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"behavior-changes",children:"Behavior changes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Documentations for ",(0,i.jsx)(n.a,{href:"/docs/commands/command-index",children:"4D Language"})," and ",(0,i.jsx)(n.a,{href:"/docs/WritePro/commands/command-index",children:"4D Write Pro Language"})," are now fully available on developer.4d.com. Find out about all the new features and changes concerning these documentations in this release note."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.a,{href:"/docs/commands/file",children:(0,i.jsx)(n.code,{children:"File"})})," command (as well as ",(0,i.jsx)(n.a,{href:"/docs/API/FileClass#4dfilenew",children:(0,i.jsx)(n.code,{children:"4D.File.new()"})}),") is stricter when it comes to checking the syntax of the ",(0,i.jsx)(n.em,{children:"path"})," supplied as a parameter."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"4d-20-r6",children:"4D 20 R6"}),"\n",(0,i.jsxs)(n.p,{children:["Read ",(0,i.jsx)(n.a,{href:"https://blog.4d.com/en-whats-new-in-4d-20-R6/",children:(0,i.jsx)(n.strong,{children:"What\u2019s new in 4D 20 R6"})}),", the blog post that lists all new features and enhancements in 4D 20 R6."]}),"\n",(0,i.jsx)(n.h4,{id:"highlights-1",children:"Highlights"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Support of comparison operators on ",(0,i.jsx)(n.a,{href:"/docs/Concepts/object#object-operators",children:"object references"})," and ",(0,i.jsx)(n.a,{href:"/docs/Concepts/collection#collection-operators",children:"collection references"}),". ",(0,i.jsx)(n.a,{href:"/docs/API/CollectionClass#query",children:(0,i.jsx)(n.code,{children:"collection.query()"})})," now supports ",(0,i.jsx)(n.a,{href:"/docs/API/CollectionClass#object-or-collection-reference-as-value",children:"object and collection references as query values"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["When a component has a ",(0,i.jsx)(n.a,{href:"/docs/Extensions/develop-components#declaring-the-component-namespace",children:"declared namespace"}),", its classes are now automatically shared between all loaded components in the host project via ",(0,i.jsx)(n.a,{href:"/docs/Concepts/classes#cs",children:(0,i.jsx)(n.code,{children:"cs.<namespace>"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Component manager: Support of ",(0,i.jsx)(n.a,{href:"/docs/Project/components#declaring-components-stored-on-github",children:"components stored on GitHub"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["New ",(0,i.jsx)(n.a,{href:"/docs/API/EntitySelectionClass#clean",children:(0,i.jsx)(n.code,{children:"entitySelection.clean()"})})," function and ",(0,i.jsx)(n.a,{href:"/docs/REST/clean",children:(0,i.jsx)(n.code,{children:"$clean"})})," REST API to get a new entity selection based upon the original entity selection but without its deleted entities."]}),"\n",(0,i.jsxs)(n.li,{children:["New ",(0,i.jsx)(n.a,{href:"/docs/API/SessionClass#getprivileges",children:(0,i.jsx)(n.code,{children:"session.getPrivileges()"})})," function and ",(0,i.jsx)(n.a,{href:"/docs/REST/info",children:(0,i.jsx)(n.code,{children:"$info/privileges"})})," REST API to inspect session privileges for an easier debugging."]}),"\n",(0,i.jsxs)(n.li,{children:["New ",(0,i.jsx)(n.a,{href:"/docs/FormObjects/webAreaOverview#4dcefparametersjson",children:"4DCEFParameters.json file"})," to customize 4D embedded web areas."]}),"\n",(0,i.jsxs)(n.li,{children:["New ",(0,i.jsx)(n.a,{href:"/docs/API/HTTPAgentClass",children:"HTTPAgent"})," class and new ",(0,i.jsx)(n.a,{href:"/docs/API/HTTPRequestClass#options-parameter",children:(0,i.jsx)(n.code,{children:"agent"})})," property for HTTPRequest class."]}),"\n",(0,i.jsxs)(n.li,{children:["New ",(0,i.jsx)(n.a,{href:"/docs/API/WebFormClass",children:(0,i.jsx)(n.code,{children:"enableState()"})})," and ",(0,i.jsx)(n.a,{href:"/docs/API/WebFormClass",children:(0,i.jsx)(n.code,{children:"disableState()"})})," functions to monitor Qodly page states from the server."]}),"\n",(0,i.jsxs)(n.li,{children:["New ",(0,i.jsxs)(n.a,{href:"/docs/REST/singleton",children:[(0,i.jsx)(n.code,{children:"$singleton"})," API"]})," to call exposed singleton functions from REST and new ",(0,i.jsx)(n.a,{href:"/docs/ORDA/privileges",children:"associated privileges"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["A ",(0,i.jsx)(n.a,{href:"/docs/settings/web#activate-rest-authentication-through-dsauthentify-function",children:"new settings button"}),' helps you upgrade your project to use "force login" REST mode (the ',(0,i.jsx)(n.code,{children:"On REST Authentication"})," database method is now deprecated)."]}),"\n",(0,i.jsxs)(n.li,{children:["A ",(0,i.jsx)(n.a,{href:"/docs/Project/compiler#warnings",children:"new settings tab"})," helps you define warnings generation globally."]}),"\n",(0,i.jsxs)(n.li,{children:['Several commands, mainly from the "4D Environment" theme, are now thread-safe (',(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv20R6/4D/Preemptive_6957385.999-2878208.en.html",children:"see the full list"}),"), as well as some selectors of the ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4dv20R/help/command/en/page642.html",children:(0,i.jsx)(n.code,{children:"SET DATABASE PARAMETER"})}),"/",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4dv20R/help/command/en/page643.html",children:(0,i.jsx)(n.code,{children:"Get database parameter"})})," commands."]}),"\n",(0,i.jsxs)(n.li,{children:["New ",(0,i.jsx)(n.a,{href:"https://github.com/4d/4D-QPDF",children:"4D-QPDF component"})," that provides the ",(0,i.jsx)(n.code,{children:"PDF Get attachments"})," command to extract attachments from a PDF/A3 document."]}),"\n",(0,i.jsxs)(n.li,{children:["4D Language commands: ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv20R6/4D/20-R6/What-s-new.901-6957482.en.html",children:"What's new page"})," on doc.4d.com."]}),"\n",(0,i.jsxs)(n.li,{children:["4D Write Pro: ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv20R6/4D/20-R6/What-s-new.901-6993921.en.html",children:"What's new page"})," on doc.4d.com."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://bugs.4d.fr/fixedbugslist?version=20_R6",children:(0,i.jsx)(n.strong,{children:"Fixed bug list"})}),": list of all bugs that have been fixed in 4D 20 R6."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"behavior-changes-1",children:"Behavior changes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Support of scroll chaining in forms: parent subforms now scroll automatically when embedded scrollable objects (",(0,i.jsx)(n.a,{href:"/docs/FormObjects/propertiesAppearance#vertical-scroll-bar",children:"vertically"})," or ",(0,i.jsx)(n.a,{href:"/docs/FormObjects/propertiesAppearance#horizontal-scroll-bar",children:"horizontally"}),") have reached their boundaries and the user keeps scrolling using the mouse or trackpad (overscrolling)."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsxs)(n.a,{href:"/docs/REST/catalog",children:[(0,i.jsx)(n.code,{children:"$catalog"})," REST API"]})," now returns singletons (if any)."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"4d-20-r5",children:"4D 20 R5"}),"\n",(0,i.jsxs)(n.p,{children:["Read ",(0,i.jsx)(n.a,{href:"https://blog.4d.com/en-whats-new-in-4d-20-R5/",children:(0,i.jsx)(n.strong,{children:"What\u2019s new in 4D 20 R5"})}),", the blog post that lists all new features and enhancements in 4D 20 R5."]}),"\n",(0,i.jsx)(n.h4,{id:"highlights-2",children:"Highlights"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["New ",(0,i.jsx)(n.a,{href:"/docs/Project/components",children:"Component manager"})," to handle components through a ",(0,i.jsx)(n.code,{children:"dependencies.json"})," file."]}),"\n",(0,i.jsxs)(n.li,{children:["Support of ",(0,i.jsx)(n.a,{href:"/docs/Concepts/error-handling#trycatchend-try",children:(0,i.jsx)(n.code,{children:"Try...Catch...End try"})})," error handling structures."]}),"\n",(0,i.jsxs)(n.li,{children:["QUIC network layer now supports ",(0,i.jsx)(n.a,{href:"/docs/Desktop/clientServer#opening-a-remote-project",children:"broadcasting"}),", ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv20R5/4D/20-R5/Single-Sign-On-SSO-on-Windows.300-6932709.en.html",children:"SSO"}),", and ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv20R5/4D/20-R5/IP-Settings.300-6932707.en.html",children:"IPv6"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Support of ",(0,i.jsx)(n.a,{href:"/docs/ORDA/entities#restricting-entity-selections",children:"restricted entity selections"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Support of ",(0,i.jsx)(n.a,{href:"/docs/Concepts/classes#shared-classes",children:"shared classes"})," and ",(0,i.jsx)(n.a,{href:"/docs/Concepts/classes#singleton-classes",children:"singleton classes"}),". New Class properties: ",(0,i.jsx)(n.a,{href:"/docs/API/ClassClass#isshared",children:(0,i.jsx)(n.code,{children:"isShared"})}),", ",(0,i.jsx)(n.a,{href:"/docs/API/ClassClass#isingleton",children:(0,i.jsx)(n.code,{children:"isSingleton"})}),", ",(0,i.jsx)(n.a,{href:"/docs/API/ClassClass#me",children:(0,i.jsx)(n.code,{children:"me"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Support for ",(0,i.jsx)(n.a,{href:"../Concepts/classes.md/#initializing-the-property-in-the-declaration-line",children:"initializing a class property in its declaration line"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["New ",(0,i.jsx)(n.a,{href:"/docs/REST/authUsers#force-login-mode",children:"force login mode for REST requests"})," with a ",(0,i.jsx)(n.a,{href:"/docs/WebServer/qodly-studio#force-login",children:"specific support in Qodly Studio for 4D"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["New ",(0,i.jsx)(n.a,{href:"/docs/REST/format",children:"$format"})," REST parameter."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/commands/session",children:(0,i.jsx)(n.code,{children:"Session"})})," object is now available in remote user sessions and stored procedures session."]}),"\n",(0,i.jsxs)(n.li,{children:["4D Language commands: ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv20R5/4D/20-R5/What-s-new.901-6817247.en.html",children:"What's new page"})," on doc.4d.com."]}),"\n",(0,i.jsxs)(n.li,{children:["4D Write Pro: ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv20R5/4D/20-R5/What-s-new.901-6851780.en.html",children:"What's new page"})," on doc.4d.com."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://bugs.4d.fr/fixedbugslist?version=20_R5",children:(0,i.jsx)(n.strong,{children:"Fixed bug list"})}),": list of all bugs that have been fixed in 4D 20 R5."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"behavior-changes-2",children:"Behavior changes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The plug-ins ",(0,i.jsx)(n.em,{children:"4D Internet Commands"})," and ",(0,i.jsx)(n.em,{children:"4D for OCI"})," are no longer included in 4D installers. To get these plug-ins, you need to connect to the ",(0,i.jsx)(n.a,{href:"https://product-download.4d.com/",children:(0,i.jsx)(n.strong,{children:"4D Product Download portal"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Changes made in the Structure editor regarding graphical appearance of tables and fields (color, position, order...) are now saved in a separate file named ",(0,i.jsx)(n.code,{children:"catalog_editor.json"})," stored in the project's ",(0,i.jsx)(n.a,{href:"/docs/Project/architecture#sources",children:(0,i.jsx)(n.code,{children:"Sources"})})," folder."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"4d-20-r4",children:"4D 20 R4"}),"\n",(0,i.jsxs)(n.p,{children:["Read ",(0,i.jsx)(n.a,{href:"https://blog.4d.com/en-whats-new-in-4d-v20-R4/",children:(0,i.jsx)(n.strong,{children:"What\u2019s new in 4D 20 R4"})}),", the blog post that lists all new features and enhancements in 4D 20 R4."]}),"\n",(0,i.jsx)(n.h4,{id:"highlights-3",children:"Highlights"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Support of ",(0,i.jsxs)(n.a,{href:"/docs/Admin/tls#encryption",children:[(0,i.jsx)(n.code,{children:"ECDSA"})," encryption format"]})," for TLS certificates."]}),"\n",(0,i.jsxs)(n.li,{children:["Client/server and SQL server TLS connections are now ",(0,i.jsx)(n.a,{href:"/docs/Admin/tls#enabling-tls-with-the-other-servers",children:"configured dynamically"})," (no certificate files are required)."]}),"\n",(0,i.jsxs)(n.li,{children:["Direct HTML format for ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv20R4/4D/20-R4/Exporting-and-importing-structure-definitions.300-6654851.en.html",children:"structure definition exports"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["New ",(0,i.jsx)(n.a,{href:"/docs/code-editor/write-class-method#warnings-and-errors",children:"Code Live Checker"})," that enhances code control during code typing, syntax checking, and compilation steps to prevent execution errors."]}),"\n",(0,i.jsxs)(n.li,{children:["Method parameters declared in ",(0,i.jsx)(n.code,{children:"#DECLARE"})," prototypes are ",(0,i.jsx)(n.a,{href:"/docs/Concepts/parameters#compilation",children:'no longer necessary in "Compiler_" methods'}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Support of ",(0,i.jsx)(n.a,{href:"/docs/Project/date-time-formats",children:"custom date and time formats"})]}),"\n",(0,i.jsxs)(n.li,{children:["New ",(0,i.jsxs)(n.a,{href:"/docs/Concepts/error-handling#tryexpression",children:[(0,i.jsx)(n.code,{children:"Try(expression)"})," keyword"]})," to handle simple error cases."]}),"\n",(0,i.jsxs)(n.li,{children:["New ",(0,i.jsx)(n.a,{href:"/docs/API/HTTPRequestClass#http-parse-message",children:(0,i.jsx)(n.code,{children:"HTTP Parse message"})})," command."]}),"\n",(0,i.jsxs)(n.li,{children:["New ",(0,i.jsx)(n.a,{href:"/docs/settings/compatibility",children:"Non-blocking printing"})," compatibility option."]}),"\n",(0,i.jsxs)(n.li,{children:["New ",(0,i.jsx)(n.a,{href:"/docs/Admin/dataExplorer#editing-data",children:"editing mode"})," in the Data Explorer."]}),"\n",(0,i.jsxs)(n.li,{children:["4D Language commands: ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv20R4/4D/20-R4/What-s-new.901-6655756.en.html",children:"What's new page"})," on doc.4d.com."]}),"\n",(0,i.jsxs)(n.li,{children:["4D Write Pro: ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv20R4/4D/20-R4/What-s-new.901-6683440.en.html",children:"What's new page"})," on doc.4d.com."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://bugs.4d.fr/fixedbugslist?version=20_R4",children:(0,i.jsx)(n.strong,{children:"Fixed bug list"})}),": list of all bugs that have been fixed in 4D 20 R4."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"behavior-changes-3",children:"Behavior changes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Using a legacy syntax for declaring parameters (e.g. ",(0,i.jsx)(n.code,{children:"C_TEXT($1)"})," or ",(0,i.jsx)(n.code,{children:"var $1 : Text"}),") is now deprecated and generates warnings at code typing, syntax checking, and compilation steps."]}),"\n",(0,i.jsxs)(n.li,{children:["Selections are now kept consistent after some records have been deleted and others records created (see ",(0,i.jsx)(n.a,{href:"https://blog.4d.com/4d-keeps-your-selections-of-records-consistent-regarding-deletion-of-records/",children:"this blog post"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["In the updated ",(0,i.jsx)(n.a,{href:"#library-table",children:"OpenSSL library"}),", the default SSL/TLS security level has been changed from 1 to 2. RSA, DSA and DH keys of 1024 bits and above and less than 2048 bits as well as ECC keys of 160 bits and above and less than 224 bits are now no longer allowed. By default, TLS compression was already disabled in previous OpenSSL versions. At security level 2 it cannot be enabled."]}),"\n",(0,i.jsxs)(n.li,{children:["In order to allow password verification when the ",(0,i.jsx)(n.a,{href:"https://blog.4d.com/bcrypt-support-for-passwords/",children:"4D user directory uses the bcrypt algorithm"}),', the "password" value in the ',(0,i.jsx)(n.em,{children:"connectionInfo"})," parameter of the ",(0,i.jsx)(n.a,{href:"/docs/commands/open-datastore",children:(0,i.jsx)(n.code,{children:"Open datastore"})}),' command is now sent in clear form by default. Make sure your "On REST authentication" database method can handle passwords in clear form (third parameter is then ',(0,i.jsx)(n.strong,{children:"False"}),") and that ",(0,i.jsx)(n.code,{children:"Open datastore"}),' encrypts your connection by passing the "tls" option to ',(0,i.jsx)(n.strong,{children:"True"})," in ",(0,i.jsx)(n.em,{children:"connectionInfo"}),'. In specific cases, a new "passwordAlgorithm" option can also be used for compatibility (see ',(0,i.jsx)(n.a,{href:"/docs/commands/open-datastore",children:(0,i.jsx)(n.code,{children:"Open datastore"})})," command)."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"4d-20-r3",children:"4D 20 R3"}),"\n",(0,i.jsxs)(n.p,{children:["Read ",(0,i.jsx)(n.a,{href:"https://blog.4d.com/en-whats-new-in-4d-20-vR3/",children:(0,i.jsx)(n.strong,{children:"What\u2019s new in 4D 20 R3"})}),", the blog post that lists all new features and enhancements in 4D 20 R3."]}),"\n",(0,i.jsx)(n.h4,{id:"highlights-4",children:"Highlights"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["New ",(0,i.jsx)(n.a,{href:"/docs/API/CollectionClass#multisort",children:(0,i.jsx)(n.code,{children:"collection.multiSort"})})," function."]}),"\n",(0,i.jsxs)(n.li,{children:["Support of ",(0,i.jsx)(n.em,{children:"context"})," parameter in ",(0,i.jsx)(n.a,{href:"/docs/commands/formula-from-string",children:(0,i.jsx)(n.code,{children:"Formula from string"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Support of ",(0,i.jsx)(n.code,{children:"headers"})," property in ",(0,i.jsx)(n.em,{children:"connectionHandler"})," parameter of ",(0,i.jsx)(n.a,{href:"/docs/API/WebSocketClass#4dwebsocketnew",children:"4D.WebSocket.new"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/ORDA/global-stamp",children:"Global modification stamp"})," to help implementing data synchronization modules. New functions: ",(0,i.jsx)(n.a,{href:"/docs/API/DataStoreClass#getglobalstamp",children:(0,i.jsx)(n.code,{children:"ds.getGlobalStamp"})})," and ",(0,i.jsx)(n.a,{href:"/docs/API/DataStoreClass#setglobalstamp",children:(0,i.jsx)(n.code,{children:"ds.setGlobalStamp"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Assigning file references to picture/blob attributes is ",(0,i.jsx)(n.a,{href:"/docs/ORDA/entities#d#assigning-files-to-picture-or-blob-attributes",children:"supported in ORDA"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Support for ",(0,i.jsx)(n.a,{href:"../Concepts/variables/#initializing-variables-in-the-declaration-line",children:"initializing the variable's value and data type in the declaration line"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Log file settings are now ",(0,i.jsx)(n.a,{href:"/docs/Backup/settings#log-file-management",children:"saved with the current data file"})]}),"\n",(0,i.jsxs)(n.li,{children:["New syntax for ",(0,i.jsx)(n.a,{href:"/docs/Concepts/parameters#declaring-variadic-parameters",children:"declaring variadic parameters"})]}),"\n",(0,i.jsxs)(n.li,{children:["4D View Pro: Support for the ",(0,i.jsx)(n.a,{href:"../ViewPro/commands/vp-import-from-blob",children:"import"})," and ",(0,i.jsx)(n.a,{href:"../ViewPro/commands/vp-export-to-blob",children:"export"})," of 4D View Pro documents in Blob format."]}),"\n",(0,i.jsxs)(n.li,{children:["4D Language commands: ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6531224.en.html",children:"What's new page"})," on doc.4d.com."]}),"\n",(0,i.jsxs)(n.li,{children:["4D Write Pro: ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv20R3/4D/20-R3/What-s-new.901-6475174.en.html",children:"What's new page"})," on doc.4d.com."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://bugs.4d.fr/fixedbugslist?version=20_R3",children:(0,i.jsx)(n.strong,{children:"Fixed bug list"})}),": list of all bugs that have been fixed in 4D 20 R3."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"behavior-changes-4",children:"Behavior changes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Some errors were catchable by your ",(0,i.jsx)(n.a,{href:"/docs/Concepts/error-handling",children:"error handling method"})," in interpreted mode only. A fix has been done, so that the following errors will now be caught also in compiled mode: ",(0,i.jsx)(n.em,{children:"Indice out of range"}),", ",(0,i.jsx)(n.em,{children:"Type incompatible"}),", and ",(0,i.jsx)(n.em,{children:"Dereferencing a Null pointer"}),". However, for such errors on Intel processors, the procedure is still interrupted as before, whereas on Apple Silicon processors the procedure is only interrupted if you call the ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page156.html",children:(0,i.jsx)(n.code,{children:"ABORT"})})," command."]}),"\n",(0,i.jsxs)(n.li,{children:["4D no longer includes an internal PHP interpreter. You need to ",(0,i.jsx)(n.a,{href:"https://blog.4d.com/deprecation-of-php-commands-and-removal-of-4d-built-in-php-interpreter",children:"set up and run your own PHP interpreter"})," to use PHP commands."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"4d-20-r2",children:"4D 20 R2"}),"\n",(0,i.jsxs)(n.p,{children:["Read ",(0,i.jsx)(n.a,{href:"https://blog.4d.com/en-whats-new-in-4d-v20-R2/",children:(0,i.jsx)(n.strong,{children:"What\u2019s new in 4D 20 R2"})}),", the blog post that lists all new features and enhancements in 4D 20 R2."]}),"\n",(0,i.jsx)(n.admonition,{title:"Security Note",type:"warning",children:(0,i.jsxs)(n.p,{children:["If your 4D applications use TLS connections, it is recommended that you upgrade to 4D 20 R2 HF1 build 100440 or higher. For more information, refer to this ",(0,i.jsx)(n.a,{href:"https://blog.4d.com/security-bulletin-two-cves-and-how-to-stay-secure/",children:"Security bulletin"}),"."]})}),"\n",(0,i.jsx)(n.h4,{id:"highlights-5",children:"Highlights"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["New ",(0,i.jsx)(n.a,{href:"/docs/API/WebSocketClass",children:"WebSocket class"})," to create and manage client WebSocket connections from 4D."]}),"\n",(0,i.jsxs)(n.li,{children:["New QUIC network layer ",(0,i.jsx)(n.a,{href:"/docs/settings/client-server#network-layer",children:"interface setting"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["4D View Pro: Support of the ",(0,i.jsx)(n.strong,{children:".sjs"})," file format for the ",(0,i.jsx)(n.a,{href:"../ViewPro/commands/vp-import-document",children:"import"})," and ",(0,i.jsx)(n.a,{href:"../ViewPro/commands/vp-export-document",children:"export"})," of documents."]}),"\n",(0,i.jsxs)(n.li,{children:["4D Language commands: ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv20R2/4D/20-R2/What-s-new.901-6398284.en.html",children:"What's new page"})," on doc.4d.com."]}),"\n",(0,i.jsxs)(n.li,{children:["4D Write Pro: ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv20R2/4D/20-R2/What-s-new.901-6390313.en.html",children:"What's new page"})," on doc.4d.com."]}),"\n",(0,i.jsxs)(n.li,{children:["4D Write Pro Interface: New ",(0,i.jsx)(n.a,{href:"/docs/WritePro/writeprointerface",children:"Table Wizard"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://bugs.4d.fr/fixedbugslist?version=20_R2",children:(0,i.jsx)(n.strong,{children:"Fixed bug list"})}),": list of all bugs that have been fixed in 4D 20 R2."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"behavior-changes-5",children:"Behavior changes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Warning"}),": The starting ",(0,i.jsx)(n.a,{href:"/docs/API/FileHandleClass#offset",children:(0,i.jsx)(n.code,{children:"offset"})})," value of ",(0,i.jsx)(n.a,{href:"/docs/API/FileHandleClass",children:"4D.FileHandle"})," objects was incorrectly set to 1 instead of 0. A fix has been made in 4D as of versions ",(0,i.jsx)(n.strong,{children:"20.1 HF1"})," and ",(0,i.jsx)(n.strong,{children:"20 R2"})," and the value is now 0."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"4d-20x-lts",children:"4D 20.x LTS"}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/20/Notes/updates",children:(0,i.jsx)(n.strong,{children:"Release Notes for 4D 20.x LTS"})}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"library-table",children:"Library table"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Library"}),(0,i.jsx)(n.th,{children:"Current version"}),(0,i.jsx)(n.th,{children:"Updated in 4D"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"BoringSSL"}),(0,i.jsx)(n.td,{children:"0aa300b"}),(0,i.jsx)(n.td,{children:"20 R6"}),(0,i.jsx)(n.td,{children:"Used for QUIC"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"CEF"}),(0,i.jsx)(n.td,{children:"128"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"20 R7"})}),(0,i.jsx)(n.td,{children:"Chromium 6613"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hunspell"}),(0,i.jsx)(n.td,{children:"1.7.2"}),(0,i.jsx)(n.td,{children:"20"}),(0,i.jsx)(n.td,{children:"Used for spell checking in 4D forms and 4D Write Pro"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ICU"}),(0,i.jsx)(n.td,{children:"73.2"}),(0,i.jsx)(n.td,{children:"20"}),(0,i.jsx)(n.td,{children:"This major upgrade forces an automatic rebuild of alphanumeric, text and object indexes."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"libldap"}),(0,i.jsx)(n.td,{children:"2.6.7"}),(0,i.jsx)(n.td,{children:"20 R6"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"libsasl"}),(0,i.jsx)(n.td,{children:"2.1.28"}),(0,i.jsx)(n.td,{children:"20"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Libuv"}),(0,i.jsx)(n.td,{children:"1.48"}),(0,i.jsx)(n.td,{children:"20 R6"}),(0,i.jsx)(n.td,{children:"Used for QUIC"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"libZip"}),(0,i.jsx)(n.td,{children:"1.9.2"}),(0,i.jsx)(n.td,{children:"20"}),(0,i.jsx)(n.td,{children:"Used by zip class, 4D Write Pro, svg and serverNet components"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"LZMA"}),(0,i.jsx)(n.td,{children:"5.4.1"}),(0,i.jsx)(n.td,{children:"20"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"OpenSSL"}),(0,i.jsx)(n.td,{children:"3.3.2"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"20 R7"})}),(0,i.jsxs)(n.td,{children:["Default TLS/SSL security level has been upgraded. See ",(0,i.jsx)(n.a,{href:"#behavior-changes",children:"Behavior changes"})," for release 20 R4"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"PDFWriter"}),(0,i.jsx)(n.td,{children:"4.3"}),(0,i.jsx)(n.td,{children:"20"}),(0,i.jsx)(n.td,{children:"FreeType dependency in 12.2.1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"PHP"}),(0,i.jsx)(n.td,{children:"8.2.4"}),(0,i.jsx)(n.td,{children:"20"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SpreadJS"}),(0,i.jsx)(n.td,{children:"17.1.0"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"20 R7"})}),(0,i.jsxs)(n.td,{children:["See ",(0,i.jsx)(n.a,{href:"https://blog.4d.com/4d-view-pro-whats-new-in-4d-20-r7/",children:"this blog post"})," for an overview of the new features"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"webKit"}),(0,i.jsx)(n.td,{children:"WKWebView"}),(0,i.jsx)(n.td,{children:"19"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Zlib"}),(0,i.jsx)(n.td,{children:"1.2.13"}),(0,i.jsx)(n.td,{children:"20"}),(0,i.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var r=s(667294);let i={},t=r.createContext(i);function d(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);