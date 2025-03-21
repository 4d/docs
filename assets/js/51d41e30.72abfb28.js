"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4040"],{214980:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>a,assets:()=>i,toc:()=>l,contentTitle:()=>r});var a=JSON.parse('{"id":"commands-legacy/open-database","title":"OPEN DATABASE","description":"OPEN DATABASE ( filePath )","source":"@site/versioned_docs/version-20-R7/commands-legacy/open-database.md","sourceDirName":"commands-legacy","slug":"/commands/open-database","permalink":"/docs/20-R7/commands/open-database","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fopen-database.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"open-database","title":"OPEN DATABASE","slug":"/commands/open-database","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OPEN DATA FILE","permalink":"/docs/20-R7/commands/open-data-file"},"next":{"title":"Open datastore","permalink":"/docs/20-R7/commands/open-datastore"}}'),s=t("785893"),d=t("250065");let o={id:"open-database",title:"OPEN DATABASE",slug:"/commands/open-database",displayed_sidebar:"docs"},r=void 0,i={},l=[{value:"Note",id:"note",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OPEN DATABASE"})," ( ",(0,s.jsx)(n.em,{children:"filePath"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"filePath"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"File name (.4db, .4dc, .4dbase, .4dproject, .4dz, or .4dlink) or complete access path of database to open"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"note",children:"Note"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"OPEN DATABASE"})," command closes the current 4D database and opens on-the-fly the database defined by ",(0,s.jsx)(n.em,{children:"filePath"}),". This command is useful for automatic testing purposes, to reopen a database automatically after a compilation, or to allow a merged 4D remote application to select the a database server to connect."]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"filePath"})," parameter, pass the name or full access path of the database to be opened. You can use files having one of the following extensions:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:".4db (interpreted structure file),"}),"\n",(0,s.jsx)(n.li,{children:".4dc (compiled structure file),"}),"\n",(0,s.jsx)(n.li,{children:".4dbase (macOS package),"}),"\n",(0,s.jsx)(n.li,{children:".4dproject (project database file)"}),"\n",(0,s.jsx)(n.li,{children:".4dz (deployment file for project databases)"}),"\n",(0,s.jsx)(n.li,{children:".4dlink (shortcut file)."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If you pass only a file name, this file must be placed at the same level as the structure file of the current database."}),"\n",(0,s.jsxs)(n.p,{children:["If the access path defines a valid database, 4D quits the database that is already open and then opens the specified database. In single-user mode, the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/on-exit-database-method",children:"On Exit database method"})," of the database being closed and the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/on-startup-database-method",children:"On Startup database method"})," (or the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/on-server-open-connection-database-method",children:"On Server Open Connection database method"}),") of the database being opened are called successively."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Warning:"})," Since this command causes the application to quit before re-opening with the specified database, it is usually not recommended to use it in the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/on-startup-database-method",children:"On Startup database method"})," or in a method called by this database method."]}),"\n",(0,s.jsxs)(n.p,{children:["The command is executed in an asynchronous manner: after its call, 4D continues executing the rest of the method. Then, the application behaves as if the ",(0,s.jsx)(n.strong,{children:"Quit"})," command was selected in the ",(0,s.jsx)(n.strong,{children:"File"})," menu: open dialog boxes are cancelled, any open processes have 10 seconds to finish before being terminated, and so on."]}),"\n",(0,s.jsx)(n.p,{children:"If the target database file is not found or is invalid, a standard file system error is returned and 4D does nothing."}),"\n",(0,s.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0OPEN DATABASE("C:\\\\databases\\\\Invoices\\\\Invoices.4db")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsxs)(n.p,{children:["You want to select a server at startup from a single-user application. You could execute this code from a process launched by the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/on-startup-database-method",children:"On Startup database method"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $xml : Text\n\xa0$xml:=""\n\xa0$databaseName:="myServer"\n\xa0$IP:="192.168.6.7:19813"\n\xa0\n\xa0If(Shift down)\n\xa0\xa0\xa0\xa0$IP:=Request("IP address to connect to "+$databaseName;$IP)\n\xa0Else\n\xa0\xa0\xa0\xa0ok:=1\n\xa0End if\n\xa0\n\xa0If(ok=1)\n\xa0\xa0\xa0\xa0$xml:=Replace string($xml;"{databaseName}";$databaseName)\n\xa0\xa0\xa0\xa0$xml:=Replace string($xml;"{IP}";$IP)\n\xa0\xa0\xa0\xa0var $link : Object\n\xa0\xa0\xa0\xa0$link:=Folder(fk user preferences folder).file("server.4dlink")\n\xa0\xa0\xa0\xa0$link.setText($xml)\n\xa0\xa0\xa0\xa0OPEN DATABASE($link.platformPath)\n\xa0Else\n\xa0\xa0\xa0\xa0QUIT 4D\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1321"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return o}});var a=t(667294);let s={},d=a.createContext(s);function o(e){let n=a.useContext(d);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);