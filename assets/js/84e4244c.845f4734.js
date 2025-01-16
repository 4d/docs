"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86603"],{604266:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>o,toc:()=>l,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/std-deviation","title":"Std deviation","description":"Std deviation ( series ) : Real","source":"@site/versioned_docs/version-20-R8/commands-legacy/std-deviation.md","sourceDirName":"commands-legacy","slug":"/commands/std-deviation","permalink":"/docs/commands/std-deviation","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fstd-deviation.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"std-deviation","title":"Std deviation","slug":"/commands/std-deviation","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Min","permalink":"/docs/commands/min"},"next":{"title":"Sum","permalink":"/docs/commands/sum"}}'),d=s("785893"),r=s("250065");let i={id:"std-deviation",title:"Std deviation",slug:"/commands/std-deviation",displayed_sidebar:"docs"},a=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Std deviation"})," ( ",(0,d.jsx)(n.em,{children:"series"})," ) : Real"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"series"}),(0,d.jsx)(n.td,{children:"Field, Array"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Data for which to return the standard deviation"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Function result"}),(0,d.jsx)(n.td,{children:"Real"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Standard deviation of series"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Std deviation"})," returns the standard deviation of ",(0,d.jsx)(n.em,{children:"series"}),". If ",(0,d.jsx)(n.em,{children:"series"})," is an indexed field, the index is used to find the standard deviation."]}),"\n",(0,d.jsxs)(n.p,{children:["You can pass an array (one or two dimensions) in ",(0,d.jsx)(n.em,{children:"series"}),". In this case, the array must be of the Integer, Longint or Real type."]}),"\n",(0,d.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,d.jsxs)(n.p,{children:["The following example is an object method for the variable ",(0,d.jsx)(n.em,{children:"vDeviate"}),". The object method assigns the standard deviation for a data series to ",(0,d.jsx)(n.em,{children:"vDeviate"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0vDeviate:=Std deviation([Table1]DataSeries)\n"})}),"\n",(0,d.jsx)(n.p,{children:"The following method is called to print the records in the selection and to activate break processing:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0ALL RECORDS([Table1])\n\xa0ORDER BY([Table1];[Table1]DataSeries;>)\n\xa0BREAK LEVEL(1)\n\xa0ACCUMULATE([Table1]DataSeries)\n\xa0OUTPUT FORM([Table1];"PrintForm")\n\xa0PRINT SELECTION([Table1])\n'})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," The parameter to the ",(0,d.jsx)(n.a,{href:"/docs/commands/break-level",children:"BREAK LEVEL"})," command should be equal to the number of breaks in your report. For more information about break processing, refer to the printing commands."]}),"\n",(0,d.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,d.jsx)(n.p,{children:"This example gets the standard deviation of a series of values placed in an array:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY REAL($ArrGrades;0)\n\xa0QUERY([Exams];[Exams]Exam_Date=!01/07/11!)\n\xa0SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)\n\xa0vStdDev:=Std deviation($ArrGrades)\n"})}),"\n",(0,d.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/commands/average",children:"Average"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/commands/sum",children:"Sum"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/commands/sum-squares",children:"Sum squares"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/commands/variance",children:"Variance"})]}),"\n",(0,d.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Command number"}),(0,d.jsx)(n.td,{children:"26"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return i}});var t=s(667294);let d={},r=t.createContext(d);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);