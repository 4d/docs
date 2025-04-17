"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18835"],{349832:function(e,t,n){n.r(t),n.d(t,{default:()=>l,frontMatter:()=>c,metadata:()=>r,assets:()=>a,toc:()=>d,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/reject","title":"REJECT","description":"REJECT {( aField )}","source":"@site/versioned_docs/version-20-R8/commands-legacy/reject.md","sourceDirName":"commands-legacy","slug":"/commands/reject","permalink":"/docs/20-R8/commands/reject","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freject.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"reject","title":"REJECT","slug":"/commands/reject","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Old","permalink":"/docs/20-R8/commands/old"},"next":{"title":"Data Security","permalink":"/docs/20-R8/commands/theme/Data-Security"}}'),s=n("785893"),o=n("250065");let c={id:"reject",title:"REJECT",slug:"/commands/reject",displayed_sidebar:"docs"},i=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"REJECT"})," {( ",(0,s.jsx)(t.em,{children:"aField"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"aField"}),(0,s.jsx)(t.td,{children:"Field"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Field to reject"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"REJECT"})," has two forms. The first form has no parameters. It rejects the entire data entry and forces the user to stay in the form. The second form rejects only ",(0,s.jsx)(t.em,{children:"aField"})," and forces the user to stay in the field."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," You should consider the built-in data validation tools before using this command."]}),"\n",(0,s.jsxs)(t.p,{children:["The first form of ",(0,s.jsx)(t.strong,{children:"REJECT"})," prevents the user from accepting a record that is not complete. You can achieve the same result without using ",(0,s.jsx)(t.strong,{children:"REJECT"})," \u2014 you associate the Enter key with a No Action button and use the ",(0,s.jsx)(t.a,{href:"/docs/20-R8/commands/accept",children:"ACCEPT"})," and ",(0,s.jsx)(t.a,{href:"/docs/20-R8/commands/cancel",children:"CANCEL"})," commands to accept or cancel the record, after the fields have been entered correctly. It is recommended that you use this second technique and do not use the first form of ",(0,s.jsx)(t.strong,{children:"REJECT"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["If you use the first form, you execute ",(0,s.jsx)(t.strong,{children:"REJECT"})," to prevent the user from accepting a record, usually because the record is not complete or has inaccurate entries. If the user tries to accept the record, executing ",(0,s.jsx)(t.strong,{children:"REJECT"})," prevents the record from being accepted; the record remains displayed in the form. The user must continue with data entry until the record is acceptable, or cancel the record."]}),"\n",(0,s.jsxs)(t.p,{children:["The best place to put this form of ",(0,s.jsx)(t.strong,{children:"REJECT"})," is in the object method of an Accept button associated with the Enter key. This way, validation occurs only when the record is accepted, and the user cannot bypass the validation by pressing the Enter key."]}),"\n",(0,s.jsxs)(t.p,{children:["The second form of ",(0,s.jsx)(t.strong,{children:"REJECT"})," is executed with the ",(0,s.jsx)(t.em,{children:"field"})," parameter. In this case, the cursor stays in the field area, which forces the user to enter a correct value.",(0,s.jsx)(t.br,{}),"\nWith this syntax, it is imperative that you call the ",(0,s.jsx)(t.strong,{children:"REJECT"})," command in the On Data Change form event.You need to put this syntax of the ",(0,s.jsx)(t.strong,{children:"REJECT"})," command either in the form method, or in the object method of the entry area. If you are using ",(0,s.jsx)(t.strong,{children:"REJECT"})," for the subform\u2019s Detail Form for a table, put it in the form method or object method for the Detail Form. This command has no effect on fields in subform areas."]}),"\n",(0,s.jsxs)(t.p,{children:["You can use ",(0,s.jsx)(t.a,{href:"/docs/20-R8/commands/highlight-text",children:"HIGHLIGHT TEXT"})," to select the data in the field that is being rejected."]}),"\n",(0,s.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(t.p,{children:"The following example is for a bank transaction record. It shows the first form of REJECT being used in an Accept button object method. The Enter key is set as an equivalent for the button. This means that even if the user presses the Enter key to accept the record, the button\u2019s object method will be executed. If the transaction is a check, then there must be a check number. If there is no check number, the validation is rejected:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0Case of\n\xa0\xa0\xa0\xa0:(([Operation]Transaction="Check")\xa0&\xa0([Operation]Check Number=""))\xa0// If it is a check with no number...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Please fill in the check number.")\xa0// Alert the user\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0REJECT\xa0// Reject the entry\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GOTO OBJECT([Operation]Check Number)\xa0// Go to the check number field\n\xa0End case\n'})}),"\n",(0,s.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsxs)(t.p,{children:["The following example is part of an object method for an ",(0,s.jsx)(t.em,{children:"[Employees]Salary"})," field. The object method tests the ",(0,s.jsx)(t.em,{children:"Employees]Salary"})," field and rejects the field if it is less than $10,000. You could perform the same operation by specifying a minimum value for the field in the form editor:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Data Change)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If([Employees]Salary<10000)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Salary must be greater than $10,000")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0REJECT([Employees]Salary)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/20-R8/commands/accept",children:"ACCEPT"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/20-R8/commands/cancel",children:"CANCEL"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/20-R8/commands/goto-object",children:"GOTO OBJECT"})]}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Command number"}),(0,s.jsx)(t.td,{children:"38"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Thread safe"}),(0,s.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function l(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return c}});var r=n(667294);let s={},o=r.createContext(s);function c(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);