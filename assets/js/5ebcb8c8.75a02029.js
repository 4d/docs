"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91001"],{672721:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>o,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/sum","title":"Sum","description":"Sum ( series {; attributePath} ) : Real","source":"@site/versioned_docs/version-20-R7/commands-legacy/sum.md","sourceDirName":"commands-legacy","slug":"/commands/sum","permalink":"/docs/commands/sum","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsum.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sum","title":"Sum","slug":"/commands/sum","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Std deviation","permalink":"/docs/commands/std-deviation"},"next":{"title":"Sum squares","permalink":"/docs/commands/sum-squares"}}'),r=s("785893"),a=s("250065");let i={id:"sum",title:"Sum",slug:"/commands/sum",displayed_sidebar:"docs"},d=void 0,l={},o=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Sum"})," ( ",(0,r.jsx)(n.em,{children:"series"})," {; ",(0,r.jsx)(n.em,{children:"attributePath"}),"} ) : Real"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"series"}),(0,r.jsx)(n.td,{children:"Field, Array"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Data for which to return the sum"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"attributePath"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Path of attribute for which to return the sum"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Sum for series"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Sum"})," command returns the sum (total of all values) for ",(0,r.jsx)(n.em,{children:"series"}),". If ",(0,r.jsx)(n.em,{children:"series"})," is an indexed field, the index is used to total the values."]}),"\n",(0,r.jsxs)(n.p,{children:["You can pass an array (one or two dimensions) in ",(0,r.jsx)(n.em,{children:"series"}),". In this case, the array must be of the Integer, Longint or Real type."]}),"\n",(0,r.jsxs)(n.p,{children:["This command accepts an optional ",(0,r.jsx)(n.em,{children:"attributePath"})," parameter of the Text type, that you can use if ",(0,r.jsx)(n.em,{children:"series"}),' is an object field. It allows you to define the path of the attribute to compute. Use the standard dot notation to define paths to nested attributes, for example "company.address.number". Keep in mind that object attribute names are case-sensitive.',(0,r.jsx)(n.br,{}),"\nOnly numeric attribute values are computed. If there are values in the attribute path which are not of a numeric type, they are ignored."]}),"\n",(0,r.jsxs)(n.p,{children:["If the command is correctly executed, the OK system variable is set to 1. If it is interrupted (for example if the user clicks on the ",(0,r.jsx)(n.strong,{children:"Stop"})," button of the progress thermometer), the OK variable is set to 0."]}),"\n",(0,r.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsxs)(n.p,{children:["The following example is an object method for a ",(0,r.jsx)(n.em,{children:"vTotal"})," variable placed in a form. The object method assigns the sum of all salaries to ",(0,r.jsx)(n.em,{children:"vTotal"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0vTotal:=Sum([Employees]Salary)\n"})}),"\n",(0,r.jsx)(n.p,{children:"The following method is called to print the records in the selection and to activate break processing:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ALL RECORDS([Employees])\n\xa0ORDER BY([Employees];[Employees]LastNm;>)\n\xa0BREAK LEVEL(1)\n\xa0ACCUMULATE([Employees]Salary)\n\xa0OUTPUT FORM([Employees];"PrintForm")\n\xa0PRINT SELECTION([Employees])\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The parameter to the ",(0,r.jsx)(n.a,{href:"/docs/commands/break-level",title:"BREAK LEVEL",children:"BREAK LEVEL"})," command should be equal to the number of breaks in your report. For more information about break processing, refer to the printing commands."]}),"\n",(0,r.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(n.p,{children:"This example gets the sum of all the values placed in an array:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY REAL($ArrGrades;0)\n\xa0QUERY([Exams];[Exams]Exam_Date=!01/07/11!)\n\xa0SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)\n\xa0vSum:=Sum($ArrGrades)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,r.jsxs)(n.p,{children:["For an example of computing an object field attribute, please refer to the example 3 of the ",(0,r.jsx)(n.a,{href:"/docs/commands/average",children:"Average"})," command description."]}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/accumulate",children:"ACCUMULATE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/average",children:"Average"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/break-level",children:"BREAK LEVEL"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/max",children:"Max"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/min",children:"Min"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/order-by",children:"ORDER BY"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/print-selection",children:"PRINT SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/subtotal",children:"Subtotal"})]}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifies variables"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var t=s(667294);let r={},a=t.createContext(r);function i(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);