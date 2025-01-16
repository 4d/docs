"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97949"],{266717:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands/open-datastore","title":"Open datastore","description":"History","source":"@site/versioned_docs/version-20-R8/commands/open-datastore.md","sourceDirName":"commands","slug":"/commands/open-datastore","permalink":"/docs/commands/open-datastore","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fopen-datastore.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"open-datastore","title":"Open datastore","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OPEN DATABASE","permalink":"/docs/commands/open-database"},"next":{"title":"OPEN RUNTIME EXPLORER","permalink":"/docs/commands/open-runtime-explorer"}}'),r=t("785893"),d=t("250065");let o={id:"open-datastore",title:"Open datastore",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"Error management",id:"error-management",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",admonition:"admonition",code:"code",details:"details",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20 R6"}),(0,r.jsx)(n.td,{children:"Support access to Qodly instances"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20 R4"}),(0,r.jsxs)(n.td,{children:["New ",(0,r.jsx)(n.em,{children:"passwordAlgorithm"})," property"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18"}),(0,r.jsx)(n.td,{children:"Added"})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Open datastore"}),"( ",(0,r.jsx)(n.em,{children:"connectionInfo"})," : Object ; ",(0,r.jsx)(n.em,{children:"localID"})," : Text ) : cs.DataStore"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"connectionInfo"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Connection properties used to reach the remote datastore"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"localID"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Id to assign to the opened datastore on the local application (mandatory)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"cs.DataStore"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Datastore object"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Open datastore"})," command connects the application to the remote datastore identified by the ",(0,r.jsx)(n.em,{children:"connectionInfo"})," parameter and returns a matching ",(0,r.jsx)(n.code,{children:"cs.DataStore"})," object associated with the ",(0,r.jsx)(n.em,{children:"localID"})," local alias."]}),"\n",(0,r.jsx)(n.p,{children:"The following remote datastores are supported by the command:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"datastore kind"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Remote 4D application"}),(0,r.jsxs)(n.td,{children:["A 4D application available as a remote datastore, i.e.:",(0,r.jsx)(n.li,{children:"its web server is launched with http and/or https enabled,"}),(0,r.jsxs)(n.li,{children:["its datastore is exposed to REST (",(0,r.jsx)(n.a,{href:"/docs/REST/configuration#starting-the-rest-server",children:(0,r.jsx)(n.strong,{children:"Expose as REST server"})})," option checked)."]}),"A license can be required (see note)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://developer.qodly.com/docs/cloud/getStarted",children:"Qodly application"})}),(0,r.jsxs)(n.td,{children:["A Qodly Server application that provided you with an ",(0,r.jsx)(n.strong,{children:"api endpoint"})," and a valid ",(0,r.jsx)(n.strong,{children:"api key"})," associated with a defined role. You must pass the api key in the ",(0,r.jsx)(n.code,{children:"api-key"})," property of the ",(0,r.jsx)(n.em,{children:"connectionInfo"})," object. You can then work with the returned datastore object, with all privileges granted to the associated role."]})]})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Open datastore"})," requests rely on the 4D REST API and can require a 4D Client license to open the connection on a remote 4D Server. Refer to the ",(0,r.jsx)(n.a,{href:"/docs/REST/authUsers#user-login-modes",children:"user login mode section"})," to know how to configure the authentication depending on the selected current user login mode."]})}),"\n",(0,r.jsxs)(n.p,{children:["Pass in ",(0,r.jsx)(n.em,{children:"connectionInfo"})," an object describing the remote datastore you want to connect to. It can contain the following properties (all properties are optional except ",(0,r.jsx)(n.em,{children:"hostname"}),"):"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Remote 4D application"}),(0,r.jsx)(n.th,{children:"Qodly application"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hostname"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:'Name or IP address of the remote database + ":" + port number (port number is mandatory)'}),(0,r.jsx)(n.td,{children:"API Endpoint of the Qodly cloud instance"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"user"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"User name"}),(0,r.jsx)(n.td,{children:"- (ignored)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"password"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"User password"}),(0,r.jsx)(n.td,{children:"- (ignored)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"idleTimeout"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsxs)(n.td,{children:["Inactivity session timeout (in minutes), after which the session is automatically closed by 4D. If omitted, default value is 60 (1h). The value cannot be < 60 (if a lower value is passed, the timeout is set to 60). For more information, see ",(0,r.jsx)(n.strong,{children:"Closing sessions"}),"."]}),(0,r.jsx)(n.td,{children:"- (ignored)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tls"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"True to use secured connection(1). If omitted, false by default. Using a secured connection is recommended whenever possible."}),(0,r.jsx)(n.td,{children:"True to use secured connection. If omitted, false by default"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"type"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:'must be "4D Server"'}),(0,r.jsx)(n.td,{children:"- (ignored)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"api-key"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"- (ignored)"}),(0,r.jsx)(n.td,{children:"Api key of the Qodly cloud instance"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["(1) If ",(0,r.jsx)(n.code,{children:"tls"})," is true, the HTTPS protocol is used if:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"HTTPS is enabled on the remote datastore"}),"\n",(0,r.jsx)(n.li,{children:"the given port is the right HTTPS port configured in the database settings"}),"\n",(0,r.jsx)(n.li,{children:'a valid certificate and private encryption key are installed in the 4D application. Otherwise, error "1610 - A remote request to host xxx has failed" is raised'}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"localID"})," is a local alias for the session opened on remote datastore. If ",(0,r.jsx)(n.em,{children:"localID"})," already exists on the application, it is used. Otherwise, a new ",(0,r.jsx)(n.em,{children:"localID"})," session is created when the datastore object is used."]}),"\n",(0,r.jsx)(n.p,{children:"Once the session is opened, the following statements become equivalent and return a reference on the same datastore object:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' $myds:=Open datastore(connectionInfo;"myLocalId")\n $myds2:=ds("myLocalId")\n  //$myds and $myds2 are equivalent\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Objects available in the ",(0,r.jsx)(n.code,{children:"cs.Datastore"})," are mapped with respect to the ",(0,r.jsx)(n.a,{href:"/docs/ORDA/dsmapping#general-rules",children:"ORDA general rules"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If no matching datastore is found, ",(0,r.jsx)(n.code,{children:"Open datastore"})," returns ",(0,r.jsx)(n.strong,{children:"Null"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(n.p,{children:"Connection to a remote datastore without user / password:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' var $connectTo : Object\n var $remoteDS : cs.DataStore\n $connectTo:=New object("type";"4D Server";"hostname";"192.168.18.11:8044")\n $remoteDS:=Open datastore($connectTo;"students")\n ALERT("This remote datastore contains "+String($remoteDS.Students.all().length)+" students")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(n.p,{children:"Connection to a remote datastore with user / password / timeout / tls:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' var $connectTo : Object\n var $remoteDS : cs.DataStore\n $connectTo:=New object("type";"4D Server";"hostname";\\"192.168.18.11:4443";\\  \n  "user";"marie";"password";$pwd;"idleTimeout";70;"tls";True)\n $remoteDS:=Open datastore($connectTo;"students")\n ALERT("This remote datastore contains "+String($remoteDS.Students.all().length)+" students")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,r.jsx)(n.p,{children:"Working with several remote datastores:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' var $connectTo : Object\n var $frenchStudents; $foreignStudents : cs.DataStore\n $connectTo:=New object("hostname";"192.168.18.11:8044")\n $frenchStudents:=Open datastore($connectTo;"french")\n $connectTo.hostname:="192.168.18.11:8050"\n $foreignStudents:=Open datastore($connectTo;"foreign")\n ALERT("They are "+String($frenchStudents.Students.all().length)+" French students")\n ALERT("They are "+String($foreignStudents.Students.all().length)+" foreign students")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-4",children:"Example 4"}),"\n",(0,r.jsx)(n.p,{children:"Connection to a Qodly application:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $connectTo : Object:={hostname: "https://xxx-x54xxx-xx-xxxxx-8xx5-xxxxxx.xx-api.cloud.com"; tls: True}\n\nvar $remoteDS : 4D.DataStoreImplementation\nvar $data : 4D.EntitySelection\n\n$connectTo["api-key"]:="fxxxx-xxxx-4xxx-txxx-xxxxxxxx0" //only for example purpose  \n  //it is recommended to store the API key in a secured place (e.g. a file)\n  //and to load it in the code\n\n$remoteDS:=Open datastore($connectTo; "remoteId")\n$data:=$remoteDS.item.all()\n\nALERT(String($data.length)+" items have been read")\n\n'})}),"\n",(0,r.jsx)(n.h4,{id:"error-management",children:"Error management"}),"\n",(0,r.jsxs)(n.p,{children:["In case of error, the command returns ",(0,r.jsx)(n.strong,{children:"Null"}),'. If the remote datastore cannot be reached (wrong address, web server not started, http and https not enabled...), error 1610 "A remote request to host XXX has failed" is raised. You can intercept this error with a method installed by ',(0,r.jsx)(n.code,{children:"ON ERR CALL"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/commands/ds",children:"ds"})}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1452"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifies variables"}),(0,r.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return o}});var s=t(667294);let r={},d=s.createContext(r);function o(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);