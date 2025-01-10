"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78573"],{138964:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>r,assets:()=>o,toc:()=>d,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/query-by-sql","title":"QUERY BY SQL","description":"QUERY BY SQL ( {aTable ;} sqlFormula )","source":"@site/versioned_docs/version-20-R7/commands-legacy/query-by-sql.md","sourceDirName":"commands-legacy","slug":"/commands/query-by-sql","permalink":"/docs/commands/query-by-sql","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fquery-by-sql.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"query-by-sql","title":"QUERY BY SQL","slug":"/commands/query-by-sql","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is field value Null","permalink":"/docs/commands/is-field-value-null"},"next":{"title":"SET FIELD VALUE NULL","permalink":"/docs/commands/set-field-value-null"}}'),i=s("785893"),l=s("250065");let t={id:"query-by-sql",title:"QUERY BY SQL",slug:"/commands/query-by-sql",displayed_sidebar:"docs"},a=void 0,o={},d=[{value:"Description",id:"description",level:4},{value:"About Relations",id:"about-relations",level:5},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",myvar:"myvar",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"QUERY BY SQL"})," ( {",(0,i.jsx)(n.em,{children:"aTable"})," ;} ",(0,i.jsx)(n.em,{children:"sqlFormula"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"aTable"}),(0,i.jsx)(n.td,{children:"Table"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Table in which to return a selection of records or Default table if this parameter is omitted"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sqlFormula"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Valid SQL search formula representing the WHERE clause of the SELECT query"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"The QUERY BY SQL command can be used to take advantage of the SQL kernel integrated into 4D. It can execute a simple SELECT query that can be written as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"\xa0\xa0\xa0SELECT * \xa0\xa0\xa0\xa0\xa0\xa0FROM table \xa0\xa0\xa0\xa0\xa0\xa0WHERE \n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"aTable"})," is the name of the table passed in the first parameter and ",(0,i.jsx)(n.em,{children:"sqlFormula"})," is the query string passed in the second parameter."]}),"\n",(0,i.jsx)(n.p,{children:"For example, the following statement:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0([Employees];"name=\u2019smith\u2019")\n'})}),"\n",(0,i.jsx)(n.p,{children:"is equivalent to the following SQL query:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0SELECT*FROM Employees WHERE"name=\u2019smith\u2019"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The QUERY BY SQL command is similar to the ",(0,i.jsx)(n.a,{href:"/docs/commands/query-by-formula",children:"QUERY BY FORMULA"})," command. It looks for records in the specified table. It changes the current selection of ",(0,i.jsx)(n.em,{children:"aTable"})," for the current process and makes the first record of the new selection the current record."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," The QUERY BY SQL command cannot be used in the context of an external SQL connection; it connects directly to the integrated SQL engine of 4D."]}),"\n",(0,i.jsxs)(n.p,{children:["QUERY BY SQL applies ",(0,i.jsx)(n.em,{children:"sqlFormula"})," to each record in the table selection. ",(0,i.jsx)(n.em,{children:"sqlFormula"})," is a Boolean expression that must return ",(0,i.jsx)(n.strong,{children:"True"})," or ",(0,i.jsx)(n.strong,{children:"False"}),". As you may know, in the SQL standard, a search condition can yield a ",(0,i.jsx)(n.strong,{children:"True"}),", ",(0,i.jsx)(n.strong,{children:"False"})," or NULL result. All the records (rows) where the search condition returns ",(0,i.jsx)(n.strong,{children:"True"})," are included in the new current selection."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"sqlFormula"})," expression may be simple, such as comparing a field (column) to a value; or it may be complex, such as performing a calculation. Like ",(0,i.jsx)(n.a,{href:"/docs/commands/query-by-formula",children:"QUERY BY FORMULA"}),", QUERY BY SQL is able to evaluate information in related tables (see example 4). ",(0,i.jsx)(n.em,{children:"sqlFormula"})," must be a valid SQL statement that is compliant with the SQL-2 standard and with respect to the limitations of the current SQL implementation of 4D. For more information about SQL support in 4D, refer to the ",(0,i.jsx)(n.em,{children:"4D SQL Reference"})," manual."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"sqlFormula"})," parameter can use references to 4D expressions. The syntax to use is the same as for the integrated SQL commands or the code included between the ",(0,i.jsx)(n.a,{href:"/docs/commands/begin-sql",children:"Begin SQL"}),"/",(0,i.jsx)(n.a,{href:"/docs/commands/end-sql",children:"End SQL"})," tags, i.e.: ",(0,i.jsxs)(n.em,{children:["<",(0,i.jsx)(n.myvar,{children:">"})]})," or ",(0,i.jsx)(n.em,{children:":MyVar"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," This command is compatible with the ",(0,i.jsx)(n.a,{href:"/docs/commands/set-query-limit",children:"SET QUERY LIMIT"})," and ",(0,i.jsx)(n.a,{href:"/docs/commands/set-query-destination",children:"SET QUERY DESTINATION"})," commands."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Reminder:"})," You cannot have references to local variables in compiled mode. For more information about SQL programming in 4D, refer to the section ",(0,i.jsx)(n.em,{children:"Overview of SQL Commands"}),"."]}),"\n",(0,i.jsx)(n.h5,{id:"about-relations",children:"About Relations"}),"\n",(0,i.jsx)(n.p,{children:"QUERY BY SQL does not use relations between tables defined in the 4D Structure editor. If you want to make use of related data, you will have to add a JOIN to the query. For example, assuming we have the following structure with a Many-to-One relation from[Persons]City to [Cities]Name:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"\xa0\xa0\xa0[People] \xa0\xa0\xa0\xa0\xa0\xa0Name \xa0\xa0\xa0\xa0\xa0\xa0City \xa0\xa0\xa0[Cities] \xa0\xa0\xa0\xa0\xa0\xa0Name \xa0\xa0\xa0\xa0\xa0\xa0Population\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Using the ",(0,i.jsx)(n.a,{href:"/docs/commands/query-by-formula",children:"QUERY BY FORMULA"})," command, you can write:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0QUERY BY FORMULA([People];[Cities]Population>1000)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Using QUERY BY SQL, you must write the following statement, regardless of whether the relation exists:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY BY SQL([People];"people.city=cities.name AND cities.population>1000")\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," QUERY BY SQL handles One-to-Many and Many-to-Many relations differently than ",(0,i.jsx)(n.a,{href:"/docs/commands/query-by-formula",children:"QUERY BY FORMULA"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsx)(n.p,{children:"This example shows the offices where sales exceed 100. The SQL query is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"\xa0\xa0\xa0SELECT *\xa0\xa0\xa0\xa0\xa0\xa0FROM Offices\xa0\xa0\xa0\xa0\xa0\xa0WHERE Sales > 100\n"})}),"\n",(0,i.jsxs)(n.p,{children:["When using the ",(0,i.jsx)(n.strong,{children:"QUERY BY SQL"})," command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0C_STRING(30;$queryFormula)\n\xa0$queryFormula:="Sales > 100"\n\xa0QUERY BY SQL([Offices];$queryFormula)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsx)(n.p,{children:"This example shows the orders that fall into the 3000 to 4000 range. The SQL query is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"\xa0\xa0\xa0SELECT *\xa0\xa0\xa0\xa0\xa0\xa0FROM Orders\xa0\xa0\xa0\xa0\xa0\xa0WHERE Amount BETWEEN 3000 AND 4000\n"})}),"\n",(0,i.jsx)(n.p,{children:"When using the QUERY BY SQL command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0C_STRING(40;$queryFormula)\n\xa0$queryFormula:="Amount BETWEEN 3000 AND 4000"\n\xa0QUERY BY SQL([Orders];$queryFormula)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,i.jsx)(n.p,{children:"This example shows how to get the query result ordered by a specific criterion. The SQL query is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"\xa0\xa0\xa0SELECT *\xa0\xa0\xa0\xa0\xa0\xa0FROM People\xa0\xa0\xa0\xa0\xa0\xa0WHERE City =\u2019Paris\u2019\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ORDER BY Name\n"})}),"\n",(0,i.jsx)(n.p,{children:"When using the QUERY BY SQL command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0C_STRING(40;$queryFormula)\n\xa0$queryFormula:="City= \u2018Paris\u2019 ORDER BY Name"\n\xa0QUERY BY SQL([People];$queryFormula)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"example-4",children:"Example 4"}),"\n",(0,i.jsx)(n.p,{children:"This example shows a query using related tables in 4D. In SQL you should use a JOIN to simulate this relation. Assuming we have the two following tables:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"\xa0\xa0\xa0[Invoices] with the following columns (fields):\xa0\xa0\xa0\xa0\xa0\xa0ID_Inv: Longint\xa0\xa0\xa0\xa0\xa0\xa0Date_Inv: Date\xa0\xa0\xa0\xa0\xa0\xa0Amount: Real\xa0\xa0\xa0[Lines_Invoices] with the following columns (fields):\xa0\xa0\xa0\xa0\xa0\xa0ID_Line: Longint\xa0\xa0\xa0\xa0\xa0\xa0ID_Inv: Longint\xa0\xa0\xa0\xa0\xa0\xa0Code: Alpha (10)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["There is a Many-to-One relation from [Lines_Invoices]ID_Inv to [Invoices]ID_Inv.",(0,i.jsx)(n.br,{}),"\nUsing the ",(0,i.jsx)(n.a,{href:"/docs/commands/query-by-formula",children:"QUERY BY FORMULA"})," command, you could write:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY BY FORMULA([Lines_Invoices];([Lines_Invoices]Code="FX-200")\xa0&\xa0(Month of([Invoices]Date_Inv)=4))\n'})}),"\n",(0,i.jsx)(n.p,{children:"The SQL query is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"\xa0\xa0\xa0SELECT ID_Line\xa0\xa0\xa0\xa0\xa0\xa0FROM Lines_Invoices, Invoices\xa0\xa0\xa0\xa0\xa0\xa0WHERE Lines_Invoices.ID_Inv=Invoices.ID_Inv\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0AND Lines_Invoices.Code='FX-200'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0AND MONTH(Invoices.Date_Inv) = 4\n"})}),"\n",(0,i.jsxs)(n.p,{children:["When using the ",(0,i.jsx)(n.strong,{children:"QUERY BY SQL"})," command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0C_STRING(40;$queryFormula)\n\xa0$queryFormula:="Lines_Invoices.ID_Inv=Invoices.ID_InvAND Lines_Invoices.Code=\u2019FX-200\u2019 AND MONTH(Invoices.Date_Inv)=4"\n\xa0QUERY BY SQL([Lines_Invoices];$queryFormula)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,i.jsxs)(n.p,{children:["If the format of the search condition is correct, the system variable OK is set to 1. Otherwise, it is set to 0, the result of the command is an empty selection and an error is returned. This error can be intercepted by a method installed using the ",(0,i.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"})," command."]}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/commands/query-by-formula",children:"QUERY BY FORMULA"})}),"\n",(0,i.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"942"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifies variables"}),(0,i.jsx)(n.td,{children:"OK, error"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Changes current record"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Changes current selection"}),(0,i.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return t}});var r=s(667294);let i={},l=r.createContext(i);function t(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);