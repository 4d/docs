"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["23181"],{526569:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>c,assets:()=>o,toc:()=>d,frontMatter:()=>l});var i=JSON.parse('{"id":"commands-legacy/query","title":"QUERY","description":"QUERY ( {aTable }{;}{ queryArgument {; *}} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/query.md","sourceDirName":"commands-legacy","slug":"/commands/query","permalink":"/docs/commands/query","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fquery.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"query","title":"QUERY","slug":"/commands/query","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ORDER BY FORMULA","permalink":"/docs/commands/order-by-formula"},"next":{"title":"QUERY BY ATTRIBUTE","permalink":"/docs/commands/query-by-attribute"}}'),r=s("785893"),t=s("250065");let l={id:"query",title:"QUERY",slug:"/commands/query",displayed_sidebar:"docs"},a=void 0,o={},d=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"Specifying the Query Argument",id:"specifying-the-query-argument",level:4},{value:"Example 5",id:"example-5",level:4},{value:"Example 6",id:"example-6",level:4},{value:"Example 7",id:"example-7",level:4},{value:"Example 8",id:"example-8",level:4},{value:"Example 9",id:"example-9",level:4},{value:"Example 10",id:"example-10",level:4},{value:"Example 11",id:"example-11",level:4},{value:"Example 12",id:"example-12",level:4},{value:"Example 13",id:"example-13",level:4},{value:"Example 14",id:"example-14",level:4},{value:"Example 15",id:"example-15",level:4},{value:"Example 16",id:"example-16",level:4},{value:"Example 17",id:"example-17",level:4},{value:"Example 18",id:"example-18",level:4},{value:"Example 19",id:"example-19",level:4},{value:"Example 20",id:"example-20",level:4},{value:"Example 21",id:"example-21",level:4},{value:"Example 22",id:"example-22",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"QUERY"})," ( {",(0,r.jsx)(n.em,{children:"aTable"})," }{;}{ ",(0,r.jsx)(n.em,{children:"queryArgument"})," {; *}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"aTable"}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Table for which to return a selection of records, or Default table, if omitted"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"queryArgument"}),(0,r.jsx)(n.td,{children:"Expression"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Query argument"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Continue query flag"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"QUERY"})," looks for records matching the criteria specified in ",(0,r.jsx)(n.em,{children:"queryArgument"})," and returns a selection of records for ",(0,r.jsx)(n.em,{children:"aTable"}),". ",(0,r.jsx)(n.strong,{children:"QUERY"})," changes the current selection of ",(0,r.jsx)(n.em,{children:"aTable"})," for the current process and makes the first record of the new selection the current record."]}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.em,{children:"aTable"})," parameter is omitted, the command applies to the default table. If no default table has been set, an error occurs."]}),"\n",(0,r.jsxs)(n.p,{children:["If you do not specify ",(0,r.jsx)(n.em,{children:"queryArgument"})," or the ",(0,r.jsx)(n.em,{children:"*"})," parameters, ",(0,r.jsx)(n.strong,{children:"QUERY"})," displays the Query editor for ",(0,r.jsx)(n.em,{children:"aTable"})," (except when it is the last row of a multiple query, see example 2):"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(49686).Z+"",width:"856",height:"164"})}),"\n",(0,r.jsx)(n.p,{children:"For more information about using the Query Editor, refer to the 4D Design Reference manual."}),"\n",(0,r.jsxs)(n.p,{children:["The user builds the query, then clicks the Query button or chooses Query in selection to perform the query. If the query is performed without interruption, the OK variable is set to 1. If the user clicks Cancel, the ",(0,r.jsx)(n.strong,{children:"QUERY"})," terminates with no query actually performed, and sets the OK variable to ",(0,r.jsx)(n.em,{children:"0"})," (zero)."]}),"\n",(0,r.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(n.p,{children:"The following line displays the Query editor for the [Products] table:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0QUERY([Products])\n"})}),"\n",(0,r.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(n.p,{children:"The following line displays the Query editor for the default table (if it has been set)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0QUERY\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you specify the ",(0,r.jsx)(n.em,{children:"queryArgument"})," parameter, the standard Query editor is not presented and the query is defined programmatically. For simple queries (search on only one field) you call QUERY once with ",(0,r.jsx)(n.em,{children:"queryArgument"}),". For multiple queries (search on multiple fields or with multiple conditions), you call QUERY as many times as necessary with ",(0,r.jsx)(n.em,{children:"queryArgument"}),", and you specify the optional * parameter, except for the last QUERY call, which starts the actual query operation. The ",(0,r.jsx)(n.em,{children:"queryArgument"})," parameter is described further in this section."]}),"\n",(0,r.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,r.jsx)(n.p,{children:"The following line looks for the [People] whose name starts with an \u201Ca\u201D:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([People];[People]Last name="a@")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-4",children:"Example 4"}),"\n",(0,r.jsx)(n.p,{children:"The following line looks for the [People] whose name starts with \u201Ca\u201D or \u201Cb\u201D:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([People];[People]Name="a@";*)\xa0// * indicates that there are further search criteria\n\xa0QUERY([People];|;[People]Name="b@")\xa0// No * ends the query definition and starts the actual query operation\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The interpretation of @ characters in queries can be modified via an option in the Preferences. For more information, please refer to the ",(0,r.jsx)(n.em,{children:"Comparison Operators"})," section."]}),"\n",(0,r.jsx)(n.h4,{id:"specifying-the-query-argument",children:"Specifying the Query Argument"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"queryArgument"})," parameter uses the following syntax:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"{ conjunction ; } field comparator value"})}),"\n",(0,r.jsx)(n.p,{children:"The conjunction is used to join QUERY calls when defining multiple queries. The conjunctions available are the same as those in the Query editor:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Conjunction"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Symbol to use with QUERY"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"AND"}),(0,r.jsx)(n.td,{children:"&"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OR"}),(0,r.jsx)(n.td,{children:"|"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Except"}),(0,r.jsx)(n.td,{children:"#"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"conjunction"})," is optional and not used for the first QUERY call of a multiple query, or if the query is a simple query. If you omit it within a multiply query, AND (&) is used by default."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"field"})," is the field to query. The ",(0,r.jsx)(n.em,{children:"field"})," may belong to another table if it belongs to a One table related to ",(0,r.jsx)(n.em,{children:"aTable"})," with an automatic or manual relation."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"comparator"})," is the comparison that is made between ",(0,r.jsx)(n.em,{children:"field"})," and ",(0,r.jsx)(n.em,{children:"value"}),". The ",(0,r.jsx)(n.em,{children:"comparator"})," is one of the symbols shown here:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Comparison"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Symbol to use with QUERY"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Equal to"}),(0,r.jsx)(n.td,{children:"="})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Not equal to"}),(0,r.jsx)(n.td,{children:"#"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Less than"}),(0,r.jsx)(n.td,{children:"<"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Greater than"}),(0,r.jsx)(n.td,{children:">"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Less than or equal to"}),(0,r.jsx)(n.td,{children:"<="})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Greater than or equal to"}),(0,r.jsx)(n.td,{children:">="})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Contains keyword"}),(0,r.jsx)(n.td,{children:"%"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," It is also possible to specify the comparison operator as an alphanumeric expression instead of a symbol. In this case, it is mandatory to use semi-colons in order to separate the items of the query string. This means that it is possible, for example, to create configurable query sequences by varying the comparison operator, or to build custom user query interfaces. Please refer to example 21."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"value"})," is the data against which ",(0,r.jsx)(n.em,{children:"field"})," will be compared. The value can be any expression that evaluates to the same data type as ",(0,r.jsx)(n.em,{children:"field"}),". The value is evaluated once, at the beginning of the query. The value is not evaluated for each record. To query for a string contained in a string (a \u201Ccontains\u201D query), use the wildcard symbol (@) in ",(0,r.jsx)(n.em,{children:"value"}),' to isolate the string to be searched for as shown in this example "@Smith@". Note that in this case, the search only partially benefits from the index (compactness of data storage).']}),"\n",(0,r.jsxs)(n.p,{children:["Searching by keywords is only available with Alpha or Text type fields. For more information about this type of query, please refer to the ",(0,r.jsx)(n.em,{children:"Comparison Operators"})," section."]}),"\n",(0,r.jsx)(n.p,{children:"Here are the rules for building multiple queries:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The first query argument must not contain a conjunction."}),"\n",(0,r.jsx)(n.li,{children:"Each successive query argument can begin with a conjunction. If you omit it, the AND (&) operator is used by default."}),"\n",(0,r.jsx)(n.li,{children:"The first query and every other query, except the last, must use the * parameter."}),"\n",(0,r.jsx)(n.li,{children:"To perform the query, do not specify the * parameter in the last QUERY command. Alternatively, you may execute the QUERY command without any parameters other than the table (the Query editor is not shown; instead, the multiple query you just defined is performed)."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," Each table maintains its own current built query. This means that you can create multiple built queries simultaneously, one for each table. You must use the ",(0,r.jsx)(n.em,{children:"aTable"})," parameter or set the default table to specify which table to use."]}),"\n",(0,r.jsx)(n.p,{children:"No matter which way a query has been defined:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If the actual query operation is going to take some time to be performed, 4D automatically displays a message containing a progress thermometer. These messages can be turned on and off by using the ",(0,r.jsx)(n.a,{href:"/docs/commands/messages-on",children:"MESSAGES ON"})," and ",(0,r.jsx)(n.a,{href:"/docs/commands/messages-off",children:"MESSAGES OFF"})," commands. If the progress thermometer is displayed, the user can click on the Stop button to interrupt the query. If the query is completed, OK is set to 1. Otherwise, if the query is interrupted, OK is set to 0 (zero)."]}),"\n",(0,r.jsx)(n.li,{children:"If any indexed fields are specified, the query is optimized every time that it is possible (indexed fields are searched first) resulting in a query that takes the least amount of time possible. The command makes use of composite indexes for queries using the AND (&)."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"example-5",children:"Example 5"}),"\n",(0,r.jsx)(n.p,{children:"The following command finds the records for all the people named Smith:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([People];[People]Last Name="Smith")\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," If the Last Name field were indexed, the QUERY command would automatically use the index for a fast query."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Reminder:"})," This query will find records like \u201CSmith\u201D, \u201Csmith\u201D,\u201CSMITH\u201D, etc. To distinguish lowercase from uppercase, perform additional queries using the character codes."]}),"\n",(0,r.jsx)(n.h4,{id:"example-6",children:"Example 6"}),"\n",(0,r.jsx)(n.p,{children:"The following example finds the records for all people named John Smith. The Last Name field is indexed. The First Name field is not indexed."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([People];[People]Last Name="smith";*)\xa0// Find every person named Smith\n\xa0QUERY([People];\xa0&\xa0;[People]First Name="john")\xa0// with John as first name\n'})}),"\n",(0,r.jsx)(n.p,{children:"When the query is performed, it quickly does an indexed search on Last Name and reduces the selection of records to those of people named Smith. The query then sequentially searches on First Name in this selection of records."}),"\n",(0,r.jsx)(n.h4,{id:"example-7",children:"Example 7"}),"\n",(0,r.jsxs)(n.p,{children:["The following example will automatically take advantage of a composite index of the ",(0,r.jsx)(n.em,{children:"[People]First Name"}),"+",(0,r.jsx)(n.em,{children:"[People]Last Name"})," fields (if it exists) to find the records for all people named John Smith."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([People];[People]First Name="john";*)\xa0// Find every person named John\n\xa0QUERY([People];&;[People]Last Name="smith")\xa0// with Smith as last name\n'})}),"\n",(0,r.jsxs)(n.p,{children:["For more information, see ",(0,r.jsx)(n.em,{children:"Composite indexes"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"example-8",children:"Example 8"}),"\n",(0,r.jsx)(n.p,{children:"The following example finds the records of people named Smith or Jones. The Last Name field is indexed."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([People];[People]Last Name="smith";*)\xa0// Find every person named Smith\u2026\n\xa0QUERY([People];|;[People]Last Name="jones")\xa0// ...or Jones\n'})}),"\n",(0,r.jsx)(n.p,{children:"The QUERY command uses the Last Name index for both queries. The two queries are performed, and their results put into internal sets that are eventually combined using a union."}),"\n",(0,r.jsx)(n.h4,{id:"example-9",children:"Example 9"}),"\n",(0,r.jsx)(n.p,{children:"The following example finds the records for people who do not have a company name. It does this by finding entries with empty fields (the empty string)."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([People];[People]Company="")\xa0// Find every person with no company\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-10",children:"Example 10"}),"\n",(0,r.jsx)(n.p,{children:"The following example finds the record for every person whose last name is Smith and who works for a company based in New York. The second query uses a field from another table. This query can be done because the [People] table is related to the [Company] table with a many to one relation:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([People];[People]Last Name="smith";*)\xa0// Find every person named Smith\u2026\n\xa0QUERY([People];&;[Company]State="NY")\xa0// ... who works for a company based in NY\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-11",children:"Example 11"}),"\n",(0,r.jsx)(n.p,{children:"The following example finds the record for every person whose name falls between A (included) and M (included):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([People];[People]Name<"n")\xa0// Find every person from A to M\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-12",children:"Example 12"}),"\n",(0,r.jsx)(n.p,{children:"The following example finds the records for all the people living in the San Francisco or Los Angeles areas (ZIP codes beginning with 94 or 90):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([People];[People]ZIP Code ="94@";*)\xa0// Find every person in the SF\u2026\n\xa0QUERY([People];|;[People]ZIP Code ="90@")\xa0// ...or Los Angeles areas\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-13",children:"Example 13"}),"\n",(0,r.jsx)(n.p,{children:"Searching by keyword: the following example searches the [Products] table for records where the Description field contains the word \u201Ceasy\u201D:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Products];[Products]Description%"easy")\n\xa0\xa0// Find products whose description contains the keyword easy\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-14",children:"Example 14"}),"\n",(0,r.jsx)(n.p,{children:"The following example finds the record that matches the invoice reference entered in the request dialog box:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0vFind:=Request("Find invoice reference:")\xa0// Get an invoice reference from the user\n\xa0If(OK=1)\xa0// If the user pressed OK\n\xa0\xa0\xa0\xa0QUERY([Invoice];[Invoice]Ref=vFind)\xa0// Find the invoice reference that matches vFind\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-15",children:"Example 15"}),"\n",(0,r.jsx)(n.p,{children:"The following example finds the records for the invoices entered in 1996. It does this by finding all records entered after 12/31/95 and before 1/1/97:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0QUERY([Invoice];[Invoice]In Date>!12/31/95!;*)\xa0// Find invoices after 12/31/95\u2026\n\xa0QUERY([Invoice];&;[Invoice]In Date\n"})}),"\n",(0,r.jsx)(n.h4,{id:"example-16",children:"Example 16"}),"\n",(0,r.jsx)(n.p,{children:"The following example finds the record for each employee whose salary is between $10,000 and $50,000. The query includes the employees who make $10,000, but excludes those who make $50,000:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0QUERY([Employee];[Employee]Salary >=10000;*)\xa0// Find employees who make between\u2026\n\xa0QUERY([Employee];&;[Employee]Salary <50000)\xa0// ...$10,000 and $50,000\n"})}),"\n",(0,r.jsx)(n.h4,{id:"example-17",children:"Example 17"}),"\n",(0,r.jsx)(n.p,{children:"The following example finds the records for the employees in the marketing department who have salaries over $20,000. The Salary field is queried first because it is indexed. Notice that the second query uses a field from another table. It can do this because the [Dept] table is related to the [Employee] table with an automatic many to one relation:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Employee];[Employee]Salary >20000;*)\xa0// Find employees with salaries over $20,000 and...\n\xa0QUERY([Employee];&;[Dept]Name="marketing")\xa0// ...who are in the marketing department\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-18",children:"Example 18"}),"\n",(0,r.jsx)(n.p,{children:'Given three tables related by Many-to-One relations: [City] -> [Department] -> [Region]. The following query finds all the regions with cities whose names begin with "Saint":'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Region];[City]Name="Saint@")\xa0// Find all the regions with cities beginning with "Saint"\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-19",children:"Example 19"}),"\n",(0,r.jsxs)(n.p,{children:["The following example queries for information that was entered into the variable ",(0,r.jsx)(n.em,{children:"myVar"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0QUERY([Laws];[Laws]Text =myVar)\xa0// Find all laws that match myVar\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The query could have many different results, depending on the value of ",(0,r.jsx)(n.em,{children:"myVar"}),". The query will also be performed differently. For example:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.em,{children:"myVar"})," equals ",(0,r.jsx)(n.em,{children:'"Copyright@"'}),", the selection contains all laws with texts beginning with Copyright."]}),"\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.em,{children:"myVar"})," equals ",(0,r.jsx)(n.em,{children:'"@Copyright@"'}),", the selection contains all laws with texts containing at least one occurrence of Copyright."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"example-20",children:"Example 20"}),"\n",(0,r.jsx)(n.p,{children:"The following example adds or does not add lines to a complex query depending on the value of the variables. This way, only valid criteria are taken into account for the query:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Invoice];[Invoice]Paid=False;*)\n\xa0If($city#"")\xa0// if a city name has been specified\n\xa0\xa0\xa0\xa0QUERY([Invoice];[Invoice]Delivery_city=$city;*)\n\xa0End if\n\xa0If($zipcode#"")\xa0// If a zip code has been specified\n\xa0\xa0\xa0\xa0QUERY([Invoice];[Invoice]ZipCode=$zipcode;*)\n\xa0End if\n\xa0QUERY([Invoice])\xa0// Execution of query on the criteria\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-21",children:"Example 21"}),"\n",(0,r.jsx)(n.p,{children:"This example illustrates the use of a comparison operator as an alphanumeric expression. The value of the comparison operator is specified using a pop-up menu placed in a custom query dialog box:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $oper : Text\n\xa0$oper:=_popup_operator{_popup_operator}\xa0//$oper equals for example "#" or "="\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0QUERY(Invoice];[Invoice]Amount;$oper;$amount)\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-22",children:"Example 22"}),"\n",(0,r.jsx)(n.p,{children:"Using picture keyword indexes can greatly increase the speed of your applications."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([PICTURES];[PICTURES]Photos %"cats")\xa0// look for photos associated with the "cats" keyword\n'})}),"\n",(0,r.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,r.jsxs)(n.p,{children:["If the query is carried out correctly, the OK system variable is set to 1.",(0,r.jsx)(n.br,{}),"\nThe OK variable is set to 0 if:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["the user clicks on the ",(0,r.jsx)(n.strong,{children:"Cancel"}),"/",(0,r.jsx)(n.strong,{children:"Stop"})," button,"]}),"\n",(0,r.jsxs)(n.li,{children:["in 'query and lock' mode (see the ",(0,r.jsx)(n.a,{href:"/docs/commands/set-query-and-lock",children:"SET QUERY AND LOCK"})," command), the query has found at least one locked record. In this case as well, the LockedSet system set is updated."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/commands/query-selection",children:"QUERY SELECTION"})})]})}function c(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},49686:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/pict1581957.en-4f7d8295c765769a7a8bb7c532baae00.png"},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return l}});var i=s(667294);let r={},t=i.createContext(r);function l(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);