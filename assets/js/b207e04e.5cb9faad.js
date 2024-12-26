"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["20983"],{798999:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>o,default:()=>i,assets:()=>h,toc:()=>l,frontMatter:()=>a});var r=JSON.parse('{"id":"commands-legacy/method-resolve-path","title":"METHOD RESOLVE PATH","description":"METHOD RESOLVE PATH ( path ; methodType ; ptrTable ; objectName ; formObjectName {; *} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/method-resolve-path.md","sourceDirName":"commands-legacy","slug":"/commands/method-resolve-path","permalink":"/docs/commands/method-resolve-path","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-resolve-path.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"method-resolve-path","title":"METHOD RESOLVE PATH","slug":"/commands/method-resolve-path","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD OPEN PATH","permalink":"/docs/commands/method-open-path"},"next":{"title":"METHOD SET ACCESS MODE","permalink":"/docs/commands/method-set-access-mode"}}'),s=n("785893"),d=n("250065");let a={id:"method-resolve-path",title:"METHOD RESOLVE PATH",slug:"/commands/method-resolve-path",displayed_sidebar:"docs"},o=void 0,h={},l=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"METHOD RESOLVE PATH"})," ( ",(0,s.jsx)(t.em,{children:"path"})," ; ",(0,s.jsx)(t.em,{children:"methodType"})," ; ",(0,s.jsx)(t.em,{children:"ptrTable"})," ; ",(0,s.jsx)(t.em,{children:"objectName"})," ; ",(0,s.jsx)(t.em,{children:"formObjectName"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"path"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Path to resolve"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"methodType"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Object type selector"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ptrTable"}),(0,s.jsx)(t.td,{children:"Pointer"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Table reference"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"objectName"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Name of form or database method"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"formObjectName"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Name of form object"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"*"}),(0,s.jsx)(t.td,{children:"Operator"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"If passed = command applies to host database when executed from a component (parameter ignored outside of this context)"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"METHOD RESOLVE PATH"})," command parses the internal path name passed in the ",(0,s.jsx)(t.em,{children:"path"})," parameter and returns its different components in the ",(0,s.jsx)(t.em,{children:"methodType"}),", ",(0,s.jsx)(t.em,{children:"ptrTable"}),", ",(0,s.jsx)(t.em,{children:"objectName"}),", and ",(0,s.jsx)(t.em,{children:"formObjectName"})," parameters."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.em,{children:"methodType"})," parameter receives a value indicating the type of the method. You can compare this value with the following constants of the ",(0,s.jsx)(t.em,{children:"Design Object Access"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Constant"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Value"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Path database method"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"2"}),(0,s.jsxs)(t.td,{children:["Path of database methods specified. List of these methods:",(0,s.jsx)(t.br,{}),(0,s.jsxs)(t.em,{children:["[databaseMethod]/onStartup",(0,s.jsx)(t.br,{}),"[databaseMethod]/onExit",(0,s.jsx)(t.br,{}),"[databaseMethod]/onDrop",(0,s.jsx)(t.br,{}),"[databaseMethod]/onBackupStartup",(0,s.jsx)(t.br,{}),"[databaseMethod]/onBackupShutdown",(0,s.jsx)(t.br,{}),"[databaseMethod]/onWebConnection",(0,s.jsx)(t.br,{}),"[databaseMethod]/onWebAuthentication",(0,s.jsx)(t.br,{}),"[databaseMethod]/onWebSessionSuspend",(0,s.jsx)(t.br,{}),"[databaseMethod]/onServerStartup",(0,s.jsx)(t.br,{}),"[databaseMethod]/onServerShutdown",(0,s.jsx)(t.br,{}),"[databaseMethod]/onServerOpenConnection",(0,s.jsx)(t.br,{}),"[databaseMethod]/onServerCloseConnection",(0,s.jsx)(t.br,{}),"[databaseMethod]/onSystemEvent",(0,s.jsx)(t.br,{}),"[databaseMethod]/onSqlAuthentication",(0,s.jsx)(t.br,{})]})," ",(0,s.jsx)(t.em,{children:"[databaseMethod]/"})," ",(0,s.jsxs)(t.em,{children:["onHostDatabaseEvent",(0,s.jsx)(t.br,{})]})," ",(0,s.jsx)(t.em,{children:"[databaseMethod]/"})," ",(0,s.jsxs)(t.em,{children:["onRESTAuthentication",(0,s.jsx)(t.br,{})]})," ",(0,s.jsx)(t.em,{children:"[databaseMethod]/"})," ",(0,s.jsxs)(t.em,{children:["onMobileAppAuthentication",(0,s.jsx)(t.br,{})]})," ",(0,s.jsx)(t.em,{children:"[databaseMethod]/"})," ",(0,s.jsx)(t.em,{children:"onMobileAppAction"})," ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.br,{})})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Path project form"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"4"}),(0,s.jsxs)(t.td,{children:["Path of project form methods and all their object methods. Examples:",(0,s.jsx)(t.br,{}),(0,s.jsxs)(t.em,{children:["[projectForm]/myForm/{formMethod}",(0,s.jsx)(t.br,{}),"[projectForm]/myForm/button1",(0,s.jsx)(t.br,{}),"[projectForm]/myForm/mylist",(0,s.jsx)(t.br,{}),"[projectForm]/myForm/button1"]})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Path project method"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsxs)(t.td,{children:["Name of method. ",(0,s.jsx)(t.br,{}),"Example: ",(0,s.jsx)(t.em,{children:"MyProjectMethod"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Path table form"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"16"}),(0,s.jsxs)(t.td,{children:["Path of table form methods and all their object methods. Example:",(0,s.jsx)(t.br,{}),(0,s.jsxs)(t.em,{children:["[tableForm]/table_1/Form1/{formMethod}",(0,s.jsx)(t.br,{}),"[tableForm]/table_1/Form1/button1",(0,s.jsx)(t.br,{}),"[tableForm]/table_1/Form1/mylist",(0,s.jsx)(t.br,{}),"[tableForm]/table_2/Form1/mylist"]})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Path trigger"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"8"}),(0,s.jsxs)(t.td,{children:["Path of database triggers. Example:",(0,s.jsx)(t.br,{}),(0,s.jsxs)(t.em,{children:["[trigger]/table_1",(0,s.jsx)(t.br,{}),"[trigger]/table_2"]})]})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," The command does not check if the method actually exists in the database/project. An error is generated only when an invalid table name is passed."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.em,{children:"ptrTable"})," parameter contains a pointer to a database table when the path references a table form method or a trigger."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.em,{children:"objectName"})," parameter contains either:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"a form name when the path references a table form or project form"}),"\n",(0,s.jsx)(t.li,{children:"a database method name when the path references a database method."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.em,{children:"formObjectName"})," parameter contains a form object name when the path references an object method."]}),"\n",(0,s.jsxs)(t.p,{children:["If the command is executed from a component, it considers by default that ",(0,s.jsx)(t.em,{children:"path"})," designates a component method. If you pass the ",(0,s.jsx)(t.em,{children:"*"})," parameter, then it considers that ",(0,s.jsx)(t.em,{children:"path"})," designates a host database method."]}),"\n",(0,s.jsx)(t.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(t.p,{children:"Resolution of a database method path:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0var $methodType : Integer\n\xa0var $tablePtr : Pointer\n\xa0var $objectName : Text\n\xa0var $formObjectName : Text\n\xa0\n\xa0METHOD RESOLVE PATH("[databaseMethod]/onStartup";$methodType;$tablePtr;$objectName;$formObjectName)\n\xa0\xa0// $methodType: 2\n\xa0\xa0// $tablePtr: Nil pointer\n\xa0\xa0// $objectName: "onStartup"\n\xa0\xa0// $formObjectName: ""\n'})}),"\n",(0,s.jsx)(t.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(t.p,{children:"Resolution of a path for an object of a table form method:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0var $methodType : Integer\n\xa0var $tablePtr : Pointer\n\xa0var $objectName : Text\n\xa0var $formObjectName : Text\n\xa0\n\xa0METHOD RESOLVE PATH("[tableForm]/Table1/output1/myVar1";$methodType;$tablePtr;$objectName;$formObjectName)\n\xa0\xa0// $methodType: 16\n\xa0\xa0// $tablePtr: -> [Table1]\n\xa0\xa0// $objectName: "output1"\n\xa0\xa0// $formObjectName: "Btn1"\n'})}),"\n",(0,s.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/commands/method-get-path",children:"METHOD Get path"})}),"\n",(0,s.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Command number"}),(0,s.jsx)(t.td,{children:"1165"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Thread safe"}),(0,s.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function i(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return a}});var r=n(667294);let s={},d=r.createContext(s);function a(e){let t=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);