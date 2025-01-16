"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95178"],{689301:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>i,toc:()=>a,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/cancel","title":"CANCEL","description":"CANCEL","source":"@site/versioned_docs/version-20-R7/commands-legacy/cancel.md","sourceDirName":"commands-legacy","slug":"/commands/cancel","permalink":"/docs/20-R7/commands/cancel","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcancel.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"cancel","title":"CANCEL","slug":"/commands/cancel","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ADD RECORD","permalink":"/docs/20-R7/commands/add-record"},"next":{"title":"DIALOG","permalink":"/docs/20-R7/commands/dialog"}}'),o=s("785893"),t=s("250065");let d={id:"cancel",title:"CANCEL",slug:"/commands/cancel",displayed_sidebar:"docs"},c=void 0,i={},a=[{value:"Description",id:"description",level:4},{value:"Headless mode",id:"headless-mode",level:5},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",br:"br",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"CANCEL"})}),"\n\n\n\n\n\n\n\n",(0,o.jsx)(n.table,{children:(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Does not require any parameters"}),(0,o.jsx)(n.th,{})]})})}),"\n",(0,o.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"CANCEL"})," command is used in form or object methods (or in a subroutine) to:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["cancel a new or modified record, for which data entry has been initiated using ",(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/add-record",children:"ADD RECORD"})," or ",(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/modify-record",children:"MODIFY RECORD"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["cancel a form displayed with the ",(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/dialog",children:"DIALOG"})," command."]}),"\n",(0,o.jsxs)(n.li,{children:["exit a form displaying a selection of records, using ",(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/display-selection",children:"DISPLAY SELECTION"})," or ",(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/modify-selection",children:"MODIFY SELECTION"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["cancel the printing of a form that is about to be printed using the ",(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/print-form",children:"Print form"})," command (see below)."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["In the context of data entry, ",(0,o.jsx)(n.strong,{children:"CANCEL"})," performs the same action as if the user had pressed the cancel key (",(0,o.jsx)(n.strong,{children:"Esc"}),")."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"CANCEL"})," is commonly executed as a result of a menu command being chosen. ",(0,o.jsx)(n.strong,{children:"CANCEL"})," is also commonly used in the object method of a \u201Cno action\u201D button."]}),"\n",(0,o.jsxs)(n.p,{children:["It is also often used in the optional close box method for the ",(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/open-window",children:"Open window"})," command. If there is a Control-menu box on a window, ",(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/accept",children:"ACCEPT"})," or ",(0,o.jsx)(n.strong,{children:"CANCEL"})," can be called, in the method to be executed, when the Control-menu box is double-clicked or the ",(0,o.jsx)(n.strong,{children:"Close"})," menu command is chosen."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"CANCEL"})," cannot be queued up. Executing two ",(0,o.jsx)(n.strong,{children:"CANCEL"})," commands in a row from within a method in response to an event would have the same effect as executing only one."]}),"\n",(0,o.jsxs)(n.p,{children:["Finally, this command can be used in the On Printing Detail form event, when using the ",(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/print-form",children:"Print form"})," command. In this context, the ",(0,o.jsx)(n.strong,{children:"CANCEL"})," command suspends the printing of the form that is about to be printed, then resumes it on the next page. This mechanism can be used to manage form printing when there is a lack of space or if a page break is required."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note:"})," This operation differs from that of the ",(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/page-break",children:"PAGE BREAK"}),"(*) command that cancels ALL the forms waiting to be printed."]}),"\n",(0,o.jsx)(n.h5,{id:"headless-mode",children:"Headless mode"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"CANCEL"})," command is allowed in headless mode, in the context of offscreen areas created by ",(0,o.jsx)(n.em,{children:"VP Run offscreen area"})," or ",(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/wa-run-offscreen-area",children:"WA Run offscreen area"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,o.jsxs)(n.p,{children:["Refer to the example of the ",(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/set-print-marker",children:"SET PRINT MARKER"})," command."]}),"\n",(0,o.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,o.jsxs)(n.p,{children:["When the ",(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/cancel",children:"CANCEL"})," command is executed (form or printing cancelled), the system variable OK is set to 0."]}),"\n",(0,o.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/accept",children:"ACCEPT"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/page-break",children:"PAGE BREAK"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/print-form",children:"Print form"})]}),"\n",(0,o.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Command number"}),(0,o.jsx)(n.td,{children:"270"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread safe"}),(0,o.jsx)(n.td,{children:"\u2717"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Modifies variables"}),(0,o.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var r=s(667294);let o={},t=r.createContext(o);function d(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);