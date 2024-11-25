"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65472"],{946707:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>i});var t=JSON.parse('{"id":"commands-legacy/query-by-formula","title":"QUERY BY FORMULA","description":"QUERY BY FORMULA ( aTable {; queryFormula} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/query-by-formula.md","sourceDirName":"commands-legacy","slug":"/commands/query-by-formula","permalink":"/docs/commands/query-by-formula","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fquery-by-formula.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"query-by-formula","title":"QUERY BY FORMULA","slug":"/commands/query-by-formula","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QUERY BY EXAMPLE","permalink":"/docs/commands/query-by-example"},"next":{"title":"QUERY SELECTION","permalink":"/docs/commands/query-selection"}}'),s=r("785893"),a=r("250065");let i={id:"query-by-formula",title:"QUERY BY FORMULA",slug:"/commands/query-by-formula",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"See also",id:"see-also",level:4}];function d(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QUERY BY FORMULA"})," ( ",(0,s.jsx)(n.em,{children:"aTable"})," {; ",(0,s.jsx)(n.em,{children:"queryFormula"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"aTable"}),(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Table for which to return a selection of records"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"queryFormula"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Query formula"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QUERY BY FORMULA"})," looks for records in ",(0,s.jsx)(n.em,{children:"aTable"}),". It changes the current selection of ",(0,s.jsx)(n.em,{children:"aTable"})," for the current process and makes the first record of the new selection the current record."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QUERY BY FORMULA"})," and ",(0,s.jsx)(n.a,{href:"/docs/commands/query-selection-by-formula",children:"QUERY SELECTION BY FORMULA"})," work exactly the same way, except that ",(0,s.jsx)(n.strong,{children:"QUERY BY FORMULA"})," queries every record in the entire table and ",(0,s.jsx)(n.a,{href:"/docs/commands/query-selection-by-formula",children:"QUERY SELECTION BY FORMULA"})," queries only the records in the current selection."]}),"\n",(0,s.jsxs)(n.p,{children:["Both commands apply ",(0,s.jsx)(n.em,{children:"queryFormula"})," to each record in the table or selection. The ",(0,s.jsx)(n.em,{children:"queryFormula"})," is a Boolean expression that must evaluate to either TRUE or FALSE. If ",(0,s.jsx)(n.em,{children:"queryFormula"})," evaluates as TRUE, the record is included in the new selection."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"queryFormula"})," may be simple, perhaps comparing a field to a value; or it may be complex, perhaps performing a calculation or even evaluating information in a related table. The ",(0,s.jsx)(n.em,{children:"queryFormula"})," can be a 4D function (command), or a function (method) or expression you have created. You can use wildcards (@) in ",(0,s.jsx)(n.em,{children:"queryFormula"}),' when working with Alpha or text fields as well as the "contains" (%) operator for keyword queries. For more information, please refer to the description of the ',(0,s.jsx)(n.a,{href:"/docs/commands/query",children:"QUERY"})," command."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Warning:"})," Parameters ($1...$n) are not supported in the ",(0,s.jsx)(n.em,{children:"queryFormula"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"queryFormula"})," is omitted, 4D displays the query dialog box (the user can add a line of formula by ",(0,s.jsx)(n.strong,{children:"Alt+clicking"})," on the ",(0,s.jsx)(n.strong,{children:"[+]"})," button)."]}),"\n",(0,s.jsx)(n.p,{children:"When the query is complete, the first record of the new selection is loaded from disk and made the current record."}),"\n",(0,s.jsxs)(n.p,{children:["These commands are optimized and can more particularly take advantage of indexes. When the type of query allows it, these commands execute queries equivalent to the ",(0,s.jsx)(n.a,{href:"/docs/commands/query",children:"QUERY"})," command. For example, the statement ",(0,s.jsx)(n.strong,{children:"QUERY BY FORMULA"}),"([mytable]; [mytable]myfield=value) will be executed just like ",(0,s.jsx)(n.a,{href:"/docs/commands/query",children:"QUERY"}),"([mytable]; [mytable]myfield=value), which will allow the use of indexes. 4D can also optimize queries containing parts that cannot be optimized, by first executing the optimized parts and then combining the results with the rest of the query. For example, the statement ",(0,s.jsx)(n.strong,{children:"QUERY BY FORMULA"}),"[mytable];Length(myfield)=value) will not be optimized. On the other hand, ",(0,s.jsx)(n.strong,{children:"QUERY BY FORMULA"}),"([mytable];Length(myfield)=value1 | myfield=value2) will be partially optimized."]}),"\n",(0,s.jsxs)(n.p,{children:['These commands carry out "joins" like SQL when you compare fields from different tables. This means that it is not necessary for a structural automatic relation to exist between the tables. For example, you can execute a statement of the type ',(0,s.jsx)(n.strong,{children:'QUERY BY FORMULA([Table_A];([Table_A]field_X = [Table_B]field_Y) & ([Table_B]field_Y = "abc"))'})," (see example 3). The first part of the formula (",(0,s.jsx)(n.em,{children:"[Table_A]field_X = [Table_B]field_Y"}),") establishes the join between the two fields and the second part (",(0,s.jsx)(n.em,{children:'[Table_B]field_Y = "abc"'}),") defines the search criteria. The following rules apply:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"at least one search criterion must be set."}),"\n",(0,s.jsxs)(n.li,{children:["the ",(0,s.jsx)(n.em,{children:"queryFormula"})," cannot contain more than one field comparison on the same table."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If they exist, the relations between the tables are not used as a rule. However, these commands will use automatic relations in the following cases:"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["- If the formula cannot be broken down into elements of the ",(0,s.jsx)(n.em,{children:"{ field ; comparator ; value}"})," form",(0,s.jsx)(n.br,{}),"\n- If two fields of the same table are compared."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Compatibility note"})," ",(0,s.jsx)(n.strong,{children:":"})," For compatibility reasons with databases converted from versions older than v11, it is possible to disable the joins mechanism using a selector of the ",(0,s.jsx)(n.a,{href:"/docs/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," command."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"4D Server:"})," This command is executed on the server, which optimizes its execution. Note that when variables are called directly in ",(0,s.jsx)(n.em,{children:"queryFormula"}),", the query is calculated with the value of the variables on the client machine. For example, the statement ",(0,s.jsx)(n.strong,{children:"QUERY BY FORMULA"}),"([mytable];[mytable]myfield=myvariable) will be executed on the server but with the contents of the client machine's myvariable."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Compatibility note:"})," Until 4D Server v11, this command was executed on the client machine. For reverse compatibility, this behavior is maintained in converted databases. However, a compatibility property or a selector of the ",(0,s.jsx)(n.a,{href:"/docs/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," command enables server-side execution in converted databases."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsxs)(n.p,{children:["This example finds the records for all invoices that were entered in December of any year. It does this by applying the ",(0,s.jsx)(n.a,{href:"/docs/commands/month-of",children:"Month of"})," function to each record. This query could not be performed any other way without creating a separate field for the month:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0QUERY BY FORMULA([Invoice];Month of([Invoice]Entered)=12)\xa0// Find the invoices entered in December\n"})}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.p,{children:"This example finds records for all the people who have names with more than ten characters:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0QUERY BY FORMULA([People];Length([People]Name)>10)\xa0// Find names longer than ten characters\n"})}),"\n",(0,s.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsx)(n.p,{children:'This example uses a join to query all the lines of "ACME" client invoices even though the tables are not related:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY BY FORMULA([invoice_line];([invoice_line]invoice_id=[invoice]id&[invoice]client="ACME"))\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/query",children:"QUERY"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/query-by-sql",children:"QUERY BY SQL"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/query-selection",children:"QUERY SELECTION"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/query-selection-by-formula",children:"QUERY SELECTION BY FORMULA"})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return i}});var t=r(667294);let s={},a=t.createContext(s);function i(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);