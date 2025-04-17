"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87920"],{145605:function(e,t,n){n.r(t),n.d(t,{default:()=>a,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/highlight-records","title":"HIGHLIGHT RECORDS","description":"HIGHLIGHT RECORDS ( {aTable }{;}{ setName {; *}} )","source":"@site/versioned_docs/version-20-R9/commands-legacy/highlight-records.md","sourceDirName":"commands-legacy","slug":"/commands/highlight-records","permalink":"/docs/commands/highlight-records","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fhighlight-records.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"highlight-records","title":"HIGHLIGHT RECORDS","slug":"/commands/highlight-records","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GOTO SELECTED RECORD","permalink":"/docs/commands/goto-selected-record"},"next":{"title":"LAST RECORD","permalink":"/docs/commands/last-record"}}'),r=n("785893"),i=n("250065");let d={id:"highlight-records",title:"HIGHLIGHT RECORDS",slug:"/commands/highlight-records",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"HIGHLIGHT RECORDS"})," ( {",(0,r.jsx)(t.em,{children:"aTable"})," }{;}{ ",(0,r.jsx)(t.em,{children:"setName"})," {; *}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"aTable"}),(0,r.jsx)(t.td,{children:"Table"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Table where records will be highlighted If omitted, table of current form"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"setName"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Set of records to highlight or Userset if omitted"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"*"}),(0,r.jsx)(t.td,{children:"Operator"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Disable the automatic scroll of the list"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"HIGHLIGHT RECORDS"})," command highlights records in a list form. This operation is identical to manually selecting records in list mode by using the mouse or the ",(0,r.jsx)(t.strong,{children:"Shift+Click"})," or ",(0,r.jsx)(t.strong,{children:"Ctrl+Click"})," (Windows) or ",(0,r.jsx)(t.strong,{children:"Command+Click"})," (macOS) key combinations. The current selection is not modified."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," The set of \u201Cselected\u201D records is updated after redrawing the records; that is, after executing the entire calling method \u2014 and not just immediately after executing ",(0,r.jsx)(t.strong,{children:"HIGHLIGHT RECORDS"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.em,{children:"aTable"})," parameter lets you designate the table where records will be \u201Chighlighted.\u201D This parameter can be used, in particular, to highlight the records of included subforms \u2014 which do not belong to the current table (see below)."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["If you pass a valid set name to ",(0,r.jsx)(t.em,{children:"setName"}),", the command is applied to the records in that set for the ",(0,r.jsx)(t.em,{children:"table"})," defined."]}),"\n",(0,r.jsxs)(t.li,{children:["If you omit the ",(0,r.jsx)(t.em,{children:"setName"})," parameter, the command only highlights the records in the current UserSet set. This set is only managed in Design mode and when calling the ",(0,r.jsx)(t.a,{href:"/docs/commands/display-selection",children:"DISPLAY SELECTION"})," /",(0,r.jsx)(t.a,{href:"/docs/commands/modify-selection",children:"MODIFY SELECTION"})," commands. If you want to highlight the records of a subform, you must pass a table name and set name. For more information about the UserSet set, refer to the ",(0,r.jsx)(t.em,{children:"Sets"})," section."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.em,{children:"*"})," parameter, when passed, disables the automatic scroll function of the list if the highlighted records are not visible. This mechanism allows customized scroll management using the ",(0,r.jsx)(t.a,{href:"/docs/commands/object-set-scroll-position",children:"OBJECT SET SCROLL POSITION"})," command."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," Regarding included subforms, the ",(0,r.jsx)(t.strong,{children:"HIGHLIGHT RECORDS"})," command does nothing if the Selection Mode property ",(0,r.jsx)(t.strong,{children:"Multiple"})," is not selected for the subform. In this case, to highlight a line, you must use the ",(0,r.jsx)(t.a,{href:"/docs/commands/goto-selected-record",children:"GOTO SELECTED RECORD"})," command."]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(t.p,{children:["In an output form displayed by the ",(0,r.jsx)(t.a,{href:"/docs/commands/modify-selection",children:"MODIFY SELECTION"})," command, you want the user to be able to perform searches without the current selection being modified. To do this, place a ",(0,r.jsx)(t.strong,{children:"Search"})," button in the form and associate it with the following method:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0SET QUERY DESTINATION(Into set;"UserSet")\n\xa0QUERY\n\xa0SET QUERY DESTINATION(Into current selection)\n\xa0HIGHLIGHT RECORDS\n'})}),"\n",(0,r.jsx)(t.p,{children:"When the user clicks the button, the standard query dialog box appears. Once the search has been validated, the records found will be highlighted without the current selection being modified."}),"\n",(0,r.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/commands/get-highlighted-records",children:"GET HIGHLIGHTED RECORDS"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/commands/object-set-scroll-position",children:"OBJECT SET SCROLL POSITION"})]}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"656"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function a(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return d}});var s=n(667294);let r={},i=s.createContext(r);function d(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);