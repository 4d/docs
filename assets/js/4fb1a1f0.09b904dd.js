"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66977"],{630953:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>d,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/listbox-set-footer-calculation","title":"LISTBOX SET FOOTER CALCULATION","description":"LISTBOX SET FOOTER CALCULATION ( { ;} object ; calculation* )","source":"@site/versioned_docs/version-20-R8/commands-legacy/listbox-set-footer-calculation.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-footer-calculation","permalink":"/docs/20-R8/commands/listbox-set-footer-calculation","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-footer-calculation.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-set-footer-calculation","title":"LISTBOX SET FOOTER CALCULATION","slug":"/commands/listbox-set-footer-calculation","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET COLUMN WIDTH","permalink":"/docs/20-R8/commands/listbox-set-column-width"},"next":{"title":"LISTBOX SET FOOTERS HEIGHT","permalink":"/docs/20-R8/commands/listbox-set-footers-height"}}'),r=n("785893"),o=n("250065");let i={id:"listbox-set-footer-calculation",title:"LISTBOX SET FOOTER CALCULATION",slug:"/commands/listbox-set-footer-calculation",displayed_sidebar:"docs"},l=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let t={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"LISTBOX SET FOOTER CALCULATION"})," ( {* ;} ",(0,r.jsx)(t.em,{children:"object"})," ; ",(0,r.jsx)(t.em,{children:"calculation"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"*"}),(0,r.jsx)(t.td,{children:"Operator"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"If specified, object is an object name (string)If omitted, object is a variable"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"object"}),(0,r.jsx)(t.td,{children:"any"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Object name (if * is specified) or Variable (if * is omitted)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"calculation"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Calculation for footer area"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"LISTBOX SET FOOTER CALCULATION"})," command sets the automatic calculation associated with the footer of the list box designated by the ",(0,r.jsx)(t.em,{children:"object"})," and ",(0,r.jsx)(t.em,{children:"*"})," parameters ."]}),"\n",(0,r.jsxs)(t.p,{children:["If you pass the optional ",(0,r.jsx)(t.em,{children:"*"})," parameter, this indicates that the ",(0,r.jsx)(t.em,{children:"object"})," parameter is an object name (a string).If you do not pass this parameter, this indicates that the object is a variable. In this case, you pass a variable reference instead of a string.",(0,r.jsx)(t.br,{}),"\nThe ",(0,r.jsx)(t.em,{children:"object"})," parameter can designate:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"the variable or name of a footer area. In this case, the command applies to this area."}),"\n",(0,r.jsx)(t.li,{children:"the variable or name of a list box column. In this case, the command applies to the footer area of this column."}),"\n",(0,r.jsx)(t.li,{children:"the variable or name of a list box. In this case, the command applies to all the footer areas of the list box."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.em,{children:"calculation"})," parameter, pass one of the following constants, found in the ",(0,r.jsx)(t.em,{children:"Listbox Footer Calculation"})," theme, in order to set the calculation to be performed:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Constant"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Value"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Listbox footer std deviation"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"7"}),(0,r.jsxs)(t.td,{children:["Used with number or time type columns (only for array type list boxes)",(0,r.jsx)(t.br,{}),"Default type of the result: Real"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lk footer average"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"6"}),(0,r.jsxs)(t.td,{children:["Used with number or time type columns",(0,r.jsx)(t.br,{}),"Default type of the result: Real"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lk footer count"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"5"}),(0,r.jsxs)(t.td,{children:["Used with number, text, date, time, Boolean or picture type columns",(0,r.jsx)(t.br,{}),"Default type of the result: Longint"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lk footer custom"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsxs)(t.td,{children:["No calculation performed by 4D. The footer variable must be calculated by programming.",(0,r.jsx)(t.br,{}),"Default type of the result: Footer variable type"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lk footer max"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"3"}),(0,r.jsxs)(t.td,{children:["Used with number, date, time or Boolean type columns",(0,r.jsx)(t.br,{}),"Default type of the result: Column array or field type"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lk footer min"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"2"}),(0,r.jsxs)(t.td,{children:["Used with number, date, time or Boolean type columns",(0,r.jsx)(t.br,{}),"Default type of the result: Column array or field type"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lk footer sum"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"4"}),(0,r.jsxs)(t.td,{children:["Used with number, time or Boolean type columns",(0,r.jsx)(t.br,{}),"Default type of the result: Column array or field type"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lk footer sum squares"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"9"}),(0,r.jsxs)(t.td,{children:["Used with number or time type columns (only for array type list boxes)",(0,r.jsx)(t.br,{}),"Default type of the result: Real"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lk footer variance"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"8"}),(0,r.jsxs)(t.td,{children:["Used with number or time type columns (only for array type list boxes)",(0,r.jsx)(t.br,{}),"Default type of the result: Real"]})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Note that predefined calculations take all the values of the column into account, including those of any hidden rows. If you want to restrict a calculation to only visible rows, you must use the lk footer custom constant and perform a customized calculation."}),"\n",(0,r.jsxs)(t.p,{children:["If the data type of a column or of even one column of the list box (when object designate a whole list box) is not compatible with the ",(0,r.jsx)(t.em,{children:"calculation"})," set, the footer is not modified and the error 18 is generated. If a column contains a formula (selection type list box), the error 10 is generated."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," Footer area variables are typed automatically (when there are not typed through the code) with regards to the calculation set in the Property List (see ",(0,r.jsx)(t.em,{children:"List box footer specific properties"}),"). If the variable data type does not correspond to the result expected by the ",(0,r.jsx)(t.strong,{children:"LISTBOX SET FOOTER CALCULATION"})," command, a typing error is generated. For example, for a column displaying dates, if the footer calculation is 'Maximum', the ",(0,r.jsx)(t.em,{children:"footer"})," variable will be typed as Date. At this point, if you execute the statement ",(0,r.jsx)(t.strong,{children:"LISTBOX SET FOOTER CALCULATION"}),"(footer;lk footer count), an error is generated because the expected data type of the result (longint) differs from the actual variable data type."]}),"\n",(0,r.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/20-R8/commands/listbox-get-footer-calculation",children:"LISTBOX Get footer calculation"})}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"1140"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return i}});var s=n(667294);let r={},o=s.createContext(r);function i(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);