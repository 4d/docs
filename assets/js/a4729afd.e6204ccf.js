"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19807],{355874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var r=n(474848),s=n(28453);const i={id:"sql-execute-script",title:"SQL EXECUTE SCRIPT",slug:"/commands/sql-execute-script",displayed_sidebar:"docs"},c=void 0,d={id:"commands-legacy/sql-execute-script",title:"SQL EXECUTE SCRIPT",description:"SQL EXECUTE SCRIPT ( scriptPath ; errorAction {; attribName ; attribValue} {; attribName2 ; attribValue2 ; ... ; attribNameN ; attribValueN} )",source:"@site/versioned_docs/version-20-R7/commands-legacy/sql-execute-script.md",sourceDirName:"commands-legacy",slug:"/commands/sql-execute-script",permalink:"/docs/commands/sql-execute-script",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-execute-script.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"sql-execute-script",title:"SQL EXECUTE SCRIPT",slug:"/commands/sql-execute-script",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SQL EXECUTE",permalink:"/docs/commands/sql-execute"},next:{title:"SQL EXPORT DATABASE",permalink:"/docs/commands/sql-export-database"}},o={},a=[{value:"Description",id:"description",level:4}];function l(e){const t={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"SQL EXECUTE SCRIPT"})," ( ",(0,r.jsx)(t.em,{children:"scriptPath"})," ; ",(0,r.jsx)(t.em,{children:"errorAction"})," {; ",(0,r.jsx)(t.em,{children:"attribName"})," ; ",(0,r.jsx)(t.em,{children:"attribValue"}),"} {; ",(0,r.jsx)(t.em,{children:"attribName2"})," ; ",(0,r.jsx)(t.em,{children:"attribValue2"})," ; ... ; ",(0,r.jsx)(t.em,{children:"attribNameN"})," ; ",(0,r.jsx)(t.em,{children:"attribValueN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"scriptPath"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Complete pathname of file containing SQL script to execute"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"errorAction"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Action to carry out in case of error during script execution"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"attribName"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Name of attribute to use"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"attribValue"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Value of attribute"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"SQL EXECUTE SCRIPT"})," command is used to execute a series of SQL statements placed in the script file designated by ",(0,r.jsx)(t.em,{children:"scriptPath"}),". This command can only be executed on a local machine (local 4D or stored procedure on 4D Server). It works with the current database (internal or external database)."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," This command cannot be used with an external connection that is opened directly or via ODBC."]}),"\n",(0,r.jsxs)(t.p,{children:["Pass the complete pathname of the text file containing the SQL statements to be executed in the ",(0,r.jsx)(t.em,{children:"scriptPath"}),' parameter. The pathname must be expressed using the syntax of the current system. If you pass an empty string ("") in ',(0,r.jsx)(t.em,{children:"scriptPath"}),", a standard Open document dialog box will be displayed so that the user can select the script file to be executed."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," The ",(0,r.jsx)(t.a,{href:"/docs/commands/sql-export-database",children:"SQL EXPORT DATABASE"})," and ",(0,r.jsx)(t.a,{href:"/docs/commands/sql-export-selection",children:"SQL EXPORT SELECTION"})," commands automatically generate this script file."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.em,{children:"errorAction"})," parameter is used to configure the functioning of the command when an error occurs during script execution. You can pass one of the three following constants, placed in the ",(0,r.jsx)(t.em,{children:"SQL"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Constant"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Value"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SQL On error abort"}),(0,r.jsx)(t.td,{children:"Longint"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"In the event of an error, 4D immediately stops script execution."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SQL On error confirm"}),(0,r.jsx)(t.td,{children:"Longint"}),(0,r.jsx)(t.td,{children:"2"}),(0,r.jsx)(t.td,{children:"In the event of an error, 4D displays a dialog box describing the error and allowing the user to interrupt or continue script execution."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SQL On error continue"}),(0,r.jsx)(t.td,{children:"Longint"}),(0,r.jsx)(t.td,{children:"3"}),(0,r.jsx)(t.td,{children:"In the event of an error, 4D ignores it and continues script execution."})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.em,{children:"attribName"})," and ",(0,r.jsx)(t.em,{children:"attribValue"})," parameters must be passed by pairs. These parameters are intended to be used to specify specific attributes for the script execution. In the current version of 4D, a single attribute can be passed in ",(0,r.jsx)(t.em,{children:"attribName"}),", available via the following constant, placed in the ",(0,r.jsx)(t.em,{children:"SQL"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Constant"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Value"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SQL use access rights"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"SQL_Use_Access_Rights"}),(0,r.jsxs)(t.td,{children:["Used to restrict the access rights to be applied during execution of the SQL commands of the script. When you use this attribute, you must pass 0 or 1 in ",(0,r.jsx)(t.em,{children:"attribValue"}),": ",(0,r.jsx)(t.br,{}),(0,r.jsx)(t.em,{children:"attribValue"})," = 1: 4D uses the access rights of the current 4D user.",(0,r.jsx)(t.em,{children:"attribValue"})," = 0 (or attribute not specified): 4D does not restrict access, the Designer rights are used."]})]})})]}),"\n",(0,r.jsxs)(t.p,{children:["If the 4D log file is activated (via the selectors 28 or 45 of the ",(0,r.jsx)(t.a,{href:"/docs/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," command), each SQL command executed will generate an entry with the following information:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Type of SQL command"}),"\n",(0,r.jsx)(t.li,{children:"Number of records affected by the command"}),"\n",(0,r.jsx)(t.li,{children:"Duration of command execution"}),"\n",(0,r.jsxs)(t.li,{children:["For each error encountered:\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"the error code"}),"\n",(0,r.jsx)(t.li,{children:"the error text if available"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["If the script is executed correctly (no error occurs), the ",(0,r.jsx)(t.em,{children:"OK"})," system variable is set to 1. In the event of an error, the ",(0,r.jsx)(t.em,{children:"OK"})," system variable is set to 0 or not according to the ",(0,r.jsx)(t.em,{children:"errorAction"})," parameter:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["If ",(0,r.jsx)(t.em,{children:"errorAction"})," is SQL On error abort (value 1), ",(0,r.jsx)(t.em,{children:"OK"})," is set to 0."]}),"\n",(0,r.jsxs)(t.li,{children:["If ",(0,r.jsx)(t.em,{children:"errorAction"})," is SQL On error confirm (value 2), the ",(0,r.jsx)(t.em,{children:"OK"})," variable is set to 0 if the user chooses to stop the operation and 1 if they choose to continue ."]}),"\n",(0,r.jsxs)(t.li,{children:["If ",(0,r.jsx)(t.em,{children:"errorAction"})," is SQL On error continue (value 3), the ",(0,r.jsx)(t.em,{children:"OK"})," variable is always 1."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," If you use this command to execute memory-consuming actions such as massive data imports, you can consider calling the ",(0,r.jsx)(t.em,{children:"ALTER DATABASE"})," SQL command in order to temporarily disable the SQL options."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>d});var r=n(296540);const s={},i=r.createContext(s);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);