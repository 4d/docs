"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26275"],{261882:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>o,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/sum-squares","title":"Sum squares","description":"Sum squares ( series ) : Real","source":"@site/versioned_docs/version-20-R8/commands-legacy/sum-squares.md","sourceDirName":"commands-legacy","slug":"/commands/sum-squares","permalink":"/docs/commands/sum-squares","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsum-squares.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"sum-squares","title":"Sum squares","slug":"/commands/sum-squares","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Sum","permalink":"/docs/commands/sum"},"next":{"title":"Variance","permalink":"/docs/commands/variance"}}'),a=n("785893"),t=n("250065");let i={id:"sum-squares",title:"Sum squares",slug:"/commands/sum-squares",displayed_sidebar:"docs"},d=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Sum squares"})," ( ",(0,a.jsx)(s.em,{children:"series"})," ) : Real"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Parameter"}),(0,a.jsx)(s.th,{children:"Type"}),(0,a.jsx)(s.th,{}),(0,a.jsx)(s.th,{children:"Description"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"series"}),(0,a.jsx)(s.td,{children:"Field, Array"}),(0,a.jsx)(s.td,{children:"\u2192"}),(0,a.jsx)(s.td,{children:"Data for which to return the sum of squares"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Function result"}),(0,a.jsx)(s.td,{children:"Real"}),(0,a.jsx)(s.td,{children:"\u2190"}),(0,a.jsx)(s.td,{children:"Sum of squares of series"})]})]})]}),"\n",(0,a.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Sum squares"})," returns the sum of the squares of ",(0,a.jsx)(s.em,{children:"series"}),". If ",(0,a.jsx)(s.em,{children:"series"})," is an indexed field, the index is used to find the sum of the squares."]}),"\n",(0,a.jsxs)(s.p,{children:["You can pass an array (one or two dimensions) in ",(0,a.jsx)(s.em,{children:"series"}),". In this case, the array must be of the Integer, Longint or Real type."]}),"\n",(0,a.jsx)(s.h2,{id:"example-1",children:"Example 1"}),"\n",(0,a.jsxs)(s.p,{children:["The following example is an object method for the variable ",(0,a.jsx)(s.em,{children:"vSquares"}),". The object method assigns the sum of squares for a data series to ",(0,a.jsx)(s.em,{children:"vSquares"}),". The ",(0,a.jsx)(s.em,{children:"vSquares"})," variable is printed in the last break of the report:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:"\xa0vSquares:=Sum squares([Table1]DataSeries)\n"})}),"\n",(0,a.jsx)(s.p,{children:"The following method is called to print the records in the selection and to activate break processing:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:'\xa0ALL RECORDS([Table1])\n\xa0ORDER BY([Table1];[Table1]DataSeries;>)\n\xa0BREAK LEVEL(1)\n\xa0ACCUMULATE([Table1]DataSeries)\n\xa0OUTPUT FORM([Table1];"PrintForm")\n\xa0PRINT SELECTION([Table1])\n'})}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Note:"})," The parameter to the ",(0,a.jsx)(s.a,{href:"/docs/commands/break-level",children:"BREAK LEVEL"})," command should be equal to the number of breaks in your report. For more information about break processing, refer to the chapter ",(0,a.jsx)(s.em,{children:"Printing"}),"."]}),"\n",(0,a.jsx)(s.h2,{id:"example-2",children:"Example 2"}),"\n",(0,a.jsx)(s.p,{children:"This example gets the sum of the squares of the values placed in an array:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:"\xa0ARRAY REAL($ArrGrades;0)\n\xa0QUERY([Exams];[Exams]Exam_Date=!01/07/11!)\n\xa0SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)\n\xa0vSumSquares:=Sum squares($ArrGrades)\n"})}),"\n",(0,a.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/docs/commands/average",children:"Average"}),(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.a,{href:"/docs/commands/std-deviation",children:"Std deviation"}),(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.a,{href:"/docs/commands/sum",children:"Sum"}),(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.a,{href:"/docs/commands/variance",children:"Variance"})]}),"\n",(0,a.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{}),(0,a.jsx)(s.th,{})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Command number"}),(0,a.jsx)(s.td,{children:"28"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Thread safe"}),(0,a.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return i}});var r=n(667294);let a={},t=r.createContext(a);function i(e){let s=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);