"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62505],{559913:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=t(474848),i=t(28453);const o={id:"listbox-select-row",title:"LISTBOX SELECT ROW",slug:"/commands/listbox-select-row",displayed_sidebar:"docs"},r=void 0,c={id:"commands-legacy/listbox-select-row",title:"LISTBOX SELECT ROW",description:"LISTBOX SELECT ROW ( { ;} object ; rowPosition {; action*} )",source:"@site/versioned_docs/version-20-R7/commands-legacy/listbox-select-row.md",sourceDirName:"commands-legacy",slug:"/commands/listbox-select-row",permalink:"/docs/commands/listbox-select-row",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-select-row.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"listbox-select-row",title:"LISTBOX SELECT ROW",slug:"/commands/listbox-select-row",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"LISTBOX SELECT BREAK",permalink:"/docs/commands/listbox-select-break"},next:{title:"LISTBOX SELECT ROWS",permalink:"/docs/commands/listbox-select-rows"}},d={},l=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"LISTBOX SELECT ROW"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"object"})," ; ",(0,s.jsx)(n.em,{children:"rowPosition"})," {; ",(0,s.jsx)(n.em,{children:"action"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operator"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"If specified, object is an object name (string) If omitted, object is a variable"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Object name (if * is specified) or Variable (if * is omitted)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rowPosition"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Number of the row to select"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"action"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Selection action"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The LISTBOX SELECT ROW command selects the row whose number is passed in ",(0,s.jsx)(n.em,{children:"position"})," in the list box set in the ",(0,s.jsx)(n.em,{children:"object"})," and ",(0,s.jsx)(n.em,{children:"*"})," parameters."]}),"\n",(0,s.jsxs)(n.p,{children:["If you pass the optional ",(0,s.jsx)(n.em,{children:"*"})," parameter, you indicate that the ",(0,s.jsx)(n.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, you indicate that the ",(0,s.jsx)(n.em,{children:"object"})," parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the ",(0,s.jsx)(n.em,{children:"Object Properties"})," section."]}),"\n",(0,s.jsxs)(n.p,{children:["The optional ",(0,s.jsx)(n.em,{children:"action"})," parameter, if passed, is used to define the selection action to execute when a selection of rows already exists in the list box. You can pass a value or one of the following constants (located in the \u201c",(0,s.jsx)(n.em,{children:"List Box"}),"\u201d theme):"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Value"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"lk add to selection"}),(0,s.jsx)(n.td,{children:"Longint"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"The row selected is added to the existing selection. If the row specified already belongs to the existing selection, the command does nothing."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"lk remove from selection"}),(0,s.jsx)(n.td,{children:"Longint"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"The row selected is removed from the existing selection. If the row specified does not belong to the existing selection, the command does nothing."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"lk replace selection"}),(0,s.jsx)(n.td,{children:"Longint"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsxs)(n.td,{children:["The row selected becomes the new selection and replaces the existing selection. The command has the same effect as a user click on a row (however, the On Clicked event is not generated). This is the default action (if the ",(0,s.jsx)(n.em,{children:"action"})," parameter is omitted)."]})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["When the ",(0,s.jsx)(n.em,{children:"position"})," parameter does not correspond exactly to an existing row number, the command works as follows:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.em,{children:"position"})," is <0, the command does nothing, regardless of the ",(0,s.jsx)(n.em,{children:"action"})," parameter value."]}),"\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.em,{children:"position"})," is 0 and if the ",(0,s.jsx)(n.em,{children:"action"})," parameter contains lk replace selection or is omitted, all the rows of the listbox are selected. If the ",(0,s.jsx)(n.em,{children:"action"})," parameter contains lk remove from selection, all the listbox rows are deselected."]}),"\n",(0,s.jsxs)(n.li,{children:["If the ",(0,s.jsx)(n.em,{children:"position"})," value is greater than the total number of rows contained in the listbox (only in the case of an array type listbox), the Boolean array associated with the listbox is automatically resized and the selection action is carried out. This mechanism means that you can use LISTBOX SELECT ROW with \u201cstandard\u201d array management commands (such as ",(0,s.jsx)(n.a,{href:"/docs/commands/append-to-array",children:"APPEND TO ARRAY"}),") that do not cause immediate synchronization of the listbox.",(0,s.jsx)(n.br,{}),"\nAfter execution of the method, the arrays are synchronized: if the source array of the listbox has indeed been resized, the selection action is carried out. Otherwise, the Boolean array associated with the listbox returns to its initial size and the command does nothing."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If you want the list box to scroll automatically in order to display the row selected, use the ",(0,s.jsx)(n.a,{href:"/docs/commands/object-set-scroll-position",children:"OBJECT SET SCROLL POSITION"})," command."]}),"\n",(0,s.jsxs)(n.li,{children:["To switch a row into editing mode (to allow data entry), use the ",(0,s.jsx)(n.a,{href:"/docs/commands/edit-item",children:"EDIT ITEM"})," command."]}),"\n",(0,s.jsxs)(n.li,{children:["If the number passed in ",(0,s.jsx)(n.em,{children:"position"})," corresponds to a hidden row in the list box, the row is selected but not displayed."]}),"\n",(0,s.jsxs)(n.li,{children:["If you have checked the ",(0,s.jsx)(n.strong,{children:"Hide selection highlight"})," option for a list box, you will need to make list box selections visible using available interface options. For more information about how to do this, see ",(0,s.jsx)(n.em,{children:"Customizing the appearance of selections"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/edit-item",children:"EDIT ITEM"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/listbox-delete-rows",children:"LISTBOX DELETE ROWS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/listbox-insert-rows",children:"LISTBOX INSERT ROWS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/listbox-select-break",children:"LISTBOX SELECT BREAK"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/listbox-select-rows",children:"LISTBOX SELECT ROWS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/object-set-scroll-position",children:"OBJECT SET SCROLL POSITION"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(296540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);