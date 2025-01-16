"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24512"],{797945:function(e,s,t){t.r(s),t.d(s,{default:()=>a,frontMatter:()=>i,metadata:()=>n,assets:()=>c,toc:()=>o,contentTitle:()=>l});var n=JSON.parse('{"id":"commands-legacy/get-highlighted-records","title":"GET HIGHLIGHTED RECORDS","description":"GET HIGHLIGHTED RECORDS ( {aTable ;} setName )","source":"@site/versioned_docs/version-20-R8/commands-legacy/get-highlighted-records.md","sourceDirName":"commands-legacy","slug":"/commands/get-highlighted-records","permalink":"/docs/commands/get-highlighted-records","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-highlighted-records.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-highlighted-records","title":"GET HIGHLIGHTED RECORDS","slug":"/commands/get-highlighted-records","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FIRST RECORD","permalink":"/docs/commands/first-record"},"next":{"title":"GOTO SELECTED RECORD","permalink":"/docs/commands/goto-selected-record"}}'),r=t("785893"),d=t("250065");let i={id:"get-highlighted-records",title:"GET HIGHLIGHTED RECORDS",slug:"/commands/get-highlighted-records",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function h(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"GET HIGHLIGHTED RECORDS"})," ( {",(0,r.jsx)(s.em,{children:"aTable"})," ;} ",(0,r.jsx)(s.em,{children:"setName"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aTable"}),(0,r.jsx)(s.td,{children:"Table"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Table where the highlighted records will be read If omitted, table of the current form"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"setName"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Set where the highlighted records will be stored"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.strong,{children:"GET HIGHLIGHTED RECORDS"})," command stores in the set designated by the ",(0,r.jsx)(s.em,{children:"setName"})," parameter the highlighted records (i.e., the records highlighted by the user in the list form) in the ",(0,r.jsx)(s.em,{children:"aTable"})," passed as parameter. If the ",(0,r.jsx)(s.em,{children:"aTable"})," parameter is omitted, the table of the current form or subform is used."]}),"\n",(0,r.jsxs)(s.p,{children:["In Design mode or when executing the ",(0,r.jsx)(s.a,{href:"/docs/commands/display-selection",children:"DISPLAY SELECTION"})," /",(0,r.jsx)(s.a,{href:"/docs/commands/modify-selection",children:"MODIFY SELECTION"})," commands, this command can be replaced by calling the UserSet system set which is automatically maintained by 4D. However, since this command allows you to pick the table that will receive highlighted records, the GET HIGHLIGHTED RECORDS command can also manage record selections in subforms as well. In this case, subform selections can also come from different tables. For more information about the UserSet set, refer to the ",(0,r.jsx)(s.em,{children:"Sets"})," section."]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.strong,{children:"GET HIGHLIGHTED RECORDS"})," command can also be called in a non-form context; however, the returned set is empty.",(0,r.jsx)(s.br,{}),"\nThe set designated by ",(0,r.jsx)(s.em,{children:"setName"})," can be local/client, process or interprocess."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note:"})," In included subforms, the ",(0,r.jsx)(s.strong,{children:"GET HIGHLIGHTED RECORDS"})," command returns an empty set if the subform does not have the ",(0,r.jsx)(s.strong,{children:"Multiple"})," Selection Mode property. In this case, to find out the selected row, you must use the ",(0,r.jsx)(s.a,{href:"/docs/commands/selected-record-number",children:"Selected record number"})," command."]}),"\n",(0,r.jsx)(s.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(s.p,{children:"This method indicates how many records are selected in the subform displaying the records of the [CDs] table:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0GET HIGHLIGHTED RECORDS([CDs];"$highlight")\n\xa0ALERT(String(Records in set("$highlight"))"+"selected records.")\n\xa0CLEAR SET("$highlight")\n'})}),"\n",(0,r.jsx)(s.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,r.jsx)(s.p,{children:"If the command was executed properly, the system variable OK is set to 1. Otherwise, it is set to 0."}),"\n",(0,r.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/commands/highlight-records",children:"HIGHLIGHT RECORDS"})}),"\n",(0,r.jsx)(s.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Command number"}),(0,r.jsx)(s.td,{children:"902"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread safe"}),(0,r.jsx)(s.td,{children:"\u2717"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Modifies variables"}),(0,r.jsx)(s.td,{children:"OK"})]})]})]})]})}function a(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,s,t){t.d(s,{Z:function(){return l},a:function(){return i}});var n=t(667294);let r={},d=n.createContext(r);function i(e){let s=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);