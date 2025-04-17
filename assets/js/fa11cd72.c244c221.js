"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["93406"],{220838:function(e,t,n){n.r(t),n.d(t,{default:()=>i,frontMatter:()=>h,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/method-get-path","title":"METHOD Get path","description":"METHOD Get path ( methodType {; aTable}{; objectName{; formObjectName}}{; *} ) : Text","source":"@site/versioned_docs/version-20-R9/commands-legacy/method-get-path.md","sourceDirName":"commands-legacy","slug":"/commands/method-get-path","permalink":"/docs/commands/method-get-path","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-get-path.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"method-get-path","title":"METHOD Get path","slug":"/commands/method-get-path","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD GET NAMES","permalink":"/docs/commands/method-get-names"},"next":{"title":"METHOD GET PATHS","permalink":"/docs/commands/method-get-paths"}}'),d=n("785893"),r=n("250065");let h={id:"method-get-path",title:"METHOD Get path",slug:"/commands/method-get-path",displayed_sidebar:"docs"},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:"METHOD Get path"})," ( ",(0,d.jsx)(t.em,{children:"methodType"})," {; ",(0,d.jsx)(t.em,{children:"aTable"}),"}{; ",(0,d.jsx)(t.em,{children:"objectName"}),"{; ",(0,d.jsx)(t.em,{children:"formObjectName"}),"}}{; *} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Parameter"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"methodType"}),(0,d.jsx)(t.td,{children:"Integer"}),(0,d.jsx)(t.td,{children:"\u2192"}),(0,d.jsx)(t.td,{children:"Design object type selector"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"aTable"}),(0,d.jsx)(t.td,{children:"Table"}),(0,d.jsx)(t.td,{children:"\u2192"}),(0,d.jsx)(t.td,{children:"Table reference"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"objectName"}),(0,d.jsx)(t.td,{children:"Text"}),(0,d.jsx)(t.td,{children:"\u2192"}),(0,d.jsx)(t.td,{children:"Name of form or method"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"formObjectName"}),(0,d.jsx)(t.td,{children:"Text"}),(0,d.jsx)(t.td,{children:"\u2190"}),(0,d.jsx)(t.td,{children:"Name of form object"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"*"}),(0,d.jsx)(t.td,{children:"Operator"}),(0,d.jsx)(t.td,{children:"\u2192"}),(0,d.jsx)(t.td,{children:"If passed = command applies to host database when executed from a component (parameter ignored outside of this context)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Function result"}),(0,d.jsx)(t.td,{children:"Text"}),(0,d.jsx)(t.td,{children:"\u2190"}),(0,d.jsx)(t.td,{children:"Full path of object"})]})]})]}),"\n",(0,d.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(t.p,{children:["The ",(0,d.jsx)(t.strong,{children:"METHOD Get path"})," command returns the full internal pathname of a method."]}),"\n",(0,d.jsxs)(t.p,{children:["In the ",(0,d.jsx)(t.em,{children:"methodType"})," parameter, you pass the type of method whose path you want to get. You can use the following constants, found in the ",(0,d.jsx)(t.em,{children:"Design Object Access"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Constant"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Value"}),(0,d.jsx)(t.th,{children:"Comment"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Path database method"}),(0,d.jsx)(t.td,{children:"Integer"}),(0,d.jsx)(t.td,{children:"2"}),(0,d.jsxs)(t.td,{children:["Path of database methods specified. List of these methods:",(0,d.jsx)(t.br,{}),(0,d.jsxs)(t.em,{children:["[databaseMethod]/onStartup",(0,d.jsx)(t.br,{}),"[databaseMethod]/onExit",(0,d.jsx)(t.br,{}),"[databaseMethod]/onDrop",(0,d.jsx)(t.br,{}),"[databaseMethod]/onBackupStartup",(0,d.jsx)(t.br,{}),"[databaseMethod]/onBackupShutdown",(0,d.jsx)(t.br,{}),"[databaseMethod]/onWebConnection",(0,d.jsx)(t.br,{}),"[databaseMethod]/onWebAuthentication",(0,d.jsx)(t.br,{}),"[databaseMethod]/onWebSessionSuspend",(0,d.jsx)(t.br,{}),"[databaseMethod]/onServerStartup",(0,d.jsx)(t.br,{}),"[databaseMethod]/onServerShutdown",(0,d.jsx)(t.br,{}),"[databaseMethod]/onServerOpenConnection",(0,d.jsx)(t.br,{}),"[databaseMethod]/onServerCloseConnection",(0,d.jsx)(t.br,{}),"[databaseMethod]/onSystemEvent",(0,d.jsx)(t.br,{}),"[databaseMethod]/onSqlAuthentication",(0,d.jsx)(t.br,{})]})," ",(0,d.jsx)(t.em,{children:"[databaseMethod]/"})," ",(0,d.jsxs)(t.em,{children:["onHostDatabaseEvent",(0,d.jsx)(t.br,{})]})," ",(0,d.jsx)(t.em,{children:"[databaseMethod]/"})," ",(0,d.jsxs)(t.em,{children:["onRESTAuthentication",(0,d.jsx)(t.br,{})]})," ",(0,d.jsx)(t.em,{children:"[databaseMethod]/"})," ",(0,d.jsxs)(t.em,{children:["onMobileAppAuthentication",(0,d.jsx)(t.br,{})]})," ",(0,d.jsx)(t.em,{children:"[databaseMethod]/"})," ",(0,d.jsx)(t.em,{children:"onMobileAppAction"})," ",(0,d.jsx)(t.em,{children:(0,d.jsx)(t.br,{})})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Path project form"}),(0,d.jsx)(t.td,{children:"Integer"}),(0,d.jsx)(t.td,{children:"4"}),(0,d.jsxs)(t.td,{children:["Path of project form methods and all their object methods. Examples:",(0,d.jsx)(t.br,{}),(0,d.jsxs)(t.em,{children:["[projectForm]/myForm/{formMethod}",(0,d.jsx)(t.br,{}),"[projectForm]/myForm/button1",(0,d.jsx)(t.br,{}),"[projectForm]/myForm/mylist",(0,d.jsx)(t.br,{}),"[projectForm]/myForm/button1"]})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Path project method"}),(0,d.jsx)(t.td,{children:"Integer"}),(0,d.jsx)(t.td,{children:"1"}),(0,d.jsxs)(t.td,{children:["Name of method. ",(0,d.jsx)(t.br,{}),"Example: ",(0,d.jsx)(t.em,{children:"MyProjectMethod"})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Path table form"}),(0,d.jsx)(t.td,{children:"Integer"}),(0,d.jsx)(t.td,{children:"16"}),(0,d.jsxs)(t.td,{children:["Path of table form methods and all their object methods. Example:",(0,d.jsx)(t.br,{}),(0,d.jsxs)(t.em,{children:["[tableForm]/table_1/Form1/{formMethod}",(0,d.jsx)(t.br,{}),"[tableForm]/table_1/Form1/button1",(0,d.jsx)(t.br,{}),"[tableForm]/table_1/Form1/mylist",(0,d.jsx)(t.br,{}),"[tableForm]/table_2/Form1/mylist"]})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Path trigger"}),(0,d.jsx)(t.td,{children:"Integer"}),(0,d.jsx)(t.td,{children:"8"}),(0,d.jsxs)(t.td,{children:["Path of database triggers. Example:",(0,d.jsx)(t.br,{}),(0,d.jsxs)(t.em,{children:["[trigger]/table_1",(0,d.jsx)(t.br,{}),"[trigger]/table_2"]})]})]})]})]}),"\n",(0,d.jsxs)(t.p,{children:["Pass values in the ",(0,d.jsx)(t.em,{children:"aTable"}),", ",(0,d.jsx)(t.em,{children:"objectName"})," and ",(0,d.jsx)(t.em,{children:"formObjectName"})," parameters according to the type of object for which you want to get the method pathname:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:(0,d.jsx)(t.strong,{children:"Type of object"})}),(0,d.jsx)(t.th,{children:(0,d.jsx)(t.em,{children:"aTable"})}),(0,d.jsx)(t.th,{children:(0,d.jsx)(t.em,{children:"objectName"})}),(0,d.jsx)(t.th,{children:(0,d.jsx)(t.em,{children:"formObjectName"})})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Path Project form"}),(0,d.jsx)(t.td,{children:"X"}),(0,d.jsx)(t.td,{children:"X (optional)"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Path Table form"}),(0,d.jsx)(t.td,{children:"X"}),(0,d.jsx)(t.td,{children:"X"}),(0,d.jsx)(t.td,{children:"X (optional)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Path Database method"}),(0,d.jsx)(t.td,{children:"X"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Path Project method"}),(0,d.jsx)(t.td,{children:"X"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Path Trigger"}),(0,d.jsx)(t.td,{children:"X"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]})]})]}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:"Note:"})," The command does not check if the method actually exists in the database. An error is generated only when an invalid database method name is passed with the Path database method selector."]}),"\n",(0,d.jsxs)(t.p,{children:["If the command is executed from a component, it returns by default the paths of the component methods. If you pass the ",(0,d.jsx)(t.em,{children:"*"})," parameter, the array contains the paths of the methods of the host database."]}),"\n",(0,d.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-4d",children:'\xa0\xa0//Retrieval of the pathname of the "On Startup" database method:\n\xa0$path:=METHOD Get path(Path database method;"onStartup")\n\xa0\n\xa0\xa0//Retrieval of the pathname of the trigger for the [Employees] table:\n\xa0$path:=METHOD Get path(Path trigger;[Employees])\n\xa0\n\xa0\xa0//Retrieval of the pathname of the "OK" object method of the "input" form for the [Employees] table:\n\xa0$path:=METHOD Get path(Path table form;[Employees];"input";"OK")\n'})}),"\n",(0,d.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.a,{href:"/docs/commands/current-method-path",children:"Current method path"}),(0,d.jsx)(t.br,{}),"\n",(0,d.jsx)(t.a,{href:"/docs/commands/method-open-path",children:"METHOD OPEN PATH"}),(0,d.jsx)(t.br,{}),"\n",(0,d.jsx)(t.a,{href:"/docs/commands/method-resolve-path",children:"METHOD RESOLVE PATH"})]}),"\n",(0,d.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Command number"}),(0,d.jsx)(t.td,{children:"1164"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Thread safe"}),(0,d.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function i(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return h}});var s=n(667294);let d={},r=s.createContext(d);function h(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:h(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);