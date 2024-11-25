"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53829"],{71495:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>d,default:()=>a,assets:()=>c,toc:()=>h,frontMatter:()=>l});var i=JSON.parse('{"id":"API/SessionClass","title":"Session","description":"Session objects are returned by the Session command when scalable sessions are enabled in your project. The Session object is automatically created and maintained by the 4D web server to control the session of a web client (e.g. a browser). This object provides the web developer with an interface to the user session, allowing to manage privileges, store contextual data, share information between processes, and launch session-related preemptive processes.","source":"@site/versioned_docs/version-20/API/SessionClass.md","sourceDirName":"API","slug":"/API/SessionClass","permalink":"/docs/20/API/SessionClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FSessionClass.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"SessionClass","title":"Session"},"sidebar":"docs","previous":{"title":"POP3Transporter","permalink":"/docs/20/API/POP3TransporterClass"},"next":{"title":"Signal","permalink":"/docs/20/API/SignalClass"}}'),r=s("785893"),t=s("250065");let l={id:"SessionClass",title:"Session"},d=void 0,c={},h=[{value:"Summary",id:"summary",level:3},{value:"Session",id:"session",level:2},{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:".clearPrivileges()",id:"clearprivileges",level:2},{value:"Description",id:"description-1",level:4},{value:"Example",id:"example-1",level:4},{value:".expirationDate",id:"expirationdate",level:2},{value:"Description",id:"description-2",level:4},{value:"Example",id:"example-2",level:4},{value:".hasPrivilege()",id:"hasprivilege",level:2},{value:"Description",id:"description-3",level:4},{value:"Example",id:"example-3",level:4},{value:".idleTimeout",id:"idletimeout",level:2},{value:"Description",id:"description-4",level:4},{value:"Example",id:"example-4",level:4},{value:".isGuest()",id:"isguest",level:2},{value:"Description",id:"description-5",level:4},{value:"Example",id:"example-5",level:4},{value:".setPrivileges()",id:"setprivileges",level:2},{value:"Description",id:"description-6",level:4},{value:"Example",id:"example-6",level:4},{value:".storage",id:"storage",level:2},{value:"Description",id:"description-7",level:4},{value:"Example",id:"example-7",level:4},{value:".userName",id:"username",level:2},{value:"Description",id:"description-8",level:4}];function o(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Session objects are returned by the ",(0,r.jsx)(n.a,{href:"#session",children:(0,r.jsx)(n.code,{children:"Session"})})," command when ",(0,r.jsx)(n.a,{href:"/docs/20/WebServer/sessions#enabling-sessions",children:"scalable sessions are enabled in your project"}),". The Session object is automatically created and maintained by the 4D web server to control the session of a web client (e.g. a browser). This object provides the web developer with an interface to the user session, allowing to manage privileges, store contextual data, share information between processes, and launch session-related preemptive processes."]}),"\n",(0,r.jsxs)(n.p,{children:["For detailed information about the session implementation, please refer to the ",(0,r.jsx)(n.a,{href:"/docs/20/WebServer/sessions",children:"web server Sessions"})," section."]}),"\n",(0,r.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"#clearprivileges",children:(0,r.jsx)(n.strong,{children:".clearPrivileges()"})}),"\xa0\xa0\xa0\xa0removes all the privileges associated to the session"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#expirationdate",children:[(0,r.jsx)(n.strong,{children:".expirationDate"})," : Text"]}),"\xa0\xa0\xa0\xa0the expiration date and time of the session cookie"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#hasprivilege",children:[(0,r.jsx)(n.strong,{children:".hasPrivilege"}),"( ",(0,r.jsx)(n.em,{children:"privilege"})," : Text ) : Boolean"]}),"\xa0\xa0\xa0\xa0returns True if the privilege is associated to the session, and False otherwise"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#idletimeout",children:[(0,r.jsx)(n.strong,{children:".idleTimeout"})," : Integer"]}),"\xa0\xa0\xa0\xa0the inactivity session timeout (in minutes), after which the session is automatically closed by 4D"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#isguest",children:[(0,r.jsx)(n.strong,{children:".isGuest()"})," : Boolean"]}),"\xa0\xa0\xa0\xa0returns True if the session is a Guest session (i.e. it has no privileges)"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#setprivileges",children:[(0,r.jsx)(n.strong,{children:".setPrivileges"}),"( ",(0,r.jsx)(n.em,{children:"privilege"})," : Text )",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:".setPrivileges"}),"( ",(0,r.jsx)(n.em,{children:"privileges"})," : Collection )",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:".setPrivileges"}),"( ",(0,r.jsx)(n.em,{children:"settings"})," : Object )"]}),"\xa0\xa0\xa0\xa0associates the privilege(s) and/or role(s) defined in the parameter to the session"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#storage",children:[(0,r.jsx)(n.strong,{children:".storage"})," : Object"]}),"\xa0\xa0\xa0\xa0a shared object that can be used to store information available to all requests of the web client"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#username",children:[(0,r.jsx)(n.strong,{children:".userName"})," : Text"]}),"\xa0\xa0\xa0\xa0the user name associated to the session"]})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"session",children:"Session"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R6"}),(0,r.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Session"})," : 4D.Session"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"4D.Session"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsx)(n.td,{children:"Session object"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Session"})," command returns the ",(0,r.jsx)(n.code,{children:"Session"})," object corresponding to the current scalable user web session."]}),"\n",(0,r.jsxs)(n.p,{children:["This command only works when ",(0,r.jsx)(n.a,{href:"/docs/20/WebServer/sessions#enabling-sessions",children:"scalable sessions are enabled"}),". It returns ",(0,r.jsx)(n.em,{children:"Null"})," when sessions are disabled or when legacy sessions are used."]}),"\n",(0,r.jsxs)(n.p,{children:["When scalable sessions are enabled, the ",(0,r.jsx)(n.code,{children:"Session"})," object is available from any web processes in the following contexts:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"On Web Authentication"}),", ",(0,r.jsx)(n.code,{children:"On Web Connection"}),", and ",(0,r.jsx)(n.code,{children:"On REST Authentication"})," database methods,"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication",children:(0,r.jsx)(n.code,{children:"On Mobile App Authentication"})})," and ",(0,r.jsx)(n.a,{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action",children:(0,r.jsx)(n.code,{children:"On Mobile App Action"})})," database methods for mobile requests,"]}),"\n",(0,r.jsxs)(n.li,{children:["ORDA ",(0,r.jsx)(n.a,{href:"/docs/20/ORDA/ordaClasses",children:"Data Model Class functions"})," called with REST requests,"]}),"\n",(0,r.jsx)(n.li,{children:"code processed through 4D tags in semi-dynamic pages (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)"}),"\n",(0,r.jsx)(n.li,{children:'project methods with the "Available through 4D tags and URLs (4DACTION...)" attribute and called through 4DACTION/ urls.'}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["You have defined the ",(0,r.jsx)(n.code,{children:"action_Session"}),' method with attribute "Available through 4D tags and URLs". You call the method by entering the following URL in your browser:']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"IP:port/4DACTION/action_Session\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'  //action_Session method\n Case of\n    :(Session#Null)\n       If(Session.hasPrivilege("WebAdmin")) //calling the hasPrivilege function\n          WEB SEND TEXT("4DACTION --\x3e Session is WebAdmin")\n       Else\n          WEB SEND TEXT("4DACTION --\x3e Session is not WebAdmin")\n       End if\n    Else\n       WEB SEND TEXT("4DACTION --\x3e Sesion is null")\n End case\n'})}),"\n",(0,r.jsx)(n.h2,{id:"clearprivileges",children:".clearPrivileges()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R6"}),(0,r.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:".clearPrivileges()"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{style:{textAlign:"center"}}),(0,r.jsx)(n.td,{children:"Does not require any parameters"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description-1",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".clearPrivileges()"})," function removes all the privileges associated to the session. As a result, the session automatically becomes a Guest session."]}),"\n",(0,r.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"//Invalidate a session\nvar $isGuest : Boolean  \n\nSession.clearPrivileges()\n$isGuest:=Session.isGuest() //$isGuest is True\n"})}),"\n",(0,r.jsx)(n.h2,{id:"expirationdate",children:".expirationDate"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R6"}),(0,r.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".expirationDate"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"description-2",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".expirationDate"})," property contains the expiration date and time of the session cookie. The value is expressed as text in the ISO 8601 format: ",(0,r.jsx)(n.code,{children:"YYYY-MM-DDTHH:MM:SS.mmmZ"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["This property is ",(0,r.jsx)(n.strong,{children:"read-only"}),". It is automatically recomputed if the ",(0,r.jsx)(n.a,{href:"#idletimeout",children:(0,r.jsx)(n.code,{children:".idleTimeout"})})," property value is modified."]}),"\n",(0,r.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $expiration : Text\n$expiration:=Session.expirationDate //eg "2021-11-05T17:10:42Z"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"hasprivilege",children:".hasPrivilege()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R6"}),(0,r.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".hasPrivilege"}),"( ",(0,r.jsx)(n.em,{children:"privilege"})," : Text ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"privilege"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsx)(n.td,{children:"Name of the privilege to verify"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsxs)(n.td,{children:["True if session has ",(0,r.jsx)(n.em,{children:"privilege"}),", False otherwise"]})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description-3",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".hasPrivilege()"})," function returns True if the privilege is associated to the session, and False otherwise."]}),"\n",(0,r.jsx)(n.h4,{id:"example-3",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:'You want to check if the "WebAdmin" privilege is associated to the session:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'If (Session.hasPrivilege("WebAdmin"))\n	//Access is granted, do nothing\nElse\n	//Display an authentication page\n\nEnd if\n'})}),"\n",(0,r.jsx)(n.h2,{id:"idletimeout",children:".idleTimeout"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R6"}),(0,r.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".idleTimeout"})," : Integer"]}),"\n",(0,r.jsx)(n.h4,{id:"description-4",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".idleTimeout"})," property contains the inactivity session timeout (in minutes), after which the session is automatically closed by 4D."]}),"\n",(0,r.jsx)(n.p,{children:"If this property is not set, the default value is 60 (1h)."}),"\n",(0,r.jsxs)(n.p,{children:["When this property is set, the ",(0,r.jsx)(n.a,{href:"#expirationdate",children:(0,r.jsx)(n.code,{children:".expirationDate"})})," property is updated accordingly."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The value cannot be less than 60: if a lower value is set, the timeout is raised up to 60."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["This property is ",(0,r.jsx)(n.strong,{children:"read write"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"example-4",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"If (Session.isGuest())\n		// A Guest session will close after 60 minutes of inactivity\n	Session.idleTimeout:=60\nElse\n		// Other sessions will close after 120 minutes of inactivity\n	Session.idleTimeout:=120\nEnd if\n\n"})}),"\n",(0,r.jsx)(n.h2,{id:"isguest",children:".isGuest()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R6"}),(0,r.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".isGuest()"})," : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsx)(n.td,{children:"True if session is a Guest one, False otherwise"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description-5",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".isGuest()"})," function returns True if the session is a Guest session (i.e. it has no privileges)."]}),"\n",(0,r.jsx)(n.h4,{id:"example-5",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"On Web Connection"})," database method:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"If (Session.isGuest())\n	//Do something for Guest user\nEnd if\n"})}),"\n",(0,r.jsx)(n.h2,{id:"setprivileges",children:".setPrivileges()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R8"}),(0,r.jsx)(n.td,{children:'Support of "roles" Settings property'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R6"}),(0,r.jsx)(n.td,{children:"Added"})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".setPrivileges"}),"( ",(0,r.jsx)(n.em,{children:"privilege"})," : Text )",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:".setPrivileges"}),"( ",(0,r.jsx)(n.em,{children:"privileges"})," : Collection )",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:".setPrivileges"}),"( ",(0,r.jsx)(n.em,{children:"settings"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"privilege"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Privilege name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"privileges"}),(0,r.jsx)(n.td,{children:"Collection"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Collection of privilege names"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"settings"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:'Object with a "privileges" property (string or collection)'})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description-6",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".setPrivileges()"})," function associates the privilege(s) and/or role(s) defined in the parameter to the session."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.em,{children:"privilege"})," parameter, pass a string containing a privilege name (or several comma-separated privilege names)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.em,{children:"privileges"})," parameter, pass a collection of strings containing privilege names."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.em,{children:"settings"})," parameter, pass an object containing the following properties:"]}),"\n"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"privileges"}),(0,r.jsx)(n.td,{children:"Text or Collection"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.li,{children:"String containing a privilege name, or"}),(0,r.jsx)(n.li,{children:"Collection of strings containing privilege names"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"roles"}),(0,r.jsx)(n.td,{children:"Text or Collection"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.li,{children:"String containing a role, or"}),(0,r.jsx)(n.li,{children:"Collection of strings containing roles"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"userName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"User name to associate to the session (optional)"})]})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Privileges and roles are defined in ",(0,r.jsx)(n.a,{href:"/docs/20/ORDA/privileges#rolesjson-file",children:(0,r.jsx)(n.code,{children:"roles.json"})})," file of the project. For more information, please refer to the ",(0,r.jsx)(n.a,{href:"/docs/20/ORDA/privileges",children:(0,r.jsx)(n.strong,{children:"Privileges"})})," section."]})}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.code,{children:"privileges"})," or ",(0,r.jsx)(n.code,{children:"roles"})," property contains a name that is not declared in the ",(0,r.jsx)(n.a,{href:"/docs/20/ORDA/privileges#rolesjson-file",children:(0,r.jsx)(n.code,{children:"roles.json"})})," file, it is ignored."]}),"\n",(0,r.jsxs)(n.p,{children:["By default when no privilege or role is associated to the session, the session is a ",(0,r.jsx)(n.a,{href:"#isguest",children:"Guest session"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"#username",children:(0,r.jsx)(n.code,{children:"userName"})})," property is available at session object level (read-only)."]}),"\n",(0,r.jsx)(n.h4,{id:"example-6",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:'In a custom authentication method, you set the "WebAdmin" privilege to the user:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $userOK : Boolean\n\n... //Authenticate the user\n\nIf ($userOK) //The user has been approved\n  var $info : Object\n  $info:=New object()\n  $info.privileges:=New collection("WebAdmin")\n  Session.setPrivileges($info)\nEnd if\n\n'})}),"\n",(0,r.jsx)(n.h2,{id:"storage",children:".storage"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R6"}),(0,r.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".storage"})," : Object"]}),"\n",(0,r.jsx)(n.h4,{id:"description-7",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".storage"})," property contains a shared object that can be used to store information available to all requests of the web client."]}),"\n",(0,r.jsxs)(n.p,{children:["When a ",(0,r.jsx)(n.code,{children:"Session"})," object is created, the ",(0,r.jsx)(n.code,{children:".storage"})," property is empty. Since it is a shared object, this property will be available in the ",(0,r.jsx)(n.code,{children:"Storage"})," object of the server."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Like the ",(0,r.jsx)(n.code,{children:"Storage"})," object of the server, the ",(0,r.jsx)(n.code,{children:".storage"}),' property is always "single": adding a shared object or a shared collection to ',(0,r.jsx)(n.code,{children:".storage"})," does not create a shared group."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["This property is ",(0,r.jsx)(n.strong,{children:"read only"})," itself but it returns a read-write object."]}),"\n",(0,r.jsx)(n.h4,{id:"example-7",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["You want to store the client IP in the ",(0,r.jsx)(n.code,{children:".storage"})," property. You can write in the ",(0,r.jsx)(n.code,{children:"On Web Authentication"})," database method:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'If (Session.storage.clientIP=Null) //first access\n    Use (Session.storage)\n        Session.storage.clientIP:=New shared object("value"; $clientIP)\n    End use\nEnd if\n\n'})}),"\n",(0,r.jsx)(n.h2,{id:"username",children:".userName"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R6"}),(0,r.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".userName"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"description-8",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".userName"})," property contains the user name associated to the session. You can use it to identify the user within your code."]}),"\n",(0,r.jsxs)(n.p,{children:["This property is an empty string by default. It can be set using the ",(0,r.jsx)(n.code,{children:"privileges"})," property of the ",(0,r.jsx)(n.a,{href:"#setprivileges",children:(0,r.jsx)(n.code,{children:"setPrivileges()"})})," function."]}),"\n",(0,r.jsxs)(n.p,{children:["This property is ",(0,r.jsx)(n.strong,{children:"read only"}),"."]})]})}function a(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var i=s(667294);let r={},t=i.createContext(r);function l(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);