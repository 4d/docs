"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33358"],{748574:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>t,assets:()=>d,toc:()=>l,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/describe-query-execution","title":"DESCRIBE QUERY EXECUTION","description":"DESCRIBE QUERY EXECUTION ( status )","source":"@site/versioned_docs/version-20-R9/commands-legacy/describe-query-execution.md","sourceDirName":"commands-legacy","slug":"/commands/describe-query-execution","permalink":"/docs/commands/describe-query-execution","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdescribe-query-execution.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"describe-query-execution","title":"DESCRIBE QUERY EXECUTION","slug":"/commands/describe-query-execution","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Queries","permalink":"/docs/commands/theme/Queries"},"next":{"title":"Find in field","permalink":"/docs/commands/find-in-field"}}'),i=s("785893"),r=s("250065");let a={id:"describe-query-execution",title:"DESCRIBE QUERY EXECUTION",slug:"/commands/describe-query-execution",displayed_sidebar:"docs"},o=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"DESCRIBE QUERY EXECUTION"})," ( ",(0,i.jsx)(n.em,{children:"status"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"status"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"True=Enable internal query analysis, False=Disable internal query analysis"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"DESCRIBE QUERY EXECUTION"})," command enables or disables the query analysis mode for the current process. The command only works in the context of 4D language query commands such as ",(0,i.jsx)(n.a,{href:"/docs/commands/query",children:"QUERY"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Calling the command with the ",(0,i.jsx)(n.em,{children:"status"})," parameter set to ",(0,i.jsx)(n.strong,{children:"True"})," enables the query analysis mode. In this mode, the 4D engine records internally two specific pieces of information for each subsequent query carried out on the data:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A detailed internal description of the query just before its execution, in other words, what was planned to be executed (the query plan),"}),"\n",(0,i.jsx)(n.li,{children:"A detailed internal description of the query that was actually executed (the query path)."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The information recorded includes the type of query (indexed, sequential), the number of records found and the time needed for every query criteria to be executed. Y ou can then read this information using the ",(0,i.jsx)(n.a,{href:"/docs/commands/last-query-plan",children:"Last query plan"})," and ",(0,i.jsx)(n.a,{href:"/docs/commands/last-query-path",children:"Last query path"})," commands."]}),"\n",(0,i.jsx)(n.p,{children:"Usually, the description of the query plan and its path are the same, but they may nevertheless differ because 4D might implement dynamic optimizations during the query execution in order to improve performance. For example, an indexed query may be converted dynamically into a sequential query if the 4D engine estimates that this might be faster \u2014 this is sometimes the case, more particularly, when the number of records being queries is low."}),"\n",(0,i.jsxs)(n.p,{children:["Pass ",(0,i.jsx)(n.strong,{children:"False"})," in the ",(0,i.jsx)(n.em,{children:"status"})," parameter when you no longer need to analyze queries. The query analysis mode can slow down the application."]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"The following example illustrates the type of information obtained using these commands:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0var $vResultPlan;$vResultPath : Text\n\xa0DESCRIBE QUERY EXECUTION(True)\xa0//analysis mode\n\xa0QUERY([Employees];[Employees]LastName="T@";*)\xa0// Search for employees whose last name starts with T...\n\xa0QUERY([Employees];&;[Companies]Name="H@";*)\xa0// that work for a company whose name starts with H\n\xa0QUERY([Employees];&;[Employees]Salary>2500;*)\xa0// whose salary is > 2500\n\xa0QUERY([Employees];&;[Cities]Pop<50000)\xa0// that live in a city with less than 50,000 inhabitants\n\xa0$vResultPlan:=Last query plan(Description in text format)\n\xa0$vResultPath:=Last query path(Description in text format)\n\xa0DESCRIBE QUERY EXECUTION(False)\xa0//End of analysis mode\n'})}),"\n",(0,i.jsxs)(n.p,{children:["After executing this code, ",(0,i.jsx)(n.em,{children:"$vResultPlan"})," and ",(0,i.jsx)(n.em,{children:"$vResultPath"})," contain descriptions of the queries performed, for example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-RAW",children:"$vResultPlan : \xa0\xa0\xa0Employees.LastName == T@ And  Employees.Salary > 2500 And Join on Table : Companies\xa0 :\xa0  Employees.Company = Companies.Name [index : Companies.Name ] LIKE H@ And Join  on Table : Cities\xa0 :\xa0 Employees.City = Cities.Name [index : Cities.Pop  ] < 50000$vResultPath : (Employees.LastName == T@ And Employees.Salary\xa0 > 2500) And (Join on Table : Companies\xa0 :\xa0 Employees.Company\xa0 = Companies.Name with filter {[index : Companies.Name ]  LIKE H@}) And (Join on Table : Cities\xa0 :\xa0 Employees.City = Cities.Name  with filter {[index : Cities.Pop ] < 50000})\xa0\xa0 (3 records found in 1  ms)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If the Description in XML Format constant is passed to the ",(0,i.jsx)(n.a,{href:"/docs/commands/last-query-path",children:"Last query path"})," command, ",(0,i.jsx)(n.em,{children:"$vResultPath"})," contains the description of the query expressed in XML:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-XML",children:'$vResultPath : \n\xa0\xa0\xa0<QueryExecution>\n\xa0\xa0\xa0\xa0\xa0\xa0<steps description="And" time="0" recordsfounds="1227">\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<steps description="[Merge] : ACTORS with CITIES" time="13" recordsfounds="1227">\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<steps  description="[Join] : ACTORS.Birth_City_ID =CITIES.City_ID" time="13"  recordsfounds="1227"/>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</steps>\n\xa0\xa0\xa0\xa0\xa0\xa0</steps>\n\xa0\xa0\xa0</QueryExecution>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/commands/last-query-path",children:"Last query path"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/commands/last-query-plan",children:"Last query plan"})]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"1044"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return a}});var t=s(667294);let i={},r=t.createContext(i);function a(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);