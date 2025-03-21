"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59100"],{826705:function(e,n,a){a.r(n),a.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>t,assets:()=>d,toc:()=>o,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/sql-execute","title":"SQL EXECUTE","description":"SQL EXECUTE ( sqlStatement {; boundObj}{; boundObj2 ; ... ; boundObjN} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/sql-execute.md","sourceDirName":"commands-legacy","slug":"/commands/sql-execute","permalink":"/docs/20-R7/commands/sql-execute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-execute.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sql-execute","title":"SQL EXECUTE","slug":"/commands/sql-execute","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL End selection","permalink":"/docs/20-R7/commands/sql-end-selection"},"next":{"title":"SQL EXECUTE SCRIPT","permalink":"/docs/20-R7/commands/sql-execute-script"}}'),s=a("785893"),r=a("250065");let l={id:"sql-execute",title:"SQL EXECUTE",slug:"/commands/sql-execute",displayed_sidebar:"docs"},i=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"Example 4",id:"example-4",level:2},{value:"Example 5",id:"example-5",level:2},{value:"Example 6",id:"example-6",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SQL EXECUTE"})," ( ",(0,s.jsx)(n.em,{children:"sqlStatement"})," {; ",(0,s.jsx)(n.em,{children:"boundObj"}),"}{; ",(0,s.jsx)(n.em,{children:"boundObj2"})," ; ... ; ",(0,s.jsx)(n.em,{children:"boundObjN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sqlStatement"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"SQL command to execute"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"boundObj"}),(0,s.jsx)(n.td,{children:"Variable, Field"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Receives result (if necessary)"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"The SQL EXECUTE command executes an SQL command and binds the result to 4D objects (arrays, variables or fields)."}),"\n",(0,s.jsx)(n.p,{children:"A valid connection must be specified in the current process in order to execute this command."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"sqlStatement"})," parameter contains the SQL command to execute. ",(0,s.jsx)(n.em,{children:"boundObj"})," receives the results. Variables are bound in the column sequence order, which means that any remaining remote columns are discarded."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The command supports up to 127 ",(0,s.jsx)(n.em,{children:"boundObj"})," parameters."]})}),"\n",(0,s.jsxs)(n.p,{children:["If 4D fields are passed as parameters in ",(0,s.jsx)(n.em,{children:"boundObj"}),", the command will create records and save them automatically. 4D fields must come from the same table (a field from table 1 and a field from table 2 cannot be passed in the same call). If fields from more than one table are passed, an error is generated."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Warning:"})," When you pass 4D fields in the ",(0,s.jsx)(n.em,{children:"boundObj"})," parameter(s) and execute the ",(0,s.jsx)(n.em,{children:"SELECT"})," command, it is always the data of the remote 4D source that is modified. If you want to retrieve data from the remote source locally, you must use intermediary local arrays and call the ",(0,s.jsx)(n.em,{children:"INSERT"})," command (see example 6)."]}),"\n",(0,s.jsxs)(n.p,{children:["If you pass 4D arrays in the ",(0,s.jsx)(n.em,{children:"boundObj"})," parameter(s), it is advisable to declare them before calling the command in order to check the type of data processed. Arrays are automatically resized when necessary."]}),"\n",(0,s.jsx)(n.p,{children:"With a 4D variable, one record is fetched at a time. The other results are ignored."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," For more information about referencing 4D expressions in SQL queries, refer to the ",(0,s.jsx)(n.em,{children:"Overview of SQL Commands"})," section."]}),"\n",(0,s.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.p,{children:"In this example, we will get the ename column of the emp table of the data source. The result is stored in the [Employee]Name 4D field. 4D records will be created automatically:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' SQLStmt:="SELECT ename FROM emp"\n SQL EXECUTE(SQLStmt;[Employee]Name)\n SQL LOAD RECORD(SQL all records)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.p,{children:"To check the creation of records, it is possible to include code within a transaction and to validate it only if the operation proves to be satisfactory:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' SQL LOGIN("mysql";"root";"")\n SQLStmt:="SELECT alpha_field FROM app_testTable"\n START TRANSACTION\n SQL EXECUTE(SQLStmt;[Table 2]Field1)\n While(Not(SQL End selection))\n    SQL LOAD RECORD\n    ... //Place the data validation code here\n End while\n VALIDATE TRANSACTION //Validation of the transaction\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsxs)(n.p,{children:["In this example, we want to get the ename column of the emp table of the data source. The result will be stored in an ",(0,s.jsx)(n.em,{children:"aName"})," array. We fetch records 10 at a time."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' ARRAY STRING(30;aName;20)\n SQLStmt:="SELECT ename FROM emp"\n SQL EXECUTE(SQLStmt;aName)\n While(Not(SQL End selection))\n    SQL LOAD RECORD(10)\n End while\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-4",children:"Example 4"}),"\n",(0,s.jsxs)(n.p,{children:["In this example, we want to get the ename and job of the emp table for a specific ID (WHERE clause) of the data source. The result will be stored in the ",(0,s.jsx)(n.em,{children:"vName"})," and ",(0,s.jsx)(n.em,{children:"vJob"})," 4D variables. Only the first record is fetched."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' SQLStmt:="SELECT ename, job FROM emp WHERE id = 3"\n SQL EXECUTE(SQLStmt;vName;vJob)\n SQL LOAD RECORD\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-5",children:"Example 5"}),"\n",(0,s.jsx)(n.p,{children:"In this example, we want to get the Blob_Field column of the Test table in the data source. The result will be stored in a BLOB variable whose value is updated each time a record is loaded."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' var MyBlob : Blob\n SQL LOGIN\n SQL EXECUTE("SELECT Blob_Field FROM Test";MyBlob)\n While(Not(SQL End selection))\n  //We look through the results\n    SQL LOAD RECORD\n  //The value of MyBlob is updated on each call\n End while\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-6",children:"Example 6"}),"\n",(0,s.jsx)(n.p,{children:"You want to retrieve data locally from a remote 4D Server database where it is stored. To do this, you must use intermediary arrays:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'  // Log in to the remote database\n SQL LOGIN("IP:192.168.18.15:19812";"user";"password";*)\n If(OK=1)\n  // Starting from here all SQL requests are made on the remote database\n    var $LastName_value : Text // 4D variable used in the search statement\n    ARRAY TEXT($a_LastName;0) // Temporary storage of remote values for LastName\n    ARRAY TEXT($a_FirstName;0) // Temporary storage of remote values for FirstName\n    var $UseSQL : Boolean //Choice of means for local storage of data from the remote database\n  // (demo only)\n \n    $LastName_value:="Smith" // Initialization of 4D variable\n \n  // Associate the 4D $LastName_value variable with the first "?" in the SQL request\n    SQL SET PARAMETER($LastName_value;SQL param in)\n \n  // From the remote PERSONS table, retrieve the values of the LastName and FirstName fields\n  // where "LastName = Smith" and store them in the $a_LastName and $a_FirstName arrays\n    SQL EXECUTE("SELECT LastName, FirstName FROM PERSONS WHERE LastName = ?";$a_LastName;$a_FirstName)\n    If(Not(SQL End selection)) // If at least one record is found\n \n       SQL LOAD RECORD(SQL all records) // Load all the records\n \n       $UseSQL:=True // Chooses the way to integrate the data (demo only)\n \n       If($UseSQL) // Use SQL requests\n          SQL LOGOUT // Log out from the remote database\n          SQL LOGIN(SQL_INTERNAL;"user";"password") // Log in to the local database\n  // Starting from here all SQL requests are made on the local database\n  // Save the $a_LastName and $a_FirstName arrays in the local PERSONS table\n          SQL EXECUTE("INSERT INTO PERSONS(LastName, FirstName) VALUES (:$a_LastName, :$a_FirstName);")\n \n       Else // Using 4D commands\n          For($i;1;Size of array($a_LastName))\n             CREATE RECORD([PERSONS])\n             [PERSONS]LastName:=$a_LastName{$i}\n             [PERSONS]FirstName:=$a_FirstName{$i}\n             SAVE RECORD([PERSONS])\n          End for\n       End if\n    End if\n    SQL LOGOUT // Close the connection\n End if\n'})}),"\n",(0,s.jsx)(n.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,s.jsx)(n.p,{children:"If the command has been executed correctly, the system variable OK returns 1. Otherwise, it returns 0."}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/sql-load-record",children:"SQL LOAD RECORD"})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"820"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifies variables"}),(0,s.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return i},a:function(){return l}});var t=a(667294);let s={},r=t.createContext(s);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);