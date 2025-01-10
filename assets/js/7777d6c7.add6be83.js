"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87473"],{869518:function(e,n,d){d.r(n),d.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>l,toc:()=>a,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/modified","title":"Modified","description":"Modified ( aField ) : Boolean","source":"@site/versioned_docs/version-20-R7/commands-legacy/modified.md","sourceDirName":"commands-legacy","slug":"/commands/modified","permalink":"/docs/commands/modified","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmodified.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"modified","title":"Modified","slug":"/commands/modified","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DIALOG","permalink":"/docs/commands/dialog"},"next":{"title":"MODIFY RECORD","permalink":"/docs/commands/modify-record"}}'),i=d("785893"),s=d("250065");let r={id:"modified",title:"Modified",slug:"/commands/modified",displayed_sidebar:"docs"},o=void 0,l={},a=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Modified"})," ( ",(0,i.jsx)(n.em,{children:"aField"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"aField"}),(0,i.jsx)(n.td,{children:"Field"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Field to test"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Function result"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"True if the field has been assigned a new value, otherwise False"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Modified"})," returns ",(0,i.jsx)(n.a,{href:"/docs/commands/true",title:"True",children:"True"})," if ",(0,i.jsx)(n.em,{children:"field"})," has been programmatically assigned a value or has been edited during data entry. The ",(0,i.jsx)(n.strong,{children:"Modified"})," command must only be used in a form method (or a subroutine called by a form method)."]}),"\n",(0,i.jsxs)(n.p,{children:["Be careful, this command only returns a significant value within the same execution cycle. It is more particularly set to ",(0,i.jsx)(n.a,{href:"/docs/commands/false",title:"False",children:"False"})," for all the form events that correspond to the former ",(0,i.jsx)(n.em,{children:"_o_During"})," execution cycle (On Clicked, On After Keystroke, etc.)."]}),"\n",(0,i.jsxs)(n.p,{children:["During data entry, a field is considered modified if the user has edited the field (whether or not the original value is changed) and then left it by going to another field or by clicking on a control. Note that just tabbing out of a field does not set ",(0,i.jsx)(n.strong,{children:"Modified"})," to True. The field must have been edited in order for ",(0,i.jsx)(n.strong,{children:"Modified"})," to be True."]}),"\n",(0,i.jsx)(n.p,{children:"When executing a method, a field is considered to be modified if it has been assigned a value (different or not)."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," ",(0,i.jsx)(n.strong,{children:"Modified"})," always returns ",(0,i.jsx)(n.a,{href:"/docs/commands/true",title:"True",children:"True"})," after the execution of the ",(0,i.jsx)(n.a,{href:"/docs/commands/push-record",children:"PUSH RECORD"})," and ",(0,i.jsx)(n.a,{href:"/docs/commands/pop-record",children:"POP RECORD"})," commands."]}),"\n",(0,i.jsxs)(n.p,{children:["In all cases, use the ",(0,i.jsx)(n.a,{href:"/docs/commands/old",children:"Old"})," command to detect whether the field value has actually been changed."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," Although ",(0,i.jsx)(n.strong,{children:"Modified"})," can be applied to any type of field, if you use it in combination with the ",(0,i.jsx)(n.a,{href:"/docs/commands/old",children:"Old"})," command, be aware of the restrictions that apply to the ",(0,i.jsx)(n.a,{href:"/docs/commands/old",children:"Old"})," command. For details, see the description of the ",(0,i.jsx)(n.a,{href:"/docs/commands/old",children:"Old"})," command."]}),"\n",(0,i.jsxs)(n.p,{children:["During data entry, it is usually easier to perform operations in object methods using the ",(0,i.jsx)(n.a,{href:"/docs/commands/form-event-code",children:"Form event code"})," command than to use ",(0,i.jsx)(n.strong,{children:"Modified"})," in form methods. Since an object method is sent an On Data Change event whenever a field is modified, the use of an object method is equivalent to using ",(0,i.jsx)(n.strong,{children:"Modified"})," in a form method."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," To operate properly, the ",(0,i.jsx)(n.strong,{children:"Modified"})," command is to be used only in a form method or in a method called by a form method."]}),"\n",(0,i.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsxs)(n.p,{children:["The following example tests whether either the ",(0,i.jsx)(n.em,{children:"[Orders]Quantity"})," field or the ",(0,i.jsx)(n.em,{children:"[Orders]Price"})," field has changed. If either has been changed, then the ",(0,i.jsx)(n.em,{children:"[Orders]Total"})," field is recalculated."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0If((Modified([Orders]Quantity)|(Modified([Orders]Price))\n\xa0\xa0\xa0\xa0[Orders]Total :=[Orders]Quantity*[Orders]Price\n\xa0End if\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note that the same thing could be accomplished by using the second line as a subroutine called by the object methods for the ",(0,i.jsx)(n.em,{children:"[Orders]Quantity"})," field and the ",(0,i.jsx)(n.em,{children:"[Orders]Price"})," field within the On Data Change form event."]}),"\n",(0,i.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsxs)(n.p,{children:["You select a record for the table ",(0,i.jsx)(n.em,{children:"[anyTable]"}),", then you call multiple subroutines that may modify the field ",(0,i.jsx)(n.em,{children:"[anyTable]Important field,"})," but do not save the record. At the end of the main method, you can use the ",(0,i.jsx)(n.strong,{children:"Modified"})," command to detect whether you must save the record:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// Here the record has been selected as current record\n\xa0\xa0// Then you perform actions using subroutines\n\xa0DO SOMETHING\n\xa0DO SOMETHING ELSE\n\xa0DO NOT FORGET TO DO THAT\n\xa0\xa0// ...\n\xa0\xa0// And then you test the field to detect whether the record has to be saved\n\xa0If(Modified([anyTable]Important field))\n\xa0\xa0\xa0\xa0SAVE RECORD([anyTable])\n\xa0End if\n"})}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/commands/form-event-code",children:"Form event code"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/commands/old",children:"Old"})]}),"\n",(0,i.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"32"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return o},a:function(){return r}});var t=d(667294);let i={},s=t.createContext(i);function r(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);