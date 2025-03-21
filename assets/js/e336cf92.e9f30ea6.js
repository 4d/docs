"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9339"],{238676:function(e,s,n){n.r(s),n.d(s,{default:()=>a,frontMatter:()=>l,metadata:()=>i,assets:()=>c,toc:()=>o,contentTitle:()=>d});var i=JSON.parse('{"id":"API/SessionClass","title":"Session","description":"Session objects are returned by the Session command. These objects provide the developer with an interface allowing to manage the current user session and execute actions such as store contextual data, share information between session processes, launch session-related preemptive processes, or (web only) manage privileges.","source":"@site/versioned_docs/version-20-R7/API/SessionClass.md","sourceDirName":"API","slug":"/API/SessionClass","permalink":"/docs/20-R7/API/SessionClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FSessionClass.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"SessionClass","title":"Session"},"sidebar":"docs","previous":{"title":"POP3Transporter","permalink":"/docs/20-R7/API/POP3TransporterClass"},"next":{"title":"Signal","permalink":"/docs/20-R7/API/SignalClass"}}'),r=n("785893"),t=n("250065");let l={id:"SessionClass",title:"Session"},d=void 0,c={},o=[{value:"Session types",id:"session-types",level:3},{value:"Summary",id:"summary",level:3},{value:".clearPrivileges()",id:"clearprivileges",level:2},{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:".expirationDate",id:"expirationdate",level:2},{value:"Description",id:"description-1",level:4},{value:"Example",id:"example-1",level:4},{value:".getPrivileges()",id:"getprivileges",level:2},{value:"Description",id:"description-2",level:4},{value:"Example",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:".hasPrivilege()",id:"hasprivilege",level:2},{value:"Description",id:"description-3",level:4},{value:"Example",id:"example-3",level:4},{value:".id",id:"id",level:2},{value:"Description",id:"description-4",level:4},{value:".idleTimeout",id:"idletimeout",level:2},{value:"Description",id:"description-5",level:4},{value:"Example",id:"example-4",level:4},{value:".info",id:"info",level:2},{value:"Description",id:"description-6",level:4},{value:".isGuest()",id:"isguest",level:2},{value:"Description",id:"description-7",level:4},{value:"Example",id:"example-5",level:4},{value:".setPrivileges()",id:"setprivileges",level:2},{value:"Description",id:"description-8",level:4},{value:"Example",id:"example-6",level:4},{value:"See also",id:"see-also-1",level:4},{value:".storage",id:"storage",level:2},{value:"Description",id:"description-9",level:4},{value:"Web session example",id:"web-session-example",level:4},{value:"Remote session example",id:"remote-session-example",level:4},{value:".userName",id:"username",level:2},{value:"Description",id:"description-10",level:4}];function h(e){let s={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["Session objects are returned by the ",(0,r.jsx)(s.a,{href:"/docs/20-R7/commands/session",children:(0,r.jsx)(s.code,{children:"Session"})})," command. These objects provide the developer with an interface allowing to manage the current user session and execute actions such as store contextual data, share information between session processes, launch session-related preemptive processes, or (web only) manage ",(0,r.jsx)(s.a,{href:"/docs/20-R7/ORDA/privileges",children:"privileges"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"session-types",children:"Session types"}),"\n",(0,r.jsx)(s.p,{children:"Three types of sessions are supported by this class:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/docs/20-R7/WebServer/sessions",children:(0,r.jsx)(s.strong,{children:"Web user sessions"})}),": Web user sessions are available when ",(0,r.jsx)(s.a,{href:"/docs/20-R7/WebServer/sessions#enabling-web-sessions",children:"scalable sessions are enabled in your project"}),". They are used for Web and REST connections, and can be assigned privileges."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/docs/20-R7/Desktop/clientServer#remote-user-sessions",children:(0,r.jsx)(s.strong,{children:"Remote client user sessions"})}),": In client/server applications, remote users have their own sessions managed on the server."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://doc.4d.com/4Dv20/4D/20/4D-Server-and-the-4D-Language.300-6330554.en.html",children:(0,r.jsx)(s.strong,{children:"Stored procedures session"})}),": All stored procedures executed on the server share the same virtual user session."]}),"\n"]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["The availability of properties and functions in the ",(0,r.jsx)(s.code,{children:"Session"})," object depends on the session type."]})}),"\n",(0,r.jsx)(s.h3,{id:"summary",children:"Summary"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{})})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#clearprivileges",children:[(0,r.jsx)(s.strong,{children:".clearPrivileges()"})," : Boolean"]}),(0,r.jsx)(s.br,{}),"removes all the privileges associated to the session and returns ",(0,r.jsx)(s.strong,{children:"True"})," if the execution was successful"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#expirationdate",children:[(0,r.jsx)(s.strong,{children:".expirationDate"})," : Text"]}),(0,r.jsx)(s.br,{}),"the expiration date and time of the session cookie"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#getprivileges",children:[(0,r.jsx)(s.strong,{children:".getPrivileges"}),"() : Collection"]}),(0,r.jsx)(s.br,{}),"returns a collection of all the privilege names associated to the session"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#hasprivilege",children:[(0,r.jsx)(s.strong,{children:".hasPrivilege"}),"( ",(0,r.jsx)(s.em,{children:"privilege"})," : Text ) : Boolean"]}),(0,r.jsx)(s.br,{}),"returns True if the ",(0,r.jsx)(s.em,{children:"privilege"})," is associated to the session, and False otherwise"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#id",children:[(0,r.jsx)(s.strong,{children:".id"})," : Text"]}),(0,r.jsx)(s.br,{}),"the unique identifier (UUID) of the session on the server"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#idletimeout",children:[(0,r.jsx)(s.strong,{children:".idleTimeout"})," : Integer"]}),(0,r.jsx)(s.br,{}),"the inactivity session timeout (in minutes), after which the session is automatically closed by 4D"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#info",children:[(0,r.jsx)(s.strong,{children:".info"})," : Object"]}),(0,r.jsx)(s.br,{}),"describes the remote client or stored procedure session on the server"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#isguest",children:[(0,r.jsx)(s.strong,{children:".isGuest()"})," : Boolean"]}),(0,r.jsx)(s.br,{}),"returns True if the session is a Guest session (i.e. it has no privileges)"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#setprivileges",children:[(0,r.jsx)(s.strong,{children:".setPrivileges"}),"( ",(0,r.jsx)(s.em,{children:"privilege"})," : Text ) : Boolean",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".setPrivileges"}),"( ",(0,r.jsx)(s.em,{children:"privileges"})," : Collection )",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".setPrivileges"}),"( ",(0,r.jsx)(s.em,{children:"settings"})," : Object ) : Boolean"]}),(0,r.jsx)(s.br,{}),"associates the privilege(s) and/or role(s) defined in the parameter to the session and returns ",(0,r.jsx)(s.strong,{children:"True"})," if the execution was successful"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#storage",children:[(0,r.jsx)(s.strong,{children:".storage"})," : Object"]}),(0,r.jsx)(s.br,{}),"a shared object that can be used to store information available to all processes of the session"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#username",children:[(0,r.jsx)(s.strong,{children:".userName"})," : Text"]}),(0,r.jsx)(s.br,{}),"the user name associated to the session"]})})]})]}),"\n",(0,r.jsx)(s.h2,{id:"clearprivileges",children:".clearPrivileges()"}),"\n",(0,r.jsxs)(s.details,{children:[(0,r.jsx)(s.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Release"}),(0,r.jsx)(s.th,{children:"Changes"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"18 R6"}),(0,r.jsx)(s.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".clearPrivileges()"})," : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{style:{textAlign:"center"}}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Result"}),(0,r.jsx)(s.td,{children:"Boolean"}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsx)(s.td,{children:"True if the execution is successful"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["This function does nothing and always returns ",(0,r.jsx)(s.strong,{children:"True"})," with remote client and stored procedure sessions."]})}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".clearPrivileges()"})," function removes all the privileges associated to the session and returns ",(0,r.jsx)(s.strong,{children:"True"})," if the execution was successful. As a result, the session automatically becomes a Guest session."]}),"\n",(0,r.jsx)(s.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"//Invalidate a web user session\nvar $isGuest : Boolean\nvar $isOK : Boolean\n\n$isOK:=Session.clearPrivileges()\n$isGuest:=Session.isGuest() //$isGuest is True\n"})}),"\n",(0,r.jsx)(s.h2,{id:"expirationdate",children:".expirationDate"}),"\n",(0,r.jsxs)(s.details,{children:[(0,r.jsx)(s.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Release"}),(0,r.jsx)(s.th,{children:"Changes"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"18 R6"}),(0,r.jsx)(s.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".expirationDate"})," : Text"]}),"\n",(0,r.jsx)(s.h4,{id:"description-1",children:"Description"}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsx)(s.p,{children:"This property is only available with web user sessions."})}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".expirationDate"})," property contains the expiration date and time of the session cookie. The value is expressed as text in the ISO 8601 format: ",(0,r.jsx)(s.code,{children:"YYYY-MM-DDTHH:MM:SS.mmmZ"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["This property is ",(0,r.jsx)(s.strong,{children:"read-only"}),". It is automatically recomputed if the ",(0,r.jsx)(s.a,{href:"#idletimeout",children:(0,r.jsx)(s.code,{children:".idleTimeout"})})," property value is modified."]}),"\n",(0,r.jsx)(s.h4,{id:"example-1",children:"Example"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'var $expiration : Text\n$expiration:=Session.expirationDate //eg "2021-11-05T17:10:42Z"\n'})}),"\n",(0,r.jsx)(s.h2,{id:"getprivileges",children:".getPrivileges()"}),"\n",(0,r.jsxs)(s.details,{children:[(0,r.jsx)(s.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Release"}),(0,r.jsx)(s.th,{children:"Changes"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"20 R6"}),(0,r.jsx)(s.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".getPrivileges"}),"() : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{style:{textAlign:"center"}}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Result"}),(0,r.jsx)(s.td,{children:"Collection"}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsx)(s.td,{children:"Collection of privilege names (strings)"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"description-2",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".getPrivileges()"})," function returns a collection of all the privilege names associated to the session."]}),"\n",(0,r.jsx)(s.p,{children:'With remote client and stored procedure sessions, this function returns a collection only containing "WebAdmin".'}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsxs)(s.p,{children:["Privileges are assigned to a Session using the ",(0,r.jsx)(s.a,{href:"#setprivileges",children:(0,r.jsx)(s.code,{children:"setPrivileges()"})})," function."]})}),"\n",(0,r.jsx)(s.h4,{id:"example-2",children:"Example"}),"\n",(0,r.jsxs)(s.p,{children:["The following ",(0,r.jsx)(s.a,{href:"/docs/20-R7/ORDA/privileges#rolesjson-file",children:(0,r.jsx)(s.code,{children:"roles.json"})})," has been defined:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n   "privileges":[\n      {\n         "privilege":"simple",\n         "includes":[\n\n         ]\n      },\n      {\n         "privilege":"medium",\n         "includes":[\n            "simple"\n         ]\n      }\n   ],\n   "roles":[\n      {\n         "role":"Medium",\n         "privileges":[\n            "medium"\n         ]\n      }\n   ],\n   "permissions":{\n      "allowed":[\n\n      ]\n   }\n}\n'})}),"\n",(0,r.jsxs)(s.p,{children:["The session role is assigned in an ",(0,r.jsx)(s.code,{children:"authentify()"})," datastore function:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"  //Datastore Class\n\nexposed Function authentify($role : Text) : Text\n	Session.clearPrivileges()\n	Session.setPrivileges({roles: $role})\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Assuming the ",(0,r.jsx)(s.code,{children:"authentify()"}),' function is called with the "Medium" role:']}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'var $privileges : Collection\n$privileges := Session.getPrivileges()\n//$privileges: ["simple","medium"]\n'})}),"\n",(0,r.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"#setprivileges",children:".setPrivileges()"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"https://blog.4d.com/permissions-inspect-the-privileges-in-the-session-for-an-easy-debugging",children:"Permissions \u2013 Inspect the privileges in the session for an easy debugging (blog post)"})]}),"\n",(0,r.jsx)(s.h2,{id:"hasprivilege",children:".hasPrivilege()"}),"\n",(0,r.jsxs)(s.details,{children:[(0,r.jsx)(s.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Release"}),(0,r.jsx)(s.th,{children:"Changes"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"18 R6"}),(0,r.jsx)(s.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".hasPrivilege"}),"( ",(0,r.jsx)(s.em,{children:"privilege"})," : Text ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{style:{textAlign:"center"}}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"privilege"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(s.td,{children:"Name of the privilege to verify"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Result"}),(0,r.jsx)(s.td,{children:"Boolean"}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsxs)(s.td,{children:["True if session has ",(0,r.jsx)(s.em,{children:"privilege"}),", False otherwise"]})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"description-3",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".hasPrivilege()"})," function returns True if the ",(0,r.jsx)(s.em,{children:"privilege"})," is associated to the session, and False otherwise."]}),"\n",(0,r.jsxs)(s.p,{children:["With remote client and stored procedure sessions, this function always returns True, whatever the ",(0,r.jsx)(s.em,{children:"privilege"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"example-3",children:"Example"}),"\n",(0,r.jsx)(s.p,{children:'You want to check if the "WebAdmin" privilege is associated to the web user session:'}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'If (Session.hasPrivilege("WebAdmin"))\n	//Access is granted, do nothing\nElse\n	//Display an authentication page\n\nEnd if\n'})}),"\n",(0,r.jsx)(s.h2,{id:"id",children:".id"}),"\n",(0,r.jsxs)(s.details,{children:[(0,r.jsx)(s.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Release"}),(0,r.jsx)(s.th,{children:"Changes"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"20 R5"}),(0,r.jsx)(s.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".id"})," : Text"]}),"\n",(0,r.jsx)(s.h4,{id:"description-4",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".id"})," property contains the unique identifier (UUID) of the session on the server. This unique string is automatically assigned by the server for each session and allows you to identify its processes."]}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsxs)(s.p,{children:["You can use this property to get the ",(0,r.jsx)(s.a,{href:"#storage",children:(0,r.jsx)(s.code,{children:".storage"})})," object of a session thanks to the ",(0,r.jsx)(s.a,{href:"/docs/20-R7/commands/session-storage",children:(0,r.jsx)(s.code,{children:"Session storage"})})," command."]})}),"\n",(0,r.jsx)(s.h2,{id:"idletimeout",children:".idleTimeout"}),"\n",(0,r.jsxs)(s.details,{children:[(0,r.jsx)(s.summary,{children:"History"}),"\n\n\n\n\n\n\n\n",(0,r.jsx)(s.table,{children:(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Release"}),(0,r.jsx)(s.th,{children:"Changes"})]})})}),"\n",(0,r.jsx)(s.p,{children:"|18 R6|Added|"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".idleTimeout"})," : Integer"]}),"\n",(0,r.jsx)(s.h4,{id:"description-5",children:"Description"}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsx)(s.p,{children:"This property is only available with web user sessions."})}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".idleTimeout"})," property contains the inactivity session timeout (in minutes), after which the session is automatically closed by 4D."]}),"\n",(0,r.jsx)(s.p,{children:"If this property is not set, the default value is 60 (1h)."}),"\n",(0,r.jsxs)(s.p,{children:["When this property is set, the ",(0,r.jsx)(s.a,{href:"#expirationdate",children:(0,r.jsx)(s.code,{children:".expirationDate"})})," property is updated accordingly."]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"The value cannot be less than 60: if a lower value is set, the timeout is raised up to 60."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["This property is ",(0,r.jsx)(s.strong,{children:"read write"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"example-4",children:"Example"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"If (Session.isGuest())\n		// A Guest session will close after 60 minutes of inactivity\n	Session.idleTimeout:=60\nElse\n		// Other sessions will close after 120 minutes of inactivity\n	Session.idleTimeout:=120\nEnd if\n\n"})}),"\n",(0,r.jsx)(s.h2,{id:"info",children:".info"}),"\n",(0,r.jsxs)(s.details,{children:[(0,r.jsx)(s.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Release"}),(0,r.jsx)(s.th,{children:"Changes"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"20 R5"}),(0,r.jsx)(s.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".info"})," : Object"]}),"\n",(0,r.jsx)(s.h4,{id:"description-6",children:"Description"}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsx)(s.p,{children:"This property is only available with remote client and stored procedure sessions."})}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".info"})," property describes the remote client or stored procedure session on the server."]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".info"})," object is the same object as the one returned by the ",(0,r.jsx)(s.a,{href:"/docs/20-R7/commands/process-activity",children:(0,r.jsx)(s.code,{children:"Process activity"})})," command for remote client and stored procedure sessions."]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".info"})," object contains the following properties:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Property"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"type"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:'Session type: "remote" or "storedProcedure"'})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"userName"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsxs)(s.td,{children:["4D user name (same value as ",(0,r.jsx)(s.a,{href:"#username",children:(0,r.jsx)(s.code,{children:".userName"})}),")"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"machineName"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"Remote sessions: name of the remote machine. Stored procedures session: name of the server machine"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"systemUserName"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"Remote sessions: name of the system session opened on the remote machine."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"IPAddress"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"IP address of the remote machine"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"hostType"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:'Host type: "windows" or "mac"'})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"creationDateTime"}),(0,r.jsx)(s.td,{children:"Date ISO 8601"}),(0,r.jsx)(s.td,{children:"Date and time of session creation"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"state"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:'Session state: "active", "postponed", "sleeping"'})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ID"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsxs)(s.td,{children:["Session UUID (same value as ",(0,r.jsx)(s.a,{href:"#id",children:(0,r.jsx)(s.code,{children:".id"})}),")"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"persistentID"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"Remote sessions: Session's persistent ID"})]})]})]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["Since ",(0,r.jsx)(s.code,{children:".info"})," is a computed property, it is recommended to call it once and then to store it in a local variable if you want to do some processing on its properties."]})}),"\n",(0,r.jsx)(s.h2,{id:"isguest",children:".isGuest()"}),"\n",(0,r.jsxs)(s.details,{children:[(0,r.jsx)(s.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Release"}),(0,r.jsx)(s.th,{children:"Changes"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"18 R6"}),(0,r.jsx)(s.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".isGuest()"})," : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{style:{textAlign:"center"}}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Result"}),(0,r.jsx)(s.td,{children:"Boolean"}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsx)(s.td,{children:"True if session is a Guest one, False otherwise"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"description-7",children:"Description"}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["This function always returns ",(0,r.jsx)(s.strong,{children:"False"})," with remote client and stored procedure sessions."]})}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".isGuest()"})," function returns True if the session is a Guest session (i.e. it has no privileges)."]}),"\n",(0,r.jsx)(s.h4,{id:"example-5",children:"Example"}),"\n",(0,r.jsxs)(s.p,{children:["In the ",(0,r.jsx)(s.code,{children:"On Web Connection"})," database method:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"If (Session.isGuest())\n	//Do something for Guest user\nEnd if\n"})}),"\n",(0,r.jsx)(s.h2,{id:"setprivileges",children:".setPrivileges()"}),"\n",(0,r.jsxs)(s.details,{children:[(0,r.jsx)(s.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Release"}),(0,r.jsx)(s.th,{children:"Changes"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"19 R8"}),(0,r.jsx)(s.td,{children:'Support of "roles" Settings property'})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"18 R6"}),(0,r.jsx)(s.td,{children:"Added"})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".setPrivileges"}),"( ",(0,r.jsx)(s.em,{children:"privilege"})," : Text ) : Boolean",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".setPrivileges"}),"( ",(0,r.jsx)(s.em,{children:"privileges"})," : Collection )",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".setPrivileges"}),"( ",(0,r.jsx)(s.em,{children:"settings"})," : Object ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{style:{textAlign:"center"}}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"privilege"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(s.td,{children:"Privilege name"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"privileges"}),(0,r.jsx)(s.td,{children:"Collection"}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(s.td,{children:"Collection of privilege names"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"settings"}),(0,r.jsx)(s.td,{children:"Object"}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(s.td,{children:'Object with a "privileges" property (string or collection)'})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Result"}),(0,r.jsx)(s.td,{children:"Boolean"}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsx)(s.td,{children:"True if the execution is successful"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"description-8",children:"Description"}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["This function does nothing and always returns ",(0,r.jsx)(s.strong,{children:"False"})," with remote client and stored procedure sessions."]})}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".setPrivileges()"})," function associates the privilege(s) and/or role(s) defined in the parameter to the session and returns ",(0,r.jsx)(s.strong,{children:"True"})," if the execution was successful."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["In the ",(0,r.jsx)(s.em,{children:"privilege"})," parameter, pass a string containing a privilege name (or several comma-separated privilege names)."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["In the ",(0,r.jsx)(s.em,{children:"privileges"})," parameter, pass a collection of strings containing privilege names."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["In the ",(0,r.jsx)(s.em,{children:"settings"})," parameter, pass an object containing the following properties:"]}),"\n"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Property"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"privileges"}),(0,r.jsx)(s.td,{children:"Text or Collection"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.li,{children:"String containing a privilege name, or"}),(0,r.jsx)(s.li,{children:"Collection of strings containing privilege names"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"roles"}),(0,r.jsx)(s.td,{children:"Text or Collection"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.li,{children:"String containing a role, or"}),(0,r.jsx)(s.li,{children:"Collection of strings containing roles"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"userName"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"User name to associate to the session (optional)"})]})]})]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["Privileges and roles are defined in ",(0,r.jsx)(s.a,{href:"/docs/20-R7/ORDA/privileges#rolesjson-file",children:(0,r.jsx)(s.code,{children:"roles.json"})})," file of the project. For more information, please refer to the ",(0,r.jsx)(s.a,{href:"/docs/20-R7/ORDA/privileges",children:(0,r.jsx)(s.strong,{children:"Privileges"})})," section."]})}),"\n",(0,r.jsxs)(s.p,{children:["If the ",(0,r.jsx)(s.code,{children:"privileges"})," or ",(0,r.jsx)(s.code,{children:"roles"})," property contains a name that is not declared in the ",(0,r.jsx)(s.a,{href:"/docs/20-R7/ORDA/privileges#rolesjson-file",children:(0,r.jsx)(s.code,{children:"roles.json"})})," file, it is ignored."]}),"\n",(0,r.jsxs)(s.p,{children:["By default when no privilege or role is associated to the session, the session is a ",(0,r.jsx)(s.a,{href:"#isguest",children:"Guest session"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.a,{href:"#username",children:(0,r.jsx)(s.code,{children:"userName"})})," property is available at session object level (read-only)."]}),"\n",(0,r.jsx)(s.h4,{id:"example-6",children:"Example"}),"\n",(0,r.jsx)(s.p,{children:'In a custom authentication method, you set the "WebAdmin" privilege to the user:'}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'var $userOK : Boolean\n\n... //Authenticate the user\n\nIf ($userOK) //The user has been approved\n  var $info : Object\n  $info:=New object()\n  $info.privileges:=New collection("WebAdmin")\n  Session.setPrivileges($info)\nEnd if\n\n'})}),"\n",(0,r.jsx)(s.h4,{id:"see-also-1",children:"See also"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"#getprivileges",children:".getPrivileges()"})}),"\n",(0,r.jsx)(s.h2,{id:"storage",children:".storage"}),"\n",(0,r.jsxs)(s.details,{children:[(0,r.jsx)(s.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Release"}),(0,r.jsx)(s.th,{children:"Changes"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"20 R5"}),(0,r.jsx)(s.td,{children:"Support of remote client and stored procedure sessions"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"18 R6"}),(0,r.jsx)(s.td,{children:"Added"})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".storage"})," : Object"]}),"\n",(0,r.jsx)(s.h4,{id:"description-9",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".storage"})," property contains a shared object that can be used to store information available to all processes of the session."]}),"\n",(0,r.jsxs)(s.p,{children:["When a ",(0,r.jsx)(s.code,{children:"Session"})," object is created, the ",(0,r.jsx)(s.code,{children:".storage"})," property is empty. Since it is a shared object, this property will be available in the ",(0,r.jsx)(s.code,{children:"Storage"})," object of the server."]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Like the ",(0,r.jsx)(s.code,{children:"Storage"})," object of the server, the ",(0,r.jsx)(s.code,{children:".storage"}),' property is always "single": adding a shared object or a shared collection to ',(0,r.jsx)(s.code,{children:".storage"})," does not create a shared group."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["This property is ",(0,r.jsx)(s.strong,{children:"read only"})," itself but it returns a read-write object."]}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsxs)(s.p,{children:["You can get the ",(0,r.jsx)(s.code,{children:".storage"})," property of a session using the ",(0,r.jsx)(s.a,{href:"/docs/20-R7/commands/session-storage",children:(0,r.jsx)(s.code,{children:"Session storage"})})," command."]})}),"\n",(0,r.jsx)(s.h4,{id:"web-session-example",children:"Web session example"}),"\n",(0,r.jsxs)(s.p,{children:["You want to store the client IP in the ",(0,r.jsx)(s.code,{children:".storage"})," property. You can write in the ",(0,r.jsx)(s.code,{children:"On Web Authentication"})," database method:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'If (Session.storage.clientIP=Null) //first access\n    Use (Session.storage)\n        Session.storage.clientIP:=New shared object("value"; $clientIP)\n    End use\nEnd if\n'})}),"\n",(0,r.jsx)(s.h4,{id:"remote-session-example",children:"Remote session example"}),"\n",(0,r.jsx)(s.p,{children:"You want to share data between processes in the same session:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'Use (Session.storage)\n Session.storage.settings:=New shared object("property"; $value; "property2"; $value2)\nEnd use\n'})}),"\n",(0,r.jsx)(s.h2,{id:"username",children:".userName"}),"\n",(0,r.jsxs)(s.details,{children:[(0,r.jsx)(s.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Release"}),(0,r.jsx)(s.th,{children:"Changes"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"20 R5"}),(0,r.jsx)(s.td,{children:"Support of remote client and stored procedure sessions"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"18 R6"}),(0,r.jsx)(s.td,{children:"Added"})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".userName"})," : Text"]}),"\n",(0,r.jsx)(s.h4,{id:"description-10",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".userName"})," property contains the user name associated to the session. You can use it to identify the user within your code."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["With web sessions, this property is an empty string by default. It can be set using the ",(0,r.jsx)(s.code,{children:"privileges"})," property of the ",(0,r.jsx)(s.a,{href:"#setprivileges",children:(0,r.jsx)(s.code,{children:"setPrivileges()"})})," function."]}),"\n",(0,r.jsxs)(s.li,{children:["With remote and stored procedure sessions, this property returns the same user name as the ",(0,r.jsx)(s.a,{href:"/docs/20-R7/commands/current-user",children:(0,r.jsx)(s.code,{children:"Current user"})})," command."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["This property is ",(0,r.jsx)(s.strong,{children:"read only"}),"."]})]})}function a(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return l}});var i=n(667294);let r={},t=i.createContext(r);function l(e){let s=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);