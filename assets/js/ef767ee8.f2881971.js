"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42372"],{500691:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/form-set-output","title":"FORM SET OUTPUT","description":"FORM SET OUTPUT ( {aTable ;} form {; userForm} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/form-set-output.md","sourceDirName":"commands-legacy","slug":"/commands/form-set-output","permalink":"/docs/commands/form-set-output","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-set-output.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"form-set-output","title":"FORM SET OUTPUT","slug":"/commands/form-set-output","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM SET INPUT","permalink":"/docs/commands/form-set-input"},"next":{"title":"FORM SET SIZE","permalink":"/docs/commands/form-set-size"}}'),r=n("785893"),o=n("250065");let i={id:"form-set-output",title:"FORM SET OUTPUT",slug:"/commands/form-set-output",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"FORM SET OUTPUT"})," ( {",(0,r.jsx)(s.em,{children:"aTable"})," ;} ",(0,r.jsx)(s.em,{children:"form"})," {; ",(0,r.jsx)(s.em,{children:"userForm"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aTable"}),(0,r.jsx)(s.td,{children:"Table"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Table for which to set the output form, or Default table, if omitted"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"form"}),(0,r.jsx)(s.td,{children:"Text, Object"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Name (string) of table form, or a POSIX path (string) to a .json file describing the form, oran object describing the form"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"userForm"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Name of user form to use"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.strong,{children:"FORM SET OUTPUT"}),"  command sets the current output form for ",(0,r.jsx)(s.em,{children:"table"})," to ",(0,r.jsx)(s.em,{children:"form"}),", or ",(0,r.jsx)(s.em,{children:"userForm"}),". The form must belong to ",(0,r.jsx)(s.em,{children:"aTable"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.em,{children:"form"})," parameter is the form which will be displayed. Pass the:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"the name of a form;"}),"\n",(0,r.jsxs)(s.li,{children:["the path (in POSIX syntax) to a valid .json file containing a description of the form to use. See ",(0,r.jsx)(s.em,{children:"Form file path"}),";"]}),"\n",(0,r.jsx)(s.li,{children:"an object containing a description of the form."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"The scope of this command is the current process. Each table has its own output form in each process."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note:"})," For structural reasons, this command is not compatible with project forms."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"FORM SET OUTPUT"})," does not display the form; it just designates which form is printed, displayed, or used by another command. For information about creating forms, see the 4D ",(0,r.jsx)(s.em,{children:"Design Reference"})," manual."]}),"\n",(0,r.jsxs)(s.p,{children:["The default output form is defined in the Explorer window for each table. This default output form is used if the ",(0,r.jsx)(s.strong,{children:"FORM SET OUTPUT"}),"  command is not used to specify an output form, or if you specify a form that does not exist."]}),"\n",(0,r.jsxs)(s.p,{children:["The optional ",(0,r.jsx)(s.em,{children:"userForm"})," parameter lets you specify a user form (coming from ",(0,r.jsx)(s.em,{children:"form"}),") as the default output form. If you pass a valid user form name, this form will be used by default instead of the output form in the current process. This allows you to have several different custom user forms simultaneously (generated using the ",(0,r.jsx)(s.em,{children:"_o_CREATE USER FORM"})," command) and to use the one that suits according to the context."]}),"\n",(0,r.jsxs)(s.p,{children:["For more information about user forms, refer to the ",(0,r.jsx)(s.em,{children:"Overview of user forms"})," section."]}),"\n",(0,r.jsxs)(s.p,{children:["Output forms are used by three groups of commands. One group displays a list of records on screen, another group generates reports, and the third group exports data. The ",(0,r.jsx)(s.a,{href:"/docs/commands/display-selection",children:"DISPLAY SELECTION"})," and ",(0,r.jsx)(s.a,{href:"/docs/commands/modify-selection",children:"MODIFY SELECTION"})," commands display a list of records using an output form. You use the output form when creating reports with the ",(0,r.jsx)(s.a,{href:"/docs/commands/print-label",children:"PRINT LABEL"})," and ",(0,r.jsx)(s.a,{href:"/docs/commands/print-selection",children:"PRINT SELECTION"})," commands. Each of the export commands (",(0,r.jsx)(s.a,{href:"/docs/commands/export-dif",children:"EXPORT DIF"}),", ",(0,r.jsx)(s.a,{href:"/docs/commands/export-sylk",children:"EXPORT SYLK"})," and ",(0,r.jsx)(s.a,{href:"/docs/commands/export-text",children:"EXPORT TEXT"}),") also uses the output form."]}),"\n",(0,r.jsx)(s.h2,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsxs)(s.p,{children:["The following example shows a typical use of ",(0,r.jsx)(s.strong,{children:"FORM SET OUTPUT"}),". Note that although the ",(0,r.jsx)(s.strong,{children:"FORM SET OUTPUT"})," command appears immediately before the output form is used, this is not required. In fact, the command may be executed in a completely different method, as long as it is executed prior to this method:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0FORM SET INPUT([Parts];"Parts In")\xa0//Select the input form\n\xa0FORM SET OUTPUT([Parts];"Parts List")\xa0//Select the output form\n\xa0MODIFY SELECTION([Parts])\xa0//This command uses both forms\n'})}),"\n",(0,r.jsx)(s.h2,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(s.p,{children:"The following example uses the path to a .json form to print the records in an employee list:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0FORM SET OUTPUT([Personnel];"/RESOURCES/PersonnelPrintForm.json")\n\xa0ALL RECORDS([Personnel])\n\xa0PRINT SELECTION([Personnel])\n'})}),"\n",(0,r.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/commands/display-selection",children:"DISPLAY SELECTION"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/commands/export-dif",children:"EXPORT DIF"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/commands/export-sylk",children:"EXPORT SYLK"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/commands/export-text",children:"EXPORT TEXT"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/commands/form-set-input",children:"FORM SET INPUT"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/commands/modify-selection",children:"MODIFY SELECTION"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/commands/print-label",children:"PRINT LABEL"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/commands/print-selection",children:"PRINT SELECTION"})]}),"\n",(0,r.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Command number"}),(0,r.jsx)(s.td,{children:"54"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread safe"}),(0,r.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return i}});var t=n(667294);let r={},o=t.createContext(r);function i(e){let s=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);