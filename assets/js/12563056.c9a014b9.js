"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55136"],{960809:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>o,toc:()=>a,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/listbox-insert-column-formula","title":"LISTBOX INSERT COLUMN FORMULA","description":"LISTBOX INSERT COLUMN FORMULA ( { ;} object ; colPosition ; colName ; formula ; dataType ; headerName ; headerVar {; footerName ; footerVar*} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/listbox-insert-column-formula.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-insert-column-formula","permalink":"/docs/20-R7/commands/listbox-insert-column-formula","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-insert-column-formula.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-insert-column-formula","title":"LISTBOX INSERT COLUMN FORMULA","slug":"/commands/listbox-insert-column-formula","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX INSERT COLUMN","permalink":"/docs/20-R7/commands/listbox-insert-column"},"next":{"title":"LISTBOX INSERT ROWS","permalink":"/docs/20-R7/commands/listbox-insert-rows"}}'),s=t("785893"),i=t("250065");let d={id:"listbox-insert-column-formula",title:"LISTBOX INSERT COLUMN FORMULA",slug:"/commands/listbox-insert-column-formula",displayed_sidebar:"docs"},l=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Dynamic insertion",id:"dynamic-insertion",level:3},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"LISTBOX INSERT COLUMN FORMULA"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"object"})," ; ",(0,s.jsx)(n.em,{children:"colPosition"})," ; ",(0,s.jsx)(n.em,{children:"colName"})," ; ",(0,s.jsx)(n.em,{children:"formula"})," ; ",(0,s.jsx)(n.em,{children:"dataType"})," ; ",(0,s.jsx)(n.em,{children:"headerName"})," ; ",(0,s.jsx)(n.em,{children:"headerVar"})," {; ",(0,s.jsx)(n.em,{children:"footerName"})," ; ",(0,s.jsx)(n.em,{children:"footerVar"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operator"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"If specified, object is an object name (string) If omitted, object is a variable"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Object name  (if * is specified) or Variable (if * is omitted)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"colPosition"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Location of column to insert"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"colName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Name of the column object"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"formula"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"4D formula associated with column"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dataType"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Type of formula result"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"headerName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Name of the column header object"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"headerVar"}),(0,s.jsx)(n.td,{children:"Integer, Pointer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Column header variable"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"footerName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Column footer object name"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"footerVar"}),(0,s.jsx)(n.td,{children:"Variable, Pointer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Column footer variable"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"LISTBOX INSERT COLUMN FORMULA"})," command inserts a column into the list box designated by the ",(0,s.jsx)(n.em,{children:"object"})," and ",(0,s.jsx)(n.em,{children:"*"})," parameters."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"LISTBOX INSERT COLUMN FORMULA"})," command is similar to the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/listbox-insert-column",children:"LISTBOX INSERT COLUMN"})," command except that it can be used to enter a formula as the contents of a column."]}),"\n",(0,s.jsxs)(n.p,{children:["This type of contents can only be used when the \u201CData Source\u201D property of the list box is set to ",(0,s.jsx)(n.strong,{children:"Current Selection"}),", ",(0,s.jsx)(n.strong,{children:"Named Selection"}),", or ",(0,s.jsx)(n.strong,{children:"Collection or Entity Selection"})," (for more information about this, please refer to the ",(0,s.jsx)(n.em,{children:"Managing List Box Objects"})," section)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," This command does nothing if it is applied to the first column of a list box displayed in hierarchical mode."]}),"\n",(0,s.jsxs)(n.p,{children:["If you pass the optional ",(0,s.jsx)(n.em,{children:"*"})," parameter, you indicate that the ",(0,s.jsx)(n.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, you indicate that the ",(0,s.jsx)(n.em,{children:"object"})," parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, please refer to the ",(0,s.jsx)(n.em,{children:"Object Properties"})," section."]}),"\n",(0,s.jsxs)(n.p,{children:["The new column is inserted just before the column designated by the ",(0,s.jsx)(n.em,{children:"colPosition"})," parameter. If the ",(0,s.jsx)(n.em,{children:"colPosition"})," parameter is greater than the total number of columns, the column will be added after the last column."]}),"\n",(0,s.jsxs)(n.p,{children:["Pass the object name of the inserted column in the ",(0,s.jsx)(n.em,{children:"colName"})," parameter."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"formula"})," parameter can contain any valid expression, i.e.:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"An instruction,"}),"\n",(0,s.jsx)(n.li,{children:"A formula generated using the Formula editor,"}),"\n",(0,s.jsx)(n.li,{children:"A call to a 4D command,"}),"\n",(0,s.jsx)(n.li,{children:"A call to a project method."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["At the moment the command is called, the ",(0,s.jsx)(n.em,{children:"formula"})," is parsed then executed."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," Use the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/command-name",children:"Command name"})," command in order to define formulas that are independent from the application language (when they call on 4D commands)."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"dataType"})," parameter can be used to designate the type of data resulting from the execution of the formula. You must pass one of the following constants of the \u201C",(0,s.jsx)(n.em,{children:"Field and Variable Types"}),"\u201D theme in this parameter:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is Boolean"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"6"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is date"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is picture"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is real"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is text"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is time"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"11"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["If the result of the ",(0,s.jsx)(n.em,{children:"formula"})," does not correspond to the expected data type, an error is generated."]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"headerName"})," and ",(0,s.jsx)(n.em,{children:"headerVar"})," parameters, pass the object name and variable of the column header inserted."]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"footerName"})," and ",(0,s.jsx)(n.em,{children:"footerVar"})," parameters, you can also pass the object name and variable of the footer of the inserted column. If you omit the ",(0,s.jsx)(n.em,{children:"footerVar"})," parameter, 4D uses a dynamic variable."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," Object names must be unique in a form. You need to make sure that the names passed in the ",(0,s.jsx)(n.em,{children:"colName"}),", ",(0,s.jsx)(n.em,{children:"headerName"})," and ",(0,s.jsx)(n.em,{children:"footerName"})," parameters are not already used. Otherwise, the column is not created and an error is generated."]}),"\n",(0,s.jsx)(n.h3,{id:"dynamic-insertion",children:"Dynamic insertion"}),"\n",(0,s.jsx)(n.p,{children:"Starting with 4D v14 R3, you can use this command to insert columns into list boxes dynamically when the form is executed. 4D will automatically handle the definition of the necessary variables (footer and header)."}),"\n",(0,s.jsxs)(n.p,{children:["To do this, ",(0,s.jsx)(n.strong,{children:"LISTBOX INSERT COLUMN FORMULA"})," accepts a Nil pointer (",(0,s.jsx)(n.strong,{children:"->[]"}),") as a value for the ",(0,s.jsx)(n.em,{children:"headerVar"})," and ",(0,s.jsx)(n.em,{children:"footerVar"})," parameters. In this case, when the command is executed, 4D creates the required variables dynamically (for more information, refer to the section)."]}),"\n",(0,s.jsx)(n.p,{children:"Note that header and footer variables are always created with a specific type (longint and text, respectively)."}),"\n",(0,s.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.p,{children:"We want to add a new column to the right of the list box that will contain a formula which calculates an empolyee's age:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0vAge:="Current Date-[Employees]BirthDate)\\365"\n\xa0$last:=LISTBOX Get number of columns(*;"ListBox1")+1\n\xa0LISTBOX INSERT COLUMN FORMULA(*;"ListBox1";$last;"ColFormula";vAge;Is real;"Age";HeaderVar)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.p,{children:"You want to add column to a list box of collection type:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//create collection\n\xa0var emps : Collection\n\xa0emps:=New collection(New object("Employee";"John Doe";"JobTitle";"CEO");New object("Employee";"Mary Smith";"JobTitle";"CTO");New object("Employee";"Jane Turner";"JobTitle";"CFO"))\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The column contents are evaluated for each element of the collection and referenced with the data source expression, ",(0,s.jsx)(n.em,{children:"This.Employee"}),", as shown below:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(662168).Z+"",width:"211",height:"57"})}),"\n",(0,s.jsx)(n.p,{children:"At execution:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(18320).Z+"",width:"301",height:"116"})}),"\n",(0,s.jsx)(n.p,{children:"To add a column showing the job titles:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0LISTBOX INSERT COLUMN FORMULA(*;"EmpLB";2;"2nd Column";"This.JobTitle";Is text;"JTHeader";header2)\n\xa0OBJECT SET TITLE(header2;"Title")\n'})}),"\n",(0,s.jsx)(n.p,{children:"The column is added to the list box:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(626762).Z+"",width:"342",height:"122"})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/listbox-insert-column",children:"LISTBOX INSERT COLUMN"})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"970"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},18320:function(e,n,t){t.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},626762:function(e,n,t){t.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},662168:function(e,n,t){t.d(n,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANMAAAA5CAIAAAAjuolqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAOCSURBVHhe7Zu9ihRBEMfvUQQDzXyAfQEfw0jExE3EVIwMNV4EQQRZucQLTGQDESMDAxPhwA9cEUQwMV6ruqu6a3aa0Rl2pub6/j+OnZqq/oL+3fQdu3v0GwAPsnnvv/559Obn3Rff1u9+SQrUyEw2Wsyj1dx/+f3m089XH368cu/Dg1c/Yh5Uxnw2WsyjX4LrTz7F1Vy6/Zpenx+f4Ke+n/lstJhHz960mos3ji/febsDNeKy0dvtViKDmEdHflrNhWuP6WksdVAXLhvdZR5BRz6tiX4Jbj37IkVQI9Nv9D/MI+j0lTQAhwPmAR9gHvAB5gEfYB7wAeYxm+VRYrE6lWxPTleLwX3PITCPIfOWG4kHA/N6AfMYmDc9MI9pmRcs2qwWevzqcSytbLmZFPPy8R1TdJ+tTDfUQ1ql2QupSoF5TBZFdjwIkKRRDZrKiEoca5/cQ73RaiqG8l6mI1UvMI9pbbNxoBRaRVre0NUOtm+VzkVXCxcLqXqBeYzakDBqlUKTI/bcomvBPA64HF9tPlNI1QvMYwaYl55IHIfOqUqjpeFSlWDpVipeYwyhkKoXmMewKwkWJVlUDjlYLuV/gXLDWGsemVZJxkyrzQqpSoF5QzCS9YG0suKdb2DeEAaZxw9CiJeAeUPobV44RCs/PnsC84APMA/4APOADzAP+ADzgA/r9VoiA8wDowPzgA8wD/gA84APMA/40MO8/PkLgd8NKr0JTrnON4rMJzman93oxcB37cFM6P/Ma7o25OMXh3EG5p1tYB7w4SDm0Ys9OVMLkiMWmna2nbGjUFPtp61Ch46veuV5YpHv04z5Rpdp/hYopMA0HMA8dYHCuH/aotkyY0TJPYw0kszKmGTOUhBSnJBaXkOeWpuZxXSkwGQc8rTVWK/sRJYi095mM0opbHaQdPbHDpazaQ3hnq5RdYGKhRSYjjHNC8T9beyq2pAxPUphs4OkNVk2jwNqFV9tPlNIgekY3TwmJqwUe1tuepRC6pCenRyHrI5ii9zFNFyu8hcQqZIGFgopMBljmsc7Gwm3qkpwJRFSZpRSyD27vuqVJ0p9CZ5GWzB2WmlWSIGJ6G+eA0ayHgzrBSaiXvPoQQjxZkyV5sVDFMfnrDkT5oEK+S/zqBEAE4BnHhgd8kwiA8wDowPzgA8wD/gA84APMA/4APOADzAP+ADzgA8F83a7vy1eS1Di5EkeAAAAAElFTkSuQmCC"},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var r=t(667294);let s={},i=r.createContext(s);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);