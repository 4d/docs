"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83457"],{565264:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/trigger-event","title":"Trigger event","description":"Trigger event  : Integer","source":"@site/versioned_docs/version-20-R7/commands-legacy/trigger-event.md","sourceDirName":"commands-legacy","slug":"/commands/trigger-event","permalink":"/docs/20-R7/commands/trigger-event","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftrigger-event.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"trigger-event","title":"Trigger event","slug":"/commands/trigger-event","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Triggers","permalink":"/docs/20-R7/commands/theme/Triggers"},"next":{"title":"Trigger level","permalink":"/docs/20-R7/commands/trigger-level"}}'),s=t("785893"),i=t("250065");let o={id:"trigger-event",title:"Trigger event",slug:"/commands/trigger-event",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Trigger event"}),"  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"0 Outside any trigger execution cycle 1 Saving a new record 2 Saving an existing record 3 Deleting a record"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Called from within a trigger, the ",(0,s.jsx)(n.strong,{children:"Trigger event"})," command returns a numeric value that denotes the type of the database event, in other words, the reason why the trigger has been invoked."]}),"\n",(0,s.jsxs)(n.p,{children:["The following predefined constants are provided in the ",(0,s.jsx)(n.em,{children:"Trigger Events"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Deleting Record Event"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Saving Existing Record Event"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Saving New Record Event"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Within a trigger, if you perform database operations on multiple records, you may encounter conditions (usually locked records) that will make the trigger unable to perform correctly. An example of this situation is updating multiple records in a [Products] table when a record is being added to an [Invoices] table. At this point, you must stop attempting database operations, and return a database error so the invoking process will know that its database request cannot be performed. Then the invoking process must be able to cancel, during the transaction, the incomplete database operations performed by the trigger. When this type of situation occurs, you need to know from within the trigger if you are in transaction even before attempting anything. To do so, use the command ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/in-transaction",children:"In transaction"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["When cascading trigger calls, 4D has no limit other than the available memory. To optimize trigger execution, you may want to write the code of your triggers depending not only on the database event, but also on the level of the call when triggers are cascaded. For example, during a deletion database event for the [Invoices] table, you may want to skip the update of the [Customers] Gross Sales field if the deletion of the [Invoices] record is part of the deletion of ",(0,s.jsx)(n.strong,{children:"all"})," the invoices related to a [Customers] record being deleted. To do so, use the commands ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/trigger-level",children:"Trigger level"})," and ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/trigger-properties",children:"TRIGGER PROPERTIES"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["You use the ",(0,s.jsx)(n.strong,{children:"Trigger event"})," command to structure your triggers as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// Trigger for [anyTable]\n\xa0var $0 : Integer\n\xa0$0:=0\xa0// Assume the database request will be granted\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Trigger event=On Saving New Record Event)\n\xa0\xa0// Perform appropriate action for the saving of a newly created record\n\xa0\xa0\xa0\xa0:(Trigger event=On Saving Existing Record Event)\n\xa0\xa0// Perform appropriate actions for the saving of an already existing record\n\xa0\xa0\xa0\xa0:(Trigger event=On Deleting Record Event)\n\xa0\xa0// Perform appropriate actions for the deletion of a record\n\xa0End case\n"})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/in-transaction",children:"In transaction"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/trigger-level",children:"Trigger level"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/trigger-properties",children:"TRIGGER PROPERTIES"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"Triggers"})]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"369"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var r=t(667294);let s={},i=r.createContext(s);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);