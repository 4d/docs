"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30354"],{246240:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>o,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/sql-set-parameter","title":"SQL SET PARAMETER","description":"SQL SET PARAMETER ( object ; paramType )","source":"@site/versioned_docs/version-20-R7/commands-legacy/sql-set-parameter.md","sourceDirName":"commands-legacy","slug":"/commands/sql-set-parameter","permalink":"/docs/commands/sql-set-parameter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-set-parameter.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sql-set-parameter","title":"SQL SET PARAMETER","slug":"/commands/sql-set-parameter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL SET OPTION","permalink":"/docs/commands/sql-set-option"},"next":{"title":"START SQL SERVER","permalink":"/docs/commands/start-sql-server"}}'),s=t("785893"),a=t("250065");let i={id:"sql-set-parameter",title:"SQL SET PARAMETER",slug:"/commands/sql-set-parameter",displayed_sidebar:"docs"},d=void 0,l={},o=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SQL SET PARAMETER"})," ( ",(0,s.jsx)(n.em,{children:"object"})," ; ",(0,s.jsx)(n.em,{children:"paramType"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"4D object to be used (variable, array or field)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"paramType"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Type of parameter"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"The SQL SET PARAMETER command allows the use of a 4D variable, array or field value in SQL requests."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," It is also possible to directly insert the name of a 4D object to be used (variable, array or field) between the ",(0,s.jsx)(n.em,{children:"<<"})," and ",(0,s.jsx)(n.em,{children:">>"})," characters in the text of the request (see example 1). For more information about this, please refer to the ",(0,s.jsx)(n.em,{children:"Overview of SQL Commands"})," section."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.em,{children:"object"})," parameter, pass the 4D object (variable, array or field) to be used in the request."]}),"\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.em,{children:"paramType"})," parameter, pass the SQL type of the parameter. You can pass a value or use one of the following constants, located in the \u201C",(0,s.jsx)(n.em,{children:"SQL"}),"\u201D theme:"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Value"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SQL param in"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SQL param in out"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"Usable only in the context of an SQL stored procedure (in-out parameter defined in the stored procedure)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SQL param out"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"Usable only in the context of an SQL stored procedure (out parameter defined in the stored procedure)"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["The value of the 4D object replaces the ",(0,s.jsx)(n.em,{children:"?"})," character in the SQL request (standard syntax). If the request contains more than one ",(0,s.jsx)(n.em,{children:"?"})," character, several calls to SQL SET PARAMETER will be necessary. The values of the 4D objects will be assigned sequentially in the request, in accordance with the execution order of the commands."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Warning:"})," This command is used for handling ",(0,s.jsx)(n.em,{children:"parameters"})," passed to the SQL request. It is not possible to use the SQL param out type to associate a 4D object with the ",(0,s.jsx)(n.em,{children:"result"})," of an SQL request. SQL request results are retrieved, for example, using the ",(0,s.jsx)(n.em,{children:"boundObj"})," parameter of the ",(0,s.jsx)(n.a,{href:"/docs/commands/sql-execute",children:"SQL EXECUTE"})," command (see the ",(0,s.jsx)(n.em,{children:"Overview of SQL Commands"}),"). The ",(0,s.jsx)(n.strong,{children:"SQL SET PARAMETER"})," command is mainly intended for setting parameters passed to the request (SQL param in); the SQL param out and SQL param in out types are reserved for use in the context of SQL stored procedures that could return parameters."]}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.p,{children:"This example is used to execute an SQL request which calls the associated 4D variables directly:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var MyText : Text\n\xa0var MyLongint : Integer\n\xa0\n\xa0SQL LOGIN("mysql";"root";"")\n\xa0SQLStmt:="insert into app_testTable (alpha_field, longint_field) VALUES (<>, <>)"\n\xa0For(vCounter;1;10)\n\xa0\xa0\xa0\xa0MyText:="Text"+String(vCounter)\n\xa0\xa0\xa0\xa0MyLongint:=vCounter\n\xa0\xa0\xa0\xa0SQL EXECUTE(SQLStmt)\n\xa0\xa0\xa0\xa0SQL CANCEL LOAD\n\xa0End for\n\xa0SQL LOGOUT\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.p,{children:"Same example as the previous one, but using the SQL SET PARAMETER command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var MyText : Text\n\xa0var MyLongint : Integer\n\xa0\n\xa0SQL LOGIN("mysql";"root";"")\n\xa0SQLStmt:="insert into app_testTable (alpha_field, longint_field) VALUES (?,?)"\n\xa0For(vCounter;1;10)\n\xa0\xa0\xa0\xa0MyText:="Text"+String(vCounter)\n\xa0\xa0\xa0\xa0MyLongint:=vCounter\n\xa0\xa0\xa0\xa0SQL SET PARAMETER(MyText;SQL param in)\n\xa0\xa0\xa0\xa0SQL SET PARAMETER(MyLongint;SQL param in)\n\xa0\xa0\xa0\xa0SQL EXECUTE(SQLStmt)\n\xa0\xa0\xa0\xa0SQL CANCEL LOAD\n\xa0End for\n\xa0SQL LOGOUT\n'})}),"\n",(0,s.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,s.jsx)(n.p,{children:"If the command has been executed correctly, the system variable OK returns 1. Otherwise, it returns 0."}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"823"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifies variables"}),(0,s.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var r=t(667294);let s={},a=r.createContext(s);function i(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);